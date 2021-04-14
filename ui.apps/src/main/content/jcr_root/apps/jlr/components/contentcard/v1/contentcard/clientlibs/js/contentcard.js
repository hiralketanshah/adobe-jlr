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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/webapp/components/ContentBlocksContainer/js/ContentBlocksContainer.js");
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

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.assign;


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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js") });


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

/***/ "./src/main/webapp/components/ContentBlocksContainer/es6/ContentBlocksContainerSwiping.js":
/*!************************************************************************************************!*\
  !*** ./src/main/webapp/components/ContentBlocksContainer/es6/ContentBlocksContainerSwiping.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _swiper = __webpack_require__(/*! swiper */ "swiper");

var _swiper2 = _interopRequireDefault(_swiper);

var _SwiperGrowingScrollbar = __webpack_require__(/*! ./SwiperGrowingScrollbar */ "./src/main/webapp/components/ContentBlocksContainer/es6/SwiperGrowingScrollbar.js");

var _SwiperGrowingScrollbar2 = _interopRequireDefault(_SwiperGrowingScrollbar);

var _index = __webpack_require__(/*! ../../../resources/dev/js/utils/index */ "./src/main/webapp/resources/dev/js/utils/index.js");

var _swiper3 = __webpack_require__(/*! ../../../resources/dev/js/utils/swiper */ "./src/main/webapp/resources/dev/js/utils/swiper.js");

var _browserDetection = __webpack_require__(/*! ../../../resources/dev/js/utils/browserDetection */ "./src/main/webapp/resources/dev/js/utils/browserDetection.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global site, enquire */

var ContentBlocksContainerSwiping = function () {
  function ContentBlocksContainerSwiping(element) {
    (0, _classCallCheck3.default)(this, ContentBlocksContainerSwiping);

    this.element = element;
    this._$window = $(window);
    this._carousel = null;
    this._initialSlide = 0;
    this._growingScrollBar = null;
    this._growingScrollBarOn = false;
    this._carouselResizeAdded = false;
    this._carouselMaxTransition = 500;
    this._ctaEqualHeightsResizeAdded = false;

    this.uiSelectors = {
      contentCards: this.element.querySelector('.cmp-contentCards'),
      contentCardsCarousel: this.element.querySelector('.cmp-contentCardsCarousel'),
      contentCardsInner: this.element.querySelector('.cmp-contentCardsInner'),
      gridItem: [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('.cmp-contentCardsInner .gridEl'))),
      contentCardImage: [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('.cmp-ContentCard .imageContainer'))),
      contentCardTextTop: [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('.cmp-ContentCard .textContainerTop')))
    };

    // Init template: swiping / swiping-light-links / feature-swiping / insideMultiCatQuestionnaire
    if ((0, _browserDetection.isMobileDevice)()) {
      this._initMobileSwipingTemplates();
    }
  }

  (0, _createClass3.default)(ContentBlocksContainerSwiping, [{
    key: '_initMobileSwipingTemplates',
    value: function _initMobileSwipingTemplates() {
      var _this = this;

      // Set state of growing scrollbar - only on portrait mobiles
      enquire.register('screen and (orientation:portrait) and (max-width: ' + _browserDetection.breakpoints.small + 'px)', {
        match: function match() {
          _this._growingScrollBarOn = !site.rtl;
        },
        unmatch: function unmatch() {
          _this._growingScrollBarOn = false;
        }
      });

      this._initCarousel(this._initialSlide, false);
      this._initCtaEqualHeights();
    }
  }, {
    key: '_initCarousel',
    value: function _initCarousel(initialSlide, scrollBarStartHalfWidth) {
      var _this2 = this;

      // Set Swiper classes
      this.uiSelectors.contentCardsCarousel.classList.add('swiper-container');
      this.uiSelectors.contentCardsInner.classList.add('swiper-wrapper');
      this.uiSelectors.gridItem.forEach(function (slide) {
        slide.classList.add('swiper-slide');
      });

      // Add scrollbar
      this.uiSelectors.contentCardsCarousel.insertAdjacentHTML('beforeend', '<div class="swiper-scrollbar"/>');

      // Only init scrollbar growing on small breakpoint
      var defaultScrollBar = this._growingScrollBarOn ? false : this.element.querySelector('.swiper-scrollbar');
      var momentumRatio = 1.5;

      if ((0, _browserDetection.isBreakpointSmall)()) {
        momentumRatio = this.uiSelectors.contentCards.getAttribute('data-total') > 3 ? 0.4 : 0.1;
      }

      this.uiSelectors.contentCardsCarousel.insertAdjacentHTML('beforeend', '\n      <button style="opacity:0; display: block;" class="cmp-ContentBlocksContainer__previous swiper-button swiper-button--prev">\n        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 24" style="enable-background:new 0 0 14 24;" xml:space="preserve">\n          <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style><polygon class="st0" points="12.7,0 0,12 12.7,24 14,22.5 2.9,12 14,1.5 "/>\n        </svg>\n      </button>\n\n      <button style="opacity:0; display: block;" class="cmp-ContentBlocksContainer__next swiper-button swiper-button--next">\n        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 24" style="enable-background:new 0 0 14 24;" xml:space="preserve">\n          <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style><polygon class="st0" points="1.3,24 14,12 1.3,0 0,1.5 11.1,12 0,22.5 "/>\n        </svg>\n      </button>\n    ');

      // init Swiper
      this._carousel = new _swiper2.default(this.uiSelectors.contentCardsCarousel, {
        differentSlideWidths: true,
        freeMode: !site.rtl, // Swiper doesn't seem to work in freeMode w/ RTL
        freeModeSticky: true,
        freeModeMinimumVelocity: 0,
        freeModeMomentumRatio: momentumRatio,
        freeModeMomentumBounce: false,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        scrollbar: {
          el: defaultScrollBar,
          draggable: false,
          hide: false
        },
        slidesPerView: 'auto',
        navigation: {
          prevEl: this.element.querySelector('.cmp-ContentBlocksContainer__previous'),
          nextEl: this.element.querySelector('.cmp-ContentBlocksContainer__next')
        }
      });

      this._improveSliderA11Y();
      (0, _swiper3.swiperPreventDefaultButtonAction)(this._carousel);

      // Add growing scrollbar
      if (this._growingScrollBarOn) {
        this._growingScrollBar = new _SwiperGrowingScrollbar2.default({
          maxTransition: this._carouselMaxTransition,
          scrollBar: this.uiSelectors.contentCards.querySelector('.swiper-scrollbar'),
          startHalfWidth: scrollBarStartHalfWidth,
          swiper: this._carousel
        });
      }

      // Add events
      this._carousel.on('transitionStart', this._carouselSetSwiping.bind(this, 'true')); // Fade in all cards when moving
      this._carousel.on('transitionEnd', function () {
        _this2._carouselSetSwiping('false');
        _this2._improveSliderA11Y();
      });

      window.addEventListener('orientationchange', function () {
        return _this2._carouselOrientationChange();
      }); // On device rotation, fix slide position
      window.addEventListener('load', function () {
        return _this2._carouselResize();
      });

      if (!this._carouselResizeAdded) {
        this._$window.smartresize(this._carouselResize.bind(this));
        this._carouselResizeAdded = true;
      }

      if (initialSlide) {
        this._carousel.slideTo(initialSlide, 0);
      }
    }
  }, {
    key: '_improveSliderA11Y',
    value: function _improveSliderA11Y() {
      var _this3 = this;

      // iPad portrait, the previous slide is detected as visible, correct this.
      var previousSlide = this.element.querySelector('.swiper-slide-prev');
      if (previousSlide) {
        previousSlide.classList.remove('swiper-slide-visible');
      }

      [].concat((0, _toConsumableArray3.default)(this._carousel.slides)).forEach(function (slide) {
        if (!slide.classList.contains(_this3._carousel.params.slideVisibleClass)) {
          _this3.constructor._hideSlideFromScreenReaders(slide);
        } else {
          _this3.constructor._showSlideToScreenReaders(slide);
        }
      });

      // Hide the next slide preview which tracks as visible in swiper.
      var maxShownSlides = (0, _browserDetection.isBreakpointSmall)() ? 2 : 4;
      var visibleSlides = [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('.swiper-slide-visible')));

      if (visibleSlides.length >= maxShownSlides) {
        this.constructor._hideSlideFromScreenReaders(visibleSlides[visibleSlides.length - 1]);
      }
    }
  }, {
    key: '_initCtaEqualHeights',
    value: function _initCtaEqualHeights() {
      var _this4 = this;

      this.uiSelectors.contentCardTextTop.forEach(function (singleCTA) {
        singleCTA.height = ''; // eslint-disable-line no-param-reassign
      });

      $(this.uiSelectors.contentCardTextTop).equalHeights();

      if (!this._ctaEqualHeightsResizeAdded) {
        this._$window.smartresize(function () {
          // Delay for JDX
          window.setTimeout(_this4._initCtaEqualHeights.bind(_this4), 1000);
        });
        this._ctaEqualHeightsResizeAdded = true;
      }
    }
  }, {
    key: '_carouselSetSwiping',
    value: function _carouselSetSwiping(swiping) {
      this.element.setAttribute('data-swiping', swiping);
    }
  }, {
    key: '_carouselResize',
    value: function _carouselResize() {
      if (!this._carousel) {
        return;
      }

      this._positionCarouselScrollbar();
    }
  }, {
    key: '_carouselOrientationChange',
    value: function _carouselOrientationChange() {
      this._carousel.update();
    }
  }, {
    key: '_positionCarouselScrollbar',
    value: function _positionCarouselScrollbar() {
      var image = this.uiSelectors.contentCards.querySelector('.swiper-slide-active .imageContainer img');
      var scrollBar = this.uiSelectors.contentCards.querySelector('.swiper-scrollbar');
      var imageHeight = parseInt(getComputedStyle(image).getPropertyValue('height'), 10);
      scrollBar.style.top = imageHeight + 'px';
    }
  }], [{
    key: '_hideSlideFromScreenReaders',
    value: function _hideSlideFromScreenReaders(slide) {
      var tabbableElements = (0, _index.getTabbable)(slide);

      slide.setAttribute('aria-hidden', 'true');

      tabbableElements.forEach(function (element) {
        element.setAttribute('tabindex', '-1');
      });
    }
  }, {
    key: '_showSlideToScreenReaders',
    value: function _showSlideToScreenReaders(slide) {
      var tabbableElements = (0, _index.getTabbable)(slide);

      slide.removeAttribute('aria-hidden');

      tabbableElements.forEach(function (element) {
        element.removeAttribute('tabindex');
      });
    }
  }]);
  return ContentBlocksContainerSwiping;
}();

exports.default = ContentBlocksContainerSwiping;

/***/ }),

/***/ "./src/main/webapp/components/ContentBlocksContainer/es6/SwiperGrowingScrollbar.js":
/*!*****************************************************************************************!*\
  !*** ./src/main/webapp/components/ContentBlocksContainer/es6/SwiperGrowingScrollbar.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwiperGrowingScrollbar = function () {
  function SwiperGrowingScrollbar(options) {
    (0, _classCallCheck3.default)(this, SwiperGrowingScrollbar);

    this.swiper = options.swiper;

    /**
     * Properties
     *
     * @name SwiperGrowingScrollbar#props
     * @type object
     * @namespace
     * @property {string} easing.left  - css timing function left side on transition to use on transition
     * @property {string} easing.right  -  css timing function right side on transition to use on transition
     * @property {number} increaseRatio.left  - how much faster should scroll bar's left side move than normal?
     * @property {number} increaseRatio.right  - how much faster should scroll bar's right side move than normal?
     * @property {number} increaseRatioDelay.left - how much delay should there be on moving scroll bar's left?
     * @property {number} increaseRatioDelay.right - how much delay should there be on moving scroll bar's right?
     * @property {number} maxTransition  - maximum length a transition can take
     * @property {number} progressStored - stored progress for calculating distance travelled
     * @property {number} slidesInView - how many slides are visible at a time
     * @property {number} slidePercent - how much does each slide take up of the total? can be switched between normal + half
     * @property {number} slidePercentNormal - how much does each slide take up of the total
     * @property {number} slidePercentHalf - how much does each slide take up of the total, divided by 2
     * @property {boolean} startHalfWidth - should the scroll bar start half width? can be grown by calling setNormalWidth
     */

    this.props = {
      easing: options.easing || {
        left: 'ease',
        right: 'ease'
      },
      increaseRatio: options.increaseRatio || {
        left: 1,
        right: 4
      },
      increaseRatioDelay: {
        left: 0.5,
        right: 0
      },
      maxTransition: options.maxTransition,
      progressStored: 0,
      slidesInView: 1,
      slidePercent: null,
      slidePercentNormal: 0,
      slidePercentHalf: null,
      startHalfWidth: options.startHalfWidth || false
    };

    this.scrollBar = options.scrollBar;

    this.events = {
      onSetTransition: null,
      onSetTranslate: null,
      onTransitionEnd: null
    };

    // Set slide percent
    this.props.slidePercentNormal = 100 / this.swiper.slides.length * this.props.slidesInView;
    this.props.slidePercentHalf = this.props.slidePercentNormal / 2;
    this.props.slidePercent = this.props.startHalfWidth ? this.props.slidePercentHalf : this.props.slidePercentNormal;

    // Add drag element and styles
    this.scrollBar.insertAdjacentHTML('beforeend', '<div class="swiper-scrollbar-drag"/>');
    this.scrollBarDrag = this.scrollBar.querySelector('.swiper-scrollbar-drag');
    this.scrollBar.classList.add('swiper-scrollbar-growing');

    // Bind events
    this.events.onSetTransition = this.scrollBarTransition.bind(this, this.swiper);
    this.events.onSetTranslate = this.scrollBarTranslate.bind(this, this.scrollBarDrag, this.swiper);
    this.events.onTransitionEnd = this.scrollBarTransition.bind(this, this.swiper, 0, true);

    // Attach events
    this.swiper.on('setTransition', this.events.onSetTransition);
    this.swiper.on('setTranslate', this.events.onSetTranslate);
    this.swiper.on('transitionEnd', this.events.onTransitionEnd);

    // Set initial position
    this.scrollBarTranslate.call(this, this.scrollBarDrag, this.swiper, true);
  }

  (0, _createClass3.default)(SwiperGrowingScrollbar, [{
    key: 'destroy',
    value: function destroy() {
      // remove drag element and styles
      this.scrollBar.removeChild(this.scrollBarDrag);
      this.scrollBar.classList.remove('swiper-scrollbar-growing');

      // Attach events
      this.swiper.off('setTransition', this.events.onSetTransition);
      this.swiper.off('setTranslate', this.events.onSetTranslate);
      this.swiper.off('transitionEnd', this.events.onTransitionEnd);
    }
  }, {
    key: 'setNormalWidth',
    value: function setNormalWidth() {
      // Make scrollbar normal width
      this.props.slidePercent = this.props.slidePercentNormal;
      // Fake transition of 1 slide size
      this.props.progressStored -= 1 / this.swiper.slides.length - 1;
      this.scrollBarTranslate.call(this, this.scrollBarDrag, this.swiper);
    }
  }, {
    key: 'scrollBarTranslate',
    value: function scrollBarTranslate($scrollBarDrag, swiper, force) {
      if (!force && swiper.progress === this.props.progressStored) {
        return;
      }

      var _props = this.props,
          increaseRatio = _props.increaseRatio,
          increaseRatioDelay = _props.increaseRatioDelay;


      var activeSlide = this.constructor.getActiveSlide(swiper.progress, swiper.slides.length);
      var activeSlideRounded = Math.floor(activeSlide);
      var activeSlideLeft = activeSlideRounded;
      var activeSlideRight = activeSlideRounded + 1;
      var progressBetweenSlide = activeSlide % 1 === 0 ? 0 : activeSlide % 1;

      var increaseProgressLeft = this.constructor.getIncreasedProgress(progressBetweenSlide, increaseRatio.left, increaseRatioDelay.left);
      var increaseProgressRight = this.constructor.getIncreasedProgress(progressBetweenSlide, increaseRatio.right, increaseRatioDelay.right);

      var left = this.props.slidePercent * activeSlideLeft + this.props.slidePercent * increaseProgressLeft;
      var right = this.props.slidePercent * activeSlideRight + this.props.slidePercent * increaseProgressRight;

      this.constructor.setScrollBarStyle(left, right, this.props.slidePercent, this.scrollBarDrag);

      this.props.progressStored = swiper.progress;
    }
  }, {
    key: 'scrollBarTransition',
    value: function scrollBarTransition(swiper, transition, force) {
      if (!force && swiper.progress === this.props.progressStored) {
        return;
      }

      var direction = swiper.progress > this.props.progressStored ? 'forwards' : 'backwards';
      var distance = Math.abs(this.props.progressStored - swiper.progress);
      var velocity = this.props.maxTransition * swiper.slides.length * distance;
      var newTransition = Math.min(velocity, transition);

      var left = {
        transition: newTransition / this.props.increaseRatio.left - newTransition * this.props.increaseRatioDelay.left,
        delay: newTransition * this.props.increaseRatioDelay.left,
        ease: this.props.easing.left
      };

      var right = {
        transition: newTransition / this.props.increaseRatio.right - newTransition * this.props.increaseRatioDelay.right,
        delay: newTransition * this.props.increaseRatioDelay.right,
        ease: this.props.easing.right
      };

      // reverse direction
      if (direction !== 'forwards') {
        var reverseDirections = [right, left];
        left = reverseDirections[0];
        right = reverseDirections[1];
      }

      var transitionString = 'left ' + left.transition + 'ms ' + left.ease + ' ' + left.delay + 'ms, right ' + right.transition + 'ms ' + right.ease + ' ' + right.delay + 'ms';

      this.scrollBarDrag.style.transition = transitionString;
    }
  }], [{
    key: 'getActiveSlide',
    value: function getActiveSlide(progress, slidesLength) {
      return progress * (slidesLength - 1);
    }
  }, {
    key: 'getIncreasedProgress',
    value: function getIncreasedProgress(progressBetweenSlide, increaseRatio, increaseRatioDelay) {
      return Math.max(0, Math.min(1, progressBetweenSlide * increaseRatio - (1 - progressBetweenSlide) * increaseRatioDelay));
    }
  }, {
    key: 'setScrollBarStyle',
    value: function setScrollBarStyle(l, r, slidePercent, scrollBarDrag) {
      var scrollBarDragStyled = scrollBarDrag;
      var left = Math.max(0, l);
      // Reverse right percent and stop left going off the scale.
      // (if left is negative, set the bar's width to be default slidePercent width)
      var right = l >= 0 ? 100 - Math.min(100, r) : 100 - slidePercent;

      scrollBarDragStyled.style.left = left + '%';
      scrollBarDragStyled.style.right = right + '%';
    }
  }]);
  return SwiperGrowingScrollbar;
}();

exports.default = SwiperGrowingScrollbar;

/***/ }),

/***/ "./src/main/webapp/components/ContentBlocksContainer/js/ContentBlocksContainer.js":
/*!****************************************************************************************!*\
  !*** ./src/main/webapp/components/ContentBlocksContainer/js/ContentBlocksContainer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _DxTabs = __webpack_require__(/*! ../../DxTabs/es6/DxTabs */ "./src/main/webapp/components/DxTabs/es6/DxTabs.js");

var _DxTabs2 = _interopRequireDefault(_DxTabs);

var _ContentBlocksContainerSwiping = __webpack_require__(/*! ../es6/ContentBlocksContainerSwiping */ "./src/main/webapp/components/ContentBlocksContainer/es6/ContentBlocksContainerSwiping.js");

var _ContentBlocksContainerSwiping2 = _interopRequireDefault(_ContentBlocksContainerSwiping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentBlocksContainer = function () {
  function ContentBlocksContainer(element) {
    var _this = this;

    (0, _classCallCheck3.default)(this, ContentBlocksContainer);

    this.element = element;
    this.$element = $(element);

    this._dxTabsElement = null;
    this._template = this.element.getAttribute('data-template');

    this.initDxTabs();

    this._twoCol();
    this._hiddenSubheading();
    this._alignModelSelectorTemplate();

    if (this._template.includes('swiping') || this._template.includes('insideMultiCatQuestionnaire') || this._template.includes('swiping-2column')) {
      new _ContentBlocksContainerSwiping2.default(this.element); // eslint-disable-line no-new
    }

    this._dxTabsElement.addEventListener('DxTabs:fadein', function () {
      var parentContainer = _this.$element.closest('.Accordion');
      if (parentContainer.length) {
        parentContainer.Accordion('calculateNewHeight');
      }
      _this._alignModelSelectorTemplate();
    });

    window.addEventListener('resize', function () {
      _this._alignModelSelectorTemplate();
      _this._twoCol();
    });
  }

  (0, _createClass3.default)(ContentBlocksContainer, [{
    key: 'initDxTabs',
    value: function initDxTabs() {
      this._dxTabsElement = this.element.querySelector('.DxTabs');
      this._dxTabs = new _DxTabs2.default(this._dxTabsElement);
    }
  }, {
    key: '_twoCol',
    value: function _twoCol() {
      if (this._template === 'content-blocks-2column' || this._template === 'swiping-2column') {
        var contentCardHeadings = [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('.cmp-ContentCard__heading')));

        if (window.innerWidth < 900) {
          this.element.classList.remove('twoCol');
          contentCardHeadings.forEach(function (contentCardHeading) {
            contentCardHeading.classList.remove('fontH3');
            contentCardHeading.classList.add('fontH4');
          });
        } else {
          this.element.classList.add('twoCol');
          contentCardHeadings.forEach(function (contentCardHeading) {
            contentCardHeading.classList.add('fontH3');
            contentCardHeading.classList.remove('fontH4');
          });
        }
      }
    }
  }, {
    key: '_hiddenSubheading',
    value: function _hiddenSubheading() {
      var headerBlock = this.element.querySelector('.headerBlock');

      if (headerBlock) {
        var subHeading = headerBlock.querySelector('.subHeading');

        if (subHeading) {
          if (subHeading.style.display === 'none') {
            headerBlock.setAttribute('data-subheading', 'hidden');
          }
        }
      }
    }
  }, {
    key: '_alignModelSelectorTemplate',
    value: function _alignModelSelectorTemplate() {
      if (this._template === 'model-selector-stacked' || this._template === 'model-selector-lite-stacked' || this._template === 'feature-swiping' || this._template === 'insideMultiCatQuestionnaire') {
        var toggleContentItems = [].concat((0, _toConsumableArray3.default)(this.element.querySelectorAll('.DxTabs__panel')));
        toggleContentItems.forEach(function (toggleItem) {
          var textContainersTop = [].concat((0, _toConsumableArray3.default)(toggleItem.querySelectorAll('.textContainerTop')));

          textContainersTop.forEach(function (textContainer) {
            var textContainerElement = textContainer;
            textContainerElement.style.height = '';
          });

          $(textContainersTop).equalHeights();
        });
      }
    }
  }]);
  return ContentBlocksContainer;
}();

var ContentBlocksContainerElements = document.querySelectorAll('.cmp-ContentBlocksContainer');
if (ContentBlocksContainerElements.length) {
  Array.prototype.forEach.call(ContentBlocksContainerElements, function (el) {
    return new ContentBlocksContainer(el);
  });
}

/***/ }),

/***/ "./src/main/webapp/components/DxTabs/es6/DxTabs.js":
/*!*********************************************************!*\
  !*** ./src/main/webapp/components/DxTabs/es6/DxTabs.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  mask: 'DxTabs__mask' };
exports.default = DxTabs;

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

/***/ }),

