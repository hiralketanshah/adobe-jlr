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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/webapp/components/TabbedContainer/js/TabbedContainer.js");
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

/***/ "./node_modules/babel-runtime/core-js/object/values.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/values.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/values */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/values.js"), __esModule: true };

        /***/
      }),

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/promise.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/promise.js"), __esModule: true };

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

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

        var _promise2 = _interopRequireDefault(_promise);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        exports.default = function (fn) {
          return function () {
            var gen = fn.apply(this, arguments);
            return new _promise2.default(function (resolve, reject) {
              function step(key, arg) {
                try {
                  var info = gen[key](arg);
                  var value = info.value;
                } catch (error) {
                  reject(error);
                  return;
                }

                if (info.done) {
                  resolve(value);
                } else {
                  return _promise2.default.resolve(value).then(function (value) {
                    step("next", value);
                  }, function (err) {
                    step("throw", err);
                  });
                }
              }

              return step("next");
            });
          };
        };

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

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        "use strict";


        exports.__esModule = true;

        var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

        var _assign2 = _interopRequireDefault(_assign);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        exports.default = _assign2.default || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/values.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/values.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        __webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.object.values.js");
        module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.values;


        /***/
      }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/promise.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/promise.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        __webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js");
        __webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
        __webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
        __webpack_require__(/*! ../modules/es6.promise */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.promise.js");
        __webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.finally.js");
        __webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.try.js");
        module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Promise;


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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-instance.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-instance.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

        module.exports = function (it, Constructor, name, forbiddenField) {
          if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
            throw TypeError(name + ': incorrect invocation!');
          } return it;
        };


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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_for-of.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_for-of.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
        var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js");
        var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js");
        var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
        var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
        var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js");
        var BREAK = {};
        var RETURN = {};
        var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
          var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
          var f = ctx(fn, that, entries ? 2 : 1);
          var index = 0;
          var length, step, iterator, result;
          if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
          // fast case for arrays with default iterator
          if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
            result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
            if (result === BREAK || result === RETURN) return result;
          } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
            result = call(iterator, f, step.value, entries);
            if (result === BREAK || result === RETURN) return result;
          }
        };
        exports.BREAK = BREAK;
        exports.RETURN = RETURN;


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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_invoke.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_invoke.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

        // fast apply, http://jsperf.lnkit.com/fast-apply/5
        module.exports = function (fn, args, that) {
          var un = that === undefined;
          switch (args.length) {
            case 0: return un ? fn()
              : fn.call(that);
            case 1: return un ? fn(args[0])
              : fn.call(that, args[0]);
            case 2: return un ? fn(args[0], args[1])
              : fn.call(that, args[0], args[1]);
            case 3: return un ? fn(args[0], args[1], args[2])
              : fn.call(that, args[0], args[1], args[2]);
            case 4: return un ? fn(args[0], args[1], args[2], args[3])
              : fn.call(that, args[0], args[1], args[2], args[3]);
          } return fn.apply(that, args);
        };


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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_microtask.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_microtask.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
        var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_task.js").set;
        var Observer = global.MutationObserver || global.WebKitMutationObserver;
        var process = global.process;
        var Promise = global.Promise;
        var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js")(process) == 'process';

        module.exports = function () {
          var head, last, notify;

          var flush = function () {
            var parent, fn;
            if (isNode && (parent = process.domain)) parent.exit();
            while (head) {
              fn = head.fn;
              head = head.next;
              try {
                fn();
              } catch (e) {
                if (head) notify();
                else last = undefined;
                throw e;
              }
            } last = undefined;
            if (parent) parent.enter();
          };

          // Node.js
          if (isNode) {
            notify = function () {
              process.nextTick(flush);
            };
            // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
          } else if (Observer && !(global.navigator && global.navigator.standalone)) {
            var toggle = true;
            var node = document.createTextNode('');
            new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
            notify = function () {
              node.data = toggle = !toggle;
            };
            // environments with maybe non-completely correct, but existent Promise
          } else if (Promise && Promise.resolve) {
            var promise = Promise.resolve();
            notify = function () {
              promise.then(flush);
            };
            // for other environments - macrotask based on:
            // - setImmediate
            // - MessageChannel
            // - window.postMessag
            // - onreadystatechange
            // - setTimeout
          } else {
            notify = function () {
              // strange IE + webpack dev server bug - use .call(global)
              macrotask.call(global, flush);
            };
          }

          return function (fn) {
            var task = { fn: fn, next: undefined };
            if (last) last.next = task;
            if (!head) {
              head = task;
              notify();
            } last = task;
          };
        };


        /***/
      }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        "use strict";

        // 25.4.1.5 NewPromiseCapability(C)
        var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");

        function PromiseCapability(C) {
          var resolve, reject;
          this.promise = new C(function ($$resolve, $$reject) {
            if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aFunction(resolve);
          this.reject = aFunction(reject);
        }

        module.exports.f = function (C) {
          return new PromiseCapability(C);
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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_perform.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_perform.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

        module.exports = function (exec) {
          try {
            return { e: false, v: exec() };
          } catch (e) {
            return { e: true, v: e };
          }
        };


        /***/
      }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_promise-resolve.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_promise-resolve.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
        var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
        var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js");

        module.exports = function (C, x) {
          anObject(C);
          if (isObject(x) && x.constructor === C) return x;
          var promiseCapability = newPromiseCapability.f(C);
          var resolve = promiseCapability.resolve;
          resolve(x);
          return promiseCapability.promise;
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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine-all.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine-all.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
        module.exports = function (target, src, safe) {
          for (var key in src) {
            if (safe && target[key]) target[key] = src[key];
            else hide(target, key, src[key]);
          } return target;
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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-species.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-species.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
        var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
        var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
        var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");
        var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('species');

        module.exports = function (KEY) {
          var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
          if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
            configurable: true,
            get: function () { return this; }
          });
        };


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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_species-constructor.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_species-constructor.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        // 7.3.20 SpeciesConstructor(O, defaultConstructor)
        var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
        var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
        var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('species');
        module.exports = function (O, D) {
          var C = anObject(O).constructor;
          var S;
          return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_task.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_task.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
        var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_invoke.js");
        var html = __webpack_require__(/*! ./_html */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js");
        var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js");
        var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
        var process = global.process;
        var setTask = global.setImmediate;
        var clearTask = global.clearImmediate;
        var MessageChannel = global.MessageChannel;
        var Dispatch = global.Dispatch;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = 'onreadystatechange';
        var defer, channel, port;
        var run = function () {
          var id = +this;
          // eslint-disable-next-line no-prototype-builtins
          if (queue.hasOwnProperty(id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        };
        var listener = function (event) {
          run.call(event.data);
        };
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!setTask || !clearTask) {
          setTask = function setImmediate(fn) {
            var args = [];
            var i = 1;
            while (arguments.length > i) args.push(arguments[i++]);
            queue[++counter] = function () {
              // eslint-disable-next-line no-new-func
              invoke(typeof fn == 'function' ? fn : Function(fn), args);
            };
            defer(counter);
            return counter;
          };
          clearTask = function clearImmediate(id) {
            delete queue[id];
          };
          // Node.js 0.8-
          if (__webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
            defer = function (id) {
              process.nextTick(ctx(run, id, 1));
            };
            // Sphere (JS game engine) Dispatch API
          } else if (Dispatch && Dispatch.now) {
            defer = function (id) {
              Dispatch.now(ctx(run, id, 1));
            };
            // Browsers with MessageChannel, includes WebWorkers
          } else if (MessageChannel) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = listener;
            defer = ctx(port.postMessage, port, 1);
            // Browsers with postMessage, skip WebWorkers
            // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
          } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
            defer = function (id) {
              global.postMessage(id + '', '*');
            };
            global.addEventListener('message', listener, false);
            // IE8-
          } else if (ONREADYSTATECHANGE in cel('script')) {
            defer = function (id) {
              html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
                html.removeChild(this);
                run.call(id);
              };
            };
            // Rest old browsers
          } else {
            defer = function (id) {
              setTimeout(ctx(run, id, 1), 0);
            };
          }
        }
        module.exports = {
          set: setTask,
          clear: clearTask
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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports) {



        /***/
      }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.promise.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.promise.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        "use strict";

        var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
        var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
        var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
        var classof = __webpack_require__(/*! ./_classof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js");
        var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
        var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
        var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
        var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-instance.js");
        var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_for-of.js");
        var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_species-constructor.js");
        var task = __webpack_require__(/*! ./_task */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_task.js").set;
        var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_microtask.js")();
        var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js");
        var perform = __webpack_require__(/*! ./_perform */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_perform.js");
        var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_promise-resolve.js");
        var PROMISE = 'Promise';
        var TypeError = global.TypeError;
        var process = global.process;
        var $Promise = global[PROMISE];
        var isNode = classof(process) == 'process';
        var empty = function () { /* empty */ };
        var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
        var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

        var USE_NATIVE = !!function () {
          try {
            // correct subclassing with @@species support
            var promise = $Promise.resolve(1);
            var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
              exec(empty, empty);
            };
            // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
            return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
          } catch (e) { /* empty */ }
        }();

        // helpers
        var isThenable = function (it) {
          var then;
          return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
        };
        var notify = function (promise, isReject) {
          if (promise._n) return;
          promise._n = true;
          var chain = promise._c;
          microtask(function () {
            var value = promise._v;
            var ok = promise._s == 1;
            var i = 0;
            var run = function (reaction) {
              var handler = ok ? reaction.ok : reaction.fail;
              var resolve = reaction.resolve;
              var reject = reaction.reject;
              var domain = reaction.domain;
              var result, then;
              try {
                if (handler) {
                  if (!ok) {
                    if (promise._h == 2) onHandleUnhandled(promise);
                    promise._h = 1;
                  }
                  if (handler === true) result = value;
                  else {
                    if (domain) domain.enter();
                    result = handler(value);
                    if (domain) domain.exit();
                  }
                  if (result === reaction.promise) {
                    reject(TypeError('Promise-chain cycle'));
                  } else if (then = isThenable(result)) {
                    then.call(result, resolve, reject);
                  } else resolve(result);
                } else reject(value);
              } catch (e) {
                reject(e);
              }
            };
            while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
            promise._c = [];
            promise._n = false;
            if (isReject && !promise._h) onUnhandled(promise);
          });
        };
        var onUnhandled = function (promise) {
          task.call(global, function () {
            var value = promise._v;
            var unhandled = isUnhandled(promise);
            var result, handler, console;
            if (unhandled) {
              result = perform(function () {
                if (isNode) {
                  process.emit('unhandledRejection', value, promise);
                } else if (handler = global.onunhandledrejection) {
                  handler({ promise: promise, reason: value });
                } else if ((console = global.console) && console.error) {
                  console.error('Unhandled promise rejection', value);
                }
              });
              // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
              promise._h = isNode || isUnhandled(promise) ? 2 : 1;
            } promise._a = undefined;
            if (unhandled && result.e) throw result.v;
          });
        };
        var isUnhandled = function (promise) {
          return promise._h !== 1 && (promise._a || promise._c).length === 0;
        };
        var onHandleUnhandled = function (promise) {
          task.call(global, function () {
            var handler;
            if (isNode) {
              process.emit('rejectionHandled', promise);
            } else if (handler = global.onrejectionhandled) {
              handler({ promise: promise, reason: promise._v });
            }
          });
        };
        var $reject = function (value) {
          var promise = this;
          if (promise._d) return;
          promise._d = true;
          promise = promise._w || promise; // unwrap
          promise._v = value;
          promise._s = 2;
          if (!promise._a) promise._a = promise._c.slice();
          notify(promise, true);
        };
        var $resolve = function (value) {
          var promise = this;
          var then;
          if (promise._d) return;
          promise._d = true;
          promise = promise._w || promise; // unwrap
          try {
            if (promise === value) throw TypeError("Promise can't be resolved itself");
            if (then = isThenable(value)) {
              microtask(function () {
                var wrapper = { _w: promise, _d: false }; // wrap
                try {
                  then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                } catch (e) {
                  $reject.call(wrapper, e);
                }
              });
            } else {
              promise._v = value;
              promise._s = 1;
              notify(promise, false);
            }
          } catch (e) {
            $reject.call({ _w: promise, _d: false }, e); // wrap
          }
        };

        // constructor polyfill
        if (!USE_NATIVE) {
          // 25.4.3.1 Promise(executor)
          $Promise = function Promise(executor) {
            anInstance(this, $Promise, PROMISE, '_h');
            aFunction(executor);
            Internal.call(this);
            try {
              executor(ctx($resolve, this, 1), ctx($reject, this, 1));
            } catch (err) {
              $reject.call(this, err);
            }
          };
          // eslint-disable-next-line no-unused-vars
          Internal = function Promise(executor) {
            this._c = [];             // <- awaiting reactions
            this._a = undefined;      // <- checked in isUnhandled reactions
            this._s = 0;              // <- state
            this._d = false;          // <- done
            this._v = undefined;      // <- value
            this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
            this._n = false;          // <- notify
          };
          Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
            // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
            then: function then(onFulfilled, onRejected) {
              var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
              reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
              reaction.fail = typeof onRejected == 'function' && onRejected;
              reaction.domain = isNode ? process.domain : undefined;
              this._c.push(reaction);
              if (this._a) this._a.push(reaction);
              if (this._s) notify(this, false);
              return reaction.promise;
            },
            // 25.4.5.1 Promise.prototype.catch(onRejected)
            'catch': function (onRejected) {
              return this.then(undefined, onRejected);
            }
          });
          OwnPromiseCapability = function () {
            var promise = new Internal();
            this.promise = promise;
            this.resolve = ctx($resolve, promise, 1);
            this.reject = ctx($reject, promise, 1);
          };
          newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
            return C === $Promise || C === Wrapper
              ? new OwnPromiseCapability(C)
              : newGenericPromiseCapability(C);
          };
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
        __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
        __webpack_require__(/*! ./_set-species */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-species.js")(PROMISE);
        Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js")[PROMISE];

        // statics
        $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
          // 25.4.4.5 Promise.reject(r)
          reject: function reject(r) {
            var capability = newPromiseCapability(this);
            var $$reject = capability.reject;
            $$reject(r);
            return capability.promise;
          }
        });
        $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
          // 25.4.4.6 Promise.resolve(x)
          resolve: function resolve(x) {
            return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
          }
        });
        $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
          $Promise.all(iter)['catch'](empty);
        })), PROMISE, {
            // 25.4.4.1 Promise.all(iterable)
            all: function all(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var resolve = capability.resolve;
              var reject = capability.reject;
              var result = perform(function () {
                var values = [];
                var index = 0;
                var remaining = 1;
                forOf(iterable, false, function (promise) {
                  var $index = index++;
                  var alreadyCalled = false;
                  values.push(undefined);
                  remaining++;
                  C.resolve(promise).then(function (value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[$index] = value;
                    --remaining || resolve(values);
                  }, reject);
                });
                --remaining || resolve(values);
              });
              if (result.e) reject(result.v);
              return capability.promise;
            },
            // 25.4.4.4 Promise.race(iterable)
            race: function race(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var reject = capability.reject;
              var result = perform(function () {
                forOf(iterable, false, function (promise) {
                  C.resolve(promise).then(capability.resolve, reject);
                });
              });
              if (result.e) reject(result.v);
              return capability.promise;
            }
          });


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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.object.values.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.object.values.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        // https://github.com/tc39/proposal-object-values-entries
        var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
        var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-to-array.js")(false);

        $export($export.S, 'Object', {
          values: function values(it) {
            return $values(it);
          }
        });


        /***/
      }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.finally.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        "use strict";
        // https://github.com/tc39/proposal-promise-finally

        var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
        var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
        var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
        var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_species-constructor.js");
        var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_promise-resolve.js");

        $export($export.P + $export.R, 'Promise', {
          'finally': function (onFinally) {
            var C = speciesConstructor(this, core.Promise || global.Promise);
            var isFunction = typeof onFinally == 'function';
            return this.then(
              isFunction ? function (x) {
                return promiseResolve(C, onFinally()).then(function () { return x; });
              } : onFinally,
              isFunction ? function (e) {
                return promiseResolve(C, onFinally()).then(function () { throw e; });
              } : onFinally
            );
          }
        });


        /***/
      }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.try.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.try.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/tc39/proposal-promise-try
        var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
        var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js");
        var perform = __webpack_require__(/*! ./_perform */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_perform.js");

        $export($export.S, 'Promise', {
          'try': function (callbackfn) {
            var promiseCapability = newPromiseCapability.f(this);
            var result = perform(callbackfn);
            (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
            return promiseCapability.promise;
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

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


        /***/
      }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

        /** Built-in value references. */
        var Symbol = root.Symbol;

        module.exports = Symbol;


        /***/
      }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
          getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
          objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

        /** `Object#toString` result references. */
        var nullTag = '[object Null]',
          undefinedTag = '[object Undefined]';

        /** Built-in value references. */
        var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

        /**
         * The base implementation of `getTag` without fallbacks for buggy environments.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined ? undefinedTag : nullTag;
          }
          return (symToStringTag && symToStringTag in Object(value))
            ? getRawTag(value)
            : objectToString(value);
        }

        module.exports = baseGetTag;


        /***/
      }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (global) {/** Detect free variable `global` from Node.js. */
          var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

          module.exports = freeGlobal;

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

        /***/
      }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var nativeObjectToString = objectProto.toString;

        /** Built-in value references. */
        var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

        /**
         * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the raw `toStringTag`.
         */
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag),
            tag = value[symToStringTag];

          try {
            value[symToStringTag] = undefined;
            var unmasked = true;
          } catch (e) { }

          var result = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result;
        }

        module.exports = getRawTag;


        /***/
      }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var nativeObjectToString = objectProto.toString;

        /**
         * Converts `value` to a string using `Object.prototype.toString`.
         *
         * @private
         * @param {*} value The value to convert.
         * @returns {string} Returns the converted string.
         */
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }

        module.exports = objectToString;


        /***/
      }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

        /** Detect free variable `self`. */
        var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

        /** Used as a reference to the global object. */
        var root = freeGlobal || freeSelf || Function('return this')();

        module.exports = root;


        /***/
      }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
          now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
          toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

        /** Error message constants. */
        var FUNC_ERROR_TEXT = 'Expected a function';

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeMax = Math.max,
          nativeMin = Math.min;

        /**
         * Creates a debounced function that delays invoking `func` until after `wait`
         * milliseconds have elapsed since the last time the debounced function was
         * invoked. The debounced function comes with a `cancel` method to cancel
         * delayed `func` invocations and a `flush` method to immediately invoke them.
         * Provide `options` to indicate whether `func` should be invoked on the
         * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
         * with the last arguments provided to the debounced function. Subsequent
         * calls to the debounced function return the result of the last `func`
         * invocation.
         *
         * **Note:** If `leading` and `trailing` options are `true`, `func` is
         * invoked on the trailing edge of the timeout only if the debounced function
         * is invoked more than once during the `wait` timeout.
         *
         * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
         * until to the next tick, similar to `setTimeout` with a timeout of `0`.
         *
         * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
         * for details over the differences between `_.debounce` and `_.throttle`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {Function} func The function to debounce.
         * @param {number} [wait=0] The number of milliseconds to delay.
         * @param {Object} [options={}] The options object.
         * @param {boolean} [options.leading=false]
         *  Specify invoking on the leading edge of the timeout.
         * @param {number} [options.maxWait]
         *  The maximum time `func` is allowed to be delayed before it's invoked.
         * @param {boolean} [options.trailing=true]
         *  Specify invoking on the trailing edge of the timeout.
         * @returns {Function} Returns the new debounced function.
         * @example
         *
         * // Avoid costly calculations while the window size is in flux.
         * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
         *
         * // Invoke `sendMail` when clicked, debouncing subsequent calls.
         * jQuery(element).on('click', _.debounce(sendMail, 300, {
         *   'leading': true,
         *   'trailing': false
         * }));
         *
         * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
         * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
         * var source = new EventSource('/stream');
         * jQuery(source).on('message', debounced);
         *
         * // Cancel the trailing debounced invocation.
         * jQuery(window).on('popstate', debounced.cancel);
         */
        function debounce(func, wait, options) {
          var lastArgs,
            lastThis,
            maxWait,
            result,
            timerId,
            lastCallTime,
            lastInvokeTime = 0,
            leading = false,
            maxing = false,
            trailing = true;

          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = 'maxWait' in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
          }

          function invokeFunc(time) {
            var args = lastArgs,
              thisArg = lastThis;

            lastArgs = lastThis = undefined;
            lastInvokeTime = time;
            result = func.apply(thisArg, args);
            return result;
          }

          function leadingEdge(time) {
            // Reset any `maxWait` timer.
            lastInvokeTime = time;
            // Start the timer for the trailing edge.
            timerId = setTimeout(timerExpired, wait);
            // Invoke the leading edge.
            return leading ? invokeFunc(time) : result;
          }

          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime,
              timeSinceLastInvoke = time - lastInvokeTime,
              timeWaiting = wait - timeSinceLastCall;

            return maxing
              ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
              : timeWaiting;
          }

          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime,
              timeSinceLastInvoke = time - lastInvokeTime;

            // Either this is the first call, activity has stopped and we're at the
            // trailing edge, the system time has gone backwards and we're treating
            // it as the trailing edge, or we've hit the `maxWait` limit.
            return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
              (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
          }

          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            // Restart the timer.
            timerId = setTimeout(timerExpired, remainingWait(time));
          }

          function trailingEdge(time) {
            timerId = undefined;

            // Only invoke if we have `lastArgs` which means `func` has been
            // debounced at least once.
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined;
            return result;
          }

          function cancel() {
            if (timerId !== undefined) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined;
          }

          function flush() {
            return timerId === undefined ? result : trailingEdge(now());
          }

          function debounced() {
            var time = now(),
              isInvoking = shouldInvoke(time);

            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;

            if (isInvoking) {
              if (timerId === undefined) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined) {
              timerId = setTimeout(timerExpired, wait);
            }
            return result;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }

        module.exports = debounce;


        /***/
      }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function (module, exports) {

        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == 'object' || type == 'function');
        }

        module.exports = isObject;


        /***/
      }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function (module, exports) {

        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        function isObjectLike(value) {
          return value != null && typeof value == 'object';
        }

        module.exports = isObjectLike;


        /***/
      }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
          isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

        /** `Object#toString` result references. */
        var symbolTag = '[object Symbol]';

        /**
         * Checks if `value` is classified as a `Symbol` primitive or object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
         * @example
         *
         * _.isSymbol(Symbol.iterator);
         * // => true
         *
         * _.isSymbol('abc');
         * // => false
         */
        function isSymbol(value) {
          return typeof value == 'symbol' ||
            (isObjectLike(value) && baseGetTag(value) == symbolTag);
        }

        module.exports = isSymbol;


        /***/
      }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

        /**
         * Gets the timestamp of the number of milliseconds that have elapsed since
         * the Unix epoch (1 January 1970 00:00:00 UTC).
         *
         * @static
         * @memberOf _
         * @since 2.4.0
         * @category Date
         * @returns {number} Returns the timestamp.
         * @example
         *
         * _.defer(function(stamp) {
         *   console.log(_.now() - stamp);
         * }, _.now());
         * // => Logs the number of milliseconds it took for the deferred invocation.
         */
        var now = function () {
          return root.Date.now();
        };

        module.exports = now;


        /***/
      }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
          isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

        /** Used as references for various `Number` constants. */
        var NAN = 0 / 0;

        /** Used to match leading and trailing whitespace. */
        var reTrim = /^\s+|\s+$/g;

        /** Used to detect bad signed hexadecimal string values. */
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

        /** Used to detect binary string values. */
        var reIsBinary = /^0b[01]+$/i;

        /** Used to detect octal string values. */
        var reIsOctal = /^0o[0-7]+$/i;

        /** Built-in method references without a dependency on `root`. */
        var freeParseInt = parseInt;

        /**
         * Converts `value` to a number.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to process.
         * @returns {number} Returns the number.
         * @example
         *
         * _.toNumber(3.2);
         * // => 3.2
         *
         * _.toNumber(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toNumber(Infinity);
         * // => Infinity
         *
         * _.toNumber('3.2');
         * // => 3.2
         */
        function toNumber(value) {
          if (typeof value == 'number') {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
            value = isObject(other) ? (other + '') : other;
          }
          if (typeof value != 'string') {
            return value === 0 ? value : +value;
          }
          value = value.replace(reTrim, '');
          var isBinary = reIsBinary.test(value);
          return (isBinary || reIsOctal.test(value))
            ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
            : (reIsBadHex.test(value) ? NAN : +value);
        }

        module.exports = toNumber;


        /***/
      }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function () { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function () { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function () { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function () { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function () { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function () { return ActionTypes; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


        /**
         * These are private action types reserved by Redux.
         * For any unknown actions, you must return the current state.
         * If the current state is undefined, you must return the initial state.
         * Do not reference these action types directly in your code.
         */
        var ActionTypes = {
          INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
          REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
        };

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        /**
         * @param {any} obj The object to inspect.
         * @returns {boolean} True if the argument appears to be a plain object.
         */
        function isPlainObject(obj) {
          if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

          var proto = obj;
          while (Object.getPrototypeOf(proto) !== null) {
            proto = Object.getPrototypeOf(proto);
          }

          return Object.getPrototypeOf(obj) === proto;
        }

        /**
         * Creates a Redux store that holds the state tree.
         * The only way to change the data in the store is to call `dispatch()` on it.
         *
         * There should only be a single store in your app. To specify how different
         * parts of the state tree respond to actions, you may combine several reducers
         * into a single reducer function by using `combineReducers`.
         *
         * @param {Function} reducer A function that returns the next state tree, given
         * the current state tree and the action to handle.
         *
         * @param {any} [preloadedState] The initial state. You may optionally specify it
         * to hydrate the state from the server in universal apps, or to restore a
         * previously serialized user session.
         * If you use `combineReducers` to produce the root reducer function, this must be
         * an object with the same shape as `combineReducers` keys.
         *
         * @param {Function} [enhancer] The store enhancer. You may optionally specify it
         * to enhance the store with third-party capabilities such as middleware,
         * time travel, persistence, etc. The only store enhancer that ships with Redux
         * is `applyMiddleware()`.
         *
         * @returns {Store} A Redux store that lets you read the state, dispatch actions
         * and subscribe to changes.
         */
        function createStore(reducer, preloadedState, enhancer) {
          var _ref2;

          if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
            enhancer = preloadedState;
            preloadedState = undefined;
          }

          if (typeof enhancer !== 'undefined') {
            if (typeof enhancer !== 'function') {
              throw new Error('Expected the enhancer to be a function.');
            }

            return enhancer(createStore)(reducer, preloadedState);
          }

          if (typeof reducer !== 'function') {
            throw new Error('Expected the reducer to be a function.');
          }

          var currentReducer = reducer;
          var currentState = preloadedState;
          var currentListeners = [];
          var nextListeners = currentListeners;
          var isDispatching = false;

          function ensureCanMutateNextListeners() {
            if (nextListeners === currentListeners) {
              nextListeners = currentListeners.slice();
            }
          }

          /**
           * Reads the state tree managed by the store.
           *
           * @returns {any} The current state tree of your application.
           */
          function getState() {
            if (isDispatching) {
              throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
            }

            return currentState;
          }

          /**
           * Adds a change listener. It will be called any time an action is dispatched,
           * and some part of the state tree may potentially have changed. You may then
           * call `getState()` to read the current state tree inside the callback.
           *
           * You may call `dispatch()` from a change listener, with the following
           * caveats:
           *
           * 1. The subscriptions are snapshotted just before every `dispatch()` call.
           * If you subscribe or unsubscribe while the listeners are being invoked, this
           * will not have any effect on the `dispatch()` that is currently in progress.
           * However, the next `dispatch()` call, whether nested or not, will use a more
           * recent snapshot of the subscription list.
           *
           * 2. The listener should not expect to see all state changes, as the state
           * might have been updated multiple times during a nested `dispatch()` before
           * the listener is called. It is, however, guaranteed that all subscribers
           * registered before the `dispatch()` started will be called with the latest
           * state by the time it exits.
           *
           * @param {Function} listener A callback to be invoked on every dispatch.
           * @returns {Function} A function to remove this change listener.
           */
          function subscribe(listener) {
            if (typeof listener !== 'function') {
              throw new Error('Expected the listener to be a function.');
            }

            if (isDispatching) {
              throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
            }

            var isSubscribed = true;

            ensureCanMutateNextListeners();
            nextListeners.push(listener);

            return function unsubscribe() {
              if (!isSubscribed) {
                return;
              }

              if (isDispatching) {
                throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
              }

              isSubscribed = false;

              ensureCanMutateNextListeners();
              var index = nextListeners.indexOf(listener);
              nextListeners.splice(index, 1);
            };
          }

          /**
           * Dispatches an action. It is the only way to trigger a state change.
           *
           * The `reducer` function, used to create the store, will be called with the
           * current state tree and the given `action`. Its return value will
           * be considered the **next** state of the tree, and the change listeners
           * will be notified.
           *
           * The base implementation only supports plain object actions. If you want to
           * dispatch a Promise, an Observable, a thunk, or something else, you need to
           * wrap your store creating function into the corresponding middleware. For
           * example, see the documentation for the `redux-thunk` package. Even the
           * middleware will eventually dispatch plain object actions using this method.
           *
           * @param {Object} action A plain object representing “what changed”. It is
           * a good idea to keep actions serializable so you can record and replay user
           * sessions, or use the time travelling `redux-devtools`. An action must have
           * a `type` property which may not be `undefined`. It is a good idea to use
           * string constants for action types.
           *
           * @returns {Object} For convenience, the same action object you dispatched.
           *
           * Note that, if you use a custom middleware, it may wrap `dispatch()` to
           * return something else (for example, a Promise you can await).
           */
          function dispatch(action) {
            if (!isPlainObject(action)) {
              throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
            }

            if (typeof action.type === 'undefined') {
              throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
            }

            if (isDispatching) {
              throw new Error('Reducers may not dispatch actions.');
            }

            try {
              isDispatching = true;
              currentState = currentReducer(currentState, action);
            } finally {
              isDispatching = false;
            }

            var listeners = currentListeners = nextListeners;
            for (var i = 0; i < listeners.length; i++) {
              var listener = listeners[i];
              listener();
            }

            return action;
          }

          /**
           * Replaces the reducer currently used by the store to calculate the state.
           *
           * You might need this if your app implements code splitting and you want to
           * load some of the reducers dynamically. You might also need this if you
           * implement a hot reloading mechanism for Redux.
           *
           * @param {Function} nextReducer The reducer for the store to use instead.
           * @returns {void}
           */
          function replaceReducer(nextReducer) {
            if (typeof nextReducer !== 'function') {
              throw new Error('Expected the nextReducer to be a function.');
            }

            currentReducer = nextReducer;
            dispatch({ type: ActionTypes.REPLACE });
          }

          /**
           * Interoperability point for observable/reactive libraries.
           * @returns {observable} A minimal observable of state changes.
           * For more information, see the observable proposal:
           * https://github.com/tc39/proposal-observable
           */
          function observable() {
            var _ref;

            var outerSubscribe = subscribe;
            return _ref = {
              /**
               * The minimal observable subscription method.
               * @param {Object} observer Any object that can be used as an observer.
               * The observer object should have a `next` method.
               * @returns {subscription} An object with an `unsubscribe` method that can
               * be used to unsubscribe the observable from the store, and prevent further
               * emission of values from the observable.
               */
              subscribe: function subscribe(observer) {
                if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
                  throw new TypeError('Expected the observer to be an object.');
                }

                function observeState() {
                  if (observer.next) {
                    observer.next(getState());
                  }
                }

                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return { unsubscribe: unsubscribe };
              }
            }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
              return this;
            }, _ref;
          }

          // When a store is created, an "INIT" action is dispatched so that every
          // reducer returns their initial state. This effectively populates
          // the initial state tree.
          dispatch({ type: ActionTypes.INIT });

          return _ref2 = {
            dispatch: dispatch,
            subscribe: subscribe,
            getState: getState,
            replaceReducer: replaceReducer
          }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
        }

        /**
         * Prints a warning in the console if it exists.
         *
         * @param {String} message The warning message.
         * @returns {void}
         */
        function warning(message) {
          /* eslint-disable no-console */
          if (typeof console !== 'undefined' && typeof console.error === 'function') {
            console.error(message);
          }
          /* eslint-enable no-console */
          try {
            // This error was thrown as a convenience so that if you enable
            // "break on all exceptions" in your console,
            // it would pause the execution at this line.
            throw new Error(message);
          } catch (e) { } // eslint-disable-line no-empty
        }

        function getUndefinedStateErrorMessage(key, action) {
          var actionType = action && action.type;
          var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

          return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
        }

        function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
          var reducerKeys = Object.keys(reducers);
          var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

          if (reducerKeys.length === 0) {
            return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
          }

          if (!isPlainObject(inputState)) {
            return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
          }

          var unexpectedKeys = Object.keys(inputState).filter(function (key) {
            return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
          });

          unexpectedKeys.forEach(function (key) {
            unexpectedKeyCache[key] = true;
          });

          if (action && action.type === ActionTypes.REPLACE) return;

          if (unexpectedKeys.length > 0) {
            return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
          }
        }

        function assertReducerShape(reducers) {
          Object.keys(reducers).forEach(function (key) {
            var reducer = reducers[key];
            var initialState = reducer(undefined, { type: ActionTypes.INIT });

            if (typeof initialState === 'undefined') {
              throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
            }

            var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
            if (typeof reducer(undefined, { type: type }) === 'undefined') {
              throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
            }
          });
        }

        /**
         * Turns an object whose values are different reducer functions, into a single
         * reducer function. It will call every child reducer, and gather their results
         * into a single state object, whose keys correspond to the keys of the passed
         * reducer functions.
         *
         * @param {Object} reducers An object whose values correspond to different
         * reducer functions that need to be combined into one. One handy way to obtain
         * it is to use ES6 `import * as reducers` syntax. The reducers may never return
         * undefined for any action. Instead, they should return their initial state
         * if the state passed to them was undefined, and the current state for any
         * unrecognized action.
         *
         * @returns {Function} A reducer function that invokes every reducer inside the
         * passed object, and builds a state object with the same shape.
         */
        function combineReducers(reducers) {
          var reducerKeys = Object.keys(reducers);
          var finalReducers = {};
          for (var i = 0; i < reducerKeys.length; i++) {
            var key = reducerKeys[i];

            if (true) {
              if (typeof reducers[key] === 'undefined') {
                warning('No reducer provided for key "' + key + '"');
              }
            }

            if (typeof reducers[key] === 'function') {
              finalReducers[key] = reducers[key];
            }
          }
          var finalReducerKeys = Object.keys(finalReducers);

          var unexpectedKeyCache = void 0;
          if (true) {
            unexpectedKeyCache = {};
          }

          var shapeAssertionError = void 0;
          try {
            assertReducerShape(finalReducers);
          } catch (e) {
            shapeAssertionError = e;
          }

          return function combination() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var action = arguments[1];

            if (shapeAssertionError) {
              throw shapeAssertionError;
            }

            if (true) {
              var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
              if (warningMessage) {
                warning(warningMessage);
              }
            }

            var hasChanged = false;
            var nextState = {};
            for (var _i = 0; _i < finalReducerKeys.length; _i++) {
              var _key = finalReducerKeys[_i];
              var reducer = finalReducers[_key];
              var previousStateForKey = state[_key];
              var nextStateForKey = reducer(previousStateForKey, action);
              if (typeof nextStateForKey === 'undefined') {
                var errorMessage = getUndefinedStateErrorMessage(_key, action);
                throw new Error(errorMessage);
              }
              nextState[_key] = nextStateForKey;
              hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
            }
            return hasChanged ? nextState : state;
          };
        }

        function bindActionCreator(actionCreator, dispatch) {
          return function () {
            return dispatch(actionCreator.apply(this, arguments));
          };
        }

        /**
         * Turns an object whose values are action creators, into an object with the
         * same keys, but with every function wrapped into a `dispatch` call so they
         * may be invoked directly. This is just a convenience method, as you can call
         * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
         *
         * For convenience, you can also pass a single function as the first argument,
         * and get a function in return.
         *
         * @param {Function|Object} actionCreators An object whose values are action
         * creator functions. One handy way to obtain it is to use ES6 `import * as`
         * syntax. You may also pass a single function.
         *
         * @param {Function} dispatch The `dispatch` function available on your Redux
         * store.
         *
         * @returns {Function|Object} The object mimicking the original object, but with
         * every action creator wrapped into the `dispatch` call. If you passed a
         * function as `actionCreators`, the return value will also be a single
         * function.
         */
        function bindActionCreators(actionCreators, dispatch) {
          if (typeof actionCreators === 'function') {
            return bindActionCreator(actionCreators, dispatch);
          }

          if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
            throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
          }

          var keys = Object.keys(actionCreators);
          var boundActionCreators = {};
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var actionCreator = actionCreators[key];
            if (typeof actionCreator === 'function') {
              boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
            }
          }
          return boundActionCreators;
        }

        /**
         * Composes single-argument functions from right to left. The rightmost
         * function can take multiple arguments as it provides the signature for
         * the resulting composite function.
         *
         * @param {...Function} funcs The functions to compose.
         * @returns {Function} A function obtained by composing the argument functions
         * from right to left. For example, compose(f, g, h) is identical to doing
         * (...args) => f(g(h(...args))).
         */

        function compose() {
          for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
            funcs[_key] = arguments[_key];
          }

          if (funcs.length === 0) {
            return function (arg) {
              return arg;
            };
          }

          if (funcs.length === 1) {
            return funcs[0];
          }

          return funcs.reduce(function (a, b) {
            return function () {
              return a(b.apply(undefined, arguments));
            };
          });
        }

        /**
         * Creates a store enhancer that applies middleware to the dispatch method
         * of the Redux store. This is handy for a variety of tasks, such as expressing
         * asynchronous actions in a concise manner, or logging every action payload.
         *
         * See `redux-thunk` package as an example of the Redux middleware.
         *
         * Because middleware is potentially asynchronous, this should be the first
         * store enhancer in the composition chain.
         *
         * Note that each middleware will be given the `dispatch` and `getState` functions
         * as named arguments.
         *
         * @param {...Function} middlewares The middleware chain to be applied.
         * @returns {Function} A store enhancer applying the middleware.
         */
        function applyMiddleware() {
          for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
            middlewares[_key] = arguments[_key];
          }

          return function (createStore) {
            return function () {
              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              var store = createStore.apply(undefined, args);
              var _dispatch = function dispatch() {
                throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
              };

              var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch() {
                  return _dispatch.apply(undefined, arguments);
                }
              };
              var chain = middlewares.map(function (middleware) {
                return middleware(middlewareAPI);
              });
              _dispatch = compose.apply(undefined, chain)(store.dispatch);

              return _extends({}, store, {
                dispatch: _dispatch
              });
            };
          };
        }

        /*
         * This is a dummy function to check if the function name has been altered by minification.
         * If the function has been minified and NODE_ENV !== 'production', warn the user.
         */
        function isCrushed() { }

        if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
          warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
        }




        /***/
      }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        // This method of obtaining a reference to the global object needs to be
        // kept identical to the way it is obtained in runtime.js
        var g = (function () { return this })() || Function("return this")();

        // Use `getOwnPropertyNames` because not all browsers support calling
        // `hasOwnProperty` on the global `self` object in a worker. See #183.
        var hadRuntime = g.regeneratorRuntime &&
          Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

        // Save the old regeneratorRuntime in case it needs to be restored later.
        var oldRuntime = hadRuntime && g.regeneratorRuntime;

        // Force reevalutation of runtime.js.
        g.regeneratorRuntime = undefined;

        module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

        if (hadRuntime) {
          // Restore the original runtime.
          g.regeneratorRuntime = oldRuntime;
        } else {
          // Remove the global property added by runtime.js.
          try {
            delete g.regeneratorRuntime;
          } catch (e) {
            g.regeneratorRuntime = undefined;
          }
        }


        /***/
      }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        !(function (global) {
          "use strict";

          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined; // More compressible than void 0.
          var $Symbol = typeof Symbol === "function" ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

          var inModule = typeof module === "object";
          var runtime = global.regeneratorRuntime;
          if (runtime) {
            if (inModule) {
              // If regeneratorRuntime is defined globally and we're in a module,
              // make the exports object identical to regeneratorRuntime.
              module.exports = runtime;
            }
            // Don't bother evaluating the rest of this file if the runtime was
            // already defined globally.
            return;
          }

          // Define the runtime globally (as expected by generated code) as either
          // module.exports (if we're in a module) or a new, empty object.
          runtime = global.regeneratorRuntime = inModule ? module.exports : {};

          function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);

            // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
            generator._invoke = makeInvokeMethod(innerFn, self, context);

            return generator;
          }
          runtime.wrap = wrap;

          // Try/catch helper to minimize deoptimizations. Returns a completion
          // record like context.tryEntries[i].completion. This interface could
          // have been (and was previously) designed to take a closure to be
          // invoked without arguments, but in all the cases we care about we
          // already have an existing method we want to call, so there's no need
          // to create a new function object. We can even get away with assuming
          // the method takes exactly one argument, since that happens to be true
          // in every case, so we don't have to touch the arguments object. The
          // only additional allocation required is the completion record, which
          // has a stable shape and so hopefully should be cheap to allocate.
          function tryCatch(fn, obj, arg) {
            try {
              return { type: "normal", arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: "throw", arg: err };
            }
          }

          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed";

          // Returning this object from the innerFn has the same effect as
          // breaking out of the dispatch switch statement.
          var ContinueSentinel = {};

          // Dummy constructor functions that we use as the .constructor and
          // .constructor.prototype properties for functions that return Generator
          // objects. For full spec compliance, you may wish to configure your
          // minifier not to mangle the names of these two functions.
          function Generator() { }
          function GeneratorFunction() { }
          function GeneratorFunctionPrototype() { }

          // This is a polyfill for %IteratorPrototype% for environments that
          // don't natively support it.
          var IteratorPrototype = {};
          IteratorPrototype[iteratorSymbol] = function () {
            return this;
          };

          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
          if (NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
          }

          var Gp = GeneratorFunctionPrototype.prototype =
            Generator.prototype = Object.create(IteratorPrototype);
          GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunctionPrototype[toStringTagSymbol] =
            GeneratorFunction.displayName = "GeneratorFunction";

          // Helper for defining the .next, .throw, and .return methods of the
          // Iterator interface in terms of a single ._invoke method.
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              prototype[method] = function (arg) {
                return this._invoke(method, arg);
              };
            });
          }

          runtime.isGeneratorFunction = function (genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor
              ? ctor === GeneratorFunction ||
              // For the native GeneratorFunction constructor, the best we can
              // do is to check its .name property.
              (ctor.displayName || ctor.name) === "GeneratorFunction"
              : false;
          };

          runtime.mark = function (genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              if (!(toStringTagSymbol in genFun)) {
                genFun[toStringTagSymbol] = "GeneratorFunction";
              }
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
          };

          // Within the body of any async function, `await x` is transformed to
          // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
          // `hasOwn.call(value, "__await")` to determine if the yielded value is
          // meant to be awaited.
          runtime.awrap = function (arg) {
            return { __await: arg };
          };

          function AsyncIterator(generator) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;
                if (value &&
                  typeof value === "object" &&
                  hasOwn.call(value, "__await")) {
                  return Promise.resolve(value.__await).then(function (value) {
                    invoke("next", value, resolve, reject);
                  }, function (err) {
                    invoke("throw", err, resolve, reject);
                  });
                }

                return Promise.resolve(value).then(function (unwrapped) {
                  // When a yielded Promise is resolved, its final value becomes
                  // the .value of the Promise<{value,done}> result for the
                  // current iteration. If the Promise is rejected, however, the
                  // result for this iteration will be rejected with the same
                  // reason. Note that rejections of yielded Promises are not
                  // thrown back into the generator function, as is the case
                  // when an awaited Promise is rejected. This difference in
                  // behavior between yield and await is important, because it
                  // allows the consumer to decide what to do with the yielded
                  // rejection (swallow it and continue, manually .throw it back
                  // into the generator, abandon iteration, whatever). With
                  // await, by contrast, there is no opportunity to examine the
                  // rejection reason outside the generator function, so the
                  // only option is to throw it from the await expression, and
                  // let the generator function handle the exception.
                  result.value = unwrapped;
                  resolve(result);
                }, reject);
              }
            }

            var previousPromise;

            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new Promise(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return previousPromise =
                // If enqueue has been called before, then we want to wait until
                // all previous Promises have been resolved before calling invoke,
                // so that results are always delivered in the correct order. If
                // enqueue has not been called before, then it is important to
                // call invoke immediately, without waiting on a callback to fire,
                // so that the async generator function has the opportunity to do
                // any necessary setup in a predictable way. This predictability
                // is why the Promise constructor synchronously invokes its
                // executor callback, and why async functions synchronously
                // execute code before the first await. Since we implement simple
                // async functions in terms of async generators, it is especially
                // important to get this right, even though it requires care.
                previousPromise ? previousPromise.then(
                  callInvokeWithMethodAndArg,
                  // Avoid propagating failures to Promises returned by later
                  // invocations of the iterator.
                  callInvokeWithMethodAndArg
                ) : callInvokeWithMethodAndArg();
            }

            // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
            this._invoke = enqueue;
          }

          defineIteratorMethods(AsyncIterator.prototype);
          AsyncIterator.prototype[asyncIteratorSymbol] = function () {
            return this;
          };
          runtime.AsyncIterator = AsyncIterator;

          // Note that simple async functions are implemented on top of
          // AsyncIterator objects; they just return a Promise for the value of
          // the final result produced by the iterator.
          runtime.async = function (innerFn, outerFn, self, tryLocsList) {
            var iter = new AsyncIterator(
              wrap(innerFn, outerFn, self, tryLocsList)
            );

            return runtime.isGeneratorFunction(outerFn)
              ? iter // If outerFn is a generator, return the full iterator.
              : iter.next().then(function (result) {
                return result.done ? result.value : iter.next();
              });
          };

          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;

            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }

              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                }

                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
              }

              context.method = method;
              context.arg = arg;

              while (true) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }

                if (context.method === "next") {
                  // Setting context._sent for legacy support of Babel's
                  // function.sent implementation.
                  context.sent = context._sent = context.arg;

                } else if (context.method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }

                  context.dispatchException(context.arg);

                } else if (context.method === "return") {
                  context.abrupt("return", context.arg);
                }

                state = GenStateExecuting;

                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                  // If an exception is thrown from innerFn, we leave state ===
                  // GenStateExecuting and loop back for another invocation.
                  state = context.done
                    ? GenStateCompleted
                    : GenStateSuspendedYield;

                  if (record.arg === ContinueSentinel) {
                    continue;
                  }

                  return {
                    value: record.arg,
                    done: context.done
                  };

                } else if (record.type === "throw") {
                  state = GenStateCompleted;
                  // Dispatch the exception by looping back around to the
                  // context.dispatchException(context.arg) call above.
                  context.method = "throw";
                  context.arg = record.arg;
                }
              }
            };
          }

          // Call delegate.iterator[context.method](context.arg) and handle the
          // result, either by returning a { value, done } result from the
          // delegate iterator, or by modifying context.method and context.arg,
          // setting context.delegate to null, and returning the ContinueSentinel.
          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined) {
              // A .throw or .return when the delegate iterator has no .throw
              // method always terminates the yield* loop.
              context.delegate = null;

              if (context.method === "throw") {
                if (delegate.iterator.return) {
                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  context.method = "return";
                  context.arg = undefined;
                  maybeInvokeDelegate(delegate, context);

                  if (context.method === "throw") {
                    // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                  }
                }

                context.method = "throw";
                context.arg = new TypeError(
                  "The iterator does not provide a 'throw' method");
              }

              return ContinueSentinel;
            }

            var record = tryCatch(method, delegate.iterator, context.arg);

            if (record.type === "throw") {
              context.method = "throw";
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }

            var info = record.arg;

            if (!info) {
              context.method = "throw";
              context.arg = new TypeError("iterator result is not an object");
              context.delegate = null;
              return ContinueSentinel;
            }

            if (info.done) {
              // Assign the result of the finished delegate to the temporary
              // variable specified by delegate.resultName (see delegateYield).
              context[delegate.resultName] = info.value;

              // Resume execution at the desired location (see delegateYield).
              context.next = delegate.nextLoc;

              // If context.method was "throw" but the delegate handled the
              // exception, let the outer generator proceed normally. If
              // context.method was "next", forget context.arg since it has been
              // "consumed" by the delegate iterator. If context.method was
              // "return", allow the original .return call to continue in the
              // outer generator.
              if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
              }

            } else {
              // Re-yield the result returned by the delegate method.
              return info;
            }

            // The delegate iterator is finished, so forget it and continue with
            // the outer generator.
            context.delegate = null;
            return ContinueSentinel;
          }

          // Define Generator.prototype.{next,throw,return} in terms of the
          // unified ._invoke helper method.
          defineIteratorMethods(Gp);

          Gp[toStringTagSymbol] = "Generator";

          // A Generator should always return itself as the iterator object when the
          // @@iterator function is called on it. Some browsers' implementations of the
          // iterator prototype chain incorrectly implement this, causing the Generator
          // object to not be returned from this call. This ensures that doesn't happen.
          // See https://github.com/facebook/regenerator/issues/274 for more details.
          Gp[iteratorSymbol] = function () {
            return this;
          };

          Gp.toString = function () {
            return "[object Generator]";
          };

          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };

            if (1 in locs) {
              entry.catchLoc = locs[1];
            }

            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }

            this.tryEntries.push(entry);
          }

          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }

          function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [{ tryLoc: "root" }];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }

          runtime.keys = function (object) {
            var keys = [];
            for (var key in object) {
              keys.push(key);
            }
            keys.reverse();

            // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
            return function next() {
              while (keys.length) {
                var key = keys.pop();
                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              }

              // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.
              next.done = true;
              return next;
            };
          };

          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }

              if (typeof iterable.next === "function") {
                return iterable;
              }

              if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }

                  next.value = undefined;
                  next.done = true;

                  return next;
                };

                return next.next = next;
              }
            }

            // Return an iterator with no values.
            return { next: doneResult };
          }
          runtime.values = values;

          function doneResult() {
            return { value: undefined, done: true };
          }

          Context.prototype = {
            constructor: Context,

            reset: function (skipTempReset) {
              this.prev = 0;
              this.next = 0;
              // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.
              this.sent = this._sent = undefined;
              this.done = false;
              this.delegate = null;

              this.method = "next";
              this.arg = undefined;

              this.tryEntries.forEach(resetTryEntry);

              if (!skipTempReset) {
                for (var name in this) {
                  // Not sure about the optimal order of these conditions:
                  if (name.charAt(0) === "t" &&
                    hasOwn.call(this, name) &&
                    !isNaN(+name.slice(1))) {
                    this[name] = undefined;
                  }
                }
              }
            },

            stop: function () {
              this.done = true;

              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;
              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }

              return this.rval;
            },

            dispatchException: function (exception) {
              if (this.done) {
                throw exception;
              }

              var context = this;
              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;

                if (caught) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  context.method = "next";
                  context.arg = undefined;
                }

                return !!caught;
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;

                if (entry.tryLoc === "root") {
                  // Exception thrown outside of any try block that could handle
                  // it, so set the completion value of the entire function to
                  // throw the exception.
                  return handle("end");
                }

                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");

                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }

                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }

                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }

                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },

            abrupt: function (type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, "finallyLoc") &&
                  this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }

              if (finallyEntry &&
                (type === "break" ||
                  type === "continue") &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc) {
                // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
              }

              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;

              if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }

              return this.complete(record);
            },

            complete: function (record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }

              if (record.type === "break" ||
                record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }

              return ContinueSentinel;
            },

            finish: function (finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },

            "catch": function (tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }

              // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.
              throw new Error("illegal catch attempt");
            },

            delegateYield: function (iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
              };

              if (this.method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined;
              }

              return ContinueSentinel;
            }
          };
        })(
          // In sloppy mode, unbound `this` refers to the global object, fallback to
          // Function constructor if we're in global strict mode. That is sadly a form
          // of indirect eval which violates Content Security Policy.
          (function () { return this })() || Function("return this")()
        );


        /***/
      }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function (global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
          /* global window */


          var root;

          if (typeof self !== 'undefined') {
            root = self;
          } else if (typeof window !== 'undefined') {
            root = window;
          } else if (typeof global !== 'undefined') {
            root = global;
          } else if (true) {
            root = module;
          } else { }

          var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

        /***/
      }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return symbolObservablePonyfill; });
        function symbolObservablePonyfill(root) {
          var result;
          var Symbol = root.Symbol;

          if (typeof Symbol === 'function') {
            if (Symbol.observable) {
              result = Symbol.observable;
            } else {
              result = Symbol('observable');
              Symbol.observable = result;
            }
          } else {
            result = '@@observable';
          }

          return result;
        };


        /***/
      }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function (module, exports) {

        var g;

        // This works in non-strict mode
        g = (function () {
          return this;
        })();

        try {
          // This works if eval is allowed (see CSP)
          g = g || Function("return this")() || (1, eval)("this");
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === "object") g = window;
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;


        /***/
      }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function (module, exports) {

        module.exports = function (originalModule) {
          if (!originalModule.webpackPolyfill) {
            var module = Object.create(originalModule);
            // module.parent = undefined by default
            if (!module.children) module.children = [];
            Object.defineProperty(module, "loaded", {
              enumerable: true,
              get: function () {
                return module.l;
              }
            });
            Object.defineProperty(module, "id", {
              enumerable: true,
              get: function () {
                return module.i;
              }
            });
            Object.defineProperty(module, "exports", {
              enumerable: true
            });
            module.webpackPolyfill = 1;
          }
          return module;
        };


        /***/
      }),

