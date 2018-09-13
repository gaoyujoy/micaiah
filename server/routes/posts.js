import controller from './tools/controller'
import * as api from './tools/api.js';

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
    }
}
 