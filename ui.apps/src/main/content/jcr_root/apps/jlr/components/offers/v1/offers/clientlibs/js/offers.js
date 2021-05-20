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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/webapp/components/OffersContainer/js/OffersContainer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

    module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js"), __esModule: true };

    /***/ }),
    
    /***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
      \**********************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
    /*!**************************************************************!*\
      !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
      \**************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    exports.__esModule = true;
    
    exports.default = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/helpers/createClass.js":
    /*!***********************************************************!*\
      !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
      \*****************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js ***!
      \**********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    __webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
    __webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js");
    module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Array.from;
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js ***!
      \**********************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    __webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js");
    var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object;
    module.exports = function defineProperty(it, key, desc) {
      return $Object.defineProperty(it, key, desc);
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    module.exports = function (it) {
      if (typeof it != 'function') throw TypeError(it + ' is not a function!');
      return it;
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
    module.exports = function (it) {
      if (!isObject(it)) throw TypeError(it + ' is not an object!');
      return it;
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js":
    /*!********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js ***!
      \********************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
        } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        } return !IS_INCLUDES && -1;
      };
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js":
    /*!*************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js ***!
      \*************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js":
    /*!*********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js ***!
      \*********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    var toString = {}.toString;
    
    module.exports = function (it) {
      return toString.call(it).slice(8, -1);
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js ***!
      \**********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    var core = module.exports = { version: '2.5.3' };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_create-property.js":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_create-property.js ***!
      \*********************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
    var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
    
    module.exports = function (object, index, value) {
      if (index in object) $defineProperty.f(object, index, createDesc(0, value));
      else object[index] = value;
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js":
    /*!*********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js ***!
      \*********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js":
    /*!*************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js ***!
      \*************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    // 7.2.1 RequireObjectCoercible(argument)
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on  " + it);
      return it;
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js ***!
      \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    // Thank's IE8 for his funny defineProperty
    module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
      return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
    });
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
    var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
    // typeof document.createElement is 'object' in old IE
    var is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
      return is ? document.createElement(it) : {};
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
      \*******************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    // IE 8- don't enum bug keys
    module.exports = (
      'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
    ).split(',');
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js ***!
      \************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js":
    /*!***********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js ***!
      \***********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js ***!
      \************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math
      ? window : typeof self != 'undefined' && self.Math == Math ? self
      // eslint-disable-next-line no-new-func
      : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js":
    /*!*********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js ***!
      \*********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js ***!
      \**********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
    var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
    module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
      return dP.f(object, key, createDesc(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js ***!
      \**********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
    module.exports = document && document.documentElement;
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":
    /*!********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
      \********************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
      return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
    });
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js":
    /*!*************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js ***!
      \*************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
    // eslint-disable-next-line no-prototype-builtins
    module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
      return cof(it) == 'String' ? it.split('') : Object(it);
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js ***!
      \*******************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    // check on default Array iterator
    var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
    var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
    var ArrayProto = Array.prototype;
    
    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js ***!
      \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js ***!
      \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js ***!
      \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    module.exports = {};
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js":
    /*!*************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js ***!
      \*************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    module.exports = true;
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js ***!
      \*******************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js ***!
      \**************************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js ***!
      \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    // 19.1.2.14 / 15.2.3.14 Object.keys(O)
    var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
    var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");
    
    module.exports = Object.keys || function keys(O) {
      return $keys(O, enumBugKeys);
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js ***!
      \*******************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js":
    /*!**************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js ***!
      \**************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
      \***********************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
    var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
    var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');
    
    module.exports = function (it, tag, stat) {
      if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('keys');
    var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
    module.exports = function (key) {
      return shared[key] || (shared[key] = uid(key));
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js ***!
      \************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
    var SHARED = '__core-js_shared__';
    var store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
      return store[key] || (store[key] = {});
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js ***!
      \***********************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
    var max = Math.max;
    var min = Math.min;
    module.exports = function (index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    // 7.1.4 ToInteger
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = function (it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    // to indexed object, toObject with fallback for non-array-like ES3 strings
    var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
    var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
    module.exports = function (it) {
      return IObject(defined(it));
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    // 7.1.15 ToLength
    var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
    var min = Math.min;
    module.exports = function (it) {
      return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    // 7.1.13 ToObject(argument)
    var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
    module.exports = function (it) {
      return Object(defined(it));
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js":
    /*!******************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js ***!
      \******************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js":
    /*!*********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js ***!
      \*********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    var id = 0;
    var px = Math.random();
    module.exports = function (key) {
      return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js":
    /*!*********************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js ***!
      \*********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var store = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('wks');
    var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
    var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").Symbol;
    var USE_SYMBOL = typeof Symbol == 'function';
    
    var $exports = module.exports = function (name) {
      return store[name] || (store[name] =
        USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
    };
    
    $exports.store = store;
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
      \*****************************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var classof = __webpack_require__(/*! ./_classof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js");
    var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
    var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
    module.exports = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
      if (it != undefined) return it[ITERATOR]
        || it['@@iterator']
        || Iterators[classof(it)];
    };
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js ***!
      \*******************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js ***!
      \*******************************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
    // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
    $export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f });
    
    
    /***/ }),
    
    /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js":
    /*!************************************************************************************************!*\
      !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js ***!
      \************************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
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
    
    
    /***/ }),
    
    /***/ "./src/main/webapp/components/OffersContainer/js/OffersContainer.js":
    /*!**************************************************************************!*\
      !*** ./src/main/webapp/components/OffersContainer/js/OffersContainer.js ***!
      \**************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
    
    var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
    
    var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
    
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    
    var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
    
    var _createClass3 = _interopRequireDefault(_createClass2);
    
    var _browserDetection = __webpack_require__(/*! ../../../resources/dev/js/utils/browserDetection */ "./src/main/webapp/resources/dev/js/utils/browserDetection.js");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var OffersContainer = function () {
      function OffersContainer(element) {
        (0, _classCallCheck3.default)(this, OffersContainer);
    
        this.element = element;
        this.$element = $(element);
    
        this._overlayFlag = false;
        this._breakpointSize = 'large';
        this._largeDeskCustomBP = 1524;
    
        this.uiSelectors = {
          offerItems: [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('.offer'))),
          offerDetailsLink: [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('[data-modal-trigger]'))),
          offerInfo: [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('.offerInfo')))
        };
    
        this._initEnquire();
    
        if (this._breakpointSize === 'large') {
          window.setTimeout(this._resizeOfferFinanceBoxes.bind(this), 1000);
        } else if (this._breakpointSize === 'medium') {
          window.setTimeout(this._matchOfferFinanceBoxesHeight.bind(this), 1000);
        }
    
        this._resizeEvents();
        this._modals();
      }
    
      (0, _createClass3.default)(OffersContainer, [{
        key: '_initEnquire',
        value: function _initEnquire() {
          var _this = this;
    
          // Screens above the Large BP
          enquire.register('screen and (min-width:' + this._largeDeskCustomBP + 'px)', {
            match: function match() {
              _this._breakpointSize = 'large-desk';
            }
          });
    
          // Screens at the large break point.
          enquire.register('screen and (min-width: ' + (_browserDetection.breakpoints.medium + 1) + 'px) and (max-width: ' + (this._largeDeskCustomBP - 1) + 'px)', {
            match: function match() {
              _this._breakpointSize = 'large';
            }
          });
    
          // Screens at the small breakpoint
          enquire.register('screen and (min-width: ' + (_browserDetection.breakpoints.small + 1) + 'px) and (max-width: ' + _browserDetection.breakpoints.medium + 'px)', {
            match: function match() {
              _this._resetOfferFinanceBoxes();
              _this._breakpointSize = 'medium';
            }
          });
    
          enquire.register('screen and (max-width: ' + _browserDetection.breakpoints.small + 'px)', {
            match: function match() {
              _this._breakpointSize = 'small';
              _this._resetOfferFinanceBoxes();
            }
          });
        }
      }, {
        key: '_resizeEvents',
        value: function _resizeEvents() {
          var _this2 = this;
    
          $(window).smartresize(function () {
            if (_this2._breakpointSize === 'large') {
              _this2._resizeOfferFinanceBoxes();
            } else if (_this2._breakpointSize === 'medium') {
              _this2._matchOfferFinanceBoxesHeight();
            }
          });
        }
      }, {
        key: '_modals',
        value: function _modals() {
          this.uiSelectors.offerDetailsLink.forEach(function (el) {
            var closeLabel = el.getAttribute('data-close-label');
            var $element = $(el);
            $element.Modal({
              closeLabel: closeLabel
            });
    
            el.addEventListener('click', function (event) {
              var button = $(event.currentTarget);
              button.Modal('open', button.next().get(0));
            });
          });
        }
      }, {
        key: '_resizeOfferFinanceBoxes',
        value: function _resizeOfferFinanceBoxes() {
          this.uiSelectors.offerItems.forEach(function (element) {
            var height = 0;
            var $offerInfoHeight = 0;
            var $offerInfo = element.querySelectorAll('.offerInfo');
            var $offerImage = element.querySelector('.cmp-offersContainer__picture');
            var $offerDescription = element.querySelector('.offerDescription');
            var $offerImageHeight = parseInt($offerImage.clientHeight, 10);
            var $offerDescriptionHeight = parseInt($offerDescription.clientHeight, 10);
    
            Array.prototype.forEach.call($offerInfo, function (el) {
              el.style.height = ''; // eslint-disable-line no-param-reassign
    
              height = parseInt(el.offsetHeight, 10);
              $offerInfoHeight = height > $offerInfoHeight ? height : $offerInfoHeight;
            });
    
            if ($offerDescriptionHeight > $offerInfoHeight + $offerImageHeight) {
              Array.prototype.forEach.call($offerInfo, function (el) {
                var financeBox = el;
                financeBox.style.height = $offerDescriptionHeight - $offerImageHeight + 'px';
              });
            }
          });
        }
      }, {
        key: '_matchOfferFinanceBoxesHeight',
        value: function _matchOfferFinanceBoxesHeight() {
          this.uiSelectors.offerItems.forEach(function (element) {
            var height = 0;
            var maxHeight = 0;
            var $offerInfoHeight = 0;
    
            var $offerInfo = element.querySelectorAll('.offerInfo');
    
            Array.prototype.forEach.call($offerInfo, function (el) {
              el.style.height = ''; // eslint-disable-line no-param-reassign
    
              height = parseInt(el.offsetHeight, 10);
              $offerInfoHeight = height > $offerInfoHeight ? height : $offerInfoHeight;
            });
    
            if (maxHeight < $offerInfoHeight) {
              maxHeight = $offerInfoHeight;
              Array.prototype.forEach.call($offerInfo, function (el) {
                var financeBox = el;
                financeBox.style.height = maxHeight + 'px';
              });
            }
          });
        }
      }, {
        key: '_resetOfferFinanceBoxes',
        value: function _resetOfferFinanceBoxes() {
          this.uiSelectors.offerInfo.forEach(function (element) {
            var financeBox = element;
            financeBox.style.height = '';
          });
        }
      }]);
      return OffersContainer;
    }(); /* global enquire */
    
    var OffersContainerElements = document.querySelectorAll('.cmp-offersContainer');
    if (OffersContainerElements.length) {
      Array.prototype.forEach.call(OffersContainerElements, function (el) {
        return new OffersContainer(el);
      });
    }
    
    /***/ }),
    
    /***/ "./src/main/webapp/resources/dev/js/utils/browserDetection.js":
    /*!********************************************************************!*\
      !*** ./src/main/webapp/resources/dev/js/utils/browserDetection.js ***!
      \********************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
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
    
    /***/ })
    
    /******/ });