/***/ "./src/main/webapp/components/DxCarousel/js/carousel-config.js":
/*!*********************************************************************!*\
  !*** ./src/main/webapp/components/DxCarousel/js/carousel-config.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.getCarouselConfig = exports.getLabels = undefined;

        var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

        var _defineProperty3 = _interopRequireDefault(_defineProperty2);

        var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

        var _assign2 = _interopRequireDefault(_assign);

        var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

        var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        /**
         * Get all a11y labels for interactive elements in carousel
         *
         * @param {HTMLElement} element - HTML Element that contains all carousel data attributes
         * @throws Error when no element is passed
         * @returns {Object} Object of labels
         */
        var getLabels = exports.getLabels = function getLabels(element) {
          if (!element) {
            throw new Error('getLabels: expected to receive an element as parameter 1');
          }

          var getAttribute = function getAttribute(labelSuffix) {
            return element.querySelector('.DxCarousel__controls').getAttribute('data-label-' + labelSuffix) || element.querySelector('.DxCarousel__carousel > .DxCarousel__' + labelSuffix).getAttribute('data-label-' + labelSuffix);
          };
          var labelSuffixes = ['next', 'previous', 'slideChanged', 'play', 'pause', 'pip', 'paused', 'playing'];
          var labels = _assign2.default.apply(Object, [{}].concat((0, _toConsumableArray3.default)(labelSuffixes.map(function (label) {
            return (0, _defineProperty3.default)({}, label, getAttribute(label));
          }))));
          return labels;
        };

        /**
         * Gets all configured options for carousel from markup (allows for authoring and/or BE to configure carousel)
         *
         * @param {HTMLElement} element - HTML Element that contains all carousel data attributes
         * @throws Error when no element is passed
         * @returns {Object} Object of configured data-attributes in key:value pair
         */
        var getCarouselConfig = exports.getCarouselConfig = function getCarouselConfig(element) {
          if (!element) {
            throw new Error('getCarouselConfig: expected to receive an element as parameter 1');
          }

          var carousel = element.querySelector('.DxCarousel__carousel');

          var total = carousel.getAttribute('data-total') || '0';
          var randomized = carousel.getAttribute('data-randomized') || 'false';

          var carouselControls = element.querySelector('.DxCarousel__controls');

          var alignment = carouselControls.getAttribute('data-alignment') || 'left';
          var pagination = carouselControls.getAttribute('data-pagination') || 'dots';
          var loop = carouselControls.getAttribute('data-loop') || 'true';
          var autoplay = carouselControls.getAttribute('data-autoplay') || 'false';
          var autoplayDuration = carouselControls.getAttribute('data-autoplay-duration') || '4000';
          var defaultSelected = carouselControls.getAttribute('data-default-selected') || '0';

          return {
            total: total,
            alignment: alignment,
            pagination: pagination,
            randomized: randomized,
            loop: loop,
            autoplay: autoplay,
            autoplayDuration: autoplayDuration,
            defaultSelected: defaultSelected
          };
        };

        /***/
      }),

