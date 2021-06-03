/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
      /******/
    }
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = installedModules[moduleId] = {
    /******/ 			i: moduleId,
    /******/ 			l: false,
    /******/ 			exports: {}
          /******/
        };
    /******/
    /******/ 		// Execute the module function
    /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Flag the module as loaded
    /******/ 		module.l = true;
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
        /******/
      }
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function (exports, name, getter) {
    /******/ 		if (!__webpack_require__.o(exports, name)) {
    /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
          /******/
        }
        /******/
      };
    /******/
    /******/ 	// define __esModule on exports
    /******/ 	__webpack_require__.r = function (exports) {
    /******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
          /******/
        }
    /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
        /******/
      };
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/ 	__webpack_require__.t = function (value, mode) {
    /******/ 		if (mode & 1) value = __webpack_require__(value);
    /******/ 		if (mode & 8) return value;
    /******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /******/ 		var ns = Object.create(null);
    /******/ 		__webpack_require__.r(ns);
    /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
    /******/ 		return ns;
        /******/
      };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function (module) {
    /******/ 		var getter = module && module.__esModule ?
    /******/ 			function getDefault() { return module['default']; } :
    /******/ 			function getModuleExports() { return module; };
    /******/ 		__webpack_require__.d(getter, 'a', getter);
    /******/ 		return getter;
        /******/
      };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/webapp/components/DerivativesOverview/js/DerivativesOverview.js");
      /******/
    })
    /************************************************************************/
    /******/({
    
    /***/ "./node_modules/babel-runtime/core-js/array/from.js":
    /*!**********************************************************!*\
      !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js"), __esModule: true };
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
    /*!************************************************************!*\
      !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
      \************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
    /*!***********************************************************!*\
      !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/core-js/object/assign.js":
    /*!*************************************************************!*\
      !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
      \*************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js"), __esModule: true };
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
      \**********************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/core-js/object/entries.js":
    /*!**************************************************************!*\
      !*** ./node_modules/babel-runtime/core-js/object/entries.js ***!
      \**************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/entries */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/entries.js"), __esModule: true };
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/core-js/object/keys.js":
    /*!***********************************************************!*\
      !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/keys.js"), __esModule: true };
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/core-js/symbol.js":
    /*!******************************************************!*\
      !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
    /*!***************************************************************!*\
      !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
      \***************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
    /*!**************************************************************!*\
      !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
      \**************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            "use strict";
    
    
            exports.__esModule = true;
    
            exports.default = function (instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            };
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/helpers/createClass.js":
    /*!***********************************************************!*\
      !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            "use strict";
    
    
            exports.__esModule = true;
    
            var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");
    
            var _defineProperty2 = _interopRequireDefault(_defineProperty);
    
            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
            exports.default = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  (0, _defineProperty2.default)(target, descriptor.key, descriptor);
                }
              }
    
              return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
    /*!**************************************************************!*\
      !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
      \**************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            "use strict";
    
    
            exports.__esModule = true;
    
            var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");
    
            var _defineProperty2 = _interopRequireDefault(_defineProperty);
    
            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
            exports.default = function (obj, key, value) {
              if (key in obj) {
                (0, _defineProperty2.default)(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                obj[key] = value;
              }
    
              return obj;
            };
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
    /*!*************************************************************!*\
      !*** ./node_modules/babel-runtime/helpers/slicedToArray.js ***!
      \*************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            "use strict";
    
    
            exports.__esModule = true;
    
            var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/babel-runtime/core-js/is-iterable.js");
    
            var _isIterable3 = _interopRequireDefault(_isIterable2);
    
            var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");
    
            var _getIterator3 = _interopRequireDefault(_getIterator2);
    
            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
            exports.default = function () {
              function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = undefined;
    
                try {
                  for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
    
                    if (i && _arr.length === i) break;
                  }
                } catch (err) {
                  _d = true;
                  _e = err;
                } finally {
                  try {
                    if (!_n && _i["return"]) _i["return"]();
                  } finally {
                    if (_d) throw _e;
                  }
                }
    
                return _arr;
              }
    
              return function (arr, i) {
                if (Array.isArray(arr)) {
                  return arr;
                } else if ((0, _isIterable3.default)(Object(arr))) {
                  return sliceIterator(arr, i);
                } else {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
              };
            }();
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
      \*****************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            "use strict";
    
    
            exports.__esModule = true;
    
            var _from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");
    
            var _from2 = _interopRequireDefault(_from);
    
            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
            exports.default = function (arr) {
              if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                  arr2[i] = arr[i];
                }
    
                return arr2;
              } else {
                return (0, _from2.default)(arr);
              }
            };
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/helpers/typeof.js":
    /*!******************************************************!*\
      !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            "use strict";
    
    
            exports.__esModule = true;
    
            var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");
    
            var _iterator2 = _interopRequireDefault(_iterator);
    
            var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");
    
            var _symbol2 = _interopRequireDefault(_symbol);
    
            var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
    
            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
            exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
              return typeof obj === "undefined" ? "undefined" : _typeof(obj);
            } : function (obj) {
              return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
            };
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js ***!
      \**********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            __webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
            __webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js");
            module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Array.from;
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js ***!
      \************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            __webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
            __webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
            module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js");
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/is-iterable.js":
    /*!***********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/is-iterable.js ***!
      \***********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            __webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
            __webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
            module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.is-iterable.js");
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js":
    /*!*************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js ***!
      \*************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            __webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js");
            module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.assign;
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js ***!
      \**********************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            __webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js");
            var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object;
            module.exports = function defineProperty(it, key, desc) {
              return $Object.defineProperty(it, key, desc);
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/entries.js":
    /*!**************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/entries.js ***!
      \**************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            __webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.object.entries.js");
            module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.entries;
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/keys.js":
    /*!***********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/keys.js ***!
      \***********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            __webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.keys.js");
            module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.keys;
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js ***!
      \************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            __webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js");
            __webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js");
            __webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
            __webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js");
            module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Symbol;
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            __webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
            __webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
            module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            module.exports = function (it) {
              if (typeof it != 'function') throw TypeError(it + ' is not a function!');
              return it;
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js":
    /*!************************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
      \************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            module.exports = function () { /* empty */ };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
            module.exports = function (it) {
              if (!isObject(it)) throw TypeError(it + ' is not an object!');
              return it;
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js":
    /*!********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js ***!
      \********************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // false -> Array#indexOf
            // true  -> Array#includes
            var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
            var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
            var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js");
            module.exports = function (IS_INCLUDES) {
              return function ($this, el, fromIndex) {
                var O = toIObject($this);
                var length = toLength(O.length);
                var index = toAbsoluteIndex(fromIndex, length);
                var value;
                // Array#includes uses SameValueZero equality algorithm
                // eslint-disable-next-line no-self-compare
                if (IS_INCLUDES && el != el) while (length > index) {
                  value = O[index++];
                  // eslint-disable-next-line no-self-compare
                  if (value != value) return true;
                  // Array#indexOf ignores holes, Array#includes - not
                } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
                  if (O[index] === el) return IS_INCLUDES || index || 0;
                } return !IS_INCLUDES && -1;
              };
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js":
    /*!*************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js ***!
      \*************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // getting tag from 19.1.3.6 Object.prototype.toString()
            var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
            var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');
            // ES3 wrong here
            var ARG = cof(function () { return arguments; }()) == 'Arguments';
    
            // fallback for IE11 Script Access Denied error
            var tryGet = function (it, key) {
              try {
                return it[key];
              } catch (e) { /* empty */ }
            };
    
            module.exports = function (it) {
              var O, T, B;
              return it === undefined ? 'Undefined' : it === null ? 'Null'
                // @@toStringTag case
                : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
                  // builtinTag case
                  : ARG ? cof(O)
                    // ES3 arguments fallback
                    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js":
    /*!*********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js ***!
      \*********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            var toString = {}.toString;
    
            module.exports = function (it) {
              return toString.call(it).slice(8, -1);
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js ***!
      \**********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            var core = module.exports = { version: '2.5.3' };
            if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_create-property.js":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_create-property.js ***!
      \*********************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            "use strict";
    
            var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
            var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
    
            module.exports = function (object, index, value) {
              if (index in object) $defineProperty.f(object, index, createDesc(0, value));
              else object[index] = value;
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js":
    /*!*********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js ***!
      \*********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // optional / simple context binding
            var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
            module.exports = function (fn, that, length) {
              aFunction(fn);
              if (that === undefined) return fn;
              switch (length) {
                case 1: return function (a) {
                  return fn.call(that, a);
                };
                case 2: return function (a, b) {
                  return fn.call(that, a, b);
                };
                case 3: return function (a, b, c) {
                  return fn.call(that, a, b, c);
                };
              }
              return function (/* ...args */) {
                return fn.apply(that, arguments);
              };
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js":
    /*!*************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js ***!
      \*************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            // 7.2.1 RequireObjectCoercible(argument)
            module.exports = function (it) {
              if (it == undefined) throw TypeError("Can't call method on  " + it);
              return it;
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js ***!
      \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // Thank's IE8 for his funny defineProperty
            module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
              return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
            });
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
            var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
            // typeof document.createElement is 'object' in old IE
            var is = isObject(document) && isObject(document.createElement);
            module.exports = function (it) {
              return is ? document.createElement(it) : {};
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
      \*******************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            // IE 8- don't enum bug keys
            module.exports = (
              'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
            ).split(',');
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // all enumerable object keys, includes symbols
            var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
            var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");
            var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
            module.exports = function (it) {
              var result = getKeys(it);
              var getSymbols = gOPS.f;
              if (getSymbols) {
                var symbols = getSymbols(it);
                var isEnum = pIE.f;
                var i = 0;
                var key;
                while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
              } return result;
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js ***!
      \************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
            var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
            var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
            var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
            var PROTOTYPE = 'prototype';
    
            var $export = function (type, name, source) {
              var IS_FORCED = type & $export.F;
              var IS_GLOBAL = type & $export.G;
              var IS_STATIC = type & $export.S;
              var IS_PROTO = type & $export.P;
              var IS_BIND = type & $export.B;
              var IS_WRAP = type & $export.W;
              var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
              var expProto = exports[PROTOTYPE];
              var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
              var key, own, out;
              if (IS_GLOBAL) source = name;
              for (key in source) {
                // contains in native
                own = !IS_FORCED && target && target[key] !== undefined;
                if (own && key in exports) continue;
                // export native or passed
                out = own ? target[key] : source[key];
                // prevent global pollution for namespaces
                exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
                  // bind timers to global for call from export context
                  : IS_BIND && own ? ctx(out, global)
                    // wrap global constructors for prevent change them in library
                    : IS_WRAP && target[key] == out ? (function (C) {
                      var F = function (a, b, c) {
                        if (this instanceof C) {
                          switch (arguments.length) {
                            case 0: return new C();
                            case 1: return new C(a);
                            case 2: return new C(a, b);
                          } return new C(a, b, c);
                        } return C.apply(this, arguments);
                      };
                      F[PROTOTYPE] = C[PROTOTYPE];
                      return F;
                      // make static versions for prototype methods
                    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
                if (IS_PROTO) {
                  (exports.virtual || (exports.virtual = {}))[key] = out;
                  // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
                  if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
                }
              }
            };
            // type bitmap
            $export.F = 1;   // forced
            $export.G = 2;   // global
            $export.S = 4;   // static
            $export.P = 8;   // proto
            $export.B = 16;  // bind
            $export.W = 32;  // wrap
            $export.U = 64;  // safe
            $export.R = 128; // real proto method for `library`
            module.exports = $export;
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js":
    /*!***********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js ***!
      \***********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            module.exports = function (exec) {
              try {
                return !!exec();
              } catch (e) {
                return true;
              }
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js ***!
      \************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module.exports = typeof window != 'undefined' && window.Math == Math
              ? window : typeof self != 'undefined' && self.Math == Math ? self
                // eslint-disable-next-line no-new-func
                : Function('return this')();
            if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js":
    /*!*********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js ***!
      \*********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            var hasOwnProperty = {}.hasOwnProperty;
            module.exports = function (it, key) {
              return hasOwnProperty.call(it, key);
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js ***!
      \**********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
            var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
            module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
              return dP.f(object, key, createDesc(1, value));
            } : function (object, key, value) {
              object[key] = value;
              return object;
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js ***!
      \**********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
            module.exports = document && document.documentElement;
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":
    /*!********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
      \********************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
              return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
            });
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js":
    /*!*************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js ***!
      \*************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // fallback for non-array-like ES3 and non-enumerable old V8 strings
            var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
            // eslint-disable-next-line no-prototype-builtins
            module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
              return cof(it) == 'String' ? it.split('') : Object(it);
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js ***!
      \*******************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // check on default Array iterator
            var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
            var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
            var ArrayProto = Array.prototype;
    
            module.exports = function (it) {
              return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js":
    /*!**************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js ***!
      \**************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // 7.2.2 IsArray(argument)
            var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
            module.exports = Array.isArray || function isArray(arg) {
              return cof(arg) == 'Array';
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            module.exports = function (it) {
              return typeof it === 'object' ? it !== null : typeof it === 'function';
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // call something on iterator step with safe closing on error
            var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
            module.exports = function (iterator, fn, value, entries) {
              try {
                return entries ? fn(anObject(value)[0], value[1]) : fn(value);
                // 7.4.6 IteratorClose(iterator, completion)
              } catch (e) {
                var ret = iterator['return'];
                if (ret !== undefined) anObject(ret.call(iterator));
                throw e;
              }
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js ***!
      \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            "use strict";
    
            var create = __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");
            var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
            var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
            var IteratorPrototype = {};
    
            // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
            __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });
    
            module.exports = function (Constructor, NAME, next) {
              Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
              setToStringTag(Constructor, NAME + ' Iterator');
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js ***!
      \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            "use strict";
    
            var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
            var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
            var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");
            var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
            var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
            var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
            var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js");
            var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
            var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js");
            var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
            var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
            var FF_ITERATOR = '@@iterator';
            var KEYS = 'keys';
            var VALUES = 'values';
    
            var returnThis = function () { return this; };
    
            module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
              $iterCreate(Constructor, NAME, next);
              var getMethod = function (kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch (kind) {
                  case KEYS: return function keys() { return new Constructor(this, kind); };
                  case VALUES: return function values() { return new Constructor(this, kind); };
                } return function entries() { return new Constructor(this, kind); };
              };
              var TAG = NAME + ' Iterator';
              var DEF_VALUES = DEFAULT == VALUES;
              var VALUES_BUG = false;
              var proto = Base.prototype;
              var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
              var $default = (!BUGGY && $native) || getMethod(DEFAULT);
              var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
              var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
              var methods, key, IteratorPrototype;
              // Fix native
              if ($anyNative) {
                IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                  // Set @@toStringTag to native iterators
                  setToStringTag(IteratorPrototype, TAG, true);
                  // fix for some old engines
                  if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
                }
              }
              // fix Array#{values, @@iterator}.name in V8 / FF
              if (DEF_VALUES && $native && $native.name !== VALUES) {
                VALUES_BUG = true;
                $default = function values() { return $native.call(this); };
              }
              // Define iterator
              if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                hide(proto, ITERATOR, $default);
              }
              // Plug for library
              Iterators[NAME] = $default;
              Iterators[TAG] = returnThis;
              if (DEFAULT) {
                methods = {
                  values: DEF_VALUES ? $default : getMethod(VALUES),
                  keys: IS_SET ? $default : getMethod(KEYS),
                  entries: $entries
                };
                if (FORCED) for (key in methods) {
                  if (!(key in proto)) redefine(proto, key, methods[key]);
                } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
              }
              return methods;
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js ***!
      \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
            var SAFE_CLOSING = false;
    
            try {
              var riter = [7][ITERATOR]();
              riter['return'] = function () { SAFE_CLOSING = true; };
              // eslint-disable-next-line no-throw-literal
              Array.from(riter, function () { throw 2; });
            } catch (e) { /* empty */ }
    
            module.exports = function (exec, skipClosing) {
              if (!skipClosing && !SAFE_CLOSING) return false;
              var safe = false;
              try {
                var arr = [7];
                var iter = arr[ITERATOR]();
                iter.next = function () { return { done: safe = true }; };
                arr[ITERATOR] = function () { return iter; };
                exec(arr);
              } catch (e) { /* empty */ }
              return safe;
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            module.exports = function (done, value) {
              return { value: value, done: !!done };
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            module.exports = {};
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js":
    /*!*************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js ***!
      \*************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            module.exports = true;
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js ***!
      \**********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var META = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js")('meta');
            var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
            var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
            var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
            var id = 0;
            var isExtensible = Object.isExtensible || function () {
              return true;
            };
            var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
              return isExtensible(Object.preventExtensions({}));
            });
            var setMeta = function (it) {
              setDesc(it, META, {
                value: {
                  i: 'O' + ++id, // object ID
                  w: {}          // weak collections IDs
                }
              });
            };
            var fastKey = function (it, create) {
              // return primitive with prefix
              if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
              if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return 'F';
                // not necessary to add metadata
                if (!create) return 'E';
                // add missing metadata
                setMeta(it);
                // return object ID
              } return it[META].i;
            };
            var getWeak = function (it, create) {
              if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return true;
                // not necessary to add metadata
                if (!create) return false;
                // add missing metadata
                setMeta(it);
                // return hash weak collections IDs
              } return it[META].w;
            };
            // add metadata on freeze-family methods calling
            var onFreeze = function (it) {
              if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
              return it;
            };
            var meta = module.exports = {
              KEY: META,
              NEED: false,
              fastKey: fastKey,
              getWeak: getWeak,
              onFreeze: onFreeze
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js ***!
      \*******************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            "use strict";
    
            // 19.1.2.1 Object.assign(target, source, ...)
            var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
            var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");
            var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
            var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
            var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
            var $assign = Object.assign;
    
            // should work with symbols and should have deterministic property order (V8 bug)
            module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
              var A = {};
              var B = {};
              // eslint-disable-next-line no-undef
              var S = Symbol();
              var K = 'abcdefghijklmnopqrst';
              A[S] = 7;
              K.split('').forEach(function (k) { B[k] = k; });
              return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
            }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
              var T = toObject(target);
              var aLen = arguments.length;
              var index = 1;
              var getSymbols = gOPS.f;
              var isEnum = pIE.f;
              while (aLen > index) {
                var S = IObject(arguments[index++]);
                var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
                var length = keys.length;
                var j = 0;
                var key;
                while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
              } return T;
            } : $assign;
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js ***!
      \*******************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
            var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
            var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js");
            var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");
            var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
            var Empty = function () { /* empty */ };
            var PROTOTYPE = 'prototype';
    
            // Create object with fake `null` prototype: use iframe Object with cleared prototype
            var createDict = function () {
              // Thrash, waste and sodomy: IE GC bug
              var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('iframe');
              var i = enumBugKeys.length;
              var lt = '<';
              var gt = '>';
              var iframeDocument;
              iframe.style.display = 'none';
              __webpack_require__(/*! ./_html */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
              iframe.src = 'javascript:'; // eslint-disable-line no-script-url
              // createDict = iframe.contentWindow.Object;
              // html.removeChild(iframe);
              iframeDocument = iframe.contentWindow.document;
              iframeDocument.open();
              iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
              iframeDocument.close();
              createDict = iframeDocument.F;
              while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
              return createDict();
            };
    
            module.exports = Object.create || function create(O, Properties) {
              var result;
              if (O !== null) {
                Empty[PROTOTYPE] = anObject(O);
                result = new Empty();
                Empty[PROTOTYPE] = null;
                // add "__proto__" for Object.getPrototypeOf polyfill
                result[IE_PROTO] = O;
              } else result = createDict();
              return Properties === undefined ? result : dPs(result, Properties);
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
            var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
            var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
            var dP = Object.defineProperty;
    
            exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPrimitive(P, true);
              anObject(Attributes);
              if (IE8_DOM_DEFINE) try {
                return dP(O, P, Attributes);
              } catch (e) { /* empty */ }
              if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
              if ('value' in Attributes) O[P] = Attributes.value;
              return O;
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
            var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
            var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
    
            module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
              anObject(O);
              var keys = getKeys(Properties);
              var length = keys.length;
              var i = 0;
              var P;
              while (length > i) dP.f(O, P = keys[i++], Properties[P]);
              return O;
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js ***!
      \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
            var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
            var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
            var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
            var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
            var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
            var gOPD = Object.getOwnPropertyDescriptor;
    
            exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
              O = toIObject(O);
              P = toPrimitive(P, true);
              if (IE8_DOM_DEFINE) try {
                return gOPD(O, P);
              } catch (e) { /* empty */ }
              if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
      \*********************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
            var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
            var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f;
            var toString = {}.toString;
    
            var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window) : [];
    
            var getWindowNames = function (it) {
              try {
                return gOPN(it);
              } catch (e) {
                return windowNames.slice();
              }
            };
    
            module.exports.f = function getOwnPropertyNames(it) {
              return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js ***!
      \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
            var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
            var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');
    
            exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
              return $keys(O, hiddenKeys);
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js ***!
      \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            exports.f = Object.getOwnPropertySymbols;
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
            var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
            var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
            var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
            var ObjectProto = Object.prototype;
    
            module.exports = Object.getPrototypeOf || function (O) {
              O = toObject(O);
              if (has(O, IE_PROTO)) return O[IE_PROTO];
              if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                return O.constructor.prototype;
              } return O instanceof Object ? ObjectProto : null;
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js ***!
      \**************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
            var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
            var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js")(false);
            var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
    
            module.exports = function (object, names) {
              var O = toIObject(object);
              var i = 0;
              var result = [];
              var key;
              for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
              // Don't enum bug & hidden keys
              while (names.length > i) if (has(O, key = names[i++])) {
                ~arrayIndexOf(result, key) || result.push(key);
              }
              return result;
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js ***!
      \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // 19.1.2.14 / 15.2.3.14 Object.keys(O)
            var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
            var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");
    
            module.exports = Object.keys || function keys(O) {
              return $keys(O, enumBugKeys);
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            exports.f = {}.propertyIsEnumerable;
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // most Object methods by ES6 should accept primitives
            var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
            var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
            var fails = __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js");
            module.exports = function (KEY, exec) {
              var fn = (core.Object || {})[KEY] || Object[KEY];
              var exp = {};
              exp[KEY] = exec(fn);
              $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-to-array.js":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-to-array.js ***!
      \*********************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
            var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
            var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js").f;
            module.exports = function (isEntries) {
              return function (it) {
                var O = toIObject(it);
                var keys = getKeys(O);
                var length = keys.length;
                var i = 0;
                var result = [];
                var key;
                while (length > i) if (isEnum.call(O, key = keys[i++])) {
                  result.push(isEntries ? [key, O[key]] : O[key]);
                } return result;
              };
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js ***!
      \*******************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            module.exports = function (bitmap, value) {
              return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
              };
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js":
    /*!**************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js ***!
      \**************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
      \***********************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
            var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
            var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');
    
            module.exports = function (it, tag, stat) {
              if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('keys');
            var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
            module.exports = function (key) {
              return shared[key] || (shared[key] = uid(key));
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js ***!
      \************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
            var SHARED = '__core-js_shared__';
            var store = global[SHARED] || (global[SHARED] = {});
            module.exports = function (key) {
              return store[key] || (store[key] = {});
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
            var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
            // true  -> String#at
            // false -> String#codePointAt
            module.exports = function (TO_STRING) {
              return function (that, pos) {
                var s = String(defined(that));
                var i = toInteger(pos);
                var l = s.length;
                var a, b;
                if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                a = s.charCodeAt(i);
                return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
                  ? TO_STRING ? s.charAt(i) : a
                  : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
              };
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js ***!
      \***********************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
            var max = Math.max;
            var min = Math.min;
            module.exports = function (index, length) {
              index = toInteger(index);
              return index < 0 ? max(index + length, 0) : min(index, length);
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            // 7.1.4 ToInteger
            var ceil = Math.ceil;
            var floor = Math.floor;
            module.exports = function (it) {
              return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // to indexed object, toObject with fallback for non-array-like ES3 strings
            var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
            var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
            module.exports = function (it) {
              return IObject(defined(it));
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // 7.1.15 ToLength
            var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
            var min = Math.min;
            module.exports = function (it) {
              return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // 7.1.13 ToObject(argument)
            var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
            module.exports = function (it) {
              return Object(defined(it));
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js":
    /*!******************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js ***!
      \******************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // 7.1.1 ToPrimitive(input [, PreferredType])
            var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
            // instead of the ES6 spec version, we didn't implement @@toPrimitive case
            // and the second argument - flag - preferred type is a string
            module.exports = function (it, S) {
              if (!isObject(it)) return it;
              var fn, val;
              if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
              if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
              if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
              throw TypeError("Can't convert object to primitive value");
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js":
    /*!*********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js ***!
      \*********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            var id = 0;
            var px = Math.random();
            module.exports = function (key) {
              return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
            var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
            var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
            var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");
            var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
            module.exports = function (name) {
              var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
              if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js":
    /*!*************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js ***!
      \*************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js":
    /*!*********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js ***!
      \*********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var store = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('wks');
            var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
            var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").Symbol;
            var USE_SYMBOL = typeof Symbol == 'function';
    
            var $exports = module.exports = function (name) {
              return store[name] || (store[name] =
                USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
            };
    
            $exports.store = store;
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
      \*****************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var classof = __webpack_require__(/*! ./_classof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js");
            var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
            var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
            module.exports = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
              if (it != undefined) return it[ITERATOR]
                || it['@@iterator']
                || Iterators[classof(it)];
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js ***!
      \**********************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
            var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js");
            module.exports = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
              var iterFn = get(it);
              if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
              return anObject(iterFn.call(it));
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.is-iterable.js":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/core.is-iterable.js ***!
      \*********************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var classof = __webpack_require__(/*! ./_classof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js");
            var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
            var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
            module.exports = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
              var O = Object(it);
              return O[ITERATOR] !== undefined
                || '@@iterator' in O
                // eslint-disable-next-line no-prototype-builtins
                || Iterators.hasOwnProperty(classof(O));
            };
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js ***!
      \*******************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            "use strict";
    
            var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
            var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
            var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
            var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js");
            var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js");
            var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
            var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_create-property.js");
            var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js");
    
            $export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
              // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
              from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
                var O = toObject(arrayLike);
                var C = typeof this == 'function' ? this : Array;
                var aLen = arguments.length;
                var mapfn = aLen > 1 ? arguments[1] : undefined;
                var mapping = mapfn !== undefined;
                var index = 0;
                var iterFn = getIterFn(O);
                var length, result, step, iterator;
                if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
                // if object isn't iterable or it's array with default iterator - use simple case
                if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
                  for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                    createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
                  }
                } else {
                  length = toLength(O.length);
                  for (result = new C(length); length > index; index++) {
                    createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                  }
                }
                result.length = index;
                return result;
              }
            });
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js ***!
      \***********************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            "use strict";
    
            var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js");
            var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js");
            var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
            var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
    
            // 22.1.3.4 Array.prototype.entries()
            // 22.1.3.13 Array.prototype.keys()
            // 22.1.3.29 Array.prototype.values()
            // 22.1.3.30 Array.prototype[@@iterator]()
            module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
              this._t = toIObject(iterated); // target
              this._i = 0;                   // next index
              this._k = kind;                // kind
              // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
            }, function () {
              var O = this._t;
              var kind = this._k;
              var index = this._i++;
              if (!O || index >= O.length) {
                this._t = undefined;
                return step(1);
              }
              if (kind == 'keys') return step(0, index);
              if (kind == 'values') return step(0, O[index]);
              return step(0, [index, O[index]]);
            }, 'values');
    
            // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
            Iterators.Arguments = Iterators.Array;
    
            addToUnscopables('keys');
            addToUnscopables('values');
            addToUnscopables('entries');
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js ***!
      \**********************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // 19.1.3.1 Object.assign(target, source)
            var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
    
            $export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js") });
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js ***!
      \*******************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
            // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
            $export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f });
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.keys.js":
    /*!********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.keys.js ***!
      \********************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // 19.1.2.14 Object.keys(O)
            var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
            var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
    
            __webpack_require__(/*! ./_object-sap */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
              return function keys(it) {
                return $keys(toObject(it));
              };
            });
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js ***!
      \*************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js":
    /*!************************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js ***!
      \************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            "use strict";
    
            var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js")(true);
    
            // 21.1.3.27 String.prototype[@@iterator]()
            __webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
              this._t = String(iterated); // target
              this._i = 0;                // next index
              // 21.1.5.2.1 %StringIteratorPrototype%.next()
            }, function () {
              var O = this._t;
              var index = this._i;
              var point;
              if (index >= O.length) return { value: undefined, done: true };
              point = $at(O, index);
              this._i += point.length;
              return { value: point, done: false };
            });
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            "use strict";
    
            // ECMAScript 6 symbols shim
            var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
            var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
            var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");
            var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
            var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");
            var META = __webpack_require__(/*! ./_meta */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js").KEY;
            var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js");
            var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js");
            var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
            var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
            var wks = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");
            var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");
            var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js");
            var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js");
            var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js");
            var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
            var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
            var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
            var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
            var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
            var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");
            var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js");
            var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js");
            var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
            var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
            var gOPD = $GOPD.f;
            var dP = $DP.f;
            var gOPN = gOPNExt.f;
            var $Symbol = global.Symbol;
            var $JSON = global.JSON;
            var _stringify = $JSON && $JSON.stringify;
            var PROTOTYPE = 'prototype';
            var HIDDEN = wks('_hidden');
            var TO_PRIMITIVE = wks('toPrimitive');
            var isEnum = {}.propertyIsEnumerable;
            var SymbolRegistry = shared('symbol-registry');
            var AllSymbols = shared('symbols');
            var OPSymbols = shared('op-symbols');
            var ObjectProto = Object[PROTOTYPE];
            var USE_NATIVE = typeof $Symbol == 'function';
            var QObject = global.QObject;
            // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
            var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
    
            // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
            var setSymbolDesc = DESCRIPTORS && $fails(function () {
              return _create(dP({}, 'a', {
                get: function () { return dP(this, 'a', { value: 7 }).a; }
              })).a != 7;
            }) ? function (it, key, D) {
              var protoDesc = gOPD(ObjectProto, key);
              if (protoDesc) delete ObjectProto[key];
              dP(it, key, D);
              if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
            } : dP;
    
            var wrap = function (tag) {
              var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
              sym._k = tag;
              return sym;
            };
    
            var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
              return typeof it == 'symbol';
            } : function (it) {
              return it instanceof $Symbol;
            };
    
            var $defineProperty = function defineProperty(it, key, D) {
              if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
              anObject(it);
              key = toPrimitive(key, true);
              anObject(D);
              if (has(AllSymbols, key)) {
                if (!D.enumerable) {
                  if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                  it[HIDDEN][key] = true;
                } else {
                  if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                  D = _create(D, { enumerable: createDesc(0, false) });
                } return setSymbolDesc(it, key, D);
              } return dP(it, key, D);
            };
            var $defineProperties = function defineProperties(it, P) {
              anObject(it);
              var keys = enumKeys(P = toIObject(P));
              var i = 0;
              var l = keys.length;
              var key;
              while (l > i) $defineProperty(it, key = keys[i++], P[key]);
              return it;
            };
            var $create = function create(it, P) {
              return P === undefined ? _create(it) : $defineProperties(_create(it), P);
            };
            var $propertyIsEnumerable = function propertyIsEnumerable(key) {
              var E = isEnum.call(this, key = toPrimitive(key, true));
              if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
              return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
            };
            var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
              it = toIObject(it);
              key = toPrimitive(key, true);
              if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
              var D = gOPD(it, key);
              if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
              return D;
            };
            var $getOwnPropertyNames = function getOwnPropertyNames(it) {
              var names = gOPN(toIObject(it));
              var result = [];
              var i = 0;
              var key;
              while (names.length > i) {
                if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
              } return result;
            };
            var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
              var IS_OP = it === ObjectProto;
              var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
              var result = [];
              var i = 0;
              var key;
              while (names.length > i) {
                if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
              } return result;
            };
    
            // 19.4.1.1 Symbol([description])
            if (!USE_NATIVE) {
              $Symbol = function Symbol() {
                if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
                var $set = function (value) {
                  if (this === ObjectProto) $set.call(OPSymbols, value);
                  if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                  setSymbolDesc(this, tag, createDesc(1, value));
                };
                if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
                return wrap(tag);
              };
              redefine($Symbol[PROTOTYPE], 'toString', function toString() {
                return this._k;
              });
    
              $GOPD.f = $getOwnPropertyDescriptor;
              $DP.f = $defineProperty;
              __webpack_require__(/*! ./_object-gopn */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
              __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
              __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;
    
              if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js")) {
                redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
              }
    
              wksExt.f = function (name) {
                return wrap(wks(name));
              };
            }
    
            $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
    
            for (var es6Symbols = (
              // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
              'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
            ).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
    
            for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
    
            $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
              // 19.4.2.1 Symbol.for(key)
              'for': function (key) {
                return has(SymbolRegistry, key += '')
                  ? SymbolRegistry[key]
                  : SymbolRegistry[key] = $Symbol(key);
              },
              // 19.4.2.5 Symbol.keyFor(sym)
              keyFor: function keyFor(sym) {
                if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
                for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
              },
              useSetter: function () { setter = true; },
              useSimple: function () { setter = false; }
            });
    
            $export($export.S + $export.F * !USE_NATIVE, 'Object', {
              // 19.1.2.2 Object.create(O [, Properties])
              create: $create,
              // 19.1.2.4 Object.defineProperty(O, P, Attributes)
              defineProperty: $defineProperty,
              // 19.1.2.3 Object.defineProperties(O, Properties)
              defineProperties: $defineProperties,
              // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
              getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
              // 19.1.2.7 Object.getOwnPropertyNames(O)
              getOwnPropertyNames: $getOwnPropertyNames,
              // 19.1.2.8 Object.getOwnPropertySymbols(O)
              getOwnPropertySymbols: $getOwnPropertySymbols
            });
    
            // 24.3.2 JSON.stringify(value [, replacer [, space]])
            $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
              var S = $Symbol();
              // MS Edge converts symbol values to JSON as {}
              // WebKit converts symbol values to JSON as null
              // V8 throws on boxed symbols
              return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
            })), 'JSON', {
                stringify: function stringify(it) {
                  var args = [it];
                  var i = 1;
                  var replacer, $replacer;
                  while (arguments.length > i) args.push(arguments[i++]);
                  $replacer = replacer = args[1];
                  if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                  if (!isArray(replacer)) replacer = function (key, value) {
                    if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
                    if (!isSymbol(value)) return value;
                  };
                  args[1] = replacer;
                  return _stringify.apply($JSON, args);
                }
              });
    
            // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
            $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
            // 19.4.3.5 Symbol.prototype[@@toStringTag]
            setToStringTag($Symbol, 'Symbol');
            // 20.2.1.9 Math[@@toStringTag]
            setToStringTag(Math, 'Math', true);
            // 24.3.3 JSON[@@toStringTag]
            setToStringTag(global.JSON, 'JSON', true);
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.object.entries.js":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.object.entries.js ***!
      \***********************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            // https://github.com/tc39/proposal-object-values-entries
            var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
            var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-to-array.js")(true);
    
            $export($export.S, 'Object', {
              entries: function entries(it) {
                return $entries(it);
              }
            });
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
      \******************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            __webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
      \**************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            __webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('observable');
    
    
            /***/
          }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js ***!
      \*********************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js");
            var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
            var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
            var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
            var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');
    
            var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
              'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
              'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
              'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
              'TextTrackList,TouchList').split(',');
    
            for (var i = 0; i < DOMIterables.length; i++) {
              var NAME = DOMIterables[i];
              var Collection = global[NAME];
              var proto = Collection && Collection.prototype;
              if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
              Iterators[NAME] = Iterators.Array;
            }
    
    
            /***/
          }),
    
    /***/ "./src/main/webapp/components/DerivativesOverview/js/DerivativesOverview.js":
    /*!**********************************************************************************!*\
      !*** ./src/main/webapp/components/DerivativesOverview/js/DerivativesOverview.js ***!
      \**********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");
    
            var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
    
            var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
    
            var _defineProperty3 = _interopRequireDefault(_defineProperty2);
    
            var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");
    
            var _assign2 = _interopRequireDefault(_assign);
    
            var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");
    
            var _keys2 = _interopRequireDefault(_keys);
    
            var _entries = __webpack_require__(/*! babel-runtime/core-js/object/entries */ "./node_modules/babel-runtime/core-js/object/entries.js");
    
            var _entries2 = _interopRequireDefault(_entries);
    
            var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
    
            var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
    
            var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
    
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
            var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
    
            var _createClass3 = _interopRequireDefault(_createClass2);
    
            var _swiper = __webpack_require__(/*! swiper */ "swiper");
    
            var _swiper2 = _interopRequireDefault(_swiper);
    
            var _DxTabs = __webpack_require__(/*! ../../DxTabs/es6/DxTabs */ "./src/main/webapp/components/DxTabs/es6/DxTabs.js");
    
            var _DxTabs2 = _interopRequireDefault(_DxTabs);
    
            var _DxDropdown = __webpack_require__(/*! ../../DxDropdown/js/DxDropdown */ "./src/main/webapp/components/DxDropdown/js/DxDropdown.js");
    
            var _DxDropdown2 = _interopRequireDefault(_DxDropdown);
    
            var _Pagination = __webpack_require__(/*! ../../Pagination/es6/Pagination */ "./src/main/webapp/components/Pagination/es6/Pagination.js");
    
            var _Pagination2 = _interopRequireDefault(_Pagination);
    
            var _uiSelectors = __webpack_require__(/*! ../../../resources/dev/js/utils/uiSelectors */ "./src/main/webapp/resources/dev/js/utils/uiSelectors.js");
    
            var _uiSelectors2 = _interopRequireDefault(_uiSelectors);
    
            var _swiper3 = __webpack_require__(/*! ../../../resources/dev/js/utils/swiper */ "./src/main/webapp/resources/dev/js/utils/swiper.js");
    
            var _index = __webpack_require__(/*! ../../../resources/dev/js/utils/index */ "./src/main/webapp/resources/dev/js/utils/index.js");
    
            var _domManipulation = __webpack_require__(/*! ../../../resources/dev/js/utils/domManipulation */ "./src/main/webapp/resources/dev/js/utils/domManipulation.js");
    
            var _slide = __webpack_require__(/*! ../../../resources/dev/js/utils/slide */ "./src/main/webapp/resources/dev/js/utils/slide.js");
    
            var _classes = __webpack_require__(/*! ./classes */ "./src/main/webapp/components/DerivativesOverview/js/classes.js");
    
            var _dynamicUrl = __webpack_require__(/*! ./dynamic-url */ "./src/main/webapp/components/DerivativesOverview/js/dynamic-url.js");
    
            var _controlDropdowns2 = __webpack_require__(/*! ./control-dropdowns */ "./src/main/webapp/components/DerivativesOverview/js/control-dropdowns.js");
    
            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
            /* global jQuery, objectFitPolyfill */
    
            /*!
             * DerivativesOverview
             * Copyright 2018: Connect Group. All rights reserved.
             */
            var DerivativesOverview = function () {
              function DerivativesOverview(element) {
                (0, _classCallCheck3.default)(this, DerivativesOverview);
    
                this.element = element;
                this._template = this.element.getAttribute('data-template');
                this.liveRegion = element.querySelector('.Derivative__aria-live');
                this._direction = document.documentElement.classList.contains('rtl') ? 'rtl' : 'ltr';
                this._desktopMin = 901;
                this._tabletMin = 741;
                this._mode = false;
                this._previousMode = false;
                this._elemIndex = this.element.getAttribute('id');
                this._fadeTime = 300;
                this._dropdownTransitionSpeed = 300;
                this._maxGroupTextHeight = 0;
                this._columnableFeatures = null;
                this.uiSelectors = {
                  derivativeCards: '.Derivative',
                  accordionTitles: '.Derivative__accordion-label',
                  accordionContent: '.Derivative__accordion-content',
                  dropDownWrapper: '.Derivative__spec-wrapper',
                  attributeElement: '.Derivative__spec',
                  carousel: '.Derivative__carousel'
                };
                this._columnableFeatures = null;
                this._dxTabs = null;
                this._dxTabsElement = null;
                this._dxTabsInited = null;
                (0, _uiSelectors2.default)(this, element); // init uiSelectors - gives access to this.ui() method
                this.init();
              }
    
              (0, _createClass3.default)(DerivativesOverview, [{
                key: 'init',
                value: function init() {
                  var _this = this;
    
                  var throttleResize = (0, _index.throttle)(function () {
                    return _this._resize();
                  }, 250, this);
                  window.addEventListener('resize', function () {
                    return throttleResize(_this.element);
                  }, false);
    
                  this._keyFeatureCreateColumns();
                  this._checkGroupText();
                  this._engineSelector();
                  this._accordions();
                  if (this._template === 'dropdown') {
                    this._controlDropdowns();
                    $('.DxTabs__theme--default').hide();
                    $('.DxTabs__panels').hide();
    
                  } else {
                    $('.Derivative__controls-form').hide();
                    $('.Derivative__dropdown-panels').hide();
                    this._tabs();
                  }
                  this._carousel();
                  this._modals();
                  this._resize();
    
                  // necessary due to label widths changing size once fonts have loaded
                  window.addEventListener('load', function () {
                    _this._setElementSizes();
                  }, false);
                  document.addEventListener('lazyloaded', function (e) {
                    return objectFitPolyfill(e.target);
                  }); // IE11 object-fit/lazysizes intersection fix
                }
    
                /**
                 * Set up the columns for use in alignment of key features groupings
                 *
                 * @private
                 */
    
              }, {
                key: '_keyFeatureCreateColumns',
                value: function _keyFeatureCreateColumns() {
                  this._columnableFeatures = [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('.Derivative__grouped-features'))).filter(function (element) {
                    return parseInt(element.parentNode.getAttribute('data-feature-count'), 10) > 2;
                  });
    
                  if (!this._columnableFeatures.length) {
                    return;
                  }
    
                  var columnTpl = document.createElement('div');
                  columnTpl.classList.add(_classes.classes.columnWrapperClass);
                  this._columnableFeatures.forEach(function (featureGroup) {
                    if (!featureGroup.querySelectorAll('.' + _classes.classes.columnWrapperClass).length) {
                      // add our two column elements
                      featureGroup.appendChild(columnTpl.cloneNode());
                      featureGroup.appendChild(columnTpl.cloneNode());
                      [].concat((0, _toConsumableArray3.default)(featureGroup.querySelectorAll('.Derivative__grouped-feature'))).forEach(function (feature) {
                        featureGroup.querySelector('.' + _classes.classes.columnWrapperClass).appendChild(feature);
                      });
                    }
                  });
                }
    
                /**
                 * Determine which key features are placed into the left/right columns
                 *
                 * @private
                 */
    
              }, {
                key: '_keyFeatureHandleColumnSplit',
                value: function _keyFeatureHandleColumnSplit() {
                  this._columnableFeatures.forEach(function (elem) {
                    var accordionElem = elem.closest('.Derivative__accordion-content');
                    //accordionElem.classList.add('Derivative__accordion-content--force-open');
    
                    var groupedFeatures = elem.querySelectorAll('.Derivative__grouped-feature');
                    var groupedFeaturesBalanced = (0, _index.balanceElementHeight)(groupedFeatures, 30);
    
                    if (groupedFeatures.length < 3 || (0, _entries2.default)(groupedFeaturesBalanced).length === 0) {
                      return;
                    }
    
                    if (groupedFeaturesBalanced.columns1 && groupedFeaturesBalanced.columns2) {
                      groupedFeaturesBalanced.columns1.forEach(function (feature) {
                        [].concat((0, _toConsumableArray3.default)(elem.querySelectorAll('.' + _classes.classes.columnWrapperClass)))[0].appendChild(feature);
                      });
                      groupedFeaturesBalanced.columns2.forEach(function (feature) {
                        [].concat((0, _toConsumableArray3.default)(elem.querySelectorAll('.' + _classes.classes.columnWrapperClass)))[1].appendChild(feature);
                      });
                    }
                    accordionElem.classList.remove('Derivative__accordion-content--force-open');
                  });
                }
    
                /**
                 * If there are multiple tabs and intro text in only some tabs, this adds the empty elements to the missing
                 * tabs required to create the equal sizing. Returns early if there is only one bodystyle or no intro text
                 *
                 * @private
                 */
    
              }, {
                key: '_checkGroupText',
                value: function _checkGroupText() {
                  var groups = this.element.querySelectorAll('.' + _classes.classes.toggleContentItemClass);
                  var groupText = this.element.querySelectorAll('.' + _classes.classes.groupTextClass);
                  if (groups.length < 2 || !groupText.length) {
                    return;
                  }
                  groups.forEach(function (group, index) {
                    if (!group.querySelector('.' + _classes.classes.groupTextClass)) {
                      var groupTextEl = document.createElement('div');
                      groupTextEl.classList.add(_classes.classes.groupTextClass);
                      groups[index].insertBefore(groupTextEl, groups[index].firstChild);
                    }
                  });
                }
    
                /**
                 * Methods triggered on window resize
                 *
                 * @private
                 */
    
              }, {
                key: '_resize',
                value: function _resize() {
                  this._setSize();
                  this._updateDom();
                  this._setElementSizes();
                  this._keyFeatureHandleColumnSplit();
                }
    
                /**
                 * Set mode to desktop, tablet or mobile based on window width
                 *
                 * @private
                 */
    
              }, {
                key: '_setSize',
                value: function _setSize() {
                  var w = window.innerWidth;
                  this._mode = w >= this._desktopMin ? 'desktop' : this._mode;
                  this._mode = w >= this._tabletMin && w < this._desktopMin ? 'tablet' : this._mode;
                  this._mode = w < this._tabletMin ? 'mobile' : this._mode;
                }
    
                /**
                 * If there is a mode change (e.g. desktop to tablet) do the necessary DOM restructuring
                 * to maintain accessible tab ordering
                 *
                 * @private
                 */
    
              }, {
                key: '_updateDom',
                value: function _updateDom() {
                  var _this2 = this;
    
                  if (this._mode === this._previousMode) {
                    return;
                  }
    
                  this.ui('derivativeCards').forEach(function (derivativeCard) {
                    if (_this2._mode === 'desktop') {
                      derivativeCard.querySelector('.Derivative__group--image').appendChild(derivativeCard.querySelector('.Derivative__specs'));
                      derivativeCard.querySelector('.Derivative__group--copy').appendChild(derivativeCard.querySelector('.Derivative__features'));
                    }
    
                    if (_this2._mode !== 'desktop') {
                      derivativeCard.querySelector('.Derivative__group--data').appendChild(derivativeCard.querySelector('.Derivative__specs'));
                      derivativeCard.querySelector('.Derivative__group--data').appendChild(derivativeCard.querySelector('.Derivative__features'));
                    }
    
                    if (_this2._mode === 'mobile') {
                      (0, _domManipulation.insertAfter)(derivativeCard.querySelector('.Derivative__group--image'), derivativeCard.querySelector('.Derivative__group--copy'));
                    }
    
                    if (_this2._mode !== 'mobile') {
                      (0, _domManipulation.insertBefore)(derivativeCard.querySelector('.Derivative__group--image'), derivativeCard.querySelector('.Derivative__group--copy'));
                    }
                  });
    
                  this.element.querySelectorAll('.Derivative__accordion-content').forEach(function (accordionContent) {
                    if (_this2._mode === 'desktop') {
                      accordionContent.removeAttribute('aria-labelledby');
                    } else {
                      accordionContent.setAttribute('aria-labelledby', accordionContent.getAttribute('data-labelledby'));
                    }
                  });
                  this._previousMode = this._mode;
                }
    
                /**
                 * Uses the DxDropdown component to create the engine selector and add some
                 * custom functionality
                 *
                 * @private
                 */
    
              }, {
                key: '_engineSelector',
                value: function _engineSelector() {
                  var _this3 = this;
    
                  var setEngineSelectLabelText = function setEngineSelectLabelText(elem) {
                    var button = elem;
                    var labelDefault = _this3.element.getAttribute('data-label-choose-engine');
                    var label = labelDefault ? labelDefault + ', ' + button.textContent : button.textContent;
                    button.setAttribute('aria-label', label);
                  };
    
                  this.ui('derivativeCards').forEach(function (dropDownElem, inc) {
                    var wrapper = document.createElement('div');
                    wrapper.classList.add('Derivative__spec-group');
                    (0, _domManipulation.wrapAll)(dropDownElem.querySelectorAll('.Derivative__spec'), wrapper);
    
                    var cardNum = inc;
                    var specWrapper = dropDownElem.querySelector('.Derivative__spec-wrapper');
    
                    if (specWrapper.querySelectorAll('.Derivative__spec-title').length > 1) {
                      var titles = [].concat((0, _toConsumableArray3.default)(specWrapper.querySelectorAll('.Derivative__spec-title')));
    
                      var options = titles.map(function (option, index) {
                        return '\n              <li class="dxDropdown__list-item" id="dxDropdown__list-item-' + _this3._elemIndex + '-' + cardNum + '-' + index + '">\n                <span role="option" tabindex="0" class="dxDropdown__list-item-link fontEmissionsDetails" data-index="' + index + '">' + option.textContent + '</span>\n              </li>';
                      }).join('');
    
                      var dropdownHTML = '\n          <div class="dxDropdown">\n            <button class="dxDropdown__button fontEmissionsDetails icon-chevron-down" aria-haspopup="listbox" aria-expanded="false">' + titles[0].textContent + '</button>\n            <ul class="dxDropdown__list" tabindex="-1" role="listbox">\n              ' + options + '\n            </ul>\n          </div>';
    
                      titles.forEach(function (title) {
                        return title.parentNode.removeChild(title);
                      });
                      specWrapper.insertAdjacentHTML('afterbegin', dropdownHTML);
    
                      var drop = new _DxDropdown2.default(specWrapper.querySelector('.dxDropdown'));
                      var dropButton = specWrapper.querySelector('.dxDropdown__button');
                      setEngineSelectLabelText(dropButton);
    
                      var dropDownElement = drop.DxDropdown('getElement');
                      dropDownElement.addEventListener('DxDropdown:update', function (event) {
                        var selectedLiElem = specWrapper.querySelectorAll('.Derivative__spec')[event.detail.target.getAttribute('data-index')];
    
                        if (selectedLiElem.classList.contains('Derivative__spec--visible')) {
                          return;
                        }
    
                        setEngineSelectLabelText(dropButton);
                        var keyframesFadeOut = [{ opacity: 1 }, { opacity: 0 }];
                        var keyframesFadeIn = [{ opacity: 0 }, { opacity: 1 }];
                        var timing = {
                          duration: 600,
                          easing: 'ease-out',
                          fill: 'forwards'
                        };
    
                        var fadeIn = function fadeIn() {
                          var element = selectedLiElem;
                          element.style.opacity = '0';
                          element.style.display = 'block';
                          var animation = element.animate(keyframesFadeIn, timing);
                          animation.pause();
                          animation.onfinish = function () {
                            element.style.opacity = null;
                            _this3.liveRegion.innerHTML = element.innerHTML;
                          };
                          animation.play();
                        };
    
                        var fadeOut = function fadeOut(spec) {
                          var previousElement = spec;
    
                          if (window.getComputedStyle(previousElement).getPropertyValue('display') === 'none') {
                            return;
                          }
    
                          var animation = previousElement.animate(keyframesFadeOut, timing);
                          animation.pause();
                          animation.onfinish = function () {
                            previousElement.style.opacity = '0';
                            setTimeout(function () {
                              previousElement.style.display = 'none';
                              setTimeout(function () {
                                fadeIn();
                                // Accomodate for single Derivatives that could push the page down with .Derivative__engine-data--list-layout
                                _this3._setElementSizes();
                              }, 10);
                            }, 10);
                          };
                          animation.play();
                        };
    
                        specWrapper.querySelectorAll('.Derivative__spec').forEach(function (spec) {
                          return fadeOut(spec);
                        });
                      }, false);
                      specWrapper.querySelectorAll('.Derivative__spec')[0].style.display = 'block';
                    }
                  });
                }
    
                /**
                 * Recaclulates the heights of various elements to keep them consistent across
                 * multiple tabs
                 *
                 * @private
                 */
    
              }, {
                key: '_setElementSizes',
                value: function _setElementSizes() {
                  var maxGroupTextHeight = 0;
                  this._unsetPanelTextHeights();
    
                  var groupTextChildArray = [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('.Derivative__group-text-copy')));
                  if (!groupTextChildArray || !groupTextChildArray.length) {
                    var groupTextArray = [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('.Derivative__group-text')));
                    groupTextArray.forEach(function (elem) {
                      return elem.parentNode.remove(elem);
                    });
                    this.element.classList.add('DerivativesOverview--no-intro');
                  }
    
                  this.ui('dropDownWrapper').forEach(function (dropDown) {
    
                    var groupElem = dropDown.closest('.' + _classes.classes.toggleContentItemClass);
                    var accordionElem = dropDown.closest('.Derivative__accordion-content');
                    var engines = dropDown.querySelectorAll('.Derivative__spec');
                    var groupTextElem = groupElem.querySelectorAll('.Derivative__group-text');
    
                    accordionElem.classList.add('Derivative__accordion-content--force-open');
                    engines.forEach(function (engine) {
                      return engine.classList.add('Derivative__spec--force-open');
                    });
    
                    maxGroupTextHeight = groupTextElem && groupTextElem.offsetHeight > maxGroupTextHeight ? groupTextElem.offsetHeight : maxGroupTextHeight;
    
                    engines.forEach(function (engine) {
                      var heights = {};
                      var titles = engine.querySelectorAll('.Derivative__engine-attribute-label');
    
                      titles.forEach(function (title) {
                        var titleWidth = title.nextElementSibling.querySelector('.Derivative__engine-attribute-wrapper').offsetWidth - 5;
                        var titleMinWidth = 105;
                        var objectKey = parseInt(title.getBoundingClientRect().top, 10);
                        DerivativesOverview.setCSS(title, 'height', 'auto');
                        DerivativesOverview.setCSS(title, 'width', titleWidth > titleMinWidth ? titleWidth + 'px' : titleMinWidth + 'px');
                        if (!heights[objectKey]) {
                          heights[objectKey] = {
                            highest: 0,
                            titles: []
                          };
                        }
                        heights[objectKey].highest = title.offsetHeight > heights[objectKey].highest ? title.offsetHeight : heights[objectKey].highest;
                        heights[objectKey].titles.push({ title: title });
                      });
    
                      (0, _keys2.default)(heights).forEach(function (heightKey) {
                        heights[heightKey].titles.forEach(function (titleElem) {
                          DerivativesOverview.setCSS(titleElem.title, 'height', heights[heightKey].highest + 'px');
                        });
                      });
                    });
                    engines.forEach(function (engine) {
                      return engine.classList.remove('Derivative__spec--force-open');
                    });
                    var h = 0;
                    [].concat((0, _toConsumableArray3.default)(dropDown.querySelectorAll('.Derivative__spec'))).forEach(function (spec) {
                      var elemHeight = spec.offsetHeight;
                      h = elemHeight > h ? elemHeight : h;
                    });
                    [].concat((0, _toConsumableArray3.default)(dropDown.querySelectorAll('.Derivative__spec-group'))).forEach(function (spec) {
                      return DerivativesOverview.setCSS(spec, 'height', h + 'px');
                    });
                    accordionElem.classList.remove('Derivative__accordion-content--force-open');
                  });
                  this._setPanelTextHeights(maxGroupTextHeight);
                }
    
                /**
                 * Sets the container heights for all group texts back to auto
                 *
                 * @private
                 */
    
              }, {
                key: '_unsetPanelTextHeights',
                value: function _unsetPanelTextHeights() {
                  var resetHeights = function resetHeights(elems) {
                    if (elems.length) {
                      elems.forEach(function (elem) {
                        return DerivativesOverview.setCSS(elem, 'height', 'auto');
                      });
                    }
                  };
                  resetHeights(this.element.querySelectorAll('.' + _classes.classes.groupTextClass));
                  resetHeights(this.element.querySelectorAll('.' + _classes.classes.groupTextMaskClass));
                }
    
                /**
                 * Sets the container heights for all group texts to be equal to the value passed as a parameter
                 *
                 * @private
                 */
    
              }, {
                key: '_setPanelTextHeights',
                value: function _setPanelTextHeights(maxGroupTextHeight) {
                  var setHeights = function setHeights(elems, height) {
                    if (elems.length) {
                      elems.forEach(function (elem) {
                        return DerivativesOverview.setCSS(elem, 'height', height);
                      });
                    }
                  };
                  setHeights(this.element.querySelectorAll('.' + _classes.classes.groupTextClass, maxGroupTextHeight));
                  setHeights(this.element.querySelectorAll('.' + _classes.classes.groupTextMaskClass, maxGroupTextHeight));
                }
    
                /**
                 * Define accordion functionality
                 *
                 * @private
                 */
    
              }, {
                key: '_accordions',
                value: function _accordions() {
                  var _this4 = this;
    
                  this.ui('accordionTitles').forEach(function (accordionTitleElem, inc) {
                    var accordionId = _classes.classes.elemClass + '__accordion-content-' + _this4._elemIndex + '-' + inc;
                    var accordionButtonId = _classes.classes.elemClass + '__accordion-button-' + _this4._elemIndex + '-' + inc;
                    var accordionTitle = accordionTitleElem;
                    var accordionContent = accordionTitle.nextElementSibling;
                    var accordionButtonHTML = '\n        <button\n          id=' + accordionButtonId + '\n          aria-expanded="false"\n          aria-controls="' + accordionId + '"\n          aria-label="' + accordionTitle.textContent + '"\n          class="' + _classes.classes.accordionButtonClass + '">\n          ' + accordionTitle.innerHTML.toString() + '\n        </button>';
    
                    accordionTitle.insertAdjacentHTML('afterend', accordionButtonHTML);
                    var accordionButton = accordionTitle.nextElementSibling;
    
                    accordionContent.setAttribute('id', accordionId);
                    accordionContent.setAttribute('aria-labelledby', accordionButtonId);
                    accordionContent.setAttribute('data-labelledby', accordionButtonId);
    
                    accordionButton.addEventListener('click', function (event) {
                      event.preventDefault();
                      var isAnimating = accordionContent.getAttribute('data-slide-animating');
                      if (isAnimating && isAnimating === 'true') {
                        return;
                      }
                      _this4._setElementSizes();
                      if (accordionButton.getAttribute('aria-expanded') === 'false') {
                        accordionButton.setAttribute('aria-expanded', 'true');
                        (0, _slide.dxSlideDown)(accordionContent);
                        return;
                      }
                      accordionButton.setAttribute('aria-expanded', 'false');
                      (0, _slide.dxSlideUp)(accordionContent);
                    }, false);
    
                    accordionContent.style.display = 'none';
                  });
                }
    
                /**
                 * Hide tabs if there is only one tab panel, otherwise init the DxTabs component
                 *
                 * @private
                 */
    
              }, {
                key: '_tabs',
                value: function _tabs() {
                  var _this5 = this;
    
                  var toggleContent = this.element.querySelector('.Derivative__toggle-content');
    
                  /* hide tabs bar if only a single derivative card and return to prevent DxTabs init */
                  if (this.element.querySelectorAll('.DxTabs__tab').length < 2) {
                    var rangeElement = this.element.querySelector('.cmp-derivative__range');
                    if (rangeElement) {
                      rangeElement.remove();
                    }
                    toggleContent.querySelector('.DxTabs__panel').classList.remove('DxTabs__panel');
                    return;
                  }
    
                  var mask = document.createElement('div');
                  mask.classList.add(_classes.classes.groupTextMaskClass);
    
                  var toggleContentFirstChild = toggleContent.firstChild;
                  if (toggleContentFirstChild) {
                    (0, _domManipulation.insertBefore)(toggleContentFirstChild, mask);
                  } else {
                    toggleContent.appendChild(mask);
                  }
    
                  var dynamicURLInitialTab = this.element.querySelector('.cmp-derivative__range').getAttribute('data-initial-tab');
    
                  this._dxTabs = new _DxTabs2.default(this.element.querySelector('.DxTabs'), {
                    initialTab: dynamicURLInitialTab || 0
                  });
    
                  this._dxTabsElement = this._dxTabs.DxTabs('getElement');
    
                  this._dxTabsElement.addEventListener('DxTabs:beforefadein', function (evt) {
                    _this5._resize();
                    _this5._carouselUpdate();
                    setTimeout(function () {
                      return objectFitPolyfill();
                    }, 100); // IE11 fix
    
                    if (_this5._dxTabsInited) {
                      var selectedTab = evt.detail.selectedTab;
    
                      var dynamicURL = (0, _dynamicUrl.tabHasDynamicURL)(selectedTab);
    
                      if (dynamicURL) {
                        var formattedURL = (0, _dynamicUrl.removeSSLFromLocalURL)(dynamicURL);
    
                        (0, _dynamicUrl.pushDynamicURLToHistory)(formattedURL);
                      }
                    }
                    _this5._dxTabsInited = true;
                  }, false);
    
                  this.element.addEventListener('Derivative:before-tabs-in', function () {
                    _this5._resize();
                    _this5._carouselUpdate();
                    (0, _index.dxSetTimeout)(function () {
                      return objectFitPolyfill();
                    }, 100); // IE11 fix
                  }, false);
    
                  window.onpopstate = function () {
                    var href = window.location.href;
    
                    var previous = _this5.element.querySelector('.' + _classes.classes.panelActive) || null;
                    var targetPanel = (0, _dynamicUrl.getPanelFromURL)(_this5.element, href);
    
                    (0, _dynamicUrl.switchPanelsTabs)(_this5.element, previous, targetPanel);
                  };
                }
    
                /**
                 * Init the carousels using swiper
                 *
                 * @private
                 */
    
              }, {
                key: '_carousel',
                value: function _carousel() {
                  var _this6 = this;
    
                  var labels = this._getLabels();
    
                  this.ui('carousel').forEach(function (carousel) {
                    var slides = carousel.querySelectorAll('.Derivative__carousel__item');
    
                    if (slides.length > 1) {
                      var wrapper = document.createElement('div');
                      wrapper.classList.add('swiper-wrapper');
                      wrapper.classList.add('Derivative__carousel-wrapper');
    
                      [].concat((0, _toConsumableArray3.default)(slides)).forEach(function (slide) {
                        return slide.classList.add('swiper-slide');
                      });
    
                      carousel.classList.add('swiper-container');
                      carousel.setAttribute('dir', _this6._direction);
    
                      (0, _domManipulation.wrapAll)(slides, wrapper);
    
                      var carouselControls = '<button class="Derivative__carousel-previous swiper-button swiper-button--prev"></button>\n        <button class="Derivative__carousel-next swiper-button swiper-button--next"></button>\n        <div class="Derivative__carousel-pagination"></div>';
                      carousel.insertAdjacentHTML('beforeend', carouselControls);
    
                      var paginationOptions = {
                        labels: labels,
                        numberOfPips: slides.length,
                        defaultSelected: 0
                      };
    
                      var paginationElement = carousel.querySelector('.Derivative__carousel-pagination');
                      var paginationObject = new _Pagination2.default(paginationElement, paginationOptions);
    
                      var sliderOptions = {
                        autoHeight: false,
                        initialSlide: 0,
                        loop: true,
                        grabCursor: true,
                        speed: 600,
                        pagination: false,
                        preloadImages: true,
                        updateOnImagesReady: true,
                        a11y: true,
                        navigation: {
                          prevEl: carousel.querySelector('.Derivative__carousel-previous'),
                          nextEl: carousel.querySelector('.Derivative__carousel-next')
                        }
                      };
    
                      var swiper = new _swiper2.default(carousel, sliderOptions);
                      var swiperA11yHelperConfig = { paginationObject: paginationObject, labels: labels };
                      (0, _swiper3.swiperA11yHelper)(swiper, swiperA11yHelperConfig);
                    }
                  });
                }
    
                /**
                 * Force carousel update when switching tabs to prevent Swiper breaking
                 *
                 * @private
                 */
    
              }, {
                key: '_carouselUpdate',
                value: function _carouselUpdate() {
                  var carousels = void 0;
                  if (this._template === 'dropdown') {
                    carousels = this.element.querySelectorAll('.' + _classes.classes.panelActive + ' .swiper-container');
                  } else {
                    var activePanelId = this.element.querySelector('.DxTabs__tab--active').getAttribute('aria-controls');
                    carousels = this.element.querySelectorAll('#' + activePanelId + ' .swiper-container');
                  }
                  carousels.forEach(function (carousel) {
                    carousel.swiper.update();
                    (0, _swiper3.swiperPreventTabbingIssues)(carousel.swiper);
                  });
                }
    
                /**
                 * Get the element's accessible label attributes
                 *
                 * @private
                 */
    
              }, {
                key: '_getLabels',
                value: function _getLabels() {
                  var _this7 = this;
    
                  var getAttribute = function getAttribute(labelSuffix) {
                    return _this7.element.getAttribute('data-label-' + labelSuffix);
                  };
                  var labelSuffixes = ['next', 'previous', 'pip', 'slideChanged'];
                  var labels = _assign2.default.apply(Object, [{}].concat((0, _toConsumableArray3.default)(labelSuffixes.map(function (label) {
                    return (0, _defineProperty3.default)({}, label, getAttribute(label));
                  }))));
                  return labels;
                }
    
                /**
                 * Init bodystyle control dropdown if component is not using tabs
                 *
                 * @private
                 */
    
              }, {
                key: '_controlDropdowns',
                value: function _controlDropdowns() {
                  var _this8 = this;
    
                  // set first panel 
                  var dropdownData = this.element.querySelector('.Derivative__dropdown-filters').getAttribute('data-dropdownvalues');
    
                  dropdownData = JSON.parse(dropdownData);
                  let dropdownDataKey = Object.keys(dropdownData);
                  if (dropdownDataKey.length > 0) {
                    let firstPrimaryBtn = dropdownDataKey[0];
                    let firstSecondaryBtn = dropdownData[dropdownDataKey[0]][0];
    
                    $('#bodystyle_dropdown_button').html(firstPrimaryBtn);
                    $('#model_dropdown_button').html(firstSecondaryBtn);
                    $('#Derivative__controls-form-submit').attr('data-bodystyle', firstPrimaryBtn);
                    $('#Derivative__controls-form-submit').attr('data-model', firstSecondaryBtn);
                  }
    
                  // set first panel to be active
                  var firstPanel = this.element.querySelector('.Derivative__dropdown-panel');
    
                  firstPanel.classList.add(_classes.classes.panelActive);
    
    
                  this.modelsDropdownHidden = this.element.querySelector('.' + _classes.classes.modelDropdown).classList.contains(_classes.classes.controlDropdowns + '--hidden');
    
    
                  var controlDropdowns = [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('.' + _classes.classes.controlDropdowns + ':not(.' + _classes.classes.controlDropdowns + '--hidden)')));
                  var submitButton = this.element.querySelector('.Derivative__controls-form-submit');
    
                  // if (!this.modelsDropdownHidden) {
                  //   var initialSelectedModel = submitButton.getAttribute('data-model');
                  //   this._hideDerivatives(initialSelectedModel);
                  // }
    
    
    
                  //  $('#Derivative__controls-form-submit').trigger("click");
    
                  controlDropdowns.forEach(function (dropdown) {
                    var controlDropdown = new _DxDropdown2.default(dropdown);
                    var dropDownElement = controlDropdown.DxDropdown('getElement');
                    dropDownElement.addEventListener('DxDropdown:update', function (event) {
                      var selectedControl = event.detail.target.getAttribute('data-value');
                      var currentDropdown = event.currentTarget;
    
                      if (currentDropdown.classList.contains(_classes.classes.bodystyleDropdown)) {
                        submitButton.setAttribute('data-bodystyle', selectedControl);
    
                        if (!_this8.modelsDropdownHidden) {
                          _this8._rebuildModelDropdown(selectedControl, submitButton);
                        }
                      } else if (currentDropdown.classList.contains(_classes.classes.modelDropdown)) {
                        submitButton.setAttribute('data-model', selectedControl);
                      }
                    });
                  });
    
                  submitButton.addEventListener('click', function (event) {
                    event.preventDefault();
                    var previous = _this8.element.querySelector('.' + _classes.classes.panelActive) || null;
                    var bodystyle = event.currentTarget.getAttribute('data-bodystyle');
                    _this8.selectedModel = event.currentTarget.getAttribute('data-model');
                    console.log(bodystyle);
                    console.log(_this8.selectedModel);
    
                    // set active panel
                    (0, _controlDropdowns2.switchPanels)(_this8.element, previous, bodystyle);
                  });
    
                  this.element.addEventListener('Derivative:before-dropdown-in', function () {
                    // if (!_this8.modelsDropdownHidden) {
                    //   _this8._hideDerivatives(_this8.selectedModel);
                    // }
                    _this8._resize();
                    _this8._carouselUpdate();
                    (0, _index.dxSetTimeout)(function () {
                      return objectFitPolyfill();
                    }, 100); // IE11 fix
                  }, false);
                }
              }, {
                key: '_rebuildModelDropdown',
                value: function _rebuildModelDropdown(bodystyle, submitButton) {
                  var dropdownValues = this.element.querySelector('.Derivative__dropdown-filters').getAttribute('data-dropdownvalues');
                  if (!dropdownValues) {
                    return;
                  }
    
                  var dropdown = this.element.querySelector('.' + _classes.classes.modelDropdown);
                  var list = dropdown.querySelector('.dxDropdown__list');
                  if (!list) {
                    return;
                  }
    
                  var models = (0, _controlDropdowns2.getModels)(JSON.parse(dropdownValues), bodystyle);
    
                  var _models = (0, _slicedToArray3.default)(models, 1),
                    firstModel = _models[0];
    
                  var listItems = (0, _controlDropdowns2.createModelListItems)(models).join('');
                  var button = dropdown.querySelector('.dxDropdown__button');
    
                  list.innerHTML = listItems;
                  button.innerHTML = firstModel;
                  submitButton.setAttribute('data-model', firstModel);
                }
              }, {
                key: '_hideDerivatives',
                value: function _hideDerivatives(model) {
                  var activePanel = (0, _controlDropdowns2.getActivePanel)(this.element);
                  var derivatives = activePanel.querySelectorAll('.Derivative');
    
                  derivatives.forEach(function (derivative) {
                    if (derivative.getAttribute('data-model') === model) {
                      if (derivative.classList.contains('Derivative--hidden')) {
                        derivative.classList.remove('Derivative--hidden');
                      }
                      derivative.classList.add('Derivative--active');
                    } else {
                      if (derivative.classList.contains('Derivative--active')) {
                        derivative.classList.remove('Derivative--active');
                      }
                      derivative.classList.add('Derivative--hidden');
                    }
                  });
                }
    
                /**
                 * Init the Modals on key features/engine attributes using the Modal component
                 *
                 * @private
                 */
    
              }, {
                key: '_modals',
                value: function _modals() {
                  // TO DO: Modal is currently jQuery only, need an exported class version we can import here then this jQuery can be removed
                  var modalButtons = this.element.querySelectorAll('[data-modal-trigger]');
    
                  modalButtons.forEach(function (modalButton) {
                    var closeLabel = modalButton.getAttribute(['data-close-label']);
                    $(modalButton).Modal({
                      closeLabel: closeLabel
                    });
                    modalButton.addEventListener('click', function (event) {
                      var button = event.currentTarget;
                      $(button).Modal('open', button.nextElementSibling);
                    }, false);
                  });
                }
    
                /**
                 * Set CSS property on passed element
                 *
                 * @private
                 */
    
              }], [{
                key: 'setCSS',
                value: function setCSS(elem, property, value) {
                  var element = elem;
                  element.style[property] = value;
                }
              }]);
              return DerivativesOverview;
            }();
    
            var DerivativesOverviewElements = document.querySelectorAll('.cmp-derivativesOverview');
            if (DerivativesOverviewElements.length) {
              Array.prototype.forEach.call(DerivativesOverviewElements, function (el) {
                return new DerivativesOverview(el);
              });
            }
    
            /***/
          }),
    
    /***/ "./src/main/webapp/components/DerivativesOverview/js/animations.js":
    /*!*************************************************************************!*\
      !*** ./src/main/webapp/components/DerivativesOverview/js/animations.js ***!
      \*************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            var animationOptions = exports.animationOptions = {
              fadeOutKeyframes: [{ opacity: 1 }, { opacity: 0 }],
              fadeInKeyframes: [{ opacity: 0 }, { opacity: 1 }],
              timingFadeIn: {
                duration: 400,
                easing: 'ease-in',
                fill: 'forwards'
              },
              timingFadeOut: {
                duration: 300,
                easing: 'ease-out',
                fill: 'forwards'
              }
            };
    
            var doAnimation = exports.doAnimation = function doAnimation(elem, keyframes, timing, finish) {
              var animation = elem.animate(keyframes, timing);
              animation.pause();
              animation.onfinish = function () {
                return finish();
              };
              animation.play();
            };
    
            /***/
          }),
    
    /***/ "./src/main/webapp/components/DerivativesOverview/js/classes.js":
    /*!**********************************************************************!*\
      !*** ./src/main/webapp/components/DerivativesOverview/js/classes.js ***!
      \**********************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            var classes = exports.classes = {
              elemClass: 'DerivativesOverview',
              controlItemClass: 'DerivativesOverview__control-item',
              accordionButtonClass: 'Derivative__accordion-button',
              groupTextMaskClass: 'Derivative__group-text-mask',
              groupTextClass: 'Derivative__group-text',
              toggleContentItemClass: 'Derivative__panel',
              columnWrapperClass: 'Derivative__grouped-feature-column',
              controlDropdowns: 'Derivative__control-dropdown',
              bodystyleDropdown: 'Derivative__control-dropdown--bodystyle',
              modelDropdown: 'Derivative__control-dropdown--model',
              panelActive: 'Derivative__dropdown-panel--active'
            };
    
            /***/
          }),
    
    /***/ "./src/main/webapp/components/DerivativesOverview/js/control-dropdowns.js":
    /*!********************************************************************************!*\
      !*** ./src/main/webapp/components/DerivativesOverview/js/control-dropdowns.js ***!
      \********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.createModelListItems = exports.getModels = exports.getActivePanel = exports.switchPanels = exports.getPanelFromDropdown = undefined;
    
            var _classes = __webpack_require__(/*! ./classes */ "./src/main/webapp/components/DerivativesOverview/js/classes.js");
    
            var _animations = __webpack_require__(/*! ./animations */ "./src/main/webapp/components/DerivativesOverview/js/animations.js");
    
            var _utils = __webpack_require__(/*! ../../../resources/dev/js/utils */ "./src/main/webapp/resources/dev/js/utils/index.js");
    
            var getPanelFromDropdown = exports.getPanelFromDropdown = function getPanelFromDropdown(element, selectedControl) {
              // consider how this may change with 2 dropdowns in next story
              return element.querySelector('.' + _classes.classes.toggleContentItemClass + '[data-bodystyle=\'' + selectedControl + '\']');
            };
    
            var setActivePanel = function setActivePanel(element, selectedControl) {
              var selectedPanel = getPanelFromDropdown(element, selectedControl);
              selectedPanel.style.opacity = 0;
              selectedPanel.style.display = 'block';
              selectedPanel.classList.add(_classes.classes.panelActive);
              var finish = function finish() {
                (0, _utils.eventTrigger)(element, 'Derivative:dropdown-in');
              };
              window.requestAnimationFrame(function () {
                (0, _utils.eventTrigger)(element, 'Derivative:before-dropdown-in', { selectedPanel: selectedPanel });
                (0, _animations.doAnimation)(selectedPanel, _animations.animationOptions.fadeInKeyframes, _animations.animationOptions.timingFadeIn, finish);
              });
            };
    
            var switchPanels = exports.switchPanels = function switchPanels(element, previousPanel, nextDropdown) {
              if (previousPanel) {
                var finish = function finish() {
                  (0, _utils.eventTrigger)(element, 'Derivative:dropdown-out');
                  window.requestAnimationFrame(function () {
                    previousPanel.classList.remove(_classes.classes.panelActive);
                    previousPanel.style.display = 'none'; // eslint-disable-line
                    setActivePanel(element, nextDropdown);
                  });
                };
                (0, _animations.doAnimation)(previousPanel, _animations.animationOptions.fadeOutKeyframes, _animations.animationOptions.timingFadeOut, finish);
              } else {
                setActivePanel(element, nextDropdown);
              }
            };
    
            var getActivePanel = exports.getActivePanel = function getActivePanel(element) {
              return element.querySelector('.' + _classes.classes.panelActive);
            };
    
            var getModels = exports.getModels = function getModels(dropdowns, bodystyle) {
              if (!bodystyle) {
                throw new Error('No bodystyle has been provided');
              }
    
              if (bodystyle in dropdowns !== true) {
                throw new Error('Bodystyle is not valid or doesn\'t exist');
              }
    
              return dropdowns[bodystyle];
            };
    
            var createModelListItems = exports.createModelListItems = function createModelListItems(models) {
              if (!models) {
                throw new Error('models parameter is missing');
              }
    
              return models.map(function (model, index) {
                return '<li class="dxDropdown__list-item DerivativesOverview__control-item" id="model-list-item-' + index + '" role="option">\n      <a href="#" class="dxDropdown__list-item-link DerivativesOverview__control-text fontEmissionsDetails" data-value="' + model + '">' + model + '</a>\n    </li>';
              });
            };
    
            /***/
          }),
    
    /***/ "./src/main/webapp/components/DerivativesOverview/js/dynamic-url.js":
    /*!**************************************************************************!*\
      !*** ./src/main/webapp/components/DerivativesOverview/js/dynamic-url.js ***!
      \**************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.switchPanelsTabs = exports.getPanelFromURL = exports.pushDynamicURLToHistory = exports.getActivePanel = exports.removeSSLFromLocalURL = exports.tabHasDynamicURL = undefined;
    
            var _classes = __webpack_require__(/*! ./classes */ "./src/main/webapp/components/DerivativesOverview/js/classes.js");
    
            var _animations = __webpack_require__(/*! ./animations */ "./src/main/webapp/components/DerivativesOverview/js/animations.js");
    
            var _utils = __webpack_require__(/*! ../../../resources/dev/js/utils */ "./src/main/webapp/resources/dev/js/utils/index.js");
    
            var tabHasDynamicURL = exports.tabHasDynamicURL = function tabHasDynamicURL(tab) {
              return tab.getAttribute('data-dynamic-url');
            };
    
            var removeSSLFromLocalURL = exports.removeSSLFromLocalURL = function removeSSLFromLocalURL(url) {
              return url.includes('localhost') ? url.replace('https', 'http') : url;
            };
    
            var getActivePanel = exports.getActivePanel = function getActivePanel(element) {
              return element.querySelector('.' + _classes.classes.panelActive);
            };
    
            var _formatSSLtoTargetURL = function _formatSSLtoTargetURL(url) {
              return url.includes('localhost') ? url.replace('http', 'https') : url;
            };
    
            var pushDynamicURLToHistory = exports.pushDynamicURLToHistory = function pushDynamicURLToHistory(url) {
    
              let urlFileName = $(location).attr('pathname').split('/').pop();
              let fileName = urlFileName.split('.').shift();
              let fileExtension = urlFileName.split('.').pop();
              url = $(url).text();
              let newUrl = `${fileName}.${url}.${fileExtension}`;
              window.history.pushState({}, '', newUrl);
            };
    
            var getPanelFromURL = exports.getPanelFromURL = function getPanelFromURL(element, url) {
              var targetTab = element.querySelector('.DxTabs__tab[data-dynamic-url=\'' + _formatSSLtoTargetURL(url) + '\']');
              var targetTabIndex = targetTab ? targetTab.getAttribute('data-tab-index') : 0;
    
              return element.querySelector('.' + _classes.classes.toggleContentItemClass + '[data-index=\'' + targetTabIndex + '\']');
            };
    
            var setActiveTab = function setActiveTab(element, panelID) {
              var currentTab = element.querySelector('.' + _classes.classes.controlItemClass + '.DxTabs__tab--active');
              var targetTab = element.querySelector('.' + _classes.classes.controlItemClass + '[data-tab-index=\'' + panelID + '\']');
    
              currentTab.classList.remove('DxTabs__tab--active');
              targetTab.classList.add('DxTabs__tab--active');
            };
    
            var setActivePanel = function setActivePanel(element, targetPanel) {
              var selectedPanel = targetPanel;
              var panelID = selectedPanel.getAttribute('data-index');
    
              selectedPanel.style.opacity = 0;
              selectedPanel.style.display = 'block';
              selectedPanel.classList.add(_classes.classes.panelActive);
    
              setActiveTab(element, panelID);
    
              var finish = function finish() {
                (0, _utils.eventTrigger)(element, 'Derivative:tabs-in');
              };
              window.requestAnimationFrame(function () {
                (0, _utils.eventTrigger)(element, 'Derivative:before-tabs-in', { selectedPanel: selectedPanel });
                (0, _animations.doAnimation)(selectedPanel, _animations.animationOptions.fadeInKeyframes, _animations.animationOptions.timingFadeIn, finish);
              });
            };
    
            var switchPanelsTabs = exports.switchPanelsTabs = function switchPanelsTabs(element, previousPanel, targetPanel) {
              if (previousPanel) {
                var finish = function finish() {
                  (0, _utils.eventTrigger)(element, 'Derivative:tabs-previous-out');
                  window.requestAnimationFrame(function () {
                    previousPanel.classList.remove(_classes.classes.panelActive);
                    previousPanel.style.display = 'none'; // eslint-disable-line
                    setActivePanel(element, targetPanel);
                  });
                };
                (0, _animations.doAnimation)(previousPanel, _animations.animationOptions.fadeOutKeyframes, _animations.animationOptions.timingFadeOut, finish);
              } else {
                setActivePanel(element, targetPanel);
              }
            };
    
            /***/
          }),
    
    /***/ "./src/main/webapp/components/DxDropdown/js/DxDropdown.js":
    /*!****************************************************************!*\
      !*** ./src/main/webapp/components/DxDropdown/js/DxDropdown.js ***!
      \****************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
    
            var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
    
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
            var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
    
            var _createClass3 = _interopRequireDefault(_createClass2);
    
            var _aria = __webpack_require__(/*! ../../../resources/dev/js/utils/aria */ "./src/main/webapp/resources/dev/js/utils/aria.js");
    
            var _index = __webpack_require__(/*! ../../../resources/dev/js/utils/index */ "./src/main/webapp/resources/dev/js/utils/index.js");
    
            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
            var DxDropdown = function () {
              function DxDropdown(el) {
                var _this = this;
    
                var preventDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                (0, _classCallCheck3.default)(this, DxDropdown);
    
                this.element = el;
                this.open = false;
                this.button = el.querySelector('.dxDropdown__button');
                this.listbox = el.querySelector('.dxDropdown__list');
    
                this.element.addEventListener('dxDropdown:Rebind', function () {
                  return _this.rebindListBox();
                });
                this.element.addEventListener('click', function (e) {
                  return _this.clickEventListeners(e, preventDefault);
                });
                this.button.addEventListener('keyup', function (e) {
                  return _this.checkShow(e);
                });
                this.listbox.addEventListener('blur', function (e) {
                  return _this.testBlur(e);
                });
                this.listbox.addEventListener('keydown', function (e) {
                  return _this.keyDownEvents(e);
                });
    
                var firstItem = el.querySelector('.dxDropdown__list-item-link:not(.dxDropdown__list-item-link--disabled');
                this.addActiveDropdownItem(firstItem);
    
                window.addEventListener('click', function (e) {
                  return _this.handleWindowClick(e);
                });
              }
    
              (0, _createClass3.default)(DxDropdown, [{
                key: 'testBlur',
                value: function testBlur(e) {
                  if (!e.relatedTarget.classList.contains('dxDropdown__list-item') && !e.relatedTarget.classList.contains('dxDropdown__list-item-link')) {
                    this.closeDropdown();
                  }
                }
              }, {
                key: 'rebindListBox',
                value: function rebindListBox() {
                  var _this2 = this;
    
                  this.listbox = this.element.querySelector('.dxDropdown__list');
                  this.listbox.addEventListener('blur', function (e) {
                    return _this2.testBlur(e);
                  });
                  this.listbox.addEventListener('keydown', function (e) {
                    return _this2.keyDownEvents(e);
                  });
                }
              }, {
                key: 'handleWindowClick',
                value: function handleWindowClick(e) {
                  var _this3 = this;
    
                  var nodes = [];
                  var el = e.target;
                  var isDropdownEl = false;
    
                  while (el.parentNode) {
                    nodes.unshift(el.parentNode);
                    el = el.parentNode;
                  }
    
                  nodes.forEach(function (node) {
                    if (node.classList && node === _this3.element) {
                      isDropdownEl = true;
                    }
                  });
    
                  if (!isDropdownEl) {
                    this.closeDropdown(false);
                  }
                }
              }, {
                key: 'clickEventListeners',
                value: function clickEventListeners(e, preventDefault) {
                  if (preventDefault) {
                    e.preventDefault();
                  }
                  var el = e.target;
                  if (el.classList.contains('dxDropdown__button')) {
                    this.toggleDropdown();
                  } else if (el.classList.contains('dxDropdown__list-item-link') && !el.classList.contains('dxDropdown__list-item-link--disabled')) {
                    this.updateButtonText(e);
                    this.closeDropdown();
                  } else if (el.classList.contains('dxDropdown__list-item') && !el.querySelector('.dxDropdown__list-item-link').classList.contains('dxDropdown__list-item-link--disabled')) {
                    var childLink = el.querySelector('.dxDropdown__list-item-link');
                    this.updateButtonText(childLink);
                    this.closeDropdown();
                  }
                }
              }, {
                key: 'keyDownEvents',
                value: function keyDownEvents(e) {
                  var key = e.which || e.keyCode;
                  var DOWN = _aria.KeyCode.DOWN,
                    UP = _aria.KeyCode.UP,
                    ESC = _aria.KeyCode.ESC,
                    RETURN = _aria.KeyCode.RETURN,
                    TAB = _aria.KeyCode.TAB;
    
    
                  switch (key) {
                    case DOWN:
                      e.preventDefault();
                      this.nextItem(e);
                      break;
                    case TAB:
                      e.preventDefault();
                      if (e.shiftKey) {
                        this.previousItem(e);
                      } else {
                        this.nextItem(e);
                      }
                      break;
                    case UP:
                      e.preventDefault();
                      this.previousItem(e);
                      break;
                    case ESC:
                      e.preventDefault();
                      this.closeDropdown();
                      break;
                    case RETURN:
                      e.preventDefault();
                      this.updateButtonText(e);
                      this.closeDropdown();
                      break;
                    default:
                      break;
                  }
                }
              }, {
                key: 'checkShow',
                value: function checkShow(e) {
                  var key = e.which || e.keyCode;
                  var UP = _aria.KeyCode.UP,
                    DOWN = _aria.KeyCode.DOWN;
    
    
                  switch (key) {
                    case UP:
                    case DOWN:
                      e.preventDefault();
                      this.openDropdown();
                      break;
                    default:
                      break;
                  }
                }
              }, {
                key: 'toggleDropdown',
                value: function toggleDropdown() {
                  return this.open ? this.closeDropdown() : this.openDropdown();
                }
              }, {
                key: 'openDropdown',
                value: function openDropdown() {
                  this.element.classList.add('dxDropdown--active');
                  this.button.setAttribute('aria-expanded', 'true');
    
                  this.focusFirstItem();
                  this.open = true;
                }
              }, {
                key: 'closeDropdown',
                value: function closeDropdown() {
                  var setFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    
                  this.element.classList.remove('dxDropdown--active');
                  this.button.setAttribute('aria-expanded', 'false');
                  this.open = false;
    
                  if (setFocus) {
                    this.button.focus();
                  }
                }
              }, {
                key: 'updateButtonText',
                value: function updateButtonText(targetElement) {
                  var target = targetElement.target ? targetElement.target : targetElement;
                  this.button.innerHTML = target.innerHTML;
                  this.fireEvent('DxDropdown:update', {
                    target: target,
                    value: this.button.innerHTML
                  });
                  this.addActiveDropdownItem(target);
                }
              }, {
                key: 'nextItem',
                value: function nextItem(e) {
                  var _this4 = this;
    
                  var itemList = this.listbox.querySelectorAll('.dxDropdown__list-item-link:not(.dxDropdown__list-item-link--disabled)');
    
                  Array.prototype.forEach.call(itemList, function (el, i) {
                    if (e.target === el) {
                      if (i === itemList.length - 1) {
                        _this4.focusFirstItem();
                      } else {
                        itemList[i + 1].focus();
                      }
                    }
                  });
                }
              }, {
                key: 'previousItem',
                value: function previousItem(e) {
                  var _this5 = this;
    
                  var itemList = this.listbox.querySelectorAll('.dxDropdown__list-item-link:not(.dxDropdown__list-item-link--disabled)');
    
                  Array.prototype.forEach.call(itemList, function (el, i) {
                    if (e.target === el) {
                      if (i === 0) {
                        _this5.focusLastItem();
                      } else {
                        itemList[i - 1].focus();
                      }
                    }
                  });
                }
              }, {
                key: 'focusFirstItem',
                value: function focusFirstItem() {
                  var firstItem = this.listbox.querySelector('.dxDropdown__list-item-link:not(.dxDropdown__list-item-link--disabled)');
    
                  firstItem.focus();
                }
              }, {
                key: 'focusLastItem',
                value: function focusLastItem() {
                  var itemList = this.listbox.querySelectorAll('.dxDropdown__list-item-link:not(.dxDropdown__list-item-link--disabled)');
    
                  if (itemList.length) {
                    itemList[itemList.length - 1].focus();
                  }
                }
              }, {
                key: 'addActiveDropdownItem',
                value: function addActiveDropdownItem(el) {
                  var activeEl = this.element.querySelector('.dxDropdown__list-item-link--active:not(.dxDropdown__list-item-link--disabled)');
    
                  if (activeEl !== null) {
                    activeEl.classList.remove('dxDropdown__list-item-link--active');
                  }
                  el.classList.add('dxDropdown__list-item-link--active');
                }
              }, {
                key: 'fireEvent',
                value: function fireEvent(eventType) {
                  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    
                  (0, _index.eventTrigger)(this.element, eventType, payload);
                }
              }, {
                key: 'getElement',
                value: function getElement() {
                  return this.element;
                }
              }, {
                key: 'DxDropdown',
                value: function DxDropdown(method) {
                  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    
                  var fn = this[method];
                  return typeof fn === 'function' ? fn.bind(this, options)() : undefined;
                }
              }]);
              return DxDropdown;
            }();
    
            exports.default = DxDropdown;
    
            /***/
          }),
    
    /***/ "./src/main/webapp/components/DxTabs/es6/DxTabs.js":
    /*!*********************************************************!*\
      !*** ./src/main/webapp/components/DxTabs/es6/DxTabs.js ***!
      \*********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
    
            var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
    
            var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
    
            var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");
    
            var _assign2 = _interopRequireDefault(_assign);
    
            var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
    
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
            var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
    
            var _createClass3 = _interopRequireDefault(_createClass2);
    
            var _index = __webpack_require__(/*! ../../../resources/dev/js/utils/index */ "./src/main/webapp/resources/dev/js/utils/index.js");
    
            var _windowDimensions = __webpack_require__(/*! ../../../resources/dev/js/utils/windowDimensions */ "./src/main/webapp/resources/dev/js/utils/windowDimensions.js");
    
            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
            var DxTabs = function () {
              // jshint ignore:end
    
              // jshint ignore:start
              function DxTabs(element) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                (0, _classCallCheck3.default)(this, DxTabs);
    
                this.element = element;
                this.options = (0, _assign2.default)({}, DxTabs._defaults, options);
                this.tabs = [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('[role="tab"]')));
                this.tablist = this.element.querySelector('[role="tablist"]');
                this.tabsWidthTotal = 0;
                this.panelsContainer = document.querySelector('[data-dxtabs-panels-id="' + this.element.getAttribute('data-dxtabs-id') + '"]');
                this.panels = [].concat((0, _toConsumableArray3.default)(this.panelsContainer.querySelectorAll('[role="tabpanel"]')));
                this.animating = false;
                this.init();
              }
    
              (0, _createClass3.default)(DxTabs, [{
                key: 'init',
                value: function init() {
                  if (!this.tabs.length || this.tabs.length < 2) {
                    if (this.panels.length) {
                      var selectedPanel = this.panels[this.options.initialTab];
                      this.fireEvent('DxTabs:singletab', { selectedPanel: selectedPanel });
                      this.panels[0].style.display = 'block';
                      this.panels[0].style.opacity = 1;
                    }
                    this.element.parentNode.removeChild(this.element);
                    return;
                  }
    
                  this.tabSetup();
                  this.setInitialState();
                  this.addEvents();
    
                  var selectedTab = this.tabs[this.options.initialTab];
                  this.fireEvent('DxTabs:init', {
                    selectedTab: selectedTab,
                    selectedPanel: this.getPanelFromTab(selectedTab)
                  });
                }
              }, {
                key: 'fireEvent',
                value: function fireEvent(eventType) {
                  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    
                  (0, _index.eventTrigger)(this.element, eventType, payload);
                }
              }, {
                key: 'tabSetup',
                value: function tabSetup() {
                  var _this = this;
    
                  this.tabs.forEach(function (tab, index) {
                    var id = _this.element.getAttribute('data-dxtabs-id');
                    var tabId = 'DxTabs_' + id + '_tab_' + index;
                    var panelId = 'DxTabs_' + id + '_panel_' + index;
                    var panel = _this.panels[index];
    
    
                    tab.setAttribute('tabindex', '-1');
                    tab.setAttribute('aria-selected', 'false');
                    tab.setAttribute('id', tabId);
                    tab.setAttribute('aria-controls', panelId);
                    if (panel) {
                      panel.setAttribute('tabindex', '0');
                      panel.setAttribute('data-index', index);
                      panel.setAttribute('id', panelId);
                      panel.setAttribute('aria-labelledby', tabId);
                    }
                  });
                  (0, _index.tablistNavigation)(this.element);
                  this.collapseWhitespaceBetweenTabs();
                }
              }, {
                key: 'addEvents',
                value: function addEvents() {
                  var _this2 = this;
    
                  this.tabs.forEach(function (tab) {
                    return tab.addEventListener('click', function (event) {
                      return _this2.tabClickHandler(event);
                    }, false);
                  });
                  var throttleResize = (0, _index.throttle)(function () {
                    return _this2.setDimensions();
                  }, 250, this);
                  window.addEventListener('resize', function () {
                    return throttleResize(_this2.element);
                  });
                  window.addEventListener('load', function () {
                    return _this2.setDimensions();
                  });
                  this.setDimensions();
                }
              }, {
                key: 'collapseWhitespaceBetweenTabs',
                value: function collapseWhitespaceBetweenTabs() {
                  [].concat((0, _toConsumableArray3.default)(this.tablist.childNodes)).forEach(function (node) {
                    if (node.nodeType !== 1) {
                      node.parentNode.removeChild(node);
                    }
                  });
                }
              }, {
                key: 'unsetTabHeights',
                value: function unsetTabHeights() {
                  this.tabs.forEach(function (tab) {
                    return DxTabs.setNewStyle(tab, 'height', 'auto');
                  });
                }
              }, {
                key: 'unsetTabWidths',
                value: function unsetTabWidths() {
                  this.tabs.forEach(function (tab) {
                    return DxTabs.setNewStyle(tab, 'width', 'auto');
                  });
                }
              }, {
                key: 'setDimensions',
                value: function setDimensions() {
                  this.setTabSizes();
                  this.setMaskWidth();
                  this.overflowCheck();
                  this.fireEvent('DxTabs:resized');
                }
              }, {
                key: 'overflowCheck',
                value: function overflowCheck() {
                  var tabListStyles = window.getComputedStyle(this.tablist);
                  var tabListPadding = parseFloat(tabListStyles.getPropertyValue('padding-left')) + parseFloat(tabListStyles.getPropertyValue('padding-right'));
    
                  if ((0, _windowDimensions.windowWidth)() <= this.tabsWidthTotal + tabListPadding) {
                    this.tablist.classList.add(DxTabs.classes.tabListOverflow);
                    return;
                  }
                  this.tablist.classList.remove(DxTabs.classes.tabListOverflow);
                }
              }, {
                key: 'ensureNextTabVisible',
                value: function ensureNextTabVisible() {
                  var _this3 = this;
    
                  var tabListWidth = parseFloat(window.getComputedStyle(this.tablist).getPropertyValue('width'));
                  var tabsArray = [];
                  var visibleTabsArray = [];
                  var tabsWidthRunningTotal = 0;
                  var visibleTabsWidthRunningTotal = 0;
                  this.tabs.forEach(function (tab) {
                    tab.style.removeProperty('max-width');
                    tab.style.removeProperty('padding-left');
                    tab.style.removeProperty('padding-right');
    
                    var tabStyles = window.getComputedStyle(tab);
                    var tabWidth = parseFloat(tabStyles.getPropertyValue('width'));
                    var tabMaxWidth = parseFloat(tabStyles.getPropertyValue('max-width'));
                    var tabPadLeft = parseFloat(tabStyles.getPropertyValue('padding-left'));
                    var tabPadRight = parseFloat(tabStyles.getPropertyValue('padding-right'));
                    var textAlign = tabStyles.getPropertyValue('text-align');
                    var newTotal = visibleTabsWidthRunningTotal + tabWidth;
                    var tabVisible = newTotal - tabWidth / 3 * 2 < tabListWidth; // keeps part of the next tab visible
    
                    tabsWidthRunningTotal += tabWidth;
    
                    if (tabVisible) {
                      visibleTabsWidthRunningTotal = newTotal;
                      visibleTabsArray.push(tab);
                    }
    
                    tabsArray.push({
                      tabWidth: tabWidth,
                      tabMaxWidth: tabMaxWidth,
                      tabPadLeft: tabPadLeft,
                      tabPadRight: tabPadRight,
                      tabVisible: tabVisible,
                      textAlign: textAlign
                    });
                  });
    
                  this.tabsWidthTotal = tabsWidthRunningTotal;
                  if (visibleTabsArray.length === this.tabs.length) {
                    return;
                  }
    
                  var visibleLength = visibleTabsArray.length;
                  var additionalPadding = parseInt((tabListWidth - visibleTabsWidthRunningTotal + tabsArray[visibleLength - 1].tabWidth) / (visibleLength + 0.5) / 2, 10);
    
                  tabsArray.forEach(function (props, index) {
                    var tab = _this3.tabs[index];
                    var widthWithPadding = props.tabWidth + additionalPadding * 2;
    
                    // if text is left aligned, assume icon and assign all padding to right - reverse for MENA
                    var calcLeftPad = function calcLeftPad(aligned) {
                      return aligned === 'left' ? props.tabPadLeft : props.tabPadLeft + additionalPadding * 2;
                    };
                    var calcRightPad = function calcRightPad(aligned) {
                      return aligned === 'left' ? props.tabPadRight + additionalPadding * 2 : props.tabPadRight;
                    };
                    var leftPad = props.textAlign === 'center' ? props.tabPadLeft + additionalPadding : calcLeftPad(props.textAlign);
                    var rightPad = props.textAlign === 'center' ? props.tabPadRight + additionalPadding : calcRightPad(props.textAlign);
    
                    if (widthWithPadding > props.tabMaxWidth) {
                      DxTabs.setNewStyle(tab, 'maxWidth', widthWithPadding + 'px');
                    }
                    DxTabs.setNewStyle(tab, 'paddingLeft', leftPad + 'px');
                    DxTabs.setNewStyle(tab, 'paddingRight', rightPad + 'px');
                  });
                }
              }, {
                key: 'setTabSizes',
                value: function setTabSizes() {
                  this.unsetTabHeights();
                  this.ensureNextTabVisible();
                  var reducer = function reducer(accumulator, currentValue) {
                    return accumulator > currentValue ? accumulator : currentValue;
                  };
                  var newHeight = this.tabs.map(function (tab) {
                    return tab.getBoundingClientRect().height;
                  }).reduce(reducer);
    
                  this.tabs.forEach(function (tab) {
                    return DxTabs.setNewStyle(tab, 'height', newHeight + 'px');
                  });
                  this.setMaskWidth();
                }
              }, {
                key: 'setMaskWidth',
                value: function setMaskWidth() {
                  var reducer = function reducer(accumulator, currentValue) {
                    return accumulator + currentValue;
                  };
                  var maskWidth = this.tabs.map(function (tab) {
                    return tab.getBoundingClientRect().width;
                  }).reduce(reducer);
                  this.mask.style.width = parseInt(maskWidth, 10) + 'px';
                }
              }, {
                key: 'tabClickHandler',
                value: function tabClickHandler(event) {
                  event.preventDefault();
                  var active = event.currentTarget;
    
    
                  if (this.animating || !active || active.classList.contains(DxTabs.classes.tabActive)) {
                    return;
                  }
                  var previous = this.tablist.querySelector('.' + DxTabs.classes.tabActive) || null;
                  this.unsetActiveTabs();
                  DxTabs.setActiveTab(active);
                  this.switchTabPanels(previous, active);
                  //location.href = location.href + 'asdasdasdd';
                  //window.location.hash = 'custom-update' + $(active).data('tab-index');
                }
              }, {
                key: 'setInitialState',
                value: function setInitialState() {
                  var initialTab = this.tabs[this.options.initialTab];
                  this.tabs.forEach(function (tab, index) {
                    return tab.setAttribute('data-tab-index', index);
                  });
                  DxTabs.setActiveTab(initialTab);
                  this.setActiveTabPanel(initialTab);
                  this.mask = document.createElement('span');
                  this.mask.classList.add(DxTabs.classes.mask);
                  this.tablist.appendChild(this.mask);
                  this.tablist.classList.add(DxTabs.classes.tabListVisible);
                }
              }, {
                key: 'switchTabPanels',
                value: function switchTabPanels(previousTab, nextTab) {
                  var _this4 = this;
    
                  this.animating = true;
                  var previousPanel = this.getPanelFromTab(previousTab);
    
                  if (previousPanel) {
                    var finish = function finish() {
                      _this4.fireEvent('DxTabs:fadeout', { previousTab: previousTab, previousPanel: previousPanel });
                      window.requestAnimationFrame(function () {
                        previousPanel.style.display = 'none';
                        _this4.setActiveTabPanel(nextTab);
                      });
                    };
                    DxTabs.doAnimation(previousPanel, this.options.fadeOutKeyframes, this.options.timingFadeOut, finish);
                  } else {
                    this.setActiveTabPanel(nextTab);
                  }
                }
              }, {
                key: 'setActiveTabPanel',
                value: function setActiveTabPanel(selectedTab) {
                  var _this5 = this;
    
                  this.animating = true;
                  var selectedPanel = this.getPanelFromTab(selectedTab);
                  if (selectedPanel) {
                    selectedPanel.style.opacity = 0;
                    selectedPanel.style.display = 'block';
                    var finish = function finish() {
                      _this5.fireEvent('DxTabs:fadein');
                      _this5.animating = false;
                    };
                    window.requestAnimationFrame(function () {
                      _this5.fireEvent('DxTabs:beforefadein', { selectedTab: selectedTab, selectedPanel: selectedPanel });
                      DxTabs.doAnimation(selectedPanel, _this5.options.fadeInKeyframes, _this5.options.timingFadeIn, finish);
                    });
                  }
                }
              }, {
                key: 'getPanelFromTab',
                value: function getPanelFromTab(tab) {
                  return this.panelsContainer.querySelector('#' + tab.getAttribute('aria-controls'));
                }
              }, {
                key: 'unsetActiveTabs',
                value: function unsetActiveTabs() {
                  this.tabs.forEach(function (tab) {
                    tab.setAttribute('aria-selected', 'false');
                    tab.setAttribute('tabindex', '-1');
                    tab.classList.remove(DxTabs.classes.tabActive);
                  });
                }
              }, {
                key: 'getElement',
                value: function getElement() {
                  return this.element;
                }
              }, {
                key: 'getTabs',
                value: function getTabs() {
                  return this.tabs;
                }
              }, {
                key: 'getPanels',
                value: function getPanels() {
                  return this.panels;
                }
              }, {
                key: 'DxTabs',
                value: function DxTabs(method) {
                  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    
                  var fn = this[method];
                  return typeof fn === 'function' ? fn.bind(this, options)() : undefined;
                }
              }], [{
                key: 'setNewStyle',
                value: function setNewStyle(elem, style, value) {
                  var element = elem;
                  element.style[style] = value;
                }
              }, {
                key: 'setActiveTab',
                value: function setActiveTab(tab) {
                  var active = tab;
                  active.setAttribute('aria-selected', 'true');
                  active.setAttribute('tabindex', '0');
                  active.classList.add(DxTabs.classes.tabActive);
                }
              }, {
                key: 'doAnimation',
                value: function doAnimation(elem, keyframes, timing, finish) {
                  var animation = elem.animate(keyframes, timing);
                  animation.pause();
                  animation.onfinish = function () {
                    return finish();
                  };
                  animation.play();
                }
              }]);
              return DxTabs;
            }();
    
            DxTabs._defaults = {
              initialTab: 0,
              fadeOutKeyframes: [{ opacity: 1 }, { opacity: 0 }],
              fadeInKeyframes: [{ opacity: 0 }, { opacity: 1 }],
              timingFadeIn: {
                duration: 400,
                easing: 'ease-in',
                fill: 'forwards'
              },
              timingFadeOut: {
                duration: 300,
                easing: 'ease-out',
                fill: 'forwards'
              }
            };
            DxTabs.classes = {
              tabList: 'DxTabs__tablist',
              tabListOverflow: 'DxTabs__tablist--overflow',
              tabListVisible: 'DxTabs__tablist--visible',
              tab: 'DxTabs__tab',
              tabActive: 'DxTabs__tab--active',
              panels: 'DxTabs__panels',
              panel: 'DxTabs__panel',
              mask: 'DxTabs__mask'
            };
            exports.default = DxTabs;
    
            /***/
          }),
    
    /***/ "./src/main/webapp/components/Pagination/es6/Pagination.js":
    /*!*****************************************************************!*\
      !*** ./src/main/webapp/components/Pagination/es6/Pagination.js ***!
      \*****************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
    
            var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
    
            var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
    
            var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");
    
            var _assign2 = _interopRequireDefault(_assign);
    
            var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
    
            var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
            var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
    
            var _createClass3 = _interopRequireDefault(_createClass2);
    
            var _index = __webpack_require__(/*! ../../../resources/dev/js/utils/index */ "./src/main/webapp/resources/dev/js/utils/index.js");
    
            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
            var Pagination = function () {
              function Pagination(elem, options) {
                (0, _classCallCheck3.default)(this, Pagination);
    
                this._elem = elem;
                this._defaults = {
                  className: 'Pagination',
                  selector: '.Pagination',
                  isBlack: false,
    
                  classes: {
                    controls: 'Pagination__controls',
                    paused: 'Pagination--paused',
                    wrapper: 'Pagination__button-wrapper',
                    wrapperPlayPause: 'Pagination__button-wrapper--play-pause',
                    wrapperPip: 'Pagination__button-wrapper--pip',
                    pip: 'Pagination__pip',
                    pipActive: 'Pagination__pip--active',
                    play: 'Pagination__play',
                    pause: 'Pagination__pause',
                    playing: 'Pagination--playing',
                    pauseTimerIcon: 'Pagination__pause-timer-icon',
                    pauseTimerIconCountdown: 'Pagination__pause-timer-icon-countdown',
                    pauseTimerIconCountdownAnimating: 'Pagination__pause--animation',
                    pauseControlIcon: 'Pagination__pause-control-icon',
                    playControlIcon: 'Pagination__play-control-icon'
                  },
    
                  controls: {
                    play: null,
                    pause: null,
                    countdown: null,
                    pips: null,
                    wrapper: null
                  },
    
                  events: {
                    init: 'init',
                    beforeChange: 'beforeChange',
                    afterChange: 'afterChange',
                    play: 'play',
                    pause: 'pause',
                    loopEnd: 'loopEnd',
                    gotoNext: 'next',
                    gotoPrevious: 'previous',
                    countdownEnd: 'countdownend',
                    liveRegionUpdate: 'liveRegionUpdate'
                  },
    
                  // labels - for pip and slideChanged author [] as a placeholder for the actual slide number if required
                  labels: {
                    play: 'play',
                    pause: 'pause',
                    pip: 'go to []',
                    paused: 'paused',
                    playing: 'playing',
                    slideChanged: 'showing []',
                    next: 'next',
                    previous: 'previous'
                  },
    
                  autoplay: {
                    enabled: false, // if false, do not output play/pause controls
                    duration: 1000,
                    pauseAtStart: false, // if we want autoplay controls but initially paused, set to true
                    delay: 0 // after pip switches, this is the delay before the timer restarts (e.g. if we're waiting for a slide transition)
                  },
    
                  timer: {
                    started: null,
                    remaining: null
                  },
    
                  _pipIndexAttribute: 'data-pip-index',
                  _playingStatus: null, // paused || running
                  _allowFocusToggle: true, // allows button focus to be switched automatically when play/pause toggled
                  _delayTimer: null, // stores our timer if a delay is required
                  _nonHoverPaused: null,
    
                  loop: true,
                  numberOfPips: null,
                  defaultSelected: 0 // zero indexed
                };
                this.options = (0, _assign2.default)({}, this._defaults, options);
    
                if (!this._elem || !this.options.numberOfPips) {
                  return;
                }
                this._createPagination();
              }
    
              (0, _createClass3.default)(Pagination, [{
                key: '_createPagination',
                value: function _createPagination() {
                  var html = this._generateHTML();
                  this._appendPaginationToContainer(html);
                  this._addPaginationEvents();
                  if (this.options.controls.pause) {
                    this.options.controls.pause.classList.add(this.options.classes.pauseTimerIconCountdownAnimating);
                  }
                  this._fireEvent(this.options.events.init);
                  this._restartAnimation();
                }
              }, {
                key: '_playButtonHTML',
                value: function _playButtonHTML(classes, labels) {
                  return '<button class="' + classes.play + '" aria-label="' + labels.paused + ', ' + labels.play + '">' + this._playControlIconSVG() + '</button>';
                }
              }, {
                key: '_pauseButtonHTML',
                value: function _pauseButtonHTML(classes, labels) {
                  return '<button class="' + classes.pause + '" aria-label="' + labels.playing + ', ' + labels.pause + '">\n      ' + this._pauseControlIconSVG() + '\n      <svg class="' + classes.pauseTimerIcon + '" aria-hidden="true"><circle class="' + classes.pauseTimerIconCountdown + '" r="20" cx="21" cy="21"></circle></svg>\n    </button>';
                }
    
                // create and return the HTML
    
              }, {
                key: '_generateHTML',
                value: function _generateHTML() {
                  var _this = this;
    
                  var options = this.options;
                  var classes = options.classes,
                    labels = options.labels;
    
    
                  var wrapperHTML = function wrapperHTML(innerHTML, modifierClass) {
                    return '<li class="' + classes.wrapper + ' ' + modifierClass + '">' + innerHTML + '</li>';
                  };
                  var addNumberToButtonLabel = function addNumberToButtonLabel(number) {
                    return Pagination._replacePlaceholderLabelText(labels.pip, number);
                  };
                  var pipHTML = function pipHTML(number) {
                    return '<button ' + _this.options._pipIndexAttribute + '="' + number + '" class="' + classes.pip + '" aria-label="' + addNumberToButtonLabel(number + 1) + '"></button>';
                  };
                  var pips = [].concat((0, _toConsumableArray3.default)(new Array(options.numberOfPips))).map(function (__, number) {
                    return wrapperHTML(pipHTML(number), classes.wrapperPip);
                  });
    
                  var playButtonHTML = this._playButtonHTML(classes, labels);
                  var pauseButtonHTML = this._pauseButtonHTML(classes, labels);
                  var controlsHTML = options.autoplay.enabled ? '' + wrapperHTML(playButtonHTML + pauseButtonHTML, classes.wrapperPlayPause) : '';
    
                  var html = '\n      <ul class="' + classes.controls + '">\n        ' + controlsHTML + '\n        ' + pips.join(' ') + '\n      </ul>\n    ';
                  return html;
                }
    
                // handle creating the pagination and adding to container
    
              }, {
                key: '_appendPaginationToContainer',
                value: function _appendPaginationToContainer(html) {
                  var div = document.createElement('div');
                  div.innerHTML = html;
                  this._elem.classList.add(this.options.className);
                  if (this.options.isBlack) {
                    this._elem.classList.add(this.options.className + '--black');
                  }
                  this._elem.appendChild(div.querySelector('.' + this.options.classes.controls));
                  this.options.controls = Pagination._cacheControls(this._elem, this.options.classes, this.options.autoplay.enabled);
                  this._setActiveState(this.options.defaultSelected);
                  var autoplay = this.options.autoplay;
    
                  var playingStatusAtStart = autoplay.pauseAtStart ? 'paused' : 'running';
                  this.options._nonHoverPaused = autoplay.pauseAtStart;
                  if (autoplay.enabled) {
                    this._setPlayingStatus(playingStatusAtStart);
                    this.options.controls.countdown.style.animationDuration = autoplay.duration + 'ms';
                  }
                }
              }, {
                key: '_getPipsArray',
    
    
                // convert the nodelist of pip elements into an array and return
                value: function _getPipsArray() {
                  return [].slice.call(this._elem.querySelectorAll('.' + this.options.classes.pip));
                }
              }, {
                key: '_setActiveState',
                value: function _setActiveState() {
                  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    
                  this.options.controls.pips[index].classList.add(this.options.classes.pipActive);
                  var liveRegionText = Pagination._replacePlaceholderLabelText(this.options.labels.slideChanged, index + 1);
                  this._updateLiveRegionText(liveRegionText);
                }
              }, {
                key: '_updateLiveRegionText',
    
    
                // fires an event with update text which the host component can choose to add to an aria-liveregion
                value: function _updateLiveRegionText(text) {
                  var payload = { text: text };
                  this._fireEvent(this.options.liveRegionUpdate, payload);
                }
              }, {
                key: '_getCurrentActivePipElement',
                value: function _getCurrentActivePipElement() {
                  return this._elem.querySelector('.' + this.options.classes.pipActive);
                }
              }, {
                key: '_getCurrentActivePipIndex',
                value: function _getCurrentActivePipIndex() {
                  return this._getPipIndex(this._getCurrentActivePipElement());
                }
              }, {
                key: '_getNextPipIndex',
                value: function _getNextPipIndex(pips, currentPipElement) {
                  var pip = this._getPipIndex(currentPipElement) + 1;
                  return pip < pips.length ? pip : 0;
                }
              }, {
                key: '_getPreviousPipIndex',
                value: function _getPreviousPipIndex(pips, currentPipElement) {
                  var pip = this._getPipIndex(currentPipElement) - 1;
                  return pip < 0 ? pips.length - 1 : pip;
                }
              }, {
                key: '_getPipIndex',
                value: function _getPipIndex(pipElement) {
                  return parseInt(pipElement.getAttribute(this.options._pipIndexAttribute), 10); // accept DOM element of pip, return index
                }
              }, {
                key: '_getpauseIconCountdownElement',
                value: function _getpauseIconCountdownElement() {
                  return this._elem.querySelector('.' + this.options.classes.pauseTimerIconCountdown); // return the animated countdown DOM element
                }
              }, {
                key: '_restartAnimation',
                value: function _restartAnimation() {
                  var _this2 = this;
    
                  if (this._elem.getAttribute('data-playing') !== 'true') {
                    return;
                  }
                  var autoplay = this.options.autoplay;
                  var _options$controls = this.options.controls,
                    countdown = _options$controls.countdown,
                    pause = _options$controls.pause;
    
                  var delay = autoplay.enabled ? autoplay.delay : 0;
                  var strokeDashOffsetMin = '1px';
                  var strokeDashOffsetMax = '122px';
    
                  var animationComplete = function animationComplete() {
                    return (0, _index.eventTrigger)(pause, _this2.options.events.countdownEnd);
                  };
                  var animateElement = function animateElement() {
                    var keyframes = [{
                      strokeDashoffset: strokeDashOffsetMin,
                      opacity: 1,
                      offset: 0
                    }, {
                      strokeDashoffset: strokeDashOffsetMax,
                      opacity: 1,
                      offset: 0.99
                    }, {
                      strokeDashoffset: strokeDashOffsetMax,
                      opacity: 0,
                      offset: 1
                    }];
                    var timing = {
                      duration: autoplay.duration,
                      easing: 'linear',
                      fill: 'forwards'
                    };
    
                    _this2.options.controls.countdownTransition = countdown.animate(keyframes, timing);
                    _this2.options.controls.countdownTransition.pause();
                    _this2.options.controls.countdownTransition.onfinish = function () {
                      countdown.style.opacity = 0;
                      _this2.options.controls.countdownTransition = null;
                      animationComplete();
                    };
                    _this2.options.controls.countdownTransition.play();
                  };
                  var fadeElementIn = function fadeElementIn() {
                    countdown.style.strokeDashoffset = strokeDashOffsetMin;
                    countdown.style.opacity = 1;
                    if (_this2.options.controls.countdownTransition) {
                      _this2.options.controls.countdownTransition.play();
                    } else {
                      animateElement();
                    }
                  };
                  setTimeout(function () {
                    return fadeElementIn();
                  }, delay);
                }
    
                // Handles click/animationend events fired on pips
    
              }, {
                key: '_pipEventHandler',
                value: function _pipEventHandler(event) {
                  event.preventDefault();
                  var activeClass = this.options.classes.pipActive;
                  var _options$controls2 = this.options.controls,
                    pips = _options$controls2.pips,
                    countdown = _options$controls2.countdown;
    
    
                  var activePip = this._getCurrentActivePipElement();
                  var eventType = event.type;
                  var targetPip = eventType === 'click' ? event.target : pips[this._getNextPipIndex(pips, activePip)];
                  var targetPipIndex = this._getPipIndex(targetPip);
                  if (targetPip === activePip) {
                    return;
                  }
                  if (this.options.controls.countdownTransition) {
                    this.options.controls.countdownTransition.pause();
                    this.options.controls.countdownTransition = null;
                    countdown.style.strokeDashoffset = '122px';
                  }
    
                  var payload = {
                    eventType: eventType,
                    pipsArray: pips,
                    pipFrom: this._getPipIndex(activePip),
                    pipTo: this._getPipIndex(targetPip)
                  };
    
                  if (eventType === this.options.events.countdownEnd && targetPipIndex === 0 && !this.options.loop) {
                    this._fireEvent(this.options.events.loopEnd, payload);
                    return;
                  }
    
                  this._fireEvent(this.options.events.beforeChange, payload);
                  pips.forEach(function (pip) {
                    pip.classList.remove(activeClass);
                  });
                  this._setActiveState(this._getPipIndex(targetPip));
    
                  this._restartAnimation();
                  this._fireEvent(this.options.events.afterChange, payload);
                }
              }, {
                key: '_resumeTimerAnimation',
                value: function _resumeTimerAnimation(control, event) {
                  if (event === 'hover' && this.options._nonHoverPaused) {
                    return;
                  }
                  var liveRegionText = this.options.labels.playing;
                  this._updateLiveRegionText(liveRegionText);
                  this.options._nonHoverPaused = false;
                  this._setPlayingStatus(control, event);
                  this._restartAnimation(event);
                }
              }, {
                key: '_pauseTimerAnimation',
                value: function _pauseTimerAnimation(control, event) {
                  if (event !== 'hover') {
                    this.options._nonHoverPaused = true;
                  }
                  var liveRegionText = this.options.labels.paused;
                  this._updateLiveRegionText(liveRegionText);
                  if (this.options.controls.countdownTransition) {
                    this.options.controls.countdownTransition.pause();
                  }
                  this._setPlayingStatus(control, event);
                }
              }, {
                key: '_addPaginationEvents',
                value: function _addPaginationEvents() {
                  var _this3 = this;
    
                  var _options$controls3 = this.options.controls,
                    pips = _options$controls3.pips,
                    play = _options$controls3.play,
                    pause = _options$controls3.pause,
                    countdown = _options$controls3.countdown;
    
    
                  pips.forEach(function (pip) {
                    return pip.addEventListener('click', function (event) {
                      return _this3._pipEventHandler(event);
                    }, false);
                  }); // pip click handler
                  if (play && pause && countdown) {
                    pause.addEventListener(this.options.events.countdownEnd, function (event) {
                      return _this3._pipEventHandler(event);
                    }, false);
                    play.addEventListener('click', function (event) {
                      return _this3._resumeTimerAnimation('running', event);
                    }, false);
                    pause.addEventListener('click', function (event) {
                      return _this3._pauseTimerAnimation('paused', event);
                    }, false);
                  }
                }
    
                // trigger custom event with optional payload that our component (and others) can subscribe to
    
              }, {
                key: '_fireEvent',
                value: function _fireEvent(eventType) {
                  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    
                  (0, _index.eventTrigger)(this._elem, eventType, payload);
                }
              }, {
                key: '_getPlayingStatus',
                value: function _getPlayingStatus() {
                  return this._playingStatus;
                }
    
                // accepts status of paused or runningand updates playing status of animation
    
              }, {
                key: '_setPlayingStatus',
                value: function _setPlayingStatus() {
                  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'paused';
                  var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                  var _options$controls4 = this.options.controls,
                    play = _options$controls4.play,
                    pause = _options$controls4.pause,
                    countdown = _options$controls4.countdown;
    
                  this._playingStatus = status;
                  this._elem.setAttribute('data-playing', status === 'paused' ? 'false' : 'true');
                  if (play && pause && status === 'paused') {
                    this._toggleFocus(pause, play, event);
                    Pagination._showControl(play);
                    Pagination._hideControl(pause);
                    countdown.style.animationPlayState = 'paused';
                    this._fireEvent(this.options.events.pause);
                  } else {
                    this._toggleFocus(play, pause, event);
                    Pagination._hideControl(play);
                    Pagination._showControl(pause);
                    countdown.style.animationPlayState = 'running';
                    this._fireEvent(this.options.events.play);
                  }
                }
    
                // handle focus for whichever control is showing
    
              }, {
                key: '_toggleFocus',
                value: function _toggleFocus(elementFrom, elementTo, event) {
                  if (!this.options._allowFocusToggle || document.activeElement !== elementFrom) {
                    return;
                  }
                  if (event && event.detail === 0) {
                    setTimeout(function () {
                      elementTo.focus();
                    }, 50);
                  }
                }
              }, {
                key: '_playControlIconSVG',
                value: function _playControlIconSVG() {
                  return '\n    <svg aria-hidden="true" class="' + this.options.classes.playControlIcon + '" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.2 20" style="enable-background:new 0 0 14.2 20;" xml:space="preserve">\n    <g><path d="M0,0v20l14.2-10L0,0z M1.7,3.2l9.6,6.7l-9.6,6.8V3.2z"/></g></svg>\n    ';
                }
              }, {
                key: '_pauseControlIconSVG',
                value: function _pauseControlIconSVG() {
                  return '\n      <svg aria-hidden="true" class="' + this.options.classes.pauseControlIcon + '" width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g stroke="none" stroke-width="1">\n          <g transform="translate(-473.000000, -299.000000)" fill-rule="nonzero">\n            <g transform="translate(473.000000, 299.000000)"><polygon points="0 0 2 0 2 16 0 16"></polygon><polygon points="8 0 10 0 10 16 8 16"></polygon></g>\n          </g>\n        </g>\n      </svg>';
                }
    
                // public methods, to call from component use element.Pagination('function name as string', optionalParams);
    
              }, {
                key: 'pause',
                value: function pause() {
                  var onHover = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                  var pause = this.options.controls.pause;
    
                  if (!pause) {
                    return;
                  }
                  var pausedOnHover = onHover ? 'hover' : false;
                  this._pauseTimerAnimation('paused', pausedOnHover);
                }
              }, {
                key: 'play',
                value: function play() {
                  var onHover = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                  var play = this.options.controls.play;
    
                  if (!play) {
                    return;
                  }
                  var resumedOnHover = onHover ? 'hover' : false;
                  this._resumeTimerAnimation('running', resumedOnHover);
                }
              }, {
                key: 'getPlayingStatus',
                value: function getPlayingStatus() {
                  return this._getPlayingStatus();
                }
              }, {
                key: 'goToPip',
                value: function goToPip(index) {
                  var pip = this.options.controls.pips[index];
                  if (!pip) {
                    return;
                  }
                  pip.click();
                }
              }, {
                key: 'previousPip',
                value: function previousPip() {
                  var pips = this.options.controls.pips;
    
                  var current = this._getCurrentActivePipElement();
                  var currentIndex = this._getPipIndex(current);
                  if (!this.options.loop && currentIndex === 0) {
                    return;
                  }
                  var previous = pips[this._getPreviousPipIndex(pips, current)];
                  this._fireEvent(this.options.events.gotoPrevious);
                  previous.click();
                }
              }, {
                key: 'nextPip',
                value: function nextPip() {
                  var pips = this.options.controls.pips;
    
                  var current = this._getCurrentActivePipElement();
                  var next = pips[this._getNextPipIndex(pips, current)];
                  var nextIndex = this._getPipIndex(next);
                  if (!this.options.loop && nextIndex === 0) {
                    return;
                  }
                  this._fireEvent(this.options.events.gotoNext);
                  next.click();
                }
              }, {
                key: 'getCurrentPipIndex',
                value: function getCurrentPipIndex() {
                  return this._getCurrentActivePipIndex();
                }
              }, {
                key: 'updateActivePipByIndex',
                value: function updateActivePipByIndex(newActivePipIndex) {
                  var pips = this.options.controls.pips;
    
                  var activeClass = this.options.classes.pipActive;
                  pips.forEach(function (pip) {
                    return pip.classList.remove(activeClass);
                  });
                  this._setActiveState(newActivePipIndex);
                }
              }, {
                key: 'getOptions',
                value: function getOptions() {
                  return this.options;
                }
              }, {
                key: 'getElement',
                value: function getElement() {
                  return this._elem;
                }
              }, {
                key: 'destroy',
                value: function destroy() {
                  var controls = this.options.controls;
    
                  if (controls && controls.wrapper) {
                    controls.wrapper.parentNode.removeChild(controls.wrapper);
                  }
                }
              }, {
                key: 'Pagination',
                value: function Pagination(method) {
                  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    
                  var fn = this[method];
                  return typeof fn === 'function' ? fn.bind(this, options)() : undefined;
                }
              }], [{
                key: '_cacheControls',
                value: function _cacheControls(element, classes) {
                  var includePlayControls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    
                  var controls = {};
                  controls.wrapper = element.querySelector('.' + classes.controls);
                  controls.pips = [].slice.call(element.querySelectorAll('.' + classes.pip));
                  if (includePlayControls) {
                    controls.play = element.querySelector('.' + classes.play);
                    controls.pause = element.querySelector('.' + classes.pause);
                    controls.countdown = element.querySelector('.' + classes.pauseTimerIconCountdown);
                  }
                  return controls;
                }
              }, {
                key: '_replacePlaceholderLabelText',
                value: function _replacePlaceholderLabelText(label) {
                  var textToInsert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    
                  return label.replace(/[[]]/g, textToInsert);
                }
              }, {
                key: '_showControl',
                value: function _showControl(element) {
                  element.removeAttribute('aria-hidden');
                  element.removeAttribute('tabindex');
                }
              }, {
                key: '_hideControl',
                value: function _hideControl(element) {
                  element.setAttribute('aria-hidden', 'true');
                  element.setAttribute('tabindex', '-1');
                }
              }]);
              return Pagination;
            }();
    
            exports.default = Pagination;
    
            /***/
          }),
    
    /***/ "./src/main/webapp/resources/dev/js/utils/aria.js":
    /*!********************************************************!*\
      !*** ./src/main/webapp/resources/dev/js/utils/aria.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            var KeyCode = exports.KeyCode = {
              BACKSPACE: 8,
              DELETE: 46,
              DOWN: 40,
              END: 35,
              ESC: 27,
              HOME: 36,
              LEFT: 37,
              PAGE_DOWN: 34,
              PAGE_UP: 33,
              RETURN: 13,
              RIGHT: 39,
              SPACE: 32,
              TAB: 9,
              UP: 38
            };
    
            /***/
          }),
    
    /***/ "./src/main/webapp/resources/dev/js/utils/browserDetection.js":
    /*!********************************************************************!*\
      !*** ./src/main/webapp/resources/dev/js/utils/browserDetection.js ***!
      \********************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            var breakpoints = exports.breakpoints = {
              small: 768,
              medium: 900,
              wider: 1000,
              current: null
            };
    
            var getDeviceOrientation = exports.getDeviceOrientation = function getDeviceOrientation() {
              var $window = $(window);
              return $window.width() > $window.height() ? 'landscape' : 'portrait';
            };
    
            var getLargerBreakpoint = function getLargerBreakpoint(width) {
              return width <= breakpoints.medium ? 'medium' : 'large';
            };
    
            var getBreakpointSize = exports.getBreakpointSize = function getBreakpointSize() {
              var oldCalc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    
              var width = oldCalc ? $(window).width() : window.innerWidth;
              return width <= breakpoints.small ? 'small' : getLargerBreakpoint(width);
            };
    
            var isBreakpointSmall = exports.isBreakpointSmall = function isBreakpointSmall() {
              var oldCalc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    
              return getBreakpointSize(oldCalc) === 'small';
            };
    
            var isBreakpointMedium = exports.isBreakpointMedium = function isBreakpointMedium() {
              var oldCalc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    
              return getBreakpointSize(oldCalc) === 'medium';
            };
    
            var isMobileDevice = exports.isMobileDevice = function isMobileDevice() {
              return 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch || navigator.msMaxTouchPoints; // eslint-disable-line
            };
    
            var isNotMobileDevice = exports.isNotMobileDevice = function isNotMobileDevice() {
              return !isMobileDevice();
            };
    
            var isTabletDevice = exports.isTabletDevice = function isTabletDevice() {
              return (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(navigator.userAgent.toLowerCase())
              );
            };
    
            var isIOS = exports.isIOS = function isIOS() {
              return (/(ipad|iphone|ipod)/i.test(navigator.userAgent.toLowerCase())
              );
            };
    
            var isNotIOS = exports.isNotIOS = function isNotIOS() {
              return !isIOS();
            };
    
            var isWindowsPhone = exports.isWindowsPhone = function isWindowsPhone() {
              return navigator.userAgent.toLowerCase().indexOf('windows phone') !== -1;
            };
    
            var getAndroidVersion = exports.getAndroidVersion = function getAndroidVersion() {
              var ua = navigator.userAgent;
    
              if (ua.indexOf('Android') >= 0) {
                return parseFloat(ua.slice(ua.indexOf('Android') + 8));
              }
    
              return false;
            };
    
            var getBrowserUserAgent = exports.getBrowserUserAgent = function getBrowserUserAgent() {
              var _navigator = navigator,
                userAgent = _navigator.userAgent;
    
              return userAgent;
            };
    
            var detectBrowsers = exports.detectBrowsers = function detectBrowsers() {
              var userAgent = getBrowserUserAgent();
              var browsers = {
                isChrome: userAgent.indexOf('Chrome') > -1,
                isMsEdge: userAgent.indexOf('Edge') > -1,
                isExplorer: userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1, // MSIE = IE10 and below, Trident = IE11
                isFirefox: userAgent.indexOf('Firefox') > -1,
                isSafari: userAgent.indexOf('Safari') > -1,
                isOpera: userAgent.toLowerCase().indexOf('op') > -1
              };
    
              if (browsers.isChrome && browsers.isSafari) {
                browsers.isSafari = false;
              }
    
              if (browsers.isChrome && browsers.isOpera) {
                browsers.isChrome = false;
              }
    
              return browsers;
            };
    
            var isIe = exports.isIe = function isIe() {
              return document.querySelector('html').classList.contains('ie');
            };
    
            var isMsEdge = exports.isMsEdge = function isMsEdge() {
              return detectBrowsers().isMsEdge;
            };
    
            var isIe11 = exports.isIe11 = function isIe11() {
              return !window.ActiveXObject && 'ActiveXObject' in window;
            };
    
            var getViewportSize = exports.getViewportSize = function getViewportSize() {
              var test = document.createElement('div');
    
              test.style.cssText = 'position: fixed;top: 0;left: 0;bottom: 0;right: 0;';
              document.documentElement.insertBefore(test, document.documentElement.firstChild);
    
              var dims = { width: test.offsetWidth, height: test.offsetHeight };
              document.documentElement.removeChild(test);
    
              return dims;
            };
    
            var scrollToElement = exports.scrollToElement = function scrollToElement(element, options, callback) {
              var $element = element instanceof jQuery ? element : $(element);
    
              // Options are optional
              var opts = options || {};
    
              // Set defaults
              opts = $.extend({
                adjustment: 0,
                ease: 'easeOutSine',
                duration: 800,
                container: $('body, html')
              }, opts);
    
              // Has an element been supplied?
              if ($element.length === 0) {
                return false;
              }
    
              // Scroll to the target element allowing for the utility menu
              opts.container.stop().animate({
                scrollTop: $element.offset().top - opts.adjustment
              }, opts.duration, opts.ease, function () {
                if (callback) {
                  callback();
                }
              });
    
              // For unit tests
              return opts;
            };
    
            /**
             * Detect Modern Browser by availability of BigInt feature.
             *
             * @return {boolean}
             */
            var hasBigIntSupport = exports.hasBigIntSupport = function hasBigIntSupport() {
              return typeof BigInt === 'function';
            };
    
            /***/
          }),
    
    /***/ "./src/main/webapp/resources/dev/js/utils/domManipulation.js":
    /*!*******************************************************************!*\
      !*** ./src/main/webapp/resources/dev/js/utils/domManipulation.js ***!
      \*******************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.insertBefore = exports.insertAfter = exports.wrapAll = exports.unwrap = exports.wrap = undefined;
    
            var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
    
            var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
    
            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
            // usage: wrap(document.querySelector('a.wrap_me'), document.createElement('div'));
            var wrap = exports.wrap = function wrap(el, wrapper) {
              el.parentNode.insertBefore(wrapper, el);
              wrapper.appendChild(el);
            };
    
            // usage: unwrap(document.querySelector('a.unwrap_me'));
            var unwrap = exports.unwrap = function unwrap(el) {
              var parent = el.parentNode;
              while (el.firstChild) {
                parent.insertBefore(el.firstChild, el);
              }
              parent.removeChild(el);
            };
    
            // wrapAll: replicates jQuery's $.wrapAll() for non-jQuery element(s), example usage:
            //   const wrapper = document.createElement('div');
            //   wrapAll(component.querySelectorAll('.selector'), wrapper);
            var wrapAll = exports.wrapAll = function wrapAll(elements, wrapper) {
              var createArray = function createArray(el) {
                return el instanceof NodeList ? [].concat((0, _toConsumableArray3.default)(el)) : [el];
              };
              var elementsArray = createArray(elements);
              if (!elementsArray.length) {
                return;
              }
              var parent = elementsArray[0].parentNode;
              parent.insertBefore(wrapper, elementsArray[0]);
              elementsArray.forEach(function (element) {
                return wrapper.appendChild(element);
              });
            };
    
            // JS replacement for jQuery $.after()
            var insertAfter = exports.insertAfter = function insertAfter(before, after) {
              return before.parentNode.insertBefore(after, before.nextSibling);
            };
    
            // JS replacement for jQuery $.before()
            var insertBefore = exports.insertBefore = function insertBefore(after, before) {
              return after.parentNode.insertBefore(before, after);
            };
    
            /***/
          }),
    
    /***/ "./src/main/webapp/resources/dev/js/utils/index.js":
    /*!*********************************************************!*\
      !*** ./src/main/webapp/resources/dev/js/utils/index.js ***!
      \*********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.preventActionOnDeepLink = exports.generateCurrentDate = exports.equaliseHeights = exports.addScriptForBazaarVoice = exports.localStorageAvailable = exports.addDxElementLoadingSpinner = exports.removeDxLoadingSpinner = exports.addDxLoadingSpinner = exports.DxRequestNextAnimationFrame = exports.dxSetTimeout = exports.replaceAll = exports.isEmpty = exports.tablistNavigation = exports.checkDefined = exports.isElementVerticallyScrollable = exports.randomiseElements = exports.convertElementCollectionToArray = exports.eventTrigger = exports.balanceElementHeight = exports.lockTabbables = exports.getTabbable = exports.isLandRover = exports.scrollIfNotInViewport = exports.isInViewport = exports.template = exports.getTransitionEndEvent = exports.measureTextWidth = exports.throttle = exports.loadIgnoredResponsiveImages = exports.limitNumber = exports.enableScroll = exports.disableScroll = exports.getEasingValue = exports.getRandomString = exports.elementInViewport = exports.isPageInXPMFrame = exports.hasPlaceholderSupport = exports.canvasDrawBgCover = exports.getObjectKeys = exports.addParameterToURL = exports.getUrlParameter = exports.removeHTMLTags = exports.mobileAccordionsActivated = exports.insideTabbedContainer = exports.isPageInIframe = exports.checkDeepLink = exports.scrollTo = exports.getStickyNavHeightV2 = exports.getStickyNavHeight = exports.getHeight = exports.getCachedScript = exports.isRtl = exports.googleMapStyles = exports.stickyNavigationTransitionPoint = exports.stickyNavigationEnabled = undefined;
    
            var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
    
            var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
    
            var _from = __webpack_require__(/*! babel-runtime/core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");
    
            var _from2 = _interopRequireDefault(_from);
    
            var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");
    
            var _typeof3 = _interopRequireDefault(_typeof2);
    
            var _arguments = arguments; /* global appReadyTimer */
    
            var _browserDetection = __webpack_require__(/*! ./browserDetection */ "./src/main/webapp/resources/dev/js/utils/browserDetection.js");
    
            var _aria = __webpack_require__(/*! ./aria */ "./src/main/webapp/resources/dev/js/utils/aria.js");
    
            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
            var $navHeader = $('#header, .dxnav-header');
            var stickyNavigationEnabled = exports.stickyNavigationEnabled = $navHeader.attr('data-nav-type') === 'sticky';
            var stickyNavigationTransitionPoint = exports.stickyNavigationTransitionPoint = 200;
            var templateCache = {};
    
            var googleMapStyles = exports.googleMapStyles = [{
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#666666'
              }]
            }, {
              featureType: 'landscape.man_made',
              elementType: 'geometry.fill',
              stylers: [{
                color: '#f8f6f4'
              }]
            }, {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{
                visibility: 'off'
              }]
            }, {
              featureType: 'road.highway',
              elementType: 'geometry.fill',
              stylers: [{
                color: '#afaba4'
              }]
            }, {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{
                color: '#e6e6e6'
              }]
            }, {
              featureType: 'road.highway',
              elementType: 'labels',
              stylers: [{
                saturation: -15
              }]
            }, {
              featureType: 'road.highway.controlled_access',
              elementType: 'geometry.fill',
              stylers: [{
                color: '#afaba4'
              }]
            }, {
              featureType: 'road.highway.controlled_access',
              elementType: 'labels.icon',
              stylers: [{
                saturation: -100
              }]
            }, {
              featureType: 'road.local',
              elementType: 'geometry.fill',
              stylers: [{
                color: '#ffffff'
              }]
            }, {
              featureType: 'road.local',
              elementType: 'labels.icon',
              stylers: [{
                saturation: '77'
              }]
            }, {
              featureType: 'transit',
              elementType: 'labels.icon',
              stylers: [{
                saturation: '-100'
              }]
            }, {
              featureType: 'water',
              elementType: 'geometry.fill',
              stylers: [{
                color: '#c5d7de'
              }, {
                lightness: -9
              }]
            }];
    
            var isRtl = exports.isRtl = function isRtl() {
              var html = document.getElementsByTagName('html')[0];
              return html.classList.contains('rtl');
            };
    
            var getCachedScript = exports.getCachedScript = function getCachedScript(url, options) {
              var newOptions = $.extend(options || {}, {
                dataType: 'script',
                cache: true,
                url: url
              });
    
              return $.ajax(newOptions);
            };
    
            var getHeight = exports.getHeight = function getHeight(elem) {
              return elem ? elem.clientHeight : 0;
            };
    
            // make sure to pass 'oldCalculation = false' to use the new refined calculation
            // or use getStickyNavHeightV2()
            var getStickyNavHeight = exports.getStickyNavHeight = function getStickyNavHeight(yPos) {
              var oldCalculation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    
              var yPosition = typeof yPos !== 'number' ? 0 : yPos;
              var sharedHeader = $('.dxnav-header');
              var $header = sharedHeader.length ? sharedHeader : $('#header');
              var $inPageNav = $('.InPageNavigation');
              var $inPageNavSticky = $('.InPageNavigation--sticky');
              var $inPageNavBar = $('.InPageNavigation__bar');
              var dxNavPrimary = document.querySelector('.dxnav__primary');
              var breakpoint = (0, _browserDetection.getBreakpointSize)();
              var checkStickyNav = $header.length > 0 ? $header.css('position') === 'fixed' : false;
              var inPageNavTop = $inPageNav.length > 0 ? $inPageNav.offset().top : null;
              var isStickyNav = sharedHeader.length ? true : checkStickyNav;
              var height = 0;
    
              if (!isStickyNav) {
                return height;
              }
    
              // hard coding values here to prevent having to repeatedly clone and measure the header
              var oldNavBreakpoint = 960;
    
              // added $inPageNav.css('display') check for LRA-10851
              if (inPageNavTop !== null && yPosition >= inPageNavTop && breakpoint === 'large' && $inPageNav.css('display') !== 'none') {
                return $inPageNav.outerHeight();
              }
    
              var windowWidth = window.innerWidth;
    
              // this is the old navigation, only shown when NaaS is down, hard coding values to prevent having to clone/measure the DOM elements for performance reasons
              var getNavigationHeight = function getNavigationHeight() {
                if (windowWidth >= oldNavBreakpoint && yPosition < 200) {
                  return 106;
                }
                return 50;
              };
    
              var getNaaSHeight = function getNaaSHeight(old) {
                var primaryNavHeight = void 0;
    
                if (old) {
                  primaryNavHeight = getHeight(dxNavPrimary);
                } else {
                  primaryNavHeight = document.querySelector('.dxnav-scrollDown') === null && !$inPageNavSticky.length ? getHeight(dxNavPrimary) + parseInt(sharedHeader.css('top'), 10) : 0;
                }
    
                var breadcrumbNavHeight = getHeight(document.querySelector('.dxnav__breadcrumbs-container'));
                var notificationHeight = getHeight(document.querySelector('.notificationBarsWrapper'));
                var inPageNavigationHeight = 0;
                if ($inPageNav.length) {
                  if ($inPageNavSticky.length) {
                    breadcrumbNavHeight = 0;
                    if (parseInt($inPageNavBar.css('top'), 10) === 0) {
                      inPageNavigationHeight = $inPageNav.innerHeight();
                    }
                    if (parseInt($inPageNavBar.css('top'), 10) < 0) {
                      inPageNavigationHeight = Math.max($inPageNav.outerHeight() + parseInt($inPageNavBar.css('top'), 10), 0);
                    }
                  }
                }
                return primaryNavHeight + breadcrumbNavHeight + notificationHeight + (old ? 0 : inPageNavigationHeight);
              };
    
              if (sharedHeader.length) {
                height = getNaaSHeight(oldCalculation);
              } else {
                height = getNavigationHeight();
              }
    
              return height;
            };
    
            // should be used until merged with getNavigationHeight
            var getStickyNavHeightV2 = exports.getStickyNavHeightV2 = function getStickyNavHeightV2(yPos) {
              return getStickyNavHeight(yPos, false);
            };
    
            var scrollTo = exports.scrollTo = function scrollTo(target, duration, callback, easing, ignoreStickyNav) {
              var yOffset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    
              var newDuration = typeof duration !== 'number' ? 800 : duration;
              var newCallback = typeof callback !== 'function' ? null : callback;
              var newEasing = typeof easing !== 'string' ? 'easeOutSine' : easing;
              var position = 0;
    
              if (typeof target === 'number') {
                // Px value
                position = target;
              } else {
                // Element
                var $targetEl = target || $('body');
                position = $targetEl.offset().top;
              }
    
              if (ignoreStickyNav !== true) {
                position -= getStickyNavHeight(position);
              }
    
              $('html, body').stop().animate({ scrollTop: position + yOffset }, newDuration, newEasing).promise().done(newCallback);
            };
    
            var checkDeepLink = exports.checkDeepLink = function checkDeepLink(href) {
              var deepLink = false;
              var speed = 2.5;
    
              var hashPos = href.indexOf('#');
              if (hashPos + 1 < href.length && hashPos !== -1) {
                var id = href.substring(hashPos, href.length);
                if ($(id).length === 1) {
                  var location = $(id);
                  var duration = location.offset().top / speed;
    
                  // LRA-13794 | AccordionContainer | Open accordion first if deeplink is inside
                  if ($('head [name="accordionOnMobile"]').length && (0, _browserDetection.isBreakpointSmall)()) {
                    var accordionParent = location.closest('.accordion-group');
                    var accordionTitle = accordionParent.find('.accordion-group-title');
    
                    if (accordionParent.length && accordionTitle.length) {
                      // Open accordion if closed
                      if (!accordionParent.hasClass('open')) {
                        accordionTitle.click();
                      }
    
                      // Take into account the height of the accordion title
                      location = location.offset().top - accordionTitle.outerHeight();
    
                      scrollTo(location, 800, null, 'easeOutSine');
                      deepLink = true;
                      return;
                    }
                  }
    
                  if (location.parents('.TabbedContainer').length) {
                    var $container = location.closest('.TabbedContainer');
                    var $tabs = $container.find('.tab');
                    var $tabLinks = $container.find('.tab-link');
                    var tabIndex = 0;
    
                    $tabs.each(function (i, el) {
                      var $location = $(el).find(location);
                      if ($location.length) {
                        tabIndex = i;
                      }
                    });
    
                    $tabLinks.each(function (i, el) {
                      if (i === tabIndex) {
                        $(el).click();
                      }
                    });
    
                    location = $container.offset().top;
                    duration = location / speed;
    
                    scrollTo(location, 800, null, 'easeStartFastEndSlow');
                    return true; // eslint-disable-line
                  }
    
                  // LRA-12701 | L462 Test | Open accordion first if deeplink is inside
                  if ($('body').hasClass('vehiclesDiscovery')) {
                    var _accordionParent = location.parents('.AccordionContainer');
                    var element = $(location);
    
                    if (_accordionParent.length) {
                      var accordionHeader = _accordionParent.find('.header');
    
                      if (!accordionHeader.hasClass('accordion-open')) {
                        accordionHeader.click();
                      }
    
                      if (accordionHeader.is(':visible')) {
                        if (!location.is(':visible')) {
                          element.css('display', 'block');
                          location = location.offset().top - accordionHeader.outerHeight();
                          element.css('display', '');
                        } else {
                          location = location.offset().top - accordionHeader.outerHeight();
                        }
                      }
                    }
                  }
    
                  scrollTo(location, duration, null, 'easeStartFastEndSlow');
                  deepLink = true;
                } else {
                  // eslint-disable-next-line no-console
                  console.error('Could not find deep link element with id: ' + id);
                }
              }
              return deepLink; // eslint-disable-line
            };
    
            var isPageInIframe = exports.isPageInIframe = function isPageInIframe() {
              return window.self !== window.top;
            };
    
            var insideTabbedContainer = exports.insideTabbedContainer = function insideTabbedContainer(el) {
              var isInsideTabbedContainer = !!el.parents('.TabbedContainer').not('[data-total="1"]').length;
    
              if (isInsideTabbedContainer) {
                return el.parents('.TabbedContainer');
              }
    
              return false;
            };
    
            var mobileAccordionsActivated = exports.mobileAccordionsActivated = function mobileAccordionsActivated() {
              return $('head [name="accordionOnMobile"]').length;
            };
    
            var removeHTMLTags = exports.removeHTMLTags = function removeHTMLTags(s) {
              return s.toString().replace(/[<>=;]/g, '');
            };
    
            var getUrlParameter = exports.getUrlParameter = function getUrlParameter(sParam) {
              function decode(s) {
                return decodeURIComponent((s || '').replace(/\+/g, ' '));
              }
    
              var sPageURL = window.location.search.substring(1);
              var sURLVariables = sPageURL.split('&');
    
              for (var i = 0; i < sURLVariables.length; i += 1) {
                var sParameterSplit = sURLVariables[i].split('=');
                if (decode(sParameterSplit[0]) === sParam) {
                  return decode(sParameterSplit[1]);
                }
              }
    
              return null;
            };
    
            var addParameterToURL = exports.addParameterToURL = function addParameterToURL(url, param) {
              var newUrl = url + (url.split('?')[1] ? '&' : '?') + param;
    
              return param !== '' ? newUrl : url;
            };
    
            var getObjectKeys = exports.getObjectKeys = function getObjectKeys(obj) {
              var keys = [];
              for (var i in obj) {
                //eslint-disable-line
                if (obj.hasOwnProperty(i)) {
                  // eslint-disable-line
                  keys.push(i);
                }
              }
              return keys;
            };
    
            /* eslint-disable */
            var canvasDrawBgCover = exports.canvasDrawBgCover = function canvasDrawBgCover(ctx, img, x, y, w, h, offsetX, offsetY) {
              if (_arguments.length === 2) {
                x = y = 0;
                w = ctx.canvas.width;
                h = ctx.canvas.height;
              }
    
              // default offset is center
              offsetX = typeof offsetX === 'number' ? offsetX : 0.5;
              offsetY = typeof offsetY === 'number' ? offsetY : 0.5;
    
              // keep bounds [0.0, 1.0]
              if (offsetX < 0) {
                offsetX = 0;
              }
              if (offsetY < 0) {
                offsetY = 0;
              }
              if (offsetX > 1) {
                offsetX = 1;
              }
              if (offsetY > 1) {
                offsetY = 1;
              }
    
              var iw = img.width,
                ih = img.height,
                r = Math.min(w / iw, h / ih),
                nw = iw * r,
                // new prop. width
                nh = ih * r,
                // new prop. height
                cx,
                cy,
                cw,
                ch,
                ar = 1;
    
              // decide which gap to fill
              if (nw < w) {
                ar = w / nw;
              }
              if (nh < h) {
                ar = h / nh;
              }
              nw *= ar;
              nh *= ar;
    
              // calc source rectangle
              cw = iw / (nw / w);
              ch = ih / (nh / h);
    
              cx = (iw - cw) * offsetX;
              cy = (ih - ch) * offsetY;
    
              // make sure source rectangle is valid
              if (cx < 0) {
                cx = 0;
              }
              if (cy < 0) {
                cy = 0;
              }
              if (cw > iw) {
                cw = iw;
              }
              if (ch > ih) {
                ch = ih;
              }
    
              // fill image in dest. rectangle
              ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
            };
            /* eslint-enable */
    
            var hasPlaceholderSupport = exports.hasPlaceholderSupport = function hasPlaceholderSupport() {
              var el = document.createElement('input');
              return 'placeholder' in el;
            };
    
            var isPageInXPMFrame = exports.isPageInXPMFrame = function isPageInXPMFrame() {
              return typeof window.Tridion !== 'undefined' && typeof window.Tridion.Web.UI.SiteEdit !== 'undefined';
            };
    
            var elementInViewport = exports.elementInViewport = function elementInViewport(element, adjust, windowInnerHeight) {
              var $element = element instanceof jQuery ? element : $(element);
    
              if (!$element.length) {
                return false;
              }
    
              var $window = $(window);
              var scrollTop = $window.scrollTop();
              var windowHeight = $window.height();
              var adjustTop = void 0;
              var adjustBottom = void 0;
    
              // Element specifics
              var elOffset = $element.offset();
              var elTop = elOffset.top;
              var elBottom = elTop + $element.height();
    
              // Default value
              var defaultAdjust = (0, _browserDetection.getBreakpointSize)() === 'small' ? 20 : 50;
    
              // LRA-11494 Fix iOS issue with window height.
              // Temporarily add option to allow this so QA is not
              // required on StoryGallery + StoryArticleEnhancedImageBlock
              if (typeof windowInnerHeight !== 'undefined' && windowInnerHeight) {
                windowHeight = window.innerHeight ? window.innerHeight : windowHeight;
              }
    
              // Set viewportBottom
              var viewportBottom = scrollTop + windowHeight;
    
              // Allow adjust to be set different from top/bottom
              if ((typeof adjust === 'undefined' ? 'undefined' : (0, _typeof3.default)(adjust)) === 'object') {
                adjustTop = adjust.top;
                adjustBottom = adjust.bottom;
              } else {
                adjustTop = adjust || defaultAdjust;
                adjustBottom = adjust || defaultAdjust;
              }
    
              return !(viewportBottom < elTop + adjustTop || scrollTop > elBottom - adjustBottom);
            };
    
            var getRandomString = exports.getRandomString = function getRandomString(length) {
              var formattedLength = parseInt(length, 10) || 0;
              formattedLength = formattedLength < 0 ? 0 : formattedLength;
    
              var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
              var chosen = [];
    
              for (var i = 0; i < formattedLength; i += 1) {
                chosen.push(chars.charAt(Math.floor(Math.random() * chars.length)));
              }
    
              return chosen.join('');
            };
    
            var getEasingValue = exports.getEasingValue = function getEasingValue(ratio) {
              var formattedRatio = ratio < 0 ? 0 : ratio;
              formattedRatio = formattedRatio > 1 ? 1 : formattedRatio;
    
              // Convert the ratio to a number of radians. 0 maps to -PI, 0.5 maps to
              // 0, 1 maps to PI
              var radians = formattedRatio * (2 * Math.PI) - Math.PI;
    
              // Convert this to a value using a cosine curve. Note that cosine gives
              // a value between -1 and 1, so we need to add 1 and divide by 2 to
              // keep it between 0 and 1
              return (Math.cos(radians) + 1) / 2;
            };
    
            var disableScroll = exports.disableScroll = function disableScroll() {
              var $window = $(window);
              var scrollTop = $window.scrollTop();
    
              $window.on('scroll.disableScroll mousewheel.disableScroll DOMMouseScroll.disableScroll touchmove.disableScroll', function (event) {
                event.preventDefault();
                $window.scrollTop(scrollTop);
              });
            };
    
            var enableScroll = exports.enableScroll = function enableScroll() {
              var $window = $(window);
    
              $window.off('scroll.disableScroll mousewheel.disableScroll DOMMouseScroll.disableScroll touchmove.disableScroll');
            };
    
            var limitNumber = exports.limitNumber = function limitNumber(value, min, max) {
              if (min > max) {
                var oldMin = min;
                min = max; // eslint-disable-line
                max = oldMin; // eslint-disable-line
              }
    
              return Math.max(min, Math.min(max, value));
            };
    
            var loadIgnoredResponsiveImages = exports.loadIgnoredResponsiveImages = function loadIgnoredResponsiveImages($images) {
              $images.removeAttr('data-picture-ignore');
              window.richsponsiveImage();
            };
    
            var throttle = exports.throttle = function throttle(fn, threshhold, scope) {
              var thresh = threshhold || 250;
              var last = void 0;
              var deferTimer = void 0;
    
              return function () {
                var context = scope || undefined;
    
                var now = +new Date();
                var args = _arguments;
                if (last && now < last + thresh) {
                  // hold on to it
                  clearTimeout(deferTimer);
                  deferTimer = setTimeout(function () {
                    last = now;
                    fn.apply(context, args);
                  }, thresh);
                } else {
                  last = now;
                  fn.apply(context, args);
                }
              };
            };
    
            /** *
             * Measure text width using Browser.
             *
             * @param text
             * @param parent
             * @return {number}
             * @deprecated Please use CMS Powered solution in future.
             */
            var measureTextWidth = exports.measureTextWidth = function measureTextWidth(text, parent) {
              if (!text) {
                return 0;
              }
    
              var par = parent || document.body;
              var container = document.createElement('div');
    
              container.style.position = 'absolute';
              container.style.visibility = 'hidden';
              container.style.height = 'auto';
              container.style.width = 'auto';
              container.style.padding = '0';
              container.style.whiteSpace = 'nowrap';
              container.innerHTML = text;
    
              par.appendChild(container);
              var width = container.clientWidth;
              par.removeChild(container);
    
              return width;
            };
    
            var getTransitionEndEvent = exports.getTransitionEndEvent = function getTransitionEndEvent() {
              var el = document.createElement('fakeelement');
              var transitions = {
                transition: 'transitionend',
                OTransition: ' oTransitionEnd',
                MozTransition: 'transitionend',
                WebkitTransition: 'webkitTransitionEnd'
              };
    
              for (var transition in transitions) {
                // eslint-disable-line
                if (el.style[transition] !== undefined) {
                  return transitions[transition];
                }
              }
    
              return false;
            };
    
            /* eslint-disable */
            var template = exports.template = function template(str, data) {
              // Figure out if we're getting a template, or if we need to
              // load the template - and be sure to cache the result.
              var fn = !/\W/.test(str) ? templateCache[str] = templateCache[str] || template(document.getElementById(str).innerHTML) :
    
                // Generate a reusable function that will serve as a template
                // generator (and which will be cached).
                new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" +
    
                  // Introduce the data as local variables using with(){}
                  "with(obj){p.push('" +
    
                  // Convert the template into pure JavaScript
                  str.replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "',$1,'").split("<%").join("');").split("%>").join("p.push('") + "');}return p.join('');");
    
              // Provide some basic currying to the user
              return data ? fn(data) : fn;
            };
            /* eslint-enable */
    
            var isInViewport = exports.isInViewport = function isInViewport(element) {
              var win = $(window);
    
              var viewport = {
                top: win.scrollTop() + getStickyNavHeight(),
                bottom: win.scrollTop() + win.height(),
                left: win.scrollLeft()
              };
              viewport.right = viewport.left + win.width();
    
              var bounds = element.offset();
              bounds.right = bounds.left + element.outerWidth();
              bounds.bottom = bounds.top + element.outerHeight();
    
              return !(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom);
            };
    
            var scrollIfNotInViewport = exports.scrollIfNotInViewport = function scrollIfNotInViewport(element, displayToBottom) {
              if (!isInViewport(element)) {
                // Not in view
                var scrollToPos = displayToBottom ? element.offset().top - $(window).innerHeight() : element.offset().top - getStickyNavHeight();
                $('html,body').animate({ scrollTop: scrollToPos }, 800);
                return true;
              }
              return false;
            };
    
            var isLandRover = exports.isLandRover = function isLandRover() {
              return !!$('body#landrover').length;
            };
    
            var getTabbable = exports.getTabbable = function getTabbable(elem, customSelectors) {
              var defaultSelectors = ['input:not([disabled]):not([hidden])', 'select', 'a[href]', 'textarea', 'button', '[tabindex]:not([tabindex^="-"])'];
    
              var selectorTypes = customSelectors ? defaultSelectors.concat(customSelectors) : defaultSelectors;
              var selectors = elem.querySelectorAll(selectorTypes.join(','));
              selectors = (0, _from2.default)(selectors);
              selectors = selectors.filter(function (selector) {
                var tabbable = true;
                if (!selector.offsetParent || selector.offsetWidth === 0 || selector.offsetHeight === 0) {
                  tabbable = false;
                }
    
                function isInvisible(el) {
                  if (el.style.visibility === 'hidden' || el.style.display === 'none') {
                    tabbable = false;
                  } else if (el.parentNode && el.parentNode !== document.body) {
                    isInvisible(el.parentNode);
                  }
                }
                isInvisible(selector);
                if (tabbable) {
                  return selector;
                }
                return false;
              });
              return selectors;
            };
    
            var lockTabbables = exports.lockTabbables = function lockTabbables(tabbables) {
              tabbables.forEach(function (el, i) {
                el.addEventListener('keydown', function (e) {
                  if (e.keyCode !== _aria.KeyCode.TAB) {
                    return;
                  }
                  e.preventDefault();
                  if (i === 0) {
                    if (tabbables.length === 1) {
                      tabbables[0].focus();
                    } else if (e.shiftKey) {
                      tabbables[tabbables.length - 1].focus();
                    } else {
                      tabbables[i + 1].focus();
                    }
                  } else if (i === tabbables.length - 1 && !e.shiftKey) {
                    tabbables[0].focus();
                  } else if (e.shiftKey) {
                    tabbables[i - 1].focus();
                  } else {
                    tabbables[i + 1].focus();
                  }
                });
              });
            };
    
            var balanceElementHeight = exports.balanceElementHeight = function balanceElementHeight(elements) {
              var allowedOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    
              var columns = {};
              if (!elements) {
                return columns;
              }
              var elementsArray = [].slice.call(elements);
              var heightTotal = 0;
              var heightsArray = elementsArray.map(function (element) {
                var elementHeight = element.getBoundingClientRect().height;
                heightTotal += elementHeight;
                return elementHeight;
              });
              var getBalancedIndex = function getBalancedIndex(array, target) {
                var runningTotal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    
                var isRecursive = !!array[index] && runningTotal + array[index] <= target - allowedOffset;
                return isRecursive ? getBalancedIndex(array, target, runningTotal + array[index], index + 1) : index;
              };
              var splitIndex = getBalancedIndex(heightsArray, heightTotal / 2) + 1;
              columns.columns1 = elementsArray.slice(0, splitIndex);
              columns.columns2 = elementsArray.slice(splitIndex, elementsArray.length);
              columns.heightsArray = heightsArray;
              return columns;
            };
    
            var eventTrigger = exports.eventTrigger = function eventTrigger(elem, eventType) {
              var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
              var bubbles = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    
              var event = new CustomEvent(eventType, { detail: detail, bubbles: bubbles });
              elem.dispatchEvent(event);
            };
    
            var convertElementCollectionToArray = exports.convertElementCollectionToArray = function convertElementCollectionToArray(collection) {
              if (collection instanceof NodeList || collection instanceof jQuery) {
                return collection instanceof NodeList ? [].slice.call(collection) : collection.get();
              }
              return false;
            };
    
            var randomiseElements = exports.randomiseElements = function randomiseElements(elementsCollection) {
              var elements = convertElementCollectionToArray(elementsCollection);
              if (!elements || !elements.length) return;
              var clonedElements = elements.map(function (element) {
                return element.cloneNode(true);
              });
              clonedElements.sort(function () {
                return Math.random() - 0.5;
              });
              elements.forEach(function (element, inc) {
                return element.parentNode.replaceChild(clonedElements[inc], element);
              });
            };
    
            var isElementVerticallyScrollable = exports.isElementVerticallyScrollable = function isElementVerticallyScrollable(el) {
              return el && el.scrollHeight > el.offsetHeight;
            };
    
            var checkDefined = exports.checkDefined = function checkDefined(item) {
              return item !== undefined && item !== null;
            };
    
            var tablistNavigation = exports.tablistNavigation = function tablistNavigation(tablist) {
              var orientation = tablist.getAttribute('aria-orientation');
              var isVertical = orientation && orientation === 'vertical';
              var tabs = tablist.querySelectorAll('[role="tab"]');
              var keys = _aria.KeyCode;
    
    
              var focusFirstTab = function focusFirstTab() {
                return tabs[0].focus();
              };
              var focusLastTab = function focusLastTab() {
                return tabs[tabs.length - 1].focus();
              };
    
              var focusPreviousTab = function focusPreviousTab(currentTab) {
                var tabIndex = [].concat((0, _toConsumableArray3.default)(tabs)).findIndex(function (element) {
                  return element === currentTab;
                });
                if (tabIndex === 0) {
                  focusLastTab();
                } else {
                  tabs[tabIndex - 1].focus();
                }
              };
    
              var focusNextTab = function focusNextTab(currentTab) {
                var tabIndex = [].concat((0, _toConsumableArray3.default)(tabs)).findIndex(function (element) {
                  return element === currentTab;
                });
                var tabsLengthZeroIndex = tabs.length - 1;
                if (tabIndex === tabsLengthZeroIndex) {
                  focusFirstTab();
                } else {
                  tabs[tabIndex + 1].focus();
                }
              };
    
              var handleTablistKeydownEvents = function handleTablistKeydownEvents(event) {
                var key = event.keyCode;
                switch (key) {
                  case keys.END:
                    event.preventDefault();
                    focusLastTab();
                    break;
                  case keys.HOME:
                    event.preventDefault();
                    focusFirstTab();
                    break;
                  case keys.LEFT:
                  case keys.UP:
                    if (isVertical) {
                      event.preventDefault();
                      focusPreviousTab(event.currentTarget);
                    }
                    break;
                  case keys.RIGHT:
                  case keys.DOWN:
                    if (isVertical) {
                      event.preventDefault();
                      focusNextTab(event.currentTarget);
                    }
                    break;
                  default:
                    break;
                }
              };
    
              var handleTablistKeyupEvents = function handleTablistKeyupEvents(event) {
                var key = event.keyCode;
                switch (key) {
                  case keys.LEFT:
                    focusPreviousTab(event.currentTarget);
                    break;
                  case keys.RIGHT:
                    focusNextTab(event.currentTarget);
                    break;
                  default:
                    break;
                }
              };
    
              tabs.forEach(function (tab) {
                tab.addEventListener('keydown', handleTablistKeydownEvents, false);
                if (!isVertical) {
                  tab.addEventListener('keyup', handleTablistKeyupEvents, false);
                }
              });
            };
    
            var isEmpty = exports.isEmpty = function isEmpty(obj) {
              for (var key in obj) {
                // eslint-disable-line
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  return false;
                }
              }
              return true;
            };
    
            var replaceAll = exports.replaceAll = function replaceAll(string, search, replacement) {
              return string.split(search).join(replacement);
            };
    
            var dxSetTimeout = exports.dxSetTimeout = function dxSetTimeout(cb, time) {
              setTimeout(cb, time);
    
              // if (window.appReadyEvent.initiated) {
              //   appReadyTimer.add(time);
              // } else {
              //   window.appReadyEvent.timeout += time;
              // }
            };
    
            var DxRequestNextAnimationFrame = exports.DxRequestNextAnimationFrame = function DxRequestNextAnimationFrame(cb) {
              requestAnimationFrame(function () {
                requestAnimationFrame(cb());
              });
            };
    
            var loadingSpinnerToggleButtonStateAndContent = function loadingSpinnerToggleButtonStateAndContent(target) {
              var targetElement = target;
    
              if (target.tagName === 'BUTTON') {
                targetElement.disabled = true;
              }
              targetElement.classList.add('loading');
    
              var children = targetElement.children;
    
              [].concat((0, _toConsumableArray3.default)(children)).forEach(function (child) {
                var element = child;
                element.style.opacity = 0;
              });
            };
    
            /**
             * addDxLoadingSpinner
             * @param {HTMLElement} target The button/link that the loading spinner should be inserted into
             */
            var addDxLoadingSpinner = exports.addDxLoadingSpinner = function addDxLoadingSpinner(target) {
              if (!target) {
                return;
              }
    
              var iconMarkup = '<div class="DxLoading" aria-hidden="true"><div class="DxLoading__icon" aria-expanded="true"></div></div>';
              var loadingIcon = document.createRange().createContextualFragment(iconMarkup);
    
              loadingSpinnerToggleButtonStateAndContent(target);
    
              target.appendChild(loadingIcon);
            };
    
            /**
             * removeDxLoadingSpinner
             * @param {HTMLElement} target The button/link that the loading spinner should be removed from
             * @param {string || HTMLElement} replace The string you would like to replace the loading spinner with (expected to be the text originally in the button)
             */
            var removeDxLoadingSpinner = exports.removeDxLoadingSpinner = function removeDxLoadingSpinner(target) {
              var targetElement = target;
    
              if (target.tagName === 'BUTTON') {
                targetElement.disabled = false;
              }
              targetElement.classList.remove('loading');
    
              var loadingIcon = targetElement.querySelector('.DxLoading');
              targetElement.removeChild(loadingIcon);
    
              var children = targetElement.children;
    
              [].concat((0, _toConsumableArray3.default)(children)).forEach(function (child) {
                var element = child;
                element.style.opacity = 1;
              });
            };
    
            var addDxElementLoadingSpinner = exports.addDxElementLoadingSpinner = function addDxElementLoadingSpinner(target) {
              if (!target) {
                return;
              }
    
              var iconMarkup = '<div class="DxLoading" aria-hidden="true">\n    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 88 88" style="enable-background:new 0 0 88 88;" xml:space="preserve">\n    <path fill="#FFFFFF" style="opacity: .2;" d="M44,5c21.5,0,39,17.5,39,39S65.5,83,44,83S5,65.5,5,44S22.5,5,44,5 M44,0C19.7,0,0,19.7,0,44s19.7,44,44,44 s44-19.7,44-44S68.3,0,44,0L44,0z"/>\n    <path fill="#F0F0F0" d="M85.5,46.4c-1.4,0-2.5-1.1-2.5-2.5C83,22.5,65.5,5,44.1,5c-1.4,0-2.5-1.1-2.5-2.5S42.7,0,44.1,0 C68.3,0,88,19.7,88,43.9C88,45.3,86.9,46.4,85.5,46.4z">\n      <animateTransform attributeName="transform" type="rotate" from="0 44 44" to="360 44 44" dur="1.5s" repeatCount="indefinite"></animateTransform>\n    </path>\n    </svg>\n  </div>';
              var loadingIcon = document.createRange().createContextualFragment(iconMarkup);
    
              loadingSpinnerToggleButtonStateAndContent(target);
    
              target.appendChild(loadingIcon);
            };
    
            var localStorageAvailable = exports.localStorageAvailable = function localStorageAvailable() {
              try {
                if (typeof window.localStorage !== 'undefined') {
                  try {
                    window.localStorage.setItem('feature_test', 'yes');
                    if (window.localStorage.getItem('feature_test') === 'yes') {
                      window.localStorage.removeItem('feature_test');
                      return true;
                    }
                    return false;
                  } catch (e) {
                    return false;
                  }
                } else {
                  return false;
                }
              } catch (e) {
                return false;
              }
            };
    
            var addScriptForBazaarVoice = exports.addScriptForBazaarVoice = function addScriptForBazaarVoice(scriptURL) {
              if (scriptURL.trim() !== '' && document.querySelectorAll('script[src=\'' + scriptURL + '\']').length === 0) {
                var bazaarVoiceScript = document.createElement('script');
                bazaarVoiceScript.setAttribute('src', scriptURL);
                document.head.appendChild(bazaarVoiceScript);
              }
            };
    
            var equaliseHeights = exports.equaliseHeights = function equaliseHeights(elements) {
              var maxHeight = 0;
              [].concat((0, _toConsumableArray3.default)(elements)).forEach(function (element) {
                // eslint-disable-next-line no-param-reassign
                element.style.height = 'auto';
              });
              [].concat((0, _toConsumableArray3.default)(elements)).forEach(function (element) {
                var height = element.offsetHeight;
                if (height > maxHeight) {
                  maxHeight = height;
                }
              });
              [].concat((0, _toConsumableArray3.default)(elements)).forEach(function (element) {
                // eslint-disable-next-line no-param-reassign
                element.style.height = maxHeight + 'px';
              });
            };
    
            var generateCurrentDate = exports.generateCurrentDate = function generateCurrentDate() {
              var today = new Date();
              return Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes());
            };
    
            var preventActionOnDeepLink = exports.preventActionOnDeepLink = function preventActionOnDeepLink(event) {
              var linkLocation = event.currentTarget.getAttribute('href');
              if (checkDeepLink(linkLocation)) {
                event.preventDefault();
              }
            };
    
            /***/
          }),
    
    /***/ "./src/main/webapp/resources/dev/js/utils/slide.js":
    /*!*********************************************************!*\
      !*** ./src/main/webapp/resources/dev/js/utils/slide.js ***!
      \*********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.dxSlideDown = exports.dxSlideUp = undefined;
    
            var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");
    
            var _assign2 = _interopRequireDefault(_assign);
    
            var _index = __webpack_require__(/*! ./index */ "./src/main/webapp/resources/dev/js/utils/index.js");
    
            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
            var getInitialInlineStyles = function getInitialInlineStyles(element) {
              var _element$style = element.style,
                display = _element$style.display,
                maxHeight = _element$style.maxHeight,
                overflow = _element$style.overflow,
                paddingTop = _element$style.paddingTop,
                paddingBottom = _element$style.paddingBottom,
                opacity = _element$style.opacity,
                width = _element$style.width,
                position = _element$style.position;
    
    
              return {
                display: display,
                maxHeight: maxHeight,
                overflow: overflow,
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                opacity: opacity,
                width: width,
                position: position
              };
            };
    
            var getComputedStyles = function getComputedStyles(element) {
              var getStyle = window.getComputedStyle(element);
              return {
                maxHeight: element.style.maxHeight,
                overflow: element.style.overflow,
                paddingTop: getStyle.getPropertyValue('padding-top'),
                paddingBottom: getStyle.getPropertyValue('padding-bottom'),
                display: getStyle.getPropertyValue('display')
              };
            };
    
            var resetInitialStyles = function resetInitialStyles(el, initialStyles) {
              var element = el;
              var maxHeight = initialStyles.maxHeight,
                overflow = initialStyles.overflow,
                paddingTop = initialStyles.paddingTop,
                paddingBottom = initialStyles.paddingBottom;
    
              element.style.maxHeight = !maxHeight ? null : maxHeight;
              element.style.overflow = !overflow ? null : overflow;
              element.style.paddingTop = !paddingTop ? null : paddingTop;
              element.style.paddingBottom = !paddingBottom ? null : paddingBottom;
            };
    
            var isAnimating = function isAnimating(element) {
              var attr = element.getAttribute('data-slide-animating');
              return attr && attr === 'true';
            };
    
            /*
              dxSlideDown: vanilla JS replacement for jQuery $.slideUp()
              uses event pub/sub instead of jQuery's callbacks
            */
            var dxSlideUp = exports.dxSlideUp = function dxSlideUp(el) {
              var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    
              var element = el;
              var initialStyles = getInitialInlineStyles(element);
              var computedStyles = getComputedStyles(element);
              var display = computedStyles.display,
                paddingTop = computedStyles.paddingTop,
                paddingBottom = computedStyles.paddingBottom;
    
              if (display === 'none' || isAnimating(element)) {
                return;
              }
              element.setAttribute('data-slide-animating', 'true');
              var defaults = {
                duration: 600,
                easing: 'ease-in-out',
                fill: 'forwards',
                display: 'block'
              };
              var options = (0, _assign2.default)({}, defaults, opts);
              var height = element.offsetHeight;
              element.style.overflow = 'hidden';
              element.style.maxHeight = height + 'px';
              element.style.paddingTop = paddingTop;
              element.style.paddingBottom = paddingBottom;
              var keyframes = [{
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                maxHeight: height + 'px'
              }, {
                maxHeight: '0px',
                paddingTop: '0px',
                paddingBottom: '0px'
              }];
              var duration = options.duration,
                easing = options.easing,
                fill = options.fill;
    
              var timing = { duration: duration, easing: easing, fill: fill };
              var animation = element.animate(keyframes, timing);
              animation.pause();
              animation.onfinish = function () {
                element.style.display = 'none';
                resetInitialStyles(element, initialStyles);
                element.setAttribute('data-slide-animating', 'false');
                (0, _index.eventTrigger)(element, 'slide-up-end');
                animation.cancel();
              };
              animation.play();
              (0, _index.eventTrigger)(element, 'slide-up-start');
            };
    
            /*
              dxSlideDown: vanilla JS replacement for jQuery $.slideDown()
              uses event pub/sub instead of jQuery's callbacks
            */
            var dxSlideDown = exports.dxSlideDown = function dxSlideDown(el) {
              var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    
              var element = el;
              var initialStyles = getInitialInlineStyles(element);
              var computedStyles = getComputedStyles(element);
              var display = computedStyles.display,
                paddingTop = computedStyles.paddingTop,
                paddingBottom = computedStyles.paddingBottom;
    
              if (display !== 'none' || isAnimating(element)) {
                return;
              }
              element.setAttribute('data-slide-animating', 'true');
              var defaults = {
                duration: 600,
                easing: 'ease-in-out',
                fill: 'forwards',
                display: 'block'
              };
              var options = (0, _assign2.default)({}, defaults, opts);
              var parent = element.parentNode;
              var getStyle = window.getComputedStyle(parent);
              var parentInlinePosition = parent.style.position;
              var parentPosition = getStyle.getPropertyValue('position');
    
              // set some temporary styles - let's us grab the height without a flicker of uncollapsed content in Safari
              if (parentPosition === 'static') {
                parent.style.position = 'relative';
              }
              element.style.opacity = '0';
              element.style.width = '100%';
              element.style.position = 'absolute';
    
              // set the pre-animation styles on our component
              element.style.display = options.display;
              var height = element.offsetHeight;
              element.style.paddingTop = '0px';
              element.style.paddingBottom = '0px';
              element.style.overflow = 'hidden';
              element.style.maxHeight = '0px';
    
              // reset temporary styles
              element.style.opacity = !initialStyles.opacity ? null : initialStyles.opacity;
              element.style.width = !initialStyles.width ? null : initialStyles.width;
              element.style.position = !initialStyles.position ? null : initialStyles.position;
              parent.style.position = !parentInlinePosition ? null : parentInlinePosition;
    
              var keyframes = [{
                maxHeight: '0px',
                paddingTop: '0px',
                paddingBottom: '0px'
              }, {
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                maxHeight: height + 'px'
              }];
              var duration = options.duration,
                easing = options.easing,
                fill = options.fill;
    
              var timing = { duration: duration, easing: easing, fill: fill };
              var animation = element.animate(keyframes, timing);
              animation.pause();
              animation.onfinish = function () {
                resetInitialStyles(element, initialStyles);
                element.setAttribute('data-slide-animating', 'false');
                (0, _index.eventTrigger)(element, 'slide-down-end');
                animation.cancel();
              };
              animation.play();
              (0, _index.eventTrigger)(element, 'slide-down-start');
            };
    
            /***/
          }),
    
    /***/ "./src/main/webapp/resources/dev/js/utils/swiper.js":
    /*!**********************************************************!*\
      !*** ./src/main/webapp/resources/dev/js/utils/swiper.js ***!
      \**********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.swiperPreventDefaultButtonAction = exports.swiperA11yDestroy = exports.swiperA11yHelper = exports.swiperModifyNavigation = exports.swiperSetAriaLiveOnFocusIn = exports.swiperIntegrateCustomPagination = exports.swiperDisableAutoplayOnSlideFocus = exports.swiperPreventTabbingIssues = exports.swiperEmitEventsOnElement = undefined;
    
            var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");
    
            var _assign2 = _interopRequireDefault(_assign);
    
            var _aria = __webpack_require__(/*! ./aria */ "./src/main/webapp/resources/dev/js/utils/aria.js");
    
            var _index = __webpack_require__(/*! ./index */ "./src/main/webapp/resources/dev/js/utils/index.js");
    
            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
            var swiperEmitEventsOnElement = exports.swiperEmitEventsOnElement = function swiperEmitEventsOnElement(swiperObject) {
              swiperObject.on('init', function () {
                return (0, _index.eventTrigger)(swiperObject.el, 'onInit');
              });
              swiperObject.on('slideChangeTransitionStart', function () {
                return (0, _index.eventTrigger)(swiperObject.el, 'onSlideChangeTransitionStart');
              });
              swiperObject.on('slideChangeTransitionEnd', function () {
                return (0, _index.eventTrigger)(swiperObject.el, 'onSlideChangeTransitionEnd');
              });
              swiperObject.on('slidePrevTransitionEnd', function () {
                return (0, _index.eventTrigger)(swiperObject.el, 'onSlidePrevTransitionEnd');
              });
              swiperObject.on('slideNextTransitionEnd', function () {
                return (0, _index.eventTrigger)(swiperObject.el, 'onSlideNextTransitionEnd');
              });
              swiperObject.on('touchStart', function () {
                return (0, _index.eventTrigger)(swiperObject.el, 'onTouchStart');
              });
              swiperObject.on('touchEnd', function () {
                return (0, _index.eventTrigger)(swiperObject.el, 'onTouchEnd');
              });
              swiperObject.on('touchMove', function () {
                return (0, _index.eventTrigger)(swiperObject.el, 'onTouchMove');
              });
            };
    
            var swiperPreventTabbingIssues = exports.swiperPreventTabbingIssues = function swiperPreventTabbingIssues(swiperObject) {
              var tabbableElements = (0, _index.getTabbable)(swiperObject.wrapperEl);
    
              tabbableElements.forEach(function (element) {
                var existingTabindex = element.getAttribute('tabindex');
                if (existingTabindex) {
                  element.setAttribute('data-swiper-tabindex', existingTabindex);
                }
              });
    
              var slides = [].slice.call(swiperObject.slides);
              var setSlideStyle = function setSlideStyle(slide, style) {
                slide.style.visibility = style; // eslint-disable-line no-param-reassign
              };
    
              var hideSlidesOutOfViewport = function hideSlidesOutOfViewport(allSlides) {
                allSlides.forEach(function (slide) {
                  if (!slide.classList.contains(swiperObject.params.slideActiveClass)) {
                    setSlideStyle(slide, 'hidden');
                  }
                });
              };
    
              hideSlidesOutOfViewport(slides);
    
              var slideTransitionStart = function slideTransitionStart() {
                slides.forEach(function (slide) {
                  setSlideStyle(slide, 'visible');
                  slide.setAttribute('aria-hidden', 'true');
                });
                tabbableElements.forEach(function (element) {
                  return element.setAttribute('tabindex', -1);
                });
              };
    
              var slideTransitionEnd = function slideTransitionEnd() {
                slides.forEach(function (slide) {
                  slide.setAttribute('aria-hidden', 'false');
                  slide.removeAttribute('aria-hidden');
                });
                tabbableElements.forEach(function (element) {
                  var existingTabindex = element.getAttribute('data-swiper-tabindex');
                  element.removeAttribute('tabindex');
                  if (existingTabindex) {
                    element.setAttribute('tabindex', existingTabindex);
                  }
                });
    
                hideSlidesOutOfViewport(slides);
              };
    
              swiperObject.el.addEventListener('onSlideChangeTransitionStart', function () {
                return slideTransitionStart();
              });
              swiperObject.el.addEventListener('onTouchMove', function () {
                return slideTransitionStart();
              });
              swiperObject.el.addEventListener('onSlideChangeTransitionEnd', function () {
                return slideTransitionEnd();
              });
              swiperObject.el.addEventListener('onTouchEnd', function () {
                setTimeout(function () {
                  slideTransitionEnd();
                }, 1000);
              });
            };
    
            var swiperDisableAutoplayOnSlideFocus = exports.swiperDisableAutoplayOnSlideFocus = function swiperDisableAutoplayOnSlideFocus(swiperObject) {
              if (!swiperObject.originalParams.autoplay.enabled) return;
    
              var handleFocusin = function handleFocusin() {
                return swiperObject.autoplay.stop();
              };
              var handleFocusout = function handleFocusout() {
                return swiperObject.autoplay.start();
              };
              swiperObject.el.addEventListener('focusin', handleFocusin, false);
              swiperObject.el.addEventListener('focusout', handleFocusout, false);
            };
    
            var swiperIntegrateCustomPagination = exports.swiperIntegrateCustomPagination = function swiperIntegrateCustomPagination(object, swiperOptions) {
              var swiperObject = object;
              var paginationObject = swiperOptions.paginationObject;
    
    
              if (!paginationObject) {
                return;
              }
              swiperObject.dxPagination = paginationObject;
    
              var loopOffset = swiperObject.params.loop ? 1 : 0;
              var element = paginationObject.Pagination('getElement');
              element.addEventListener('afterChange', function (event) {
                return swiperObject.slideTo(parseInt(event.detail.pipTo, 10) + loopOffset);
              }, false); // expects a payload with a pipFrom/pipTo (index is different when in a loop)
              element.addEventListener('liveRegionUpdate', function (event) {
                var liveRegion = swiperObject.a11y.liveRegion[0];
                var text = event.detail && event.detail.text;
                if (liveRegion && text) {
                  liveRegion.innerHTML = text;
                }
              }, false);
    
              // if the user interacts with the keyboard, pause the navigation.
              swiperObject.el.addEventListener('focusin', function (event) {
                var isVideo = event.target.classList.contains('video');
                var isNextButton = event.target.classList.contains('swiper-button--next');
                var isPrevButton = event.target.classList.contains('swiper-button--prev');
    
                if (isNextButton || isPrevButton || isVideo) return;
                if (paginationObject.Pagination('getPlayingStatus') === 'running') {
                  paginationObject.Pagination('pause');
                }
              }, false);
    
              // partially  dragging the slider and releasing or using the navigation next/prev buttons can cause the slider & pagination to de-sync - this method prevents that
              var moveSyncHandler = function moveSyncHandler() {
                swiperObject.el.removeEventListener('onSlideChangeTransitionEnd', moveSyncHandler, false);
                var indexMismatch = swiperObject.realIndex !== paginationObject.Pagination('getCurrentPipIndex');
                if (!indexMismatch) {
                  return;
                }
                paginationObject.Pagination('updateActivePipByIndex', swiperObject.realIndex);
              };
              var next = swiperObject.navigation.nextEl;
              var previous = swiperObject.navigation.prevEl;
              if (next) {
                next.addEventListener('click', function () {
                  return swiperObject.el.addEventListener('onSlideChangeTransitionEnd', moveSyncHandler, false);
                });
              }
              if (previous) {
                previous.addEventListener('click', function () {
                  return swiperObject.el.addEventListener('onSlideChangeTransitionEnd', moveSyncHandler, false);
                });
              }
              swiperObject.el.addEventListener('onTouchMove', function () {
                return swiperObject.el.addEventListener('onSlideChangeTransitionEnd', moveSyncHandler, false);
              });
            };
    
            var swiperSetAriaLiveOnFocusIn = exports.swiperSetAriaLiveOnFocusIn = function swiperSetAriaLiveOnFocusIn(swiperObject, swiperOptions) {
              var liveRegion = swiperObject.a11y.liveRegion[0];
              if (!swiperOptions.arialiveOnFocusIn || !liveRegion) {
                return;
              }
              liveRegion.removeAttribute('aria-live');
              swiperObject.el.parentNode.addEventListener('focusin', function () {
                return liveRegion.setAttribute('aria-live', 'polite');
              });
              swiperObject.el.parentNode.addEventListener('focusout', function () {
                return liveRegion.removeAttribute('aria-live');
              });
            };
    
            var swiperModifyNavigation = exports.swiperModifyNavigation = function swiperModifyNavigation(swiperObject, swiperOptions) {
              var previous = swiperObject.navigation.prevEl;
              var next = swiperObject.navigation.nextEl;
              if (!previous || !next) {
                return;
              }
              var labels = swiperOptions.labels,
                isBlack = swiperOptions.isBlack;
    
              var fill = isBlack ? '#000000' : '#FFFFFF';
              var previousArrowSVG = '\n      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 24" style="enable-background:new 0 0 14 24;" xml:space="preserve">\n      <style type="text/css">.st0--swiper-pagination{fill-rule:evenodd;clip-rule:evenodd;fill:' + fill + ';}</style><polygon class="st0--swiper-pagination" points="12.7,0 0,12 12.7,24 14,22.5 2.9,12 14,1.5 "/>\n      </svg>\n    ';
              var nextArrowSVG = '\n      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 24" style="enable-background:new 0 0 14 24;" xml:space="preserve">\n      <style type="text/css">.st0--swiper-pagination{fill-rule:evenodd;clip-rule:evenodd;fill:' + fill + ';}</style><polygon class="st0--swiper-pagination" points="1.3,24 14,12 1.3,0 0,1.5 11.1,12 0,22.5 "/>\n      </svg>\n    ';
    
              var modifyArrow = function modifyArrow(arrow, icon, label) {
                if (label) {
                  arrow.setAttribute('aria-label', label);
                }
                var div = document.createElement('div');
                div.innerHTML = icon;
                arrow.appendChild(div.querySelector('svg'));
              };
              modifyArrow(previous, previousArrowSVG, labels.previous);
              modifyArrow(next, nextArrowSVG, labels.next);
            };
    
            var swiperA11yHelper = exports.swiperA11yHelper = function swiperA11yHelper(swiperObject) {
              var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    
              if (!swiperObject) return;
    
              var options = (0, _assign2.default)({}, {
                pagination: null, // only used if we're using Swiper with our Pagination component
                arialiveOnFocusIn: true, // add/remove aria-live attribute on swiper focusin/focusout
                labels: {}, // pass in accessible label text e.g. from resource bundle on host component
                isBlack: false // style arrows and navigation in black instead of default white
              }, config);
    
              swiperIntegrateCustomPagination(swiperObject, options);
              swiperEmitEventsOnElement(swiperObject);
              swiperPreventTabbingIssues(swiperObject);
              swiperDisableAutoplayOnSlideFocus(swiperObject);
              swiperSetAriaLiveOnFocusIn(swiperObject, options);
              swiperModifyNavigation(swiperObject, options);
            };
    
            var swiperA11yDestroy = exports.swiperA11yDestroy = function swiperA11yDestroy(swiperObject) {
              var swiper = swiperObject;
              var previous = swiper.navigation.prevEl;
              var next = swiper.navigation.nextEl;
    
              if (previous) {
                previous.innerHTML = '';
              }
    
              if (next) {
                next.innerHTML = '';
              }
    
              if (swiper.dxPagination) {
                swiper.dxPagination.Pagination('destroy');
              }
    
              swiper.destroy();
              swiper = null;
            };
    
            var swiperPreventDefaultButtonAction = exports.swiperPreventDefaultButtonAction = function swiperPreventDefaultButtonAction(swiperObject) {
              var swiperOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              var paginationObject = swiperOptions.paginationObject;
    
              var next = swiperObject.navigation.nextEl;
              var previous = swiperObject.navigation.prevEl;
    
              var swiperPreventEnterDoubleAction = function swiperPreventEnterDoubleAction(e) {
                var key = e.which || e.keyCode;
                var RETURN = _aria.KeyCode.RETURN;
    
    
                if (key === RETURN) {
                  e.preventDefault();
    
                  if (paginationObject) {
                    paginationObject.Pagination('updateActivePipByIndex', swiperObject.realIndex);
                  }
                }
              };
    
              next.addEventListener('keydown', function (e) {
                return swiperPreventEnterDoubleAction(e);
              });
              previous.addEventListener('keydown', function (e) {
                return swiperPreventEnterDoubleAction(e);
              });
            };
    
            /***/
          }),
    
    /***/ "./src/main/webapp/resources/dev/js/utils/uiSelectors.js":
    /*!***************************************************************!*\
      !*** ./src/main/webapp/resources/dev/js/utils/uiSelectors.js ***!
      \***************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
    
            var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
    
            var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
    
            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
            /*
                This function replicates the uiSelectors method from createComponent, allowing components which make extensive use
                of component.uiSelectors to more easily have their JS split, without having to refactor this for every component.
            
                To use in your component, specify a uiSelectors object on your element, either in your constructor or as a class
                property, and then call this function, passing your component's `this` as the parameter:
            
                  class MyComponent {
                    constructor(element) {
                      this.uiSelectors = { selectorName: '.selector' };
                      uiSelectors(this, element);
                    }
                  }
            
                This then gives access to the .ui() method as normal:
                  this.ui('selectorName'); // returns all elements matching '.selector'
            */
    
            var uiSelectors = function uiSelectors(obj, element) {
              var component = obj;
              component.uiElements = {};
              component.ui = function (uiName) {
                if (typeof component.uiElements[uiName] !== 'undefined') {
                  // if we've already turned it into a cached object, return it
                  return component.uiElements[uiName];
                }
    
                // search the selector list for the uiName. If found, convert to object then cache and return
                if (typeof component.uiSelectors[uiName] !== 'undefined') {
                  component.uiElements[uiName] = [].concat((0, _toConsumableArray3.default)(element.querySelectorAll(component.uiSelectors[uiName])));
                  return component.uiElements[uiName];
                }
                return null; // if can't find the selector, return null
              };
            };
    
            exports.default = uiSelectors;
    
            /***/
          }),
    
    /***/ "./src/main/webapp/resources/dev/js/utils/windowDimensions.js":
    /*!********************************************************************!*\
      !*** ./src/main/webapp/resources/dev/js/utils/windowDimensions.js ***!
      \********************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            var windowHeight = exports.windowHeight = function windowHeight() {
              return document.documentElement.clientHeight;
            };
    
            var windowWidth = exports.windowWidth = function windowWidth() {
              return document.documentElement.clientWidth;
            };
    
            var documentTopOffset = exports.documentTopOffset = function documentTopOffset(element) {
              var elem = element;
              var offset = 0;
              do {
                offset += elem.offsetTop;
                elem = elem.offsetParent;
              } while (elem);
              return offset < 0 ? 0 : offset;
            };
    
            /***/
          }),
    
    /***/ "swiper":
    /*!*************************!*\
      !*** external "Swiper" ***!
      \*************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
    
            module.exports = Swiper;
    
            /***/
          })
    
        /******/
      });
    