/***/ "./src/main/webapp/resources/dev/js/utils/swiper.js":
/*!**********************************************************!*\
  !*** ./src/main/webapp/resources/dev/js/utils/swiper.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./src/main/webapp/resources/dev/js/utils/windowDimensions.js":
/*!********************************************************************!*\
  !*** ./src/main/webapp/resources/dev/js/utils/windowDimensions.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "Swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Swiper;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb21wb25lbnRzL0NvbnRlbnRCbG9ja3NDb250YWluZXIvZXM2L0NvbnRlbnRCbG9ja3NDb250YWluZXJTd2lwaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb21wb25lbnRzL0NvbnRlbnRCbG9ja3NDb250YWluZXIvZXM2L1N3aXBlckdyb3dpbmdTY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudHMvQ29udGVudEJsb2Nrc0NvbnRhaW5lci9qcy9Db250ZW50QmxvY2tzQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb21wb25lbnRzL0R4VGFicy9lczYvRHhUYWJzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2FyaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvYnJvd3NlckRldGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvcmVzb3VyY2VzL2Rldi9qcy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvcmVzb3VyY2VzL2Rldi9qcy91dGlscy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvd2luZG93RGltZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJTd2lwZXJcIiJdLCJuYW1lcyI6WyJDb250ZW50QmxvY2tzQ29udGFpbmVyU3dpcGluZyIsImVsZW1lbnQiLCJfJHdpbmRvdyIsIiQiLCJ3aW5kb3ciLCJfY2Fyb3VzZWwiLCJfaW5pdGlhbFNsaWRlIiwiX2dyb3dpbmdTY3JvbGxCYXIiLCJfZ3Jvd2luZ1Njcm9sbEJhck9uIiwiX2Nhcm91c2VsUmVzaXplQWRkZWQiLCJfY2Fyb3VzZWxNYXhUcmFuc2l0aW9uIiwiX2N0YUVxdWFsSGVpZ2h0c1Jlc2l6ZUFkZGVkIiwidWlTZWxlY3RvcnMiLCJjb250ZW50Q2FyZHMiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudENhcmRzQ2Fyb3VzZWwiLCJjb250ZW50Q2FyZHNJbm5lciIsImdyaWRJdGVtIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRlbnRDYXJkSW1hZ2UiLCJjb250ZW50Q2FyZFRleHRUb3AiLCJfaW5pdE1vYmlsZVN3aXBpbmdUZW1wbGF0ZXMiLCJlbnF1aXJlIiwicmVnaXN0ZXIiLCJicmVha3BvaW50cyIsInNtYWxsIiwibWF0Y2giLCJzaXRlIiwicnRsIiwidW5tYXRjaCIsIl9pbml0Q2Fyb3VzZWwiLCJfaW5pdEN0YUVxdWFsSGVpZ2h0cyIsImluaXRpYWxTbGlkZSIsInNjcm9sbEJhclN0YXJ0SGFsZldpZHRoIiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsInNsaWRlIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiZGVmYXVsdFNjcm9sbEJhciIsIm1vbWVudHVtUmF0aW8iLCJnZXRBdHRyaWJ1dGUiLCJTd2lwZXIiLCJkaWZmZXJlbnRTbGlkZVdpZHRocyIsImZyZWVNb2RlIiwiZnJlZU1vZGVTdGlja3kiLCJmcmVlTW9kZU1pbmltdW1WZWxvY2l0eSIsImZyZWVNb2RlTW9tZW50dW1SYXRpbyIsImZyZWVNb2RlTW9tZW50dW1Cb3VuY2UiLCJ3YXRjaFNsaWRlc1Byb2dyZXNzIiwid2F0Y2hTbGlkZXNWaXNpYmlsaXR5Iiwic2Nyb2xsYmFyIiwiZWwiLCJkcmFnZ2FibGUiLCJoaWRlIiwic2xpZGVzUGVyVmlldyIsIm5hdmlnYXRpb24iLCJwcmV2RWwiLCJuZXh0RWwiLCJfaW1wcm92ZVNsaWRlckExMVkiLCJTd2lwZXJHcm93aW5nU2Nyb2xsYmFyIiwibWF4VHJhbnNpdGlvbiIsInNjcm9sbEJhciIsInN0YXJ0SGFsZldpZHRoIiwic3dpcGVyIiwib24iLCJfY2Fyb3VzZWxTZXRTd2lwaW5nIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfY2Fyb3VzZWxPcmllbnRhdGlvbkNoYW5nZSIsIl9jYXJvdXNlbFJlc2l6ZSIsInNtYXJ0cmVzaXplIiwic2xpZGVUbyIsInByZXZpb3VzU2xpZGUiLCJyZW1vdmUiLCJzbGlkZXMiLCJjb250YWlucyIsInBhcmFtcyIsInNsaWRlVmlzaWJsZUNsYXNzIiwiY29uc3RydWN0b3IiLCJfaGlkZVNsaWRlRnJvbVNjcmVlblJlYWRlcnMiLCJfc2hvd1NsaWRlVG9TY3JlZW5SZWFkZXJzIiwibWF4U2hvd25TbGlkZXMiLCJ2aXNpYmxlU2xpZGVzIiwibGVuZ3RoIiwic2luZ2xlQ1RBIiwiaGVpZ2h0IiwiZXF1YWxIZWlnaHRzIiwic2V0VGltZW91dCIsInN3aXBpbmciLCJzZXRBdHRyaWJ1dGUiLCJfcG9zaXRpb25DYXJvdXNlbFNjcm9sbGJhciIsInVwZGF0ZSIsImltYWdlIiwiaW1hZ2VIZWlnaHQiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic3R5bGUiLCJ0b3AiLCJ0YWJiYWJsZUVsZW1lbnRzIiwicmVtb3ZlQXR0cmlidXRlIiwib3B0aW9ucyIsInByb3BzIiwiZWFzaW5nIiwibGVmdCIsInJpZ2h0IiwiaW5jcmVhc2VSYXRpbyIsImluY3JlYXNlUmF0aW9EZWxheSIsInByb2dyZXNzU3RvcmVkIiwic2xpZGVzSW5WaWV3Iiwic2xpZGVQZXJjZW50Iiwic2xpZGVQZXJjZW50Tm9ybWFsIiwic2xpZGVQZXJjZW50SGFsZiIsImV2ZW50cyIsIm9uU2V0VHJhbnNpdGlvbiIsIm9uU2V0VHJhbnNsYXRlIiwib25UcmFuc2l0aW9uRW5kIiwic2Nyb2xsQmFyRHJhZyIsInNjcm9sbEJhclRyYW5zaXRpb24iLCJzY3JvbGxCYXJUcmFuc2xhdGUiLCJjYWxsIiwicmVtb3ZlQ2hpbGQiLCJvZmYiLCIkc2Nyb2xsQmFyRHJhZyIsImZvcmNlIiwicHJvZ3Jlc3MiLCJhY3RpdmVTbGlkZSIsImdldEFjdGl2ZVNsaWRlIiwiYWN0aXZlU2xpZGVSb3VuZGVkIiwiTWF0aCIsImZsb29yIiwiYWN0aXZlU2xpZGVMZWZ0IiwiYWN0aXZlU2xpZGVSaWdodCIsInByb2dyZXNzQmV0d2VlblNsaWRlIiwiaW5jcmVhc2VQcm9ncmVzc0xlZnQiLCJnZXRJbmNyZWFzZWRQcm9ncmVzcyIsImluY3JlYXNlUHJvZ3Jlc3NSaWdodCIsInNldFNjcm9sbEJhclN0eWxlIiwidHJhbnNpdGlvbiIsImRpcmVjdGlvbiIsImRpc3RhbmNlIiwiYWJzIiwidmVsb2NpdHkiLCJuZXdUcmFuc2l0aW9uIiwibWluIiwiZGVsYXkiLCJlYXNlIiwicmV2ZXJzZURpcmVjdGlvbnMiLCJ0cmFuc2l0aW9uU3RyaW5nIiwic2xpZGVzTGVuZ3RoIiwibWF4IiwibCIsInIiLCJzY3JvbGxCYXJEcmFnU3R5bGVkIiwiQ29udGVudEJsb2Nrc0NvbnRhaW5lciIsIiRlbGVtZW50IiwiX2R4VGFic0VsZW1lbnQiLCJfdGVtcGxhdGUiLCJpbml0RHhUYWJzIiwiX3R3b0NvbCIsIl9oaWRkZW5TdWJoZWFkaW5nIiwiX2FsaWduTW9kZWxTZWxlY3RvclRlbXBsYXRlIiwiaW5jbHVkZXMiLCJwYXJlbnRDb250YWluZXIiLCJjbG9zZXN0IiwiQWNjb3JkaW9uIiwiX2R4VGFicyIsIkR4VGFicyIsImNvbnRlbnRDYXJkSGVhZGluZ3MiLCJpbm5lcldpZHRoIiwiY29udGVudENhcmRIZWFkaW5nIiwiaGVhZGVyQmxvY2siLCJzdWJIZWFkaW5nIiwiZGlzcGxheSIsInRvZ2dsZUNvbnRlbnRJdGVtcyIsInRvZ2dsZUl0ZW0iLCJ0ZXh0Q29udGFpbmVyc1RvcCIsInRleHRDb250YWluZXIiLCJ0ZXh0Q29udGFpbmVyRWxlbWVudCIsIkNvbnRlbnRCbG9ja3NDb250YWluZXJFbGVtZW50cyIsImRvY3VtZW50IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJfZGVmYXVsdHMiLCJ0YWJzIiwidGFibGlzdCIsInRhYnNXaWR0aFRvdGFsIiwicGFuZWxzQ29udGFpbmVyIiwicGFuZWxzIiwiYW5pbWF0aW5nIiwiaW5pdCIsInNlbGVjdGVkUGFuZWwiLCJpbml0aWFsVGFiIiwiZmlyZUV2ZW50Iiwib3BhY2l0eSIsInBhcmVudE5vZGUiLCJ0YWJTZXR1cCIsInNldEluaXRpYWxTdGF0ZSIsImFkZEV2ZW50cyIsInNlbGVjdGVkVGFiIiwiZ2V0UGFuZWxGcm9tVGFiIiwiZXZlbnRUeXBlIiwicGF5bG9hZCIsInRhYiIsImluZGV4IiwiaWQiLCJ0YWJJZCIsInBhbmVsSWQiLCJwYW5lbCIsImNvbGxhcHNlV2hpdGVzcGFjZUJldHdlZW5UYWJzIiwidGFiQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJ0aHJvdHRsZVJlc2l6ZSIsInNldERpbWVuc2lvbnMiLCJjaGlsZE5vZGVzIiwibm9kZSIsIm5vZGVUeXBlIiwic2V0TmV3U3R5bGUiLCJzZXRUYWJTaXplcyIsInNldE1hc2tXaWR0aCIsIm92ZXJmbG93Q2hlY2siLCJ0YWJMaXN0U3R5bGVzIiwidGFiTGlzdFBhZGRpbmciLCJwYXJzZUZsb2F0IiwiY2xhc3NlcyIsInRhYkxpc3RPdmVyZmxvdyIsInRhYkxpc3RXaWR0aCIsInRhYnNBcnJheSIsInZpc2libGVUYWJzQXJyYXkiLCJ0YWJzV2lkdGhSdW5uaW5nVG90YWwiLCJ2aXNpYmxlVGFic1dpZHRoUnVubmluZ1RvdGFsIiwicmVtb3ZlUHJvcGVydHkiLCJ0YWJTdHlsZXMiLCJ0YWJXaWR0aCIsInRhYk1heFdpZHRoIiwidGFiUGFkTGVmdCIsInRhYlBhZFJpZ2h0IiwidGV4dEFsaWduIiwibmV3VG90YWwiLCJ0YWJWaXNpYmxlIiwicHVzaCIsInZpc2libGVMZW5ndGgiLCJhZGRpdGlvbmFsUGFkZGluZyIsIndpZHRoV2l0aFBhZGRpbmciLCJjYWxjTGVmdFBhZCIsImFsaWduZWQiLCJjYWxjUmlnaHRQYWQiLCJsZWZ0UGFkIiwicmlnaHRQYWQiLCJ1bnNldFRhYkhlaWdodHMiLCJlbnN1cmVOZXh0VGFiVmlzaWJsZSIsInJlZHVjZXIiLCJhY2N1bXVsYXRvciIsImN1cnJlbnRWYWx1ZSIsIm5ld0hlaWdodCIsIm1hcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlZHVjZSIsIm1hc2tXaWR0aCIsIndpZHRoIiwibWFzayIsInByZXZlbnREZWZhdWx0IiwiYWN0aXZlIiwiY3VycmVudFRhcmdldCIsInRhYkFjdGl2ZSIsInByZXZpb3VzIiwidW5zZXRBY3RpdmVUYWJzIiwic2V0QWN0aXZlVGFiIiwic3dpdGNoVGFiUGFuZWxzIiwic2V0QWN0aXZlVGFiUGFuZWwiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ0YWJMaXN0VmlzaWJsZSIsInByZXZpb3VzVGFiIiwibmV4dFRhYiIsInByZXZpb3VzUGFuZWwiLCJmaW5pc2giLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkb0FuaW1hdGlvbiIsImZhZGVPdXRLZXlmcmFtZXMiLCJ0aW1pbmdGYWRlT3V0IiwiZmFkZUluS2V5ZnJhbWVzIiwidGltaW5nRmFkZUluIiwibWV0aG9kIiwidW5kZWZpbmVkIiwiZm4iLCJlbGVtIiwidmFsdWUiLCJrZXlmcmFtZXMiLCJ0aW1pbmciLCJhbmltYXRpb24iLCJhbmltYXRlIiwicGF1c2UiLCJvbmZpbmlzaCIsInBsYXkiLCJkdXJhdGlvbiIsImZpbGwiLCJ0YWJMaXN0IiwiS2V5Q29kZSIsIkJBQ0tTUEFDRSIsIkRFTEVURSIsIkRPV04iLCJFTkQiLCJFU0MiLCJIT01FIiwiTEVGVCIsIlBBR0VfRE9XTiIsIlBBR0VfVVAiLCJSRVRVUk4iLCJSSUdIVCIsIlNQQUNFIiwiVEFCIiwiVVAiLCJtZWRpdW0iLCJ3aWRlciIsImN1cnJlbnQiLCJnZXREZXZpY2VPcmllbnRhdGlvbiIsIiR3aW5kb3ciLCJnZXRMYXJnZXJCcmVha3BvaW50IiwiZ2V0QnJlYWtwb2ludFNpemUiLCJvbGRDYWxjIiwiaXNCcmVha3BvaW50U21hbGwiLCJpc0JyZWFrcG9pbnRNZWRpdW0iLCJpc01vYmlsZURldmljZSIsIkRvY3VtZW50VG91Y2giLCJuYXZpZ2F0b3IiLCJtc01heFRvdWNoUG9pbnRzIiwiaXNOb3RNb2JpbGVEZXZpY2UiLCJpc1RhYmxldERldmljZSIsInRlc3QiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImlzSU9TIiwiaXNOb3RJT1MiLCJpc1dpbmRvd3NQaG9uZSIsImluZGV4T2YiLCJnZXRBbmRyb2lkVmVyc2lvbiIsInVhIiwic2xpY2UiLCJnZXRCcm93c2VyVXNlckFnZW50IiwiZGV0ZWN0QnJvd3NlcnMiLCJicm93c2VycyIsImlzQ2hyb21lIiwiaXNNc0VkZ2UiLCJpc0V4cGxvcmVyIiwiaXNGaXJlZm94IiwiaXNTYWZhcmkiLCJpc09wZXJhIiwiaXNJZSIsImlzSWUxMSIsIkFjdGl2ZVhPYmplY3QiLCJnZXRWaWV3cG9ydFNpemUiLCJjc3NUZXh0IiwiZG9jdW1lbnRFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImRpbXMiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInNjcm9sbFRvRWxlbWVudCIsImNhbGxiYWNrIiwialF1ZXJ5Iiwib3B0cyIsImV4dGVuZCIsImFkanVzdG1lbnQiLCJjb250YWluZXIiLCJzdG9wIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwiaGFzQmlnSW50U3VwcG9ydCIsIkJpZ0ludCIsIiRuYXZIZWFkZXIiLCJzdGlja3lOYXZpZ2F0aW9uRW5hYmxlZCIsImF0dHIiLCJzdGlja3lOYXZpZ2F0aW9uVHJhbnNpdGlvblBvaW50IiwidGVtcGxhdGVDYWNoZSIsImdvb2dsZU1hcFN0eWxlcyIsImZlYXR1cmVUeXBlIiwiZWxlbWVudFR5cGUiLCJzdHlsZXJzIiwiY29sb3IiLCJ2aXNpYmlsaXR5Iiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImlzUnRsIiwiaHRtbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0Q2FjaGVkU2NyaXB0IiwidXJsIiwibmV3T3B0aW9ucyIsImRhdGFUeXBlIiwiY2FjaGUiLCJhamF4IiwiZ2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZ2V0U3RpY2t5TmF2SGVpZ2h0IiwieVBvcyIsIm9sZENhbGN1bGF0aW9uIiwieVBvc2l0aW9uIiwic2hhcmVkSGVhZGVyIiwiJGhlYWRlciIsIiRpblBhZ2VOYXYiLCIkaW5QYWdlTmF2U3RpY2t5IiwiJGluUGFnZU5hdkJhciIsImR4TmF2UHJpbWFyeSIsImJyZWFrcG9pbnQiLCJjaGVja1N0aWNreU5hdiIsImNzcyIsImluUGFnZU5hdlRvcCIsImlzU3RpY2t5TmF2Iiwib2xkTmF2QnJlYWtwb2ludCIsIm91dGVySGVpZ2h0Iiwid2luZG93V2lkdGgiLCJnZXROYXZpZ2F0aW9uSGVpZ2h0IiwiZ2V0TmFhU0hlaWdodCIsIm9sZCIsInByaW1hcnlOYXZIZWlnaHQiLCJicmVhZGNydW1iTmF2SGVpZ2h0Iiwibm90aWZpY2F0aW9uSGVpZ2h0IiwiaW5QYWdlTmF2aWdhdGlvbkhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0U3RpY2t5TmF2SGVpZ2h0VjIiLCJzY3JvbGxUbyIsInRhcmdldCIsImlnbm9yZVN0aWNreU5hdiIsInlPZmZzZXQiLCJuZXdEdXJhdGlvbiIsIm5ld0NhbGxiYWNrIiwibmV3RWFzaW5nIiwicG9zaXRpb24iLCIkdGFyZ2V0RWwiLCJwcm9taXNlIiwiZG9uZSIsImNoZWNrRGVlcExpbmsiLCJocmVmIiwiZGVlcExpbmsiLCJzcGVlZCIsImhhc2hQb3MiLCJzdWJzdHJpbmciLCJsb2NhdGlvbiIsImFjY29yZGlvblBhcmVudCIsImFjY29yZGlvblRpdGxlIiwiZmluZCIsImhhc0NsYXNzIiwiY2xpY2siLCJwYXJlbnRzIiwiJGNvbnRhaW5lciIsIiR0YWJzIiwiJHRhYkxpbmtzIiwidGFiSW5kZXgiLCJlYWNoIiwiaSIsIiRsb2NhdGlvbiIsImFjY29yZGlvbkhlYWRlciIsImlzIiwiY29uc29sZSIsImVycm9yIiwiaXNQYWdlSW5JZnJhbWUiLCJzZWxmIiwiaW5zaWRlVGFiYmVkQ29udGFpbmVyIiwiaXNJbnNpZGVUYWJiZWRDb250YWluZXIiLCJub3QiLCJtb2JpbGVBY2NvcmRpb25zQWN0aXZhdGVkIiwicmVtb3ZlSFRNTFRhZ3MiLCJzIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiZ2V0VXJsUGFyYW1ldGVyIiwic1BhcmFtIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic1BhZ2VVUkwiLCJzZWFyY2giLCJzVVJMVmFyaWFibGVzIiwic3BsaXQiLCJzUGFyYW1ldGVyU3BsaXQiLCJhZGRQYXJhbWV0ZXJUb1VSTCIsInBhcmFtIiwibmV3VXJsIiwiZ2V0T2JqZWN0S2V5cyIsIm9iaiIsImtleXMiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbnZhc0RyYXdCZ0NvdmVyIiwiY3R4IiwiaW1nIiwieCIsInkiLCJ3IiwiaCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYXJndW1lbnRzIiwiY2FudmFzIiwiaXciLCJpaCIsIm53IiwibmgiLCJjeCIsImN5IiwiY3ciLCJjaCIsImFyIiwiZHJhd0ltYWdlIiwiaGFzUGxhY2Vob2xkZXJTdXBwb3J0IiwiaXNQYWdlSW5YUE1GcmFtZSIsIlRyaWRpb24iLCJXZWIiLCJVSSIsIlNpdGVFZGl0IiwiZWxlbWVudEluVmlld3BvcnQiLCJhZGp1c3QiLCJ3aW5kb3dJbm5lckhlaWdodCIsIndpbmRvd0hlaWdodCIsImFkanVzdFRvcCIsImFkanVzdEJvdHRvbSIsImVsT2Zmc2V0IiwiZWxUb3AiLCJlbEJvdHRvbSIsImRlZmF1bHRBZGp1c3QiLCJ2aWV3cG9ydEJvdHRvbSIsImJvdHRvbSIsImdldFJhbmRvbVN0cmluZyIsImZvcm1hdHRlZExlbmd0aCIsImNoYXJzIiwiY2hvc2VuIiwiY2hhckF0IiwicmFuZG9tIiwiam9pbiIsImdldEVhc2luZ1ZhbHVlIiwicmF0aW8iLCJmb3JtYXR0ZWRSYXRpbyIsInJhZGlhbnMiLCJQSSIsImNvcyIsImRpc2FibGVTY3JvbGwiLCJlbmFibGVTY3JvbGwiLCJsaW1pdE51bWJlciIsIm9sZE1pbiIsImxvYWRJZ25vcmVkUmVzcG9uc2l2ZUltYWdlcyIsIiRpbWFnZXMiLCJyZW1vdmVBdHRyIiwicmljaHNwb25zaXZlSW1hZ2UiLCJ0aHJvdHRsZSIsInRocmVzaGhvbGQiLCJzY29wZSIsInRocmVzaCIsImxhc3QiLCJkZWZlclRpbWVyIiwiY29udGV4dCIsIm5vdyIsIkRhdGUiLCJhcmdzIiwiY2xlYXJUaW1lb3V0IiwiYXBwbHkiLCJtZWFzdXJlVGV4dFdpZHRoIiwidGV4dCIsInBhcmVudCIsInBhciIsImJvZHkiLCJwYWRkaW5nIiwid2hpdGVTcGFjZSIsImlubmVySFRNTCIsImNsaWVudFdpZHRoIiwiZ2V0VHJhbnNpdGlvbkVuZEV2ZW50IiwidHJhbnNpdGlvbnMiLCJPVHJhbnNpdGlvbiIsIk1velRyYW5zaXRpb24iLCJXZWJraXRUcmFuc2l0aW9uIiwidGVtcGxhdGUiLCJzdHIiLCJkYXRhIiwiZ2V0RWxlbWVudEJ5SWQiLCJGdW5jdGlvbiIsImlzSW5WaWV3cG9ydCIsIndpbiIsInZpZXdwb3J0Iiwic2Nyb2xsTGVmdCIsImJvdW5kcyIsIm91dGVyV2lkdGgiLCJzY3JvbGxJZk5vdEluVmlld3BvcnQiLCJkaXNwbGF5VG9Cb3R0b20iLCJzY3JvbGxUb1BvcyIsImlzTGFuZFJvdmVyIiwiZ2V0VGFiYmFibGUiLCJjdXN0b21TZWxlY3RvcnMiLCJkZWZhdWx0U2VsZWN0b3JzIiwic2VsZWN0b3JUeXBlcyIsImNvbmNhdCIsInNlbGVjdG9ycyIsImZpbHRlciIsInNlbGVjdG9yIiwidGFiYmFibGUiLCJvZmZzZXRQYXJlbnQiLCJpc0ludmlzaWJsZSIsImxvY2tUYWJiYWJsZXMiLCJ0YWJiYWJsZXMiLCJlIiwia2V5Q29kZSIsImZvY3VzIiwic2hpZnRLZXkiLCJiYWxhbmNlRWxlbWVudEhlaWdodCIsImVsZW1lbnRzIiwiYWxsb3dlZE9mZnNldCIsImNvbHVtbnMiLCJlbGVtZW50c0FycmF5IiwiaGVpZ2h0VG90YWwiLCJoZWlnaHRzQXJyYXkiLCJlbGVtZW50SGVpZ2h0IiwiZ2V0QmFsYW5jZWRJbmRleCIsImFycmF5IiwicnVubmluZ1RvdGFsIiwiaXNSZWN1cnNpdmUiLCJzcGxpdEluZGV4IiwiY29sdW1uczEiLCJjb2x1bW5zMiIsImV2ZW50VHJpZ2dlciIsImRldGFpbCIsImJ1YmJsZXMiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJjb252ZXJ0RWxlbWVudENvbGxlY3Rpb25Ub0FycmF5IiwiY29sbGVjdGlvbiIsIk5vZGVMaXN0IiwiZ2V0IiwicmFuZG9taXNlRWxlbWVudHMiLCJlbGVtZW50c0NvbGxlY3Rpb24iLCJjbG9uZWRFbGVtZW50cyIsImNsb25lTm9kZSIsInNvcnQiLCJpbmMiLCJyZXBsYWNlQ2hpbGQiLCJpc0VsZW1lbnRWZXJ0aWNhbGx5U2Nyb2xsYWJsZSIsInNjcm9sbEhlaWdodCIsImNoZWNrRGVmaW5lZCIsIml0ZW0iLCJ0YWJsaXN0TmF2aWdhdGlvbiIsIm9yaWVudGF0aW9uIiwiaXNWZXJ0aWNhbCIsImZvY3VzRmlyc3RUYWIiLCJmb2N1c0xhc3RUYWIiLCJmb2N1c1ByZXZpb3VzVGFiIiwiY3VycmVudFRhYiIsImZpbmRJbmRleCIsImZvY3VzTmV4dFRhYiIsInRhYnNMZW5ndGhaZXJvSW5kZXgiLCJoYW5kbGVUYWJsaXN0S2V5ZG93bkV2ZW50cyIsImtleSIsImhhbmRsZVRhYmxpc3RLZXl1cEV2ZW50cyIsImlzRW1wdHkiLCJPYmplY3QiLCJyZXBsYWNlQWxsIiwic3RyaW5nIiwicmVwbGFjZW1lbnQiLCJkeFNldFRpbWVvdXQiLCJjYiIsInRpbWUiLCJhcHBSZWFkeUV2ZW50IiwiaW5pdGlhdGVkIiwiYXBwUmVhZHlUaW1lciIsInRpbWVvdXQiLCJEeFJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUiLCJsb2FkaW5nU3Bpbm5lclRvZ2dsZUJ1dHRvblN0YXRlQW5kQ29udGVudCIsInRhcmdldEVsZW1lbnQiLCJ0YWdOYW1lIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiYWRkRHhMb2FkaW5nU3Bpbm5lciIsImljb25NYXJrdXAiLCJsb2FkaW5nSWNvbiIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwicmVtb3ZlRHhMb2FkaW5nU3Bpbm5lciIsImFkZER4RWxlbWVudExvYWRpbmdTcGlubmVyIiwibG9jYWxTdG9yYWdlQXZhaWxhYmxlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiYWRkU2NyaXB0Rm9yQmF6YWFyVm9pY2UiLCJzY3JpcHRVUkwiLCJ0cmltIiwiYmF6YWFyVm9pY2VTY3JpcHQiLCJoZWFkIiwiZXF1YWxpc2VIZWlnaHRzIiwibWF4SGVpZ2h0IiwiZ2VuZXJhdGVDdXJyZW50RGF0ZSIsInRvZGF5IiwiVVRDIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJwcmV2ZW50QWN0aW9uT25EZWVwTGluayIsImxpbmtMb2NhdGlvbiIsInN3aXBlckVtaXRFdmVudHNPbkVsZW1lbnQiLCJzd2lwZXJPYmplY3QiLCJzd2lwZXJQcmV2ZW50VGFiYmluZ0lzc3VlcyIsIndyYXBwZXJFbCIsImV4aXN0aW5nVGFiaW5kZXgiLCJzZXRTbGlkZVN0eWxlIiwiaGlkZVNsaWRlc091dE9mVmlld3BvcnQiLCJhbGxTbGlkZXMiLCJzbGlkZUFjdGl2ZUNsYXNzIiwic2xpZGVUcmFuc2l0aW9uU3RhcnQiLCJzbGlkZVRyYW5zaXRpb25FbmQiLCJzd2lwZXJEaXNhYmxlQXV0b3BsYXlPblNsaWRlRm9jdXMiLCJvcmlnaW5hbFBhcmFtcyIsImF1dG9wbGF5IiwiZW5hYmxlZCIsImhhbmRsZUZvY3VzaW4iLCJoYW5kbGVGb2N1c291dCIsInN0YXJ0Iiwic3dpcGVySW50ZWdyYXRlQ3VzdG9tUGFnaW5hdGlvbiIsIm9iamVjdCIsInN3aXBlck9wdGlvbnMiLCJwYWdpbmF0aW9uT2JqZWN0IiwiZHhQYWdpbmF0aW9uIiwibG9vcE9mZnNldCIsImxvb3AiLCJQYWdpbmF0aW9uIiwicGlwVG8iLCJsaXZlUmVnaW9uIiwiYTExeSIsImlzVmlkZW8iLCJpc05leHRCdXR0b24iLCJpc1ByZXZCdXR0b24iLCJtb3ZlU3luY0hhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5kZXhNaXNtYXRjaCIsInJlYWxJbmRleCIsIm5leHQiLCJzd2lwZXJTZXRBcmlhTGl2ZU9uRm9jdXNJbiIsImFyaWFsaXZlT25Gb2N1c0luIiwic3dpcGVyTW9kaWZ5TmF2aWdhdGlvbiIsImxhYmVscyIsImlzQmxhY2siLCJwcmV2aW91c0Fycm93U1ZHIiwibmV4dEFycm93U1ZHIiwibW9kaWZ5QXJyb3ciLCJhcnJvdyIsImljb24iLCJsYWJlbCIsImRpdiIsInN3aXBlckExMXlIZWxwZXIiLCJjb25maWciLCJwYWdpbmF0aW9uIiwic3dpcGVyQTExeURlc3Ryb3kiLCJkZXN0cm95Iiwic3dpcGVyUHJldmVudERlZmF1bHRCdXR0b25BY3Rpb24iLCJzd2lwZXJQcmV2ZW50RW50ZXJEb3VibGVBY3Rpb24iLCJ3aGljaCIsImRvY3VtZW50VG9wT2Zmc2V0Iiwib2Zmc2V0VG9wIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsa0JBQWtCLFlBQVksbUJBQU8sQ0FBQyxpSEFBK0Isc0I7Ozs7Ozs7Ozs7O0FDQXJFLGtCQUFrQixZQUFZLG1CQUFPLENBQUMsdUhBQWtDLHNCOzs7Ozs7Ozs7OztBQ0F4RSxrQkFBa0IsWUFBWSxtQkFBTyxDQUFDLHlJQUEyQyxzQjs7Ozs7Ozs7Ozs7QUNBakYsa0JBQWtCLFlBQVksbUJBQU8sQ0FBQywrR0FBMkIsc0I7Ozs7Ozs7Ozs7O0FDQWpFLGtCQUFrQixZQUFZLG1CQUFPLENBQUMsMkhBQW9DLHNCOzs7Ozs7Ozs7Ozs7QUNBN0Q7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7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aUJBQW9CLENBQUNsdkIsT0FBRCxFQUFhO0FBQzVDLE1BQUk4UixPQUFPOVIsT0FBWDtBQUNBLE1BQUlnWCxTQUFTLENBQWI7QUFDQSxLQUFHO0FBQ0RBLGNBQVVsRixLQUFLcWQsU0FBZjtBQUNBcmQsV0FBT0EsS0FBS21ULFlBQVo7QUFDRCxHQUhELFFBR1NuVCxJQUhUO0FBSUEsU0FBT2tGLFNBQVMsQ0FBVCxHQUFhLENBQWIsR0FBaUJBLE1BQXhCO0FBQ0QsQ0FSTSxDOzs7Ozs7Ozs7OztBQ0pQLHdCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db250ZW50QmxvY2tzQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi93ZWJhcHAvY29tcG9uZW50cy9Db250ZW50QmxvY2tzQ29udGFpbmVyL2pzL0NvbnRlbnRCbG9ja3NDb250YWluZXIuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICghQlVHR1kgJiYgJG5hdGl2ZSkgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcbiIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG4iLCJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgU3dpcGVyR3Jvd2luZ1Njcm9sbGJhciBmcm9tICcuL1N3aXBlckdyb3dpbmdTY3JvbGxiYXInO1xuaW1wb3J0IHsgZ2V0VGFiYmFibGUgfSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IHN3aXBlclByZXZlbnREZWZhdWx0QnV0dG9uQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL2Rldi9qcy91dGlscy9zd2lwZXInO1xuaW1wb3J0IHsgaXNNb2JpbGVEZXZpY2UsIGlzQnJlYWtwb2ludFNtYWxsLCBicmVha3BvaW50cyB9IGZyb20gJy4uLy4uLy4uL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvYnJvd3NlckRldGVjdGlvbic7XG5cbi8qIGdsb2JhbCBzaXRlLCBlbnF1aXJlICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRCbG9ja3NDb250YWluZXJTd2lwaW5nIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5fJHdpbmRvdyA9ICQod2luZG93KTtcbiAgICB0aGlzLl9jYXJvdXNlbCA9IG51bGw7XG4gICAgdGhpcy5faW5pdGlhbFNsaWRlID0gMDtcbiAgICB0aGlzLl9ncm93aW5nU2Nyb2xsQmFyID0gbnVsbDtcbiAgICB0aGlzLl9ncm93aW5nU2Nyb2xsQmFyT24gPSBmYWxzZTtcbiAgICB0aGlzLl9jYXJvdXNlbFJlc2l6ZUFkZGVkID0gZmFsc2U7XG4gICAgdGhpcy5fY2Fyb3VzZWxNYXhUcmFuc2l0aW9uID0gNTAwO1xuICAgIHRoaXMuX2N0YUVxdWFsSGVpZ2h0c1Jlc2l6ZUFkZGVkID0gZmFsc2U7XG5cblxuICAgIHRoaXMudWlTZWxlY3RvcnMgPSB7XG4gICAgICBjb250ZW50Q2FyZHM6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudENhcmRzJyksXG4gICAgICBjb250ZW50Q2FyZHNDYXJvdXNlbDogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Q2FyZHNDYXJvdXNlbCcpLFxuICAgICAgY29udGVudENhcmRzSW5uZXI6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudENhcmRzSW5uZXInKSxcbiAgICAgIGdyaWRJdGVtOiBbLi4udGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50Q2FyZHNJbm5lciAuZ3JpZEVsJyldLFxuICAgICAgY29udGVudENhcmRJbWFnZTogWy4uLnRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQ29udGVudENhcmQgLmltYWdlQ29udGFpbmVyJyldLFxuICAgICAgY29udGVudENhcmRUZXh0VG9wOiBbLi4udGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5Db250ZW50Q2FyZCAudGV4dENvbnRhaW5lclRvcCcpXSxcbiAgICB9O1xuXG5cbiAgICAvLyBJbml0IHRlbXBsYXRlOiBzd2lwaW5nIC8gc3dpcGluZy1saWdodC1saW5rcyAvIGZlYXR1cmUtc3dpcGluZyAvIGluc2lkZU11bHRpQ2F0UXVlc3Rpb25uYWlyZVxuICAgIGlmIChpc01vYmlsZURldmljZSgpKSB7XG4gICAgICB0aGlzLl9pbml0TW9iaWxlU3dpcGluZ1RlbXBsYXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIF9pbml0TW9iaWxlU3dpcGluZ1RlbXBsYXRlcygpIHtcbiAgICAvLyBTZXQgc3RhdGUgb2YgZ3Jvd2luZyBzY3JvbGxiYXIgLSBvbmx5IG9uIHBvcnRyYWl0IG1vYmlsZXNcbiAgICBlbnF1aXJlLnJlZ2lzdGVyKGBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICR7YnJlYWtwb2ludHMuc21hbGx9cHgpYCwge1xuICAgICAgbWF0Y2g6ICgpID0+IHtcbiAgICAgICAgdGhpcy5fZ3Jvd2luZ1Njcm9sbEJhck9uID0gIXNpdGUucnRsO1xuICAgICAgfSxcbiAgICAgIHVubWF0Y2g6ICgpID0+IHtcbiAgICAgICAgdGhpcy5fZ3Jvd2luZ1Njcm9sbEJhck9uID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9pbml0Q2Fyb3VzZWwodGhpcy5faW5pdGlhbFNsaWRlLCBmYWxzZSk7XG4gICAgdGhpcy5faW5pdEN0YUVxdWFsSGVpZ2h0cygpO1xuICB9XG5cbiAgX2luaXRDYXJvdXNlbChpbml0aWFsU2xpZGUsIHNjcm9sbEJhclN0YXJ0SGFsZldpZHRoKSB7XG4gICAgLy8gU2V0IFN3aXBlciBjbGFzc2VzXG4gICAgdGhpcy51aVNlbGVjdG9ycy5jb250ZW50Q2FyZHNDYXJvdXNlbC5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyJyk7XG4gICAgdGhpcy51aVNlbGVjdG9ycy5jb250ZW50Q2FyZHNJbm5lci5jbGFzc0xpc3QuYWRkKCdzd2lwZXItd3JhcHBlcicpO1xuICAgIHRoaXMudWlTZWxlY3RvcnMuZ3JpZEl0ZW0uZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1zbGlkZScpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIHNjcm9sbGJhclxuICAgIHRoaXMudWlTZWxlY3RvcnMuY29udGVudENhcmRzQ2Fyb3VzZWwuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnPGRpdiBjbGFzcz1cInN3aXBlci1zY3JvbGxiYXJcIi8+Jyk7XG5cbiAgICAvLyBPbmx5IGluaXQgc2Nyb2xsYmFyIGdyb3dpbmcgb24gc21hbGwgYnJlYWtwb2ludFxuICAgIGNvbnN0IGRlZmF1bHRTY3JvbGxCYXIgPSB0aGlzLl9ncm93aW5nU2Nyb2xsQmFyT24gPyBmYWxzZSA6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNjcm9sbGJhcicpO1xuICAgIGxldCBtb21lbnR1bVJhdGlvID0gMS41O1xuXG4gICAgaWYgKGlzQnJlYWtwb2ludFNtYWxsKCkpIHtcbiAgICAgIG1vbWVudHVtUmF0aW8gPSAodGhpcy51aVNlbGVjdG9ycy5jb250ZW50Q2FyZHMuZ2V0QXR0cmlidXRlKCdkYXRhLXRvdGFsJykgPiAzKSA/IDAuNCA6IDAuMTtcbiAgICB9XG5cbiAgICB0aGlzLnVpU2VsZWN0b3JzLmNvbnRlbnRDYXJkc0Nhcm91c2VsLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICAgICAgPGJ1dHRvbiBzdHlsZT1cIm9wYWNpdHk6MDsgZGlzcGxheTogYmxvY2s7XCIgY2xhc3M9XCJDb250ZW50QmxvY2tzQ29udGFpbmVyX19wcmV2aW91cyBzd2lwZXItYnV0dG9uIHN3aXBlci1idXR0b24tLXByZXZcIj5cbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxNCAyNFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNCAyNDtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj4uc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9PC9zdHlsZT48cG9seWdvbiBjbGFzcz1cInN0MFwiIHBvaW50cz1cIjEyLjcsMCAwLDEyIDEyLjcsMjQgMTQsMjIuNSAyLjksMTIgMTQsMS41IFwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvbiBzdHlsZT1cIm9wYWNpdHk6MDsgZGlzcGxheTogYmxvY2s7XCIgY2xhc3M9XCJDb250ZW50QmxvY2tzQ29udGFpbmVyX19uZXh0IHN3aXBlci1idXR0b24gc3dpcGVyLWJ1dHRvbi0tbmV4dFwiPlxuICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDE0IDI0XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE0IDI0O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPi5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwb2x5Z29uIGNsYXNzPVwic3QwXCIgcG9pbnRzPVwiMS4zLDI0IDE0LDEyIDEuMywwIDAsMS41IDExLjEsMTIgMCwyMi41IFwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICBgKTtcblxuICAgIC8vIGluaXQgU3dpcGVyXG4gICAgdGhpcy5fY2Fyb3VzZWwgPSBuZXcgU3dpcGVyKHRoaXMudWlTZWxlY3RvcnMuY29udGVudENhcmRzQ2Fyb3VzZWwsIHtcbiAgICAgIGRpZmZlcmVudFNsaWRlV2lkdGhzOiB0cnVlLFxuICAgICAgZnJlZU1vZGU6ICFzaXRlLnJ0bCwgLy8gU3dpcGVyIGRvZXNuJ3Qgc2VlbSB0byB3b3JrIGluIGZyZWVNb2RlIHcvIFJUTFxuICAgICAgZnJlZU1vZGVTdGlja3k6IHRydWUsXG4gICAgICBmcmVlTW9kZU1pbmltdW1WZWxvY2l0eTogMCxcbiAgICAgIGZyZWVNb2RlTW9tZW50dW1SYXRpbzogbW9tZW50dW1SYXRpbyxcbiAgICAgIGZyZWVNb2RlTW9tZW50dW1Cb3VuY2U6IGZhbHNlLFxuICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcbiAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICBlbDogZGVmYXVsdFNjcm9sbEJhcixcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgaGlkZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIHByZXZFbDogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Db250ZW50QmxvY2tzQ29udGFpbmVyX19wcmV2aW91cycpLFxuICAgICAgICBuZXh0RWw6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuQ29udGVudEJsb2Nrc0NvbnRhaW5lcl9fbmV4dCcpLFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5faW1wcm92ZVNsaWRlckExMVkoKTtcbiAgICBzd2lwZXJQcmV2ZW50RGVmYXVsdEJ1dHRvbkFjdGlvbih0aGlzLl9jYXJvdXNlbCk7XG5cbiAgICAvLyBBZGQgZ3Jvd2luZyBzY3JvbGxiYXJcbiAgICBpZiAodGhpcy5fZ3Jvd2luZ1Njcm9sbEJhck9uKSB7XG4gICAgICB0aGlzLl9ncm93aW5nU2Nyb2xsQmFyID0gbmV3IFN3aXBlckdyb3dpbmdTY3JvbGxiYXIoe1xuICAgICAgICBtYXhUcmFuc2l0aW9uOiB0aGlzLl9jYXJvdXNlbE1heFRyYW5zaXRpb24sXG4gICAgICAgIHNjcm9sbEJhcjogdGhpcy51aVNlbGVjdG9ycy5jb250ZW50Q2FyZHMucXVlcnlTZWxlY3RvcignLnN3aXBlci1zY3JvbGxiYXInKSxcbiAgICAgICAgc3RhcnRIYWxmV2lkdGg6IHNjcm9sbEJhclN0YXJ0SGFsZldpZHRoLFxuICAgICAgICBzd2lwZXI6IHRoaXMuX2Nhcm91c2VsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgZXZlbnRzXG4gICAgdGhpcy5fY2Fyb3VzZWwub24oJ3RyYW5zaXRpb25TdGFydCcsIHRoaXMuX2Nhcm91c2VsU2V0U3dpcGluZy5iaW5kKHRoaXMsICd0cnVlJykpOyAvLyBGYWRlIGluIGFsbCBjYXJkcyB3aGVuIG1vdmluZ1xuICAgIHRoaXMuX2Nhcm91c2VsLm9uKCd0cmFuc2l0aW9uRW5kJywgKCkgPT4ge1xuICAgICAgdGhpcy5fY2Fyb3VzZWxTZXRTd2lwaW5nKCdmYWxzZScpO1xuICAgICAgdGhpcy5faW1wcm92ZVNsaWRlckExMVkoKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsICgpID0+IHRoaXMuX2Nhcm91c2VsT3JpZW50YXRpb25DaGFuZ2UoKSk7IC8vIE9uIGRldmljZSByb3RhdGlvbiwgZml4IHNsaWRlIHBvc2l0aW9uXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB0aGlzLl9jYXJvdXNlbFJlc2l6ZSgpKTtcblxuXG4gICAgaWYgKCF0aGlzLl9jYXJvdXNlbFJlc2l6ZUFkZGVkKSB7XG4gICAgICB0aGlzLl8kd2luZG93LnNtYXJ0cmVzaXplKHRoaXMuX2Nhcm91c2VsUmVzaXplLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5fY2Fyb3VzZWxSZXNpemVBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGluaXRpYWxTbGlkZSkge1xuICAgICAgdGhpcy5fY2Fyb3VzZWwuc2xpZGVUbyhpbml0aWFsU2xpZGUsIDApO1xuICAgIH1cbiAgfVxuXG4gIF9pbXByb3ZlU2xpZGVyQTExWSgpIHtcbiAgICAvLyBpUGFkIHBvcnRyYWl0LCB0aGUgcHJldmlvdXMgc2xpZGUgaXMgZGV0ZWN0ZWQgYXMgdmlzaWJsZSwgY29ycmVjdCB0aGlzLlxuICAgIGNvbnN0IHByZXZpb3VzU2xpZGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlci1zbGlkZS1wcmV2Jyk7XG4gICAgaWYgKHByZXZpb3VzU2xpZGUpIHtcbiAgICAgIHByZXZpb3VzU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLXNsaWRlLXZpc2libGUnKTtcbiAgICB9XG5cbiAgICBbLi4udGhpcy5fY2Fyb3VzZWwuc2xpZGVzXS5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgaWYgKCFzbGlkZS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5fY2Fyb3VzZWwucGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKSkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLl9oaWRlU2xpZGVGcm9tU2NyZWVuUmVhZGVycyhzbGlkZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLl9zaG93U2xpZGVUb1NjcmVlblJlYWRlcnMoc2xpZGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSGlkZSB0aGUgbmV4dCBzbGlkZSBwcmV2aWV3IHdoaWNoIHRyYWNrcyBhcyB2aXNpYmxlIGluIHN3aXBlci5cbiAgICBjb25zdCBtYXhTaG93blNsaWRlcyA9IChpc0JyZWFrcG9pbnRTbWFsbCgpKSA/IDIgOiA0O1xuICAgIGNvbnN0IHZpc2libGVTbGlkZXMgPSBbLi4udGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUtdmlzaWJsZScpXTtcblxuICAgIGlmICh2aXNpYmxlU2xpZGVzLmxlbmd0aCA+PSBtYXhTaG93blNsaWRlcykge1xuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5faGlkZVNsaWRlRnJvbVNjcmVlblJlYWRlcnModmlzaWJsZVNsaWRlc1t2aXNpYmxlU2xpZGVzLmxlbmd0aCAtIDFdKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgX2hpZGVTbGlkZUZyb21TY3JlZW5SZWFkZXJzKHNsaWRlKSB7XG4gICAgY29uc3QgdGFiYmFibGVFbGVtZW50cyA9IGdldFRhYmJhYmxlKHNsaWRlKTtcblxuICAgIHNsaWRlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgdGFiYmFibGVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBfc2hvd1NsaWRlVG9TY3JlZW5SZWFkZXJzKHNsaWRlKSB7XG4gICAgY29uc3QgdGFiYmFibGVFbGVtZW50cyA9IGdldFRhYmJhYmxlKHNsaWRlKTtcblxuICAgIHNsaWRlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcblxuICAgIHRhYmJhYmxlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfSk7XG4gIH1cblxuICBfaW5pdEN0YUVxdWFsSGVpZ2h0cygpIHtcbiAgICB0aGlzLnVpU2VsZWN0b3JzLmNvbnRlbnRDYXJkVGV4dFRvcC5mb3JFYWNoKChzaW5nbGVDVEEpID0+IHtcbiAgICAgIHNpbmdsZUNUQS5oZWlnaHQgPSAnJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH0pO1xuXG4gICAgJCh0aGlzLnVpU2VsZWN0b3JzLmNvbnRlbnRDYXJkVGV4dFRvcCkuZXF1YWxIZWlnaHRzKCk7XG5cbiAgICBpZiAoIXRoaXMuX2N0YUVxdWFsSGVpZ2h0c1Jlc2l6ZUFkZGVkKSB7XG4gICAgICB0aGlzLl8kd2luZG93LnNtYXJ0cmVzaXplKCgpID0+IHtcbiAgICAgICAgLy8gRGVsYXkgZm9yIEpEWFxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCh0aGlzLl9pbml0Q3RhRXF1YWxIZWlnaHRzLmJpbmQodGhpcyksIDEwMDApO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9jdGFFcXVhbEhlaWdodHNSZXNpemVBZGRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgX2Nhcm91c2VsU2V0U3dpcGluZyhzd2lwaW5nKSB7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1zd2lwaW5nJywgc3dpcGluZyk7XG4gIH1cblxuICBfY2Fyb3VzZWxSZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLl9jYXJvdXNlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Bvc2l0aW9uQ2Fyb3VzZWxTY3JvbGxiYXIoKTtcbiAgfVxuXG4gIF9jYXJvdXNlbE9yaWVudGF0aW9uQ2hhbmdlKCkge1xuICAgIHRoaXMuX2Nhcm91c2VsLnVwZGF0ZSgpO1xuICB9XG5cbiAgX3Bvc2l0aW9uQ2Fyb3VzZWxTY3JvbGxiYXIoKSB7XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLnVpU2VsZWN0b3JzLmNvbnRlbnRDYXJkcy5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuaW1hZ2VDb250YWluZXIgaW1nJyk7XG4gICAgY29uc3Qgc2Nyb2xsQmFyID0gdGhpcy51aVNlbGVjdG9ycy5jb250ZW50Q2FyZHMucXVlcnlTZWxlY3RvcignLnN3aXBlci1zY3JvbGxiYXInKTtcbiAgICBjb25zdCBpbWFnZUhlaWdodCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoaW1hZ2UpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLCAxMCk7XG4gICAgc2Nyb2xsQmFyLnN0eWxlLnRvcCA9IGAke2ltYWdlSGVpZ2h0fXB4YDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpcGVyR3Jvd2luZ1Njcm9sbGJhciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnN3aXBlciA9IG9wdGlvbnMuc3dpcGVyO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydGllc1xuICAgICAqXG4gICAgICogQG5hbWUgU3dpcGVyR3Jvd2luZ1Njcm9sbGJhciNwcm9wc1xuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gZWFzaW5nLmxlZnQgIC0gY3NzIHRpbWluZyBmdW5jdGlvbiBsZWZ0IHNpZGUgb24gdHJhbnNpdGlvbiB0byB1c2Ugb24gdHJhbnNpdGlvblxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlYXNpbmcucmlnaHQgIC0gIGNzcyB0aW1pbmcgZnVuY3Rpb24gcmlnaHQgc2lkZSBvbiB0cmFuc2l0aW9uIHRvIHVzZSBvbiB0cmFuc2l0aW9uXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGluY3JlYXNlUmF0aW8ubGVmdCAgLSBob3cgbXVjaCBmYXN0ZXIgc2hvdWxkIHNjcm9sbCBiYXIncyBsZWZ0IHNpZGUgbW92ZSB0aGFuIG5vcm1hbD9cbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gaW5jcmVhc2VSYXRpby5yaWdodCAgLSBob3cgbXVjaCBmYXN0ZXIgc2hvdWxkIHNjcm9sbCBiYXIncyByaWdodCBzaWRlIG1vdmUgdGhhbiBub3JtYWw/XG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGluY3JlYXNlUmF0aW9EZWxheS5sZWZ0IC0gaG93IG11Y2ggZGVsYXkgc2hvdWxkIHRoZXJlIGJlIG9uIG1vdmluZyBzY3JvbGwgYmFyJ3MgbGVmdD9cbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gaW5jcmVhc2VSYXRpb0RlbGF5LnJpZ2h0IC0gaG93IG11Y2ggZGVsYXkgc2hvdWxkIHRoZXJlIGJlIG9uIG1vdmluZyBzY3JvbGwgYmFyJ3MgcmlnaHQ/XG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IG1heFRyYW5zaXRpb24gIC0gbWF4aW11bSBsZW5ndGggYSB0cmFuc2l0aW9uIGNhbiB0YWtlXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHByb2dyZXNzU3RvcmVkIC0gc3RvcmVkIHByb2dyZXNzIGZvciBjYWxjdWxhdGluZyBkaXN0YW5jZSB0cmF2ZWxsZWRcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2xpZGVzSW5WaWV3IC0gaG93IG1hbnkgc2xpZGVzIGFyZSB2aXNpYmxlIGF0IGEgdGltZVxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzbGlkZVBlcmNlbnQgLSBob3cgbXVjaCBkb2VzIGVhY2ggc2xpZGUgdGFrZSB1cCBvZiB0aGUgdG90YWw/IGNhbiBiZSBzd2l0Y2hlZCBiZXR3ZWVuIG5vcm1hbCArIGhhbGZcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2xpZGVQZXJjZW50Tm9ybWFsIC0gaG93IG11Y2ggZG9lcyBlYWNoIHNsaWRlIHRha2UgdXAgb2YgdGhlIHRvdGFsXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNsaWRlUGVyY2VudEhhbGYgLSBob3cgbXVjaCBkb2VzIGVhY2ggc2xpZGUgdGFrZSB1cCBvZiB0aGUgdG90YWwsIGRpdmlkZWQgYnkgMlxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc3RhcnRIYWxmV2lkdGggLSBzaG91bGQgdGhlIHNjcm9sbCBiYXIgc3RhcnQgaGFsZiB3aWR0aD8gY2FuIGJlIGdyb3duIGJ5IGNhbGxpbmcgc2V0Tm9ybWFsV2lkdGhcbiAgICAgKi9cblxuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICBlYXNpbmc6IG9wdGlvbnMuZWFzaW5nIHx8IHtcbiAgICAgICAgbGVmdDogJ2Vhc2UnLFxuICAgICAgICByaWdodDogJ2Vhc2UnXG4gICAgICB9LFxuICAgICAgaW5jcmVhc2VSYXRpbzogb3B0aW9ucy5pbmNyZWFzZVJhdGlvIHx8IHtcbiAgICAgICAgbGVmdDogMSxcbiAgICAgICAgcmlnaHQ6IDRcbiAgICAgIH0sXG4gICAgICBpbmNyZWFzZVJhdGlvRGVsYXk6IHtcbiAgICAgICAgbGVmdDogMC41LFxuICAgICAgICByaWdodDogMCxcbiAgICAgIH0sXG4gICAgICBtYXhUcmFuc2l0aW9uOiBvcHRpb25zLm1heFRyYW5zaXRpb24sXG4gICAgICBwcm9ncmVzc1N0b3JlZDogMCxcbiAgICAgIHNsaWRlc0luVmlldzogMSxcbiAgICAgIHNsaWRlUGVyY2VudDogbnVsbCxcbiAgICAgIHNsaWRlUGVyY2VudE5vcm1hbDogMCxcbiAgICAgIHNsaWRlUGVyY2VudEhhbGY6IG51bGwsXG4gICAgICBzdGFydEhhbGZXaWR0aDogb3B0aW9ucy5zdGFydEhhbGZXaWR0aCB8fCBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLnNjcm9sbEJhciA9IG9wdGlvbnMuc2Nyb2xsQmFyO1xuXG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICBvblNldFRyYW5zaXRpb246IG51bGwsXG4gICAgICBvblNldFRyYW5zbGF0ZTogbnVsbCxcbiAgICAgIG9uVHJhbnNpdGlvbkVuZDogbnVsbFxuICAgIH07XG5cbiAgICAvLyBTZXQgc2xpZGUgcGVyY2VudFxuICAgIHRoaXMucHJvcHMuc2xpZGVQZXJjZW50Tm9ybWFsID0gKDEwMCAvIHRoaXMuc3dpcGVyLnNsaWRlcy5sZW5ndGgpICogdGhpcy5wcm9wcy5zbGlkZXNJblZpZXc7XG4gICAgdGhpcy5wcm9wcy5zbGlkZVBlcmNlbnRIYWxmID0gdGhpcy5wcm9wcy5zbGlkZVBlcmNlbnROb3JtYWwgLyAyO1xuICAgIHRoaXMucHJvcHMuc2xpZGVQZXJjZW50ID0gdGhpcy5wcm9wcy5zdGFydEhhbGZXaWR0aCA/IHRoaXMucHJvcHMuc2xpZGVQZXJjZW50SGFsZiA6IHRoaXMucHJvcHMuc2xpZGVQZXJjZW50Tm9ybWFsO1xuXG4gICAgLy8gQWRkIGRyYWcgZWxlbWVudCBhbmQgc3R5bGVzXG4gICAgdGhpcy5zY3JvbGxCYXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnPGRpdiBjbGFzcz1cInN3aXBlci1zY3JvbGxiYXItZHJhZ1wiLz4nKTtcbiAgICB0aGlzLnNjcm9sbEJhckRyYWcgPSB0aGlzLnNjcm9sbEJhci5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNjcm9sbGJhci1kcmFnJyk7XG4gICAgdGhpcy5zY3JvbGxCYXIuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLXNjcm9sbGJhci1ncm93aW5nJyk7XG5cbiAgICAvLyBCaW5kIGV2ZW50c1xuICAgIHRoaXMuZXZlbnRzLm9uU2V0VHJhbnNpdGlvbiA9IHRoaXMuc2Nyb2xsQmFyVHJhbnNpdGlvbi5iaW5kKHRoaXMsIHRoaXMuc3dpcGVyKTtcbiAgICB0aGlzLmV2ZW50cy5vblNldFRyYW5zbGF0ZSA9IHRoaXMuc2Nyb2xsQmFyVHJhbnNsYXRlLmJpbmQodGhpcywgdGhpcy5zY3JvbGxCYXJEcmFnLCB0aGlzLnN3aXBlcik7XG4gICAgdGhpcy5ldmVudHMub25UcmFuc2l0aW9uRW5kID0gdGhpcy5zY3JvbGxCYXJUcmFuc2l0aW9uLmJpbmQodGhpcywgdGhpcy5zd2lwZXIsIDAsIHRydWUpO1xuXG4gICAgLy8gQXR0YWNoIGV2ZW50c1xuICAgIHRoaXMuc3dpcGVyLm9uKCdzZXRUcmFuc2l0aW9uJywgdGhpcy5ldmVudHMub25TZXRUcmFuc2l0aW9uKTtcbiAgICB0aGlzLnN3aXBlci5vbignc2V0VHJhbnNsYXRlJywgdGhpcy5ldmVudHMub25TZXRUcmFuc2xhdGUpO1xuICAgIHRoaXMuc3dpcGVyLm9uKCd0cmFuc2l0aW9uRW5kJywgdGhpcy5ldmVudHMub25UcmFuc2l0aW9uRW5kKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHBvc2l0aW9uXG4gICAgdGhpcy5zY3JvbGxCYXJUcmFuc2xhdGUuY2FsbCh0aGlzLCB0aGlzLnNjcm9sbEJhckRyYWcsIHRoaXMuc3dpcGVyLCB0cnVlKTtcbiAgfVxuXG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyByZW1vdmUgZHJhZyBlbGVtZW50IGFuZCBzdHlsZXNcbiAgICB0aGlzLnNjcm9sbEJhci5yZW1vdmVDaGlsZCh0aGlzLnNjcm9sbEJhckRyYWcpO1xuICAgIHRoaXMuc2Nyb2xsQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3N3aXBlci1zY3JvbGxiYXItZ3Jvd2luZycpO1xuXG4gICAgLy8gQXR0YWNoIGV2ZW50c1xuICAgIHRoaXMuc3dpcGVyLm9mZignc2V0VHJhbnNpdGlvbicsIHRoaXMuZXZlbnRzLm9uU2V0VHJhbnNpdGlvbik7XG4gICAgdGhpcy5zd2lwZXIub2ZmKCdzZXRUcmFuc2xhdGUnLCB0aGlzLmV2ZW50cy5vblNldFRyYW5zbGF0ZSk7XG4gICAgdGhpcy5zd2lwZXIub2ZmKCd0cmFuc2l0aW9uRW5kJywgdGhpcy5ldmVudHMub25UcmFuc2l0aW9uRW5kKTtcbiAgfVxuXG4gIHNldE5vcm1hbFdpZHRoKCkge1xuICAgIC8vIE1ha2Ugc2Nyb2xsYmFyIG5vcm1hbCB3aWR0aFxuICAgIHRoaXMucHJvcHMuc2xpZGVQZXJjZW50ID0gdGhpcy5wcm9wcy5zbGlkZVBlcmNlbnROb3JtYWw7XG4gICAgLy8gRmFrZSB0cmFuc2l0aW9uIG9mIDEgc2xpZGUgc2l6ZVxuICAgIHRoaXMucHJvcHMucHJvZ3Jlc3NTdG9yZWQgLT0gKCgxIC8gdGhpcy5zd2lwZXIuc2xpZGVzLmxlbmd0aCkgLSAxKTtcbiAgICB0aGlzLnNjcm9sbEJhclRyYW5zbGF0ZS5jYWxsKHRoaXMsIHRoaXMuc2Nyb2xsQmFyRHJhZywgdGhpcy5zd2lwZXIpO1xuICB9XG5cbiAgc2Nyb2xsQmFyVHJhbnNsYXRlKCRzY3JvbGxCYXJEcmFnLCBzd2lwZXIsIGZvcmNlKSB7XG4gICAgaWYgKCFmb3JjZSAmJiBzd2lwZXIucHJvZ3Jlc3MgPT09IHRoaXMucHJvcHMucHJvZ3Jlc3NTdG9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGluY3JlYXNlUmF0aW8sIGluY3JlYXNlUmF0aW9EZWxheSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGFjdGl2ZVNsaWRlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRBY3RpdmVTbGlkZShzd2lwZXIucHJvZ3Jlc3MsIHN3aXBlci5zbGlkZXMubGVuZ3RoKTtcbiAgICBjb25zdCBhY3RpdmVTbGlkZVJvdW5kZWQgPSBNYXRoLmZsb29yKGFjdGl2ZVNsaWRlKTtcbiAgICBjb25zdCBhY3RpdmVTbGlkZUxlZnQgPSBhY3RpdmVTbGlkZVJvdW5kZWQ7XG4gICAgY29uc3QgYWN0aXZlU2xpZGVSaWdodCA9IGFjdGl2ZVNsaWRlUm91bmRlZCArIDE7XG4gICAgY29uc3QgcHJvZ3Jlc3NCZXR3ZWVuU2xpZGUgPSAoYWN0aXZlU2xpZGUgJSAxID09PSAwKSA/IDAgOiBhY3RpdmVTbGlkZSAlIDE7XG5cbiAgICBjb25zdCBpbmNyZWFzZVByb2dyZXNzTGVmdCA9IHRoaXMuY29uc3RydWN0b3IuZ2V0SW5jcmVhc2VkUHJvZ3Jlc3MocHJvZ3Jlc3NCZXR3ZWVuU2xpZGUsIGluY3JlYXNlUmF0aW8ubGVmdCwgaW5jcmVhc2VSYXRpb0RlbGF5LmxlZnQpO1xuICAgIGNvbnN0IGluY3JlYXNlUHJvZ3Jlc3NSaWdodCA9IHRoaXMuY29uc3RydWN0b3IuZ2V0SW5jcmVhc2VkUHJvZ3Jlc3MocHJvZ3Jlc3NCZXR3ZWVuU2xpZGUsIGluY3JlYXNlUmF0aW8ucmlnaHQsIGluY3JlYXNlUmF0aW9EZWxheS5yaWdodCk7XG5cbiAgICBjb25zdCBsZWZ0ID0gKHRoaXMucHJvcHMuc2xpZGVQZXJjZW50ICogYWN0aXZlU2xpZGVMZWZ0KSArICh0aGlzLnByb3BzLnNsaWRlUGVyY2VudCAqIGluY3JlYXNlUHJvZ3Jlc3NMZWZ0KTtcbiAgICBjb25zdCByaWdodCA9ICh0aGlzLnByb3BzLnNsaWRlUGVyY2VudCAqIGFjdGl2ZVNsaWRlUmlnaHQpICsgKHRoaXMucHJvcHMuc2xpZGVQZXJjZW50ICogaW5jcmVhc2VQcm9ncmVzc1JpZ2h0KTtcblxuICAgIHRoaXMuY29uc3RydWN0b3Iuc2V0U2Nyb2xsQmFyU3R5bGUobGVmdCwgcmlnaHQsIHRoaXMucHJvcHMuc2xpZGVQZXJjZW50LCB0aGlzLnNjcm9sbEJhckRyYWcpO1xuXG4gICAgdGhpcy5wcm9wcy5wcm9ncmVzc1N0b3JlZCA9IHN3aXBlci5wcm9ncmVzcztcbiAgfVxuXG4gIHN0YXRpYyBnZXRBY3RpdmVTbGlkZShwcm9ncmVzcywgc2xpZGVzTGVuZ3RoKSB7XG4gICAgcmV0dXJuIChwcm9ncmVzcyAqIChzbGlkZXNMZW5ndGggLSAxKSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5jcmVhc2VkUHJvZ3Jlc3MocHJvZ3Jlc3NCZXR3ZWVuU2xpZGUsIGluY3JlYXNlUmF0aW8sIGluY3JlYXNlUmF0aW9EZWxheSkge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAocHJvZ3Jlc3NCZXR3ZWVuU2xpZGUgKiBpbmNyZWFzZVJhdGlvKSAtICgoMSAtIHByb2dyZXNzQmV0d2VlblNsaWRlKSAqIGluY3JlYXNlUmF0aW9EZWxheSkpKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRTY3JvbGxCYXJTdHlsZShsLCByLCBzbGlkZVBlcmNlbnQsIHNjcm9sbEJhckRyYWcpIHtcbiAgICBjb25zdCBzY3JvbGxCYXJEcmFnU3R5bGVkID0gc2Nyb2xsQmFyRHJhZztcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5tYXgoMCwgbCk7XG4gICAgLy8gUmV2ZXJzZSByaWdodCBwZXJjZW50IGFuZCBzdG9wIGxlZnQgZ29pbmcgb2ZmIHRoZSBzY2FsZS5cbiAgICAvLyAoaWYgbGVmdCBpcyBuZWdhdGl2ZSwgc2V0IHRoZSBiYXIncyB3aWR0aCB0byBiZSBkZWZhdWx0IHNsaWRlUGVyY2VudCB3aWR0aClcbiAgICBjb25zdCByaWdodCA9IChsID49IDApID8gKDEwMCAtIE1hdGgubWluKDEwMCwgcikpIDogKDEwMCAtIHNsaWRlUGVyY2VudCk7XG5cbiAgICBzY3JvbGxCYXJEcmFnU3R5bGVkLnN0eWxlLmxlZnQgPSBgJHtsZWZ0fSVgO1xuICAgIHNjcm9sbEJhckRyYWdTdHlsZWQuc3R5bGUucmlnaHQgPSBgJHtyaWdodH0lYDtcbiAgfVxuXG5cbiAgc2Nyb2xsQmFyVHJhbnNpdGlvbihzd2lwZXIsIHRyYW5zaXRpb24sIGZvcmNlKSB7XG4gICAgaWYgKCFmb3JjZSAmJiBzd2lwZXIucHJvZ3Jlc3MgPT09IHRoaXMucHJvcHMucHJvZ3Jlc3NTdG9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBzd2lwZXIucHJvZ3Jlc3MgPiB0aGlzLnByb3BzLnByb2dyZXNzU3RvcmVkID8gJ2ZvcndhcmRzJyA6ICdiYWNrd2FyZHMnO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5wcm9wcy5wcm9ncmVzc1N0b3JlZCAtIHN3aXBlci5wcm9ncmVzcyk7XG4gICAgY29uc3QgdmVsb2NpdHkgPSAodGhpcy5wcm9wcy5tYXhUcmFuc2l0aW9uICogc3dpcGVyLnNsaWRlcy5sZW5ndGgpICogZGlzdGFuY2U7XG4gICAgY29uc3QgbmV3VHJhbnNpdGlvbiA9IE1hdGgubWluKHZlbG9jaXR5LCB0cmFuc2l0aW9uKTtcblxuXG4gICAgbGV0IGxlZnQgPSB7XG4gICAgICB0cmFuc2l0aW9uOiAobmV3VHJhbnNpdGlvbiAvICh0aGlzLnByb3BzLmluY3JlYXNlUmF0aW8ubGVmdCkpIC0gKG5ld1RyYW5zaXRpb24gKiB0aGlzLnByb3BzLmluY3JlYXNlUmF0aW9EZWxheS5sZWZ0KSxcbiAgICAgIGRlbGF5OiAobmV3VHJhbnNpdGlvbiAqIHRoaXMucHJvcHMuaW5jcmVhc2VSYXRpb0RlbGF5LmxlZnQpLFxuICAgICAgZWFzZTogdGhpcy5wcm9wcy5lYXNpbmcubGVmdFxuICAgIH07XG5cbiAgICBsZXQgcmlnaHQgPSB7XG4gICAgICB0cmFuc2l0aW9uOiAobmV3VHJhbnNpdGlvbiAvICh0aGlzLnByb3BzLmluY3JlYXNlUmF0aW8ucmlnaHQpKSAtIChuZXdUcmFuc2l0aW9uICogdGhpcy5wcm9wcy5pbmNyZWFzZVJhdGlvRGVsYXkucmlnaHQpLFxuICAgICAgZGVsYXk6IChuZXdUcmFuc2l0aW9uICogdGhpcy5wcm9wcy5pbmNyZWFzZVJhdGlvRGVsYXkucmlnaHQpLFxuICAgICAgZWFzZTogdGhpcy5wcm9wcy5lYXNpbmcucmlnaHRcbiAgICB9O1xuXG4gICAgLy8gcmV2ZXJzZSBkaXJlY3Rpb25cbiAgICBpZiAoZGlyZWN0aW9uICE9PSAnZm9yd2FyZHMnKSB7XG4gICAgICBjb25zdCByZXZlcnNlRGlyZWN0aW9ucyA9IFtyaWdodCwgbGVmdF07XG4gICAgICBbbGVmdCwgcmlnaHRdID0gcmV2ZXJzZURpcmVjdGlvbnM7XG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNpdGlvblN0cmluZyA9IGBsZWZ0ICR7bGVmdC50cmFuc2l0aW9ufW1zICR7bGVmdC5lYXNlfSAke2xlZnQuZGVsYXl9bXMsIHJpZ2h0ICR7cmlnaHQudHJhbnNpdGlvbn1tcyAke3JpZ2h0LmVhc2V9ICR7cmlnaHQuZGVsYXl9bXNgO1xuXG4gICAgdGhpcy5zY3JvbGxCYXJEcmFnLnN0eWxlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uU3RyaW5nO1xuICB9XG59XG4iLCJpbXBvcnQgRHhUYWJzIGZyb20gJy4uLy4uL0R4VGFicy9lczYvRHhUYWJzJztcbmltcG9ydCBDb250ZW50QmxvY2tzQ29udGFpbmVyU3dpcGluZyBmcm9tICcuLi9lczYvQ29udGVudEJsb2Nrc0NvbnRhaW5lclN3aXBpbmcnO1xuXG5jbGFzcyBDb250ZW50QmxvY2tzQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy4kZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cbiAgICB0aGlzLl9keFRhYnNFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKTtcblxuICAgIHRoaXMuaW5pdER4VGFicygpO1xuXG4gICAgdGhpcy5fdHdvQ29sKCk7XG4gICAgdGhpcy5faGlkZGVuU3ViaGVhZGluZygpO1xuICAgIHRoaXMuX2FsaWduTW9kZWxTZWxlY3RvclRlbXBsYXRlKCk7XG5cbiAgICBpZiAodGhpcy5fdGVtcGxhdGUuaW5jbHVkZXMoJ3N3aXBpbmcnKVxuICAgICAgICAgfHwgdGhpcy5fdGVtcGxhdGUuaW5jbHVkZXMoJ2luc2lkZU11bHRpQ2F0UXVlc3Rpb25uYWlyZScpXG4gICAgICAgICB8fCB0aGlzLl90ZW1wbGF0ZS5pbmNsdWRlcygnc3dpcGluZy0yY29sdW1uJylcbiAgICApIHtcbiAgICAgIG5ldyBDb250ZW50QmxvY2tzQ29udGFpbmVyU3dpcGluZyh0aGlzLmVsZW1lbnQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH1cblxuICAgIHRoaXMuX2R4VGFic0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRHhUYWJzOmZhZGVpbicsICgpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IHRoaXMuJGVsZW1lbnQuY2xvc2VzdCgnLkFjY29yZGlvbicpO1xuICAgICAgaWYgKHBhcmVudENvbnRhaW5lci5sZW5ndGgpIHtcbiAgICAgICAgcGFyZW50Q29udGFpbmVyLkFjY29yZGlvbignY2FsY3VsYXRlTmV3SGVpZ2h0Jyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hbGlnbk1vZGVsU2VsZWN0b3JUZW1wbGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuX2FsaWduTW9kZWxTZWxlY3RvclRlbXBsYXRlKCk7XG4gICAgICB0aGlzLl90d29Db2woKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXREeFRhYnMoKSB7XG4gICAgdGhpcy5fZHhUYWJzRWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuRHhUYWJzJyk7XG4gICAgdGhpcy5fZHhUYWJzID0gbmV3IER4VGFicyh0aGlzLl9keFRhYnNFbGVtZW50KTtcbiAgfVxuXG4gIF90d29Db2woKSB7XG4gICAgaWYgKHRoaXMuX3RlbXBsYXRlID09PSAnY29udGVudC1ibG9ja3MtMmNvbHVtbicgfHwgdGhpcy5fdGVtcGxhdGUgPT09ICdzd2lwaW5nLTJjb2x1bW4nKSB7XG4gICAgICBjb25zdCBjb250ZW50Q2FyZEhlYWRpbmdzID0gWy4uLnRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQ29udGVudENhcmRfX2hlYWRpbmcnKV07XG5cbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDkwMCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndHdvQ29sJyk7XG4gICAgICAgIGNvbnRlbnRDYXJkSGVhZGluZ3MuZm9yRWFjaCgoY29udGVudENhcmRIZWFkaW5nKSA9PiB7XG4gICAgICAgICAgY29udGVudENhcmRIZWFkaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvbnRIMycpO1xuICAgICAgICAgIGNvbnRlbnRDYXJkSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdmb250SDQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndHdvQ29sJyk7XG4gICAgICAgIGNvbnRlbnRDYXJkSGVhZGluZ3MuZm9yRWFjaCgoY29udGVudENhcmRIZWFkaW5nKSA9PiB7XG4gICAgICAgICAgY29udGVudENhcmRIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2ZvbnRIMycpO1xuICAgICAgICAgIGNvbnRlbnRDYXJkSGVhZGluZy5jbGFzc0xpc3QucmVtb3ZlKCdmb250SDQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2hpZGRlblN1YmhlYWRpbmcoKSB7XG4gICAgY29uc3QgaGVhZGVyQmxvY2sgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlckJsb2NrJyk7XG5cbiAgICBpZiAoaGVhZGVyQmxvY2spIHtcbiAgICAgIGNvbnN0IHN1YkhlYWRpbmcgPSBoZWFkZXJCbG9jay5xdWVyeVNlbGVjdG9yKCcuc3ViSGVhZGluZycpO1xuXG4gICAgICBpZiAoc3ViSGVhZGluZykge1xuICAgICAgICBpZiAoc3ViSGVhZGluZy5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICBoZWFkZXJCbG9jay5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3ViaGVhZGluZycsICdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hbGlnbk1vZGVsU2VsZWN0b3JUZW1wbGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fdGVtcGxhdGUgPT09ICdtb2RlbC1zZWxlY3Rvci1zdGFja2VkJyB8fCB0aGlzLl90ZW1wbGF0ZSA9PT0gJ21vZGVsLXNlbGVjdG9yLWxpdGUtc3RhY2tlZCcgfHwgdGhpcy5fdGVtcGxhdGUgPT09ICdmZWF0dXJlLXN3aXBpbmcnIHx8IHRoaXMuX3RlbXBsYXRlID09PSAnaW5zaWRlTXVsdGlDYXRRdWVzdGlvbm5haXJlJykge1xuICAgICAgY29uc3QgdG9nZ2xlQ29udGVudEl0ZW1zID0gWy4uLnRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuRHhUYWJzX19wYW5lbCcpXTtcbiAgICAgIHRvZ2dsZUNvbnRlbnRJdGVtcy5mb3JFYWNoKCh0b2dnbGVJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHRDb250YWluZXJzVG9wID0gWy4uLnRvZ2dsZUl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLnRleHRDb250YWluZXJUb3AnKV07XG5cbiAgICAgICAgdGV4dENvbnRhaW5lcnNUb3AuZm9yRWFjaCgodGV4dENvbnRhaW5lcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHRleHRDb250YWluZXJFbGVtZW50ID0gdGV4dENvbnRhaW5lcjtcbiAgICAgICAgICB0ZXh0Q29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh0ZXh0Q29udGFpbmVyc1RvcCkuZXF1YWxIZWlnaHRzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgQ29udGVudEJsb2Nrc0NvbnRhaW5lckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkNvbnRlbnRCbG9ja3NDb250YWluZXInKTtcbmlmIChDb250ZW50QmxvY2tzQ29udGFpbmVyRWxlbWVudHMubGVuZ3RoKSB7XG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoQ29udGVudEJsb2Nrc0NvbnRhaW5lckVsZW1lbnRzLCBlbCA9PiBuZXcgQ29udGVudEJsb2Nrc0NvbnRhaW5lcihlbCkpO1xufVxuIiwiaW1wb3J0IHtcbiAgZXZlbnRUcmlnZ2VyLFxuICB0YWJsaXN0TmF2aWdhdGlvbixcbiAgdGhyb3R0bGVcbn0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL2Rldi9qcy91dGlscy9pbmRleCc7XG5cbmltcG9ydCB7IHdpbmRvd1dpZHRoIH0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL2Rldi9qcy91dGlscy93aW5kb3dEaW1lbnNpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHhUYWJzIHtcbiAgLy8ganNoaW50IGlnbm9yZTpzdGFydFxuICBzdGF0aWMgX2RlZmF1bHRzID0ge1xuICAgIGluaXRpYWxUYWI6IDAsXG4gICAgZmFkZU91dEtleWZyYW1lczogW1xuICAgICAgeyBvcGFjaXR5OiAxLCB9LFxuICAgICAgeyBvcGFjaXR5OiAwLCB9LFxuICAgIF0sXG4gICAgZmFkZUluS2V5ZnJhbWVzOiBbXG4gICAgICB7IG9wYWNpdHk6IDAsIH0sXG4gICAgICB7IG9wYWNpdHk6IDEsIH0sXG4gICAgXSxcbiAgICB0aW1pbmdGYWRlSW46IHtcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBlYXNpbmc6ICdlYXNlLWluJyxcbiAgICAgIGZpbGw6ICdmb3J3YXJkcydcbiAgICB9LFxuICAgIHRpbWluZ0ZhZGVPdXQ6IHtcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXG4gICAgICBmaWxsOiAnZm9yd2FyZHMnXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsYXNzZXMgPSB7XG4gICAgdGFiTGlzdDogJ0R4VGFic19fdGFibGlzdCcsXG4gICAgdGFiTGlzdE92ZXJmbG93OiAnRHhUYWJzX190YWJsaXN0LS1vdmVyZmxvdycsXG4gICAgdGFiTGlzdFZpc2libGU6ICdEeFRhYnNfX3RhYmxpc3QtLXZpc2libGUnLFxuICAgIHRhYjogJ0R4VGFic19fdGFiJyxcbiAgICB0YWJBY3RpdmU6ICdEeFRhYnNfX3RhYi0tYWN0aXZlJyxcbiAgICBwYW5lbHM6ICdEeFRhYnNfX3BhbmVscycsXG4gICAgcGFuZWw6ICdEeFRhYnNfX3BhbmVsJyxcbiAgICBtYXNrOiAnRHhUYWJzX19tYXNrJyxcbiAgfVxuICAvLyBqc2hpbnQgaWdub3JlOmVuZFxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgRHhUYWJzLl9kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy50YWJzID0gWy4uLnRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYlwiXScpXTtcbiAgICB0aGlzLnRhYmxpc3QgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJ0YWJsaXN0XCJdJyk7XG4gICAgdGhpcy50YWJzV2lkdGhUb3RhbCA9IDA7XG4gICAgdGhpcy5wYW5lbHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1keHRhYnMtcGFuZWxzLWlkPVwiJHt0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWR4dGFicy1pZCcpfVwiXWApO1xuICAgIHRoaXMucGFuZWxzID0gWy4uLnRoaXMucGFuZWxzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFicGFuZWxcIl0nKV07XG4gICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnRhYnMubGVuZ3RoIHx8IHRoaXMudGFicy5sZW5ndGggPCAyKSB7XG4gICAgICBpZiAodGhpcy5wYW5lbHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUGFuZWwgPSB0aGlzLnBhbmVsc1t0aGlzLm9wdGlvbnMuaW5pdGlhbFRhYl07XG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KCdEeFRhYnM6c2luZ2xldGFiJywgeyBzZWxlY3RlZFBhbmVsIH0pO1xuICAgICAgICB0aGlzLnBhbmVsc1swXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5wYW5lbHNbMF0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICB9XG4gICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGFiU2V0dXAoKTtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICAgIHRoaXMuYWRkRXZlbnRzKCk7XG5cbiAgICBjb25zdCBzZWxlY3RlZFRhYiA9IHRoaXMudGFic1t0aGlzLm9wdGlvbnMuaW5pdGlhbFRhYl07XG4gICAgdGhpcy5maXJlRXZlbnQoJ0R4VGFiczppbml0Jywge1xuICAgICAgc2VsZWN0ZWRUYWIsXG4gICAgICBzZWxlY3RlZFBhbmVsOiB0aGlzLmdldFBhbmVsRnJvbVRhYihzZWxlY3RlZFRhYilcbiAgICB9KTtcbiAgfVxuXG4gIGZpcmVFdmVudChldmVudFR5cGUsIHBheWxvYWQgPSB7fSkge1xuICAgIGV2ZW50VHJpZ2dlcih0aGlzLmVsZW1lbnQsIGV2ZW50VHlwZSwgcGF5bG9hZCk7XG4gIH1cblxuICB0YWJTZXR1cCgpIHtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaWQgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWR4dGFicy1pZCcpO1xuICAgICAgY29uc3QgdGFiSWQgPSBgRHhUYWJzXyR7aWR9X3RhYl8ke2luZGV4fWA7XG4gICAgICBjb25zdCBwYW5lbElkID0gYER4VGFic18ke2lkfV9wYW5lbF8ke2luZGV4fWA7XG4gICAgICBjb25zdCBwYW5lbCA9IHRoaXMucGFuZWxzW2luZGV4XTtcblxuICAgICAgdGFiLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFiSWQpO1xuICAgICAgdGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIHBhbmVsSWQpO1xuXG4gICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcbiAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnaWQnLCBwYW5lbElkKTtcbiAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgdGFiSWQpO1xuICAgIH0pO1xuICAgIHRhYmxpc3ROYXZpZ2F0aW9uKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5jb2xsYXBzZVdoaXRlc3BhY2VCZXR3ZWVuVGFicygpO1xuICB9XG5cbiAgYWRkRXZlbnRzKCkge1xuICAgIHRoaXMudGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLnRhYkNsaWNrSGFuZGxlcihldmVudCksIGZhbHNlKSk7XG4gICAgY29uc3QgdGhyb3R0bGVSZXNpemUgPSB0aHJvdHRsZSgoKSA9PiB0aGlzLnNldERpbWVuc2lvbnMoKSwgMjUwLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhyb3R0bGVSZXNpemUodGhpcy5lbGVtZW50KSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB0aGlzLnNldERpbWVuc2lvbnMoKSk7XG4gICAgdGhpcy5zZXREaW1lbnNpb25zKCk7XG4gIH1cblxuICBjb2xsYXBzZVdoaXRlc3BhY2VCZXR3ZWVuVGFicygpIHtcbiAgICBbLi4udGhpcy50YWJsaXN0LmNoaWxkTm9kZXNdLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzZXROZXdTdHlsZShlbGVtLCBzdHlsZSwgdmFsdWUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbTtcbiAgICBlbGVtZW50LnN0eWxlW3N0eWxlXSA9IHZhbHVlO1xuICB9XG5cbiAgdW5zZXRUYWJIZWlnaHRzKCkge1xuICAgIHRoaXMudGFicy5mb3JFYWNoKHRhYiA9PiBEeFRhYnMuc2V0TmV3U3R5bGUodGFiLCAnaGVpZ2h0JywgJ2F1dG8nKSk7XG4gIH1cblxuICB1bnNldFRhYldpZHRocygpIHtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCh0YWIgPT4gRHhUYWJzLnNldE5ld1N0eWxlKHRhYiwgJ3dpZHRoJywgJ2F1dG8nKSk7XG4gIH1cblxuICBzZXREaW1lbnNpb25zKCkge1xuICAgIHRoaXMuc2V0VGFiU2l6ZXMoKTtcbiAgICB0aGlzLnNldE1hc2tXaWR0aCgpO1xuICAgIHRoaXMub3ZlcmZsb3dDaGVjaygpO1xuICAgIHRoaXMuZmlyZUV2ZW50KCdEeFRhYnM6cmVzaXplZCcpO1xuICB9XG5cbiAgb3ZlcmZsb3dDaGVjaygpIHtcbiAgICBjb25zdCB0YWJMaXN0U3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy50YWJsaXN0KTtcbiAgICBjb25zdCB0YWJMaXN0UGFkZGluZyA9IHBhcnNlRmxvYXQodGFiTGlzdFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWxlZnQnKSkgKyBwYXJzZUZsb2F0KHRhYkxpc3RTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpKTtcblxuICAgIGlmICh3aW5kb3dXaWR0aCgpIDw9ICh0aGlzLnRhYnNXaWR0aFRvdGFsICsgdGFiTGlzdFBhZGRpbmcpKSB7XG4gICAgICB0aGlzLnRhYmxpc3QuY2xhc3NMaXN0LmFkZChEeFRhYnMuY2xhc3Nlcy50YWJMaXN0T3ZlcmZsb3cpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRhYmxpc3QuY2xhc3NMaXN0LnJlbW92ZShEeFRhYnMuY2xhc3Nlcy50YWJMaXN0T3ZlcmZsb3cpO1xuICB9XG5cbiAgZW5zdXJlTmV4dFRhYlZpc2libGUoKSB7XG4gICAgY29uc3QgdGFiTGlzdFdpZHRoID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnRhYmxpc3QpLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykpO1xuICAgIGNvbnN0IHRhYnNBcnJheSA9IFtdO1xuICAgIGNvbnN0IHZpc2libGVUYWJzQXJyYXkgPSBbXTtcbiAgICBsZXQgdGFic1dpZHRoUnVubmluZ1RvdGFsID0gMDtcbiAgICBsZXQgdmlzaWJsZVRhYnNXaWR0aFJ1bm5pbmdUb3RhbCA9IDA7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgdGFiLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXgtd2lkdGgnKTtcbiAgICAgIHRhYi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1sZWZ0Jyk7XG4gICAgICB0YWIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctcmlnaHQnKTtcblxuICAgICAgY29uc3QgdGFiU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGFiKTtcbiAgICAgIGNvbnN0IHRhYldpZHRoID0gcGFyc2VGbG9hdCh0YWJTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSk7XG4gICAgICBjb25zdCB0YWJNYXhXaWR0aCA9IHBhcnNlRmxvYXQodGFiU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21heC13aWR0aCcpKTtcbiAgICAgIGNvbnN0IHRhYlBhZExlZnQgPSBwYXJzZUZsb2F0KHRhYlN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWxlZnQnKSk7XG4gICAgICBjb25zdCB0YWJQYWRSaWdodCA9IHBhcnNlRmxvYXQodGFiU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSk7XG4gICAgICBjb25zdCB0ZXh0QWxpZ24gPSB0YWJTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgndGV4dC1hbGlnbicpO1xuICAgICAgY29uc3QgbmV3VG90YWwgPSB2aXNpYmxlVGFic1dpZHRoUnVubmluZ1RvdGFsICsgdGFiV2lkdGg7XG4gICAgICBjb25zdCB0YWJWaXNpYmxlID0gKG5ld1RvdGFsIC0gKCh0YWJXaWR0aCAvIDMpICogMikpIDwgdGFiTGlzdFdpZHRoOyAvLyBrZWVwcyBwYXJ0IG9mIHRoZSBuZXh0IHRhYiB2aXNpYmxlXG5cbiAgICAgIHRhYnNXaWR0aFJ1bm5pbmdUb3RhbCArPSB0YWJXaWR0aDtcblxuICAgICAgaWYgKHRhYlZpc2libGUpIHtcbiAgICAgICAgdmlzaWJsZVRhYnNXaWR0aFJ1bm5pbmdUb3RhbCA9IG5ld1RvdGFsO1xuICAgICAgICB2aXNpYmxlVGFic0FycmF5LnB1c2godGFiKTtcbiAgICAgIH1cblxuICAgICAgdGFic0FycmF5LnB1c2goe1xuICAgICAgICB0YWJXaWR0aCxcbiAgICAgICAgdGFiTWF4V2lkdGgsXG4gICAgICAgIHRhYlBhZExlZnQsXG4gICAgICAgIHRhYlBhZFJpZ2h0LFxuICAgICAgICB0YWJWaXNpYmxlLFxuICAgICAgICB0ZXh0QWxpZ25cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy50YWJzV2lkdGhUb3RhbCA9IHRhYnNXaWR0aFJ1bm5pbmdUb3RhbDtcbiAgICBpZiAodmlzaWJsZVRhYnNBcnJheS5sZW5ndGggPT09IHRoaXMudGFicy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2aXNpYmxlTGVuZ3RoID0gdmlzaWJsZVRhYnNBcnJheS5sZW5ndGg7XG4gICAgY29uc3QgYWRkaXRpb25hbFBhZGRpbmcgPSBwYXJzZUludCgoKHRhYkxpc3RXaWR0aCAtIHZpc2libGVUYWJzV2lkdGhSdW5uaW5nVG90YWwpICsgdGFic0FycmF5W3Zpc2libGVMZW5ndGggLSAxXS50YWJXaWR0aCkgLyAodmlzaWJsZUxlbmd0aCArIDAuNSkgLyAyLCAxMCk7XG5cbiAgICB0YWJzQXJyYXkuZm9yRWFjaCgocHJvcHMsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0YWIgPSB0aGlzLnRhYnNbaW5kZXhdO1xuICAgICAgY29uc3Qgd2lkdGhXaXRoUGFkZGluZyA9IHByb3BzLnRhYldpZHRoICsgKGFkZGl0aW9uYWxQYWRkaW5nICogMik7XG5cbiAgICAgIC8vIGlmIHRleHQgaXMgbGVmdCBhbGlnbmVkLCBhc3N1bWUgaWNvbiBhbmQgYXNzaWduIGFsbCBwYWRkaW5nIHRvIHJpZ2h0IC0gcmV2ZXJzZSBmb3IgTUVOQVxuICAgICAgY29uc3QgY2FsY0xlZnRQYWQgPSBhbGlnbmVkID0+IChhbGlnbmVkID09PSAnbGVmdCcgPyBwcm9wcy50YWJQYWRMZWZ0IDogcHJvcHMudGFiUGFkTGVmdCArIChhZGRpdGlvbmFsUGFkZGluZyAqIDIpKTtcbiAgICAgIGNvbnN0IGNhbGNSaWdodFBhZCA9IGFsaWduZWQgPT4gKGFsaWduZWQgPT09ICdsZWZ0JyA/IHByb3BzLnRhYlBhZFJpZ2h0ICsgKGFkZGl0aW9uYWxQYWRkaW5nICogMikgOiBwcm9wcy50YWJQYWRSaWdodCk7XG4gICAgICBjb25zdCBsZWZ0UGFkID0gcHJvcHMudGV4dEFsaWduID09PSAnY2VudGVyJyA/IChwcm9wcy50YWJQYWRMZWZ0ICsgYWRkaXRpb25hbFBhZGRpbmcpIDogY2FsY0xlZnRQYWQocHJvcHMudGV4dEFsaWduKTtcbiAgICAgIGNvbnN0IHJpZ2h0UGFkID0gcHJvcHMudGV4dEFsaWduID09PSAnY2VudGVyJyA/IChwcm9wcy50YWJQYWRSaWdodCArIGFkZGl0aW9uYWxQYWRkaW5nKSA6IGNhbGNSaWdodFBhZChwcm9wcy50ZXh0QWxpZ24pO1xuXG4gICAgICBpZiAod2lkdGhXaXRoUGFkZGluZyA+IHByb3BzLnRhYk1heFdpZHRoKSB7XG4gICAgICAgIER4VGFicy5zZXROZXdTdHlsZSh0YWIsICdtYXhXaWR0aCcsIGAke3dpZHRoV2l0aFBhZGRpbmd9cHhgKTtcbiAgICAgIH1cbiAgICAgIER4VGFicy5zZXROZXdTdHlsZSh0YWIsICdwYWRkaW5nTGVmdCcsIGAke2xlZnRQYWR9cHhgKTtcbiAgICAgIER4VGFicy5zZXROZXdTdHlsZSh0YWIsICdwYWRkaW5nUmlnaHQnLCBgJHtyaWdodFBhZH1weGApO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VGFiU2l6ZXMoKSB7XG4gICAgdGhpcy51bnNldFRhYkhlaWdodHMoKTtcbiAgICB0aGlzLmVuc3VyZU5leHRUYWJWaXNpYmxlKCk7XG4gICAgY29uc3QgcmVkdWNlciA9IChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiAoYWNjdW11bGF0b3IgPiBjdXJyZW50VmFsdWUgPyBhY2N1bXVsYXRvciA6IGN1cnJlbnRWYWx1ZSk7XG4gICAgY29uc3QgbmV3SGVpZ2h0ID0gdGhpcy50YWJzLm1hcCh0YWIgPT4gdGFiLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCkucmVkdWNlKHJlZHVjZXIpO1xuXG4gICAgdGhpcy50YWJzLmZvckVhY2godGFiID0+IER4VGFicy5zZXROZXdTdHlsZSh0YWIsICdoZWlnaHQnLCBgJHtuZXdIZWlnaHR9cHhgKSk7XG4gICAgdGhpcy5zZXRNYXNrV2lkdGgoKTtcbiAgfVxuXG4gIHNldE1hc2tXaWR0aCgpIHtcbiAgICBjb25zdCByZWR1Y2VyID0gKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUpID0+IGFjY3VtdWxhdG9yICsgY3VycmVudFZhbHVlO1xuICAgIGNvbnN0IG1hc2tXaWR0aCA9IHRoaXMudGFicy5tYXAodGFiID0+IHRhYi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCkucmVkdWNlKHJlZHVjZXIpO1xuICAgIHRoaXMubWFzay5zdHlsZS53aWR0aCA9IGAke3BhcnNlSW50KG1hc2tXaWR0aCwgMTApfXB4YDtcbiAgfVxuXG4gIHRhYkNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWN0aXZlID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAodGhpcy5hbmltYXRpbmcgfHwgIWFjdGl2ZSB8fCBhY3RpdmUuY2xhc3NMaXN0LmNvbnRhaW5zKER4VGFicy5jbGFzc2VzLnRhYkFjdGl2ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLnRhYmxpc3QucXVlcnlTZWxlY3RvcihgLiR7RHhUYWJzLmNsYXNzZXMudGFiQWN0aXZlfWApIHx8IG51bGw7XG4gICAgdGhpcy51bnNldEFjdGl2ZVRhYnMoKTtcbiAgICBEeFRhYnMuc2V0QWN0aXZlVGFiKGFjdGl2ZSk7XG4gICAgdGhpcy5zd2l0Y2hUYWJQYW5lbHMocHJldmlvdXMsIGFjdGl2ZSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgaW5pdGlhbFRhYiA9IHRoaXMudGFic1t0aGlzLm9wdGlvbnMuaW5pdGlhbFRhYl07XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiLWluZGV4JywgaW5kZXgpKTtcbiAgICBEeFRhYnMuc2V0QWN0aXZlVGFiKGluaXRpYWxUYWIpO1xuICAgIHRoaXMuc2V0QWN0aXZlVGFiUGFuZWwoaW5pdGlhbFRhYik7XG4gICAgdGhpcy5tYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRoaXMubWFzay5jbGFzc0xpc3QuYWRkKER4VGFicy5jbGFzc2VzLm1hc2spO1xuICAgIHRoaXMudGFibGlzdC5hcHBlbmRDaGlsZCh0aGlzLm1hc2spO1xuICAgIHRoaXMudGFibGlzdC5jbGFzc0xpc3QuYWRkKER4VGFicy5jbGFzc2VzLnRhYkxpc3RWaXNpYmxlKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRBY3RpdmVUYWIodGFiKSB7XG4gICAgY29uc3QgYWN0aXZlID0gdGFiO1xuICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICBhY3RpdmUuY2xhc3NMaXN0LmFkZChEeFRhYnMuY2xhc3Nlcy50YWJBY3RpdmUpO1xuICB9XG5cblxuICBzdGF0aWMgZG9BbmltYXRpb24oZWxlbSwga2V5ZnJhbWVzLCB0aW1pbmcsIGZpbmlzaCkge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGVsZW0uYW5pbWF0ZShrZXlmcmFtZXMsIHRpbWluZyk7XG4gICAgYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgYW5pbWF0aW9uLm9uZmluaXNoID0gKCkgPT4gZmluaXNoKCk7XG4gICAgYW5pbWF0aW9uLnBsYXkoKTtcbiAgfVxuXG4gIHN3aXRjaFRhYlBhbmVscyhwcmV2aW91c1RhYiwgbmV4dFRhYikge1xuICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBjb25zdCBwcmV2aW91c1BhbmVsID0gdGhpcy5nZXRQYW5lbEZyb21UYWIocHJldmlvdXNUYWIpO1xuXG4gICAgaWYgKHByZXZpb3VzUGFuZWwpIHtcbiAgICAgIGNvbnN0IGZpbmlzaCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoJ0R4VGFiczpmYWRlb3V0JywgeyBwcmV2aW91c1RhYiwgcHJldmlvdXNQYW5lbCB9KTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgcHJldmlvdXNQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIHRoaXMuc2V0QWN0aXZlVGFiUGFuZWwobmV4dFRhYik7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIER4VGFicy5kb0FuaW1hdGlvbihwcmV2aW91c1BhbmVsLCB0aGlzLm9wdGlvbnMuZmFkZU91dEtleWZyYW1lcywgdGhpcy5vcHRpb25zLnRpbWluZ0ZhZGVPdXQsIGZpbmlzaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlVGFiUGFuZWwobmV4dFRhYik7XG4gICAgfVxuICB9XG5cbiAgc2V0QWN0aXZlVGFiUGFuZWwoc2VsZWN0ZWRUYWIpIHtcbiAgICB0aGlzLmFuaW1hdGluZyA9IHRydWU7XG4gICAgY29uc3Qgc2VsZWN0ZWRQYW5lbCA9IHRoaXMuZ2V0UGFuZWxGcm9tVGFiKHNlbGVjdGVkVGFiKTtcbiAgICBzZWxlY3RlZFBhbmVsLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIHNlbGVjdGVkUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY29uc3QgZmluaXNoID0gKCkgPT4ge1xuICAgICAgdGhpcy5maXJlRXZlbnQoJ0R4VGFiczpmYWRlaW4nKTtcbiAgICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgfTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdEeFRhYnM6YmVmb3JlZmFkZWluJywgeyBzZWxlY3RlZFRhYiwgc2VsZWN0ZWRQYW5lbCB9KTtcbiAgICAgIER4VGFicy5kb0FuaW1hdGlvbihzZWxlY3RlZFBhbmVsLCB0aGlzLm9wdGlvbnMuZmFkZUluS2V5ZnJhbWVzLCB0aGlzLm9wdGlvbnMudGltaW5nRmFkZUluLCBmaW5pc2gpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0UGFuZWxGcm9tVGFiKHRhYikge1xuICAgIHJldHVybiB0aGlzLnBhbmVsc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjJHt0YWIuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyl9YCk7XG4gIH1cblxuICB1bnNldEFjdGl2ZVRhYnMoKSB7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgdGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuICAgICAgdGFiLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKER4VGFicy5jbGFzc2VzLnRhYkFjdGl2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICBnZXRUYWJzKCkge1xuICAgIHJldHVybiB0aGlzLnRhYnM7XG4gIH1cblxuICBnZXRQYW5lbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuZWxzO1xuICB9XG5cbiAgRHhUYWJzKG1ldGhvZCwgb3B0aW9ucyA9IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGZuID0gdGhpc1ttZXRob2RdO1xuICAgIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgPyBmbi5iaW5kKHRoaXMsIG9wdGlvbnMpKCkgOiB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBLZXlDb2RlID0ge1xuICBCQUNLU1BBQ0U6IDgsXG4gIERFTEVURTogNDYsXG4gIERPV046IDQwLFxuICBFTkQ6IDM1LFxuICBFU0M6IDI3LFxuICBIT01FOiAzNixcbiAgTEVGVDogMzcsXG4gIFBBR0VfRE9XTjogMzQsXG4gIFBBR0VfVVA6IDMzLFxuICBSRVRVUk46IDEzLFxuICBSSUdIVDogMzksXG4gIFNQQUNFOiAzMixcbiAgVEFCOiA5LFxuICBVUDogMzhcbn07XG4iLCJleHBvcnQgY29uc3QgYnJlYWtwb2ludHMgPSB7XG4gIHNtYWxsOiA3NDAsXG4gIG1lZGl1bTogOTAwLFxuICB3aWRlcjogMTAwMCxcbiAgY3VycmVudDogbnVsbFxufTtcblxuZXhwb3J0IGNvbnN0IGdldERldmljZU9yaWVudGF0aW9uID0gKCkgPT4ge1xuICBjb25zdCAkd2luZG93ID0gJCh3aW5kb3cpO1xuICByZXR1cm4gJHdpbmRvdy53aWR0aCgpID4gJHdpbmRvdy5oZWlnaHQoKSA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0Jztcbn07XG5cbmNvbnN0IGdldExhcmdlckJyZWFrcG9pbnQgPSB3aWR0aCA9PiAoXG4gIHdpZHRoIDw9IGJyZWFrcG9pbnRzLm1lZGl1bSA/ICdtZWRpdW0nIDogJ2xhcmdlJ1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldEJyZWFrcG9pbnRTaXplID0gKG9sZENhbGMgPSB0cnVlKSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gb2xkQ2FsYyA/ICQod2luZG93KS53aWR0aCgpIDogd2luZG93LmlubmVyV2lkdGg7XG4gIHJldHVybiAod2lkdGggPD0gYnJlYWtwb2ludHMuc21hbGwpID8gJ3NtYWxsJyA6IGdldExhcmdlckJyZWFrcG9pbnQod2lkdGgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzQnJlYWtwb2ludFNtYWxsID0gKG9sZENhbGMgPSB0cnVlKSA9PiB7XG4gIHJldHVybiBnZXRCcmVha3BvaW50U2l6ZShvbGRDYWxjKSA9PT0gJ3NtYWxsJztcbn07XG5cbmV4cG9ydCBjb25zdCBpc0JyZWFrcG9pbnRNZWRpdW0gPSAob2xkQ2FsYyA9IHRydWUpID0+IHtcbiAgcmV0dXJuIGdldEJyZWFrcG9pbnRTaXplKG9sZENhbGMpID09PSAnbWVkaXVtJztcbn07XG5cbmV4cG9ydCBjb25zdCBpc01vYmlsZURldmljZSA9ICgpID0+IHtcbiAgcmV0dXJuICgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2ggfHwgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59O1xuXG5leHBvcnQgY29uc3QgaXNOb3RNb2JpbGVEZXZpY2UgPSAoKSA9PiB7XG4gIHJldHVybiAhaXNNb2JpbGVEZXZpY2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1RhYmxldERldmljZSA9ICgpID0+IHtcbiAgcmV0dXJuIC8oaXBhZHx0YWJsZXR8KGFuZHJvaWQoPyEuKm1vYmlsZSkpfCh3aW5kb3dzKD8hLipwaG9uZSkoLip0b3VjaCkpfGtpbmRsZXxwbGF5Ym9va3xzaWxrfChwdWZmaW4oPyEuKihJUHxBUHxXUCkpKSkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0lPUyA9ICgpID0+IHtcbiAgcmV0dXJuICgvKGlwYWR8aXBob25lfGlwb2QpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc05vdElPUyA9ICgpID0+IHtcbiAgcmV0dXJuICFpc0lPUygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzV2luZG93c1Bob25lID0gKCkgPT4ge1xuICByZXR1cm4gKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aW5kb3dzIHBob25lJykgIT09IC0xKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbmRyb2lkVmVyc2lvbiA9ICgpID0+IHtcbiAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gIGlmICh1YS5pbmRleE9mKCdBbmRyb2lkJykgPj0gMCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHVhLnNsaWNlKHVhLmluZGV4T2YoJ0FuZHJvaWQnKSArIDgpKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRCcm93c2VyVXNlckFnZW50ID0gKCkgPT4ge1xuICBjb25zdCB7IHVzZXJBZ2VudCB9ID0gbmF2aWdhdG9yO1xuICByZXR1cm4gdXNlckFnZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGRldGVjdEJyb3dzZXJzID0gKCkgPT4ge1xuICBjb25zdCB1c2VyQWdlbnQgPSBnZXRCcm93c2VyVXNlckFnZW50KCk7XG4gIGNvbnN0IGJyb3dzZXJzID0ge1xuICAgIGlzQ2hyb21lOiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPiAtMSxcbiAgICBpc01zRWRnZTogdXNlckFnZW50LmluZGV4T2YoJ0VkZ2UnKSA+IC0xLFxuICAgIGlzRXhwbG9yZXI6IHVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgPiAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpID4gLTEsIC8vIE1TSUUgPSBJRTEwIGFuZCBiZWxvdywgVHJpZGVudCA9IElFMTFcbiAgICBpc0ZpcmVmb3g6IHVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMSxcbiAgICBpc1NhZmFyaTogdXNlckFnZW50LmluZGV4T2YoJ1NhZmFyaScpID4gLTEsXG4gICAgaXNPcGVyYTogdXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignb3AnKSA+IC0xXG4gIH07XG5cbiAgaWYgKGJyb3dzZXJzLmlzQ2hyb21lICYmIGJyb3dzZXJzLmlzU2FmYXJpKSB7XG4gICAgYnJvd3NlcnMuaXNTYWZhcmkgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChicm93c2Vycy5pc0Nocm9tZSAmJiBicm93c2Vycy5pc09wZXJhKSB7XG4gICAgYnJvd3NlcnMuaXNDaHJvbWUgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBicm93c2Vycztcbn07XG5cbmV4cG9ydCBjb25zdCBpc0llID0gKCkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTGlzdC5jb250YWlucygnaWUnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc01zRWRnZSA9ICgpID0+IHtcbiAgcmV0dXJuIGRldGVjdEJyb3dzZXJzKCkuaXNNc0VkZ2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNJZTExID0gKCkgPT4ge1xuICByZXR1cm4gKCF3aW5kb3cuQWN0aXZlWE9iamVjdCAmJiAnQWN0aXZlWE9iamVjdCcgaW4gd2luZG93KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRWaWV3cG9ydFNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IHRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICB0ZXN0LnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246IGZpeGVkO3RvcDogMDtsZWZ0OiAwO2JvdHRvbTogMDtyaWdodDogMDsnO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRlc3QsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5maXJzdENoaWxkKTtcblxuICBjb25zdCBkaW1zID0geyB3aWR0aDogdGVzdC5vZmZzZXRXaWR0aCwgaGVpZ2h0OiB0ZXN0Lm9mZnNldEhlaWdodCB9O1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGVzdCk7XG5cbiAgcmV0dXJuIGRpbXM7XG59O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsVG9FbGVtZW50ID0gKGVsZW1lbnQsIG9wdGlvbnMsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0ICRlbGVtZW50ID0gZWxlbWVudCBpbnN0YW5jZW9mIGpRdWVyeSA/IGVsZW1lbnQgOiAkKGVsZW1lbnQpO1xuXG4gIC8vIE9wdGlvbnMgYXJlIG9wdGlvbmFsXG4gIGxldCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBTZXQgZGVmYXVsdHNcbiAgb3B0cyA9ICQuZXh0ZW5kKHtcbiAgICBhZGp1c3RtZW50OiAwLFxuICAgIGVhc2U6ICdlYXNlT3V0U2luZScsXG4gICAgZHVyYXRpb246IDgwMCxcbiAgICBjb250YWluZXI6ICQoJ2JvZHksIGh0bWwnKVxuICB9LCBvcHRzKTtcblxuICAvLyBIYXMgYW4gZWxlbWVudCBiZWVuIHN1cHBsaWVkP1xuICBpZiAoJGVsZW1lbnQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gU2Nyb2xsIHRvIHRoZSB0YXJnZXQgZWxlbWVudCBhbGxvd2luZyBmb3IgdGhlIHV0aWxpdHkgbWVudVxuICBvcHRzLmNvbnRhaW5lci5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgc2Nyb2xsVG9wOiAkZWxlbWVudC5vZmZzZXQoKS50b3AgLSBvcHRzLmFkanVzdG1lbnRcbiAgfSwgb3B0cy5kdXJhdGlvbiwgb3B0cy5lYXNlLCAoKSA9PiB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gRm9yIHVuaXQgdGVzdHNcbiAgcmV0dXJuIG9wdHM7XG59O1xuXG4vKipcbiAqIERldGVjdCBNb2Rlcm4gQnJvd3NlciBieSBhdmFpbGFiaWxpdHkgb2YgQmlnSW50IGZlYXR1cmUuXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGhhc0JpZ0ludFN1cHBvcnQgPSAoKSA9PiB7XG4gIHJldHVybiAodHlwZW9mIEJpZ0ludCA9PT0gJ2Z1bmN0aW9uJyk7XG59O1xuIiwiLyogZ2xvYmFsIGFwcFJlYWR5VGltZXIgKi9cblxuaW1wb3J0IHsgaXNCcmVha3BvaW50U21hbGwsIGdldEJyZWFrcG9pbnRTaXplIH0gZnJvbSAnLi9icm93c2VyRGV0ZWN0aW9uJztcbmltcG9ydCB7IEtleUNvZGUgfSBmcm9tICcuL2FyaWEnO1xuXG5jb25zdCAkbmF2SGVhZGVyID0gJCgnI2hlYWRlciwgLmR4bmF2LWhlYWRlcicpO1xuZXhwb3J0IGNvbnN0IHN0aWNreU5hdmlnYXRpb25FbmFibGVkID0gJG5hdkhlYWRlci5hdHRyKCdkYXRhLW5hdi10eXBlJykgPT09ICdzdGlja3knO1xuZXhwb3J0IGNvbnN0IHN0aWNreU5hdmlnYXRpb25UcmFuc2l0aW9uUG9pbnQgPSAyMDA7XG5jb25zdCB0ZW1wbGF0ZUNhY2hlID0ge307XG5cbmV4cG9ydCBjb25zdCBnb29nbGVNYXBTdHlsZXMgPSBbXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ2FkbWluaXN0cmF0aXZlLmxvY2FsaXR5JyxcbiAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBjb2xvcjogJyM2NjY2NjYnXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAnbGFuZHNjYXBlLm1hbl9tYWRlJyxcbiAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LmZpbGwnLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBjb2xvcjogJyNmOGY2ZjQnXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAncG9pJyxcbiAgICBlbGVtZW50VHlwZTogJ2xhYmVscycsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIHZpc2liaWxpdHk6ICdvZmYnXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcbiAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LmZpbGwnLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBjb2xvcjogJyNhZmFiYTQnXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcbiAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LnN0cm9rZScsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIGNvbG9yOiAnI2U2ZTZlNidcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxuICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgc2F0dXJhdGlvbjogLTE1XG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5LmNvbnRyb2xsZWRfYWNjZXNzJyxcbiAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LmZpbGwnLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBjb2xvcjogJyNhZmFiYTQnXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5LmNvbnRyb2xsZWRfYWNjZXNzJyxcbiAgICBlbGVtZW50VHlwZTogJ2xhYmVscy5pY29uJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgc2F0dXJhdGlvbjogLTEwMFxuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQubG9jYWwnLFxuICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZidcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmxvY2FsJyxcbiAgICBlbGVtZW50VHlwZTogJ2xhYmVscy5pY29uJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgc2F0dXJhdGlvbjogJzc3J1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQnLFxuICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLmljb24nLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBzYXR1cmF0aW9uOiAnLTEwMCdcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICd3YXRlcicsXG4gICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5maWxsJyxcbiAgICBzdHlsZXJzOiBbXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnI2M1ZDdkZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpZ2h0bmVzczogLTlcbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBpc1J0bCA9ICgpID0+IHtcbiAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF07XG4gIHJldHVybiBodG1sLmNsYXNzTGlzdC5jb250YWlucygncnRsJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FjaGVkU2NyaXB0ID0gKHVybCwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBuZXdPcHRpb25zID0gJC5leHRlbmQob3B0aW9ucyB8fCB7fSwge1xuICAgIGRhdGFUeXBlOiAnc2NyaXB0JyxcbiAgICBjYWNoZTogdHJ1ZSxcbiAgICB1cmxcbiAgfSk7XG5cbiAgcmV0dXJuICQuYWpheChuZXdPcHRpb25zKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRIZWlnaHQgPSAoZWxlbSkgPT4ge1xuICByZXR1cm4gKGVsZW0gPyBlbGVtLmNsaWVudEhlaWdodCA6IDApO1xufTtcblxuLy8gbWFrZSBzdXJlIHRvIHBhc3MgJ29sZENhbGN1bGF0aW9uID0gZmFsc2UnIHRvIHVzZSB0aGUgbmV3IHJlZmluZWQgY2FsY3VsYXRpb25cbi8vIG9yIHVzZSBnZXRTdGlja3lOYXZIZWlnaHRWMigpXG5leHBvcnQgY29uc3QgZ2V0U3RpY2t5TmF2SGVpZ2h0ID0gKHlQb3MsIG9sZENhbGN1bGF0aW9uID0gdHJ1ZSkgPT4ge1xuICBjb25zdCB5UG9zaXRpb24gPSB0eXBlb2YgeVBvcyAhPT0gJ251bWJlcicgPyAwIDogeVBvcztcbiAgY29uc3Qgc2hhcmVkSGVhZGVyID0gJCgnLmR4bmF2LWhlYWRlcicpO1xuICBjb25zdCAkaGVhZGVyID0gc2hhcmVkSGVhZGVyLmxlbmd0aCA/IHNoYXJlZEhlYWRlciA6ICQoJyNoZWFkZXInKTtcbiAgY29uc3QgJGluUGFnZU5hdiA9ICQoJy5JblBhZ2VOYXZpZ2F0aW9uJyk7XG4gIGNvbnN0ICRpblBhZ2VOYXZTdGlja3kgPSAkKCcuSW5QYWdlTmF2aWdhdGlvbi0tc3RpY2t5Jyk7XG4gIGNvbnN0ICRpblBhZ2VOYXZCYXIgPSAkKCcuSW5QYWdlTmF2aWdhdGlvbl9fYmFyJyk7XG4gIGNvbnN0IGR4TmF2UHJpbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5keG5hdl9fcHJpbWFyeScpO1xuICBjb25zdCBicmVha3BvaW50ID0gZ2V0QnJlYWtwb2ludFNpemUoKTtcbiAgY29uc3QgY2hlY2tTdGlja3lOYXYgPSAkaGVhZGVyLmxlbmd0aCA+IDAgPyAkaGVhZGVyLmNzcygncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJyA6IGZhbHNlO1xuICBjb25zdCBpblBhZ2VOYXZUb3AgPSAkaW5QYWdlTmF2Lmxlbmd0aCA+IDAgPyAkaW5QYWdlTmF2Lm9mZnNldCgpLnRvcCA6IG51bGw7XG4gIGNvbnN0IGlzU3RpY2t5TmF2ID0gc2hhcmVkSGVhZGVyLmxlbmd0aCA/IHRydWUgOiBjaGVja1N0aWNreU5hdjtcbiAgbGV0IGhlaWdodCA9IDA7XG5cbiAgaWYgKCFpc1N0aWNreU5hdikge1xuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICAvLyBoYXJkIGNvZGluZyB2YWx1ZXMgaGVyZSB0byBwcmV2ZW50IGhhdmluZyB0byByZXBlYXRlZGx5IGNsb25lIGFuZCBtZWFzdXJlIHRoZSBoZWFkZXJcbiAgY29uc3Qgb2xkTmF2QnJlYWtwb2ludCA9IDk2MDtcblxuICAvLyBhZGRlZCAkaW5QYWdlTmF2LmNzcygnZGlzcGxheScpIGNoZWNrIGZvciBMUkEtMTA4NTFcbiAgaWYgKGluUGFnZU5hdlRvcCAhPT0gbnVsbCAmJiB5UG9zaXRpb24gPj0gaW5QYWdlTmF2VG9wICYmIGJyZWFrcG9pbnQgPT09ICdsYXJnZScgJiYgJGluUGFnZU5hdi5jc3MoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuICRpblBhZ2VOYXYub3V0ZXJIZWlnaHQoKTtcbiAgfVxuXG4gIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgLy8gdGhpcyBpcyB0aGUgb2xkIG5hdmlnYXRpb24sIG9ubHkgc2hvd24gd2hlbiBOYWFTIGlzIGRvd24sIGhhcmQgY29kaW5nIHZhbHVlcyB0byBwcmV2ZW50IGhhdmluZyB0byBjbG9uZS9tZWFzdXJlIHRoZSBET00gZWxlbWVudHMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgY29uc3QgZ2V0TmF2aWdhdGlvbkhlaWdodCA9ICgpID0+IHtcbiAgICBpZiAod2luZG93V2lkdGggPj0gb2xkTmF2QnJlYWtwb2ludCAmJiB5UG9zaXRpb24gPCAyMDApIHtcbiAgICAgIHJldHVybiAxMDY7XG4gICAgfVxuICAgIHJldHVybiA1MDtcbiAgfTtcblxuICBjb25zdCBnZXROYWFTSGVpZ2h0ID0gKG9sZCkgPT4ge1xuICAgIGxldCBwcmltYXJ5TmF2SGVpZ2h0O1xuXG4gICAgaWYgKG9sZCkge1xuICAgICAgcHJpbWFyeU5hdkhlaWdodCA9IGdldEhlaWdodChkeE5hdlByaW1hcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmltYXJ5TmF2SGVpZ2h0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5keG5hdi1zY3JvbGxEb3duJykgPT09IG51bGwgJiYgISRpblBhZ2VOYXZTdGlja3kubGVuZ3RoKSA/IGdldEhlaWdodChkeE5hdlByaW1hcnkpICsgcGFyc2VJbnQoc2hhcmVkSGVhZGVyLmNzcygndG9wJyksIDEwKSA6IDA7XG4gICAgfVxuXG4gICAgbGV0IGJyZWFkY3J1bWJOYXZIZWlnaHQgPSBnZXRIZWlnaHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR4bmF2X19icmVhZGNydW1icy1jb250YWluZXInKSk7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uSGVpZ2h0ID0gZ2V0SGVpZ2h0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb25CYXJzV3JhcHBlcicpKTtcbiAgICBsZXQgaW5QYWdlTmF2aWdhdGlvbkhlaWdodCA9IDA7XG4gICAgaWYgKCRpblBhZ2VOYXYubGVuZ3RoKSB7XG4gICAgICBpZiAoJGluUGFnZU5hdlN0aWNreS5sZW5ndGgpIHtcbiAgICAgICAgYnJlYWRjcnVtYk5hdkhlaWdodCA9IDA7XG4gICAgICAgIGlmIChwYXJzZUludCgkaW5QYWdlTmF2QmFyLmNzcygndG9wJyksIDEwKSA9PT0gMCkge1xuICAgICAgICAgIGluUGFnZU5hdmlnYXRpb25IZWlnaHQgPSAkaW5QYWdlTmF2LmlubmVySGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KCRpblBhZ2VOYXZCYXIuY3NzKCd0b3AnKSwgMTApIDwgMCkge1xuICAgICAgICAgIGluUGFnZU5hdmlnYXRpb25IZWlnaHQgPSBNYXRoLm1heCgkaW5QYWdlTmF2Lm91dGVySGVpZ2h0KCkgKyBwYXJzZUludCgkaW5QYWdlTmF2QmFyLmNzcygndG9wJyksIDEwKSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByaW1hcnlOYXZIZWlnaHQgKyBicmVhZGNydW1iTmF2SGVpZ2h0ICsgbm90aWZpY2F0aW9uSGVpZ2h0ICsgKG9sZCA/IDAgOiBpblBhZ2VOYXZpZ2F0aW9uSGVpZ2h0KTtcbiAgfTtcblxuICBpZiAoc2hhcmVkSGVhZGVyLmxlbmd0aCkge1xuICAgIGhlaWdodCA9IGdldE5hYVNIZWlnaHQob2xkQ2FsY3VsYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIGhlaWdodCA9IGdldE5hdmlnYXRpb25IZWlnaHQoKTtcbiAgfVxuXG4gIHJldHVybiBoZWlnaHQ7XG59O1xuXG4vLyBzaG91bGQgYmUgdXNlZCB1bnRpbCBtZXJnZWQgd2l0aCBnZXROYXZpZ2F0aW9uSGVpZ2h0XG5leHBvcnQgY29uc3QgZ2V0U3RpY2t5TmF2SGVpZ2h0VjIgPSAoeVBvcykgPT4ge1xuICByZXR1cm4gZ2V0U3RpY2t5TmF2SGVpZ2h0KHlQb3MsIGZhbHNlKTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHNjcm9sbFRvID0gKHRhcmdldCwgZHVyYXRpb24sIGNhbGxiYWNrLCBlYXNpbmcsIGlnbm9yZVN0aWNreU5hdiwgeU9mZnNldCA9IDApID0+IHtcbiAgY29uc3QgbmV3RHVyYXRpb24gPSAodHlwZW9mIGR1cmF0aW9uICE9PSAnbnVtYmVyJykgPyA4MDAgOiBkdXJhdGlvbjtcbiAgY29uc3QgbmV3Q2FsbGJhY2sgPSAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSA/IG51bGwgOiBjYWxsYmFjaztcbiAgY29uc3QgbmV3RWFzaW5nID0gKHR5cGVvZiBlYXNpbmcgIT09ICdzdHJpbmcnKSA/ICdlYXNlT3V0U2luZScgOiBlYXNpbmc7XG4gIGxldCBwb3NpdGlvbiA9IDA7XG5cbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInKSB7IC8vIFB4IHZhbHVlXG4gICAgcG9zaXRpb24gPSB0YXJnZXQ7XG4gIH0gZWxzZSB7IC8vIEVsZW1lbnRcbiAgICBjb25zdCAkdGFyZ2V0RWwgPSB0YXJnZXQgfHwgJCgnYm9keScpO1xuICAgIHBvc2l0aW9uID0gJHRhcmdldEVsLm9mZnNldCgpLnRvcDtcbiAgfVxuXG4gIGlmIChpZ25vcmVTdGlja3lOYXYgIT09IHRydWUpIHtcbiAgICBwb3NpdGlvbiAtPSBnZXRTdGlja3lOYXZIZWlnaHQocG9zaXRpb24pO1xuICB9XG5cbiAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKFxuICAgIHsgc2Nyb2xsVG9wOiBwb3NpdGlvbiArIHlPZmZzZXQgfSxcbiAgICBuZXdEdXJhdGlvbixcbiAgICBuZXdFYXNpbmdcbiAgKVxuICAgIC5wcm9taXNlKClcbiAgICAuZG9uZShuZXdDYWxsYmFjayk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hlY2tEZWVwTGluayA9IChocmVmKSA9PiB7XG4gIGxldCBkZWVwTGluayA9IGZhbHNlO1xuICBjb25zdCBzcGVlZCA9IDIuNTtcblxuICBjb25zdCBoYXNoUG9zID0gaHJlZi5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoUG9zICsgMSA8IGhyZWYubGVuZ3RoICYmIGhhc2hQb3MgIT09IC0xKSB7XG4gICAgY29uc3QgaWQgPSBocmVmLnN1YnN0cmluZyhoYXNoUG9zLCBocmVmLmxlbmd0aCk7XG4gICAgaWYgKCQoaWQpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGV0IGxvY2F0aW9uID0gJChpZCk7XG4gICAgICBsZXQgZHVyYXRpb24gPSBsb2NhdGlvbi5vZmZzZXQoKS50b3AgLyBzcGVlZDtcblxuICAgICAgLy8gTFJBLTEzNzk0IHwgQWNjb3JkaW9uQ29udGFpbmVyIHwgT3BlbiBhY2NvcmRpb24gZmlyc3QgaWYgZGVlcGxpbmsgaXMgaW5zaWRlXG4gICAgICBpZiAoJCgnaGVhZCBbbmFtZT1cImFjY29yZGlvbk9uTW9iaWxlXCJdJykubGVuZ3RoICYmIGlzQnJlYWtwb2ludFNtYWxsKCkpIHtcbiAgICAgICAgY29uc3QgYWNjb3JkaW9uUGFyZW50ID0gbG9jYXRpb24uY2xvc2VzdCgnLmFjY29yZGlvbi1ncm91cCcpO1xuICAgICAgICBjb25zdCBhY2NvcmRpb25UaXRsZSA9IGFjY29yZGlvblBhcmVudC5maW5kKCcuYWNjb3JkaW9uLWdyb3VwLXRpdGxlJyk7XG5cbiAgICAgICAgaWYgKGFjY29yZGlvblBhcmVudC5sZW5ndGggJiYgYWNjb3JkaW9uVGl0bGUubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gT3BlbiBhY2NvcmRpb24gaWYgY2xvc2VkXG4gICAgICAgICAgaWYgKCFhY2NvcmRpb25QYXJlbnQuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgYWNjb3JkaW9uVGl0bGUuY2xpY2soKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBUYWtlIGludG8gYWNjb3VudCB0aGUgaGVpZ2h0IG9mIHRoZSBhY2NvcmRpb24gdGl0bGVcbiAgICAgICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uLm9mZnNldCgpLnRvcCAtIGFjY29yZGlvblRpdGxlLm91dGVySGVpZ2h0KCk7XG5cbiAgICAgICAgICBzY3JvbGxUbyhsb2NhdGlvbiwgODAwLCBudWxsLCAnZWFzZU91dFNpbmUnKTtcbiAgICAgICAgICBkZWVwTGluayA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsb2NhdGlvbi5wYXJlbnRzKCcuVGFiYmVkQ29udGFpbmVyJykubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0ICRjb250YWluZXIgPSBsb2NhdGlvbi5jbG9zZXN0KCcuVGFiYmVkQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICR0YWJzID0gJGNvbnRhaW5lci5maW5kKCcudGFiJyk7XG4gICAgICAgIGNvbnN0ICR0YWJMaW5rcyA9ICRjb250YWluZXIuZmluZCgnLnRhYi1saW5rJyk7XG4gICAgICAgIGxldCB0YWJJbmRleCA9IDA7XG5cbiAgICAgICAgJHRhYnMuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICBjb25zdCAkbG9jYXRpb24gPSAkKGVsKS5maW5kKGxvY2F0aW9uKTtcbiAgICAgICAgICBpZiAoJGxvY2F0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgdGFiSW5kZXggPSBpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRhYkxpbmtzLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgaWYgKGkgPT09IHRhYkluZGV4KSB7XG4gICAgICAgICAgICAkKGVsKS5jbGljaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9jYXRpb24gPSAkY29udGFpbmVyLm9mZnNldCgpLnRvcDtcbiAgICAgICAgZHVyYXRpb24gPSBsb2NhdGlvbiAvIHNwZWVkO1xuXG4gICAgICAgIHNjcm9sbFRvKGxvY2F0aW9uLCA4MDAsIG51bGwsICdlYXNlU3RhcnRGYXN0RW5kU2xvdycpO1xuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgfVxuXG4gICAgICAvLyBMUkEtMTI3MDEgfCBMNDYyIFRlc3QgfCBPcGVuIGFjY29yZGlvbiBmaXJzdCBpZiBkZWVwbGluayBpcyBpbnNpZGVcbiAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3ZlaGljbGVzRGlzY292ZXJ5JykpIHtcbiAgICAgICAgY29uc3QgYWNjb3JkaW9uUGFyZW50ID0gbG9jYXRpb24ucGFyZW50cygnLkFjY29yZGlvbkNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gJChsb2NhdGlvbik7XG5cbiAgICAgICAgaWYgKGFjY29yZGlvblBhcmVudC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBhY2NvcmRpb25IZWFkZXIgPSBhY2NvcmRpb25QYXJlbnQuZmluZCgnLmhlYWRlcicpO1xuXG4gICAgICAgICAgaWYgKCFhY2NvcmRpb25IZWFkZXIuaGFzQ2xhc3MoJ2FjY29yZGlvbi1vcGVuJykpIHtcbiAgICAgICAgICAgIGFjY29yZGlvbkhlYWRlci5jbGljaygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhY2NvcmRpb25IZWFkZXIuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgIGlmICghbG9jYXRpb24uaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgICAgICAgbG9jYXRpb24gPSBsb2NhdGlvbi5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICAtIGFjY29yZGlvbkhlYWRlci5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgICBlbGVtZW50LmNzcygnZGlzcGxheScsICcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvY2F0aW9uID0gbG9jYXRpb24ub2Zmc2V0KCkudG9wXG4gICAgICAgICAgICAgICAgLSBhY2NvcmRpb25IZWFkZXIub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2Nyb2xsVG8obG9jYXRpb24sIGR1cmF0aW9uLCBudWxsLCAnZWFzZVN0YXJ0RmFzdEVuZFNsb3cnKTtcbiAgICAgIGRlZXBMaW5rID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENvdWxkIG5vdCBmaW5kIGRlZXAgbGluayBlbGVtZW50IHdpdGggaWQ6ICR7aWR9YCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWVwTGluazsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuZXhwb3J0IGNvbnN0IGlzUGFnZUluSWZyYW1lID0gKCkgPT4ge1xuICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XG59O1xuXG5leHBvcnQgY29uc3QgaW5zaWRlVGFiYmVkQ29udGFpbmVyID0gKGVsKSA9PiB7XG4gIGNvbnN0IGlzSW5zaWRlVGFiYmVkQ29udGFpbmVyID0gISFlbC5wYXJlbnRzKCcuVGFiYmVkQ29udGFpbmVyJykubm90KCdbZGF0YS10b3RhbD1cIjFcIl0nKS5sZW5ndGg7XG5cbiAgaWYgKGlzSW5zaWRlVGFiYmVkQ29udGFpbmVyKSB7XG4gICAgcmV0dXJuIGVsLnBhcmVudHMoJy5UYWJiZWRDb250YWluZXInKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBtb2JpbGVBY2NvcmRpb25zQWN0aXZhdGVkID0gKCkgPT4ge1xuICByZXR1cm4gJCgnaGVhZCBbbmFtZT1cImFjY29yZGlvbk9uTW9iaWxlXCJdJykubGVuZ3RoO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUhUTUxUYWdzID0gKHMpID0+IHtcbiAgcmV0dXJuIHMudG9TdHJpbmcoKS5yZXBsYWNlKC9bPD49O10vZywgJycpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVybFBhcmFtZXRlciA9IChzUGFyYW0pID0+IHtcbiAgZnVuY3Rpb24gZGVjb2RlKHMpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KChzIHx8ICcnKS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG4gIH1cblxuICBjb25zdCBzUGFnZVVSTCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xuICBjb25zdCBzVVJMVmFyaWFibGVzID0gc1BhZ2VVUkwuc3BsaXQoJyYnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNVUkxWYXJpYWJsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzUGFyYW1ldGVyU3BsaXQgPSBzVVJMVmFyaWFibGVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgaWYgKGRlY29kZShzUGFyYW1ldGVyU3BsaXRbMF0pID09PSBzUGFyYW0pIHtcbiAgICAgIHJldHVybiBkZWNvZGUoc1BhcmFtZXRlclNwbGl0WzFdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQYXJhbWV0ZXJUb1VSTCA9ICh1cmwsIHBhcmFtKSA9PiB7XG4gIGNvbnN0IG5ld1VybCA9IHVybCArICh1cmwuc3BsaXQoJz8nKVsxXSA/ICcmJyA6ICc/JykgKyBwYXJhbTtcblxuICByZXR1cm4gcGFyYW0gIT09ICcnID8gbmV3VXJsIDogdXJsO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE9iamVjdEtleXMgPSAob2JqKSA9PiB7XG4gIGNvbnN0IGtleXMgPSBbXTtcbiAgZm9yIChsZXQgaSBpbiBvYmopIHsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICBrZXlzLnB1c2goaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBrZXlzO1xufTtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbmV4cG9ydCBjb25zdCBjYW52YXNEcmF3QmdDb3ZlciA9IChjdHgsIGltZywgeCwgeSwgdywgaCwgb2Zmc2V0WCwgb2Zmc2V0WSkgPT4ge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHggPSB5ID0gMDtcbiAgICB3ID0gY3R4LmNhbnZhcy53aWR0aDtcbiAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQ7XG4gIH1cblxuICAvLyBkZWZhdWx0IG9mZnNldCBpcyBjZW50ZXJcbiAgb2Zmc2V0WCA9IHR5cGVvZiBvZmZzZXRYID09PSAnbnVtYmVyJyA/IG9mZnNldFggOiAwLjU7XG4gIG9mZnNldFkgPSB0eXBlb2Ygb2Zmc2V0WSA9PT0gJ251bWJlcicgPyBvZmZzZXRZIDogMC41O1xuXG4gIC8vIGtlZXAgYm91bmRzIFswLjAsIDEuMF1cbiAgaWYgKG9mZnNldFggPCAwKSB7XG4gICAgb2Zmc2V0WCA9IDA7XG4gIH1cbiAgaWYgKG9mZnNldFkgPCAwKSB7XG4gICAgb2Zmc2V0WSA9IDA7XG4gIH1cbiAgaWYgKG9mZnNldFggPiAxKSB7XG4gICAgb2Zmc2V0WCA9IDE7XG4gIH1cbiAgaWYgKG9mZnNldFkgPiAxKSB7XG4gICAgb2Zmc2V0WSA9IDE7XG4gIH1cblxuICB2YXIgaXcgPSBpbWcud2lkdGgsXG4gICAgaWggPSBpbWcuaGVpZ2h0LFxuICAgIHIgPSBNYXRoLm1pbih3IC8gaXcsIGggLyBpaCksXG4gICAgbncgPSBpdyAqIHIsICAgLy8gbmV3IHByb3AuIHdpZHRoXG4gICAgbmggPSBpaCAqIHIsICAgLy8gbmV3IHByb3AuIGhlaWdodFxuICAgIGN4LCBjeSwgY3csIGNoLCBhciA9IDE7XG5cbiAgLy8gZGVjaWRlIHdoaWNoIGdhcCB0byBmaWxsXG4gIGlmIChudyA8IHcpIHtcbiAgICBhciA9IHcgLyBudztcbiAgfVxuICBpZiAobmggPCBoKSB7XG4gICAgYXIgPSBoIC8gbmg7XG4gIH1cbiAgbncgKj0gYXI7XG4gIG5oICo9IGFyO1xuXG4gIC8vIGNhbGMgc291cmNlIHJlY3RhbmdsZVxuICBjdyA9IGl3IC8gKG53IC8gdyk7XG4gIGNoID0gaWggLyAobmggLyBoKTtcblxuICBjeCA9IChpdyAtIGN3KSAqIG9mZnNldFg7XG4gIGN5ID0gKGloIC0gY2gpICogb2Zmc2V0WTtcblxuICAvLyBtYWtlIHN1cmUgc291cmNlIHJlY3RhbmdsZSBpcyB2YWxpZFxuICBpZiAoY3ggPCAwKSB7XG4gICAgY3ggPSAwO1xuICB9XG4gIGlmIChjeSA8IDApIHtcbiAgICBjeSA9IDA7XG4gIH1cbiAgaWYgKGN3ID4gaXcpIHtcbiAgICBjdyA9IGl3O1xuICB9XG4gIGlmIChjaCA+IGloKSB7XG4gICAgY2ggPSBpaDtcbiAgfVxuXG4gIC8vIGZpbGwgaW1hZ2UgaW4gZGVzdC4gcmVjdGFuZ2xlXG4gIGN0eC5kcmF3SW1hZ2UoaW1nLCBjeCwgY3ksIGN3LCBjaCwgeCwgeSwgdywgaCk7XG59O1xuLyogZXNsaW50LWVuYWJsZSAqL1xuXG5leHBvcnQgY29uc3QgaGFzUGxhY2Vob2xkZXJTdXBwb3J0ID0gKCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHJldHVybiAoJ3BsYWNlaG9sZGVyJyBpbiBlbCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNQYWdlSW5YUE1GcmFtZSA9ICgpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cuVHJpZGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5UcmlkaW9uLldlYi5VSS5TaXRlRWRpdCAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5leHBvcnQgY29uc3QgZWxlbWVudEluVmlld3BvcnQgPSAoZWxlbWVudCwgYWRqdXN0LCB3aW5kb3dJbm5lckhlaWdodCkgPT4ge1xuICBjb25zdCAkZWxlbWVudCA9IGVsZW1lbnQgaW5zdGFuY2VvZiBqUXVlcnkgPyBlbGVtZW50IDogJChlbGVtZW50KTtcblxuICBpZiAoISRlbGVtZW50Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0ICR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gIGNvbnN0IHNjcm9sbFRvcCA9ICR3aW5kb3cuc2Nyb2xsVG9wKCk7XG4gIGxldCB3aW5kb3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xuICBsZXQgYWRqdXN0VG9wO1xuICBsZXQgYWRqdXN0Qm90dG9tO1xuXG4gIC8vIEVsZW1lbnQgc3BlY2lmaWNzXG4gIGNvbnN0IGVsT2Zmc2V0ID0gJGVsZW1lbnQub2Zmc2V0KCk7XG4gIGNvbnN0IGVsVG9wID0gZWxPZmZzZXQudG9wO1xuICBjb25zdCBlbEJvdHRvbSA9IGVsVG9wICsgJGVsZW1lbnQuaGVpZ2h0KCk7XG5cbiAgLy8gRGVmYXVsdCB2YWx1ZVxuICBjb25zdCBkZWZhdWx0QWRqdXN0ID0gKGdldEJyZWFrcG9pbnRTaXplKCkgPT09ICdzbWFsbCcpID8gMjAgOiA1MDtcblxuICAvLyBMUkEtMTE0OTQgRml4IGlPUyBpc3N1ZSB3aXRoIHdpbmRvdyBoZWlnaHQuXG4gIC8vIFRlbXBvcmFyaWx5IGFkZCBvcHRpb24gdG8gYWxsb3cgdGhpcyBzbyBRQSBpcyBub3RcbiAgLy8gcmVxdWlyZWQgb24gU3RvcnlHYWxsZXJ5ICsgU3RvcnlBcnRpY2xlRW5oYW5jZWRJbWFnZUJsb2NrXG4gIGlmICh0eXBlb2Ygd2luZG93SW5uZXJIZWlnaHQgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvd0lubmVySGVpZ2h0KSB7XG4gICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ID8gd2luZG93LmlubmVySGVpZ2h0IDogd2luZG93SGVpZ2h0O1xuICB9XG5cbiAgLy8gU2V0IHZpZXdwb3J0Qm90dG9tXG4gIGNvbnN0IHZpZXdwb3J0Qm90dG9tID0gc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0O1xuXG4gIC8vIEFsbG93IGFkanVzdCB0byBiZSBzZXQgZGlmZmVyZW50IGZyb20gdG9wL2JvdHRvbVxuICBpZiAodHlwZW9mIGFkanVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICBhZGp1c3RUb3AgPSBhZGp1c3QudG9wO1xuICAgIGFkanVzdEJvdHRvbSA9IGFkanVzdC5ib3R0b207XG4gIH0gZWxzZSB7XG4gICAgYWRqdXN0VG9wID0gYWRqdXN0IHx8IGRlZmF1bHRBZGp1c3Q7XG4gICAgYWRqdXN0Qm90dG9tID0gYWRqdXN0IHx8IGRlZmF1bHRBZGp1c3Q7XG4gIH1cblxuICByZXR1cm4gKCEodmlld3BvcnRCb3R0b20gPCBlbFRvcCArIGFkanVzdFRvcCB8fCBzY3JvbGxUb3AgPiBlbEJvdHRvbSAtIGFkanVzdEJvdHRvbSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJhbmRvbVN0cmluZyA9IChsZW5ndGgpID0+IHtcbiAgbGV0IGZvcm1hdHRlZExlbmd0aCA9IHBhcnNlSW50KGxlbmd0aCwgMTApIHx8IDA7XG4gIGZvcm1hdHRlZExlbmd0aCA9IGZvcm1hdHRlZExlbmd0aCA8IDAgPyAwIDogZm9ybWF0dGVkTGVuZ3RoO1xuXG4gIGNvbnN0IGNoYXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gIGNvbnN0IGNob3NlbiA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybWF0dGVkTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjaG9zZW4ucHVzaChjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSkpO1xuICB9XG5cbiAgcmV0dXJuIGNob3Nlbi5qb2luKCcnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFYXNpbmdWYWx1ZSA9IChyYXRpbykgPT4ge1xuICBsZXQgZm9ybWF0dGVkUmF0aW8gPSByYXRpbyA8IDAgPyAwIDogcmF0aW87XG4gIGZvcm1hdHRlZFJhdGlvID0gZm9ybWF0dGVkUmF0aW8gPiAxID8gMSA6IGZvcm1hdHRlZFJhdGlvO1xuXG4gIC8vIENvbnZlcnQgdGhlIHJhdGlvIHRvIGEgbnVtYmVyIG9mIHJhZGlhbnMuIDAgbWFwcyB0byAtUEksIDAuNSBtYXBzIHRvXG4gIC8vIDAsIDEgbWFwcyB0byBQSVxuICBjb25zdCByYWRpYW5zID0gKGZvcm1hdHRlZFJhdGlvICogKDIgKiBNYXRoLlBJKSkgLSBNYXRoLlBJO1xuXG4gIC8vIENvbnZlcnQgdGhpcyB0byBhIHZhbHVlIHVzaW5nIGEgY29zaW5lIGN1cnZlLiBOb3RlIHRoYXQgY29zaW5lIGdpdmVzXG4gIC8vIGEgdmFsdWUgYmV0d2VlbiAtMSBhbmQgMSwgc28gd2UgbmVlZCB0byBhZGQgMSBhbmQgZGl2aWRlIGJ5IDIgdG9cbiAgLy8ga2VlcCBpdCBiZXR3ZWVuIDAgYW5kIDFcbiAgcmV0dXJuIChNYXRoLmNvcyhyYWRpYW5zKSArIDEpIC8gMjtcbn07XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlU2Nyb2xsID0gKCkgPT4ge1xuICBjb25zdCAkd2luZG93ID0gJCh3aW5kb3cpO1xuICBjb25zdCBzY3JvbGxUb3AgPSAkd2luZG93LnNjcm9sbFRvcCgpO1xuXG4gICR3aW5kb3cub24oXG4gICAgJ3Njcm9sbC5kaXNhYmxlU2Nyb2xsIG1vdXNld2hlZWwuZGlzYWJsZVNjcm9sbCBET01Nb3VzZVNjcm9sbC5kaXNhYmxlU2Nyb2xsIHRvdWNobW92ZS5kaXNhYmxlU2Nyb2xsJyxcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkd2luZG93LnNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbmFibGVTY3JvbGwgPSAoKSA9PiB7XG4gIGNvbnN0ICR3aW5kb3cgPSAkKHdpbmRvdyk7XG5cbiAgJHdpbmRvdy5vZmYoJ3Njcm9sbC5kaXNhYmxlU2Nyb2xsIG1vdXNld2hlZWwuZGlzYWJsZVNjcm9sbCBET01Nb3VzZVNjcm9sbC5kaXNhYmxlU2Nyb2xsIHRvdWNobW92ZS5kaXNhYmxlU2Nyb2xsJyk7XG59O1xuXG5leHBvcnQgY29uc3QgbGltaXROdW1iZXIgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiB7XG4gIGlmIChtaW4gPiBtYXgpIHtcbiAgICBjb25zdCBvbGRNaW4gPSBtaW47XG4gICAgbWluID0gbWF4OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgbWF4ID0gb2xkTWluOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIH1cblxuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbHVlKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZElnbm9yZWRSZXNwb25zaXZlSW1hZ2VzID0gKCRpbWFnZXMpID0+IHtcbiAgJGltYWdlcy5yZW1vdmVBdHRyKCdkYXRhLXBpY3R1cmUtaWdub3JlJyk7XG4gIHdpbmRvdy5yaWNoc3BvbnNpdmVJbWFnZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRocm90dGxlID0gKGZuLCB0aHJlc2hob2xkLCBzY29wZSkgPT4ge1xuICBjb25zdCB0aHJlc2ggPSB0aHJlc2hob2xkIHx8IDI1MDtcbiAgbGV0IGxhc3Q7XG4gIGxldCBkZWZlclRpbWVyO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IHNjb3BlIHx8IHRoaXM7XG5cbiAgICBjb25zdCBub3cgPSArbmV3IERhdGUoKTtcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmIChsYXN0ICYmIG5vdyA8IGxhc3QgKyB0aHJlc2gpIHtcbiAgICAgIC8vIGhvbGQgb24gdG8gaXRcbiAgICAgIGNsZWFyVGltZW91dChkZWZlclRpbWVyKTtcbiAgICAgIGRlZmVyVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGFzdCA9IG5vdztcbiAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9LCB0aHJlc2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0ID0gbm93O1xuICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufTtcblxuLyoqICpcbiAqIE1lYXN1cmUgdGV4dCB3aWR0aCB1c2luZyBCcm93c2VyLlxuICpcbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcGFyYW0gcGFyZW50XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIENNUyBQb3dlcmVkIHNvbHV0aW9uIGluIGZ1dHVyZS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1lYXN1cmVUZXh0V2lkdGggPSAodGV4dCwgcGFyZW50KSA9PiB7XG4gIGlmICghdGV4dCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29uc3QgcGFyID0gcGFyZW50IHx8IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICdhdXRvJztcbiAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSAnMCc7XG4gIGNvbnRhaW5lci5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSB0ZXh0O1xuXG4gIHBhci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgcGFyLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHdpZHRoO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRyYW5zaXRpb25FbmRFdmVudCA9ICgpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmYWtlZWxlbWVudCcpO1xuICBjb25zdCB0cmFuc2l0aW9ucyA9IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgT1RyYW5zaXRpb246ICcgb1RyYW5zaXRpb25FbmQnLFxuICAgIE1velRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcbiAgICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCdcbiAgfTtcblxuICBmb3IgKGNvbnN0IHRyYW5zaXRpb24gaW4gdHJhbnNpdGlvbnMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGlmIChlbC5zdHlsZVt0cmFuc2l0aW9uXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvbnNbdHJhbnNpdGlvbl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZSA9IChzdHIsIGRhdGEpID0+IHtcbiAgLy8gRmlndXJlIG91dCBpZiB3ZSdyZSBnZXR0aW5nIGEgdGVtcGxhdGUsIG9yIGlmIHdlIG5lZWQgdG9cbiAgLy8gbG9hZCB0aGUgdGVtcGxhdGUgLSBhbmQgYmUgc3VyZSB0byBjYWNoZSB0aGUgcmVzdWx0LlxuICB2YXIgZm4gPSAhL1xcVy8udGVzdChzdHIpID9cbiAgICB0ZW1wbGF0ZUNhY2hlW3N0cl0gPSB0ZW1wbGF0ZUNhY2hlW3N0cl0gfHxcbiAgICB0ZW1wbGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHIpLmlubmVySFRNTCkgOlxuXG4gICAgLy8gR2VuZXJhdGUgYSByZXVzYWJsZSBmdW5jdGlvbiB0aGF0IHdpbGwgc2VydmUgYXMgYSB0ZW1wbGF0ZVxuICAgIC8vIGdlbmVyYXRvciAoYW5kIHdoaWNoIHdpbGwgYmUgY2FjaGVkKS5cbiAgICBuZXcgRnVuY3Rpb24oXCJvYmpcIixcbiAgICAgIFwidmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307XCIgK1xuXG4gICAgICAvLyBJbnRyb2R1Y2UgdGhlIGRhdGEgYXMgbG9jYWwgdmFyaWFibGVzIHVzaW5nIHdpdGgoKXt9XG4gICAgICBcIndpdGgob2JqKXtwLnB1c2goJ1wiICtcblxuICAgICAgLy8gQ29udmVydCB0aGUgdGVtcGxhdGUgaW50byBwdXJlIEphdmFTY3JpcHRcbiAgICAgIHN0ci5yZXBsYWNlKC9bXFxyXFx0XFxuXS9nLCBcIiBcIilcbiAgICAgICAgLnJlcGxhY2UoLycoPz1bXiVdKiU+KS9nLCBcIlxcdFwiKVxuICAgICAgICAuc3BsaXQoXCInXCIpLmpvaW4oXCJcXFxcJ1wiKVxuICAgICAgICAuc3BsaXQoXCJcXHRcIikuam9pbihcIidcIilcbiAgICAgICAgLnJlcGxhY2UoLzwlPSguKz8pJT4vZywgXCInLCQxLCdcIilcbiAgICAgICAgLnNwbGl0KFwiPCVcIikuam9pbihcIicpO1wiKVxuICAgICAgICAuc3BsaXQoXCIlPlwiKS5qb2luKFwicC5wdXNoKCdcIilcbiAgICAgICsgXCInKTt9cmV0dXJuIHAuam9pbignJyk7XCIpO1xuXG4gIC8vIFByb3ZpZGUgc29tZSBiYXNpYyBjdXJyeWluZyB0byB0aGUgdXNlclxuICByZXR1cm4gZGF0YSA/IGZuKGRhdGEpIDogZm47XG59O1xuLyogZXNsaW50LWVuYWJsZSAqL1xuXG5leHBvcnQgY29uc3QgaXNJblZpZXdwb3J0ID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3Qgd2luID0gJCh3aW5kb3cpO1xuXG4gIGNvbnN0IHZpZXdwb3J0ID0ge1xuICAgIHRvcDogd2luLnNjcm9sbFRvcCgpICsgZ2V0U3RpY2t5TmF2SGVpZ2h0KCksXG4gICAgYm90dG9tOiB3aW4uc2Nyb2xsVG9wKCkgKyB3aW4uaGVpZ2h0KCksXG4gICAgbGVmdDogd2luLnNjcm9sbExlZnQoKVxuICB9O1xuICB2aWV3cG9ydC5yaWdodCA9IHZpZXdwb3J0LmxlZnQgKyB3aW4ud2lkdGgoKTtcblxuICBjb25zdCBib3VuZHMgPSBlbGVtZW50Lm9mZnNldCgpO1xuICBib3VuZHMucmlnaHQgPSBib3VuZHMubGVmdCArIGVsZW1lbnQub3V0ZXJXaWR0aCgpO1xuICBib3VuZHMuYm90dG9tID0gYm91bmRzLnRvcCArIGVsZW1lbnQub3V0ZXJIZWlnaHQoKTtcblxuICByZXR1cm4gKCEodmlld3BvcnQucmlnaHQgPCBib3VuZHMubGVmdCB8fCB2aWV3cG9ydC5sZWZ0ID4gYm91bmRzLnJpZ2h0IHx8IHZpZXdwb3J0LmJvdHRvbSA8IGJvdW5kcy50b3AgfHwgdmlld3BvcnQudG9wID4gYm91bmRzLmJvdHRvbSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbElmTm90SW5WaWV3cG9ydCA9IChlbGVtZW50LCBkaXNwbGF5VG9Cb3R0b20pID0+IHtcbiAgaWYgKCFpc0luVmlld3BvcnQoZWxlbWVudCkpIHtcbiAgICAvLyBOb3QgaW4gdmlld1xuICAgIGNvbnN0IHNjcm9sbFRvUG9zID0gZGlzcGxheVRvQm90dG9tID8gZWxlbWVudC5vZmZzZXQoKS50b3AgLSAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKSA6IChlbGVtZW50Lm9mZnNldCgpLnRvcFxuICAgICAgLSBnZXRTdGlja3lOYXZIZWlnaHQoKSk7XG4gICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogc2Nyb2xsVG9Qb3MgfSwgODAwKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNMYW5kUm92ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAhISgkKCdib2R5I2xhbmRyb3ZlcicpLmxlbmd0aCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VGFiYmFibGUgPSAoZWxlbSwgY3VzdG9tU2VsZWN0b3JzKSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRTZWxlY3RvcnMgPSBbXG4gICAgJ2lucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW2hpZGRlbl0pJyxcbiAgICAnc2VsZWN0JyxcbiAgICAnYVtocmVmXScsXG4gICAgJ3RleHRhcmVhJyxcbiAgICAnYnV0dG9uJyxcbiAgICAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJ1xuICBdO1xuXG4gIGNvbnN0IHNlbGVjdG9yVHlwZXMgPSAoY3VzdG9tU2VsZWN0b3JzKSA/IGRlZmF1bHRTZWxlY3RvcnMuY29uY2F0KGN1c3RvbVNlbGVjdG9ycykgOiBkZWZhdWx0U2VsZWN0b3JzO1xuICBsZXQgc2VsZWN0b3JzID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yVHlwZXMuam9pbignLCcpKTtcbiAgc2VsZWN0b3JzID0gQXJyYXkuZnJvbShzZWxlY3RvcnMpO1xuICBzZWxlY3RvcnMgPSBzZWxlY3RvcnMuZmlsdGVyKChzZWxlY3RvcikgPT4ge1xuICAgIGxldCB0YWJiYWJsZSA9IHRydWU7XG4gICAgaWYgKCFzZWxlY3Rvci5vZmZzZXRQYXJlbnQgfHwgc2VsZWN0b3Iub2Zmc2V0V2lkdGggPT09IDBcbiAgICAgIHx8IHNlbGVjdG9yLm9mZnNldEhlaWdodCA9PT0gMCkge1xuICAgICAgdGFiYmFibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0ludmlzaWJsZShlbCkge1xuICAgICAgaWYgKGVsLnN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nIHx8IGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICB0YWJiYWJsZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChlbC5wYXJlbnROb2RlICYmIGVsLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgaXNJbnZpc2libGUoZWwucGFyZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlzSW52aXNpYmxlKHNlbGVjdG9yKTtcbiAgICBpZiAodGFiYmFibGUpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgcmV0dXJuIHNlbGVjdG9ycztcbn07XG5cbmV4cG9ydCBjb25zdCBsb2NrVGFiYmFibGVzID0gKHRhYmJhYmxlcykgPT4ge1xuICB0YWJiYWJsZXMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleUNvZGUgIT09IEtleUNvZGUuVEFCKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIGlmICh0YWJiYWJsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGFiYmFibGVzWzBdLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgIHRhYmJhYmxlc1t0YWJiYWJsZXMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWJiYWJsZXNbaSArIDFdLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gdGFiYmFibGVzLmxlbmd0aCAtIDEgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgdGFiYmFibGVzWzBdLmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgdGFiYmFibGVzW2kgLSAxXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiYmFibGVzW2kgKyAxXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBiYWxhbmNlRWxlbWVudEhlaWdodCA9IChlbGVtZW50cywgYWxsb3dlZE9mZnNldCA9IDApID0+IHtcbiAgY29uc3QgY29sdW1ucyA9IHt9O1xuICBpZiAoIWVsZW1lbnRzKSB7XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH1cbiAgY29uc3QgZWxlbWVudHNBcnJheSA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudHMpO1xuICBsZXQgaGVpZ2h0VG90YWwgPSAwO1xuICBjb25zdCBoZWlnaHRzQXJyYXkgPSBlbGVtZW50c0FycmF5Lm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICBoZWlnaHRUb3RhbCArPSBlbGVtZW50SGVpZ2h0O1xuICAgIHJldHVybiBlbGVtZW50SGVpZ2h0O1xuICB9KTtcbiAgY29uc3QgZ2V0QmFsYW5jZWRJbmRleCA9IChhcnJheSwgdGFyZ2V0LCBydW5uaW5nVG90YWwgPSAwLCBpbmRleCA9IDApID0+IHtcbiAgICBjb25zdCBpc1JlY3Vyc2l2ZSA9ICEhYXJyYXlbaW5kZXhdICYmIHJ1bm5pbmdUb3RhbCArIGFycmF5W2luZGV4XSA8PSAodGFyZ2V0IC0gYWxsb3dlZE9mZnNldCk7XG4gICAgcmV0dXJuIGlzUmVjdXJzaXZlID8gZ2V0QmFsYW5jZWRJbmRleChhcnJheSwgdGFyZ2V0LCBydW5uaW5nVG90YWwgKyBhcnJheVtpbmRleF0sIGluZGV4ICsgMSkgOiBpbmRleDtcbiAgfTtcbiAgY29uc3Qgc3BsaXRJbmRleCA9IGdldEJhbGFuY2VkSW5kZXgoaGVpZ2h0c0FycmF5LCBoZWlnaHRUb3RhbCAvIDIpICsgMTtcbiAgY29sdW1ucy5jb2x1bW5zMSA9IGVsZW1lbnRzQXJyYXkuc2xpY2UoMCwgc3BsaXRJbmRleCk7XG4gIGNvbHVtbnMuY29sdW1uczIgPSBlbGVtZW50c0FycmF5LnNsaWNlKHNwbGl0SW5kZXgsIGVsZW1lbnRzQXJyYXkubGVuZ3RoKTtcbiAgY29sdW1ucy5oZWlnaHRzQXJyYXkgPSBoZWlnaHRzQXJyYXk7XG4gIHJldHVybiBjb2x1bW5zO1xufTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50VHJpZ2dlciA9IChlbGVtLCBldmVudFR5cGUsIGRldGFpbCA9IHt9LCBidWJibGVzID0gZmFsc2UpID0+IHtcbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnRUeXBlLCB7IGRldGFpbCwgYnViYmxlcyB9KTtcbiAgZWxlbS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0RWxlbWVudENvbGxlY3Rpb25Ub0FycmF5ID0gKGNvbGxlY3Rpb24pID0+IHtcbiAgaWYgKGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBjb2xsZWN0aW9uIGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBOb2RlTGlzdCA/IFtdLnNsaWNlLmNhbGwoY29sbGVjdGlvbikgOiBjb2xsZWN0aW9uLmdldCgpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21pc2VFbGVtZW50cyA9IChlbGVtZW50c0NvbGxlY3Rpb24pID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBjb252ZXJ0RWxlbWVudENvbGxlY3Rpb25Ub0FycmF5KGVsZW1lbnRzQ29sbGVjdGlvbik7XG4gIGlmICghZWxlbWVudHMgfHwgIWVsZW1lbnRzLmxlbmd0aCkgcmV0dXJuO1xuICBjb25zdCBjbG9uZWRFbGVtZW50cyA9IGVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgY2xvbmVkRWxlbWVudHMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCwgaW5jKSA9PiBlbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNsb25lZEVsZW1lbnRzW2luY10sIGVsZW1lbnQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0VsZW1lbnRWZXJ0aWNhbGx5U2Nyb2xsYWJsZSA9IChlbCkgPT4ge1xuICByZXR1cm4gKGVsICYmIChlbC5zY3JvbGxIZWlnaHQgPiBlbC5vZmZzZXRIZWlnaHQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja0RlZmluZWQgPSBpdGVtID0+IGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtICE9PSBudWxsO1xuXG5leHBvcnQgY29uc3QgdGFibGlzdE5hdmlnYXRpb24gPSAodGFibGlzdCkgPT4ge1xuICBjb25zdCBvcmllbnRhdGlvbiA9IHRhYmxpc3QuZ2V0QXR0cmlidXRlKCdhcmlhLW9yaWVudGF0aW9uJyk7XG4gIGNvbnN0IGlzVmVydGljYWwgPSBvcmllbnRhdGlvbiAmJiBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJztcbiAgY29uc3QgdGFicyA9IHRhYmxpc3QucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJcIl0nKTtcbiAgY29uc3Qga2V5cyA9IEtleUNvZGU7XG5cbiAgY29uc3QgZm9jdXNGaXJzdFRhYiA9ICgpID0+IHRhYnNbMF0uZm9jdXMoKTtcbiAgY29uc3QgZm9jdXNMYXN0VGFiID0gKCkgPT4gdGFic1t0YWJzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG5cbiAgY29uc3QgZm9jdXNQcmV2aW91c1RhYiA9IChjdXJyZW50VGFiKSA9PiB7XG4gICAgY29uc3QgdGFiSW5kZXggPSBbLi4udGFic10uZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudCA9PT0gY3VycmVudFRhYik7XG4gICAgaWYgKHRhYkluZGV4ID09PSAwKSB7XG4gICAgICBmb2N1c0xhc3RUYWIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFic1t0YWJJbmRleCAtIDFdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZvY3VzTmV4dFRhYiA9IChjdXJyZW50VGFiKSA9PiB7XG4gICAgY29uc3QgdGFiSW5kZXggPSBbLi4udGFic10uZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudCA9PT0gY3VycmVudFRhYik7XG4gICAgY29uc3QgdGFic0xlbmd0aFplcm9JbmRleCA9IHRhYnMubGVuZ3RoIC0gMTtcbiAgICBpZiAodGFiSW5kZXggPT09IHRhYnNMZW5ndGhaZXJvSW5kZXgpIHtcbiAgICAgIGZvY3VzRmlyc3RUYWIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFic1t0YWJJbmRleCArIDFdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRhYmxpc3RLZXlkb3duRXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZTtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSBrZXlzLkVORDpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZm9jdXNMYXN0VGFiKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBrZXlzLkhPTUU6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvY3VzRmlyc3RUYWIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGtleXMuTEVGVDpcbiAgICAgIGNhc2Uga2V5cy5VUDpcbiAgICAgICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGZvY3VzUHJldmlvdXNUYWIoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGtleXMuUklHSFQ6XG4gICAgICBjYXNlIGtleXMuRE9XTjpcbiAgICAgICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGZvY3VzTmV4dFRhYihldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVUYWJsaXN0S2V5dXBFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlO1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlIGtleXMuTEVGVDpcbiAgICAgICAgZm9jdXNQcmV2aW91c1RhYihldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGtleXMuUklHSFQ6XG4gICAgICAgIGZvY3VzTmV4dFRhYihldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVRhYmxpc3RLZXlkb3duRXZlbnRzLCBmYWxzZSk7XG4gICAgaWYgKCFpc1ZlcnRpY2FsKSB7XG4gICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBoYW5kbGVUYWJsaXN0S2V5dXBFdmVudHMsIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSAob2JqKSA9PiB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgcmVwbGFjZUFsbCA9IChzdHJpbmcsIHNlYXJjaCwgcmVwbGFjZW1lbnQpID0+IHtcbiAgcmV0dXJuIHN0cmluZy5zcGxpdChzZWFyY2gpLmpvaW4ocmVwbGFjZW1lbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGR4U2V0VGltZW91dCA9IChjYiwgdGltZSkgPT4ge1xuICBzZXRUaW1lb3V0KGNiLCB0aW1lKTtcblxuICBpZiAod2luZG93LmFwcFJlYWR5RXZlbnQuaW5pdGlhdGVkKSB7XG4gICAgYXBwUmVhZHlUaW1lci5hZGQodGltZSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmFwcFJlYWR5RXZlbnQudGltZW91dCArPSB0aW1lO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgRHhSZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lID0gKGNiKSA9PiB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKCkpO1xuICB9KTtcbn07XG5cbmNvbnN0IGxvYWRpbmdTcGlubmVyVG9nZ2xlQnV0dG9uU3RhdGVBbmRDb250ZW50ID0gKHRhcmdldCkgPT4ge1xuICBjb25zdCB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0O1xuXG4gIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICB0YXJnZXRFbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcblxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0YXJnZXRFbGVtZW50O1xuICBbLi4uY2hpbGRyZW5dLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkO1xuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBhZGREeExvYWRpbmdTcGlubmVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgVGhlIGJ1dHRvbi9saW5rIHRoYXQgdGhlIGxvYWRpbmcgc3Bpbm5lciBzaG91bGQgYmUgaW5zZXJ0ZWQgaW50b1xuICovXG5leHBvcnQgY29uc3QgYWRkRHhMb2FkaW5nU3Bpbm5lciA9ICh0YXJnZXQpID0+IHtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpY29uTWFya3VwID0gJzxkaXYgY2xhc3M9XCJEeExvYWRpbmdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48ZGl2IGNsYXNzPVwiRHhMb2FkaW5nX19pY29uXCIgYXJpYS1leHBhbmRlZD1cInRydWVcIj48L2Rpdj48L2Rpdj4nO1xuICBjb25zdCBsb2FkaW5nSWNvbiA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGljb25NYXJrdXApO1xuXG4gIGxvYWRpbmdTcGlubmVyVG9nZ2xlQnV0dG9uU3RhdGVBbmRDb250ZW50KHRhcmdldCk7XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKGxvYWRpbmdJY29uKTtcbn07XG5cbi8qKlxuICogcmVtb3ZlRHhMb2FkaW5nU3Bpbm5lclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IFRoZSBidXR0b24vbGluayB0aGF0IHRoZSBsb2FkaW5nIHNwaW5uZXIgc2hvdWxkIGJlIHJlbW92ZWQgZnJvbVxuICogQHBhcmFtIHtzdHJpbmcgfHwgSFRNTEVsZW1lbnR9IHJlcGxhY2UgVGhlIHN0cmluZyB5b3Ugd291bGQgbGlrZSB0byByZXBsYWNlIHRoZSBsb2FkaW5nIHNwaW5uZXIgd2l0aCAoZXhwZWN0ZWQgdG8gYmUgdGhlIHRleHQgb3JpZ2luYWxseSBpbiB0aGUgYnV0dG9uKVxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlRHhMb2FkaW5nU3Bpbm5lciA9ICh0YXJnZXQpID0+IHtcbiAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IHRhcmdldDtcblxuICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgdGFyZ2V0RWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG4gIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuXG4gIGNvbnN0IGxvYWRpbmdJY29uID0gdGFyZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuRHhMb2FkaW5nJyk7XG4gIHRhcmdldEVsZW1lbnQucmVtb3ZlQ2hpbGQobG9hZGluZ0ljb24pO1xuXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRhcmdldEVsZW1lbnQ7XG4gIFsuLi5jaGlsZHJlbl0uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGQ7XG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkRHhFbGVtZW50TG9hZGluZ1NwaW5uZXIgPSAodGFyZ2V0KSA9PiB7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaWNvbk1hcmt1cCA9IGA8ZGl2IGNsYXNzPVwiRHhMb2FkaW5nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA4OCA4OFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4OCA4ODtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgIDxwYXRoIGZpbGw9XCIjRkZGRkZGXCIgc3R5bGU9XCJvcGFjaXR5OiAuMjtcIiBkPVwiTTQ0LDVjMjEuNSwwLDM5LDE3LjUsMzksMzlTNjUuNSw4Myw0NCw4M1M1LDY1LjUsNSw0NFMyMi41LDUsNDQsNSBNNDQsMEMxOS43LDAsMCwxOS43LDAsNDRzMTkuNyw0NCw0NCw0NCBzNDQtMTkuNyw0NC00NFM2OC4zLDAsNDQsMEw0NCwwelwiLz5cbiAgICA8cGF0aCBmaWxsPVwiI0YwRjBGMFwiIGQ9XCJNODUuNSw0Ni40Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjVDODMsMjIuNSw2NS41LDUsNDQuMSw1Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjVTNDIuNywwLDQ0LjEsMCBDNjguMywwLDg4LDE5LjcsODgsNDMuOUM4OCw0NS4zLDg2LjksNDYuNCw4NS41LDQ2LjR6XCI+XG4gICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInJvdGF0ZVwiIGZyb209XCIwIDQ0IDQ0XCIgdG89XCIzNjAgNDQgNDRcIiBkdXI9XCIxLjVzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlVHJhbnNmb3JtPlxuICAgIDwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+YDtcbiAgY29uc3QgbG9hZGluZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChpY29uTWFya3VwKTtcblxuICBsb2FkaW5nU3Bpbm5lclRvZ2dsZUJ1dHRvblN0YXRlQW5kQ29udGVudCh0YXJnZXQpO1xuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChsb2FkaW5nSWNvbik7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxTdG9yYWdlQXZhaWxhYmxlID0gKCkgPT4ge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmVhdHVyZV90ZXN0JywgJ3llcycpO1xuICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmZWF0dXJlX3Rlc3QnKSA9PT0gJ3llcycpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2ZlYXR1cmVfdGVzdCcpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYWRkU2NyaXB0Rm9yQmF6YWFyVm9pY2UgPSAoc2NyaXB0VVJMKSA9PiB7XG4gIGlmIChzY3JpcHRVUkwudHJpbSgpICE9PSAnJyAmJiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgc2NyaXB0W3NyYz0nJHtzY3JpcHRVUkx9J11gKSkubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgYmF6YWFyVm9pY2VTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBiYXphYXJWb2ljZVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNjcmlwdFVSTCk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChiYXphYXJWb2ljZVNjcmlwdCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlcXVhbGlzZUhlaWdodHMgPSAoZWxlbWVudHMpID0+IHtcbiAgbGV0IG1heEhlaWdodCA9IDA7XG4gIFsuLi5lbGVtZW50c10uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICB9KTtcbiAgWy4uLmVsZW1lbnRzXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgaWYgKGhlaWdodCA+IG1heEhlaWdodCkge1xuICAgICAgbWF4SGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgfSk7XG4gIFsuLi5lbGVtZW50c10uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7bWF4SGVpZ2h0fXB4YDtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVDdXJyZW50RGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICByZXR1cm4gKFxuICAgIERhdGUuVVRDKFxuICAgICAgdG9kYXkuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICAgIHRvZGF5LmdldFVUQ01vbnRoKCksXG4gICAgICB0b2RheS5nZXRVVENEYXRlKCksXG4gICAgICB0b2RheS5nZXRVVENIb3VycygpLFxuICAgICAgdG9kYXkuZ2V0VVRDTWludXRlcygpXG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHByZXZlbnRBY3Rpb25PbkRlZXBMaW5rID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGxpbmtMb2NhdGlvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIGlmIChjaGVja0RlZXBMaW5rKGxpbmtMb2NhdGlvbikpIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgfVxufTtcbiIsImltcG9ydCB7IEtleUNvZGUgfSBmcm9tICcuL2FyaWEnO1xuaW1wb3J0IHsgZXZlbnRUcmlnZ2VyLCBnZXRUYWJiYWJsZSB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgY29uc3Qgc3dpcGVyRW1pdEV2ZW50c09uRWxlbWVudCA9IChzd2lwZXJPYmplY3QpID0+IHtcbiAgc3dpcGVyT2JqZWN0Lm9uKCdpbml0JywgKCkgPT4gZXZlbnRUcmlnZ2VyKHN3aXBlck9iamVjdC5lbCwgJ29uSW5pdCcpKTtcbiAgc3dpcGVyT2JqZWN0Lm9uKCdzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydCcsICgpID0+IGV2ZW50VHJpZ2dlcihzd2lwZXJPYmplY3QuZWwsICdvblNsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0JykpO1xuICBzd2lwZXJPYmplY3Qub24oJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCcsICgpID0+IGV2ZW50VHJpZ2dlcihzd2lwZXJPYmplY3QuZWwsICdvblNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCcpKTtcbiAgc3dpcGVyT2JqZWN0Lm9uKCdzbGlkZVByZXZUcmFuc2l0aW9uRW5kJywgKCkgPT4gZXZlbnRUcmlnZ2VyKHN3aXBlck9iamVjdC5lbCwgJ29uU2xpZGVQcmV2VHJhbnNpdGlvbkVuZCcpKTtcbiAgc3dpcGVyT2JqZWN0Lm9uKCdzbGlkZU5leHRUcmFuc2l0aW9uRW5kJywgKCkgPT4gZXZlbnRUcmlnZ2VyKHN3aXBlck9iamVjdC5lbCwgJ29uU2xpZGVOZXh0VHJhbnNpdGlvbkVuZCcpKTtcbiAgc3dpcGVyT2JqZWN0Lm9uKCd0b3VjaFN0YXJ0JywgKCkgPT4gZXZlbnRUcmlnZ2VyKHN3aXBlck9iamVjdC5lbCwgJ29uVG91Y2hTdGFydCcpKTtcbiAgc3dpcGVyT2JqZWN0Lm9uKCd0b3VjaEVuZCcsICgpID0+IGV2ZW50VHJpZ2dlcihzd2lwZXJPYmplY3QuZWwsICdvblRvdWNoRW5kJykpO1xuICBzd2lwZXJPYmplY3Qub24oJ3RvdWNoTW92ZScsICgpID0+IGV2ZW50VHJpZ2dlcihzd2lwZXJPYmplY3QuZWwsICdvblRvdWNoTW92ZScpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzd2lwZXJQcmV2ZW50VGFiYmluZ0lzc3VlcyA9IChzd2lwZXJPYmplY3QpID0+IHtcbiAgY29uc3QgdGFiYmFibGVFbGVtZW50cyA9IGdldFRhYmJhYmxlKHN3aXBlck9iamVjdC53cmFwcGVyRWwpO1xuXG4gIHRhYmJhYmxlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nVGFiaW5kZXggPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICBpZiAoZXhpc3RpbmdUYWJpbmRleCkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXRhYmluZGV4JywgZXhpc3RpbmdUYWJpbmRleCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzbGlkZXMgPSBbXS5zbGljZS5jYWxsKHN3aXBlck9iamVjdC5zbGlkZXMpO1xuICBjb25zdCBzZXRTbGlkZVN0eWxlID0gKHNsaWRlLCBzdHlsZSkgPT4ge1xuICAgIHNsaWRlLnN0eWxlLnZpc2liaWxpdHkgPSBzdHlsZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICB9O1xuXG4gIGNvbnN0IGhpZGVTbGlkZXNPdXRPZlZpZXdwb3J0ID0gKGFsbFNsaWRlcykgPT4ge1xuICAgIGFsbFNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgaWYgKCFzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoc3dpcGVyT2JqZWN0LnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKSkge1xuICAgICAgICBzZXRTbGlkZVN0eWxlKHNsaWRlLCAnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgaGlkZVNsaWRlc091dE9mVmlld3BvcnQoc2xpZGVzKTtcblxuICBjb25zdCBzbGlkZVRyYW5zaXRpb25TdGFydCA9ICgpID0+IHtcbiAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgIHNldFNsaWRlU3R5bGUoc2xpZGUsICd2aXNpYmxlJyk7XG4gICAgICBzbGlkZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9KTtcbiAgICB0YWJiYWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSkpO1xuICB9O1xuXG4gIGNvbnN0IHNsaWRlVHJhbnNpdGlvbkVuZCA9ICgpID0+IHtcbiAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgIHNsaWRlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgIHNsaWRlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICB9KTtcbiAgICB0YWJiYWJsZUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nVGFiaW5kZXggPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItdGFiaW5kZXgnKTtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgaWYgKGV4aXN0aW5nVGFiaW5kZXgpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgZXhpc3RpbmdUYWJpbmRleCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBoaWRlU2xpZGVzT3V0T2ZWaWV3cG9ydChzbGlkZXMpO1xuICB9O1xuXG4gIHN3aXBlck9iamVjdC5lbC5hZGRFdmVudExpc3RlbmVyKCdvblNsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0JywgKCkgPT4gc2xpZGVUcmFuc2l0aW9uU3RhcnQoKSk7XG4gIHN3aXBlck9iamVjdC5lbC5hZGRFdmVudExpc3RlbmVyKCdvblRvdWNoTW92ZScsICgpID0+IHNsaWRlVHJhbnNpdGlvblN0YXJ0KCkpO1xuICBzd2lwZXJPYmplY3QuZWwuYWRkRXZlbnRMaXN0ZW5lcignb25TbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnLCAoKSA9PiBzbGlkZVRyYW5zaXRpb25FbmQoKSk7XG4gIHN3aXBlck9iamVjdC5lbC5hZGRFdmVudExpc3RlbmVyKCdvblRvdWNoRW5kJywgKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2xpZGVUcmFuc2l0aW9uRW5kKCk7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHN3aXBlckRpc2FibGVBdXRvcGxheU9uU2xpZGVGb2N1cyA9IChzd2lwZXJPYmplY3QpID0+IHtcbiAgaWYgKCFzd2lwZXJPYmplY3Qub3JpZ2luYWxQYXJhbXMuYXV0b3BsYXkuZW5hYmxlZCkgcmV0dXJuO1xuXG4gIGNvbnN0IGhhbmRsZUZvY3VzaW4gPSAoKSA9PiBzd2lwZXJPYmplY3QuYXV0b3BsYXkuc3RvcCgpO1xuICBjb25zdCBoYW5kbGVGb2N1c291dCA9ICgpID0+IHN3aXBlck9iamVjdC5hdXRvcGxheS5zdGFydCgpO1xuICBzd2lwZXJPYmplY3QuZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGhhbmRsZUZvY3VzaW4sIGZhbHNlKTtcbiAgc3dpcGVyT2JqZWN0LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgaGFuZGxlRm9jdXNvdXQsIGZhbHNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzd2lwZXJJbnRlZ3JhdGVDdXN0b21QYWdpbmF0aW9uID0gKG9iamVjdCwgc3dpcGVyT3B0aW9ucykgPT4ge1xuICBjb25zdCBzd2lwZXJPYmplY3QgPSBvYmplY3Q7XG4gIGNvbnN0IHsgcGFnaW5hdGlvbk9iamVjdCB9ID0gc3dpcGVyT3B0aW9ucztcblxuICBpZiAoIXBhZ2luYXRpb25PYmplY3QpIHsgcmV0dXJuOyB9XG4gIHN3aXBlck9iamVjdC5keFBhZ2luYXRpb24gPSBwYWdpbmF0aW9uT2JqZWN0O1xuXG4gIGNvbnN0IGxvb3BPZmZzZXQgPSBzd2lwZXJPYmplY3QucGFyYW1zLmxvb3AgPyAxIDogMDtcbiAgY29uc3QgZWxlbWVudCA9IHBhZ2luYXRpb25PYmplY3QuUGFnaW5hdGlvbignZ2V0RWxlbWVudCcpO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2FmdGVyQ2hhbmdlJywgZXZlbnQgPT4gc3dpcGVyT2JqZWN0LnNsaWRlVG8ocGFyc2VJbnQoZXZlbnQuZGV0YWlsLnBpcFRvLCAxMCkgKyBsb29wT2Zmc2V0KSwgZmFsc2UpOyAvLyBleHBlY3RzIGEgcGF5bG9hZCB3aXRoIGEgcGlwRnJvbS9waXBUbyAoaW5kZXggaXMgZGlmZmVyZW50IHdoZW4gaW4gYSBsb29wKVxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xpdmVSZWdpb25VcGRhdGUnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBsaXZlUmVnaW9uID0gc3dpcGVyT2JqZWN0LmExMXkubGl2ZVJlZ2lvblswXTtcbiAgICBjb25zdCB0ZXh0ID0gZXZlbnQuZGV0YWlsICYmIGV2ZW50LmRldGFpbC50ZXh0O1xuICAgIGlmIChsaXZlUmVnaW9uICYmIHRleHQpIHtcbiAgICAgIGxpdmVSZWdpb24uaW5uZXJIVE1MID0gdGV4dDtcbiAgICB9XG4gIH0sIGZhbHNlKTtcblxuICAvLyBpZiB0aGUgdXNlciBpbnRlcmFjdHMgd2l0aCB0aGUga2V5Ym9hcmQsIHBhdXNlIHRoZSBuYXZpZ2F0aW9uLlxuICBzd2lwZXJPYmplY3QuZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGlzVmlkZW8gPSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aWRlbycpO1xuICAgIGNvbnN0IGlzTmV4dEJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1idXR0b24tLW5leHQnKTtcbiAgICBjb25zdCBpc1ByZXZCdXR0b24gPSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItYnV0dG9uLS1wcmV2Jyk7XG5cbiAgICBpZiAoaXNOZXh0QnV0dG9uIHx8IGlzUHJldkJ1dHRvbiB8fCBpc1ZpZGVvKSByZXR1cm47XG4gICAgaWYgKHBhZ2luYXRpb25PYmplY3QuUGFnaW5hdGlvbignZ2V0UGxheWluZ1N0YXR1cycpID09PSAncnVubmluZycpIHtcbiAgICAgIHBhZ2luYXRpb25PYmplY3QuUGFnaW5hdGlvbigncGF1c2UnKTtcbiAgICB9XG4gIH0sIGZhbHNlKTtcblxuICAvLyBwYXJ0aWFsbHkgIGRyYWdnaW5nIHRoZSBzbGlkZXIgYW5kIHJlbGVhc2luZyBvciB1c2luZyB0aGUgbmF2aWdhdGlvbiBuZXh0L3ByZXYgYnV0dG9ucyBjYW4gY2F1c2UgdGhlIHNsaWRlciAmIHBhZ2luYXRpb24gdG8gZGUtc3luYyAtIHRoaXMgbWV0aG9kIHByZXZlbnRzIHRoYXRcbiAgY29uc3QgbW92ZVN5bmNIYW5kbGVyID0gKCkgPT4ge1xuICAgIHN3aXBlck9iamVjdC5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdvblNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCcsIG1vdmVTeW5jSGFuZGxlciwgZmFsc2UpO1xuICAgIGNvbnN0IGluZGV4TWlzbWF0Y2ggPSBzd2lwZXJPYmplY3QucmVhbEluZGV4ICE9PSBwYWdpbmF0aW9uT2JqZWN0LlBhZ2luYXRpb24oJ2dldEN1cnJlbnRQaXBJbmRleCcpO1xuICAgIGlmICghaW5kZXhNaXNtYXRjaCkgeyByZXR1cm47IH1cbiAgICBwYWdpbmF0aW9uT2JqZWN0LlBhZ2luYXRpb24oJ3VwZGF0ZUFjdGl2ZVBpcEJ5SW5kZXgnLCBzd2lwZXJPYmplY3QucmVhbEluZGV4KTtcbiAgfTtcbiAgY29uc3QgbmV4dCA9IHN3aXBlck9iamVjdC5uYXZpZ2F0aW9uLm5leHRFbDtcbiAgY29uc3QgcHJldmlvdXMgPSBzd2lwZXJPYmplY3QubmF2aWdhdGlvbi5wcmV2RWw7XG4gIGlmIChuZXh0KSB7XG4gICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXBlck9iamVjdC5lbC5hZGRFdmVudExpc3RlbmVyKCdvblNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCcsIG1vdmVTeW5jSGFuZGxlciwgZmFsc2UpKTtcbiAgfVxuICBpZiAocHJldmlvdXMpIHtcbiAgICBwcmV2aW91cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXBlck9iamVjdC5lbC5hZGRFdmVudExpc3RlbmVyKCdvblNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCcsIG1vdmVTeW5jSGFuZGxlciwgZmFsc2UpKTtcbiAgfVxuICBzd2lwZXJPYmplY3QuZWwuYWRkRXZlbnRMaXN0ZW5lcignb25Ub3VjaE1vdmUnLCAoKSA9PiBzd2lwZXJPYmplY3QuZWwuYWRkRXZlbnRMaXN0ZW5lcignb25TbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnLCBtb3ZlU3luY0hhbmRsZXIsIGZhbHNlKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3dpcGVyU2V0QXJpYUxpdmVPbkZvY3VzSW4gPSAoc3dpcGVyT2JqZWN0LCBzd2lwZXJPcHRpb25zKSA9PiB7XG4gIGNvbnN0IGxpdmVSZWdpb24gPSBzd2lwZXJPYmplY3QuYTExeS5saXZlUmVnaW9uWzBdO1xuICBpZiAoIXN3aXBlck9wdGlvbnMuYXJpYWxpdmVPbkZvY3VzSW4gfHwgIWxpdmVSZWdpb24pIHsgcmV0dXJuOyB9XG4gIGxpdmVSZWdpb24ucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWxpdmUnKTtcbiAgc3dpcGVyT2JqZWN0LmVsLnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsICgpID0+IGxpdmVSZWdpb24uc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJykpO1xuICBzd2lwZXJPYmplY3QuZWwucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IGxpdmVSZWdpb24ucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWxpdmUnKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3dpcGVyTW9kaWZ5TmF2aWdhdGlvbiA9IChzd2lwZXJPYmplY3QsIHN3aXBlck9wdGlvbnMpID0+IHtcbiAgY29uc3QgcHJldmlvdXMgPSBzd2lwZXJPYmplY3QubmF2aWdhdGlvbi5wcmV2RWw7XG4gIGNvbnN0IG5leHQgPSBzd2lwZXJPYmplY3QubmF2aWdhdGlvbi5uZXh0RWw7XG4gIGlmICghcHJldmlvdXMgfHwgIW5leHQpIHsgcmV0dXJuOyB9XG4gIGNvbnN0IHsgbGFiZWxzLCBpc0JsYWNrIH0gPSBzd2lwZXJPcHRpb25zO1xuICBjb25zdCBmaWxsID0gKGlzQmxhY2spID8gJyMwMDAwMDAnIDogJyNGRkZGRkYnO1xuICBjb25zdCBwcmV2aW91c0Fycm93U1ZHID0gYFxuICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxNCAyNFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNCAyNDtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPi5zdDAtLXN3aXBlci1wYWdpbmF0aW9ue2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6JHtmaWxsfTt9PC9zdHlsZT48cG9seWdvbiBjbGFzcz1cInN0MC0tc3dpcGVyLXBhZ2luYXRpb25cIiBwb2ludHM9XCIxMi43LDAgMCwxMiAxMi43LDI0IDE0LDIyLjUgMi45LDEyIDE0LDEuNSBcIi8+XG4gICAgICA8L3N2Zz5cbiAgICBgO1xuICBjb25zdCBuZXh0QXJyb3dTVkcgPSBgXG4gICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDE0IDI0XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE0IDI0O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+LnN0MC0tc3dpcGVyLXBhZ2luYXRpb257ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDoke2ZpbGx9O308L3N0eWxlPjxwb2x5Z29uIGNsYXNzPVwic3QwLS1zd2lwZXItcGFnaW5hdGlvblwiIHBvaW50cz1cIjEuMywyNCAxNCwxMiAxLjMsMCAwLDEuNSAxMS4xLDEyIDAsMjIuNSBcIi8+XG4gICAgICA8L3N2Zz5cbiAgICBgO1xuXG4gIGNvbnN0IG1vZGlmeUFycm93ID0gKGFycm93LCBpY29uLCBsYWJlbCkgPT4ge1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgIH1cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gaWNvbjtcbiAgICBhcnJvdy5hcHBlbmRDaGlsZChkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykpO1xuICB9O1xuICBtb2RpZnlBcnJvdyhwcmV2aW91cywgcHJldmlvdXNBcnJvd1NWRywgbGFiZWxzLnByZXZpb3VzKTtcbiAgbW9kaWZ5QXJyb3cobmV4dCwgbmV4dEFycm93U1ZHLCBsYWJlbHMubmV4dCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3dpcGVyQTExeUhlbHBlciA9IChzd2lwZXJPYmplY3QsIGNvbmZpZyA9IHt9KSA9PiB7XG4gIGlmICghc3dpcGVyT2JqZWN0KSByZXR1cm47XG5cbiAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICBwYWdpbmF0aW9uOiBudWxsLCAvLyBvbmx5IHVzZWQgaWYgd2UncmUgdXNpbmcgU3dpcGVyIHdpdGggb3VyIFBhZ2luYXRpb24gY29tcG9uZW50XG4gICAgYXJpYWxpdmVPbkZvY3VzSW46IHRydWUsIC8vIGFkZC9yZW1vdmUgYXJpYS1saXZlIGF0dHJpYnV0ZSBvbiBzd2lwZXIgZm9jdXNpbi9mb2N1c291dFxuICAgIGxhYmVsczoge30sIC8vIHBhc3MgaW4gYWNjZXNzaWJsZSBsYWJlbCB0ZXh0IGUuZy4gZnJvbSByZXNvdXJjZSBidW5kbGUgb24gaG9zdCBjb21wb25lbnRcbiAgICBpc0JsYWNrOiBmYWxzZSwgLy8gc3R5bGUgYXJyb3dzIGFuZCBuYXZpZ2F0aW9uIGluIGJsYWNrIGluc3RlYWQgb2YgZGVmYXVsdCB3aGl0ZVxuICB9LCBjb25maWcpO1xuXG4gIHN3aXBlckludGVncmF0ZUN1c3RvbVBhZ2luYXRpb24oc3dpcGVyT2JqZWN0LCBvcHRpb25zKTtcbiAgc3dpcGVyRW1pdEV2ZW50c09uRWxlbWVudChzd2lwZXJPYmplY3QpO1xuICBzd2lwZXJQcmV2ZW50VGFiYmluZ0lzc3Vlcyhzd2lwZXJPYmplY3QpO1xuICBzd2lwZXJEaXNhYmxlQXV0b3BsYXlPblNsaWRlRm9jdXMoc3dpcGVyT2JqZWN0KTtcbiAgc3dpcGVyU2V0QXJpYUxpdmVPbkZvY3VzSW4oc3dpcGVyT2JqZWN0LCBvcHRpb25zKTtcbiAgc3dpcGVyTW9kaWZ5TmF2aWdhdGlvbihzd2lwZXJPYmplY3QsIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHN3aXBlckExMXlEZXN0cm95ID0gKHN3aXBlck9iamVjdCkgPT4ge1xuICBsZXQgc3dpcGVyID0gc3dpcGVyT2JqZWN0O1xuICBjb25zdCBwcmV2aW91cyA9IHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbDtcbiAgY29uc3QgbmV4dCA9IHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbDtcblxuICBpZiAocHJldmlvdXMpIHtcbiAgICBwcmV2aW91cy5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGlmIChuZXh0KSB7XG4gICAgbmV4dC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGlmIChzd2lwZXIuZHhQYWdpbmF0aW9uKSB7XG4gICAgc3dpcGVyLmR4UGFnaW5hdGlvbi5QYWdpbmF0aW9uKCdkZXN0cm95Jyk7XG4gIH1cblxuICBzd2lwZXIuZGVzdHJveSgpO1xuICBzd2lwZXIgPSBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IHN3aXBlclByZXZlbnREZWZhdWx0QnV0dG9uQWN0aW9uID0gKHN3aXBlck9iamVjdCwgc3dpcGVyT3B0aW9ucyA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgcGFnaW5hdGlvbk9iamVjdCB9ID0gc3dpcGVyT3B0aW9ucztcbiAgY29uc3QgbmV4dCA9IHN3aXBlck9iamVjdC5uYXZpZ2F0aW9uLm5leHRFbDtcbiAgY29uc3QgcHJldmlvdXMgPSBzd2lwZXJPYmplY3QubmF2aWdhdGlvbi5wcmV2RWw7XG5cbiAgY29uc3Qgc3dpcGVyUHJldmVudEVudGVyRG91YmxlQWN0aW9uID0gKGUpID0+IHtcbiAgICBjb25zdCBrZXkgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcbiAgICBjb25zdCB7IFJFVFVSTiB9ID0gS2V5Q29kZTtcblxuICAgIGlmIChrZXkgPT09IFJFVFVSTikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAocGFnaW5hdGlvbk9iamVjdCkge1xuICAgICAgICBwYWdpbmF0aW9uT2JqZWN0LlBhZ2luYXRpb24oJ3VwZGF0ZUFjdGl2ZVBpcEJ5SW5kZXgnLCBzd2lwZXJPYmplY3QucmVhbEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cblxuICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHN3aXBlclByZXZlbnRFbnRlckRvdWJsZUFjdGlvbihlKSk7XG4gIHByZXZpb3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHN3aXBlclByZXZlbnRFbnRlckRvdWJsZUFjdGlvbihlKSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHdpbmRvd0hlaWdodCA9ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbmV4cG9ydCBjb25zdCB3aW5kb3dXaWR0aCA9ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcblxuZXhwb3J0IGNvbnN0IGRvY3VtZW50VG9wT2Zmc2V0ID0gKGVsZW1lbnQpID0+IHtcbiAgbGV0IGVsZW0gPSBlbGVtZW50O1xuICBsZXQgb2Zmc2V0ID0gMDtcbiAgZG8ge1xuICAgIG9mZnNldCArPSBlbGVtLm9mZnNldFRvcDtcbiAgICBlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQ7XG4gIH0gd2hpbGUgKGVsZW0pO1xuICByZXR1cm4gb2Zmc2V0IDwgMCA/IDAgOiBvZmZzZXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBTd2lwZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==