/***/ "./src/main/webapp/components/DxCarousel/js/carousel-helpers.js":
/*!**********************************************************************!*\
  !*** ./src/main/webapp/components/DxCarousel/js/carousel-helpers.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.destroyDxCarousel = exports.initDxA11ySwiperHelpers = exports.initSwiper = exports.initPagination = undefined;

        var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

        var _typeof3 = _interopRequireDefault(_typeof2);

        var _swiper = __webpack_require__(/*! swiper */ "swiper");

        var _swiper2 = _interopRequireDefault(_swiper);

        var _utils = __webpack_require__(/*! ../../../resources/dev/js/utils */ "./src/main/webapp/resources/dev/js/utils/index.js");

        var _carouselConfig = __webpack_require__(/*! ./carousel-config */ "./src/main/webapp/components/DxCarousel/js/carousel-config.js");

        var _Pagination = __webpack_require__(/*! ../../Pagination/es6/Pagination */ "./src/main/webapp/components/Pagination/es6/Pagination.js");

        var _Pagination2 = _interopRequireDefault(_Pagination);

        var _swiper3 = __webpack_require__(/*! ../../../resources/dev/js/utils/swiper */ "./src/main/webapp/resources/dev/js/utils/swiper.js");

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        /**
         * Create instance of Pagination to be used within the carousel
         *
         * @param {HTMLElement} carouselElement - HTML Element that contains all carousel markup
         * @throws throws an error for missing paramenters
         * @throws throws an error for missing makrup in {carouselElement}
         * @returns {Pagination} Pagination instance
         */
        var initPagination = exports.initPagination = function initPagination(carouselElement) {
          if (!carouselElement) {
            throw new Error('initPagination: expected to receive an element as parameter 1');
          }

          var paginationControls = carouselElement.querySelector('.DxCarousel__controls');
          if (!(0, _utils.checkDefined)(paginationControls)) {
            throw new Error('initPagination expected an element with the class "DxCarousel__controls"');
          }

          var _getCarouselConfig = (0, _carouselConfig.getCarouselConfig)(carouselElement),
            total = _getCarouselConfig.total,
            autoplay = _getCarouselConfig.autoplay,
            autoplayDuration = _getCarouselConfig.autoplayDuration,
            loop = _getCarouselConfig.loop,
            defaultSelected = _getCarouselConfig.defaultSelected;

          var labels = (0, _carouselConfig.getLabels)(carouselElement);
          var paginationOptions = {
            labels: labels,
            numberOfPips: parseInt(total, 10),
            autoplay: {
              enabled: autoplay === 'true' || false,
              duration: parseInt(autoplayDuration, 10)
            },
            loop: loop === 'true' || false,
            defaultSelected: parseInt(defaultSelected, 10)
          };

          return new _Pagination2.default(paginationControls, paginationOptions);
        };

        /**
         * Create Swiper instance to be used for carousel
         *
         * @param {HTMLElement} swiperElement - HTML Element that is used specifically to wrap Swiper (usually has swiper-container class)
         * @param {Object.<string, *>} swiperOptions - Object of options that are accepted by Swiper
         * @throws an error for missing parameters and swiperOptions not being an Object
         * @returns {Swiper} Swiper instance
         */
        var initSwiper = exports.initSwiper = function initSwiper(swiperElement, swiperOptions) {
          if (!(0, _utils.checkDefined)(swiperElement)) {
            throw new Error('initSwiper: expected to receive an element as parameter 1');
          }

          if (!(0, _utils.checkDefined)(swiperOptions) || (typeof swiperOptions === 'undefined' ? 'undefined' : (0, _typeof3.default)(swiperOptions)) !== 'object') {
            throw new Error('initSwiper: expected to receive an object of swiper options as parameter 2');
          }

          return new _swiper2.default(swiperElement, swiperOptions);
        };

        /**
         * @typedef A11yOptions
         * @type {Object}
         * @property {Pagination} paginationObject instance
         * @property {Object.<string, string>} labels object of labels needed for interactive elements
         */
        /**
         * Setup our custom configuration of Swiper helpers and link pagination
         *
         * @param {Swiper} swiper - An instance of Swiper to be configured
         * @param {...A11yOptions} a11yConfig - Object containing Pagination instance and labels
         * @throws an error for missing parameters 1 & 2
         * @throws an error for parameter 1 not being an instance of Swiper
         * @throws an error for parameter 2 not being an object
         */
        var initDxA11ySwiperHelpers = exports.initDxA11ySwiperHelpers = function initDxA11ySwiperHelpers(swiper, a11yConfig) {
          if (!(0, _utils.checkDefined)(swiper) || !(swiper instanceof _swiper2.default)) {
            throw new Error('initDxA11ySwiperHelpers: expected to receive an instance of Swiper as parameter 1');
          }

          if (!(0, _utils.checkDefined)(a11yConfig) || (typeof a11yConfig === 'undefined' ? 'undefined' : (0, _typeof3.default)(a11yConfig)) !== 'object') {
            throw new Error('initDxA11ySwiperHelpers: expected to receive an object of config settings as parameter 2');
          }

          (0, _swiper3.swiperA11yHelper)(swiper, a11yConfig);
        };

        var destroyDxCarousel = exports.destroyDxCarousel = function destroyDxCarousel(swiper) {
          (0, _swiper3.swiperA11yDestroy)(swiper);
        };

        /***/
      }),

