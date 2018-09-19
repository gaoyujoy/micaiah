import controller from './tools/controller'
var moment = require('moment');
import { Feed } from "feed"
import marked from "marked"

export default class extends controller {

    renders() {
        
    }

    actions() {
        this.router.get('/posts', async (ctx, next) => {
            var params = ctx.request.query;
            var page = params.page || 1;
            var where = {};
            var data = await this.DBModule.Blog.featchBlogs(where, (page - 1) * 10, 10);
            var tagsData = await this.DBModule.Tag.featchTags({});
            if (data.data && data.data.length > 0) { 
                var newDatas = [];
                this._.each(data.data, item => { 
                    var newData = item.toObject();
                    newData.created_at = item.created_at;
                    newData.tagName = (this._.filter(tagsData.data, item2 => {
                        return item2._id == item.tag
                    })[0] || {}).title;
                    newDatas.push(newData);
                })
                data = { code: 0, data: newDatas };
            }
            var count = await this.DBModule.Blog.featchAllBlogs(where);
            data.total = count.total;
            ctx.body = data;
        });
        this.router.get('/about', async (ctx, next) => {
            ctx.body = await this.DBModule.Aboutme.featchAboutme();
        });
        this.router.get('/post', async (ctx, next) => {
            var id = ctx.request.query.id;
            var data = await this.DBModule.Blog.getBlog(id);
            var tagsData = await this.DBModule.Tag.featchTags({});
            var newData = data.data.toObject();
            newData.created_at = data.data.created_at;
            newData.tagName = (this._.filter(tagsData.data, item2 => {
                return item2._id == data.data.tag
            })[0] || {}).title;
            ctx.body = { code: 0, data: newData };
        });
        this.router.get('/tags', async (ctx, next) => {
            var params = ctx.request.query;
            var page = params.page || 1;
            var keyword = params.key || '';
            var tagId = params.id || '';
            var where = {};
            if (tagId != '') { 
                where.tag = tagId;
            }
            if (keyword != '') { 
                where.title = { $regex: `${keyword}` };
            }
            var tags = await this.DBModule.Tag.featchTags({});
            var blogs = await this.DBModule.Blog.featchCountByTag();
            var newTags = [];
            this._.each(tags.data, item => {
                newTags.push({
                    _id: item._id, title: item.title, count: (this._.filter(blogs.data, item2 => {
                        return item2._id == item._id;
                    })[0] || {}).count || 0
                });
            });
            var blogsData = await this.DBModule.Blog.featchBlogs(where, (page - 1) * 50, 50);
            var blogsDataNew = [];
            this._.each(blogsData.data, item => {
                var thisItem = item.toObject();
                var newItem = this._.filter(blogsDataNew, item2 => { return item2.year == thisItem.date.getFullYear(); })[0];
                if (newItem) {
                    newItem.list.push({ _id: thisItem._id, time: moment(thisItem.date).format('MM月DD日'), title: thisItem.title });
                } else { 
                    blogsDataNew.push({ year: thisItem.date.getFullYear(), list: [{ _id: thisItem._id, time: moment(thisItem.date).format('MM月DD日'), title: thisItem.title }] });
                }
            });
            var blogsData = await this.DBModule.Blog.featchAllBlogs(where);
            ctx.body = { code: 0, data: newTags, blogs: blogsDataNew, count: blogsData.total };
        });
        this.router.get('/feed', async (ctx, next) => { 
            const feed = new Feed({
                title: "Micaiah's BLog",
                description: "This is my personal feed!",
                id: "http://example.com/",
                link: "http://micaiah.cn",
                image: "http://micaiah.cn/img/bg.jpg",
                favicon: "http://micaiah.cn/micaiah.ico",
                copyright: "Micaiah's Site "+(new Date()).getFullYear(),
                updated: new Date(2018, 9, 19), // optional, default = today
                generator: "Feed for Node.js", // optional, default = 'Feed for Node.js'
                author: {
                  name: "Micaiah",
                  email: "1058745498@qq.com",
                  link: "http://micaiah.cn"
                }
            });
            var blogs = await this.DBModule.Blog.featchBlogs({}, 0, 5);
            this._.forEach(blogs.data, blog => {
                var item = blog.toObject();
                feed.addItem({
                    title: item.title.toString(),
                    id: item._id,
                    link: 'http://micaiah.cn/blog/' + item._id,
                    description: marked(item.info||''),
                    content: marked(item.content||''),
                    category: ["blog"],
                    author: [
                        {
                            name: "Micaiah",
                            email: "1058745498@qq.com",
                            link: "http://micaiah.cn"
                        }
                    ],
                    date: item.date
                });
            });
            feed.addCategory("Technologie");
            ctx.response.type = 'xml';
            ctx.body = feed.rss2();
        });
    }
}
 