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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/webapp/components/FloatingActionButton/js/FloatingActionButton.js");
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

/***/ "./src/main/webapp/components/FloatingActionButton/js/FloatingActionButton.js":
/*!************************************************************************************!*\
  !*** ./src/main/webapp/components/FloatingActionButton/js/FloatingActionButton.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _browserDetection = __webpack_require__(/*! ../../../resources/dev/js/utils/browserDetection */ "./src/main/webapp/resources/dev/js/utils/browserDetection.js");

var _index = __webpack_require__(/*! ../../../resources/dev/js/utils/index */ "./src/main/webapp/resources/dev/js/utils/index.js");

var _domManipulation = __webpack_require__(/*! ../../../resources/dev/js/utils/domManipulation */ "./src/main/webapp/resources/dev/js/utils/domManipulation.js");

var _aria = __webpack_require__(/*! ../../../resources/dev/js/utils/aria */ "./src/main/webapp/resources/dev/js/utils/aria.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FloatingActionButton = function () {
  function FloatingActionButton(element) {
    (0, _classCallCheck3.default)(this, FloatingActionButton);

    this.element = element;
    this.linksContainer = this.element.querySelector('.FloatingActionButton__items');
    this.trigger = this.element.querySelector('.FloatingActionButton__trigger');
    this.triggerContainer = this.element.querySelector('.FloatingActionButton__trigger-container');
    this.overlay = this.element.querySelector('.FloatingActionButton__overlay');
    this.dots = this.element.querySelector('.FloatingActionButton__trigger-dots');
    this._scrollTop = window.scrollY;
    this.buffer = 200;
    this.timeoutAnimation = null;
    this.timeoutAnimationScrollBuffer = 100;
    this.bodyMaxWidth = parseInt(window.getComputedStyle(document.body).getPropertyValue('max-width'), 10);

    this.init();
  }

  (0, _createClass3.default)(FloatingActionButton, [{
    key: 'init',
    value: function init() {
      (0, _domManipulation.insertAfter)(document.querySelector('#FloatingActionEnabler'), this.element);

      this.initEvents();
      this.trigger.setAttribute('aria-expanded', false);

      this.positionPanel();
      window.requestAnimationFrame(this.setYposition.bind(this));
      this.trigger.classList.add('FloatingActionButton__trigger--show-delayed');
    }
  }, {
    key: 'initEvents',
    value: function initEvents() {
      var _this = this;

      this.handleBoundDocumentClick = this.handleDocumentClick.bind(this);

      this.trigger.addEventListener('click', function () {
        _this.element.classList.toggle('FloatingActionButton--opened');
        if (_this.element.classList.contains('FloatingActionButton--opened')) {
          _this.openPanel();
          if (document.body.classList.contains('focusStylesOn') || (0, _browserDetection.getBreakpointSize)() !== 'large') {
            _this.trapFocus();
          }
        } else {
          _this.closePanel();
        }
      });

      window.addEventListener('scroll', function () {
        _this.setYposition();

        if (Math.abs(window.scrollY - _this._scrollTop) > _this.timeoutAnimationScrollBuffer && (0, _browserDetection.getBreakpointSize)() === 'large') {
          if ((0, _index.checkDefined)(_this.timeoutAnimation)) {
            clearTimeout(_this.timeoutAnimation);
          }
          if (!_this.dots.classList.contains('FloatingActionButton__trigger-dots--ellipsis-animation')) {
            _this.timeoutAnimation = setTimeout(function () {
              _this.dots.classList.add('FloatingActionButton__trigger-dots--ellipsis-animation');
            }, 500);
          }
        }

        if (Math.abs(window.scrollY - _this._scrollTop) > _this.buffer && !document.body.classList.contains('focusStylesOn')) {
          _this.closePanel();
          _this.trigger.classList.add('FloatingActionButton__trigger--show-direct');
        }
      });

      window.addEventListener('resize', function () {
        _this.positionPanel();
        _this.setYposition();
      });

      this.overlay.addEventListener('touchstart', function () {
        _this.closePanel();
      }, false);

      this.element.addEventListener('touchmove', function (e) {
        e.preventDefault();
      }, false);

      this.trigger.addEventListener('touchstart', function () {
        _this.trigger.classList.add('FloatingActionButton__trigger--touch');
      }, true);
      this.trigger.addEventListener('touchend', function () {
        _this.trigger.classList.remove('FloatingActionButton__trigger--touch');
      }, false);

      this.linksContainer.addEventListener('transitionend', function (e) {
        if (!_this.element.classList.contains('FloatingActionButton--opened') && e.target === _this.linksContainer) {
          _this.linksContainer.classList.add('FloatingActionButton__items-hide');
        }
      });
    }
  }, {
    key: 'setYposition',
    value: function setYposition() {
      if ((0, _browserDetection.getBreakpointSize)() !== 'large') {
        this.element.style.top = 'unset';
        return;
      }
      this.element.style.top = (0, _index.getStickyNavHeightV2)(null, false) + 'px';
    }
  }, {
    key: 'trapFocus',
    value: function trapFocus() {
      var focusableEls = (0, _index.getTabbable)(this.element);
      var firstFocusableEl = focusableEls[0];
      var lastFocusableEl = focusableEls[focusableEls.length - 1];

      this.boundKeyDown = function (e) {
        var isTabPressed = e.key === 'Tab' || e.keyCode === _aria.KeyCode.TAB;

        if (!isTabPressed) {
          return;
        }

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } else if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      };
      this.element.addEventListener('keydown', this.boundKeyDown);
    }
  }, {
    key: 'openPanel',
    value: function openPanel() {
      this._scrollTop = window.scrollY;
      this.setAriaExpanded(true);
      FloatingActionButton.togglePageWrapperContent(true);
      document.addEventListener('click', this.handleBoundDocumentClick);
      this.linksContainer.classList.remove('FloatingActionButton__items-hide');
    }
  }, {
    key: 'closePanel',
    value: function closePanel() {
      this.setAriaExpanded(false);
      this.element.classList.remove('FloatingActionButton--opened');
      document.removeEventListener('click', this.handleBoundDocumentClick);
      this.element.removeEventListener('keydown', this.boundKeyDown);
      FloatingActionButton.togglePageWrapperContent(false);
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      if (e.target.classList.value.indexOf('FloatingActionButton') === -1) {
        this.closePanel();
      }
    }
  }, {
    key: 'setAriaExpanded',
    value: function setAriaExpanded(val) {
      this.trigger.setAttribute('aria-expanded', val);
    }
  }, {
    key: 'positionPanel',
    value: function positionPanel() {
      var windowInnerWidth = parseInt(window.getComputedStyle(document.querySelector('html')).getPropertyValue('width'), 10);
      var side = document.documentElement.getAttribute('dir') !== 'rtl' ? 'right' : 'left';
      var yPos = Math.floor((windowInnerWidth - this.bodyMaxWidth) / 2) + 'px';

      if (windowInnerWidth > this.bodyMaxWidth) {
        this.element.style[side] = yPos;
      } else {
        this.element.style[side] = '0px';
      }
    }
  }], [{
    key: 'togglePageWrapperContent',
    value: function togglePageWrapperContent(toggle) {
      var sharedNavigation = document.querySelector('.sharedNavigation');
      var pageWrapper = document.querySelector('.pageWrapper');
      var pageWrapperChildren = pageWrapper.querySelectorAll(':not([class*=FloatingActionButton])');

      if (toggle) {
        pageWrapperChildren.forEach(function (el) {
          el.setAttribute('aria-hidden', 'true');
        });
        if ((0, _index.checkDefined)(sharedNavigation)) {
          sharedNavigation.setAttribute('aria-hidden', 'true');
        }
      } else {
        pageWrapper.removeAttribute('aria-hidden');
        pageWrapperChildren.forEach(function (el) {
          el.removeAttribute('aria-hidden');
        });
      }
    }
  }]);
  return FloatingActionButton;
}();

exports.default = FloatingActionButton;