/***/ "./src/main/webapp/components/DxCarousel/js/classes/DxCarousel-main.js":
/*!*****************************************************************************!*\
  !*** ./src/main/webapp/components/DxCarousel/js/classes/DxCarousel-main.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

        var _regenerator2 = _interopRequireDefault(_regenerator);

        var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

        var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

        var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

        var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

        var _createClass3 = _interopRequireDefault(_createClass2);

        var _store = __webpack_require__(/*! ../store */ "./src/main/webapp/components/DxCarousel/js/store/index.js");

        var _helpers = __webpack_require__(/*! ../helpers */ "./src/main/webapp/components/DxCarousel/js/helpers.js");

        var _actions = __webpack_require__(/*! ../store/actions */ "./src/main/webapp/components/DxCarousel/js/store/actions.js");

        var _utils = __webpack_require__(/*! ../../../../resources/dev/js/utils */ "./src/main/webapp/resources/dev/js/utils/index.js");

        var _carouselConfig2 = __webpack_require__(/*! ../carousel-config */ "./src/main/webapp/components/DxCarousel/js/carousel-config.js");

        var _browserDetection = __webpack_require__(/*! ../../../../resources/dev/js/utils/browserDetection */ "./src/main/webapp/resources/dev/js/utils/browserDetection.js");

        var _carouselHelpers = __webpack_require__(/*! ../carousel-helpers */ "./src/main/webapp/components/DxCarousel/js/carousel-helpers.js");

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        var DxCarousel = function () {
          function DxCarousel(element) {
            var _this = this;

            (0, _classCallCheck3.default)(this, DxCarousel);

            if (!(0, _utils.checkDefined)(element)) {
              throw new Error('DxCarousel expected an element to be passed as parementer 1');
            }

            this._element = element;
            this.isDeviceMobile = (0, _browserDetection.isMobileDevice)();
            this.store = (0, _store.store)('DxCarouselStore-' + this._element.getAttribute('id'));

            if (!this._element.classList.contains('DxCarousel--mobile-override')) {
              this.init();
              return;
            }

            this.isClientAMobileDevice().then(function (returnedValue) {
              if (returnedValue === false) {
                _this.init();
                return;
              }

              var pageElementsToRemove = {
                next: _this._element.querySelector('.DxCarousel__next'),
                prev: _this._element.querySelector('.DxCarousel__previous'),
                pagination: _this._element.querySelector('.DxCarousel__controls'),
                supplimentarySlides: _this._element.querySelectorAll('.swiper-slide:not(:first-child)')
              };

              (0, _helpers.purgeCarouselElements)(pageElementsToRemove);
            });
          }

          (0, _createClass3.default)(DxCarousel, [{
            key: 'isClientAMobileDevice',
            value: function () {
              var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(this.isDeviceMobile !== true)) {
                          _context.next = 2;
                          break;
                        }

                        return _context.abrupt('return', false);

                      case 2:
                        return _context.abrupt('return', !(0, _browserDetection.isTabletDevice)());

                      case 3:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              function isClientAMobileDevice() {
                return _ref.apply(this, arguments);
              }

              return isClientAMobileDevice;
            }()
          }, {
            key: 'init',
            value: function init() {
              this._carousel = null;
              this._pagination = null;
              this._carouselConfig = (0, _carouselConfig2.getCarouselConfig)(this._element);
              var _carouselConfig = this._carouselConfig,
                total = _carouselConfig.total,
                defaultSelected = _carouselConfig.defaultSelected,
                autoplay = _carouselConfig.autoplay,
                loop = _carouselConfig.loop;

              this.autoplay = autoplay;
              this._totalSlides = total;
              this._startSlide = defaultSelected;
              this._loop = loop;
              this._sliderSpeed = 600;
              this._swiperOptions = this.getSwiperOptions();
              this._pagination = (0, _carouselHelpers.initPagination)(this._element);

              var carouselContainer = this._element.querySelector('.DxCarousel__carousel');
              if (!(0, _utils.checkDefined)(carouselContainer)) {
                throw new Error('DxCarousel expected an element with the class "DxCarousel__carousel" to exist as child of this.element');
              }
              this._carousel = (0, _carouselHelpers.initSwiper)(carouselContainer, this._swiperOptions);

              var labels = (0, _carouselConfig2.getLabels)(this._element);
              (0, _carouselHelpers.initDxA11ySwiperHelpers)(this._carousel, { paginationObject: this._pagination, labels: labels });

              this.store.dispatch((0, _actions.setInitialSettings)({ init: true, playingState: JSON.parse(this.autoplay) }));
              this.bindEventListeners();

            }
          }, {
            key: 'bindEventListeners',
            value: function bindEventListeners() {
              var _this2 = this;

              if (!this._pagination || !this._pagination.getElement()) {
                return;
              }
              this._pagination._elem.addEventListener('play', function () {
                _this2.store.dispatch((0, _actions.setPlayingState)(true));
              });

              this._pagination._elem.addEventListener('pause', function () {
                _this2.store.dispatch((0, _actions.setPlayingState)(false));
              });
            }
          }, {
            key: 'getSwiperOptions',
            value: function getSwiperOptions() {
              var accordionWrapper = this._element.closest('.Accordion');
              return {
                autoHeight: false,
                initialSlide: this._startSlide,
                loop: this._loop,
                grabCursor: true,
                speed: this._sliderSpeed,
                pagination: false,
                preloadImages: true,
                updateOnImagesReady: true,
                a11y: true,
                navigation: {
                  prevEl: this._element.querySelector('.DxCarousel__previous'),
                  nextEl: this._element.querySelector('.DxCarousel__next')
                },
                on: {
                  transitionEnd: function transitionEnd() {
                    // if component is in a mobile Accordion, trigger height calculation after transition
                    if (accordionWrapper && accordionWrapper.length) {
                      accordionWrapper.Accordion('calculateNewHeight');
                    }
                  }
                }
              };
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              (0, _carouselHelpers.destroyDxCarousel)(this._carousel);
              var parentElement = this._element.parentNode;
              var nodeClone = this._element.cloneNode(true);
              this._element.remove();
              parentElement.appendChild(nodeClone);
            }
          }]);
          return DxCarousel;
        }();

        exports.default = DxCarousel;

        /***/
      }),

