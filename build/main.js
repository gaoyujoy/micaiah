require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_js__ = __webpack_require__(2);

var _ = __webpack_require__(3);

/* harmony default export */ __webpack_exports__["default"] = (class {

  constructor(router, DBModule, app) {
    this.router = router;
    this.DBModule = DBModule;
    this.api = __WEBPACK_IMPORTED_MODULE_0__api_js__;
    this.app = app;
    this._ = _;
  }

  init() {
    this.renders();
    this.actions();
  }

  renders() {}

  actions() {}
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["encryption"] = encryption;

function encryption(str) {}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_controller__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_feed__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_feed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_feed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_marked__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_marked__);

var moment = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["default"] = (class extends __WEBPACK_IMPORTED_MODULE_0__tools_controller__["default"] {

    renders() {}

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
                        return item2._id == item.tag;
                    })[0] || {}).title;
                    newDatas.push(newData);
                });
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
                return item2._id == data.data.tag;
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
                var newItem = this._.filter(blogsDataNew, item2 => {
                    return item2.year == thisItem.date.getFullYear();
                })[0];
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
            const feed = new __WEBPACK_IMPORTED_MODULE_1_feed__["Feed"]({
                title: "Gaoyu's BLog",
                description: "This is my personal feed!",
                id: "http://example.com/",
                link: "http://gaoyurz.com",
                image: "http://gaoyurz.com/img/bg.jpg",
                favicon: "http://gaoyurz.com/micaiah.ico",
                copyright: "Gaoyu's Site " + new Date().getFullYear(),
                updated: new Date(2018, 9, 19), // optional, default = today
                generator: "Feed for Node.js", // optional, default = 'Feed for Node.js'
                author: {
                    name: "Gaoyu",
                    email: "1058745498@qq.com",
                    link: "http://gaoyurz.com"
                }
            });
            var blogs = await this.DBModule.Blog.featchBlogs({}, 0, 5);
            this._.forEach(blogs.data, blog => {
                var item = blog.toObject();
                feed.addItem({
                    title: item.title.toString(),
                    id: item._id,
                    link: 'http://gaoyurz.com/blog/' + item._id,
                    description: __WEBPACK_IMPORTED_MODULE_2_marked___default()(item.info || ''),
                    content: __WEBPACK_IMPORTED_MODULE_2_marked___default()(item.content || ''),
                    category: ["blog"],
                    author: [{
                        name: "Gaoyu",
                        email: "1058745498@qq.com",
                        link: "http://gaoyurz.com"
                    }],
                    date: item.date
                });
            });
            feed.addCategory("Technologie");
            ctx.response.type = 'xml';
            ctx.body = feed.rss2();
        });
    }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_modules_js__ = __webpack_require__(11);







async function start() {
    const app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
    const host = process.env.HOST || '172.24.171.207';
    const port = process.env.PORT || 3000;

    //数据库配置
    const mongoOptions = {
        user: 'micaiah',
        pass: 'GjY321456',
        useNewUrlParser: true
    };
    __WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connect(`mongodb://127.0.0.1:27017/micaiahblog`, mongoOptions); // 数据库链接
    const db = __WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connection;
    const DBModule = new __WEBPACK_IMPORTED_MODULE_5__modules_modules_js__["a" /* default */](__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a);
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('openUri', function (callback) {
        console.log("db opened");
    });

    const router = __WEBPACK_IMPORTED_MODULE_2_koa_router___default()({
        prefix: '/api'
    });
    //导入路由
    const addRouters = path => {
        var files = __WEBPACK_IMPORTED_MODULE_3_fs___default.a.readdirSync(path);
        var js_files = files.filter(f => {
            return f.endsWith('.js');
        }, files);
        js_files.forEach(name => {
            new (__webpack_require__(15)(`./${name}`).default)(router, DBModule, app).init();
        });
    };
    addRouters(__dirname + '/routes');
    app.use(router.routes(), router.allowedMethods());

    // Import and Set Nuxt.js options
    let config = __webpack_require__(18);
    config.dev = !(app.env === 'production');

    // Instantiate nuxt.js
    const nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

    // Build in development
    if (config.dev) {
        const builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
        await builder.build();
    }

    app.use(async (ctx, next) => {
        await next();
        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
        return new Promise((resolve, reject) => {
            ctx.res.on('close', resolve);
            ctx.res.on('finish', resolve);
            nuxt.render(ctx.req, ctx.res, promise => {
                // nuxt.render passes a rejected promise into callback on error.
                promise.then(resolve).catch(reject);
            });
        });
    });

    app.listen(port, host);
    console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console
}

start();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "server"))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ = __webpack_require__(3);

