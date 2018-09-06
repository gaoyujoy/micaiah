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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony export (immutable) */ exports["encryption"] = encryption;

function encryption(str) {

    console.log('aaaaaaaaa');
}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_js__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var _ = __webpack_require__(4);

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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_controller__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools_api_js__ = __webpack_require__(0);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _class = function (_controller) {
    _inherits(_class, _controller);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
        key: 'renders',
        value: function renders() {
            var _this2 = this;

            this.router.get('/', function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                    return __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    ctx.body = { code: 0 };

                                case 1:
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
        }
    }, {
        key: 'actions',
        value: function actions() {}
    }]);

    return _class;
}(__WEBPACK_IMPORTED_MODULE_1__tools_controller__["default"]);

/* harmony default export */ exports["default"] = _class;

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("underscore");

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = __webpack_require__(4);

var _class = function _class(mongoose) {
				_classCallCheck(this, _class);

				this.Users = new (__webpack_require__(13))(mongoose, _);
};

/* unused harmony default export */ var _unused_webpack_default_export = _class;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./posts": 3,
	"./posts.js": 3,
	"./tools/api": 0,
	"./tools/api.js": 0,
	"./tools/controller": 1,
	"./tools/controller.js": 1
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
webpackContext.id = 7;


/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes_tools_api_js__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var moment = __webpack_require__(14);

module.exports = function () {
    function _class(mongoose, _) {
        _classCallCheck(this, _class);

        this._ = _;

        var Schema = mongoose.Schema;

        var usersSchema = new Schema({
            nickname: String,
            passWorld: String,
            date: {
                type: Date,
                default: Date.now
            }
        });
        usersSchema.virtual('created_at').get(function () {
            return moment(this.date).format('YYYY-MM-DD hh:mm:ss');
        });
        var Users = mongoose.model('Users', usersSchema);
        this.defaultAdmin();
    }

    _createClass(_class, [{
        key: 'defaultAdmin',
        value: function defaultAdmin() {
            console.log('11111111111111');
            // var self = this;
            // this.findAdminByName(api.constantValue().admin, function (err, data) {
            //     if (!err && self._.isEmpty(data)) {
            //         var admin =
            //             {
            //                 nickname: api.constantValue().admin,
            //                 passWorld: api.encryption('adminadmin')
            //             }
            //         self.saveAdmin(admin, function (err, data) {
            //             if (err) {
            //                 console.log('admin 用户创建失败');
            //             }
            //             else {
            //                 console.log('admin 用户创建成功！');
            //             }
            //         });
            //     }
            // });
        }
    }]);

    return _class;
}();

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("moment");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mongoose__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_modules_js__ = __webpack_require__(6);


var start = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _this = this;

        var app, host, port, router, addRouters, config, nuxt, builder;
        return __WEBPACK_IMPORTED_MODULE_0_C_Users_Administrator_Desktop_works2_micaiah_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
                        host = process.env.HOST || '127.0.0.1';
                        port = process.env.PORT || 3000;

                        //数据库配置
                        // const mongoOptions = {
                        //     user: 'gaoyu',
                        //     pass: 'gjy321456',
                        //     useNewUrlParser: true
                        // };
                        // mongoose.connect(`mongodb://127.0.0.1:27017/gaoyublog`, mongoOptions); // 数据库链接
                        // const db = mongoose.connection;
                        // const DBModule = new mongooseModules(mongoose);
                        // db.on('error', console.error.bind(console, 'connection error:'));
                        // db.once('openUri', function (callback) {
                        //     console.log("db opened")
                        // });

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
                                new (__webpack_require__(7)("./" + name).default)(router, null, app).init();
                            });
                        };

                        addRouters(__dirname + '/routes');
                        app.use(router.routes(), router.allowedMethods());

                        // Import and Set Nuxt.js options
                        config = __webpack_require__(5);

                        config.dev = !(app.env === 'production');

                        // Instantiate nuxt.js
                        nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

                        // Build in development

                        if (!config.dev) {
                            _context2.next = 14;
                            break;
                        }

                        builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
                        _context2.next = 14;
                        return builder.build();

                    case 14:

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

                    case 17:
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