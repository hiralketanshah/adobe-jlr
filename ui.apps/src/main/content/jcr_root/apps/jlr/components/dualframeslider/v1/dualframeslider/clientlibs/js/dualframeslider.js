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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/webapp/components/DualFrameSlider/js/DualFrameSlider.js");
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

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

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

/***/ "./src/main/webapp/components/DualFrameSlider/js/DualFrameSlider.js":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/components/DualFrameSlider/js/DualFrameSlider.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

        var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

        var _keys2 = _interopRequireDefault(_keys);

        var _DxRangeSlider = __webpack_require__(/*! ../../DxRangeSlider/es6/DxRangeSlider */ "./src/main/webapp/components/DxRangeSlider/es6/DxRangeSlider.js");

        var _DxRangeSlider2 = _interopRequireDefault(_DxRangeSlider);

        var _browserDetection = __webpack_require__(/*! ../../../resources/dev/js/utils/browserDetection */ "./src/main/webapp/resources/dev/js/utils/browserDetection.js");

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        /* global site, SpriteSpin */

        (function ($, window) {
          var DualFrameSlider = {
            frames: [],
            loadedFrames: [],
            multiFrameIsLoading: true,
            spriteSpinApi: {},
            currentState: 'desktop',
            $spriteSpinElement: null,
            spritespinFramesInstance: '.spritespin-instance',
            spriteSpinData: false,
            frameCount: 0,
            isDualFrame: false,
            MultiFrameTimeout: null,
            frameState: {
              position: 0,
              direction: 'forward'
            },
            uiSelectors: {
              overlay: '.overlay',
              xRaySlider: '.xRaySlider',
              sliderRight: '.Slider__right',
              dualFrameBaseImage: '.beforeImage',
              dualFrameRevealImage: '.afterImage',
              MultiFrameSlider: '.MultiFrameSlider',
              mobileFramesViewer: '.mobileSliderFrame',
              desktopFramesViewer: '.desktopSliderFrame',
              ariaNotification: '.cmp-dualFrameSlider__notifications'
            },
            breakpoints: {
              desktop: window.matchMedia('(min-width: 900px)'),
              desktopSmall: window.matchMedia('(max-width: 1100px) and (min-width: 900px)'),
              tablet: window.matchMedia('(max-width: 900px) and (min-width: 740px)'),
              mobile: window.matchMedia('(max-width: 740px)')
            },

            init: function init() {
              var _this = this;
              this._loadImageFrames();
              this._setBreakpointState();
              this._setImageDimensions();
              this._bindMediaQueryListeners();
              this._loadFramesBasedOnScreenSize();

              if (this.frames.length > 2) {
                // Determine which version of the slider to load based on the number of images.
                this._multiFrame_setTouchState();
                this._multiFrame_setInitialFrameTarget();
                this._multiFrame_configSpriteSpin(); // Add SpriteSpin custom modules. Method is only run once.
                this._multiFrame_InitSpriteSpin(); // Init the SpriteSpin plugin (method can be run after destroying SpriteSpin instance)

                window.richsponsiveImage(); // make responsive

                this._multiFrameBindResizeEvent();
                this.ui('xRaySlider').remove(); // remove x-ray slider
              } else {
                console.log(this.frames.length)
                this.isDualFrame = true; // Dualframe Slider as more than two images

                this.ui('overlay').remove(); // overlay not needed for Dual Frame
                this.ui('MultiFrameSlider').remove();
                this._setImagesDualImageVersion(this.frames[0], this.frames[1]);

                // boot component when images have loaded
                this.ui('dualFrameRevealImage').one('load', function () {
                  _this._bindTransitionEndEvent();
                  _this._dualFrameBindResizeEvent();
                  _this._dualFrame__ComparisonClipping();
                });
              }
              this._initaliseA11YSettings();
              this._initialiseDxRangeSlider();
            },
            _loadImageFrames: function _loadImageFrames() {

              this.loadedFrames = { desktop: SpriteSpin.sourceArray(this.$element.attr('data-frames') + '{frame}.' + this.$element.attr('data-imgformat'), { frame: [1, this.$element.attr('data-length')], digits: 4 } ), desktopSmall: SpriteSpin.sourceArray(this.$element.attr('data-frames') + '{frame}.' + this.$element.attr('data-imgformat'), { frame: [1, this.$element.attr('data-length')], digits: 4 }) };
              //console.log(this.loadedFrames);
            },
            _setBreakpointState: function _setBreakpointState(e) {
              var breakpoints = this.breakpoints;

              this.currentState = 'desktop';

              if (breakpoints.desktopSmall.matches) {
                this.currentState = 'desktopSmall';
              }
              if (breakpoints.tablet.matches) {
                this.currentState = 'tablet';
              }
              if (breakpoints.mobile.matches) {
                this.currentState = 'mobile';
              }

              if (e) {
                this._rebuildViewersOnResize();
              } // Only reset the frames if the screen size has changed past a breakpoint.
            },
            _setImageDimensions: function _setImageDimensions() {
              if (this.currentState === 'desktop' || this.currentState === 'tablet') {
                this.imgHeight = 946;
                this.imgWidth = 1700;
              } else {
                this.imgHeight = 960;
                this.imgWidth = 1110;
              }
            },
            _bindMediaQueryListeners: function _bindMediaQueryListeners() {
              var _this2 = this;

              (0, _keys2.default)(this.breakpoints).forEach(function (key) {
                if (Object.prototype.hasOwnProperty.call(_this2.breakpoints, key)) {
                  _this2.breakpoints[key].addListener(_this2._setBreakpointState.bind(_this2));
                }
              });
            },
            _loadFramesBasedOnScreenSize: function _loadFramesBasedOnScreenSize() {
              this.frames = this.loadedFrames.desktop;

              if (this.currentState === 'desktopSmall' || this.currentState === 'mobile') {
                this.frames = this.loadedFrames.desktopSmall;
              }
              this.frameCount = this.frames.length - 1;
            },
            _rebuildViewersOnResize: function _rebuildViewersOnResize() {
              this._loadFramesBasedOnScreenSize();

              if (this.isDualFrame) {
                this._setImagesDualImageVersion(this.frames[0], this.frames[1]);
              } else {
                this.multiFrameIsLoading = true;
                this.ui('overlay').fadeIn(400);
                this._setImageDimensions();

                if (this.currentState === 'mobile' || this.currentState === 'tablet') {
                  var previousTargetFrames = $(this.spritespinFramesInstance, this.$element);

                  // Switching between mobile/non-mobile
                  // Destroy + reinit SpriteSpin
                  previousTargetFrames.spritespin('destroy').empty().removeClass(this.spritespinFramesInstance.replace('.', ''));

                  this.$spriteSpinElement = this.ui('mobileFramesViewer');
                } else {
                  this.$spriteSpinElement = this.ui('desktopFramesViewer');

                }
                this._multiFrame_InitSpriteSpin(true);
              }
            },
            _setImagesDualImageVersion: function _setImagesDualImageVersion(baseImage, revealImage) {
              this.ui('dualFrameBaseImage').attr('src', baseImage);
              this.ui('dualFrameRevealImage').attr('src', revealImage);
            },
            _multiFrame_setTouchState: function _multiFrame_setTouchState() {
              this.touchState = $('html').hasClass('touchCapability') ? 'touch' : 'notouch';
            },
            _multiFrame_setInitialFrameTarget: function _multiFrame_setInitialFrameTarget() {
              this.$spriteSpinElement = this.ui('desktopFramesViewer');

              if (this.currentState === 'mobile' || this.currentState === 'tablet') {
                this.$spriteSpinElement = this.ui('mobileFramesViewer');
              }
            },
            _multiFrame_configSpriteSpin: function _multiFrame_configSpriteSpin() {
              /*
                * Register the SpriteSpin noBehavior module (loaded once), to prevent clicking/dragging action.
                * Used to prevent SpriteSpin capturing vertical scroll on mobile. Slider interatction only.
              */
              if (!SpriteSpin.mods.noBehavior) {
                SpriteSpin.registerModule('noBehavior', {});
              }
            },
            _multiFrame_InitSpriteSpin: function _multiFrame_InitSpriteSpin(resize) {
              var _this3 = this;

              var MultiFrameSliderWidth = this.ui('MultiFrameSlider').width();
              var spriteSpinStartFrame = resize ? this.frameState.position : 0;

              // this.frames = SpriteSpin.sourceArray('https://gb.landrover.preview.dev.jlr-dev.com/Images/tcm295-302210_{frame}.jpg', { frame: [1, 70] });
              this.$spriteSpinElement.spritespin({

                source: this.frames,
                frame: spriteSpinStartFrame,
                width: MultiFrameSliderWidth,
                height: MultiFrameSliderWidth * this._multiFrame_HeightWidthRatio(),
                animate: false,
                frameTime: 40,
                behavior: 'noBehavior',
                // Canvas doesn't scale down well (image quality) so we use images on mobile
                // except Windows Mobile which performs better with canvas
                renderer: this.touchState === 'touch' && !(0, _browserDetection.isWindowsPhone)() ? 'image' : 'canvas',
                preloadCount: this.frameCount,
                onLoad: function onLoad() {
                  _this3.multiFrameIsLoading = false;

                  _this3._bindTransitionEndEvent();
                  clearTimeout(_this3.MultiFrameTimeout);

                  _this3.MultiFrameTimeout = setTimeout(function () {
                    _this3.ui('overlay').fadeOut(400);
                  }, 400);
                }
              });

              this.spriteSpinApi = this.$spriteSpinElement.spritespin('api'); // Set API object
            },
            _multiFrame_HeightWidthRatio: function _multiFrame_HeightWidthRatio() {
              console.log(this.imgHeight, this.imgWidth)
              return this.imgHeight / this.imgWidth;
            },
            _bindTransitionEndEvent: function _bindTransitionEndEvent() {
              var _this4 = this;

              this.$element.addClass('frames-loaded');
              this.ui('sliderRight').one('transitionend', function () {
                _this4.$element.addClass('transition-finished');
              });
            },
            _multiFrameBindResizeEvent: function _multiFrameBindResizeEvent() {
              var _this5 = this;

              $(window).smartresize(function () {
                var MultiFrameSliderWidth = _this5.ui('MultiFrameSlider').width();

                _this5.$spriteSpinElement.spritespin({
                  width: MultiFrameSliderWidth,
                  height: MultiFrameSliderWidth * _this5._multiFrame_HeightWidthRatio()
                });
              });
            },
            _dualFrame__ComparisonClipping: function _dualFrame__ComparisonClipping() {
              var sliderPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;

              var revealImageWidth = this.ui('dualFrameRevealImage').width();
              var revealImageHeight = this.ui('dualFrameRevealImage').height();

              // Calculate the clip value based on the slide progress percent and the image width.
              var position = Math.round(sliderPosition * revealImageWidth / 100); // Working but not tied to the slider handle

              this.ui('dualFrameRevealImage').css('clip', 'rect(0, ' + position + 'px, ' + revealImageHeight + 'px, 0)');
            },
            _dualFrameBindResizeEvent: function _dualFrameBindResizeEvent() {
              var _this6 = this;

              // deliberately not debounced as the clip jerks on resize
              window.addEventListener('resize', function () {
                _this6._dualFrame__ComparisonClipping(Math.ceil(_this6._dxRangeSlider.get()));
              });
            },
            _initaliseA11YSettings: function _initaliseA11YSettings() {
              var whichAriaLabel = this.isDualFrame ? 'data-dual-view-aria-label' : 'data-multi-view-aria-label';
              this.a11yLabels = {
                elementAriaLabel: this.$element.attr(whichAriaLabel),
                alertLabel: this.$element.attr('data-aria-alert'),
                sliderDecrease: this.$element.attr('data-label-decrease-slider'),
                sliderIncrease: this.$element.attr('data-label-increase-slider')
              };

              this.$element.attr('aria-label', this.a11yLabels.elementAriaLabel);
            },
            _initialiseDxRangeSlider: function _initialiseDxRangeSlider() {
              var _this7 = this;

              var slider = this.element.querySelector('.DxRangeSlider');
              var options = {
                start: this.isDualFrame ? 50 : 0,
                step: 1,
                sliderType: 'image',
                range: this.isDualFrame ? { min: 0, max: 100 } : { min: 0, max: this.frameCount },
                direction: site.rtl && !this.isDualFrame ? 'rtl' : 'ltr',
                labels: {
                  decrement: [this.a11yLabels.sliderDecrease],
                  increment: [this.a11yLabels.sliderIncrease]
                }

              };
              var dxRangeSlider = new _DxRangeSlider2.default(slider, options);
              this._dxRangeSlider = dxRangeSlider.getSlider();

              this._dxRangeSlider.on('update', function (position) {
                var frame = Math.ceil(position[0]);

                if (_this7.isDualFrame) {
                  _this7._dualFrame__ComparisonClipping(frame);
                } else {
                  if (_this7.multiFrameIsLoading === false) {
                    _this7.spriteSpinApi.updateFrame(frame);
                  }
                  _this7.frameState.position = frame;
                }
                let framePercentage = Math.round(_this7.frameState.position / 7 * 100);
                //$('.cmp-dualFrameSlider__notifications').html(framePercentage);
                _this7.ui('ariaNotification').text(_this7.a11yLabels.alertLabel.replace('[]', framePercentage));
              });

              this._dxRangeSlider.on('end', function (position) {
                _this7.ui('ariaNotification').text(_this7.a11yLabels.alertLabel.replace('[]', Math.ceil(position) + '%'));
              });
            }
          };
          jQuery.createComponent('DualFrameSlider', DualFrameSlider);

          $('.cmp-dualFrameSlider').DualFrameSlider();
        })(jQuery, window, document);

        /***/
      }),