/* harmony default export */ __webpack_exports__["a"] = (class {
				constructor(mongoose) {
								this.Blog = new (__webpack_require__(12).default)(mongoose);
								this.Tag = new (__webpack_require__(13).default)(mongoose);
								this.Aboutme = new (__webpack_require__(14).default)(mongoose);
				}
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var moment = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (class {
    constructor(mongoose) {

        var Schema = mongoose.Schema;

        var blogSchema = new Schema({
            title: String,
            content: String,
            tag: String,
            info: String,
            photo: String,
            view: {
                type: Number,
                default: 0
            },
            updateDate: {
                type: Date,
                default: Date.now
            }, // 修改时间
            date: {
                type: Date,
                default: Date.now // 创建时间
            } });
        blogSchema.virtual('created_at').get(function () {
            return moment(this.date).format('YYYY年MM月DD日 HH:mm:ss');
        });
        blogSchema.virtual('updated_at').get(function () {
            return moment(this.updateDate).format('YYYY-MM-DD HH:mm:ss');
        });
        var Blog = mongoose.model('Blog', blogSchema);

        this.getBlog = _id => {
            return new Promise((resolve, reject) => {
                Blog.findOne({ _id: _id }, (err, data) => {
                    if (err) {
                        reject('数据库错误');
                    } else {
                        resolve({ code: 0, data: data });
                    }
                });
            });
        };

        this.updateBlog = (_id, blogInfo) => {
            return new Promise((resolve, reject) => {
                blogInfo.updateDate = Date.now();
                Blog.update({ _id: _id }, { $set: blogInfo }, (err, data) => {
                    if (err) {
                        reject('数据库错误');
                    } else {
                        resolve({ code: 0, msg: '修改成功', data: data });
                    }
                });
            });
        };

        this.featchBlogs = (where, skip, limit) => {
            return new Promise((resolve, reject) => {
                Blog.find(where).skip(skip).limit(limit).sort({ date: -1 }).exec(function (err, data) {
                    if (err) {
                        reject('数据库错误');
                    } else {
                        resolve({ code: 0, data: data });
                    }
                });
            });
        };

        this.featchAllBlogs = where => {
            return new Promise((resolve, reject) => {
                Blog.find(where, '_id').exec((err, count) => {
                    if (err) {
                        reject('数据库错误');
                    } else {
                        resolve({ code: 0, total: count ? count.length : 0 });
                    }
                });
            });
        };

        this.featchCountByTag = () => {
            return new Promise((resolve, reject) => {
                Blog.aggregate([{ '$group': { _id: '$tag', count: { $sum: 1 } } }]).exec((err, data) => {
                    if (err) {
                        reject('数据库错误');
                    } else {
                        resolve({ code: 0, data: data });
                    }
                });
            });
        };
    }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var moment = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (class {
    constructor(mongoose) {

        var Schema = mongoose.Schema;

        var tagSchema = new Schema({
            title: String,
            updateDate: {
                type: Date,
                default: Date.now
            }, // 修改时间
            date: {
                type: Date,
                default: Date.now // 创建时间
            } });
        tagSchema.virtual('created_at').get(function () {
            return moment(this.date).format('YYYY-MM-DD hh:mm:ss');
        });
        tagSchema.virtual('updated_at').get(function () {
            return moment(this.updateDate).format('YYYY-MM-DD hh:mm:ss');
        });
        var Tag = mongoose.model('Tag', tagSchema);

        this.featchTags = where => {
            return new Promise((resolve, reject) => {
                Tag.find(where).sort({ date: -1 }).exec(function (err, data) {
                    if (err) {
                        reject('数据库错误');
                    } else {
                        resolve({ code: 0, data: data });
                    }
                });
            });
        };
    }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var moment = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["default"] = (class {
    constructor(mongoose) {

        var Schema = mongoose.Schema;

        var aboutmeSchema = new Schema({
            content: String,
            updateDate: {
                type: Date,
                default: Date.now
            }, // 修改时间
            date: {
                type: Date,
                default: Date.now // 创建时间
            } });
        aboutmeSchema.virtual('created_at').get(function () {
            return moment(this.date).format('YYYY-MM-DD hh:mm:ss');
        });
        aboutmeSchema.virtual('updated_at').get(function () {
            return moment(this.updateDate).format('YYYY-MM-DD hh:mm:ss');
        });
        var Aboutme = mongoose.model('Aboutme', aboutmeSchema);

        this.featchAboutme = () => {
            return new Promise((resolve, reject) => {
                Aboutme.findOne({}, (err, data) => {
                    if (err) {
                        reject('数据库错误');
                    } else {
                        resolve({ code: 0, data: data });
                    }
                });
            });
        };
    }
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./posts": 4,
	"./posts.js": 4,
	"./tools/api": 2,
	"./tools/api.js": 2,
	"./tools/controller": 1,
	"./tools/controller.js": 1
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 15;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("feed");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://172.24.171.207:3000'
  },
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/micaiah.ico' }]
  },
  /*
  ** Global CSS
  */
  /*
  ** Customize the progress-bar color
  */
  css: ['highlight.js/styles/railscasts.css', '~assets/css/assets.css', '~assets/css/common.less', '~assets/css/fontello.css'],
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    vendor: ['axios', 'highlight.js', 'marked'],
    extend(config, ctx) {
      // if (ctx.isClient) {
      //   config.module.rules.push({
      //     test: /\.vue$/,
      //     loader: 'vue-loader',
      //     options: require('./vue-loader.conf')
      //   })
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     exclude: /(node_modules)/
      //   })
      // }
      // if (ctx.isClient) { 

      // }
    }
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map