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
      if (this._getMode() !== 'desktop') {
        return;
      }

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
      if (this._hasVerticalSlider || !this._isVerticalSlider) {
        return;
      }
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

      this._removeAutoplayEvents();
      this._stopPlaying();
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
       
        // console.log(this.ui('controls').get(0));
        this.ui('controls').get(0).style.display = 'none';
        this._removeVerticalSlider();
      } else if (!this._isVerticalSlider) {
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
        // console.log(this.ui('controls').hasClass('notimer'));
        if ( this.ui('controls').hasClass('notimer')) {
          this.ui('controls').get(0).style.display = 'none';
          this._stopPlaying();
        }
        else{
          this.ui('controls').get(0).style.display = 'flex';
        }
        
      } else if (this._isVerticalSlider) {
        this._stopPlaying();
      }
      else if(mode === 'tablet'){
        console.log("welcome")
        console.log(this.ui('controls')[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3NhcC9Ud2VlbkxpdGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudHMvSW50ZXJhY3RpdmVOdW1iZXJlZEltYWdlL2pzL0ludGVyYWN0aXZlTnVtYmVyZWRJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvcmVzb3VyY2VzL2Rldi9qcy91dGlscy9hcmlhLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2Jyb3dzZXJEZXRlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvZG9tTWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJJbnRlcmFjdGl2ZU51bWJlcmVkSW1hZ2UiLCJfZGVmYXVsdHMiLCJfYW5pbWF0aW5nQ2xhc3MiLCJfdGV4dEFuaW1hdGluZyIsIl9pbWFnZUFuaW1hdGluZyIsInVpU2VsZWN0b3JzIiwidGFicyIsInRhYmJlZE5hdmlnYXRpb25Db250YWluZXIiLCJ0YWJiZWROYXZpZ2F0aW9uTGlua3MiLCJjb250ZW50Q29udGFpbmVyIiwiaW1hZ2VzIiwiaW1hZ2VzQ29udGFpbmVyIiwidGFiYmVkTmF2aWdhdGlvbkxpbmtzQ29udGFpbmVyIiwiY29udHJvbHMiLCJwcm9ncmVzc0xvYWRpbmciLCJfdGFibGV0QnJlYWtwb2ludCIsIl9tb2JpbGVCcmVha3BvaW50IiwiX2NvbXBvbmVudE1pbkhlaWdodCIsIl9jb21wb25lbnRNYXhIZWlnaHQiLCJfbW9kZSIsIl90YWJWc3BhY2luZyIsIl9wcm9ncmVzc0NpcmN1bWZlcmVuY2UiLCJfcHJvZ3Jlc3NSYWRpdXMiLCJfcHJvZ3Jlc3NWYWx1ZSIsIl9wcm9ncmVzc1N0ZXAiLCJfcHJvZ3Jlc3NBbmltYXRpb24iLCJfc2xpZGVJbmRleCIsIl9pc1ZlcnRpY2FsU2xpZGVyIiwiX2hhc1ZlcnRpY2FsU2xpZGVyIiwiX2FuaW1hdGlvbkZyYW1lIiwiX2NvbnRyb2xzTGlzdGVuZXIiLCJfaW50ZXJhY3RlZCIsIl9hcmlhQXV0b3BsYXlTdGFydCIsIl9hcmlhQXV0b3BsYXlTdG9wIiwiaW5pdCIsInNtYXJ0cmVzaXplIiwiX2hhbmRsZVNpemVzIiwiYmluZCIsIl9nZXRTdHJpbmdzIiwiX2NoZWNrRm9yVmVydGljYWxTbGlkZXIiLCJfaW5pdEV2ZW50cyIsIl9pbml0VGFiRXZlbnRzIiwidWkiLCJvbiIsIl91cGRhdGVBY2NvcmRpb24iLCJfdGFibGlzdEtleWJvYXJkTmF2aWdhdGlvbiIsIl9jb250cm9sc0NsaWNrIiwiZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvckVhY2giLCJlbCIsIl9zdG9wUGxheWluZyIsIl9hZGRBdXRvcGxheUV2ZW50cyIsImF1dG9wbGF5TW91c2VPdmVyIiwiX2hhbmRsZUF1dG9QbGF5IiwiYXV0b3BsYXlNb3VzZUxlYXZlIiwiZWxlbWVudCIsIl9yZW1vdmVBdXRvcGxheUV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwibW91c2VTdGF0ZSIsIl9zdGFydFBsYXlpbmciLCJfc2V0QWNjb3JkaW9uQXJpYVN0YXRlIiwibGluayIsInRhYiIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsImNsYXNzTGlzdCIsImFkZCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3NldFByb2dyZXNzIiwicmVtb3ZlIiwiYWN0aXZlVGFiIiwiZXEiLCJhcmlhQXR0cmlidXRlcyIsImFyaWFTZWxlY3RlZCIsImNzcyIsImhpZGUiLCJhZGRDbGFzcyIsIl9nZXRNb2RlIiwiYXR0ciIsInNob3ciLCJfaGFuZGxlVGFiQ2xpY2siLCJkdXJhdGlvbiIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiX2J1aWxkVmVydGljYWxTbGlkZXIiLCJfaW5pdENvbnRyb2xzIiwiciIsImJhc2VWYWwiLCJ2YWx1ZSIsIk1hdGgiLCJQSSIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZURhc2hvZmZzZXQiLCJ0b2dnbGVzIiwiaW5kZXgiLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfcmVtb3ZlVmVydGljYWxTbGlkZXIiLCJsaW5rQ29udGFpbmVycyIsImNvbnRlbnQiLCJhcHBlbmQiLCJoZWlnaHQiLCJfdXBkYXRlVGFiTGlua3MiLCJhY2NvcmRpb25XcmFwcGVyIiwiJGVsZW1lbnQiLCJjbG9zZXN0IiwibGVuZ3RoIiwiQWNjb3JkaW9uIiwiZSIsImNvbnRhaW5zIiwicHJldmVudERlZmF1bHQiLCJ0cmlnZ2VyIiwiX2RyYXdQcm9ncmVzcyIsIm9mZnNldCIsIm1vZGUiLCJlbnF1aXJlIiwicmVnaXN0ZXIiLCJtYXRjaCIsImZvcmNlIiwiZGlzcGxheSIsInNlbGVjdGVkVGFiIiwic2VsZWN0ZWRMaW5rIiwic2VsZWN0ZWRUYWJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ0YWJDb250YWluZXIiLCJwYXJlbnROb2RlIiwiX3NldENvbnRlbnRDb250YWluZXJIZWlnaHQiLCJfdW5TZXRDb21wb25lbnRIZWlnaHQiLCJfc2V0Q29tcG9uZW50SGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwidGhhdCIsInNpdGUiLCJ1dGlscyIsImdldFN0aWNreU5hdkhlaWdodCIsImNvbnRhaW5lckhlaWdodCIsIm91dGVySGVpZ2h0IiwidGV4dEhlaWdodCIsImZpbmQiLCJlYWNoIiwiJGNsb25lRWxlbSIsImNsb25lIiwicGFyZW50IiwiJGNsb25lSGVpZ2h0IiwiZ2V0SW1hZ2VIZWlnaHQiLCJpbWFnZUhlaWdodCIsImVsZW0iLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIiR0YWIiLCJ0YWJDbGljayIsImlzVHJpZ2dlciIsInN1YnN0ciIsImhhc0NsYXNzIiwiX2NoYW5nZVRhYiIsInN0b3AiLCJhbmltYXRlIiwib3BhY2l0eSIsImFuaW1hdGVDb250ZW50Q29udGFpbmVyIiwiVHdlZW5MaXRlIiwidG8iLCJlYXNlIiwiUG93ZXIxIiwiZWFzZU91dCIsInJlbW92ZUNsYXNzIiwiZGVsYXkiLCJfY2hlY2tBbmltYXRpbmdTdGF0ZSIsIm9uQ29tcGxldGUiLCJhbmltYXRlSW1hZ2VDb250YWluZXIiLCJ0YWJsaXN0IiwidGFibGlzdE5hdmlnYXRpb24iLCJqUXVlcnkiLCJjcmVhdGVDb21wb25lbnQiLCJLZXlDb2RlIiwiQkFDS1NQQUNFIiwiREVMRVRFIiwiRE9XTiIsIkVORCIsIkVTQyIsIkhPTUUiLCJMRUZUIiwiUEFHRV9ET1dOIiwiUEFHRV9VUCIsIlJFVFVSTiIsIlJJR0hUIiwiU1BBQ0UiLCJUQUIiLCJVUCIsImJyZWFrcG9pbnRzIiwic21hbGwiLCJtZWRpdW0iLCJ3aWRlciIsImN1cnJlbnQiLCJnZXREZXZpY2VPcmllbnRhdGlvbiIsIiR3aW5kb3ciLCJ3aWR0aCIsImdldExhcmdlckJyZWFrcG9pbnQiLCJnZXRCcmVha3BvaW50U2l6ZSIsIm9sZENhbGMiLCJpbm5lcldpZHRoIiwiaXNCcmVha3BvaW50U21hbGwiLCJpc0JyZWFrcG9pbnRNZWRpdW0iLCJpc01vYmlsZURldmljZSIsIkRvY3VtZW50VG91Y2giLCJuYXZpZ2F0b3IiLCJtc01heFRvdWNoUG9pbnRzIiwiaXNOb3RNb2JpbGVEZXZpY2UiLCJpc1RhYmxldERldmljZSIsInRlc3QiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImlzSU9TIiwiaXNOb3RJT1MiLCJpc1dpbmRvd3NQaG9uZSIsImluZGV4T2YiLCJnZXRBbmRyb2lkVmVyc2lvbiIsInVhIiwicGFyc2VGbG9hdCIsInNsaWNlIiwiZ2V0QnJvd3NlclVzZXJBZ2VudCIsImRldGVjdEJyb3dzZXJzIiwiYnJvd3NlcnMiLCJpc0Nocm9tZSIsImlzTXNFZGdlIiwiaXNFeHBsb3JlciIsImlzRmlyZWZveCIsImlzU2FmYXJpIiwiaXNPcGVyYSIsImlzSWUiLCJpc0llMTEiLCJBY3RpdmVYT2JqZWN0IiwiZ2V0Vmlld3BvcnRTaXplIiwiY3NzVGV4dCIsImRvY3VtZW50RWxlbWVudCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJkaW1zIiwib2Zmc2V0V2lkdGgiLCJyZW1vdmVDaGlsZCIsInNjcm9sbFRvRWxlbWVudCIsIm9wdGlvbnMiLCJjYWxsYmFjayIsIm9wdHMiLCJleHRlbmQiLCJhZGp1c3RtZW50IiwiY29udGFpbmVyIiwic2Nyb2xsVG9wIiwidG9wIiwiaGFzQmlnSW50U3VwcG9ydCIsIkJpZ0ludCIsIndyYXAiLCJ1bndyYXAiLCJ3cmFwQWxsIiwiZWxlbWVudHMiLCJjcmVhdGVBcnJheSIsIk5vZGVMaXN0IiwiZWxlbWVudHNBcnJheSIsImluc2VydEFmdGVyIiwiYmVmb3JlIiwiYWZ0ZXIiLCJuZXh0U2libGluZyIsIiRuYXZIZWFkZXIiLCJzdGlja3lOYXZpZ2F0aW9uRW5hYmxlZCIsInN0aWNreU5hdmlnYXRpb25UcmFuc2l0aW9uUG9pbnQiLCJ0ZW1wbGF0ZUNhY2hlIiwiZ29vZ2xlTWFwU3R5bGVzIiwiZmVhdHVyZVR5cGUiLCJlbGVtZW50VHlwZSIsInN0eWxlcnMiLCJjb2xvciIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJpc1J0bCIsImh0bWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImdldENhY2hlZFNjcmlwdCIsInVybCIsIm5ld09wdGlvbnMiLCJkYXRhVHlwZSIsImNhY2hlIiwiYWpheCIsImdldEhlaWdodCIsImNsaWVudEhlaWdodCIsInlQb3MiLCJvbGRDYWxjdWxhdGlvbiIsInlQb3NpdGlvbiIsInNoYXJlZEhlYWRlciIsIiRoZWFkZXIiLCIkaW5QYWdlTmF2IiwiJGluUGFnZU5hdlN0aWNreSIsIiRpblBhZ2VOYXZCYXIiLCJkeE5hdlByaW1hcnkiLCJicmVha3BvaW50IiwiY2hlY2tTdGlja3lOYXYiLCJpblBhZ2VOYXZUb3AiLCJpc1N0aWNreU5hdiIsIm9sZE5hdkJyZWFrcG9pbnQiLCJ3aW5kb3dXaWR0aCIsImdldE5hdmlnYXRpb25IZWlnaHQiLCJnZXROYWFTSGVpZ2h0Iiwib2xkIiwicHJpbWFyeU5hdkhlaWdodCIsImJyZWFkY3J1bWJOYXZIZWlnaHQiLCJub3RpZmljYXRpb25IZWlnaHQiLCJpblBhZ2VOYXZpZ2F0aW9uSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJtYXgiLCJnZXRTdGlja3lOYXZIZWlnaHRWMiIsInNjcm9sbFRvIiwidGFyZ2V0IiwiZWFzaW5nIiwiaWdub3JlU3RpY2t5TmF2IiwieU9mZnNldCIsIm5ld0R1cmF0aW9uIiwibmV3Q2FsbGJhY2siLCJuZXdFYXNpbmciLCJwb3NpdGlvbiIsIiR0YXJnZXRFbCIsInByb21pc2UiLCJkb25lIiwiY2hlY2tEZWVwTGluayIsImhyZWYiLCJkZWVwTGluayIsInNwZWVkIiwiaGFzaFBvcyIsImlkIiwic3Vic3RyaW5nIiwibG9jYXRpb24iLCJhY2NvcmRpb25QYXJlbnQiLCJhY2NvcmRpb25UaXRsZSIsImNsaWNrIiwicGFyZW50cyIsIiRjb250YWluZXIiLCIkdGFicyIsIiR0YWJMaW5rcyIsInRhYkluZGV4IiwiaSIsIiRsb2NhdGlvbiIsImFjY29yZGlvbkhlYWRlciIsImlzIiwiY29uc29sZSIsImVycm9yIiwiaXNQYWdlSW5JZnJhbWUiLCJzZWxmIiwiaW5zaWRlVGFiYmVkQ29udGFpbmVyIiwiaXNJbnNpZGVUYWJiZWRDb250YWluZXIiLCJub3QiLCJtb2JpbGVBY2NvcmRpb25zQWN0aXZhdGVkIiwicmVtb3ZlSFRNTFRhZ3MiLCJzIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiZ2V0VXJsUGFyYW1ldGVyIiwic1BhcmFtIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic1BhZ2VVUkwiLCJzZWFyY2giLCJzVVJMVmFyaWFibGVzIiwic3BsaXQiLCJzUGFyYW1ldGVyU3BsaXQiLCJhZGRQYXJhbWV0ZXJUb1VSTCIsInBhcmFtIiwibmV3VXJsIiwiZ2V0T2JqZWN0S2V5cyIsIm9iaiIsImtleXMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJjYW52YXNEcmF3QmdDb3ZlciIsImN0eCIsImltZyIsIngiLCJ5IiwidyIsImgiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImFyZ3VtZW50cyIsImNhbnZhcyIsIml3IiwiaWgiLCJtaW4iLCJudyIsIm5oIiwiY3giLCJjeSIsImN3IiwiY2giLCJhciIsImRyYXdJbWFnZSIsImhhc1BsYWNlaG9sZGVyU3VwcG9ydCIsImlzUGFnZUluWFBNRnJhbWUiLCJUcmlkaW9uIiwiV2ViIiwiVUkiLCJTaXRlRWRpdCIsImVsZW1lbnRJblZpZXdwb3J0IiwiYWRqdXN0Iiwid2luZG93SW5uZXJIZWlnaHQiLCJhZGp1c3RUb3AiLCJhZGp1c3RCb3R0b20iLCJlbE9mZnNldCIsImVsVG9wIiwiZWxCb3R0b20iLCJkZWZhdWx0QWRqdXN0Iiwidmlld3BvcnRCb3R0b20iLCJib3R0b20iLCJnZXRSYW5kb21TdHJpbmciLCJmb3JtYXR0ZWRMZW5ndGgiLCJjaGFycyIsImNob3NlbiIsImNoYXJBdCIsImZsb29yIiwicmFuZG9tIiwiam9pbiIsImdldEVhc2luZ1ZhbHVlIiwicmF0aW8iLCJmb3JtYXR0ZWRSYXRpbyIsInJhZGlhbnMiLCJjb3MiLCJkaXNhYmxlU2Nyb2xsIiwiZXZlbnQiLCJlbmFibGVTY3JvbGwiLCJvZmYiLCJsaW1pdE51bWJlciIsIm9sZE1pbiIsImxvYWRJZ25vcmVkUmVzcG9uc2l2ZUltYWdlcyIsIiRpbWFnZXMiLCJyZW1vdmVBdHRyIiwicmljaHNwb25zaXZlSW1hZ2UiLCJ0aHJvdHRsZSIsImZuIiwidGhyZXNoaG9sZCIsInNjb3BlIiwidGhyZXNoIiwibGFzdCIsImRlZmVyVGltZXIiLCJjb250ZXh0Iiwibm93IiwiRGF0ZSIsImFyZ3MiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJtZWFzdXJlVGV4dFdpZHRoIiwidGV4dCIsInBhciIsImJvZHkiLCJwYWRkaW5nIiwid2hpdGVTcGFjZSIsImNsaWVudFdpZHRoIiwiZ2V0VHJhbnNpdGlvbkVuZEV2ZW50IiwidHJhbnNpdGlvbnMiLCJ0cmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiV2Via2l0VHJhbnNpdGlvbiIsInVuZGVmaW5lZCIsInRlbXBsYXRlIiwic3RyIiwiZGF0YSIsImdldEVsZW1lbnRCeUlkIiwiRnVuY3Rpb24iLCJpc0luVmlld3BvcnQiLCJ3aW4iLCJ2aWV3cG9ydCIsImxlZnQiLCJzY3JvbGxMZWZ0IiwicmlnaHQiLCJib3VuZHMiLCJvdXRlcldpZHRoIiwic2Nyb2xsSWZOb3RJblZpZXdwb3J0IiwiZGlzcGxheVRvQm90dG9tIiwic2Nyb2xsVG9Qb3MiLCJpc0xhbmRSb3ZlciIsImdldFRhYmJhYmxlIiwiY3VzdG9tU2VsZWN0b3JzIiwiZGVmYXVsdFNlbGVjdG9ycyIsInNlbGVjdG9yVHlwZXMiLCJjb25jYXQiLCJzZWxlY3RvcnMiLCJmaWx0ZXIiLCJzZWxlY3RvciIsInRhYmJhYmxlIiwib2Zmc2V0UGFyZW50IiwiaXNJbnZpc2libGUiLCJsb2NrVGFiYmFibGVzIiwidGFiYmFibGVzIiwia2V5Q29kZSIsImZvY3VzIiwic2hpZnRLZXkiLCJiYWxhbmNlRWxlbWVudEhlaWdodCIsImFsbG93ZWRPZmZzZXQiLCJjb2x1bW5zIiwiY2FsbCIsImhlaWdodFRvdGFsIiwiaGVpZ2h0c0FycmF5IiwibWFwIiwiZWxlbWVudEhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJhbGFuY2VkSW5kZXgiLCJhcnJheSIsInJ1bm5pbmdUb3RhbCIsImlzUmVjdXJzaXZlIiwic3BsaXRJbmRleCIsImNvbHVtbnMxIiwiY29sdW1uczIiLCJldmVudFRyaWdnZXIiLCJldmVudFR5cGUiLCJkZXRhaWwiLCJidWJibGVzIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiY29udmVydEVsZW1lbnRDb2xsZWN0aW9uVG9BcnJheSIsImNvbGxlY3Rpb24iLCJyYW5kb21pc2VFbGVtZW50cyIsImVsZW1lbnRzQ29sbGVjdGlvbiIsImNsb25lZEVsZW1lbnRzIiwiY2xvbmVOb2RlIiwic29ydCIsImluYyIsInJlcGxhY2VDaGlsZCIsImlzRWxlbWVudFZlcnRpY2FsbHlTY3JvbGxhYmxlIiwic2Nyb2xsSGVpZ2h0IiwiY2hlY2tEZWZpbmVkIiwiaXRlbSIsIm9yaWVudGF0aW9uIiwiaXNWZXJ0aWNhbCIsImZvY3VzRmlyc3RUYWIiLCJmb2N1c0xhc3RUYWIiLCJmb2N1c1ByZXZpb3VzVGFiIiwiY3VycmVudFRhYiIsImZpbmRJbmRleCIsImZvY3VzTmV4dFRhYiIsInRhYnNMZW5ndGhaZXJvSW5kZXgiLCJoYW5kbGVUYWJsaXN0S2V5ZG93bkV2ZW50cyIsImtleSIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVUYWJsaXN0S2V5dXBFdmVudHMiLCJpc0VtcHR5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwicmVwbGFjZUFsbCIsInN0cmluZyIsInJlcGxhY2VtZW50IiwiZHhTZXRUaW1lb3V0IiwiY2IiLCJ0aW1lIiwiYXBwUmVhZHlFdmVudCIsImluaXRpYXRlZCIsImFwcFJlYWR5VGltZXIiLCJ0aW1lb3V0IiwiRHhSZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lIiwibG9hZGluZ1NwaW5uZXJUb2dnbGVCdXR0b25TdGF0ZUFuZENvbnRlbnQiLCJ0YXJnZXRFbGVtZW50IiwidGFnTmFtZSIsImRpc2FibGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsImFkZER4TG9hZGluZ1NwaW5uZXIiLCJpY29uTWFya3VwIiwibG9hZGluZ0ljb24iLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsInJlbW92ZUR4TG9hZGluZ1NwaW5uZXIiLCJhZGREeEVsZW1lbnRMb2FkaW5nU3Bpbm5lciIsImxvY2FsU3RvcmFnZUF2YWlsYWJsZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImFkZFNjcmlwdEZvckJhemFhclZvaWNlIiwic2NyaXB0VVJMIiwidHJpbSIsImJhemFhclZvaWNlU2NyaXB0IiwiaGVhZCIsImVxdWFsaXNlSGVpZ2h0cyIsIm1heEhlaWdodCIsImdlbmVyYXRlQ3VycmVudERhdGUiLCJ0b2RheSIsIlVUQyIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiZ2V0VVRDSG91cnMiLCJnZXRVVENNaW51dGVzIiwicHJldmVudEFjdGlvbk9uRGVlcExpbmsiLCJsaW5rTG9jYXRpb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxrQkFBa0IsWUFBWSxtQkFBTyxDQUFDLGlIQUErQixzQjs7Ozs7Ozs7Ozs7QUNBckUsa0JBQWtCLFlBQVksbUJBQU8sQ0FBQywrR0FBMkIsc0I7Ozs7Ozs7Ozs7O0FDQWpFLGtCQUFrQixZQUFZLG1CQUFPLENBQUMsMkhBQW9DLHNCOzs7Ozs7Ozs7Ozs7QUNBN0Q7O0FBRWI7O0FBRUEsWUFBWSxtQkFBTyxDQUFDLGlG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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LE1BQWQsR0FBdUIsTUFBdkI7QUFDRCxHQUhEO0FBSUEsNkNBQUl1SixRQUFKLEdBQWNyTixPQUFkLENBQXNCLFVBQUNPLE9BQUQsRUFBYTtBQUNqQyxRQUFNdUQsU0FBU3ZELFFBQVE2RSxZQUF2QjtBQUNBLFFBQUl0QixTQUFTNGQsU0FBYixFQUF3QjtBQUN0QkEsa0JBQVk1ZCxNQUFaO0FBQ0Q7QUFDRixHQUxEO0FBTUEsNkNBQUl1SixRQUFKLEdBQWNyTixPQUFkLENBQXNCLFVBQUNPLE9BQUQsRUFBYTtBQUNqQztBQUNBQSxZQUFRYSxLQUFSLENBQWMwQyxNQUFkLEdBQTBCNGQsU0FBMUI7QUFDRCxHQUhEO0FBSUQsQ0FoQk07O0FBa0JBLElBQU1DLG9EQUFzQixTQUF0QkEsbUJBQXNCLEdBQU07QUFDdkMsTUFBTUMsUUFBUSxJQUFJNUksSUFBSixFQUFkO0FBQ0EsU0FDRUEsS0FBSzZJLEdBQUwsQ0FDRUQsTUFBTUUsY0FBTixFQURGLEVBRUVGLE1BQU1HLFdBQU4sRUFGRixFQUdFSCxNQUFNSSxVQUFOLEVBSEYsRUFJRUosTUFBTUssV0FBTixFQUpGLEVBS0VMLE1BQU1NLGFBQU4sRUFMRixDQURGO0FBU0QsQ0FYTTs7QUFhQSxJQUFNQyw0REFBMEIsU0FBMUJBLHVCQUEwQixDQUFDckssS0FBRCxFQUFXO0FBQ2hELE1BQU1zSyxlQUFldEssTUFBTW9ILGFBQU4sQ0FBb0J6YyxZQUFwQixDQUFpQyxNQUFqQyxDQUFyQjtBQUNBLE1BQUkrTyxjQUFjNFEsWUFBZCxDQUFKLEVBQWlDO0FBQUV0SyxVQUFNdlQsY0FBTjtBQUF5QjtBQUM3RCxDQUhNLEMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ludGVyYWN0aXZlTnVtYmVyZWRJbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudHMvSW50ZXJhY3RpdmVOdW1iZXJlZEltYWdlL2pzL0ludGVyYWN0aXZlTnVtYmVyZWRJbWFnZS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjMnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAoIUJVR0dZICYmICRuYXRpdmUpIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcbiIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG4iLCIvKiFcbiAqIFZFUlNJT046IDIuMS4zXG4gKiBEQVRFOiAyMDE5LTA1LTE3XG4gKiBVUERBVEVTIEFORCBET0NTIEFUOiBodHRwOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwOC0yMDE5LCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIHdvcmsgaXMgc3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cDovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBzb2Z0d2FyZSBhZ3JlZW1lbnQgdGhhdCB3YXMgaXNzdWVkIHdpdGggeW91ciBtZW1iZXJzaGlwLlxuICpcbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKiBFUzYgY2hhbmdlczpcblx0LSBkZWNsYXJlIGFuZCBleHBvcnQgX2dzU2NvcGUgYXQgdG9wLlxuXHQtIHNldCB2YXIgVHdlZW5MaXRlID0gdGhlIHJlc3VsdCBvZiB0aGUgbWFpbiBmdW5jdGlvblxuXHQtIGV4cG9ydCBkZWZhdWx0IFR3ZWVuTGl0ZSBhdCB0aGUgYm90dG9tXG5cdC0gcmV0dXJuIFR3ZWVuTGl0ZSBhdCB0aGUgYm90dG9tIG9mIHRoZSBtYWluIGZ1bmN0aW9uXG5cdC0gcGFzcyBpbiBfZ3NTY29wZSBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyIG9mIHRoZSBtYWluIGZ1bmN0aW9uICh3aGljaCBpcyBhY3R1YWxseSBhdCB0aGUgYm90dG9tKVxuXHQtIHJlbW92ZSB0aGUgXCJleHBvcnQgdG8gbXVsdGlwbGUgZW52aXJvbm1lbnRzXCIgaW4gRGVmaW5pdGlvbigpLlxuICovXG5leHBvcnQgdmFyIF9nc1Njb3BlID0gKHR5cGVvZih3aW5kb3cpICE9PSBcInVuZGVmaW5lZFwiKSA/IHdpbmRvdyA6ICh0eXBlb2YobW9kdWxlKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cyAmJiB0eXBlb2YoZ2xvYmFsKSAhPT0gXCJ1bmRlZmluZWRcIikgPyBnbG9iYWwgOiB0aGlzIHx8IHt9O1xuXG5leHBvcnQgdmFyIFR3ZWVuTGl0ZSA9IChmdW5jdGlvbih3aW5kb3cpIHtcblxuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdHZhciBfZXhwb3J0cyA9IHt9LFxuXHRcdFx0X2RvYyA9IHdpbmRvdy5kb2N1bWVudCxcblx0XHRcdF9nbG9iYWxzID0gd2luZG93LkdyZWVuU29ja0dsb2JhbHMgPSB3aW5kb3cuR3JlZW5Tb2NrR2xvYmFscyB8fCB3aW5kb3c7XG5cdFx0aWYgKF9nbG9iYWxzLlR3ZWVuTGl0ZSkge1xuXHRcdFx0cmV0dXJuIF9nbG9iYWxzLlR3ZWVuTGl0ZTsgLy9pbiBjYXNlIHRoZSBjb3JlIHNldCBvZiBjbGFzc2VzIGlzIGFscmVhZHkgbG9hZGVkLCBkb24ndCBpbnN0YW50aWF0ZSB0d2ljZS5cblx0XHR9XG5cdFx0dmFyIF9uYW1lc3BhY2UgPSBmdW5jdGlvbihucykge1xuXHRcdFx0XHR2YXIgYSA9IG5zLnNwbGl0KFwiLlwiKSxcblx0XHRcdFx0XHRwID0gX2dsb2JhbHMsIGk7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0cFthW2ldXSA9IHAgPSBwW2FbaV1dIHx8IHt9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBwO1xuXHRcdFx0fSxcblx0XHRcdGdzID0gX25hbWVzcGFjZShcImNvbS5ncmVlbnNvY2tcIiksXG5cdFx0XHRfdGlueU51bSA9IDAuMDAwMDAwMDEsXG5cdFx0XHRfc2xpY2UgPSBmdW5jdGlvbihhKSB7IC8vZG9uJ3QgdXNlIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldCwgMCkgYmVjYXVzZSB0aGF0IGRvZXNuJ3Qgd29yayBpbiBJRTggd2l0aCBhIE5vZGVMaXN0IHRoYXQncyByZXR1cm5lZCBieSBxdWVyeVNlbGVjdG9yQWxsKClcblx0XHRcdFx0dmFyIGIgPSBbXSxcblx0XHRcdFx0XHRsID0gYS5sZW5ndGgsXG5cdFx0XHRcdFx0aTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSAhPT0gbDsgYi5wdXNoKGFbaSsrXSkpIHt9XG5cdFx0XHRcdHJldHVybiBiO1xuXHRcdFx0fSxcblx0XHRcdF9lbXB0eUZ1bmMgPSBmdW5jdGlvbigpIHt9LFxuXHRcdFx0X2lzQXJyYXkgPSAoZnVuY3Rpb24oKSB7IC8vd29ya3MgYXJvdW5kIGlzc3VlcyBpbiBpZnJhbWUgZW52aXJvbm1lbnRzIHdoZXJlIHRoZSBBcnJheSBnbG9iYWwgaXNuJ3Qgc2hhcmVkLCB0aHVzIGlmIHRoZSBvYmplY3Qgb3JpZ2luYXRlcyBpbiBhIGRpZmZlcmVudCB3aW5kb3cvaWZyYW1lLCBcIihvYmogaW5zdGFuY2VvZiBBcnJheSlcIiB3aWxsIGV2YWx1YXRlIGZhbHNlLiBXZSBhZGRlZCBzb21lIHNwZWVkIG9wdGltaXphdGlvbnMgdG8gYXZvaWQgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCkgdW5sZXNzIGl0J3MgYWJzb2x1dGVseSBuZWNlc3NhcnkgYmVjYXVzZSBpdCdzIFZFUlkgc2xvdyAobGlrZSAyMHggc2xvd2VyKVxuXHRcdFx0XHR2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuXHRcdFx0XHRcdGFycmF5ID0gdG9TdHJpbmcuY2FsbChbXSk7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbihvYmopIHtcblx0XHRcdFx0XHRyZXR1cm4gb2JqICE9IG51bGwgJiYgKG9iaiBpbnN0YW5jZW9mIEFycmF5IHx8ICh0eXBlb2Yob2JqKSA9PT0gXCJvYmplY3RcIiAmJiAhIW9iai5wdXNoICYmIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gYXJyYXkpKTtcblx0XHRcdFx0fTtcblx0XHRcdH0oKSksXG5cdFx0XHRhLCBpLCBwLCBfdGlja2VyLCBfdGlja2VyQWN0aXZlLFxuXHRcdFx0X2RlZkxvb2t1cCA9IHt9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEBjb25zdHJ1Y3RvclxuXHRcdFx0ICogRGVmaW5lcyBhIEdyZWVuU29jayBjbGFzcywgb3B0aW9uYWxseSB3aXRoIGFuIGFycmF5IG9mIGRlcGVuZGVuY2llcyB0aGF0IG11c3QgYmUgaW5zdGFudGlhdGVkIGZpcnN0IGFuZCBwYXNzZWQgaW50byB0aGUgZGVmaW5pdGlvbi5cblx0XHRcdCAqIFRoaXMgYWxsb3dzIHVzZXJzIHRvIGxvYWQgR3JlZW5Tb2NrIEpTIGZpbGVzIGluIGFueSBvcmRlciBldmVuIGlmIHRoZXkgaGF2ZSBpbnRlcmRlcGVuZGVuY2llcyAobGlrZSBDU1NQbHVnaW4gZXh0ZW5kcyBUd2VlblBsdWdpbiB3aGljaCBpc1xuXHRcdFx0ICogaW5zaWRlIFR3ZWVuTGl0ZS5qcywgYnV0IGlmIENTU1BsdWdpbiBpcyBsb2FkZWQgZmlyc3QsIGl0IHNob3VsZCB3YWl0IHRvIHJ1biBpdHMgY29kZSB1bnRpbCBUd2VlbkxpdGUuanMgbG9hZHMgYW5kIGluc3RhbnRpYXRlcyBUd2VlblBsdWdpblxuXHRcdFx0ICogYW5kIHRoZW4gcGFzcyBUd2VlblBsdWdpbiB0byBDU1NQbHVnaW4ncyBkZWZpbml0aW9uKS4gVGhpcyBpcyBhbGwgZG9uZSBhdXRvbWF0aWNhbGx5IGFuZCBpbnRlcm5hbGx5LlxuXHRcdFx0ICpcblx0XHRcdCAqIEV2ZXJ5IGRlZmluaXRpb24gd2lsbCBiZSBhZGRlZCB0byBhIFwiY29tLmdyZWVuc29ja1wiIGdsb2JhbCBvYmplY3QgKHR5cGljYWxseSB3aW5kb3csIGJ1dCBpZiBhIHdpbmRvdy5HcmVlblNvY2tHbG9iYWxzIG9iamVjdCBpcyBmb3VuZCxcblx0XHRcdCAqIGl0IHdpbGwgZ28gdGhlcmUgYXMgb2YgdjEuNykuIEZvciBleGFtcGxlLCBUd2VlbkxpdGUgd2lsbCBiZSBmb3VuZCBhdCB3aW5kb3cuY29tLmdyZWVuc29jay5Ud2VlbkxpdGUgYW5kIHNpbmNlIGl0J3MgYSBnbG9iYWwgY2xhc3MgdGhhdCBzaG91bGQgYmUgYXZhaWxhYmxlIGFueXdoZXJlLFxuXHRcdFx0ICogaXQgaXMgQUxTTyByZWZlcmVuY2VkIGF0IHdpbmRvdy5Ud2VlbkxpdGUuIEhvd2V2ZXIgc29tZSBjbGFzc2VzIGFyZW4ndCBjb25zaWRlcmVkIGdsb2JhbCwgbGlrZSB0aGUgYmFzZSBjb20uZ3JlZW5zb2NrLmNvcmUuQW5pbWF0aW9uIGNsYXNzLCBzb1xuXHRcdFx0ICogdGhvc2Ugd2lsbCBvbmx5IGJlIGF0IHRoZSBwYWNrYWdlIGxpa2Ugd2luZG93LmNvbS5ncmVlbnNvY2suY29yZS5BbmltYXRpb24uIEFnYWluLCBpZiB5b3UgZGVmaW5lIGEgR3JlZW5Tb2NrR2xvYmFscyBvYmplY3Qgb24gdGhlIHdpbmRvdywgZXZlcnl0aGluZ1xuXHRcdFx0ICogZ2V0cyB0dWNrZWQgbmVhdGx5IGluc2lkZSB0aGVyZSBpbnN0ZWFkIG9mIG9uIHRoZSB3aW5kb3cgZGlyZWN0bHkuIFRoaXMgYWxsb3dzIHlvdSB0byBkbyBhZHZhbmNlZCB0aGluZ3MgbGlrZSBsb2FkIG11bHRpcGxlIHZlcnNpb25zIG9mIEdyZWVuU29ja1xuXHRcdFx0ICogZmlsZXMgYW5kIHB1dCB0aGVtIGludG8gZGlzdGluY3Qgb2JqZWN0cyAoaW1hZ2luZSBhIGJhbm5lciBhZCB1c2VzIGEgbmV3ZXIgdmVyc2lvbiBidXQgdGhlIG1haW4gc2l0ZSB1c2VzIGFuIG9sZGVyIG9uZSkuIEluIHRoYXQgY2FzZSwgeW91IGNvdWxkXG5cdFx0XHQgKiBzYW5kYm94IHRoZSBiYW5uZXIgb25lIGxpa2U6XG5cdFx0XHQgKlxuXHRcdFx0ICogPHNjcmlwdD5cblx0XHRcdCAqICAgICB2YXIgZ3MgPSB3aW5kb3cuR3JlZW5Tb2NrR2xvYmFscyA9IHt9OyAvL3RoZSBuZXdlciB2ZXJzaW9uIHdlJ3JlIGFib3V0IHRvIGxvYWQgY291bGQgbm93IGJlIHJlZmVyZW5jZWQgaW4gYSBcImdzXCIgb2JqZWN0LCBsaWtlIGdzLlR3ZWVuTGl0ZS50byguLi4pLiBVc2Ugd2hhdGV2ZXIgYWxpYXMgeW91IHdhbnQgYXMgbG9uZyBhcyBpdCdzIHVuaXF1ZSwgXCJnc1wiIG9yIFwiYmFubmVyXCIgb3Igd2hhdGV2ZXIuXG5cdFx0XHQgKiA8L3NjcmlwdD5cblx0XHRcdCAqIDxzY3JpcHQgc3JjPVwianMvZ3JlZW5zb2NrL3YxLjcvVHdlZW5NYXguanNcIj48L3NjcmlwdD5cblx0XHRcdCAqIDxzY3JpcHQ+XG5cdFx0XHQgKiAgICAgd2luZG93LkdyZWVuU29ja0dsb2JhbHMgPSB3aW5kb3cuX2dzUXVldWUgPSB3aW5kb3cuX2dzRGVmaW5lID0gbnVsbDsgLy9yZXNldCBpdCBiYWNrIHRvIG51bGwgKGFsb25nIHdpdGggdGhlIHNwZWNpYWwgX2dzUXVldWUgdmFyaWFibGUpIHNvIHRoYXQgdGhlIG5leHQgbG9hZCBvZiBUd2Vlbk1heCBhZmZlY3RzIHRoZSB3aW5kb3cgYW5kIHdlIGNhbiByZWZlcmVuY2UgdGhpbmdzIGRpcmVjdGx5IGxpa2UgVHdlZW5MaXRlLnRvKC4uLilcblx0XHRcdCAqIDwvc2NyaXB0PlxuXHRcdFx0ICogPHNjcmlwdCBzcmM9XCJqcy9ncmVlbnNvY2svdjEuNi9Ud2Vlbk1heC5qc1wiPjwvc2NyaXB0PlxuXHRcdFx0ICogPHNjcmlwdD5cblx0XHRcdCAqICAgICBncy5Ud2VlbkxpdGUudG8oLi4uKTsgLy93b3VsZCB1c2UgdjEuN1xuXHRcdFx0ICogICAgIFR3ZWVuTGl0ZS50byguLi4pOyAvL3dvdWxkIHVzZSB2MS42XG5cdFx0XHQgKiA8L3NjcmlwdD5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0geyFzdHJpbmd9IG5zIFRoZSBuYW1lc3BhY2Ugb2YgdGhlIGNsYXNzIGRlZmluaXRpb24sIGxlYXZpbmcgb2ZmIFwiY29tLmdyZWVuc29jay5cIiBhcyB0aGF0J3MgYXNzdW1lZC4gRm9yIGV4YW1wbGUsIFwiVHdlZW5MaXRlXCIgb3IgXCJwbHVnaW5zLkNTU1BsdWdpblwiIG9yIFwiZWFzaW5nLkJhY2tcIi5cblx0XHRcdCAqIEBwYXJhbSB7IUFycmF5LjxzdHJpbmc+fSBkZXBlbmRlbmNpZXMgQW4gYXJyYXkgb2YgZGVwZW5kZW5jaWVzIChkZXNjcmliZWQgYXMgdGhlaXIgbmFtZXNwYWNlcyBtaW51cyBcImNvbS5ncmVlbnNvY2suXCIgcHJlZml4KS4gRm9yIGV4YW1wbGUgW1wiVHdlZW5MaXRlXCIsXCJwbHVnaW5zLlR3ZWVuUGx1Z2luXCIsXCJjb3JlLkFuaW1hdGlvblwiXVxuXHRcdFx0ICogQHBhcmFtIHshZnVuY3Rpb24oKTpPYmplY3R9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCBhbmQgcGFzc2VkIHRoZSByZXNvbHZlZCBkZXBlbmRlbmNpZXMgd2hpY2ggd2lsbCByZXR1cm4gdGhlIGFjdHVhbCBjbGFzcyBmb3IgdGhpcyBkZWZpbml0aW9uLlxuXHRcdFx0ICogQHBhcmFtIHtib29sZWFuPX0gZ2xvYmFsIElmIHRydWUsIHRoZSBjbGFzcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBnbG9iYWwgc2NvcGUgKHR5cGljYWxseSB3aW5kb3cgdW5sZXNzIHlvdSBkZWZpbmUgYSB3aW5kb3cuR3JlZW5Tb2NrR2xvYmFscyBvYmplY3QpXG5cdFx0XHQgKi9cblx0XHRcdERlZmluaXRpb24gPSBmdW5jdGlvbihucywgZGVwZW5kZW5jaWVzLCBmdW5jLCBnbG9iYWwpIHtcblx0XHRcdFx0dGhpcy5zYyA9IChfZGVmTG9va3VwW25zXSkgPyBfZGVmTG9va3VwW25zXS5zYyA6IFtdOyAvL3N1YmNsYXNzZXNcblx0XHRcdFx0X2RlZkxvb2t1cFtuc10gPSB0aGlzO1xuXHRcdFx0XHR0aGlzLmdzQ2xhc3MgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmZ1bmMgPSBmdW5jO1xuXHRcdFx0XHR2YXIgX2NsYXNzZXMgPSBbXTtcblx0XHRcdFx0dGhpcy5jaGVjayA9IGZ1bmN0aW9uKGluaXQpIHtcblx0XHRcdFx0XHR2YXIgaSA9IGRlcGVuZGVuY2llcy5sZW5ndGgsXG5cdFx0XHRcdFx0XHRtaXNzaW5nID0gaSxcblx0XHRcdFx0XHRcdGN1ciwgYSwgbiwgY2w7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRpZiAoKGN1ciA9IF9kZWZMb29rdXBbZGVwZW5kZW5jaWVzW2ldXSB8fCBuZXcgRGVmaW5pdGlvbihkZXBlbmRlbmNpZXNbaV0sIFtdKSkuZ3NDbGFzcykge1xuXHRcdFx0XHRcdFx0XHRfY2xhc3Nlc1tpXSA9IGN1ci5nc0NsYXNzO1xuXHRcdFx0XHRcdFx0XHRtaXNzaW5nLS07XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGluaXQpIHtcblx0XHRcdFx0XHRcdFx0Y3VyLnNjLnB1c2godGhpcyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChtaXNzaW5nID09PSAwICYmIGZ1bmMpIHtcblx0XHRcdFx0XHRcdGEgPSAoXCJjb20uZ3JlZW5zb2NrLlwiICsgbnMpLnNwbGl0KFwiLlwiKTtcblx0XHRcdFx0XHRcdG4gPSBhLnBvcCgpO1xuXHRcdFx0XHRcdFx0Y2wgPSBfbmFtZXNwYWNlKGEuam9pbihcIi5cIikpW25dID0gdGhpcy5nc0NsYXNzID0gZnVuYy5hcHBseShmdW5jLCBfY2xhc3Nlcyk7XG5cblx0XHRcdFx0XHRcdC8vZXhwb3J0cyB0byBtdWx0aXBsZSBlbnZpcm9ubWVudHNcblx0XHRcdFx0XHRcdGlmIChnbG9iYWwpIHtcblx0XHRcdFx0XHRcdFx0X2dsb2JhbHNbbl0gPSBfZXhwb3J0c1tuXSA9IGNsOyAvL3Byb3ZpZGVzIGEgd2F5IHRvIGF2b2lkIGdsb2JhbCBuYW1lc3BhY2UgcG9sbHV0aW9uLiBCeSBkZWZhdWx0LCB0aGUgbWFpbiBjbGFzc2VzIGxpa2UgVHdlZW5MaXRlLCBQb3dlcjEsIFN0cm9uZywgZXRjLiBhcmUgYWRkZWQgdG8gd2luZG93IHVubGVzcyBhIEdyZWVuU29ja0dsb2JhbHMgaXMgZGVmaW5lZC4gU28gaWYgeW91IHdhbnQgdG8gaGF2ZSB0aGluZ3MgYWRkZWQgdG8gYSBjdXN0b20gb2JqZWN0IGluc3RlYWQsIGp1c3QgZG8gc29tZXRoaW5nIGxpa2Ugd2luZG93LkdyZWVuU29ja0dsb2JhbHMgPSB7fSBiZWZvcmUgbG9hZGluZyBhbnkgR3JlZW5Tb2NrIGZpbGVzLiBZb3UgY2FuIGV2ZW4gc2V0IHVwIGFuIGFsaWFzIGxpa2Ugd2luZG93LkdyZWVuU29ja0dsb2JhbHMgPSB3aW5kb3dzLmdzID0ge30gc28gdGhhdCB5b3UgY2FuIGFjY2VzcyBldmVyeXRoaW5nIGxpa2UgZ3MuVHdlZW5MaXRlLiBBbHNvIHJlbWVtYmVyIHRoYXQgQUxMIGNsYXNzZXMgYXJlIGFkZGVkIHRvIHRoZSB3aW5kb3cuY29tLmdyZWVuc29jayBvYmplY3QgKGluIHRoZWlyIHJlc3BlY3RpdmUgcGFja2FnZXMsIGxpa2UgY29tLmdyZWVuc29jay5lYXNpbmcuUG93ZXIxLCBjb20uZ3JlZW5zb2NrLlR3ZWVuTGl0ZSwgZXRjLilcblx0XHRcdFx0XHRcdFx0Lypcblx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZihtb2R1bGUpICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7IC8vbm9kZVxuXHRcdFx0XHRcdFx0XHRcdGlmIChucyA9PT0gbW9kdWxlTmFtZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmV4cG9ydHMgPSBfZXhwb3J0c1ttb2R1bGVOYW1lXSA9IGNsO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChpIGluIF9leHBvcnRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsW2ldID0gX2V4cG9ydHNbaV07XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChfZXhwb3J0c1ttb2R1bGVOYW1lXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0X2V4cG9ydHNbbW9kdWxlTmFtZV1bbl0gPSBjbDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mKGRlZmluZSkgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKXsgLy9BTURcblx0XHRcdFx0XHRcdFx0XHRkZWZpbmUoKHdpbmRvdy5HcmVlblNvY2tBTURQYXRoID8gd2luZG93LkdyZWVuU29ja0FNRFBhdGggKyBcIi9cIiA6IFwiXCIpICsgbnMuc3BsaXQoXCIuXCIpLnBvcCgpLCBbXSwgZnVuY3Rpb24oKSB7IHJldHVybiBjbDsgfSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aGlzLnNjLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2NbaV0uY2hlY2soKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMuY2hlY2sodHJ1ZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvL3VzZWQgdG8gY3JlYXRlIERlZmluaXRpb24gaW5zdGFuY2VzICh3aGljaCBiYXNpY2FsbHkgcmVnaXN0ZXJzIGEgY2xhc3MgdGhhdCBoYXMgZGVwZW5kZW5jaWVzKS5cblx0XHRcdF9nc0RlZmluZSA9IHdpbmRvdy5fZ3NEZWZpbmUgPSBmdW5jdGlvbihucywgZGVwZW5kZW5jaWVzLCBmdW5jLCBnbG9iYWwpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBEZWZpbml0aW9uKG5zLCBkZXBlbmRlbmNpZXMsIGZ1bmMsIGdsb2JhbCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvL2EgcXVpY2sgd2F5IHRvIGNyZWF0ZSBhIGNsYXNzIHRoYXQgZG9lc24ndCBoYXZlIGFueSBkZXBlbmRlbmNpZXMuIFJldHVybnMgdGhlIGNsYXNzLCBidXQgZmlyc3QgcmVnaXN0ZXJzIGl0IGluIHRoZSBHcmVlblNvY2sgbmFtZXNwYWNlIHNvIHRoYXQgb3RoZXIgY2xhc3NlcyBjYW4gZ3JhYiBpdCAob3RoZXIgY2xhc3NlcyBtaWdodCBiZSBkZXBlbmRlbnQgb24gdGhlIGNsYXNzKS5cblx0XHRcdF9jbGFzcyA9IGdzLl9jbGFzcyA9IGZ1bmN0aW9uKG5zLCBmdW5jLCBnbG9iYWwpIHtcblx0XHRcdFx0ZnVuYyA9IGZ1bmMgfHwgZnVuY3Rpb24oKSB7fTtcblx0XHRcdFx0X2dzRGVmaW5lKG5zLCBbXSwgZnVuY3Rpb24oKXsgcmV0dXJuIGZ1bmM7IH0sIGdsb2JhbCk7XG5cdFx0XHRcdHJldHVybiBmdW5jO1xuXHRcdFx0fTtcblxuXHRcdF9nc0RlZmluZS5nbG9iYWxzID0gX2dsb2JhbHM7XG5cblxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRWFzZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdFx0dmFyIF9iYXNlUGFyYW1zID0gWzAsIDAsIDEsIDFdLFxuXHRcdFx0RWFzZSA9IF9jbGFzcyhcImVhc2luZy5FYXNlXCIsIGZ1bmN0aW9uKGZ1bmMsIGV4dHJhUGFyYW1zLCB0eXBlLCBwb3dlcikge1xuXHRcdFx0XHR0aGlzLl9mdW5jID0gZnVuYztcblx0XHRcdFx0dGhpcy5fdHlwZSA9IHR5cGUgfHwgMDtcblx0XHRcdFx0dGhpcy5fcG93ZXIgPSBwb3dlciB8fCAwO1xuXHRcdFx0XHR0aGlzLl9wYXJhbXMgPSBleHRyYVBhcmFtcyA/IF9iYXNlUGFyYW1zLmNvbmNhdChleHRyYVBhcmFtcykgOiBfYmFzZVBhcmFtcztcblx0XHRcdH0sIHRydWUpLFxuXHRcdFx0X2Vhc2VNYXAgPSBFYXNlLm1hcCA9IHt9LFxuXHRcdFx0X2Vhc2VSZWcgPSBFYXNlLnJlZ2lzdGVyID0gZnVuY3Rpb24oZWFzZSwgbmFtZXMsIHR5cGVzLCBjcmVhdGUpIHtcblx0XHRcdFx0dmFyIG5hID0gbmFtZXMuc3BsaXQoXCIsXCIpLFxuXHRcdFx0XHRcdGkgPSBuYS5sZW5ndGgsXG5cdFx0XHRcdFx0dGEgPSAodHlwZXMgfHwgXCJlYXNlSW4sZWFzZU91dCxlYXNlSW5PdXRcIikuc3BsaXQoXCIsXCIpLFxuXHRcdFx0XHRcdGUsIG5hbWUsIGosIHR5cGU7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdG5hbWUgPSBuYVtpXTtcblx0XHRcdFx0XHRlID0gY3JlYXRlID8gX2NsYXNzKFwiZWFzaW5nLlwiK25hbWUsIG51bGwsIHRydWUpIDogZ3MuZWFzaW5nW25hbWVdIHx8IHt9O1xuXHRcdFx0XHRcdGogPSB0YS5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKC0taiA+IC0xKSB7XG5cdFx0XHRcdFx0XHR0eXBlID0gdGFbal07XG5cdFx0XHRcdFx0XHRfZWFzZU1hcFtuYW1lICsgXCIuXCIgKyB0eXBlXSA9IF9lYXNlTWFwW3R5cGUgKyBuYW1lXSA9IGVbdHlwZV0gPSBlYXNlLmdldFJhdGlvID8gZWFzZSA6IGVhc2VbdHlwZV0gfHwgbmV3IGVhc2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRwID0gRWFzZS5wcm90b3R5cGU7XG5cdFx0cC5fY2FsY0VuZCA9IGZhbHNlO1xuXHRcdHAuZ2V0UmF0aW8gPSBmdW5jdGlvbihwKSB7XG5cdFx0XHRpZiAodGhpcy5fZnVuYykge1xuXHRcdFx0XHR0aGlzLl9wYXJhbXNbMF0gPSBwO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fZnVuYy5hcHBseShudWxsLCB0aGlzLl9wYXJhbXMpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHQgPSB0aGlzLl90eXBlLFxuXHRcdFx0XHRwdyA9IHRoaXMuX3Bvd2VyLFxuXHRcdFx0XHRyID0gKHQgPT09IDEpID8gMSAtIHAgOiAodCA9PT0gMikgPyBwIDogKHAgPCAwLjUpID8gcCAqIDIgOiAoMSAtIHApICogMjtcblx0XHRcdGlmIChwdyA9PT0gMSkge1xuXHRcdFx0XHRyICo9IHI7XG5cdFx0XHR9IGVsc2UgaWYgKHB3ID09PSAyKSB7XG5cdFx0XHRcdHIgKj0gciAqIHI7XG5cdFx0XHR9IGVsc2UgaWYgKHB3ID09PSAzKSB7XG5cdFx0XHRcdHIgKj0gciAqIHIgKiByO1xuXHRcdFx0fSBlbHNlIGlmIChwdyA9PT0gNCkge1xuXHRcdFx0XHRyICo9IHIgKiByICogciAqIHI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKHQgPT09IDEpID8gMSAtIHIgOiAodCA9PT0gMikgPyByIDogKHAgPCAwLjUpID8gciAvIDIgOiAxIC0gKHIgLyAyKTtcblx0XHR9O1xuXG5cdFx0Ly9jcmVhdGUgYWxsIHRoZSBzdGFuZGFyZCBlYXNlcyBsaWtlIExpbmVhciwgUXVhZCwgQ3ViaWMsIFF1YXJ0LCBRdWludCwgU3Ryb25nLCBQb3dlcjAsIFBvd2VyMSwgUG93ZXIyLCBQb3dlcjMsIGFuZCBQb3dlcjQgKGVhY2ggd2l0aCBlYXNlSW4sIGVhc2VPdXQsIGFuZCBlYXNlSW5PdXQpXG5cdFx0YSA9IFtcIkxpbmVhclwiLFwiUXVhZFwiLFwiQ3ViaWNcIixcIlF1YXJ0XCIsXCJRdWludCxTdHJvbmdcIl07XG5cdFx0aSA9IGEubGVuZ3RoO1xuXHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0cCA9IGFbaV0rXCIsUG93ZXJcIitpO1xuXHRcdFx0X2Vhc2VSZWcobmV3IEVhc2UobnVsbCxudWxsLDEsaSksIHAsIFwiZWFzZU91dFwiLCB0cnVlKTtcblx0XHRcdF9lYXNlUmVnKG5ldyBFYXNlKG51bGwsbnVsbCwyLGkpLCBwLCBcImVhc2VJblwiICsgKChpID09PSAwKSA/IFwiLGVhc2VOb25lXCIgOiBcIlwiKSk7XG5cdFx0XHRfZWFzZVJlZyhuZXcgRWFzZShudWxsLG51bGwsMyxpKSwgcCwgXCJlYXNlSW5PdXRcIik7XG5cdFx0fVxuXHRcdF9lYXNlTWFwLmxpbmVhciA9IGdzLmVhc2luZy5MaW5lYXIuZWFzZUluO1xuXHRcdF9lYXNlTWFwLnN3aW5nID0gZ3MuZWFzaW5nLlF1YWQuZWFzZUluT3V0OyAvL2ZvciBqUXVlcnkgZm9sa3NcblxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXZlbnREaXNwYXRjaGVyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblx0XHR2YXIgRXZlbnREaXNwYXRjaGVyID0gX2NsYXNzKFwiZXZlbnRzLkV2ZW50RGlzcGF0Y2hlclwiLCBmdW5jdGlvbih0YXJnZXQpIHtcblx0XHRcdHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuXHRcdFx0dGhpcy5fZXZlbnRUYXJnZXQgPSB0YXJnZXQgfHwgdGhpcztcblx0XHR9KTtcblx0XHRwID0gRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZTtcblxuXHRcdHAuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrLCBzY29wZSwgdXNlUGFyYW0sIHByaW9yaXR5KSB7XG5cdFx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0XHR2YXIgbGlzdCA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXSxcblx0XHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0XHRsaXN0ZW5lciwgaTtcblx0XHRcdGlmICh0aGlzID09PSBfdGlja2VyICYmICFfdGlja2VyQWN0aXZlKSB7XG5cdFx0XHRcdF90aWNrZXIud2FrZSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxpc3QgPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLl9saXN0ZW5lcnNbdHlwZV0gPSBsaXN0ID0gW107XG5cdFx0XHR9XG5cdFx0XHRpID0gbGlzdC5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0bGlzdGVuZXIgPSBsaXN0W2ldO1xuXHRcdFx0XHRpZiAobGlzdGVuZXIuYyA9PT0gY2FsbGJhY2sgJiYgbGlzdGVuZXIucyA9PT0gc2NvcGUpIHtcblx0XHRcdFx0XHRsaXN0LnNwbGljZShpLCAxKTtcblx0XHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PT0gMCAmJiBsaXN0ZW5lci5wciA8IHByaW9yaXR5KSB7XG5cdFx0XHRcdFx0aW5kZXggPSBpICsgMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGlzdC5zcGxpY2UoaW5kZXgsIDAsIHtjOmNhbGxiYWNrLCBzOnNjb3BlLCB1cDp1c2VQYXJhbSwgcHI6cHJpb3JpdHl9KTtcblx0XHR9O1xuXG5cdFx0cC5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2spIHtcblx0XHRcdHZhciBsaXN0ID0gdGhpcy5fbGlzdGVuZXJzW3R5cGVdLCBpO1xuXHRcdFx0aWYgKGxpc3QpIHtcblx0XHRcdFx0aSA9IGxpc3QubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRpZiAobGlzdFtpXS5jID09PSBjYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0bGlzdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHAuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRcdHZhciBsaXN0ID0gdGhpcy5fbGlzdGVuZXJzW3R5cGVdLFxuXHRcdFx0XHRpLCB0LCBsaXN0ZW5lcjtcblx0XHRcdGlmIChsaXN0KSB7XG5cdFx0XHRcdGkgPSBsaXN0Lmxlbmd0aDtcblx0XHRcdFx0aWYgKGkgPiAxKSB7XG5cdFx0XHRcdFx0bGlzdCA9IGxpc3Quc2xpY2UoMCk7IC8vaW4gY2FzZSBhZGRFdmVudExpc3RlbmVyKCkgaXMgY2FsbGVkIGZyb20gd2l0aGluIGEgbGlzdGVuZXIvY2FsbGJhY2sgKG90aGVyd2lzZSB0aGUgaW5kZXggY291bGQgY2hhbmdlLCByZXN1bHRpbmcgaW4gYSBza2lwKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHQgPSB0aGlzLl9ldmVudFRhcmdldDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0bGlzdGVuZXIgPSBsaXN0W2ldO1xuXHRcdFx0XHRcdGlmIChsaXN0ZW5lcikge1xuXHRcdFx0XHRcdFx0aWYgKGxpc3RlbmVyLnVwKSB7XG5cdFx0XHRcdFx0XHRcdGxpc3RlbmVyLmMuY2FsbChsaXN0ZW5lci5zIHx8IHQsIHt0eXBlOnR5cGUsIHRhcmdldDp0fSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRsaXN0ZW5lci5jLmNhbGwobGlzdGVuZXIucyB8fCB0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUaWNrZXJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuIFx0XHR2YXIgX3JlcUFuaW1GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG5cdFx0XHRfY2FuY2VsQW5pbUZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lLFxuXHRcdFx0X2dldFRpbWUgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHtyZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7fSxcblx0XHRcdF9sYXN0VXBkYXRlID0gX2dldFRpbWUoKTtcblxuXHRcdC8vbm93IHRyeSB0byBkZXRlcm1pbmUgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBhbmQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgZnVuY3Rpb25zIGFuZCBpZiBub25lIGFyZSBmb3VuZCwgd2UnbGwgdXNlIGEgc2V0VGltZW91dCgpL2NsZWFyVGltZW91dCgpIHBvbHlmaWxsLlxuXHRcdGEgPSBbXCJtc1wiLFwibW96XCIsXCJ3ZWJraXRcIixcIm9cIl07XG5cdFx0aSA9IGEubGVuZ3RoO1xuXHRcdHdoaWxlICgtLWkgPiAtMSAmJiAhX3JlcUFuaW1GcmFtZSkge1xuXHRcdFx0X3JlcUFuaW1GcmFtZSA9IHdpbmRvd1thW2ldICsgXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG5cdFx0XHRfY2FuY2VsQW5pbUZyYW1lID0gd2luZG93W2FbaV0gKyBcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdIHx8IHdpbmRvd1thW2ldICsgXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG5cdFx0fVxuXG5cdFx0X2NsYXNzKFwiVGlja2VyXCIsIGZ1bmN0aW9uKGZwcywgdXNlUkFGKSB7XG5cdFx0XHR2YXIgX3NlbGYgPSB0aGlzLFxuXHRcdFx0XHRfc3RhcnRUaW1lID0gX2dldFRpbWUoKSxcblx0XHRcdFx0X3VzZVJBRiA9ICh1c2VSQUYgIT09IGZhbHNlICYmIF9yZXFBbmltRnJhbWUpID8gXCJhdXRvXCIgOiBmYWxzZSxcblx0XHRcdFx0X2xhZ1RocmVzaG9sZCA9IDUwMCxcblx0XHRcdFx0X2FkanVzdGVkTGFnID0gMzMsXG5cdFx0XHRcdF90aWNrV29yZCA9IFwidGlja1wiLCAvL2hlbHBzIHJlZHVjZSBnYyBidXJkZW5cblx0XHRcdFx0X2ZwcywgX3JlcSwgX2lkLCBfZ2FwLCBfbmV4dFRpbWUsXG5cdFx0XHRcdF90aWNrID0gZnVuY3Rpb24obWFudWFsKSB7XG5cdFx0XHRcdFx0dmFyIGVsYXBzZWQgPSBfZ2V0VGltZSgpIC0gX2xhc3RVcGRhdGUsXG5cdFx0XHRcdFx0XHRvdmVybGFwLCBkaXNwYXRjaDtcblx0XHRcdFx0XHRpZiAoZWxhcHNlZCA+IF9sYWdUaHJlc2hvbGQpIHtcblx0XHRcdFx0XHRcdF9zdGFydFRpbWUgKz0gZWxhcHNlZCAtIF9hZGp1c3RlZExhZztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0X2xhc3RVcGRhdGUgKz0gZWxhcHNlZDtcblx0XHRcdFx0XHRfc2VsZi50aW1lID0gKF9sYXN0VXBkYXRlIC0gX3N0YXJ0VGltZSkgLyAxMDAwO1xuXHRcdFx0XHRcdG92ZXJsYXAgPSBfc2VsZi50aW1lIC0gX25leHRUaW1lO1xuXHRcdFx0XHRcdGlmICghX2ZwcyB8fCBvdmVybGFwID4gMCB8fCBtYW51YWwgPT09IHRydWUpIHtcblx0XHRcdFx0XHRcdF9zZWxmLmZyYW1lKys7XG5cdFx0XHRcdFx0XHRfbmV4dFRpbWUgKz0gb3ZlcmxhcCArIChvdmVybGFwID49IF9nYXAgPyAwLjAwNCA6IF9nYXAgLSBvdmVybGFwKTtcblx0XHRcdFx0XHRcdGRpc3BhdGNoID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKG1hbnVhbCAhPT0gdHJ1ZSkgeyAvL21ha2Ugc3VyZSB0aGUgcmVxdWVzdCBpcyBtYWRlIGJlZm9yZSB3ZSBkaXNwYXRjaCB0aGUgXCJ0aWNrXCIgZXZlbnQgc28gdGhhdCB0aW1pbmcgaXMgbWFpbnRhaW5lZC4gT3RoZXJ3aXNlLCBpZiBwcm9jZXNzaW5nIHRoZSBcInRpY2tcIiByZXF1aXJlcyBhIGJ1bmNoIG9mIHRpbWUgKGxpa2UgMTVtcykgYW5kIHdlJ3JlIHVzaW5nIGEgc2V0VGltZW91dCgpIHRoYXQncyBiYXNlZCBvbiAxNi43bXMsIGl0J2QgdGVjaG5pY2FsbHkgdGFrZSAzMS43bXMgYmV0d2VlbiBmcmFtZXMgb3RoZXJ3aXNlLlxuXHRcdFx0XHRcdFx0X2lkID0gX3JlcShfdGljayk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChkaXNwYXRjaCkge1xuXHRcdFx0XHRcdFx0X3NlbGYuZGlzcGF0Y2hFdmVudChfdGlja1dvcmQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0RXZlbnREaXNwYXRjaGVyLmNhbGwoX3NlbGYpO1xuXHRcdFx0X3NlbGYudGltZSA9IF9zZWxmLmZyYW1lID0gMDtcblx0XHRcdF9zZWxmLnRpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0X3RpY2sodHJ1ZSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRfc2VsZi5sYWdTbW9vdGhpbmcgPSBmdW5jdGlvbih0aHJlc2hvbGQsIGFkanVzdGVkTGFnKSB7XG5cdFx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvL2lmIGxhZ1Ntb290aGluZygpIGlzIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50cywgdHJlYXQgaXQgbGlrZSBhIGdldHRlciB0aGF0IHJldHVybnMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgaXQncyBlbmFibGVkIG9yIG5vdC4gVGhpcyBpcyBwdXJwb3NlbHkgdW5kb2N1bWVudGVkIGFuZCBpcyBmb3IgaW50ZXJuYWwgdXNlLlxuXHRcdFx0XHRcdHJldHVybiAoX2xhZ1RocmVzaG9sZCA8IDEgLyBfdGlueU51bSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X2xhZ1RocmVzaG9sZCA9IHRocmVzaG9sZCB8fCAoMSAvIF90aW55TnVtKTsgLy96ZXJvIHNob3VsZCBiZSBpbnRlcnByZXRlZCBhcyBiYXNpY2FsbHkgdW5saW1pdGVkXG5cdFx0XHRcdF9hZGp1c3RlZExhZyA9IE1hdGgubWluKGFkanVzdGVkTGFnLCBfbGFnVGhyZXNob2xkLCAwKTtcblx0XHRcdH07XG5cblx0XHRcdF9zZWxmLnNsZWVwID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChfaWQgPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIV91c2VSQUYgfHwgIV9jYW5jZWxBbmltRnJhbWUpIHtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoX2lkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfY2FuY2VsQW5pbUZyYW1lKF9pZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3JlcSA9IF9lbXB0eUZ1bmM7XG5cdFx0XHRcdF9pZCA9IG51bGw7XG5cdFx0XHRcdGlmIChfc2VsZiA9PT0gX3RpY2tlcikge1xuXHRcdFx0XHRcdF90aWNrZXJBY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0X3NlbGYud2FrZSA9IGZ1bmN0aW9uKHNlYW1sZXNzKSB7XG5cdFx0XHRcdGlmIChfaWQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRfc2VsZi5zbGVlcCgpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNlYW1sZXNzKSB7XG5cdFx0XHRcdFx0X3N0YXJ0VGltZSArPSAtX2xhc3RVcGRhdGUgKyAoX2xhc3RVcGRhdGUgPSBfZ2V0VGltZSgpKTtcblx0XHRcdFx0fSBlbHNlIGlmIChfc2VsZi5mcmFtZSA+IDEwKSB7IC8vZG9uJ3QgdHJpZ2dlciBsYWdTbW9vdGhpbmcgaWYgd2UncmUganVzdCB3YWtpbmcgdXAsIGFuZCBtYWtlIHN1cmUgdGhhdCBhdCBsZWFzdCAxMCBmcmFtZXMgaGF2ZSBlbGFwc2VkIGJlY2F1c2Ugb2YgdGhlIGlPUyBidWcgdGhhdCB3ZSB3b3JrIGFyb3VuZCBiZWxvdyB3aXRoIHRoZSAxLjUtc2Vjb25kIHNldFRpbW91dCgpLlxuXHRcdFx0XHRcdF9sYXN0VXBkYXRlID0gX2dldFRpbWUoKSAtIF9sYWdUaHJlc2hvbGQgKyA1O1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9yZXEgPSAoX2ZwcyA9PT0gMCkgPyBfZW1wdHlGdW5jIDogKCFfdXNlUkFGIHx8ICFfcmVxQW5pbUZyYW1lKSA/IGZ1bmN0aW9uKGYpIHsgcmV0dXJuIHNldFRpbWVvdXQoZiwgKChfbmV4dFRpbWUgLSBfc2VsZi50aW1lKSAqIDEwMDAgKyAxKSB8IDApOyB9IDogX3JlcUFuaW1GcmFtZTtcblx0XHRcdFx0aWYgKF9zZWxmID09PSBfdGlja2VyKSB7XG5cdFx0XHRcdFx0X3RpY2tlckFjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3RpY2soMik7XG5cdFx0XHR9O1xuXG5cdFx0XHRfc2VsZi5mcHMgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gX2Zwcztcblx0XHRcdFx0fVxuXHRcdFx0XHRfZnBzID0gdmFsdWU7XG5cdFx0XHRcdF9nYXAgPSAxIC8gKF9mcHMgfHwgNjApO1xuXHRcdFx0XHRfbmV4dFRpbWUgPSB0aGlzLnRpbWUgKyBfZ2FwO1xuXHRcdFx0XHRfc2VsZi53YWtlKCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRfc2VsZi51c2VSQUYgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gX3VzZVJBRjtcblx0XHRcdFx0fVxuXHRcdFx0XHRfc2VsZi5zbGVlcCgpO1xuXHRcdFx0XHRfdXNlUkFGID0gdmFsdWU7XG5cdFx0XHRcdF9zZWxmLmZwcyhfZnBzKTtcblx0XHRcdH07XG5cdFx0XHRfc2VsZi5mcHMoZnBzKTtcblxuXHRcdFx0Ly9hIGJ1ZyBpbiBpT1MgNiBTYWZhcmkgb2NjYXNpb25hbGx5IHByZXZlbnRzIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSB3b3JraW5nIGluaXRpYWxseSwgc28gd2UgdXNlIGEgMS41LXNlY29uZCB0aW1lb3V0IHRoYXQgYXV0b21hdGljYWxseSBmYWxscyBiYWNrIHRvIHNldFRpbWVvdXQoKSBpZiBpdCBzZW5zZXMgdGhpcyBjb25kaXRpb24uXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoX3VzZVJBRiA9PT0gXCJhdXRvXCIgJiYgX3NlbGYuZnJhbWUgPCA1ICYmIChfZG9jIHx8IHt9KS52aXNpYmlsaXR5U3RhdGUgIT09IFwiaGlkZGVuXCIpIHtcblx0XHRcdFx0XHRfc2VsZi51c2VSQUYoZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAxNTAwKTtcblx0XHR9KTtcblxuXHRcdHAgPSBncy5UaWNrZXIucHJvdG90eXBlID0gbmV3IGdzLmV2ZW50cy5FdmVudERpc3BhdGNoZXIoKTtcblx0XHRwLmNvbnN0cnVjdG9yID0gZ3MuVGlja2VyO1xuXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBbmltYXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXHRcdHZhciBBbmltYXRpb24gPSBfY2xhc3MoXCJjb3JlLkFuaW1hdGlvblwiLCBmdW5jdGlvbihkdXJhdGlvbiwgdmFycykge1xuXHRcdFx0XHR0aGlzLnZhcnMgPSB2YXJzID0gdmFycyB8fCB7fTtcblx0XHRcdFx0dGhpcy5fZHVyYXRpb24gPSB0aGlzLl90b3RhbER1cmF0aW9uID0gZHVyYXRpb24gfHwgMDtcblx0XHRcdFx0dGhpcy5fZGVsYXkgPSBOdW1iZXIodmFycy5kZWxheSkgfHwgMDtcblx0XHRcdFx0dGhpcy5fdGltZVNjYWxlID0gMTtcblx0XHRcdFx0dGhpcy5fYWN0aXZlID0gISF2YXJzLmltbWVkaWF0ZVJlbmRlcjtcblx0XHRcdFx0dGhpcy5kYXRhID0gdmFycy5kYXRhO1xuXHRcdFx0XHR0aGlzLl9yZXZlcnNlZCA9ICEhdmFycy5yZXZlcnNlZDtcblxuXHRcdFx0XHRpZiAoIV9yb290VGltZWxpbmUpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFfdGlja2VyQWN0aXZlKSB7IC8vc29tZSBicm93c2VycyAobGlrZSBpT1MgNiBTYWZhcmkpIHNodXQgZG93biBKYXZhU2NyaXB0IGV4ZWN1dGlvbiB3aGVuIHRoZSB0YWIgaXMgZGlzYWJsZWQgYW5kIHRoZXkgW29jY2FzaW9uYWxseV0gbmVnbGVjdCB0byBzdGFydCB1cCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgYWdhaW4gd2hlbiByZXR1cm5pbmcgLSB0aGlzIGNvZGUgZW5zdXJlcyB0aGF0IHRoZSBlbmdpbmUgc3RhcnRzIHVwIGFnYWluIHByb3Blcmx5LlxuXHRcdFx0XHRcdF90aWNrZXIud2FrZSgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHRsID0gdGhpcy52YXJzLnVzZUZyYW1lcyA/IF9yb290RnJhbWVzVGltZWxpbmUgOiBfcm9vdFRpbWVsaW5lO1xuXHRcdFx0XHR0bC5hZGQodGhpcywgdGwuX3RpbWUpO1xuXG5cdFx0XHRcdGlmICh0aGlzLnZhcnMucGF1c2VkKSB7XG5cdFx0XHRcdFx0dGhpcy5wYXVzZWQodHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0X3RpY2tlciA9IEFuaW1hdGlvbi50aWNrZXIgPSBuZXcgZ3MuVGlja2VyKCk7XG5cdFx0cCA9IEFuaW1hdGlvbi5wcm90b3R5cGU7XG5cdFx0cC5fZGlydHkgPSBwLl9nYyA9IHAuX2luaXR0ZWQgPSBwLl9wYXVzZWQgPSBmYWxzZTtcblx0XHRwLl90b3RhbFRpbWUgPSBwLl90aW1lID0gMDtcblx0XHRwLl9yYXdQcmV2VGltZSA9IC0xO1xuXHRcdHAuX25leHQgPSBwLl9sYXN0ID0gcC5fb25VcGRhdGUgPSBwLl90aW1lbGluZSA9IHAudGltZWxpbmUgPSBudWxsO1xuXHRcdHAuX3BhdXNlZCA9IGZhbHNlO1xuXG5cblx0XHQvL3NvbWUgYnJvd3NlcnMgKGxpa2UgaU9TKSBvY2Nhc2lvbmFsbHkgZHJvcCB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGV2ZW50IHdoZW4gdGhlIHVzZXIgc3dpdGNoZXMgdG8gYSBkaWZmZXJlbnQgdGFiIGFuZCB0aGVuIGNvbWVzIGJhY2sgYWdhaW4sIHNvIHdlIHVzZSBhIDItc2Vjb25kIHNldFRpbWVvdXQoKSB0byBzZW5zZSBpZi93aGVuIHRoYXQgY29uZGl0aW9uIG9jY3VycyBhbmQgdGhlbiB3YWtlKCkgdGhlIHRpY2tlci5cblx0XHR2YXIgX2NoZWNrVGltZW91dCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoX3RpY2tlckFjdGl2ZSAmJiBfZ2V0VGltZSgpIC0gX2xhc3RVcGRhdGUgPiAyMDAwICYmICgoX2RvYyB8fCB7fSkudmlzaWJpbGl0eVN0YXRlICE9PSBcImhpZGRlblwiIHx8ICFfdGlja2VyLmxhZ1Ntb290aGluZygpKSkgeyAvL25vdGU6IGlmIHRoZSB0YWIgaXMgaGlkZGVuLCB3ZSBzaG91bGQgc3RpbGwgd2FrZSBpZiBsYWdTbW9vdGhpbmcgaGFzIGJlZW4gZGlzYWJsZWQuXG5cdFx0XHRcdFx0X3RpY2tlci53YWtlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHQgPSBzZXRUaW1lb3V0KF9jaGVja1RpbWVvdXQsIDIwMDApO1xuXHRcdFx0XHRpZiAodC51bnJlZikge1xuXHRcdFx0XHRcdC8vIGFsbG93cyBhIG5vZGUgcHJvY2VzcyB0byBleGl0IGV2ZW4gaWYgdGhlIHRpbWVvdXTigJlzIGNhbGxiYWNrIGhhc24ndCBiZWVuIGludm9rZWQuIFdpdGhvdXQgaXQsIHRoZSBub2RlIHByb2Nlc3MgY291bGQgaGFuZyBhcyB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBldmVyeSB0d28gc2Vjb25kcy5cblx0XHRcdFx0XHR0LnVucmVmKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0X2NoZWNrVGltZW91dCgpO1xuXG5cblx0XHRwLnBsYXkgPSBmdW5jdGlvbihmcm9tLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0aWYgKGZyb20gIT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnNlZWsoZnJvbSwgc3VwcHJlc3NFdmVudHMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMucmV2ZXJzZWQoZmFsc2UpLnBhdXNlZChmYWxzZSk7XG5cdFx0fTtcblxuXHRcdHAucGF1c2UgPSBmdW5jdGlvbihhdFRpbWUsIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRpZiAoYXRUaW1lICE9IG51bGwpIHtcblx0XHRcdFx0dGhpcy5zZWVrKGF0VGltZSwgc3VwcHJlc3NFdmVudHMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMucGF1c2VkKHRydWUpO1xuXHRcdH07XG5cblx0XHRwLnJlc3VtZSA9IGZ1bmN0aW9uKGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRpZiAoZnJvbSAhPSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuc2Vlayhmcm9tLCBzdXBwcmVzc0V2ZW50cyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXVzZWQoZmFsc2UpO1xuXHRcdH07XG5cblx0XHRwLnNlZWsgPSBmdW5jdGlvbih0aW1lLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0cmV0dXJuIHRoaXMudG90YWxUaW1lKE51bWJlcih0aW1lKSwgc3VwcHJlc3NFdmVudHMgIT09IGZhbHNlKTtcblx0XHR9O1xuXG5cdFx0cC5yZXN0YXJ0ID0gZnVuY3Rpb24oaW5jbHVkZURlbGF5LCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0cmV0dXJuIHRoaXMucmV2ZXJzZWQoZmFsc2UpLnBhdXNlZChmYWxzZSkudG90YWxUaW1lKGluY2x1ZGVEZWxheSA/IC10aGlzLl9kZWxheSA6IDAsIChzdXBwcmVzc0V2ZW50cyAhPT0gZmFsc2UpLCB0cnVlKTtcblx0XHR9O1xuXG5cdFx0cC5yZXZlcnNlID0gZnVuY3Rpb24oZnJvbSwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdGlmIChmcm9tICE9IG51bGwpIHtcblx0XHRcdFx0dGhpcy5zZWVrKChmcm9tIHx8IHRoaXMudG90YWxEdXJhdGlvbigpKSwgc3VwcHJlc3NFdmVudHMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMucmV2ZXJzZWQodHJ1ZSkucGF1c2VkKGZhbHNlKTtcblx0XHR9O1xuXG5cdFx0cC5yZW5kZXIgPSBmdW5jdGlvbih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcblx0XHRcdC8vc3R1YiAtIHdlIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGluIHN1YmNsYXNzZXMuXG5cdFx0fTtcblxuXHRcdHAuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5fdGltZSA9IHRoaXMuX3RvdGFsVGltZSA9IDA7XG5cdFx0XHR0aGlzLl9pbml0dGVkID0gdGhpcy5fZ2MgPSBmYWxzZTtcblx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gLTE7XG5cdFx0XHRpZiAodGhpcy5fZ2MgfHwgIXRoaXMudGltZWxpbmUpIHtcblx0XHRcdFx0dGhpcy5fZW5hYmxlZCh0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLmlzQWN0aXZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdGwgPSB0aGlzLl90aW1lbGluZSwgLy90aGUgMiByb290IHRpbWVsaW5lcyB3b24ndCBoYXZlIGEgX3RpbWVsaW5lOyB0aGV5J3JlIGFsd2F5cyBhY3RpdmUuXG5cdFx0XHRcdHN0YXJ0VGltZSA9IHRoaXMuX3N0YXJ0VGltZSxcblx0XHRcdFx0cmF3VGltZTtcblx0XHRcdHJldHVybiAoIXRsIHx8ICghdGhpcy5fZ2MgJiYgIXRoaXMuX3BhdXNlZCAmJiB0bC5pc0FjdGl2ZSgpICYmIChyYXdUaW1lID0gdGwucmF3VGltZSh0cnVlKSkgPj0gc3RhcnRUaW1lICYmIHJhd1RpbWUgPCBzdGFydFRpbWUgKyB0aGlzLnRvdGFsRHVyYXRpb24oKSAvIHRoaXMuX3RpbWVTY2FsZSAtIF90aW55TnVtKSk7XG5cdFx0fTtcblxuXHRcdHAuX2VuYWJsZWQgPSBmdW5jdGlvbiAoZW5hYmxlZCwgaWdub3JlVGltZWxpbmUpIHtcblx0XHRcdGlmICghX3RpY2tlckFjdGl2ZSkge1xuXHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2djID0gIWVuYWJsZWQ7XG5cdFx0XHR0aGlzLl9hY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XG5cdFx0XHRpZiAoaWdub3JlVGltZWxpbmUgIT09IHRydWUpIHtcblx0XHRcdFx0aWYgKGVuYWJsZWQgJiYgIXRoaXMudGltZWxpbmUpIHtcblx0XHRcdFx0XHR0aGlzLl90aW1lbGluZS5hZGQodGhpcywgdGhpcy5fc3RhcnRUaW1lIC0gdGhpcy5fZGVsYXkpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCFlbmFibGVkICYmIHRoaXMudGltZWxpbmUpIHtcblx0XHRcdFx0XHR0aGlzLl90aW1lbGluZS5fcmVtb3ZlKHRoaXMsIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblxuXG5cdFx0cC5fa2lsbCA9IGZ1bmN0aW9uKHZhcnMsIHRhcmdldCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHR9O1xuXG5cdFx0cC5raWxsID0gZnVuY3Rpb24odmFycywgdGFyZ2V0KSB7XG5cdFx0XHR0aGlzLl9raWxsKHZhcnMsIHRhcmdldCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5fdW5jYWNoZSA9IGZ1bmN0aW9uKGluY2x1ZGVTZWxmKSB7XG5cdFx0XHR2YXIgdHdlZW4gPSBpbmNsdWRlU2VsZiA/IHRoaXMgOiB0aGlzLnRpbWVsaW5lO1xuXHRcdFx0d2hpbGUgKHR3ZWVuKSB7XG5cdFx0XHRcdHR3ZWVuLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdHR3ZWVuID0gdHdlZW4udGltZWxpbmU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5fc3dhcFNlbGZJblBhcmFtcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuXHRcdFx0dmFyIGkgPSBwYXJhbXMubGVuZ3RoLFxuXHRcdFx0XHRjb3B5ID0gcGFyYW1zLmNvbmNhdCgpO1xuXHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdGlmIChwYXJhbXNbaV0gPT09IFwie3NlbGZ9XCIpIHtcblx0XHRcdFx0XHRjb3B5W2ldID0gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvcHk7XG5cdFx0fTtcblxuXHRcdHAuX2NhbGxiYWNrID0gZnVuY3Rpb24odHlwZSkge1xuXHRcdFx0dmFyIHYgPSB0aGlzLnZhcnMsXG5cdFx0XHRcdGNhbGxiYWNrID0gdlt0eXBlXSxcblx0XHRcdFx0cGFyYW1zID0gdlt0eXBlICsgXCJQYXJhbXNcIl0sXG5cdFx0XHRcdHNjb3BlID0gdlt0eXBlICsgXCJTY29wZVwiXSB8fCB2LmNhbGxiYWNrU2NvcGUgfHwgdGhpcyxcblx0XHRcdFx0bCA9IHBhcmFtcyA/IHBhcmFtcy5sZW5ndGggOiAwO1xuXHRcdFx0c3dpdGNoIChsKSB7IC8vc3BlZWQgb3B0aW1pemF0aW9uOyBjYWxsKCkgaXMgZmFzdGVyIHRoYW4gYXBwbHkoKSBzbyB1c2UgaXQgd2hlbiB0aGVyZSBhcmUgb25seSBhIGZldyBwYXJhbWV0ZXJzICh3aGljaCBpcyBieSBmYXIgbW9zdCBjb21tb24pLiBQcmV2aW91c2x5IHdlIHNpbXBseSBkaWQgdmFyIHYgPSB0aGlzLnZhcnM7IHZbdHlwZV0uYXBwbHkodlt0eXBlICsgXCJTY29wZVwiXSB8fCB2LmNhbGxiYWNrU2NvcGUgfHwgdGhpcywgdlt0eXBlICsgXCJQYXJhbXNcIl0gfHwgX2JsYW5rQXJyYXkpO1xuXHRcdFx0XHRjYXNlIDA6IGNhbGxiYWNrLmNhbGwoc2NvcGUpOyBicmVhaztcblx0XHRcdFx0Y2FzZSAxOiBjYWxsYmFjay5jYWxsKHNjb3BlLCBwYXJhbXNbMF0pOyBicmVhaztcblx0XHRcdFx0Y2FzZSAyOiBjYWxsYmFjay5jYWxsKHNjb3BlLCBwYXJhbXNbMF0sIHBhcmFtc1sxXSk7IGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OiBjYWxsYmFjay5hcHBseShzY29wZSwgcGFyYW1zKTtcblx0XHRcdH1cblx0XHR9O1xuXG4vLy0tLS1BbmltYXRpb24gZ2V0dGVycy9zZXR0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRwLmV2ZW50Q2FsbGJhY2sgPSBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaywgcGFyYW1zLCBzY29wZSkge1xuXHRcdFx0aWYgKCh0eXBlIHx8IFwiXCIpLnN1YnN0cigwLDIpID09PSBcIm9uXCIpIHtcblx0XHRcdFx0dmFyIHYgPSB0aGlzLnZhcnM7XG5cdFx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZbdHlwZV07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNhbGxiYWNrID09IG51bGwpIHtcblx0XHRcdFx0XHRkZWxldGUgdlt0eXBlXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2W3R5cGVdID0gY2FsbGJhY2s7XG5cdFx0XHRcdFx0dlt0eXBlICsgXCJQYXJhbXNcIl0gPSAoX2lzQXJyYXkocGFyYW1zKSAmJiBwYXJhbXMuam9pbihcIlwiKS5pbmRleE9mKFwie3NlbGZ9XCIpICE9PSAtMSkgPyB0aGlzLl9zd2FwU2VsZkluUGFyYW1zKHBhcmFtcykgOiBwYXJhbXM7XG5cdFx0XHRcdFx0dlt0eXBlICsgXCJTY29wZVwiXSA9IHNjb3BlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlID09PSBcIm9uVXBkYXRlXCIpIHtcblx0XHRcdFx0XHR0aGlzLl9vblVwZGF0ZSA9IGNhbGxiYWNrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5kZWxheSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2RlbGF5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lLnNtb290aENoaWxkVGltaW5nKSB7XG5cdFx0XHRcdHRoaXMuc3RhcnRUaW1lKCB0aGlzLl9zdGFydFRpbWUgKyB2YWx1ZSAtIHRoaXMuX2RlbGF5ICk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9kZWxheSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAuZHVyYXRpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMuX2RpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9kdXJhdGlvbjtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2R1cmF0aW9uID0gdGhpcy5fdG90YWxEdXJhdGlvbiA9IHZhbHVlO1xuXHRcdFx0dGhpcy5fdW5jYWNoZSh0cnVlKTsgLy90cnVlIGluIGNhc2UgaXQncyBhIFR3ZWVuTWF4IG9yIFRpbWVsaW5lTWF4IHRoYXQgaGFzIGEgcmVwZWF0IC0gd2UnbGwgbmVlZCB0byByZWZyZXNoIHRoZSB0b3RhbER1cmF0aW9uLlxuXHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lLnNtb290aENoaWxkVGltaW5nKSBpZiAodGhpcy5fdGltZSA+IDApIGlmICh0aGlzLl90aW1lIDwgdGhpcy5fZHVyYXRpb24pIGlmICh2YWx1ZSAhPT0gMCkge1xuXHRcdFx0XHR0aGlzLnRvdGFsVGltZSh0aGlzLl90b3RhbFRpbWUgKiAodmFsdWUgLyB0aGlzLl9kdXJhdGlvbiksIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAudG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHR0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuICghYXJndW1lbnRzLmxlbmd0aCkgPyB0aGlzLl90b3RhbER1cmF0aW9uIDogdGhpcy5kdXJhdGlvbih2YWx1ZSk7XG5cdFx0fTtcblxuXHRcdHAudGltZSA9IGZ1bmN0aW9uKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl90aW1lO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX2RpcnR5KSB7XG5cdFx0XHRcdHRoaXMudG90YWxEdXJhdGlvbigpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMudG90YWxUaW1lKCh2YWx1ZSA+IHRoaXMuX2R1cmF0aW9uKSA/IHRoaXMuX2R1cmF0aW9uIDogdmFsdWUsIHN1cHByZXNzRXZlbnRzKTtcblx0XHR9O1xuXG5cdFx0cC50b3RhbFRpbWUgPSBmdW5jdGlvbih0aW1lLCBzdXBwcmVzc0V2ZW50cywgdW5jYXBwZWQpIHtcblx0XHRcdGlmICghX3RpY2tlckFjdGl2ZSkge1xuXHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdH1cblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdG90YWxUaW1lO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdGlmICh0aW1lIDwgMCAmJiAhdW5jYXBwZWQpIHtcblx0XHRcdFx0XHR0aW1lICs9IHRoaXMudG90YWxEdXJhdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLl90aW1lbGluZS5zbW9vdGhDaGlsZFRpbWluZykge1xuXHRcdFx0XHRcdGlmICh0aGlzLl9kaXJ0eSkge1xuXHRcdFx0XHRcdFx0dGhpcy50b3RhbER1cmF0aW9uKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciB0b3RhbER1cmF0aW9uID0gdGhpcy5fdG90YWxEdXJhdGlvbixcblx0XHRcdFx0XHRcdHRsID0gdGhpcy5fdGltZWxpbmU7XG5cdFx0XHRcdFx0aWYgKHRpbWUgPiB0b3RhbER1cmF0aW9uICYmICF1bmNhcHBlZCkge1xuXHRcdFx0XHRcdFx0dGltZSA9IHRvdGFsRHVyYXRpb247XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSA9ICh0aGlzLl9wYXVzZWQgPyB0aGlzLl9wYXVzZVRpbWUgOiB0bC5fdGltZSkgLSAoKCF0aGlzLl9yZXZlcnNlZCA/IHRpbWUgOiB0b3RhbER1cmF0aW9uIC0gdGltZSkgLyB0aGlzLl90aW1lU2NhbGUpO1xuXHRcdFx0XHRcdGlmICghdGwuX2RpcnR5KSB7IC8vZm9yIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50LiBJZiB0aGUgcGFyZW50J3MgY2FjaGUgaXMgYWxyZWFkeSBkaXJ0eSwgaXQgYWxyZWFkeSB0b29rIGNhcmUgb2YgbWFya2luZyB0aGUgYW5jZXN0b3JzIGFzIGRpcnR5IHRvbywgc28gc2tpcCB0aGUgZnVuY3Rpb24gY2FsbCBoZXJlLlxuXHRcdFx0XHRcdFx0dGhpcy5fdW5jYWNoZShmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vaW4gY2FzZSBhbnkgb2YgdGhlIGFuY2VzdG9yIHRpbWVsaW5lcyBoYWQgY29tcGxldGVkIGJ1dCBzaG91bGQgbm93IGJlIGVuYWJsZWQsIHdlIHNob3VsZCByZXNldCB0aGVpciB0b3RhbFRpbWUoKSB3aGljaCB3aWxsIGFsc28gZW5zdXJlIHRoYXQgdGhleSdyZSBsaW5lZCB1cCBwcm9wZXJseSBhbmQgZW5hYmxlZC4gU2tpcCBmb3IgYW5pbWF0aW9ucyB0aGF0IGFyZSBvbiB0aGUgcm9vdCAod2FzdGVmdWwpLiBFeGFtcGxlOiBhIFRpbWVsaW5lTGl0ZS5leHBvcnRSb290KCkgaXMgcGVyZm9ybWVkIHdoZW4gdGhlcmUncyBhIHBhdXNlZCB0d2VlbiBvbiB0aGUgcm9vdCwgdGhlIGV4cG9ydCB3aWxsIG5vdCBjb21wbGV0ZSB1bnRpbCB0aGF0IHR3ZWVuIGlzIHVucGF1c2VkLCBidXQgaW1hZ2luZSBhIGNoaWxkIGdldHMgcmVzdGFydGVkIGxhdGVyLCBhZnRlciBhbGwgW3VucGF1c2VkXSB0d2VlbnMgaGF2ZSBjb21wbGV0ZWQuIFRoZSBzdGFydFRpbWUgb2YgdGhhdCBjaGlsZCB3b3VsZCBnZXQgcHVzaGVkIG91dCwgYnV0IG9uZSBvZiB0aGUgYW5jZXN0b3JzIG1heSBoYXZlIGNvbXBsZXRlZC5cblx0XHRcdFx0XHRpZiAodGwuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdFx0XHR3aGlsZSAodGwuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0bC5fdGltZWxpbmUuX3RpbWUgIT09ICh0bC5fc3RhcnRUaW1lICsgdGwuX3RvdGFsVGltZSkgLyB0bC5fdGltZVNjYWxlKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGwudG90YWxUaW1lKHRsLl90b3RhbFRpbWUsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHRsID0gdGwuX3RpbWVsaW5lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5fZ2MpIHtcblx0XHRcdFx0XHR0aGlzLl9lbmFibGVkKHRydWUsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5fdG90YWxUaW1lICE9PSB0aW1lIHx8IHRoaXMuX2R1cmF0aW9uID09PSAwKSB7XG5cdFx0XHRcdFx0aWYgKF9sYXp5VHdlZW5zLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0X2xhenlSZW5kZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5yZW5kZXIodGltZSwgc3VwcHJlc3NFdmVudHMsIGZhbHNlKTtcblx0XHRcdFx0XHRpZiAoX2xhenlUd2VlbnMubGVuZ3RoKSB7IC8vaW4gY2FzZSByZW5kZXJpbmcgY2F1c2VkIGFueSB0d2VlbnMgdG8gbGF6eS1pbml0LCB3ZSBzaG91bGQgcmVuZGVyIHRoZW0gYmVjYXVzZSB0eXBpY2FsbHkgd2hlbiBzb21lb25lIGNhbGxzIHNlZWsoKSBvciB0aW1lKCkgb3IgcHJvZ3Jlc3MoKSwgdGhleSBleHBlY3QgYW4gaW1tZWRpYXRlIHJlbmRlci5cblx0XHRcdFx0XHRcdF9sYXp5UmVuZGVyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5wcm9ncmVzcyA9IHAudG90YWxQcm9ncmVzcyA9IGZ1bmN0aW9uKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0dmFyIGR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbigpO1xuXHRcdFx0cmV0dXJuICghYXJndW1lbnRzLmxlbmd0aCkgPyAoZHVyYXRpb24gPyB0aGlzLl90aW1lIC8gZHVyYXRpb24gOiB0aGlzLnJhdGlvKSA6IHRoaXMudG90YWxUaW1lKGR1cmF0aW9uICogdmFsdWUsIHN1cHByZXNzRXZlbnRzKTtcblx0XHR9O1xuXG5cdFx0cC5zdGFydFRpbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9zdGFydFRpbWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWUgIT09IHRoaXMuX3N0YXJ0VGltZSkge1xuXHRcdFx0XHR0aGlzLl9zdGFydFRpbWUgPSB2YWx1ZTtcblx0XHRcdFx0aWYgKHRoaXMudGltZWxpbmUpIGlmICh0aGlzLnRpbWVsaW5lLl9zb3J0Q2hpbGRyZW4pIHtcblx0XHRcdFx0XHR0aGlzLnRpbWVsaW5lLmFkZCh0aGlzLCB2YWx1ZSAtIHRoaXMuX2RlbGF5KTsgLy9lbnN1cmVzIHRoYXQgYW55IG5lY2Vzc2FyeSByZS1zZXF1ZW5jaW5nIG9mIEFuaW1hdGlvbnMgaW4gdGhlIHRpbWVsaW5lIG9jY3VycyB0byBtYWtlIHN1cmUgdGhlIHJlbmRlcmluZyBvcmRlciBpcyBjb3JyZWN0LlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5lbmRUaW1lID0gZnVuY3Rpb24oaW5jbHVkZVJlcGVhdHMpIHtcblx0XHRcdHJldHVybiB0aGlzLl9zdGFydFRpbWUgKyAoKGluY2x1ZGVSZXBlYXRzICE9IGZhbHNlKSA/IHRoaXMudG90YWxEdXJhdGlvbigpIDogdGhpcy5kdXJhdGlvbigpKSAvIHRoaXMuX3RpbWVTY2FsZTtcblx0XHR9O1xuXG5cdFx0cC50aW1lU2NhbGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl90aW1lU2NhbGU7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcGF1c2VUaW1lLCB0O1xuXHRcdFx0dmFsdWUgPSB2YWx1ZSB8fCBfdGlueU51bTsgLy9jYW4ndCBhbGxvdyB6ZXJvIGJlY2F1c2UgaXQnbGwgdGhyb3cgdGhlIG1hdGggb2ZmXG5cdFx0XHRpZiAodGhpcy5fdGltZWxpbmUgJiYgdGhpcy5fdGltZWxpbmUuc21vb3RoQ2hpbGRUaW1pbmcpIHtcblx0XHRcdFx0cGF1c2VUaW1lID0gdGhpcy5fcGF1c2VUaW1lO1xuXHRcdFx0XHR0ID0gKHBhdXNlVGltZSB8fCBwYXVzZVRpbWUgPT09IDApID8gcGF1c2VUaW1lIDogdGhpcy5fdGltZWxpbmUudG90YWxUaW1lKCk7XG5cdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSA9IHQgLSAoKHQgLSB0aGlzLl9zdGFydFRpbWUpICogdGhpcy5fdGltZVNjYWxlIC8gdmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fdGltZVNjYWxlID0gdmFsdWU7XG5cdFx0XHR0ID0gdGhpcy50aW1lbGluZTtcblx0XHRcdHdoaWxlICh0ICYmIHQudGltZWxpbmUpIHsgLy9tdXN0IHVwZGF0ZSB0aGUgZHVyYXRpb24vdG90YWxEdXJhdGlvbiBvZiBhbGwgYW5jZXN0b3IgdGltZWxpbmVzIGltbWVkaWF0ZWx5IGluIGNhc2UgaW4gdGhlIG1pZGRsZSBvZiBhIHJlbmRlciBsb29wLCBvbmUgdHdlZW4gYWx0ZXJzIGFub3RoZXIgdHdlZW4ncyB0aW1lU2NhbGUgd2hpY2ggc2hvdmVzIGl0cyBzdGFydFRpbWUgYmVmb3JlIDAsIGZvcmNpbmcgdGhlIHBhcmVudCB0aW1lbGluZSB0byBzaGlmdCBhcm91bmQgYW5kIHNoaWZ0Q2hpbGRyZW4oKSB3aGljaCBjb3VsZCBhZmZlY3QgdGhhdCBuZXh0IHR3ZWVuJ3MgcmVuZGVyIChzdGFydFRpbWUpLiBEb2Vzbid0IG1hdHRlciBmb3IgdGhlIHJvb3QgdGltZWxpbmUgdGhvdWdoLlxuXHRcdFx0XHR0Ll9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdHQudG90YWxEdXJhdGlvbigpO1xuXHRcdFx0XHR0ID0gdC50aW1lbGluZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLnJldmVyc2VkID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fcmV2ZXJzZWQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWUgIT0gdGhpcy5fcmV2ZXJzZWQpIHtcblx0XHRcdFx0dGhpcy5fcmV2ZXJzZWQgPSB2YWx1ZTtcblx0XHRcdFx0dGhpcy50b3RhbFRpbWUoKCh0aGlzLl90aW1lbGluZSAmJiAhdGhpcy5fdGltZWxpbmUuc21vb3RoQ2hpbGRUaW1pbmcpID8gdGhpcy50b3RhbER1cmF0aW9uKCkgLSB0aGlzLl90b3RhbFRpbWUgOiB0aGlzLl90b3RhbFRpbWUpLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLnBhdXNlZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3BhdXNlZDtcblx0XHRcdH1cblx0XHRcdHZhciB0bCA9IHRoaXMuX3RpbWVsaW5lLFxuXHRcdFx0XHRyYXcsIGVsYXBzZWQ7XG5cdFx0XHRpZiAodmFsdWUgIT0gdGhpcy5fcGF1c2VkKSBpZiAodGwpIHtcblx0XHRcdFx0aWYgKCFfdGlja2VyQWN0aXZlICYmICF2YWx1ZSkge1xuXHRcdFx0XHRcdF90aWNrZXIud2FrZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJhdyA9IHRsLnJhd1RpbWUoKTtcblx0XHRcdFx0ZWxhcHNlZCA9IHJhdyAtIHRoaXMuX3BhdXNlVGltZTtcblx0XHRcdFx0aWYgKCF2YWx1ZSAmJiB0bC5zbW9vdGhDaGlsZFRpbWluZykge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSArPSBlbGFwc2VkO1xuXHRcdFx0XHRcdHRoaXMuX3VuY2FjaGUoZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3BhdXNlVGltZSA9IHZhbHVlID8gcmF3IDogbnVsbDtcblx0XHRcdFx0dGhpcy5fcGF1c2VkID0gdmFsdWU7XG5cdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcblx0XHRcdFx0aWYgKCF2YWx1ZSAmJiBlbGFwc2VkICE9PSAwICYmIHRoaXMuX2luaXR0ZWQgJiYgdGhpcy5kdXJhdGlvbigpKSB7XG5cdFx0XHRcdFx0cmF3ID0gdGwuc21vb3RoQ2hpbGRUaW1pbmcgPyB0aGlzLl90b3RhbFRpbWUgOiAocmF3IC0gdGhpcy5fc3RhcnRUaW1lKSAvIHRoaXMuX3RpbWVTY2FsZTtcblx0XHRcdFx0XHR0aGlzLnJlbmRlcihyYXcsIChyYXcgPT09IHRoaXMuX3RvdGFsVGltZSksIHRydWUpOyAvL2luIGNhc2UgdGhlIHRhcmdldCdzIHByb3BlcnRpZXMgY2hhbmdlZCB2aWEgc29tZSBvdGhlciB0d2VlbiBvciBtYW51YWwgdXBkYXRlIGJ5IHRoZSB1c2VyLCB3ZSBzaG91bGQgZm9yY2UgYSByZW5kZXIuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl9nYyAmJiAhdmFsdWUpIHtcblx0XHRcdFx0dGhpcy5fZW5hYmxlZCh0cnVlLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBTaW1wbGVUaW1lbGluZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdFx0dmFyIFNpbXBsZVRpbWVsaW5lID0gX2NsYXNzKFwiY29yZS5TaW1wbGVUaW1lbGluZVwiLCBmdW5jdGlvbih2YXJzKSB7XG5cdFx0XHRBbmltYXRpb24uY2FsbCh0aGlzLCAwLCB2YXJzKTtcblx0XHRcdHRoaXMuYXV0b1JlbW92ZUNoaWxkcmVuID0gdGhpcy5zbW9vdGhDaGlsZFRpbWluZyA9IHRydWU7XG5cdFx0fSk7XG5cblx0XHRwID0gU2ltcGxlVGltZWxpbmUucHJvdG90eXBlID0gbmV3IEFuaW1hdGlvbigpO1xuXHRcdHAuY29uc3RydWN0b3IgPSBTaW1wbGVUaW1lbGluZTtcblx0XHRwLmtpbGwoKS5fZ2MgPSBmYWxzZTtcblx0XHRwLl9maXJzdCA9IHAuX2xhc3QgPSBwLl9yZWNlbnQgPSBudWxsO1xuXHRcdHAuX3NvcnRDaGlsZHJlbiA9IGZhbHNlO1xuXG5cdFx0cC5hZGQgPSBwLmluc2VydCA9IGZ1bmN0aW9uKGNoaWxkLCBwb3NpdGlvbiwgYWxpZ24sIHN0YWdnZXIpIHtcblx0XHRcdHZhciBwcmV2VHdlZW4sIHN0O1xuXHRcdFx0Y2hpbGQuX3N0YXJ0VGltZSA9IE51bWJlcihwb3NpdGlvbiB8fCAwKSArIGNoaWxkLl9kZWxheTtcblx0XHRcdGlmIChjaGlsZC5fcGF1c2VkKSBpZiAodGhpcyAhPT0gY2hpbGQuX3RpbWVsaW5lKSB7IC8vd2Ugb25seSBhZGp1c3QgdGhlIF9wYXVzZVRpbWUgaWYgaXQgd2Fzbid0IGluIHRoaXMgdGltZWxpbmUgYWxyZWFkeS4gUmVtZW1iZXIsIHNvbWV0aW1lcyBhIHR3ZWVuIHdpbGwgYmUgaW5zZXJ0ZWQgYWdhaW4gaW50byB0aGUgc2FtZSB0aW1lbGluZSB3aGVuIGl0cyBzdGFydFRpbWUgaXMgY2hhbmdlZCBzbyB0aGF0IHRoZSB0d2VlbnMgaW4gdGhlIFRpbWVsaW5lTGl0ZS9NYXggYXJlIHJlLW9yZGVyZWQgcHJvcGVybHkgaW4gdGhlIGxpbmtlZCBsaXN0IChzbyBldmVyeXRoaW5nIHJlbmRlcnMgaW4gdGhlIHByb3BlciBvcmRlcikuXG5cdFx0XHRcdGNoaWxkLl9wYXVzZVRpbWUgPSB0aGlzLnJhd1RpbWUoKSAtIChjaGlsZC5fdGltZWxpbmUucmF3VGltZSgpIC0gY2hpbGQuX3BhdXNlVGltZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2hpbGQudGltZWxpbmUpIHtcblx0XHRcdFx0Y2hpbGQudGltZWxpbmUuX3JlbW92ZShjaGlsZCwgdHJ1ZSk7IC8vcmVtb3ZlcyBmcm9tIGV4aXN0aW5nIHRpbWVsaW5lIHNvIHRoYXQgaXQgY2FuIGJlIHByb3Blcmx5IGFkZGVkIHRvIHRoaXMgb25lLlxuXHRcdFx0fVxuXHRcdFx0Y2hpbGQudGltZWxpbmUgPSBjaGlsZC5fdGltZWxpbmUgPSB0aGlzO1xuXHRcdFx0aWYgKGNoaWxkLl9nYykge1xuXHRcdFx0XHRjaGlsZC5fZW5hYmxlZCh0cnVlLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHByZXZUd2VlbiA9IHRoaXMuX2xhc3Q7XG5cdFx0XHRpZiAodGhpcy5fc29ydENoaWxkcmVuKSB7XG5cdFx0XHRcdHN0ID0gY2hpbGQuX3N0YXJ0VGltZTtcblx0XHRcdFx0d2hpbGUgKHByZXZUd2VlbiAmJiBwcmV2VHdlZW4uX3N0YXJ0VGltZSA+IHN0KSB7XG5cdFx0XHRcdFx0cHJldlR3ZWVuID0gcHJldlR3ZWVuLl9wcmV2O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocHJldlR3ZWVuKSB7XG5cdFx0XHRcdGNoaWxkLl9uZXh0ID0gcHJldlR3ZWVuLl9uZXh0O1xuXHRcdFx0XHRwcmV2VHdlZW4uX25leHQgPSBjaGlsZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNoaWxkLl9uZXh0ID0gdGhpcy5fZmlyc3Q7XG5cdFx0XHRcdHRoaXMuX2ZpcnN0ID0gY2hpbGQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2hpbGQuX25leHQpIHtcblx0XHRcdFx0Y2hpbGQuX25leHQuX3ByZXYgPSBjaGlsZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2xhc3QgPSBjaGlsZDtcblx0XHRcdH1cblx0XHRcdGNoaWxkLl9wcmV2ID0gcHJldlR3ZWVuO1xuXHRcdFx0dGhpcy5fcmVjZW50ID0gY2hpbGQ7XG5cdFx0XHRpZiAodGhpcy5fdGltZWxpbmUpIHtcblx0XHRcdFx0dGhpcy5fdW5jYWNoZSh0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLl9yZW1vdmUgPSBmdW5jdGlvbih0d2Vlbiwgc2tpcERpc2FibGUpIHtcblx0XHRcdGlmICh0d2Vlbi50aW1lbGluZSA9PT0gdGhpcykge1xuXHRcdFx0XHRpZiAoIXNraXBEaXNhYmxlKSB7XG5cdFx0XHRcdFx0dHdlZW4uX2VuYWJsZWQoZmFsc2UsIHRydWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHR3ZWVuLl9wcmV2KSB7XG5cdFx0XHRcdFx0dHdlZW4uX3ByZXYuX25leHQgPSB0d2Vlbi5fbmV4dDtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl9maXJzdCA9PT0gdHdlZW4pIHtcblx0XHRcdFx0XHR0aGlzLl9maXJzdCA9IHR3ZWVuLl9uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0d2Vlbi5fbmV4dCkge1xuXHRcdFx0XHRcdHR3ZWVuLl9uZXh0Ll9wcmV2ID0gdHdlZW4uX3ByZXY7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fbGFzdCA9PT0gdHdlZW4pIHtcblx0XHRcdFx0XHR0aGlzLl9sYXN0ID0gdHdlZW4uX3ByZXY7XG5cdFx0XHRcdH1cblx0XHRcdFx0dHdlZW4uX25leHQgPSB0d2Vlbi5fcHJldiA9IHR3ZWVuLnRpbWVsaW5lID0gbnVsbDtcblx0XHRcdFx0aWYgKHR3ZWVuID09PSB0aGlzLl9yZWNlbnQpIHtcblx0XHRcdFx0XHR0aGlzLl9yZWNlbnQgPSB0aGlzLl9sYXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdFx0dGhpcy5fdW5jYWNoZSh0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAucmVuZGVyID0gZnVuY3Rpb24odGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG5cdFx0XHR2YXIgdHdlZW4gPSB0aGlzLl9maXJzdCxcblx0XHRcdFx0bmV4dDtcblx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHRoaXMuX3RpbWUgPSB0aGlzLl9yYXdQcmV2VGltZSA9IHRpbWU7XG5cdFx0XHR3aGlsZSAodHdlZW4pIHtcblx0XHRcdFx0bmV4dCA9IHR3ZWVuLl9uZXh0OyAvL3JlY29yZCBpdCBoZXJlIGJlY2F1c2UgdGhlIHZhbHVlIGNvdWxkIGNoYW5nZSBhZnRlciByZW5kZXJpbmcuLi5cblx0XHRcdFx0aWYgKHR3ZWVuLl9hY3RpdmUgfHwgKHRpbWUgPj0gdHdlZW4uX3N0YXJ0VGltZSAmJiAhdHdlZW4uX3BhdXNlZCAmJiAhdHdlZW4uX2djKSkge1xuXHRcdFx0XHRcdGlmICghdHdlZW4uX3JldmVyc2VkKSB7XG5cdFx0XHRcdFx0XHR0d2Vlbi5yZW5kZXIoKHRpbWUgLSB0d2Vlbi5fc3RhcnRUaW1lKSAqIHR3ZWVuLl90aW1lU2NhbGUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHR3ZWVuLnJlbmRlcigoKCF0d2Vlbi5fZGlydHkpID8gdHdlZW4uX3RvdGFsRHVyYXRpb24gOiB0d2Vlbi50b3RhbER1cmF0aW9uKCkpIC0gKCh0aW1lIC0gdHdlZW4uX3N0YXJ0VGltZSkgKiB0d2Vlbi5fdGltZVNjYWxlKSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dHdlZW4gPSBuZXh0O1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRwLnJhd1RpbWUgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICghX3RpY2tlckFjdGl2ZSkge1xuXHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLl90b3RhbFRpbWU7XG5cdFx0fTtcblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFR3ZWVuTGl0ZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdFx0dmFyIFR3ZWVuTGl0ZSA9IF9jbGFzcyhcIlR3ZWVuTGl0ZVwiLCBmdW5jdGlvbih0YXJnZXQsIGR1cmF0aW9uLCB2YXJzKSB7XG5cdFx0XHRcdEFuaW1hdGlvbi5jYWxsKHRoaXMsIGR1cmF0aW9uLCB2YXJzKTtcblx0XHRcdFx0dGhpcy5yZW5kZXIgPSBUd2VlbkxpdGUucHJvdG90eXBlLnJlbmRlcjsgLy9zcGVlZCBvcHRpbWl6YXRpb24gKGF2b2lkIHByb3RvdHlwZSBsb29rdXAgb24gdGhpcyBcImhvdFwiIG1ldGhvZClcblxuXHRcdFx0XHRpZiAodGFyZ2V0ID09IG51bGwpIHtcblx0XHRcdFx0XHR0aHJvdyBcIkNhbm5vdCB0d2VlbiBhIG51bGwgdGFyZ2V0LlwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy50YXJnZXQgPSB0YXJnZXQgPSAodHlwZW9mKHRhcmdldCkgIT09IFwic3RyaW5nXCIpID8gdGFyZ2V0IDogVHdlZW5MaXRlLnNlbGVjdG9yKHRhcmdldCkgfHwgdGFyZ2V0O1xuXG5cdFx0XHRcdHZhciBpc1NlbGVjdG9yID0gKHRhcmdldC5qcXVlcnkgfHwgKHRhcmdldC5sZW5ndGggJiYgdGFyZ2V0ICE9PSB3aW5kb3cgJiYgdGFyZ2V0WzBdICYmICh0YXJnZXRbMF0gPT09IHdpbmRvdyB8fCAodGFyZ2V0WzBdLm5vZGVUeXBlICYmIHRhcmdldFswXS5zdHlsZSAmJiAhdGFyZ2V0Lm5vZGVUeXBlKSkpKSxcblx0XHRcdFx0XHRvdmVyd3JpdGUgPSB0aGlzLnZhcnMub3ZlcndyaXRlLFxuXHRcdFx0XHRcdGksIHRhcmcsIHRhcmdldHM7XG5cblx0XHRcdFx0dGhpcy5fb3ZlcndyaXRlID0gb3ZlcndyaXRlID0gKG92ZXJ3cml0ZSA9PSBudWxsKSA/IF9vdmVyd3JpdGVMb29rdXBbVHdlZW5MaXRlLmRlZmF1bHRPdmVyd3JpdGVdIDogKHR5cGVvZihvdmVyd3JpdGUpID09PSBcIm51bWJlclwiKSA/IG92ZXJ3cml0ZSA+PiAwIDogX292ZXJ3cml0ZUxvb2t1cFtvdmVyd3JpdGVdO1xuXG5cdFx0XHRcdGlmICgoaXNTZWxlY3RvciB8fCB0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSB8fCAodGFyZ2V0LnB1c2ggJiYgX2lzQXJyYXkodGFyZ2V0KSkpICYmIHR5cGVvZih0YXJnZXRbMF0pICE9PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdFx0dGhpcy5fdGFyZ2V0cyA9IHRhcmdldHMgPSBfc2xpY2UodGFyZ2V0KTsgIC8vZG9uJ3QgdXNlIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldCwgMCkgYmVjYXVzZSB0aGF0IGRvZXNuJ3Qgd29yayBpbiBJRTggd2l0aCBhIE5vZGVMaXN0IHRoYXQncyByZXR1cm5lZCBieSBxdWVyeVNlbGVjdG9yQWxsKClcblx0XHRcdFx0XHR0aGlzLl9wcm9wTG9va3VwID0gW107XG5cdFx0XHRcdFx0dGhpcy5fc2libGluZ3MgPSBbXTtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dGFyZyA9IHRhcmdldHNbaV07XG5cdFx0XHRcdFx0XHRpZiAoIXRhcmcpIHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0cy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZih0YXJnKSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdFx0XHR0YXJnID0gdGFyZ2V0c1tpLS1dID0gVHdlZW5MaXRlLnNlbGVjdG9yKHRhcmcpOyAvL2luIGNhc2UgaXQncyBhbiBhcnJheSBvZiBzdHJpbmdzXG5cdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YodGFyZykgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRzLnNwbGljZShpKzEsIDEpOyAvL3RvIGF2b2lkIGFuIGVuZGxlc3MgbG9vcCAoY2FuJ3QgaW1hZ2luZSB3aHkgdGhlIHNlbGVjdG9yIHdvdWxkIHJldHVybiBhIHN0cmluZywgYnV0IGp1c3QgaW4gY2FzZSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGFyZy5sZW5ndGggJiYgdGFyZyAhPT0gd2luZG93ICYmIHRhcmdbMF0gJiYgKHRhcmdbMF0gPT09IHdpbmRvdyB8fCAodGFyZ1swXS5ub2RlVHlwZSAmJiB0YXJnWzBdLnN0eWxlICYmICF0YXJnLm5vZGVUeXBlKSkpIHsgLy9pbiBjYXNlIHRoZSB1c2VyIGlzIHBhc3NpbmcgaW4gYW4gYXJyYXkgb2Ygc2VsZWN0b3Igb2JqZWN0cyAobGlrZSBqUXVlcnkgb2JqZWN0cyksIHdlIG5lZWQgdG8gY2hlY2sgb25lIG1vcmUgbGV2ZWwgYW5kIHB1bGwgdGhpbmdzIG91dCBpZiBuZWNlc3NhcnkuIEFsc28gbm90ZSB0aGF0IDxzZWxlY3Q+IGVsZW1lbnRzIHBhc3MgYWxsIHRoZSBjcml0ZXJpYSByZWdhcmRpbmcgbGVuZ3RoIGFuZCB0aGUgZmlyc3QgY2hpbGQgaGF2aW5nIHN0eWxlLCBzbyB3ZSBtdXN0IGFsc28gY2hlY2sgdG8gZW5zdXJlIHRoZSB0YXJnZXQgaXNuJ3QgYW4gSFRNTCBub2RlIGl0c2VsZi5cblx0XHRcdFx0XHRcdFx0dGFyZ2V0cy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fdGFyZ2V0cyA9IHRhcmdldHMgPSB0YXJnZXRzLmNvbmNhdChfc2xpY2UodGFyZykpO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuX3NpYmxpbmdzW2ldID0gX3JlZ2lzdGVyKHRhcmcsIHRoaXMsIGZhbHNlKTtcblx0XHRcdFx0XHRcdGlmIChvdmVyd3JpdGUgPT09IDEpIGlmICh0aGlzLl9zaWJsaW5nc1tpXS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdF9hcHBseU92ZXJ3cml0ZSh0YXJnLCB0aGlzLCBudWxsLCAxLCB0aGlzLl9zaWJsaW5nc1tpXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fcHJvcExvb2t1cCA9IHt9O1xuXHRcdFx0XHRcdHRoaXMuX3NpYmxpbmdzID0gX3JlZ2lzdGVyKHRhcmdldCwgdGhpcywgZmFsc2UpO1xuXHRcdFx0XHRcdGlmIChvdmVyd3JpdGUgPT09IDEpIGlmICh0aGlzLl9zaWJsaW5ncy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRfYXBwbHlPdmVyd3JpdGUodGFyZ2V0LCB0aGlzLCBudWxsLCAxLCB0aGlzLl9zaWJsaW5ncyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLnZhcnMuaW1tZWRpYXRlUmVuZGVyIHx8IChkdXJhdGlvbiA9PT0gMCAmJiB0aGlzLl9kZWxheSA9PT0gMCAmJiB0aGlzLnZhcnMuaW1tZWRpYXRlUmVuZGVyICE9PSBmYWxzZSkpIHtcblx0XHRcdFx0XHR0aGlzLl90aW1lID0gLV90aW55TnVtOyAvL2ZvcmNlcyBhIHJlbmRlciB3aXRob3V0IGhhdmluZyB0byBzZXQgdGhlIHJlbmRlcigpIFwiZm9yY2VcIiBwYXJhbWV0ZXIgdG8gdHJ1ZSBiZWNhdXNlIHdlIHdhbnQgdG8gYWxsb3cgbGF6eWluZyBieSBkZWZhdWx0ICh1c2luZyB0aGUgXCJmb3JjZVwiIHBhcmFtZXRlciBhbHdheXMgZm9yY2VzIGFuIGltbWVkaWF0ZSBmdWxsIHJlbmRlcilcblx0XHRcdFx0XHR0aGlzLnJlbmRlcihNYXRoLm1pbigwLCAtdGhpcy5fZGVsYXkpKTsgLy9pbiBjYXNlIGRlbGF5IGlzIG5lZ2F0aXZlXG5cdFx0XHRcdH1cblx0XHRcdH0sIHRydWUpLFxuXHRcdFx0X2lzU2VsZWN0b3IgPSBmdW5jdGlvbih2KSB7XG5cdFx0XHRcdHJldHVybiAodiAmJiB2Lmxlbmd0aCAmJiB2ICE9PSB3aW5kb3cgJiYgdlswXSAmJiAodlswXSA9PT0gd2luZG93IHx8ICh2WzBdLm5vZGVUeXBlICYmIHZbMF0uc3R5bGUgJiYgIXYubm9kZVR5cGUpKSk7IC8vd2UgY2Fubm90IGNoZWNrIFwibm9kZVR5cGVcIiBpZiB0aGUgdGFyZ2V0IGlzIHdpbmRvdyBmcm9tIHdpdGhpbiBhbiBpZnJhbWUsIG90aGVyd2lzZSBpdCB3aWxsIHRyaWdnZXIgYSBzZWN1cml0eSBlcnJvciBpbiBzb21lIGJyb3dzZXJzIGxpa2UgRmlyZWZveC5cblx0XHRcdH0sXG5cdFx0XHRfYXV0b0NTUyA9IGZ1bmN0aW9uKHZhcnMsIHRhcmdldCkge1xuXHRcdFx0XHR2YXIgY3NzID0ge30sXG5cdFx0XHRcdFx0cDtcblx0XHRcdFx0Zm9yIChwIGluIHZhcnMpIHtcblx0XHRcdFx0XHRpZiAoIV9yZXNlcnZlZFByb3BzW3BdICYmICghKHAgaW4gdGFyZ2V0KSB8fCBwID09PSBcInRyYW5zZm9ybVwiIHx8IHAgPT09IFwieFwiIHx8IHAgPT09IFwieVwiIHx8IHAgPT09IFwid2lkdGhcIiB8fCBwID09PSBcImhlaWdodFwiIHx8IHAgPT09IFwiY2xhc3NOYW1lXCIgfHwgcCA9PT0gXCJib3JkZXJcIikgJiYgKCFfcGx1Z2luc1twXSB8fCAoX3BsdWdpbnNbcF0gJiYgX3BsdWdpbnNbcF0uX2F1dG9DU1MpKSkgeyAvL25vdGU6IDxpbWc+IGVsZW1lbnRzIGNvbnRhaW4gcmVhZC1vbmx5IFwieFwiIGFuZCBcInlcIiBwcm9wZXJ0aWVzLiBXZSBzaG91bGQgYWxzbyBwcmlvcml0aXplIGVkaXRpbmcgY3NzIHdpZHRoL2hlaWdodCByYXRoZXIgdGhhbiB0aGUgZWxlbWVudCdzIHByb3BlcnRpZXMuXG5cdFx0XHRcdFx0XHRjc3NbcF0gPSB2YXJzW3BdO1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHZhcnNbcF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHZhcnMuY3NzID0gY3NzO1xuXHRcdFx0fTtcblxuXHRcdHAgPSBUd2VlbkxpdGUucHJvdG90eXBlID0gbmV3IEFuaW1hdGlvbigpO1xuXHRcdHAuY29uc3RydWN0b3IgPSBUd2VlbkxpdGU7XG5cdFx0cC5raWxsKCkuX2djID0gZmFsc2U7XG5cbi8vLS0tLVR3ZWVuTGl0ZSBkZWZhdWx0cywgb3ZlcndyaXRlIG1hbmFnZW1lbnQsIGFuZCByb290IHVwZGF0ZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0cC5yYXRpbyA9IDA7XG5cdFx0cC5fZmlyc3RQVCA9IHAuX3RhcmdldHMgPSBwLl9vdmVyd3JpdHRlblByb3BzID0gcC5fc3RhcnRBdCA9IG51bGw7XG5cdFx0cC5fbm90aWZ5UGx1Z2luc09mRW5hYmxlZCA9IHAuX2xhenkgPSBmYWxzZTtcblxuXHRcdFR3ZWVuTGl0ZS52ZXJzaW9uID0gXCIyLjEuM1wiO1xuXHRcdFR3ZWVuTGl0ZS5kZWZhdWx0RWFzZSA9IHAuX2Vhc2UgPSBuZXcgRWFzZShudWxsLCBudWxsLCAxLCAxKTtcblx0XHRUd2VlbkxpdGUuZGVmYXVsdE92ZXJ3cml0ZSA9IFwiYXV0b1wiO1xuXHRcdFR3ZWVuTGl0ZS50aWNrZXIgPSBfdGlja2VyO1xuXHRcdFR3ZWVuTGl0ZS5hdXRvU2xlZXAgPSAxMjA7XG5cdFx0VHdlZW5MaXRlLmxhZ1Ntb290aGluZyA9IGZ1bmN0aW9uKHRocmVzaG9sZCwgYWRqdXN0ZWRMYWcpIHtcblx0XHRcdF90aWNrZXIubGFnU21vb3RoaW5nKHRocmVzaG9sZCwgYWRqdXN0ZWRMYWcpO1xuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUuc2VsZWN0b3IgPSB3aW5kb3cuJCB8fCB3aW5kb3cualF1ZXJ5IHx8IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBzZWxlY3RvciA9IHdpbmRvdy4kIHx8IHdpbmRvdy5qUXVlcnk7XG5cdFx0XHRpZiAoc2VsZWN0b3IpIHtcblx0XHRcdFx0VHdlZW5MaXRlLnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cdFx0XHRcdHJldHVybiBzZWxlY3RvcihlKTtcblx0XHRcdH1cblx0XHRcdGlmICghX2RvYykgeyAvL2luIHNvbWUgZGV2IGVudmlyb25tZW50cyAobGlrZSBBbmd1bGFyIDYpLCBHU0FQIGdldHMgbG9hZGVkIGJlZm9yZSB0aGUgZG9jdW1lbnQgaXMgZGVmaW5lZCEgU28gcmUtcXVlcnkgaXQgaGVyZSBpZi93aGVuIG5lY2Vzc2FyeS5cblx0XHRcdFx0X2RvYyA9IHdpbmRvdy5kb2N1bWVudDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoIV9kb2MpID8gZSA6IChfZG9jLnF1ZXJ5U2VsZWN0b3JBbGwgPyBfZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoZSkgOiBfZG9jLmdldEVsZW1lbnRCeUlkKChlLmNoYXJBdCgwKSA9PT0gXCIjXCIpID8gZS5zdWJzdHIoMSkgOiBlKSk7XG5cdFx0fTtcblxuXHRcdHZhciBfbGF6eVR3ZWVucyA9IFtdLFxuXHRcdFx0X2xhenlMb29rdXAgPSB7fSxcblx0XHRcdF9udW1iZXJzRXhwID0gLyg/OigtfC09fFxcKz0pP1xcZCpcXC4/XFxkKig/OmVbXFwtK10/XFxkKyk/KVswLTldL2lnLFxuXHRcdFx0X3JlbEV4cCA9IC9bXFwrLV09LT9bXFwuXFxkXS8sXG5cdFx0XHQvL19ub25OdW1iZXJzRXhwID0gLyg/OihbXFwtK10oPyEoXFxkfD0pKSl8W15cXGRcXC0rPWVdfChlKD8hW1xcLStdW1xcZF0pKSkrL2lnLFxuXHRcdFx0X3NldFJhdGlvID0gZnVuY3Rpb24odikge1xuXHRcdFx0XHR2YXIgcHQgPSB0aGlzLl9maXJzdFBULFxuXHRcdFx0XHRcdG1pbiA9IDAuMDAwMDAxLFxuXHRcdFx0XHRcdHZhbDtcblx0XHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdFx0dmFsID0gIXB0LmJsb2IgPyBwdC5jICogdiArIHB0LnMgOiAodiA9PT0gMSAmJiB0aGlzLmVuZCAhPSBudWxsKSA/IHRoaXMuZW5kIDogdiA/IHRoaXMuam9pbihcIlwiKSA6IHRoaXMuc3RhcnQ7XG5cdFx0XHRcdFx0aWYgKHB0Lm0pIHtcblx0XHRcdFx0XHRcdHZhbCA9IHB0Lm0uY2FsbCh0aGlzLl90d2VlbiwgdmFsLCB0aGlzLl90YXJnZXQgfHwgcHQudCwgdGhpcy5fdHdlZW4pO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsIDwgbWluKSBpZiAodmFsID4gLW1pbiAmJiAhcHQuYmxvYikgeyAvL3ByZXZlbnRzIGlzc3VlcyB3aXRoIGNvbnZlcnRpbmcgdmVyeSBzbWFsbCBudW1iZXJzIHRvIHN0cmluZ3MgaW4gdGhlIGJyb3dzZXJcblx0XHRcdFx0XHRcdHZhbCA9IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghcHQuZikge1xuXHRcdFx0XHRcdFx0cHQudFtwdC5wXSA9IHZhbDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHB0LmZwKSB7XG5cdFx0XHRcdFx0XHRwdC50W3B0LnBdKHB0LmZwLCB2YWwpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwdC50W3B0LnBdKHZhbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHB0ID0gcHQuX25leHQ7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfYmxvYlJvdW5kID0gZnVuY3Rpb24odikge1xuXHRcdFx0XHRyZXR1cm4gKCgodiAqIDEwMDApIHwgMCkgLyAxMDAwKSArIFwiXCI7XG5cdFx0XHR9LFxuXHRcdFx0Ly9jb21wYXJlcyB0d28gc3RyaW5ncyAoc3RhcnQvZW5kKSwgZmluZHMgdGhlIG51bWJlcnMgdGhhdCBhcmUgZGlmZmVyZW50IGFuZCBzcGl0cyBiYWNrIGFuIGFycmF5IHJlcHJlc2VudGluZyB0aGUgd2hvbGUgdmFsdWUgYnV0IHdpdGggdGhlIGNoYW5naW5nIHZhbHVlcyBpc29sYXRlZCBhcyBlbGVtZW50cy4gRm9yIGV4YW1wbGUsIFwicmdiKDAsMCwwKVwiIGFuZCBcInJnYigxMDAsNTAsMClcIiB3b3VsZCBiZWNvbWUgW1wicmdiKFwiLCAwLCBcIixcIiwgNTAsIFwiLDApXCJdLiBOb3RpY2UgaXQgbWVyZ2VzIHRoZSBwYXJ0cyB0aGF0IGFyZSBpZGVudGljYWwgKHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbikuIFRoZSBhcnJheSBhbHNvIGhhcyBhIGxpbmtlZCBsaXN0IG9mIFByb3BUd2VlbnMgYXR0YWNoZWQgc3RhcnRpbmcgd2l0aCBfZmlyc3RQVCB0aGF0IGNvbnRhaW4gdGhlIHR3ZWVuaW5nIGRhdGEgKHQsIHAsIHMsIGMsIGYsIGV0Yy4pLiBJdCBhbHNvIHN0b3JlcyB0aGUgc3RhcnRpbmcgdmFsdWUgYXMgYSBcInN0YXJ0XCIgcHJvcGVydHkgc28gdGhhdCB3ZSBjYW4gcmV2ZXJ0IHRvIGl0IGlmL3doZW4gbmVjZXNzYXJ5LCBsaWtlIHdoZW4gYSB0d2VlbiByZXdpbmRzIGZ1bGx5LiBJZiB0aGUgcXVhbnRpdHkgb2YgbnVtYmVycyBkaWZmZXJzIGJldHdlZW4gdGhlIHN0YXJ0IGFuZCBlbmQsIGl0IHdpbGwgYWx3YXlzIHByaW9yaXRpemUgdGhlIGVuZCB2YWx1ZShzKS4gVGhlIHB0IHBhcmFtZXRlciBpcyBvcHRpb25hbCAtIGl0J3MgZm9yIGEgUHJvcFR3ZWVuIHRoYXQgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaW5rZWQgbGlzdCBhbmQgaXMgdHlwaWNhbGx5IGZvciBhY3R1YWxseSBzZXR0aW5nIHRoZSB2YWx1ZSBhZnRlciBhbGwgb2YgdGhlIGVsZW1lbnRzIGhhdmUgYmVlbiB1cGRhdGVkICh3aXRoIGFycmF5LmpvaW4oXCJcIikpLlxuXHRcdFx0X2Jsb2JEaWYgPSBmdW5jdGlvbihzdGFydCwgZW5kLCBmaWx0ZXIsIHB0KSB7XG5cdFx0XHRcdHZhciBhID0gW10sXG5cdFx0XHRcdFx0Y2hhckluZGV4ID0gMCxcblx0XHRcdFx0XHRzID0gXCJcIixcblx0XHRcdFx0XHRjb2xvciA9IDAsXG5cdFx0XHRcdFx0c3RhcnROdW1zLCBlbmROdW1zLCBudW0sIGksIGwsIG5vbk51bWJlcnMsIGN1cnJlbnROdW07XG5cdFx0XHRcdGEuc3RhcnQgPSBzdGFydDtcblx0XHRcdFx0YS5lbmQgPSBlbmQ7XG5cdFx0XHRcdHN0YXJ0ID0gYVswXSA9IHN0YXJ0ICsgXCJcIjsgLy9lbnN1cmUgdmFsdWVzIGFyZSBzdHJpbmdzXG5cdFx0XHRcdGVuZCA9IGFbMV0gPSBlbmQgKyBcIlwiO1xuXHRcdFx0XHRpZiAoZmlsdGVyKSB7XG5cdFx0XHRcdFx0ZmlsdGVyKGEpOyAvL3Bhc3MgYW4gYXJyYXkgd2l0aCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMgYW5kIGxldCB0aGUgZmlsdGVyIGRvIHdoYXRldmVyIGl0IG5lZWRzIHRvIHRoZSB2YWx1ZXMuXG5cdFx0XHRcdFx0c3RhcnQgPSBhWzBdO1xuXHRcdFx0XHRcdGVuZCA9IGFbMV07XG5cdFx0XHRcdH1cblx0XHRcdFx0YS5sZW5ndGggPSAwO1xuXHRcdFx0XHRzdGFydE51bXMgPSBzdGFydC5tYXRjaChfbnVtYmVyc0V4cCkgfHwgW107XG5cdFx0XHRcdGVuZE51bXMgPSBlbmQubWF0Y2goX251bWJlcnNFeHApIHx8IFtdO1xuXHRcdFx0XHRpZiAocHQpIHtcblx0XHRcdFx0XHRwdC5fbmV4dCA9IG51bGw7XG5cdFx0XHRcdFx0cHQuYmxvYiA9IDE7XG5cdFx0XHRcdFx0YS5fZmlyc3RQVCA9IGEuX2FwcGx5UFQgPSBwdDsgLy9hcHBseSBsYXN0IGluIHRoZSBsaW5rZWQgbGlzdCAod2hpY2ggbWVhbnMgaW5zZXJ0aW5nIGl0IGZpcnN0KVxuXHRcdFx0XHR9XG5cdFx0XHRcdGwgPSBlbmROdW1zLmxlbmd0aDtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRcdGN1cnJlbnROdW0gPSBlbmROdW1zW2ldO1xuXHRcdFx0XHRcdG5vbk51bWJlcnMgPSBlbmQuc3Vic3RyKGNoYXJJbmRleCwgZW5kLmluZGV4T2YoY3VycmVudE51bSwgY2hhckluZGV4KS1jaGFySW5kZXgpO1xuXHRcdFx0XHRcdHMgKz0gKG5vbk51bWJlcnMgfHwgIWkpID8gbm9uTnVtYmVycyA6IFwiLFwiOyAvL25vdGU6IFNWRyBzcGVjIGFsbG93cyBvbWlzc2lvbiBvZiBjb21tYS9zcGFjZSB3aGVuIGEgbmVnYXRpdmUgc2lnbiBpcyB3ZWRnZWQgYmV0d2VlbiB0d28gbnVtYmVycywgbGlrZSAyLjUtNS4zIGluc3RlYWQgb2YgMi41LC01LjMgYnV0IHdoZW4gdHdlZW5pbmcsIHRoZSBuZWdhdGl2ZSB2YWx1ZSBtYXkgc3dpdGNoIHRvIHBvc2l0aXZlLCBzbyB3ZSBpbnNlcnQgdGhlIGNvbW1hIGp1c3QgaW4gY2FzZS5cblx0XHRcdFx0XHRjaGFySW5kZXggKz0gbm9uTnVtYmVycy5sZW5ndGg7XG5cdFx0XHRcdFx0aWYgKGNvbG9yKSB7IC8vc2Vuc2UgcmdiYSgpIHZhbHVlcyBhbmQgcm91bmQgdGhlbS5cblx0XHRcdFx0XHRcdGNvbG9yID0gKGNvbG9yICsgMSkgJSA1O1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAobm9uTnVtYmVycy5zdWJzdHIoLTUpID09PSBcInJnYmEoXCIpIHtcblx0XHRcdFx0XHRcdGNvbG9yID0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGN1cnJlbnROdW0gPT09IHN0YXJ0TnVtc1tpXSB8fCBzdGFydE51bXMubGVuZ3RoIDw9IGkpIHtcblx0XHRcdFx0XHRcdHMgKz0gY3VycmVudE51bTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKHMpIHtcblx0XHRcdFx0XHRcdFx0YS5wdXNoKHMpO1xuXHRcdFx0XHRcdFx0XHRzID0gXCJcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG51bSA9IHBhcnNlRmxvYXQoc3RhcnROdW1zW2ldKTtcblx0XHRcdFx0XHRcdGEucHVzaChudW0pO1xuXHRcdFx0XHRcdFx0YS5fZmlyc3RQVCA9IHtfbmV4dDogYS5fZmlyc3RQVCwgdDphLCBwOiBhLmxlbmd0aC0xLCBzOm51bSwgYzooKGN1cnJlbnROdW0uY2hhckF0KDEpID09PSBcIj1cIikgPyBwYXJzZUludChjdXJyZW50TnVtLmNoYXJBdCgwKSArIFwiMVwiLCAxMCkgKiBwYXJzZUZsb2F0KGN1cnJlbnROdW0uc3Vic3RyKDIpKSA6IChwYXJzZUZsb2F0KGN1cnJlbnROdW0pIC0gbnVtKSkgfHwgMCwgZjowLCBtOihjb2xvciAmJiBjb2xvciA8IDQpID8gTWF0aC5yb3VuZCA6IF9ibG9iUm91bmR9OyAvL2xpbWl0aW5nIHRvIDMgZGVjaW1hbCBwbGFjZXMgYW5kIGNhc3RpbmcgYXMgYSBzdHJpbmcgY2FuIHJlYWxseSBoZWxwIHBlcmZvcm1hbmNlIHdoZW4gYXJyYXkuam9pbigpIGlzIGNhbGxlZCFcblx0XHRcdFx0XHRcdC8vbm90ZTogd2UgZG9uJ3Qgc2V0IF9wcmV2IGJlY2F1c2Ugd2UnbGwgbmV2ZXIgbmVlZCB0byByZW1vdmUgaW5kaXZpZHVhbCBQcm9wVHdlZW5zIGZyb20gdGhpcyBsaXN0LlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjaGFySW5kZXggKz0gY3VycmVudE51bS5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0cyArPSBlbmQuc3Vic3RyKGNoYXJJbmRleCk7XG5cdFx0XHRcdGlmIChzKSB7XG5cdFx0XHRcdFx0YS5wdXNoKHMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGEuc2V0UmF0aW8gPSBfc2V0UmF0aW87XG5cdFx0XHRcdGlmIChfcmVsRXhwLnRlc3QoZW5kKSkgeyAvL2lmIHRoZSBlbmQgc3RyaW5nIGNvbnRhaW5zIHJlbGF0aXZlIHZhbHVlcywgZGVsZXRlIGl0IHNvIHRoYXQgb24gdGhlIGZpbmFsIHJlbmRlciAoaW4gX3NldFJhdGlvKCkpLCB3ZSBkb24ndCBhY3R1YWxseSBzZXQgaXQgdG8gdGhlIHN0cmluZyB3aXRoICs9IG9yIC09IGNoYXJhY3RlcnMgKGZvcmNlcyBpdCB0byB1c2UgdGhlIGNhbGN1bGF0ZWQgdmFsdWUpLlxuXHRcdFx0XHRcdGEuZW5kID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gYTtcblx0XHRcdH0sXG5cdFx0XHQvL25vdGU6IFwiZnVuY1BhcmFtXCIgaXMgb25seSBuZWNlc3NhcnkgZm9yIGZ1bmN0aW9uLWJhc2VkIGdldHRlcnMvc2V0dGVycyB0aGF0IHJlcXVpcmUgYW4gZXh0cmEgcGFyYW1ldGVyIGxpa2UgZ2V0QXR0cmlidXRlKFwid2lkdGhcIikgYW5kIHNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHZhbHVlKS4gSW4gdGhpcyBleGFtcGxlLCBmdW5jUGFyYW0gd291bGQgYmUgXCJ3aWR0aFwiLiBVc2VkIGJ5IEF0dHJQbHVnaW4gZm9yIGV4YW1wbGUuXG5cdFx0XHRfYWRkUHJvcFR3ZWVuID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wLCBzdGFydCwgZW5kLCBvdmVyd3JpdGVQcm9wLCBtb2QsIGZ1bmNQYXJhbSwgc3RyaW5nRmlsdGVyLCBpbmRleCkge1xuXHRcdFx0XHRpZiAodHlwZW9mKGVuZCkgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGVuZCA9IGVuZChpbmRleCB8fCAwLCB0YXJnZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB0eXBlID0gdHlwZW9mKHRhcmdldFtwcm9wXSksXG5cdFx0XHRcdFx0Z2V0dGVyTmFtZSA9ICh0eXBlICE9PSBcImZ1bmN0aW9uXCIpID8gXCJcIiA6ICgocHJvcC5pbmRleE9mKFwic2V0XCIpIHx8IHR5cGVvZih0YXJnZXRbXCJnZXRcIiArIHByb3Auc3Vic3RyKDMpXSkgIT09IFwiZnVuY3Rpb25cIikgPyBwcm9wIDogXCJnZXRcIiArIHByb3Auc3Vic3RyKDMpKSxcblx0XHRcdFx0XHRzID0gKHN0YXJ0ICE9PSBcImdldFwiKSA/IHN0YXJ0IDogIWdldHRlck5hbWUgPyB0YXJnZXRbcHJvcF0gOiBmdW5jUGFyYW0gPyB0YXJnZXRbZ2V0dGVyTmFtZV0oZnVuY1BhcmFtKSA6IHRhcmdldFtnZXR0ZXJOYW1lXSgpLFxuXHRcdFx0XHRcdGlzUmVsYXRpdmUgPSAodHlwZW9mKGVuZCkgPT09IFwic3RyaW5nXCIgJiYgZW5kLmNoYXJBdCgxKSA9PT0gXCI9XCIpLFxuXHRcdFx0XHRcdHB0ID0ge3Q6dGFyZ2V0LCBwOnByb3AsIHM6cywgZjoodHlwZSA9PT0gXCJmdW5jdGlvblwiKSwgcGc6MCwgbjpvdmVyd3JpdGVQcm9wIHx8IHByb3AsIG06KCFtb2QgPyAwIDogKHR5cGVvZihtb2QpID09PSBcImZ1bmN0aW9uXCIpID8gbW9kIDogTWF0aC5yb3VuZCksIHByOjAsIGM6aXNSZWxhdGl2ZSA/IHBhcnNlSW50KGVuZC5jaGFyQXQoMCkgKyBcIjFcIiwgMTApICogcGFyc2VGbG9hdChlbmQuc3Vic3RyKDIpKSA6IChwYXJzZUZsb2F0KGVuZCkgLSBzKSB8fCAwfSxcblx0XHRcdFx0XHRibG9iO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YocykgIT09IFwibnVtYmVyXCIgfHwgKHR5cGVvZihlbmQpICE9PSBcIm51bWJlclwiICYmICFpc1JlbGF0aXZlKSkge1xuXHRcdFx0XHRcdGlmIChmdW5jUGFyYW0gfHwgaXNOYU4ocykgfHwgKCFpc1JlbGF0aXZlICYmIGlzTmFOKGVuZCkpIHx8IHR5cGVvZihzKSA9PT0gXCJib29sZWFuXCIgfHwgdHlwZW9mKGVuZCkgPT09IFwiYm9vbGVhblwiKSB7XG5cdFx0XHRcdFx0XHQvL2EgYmxvYiAoc3RyaW5nIHRoYXQgaGFzIG11bHRpcGxlIG51bWJlcnMgaW4gaXQpXG5cdFx0XHRcdFx0XHRwdC5mcCA9IGZ1bmNQYXJhbTtcblx0XHRcdFx0XHRcdGJsb2IgPSBfYmxvYkRpZihzLCAoaXNSZWxhdGl2ZSA/IChwYXJzZUZsb2F0KHB0LnMpICsgcHQuYykgKyAocHQucyArIFwiXCIpLnJlcGxhY2UoL1swLTlcXC1cXC5dL2csIFwiXCIpIDogZW5kKSwgc3RyaW5nRmlsdGVyIHx8IFR3ZWVuTGl0ZS5kZWZhdWx0U3RyaW5nRmlsdGVyLCBwdCk7XG5cdFx0XHRcdFx0XHRwdCA9IHt0OiBibG9iLCBwOiBcInNldFJhdGlvXCIsIHM6IDAsIGM6IDEsIGY6IDIsIHBnOiAwLCBuOiBvdmVyd3JpdGVQcm9wIHx8IHByb3AsIHByOiAwLCBtOiAwfTsgLy9cIjJcIiBpbmRpY2F0ZXMgaXQncyBhIEJsb2IgcHJvcGVydHkgdHdlZW4uIE5lZWRlZCBmb3IgUm91bmRQcm9wc1BsdWdpbiBmb3IgZXhhbXBsZS5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cHQucyA9IHBhcnNlRmxvYXQocyk7XG5cdFx0XHRcdFx0XHRpZiAoIWlzUmVsYXRpdmUpIHtcblx0XHRcdFx0XHRcdFx0cHQuYyA9IChwYXJzZUZsb2F0KGVuZCkgLSBwdC5zKSB8fCAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocHQuYykgeyAvL29ubHkgYWRkIGl0IHRvIHRoZSBsaW5rZWQgbGlzdCBpZiB0aGVyZSdzIGEgY2hhbmdlLlxuXHRcdFx0XHRcdGlmICgocHQuX25leHQgPSB0aGlzLl9maXJzdFBUKSkge1xuXHRcdFx0XHRcdFx0cHQuX25leHQuX3ByZXYgPSBwdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5fZmlyc3RQVCA9IHB0O1xuXHRcdFx0XHRcdHJldHVybiBwdDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9pbnRlcm5hbHMgPSBUd2VlbkxpdGUuX2ludGVybmFscyA9IHtpc0FycmF5Ol9pc0FycmF5LCBpc1NlbGVjdG9yOl9pc1NlbGVjdG9yLCBsYXp5VHdlZW5zOl9sYXp5VHdlZW5zLCBibG9iRGlmOl9ibG9iRGlmfSwgLy9naXZlcyB1cyBhIHdheSB0byBleHBvc2UgY2VydGFpbiBwcml2YXRlIHZhbHVlcyB0byBvdGhlciBHcmVlblNvY2sgY2xhc3NlcyB3aXRob3V0IGNvbnRhbWluYXRpbmcgdGhhIG1haW4gVHdlZW5MaXRlIG9iamVjdC5cblx0XHRcdF9wbHVnaW5zID0gVHdlZW5MaXRlLl9wbHVnaW5zID0ge30sXG5cdFx0XHRfdHdlZW5Mb29rdXAgPSBfaW50ZXJuYWxzLnR3ZWVuTG9va3VwID0ge30sXG5cdFx0XHRfdHdlZW5Mb29rdXBOdW0gPSAwLFxuXHRcdFx0X3Jlc2VydmVkUHJvcHMgPSBfaW50ZXJuYWxzLnJlc2VydmVkUHJvcHMgPSB7ZWFzZToxLCBkZWxheToxLCBvdmVyd3JpdGU6MSwgb25Db21wbGV0ZToxLCBvbkNvbXBsZXRlUGFyYW1zOjEsIG9uQ29tcGxldGVTY29wZToxLCB1c2VGcmFtZXM6MSwgcnVuQmFja3dhcmRzOjEsIHN0YXJ0QXQ6MSwgb25VcGRhdGU6MSwgb25VcGRhdGVQYXJhbXM6MSwgb25VcGRhdGVTY29wZToxLCBvblN0YXJ0OjEsIG9uU3RhcnRQYXJhbXM6MSwgb25TdGFydFNjb3BlOjEsIG9uUmV2ZXJzZUNvbXBsZXRlOjEsIG9uUmV2ZXJzZUNvbXBsZXRlUGFyYW1zOjEsIG9uUmV2ZXJzZUNvbXBsZXRlU2NvcGU6MSwgb25SZXBlYXQ6MSwgb25SZXBlYXRQYXJhbXM6MSwgb25SZXBlYXRTY29wZToxLCBlYXNlUGFyYW1zOjEsIHlveW86MSwgaW1tZWRpYXRlUmVuZGVyOjEsIHJlcGVhdDoxLCByZXBlYXREZWxheToxLCBkYXRhOjEsIHBhdXNlZDoxLCByZXZlcnNlZDoxLCBhdXRvQ1NTOjEsIGxhenk6MSwgb25PdmVyd3JpdGU6MSwgY2FsbGJhY2tTY29wZToxLCBzdHJpbmdGaWx0ZXI6MSwgaWQ6MSwgeW95b0Vhc2U6MSwgc3RhZ2dlcjoxfSxcblx0XHRcdF9vdmVyd3JpdGVMb29rdXAgPSB7bm9uZTowLCBhbGw6MSwgYXV0bzoyLCBjb25jdXJyZW50OjMsIGFsbE9uU3RhcnQ6NCwgcHJlZXhpc3Rpbmc6NSwgXCJ0cnVlXCI6MSwgXCJmYWxzZVwiOjB9LFxuXHRcdFx0X3Jvb3RGcmFtZXNUaW1lbGluZSA9IEFuaW1hdGlvbi5fcm9vdEZyYW1lc1RpbWVsaW5lID0gbmV3IFNpbXBsZVRpbWVsaW5lKCksXG5cdFx0XHRfcm9vdFRpbWVsaW5lID0gQW5pbWF0aW9uLl9yb290VGltZWxpbmUgPSBuZXcgU2ltcGxlVGltZWxpbmUoKSxcblx0XHRcdF9uZXh0R0NGcmFtZSA9IDMwLFxuXHRcdFx0X2xhenlSZW5kZXIgPSBfaW50ZXJuYWxzLmxhenlSZW5kZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGwgPSBfbGF6eVR3ZWVucy5sZW5ndGgsXG5cdFx0XHRcdFx0aSwgdHdlZW47XG5cdFx0XHRcdF9sYXp5TG9va3VwID0ge307XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHR0d2VlbiA9IF9sYXp5VHdlZW5zW2ldO1xuXHRcdFx0XHRcdGlmICh0d2VlbiAmJiB0d2Vlbi5fbGF6eSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHR3ZWVuLnJlbmRlcih0d2Vlbi5fbGF6eVswXSwgdHdlZW4uX2xhenlbMV0sIHRydWUpO1xuXHRcdFx0XHRcdFx0dHdlZW4uX2xhenkgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0X2xhenlUd2VlbnMubGVuZ3RoID0gMDtcblx0XHRcdH07XG5cblx0XHRfcm9vdFRpbWVsaW5lLl9zdGFydFRpbWUgPSBfdGlja2VyLnRpbWU7XG5cdFx0X3Jvb3RGcmFtZXNUaW1lbGluZS5fc3RhcnRUaW1lID0gX3RpY2tlci5mcmFtZTtcblx0XHRfcm9vdFRpbWVsaW5lLl9hY3RpdmUgPSBfcm9vdEZyYW1lc1RpbWVsaW5lLl9hY3RpdmUgPSB0cnVlO1xuXHRcdHNldFRpbWVvdXQoX2xhenlSZW5kZXIsIDEpOyAvL29uIHNvbWUgbW9iaWxlIGRldmljZXMsIHRoZXJlIGlzbid0IGEgXCJ0aWNrXCIgYmVmb3JlIGNvZGUgcnVucyB3aGljaCBtZWFucyBhbnkgbGF6eSByZW5kZXJzIHdvdWxkbid0IHJ1biBiZWZvcmUgdGhlIG5leHQgb2ZmaWNpYWwgXCJ0aWNrXCIuXG5cblx0XHRBbmltYXRpb24uX3VwZGF0ZVJvb3QgPSBUd2VlbkxpdGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBpLCBhLCBwO1xuXHRcdFx0XHRpZiAoX2xhenlUd2VlbnMubGVuZ3RoKSB7IC8vaWYgY29kZSBpcyBydW4gb3V0c2lkZSBvZiB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGxvb3AsIHRoZXJlIG1heSBiZSB0d2VlbnMgcXVldWVkIEFGVEVSIHRoZSBlbmdpbmUgcmVmcmVzaGVkLCBzbyB3ZSBuZWVkIHRvIGVuc3VyZSBhbnkgcGVuZGluZyByZW5kZXJzIG9jY3VyIGJlZm9yZSB3ZSByZWZyZXNoIGFnYWluLlxuXHRcdFx0XHRcdF9sYXp5UmVuZGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3Jvb3RUaW1lbGluZS5yZW5kZXIoKF90aWNrZXIudGltZSAtIF9yb290VGltZWxpbmUuX3N0YXJ0VGltZSkgKiBfcm9vdFRpbWVsaW5lLl90aW1lU2NhbGUsIGZhbHNlLCBmYWxzZSk7XG5cdFx0XHRcdF9yb290RnJhbWVzVGltZWxpbmUucmVuZGVyKChfdGlja2VyLmZyYW1lIC0gX3Jvb3RGcmFtZXNUaW1lbGluZS5fc3RhcnRUaW1lKSAqIF9yb290RnJhbWVzVGltZWxpbmUuX3RpbWVTY2FsZSwgZmFsc2UsIGZhbHNlKTtcblx0XHRcdFx0aWYgKF9sYXp5VHdlZW5zLmxlbmd0aCkge1xuXHRcdFx0XHRcdF9sYXp5UmVuZGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKF90aWNrZXIuZnJhbWUgPj0gX25leHRHQ0ZyYW1lKSB7IC8vZHVtcCBnYXJiYWdlIGV2ZXJ5IDEyMCBmcmFtZXMgb3Igd2hhdGV2ZXIgdGhlIHVzZXIgc2V0cyBUd2VlbkxpdGUuYXV0b1NsZWVwIHRvXG5cdFx0XHRcdFx0X25leHRHQ0ZyYW1lID0gX3RpY2tlci5mcmFtZSArIChwYXJzZUludChUd2VlbkxpdGUuYXV0b1NsZWVwLCAxMCkgfHwgMTIwKTtcblx0XHRcdFx0XHRmb3IgKHAgaW4gX3R3ZWVuTG9va3VwKSB7XG5cdFx0XHRcdFx0XHRhID0gX3R3ZWVuTG9va3VwW3BdLnR3ZWVucztcblx0XHRcdFx0XHRcdGkgPSBhLmxlbmd0aDtcblx0XHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRpZiAoYVtpXS5fZ2MpIHtcblx0XHRcdFx0XHRcdFx0XHRhLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGEubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBfdHdlZW5Mb29rdXBbcF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vaWYgdGhlcmUgYXJlIG5vIG1vcmUgdHdlZW5zIGluIHRoZSByb290IHRpbWVsaW5lcywgb3IgaWYgdGhleSdyZSBhbGwgcGF1c2VkLCBtYWtlIHRoZSBfdGltZXIgc2xlZXAgdG8gcmVkdWNlIGxvYWQgb24gdGhlIENQVSBzbGlnaHRseVxuXHRcdFx0XHRcdHAgPSBfcm9vdFRpbWVsaW5lLl9maXJzdDtcblx0XHRcdFx0XHRpZiAoIXAgfHwgcC5fcGF1c2VkKSBpZiAoVHdlZW5MaXRlLmF1dG9TbGVlcCAmJiAhX3Jvb3RGcmFtZXNUaW1lbGluZS5fZmlyc3QgJiYgX3RpY2tlci5fbGlzdGVuZXJzLnRpY2subGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0XHR3aGlsZSAocCAmJiBwLl9wYXVzZWQpIHtcblx0XHRcdFx0XHRcdFx0cCA9IHAuX25leHQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIXApIHtcblx0XHRcdFx0XHRcdFx0X3RpY2tlci5zbGVlcCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdF90aWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRpY2tcIiwgQW5pbWF0aW9uLl91cGRhdGVSb290KTtcblxuXHRcdHZhciBfcmVnaXN0ZXIgPSBmdW5jdGlvbih0YXJnZXQsIHR3ZWVuLCBzY3J1Yikge1xuXHRcdFx0XHR2YXIgaWQgPSB0YXJnZXQuX2dzVHdlZW5JRCwgYSwgaTtcblx0XHRcdFx0aWYgKCFfdHdlZW5Mb29rdXBbaWQgfHwgKHRhcmdldC5fZ3NUd2VlbklEID0gaWQgPSBcInRcIiArIChfdHdlZW5Mb29rdXBOdW0rKykpXSkge1xuXHRcdFx0XHRcdF90d2Vlbkxvb2t1cFtpZF0gPSB7dGFyZ2V0OnRhcmdldCwgdHdlZW5zOltdfTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHdlZW4pIHtcblx0XHRcdFx0XHRhID0gX3R3ZWVuTG9va3VwW2lkXS50d2VlbnM7XG5cdFx0XHRcdFx0YVsoaSA9IGEubGVuZ3RoKV0gPSB0d2Vlbjtcblx0XHRcdFx0XHRpZiAoc2NydWIpIHtcblx0XHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRpZiAoYVtpXSA9PT0gdHdlZW4pIHtcblx0XHRcdFx0XHRcdFx0XHRhLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gX3R3ZWVuTG9va3VwW2lkXS50d2VlbnM7XG5cdFx0XHR9LFxuXHRcdFx0X29uT3ZlcndyaXRlID0gZnVuY3Rpb24ob3ZlcndyaXR0ZW5Ud2Vlbiwgb3ZlcndyaXRpbmdUd2VlbiwgdGFyZ2V0LCBraWxsZWRQcm9wcykge1xuXHRcdFx0XHR2YXIgZnVuYyA9IG92ZXJ3cml0dGVuVHdlZW4udmFycy5vbk92ZXJ3cml0ZSwgcjEsIHIyO1xuXHRcdFx0XHRpZiAoZnVuYykge1xuXHRcdFx0XHRcdHIxID0gZnVuYyhvdmVyd3JpdHRlblR3ZWVuLCBvdmVyd3JpdGluZ1R3ZWVuLCB0YXJnZXQsIGtpbGxlZFByb3BzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmdW5jID0gVHdlZW5MaXRlLm9uT3ZlcndyaXRlO1xuXHRcdFx0XHRpZiAoZnVuYykge1xuXHRcdFx0XHRcdHIyID0gZnVuYyhvdmVyd3JpdHRlblR3ZWVuLCBvdmVyd3JpdGluZ1R3ZWVuLCB0YXJnZXQsIGtpbGxlZFByb3BzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKHIxICE9PSBmYWxzZSAmJiByMiAhPT0gZmFsc2UpO1xuXHRcdFx0fSxcblx0XHRcdF9hcHBseU92ZXJ3cml0ZSA9IGZ1bmN0aW9uKHRhcmdldCwgdHdlZW4sIHByb3BzLCBtb2RlLCBzaWJsaW5ncykge1xuXHRcdFx0XHR2YXIgaSwgY2hhbmdlZCwgY3VyVHdlZW4sIGw7XG5cdFx0XHRcdGlmIChtb2RlID09PSAxIHx8IG1vZGUgPj0gNCkge1xuXHRcdFx0XHRcdGwgPSBzaWJsaW5ncy5sZW5ndGg7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKChjdXJUd2VlbiA9IHNpYmxpbmdzW2ldKSAhPT0gdHdlZW4pIHtcblx0XHRcdFx0XHRcdFx0aWYgKCFjdXJUd2Vlbi5fZ2MpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY3VyVHdlZW4uX2tpbGwobnVsbCwgdGFyZ2V0LCB0d2VlbikpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChtb2RlID09PSA1KSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gY2hhbmdlZDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvL05PVEU6IEFkZCB0aW55IGFtb3VudCB0byBvdmVyY29tZSBmbG9hdGluZyBwb2ludCBlcnJvcnMgdGhhdCBjYW4gY2F1c2UgdGhlIHN0YXJ0VGltZSB0byBiZSBWRVJZIHNsaWdodGx5IG9mZiAod2hlbiBhIHR3ZWVuJ3MgdGltZSgpIGlzIHNldCBmb3IgZXhhbXBsZSlcblx0XHRcdFx0dmFyIHN0YXJ0VGltZSA9IHR3ZWVuLl9zdGFydFRpbWUgKyBfdGlueU51bSxcblx0XHRcdFx0XHRvdmVybGFwcyA9IFtdLFxuXHRcdFx0XHRcdG9Db3VudCA9IDAsXG5cdFx0XHRcdFx0emVyb0R1ciA9ICh0d2Vlbi5fZHVyYXRpb24gPT09IDApLFxuXHRcdFx0XHRcdGdsb2JhbFN0YXJ0O1xuXHRcdFx0XHRpID0gc2libGluZ3MubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRpZiAoKGN1clR3ZWVuID0gc2libGluZ3NbaV0pID09PSB0d2VlbiB8fCBjdXJUd2Vlbi5fZ2MgfHwgY3VyVHdlZW4uX3BhdXNlZCkge1xuXHRcdFx0XHRcdFx0Ly9pZ25vcmVcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGN1clR3ZWVuLl90aW1lbGluZSAhPT0gdHdlZW4uX3RpbWVsaW5lKSB7XG5cdFx0XHRcdFx0XHRnbG9iYWxTdGFydCA9IGdsb2JhbFN0YXJ0IHx8IF9jaGVja092ZXJsYXAodHdlZW4sIDAsIHplcm9EdXIpO1xuXHRcdFx0XHRcdFx0aWYgKF9jaGVja092ZXJsYXAoY3VyVHdlZW4sIGdsb2JhbFN0YXJ0LCB6ZXJvRHVyKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRvdmVybGFwc1tvQ291bnQrK10gPSBjdXJUd2Vlbjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGN1clR3ZWVuLl9zdGFydFRpbWUgPD0gc3RhcnRUaW1lKSBpZiAoY3VyVHdlZW4uX3N0YXJ0VGltZSArIGN1clR3ZWVuLnRvdGFsRHVyYXRpb24oKSAvIGN1clR3ZWVuLl90aW1lU2NhbGUgPiBzdGFydFRpbWUpIGlmICghKCh6ZXJvRHVyIHx8ICFjdXJUd2Vlbi5faW5pdHRlZCkgJiYgc3RhcnRUaW1lIC0gY3VyVHdlZW4uX3N0YXJ0VGltZSA8PSBfdGlueU51bSAqIDIpKSB7XG5cdFx0XHRcdFx0XHRvdmVybGFwc1tvQ291bnQrK10gPSBjdXJUd2Vlbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpID0gb0NvdW50O1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRjdXJUd2VlbiA9IG92ZXJsYXBzW2ldO1xuXHRcdFx0XHRcdGwgPSBjdXJUd2Vlbi5fZmlyc3RQVDsgLy93ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgdGhlcmUgd2VyZSBwcm9wZXJ0eSB0d2VlbnMgb3JpZ2luYWxseTsgaWYgdGhleSBhbGwgZ2V0IHJlbW92ZWQgaW4gdGhlIG5leHQgbGluZSdzIF9raWxsKCkgY2FsbCwgdGhlIHR3ZWVuIHNob3VsZCBiZSBraWxsZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZ3JlZW5zb2NrL0dyZWVuU29jay1KUy9pc3N1ZXMvMjc4XG5cdFx0XHRcdFx0aWYgKG1vZGUgPT09IDIpIGlmIChjdXJUd2Vlbi5fa2lsbChwcm9wcywgdGFyZ2V0LCB0d2VlbikpIHtcblx0XHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobW9kZSAhPT0gMiB8fCAoIWN1clR3ZWVuLl9maXJzdFBUICYmIGN1clR3ZWVuLl9pbml0dGVkICYmIGwpKSB7XG5cdFx0XHRcdFx0XHRpZiAobW9kZSAhPT0gMiAmJiAhX29uT3ZlcndyaXRlKGN1clR3ZWVuLCB0d2VlbikpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoY3VyVHdlZW4uX2VuYWJsZWQoZmFsc2UsIGZhbHNlKSkgeyAvL2lmIGFsbCBwcm9wZXJ0eSB0d2VlbnMgaGF2ZSBiZWVuIG92ZXJ3cml0dGVuLCBraWxsIHRoZSB0d2Vlbi5cblx0XHRcdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjaGFuZ2VkO1xuXHRcdFx0fSxcblx0XHRcdF9jaGVja092ZXJsYXAgPSBmdW5jdGlvbih0d2VlbiwgcmVmZXJlbmNlLCB6ZXJvRHVyKSB7XG5cdFx0XHRcdHZhciB0bCA9IHR3ZWVuLl90aW1lbGluZSxcblx0XHRcdFx0XHR0cyA9IHRsLl90aW1lU2NhbGUsXG5cdFx0XHRcdFx0dCA9IHR3ZWVuLl9zdGFydFRpbWU7XG5cdFx0XHRcdHdoaWxlICh0bC5fdGltZWxpbmUpIHtcblx0XHRcdFx0XHR0ICs9IHRsLl9zdGFydFRpbWU7XG5cdFx0XHRcdFx0dHMgKj0gdGwuX3RpbWVTY2FsZTtcblx0XHRcdFx0XHRpZiAodGwuX3BhdXNlZCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xMDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRsID0gdGwuX3RpbWVsaW5lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHQgLz0gdHM7XG5cdFx0XHRcdHJldHVybiAodCA+IHJlZmVyZW5jZSkgPyB0IC0gcmVmZXJlbmNlIDogKCh6ZXJvRHVyICYmIHQgPT09IHJlZmVyZW5jZSkgfHwgKCF0d2Vlbi5faW5pdHRlZCAmJiB0IC0gcmVmZXJlbmNlIDwgMiAqIF90aW55TnVtKSkgPyBfdGlueU51bSA6ICgodCArPSB0d2Vlbi50b3RhbER1cmF0aW9uKCkgLyB0d2Vlbi5fdGltZVNjYWxlIC8gdHMpID4gcmVmZXJlbmNlICsgX3RpbnlOdW0pID8gMCA6IHQgLSByZWZlcmVuY2UgLSBfdGlueU51bTtcblx0XHRcdH07XG5cblxuLy8tLS0tIFR3ZWVuTGl0ZSBpbnN0YW5jZSBtZXRob2RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRwLl9pbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdiA9IHRoaXMudmFycyxcblx0XHRcdFx0b3AgPSB0aGlzLl9vdmVyd3JpdHRlblByb3BzLFxuXHRcdFx0XHRkdXIgPSB0aGlzLl9kdXJhdGlvbixcblx0XHRcdFx0aW1tZWRpYXRlID0gISF2LmltbWVkaWF0ZVJlbmRlcixcblx0XHRcdFx0ZWFzZSA9IHYuZWFzZSxcblx0XHRcdFx0c3RhcnRBdCA9IHRoaXMuX3N0YXJ0QXQsXG5cdFx0XHRcdGksIGluaXRQbHVnaW5zLCBwdCwgcCwgc3RhcnRWYXJzLCBsO1xuXHRcdFx0aWYgKHYuc3RhcnRBdCkge1xuXHRcdFx0XHRpZiAoc3RhcnRBdCkge1xuXHRcdFx0XHRcdHN0YXJ0QXQucmVuZGVyKC0xLCB0cnVlKTsgLy9pZiB3ZSd2ZSBydW4gYSBzdGFydEF0IHByZXZpb3VzbHkgKHdoZW4gdGhlIHR3ZWVuIGluc3RhbnRpYXRlZCksIHdlIHNob3VsZCByZXZlcnQgaXQgc28gdGhhdCB0aGUgdmFsdWVzIHJlLWluc3RhbnRpYXRlIGNvcnJlY3RseSBwYXJ0aWN1bGFybHkgZm9yIHJlbGF0aXZlIHR3ZWVucy4gV2l0aG91dCB0aGlzLCBhIFR3ZWVuTGl0ZS5mcm9tVG8ob2JqLCAxLCB7eDpcIis9MTAwXCJ9LCB7eDpcIi09MTAwXCJ9KSwgZm9yIGV4YW1wbGUsIHdvdWxkIGFjdHVhbGx5IGp1bXAgdG8gKz0yMDAgYmVjYXVzZSB0aGUgc3RhcnRBdCB3b3VsZCBydW4gdHdpY2UsIGRvdWJsaW5nIHRoZSByZWxhdGl2ZSBjaGFuZ2UuXG5cdFx0XHRcdFx0c3RhcnRBdC5raWxsKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RhcnRWYXJzID0ge307XG5cdFx0XHRcdGZvciAocCBpbiB2LnN0YXJ0QXQpIHsgLy9jb3B5IHRoZSBwcm9wZXJ0aWVzL3ZhbHVlcyBpbnRvIGEgbmV3IG9iamVjdCB0byBhdm9pZCBjb2xsaXNpb25zLCBsaWtlIHZhciB0byA9IHt4OjB9LCBmcm9tID0ge3g6NTAwfTsgdGltZWxpbmUuZnJvbVRvKGUsIDEsIGZyb20sIHRvKS5mcm9tVG8oZSwgMSwgdG8sIGZyb20pO1xuXHRcdFx0XHRcdHN0YXJ0VmFyc1twXSA9IHYuc3RhcnRBdFtwXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdGFydFZhcnMuZGF0YSA9IFwiaXNTdGFydFwiO1xuXHRcdFx0XHRzdGFydFZhcnMub3ZlcndyaXRlID0gZmFsc2U7XG5cdFx0XHRcdHN0YXJ0VmFycy5pbW1lZGlhdGVSZW5kZXIgPSB0cnVlO1xuXHRcdFx0XHRzdGFydFZhcnMubGF6eSA9IChpbW1lZGlhdGUgJiYgdi5sYXp5ICE9PSBmYWxzZSk7XG5cdFx0XHRcdHN0YXJ0VmFycy5zdGFydEF0ID0gc3RhcnRWYXJzLmRlbGF5ID0gbnVsbDsgLy9ubyBuZXN0aW5nIG9mIHN0YXJ0QXQgb2JqZWN0cyBhbGxvd2VkIChvdGhlcndpc2UgaXQgY291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcCkuXG5cdFx0XHRcdHN0YXJ0VmFycy5vblVwZGF0ZSA9IHYub25VcGRhdGU7XG5cdFx0XHRcdHN0YXJ0VmFycy5vblVwZGF0ZVBhcmFtcyA9IHYub25VcGRhdGVQYXJhbXM7XG5cdFx0XHRcdHN0YXJ0VmFycy5vblVwZGF0ZVNjb3BlID0gdi5vblVwZGF0ZVNjb3BlIHx8IHYuY2FsbGJhY2tTY29wZSB8fCB0aGlzO1xuXHRcdFx0XHR0aGlzLl9zdGFydEF0ID0gVHdlZW5MaXRlLnRvKHRoaXMudGFyZ2V0IHx8IHt9LCAwLCBzdGFydFZhcnMpO1xuXHRcdFx0XHRpZiAoaW1tZWRpYXRlKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3RpbWUgPiAwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGFydEF0ID0gbnVsbDsgLy90d2VlbnMgdGhhdCByZW5kZXIgaW1tZWRpYXRlbHkgKGxpa2UgbW9zdCBmcm9tKCkgYW5kIGZyb21UbygpIHR3ZWVucykgc2hvdWxkbid0IHJldmVydCB3aGVuIHRoZWlyIHBhcmVudCB0aW1lbGluZSdzIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgc3RhcnRUaW1lIGJlY2F1c2UgdGhlIGluaXRpYWwgcmVuZGVyIGNvdWxkIGhhdmUgaGFwcGVuZWQgYW55dGltZSBhbmQgaXQgc2hvdWxkbid0IGJlIGRpcmVjdGx5IGNvcnJlbGF0ZWQgdG8gdGhpcyB0d2VlbidzIHN0YXJ0VGltZS4gSW1hZ2luZSBzZXR0aW5nIHVwIGEgY29tcGxleCBhbmltYXRpb24gd2hlcmUgdGhlIGJlZ2lubmluZyBzdGF0ZXMgb2YgdmFyaW91cyBvYmplY3RzIGFyZSByZW5kZXJlZCBpbW1lZGlhdGVseSBidXQgdGhlIHR3ZWVuIGRvZXNuJ3QgaGFwcGVuIGZvciBxdWl0ZSBzb21lIHRpbWUgLSBpZiB3ZSByZXZlcnQgdG8gdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcyBzb29uIGFzIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIHBhc3QgdGhlIHR3ZWVuJ3Mgc3RhcnRUaW1lLCBpdCB3aWxsIHRocm93IHRoaW5ncyBvZmYgdmlzdWFsbHkuIFJldmVyc2lvbiBzaG91bGQgb25seSBoYXBwZW4gaW4gVGltZWxpbmVMaXRlL01heCBpbnN0YW5jZXMgd2hlcmUgaW1tZWRpYXRlUmVuZGVyIHdhcyBmYWxzZSAod2hpY2ggaXMgdGhlIGRlZmF1bHQgaW4gdGhlIGNvbnZlbmllbmNlIG1ldGhvZHMgbGlrZSBmcm9tKCkpLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZHVyICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47IC8vd2Ugc2tpcCBpbml0aWFsaXphdGlvbiBoZXJlIHNvIHRoYXQgb3ZlcndyaXRpbmcgZG9lc24ndCBvY2N1ciB1bnRpbCB0aGUgdHdlZW4gYWN0dWFsbHkgYmVnaW5zLiBPdGhlcndpc2UsIGlmIHlvdSBjcmVhdGUgc2V2ZXJhbCBpbW1lZGlhdGVSZW5kZXI6dHJ1ZSB0d2VlbnMgb2YgdGhlIHNhbWUgdGFyZ2V0L3Byb3BlcnRpZXMgdG8gZHJvcCBpbnRvIGEgVGltZWxpbmVMaXRlIG9yIFRpbWVsaW5lTWF4LCB0aGUgbGFzdCBvbmUgY3JlYXRlZCB3b3VsZCBvdmVyd3JpdGUgdGhlIGZpcnN0IG9uZXMgYmVjYXVzZSB0aGV5IGRpZG4ndCBnZXQgcGxhY2VkIGludG8gdGhlIHRpbWVsaW5lIHlldCBiZWZvcmUgdGhlIGZpcnN0IHJlbmRlciBvY2N1cnMgYW5kIGtpY2tzIGluIG92ZXJ3cml0aW5nLlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh2LnJ1bkJhY2t3YXJkcyAmJiBkdXIgIT09IDApIHtcblx0XHRcdFx0Ly9mcm9tKCkgdHdlZW5zIG11c3QgYmUgaGFuZGxlZCB1bmlxdWVseTogdGhlaXIgYmVnaW5uaW5nIHZhbHVlcyBtdXN0IGJlIHJlbmRlcmVkIGJ1dCB3ZSBkb24ndCB3YW50IG92ZXJ3cml0aW5nIHRvIG9jY3VyIHlldCAod2hlbiB0aW1lIGlzIHN0aWxsIDApLiBXYWl0IHVudGlsIHRoZSB0d2VlbiBhY3R1YWxseSBiZWdpbnMgYmVmb3JlIGRvaW5nIGFsbCB0aGUgcm91dGluZXMgbGlrZSBvdmVyd3JpdGluZy4gQXQgdGhhdCB0aW1lLCB3ZSBzaG91bGQgcmVuZGVyIGF0IHRoZSBFTkQgb2YgdGhlIHR3ZWVuIHRvIGVuc3VyZSB0aGF0IHRoaW5ncyBpbml0aWFsaXplIGNvcnJlY3RseSAocmVtZW1iZXIsIGZyb20oKSB0d2VlbnMgZ28gYmFja3dhcmRzKVxuXHRcdFx0XHRpZiAoc3RhcnRBdCkge1xuXHRcdFx0XHRcdHN0YXJ0QXQucmVuZGVyKC0xLCB0cnVlKTtcblx0XHRcdFx0XHRzdGFydEF0LmtpbGwoKTtcblx0XHRcdFx0XHR0aGlzLl9zdGFydEF0ID0gbnVsbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAodGhpcy5fdGltZSAhPT0gMCkgeyAvL2luIHJhcmUgY2FzZXMgKGxpa2UgaWYgYSBmcm9tKCkgdHdlZW4gcnVucyBhbmQgdGhlbiBpcyBpbnZhbGlkYXRlKCktZWQpLCBpbW1lZGlhdGVSZW5kZXIgY291bGQgYmUgdHJ1ZSBidXQgdGhlIGluaXRpYWwgZm9yY2VkLXJlbmRlciBnZXRzIHNraXBwZWQsIHNvIHRoZXJlJ3Mgbm8gbmVlZCB0byBmb3JjZSB0aGUgcmVuZGVyIGluIHRoaXMgY29udGV4dCB3aGVuIHRoZSBfdGltZSBpcyBncmVhdGVyIHRoYW4gMFxuXHRcdFx0XHRcdFx0aW1tZWRpYXRlID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHB0ID0ge307XG5cdFx0XHRcdFx0Zm9yIChwIGluIHYpIHsgLy9jb3B5IHByb3BzIGludG8gYSBuZXcgb2JqZWN0IGFuZCBza2lwIGFueSByZXNlcnZlZCBwcm9wcywgb3RoZXJ3aXNlIG9uQ29tcGxldGUgb3Igb25VcGRhdGUgb3Igb25TdGFydCBjb3VsZCBmaXJlLiBXZSBzaG91bGQsIGhvd2V2ZXIsIHBlcm1pdCBhdXRvQ1NTIHRvIGdvIHRocm91Z2guXG5cdFx0XHRcdFx0XHRpZiAoIV9yZXNlcnZlZFByb3BzW3BdIHx8IHAgPT09IFwiYXV0b0NTU1wiKSB7XG5cdFx0XHRcdFx0XHRcdHB0W3BdID0gdltwXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHQub3ZlcndyaXRlID0gMDtcblx0XHRcdFx0XHRwdC5kYXRhID0gXCJpc0Zyb21TdGFydFwiOyAvL3dlIHRhZyB0aGUgdHdlZW4gd2l0aCBhcyBcImlzRnJvbVN0YXJ0XCIgc28gdGhhdCBpZiBbaW5zaWRlIGEgcGx1Z2luXSB3ZSBuZWVkIHRvIG9ubHkgZG8gc29tZXRoaW5nIGF0IHRoZSB2ZXJ5IEVORCBvZiBhIHR3ZWVuLCB3ZSBoYXZlIGEgd2F5IG9mIGlkZW50aWZ5aW5nIHRoaXMgdHdlZW4gYXMgbWVyZWx5IHRoZSBvbmUgdGhhdCdzIHNldHRpbmcgdGhlIGJlZ2lubmluZyB2YWx1ZXMgZm9yIGEgXCJmcm9tKClcIiB0d2Vlbi4gRm9yIGV4YW1wbGUsIGNsZWFyUHJvcHMgaW4gQ1NTUGx1Z2luIHNob3VsZCBvbmx5IGdldCBhcHBsaWVkIGF0IHRoZSB2ZXJ5IEVORCBvZiBhIHR3ZWVuIGFuZCB3aXRob3V0IHRoaXMgdGFnLCBmcm9tKC4uLntoZWlnaHQ6MTAwLCBjbGVhclByb3BzOlwiaGVpZ2h0XCIsIGRlbGF5OjF9KSB3b3VsZCB3aXBlIHRoZSBoZWlnaHQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgdHdlZW4gYW5kIGFmdGVyIDEgc2Vjb25kLCBpdCdkIGtpY2sgYmFjayBpbi5cblx0XHRcdFx0XHRwdC5sYXp5ID0gKGltbWVkaWF0ZSAmJiB2LmxhenkgIT09IGZhbHNlKTtcblx0XHRcdFx0XHRwdC5pbW1lZGlhdGVSZW5kZXIgPSBpbW1lZGlhdGU7IC8vemVyby1kdXJhdGlvbiB0d2VlbnMgcmVuZGVyIGltbWVkaWF0ZWx5IGJ5IGRlZmF1bHQsIGJ1dCBpZiB3ZSdyZSBub3Qgc3BlY2lmaWNhbGx5IGluc3RydWN0ZWQgdG8gcmVuZGVyIHRoaXMgdHdlZW4gaW1tZWRpYXRlbHksIHdlIHNob3VsZCBza2lwIHRoaXMgYW5kIG1lcmVseSBfaW5pdCgpIHRvIHJlY29yZCB0aGUgc3RhcnRpbmcgdmFsdWVzIChyZW5kZXJpbmcgdGhlbSBpbW1lZGlhdGVseSB3b3VsZCBwdXNoIHRoZW0gdG8gY29tcGxldGlvbiB3aGljaCBpcyB3YXN0ZWZ1bCBpbiB0aGF0IGNhc2UgLSB3ZSdkIGhhdmUgdG8gcmVuZGVyKC0xKSBpbW1lZGlhdGVseSBhZnRlcilcblx0XHRcdFx0XHR0aGlzLl9zdGFydEF0ID0gVHdlZW5MaXRlLnRvKHRoaXMudGFyZ2V0LCAwLCBwdCk7XG5cdFx0XHRcdFx0aWYgKCFpbW1lZGlhdGUpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQuX2luaXQoKTsgLy9lbnN1cmVzIHRoYXQgdGhlIGluaXRpYWwgdmFsdWVzIGFyZSByZWNvcmRlZFxuXHRcdFx0XHRcdFx0dGhpcy5fc3RhcnRBdC5fZW5hYmxlZChmYWxzZSk7IC8vbm8gbmVlZCB0byBoYXZlIHRoZSB0d2VlbiByZW5kZXIgb24gdGhlIG5leHQgY3ljbGUuIERpc2FibGUgaXQgYmVjYXVzZSB3ZSdsbCBhbHdheXMgbWFudWFsbHkgY29udHJvbCB0aGUgcmVuZGVycyBvZiB0aGUgX3N0YXJ0QXQgdHdlZW4uXG5cdFx0XHRcdFx0XHRpZiAodGhpcy52YXJzLmltbWVkaWF0ZVJlbmRlcikge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9zdGFydEF0ID0gbnVsbDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX3RpbWUgPT09IDApIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuX2Vhc2UgPSBlYXNlID0gKCFlYXNlKSA/IFR3ZWVuTGl0ZS5kZWZhdWx0RWFzZSA6IChlYXNlIGluc3RhbmNlb2YgRWFzZSkgPyBlYXNlIDogKHR5cGVvZihlYXNlKSA9PT0gXCJmdW5jdGlvblwiKSA/IG5ldyBFYXNlKGVhc2UsIHYuZWFzZVBhcmFtcykgOiBfZWFzZU1hcFtlYXNlXSB8fCBUd2VlbkxpdGUuZGVmYXVsdEVhc2U7XG5cdFx0XHRpZiAodi5lYXNlUGFyYW1zIGluc3RhbmNlb2YgQXJyYXkgJiYgZWFzZS5jb25maWcpIHtcblx0XHRcdFx0dGhpcy5fZWFzZSA9IGVhc2UuY29uZmlnLmFwcGx5KGVhc2UsIHYuZWFzZVBhcmFtcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9lYXNlVHlwZSA9IHRoaXMuX2Vhc2UuX3R5cGU7XG5cdFx0XHR0aGlzLl9lYXNlUG93ZXIgPSB0aGlzLl9lYXNlLl9wb3dlcjtcblx0XHRcdHRoaXMuX2ZpcnN0UFQgPSBudWxsO1xuXG5cdFx0XHRpZiAodGhpcy5fdGFyZ2V0cykge1xuXHRcdFx0XHRsID0gdGhpcy5fdGFyZ2V0cy5sZW5ndGg7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMuX2luaXRQcm9wcyggdGhpcy5fdGFyZ2V0c1tpXSwgKHRoaXMuX3Byb3BMb29rdXBbaV0gPSB7fSksIHRoaXMuX3NpYmxpbmdzW2ldLCAob3AgPyBvcFtpXSA6IG51bGwpLCBpKSApIHtcblx0XHRcdFx0XHRcdGluaXRQbHVnaW5zID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGluaXRQbHVnaW5zID0gdGhpcy5faW5pdFByb3BzKHRoaXMudGFyZ2V0LCB0aGlzLl9wcm9wTG9va3VwLCB0aGlzLl9zaWJsaW5ncywgb3AsIDApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW5pdFBsdWdpbnMpIHtcblx0XHRcdFx0VHdlZW5MaXRlLl9vblBsdWdpbkV2ZW50KFwiX29uSW5pdEFsbFByb3BzXCIsIHRoaXMpOyAvL3Jlb3JkZXJzIHRoZSBhcnJheSBpbiBvcmRlciBvZiBwcmlvcml0eS4gVXNlcyBhIHN0YXRpYyBUd2VlblBsdWdpbiBtZXRob2QgaW4gb3JkZXIgdG8gbWluaW1pemUgZmlsZSBzaXplIGluIFR3ZWVuTGl0ZVxuXHRcdFx0fVxuXHRcdFx0aWYgKG9wKSBpZiAoIXRoaXMuX2ZpcnN0UFQpIGlmICh0eXBlb2YodGhpcy50YXJnZXQpICE9PSBcImZ1bmN0aW9uXCIpIHsgLy9pZiBhbGwgdHdlZW5pbmcgcHJvcGVydGllcyBoYXZlIGJlZW4gb3ZlcndyaXR0ZW4sIGtpbGwgdGhlIHR3ZWVuLiBJZiB0aGUgdGFyZ2V0IGlzIGEgZnVuY3Rpb24sIGl0J3MgcHJvYmFibHkgYSBkZWxheWVkQ2FsbCBzbyBsZXQgaXQgbGl2ZS5cblx0XHRcdFx0dGhpcy5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHYucnVuQmFja3dhcmRzKSB7XG5cdFx0XHRcdHB0ID0gdGhpcy5fZmlyc3RQVDtcblx0XHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdFx0cHQucyArPSBwdC5jO1xuXHRcdFx0XHRcdHB0LmMgPSAtcHQuYztcblx0XHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9vblVwZGF0ZSA9IHYub25VcGRhdGU7XG5cdFx0XHR0aGlzLl9pbml0dGVkID0gdHJ1ZTtcblx0XHR9O1xuXG5cdFx0cC5faW5pdFByb3BzID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wTG9va3VwLCBzaWJsaW5ncywgb3ZlcndyaXR0ZW5Qcm9wcywgaW5kZXgpIHtcblx0XHRcdHZhciBwLCBpLCBpbml0UGx1Z2lucywgcGx1Z2luLCBwdCwgdjtcblx0XHRcdGlmICh0YXJnZXQgPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoX2xhenlMb29rdXBbdGFyZ2V0Ll9nc1R3ZWVuSURdKSB7XG5cdFx0XHRcdF9sYXp5UmVuZGVyKCk7IC8vaWYgb3RoZXIgdHdlZW5zIG9mIHRoZSBzYW1lIHRhcmdldCBoYXZlIHJlY2VudGx5IGluaXR0ZWQgYnV0IGhhdmVuJ3QgcmVuZGVyZWQgeWV0LCB3ZSd2ZSBnb3QgdG8gZm9yY2UgdGhlIHJlbmRlciBzbyB0aGF0IHRoZSBzdGFydGluZyB2YWx1ZXMgYXJlIGNvcnJlY3QgKGltYWdpbmUgcG9wdWxhdGluZyBhIHRpbWVsaW5lIHdpdGggYSBidW5jaCBvZiBzZXF1ZW50aWFsIHR3ZWVucyBhbmQgdGhlbiBqdW1waW5nIHRvIHRoZSBlbmQpXG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGhpcy52YXJzLmNzcykgaWYgKHRhcmdldC5zdHlsZSkgaWYgKHRhcmdldCAhPT0gd2luZG93ICYmIHRhcmdldC5ub2RlVHlwZSkgaWYgKF9wbHVnaW5zLmNzcykgaWYgKHRoaXMudmFycy5hdXRvQ1NTICE9PSBmYWxzZSkgeyAvL2l0J3Mgc28gY29tbW9uIHRvIHVzZSBUd2VlbkxpdGUvTWF4IHRvIGFuaW1hdGUgdGhlIGNzcyBvZiBET00gZWxlbWVudHMsIHdlIGFzc3VtZSB0aGF0IGlmIHRoZSB0YXJnZXQgaXMgYSBET00gZWxlbWVudCwgdGhhdCdzIHdoYXQgaXMgaW50ZW5kZWQgKGEgY29udmVuaWVuY2Ugc28gdGhhdCB1c2VycyBkb24ndCBoYXZlIHRvIHdyYXAgdGhpbmdzIGluIGNzczp7fSwgYWx0aG91Z2ggd2Ugc3RpbGwgcmVjb21tZW5kIGl0IGZvciBhIHNsaWdodCBwZXJmb3JtYW5jZSBib29zdCBhbmQgYmV0dGVyIHNwZWNpZmljaXR5KS4gTm90ZTogd2UgY2Fubm90IGNoZWNrIFwibm9kZVR5cGVcIiBvbiB0aGUgd2luZG93IGluc2lkZSBhbiBpZnJhbWUuXG5cdFx0XHRcdF9hdXRvQ1NTKHRoaXMudmFycywgdGFyZ2V0KTtcblx0XHRcdH1cblx0XHRcdGZvciAocCBpbiB0aGlzLnZhcnMpIHtcblx0XHRcdFx0diA9IHRoaXMudmFyc1twXTtcblx0XHRcdFx0aWYgKF9yZXNlcnZlZFByb3BzW3BdKSB7XG5cdFx0XHRcdFx0aWYgKHYpIGlmICgodiBpbnN0YW5jZW9mIEFycmF5KSB8fCAodi5wdXNoICYmIF9pc0FycmF5KHYpKSkgaWYgKHYuam9pbihcIlwiKS5pbmRleE9mKFwie3NlbGZ9XCIpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0dGhpcy52YXJzW3BdID0gdiA9IHRoaXMuX3N3YXBTZWxmSW5QYXJhbXModiwgdGhpcyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSBpZiAoX3BsdWdpbnNbcF0gJiYgKHBsdWdpbiA9IG5ldyBfcGx1Z2luc1twXSgpKS5fb25Jbml0VHdlZW4odGFyZ2V0LCB0aGlzLnZhcnNbcF0sIHRoaXMsIGluZGV4KSkge1xuXG5cdFx0XHRcdFx0Ly90IC0gdGFyZ2V0IFx0XHRbb2JqZWN0XVxuXHRcdFx0XHRcdC8vcCAtIHByb3BlcnR5IFx0XHRbc3RyaW5nXVxuXHRcdFx0XHRcdC8vcyAtIHN0YXJ0XHRcdFx0W251bWJlcl1cblx0XHRcdFx0XHQvL2MgLSBjaGFuZ2VcdFx0W251bWJlcl1cblx0XHRcdFx0XHQvL2YgLSBpc0Z1bmN0aW9uXHRbYm9vbGVhbl1cblx0XHRcdFx0XHQvL24gLSBuYW1lXHRcdFx0W3N0cmluZ11cblx0XHRcdFx0XHQvL3BnIC0gaXNQbHVnaW4gXHRbYm9vbGVhbl1cblx0XHRcdFx0XHQvL3ByIC0gcHJpb3JpdHlcdFx0W251bWJlcl1cblx0XHRcdFx0XHQvL20gLSBtb2QgICAgICAgICAgIFtmdW5jdGlvbiB8IDBdXG5cdFx0XHRcdFx0dGhpcy5fZmlyc3RQVCA9IHB0ID0ge19uZXh0OnRoaXMuX2ZpcnN0UFQsIHQ6cGx1Z2luLCBwOlwic2V0UmF0aW9cIiwgczowLCBjOjEsIGY6MSwgbjpwLCBwZzoxLCBwcjpwbHVnaW4uX3ByaW9yaXR5LCBtOjB9O1xuXHRcdFx0XHRcdGkgPSBwbHVnaW4uX292ZXJ3cml0ZVByb3BzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdHByb3BMb29rdXBbcGx1Z2luLl9vdmVyd3JpdGVQcm9wc1tpXV0gPSB0aGlzLl9maXJzdFBUO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocGx1Z2luLl9wcmlvcml0eSB8fCBwbHVnaW4uX29uSW5pdEFsbFByb3BzKSB7XG5cdFx0XHRcdFx0XHRpbml0UGx1Z2lucyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwbHVnaW4uX29uRGlzYWJsZSB8fCBwbHVnaW4uX29uRW5hYmxlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9ub3RpZnlQbHVnaW5zT2ZFbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHB0Ll9uZXh0KSB7XG5cdFx0XHRcdFx0XHRwdC5fbmV4dC5fcHJldiA9IHB0O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHByb3BMb29rdXBbcF0gPSBfYWRkUHJvcFR3ZWVuLmNhbGwodGhpcywgdGFyZ2V0LCBwLCBcImdldFwiLCB2LCBwLCAwLCBudWxsLCB0aGlzLnZhcnMuc3RyaW5nRmlsdGVyLCBpbmRleCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKG92ZXJ3cml0dGVuUHJvcHMpIGlmICh0aGlzLl9raWxsKG92ZXJ3cml0dGVuUHJvcHMsIHRhcmdldCkpIHsgLy9hbm90aGVyIHR3ZWVuIG1heSBoYXZlIHRyaWVkIHRvIG92ZXJ3cml0ZSBwcm9wZXJ0aWVzIG9mIHRoaXMgdHdlZW4gYmVmb3JlIGluaXQoKSB3YXMgY2FsbGVkIChsaWtlIGlmIHR3byB0d2VlbnMgc3RhcnQgYXQgdGhlIHNhbWUgdGltZSwgdGhlIG9uZSBjcmVhdGVkIHNlY29uZCB3aWxsIHJ1biBmaXJzdClcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2luaXRQcm9wcyh0YXJnZXQsIHByb3BMb29rdXAsIHNpYmxpbmdzLCBvdmVyd3JpdHRlblByb3BzLCBpbmRleCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5fb3ZlcndyaXRlID4gMSkgaWYgKHRoaXMuX2ZpcnN0UFQpIGlmIChzaWJsaW5ncy5sZW5ndGggPiAxKSBpZiAoX2FwcGx5T3ZlcndyaXRlKHRhcmdldCwgdGhpcywgcHJvcExvb2t1cCwgdGhpcy5fb3ZlcndyaXRlLCBzaWJsaW5ncykpIHtcblx0XHRcdFx0dGhpcy5fa2lsbChwcm9wTG9va3VwLCB0YXJnZXQpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5faW5pdFByb3BzKHRhcmdldCwgcHJvcExvb2t1cCwgc2libGluZ3MsIG92ZXJ3cml0dGVuUHJvcHMsIGluZGV4KTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl9maXJzdFBUKSBpZiAoKHRoaXMudmFycy5sYXp5ICE9PSBmYWxzZSAmJiB0aGlzLl9kdXJhdGlvbikgfHwgKHRoaXMudmFycy5sYXp5ICYmICF0aGlzLl9kdXJhdGlvbikpIHsgLy96ZXJvIGR1cmF0aW9uIHR3ZWVucyBkb24ndCBsYXp5IHJlbmRlciBieSBkZWZhdWx0OyBldmVyeXRoaW5nIGVsc2UgZG9lcy5cblx0XHRcdFx0X2xhenlMb29rdXBbdGFyZ2V0Ll9nc1R3ZWVuSURdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBpbml0UGx1Z2lucztcblx0XHR9O1xuXG5cdFx0cC5yZW5kZXIgPSBmdW5jdGlvbih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcyxcblx0XHRcdFx0cHJldlRpbWUgPSBzZWxmLl90aW1lLFxuXHRcdFx0XHRkdXJhdGlvbiA9IHNlbGYuX2R1cmF0aW9uLFxuXHRcdFx0XHRwcmV2UmF3UHJldlRpbWUgPSBzZWxmLl9yYXdQcmV2VGltZSxcblx0XHRcdFx0aXNDb21wbGV0ZSwgY2FsbGJhY2ssIHB0LCByYXdQcmV2VGltZTtcblx0XHRcdGlmICh0aW1lID49IGR1cmF0aW9uIC0gX3RpbnlOdW0gJiYgdGltZSA+PSAwKSB7IC8vdG8gd29yayBhcm91bmQgb2NjYXNpb25hbCBmbG9hdGluZyBwb2ludCBtYXRoIGFydGlmYWN0cy5cblx0XHRcdFx0c2VsZi5fdG90YWxUaW1lID0gc2VsZi5fdGltZSA9IGR1cmF0aW9uO1xuXHRcdFx0XHRzZWxmLnJhdGlvID0gc2VsZi5fZWFzZS5fY2FsY0VuZCA/IHNlbGYuX2Vhc2UuZ2V0UmF0aW8oMSkgOiAxO1xuXHRcdFx0XHRpZiAoIXNlbGYuX3JldmVyc2VkICkge1xuXHRcdFx0XHRcdGlzQ29tcGxldGUgPSB0cnVlO1xuXHRcdFx0XHRcdGNhbGxiYWNrID0gXCJvbkNvbXBsZXRlXCI7XG5cdFx0XHRcdFx0Zm9yY2UgPSAoZm9yY2UgfHwgc2VsZi5fdGltZWxpbmUuYXV0b1JlbW92ZUNoaWxkcmVuKTsgLy9vdGhlcndpc2UsIGlmIHRoZSBhbmltYXRpb24gaXMgdW5wYXVzZWQvYWN0aXZhdGVkIGFmdGVyIGl0J3MgYWxyZWFkeSBmaW5pc2hlZCwgaXQgZG9lc24ndCBnZXQgcmVtb3ZlZCBmcm9tIHRoZSBwYXJlbnQgdGltZWxpbmUuXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGR1cmF0aW9uID09PSAwKSBpZiAoc2VsZi5faW5pdHRlZCB8fCAhc2VsZi52YXJzLmxhenkgfHwgZm9yY2UpIHsgLy96ZXJvLWR1cmF0aW9uIHR3ZWVucyBhcmUgdHJpY2t5IGJlY2F1c2Ugd2UgbXVzdCBkaXNjZXJuIHRoZSBtb21lbnR1bS9kaXJlY3Rpb24gb2YgdGltZSBpbiBvcmRlciB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgc3RhcnRpbmcgdmFsdWVzIHNob3VsZCBiZSByZW5kZXJlZCBvciB0aGUgZW5kaW5nIHZhbHVlcy4gSWYgdGhlIFwicGxheWhlYWRcIiBvZiBpdHMgdGltZWxpbmUgZ29lcyBwYXN0IHRoZSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIGluIHRoZSBmb3J3YXJkIGRpcmVjdGlvbiBvciBsYW5kcyBkaXJlY3RseSBvbiBpdCwgdGhlIGVuZCB2YWx1ZXMgc2hvdWxkIGJlIHJlbmRlcmVkLCBidXQgaWYgdGhlIHRpbWVsaW5lJ3MgXCJwbGF5aGVhZFwiIG1vdmVzIHBhc3QgaXQgaW4gdGhlIGJhY2t3YXJkIGRpcmVjdGlvbiAoZnJvbSBhIHBvc3RpdGl2ZSB0aW1lIHRvIGEgbmVnYXRpdmUgdGltZSksIHRoZSBzdGFydGluZyB2YWx1ZXMgbXVzdCBiZSByZW5kZXJlZC5cblx0XHRcdFx0XHRpZiAoc2VsZi5fc3RhcnRUaW1lID09PSBzZWxmLl90aW1lbGluZS5fZHVyYXRpb24pIHsgLy9pZiBhIHplcm8tZHVyYXRpb24gdHdlZW4gaXMgYXQgdGhlIFZFUlkgZW5kIG9mIGEgdGltZWxpbmUgYW5kIHRoYXQgdGltZWxpbmUgcmVuZGVycyBhdCBpdHMgZW5kLCBpdCB3aWxsIHR5cGljYWxseSBhZGQgYSB0aW55IGJpdCBvZiBjdXNoaW9uIHRvIHRoZSByZW5kZXIgdGltZSB0byBwcmV2ZW50IHJvdW5kaW5nIGVycm9ycyBmcm9tIGdldHRpbmcgaW4gdGhlIHdheSBvZiB0d2VlbnMgcmVuZGVyaW5nIHRoZWlyIFZFUlkgZW5kLiBJZiB3ZSB0aGVuIHJldmVyc2UoKSB0aGF0IHRpbWVsaW5lLCB0aGUgemVyby1kdXJhdGlvbiB0d2VlbiB3aWxsIHRyaWdnZXIgaXRzIG9uUmV2ZXJzZUNvbXBsZXRlIGV2ZW4gdGhvdWdoIHRlY2huaWNhbGx5IHRoZSBwbGF5aGVhZCBkaWRuJ3QgcGFzcyBvdmVyIGl0IGFnYWluLiBJdCdzIGEgdmVyeSBzcGVjaWZpYyBlZGdlIGNhc2Ugd2UgbXVzdCBhY2NvbW1vZGF0ZS5cblx0XHRcdFx0XHRcdHRpbWUgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocHJldlJhd1ByZXZUaW1lIDwgMCB8fCAodGltZSA8PSAwICYmIHRpbWUgPj0gLV90aW55TnVtKSB8fCAocHJldlJhd1ByZXZUaW1lID09PSBfdGlueU51bSAmJiBzZWxmLmRhdGEgIT09IFwiaXNQYXVzZVwiKSkgaWYgKHByZXZSYXdQcmV2VGltZSAhPT0gdGltZSkgeyAvL25vdGU6IHdoZW4gdGhpcy5kYXRhIGlzIFwiaXNQYXVzZVwiLCBpdCdzIGEgY2FsbGJhY2sgYWRkZWQgYnkgYWRkUGF1c2UoKSBvbiBhIHRpbWVsaW5lIHRoYXQgd2Ugc2hvdWxkIG5vdCBiZSB0cmlnZ2VyZWQgd2hlbiBMRUFWSU5HIGl0cyBleGFjdCBzdGFydCB0aW1lLiBJbiBvdGhlciB3b3JkcywgdGwuYWRkUGF1c2UoMSkucGxheSgxKSBzaG91bGRuJ3QgcGF1c2UuXG5cdFx0XHRcdFx0XHRmb3JjZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRpZiAocHJldlJhd1ByZXZUaW1lID4gX3RpbnlOdW0pIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sgPSBcIm9uUmV2ZXJzZUNvbXBsZXRlXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNlbGYuX3Jhd1ByZXZUaW1lID0gcmF3UHJldlRpbWUgPSAoIXN1cHByZXNzRXZlbnRzIHx8IHRpbWUgfHwgcHJldlJhd1ByZXZUaW1lID09PSB0aW1lKSA/IHRpbWUgOiBfdGlueU51bTsgLy93aGVuIHRoZSBwbGF5aGVhZCBhcnJpdmVzIGF0IEVYQUNUTFkgdGltZSAwIChyaWdodCBvbiB0b3ApIG9mIGEgemVyby1kdXJhdGlvbiB0d2Vlbiwgd2UgbmVlZCB0byBkaXNjZXJuIGlmIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBzbyB0aGF0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIGFnYWluIChuZXh0IHRpbWUpLCBpdCdsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gSWYgZXZlbnRzIGFyZSBOT1Qgc3VwcHJlc3NlZCwgb2J2aW91c2x5IHRoZSBjYWxsYmFjayB3b3VsZCBiZSB0cmlnZ2VyZWQgaW4gdGhpcyByZW5kZXIuIEJhc2ljYWxseSwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlIGVpdGhlciB3aGVuIHRoZSBwbGF5aGVhZCBBUlJJVkVTIG9yIExFQVZFUyB0aGlzIGV4YWN0IHNwb3QsIG5vdCBib3RoLiBJbWFnaW5lIGRvaW5nIGEgdGltZWxpbmUuc2VlaygwKSBhbmQgdGhlcmUncyBhIGNhbGxiYWNrIHRoYXQgc2l0cyBhdCAwLiBTaW5jZSBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhhdCBzZWVrKCkgYnkgZGVmYXVsdCwgbm90aGluZyB3aWxsIGZpcmUsIGJ1dCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBvZmYgb2YgdGhhdCBwb3NpdGlvbiwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlLiBUaGlzIGJlaGF2aW9yIGlzIHdoYXQgcGVvcGxlIGludHVpdGl2ZWx5IGV4cGVjdC4gV2Ugc2V0IHRoZSBfcmF3UHJldlRpbWUgdG8gYmUgYSBwcmVjaXNlIHRpbnkgbnVtYmVyIHRvIGluZGljYXRlIHRoaXMgc2NlbmFyaW8gcmF0aGVyIHRoYW4gdXNpbmcgYW5vdGhlciBwcm9wZXJ0eS92YXJpYWJsZSB3aGljaCB3b3VsZCBpbmNyZWFzZSBtZW1vcnkgdXNhZ2UuIFRoaXMgdGVjaG5pcXVlIGlzIGxlc3MgcmVhZGFibGUsIGJ1dCBtb3JlIGVmZmljaWVudC5cblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2UgaWYgKHRpbWUgPCBfdGlueU51bSkgeyAvL3RvIHdvcmsgYXJvdW5kIG9jY2FzaW9uYWwgZmxvYXRpbmcgcG9pbnQgbWF0aCBhcnRpZmFjdHMsIHJvdW5kIHN1cGVyIHNtYWxsIHZhbHVlcyB0byAwLlxuXHRcdFx0XHRzZWxmLl90b3RhbFRpbWUgPSBzZWxmLl90aW1lID0gMDtcblx0XHRcdFx0c2VsZi5yYXRpbyA9IHNlbGYuX2Vhc2UuX2NhbGNFbmQgPyBzZWxmLl9lYXNlLmdldFJhdGlvKDApIDogMDtcblx0XHRcdFx0aWYgKHByZXZUaW1lICE9PSAwIHx8IChkdXJhdGlvbiA9PT0gMCAmJiBwcmV2UmF3UHJldlRpbWUgPiAwKSkge1xuXHRcdFx0XHRcdGNhbGxiYWNrID0gXCJvblJldmVyc2VDb21wbGV0ZVwiO1xuXHRcdFx0XHRcdGlzQ29tcGxldGUgPSBzZWxmLl9yZXZlcnNlZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGltZSA+IC1fdGlueU51bSkge1xuXHRcdFx0XHRcdHRpbWUgPSAwO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRpbWUgPCAwKSB7XG5cdFx0XHRcdFx0c2VsZi5fYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKGR1cmF0aW9uID09PSAwKSBpZiAoc2VsZi5faW5pdHRlZCB8fCAhc2VsZi52YXJzLmxhenkgfHwgZm9yY2UpIHsgLy96ZXJvLWR1cmF0aW9uIHR3ZWVucyBhcmUgdHJpY2t5IGJlY2F1c2Ugd2UgbXVzdCBkaXNjZXJuIHRoZSBtb21lbnR1bS9kaXJlY3Rpb24gb2YgdGltZSBpbiBvcmRlciB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgc3RhcnRpbmcgdmFsdWVzIHNob3VsZCBiZSByZW5kZXJlZCBvciB0aGUgZW5kaW5nIHZhbHVlcy4gSWYgdGhlIFwicGxheWhlYWRcIiBvZiBpdHMgdGltZWxpbmUgZ29lcyBwYXN0IHRoZSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIGluIHRoZSBmb3J3YXJkIGRpcmVjdGlvbiBvciBsYW5kcyBkaXJlY3RseSBvbiBpdCwgdGhlIGVuZCB2YWx1ZXMgc2hvdWxkIGJlIHJlbmRlcmVkLCBidXQgaWYgdGhlIHRpbWVsaW5lJ3MgXCJwbGF5aGVhZFwiIG1vdmVzIHBhc3QgaXQgaW4gdGhlIGJhY2t3YXJkIGRpcmVjdGlvbiAoZnJvbSBhIHBvc3RpdGl2ZSB0aW1lIHRvIGEgbmVnYXRpdmUgdGltZSksIHRoZSBzdGFydGluZyB2YWx1ZXMgbXVzdCBiZSByZW5kZXJlZC5cblx0XHRcdFx0XHRcdGlmIChwcmV2UmF3UHJldlRpbWUgPj0gMCAmJiAhKHByZXZSYXdQcmV2VGltZSA9PT0gX3RpbnlOdW0gJiYgc2VsZi5kYXRhID09PSBcImlzUGF1c2VcIikpIHtcblx0XHRcdFx0XHRcdFx0Zm9yY2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2VsZi5fcmF3UHJldlRpbWUgPSByYXdQcmV2VGltZSA9ICghc3VwcHJlc3NFdmVudHMgfHwgdGltZSB8fCBwcmV2UmF3UHJldlRpbWUgPT09IHRpbWUpID8gdGltZSA6IF90aW55TnVtOyAvL3doZW4gdGhlIHBsYXloZWFkIGFycml2ZXMgYXQgRVhBQ1RMWSB0aW1lIDAgKHJpZ2h0IG9uIHRvcCkgb2YgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuLCB3ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIHNvIHRoYXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgYWdhaW4gKG5leHQgdGltZSksIGl0J2xsIHRyaWdnZXIgdGhlIGNhbGxiYWNrLiBJZiBldmVudHMgYXJlIE5PVCBzdXBwcmVzc2VkLCBvYnZpb3VzbHkgdGhlIGNhbGxiYWNrIHdvdWxkIGJlIHRyaWdnZXJlZCBpbiB0aGlzIHJlbmRlci4gQmFzaWNhbGx5LCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUgZWl0aGVyIHdoZW4gdGhlIHBsYXloZWFkIEFSUklWRVMgb3IgTEVBVkVTIHRoaXMgZXhhY3Qgc3BvdCwgbm90IGJvdGguIEltYWdpbmUgZG9pbmcgYSB0aW1lbGluZS5zZWVrKDApIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgdGhhdCBzaXRzIGF0IDAuIFNpbmNlIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBvbiB0aGF0IHNlZWsoKSBieSBkZWZhdWx0LCBub3RoaW5nIHdpbGwgZmlyZSwgYnV0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIG9mZiBvZiB0aGF0IHBvc2l0aW9uLCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUuIFRoaXMgYmVoYXZpb3IgaXMgd2hhdCBwZW9wbGUgaW50dWl0aXZlbHkgZXhwZWN0LiBXZSBzZXQgdGhlIF9yYXdQcmV2VGltZSB0byBiZSBhIHByZWNpc2UgdGlueSBudW1iZXIgdG8gaW5kaWNhdGUgdGhpcyBzY2VuYXJpbyByYXRoZXIgdGhhbiB1c2luZyBhbm90aGVyIHByb3BlcnR5L3ZhcmlhYmxlIHdoaWNoIHdvdWxkIGluY3JlYXNlIG1lbW9yeSB1c2FnZS4gVGhpcyB0ZWNobmlxdWUgaXMgbGVzcyByZWFkYWJsZSwgYnV0IG1vcmUgZWZmaWNpZW50LlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXNlbGYuX2luaXR0ZWQgfHwgKHNlbGYuX3N0YXJ0QXQgJiYgc2VsZi5fc3RhcnRBdC5wcm9ncmVzcygpKSkgeyAvL2lmIHdlIHJlbmRlciB0aGUgdmVyeSBiZWdpbm5pbmcgKHRpbWUgPT0gMCkgb2YgYSBmcm9tVG8oKSwgd2UgbXVzdCBmb3JjZSB0aGUgcmVuZGVyIChub3JtYWwgdHdlZW5zIHdvdWxkbid0IG5lZWQgdG8gcmVuZGVyIGF0IGEgdGltZSBvZiAwIHdoZW4gdGhlIHByZXZUaW1lIHdhcyBhbHNvIDApLiBUaGlzIGlzIGFsc28gbWFuZGF0b3J5IHRvIG1ha2Ugc3VyZSBvdmVyd3JpdGluZyBraWNrcyBpbiBpbW1lZGlhdGVseS4gQWxzbywgd2UgY2hlY2sgcHJvZ3Jlc3MoKSBiZWNhdXNlIGlmIHN0YXJ0QXQgaGFzIGFscmVhZHkgcmVuZGVyZWQgYXQgaXRzIGVuZCwgd2Ugc2hvdWxkIGZvcmNlIGEgcmVuZGVyIGF0IGl0cyBiZWdpbm5pbmcuIE90aGVyd2lzZSwgaWYgeW91IHB1dCB0aGUgcGxheWhlYWQgZGlyZWN0bHkgb24gdG9wIG9mIHdoZXJlIGEgZnJvbVRvKHtpbW1lZGlhdGVSZW5kZXI6ZmFsc2V9KSBzdGFydHMsIGFuZCB0aGVuIG1vdmUgaXQgYmFja3dhcmRzLCB0aGUgZnJvbSgpIHdvbid0IHJldmVydCBpdHMgdmFsdWVzLlxuXHRcdFx0XHRcdGZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5fdG90YWxUaW1lID0gc2VsZi5fdGltZSA9IHRpbWU7XG5cblx0XHRcdFx0aWYgKHNlbGYuX2Vhc2VUeXBlKSB7XG5cdFx0XHRcdFx0dmFyIHIgPSB0aW1lIC8gZHVyYXRpb24sIHR5cGUgPSBzZWxmLl9lYXNlVHlwZSwgcG93ID0gc2VsZi5fZWFzZVBvd2VyO1xuXHRcdFx0XHRcdGlmICh0eXBlID09PSAxIHx8ICh0eXBlID09PSAzICYmIHIgPj0gMC41KSkge1xuXHRcdFx0XHRcdFx0ciA9IDEgLSByO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodHlwZSA9PT0gMykge1xuXHRcdFx0XHRcdFx0ciAqPSAyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocG93ID09PSAxKSB7XG5cdFx0XHRcdFx0XHRyICo9IHI7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwb3cgPT09IDIpIHtcblx0XHRcdFx0XHRcdHIgKj0gciAqIHI7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwb3cgPT09IDMpIHtcblx0XHRcdFx0XHRcdHIgKj0gciAqIHIgKiByO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocG93ID09PSA0KSB7XG5cdFx0XHRcdFx0XHRyICo9IHIgKiByICogciAqIHI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNlbGYucmF0aW8gPSAodHlwZSA9PT0gMSkgPyAxIC0gciA6ICh0eXBlID09PSAyKSA/IHIgOiAodGltZSAvIGR1cmF0aW9uIDwgMC41KSA/IHIgLyAyIDogMSAtIChyIC8gMik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2VsZi5yYXRpbyA9IHNlbGYuX2Vhc2UuZ2V0UmF0aW8odGltZSAvIGR1cmF0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2VsZi5fdGltZSA9PT0gcHJldlRpbWUgJiYgIWZvcmNlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gZWxzZSBpZiAoIXNlbGYuX2luaXR0ZWQpIHtcblx0XHRcdFx0c2VsZi5faW5pdCgpO1xuXHRcdFx0XHRpZiAoIXNlbGYuX2luaXR0ZWQgfHwgc2VsZi5fZ2MpIHsgLy9pbW1lZGlhdGVSZW5kZXIgdHdlZW5zIHR5cGljYWxseSB3b24ndCBpbml0aWFsaXplIHVudGlsIHRoZSBwbGF5aGVhZCBhZHZhbmNlcyAoX3RpbWUgaXMgZ3JlYXRlciB0aGFuIDApIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IG92ZXJ3cml0aW5nIG9jY3VycyBwcm9wZXJseS4gQWxzbywgaWYgYWxsIG9mIHRoZSB0d2VlbmluZyBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBvdmVyd3JpdHRlbiAod2hpY2ggd291bGQgY2F1c2UgX2djIHRvIGJlIHRydWUsIGFzIHNldCBpbiBfaW5pdCgpKSwgd2Ugc2hvdWxkbid0IGNvbnRpbnVlIG90aGVyd2lzZSBhbiBvblN0YXJ0IGNhbGxiYWNrIGNvdWxkIGJlIGNhbGxlZCBmb3IgZXhhbXBsZS5cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSBpZiAoIWZvcmNlICYmIHNlbGYuX2ZpcnN0UFQgJiYgKChzZWxmLnZhcnMubGF6eSAhPT0gZmFsc2UgJiYgc2VsZi5fZHVyYXRpb24pIHx8IChzZWxmLnZhcnMubGF6eSAmJiAhc2VsZi5fZHVyYXRpb24pKSkge1xuXHRcdFx0XHRcdHNlbGYuX3RpbWUgPSBzZWxmLl90b3RhbFRpbWUgPSBwcmV2VGltZTtcblx0XHRcdFx0XHRzZWxmLl9yYXdQcmV2VGltZSA9IHByZXZSYXdQcmV2VGltZTtcblx0XHRcdFx0XHRfbGF6eVR3ZWVucy5wdXNoKHNlbGYpO1xuXHRcdFx0XHRcdHNlbGYuX2xhenkgPSBbdGltZSwgc3VwcHJlc3NFdmVudHNdO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHQvL19lYXNlIGlzIGluaXRpYWxseSBzZXQgdG8gZGVmYXVsdEVhc2UsIHNvIG5vdyB0aGF0IGluaXQoKSBoYXMgcnVuLCBfZWFzZSBpcyBzZXQgcHJvcGVybHkgYW5kIHdlIG5lZWQgdG8gcmVjYWxjdWxhdGUgdGhlIHJhdGlvLiBPdmVyYWxsIHRoaXMgaXMgZmFzdGVyIHRoYW4gdXNpbmcgY29uZGl0aW9uYWwgbG9naWMgZWFybGllciBpbiB0aGUgbWV0aG9kIHRvIGF2b2lkIGhhdmluZyB0byBzZXQgcmF0aW8gdHdpY2UgYmVjYXVzZSB3ZSBvbmx5IGluaXQoKSBvbmNlIGJ1dCByZW5kZXJUaW1lKCkgZ2V0cyBjYWxsZWQgVkVSWSBmcmVxdWVudGx5LlxuXHRcdFx0XHRpZiAoc2VsZi5fdGltZSAmJiAhaXNDb21wbGV0ZSkge1xuXHRcdFx0XHRcdHNlbGYucmF0aW8gPSBzZWxmLl9lYXNlLmdldFJhdGlvKHNlbGYuX3RpbWUgLyBkdXJhdGlvbik7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNDb21wbGV0ZSAmJiBzZWxmLl9lYXNlLl9jYWxjRW5kKSB7XG5cdFx0XHRcdFx0c2VsZi5yYXRpbyA9IHNlbGYuX2Vhc2UuZ2V0UmF0aW8oKHNlbGYuX3RpbWUgPT09IDApID8gMCA6IDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2VsZi5fbGF6eSAhPT0gZmFsc2UpIHsgLy9pbiBjYXNlIGEgbGF6eSByZW5kZXIgaXMgcGVuZGluZywgd2Ugc2hvdWxkIGZsdXNoIGl0IGJlY2F1c2UgdGhlIG5ldyByZW5kZXIgaXMgb2NjdXJyaW5nIG5vdyAoaW1hZ2luZSBhIGxhenkgdHdlZW4gaW5zdGFudGlhdGluZyBhbmQgdGhlbiBpbW1lZGlhdGVseSB0aGUgdXNlciBjYWxscyB0d2Vlbi5zZWVrKHR3ZWVuLmR1cmF0aW9uKCkpLCBza2lwcGluZyB0byB0aGUgZW5kIC0gdGhlIGVuZCByZW5kZXIgd291bGQgYmUgZm9yY2VkLCBhbmQgdGhlbiBpZiB3ZSBkaWRuJ3QgZmx1c2ggdGhlIGxhenkgcmVuZGVyLCBpdCdkIGZpcmUgQUZURVIgdGhlIHNlZWsoKSwgcmVuZGVyaW5nIGl0IGF0IHRoZSB3cm9uZyB0aW1lLlxuXHRcdFx0XHRzZWxmLl9sYXp5ID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXNlbGYuX2FjdGl2ZSkgaWYgKCFzZWxmLl9wYXVzZWQgJiYgc2VsZi5fdGltZSAhPT0gcHJldlRpbWUgJiYgdGltZSA+PSAwKSB7XG5cdFx0XHRcdHNlbGYuX2FjdGl2ZSA9IHRydWU7ICAvL3NvIHRoYXQgaWYgdGhlIHVzZXIgcmVuZGVycyBhIHR3ZWVuIChhcyBvcHBvc2VkIHRvIHRoZSB0aW1lbGluZSByZW5kZXJpbmcgaXQpLCB0aGUgdGltZWxpbmUgaXMgZm9yY2VkIHRvIHJlLXJlbmRlciBhbmQgYWxpZ24gaXQgd2l0aCB0aGUgcHJvcGVyIHRpbWUvZnJhbWUgb24gdGhlIG5leHQgcmVuZGVyaW5nIGN5Y2xlLiBNYXliZSB0aGUgdHdlZW4gYWxyZWFkeSBmaW5pc2hlZCBidXQgdGhlIHVzZXIgbWFudWFsbHkgcmUtcmVuZGVycyBpdCBhcyBoYWxmd2F5IGRvbmUuXG5cdFx0XHR9XG5cdFx0XHRpZiAocHJldlRpbWUgPT09IDApIHtcblx0XHRcdFx0aWYgKHNlbGYuX3N0YXJ0QXQpIHtcblx0XHRcdFx0XHRpZiAodGltZSA+PSAwKSB7XG5cdFx0XHRcdFx0XHRzZWxmLl9zdGFydEF0LnJlbmRlcih0aW1lLCB0cnVlLCBmb3JjZSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICghY2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrID0gXCJfZHVtbXlHU1wiOyAvL2lmIG5vIGNhbGxiYWNrIGlzIGRlZmluZWQsIHVzZSBhIGR1bW15IHZhbHVlIGp1c3Qgc28gdGhhdCB0aGUgY29uZGl0aW9uIGF0IHRoZSBlbmQgZXZhbHVhdGVzIGFzIHRydWUgYmVjYXVzZSBfc3RhcnRBdCBzaG91bGQgcmVuZGVyIEFGVEVSIHRoZSBub3JtYWwgcmVuZGVyIGxvb3Agd2hlbiB0aGUgdGltZSBpcyBuZWdhdGl2ZS4gV2UgY291bGQgaGFuZGxlIHRoaXMgaW4gYSBtb3JlIGludHVpdGl2ZSB3YXksIG9mIGNvdXJzZSwgYnV0IHRoZSByZW5kZXIgbG9vcCBpcyB0aGUgTU9TVCBpbXBvcnRhbnQgdGhpbmcgdG8gb3B0aW1pemUsIHNvIHRoaXMgdGVjaG5pcXVlIGFsbG93cyB1cyB0byBhdm9pZCBhZGRpbmcgZXh0cmEgY29uZGl0aW9uYWwgbG9naWMgaW4gYSBoaWdoLWZyZXF1ZW5jeSBhcmVhLlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc2VsZi52YXJzLm9uU3RhcnQpIGlmIChzZWxmLl90aW1lICE9PSAwIHx8IGR1cmF0aW9uID09PSAwKSBpZiAoIXN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRcdFx0c2VsZi5fY2FsbGJhY2soXCJvblN0YXJ0XCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRwdCA9IHNlbGYuX2ZpcnN0UFQ7XG5cdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0aWYgKHB0LmYpIHtcblx0XHRcdFx0XHRwdC50W3B0LnBdKHB0LmMgKiBzZWxmLnJhdGlvICsgcHQucyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHQudFtwdC5wXSA9IHB0LmMgKiBzZWxmLnJhdGlvICsgcHQucztcblx0XHRcdFx0fVxuXHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2VsZi5fb25VcGRhdGUpIHtcblx0XHRcdFx0aWYgKHRpbWUgPCAwKSBpZiAoc2VsZi5fc3RhcnRBdCAmJiB0aW1lICE9PSAtMC4wMDAxKSB7IC8vaWYgdGhlIHR3ZWVuIGlzIHBvc2l0aW9uZWQgYXQgdGhlIFZFUlkgYmVnaW5uaW5nIChfc3RhcnRUaW1lIDApIG9mIGl0cyBwYXJlbnQgdGltZWxpbmUsIGl0J3MgaWxsZWdhbCBmb3IgdGhlIHBsYXloZWFkIHRvIGdvIGJhY2sgZnVydGhlciwgc28gd2Ugc2hvdWxkIG5vdCByZW5kZXIgdGhlIHJlY29yZGVkIHN0YXJ0QXQgdmFsdWVzLlxuXHRcdFx0XHRcdHNlbGYuX3N0YXJ0QXQucmVuZGVyKHRpbWUsIHRydWUsIGZvcmNlKTsgLy9ub3RlOiBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgd2UgdHVjayB0aGlzIGNvbmRpdGlvbmFsIGxvZ2ljIGluc2lkZSBsZXNzIHRyYXZlbGVkIGFyZWFzIChtb3N0IHR3ZWVucyBkb24ndCBoYXZlIGFuIG9uVXBkYXRlKS4gV2UnZCBqdXN0IGhhdmUgaXQgYXQgdGhlIGVuZCBiZWZvcmUgdGhlIG9uQ29tcGxldGUsIGJ1dCB0aGUgdmFsdWVzIHNob3VsZCBiZSB1cGRhdGVkIGJlZm9yZSBhbnkgb25VcGRhdGUgaXMgY2FsbGVkLCBzbyB3ZSBBTFNPIHB1dCBpdCBoZXJlIGFuZCB0aGVuIGlmIGl0J3Mgbm90IGNhbGxlZCwgd2UgZG8gc28gbGF0ZXIgbmVhciB0aGUgb25Db21wbGV0ZS5cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXN1cHByZXNzRXZlbnRzKSBpZiAoc2VsZi5fdGltZSAhPT0gcHJldlRpbWUgfHwgaXNDb21wbGV0ZSB8fCBmb3JjZSkge1xuXHRcdFx0XHRcdHNlbGYuX2NhbGxiYWNrKFwib25VcGRhdGVcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjYWxsYmFjaykgaWYgKCFzZWxmLl9nYyB8fCBmb3JjZSkgeyAvL2NoZWNrIF9nYyBiZWNhdXNlIHRoZXJlJ3MgYSBjaGFuY2UgdGhhdCBraWxsKCkgY291bGQgYmUgY2FsbGVkIGluIGFuIG9uVXBkYXRlXG5cdFx0XHRcdGlmICh0aW1lIDwgMCAmJiBzZWxmLl9zdGFydEF0ICYmICFzZWxmLl9vblVwZGF0ZSAmJiB0aW1lICE9PSAtMC4wMDAxKSB7IC8vLTAuMDAwMSBpcyBhIHNwZWNpYWwgdmFsdWUgdGhhdCB3ZSB1c2Ugd2hlbiBsb29waW5nIGJhY2sgdG8gdGhlIGJlZ2lubmluZyBvZiBhIHJlcGVhdGVkIFRpbWVsaW5lTWF4LCBpbiB3aGljaCBjYXNlIHdlIHNob3VsZG4ndCByZW5kZXIgdGhlIF9zdGFydEF0IHZhbHVlcy5cblx0XHRcdFx0XHRzZWxmLl9zdGFydEF0LnJlbmRlcih0aW1lLCB0cnVlLCBmb3JjZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGlzQ29tcGxldGUpIHtcblx0XHRcdFx0XHRpZiAoc2VsZi5fdGltZWxpbmUuYXV0b1JlbW92ZUNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0XHRzZWxmLl9lbmFibGVkKGZhbHNlLCBmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNlbGYuX2FjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghc3VwcHJlc3NFdmVudHMgJiYgc2VsZi52YXJzW2NhbGxiYWNrXSkge1xuXHRcdFx0XHRcdHNlbGYuX2NhbGxiYWNrKGNhbGxiYWNrKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZHVyYXRpb24gPT09IDAgJiYgc2VsZi5fcmF3UHJldlRpbWUgPT09IF90aW55TnVtICYmIHJhd1ByZXZUaW1lICE9PSBfdGlueU51bSkgeyAvL3RoZSBvbkNvbXBsZXRlIG9yIG9uUmV2ZXJzZUNvbXBsZXRlIGNvdWxkIHRyaWdnZXIgbW92ZW1lbnQgb2YgdGhlIHBsYXloZWFkIGFuZCBmb3IgemVyby1kdXJhdGlvbiB0d2VlbnMgKHdoaWNoIG11c3QgZGlzY2VybiBkaXJlY3Rpb24pIHRoYXQgbGFuZCBkaXJlY3RseSBiYWNrIG9uIHRoZWlyIHN0YXJ0IHRpbWUsIHdlIGRvbid0IHdhbnQgdG8gZmlyZSBhZ2FpbiBvbiB0aGUgbmV4dCByZW5kZXIuIFRoaW5rIG9mIHNldmVyYWwgYWRkUGF1c2UoKSdzIGluIGEgdGltZWxpbmUgdGhhdCBmb3JjZXMgdGhlIHBsYXloZWFkIHRvIGEgY2VydGFpbiBzcG90LCBidXQgd2hhdCBpZiBpdCdzIGFscmVhZHkgcGF1c2VkIGFuZCBhbm90aGVyIHR3ZWVuIGlzIHR3ZWVuaW5nIHRoZSBcInRpbWVcIiBvZiB0aGUgdGltZWxpbmU/IEVhY2ggdGltZSBpdCBtb3ZlcyBbZm9yd2FyZF0gcGFzdCB0aGF0IHNwb3QsIGl0IHdvdWxkIG1vdmUgYmFjaywgYW5kIHNpbmNlIHN1cHByZXNzRXZlbnRzIGlzIHRydWUsIGl0J2QgcmVzZXQgX3Jhd1ByZXZUaW1lIHRvIF90aW55TnVtIHNvIHRoYXQgd2hlbiBpdCBiZWdpbnMgYWdhaW4sIHRoZSBjYWxsYmFjayB3b3VsZCBmaXJlIChzbyB1bHRpbWF0ZWx5IGl0IGNvdWxkIGJvdW5jZSBiYWNrIGFuZCBmb3J0aCBkdXJpbmcgdGhhdCB0d2VlbikuIEFnYWluLCB0aGlzIGlzIGEgdmVyeSB1bmNvbW1vbiBzY2VuYXJpbywgYnV0IHBvc3NpYmxlIG5vbmV0aGVsZXNzLlxuXHRcdFx0XHRcdHNlbGYuX3Jhd1ByZXZUaW1lID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRwLl9raWxsID0gZnVuY3Rpb24odmFycywgdGFyZ2V0LCBvdmVyd3JpdGluZ1R3ZWVuKSB7XG5cdFx0XHRpZiAodmFycyA9PT0gXCJhbGxcIikge1xuXHRcdFx0XHR2YXJzID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdGlmICh2YXJzID09IG51bGwpIGlmICh0YXJnZXQgPT0gbnVsbCB8fCB0YXJnZXQgPT09IHRoaXMudGFyZ2V0KSB7XG5cdFx0XHRcdHRoaXMuX2xhenkgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdHRhcmdldCA9ICh0eXBlb2YodGFyZ2V0KSAhPT0gXCJzdHJpbmdcIikgPyAodGFyZ2V0IHx8IHRoaXMuX3RhcmdldHMgfHwgdGhpcy50YXJnZXQpIDogVHdlZW5MaXRlLnNlbGVjdG9yKHRhcmdldCkgfHwgdGFyZ2V0O1xuXHRcdFx0dmFyIHNpbXVsdGFuZW91c092ZXJ3cml0ZSA9IChvdmVyd3JpdGluZ1R3ZWVuICYmIHRoaXMuX3RpbWUgJiYgb3ZlcndyaXRpbmdUd2Vlbi5fc3RhcnRUaW1lID09PSB0aGlzLl9zdGFydFRpbWUgJiYgdGhpcy5fdGltZWxpbmUgPT09IG92ZXJ3cml0aW5nVHdlZW4uX3RpbWVsaW5lKSxcblx0XHRcdFx0Zmlyc3RQVCA9IHRoaXMuX2ZpcnN0UFQsXG5cdFx0XHRcdGksIG92ZXJ3cml0dGVuUHJvcHMsIHAsIHB0LCBwcm9wTG9va3VwLCBjaGFuZ2VkLCBraWxsUHJvcHMsIHJlY29yZCwga2lsbGVkO1xuXHRcdFx0aWYgKChfaXNBcnJheSh0YXJnZXQpIHx8IF9pc1NlbGVjdG9yKHRhcmdldCkpICYmIHR5cGVvZih0YXJnZXRbMF0pICE9PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdGkgPSB0YXJnZXQubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5fa2lsbCh2YXJzLCB0YXJnZXRbaV0sIG92ZXJ3cml0aW5nVHdlZW4pKSB7XG5cdFx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0aGlzLl90YXJnZXRzKSB7XG5cdFx0XHRcdFx0aSA9IHRoaXMuX3RhcmdldHMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0aWYgKHRhcmdldCA9PT0gdGhpcy5fdGFyZ2V0c1tpXSkge1xuXHRcdFx0XHRcdFx0XHRwcm9wTG9va3VwID0gdGhpcy5fcHJvcExvb2t1cFtpXSB8fCB7fTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fb3ZlcndyaXR0ZW5Qcm9wcyA9IHRoaXMuX292ZXJ3cml0dGVuUHJvcHMgfHwgW107XG5cdFx0XHRcdFx0XHRcdG92ZXJ3cml0dGVuUHJvcHMgPSB0aGlzLl9vdmVyd3JpdHRlblByb3BzW2ldID0gdmFycyA/IHRoaXMuX292ZXJ3cml0dGVuUHJvcHNbaV0gfHwge30gOiBcImFsbFwiO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAodGFyZ2V0ICE9PSB0aGlzLnRhcmdldCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwcm9wTG9va3VwID0gdGhpcy5fcHJvcExvb2t1cDtcblx0XHRcdFx0XHRvdmVyd3JpdHRlblByb3BzID0gdGhpcy5fb3ZlcndyaXR0ZW5Qcm9wcyA9IHZhcnMgPyB0aGlzLl9vdmVyd3JpdHRlblByb3BzIHx8IHt9IDogXCJhbGxcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChwcm9wTG9va3VwKSB7XG5cdFx0XHRcdFx0a2lsbFByb3BzID0gdmFycyB8fCBwcm9wTG9va3VwO1xuXHRcdFx0XHRcdHJlY29yZCA9ICh2YXJzICE9PSBvdmVyd3JpdHRlblByb3BzICYmIG92ZXJ3cml0dGVuUHJvcHMgIT09IFwiYWxsXCIgJiYgdmFycyAhPT0gcHJvcExvb2t1cCAmJiAodHlwZW9mKHZhcnMpICE9PSBcIm9iamVjdFwiIHx8ICF2YXJzLl90ZW1wS2lsbCkpOyAvL190ZW1wS2lsbCBpcyBhIHN1cGVyLXNlY3JldCB3YXkgdG8gZGVsZXRlIGEgcGFydGljdWxhciB0d2VlbmluZyBwcm9wZXJ0eSBidXQgTk9UIGhhdmUgaXQgcmVtZW1iZXJlZCBhcyBhbiBvZmZpY2lhbCBvdmVyd3JpdHRlbiBwcm9wZXJ0eSAobGlrZSBpbiBCZXppZXJQbHVnaW4pXG5cdFx0XHRcdFx0aWYgKG92ZXJ3cml0aW5nVHdlZW4gJiYgKFR3ZWVuTGl0ZS5vbk92ZXJ3cml0ZSB8fCB0aGlzLnZhcnMub25PdmVyd3JpdGUpKSB7XG5cdFx0XHRcdFx0XHRmb3IgKHAgaW4ga2lsbFByb3BzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChwcm9wTG9va3VwW3BdKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFraWxsZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGtpbGxlZCA9IFtdO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRraWxsZWQucHVzaChwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKChraWxsZWQgfHwgIXZhcnMpICYmICFfb25PdmVyd3JpdGUodGhpcywgb3ZlcndyaXRpbmdUd2VlbiwgdGFyZ2V0LCBraWxsZWQpKSB7IC8vaWYgdGhlIG9uT3ZlcndyaXRlIHJldHVybmVkIGZhbHNlLCB0aGF0IG1lYW5zIHRoZSB1c2VyIHdhbnRzIHRvIG92ZXJyaWRlIHRoZSBvdmVyd3JpdGluZyAoY2FuY2VsIGl0KS5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGZvciAocCBpbiBraWxsUHJvcHMpIHtcblx0XHRcdFx0XHRcdGlmICgocHQgPSBwcm9wTG9va3VwW3BdKSkge1xuXHRcdFx0XHRcdFx0XHRpZiAoc2ltdWx0YW5lb3VzT3ZlcndyaXRlKSB7IC8vaWYgYW5vdGhlciB0d2VlbiBvdmVyd3JpdGVzIHRoaXMgb25lIGFuZCB0aGV5IGJvdGggc3RhcnQgYXQgZXhhY3RseSB0aGUgc2FtZSB0aW1lLCB5ZXQgdGhpcyB0d2VlbiBoYXMgYWxyZWFkeSByZW5kZXJlZCBvbmNlIChmb3IgZXhhbXBsZSwgYXQgMC4wMDEpIGJlY2F1c2UgaXQncyBmaXJzdCBpbiB0aGUgcXVldWUsIHdlIHNob3VsZCByZXZlcnQgdGhlIHZhbHVlcyB0byB3aGVyZSB0aGV5IHdlcmUgYXQgMCBzbyB0aGF0IHRoZSBzdGFydGluZyB2YWx1ZXMgYXJlbid0IGNvbnRhbWluYXRlZCBvbiB0aGUgb3ZlcndyaXRpbmcgdHdlZW4uXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHB0LmYpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHB0LnRbcHQucF0ocHQucyk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHB0LnRbcHQucF0gPSBwdC5zO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAocHQucGcgJiYgcHQudC5fa2lsbChraWxsUHJvcHMpKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7IC8vc29tZSBwbHVnaW5zIG5lZWQgdG8gYmUgbm90aWZpZWQgc28gdGhleSBjYW4gcGVyZm9ybSBjbGVhbnVwIHRhc2tzIGZpcnN0XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFwdC5wZyB8fCBwdC50Ll9vdmVyd3JpdGVQcm9wcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocHQuX3ByZXYpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHB0Ll9wcmV2Ll9uZXh0ID0gcHQuX25leHQ7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChwdCA9PT0gdGhpcy5fZmlyc3RQVCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5fZmlyc3RQVCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRpZiAocHQuX25leHQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHB0Ll9uZXh0Ll9wcmV2ID0gcHQuX3ByZXY7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHB0Ll9uZXh0ID0gcHQuX3ByZXYgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBwcm9wTG9va3VwW3BdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHJlY29yZCkge1xuXHRcdFx0XHRcdFx0XHRvdmVyd3JpdHRlblByb3BzW3BdID0gMTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCF0aGlzLl9maXJzdFBUICYmIHRoaXMuX2luaXR0ZWQgJiYgZmlyc3RQVCkgeyAvL2lmIGFsbCB0d2VlbmluZyBwcm9wZXJ0aWVzIGFyZSBraWxsZWQsIGtpbGwgdGhlIHR3ZWVuLiBXaXRob3V0IHRoaXMgbGluZSwgaWYgdGhlcmUncyBhIHR3ZWVuIHdpdGggbXVsdGlwbGUgdGFyZ2V0cyBhbmQgdGhlbiB5b3Uga2lsbFR3ZWVuc09mKCkgZWFjaCB0YXJnZXQgaW5kaXZpZHVhbGx5LCB0aGUgdHdlZW4gd291bGQgdGVjaG5pY2FsbHkgc3RpbGwgcmVtYWluIGFjdGl2ZSBhbmQgZmlyZSBpdHMgb25Db21wbGV0ZSBldmVuIHRob3VnaCB0aGVyZSBhcmVuJ3QgYW55IG1vcmUgcHJvcGVydGllcyB0d2VlbmluZy5cblx0XHRcdFx0XHRcdHRoaXMuX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjaGFuZ2VkO1xuXHRcdH07XG5cblx0XHRwLmludmFsaWRhdGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICh0aGlzLl9ub3RpZnlQbHVnaW5zT2ZFbmFibGVkKSB7XG5cdFx0XHRcdFR3ZWVuTGl0ZS5fb25QbHVnaW5FdmVudChcIl9vbkRpc2FibGVcIiwgdGhpcyk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgdCA9IHRoaXMuX3RpbWU7XG5cdFx0XHR0aGlzLl9maXJzdFBUID0gdGhpcy5fb3ZlcndyaXR0ZW5Qcm9wcyA9IHRoaXMuX3N0YXJ0QXQgPSB0aGlzLl9vblVwZGF0ZSA9IG51bGw7XG5cdFx0XHR0aGlzLl9ub3RpZnlQbHVnaW5zT2ZFbmFibGVkID0gdGhpcy5fYWN0aXZlID0gdGhpcy5fbGF6eSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5fcHJvcExvb2t1cCA9ICh0aGlzLl90YXJnZXRzKSA/IHt9IDogW107XG5cdFx0XHRBbmltYXRpb24ucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzKTtcblx0XHRcdGlmICh0aGlzLnZhcnMuaW1tZWRpYXRlUmVuZGVyKSB7XG5cdFx0XHRcdHRoaXMuX3RpbWUgPSAtX3RpbnlOdW07IC8vZm9yY2VzIGEgcmVuZGVyIHdpdGhvdXQgaGF2aW5nIHRvIHNldCB0aGUgcmVuZGVyKCkgXCJmb3JjZVwiIHBhcmFtZXRlciB0byB0cnVlIGJlY2F1c2Ugd2Ugd2FudCB0byBhbGxvdyBsYXp5aW5nIGJ5IGRlZmF1bHQgKHVzaW5nIHRoZSBcImZvcmNlXCIgcGFyYW1ldGVyIGFsd2F5cyBmb3JjZXMgYW4gaW1tZWRpYXRlIGZ1bGwgcmVuZGVyKVxuXHRcdFx0XHR0aGlzLnJlbmRlcih0LCBmYWxzZSwgdGhpcy52YXJzLmxhenkgIT09IGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLl9lbmFibGVkID0gZnVuY3Rpb24oZW5hYmxlZCwgaWdub3JlVGltZWxpbmUpIHtcblx0XHRcdGlmICghX3RpY2tlckFjdGl2ZSkge1xuXHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdH1cblx0XHRcdGlmIChlbmFibGVkICYmIHRoaXMuX2djKSB7XG5cdFx0XHRcdHZhciB0YXJnZXRzID0gdGhpcy5fdGFyZ2V0cyxcblx0XHRcdFx0XHRpO1xuXHRcdFx0XHRpZiAodGFyZ2V0cykge1xuXHRcdFx0XHRcdGkgPSB0YXJnZXRzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3NpYmxpbmdzW2ldID0gX3JlZ2lzdGVyKHRhcmdldHNbaV0sIHRoaXMsIHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9zaWJsaW5ncyA9IF9yZWdpc3Rlcih0aGlzLnRhcmdldCwgdGhpcywgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdEFuaW1hdGlvbi5wcm90b3R5cGUuX2VuYWJsZWQuY2FsbCh0aGlzLCBlbmFibGVkLCBpZ25vcmVUaW1lbGluZSk7XG5cdFx0XHRpZiAodGhpcy5fbm90aWZ5UGx1Z2luc09mRW5hYmxlZCkgaWYgKHRoaXMuX2ZpcnN0UFQpIHtcblx0XHRcdFx0cmV0dXJuIFR3ZWVuTGl0ZS5fb25QbHVnaW5FdmVudCgoZW5hYmxlZCA/IFwiX29uRW5hYmxlXCIgOiBcIl9vbkRpc2FibGVcIiksIHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cblxuLy8tLS0tVHdlZW5MaXRlIHN0YXRpYyBtZXRob2RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRUd2VlbkxpdGUudG8gPSBmdW5jdGlvbih0YXJnZXQsIGR1cmF0aW9uLCB2YXJzKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFR3ZWVuTGl0ZSh0YXJnZXQsIGR1cmF0aW9uLCB2YXJzKTtcblx0XHR9O1xuXG5cdFx0VHdlZW5MaXRlLmZyb20gPSBmdW5jdGlvbih0YXJnZXQsIGR1cmF0aW9uLCB2YXJzKSB7XG5cdFx0XHR2YXJzLnJ1bkJhY2t3YXJkcyA9IHRydWU7XG5cdFx0XHR2YXJzLmltbWVkaWF0ZVJlbmRlciA9ICh2YXJzLmltbWVkaWF0ZVJlbmRlciAhPSBmYWxzZSk7XG5cdFx0XHRyZXR1cm4gbmV3IFR3ZWVuTGl0ZSh0YXJnZXQsIGR1cmF0aW9uLCB2YXJzKTtcblx0XHR9O1xuXG5cdFx0VHdlZW5MaXRlLmZyb21UbyA9IGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24sIGZyb21WYXJzLCB0b1ZhcnMpIHtcblx0XHRcdHRvVmFycy5zdGFydEF0ID0gZnJvbVZhcnM7XG5cdFx0XHR0b1ZhcnMuaW1tZWRpYXRlUmVuZGVyID0gKHRvVmFycy5pbW1lZGlhdGVSZW5kZXIgIT0gZmFsc2UgJiYgZnJvbVZhcnMuaW1tZWRpYXRlUmVuZGVyICE9IGZhbHNlKTtcblx0XHRcdHJldHVybiBuZXcgVHdlZW5MaXRlKHRhcmdldCwgZHVyYXRpb24sIHRvVmFycyk7XG5cdFx0fTtcblxuXHRcdFR3ZWVuTGl0ZS5kZWxheWVkQ2FsbCA9IGZ1bmN0aW9uKGRlbGF5LCBjYWxsYmFjaywgcGFyYW1zLCBzY29wZSwgdXNlRnJhbWVzKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFR3ZWVuTGl0ZShjYWxsYmFjaywgMCwge2RlbGF5OmRlbGF5LCBvbkNvbXBsZXRlOmNhbGxiYWNrLCBvbkNvbXBsZXRlUGFyYW1zOnBhcmFtcywgY2FsbGJhY2tTY29wZTpzY29wZSwgb25SZXZlcnNlQ29tcGxldGU6Y2FsbGJhY2ssIG9uUmV2ZXJzZUNvbXBsZXRlUGFyYW1zOnBhcmFtcywgaW1tZWRpYXRlUmVuZGVyOmZhbHNlLCBsYXp5OmZhbHNlLCB1c2VGcmFtZXM6dXNlRnJhbWVzLCBvdmVyd3JpdGU6MH0pO1xuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUuc2V0ID0gZnVuY3Rpb24odGFyZ2V0LCB2YXJzKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFR3ZWVuTGl0ZSh0YXJnZXQsIDAsIHZhcnMpO1xuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUuZ2V0VHdlZW5zT2YgPSBmdW5jdGlvbih0YXJnZXQsIG9ubHlBY3RpdmUpIHtcblx0XHRcdGlmICh0YXJnZXQgPT0gbnVsbCkgeyByZXR1cm4gW107IH1cblx0XHRcdHRhcmdldCA9ICh0eXBlb2YodGFyZ2V0KSAhPT0gXCJzdHJpbmdcIikgPyB0YXJnZXQgOiBUd2VlbkxpdGUuc2VsZWN0b3IodGFyZ2V0KSB8fCB0YXJnZXQ7XG5cdFx0XHR2YXIgaSwgYSwgaiwgdDtcblx0XHRcdGlmICgoX2lzQXJyYXkodGFyZ2V0KSB8fCBfaXNTZWxlY3Rvcih0YXJnZXQpKSAmJiB0eXBlb2YodGFyZ2V0WzBdKSAhPT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRpID0gdGFyZ2V0Lmxlbmd0aDtcblx0XHRcdFx0YSA9IFtdO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRhID0gYS5jb25jYXQoVHdlZW5MaXRlLmdldFR3ZWVuc09mKHRhcmdldFtpXSwgb25seUFjdGl2ZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGkgPSBhLmxlbmd0aDtcblx0XHRcdFx0Ly9ub3cgZ2V0IHJpZCBvZiBhbnkgZHVwbGljYXRlcyAodHdlZW5zIG9mIGFycmF5cyBvZiBvYmplY3RzIGNvdWxkIGNhdXNlIGR1cGxpY2F0ZXMpXG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdHQgPSBhW2ldO1xuXHRcdFx0XHRcdGogPSBpO1xuXHRcdFx0XHRcdHdoaWxlICgtLWogPiAtMSkge1xuXHRcdFx0XHRcdFx0aWYgKHQgPT09IGFbal0pIHtcblx0XHRcdFx0XHRcdFx0YS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRhcmdldC5fZ3NUd2VlbklEKSB7XG5cdFx0XHRcdGEgPSBfcmVnaXN0ZXIodGFyZ2V0KS5jb25jYXQoKTtcblx0XHRcdFx0aSA9IGEubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRpZiAoYVtpXS5fZ2MgfHwgKG9ubHlBY3RpdmUgJiYgIWFbaV0uaXNBY3RpdmUoKSkpIHtcblx0XHRcdFx0XHRcdGEuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGEgfHwgW107XG5cdFx0fTtcblxuXHRcdFR3ZWVuTGl0ZS5raWxsVHdlZW5zT2YgPSBUd2VlbkxpdGUua2lsbERlbGF5ZWRDYWxsc1RvID0gZnVuY3Rpb24odGFyZ2V0LCBvbmx5QWN0aXZlLCB2YXJzKSB7XG5cdFx0XHRpZiAodHlwZW9mKG9ubHlBY3RpdmUpID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRcdHZhcnMgPSBvbmx5QWN0aXZlOyAvL2ZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSAoYmVmb3JlIFwib25seUFjdGl2ZVwiIHBhcmFtZXRlciB3YXMgaW5zZXJ0ZWQpXG5cdFx0XHRcdG9ubHlBY3RpdmUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBhID0gVHdlZW5MaXRlLmdldFR3ZWVuc09mKHRhcmdldCwgb25seUFjdGl2ZSksXG5cdFx0XHRcdGkgPSBhLmxlbmd0aDtcblx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRhW2ldLl9raWxsKHZhcnMsIHRhcmdldCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUd2VlblBsdWdpbiAgIChjb3VsZCBlYXNpbHkgYmUgc3BsaXQgb3V0IGFzIGEgc2VwYXJhdGUgZmlsZS9jbGFzcywgYnV0IGluY2x1ZGVkIGZvciBlYXNlIG9mIHVzZSAoc28gdGhhdCBwZW9wbGUgZG9uJ3QgbmVlZCB0byBpbmNsdWRlIGFub3RoZXIgc2NyaXB0IGNhbGwgYmVmb3JlIGxvYWRpbmcgcGx1Z2lucyB3aGljaCBpcyBlYXN5IHRvIGZvcmdldClcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXHRcdHZhciBUd2VlblBsdWdpbiA9IF9jbGFzcyhcInBsdWdpbnMuVHdlZW5QbHVnaW5cIiwgZnVuY3Rpb24ocHJvcHMsIHByaW9yaXR5KSB7XG5cdFx0XHRcdFx0dGhpcy5fb3ZlcndyaXRlUHJvcHMgPSAocHJvcHMgfHwgXCJcIikuc3BsaXQoXCIsXCIpO1xuXHRcdFx0XHRcdHRoaXMuX3Byb3BOYW1lID0gdGhpcy5fb3ZlcndyaXRlUHJvcHNbMF07XG5cdFx0XHRcdFx0dGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdFx0XHRcdHRoaXMuX3N1cGVyID0gVHdlZW5QbHVnaW4ucHJvdG90eXBlO1xuXHRcdFx0XHR9LCB0cnVlKTtcblxuXHRcdHAgPSBUd2VlblBsdWdpbi5wcm90b3R5cGU7XG5cdFx0VHdlZW5QbHVnaW4udmVyc2lvbiA9IFwiMS4xOS4wXCI7XG5cdFx0VHdlZW5QbHVnaW4uQVBJID0gMjtcblx0XHRwLl9maXJzdFBUID0gbnVsbDtcblx0XHRwLl9hZGRUd2VlbiA9IF9hZGRQcm9wVHdlZW47XG5cdFx0cC5zZXRSYXRpbyA9IF9zZXRSYXRpbztcblxuXHRcdHAuX2tpbGwgPSBmdW5jdGlvbihsb29rdXApIHtcblx0XHRcdHZhciBhID0gdGhpcy5fb3ZlcndyaXRlUHJvcHMsXG5cdFx0XHRcdHB0ID0gdGhpcy5fZmlyc3RQVCxcblx0XHRcdFx0aTtcblx0XHRcdGlmIChsb29rdXBbdGhpcy5fcHJvcE5hbWVdICE9IG51bGwpIHtcblx0XHRcdFx0dGhpcy5fb3ZlcndyaXRlUHJvcHMgPSBbXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGkgPSBhLmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKGxvb2t1cFthW2ldXSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRhLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHRpZiAobG9va3VwW3B0Lm5dICE9IG51bGwpIHtcblx0XHRcdFx0XHRpZiAocHQuX25leHQpIHtcblx0XHRcdFx0XHRcdHB0Ll9uZXh0Ll9wcmV2ID0gcHQuX3ByZXY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwdC5fcHJldikge1xuXHRcdFx0XHRcdFx0cHQuX3ByZXYuX25leHQgPSBwdC5fbmV4dDtcblx0XHRcdFx0XHRcdHB0Ll9wcmV2ID0gbnVsbDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX2ZpcnN0UFQgPT09IHB0KSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9maXJzdFBUID0gcHQuX25leHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHB0ID0gcHQuX25leHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblxuXHRcdHAuX21vZCA9IHAuX3JvdW5kUHJvcHMgPSBmdW5jdGlvbihsb29rdXApIHtcblx0XHRcdHZhciBwdCA9IHRoaXMuX2ZpcnN0UFQsXG5cdFx0XHRcdHZhbDtcblx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHR2YWwgPSBsb29rdXBbdGhpcy5fcHJvcE5hbWVdIHx8IChwdC5uICE9IG51bGwgJiYgbG9va3VwWyBwdC5uLnNwbGl0KHRoaXMuX3Byb3BOYW1lICsgXCJfXCIpLmpvaW4oXCJcIikgXSk7XG5cdFx0XHRcdGlmICh2YWwgJiYgdHlwZW9mKHZhbCkgPT09IFwiZnVuY3Rpb25cIikgeyAvL3NvbWUgcHJvcGVydGllcyB0aGF0IGFyZSB2ZXJ5IHBsdWdpbi1zcGVjaWZpYyBhZGQgYSBwcmVmaXggbmFtZWQgYWZ0ZXIgdGhlIF9wcm9wTmFtZSBwbHVzIGFuIHVuZGVyc2NvcmUsIHNvIHdlIG5lZWQgdG8gaWdub3JlIHRoYXQgZXh0cmEgc3R1ZmYgaGVyZS5cblx0XHRcdFx0XHRpZiAocHQuZiA9PT0gMikge1xuXHRcdFx0XHRcdFx0cHQudC5fYXBwbHlQVC5tID0gdmFsO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwdC5tID0gdmFsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUuX29uUGx1Z2luRXZlbnQgPSBmdW5jdGlvbih0eXBlLCB0d2Vlbikge1xuXHRcdFx0dmFyIHB0ID0gdHdlZW4uX2ZpcnN0UFQsXG5cdFx0XHRcdGNoYW5nZWQsIHB0MiwgZmlyc3QsIGxhc3QsIG5leHQ7XG5cdFx0XHRpZiAodHlwZSA9PT0gXCJfb25Jbml0QWxsUHJvcHNcIikge1xuXHRcdFx0XHQvL3NvcnRzIHRoZSBQcm9wVHdlZW4gbGlua2VkIGxpc3QgaW4gb3JkZXIgb2YgcHJpb3JpdHkgYmVjYXVzZSBzb21lIHBsdWdpbnMgbmVlZCB0byByZW5kZXIgZWFybGllci9sYXRlciB0aGFuIG90aGVycywgbGlrZSBNb3Rpb25CbHVyUGx1Z2luIGFwcGxpZXMgaXRzIGVmZmVjdHMgYWZ0ZXIgYWxsIHgveS9hbHBoYSB0d2VlbnMgaGF2ZSByZW5kZXJlZCBvbiBlYWNoIGZyYW1lLlxuXHRcdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0XHRuZXh0ID0gcHQuX25leHQ7XG5cdFx0XHRcdFx0cHQyID0gZmlyc3Q7XG5cdFx0XHRcdFx0d2hpbGUgKHB0MiAmJiBwdDIucHIgPiBwdC5wcikge1xuXHRcdFx0XHRcdFx0cHQyID0gcHQyLl9uZXh0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoKHB0Ll9wcmV2ID0gcHQyID8gcHQyLl9wcmV2IDogbGFzdCkpIHtcblx0XHRcdFx0XHRcdHB0Ll9wcmV2Ll9uZXh0ID0gcHQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGZpcnN0ID0gcHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICgocHQuX25leHQgPSBwdDIpKSB7XG5cdFx0XHRcdFx0XHRwdDIuX3ByZXYgPSBwdDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bGFzdCA9IHB0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwdCA9IG5leHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHQgPSB0d2Vlbi5fZmlyc3RQVCA9IGZpcnN0O1xuXHRcdFx0fVxuXHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdGlmIChwdC5wZykgaWYgKHR5cGVvZihwdC50W3R5cGVdKSA9PT0gXCJmdW5jdGlvblwiKSBpZiAocHQudFt0eXBlXSgpKSB7XG5cdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHQgPSBwdC5fbmV4dDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjaGFuZ2VkO1xuXHRcdH07XG5cblx0XHRUd2VlblBsdWdpbi5hY3RpdmF0ZSA9IGZ1bmN0aW9uKHBsdWdpbnMpIHtcblx0XHRcdHZhciBpID0gcGx1Z2lucy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0aWYgKHBsdWdpbnNbaV0uQVBJID09PSBUd2VlblBsdWdpbi5BUEkpIHtcblx0XHRcdFx0XHRfcGx1Z2luc1sobmV3IHBsdWdpbnNbaV0oKSkuX3Byb3BOYW1lXSA9IHBsdWdpbnNbaV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cblx0XHQvL3Byb3ZpZGVzIGEgbW9yZSBjb25jaXNlIHdheSB0byBkZWZpbmUgcGx1Z2lucyB0aGF0IGhhdmUgbm8gZGVwZW5kZW5jaWVzIGJlc2lkZXMgVHdlZW5QbHVnaW4gYW5kIFR3ZWVuTGl0ZSwgd3JhcHBpbmcgY29tbW9uIGJvaWxlcnBsYXRlIHN0dWZmIGludG8gb25lIGZ1bmN0aW9uIChhZGRlZCBpbiAxLjkuMCkuIFlvdSBkb24ndCBORUVEIHRvIHVzZSB0aGlzIHRvIGRlZmluZSBhIHBsdWdpbiAtIHRoZSBvbGQgd2F5IHN0aWxsIHdvcmtzIGFuZCBjYW4gYmUgdXNlZnVsIGluIGNlcnRhaW4gKHJhcmUpIHNpdHVhdGlvbnMuXG5cdFx0X2dzRGVmaW5lLnBsdWdpbiA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdFx0aWYgKCFjb25maWcgfHwgIWNvbmZpZy5wcm9wTmFtZSB8fCAhY29uZmlnLmluaXQgfHwgIWNvbmZpZy5BUEkpIHsgdGhyb3cgXCJpbGxlZ2FsIHBsdWdpbiBkZWZpbml0aW9uLlwiOyB9XG5cdFx0XHR2YXIgcHJvcE5hbWUgPSBjb25maWcucHJvcE5hbWUsXG5cdFx0XHRcdHByaW9yaXR5ID0gY29uZmlnLnByaW9yaXR5IHx8IDAsXG5cdFx0XHRcdG92ZXJ3cml0ZVByb3BzID0gY29uZmlnLm92ZXJ3cml0ZVByb3BzLFxuXHRcdFx0XHRtYXAgPSB7aW5pdDpcIl9vbkluaXRUd2VlblwiLCBzZXQ6XCJzZXRSYXRpb1wiLCBraWxsOlwiX2tpbGxcIiwgcm91bmQ6XCJfbW9kXCIsIG1vZDpcIl9tb2RcIiwgaW5pdEFsbDpcIl9vbkluaXRBbGxQcm9wc1wifSxcblx0XHRcdFx0UGx1Z2luID0gX2NsYXNzKFwicGx1Z2lucy5cIiArIHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc3Vic3RyKDEpICsgXCJQbHVnaW5cIixcblx0XHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFR3ZWVuUGx1Z2luLmNhbGwodGhpcywgcHJvcE5hbWUsIHByaW9yaXR5KTtcblx0XHRcdFx0XHRcdHRoaXMuX292ZXJ3cml0ZVByb3BzID0gb3ZlcndyaXRlUHJvcHMgfHwgW107XG5cdFx0XHRcdFx0fSwgKGNvbmZpZy5nbG9iYWwgPT09IHRydWUpKSxcblx0XHRcdFx0cCA9IFBsdWdpbi5wcm90b3R5cGUgPSBuZXcgVHdlZW5QbHVnaW4ocHJvcE5hbWUpLFxuXHRcdFx0XHRwcm9wO1xuXHRcdFx0cC5jb25zdHJ1Y3RvciA9IFBsdWdpbjtcblx0XHRcdFBsdWdpbi5BUEkgPSBjb25maWcuQVBJO1xuXHRcdFx0Zm9yIChwcm9wIGluIG1hcCkge1xuXHRcdFx0XHRpZiAodHlwZW9mKGNvbmZpZ1twcm9wXSkgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdHBbbWFwW3Byb3BdXSA9IGNvbmZpZ1twcm9wXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0UGx1Z2luLnZlcnNpb24gPSBjb25maWcudmVyc2lvbjtcblx0XHRcdFR3ZWVuUGx1Z2luLmFjdGl2YXRlKFtQbHVnaW5dKTtcblx0XHRcdHJldHVybiBQbHVnaW47XG5cdFx0fTtcblxuXG5cdFx0Ly9ub3cgcnVuIHRocm91Z2ggYWxsIHRoZSBkZXBlbmRlbmNpZXMgZGlzY292ZXJlZCBhbmQgaWYgYW55IGFyZSBtaXNzaW5nLCBsb2cgdGhhdCB0byB0aGUgY29uc29sZSBhcyBhIHdhcm5pbmcuIFRoaXMgaXMgd2h5IGl0J3MgYmVzdCB0byBoYXZlIFR3ZWVuTGl0ZSBsb2FkIGxhc3QgLSBpdCBjYW4gY2hlY2sgYWxsIHRoZSBkZXBlbmRlbmNpZXMgZm9yIHlvdS5cblx0XHRhID0gd2luZG93Ll9nc1F1ZXVlO1xuXHRcdGlmIChhKSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRhW2ldKCk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHAgaW4gX2RlZkxvb2t1cCkge1xuXHRcdFx0XHRpZiAoIV9kZWZMb29rdXBbcF0uZnVuYykge1xuXHRcdFx0XHRcdHdpbmRvdy5jb25zb2xlLmxvZyhcIkdTQVAgZW5jb3VudGVyZWQgbWlzc2luZyBkZXBlbmRlbmN5OiBcIiArIHApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0X3RpY2tlckFjdGl2ZSA9IGZhbHNlOyAvL2Vuc3VyZXMgdGhhdCB0aGUgZmlyc3Qgb2ZmaWNpYWwgYW5pbWF0aW9uIGZvcmNlcyBhIHRpY2tlci50aWNrKCkgdG8gdXBkYXRlIHRoZSB0aW1lIHdoZW4gaXQgaXMgaW5zdGFudGlhdGVkXG5cblx0XHRyZXR1cm4gVHdlZW5MaXRlO1xuXG59KShfZ3NTY29wZSwgXCJUd2VlbkxpdGVcIik7XG5cbmV4cG9ydCB2YXIgZ2xvYmFscyA9IF9nc1Njb3BlLkdyZWVuU29ja0dsb2JhbHM7XG52YXIgbm9uR2xvYmFscyA9IGdsb2JhbHMuY29tLmdyZWVuc29jaztcbmV4cG9ydCB7IFR3ZWVuTGl0ZSBhcyBkZWZhdWx0IH07XG5leHBvcnQgdmFyIFNpbXBsZVRpbWVsaW5lID0gbm9uR2xvYmFscy5jb3JlLlNpbXBsZVRpbWVsaW5lO1xuZXhwb3J0IHZhciBBbmltYXRpb24gPSBub25HbG9iYWxzLmNvcmUuQW5pbWF0aW9uO1xuZXhwb3J0IHZhciBFYXNlID0gZ2xvYmFscy5FYXNlO1xuZXhwb3J0IHZhciBMaW5lYXIgPSBnbG9iYWxzLkxpbmVhcjtcbmV4cG9ydCB2YXIgUG93ZXIwID0gTGluZWFyO1xuZXhwb3J0IHZhciBQb3dlcjEgPSBnbG9iYWxzLlBvd2VyMTtcbmV4cG9ydCB2YXIgUG93ZXIyID0gZ2xvYmFscy5Qb3dlcjI7XG5leHBvcnQgdmFyIFBvd2VyMyA9IGdsb2JhbHMuUG93ZXIzO1xuZXhwb3J0IHZhciBQb3dlcjQgPSBnbG9iYWxzLlBvd2VyNDtcbmV4cG9ydCB2YXIgVHdlZW5QbHVnaW4gPSBnbG9iYWxzLlR3ZWVuUGx1Z2luO1xuZXhwb3J0IHZhciBFdmVudERpc3BhdGNoZXIgPSBub25HbG9iYWxzLmV2ZW50cy5FdmVudERpc3BhdGNoZXI7XG4iLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoIChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZ2xvYmFsIGpRdWVyeSB3aW5kb3csIGRvY3VtZW50LCBlbnF1aXJlLCBzaXRlICovXG5pbXBvcnQgeyBUd2VlbkxpdGUsIFBvd2VyMSB9IGZyb20gJ2dzYXAvVHdlZW5MaXRlJztcbmltcG9ydCB7IGNoZWNrRGVmaW5lZCwgZXZlbnRUcmlnZ2VyIH0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL2Rldi9qcy91dGlscyc7XG5pbXBvcnQgeyB3cmFwLCB1bndyYXAgfSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2RvbU1hbmlwdWxhdGlvbic7XG5pbXBvcnQgeyBpc01vYmlsZURldmljZSB9IGZyb20gJy4uLy4uLy4uL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvYnJvd3NlckRldGVjdGlvbic7XG5cbi8qKlxuICpcbiAqIEEgY29udGFpbmVyIGhvbGRpbmcgY2FyZCBjb21wb25lbnRzIHdpdGggYW4gaWNvbi10b2dnbGVkIG5hdmlnYXRpb25cbiAqXG4gKiBMUkRYIC0gSW50ZXJhY3RpdmVOdW1iZXJlZEltYWdlXG4gKiBAbW9kdWxlIExSRFguQ29tcG9uZW50cy5JbnRlcmFjdGl2ZU51bWJlcmVkSW1hZ2VcbiAqXG4gKi9cblxuLyohXG4gKiBJbnRlcmFjdGl2ZU51bWJlcmVkSW1hZ2VcbiAqIENvcHlyaWdodCAyMDE3OiBDb25uZWN0IEdyb3VwLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbigoJCwgd2luZG93KSA9PiB7XG4gIGNvbnN0IEludGVyYWN0aXZlTnVtYmVyZWRJbWFnZSA9IHtcbiAgICBfZGVmYXVsdHM6IHt9LFxuICAgIF9hbmltYXRpbmdDbGFzczogJ0ludGVyYWN0aXZlTnVtYmVyZWRJbWFnZS0tYW5pbWF0aW5nJyxcbiAgICBfdGV4dEFuaW1hdGluZzogZmFsc2UsXG4gICAgX2ltYWdlQW5pbWF0aW5nOiBmYWxzZSxcbiAgICB1aVNlbGVjdG9yczoge1xuICAgICAgdGFiczogJy5JbnRlcmFjdGl2ZU51bWJlcmVkSW1hZ2VfX3RhYicsXG4gICAgICB0YWJiZWROYXZpZ2F0aW9uQ29udGFpbmVyOiAnLkludGVyYWN0aXZlTnVtYmVyZWRJbWFnZV9fbmF2aWdhdGlvbicsXG4gICAgICB0YWJiZWROYXZpZ2F0aW9uTGlua3M6XG4gICAgICAgICcuSW50ZXJhY3RpdmVOdW1iZXJlZEltYWdlX19uYXZpZ2F0aW9uIC5JbnRlcmFjdGl2ZU51bWJlcmVkSW1hZ2VfX3RvZ2dsZScsXG4gICAgICBjb250ZW50Q29udGFpbmVyOiAnLkludGVyYWN0aXZlTnVtYmVyZWRJbWFnZV9fY29udGVudCcsXG4gICAgICBpbWFnZXM6ICcuSW50ZXJhY3RpdmVOdW1iZXJlZEltYWdlX19pbWFnZScsXG4gICAgICBpbWFnZXNDb250YWluZXI6ICcuSW50ZXJhY3RpdmVOdW1iZXJlZEltYWdlX19pbWFnZXMnLFxuICAgICAgdGFiYmVkTmF2aWdhdGlvbkxpbmtzQ29udGFpbmVyOiAnLkludGVyYWN0aXZlTnVtYmVyZWRJbWFnZV9fdG9nZ2xlcycsXG4gICAgICBjb250cm9sczogJy5JbnRlcmFjdGl2ZU51bWJlcmVkSW1hZ2VfX2NvbnRyb2xzJyxcbiAgICAgIHByb2dyZXNzTG9hZGluZzogJy5JbnRlcmFjdGl2ZU51bWJlcmVkSW1hZ2VfX2NvbnRyb2xzLXByb2dyZXNzLWxvYWRpbmcnXG4gICAgfSxcblxuICAgIF90YWJsZXRCcmVha3BvaW50OiA5MDEsXG4gICAgX21vYmlsZUJyZWFrcG9pbnQ6IDc0MCxcbiAgICBfY29tcG9uZW50TWluSGVpZ2h0OiAzNTcsXG4gICAgX2NvbXBvbmVudE1heEhlaWdodDogNjAwLFxuICAgIF9tb2RlOiBudWxsLFxuICAgIF90YWJWc3BhY2luZzogMzIsXG4gICAgX3Byb2dyZXNzQ2lyY3VtZmVyZW5jZTogMCxcbiAgICBfcHJvZ3Jlc3NSYWRpdXM6IDAsXG4gICAgX3Byb2dyZXNzVmFsdWU6IDAsXG4gICAgX3Byb2dyZXNzU3RlcDogbnVsbCxcbiAgICBfcHJvZ3Jlc3NBbmltYXRpb246IG51bGwsXG4gICAgX3NsaWRlSW5kZXg6IDAsXG4gICAgX2lzVmVydGljYWxTbGlkZXI6IGZhbHNlLFxuICAgIF9oYXNWZXJ0aWNhbFNsaWRlcjogZmFsc2UsXG4gICAgX2FuaW1hdGlvbkZyYW1lOiBudWxsLFxuICAgIF9jb250cm9sc0xpc3RlbmVyOiBudWxsLFxuICAgIF9pbnRlcmFjdGVkOiBmYWxzZSxcbiAgICBfYXJpYUF1dG9wbGF5U3RhcnQ6ICcnLFxuICAgIF9hcmlhQXV0b3BsYXlTdG9wOiAnJyxcblxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZXMgdGhlIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1ldGhvZCBpbml0XG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICQod2luZG93KS5zbWFydHJlc2l6ZSh0aGlzLl9oYW5kbGVTaXplcy5iaW5kKHRoaXMpKTtcblxuICAgICAgdGhpcy5fZ2V0U3RyaW5ncygpO1xuICAgICAgdGhpcy5fY2hlY2tGb3JWZXJ0aWNhbFNsaWRlcigpO1xuICAgICAgdGhpcy5faW5pdEV2ZW50cygpO1xuICAgICAgdGhpcy5faW5pdFRhYkV2ZW50cygpO1xuICAgICAgdGhpcy5faGFuZGxlU2l6ZXMoKTtcblxuICAgICAgdGhpcy51aSgnaW1hZ2VzJykub24oJ2xhenlsb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUFjY29yZGlvbigpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3RhYmxpc3RLZXlib2FyZE5hdmlnYXRpb24oKTtcbiAgICB9LFxuXG4gICAgX2luaXRFdmVudHMoKSB7XG4gICAgICB0aGlzLl9jb250cm9sc0xpc3RlbmVyID0gdGhpcy5fY29udHJvbHNDbGljay5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy51aSgnY29udHJvbHMnKS5nZXQoMCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9jb250cm9sc0xpc3RlbmVyKTtcbiAgICAgIHRoaXMudWkoJ3RhYmJlZE5hdmlnYXRpb25MaW5rcycpLmdldCgpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3N0b3BQbGF5aW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9hZGRBdXRvcGxheUV2ZW50cygpIHtcbiAgICAgIHRoaXMuYXV0b3BsYXlNb3VzZU92ZXIgPSB0aGlzLl9oYW5kbGVBdXRvUGxheS5iaW5kKHRoaXMsICdtb3VzZW92ZXInKTtcbiAgICAgIHRoaXMuYXV0b3BsYXlNb3VzZUxlYXZlID0gdGhpcy5faGFuZGxlQXV0b1BsYXkuYmluZCh0aGlzLCAnbW91c2VsZWF2ZScpO1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuYXV0b3BsYXlNb3VzZU92ZXIpO1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmF1dG9wbGF5TW91c2VMZWF2ZSk7XG4gICAgfSxcblxuICAgIF9yZW1vdmVBdXRvcGxheUV2ZW50cygpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLmF1dG9wbGF5TW91c2VPdmVyKTtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5hdXRvcGxheU1vdXNlTGVhdmUpO1xuICAgIH0sXG5cbiAgICBfZ2V0U3RyaW5ncygpIHtcbiAgICAgIHRoaXMuX2FyaWFBdXRvcGxheVN0YXJ0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5JbnRlcmFjdGl2ZU51bWJlcmVkSW1hZ2VfX3N0cmluZ3MtYXV0b3BsYXktc3RhcnQnKS5pbm5lckhUTUw7XG4gICAgICB0aGlzLl9hcmlhQXV0b3BsYXlTdG9wID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5JbnRlcmFjdGl2ZU51bWJlcmVkSW1hZ2VfX3N0cmluZ3MtYXV0b3BsYXktc3RvcCcpLmlubmVySFRNTDtcbiAgICB9LFxuXG4gICAgX2hhbmRsZUF1dG9QbGF5KG1vdXNlU3RhdGUpIHtcbiAgICAgIHN3aXRjaCAobW91c2VTdGF0ZSkge1xuICAgICAgICBjYXNlICdtb3VzZW92ZXInOlxuICAgICAgICAgIGlmICh0aGlzLl9pbnRlcmFjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3N0b3BQbGF5aW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vdXNlbGVhdmUnOlxuICAgICAgICAgIGlmICh0aGlzLl9pbnRlcmFjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3N0YXJ0UGxheWluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9zZXRBY2NvcmRpb25BcmlhU3RhdGUobGluaywgdGFiKSB7XG4gICAgICBjb25zdCBsaW5rcyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuSW50ZXJhY3RpdmVOdW1iZXJlZEltYWdlX190b2dnbGUnKTtcbiAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkludGVyYWN0aXZlTnVtYmVyZWRJbWFnZV9fdGFicycpO1xuICAgICAgbGlua3MuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICB0YWJzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGVsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIH0pO1xuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgdGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICB0YWIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9LFxuXG4gICAgX3N0YXJ0UGxheWluZygpIHtcbiAgICAgIGlmIChpc01vYmlsZURldmljZSgpICYmIHRoaXMuX2ludGVyYWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX3N0b3BQbGF5aW5nKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudWkoJ2NvbnRyb2xzJykuZ2V0KDApLmNsYXNzTGlzdC5hZGQoJ0ludGVyYWN0aXZlTnVtYmVyZWRJbWFnZV9fY29udHJvbHMtLXBsYXlpbmcnKTtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9hbmltYXRpb25GcmFtZSk7XG4gICAgICB0aGlzLl9hbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fc2V0UHJvZ3Jlc3MuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLnVpKCdjb250cm9scycpLmdldCgwKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLl9hcmlhQXV0b3BsYXlTdG9wKTtcbiAgICB9LFxuXG4gICAgX3N0b3BQbGF5aW5nKCkge1xuICAgICAgdGhpcy51aSgnY29udHJvbHMnKS5nZXQoMCkuY2xhc3NMaXN0LnJlbW92ZSgnSW50ZXJhY3RpdmVOdW1iZXJlZEltYWdlX19jb250cm9scy0tcGxheWluZycpO1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX2FuaW1hdGlvbkZyYW1lKTtcbiAgICAgIHRoaXMudWkoJ2NvbnRyb2xzJykuZ2V0KDApLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMuX2FyaWFBdXRvcGxheVN0YXJ0KTtcbiAgICB9LFxuXG4gICAgLy8gc2V0IGluaXRpYWwgdGFiL2ltYWdlIHN0YXRlcyBhbmQgZmlyZSBtZXRob2QgdG8gaGFuZGxlIGNsaWNrIGV2ZW50c1xuICAgIF9pbml0VGFiRXZlbnRzKCkge1xuICAgICAgY29uc3QgYWN0aXZlVGFiID0gdGhpcy51aSgndGFiYmVkTmF2aWdhdGlvbkxpbmtzJykuZXEoMCk7XG4gICAgICBjb25zdCBhcmlhQXR0cmlidXRlcyA9IGFyaWFTZWxlY3RlZCA9PiAoe1xuICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IGFyaWFTZWxlY3RlZFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudWkoJ3RhYnMnKVxuICAgICAgICAuY3NzKCdvcGFjaXR5JywgMClcbiAgICAgICAgLmhpZGUoKTtcblxuICAgICAgdGhpcy51aSgnaW1hZ2VzJylcbiAgICAgICAgLmNzcygnb3BhY2l0eScsIDApXG4gICAgICAgIC5oaWRlKCk7XG5cbiAgICAgIGFjdGl2ZVRhYi5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgIGlmICh0aGlzLl9nZXRNb2RlKCkgIT09ICdkZXNrdG9wJykge1xuICAgICAgICB0aGlzLnVpKCd0YWJiZWROYXZpZ2F0aW9uTGlua3MnKS5hdHRyKGFyaWFBdHRyaWJ1dGVzKCdmYWxzZScsICctMScpKTtcbiAgICAgICAgYWN0aXZlVGFiLmF0dHIoYXJpYUF0dHJpYnV0ZXMoJ3RydWUnLCAnMCcpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51aSgndGFicycpXG4gICAgICAgIC5lcSgwKVxuICAgICAgICAuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICAgICAuc2hvdygpXG4gICAgICAgIC5jc3MoJ29wYWNpdHknLCAxKTtcbiAgICAgIHRoaXMudWkoJ2ltYWdlcycpXG4gICAgICAgIC5lcSgwKVxuICAgICAgICAuc2hvdygpXG4gICAgICAgIC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgICAgIC5jc3MoJ29wYWNpdHknLCAxKTtcblxuICAgICAgdGhpcy5faGFuZGxlVGFiQ2xpY2soKTtcbiAgICB9LFxuXG4gICAgX2NoZWNrRm9yVmVydGljYWxTbGlkZXIoKSB7XG4gICAgICBpZiAodGhpcy5fZ2V0TW9kZSgpICE9PSAnZGVza3RvcCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlSW50KHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZHVyYXRpb24taW5kaWNhdG9yLXRpbWUnKSwgMTApIHx8IG51bGw7XG4gICAgICBpZiAoY2hlY2tEZWZpbmVkKGR1cmF0aW9uKSAmJiB0eXBlb2YgZHVyYXRpb24gPT09ICdudW1iZXInICYmIGR1cmF0aW9uID4gMCkge1xuICAgICAgICB0aGlzLl9pc1ZlcnRpY2FsU2xpZGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fYnVpbGRWZXJ0aWNhbFNsaWRlcigpO1xuICAgICAgICB0aGlzLl9pbml0Q29udHJvbHMoZHVyYXRpb24pO1xuICAgICAgICB0aGlzLl9hZGRBdXRvcGxheUV2ZW50cygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfaW5pdENvbnRyb2xzKGR1cmF0aW9uKSB7XG4gICAgICB0aGlzLl9wcm9ncmVzc1JhZGl1cyA9IHRoaXMudWkoJ3Byb2dyZXNzTG9hZGluZycpLmdldCgwKS5yLmJhc2VWYWwudmFsdWU7XG4gICAgICB0aGlzLl9wcm9ncmVzc0NpcmN1bWZlcmVuY2UgPSAodGhpcy5fcHJvZ3Jlc3NSYWRpdXMgKiAyKSAqIE1hdGguUEk7XG5cbiAgICAgIHRoaXMudWkoJ3Byb2dyZXNzTG9hZGluZycpLmdldCgwKS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBgJHt0aGlzLl9wcm9ncmVzc0NpcmN1bWZlcmVuY2V9ICR7dGhpcy5fcHJvZ3Jlc3NDaXJjdW1mZXJlbmNlfWA7XG4gICAgICB0aGlzLnVpKCdwcm9ncmVzc0xvYWRpbmcnKS5nZXQoMCkuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IGAke3RoaXMuX3Byb2dyZXNzQ2lyY3VtZmVyZW5jZX1gO1xuXG4gICAgICB0aGlzLl9wcm9ncmVzc1N0ZXAgPSAxNjUyIC8gKGR1cmF0aW9uICogMTAwMCk7XG4gICAgICB0aGlzLl9zdGFydFBsYXlpbmcoKTtcbiAgICAgIC8vIHRoaXMuX2FuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9zZXRQcm9ncmVzcy5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgX2J1aWxkVmVydGljYWxTbGlkZXIoKSB7XG4gICAgICBpZiAodGhpcy5faGFzVmVydGljYWxTbGlkZXIgfHwgIXRoaXMuX2lzVmVydGljYWxTbGlkZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdG9nZ2xlcyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuSW50ZXJhY3RpdmVOdW1iZXJlZEltYWdlX190b2dnbGUnKTtcbiAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkludGVyYWN0aXZlTnVtYmVyZWRJbWFnZV9fdGFicycpO1xuICAgICAgdG9nZ2xlcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ0ludGVyYWN0aXZlTnVtYmVyZWRJbWFnZV9fdmVydGljYWxTbGlkZXItaXRlbScpO1xuICAgICAgICB3cmFwKGVsLCB3cmFwcGVyKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0YWJzW2luZGV4XSk7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy51aSgndGFiYmVkTmF2aWdhdGlvbkxpbmtzQ29udGFpbmVyJykuZ2V0KDApLnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgICAgdGhpcy5faGFzVmVydGljYWxTbGlkZXIgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBfcmVtb3ZlVmVydGljYWxTbGlkZXIoKSB7XG4gICAgICBpZiAoIXRoaXMuX2hhc1ZlcnRpY2FsU2xpZGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRvZ2dsZXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkludGVyYWN0aXZlTnVtYmVyZWRJbWFnZV9fdG9nZ2xlJyk7XG4gICAgICBjb25zdCB0YWJzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5JbnRlcmFjdGl2ZU51bWJlcmVkSW1hZ2VfX3RhYnMnKTtcbiAgICAgIGNvbnN0IGxpbmtDb250YWluZXJzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5JbnRlcmFjdGl2ZU51bWJlcmVkSW1hZ2VfX3ZlcnRpY2FsU2xpZGVyLWl0ZW0nKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLkludGVyYWN0aXZlTnVtYmVyZWRJbWFnZV9fY29udGVudCcpO1xuICAgICAgdG9nZ2xlcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGFiJyk7XG4gICAgICB9KTtcbiAgICAgIHRhYnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgY29udGVudC5hcHBlbmQoZWwpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgZWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnVpKCd0YWJiZWROYXZpZ2F0aW9uTGlua3NDb250YWluZXInKS5nZXQoMCkuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3RhYmxpc3QnKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVRhYkxpbmtzKCQoJy5JbnRlcmFjdGl2ZU51bWJlcmVkSW1hZ2VfX3RvZ2dsZS5hY3RpdmUnKSk7XG4gICAgICBsaW5rQ29udGFpbmVycy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICB1bndyYXAoZWwpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9pc1ZlcnRpY2FsU2xpZGVyID0gZmFsc2U7XG4gICAgICB0aGlzLl9oYXNWZXJ0aWNhbFNsaWRlciA9IGZhbHNlO1xuXG4gICAgICB0aGlzLl9yZW1vdmVBdXRvcGxheUV2ZW50cygpO1xuICAgICAgdGhpcy5fc3RvcFBsYXlpbmcoKTtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZUFjY29yZGlvbigpIHtcbiAgICAgIGNvbnN0IGFjY29yZGlvbldyYXBwZXIgPSB0aGlzLiRlbGVtZW50LmNsb3Nlc3QoJy5BY2NvcmRpb24nKTtcbiAgICAgIGlmIChhY2NvcmRpb25XcmFwcGVyICYmIGFjY29yZGlvbldyYXBwZXIubGVuZ3RoKSB7XG4gICAgICAgIGFjY29yZGlvbldyYXBwZXIuQWNjb3JkaW9uKCdjYWxjdWxhdGVOZXdIZWlnaHQnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2NvbnRyb2xzQ2xpY2soZSkge1xuICAgICAgdGhpcy5faW50ZXJhY3RlZCA9IHRydWU7XG4gICAgICBpZiAodGhpcy51aSgnY29udHJvbHMnKS5nZXQoMCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdJbnRlcmFjdGl2ZU51bWJlcmVkSW1hZ2VfX2NvbnRyb2xzLS1wbGF5aW5nJykpIHtcbiAgICAgICAgdGhpcy5fc3RvcFBsYXlpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UGxheWluZygpO1xuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sXG5cbiAgICBfc2V0UHJvZ3Jlc3MoKSB7XG4gICAgICBpZiAodGhpcy5fcHJvZ3Jlc3NWYWx1ZSA8IDEwMCkge1xuICAgICAgICB0aGlzLl9wcm9ncmVzc1ZhbHVlID0gdGhpcy5fcHJvZ3Jlc3NWYWx1ZSArIHRoaXMuX3Byb2dyZXNzU3RlcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NsaWRlSW5kZXggPSB0aGlzLl9zbGlkZUluZGV4IDwgdGhpcy51aSgndGFiYmVkTmF2aWdhdGlvbkxpbmtzJykubGVuZ3RoIC0gMSA/IHRoaXMuX3NsaWRlSW5kZXggKyAxIDogMDtcbiAgICAgICAgdGhpcy51aSgndGFiYmVkTmF2aWdhdGlvbkxpbmtzJykuZXEodGhpcy5fc2xpZGVJbmRleCkudHJpZ2dlcignY2xpY2snLCBbJ2lzVHJpZ2dlcicsICd0cnVlJ10pO1xuICAgICAgICB0aGlzLl9wcm9ncmVzc1ZhbHVlID0gdGhpcy5fcHJvZ3Jlc3NTdGVwO1xuICAgICAgfVxuICAgICAgdGhpcy5fZHJhd1Byb2dyZXNzKCk7XG4gICAgICBpZiAodGhpcy51aSgnY29udHJvbHMnKS5nZXQoMCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdJbnRlcmFjdGl2ZU51bWJlcmVkSW1hZ2VfX2NvbnRyb2xzLS1wbGF5aW5nJykpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX3NldFByb2dyZXNzLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfZHJhd1Byb2dyZXNzKCkge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5fcHJvZ3Jlc3NDaXJjdW1mZXJlbmNlIC0gKCh0aGlzLl9wcm9ncmVzc1ZhbHVlIC8gMTAwKSAqIHRoaXMuX3Byb2dyZXNzQ2lyY3VtZmVyZW5jZSk7XG4gICAgICB0aGlzLnVpKCdwcm9ncmVzc0xvYWRpbmcnKS5nZXQoMCkuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IG9mZnNldDtcbiAgICB9LFxuXG4gICAgX2dldE1vZGUoKSB7XG4gICAgICBsZXQgbW9kZSA9ICd0YWJsZXQnO1xuICAgICAgZW5xdWlyZS5yZWdpc3Rlcihgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3RoaXMuX3RhYmxldEJyZWFrcG9pbnR9cHgpYCwge1xuICAgICAgICBtYXRjaCgpIHtcbiAgICAgICAgICBtb2RlID0gJ2Rlc2t0b3AnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGVucXVpcmUucmVnaXN0ZXIoYHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHt0aGlzLl9tb2JpbGVCcmVha3BvaW50fXB4KWAsIHtcbiAgICAgICAgbWF0Y2goKSB7XG4gICAgICAgICAgbW9kZSA9ICdtb2JpbGUnO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG1vZGU7XG4gICAgfSxcblxuICAgIF9oYW5kbGVTaXplcyhmb3JjZSkge1xuICAgICAgY29uc3QgbW9kZSA9IHRoaXMuX2dldE1vZGUoKTtcblxuICAgICAgaWYgKG1vZGUgIT09ICdkZXNrdG9wJykge1xuICAgICAgICB0aGlzLnVpKCdjb250cm9scycpLmdldCgwKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLl9yZW1vdmVWZXJ0aWNhbFNsaWRlcigpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNWZXJ0aWNhbFNsaWRlcikge1xuICAgICAgICB0aGlzLl9jaGVja0ZvclZlcnRpY2FsU2xpZGVyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2RlID09PSAnZGVza3RvcCcgJiYgdGhpcy5faXNWZXJ0aWNhbFNsaWRlcikge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFRhYiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuSW50ZXJhY3RpdmVOdW1iZXJlZEltYWdlX190YWIuY3VycmVudCcpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZExpbmsgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLkludGVyYWN0aXZlTnVtYmVyZWRJbWFnZV9fdG9nZ2xlLmFjdGl2ZScpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFRhYkhlaWdodCA9IHNlbGVjdGVkVGFiLm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3QgdGFiQ29udGFpbmVyID0gc2VsZWN0ZWRUYWIucGFyZW50Tm9kZTtcbiAgICAgICAgdGFiQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke3NlbGVjdGVkVGFiSGVpZ2h0ICsgdGhpcy5fdGFiVnNwYWNpbmd9cHhgO1xuICAgICAgICB0aGlzLl9zZXRDb250ZW50Q29udGFpbmVySGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuX3NldEFjY29yZGlvbkFyaWFTdGF0ZShzZWxlY3RlZExpbmssIHRhYkNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMudWkoJ2NvbnRyb2xzJykuZ2V0KDApLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2lzVmVydGljYWxTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5fc3RvcFBsYXlpbmcoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdW5TZXRDb21wb25lbnRIZWlnaHQoKTtcbiAgICAgIC8vIGNoZWNrIGlmIGJyZWFrcG9pbnQgaGFzIGNoYW5nZWQgb3IgbWV0aG9kIGNhbGxlZCB3aXRoIGEgZm9yY2VkIHVwZGF0ZVxuICAgICAgaWYgKG1vZGUgIT09IHRoaXMuX21vZGUgfHwgZm9yY2UgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fbW9kZSA9IG1vZGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2RlID09PSAnZGVza3RvcCcpIHtcbiAgICAgICAgdGhpcy5fc2V0Q29tcG9uZW50SGVpZ2h0KCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgICBfc2V0Q29tcG9uZW50SGVpZ2h0OiBtYWtlIHRoZSBjb21wb25lbnQgdXAgdG8gdGhlIGhlaWdodCBvZiB0aGUgdmlld3BvcnRcbiAgICAgICAgIG1pbnVzIGdsb2JhbCBoZWFkZXIgaGVpZ2h0IHdpdGhvdXQgZXhjZWVkaW5nIF9jb21wb25lbnRNYXhIZWlnaHQgKHVubGVzc1xuICAgICAgICAgdGV4dCBleGNlZWRzIHRoZSBtYXggaGVpZ2h0LCBpbiB3aGljaCBjYXNlIHRleHQgYmVjb21lcyB0aGUgbmV3IG1heCBoZWlnaHQpXG4gICAgICAgICBhbmQgd2l0aG91dCBnb2luZyBsb3dlciB0aGFuIF9jb21wb25lbnRNaW5IZWlnaHRcbiAgICAgICAgKi9cbiAgICBfc2V0Q29tcG9uZW50SGVpZ2h0KCkge1xuICAgICAgbGV0IHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgd2luZG93SGVpZ2h0IC09IHNpdGUudXRpbHMuZ2V0U3RpY2t5TmF2SGVpZ2h0KDApO1xuICAgICAgd2luZG93SGVpZ2h0ID1cbiAgICAgICAgd2luZG93SGVpZ2h0IDwgdGhhdC5fY29tcG9uZW50TWluSGVpZ2h0XG4gICAgICAgICAgPyB0aGF0Ll9jb21wb25lbnRNaW5IZWlnaHRcbiAgICAgICAgICA6IHdpbmRvd0hlaWdodDtcbiAgICAgIHdpbmRvd0hlaWdodCA9XG4gICAgICAgIHdpbmRvd0hlaWdodCA+IHRoYXQuX2NvbXBvbmVudE1heEhlaWdodFxuICAgICAgICAgID8gdGhhdC5fY29tcG9uZW50TWF4SGVpZ2h0XG4gICAgICAgICAgOiB3aW5kb3dIZWlnaHQ7XG5cbiAgICAgIC8vIHVuc2V0IGhlaWdodCB0aGVuIGZhY3RvciBpbiB0ZXh0SGVpZ2h0LCB1c2UgdGhlIGhpZ2hlc3QgdmFsdWUgb3V0IG9mIHRleHRIZWlnaHQgb3Igd2luZG93SGVpZ2h0XG4gICAgICB0aGF0Ll91blNldENvbXBvbmVudEhlaWdodCgpO1xuICAgICAgbGV0IGNvbnRhaW5lckhlaWdodCA9IHRoYXQudWkoJ2NvbnRlbnRDb250YWluZXInKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgIGxldCB0ZXh0SGVpZ2h0ID0gMDtcbiAgICAgIGNvbnRhaW5lckhlaWdodCAtPSB0aGF0XG4gICAgICAgIC51aSgnY29udGVudENvbnRhaW5lcicpXG4gICAgICAgIC5maW5kKCcuY3VycmVudCcpXG4gICAgICAgIC5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgdGhhdC51aSgndGFicycpLmVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0ICRjbG9uZUVsZW0gPSB0aGF0XG4gICAgICAgICAgLnVpKCd0YWJzJylcbiAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgLmNsb25lKCk7XG4gICAgICAgICRjbG9uZUVsZW0uc2hvdygpLmNzcygnb3BhY2l0eScsIDEpO1xuICAgICAgICB0aGF0XG4gICAgICAgICAgLnVpKCd0YWJzJylcbiAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgLmFwcGVuZCgkY2xvbmVFbGVtKTtcbiAgICAgICAgY29uc3QgJGNsb25lSGVpZ2h0ID0gJGNsb25lRWxlbS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgdGV4dEhlaWdodCA9ICRjbG9uZUhlaWdodCA+IHRleHRIZWlnaHQgPyAkY2xvbmVIZWlnaHQgOiB0ZXh0SGVpZ2h0O1xuICAgICAgICAkY2xvbmVFbGVtLnJlbW92ZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnRhaW5lckhlaWdodCArPSB0ZXh0SGVpZ2h0O1xuXG4gICAgICBmdW5jdGlvbiBnZXRJbWFnZUhlaWdodCgpIHtcbiAgICAgICAgbGV0IGltYWdlSGVpZ2h0ID0gMDtcbiAgICAgICAgdGhhdC51aSgnaW1hZ2VzJykuZWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBlbGVtID0gJCh0aGF0LnVpKCdpbWFnZXMnKVtpbmRleF0pO1xuICAgICAgICAgIGltYWdlSGVpZ2h0ID1cbiAgICAgICAgICAgIGVsZW0ub3V0ZXJIZWlnaHQodHJ1ZSkgPiBpbWFnZUhlaWdodFxuICAgICAgICAgICAgICA/IGVsZW0ub3V0ZXJIZWlnaHQodHJ1ZSlcbiAgICAgICAgICAgICAgOiBpbWFnZUhlaWdodDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpbWFnZUhlaWdodDtcbiAgICAgIH1cblxuICAgICAgd2luZG93SGVpZ2h0ID1cbiAgICAgICAgY29udGFpbmVySGVpZ2h0ID4gd2luZG93SGVpZ2h0IHx8IHRoYXQuX21vZGUgIT09ICdkZXNrdG9wJ1xuICAgICAgICAgID8gY29udGFpbmVySGVpZ2h0XG4gICAgICAgICAgOiB3aW5kb3dIZWlnaHQ7XG4gICAgICB3aW5kb3dIZWlnaHQgPVxuICAgICAgICB0aGF0Ll9tb2RlID09PSAnZGVza3RvcCdcbiAgICAgICAgICA/IHdpbmRvd0hlaWdodFxuICAgICAgICAgIDogd2luZG93SGVpZ2h0ICsgZ2V0SW1hZ2VIZWlnaHQoKTtcbiAgICAgICQodGhhdC5lbGVtZW50KS5oZWlnaHQod2luZG93SGVpZ2h0ICsgKHRoaXMuX2lzVmVydGljYWxTbGlkZXIgPyB0aGF0Ll9wcm9ncmVzc1JhZGl1cyArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMudWkoJ2NvbnRyb2xzJykuZ2V0KDApKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpLCAxMCkgOiAwKSk7XG4gICAgfSxcblxuICAgIC8vIHJlbW92ZSB0aGUgZml4ZWQgaGVpZ2h0IGFuZCBhbGxvdyBhdXRvIHNpemluZ1xuICAgIF91blNldENvbXBvbmVudEhlaWdodCgpIHtcbiAgICAgICQodGhpcy5lbGVtZW50KS5oZWlnaHQoJ2F1dG8nKTtcbiAgICB9LFxuXG4gICAgX3NldENvbnRlbnRDb250YWluZXJIZWlnaHQoKSB7XG4gICAgICAvLyB0aGlzLnVpKCdjb250ZW50Q29udGFpbmVyJykuZ2V0KDApLnN0eWxlLmhlaWdodCA9IGAke3RoaXMudWkoJ3RhYmJlZE5hdmlnYXRpb25Db250YWluZXInKS5nZXQoMCkub2Zmc2V0SGVpZ2h0ICsgNzJ9cHhgO1xuICAgIH0sXG5cbiAgICAvLyBjbGljayBldmVudCBmb3IgdGFiIHN3aXRjaGluZywgY2hlY2tzIGlmIHRhYiBpcyBhbHJlYWR5IGFuaW1hdGluZ1xuICAgIF9oYW5kbGVUYWJDbGljaygpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgbGV0ICR0YWI7XG4gICAgICAvLyBvbiB0YWIgbGluayBjbGljayBmYWRlIG91dCBjdXJyZW50IHRhYiBhbmQgc2hvdyBjaG9zZW4gdGFiXG4gICAgICB0aGlzLnVpKCd0YWJiZWROYXZpZ2F0aW9uTGlua3MnKS5vbignY2xpY2snLCBmdW5jdGlvbiB0YWJDbGljayhlKSB7XG4gICAgICAgIHRoYXQuX3Byb2dyZXNzVmFsdWUgPSAwO1xuICAgICAgICAvLyBmaXggZm9yIElFMTEgaW1hZ2UgcmVzaXppbmdcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgZXZlbnRUcmlnZ2VyKHdpbmRvdywgJ3Jlc2l6ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhhdC5fZHJhd1Byb2dyZXNzKCk7XG4gICAgICAgIGlmICghY2hlY2tEZWZpbmVkKGUuaXNUcmlnZ2VyKSkge1xuICAgICAgICAgIHRoYXQuX3N0b3BQbGF5aW5nKCk7XG4gICAgICAgICAgdGhhdC5fc2xpZGVJbmRleCA9IHBhcnNlSW50KCQodGhpcykuZ2V0KDApLmdldEF0dHJpYnV0ZSgnaWQnKS5zdWJzdHIoLTEpLCAxMCk7XG4gICAgICAgIH1cblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGhhdC4kZWxlbWVudC5oYXNDbGFzcyh0aGF0Ll9hbmltYXRpbmdDbGFzcykgJiZcbiAgICAgICAgICAhJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgJHRhYiA9ICQodGhpcyk7XG4gICAgICAgICAgdGhhdC5fdXBkYXRlVGFiTGlua3MoJHRhYik7XG4gICAgICAgICAgLy8gY2hhbmdlIHRhYiBjb250ZW50IHRvIG1hdGNoIHNlbGVjdGVkIHRhYlxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gKHRoYXQuX2dldE1vZGUoKSA9PT0gJ2Rlc2t0b3AnICYmIHRoYXQuX2lzVmVydGljYWxTbGlkZXIpID8gJHRhYi5wYXJlbnQoKS5pbmRleCgpIDogJHRhYi5pbmRleCgpO1xuICAgICAgICAgIHRoYXQuX2NoYW5nZVRhYihpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyBzd2l0Y2ggdGhlIGFjdGl2ZSB0YWIgdG8gdGhlIGNsaWNrZWQgdGFiXG4gICAgX2NoYW5nZVRhYihpbmRleCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAvLyBwcmV2ZW50IHVzZXIgY2xpY2tpbmcgbmV3IHRhYiBiZWZvcmUgcHJldmlvdXMgdGFiIGhhcyBhbmltYXRlZCBieSBhZGRpbmcgX2FuaW1hdGluZ0NsYXNzXG4gICAgICB0aGF0Ll90ZXh0QW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIHRoYXQuX2ltYWdlQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIHRoYXQuJGVsZW1lbnQuYWRkQ2xhc3ModGhhdC5fYW5pbWF0aW5nQ2xhc3MpO1xuXG4gICAgICAvLyBmYWRlIGZyb20gb25lIGltYWdlIGRpcmVjdCB0byBuZXh0XG5cbiAgICAgIHRoYXRcbiAgICAgICAgLnVpKCdjb250ZW50Q29udGFpbmVyJylcbiAgICAgICAgLmZpbmQoJy5jdXJyZW50JylcbiAgICAgICAgLmhpZGUoKVxuICAgICAgICAuc3RvcCgpXG4gICAgICAgIC5hbmltYXRlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZUNvbnRlbnRDb250YWluZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhhdC5fZ2V0TW9kZSgpID09PSAnZGVza3RvcCcgJiYgdGhhdC5faXNWZXJ0aWNhbFNsaWRlcikge1xuICAgICAgICAgICAgICBjb25zdCB0YWJDb250YWluZXIgPSB0aGF0LmVsZW1lbnQucXVlcnlTZWxlY3RvcignLkludGVyYWN0aXZlTnVtYmVyZWRJbWFnZV9fdGFiLmN1cnJlbnQnKS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICBUd2VlbkxpdGUudG8odGFiQ29udGFpbmVyLCAwLjUsIHsgaGVpZ2h0OiAwLCBlYXNlOiBQb3dlcjEuZWFzZU91dCB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xuXG4gICAgICAgICAgICB0aGF0XG4gICAgICAgICAgICAgIC51aSgndGFicycpXG4gICAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgICAgLnNob3coKVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgIHRoYXRcbiAgICAgICAgICAgICAgLnVpKCd0YWJzJylcbiAgICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgICAuc3RvcCgpXG4gICAgICAgICAgICAgIC5kZWxheSg0MDApXG4gICAgICAgICAgICAgIC5hbmltYXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDUwMCxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGF0Ll90ZXh0QW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB0aGF0Ll9jaGVja0FuaW1hdGluZ1N0YXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAodGhhdC5fZ2V0TW9kZSgpID09PSAnZGVza3RvcCcgJiYgdGhhdC5faXNWZXJ0aWNhbFNsaWRlcikge1xuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZExpbmsgPSB0aGF0LmVsZW1lbnQucXVlcnlTZWxlY3RvcignLkludGVyYWN0aXZlTnVtYmVyZWRJbWFnZV9fdG9nZ2xlLmFjdGl2ZScpO1xuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRhYiA9IHRoYXQudWkoJ3RhYnMnKS5nZXQoaW5kZXgpO1xuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRhYkhlaWdodCA9IHNlbGVjdGVkVGFiLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgY29uc3QgdGFiQ29udGFpbmVyID0gc2VsZWN0ZWRUYWIucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgVHdlZW5MaXRlLnRvKHRhYkNvbnRhaW5lciwgMC41LCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzZWxlY3RlZFRhYkhlaWdodCArIHRoYXQuX3RhYlZzcGFjaW5nLFxuICAgICAgICAgICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlT3V0LFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoYXQuX3NldENvbnRlbnRDb250YWluZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgIHRoYXQuX3NldEFjY29yZGlvbkFyaWFTdGF0ZShzZWxlY3RlZExpbmssIHRhYkNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgIHRoYXRcbiAgICAgICAgLnVpKCdpbWFnZXMnKVxuICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgIC5zaG93KClcbiAgICAgICAgLmFkZENsYXNzKCd0YXJnZXQnKVxuICAgICAgICAuY3NzKCdvcGFjaXR5JywgMSk7XG4gICAgICB0aGF0XG4gICAgICAgIC51aSgnaW1hZ2VzQ29udGFpbmVyJylcbiAgICAgICAgLmZpbmQoJy5jdXJyZW50JylcbiAgICAgICAgLnN0b3AoKVxuICAgICAgICAuYW5pbWF0ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICA2MDAsXG4gICAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZUltYWdlQ29udGFpbmVyKCkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAuaGlkZSgpXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xuICAgICAgICAgICAgdGhhdFxuICAgICAgICAgICAgICAudWkoJ2ltYWdlcycpXG4gICAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCd0YXJnZXQnKVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgIHRoYXQuX2ltYWdlQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGF0Ll9jaGVja0FuaW1hdGluZ1N0YXRlKCk7XG4gICAgICAgICAgICBpZiAodGhhdC5fbW9kZSA9PT0gJ21vYmlsZScpIHtcbiAgICAgICAgICAgICAgdGhhdC5fdXBkYXRlQWNjb3JkaW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICAvLyByZW1vdmUgcHJldmlvdXMgYWN0aXZlIHN0YXRlIGFuZCBzZXQgY3VycmVudCB0YWIgdG8gYWN0aXZlXG4gICAgX3VwZGF0ZVRhYkxpbmtzKHRhYikge1xuICAgICAgY29uc3QgYXJpYUF0dHJpYnV0ZXMgPSBhcmlhU2VsZWN0ZWQgPT4gKHtcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBhcmlhU2VsZWN0ZWRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLkludGVyYWN0aXZlTnVtYmVyZWRJbWFnZV9fdG9nZ2xlLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICB0YWIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICBpZiAodGhpcy5fZ2V0TW9kZSgpICE9PSAnZGVza3RvcCcpIHtcbiAgICAgICAgdGhpcy51aSgndGFiYmVkTmF2aWdhdGlvbkxpbmtzJykuYXR0cihhcmlhQXR0cmlidXRlcygnZmFsc2UnLCAnLTEnKSk7XG4gICAgICAgIHRhYi5hdHRyKGFyaWFBdHRyaWJ1dGVzKCd0cnVlJywgJzAnKSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIGlmIGJvdGggZWxlbWVudHMgaGF2ZSBjb21wbGV0ZWQgdGhlaXIgYW5pbWF0aW9uLCByZW1vdmUgYW5pbWF0aW5nIGNsYXNzXG4gICAgX2NoZWNrQW5pbWF0aW5nU3RhdGUoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgIGlmICghdGhhdC5fdGV4dEFuaW1hdGluZyAmJiAhdGhhdC5faW1hZ2VBbmltYXRpbmcpIHtcbiAgICAgICAgdGhhdC4kZWxlbWVudC5yZW1vdmVDbGFzcyh0aGF0Ll9hbmltYXRpbmdDbGFzcyk7XG4gICAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignbnVtZXJlZC1pbWFnZS1jaGFuZ2UnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX3RhYmxpc3RLZXlib2FyZE5hdmlnYXRpb24oKSB7XG4gICAgICBjb25zdCB0YWJsaXN0ID0gdGhpcy51aSgndGFiYmVkTmF2aWdhdGlvbkxpbmtzQ29udGFpbmVyJyk7XG4gICAgICBzaXRlLnV0aWxzLnRhYmxpc3ROYXZpZ2F0aW9uKHRhYmxpc3QuZ2V0KDApKTtcbiAgICB9XG4gIH07XG5cbiAgalF1ZXJ5LmNyZWF0ZUNvbXBvbmVudCgnSW50ZXJhY3RpdmVOdW1iZXJlZEltYWdlJywgSW50ZXJhY3RpdmVOdW1iZXJlZEltYWdlKTtcbiAgJCgnLkludGVyYWN0aXZlTnVtYmVyZWRJbWFnZScpLkludGVyYWN0aXZlTnVtYmVyZWRJbWFnZSgpO1xufSkoalF1ZXJ5LCB3aW5kb3cpO1xuIiwiZXhwb3J0IGNvbnN0IEtleUNvZGUgPSB7XG4gIEJBQ0tTUEFDRTogOCxcbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIEVORDogMzUsXG4gIEVTQzogMjcsXG4gIEhPTUU6IDM2LFxuICBMRUZUOiAzNyxcbiAgUEFHRV9ET1dOOiAzNCxcbiAgUEFHRV9VUDogMzMsXG4gIFJFVFVSTjogMTMsXG4gIFJJR0hUOiAzOSxcbiAgU1BBQ0U6IDMyLFxuICBUQUI6IDksXG4gIFVQOiAzOFxufTtcbiIsImV4cG9ydCBjb25zdCBicmVha3BvaW50cyA9IHtcbiAgc21hbGw6IDc0MCxcbiAgbWVkaXVtOiA5MDAsXG4gIHdpZGVyOiAxMDAwLFxuICBjdXJyZW50OiBudWxsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGV2aWNlT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0ICR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gIHJldHVybiAkd2luZG93LndpZHRoKCkgPiAkd2luZG93LmhlaWdodCgpID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xufTtcblxuY29uc3QgZ2V0TGFyZ2VyQnJlYWtwb2ludCA9IHdpZHRoID0+IChcbiAgd2lkdGggPD0gYnJlYWtwb2ludHMubWVkaXVtID8gJ21lZGl1bScgOiAnbGFyZ2UnXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QnJlYWtwb2ludFNpemUgPSAob2xkQ2FsYyA9IHRydWUpID0+IHtcbiAgY29uc3Qgd2lkdGggPSBvbGRDYWxjID8gJCh3aW5kb3cpLndpZHRoKCkgOiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgcmV0dXJuICh3aWR0aCA8PSBicmVha3BvaW50cy5zbWFsbCkgPyAnc21hbGwnIDogZ2V0TGFyZ2VyQnJlYWtwb2ludCh3aWR0aCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNCcmVha3BvaW50U21hbGwgPSAob2xkQ2FsYyA9IHRydWUpID0+IHtcbiAgcmV0dXJuIGdldEJyZWFrcG9pbnRTaXplKG9sZENhbGMpID09PSAnc21hbGwnO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzQnJlYWtwb2ludE1lZGl1bSA9IChvbGRDYWxjID0gdHJ1ZSkgPT4ge1xuICByZXR1cm4gZ2V0QnJlYWtwb2ludFNpemUob2xkQ2FsYykgPT09ICdtZWRpdW0nO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTW9iaWxlRGV2aWNlID0gKCkgPT4ge1xuICByZXR1cm4gKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCB8fCBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn07XG5cbmV4cG9ydCBjb25zdCBpc05vdE1vYmlsZURldmljZSA9ICgpID0+IHtcbiAgcmV0dXJuICFpc01vYmlsZURldmljZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzVGFibGV0RGV2aWNlID0gKCkgPT4ge1xuICByZXR1cm4gLyhpcGFkfHRhYmxldHwoYW5kcm9pZCg/IS4qbW9iaWxlKSl8KHdpbmRvd3MoPyEuKnBob25lKSguKnRvdWNoKSl8a2luZGxlfHBsYXlib29rfHNpbGt8KHB1ZmZpbig/IS4qKElQfEFQfFdQKSkpKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzSU9TID0gKCkgPT4ge1xuICByZXR1cm4gKC8oaXBhZHxpcGhvbmV8aXBvZCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTm90SU9TID0gKCkgPT4ge1xuICByZXR1cm4gIWlzSU9TKCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNXaW5kb3dzUGhvbmUgPSAoKSA9PiB7XG4gIHJldHVybiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3dpbmRvd3MgcGhvbmUnKSAhPT0gLTEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFuZHJvaWRWZXJzaW9uID0gKCkgPT4ge1xuICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgaWYgKHVhLmluZGV4T2YoJ0FuZHJvaWQnKSA+PSAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodWEuc2xpY2UodWEuaW5kZXhPZignQW5kcm9pZCcpICsgOCkpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEJyb3dzZXJVc2VyQWdlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdXNlckFnZW50IH0gPSBuYXZpZ2F0b3I7XG4gIHJldHVybiB1c2VyQWdlbnQ7XG59O1xuXG5leHBvcnQgY29uc3QgZGV0ZWN0QnJvd3NlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJBZ2VudCA9IGdldEJyb3dzZXJVc2VyQWdlbnQoKTtcbiAgY29uc3QgYnJvd3NlcnMgPSB7XG4gICAgaXNDaHJvbWU6IHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA+IC0xLFxuICAgIGlzTXNFZGdlOiB1c2VyQWdlbnQuaW5kZXhPZignRWRnZScpID4gLTEsXG4gICAgaXNFeHBsb3JlcjogdXNlckFnZW50LmluZGV4T2YoJ01TSUUnKSA+IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPiAtMSwgLy8gTVNJRSA9IElFMTAgYW5kIGJlbG93LCBUcmlkZW50ID0gSUUxMVxuICAgIGlzRmlyZWZveDogdXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA+IC0xLFxuICAgIGlzU2FmYXJpOiB1c2VyQWdlbnQuaW5kZXhPZignU2FmYXJpJykgPiAtMSxcbiAgICBpc09wZXJhOiB1c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdvcCcpID4gLTFcbiAgfTtcblxuICBpZiAoYnJvd3NlcnMuaXNDaHJvbWUgJiYgYnJvd3NlcnMuaXNTYWZhcmkpIHtcbiAgICBicm93c2Vycy5pc1NhZmFyaSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGJyb3dzZXJzLmlzQ2hyb21lICYmIGJyb3dzZXJzLmlzT3BlcmEpIHtcbiAgICBicm93c2Vycy5pc0Nocm9tZSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGJyb3dzZXJzO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzSWUgPSAoKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdpZScpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTXNFZGdlID0gKCkgPT4ge1xuICByZXR1cm4gZGV0ZWN0QnJvd3NlcnMoKS5pc01zRWRnZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0llMTEgPSAoKSA9PiB7XG4gIHJldHVybiAoIXdpbmRvdy5BY3RpdmVYT2JqZWN0ICYmICdBY3RpdmVYT2JqZWN0JyBpbiB3aW5kb3cpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFZpZXdwb3J0U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgdGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHRlc3Quc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjogZml4ZWQ7dG9wOiAwO2xlZnQ6IDA7Ym90dG9tOiAwO3JpZ2h0OiAwOyc7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGVzdCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gIGNvbnN0IGRpbXMgPSB7IHdpZHRoOiB0ZXN0Lm9mZnNldFdpZHRoLCBoZWlnaHQ6IHRlc3Qub2Zmc2V0SGVpZ2h0IH07XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0ZXN0KTtcblxuICByZXR1cm4gZGltcztcbn07XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxUb0VsZW1lbnQgPSAoZWxlbWVudCwgb3B0aW9ucywgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgJGVsZW1lbnQgPSBlbGVtZW50IGluc3RhbmNlb2YgalF1ZXJ5ID8gZWxlbWVudCA6ICQoZWxlbWVudCk7XG5cbiAgLy8gT3B0aW9ucyBhcmUgb3B0aW9uYWxcbiAgbGV0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIFNldCBkZWZhdWx0c1xuICBvcHRzID0gJC5leHRlbmQoe1xuICAgIGFkanVzdG1lbnQ6IDAsXG4gICAgZWFzZTogJ2Vhc2VPdXRTaW5lJyxcbiAgICBkdXJhdGlvbjogODAwLFxuICAgIGNvbnRhaW5lcjogJCgnYm9keSwgaHRtbCcpXG4gIH0sIG9wdHMpO1xuXG4gIC8vIEhhcyBhbiBlbGVtZW50IGJlZW4gc3VwcGxpZWQ/XG4gIGlmICgkZWxlbWVudC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBTY3JvbGwgdG8gdGhlIHRhcmdldCBlbGVtZW50IGFsbG93aW5nIGZvciB0aGUgdXRpbGl0eSBtZW51XG4gIG9wdHMuY29udGFpbmVyLnN0b3AoKS5hbmltYXRlKHtcbiAgICBzY3JvbGxUb3A6ICRlbGVtZW50Lm9mZnNldCgpLnRvcCAtIG9wdHMuYWRqdXN0bWVudFxuICB9LCBvcHRzLmR1cmF0aW9uLCBvcHRzLmVhc2UsICgpID0+IHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBGb3IgdW5pdCB0ZXN0c1xuICByZXR1cm4gb3B0cztcbn07XG5cbi8qKlxuICogRGV0ZWN0IE1vZGVybiBCcm93c2VyIGJ5IGF2YWlsYWJpbGl0eSBvZiBCaWdJbnQgZmVhdHVyZS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaGFzQmlnSW50U3VwcG9ydCA9ICgpID0+IHtcbiAgcmV0dXJuICh0eXBlb2YgQmlnSW50ID09PSAnZnVuY3Rpb24nKTtcbn07XG4iLCIvLyB1c2FnZTogd3JhcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhLndyYXBfbWUnKSwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuZXhwb3J0IGNvbnN0IHdyYXAgPSAoZWwsIHdyYXBwZXIpID0+IHtcbiAgZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWwpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsKTtcbn07XG5cbi8vIHVzYWdlOiB1bndyYXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYS51bndyYXBfbWUnKSk7XG5leHBvcnQgY29uc3QgdW53cmFwID0gKGVsKSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG4gIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50Lmluc2VydEJlZm9yZShlbC5maXJzdENoaWxkLCBlbCk7XG4gIH1cbiAgcGFyZW50LnJlbW92ZUNoaWxkKGVsKTtcbn07XG5cblxuLy8gd3JhcEFsbDogcmVwbGljYXRlcyBqUXVlcnkncyAkLndyYXBBbGwoKSBmb3Igbm9uLWpRdWVyeSBlbGVtZW50KHMpLCBleGFtcGxlIHVzYWdlOlxuLy8gICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIHdyYXBBbGwoY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RvcicpLCB3cmFwcGVyKTtcbmV4cG9ydCBjb25zdCB3cmFwQWxsID0gKGVsZW1lbnRzLCB3cmFwcGVyKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUFycmF5ID0gKGVsKSA9PiB7XG4gICAgcmV0dXJuIGVsIGluc3RhbmNlb2YgTm9kZUxpc3QgPyBbLi4uZWxdIDogW2VsXTtcbiAgfTtcbiAgY29uc3QgZWxlbWVudHNBcnJheSA9IGNyZWF0ZUFycmF5KGVsZW1lbnRzKTtcbiAgaWYgKCFlbGVtZW50c0FycmF5Lmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwYXJlbnQgPSBlbGVtZW50c0FycmF5WzBdLnBhcmVudE5vZGU7XG4gIHBhcmVudC5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbWVudHNBcnJheVswXSk7XG4gIGVsZW1lbnRzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xufTtcblxuLy8gSlMgcmVwbGFjZW1lbnQgZm9yIGpRdWVyeSAkLmFmdGVyKClcbmV4cG9ydCBjb25zdCBpbnNlcnRBZnRlciA9IChiZWZvcmUsIGFmdGVyKSA9PiBiZWZvcmUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYWZ0ZXIsIGJlZm9yZS5uZXh0U2libGluZyk7XG5cbi8vIEpTIHJlcGxhY2VtZW50IGZvciBqUXVlcnkgJC5iZWZvcmUoKVxuZXhwb3J0IGNvbnN0IGluc2VydEJlZm9yZSA9IChhZnRlciwgYmVmb3JlKSA9PiBhZnRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShiZWZvcmUsIGFmdGVyKTtcbiIsIi8qIGdsb2JhbCBhcHBSZWFkeVRpbWVyICovXG5cbmltcG9ydCB7IGlzQnJlYWtwb2ludFNtYWxsLCBnZXRCcmVha3BvaW50U2l6ZSB9IGZyb20gJy4vYnJvd3NlckRldGVjdGlvbic7XG5pbXBvcnQgeyBLZXlDb2RlIH0gZnJvbSAnLi9hcmlhJztcblxuY29uc3QgJG5hdkhlYWRlciA9ICQoJyNoZWFkZXIsIC5keG5hdi1oZWFkZXInKTtcbmV4cG9ydCBjb25zdCBzdGlja3lOYXZpZ2F0aW9uRW5hYmxlZCA9ICRuYXZIZWFkZXIuYXR0cignZGF0YS1uYXYtdHlwZScpID09PSAnc3RpY2t5JztcbmV4cG9ydCBjb25zdCBzdGlja3lOYXZpZ2F0aW9uVHJhbnNpdGlvblBvaW50ID0gMjAwO1xuY29uc3QgdGVtcGxhdGVDYWNoZSA9IHt9O1xuXG5leHBvcnQgY29uc3QgZ29vZ2xlTWFwU3R5bGVzID0gW1xuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eScsXG4gICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgY29sb3I6ICcjNjY2NjY2J1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ2xhbmRzY2FwZS5tYW5fbWFkZScsXG4gICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5maWxsJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgY29sb3I6ICcjZjhmNmY0J1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3BvaScsXG4gICAgZWxlbWVudFR5cGU6ICdsYWJlbHMnLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICB2aXNpYmlsaXR5OiAnb2ZmJ1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXG4gICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5maWxsJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgY29sb3I6ICcjYWZhYmE0J1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXG4gICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBjb2xvcjogJyNlNmU2ZTYnXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcbiAgICBlbGVtZW50VHlwZTogJ2xhYmVscycsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIHNhdHVyYXRpb246IC0xNVxuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheS5jb250cm9sbGVkX2FjY2VzcycsXG4gICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5maWxsJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgY29sb3I6ICcjYWZhYmE0J1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheS5jb250cm9sbGVkX2FjY2VzcycsXG4gICAgZWxlbWVudFR5cGU6ICdsYWJlbHMuaWNvbicsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIHNhdHVyYXRpb246IC0xMDBcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmxvY2FsJyxcbiAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LmZpbGwnLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBjb2xvcjogJyNmZmZmZmYnXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAncm9hZC5sb2NhbCcsXG4gICAgZWxlbWVudFR5cGU6ICdsYWJlbHMuaWNvbicsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIHNhdHVyYXRpb246ICc3NydcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICd0cmFuc2l0JyxcbiAgICBlbGVtZW50VHlwZTogJ2xhYmVscy5pY29uJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgc2F0dXJhdGlvbjogJy0xMDAnXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxuICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBjb2xvcjogJyNjNWQ3ZGUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IC05XG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgaXNSdGwgPSAoKSA9PiB7XG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdO1xuICByZXR1cm4gaHRtbC5jbGFzc0xpc3QuY29udGFpbnMoJ3J0bCcpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENhY2hlZFNjcmlwdCA9ICh1cmwsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgbmV3T3B0aW9ucyA9ICQuZXh0ZW5kKG9wdGlvbnMgfHwge30sIHtcbiAgICBkYXRhVHlwZTogJ3NjcmlwdCcsXG4gICAgY2FjaGU6IHRydWUsXG4gICAgdXJsXG4gIH0pO1xuXG4gIHJldHVybiAkLmFqYXgobmV3T3B0aW9ucyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SGVpZ2h0ID0gKGVsZW0pID0+IHtcbiAgcmV0dXJuIChlbGVtID8gZWxlbS5jbGllbnRIZWlnaHQgOiAwKTtcbn07XG5cbi8vIG1ha2Ugc3VyZSB0byBwYXNzICdvbGRDYWxjdWxhdGlvbiA9IGZhbHNlJyB0byB1c2UgdGhlIG5ldyByZWZpbmVkIGNhbGN1bGF0aW9uXG4vLyBvciB1c2UgZ2V0U3RpY2t5TmF2SGVpZ2h0VjIoKVxuZXhwb3J0IGNvbnN0IGdldFN0aWNreU5hdkhlaWdodCA9ICh5UG9zLCBvbGRDYWxjdWxhdGlvbiA9IHRydWUpID0+IHtcbiAgY29uc3QgeVBvc2l0aW9uID0gdHlwZW9mIHlQb3MgIT09ICdudW1iZXInID8gMCA6IHlQb3M7XG4gIGNvbnN0IHNoYXJlZEhlYWRlciA9ICQoJy5keG5hdi1oZWFkZXInKTtcbiAgY29uc3QgJGhlYWRlciA9IHNoYXJlZEhlYWRlci5sZW5ndGggPyBzaGFyZWRIZWFkZXIgOiAkKCcjaGVhZGVyJyk7XG4gIGNvbnN0ICRpblBhZ2VOYXYgPSAkKCcuSW5QYWdlTmF2aWdhdGlvbicpO1xuICBjb25zdCAkaW5QYWdlTmF2U3RpY2t5ID0gJCgnLkluUGFnZU5hdmlnYXRpb24tLXN0aWNreScpO1xuICBjb25zdCAkaW5QYWdlTmF2QmFyID0gJCgnLkluUGFnZU5hdmlnYXRpb25fX2JhcicpO1xuICBjb25zdCBkeE5hdlByaW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHhuYXZfX3ByaW1hcnknKTtcbiAgY29uc3QgYnJlYWtwb2ludCA9IGdldEJyZWFrcG9pbnRTaXplKCk7XG4gIGNvbnN0IGNoZWNrU3RpY2t5TmF2ID0gJGhlYWRlci5sZW5ndGggPiAwID8gJGhlYWRlci5jc3MoJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcgOiBmYWxzZTtcbiAgY29uc3QgaW5QYWdlTmF2VG9wID0gJGluUGFnZU5hdi5sZW5ndGggPiAwID8gJGluUGFnZU5hdi5vZmZzZXQoKS50b3AgOiBudWxsO1xuICBjb25zdCBpc1N0aWNreU5hdiA9IHNoYXJlZEhlYWRlci5sZW5ndGggPyB0cnVlIDogY2hlY2tTdGlja3lOYXY7XG4gIGxldCBoZWlnaHQgPSAwO1xuXG4gIGlmICghaXNTdGlja3lOYXYpIHtcbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgLy8gaGFyZCBjb2RpbmcgdmFsdWVzIGhlcmUgdG8gcHJldmVudCBoYXZpbmcgdG8gcmVwZWF0ZWRseSBjbG9uZSBhbmQgbWVhc3VyZSB0aGUgaGVhZGVyXG4gIGNvbnN0IG9sZE5hdkJyZWFrcG9pbnQgPSA5NjA7XG5cbiAgLy8gYWRkZWQgJGluUGFnZU5hdi5jc3MoJ2Rpc3BsYXknKSBjaGVjayBmb3IgTFJBLTEwODUxXG4gIGlmIChpblBhZ2VOYXZUb3AgIT09IG51bGwgJiYgeVBvc2l0aW9uID49IGluUGFnZU5hdlRvcCAmJiBicmVha3BvaW50ID09PSAnbGFyZ2UnICYmICRpblBhZ2VOYXYuY3NzKCdkaXNwbGF5JykgIT09ICdub25lJykge1xuICAgIHJldHVybiAkaW5QYWdlTmF2Lm91dGVySGVpZ2h0KCk7XG4gIH1cblxuICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gIC8vIHRoaXMgaXMgdGhlIG9sZCBuYXZpZ2F0aW9uLCBvbmx5IHNob3duIHdoZW4gTmFhUyBpcyBkb3duLCBoYXJkIGNvZGluZyB2YWx1ZXMgdG8gcHJldmVudCBoYXZpbmcgdG8gY2xvbmUvbWVhc3VyZSB0aGUgRE9NIGVsZW1lbnRzIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gIGNvbnN0IGdldE5hdmlnYXRpb25IZWlnaHQgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvd1dpZHRoID49IG9sZE5hdkJyZWFrcG9pbnQgJiYgeVBvc2l0aW9uIDwgMjAwKSB7XG4gICAgICByZXR1cm4gMTA2O1xuICAgIH1cbiAgICByZXR1cm4gNTA7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmFhU0hlaWdodCA9IChvbGQpID0+IHtcbiAgICBsZXQgcHJpbWFyeU5hdkhlaWdodDtcblxuICAgIGlmIChvbGQpIHtcbiAgICAgIHByaW1hcnlOYXZIZWlnaHQgPSBnZXRIZWlnaHQoZHhOYXZQcmltYXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJpbWFyeU5hdkhlaWdodCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHhuYXYtc2Nyb2xsRG93bicpID09PSBudWxsICYmICEkaW5QYWdlTmF2U3RpY2t5Lmxlbmd0aCkgPyBnZXRIZWlnaHQoZHhOYXZQcmltYXJ5KSArIHBhcnNlSW50KHNoYXJlZEhlYWRlci5jc3MoJ3RvcCcpLCAxMCkgOiAwO1xuICAgIH1cblxuICAgIGxldCBicmVhZGNydW1iTmF2SGVpZ2h0ID0gZ2V0SGVpZ2h0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5keG5hdl9fYnJlYWRjcnVtYnMtY29udGFpbmVyJykpO1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbkhlaWdodCA9IGdldEhlaWdodChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uQmFyc1dyYXBwZXInKSk7XG4gICAgbGV0IGluUGFnZU5hdmlnYXRpb25IZWlnaHQgPSAwO1xuICAgIGlmICgkaW5QYWdlTmF2Lmxlbmd0aCkge1xuICAgICAgaWYgKCRpblBhZ2VOYXZTdGlja3kubGVuZ3RoKSB7XG4gICAgICAgIGJyZWFkY3J1bWJOYXZIZWlnaHQgPSAwO1xuICAgICAgICBpZiAocGFyc2VJbnQoJGluUGFnZU5hdkJhci5jc3MoJ3RvcCcpLCAxMCkgPT09IDApIHtcbiAgICAgICAgICBpblBhZ2VOYXZpZ2F0aW9uSGVpZ2h0ID0gJGluUGFnZU5hdi5pbm5lckhlaWdodCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCgkaW5QYWdlTmF2QmFyLmNzcygndG9wJyksIDEwKSA8IDApIHtcbiAgICAgICAgICBpblBhZ2VOYXZpZ2F0aW9uSGVpZ2h0ID0gTWF0aC5tYXgoJGluUGFnZU5hdi5vdXRlckhlaWdodCgpICsgcGFyc2VJbnQoJGluUGFnZU5hdkJhci5jc3MoJ3RvcCcpLCAxMCksIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcmltYXJ5TmF2SGVpZ2h0ICsgYnJlYWRjcnVtYk5hdkhlaWdodCArIG5vdGlmaWNhdGlvbkhlaWdodCArIChvbGQgPyAwIDogaW5QYWdlTmF2aWdhdGlvbkhlaWdodCk7XG4gIH07XG5cbiAgaWYgKHNoYXJlZEhlYWRlci5sZW5ndGgpIHtcbiAgICBoZWlnaHQgPSBnZXROYWFTSGVpZ2h0KG9sZENhbGN1bGF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBoZWlnaHQgPSBnZXROYXZpZ2F0aW9uSGVpZ2h0KCk7XG4gIH1cblxuICByZXR1cm4gaGVpZ2h0O1xufTtcblxuLy8gc2hvdWxkIGJlIHVzZWQgdW50aWwgbWVyZ2VkIHdpdGggZ2V0TmF2aWdhdGlvbkhlaWdodFxuZXhwb3J0IGNvbnN0IGdldFN0aWNreU5hdkhlaWdodFYyID0gKHlQb3MpID0+IHtcbiAgcmV0dXJuIGdldFN0aWNreU5hdkhlaWdodCh5UG9zLCBmYWxzZSk7XG59O1xuXG5cbmV4cG9ydCBjb25zdCBzY3JvbGxUbyA9ICh0YXJnZXQsIGR1cmF0aW9uLCBjYWxsYmFjaywgZWFzaW5nLCBpZ25vcmVTdGlja3lOYXYsIHlPZmZzZXQgPSAwKSA9PiB7XG4gIGNvbnN0IG5ld0R1cmF0aW9uID0gKHR5cGVvZiBkdXJhdGlvbiAhPT0gJ251bWJlcicpID8gODAwIDogZHVyYXRpb247XG4gIGNvbnN0IG5ld0NhbGxiYWNrID0gKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykgPyBudWxsIDogY2FsbGJhY2s7XG4gIGNvbnN0IG5ld0Vhc2luZyA9ICh0eXBlb2YgZWFzaW5nICE9PSAnc3RyaW5nJykgPyAnZWFzZU91dFNpbmUnIDogZWFzaW5nO1xuICBsZXQgcG9zaXRpb24gPSAwO1xuXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJykgeyAvLyBQeCB2YWx1ZVxuICAgIHBvc2l0aW9uID0gdGFyZ2V0O1xuICB9IGVsc2UgeyAvLyBFbGVtZW50XG4gICAgY29uc3QgJHRhcmdldEVsID0gdGFyZ2V0IHx8ICQoJ2JvZHknKTtcbiAgICBwb3NpdGlvbiA9ICR0YXJnZXRFbC5vZmZzZXQoKS50b3A7XG4gIH1cblxuICBpZiAoaWdub3JlU3RpY2t5TmF2ICE9PSB0cnVlKSB7XG4gICAgcG9zaXRpb24gLT0gZ2V0U3RpY2t5TmF2SGVpZ2h0KHBvc2l0aW9uKTtcbiAgfVxuXG4gICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZShcbiAgICB7IHNjcm9sbFRvcDogcG9zaXRpb24gKyB5T2Zmc2V0IH0sXG4gICAgbmV3RHVyYXRpb24sXG4gICAgbmV3RWFzaW5nXG4gIClcbiAgICAucHJvbWlzZSgpXG4gICAgLmRvbmUobmV3Q2FsbGJhY2spO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrRGVlcExpbmsgPSAoaHJlZikgPT4ge1xuICBsZXQgZGVlcExpbmsgPSBmYWxzZTtcbiAgY29uc3Qgc3BlZWQgPSAyLjU7XG5cbiAgY29uc3QgaGFzaFBvcyA9IGhyZWYuaW5kZXhPZignIycpO1xuICBpZiAoaGFzaFBvcyArIDEgPCBocmVmLmxlbmd0aCAmJiBoYXNoUG9zICE9PSAtMSkge1xuICAgIGNvbnN0IGlkID0gaHJlZi5zdWJzdHJpbmcoaGFzaFBvcywgaHJlZi5sZW5ndGgpO1xuICAgIGlmICgkKGlkKS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxldCBsb2NhdGlvbiA9ICQoaWQpO1xuICAgICAgbGV0IGR1cmF0aW9uID0gbG9jYXRpb24ub2Zmc2V0KCkudG9wIC8gc3BlZWQ7XG5cbiAgICAgIC8vIExSQS0xMzc5NCB8IEFjY29yZGlvbkNvbnRhaW5lciB8IE9wZW4gYWNjb3JkaW9uIGZpcnN0IGlmIGRlZXBsaW5rIGlzIGluc2lkZVxuICAgICAgaWYgKCQoJ2hlYWQgW25hbWU9XCJhY2NvcmRpb25Pbk1vYmlsZVwiXScpLmxlbmd0aCAmJiBpc0JyZWFrcG9pbnRTbWFsbCgpKSB7XG4gICAgICAgIGNvbnN0IGFjY29yZGlvblBhcmVudCA9IGxvY2F0aW9uLmNsb3Nlc3QoJy5hY2NvcmRpb24tZ3JvdXAnKTtcbiAgICAgICAgY29uc3QgYWNjb3JkaW9uVGl0bGUgPSBhY2NvcmRpb25QYXJlbnQuZmluZCgnLmFjY29yZGlvbi1ncm91cC10aXRsZScpO1xuXG4gICAgICAgIGlmIChhY2NvcmRpb25QYXJlbnQubGVuZ3RoICYmIGFjY29yZGlvblRpdGxlLmxlbmd0aCkge1xuICAgICAgICAgIC8vIE9wZW4gYWNjb3JkaW9uIGlmIGNsb3NlZFxuICAgICAgICAgIGlmICghYWNjb3JkaW9uUGFyZW50Lmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgIGFjY29yZGlvblRpdGxlLmNsaWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVGFrZSBpbnRvIGFjY291bnQgdGhlIGhlaWdodCBvZiB0aGUgYWNjb3JkaW9uIHRpdGxlXG4gICAgICAgICAgbG9jYXRpb24gPSBsb2NhdGlvbi5vZmZzZXQoKS50b3AgLSBhY2NvcmRpb25UaXRsZS5vdXRlckhlaWdodCgpO1xuXG4gICAgICAgICAgc2Nyb2xsVG8obG9jYXRpb24sIDgwMCwgbnVsbCwgJ2Vhc2VPdXRTaW5lJyk7XG4gICAgICAgICAgZGVlcExpbmsgPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobG9jYXRpb24ucGFyZW50cygnLlRhYmJlZENvbnRhaW5lcicpLmxlbmd0aCkge1xuICAgICAgICBjb25zdCAkY29udGFpbmVyID0gbG9jYXRpb24uY2xvc2VzdCgnLlRhYmJlZENvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkdGFicyA9ICRjb250YWluZXIuZmluZCgnLnRhYicpO1xuICAgICAgICBjb25zdCAkdGFiTGlua3MgPSAkY29udGFpbmVyLmZpbmQoJy50YWItbGluaycpO1xuICAgICAgICBsZXQgdGFiSW5kZXggPSAwO1xuXG4gICAgICAgICR0YWJzLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgY29uc3QgJGxvY2F0aW9uID0gJChlbCkuZmluZChsb2NhdGlvbik7XG4gICAgICAgICAgaWYgKCRsb2NhdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRhYkluZGV4ID0gaTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICR0YWJMaW5rcy5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgIGlmIChpID09PSB0YWJJbmRleCkge1xuICAgICAgICAgICAgJChlbCkuY2xpY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvY2F0aW9uID0gJGNvbnRhaW5lci5vZmZzZXQoKS50b3A7XG4gICAgICAgIGR1cmF0aW9uID0gbG9jYXRpb24gLyBzcGVlZDtcblxuICAgICAgICBzY3JvbGxUbyhsb2NhdGlvbiwgODAwLCBudWxsLCAnZWFzZVN0YXJ0RmFzdEVuZFNsb3cnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIH1cblxuICAgICAgLy8gTFJBLTEyNzAxIHwgTDQ2MiBUZXN0IHwgT3BlbiBhY2NvcmRpb24gZmlyc3QgaWYgZGVlcGxpbmsgaXMgaW5zaWRlXG4gICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCd2ZWhpY2xlc0Rpc2NvdmVyeScpKSB7XG4gICAgICAgIGNvbnN0IGFjY29yZGlvblBhcmVudCA9IGxvY2F0aW9uLnBhcmVudHMoJy5BY2NvcmRpb25Db250YWluZXInKTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICQobG9jYXRpb24pO1xuXG4gICAgICAgIGlmIChhY2NvcmRpb25QYXJlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgYWNjb3JkaW9uSGVhZGVyID0gYWNjb3JkaW9uUGFyZW50LmZpbmQoJy5oZWFkZXInKTtcblxuICAgICAgICAgIGlmICghYWNjb3JkaW9uSGVhZGVyLmhhc0NsYXNzKCdhY2NvcmRpb24tb3BlbicpKSB7XG4gICAgICAgICAgICBhY2NvcmRpb25IZWFkZXIuY2xpY2soKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYWNjb3JkaW9uSGVhZGVyLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICBpZiAoIWxvY2F0aW9uLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgIGxvY2F0aW9uID0gbG9jYXRpb24ub2Zmc2V0KCkudG9wXG4gICAgICAgICAgICAgICAgLSBhY2NvcmRpb25IZWFkZXIub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgZWxlbWVudC5jc3MoJ2Rpc3BsYXknLCAnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uLm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgICAgIC0gYWNjb3JkaW9uSGVhZGVyLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNjcm9sbFRvKGxvY2F0aW9uLCBkdXJhdGlvbiwgbnVsbCwgJ2Vhc2VTdGFydEZhc3RFbmRTbG93Jyk7XG4gICAgICBkZWVwTGluayA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKGBDb3VsZCBub3QgZmluZCBkZWVwIGxpbmsgZWxlbWVudCB3aXRoIGlkOiAke2lkfWApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVlcExpbms7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn07XG5cbmV4cG9ydCBjb25zdCBpc1BhZ2VJbklmcmFtZSA9ICgpID0+IHtcbiAgcmV0dXJuIHdpbmRvdy5zZWxmICE9PSB3aW5kb3cudG9wO1xufTtcblxuZXhwb3J0IGNvbnN0IGluc2lkZVRhYmJlZENvbnRhaW5lciA9IChlbCkgPT4ge1xuICBjb25zdCBpc0luc2lkZVRhYmJlZENvbnRhaW5lciA9ICEhZWwucGFyZW50cygnLlRhYmJlZENvbnRhaW5lcicpLm5vdCgnW2RhdGEtdG90YWw9XCIxXCJdJykubGVuZ3RoO1xuXG4gIGlmIChpc0luc2lkZVRhYmJlZENvbnRhaW5lcikge1xuICAgIHJldHVybiBlbC5wYXJlbnRzKCcuVGFiYmVkQ29udGFpbmVyJyk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgbW9iaWxlQWNjb3JkaW9uc0FjdGl2YXRlZCA9ICgpID0+IHtcbiAgcmV0dXJuICQoJ2hlYWQgW25hbWU9XCJhY2NvcmRpb25Pbk1vYmlsZVwiXScpLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVIVE1MVGFncyA9IChzKSA9PiB7XG4gIHJldHVybiBzLnRvU3RyaW5nKCkucmVwbGFjZSgvWzw+PTtdL2csICcnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVcmxQYXJhbWV0ZXIgPSAoc1BhcmFtKSA9PiB7XG4gIGZ1bmN0aW9uIGRlY29kZShzKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCgocyB8fCAnJykucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICB9XG5cbiAgY29uc3Qgc1BhZ2VVUkwgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgY29uc3Qgc1VSTFZhcmlhYmxlcyA9IHNQYWdlVVJMLnNwbGl0KCcmJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzVVJMVmFyaWFibGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc1BhcmFtZXRlclNwbGl0ID0gc1VSTFZhcmlhYmxlc1tpXS5zcGxpdCgnPScpO1xuICAgIGlmIChkZWNvZGUoc1BhcmFtZXRlclNwbGl0WzBdKSA9PT0gc1BhcmFtKSB7XG4gICAgICByZXR1cm4gZGVjb2RlKHNQYXJhbWV0ZXJTcGxpdFsxXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUGFyYW1ldGVyVG9VUkwgPSAodXJsLCBwYXJhbSkgPT4ge1xuICBjb25zdCBuZXdVcmwgPSB1cmwgKyAodXJsLnNwbGl0KCc/JylbMV0gPyAnJicgOiAnPycpICsgcGFyYW07XG5cbiAgcmV0dXJuIHBhcmFtICE9PSAnJyA/IG5ld1VybCA6IHVybDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRPYmplY3RLZXlzID0gKG9iaikgPT4ge1xuICBjb25zdCBrZXlzID0gW107XG4gIGZvciAobGV0IGkgaW4gb2JqKSB7IC8vZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAga2V5cy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4ga2V5cztcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5leHBvcnQgY29uc3QgY2FudmFzRHJhd0JnQ292ZXIgPSAoY3R4LCBpbWcsIHgsIHksIHcsIGgsIG9mZnNldFgsIG9mZnNldFkpID0+IHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICB4ID0geSA9IDA7XG4gICAgdyA9IGN0eC5jYW52YXMud2lkdGg7XG4gICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuICB9XG5cbiAgLy8gZGVmYXVsdCBvZmZzZXQgaXMgY2VudGVyXG4gIG9mZnNldFggPSB0eXBlb2Ygb2Zmc2V0WCA9PT0gJ251bWJlcicgPyBvZmZzZXRYIDogMC41O1xuICBvZmZzZXRZID0gdHlwZW9mIG9mZnNldFkgPT09ICdudW1iZXInID8gb2Zmc2V0WSA6IDAuNTtcblxuICAvLyBrZWVwIGJvdW5kcyBbMC4wLCAxLjBdXG4gIGlmIChvZmZzZXRYIDwgMCkge1xuICAgIG9mZnNldFggPSAwO1xuICB9XG4gIGlmIChvZmZzZXRZIDwgMCkge1xuICAgIG9mZnNldFkgPSAwO1xuICB9XG4gIGlmIChvZmZzZXRYID4gMSkge1xuICAgIG9mZnNldFggPSAxO1xuICB9XG4gIGlmIChvZmZzZXRZID4gMSkge1xuICAgIG9mZnNldFkgPSAxO1xuICB9XG5cbiAgdmFyIGl3ID0gaW1nLndpZHRoLFxuICAgIGloID0gaW1nLmhlaWdodCxcbiAgICByID0gTWF0aC5taW4odyAvIGl3LCBoIC8gaWgpLFxuICAgIG53ID0gaXcgKiByLCAgIC8vIG5ldyBwcm9wLiB3aWR0aFxuICAgIG5oID0gaWggKiByLCAgIC8vIG5ldyBwcm9wLiBoZWlnaHRcbiAgICBjeCwgY3ksIGN3LCBjaCwgYXIgPSAxO1xuXG4gIC8vIGRlY2lkZSB3aGljaCBnYXAgdG8gZmlsbFxuICBpZiAobncgPCB3KSB7XG4gICAgYXIgPSB3IC8gbnc7XG4gIH1cbiAgaWYgKG5oIDwgaCkge1xuICAgIGFyID0gaCAvIG5oO1xuICB9XG4gIG53ICo9IGFyO1xuICBuaCAqPSBhcjtcblxuICAvLyBjYWxjIHNvdXJjZSByZWN0YW5nbGVcbiAgY3cgPSBpdyAvIChudyAvIHcpO1xuICBjaCA9IGloIC8gKG5oIC8gaCk7XG5cbiAgY3ggPSAoaXcgLSBjdykgKiBvZmZzZXRYO1xuICBjeSA9IChpaCAtIGNoKSAqIG9mZnNldFk7XG5cbiAgLy8gbWFrZSBzdXJlIHNvdXJjZSByZWN0YW5nbGUgaXMgdmFsaWRcbiAgaWYgKGN4IDwgMCkge1xuICAgIGN4ID0gMDtcbiAgfVxuICBpZiAoY3kgPCAwKSB7XG4gICAgY3kgPSAwO1xuICB9XG4gIGlmIChjdyA+IGl3KSB7XG4gICAgY3cgPSBpdztcbiAgfVxuICBpZiAoY2ggPiBpaCkge1xuICAgIGNoID0gaWg7XG4gIH1cblxuICAvLyBmaWxsIGltYWdlIGluIGRlc3QuIHJlY3RhbmdsZVxuICBjdHguZHJhd0ltYWdlKGltZywgY3gsIGN5LCBjdywgY2gsIHgsIHksIHcsIGgpO1xufTtcbi8qIGVzbGludC1lbmFibGUgKi9cblxuZXhwb3J0IGNvbnN0IGhhc1BsYWNlaG9sZGVyU3VwcG9ydCA9ICgpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICByZXR1cm4gKCdwbGFjZWhvbGRlcicgaW4gZWwpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzUGFnZUluWFBNRnJhbWUgPSAoKSA9PiB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93LlRyaWRpb24gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuVHJpZGlvbi5XZWIuVUkuU2l0ZUVkaXQgIT09ICd1bmRlZmluZWQnO1xufTtcblxuZXhwb3J0IGNvbnN0IGVsZW1lbnRJblZpZXdwb3J0ID0gKGVsZW1lbnQsIGFkanVzdCwgd2luZG93SW5uZXJIZWlnaHQpID0+IHtcbiAgY29uc3QgJGVsZW1lbnQgPSBlbGVtZW50IGluc3RhbmNlb2YgalF1ZXJ5ID8gZWxlbWVudCA6ICQoZWxlbWVudCk7XG5cbiAgaWYgKCEkZWxlbWVudC5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCAkd2luZG93ID0gJCh3aW5kb3cpO1xuICBjb25zdCBzY3JvbGxUb3AgPSAkd2luZG93LnNjcm9sbFRvcCgpO1xuICBsZXQgd2luZG93SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcbiAgbGV0IGFkanVzdFRvcDtcbiAgbGV0IGFkanVzdEJvdHRvbTtcblxuICAvLyBFbGVtZW50IHNwZWNpZmljc1xuICBjb25zdCBlbE9mZnNldCA9ICRlbGVtZW50Lm9mZnNldCgpO1xuICBjb25zdCBlbFRvcCA9IGVsT2Zmc2V0LnRvcDtcbiAgY29uc3QgZWxCb3R0b20gPSBlbFRvcCArICRlbGVtZW50LmhlaWdodCgpO1xuXG4gIC8vIERlZmF1bHQgdmFsdWVcbiAgY29uc3QgZGVmYXVsdEFkanVzdCA9IChnZXRCcmVha3BvaW50U2l6ZSgpID09PSAnc21hbGwnKSA/IDIwIDogNTA7XG5cbiAgLy8gTFJBLTExNDk0IEZpeCBpT1MgaXNzdWUgd2l0aCB3aW5kb3cgaGVpZ2h0LlxuICAvLyBUZW1wb3JhcmlseSBhZGQgb3B0aW9uIHRvIGFsbG93IHRoaXMgc28gUUEgaXMgbm90XG4gIC8vIHJlcXVpcmVkIG9uIFN0b3J5R2FsbGVyeSArIFN0b3J5QXJ0aWNsZUVuaGFuY2VkSW1hZ2VCbG9ja1xuICBpZiAodHlwZW9mIHdpbmRvd0lubmVySGVpZ2h0ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3dJbm5lckhlaWdodCkge1xuICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHdpbmRvd0hlaWdodDtcbiAgfVxuXG4gIC8vIFNldCB2aWV3cG9ydEJvdHRvbVxuICBjb25zdCB2aWV3cG9ydEJvdHRvbSA9IHNjcm9sbFRvcCArIHdpbmRvd0hlaWdodDtcblxuICAvLyBBbGxvdyBhZGp1c3QgdG8gYmUgc2V0IGRpZmZlcmVudCBmcm9tIHRvcC9ib3R0b21cbiAgaWYgKHR5cGVvZiBhZGp1c3QgPT09ICdvYmplY3QnKSB7XG4gICAgYWRqdXN0VG9wID0gYWRqdXN0LnRvcDtcbiAgICBhZGp1c3RCb3R0b20gPSBhZGp1c3QuYm90dG9tO1xuICB9IGVsc2Uge1xuICAgIGFkanVzdFRvcCA9IGFkanVzdCB8fCBkZWZhdWx0QWRqdXN0O1xuICAgIGFkanVzdEJvdHRvbSA9IGFkanVzdCB8fCBkZWZhdWx0QWRqdXN0O1xuICB9XG5cbiAgcmV0dXJuICghKHZpZXdwb3J0Qm90dG9tIDwgZWxUb3AgKyBhZGp1c3RUb3AgfHwgc2Nyb2xsVG9wID4gZWxCb3R0b20gLSBhZGp1c3RCb3R0b20pKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21TdHJpbmcgPSAobGVuZ3RoKSA9PiB7XG4gIGxldCBmb3JtYXR0ZWRMZW5ndGggPSBwYXJzZUludChsZW5ndGgsIDEwKSB8fCAwO1xuICBmb3JtYXR0ZWRMZW5ndGggPSBmb3JtYXR0ZWRMZW5ndGggPCAwID8gMCA6IGZvcm1hdHRlZExlbmd0aDtcblxuICBjb25zdCBjaGFycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xuICBjb25zdCBjaG9zZW4gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1hdHRlZExlbmd0aDsgaSArPSAxKSB7XG4gICAgY2hvc2VuLnB1c2goY2hhcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJzLmxlbmd0aCkpKTtcbiAgfVxuXG4gIHJldHVybiBjaG9zZW4uam9pbignJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RWFzaW5nVmFsdWUgPSAocmF0aW8pID0+IHtcbiAgbGV0IGZvcm1hdHRlZFJhdGlvID0gcmF0aW8gPCAwID8gMCA6IHJhdGlvO1xuICBmb3JtYXR0ZWRSYXRpbyA9IGZvcm1hdHRlZFJhdGlvID4gMSA/IDEgOiBmb3JtYXR0ZWRSYXRpbztcblxuICAvLyBDb252ZXJ0IHRoZSByYXRpbyB0byBhIG51bWJlciBvZiByYWRpYW5zLiAwIG1hcHMgdG8gLVBJLCAwLjUgbWFwcyB0b1xuICAvLyAwLCAxIG1hcHMgdG8gUElcbiAgY29uc3QgcmFkaWFucyA9IChmb3JtYXR0ZWRSYXRpbyAqICgyICogTWF0aC5QSSkpIC0gTWF0aC5QSTtcblxuICAvLyBDb252ZXJ0IHRoaXMgdG8gYSB2YWx1ZSB1c2luZyBhIGNvc2luZSBjdXJ2ZS4gTm90ZSB0aGF0IGNvc2luZSBnaXZlc1xuICAvLyBhIHZhbHVlIGJldHdlZW4gLTEgYW5kIDEsIHNvIHdlIG5lZWQgdG8gYWRkIDEgYW5kIGRpdmlkZSBieSAyIHRvXG4gIC8vIGtlZXAgaXQgYmV0d2VlbiAwIGFuZCAxXG4gIHJldHVybiAoTWF0aC5jb3MocmFkaWFucykgKyAxKSAvIDI7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZVNjcm9sbCA9ICgpID0+IHtcbiAgY29uc3QgJHdpbmRvdyA9ICQod2luZG93KTtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcblxuICAkd2luZG93Lm9uKFxuICAgICdzY3JvbGwuZGlzYWJsZVNjcm9sbCBtb3VzZXdoZWVsLmRpc2FibGVTY3JvbGwgRE9NTW91c2VTY3JvbGwuZGlzYWJsZVNjcm9sbCB0b3VjaG1vdmUuZGlzYWJsZVNjcm9sbCcsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJHdpbmRvdy5zY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZW5hYmxlU2Nyb2xsID0gKCkgPT4ge1xuICBjb25zdCAkd2luZG93ID0gJCh3aW5kb3cpO1xuXG4gICR3aW5kb3cub2ZmKCdzY3JvbGwuZGlzYWJsZVNjcm9sbCBtb3VzZXdoZWVsLmRpc2FibGVTY3JvbGwgRE9NTW91c2VTY3JvbGwuZGlzYWJsZVNjcm9sbCB0b3VjaG1vdmUuZGlzYWJsZVNjcm9sbCcpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbWl0TnVtYmVyID0gKHZhbHVlLCBtaW4sIG1heCkgPT4ge1xuICBpZiAobWluID4gbWF4KSB7XG4gICAgY29uc3Qgb2xkTWluID0gbWluO1xuICAgIG1pbiA9IG1heDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIG1heCA9IG9sZE1pbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG5cbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWx1ZSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRJZ25vcmVkUmVzcG9uc2l2ZUltYWdlcyA9ICgkaW1hZ2VzKSA9PiB7XG4gICRpbWFnZXMucmVtb3ZlQXR0cignZGF0YS1waWN0dXJlLWlnbm9yZScpO1xuICB3aW5kb3cucmljaHNwb25zaXZlSW1hZ2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0aHJvdHRsZSA9IChmbiwgdGhyZXNoaG9sZCwgc2NvcGUpID0+IHtcbiAgY29uc3QgdGhyZXNoID0gdGhyZXNoaG9sZCB8fCAyNTA7XG4gIGxldCBsYXN0O1xuICBsZXQgZGVmZXJUaW1lcjtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzY29wZSB8fCB0aGlzO1xuXG4gICAgY29uc3Qgbm93ID0gK25ldyBEYXRlKCk7XG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcbiAgICBpZiAobGFzdCAmJiBub3cgPCBsYXN0ICsgdGhyZXNoKSB7XG4gICAgICAvLyBob2xkIG9uIHRvIGl0XG4gICAgICBjbGVhclRpbWVvdXQoZGVmZXJUaW1lcik7XG4gICAgICBkZWZlclRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxhc3QgPSBub3c7XG4gICAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfSwgdGhyZXNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdCA9IG5vdztcbiAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn07XG5cbi8qKiAqXG4gKiBNZWFzdXJlIHRleHQgd2lkdGggdXNpbmcgQnJvd3Nlci5cbiAqXG4gKiBAcGFyYW0gdGV4dFxuICogQHBhcmFtIHBhcmVudFxuICogQHJldHVybiB7bnVtYmVyfVxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBDTVMgUG93ZXJlZCBzb2x1dGlvbiBpbiBmdXR1cmUuXG4gKi9cbmV4cG9ydCBjb25zdCBtZWFzdXJlVGV4dFdpZHRoID0gKHRleHQsIHBhcmVudCkgPT4ge1xuICBpZiAoIXRleHQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbnN0IHBhciA9IHBhcmVudCB8fCBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBjb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnYXV0byc7XG4gIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gJzAnO1xuICBjb250YWluZXIuc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gdGV4dDtcblxuICBwYXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgY29uc3Qgd2lkdGggPSBjb250YWluZXIuY2xpZW50V2lkdGg7XG4gIHBhci5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuXG4gIHJldHVybiB3aWR0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUcmFuc2l0aW9uRW5kRXZlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZWVsZW1lbnQnKTtcbiAgY29uc3QgdHJhbnNpdGlvbnMgPSB7XG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgIE9UcmFuc2l0aW9uOiAnIG9UcmFuc2l0aW9uRW5kJyxcbiAgICBNb3pUcmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gIH07XG5cbiAgZm9yIChjb25zdCB0cmFuc2l0aW9uIGluIHRyYW5zaXRpb25zKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAoZWwuc3R5bGVbdHJhbnNpdGlvbl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb25zW3RyYW5zaXRpb25dO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5leHBvcnQgY29uc3QgdGVtcGxhdGUgPSAoc3RyLCBkYXRhKSA9PiB7XG4gIC8vIEZpZ3VyZSBvdXQgaWYgd2UncmUgZ2V0dGluZyBhIHRlbXBsYXRlLCBvciBpZiB3ZSBuZWVkIHRvXG4gIC8vIGxvYWQgdGhlIHRlbXBsYXRlIC0gYW5kIGJlIHN1cmUgdG8gY2FjaGUgdGhlIHJlc3VsdC5cbiAgdmFyIGZuID0gIS9cXFcvLnRlc3Qoc3RyKSA/XG4gICAgdGVtcGxhdGVDYWNoZVtzdHJdID0gdGVtcGxhdGVDYWNoZVtzdHJdIHx8XG4gICAgdGVtcGxhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3RyKS5pbm5lckhUTUwpIDpcblxuICAgIC8vIEdlbmVyYXRlIGEgcmV1c2FibGUgZnVuY3Rpb24gdGhhdCB3aWxsIHNlcnZlIGFzIGEgdGVtcGxhdGVcbiAgICAvLyBnZW5lcmF0b3IgKGFuZCB3aGljaCB3aWxsIGJlIGNhY2hlZCkuXG4gICAgbmV3IEZ1bmN0aW9uKFwib2JqXCIsXG4gICAgICBcInZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O1wiICtcblxuICAgICAgLy8gSW50cm9kdWNlIHRoZSBkYXRhIGFzIGxvY2FsIHZhcmlhYmxlcyB1c2luZyB3aXRoKCl7fVxuICAgICAgXCJ3aXRoKG9iail7cC5wdXNoKCdcIiArXG5cbiAgICAgIC8vIENvbnZlcnQgdGhlIHRlbXBsYXRlIGludG8gcHVyZSBKYXZhU2NyaXB0XG4gICAgICBzdHIucmVwbGFjZSgvW1xcclxcdFxcbl0vZywgXCIgXCIpXG4gICAgICAgIC5yZXBsYWNlKC8nKD89W14lXSolPikvZywgXCJcXHRcIilcbiAgICAgICAgLnNwbGl0KFwiJ1wiKS5qb2luKFwiXFxcXCdcIilcbiAgICAgICAgLnNwbGl0KFwiXFx0XCIpLmpvaW4oXCInXCIpXG4gICAgICAgIC5yZXBsYWNlKC88JT0oLis/KSU+L2csIFwiJywkMSwnXCIpXG4gICAgICAgIC5zcGxpdChcIjwlXCIpLmpvaW4oXCInKTtcIilcbiAgICAgICAgLnNwbGl0KFwiJT5cIikuam9pbihcInAucHVzaCgnXCIpXG4gICAgICArIFwiJyk7fXJldHVybiBwLmpvaW4oJycpO1wiKTtcblxuICAvLyBQcm92aWRlIHNvbWUgYmFzaWMgY3VycnlpbmcgdG8gdGhlIHVzZXJcbiAgcmV0dXJuIGRhdGEgPyBmbihkYXRhKSA6IGZuO1xufTtcbi8qIGVzbGludC1lbmFibGUgKi9cblxuZXhwb3J0IGNvbnN0IGlzSW5WaWV3cG9ydCA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IHdpbiA9ICQod2luZG93KTtcblxuICBjb25zdCB2aWV3cG9ydCA9IHtcbiAgICB0b3A6IHdpbi5zY3JvbGxUb3AoKSArIGdldFN0aWNreU5hdkhlaWdodCgpLFxuICAgIGJvdHRvbTogd2luLnNjcm9sbFRvcCgpICsgd2luLmhlaWdodCgpLFxuICAgIGxlZnQ6IHdpbi5zY3JvbGxMZWZ0KClcbiAgfTtcbiAgdmlld3BvcnQucmlnaHQgPSB2aWV3cG9ydC5sZWZ0ICsgd2luLndpZHRoKCk7XG5cbiAgY29uc3QgYm91bmRzID0gZWxlbWVudC5vZmZzZXQoKTtcbiAgYm91bmRzLnJpZ2h0ID0gYm91bmRzLmxlZnQgKyBlbGVtZW50Lm91dGVyV2lkdGgoKTtcbiAgYm91bmRzLmJvdHRvbSA9IGJvdW5kcy50b3AgKyBlbGVtZW50Lm91dGVySGVpZ2h0KCk7XG5cbiAgcmV0dXJuICghKHZpZXdwb3J0LnJpZ2h0IDwgYm91bmRzLmxlZnQgfHwgdmlld3BvcnQubGVmdCA+IGJvdW5kcy5yaWdodCB8fCB2aWV3cG9ydC5ib3R0b20gPCBib3VuZHMudG9wIHx8IHZpZXdwb3J0LnRvcCA+IGJvdW5kcy5ib3R0b20pKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxJZk5vdEluVmlld3BvcnQgPSAoZWxlbWVudCwgZGlzcGxheVRvQm90dG9tKSA9PiB7XG4gIGlmICghaXNJblZpZXdwb3J0KGVsZW1lbnQpKSB7XG4gICAgLy8gTm90IGluIHZpZXdcbiAgICBjb25zdCBzY3JvbGxUb1BvcyA9IGRpc3BsYXlUb0JvdHRvbSA/IGVsZW1lbnQub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLmlubmVySGVpZ2h0KCkgOiAoZWxlbWVudC5vZmZzZXQoKS50b3BcbiAgICAgIC0gZ2V0U3RpY2t5TmF2SGVpZ2h0KCkpO1xuICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHNjcm9sbFRvUG9zIH0sIDgwMCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTGFuZFJvdmVyID0gKCkgPT4ge1xuICByZXR1cm4gISEoJCgnYm9keSNsYW5kcm92ZXInKS5sZW5ndGgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRhYmJhYmxlID0gKGVsZW0sIGN1c3RvbVNlbGVjdG9ycykgPT4ge1xuICBjb25zdCBkZWZhdWx0U2VsZWN0b3JzID0gW1xuICAgICdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFtoaWRkZW5dKScsXG4gICAgJ3NlbGVjdCcsXG4gICAgJ2FbaHJlZl0nLFxuICAgICd0ZXh0YXJlYScsXG4gICAgJ2J1dHRvbicsXG4gICAgJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleF49XCItXCJdKSdcbiAgXTtcblxuICBjb25zdCBzZWxlY3RvclR5cGVzID0gKGN1c3RvbVNlbGVjdG9ycykgPyBkZWZhdWx0U2VsZWN0b3JzLmNvbmNhdChjdXN0b21TZWxlY3RvcnMpIDogZGVmYXVsdFNlbGVjdG9ycztcbiAgbGV0IHNlbGVjdG9ycyA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvclR5cGVzLmpvaW4oJywnKSk7XG4gIHNlbGVjdG9ycyA9IEFycmF5LmZyb20oc2VsZWN0b3JzKTtcbiAgc2VsZWN0b3JzID0gc2VsZWN0b3JzLmZpbHRlcigoc2VsZWN0b3IpID0+IHtcbiAgICBsZXQgdGFiYmFibGUgPSB0cnVlO1xuICAgIGlmICghc2VsZWN0b3Iub2Zmc2V0UGFyZW50IHx8IHNlbGVjdG9yLm9mZnNldFdpZHRoID09PSAwXG4gICAgICB8fCBzZWxlY3Rvci5vZmZzZXRIZWlnaHQgPT09IDApIHtcbiAgICAgIHRhYmJhYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNJbnZpc2libGUoZWwpIHtcbiAgICAgIGlmIChlbC5zdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJyB8fCBlbC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgdGFiYmFibGUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoZWwucGFyZW50Tm9kZSAmJiBlbC5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIGlzSW52aXNpYmxlKGVsLnBhcmVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpc0ludmlzaWJsZShzZWxlY3Rvcik7XG4gICAgaWYgKHRhYmJhYmxlKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIHJldHVybiBzZWxlY3RvcnM7XG59O1xuXG5leHBvcnQgY29uc3QgbG9ja1RhYmJhYmxlcyA9ICh0YWJiYWJsZXMpID0+IHtcbiAgdGFiYmFibGVzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXlDb2RlICE9PSBLZXlDb2RlLlRBQikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBpZiAodGFiYmFibGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRhYmJhYmxlc1swXS5mb2N1cygpO1xuICAgICAgICB9IGVsc2UgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICB0YWJiYWJsZXNbdGFiYmFibGVzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFiYmFibGVzW2kgKyAxXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IHRhYmJhYmxlcy5sZW5ndGggLSAxICYmICFlLnNoaWZ0S2V5KSB7XG4gICAgICAgIHRhYmJhYmxlc1swXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgIHRhYmJhYmxlc1tpIC0gMV0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYmJhYmxlc1tpICsgMV0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYmFsYW5jZUVsZW1lbnRIZWlnaHQgPSAoZWxlbWVudHMsIGFsbG93ZWRPZmZzZXQgPSAwKSA9PiB7XG4gIGNvbnN0IGNvbHVtbnMgPSB7fTtcbiAgaWYgKCFlbGVtZW50cykge1xuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG4gIGNvbnN0IGVsZW1lbnRzQXJyYXkgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnRzKTtcbiAgbGV0IGhlaWdodFRvdGFsID0gMDtcbiAgY29uc3QgaGVpZ2h0c0FycmF5ID0gZWxlbWVudHNBcnJheS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50SGVpZ2h0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgaGVpZ2h0VG90YWwgKz0gZWxlbWVudEhlaWdodDtcbiAgICByZXR1cm4gZWxlbWVudEhlaWdodDtcbiAgfSk7XG4gIGNvbnN0IGdldEJhbGFuY2VkSW5kZXggPSAoYXJyYXksIHRhcmdldCwgcnVubmluZ1RvdGFsID0gMCwgaW5kZXggPSAwKSA9PiB7XG4gICAgY29uc3QgaXNSZWN1cnNpdmUgPSAhIWFycmF5W2luZGV4XSAmJiBydW5uaW5nVG90YWwgKyBhcnJheVtpbmRleF0gPD0gKHRhcmdldCAtIGFsbG93ZWRPZmZzZXQpO1xuICAgIHJldHVybiBpc1JlY3Vyc2l2ZSA/IGdldEJhbGFuY2VkSW5kZXgoYXJyYXksIHRhcmdldCwgcnVubmluZ1RvdGFsICsgYXJyYXlbaW5kZXhdLCBpbmRleCArIDEpIDogaW5kZXg7XG4gIH07XG4gIGNvbnN0IHNwbGl0SW5kZXggPSBnZXRCYWxhbmNlZEluZGV4KGhlaWdodHNBcnJheSwgaGVpZ2h0VG90YWwgLyAyKSArIDE7XG4gIGNvbHVtbnMuY29sdW1uczEgPSBlbGVtZW50c0FycmF5LnNsaWNlKDAsIHNwbGl0SW5kZXgpO1xuICBjb2x1bW5zLmNvbHVtbnMyID0gZWxlbWVudHNBcnJheS5zbGljZShzcGxpdEluZGV4LCBlbGVtZW50c0FycmF5Lmxlbmd0aCk7XG4gIGNvbHVtbnMuaGVpZ2h0c0FycmF5ID0gaGVpZ2h0c0FycmF5O1xuICByZXR1cm4gY29sdW1ucztcbn07XG5cbmV4cG9ydCBjb25zdCBldmVudFRyaWdnZXIgPSAoZWxlbSwgZXZlbnRUeXBlLCBkZXRhaWwgPSB7fSwgYnViYmxlcyA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50VHlwZSwgeyBkZXRhaWwsIGJ1YmJsZXMgfSk7XG4gIGVsZW0uZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgY29udmVydEVsZW1lbnRDb2xsZWN0aW9uVG9BcnJheSA9IChjb2xsZWN0aW9uKSA9PiB7XG4gIGlmIChjb2xsZWN0aW9uIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgY29sbGVjdGlvbiBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgIHJldHVybiBjb2xsZWN0aW9uIGluc3RhbmNlb2YgTm9kZUxpc3QgPyBbXS5zbGljZS5jYWxsKGNvbGxlY3Rpb24pIDogY29sbGVjdGlvbi5nZXQoKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZG9taXNlRWxlbWVudHMgPSAoZWxlbWVudHNDb2xsZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gY29udmVydEVsZW1lbnRDb2xsZWN0aW9uVG9BcnJheShlbGVtZW50c0NvbGxlY3Rpb24pO1xuICBpZiAoIWVsZW1lbnRzIHx8ICFlbGVtZW50cy5sZW5ndGgpIHJldHVybjtcbiAgY29uc3QgY2xvbmVkRWxlbWVudHMgPSBlbGVtZW50cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gIGNsb25lZEVsZW1lbnRzLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQsIGluYykgPT4gZWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjbG9uZWRFbGVtZW50c1tpbmNdLCBlbGVtZW50KSk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNFbGVtZW50VmVydGljYWxseVNjcm9sbGFibGUgPSAoZWwpID0+IHtcbiAgcmV0dXJuIChlbCAmJiAoZWwuc2Nyb2xsSGVpZ2h0ID4gZWwub2Zmc2V0SGVpZ2h0KSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hlY2tEZWZpbmVkID0gaXRlbSA9PiBpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbSAhPT0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IHRhYmxpc3ROYXZpZ2F0aW9uID0gKHRhYmxpc3QpID0+IHtcbiAgY29uc3Qgb3JpZW50YXRpb24gPSB0YWJsaXN0LmdldEF0dHJpYnV0ZSgnYXJpYS1vcmllbnRhdGlvbicpO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gb3JpZW50YXRpb24gJiYgb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCc7XG4gIGNvbnN0IHRhYnMgPSB0YWJsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFiXCJdJyk7XG4gIGNvbnN0IGtleXMgPSBLZXlDb2RlO1xuXG4gIGNvbnN0IGZvY3VzRmlyc3RUYWIgPSAoKSA9PiB0YWJzWzBdLmZvY3VzKCk7XG4gIGNvbnN0IGZvY3VzTGFzdFRhYiA9ICgpID0+IHRhYnNbdGFicy5sZW5ndGggLSAxXS5mb2N1cygpO1xuXG4gIGNvbnN0IGZvY3VzUHJldmlvdXNUYWIgPSAoY3VycmVudFRhYikgPT4ge1xuICAgIGNvbnN0IHRhYkluZGV4ID0gWy4uLnRhYnNdLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQgPT09IGN1cnJlbnRUYWIpO1xuICAgIGlmICh0YWJJbmRleCA9PT0gMCkge1xuICAgICAgZm9jdXNMYXN0VGFiKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYnNbdGFiSW5kZXggLSAxXS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmb2N1c05leHRUYWIgPSAoY3VycmVudFRhYikgPT4ge1xuICAgIGNvbnN0IHRhYkluZGV4ID0gWy4uLnRhYnNdLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQgPT09IGN1cnJlbnRUYWIpO1xuICAgIGNvbnN0IHRhYnNMZW5ndGhaZXJvSW5kZXggPSB0YWJzLmxlbmd0aCAtIDE7XG4gICAgaWYgKHRhYkluZGV4ID09PSB0YWJzTGVuZ3RoWmVyb0luZGV4KSB7XG4gICAgICBmb2N1c0ZpcnN0VGFiKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYnNbdGFiSW5kZXggKyAxXS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVUYWJsaXN0S2V5ZG93bkV2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGU7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2Uga2V5cy5FTkQ6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvY3VzTGFzdFRhYigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Uga2V5cy5IT01FOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb2N1c0ZpcnN0VGFiKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBrZXlzLkxFRlQ6XG4gICAgICBjYXNlIGtleXMuVVA6XG4gICAgICAgIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBmb2N1c1ByZXZpb3VzVGFiKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBrZXlzLlJJR0hUOlxuICAgICAgY2FzZSBrZXlzLkRPV046XG4gICAgICAgIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBmb2N1c05leHRUYWIoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGFibGlzdEtleXVwRXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZTtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSBrZXlzLkxFRlQ6XG4gICAgICAgIGZvY3VzUHJldmlvdXNUYWIoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBrZXlzLlJJR0hUOlxuICAgICAgICBmb2N1c05leHRUYWIoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVUYWJsaXN0S2V5ZG93bkV2ZW50cywgZmFsc2UpO1xuICAgIGlmICghaXNWZXJ0aWNhbCkge1xuICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlVGFibGlzdEtleXVwRXZlbnRzLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKG9iaikgPT4ge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlcGxhY2VBbGwgPSAoc3RyaW5nLCBzZWFyY2gsIHJlcGxhY2VtZW50KSA9PiB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoc2VhcmNoKS5qb2luKHJlcGxhY2VtZW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkeFNldFRpbWVvdXQgPSAoY2IsIHRpbWUpID0+IHtcbiAgc2V0VGltZW91dChjYiwgdGltZSk7XG5cbiAgaWYgKHdpbmRvdy5hcHBSZWFkeUV2ZW50LmluaXRpYXRlZCkge1xuICAgIGFwcFJlYWR5VGltZXIuYWRkKHRpbWUpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5hcHBSZWFkeUV2ZW50LnRpbWVvdXQgKz0gdGltZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IER4UmVxdWVzdE5leHRBbmltYXRpb25GcmFtZSA9IChjYikgPT4ge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYigpKTtcbiAgfSk7XG59O1xuXG5jb25zdCBsb2FkaW5nU3Bpbm5lclRvZ2dsZUJ1dHRvblN0YXRlQW5kQ29udGVudCA9ICh0YXJnZXQpID0+IHtcbiAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IHRhcmdldDtcblxuICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgdGFyZ2V0RWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbiAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG5cbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGFyZ2V0RWxlbWVudDtcbiAgWy4uLmNoaWxkcmVuXS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZDtcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICB9KTtcbn07XG5cbi8qKlxuICogYWRkRHhMb2FkaW5nU3Bpbm5lclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IFRoZSBidXR0b24vbGluayB0aGF0IHRoZSBsb2FkaW5nIHNwaW5uZXIgc2hvdWxkIGJlIGluc2VydGVkIGludG9cbiAqL1xuZXhwb3J0IGNvbnN0IGFkZER4TG9hZGluZ1NwaW5uZXIgPSAodGFyZ2V0KSA9PiB7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaWNvbk1hcmt1cCA9ICc8ZGl2IGNsYXNzPVwiRHhMb2FkaW5nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PGRpdiBjbGFzcz1cIkR4TG9hZGluZ19faWNvblwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCI+PC9kaXY+PC9kaXY+JztcbiAgY29uc3QgbG9hZGluZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChpY29uTWFya3VwKTtcblxuICBsb2FkaW5nU3Bpbm5lclRvZ2dsZUJ1dHRvblN0YXRlQW5kQ29udGVudCh0YXJnZXQpO1xuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChsb2FkaW5nSWNvbik7XG59O1xuXG4vKipcbiAqIHJlbW92ZUR4TG9hZGluZ1NwaW5uZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCBUaGUgYnV0dG9uL2xpbmsgdGhhdCB0aGUgbG9hZGluZyBzcGlubmVyIHNob3VsZCBiZSByZW1vdmVkIGZyb21cbiAqIEBwYXJhbSB7c3RyaW5nIHx8IEhUTUxFbGVtZW50fSByZXBsYWNlIFRoZSBzdHJpbmcgeW91IHdvdWxkIGxpa2UgdG8gcmVwbGFjZSB0aGUgbG9hZGluZyBzcGlubmVyIHdpdGggKGV4cGVjdGVkIHRvIGJlIHRoZSB0ZXh0IG9yaWdpbmFsbHkgaW4gdGhlIGJ1dHRvbilcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUR4TG9hZGluZ1NwaW5uZXIgPSAodGFyZ2V0KSA9PiB7XG4gIGNvbnN0IHRhcmdldEVsZW1lbnQgPSB0YXJnZXQ7XG5cbiAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnQlVUVE9OJykge1xuICAgIHRhcmdldEVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcblxuICBjb25zdCBsb2FkaW5nSWNvbiA9IHRhcmdldEVsZW1lbnQucXVlcnlTZWxlY3RvcignLkR4TG9hZGluZycpO1xuICB0YXJnZXRFbGVtZW50LnJlbW92ZUNoaWxkKGxvYWRpbmdJY29uKTtcblxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0YXJnZXRFbGVtZW50O1xuICBbLi4uY2hpbGRyZW5dLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkO1xuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZER4RWxlbWVudExvYWRpbmdTcGlubmVyID0gKHRhcmdldCkgPT4ge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGljb25NYXJrdXAgPSBgPGRpdiBjbGFzcz1cIkR4TG9hZGluZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgODggODhcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgODggODg7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICA8cGF0aCBmaWxsPVwiI0ZGRkZGRlwiIHN0eWxlPVwib3BhY2l0eTogLjI7XCIgZD1cIk00NCw1YzIxLjUsMCwzOSwxNy41LDM5LDM5UzY1LjUsODMsNDQsODNTNSw2NS41LDUsNDRTMjIuNSw1LDQ0LDUgTTQ0LDBDMTkuNywwLDAsMTkuNywwLDQ0czE5LjcsNDQsNDQsNDQgczQ0LTE5LjcsNDQtNDRTNjguMywwLDQ0LDBMNDQsMHpcIi8+XG4gICAgPHBhdGggZmlsbD1cIiNGMEYwRjBcIiBkPVwiTTg1LjUsNDYuNGMtMS40LDAtMi41LTEuMS0yLjUtMi41QzgzLDIyLjUsNjUuNSw1LDQ0LjEsNWMtMS40LDAtMi41LTEuMS0yLjUtMi41UzQyLjcsMCw0NC4xLDAgQzY4LjMsMCw4OCwxOS43LDg4LDQzLjlDODgsNDUuMyw4Ni45LDQ2LjQsODUuNSw0Ni40elwiPlxuICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIHR5cGU9XCJyb3RhdGVcIiBmcm9tPVwiMCA0NCA0NFwiIHRvPVwiMzYwIDQ0IDQ0XCIgZHVyPVwiMS41c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZVRyYW5zZm9ybT5cbiAgICA8L3BhdGg+XG4gICAgPC9zdmc+XG4gIDwvZGl2PmA7XG4gIGNvbnN0IGxvYWRpbmdJY29uID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoaWNvbk1hcmt1cCk7XG5cbiAgbG9hZGluZ1NwaW5uZXJUb2dnbGVCdXR0b25TdGF0ZUFuZENvbnRlbnQodGFyZ2V0KTtcblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQobG9hZGluZ0ljb24pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsU3RvcmFnZUF2YWlsYWJsZSA9ICgpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5sb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZlYXR1cmVfdGVzdCcsICd5ZXMnKTtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmVhdHVyZV90ZXN0JykgPT09ICd5ZXMnKSB7XG4gICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmZWF0dXJlX3Rlc3QnKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGFkZFNjcmlwdEZvckJhemFhclZvaWNlID0gKHNjcmlwdFVSTCkgPT4ge1xuICBpZiAoc2NyaXB0VVJMLnRyaW0oKSAhPT0gJycgJiYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYHNjcmlwdFtzcmM9JyR7c2NyaXB0VVJMfSddYCkpLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IGJhemFhclZvaWNlU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgYmF6YWFyVm9pY2VTY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBzY3JpcHRVUkwpO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoYmF6YWFyVm9pY2VTY3JpcHQpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZXF1YWxpc2VIZWlnaHRzID0gKGVsZW1lbnRzKSA9PiB7XG4gIGxldCBtYXhIZWlnaHQgPSAwO1xuICBbLi4uZWxlbWVudHNdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgfSk7XG4gIFsuLi5lbGVtZW50c10uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGlmIChoZWlnaHQgPiBtYXhIZWlnaHQpIHtcbiAgICAgIG1heEhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gIH0pO1xuICBbLi4uZWxlbWVudHNdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke21heEhlaWdodH1weGA7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQ3VycmVudERhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgcmV0dXJuIChcbiAgICBEYXRlLlVUQyhcbiAgICAgIHRvZGF5LmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgICB0b2RheS5nZXRVVENNb250aCgpLFxuICAgICAgdG9kYXkuZ2V0VVRDRGF0ZSgpLFxuICAgICAgdG9kYXkuZ2V0VVRDSG91cnMoKSxcbiAgICAgIHRvZGF5LmdldFVUQ01pbnV0ZXMoKVxuICAgIClcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBwcmV2ZW50QWN0aW9uT25EZWVwTGluayA9IChldmVudCkgPT4ge1xuICBjb25zdCBsaW5rTG9jYXRpb24gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBpZiAoY2hlY2tEZWVwTGluayhsaW5rTG9jYXRpb24pKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9