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
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("moment");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony export (immutable) */ exports["encryption"] = encryption;

function encryption(str) {

    console.log('aaaaaaaaa');
}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_js__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var _ = __webpack_require__(5);

var _class = function () {
  function _class(router, DBModule, app) {
    _classCallCheck(this, _class);

    this.router = router;
    this.DBModule = DBModule;
    this.api = __WEBPACK_IMPORTED_MODULE_0__api_js__;
    this.app = app;
    this._ = _;
  }

  _createClass(_class, [{
    key: "init",
    value: function init() {
      this.renders();
      this.actions();
    }
  }, {
    key: "renders",
    value: function renders() {}
  }, {
    key: "actions",
    value: function actions() {}
  }]);

  return _class;
}();

/* harmony default export */ exports["default"] = _class;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_controller__ = __webpack_require__(2);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var moment = __webpack_require__(0);

var _class = function (_controller) {
    _inherits(_class, _controller);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
        key: 'renders',
        value: function renders() {}
    }, {
        key: 'actions',
        value: function actions() {
            var _this2 = this;

            this.router.get('/posts', function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                    var params, page, where, data, tagsData, newDatas, count;
                    return __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    params = ctx.request.query;
                                    page = params.page || 1;
                                    where = {};
                                    _context.next = 5;
                                    return _this2.DBModule.Blog.featchBlogs(where, (page - 1) * 10, 10);

                                case 5:
                                    data = _context.sent;
                                    _context.next = 8;
                                    return _this2.DBModule.Tag.featchTags({});

                                case 8:
                                    tagsData = _context.sent;

                                    if (data.data && data.data.length > 0) {
                                        newDatas = [];

                                        _this2._.each(data.data, function (item) {
                                            var newData = item.toObject();
                                            newData.created_at = item.created_at;
                                            newData.tagName = (_this2._.filter(tagsData.data, function (item2) {
                                                return item2._id == item.tag;
                                            })[0] || {}).title;
                                            newDatas.push(newData);
                                        });
                                        data = { code: 0, data: newDatas };
                                    }
                                    _context.next = 12;
                                    return _this2.DBModule.Blog.featchAllBlogs(where);

                                case 12:
                                    count = _context.sent;

                                    data.total = count.total;
                                    ctx.body = data;

                                case 15:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }));

                return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                };
            }());
            this.router.get('/about', function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
                    return __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return _this2.DBModule.Aboutme.featchAboutme();

                                case 2:
                                    ctx.body = _context2.sent;

                                case 3:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, _this2);
                }));

                return function (_x3, _x4) {
                    return _ref2.apply(this, arguments);
                };
            }());
            this.router.get('/post', function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
                    var id, data, tagsData, newData;
                    return __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    id = ctx.request.query.id;
                                    _context3.next = 3;
                                    return _this2.DBModule.Blog.getBlog(id);

                                case 3:
                                    data = _context3.sent;
                                    _context3.next = 6;
                                    return _this2.DBModule.Tag.featchTags({});

                                case 6:
                                    tagsData = _context3.sent;
                                    newData = data.data.toObject();

                                    newData.created_at = data.data.created_at;
                                    newData.tagName = (_this2._.filter(tagsData.data, function (item2) {
                                        return item2._id == data.data.tag;
                                    })[0] || {}).title;
                                    ctx.body = { code: 0, data: newData };

                                case 11:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, _this2);
                }));

                return function (_x5, _x6) {
                    return _ref3.apply(this, arguments);
                };
            }());
            this.router.get('/tags', function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
                    var params, page, keyword, tagId, where, tags, blogs, newTags, blogsData, blogsDataNew;
                    return __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    params = ctx.request.query;
                                    page = params.page || 1;
                                    keyword = params.key || '';
                                    tagId = params.id || '';
                                    where = {};

                                    if (tagId != '') {
                                        where.tag = tagId;
                                    }
                                    if (keyword != '') {
                                        where.title = { $regex: '' + keyword };
                                    }
                                    _context4.next = 9;
                                    return _this2.DBModule.Tag.featchTags({});

                                case 9:
                                    tags = _context4.sent;
                                    _context4.next = 12;
                                    return _this2.DBModule.Blog.featchCountByTag();

                                case 12:
                                    blogs = _context4.sent;
                                    newTags = [];

                                    _this2._.each(tags.data, function (item) {
                                        newTags.push({
                                            _id: item._id, title: item.title, count: (_this2._.filter(blogs.data, function (item2) {
                                                return item2._id == item._id;
                                            })[0] || {}).count || 0
                                        });
                                    });
                                    _context4.next = 17;
                                    return _this2.DBModule.Blog.featchBlogs(where, (page - 1) * 50, 50);

                                case 17:
                                    blogsData = _context4.sent;
                                    blogsDataNew = [];

                                    _this2._.each(blogsData.data, function (item) {
                                        var thisItem = item.toObject();
                                        var newItem = _this2._.filter(blogsDataNew, function (item2) {
                                            return item2.year == thisItem.date.getFullYear();
                                        })[0];
                                        if (newItem) {
                                            newItem.list.push({ _id: thisItem._id, time: moment(thisItem.date).format('MM月DD日'), title: thisItem.title });
                                        } else {
                                            blogsDataNew.push({ year: thisItem.date.getFullYear(), list: [{ _id: thisItem._id, time: moment(thisItem.date).format('MM月DD日'), title: thisItem.title }] });
                                        }
                                    });
                                    _context4.next = 22;
                                    return _this2.DBModule.Blog.featchAllBlogs(where);

                                case 22:
                                    blogsData = _context4.sent;

                                    ctx.body = { code: 0, data: newTags, blogs: blogsDataNew, count: blogsData.total };

                                case 24:
                                case 'end':
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, _this2);
                }));

                return function (_x7, _x8) {
                    return _ref4.apply(this, arguments);
                };
            }());
        }
    }]);

    return _class;
}(__WEBPACK_IMPORTED_MODULE_1__tools_controller__["default"]);

