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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/webapp/components/InteractiveNumberedImage/js/InteractiveNumberedImage.js");
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
  
  /***/ "./node_modules/babel-runtime/core-js/symbol.js":
  /*!******************************************************!*\
    !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
  /*!***************************************************************!*\
    !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
    \***************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };
  
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
  
  /***/ "./node_modules/babel-runtime/helpers/typeof.js":
  /*!******************************************************!*\
    !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js":
  /*!************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js ***!
    \************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  __webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js");
  __webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js");
  __webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
  __webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js");
  module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Symbol;
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js ***!
    \***************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  __webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
  __webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
  module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');
  
  
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js":
  /*!************************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
    \************************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  module.exports = function () { /* empty */ };
  
  
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js ***!
    \***************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js":
  /*!**************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js ***!
    \**************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  // 7.2.2 IsArray(argument)
  var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
  module.exports = Array.isArray || function isArray(arg) {
    return cof(arg) == 'Array';
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js ***!
    \***************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  module.exports = function (done, value) {
    return { value: value, done: !!done };
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js ***!
    \**********************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
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
    setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {}          // weak collections IDs
    } });
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js ***!
    \*****************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
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
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
    \*********************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
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
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js ***!
    \*****************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
  var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
  var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');
  
  exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $keys(O, hiddenKeys);
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js ***!
    \*****************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  exports.f = Object.getOwnPropertySymbols;
  
  
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js":
  /*!****************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js ***!
    \****************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  exports.f = {}.propertyIsEnumerable;
  
  
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js":
  /*!****************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js ***!
    \****************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
  var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
  var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");
  var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
  module.exports = function (name) {
    var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js ***!
    \*************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");
  
  
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js ***!
    \***********************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
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
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js ***!
    \*************************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  
  
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js ***!
    \***************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
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
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
    \******************************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  __webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
    \**************************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  __webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('observable');
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js ***!
    \*********************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
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
  
  
  /***/ }),
  
  /***/ "./node_modules/gsap/TweenLite.js":
  /*!****************************************!*\
    !*** ./node_modules/gsap/TweenLite.js ***!
    \****************************************/
  /*! exports provided: _gsScope, TweenLite, globals, default, SimpleTimeline, Animation, Ease, Linear, Power0, Power1, Power2, Power3, Power4, TweenPlugin, EventDispatcher */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_gsScope", function() { return _gsScope; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return TweenLite; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweenLite; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTimeline", function() { return SimpleTimeline; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return Ease; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return Linear; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return Power0; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return Power1; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return Power2; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return Power3; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return Power4; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenPlugin", function() { return TweenPlugin; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return EventDispatcher; });
  /*!
   * VERSION: 2.1.3
   * DATE: 2019-05-17
   * UPDATES AND DOCS AT: http://greensock.com
   *
   * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
   * This work is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   *
   * @author: Jack Doyle, jack@greensock.com
   */
  /* eslint-disable */
  
  /* ES6 changes:
    - declare and export _gsScope at top.
    - set var TweenLite = the result of the main function
    - export default TweenLite at the bottom
    - return TweenLite at the bottom of the main function
    - pass in _gsScope as the first parameter of the main function (which is actually at the bottom)
    - remove the "export to multiple environments" in Definition().
   */
  var _gsScope = (typeof(window) !== "undefined") ? window : (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : undefined || {};
  
  var TweenLite = (function(window) {
  
      "use strict";
      var _exports = {},
        _doc = window.document,
        _globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
      if (_globals.TweenLite) {
        return _globals.TweenLite; //in case the core set of classes is already loaded, don't instantiate twice.
      }
      var _namespace = function(ns) {
          var a = ns.split("."),
            p = _globals, i;
          for (i = 0; i < a.length; i++) {
            p[a[i]] = p = p[a[i]] || {};
          }
          return p;
        },
        gs = _namespace("com.greensock"),
        _tinyNum = 0.00000001,
        _slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
          var b = [],
            l = a.length,
            i;
          for (i = 0; i !== l; b.push(a[i++])) {}
          return b;
        },
        _emptyFunc = function() {},
        _isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
          var toString = Object.prototype.toString,
            array = toString.call([]);
          return function(obj) {
            return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
          };
        }()),
        a, i, p, _ticker, _tickerActive,
        _defLookup = {},
  
        /**
         * @constructor
         * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
         * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
         * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
         * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
         *
         * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
         * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
         * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
         * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
         * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
         * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
         * sandbox the banner one like:
         *
         * <script>
         *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
         * </script>
         * <script src="js/greensock/v1.7/TweenMax.js"></script>
         * <script>
         *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
         * </script>
         * <script src="js/greensock/v1.6/TweenMax.js"></script>
         * <script>
         *     gs.TweenLite.to(...); //would use v1.7
         *     TweenLite.to(...); //would use v1.6
         * </script>
         *
         * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
         * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
         * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
         * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
         */
        Definition = function(ns, dependencies, func, global) {
          this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
          _defLookup[ns] = this;
          this.gsClass = null;
          this.func = func;
          var _classes = [];
          this.check = function(init) {
            var i = dependencies.length,
              missing = i,
              cur, a, n, cl;
            while (--i > -1) {
              if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
                _classes[i] = cur.gsClass;
                missing--;
              } else if (init) {
                cur.sc.push(this);
              }
            }
            if (missing === 0 && func) {
              a = ("com.greensock." + ns).split(".");
              n = a.pop();
              cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);
  
              //exports to multiple environments
              if (global) {
                _globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
              }
              for (i = 0; i < this.sc.length; i++) {
                this.sc[i].check();
              }
            }
          };
          this.check(true);
        },
  
        //used to create Definition instances (which basically registers a class that has dependencies).
        _gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
          return new Definition(ns, dependencies, func, global);
        },
  
        //a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
        _class = gs._class = function(ns, func, global) {
          func = func || function() {};
          _gsDefine(ns, [], function(){ return func; }, global);
          return func;
        };
  
      _gsDefine.globals = _globals;
  
  
  
  /*
   * ----------------------------------------------------------------
   * Ease
   * ----------------------------------------------------------------
   */
      var _baseParams = [0, 0, 1, 1],
        Ease = _class("easing.Ease", function(func, extraParams, type, power) {
          this._func = func;
          this._type = type || 0;
          this._power = power || 0;
          this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
        }, true),
        _easeMap = Ease.map = {},
        _easeReg = Ease.register = function(ease, names, types, create) {
          var na = names.split(","),
            i = na.length,
            ta = (types || "easeIn,easeOut,easeInOut").split(","),
            e, name, j, type;
          while (--i > -1) {
            name = na[i];
            e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
            j = ta.length;
            while (--j > -1) {
              type = ta[j];
              _easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
            }
          }
        };
  
      p = Ease.prototype;
      p._calcEnd = false;
      p.getRatio = function(p) {
        if (this._func) {
          this._params[0] = p;
          return this._func.apply(null, this._params);
        }
        var t = this._type,
          pw = this._power,
          r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
        if (pw === 1) {
          r *= r;
        } else if (pw === 2) {
          r *= r * r;
        } else if (pw === 3) {
          r *= r * r * r;
        } else if (pw === 4) {
          r *= r * r * r * r;
        }
        return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
      };
  
      //create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
      a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
      i = a.length;
      while (--i > -1) {
        p = a[i]+",Power"+i;
        _easeReg(new Ease(null,null,1,i), p, "easeOut", true);
        _easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
        _easeReg(new Ease(null,null,3,i), p, "easeInOut");
      }
      _easeMap.linear = gs.easing.Linear.easeIn;
      _easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks
  
  
  /*
   * ----------------------------------------------------------------
   * EventDispatcher
   * ----------------------------------------------------------------
   */
      var EventDispatcher = _class("events.EventDispatcher", function(target) {
        this._listeners = {};
        this._eventTarget = target || this;
      });
      p = EventDispatcher.prototype;
  
      p.addEventListener = function(type, callback, scope, useParam, priority) {
        priority = priority || 0;
        var list = this._listeners[type],
          index = 0,
          listener, i;
        if (this === _ticker && !_tickerActive) {
          _ticker.wake();
        }
        if (list == null) {
          this._listeners[type] = list = [];
        }
        i = list.length;
        while (--i > -1) {
          listener = list[i];
          if (listener.c === callback && listener.s === scope) {
            list.splice(i, 1);
          } else if (index === 0 && listener.pr < priority) {
            index = i + 1;
          }
        }
        list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
      };
  
      p.removeEventListener = function(type, callback) {
        var list = this._listeners[type], i;
        if (list) {
          i = list.length;
          while (--i > -1) {
            if (list[i].c === callback) {
              list.splice(i, 1);
              return;
            }
          }
        }
      };
  
      p.dispatchEvent = function(type) {
        var list = this._listeners[type],
          i, t, listener;
        if (list) {
          i = list.length;
          if (i > 1) {
            list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
          }
          t = this._eventTarget;
          while (--i > -1) {
            listener = list[i];
            if (listener) {
              if (listener.up) {
                listener.c.call(listener.s || t, {type:type, target:t});
              } else {
                listener.c.call(listener.s || t);
              }
            }
          }
        }
      };
  
  
  /*
   * ----------------------------------------------------------------
   * Ticker
   * ----------------------------------------------------------------
   */
       var _reqAnimFrame = window.requestAnimationFrame,
        _cancelAnimFrame = window.cancelAnimationFrame,
        _getTime = Date.now || function() {return new Date().getTime();},
        _lastUpdate = _getTime();
  
      //now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
      a = ["ms","moz","webkit","o"];
      i = a.length;
      while (--i > -1 && !_reqAnimFrame) {
        _reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
        _cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
      }
  
      _class("Ticker", function(fps, useRAF) {
        var _self = this,
          _startTime = _getTime(),
          _useRAF = (useRAF !== false && _reqAnimFrame) ? "auto" : false,
          _lagThreshold = 500,
          _adjustedLag = 33,
          _tickWord = "tick", //helps reduce gc burden
          _fps, _req, _id, _gap, _nextTime,
          _tick = function(manual) {
            var elapsed = _getTime() - _lastUpdate,
              overlap, dispatch;
            if (elapsed > _lagThreshold) {
              _startTime += elapsed - _adjustedLag;
            }
            _lastUpdate += elapsed;
            _self.time = (_lastUpdate - _startTime) / 1000;
            overlap = _self.time - _nextTime;
            if (!_fps || overlap > 0 || manual === true) {
              _self.frame++;
              _nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
              dispatch = true;
            }
            if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
              _id = _req(_tick);
            }
            if (dispatch) {
              _self.dispatchEvent(_tickWord);
            }
          };
  
        EventDispatcher.call(_self);
        _self.time = _self.frame = 0;
        _self.tick = function() {
          _tick(true);
        };
  
        _self.lagSmoothing = function(threshold, adjustedLag) {
          if (!arguments.length) { //if lagSmoothing() is called with no arguments, treat it like a getter that returns a boolean indicating if it's enabled or not. This is purposely undocumented and is for internal use.
            return (_lagThreshold < 1 / _tinyNum);
          }
          _lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
          _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
        };
  
        _self.sleep = function() {
          if (_id == null) {
            return;
          }
          if (!_useRAF || !_cancelAnimFrame) {
            clearTimeout(_id);
          } else {
            _cancelAnimFrame(_id);
          }
          _req = _emptyFunc;
          _id = null;
          if (_self === _ticker) {
            _tickerActive = false;
          }
        };
  
        _self.wake = function(seamless) {
          if (_id !== null) {
            _self.sleep();
          } else if (seamless) {
            _startTime += -_lastUpdate + (_lastUpdate = _getTime());
          } else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
            _lastUpdate = _getTime() - _lagThreshold + 5;
          }
          _req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
          if (_self === _ticker) {
            _tickerActive = true;
          }
          _tick(2);
        };
  
        _self.fps = function(value) {
          if (!arguments.length) {
            return _fps;
          }
          _fps = value;
          _gap = 1 / (_fps || 60);
          _nextTime = this.time + _gap;
          _self.wake();
        };
  
        _self.useRAF = function(value) {
          if (!arguments.length) {
            return _useRAF;
          }
          _self.sleep();
          _useRAF = value;
          _self.fps(_fps);
        };
        _self.fps(fps);
  
        //a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
        setTimeout(function() {
          if (_useRAF === "auto" && _self.frame < 5 && (_doc || {}).visibilityState !== "hidden") {
            _self.useRAF(false);
          }
        }, 1500);
      });
  
      p = gs.Ticker.prototype = new gs.events.EventDispatcher();
      p.constructor = gs.Ticker;
  
  
  /*
   * ----------------------------------------------------------------
   * Animation
   * ----------------------------------------------------------------
   */
      var Animation = _class("core.Animation", function(duration, vars) {
          this.vars = vars = vars || {};
          this._duration = this._totalDuration = duration || 0;
          this._delay = Number(vars.delay) || 0;
          this._timeScale = 1;
          this._active = !!vars.immediateRender;
          this.data = vars.data;
          this._reversed = !!vars.reversed;
  
          if (!_rootTimeline) {
            return;
          }
          if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
            _ticker.wake();
          }
  
          var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
          tl.add(this, tl._time);
  
          if (this.vars.paused) {
            this.paused(true);
          }
        });
  
      _ticker = Animation.ticker = new gs.Ticker();
      p = Animation.prototype;
      p._dirty = p._gc = p._initted = p._paused = false;
      p._totalTime = p._time = 0;
      p._rawPrevTime = -1;
      p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
      p._paused = false;
  
  
      //some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
      var _checkTimeout = function() {
          if (_tickerActive && _getTime() - _lastUpdate > 2000 && ((_doc || {}).visibilityState !== "hidden" || !_ticker.lagSmoothing())) { //note: if the tab is hidden, we should still wake if lagSmoothing has been disabled.
            _ticker.wake();
          }
          var t = setTimeout(_checkTimeout, 2000);
          if (t.unref) {
            // allows a node process to exit even if the timeout’s callback hasn't been invoked. Without it, the node process could hang as this function is called every two seconds.
            t.unref();
          }
        };
      _checkTimeout();
  
  
      p.play = function(from, suppressEvents) {
        if (from != null) {
          this.seek(from, suppressEvents);
        }
        return this.reversed(false).paused(false);
      };
  
      p.pause = function(atTime, suppressEvents) {
        if (atTime != null) {
          this.seek(atTime, suppressEvents);
        }
        return this.paused(true);
      };
  
      p.resume = function(from, suppressEvents) {
        if (from != null) {
          this.seek(from, suppressEvents);
        }
        return this.paused(false);
      };
  
      p.seek = function(time, suppressEvents) {
        return this.totalTime(Number(time), suppressEvents !== false);
      };
  
      p.restart = function(includeDelay, suppressEvents) {
        return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
      };
  
      p.reverse = function(from, suppressEvents) {
        if (from != null) {
          this.seek((from || this.totalDuration()), suppressEvents);
        }
        return this.reversed(true).paused(false);
      };
  
      p.render = function(time, suppressEvents, force) {
        //stub - we override this method in subclasses.
      };
  
      p.invalidate = function() {
        this._time = this._totalTime = 0;
        this._initted = this._gc = false;
        this._rawPrevTime = -1;
        if (this._gc || !this.timeline) {
          this._enabled(true);
        }
        return this;
      };
  
      p.isActive = function() {
        var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
          startTime = this._startTime,
          rawTime;
        return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - _tinyNum));
      };
  
      p._enabled = function (enabled, ignoreTimeline) {
        if (!_tickerActive) {
          _ticker.wake();
        }
        this._gc = !enabled;
        this._active = this.isActive();
        if (ignoreTimeline !== true) {
          if (enabled && !this.timeline) {
            this._timeline.add(this, this._startTime - this._delay);
          } else if (!enabled && this.timeline) {
            this._timeline._remove(this, true);
          }
        }
        return false;
      };
  
  
      p._kill = function(vars, target) {
        return this._enabled(false, false);
      };
  
      p.kill = function(vars, target) {
        this._kill(vars, target);
        return this;
      };
  
      p._uncache = function(includeSelf) {
        var tween = includeSelf ? this : this.timeline;
        while (tween) {
          tween._dirty = true;
          tween = tween.timeline;
        }
        return this;
      };
  
      p._swapSelfInParams = function(params) {
        var i = params.length,
          copy = params.concat();
        while (--i > -1) {
          if (params[i] === "{self}") {
            copy[i] = this;
          }
        }
        return copy;
      };
  
      p._callback = function(type) {
        var v = this.vars,
          callback = v[type],
          params = v[type + "Params"],
          scope = v[type + "Scope"] || v.callbackScope || this,
          l = params ? params.length : 0;
        switch (l) { //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
          case 0: callback.call(scope); break;
          case 1: callback.call(scope, params[0]); break;
          case 2: callback.call(scope, params[0], params[1]); break;
          default: callback.apply(scope, params);
        }
      };
  
  //----Animation getters/setters --------------------------------------------------------
  
      p.eventCallback = function(type, callback, params, scope) {
        if ((type || "").substr(0,2) === "on") {
          var v = this.vars;
          if (arguments.length === 1) {
            return v[type];
          }
          if (callback == null) {
            delete v[type];
          } else {
            v[type] = callback;
            v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
            v[type + "Scope"] = scope;
          }
          if (type === "onUpdate") {
            this._onUpdate = callback;
          }
        }
        return this;
      };
  
      p.delay = function(value) {
        if (!arguments.length) {
          return this._delay;
        }
        if (this._timeline.smoothChildTiming) {
          this.startTime( this._startTime + value - this._delay );
        }
        this._delay = value;
        return this;
      };
  
      p.duration = function(value) {
        if (!arguments.length) {
          this._dirty = false;
          return this._duration;
        }
        this._duration = this._totalDuration = value;
        this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
        if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
          this.totalTime(this._totalTime * (value / this._duration), true);
        }
        return this;
      };
  
      p.totalDuration = function(value) {
        this._dirty = false;
        return (!arguments.length) ? this._totalDuration : this.duration(value);
      };
  
      p.time = function(value, suppressEvents) {
        if (!arguments.length) {
          return this._time;
        }
        if (this._dirty) {
          this.totalDuration();
        }
        return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
      };
  
      p.totalTime = function(time, suppressEvents, uncapped) {
        if (!_tickerActive) {
          _ticker.wake();
        }
        if (!arguments.length) {
          return this._totalTime;
        }
        if (this._timeline) {
          if (time < 0 && !uncapped) {
            time += this.totalDuration();
          }
          if (this._timeline.smoothChildTiming) {
            if (this._dirty) {
              this.totalDuration();
            }
            var totalDuration = this._totalDuration,
              tl = this._timeline;
            if (time > totalDuration && !uncapped) {
              time = totalDuration;
            }
            this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
            if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
              this._uncache(false);
            }
            //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
            if (tl._timeline) {
              while (tl._timeline) {
                if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
                  tl.totalTime(tl._totalTime, true);
                }
                tl = tl._timeline;
              }
            }
          }
          if (this._gc) {
            this._enabled(true, false);
          }
          if (this._totalTime !== time || this._duration === 0) {
            if (_lazyTweens.length) {
              _lazyRender();
            }
            this.render(time, suppressEvents, false);
            if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
              _lazyRender();
            }
          }
        }
        return this;
      };
  
      p.progress = p.totalProgress = function(value, suppressEvents) {
        var duration = this.duration();
        return (!arguments.length) ? (duration ? this._time / duration : this.ratio) : this.totalTime(duration * value, suppressEvents);
      };
  
      p.startTime = function(value) {
        if (!arguments.length) {
          return this._startTime;
        }
        if (value !== this._startTime) {
          this._startTime = value;
          if (this.timeline) if (this.timeline._sortChildren) {
            this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
          }
        }
        return this;
      };
  
      p.endTime = function(includeRepeats) {
        return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
      };
  
      p.timeScale = function(value) {
        if (!arguments.length) {
          return this._timeScale;
        }
        var pauseTime, t;
        value = value || _tinyNum; //can't allow zero because it'll throw the math off
        if (this._timeline && this._timeline.smoothChildTiming) {
          pauseTime = this._pauseTime;
          t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
          this._startTime = t - ((t - this._startTime) * this._timeScale / value);
        }
        this._timeScale = value;
        t = this.timeline;
        while (t && t.timeline) { //must update the duration/totalDuration of all ancestor timelines immediately in case in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
          t._dirty = true;
          t.totalDuration();
          t = t.timeline;
        }
        return this;
      };
  
      p.reversed = function(value) {
        if (!arguments.length) {
          return this._reversed;
        }
        if (value != this._reversed) {
          this._reversed = value;
          this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
        }
        return this;
      };
  
      p.paused = function(value) {
        if (!arguments.length) {
          return this._paused;
        }
        var tl = this._timeline,
          raw, elapsed;
        if (value != this._paused) if (tl) {
          if (!_tickerActive && !value) {
            _ticker.wake();
          }
          raw = tl.rawTime();
          elapsed = raw - this._pauseTime;
          if (!value && tl.smoothChildTiming) {
            this._startTime += elapsed;
            this._uncache(false);
          }
          this._pauseTime = value ? raw : null;
          this._paused = value;
          this._active = this.isActive();
          if (!value && elapsed !== 0 && this._initted && this.duration()) {
            raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
            this.render(raw, (raw === this._totalTime), true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
          }
        }
        if (this._gc && !value) {
          this._enabled(true, false);
        }
        return this;
      };
  
  
  /*
   * ----------------------------------------------------------------
   * SimpleTimeline
   * ----------------------------------------------------------------
   */
      var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
        Animation.call(this, 0, vars);
        this.autoRemoveChildren = this.smoothChildTiming = true;
      });
  
      p = SimpleTimeline.prototype = new Animation();
      p.constructor = SimpleTimeline;
      p.kill()._gc = false;
      p._first = p._last = p._recent = null;
      p._sortChildren = false;
  
      p.add = p.insert = function(child, position, align, stagger) {
        var prevTween, st;
        child._startTime = Number(position || 0) + child._delay;
        if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
          child._pauseTime = this.rawTime() - (child._timeline.rawTime() - child._pauseTime);
        }
        if (child.timeline) {
          child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
        }
        child.timeline = child._timeline = this;
        if (child._gc) {
          child._enabled(true, true);
        }
        prevTween = this._last;
        if (this._sortChildren) {
          st = child._startTime;
          while (prevTween && prevTween._startTime > st) {
            prevTween = prevTween._prev;
          }
        }
        if (prevTween) {
          child._next = prevTween._next;
          prevTween._next = child;
        } else {
          child._next = this._first;
          this._first = child;
        }
        if (child._next) {
          child._next._prev = child;
        } else {
          this._last = child;
        }
        child._prev = prevTween;
        this._recent = child;
        if (this._timeline) {
          this._uncache(true);
        }
        return this;
      };
  
      p._remove = function(tween, skipDisable) {
        if (tween.timeline === this) {
          if (!skipDisable) {
            tween._enabled(false, true);
          }
  
          if (tween._prev) {
            tween._prev._next = tween._next;
          } else if (this._first === tween) {
            this._first = tween._next;
          }
          if (tween._next) {
            tween._next._prev = tween._prev;
          } else if (this._last === tween) {
            this._last = tween._prev;
          }
          tween._next = tween._prev = tween.timeline = null;
          if (tween === this._recent) {
            this._recent = this._last;
          }
  
          if (this._timeline) {
            this._uncache(true);
          }
        }
        return this;
      };
  
      p.render = function(time, suppressEvents, force) {
        var tween = this._first,
          next;
        this._totalTime = this._time = this._rawPrevTime = time;
        while (tween) {
          next = tween._next; //record it here because the value could change after rendering...
          if (tween._active || (time >= tween._startTime && !tween._paused && !tween._gc)) {
            if (!tween._reversed) {
              tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
            } else {
              tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
            }
          }
          tween = next;
        }
      };
  
      p.rawTime = function() {
        if (!_tickerActive) {
          _ticker.wake();
        }
        return this._totalTime;
      };
  
  /*
   * ----------------------------------------------------------------
   * TweenLite
   * ----------------------------------------------------------------
   */
      var TweenLite = _class("TweenLite", function(target, duration, vars) {
          Animation.call(this, duration, vars);
          this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
  
          if (target == null) {
            throw "Cannot tween a null target.";
          }
  
          this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
  
          var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
            overwrite = this.vars.overwrite,
            i, targ, targets;
  
          this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];
  
          if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
            this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
            this._propLookup = [];
            this._siblings = [];
            for (i = 0; i < targets.length; i++) {
              targ = targets[i];
              if (!targ) {
                targets.splice(i--, 1);
                continue;
              } else if (typeof(targ) === "string") {
                targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
                if (typeof(targ) === "string") {
                  targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
                }
                continue;
              } else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
                targets.splice(i--, 1);
                this._targets = targets = targets.concat(_slice(targ));
                continue;
              }
              this._siblings[i] = _register(targ, this, false);
              if (overwrite === 1) if (this._siblings[i].length > 1) {
                _applyOverwrite(targ, this, null, 1, this._siblings[i]);
              }
            }
  
          } else {
            this._propLookup = {};
            this._siblings = _register(target, this, false);
            if (overwrite === 1) if (this._siblings.length > 1) {
              _applyOverwrite(target, this, null, 1, this._siblings);
            }
          }
          if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
            this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
            this.render(Math.min(0, -this._delay)); //in case delay is negative
          }
        }, true),
        _isSelector = function(v) {
          return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
        },
        _autoCSS = function(vars, target) {
          var css = {},
            p;
          for (p in vars) {
            if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
              css[p] = vars[p];
              delete vars[p];
            }
          }
          vars.css = css;
        };
  
      p = TweenLite.prototype = new Animation();
      p.constructor = TweenLite;
      p.kill()._gc = false;
  
  //----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------
  
      p.ratio = 0;
      p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
      p._notifyPluginsOfEnabled = p._lazy = false;
  
      TweenLite.version = "2.1.3";
      TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
      TweenLite.defaultOverwrite = "auto";
      TweenLite.ticker = _ticker;
      TweenLite.autoSleep = 120;
      TweenLite.lagSmoothing = function(threshold, adjustedLag) {
        _ticker.lagSmoothing(threshold, adjustedLag);
      };
  
      TweenLite.selector = window.$ || window.jQuery || function(e) {
        var selector = window.$ || window.jQuery;
        if (selector) {
          TweenLite.selector = selector;
          return selector(e);
        }
        if (!_doc) { //in some dev environments (like Angular 6), GSAP gets loaded before the document is defined! So re-query it here if/when necessary.
          _doc = window.document;
        }
        return (!_doc) ? e : (_doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
      };
  
      var _lazyTweens = [],
        _lazyLookup = {},
        _numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
        _relExp = /[\+-]=-?[\.\d]/,
        //_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
        _setRatio = function(v) {
          var pt = this._firstPT,
            min = 0.000001,
            val;
          while (pt) {
            val = !pt.blob ? pt.c * v + pt.s : (v === 1 && this.end != null) ? this.end : v ? this.join("") : this.start;
            if (pt.m) {
              val = pt.m.call(this._tween, val, this._target || pt.t, this._tween);
            } else if (val < min) if (val > -min && !pt.blob) { //prevents issues with converting very small numbers to strings in the browser
              val = 0;
            }
            if (!pt.f) {
              pt.t[pt.p] = val;
            } else if (pt.fp) {
              pt.t[pt.p](pt.fp, val);
            } else {
              pt.t[pt.p](val);
            }
            pt = pt._next;
          }
        },
        _blobRound = function(v) {
          return (((v * 1000) | 0) / 1000) + "";
        },
        //compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
        _blobDif = function(start, end, filter, pt) {
          var a = [],
            charIndex = 0,
            s = "",
            color = 0,
            startNums, endNums, num, i, l, nonNumbers, currentNum;
          a.start = start;
          a.end = end;
          start = a[0] = start + ""; //ensure values are strings
          end = a[1] = end + "";
          if (filter) {
            filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
            start = a[0];
            end = a[1];
          }
          a.length = 0;
          startNums = start.match(_numbersExp) || [];
          endNums = end.match(_numbersExp) || [];
          if (pt) {
            pt._next = null;
            pt.blob = 1;
            a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
          }
          l = endNums.length;
          for (i = 0; i < l; i++) {
            currentNum = endNums[i];
            nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex)-charIndex);
            s += (nonNumbers || !i) ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            charIndex += nonNumbers.length;
            if (color) { //sense rgba() values and round them.
              color = (color + 1) % 5;
            } else if (nonNumbers.substr(-5) === "rgba(") {
              color = 1;
            }
            if (currentNum === startNums[i] || startNums.length <= i) {
              s += currentNum;
            } else {
              if (s) {
                a.push(s);
                s = "";
              }
              num = parseFloat(startNums[i]);
              a.push(num);
              a._firstPT = {_next: a._firstPT, t:a, p: a.length-1, s:num, c:((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0, f:0, m:(color && color < 4) ? Math.round : _blobRound}; //limiting to 3 decimal places and casting as a string can really help performance when array.join() is called!
              //note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
            }
            charIndex += currentNum.length;
          }
          s += end.substr(charIndex);
          if (s) {
            a.push(s);
          }
          a.setRatio = _setRatio;
          if (_relExp.test(end)) { //if the end string contains relative values, delete it so that on the final render (in _setRatio()), we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
            a.end = null;
          }
          return a;
        },
        //note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
        _addPropTween = function(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
          if (typeof(end) === "function") {
            end = end(index || 0, target);
          }
          var type = typeof(target[prop]),
            getterName = (type !== "function") ? "" : ((prop.indexOf("set") || typeof(target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3)),
            s = (start !== "get") ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
            isRelative = (typeof(end) === "string" && end.charAt(1) === "="),
            pt = {t:target, p:prop, s:s, f:(type === "function"), pg:0, n:overwriteProp || prop, m:(!mod ? 0 : (typeof(mod) === "function") ? mod : Math.round), pr:0, c:isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0},
            blob;
  
          if (typeof(s) !== "number" || (typeof(end) !== "number" && !isRelative)) {
            if (funcParam || isNaN(s) || (!isRelative && isNaN(end)) || typeof(s) === "boolean" || typeof(end) === "boolean") {
              //a blob (string that has multiple numbers in it)
              pt.fp = funcParam;
              blob = _blobDif(s, (isRelative ? (parseFloat(pt.s) + pt.c) + (pt.s + "").replace(/[0-9\-\.]/g, "") : end), stringFilter || TweenLite.defaultStringFilter, pt);
              pt = {t: blob, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: overwriteProp || prop, pr: 0, m: 0}; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
            } else {
              pt.s = parseFloat(s);
              if (!isRelative) {
                pt.c = (parseFloat(end) - pt.s) || 0;
              }
            }
          }
          if (pt.c) { //only add it to the linked list if there's a change.
            if ((pt._next = this._firstPT)) {
              pt._next._prev = pt;
            }
            this._firstPT = pt;
            return pt;
          }
        },
        _internals = TweenLite._internals = {isArray:_isArray, isSelector:_isSelector, lazyTweens:_lazyTweens, blobDif:_blobDif}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
        _plugins = TweenLite._plugins = {},
        _tweenLookup = _internals.tweenLookup = {},
        _tweenLookupNum = 0,
        _reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1, lazy:1, onOverwrite:1, callbackScope:1, stringFilter:1, id:1, yoyoEase:1, stagger:1},
        _overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
        _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
        _rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
        _nextGCFrame = 30,
        _lazyRender = _internals.lazyRender = function() {
          var l = _lazyTweens.length,
            i, tween;
          _lazyLookup = {};
          for (i = 0; i < l; i++) {
            tween = _lazyTweens[i];
            if (tween && tween._lazy !== false) {
              tween.render(tween._lazy[0], tween._lazy[1], true);
              tween._lazy = false;
            }
          }
          _lazyTweens.length = 0;
        };
  
      _rootTimeline._startTime = _ticker.time;
      _rootFramesTimeline._startTime = _ticker.frame;
      _rootTimeline._active = _rootFramesTimeline._active = true;
      setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".
  
      Animation._updateRoot = TweenLite.render = function() {
          var i, a, p;
          if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
            _lazyRender();
          }
          _rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
          _rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
          if (_lazyTweens.length) {
            _lazyRender();
          }
          if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
            _nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
            for (p in _tweenLookup) {
              a = _tweenLookup[p].tweens;
              i = a.length;
              while (--i > -1) {
                if (a[i]._gc) {
                  a.splice(i, 1);
                }
              }
              if (a.length === 0) {
                delete _tweenLookup[p];
              }
            }
            //if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
            p = _rootTimeline._first;
            if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
              while (p && p._paused) {
                p = p._next;
              }
              if (!p) {
                _ticker.sleep();
              }
            }
          }
        };
  
      _ticker.addEventListener("tick", Animation._updateRoot);
  
      var _register = function(target, tween, scrub) {
          var id = target._gsTweenID, a, i;
          if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
            _tweenLookup[id] = {target:target, tweens:[]};
          }
          if (tween) {
            a = _tweenLookup[id].tweens;
            a[(i = a.length)] = tween;
            if (scrub) {
              while (--i > -1) {
                if (a[i] === tween) {
                  a.splice(i, 1);
                }
              }
            }
          }
          return _tweenLookup[id].tweens;
        },
        _onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
          var func = overwrittenTween.vars.onOverwrite, r1, r2;
          if (func) {
            r1 = func(overwrittenTween, overwritingTween, target, killedProps);
          }
          func = TweenLite.onOverwrite;
          if (func) {
            r2 = func(overwrittenTween, overwritingTween, target, killedProps);
          }
          return (r1 !== false && r2 !== false);
        },
        _applyOverwrite = function(target, tween, props, mode, siblings) {
          var i, changed, curTween, l;
          if (mode === 1 || mode >= 4) {
            l = siblings.length;
            for (i = 0; i < l; i++) {
              if ((curTween = siblings[i]) !== tween) {
                if (!curTween._gc) {
                  if (curTween._kill(null, target, tween)) {
                    changed = true;
                  }
                }
              } else if (mode === 5) {
                break;
              }
            }
            return changed;
          }
          //NOTE: Add tiny amount to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
          var startTime = tween._startTime + _tinyNum,
            overlaps = [],
            oCount = 0,
            zeroDur = (tween._duration === 0),
            globalStart;
          i = siblings.length;
          while (--i > -1) {
            if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
              //ignore
            } else if (curTween._timeline !== tween._timeline) {
              globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
              if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
                overlaps[oCount++] = curTween;
              }
            } else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= _tinyNum * 2)) {
              overlaps[oCount++] = curTween;
            }
          }
  
          i = oCount;
          while (--i > -1) {
            curTween = overlaps[i];
            l = curTween._firstPT; //we need to discern if there were property tweens originally; if they all get removed in the next line's _kill() call, the tween should be killed. See https://github.com/greensock/GreenSock-JS/issues/278
            if (mode === 2) if (curTween._kill(props, target, tween)) {
              changed = true;
            }
            if (mode !== 2 || (!curTween._firstPT && curTween._initted && l)) {
              if (mode !== 2 && !_onOverwrite(curTween, tween)) {
                continue;
              }
              if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
                changed = true;
              }
            }
          }
          return changed;
        },
        _checkOverlap = function(tween, reference, zeroDur) {
          var tl = tween._timeline,
            ts = tl._timeScale,
            t = tween._startTime;
          while (tl._timeline) {
            t += tl._startTime;
            ts *= tl._timeScale;
            if (tl._paused) {
              return -100;
            }
            tl = tl._timeline;
          }
          t /= ts;
          return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
        };
  
  
  //---- TweenLite instance methods -----------------------------------------------------------------------------
  
      p._init = function() {
        var v = this.vars,
          op = this._overwrittenProps,
          dur = this._duration,
          immediate = !!v.immediateRender,
          ease = v.ease,
          startAt = this._startAt,
          i, initPlugins, pt, p, startVars, l;
        if (v.startAt) {
          if (startAt) {
            startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
            startAt.kill();
          }
          startVars = {};
          for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
            startVars[p] = v.startAt[p];
          }
          startVars.data = "isStart";
          startVars.overwrite = false;
          startVars.immediateRender = true;
          startVars.lazy = (immediate && v.lazy !== false);
          startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
          startVars.onUpdate = v.onUpdate;
          startVars.onUpdateParams = v.onUpdateParams;
          startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this;
          this._startAt = TweenLite.to(this.target || {}, 0, startVars);
          if (immediate) {
            if (this._time > 0) {
              this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
            } else if (dur !== 0) {
              return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
            }
          }
        } else if (v.runBackwards && dur !== 0) {
          //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
          if (startAt) {
            startAt.render(-1, true);
            startAt.kill();
            this._startAt = null;
          } else {
            if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
              immediate = false;
            }
            pt = {};
            for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
              if (!_reservedProps[p] || p === "autoCSS") {
                pt[p] = v[p];
              }
            }
            pt.overwrite = 0;
            pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            pt.lazy = (immediate && v.lazy !== false);
            pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            this._startAt = TweenLite.to(this.target, 0, pt);
            if (!immediate) {
              this._startAt._init(); //ensures that the initial values are recorded
              this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
              if (this.vars.immediateRender) {
                this._startAt = null;
              }
            } else if (this._time === 0) {
              return;
            }
          }
        }
        this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
        if (v.easeParams instanceof Array && ease.config) {
          this._ease = ease.config.apply(ease, v.easeParams);
        }
        this._easeType = this._ease._type;
        this._easePower = this._ease._power;
        this._firstPT = null;
  
        if (this._targets) {
          l = this._targets.length;
          for (i = 0; i < l; i++) {
            if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null), i) ) {
              initPlugins = true;
            }
          }
        } else {
          initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
        }
  
        if (initPlugins) {
          TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
        }
        if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
          this._enabled(false, false);
        }
        if (v.runBackwards) {
          pt = this._firstPT;
          while (pt) {
            pt.s += pt.c;
            pt.c = -pt.c;
            pt = pt._next;
          }
        }
        this._onUpdate = v.onUpdate;
        this._initted = true;
      };
  
      p._initProps = function(target, propLookup, siblings, overwrittenProps, index) {
        var p, i, initPlugins, plugin, pt, v;
        if (target == null) {
          return false;
        }
        if (_lazyLookup[target._gsTweenID]) {
          _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
        }
  
        if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
          _autoCSS(this.vars, target);
        }
        for (p in this.vars) {
          v = this.vars[p];
          if (_reservedProps[p]) {
            if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
              this.vars[p] = v = this._swapSelfInParams(v, this);
            }
  
          } else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {
  
            //t - target 		[object]
            //p - property 		[string]
            //s - start			[number]
            //c - change		[number]
            //f - isFunction	[boolean]
            //n - name			[string]
            //pg - isPlugin 	[boolean]
            //pr - priority		[number]
            //m - mod           [function | 0]
            this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:1, n:p, pg:1, pr:plugin._priority, m:0};
            i = plugin._overwriteProps.length;
            while (--i > -1) {
              propLookup[plugin._overwriteProps[i]] = this._firstPT;
            }
            if (plugin._priority || plugin._onInitAllProps) {
              initPlugins = true;
            }
            if (plugin._onDisable || plugin._onEnable) {
              this._notifyPluginsOfEnabled = true;
            }
            if (pt._next) {
              pt._next._prev = pt;
            }
  
          } else {
            propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
          }
        }
  
        if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
          return this._initProps(target, propLookup, siblings, overwrittenProps, index);
        }
        if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
          this._kill(propLookup, target);
          return this._initProps(target, propLookup, siblings, overwrittenProps, index);
        }
        if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
          _lazyLookup[target._gsTweenID] = true;
        }
        return initPlugins;
      };
  
      p.render = function(time, suppressEvents, force) {
        var self = this,
          prevTime = self._time,
          duration = self._duration,
          prevRawPrevTime = self._rawPrevTime,
          isComplete, callback, pt, rawPrevTime;
        if (time >= duration - _tinyNum && time >= 0) { //to work around occasional floating point math artifacts.
          self._totalTime = self._time = duration;
          self.ratio = self._ease._calcEnd ? self._ease.getRatio(1) : 1;
          if (!self._reversed ) {
            isComplete = true;
            callback = "onComplete";
            force = (force || self._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
          }
          if (duration === 0) if (self._initted || !self.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
            if (self._startTime === self._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
              time = 0;
            }
            if (prevRawPrevTime < 0 || (time <= 0 && time >= -_tinyNum) || (prevRawPrevTime === _tinyNum && self.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
              force = true;
              if (prevRawPrevTime > _tinyNum) {
                callback = "onReverseComplete";
              }
            }
            self._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
          }
  
        } else if (time < _tinyNum) { //to work around occasional floating point math artifacts, round super small values to 0.
          self._totalTime = self._time = 0;
          self.ratio = self._ease._calcEnd ? self._ease.getRatio(0) : 0;
          if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
            callback = "onReverseComplete";
            isComplete = self._reversed;
          }
          if (time > -_tinyNum) {
            time = 0;
          } else if (time < 0) {
            self._active = false;
            if (duration === 0) if (self._initted || !self.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
              if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && self.data === "isPause")) {
                force = true;
              }
              self._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
            }
          }
          if (!self._initted || (self._startAt && self._startAt.progress())) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately. Also, we check progress() because if startAt has already rendered at its end, we should force a render at its beginning. Otherwise, if you put the playhead directly on top of where a fromTo({immediateRender:false}) starts, and then move it backwards, the from() won't revert its values.
            force = true;
          }
        } else {
          self._totalTime = self._time = time;
  
          if (self._easeType) {
            var r = time / duration, type = self._easeType, pow = self._easePower;
            if (type === 1 || (type === 3 && r >= 0.5)) {
              r = 1 - r;
            }
            if (type === 3) {
              r *= 2;
            }
            if (pow === 1) {
              r *= r;
            } else if (pow === 2) {
              r *= r * r;
            } else if (pow === 3) {
              r *= r * r * r;
            } else if (pow === 4) {
              r *= r * r * r * r;
            }
            self.ratio = (type === 1) ? 1 - r : (type === 2) ? r : (time / duration < 0.5) ? r / 2 : 1 - (r / 2);
          } else {
            self.ratio = self._ease.getRatio(time / duration);
          }
        }
  
        if (self._time === prevTime && !force) {
          return;
        } else if (!self._initted) {
          self._init();
          if (!self._initted || self._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
            return;
          } else if (!force && self._firstPT && ((self.vars.lazy !== false && self._duration) || (self.vars.lazy && !self._duration))) {
            self._time = self._totalTime = prevTime;
            self._rawPrevTime = prevRawPrevTime;
            _lazyTweens.push(self);
            self._lazy = [time, suppressEvents];
            return;
          }
          //_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
          if (self._time && !isComplete) {
            self.ratio = self._ease.getRatio(self._time / duration);
          } else if (isComplete && self._ease._calcEnd) {
            self.ratio = self._ease.getRatio((self._time === 0) ? 0 : 1);
          }
        }
        if (self._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
          self._lazy = false;
        }
        if (!self._active) if (!self._paused && self._time !== prevTime && time >= 0) {
          self._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
        }
        if (prevTime === 0) {
          if (self._startAt) {
            if (time >= 0) {
              self._startAt.render(time, true, force);
            } else if (!callback) {
              callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
            }
          }
          if (self.vars.onStart) if (self._time !== 0 || duration === 0) if (!suppressEvents) {
            self._callback("onStart");
          }
        }
        pt = self._firstPT;
        while (pt) {
          if (pt.f) {
            pt.t[pt.p](pt.c * self.ratio + pt.s);
          } else {
            pt.t[pt.p] = pt.c * self.ratio + pt.s;
          }
          pt = pt._next;
        }
  
        if (self._onUpdate) {
          if (time < 0) if (self._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
            self._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
          }
          if (!suppressEvents) if (self._time !== prevTime || isComplete || force) {
            self._callback("onUpdate");
          }
        }
        if (callback) if (!self._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
          if (time < 0 && self._startAt && !self._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
            self._startAt.render(time, true, force);
          }
          if (isComplete) {
            if (self._timeline.autoRemoveChildren) {
              self._enabled(false, false);
            }
            self._active = false;
          }
          if (!suppressEvents && self.vars[callback]) {
            self._callback(callback);
          }
          if (duration === 0 && self._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
            self._rawPrevTime = 0;
          }
        }
      };
  
      p._kill = function(vars, target, overwritingTween) {
        if (vars === "all") {
          vars = null;
        }
        if (vars == null) if (target == null || target === this.target) {
          this._lazy = false;
          return this._enabled(false, false);
        }
        target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
        var simultaneousOverwrite = (overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline),
          firstPT = this._firstPT,
          i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed;
        if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
          i = target.length;
          while (--i > -1) {
            if (this._kill(vars, target[i], overwritingTween)) {
              changed = true;
            }
          }
        } else {
          if (this._targets) {
            i = this._targets.length;
            while (--i > -1) {
              if (target === this._targets[i]) {
                propLookup = this._propLookup[i] || {};
                this._overwrittenProps = this._overwrittenProps || [];
                overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
                break;
              }
            }
          } else if (target !== this.target) {
            return false;
          } else {
            propLookup = this._propLookup;
            overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
          }
  
          if (propLookup) {
            killProps = vars || propLookup;
            record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
            if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
              for (p in killProps) {
                if (propLookup[p]) {
                  if (!killed) {
                    killed = [];
                  }
                  killed.push(p);
                }
              }
              if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) { //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
                return false;
              }
            }
  
            for (p in killProps) {
              if ((pt = propLookup[p])) {
                if (simultaneousOverwrite) { //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
                  if (pt.f) {
                    pt.t[pt.p](pt.s);
                  } else {
                    pt.t[pt.p] = pt.s;
                  }
                  changed = true;
                }
                if (pt.pg && pt.t._kill(killProps)) {
                  changed = true; //some plugins need to be notified so they can perform cleanup tasks first
                }
                if (!pt.pg || pt.t._overwriteProps.length === 0) {
                  if (pt._prev) {
                    pt._prev._next = pt._next;
                  } else if (pt === this._firstPT) {
                    this._firstPT = pt._next;
                  }
                  if (pt._next) {
                    pt._next._prev = pt._prev;
                  }
                  pt._next = pt._prev = null;
                }
                delete propLookup[p];
              }
              if (record) {
                overwrittenProps[p] = 1;
              }
            }
            if (!this._firstPT && this._initted && firstPT) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
              this._enabled(false, false);
            }
          }
        }
        return changed;
      };
  
      p.invalidate = function() {
        if (this._notifyPluginsOfEnabled) {
          TweenLite._onPluginEvent("_onDisable", this);
        }
        var t = this._time;
        this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
        this._notifyPluginsOfEnabled = this._active = this._lazy = false;
        this._propLookup = (this._targets) ? {} : [];
        Animation.prototype.invalidate.call(this);
        if (this.vars.immediateRender) {
          this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
          this.render(t, false, this.vars.lazy !== false);
        }
        return this;
      };
  
      p._enabled = function(enabled, ignoreTimeline) {
        if (!_tickerActive) {
          _ticker.wake();
        }
        if (enabled && this._gc) {
          var targets = this._targets,
            i;
          if (targets) {
            i = targets.length;
            while (--i > -1) {
              this._siblings[i] = _register(targets[i], this, true);
            }
          } else {
            this._siblings = _register(this.target, this, true);
          }
        }
        Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
        if (this._notifyPluginsOfEnabled) if (this._firstPT) {
          return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
        }
        return false;
      };
  
  
  //----TweenLite static methods -----------------------------------------------------
  
      TweenLite.to = function(target, duration, vars) {
        return new TweenLite(target, duration, vars);
      };
  
      TweenLite.from = function(target, duration, vars) {
        vars.runBackwards = true;
        vars.immediateRender = (vars.immediateRender != false);
        return new TweenLite(target, duration, vars);
      };
  
      TweenLite.fromTo = function(target, duration, fromVars, toVars) {
        toVars.startAt = fromVars;
        toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
        return new TweenLite(target, duration, toVars);
      };
  
      TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
        return new TweenLite(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, lazy:false, useFrames:useFrames, overwrite:0});
      };
  
      TweenLite.set = function(target, vars) {
        return new TweenLite(target, 0, vars);
      };
  
      TweenLite.getTweensOf = function(target, onlyActive) {
        if (target == null) { return []; }
        target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
        var i, a, j, t;
        if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
          i = target.length;
          a = [];
          while (--i > -1) {
            a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
          }
          i = a.length;
          //now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
          while (--i > -1) {
            t = a[i];
            j = i;
            while (--j > -1) {
              if (t === a[j]) {
                a.splice(i, 1);
              }
            }
          }
        } else if (target._gsTweenID) {
          a = _register(target).concat();
          i = a.length;
          while (--i > -1) {
            if (a[i]._gc || (onlyActive && !a[i].isActive())) {
              a.splice(i, 1);
            }
          }
        }
        return a || [];
      };
  
      TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
        if (typeof(onlyActive) === "object") {
          vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
          onlyActive = false;
        }
        var a = TweenLite.getTweensOf(target, onlyActive),
          i = a.length;
        while (--i > -1) {
          a[i]._kill(vars, target);
        }
      };
  
  
  
  /*
   * ----------------------------------------------------------------
   * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
   * ----------------------------------------------------------------
   */
      var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
            this._overwriteProps = (props || "").split(",");
            this._propName = this._overwriteProps[0];
            this._priority = priority || 0;
            this._super = TweenPlugin.prototype;
          }, true);
  
      p = TweenPlugin.prototype;
      TweenPlugin.version = "1.19.0";
      TweenPlugin.API = 2;
      p._firstPT = null;
      p._addTween = _addPropTween;
      p.setRatio = _setRatio;
  
      p._kill = function(lookup) {
        var a = this._overwriteProps,
          pt = this._firstPT,
          i;
        if (lookup[this._propName] != null) {
          this._overwriteProps = [];
        } else {
          i = a.length;
          while (--i > -1) {
            if (lookup[a[i]] != null) {
              a.splice(i, 1);
            }
          }
        }
        while (pt) {
          if (lookup[pt.n] != null) {
            if (pt._next) {
              pt._next._prev = pt._prev;
            }
            if (pt._prev) {
              pt._prev._next = pt._next;
              pt._prev = null;
            } else if (this._firstPT === pt) {
              this._firstPT = pt._next;
            }
          }
          pt = pt._next;
        }
        return false;
      };
  
      p._mod = p._roundProps = function(lookup) {
        var pt = this._firstPT,
          val;
        while (pt) {
          val = lookup[this._propName] || (pt.n != null && lookup[ pt.n.split(this._propName + "_").join("") ]);
          if (val && typeof(val) === "function") { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
            if (pt.f === 2) {
              pt.t._applyPT.m = val;
            } else {
              pt.m = val;
            }
          }
          pt = pt._next;
        }
      };
  
      TweenLite._onPluginEvent = function(type, tween) {
        var pt = tween._firstPT,
          changed, pt2, first, last, next;
        if (type === "_onInitAllProps") {
          //sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
          while (pt) {
            next = pt._next;
            pt2 = first;
            while (pt2 && pt2.pr > pt.pr) {
              pt2 = pt2._next;
            }
            if ((pt._prev = pt2 ? pt2._prev : last)) {
              pt._prev._next = pt;
            } else {
              first = pt;
            }
            if ((pt._next = pt2)) {
              pt2._prev = pt;
            } else {
              last = pt;
            }
            pt = next;
          }
          pt = tween._firstPT = first;
        }
        while (pt) {
          if (pt.pg) if (typeof(pt.t[type]) === "function") if (pt.t[type]()) {
            changed = true;
          }
          pt = pt._next;
        }
        return changed;
      };
  
      TweenPlugin.activate = function(plugins) {
        var i = plugins.length;
        while (--i > -1) {
          if (plugins[i].API === TweenPlugin.API) {
            _plugins[(new plugins[i]())._propName] = plugins[i];
          }
        }
        return true;
      };
  
      //provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
      _gsDefine.plugin = function(config) {
        if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
        var propName = config.propName,
          priority = config.priority || 0,
          overwriteProps = config.overwriteProps,
          map = {init:"_onInitTween", set:"setRatio", kill:"_kill", round:"_mod", mod:"_mod", initAll:"_onInitAllProps"},
          Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
            function() {
              TweenPlugin.call(this, propName, priority);
              this._overwriteProps = overwriteProps || [];
            }, (config.global === true)),
          p = Plugin.prototype = new TweenPlugin(propName),
          prop;
        p.constructor = Plugin;
        Plugin.API = config.API;
        for (prop in map) {
          if (typeof(config[prop]) === "function") {
            p[map[prop]] = config[prop];
          }
        }
        Plugin.version = config.version;
        TweenPlugin.activate([Plugin]);
        return Plugin;
      };
  
  
      //now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
      a = window._gsQueue;
      if (a) {
        for (i = 0; i < a.length; i++) {
          a[i]();
        }
        for (p in _defLookup) {
          if (!_defLookup[p].func) {
            window.console.log("GSAP encountered missing dependency: " + p);
          }
        }
      }
  
      _tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated
  
      return TweenLite;
  
  })(_gsScope, "TweenLite");
  
  var globals = _gsScope.GreenSockGlobals;
  var nonGlobals = globals.com.greensock;
  
  var SimpleTimeline = nonGlobals.core.SimpleTimeline;
  var Animation = nonGlobals.core.Animation;
  var Ease = globals.Ease;
  var Linear = globals.Linear;
  var Power0 = Linear;
  var Power1 = globals.Power1;
  var Power2 = globals.Power2;
  var Power3 = globals.Power3;
  var Power4 = globals.Power4;
  var TweenPlugin = globals.TweenPlugin;
  var EventDispatcher = nonGlobals.events.EventDispatcher;
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))
  
  /***/ }),
  
  /***/ "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  var g;
  
  // This works in non-strict mode
  g = (function() {
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
  
  
  /***/ }),
  
  /***/ "./node_modules/webpack/buildin/harmony-module.js":
  /*!*******************************************!*\
    !*** (webpack)/buildin/harmony-module.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  module.exports = function(originalModule) {
    if (!originalModule.webpackPolyfill) {
      var module = Object.create(originalModule);
      // module.parent = undefined by default
      if (!module.children) module.children = [];
      Object.defineProperty(module, "loaded", {
        enumerable: true,
        get: function() {
          return module.l;
        }
      });
      Object.defineProperty(module, "id", {
        enumerable: true,
        get: function() {
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
  
  
  /***/ }),
  
  /***/ "./src/main/webapp/components/InteractiveNumberedImage/js/InteractiveNumberedImage.js":
  /*!********************************************************************************************!*\
    !*** ./src/main/webapp/components/InteractiveNumberedImage/js/InteractiveNumberedImage.js ***!
    \********************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var _TweenLite = __webpack_require__(/*! gsap/TweenLite */ "./node_modules/gsap/TweenLite.js");
  
  var _utils = __webpack_require__(/*! ../../../resources/dev/js/utils */ "./src/main/webapp/resources/dev/js/utils/index.js");
  
  var _domManipulation = __webpack_require__(/*! ../../../resources/dev/js/utils/domManipulation */ "./src/main/webapp/resources/dev/js/utils/domManipulation.js");
  
  var _browserDetection = __webpack_require__(/*! ../../../resources/dev/js/utils/browserDetection */ "./src/main/webapp/resources/dev/js/utils/browserDetection.js");
  
  /**
   *
   * A container holding card components with an icon-toggled navigation
   *
   * LRDX - InteractiveNumberedImage
   * @module LRDX.Components.InteractiveNumberedImage
   *
   */
  var isNumberedImage;
  var isMobileVersion = document.getElementsByClassName('notimer');
  var verticalAuthorMode;
  


  /*!
   * InteractiveNumberedImage
   * Copyright 2017: Connect Group. All rights reserved.
   */
  
  /* eslint-disable no-param-reassign */
  /* global jQuery window, document, enquire, site */
  (function ($, window) {
   
    var InteractiveNumberedImage = {
      _defaults: {},
      _animatingClass: 'cmp-interactiveNumberedImage--animating',
      _textAnimating: false,
      _imageAnimating: false,
      uiSelectors: {
        tabs: '.cmp-interactiveNumberedImage__tab',
        tabbedNavigationContainer: '.cmp-interactiveNumberedImage__navigation',
        tabbedNavigationLinks: '.cmp-interactiveNumberedImage__navigation .cmp-interactiveNumberedImage__toggle',
        contentContainer: '.cmp-interactiveNumberedImage__content',
        images: '.cmp-interactiveNumberedImage__image',
        imagesContainer: '.cmp-interactiveNumberedImage__images',
        tabbedNavigationLinksContainer: '.cmp-interactiveNumberedImage__toggles',
        controls: '.cmp-interactiveNumberedImage__controls',
        progressLoading: '.cmp-interactiveNumberedImage__controls-progress-loading'
      },
  
      _tabletBreakpoint: 901,
      _mobileBreakpoint: 740,
      _componentMinHeight: 357,
      _componentMaxHeight: 600,
      _mode: null,
      _tabVspacing: 32,
      _progressCircumference: 0,
      _progressRadius: 0,
      _progressValue: 0,
      _progressStep: null,
      _progressAnimation: null,
      _slideIndex: 0,
      _isVerticalSlider: false,
      _hasVerticalSlider: false,
      _animationFrame: null,
      _controlsListener: null,
      _interacted: false,
      _ariaAutoplayStart: '',
      _ariaAutoplayStop: '',
  
      /**
       * Initialises the component
       *
       * @method init
       */
      init: function init() {
        var _this = this;
        verticalAuthorMode = $('#vertical-author').val(); 
        if ( isMobileVersion.length > 0) {
          if(verticalAuthorMode ==='verticalauthor'){  
            this._removeAutoplayEvents();
            this._stopPlaying();

          }
        }

        
        isNumberedImage = this.element.getAttribute('data-numbered-image');//("#numberedImage").val();
        if(isNumberedImage) {
          this.uiSelectors.tabbedNavigationLinks='.cmp-interactiveNumberedImage__navigation .cmp-interactiveNumberedImageNumber__toggle';
        }
        $(window).smartresize(this._handleSizes.bind(this));
  
        this._getStrings();
        this._checkForVerticalSlider();
        this._initEvents();
        this._initTabEvents();
        this._handleSizes();
  
        this.ui('images').on('lazyloaded', function () {
          _this._updateAccordion();
        });
  
        this._tablistKeyboardNavigation();
      },
      _initEvents: function _initEvents() {
        var _this2 = this;
  
        this._controlsListener = this._controlsClick.bind(this);
        this.ui('controls').get(0).addEventListener('click', this._controlsListener);
        this.ui('tabbedNavigationLinks').get().forEach(function (el) {
          el.addEventListener('focus', function () {
            _this2._stopPlaying();
          });
        });
      },
      _addAutoplayEvents: function _addAutoplayEvents() {
        this.autoplayMouseOver = this._handleAutoPlay.bind(this, 'mouseover');
        this.autoplayMouseLeave = this._handleAutoPlay.bind(this, 'mouseleave');
        this.element.addEventListener('mouseover', this.autoplayMouseOver);
        this.element.addEventListener('mouseleave', this.autoplayMouseLeave);
      },
      _removeAutoplayEvents: function _removeAutoplayEvents() {
        this.element.removeEventListener('mouseover', this.autoplayMouseOver);
        this.element.removeEventListener('mouseleave', this.autoplayMouseLeave);
      },
      _getStrings: function _getStrings() {
        this._ariaAutoplayStart = this.element.querySelector('.cmp-interactiveNumberedImage__strings-autoplay-start').innerHTML;
        this._ariaAutoplayStop = this.element.querySelector('.cmp-interactiveNumberedImage__strings-autoplay-stop').innerHTML;
      },
      _handleAutoPlay: function _handleAutoPlay(mouseState) {
        switch (mouseState) {
          case 'mouseover':
            if (this._interacted) {
              return;
            }
            this._stopPlaying();
            break;
          case 'mouseleave':
            if (this._interacted) {
              return;
            }
            this._startPlaying();
            break;
  
          default:
        }
      },
      _setAccordionAriaState: function _setAccordionAriaState(link, tab) {
        var links = this.element.querySelectorAll('.cmp-interactiveNumberedImage__toggle');
        if(isNumberedImage) {
          links = this.element.querySelectorAll('.cmp-interactiveNumberedImageNumber__toggle');
        }
        var tabs = this.element.querySelectorAll('.cmp-interactiveNumberedImage__tabs');
        links.forEach(function (el) {
          el.setAttribute('aria-expanded', false);
        });
        tabs.forEach(function (el) {
          el.setAttribute('aria-hidden', true);
          // eslint-disable-next-line no-param-reassign
          el.style.visibility = 'hidden';
        });
        link.setAttribute('aria-expanded', 'true');
        tab.setAttribute('aria-hidden', false);
        tab.style.visibility = 'visible';
      },
      _startPlaying: function _startPlaying() {
        if ((0, _browserDetection.isMobileDevice)() && this._interacted === false) {
          this._stopPlaying();
          return;
        }
        this.ui('controls').get(0).classList.add('cmp-interactiveNumberedImage__controls--playing');
        window.cancelAnimationFrame(this._animationFrame);
        this._animationFrame = window.requestAnimationFrame(this._setProgress.bind(this));
        this.ui('controls').get(0).setAttribute('aria-label', this._ariaAutoplayStop);
      },
      _stopPlaying: function _stopPlaying() {

        this.ui('controls').get(0).classList.remove('cmp-interactiveNumberedImage__controls--playing');
        window.cancelAnimationFrame(this._animationFrame);
        this.ui('controls').get(0).setAttribute('aria-label', this._ariaAutoplayStart);
      },
  
  
      // set initial tab/image states and fire method to handle click events
      _initTabEvents: function _initTabEvents() {
        var activeTab = this.ui('tabbedNavigationLinks').eq(0);
        var ariaAttributes = function ariaAttributes(ariaSelected) {
          return {
            'aria-selected': ariaSelected
          };
        };
  
        this.ui('tabs').css('opacity', 0).hide();
  
        this.ui('images').css('opacity', 0).hide();
  
        activeTab.addClass('active');
  
        if (this._getMode() !== 'desktop') {
          this.ui('tabbedNavigationLinks').attr(ariaAttributes('false', '-1'));
          activeTab.attr(ariaAttributes('true', '0'));
        }
  
        this.ui('tabs').eq(0).addClass('current').show().css('opacity', 1);
        this.ui('images').eq(0).show().addClass('current').css('opacity', 1);
  
        this._handleTabClick();
      },
      _checkForVerticalSlider: function _checkForVerticalSlider() {
        // if (this._getMode() !== 'desktop') {
        //   return;
        // }
  
        var duration = parseInt(this.element.getAttribute('data-duration-indicator-time'), 10) || null;
        if ((0, _utils.checkDefined)(duration) && typeof duration === 'number' && duration > 0) {
          this._isVerticalSlider = true;
          this._buildVerticalSlider();
          this._initControls(duration);
          this._addAutoplayEvents();
        }
      },
      _initControls: function _initControls(duration) {
        this._progressRadius = this.ui('progressLoading').get(0).r.baseVal.value;
        this._progressCircumference = this._progressRadius * 2 * Math.PI;
  
        this.ui('progressLoading').get(0).style.strokeDasharray = this._progressCircumference + ' ' + this._progressCircumference;
        this.ui('progressLoading').get(0).style.strokeDashoffset = '' + this._progressCircumference;
  
        this._progressStep = 1652 / (duration);
        this._startPlaying();
        // this._animationFrame = window.requestAnimationFrame(this._setProgress.bind(this));
      },
      _buildVerticalSlider: function _buildVerticalSlider() {
        // if (this._hasVerticalSlider || !this._isVerticalSlider) {
        //   return;
        // }
        var toggles = this.element.querySelectorAll('.cmp-interactiveNumberedImage__toggle');
        if(isNumberedImage) {
          toggles = this.element.querySelectorAll('.cmp-interactiveNumberedImageNumber__toggle');
        }
        var tabs = this.element.querySelectorAll('.cmp-interactiveNumberedImage__tabs');
        toggles.forEach(function (el, index) {
          var wrapper = document.createElement('div');
          wrapper.classList.add('cmp-interactiveNumberedImage__verticalSlider-item');
          (0, _domManipulation.wrap)(el, wrapper);
          wrapper.appendChild(tabs[index]);
          el.removeAttribute('role');
          el.removeAttribute('aria-selected');
        });
        this.ui('tabbedNavigationLinksContainer').get(0).removeAttribute('role');
        this._hasVerticalSlider = true;
      },
      _removeVerticalSlider: function _removeVerticalSlider() {  
        if (!this._hasVerticalSlider) {
          return;
        }
        var toggles = this.element.querySelectorAll('.cmp-interactiveNumberedImage__toggle');
        if(isNumberedImage) {
          toggles = this.element.querySelectorAll('.cmp-interactiveNumberedImageNumber__toggle');
        }
        var tabs = this.element.querySelectorAll('.cmp-interactiveNumberedImage__tabs');
        var linkContainers = this.element.querySelectorAll('.cmp-interactiveNumberedImage__verticalSlider-item');
        var content = this.element.querySelector('.cmp-interactiveNumberedImage__content');
        toggles.forEach(function (el) {
          el.setAttribute('role', 'tab');
        });
        tabs.forEach(function (el) {
          content.append(el);
          // eslint-disable-next-line no-param-reassign
          el.style.visibility = 'visible';
          el.style.height = 'auto';
        });
        this.ui('tabbedNavigationLinksContainer').get(0).setAttribute('role', 'tablist');
        if(isNumberedImage) {
            this._updateTabLinks($('.cmp-interactiveNumberedImageNumber__toggle.active'));
        } else{
            this._updateTabLinks($('.cmp-interactiveNumberedImage__toggle.active'));
        }
        linkContainers.forEach(function (el) {
          (0, _domManipulation.unwrap)(el);
        });
        this._isVerticalSlider = false;
        this._hasVerticalSlider = false;
        if ( isMobileVersion.length > 0 ) {
           this._removeAutoplayEvents();
          this._stopPlaying();
        }
        else{
          var duration = parseInt(this.element.getAttribute('data-duration-indicator-time'), 10) || null;
        if ((0, _utils.checkDefined)(duration) && typeof duration === 'number' && duration > 0) {
  
         this._initControls(duration);
  
  
        }
        }
  
      
      },
      _updateAccordion: function _updateAccordion() {
        var accordionWrapper = this.$element.closest('.Accordion');
        if (accordionWrapper && accordionWrapper.length) {
          accordionWrapper.Accordion('calculateNewHeight');
        }
      },
      _controlsClick: function _controlsClick(e) {
        this._interacted = true;
        if (this.ui('controls').get(0).classList.contains('cmp-interactiveNumberedImage__controls--playing')) {
          this._stopPlaying();
        } else {
          this._startPlaying();
        }
        e.preventDefault();
      },
      _setProgress: function _setProgress() {
        if (this._progressValue < 100) {
          this._progressValue = this._progressValue + this._progressStep;
        } else {
          this._slideIndex = this._slideIndex < this.ui('tabbedNavigationLinks').length - 1 ? this._slideIndex + 1 : 0;
          this.ui('tabbedNavigationLinks').eq(this._slideIndex).trigger('click', ['isTrigger', 'true']);
          this._progressValue = this._progressStep;
        }
        this._drawProgress();
        if (this.ui('controls').get(0).classList.contains('cmp-interactiveNumberedImage__controls--playing')) {
          this._animationFrame = window.requestAnimationFrame(this._setProgress.bind(this));
        }
      },
      _drawProgress: function _drawProgress() {
        var offset = this._progressCircumference - this._progressValue / 100 * this._progressCircumference;
        this.ui('progressLoading').get(0).style.strokeDashoffset = offset;
      },
      _getMode: function _getMode() {
        var mode = 'tablet';
        enquire.register('screen and (min-width: ' + this._tabletBreakpoint + 'px)', {
          match: function match() {
            mode = 'desktop';
          }
        });
        enquire.register('screen and (max-width: ' + this._mobileBreakpoint + 'px)', {
          match: function match() {
            mode = 'mobile';
          }
        });
  
        return mode;
      },
      _handleSizes: function _handleSizes(force) {
        var mode = this._getMode();

        if (mode !== 'desktop') {
            // added for mobile and tab start
          if ( isMobileVersion.length > 0) {
            this.ui('controls').get(0).style.display = 'none';
            
           // $('.cmp-interactiveNumberedImage__controls').css({top:auto})
          }
          else{
            this.ui('controls').get(0).style.display = 'flex';
            var controlheight = parseInt($('.Picture__img').css('height'))+40;
             
             if(window.innerWidth >= 501  && window.innerWidth <= 900){
               if(isNumberedImage){
                $('.cmp-interactiveNumberedImage__controls').css({top:controlheight+14})
               }
               else{
                $('.cmp-interactiveNumberedImage__controls').css({top:controlheight+8})

               }

             }
             else{
              $('.cmp-interactiveNumberedImage__controls').css({top:controlheight})
             }
          
          
          }
            // added for mobile and tab end
            this._removeVerticalSlider();
          
        } else if (!this._isVerticalSlider) {
          //$('.cmp-interactiveNumberedImage__controls').css({top:auto})
          this._checkForVerticalSlider();
        }
  
        if (mode === 'desktop' && this._isVerticalSlider) {
          var selectedTab = this.element.querySelector('.cmp-interactiveNumberedImage__tab.current');
          var selectedLink;
          if(isNumberedImage) {
              selectedLink = this.element.querySelector('.cmp-interactiveNumberedImageNumber__toggle.active');
          } else{
              selectedLink = this.element.querySelector('.cmp-interactiveNumberedImage__toggle.active');
          }
          var selectedTabHeight = selectedTab.offsetHeight;
          var tabContainer = selectedTab.parentNode;
          tabContainer.style.height = selectedTabHeight + this._tabVspacing + 'px';
          this._setContentContainerHeight();
          this._setAccordionAriaState(selectedLink, tabContainer);
          if ( isMobileVersion.length > 0) {
            this.ui('controls').get(0).style.display = 'none';
            this._removeAutoplayEvents();
            this._stopPlaying();
          }
          else{
            this.ui('controls').get(0).style.display = 'flex';
          }
          
        } else if (this._isVerticalSlider) {
          this._stopPlaying();
        }
        else if(mode === 'tablet'){
          // console.log(this.ui('controls')[0]);
        }
  
        this._unSetComponentHeight();
        // check if breakpoint has changed or method called with a forced update
        if (mode !== this._mode || force === true) {
          this._mode = mode;
        }
  
        if (mode === 'desktop') {
          this._setComponentHeight();
        }
      },
  
  
      /*
           _setComponentHeight: make the component up to the height of the viewport
           minus global header height without exceeding _componentMaxHeight (unless
           text exceeds the max height, in which case text becomes the new max height)
           and without going lower than _componentMinHeight
          */
      _setComponentHeight: function _setComponentHeight() {
        var windowHeight = $(window).height();
        var that = this;
        windowHeight -= site.utils.getStickyNavHeight(0);
        windowHeight = windowHeight < that._componentMinHeight ? that._componentMinHeight : windowHeight;
        windowHeight = windowHeight > that._componentMaxHeight ? that._componentMaxHeight : windowHeight;
  
        // unset height then factor in textHeight, use the highest value out of textHeight or windowHeight
        that._unSetComponentHeight();
        var containerHeight = that.ui('contentContainer').outerHeight(true);
        var textHeight = 0;
        containerHeight -= that.ui('contentContainer').find('.current').outerHeight(true);
  
        that.ui('tabs').each(function (index) {
          var $cloneElem = that.ui('tabs').eq(index).clone();
          $cloneElem.show().css('opacity', 1);
          that.ui('tabs').eq(index).parent().append($cloneElem);
          var $cloneHeight = $cloneElem.outerHeight(true);
          textHeight = $cloneHeight > textHeight ? $cloneHeight : textHeight;
          $cloneElem.remove();
        });
  
        containerHeight += textHeight;
  
        function getImageHeight() {
          var imageHeight = 0;
          that.ui('images').each(function (index) {
            var elem = $(that.ui('images')[index]);
            imageHeight = elem.outerHeight(true) > imageHeight ? elem.outerHeight(true) : imageHeight;
          });
          return imageHeight;
        }
  
        windowHeight = containerHeight > windowHeight || that._mode !== 'desktop' ? containerHeight : windowHeight;
        windowHeight = that._mode === 'desktop' ? windowHeight : windowHeight + getImageHeight();
        $(that.element).height(windowHeight + (this._isVerticalSlider ? that._progressRadius + parseInt(window.getComputedStyle(this.ui('controls').get(0)).getPropertyValue('padding-top'), 10) : 0));
      },
  
  
      // remove the fixed height and allow auto sizing
      _unSetComponentHeight: function _unSetComponentHeight() {
        $(this.element).height('auto');
      },
      _setContentContainerHeight: function _setContentContainerHeight() {
        // this.ui('contentContainer').get(0).style.height = `${this.ui('tabbedNavigationContainer').get(0).offsetHeight + 72}px`;
      },
  
  
      // click event for tab switching, checks if tab is already animating
      _handleTabClick: function _handleTabClick() {
        var that = this;
        var $tab = void 0;
        // on tab link click fade out current tab and show chosen tab
        this.ui('tabbedNavigationLinks').on('click', function tabClick(e) {
          that._progressValue = 0;
          // fix for IE11 image resizing
          window.requestAnimationFrame(function () {
            (0, _utils.eventTrigger)(window, 'resize');
          });
          that._drawProgress();
          if (!(0, _utils.checkDefined)(e.isTrigger)) {
            that._stopPlaying();
            that._slideIndex = parseInt($(this).get(0).getAttribute('id').substr(-1), 10);
          }
  
          e.preventDefault();
          if (!that.$element.hasClass(that._animatingClass) && !$(this).hasClass('active')) {
            $tab = $(this);
            that._updateTabLinks($tab);
            // change tab content to match selected tab
            var index = that._getMode() === 'desktop' && that._isVerticalSlider ? $tab.parent().index() : $tab.index();
            that._changeTab(index);
          }
        });
      },
  
  
      // switch the active tab to the clicked tab
      _changeTab: function _changeTab(index) {
        var that = this;
        // prevent user clicking new tab before previous tab has animated by adding _animatingClass
        that._textAnimating = true;
        that._imageAnimating = true;
        that.$element.addClass(that._animatingClass);
  
        // fade from one image direct to next
  
        that.ui('contentContainer').find('.current').hide().stop().animate({
          opacity: 0
        }, 0, function animateContentContainer() {
          if (that._getMode() === 'desktop' && that._isVerticalSlider) {
            var tabContainer = that.element.querySelector('.cmp-interactiveNumberedImage__tab.current').parentNode;
            _TweenLite.TweenLite.to(tabContainer, 0.5, { height: 0, ease: _TweenLite.Power1.easeOut });
          }
  
          $(this).removeClass('current');
  
          that.ui('tabs').eq(index).show().addClass('current');
          that.ui('tabs').eq(index).stop().delay(400).animate({
            opacity: 1
          }, 500, function () {
            that._textAnimating = false;
            that._checkAnimatingState();
          });
  
          if (that._getMode() === 'desktop' && that._isVerticalSlider) {
             var selectedLink;
            if(isNumberedImage) {
                selectedLink = that.element.querySelector('.cmp-interactiveNumberedImageNumber__toggle.active');
            } else{
                selectedLink = that.element.querySelector('.cmp-interactiveNumberedImage__toggle.active');
            }
            var selectedTab = that.ui('tabs').get(index);
            var selectedTabHeight = selectedTab.offsetHeight;
            var _tabContainer = selectedTab.parentNode;
            _TweenLite.TweenLite.to(_tabContainer, 0.5, {
              height: selectedTabHeight + that._tabVspacing,
              ease: _TweenLite.Power1.easeOut,
              onComplete: function onComplete() {
                that._setContentContainerHeight();
                that._setAccordionAriaState(selectedLink, _tabContainer);
              }
            });
          }
        });
  
        that.ui('images').eq(index).show().addClass('target').css('opacity', 1);
        that.ui('imagesContainer').find('.current').stop().animate({
          opacity: 0
        }, 600, function animateImageContainer() {
          $(this).hide().removeClass('current');
          that.ui('images').eq(index).removeClass('target').addClass('current');
          that._imageAnimating = false;
          that._checkAnimatingState();
          if (that._mode === 'mobile') {
            that._updateAccordion();
          }
        });
      },
  
  
      // remove previous active state and set current tab to active
      _updateTabLinks: function _updateTabLinks(tab) {
        var ariaAttributes = function ariaAttributes(ariaSelected) {
          return {
            'aria-selected': ariaSelected
          };
        };
  
        if(isNumberedImage) {
            this.element.querySelector('.cmp-interactiveNumberedImageNumber__toggle.active').classList.remove('active');
        } else{
            this.element.querySelector('.cmp-interactiveNumberedImage__toggle.active').classList.remove('active');
  
        }
        tab.addClass('active');
  
        if (this._getMode() !== 'desktop') {
          this.ui('tabbedNavigationLinks').attr(ariaAttributes('false', '-1'));
          tab.attr(ariaAttributes('true', '0'));
        }
      },
  
  
      // if both elements have completed their animation, remove animating class
      _checkAnimatingState: function _checkAnimatingState() {
        var that = this;
        if (!that._textAnimating && !that._imageAnimating) {
          that.$element.removeClass(that._animatingClass);
          that.$element.trigger('numered-image-change');
        }
      },
      _tablistKeyboardNavigation: function _tablistKeyboardNavigation() {
        var tablist = this.ui('tabbedNavigationLinksContainer');
        site.utils.tablistNavigation(tablist.get(0));
      }
    };
  
    jQuery.createComponent('InteractiveNumberedImage', InteractiveNumberedImage);
    $('.cmp-interactiveNumberedImage').InteractiveNumberedImage();
  })(jQuery, window);
  
  /***/ }),
  
  /***/ "./src/main/webapp/resources/dev/js/utils/aria.js":
  /*!********************************************************!*\
    !*** ./src/main/webapp/resources/dev/js/utils/aria.js ***!
    \********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
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
  
  /***/ }),
  
  /***/ "./src/main/webapp/resources/dev/js/utils/domManipulation.js":
  /*!*******************************************************************!*\
    !*** ./src/main/webapp/resources/dev/js/utils/domManipulation.js ***!
    \*******************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
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
  
  /***/ }),
  
  /***/ "./src/main/webapp/resources/dev/js/utils/index.js":
  /*!*********************************************************!*\
    !*** ./src/main/webapp/resources/dev/js/utils/index.js ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
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
  
  /***/ })
  
  /******/ });
  
