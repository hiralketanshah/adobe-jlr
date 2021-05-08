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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/webapp/components/Exterior360/js/Exterior360.js");
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

/***/ "./node_modules/babel-runtime/core-js/math/sign.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/math/sign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/math/sign */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/math/sign.js"), __esModule: true };

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

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/math/sign.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/math/sign.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.math.sign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.math.sign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Math.sign;


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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/keys.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/keys.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.keys;


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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_math-sign.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_math-sign.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.math.sign.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.math.sign.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_math-sign.js") });


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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.keys.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.keys.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


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

/***/ "./src/main/webapp/components/DxRangeSlider/es6/DxRangeSlider.js":
/*!***********************************************************************!*\
  !*** ./src/main/webapp/components/DxRangeSlider/es6/DxRangeSlider.js ***!
  \***********************************************************************/
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

/***/ }),

/***/ "./src/main/webapp/components/Exterior360/js/Exterior360.js":
/*!******************************************************************!*\
  !*** ./src/main/webapp/components/Exterior360/js/Exterior360.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _sign = __webpack_require__(/*! babel-runtime/core-js/math/sign */ "./node_modules/babel-runtime/core-js/math/sign.js");

var _sign2 = _interopRequireDefault(_sign);

var _DxRangeSlider = __webpack_require__(/*! ../../DxRangeSlider/es6/DxRangeSlider */ "./src/main/webapp/components/DxRangeSlider/es6/DxRangeSlider.js");

var _DxRangeSlider2 = _interopRequireDefault(_DxRangeSlider);

var _index = __webpack_require__(/*! ../../../resources/dev/js/utils/index */ "./src/main/webapp/resources/dev/js/utils/index.js");