/***/ "./src/main/webapp/components/DxCarousel/js/helpers.js":
/*!*************************************************************!*\
  !*** ./src/main/webapp/components/DxCarousel/js/helpers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _values = __webpack_require__(/*! babel-runtime/core-js/object/values */ "./node_modules/babel-runtime/core-js/object/values.js");

        var _values2 = _interopRequireDefault(_values);

        exports.purgeCarouselElements = purgeCarouselElements;

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function purgeCarouselElements(pageElementsToRemove) {
          (0, _values2.default)(pageElementsToRemove).forEach(function (elems) {
            var elements = Array.isArray(elems) || elems instanceof NodeList ? elems : [elems];

            elements.forEach(function (singleElement) {
              if (singleElement instanceof HTMLElement) {
                singleElement.parentElement.removeChild(singleElement);
              }
            });
          });
        }

        /***/
      }),

/***/ "./src/main/webapp/components/DxCarousel/js/store/actions.js":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/components/DxCarousel/js/store/actions.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var setInitialSettings = exports.setInitialSettings = function setInitialSettings(payload) {
          return { type: 'SET_INITIAL_SETTINGS', payload: payload };
        };

        var setPlayingState = exports.setPlayingState = function setPlayingState(playingState) {
          return { type: 'SET_PLAYING_STATE', playingState: playingState };
        };

        var setInitalisationState = exports.setInitalisationState = function setInitalisationState(initalisationState) {
          return { type: 'SET_INITALISED_STATE', initalisationState: initalisationState };
        };

        /***/
      }),