/* harmony default export */ exports["default"] = _class;

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("underscore");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  /*
  ** Customize the progress-bar color
  */
  css: ['~assets/css/assets.css', '~assets/css/common.less', '~assets/css/fontello.css'],
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    vendor: ['axios'],
    extend: function extend(config, ctx) {
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = __webpack_require__(5);

var _class = function _class(mongoose) {
				_classCallCheck(this, _class);

				this.Blog = new (__webpack_require__(15).default)(mongoose);
				this.Tag = new (__webpack_require__(16).default)(mongoose);
				this.Aboutme = new (__webpack_require__(14).default)(mongoose);
};

/* harmony default export */ exports["a"] = _class;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./posts": 4,
	"./posts.js": 4,
	"./tools/api": 1,
	"./tools/api.js": 1,
	"./tools/controller": 2,
	"./tools/controller.js": 2
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 8;


/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var moment = __webpack_require__(0);

var _class = function _class(mongoose) {
    _classCallCheck(this, _class);

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

    this.featchAboutme = function () {
        return new Promise(function (resolve, reject) {
            Aboutme.findOne({}, function (err, data) {
                if (err) {
                    reject('数据库错误');
                } else {
                    resolve({ code: 0, data: data });
                }
            });
        });
    };
};

/* harmony default export */ exports["default"] = _class;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var moment = __webpack_require__(0);

var _class = function _class(mongoose) {
    _classCallCheck(this, _class);

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

    this.getBlog = function (_id) {
        return new Promise(function (resolve, reject) {
            Blog.findOne({ _id: _id }, function (err, data) {
                if (err) {
                    reject('数据库错误');
                } else {
                    resolve({ code: 0, data: data });
                }
            });
        });
    };

    this.updateBlog = function (_id, blogInfo) {
        return new Promise(function (resolve, reject) {
            blogInfo.updateDate = Date.now();
            Blog.update({ _id: _id }, { $set: blogInfo }, function (err, data) {
                if (err) {
                    reject('数据库错误');
                } else {
                    resolve({ code: 0, msg: '修改成功', data: data });
                }
            });
        });
    };

    this.featchBlogs = function (where, skip, limit) {
        return new Promise(function (resolve, reject) {
            Blog.find(where).skip(skip).limit(limit).sort({ date: -1 }).exec(function (err, data) {
                if (err) {
                    reject('数据库错误');
                } else {
                    resolve({ code: 0, data: data });
                }
            });
        });
    };

    this.featchAllBlogs = function (where) {
        return new Promise(function (resolve, reject) {
            Blog.find(where, '_id').exec(function (err, count) {
                if (err) {
                    reject('数据库错误');
                } else {
                    resolve({ code: 0, total: count ? count.length : 0 });
                }
            });
        });
    };

    this.featchCountByTag = function () {
        return new Promise(function (resolve, reject) {
            Blog.aggregate([{ '$group': { _id: '$tag', count: { $sum: 1 } } }]).exec(function (err, data) {
                if (err) {
                    reject('数据库错误');
                } else {
                    resolve({ code: 0, data: data });
                }
            });
        });
    };
};

/* harmony default export */ exports["default"] = _class;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var moment = __webpack_require__(0);

var _class = function _class(mongoose) {
    _classCallCheck(this, _class);

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

    this.featchTags = function (where) {
        return new Promise(function (resolve, reject) {
            Tag.find(where).sort({ date: -1 }).exec(function (err, data) {
                if (err) {
                    reject('数据库错误');
                } else {
                    resolve({ code: 0, data: data });
                }
            });
        });
    };
};

/* harmony default export */ exports["default"] = _class;

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mongoose__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_modules_js__ = __webpack_require__(7);


var start = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _this = this;

        var app, host, port, mongoOptions, db, DBModule, router, addRouters, config, nuxt, builder;
        return __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
                        host = process.env.HOST || '127.0.0.1';
                        port = process.env.PORT || 80;

                        //数据库配置

                        mongoOptions = {
                            user: 'gaoyu',
                            pass: 'gjy321456',
                            useNewUrlParser: true
                        };

                        __WEBPACK_IMPORTED_MODULE_5_mongoose___default.a.connect('mongodb://127.0.0.1:27017/gaoyublog', mongoOptions); // 数据库链接
                        db = __WEBPACK_IMPORTED_MODULE_5_mongoose___default.a.connection;
                        DBModule = new __WEBPACK_IMPORTED_MODULE_6__modules_modules_js__["a" /* default */](__WEBPACK_IMPORTED_MODULE_5_mongoose___default.a);

                        db.on('error', console.error.bind(console, 'connection error:'));
                        db.once('openUri', function (callback) {
                            console.log("db opened");
                        });

                        router = __WEBPACK_IMPORTED_MODULE_3_koa_router___default()({
                            prefix: '/api'
                        });
                        //导入路由

                        addRouters = function addRouters(path) {
                            var files = __WEBPACK_IMPORTED_MODULE_4_fs___default.a.readdirSync(path);
                            var js_files = files.filter(function (f) {
                                return f.endsWith('.js');
                            }, files);
                            js_files.forEach(function (name) {
                                new (__webpack_require__(8)("./" + name).default)(router, DBModule, app).init();
                            });
                        };

                        addRouters(__dirname + '/routes');
                        app.use(router.routes(), router.allowedMethods());

                        // Import and Set Nuxt.js options
                        config = __webpack_require__(6);

                        config.dev = !(app.env === 'production');

                        // Instantiate nuxt.js
                        nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

                        // Build in development

                        if (!config.dev) {
                            _context2.next = 20;
                            break;
                        }

                        builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
                        _context2.next = 20;
                        return builder.build();

                    case 20:

                        app.use(function () {
                            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                                return __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _context.next = 2;
                                                return next();

                                            case 2:
                                                ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                                                return _context.abrupt('return', new Promise(function (resolve, reject) {
                                                    ctx.res.on('close', resolve);
                                                    ctx.res.on('finish', resolve);
                                                    nuxt.render(ctx.req, ctx.res, function (promise) {
                                                        // nuxt.render passes a rejected promise into callback on error.
                                                        promise.then(resolve).catch(reject);
                                                    });
                                                }));

                                            case 4:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, _this);
                            }));

                            return function (_x, _x2) {
                                return _ref2.apply(this, arguments);
                            };
                        }());

                        app.listen(port, host);
                        console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

                    case 23:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function start() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








start();
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }
/******/ ]);
//# sourceMappingURL=main.map