var _browserDetection = __webpack_require__(/*! ../../../resources/dev/js/utils/browserDetection */ "./src/main/webapp/resources/dev/js/utils/browserDetection.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global jQuery, site */

(function ($, window, document) {
  var Exterior360 = {
    width: null,
    height: null,
    data: null,
    images: null,
    currentImage: null,
    _isInsideTabbedContainer: false,
    headerBoxHidden: false,
    _dxRangeSlider: null,
    imageSize: (0, _browserDetection.isBreakpointSmall)() ? 'mobile' : 'desktop',
    breakpointSmall: null,
    breakpointMedium: null,
    breakpointLarge: null,
    sliderUpdateLimiter: true,
    loaded: false,
    rect: null,
    changeTotal: 0,
    imageIndex: 1,
    loadedImagesCount: 0,
    loadedImages: [],
    headerBox: null,
    a11yLabels: {},
    mouse: {
      x: 0,
      down: false,
      lastMove: {
        x: 0
      }
    },
    imageOffset: {
      x: 0,
      y: 0
    },
    _events: {
      start: null,
      stop: null,
      move: null,
      touch: true
    },
    uiSelectors: {
      headerBox: '.headerBox',
      rangeSliderWrapper: '.Exterior360__slider',
      canvasContainer: '.Exterior360__canvas-container',
      loadButtonContainer: '.Exterior360__init-container',
      interactToggle: '.Exterior360__load-button'
    },

    init: function init() {
      this.data = this.$element.data('frames');
      this.images = this.data[this.imageSize];
      this.a11yLabels = {
        sliderDecrease: this.$element.attr('data-label-decrease-slider'),
        sliderIncrease: this.$element.attr('data-label-increase-slider')
      };

      this._setupGoAnimation();
      this._createCanvas();
      this._handleEventBinding();
      this._tabbedContainerBehaviour();
      this._preloadFirst();
    },
    _setupGoAnimation: function _setupGoAnimation() {
      var _this = this;

      var dirs = ['left', 'right'];
      var i = 0;
      var lastClass = null;

      var go = function go() {
        _this.ui('interactToggle').removeClass(lastClass);
        _this.ui('interactToggle').addClass(dirs[i]);

        lastClass = dirs[i];
        i += 1;

        if (i >= dirs.length) {
          i = 0;
          _this._animationTimeout = setTimeout(go.bind(_this), 2000);
        } else {
          _this._animationTimeout = setTimeout(go.bind(_this), 800);
        }
      };

      this._animationTimeout = setTimeout(go.bind(this), 800);
    },
    _createCanvas: function _createCanvas() {
      if (this.$element.find('canvas')) {
        this.$element.find('canvas').remove();
      }

      this.canvas = document.createElement('canvas');
      this.canvas.classList.add('Exterior360__canvas');
      this.ctx = this.canvas.getContext('2d');
      this.ctx.mozImageSmoothingEnabled = 'false';
      this.ctx.webkitImageSmoothingEnabled = 'false';
      this.ctx.msImageSmoothingEnabled = 'false';
      this.ctx.imageSmoothingEnabled = 'false';
      this.ui('canvasContainer').prepend(this.canvas);
      this._setSize();
      this.$element.addClass('Exterior360--canvas-loaded');
    },
    _handleEventBinding: function _handleEventBinding() {
      // Element Events
      this.$element.on('first-image-loaded', this._draw.bind(this));
      this.ui('interactToggle').on('tap click', this._startLoading.bind(this));

      // Window Events
      window.addEventListener('resize', this._setSize.bind(this));

      if (!this.data.showSlider) {
        this._bindMouseEvents();
      }
    },
    _bindMouseEvents: function _bindMouseEvents() {
      var _this2 = this;

      this._getEvents();

      this.canvas.addEventListener(this._events.start, function (e) {
        _this2.mouse.x = _this2._getCoordinate(e, 'x');
        _this2.mouse.lastMove.x = _this2._getCoordinate(e, 'x');
        _this2.mouse.down = true;
      });

      this.canvas.addEventListener(this._events.move, function (e) {
        if (_this2.mouse.down) {
          _this2.sliderUpdateLimiter = true;
          _this2.mouse.x = _this2._getCoordinate(e, 'x');
          _this2._calculateMouseMovement();
          if (_this2.loaded) {
            _this2._updateImage();
          }
          _this2._draw();
        }
      });

      this.canvas.addEventListener(this._events.stop, function () {
        _this2.changeTotal = 0;
        _this2.mouse.down = false;
      });
    },
    _tabbedContainerBehaviour: function _tabbedContainerBehaviour() {
      var _this3 = this;

      var tabbedContainer = this.$element.parents('.TabbedContainer');
      this._isInsideTabbedContainer = !!tabbedContainer.length;

      tabbedContainer.on('tabChanged', function () {
        _this3.ui('interactToggle').show();
      });
    },
    _preloadFirst: function _preloadFirst(index) {
      var _this4 = this;

      var c = index || 1;
      var i = new Image();
      i.src = this.images[c];

      i.onload = function () {
        _this4.currentImage = i;
        _this4.loadedImages[c] = i;
        (0, _index.eventTrigger)(_this4.element, 'first-image-loaded');
      };
    },
    _startLoading: function _startLoading(e) {
      var _this5 = this;

      (0, _index.addDxElementLoadingSpinner)(this.ui('loadButtonContainer').get(0));
      setTimeout(function () {
        _this5._loadImage();
        _this5._initialiseDxRangeSlider();
       
      }, 1000);

      this.$element.off(e);
    },
    _initialiseDxRangeSlider: function _initialiseDxRangeSlider() {
      var _this6 = this;
      if (!this.data.showSlider) {
        return;
      }

      this.ui('rangeSliderWrapper').addClass('Exterior360__slider--visible').html('<div class="DxRangeSlider"></div>');
      var slider = this.$element.find('.DxRangeSlider').get(0);
      var options = {
        start: 0,
        step: 1,
        theme: 'exterior360',
        range: { min: 0, max: this.images.length },
        direction: site.rtl ? 'rtl' : 'ltr',
        labels: {
          decrement: [this.a11yLabels.sliderDecrease],
          increment: [this.a11yLabels.sliderIncrease]
        }
      };

      var dxRangeSlider = new _DxRangeSlider2.default(slider, options);
      this._dxRangeSlider = dxRangeSlider.getSlider();

      this._dxRangeSlider.on('update', function (position) {
        if (!_this6.sliderUpdateLimiter) {
          _this6.changeTotal = 1; // Set to declare a change and hide the headerbox.
          var frame = Math.ceil(position[0]);
          _this6.currentImage = _this6.loadedImages[frame];
          _this6._draw();
        }
        _this6.sliderUpdateLimiter = false;
      });

      this._dxRangeSlider.on('end', function () {
        _this6.changeTotal = 0;
        _this6._updateHeaderBox();
      });
    },
    _getCoordinate: function _getCoordinate(e, type) {
      if (this._events.touch && type === 'x') {
        return e.touches[0].clientX;
      } else if (!this._events.touch && type === 'x') {
        return e.clientX;
      }
      return 0;
    },
    _imageHasLoaded: function _imageHasLoaded() {
      this.loadedImagesCount += 1;
      this._loadImage();
    },
    _loadImage: function _loadImage() {
      if (this.loadedImagesCount < this.images.length) {
        var c = this.loadedImagesCount;
        this.loadedImages[c] = new Image();
        this.loadedImages[c].onload = this._imageHasLoaded.bind(this);
        this.loadedImages[c].src = this.images[c];
      } else {
        this.loaded = true;
        (0, _index.removeDxLoadingSpinner)(this.ui('loadButtonContainer').get(0));
        this.ui('interactToggle').hide();
      }
    },
    _getEvents: function _getEvents() {
      var isTouchDevice = $('html').hasClass('touchCapability');
      this._events = {
        start: isTouchDevice ? 'touchstart' : 'mousedown',
        stop: isTouchDevice ? 'touchend' : 'mouseup',
        move: isTouchDevice ? 'touchmove' : 'mousemove',
        touch: !!isTouchDevice
      };
    },
    _setSize: function _setSize() {
      var _this7 = this;

      this.breakpointSmall = (0, _browserDetection.isBreakpointSmall)();
      this.breakpointMedium = (0, _browserDetection.isBreakpointMedium)();
      this.breakpointLarge = !(0, _browserDetection.isBreakpointMedium)() && !(0, _browserDetection.isBreakpointSmall)();
      this.widthcal = $('body').innerWidth();
      if(this.widthcal >= 1920){
        this.width = 1660;
      }
      else if(this.widthcal >= 1280  && this.widthcal <= 1920){
        this.width = 1160;
      }
      else{
        this.width = $('body').innerWidth();
      }
      this.height = window.innerHeight - (0, _index.getStickyNavHeightV2)(this.$element.offset().top, false);

      // reset offsets
      this.imageOffset.y = 0;
      this.imageOffset.x = 0;

      // get 16:9 size based off of window width
      this.calculatedWidth = this.width;
      this.calculatedHeight = Math.round(this.calculatedWidth / 16 * 9);

      // always stay 16:9 on mobile
      if (!this.breakpointSmall && !this.breakpointMedium) {
        // height of element on page is less than the calculated image height & adjust offset accordingly

        if (this.height < this.calculatedHeight) {
          this.imageOffset.y = Math.round((this.height - this.calculatedHeight) / 2);
        } else if (this.calculatedHeight < this.height) {
          // if calculated height of image will not cover area, set height of image to height of element

          this.calculatedHeight = this.height;
          this.calculatedWidth = Math.round(this.height / 9 * 16);

          this.imageOffset.x = -Math.round((this.calculatedWidth - this.width) / 2);
        }
      } else {
        this.height = this.width / 16 * 9;
      }

      this.canvas.height = this.height;
      this.canvas.width = this.width;

      if (this.tabbedContainer) {
        if (!this.breakpointSmall) {
          this.$element.height(this.height);
        } else {
          // Delay height calculation to ensure headerBox has finished rendering - LRA-13882
          setTimeout(function () {
            _this7.$element.height(_this7.height + _this7.ui('headerBox').height());
          }, 500);
        }
      }

      this._draw();
      this._centerHeaderBox();
    },
    _calculateMouseMovement: function _calculateMouseMovement() {
      var realX = this.mouse.x - this.rect.left;
      this.changeTotal += realX - this.mouse.lastMove.x;
      this.mouse.lastMove.x = realX;
    },
    _drawCanvasImage: function _drawCanvasImage() {
      if (this.currentImage) {
        this.ctx.drawImage(this.currentImage, this.imageOffset.x, this.imageOffset.y, this.calculatedWidth, this.calculatedHeight);
      }
    },
    _updateCurrentImage: function _updateCurrentImage() {
      this.currentImage = this.loadedImages[this.imageIndex];
    },
    _centerHeaderBox: function _centerHeaderBox() {
      if (!this.breakpointSmall) {
        this.ui('headerBox').width('auto').height('auto').HeaderBox();

        var headerBoxHeight = this.ui('headerBox').height();
        var headerPos = (this.canvas.height - headerBoxHeight) / 2;

        this.ui('headerBox').css({ top: headerPos });
      }

      this._positionContent();
    },
    _positionContent: function _positionContent() {
      var left = '';
      if (window.innerWidth < 1400 && !this.breakpointSmall && this.ui('headerBox').length !== 0) {
        left = this.ui('headerBox').offset().left + this.ui('headerBox').width() - this.$element.offset().left + (this.$element.width() - (this.ui('headerBox').offset().left + this.ui('headerBox').width() - this.$element.offset().left)) / 2;
      }

      this.ui('loadButtonContainer').css({ left: left });
    },
    _resetHeaderBox: function _resetHeaderBox() {
      this.headerBoxHidden = false;
      this.ui('headerBox').show();
      this.ui('headerBox').transition({ opacity: 1, duration: 400 }, 'ease');
    },
    _updateHeaderBox: function _updateHeaderBox() {
      var _this8 = this;

      if (!this.breakpointSmall) {
        if (this.changeTotal !== 0 && !this.headerBoxHidden) {
          this.headerBoxHidden = true;
          this.ui('headerBox').transition({ opacity: 0 }, 400, 'ease', function () {
            _this8.ui('headerBox').hide();
          });
        } else if (this.headerBoxHidden) {
          clearTimeout(this.headerBoxTimeout);
          this.headerBoxTimeout = setTimeout(this._resetHeaderBox.bind(this), 2000);
        }
      }
    },
    _updateImage: function _updateImage() {
      if (this.changeTotal > 20 || this.changeTotal < -20) {
        var directionalCheck = (0, _sign2.default)(this.changeTotal);

        this.changeTotal = 0;
        this.imageIndex = directionalCheck === 1 ? this.imageIndex + 1 : this.imageIndex - 1;

        if (this.imageIndex >= this.images.length) {
          this.imageIndex = 0;
        } else if (this.imageIndex <= 0) {
          this.imageIndex = this.images.length;
        }

        this._updateCurrentImage();
        this._dxRangeSlider.set(this.imageIndex);
      }
    },
    _draw: function _draw() {
      this.rect = this.canvas.getBoundingClientRect();

      this._drawCanvasImage();
      this._updateHeaderBox();

      this.ctx.save();
      this.ctx.fillStyle = '#fc00cf';
      this.ctx.restore();
    },
    _debug: function _debug() {
      var _this9 = this;

      var debugVars = {
        mouseX: this.mouse.x,
        mouseY: this.mouse.y,
        mousedown: this.mouse.down,
        actualMouseX: this.mouse.x - this.rect.left,
        actualMouseY: this.mouse.y - this.rect.top,
        changeTotal: this.changeTotal,
        loadedImagesCount: this.loadedImagesCount,
        cursorAlpha: this.cursorAlpha
      };

      var i = 1;
      (0, _keys2.default)(debugVars).forEach(function (key) {
        _this9.ctx.fillStyle = '#fff';
        _this9.ctx.font = '18px Georgia';
        _this9.ctx.fillText(key + ': ' + debugVars[key], 10, i * 20);
        i += 1;
      });
    }
  };

  jQuery.createComponent('Exterior360', Exterior360);

  $('.cmp-exterior360').each(function (index, element) {
    // eslint-disable-line
    var comp = $(element);
    if (!comp.parents('.TabbedContainer').length) {
      comp.Exterior360();
    }
  });
})(jQuery, window, document);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvbWF0aC9zaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9tYXRoL3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWF0aC1zaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hdGguc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29tcG9uZW50cy9EeFJhbmdlU2xpZGVyL2VzNi9EeFJhbmdlU2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb21wb25lbnRzL0V4dGVyaW9yMzYwL2pzL0V4dGVyaW9yMzYwLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2FyaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvYnJvd3NlckRldGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvcmVzb3VyY2VzL2Rldi9qcy91dGlscy9kb21NYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvaW5kZXguanMiXSwibmFtZXMiOlsiRHhSYW5nZVNsaWRlciIsImVsZW1lbnQiLCJvcHRpb25zIiwic2xpZGVyIiwiY3VzdG9tQ29ubmVjdE5hbWVzcGFjZSIsImRhdGFOYW1lU3BhY2UiLCJkYXRhQ29ubmVjdEluZGV4IiwiZGF0YUlzSW5pdGlhbGlzZWQiLCJzbWFsbEhhbmRsZXMiLCJzdGFydCIsImxlbmd0aCIsImN1c3RvbUNvbm5lY3RTcGFjaW5nIiwiZGVmYXVsdHMiLCJjcmVhdGVTbGlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJpc0luaXRpYWxpc2VkIiwiY3JlYXRlU3RhcnRBcnJheSIsImNyZWF0ZUN1c3RvbUNvbm5lY3RzIiwiYWRkQ3VzdG9tQ2xhc3NlcyIsImluaXRTbGlkZXIiLCJjcmVhdGVDdXN0b21Db250cm9scyIsImFkZEN1c3RvbUNvbm5lY3RFdmVudHMiLCJjbGFzc2VzIiwibW9kaWZpZXJDbGFzcyIsInNtYWxsSGFuZGxlQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXJlY3Rpb24iLCJ0aGVtZSIsInNsaWRlclR5cGUiLCJub1VpU2xpZGVyIiwiY3JlYXRlIiwiaGFuZGxlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaGFuZGxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIiQiLCJmbiIsIkZvY3VzU3dpdGNoZXIiLCJzZXRJbml0U3RhdHVzIiwiY3VzdG9tQ29ubmVjdENsYXNzIiwiaGFuZGxlQ29udHJvbENsYXNzIiwicmVtb3ZlIiwib2ZmIiwiY29ubmVjdHMiLCJjb25uZWN0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY29udHJvbHMiLCJjb250cm9sIiwiZGVzdHJveSIsImdldEF0dHJpYnV0ZSIsInN0YXR1cyIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUNvbm5lY3QiLCJpbmRleCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYWxpZ25tZW50IiwiY29ubmVjdG9ycyIsIm9uIiwicG9zaXRpb25zIiwiY29ubmVjdG9yIiwiaXNGaXJzdCIsImlzTGFzdCIsInN0eWxlIiwid2lkdGgiLCJkb3VibGVTcGFjaW5nIiwiY3JlYXRlQ29udHJvbCIsInN0ciIsIm1vZGlmaWVyIiwiaW5uZXJIVE1MIiwiaGFuZGxlV3JhcHBlciIsImdldEhhbmRsZXNXcmFwcGVyIiwiZ2V0SGFuZGxlcyIsImxhYmVscyIsImRlY3JlbWVudEVsZW1lbnQiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnRFbGVtZW50IiwiaW5jcmVtZW50IiwiY29udHJvbEJ1dHRvbnMiLCJzZXRJbml0aWFsQnV0dG9uU3RhdGVBMTFZIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZURlY3JlbWVudCIsImhhbmRsZUluY3JlbWVudCIsInJhbmdlIiwibWluIiwiY29uc3RydWN0b3IiLCJ0b2dnbGVEaXNhYmxlZFN0YXRlQTExeSIsIm1heCIsImhhbmRsZUluZGV4Iiwic3RlcHMiLCJzdGVwIiwidmFsdWUiLCJnZXRIYW5kbGVWYWx1ZSIsInNldEhhbmRsZSIsInZhbHVlcyIsImdldCIsIk51bWJlciIsInF1ZXJ5U2VsZWN0b3IiLCJkcmFnRGVhbGVyIiwiYmluZEV2ZW50IiwiZXZlbnQiLCJzZXRWYWx1ZSIsImJ1dHRvbiIsInJlbW92ZURpc2FibGVkIiwicmVtb3ZlQXR0cmlidXRlIiwid2luZG93IiwiRXh0ZXJpb3IzNjAiLCJoZWlnaHQiLCJkYXRhIiwiaW1hZ2VzIiwiY3VycmVudEltYWdlIiwiX2lzSW5zaWRlVGFiYmVkQ29udGFpbmVyIiwiaGVhZGVyQm94SGlkZGVuIiwiX2R4UmFuZ2VTbGlkZXIiLCJpbWFnZVNpemUiLCJicmVha3BvaW50U21hbGwiLCJicmVha3BvaW50TWVkaXVtIiwiYnJlYWtwb2ludExhcmdlIiwic2xpZGVyVXBkYXRlTGltaXRlciIsImxvYWRlZCIsInJlY3QiLCJjaGFuZ2VUb3RhbCIsImltYWdlSW5kZXgiLCJsb2FkZWRJbWFnZXNDb3VudCIsImxvYWRlZEltYWdlcyIsImhlYWRlckJveCIsImExMXlMYWJlbHMiLCJtb3VzZSIsIngiLCJkb3duIiwibGFzdE1vdmUiLCJpbWFnZU9mZnNldCIsInkiLCJfZXZlbnRzIiwic3RvcCIsIm1vdmUiLCJ0b3VjaCIsInVpU2VsZWN0b3JzIiwicmFuZ2VTbGlkZXJXcmFwcGVyIiwiY2FudmFzQ29udGFpbmVyIiwibG9hZEJ1dHRvbkNvbnRhaW5lciIsImludGVyYWN0VG9nZ2xlIiwiaW5pdCIsIiRlbGVtZW50Iiwic2xpZGVyRGVjcmVhc2UiLCJhdHRyIiwic2xpZGVySW5jcmVhc2UiLCJfc2V0dXBHb0FuaW1hdGlvbiIsIl9jcmVhdGVDYW52YXMiLCJfaGFuZGxlRXZlbnRCaW5kaW5nIiwiX3RhYmJlZENvbnRhaW5lckJlaGF2aW91ciIsIl9wcmVsb2FkRmlyc3QiLCJkaXJzIiwiaSIsImxhc3RDbGFzcyIsImdvIiwidWkiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiX2FuaW1hdGlvblRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYmluZCIsImZpbmQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwibW96SW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwid2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwibXNJbWFnZVNtb290aGluZ0VuYWJsZWQiLCJpbWFnZVNtb290aGluZ0VuYWJsZWQiLCJwcmVwZW5kIiwiX3NldFNpemUiLCJfZHJhdyIsIl9zdGFydExvYWRpbmciLCJzaG93U2xpZGVyIiwiX2JpbmRNb3VzZUV2ZW50cyIsIl9nZXRFdmVudHMiLCJlIiwiX2dldENvb3JkaW5hdGUiLCJfY2FsY3VsYXRlTW91c2VNb3ZlbWVudCIsIl91cGRhdGVJbWFnZSIsInRhYmJlZENvbnRhaW5lciIsInBhcmVudHMiLCJzaG93IiwiYyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiX2xvYWRJbWFnZSIsIl9pbml0aWFsaXNlRHhSYW5nZVNsaWRlciIsImh0bWwiLCJzaXRlIiwicnRsIiwiZHhSYW5nZVNsaWRlciIsImdldFNsaWRlciIsInBvc2l0aW9uIiwiZnJhbWUiLCJNYXRoIiwiY2VpbCIsIl91cGRhdGVIZWFkZXJCb3giLCJ0eXBlIiwidG91Y2hlcyIsImNsaWVudFgiLCJfaW1hZ2VIYXNMb2FkZWQiLCJoaWRlIiwiaXNUb3VjaERldmljZSIsImhhc0NsYXNzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwib2Zmc2V0IiwidG9wIiwiY2FsY3VsYXRlZFdpZHRoIiwiY2FsY3VsYXRlZEhlaWdodCIsInJvdW5kIiwiX2NlbnRlckhlYWRlckJveCIsInJlYWxYIiwibGVmdCIsIl9kcmF3Q2FudmFzSW1hZ2UiLCJkcmF3SW1hZ2UiLCJfdXBkYXRlQ3VycmVudEltYWdlIiwiSGVhZGVyQm94IiwiaGVhZGVyQm94SGVpZ2h0IiwiaGVhZGVyUG9zIiwiY3NzIiwiX3Bvc2l0aW9uQ29udGVudCIsIl9yZXNldEhlYWRlckJveCIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJjbGVhclRpbWVvdXQiLCJoZWFkZXJCb3hUaW1lb3V0IiwiZGlyZWN0aW9uYWxDaGVjayIsInNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNhdmUiLCJmaWxsU3R5bGUiLCJyZXN0b3JlIiwiX2RlYnVnIiwiZGVidWdWYXJzIiwibW91c2VYIiwibW91c2VZIiwibW91c2Vkb3duIiwiYWN0dWFsTW91c2VYIiwiYWN0dWFsTW91c2VZIiwiY3Vyc29yQWxwaGEiLCJrZXkiLCJmb250IiwiZmlsbFRleHQiLCJqUXVlcnkiLCJjcmVhdGVDb21wb25lbnQiLCJlYWNoIiwiY29tcCIsIktleUNvZGUiLCJCQUNLU1BBQ0UiLCJERUxFVEUiLCJET1dOIiwiRU5EIiwiRVNDIiwiSE9NRSIsIkxFRlQiLCJQQUdFX0RPV04iLCJQQUdFX1VQIiwiUkVUVVJOIiwiUklHSFQiLCJTUEFDRSIsIlRBQiIsIlVQIiwiYnJlYWtwb2ludHMiLCJzbWFsbCIsIm1lZGl1bSIsIndpZGVyIiwiY3VycmVudCIsImdldERldmljZU9yaWVudGF0aW9uIiwiJHdpbmRvdyIsImdldExhcmdlckJyZWFrcG9pbnQiLCJnZXRCcmVha3BvaW50U2l6ZSIsIm9sZENhbGMiLCJpc0JyZWFrcG9pbnRTbWFsbCIsImlzQnJlYWtwb2ludE1lZGl1bSIsImlzTW9iaWxlRGV2aWNlIiwiRG9jdW1lbnRUb3VjaCIsIm5hdmlnYXRvciIsIm1zTWF4VG91Y2hQb2ludHMiLCJpc05vdE1vYmlsZURldmljZSIsImlzVGFibGV0RGV2aWNlIiwidGVzdCIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiaXNJT1MiLCJpc05vdElPUyIsImlzV2luZG93c1Bob25lIiwiaW5kZXhPZiIsImdldEFuZHJvaWRWZXJzaW9uIiwidWEiLCJwYXJzZUZsb2F0Iiwic2xpY2UiLCJnZXRCcm93c2VyVXNlckFnZW50IiwiZGV0ZWN0QnJvd3NlcnMiLCJicm93c2VycyIsImlzQ2hyb21lIiwiaXNNc0VkZ2UiLCJpc0V4cGxvcmVyIiwiaXNGaXJlZm94IiwiaXNTYWZhcmkiLCJpc09wZXJhIiwiaXNJZSIsImNvbnRhaW5zIiwiaXNJZTExIiwiQWN0aXZlWE9iamVjdCIsImdldFZpZXdwb3J0U2l6ZSIsImNzc1RleHQiLCJkb2N1bWVudEVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiZGltcyIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsVG9FbGVtZW50IiwiY2FsbGJhY2siLCJvcHRzIiwiZXh0ZW5kIiwiYWRqdXN0bWVudCIsImVhc2UiLCJjb250YWluZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiaGFzQmlnSW50U3VwcG9ydCIsIkJpZ0ludCIsIndyYXAiLCJlbCIsIndyYXBwZXIiLCJ1bndyYXAiLCJwYXJlbnQiLCJ3cmFwQWxsIiwiZWxlbWVudHMiLCJjcmVhdGVBcnJheSIsIk5vZGVMaXN0IiwiZWxlbWVudHNBcnJheSIsImluc2VydEFmdGVyIiwiYmVmb3JlIiwiYWZ0ZXIiLCJuZXh0U2libGluZyIsIiRuYXZIZWFkZXIiLCJzdGlja3lOYXZpZ2F0aW9uRW5hYmxlZCIsInN0aWNreU5hdmlnYXRpb25UcmFuc2l0aW9uUG9pbnQiLCJ0ZW1wbGF0ZUNhY2hlIiwiZ29vZ2xlTWFwU3R5bGVzIiwiZmVhdHVyZVR5cGUiLCJlbGVtZW50VHlwZSIsInN0eWxlcnMiLCJjb2xvciIsInZpc2liaWxpdHkiLCJzYXR1cmF0aW9uIiwibGlnaHRuZXNzIiwiaXNSdGwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImdldENhY2hlZFNjcmlwdCIsInVybCIsIm5ld09wdGlvbnMiLCJkYXRhVHlwZSIsImNhY2hlIiwiYWpheCIsImdldEhlaWdodCIsImVsZW0iLCJjbGllbnRIZWlnaHQiLCJnZXRTdGlja3lOYXZIZWlnaHQiLCJ5UG9zIiwib2xkQ2FsY3VsYXRpb24iLCJ5UG9zaXRpb24iLCJzaGFyZWRIZWFkZXIiLCIkaGVhZGVyIiwiJGluUGFnZU5hdiIsIiRpblBhZ2VOYXZTdGlja3kiLCIkaW5QYWdlTmF2QmFyIiwiZHhOYXZQcmltYXJ5IiwiYnJlYWtwb2ludCIsImNoZWNrU3RpY2t5TmF2IiwiaW5QYWdlTmF2VG9wIiwiaXNTdGlja3lOYXYiLCJvbGROYXZCcmVha3BvaW50Iiwib3V0ZXJIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImdldE5hdmlnYXRpb25IZWlnaHQiLCJnZXROYWFTSGVpZ2h0Iiwib2xkIiwicHJpbWFyeU5hdkhlaWdodCIsInBhcnNlSW50IiwiYnJlYWRjcnVtYk5hdkhlaWdodCIsIm5vdGlmaWNhdGlvbkhlaWdodCIsImluUGFnZU5hdmlnYXRpb25IZWlnaHQiLCJnZXRTdGlja3lOYXZIZWlnaHRWMiIsInNjcm9sbFRvIiwidGFyZ2V0IiwiZWFzaW5nIiwiaWdub3JlU3RpY2t5TmF2IiwieU9mZnNldCIsIm5ld0R1cmF0aW9uIiwibmV3Q2FsbGJhY2siLCJuZXdFYXNpbmciLCIkdGFyZ2V0RWwiLCJwcm9taXNlIiwiZG9uZSIsImNoZWNrRGVlcExpbmsiLCJocmVmIiwiZGVlcExpbmsiLCJzcGVlZCIsImhhc2hQb3MiLCJpZCIsInN1YnN0cmluZyIsImxvY2F0aW9uIiwiYWNjb3JkaW9uUGFyZW50IiwiY2xvc2VzdCIsImFjY29yZGlvblRpdGxlIiwiY2xpY2siLCIkY29udGFpbmVyIiwiJHRhYnMiLCIkdGFiTGlua3MiLCJ0YWJJbmRleCIsIiRsb2NhdGlvbiIsImFjY29yZGlvbkhlYWRlciIsImlzIiwiY29uc29sZSIsImVycm9yIiwiaXNQYWdlSW5JZnJhbWUiLCJzZWxmIiwiaW5zaWRlVGFiYmVkQ29udGFpbmVyIiwiaXNJbnNpZGVUYWJiZWRDb250YWluZXIiLCJub3QiLCJtb2JpbGVBY2NvcmRpb25zQWN0aXZhdGVkIiwicmVtb3ZlSFRNTFRhZ3MiLCJzIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiZ2V0VXJsUGFyYW1ldGVyIiwic1BhcmFtIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic1BhZ2VVUkwiLCJzZWFyY2giLCJzVVJMVmFyaWFibGVzIiwic3BsaXQiLCJzUGFyYW1ldGVyU3BsaXQiLCJhZGRQYXJhbWV0ZXJUb1VSTCIsInBhcmFtIiwibmV3VXJsIiwiZ2V0T2JqZWN0S2V5cyIsIm9iaiIsImtleXMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJjYW52YXNEcmF3QmdDb3ZlciIsImltZyIsInciLCJoIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJhcmd1bWVudHMiLCJpdyIsImloIiwiciIsIm53IiwibmgiLCJjeCIsImN5IiwiY3ciLCJjaCIsImFyIiwiaGFzUGxhY2Vob2xkZXJTdXBwb3J0IiwiaXNQYWdlSW5YUE1GcmFtZSIsIlRyaWRpb24iLCJXZWIiLCJVSSIsIlNpdGVFZGl0IiwiZWxlbWVudEluVmlld3BvcnQiLCJhZGp1c3QiLCJ3aW5kb3dJbm5lckhlaWdodCIsIndpbmRvd0hlaWdodCIsImFkanVzdFRvcCIsImFkanVzdEJvdHRvbSIsImVsT2Zmc2V0IiwiZWxUb3AiLCJlbEJvdHRvbSIsImRlZmF1bHRBZGp1c3QiLCJ2aWV3cG9ydEJvdHRvbSIsImJvdHRvbSIsImdldFJhbmRvbVN0cmluZyIsImZvcm1hdHRlZExlbmd0aCIsImNoYXJzIiwiY2hvc2VuIiwiY2hhckF0IiwiZmxvb3IiLCJyYW5kb20iLCJqb2luIiwiZ2V0RWFzaW5nVmFsdWUiLCJyYXRpbyIsImZvcm1hdHRlZFJhdGlvIiwicmFkaWFucyIsIlBJIiwiY29zIiwiZGlzYWJsZVNjcm9sbCIsImVuYWJsZVNjcm9sbCIsImxpbWl0TnVtYmVyIiwib2xkTWluIiwibG9hZElnbm9yZWRSZXNwb25zaXZlSW1hZ2VzIiwiJGltYWdlcyIsInJlbW92ZUF0dHIiLCJyaWNoc3BvbnNpdmVJbWFnZSIsInRocm90dGxlIiwidGhyZXNoaG9sZCIsInNjb3BlIiwidGhyZXNoIiwibGFzdCIsImRlZmVyVGltZXIiLCJjb250ZXh0Iiwibm93IiwiRGF0ZSIsImFyZ3MiLCJhcHBseSIsIm1lYXN1cmVUZXh0V2lkdGgiLCJ0ZXh0IiwicGFyIiwiYm9keSIsInBhZGRpbmciLCJ3aGl0ZVNwYWNlIiwiY2xpZW50V2lkdGgiLCJnZXRUcmFuc2l0aW9uRW5kRXZlbnQiLCJ0cmFuc2l0aW9ucyIsIk9UcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIldlYmtpdFRyYW5zaXRpb24iLCJ1bmRlZmluZWQiLCJ0ZW1wbGF0ZSIsImdldEVsZW1lbnRCeUlkIiwiRnVuY3Rpb24iLCJpc0luVmlld3BvcnQiLCJ3aW4iLCJ2aWV3cG9ydCIsInNjcm9sbExlZnQiLCJyaWdodCIsImJvdW5kcyIsIm91dGVyV2lkdGgiLCJzY3JvbGxJZk5vdEluVmlld3BvcnQiLCJkaXNwbGF5VG9Cb3R0b20iLCJzY3JvbGxUb1BvcyIsImlzTGFuZFJvdmVyIiwiZ2V0VGFiYmFibGUiLCJjdXN0b21TZWxlY3RvcnMiLCJkZWZhdWx0U2VsZWN0b3JzIiwic2VsZWN0b3JUeXBlcyIsImNvbmNhdCIsInNlbGVjdG9ycyIsImZpbHRlciIsInNlbGVjdG9yIiwidGFiYmFibGUiLCJvZmZzZXRQYXJlbnQiLCJpc0ludmlzaWJsZSIsImRpc3BsYXkiLCJsb2NrVGFiYmFibGVzIiwidGFiYmFibGVzIiwia2V5Q29kZSIsImZvY3VzIiwic2hpZnRLZXkiLCJiYWxhbmNlRWxlbWVudEhlaWdodCIsImFsbG93ZWRPZmZzZXQiLCJjb2x1bW5zIiwiY2FsbCIsImhlaWdodFRvdGFsIiwiaGVpZ2h0c0FycmF5IiwibWFwIiwiZWxlbWVudEhlaWdodCIsImdldEJhbGFuY2VkSW5kZXgiLCJhcnJheSIsInJ1bm5pbmdUb3RhbCIsImlzUmVjdXJzaXZlIiwic3BsaXRJbmRleCIsImNvbHVtbnMxIiwiY29sdW1uczIiLCJldmVudFRyaWdnZXIiLCJldmVudFR5cGUiLCJkZXRhaWwiLCJidWJibGVzIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiY29udmVydEVsZW1lbnRDb2xsZWN0aW9uVG9BcnJheSIsImNvbGxlY3Rpb24iLCJyYW5kb21pc2VFbGVtZW50cyIsImVsZW1lbnRzQ29sbGVjdGlvbiIsImNsb25lZEVsZW1lbnRzIiwiY2xvbmVOb2RlIiwic29ydCIsImluYyIsInJlcGxhY2VDaGlsZCIsImlzRWxlbWVudFZlcnRpY2FsbHlTY3JvbGxhYmxlIiwic2Nyb2xsSGVpZ2h0IiwiY2hlY2tEZWZpbmVkIiwiaXRlbSIsInRhYmxpc3ROYXZpZ2F0aW9uIiwidGFibGlzdCIsIm9yaWVudGF0aW9uIiwiaXNWZXJ0aWNhbCIsInRhYnMiLCJmb2N1c0ZpcnN0VGFiIiwiZm9jdXNMYXN0VGFiIiwiZm9jdXNQcmV2aW91c1RhYiIsImN1cnJlbnRUYWIiLCJmaW5kSW5kZXgiLCJmb2N1c05leHRUYWIiLCJ0YWJzTGVuZ3RoWmVyb0luZGV4IiwiaGFuZGxlVGFibGlzdEtleWRvd25FdmVudHMiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlVGFibGlzdEtleXVwRXZlbnRzIiwidGFiIiwiaXNFbXB0eSIsIk9iamVjdCIsInByb3RvdHlwZSIsInJlcGxhY2VBbGwiLCJzdHJpbmciLCJyZXBsYWNlbWVudCIsImR4U2V0VGltZW91dCIsImNiIiwidGltZSIsImFwcFJlYWR5RXZlbnQiLCJpbml0aWF0ZWQiLCJhcHBSZWFkeVRpbWVyIiwidGltZW91dCIsIkR4UmVxdWVzdE5leHRBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxvYWRpbmdTcGlubmVyVG9nZ2xlQnV0dG9uU3RhdGVBbmRDb250ZW50IiwidGFyZ2V0RWxlbWVudCIsInRhZ05hbWUiLCJkaXNhYmxlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJhZGREeExvYWRpbmdTcGlubmVyIiwiaWNvbk1hcmt1cCIsImxvYWRpbmdJY29uIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJyZW1vdmVEeExvYWRpbmdTcGlubmVyIiwiYWRkRHhFbGVtZW50TG9hZGluZ1NwaW5uZXIiLCJsb2NhbFN0b3JhZ2VBdmFpbGFibGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJhZGRTY3JpcHRGb3JCYXphYXJWb2ljZSIsInNjcmlwdFVSTCIsInRyaW0iLCJiYXphYXJWb2ljZVNjcmlwdCIsImhlYWQiLCJlcXVhbGlzZUhlaWdodHMiLCJtYXhIZWlnaHQiLCJnZW5lcmF0ZUN1cnJlbnREYXRlIiwidG9kYXkiLCJVVEMiLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsImdldFVUQ0hvdXJzIiwiZ2V0VVRDTWludXRlcyIsInByZXZlbnRBY3Rpb25PbkRlZXBMaW5rIiwibGlua0xvY2F0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNB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QjtBQUNBLE1BQUltVyxjQUFjbVEsWUFBZCxDQUFKLEVBQWlDO0FBQUVqakIsVUFBTXBCLGNBQU47QUFBeUI7QUFDN0QsQ0FITSxDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9FeHRlcmlvcjM2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudHMvRXh0ZXJpb3IzNjAvanMvRXh0ZXJpb3IzNjAuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9tYXRoL3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm1hdGguc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuTWF0aC5zaWduO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICghQlVHR1kgJiYgJG5hdGl2ZSkgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcbiIsIi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcbm1vZHVsZS5leHBvcnRzID0gTWF0aC5zaWduIHx8IGZ1bmN0aW9uIHNpZ24oeCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIHJldHVybiAoeCA9ICt4KSA9PSAwIHx8IHggIT0geCA/IHggOiB4IDwgMCA/IC0xIDogMTtcbn07XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHsgc2lnbjogcmVxdWlyZSgnLi9fbWF0aC1zaWduJykgfSk7XG4iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcbiIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG4iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuIiwiLyogZ2xvYmFsIG5vVWlTbGlkZXIgKi9cblxuaW1wb3J0IHtcbiAgaW5zZXJ0QWZ0ZXIsXG4gIGluc2VydEJlZm9yZVxufSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2RvbU1hbmlwdWxhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER4UmFuZ2VTbGlkZXIge1xuICBzdGF0aWMgZGVmYXVsdHMgPSB7XG4gICAgdGhlbWU6ICdsaWdodCcsIC8vIGxpZ2h0IHx8IGRhcmtcbiAgICBkaXJlY3Rpb246ICdsdHInLCAvLyBsdHIgfHwgcnRsXG4gICAgc2xpZGVyVHlwZTogJ3JhbmdlJywgLy8gcmFuZ2UgfHwgaW1hZ2VcbiAgICBsYWJlbHM6IHtcbiAgICAgIGRlY3JlbWVudDogWydEZWNyZWFzZSBzbGlkZXIgMScsICdEZWNyZWFzZSBzbGlkZXIgMiddLFxuICAgICAgaW5jcmVtZW50OiBbJ0luY3JlYXNlIHNsaWRlciAxJywgJ0luY3JlYXNlIHNsaWRlciAyJ11cbiAgICB9XG4gIH1cbiAgc3RhdGljIGNsYXNzZXMgPSB7XG4gICAgbW9kaWZpZXJDbGFzczogJ0R4UmFuZ2VTbGlkZXItLScsXG4gICAgY3VzdG9tQ29ubmVjdENsYXNzOiAnRHhSYW5nZVNsaWRlcl9fY3VzdG9tLWNvbm5lY3QnLFxuICAgIGhhbmRsZUNvbnRyb2xDbGFzczogJ0R4UmFuZ2VTbGlkZXJfX2hhbmRsZS1jb250cm9sJyxcbiAgICBzbWFsbEhhbmRsZUNsYXNzOiAnc21hbGwtaGFuZGxlcydcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuc2xpZGVyID0gbnVsbDtcbiAgICB0aGlzLmN1c3RvbUNvbm5lY3ROYW1lc3BhY2UgPSAnRHhSYW5nZVNsaWRlci1jdXN0b20tY29ubmVjdHMnO1xuICAgIHRoaXMuZGF0YU5hbWVTcGFjZSA9ICdkYXRhLWR4cmFuZ2VzbGlkZXItJztcbiAgICB0aGlzLmRhdGFDb25uZWN0SW5kZXggPSBgJHt0aGlzLmRhdGFOYW1lU3BhY2V9aW5kZXhgO1xuICAgIHRoaXMuZGF0YUlzSW5pdGlhbGlzZWQgPSBgJHt0aGlzLmRhdGFOYW1lU3BhY2V9aW5pdGA7XG4gICAgY29uc3Qgc21hbGxIYW5kbGVzID0gb3B0aW9ucy5zdGFydC5sZW5ndGggPiAxO1xuICAgIGNvbnN0IGN1c3RvbUNvbm5lY3RTcGFjaW5nID0gc21hbGxIYW5kbGVzID8gMTQgOiAyNTtcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIER4UmFuZ2VTbGlkZXIuZGVmYXVsdHMsIHsgY3VzdG9tQ29ubmVjdFNwYWNpbmcsIHNtYWxsSGFuZGxlcyB9LCBvcHRpb25zKTtcbiAgICB0aGlzLmNyZWF0ZVNsaWRlcigpO1xuICB9XG5cbiAgdXBkYXRlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlU3RhcnRBcnJheSgpIHtcbiAgICBjb25zdCB7IHN0YXJ0IH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoc3RhcnQpID8gc3RhcnQgOiBbc3RhcnRdO1xuICB9XG5cbiAgY3JlYXRlU2xpZGVyKCkge1xuICAgIGlmICh0aGlzLmlzSW5pdGlhbGlzZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMuc3RhcnQgPSB0aGlzLmNyZWF0ZVN0YXJ0QXJyYXkoKTtcbiAgICB0aGlzLmNyZWF0ZUN1c3RvbUNvbm5lY3RzKCk7XG4gICAgdGhpcy5hZGRDdXN0b21DbGFzc2VzKCk7XG4gICAgdGhpcy5pbml0U2xpZGVyKCk7XG4gICAgdGhpcy5jcmVhdGVDdXN0b21Db250cm9scygpO1xuICAgIHRoaXMuYWRkQ3VzdG9tQ29ubmVjdEV2ZW50cygpO1xuICB9XG5cbiAgYWRkQ3VzdG9tQ2xhc3NlcygpIHtcbiAgICBjb25zdCB7IG1vZGlmaWVyQ2xhc3MsIHNtYWxsSGFuZGxlQ2xhc3MgfSA9IER4UmFuZ2VTbGlkZXIuY2xhc3NlcztcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHttb2RpZmllckNsYXNzfSR7dGhpcy5vcHRpb25zLmRpcmVjdGlvbn1gKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHttb2RpZmllckNsYXNzfSR7dGhpcy5vcHRpb25zLnRoZW1lfWApO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke21vZGlmaWVyQ2xhc3N9JHt0aGlzLm9wdGlvbnMuc2xpZGVyVHlwZX1gKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc21hbGxIYW5kbGVzKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHttb2RpZmllckNsYXNzfSR7c21hbGxIYW5kbGVDbGFzc31gKTtcbiAgICB9XG4gIH1cblxuICBpbml0U2xpZGVyKCkge1xuICAgIHRoaXMuc2xpZGVyID0gbm9VaVNsaWRlci5jcmVhdGUodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuICAgIGNvbnN0IGhhbmRsZXMgPSBbLi4udGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub1VpLXRvdWNoLWFyZWEnKV07XG4gICAgaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUpID0+IHtcbiAgICAgIC8vIG5vVWlTbGlkZXIgcHJldmVudHMgY2xlYXJpbmcgZm9jdXNTdHlsZXMgb24gbW91c2Vkb3duIC0gdGhpcyBhZGRzIGl0IGJhY2sgaW5cbiAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICAgIGlmICgkICYmICQuZm4uRm9jdXNTd2l0Y2hlcikge1xuICAgICAgICAgICQoJ2JvZHknKS5Gb2N1c1N3aXRjaGVyKCdyZW1vdmVGb2N1c0NsYXNzJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0SW5pdFN0YXR1cygndHJ1ZScpO1xuICB9XG5cbiAgZGVzdHJveVNsaWRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBtb2RpZmllckNsYXNzLFxuICAgICAgc21hbGxIYW5kbGVDbGFzcyxcbiAgICAgIGN1c3RvbUNvbm5lY3RDbGFzcyxcbiAgICAgIGhhbmRsZUNvbnRyb2xDbGFzc1xuICAgIH0gPSBEeFJhbmdlU2xpZGVyLmNsYXNzZXM7XG5cbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShzbWFsbEhhbmRsZUNsYXNzKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgJHttb2RpZmllckNsYXNzfSR7dGhpcy5vcHRpb25zLmRpcmVjdGlvbn1gKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgJHttb2RpZmllckNsYXNzfSR7dGhpcy5vcHRpb25zLnRoZW1lfWApO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke21vZGlmaWVyQ2xhc3N9JHt0aGlzLm9wdGlvbnMuc2xpZGVyVHlwZX1gKTtcblxuICAgIHRoaXMuc2xpZGVyLm9mZihgLiR7dGhpcy5jdXN0b21Db25uZWN0TmFtZXNwYWNlfWApO1xuICAgIGNvbnN0IGNvbm5lY3RzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2N1c3RvbUNvbm5lY3RDbGFzc31gKTtcbiAgICBjb25uZWN0cy5mb3JFYWNoKGNvbm5lY3QgPT4gY29ubmVjdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbm5lY3QpKTtcblxuICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2hhbmRsZUNvbnRyb2xDbGFzc31gKTtcbiAgICBjb250cm9scy5mb3JFYWNoKGNvbnRyb2wgPT4gY29udHJvbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRyb2wpKTtcblxuICAgIHRoaXMuc2xpZGVyLmRlc3Ryb3koKTsgLy8gY2FsbCBub1VpU2xpZGVyIGRlc3Ryb3kgbWV0aG9kXG4gICAgdGhpcy5zZXRJbml0U3RhdHVzKG51bGwpO1xuICB9XG5cbiAgaXNJbml0aWFsaXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSh0aGlzLmRhdGFJc0luaXRpYWxpc2VkKTtcbiAgfVxuXG4gIHNldEluaXRTdGF0dXMoc3RhdHVzKSB7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLmRhdGFJc0luaXRpYWxpc2VkLCBzdGF0dXMgPyB0cnVlIDogJycpO1xuICB9XG5cbiAgY3JlYXRlQ3VzdG9tQ29ubmVjdHMoKSB7XG4gICAgY29uc3QgeyBjdXN0b21Db25uZWN0Q2xhc3MgfSA9IER4UmFuZ2VTbGlkZXIuY2xhc3NlcztcbiAgICBjb25zdCBjcmVhdGVDb25uZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3VzdG9tQ29ubmVjdENsYXNzKTtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y3VzdG9tQ29ubmVjdENsYXNzfS0tZmlyc3RgKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5vcHRpb25zLnN0YXJ0Lmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y3VzdG9tQ29ubmVjdENsYXNzfS0tbGFzdGApO1xuICAgICAgfVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5kYXRhQ29ubmVjdEluZGV4LCBpbmRleCk7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVDb25uZWN0KDApKTtcbiAgICB0aGlzLm9wdGlvbnMuc3RhcnQuZm9yRWFjaCgoaGFuZGxlLCBpbmRleCkgPT4gdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbm5lY3QoaW5kZXggKyAxKSkpO1xuICB9XG5cbiAgYWRkQ3VzdG9tQ29ubmVjdEV2ZW50cygpIHtcbiAgICBjb25zdCBhbGlnbm1lbnQgPSB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAnbHRyJyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgY29uc3QgY29ubmVjdG9ycyA9IFsuLi50aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7dGhpcy5kYXRhQ29ubmVjdEluZGV4fV1gKV07XG5cbiAgICB0aGlzLnNsaWRlci5vbihgdXBkYXRlLiR7dGhpcy5jdXN0b21Db25uZWN0TmFtZXNwYWNlfWAsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSBhcmdzWzRdO1xuICAgICAgY29ubmVjdG9ycy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjb25uZWN0b3IgPSBlbGVtZW50O1xuICAgICAgICBjb25zdCBpc0ZpcnN0ID0gaW5kZXggPT09IDA7XG4gICAgICAgIGNvbnN0IGlzTGFzdCA9ICFjb25uZWN0b3JzW2luZGV4ICsgMV07XG4gICAgICAgIGlmIChpc0ZpcnN0KSB7XG4gICAgICAgICAgY29ubmVjdG9yLnN0eWxlLndpZHRoID0gYGNhbGMoJHtwb3NpdGlvbnNbMF19JSAtICR7dGhpcy5vcHRpb25zLmN1c3RvbUNvbm5lY3RTcGFjaW5nfXB4KWA7XG4gICAgICAgICAgY29ubmVjdG9yLnN0eWxlW2FsaWdubWVudF0gPSAnMHB4JztcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTGFzdCkge1xuICAgICAgICAgIGNvbm5lY3Rvci5zdHlsZS53aWR0aCA9IGBjYWxjKDEwMCUgLSAke3Bvc2l0aW9uc1tpbmRleCAtIDFdfSUgLSAke3RoaXMub3B0aW9ucy5jdXN0b21Db25uZWN0U3BhY2luZ31weClgO1xuICAgICAgICAgIGNvbm5lY3Rvci5zdHlsZVthbGlnbm1lbnRdID0gYGNhbGMoJHtwb3NpdGlvbnNbaW5kZXggLSAxXX0lICsgJHt0aGlzLm9wdGlvbnMuY3VzdG9tQ29ubmVjdFNwYWNpbmd9cHgpYDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZG91YmxlU3BhY2luZyA9IHRoaXMub3B0aW9ucy5jdXN0b21Db25uZWN0U3BhY2luZyAqIDI7XG4gICAgICAgIGNvbm5lY3Rvci5zdHlsZS53aWR0aCA9IGBjYWxjKCR7cG9zaXRpb25zW2luZGV4XX0lIC0gJHtwb3NpdGlvbnNbaW5kZXggLSAxXX0lIC0gJHtkb3VibGVTcGFjaW5nfXB4KWA7XG4gICAgICAgIGNvbm5lY3Rvci5zdHlsZVthbGlnbm1lbnRdID0gYGNhbGMoJHtwb3NpdGlvbnNbaW5kZXggLSAxXX0lICsgJHt0aGlzLm9wdGlvbnMuY3VzdG9tQ29ubmVjdFNwYWNpbmd9cHgpYDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlQ3VzdG9tQ29udHJvbHMoKSB7XG4gICAgY29uc3QgY3JlYXRlQ29udHJvbCA9IChzdHIsIG1vZGlmaWVyKSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZUNvbnRyb2xDbGFzcyB9ID0gRHhSYW5nZVNsaWRlci5jbGFzc2VzO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGhhbmRsZUNvbnRyb2xDbGFzcyk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7aGFuZGxlQ29udHJvbENsYXNzfSR7bW9kaWZpZXJ9YCk7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IHN0cjtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVXcmFwcGVyID0gdGhpcy5nZXRIYW5kbGVzV3JhcHBlcigpO1xuICAgIHRoaXMuZ2V0SGFuZGxlcygpLmZvckVhY2goKGhhbmRsZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHsgbGFiZWxzIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBjb25zdCBkZWNyZW1lbnRFbGVtZW50ID0gY3JlYXRlQ29udHJvbChsYWJlbHMuZGVjcmVtZW50W2luZGV4XSwgYC0tZGVjcmVtZW50JHtpbmRleH1gKTtcbiAgICAgIGNvbnN0IGluY3JlbWVudEVsZW1lbnQgPSBjcmVhdGVDb250cm9sKGxhYmVscy5pbmNyZW1lbnRbaW5kZXhdLCBgLS1pbmNyZW1lbnQke2luZGV4fWApO1xuICAgICAgY29uc3QgY29udHJvbEJ1dHRvbnMgPSB7IGRlY3JlbWVudEVsZW1lbnQsIGluY3JlbWVudEVsZW1lbnQgfTtcblxuICAgICAgaW5zZXJ0QmVmb3JlKGhhbmRsZVdyYXBwZXIsIGRlY3JlbWVudEVsZW1lbnQpO1xuICAgICAgaW5zZXJ0QWZ0ZXIoaGFuZGxlV3JhcHBlciwgaW5jcmVtZW50RWxlbWVudCk7XG5cbiAgICAgIHRoaXMuc2V0SW5pdGlhbEJ1dHRvblN0YXRlQTExWShjb250cm9sQnV0dG9ucyk7XG5cbiAgICAgIGRlY3JlbWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVEZWNyZW1lbnQoaW5kZXgsIGNvbnRyb2xCdXR0b25zKTtcbiAgICAgIH0pO1xuICAgICAgaW5jcmVtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmhhbmRsZUluY3JlbWVudChpbmRleCwgY29udHJvbEJ1dHRvbnMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsQnV0dG9uU3RhdGVBMTFZKGNvbnRyb2xCdXR0b25zKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdGFydFswXSA9PT0gdGhpcy5vcHRpb25zLnJhbmdlLm1pbikge1xuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci50b2dnbGVEaXNhYmxlZFN0YXRlQTExeShjb250cm9sQnV0dG9ucy5kZWNyZW1lbnRFbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zdGFydFswXSA9PT0gdGhpcy5vcHRpb25zLnJhbmdlLm1heCkge1xuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci50b2dnbGVEaXNhYmxlZFN0YXRlQTExeShjb250cm9sQnV0dG9ucy5kZWNyZW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbmNyZW1lbnQoaGFuZGxlSW5kZXgsIGNvbnRyb2xCdXR0b25zKSB7XG4gICAgY29uc3Qgc3RlcHMgPSB0aGlzLnNsaWRlci5zdGVwcygpO1xuICAgIGNvbnN0IHN0ZXAgPSBzdGVwcyAmJiBzdGVwc1toYW5kbGVJbmRleF1bMV07XG4gICAgaWYgKCFzdGVwKSB7XG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLnRvZ2dsZURpc2FibGVkU3RhdGVBMTF5KGNvbnRyb2xCdXR0b25zLmluY3JlbWVudEVsZW1lbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0SGFuZGxlVmFsdWUoaGFuZGxlSW5kZXgpO1xuICAgIHRoaXMuc2xpZGVyLnNldEhhbmRsZShoYW5kbGVJbmRleCwgdmFsdWUgKyBzdGVwKTtcbiAgICB0aGlzLmNvbnN0cnVjdG9yLnRvZ2dsZURpc2FibGVkU3RhdGVBMTF5KGNvbnRyb2xCdXR0b25zLmRlY3JlbWVudEVsZW1lbnQsIHRydWUpO1xuICB9XG5cbiAgaGFuZGxlRGVjcmVtZW50KGhhbmRsZUluZGV4LCBjb250cm9sQnV0dG9ucykge1xuICAgIGNvbnN0IHN0ZXBzID0gdGhpcy5zbGlkZXIuc3RlcHMoKTtcbiAgICBjb25zdCBzdGVwID0gc3RlcHMgJiYgc3RlcHNbaGFuZGxlSW5kZXhdWzBdO1xuICAgIGlmICghc3RlcCkge1xuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci50b2dnbGVEaXNhYmxlZFN0YXRlQTExeShjb250cm9sQnV0dG9ucy5kZWNyZW1lbnRFbGVtZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEhhbmRsZVZhbHVlKGhhbmRsZUluZGV4KTtcbiAgICB0aGlzLnNsaWRlci5zZXRIYW5kbGUoaGFuZGxlSW5kZXgsIHZhbHVlIC0gc3RlcCk7XG4gICAgdGhpcy5jb25zdHJ1Y3Rvci50b2dnbGVEaXNhYmxlZFN0YXRlQTExeShjb250cm9sQnV0dG9ucy5pbmNyZW1lbnRFbGVtZW50LCB0cnVlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b2dnbGVEaXNhYmxlZFN0YXRlQTExeShidXR0b24sIHJlbW92ZURpc2FibGVkID0gZmFsc2UpIHtcbiAgICBpZiAocmVtb3ZlRGlzYWJsZWQgPT09IHRydWUpIHtcbiAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SGFuZGxlVmFsdWUoaW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnNsaWRlci5nZXQoKTtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlcyA9PT0gJ3N0cmluZycgPyBOdW1iZXIodmFsdWVzKSA6IE51bWJlcih2YWx1ZXNbaW5kZXhdKTtcbiAgfVxuXG4gIGdldEhhbmRsZXNXcmFwcGVyKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5vVWktYmFzZScpO1xuICB9XG5cbiAgZ2V0SGFuZGxlcygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm9VaS1oYW5kbGUnKV07XG4gIH1cblxuICBnZXRTbGlkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVyO1xuICB9XG5cbiAgLy8gdXRpbGl0eSBtZXRob2QgdG8gYWxsb3cgbm9VaVNsaWRlciB0byBjb250cm9sIGRyYWcgZGVhbGVyXG4gIGNvbm5lY3RIb3Jpem9udGFsRHJhZ0RlYWxlcihkcmFnRGVhbGVyKSB7XG4gICAgY29uc3QgYmluZEV2ZW50ID0gZXZlbnQgPT4gdGhpcy5zbGlkZXIub24oZXZlbnQsIHZhbHVlcyA9PiBkcmFnRGVhbGVyLnNldFZhbHVlKHZhbHVlc1swXSAvIDEwMCwgMCwgZmFsc2UpKTtcbiAgICBbJ3VwZGF0ZScsICdzdGFydCcsICdlbmQnXS5mb3JFYWNoKGV2ZW50ID0+IGJpbmRFdmVudChldmVudCkpO1xuICB9XG59XG4iLCJpbXBvcnQgRHhSYW5nZVNsaWRlciBmcm9tICcuLi8uLi9EeFJhbmdlU2xpZGVyL2VzNi9EeFJhbmdlU2xpZGVyJztcbmltcG9ydCB7IGdldFN0aWNreU5hdkhlaWdodFYyLCBldmVudFRyaWdnZXIsIGFkZER4RWxlbWVudExvYWRpbmdTcGlubmVyLCByZW1vdmVEeExvYWRpbmdTcGlubmVyIH0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL2Rldi9qcy91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBpc0JyZWFrcG9pbnRTbWFsbCwgaXNCcmVha3BvaW50TWVkaXVtIH0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL2Rldi9qcy91dGlscy9icm93c2VyRGV0ZWN0aW9uJztcblxuLyogZ2xvYmFsIGpRdWVyeSwgc2l0ZSAqL1xuXG4oKCQsIHdpbmRvdywgZG9jdW1lbnQpID0+IHtcbiAgY29uc3QgRXh0ZXJpb3IzNjAgPSB7XG4gICAgd2lkdGg6IG51bGwsXG4gICAgaGVpZ2h0OiBudWxsLFxuICAgIGRhdGE6IG51bGwsXG4gICAgaW1hZ2VzOiBudWxsLFxuICAgIGN1cnJlbnRJbWFnZTogbnVsbCxcbiAgICBfaXNJbnNpZGVUYWJiZWRDb250YWluZXI6IGZhbHNlLFxuICAgIGhlYWRlckJveEhpZGRlbjogZmFsc2UsXG4gICAgX2R4UmFuZ2VTbGlkZXI6IG51bGwsXG4gICAgaW1hZ2VTaXplOiBpc0JyZWFrcG9pbnRTbWFsbCgpID8gJ21vYmlsZScgOiAnZGVza3RvcCcsXG4gICAgYnJlYWtwb2ludFNtYWxsOiBudWxsLFxuICAgIGJyZWFrcG9pbnRNZWRpdW06IG51bGwsXG4gICAgYnJlYWtwb2ludExhcmdlOiBudWxsLFxuICAgIHNsaWRlclVwZGF0ZUxpbWl0ZXI6IHRydWUsXG4gICAgbG9hZGVkOiBmYWxzZSxcbiAgICByZWN0OiBudWxsLFxuICAgIGNoYW5nZVRvdGFsOiAwLFxuICAgIGltYWdlSW5kZXg6IDEsXG4gICAgbG9hZGVkSW1hZ2VzQ291bnQ6IDAsXG4gICAgbG9hZGVkSW1hZ2VzOiBbXSxcbiAgICBoZWFkZXJCb3g6IG51bGwsXG4gICAgYTExeUxhYmVsczoge30sXG4gICAgbW91c2U6IHtcbiAgICAgIHg6IDAsXG4gICAgICBkb3duOiBmYWxzZSxcbiAgICAgIGxhc3RNb3ZlOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICB9XG4gICAgfSxcbiAgICBpbWFnZU9mZnNldDoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9LFxuICAgIF9ldmVudHM6IHtcbiAgICAgIHN0YXJ0OiBudWxsLFxuICAgICAgc3RvcDogbnVsbCxcbiAgICAgIG1vdmU6IG51bGwsXG4gICAgICB0b3VjaDogdHJ1ZVxuICAgIH0sXG4gICAgdWlTZWxlY3RvcnM6IHtcbiAgICAgIGhlYWRlckJveDogJy5oZWFkZXJCb3gnLFxuICAgICAgcmFuZ2VTbGlkZXJXcmFwcGVyOiAnLkV4dGVyaW9yMzYwX19zbGlkZXInLFxuICAgICAgY2FudmFzQ29udGFpbmVyOiAnLkV4dGVyaW9yMzYwX19jYW52YXMtY29udGFpbmVyJyxcbiAgICAgIGxvYWRCdXR0b25Db250YWluZXI6ICcuRXh0ZXJpb3IzNjBfX2luaXQtY29udGFpbmVyJyxcbiAgICAgIGludGVyYWN0VG9nZ2xlOiAnLkV4dGVyaW9yMzYwX19sb2FkLWJ1dHRvbidcbiAgICB9LFxuXG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMuJGVsZW1lbnQuZGF0YSgnZnJhbWVzJyk7XG4gICAgICB0aGlzLmltYWdlcyA9IHRoaXMuZGF0YVt0aGlzLmltYWdlU2l6ZV07XG4gICAgICB0aGlzLmExMXlMYWJlbHMgPSB7XG4gICAgICAgIHNsaWRlckRlY3JlYXNlOiB0aGlzLiRlbGVtZW50LmF0dHIoJ2RhdGEtbGFiZWwtZGVjcmVhc2Utc2xpZGVyJyksXG4gICAgICAgIHNsaWRlckluY3JlYXNlOiB0aGlzLiRlbGVtZW50LmF0dHIoJ2RhdGEtbGFiZWwtaW5jcmVhc2Utc2xpZGVyJylcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX3NldHVwR29BbmltYXRpb24oKTtcbiAgICAgIHRoaXMuX2NyZWF0ZUNhbnZhcygpO1xuICAgICAgdGhpcy5faGFuZGxlRXZlbnRCaW5kaW5nKCk7XG4gICAgICB0aGlzLl90YWJiZWRDb250YWluZXJCZWhhdmlvdXIoKTtcbiAgICAgIHRoaXMuX3ByZWxvYWRGaXJzdCgpO1xuICAgIH0sXG5cbiAgICBfc2V0dXBHb0FuaW1hdGlvbigpIHtcbiAgICAgIGNvbnN0IGRpcnMgPSBbJ2xlZnQnLCAncmlnaHQnXTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGxldCBsYXN0Q2xhc3MgPSBudWxsO1xuXG4gICAgICBjb25zdCBnbyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy51aSgnaW50ZXJhY3RUb2dnbGUnKS5yZW1vdmVDbGFzcyhsYXN0Q2xhc3MpO1xuICAgICAgICB0aGlzLnVpKCdpbnRlcmFjdFRvZ2dsZScpLmFkZENsYXNzKGRpcnNbaV0pO1xuXG4gICAgICAgIGxhc3RDbGFzcyA9IGRpcnNbaV07XG4gICAgICAgIGkgKz0gMTtcblxuICAgICAgICBpZiAoaSA+PSBkaXJzLmxlbmd0aCkge1xuICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgIHRoaXMuX2FuaW1hdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGdvLmJpbmQodGhpcyksIDIwMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2FuaW1hdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGdvLmJpbmQodGhpcyksIDgwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2FuaW1hdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGdvLmJpbmQodGhpcyksIDgwMCk7XG4gICAgfSxcblxuICAgIF9jcmVhdGVDYW52YXMoKSB7XG4gICAgICBpZiAodGhpcy4kZWxlbWVudC5maW5kKCdjYW52YXMnKSkge1xuICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ2NhbnZhcycpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZCgnRXh0ZXJpb3IzNjBfX2NhbnZhcycpO1xuICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgdGhpcy5jdHgubW96SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gJ2ZhbHNlJztcbiAgICAgIHRoaXMuY3R4LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9ICdmYWxzZSc7XG4gICAgICB0aGlzLmN0eC5tc0ltYWdlU21vb3RoaW5nRW5hYmxlZCA9ICdmYWxzZSc7XG4gICAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSAnZmFsc2UnO1xuICAgICAgdGhpcy51aSgnY2FudmFzQ29udGFpbmVyJykucHJlcGVuZCh0aGlzLmNhbnZhcyk7XG4gICAgICB0aGlzLl9zZXRTaXplKCk7XG4gICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdFeHRlcmlvcjM2MC0tY2FudmFzLWxvYWRlZCcpO1xuICAgIH0sXG5cbiAgICBfaGFuZGxlRXZlbnRCaW5kaW5nKCkge1xuICAgICAgLy8gRWxlbWVudCBFdmVudHNcbiAgICAgIHRoaXMuJGVsZW1lbnQub24oJ2ZpcnN0LWltYWdlLWxvYWRlZCcsIHRoaXMuX2RyYXcuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLnVpKCdpbnRlcmFjdFRvZ2dsZScpLm9uKCd0YXAgY2xpY2snLCB0aGlzLl9zdGFydExvYWRpbmcuYmluZCh0aGlzKSk7XG5cbiAgICAgIC8vIFdpbmRvdyBFdmVudHNcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9zZXRTaXplLmJpbmQodGhpcykpO1xuXG4gICAgICBpZiAoIXRoaXMuZGF0YS5zaG93U2xpZGVyKSB7IHRoaXMuX2JpbmRNb3VzZUV2ZW50cygpOyB9XG4gICAgfSxcblxuICAgIF9iaW5kTW91c2VFdmVudHMoKSB7XG4gICAgICB0aGlzLl9nZXRFdmVudHMoKTtcblxuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudHMuc3RhcnQsIChlKSA9PiB7XG4gICAgICAgIHRoaXMubW91c2UueCA9IHRoaXMuX2dldENvb3JkaW5hdGUoZSwgJ3gnKTtcbiAgICAgICAgdGhpcy5tb3VzZS5sYXN0TW92ZS54ID0gdGhpcy5fZ2V0Q29vcmRpbmF0ZShlLCAneCcpO1xuICAgICAgICB0aGlzLm1vdXNlLmRvd24gPSB0cnVlO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRzLm1vdmUsIChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm1vdXNlLmRvd24pIHtcbiAgICAgICAgICB0aGlzLnNsaWRlclVwZGF0ZUxpbWl0ZXIgPSB0cnVlO1xuICAgICAgICAgIHRoaXMubW91c2UueCA9IHRoaXMuX2dldENvb3JkaW5hdGUoZSwgJ3gnKTtcbiAgICAgICAgICB0aGlzLl9jYWxjdWxhdGVNb3VzZU1vdmVtZW50KCk7XG4gICAgICAgICAgaWYgKHRoaXMubG9hZGVkKSB7IHRoaXMuX3VwZGF0ZUltYWdlKCk7IH1cbiAgICAgICAgICB0aGlzLl9kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2V2ZW50cy5zdG9wLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlVG90YWwgPSAwO1xuICAgICAgICB0aGlzLm1vdXNlLmRvd24gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfdGFiYmVkQ29udGFpbmVyQmVoYXZpb3VyKCkge1xuICAgICAgY29uc3QgdGFiYmVkQ29udGFpbmVyID0gdGhpcy4kZWxlbWVudC5wYXJlbnRzKCcuVGFiYmVkQ29udGFpbmVyJyk7XG4gICAgICB0aGlzLl9pc0luc2lkZVRhYmJlZENvbnRhaW5lciA9ICEhdGFiYmVkQ29udGFpbmVyLmxlbmd0aDtcblxuICAgICAgdGFiYmVkQ29udGFpbmVyLm9uKCd0YWJDaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnVpKCdpbnRlcmFjdFRvZ2dsZScpLnNob3coKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfcHJlbG9hZEZpcnN0KGluZGV4KSB7XG4gICAgICBjb25zdCBjID0gKGluZGV4KSB8fCAxO1xuICAgICAgY29uc3QgaSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaS5zcmMgPSB0aGlzLmltYWdlc1tjXTtcblxuICAgICAgaS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlID0gaTtcbiAgICAgICAgdGhpcy5sb2FkZWRJbWFnZXNbY10gPSBpO1xuICAgICAgICBldmVudFRyaWdnZXIodGhpcy5lbGVtZW50LCAnZmlyc3QtaW1hZ2UtbG9hZGVkJyk7XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBfc3RhcnRMb2FkaW5nKGUpIHtcbiAgICAgIGFkZER4RWxlbWVudExvYWRpbmdTcGlubmVyKHRoaXMudWkoJ2xvYWRCdXR0b25Db250YWluZXInKS5nZXQoMCkpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2xvYWRJbWFnZSgpO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXNlRHhSYW5nZVNsaWRlcigpO1xuICAgICAgfSwgMTAwMCk7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKGUpO1xuICAgIH0sXG5cbiAgICBfaW5pdGlhbGlzZUR4UmFuZ2VTbGlkZXIoKSB7XG4gICAgICBpZiAoIXRoaXMuZGF0YS5zaG93U2xpZGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy51aSgncmFuZ2VTbGlkZXJXcmFwcGVyJylcbiAgICAgICAgLmFkZENsYXNzKCdFeHRlcmlvcjM2MF9fc2xpZGVyLS12aXNpYmxlJylcbiAgICAgICAgLmh0bWwoJzxkaXYgY2xhc3M9XCJEeFJhbmdlU2xpZGVyXCI+PC9kaXY+Jyk7XG4gICAgICBjb25zdCBzbGlkZXIgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5EeFJhbmdlU2xpZGVyJykuZ2V0KDApO1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIHN0ZXA6IDEsXG4gICAgICAgIHRoZW1lOiAnZXh0ZXJpb3IzNjAnLFxuICAgICAgICByYW5nZTogeyBtaW46IDAsIG1heDogdGhpcy5pbWFnZXMubGVuZ3RoIH0sXG4gICAgICAgIGRpcmVjdGlvbjogKHNpdGUucnRsKSA/ICdydGwnIDogJ2x0cicsXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgIGRlY3JlbWVudDogW3RoaXMuYTExeUxhYmVscy5zbGlkZXJEZWNyZWFzZV0sXG4gICAgICAgICAgaW5jcmVtZW50OiBbdGhpcy5hMTF5TGFiZWxzLnNsaWRlckluY3JlYXNlXVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkeFJhbmdlU2xpZGVyID0gbmV3IER4UmFuZ2VTbGlkZXIoc2xpZGVyLCBvcHRpb25zKTtcbiAgICAgIHRoaXMuX2R4UmFuZ2VTbGlkZXIgPSBkeFJhbmdlU2xpZGVyLmdldFNsaWRlcigpO1xuXG4gICAgICB0aGlzLl9keFJhbmdlU2xpZGVyLm9uKCd1cGRhdGUnLCAocG9zaXRpb24pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnNsaWRlclVwZGF0ZUxpbWl0ZXIpIHtcbiAgICAgICAgICB0aGlzLmNoYW5nZVRvdGFsID0gMTsgLy8gU2V0IHRvIGRlY2xhcmUgYSBjaGFuZ2UgYW5kIGhpZGUgdGhlIGhlYWRlcmJveC5cbiAgICAgICAgICBjb25zdCBmcmFtZSA9IE1hdGguY2VpbChwb3NpdGlvblswXSk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB0aGlzLmxvYWRlZEltYWdlc1tmcmFtZV07XG4gICAgICAgICAgdGhpcy5fZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2xpZGVyVXBkYXRlTGltaXRlciA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2R4UmFuZ2VTbGlkZXIub24oJ2VuZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VUb3RhbCA9IDA7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlYWRlckJveCgpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9nZXRDb29yZGluYXRlKGUsIHR5cGUpIHtcbiAgICAgIGlmICh0aGlzLl9ldmVudHMudG91Y2ggJiYgdHlwZSA9PT0gJ3gnKSB7XG4gICAgICAgIHJldHVybiBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2V2ZW50cy50b3VjaCAmJiB0eXBlID09PSAneCcpIHtcbiAgICAgICAgcmV0dXJuIGUuY2xpZW50WDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0sXG5cbiAgICBfaW1hZ2VIYXNMb2FkZWQoKSB7XG4gICAgICB0aGlzLmxvYWRlZEltYWdlc0NvdW50ICs9IDE7XG4gICAgICB0aGlzLl9sb2FkSW1hZ2UoKTtcbiAgICB9LFxuXG4gICAgX2xvYWRJbWFnZSgpIHtcbiAgICAgIGlmICh0aGlzLmxvYWRlZEltYWdlc0NvdW50IDwgdGhpcy5pbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmxvYWRlZEltYWdlc0NvdW50O1xuICAgICAgICB0aGlzLmxvYWRlZEltYWdlc1tjXSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxvYWRlZEltYWdlc1tjXS5vbmxvYWQgPSB0aGlzLl9pbWFnZUhhc0xvYWRlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxvYWRlZEltYWdlc1tjXS5zcmMgPSB0aGlzLmltYWdlc1tjXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgcmVtb3ZlRHhMb2FkaW5nU3Bpbm5lcih0aGlzLnVpKCdsb2FkQnV0dG9uQ29udGFpbmVyJykuZ2V0KDApKTtcbiAgICAgICAgdGhpcy51aSgnaW50ZXJhY3RUb2dnbGUnKS5oaWRlKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9nZXRFdmVudHMoKSB7XG4gICAgICBjb25zdCBpc1RvdWNoRGV2aWNlID0gJCgnaHRtbCcpLmhhc0NsYXNzKCd0b3VjaENhcGFiaWxpdHknKTtcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHtcbiAgICAgICAgc3RhcnQ6IChpc1RvdWNoRGV2aWNlKSA/ICd0b3VjaHN0YXJ0JyA6ICdtb3VzZWRvd24nLFxuICAgICAgICBzdG9wOiAoaXNUb3VjaERldmljZSkgPyAndG91Y2hlbmQnIDogJ21vdXNldXAnLFxuICAgICAgICBtb3ZlOiAoaXNUb3VjaERldmljZSkgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnLFxuICAgICAgICB0b3VjaDogISEoaXNUb3VjaERldmljZSksXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBfc2V0U2l6ZSgpIHtcbiAgICAgIHRoaXMuYnJlYWtwb2ludFNtYWxsID0gaXNCcmVha3BvaW50U21hbGwoKTtcbiAgICAgIHRoaXMuYnJlYWtwb2ludE1lZGl1bSA9IGlzQnJlYWtwb2ludE1lZGl1bSgpO1xuICAgICAgdGhpcy5icmVha3BvaW50TGFyZ2UgPSAhaXNCcmVha3BvaW50TWVkaXVtKCkgJiYgIWlzQnJlYWtwb2ludFNtYWxsKCk7XG4gICAgICB0aGlzLndpZHRoID0gJCgnYm9keScpLmlubmVyV2lkdGgoKTtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gZ2V0U3RpY2t5TmF2SGVpZ2h0VjIodGhpcy4kZWxlbWVudC5vZmZzZXQoKS50b3AsIGZhbHNlKTtcblxuICAgICAgLy8gcmVzZXQgb2Zmc2V0c1xuICAgICAgdGhpcy5pbWFnZU9mZnNldC55ID0gMDtcbiAgICAgIHRoaXMuaW1hZ2VPZmZzZXQueCA9IDA7XG5cbiAgICAgIC8vIGdldCAxNjo5IHNpemUgYmFzZWQgb2ZmIG9mIHdpbmRvdyB3aWR0aFxuICAgICAgdGhpcy5jYWxjdWxhdGVkV2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgdGhpcy5jYWxjdWxhdGVkSGVpZ2h0ID0gTWF0aC5yb3VuZCgodGhpcy5jYWxjdWxhdGVkV2lkdGggLyAxNikgKiA5KTtcblxuICAgICAgLy8gYWx3YXlzIHN0YXkgMTY6OSBvbiBtb2JpbGVcbiAgICAgIGlmICghdGhpcy5icmVha3BvaW50U21hbGwgJiYgIXRoaXMuYnJlYWtwb2ludE1lZGl1bSkge1xuICAgICAgICAvLyBoZWlnaHQgb2YgZWxlbWVudCBvbiBwYWdlIGlzIGxlc3MgdGhhbiB0aGUgY2FsY3VsYXRlZCBpbWFnZSBoZWlnaHQgJiBhZGp1c3Qgb2Zmc2V0IGFjY29yZGluZ2x5XG5cbiAgICAgICAgaWYgKHRoaXMuaGVpZ2h0IDwgdGhpcy5jYWxjdWxhdGVkSGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5pbWFnZU9mZnNldC55ID0gTWF0aC5yb3VuZCgodGhpcy5oZWlnaHQgLSB0aGlzLmNhbGN1bGF0ZWRIZWlnaHQpIC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYWxjdWxhdGVkSGVpZ2h0IDwgdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAvLyBpZiBjYWxjdWxhdGVkIGhlaWdodCBvZiBpbWFnZSB3aWxsIG5vdCBjb3ZlciBhcmVhLCBzZXQgaGVpZ2h0IG9mIGltYWdlIHRvIGhlaWdodCBvZiBlbGVtZW50XG5cbiAgICAgICAgICB0aGlzLmNhbGN1bGF0ZWRIZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgICB0aGlzLmNhbGN1bGF0ZWRXaWR0aCA9IE1hdGgucm91bmQoKHRoaXMuaGVpZ2h0IC8gOSkgKiAxNik7XG5cbiAgICAgICAgICB0aGlzLmltYWdlT2Zmc2V0LnggPSAtTWF0aC5yb3VuZCgoKHRoaXMuY2FsY3VsYXRlZFdpZHRoIC0gdGhpcy53aWR0aCkgLyAyKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMud2lkdGggLyAxNikgKiA5O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcblxuICAgICAgaWYgKHRoaXMudGFiYmVkQ29udGFpbmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5icmVha3BvaW50U21hbGwpIHtcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LmhlaWdodCh0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRGVsYXkgaGVpZ2h0IGNhbGN1bGF0aW9uIHRvIGVuc3VyZSBoZWFkZXJCb3ggaGFzIGZpbmlzaGVkIHJlbmRlcmluZyAtIExSQS0xMzg4MlxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5oZWlnaHQodGhpcy5oZWlnaHQgKyB0aGlzLnVpKCdoZWFkZXJCb3gnKS5oZWlnaHQoKSk7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9kcmF3KCk7XG4gICAgICB0aGlzLl9jZW50ZXJIZWFkZXJCb3goKTtcbiAgICB9LFxuXG4gICAgX2NhbGN1bGF0ZU1vdXNlTW92ZW1lbnQoKSB7XG4gICAgICBjb25zdCByZWFsWCA9IHRoaXMubW91c2UueCAtIHRoaXMucmVjdC5sZWZ0O1xuICAgICAgdGhpcy5jaGFuZ2VUb3RhbCArPSByZWFsWCAtIHRoaXMubW91c2UubGFzdE1vdmUueDtcbiAgICAgIHRoaXMubW91c2UubGFzdE1vdmUueCA9IHJlYWxYO1xuICAgIH0sXG5cbiAgICBfZHJhd0NhbnZhc0ltYWdlKCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudEltYWdlKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmN1cnJlbnRJbWFnZSwgdGhpcy5pbWFnZU9mZnNldC54LCB0aGlzLmltYWdlT2Zmc2V0LnksIHRoaXMuY2FsY3VsYXRlZFdpZHRoLCB0aGlzLmNhbGN1bGF0ZWRIZWlnaHQpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfdXBkYXRlQ3VycmVudEltYWdlKCkge1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB0aGlzLmxvYWRlZEltYWdlc1t0aGlzLmltYWdlSW5kZXhdO1xuICAgIH0sXG5cbiAgICBfY2VudGVySGVhZGVyQm94KCkge1xuICAgICAgaWYgKCF0aGlzLmJyZWFrcG9pbnRTbWFsbCkge1xuICAgICAgICB0aGlzLnVpKCdoZWFkZXJCb3gnKS53aWR0aCgnYXV0bycpLmhlaWdodCgnYXV0bycpLkhlYWRlckJveCgpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlckJveEhlaWdodCA9IHRoaXMudWkoJ2hlYWRlckJveCcpLmhlaWdodCgpO1xuICAgICAgICBjb25zdCBoZWFkZXJQb3MgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC0gaGVhZGVyQm94SGVpZ2h0KSAvIDI7XG5cbiAgICAgICAgdGhpcy51aSgnaGVhZGVyQm94JykuY3NzKHsgdG9wOiBoZWFkZXJQb3MgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Bvc2l0aW9uQ29udGVudCgpO1xuICAgIH0sXG5cbiAgICBfcG9zaXRpb25Db250ZW50KCkge1xuICAgICAgbGV0IGxlZnQgPSAnJztcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDE0MDAgJiYgIXRoaXMuYnJlYWtwb2ludFNtYWxsICYmIHRoaXMudWkoJ2hlYWRlckJveCcpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBsZWZ0ID0gKCh0aGlzLnVpKCdoZWFkZXJCb3gnKS5vZmZzZXQoKS5sZWZ0ICsgdGhpcy51aSgnaGVhZGVyQm94Jykud2lkdGgoKSkgLSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpLmxlZnQpICsgKCh0aGlzLiRlbGVtZW50LndpZHRoKCkgLSAoKHRoaXMudWkoJ2hlYWRlckJveCcpLm9mZnNldCgpLmxlZnQgKyB0aGlzLnVpKCdoZWFkZXJCb3gnKS53aWR0aCgpKSAtIHRoaXMuJGVsZW1lbnQub2Zmc2V0KCkubGVmdCkpIC8gMik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudWkoJ2xvYWRCdXR0b25Db250YWluZXInKS5jc3MoeyBsZWZ0IH0pO1xuICAgIH0sXG5cbiAgICBfcmVzZXRIZWFkZXJCb3goKSB7XG4gICAgICB0aGlzLmhlYWRlckJveEhpZGRlbiA9IGZhbHNlO1xuICAgICAgdGhpcy51aSgnaGVhZGVyQm94Jykuc2hvdygpO1xuICAgICAgdGhpcy51aSgnaGVhZGVyQm94JykudHJhbnNpdGlvbih7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiA0MDAgfSwgJ2Vhc2UnKTtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZUhlYWRlckJveCgpIHtcbiAgICAgIGlmICghdGhpcy5icmVha3BvaW50U21hbGwpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlVG90YWwgIT09IDAgJiYgIXRoaXMuaGVhZGVyQm94SGlkZGVuKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJCb3hIaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIHRoaXMudWkoJ2hlYWRlckJveCcpLnRyYW5zaXRpb24oeyBvcGFjaXR5OiAwIH0sIDQwMCwgJ2Vhc2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpKCdoZWFkZXJCb3gnKS5oaWRlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5oZWFkZXJCb3hIaWRkZW4pIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5oZWFkZXJCb3hUaW1lb3V0KTtcbiAgICAgICAgICB0aGlzLmhlYWRlckJveFRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuX3Jlc2V0SGVhZGVyQm94LmJpbmQodGhpcyksIDIwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIF91cGRhdGVJbWFnZSgpIHtcbiAgICAgIGlmICh0aGlzLmNoYW5nZVRvdGFsID4gMjAgfHwgdGhpcy5jaGFuZ2VUb3RhbCA8IC0yMCkge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb25hbENoZWNrID0gTWF0aC5zaWduKHRoaXMuY2hhbmdlVG90YWwpO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlVG90YWwgPSAwO1xuICAgICAgICB0aGlzLmltYWdlSW5kZXggPSAoZGlyZWN0aW9uYWxDaGVjayA9PT0gMSkgPyB0aGlzLmltYWdlSW5kZXggKyAxIDogdGhpcy5pbWFnZUluZGV4IC0gMTtcblxuICAgICAgICBpZiAodGhpcy5pbWFnZUluZGV4ID49IHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuaW1hZ2VJbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZUluZGV4IDw9IDApIHtcbiAgICAgICAgICB0aGlzLmltYWdlSW5kZXggPSB0aGlzLmltYWdlcy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl91cGRhdGVDdXJyZW50SW1hZ2UoKTtcbiAgICAgICAgdGhpcy5fZHhSYW5nZVNsaWRlci5zZXQodGhpcy5pbWFnZUluZGV4KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2RyYXcoKSB7XG4gICAgICB0aGlzLnJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgdGhpcy5fZHJhd0NhbnZhc0ltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVIZWFkZXJCb3goKTtcblxuICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmYzAwY2YnO1xuICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH0sXG5cbiAgICBfZGVidWcoKSB7XG4gICAgICBjb25zdCBkZWJ1Z1ZhcnMgPSB7XG4gICAgICAgIG1vdXNlWDogdGhpcy5tb3VzZS54LFxuICAgICAgICBtb3VzZVk6IHRoaXMubW91c2UueSxcbiAgICAgICAgbW91c2Vkb3duOiB0aGlzLm1vdXNlLmRvd24sXG4gICAgICAgIGFjdHVhbE1vdXNlWDogdGhpcy5tb3VzZS54IC0gdGhpcy5yZWN0LmxlZnQsXG4gICAgICAgIGFjdHVhbE1vdXNlWTogdGhpcy5tb3VzZS55IC0gdGhpcy5yZWN0LnRvcCxcbiAgICAgICAgY2hhbmdlVG90YWw6IHRoaXMuY2hhbmdlVG90YWwsXG4gICAgICAgIGxvYWRlZEltYWdlc0NvdW50OiB0aGlzLmxvYWRlZEltYWdlc0NvdW50LFxuICAgICAgICBjdXJzb3JBbHBoYTogdGhpcy5jdXJzb3JBbHBoYVxuICAgICAgfTtcblxuICAgICAgbGV0IGkgPSAxO1xuICAgICAgT2JqZWN0LmtleXMoZGVidWdWYXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJzE4cHggR2VvcmdpYSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke2tleX06ICR7ZGVidWdWYXJzW2tleV19YCwgMTAsIGkgKiAyMCk7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBqUXVlcnkuY3JlYXRlQ29tcG9uZW50KCdFeHRlcmlvcjM2MCcsIEV4dGVyaW9yMzYwKTtcblxuICAkKCcuRXh0ZXJpb3IzNjAnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgY29uc3QgY29tcCA9ICQoZWxlbWVudCk7XG4gICAgaWYgKCFjb21wLnBhcmVudHMoJy5UYWJiZWRDb250YWluZXInKS5sZW5ndGgpIHtcbiAgICAgIGNvbXAuRXh0ZXJpb3IzNjAoKTtcbiAgICB9XG4gIH0pO1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcbiIsImV4cG9ydCBjb25zdCBLZXlDb2RlID0ge1xuICBCQUNLU1BBQ0U6IDgsXG4gIERFTEVURTogNDYsXG4gIERPV046IDQwLFxuICBFTkQ6IDM1LFxuICBFU0M6IDI3LFxuICBIT01FOiAzNixcbiAgTEVGVDogMzcsXG4gIFBBR0VfRE9XTjogMzQsXG4gIFBBR0VfVVA6IDMzLFxuICBSRVRVUk46IDEzLFxuICBSSUdIVDogMzksXG4gIFNQQUNFOiAzMixcbiAgVEFCOiA5LFxuICBVUDogMzhcbn07XG4iLCJleHBvcnQgY29uc3QgYnJlYWtwb2ludHMgPSB7XG4gIHNtYWxsOiA3NDAsXG4gIG1lZGl1bTogOTAwLFxuICB3aWRlcjogMTAwMCxcbiAgY3VycmVudDogbnVsbFxufTtcblxuZXhwb3J0IGNvbnN0IGdldERldmljZU9yaWVudGF0aW9uID0gKCkgPT4ge1xuICBjb25zdCAkd2luZG93ID0gJCh3aW5kb3cpO1xuICByZXR1cm4gJHdpbmRvdy53aWR0aCgpID4gJHdpbmRvdy5oZWlnaHQoKSA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0Jztcbn07XG5cbmNvbnN0IGdldExhcmdlckJyZWFrcG9pbnQgPSB3aWR0aCA9PiAoXG4gIHdpZHRoIDw9IGJyZWFrcG9pbnRzLm1lZGl1bSA/ICdtZWRpdW0nIDogJ2xhcmdlJ1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldEJyZWFrcG9pbnRTaXplID0gKG9sZENhbGMgPSB0cnVlKSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gb2xkQ2FsYyA/ICQod2luZG93KS53aWR0aCgpIDogd2luZG93LmlubmVyV2lkdGg7XG4gIHJldHVybiAod2lkdGggPD0gYnJlYWtwb2ludHMuc21hbGwpID8gJ3NtYWxsJyA6IGdldExhcmdlckJyZWFrcG9pbnQod2lkdGgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzQnJlYWtwb2ludFNtYWxsID0gKG9sZENhbGMgPSB0cnVlKSA9PiB7XG4gIHJldHVybiBnZXRCcmVha3BvaW50U2l6ZShvbGRDYWxjKSA9PT0gJ3NtYWxsJztcbn07XG5cbmV4cG9ydCBjb25zdCBpc0JyZWFrcG9pbnRNZWRpdW0gPSAob2xkQ2FsYyA9IHRydWUpID0+IHtcbiAgcmV0dXJuIGdldEJyZWFrcG9pbnRTaXplKG9sZENhbGMpID09PSAnbWVkaXVtJztcbn07XG5cbmV4cG9ydCBjb25zdCBpc01vYmlsZURldmljZSA9ICgpID0+IHtcbiAgcmV0dXJuICgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2ggfHwgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59O1xuXG5leHBvcnQgY29uc3QgaXNOb3RNb2JpbGVEZXZpY2UgPSAoKSA9PiB7XG4gIHJldHVybiAhaXNNb2JpbGVEZXZpY2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1RhYmxldERldmljZSA9ICgpID0+IHtcbiAgcmV0dXJuIC8oaXBhZHx0YWJsZXR8KGFuZHJvaWQoPyEuKm1vYmlsZSkpfCh3aW5kb3dzKD8hLipwaG9uZSkoLip0b3VjaCkpfGtpbmRsZXxwbGF5Ym9va3xzaWxrfChwdWZmaW4oPyEuKihJUHxBUHxXUCkpKSkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0lPUyA9ICgpID0+IHtcbiAgcmV0dXJuICgvKGlwYWR8aXBob25lfGlwb2QpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc05vdElPUyA9ICgpID0+IHtcbiAgcmV0dXJuICFpc0lPUygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzV2luZG93c1Bob25lID0gKCkgPT4ge1xuICByZXR1cm4gKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aW5kb3dzIHBob25lJykgIT09IC0xKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbmRyb2lkVmVyc2lvbiA9ICgpID0+IHtcbiAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gIGlmICh1YS5pbmRleE9mKCdBbmRyb2lkJykgPj0gMCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHVhLnNsaWNlKHVhLmluZGV4T2YoJ0FuZHJvaWQnKSArIDgpKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRCcm93c2VyVXNlckFnZW50ID0gKCkgPT4ge1xuICBjb25zdCB7IHVzZXJBZ2VudCB9ID0gbmF2aWdhdG9yO1xuICByZXR1cm4gdXNlckFnZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGRldGVjdEJyb3dzZXJzID0gKCkgPT4ge1xuICBjb25zdCB1c2VyQWdlbnQgPSBnZXRCcm93c2VyVXNlckFnZW50KCk7XG4gIGNvbnN0IGJyb3dzZXJzID0ge1xuICAgIGlzQ2hyb21lOiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPiAtMSxcbiAgICBpc01zRWRnZTogdXNlckFnZW50LmluZGV4T2YoJ0VkZ2UnKSA+IC0xLFxuICAgIGlzRXhwbG9yZXI6IHVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgPiAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpID4gLTEsIC8vIE1TSUUgPSBJRTEwIGFuZCBiZWxvdywgVHJpZGVudCA9IElFMTFcbiAgICBpc0ZpcmVmb3g6IHVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMSxcbiAgICBpc1NhZmFyaTogdXNlckFnZW50LmluZGV4T2YoJ1NhZmFyaScpID4gLTEsXG4gICAgaXNPcGVyYTogdXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignb3AnKSA+IC0xXG4gIH07XG5cbiAgaWYgKGJyb3dzZXJzLmlzQ2hyb21lICYmIGJyb3dzZXJzLmlzU2FmYXJpKSB7XG4gICAgYnJvd3NlcnMuaXNTYWZhcmkgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChicm93c2Vycy5pc0Nocm9tZSAmJiBicm93c2Vycy5pc09wZXJhKSB7XG4gICAgYnJvd3NlcnMuaXNDaHJvbWUgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBicm93c2Vycztcbn07XG5cbmV4cG9ydCBjb25zdCBpc0llID0gKCkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTGlzdC5jb250YWlucygnaWUnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc01zRWRnZSA9ICgpID0+IHtcbiAgcmV0dXJuIGRldGVjdEJyb3dzZXJzKCkuaXNNc0VkZ2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNJZTExID0gKCkgPT4ge1xuICByZXR1cm4gKCF3aW5kb3cuQWN0aXZlWE9iamVjdCAmJiAnQWN0aXZlWE9iamVjdCcgaW4gd2luZG93KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRWaWV3cG9ydFNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IHRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICB0ZXN0LnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246IGZpeGVkO3RvcDogMDtsZWZ0OiAwO2JvdHRvbTogMDtyaWdodDogMDsnO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRlc3QsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5maXJzdENoaWxkKTtcblxuICBjb25zdCBkaW1zID0geyB3aWR0aDogdGVzdC5vZmZzZXRXaWR0aCwgaGVpZ2h0OiB0ZXN0Lm9mZnNldEhlaWdodCB9O1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGVzdCk7XG5cbiAgcmV0dXJuIGRpbXM7XG59O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsVG9FbGVtZW50ID0gKGVsZW1lbnQsIG9wdGlvbnMsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0ICRlbGVtZW50ID0gZWxlbWVudCBpbnN0YW5jZW9mIGpRdWVyeSA/IGVsZW1lbnQgOiAkKGVsZW1lbnQpO1xuXG4gIC8vIE9wdGlvbnMgYXJlIG9wdGlvbmFsXG4gIGxldCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBTZXQgZGVmYXVsdHNcbiAgb3B0cyA9ICQuZXh0ZW5kKHtcbiAgICBhZGp1c3RtZW50OiAwLFxuICAgIGVhc2U6ICdlYXNlT3V0U2luZScsXG4gICAgZHVyYXRpb246IDgwMCxcbiAgICBjb250YWluZXI6ICQoJ2JvZHksIGh0bWwnKVxuICB9LCBvcHRzKTtcblxuICAvLyBIYXMgYW4gZWxlbWVudCBiZWVuIHN1cHBsaWVkP1xuICBpZiAoJGVsZW1lbnQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gU2Nyb2xsIHRvIHRoZSB0YXJnZXQgZWxlbWVudCBhbGxvd2luZyBmb3IgdGhlIHV0aWxpdHkgbWVudVxuICBvcHRzLmNvbnRhaW5lci5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgc2Nyb2xsVG9wOiAkZWxlbWVudC5vZmZzZXQoKS50b3AgLSBvcHRzLmFkanVzdG1lbnRcbiAgfSwgb3B0cy5kdXJhdGlvbiwgb3B0cy5lYXNlLCAoKSA9PiB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gRm9yIHVuaXQgdGVzdHNcbiAgcmV0dXJuIG9wdHM7XG59O1xuXG4vKipcbiAqIERldGVjdCBNb2Rlcm4gQnJvd3NlciBieSBhdmFpbGFiaWxpdHkgb2YgQmlnSW50IGZlYXR1cmUuXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGhhc0JpZ0ludFN1cHBvcnQgPSAoKSA9PiB7XG4gIHJldHVybiAodHlwZW9mIEJpZ0ludCA9PT0gJ2Z1bmN0aW9uJyk7XG59O1xuIiwiLy8gdXNhZ2U6IHdyYXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYS53cmFwX21lJyksIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbmV4cG9ydCBjb25zdCB3cmFwID0gKGVsLCB3cmFwcGVyKSA9PiB7XG4gIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChlbCk7XG59O1xuXG4vLyB1c2FnZTogdW53cmFwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EudW53cmFwX21lJykpO1xuZXhwb3J0IGNvbnN0IHVud3JhcCA9IChlbCkgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICB3aGlsZSAoZWwuZmlyc3RDaGlsZCkge1xuICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZWwuZmlyc3RDaGlsZCwgZWwpO1xuICB9XG4gIHBhcmVudC5yZW1vdmVDaGlsZChlbCk7XG59O1xuXG5cbi8vIHdyYXBBbGw6IHJlcGxpY2F0ZXMgalF1ZXJ5J3MgJC53cmFwQWxsKCkgZm9yIG5vbi1qUXVlcnkgZWxlbWVudChzKSwgZXhhbXBsZSB1c2FnZTpcbi8vICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICB3cmFwQWxsKGNvbXBvbmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0b3InKSwgd3JhcHBlcik7XG5leHBvcnQgY29uc3Qgd3JhcEFsbCA9IChlbGVtZW50cywgd3JhcHBlcikgPT4ge1xuICBjb25zdCBjcmVhdGVBcnJheSA9IChlbCkgPT4ge1xuICAgIHJldHVybiBlbCBpbnN0YW5jZW9mIE5vZGVMaXN0ID8gWy4uLmVsXSA6IFtlbF07XG4gIH07XG4gIGNvbnN0IGVsZW1lbnRzQXJyYXkgPSBjcmVhdGVBcnJheShlbGVtZW50cyk7XG4gIGlmICghZWxlbWVudHNBcnJheS5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcGFyZW50ID0gZWxlbWVudHNBcnJheVswXS5wYXJlbnROb2RlO1xuICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnRzQXJyYXlbMF0pO1xuICBlbGVtZW50c0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcbn07XG5cbi8vIEpTIHJlcGxhY2VtZW50IGZvciBqUXVlcnkgJC5hZnRlcigpXG5leHBvcnQgY29uc3QgaW5zZXJ0QWZ0ZXIgPSAoYmVmb3JlLCBhZnRlcikgPT4gYmVmb3JlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGFmdGVyLCBiZWZvcmUubmV4dFNpYmxpbmcpO1xuXG4vLyBKUyByZXBsYWNlbWVudCBmb3IgalF1ZXJ5ICQuYmVmb3JlKClcbmV4cG9ydCBjb25zdCBpbnNlcnRCZWZvcmUgPSAoYWZ0ZXIsIGJlZm9yZSkgPT4gYWZ0ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYmVmb3JlLCBhZnRlcik7XG4iLCIvKiBnbG9iYWwgYXBwUmVhZHlUaW1lciAqL1xuXG5pbXBvcnQgeyBpc0JyZWFrcG9pbnRTbWFsbCwgZ2V0QnJlYWtwb2ludFNpemUgfSBmcm9tICcuL2Jyb3dzZXJEZXRlY3Rpb24nO1xuaW1wb3J0IHsgS2V5Q29kZSB9IGZyb20gJy4vYXJpYSc7XG5cbmNvbnN0ICRuYXZIZWFkZXIgPSAkKCcjaGVhZGVyLCAuZHhuYXYtaGVhZGVyJyk7XG5leHBvcnQgY29uc3Qgc3RpY2t5TmF2aWdhdGlvbkVuYWJsZWQgPSAkbmF2SGVhZGVyLmF0dHIoJ2RhdGEtbmF2LXR5cGUnKSA9PT0gJ3N0aWNreSc7XG5leHBvcnQgY29uc3Qgc3RpY2t5TmF2aWdhdGlvblRyYW5zaXRpb25Qb2ludCA9IDIwMDtcbmNvbnN0IHRlbXBsYXRlQ2FjaGUgPSB7fTtcblxuZXhwb3J0IGNvbnN0IGdvb2dsZU1hcFN0eWxlcyA9IFtcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAnYWRtaW5pc3RyYXRpdmUubG9jYWxpdHknLFxuICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIGNvbG9yOiAnIzY2NjY2NidcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdsYW5kc2NhcGUubWFuX21hZGUnLFxuICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIGNvbG9yOiAnI2Y4ZjZmNCdcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdwb2knLFxuICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgdmlzaWJpbGl0eTogJ29mZidcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxuICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIGNvbG9yOiAnI2FmYWJhNCdcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxuICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuc3Ryb2tlJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgY29sb3I6ICcjZTZlNmU2J1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXG4gICAgZWxlbWVudFR5cGU6ICdsYWJlbHMnLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBzYXR1cmF0aW9uOiAtMTVcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXkuY29udHJvbGxlZF9hY2Nlc3MnLFxuICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIGNvbG9yOiAnI2FmYWJhNCdcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXkuY29udHJvbGxlZF9hY2Nlc3MnLFxuICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLmljb24nLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBzYXR1cmF0aW9uOiAtMTAwXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAncm9hZC5sb2NhbCcsXG4gICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5maWxsJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgY29sb3I6ICcjZmZmZmZmJ1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQubG9jYWwnLFxuICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLmljb24nLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBzYXR1cmF0aW9uOiAnNzcnXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdCcsXG4gICAgZWxlbWVudFR5cGU6ICdsYWJlbHMuaWNvbicsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIHNhdHVyYXRpb246ICctMTAwJ1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcbiAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LmZpbGwnLFxuICAgIHN0eWxlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjYzVkN2RlJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGlnaHRuZXNzOiAtOVxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IGlzUnRsID0gKCkgPT4ge1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXTtcbiAgcmV0dXJuIGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdydGwnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDYWNoZWRTY3JpcHQgPSAodXJsLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IG5ld09wdGlvbnMgPSAkLmV4dGVuZChvcHRpb25zIHx8IHt9LCB7XG4gICAgZGF0YVR5cGU6ICdzY3JpcHQnLFxuICAgIGNhY2hlOiB0cnVlLFxuICAgIHVybFxuICB9KTtcblxuICByZXR1cm4gJC5hamF4KG5ld09wdGlvbnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEhlaWdodCA9IChlbGVtKSA9PiB7XG4gIHJldHVybiAoZWxlbSA/IGVsZW0uY2xpZW50SGVpZ2h0IDogMCk7XG59O1xuXG4vLyBtYWtlIHN1cmUgdG8gcGFzcyAnb2xkQ2FsY3VsYXRpb24gPSBmYWxzZScgdG8gdXNlIHRoZSBuZXcgcmVmaW5lZCBjYWxjdWxhdGlvblxuLy8gb3IgdXNlIGdldFN0aWNreU5hdkhlaWdodFYyKClcbmV4cG9ydCBjb25zdCBnZXRTdGlja3lOYXZIZWlnaHQgPSAoeVBvcywgb2xkQ2FsY3VsYXRpb24gPSB0cnVlKSA9PiB7XG4gIGNvbnN0IHlQb3NpdGlvbiA9IHR5cGVvZiB5UG9zICE9PSAnbnVtYmVyJyA/IDAgOiB5UG9zO1xuICBjb25zdCBzaGFyZWRIZWFkZXIgPSAkKCcuZHhuYXYtaGVhZGVyJyk7XG4gIGNvbnN0ICRoZWFkZXIgPSBzaGFyZWRIZWFkZXIubGVuZ3RoID8gc2hhcmVkSGVhZGVyIDogJCgnI2hlYWRlcicpO1xuICBjb25zdCAkaW5QYWdlTmF2ID0gJCgnLkluUGFnZU5hdmlnYXRpb24nKTtcbiAgY29uc3QgJGluUGFnZU5hdlN0aWNreSA9ICQoJy5JblBhZ2VOYXZpZ2F0aW9uLS1zdGlja3knKTtcbiAgY29uc3QgJGluUGFnZU5hdkJhciA9ICQoJy5JblBhZ2VOYXZpZ2F0aW9uX19iYXInKTtcbiAgY29uc3QgZHhOYXZQcmltYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR4bmF2X19wcmltYXJ5Jyk7XG4gIGNvbnN0IGJyZWFrcG9pbnQgPSBnZXRCcmVha3BvaW50U2l6ZSgpO1xuICBjb25zdCBjaGVja1N0aWNreU5hdiA9ICRoZWFkZXIubGVuZ3RoID4gMCA/ICRoZWFkZXIuY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnIDogZmFsc2U7XG4gIGNvbnN0IGluUGFnZU5hdlRvcCA9ICRpblBhZ2VOYXYubGVuZ3RoID4gMCA/ICRpblBhZ2VOYXYub2Zmc2V0KCkudG9wIDogbnVsbDtcbiAgY29uc3QgaXNTdGlja3lOYXYgPSBzaGFyZWRIZWFkZXIubGVuZ3RoID8gdHJ1ZSA6IGNoZWNrU3RpY2t5TmF2O1xuICBsZXQgaGVpZ2h0ID0gMDtcblxuICBpZiAoIWlzU3RpY2t5TmF2KSB7XG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIC8vIGhhcmQgY29kaW5nIHZhbHVlcyBoZXJlIHRvIHByZXZlbnQgaGF2aW5nIHRvIHJlcGVhdGVkbHkgY2xvbmUgYW5kIG1lYXN1cmUgdGhlIGhlYWRlclxuICBjb25zdCBvbGROYXZCcmVha3BvaW50ID0gOTYwO1xuXG4gIC8vIGFkZGVkICRpblBhZ2VOYXYuY3NzKCdkaXNwbGF5JykgY2hlY2sgZm9yIExSQS0xMDg1MVxuICBpZiAoaW5QYWdlTmF2VG9wICE9PSBudWxsICYmIHlQb3NpdGlvbiA+PSBpblBhZ2VOYXZUb3AgJiYgYnJlYWtwb2ludCA9PT0gJ2xhcmdlJyAmJiAkaW5QYWdlTmF2LmNzcygnZGlzcGxheScpICE9PSAnbm9uZScpIHtcbiAgICByZXR1cm4gJGluUGFnZU5hdi5vdXRlckhlaWdodCgpO1xuICB9XG5cbiAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAvLyB0aGlzIGlzIHRoZSBvbGQgbmF2aWdhdGlvbiwgb25seSBzaG93biB3aGVuIE5hYVMgaXMgZG93biwgaGFyZCBjb2RpbmcgdmFsdWVzIHRvIHByZXZlbnQgaGF2aW5nIHRvIGNsb25lL21lYXN1cmUgdGhlIERPTSBlbGVtZW50cyBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuICBjb25zdCBnZXROYXZpZ2F0aW9uSGVpZ2h0ID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3dXaWR0aCA+PSBvbGROYXZCcmVha3BvaW50ICYmIHlQb3NpdGlvbiA8IDIwMCkge1xuICAgICAgcmV0dXJuIDEwNjtcbiAgICB9XG4gICAgcmV0dXJuIDUwO1xuICB9O1xuXG4gIGNvbnN0IGdldE5hYVNIZWlnaHQgPSAob2xkKSA9PiB7XG4gICAgbGV0IHByaW1hcnlOYXZIZWlnaHQ7XG5cbiAgICBpZiAob2xkKSB7XG4gICAgICBwcmltYXJ5TmF2SGVpZ2h0ID0gZ2V0SGVpZ2h0KGR4TmF2UHJpbWFyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByaW1hcnlOYXZIZWlnaHQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR4bmF2LXNjcm9sbERvd24nKSA9PT0gbnVsbCAmJiAhJGluUGFnZU5hdlN0aWNreS5sZW5ndGgpID8gZ2V0SGVpZ2h0KGR4TmF2UHJpbWFyeSkgKyBwYXJzZUludChzaGFyZWRIZWFkZXIuY3NzKCd0b3AnKSwgMTApIDogMDtcbiAgICB9XG5cbiAgICBsZXQgYnJlYWRjcnVtYk5hdkhlaWdodCA9IGdldEhlaWdodChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHhuYXZfX2JyZWFkY3J1bWJzLWNvbnRhaW5lcicpKTtcbiAgICBjb25zdCBub3RpZmljYXRpb25IZWlnaHQgPSBnZXRIZWlnaHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbkJhcnNXcmFwcGVyJykpO1xuICAgIGxldCBpblBhZ2VOYXZpZ2F0aW9uSGVpZ2h0ID0gMDtcbiAgICBpZiAoJGluUGFnZU5hdi5sZW5ndGgpIHtcbiAgICAgIGlmICgkaW5QYWdlTmF2U3RpY2t5Lmxlbmd0aCkge1xuICAgICAgICBicmVhZGNydW1iTmF2SGVpZ2h0ID0gMDtcbiAgICAgICAgaWYgKHBhcnNlSW50KCRpblBhZ2VOYXZCYXIuY3NzKCd0b3AnKSwgMTApID09PSAwKSB7XG4gICAgICAgICAgaW5QYWdlTmF2aWdhdGlvbkhlaWdodCA9ICRpblBhZ2VOYXYuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQoJGluUGFnZU5hdkJhci5jc3MoJ3RvcCcpLCAxMCkgPCAwKSB7XG4gICAgICAgICAgaW5QYWdlTmF2aWdhdGlvbkhlaWdodCA9IE1hdGgubWF4KCRpblBhZ2VOYXYub3V0ZXJIZWlnaHQoKSArIHBhcnNlSW50KCRpblBhZ2VOYXZCYXIuY3NzKCd0b3AnKSwgMTApLCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJpbWFyeU5hdkhlaWdodCArIGJyZWFkY3J1bWJOYXZIZWlnaHQgKyBub3RpZmljYXRpb25IZWlnaHQgKyAob2xkID8gMCA6IGluUGFnZU5hdmlnYXRpb25IZWlnaHQpO1xuICB9O1xuXG4gIGlmIChzaGFyZWRIZWFkZXIubGVuZ3RoKSB7XG4gICAgaGVpZ2h0ID0gZ2V0TmFhU0hlaWdodChvbGRDYWxjdWxhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgaGVpZ2h0ID0gZ2V0TmF2aWdhdGlvbkhlaWdodCgpO1xuICB9XG5cbiAgcmV0dXJuIGhlaWdodDtcbn07XG5cbi8vIHNob3VsZCBiZSB1c2VkIHVudGlsIG1lcmdlZCB3aXRoIGdldE5hdmlnYXRpb25IZWlnaHRcbmV4cG9ydCBjb25zdCBnZXRTdGlja3lOYXZIZWlnaHRWMiA9ICh5UG9zKSA9PiB7XG4gIHJldHVybiBnZXRTdGlja3lOYXZIZWlnaHQoeVBvcywgZmFsc2UpO1xufTtcblxuXG5leHBvcnQgY29uc3Qgc2Nyb2xsVG8gPSAodGFyZ2V0LCBkdXJhdGlvbiwgY2FsbGJhY2ssIGVhc2luZywgaWdub3JlU3RpY2t5TmF2LCB5T2Zmc2V0ID0gMCkgPT4ge1xuICBjb25zdCBuZXdEdXJhdGlvbiA9ICh0eXBlb2YgZHVyYXRpb24gIT09ICdudW1iZXInKSA/IDgwMCA6IGR1cmF0aW9uO1xuICBjb25zdCBuZXdDYWxsYmFjayA9ICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpID8gbnVsbCA6IGNhbGxiYWNrO1xuICBjb25zdCBuZXdFYXNpbmcgPSAodHlwZW9mIGVhc2luZyAhPT0gJ3N0cmluZycpID8gJ2Vhc2VPdXRTaW5lJyA6IGVhc2luZztcbiAgbGV0IHBvc2l0aW9uID0gMDtcblxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ251bWJlcicpIHsgLy8gUHggdmFsdWVcbiAgICBwb3NpdGlvbiA9IHRhcmdldDtcbiAgfSBlbHNlIHsgLy8gRWxlbWVudFxuICAgIGNvbnN0ICR0YXJnZXRFbCA9IHRhcmdldCB8fCAkKCdib2R5Jyk7XG4gICAgcG9zaXRpb24gPSAkdGFyZ2V0RWwub2Zmc2V0KCkudG9wO1xuICB9XG5cbiAgaWYgKGlnbm9yZVN0aWNreU5hdiAhPT0gdHJ1ZSkge1xuICAgIHBvc2l0aW9uIC09IGdldFN0aWNreU5hdkhlaWdodChwb3NpdGlvbik7XG4gIH1cblxuICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoXG4gICAgeyBzY3JvbGxUb3A6IHBvc2l0aW9uICsgeU9mZnNldCB9LFxuICAgIG5ld0R1cmF0aW9uLFxuICAgIG5ld0Vhc2luZ1xuICApXG4gICAgLnByb21pc2UoKVxuICAgIC5kb25lKG5ld0NhbGxiYWNrKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja0RlZXBMaW5rID0gKGhyZWYpID0+IHtcbiAgbGV0IGRlZXBMaW5rID0gZmFsc2U7XG4gIGNvbnN0IHNwZWVkID0gMi41O1xuXG4gIGNvbnN0IGhhc2hQb3MgPSBocmVmLmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2hQb3MgKyAxIDwgaHJlZi5sZW5ndGggJiYgaGFzaFBvcyAhPT0gLTEpIHtcbiAgICBjb25zdCBpZCA9IGhyZWYuc3Vic3RyaW5nKGhhc2hQb3MsIGhyZWYubGVuZ3RoKTtcbiAgICBpZiAoJChpZCkubGVuZ3RoID09PSAxKSB7XG4gICAgICBsZXQgbG9jYXRpb24gPSAkKGlkKTtcbiAgICAgIGxldCBkdXJhdGlvbiA9IGxvY2F0aW9uLm9mZnNldCgpLnRvcCAvIHNwZWVkO1xuXG4gICAgICAvLyBMUkEtMTM3OTQgfCBBY2NvcmRpb25Db250YWluZXIgfCBPcGVuIGFjY29yZGlvbiBmaXJzdCBpZiBkZWVwbGluayBpcyBpbnNpZGVcbiAgICAgIGlmICgkKCdoZWFkIFtuYW1lPVwiYWNjb3JkaW9uT25Nb2JpbGVcIl0nKS5sZW5ndGggJiYgaXNCcmVha3BvaW50U21hbGwoKSkge1xuICAgICAgICBjb25zdCBhY2NvcmRpb25QYXJlbnQgPSBsb2NhdGlvbi5jbG9zZXN0KCcuYWNjb3JkaW9uLWdyb3VwJyk7XG4gICAgICAgIGNvbnN0IGFjY29yZGlvblRpdGxlID0gYWNjb3JkaW9uUGFyZW50LmZpbmQoJy5hY2NvcmRpb24tZ3JvdXAtdGl0bGUnKTtcblxuICAgICAgICBpZiAoYWNjb3JkaW9uUGFyZW50Lmxlbmd0aCAmJiBhY2NvcmRpb25UaXRsZS5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBPcGVuIGFjY29yZGlvbiBpZiBjbG9zZWRcbiAgICAgICAgICBpZiAoIWFjY29yZGlvblBhcmVudC5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICBhY2NvcmRpb25UaXRsZS5jbGljaygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFRha2UgaW50byBhY2NvdW50IHRoZSBoZWlnaHQgb2YgdGhlIGFjY29yZGlvbiB0aXRsZVxuICAgICAgICAgIGxvY2F0aW9uID0gbG9jYXRpb24ub2Zmc2V0KCkudG9wIC0gYWNjb3JkaW9uVGl0bGUub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgICAgIHNjcm9sbFRvKGxvY2F0aW9uLCA4MDAsIG51bGwsICdlYXNlT3V0U2luZScpO1xuICAgICAgICAgIGRlZXBMaW5rID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxvY2F0aW9uLnBhcmVudHMoJy5UYWJiZWRDb250YWluZXInKS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9IGxvY2F0aW9uLmNsb3Nlc3QoJy5UYWJiZWRDb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJHRhYnMgPSAkY29udGFpbmVyLmZpbmQoJy50YWInKTtcbiAgICAgICAgY29uc3QgJHRhYkxpbmtzID0gJGNvbnRhaW5lci5maW5kKCcudGFiLWxpbmsnKTtcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMDtcblxuICAgICAgICAkdGFicy5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgIGNvbnN0ICRsb2NhdGlvbiA9ICQoZWwpLmZpbmQobG9jYXRpb24pO1xuICAgICAgICAgIGlmICgkbG9jYXRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0YWJJbmRleCA9IGk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkdGFiTGlua3MuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICBpZiAoaSA9PT0gdGFiSW5kZXgpIHtcbiAgICAgICAgICAgICQoZWwpLmNsaWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsb2NhdGlvbiA9ICRjb250YWluZXIub2Zmc2V0KCkudG9wO1xuICAgICAgICBkdXJhdGlvbiA9IGxvY2F0aW9uIC8gc3BlZWQ7XG5cbiAgICAgICAgc2Nyb2xsVG8obG9jYXRpb24sIDgwMCwgbnVsbCwgJ2Vhc2VTdGFydEZhc3RFbmRTbG93Jyk7XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICB9XG5cbiAgICAgIC8vIExSQS0xMjcwMSB8IEw0NjIgVGVzdCB8IE9wZW4gYWNjb3JkaW9uIGZpcnN0IGlmIGRlZXBsaW5rIGlzIGluc2lkZVxuICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygndmVoaWNsZXNEaXNjb3ZlcnknKSkge1xuICAgICAgICBjb25zdCBhY2NvcmRpb25QYXJlbnQgPSBsb2NhdGlvbi5wYXJlbnRzKCcuQWNjb3JkaW9uQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKGxvY2F0aW9uKTtcblxuICAgICAgICBpZiAoYWNjb3JkaW9uUGFyZW50Lmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGFjY29yZGlvbkhlYWRlciA9IGFjY29yZGlvblBhcmVudC5maW5kKCcuaGVhZGVyJyk7XG5cbiAgICAgICAgICBpZiAoIWFjY29yZGlvbkhlYWRlci5oYXNDbGFzcygnYWNjb3JkaW9uLW9wZW4nKSkge1xuICAgICAgICAgICAgYWNjb3JkaW9uSGVhZGVyLmNsaWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFjY29yZGlvbkhlYWRlci5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgaWYgKCFsb2NhdGlvbi5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgICBlbGVtZW50LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICAgICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uLm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgICAgIC0gYWNjb3JkaW9uSGVhZGVyLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdkaXNwbGF5JywgJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbG9jYXRpb24gPSBsb2NhdGlvbi5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICAtIGFjY29yZGlvbkhlYWRlci5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzY3JvbGxUbyhsb2NhdGlvbiwgZHVyYXRpb24sIG51bGwsICdlYXNlU3RhcnRGYXN0RW5kU2xvdycpO1xuICAgICAgZGVlcExpbmsgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihgQ291bGQgbm90IGZpbmQgZGVlcCBsaW5rIGVsZW1lbnQgd2l0aCBpZDogJHtpZH1gKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlZXBMaW5rOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59O1xuXG5leHBvcnQgY29uc3QgaXNQYWdlSW5JZnJhbWUgPSAoKSA9PiB7XG4gIHJldHVybiB3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcDtcbn07XG5cbmV4cG9ydCBjb25zdCBpbnNpZGVUYWJiZWRDb250YWluZXIgPSAoZWwpID0+IHtcbiAgY29uc3QgaXNJbnNpZGVUYWJiZWRDb250YWluZXIgPSAhIWVsLnBhcmVudHMoJy5UYWJiZWRDb250YWluZXInKS5ub3QoJ1tkYXRhLXRvdGFsPVwiMVwiXScpLmxlbmd0aDtcblxuICBpZiAoaXNJbnNpZGVUYWJiZWRDb250YWluZXIpIHtcbiAgICByZXR1cm4gZWwucGFyZW50cygnLlRhYmJlZENvbnRhaW5lcicpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IG1vYmlsZUFjY29yZGlvbnNBY3RpdmF0ZWQgPSAoKSA9PiB7XG4gIHJldHVybiAkKCdoZWFkIFtuYW1lPVwiYWNjb3JkaW9uT25Nb2JpbGVcIl0nKS5sZW5ndGg7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlSFRNTFRhZ3MgPSAocykgPT4ge1xuICByZXR1cm4gcy50b1N0cmluZygpLnJlcGxhY2UoL1s8Pj07XS9nLCAnJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VXJsUGFyYW1ldGVyID0gKHNQYXJhbSkgPT4ge1xuICBmdW5jdGlvbiBkZWNvZGUocykge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoKHMgfHwgJycpLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgfVxuXG4gIGNvbnN0IHNQYWdlVVJMID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XG4gIGNvbnN0IHNVUkxWYXJpYWJsZXMgPSBzUGFnZVVSTC5zcGxpdCgnJicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc1VSTFZhcmlhYmxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNQYXJhbWV0ZXJTcGxpdCA9IHNVUkxWYXJpYWJsZXNbaV0uc3BsaXQoJz0nKTtcbiAgICBpZiAoZGVjb2RlKHNQYXJhbWV0ZXJTcGxpdFswXSkgPT09IHNQYXJhbSkge1xuICAgICAgcmV0dXJuIGRlY29kZShzUGFyYW1ldGVyU3BsaXRbMV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFBhcmFtZXRlclRvVVJMID0gKHVybCwgcGFyYW0pID0+IHtcbiAgY29uc3QgbmV3VXJsID0gdXJsICsgKHVybC5zcGxpdCgnPycpWzFdID8gJyYnIDogJz8nKSArIHBhcmFtO1xuXG4gIHJldHVybiBwYXJhbSAhPT0gJycgPyBuZXdVcmwgOiB1cmw7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0T2JqZWN0S2V5cyA9IChvYmopID0+IHtcbiAgY29uc3Qga2V5cyA9IFtdO1xuICBmb3IgKGxldCBpIGluIG9iaikgeyAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGtleXMucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IGNhbnZhc0RyYXdCZ0NvdmVyID0gKGN0eCwgaW1nLCB4LCB5LCB3LCBoLCBvZmZzZXRYLCBvZmZzZXRZKSA9PiB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgeCA9IHkgPSAwO1xuICAgIHcgPSBjdHguY2FudmFzLndpZHRoO1xuICAgIGggPSBjdHguY2FudmFzLmhlaWdodDtcbiAgfVxuXG4gIC8vIGRlZmF1bHQgb2Zmc2V0IGlzIGNlbnRlclxuICBvZmZzZXRYID0gdHlwZW9mIG9mZnNldFggPT09ICdudW1iZXInID8gb2Zmc2V0WCA6IDAuNTtcbiAgb2Zmc2V0WSA9IHR5cGVvZiBvZmZzZXRZID09PSAnbnVtYmVyJyA/IG9mZnNldFkgOiAwLjU7XG5cbiAgLy8ga2VlcCBib3VuZHMgWzAuMCwgMS4wXVxuICBpZiAob2Zmc2V0WCA8IDApIHtcbiAgICBvZmZzZXRYID0gMDtcbiAgfVxuICBpZiAob2Zmc2V0WSA8IDApIHtcbiAgICBvZmZzZXRZID0gMDtcbiAgfVxuICBpZiAob2Zmc2V0WCA+IDEpIHtcbiAgICBvZmZzZXRYID0gMTtcbiAgfVxuICBpZiAob2Zmc2V0WSA+IDEpIHtcbiAgICBvZmZzZXRZID0gMTtcbiAgfVxuXG4gIHZhciBpdyA9IGltZy53aWR0aCxcbiAgICBpaCA9IGltZy5oZWlnaHQsXG4gICAgciA9IE1hdGgubWluKHcgLyBpdywgaCAvIGloKSxcbiAgICBudyA9IGl3ICogciwgICAvLyBuZXcgcHJvcC4gd2lkdGhcbiAgICBuaCA9IGloICogciwgICAvLyBuZXcgcHJvcC4gaGVpZ2h0XG4gICAgY3gsIGN5LCBjdywgY2gsIGFyID0gMTtcblxuICAvLyBkZWNpZGUgd2hpY2ggZ2FwIHRvIGZpbGxcbiAgaWYgKG53IDwgdykge1xuICAgIGFyID0gdyAvIG53O1xuICB9XG4gIGlmIChuaCA8IGgpIHtcbiAgICBhciA9IGggLyBuaDtcbiAgfVxuICBudyAqPSBhcjtcbiAgbmggKj0gYXI7XG5cbiAgLy8gY2FsYyBzb3VyY2UgcmVjdGFuZ2xlXG4gIGN3ID0gaXcgLyAobncgLyB3KTtcbiAgY2ggPSBpaCAvIChuaCAvIGgpO1xuXG4gIGN4ID0gKGl3IC0gY3cpICogb2Zmc2V0WDtcbiAgY3kgPSAoaWggLSBjaCkgKiBvZmZzZXRZO1xuXG4gIC8vIG1ha2Ugc3VyZSBzb3VyY2UgcmVjdGFuZ2xlIGlzIHZhbGlkXG4gIGlmIChjeCA8IDApIHtcbiAgICBjeCA9IDA7XG4gIH1cbiAgaWYgKGN5IDwgMCkge1xuICAgIGN5ID0gMDtcbiAgfVxuICBpZiAoY3cgPiBpdykge1xuICAgIGN3ID0gaXc7XG4gIH1cbiAgaWYgKGNoID4gaWgpIHtcbiAgICBjaCA9IGloO1xuICB9XG5cbiAgLy8gZmlsbCBpbWFnZSBpbiBkZXN0LiByZWN0YW5nbGVcbiAgY3R4LmRyYXdJbWFnZShpbWcsIGN4LCBjeSwgY3csIGNoLCB4LCB5LCB3LCBoKTtcbn07XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbmV4cG9ydCBjb25zdCBoYXNQbGFjZWhvbGRlclN1cHBvcnQgPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcmV0dXJuICgncGxhY2Vob2xkZXInIGluIGVsKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1BhZ2VJblhQTUZyYW1lID0gKCkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdy5UcmlkaW9uICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LlRyaWRpb24uV2ViLlVJLlNpdGVFZGl0ICE9PSAndW5kZWZpbmVkJztcbn07XG5cbmV4cG9ydCBjb25zdCBlbGVtZW50SW5WaWV3cG9ydCA9IChlbGVtZW50LCBhZGp1c3QsIHdpbmRvd0lubmVySGVpZ2h0KSA9PiB7XG4gIGNvbnN0ICRlbGVtZW50ID0gZWxlbWVudCBpbnN0YW5jZW9mIGpRdWVyeSA/IGVsZW1lbnQgOiAkKGVsZW1lbnQpO1xuXG4gIGlmICghJGVsZW1lbnQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgJHdpbmRvdyA9ICQod2luZG93KTtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcbiAgbGV0IHdpbmRvd0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XG4gIGxldCBhZGp1c3RUb3A7XG4gIGxldCBhZGp1c3RCb3R0b207XG5cbiAgLy8gRWxlbWVudCBzcGVjaWZpY3NcbiAgY29uc3QgZWxPZmZzZXQgPSAkZWxlbWVudC5vZmZzZXQoKTtcbiAgY29uc3QgZWxUb3AgPSBlbE9mZnNldC50b3A7XG4gIGNvbnN0IGVsQm90dG9tID0gZWxUb3AgKyAkZWxlbWVudC5oZWlnaHQoKTtcblxuICAvLyBEZWZhdWx0IHZhbHVlXG4gIGNvbnN0IGRlZmF1bHRBZGp1c3QgPSAoZ2V0QnJlYWtwb2ludFNpemUoKSA9PT0gJ3NtYWxsJykgPyAyMCA6IDUwO1xuXG4gIC8vIExSQS0xMTQ5NCBGaXggaU9TIGlzc3VlIHdpdGggd2luZG93IGhlaWdodC5cbiAgLy8gVGVtcG9yYXJpbHkgYWRkIG9wdGlvbiB0byBhbGxvdyB0aGlzIHNvIFFBIGlzIG5vdFxuICAvLyByZXF1aXJlZCBvbiBTdG9yeUdhbGxlcnkgKyBTdG9yeUFydGljbGVFbmhhbmNlZEltYWdlQmxvY2tcbiAgaWYgKHR5cGVvZiB3aW5kb3dJbm5lckhlaWdodCAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93SW5uZXJIZWlnaHQpIHtcbiAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB3aW5kb3dIZWlnaHQ7XG4gIH1cblxuICAvLyBTZXQgdmlld3BvcnRCb3R0b21cbiAgY29uc3Qgdmlld3BvcnRCb3R0b20gPSBzY3JvbGxUb3AgKyB3aW5kb3dIZWlnaHQ7XG5cbiAgLy8gQWxsb3cgYWRqdXN0IHRvIGJlIHNldCBkaWZmZXJlbnQgZnJvbSB0b3AvYm90dG9tXG4gIGlmICh0eXBlb2YgYWRqdXN0ID09PSAnb2JqZWN0Jykge1xuICAgIGFkanVzdFRvcCA9IGFkanVzdC50b3A7XG4gICAgYWRqdXN0Qm90dG9tID0gYWRqdXN0LmJvdHRvbTtcbiAgfSBlbHNlIHtcbiAgICBhZGp1c3RUb3AgPSBhZGp1c3QgfHwgZGVmYXVsdEFkanVzdDtcbiAgICBhZGp1c3RCb3R0b20gPSBhZGp1c3QgfHwgZGVmYXVsdEFkanVzdDtcbiAgfVxuXG4gIHJldHVybiAoISh2aWV3cG9ydEJvdHRvbSA8IGVsVG9wICsgYWRqdXN0VG9wIHx8IHNjcm9sbFRvcCA+IGVsQm90dG9tIC0gYWRqdXN0Qm90dG9tKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tU3RyaW5nID0gKGxlbmd0aCkgPT4ge1xuICBsZXQgZm9ybWF0dGVkTGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoLCAxMCkgfHwgMDtcbiAgZm9ybWF0dGVkTGVuZ3RoID0gZm9ybWF0dGVkTGVuZ3RoIDwgMCA/IDAgOiBmb3JtYXR0ZWRMZW5ndGg7XG5cbiAgY29uc3QgY2hhcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgY29uc3QgY2hvc2VuID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtYXR0ZWRMZW5ndGg7IGkgKz0gMSkge1xuICAgIGNob3Nlbi5wdXNoKGNoYXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFycy5sZW5ndGgpKSk7XG4gIH1cblxuICByZXR1cm4gY2hvc2VuLmpvaW4oJycpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEVhc2luZ1ZhbHVlID0gKHJhdGlvKSA9PiB7XG4gIGxldCBmb3JtYXR0ZWRSYXRpbyA9IHJhdGlvIDwgMCA/IDAgOiByYXRpbztcbiAgZm9ybWF0dGVkUmF0aW8gPSBmb3JtYXR0ZWRSYXRpbyA+IDEgPyAxIDogZm9ybWF0dGVkUmF0aW87XG5cbiAgLy8gQ29udmVydCB0aGUgcmF0aW8gdG8gYSBudW1iZXIgb2YgcmFkaWFucy4gMCBtYXBzIHRvIC1QSSwgMC41IG1hcHMgdG9cbiAgLy8gMCwgMSBtYXBzIHRvIFBJXG4gIGNvbnN0IHJhZGlhbnMgPSAoZm9ybWF0dGVkUmF0aW8gKiAoMiAqIE1hdGguUEkpKSAtIE1hdGguUEk7XG5cbiAgLy8gQ29udmVydCB0aGlzIHRvIGEgdmFsdWUgdXNpbmcgYSBjb3NpbmUgY3VydmUuIE5vdGUgdGhhdCBjb3NpbmUgZ2l2ZXNcbiAgLy8gYSB2YWx1ZSBiZXR3ZWVuIC0xIGFuZCAxLCBzbyB3ZSBuZWVkIHRvIGFkZCAxIGFuZCBkaXZpZGUgYnkgMiB0b1xuICAvLyBrZWVwIGl0IGJldHdlZW4gMCBhbmQgMVxuICByZXR1cm4gKE1hdGguY29zKHJhZGlhbnMpICsgMSkgLyAyO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVTY3JvbGwgPSAoKSA9PiB7XG4gIGNvbnN0ICR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gIGNvbnN0IHNjcm9sbFRvcCA9ICR3aW5kb3cuc2Nyb2xsVG9wKCk7XG5cbiAgJHdpbmRvdy5vbihcbiAgICAnc2Nyb2xsLmRpc2FibGVTY3JvbGwgbW91c2V3aGVlbC5kaXNhYmxlU2Nyb2xsIERPTU1vdXNlU2Nyb2xsLmRpc2FibGVTY3JvbGwgdG91Y2htb3ZlLmRpc2FibGVTY3JvbGwnLFxuICAgIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICR3aW5kb3cuc2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuYWJsZVNjcm9sbCA9ICgpID0+IHtcbiAgY29uc3QgJHdpbmRvdyA9ICQod2luZG93KTtcblxuICAkd2luZG93Lm9mZignc2Nyb2xsLmRpc2FibGVTY3JvbGwgbW91c2V3aGVlbC5kaXNhYmxlU2Nyb2xsIERPTU1vdXNlU2Nyb2xsLmRpc2FibGVTY3JvbGwgdG91Y2htb3ZlLmRpc2FibGVTY3JvbGwnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW1pdE51bWJlciA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IHtcbiAgaWYgKG1pbiA+IG1heCkge1xuICAgIGNvbnN0IG9sZE1pbiA9IG1pbjtcbiAgICBtaW4gPSBtYXg7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBtYXggPSBvbGRNaW47IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgfVxuXG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsdWUpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkSWdub3JlZFJlc3BvbnNpdmVJbWFnZXMgPSAoJGltYWdlcykgPT4ge1xuICAkaW1hZ2VzLnJlbW92ZUF0dHIoJ2RhdGEtcGljdHVyZS1pZ25vcmUnKTtcbiAgd2luZG93LnJpY2hzcG9uc2l2ZUltYWdlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgdGhyb3R0bGUgPSAoZm4sIHRocmVzaGhvbGQsIHNjb3BlKSA9PiB7XG4gIGNvbnN0IHRocmVzaCA9IHRocmVzaGhvbGQgfHwgMjUwO1xuICBsZXQgbGFzdDtcbiAgbGV0IGRlZmVyVGltZXI7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gc2NvcGUgfHwgdGhpcztcblxuICAgIGNvbnN0IG5vdyA9ICtuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgaWYgKGxhc3QgJiYgbm93IDwgbGFzdCArIHRocmVzaCkge1xuICAgICAgLy8gaG9sZCBvbiB0byBpdFxuICAgICAgY2xlYXJUaW1lb3V0KGRlZmVyVGltZXIpO1xuICAgICAgZGVmZXJUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsYXN0ID0gbm93O1xuICAgICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH0sIHRocmVzaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3QgPSBub3c7XG4gICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gIH07XG59O1xuXG4vKiogKlxuICogTWVhc3VyZSB0ZXh0IHdpZHRoIHVzaW5nIEJyb3dzZXIuXG4gKlxuICogQHBhcmFtIHRleHRcbiAqIEBwYXJhbSBwYXJlbnRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgQ01TIFBvd2VyZWQgc29sdXRpb24gaW4gZnV0dXJlLlxuICovXG5leHBvcnQgY29uc3QgbWVhc3VyZVRleHRXaWR0aCA9ICh0ZXh0LCBwYXJlbnQpID0+IHtcbiAgaWYgKCF0ZXh0KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb25zdCBwYXIgPSBwYXJlbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICBjb250YWluZXIuc3R5bGUucGFkZGluZyA9ICcwJztcbiAgY29udGFpbmVyLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IHRleHQ7XG5cbiAgcGFyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnN0IHdpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICBwYXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcblxuICByZXR1cm4gd2lkdGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VHJhbnNpdGlvbkVuZEV2ZW50ID0gKCkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50Jyk7XG4gIGNvbnN0IHRyYW5zaXRpb25zID0ge1xuICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcbiAgICBPVHJhbnNpdGlvbjogJyBvVHJhbnNpdGlvbkVuZCcsXG4gICAgTW96VHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICB9O1xuXG4gIGZvciAoY29uc3QgdHJhbnNpdGlvbiBpbiB0cmFuc2l0aW9ucykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKGVsLnN0eWxlW3RyYW5zaXRpb25dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0cmFuc2l0aW9uXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gKHN0ciwgZGF0YSkgPT4ge1xuICAvLyBGaWd1cmUgb3V0IGlmIHdlJ3JlIGdldHRpbmcgYSB0ZW1wbGF0ZSwgb3IgaWYgd2UgbmVlZCB0b1xuICAvLyBsb2FkIHRoZSB0ZW1wbGF0ZSAtIGFuZCBiZSBzdXJlIHRvIGNhY2hlIHRoZSByZXN1bHQuXG4gIHZhciBmbiA9ICEvXFxXLy50ZXN0KHN0cikgP1xuICAgIHRlbXBsYXRlQ2FjaGVbc3RyXSA9IHRlbXBsYXRlQ2FjaGVbc3RyXSB8fFxuICAgIHRlbXBsYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0cikuaW5uZXJIVE1MKSA6XG5cbiAgICAvLyBHZW5lcmF0ZSBhIHJldXNhYmxlIGZ1bmN0aW9uIHRoYXQgd2lsbCBzZXJ2ZSBhcyBhIHRlbXBsYXRlXG4gICAgLy8gZ2VuZXJhdG9yIChhbmQgd2hpY2ggd2lsbCBiZSBjYWNoZWQpLlxuICAgIG5ldyBGdW5jdGlvbihcIm9ialwiLFxuICAgICAgXCJ2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTtcIiArXG5cbiAgICAgIC8vIEludHJvZHVjZSB0aGUgZGF0YSBhcyBsb2NhbCB2YXJpYWJsZXMgdXNpbmcgd2l0aCgpe31cbiAgICAgIFwid2l0aChvYmope3AucHVzaCgnXCIgK1xuXG4gICAgICAvLyBDb252ZXJ0IHRoZSB0ZW1wbGF0ZSBpbnRvIHB1cmUgSmF2YVNjcmlwdFxuICAgICAgc3RyLnJlcGxhY2UoL1tcXHJcXHRcXG5dL2csIFwiIFwiKVxuICAgICAgICAucmVwbGFjZSgvJyg/PVteJV0qJT4pL2csIFwiXFx0XCIpXG4gICAgICAgIC5zcGxpdChcIidcIikuam9pbihcIlxcXFwnXCIpXG4gICAgICAgIC5zcGxpdChcIlxcdFwiKS5qb2luKFwiJ1wiKVxuICAgICAgICAucmVwbGFjZSgvPCU9KC4rPyklPi9nLCBcIicsJDEsJ1wiKVxuICAgICAgICAuc3BsaXQoXCI8JVwiKS5qb2luKFwiJyk7XCIpXG4gICAgICAgIC5zcGxpdChcIiU+XCIpLmpvaW4oXCJwLnB1c2goJ1wiKVxuICAgICAgKyBcIicpO31yZXR1cm4gcC5qb2luKCcnKTtcIik7XG5cbiAgLy8gUHJvdmlkZSBzb21lIGJhc2ljIGN1cnJ5aW5nIHRvIHRoZSB1c2VyXG4gIHJldHVybiBkYXRhID8gZm4oZGF0YSkgOiBmbjtcbn07XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbmV4cG9ydCBjb25zdCBpc0luVmlld3BvcnQgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCB3aW4gPSAkKHdpbmRvdyk7XG5cbiAgY29uc3Qgdmlld3BvcnQgPSB7XG4gICAgdG9wOiB3aW4uc2Nyb2xsVG9wKCkgKyBnZXRTdGlja3lOYXZIZWlnaHQoKSxcbiAgICBib3R0b206IHdpbi5zY3JvbGxUb3AoKSArIHdpbi5oZWlnaHQoKSxcbiAgICBsZWZ0OiB3aW4uc2Nyb2xsTGVmdCgpXG4gIH07XG4gIHZpZXdwb3J0LnJpZ2h0ID0gdmlld3BvcnQubGVmdCArIHdpbi53aWR0aCgpO1xuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW1lbnQub2Zmc2V0KCk7XG4gIGJvdW5kcy5yaWdodCA9IGJvdW5kcy5sZWZ0ICsgZWxlbWVudC5vdXRlcldpZHRoKCk7XG4gIGJvdW5kcy5ib3R0b20gPSBib3VuZHMudG9wICsgZWxlbWVudC5vdXRlckhlaWdodCgpO1xuXG4gIHJldHVybiAoISh2aWV3cG9ydC5yaWdodCA8IGJvdW5kcy5sZWZ0IHx8IHZpZXdwb3J0LmxlZnQgPiBib3VuZHMucmlnaHQgfHwgdmlld3BvcnQuYm90dG9tIDwgYm91bmRzLnRvcCB8fCB2aWV3cG9ydC50b3AgPiBib3VuZHMuYm90dG9tKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsSWZOb3RJblZpZXdwb3J0ID0gKGVsZW1lbnQsIGRpc3BsYXlUb0JvdHRvbSkgPT4ge1xuICBpZiAoIWlzSW5WaWV3cG9ydChlbGVtZW50KSkge1xuICAgIC8vIE5vdCBpbiB2aWV3XG4gICAgY29uc3Qgc2Nyb2xsVG9Qb3MgPSBkaXNwbGF5VG9Cb3R0b20gPyBlbGVtZW50Lm9mZnNldCgpLnRvcCAtICQod2luZG93KS5pbm5lckhlaWdodCgpIDogKGVsZW1lbnQub2Zmc2V0KCkudG9wXG4gICAgICAtIGdldFN0aWNreU5hdkhlaWdodCgpKTtcbiAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBzY3JvbGxUb1BvcyB9LCA4MDApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0xhbmRSb3ZlciA9ICgpID0+IHtcbiAgcmV0dXJuICEhKCQoJ2JvZHkjbGFuZHJvdmVyJykubGVuZ3RoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUYWJiYWJsZSA9IChlbGVtLCBjdXN0b21TZWxlY3RvcnMpID0+IHtcbiAgY29uc3QgZGVmYXVsdFNlbGVjdG9ycyA9IFtcbiAgICAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbaGlkZGVuXSknLFxuICAgICdzZWxlY3QnLFxuICAgICdhW2hyZWZdJyxcbiAgICAndGV4dGFyZWEnLFxuICAgICdidXR0b24nLFxuICAgICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePVwiLVwiXSknXG4gIF07XG5cbiAgY29uc3Qgc2VsZWN0b3JUeXBlcyA9IChjdXN0b21TZWxlY3RvcnMpID8gZGVmYXVsdFNlbGVjdG9ycy5jb25jYXQoY3VzdG9tU2VsZWN0b3JzKSA6IGRlZmF1bHRTZWxlY3RvcnM7XG4gIGxldCBzZWxlY3RvcnMgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JUeXBlcy5qb2luKCcsJykpO1xuICBzZWxlY3RvcnMgPSBBcnJheS5mcm9tKHNlbGVjdG9ycyk7XG4gIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5maWx0ZXIoKHNlbGVjdG9yKSA9PiB7XG4gICAgbGV0IHRhYmJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoIXNlbGVjdG9yLm9mZnNldFBhcmVudCB8fCBzZWxlY3Rvci5vZmZzZXRXaWR0aCA9PT0gMFxuICAgICAgfHwgc2VsZWN0b3Iub2Zmc2V0SGVpZ2h0ID09PSAwKSB7XG4gICAgICB0YWJiYWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzSW52aXNpYmxlKGVsKSB7XG4gICAgICBpZiAoZWwuc3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicgfHwgZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRhYmJhYmxlID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBpc0ludmlzaWJsZShlbC5wYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaXNJbnZpc2libGUoc2VsZWN0b3IpO1xuICAgIGlmICh0YWJiYWJsZSkge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0b3JzO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2tUYWJiYWJsZXMgPSAodGFiYmFibGVzKSA9PiB7XG4gIHRhYmJhYmxlcy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSAhPT0gS2V5Q29kZS5UQUIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgaWYgKHRhYmJhYmxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0YWJiYWJsZXNbMF0uZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgdGFiYmFibGVzW3RhYmJhYmxlcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhYmJhYmxlc1tpICsgMV0uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpID09PSB0YWJiYWJsZXMubGVuZ3RoIC0gMSAmJiAhZS5zaGlmdEtleSkge1xuICAgICAgICB0YWJiYWJsZXNbMF0uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICB0YWJiYWJsZXNbaSAtIDFdLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJiYWJsZXNbaSArIDFdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGJhbGFuY2VFbGVtZW50SGVpZ2h0ID0gKGVsZW1lbnRzLCBhbGxvd2VkT2Zmc2V0ID0gMCkgPT4ge1xuICBjb25zdCBjb2x1bW5zID0ge307XG4gIGlmICghZWxlbWVudHMpIHtcbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuICBjb25zdCBlbGVtZW50c0FycmF5ID0gW10uc2xpY2UuY2FsbChlbGVtZW50cyk7XG4gIGxldCBoZWlnaHRUb3RhbCA9IDA7XG4gIGNvbnN0IGhlaWdodHNBcnJheSA9IGVsZW1lbnRzQXJyYXkubWFwKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIGhlaWdodFRvdGFsICs9IGVsZW1lbnRIZWlnaHQ7XG4gICAgcmV0dXJuIGVsZW1lbnRIZWlnaHQ7XG4gIH0pO1xuICBjb25zdCBnZXRCYWxhbmNlZEluZGV4ID0gKGFycmF5LCB0YXJnZXQsIHJ1bm5pbmdUb3RhbCA9IDAsIGluZGV4ID0gMCkgPT4ge1xuICAgIGNvbnN0IGlzUmVjdXJzaXZlID0gISFhcnJheVtpbmRleF0gJiYgcnVubmluZ1RvdGFsICsgYXJyYXlbaW5kZXhdIDw9ICh0YXJnZXQgLSBhbGxvd2VkT2Zmc2V0KTtcbiAgICByZXR1cm4gaXNSZWN1cnNpdmUgPyBnZXRCYWxhbmNlZEluZGV4KGFycmF5LCB0YXJnZXQsIHJ1bm5pbmdUb3RhbCArIGFycmF5W2luZGV4XSwgaW5kZXggKyAxKSA6IGluZGV4O1xuICB9O1xuICBjb25zdCBzcGxpdEluZGV4ID0gZ2V0QmFsYW5jZWRJbmRleChoZWlnaHRzQXJyYXksIGhlaWdodFRvdGFsIC8gMikgKyAxO1xuICBjb2x1bW5zLmNvbHVtbnMxID0gZWxlbWVudHNBcnJheS5zbGljZSgwLCBzcGxpdEluZGV4KTtcbiAgY29sdW1ucy5jb2x1bW5zMiA9IGVsZW1lbnRzQXJyYXkuc2xpY2Uoc3BsaXRJbmRleCwgZWxlbWVudHNBcnJheS5sZW5ndGgpO1xuICBjb2x1bW5zLmhlaWdodHNBcnJheSA9IGhlaWdodHNBcnJheTtcbiAgcmV0dXJuIGNvbHVtbnM7XG59O1xuXG5leHBvcnQgY29uc3QgZXZlbnRUcmlnZ2VyID0gKGVsZW0sIGV2ZW50VHlwZSwgZGV0YWlsID0ge30sIGJ1YmJsZXMgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudFR5cGUsIHsgZGV0YWlsLCBidWJibGVzIH0pO1xuICBlbGVtLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRFbGVtZW50Q29sbGVjdGlvblRvQXJyYXkgPSAoY29sbGVjdGlvbikgPT4ge1xuICBpZiAoY29sbGVjdGlvbiBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICByZXR1cm4gY29sbGVjdGlvbiBpbnN0YW5jZW9mIE5vZGVMaXN0ID8gW10uc2xpY2UuY2FsbChjb2xsZWN0aW9uKSA6IGNvbGxlY3Rpb24uZ2V0KCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbWlzZUVsZW1lbnRzID0gKGVsZW1lbnRzQ29sbGVjdGlvbikgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGNvbnZlcnRFbGVtZW50Q29sbGVjdGlvblRvQXJyYXkoZWxlbWVudHNDb2xsZWN0aW9uKTtcbiAgaWYgKCFlbGVtZW50cyB8fCAhZWxlbWVudHMubGVuZ3RoKSByZXR1cm47XG4gIGNvbnN0IGNsb25lZEVsZW1lbnRzID0gZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICBjbG9uZWRFbGVtZW50cy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpbmMpID0+IGVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmVkRWxlbWVudHNbaW5jXSwgZWxlbWVudCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzRWxlbWVudFZlcnRpY2FsbHlTY3JvbGxhYmxlID0gKGVsKSA9PiB7XG4gIHJldHVybiAoZWwgJiYgKGVsLnNjcm9sbEhlaWdodCA+IGVsLm9mZnNldEhlaWdodCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrRGVmaW5lZCA9IGl0ZW0gPT4gaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0gIT09IG51bGw7XG5cbmV4cG9ydCBjb25zdCB0YWJsaXN0TmF2aWdhdGlvbiA9ICh0YWJsaXN0KSA9PiB7XG4gIGNvbnN0IG9yaWVudGF0aW9uID0gdGFibGlzdC5nZXRBdHRyaWJ1dGUoJ2FyaWEtb3JpZW50YXRpb24nKTtcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IG9yaWVudGF0aW9uICYmIG9yaWVudGF0aW9uID09PSAndmVydGljYWwnO1xuICBjb25zdCB0YWJzID0gdGFibGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYlwiXScpO1xuICBjb25zdCBrZXlzID0gS2V5Q29kZTtcblxuICBjb25zdCBmb2N1c0ZpcnN0VGFiID0gKCkgPT4gdGFic1swXS5mb2N1cygpO1xuICBjb25zdCBmb2N1c0xhc3RUYWIgPSAoKSA9PiB0YWJzW3RhYnMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcblxuICBjb25zdCBmb2N1c1ByZXZpb3VzVGFiID0gKGN1cnJlbnRUYWIpID0+IHtcbiAgICBjb25zdCB0YWJJbmRleCA9IFsuLi50YWJzXS5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50ID09PSBjdXJyZW50VGFiKTtcbiAgICBpZiAodGFiSW5kZXggPT09IDApIHtcbiAgICAgIGZvY3VzTGFzdFRhYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWJzW3RhYkluZGV4IC0gMV0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9jdXNOZXh0VGFiID0gKGN1cnJlbnRUYWIpID0+IHtcbiAgICBjb25zdCB0YWJJbmRleCA9IFsuLi50YWJzXS5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50ID09PSBjdXJyZW50VGFiKTtcbiAgICBjb25zdCB0YWJzTGVuZ3RoWmVyb0luZGV4ID0gdGFicy5sZW5ndGggLSAxO1xuICAgIGlmICh0YWJJbmRleCA9PT0gdGFic0xlbmd0aFplcm9JbmRleCkge1xuICAgICAgZm9jdXNGaXJzdFRhYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWJzW3RhYkluZGV4ICsgMV0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGFibGlzdEtleWRvd25FdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlO1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlIGtleXMuRU5EOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb2N1c0xhc3RUYWIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGtleXMuSE9NRTpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZm9jdXNGaXJzdFRhYigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Uga2V5cy5MRUZUOlxuICAgICAgY2FzZSBrZXlzLlVQOlxuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZm9jdXNQcmV2aW91c1RhYihldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Uga2V5cy5SSUdIVDpcbiAgICAgIGNhc2Uga2V5cy5ET1dOOlxuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZm9jdXNOZXh0VGFiKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRhYmxpc3RLZXl1cEV2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGU7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2Uga2V5cy5MRUZUOlxuICAgICAgICBmb2N1c1ByZXZpb3VzVGFiKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Uga2V5cy5SSUdIVDpcbiAgICAgICAgZm9jdXNOZXh0VGFiKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlVGFibGlzdEtleWRvd25FdmVudHMsIGZhbHNlKTtcbiAgICBpZiAoIWlzVmVydGljYWwpIHtcbiAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGhhbmRsZVRhYmxpc3RLZXl1cEV2ZW50cywgZmFsc2UpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IChvYmopID0+IHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXBsYWNlQWxsID0gKHN0cmluZywgc2VhcmNoLCByZXBsYWNlbWVudCkgPT4ge1xuICByZXR1cm4gc3RyaW5nLnNwbGl0KHNlYXJjaCkuam9pbihyZXBsYWNlbWVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgZHhTZXRUaW1lb3V0ID0gKGNiLCB0aW1lKSA9PiB7XG4gIHNldFRpbWVvdXQoY2IsIHRpbWUpO1xuXG4gIGlmICh3aW5kb3cuYXBwUmVhZHlFdmVudC5pbml0aWF0ZWQpIHtcbiAgICBhcHBSZWFkeVRpbWVyLmFkZCh0aW1lKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYXBwUmVhZHlFdmVudC50aW1lb3V0ICs9IHRpbWU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBEeFJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUgPSAoY2IpID0+IHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IoKSk7XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZGluZ1NwaW5uZXJUb2dnbGVCdXR0b25TdGF0ZUFuZENvbnRlbnQgPSAodGFyZ2V0KSA9PiB7XG4gIGNvbnN0IHRhcmdldEVsZW1lbnQgPSB0YXJnZXQ7XG5cbiAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnQlVUVE9OJykge1xuICAgIHRhcmdldEVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG4gIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRhcmdldEVsZW1lbnQ7XG4gIFsuLi5jaGlsZHJlbl0uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGQ7XG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgfSk7XG59O1xuXG4vKipcbiAqIGFkZER4TG9hZGluZ1NwaW5uZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCBUaGUgYnV0dG9uL2xpbmsgdGhhdCB0aGUgbG9hZGluZyBzcGlubmVyIHNob3VsZCBiZSBpbnNlcnRlZCBpbnRvXG4gKi9cbmV4cG9ydCBjb25zdCBhZGREeExvYWRpbmdTcGlubmVyID0gKHRhcmdldCkgPT4ge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGljb25NYXJrdXAgPSAnPGRpdiBjbGFzcz1cIkR4TG9hZGluZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxkaXYgY2xhc3M9XCJEeExvYWRpbmdfX2ljb25cIiBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiPjwvZGl2PjwvZGl2Pic7XG4gIGNvbnN0IGxvYWRpbmdJY29uID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoaWNvbk1hcmt1cCk7XG5cbiAgbG9hZGluZ1NwaW5uZXJUb2dnbGVCdXR0b25TdGF0ZUFuZENvbnRlbnQodGFyZ2V0KTtcblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQobG9hZGluZ0ljb24pO1xufTtcblxuLyoqXG4gKiByZW1vdmVEeExvYWRpbmdTcGlubmVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgVGhlIGJ1dHRvbi9saW5rIHRoYXQgdGhlIGxvYWRpbmcgc3Bpbm5lciBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tXG4gKiBAcGFyYW0ge3N0cmluZyB8fCBIVE1MRWxlbWVudH0gcmVwbGFjZSBUaGUgc3RyaW5nIHlvdSB3b3VsZCBsaWtlIHRvIHJlcGxhY2UgdGhlIGxvYWRpbmcgc3Bpbm5lciB3aXRoIChleHBlY3RlZCB0byBiZSB0aGUgdGV4dCBvcmlnaW5hbGx5IGluIHRoZSBidXR0b24pXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVEeExvYWRpbmdTcGlubmVyID0gKHRhcmdldCkgPT4ge1xuICBjb25zdCB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0O1xuXG4gIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICB0YXJnZXRFbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbiAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG5cbiAgY29uc3QgbG9hZGluZ0ljb24gPSB0YXJnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5EeExvYWRpbmcnKTtcbiAgdGFyZ2V0RWxlbWVudC5yZW1vdmVDaGlsZChsb2FkaW5nSWNvbik7XG5cbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGFyZ2V0RWxlbWVudDtcbiAgWy4uLmNoaWxkcmVuXS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZDtcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGREeEVsZW1lbnRMb2FkaW5nU3Bpbm5lciA9ICh0YXJnZXQpID0+IHtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpY29uTWFya3VwID0gYDxkaXYgY2xhc3M9XCJEeExvYWRpbmdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDg4IDg4XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDg4IDg4O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgPHBhdGggZmlsbD1cIiNGRkZGRkZcIiBzdHlsZT1cIm9wYWNpdHk6IC4yO1wiIGQ9XCJNNDQsNWMyMS41LDAsMzksMTcuNSwzOSwzOVM2NS41LDgzLDQ0LDgzUzUsNjUuNSw1LDQ0UzIyLjUsNSw0NCw1IE00NCwwQzE5LjcsMCwwLDE5LjcsMCw0NHMxOS43LDQ0LDQ0LDQ0IHM0NC0xOS43LDQ0LTQ0UzY4LjMsMCw0NCwwTDQ0LDB6XCIvPlxuICAgIDxwYXRoIGZpbGw9XCIjRjBGMEYwXCIgZD1cIk04NS41LDQ2LjRjLTEuNCwwLTIuNS0xLjEtMi41LTIuNUM4MywyMi41LDY1LjUsNSw0NC4xLDVjLTEuNCwwLTIuNS0xLjEtMi41LTIuNVM0Mi43LDAsNDQuMSwwIEM2OC4zLDAsODgsMTkuNyw4OCw0My45Qzg4LDQ1LjMsODYuOSw0Ni40LDg1LjUsNDYuNHpcIj5cbiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwicm90YXRlXCIgZnJvbT1cIjAgNDQgNDRcIiB0bz1cIjM2MCA0NCA0NFwiIGR1cj1cIjEuNXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XG4gICAgPC9wYXRoPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5gO1xuICBjb25zdCBsb2FkaW5nSWNvbiA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGljb25NYXJrdXApO1xuXG4gIGxvYWRpbmdTcGlubmVyVG9nZ2xlQnV0dG9uU3RhdGVBbmRDb250ZW50KHRhcmdldCk7XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKGxvYWRpbmdJY29uKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2NhbFN0b3JhZ2VBdmFpbGFibGUgPSAoKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cubG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmZWF0dXJlX3Rlc3QnLCAneWVzJyk7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZlYXR1cmVfdGVzdCcpID09PSAneWVzJykge1xuICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZmVhdHVyZV90ZXN0Jyk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRTY3JpcHRGb3JCYXphYXJWb2ljZSA9IChzY3JpcHRVUkwpID0+IHtcbiAgaWYgKHNjcmlwdFVSTC50cmltKCkgIT09ICcnICYmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBzY3JpcHRbc3JjPScke3NjcmlwdFVSTH0nXWApKS5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBiYXphYXJWb2ljZVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGJhemFhclZvaWNlU2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgc2NyaXB0VVJMKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGJhemFhclZvaWNlU2NyaXB0KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVxdWFsaXNlSGVpZ2h0cyA9IChlbGVtZW50cykgPT4ge1xuICBsZXQgbWF4SGVpZ2h0ID0gMDtcbiAgWy4uLmVsZW1lbnRzXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gIH0pO1xuICBbLi4uZWxlbWVudHNdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICBpZiAoaGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICBtYXhIZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICB9KTtcbiAgWy4uLmVsZW1lbnRzXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHttYXhIZWlnaHR9cHhgO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUN1cnJlbnREYXRlID0gKCkgPT4ge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHJldHVybiAoXG4gICAgRGF0ZS5VVEMoXG4gICAgICB0b2RheS5nZXRVVENGdWxsWWVhcigpLFxuICAgICAgdG9kYXkuZ2V0VVRDTW9udGgoKSxcbiAgICAgIHRvZGF5LmdldFVUQ0RhdGUoKSxcbiAgICAgIHRvZGF5LmdldFVUQ0hvdXJzKCksXG4gICAgICB0b2RheS5nZXRVVENNaW51dGVzKClcbiAgICApXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgcHJldmVudEFjdGlvbk9uRGVlcExpbmsgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgbGlua0xvY2F0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgaWYgKGNoZWNrRGVlcExpbmsobGlua0xvY2F0aW9uKSkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==s