/***/ "./src/main/webapp/components/DxCarousel/js/store/index.js":
/*!*****************************************************************!*\
  !*** ./src/main/webapp/components/DxCarousel/js/store/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.store = undefined;

        var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

        var _reducers = __webpack_require__(/*! ./reducers */ "./src/main/webapp/components/DxCarousel/js/store/reducers.js");

        var _reducers2 = _interopRequireDefault(_reducers);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        var store = exports.store = function store(storeID) {
          window[storeID] = (0, _redux.createStore)(_reducers2.default);
          return window[storeID];
        };

        /***/
      }),

/***/ "./src/main/webapp/components/DxCarousel/js/store/reducers.js":
/*!********************************************************************!*\
  !*** ./src/main/webapp/components/DxCarousel/js/store/reducers.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

        var _extends3 = _interopRequireDefault(_extends2);

        exports.default = dxCarouselReducers;

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        var initialState = {
          initialised: false,
          playingState: null
        };

        function dxCarouselReducers() {
          var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
          var action = arguments[1];

          switch (action.type) {
            case 'SET_INITIAL_SETTINGS':
              return (0, _extends3.default)({}, state, {
                initialised: action.payload.init,
                playingState: action.payload.playingState
              });
            case 'SET_PLAYING_STATE':
              return (0, _extends3.default)({}, state, {
                playingState: action.playingState
              });
            case 'SET_INITALISED_STATE':
              return (0, _extends3.default)({}, state, {
                initialised: action.initalisationState
              });
            default:
              return state;
          }
        }

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

                panel.setAttribute('tabindex', '0');
                panel.setAttribute('data-index', index);
                panel.setAttribute('id', panelId);
                panel.setAttribute('aria-labelledby', tabId);
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

/***/ "./src/main/webapp/components/HeaderBox/es6/HeaderBox.js":
/*!***************************************************************!*\
  !*** ./src/main/webapp/components/HeaderBox/es6/HeaderBox.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

        var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

        var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

        var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

        var _createClass3 = _interopRequireDefault(_createClass2);

        var _browserDetection = __webpack_require__(/*! ../../../resources/dev/js/utils/browserDetection */ "./src/main/webapp/resources/dev/js/utils/browserDetection.js");

        var _domManipulation = __webpack_require__(/*! ../../../resources/dev/js/utils/domManipulation */ "./src/main/webapp/resources/dev/js/utils/domManipulation.js");

        var _index = __webpack_require__(/*! ../../../resources/dev/js/utils/index */ "./src/main/webapp/resources/dev/js/utils/index.js");

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        var HeaderBox = function () {
          function HeaderBox(element) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { onAtSmallBreakpoint: false };
            (0, _classCallCheck3.default)(this, HeaderBox);

            this.element = element;
            this.$element = $(element);
            this.options = options;

            this.uiSelectors = {
              headerBoxContent: this.element.querySelector('.headerBoxContent'),
              headerBoxWidthElements: [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('.headerBox__tcoPrice, .headingTextMain, .headingTextSub .subtitle, .headingTextSub, .price, .primaryLinkWithStyle, .secondaryLinkContainer, .caveat, .bodyText, .totalCost, .bodyText, .headerBox__slug, .headerBox__heroTitle, .headerBox__title, .headerBox__heroCopy, .headerBox__copy, .headerBox__price'))),
              headingTextMain: this.element.querySelector('.headingTextMain'),
              totalCostElement: this.element.querySelector('.totalCost')
            };

            /**
             * Width of widest element in headerBox
             * @property {number} _widestElementWidth
             */
            this._widestElementWidth = 0;

            /**
             * Bound event for adding / removing
             * @property {event} _resizeBound
             */
            this._resizeBound = null;
            this.init();
          }

          /**
           * Initialises the component
           * @method init
           */

          (0, _createClass3.default)(HeaderBox, [{
            key: 'init',
            value: function init() {
              var _this = this;

              this._checkTotalCostPriceWidth();
              this._checkOnlyHasPrimaryHeading();
              this.initLinks();

              this._resizeBound = this._resizeHeaderBox.bind(this);

              window.addEventListener('load', function () {
                return _this._resizeHeaderBox();
              }); // LRA-23496: Only adjust the size once fully loaded
              window.addEventListener('resize', this._resizeBound);

              this._tcoOrientationCheck();
              window.addEventListener('orientationchange', function () {
                return _this._tcoOrientationCheck();
              });
              window.addEventListener('resize', function () {
                _this.setTelLinksState();
              });
            }
          }, {
            key: 'initLinks',
            value: function initLinks() {
              this.setTelLinksState();
              this.tels.forEach(function (tel) {
                tel.setAttribute('href', tel.getAttribute('href').replace(/ /g, ''));
              });
            }
          }, {
            key: 'setTelLinksState',
            value: function setTelLinksState() {
              this.tels = this.element.querySelectorAll('.tel');

              this.tels.forEach(function (tel) {
                var selector = void 0;
                if ((0, _browserDetection.getBreakpointSize)(false) === 'large') {
                  selector = document.createElement('span');
                  selector.removeAttribute('href');
                } else {
                  selector = document.createElement('a');
                  selector.setAttribute('href', 'tel:' + tel.innerHTML.replace(/ /g, ''));
                }
                selector.classList.add('tel');
                (0, _domManipulation.wrap)(tel, selector);
                (0, _domManipulation.unwrap)(tel);
              });
            }
            /*
             * @method _tcoOrientationChange
             */

          }, {
            key: '_tcoOrientationCheck',
            value: function _tcoOrientationCheck() {
              var totalCost = this.element.querySelector('.headerBox__totalCost');
              if (!totalCost) {
                return;
              }
              var notDesktop = (0, _browserDetection.isBreakpointMedium)() || (0, _browserDetection.isBreakpointSmall)();
              totalCost.classList.remove('landscape');

              if (notDesktop && window.matchMedia('(orientation: landscape)')) {
                totalCost.classList.add('landscape');
              }
            }

            /**
             * Check if there is only a Primary Heading in the headerBox and apply specifc styles
             * @method _checkOnlyHasPrimaryHeading
             */

          }, {
            key: '_checkOnlyHasPrimaryHeading',
            value: function _checkOnlyHasPrimaryHeading() {
              if (this.element.children.length === 1 && this.element.querySelector('.primaryHeading')) {
                this.element.classList.add('onlyHasPrimaryHeading');
              }
            }

            /**
             * Resize the header box based on the longest element when displayed inline.
             * This is to make sure there is no additional gap between the widest element's
             * far right character and the headerBox's standard padding (i.e. no extra whitespace on right)
             *
             * @method _resizeHeaderBoxes
             */

          }, {
            key: '_resizeHeaderBox',
            value: function _resizeHeaderBox() {
              var _this2 = this;

              this._tcoOrientationCheck();
              var isNotSmallBreakpoint = (0, _browserDetection.getBreakpointSize)() !== 'small';

              // Reset width for small breakpoint and for re-measuring at medium and large breakpoints
              this.element.style.width = 'auto';
              this.element.classList.remove('maxWidthOff');

              if (this.options.onAtSmallBreakpoint || isNotSmallBreakpoint) {
                var headerBoxContent = this.uiSelectors.headerBoxContent;


                var styles = window.getComputedStyle(headerBoxContent);
                var elementPadding = parseInt(styles.getPropertyValue('padding-left'), 10) * 2;

                // Get widest element's width
                this._widestElementWidth = 0; // reset
                this.uiSelectors.headerBoxWidthElements.forEach(function (element) {
                  return _this2._getWidestElementWidth(element);
                });

                // Set headerBox to widest element's width and box's padding
                this.element.style.width = this._widestElementWidth + elementPadding + 'px';

                // LRA-9177: account for long (e.g. German) words
                // Check if heading width overflows the box, expand the box accordingly
                if (this.uiSelectors.headingTextMain && (this.uiSelectors.headingTextMain.width() + elementPadding) / 2 > this.element.width()) {
                  this.element.classList.add('maxWidthOff');
                }
              }
            }

            /**
             * Check if element is widest, if so set widestElementWidth accordingly
             * @method _getWidestElementWidth
             * @param {number} index
             * @param {element} item
             */

          }, {
            key: '_getWidestElementWidth',
            value: function _getWidestElementWidth(element) {
              var item = element;
              var isNotInlineable = item.classList.contains('primaryLinkWithStyle') || item.classList.contains('headerBoxDontInline'); // CTAs should be measured as block-level item

              if (!isNotInlineable) {
                item.style.display = 'inline';
              }

              var width = item.offsetWidth + 1; // LRA-9179 Firefox needs extra pixel

              if (!isNotInlineable) {
                item.style.display = '';
              }

              // If longest, set as longestWidth
              this._widestElementWidth = width > this._widestElementWidth ? width : this._widestElementWidth;
            }

            /**
             * Check if the price string is too wide, and apply the class that stacks price on top of other info
             * @method _checkTotalCostPriceWidth
             */

          }, {
            key: '_checkTotalCostPriceWidth',
            value: function _checkTotalCostPriceWidth() {
              var TCO = this.uiSelectors.totalCostElement || [];
              if (TCO.length === 0) {
                return;
              }

              var numberEl = this.element.querySelector('.number') || {};
              var priceText = numberEl.innerHTML || '';
              var currencyEl = this.element.querySelector('.currency') || {};
              var currencyText = currencyEl.innerHTML || '';
              var appendedEl = this.element.querySelector('.appendedFrom') || {};
              var appendedFrom = appendedEl.innerHTML || '';
              var suffixEl = this.element.querySelector('.priceSuffix') || {};
              var suffixFrom = suffixEl.innerHTML || '';
              var caveatEl = this.element.querySelector('.caveatSymbol') || {};
              var caveatFrom = caveatEl.innerHTML || '';

              // Mimic the semantic of actual HeaderBox so we can get applied font size.
              var htmlText = '\n    <div class="headerBox">\n      <div class="fontCost headerBox__tcoPrice">\n      ' + (priceText + currencyText + appendedFrom + suffixFrom + caveatFrom) + '\n      </div>\n    </div>\n    ';

              var priceWidth = (0, _index.measureTextWidth)(htmlText, null);

              if (priceWidth > 160) {
                TCO.classList.remove('headerBoxDontInline');
                TCO.classList.add('stacked');
              }
            }

            /**
             * Remove events (call before destroy)
             * @method removeEvents
             */

          }, {
            key: 'removeEvents',
            value: function removeEvents() {
              window.removeEventListener('resize', this._resizeBound);
            }
          }]);
          return HeaderBox;
        }(); /*!
      * HeaderBox
      * Resize headerBox based on the longest element when displayed inline
      * Copyright 2019: Connect Group. All rights reserved.
      */


        exports.default = HeaderBox;

        /***/
      }),