/***/ "./src/main/webapp/components/DxRangeSlider/es6/DxRangeSlider.js":
/*!***********************************************************************!*\
  !*** ./src/main/webapp/components/DxRangeSlider/es6/DxRangeSlider.js ***!
  \***********************************************************************/
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

        var _domManipulation = __webpack_require__(/*! ../../../resources/dev/js/utils/domManipulation */ "./src/main/webapp/resources/dev/js/utils/domManipulation.js");

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        var DxRangeSlider = function () {
          function DxRangeSlider(element, options) {
            (0, _classCallCheck3.default)(this, DxRangeSlider);

            this.element = element;
            this.slider = null;
            this.customConnectNamespace = 'DxRangeSlider-custom-connects';
            this.dataNameSpace = 'data-dxrangeslider-';
            this.dataConnectIndex = this.dataNameSpace + 'index';
            this.dataIsInitialised = this.dataNameSpace + 'init';
            var smallHandles = options.start.length > 1;
            var customConnectSpacing = smallHandles ? 14 : 25;

            this.options = (0, _assign2.default)({}, DxRangeSlider.defaults, { customConnectSpacing: customConnectSpacing, smallHandles: smallHandles }, options);
            this.createSlider();
          }

          (0, _createClass3.default)(DxRangeSlider, [{
            key: 'updateOptions',
            value: function updateOptions(options) {
              this.options = (0, _assign2.default)(this.options, options);
            }
          }, {
            key: 'createStartArray',
            value: function createStartArray() {
              var start = this.options.start;

              return Array.isArray(start) ? start : [start];
            }
          }, {
            key: 'createSlider',
            value: function createSlider() {
              if (this.isInitialised()) {
                return;
              }
              this.options.start = this.createStartArray();
              this.createCustomConnects();
              this.addCustomClasses();
              this.initSlider();
              this.createCustomControls();
              this.addCustomConnectEvents();
            }
          }, {
            key: 'addCustomClasses',
            value: function addCustomClasses() {
              var _DxRangeSlider$classe = DxRangeSlider.classes,
                modifierClass = _DxRangeSlider$classe.modifierClass,
                smallHandleClass = _DxRangeSlider$classe.smallHandleClass;

              this.element.classList.add('' + modifierClass + this.options.direction);
              this.element.classList.add('' + modifierClass + this.options.theme);
              this.element.classList.add('' + modifierClass + this.options.sliderType);

              if (this.options.smallHandles) {
                this.element.classList.add('' + modifierClass + smallHandleClass);
              }
            }
          }, {
            key: 'initSlider',
            value: function initSlider() {
              this.slider = noUiSlider.create(this.element, this.options);
              var handles = [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('.noUi-touch-area')));
              handles.forEach(function (handle) {
                // noUiSlider prevents clearing focusStyles on mousedown - this adds it back in
                handle.addEventListener('mousedown', function () {
                  if ($ && $.fn.FocusSwitcher) {
                    $('body').FocusSwitcher('removeFocusClass');
                  }
                });
              });
              this.setInitStatus('true');
            }
          }, {
            key: 'destroySlider',
            value: function destroySlider() {
              var _DxRangeSlider$classe2 = DxRangeSlider.classes,
                modifierClass = _DxRangeSlider$classe2.modifierClass,
                smallHandleClass = _DxRangeSlider$classe2.smallHandleClass,
                customConnectClass = _DxRangeSlider$classe2.customConnectClass,
                handleControlClass = _DxRangeSlider$classe2.handleControlClass;


              this.element.classList.remove(smallHandleClass);
              this.element.classList.remove('' + modifierClass + this.options.direction);
              this.element.classList.remove('' + modifierClass + this.options.theme);
              this.element.classList.remove('' + modifierClass + this.options.sliderType);

              this.slider.off('.' + this.customConnectNamespace);
              var connects = this.element.querySelectorAll('.' + customConnectClass);
              connects.forEach(function (connect) {
                return connect.parentNode.removeChild(connect);
              });

              var controls = this.element.querySelectorAll('.' + handleControlClass);
              controls.forEach(function (control) {
                return control.parentNode.removeChild(control);
              });

              this.slider.destroy(); // call noUiSlider destroy method
              this.setInitStatus(null);
            }
          }, {
            key: 'isInitialised',
            value: function isInitialised() {
              return this.element.getAttribute(this.dataIsInitialised);
            }
          }, {
            key: 'setInitStatus',
            value: function setInitStatus(status) {
              this.element.setAttribute(this.dataIsInitialised, status ? true : '');
            }
          }, {
            key: 'createCustomConnects',
            value: function createCustomConnects() {
              var _this = this;

              var customConnectClass = DxRangeSlider.classes.customConnectClass;

              var createConnect = function createConnect(index) {
                var element = document.createElement('div');
                element.classList.add(customConnectClass);
                if (index === 0) {
                  element.classList.add(customConnectClass + '--first');
                }
                if (index === _this.options.start.length) {
                  element.classList.add(customConnectClass + '--last');
                }
                element.setAttribute(_this.dataConnectIndex, index);
                return element;
              };
              this.element.appendChild(createConnect(0));
              this.options.start.forEach(function (handle, index) {
                return _this.element.appendChild(createConnect(index + 1));
              });
            }
          }, {
            key: 'addCustomConnectEvents',
            value: function addCustomConnectEvents() {
              var _this2 = this;

              var alignment = this.options.direction === 'ltr' ? 'left' : 'right';
              var connectors = [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('[' + this.dataConnectIndex + ']')));

              this.slider.on('update.' + this.customConnectNamespace, function () {
                var positions = arguments.length <= 4 ? undefined : arguments[4];
                connectors.forEach(function (element, index) {
                  var connector = element;
                  var isFirst = index === 0;
                  var isLast = !connectors[index + 1];
                  if (isFirst) {
                    connector.style.width = 'calc(' + positions[0] + '% - ' + _this2.options.customConnectSpacing + 'px)';
                    connector.style[alignment] = '0px';
                    return;
                  }
                  if (isLast) {
                    connector.style.width = 'calc(100% - ' + positions[index - 1] + '% - ' + _this2.options.customConnectSpacing + 'px)';
                    connector.style[alignment] = 'calc(' + positions[index - 1] + '% + ' + _this2.options.customConnectSpacing + 'px)';
                    return;
                  }
                  var doubleSpacing = _this2.options.customConnectSpacing * 2;
                  connector.style.width = 'calc(' + positions[index] + '% - ' + positions[index - 1] + '% - ' + doubleSpacing + 'px)';
                  connector.style[alignment] = 'calc(' + positions[index - 1] + '% + ' + _this2.options.customConnectSpacing + 'px)';
                });
              });
            }
          }, {
            key: 'createCustomControls',
            value: function createCustomControls() {
              var _this3 = this;

              var createControl = function createControl(str, modifier) {
                var handleControlClass = DxRangeSlider.classes.handleControlClass;

                var element = document.createElement('button');
                element.classList.add(handleControlClass);
                element.classList.add('' + handleControlClass + modifier);
                element.innerHTML = str;
                return element;
              };

              var handleWrapper = this.getHandlesWrapper();
              this.getHandles().forEach(function (handle, index) {
                var labels = _this3.options.labels;

                var decrementElement = createControl(labels.decrement[index], '--decrement' + index);
                var incrementElement = createControl(labels.increment[index], '--increment' + index);
                var controlButtons = { decrementElement: decrementElement, incrementElement: incrementElement };

                (0, _domManipulation.insertBefore)(handleWrapper, decrementElement);
                (0, _domManipulation.insertAfter)(handleWrapper, incrementElement);

                _this3.setInitialButtonStateA11Y(controlButtons);

                decrementElement.addEventListener('click', function (ev) {
                  ev.preventDefault();
                  _this3.handleDecrement(index, controlButtons);
                });
                incrementElement.addEventListener('click', function (ev) {
                  ev.preventDefault();
                  _this3.handleIncrement(index, controlButtons);
                });
              });
            }
          }, {
            key: 'setInitialButtonStateA11Y',
            value: function setInitialButtonStateA11Y(controlButtons) {
              if (this.options.start[0] === this.options.range.min) {
                this.constructor.toggleDisabledStateA11y(controlButtons.decrementElement);
              } else if (this.options.start[0] === this.options.range.max) {
                this.constructor.toggleDisabledStateA11y(controlButtons.decrementElement);
              }
            }
          }, {
            key: 'handleIncrement',
            value: function handleIncrement(handleIndex, controlButtons) {
              var steps = this.slider.steps();
              var step = steps && steps[handleIndex][1];
              if (!step) {
                this.constructor.toggleDisabledStateA11y(controlButtons.incrementElement);
                return;
              }
              var value = this.getHandleValue(handleIndex);
              this.slider.setHandle(handleIndex, value + step);
              this.constructor.toggleDisabledStateA11y(controlButtons.decrementElement, true);
            }
          }, {
            key: 'handleDecrement',
            value: function handleDecrement(handleIndex, controlButtons) {
              var steps = this.slider.steps();
              var step = steps && steps[handleIndex][0];
              if (!step) {
                this.constructor.toggleDisabledStateA11y(controlButtons.decrementElement);
                return;
              }
              var value = this.getHandleValue(handleIndex);
              this.slider.setHandle(handleIndex, value - step);
              this.constructor.toggleDisabledStateA11y(controlButtons.incrementElement, true);
            }
          }, {
            key: 'getHandleValue',
            value: function getHandleValue(index) {
              var values = this.slider.get();
              return typeof values === 'string' ? Number(values) : Number(values[index]);
            }
          }, {
            key: 'getHandlesWrapper',
            value: function getHandlesWrapper() {
              return this.element.querySelector('.noUi-base');
            }
          }, {
            key: 'getHandles',
            value: function getHandles() {
              return [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('.noUi-handle')));
            }
          }, {
            key: 'getSlider',
            value: function getSlider() {
              return this.slider;
            }

            // utility method to allow noUiSlider to control drag dealer

          }, {
            key: 'connectHorizontalDragDealer',
            value: function connectHorizontalDragDealer(dragDealer) {
              var _this4 = this;

              var bindEvent = function bindEvent(event) {
                return _this4.slider.on(event, function (values) {
                  return dragDealer.setValue(values[0] / 100, 0, false);
                });
              };
              ['update', 'start', 'end'].forEach(function (event) {
                return bindEvent(event);
              });
            }
          }], [{
            key: 'toggleDisabledStateA11y',
            value: function toggleDisabledStateA11y(button) {
              var removeDisabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

              if (removeDisabled === true) {
                button.removeAttribute('disabled');
              } else {
                button.setAttribute('disabled', 'disabled');
              }
            }
          }]);
          return DxRangeSlider;
        }(); /* global noUiSlider */

        DxRangeSlider.defaults = {
          theme: 'light', // light || dark
          direction: 'ltr', // ltr || rtl
          sliderType: 'range', // range || image
          labels: {
            decrement: ['Decrease slider 1', 'Decrease slider 2'],
            increment: ['Increase slider 1', 'Increase slider 2']
          }
        };
        DxRangeSlider.classes = {
          modifierClass: 'DxRangeSlider--',
          customConnectClass: 'DxRangeSlider__custom-connect',
          handleControlClass: 'DxRangeSlider__handle-control',
          smallHandleClass: 'small-handles'
        };
        exports.default = DxRangeSlider;

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
      })

    /******/
  });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb21wb25lbnRzL0R1YWxGcmFtZVNsaWRlci9qcy9EdWFsRnJhbWVTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudHMvRHhSYW5nZVNsaWRlci9lczYvRHhSYW5nZVNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvcmVzb3VyY2VzL2Rldi9qcy91dGlscy9icm93c2VyRGV0ZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2RvbU1hbmlwdWxhdGlvbi5qcyJdLCJuYW1lcyI6WyIkIiwid2luZG93IiwiRHVhbEZyYW1lU2xpZGVyIiwiZnJhbWVzIiwibG9hZGVkRnJhbWVzIiwibXVsdGlGcmFtZUlzTG9hZGluZyIsInNwcml0ZVNwaW5BcGkiLCJjdXJyZW50U3RhdGUiLCIkc3ByaXRlU3BpbkVsZW1lbnQiLCJzcHJpdGVzcGluRnJhbWVzSW5zdGFuY2UiLCJzcHJpdGVTcGluRGF0YSIsImZyYW1lQ291bnQiLCJpc0R1YWxGcmFtZSIsIk11bHRpRnJhbWVUaW1lb3V0IiwiZnJhbWVTdGF0ZSIsInBvc2l0aW9uIiwiZGlyZWN0aW9uIiwidWlTZWxlY3RvcnMiLCJvdmVybGF5IiwieFJheVNsaWRlciIsInNsaWRlclJpZ2h0IiwiZHVhbEZyYW1lQmFzZUltYWdlIiwiZHVhbEZyYW1lUmV2ZWFsSW1hZ2UiLCJNdWx0aUZyYW1lU2xpZGVyIiwibW9iaWxlRnJhbWVzVmlld2VyIiwiZGVza3RvcEZyYW1lc1ZpZXdlciIsImFyaWFOb3RpZmljYXRpb24iLCJicmVha3BvaW50cyIsImRlc2t0b3AiLCJtYXRjaE1lZGlhIiwiZGVza3RvcFNtYWxsIiwidGFibGV0IiwibW9iaWxlIiwiaW5pdCIsIl9sb2FkSW1hZ2VGcmFtZXMiLCJfc2V0QnJlYWtwb2ludFN0YXRlIiwiX3NldEltYWdlRGltZW5zaW9ucyIsIl9iaW5kTWVkaWFRdWVyeUxpc3RlbmVycyIsIl9sb2FkRnJhbWVzQmFzZWRPblNjcmVlblNpemUiLCJsZW5ndGgiLCJfbXVsdGlGcmFtZV9zZXRUb3VjaFN0YXRlIiwiX211bHRpRnJhbWVfc2V0SW5pdGlhbEZyYW1lVGFyZ2V0IiwiX211bHRpRnJhbWVfY29uZmlnU3ByaXRlU3BpbiIsIl9tdWx0aUZyYW1lX0luaXRTcHJpdGVTcGluIiwicmljaHNwb25zaXZlSW1hZ2UiLCJfbXVsdGlGcmFtZUJpbmRSZXNpemVFdmVudCIsInVpIiwicmVtb3ZlIiwiX3NldEltYWdlc0R1YWxJbWFnZVZlcnNpb24iLCJvbmUiLCJfYmluZFRyYW5zaXRpb25FbmRFdmVudCIsIl9kdWFsRnJhbWVCaW5kUmVzaXplRXZlbnQiLCJfZHVhbEZyYW1lX19Db21wYXJpc29uQ2xpcHBpbmciLCJfaW5pdGFsaXNlQTExWVNldHRpbmdzIiwiX2luaXRpYWxpc2VEeFJhbmdlU2xpZGVyIiwiSlNPTiIsInBhcnNlIiwiYXRvYiIsIiRlbGVtZW50IiwiYXR0ciIsImUiLCJtYXRjaGVzIiwiX3JlYnVpbGRWaWV3ZXJzT25SZXNpemUiLCJpbWdIZWlnaHQiLCJpbWdXaWR0aCIsImZvckVhY2giLCJrZXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhZGRMaXN0ZW5lciIsImJpbmQiLCJmYWRlSW4iLCJwcmV2aW91c1RhcmdldEZyYW1lcyIsInNwcml0ZXNwaW4iLCJlbXB0eSIsInJlbW92ZUNsYXNzIiwicmVwbGFjZSIsImJhc2VJbWFnZSIsInJldmVhbEltYWdlIiwidG91Y2hTdGF0ZSIsImhhc0NsYXNzIiwiU3ByaXRlU3BpbiIsIm1vZHMiLCJub0JlaGF2aW9yIiwicmVnaXN0ZXJNb2R1bGUiLCJyZXNpemUiLCJNdWx0aUZyYW1lU2xpZGVyV2lkdGgiLCJ3aWR0aCIsInNwcml0ZVNwaW5TdGFydEZyYW1lIiwic291cmNlIiwiZnJhbWUiLCJoZWlnaHQiLCJfbXVsdGlGcmFtZV9IZWlnaHRXaWR0aFJhdGlvIiwiYW5pbWF0ZSIsImZyYW1lVGltZSIsImJlaGF2aW9yIiwicmVuZGVyZXIiLCJwcmVsb2FkQ291bnQiLCJvbkxvYWQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsImFkZENsYXNzIiwic21hcnRyZXNpemUiLCJzbGlkZXJQb3NpdGlvbiIsInJldmVhbEltYWdlV2lkdGgiLCJyZXZlYWxJbWFnZUhlaWdodCIsIk1hdGgiLCJyb3VuZCIsImNzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjZWlsIiwiX2R4UmFuZ2VTbGlkZXIiLCJnZXQiLCJ3aGljaEFyaWFMYWJlbCIsImExMXlMYWJlbHMiLCJlbGVtZW50QXJpYUxhYmVsIiwiYWxlcnRMYWJlbCIsInNsaWRlckRlY3JlYXNlIiwic2xpZGVySW5jcmVhc2UiLCJzbGlkZXIiLCJlbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIm9wdGlvbnMiLCJzdGFydCIsInN0ZXAiLCJzbGlkZXJUeXBlIiwicmFuZ2UiLCJtaW4iLCJtYXgiLCJzaXRlIiwicnRsIiwibGFiZWxzIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50IiwiZHhSYW5nZVNsaWRlciIsIkR4UmFuZ2VTbGlkZXIiLCJnZXRTbGlkZXIiLCJvbiIsInVwZGF0ZUZyYW1lIiwidGV4dCIsImpRdWVyeSIsImNyZWF0ZUNvbXBvbmVudCIsImRvY3VtZW50IiwiY3VzdG9tQ29ubmVjdE5hbWVzcGFjZSIsImRhdGFOYW1lU3BhY2UiLCJkYXRhQ29ubmVjdEluZGV4IiwiZGF0YUlzSW5pdGlhbGlzZWQiLCJzbWFsbEhhbmRsZXMiLCJjdXN0b21Db25uZWN0U3BhY2luZyIsImRlZmF1bHRzIiwiY3JlYXRlU2xpZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwiaXNJbml0aWFsaXNlZCIsImNyZWF0ZVN0YXJ0QXJyYXkiLCJjcmVhdGVDdXN0b21Db25uZWN0cyIsImFkZEN1c3RvbUNsYXNzZXMiLCJpbml0U2xpZGVyIiwiY3JlYXRlQ3VzdG9tQ29udHJvbHMiLCJhZGRDdXN0b21Db25uZWN0RXZlbnRzIiwiY2xhc3NlcyIsIm1vZGlmaWVyQ2xhc3MiLCJzbWFsbEhhbmRsZUNsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwidGhlbWUiLCJub1VpU2xpZGVyIiwiY3JlYXRlIiwiaGFuZGxlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoYW5kbGUiLCJmbiIsIkZvY3VzU3dpdGNoZXIiLCJzZXRJbml0U3RhdHVzIiwiY3VzdG9tQ29ubmVjdENsYXNzIiwiaGFuZGxlQ29udHJvbENsYXNzIiwib2ZmIiwiY29ubmVjdHMiLCJjb25uZWN0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY29udHJvbHMiLCJjb250cm9sIiwiZGVzdHJveSIsImdldEF0dHJpYnV0ZSIsInN0YXR1cyIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUNvbm5lY3QiLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImFsaWdubWVudCIsImNvbm5lY3RvcnMiLCJwb3NpdGlvbnMiLCJjb25uZWN0b3IiLCJpc0ZpcnN0IiwiaXNMYXN0Iiwic3R5bGUiLCJkb3VibGVTcGFjaW5nIiwiY3JlYXRlQ29udHJvbCIsInN0ciIsIm1vZGlmaWVyIiwiaW5uZXJIVE1MIiwiaGFuZGxlV3JhcHBlciIsImdldEhhbmRsZXNXcmFwcGVyIiwiZ2V0SGFuZGxlcyIsImRlY3JlbWVudEVsZW1lbnQiLCJpbmNyZW1lbnRFbGVtZW50IiwiY29udHJvbEJ1dHRvbnMiLCJzZXRJbml0aWFsQnV0dG9uU3RhdGVBMTFZIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZURlY3JlbWVudCIsImhhbmRsZUluY3JlbWVudCIsImNvbnN0cnVjdG9yIiwidG9nZ2xlRGlzYWJsZWRTdGF0ZUExMXkiLCJoYW5kbGVJbmRleCIsInN0ZXBzIiwidmFsdWUiLCJnZXRIYW5kbGVWYWx1ZSIsInNldEhhbmRsZSIsInZhbHVlcyIsIk51bWJlciIsImRyYWdEZWFsZXIiLCJiaW5kRXZlbnQiLCJldmVudCIsInNldFZhbHVlIiwiYnV0dG9uIiwicmVtb3ZlRGlzYWJsZWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzbWFsbCIsIm1lZGl1bSIsIndpZGVyIiwiY3VycmVudCIsImdldERldmljZU9yaWVudGF0aW9uIiwiJHdpbmRvdyIsImdldExhcmdlckJyZWFrcG9pbnQiLCJnZXRCcmVha3BvaW50U2l6ZSIsIm9sZENhbGMiLCJpbm5lcldpZHRoIiwiaXNCcmVha3BvaW50U21hbGwiLCJpc0JyZWFrcG9pbnRNZWRpdW0iLCJpc01vYmlsZURldmljZSIsIkRvY3VtZW50VG91Y2giLCJuYXZpZ2F0b3IiLCJtc01heFRvdWNoUG9pbnRzIiwiaXNOb3RNb2JpbGVEZXZpY2UiLCJpc1RhYmxldERldmljZSIsInRlc3QiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImlzSU9TIiwiaXNOb3RJT1MiLCJpc1dpbmRvd3NQaG9uZSIsImluZGV4T2YiLCJnZXRBbmRyb2lkVmVyc2lvbiIsInVhIiwicGFyc2VGbG9hdCIsInNsaWNlIiwiZ2V0QnJvd3NlclVzZXJBZ2VudCIsImRldGVjdEJyb3dzZXJzIiwiYnJvd3NlcnMiLCJpc0Nocm9tZSIsImlzTXNFZGdlIiwiaXNFeHBsb3JlciIsImlzRmlyZWZveCIsImlzU2FmYXJpIiwiaXNPcGVyYSIsImlzSWUiLCJjb250YWlucyIsImlzSWUxMSIsIkFjdGl2ZVhPYmplY3QiLCJnZXRWaWV3cG9ydFNpemUiLCJjc3NUZXh0IiwiZG9jdW1lbnRFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImRpbXMiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInNjcm9sbFRvRWxlbWVudCIsImNhbGxiYWNrIiwib3B0cyIsImV4dGVuZCIsImFkanVzdG1lbnQiLCJlYXNlIiwiZHVyYXRpb24iLCJjb250YWluZXIiLCJzdG9wIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiaGFzQmlnSW50U3VwcG9ydCIsIkJpZ0ludCIsIndyYXAiLCJlbCIsIndyYXBwZXIiLCJ1bndyYXAiLCJwYXJlbnQiLCJ3cmFwQWxsIiwiZWxlbWVudHMiLCJjcmVhdGVBcnJheSIsIk5vZGVMaXN0IiwiZWxlbWVudHNBcnJheSIsImluc2VydEFmdGVyIiwiYmVmb3JlIiwiYWZ0ZXIiLCJuZXh0U2libGluZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGtCQUFrQixZQUFZLG1CQUFPLENBQUMsaUhBQStCLHNCOzs7Ozs7Ozs7OztBQ0FyRSxrQkFBa0IsWUFBWSxtQkFBTyxDQUFDLHVIQUFrQyxzQjs7Ozs7Ozs7Ozs7QUNBeEUsa0JBQWtCLFlBQVksbUJBQU8sQ0FBQyx5SUFBMkMsc0I7Ozs7Ozs7Ozs7O0FDQWpGLGtCQUFrQixZQUFZLG1CQUFPLENBQUMsbUhBQWdDLHNCOzs7Ozs7Ozs7Ozs7QUNBekQ7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7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VUFBTixDQUFpQmdHLFlBQWpCLENBQThCOEIsTUFBOUIsRUFBc0NDLEtBQXRDLENBQW5CO0FBQUEsQ0FBckIsQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvRHVhbEZyYW1lU2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi93ZWJhcHAvY29tcG9uZW50cy9EdWFsRnJhbWVTbGlkZXIvanMvRHVhbEZyYW1lU2xpZGVyLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4zJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gKCFCVUdHWSAmJiAkbmF0aXZlKSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCJpbXBvcnQgRHhSYW5nZVNsaWRlciBmcm9tICcuLi8uLi9EeFJhbmdlU2xpZGVyL2VzNi9EeFJhbmdlU2xpZGVyJztcbmltcG9ydCB7IGlzV2luZG93c1Bob25lIH0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL2Rldi9qcy91dGlscy9icm93c2VyRGV0ZWN0aW9uJztcblxuXG4vKiBnbG9iYWwgc2l0ZSwgU3ByaXRlU3BpbiAqL1xuXG4oKCQsIHdpbmRvdykgPT4ge1xuICBjb25zdCBEdWFsRnJhbWVTbGlkZXIgPSB7XG4gICAgZnJhbWVzOiBbXSxcbiAgICBsb2FkZWRGcmFtZXM6IFtdLFxuICAgIG11bHRpRnJhbWVJc0xvYWRpbmc6IHRydWUsXG4gICAgc3ByaXRlU3BpbkFwaToge30sXG4gICAgY3VycmVudFN0YXRlOiAnZGVza3RvcCcsXG4gICAgJHNwcml0ZVNwaW5FbGVtZW50OiBudWxsLFxuICAgIHNwcml0ZXNwaW5GcmFtZXNJbnN0YW5jZTogJy5zcHJpdGVzcGluLWluc3RhbmNlJyxcbiAgICBzcHJpdGVTcGluRGF0YTogZmFsc2UsXG4gICAgZnJhbWVDb3VudDogMCxcbiAgICBpc0R1YWxGcmFtZTogZmFsc2UsXG4gICAgTXVsdGlGcmFtZVRpbWVvdXQ6IG51bGwsXG4gICAgZnJhbWVTdGF0ZToge1xuICAgICAgcG9zaXRpb246IDAsXG4gICAgICBkaXJlY3Rpb246ICdmb3J3YXJkJ1xuICAgIH0sXG4gICAgdWlTZWxlY3RvcnM6IHtcbiAgICAgIG92ZXJsYXk6ICcub3ZlcmxheScsXG4gICAgICB4UmF5U2xpZGVyOiAnLnhSYXlTbGlkZXInLFxuICAgICAgc2xpZGVyUmlnaHQ6ICcuU2xpZGVyX19yaWdodCcsXG4gICAgICBkdWFsRnJhbWVCYXNlSW1hZ2U6ICcuYmVmb3JlSW1hZ2UnLFxuICAgICAgZHVhbEZyYW1lUmV2ZWFsSW1hZ2U6ICcuYWZ0ZXJJbWFnZScsXG4gICAgICBNdWx0aUZyYW1lU2xpZGVyOiAnLk11bHRpRnJhbWVTbGlkZXInLFxuICAgICAgbW9iaWxlRnJhbWVzVmlld2VyOiAnLm1vYmlsZVNsaWRlckZyYW1lJyxcbiAgICAgIGRlc2t0b3BGcmFtZXNWaWV3ZXI6ICcuZGVza3RvcFNsaWRlckZyYW1lJyxcbiAgICAgIGFyaWFOb3RpZmljYXRpb246ICcuRHVhbEZyYW1lU2xpZGVyX19ub3RpZmljYXRpb25zJ1xuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIGRlc2t0b3A6IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA5MDBweCknKSxcbiAgICAgIGRlc2t0b3BTbWFsbDogd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDExMDBweCkgYW5kIChtaW4td2lkdGg6IDkwMHB4KScpLFxuICAgICAgdGFibGV0OiB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTAwcHgpIGFuZCAobWluLXdpZHRoOiA3NDBweCknKSxcbiAgICAgIG1vYmlsZTogd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc0MHB4KScpXG4gICAgfSxcblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLl9sb2FkSW1hZ2VGcmFtZXMoKTtcbiAgICAgIHRoaXMuX3NldEJyZWFrcG9pbnRTdGF0ZSgpO1xuICAgICAgdGhpcy5fc2V0SW1hZ2VEaW1lbnNpb25zKCk7XG4gICAgICB0aGlzLl9iaW5kTWVkaWFRdWVyeUxpc3RlbmVycygpO1xuICAgICAgdGhpcy5fbG9hZEZyYW1lc0Jhc2VkT25TY3JlZW5TaXplKCk7XG5cbiAgICAgIGlmICh0aGlzLmZyYW1lcy5sZW5ndGggPiAyKSB7IC8vIERldGVybWluZSB3aGljaCB2ZXJzaW9uIG9mIHRoZSBzbGlkZXIgdG8gbG9hZCBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIGltYWdlcy5cbiAgICAgICAgdGhpcy5fbXVsdGlGcmFtZV9zZXRUb3VjaFN0YXRlKCk7XG4gICAgICAgIHRoaXMuX211bHRpRnJhbWVfc2V0SW5pdGlhbEZyYW1lVGFyZ2V0KCk7XG4gICAgICAgIHRoaXMuX211bHRpRnJhbWVfY29uZmlnU3ByaXRlU3BpbigpOyAvLyBBZGQgU3ByaXRlU3BpbiBjdXN0b20gbW9kdWxlcy4gTWV0aG9kIGlzIG9ubHkgcnVuIG9uY2UuXG4gICAgICAgIHRoaXMuX211bHRpRnJhbWVfSW5pdFNwcml0ZVNwaW4oKTsgLy8gSW5pdCB0aGUgU3ByaXRlU3BpbiBwbHVnaW4gKG1ldGhvZCBjYW4gYmUgcnVuIGFmdGVyIGRlc3Ryb3lpbmcgU3ByaXRlU3BpbiBpbnN0YW5jZSlcblxuICAgICAgICB3aW5kb3cucmljaHNwb25zaXZlSW1hZ2UoKTsgLy8gbWFrZSByZXNwb25zaXZlXG5cbiAgICAgICAgdGhpcy5fbXVsdGlGcmFtZUJpbmRSZXNpemVFdmVudCgpO1xuICAgICAgICB0aGlzLnVpKCd4UmF5U2xpZGVyJykucmVtb3ZlKCk7IC8vIHJlbW92ZSB4LXJheSBzbGlkZXJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNEdWFsRnJhbWUgPSB0cnVlOyAvLyBEdWFsZnJhbWUgU2xpZGVyIGFzIG1vcmUgdGhhbiB0d28gaW1hZ2VzXG5cbiAgICAgICAgdGhpcy51aSgnb3ZlcmxheScpLnJlbW92ZSgpOyAvLyBvdmVybGF5IG5vdCBuZWVkZWQgZm9yIER1YWwgRnJhbWVcbiAgICAgICAgdGhpcy51aSgnTXVsdGlGcmFtZVNsaWRlcicpLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLl9zZXRJbWFnZXNEdWFsSW1hZ2VWZXJzaW9uKHRoaXMuZnJhbWVzWzBdLCB0aGlzLmZyYW1lc1sxXSk7XG5cbiAgICAgICAgLy8gYm9vdCBjb21wb25lbnQgd2hlbiBpbWFnZXMgaGF2ZSBsb2FkZWRcbiAgICAgICAgdGhpcy51aSgnZHVhbEZyYW1lUmV2ZWFsSW1hZ2UnKS5vbmUoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fYmluZFRyYW5zaXRpb25FbmRFdmVudCgpO1xuICAgICAgICAgIHRoaXMuX2R1YWxGcmFtZUJpbmRSZXNpemVFdmVudCgpO1xuICAgICAgICAgIHRoaXMuX2R1YWxGcmFtZV9fQ29tcGFyaXNvbkNsaXBwaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5faW5pdGFsaXNlQTExWVNldHRpbmdzKCk7XG4gICAgICB0aGlzLl9pbml0aWFsaXNlRHhSYW5nZVNsaWRlcigpO1xuICAgIH0sXG5cbiAgICBfbG9hZEltYWdlRnJhbWVzKCkge1xuICAgICAgdGhpcy5sb2FkZWRGcmFtZXMgPSBKU09OLnBhcnNlKGF0b2IodGhpcy4kZWxlbWVudC5hdHRyKCdkYXRhLWZyYW1lcycpKSk7XG4gICAgfSxcblxuICAgIF9zZXRCcmVha3BvaW50U3RhdGUoZSkge1xuICAgICAgY29uc3QgeyBicmVha3BvaW50cyB9ID0gdGhpcztcbiAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gJ2Rlc2t0b3AnO1xuXG4gICAgICBpZiAoYnJlYWtwb2ludHMuZGVza3RvcFNtYWxsLm1hdGNoZXMpIHsgdGhpcy5jdXJyZW50U3RhdGUgPSAnZGVza3RvcFNtYWxsJzsgfVxuICAgICAgaWYgKGJyZWFrcG9pbnRzLnRhYmxldC5tYXRjaGVzKSB7IHRoaXMuY3VycmVudFN0YXRlID0gJ3RhYmxldCc7IH1cbiAgICAgIGlmIChicmVha3BvaW50cy5tb2JpbGUubWF0Y2hlcykgeyB0aGlzLmN1cnJlbnRTdGF0ZSA9ICdtb2JpbGUnOyB9XG5cbiAgICAgIGlmIChlKSB7IHRoaXMuX3JlYnVpbGRWaWV3ZXJzT25SZXNpemUoKTsgfSAvLyBPbmx5IHJlc2V0IHRoZSBmcmFtZXMgaWYgdGhlIHNjcmVlbiBzaXplIGhhcyBjaGFuZ2VkIHBhc3QgYSBicmVha3BvaW50LlxuICAgIH0sXG5cbiAgICBfc2V0SW1hZ2VEaW1lbnNpb25zKCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFN0YXRlID09PSAnZGVza3RvcCcgfHwgdGhpcy5jdXJyZW50U3RhdGUgPT09ICd0YWJsZXQnKSB7XG4gICAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gOTQ2O1xuICAgICAgICB0aGlzLmltZ1dpZHRoID0gMTM1MDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gOTYwO1xuICAgICAgICB0aGlzLmltZ1dpZHRoID0gMTExMDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2JpbmRNZWRpYVF1ZXJ5TGlzdGVuZXJzKCkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5icmVha3BvaW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5icmVha3BvaW50cywga2V5KSkge1xuICAgICAgICAgIHRoaXMuYnJlYWtwb2ludHNba2V5XS5hZGRMaXN0ZW5lcih0aGlzLl9zZXRCcmVha3BvaW50U3RhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfbG9hZEZyYW1lc0Jhc2VkT25TY3JlZW5TaXplKCkge1xuICAgICAgdGhpcy5mcmFtZXMgPSB0aGlzLmxvYWRlZEZyYW1lcy5kZXNrdG9wO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50U3RhdGUgPT09ICdkZXNrdG9wU21hbGwnIHx8IHRoaXMuY3VycmVudFN0YXRlID09PSAnbW9iaWxlJykge1xuICAgICAgICB0aGlzLmZyYW1lcyA9IHRoaXMubG9hZGVkRnJhbWVzLmRlc2t0b3BTbWFsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZnJhbWVDb3VudCA9IHRoaXMuZnJhbWVzLmxlbmd0aCAtIDE7XG4gICAgfSxcblxuICAgIF9yZWJ1aWxkVmlld2Vyc09uUmVzaXplKCkge1xuICAgICAgdGhpcy5fbG9hZEZyYW1lc0Jhc2VkT25TY3JlZW5TaXplKCk7XG5cbiAgICAgIGlmICh0aGlzLmlzRHVhbEZyYW1lKSB7XG4gICAgICAgIHRoaXMuX3NldEltYWdlc0R1YWxJbWFnZVZlcnNpb24odGhpcy5mcmFtZXNbMF0sIHRoaXMuZnJhbWVzWzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubXVsdGlGcmFtZUlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMudWkoJ292ZXJsYXknKS5mYWRlSW4oNDAwKTtcbiAgICAgICAgdGhpcy5fc2V0SW1hZ2VEaW1lbnNpb25zKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0YXRlID09PSAnbW9iaWxlJyB8fCB0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gJ3RhYmxldCcpIHtcbiAgICAgICAgICBjb25zdCBwcmV2aW91c1RhcmdldEZyYW1lcyA9ICQodGhpcy5zcHJpdGVzcGluRnJhbWVzSW5zdGFuY2UsIHRoaXMuJGVsZW1lbnQpO1xuXG4gICAgICAgICAgLy8gU3dpdGNoaW5nIGJldHdlZW4gbW9iaWxlL25vbi1tb2JpbGVcbiAgICAgICAgICAvLyBEZXN0cm95ICsgcmVpbml0IFNwcml0ZVNwaW5cbiAgICAgICAgICBwcmV2aW91c1RhcmdldEZyYW1lc1xuICAgICAgICAgICAgLnNwcml0ZXNwaW4oJ2Rlc3Ryb3knKVxuICAgICAgICAgICAgLmVtcHR5KClcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLnNwcml0ZXNwaW5GcmFtZXNJbnN0YW5jZS5yZXBsYWNlKCcuJywgJycpKTtcblxuICAgICAgICAgIHRoaXMuJHNwcml0ZVNwaW5FbGVtZW50ID0gdGhpcy51aSgnbW9iaWxlRnJhbWVzVmlld2VyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kc3ByaXRlU3BpbkVsZW1lbnQgPSB0aGlzLnVpKCdkZXNrdG9wRnJhbWVzVmlld2VyJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbXVsdGlGcmFtZV9Jbml0U3ByaXRlU3Bpbih0cnVlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX3NldEltYWdlc0R1YWxJbWFnZVZlcnNpb24oYmFzZUltYWdlLCByZXZlYWxJbWFnZSkge1xuICAgICAgdGhpcy51aSgnZHVhbEZyYW1lQmFzZUltYWdlJykuYXR0cignc3JjJywgYmFzZUltYWdlKTtcbiAgICAgIHRoaXMudWkoJ2R1YWxGcmFtZVJldmVhbEltYWdlJykuYXR0cignc3JjJywgcmV2ZWFsSW1hZ2UpO1xuICAgIH0sXG5cbiAgICBfbXVsdGlGcmFtZV9zZXRUb3VjaFN0YXRlKCkge1xuICAgICAgdGhpcy50b3VjaFN0YXRlID0gJCgnaHRtbCcpLmhhc0NsYXNzKCd0b3VjaENhcGFiaWxpdHknKSA/ICd0b3VjaCcgOiAnbm90b3VjaCc7XG4gICAgfSxcblxuICAgIF9tdWx0aUZyYW1lX3NldEluaXRpYWxGcmFtZVRhcmdldCgpIHtcbiAgICAgIHRoaXMuJHNwcml0ZVNwaW5FbGVtZW50ID0gdGhpcy51aSgnZGVza3RvcEZyYW1lc1ZpZXdlcicpO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50U3RhdGUgPT09ICdtb2JpbGUnIHx8IHRoaXMuY3VycmVudFN0YXRlID09PSAndGFibGV0Jykge1xuICAgICAgICB0aGlzLiRzcHJpdGVTcGluRWxlbWVudCA9IHRoaXMudWkoJ21vYmlsZUZyYW1lc1ZpZXdlcicpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfbXVsdGlGcmFtZV9jb25maWdTcHJpdGVTcGluKCkge1xuICAgICAgLypcbiAgICAgICAgKiBSZWdpc3RlciB0aGUgU3ByaXRlU3BpbiBub0JlaGF2aW9yIG1vZHVsZSAobG9hZGVkIG9uY2UpLCB0byBwcmV2ZW50IGNsaWNraW5nL2RyYWdnaW5nIGFjdGlvbi5cbiAgICAgICAgKiBVc2VkIHRvIHByZXZlbnQgU3ByaXRlU3BpbiBjYXB0dXJpbmcgdmVydGljYWwgc2Nyb2xsIG9uIG1vYmlsZS4gU2xpZGVyIGludGVyYXRjdGlvbiBvbmx5LlxuICAgICAgKi9cbiAgICAgIGlmICghU3ByaXRlU3Bpbi5tb2RzLm5vQmVoYXZpb3IpIHsgU3ByaXRlU3Bpbi5yZWdpc3Rlck1vZHVsZSgnbm9CZWhhdmlvcicsIHt9KTsgfVxuICAgIH0sXG5cbiAgICBfbXVsdGlGcmFtZV9Jbml0U3ByaXRlU3BpbihyZXNpemUpIHtcbiAgICAgIGNvbnN0IE11bHRpRnJhbWVTbGlkZXJXaWR0aCA9IHRoaXMudWkoJ011bHRpRnJhbWVTbGlkZXInKS53aWR0aCgpO1xuICAgICAgY29uc3Qgc3ByaXRlU3BpblN0YXJ0RnJhbWUgPSByZXNpemUgPyB0aGlzLmZyYW1lU3RhdGUucG9zaXRpb24gOiAwO1xuXG4gICAgICB0aGlzLiRzcHJpdGVTcGluRWxlbWVudC5zcHJpdGVzcGluKHtcbiAgICAgICAgc291cmNlOiB0aGlzLmZyYW1lcyxcbiAgICAgICAgZnJhbWU6IHNwcml0ZVNwaW5TdGFydEZyYW1lLFxuICAgICAgICB3aWR0aDogTXVsdGlGcmFtZVNsaWRlcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IE11bHRpRnJhbWVTbGlkZXJXaWR0aCAqIHRoaXMuX211bHRpRnJhbWVfSGVpZ2h0V2lkdGhSYXRpbygpLFxuICAgICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgICAgZnJhbWVUaW1lOiA0MCxcbiAgICAgICAgYmVoYXZpb3I6ICdub0JlaGF2aW9yJyxcbiAgICAgICAgLy8gQ2FudmFzIGRvZXNuJ3Qgc2NhbGUgZG93biB3ZWxsIChpbWFnZSBxdWFsaXR5KSBzbyB3ZSB1c2UgaW1hZ2VzIG9uIG1vYmlsZVxuICAgICAgICAvLyBleGNlcHQgV2luZG93cyBNb2JpbGUgd2hpY2ggcGVyZm9ybXMgYmV0dGVyIHdpdGggY2FudmFzXG4gICAgICAgIHJlbmRlcmVyOiAodGhpcy50b3VjaFN0YXRlID09PSAndG91Y2gnICYmICFpc1dpbmRvd3NQaG9uZSgpKSA/ICdpbWFnZScgOiAnY2FudmFzJyxcbiAgICAgICAgcHJlbG9hZENvdW50OiB0aGlzLmZyYW1lQ291bnQsXG4gICAgICAgIG9uTG9hZDogKCkgPT4ge1xuICAgICAgICAgIHRoaXMubXVsdGlGcmFtZUlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgdGhpcy5fYmluZFRyYW5zaXRpb25FbmRFdmVudCgpO1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLk11bHRpRnJhbWVUaW1lb3V0KTtcblxuICAgICAgICAgIHRoaXMuTXVsdGlGcmFtZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudWkoJ292ZXJsYXknKS5mYWRlT3V0KDQwMCk7XG4gICAgICAgICAgfSwgNDAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc3ByaXRlU3BpbkFwaSA9IHRoaXMuJHNwcml0ZVNwaW5FbGVtZW50LnNwcml0ZXNwaW4oJ2FwaScpOyAvLyBTZXQgQVBJIG9iamVjdFxuICAgIH0sXG5cbiAgICBfbXVsdGlGcmFtZV9IZWlnaHRXaWR0aFJhdGlvKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW1nSGVpZ2h0IC8gdGhpcy5pbWdXaWR0aDtcbiAgICB9LFxuXG4gICAgX2JpbmRUcmFuc2l0aW9uRW5kRXZlbnQoKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdmcmFtZXMtbG9hZGVkJyk7XG4gICAgICB0aGlzLnVpKCdzbGlkZXJSaWdodCcpLm9uZSgndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcygndHJhbnNpdGlvbi1maW5pc2hlZCcpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9tdWx0aUZyYW1lQmluZFJlc2l6ZUV2ZW50KCkge1xuICAgICAgJCh3aW5kb3cpLnNtYXJ0cmVzaXplKCgpID0+IHtcbiAgICAgICAgY29uc3QgTXVsdGlGcmFtZVNsaWRlcldpZHRoID0gdGhpcy51aSgnTXVsdGlGcmFtZVNsaWRlcicpLndpZHRoKCk7XG5cbiAgICAgICAgdGhpcy4kc3ByaXRlU3BpbkVsZW1lbnQuc3ByaXRlc3Bpbih7XG4gICAgICAgICAgd2lkdGg6IE11bHRpRnJhbWVTbGlkZXJXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IE11bHRpRnJhbWVTbGlkZXJXaWR0aCAqIHRoaXMuX211bHRpRnJhbWVfSGVpZ2h0V2lkdGhSYXRpbygpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9kdWFsRnJhbWVfX0NvbXBhcmlzb25DbGlwcGluZyhzbGlkZXJQb3NpdGlvbiA9IDUwKSB7XG4gICAgICBjb25zdCByZXZlYWxJbWFnZVdpZHRoID0gdGhpcy51aSgnZHVhbEZyYW1lUmV2ZWFsSW1hZ2UnKS53aWR0aCgpO1xuICAgICAgY29uc3QgcmV2ZWFsSW1hZ2VIZWlnaHQgPSB0aGlzLnVpKCdkdWFsRnJhbWVSZXZlYWxJbWFnZScpLmhlaWdodCgpO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIGNsaXAgdmFsdWUgYmFzZWQgb24gdGhlIHNsaWRlIHByb2dyZXNzIHBlcmNlbnQgYW5kIHRoZSBpbWFnZSB3aWR0aC5cbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gTWF0aC5yb3VuZCgoKHNsaWRlclBvc2l0aW9uICogcmV2ZWFsSW1hZ2VXaWR0aCkgLyAxMDApKTsgLy8gV29ya2luZyBidXQgbm90IHRpZWQgdG8gdGhlIHNsaWRlciBoYW5kbGVcblxuICAgICAgdGhpcy51aSgnZHVhbEZyYW1lUmV2ZWFsSW1hZ2UnKS5jc3MoJ2NsaXAnLCBgcmVjdCgwLCAke3Bvc2l0aW9ufXB4LCAke3JldmVhbEltYWdlSGVpZ2h0fXB4LCAwKWApO1xuICAgIH0sXG5cbiAgICBfZHVhbEZyYW1lQmluZFJlc2l6ZUV2ZW50KCkge1xuICAgICAgLy8gZGVsaWJlcmF0ZWx5IG5vdCBkZWJvdW5jZWQgYXMgdGhlIGNsaXAgamVya3Mgb24gcmVzaXplXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9kdWFsRnJhbWVfX0NvbXBhcmlzb25DbGlwcGluZyhNYXRoLmNlaWwodGhpcy5fZHhSYW5nZVNsaWRlci5nZXQoKSkpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9pbml0YWxpc2VBMTFZU2V0dGluZ3MoKSB7XG4gICAgICBjb25zdCB3aGljaEFyaWFMYWJlbCA9ICh0aGlzLmlzRHVhbEZyYW1lKSA/ICdkYXRhLWR1YWwtdmlldy1hcmlhLWxhYmVsJyA6ICdkYXRhLW11bHRpLXZpZXctYXJpYS1sYWJlbCc7XG4gICAgICB0aGlzLmExMXlMYWJlbHMgPSB7XG4gICAgICAgIGVsZW1lbnRBcmlhTGFiZWw6IHRoaXMuJGVsZW1lbnQuYXR0cih3aGljaEFyaWFMYWJlbCksXG4gICAgICAgIGFsZXJ0TGFiZWw6IHRoaXMuJGVsZW1lbnQuYXR0cignZGF0YS1hcmlhLWFsZXJ0JyksXG4gICAgICAgIHNsaWRlckRlY3JlYXNlOiB0aGlzLiRlbGVtZW50LmF0dHIoJ2RhdGEtbGFiZWwtZGVjcmVhc2Utc2xpZGVyJyksXG4gICAgICAgIHNsaWRlckluY3JlYXNlOiB0aGlzLiRlbGVtZW50LmF0dHIoJ2RhdGEtbGFiZWwtaW5jcmVhc2Utc2xpZGVyJylcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1sYWJlbCcsIHRoaXMuYTExeUxhYmVscy5lbGVtZW50QXJpYUxhYmVsKTtcbiAgICB9LFxuXG4gICAgX2luaXRpYWxpc2VEeFJhbmdlU2xpZGVyKCkge1xuICAgICAgY29uc3Qgc2xpZGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5EeFJhbmdlU2xpZGVyJyk7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBzdGFydDogKHRoaXMuaXNEdWFsRnJhbWUpID8gNTAgOiAwLFxuICAgICAgICBzdGVwOiAxLFxuICAgICAgICBzbGlkZXJUeXBlOiAnaW1hZ2UnLFxuICAgICAgICByYW5nZTogKHRoaXMuaXNEdWFsRnJhbWUpID8geyBtaW46IDAsIG1heDogMTAwIH0gOiB7IG1pbjogMCwgbWF4OiB0aGlzLmZyYW1lQ291bnQgfSxcbiAgICAgICAgZGlyZWN0aW9uOiAoc2l0ZS5ydGwgJiYgIXRoaXMuaXNEdWFsRnJhbWUpID8gJ3J0bCcgOiAnbHRyJyxcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgZGVjcmVtZW50OiBbdGhpcy5hMTF5TGFiZWxzLnNsaWRlckRlY3JlYXNlXSxcbiAgICAgICAgICBpbmNyZW1lbnQ6IFt0aGlzLmExMXlMYWJlbHMuc2xpZGVySW5jcmVhc2VdXG4gICAgICAgIH1cblxuICAgICAgfTtcbiAgICAgIGNvbnN0IGR4UmFuZ2VTbGlkZXIgPSBuZXcgRHhSYW5nZVNsaWRlcihzbGlkZXIsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5fZHhSYW5nZVNsaWRlciA9IGR4UmFuZ2VTbGlkZXIuZ2V0U2xpZGVyKCk7XG5cbiAgICAgIHRoaXMuX2R4UmFuZ2VTbGlkZXIub24oJ3VwZGF0ZScsIChwb3NpdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBmcmFtZSA9IE1hdGguY2VpbChwb3NpdGlvblswXSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEdWFsRnJhbWUpIHtcbiAgICAgICAgICB0aGlzLl9kdWFsRnJhbWVfX0NvbXBhcmlzb25DbGlwcGluZyhmcmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMubXVsdGlGcmFtZUlzTG9hZGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlU3BpbkFwaS51cGRhdGVGcmFtZShmcmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZnJhbWVTdGF0ZS5wb3NpdGlvbiA9IGZyYW1lO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fZHhSYW5nZVNsaWRlci5vbignZW5kJywgKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMudWkoJ2FyaWFOb3RpZmljYXRpb24nKS50ZXh0KHRoaXMuYTExeUxhYmVscy5hbGVydExhYmVsLnJlcGxhY2UoJ1tdJywgYCR7TWF0aC5jZWlsKHBvc2l0aW9uKX0lYCkpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfTtcblxuICBqUXVlcnkuY3JlYXRlQ29tcG9uZW50KCdEdWFsRnJhbWVTbGlkZXInLCBEdWFsRnJhbWVTbGlkZXIpO1xuXG4gICQoJy5EdWFsRnJhbWVTbGlkZXInKS5EdWFsRnJhbWVTbGlkZXIoKTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG4iLCIvKiBnbG9iYWwgbm9VaVNsaWRlciAqL1xuXG5pbXBvcnQge1xuICBpbnNlcnRBZnRlcixcbiAgaW5zZXJ0QmVmb3JlXG59IGZyb20gJy4uLy4uLy4uL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvZG9tTWFuaXB1bGF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHhSYW5nZVNsaWRlciB7XG4gIHN0YXRpYyBkZWZhdWx0cyA9IHtcbiAgICB0aGVtZTogJ2xpZ2h0JywgLy8gbGlnaHQgfHwgZGFya1xuICAgIGRpcmVjdGlvbjogJ2x0cicsIC8vIGx0ciB8fCBydGxcbiAgICBzbGlkZXJUeXBlOiAncmFuZ2UnLCAvLyByYW5nZSB8fCBpbWFnZVxuICAgIGxhYmVsczoge1xuICAgICAgZGVjcmVtZW50OiBbJ0RlY3JlYXNlIHNsaWRlciAxJywgJ0RlY3JlYXNlIHNsaWRlciAyJ10sXG4gICAgICBpbmNyZW1lbnQ6IFsnSW5jcmVhc2Ugc2xpZGVyIDEnLCAnSW5jcmVhc2Ugc2xpZGVyIDInXVxuICAgIH1cbiAgfVxuICBzdGF0aWMgY2xhc3NlcyA9IHtcbiAgICBtb2RpZmllckNsYXNzOiAnRHhSYW5nZVNsaWRlci0tJyxcbiAgICBjdXN0b21Db25uZWN0Q2xhc3M6ICdEeFJhbmdlU2xpZGVyX19jdXN0b20tY29ubmVjdCcsXG4gICAgaGFuZGxlQ29udHJvbENsYXNzOiAnRHhSYW5nZVNsaWRlcl9faGFuZGxlLWNvbnRyb2wnLFxuICAgIHNtYWxsSGFuZGxlQ2xhc3M6ICdzbWFsbC1oYW5kbGVzJ1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5zbGlkZXIgPSBudWxsO1xuICAgIHRoaXMuY3VzdG9tQ29ubmVjdE5hbWVzcGFjZSA9ICdEeFJhbmdlU2xpZGVyLWN1c3RvbS1jb25uZWN0cyc7XG4gICAgdGhpcy5kYXRhTmFtZVNwYWNlID0gJ2RhdGEtZHhyYW5nZXNsaWRlci0nO1xuICAgIHRoaXMuZGF0YUNvbm5lY3RJbmRleCA9IGAke3RoaXMuZGF0YU5hbWVTcGFjZX1pbmRleGA7XG4gICAgdGhpcy5kYXRhSXNJbml0aWFsaXNlZCA9IGAke3RoaXMuZGF0YU5hbWVTcGFjZX1pbml0YDtcbiAgICBjb25zdCBzbWFsbEhhbmRsZXMgPSBvcHRpb25zLnN0YXJ0Lmxlbmd0aCA+IDE7XG4gICAgY29uc3QgY3VzdG9tQ29ubmVjdFNwYWNpbmcgPSBzbWFsbEhhbmRsZXMgPyAxNCA6IDI1O1xuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgRHhSYW5nZVNsaWRlci5kZWZhdWx0cywgeyBjdXN0b21Db25uZWN0U3BhY2luZywgc21hbGxIYW5kbGVzIH0sIG9wdGlvbnMpO1xuICAgIHRoaXMuY3JlYXRlU2xpZGVyKCk7XG4gIH1cblxuICB1cGRhdGVPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gIH1cblxuICBjcmVhdGVTdGFydEFycmF5KCkge1xuICAgIGNvbnN0IHsgc3RhcnQgfSA9IHRoaXMub3B0aW9ucztcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShzdGFydCkgPyBzdGFydCA6IFtzdGFydF07XG4gIH1cblxuICBjcmVhdGVTbGlkZXIoKSB7XG4gICAgaWYgKHRoaXMuaXNJbml0aWFsaXNlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucy5zdGFydCA9IHRoaXMuY3JlYXRlU3RhcnRBcnJheSgpO1xuICAgIHRoaXMuY3JlYXRlQ3VzdG9tQ29ubmVjdHMoKTtcbiAgICB0aGlzLmFkZEN1c3RvbUNsYXNzZXMoKTtcbiAgICB0aGlzLmluaXRTbGlkZXIoKTtcbiAgICB0aGlzLmNyZWF0ZUN1c3RvbUNvbnRyb2xzKCk7XG4gICAgdGhpcy5hZGRDdXN0b21Db25uZWN0RXZlbnRzKCk7XG4gIH1cblxuICBhZGRDdXN0b21DbGFzc2VzKCkge1xuICAgIGNvbnN0IHsgbW9kaWZpZXJDbGFzcywgc21hbGxIYW5kbGVDbGFzcyB9ID0gRHhSYW5nZVNsaWRlci5jbGFzc2VzO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke21vZGlmaWVyQ2xhc3N9JHt0aGlzLm9wdGlvbnMuZGlyZWN0aW9ufWApO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke21vZGlmaWVyQ2xhc3N9JHt0aGlzLm9wdGlvbnMudGhlbWV9YCk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7bW9kaWZpZXJDbGFzc30ke3RoaXMub3B0aW9ucy5zbGlkZXJUeXBlfWApO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zbWFsbEhhbmRsZXMpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke21vZGlmaWVyQ2xhc3N9JHtzbWFsbEhhbmRsZUNsYXNzfWApO1xuICAgIH1cbiAgfVxuXG4gIGluaXRTbGlkZXIoKSB7XG4gICAgdGhpcy5zbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZSh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG4gICAgY29uc3QgaGFuZGxlcyA9IFsuLi50aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vVWktdG91Y2gtYXJlYScpXTtcbiAgICBoYW5kbGVzLmZvckVhY2goKGhhbmRsZSkgPT4ge1xuICAgICAgLy8gbm9VaVNsaWRlciBwcmV2ZW50cyBjbGVhcmluZyBmb2N1c1N0eWxlcyBvbiBtb3VzZWRvd24gLSB0aGlzIGFkZHMgaXQgYmFjayBpblxuICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgaWYgKCQgJiYgJC5mbi5Gb2N1c1N3aXRjaGVyKSB7XG4gICAgICAgICAgJCgnYm9keScpLkZvY3VzU3dpdGNoZXIoJ3JlbW92ZUZvY3VzQ2xhc3MnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRJbml0U3RhdHVzKCd0cnVlJyk7XG4gIH1cblxuICBkZXN0cm95U2xpZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1vZGlmaWVyQ2xhc3MsXG4gICAgICBzbWFsbEhhbmRsZUNsYXNzLFxuICAgICAgY3VzdG9tQ29ubmVjdENsYXNzLFxuICAgICAgaGFuZGxlQ29udHJvbENsYXNzXG4gICAgfSA9IER4UmFuZ2VTbGlkZXIuY2xhc3NlcztcblxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHNtYWxsSGFuZGxlQ2xhc3MpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke21vZGlmaWVyQ2xhc3N9JHt0aGlzLm9wdGlvbnMuZGlyZWN0aW9ufWApO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke21vZGlmaWVyQ2xhc3N9JHt0aGlzLm9wdGlvbnMudGhlbWV9YCk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYCR7bW9kaWZpZXJDbGFzc30ke3RoaXMub3B0aW9ucy5zbGlkZXJUeXBlfWApO1xuXG4gICAgdGhpcy5zbGlkZXIub2ZmKGAuJHt0aGlzLmN1c3RvbUNvbm5lY3ROYW1lc3BhY2V9YCk7XG4gICAgY29uc3QgY29ubmVjdHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y3VzdG9tQ29ubmVjdENsYXNzfWApO1xuICAgIGNvbm5lY3RzLmZvckVhY2goY29ubmVjdCA9PiBjb25uZWN0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29ubmVjdCkpO1xuXG4gICAgY29uc3QgY29udHJvbHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7aGFuZGxlQ29udHJvbENsYXNzfWApO1xuICAgIGNvbnRyb2xzLmZvckVhY2goY29udHJvbCA9PiBjb250cm9sLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udHJvbCkpO1xuXG4gICAgdGhpcy5zbGlkZXIuZGVzdHJveSgpOyAvLyBjYWxsIG5vVWlTbGlkZXIgZGVzdHJveSBtZXRob2RcbiAgICB0aGlzLnNldEluaXRTdGF0dXMobnVsbCk7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKHRoaXMuZGF0YUlzSW5pdGlhbGlzZWQpO1xuICB9XG5cbiAgc2V0SW5pdFN0YXR1cyhzdGF0dXMpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMuZGF0YUlzSW5pdGlhbGlzZWQsIHN0YXR1cyA/IHRydWUgOiAnJyk7XG4gIH1cblxuICBjcmVhdGVDdXN0b21Db25uZWN0cygpIHtcbiAgICBjb25zdCB7IGN1c3RvbUNvbm5lY3RDbGFzcyB9ID0gRHhSYW5nZVNsaWRlci5jbGFzc2VzO1xuICAgIGNvbnN0IGNyZWF0ZUNvbm5lY3QgPSAoaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjdXN0b21Db25uZWN0Q2xhc3MpO1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjdXN0b21Db25uZWN0Q2xhc3N9LS1maXJzdGApO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID09PSB0aGlzLm9wdGlvbnMuc3RhcnQubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjdXN0b21Db25uZWN0Q2xhc3N9LS1sYXN0YCk7XG4gICAgICB9XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLmRhdGFDb25uZWN0SW5kZXgsIGluZGV4KTtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbm5lY3QoMCkpO1xuICAgIHRoaXMub3B0aW9ucy5zdGFydC5mb3JFYWNoKChoYW5kbGUsIGluZGV4KSA9PiB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29ubmVjdChpbmRleCArIDEpKSk7XG4gIH1cblxuICBhZGRDdXN0b21Db25uZWN0RXZlbnRzKCkge1xuICAgIGNvbnN0IGFsaWdubWVudCA9IHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdsdHInID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICBjb25zdCBjb25uZWN0b3JzID0gWy4uLnRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHt0aGlzLmRhdGFDb25uZWN0SW5kZXh9XWApXTtcblxuICAgIHRoaXMuc2xpZGVyLm9uKGB1cGRhdGUuJHt0aGlzLmN1c3RvbUNvbm5lY3ROYW1lc3BhY2V9YCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGFyZ3NbNF07XG4gICAgICBjb25uZWN0b3JzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RvciA9IGVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlzRmlyc3QgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgY29uc3QgaXNMYXN0ID0gIWNvbm5lY3RvcnNbaW5kZXggKyAxXTtcbiAgICAgICAgaWYgKGlzRmlyc3QpIHtcbiAgICAgICAgICBjb25uZWN0b3Iuc3R5bGUud2lkdGggPSBgY2FsYygke3Bvc2l0aW9uc1swXX0lIC0gJHt0aGlzLm9wdGlvbnMuY3VzdG9tQ29ubmVjdFNwYWNpbmd9cHgpYDtcbiAgICAgICAgICBjb25uZWN0b3Iuc3R5bGVbYWxpZ25tZW50XSA9ICcwcHgnO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNMYXN0KSB7XG4gICAgICAgICAgY29ubmVjdG9yLnN0eWxlLndpZHRoID0gYGNhbGMoMTAwJSAtICR7cG9zaXRpb25zW2luZGV4IC0gMV19JSAtICR7dGhpcy5vcHRpb25zLmN1c3RvbUNvbm5lY3RTcGFjaW5nfXB4KWA7XG4gICAgICAgICAgY29ubmVjdG9yLnN0eWxlW2FsaWdubWVudF0gPSBgY2FsYygke3Bvc2l0aW9uc1tpbmRleCAtIDFdfSUgKyAke3RoaXMub3B0aW9ucy5jdXN0b21Db25uZWN0U3BhY2luZ31weClgO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkb3VibGVTcGFjaW5nID0gdGhpcy5vcHRpb25zLmN1c3RvbUNvbm5lY3RTcGFjaW5nICogMjtcbiAgICAgICAgY29ubmVjdG9yLnN0eWxlLndpZHRoID0gYGNhbGMoJHtwb3NpdGlvbnNbaW5kZXhdfSUgLSAke3Bvc2l0aW9uc1tpbmRleCAtIDFdfSUgLSAke2RvdWJsZVNwYWNpbmd9cHgpYDtcbiAgICAgICAgY29ubmVjdG9yLnN0eWxlW2FsaWdubWVudF0gPSBgY2FsYygke3Bvc2l0aW9uc1tpbmRleCAtIDFdfSUgKyAke3RoaXMub3B0aW9ucy5jdXN0b21Db25uZWN0U3BhY2luZ31weClgO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVDdXN0b21Db250cm9scygpIHtcbiAgICBjb25zdCBjcmVhdGVDb250cm9sID0gKHN0ciwgbW9kaWZpZXIpID0+IHtcbiAgICAgIGNvbnN0IHsgaGFuZGxlQ29udHJvbENsYXNzIH0gPSBEeFJhbmdlU2xpZGVyLmNsYXNzZXM7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoaGFuZGxlQ29udHJvbENsYXNzKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtoYW5kbGVDb250cm9sQ2xhc3N9JHttb2RpZmllcn1gKTtcbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gc3RyO1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVdyYXBwZXIgPSB0aGlzLmdldEhhbmRsZXNXcmFwcGVyKCk7XG4gICAgdGhpcy5nZXRIYW5kbGVzKCkuZm9yRWFjaCgoaGFuZGxlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgeyBsYWJlbHMgfSA9IHRoaXMub3B0aW9ucztcbiAgICAgIGNvbnN0IGRlY3JlbWVudEVsZW1lbnQgPSBjcmVhdGVDb250cm9sKGxhYmVscy5kZWNyZW1lbnRbaW5kZXhdLCBgLS1kZWNyZW1lbnQke2luZGV4fWApO1xuICAgICAgY29uc3QgaW5jcmVtZW50RWxlbWVudCA9IGNyZWF0ZUNvbnRyb2wobGFiZWxzLmluY3JlbWVudFtpbmRleF0sIGAtLWluY3JlbWVudCR7aW5kZXh9YCk7XG4gICAgICBjb25zdCBjb250cm9sQnV0dG9ucyA9IHsgZGVjcmVtZW50RWxlbWVudCwgaW5jcmVtZW50RWxlbWVudCB9O1xuXG4gICAgICBpbnNlcnRCZWZvcmUoaGFuZGxlV3JhcHBlciwgZGVjcmVtZW50RWxlbWVudCk7XG4gICAgICBpbnNlcnRBZnRlcihoYW5kbGVXcmFwcGVyLCBpbmNyZW1lbnRFbGVtZW50KTtcblxuICAgICAgdGhpcy5zZXRJbml0aWFsQnV0dG9uU3RhdGVBMTFZKGNvbnRyb2xCdXR0b25zKTtcblxuICAgICAgZGVjcmVtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmhhbmRsZURlY3JlbWVudChpbmRleCwgY29udHJvbEJ1dHRvbnMpO1xuICAgICAgfSk7XG4gICAgICBpbmNyZW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5jcmVtZW50KGluZGV4LCBjb250cm9sQnV0dG9ucyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxCdXR0b25TdGF0ZUExMVkoY29udHJvbEJ1dHRvbnMpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0WzBdID09PSB0aGlzLm9wdGlvbnMucmFuZ2UubWluKSB7XG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLnRvZ2dsZURpc2FibGVkU3RhdGVBMTF5KGNvbnRyb2xCdXR0b25zLmRlY3JlbWVudEVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnN0YXJ0WzBdID09PSB0aGlzLm9wdGlvbnMucmFuZ2UubWF4KSB7XG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLnRvZ2dsZURpc2FibGVkU3RhdGVBMTF5KGNvbnRyb2xCdXR0b25zLmRlY3JlbWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUluY3JlbWVudChoYW5kbGVJbmRleCwgY29udHJvbEJ1dHRvbnMpIHtcbiAgICBjb25zdCBzdGVwcyA9IHRoaXMuc2xpZGVyLnN0ZXBzKCk7XG4gICAgY29uc3Qgc3RlcCA9IHN0ZXBzICYmIHN0ZXBzW2hhbmRsZUluZGV4XVsxXTtcbiAgICBpZiAoIXN0ZXApIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3IudG9nZ2xlRGlzYWJsZWRTdGF0ZUExMXkoY29udHJvbEJ1dHRvbnMuaW5jcmVtZW50RWxlbWVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRIYW5kbGVWYWx1ZShoYW5kbGVJbmRleCk7XG4gICAgdGhpcy5zbGlkZXIuc2V0SGFuZGxlKGhhbmRsZUluZGV4LCB2YWx1ZSArIHN0ZXApO1xuICAgIHRoaXMuY29uc3RydWN0b3IudG9nZ2xlRGlzYWJsZWRTdGF0ZUExMXkoY29udHJvbEJ1dHRvbnMuZGVjcmVtZW50RWxlbWVudCwgdHJ1ZSk7XG4gIH1cblxuICBoYW5kbGVEZWNyZW1lbnQoaGFuZGxlSW5kZXgsIGNvbnRyb2xCdXR0b25zKSB7XG4gICAgY29uc3Qgc3RlcHMgPSB0aGlzLnNsaWRlci5zdGVwcygpO1xuICAgIGNvbnN0IHN0ZXAgPSBzdGVwcyAmJiBzdGVwc1toYW5kbGVJbmRleF1bMF07XG4gICAgaWYgKCFzdGVwKSB7XG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLnRvZ2dsZURpc2FibGVkU3RhdGVBMTF5KGNvbnRyb2xCdXR0b25zLmRlY3JlbWVudEVsZW1lbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0SGFuZGxlVmFsdWUoaGFuZGxlSW5kZXgpO1xuICAgIHRoaXMuc2xpZGVyLnNldEhhbmRsZShoYW5kbGVJbmRleCwgdmFsdWUgLSBzdGVwKTtcbiAgICB0aGlzLmNvbnN0cnVjdG9yLnRvZ2dsZURpc2FibGVkU3RhdGVBMTF5KGNvbnRyb2xCdXR0b25zLmluY3JlbWVudEVsZW1lbnQsIHRydWUpO1xuICB9XG5cbiAgc3RhdGljIHRvZ2dsZURpc2FibGVkU3RhdGVBMTF5KGJ1dHRvbiwgcmVtb3ZlRGlzYWJsZWQgPSBmYWxzZSkge1xuICAgIGlmIChyZW1vdmVEaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cblxuICBnZXRIYW5kbGVWYWx1ZShpbmRleCkge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuc2xpZGVyLmdldCgpO1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWVzID09PSAnc3RyaW5nJyA/IE51bWJlcih2YWx1ZXMpIDogTnVtYmVyKHZhbHVlc1tpbmRleF0pO1xuICB9XG5cbiAgZ2V0SGFuZGxlc1dyYXBwZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubm9VaS1iYXNlJyk7XG4gIH1cblxuICBnZXRIYW5kbGVzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub1VpLWhhbmRsZScpXTtcbiAgfVxuXG4gIGdldFNsaWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5zbGlkZXI7XG4gIH1cblxuICAvLyB1dGlsaXR5IG1ldGhvZCB0byBhbGxvdyBub1VpU2xpZGVyIHRvIGNvbnRyb2wgZHJhZyBkZWFsZXJcbiAgY29ubmVjdEhvcml6b250YWxEcmFnRGVhbGVyKGRyYWdEZWFsZXIpIHtcbiAgICBjb25zdCBiaW5kRXZlbnQgPSBldmVudCA9PiB0aGlzLnNsaWRlci5vbihldmVudCwgdmFsdWVzID0+IGRyYWdEZWFsZXIuc2V0VmFsdWUodmFsdWVzWzBdIC8gMTAwLCAwLCBmYWxzZSkpO1xuICAgIFsndXBkYXRlJywgJ3N0YXJ0JywgJ2VuZCddLmZvckVhY2goZXZlbnQgPT4gYmluZEV2ZW50KGV2ZW50KSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBicmVha3BvaW50cyA9IHtcbiAgc21hbGw6IDc0MCxcbiAgbWVkaXVtOiA5MDAsXG4gIHdpZGVyOiAxMDAwLFxuICBjdXJyZW50OiBudWxsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGV2aWNlT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0ICR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gIHJldHVybiAkd2luZG93LndpZHRoKCkgPiAkd2luZG93LmhlaWdodCgpID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xufTtcblxuY29uc3QgZ2V0TGFyZ2VyQnJlYWtwb2ludCA9IHdpZHRoID0+IChcbiAgd2lkdGggPD0gYnJlYWtwb2ludHMubWVkaXVtID8gJ21lZGl1bScgOiAnbGFyZ2UnXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QnJlYWtwb2ludFNpemUgPSAob2xkQ2FsYyA9IHRydWUpID0+IHtcbiAgY29uc3Qgd2lkdGggPSBvbGRDYWxjID8gJCh3aW5kb3cpLndpZHRoKCkgOiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgcmV0dXJuICh3aWR0aCA8PSBicmVha3BvaW50cy5zbWFsbCkgPyAnc21hbGwnIDogZ2V0TGFyZ2VyQnJlYWtwb2ludCh3aWR0aCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNCcmVha3BvaW50U21hbGwgPSAob2xkQ2FsYyA9IHRydWUpID0+IHtcbiAgcmV0dXJuIGdldEJyZWFrcG9pbnRTaXplKG9sZENhbGMpID09PSAnc21hbGwnO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzQnJlYWtwb2ludE1lZGl1bSA9IChvbGRDYWxjID0gdHJ1ZSkgPT4ge1xuICByZXR1cm4gZ2V0QnJlYWtwb2ludFNpemUob2xkQ2FsYykgPT09ICdtZWRpdW0nO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTW9iaWxlRGV2aWNlID0gKCkgPT4ge1xuICByZXR1cm4gKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCB8fCBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn07XG5cbmV4cG9ydCBjb25zdCBpc05vdE1vYmlsZURldmljZSA9ICgpID0+IHtcbiAgcmV0dXJuICFpc01vYmlsZURldmljZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzVGFibGV0RGV2aWNlID0gKCkgPT4ge1xuICByZXR1cm4gLyhpcGFkfHRhYmxldHwoYW5kcm9pZCg/IS4qbW9iaWxlKSl8KHdpbmRvd3MoPyEuKnBob25lKSguKnRvdWNoKSl8a2luZGxlfHBsYXlib29rfHNpbGt8KHB1ZmZpbig/IS4qKElQfEFQfFdQKSkpKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzSU9TID0gKCkgPT4ge1xuICByZXR1cm4gKC8oaXBhZHxpcGhvbmV8aXBvZCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTm90SU9TID0gKCkgPT4ge1xuICByZXR1cm4gIWlzSU9TKCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNXaW5kb3dzUGhvbmUgPSAoKSA9PiB7XG4gIHJldHVybiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3dpbmRvd3MgcGhvbmUnKSAhPT0gLTEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFuZHJvaWRWZXJzaW9uID0gKCkgPT4ge1xuICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgaWYgKHVhLmluZGV4T2YoJ0FuZHJvaWQnKSA+PSAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodWEuc2xpY2UodWEuaW5kZXhPZignQW5kcm9pZCcpICsgOCkpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEJyb3dzZXJVc2VyQWdlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdXNlckFnZW50IH0gPSBuYXZpZ2F0b3I7XG4gIHJldHVybiB1c2VyQWdlbnQ7XG59O1xuXG5leHBvcnQgY29uc3QgZGV0ZWN0QnJvd3NlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJBZ2VudCA9IGdldEJyb3dzZXJVc2VyQWdlbnQoKTtcbiAgY29uc3QgYnJvd3NlcnMgPSB7XG4gICAgaXNDaHJvbWU6IHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA+IC0xLFxuICAgIGlzTXNFZGdlOiB1c2VyQWdlbnQuaW5kZXhPZignRWRnZScpID4gLTEsXG4gICAgaXNFeHBsb3JlcjogdXNlckFnZW50LmluZGV4T2YoJ01TSUUnKSA+IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPiAtMSwgLy8gTVNJRSA9IElFMTAgYW5kIGJlbG93LCBUcmlkZW50ID0gSUUxMVxuICAgIGlzRmlyZWZveDogdXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA+IC0xLFxuICAgIGlzU2FmYXJpOiB1c2VyQWdlbnQuaW5kZXhPZignU2FmYXJpJykgPiAtMSxcbiAgICBpc09wZXJhOiB1c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdvcCcpID4gLTFcbiAgfTtcblxuICBpZiAoYnJvd3NlcnMuaXNDaHJvbWUgJiYgYnJvd3NlcnMuaXNTYWZhcmkpIHtcbiAgICBicm93c2Vycy5pc1NhZmFyaSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGJyb3dzZXJzLmlzQ2hyb21lICYmIGJyb3dzZXJzLmlzT3BlcmEpIHtcbiAgICBicm93c2Vycy5pc0Nocm9tZSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGJyb3dzZXJzO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzSWUgPSAoKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdpZScpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTXNFZGdlID0gKCkgPT4ge1xuICByZXR1cm4gZGV0ZWN0QnJvd3NlcnMoKS5pc01zRWRnZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0llMTEgPSAoKSA9PiB7XG4gIHJldHVybiAoIXdpbmRvdy5BY3RpdmVYT2JqZWN0ICYmICdBY3RpdmVYT2JqZWN0JyBpbiB3aW5kb3cpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFZpZXdwb3J0U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgdGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHRlc3Quc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjogZml4ZWQ7dG9wOiAwO2xlZnQ6IDA7Ym90dG9tOiAwO3JpZ2h0OiAwOyc7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGVzdCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gIGNvbnN0IGRpbXMgPSB7IHdpZHRoOiB0ZXN0Lm9mZnNldFdpZHRoLCBoZWlnaHQ6IHRlc3Qub2Zmc2V0SGVpZ2h0IH07XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0ZXN0KTtcblxuICByZXR1cm4gZGltcztcbn07XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxUb0VsZW1lbnQgPSAoZWxlbWVudCwgb3B0aW9ucywgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgJGVsZW1lbnQgPSBlbGVtZW50IGluc3RhbmNlb2YgalF1ZXJ5ID8gZWxlbWVudCA6ICQoZWxlbWVudCk7XG5cbiAgLy8gT3B0aW9ucyBhcmUgb3B0aW9uYWxcbiAgbGV0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIFNldCBkZWZhdWx0c1xuICBvcHRzID0gJC5leHRlbmQoe1xuICAgIGFkanVzdG1lbnQ6IDAsXG4gICAgZWFzZTogJ2Vhc2VPdXRTaW5lJyxcbiAgICBkdXJhdGlvbjogODAwLFxuICAgIGNvbnRhaW5lcjogJCgnYm9keSwgaHRtbCcpXG4gIH0sIG9wdHMpO1xuXG4gIC8vIEhhcyBhbiBlbGVtZW50IGJlZW4gc3VwcGxpZWQ/XG4gIGlmICgkZWxlbWVudC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBTY3JvbGwgdG8gdGhlIHRhcmdldCBlbGVtZW50IGFsbG93aW5nIGZvciB0aGUgdXRpbGl0eSBtZW51XG4gIG9wdHMuY29udGFpbmVyLnN0b3AoKS5hbmltYXRlKHtcbiAgICBzY3JvbGxUb3A6ICRlbGVtZW50Lm9mZnNldCgpLnRvcCAtIG9wdHMuYWRqdXN0bWVudFxuICB9LCBvcHRzLmR1cmF0aW9uLCBvcHRzLmVhc2UsICgpID0+IHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBGb3IgdW5pdCB0ZXN0c1xuICByZXR1cm4gb3B0cztcbn07XG5cbi8qKlxuICogRGV0ZWN0IE1vZGVybiBCcm93c2VyIGJ5IGF2YWlsYWJpbGl0eSBvZiBCaWdJbnQgZmVhdHVyZS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaGFzQmlnSW50U3VwcG9ydCA9ICgpID0+IHtcbiAgcmV0dXJuICh0eXBlb2YgQmlnSW50ID09PSAnZnVuY3Rpb24nKTtcbn07XG4iLCIvLyB1c2FnZTogd3JhcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhLndyYXBfbWUnKSwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuZXhwb3J0IGNvbnN0IHdyYXAgPSAoZWwsIHdyYXBwZXIpID0+IHtcbiAgZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWwpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsKTtcbn07XG5cbi8vIHVzYWdlOiB1bndyYXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYS51bndyYXBfbWUnKSk7XG5leHBvcnQgY29uc3QgdW53cmFwID0gKGVsKSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG4gIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50Lmluc2VydEJlZm9yZShlbC5maXJzdENoaWxkLCBlbCk7XG4gIH1cbiAgcGFyZW50LnJlbW92ZUNoaWxkKGVsKTtcbn07XG5cblxuLy8gd3JhcEFsbDogcmVwbGljYXRlcyBqUXVlcnkncyAkLndyYXBBbGwoKSBmb3Igbm9uLWpRdWVyeSBlbGVtZW50KHMpLCBleGFtcGxlIHVzYWdlOlxuLy8gICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIHdyYXBBbGwoY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RvcicpLCB3cmFwcGVyKTtcbmV4cG9ydCBjb25zdCB3cmFwQWxsID0gKGVsZW1lbnRzLCB3cmFwcGVyKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUFycmF5ID0gKGVsKSA9PiB7XG4gICAgcmV0dXJuIGVsIGluc3RhbmNlb2YgTm9kZUxpc3QgPyBbLi4uZWxdIDogW2VsXTtcbiAgfTtcbiAgY29uc3QgZWxlbWVudHNBcnJheSA9IGNyZWF0ZUFycmF5KGVsZW1lbnRzKTtcbiAgaWYgKCFlbGVtZW50c0FycmF5Lmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwYXJlbnQgPSBlbGVtZW50c0FycmF5WzBdLnBhcmVudE5vZGU7XG4gIHBhcmVudC5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbWVudHNBcnJheVswXSk7XG4gIGVsZW1lbnRzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xufTtcblxuLy8gSlMgcmVwbGFjZW1lbnQgZm9yIGpRdWVyeSAkLmFmdGVyKClcbmV4cG9ydCBjb25zdCBpbnNlcnRBZnRlciA9IChiZWZvcmUsIGFmdGVyKSA9PiBiZWZvcmUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYWZ0ZXIsIGJlZm9yZS5uZXh0U2libGluZyk7XG5cbi8vIEpTIHJlcGxhY2VtZW50IGZvciBqUXVlcnkgJC5iZWZvcmUoKVxuZXhwb3J0IGNvbnN0IGluc2VydEJlZm9yZSA9IChhZnRlciwgYmVmb3JlKSA9PiBhZnRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShiZWZvcmUsIGFmdGVyKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=