var FloatingActionButtonElements = document.querySelectorAll('.FloatingActionButton');
if (FloatingActionButtonElements.length) {
  Array.prototype.forEach.call(FloatingActionButtonElements, function (el) {
    return new FloatingActionButton(el);
  });
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudHMvRmxvYXRpbmdBY3Rpb25CdXR0b24vanMvRmxvYXRpbmdBY3Rpb25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvYXJpYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvcmVzb3VyY2VzL2Rldi9qcy91dGlscy9icm93c2VyRGV0ZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvcmVzb3VyY2VzL2Rldi9qcy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJGbG9hdGluZ0FjdGlvbkJ1dHRvbiIsImVsZW1lbnQiLCJsaW5rc0NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmlnZ2VyIiwidHJpZ2dlckNvbnRhaW5lciIsIm92ZXJsYXkiLCJkb3RzIiwiX3Njcm9sbFRvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJidWZmZXIiLCJ0aW1lb3V0QW5pbWF0aW9uIiwidGltZW91dEFuaW1hdGlvblNjcm9sbEJ1ZmZlciIsImJvZHlNYXhXaWR0aCIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRvY3VtZW50IiwiYm9keSIsImdldFByb3BlcnR5VmFsdWUiLCJpbml0IiwiaW5pdEV2ZW50cyIsInNldEF0dHJpYnV0ZSIsInBvc2l0aW9uUGFuZWwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRZcG9zaXRpb24iLCJiaW5kIiwiY2xhc3NMaXN0IiwiYWRkIiwiaGFuZGxlQm91bmREb2N1bWVudENsaWNrIiwiaGFuZGxlRG9jdW1lbnRDbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGUiLCJjb250YWlucyIsIm9wZW5QYW5lbCIsInRyYXBGb2N1cyIsImNsb3NlUGFuZWwiLCJNYXRoIiwiYWJzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZSIsInRhcmdldCIsInN0eWxlIiwidG9wIiwiZm9jdXNhYmxlRWxzIiwiZmlyc3RGb2N1c2FibGVFbCIsImxhc3RGb2N1c2FibGVFbCIsImxlbmd0aCIsImJvdW5kS2V5RG93biIsImlzVGFiUHJlc3NlZCIsImtleSIsImtleUNvZGUiLCJLZXlDb2RlIiwiVEFCIiwic2hpZnRLZXkiLCJhY3RpdmVFbGVtZW50IiwiZm9jdXMiLCJzZXRBcmlhRXhwYW5kZWQiLCJ0b2dnbGVQYWdlV3JhcHBlckNvbnRlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidmFsdWUiLCJpbmRleE9mIiwidmFsIiwid2luZG93SW5uZXJXaWR0aCIsInNpZGUiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJ5UG9zIiwiZmxvb3IiLCJzaGFyZWROYXZpZ2F0aW9uIiwicGFnZVdyYXBwZXIiLCJwYWdlV3JhcHBlckNoaWxkcmVuIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsInJlbW92ZUF0dHJpYnV0ZSIsIkZsb2F0aW5nQWN0aW9uQnV0dG9uRWxlbWVudHMiLCJBcnJheSIsInByb3RvdHlwZSIsImNhbGwiLCJCQUNLU1BBQ0UiLCJERUxFVEUiLCJET1dOIiwiRU5EIiwiRVNDIiwiSE9NRSIsIkxFRlQiLCJQQUdFX0RPV04iLCJQQUdFX1VQIiwiUkVUVVJOIiwiUklHSFQiLCJTUEFDRSIsIlVQIiwiYnJlYWtwb2ludHMiLCJzbWFsbCIsIm1lZGl1bSIsIndpZGVyIiwiY3VycmVudCIsImdldERldmljZU9yaWVudGF0aW9uIiwiJHdpbmRvdyIsIiQiLCJ3aWR0aCIsImhlaWdodCIsImdldExhcmdlckJyZWFrcG9pbnQiLCJnZXRCcmVha3BvaW50U2l6ZSIsIm9sZENhbGMiLCJpbm5lcldpZHRoIiwiaXNCcmVha3BvaW50U21hbGwiLCJpc0JyZWFrcG9pbnRNZWRpdW0iLCJpc01vYmlsZURldmljZSIsIkRvY3VtZW50VG91Y2giLCJuYXZpZ2F0b3IiLCJtc01heFRvdWNoUG9pbnRzIiwiaXNOb3RNb2JpbGVEZXZpY2UiLCJpc1RhYmxldERldmljZSIsInRlc3QiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImlzSU9TIiwiaXNOb3RJT1MiLCJpc1dpbmRvd3NQaG9uZSIsImdldEFuZHJvaWRWZXJzaW9uIiwidWEiLCJwYXJzZUZsb2F0Iiwic2xpY2UiLCJnZXRCcm93c2VyVXNlckFnZW50IiwiZGV0ZWN0QnJvd3NlcnMiLCJicm93c2VycyIsImlzQ2hyb21lIiwiaXNNc0VkZ2UiLCJpc0V4cGxvcmVyIiwiaXNGaXJlZm94IiwiaXNTYWZhcmkiLCJpc09wZXJhIiwiaXNJZSIsImlzSWUxMSIsIkFjdGl2ZVhPYmplY3QiLCJnZXRWaWV3cG9ydFNpemUiLCJjcmVhdGVFbGVtZW50IiwiY3NzVGV4dCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJkaW1zIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJyZW1vdmVDaGlsZCIsInNjcm9sbFRvRWxlbWVudCIsIm9wdGlvbnMiLCJjYWxsYmFjayIsIiRlbGVtZW50IiwialF1ZXJ5Iiwib3B0cyIsImV4dGVuZCIsImFkanVzdG1lbnQiLCJlYXNlIiwiZHVyYXRpb24iLCJjb250YWluZXIiLCJzdG9wIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsImhhc0JpZ0ludFN1cHBvcnQiLCJCaWdJbnQiLCJ3cmFwIiwid3JhcHBlciIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsInVud3JhcCIsInBhcmVudCIsIndyYXBBbGwiLCJlbGVtZW50cyIsImNyZWF0ZUFycmF5IiwiTm9kZUxpc3QiLCJlbGVtZW50c0FycmF5IiwiaW5zZXJ0QWZ0ZXIiLCJiZWZvcmUiLCJhZnRlciIsIm5leHRTaWJsaW5nIiwiJG5hdkhlYWRlciIsInN0aWNreU5hdmlnYXRpb25FbmFibGVkIiwiYXR0ciIsInN0aWNreU5hdmlnYXRpb25UcmFuc2l0aW9uUG9pbnQiLCJ0ZW1wbGF0ZUNhY2hlIiwiZ29vZ2xlTWFwU3R5bGVzIiwiZmVhdHVyZVR5cGUiLCJlbGVtZW50VHlwZSIsInN0eWxlcnMiLCJjb2xvciIsInZpc2liaWxpdHkiLCJzYXR1cmF0aW9uIiwibGlnaHRuZXNzIiwiaXNSdGwiLCJodG1sIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRDYWNoZWRTY3JpcHQiLCJ1cmwiLCJuZXdPcHRpb25zIiwiZGF0YVR5cGUiLCJjYWNoZSIsImFqYXgiLCJnZXRIZWlnaHQiLCJlbGVtIiwiY2xpZW50SGVpZ2h0IiwiZ2V0U3RpY2t5TmF2SGVpZ2h0Iiwib2xkQ2FsY3VsYXRpb24iLCJ5UG9zaXRpb24iLCJzaGFyZWRIZWFkZXIiLCIkaGVhZGVyIiwiJGluUGFnZU5hdiIsIiRpblBhZ2VOYXZTdGlja3kiLCIkaW5QYWdlTmF2QmFyIiwiZHhOYXZQcmltYXJ5IiwiYnJlYWtwb2ludCIsImNoZWNrU3RpY2t5TmF2IiwiY3NzIiwiaW5QYWdlTmF2VG9wIiwiaXNTdGlja3lOYXYiLCJvbGROYXZCcmVha3BvaW50Iiwib3V0ZXJIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImdldE5hdmlnYXRpb25IZWlnaHQiLCJnZXROYWFTSGVpZ2h0Iiwib2xkIiwicHJpbWFyeU5hdkhlaWdodCIsImJyZWFkY3J1bWJOYXZIZWlnaHQiLCJub3RpZmljYXRpb25IZWlnaHQiLCJpblBhZ2VOYXZpZ2F0aW9uSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJtYXgiLCJnZXRTdGlja3lOYXZIZWlnaHRWMiIsInNjcm9sbFRvIiwiZWFzaW5nIiwiaWdub3JlU3RpY2t5TmF2IiwieU9mZnNldCIsIm5ld0R1cmF0aW9uIiwibmV3Q2FsbGJhY2siLCJuZXdFYXNpbmciLCJwb3NpdGlvbiIsIiR0YXJnZXRFbCIsInByb21pc2UiLCJkb25lIiwiY2hlY2tEZWVwTGluayIsImhyZWYiLCJkZWVwTGluayIsInNwZWVkIiwiaGFzaFBvcyIsImlkIiwic3Vic3RyaW5nIiwibG9jYXRpb24iLCJhY2NvcmRpb25QYXJlbnQiLCJjbG9zZXN0IiwiYWNjb3JkaW9uVGl0bGUiLCJmaW5kIiwiaGFzQ2xhc3MiLCJjbGljayIsInBhcmVudHMiLCIkY29udGFpbmVyIiwiJHRhYnMiLCIkdGFiTGlua3MiLCJ0YWJJbmRleCIsImVhY2giLCJpIiwiJGxvY2F0aW9uIiwiYWNjb3JkaW9uSGVhZGVyIiwiaXMiLCJjb25zb2xlIiwiZXJyb3IiLCJpc1BhZ2VJbklmcmFtZSIsInNlbGYiLCJpbnNpZGVUYWJiZWRDb250YWluZXIiLCJpc0luc2lkZVRhYmJlZENvbnRhaW5lciIsIm5vdCIsIm1vYmlsZUFjY29yZGlvbnNBY3RpdmF0ZWQiLCJyZW1vdmVIVE1MVGFncyIsInMiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJnZXRVcmxQYXJhbWV0ZXIiLCJzUGFyYW0iLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzUGFnZVVSTCIsInNlYXJjaCIsInNVUkxWYXJpYWJsZXMiLCJzcGxpdCIsInNQYXJhbWV0ZXJTcGxpdCIsImFkZFBhcmFtZXRlclRvVVJMIiwicGFyYW0iLCJuZXdVcmwiLCJnZXRPYmplY3RLZXlzIiwib2JqIiwia2V5cyIsImhhc093blByb3BlcnR5IiwicHVzaCIsImNhbnZhc0RyYXdCZ0NvdmVyIiwiY3R4IiwiaW1nIiwieCIsInkiLCJ3IiwiaCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYXJndW1lbnRzIiwiY2FudmFzIiwiaXciLCJpaCIsInIiLCJtaW4iLCJudyIsIm5oIiwiY3giLCJjeSIsImN3IiwiY2giLCJhciIsImRyYXdJbWFnZSIsImhhc1BsYWNlaG9sZGVyU3VwcG9ydCIsImlzUGFnZUluWFBNRnJhbWUiLCJUcmlkaW9uIiwiV2ViIiwiVUkiLCJTaXRlRWRpdCIsImVsZW1lbnRJblZpZXdwb3J0IiwiYWRqdXN0Iiwid2luZG93SW5uZXJIZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJhZGp1c3RUb3AiLCJhZGp1c3RCb3R0b20iLCJlbE9mZnNldCIsImVsVG9wIiwiZWxCb3R0b20iLCJkZWZhdWx0QWRqdXN0Iiwidmlld3BvcnRCb3R0b20iLCJib3R0b20iLCJnZXRSYW5kb21TdHJpbmciLCJmb3JtYXR0ZWRMZW5ndGgiLCJjaGFycyIsImNob3NlbiIsImNoYXJBdCIsInJhbmRvbSIsImpvaW4iLCJnZXRFYXNpbmdWYWx1ZSIsInJhdGlvIiwiZm9ybWF0dGVkUmF0aW8iLCJyYWRpYW5zIiwiUEkiLCJjb3MiLCJkaXNhYmxlU2Nyb2xsIiwib24iLCJldmVudCIsImVuYWJsZVNjcm9sbCIsIm9mZiIsImxpbWl0TnVtYmVyIiwib2xkTWluIiwibG9hZElnbm9yZWRSZXNwb25zaXZlSW1hZ2VzIiwiJGltYWdlcyIsInJlbW92ZUF0dHIiLCJyaWNoc3BvbnNpdmVJbWFnZSIsInRocm90dGxlIiwiZm4iLCJ0aHJlc2hob2xkIiwic2NvcGUiLCJ0aHJlc2giLCJsYXN0IiwiZGVmZXJUaW1lciIsImNvbnRleHQiLCJub3ciLCJEYXRlIiwiYXJncyIsImFwcGx5IiwibWVhc3VyZVRleHRXaWR0aCIsInRleHQiLCJwYXIiLCJwYWRkaW5nIiwid2hpdGVTcGFjZSIsImlubmVySFRNTCIsImNsaWVudFdpZHRoIiwiZ2V0VHJhbnNpdGlvbkVuZEV2ZW50IiwidHJhbnNpdGlvbnMiLCJ0cmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiV2Via2l0VHJhbnNpdGlvbiIsInVuZGVmaW5lZCIsInRlbXBsYXRlIiwic3RyIiwiZGF0YSIsImdldEVsZW1lbnRCeUlkIiwiRnVuY3Rpb24iLCJpc0luVmlld3BvcnQiLCJ3aW4iLCJ2aWV3cG9ydCIsImxlZnQiLCJzY3JvbGxMZWZ0IiwicmlnaHQiLCJib3VuZHMiLCJvdXRlcldpZHRoIiwic2Nyb2xsSWZOb3RJblZpZXdwb3J0IiwiZGlzcGxheVRvQm90dG9tIiwic2Nyb2xsVG9Qb3MiLCJpc0xhbmRSb3ZlciIsImdldFRhYmJhYmxlIiwiY3VzdG9tU2VsZWN0b3JzIiwiZGVmYXVsdFNlbGVjdG9ycyIsInNlbGVjdG9yVHlwZXMiLCJjb25jYXQiLCJzZWxlY3RvcnMiLCJmaWx0ZXIiLCJzZWxlY3RvciIsInRhYmJhYmxlIiwib2Zmc2V0UGFyZW50IiwiaXNJbnZpc2libGUiLCJkaXNwbGF5IiwibG9ja1RhYmJhYmxlcyIsInRhYmJhYmxlcyIsImJhbGFuY2VFbGVtZW50SGVpZ2h0IiwiYWxsb3dlZE9mZnNldCIsImNvbHVtbnMiLCJoZWlnaHRUb3RhbCIsImhlaWdodHNBcnJheSIsIm1hcCIsImVsZW1lbnRIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCYWxhbmNlZEluZGV4IiwiYXJyYXkiLCJydW5uaW5nVG90YWwiLCJpbmRleCIsImlzUmVjdXJzaXZlIiwic3BsaXRJbmRleCIsImNvbHVtbnMxIiwiY29sdW1uczIiLCJldmVudFRyaWdnZXIiLCJldmVudFR5cGUiLCJkZXRhaWwiLCJidWJibGVzIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiY29udmVydEVsZW1lbnRDb2xsZWN0aW9uVG9BcnJheSIsImNvbGxlY3Rpb24iLCJnZXQiLCJyYW5kb21pc2VFbGVtZW50cyIsImVsZW1lbnRzQ29sbGVjdGlvbiIsImNsb25lZEVsZW1lbnRzIiwiY2xvbmVOb2RlIiwic29ydCIsImluYyIsInJlcGxhY2VDaGlsZCIsImlzRWxlbWVudFZlcnRpY2FsbHlTY3JvbGxhYmxlIiwic2Nyb2xsSGVpZ2h0IiwiY2hlY2tEZWZpbmVkIiwiaXRlbSIsInRhYmxpc3ROYXZpZ2F0aW9uIiwidGFibGlzdCIsIm9yaWVudGF0aW9uIiwiaXNWZXJ0aWNhbCIsInRhYnMiLCJmb2N1c0ZpcnN0VGFiIiwiZm9jdXNMYXN0VGFiIiwiZm9jdXNQcmV2aW91c1RhYiIsImN1cnJlbnRUYWIiLCJmaW5kSW5kZXgiLCJmb2N1c05leHRUYWIiLCJ0YWJzTGVuZ3RoWmVyb0luZGV4IiwiaGFuZGxlVGFibGlzdEtleWRvd25FdmVudHMiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlVGFibGlzdEtleXVwRXZlbnRzIiwidGFiIiwiaXNFbXB0eSIsIk9iamVjdCIsInJlcGxhY2VBbGwiLCJzdHJpbmciLCJyZXBsYWNlbWVudCIsImR4U2V0VGltZW91dCIsImNiIiwidGltZSIsImFwcFJlYWR5RXZlbnQiLCJpbml0aWF0ZWQiLCJhcHBSZWFkeVRpbWVyIiwidGltZW91dCIsIkR4UmVxdWVzdE5leHRBbmltYXRpb25GcmFtZSIsImxvYWRpbmdTcGlubmVyVG9nZ2xlQnV0dG9uU3RhdGVBbmRDb250ZW50IiwidGFyZ2V0RWxlbWVudCIsInRhZ05hbWUiLCJkaXNhYmxlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJvcGFjaXR5IiwiYWRkRHhMb2FkaW5nU3Bpbm5lciIsImljb25NYXJrdXAiLCJsb2FkaW5nSWNvbiIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwicmVtb3ZlRHhMb2FkaW5nU3Bpbm5lciIsImFkZER4RWxlbWVudExvYWRpbmdTcGlubmVyIiwibG9jYWxTdG9yYWdlQXZhaWxhYmxlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiYWRkU2NyaXB0Rm9yQmF6YWFyVm9pY2UiLCJzY3JpcHRVUkwiLCJ0cmltIiwiYmF6YWFyVm9pY2VTY3JpcHQiLCJoZWFkIiwiZXF1YWxpc2VIZWlnaHRzIiwibWF4SGVpZ2h0IiwiZ2VuZXJhdGVDdXJyZW50RGF0ZSIsInRvZGF5IiwiVVRDIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJwcmV2ZW50QWN0aW9uT25EZWVwTGluayIsImxpbmtMb2NhdGlvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGtCQUFrQixZQUFZLG1CQUFPLENBQUMsaUhBQStCLHNCOzs7Ozs7Ozs7OztBQ0FyRSxrQkFBa0IsWUFBWSxtQkFBTyxDQUFDLHlJQUEyQyxzQjs7Ozs7Ozs7Ozs7QUNBakYsa0JBQWtCLFlBQVksbUJBQU8sQ0FBQywrR0FBMkIsc0I7Ozs7Ozs7Ozs7O0FDQWpFLGtCQUFrQixZQUFZLG1CQUFPLENBQUMsMkhBQW9DLHNCOzs7Ozs7Ozs7Ozs7QUNBN0Q7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNSYTs7QUFFYjs7QUFFQSxzQkFBc0IsbUJBQU8s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SixHQUFjakcsT0FBZCxDQUFzQixVQUFDM0UsT0FBRCxFQUFhO0FBQ2pDO0FBQ0FBLFlBQVE0QyxLQUFSLENBQWM0RCxNQUFkLEdBQXVCLE1BQXZCO0FBQ0QsR0FIRDtBQUlBLDZDQUFJb0UsUUFBSixHQUFjakcsT0FBZCxDQUFzQixVQUFDM0UsT0FBRCxFQUFhO0FBQ2pDLFFBQU13RyxTQUFTeEcsUUFBUWtKLFlBQXZCO0FBQ0EsUUFBSTFDLFNBQVNvWixTQUFiLEVBQXdCO0FBQ3RCQSxrQkFBWXBaLE1BQVo7QUFDRDtBQUNGLEdBTEQ7QUFNQSw2Q0FBSW9FLFFBQUosR0FBY2pHLE9BQWQsQ0FBc0IsVUFBQzNFLE9BQUQsRUFBYTtBQUNqQztBQUNBQSxZQUFRNEMsS0FBUixDQUFjNEQsTUFBZCxHQUEwQm9aLFNBQTFCO0FBQ0QsR0FIRDtBQUlELENBaEJNOztBQWtCQSxJQUFNQyxvREFBc0IsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ3ZDLE1BQU1DLFFBQVEsSUFBSTVJLElBQUosRUFBZDtBQUNBLFNBQ0VBLEtBQUs2SSxHQUFMLENBQ0VELE1BQU1FLGNBQU4sRUFERixFQUVFRixNQUFNRyxXQUFOLEVBRkYsRUFHRUgsTUFBTUksVUFBTixFQUhGLEVBSUVKLE1BQU1LLFdBQU4sRUFKRixFQUtFTCxNQUFNTSxhQUFOLEVBTEYsQ0FERjtBQVNELENBWE07O0FBYUEsSUFBTUMsNERBQTBCLFNBQTFCQSx1QkFBMEIsQ0FBQ3JLLEtBQUQsRUFBVztBQUNoRCxNQUFNc0ssZUFBZXRLLE1BQU1tSCxhQUFOLENBQW9CL1ksWUFBcEIsQ0FBaUMsTUFBakMsQ0FBckI7QUFDQSxNQUFJK0ssY0FBY21SLFlBQWQsQ0FBSixFQUFpQztBQUFFdEssVUFBTXZULGNBQU47QUFBeUI7QUFDN0QsQ0FITSxDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GbG9hdGluZ0FjdGlvbkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudHMvRmxvYXRpbmdBY3Rpb25CdXR0b24vanMvRmxvYXRpbmdBY3Rpb25CdXR0b24uanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICghQlVHR1kgJiYgJG5hdGl2ZSkgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcbiIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG4iLCJpbXBvcnQgeyBnZXRCcmVha3BvaW50U2l6ZSB9IGZyb20gJy4uLy4uLy4uL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvYnJvd3NlckRldGVjdGlvbic7XG5pbXBvcnQge1xuICBnZXRTdGlja3lOYXZIZWlnaHRWMixcbiAgY2hlY2tEZWZpbmVkLFxuICBnZXRUYWJiYWJsZVxufSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2luZGV4JztcblxuaW1wb3J0IHsgaW5zZXJ0QWZ0ZXIgfSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2RvbU1hbmlwdWxhdGlvbic7XG5pbXBvcnQgeyBLZXlDb2RlIH0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL2Rldi9qcy91dGlscy9hcmlhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRpbmdBY3Rpb25CdXR0b24ge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmxpbmtzQ29udGFpbmVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5GbG9hdGluZ0FjdGlvbkJ1dHRvbl9faXRlbXMnKTtcbiAgICB0aGlzLnRyaWdnZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLkZsb2F0aW5nQWN0aW9uQnV0dG9uX190cmlnZ2VyJyk7XG4gICAgdGhpcy50cmlnZ2VyQ29udGFpbmVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5GbG9hdGluZ0FjdGlvbkJ1dHRvbl9fdHJpZ2dlci1jb250YWluZXInKTtcbiAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLkZsb2F0aW5nQWN0aW9uQnV0dG9uX19vdmVybGF5Jyk7XG4gICAgdGhpcy5kb3RzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5GbG9hdGluZ0FjdGlvbkJ1dHRvbl9fdHJpZ2dlci1kb3RzJyk7XG4gICAgdGhpcy5fc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFk7XG4gICAgdGhpcy5idWZmZXIgPSAyMDA7XG4gICAgdGhpcy50aW1lb3V0QW5pbWF0aW9uID0gbnVsbDtcbiAgICB0aGlzLnRpbWVvdXRBbmltYXRpb25TY3JvbGxCdWZmZXIgPSAxMDA7XG4gICAgdGhpcy5ib2R5TWF4V2lkdGggPSBwYXJzZUludChcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJ21heC13aWR0aCcpLFxuICAgICAgMTBcbiAgICApO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGluc2VydEFmdGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JyksIHRoaXMuZWxlbWVudCk7XG5cbiAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB0aGlzLnRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gICAgdGhpcy5wb3NpdGlvblBhbmVsKCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNldFlwb3NpdGlvbi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnRyaWdnZXIuY2xhc3NMaXN0LmFkZCgnRmxvYXRpbmdBY3Rpb25CdXR0b25fX3RyaWdnZXItLXNob3ctZGVsYXllZCcpO1xuICB9XG5cbiAgaW5pdEV2ZW50cygpIHtcbiAgICB0aGlzLmhhbmRsZUJvdW5kRG9jdW1lbnRDbGljayA9IHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ0Zsb2F0aW5nQWN0aW9uQnV0dG9uLS1vcGVuZWQnKTtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdGbG9hdGluZ0FjdGlvbkJ1dHRvbi0tb3BlbmVkJykpIHtcbiAgICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1c1N0eWxlc09uJykgfHxcbiAgICAgICAgICBnZXRCcmVha3BvaW50U2l6ZSgpICE9PSAnbGFyZ2UnXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudHJhcEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0WXBvc2l0aW9uKCk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgTWF0aC5hYnMod2luZG93LnNjcm9sbFkgLSB0aGlzLl9zY3JvbGxUb3ApID4gdGhpcy50aW1lb3V0QW5pbWF0aW9uU2Nyb2xsQnVmZmVyICYmXG4gICAgICAgIGdldEJyZWFrcG9pbnRTaXplKCkgPT09ICdsYXJnZSdcbiAgICAgICkge1xuICAgICAgICBpZiAoY2hlY2tEZWZpbmVkKHRoaXMudGltZW91dEFuaW1hdGlvbikpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0QW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZG90cy5jbGFzc0xpc3QuY29udGFpbnMoJ0Zsb2F0aW5nQWN0aW9uQnV0dG9uX190cmlnZ2VyLWRvdHMtLWVsbGlwc2lzLWFuaW1hdGlvbicpKSB7XG4gICAgICAgICAgdGhpcy50aW1lb3V0QW5pbWF0aW9uID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvdHMuY2xhc3NMaXN0LmFkZCgnRmxvYXRpbmdBY3Rpb25CdXR0b25fX3RyaWdnZXItZG90cy0tZWxsaXBzaXMtYW5pbWF0aW9uJyk7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIE1hdGguYWJzKHdpbmRvdy5zY3JvbGxZIC0gdGhpcy5fc2Nyb2xsVG9wKSA+IHRoaXMuYnVmZmVyICYmXG4gICAgICAgICFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZm9jdXNTdHlsZXNPbicpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgICAgIHRoaXMudHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdGbG9hdGluZ0FjdGlvbkJ1dHRvbl9fdHJpZ2dlci0tc2hvdy1kaXJlY3QnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnBvc2l0aW9uUGFuZWwoKTtcbiAgICAgIHRoaXMuc2V0WXBvc2l0aW9uKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAndG91Y2htb3ZlJyxcbiAgICAgIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy50cmlnZ2VyLmNsYXNzTGlzdC5hZGQoJ0Zsb2F0aW5nQWN0aW9uQnV0dG9uX190cmlnZ2VyLS10b3VjaCcpO1xuICAgICAgfSxcbiAgICAgIHRydWVcbiAgICApO1xuICAgIHRoaXMudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ3RvdWNoZW5kJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy50cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ0Zsb2F0aW5nQWN0aW9uQnV0dG9uX190cmlnZ2VyLS10b3VjaCcpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIHRoaXMubGlua3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIChlKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ0Zsb2F0aW5nQWN0aW9uQnV0dG9uLS1vcGVuZWQnKSAmJiBlLnRhcmdldCA9PT0gdGhpcy5saW5rc0NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmxpbmtzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ0Zsb2F0aW5nQWN0aW9uQnV0dG9uX19pdGVtcy1oaWRlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdG9nZ2xlUGFnZVdyYXBwZXJDb250ZW50KHRvZ2dsZSkge1xuICAgIGNvbnN0IHNoYXJlZE5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hhcmVkTmF2aWdhdGlvbicpO1xuICAgIGNvbnN0IHBhZ2VXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VXcmFwcGVyJyk7XG4gICAgY29uc3QgcGFnZVdyYXBwZXJDaGlsZHJlbiA9IHBhZ2VXcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJzpub3QoW2NsYXNzKj1GbG9hdGluZ0FjdGlvbkJ1dHRvbl0pJyk7XG5cbiAgICBpZiAodG9nZ2xlKSB7XG4gICAgICBwYWdlV3JhcHBlckNoaWxkcmVuLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgfSk7XG4gICAgICBpZiAoY2hlY2tEZWZpbmVkKHNoYXJlZE5hdmlnYXRpb24pKSB7XG4gICAgICAgIHNoYXJlZE5hdmlnYXRpb24uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhZ2VXcmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIHBhZ2VXcmFwcGVyQ2hpbGRyZW4uZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0WXBvc2l0aW9uKCkge1xuICAgIGlmIChnZXRCcmVha3BvaW50U2l6ZSgpICE9PSAnbGFyZ2UnKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gJ3Vuc2V0JztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke2dldFN0aWNreU5hdkhlaWdodFYyKG51bGwsIGZhbHNlKX1weGA7XG4gIH1cblxuICB0cmFwRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXNhYmxlRWxzID0gZ2V0VGFiYmFibGUodGhpcy5lbGVtZW50KTtcbiAgICBjb25zdCBmaXJzdEZvY3VzYWJsZUVsID0gZm9jdXNhYmxlRWxzWzBdO1xuICAgIGNvbnN0IGxhc3RGb2N1c2FibGVFbCA9IGZvY3VzYWJsZUVsc1tmb2N1c2FibGVFbHMubGVuZ3RoIC0gMV07XG5cbiAgICB0aGlzLmJvdW5kS2V5RG93biA9IChlKSA9PiB7XG4gICAgICBjb25zdCBpc1RhYlByZXNzZWQgPSBlLmtleSA9PT0gJ1RhYicgfHwgZS5rZXlDb2RlID09PSBLZXlDb2RlLlRBQjtcblxuICAgICAgaWYgKCFpc1RhYlByZXNzZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZmlyc3RGb2N1c2FibGVFbCkge1xuICAgICAgICAgIGxhc3RGb2N1c2FibGVFbC5mb2N1cygpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBsYXN0Rm9jdXNhYmxlRWwpIHtcbiAgICAgICAgZmlyc3RGb2N1c2FibGVFbC5mb2N1cygpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuYm91bmRLZXlEb3duKTtcbiAgfVxuXG4gIG9wZW5QYW5lbCgpIHtcbiAgICB0aGlzLl9zY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB0aGlzLnNldEFyaWFFeHBhbmRlZCh0cnVlKTtcbiAgICBGbG9hdGluZ0FjdGlvbkJ1dHRvbi50b2dnbGVQYWdlV3JhcHBlckNvbnRlbnQodHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUJvdW5kRG9jdW1lbnRDbGljayk7XG4gICAgdGhpcy5saW5rc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdGbG9hdGluZ0FjdGlvbkJ1dHRvbl9faXRlbXMtaGlkZScpO1xuICB9XG5cbiAgY2xvc2VQYW5lbCgpIHtcbiAgICB0aGlzLnNldEFyaWFFeHBhbmRlZChmYWxzZSk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ0Zsb2F0aW5nQWN0aW9uQnV0dG9uLS1vcGVuZWQnKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQm91bmREb2N1bWVudENsaWNrKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuYm91bmRLZXlEb3duKTtcbiAgICBGbG9hdGluZ0FjdGlvbkJ1dHRvbi50b2dnbGVQYWdlV3JhcHBlckNvbnRlbnQoZmFsc2UpO1xuICB9XG5cbiAgaGFuZGxlRG9jdW1lbnRDbGljayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZS5pbmRleE9mKCdGbG9hdGluZ0FjdGlvbkJ1dHRvbicpID09PSAtMSkge1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0QXJpYUV4cGFuZGVkKHZhbCkge1xuICAgIHRoaXMudHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB2YWwpO1xuICB9XG5cbiAgcG9zaXRpb25QYW5lbCgpIHtcbiAgICBjb25zdCB3aW5kb3dJbm5lcldpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLCAxMCk7XG4gICAgY29uc3Qgc2lkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RpcicpICE9PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgY29uc3QgeVBvcyA9IGAke01hdGguZmxvb3IoKCh3aW5kb3dJbm5lcldpZHRoIC0gdGhpcy5ib2R5TWF4V2lkdGgpIC8gMikpfXB4YDtcblxuICAgIGlmICh3aW5kb3dJbm5lcldpZHRoID4gdGhpcy5ib2R5TWF4V2lkdGgpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVtzaWRlXSA9IHlQb3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVtzaWRlXSA9ICcwcHgnO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBGbG9hdGluZ0FjdGlvbkJ1dHRvbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkZsb2F0aW5nQWN0aW9uQnV0dG9uJyk7XG5pZiAoRmxvYXRpbmdBY3Rpb25CdXR0b25FbGVtZW50cy5sZW5ndGgpIHtcbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChcbiAgICBGbG9hdGluZ0FjdGlvbkJ1dHRvbkVsZW1lbnRzLFxuICAgIGVsID0+IG5ldyBGbG9hdGluZ0FjdGlvbkJ1dHRvbihlbClcbiAgKTtcbn1cbiIsImV4cG9ydCBjb25zdCBLZXlDb2RlID0ge1xuICBCQUNLU1BBQ0U6IDgsXG4gIERFTEVURTogNDYsXG4gIERPV046IDQwLFxuICBFTkQ6IDM1LFxuICBFU0M6IDI3LFxuICBIT01FOiAzNixcbiAgTEVGVDogMzcsXG4gIFBBR0VfRE9XTjogMzQsXG4gIFBBR0VfVVA6IDMzLFxuICBSRVRVUk46IDEzLFxuICBSSUdIVDogMzksXG4gIFNQQUNFOiAzMixcbiAgVEFCOiA5LFxuICBVUDogMzhcbn07XG4iLCJleHBvcnQgY29uc3QgYnJlYWtwb2ludHMgPSB7XG4gIHNtYWxsOiA3NDAsXG4gIG1lZGl1bTogOTAwLFxuICB3aWRlcjogMTAwMCxcbiAgY3VycmVudDogbnVsbFxufTtcblxuZXhwb3J0IGNvbnN0IGdldERldmljZU9yaWVudGF0aW9uID0gKCkgPT4ge1xuICBjb25zdCAkd2luZG93ID0gJCh3aW5kb3cpO1xuICByZXR1cm4gJHdpbmRvdy53aWR0aCgpID4gJHdpbmRvdy5oZWlnaHQoKSA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0Jztcbn07XG5cbmNvbnN0IGdldExhcmdlckJyZWFrcG9pbnQgPSB3aWR0aCA9PiAoXG4gIHdpZHRoIDw9IGJyZWFrcG9pbnRzLm1lZGl1bSA/ICdtZWRpdW0nIDogJ2xhcmdlJ1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldEJyZWFrcG9pbnRTaXplID0gKG9sZENhbGMgPSB0cnVlKSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gb2xkQ2FsYyA/ICQod2luZG93KS53aWR0aCgpIDogd2luZG93LmlubmVyV2lkdGg7XG4gIHJldHVybiAod2lkdGggPD0gYnJlYWtwb2ludHMuc21hbGwpID8gJ3NtYWxsJyA6IGdldExhcmdlckJyZWFrcG9pbnQod2lkdGgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzQnJlYWtwb2ludFNtYWxsID0gKG9sZENhbGMgPSB0cnVlKSA9PiB7XG4gIHJldHVybiBnZXRCcmVha3BvaW50U2l6ZShvbGRDYWxjKSA9PT0gJ3NtYWxsJztcbn07XG5cbmV4cG9ydCBjb25zdCBpc0JyZWFrcG9pbnRNZWRpdW0gPSAob2xkQ2FsYyA9IHRydWUpID0+IHtcbiAgcmV0dXJuIGdldEJyZWFrcG9pbnRTaXplKG9sZENhbGMpID09PSAnbWVkaXVtJztcbn07XG5cbmV4cG9ydCBjb25zdCBpc01vYmlsZURldmljZSA9ICgpID0+IHtcbiAgcmV0dXJuICgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2ggfHwgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59O1xuXG5leHBvcnQgY29uc3QgaXNOb3RNb2JpbGVEZXZpY2UgPSAoKSA9PiB7XG4gIHJldHVybiAhaXNNb2JpbGVEZXZpY2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1RhYmxldERldmljZSA9ICgpID0+IHtcbiAgcmV0dXJuIC8oaXBhZHx0YWJsZXR8KGFuZHJvaWQoPyEuKm1vYmlsZSkpfCh3aW5kb3dzKD8hLipwaG9uZSkoLip0b3VjaCkpfGtpbmRsZXxwbGF5Ym9va3xzaWxrfChwdWZmaW4oPyEuKihJUHxBUHxXUCkpKSkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0lPUyA9ICgpID0+IHtcbiAgcmV0dXJuICgvKGlwYWR8aXBob25lfGlwb2QpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc05vdElPUyA9ICgpID0+IHtcbiAgcmV0dXJuICFpc0lPUygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzV2luZG93c1Bob25lID0gKCkgPT4ge1xuICByZXR1cm4gKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aW5kb3dzIHBob25lJykgIT09IC0xKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbmRyb2lkVmVyc2lvbiA9ICgpID0+IHtcbiAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gIGlmICh1YS5pbmRleE9mKCdBbmRyb2lkJykgPj0gMCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHVhLnNsaWNlKHVhLmluZGV4T2YoJ0FuZHJvaWQnKSArIDgpKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRCcm93c2VyVXNlckFnZW50ID0gKCkgPT4ge1xuICBjb25zdCB7IHVzZXJBZ2VudCB9ID0gbmF2aWdhdG9yO1xuICByZXR1cm4gdXNlckFnZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGRldGVjdEJyb3dzZXJzID0gKCkgPT4ge1xuICBjb25zdCB1c2VyQWdlbnQgPSBnZXRCcm93c2VyVXNlckFnZW50KCk7XG4gIGNvbnN0IGJyb3dzZXJzID0ge1xuICAgIGlzQ2hyb21lOiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPiAtMSxcbiAgICBpc01zRWRnZTogdXNlckFnZW50LmluZGV4T2YoJ0VkZ2UnKSA+IC0xLFxuICAgIGlzRXhwbG9yZXI6IHVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgPiAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpID4gLTEsIC8vIE1TSUUgPSBJRTEwIGFuZCBiZWxvdywgVHJpZGVudCA9IElFMTFcbiAgICBpc0ZpcmVmb3g6IHVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMSxcbiAgICBpc1NhZmFyaTogdXNlckFnZW50LmluZGV4T2YoJ1NhZmFyaScpID4gLTEsXG4gICAgaXNPcGVyYTogdXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignb3AnKSA+IC0xXG4gIH07XG5cbiAgaWYgKGJyb3dzZXJzLmlzQ2hyb21lICYmIGJyb3dzZXJzLmlzU2FmYXJpKSB7XG4gICAgYnJvd3NlcnMuaXNTYWZhcmkgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChicm93c2Vycy5pc0Nocm9tZSAmJiBicm93c2Vycy5pc09wZXJhKSB7XG4gICAgYnJvd3NlcnMuaXNDaHJvbWUgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBicm93c2Vycztcbn07XG5cbmV4cG9ydCBjb25zdCBpc0llID0gKCkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTGlzdC5jb250YWlucygnaWUnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc01zRWRnZSA9ICgpID0+IHtcbiAgcmV0dXJuIGRldGVjdEJyb3dzZXJzKCkuaXNNc0VkZ2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNJZTExID0gKCkgPT4ge1xuICByZXR1cm4gKCF3aW5kb3cuQWN0aXZlWE9iamVjdCAmJiAnQWN0aXZlWE9iamVjdCcgaW4gd2luZG93KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRWaWV3cG9ydFNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IHRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICB0ZXN0LnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246IGZpeGVkO3RvcDogMDtsZWZ0OiAwO2JvdHRvbTogMDtyaWdodDogMDsnO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRlc3QsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5maXJzdENoaWxkKTtcblxuICBjb25zdCBkaW1zID0geyB3aWR0aDogdGVzdC5vZmZzZXRXaWR0aCwgaGVpZ2h0OiB0ZXN0Lm9mZnNldEhlaWdodCB9O1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGVzdCk7XG5cbiAgcmV0dXJuIGRpbXM7XG59O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsVG9FbGVtZW50ID0gKGVsZW1lbnQsIG9wdGlvbnMsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0ICRlbGVtZW50ID0gZWxlbWVudCBpbnN0YW5jZW9mIGpRdWVyeSA/IGVsZW1lbnQgOiAkKGVsZW1lbnQpO1xuXG4gIC8vIE9wdGlvbnMgYXJlIG9wdGlvbmFsXG4gIGxldCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBTZXQgZGVmYXVsdHNcbiAgb3B0cyA9ICQuZXh0ZW5kKHtcbiAgICBhZGp1c3RtZW50OiAwLFxuICAgIGVhc2U6ICdlYXNlT3V0U2luZScsXG4gICAgZHVyYXRpb246IDgwMCxcbiAgICBjb250YWluZXI6ICQoJ2JvZHksIGh0bWwnKVxuICB9LCBvcHRzKTtcblxuICAvLyBIYXMgYW4gZWxlbWVudCBiZWVuIHN1cHBsaWVkP1xuICBpZiAoJGVsZW1lbnQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gU2Nyb2xsIHRvIHRoZSB0YXJnZXQgZWxlbWVudCBhbGxvd2luZyBmb3IgdGhlIHV0aWxpdHkgbWVudVxuICBvcHRzLmNvbnRhaW5lci5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgc2Nyb2xsVG9wOiAkZWxlbWVudC5vZmZzZXQoKS50b3AgLSBvcHRzLmFkanVzdG1lbnRcbiAgfSwgb3B0cy5kdXJhdGlvbiwgb3B0cy5lYXNlLCAoKSA9PiB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gRm9yIHVuaXQgdGVzdHNcbiAgcmV0dXJuIG9wdHM7XG59O1xuXG4vKipcbiAqIERldGVjdCBNb2Rlcm4gQnJvd3NlciBieSBhdmFpbGFiaWxpdHkgb2YgQmlnSW50IGZlYXR1cmUuXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGhhc0JpZ0ludFN1cHBvcnQgPSAoKSA9PiB7XG4gIHJldHVybiAodHlwZW9mIEJpZ0ludCA9PT0gJ2Z1bmN0aW9uJyk7XG59O1xuIiwiLy8gdXNhZ2U6IHdyYXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYS53cmFwX21lJyksIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbmV4cG9ydCBjb25zdCB3cmFwID0gKGVsLCB3cmFwcGVyKSA9PiB7XG4gIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChlbCk7XG59O1xuXG4vLyB1c2FnZTogdW53cmFwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EudW53cmFwX21lJykpO1xuZXhwb3J0IGNvbnN0IHVud3JhcCA9IChlbCkgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICB3aGlsZSAoZWwuZmlyc3RDaGlsZCkge1xuICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZWwuZmlyc3RDaGlsZCwgZWwpO1xuICB9XG4gIHBhcmVudC5yZW1vdmVDaGlsZChlbCk7XG59O1xuXG5cbi8vIHdyYXBBbGw6IHJlcGxpY2F0ZXMgalF1ZXJ5J3MgJC53cmFwQWxsKCkgZm9yIG5vbi1qUXVlcnkgZWxlbWVudChzKSwgZXhhbXBsZSB1c2FnZTpcbi8vICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICB3cmFwQWxsKGNvbXBvbmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0b3InKSwgd3JhcHBlcik7XG5leHBvcnQgY29uc3Qgd3JhcEFsbCA9IChlbGVtZW50cywgd3JhcHBlcikgPT4ge1xuICBjb25zdCBjcmVhdGVBcnJheSA9IChlbCkgPT4ge1xuICAgIHJldHVybiBlbCBpbnN0YW5jZW9mIE5vZGVMaXN0ID8gWy4uLmVsXSA6IFtlbF07XG4gIH07XG4gIGNvbnN0IGVsZW1lbnRzQXJyYXkgPSBjcmVhdGVBcnJheShlbGVtZW50cyk7XG4gIGlmICghZWxlbWVudHNBcnJheS5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcGFyZW50ID0gZWxlbWVudHNBcnJheVswXS5wYXJlbnROb2RlO1xuICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnRzQXJyYXlbMF0pO1xuICBlbGVtZW50c0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcbn07XG5cbi8vIEpTIHJlcGxhY2VtZW50IGZvciBqUXVlcnkgJC5hZnRlcigpXG5leHBvcnQgY29uc3QgaW5zZXJ0QWZ0ZXIgPSAoYmVmb3JlLCBhZnRlcikgPT4gYmVmb3JlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGFmdGVyLCBiZWZvcmUubmV4dFNpYmxpbmcpO1xuXG4vLyBKUyByZXBsYWNlbWVudCBmb3IgalF1ZXJ5ICQuYmVmb3JlKClcbmV4cG9ydCBjb25zdCBpbnNlcnRCZWZvcmUgPSAoYWZ0ZXIsIGJlZm9yZSkgPT4gYWZ0ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYmVmb3JlLCBhZnRlcik7XG4iLCIvKiBnbG9iYWwgYXBwUmVhZHlUaW1lciAqL1xuXG5pbXBvcnQgeyBpc0JyZWFrcG9pbnRTbWFsbCwgZ2V0QnJlYWtwb2ludFNpemUgfSBmcm9tICcuL2Jyb3dzZXJEZXRlY3Rpb24nO1xuaW1wb3J0IHsgS2V5Q29kZSB9IGZyb20gJy4vYXJpYSc7XG5cbmNvbnN0ICRuYXZIZWFkZXIgPSAkKCcjaGVhZGVyLCAuZHhuYXYtaGVhZGVyJyk7XG5leHBvcnQgY29uc3Qgc3RpY2t5TmF2aWdhdGlvbkVuYWJsZWQgPSAkbmF2SGVhZGVyLmF0dHIoJ2RhdGEtbmF2LXR5cGUnKSA9PT0gJ3N0aWNreSc7XG5leHBvcnQgY29uc3Qgc3RpY2t5TmF2aWdhdGlvblRyYW5zaXRpb25Qb2ludCA9IDIwMDtcbmNvbnN0IHRlbXBsYXRlQ2FjaGUgPSB7fTtcblxuZXhwb3J0IGNvbnN0IGdvb2dsZU1hcFN0eWxlcyA9IFtcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAnYWRtaW5pc3RyYXRpdmUubG9jYWxpdHknLFxuICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIGNvbG9yOiAnIzY2NjY2NidcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdsYW5kc2NhcGUubWFuX21hZGUnLFxuICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIGNvbG9yOiAnI2Y4ZjZmNCdcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdwb2knLFxuICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgdmlzaWJpbGl0eTogJ29mZidcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxuICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIGNvbG9yOiAnI2FmYWJhNCdcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxuICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuc3Ryb2tlJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgY29sb3I6ICcjZTZlNmU2J1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXG4gICAgZWxlbWVudFR5cGU6ICdsYWJlbHMnLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBzYXR1cmF0aW9uOiAtMTVcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXkuY29udHJvbGxlZF9hY2Nlc3MnLFxuICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIGNvbG9yOiAnI2FmYWJhNCdcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXkuY29udHJvbGxlZF9hY2Nlc3MnLFxuICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLmljb24nLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBzYXR1cmF0aW9uOiAtMTAwXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAncm9hZC5sb2NhbCcsXG4gICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5maWxsJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgY29sb3I6ICcjZmZmZmZmJ1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQubG9jYWwnLFxuICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLmljb24nLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBzYXR1cmF0aW9uOiAnNzcnXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdCcsXG4gICAgZWxlbWVudFR5cGU6ICdsYWJlbHMuaWNvbicsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIHNhdHVyYXRpb246ICctMTAwJ1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcbiAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LmZpbGwnLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjYzVkN2RlJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGlnaHRuZXNzOiAtOVxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IGlzUnRsID0gKCkgPT4ge1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXTtcbiAgcmV0dXJuIGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdydGwnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDYWNoZWRTY3JpcHQgPSAodXJsLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IG5ld09wdGlvbnMgPSAkLmV4dGVuZChvcHRpb25zIHx8IHt9LCB7XG4gICAgZGF0YVR5cGU6ICdzY3JpcHQnLFxuICAgIGNhY2hlOiB0cnVlLFxuICAgIHVybFxuICB9KTtcblxuICByZXR1cm4gJC5hamF4KG5ld09wdGlvbnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEhlaWdodCA9IChlbGVtKSA9PiB7XG4gIHJldHVybiAoZWxlbSA/IGVsZW0uY2xpZW50SGVpZ2h0IDogMCk7XG59O1xuXG4vLyBtYWtlIHN1cmUgdG8gcGFzcyAnb2xkQ2FsY3VsYXRpb24gPSBmYWxzZScgdG8gdXNlIHRoZSBuZXcgcmVmaW5lZCBjYWxjdWxhdGlvblxuLy8gb3IgdXNlIGdldFN0aWNreU5hdkhlaWdodFYyKClcbmV4cG9ydCBjb25zdCBnZXRTdGlja3lOYXZIZWlnaHQgPSAoeVBvcywgb2xkQ2FsY3VsYXRpb24gPSB0cnVlKSA9PiB7XG4gIGNvbnN0IHlQb3NpdGlvbiA9IHR5cGVvZiB5UG9zICE9PSAnbnVtYmVyJyA/IDAgOiB5UG9zO1xuICBjb25zdCBzaGFyZWRIZWFkZXIgPSAkKCcuZHhuYXYtaGVhZGVyJyk7XG4gIGNvbnN0ICRoZWFkZXIgPSBzaGFyZWRIZWFkZXIubGVuZ3RoID8gc2hhcmVkSGVhZGVyIDogJCgnI2hlYWRlcicpO1xuICBjb25zdCAkaW5QYWdlTmF2ID0gJCgnLkluUGFnZU5hdmlnYXRpb24nKTtcbiAgY29uc3QgJGluUGFnZU5hdlN0aWNreSA9ICQoJy5JblBhZ2VOYXZpZ2F0aW9uLS1zdGlja3knKTtcbiAgY29uc3QgJGluUGFnZU5hdkJhciA9ICQoJy5JblBhZ2VOYXZpZ2F0aW9uX19iYXInKTtcbiAgY29uc3QgZHhOYXZQcmltYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR4bmF2X19wcmltYXJ5Jyk7XG4gIGNvbnN0IGJyZWFrcG9pbnQgPSBnZXRCcmVha3BvaW50U2l6ZSgpO1xuICBjb25zdCBjaGVja1N0aWNreU5hdiA9ICRoZWFkZXIubGVuZ3RoID4gMCA/ICRoZWFkZXIuY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnIDogZmFsc2U7XG4gIGNvbnN0IGluUGFnZU5hdlRvcCA9ICRpblBhZ2VOYXYubGVuZ3RoID4gMCA/ICRpblBhZ2VOYXYub2Zmc2V0KCkudG9wIDogbnVsbDtcbiAgY29uc3QgaXNTdGlja3lOYXYgPSBzaGFyZWRIZWFkZXIubGVuZ3RoID8gdHJ1ZSA6IGNoZWNrU3RpY2t5TmF2O1xuICBsZXQgaGVpZ2h0ID0gMDtcblxuICBpZiAoIWlzU3RpY2t5TmF2KSB7XG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIC8vIGhhcmQgY29kaW5nIHZhbHVlcyBoZXJlIHRvIHByZXZlbnQgaGF2aW5nIHRvIHJlcGVhdGVkbHkgY2xvbmUgYW5kIG1lYXN1cmUgdGhlIGhlYWRlclxuICBjb25zdCBvbGROYXZCcmVha3BvaW50ID0gOTYwO1xuXG4gIC8vIGFkZGVkICRpblBhZ2VOYXYuY3NzKCdkaXNwbGF5JykgY2hlY2sgZm9yIExSQS0xMDg1MVxuICBpZiAoaW5QYWdlTmF2VG9wICE9PSBudWxsICYmIHlQb3NpdGlvbiA+PSBpblBhZ2VOYXZUb3AgJiYgYnJlYWtwb2ludCA9PT0gJ2xhcmdlJyAmJiAkaW5QYWdlTmF2LmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcbiAgICByZXR1cm4gJGluUGFnZU5hdi5vdXRlckhlaWdodCgpO1xuICB9XG5cbiAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAvLyB0aGlzIGlzIHRoZSBvbGQgbmF2aWdhdGlvbiwgb25seSBzaG93biB3aGVuIE5hYVMgaXMgZG93biwgaGFyZCBjb2RpbmcgdmFsdWVzIHRvIHByZXZlbnQgaGF2aW5nIHRvIGNsb25lL21lYXN1cmUgdGhlIERPTSBlbGVtZW50cyBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuICBjb25zdCBnZXROYXZpZ2F0aW9uSGVpZ2h0ID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3dXaWR0aCA+PSBvbGROYXZCcmVha3BvaW50ICYmIHlQb3NpdGlvbiA8IDIwMCkge1xuICAgICAgcmV0dXJuIDEwNjtcbiAgICB9XG4gICAgcmV0dXJuIDUwO1xuICB9O1xuXG4gIGNvbnN0IGdldE5hYVNIZWlnaHQgPSAob2xkKSA9PiB7XG4gICAgbGV0IHByaW1hcnlOYXZIZWlnaHQ7XG5cbiAgICBpZiAob2xkKSB7XG4gICAgICBwcmltYXJ5TmF2SGVpZ2h0ID0gZ2V0SGVpZ2h0KGR4TmF2UHJpbWFyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByaW1hcnlOYXZIZWlnaHQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR4bmF2LXNjcm9sbERvd24nKSA9PT0gbnVsbCAmJiAhJGluUGFnZU5hdlN0aWNreS5sZW5ndGgpID8gZ2V0SGVpZ2h0KGR4TmF2UHJpbWFyeSkgKyBwYXJzZUludChzaGFyZWRIZWFkZXIuY3NzKCd0b3AnKSwgMTApIDogMDtcbiAgICB9XG5cbiAgICBsZXQgYnJlYWRjcnVtYk5hdkhlaWdodCA9IGdldEhlaWdodChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHhuYXZfX2JyZWFkY3J1bWJzLWNvbnRhaW5lcicpKTtcbiAgICBjb25zdCBub3RpZmljYXRpb25IZWlnaHQgPSBnZXRIZWlnaHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbkJhcnNXcmFwcGVyJykpO1xuICAgIGxldCBpblBhZ2VOYXZpZ2F0aW9uSGVpZ2h0ID0gMDtcbiAgICBpZiAoJGluUGFnZU5hdi5sZW5ndGgpIHtcbiAgICAgIGlmICgkaW5QYWdlTmF2U3RpY2t5Lmxlbmd0aCkge1xuICAgICAgICBicmVhZGNydW1iTmF2SGVpZ2h0ID0gMDtcbiAgICAgICAgaWYgKHBhcnNlSW50KCRpblBhZ2VOYXZCYXIuY3NzKCd0b3AnKSwgMTApID09PSAwKSB7XG4gICAgICAgICAgaW5QYWdlTmF2aWdhdGlvbkhlaWdodCA9ICRpblBhZ2VOYXYuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQoJGluUGFnZU5hdkJhci5jc3MoJ3RvcCcpLCAxMCkgPCAwKSB7XG4gICAgICAgICAgaW5QYWdlTmF2aWdhdGlvbkhlaWdodCA9IE1hdGgubWF4KCRpblBhZ2VOYXYub3V0ZXJIZWlnaHQoKSArIHBhcnNlSW50KCRpblBhZ2VOYXZCYXIuY3NzKCd0b3AnKSwgMTApLCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJpbWFyeU5hdkhlaWdodCArIGJyZWFkY3J1bWJOYXZIZWlnaHQgKyBub3RpZmljYXRpb25IZWlnaHQgKyAob2xkID8gMCA6IGluUGFnZU5hdmlnYXRpb25IZWlnaHQpO1xuICB9O1xuXG4gIGlmIChzaGFyZWRIZWFkZXIubGVuZ3RoKSB7XG4gICAgaGVpZ2h0ID0gZ2V0TmFhU0hlaWdodChvbGRDYWxjdWxhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgaGVpZ2h0ID0gZ2V0TmF2aWdhdGlvbkhlaWdodCgpO1xuICB9XG5cbiAgcmV0dXJuIGhlaWdodDtcbn07XG5cbi8vIHNob3VsZCBiZSB1c2VkIHVudGlsIG1lcmdlZCB3aXRoIGdldE5hdmlnYXRpb25IZWlnaHRcbmV4cG9ydCBjb25zdCBnZXRTdGlja3lOYXZIZWlnaHRWMiA9ICh5UG9zKSA9PiB7XG4gIHJldHVybiBnZXRTdGlja3lOYXZIZWlnaHQoeVBvcywgZmFsc2UpO1xufTtcblxuXG5leHBvcnQgY29uc3Qgc2Nyb2xsVG8gPSAodGFyZ2V0LCBkdXJhdGlvbiwgY2FsbGJhY2ssIGVhc2luZywgaWdub3JlU3RpY2t5TmF2LCB5T2Zmc2V0ID0gMCkgPT4ge1xuICBjb25zdCBuZXdEdXJhdGlvbiA9ICh0eXBlb2YgZHVyYXRpb24gIT09ICdudW1iZXInKSA/IDgwMCA6IGR1cmF0aW9uO1xuICBjb25zdCBuZXdDYWxsYmFjayA9ICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpID8gbnVsbCA6IGNhbGxiYWNrO1xuICBjb25zdCBuZXdFYXNpbmcgPSAodHlwZW9mIGVhc2luZyAhPT0gJ3N0cmluZycpID8gJ2Vhc2VPdXRTaW5lJyA6IGVhc2luZztcbiAgbGV0IHBvc2l0aW9uID0gMDtcblxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ251bWJlcicpIHsgLy8gUHggdmFsdWVcbiAgICBwb3NpdGlvbiA9IHRhcmdldDtcbiAgfSBlbHNlIHsgLy8gRWxlbWVudFxuICAgIGNvbnN0ICR0YXJnZXRFbCA9IHRhcmdldCB8fCAkKCdib2R5Jyk7XG4gICAgcG9zaXRpb24gPSAkdGFyZ2V0RWwub2Zmc2V0KCkudG9wO1xuICB9XG5cbiAgaWYgKGlnbm9yZVN0aWNreU5hdiAhPT0gdHJ1ZSkge1xuICAgIHBvc2l0aW9uIC09IGdldFN0aWNreU5hdkhlaWdodChwb3NpdGlvbik7XG4gIH1cblxuICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoXG4gICAgeyBzY3JvbGxUb3A6IHBvc2l0aW9uICsgeU9mZnNldCB9LFxuICAgIG5ld0R1cmF0aW9uLFxuICAgIG5ld0Vhc2luZ1xuICApXG4gICAgLnByb21pc2UoKVxuICAgIC5kb25lKG5ld0NhbGxiYWNrKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja0RlZXBMaW5rID0gKGhyZWYpID0+IHtcbiAgbGV0IGRlZXBMaW5rID0gZmFsc2U7XG4gIGNvbnN0IHNwZWVkID0gMi41O1xuXG4gIGNvbnN0IGhhc2hQb3MgPSBocmVmLmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2hQb3MgKyAxIDwgaHJlZi5sZW5ndGggJiYgaGFzaFBvcyAhPT0gLTEpIHtcbiAgICBjb25zdCBpZCA9IGhyZWYuc3Vic3RyaW5nKGhhc2hQb3MsIGhyZWYubGVuZ3RoKTtcbiAgICBpZiAoJChpZCkubGVuZ3RoID09PSAxKSB7XG4gICAgICBsZXQgbG9jYXRpb24gPSAkKGlkKTtcbiAgICAgIGxldCBkdXJhdGlvbiA9IGxvY2F0aW9uLm9mZnNldCgpLnRvcCAvIHNwZWVkO1xuXG4gICAgICAvLyBMUkEtMTM3OTQgfCBBY2NvcmRpb25Db250YWluZXIgfCBPcGVuIGFjY29yZGlvbiBmaXJzdCBpZiBkZWVwbGluayBpcyBpbnNpZGVcbiAgICAgIGlmICgkKCdoZWFkIFtuYW1lPVwiYWNjb3JkaW9uT25Nb2JpbGVcIl0nKS5sZW5ndGggJiYgaXNCcmVha3BvaW50U21hbGwoKSkge1xuICAgICAgICBjb25zdCBhY2NvcmRpb25QYXJlbnQgPSBsb2NhdGlvbi5jbG9zZXN0KCcuYWNjb3JkaW9uLWdyb3VwJyk7XG4gICAgICAgIGNvbnN0IGFjY29yZGlvblRpdGxlID0gYWNjb3JkaW9uUGFyZW50LmZpbmQoJy5hY2NvcmRpb24tZ3JvdXAtdGl0bGUnKTtcblxuICAgICAgICBpZiAoYWNjb3JkaW9uUGFyZW50Lmxlbmd0aCAmJiBhY2NvcmRpb25UaXRsZS5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBPcGVuIGFjY29yZGlvbiBpZiBjbG9zZWRcbiAgICAgICAgICBpZiAoIWFjY29yZGlvblBhcmVudC5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICBhY2NvcmRpb25UaXRsZS5jbGljaygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFRha2UgaW50byBhY2NvdW50IHRoZSBoZWlnaHQgb2YgdGhlIGFjY29yZGlvbiB0aXRsZVxuICAgICAgICAgIGxvY2F0aW9uID0gbG9jYXRpb24ub2Zmc2V0KCkudG9wIC0gYWNjb3JkaW9uVGl0bGUub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgICAgIHNjcm9sbFRvKGxvY2F0aW9uLCA4MDAsIG51bGwsICdlYXNlT3V0U2luZScpO1xuICAgICAgICAgIGRlZXBMaW5rID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxvY2F0aW9uLnBhcmVudHMoJy5UYWJiZWRDb250YWluZXInKS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9IGxvY2F0aW9uLmNsb3Nlc3QoJy5UYWJiZWRDb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJHRhYnMgPSAkY29udGFpbmVyLmZpbmQoJy50YWInKTtcbiAgICAgICAgY29uc3QgJHRhYkxpbmtzID0gJGNvbnRhaW5lci5maW5kKCcudGFiLWxpbmsnKTtcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMDtcblxuICAgICAgICAkdGFicy5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgIGNvbnN0ICRsb2NhdGlvbiA9ICQoZWwpLmZpbmQobG9jYXRpb24pO1xuICAgICAgICAgIGlmICgkbG9jYXRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0YWJJbmRleCA9IGk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkdGFiTGlua3MuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICBpZiAoaSA9PT0gdGFiSW5kZXgpIHtcbiAgICAgICAgICAgICQoZWwpLmNsaWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsb2NhdGlvbiA9ICRjb250YWluZXIub2Zmc2V0KCkudG9wO1xuICAgICAgICBkdXJhdGlvbiA9IGxvY2F0aW9uIC8gc3BlZWQ7XG5cbiAgICAgICAgc2Nyb2xsVG8obG9jYXRpb24sIDgwMCwgbnVsbCwgJ2Vhc2VTdGFydEZhc3RFbmRTbG93Jyk7XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICB9XG5cbiAgICAgIC8vIExSQS0xMjcwMSB8IEw0NjIgVGVzdCB8IE9wZW4gYWNjb3JkaW9uIGZpcnN0IGlmIGRlZXBsaW5rIGlzIGluc2lkZVxuICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygndmVoaWNsZXNEaXNjb3ZlcnknKSkge1xuICAgICAgICBjb25zdCBhY2NvcmRpb25QYXJlbnQgPSBsb2NhdGlvbi5wYXJlbnRzKCcuQWNjb3JkaW9uQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKGxvY2F0aW9uKTtcblxuICAgICAgICBpZiAoYWNjb3JkaW9uUGFyZW50Lmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGFjY29yZGlvbkhlYWRlciA9IGFjY29yZGlvblBhcmVudC5maW5kKCcuaGVhZGVyJyk7XG5cbiAgICAgICAgICBpZiAoIWFjY29yZGlvbkhlYWRlci5oYXNDbGFzcygnYWNjb3JkaW9uLW9wZW4nKSkge1xuICAgICAgICAgICAgYWNjb3JkaW9uSGVhZGVyLmNsaWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFjY29yZGlvbkhlYWRlci5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgaWYgKCFsb2NhdGlvbi5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgICBlbGVtZW50LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICAgICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uLm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgICAgIC0gYWNjb3JkaW9uSGVhZGVyLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdkaXNwbGF5JywgJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbG9jYXRpb24gPSBsb2NhdGlvbi5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICAtIGFjY29yZGlvbkhlYWRlci5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzY3JvbGxUbyhsb2NhdGlvbiwgZHVyYXRpb24sIG51bGwsICdlYXNlU3RhcnRGYXN0RW5kU2xvdycpO1xuICAgICAgZGVlcExpbmsgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihgQ291bGQgbm90IGZpbmQgZGVlcCBsaW5rIGVsZW1lbnQgd2l0aCBpZDogJHtpZH1gKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlZXBMaW5rOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59O1xuXG5leHBvcnQgY29uc3QgaXNQYWdlSW5JZnJhbWUgPSAoKSA9PiB7XG4gIHJldHVybiB3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcDtcbn07XG5cbmV4cG9ydCBjb25zdCBpbnNpZGVUYWJiZWRDb250YWluZXIgPSAoZWwpID0+IHtcbiAgY29uc3QgaXNJbnNpZGVUYWJiZWRDb250YWluZXIgPSAhIWVsLnBhcmVudHMoJy5UYWJiZWRDb250YWluZXInKS5ub3QoJ1tkYXRhLXRvdGFsPVwiMVwiXScpLmxlbmd0aDtcblxuICBpZiAoaXNJbnNpZGVUYWJiZWRDb250YWluZXIpIHtcbiAgICByZXR1cm4gZWwucGFyZW50cygnLlRhYmJlZENvbnRhaW5lcicpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IG1vYmlsZUFjY29yZGlvbnNBY3RpdmF0ZWQgPSAoKSA9PiB7XG4gIHJldHVybiAkKCdoZWFkIFtuYW1lPVwiYWNjb3JkaW9uT25Nb2JpbGVcIl0nKS5sZW5ndGg7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlSFRNTFRhZ3MgPSAocykgPT4ge1xuICByZXR1cm4gcy50b1N0cmluZygpLnJlcGxhY2UoL1s8Pj07XS9nLCAnJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VXJsUGFyYW1ldGVyID0gKHNQYXJhbSkgPT4ge1xuICBmdW5jdGlvbiBkZWNvZGUocykge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoKHMgfHwgJycpLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgfVxuXG4gIGNvbnN0IHNQYWdlVVJMID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XG4gIGNvbnN0IHNVUkxWYXJpYWJsZXMgPSBzUGFnZVVSTC5zcGxpdCgnJicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc1VSTFZhcmlhYmxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNQYXJhbWV0ZXJTcGxpdCA9IHNVUkxWYXJpYWJsZXNbaV0uc3BsaXQoJz0nKTtcbiAgICBpZiAoZGVjb2RlKHNQYXJhbWV0ZXJTcGxpdFswXSkgPT09IHNQYXJhbSkge1xuICAgICAgcmV0dXJuIGRlY29kZShzUGFyYW1ldGVyU3BsaXRbMV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFBhcmFtZXRlclRvVVJMID0gKHVybCwgcGFyYW0pID0+IHtcbiAgY29uc3QgbmV3VXJsID0gdXJsICsgKHVybC5zcGxpdCgnPycpWzFdID8gJyYnIDogJz8nKSArIHBhcmFtO1xuXG4gIHJldHVybiBwYXJhbSAhPT0gJycgPyBuZXdVcmwgOiB1cmw7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0T2JqZWN0S2V5cyA9IChvYmopID0+IHtcbiAgY29uc3Qga2V5cyA9IFtdO1xuICBmb3IgKGxldCBpIGluIG9iaikgeyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGtleXMucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IGNhbnZhc0RyYXdCZ0NvdmVyID0gKGN0eCwgaW1nLCB4LCB5LCB3LCBoLCBvZmZzZXRYLCBvZmZzZXRZKSA9PiB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgeCA9IHkgPSAwO1xuICAgIHcgPSBjdHguY2FudmFzLndpZHRoO1xuICAgIGggPSBjdHguY2FudmFzLmhlaWdodDtcbiAgfVxuXG4gIC8vIGRlZmF1bHQgb2Zmc2V0IGlzIGNlbnRlclxuICBvZmZzZXRYID0gdHlwZW9mIG9mZnNldFggPT09ICdudW1iZXInID8gb2Zmc2V0WCA6IDAuNTtcbiAgb2Zmc2V0WSA9IHR5cGVvZiBvZmZzZXRZID09PSAnbnVtYmVyJyA/IG9mZnNldFkgOiAwLjU7XG5cbiAgLy8ga2VlcCBib3VuZHMgWzAuMCwgMS4wXVxuICBpZiAob2Zmc2V0WCA8IDApIHtcbiAgICBvZmZzZXRYID0gMDtcbiAgfVxuICBpZiAob2Zmc2V0WSA8IDApIHtcbiAgICBvZmZzZXRZID0gMDtcbiAgfVxuICBpZiAob2Zmc2V0WCA+IDEpIHtcbiAgICBvZmZzZXRYID0gMTtcbiAgfVxuICBpZiAob2Zmc2V0WSA+IDEpIHtcbiAgICBvZmZzZXRZID0gMTtcbiAgfVxuXG4gIHZhciBpdyA9IGltZy53aWR0aCxcbiAgICBpaCA9IGltZy5oZWlnaHQsXG4gICAgciA9IE1hdGgubWluKHcgLyBpdywgaCAvIGloKSxcbiAgICBudyA9IGl3ICogciwgICAvLyBuZXcgcHJvcC4gd2lkdGhcbiAgICBuaCA9IGloICogciwgICAvLyBuZXcgcHJvcC4gaGVpZ2h0XG4gICAgY3gsIGN5LCBjdywgY2gsIGFyID0gMTtcblxuICAvLyBkZWNpZGUgd2hpY2ggZ2FwIHRvIGZpbGxcbiAgaWYgKG53IDwgdykge1xuICAgIGFyID0gdyAvIG53O1xuICB9XG4gIGlmIChuaCA8IGgpIHtcbiAgICBhciA9IGggLyBuaDtcbiAgfVxuICBudyAqPSBhcjtcbiAgbmggKj0gYXI7XG5cbiAgLy8gY2FsYyBzb3VyY2UgcmVjdGFuZ2xlXG4gIGN3ID0gaXcgLyAobncgLyB3KTtcbiAgY2ggPSBpaCAvIChuaCAvIGgpO1xuXG4gIGN4ID0gKGl3IC0gY3cpICogb2Zmc2V0WDtcbiAgY3kgPSAoaWggLSBjaCkgKiBvZmZzZXRZO1xuXG4gIC8vIG1ha2Ugc3VyZSBzb3VyY2UgcmVjdGFuZ2xlIGlzIHZhbGlkXG4gIGlmIChjeCA8IDApIHtcbiAgICBjeCA9IDA7XG4gIH1cbiAgaWYgKGN5IDwgMCkge1xuICAgIGN5ID0gMDtcbiAgfVxuICBpZiAoY3cgPiBpdykge1xuICAgIGN3ID0gaXc7XG4gIH1cbiAgaWYgKGNoID4gaWgpIHtcbiAgICBjaCA9IGloO1xuICB9XG5cbiAgLy8gZmlsbCBpbWFnZSBpbiBkZXN0LiByZWN0YW5nbGVcbiAgY3R4LmRyYXdJbWFnZShpbWcsIGN4LCBjeSwgY3csIGNoLCB4LCB5LCB3LCBoKTtcbn07XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbmV4cG9ydCBjb25zdCBoYXNQbGFjZWhvbGRlclN1cHBvcnQgPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcmV0dXJuICgncGxhY2Vob2xkZXInIGluIGVsKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1BhZ2VJblhQTUZyYW1lID0gKCkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdy5UcmlkaW9uICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LlRyaWRpb24uV2ViLlVJLlNpdGVFZGl0ICE9PSAndW5kZWZpbmVkJztcbn07XG5cbmV4cG9ydCBjb25zdCBlbGVtZW50SW5WaWV3cG9ydCA9IChlbGVtZW50LCBhZGp1c3QsIHdpbmRvd0lubmVySGVpZ2h0KSA9PiB7XG4gIGNvbnN0ICRlbGVtZW50ID0gZWxlbWVudCBpbnN0YW5jZW9mIGpRdWVyeSA/IGVsZW1lbnQgOiAkKGVsZW1lbnQpO1xuXG4gIGlmICghJGVsZW1lbnQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgJHdpbmRvdyA9ICQod2luZG93KTtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcbiAgbGV0IHdpbmRvd0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XG4gIGxldCBhZGp1c3RUb3A7XG4gIGxldCBhZGp1c3RCb3R0b207XG5cbiAgLy8gRWxlbWVudCBzcGVjaWZpY3NcbiAgY29uc3QgZWxPZmZzZXQgPSAkZWxlbWVudC5vZmZzZXQoKTtcbiAgY29uc3QgZWxUb3AgPSBlbE9mZnNldC50b3A7XG4gIGNvbnN0IGVsQm90dG9tID0gZWxUb3AgKyAkZWxlbWVudC5oZWlnaHQoKTtcblxuICAvLyBEZWZhdWx0IHZhbHVlXG4gIGNvbnN0IGRlZmF1bHRBZGp1c3QgPSAoZ2V0QnJlYWtwb2ludFNpemUoKSA9PT0gJ3NtYWxsJykgPyAyMCA6IDUwO1xuXG4gIC8vIExSQS0xMTQ5NCBGaXggaU9TIGlzc3VlIHdpdGggd2luZG93IGhlaWdodC5cbiAgLy8gVGVtcG9yYXJpbHkgYWRkIG9wdGlvbiB0byBhbGxvdyB0aGlzIHNvIFFBIGlzIG5vdFxuICAvLyByZXF1aXJlZCBvbiBTdG9yeUdhbGxlcnkgKyBTdG9yeUFydGljbGVFbmhhbmNlZEltYWdlQmxvY2tcbiAgaWYgKHR5cGVvZiB3aW5kb3dJbm5lckhlaWdodCAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93SW5uZXJIZWlnaHQpIHtcbiAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB3aW5kb3dIZWlnaHQ7XG4gIH1cblxuICAvLyBTZXQgdmlld3BvcnRCb3R0b21cbiAgY29uc3Qgdmlld3BvcnRCb3R0b20gPSBzY3JvbGxUb3AgKyB3aW5kb3dIZWlnaHQ7XG5cbiAgLy8gQWxsb3cgYWRqdXN0IHRvIGJlIHNldCBkaWZmZXJlbnQgZnJvbSB0b3AvYm90dG9tXG4gIGlmICh0eXBlb2YgYWRqdXN0ID09PSAnb2JqZWN0Jykge1xuICAgIGFkanVzdFRvcCA9IGFkanVzdC50b3A7XG4gICAgYWRqdXN0Qm90dG9tID0gYWRqdXN0LmJvdHRvbTtcbiAgfSBlbHNlIHtcbiAgICBhZGp1c3RUb3AgPSBhZGp1c3QgfHwgZGVmYXVsdEFkanVzdDtcbiAgICBhZGp1c3RCb3R0b20gPSBhZGp1c3QgfHwgZGVmYXVsdEFkanVzdDtcbiAgfVxuXG4gIHJldHVybiAoISh2aWV3cG9ydEJvdHRvbSA8IGVsVG9wICsgYWRqdXN0VG9wIHx8IHNjcm9sbFRvcCA+IGVsQm90dG9tIC0gYWRqdXN0Qm90dG9tKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tU3RyaW5nID0gKGxlbmd0aCkgPT4ge1xuICBsZXQgZm9ybWF0dGVkTGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoLCAxMCkgfHwgMDtcbiAgZm9ybWF0dGVkTGVuZ3RoID0gZm9ybWF0dGVkTGVuZ3RoIDwgMCA/IDAgOiBmb3JtYXR0ZWRMZW5ndGg7XG5cbiAgY29uc3QgY2hhcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgY29uc3QgY2hvc2VuID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtYXR0ZWRMZW5ndGg7IGkgKz0gMSkge1xuICAgIGNob3Nlbi5wdXNoKGNoYXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFycy5sZW5ndGgpKSk7XG4gIH1cblxuICByZXR1cm4gY2hvc2VuLmpvaW4oJycpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEVhc2luZ1ZhbHVlID0gKHJhdGlvKSA9PiB7XG4gIGxldCBmb3JtYXR0ZWRSYXRpbyA9IHJhdGlvIDwgMCA/IDAgOiByYXRpbztcbiAgZm9ybWF0dGVkUmF0aW8gPSBmb3JtYXR0ZWRSYXRpbyA+IDEgPyAxIDogZm9ybWF0dGVkUmF0aW87XG5cbiAgLy8gQ29udmVydCB0aGUgcmF0aW8gdG8gYSBudW1iZXIgb2YgcmFkaWFucy4gMCBtYXBzIHRvIC1QSSwgMC41IG1hcHMgdG9cbiAgLy8gMCwgMSBtYXBzIHRvIFBJXG4gIGNvbnN0IHJhZGlhbnMgPSAoZm9ybWF0dGVkUmF0aW8gKiAoMiAqIE1hdGguUEkpKSAtIE1hdGguUEk7XG5cbiAgLy8gQ29udmVydCB0aGlzIHRvIGEgdmFsdWUgdXNpbmcgYSBjb3NpbmUgY3VydmUuIE5vdGUgdGhhdCBjb3NpbmUgZ2l2ZXNcbiAgLy8gYSB2YWx1ZSBiZXR3ZWVuIC0xIGFuZCAxLCBzbyB3ZSBuZWVkIHRvIGFkZCAxIGFuZCBkaXZpZGUgYnkgMiB0b1xuICAvLyBrZWVwIGl0IGJldHdlZW4gMCBhbmQgMVxuICByZXR1cm4gKE1hdGguY29zKHJhZGlhbnMpICsgMSkgLyAyO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVTY3JvbGwgPSAoKSA9PiB7XG4gIGNvbnN0ICR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gIGNvbnN0IHNjcm9sbFRvcCA9ICR3aW5kb3cuc2Nyb2xsVG9wKCk7XG5cbiAgJHdpbmRvdy5vbihcbiAgICAnc2Nyb2xsLmRpc2FibGVTY3JvbGwgbW91c2V3aGVlbC5kaXNhYmxlU2Nyb2xsIERPTU1vdXNlU2Nyb2xsLmRpc2FibGVTY3JvbGwgdG91Y2htb3ZlLmRpc2FibGVTY3JvbGwnLFxuICAgIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICR3aW5kb3cuc2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuYWJsZVNjcm9sbCA9ICgpID0+IHtcbiAgY29uc3QgJHdpbmRvdyA9ICQod2luZG93KTtcblxuICAkd2luZG93Lm9mZignc2Nyb2xsLmRpc2FibGVTY3JvbGwgbW91c2V3aGVlbC5kaXNhYmxlU2Nyb2xsIERPTU1vdXNlU2Nyb2xsLmRpc2FibGVTY3JvbGwgdG91Y2htb3ZlLmRpc2FibGVTY3JvbGwnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW1pdE51bWJlciA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IHtcbiAgaWYgKG1pbiA+IG1heCkge1xuICAgIGNvbnN0IG9sZE1pbiA9IG1pbjtcbiAgICBtaW4gPSBtYXg7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBtYXggPSBvbGRNaW47IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgfVxuXG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsdWUpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkSWdub3JlZFJlc3BvbnNpdmVJbWFnZXMgPSAoJGltYWdlcykgPT4ge1xuICAkaW1hZ2VzLnJlbW92ZUF0dHIoJ2RhdGEtcGljdHVyZS1pZ25vcmUnKTtcbiAgd2luZG93LnJpY2hzcG9uc2l2ZUltYWdlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgdGhyb3R0bGUgPSAoZm4sIHRocmVzaGhvbGQsIHNjb3BlKSA9PiB7XG4gIGNvbnN0IHRocmVzaCA9IHRocmVzaGhvbGQgfHwgMjUwO1xuICBsZXQgbGFzdDtcbiAgbGV0IGRlZmVyVGltZXI7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gc2NvcGUgfHwgdGhpcztcblxuICAgIGNvbnN0IG5vdyA9ICtuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgaWYgKGxhc3QgJiYgbm93IDwgbGFzdCArIHRocmVzaCkge1xuICAgICAgLy8gaG9sZCBvbiB0byBpdFxuICAgICAgY2xlYXJUaW1lb3V0KGRlZmVyVGltZXIpO1xuICAgICAgZGVmZXJUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsYXN0ID0gbm93O1xuICAgICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH0sIHRocmVzaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3QgPSBub3c7XG4gICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gIH07XG59O1xuXG4vKiogKlxuICogTWVhc3VyZSB0ZXh0IHdpZHRoIHVzaW5nIEJyb3dzZXIuXG4gKlxuICogQHBhcmFtIHRleHRcbiAqIEBwYXJhbSBwYXJlbnRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgQ01TIFBvd2VyZWQgc29sdXRpb24gaW4gZnV0dXJlLlxuICovXG5leHBvcnQgY29uc3QgbWVhc3VyZVRleHRXaWR0aCA9ICh0ZXh0LCBwYXJlbnQpID0+IHtcbiAgaWYgKCF0ZXh0KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb25zdCBwYXIgPSBwYXJlbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICBjb250YWluZXIuc3R5bGUucGFkZGluZyA9ICcwJztcbiAgY29udGFpbmVyLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IHRleHQ7XG5cbiAgcGFyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnN0IHdpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICBwYXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcblxuICByZXR1cm4gd2lkdGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VHJhbnNpdGlvbkVuZEV2ZW50ID0gKCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50Jyk7XG4gIGNvbnN0IHRyYW5zaXRpb25zID0ge1xuICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcbiAgICBPVHJhbnNpdGlvbjogJyBvVHJhbnNpdGlvbkVuZCcsXG4gICAgTW96VHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICB9O1xuXG4gIGZvciAoY29uc3QgdHJhbnNpdGlvbiBpbiB0cmFuc2l0aW9ucykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKGVsLnN0eWxlW3RyYW5zaXRpb25dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0cmFuc2l0aW9uXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gKHN0ciwgZGF0YSkgPT4ge1xuICAvLyBGaWd1cmUgb3V0IGlmIHdlJ3JlIGdldHRpbmcgYSB0ZW1wbGF0ZSwgb3IgaWYgd2UgbmVlZCB0b1xuICAvLyBsb2FkIHRoZSB0ZW1wbGF0ZSAtIGFuZCBiZSBzdXJlIHRvIGNhY2hlIHRoZSByZXN1bHQuXG4gIHZhciBmbiA9ICEvXFxXLy50ZXN0KHN0cikgP1xuICAgIHRlbXBsYXRlQ2FjaGVbc3RyXSA9IHRlbXBsYXRlQ2FjaGVbc3RyXSB8fFxuICAgIHRlbXBsYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0cikuaW5uZXJIVE1MKSA6XG5cbiAgICAvLyBHZW5lcmF0ZSBhIHJldXNhYmxlIGZ1bmN0aW9uIHRoYXQgd2lsbCBzZXJ2ZSBhcyBhIHRlbXBsYXRlXG4gICAgLy8gZ2VuZXJhdG9yIChhbmQgd2hpY2ggd2lsbCBiZSBjYWNoZWQpLlxuICAgIG5ldyBGdW5jdGlvbihcIm9ialwiLFxuICAgICAgXCJ2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTtcIiArXG5cbiAgICAgIC8vIEludHJvZHVjZSB0aGUgZGF0YSBhcyBsb2NhbCB2YXJpYWJsZXMgdXNpbmcgd2l0aCgpe31cbiAgICAgIFwid2l0aChvYmope3AucHVzaCgnXCIgK1xuXG4gICAgICAvLyBDb252ZXJ0IHRoZSB0ZW1wbGF0ZSBpbnRvIHB1cmUgSmF2YVNjcmlwdFxuICAgICAgc3RyLnJlcGxhY2UoL1tcXHJcXHRcXG5dL2csIFwiIFwiKVxuICAgICAgICAucmVwbGFjZSgvJyg/PVteJV0qJT4pL2csIFwiXFx0XCIpXG4gICAgICAgIC5zcGxpdChcIidcIikuam9pbihcIlxcXFwnXCIpXG4gICAgICAgIC5zcGxpdChcIlxcdFwiKS5qb2luKFwiJ1wiKVxuICAgICAgICAucmVwbGFjZSgvPCU9KC4rPyklPi9nLCBcIicsJDEsJ1wiKVxuICAgICAgICAuc3BsaXQoXCI8JVwiKS5qb2luKFwiJyk7XCIpXG4gICAgICAgIC5zcGxpdChcIiU+XCIpLmpvaW4oXCJwLnB1c2goJ1wiKVxuICAgICAgKyBcIicpO31yZXR1cm4gcC5qb2luKCcnKTtcIik7XG5cbiAgLy8gUHJvdmlkZSBzb21lIGJhc2ljIGN1cnJ5aW5nIHRvIHRoZSB1c2VyXG4gIHJldHVybiBkYXRhID8gZm4oZGF0YSkgOiBmbjtcbn07XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbmV4cG9ydCBjb25zdCBpc0luVmlld3BvcnQgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCB3aW4gPSAkKHdpbmRvdyk7XG5cbiAgY29uc3Qgdmlld3BvcnQgPSB7XG4gICAgdG9wOiB3aW4uc2Nyb2xsVG9wKCkgKyBnZXRTdGlja3lOYXZIZWlnaHQoKSxcbiAgICBib3R0b206IHdpbi5zY3JvbGxUb3AoKSArIHdpbi5oZWlnaHQoKSxcbiAgICBsZWZ0OiB3aW4uc2Nyb2xsTGVmdCgpXG4gIH07XG4gIHZpZXdwb3J0LnJpZ2h0ID0gdmlld3BvcnQubGVmdCArIHdpbi53aWR0aCgpO1xuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW1lbnQub2Zmc2V0KCk7XG4gIGJvdW5kcy5yaWdodCA9IGJvdW5kcy5sZWZ0ICsgZWxlbWVudC5vdXRlcldpZHRoKCk7XG4gIGJvdW5kcy5ib3R0b20gPSBib3VuZHMudG9wICsgZWxlbWVudC5vdXRlckhlaWdodCgpO1xuXG4gIHJldHVybiAoISh2aWV3cG9ydC5yaWdodCA8IGJvdW5kcy5sZWZ0IHx8IHZpZXdwb3J0LmxlZnQgPiBib3VuZHMucmlnaHQgfHwgdmlld3BvcnQuYm90dG9tIDwgYm91bmRzLnRvcCB8fCB2aWV3cG9ydC50b3AgPiBib3VuZHMuYm90dG9tKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsSWZOb3RJblZpZXdwb3J0ID0gKGVsZW1lbnQsIGRpc3BsYXlUb0JvdHRvbSkgPT4ge1xuICBpZiAoIWlzSW5WaWV3cG9ydChlbGVtZW50KSkge1xuICAgIC8vIE5vdCBpbiB2aWV3XG4gICAgY29uc3Qgc2Nyb2xsVG9Qb3MgPSBkaXNwbGF5VG9Cb3R0b20gPyBlbGVtZW50Lm9mZnNldCgpLnRvcCAtICQod2luZG93KS5pbm5lckhlaWdodCgpIDogKGVsZW1lbnQub2Zmc2V0KCkudG9wXG4gICAgICAtIGdldFN0aWNreU5hdkhlaWdodCgpKTtcbiAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBzY3JvbGxUb1BvcyB9LCA4MDApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0xhbmRSb3ZlciA9ICgpID0+IHtcbiAgcmV0dXJuICEhKCQoJ2JvZHkjbGFuZHJvdmVyJykubGVuZ3RoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUYWJiYWJsZSA9IChlbGVtLCBjdXN0b21TZWxlY3RvcnMpID0+IHtcbiAgY29uc3QgZGVmYXVsdFNlbGVjdG9ycyA9IFtcbiAgICAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbaGlkZGVuXSknLFxuICAgICdzZWxlY3QnLFxuICAgICdhW2hyZWZdJyxcbiAgICAndGV4dGFyZWEnLFxuICAgICdidXR0b24nLFxuICAgICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePVwiLVwiXSknXG4gIF07XG5cbiAgY29uc3Qgc2VsZWN0b3JUeXBlcyA9IChjdXN0b21TZWxlY3RvcnMpID8gZGVmYXVsdFNlbGVjdG9ycy5jb25jYXQoY3VzdG9tU2VsZWN0b3JzKSA6IGRlZmF1bHRTZWxlY3RvcnM7XG4gIGxldCBzZWxlY3RvcnMgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JUeXBlcy5qb2luKCcsJykpO1xuICBzZWxlY3RvcnMgPSBBcnJheS5mcm9tKHNlbGVjdG9ycyk7XG4gIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5maWx0ZXIoKHNlbGVjdG9yKSA9PiB7XG4gICAgbGV0IHRhYmJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoIXNlbGVjdG9yLm9mZnNldFBhcmVudCB8fCBzZWxlY3Rvci5vZmZzZXRXaWR0aCA9PT0gMFxuICAgICAgfHwgc2VsZWN0b3Iub2Zmc2V0SGVpZ2h0ID09PSAwKSB7XG4gICAgICB0YWJiYWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzSW52aXNpYmxlKGVsKSB7XG4gICAgICBpZiAoZWwuc3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicgfHwgZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRhYmJhYmxlID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBpc0ludmlzaWJsZShlbC5wYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaXNJbnZpc2libGUoc2VsZWN0b3IpO1xuICAgIGlmICh0YWJiYWJsZSkge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0b3JzO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2tUYWJiYWJsZXMgPSAodGFiYmFibGVzKSA9PiB7XG4gIHRhYmJhYmxlcy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSAhPT0gS2V5Q29kZS5UQUIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgaWYgKHRhYmJhYmxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0YWJiYWJsZXNbMF0uZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgdGFiYmFibGVzW3RhYmJhYmxlcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhYmJhYmxlc1tpICsgMV0uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpID09PSB0YWJiYWJsZXMubGVuZ3RoIC0gMSAmJiAhZS5zaGlmdEtleSkge1xuICAgICAgICB0YWJiYWJsZXNbMF0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICB0YWJiYWJsZXNbaSAtIDFdLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJiYWJsZXNbaSArIDFdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGJhbGFuY2VFbGVtZW50SGVpZ2h0ID0gKGVsZW1lbnRzLCBhbGxvd2VkT2Zmc2V0ID0gMCkgPT4ge1xuICBjb25zdCBjb2x1bW5zID0ge307XG4gIGlmICghZWxlbWVudHMpIHtcbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuICBjb25zdCBlbGVtZW50c0FycmF5ID0gW10uc2xpY2UuY2FsbChlbGVtZW50cyk7XG4gIGxldCBoZWlnaHRUb3RhbCA9IDA7XG4gIGNvbnN0IGhlaWdodHNBcnJheSA9IGVsZW1lbnRzQXJyYXkubWFwKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIGhlaWdodFRvdGFsICs9IGVsZW1lbnRIZWlnaHQ7XG4gICAgcmV0dXJuIGVsZW1lbnRIZWlnaHQ7XG4gIH0pO1xuICBjb25zdCBnZXRCYWxhbmNlZEluZGV4ID0gKGFycmF5LCB0YXJnZXQsIHJ1bm5pbmdUb3RhbCA9IDAsIGluZGV4ID0gMCkgPT4ge1xuICAgIGNvbnN0IGlzUmVjdXJzaXZlID0gISFhcnJheVtpbmRleF0gJiYgcnVubmluZ1RvdGFsICsgYXJyYXlbaW5kZXhdIDw9ICh0YXJnZXQgLSBhbGxvd2VkT2Zmc2V0KTtcbiAgICByZXR1cm4gaXNSZWN1cnNpdmUgPyBnZXRCYWxhbmNlZEluZGV4KGFycmF5LCB0YXJnZXQsIHJ1bm5pbmdUb3RhbCArIGFycmF5W2luZGV4XSwgaW5kZXggKyAxKSA6IGluZGV4O1xuICB9O1xuICBjb25zdCBzcGxpdEluZGV4ID0gZ2V0QmFsYW5jZWRJbmRleChoZWlnaHRzQXJyYXksIGhlaWdodFRvdGFsIC8gMikgKyAxO1xuICBjb2x1bW5zLmNvbHVtbnMxID0gZWxlbWVudHNBcnJheS5zbGljZSgwLCBzcGxpdEluZGV4KTtcbiAgY29sdW1ucy5jb2x1bW5zMiA9IGVsZW1lbnRzQXJyYXkuc2xpY2Uoc3BsaXRJbmRleCwgZWxlbWVudHNBcnJheS5sZW5ndGgpO1xuICBjb2x1bW5zLmhlaWdodHNBcnJheSA9IGhlaWdodHNBcnJheTtcbiAgcmV0dXJuIGNvbHVtbnM7XG59O1xuXG5leHBvcnQgY29uc3QgZXZlbnRUcmlnZ2VyID0gKGVsZW0sIGV2ZW50VHlwZSwgZGV0YWlsID0ge30sIGJ1YmJsZXMgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudFR5cGUsIHsgZGV0YWlsLCBidWJibGVzIH0pO1xuICBlbGVtLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRFbGVtZW50Q29sbGVjdGlvblRvQXJyYXkgPSAoY29sbGVjdGlvbikgPT4ge1xuICBpZiAoY29sbGVjdGlvbiBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICByZXR1cm4gY29sbGVjdGlvbiBpbnN0YW5jZW9mIE5vZGVMaXN0ID8gW10uc2xpY2UuY2FsbChjb2xsZWN0aW9uKSA6IGNvbGxlY3Rpb24uZ2V0KCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbWlzZUVsZW1lbnRzID0gKGVsZW1lbnRzQ29sbGVjdGlvbikgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGNvbnZlcnRFbGVtZW50Q29sbGVjdGlvblRvQXJyYXkoZWxlbWVudHNDb2xsZWN0aW9uKTtcbiAgaWYgKCFlbGVtZW50cyB8fCAhZWxlbWVudHMubGVuZ3RoKSByZXR1cm47XG4gIGNvbnN0IGNsb25lZEVsZW1lbnRzID0gZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICBjbG9uZWRFbGVtZW50cy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpbmMpID0+IGVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmVkRWxlbWVudHNbaW5jXSwgZWxlbWVudCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzRWxlbWVudFZlcnRpY2FsbHlTY3JvbGxhYmxlID0gKGVsKSA9PiB7XG4gIHJldHVybiAoZWwgJiYgKGVsLnNjcm9sbEhlaWdodCA+IGVsLm9mZnNldEhlaWdodCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrRGVmaW5lZCA9IGl0ZW0gPT4gaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0gIT09IG51bGw7XG5cbmV4cG9ydCBjb25zdCB0YWJsaXN0TmF2aWdhdGlvbiA9ICh0YWJsaXN0KSA9PiB7XG4gIGNvbnN0IG9yaWVudGF0aW9uID0gdGFibGlzdC5nZXRBdHRyaWJ1dGUoJ2FyaWEtb3JpZW50YXRpb24nKTtcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IG9yaWVudGF0aW9uICYmIG9yaWVudGF0aW9uID09PSAndmVydGljYWwnO1xuICBjb25zdCB0YWJzID0gdGFibGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYlwiXScpO1xuICBjb25zdCBrZXlzID0gS2V5Q29kZTtcblxuICBjb25zdCBmb2N1c0ZpcnN0VGFiID0gKCkgPT4gdGFic1swXS5mb2N1cygpO1xuICBjb25zdCBmb2N1c0xhc3RUYWIgPSAoKSA9PiB0YWJzW3RhYnMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcblxuICBjb25zdCBmb2N1c1ByZXZpb3VzVGFiID0gKGN1cnJlbnRUYWIpID0+IHtcbiAgICBjb25zdCB0YWJJbmRleCA9IFsuLi50YWJzXS5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50ID09PSBjdXJyZW50VGFiKTtcbiAgICBpZiAodGFiSW5kZXggPT09IDApIHtcbiAgICAgIGZvY3VzTGFzdFRhYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWJzW3RhYkluZGV4IC0gMV0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9jdXNOZXh0VGFiID0gKGN1cnJlbnRUYWIpID0+IHtcbiAgICBjb25zdCB0YWJJbmRleCA9IFsuLi50YWJzXS5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50ID09PSBjdXJyZW50VGFiKTtcbiAgICBjb25zdCB0YWJzTGVuZ3RoWmVyb0luZGV4ID0gdGFicy5sZW5ndGggLSAxO1xuICAgIGlmICh0YWJJbmRleCA9PT0gdGFic0xlbmd0aFplcm9JbmRleCkge1xuICAgICAgZm9jdXNGaXJzdFRhYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWJzW3RhYkluZGV4ICsgMV0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGFibGlzdEtleWRvd25FdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlO1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlIGtleXMuRU5EOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb2N1c0xhc3RUYWIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGtleXMuSE9NRTpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZm9jdXNGaXJzdFRhYigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Uga2V5cy5MRUZUOlxuICAgICAgY2FzZSBrZXlzLlVQOlxuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZm9jdXNQcmV2aW91c1RhYihldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Uga2V5cy5SSUdIVDpcbiAgICAgIGNhc2Uga2V5cy5ET1dOOlxuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZm9jdXNOZXh0VGFiKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRhYmxpc3RLZXl1cEV2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGU7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2Uga2V5cy5MRUZUOlxuICAgICAgICBmb2N1c1ByZXZpb3VzVGFiKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Uga2V5cy5SSUdIVDpcbiAgICAgICAgZm9jdXNOZXh0VGFiKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlVGFibGlzdEtleWRvd25FdmVudHMsIGZhbHNlKTtcbiAgICBpZiAoIWlzVmVydGljYWwpIHtcbiAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGhhbmRsZVRhYmxpc3RLZXl1cEV2ZW50cywgZmFsc2UpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IChvYmopID0+IHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXBsYWNlQWxsID0gKHN0cmluZywgc2VhcmNoLCByZXBsYWNlbWVudCkgPT4ge1xuICByZXR1cm4gc3RyaW5nLnNwbGl0KHNlYXJjaCkuam9pbihyZXBsYWNlbWVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgZHhTZXRUaW1lb3V0ID0gKGNiLCB0aW1lKSA9PiB7XG4gIHNldFRpbWVvdXQoY2IsIHRpbWUpO1xuXG4gIGlmICh3aW5kb3cuYXBwUmVhZHlFdmVudC5pbml0aWF0ZWQpIHtcbiAgICBhcHBSZWFkeVRpbWVyLmFkZCh0aW1lKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYXBwUmVhZHlFdmVudC50aW1lb3V0ICs9IHRpbWU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBEeFJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUgPSAoY2IpID0+IHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IoKSk7XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZGluZ1NwaW5uZXJUb2dnbGVCdXR0b25TdGF0ZUFuZENvbnRlbnQgPSAodGFyZ2V0KSA9PiB7XG4gIGNvbnN0IHRhcmdldEVsZW1lbnQgPSB0YXJnZXQ7XG5cbiAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnQlVUVE9OJykge1xuICAgIHRhcmdldEVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG4gIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRhcmdldEVsZW1lbnQ7XG4gIFsuLi5jaGlsZHJlbl0uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGQ7XG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgfSk7XG59O1xuXG4vKipcbiAqIGFkZER4TG9hZGluZ1NwaW5uZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCBUaGUgYnV0dG9uL2xpbmsgdGhhdCB0aGUgbG9hZGluZyBzcGlubmVyIHNob3VsZCBiZSBpbnNlcnRlZCBpbnRvXG4gKi9cbmV4cG9ydCBjb25zdCBhZGREeExvYWRpbmdTcGlubmVyID0gKHRhcmdldCkgPT4ge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGljb25NYXJrdXAgPSAnPGRpdiBjbGFzcz1cIkR4TG9hZGluZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxkaXYgY2xhc3M9XCJEeExvYWRpbmdfX2ljb25cIiBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiPjwvZGl2PjwvZGl2Pic7XG4gIGNvbnN0IGxvYWRpbmdJY29uID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoaWNvbk1hcmt1cCk7XG5cbiAgbG9hZGluZ1NwaW5uZXJUb2dnbGVCdXR0b25TdGF0ZUFuZENvbnRlbnQodGFyZ2V0KTtcblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQobG9hZGluZ0ljb24pO1xufTtcblxuLyoqXG4gKiByZW1vdmVEeExvYWRpbmdTcGlubmVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgVGhlIGJ1dHRvbi9saW5rIHRoYXQgdGhlIGxvYWRpbmcgc3Bpbm5lciBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tXG4gKiBAcGFyYW0ge3N0cmluZyB8fCBIVE1MRWxlbWVudH0gcmVwbGFjZSBUaGUgc3RyaW5nIHlvdSB3b3VsZCBsaWtlIHRvIHJlcGxhY2UgdGhlIGxvYWRpbmcgc3Bpbm5lciB3aXRoIChleHBlY3RlZCB0byBiZSB0aGUgdGV4dCBvcmlnaW5hbGx5IGluIHRoZSBidXR0b24pXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVEeExvYWRpbmdTcGlubmVyID0gKHRhcmdldCkgPT4ge1xuICBjb25zdCB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0O1xuXG4gIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICB0YXJnZXRFbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbiAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG5cbiAgY29uc3QgbG9hZGluZ0ljb24gPSB0YXJnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5EeExvYWRpbmcnKTtcbiAgdGFyZ2V0RWxlbWVudC5yZW1vdmVDaGlsZChsb2FkaW5nSWNvbik7XG5cbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGFyZ2V0RWxlbWVudDtcbiAgWy4uLmNoaWxkcmVuXS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZDtcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGREeEVsZW1lbnRMb2FkaW5nU3Bpbm5lciA9ICh0YXJnZXQpID0+IHtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpY29uTWFya3VwID0gYDxkaXYgY2xhc3M9XCJEeExvYWRpbmdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDg4IDg4XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDg4IDg4O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgPHBhdGggZmlsbD1cIiNGRkZGRkZcIiBzdHlsZT1cIm9wYWNpdHk6IC4yO1wiIGQ9XCJNNDQsNWMyMS41LDAsMzksMTcuNSwzOSwzOVM2NS41LDgzLDQ0LDgzUzUsNjUuNSw1LDQ0UzIyLjUsNSw0NCw1IE00NCwwQzE5LjcsMCwwLDE5LjcsMCw0NHMxOS43LDQ0LDQ0LDQ0IHM0NC0xOS43LDQ0LTQ0UzY4LjMsMCw0NCwwTDQ0LDB6XCIvPlxuICAgIDxwYXRoIGZpbGw9XCIjRjBGMEYwXCIgZD1cIk04NS41LDQ2LjRjLTEuNCwwLTIuNS0xLjEtMi41LTIuNUM4MywyMi41LDY1LjUsNSw0NC4xLDVjLTEuNCwwLTIuNS0xLjEtMi41LTIuNVM0Mi43LDAsNDQuMSwwIEM2OC4zLDAsODgsMTkuNyw4OCw0My45Qzg4LDQ1LjMsODYuOSw0Ni40LDg1LjUsNDYuNHpcIj5cbiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwicm90YXRlXCIgZnJvbT1cIjAgNDQgNDRcIiB0bz1cIjM2MCA0NCA0NFwiIGR1cj1cIjEuNXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XG4gICAgPC9wYXRoPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5gO1xuICBjb25zdCBsb2FkaW5nSWNvbiA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGljb25NYXJrdXApO1xuXG4gIGxvYWRpbmdTcGlubmVyVG9nZ2xlQnV0dG9uU3RhdGVBbmRDb250ZW50KHRhcmdldCk7XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKGxvYWRpbmdJY29uKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2NhbFN0b3JhZ2VBdmFpbGFibGUgPSAoKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cubG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmZWF0dXJlX3Rlc3QnLCAneWVzJyk7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZlYXR1cmVfdGVzdCcpID09PSAneWVzJykge1xuICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZmVhdHVyZV90ZXN0Jyk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRTY3JpcHRGb3JCYXphYXJWb2ljZSA9IChzY3JpcHRVUkwpID0+IHtcbiAgaWYgKHNjcmlwdFVSTC50cmltKCkgIT09ICcnICYmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBzY3JpcHRbc3JjPScke3NjcmlwdFVSTH0nXWApKS5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBiYXphYXJWb2ljZVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGJhemFhclZvaWNlU2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgc2NyaXB0VVJMKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGJhemFhclZvaWNlU2NyaXB0KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVxdWFsaXNlSGVpZ2h0cyA9IChlbGVtZW50cykgPT4ge1xuICBsZXQgbWF4SGVpZ2h0ID0gMDtcbiAgWy4uLmVsZW1lbnRzXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gIH0pO1xuICBbLi4uZWxlbWVudHNdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICBpZiAoaGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICBtYXhIZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICB9KTtcbiAgWy4uLmVsZW1lbnRzXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHttYXhIZWlnaHR9cHhgO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUN1cnJlbnREYXRlID0gKCkgPT4ge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHJldHVybiAoXG4gICAgRGF0ZS5VVEMoXG4gICAgICB0b2RheS5nZXRVVENGdWxsWWVhcigpLFxuICAgICAgdG9kYXkuZ2V0VVRDTW9udGgoKSxcbiAgICAgIHRvZGF5LmdldFVUQ0RhdGUoKSxcbiAgICAgIHRvZGF5LmdldFVUQ0hvdXJzKCksXG4gICAgICB0b2RheS5nZXRVVENNaW51dGVzKClcbiAgICApXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgcHJldmVudEFjdGlvbk9uRGVlcExpbmsgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgbGlua0xvY2F0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgaWYgKGNoZWNrRGVlcExpbmsobGlua0xvY2F0aW9uKSkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==