/***/ "./src/main/webapp/components/HeroSlideTemplate/es6/classes/HeroSlideTemplate-main.js":
/*!********************************************************************************************!*\
  !*** ./src/main/webapp/components/HeroSlideTemplate/es6/classes/HeroSlideTemplate-main.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _values = __webpack_require__(/*! babel-runtime/core-js/object/values */ "./node_modules/babel-runtime/core-js/object/values.js");

        var _values2 = _interopRequireDefault(_values);

        var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

        var _assign2 = _interopRequireDefault(_assign);

        var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

        var _regenerator2 = _interopRequireDefault(_regenerator);

        var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");

        var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

        var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

        var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

        var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

        var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

        var _createClass3 = _interopRequireDefault(_createClass2);

        var _debounce = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");

        var _debounce2 = _interopRequireDefault(_debounce);

        var _HeaderBox = __webpack_require__(/*! ../../../HeaderBox/es6/HeaderBox */ "./src/main/webapp/components/HeaderBox/es6/HeaderBox.js");

        var _HeaderBox2 = _interopRequireDefault(_HeaderBox);

        var _browserDetection = __webpack_require__(/*! ../../../../resources/dev/js/utils/browserDetection */ "./src/main/webapp/resources/dev/js/utils/browserDetection.js");

        var _index = __webpack_require__(/*! ../../../../resources/dev/js/utils/index */ "./src/main/webapp/resources/dev/js/utils/index.js");

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        var HeroSlideTemplate = function () {
          function HeroSlideTemplate(element) {
            var _this = this;

            (0, _classCallCheck3.default)(this, HeroSlideTemplate);

            this.element = element;
            this.swiperInstance = null;
            this.uiSelectors = {
              $video: null,
              tabbedContainer: this.element.closest('.cmp-tabbedContainer'),
              carouselParent: this.element.closest('.DxCarousel__carousel'),
              dxCarouselParent: this.element.closest('.DxCarousel'),
              nonDateAwareSlide: this.element.querySelector('.HeroSlide__content'),
              dateRestrictedWrapper: this.element.querySelector('.HeroSlide__overrides'),
              dateRestrictedContent: this.element.querySelector('.HeroSlide__overrideItem'),
              headerBox: this.element.querySelector(':not(.HeroSlide__overrides) .headerBox'),
              videoPlayer: this.element.querySelector(':not(.HeroSlide__overrides) .VideoPlayer'),
              deepLinkable: this.element.querySelectorAll('.primaryLinkContainer a, .secondaryLinkContainer a')
            };
            this.hasLeaseLayout = this.element.classList.contains('HeroSlide--has-lease-layout');
            this.isFullFrameTemplate = this.element.classList.contains('HeroSlide--full-frame-template');

            if ((0, _index.checkDefined)(this.uiSelectors.carouselParent)) {
              var storeName = 'DxCarouselStore-' + this.uiSelectors.carouselParent.getAttribute('data-id');
              this.store = window[storeName];
              this.applyHeroSlideClass();
              this.applySlideTallerClass();
              this.checkSlideForLeaseClass();
              this.checkSlideForAlternateLayoutClass();
            }

            this.filterDateAwareContent().then(function () {
              _this.toggleCarouselTheme();
              _this.initaliseSlideContent();
              _this.bindTabbedContainerEvents();
              _this.bindSliderBasedEvents();
              _this.bindContentBasedEvents();
              //_this.uiSelectors.nonDateAwareSlide.style.display = 'block';
              _this.setSlideHeight();
            });

            this.setSlideHeight();
          }

          (0, _createClass3.default)(HeroSlideTemplate, [{
            key: 'applyHeroSlideClass',
            value: function applyHeroSlideClass() {
              this.uiSelectors.dxCarouselParent.classList.add('DxCarousel--contains-hero-slide');
            }
          }, {
            key: 'applySlideTallerClass',
            value: function applySlideTallerClass() {
              if (!this.element.classList.contains('HeroSlide--mobile-image-taller')) return;
              this.uiSelectors.dxCarouselParent.classList.add('DxCarousel--contains-hero-slide--taller');
            }
          }, {
            key: 'checkSlideForLeaseClass',
            value: function checkSlideForLeaseClass() {
              if (!this.hasLeaseLayout) return;
              this.uiSelectors.dxCarouselParent.classList.add('DxCarousel--contains-lease-layout');
            }
          }, {
            key: 'checkSlideForAlternateLayoutClass',
            value: function checkSlideForAlternateLayoutClass() {
              if (!this.isFullFrameTemplate) return;
              this.uiSelectors.dxCarouselParent.classList.add('DxCarousel--contains-full-frame-template');
            }
          }, {
            key: 'filterDateAwareContent',
            value: function () {
              var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var targetForRemoval, dateSettings, currentDate, startDateArray, endDateArray, i, _endDateArray, endYear, endMonth, endDay, endHour, endMinutes, _startDateArray, startYear, startMonth, startDay, startHour, startMinutes, slideStartDate, slideEndDate;

                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if ((0, _index.checkDefined)(this.uiSelectors.dateRestrictedContent)) {
                          _context.next = 2;
                          break;
                        }

                        return _context.abrupt('return');

                      case 2:
                        targetForRemoval = this.uiSelectors.dateRestrictedWrapper;
                        dateSettings = JSON.parse(atob(this.uiSelectors.dateRestrictedContent.getAttribute('data-dates')))[0];
                        currentDate = (0, _index.generateCurrentDate)();
                        startDateArray = dateSettings.start.split(',');
                        endDateArray = dateSettings.end.split(',');

                        /* Convert each element of array to integer */

                        for (i = 0; i < startDateArray.length; i += 1) {
                          startDateArray[i] = parseInt(startDateArray[i], 10);
                          endDateArray[i] = parseInt(endDateArray[i], 10);
                        }

                        /* Convert dates to UTC for comparing */
                        _endDateArray = (0, _slicedToArray3.default)(endDateArray, 5), endYear = _endDateArray[0], endMonth = _endDateArray[1], endDay = _endDateArray[2], endHour = _endDateArray[3], endMinutes = _endDateArray[4];
                        _startDateArray = (0, _slicedToArray3.default)(startDateArray, 5), startYear = _startDateArray[0], startMonth = _startDateArray[1], startDay = _startDateArray[2], startHour = _startDateArray[3], startMinutes = _startDateArray[4];
                        slideStartDate = Date.UTC(startYear, startMonth - 1, startDay, startHour, startMinutes);
                        slideEndDate = Date.UTC(endYear, endMonth - 1, endDay, endHour, endMinutes);


                        if (currentDate >= slideStartDate && currentDate < slideEndDate) {
                          targetForRemoval = this.uiSelectors.nonDateAwareSlide;
                        }

                        this.element.removeChild(targetForRemoval);
                        this.rebindSelectorsAfterContentFilter();

                      case 15:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              function filterDateAwareContent() {
                return _ref.apply(this, arguments);
              }

              return filterDateAwareContent;
            }()
          }, {
            key: 'rebindSelectorsAfterContentFilter',
            value: function rebindSelectorsAfterContentFilter() {
              var reboundSelectors = {
                headerBox: this.element.querySelector('.headerBox'),
                videoPlayer: this.element.querySelector('.VideoPlayer'),
                nonDateAwareSlide: this.element.querySelector('.HeroSlide__content')
              };
              this.uiSelectors = (0, _assign2.default)(this.uiSelectors, reboundSelectors);
            }
          }, {
            key: 'initaliseSlideContent',
            value: function initaliseSlideContent() {
              this.initaliseHeaderBox();
              this.initaliseSlideLinks();
              this.initialiseSlideVideo();
            }
          }, {
            key: 'initaliseHeaderBox',
            value: function initaliseHeaderBox() {
              if (!(0, _index.checkDefined)(this.uiSelectors.headerBox)) return;
              this.headerBox = new _HeaderBox2.default(this.uiSelectors.headerBox);
              this.toggleHeaderBoxVisibility();
            }
          }, {
            key: 'initaliseSlideLinks',
            value: function initaliseSlideLinks() {
              $('.ResponsiveLink').ResponsiveLink();
              $('.TargetLinks').TargetLinks('setupListener');

              this.uiSelectors.deepLinkable.forEach(function (singleLink) {
                singleLink.addEventListener('click', function (event) {
                  (0, _index.preventActionOnDeepLink)(event);
                });
              });
            }
          }, {
            key: 'initialiseSlideVideo',
            value: function initialiseSlideVideo() {
              if (!(0, _index.checkDefined)(this.uiSelectors.videoPlayer)) return;
              this.uiSelectors.$video = $(this.uiSelectors.videoPlayer);

              if (this.uiSelectors.$video.length === 0) {
                return;
              }

              if ((0, _browserDetection.isMobileDevice)() && !this.isFullFrameTemplate) {
                this.uiSelectors.$video.remove();
                return;
              }

              var videoOptions = {
                autoplay: true,
                controls: [],
                loop: false,
                muted: true,
                isBackgroundVideo: true,
                clickToPlayPause: false,
                pauseOtherPlayers: false
              };

              if (this.isFullFrameTemplate) {
                videoOptions = {
                  autoplay: false,
                  loop: false,
                  clickToPlayPause: true,
                  iPhoneUseNativeControls: false,
                  iPadUseNativeControls: false,
                  AndroidUseNativeControls: false
                };
              }

              this.uiSelectors.$video.VideoPlayer(videoOptions);
              this.bindVideoEvents();
            }
          }, {
            key: 'bindVideoEvents',
            value: function bindVideoEvents() {
              var _this2 = this;

              if (!this.isFullFrameTemplate) return;

              var videoPlayButton = $(this.uiSelectors.videoPlayer.querySelector('.mejs-overlay-play'));
              this.uiSelectors.$video.on('onPlay', function () {
                videoPlayButton.hide();

                if ((0, _browserDetection.isBreakpointSmall)() || !(0, _index.checkDefined)(_this2.uiSelectors.headerBox)) return;
                _this2.toggleHeaderBoxVisibility(true);
              });

              this.uiSelectors.$video.on('onPause', function () {
                videoPlayButton.show();

                if ((0, _browserDetection.isBreakpointSmall)() || !(0, _index.checkDefined)(_this2.uiSelectors.headerBox)) return;
                _this2.toggleHeaderBoxVisibility();
              });
            }
          }, {
            key: 'bindTabbedContainerEvents',
            value: function bindTabbedContainerEvents() {
              var _this3 = this;

              if (!(0, _index.checkDefined)(this.uiSelectors.tabbedContainer)) return;

              var tabs = this.uiSelectors.tabbedContainer.querySelector('.DxTabs');
              tabs.addEventListener('DxTabs:beforefadein', function () {
                if (!(0, _index.checkDefined)(_this3.uiSelectors.headerBox)) return;
                _this3.headerBox._resizeHeaderBox();
              });
            }
          }, {
            key: 'bindSliderBasedEvents',
            value: function bindSliderBasedEvents() {
              var _this4 = this;

              if (!(0, _index.checkDefined)(this.uiSelectors.carouselParent)) return;
              this.swiperInstance = this.uiSelectors.carouselParent.swiper;

              if (!(0, _index.checkDefined)(this.swiperInstance)) return;
              this.swiperInstance.on('slideChange', function () {
                _this4.toggleHeaderBoxVisibility(true);
              });

              this.swiperInstance.on('transitionStart', function () {
                if (_this4.element.classList.contains('swiper-slide-active')) {
                  _this4.toggleCarouselTheme();
                }
              });

              this.swiperInstance.on('transitionEnd', function () {
                if (_this4.element.classList.contains('swiper-slide-active')) {
                  _this4.toggleHeaderBoxVisibility();
                  _this4.adjustVideoPlayingState(true);
                } else {
                  if (!(0, _index.checkDefined)(_this4.uiSelectors.videoPlayer)) return;
                  _this4.adjustVideoPlayingState(false, true);
                }
              });

              this.store.subscribe(function () {
                if (!_this4.element.classList.contains('swiper-slide-active') && !_this4.isFullFrameTemplate) return;
                _this4.adjustVideoPlayingState(_this4.store.getState().playingState);
              });
            }
          }, {
            key: 'bindContentBasedEvents',
            value: function bindContentBasedEvents() {
              var _this5 = this;

              window.addEventListener('resize', (0, _debounce2.default)(function () {
                _this5.setSlideHeight();
                if (!(0, _index.checkDefined)(_this5.swiperInstance)) return;
                _this5.swiperInstance.update();
              }, 200));

              if (!(0, _index.checkDefined)(this.uiSelectors.videoPlayer)) return;
              this.uiSelectors.$video.on('videoEnded', function () {
                _this5.uiSelectors.$video.VideoPlayer('play');
              });
            }
          }, {
            key: 'toggleCarouselTheme',
            value: function toggleCarouselTheme() {
              if (!(0, _index.checkDefined)(this.uiSelectors.dxCarouselParent)) return;

              if (!(0, _index.checkDefined)(this.uiSelectors.headerBox)) {
                this.uiSelectors.dxCarouselParent.setAttribute('data-background-theme', 'white');
                return;
              }

              if (!this.element.classList.contains('swiper-slide-active')) return;

              var headerBoxTheme = this.uiSelectors.headerBox.getAttribute('data-theme');
              var brandIsJaguar = document.body.getAttribute('data-brand-id') === 'jaguar';
              var slideContainsTCO = this.element.classList.contains('HeroSlide--contains-TCO');
              if (slideContainsTCO) {
                headerBoxTheme = brandIsJaguar ? 'grey' : 'lr-grey';
              }
              this.uiSelectors.dxCarouselParent.setAttribute('data-background-theme', headerBoxTheme);
            }
          }, {
            key: 'toggleHeaderBoxVisibility',
            value: function toggleHeaderBoxVisibility() {
              var slideChanged = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

              if (!(0, _index.checkDefined)(this.uiSelectors.headerBox)) return;
              if (slideChanged) {
                this.uiSelectors.headerBox.classList.remove('visible');
              } else {
                this.uiSelectors.headerBox.classList.add('visible');
              }
            }
          }, {
            key: 'adjustVideoPlayingState',
            value: function adjustVideoPlayingState() {
              var activeSlide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
              var slideChangeEventFired = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

              if (!(0, _index.checkDefined)(this.uiSelectors.videoPlayer)) return;
              if (this.store.getState().playingState && activeSlide) {
                this.uiSelectors.$video.VideoPlayer('play');
                return;
              }
              this.uiSelectors.$video.VideoPlayer('pause');
              if (slideChangeEventFired) {
                this.uiSelectors.$video.VideoPlayer('rewind');
              }
            }
          }, {
            key: 'setSlideHeight',
            value: function setSlideHeight() {
              var newElementHeight = this.isFullFrameTemplate ? this.setFFCSlideHeight() : this.setHeroSlideHeight();
              this.element.style.height = newElementHeight;
            }
          }, {
            key: 'setHeroSlideHeight',
            value: function setHeroSlideHeight() {
              var windowWidth = window.innerWidth;
              var windowHeight = window.innerHeight;

              if (windowWidth < _browserDetection.breakpoints.medium) return null;
              var fullWindowHeight = this.determineFullWindowHeight(windowHeight);

              if (fullWindowHeight > 450) {
                if (windowHeight / windowWidth > 1.25) {
                  fullWindowHeight = windowWidth / 1.55; // 1.55 based off height given to HeroCarousel on iPad Pro in portrait.
                }
              }
              return fullWindowHeight + 'px';
            }
          }, {
            key: 'setFFCSlideHeight',
            value: function setFFCSlideHeight() {
              var windowWidth = window.innerWidth;
              var windowHeight = window.innerHeight;

              if ((0, _browserDetection.isBreakpointSmall)()) return null;
              var elementSizes = {
                textAreaPadding: 264, // The random number taken from the old carousel to ensure the heights match.
                textAreaHeight: this.uiSelectors.headerBox ? this.uiSelectors.headerBox.offsetHeight : 0
              };
              var requiredMinimumHeight = (0, _values2.default)(elementSizes).reduce(function (a, b) {
                return a + b;
              });
              var idealHeight = this.determineFullWindowHeight(windowHeight);

              if (this.uiSelectors.dxCarouselParent) {
                var setMaxHeight = this.uiSelectors.dxCarouselParent.getAttribute('data-tallest-text-height');
                requiredMinimumHeight = setMaxHeight === null || requiredMinimumHeight >= setMaxHeight ? requiredMinimumHeight : setMaxHeight;
                this.uiSelectors.dxCarouselParent.setAttribute('data-tallest-text-height', requiredMinimumHeight);
              }
              // To prevent car being cropped on deep screens, limit component's height, relative to its width
              var maxHeight = windowWidth / 1.45; // 620 is maximum height with screen at 900px before car is cropped
              idealHeight = idealHeight < maxHeight ? idealHeight : maxHeight;
              var newHeight = idealHeight < requiredMinimumHeight ? requiredMinimumHeight : idealHeight;

              return newHeight + 'px';
            }
          }, {
            key: 'determineFullWindowHeight',
            value: function determineFullWindowHeight(windowHeight) {
              var elementTopOffset = !(0, _index.checkDefined)(this.uiSelectors.carouselParent) ? this.element.offsetTop : this.uiSelectors.carouselParent.parentElement.offsetTop;
              var navigationHeight = (0, _index.getStickyNavHeightV2)(elementTopOffset, false);
              return windowHeight - navigationHeight;
            }
          }]);
          return HeroSlideTemplate;
        }();

        exports.default = HeroSlideTemplate;

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

/***/ "./src/main/webapp/components/TabbedContainer/js/TabbedContainer.js":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/components/TabbedContainer/js/TabbedContainer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

        var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

        var _browserDetection = __webpack_require__(/*! ../../../resources/dev/js/utils/browserDetection */ "./src/main/webapp/resources/dev/js/utils/browserDetection.js");

        var _index = __webpack_require__(/*! ../../../resources/dev/js/utils/index */ "./src/main/webapp/resources/dev/js/utils/index.js");

        var _DxTabs = __webpack_require__(/*! ../../DxTabs/es6/DxTabs */ "./src/main/webapp/components/DxTabs/es6/DxTabs.js");

        var _DxTabs2 = _interopRequireDefault(_DxTabs);

        var _DxCarouselMain = __webpack_require__(/*! ../../DxCarousel/js/classes/DxCarousel-main */ "./src/main/webapp/components/DxCarousel/js/classes/DxCarousel-main.js");

        var _DxCarouselMain2 = _interopRequireDefault(_DxCarouselMain);

        var _HeroSlideTemplateMain = __webpack_require__(/*! ../../HeroSlideTemplate/es6//classes/HeroSlideTemplate-main */ "./src/main/webapp/components/HeroSlideTemplate/es6/classes/HeroSlideTemplate-main.js");

        var _HeroSlideTemplateMain2 = _interopRequireDefault(_HeroSlideTemplateMain);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        /**
         *
         * A container holding other components with a tabbed navigation
         * Imports global DxTabs component to handle tab switching/styling
         *
         * LRDX - TabbedContainer
         * @module LRDX.Components.TabbedContainer
         */

        /*!
         * TabbedContainer
         * Copyright 2019: Connect Group. All rights reserved.
         */

        (function ($, window) {
          var TabbedContainer = {
            _defaults: {},
            _total: 0,
            _selectedTab: null,
            _selectedIndex: 0,
            _dxTabs: null,
            destroyed: null,

            init: function init() {
              var _this = this;

              this._total = parseInt(this.$element.data('total'), 10);
              this.initDxTabs();
              var throttleResize = (0, _index.throttle)(this._resizeComponent.bind(this), 250, this);
              window.addEventListener('resize', function () {
                return throttleResize(_this.element);
              });
              this._resizeComponent();
              this.DxCarousel = null;
              this.HeroSlideTemplate = null;
              this._nonJqueryComponents = ['DxCarousel', 'HeroSlideTemplate'];

              this._setUpYouTubeGalleryAssets();
            },

            _setUpYouTubeGalleryAssets() {
              var _this4 = this;
              var tabId = $(_this4.$element)[0].id;

              let videos = $(`#${tabId} .videoCustom`);              
              let imagePresentOrNot = $(`#${tabId} .videoCustom`).find('img').attr('src');
              if (imagePresentOrNot == undefined || imagePresentOrNot == "") {
                var elm = $(`#${tabId} .videoCustom`),
                  conts = elm.contents(),
                  le = conts.length,
                  ifr = null;

                for (var i = 0; i < le; i++) {
                  if (conts[i].nodeType == 8) ifr = conts[i].textContent;
                }
                if (ifr) {
                  var spanElement = $(ifr);                  
                  spanElement[0].allow = "autoplay";
                  spanElement[0].src = spanElement[0].src + '?autoplay=1&background=1&muted=1';
                  $(spanElement[0]).addClass('youtube-iframe'+tabId);
                  elm.addClass("player").html(spanElement);
                  elm.off("click");
                }
              }
              videos.on("click", function () {
                var elm = $(this),
                  conts = elm.contents(),
                  le = conts.length,
                  ifr = null;

                for (var i = 0; i < le; i++) {
                  if (conts[i].nodeType == 8) ifr = conts[i].textContent;
                }

                if (ifr) {
                  var spanElement = $(ifr);
                  spanElement[0].allow = "autoplay";
                  spanElement[0].src = spanElement[0].src + '?autoplay=1&background=1&muted=1';
                  $(spanElement[0]).addClass('youtube-iframe'+tabId);
                  elm.addClass("player").html(spanElement);
                  elm.off("click");
                }

              });
              if (this.$element.find('.YouTubeGalleryAsset').length) {
                this.$element.find('.YouTubeGalleryAsset').each((s, el) => {
                  $(el).find('.YouTubePlayer').YouTubePlayer('destroy');
                  $(el).find('.YouTubePlayer').YouTubePlayer({
                    playerVars: { controls: 1 },
                    inFullFrameCarousel: true,
                    expandToWidthOnly: true
                  });

                  // Mask to capture slider events without Youtube being an event-hog
                  $(el).append('<div class="youTubePlayerFFCMask"/>');
                  $(el).parent().append('<div class="mediaOverlay mediaOverlayVideo visible"><div class="mediaOverlayIcon"/></div>');
                  $(el).parents('.cmp-genericItem').addClass('cmp-genericItem--withYouTubeGalleryAsset');
                });
              }
              
            },

            initDxTabs: function initDxTabs() {
              var _this2 = this;
              console.log(this.$element.parent().height());
              
              console.log(this.$element.height());

              this._dxTabsElement = this.$element.get(0).querySelector('.DxTabs');
              this._dxTabsElement.addEventListener('DxTabs:init', function () {
                return _this2.$element.trigger('containerInit');
              }, false);
              this._dxTabsElement.addEventListener('DxTabs:fadeout', function (event) {
                return _this2._destroyPreviousTab(event.detail);
              }, false);
              this._dxTabsElement.addEventListener('DxTabs:beforefadein', function (event) {
                return _this2._initializeSelectedTab(event.detail);
              }, false);
              this._dxTabsElement.addEventListener('DxTabs:resized', function () {
                return _this2._positionTabs();
              }, false);
              this._dxTabsElement.addEventListener('DxTabs:singletab', function (event) {
                return _this2._initializeSelectedTab(event.detail);
              }, false);

              this._dxTabs = new _DxTabs2.default(this._dxTabsElement, { initialTab: this._selectedIndex });
              this._positionTabs();
            },
            _positionTabs: function _positionTabs() {
              
              if (!(0, _browserDetection.isBreakpointMedium)() && !(0, _browserDetection.isBreakpointSmall)()) {
                this._dxTabsElement.style.top = '';
                this.$element.css('margin-top', '');
                return;
              }

              var tablist = this._dxTabsElement.querySelector('[role="tablist"]');
              var tablistPadTop = parseFloat(window.getComputedStyle(tablist).getPropertyValue('padding-top'));
              var tab = this._dxTabsElement.querySelector('[role="tablist"] [role="tab"]');
              var tabHeight = parseFloat(window.getComputedStyle(tab).getPropertyValue('height'));

              this._dxTabsElement.style.top = '-' + (tabHeight + tablistPadTop) + 'px';
              // this.$element.css('margin-top', tabHeight);
            },
            _initializeSelectedTab: function _initializeSelectedTab(payload) {
              var _this4 = this;
              var tabId = $(_this4.$element)[0].id;
              var maxHeight = Math.max.apply(null, $(`#${tabId} .cmp-tabs__tabpanel`).map(function ()
              {
                  return $(this).height();
              }).get());
              this.$element.parent().height(maxHeight);

              var _this3 = this;

              this._selectedTab = payload.selectedPanel;

              var componentType = this._selectedTab.getAttribute('data-component');
              var componentElement = [].concat((0, _toConsumableArray3.default)(this._selectedTab.children))[0];
              var isComponentNonJqueryBased = this._nonJqueryComponents.includes(componentType);

              if (!isComponentNonJqueryBased) {
                if (!$()[componentType]) {
                  return;
                }
              }

              this.$element.trigger('tabChanged');

              if (isComponentNonJqueryBased) {
                if (componentType === 'DxCarousel') {
                  this.DxCarousel = new _DxCarouselMain2.default(componentElement);
                  var HeroSlides = componentElement.querySelectorAll('.HeroSlide');

                  Array.prototype.forEach.call(HeroSlides, function (el) {
                    return new _HeroSlideTemplateMain2.default(el);
                  });
                }

                if (componentType === 'HeroSlideTemplate') {
                  this.HeroSlideTemplate = new _HeroSlideTemplateMain2.default(componentElement);
                }
              } else {
                $(componentElement)[componentType]();
              }

              var classes = this.$element.attr('class').split(/\s+/);
              for (var i = 0, len = classes.length; i < len; i += 1) {
                if (classes[i].indexOf('active_') > -1) {
                  this.$element.removeClass(classes[i]);
                }
              }
              this.$element.addClass('active_' + componentType);
              this._activeTab = componentType;

              if (!(0, _browserDetection.isBreakpointMedium)() && !(0, _browserDetection.isBreakpointSmall)() && !this.destroyed) {
                setTimeout(function () {
                  return _this3.$element.height($(_this3._selectedTab).height());
                }, 100);
              } else {
                this.$element.height('');
              }
            },
            _destroyPreviousTab: function _destroyPreviousTab(payload) {
              var _this4 = this;
              var tabId = $(_this4.$element)[0].id;
              if ($(payload.previousPanel).find('.videoCustom').length) {
                $(`.youtube-iframe${tabId}`).each(function (index) {
                  $(this).attr('src', $(this).attr('src'));
                  return false;
                });
              }
              
              var componentElement = [].concat((0, _toConsumableArray3.default)(payload.previousPanel.children))[0];
              var componentType = payload.previousPanel.getAttribute('data-component');

             

              if (componentType === 'DxCarousel') {
                this.DxCarousel.destroy();
                return;
              }

              if (componentType === 'HeroSlideTemplate') return;

              // $(componentElement)[componentType]('destroy');
            },
            _resizeComponent: function _resizeComponent() {
              var _this4 = this;
              var tabId = $(_this4.$element)[0].id;
              var maxHeight = Math.max.apply(null, $(`#${tabId} .cmp-tabs__tabpanel`).map(function ()
              {
                  return $(this).height();
              }).get());
              this.$element.parent().height(maxHeight);
              

              var isMobile = (0, _browserDetection.isBreakpointSmall)();
              var isTablet = (0, _browserDetection.isBreakpointMedium)();
              var isDesktop = !isMobile && !isTablet;
              if (this._selectedTab) {
                if (isDesktop && !this.destroyed) {
                  setTimeout(function () {


                    _this4.$element.height($(_this4._selectedTab).height());
                  }, 50);
                } else {
                  this.$element.height('');
                }
              }
            },
            adjustTabbedContainerHeight: function adjustTabbedContainerHeight() {
              if (this._selectedTab) {
                // adding youtube to FFC causes it to behave differently and breaks the sizing, this is a temporary fix until FFC is refactored
                var ffcException = this._selectedTab.getAttribute('data-component') === 'FullFrameCarousel' && this._selectedTab.querySelector('.FullFrameCarousel').classList.contains('youtubepresent');

                if (ffcException && !(0, _browserDetection.isBreakpointSmall)() && !this.destroyed) {
                  var tabHeight = $(this._selectedTab).height();
                  if (this.previousTabHeight && tabHeight === this.previousTabHeight) {
                    return;
                  }
                  this.$element.height($(this._selectedTab).height());
                  this.previousTabHeight = tabHeight;
                } else if (!ffcException && !(0, _browserDetection.isBreakpointSmall)() && !(0, _browserDetection.isBreakpointMedium)() && !this.destroyed) {
                  this.$element.height($(this._selectedTab).height());
                } else {
                  this.$element.height('');
                }
              }
            },
            destroy: function destroy() {
              var _this5 = this;

              this.destroyed = true;
              var panels = this._dxTabs.DxTabs('getPanels');
              panels.forEach(function (panel) {
                var element = panel;
                element.style.display = 'block';
                element.style.opacity = 1;
                _this5._initializeSelectedTab({ selectedPanel: element }, true);
                _this5.$element.css('height', 'auto');
              });
              this._selectedTab = null;
              this._selectedIndex = 0;
            }
          };

          jQuery.createComponent('TabbedContainer', TabbedContainer);
        })(jQuery, window); /* global jQuery */


        $('.cmp-tabbedContainer').TabbedContainer();


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
          small: 740,
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

              if (location.parents('.cmp-tabbedContainer').length) {
                var $container = location.closest('.cmp-tabbedContainer');
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
          var isInsideTabbedContainer = !!el.parents('.cmp-tabbedContainer').not('[data-total="1"]').length;

          if (isInsideTabbedContainer) {
            return el.parents('.cmp-tabbedContainer');
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

          if (window.appReadyEvent.initiated) {
            appReadyTimer.add(time);
          } else {
            window.appReadyEvent.timeout += time;
          }
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
