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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/webapp/components/TabbedContainer/js/TabbedContainer.js");
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

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

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

/***/ "./node_modules/babel-runtime/core-js/object/values.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/values.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/values */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/values.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/promise.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/promise.js"), __esModule: true };

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

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/slicedToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/is-iterable.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/is-iterable.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.is-iterable.js");


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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/values.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/values.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/promise.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/promise.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Promise;


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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-instance.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-instance.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_for-of.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_for-of.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_invoke.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_invoke.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_microtask.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_microtask.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-to-array.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-to-array.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_perform.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_perform.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_promise-resolve.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_promise-resolve.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine-all.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine-all.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-species.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-species.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_species-constructor.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_species-constructor.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_task.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_task.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.is-iterable.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/core.is-iterable.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.promise.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.promise.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.object.values.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.object.values.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.finally.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
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
} });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.try.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.try.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


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

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  } catch (e) {}

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


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
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
  } catch (e) {} // eslint-disable-line no-empty
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
function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

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
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
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
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

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
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
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
  runtime.awrap = function(arg) {
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
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
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
        return new Promise(function(resolve, reject) {
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
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
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

    if (! info) {
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
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
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

  runtime.keys = function(object) {
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

    reset: function(skipTempReset) {
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

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
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

        return !! caught;
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

    abrupt: function(type, arg) {
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

    complete: function(record, afterLoc) {
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

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
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

    delegateYield: function(iterable, resultName, nextLoc) {
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
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
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
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
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

/***/ "./src/main/webapp/components/DxCarousel/js/carousel-config.js":
/*!*********************************************************************!*\
  !*** ./src/main/webapp/components/DxCarousel/js/carousel-config.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./src/main/webapp/components/DxCarousel/js/carousel-helpers.js":
/*!**********************************************************************!*\
  !*** ./src/main/webapp/components/DxCarousel/js/carousel-helpers.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./src/main/webapp/components/DxCarousel/js/classes/DxCarousel-main.js":
/*!*****************************************************************************!*\
  !*** ./src/main/webapp/components/DxCarousel/js/classes/DxCarousel-main.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./src/main/webapp/components/DxCarousel/js/helpers.js":
/*!*************************************************************!*\
  !*** ./src/main/webapp/components/DxCarousel/js/helpers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./src/main/webapp/components/DxCarousel/js/store/actions.js":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/components/DxCarousel/js/store/actions.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/main/webapp/components/DxCarousel/js/store/index.js":
/*!*****************************************************************!*\
  !*** ./src/main/webapp/components/DxCarousel/js/store/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./src/main/webapp/components/DxCarousel/js/store/reducers.js":
/*!********************************************************************!*\
  !*** ./src/main/webapp/components/DxCarousel/js/store/reducers.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./src/main/webapp/components/HeaderBox/es6/HeaderBox.js":
/*!***************************************************************!*\
  !*** ./src/main/webapp/components/HeaderBox/es6/HeaderBox.js ***!
  \***************************************************************/
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

/***/ }),

/***/ "./src/main/webapp/components/HeroSlideTemplate/es6/classes/HeroSlideTemplate-main.js":
/*!********************************************************************************************!*\
  !*** ./src/main/webapp/components/HeroSlideTemplate/es6/classes/HeroSlideTemplate-main.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
      tabbedContainer: this.element.closest('.cmb_tabbedContainer'),
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
      _this.uiSelectors.nonDateAwareSlide.style.display = 'block';
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

/***/ }),

/***/ "./src/main/webapp/components/Pagination/es6/Pagination.js":
/*!*****************************************************************!*\
  !*** ./src/main/webapp/components/Pagination/es6/Pagination.js ***!
  \*****************************************************************/
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

/***/ }),

/***/ "./src/main/webapp/components/TabbedContainer/js/TabbedContainer.js":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/components/TabbedContainer/js/TabbedContainer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    },
    initDxTabs: function initDxTabs() {
      var _this2 = this;

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


$('.cmb_tabbedContainer').TabbedContainer();

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

      if (location.parents('.cmb_tabbedContainer').length) {
        var $container = location.closest('.cmb_tabbedContainer');
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
  var isInsideTabbedContainer = !!el.parents('.cmb_tabbedContainer').not('[data-total="1"]').length;

  if (isInsideTabbedContainer) {
    return el.parents('.cmb_tabbedContainer');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9yZWR1eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudHMvRHhDYXJvdXNlbC9qcy9jYXJvdXNlbC1jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudHMvRHhDYXJvdXNlbC9qcy9jYXJvdXNlbC1oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb21wb25lbnRzL0R4Q2Fyb3VzZWwvanMvY2xhc3Nlcy9EeENhcm91c2VsLW1haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudHMvRHhDYXJvdXNlbC9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb21wb25lbnRzL0R4Q2Fyb3VzZWwvanMvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29tcG9uZW50cy9EeENhcm91c2VsL2pzL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb21wb25lbnRzL0R4Q2Fyb3VzZWwvanMvc3RvcmUvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudHMvRHhUYWJzL2VzNi9EeFRhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudHMvSGVhZGVyQm94L2VzNi9IZWFkZXJCb3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudHMvSGVyb1NsaWRlVGVtcGxhdGUvZXM2L2NsYXNzZXMvSGVyb1NsaWRlVGVtcGxhdGUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29tcG9uZW50cy9QYWdpbmF0aW9uL2VzNi9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb21wb25lbnRzL1RhYmJlZENvbnRhaW5lci9qcy9UYWJiZWRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvYXJpYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvcmVzb3VyY2VzL2Rldi9qcy91dGlscy9icm93c2VyRGV0ZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvcmVzb3VyY2VzL2Rldi9qcy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvcmVzb3VyY2VzL2Rldi9qcy91dGlscy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvd2luZG93RGltZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJTd2lwZXJcIiJdLCJuYW1lcyI6WyJnZXRMYWJlbHMiLCJlbGVtZW50IiwiRXJyb3IiLCJnZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yIiwibGFiZWxTdWZmaXgiLCJsYWJlbFN1ZmZpeGVzIiwibGFiZWxzIiwibWFwIiwibGFiZWwiLCJnZXRDYXJvdXNlbENvbmZpZyIsImNhcm91c2VsIiwidG90YWwiLCJyYW5kb21pemVkIiwiY2Fyb3VzZWxDb250cm9scyIsImFsaWdubWVudCIsInBhZ2luYXRpb24iLCJsb29wIiwiYXV0b3BsYXkiLCJhdXRvcGxheUR1cmF0aW9uIiwiZGVmYXVsdFNlbGVjdGVkIiwiaW5pdFBhZ2luYXRpb24iLCJjYXJvdXNlbEVsZW1lbnQiLCJwYWdpbmF0aW9uQ29udHJvbHMiLCJwYWdpbmF0aW9uT3B0aW9ucyIsIm51bWJlck9mUGlwcyIsInBhcnNlSW50IiwiZW5hYmxlZCIsImR1cmF0aW9uIiwiUGFnaW5hdGlvbiIsImluaXRTd2lwZXIiLCJzd2lwZXJFbGVtZW50Iiwic3dpcGVyT3B0aW9ucyIsIlN3aXBlciIsImluaXREeEExMXlTd2lwZXJIZWxwZXJzIiwic3dpcGVyIiwiYTExeUNvbmZpZyIsImRlc3Ryb3lEeENhcm91c2VsIiwiRHhDYXJvdXNlbCIsIl9lbGVtZW50IiwiaXNEZXZpY2VNb2JpbGUiLCJzdG9yZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaW5pdCIsImlzQ2xpZW50QU1vYmlsZURldmljZSIsInRoZW4iLCJyZXR1cm5lZFZhbHVlIiwicGFnZUVsZW1lbnRzVG9SZW1vdmUiLCJuZXh0IiwicHJldiIsInN1cHBsaW1lbnRhcnlTbGlkZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2Nhcm91c2VsIiwiX3BhZ2luYXRpb24iLCJfY2Fyb3VzZWxDb25maWciLCJfdG90YWxTbGlkZXMiLCJfc3RhcnRTbGlkZSIsIl9sb29wIiwiX3NsaWRlclNwZWVkIiwiX3N3aXBlck9wdGlvbnMiLCJnZXRTd2lwZXJPcHRpb25zIiwiY2Fyb3VzZWxDb250YWluZXIiLCJwYWdpbmF0aW9uT2JqZWN0IiwiZGlzcGF0Y2giLCJwbGF5aW5nU3RhdGUiLCJKU09OIiwicGFyc2UiLCJiaW5kRXZlbnRMaXN0ZW5lcnMiLCJnZXRFbGVtZW50IiwiX2VsZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiYWNjb3JkaW9uV3JhcHBlciIsImNsb3Nlc3QiLCJhdXRvSGVpZ2h0IiwiaW5pdGlhbFNsaWRlIiwiZ3JhYkN1cnNvciIsInNwZWVkIiwicHJlbG9hZEltYWdlcyIsInVwZGF0ZU9uSW1hZ2VzUmVhZHkiLCJhMTF5IiwibmF2aWdhdGlvbiIsInByZXZFbCIsIm5leHRFbCIsIm9uIiwidHJhbnNpdGlvbkVuZCIsImxlbmd0aCIsIkFjY29yZGlvbiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnROb2RlIiwibm9kZUNsb25lIiwiY2xvbmVOb2RlIiwicmVtb3ZlIiwiYXBwZW5kQ2hpbGQiLCJwdXJnZUNhcm91c2VsRWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbXMiLCJlbGVtZW50cyIsIkFycmF5IiwiaXNBcnJheSIsIk5vZGVMaXN0Iiwic2luZ2xlRWxlbWVudCIsIkhUTUxFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJzZXRJbml0aWFsU2V0dGluZ3MiLCJwYXlsb2FkIiwidHlwZSIsInNldFBsYXlpbmdTdGF0ZSIsInNldEluaXRhbGlzYXRpb25TdGF0ZSIsImluaXRhbGlzYXRpb25TdGF0ZSIsInN0b3JlSUQiLCJ3aW5kb3ciLCJkeENhcm91c2VsUmVkdWNlcnMiLCJpbml0aWFsU3RhdGUiLCJpbml0aWFsaXNlZCIsInN0YXRlIiwiYWN0aW9uIiwiRHhUYWJzIiwib3B0aW9ucyIsIl9kZWZhdWx0cyIsInRhYnMiLCJ0YWJsaXN0IiwidGFic1dpZHRoVG90YWwiLCJwYW5lbHNDb250YWluZXIiLCJkb2N1bWVudCIsInBhbmVscyIsImFuaW1hdGluZyIsInNlbGVjdGVkUGFuZWwiLCJpbml0aWFsVGFiIiwiZmlyZUV2ZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsInRhYlNldHVwIiwic2V0SW5pdGlhbFN0YXRlIiwiYWRkRXZlbnRzIiwic2VsZWN0ZWRUYWIiLCJnZXRQYW5lbEZyb21UYWIiLCJldmVudFR5cGUiLCJ0YWIiLCJpbmRleCIsImlkIiwidGFiSWQiLCJwYW5lbElkIiwicGFuZWwiLCJzZXRBdHRyaWJ1dGUiLCJjb2xsYXBzZVdoaXRlc3BhY2VCZXR3ZWVuVGFicyIsInRhYkNsaWNrSGFuZGxlciIsImV2ZW50IiwidGhyb3R0bGVSZXNpemUiLCJzZXREaW1lbnNpb25zIiwiY2hpbGROb2RlcyIsIm5vZGUiLCJub2RlVHlwZSIsInNldE5ld1N0eWxlIiwic2V0VGFiU2l6ZXMiLCJzZXRNYXNrV2lkdGgiLCJvdmVyZmxvd0NoZWNrIiwidGFiTGlzdFN0eWxlcyIsImdldENvbXB1dGVkU3R5bGUiLCJ0YWJMaXN0UGFkZGluZyIsInBhcnNlRmxvYXQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiYWRkIiwiY2xhc3NlcyIsInRhYkxpc3RPdmVyZmxvdyIsInRhYkxpc3RXaWR0aCIsInRhYnNBcnJheSIsInZpc2libGVUYWJzQXJyYXkiLCJ0YWJzV2lkdGhSdW5uaW5nVG90YWwiLCJ2aXNpYmxlVGFic1dpZHRoUnVubmluZ1RvdGFsIiwicmVtb3ZlUHJvcGVydHkiLCJ0YWJTdHlsZXMiLCJ0YWJXaWR0aCIsInRhYk1heFdpZHRoIiwidGFiUGFkTGVmdCIsInRhYlBhZFJpZ2h0IiwidGV4dEFsaWduIiwibmV3VG90YWwiLCJ0YWJWaXNpYmxlIiwicHVzaCIsInZpc2libGVMZW5ndGgiLCJhZGRpdGlvbmFsUGFkZGluZyIsInByb3BzIiwid2lkdGhXaXRoUGFkZGluZyIsImNhbGNMZWZ0UGFkIiwiYWxpZ25lZCIsImNhbGNSaWdodFBhZCIsImxlZnRQYWQiLCJyaWdodFBhZCIsInVuc2V0VGFiSGVpZ2h0cyIsImVuc3VyZU5leHRUYWJWaXNpYmxlIiwicmVkdWNlciIsImFjY3VtdWxhdG9yIiwiY3VycmVudFZhbHVlIiwibmV3SGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwicmVkdWNlIiwibWFza1dpZHRoIiwid2lkdGgiLCJtYXNrIiwicHJldmVudERlZmF1bHQiLCJhY3RpdmUiLCJjdXJyZW50VGFyZ2V0IiwidGFiQWN0aXZlIiwicHJldmlvdXMiLCJ1bnNldEFjdGl2ZVRhYnMiLCJzZXRBY3RpdmVUYWIiLCJzd2l0Y2hUYWJQYW5lbHMiLCJzZXRBY3RpdmVUYWJQYW5lbCIsImNyZWF0ZUVsZW1lbnQiLCJ0YWJMaXN0VmlzaWJsZSIsInByZXZpb3VzVGFiIiwibmV4dFRhYiIsInByZXZpb3VzUGFuZWwiLCJmaW5pc2giLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkb0FuaW1hdGlvbiIsImZhZGVPdXRLZXlmcmFtZXMiLCJ0aW1pbmdGYWRlT3V0IiwiZmFkZUluS2V5ZnJhbWVzIiwidGltaW5nRmFkZUluIiwibWV0aG9kIiwidW5kZWZpbmVkIiwiZm4iLCJiaW5kIiwiZWxlbSIsInZhbHVlIiwia2V5ZnJhbWVzIiwidGltaW5nIiwiYW5pbWF0aW9uIiwiYW5pbWF0ZSIsInBhdXNlIiwib25maW5pc2giLCJwbGF5IiwiZWFzaW5nIiwiZmlsbCIsInRhYkxpc3QiLCJIZWFkZXJCb3giLCJvbkF0U21hbGxCcmVha3BvaW50IiwiJGVsZW1lbnQiLCIkIiwidWlTZWxlY3RvcnMiLCJoZWFkZXJCb3hDb250ZW50IiwiaGVhZGVyQm94V2lkdGhFbGVtZW50cyIsImhlYWRpbmdUZXh0TWFpbiIsInRvdGFsQ29zdEVsZW1lbnQiLCJfd2lkZXN0RWxlbWVudFdpZHRoIiwiX3Jlc2l6ZUJvdW5kIiwiX2NoZWNrVG90YWxDb3N0UHJpY2VXaWR0aCIsIl9jaGVja09ubHlIYXNQcmltYXJ5SGVhZGluZyIsImluaXRMaW5rcyIsIl9yZXNpemVIZWFkZXJCb3giLCJfdGNvT3JpZW50YXRpb25DaGVjayIsInNldFRlbExpbmtzU3RhdGUiLCJ0ZWxzIiwidGVsIiwicmVwbGFjZSIsInNlbGVjdG9yIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5uZXJIVE1MIiwidG90YWxDb3N0Iiwibm90RGVza3RvcCIsIm1hdGNoTWVkaWEiLCJjaGlsZHJlbiIsImlzTm90U21hbGxCcmVha3BvaW50Iiwic3R5bGVzIiwiZWxlbWVudFBhZGRpbmciLCJfZ2V0V2lkZXN0RWxlbWVudFdpZHRoIiwiaXRlbSIsImlzTm90SW5saW5lYWJsZSIsIm9mZnNldFdpZHRoIiwiVENPIiwibnVtYmVyRWwiLCJwcmljZVRleHQiLCJjdXJyZW5jeUVsIiwiY3VycmVuY3lUZXh0IiwiYXBwZW5kZWRFbCIsImFwcGVuZGVkRnJvbSIsInN1ZmZpeEVsIiwic3VmZml4RnJvbSIsImNhdmVhdEVsIiwiY2F2ZWF0RnJvbSIsImh0bWxUZXh0IiwicHJpY2VXaWR0aCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJIZXJvU2xpZGVUZW1wbGF0ZSIsInN3aXBlckluc3RhbmNlIiwiJHZpZGVvIiwidGFiYmVkQ29udGFpbmVyIiwiY2Fyb3VzZWxQYXJlbnQiLCJkeENhcm91c2VsUGFyZW50Iiwibm9uRGF0ZUF3YXJlU2xpZGUiLCJkYXRlUmVzdHJpY3RlZFdyYXBwZXIiLCJkYXRlUmVzdHJpY3RlZENvbnRlbnQiLCJoZWFkZXJCb3giLCJ2aWRlb1BsYXllciIsImRlZXBMaW5rYWJsZSIsImhhc0xlYXNlTGF5b3V0IiwiaXNGdWxsRnJhbWVUZW1wbGF0ZSIsInN0b3JlTmFtZSIsImFwcGx5SGVyb1NsaWRlQ2xhc3MiLCJhcHBseVNsaWRlVGFsbGVyQ2xhc3MiLCJjaGVja1NsaWRlRm9yTGVhc2VDbGFzcyIsImNoZWNrU2xpZGVGb3JBbHRlcm5hdGVMYXlvdXRDbGFzcyIsImZpbHRlckRhdGVBd2FyZUNvbnRlbnQiLCJ0b2dnbGVDYXJvdXNlbFRoZW1lIiwiaW5pdGFsaXNlU2xpZGVDb250ZW50IiwiYmluZFRhYmJlZENvbnRhaW5lckV2ZW50cyIsImJpbmRTbGlkZXJCYXNlZEV2ZW50cyIsImJpbmRDb250ZW50QmFzZWRFdmVudHMiLCJzZXRTbGlkZUhlaWdodCIsInRhcmdldEZvclJlbW92YWwiLCJkYXRlU2V0dGluZ3MiLCJhdG9iIiwiY3VycmVudERhdGUiLCJzdGFydERhdGVBcnJheSIsInN0YXJ0Iiwic3BsaXQiLCJlbmREYXRlQXJyYXkiLCJlbmQiLCJpIiwiZW5kWWVhciIsImVuZE1vbnRoIiwiZW5kRGF5IiwiZW5kSG91ciIsImVuZE1pbnV0ZXMiLCJzdGFydFllYXIiLCJzdGFydE1vbnRoIiwic3RhcnREYXkiLCJzdGFydEhvdXIiLCJzdGFydE1pbnV0ZXMiLCJzbGlkZVN0YXJ0RGF0ZSIsIkRhdGUiLCJVVEMiLCJzbGlkZUVuZERhdGUiLCJyZWJpbmRTZWxlY3RvcnNBZnRlckNvbnRlbnRGaWx0ZXIiLCJyZWJvdW5kU2VsZWN0b3JzIiwiaW5pdGFsaXNlSGVhZGVyQm94IiwiaW5pdGFsaXNlU2xpZGVMaW5rcyIsImluaXRpYWxpc2VTbGlkZVZpZGVvIiwidG9nZ2xlSGVhZGVyQm94VmlzaWJpbGl0eSIsIlJlc3BvbnNpdmVMaW5rIiwiVGFyZ2V0TGlua3MiLCJzaW5nbGVMaW5rIiwidmlkZW9PcHRpb25zIiwiY29udHJvbHMiLCJtdXRlZCIsImlzQmFja2dyb3VuZFZpZGVvIiwiY2xpY2tUb1BsYXlQYXVzZSIsInBhdXNlT3RoZXJQbGF5ZXJzIiwiaVBob25lVXNlTmF0aXZlQ29udHJvbHMiLCJpUGFkVXNlTmF0aXZlQ29udHJvbHMiLCJBbmRyb2lkVXNlTmF0aXZlQ29udHJvbHMiLCJWaWRlb1BsYXllciIsImJpbmRWaWRlb0V2ZW50cyIsInZpZGVvUGxheUJ1dHRvbiIsImhpZGUiLCJzaG93IiwiYWRqdXN0VmlkZW9QbGF5aW5nU3RhdGUiLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSIsInVwZGF0ZSIsImhlYWRlckJveFRoZW1lIiwiYnJhbmRJc0phZ3VhciIsImJvZHkiLCJzbGlkZUNvbnRhaW5zVENPIiwic2xpZGVDaGFuZ2VkIiwiYWN0aXZlU2xpZGUiLCJzbGlkZUNoYW5nZUV2ZW50RmlyZWQiLCJuZXdFbGVtZW50SGVpZ2h0Iiwic2V0RkZDU2xpZGVIZWlnaHQiLCJzZXRIZXJvU2xpZGVIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImJyZWFrcG9pbnRzIiwibWVkaXVtIiwiZnVsbFdpbmRvd0hlaWdodCIsImRldGVybWluZUZ1bGxXaW5kb3dIZWlnaHQiLCJlbGVtZW50U2l6ZXMiLCJ0ZXh0QXJlYVBhZGRpbmciLCJ0ZXh0QXJlYUhlaWdodCIsIm9mZnNldEhlaWdodCIsInJlcXVpcmVkTWluaW11bUhlaWdodCIsImEiLCJiIiwiaWRlYWxIZWlnaHQiLCJzZXRNYXhIZWlnaHQiLCJtYXhIZWlnaHQiLCJlbGVtZW50VG9wT2Zmc2V0Iiwib2Zmc2V0VG9wIiwibmF2aWdhdGlvbkhlaWdodCIsImNsYXNzTmFtZSIsImlzQmxhY2siLCJwYXVzZWQiLCJ3cmFwcGVyIiwid3JhcHBlclBsYXlQYXVzZSIsIndyYXBwZXJQaXAiLCJwaXAiLCJwaXBBY3RpdmUiLCJwbGF5aW5nIiwicGF1c2VUaW1lckljb24iLCJwYXVzZVRpbWVySWNvbkNvdW50ZG93biIsInBhdXNlVGltZXJJY29uQ291bnRkb3duQW5pbWF0aW5nIiwicGF1c2VDb250cm9sSWNvbiIsInBsYXlDb250cm9sSWNvbiIsImNvdW50ZG93biIsInBpcHMiLCJldmVudHMiLCJiZWZvcmVDaGFuZ2UiLCJhZnRlckNoYW5nZSIsImxvb3BFbmQiLCJnb3RvTmV4dCIsImdvdG9QcmV2aW91cyIsImNvdW50ZG93bkVuZCIsImxpdmVSZWdpb25VcGRhdGUiLCJwYXVzZUF0U3RhcnQiLCJkZWxheSIsInRpbWVyIiwic3RhcnRlZCIsInJlbWFpbmluZyIsIl9waXBJbmRleEF0dHJpYnV0ZSIsIl9wbGF5aW5nU3RhdHVzIiwiX2FsbG93Rm9jdXNUb2dnbGUiLCJfZGVsYXlUaW1lciIsIl9ub25Ib3ZlclBhdXNlZCIsIl9jcmVhdGVQYWdpbmF0aW9uIiwiaHRtbCIsIl9nZW5lcmF0ZUhUTUwiLCJfYXBwZW5kUGFnaW5hdGlvblRvQ29udGFpbmVyIiwiX2FkZFBhZ2luYXRpb25FdmVudHMiLCJfZmlyZUV2ZW50IiwiX3Jlc3RhcnRBbmltYXRpb24iLCJfcGxheUNvbnRyb2xJY29uU1ZHIiwiX3BhdXNlQ29udHJvbEljb25TVkciLCJ3cmFwcGVySFRNTCIsIm1vZGlmaWVyQ2xhc3MiLCJhZGROdW1iZXJUb0J1dHRvbkxhYmVsIiwiX3JlcGxhY2VQbGFjZWhvbGRlckxhYmVsVGV4dCIsIm51bWJlciIsInBpcEhUTUwiLCJfXyIsInBsYXlCdXR0b25IVE1MIiwiX3BsYXlCdXR0b25IVE1MIiwicGF1c2VCdXR0b25IVE1MIiwiX3BhdXNlQnV0dG9uSFRNTCIsImNvbnRyb2xzSFRNTCIsImpvaW4iLCJkaXYiLCJfY2FjaGVDb250cm9scyIsIl9zZXRBY3RpdmVTdGF0ZSIsInBsYXlpbmdTdGF0dXNBdFN0YXJ0IiwiX3NldFBsYXlpbmdTdGF0dXMiLCJhbmltYXRpb25EdXJhdGlvbiIsInNsaWNlIiwiY2FsbCIsImxpdmVSZWdpb25UZXh0IiwiX3VwZGF0ZUxpdmVSZWdpb25UZXh0IiwidGV4dCIsIl9nZXRQaXBJbmRleCIsIl9nZXRDdXJyZW50QWN0aXZlUGlwRWxlbWVudCIsImN1cnJlbnRQaXBFbGVtZW50IiwicGlwRWxlbWVudCIsInN0cm9rZURhc2hPZmZzZXRNaW4iLCJzdHJva2VEYXNoT2Zmc2V0TWF4IiwiYW5pbWF0aW9uQ29tcGxldGUiLCJhbmltYXRlRWxlbWVudCIsInN0cm9rZURhc2hvZmZzZXQiLCJvZmZzZXQiLCJjb3VudGRvd25UcmFuc2l0aW9uIiwiZmFkZUVsZW1lbnRJbiIsInNldFRpbWVvdXQiLCJhY3RpdmVDbGFzcyIsImFjdGl2ZVBpcCIsInRhcmdldFBpcCIsInRhcmdldCIsIl9nZXROZXh0UGlwSW5kZXgiLCJ0YXJnZXRQaXBJbmRleCIsInBpcHNBcnJheSIsInBpcEZyb20iLCJwaXBUbyIsImNvbnRyb2wiLCJfcGlwRXZlbnRIYW5kbGVyIiwiX3Jlc3VtZVRpbWVyQW5pbWF0aW9uIiwiX3BhdXNlVGltZXJBbmltYXRpb24iLCJzdGF0dXMiLCJfdG9nZ2xlRm9jdXMiLCJfc2hvd0NvbnRyb2wiLCJfaGlkZUNvbnRyb2wiLCJhbmltYXRpb25QbGF5U3RhdGUiLCJlbGVtZW50RnJvbSIsImVsZW1lbnRUbyIsImFjdGl2ZUVsZW1lbnQiLCJkZXRhaWwiLCJmb2N1cyIsIm9uSG92ZXIiLCJwYXVzZWRPbkhvdmVyIiwicmVzdW1lZE9uSG92ZXIiLCJfZ2V0UGxheWluZ1N0YXR1cyIsImNsaWNrIiwiY3VycmVudCIsImN1cnJlbnRJbmRleCIsIl9nZXRQcmV2aW91c1BpcEluZGV4IiwibmV4dEluZGV4IiwiX2dldEN1cnJlbnRBY3RpdmVQaXBJbmRleCIsIm5ld0FjdGl2ZVBpcEluZGV4IiwiaW5jbHVkZVBsYXlDb250cm9scyIsInRleHRUb0luc2VydCIsIlRhYmJlZENvbnRhaW5lciIsIl90b3RhbCIsIl9zZWxlY3RlZFRhYiIsIl9zZWxlY3RlZEluZGV4IiwiX2R4VGFicyIsImRlc3Ryb3llZCIsImRhdGEiLCJpbml0RHhUYWJzIiwiX3Jlc2l6ZUNvbXBvbmVudCIsIl9ub25KcXVlcnlDb21wb25lbnRzIiwiX2R4VGFic0VsZW1lbnQiLCJnZXQiLCJ0cmlnZ2VyIiwiX2Rlc3Ryb3lQcmV2aW91c1RhYiIsIl9pbml0aWFsaXplU2VsZWN0ZWRUYWIiLCJfcG9zaXRpb25UYWJzIiwidG9wIiwiY3NzIiwidGFibGlzdFBhZFRvcCIsInRhYkhlaWdodCIsImNvbXBvbmVudFR5cGUiLCJjb21wb25lbnRFbGVtZW50IiwiaXNDb21wb25lbnROb25KcXVlcnlCYXNlZCIsImluY2x1ZGVzIiwiSGVyb1NsaWRlcyIsInByb3RvdHlwZSIsImVsIiwiYXR0ciIsImxlbiIsImluZGV4T2YiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiX2FjdGl2ZVRhYiIsImRlc3Ryb3kiLCJpc01vYmlsZSIsImlzVGFibGV0IiwiaXNEZXNrdG9wIiwiYWRqdXN0VGFiYmVkQ29udGFpbmVySGVpZ2h0IiwiZmZjRXhjZXB0aW9uIiwicHJldmlvdXNUYWJIZWlnaHQiLCJqUXVlcnkiLCJjcmVhdGVDb21wb25lbnQiLCJLZXlDb2RlIiwiQkFDS1NQQUNFIiwiREVMRVRFIiwiRE9XTiIsIkVORCIsIkVTQyIsIkhPTUUiLCJMRUZUIiwiUEFHRV9ET1dOIiwiUEFHRV9VUCIsIlJFVFVSTiIsIlJJR0hUIiwiU1BBQ0UiLCJUQUIiLCJVUCIsInNtYWxsIiwid2lkZXIiLCJnZXREZXZpY2VPcmllbnRhdGlvbiIsIiR3aW5kb3ciLCJnZXRMYXJnZXJCcmVha3BvaW50IiwiZ2V0QnJlYWtwb2ludFNpemUiLCJvbGRDYWxjIiwiaXNCcmVha3BvaW50U21hbGwiLCJpc0JyZWFrcG9pbnRNZWRpdW0iLCJpc01vYmlsZURldmljZSIsIkRvY3VtZW50VG91Y2giLCJuYXZpZ2F0b3IiLCJtc01heFRvdWNoUG9pbnRzIiwiaXNOb3RNb2JpbGVEZXZpY2UiLCJpc1RhYmxldERldmljZSIsInRlc3QiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImlzSU9TIiwiaXNOb3RJT1MiLCJpc1dpbmRvd3NQaG9uZSIsImdldEFuZHJvaWRWZXJzaW9uIiwidWEiLCJnZXRCcm93c2VyVXNlckFnZW50IiwiZGV0ZWN0QnJvd3NlcnMiLCJicm93c2VycyIsImlzQ2hyb21lIiwiaXNNc0VkZ2UiLCJpc0V4cGxvcmVyIiwiaXNGaXJlZm94IiwiaXNTYWZhcmkiLCJpc09wZXJhIiwiaXNJZSIsImlzSWUxMSIsIkFjdGl2ZVhPYmplY3QiLCJnZXRWaWV3cG9ydFNpemUiLCJjc3NUZXh0IiwiZG9jdW1lbnRFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImRpbXMiLCJzY3JvbGxUb0VsZW1lbnQiLCJjYWxsYmFjayIsIm9wdHMiLCJleHRlbmQiLCJhZGp1c3RtZW50IiwiZWFzZSIsImNvbnRhaW5lciIsInN0b3AiLCJzY3JvbGxUb3AiLCJoYXNCaWdJbnRTdXBwb3J0IiwiQmlnSW50Iiwid3JhcCIsInVud3JhcCIsInBhcmVudCIsIndyYXBBbGwiLCJjcmVhdGVBcnJheSIsImVsZW1lbnRzQXJyYXkiLCJpbnNlcnRBZnRlciIsImJlZm9yZSIsImFmdGVyIiwibmV4dFNpYmxpbmciLCIkbmF2SGVhZGVyIiwic3RpY2t5TmF2aWdhdGlvbkVuYWJsZWQiLCJzdGlja3lOYXZpZ2F0aW9uVHJhbnNpdGlvblBvaW50IiwidGVtcGxhdGVDYWNoZSIsImdvb2dsZU1hcFN0eWxlcyIsImZlYXR1cmVUeXBlIiwiZWxlbWVudFR5cGUiLCJzdHlsZXJzIiwiY29sb3IiLCJ2aXNpYmlsaXR5Iiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImlzUnRsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRDYWNoZWRTY3JpcHQiLCJ1cmwiLCJuZXdPcHRpb25zIiwiZGF0YVR5cGUiLCJjYWNoZSIsImFqYXgiLCJnZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJnZXRTdGlja3lOYXZIZWlnaHQiLCJ5UG9zIiwib2xkQ2FsY3VsYXRpb24iLCJ5UG9zaXRpb24iLCJzaGFyZWRIZWFkZXIiLCIkaGVhZGVyIiwiJGluUGFnZU5hdiIsIiRpblBhZ2VOYXZTdGlja3kiLCIkaW5QYWdlTmF2QmFyIiwiZHhOYXZQcmltYXJ5IiwiYnJlYWtwb2ludCIsImNoZWNrU3RpY2t5TmF2IiwiaW5QYWdlTmF2VG9wIiwiaXNTdGlja3lOYXYiLCJvbGROYXZCcmVha3BvaW50Iiwib3V0ZXJIZWlnaHQiLCJnZXROYXZpZ2F0aW9uSGVpZ2h0IiwiZ2V0TmFhU0hlaWdodCIsIm9sZCIsInByaW1hcnlOYXZIZWlnaHQiLCJicmVhZGNydW1iTmF2SGVpZ2h0Iiwibm90aWZpY2F0aW9uSGVpZ2h0IiwiaW5QYWdlTmF2aWdhdGlvbkhlaWdodCIsIk1hdGgiLCJtYXgiLCJnZXRTdGlja3lOYXZIZWlnaHRWMiIsInNjcm9sbFRvIiwiaWdub3JlU3RpY2t5TmF2IiwieU9mZnNldCIsIm5ld0R1cmF0aW9uIiwibmV3Q2FsbGJhY2siLCJuZXdFYXNpbmciLCJwb3NpdGlvbiIsIiR0YXJnZXRFbCIsInByb21pc2UiLCJkb25lIiwiY2hlY2tEZWVwTGluayIsImhyZWYiLCJkZWVwTGluayIsImhhc2hQb3MiLCJzdWJzdHJpbmciLCJsb2NhdGlvbiIsImFjY29yZGlvblBhcmVudCIsImFjY29yZGlvblRpdGxlIiwiZmluZCIsImhhc0NsYXNzIiwicGFyZW50cyIsIiRjb250YWluZXIiLCIkdGFicyIsIiR0YWJMaW5rcyIsInRhYkluZGV4IiwiZWFjaCIsIiRsb2NhdGlvbiIsImFjY29yZGlvbkhlYWRlciIsImlzIiwiY29uc29sZSIsImVycm9yIiwiaXNQYWdlSW5JZnJhbWUiLCJzZWxmIiwiaW5zaWRlVGFiYmVkQ29udGFpbmVyIiwiaXNJbnNpZGVUYWJiZWRDb250YWluZXIiLCJub3QiLCJtb2JpbGVBY2NvcmRpb25zQWN0aXZhdGVkIiwicmVtb3ZlSFRNTFRhZ3MiLCJzIiwidG9TdHJpbmciLCJnZXRVcmxQYXJhbWV0ZXIiLCJzUGFyYW0iLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzUGFnZVVSTCIsInNlYXJjaCIsInNVUkxWYXJpYWJsZXMiLCJzUGFyYW1ldGVyU3BsaXQiLCJhZGRQYXJhbWV0ZXJUb1VSTCIsInBhcmFtIiwibmV3VXJsIiwiZ2V0T2JqZWN0S2V5cyIsIm9iaiIsImtleXMiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbnZhc0RyYXdCZ0NvdmVyIiwiY3R4IiwiaW1nIiwieCIsInkiLCJ3IiwiaCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYXJndW1lbnRzIiwiY2FudmFzIiwiaXciLCJpaCIsInIiLCJtaW4iLCJudyIsIm5oIiwiY3giLCJjeSIsImN3IiwiY2giLCJhciIsImRyYXdJbWFnZSIsImhhc1BsYWNlaG9sZGVyU3VwcG9ydCIsImlzUGFnZUluWFBNRnJhbWUiLCJUcmlkaW9uIiwiV2ViIiwiVUkiLCJTaXRlRWRpdCIsImVsZW1lbnRJblZpZXdwb3J0IiwiYWRqdXN0Iiwid2luZG93SW5uZXJIZWlnaHQiLCJhZGp1c3RUb3AiLCJhZGp1c3RCb3R0b20iLCJlbE9mZnNldCIsImVsVG9wIiwiZWxCb3R0b20iLCJkZWZhdWx0QWRqdXN0Iiwidmlld3BvcnRCb3R0b20iLCJib3R0b20iLCJnZXRSYW5kb21TdHJpbmciLCJmb3JtYXR0ZWRMZW5ndGgiLCJjaGFycyIsImNob3NlbiIsImNoYXJBdCIsImZsb29yIiwicmFuZG9tIiwiZ2V0RWFzaW5nVmFsdWUiLCJyYXRpbyIsImZvcm1hdHRlZFJhdGlvIiwicmFkaWFucyIsIlBJIiwiY29zIiwiZGlzYWJsZVNjcm9sbCIsImVuYWJsZVNjcm9sbCIsIm9mZiIsImxpbWl0TnVtYmVyIiwib2xkTWluIiwibG9hZElnbm9yZWRSZXNwb25zaXZlSW1hZ2VzIiwiJGltYWdlcyIsInJlbW92ZUF0dHIiLCJyaWNoc3BvbnNpdmVJbWFnZSIsInRocm90dGxlIiwidGhyZXNoaG9sZCIsInNjb3BlIiwidGhyZXNoIiwibGFzdCIsImRlZmVyVGltZXIiLCJjb250ZXh0Iiwibm93IiwiYXJncyIsImNsZWFyVGltZW91dCIsImFwcGx5IiwibWVhc3VyZVRleHRXaWR0aCIsInBhciIsInBhZGRpbmciLCJ3aGl0ZVNwYWNlIiwiY2xpZW50V2lkdGgiLCJnZXRUcmFuc2l0aW9uRW5kRXZlbnQiLCJ0cmFuc2l0aW9ucyIsInRyYW5zaXRpb24iLCJPVHJhbnNpdGlvbiIsIk1velRyYW5zaXRpb24iLCJXZWJraXRUcmFuc2l0aW9uIiwidGVtcGxhdGUiLCJzdHIiLCJnZXRFbGVtZW50QnlJZCIsIkZ1bmN0aW9uIiwiaXNJblZpZXdwb3J0Iiwid2luIiwidmlld3BvcnQiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsInJpZ2h0IiwiYm91bmRzIiwib3V0ZXJXaWR0aCIsInNjcm9sbElmTm90SW5WaWV3cG9ydCIsImRpc3BsYXlUb0JvdHRvbSIsInNjcm9sbFRvUG9zIiwiaXNMYW5kUm92ZXIiLCJnZXRUYWJiYWJsZSIsImN1c3RvbVNlbGVjdG9ycyIsImRlZmF1bHRTZWxlY3RvcnMiLCJzZWxlY3RvclR5cGVzIiwiY29uY2F0Iiwic2VsZWN0b3JzIiwiZmlsdGVyIiwidGFiYmFibGUiLCJvZmZzZXRQYXJlbnQiLCJpc0ludmlzaWJsZSIsImxvY2tUYWJiYWJsZXMiLCJ0YWJiYWJsZXMiLCJlIiwia2V5Q29kZSIsInNoaWZ0S2V5IiwiYmFsYW5jZUVsZW1lbnRIZWlnaHQiLCJhbGxvd2VkT2Zmc2V0IiwiY29sdW1ucyIsImhlaWdodFRvdGFsIiwiaGVpZ2h0c0FycmF5IiwiZWxlbWVudEhlaWdodCIsImdldEJhbGFuY2VkSW5kZXgiLCJhcnJheSIsInJ1bm5pbmdUb3RhbCIsImlzUmVjdXJzaXZlIiwic3BsaXRJbmRleCIsImNvbHVtbnMxIiwiY29sdW1uczIiLCJldmVudFRyaWdnZXIiLCJidWJibGVzIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiY29udmVydEVsZW1lbnRDb2xsZWN0aW9uVG9BcnJheSIsImNvbGxlY3Rpb24iLCJyYW5kb21pc2VFbGVtZW50cyIsImVsZW1lbnRzQ29sbGVjdGlvbiIsImNsb25lZEVsZW1lbnRzIiwic29ydCIsImluYyIsInJlcGxhY2VDaGlsZCIsImlzRWxlbWVudFZlcnRpY2FsbHlTY3JvbGxhYmxlIiwic2Nyb2xsSGVpZ2h0IiwiY2hlY2tEZWZpbmVkIiwidGFibGlzdE5hdmlnYXRpb24iLCJvcmllbnRhdGlvbiIsImlzVmVydGljYWwiLCJmb2N1c0ZpcnN0VGFiIiwiZm9jdXNMYXN0VGFiIiwiZm9jdXNQcmV2aW91c1RhYiIsImN1cnJlbnRUYWIiLCJmaW5kSW5kZXgiLCJmb2N1c05leHRUYWIiLCJ0YWJzTGVuZ3RoWmVyb0luZGV4IiwiaGFuZGxlVGFibGlzdEtleWRvd25FdmVudHMiLCJrZXkiLCJoYW5kbGVUYWJsaXN0S2V5dXBFdmVudHMiLCJpc0VtcHR5IiwiT2JqZWN0IiwicmVwbGFjZUFsbCIsInN0cmluZyIsInJlcGxhY2VtZW50IiwiZHhTZXRUaW1lb3V0IiwiY2IiLCJ0aW1lIiwiYXBwUmVhZHlFdmVudCIsImluaXRpYXRlZCIsImFwcFJlYWR5VGltZXIiLCJ0aW1lb3V0IiwiRHhSZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lIiwibG9hZGluZ1NwaW5uZXJUb2dnbGVCdXR0b25TdGF0ZUFuZENvbnRlbnQiLCJ0YXJnZXRFbGVtZW50IiwidGFnTmFtZSIsImRpc2FibGVkIiwiY2hpbGQiLCJhZGREeExvYWRpbmdTcGlubmVyIiwiaWNvbk1hcmt1cCIsImxvYWRpbmdJY29uIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJyZW1vdmVEeExvYWRpbmdTcGlubmVyIiwiYWRkRHhFbGVtZW50TG9hZGluZ1NwaW5uZXIiLCJsb2NhbFN0b3JhZ2VBdmFpbGFibGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJhZGRTY3JpcHRGb3JCYXphYXJWb2ljZSIsInNjcmlwdFVSTCIsInRyaW0iLCJiYXphYXJWb2ljZVNjcmlwdCIsImhlYWQiLCJlcXVhbGlzZUhlaWdodHMiLCJnZW5lcmF0ZUN1cnJlbnREYXRlIiwidG9kYXkiLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsImdldFVUQ0hvdXJzIiwiZ2V0VVRDTWludXRlcyIsInByZXZlbnRBY3Rpb25PbkRlZXBMaW5rIiwibGlua0xvY2F0aW9uIiwic3dpcGVyRW1pdEV2ZW50c09uRWxlbWVudCIsInN3aXBlck9iamVjdCIsInN3aXBlclByZXZlbnRUYWJiaW5nSXNzdWVzIiwidGFiYmFibGVFbGVtZW50cyIsIndyYXBwZXJFbCIsImV4aXN0aW5nVGFiaW5kZXgiLCJzbGlkZXMiLCJzZXRTbGlkZVN0eWxlIiwic2xpZGUiLCJoaWRlU2xpZGVzT3V0T2ZWaWV3cG9ydCIsImFsbFNsaWRlcyIsInBhcmFtcyIsInNsaWRlQWN0aXZlQ2xhc3MiLCJzbGlkZVRyYW5zaXRpb25TdGFydCIsInNsaWRlVHJhbnNpdGlvbkVuZCIsInN3aXBlckRpc2FibGVBdXRvcGxheU9uU2xpZGVGb2N1cyIsIm9yaWdpbmFsUGFyYW1zIiwiaGFuZGxlRm9jdXNpbiIsImhhbmRsZUZvY3Vzb3V0Iiwic3dpcGVySW50ZWdyYXRlQ3VzdG9tUGFnaW5hdGlvbiIsIm9iamVjdCIsImR4UGFnaW5hdGlvbiIsImxvb3BPZmZzZXQiLCJzbGlkZVRvIiwibGl2ZVJlZ2lvbiIsImlzVmlkZW8iLCJpc05leHRCdXR0b24iLCJpc1ByZXZCdXR0b24iLCJtb3ZlU3luY0hhbmRsZXIiLCJpbmRleE1pc21hdGNoIiwicmVhbEluZGV4Iiwic3dpcGVyU2V0QXJpYUxpdmVPbkZvY3VzSW4iLCJhcmlhbGl2ZU9uRm9jdXNJbiIsInN3aXBlck1vZGlmeU5hdmlnYXRpb24iLCJwcmV2aW91c0Fycm93U1ZHIiwibmV4dEFycm93U1ZHIiwibW9kaWZ5QXJyb3ciLCJhcnJvdyIsImljb24iLCJzd2lwZXJBMTF5SGVscGVyIiwiY29uZmlnIiwic3dpcGVyQTExeURlc3Ryb3kiLCJzd2lwZXJQcmV2ZW50RGVmYXVsdEJ1dHRvbkFjdGlvbiIsInN3aXBlclByZXZlbnRFbnRlckRvdWJsZUFjdGlvbiIsIndoaWNoIiwiZG9jdW1lbnRUb3BPZmZzZXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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K0JBQStCcEksQ0FBL0IsQ0FBTDtBQUFBLEdBQXJDO0FBQ0QsQ0FyQk0sQzs7Ozs7Ozs7Ozs7Ozs7QUM5TUEsSUFBTXJkLHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFNNVAsU0FBU2llLGVBQVQsQ0FBeUI4QyxZQUEvQjtBQUFBLENBQXJCOztBQUVBLElBQU1yUixvQ0FBYyxTQUFkQSxXQUFjO0FBQUEsU0FBTTFQLFNBQVNpZSxlQUFULENBQXlCNk0sV0FBL0I7QUFBQSxDQUFwQjs7QUFFQSxJQUFNeUssZ0RBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ2w5QixPQUFELEVBQWE7QUFDNUMsTUFBSWtPLE9BQU9sTyxPQUFYO0FBQ0EsTUFBSXNkLFNBQVMsQ0FBYjtBQUNBLEtBQUc7QUFDREEsY0FBVXBQLEtBQUtzSyxTQUFmO0FBQ0F0SyxXQUFPQSxLQUFLc21CLFlBQVo7QUFDRCxHQUhELFFBR1N0bUIsSUFIVDtBQUlBLFNBQU9vUCxTQUFTLENBQVQsR0FBYSxDQUFiLEdBQWlCQSxNQUF4QjtBQUNELENBUk0sQzs7Ozs7Ozs7Ozs7QUNKUCx3QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGFiYmVkQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi93ZWJhcHAvY29tcG9uZW50cy9UYWJiZWRDb250YWluZXIvanMvVGFiYmVkQ29udGFpbmVyLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3Byb21pc2UgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9wcm9taXNlXCIpO1xuXG52YXIgX3Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvbWlzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBuZXcgX3Byb21pc2UyLmRlZmF1bHQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gc3RlcChrZXksIGFyZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfcHJvbWlzZTIuZGVmYXVsdC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc3RlcChcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHN0ZXAoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiKTtcbiAgICB9KTtcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbnZhciBfaXNJdGVyYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0l0ZXJhYmxlMik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzSXRlcmFibGUzLmRlZmF1bHQpKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUnKTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnZhbHVlcztcbiIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAoIUJVR0dZICYmICRuYXRpdmUpIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwidmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBpc0VudW0gPSByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlzRW50cmllcykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gZ2V0S2V5cyhPKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSkge1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldCA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLl9oICE9PSAxICYmIChwcm9taXNlLl9hIHx8IHByb21pc2UuX2MpLmxlbmd0aCA9PT0gMDtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKShmYWxzZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhpdCkge1xuICAgIHJldHVybiAkdmFsdWVzKGl0KTtcbiAgfVxufSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLWZpbmFsbHlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdQcm9taXNlJywgeyAnZmluYWxseSc6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKTtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgfSA6IG9uRmluYWxseSxcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHlcbiAgKTtcbn0gfSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLXRyeVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7ICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gcGVyZm9ybShjYWxsYmFja2ZuKTtcbiAgKHJlc3VsdC5lID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnYpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn0gfSk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG4iLCJpbXBvcnQgJCRvYnNlcnZhYmxlIGZyb20gJ3N5bWJvbC1vYnNlcnZhYmxlJztcblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbnZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogJ0BAcmVkdXgvSU5JVCcgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKSxcbiAgUkVQTEFDRTogJ0BAcmVkdXgvUkVQTEFDRScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKVxufTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICgodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqKSkgIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBwcm90byA9IG9iajtcbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bykgIT09IG51bGwpIHtcbiAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gKlxuICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgc3RvcmUgaW4geW91ciBhcHAuIFRvIHNwZWNpZnkgaG93IGRpZmZlcmVudFxuICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICpcbiAqIEBwYXJhbSB7YW55fSBbcHJlbG9hZGVkU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAqIHByZXZpb3VzbHkgc2VyaWFsaXplZCB1c2VyIHNlc3Npb24uXG4gKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtlbmhhbmNlcl0gVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICogdGltZSB0cmF2ZWwsIHBlcnNpc3RlbmNlLCBldGMuIFRoZSBvbmx5IHN0b3JlIGVuaGFuY2VyIHRoYXQgc2hpcHMgd2l0aCBSZWR1eFxuICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAqXG4gKiBAcmV0dXJucyB7U3RvcmV9IEEgUmVkdXggc3RvcmUgdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBzdGF0ZSwgZGlzcGF0Y2ggYWN0aW9uc1xuICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIGVuaGFuY2VyID0gcHJlbG9hZGVkU3RhdGU7XG4gICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGVuaGFuY2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSByZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgY3VycmVudFJlZHVjZXIgPSByZWR1Y2VyO1xuICB2YXIgY3VycmVudFN0YXRlID0gcHJlbG9hZGVkU3RhdGU7XG4gIHZhciBjdXJyZW50TGlzdGVuZXJzID0gW107XG4gIHZhciBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcbiAgdmFyIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBub3QgY2FsbCBzdG9yZS5nZXRTdGF0ZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdUaGUgcmVkdWNlciBoYXMgYWxyZWFkeSByZWNlaXZlZCB0aGUgc3RhdGUgYXMgYW4gYXJndW1lbnQuICcgKyAnUGFzcyBpdCBkb3duIGZyb20gdGhlIHRvcCByZWR1Y2VyIGluc3RlYWQgb2YgcmVhZGluZyBpdCBmcm9tIHRoZSBzdG9yZS4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLnN1YnNjcmliZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdJZiB5b3Ugd291bGQgbGlrZSB0byBiZSBub3RpZmllZCBhZnRlciB0aGUgc3RvcmUgaGFzIGJlZW4gdXBkYXRlZCwgc3Vic2NyaWJlIGZyb20gYSAnICsgJ2NvbXBvbmVudCBhbmQgaW52b2tlIHN0b3JlLmdldFN0YXRlKCkgaW4gdGhlIGNhbGxiYWNrIHRvIGFjY2VzcyB0aGUgbGF0ZXN0IHN0YXRlLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGktcmVmZXJlbmNlL3N0b3JlI3N1YnNjcmliZShsaXN0ZW5lcikgZm9yIG1vcmUgZGV0YWlscy4nKTtcbiAgICB9XG5cbiAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcblxuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IHVuc3Vic2NyaWJlIGZyb20gYSBzdG9yZSBsaXN0ZW5lciB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS1yZWZlcmVuY2Uvc3RvcmUjc3Vic2NyaWJlKGxpc3RlbmVyKSBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgICAgfVxuXG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcblxuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghaXNQbGFpbk9iamVjdChhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiAnICsgJ1VzZSBjdXN0b20gbWlkZGxld2FyZSBmb3IgYXN5bmMgYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuICcgKyAnSGF2ZSB5b3UgbWlzc3BlbGxlZCBhIGNvbnN0YW50PycpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLlJFUExBQ0UgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJvcGVyYWJpbGl0eSBwb2ludCBmb3Igb2JzZXJ2YWJsZS9yZWFjdGl2ZSBsaWJyYXJpZXMuXG4gICAqIEByZXR1cm5zIHtvYnNlcnZhYmxlfSBBIG1pbmltYWwgb2JzZXJ2YWJsZSBvZiBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYnNlcnZhYmxlXG4gICAqL1xuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICgodHlwZW9mIG9ic2VydmVyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYnNlcnZlcikpICE9PSAnb2JqZWN0JyB8fCBvYnNlcnZlciA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBvYnNlcnZlciB0byBiZSBhbiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlU3RhdGUoKSB7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZVN0YXRlKCk7XG4gICAgICAgIHZhciB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7IHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9yZWY7XG4gIH1cblxuICAvLyBXaGVuIGEgc3RvcmUgaXMgY3JlYXRlZCwgYW4gXCJJTklUXCIgYWN0aW9uIGlzIGRpc3BhdGNoZWQgc28gdGhhdCBldmVyeVxuICAvLyByZWR1Y2VyIHJldHVybnMgdGhlaXIgaW5pdGlhbCBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgLy8gdGhlIGluaXRpYWwgc3RhdGUgdHJlZS5cbiAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuXG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMlskJG9ic2VydmFibGVdID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG5cbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxufVxuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbikge1xuICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgdmFyIGFjdGlvbkRlc2NyaXB0aW9uID0gYWN0aW9uVHlwZSAmJiAnYWN0aW9uIFwiJyArIFN0cmluZyhhY3Rpb25UeXBlKSArICdcIicgfHwgJ2FuIGFjdGlvbic7XG5cbiAgcmV0dXJuICdHaXZlbiAnICsgYWN0aW9uRGVzY3JpcHRpb24gKyAnLCByZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQuICcgKyAnVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLiAnICsgJ0lmIHlvdSB3YW50IHRoaXMgcmVkdWNlciB0byBob2xkIG5vIHZhbHVlLCB5b3UgY2FuIHJldHVybiBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLic7XG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuSU5JVCA/ICdwcmVsb2FkZWRTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnIDogJ3ByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyJztcblxuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgJyArICd0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuJztcbiAgfVxuXG4gIGlmICghaXNQbGFpbk9iamVjdChpbnB1dFN0YXRlKSkge1xuICAgIHJldHVybiAnVGhlICcgKyBhcmd1bWVudE5hbWUgKyAnIGhhcyB1bmV4cGVjdGVkIHR5cGUgb2YgXCInICsge30udG9TdHJpbmcuY2FsbChpbnB1dFN0YXRlKS5tYXRjaCgvXFxzKFthLXp8QS1aXSspLylbMV0gKyAnXCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgJyArICgna2V5czogXCInICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyAnXCInKTtcbiAgfVxuXG4gIHZhciB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICFyZWR1Y2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XTtcbiAgfSk7XG5cbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcblxuICBpZiAoYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5SRVBMQUNFKSByZXR1cm47XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gJ1VuZXhwZWN0ZWQgJyArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgJyAnICsgKCdcIicgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArICdcIiBmb3VuZCBpbiAnICsgYXJndW1lbnROYW1lICsgJy4gJykgKyAnRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiAnICsgKCdcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiAnICsgJ0lmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCAnICsgJ2V4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgJyArICdub3QgYmUgdW5kZWZpbmVkLiBJZiB5b3UgZG9uXFwndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsICcgKyAneW91IGNhbiB1c2UgbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC4nKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZSA9ICdAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7IHR5cGU6IHR5cGUgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuICcgKyAoJ0RvblxcJ3QgdHJ5IHRvIGhhbmRsZSAnICsgQWN0aW9uVHlwZXMuSU5JVCArICcgb3Igb3RoZXIgYWN0aW9ucyBpbiBcInJlZHV4LypcIiAnKSArICduYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSAnICsgJ2N1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsICcgKyAnaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlICcgKyAnYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuJyk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2FybmluZygnTm8gcmVkdWNlciBwcm92aWRlZCBmb3Iga2V5IFwiJyArIGtleSArICdcIicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTtcblxuICB2YXIgdW5leHBlY3RlZEtleUNhY2hlID0gdm9pZCAwO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHt9O1xuICB9XG5cbiAgdmFyIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSB2b2lkIDA7XG4gIHRyeSB7XG4gICAgYXNzZXJ0UmVkdWNlclNoYXBlKGZpbmFsUmVkdWNlcnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2hhcGVBc3NlcnRpb25FcnJvciA9IGU7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oKSB7XG4gICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcbiAgICAgIHRocm93IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciB3YXJuaW5nTWVzc2FnZSA9IGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2Uoc3RhdGUsIGZpbmFsUmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKTtcbiAgICAgIGlmICh3YXJuaW5nTWVzc2FnZSkge1xuICAgICAgICB3YXJuaW5nKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfa2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tfaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNbX2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW19rZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2UoX2tleSwgYWN0aW9uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBuZXh0U3RhdGVbX2tleV0gPSBuZXh0U3RhdGVGb3JLZXk7XG4gICAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBuZXh0U3RhdGVGb3JLZXkgIT09IHByZXZpb3VzU3RhdGVGb3JLZXk7XG4gICAgfVxuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uIGNyZWF0b3JzLCBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZVxuICogc2FtZSBrZXlzLCBidXQgd2l0aCBldmVyeSBmdW5jdGlvbiB3cmFwcGVkIGludG8gYSBgZGlzcGF0Y2hgIGNhbGwgc28gdGhleVxuICogbWF5IGJlIGludm9rZWQgZGlyZWN0bHkuIFRoaXMgaXMganVzdCBhIGNvbnZlbmllbmNlIG1ldGhvZCwgYXMgeW91IGNhbiBjYWxsXG4gKiBgc3RvcmUuZGlzcGF0Y2goTXlBY3Rpb25DcmVhdG9ycy5kb1NvbWV0aGluZygpKWAgeW91cnNlbGYganVzdCBmaW5lLlxuICpcbiAqIEZvciBjb252ZW5pZW5jZSwgeW91IGNhbiBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYW5kIGdldCBhIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbiAgfVxuXG4gIGlmICgodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhY3Rpb25DcmVhdG9ycykpICE9PSAnb2JqZWN0JyB8fCBhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYmluZEFjdGlvbkNyZWF0b3JzIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uLCBpbnN0ZWFkIHJlY2VpdmVkICcgKyAoYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGFjdGlvbkNyZWF0b3JzKSkgKyAnLiAnICsgJ0RpZCB5b3Ugd3JpdGUgXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiIGluc3RlYWQgb2YgXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXCI/Jyk7XG4gIH1cblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFjdGlvbkNyZWF0b3JzKTtcbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuLyoqXG4gKiBDb21wb3NlcyBzaW5nbGUtYXJndW1lbnQgZnVuY3Rpb25zIGZyb20gcmlnaHQgdG8gbGVmdC4gVGhlIHJpZ2h0bW9zdFxuICogZnVuY3Rpb24gY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzIGFzIGl0IHByb3ZpZGVzIHRoZSBzaWduYXR1cmUgZm9yXG4gKiB0aGUgcmVzdWx0aW5nIGNvbXBvc2l0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jcyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gb2J0YWluZWQgYnkgY29tcG9zaW5nIHRoZSBhcmd1bWVudCBmdW5jdGlvbnNcbiAqIGZyb20gcmlnaHQgdG8gbGVmdC4gRm9yIGV4YW1wbGUsIGNvbXBvc2UoZiwgZywgaCkgaXMgaWRlbnRpY2FsIHRvIGRvaW5nXG4gKiAoLi4uYXJncykgPT4gZihnKGgoLi4uYXJncykpKS5cbiAqL1xuXG5mdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgdmFyIF9kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rpc3BhdGNoaW5nIHdoaWxlIGNvbnN0cnVjdGluZyB5b3VyIG1pZGRsZXdhcmUgaXMgbm90IGFsbG93ZWQuICcgKyAnT3RoZXIgbWlkZGxld2FyZSB3b3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGRpc3BhdGNoLicpO1xuICAgICAgfTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2guYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBjb21wb3NlLmFwcGx5KHVuZGVmaW5lZCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdG9yZSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG4vKlxuICogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuICogSWYgdGhlIGZ1bmN0aW9uIGhhcyBiZWVuIG1pbmlmaWVkIGFuZCBOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLCB3YXJuIHRoZSB1c2VyLlxuICovXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICB3YXJuaW5nKFwiWW91IGFyZSBjdXJyZW50bHkgdXNpbmcgbWluaWZpZWQgY29kZSBvdXRzaWRlIG9mIE5PREVfRU5WID09PSAncHJvZHVjdGlvbicuIFwiICsgJ1RoaXMgbWVhbnMgdGhhdCB5b3UgYXJlIHJ1bm5pbmcgYSBzbG93ZXIgZGV2ZWxvcG1lbnQgYnVpbGQgb2YgUmVkdXguICcgKyAnWW91IGNhbiB1c2UgbG9vc2UtZW52aWZ5IChodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9sb29zZS1lbnZpZnkpIGZvciBicm93c2VyaWZ5ICcgKyAnb3IgRGVmaW5lUGx1Z2luIGZvciB3ZWJwYWNrIChodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMwMDMwMDMxKSAnICsgJ3RvIGVuc3VyZSB5b3UgaGF2ZSB0aGUgY29ycmVjdCBjb2RlIGZvciB5b3VyIHByb2R1Y3Rpb24gYnVpbGQuJyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGJpbmRBY3Rpb25DcmVhdG9ycywgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBBY3Rpb25UeXBlcyBhcyBfX0RPX05PVF9VU0VfX0FjdGlvblR5cGVzIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IHBvbnlmaWxsIGZyb20gJy4vcG9ueWZpbGwuanMnO1xuXG52YXIgcm9vdDtcblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IG1vZHVsZTtcbn0gZWxzZSB7XG4gIHJvb3QgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xufVxuXG52YXIgcmVzdWx0ID0gcG9ueWZpbGwocm9vdCk7XG5leHBvcnQgZGVmYXVsdCByZXN1bHQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdFN5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLyoqXG4gKiBHZXQgYWxsIGExMXkgbGFiZWxzIGZvciBpbnRlcmFjdGl2ZSBlbGVtZW50cyBpbiBjYXJvdXNlbFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBIVE1MIEVsZW1lbnQgdGhhdCBjb250YWlucyBhbGwgY2Fyb3VzZWwgZGF0YSBhdHRyaWJ1dGVzXG4gKiBAdGhyb3dzIEVycm9yIHdoZW4gbm8gZWxlbWVudCBpcyBwYXNzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IE9iamVjdCBvZiBsYWJlbHNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldExhYmVscyA9IChlbGVtZW50KSA9PiB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2V0TGFiZWxzOiBleHBlY3RlZCB0byByZWNlaXZlIGFuIGVsZW1lbnQgYXMgcGFyYW1ldGVyIDEnKTtcbiAgfVxuXG4gIGNvbnN0IGdldEF0dHJpYnV0ZSA9IGxhYmVsU3VmZml4ID0+IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLkR4Q2Fyb3VzZWxfX2NvbnRyb2xzJykuZ2V0QXR0cmlidXRlKGBkYXRhLWxhYmVsLSR7bGFiZWxTdWZmaXh9YClcbiAgICB8fCBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5EeENhcm91c2VsX19jYXJvdXNlbCA+IC5EeENhcm91c2VsX18ke2xhYmVsU3VmZml4fWApLmdldEF0dHJpYnV0ZShgZGF0YS1sYWJlbC0ke2xhYmVsU3VmZml4fWApO1xuICBjb25zdCBsYWJlbFN1ZmZpeGVzID0gWyduZXh0JywgJ3ByZXZpb3VzJywgJ3NsaWRlQ2hhbmdlZCcsICdwbGF5JywgJ3BhdXNlJywgJ3BpcCcsICdwYXVzZWQnLCAncGxheWluZyddO1xuICBjb25zdCBsYWJlbHMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5sYWJlbFN1ZmZpeGVzLm1hcChsYWJlbCA9PiAoeyBbbGFiZWxdOiBnZXRBdHRyaWJ1dGUobGFiZWwpIH0pKSk7XG4gIHJldHVybiBsYWJlbHM7XG59O1xuXG4vKipcbiAqIEdldHMgYWxsIGNvbmZpZ3VyZWQgb3B0aW9ucyBmb3IgY2Fyb3VzZWwgZnJvbSBtYXJrdXAgKGFsbG93cyBmb3IgYXV0aG9yaW5nIGFuZC9vciBCRSB0byBjb25maWd1cmUgY2Fyb3VzZWwpXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEhUTUwgRWxlbWVudCB0aGF0IGNvbnRhaW5zIGFsbCBjYXJvdXNlbCBkYXRhIGF0dHJpYnV0ZXNcbiAqIEB0aHJvd3MgRXJyb3Igd2hlbiBubyBlbGVtZW50IGlzIHBhc3NlZFxuICogQHJldHVybnMge09iamVjdH0gT2JqZWN0IG9mIGNvbmZpZ3VyZWQgZGF0YS1hdHRyaWJ1dGVzIGluIGtleTp2YWx1ZSBwYWlyXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDYXJvdXNlbENvbmZpZyA9IChlbGVtZW50KSA9PiB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2V0Q2Fyb3VzZWxDb25maWc6IGV4cGVjdGVkIHRvIHJlY2VpdmUgYW4gZWxlbWVudCBhcyBwYXJhbWV0ZXIgMScpO1xuICB9XG5cbiAgY29uc3QgY2Fyb3VzZWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5EeENhcm91c2VsX19jYXJvdXNlbCcpO1xuXG4gIGNvbnN0IHRvdGFsID0gY2Fyb3VzZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRvdGFsJykgfHwgJzAnO1xuICBjb25zdCByYW5kb21pemVkID0gY2Fyb3VzZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXJhbmRvbWl6ZWQnKSB8fCAnZmFsc2UnO1xuXG4gIGNvbnN0IGNhcm91c2VsQ29udHJvbHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5EeENhcm91c2VsX19jb250cm9scycpO1xuXG4gIGNvbnN0IGFsaWdubWVudCA9IGNhcm91c2VsQ29udHJvbHMuZ2V0QXR0cmlidXRlKCdkYXRhLWFsaWdubWVudCcpIHx8ICdsZWZ0JztcbiAgY29uc3QgcGFnaW5hdGlvbiA9IGNhcm91c2VsQ29udHJvbHMuZ2V0QXR0cmlidXRlKCdkYXRhLXBhZ2luYXRpb24nKSB8fCAnZG90cyc7XG4gIGNvbnN0IGxvb3AgPSBjYXJvdXNlbENvbnRyb2xzLmdldEF0dHJpYnV0ZSgnZGF0YS1sb29wJykgfHwgJ3RydWUnO1xuICBjb25zdCBhdXRvcGxheSA9IGNhcm91c2VsQ29udHJvbHMuZ2V0QXR0cmlidXRlKCdkYXRhLWF1dG9wbGF5JykgfHwgJ2ZhbHNlJztcbiAgY29uc3QgYXV0b3BsYXlEdXJhdGlvbiA9IGNhcm91c2VsQ29udHJvbHMuZ2V0QXR0cmlidXRlKCdkYXRhLWF1dG9wbGF5LWR1cmF0aW9uJykgfHwgJzQwMDAnO1xuICBjb25zdCBkZWZhdWx0U2VsZWN0ZWQgPSBjYXJvdXNlbENvbnRyb2xzLmdldEF0dHJpYnV0ZSgnZGF0YS1kZWZhdWx0LXNlbGVjdGVkJykgfHwgJzAnO1xuXG4gIHJldHVybiB7XG4gICAgdG90YWwsXG4gICAgYWxpZ25tZW50LFxuICAgIHBhZ2luYXRpb24sXG4gICAgcmFuZG9taXplZCxcbiAgICBsb29wLFxuICAgIGF1dG9wbGF5LFxuICAgIGF1dG9wbGF5RHVyYXRpb24sXG4gICAgZGVmYXVsdFNlbGVjdGVkXG4gIH07XG59O1xuIiwiaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuXG5pbXBvcnQgeyBjaGVja0RlZmluZWQgfSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzJztcbmltcG9ydCB7IGdldENhcm91c2VsQ29uZmlnLCBnZXRMYWJlbHMgfSBmcm9tICcuL2Nhcm91c2VsLWNvbmZpZyc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi8uLi9QYWdpbmF0aW9uL2VzNi9QYWdpbmF0aW9uJztcbmltcG9ydCB7IHN3aXBlckExMXlIZWxwZXIsIHN3aXBlckExMXlEZXN0cm95IH0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL2Rldi9qcy91dGlscy9zd2lwZXInO1xuXG4vKipcbiAqIENyZWF0ZSBpbnN0YW5jZSBvZiBQYWdpbmF0aW9uIHRvIGJlIHVzZWQgd2l0aGluIHRoZSBjYXJvdXNlbFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNhcm91c2VsRWxlbWVudCAtIEhUTUwgRWxlbWVudCB0aGF0IGNvbnRhaW5zIGFsbCBjYXJvdXNlbCBtYXJrdXBcbiAqIEB0aHJvd3MgdGhyb3dzIGFuIGVycm9yIGZvciBtaXNzaW5nIHBhcmFtZW50ZXJzXG4gKiBAdGhyb3dzIHRocm93cyBhbiBlcnJvciBmb3IgbWlzc2luZyBtYWtydXAgaW4ge2Nhcm91c2VsRWxlbWVudH1cbiAqIEByZXR1cm5zIHtQYWdpbmF0aW9ufSBQYWdpbmF0aW9uIGluc3RhbmNlXG4gKi9cbmV4cG9ydCBjb25zdCBpbml0UGFnaW5hdGlvbiA9IChjYXJvdXNlbEVsZW1lbnQpID0+IHtcbiAgaWYgKCFjYXJvdXNlbEVsZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2luaXRQYWdpbmF0aW9uOiBleHBlY3RlZCB0byByZWNlaXZlIGFuIGVsZW1lbnQgYXMgcGFyYW1ldGVyIDEnKTtcbiAgfVxuXG4gIGNvbnN0IHBhZ2luYXRpb25Db250cm9scyA9IGNhcm91c2VsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuRHhDYXJvdXNlbF9fY29udHJvbHMnKTtcbiAgaWYgKCFjaGVja0RlZmluZWQocGFnaW5hdGlvbkNvbnRyb2xzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW5pdFBhZ2luYXRpb24gZXhwZWN0ZWQgYW4gZWxlbWVudCB3aXRoIHRoZSBjbGFzcyBcIkR4Q2Fyb3VzZWxfX2NvbnRyb2xzXCInKTtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICB0b3RhbCxcbiAgICBhdXRvcGxheSxcbiAgICBhdXRvcGxheUR1cmF0aW9uLFxuICAgIGxvb3AsXG4gICAgZGVmYXVsdFNlbGVjdGVkXG4gIH0gPSBnZXRDYXJvdXNlbENvbmZpZyhjYXJvdXNlbEVsZW1lbnQpO1xuXG4gIGNvbnN0IGxhYmVscyA9IGdldExhYmVscyhjYXJvdXNlbEVsZW1lbnQpO1xuICBjb25zdCBwYWdpbmF0aW9uT3B0aW9ucyA9IHtcbiAgICBsYWJlbHMsXG4gICAgbnVtYmVyT2ZQaXBzOiBwYXJzZUludCh0b3RhbCwgMTApLFxuICAgIGF1dG9wbGF5OiB7XG4gICAgICBlbmFibGVkOiAoYXV0b3BsYXkgPT09ICd0cnVlJykgfHwgZmFsc2UsXG4gICAgICBkdXJhdGlvbjogcGFyc2VJbnQoYXV0b3BsYXlEdXJhdGlvbiwgMTApXG4gICAgfSxcbiAgICBsb29wOiAobG9vcCA9PT0gJ3RydWUnKSB8fCBmYWxzZSxcbiAgICBkZWZhdWx0U2VsZWN0ZWQ6IHBhcnNlSW50KGRlZmF1bHRTZWxlY3RlZCwgMTApXG4gIH07XG5cblxuICByZXR1cm4gbmV3IFBhZ2luYXRpb24ocGFnaW5hdGlvbkNvbnRyb2xzLCBwYWdpbmF0aW9uT3B0aW9ucyk7XG59O1xuXG5cbi8qKlxuICogQ3JlYXRlIFN3aXBlciBpbnN0YW5jZSB0byBiZSB1c2VkIGZvciBjYXJvdXNlbFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHN3aXBlckVsZW1lbnQgLSBIVE1MIEVsZW1lbnQgdGhhdCBpcyB1c2VkIHNwZWNpZmljYWxseSB0byB3cmFwIFN3aXBlciAodXN1YWxseSBoYXMgc3dpcGVyLWNvbnRhaW5lciBjbGFzcylcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsICo+fSBzd2lwZXJPcHRpb25zIC0gT2JqZWN0IG9mIG9wdGlvbnMgdGhhdCBhcmUgYWNjZXB0ZWQgYnkgU3dpcGVyXG4gKiBAdGhyb3dzIGFuIGVycm9yIGZvciBtaXNzaW5nIHBhcmFtZXRlcnMgYW5kIHN3aXBlck9wdGlvbnMgbm90IGJlaW5nIGFuIE9iamVjdFxuICogQHJldHVybnMge1N3aXBlcn0gU3dpcGVyIGluc3RhbmNlXG4gKi9cbmV4cG9ydCBjb25zdCBpbml0U3dpcGVyID0gKHN3aXBlckVsZW1lbnQsIHN3aXBlck9wdGlvbnMpID0+IHtcbiAgaWYgKCFjaGVja0RlZmluZWQoc3dpcGVyRWxlbWVudCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2luaXRTd2lwZXI6IGV4cGVjdGVkIHRvIHJlY2VpdmUgYW4gZWxlbWVudCBhcyBwYXJhbWV0ZXIgMScpO1xuICB9XG5cbiAgaWYgKCFjaGVja0RlZmluZWQoc3dpcGVyT3B0aW9ucykgfHwgdHlwZW9mIHN3aXBlck9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbml0U3dpcGVyOiBleHBlY3RlZCB0byByZWNlaXZlIGFuIG9iamVjdCBvZiBzd2lwZXIgb3B0aW9ucyBhcyBwYXJhbWV0ZXIgMicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTd2lwZXIoc3dpcGVyRWxlbWVudCwgc3dpcGVyT3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEB0eXBlZGVmIEExMXlPcHRpb25zXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtQYWdpbmF0aW9ufSBwYWdpbmF0aW9uT2JqZWN0IGluc3RhbmNlXG4gKiBAcHJvcGVydHkge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBsYWJlbHMgb2JqZWN0IG9mIGxhYmVscyBuZWVkZWQgZm9yIGludGVyYWN0aXZlIGVsZW1lbnRzXG4gKi9cbi8qKlxuICogU2V0dXAgb3VyIGN1c3RvbSBjb25maWd1cmF0aW9uIG9mIFN3aXBlciBoZWxwZXJzIGFuZCBsaW5rIHBhZ2luYXRpb25cbiAqXG4gKiBAcGFyYW0ge1N3aXBlcn0gc3dpcGVyIC0gQW4gaW5zdGFuY2Ugb2YgU3dpcGVyIHRvIGJlIGNvbmZpZ3VyZWRcbiAqIEBwYXJhbSB7Li4uQTExeU9wdGlvbnN9IGExMXlDb25maWcgLSBPYmplY3QgY29udGFpbmluZyBQYWdpbmF0aW9uIGluc3RhbmNlIGFuZCBsYWJlbHNcbiAqIEB0aHJvd3MgYW4gZXJyb3IgZm9yIG1pc3NpbmcgcGFyYW1ldGVycyAxICYgMlxuICogQHRocm93cyBhbiBlcnJvciBmb3IgcGFyYW1ldGVyIDEgbm90IGJlaW5nIGFuIGluc3RhbmNlIG9mIFN3aXBlclxuICogQHRocm93cyBhbiBlcnJvciBmb3IgcGFyYW1ldGVyIDIgbm90IGJlaW5nIGFuIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgaW5pdER4QTExeVN3aXBlckhlbHBlcnMgPSAoc3dpcGVyLCBhMTF5Q29uZmlnKSA9PiB7XG4gIGlmICghY2hlY2tEZWZpbmVkKHN3aXBlcikgfHwgIShzd2lwZXIgaW5zdGFuY2VvZiBTd2lwZXIpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbml0RHhBMTF5U3dpcGVySGVscGVyczogZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhbiBpbnN0YW5jZSBvZiBTd2lwZXIgYXMgcGFyYW1ldGVyIDEnKTtcbiAgfVxuXG4gIGlmICghY2hlY2tEZWZpbmVkKGExMXlDb25maWcpIHx8IHR5cGVvZiBhMTF5Q29uZmlnICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignaW5pdER4QTExeVN3aXBlckhlbHBlcnM6IGV4cGVjdGVkIHRvIHJlY2VpdmUgYW4gb2JqZWN0IG9mIGNvbmZpZyBzZXR0aW5ncyBhcyBwYXJhbWV0ZXIgMicpO1xuICB9XG5cbiAgc3dpcGVyQTExeUhlbHBlcihzd2lwZXIsIGExMXlDb25maWcpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlc3Ryb3lEeENhcm91c2VsID0gKHN3aXBlcikgPT4ge1xuICBzd2lwZXJBMTF5RGVzdHJveShzd2lwZXIpO1xufTtcbiIsImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgcHVyZ2VDYXJvdXNlbEVsZW1lbnRzIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBzZXRQbGF5aW5nU3RhdGUsIHNldEluaXRpYWxTZXR0aW5ncyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY2hlY2tEZWZpbmVkIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2Rldi9qcy91dGlscyc7XG5pbXBvcnQgeyBnZXRDYXJvdXNlbENvbmZpZywgZ2V0TGFiZWxzIH0gZnJvbSAnLi4vY2Fyb3VzZWwtY29uZmlnJztcbmltcG9ydCB7IGlzTW9iaWxlRGV2aWNlLCBpc1RhYmxldERldmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvYnJvd3NlckRldGVjdGlvbic7XG5pbXBvcnQgeyBpbml0UGFnaW5hdGlvbiwgaW5pdFN3aXBlciwgaW5pdER4QTExeVN3aXBlckhlbHBlcnMsIGRlc3Ryb3lEeENhcm91c2VsIH0gZnJvbSAnLi4vY2Fyb3VzZWwtaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER4Q2Fyb3VzZWwge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgaWYgKCFjaGVja0RlZmluZWQoZWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHhDYXJvdXNlbCBleHBlY3RlZCBhbiBlbGVtZW50IHRvIGJlIHBhc3NlZCBhcyBwYXJlbWVudGVyIDEnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmlzRGV2aWNlTW9iaWxlID0gaXNNb2JpbGVEZXZpY2UoKTtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmUoYER4Q2Fyb3VzZWxTdG9yZS0ke3RoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpfWApO1xuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnRHhDYXJvdXNlbC0tbW9iaWxlLW92ZXJyaWRlJykpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNDbGllbnRBTW9iaWxlRGV2aWNlKCkudGhlbigocmV0dXJuZWRWYWx1ZSkgPT4ge1xuICAgICAgaWYgKHJldHVybmVkVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhZ2VFbGVtZW50c1RvUmVtb3ZlID0ge1xuICAgICAgICBuZXh0OiB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5EeENhcm91c2VsX19uZXh0JyksXG4gICAgICAgIHByZXY6IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLkR4Q2Fyb3VzZWxfX3ByZXZpb3VzJyksXG4gICAgICAgIHBhZ2luYXRpb246IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLkR4Q2Fyb3VzZWxfX2NvbnRyb2xzJyksXG4gICAgICAgIHN1cHBsaW1lbnRhcnlTbGlkZXM6IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1zbGlkZTpub3QoOmZpcnN0LWNoaWxkKScpLFxuICAgICAgfTtcblxuICAgICAgcHVyZ2VDYXJvdXNlbEVsZW1lbnRzKHBhZ2VFbGVtZW50c1RvUmVtb3ZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGlzQ2xpZW50QU1vYmlsZURldmljZSgpIHtcbiAgICBpZiAodGhpcy5pc0RldmljZU1vYmlsZSAhPT0gdHJ1ZSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICByZXR1cm4gIWlzVGFibGV0RGV2aWNlKCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2Nhcm91c2VsID0gbnVsbDtcbiAgICB0aGlzLl9wYWdpbmF0aW9uID0gbnVsbDtcbiAgICB0aGlzLl9jYXJvdXNlbENvbmZpZyA9IGdldENhcm91c2VsQ29uZmlnKHRoaXMuX2VsZW1lbnQpO1xuICAgIGNvbnN0IHtcbiAgICAgIHRvdGFsLFxuICAgICAgZGVmYXVsdFNlbGVjdGVkLFxuICAgICAgYXV0b3BsYXksXG4gICAgICBsb29wXG4gICAgfSA9IHRoaXMuX2Nhcm91c2VsQ29uZmlnO1xuICAgIHRoaXMuYXV0b3BsYXkgPSBhdXRvcGxheTtcbiAgICB0aGlzLl90b3RhbFNsaWRlcyA9IHRvdGFsO1xuICAgIHRoaXMuX3N0YXJ0U2xpZGUgPSBkZWZhdWx0U2VsZWN0ZWQ7XG4gICAgdGhpcy5fbG9vcCA9IGxvb3A7XG4gICAgdGhpcy5fc2xpZGVyU3BlZWQgPSA2MDA7XG4gICAgdGhpcy5fc3dpcGVyT3B0aW9ucyA9IHRoaXMuZ2V0U3dpcGVyT3B0aW9ucygpO1xuICAgIHRoaXMuX3BhZ2luYXRpb24gPSBpbml0UGFnaW5hdGlvbih0aGlzLl9lbGVtZW50KTtcblxuICAgIGNvbnN0IGNhcm91c2VsQ29udGFpbmVyID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuRHhDYXJvdXNlbF9fY2Fyb3VzZWwnKTtcbiAgICBpZiAoIWNoZWNrRGVmaW5lZChjYXJvdXNlbENvbnRhaW5lcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHhDYXJvdXNlbCBleHBlY3RlZCBhbiBlbGVtZW50IHdpdGggdGhlIGNsYXNzIFwiRHhDYXJvdXNlbF9fY2Fyb3VzZWxcIiB0byBleGlzdCBhcyBjaGlsZCBvZiB0aGlzLmVsZW1lbnQnKTtcbiAgICB9XG4gICAgdGhpcy5fY2Fyb3VzZWwgPSBpbml0U3dpcGVyKGNhcm91c2VsQ29udGFpbmVyLCB0aGlzLl9zd2lwZXJPcHRpb25zKTtcblxuICAgIGNvbnN0IGxhYmVscyA9IGdldExhYmVscyh0aGlzLl9lbGVtZW50KTtcbiAgICBpbml0RHhBMTF5U3dpcGVySGVscGVycyh0aGlzLl9jYXJvdXNlbCwgeyBwYWdpbmF0aW9uT2JqZWN0OiB0aGlzLl9wYWdpbmF0aW9uLCBsYWJlbHMgfSk7XG5cbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKChzZXRJbml0aWFsU2V0dGluZ3MoeyBpbml0OiB0cnVlLCBwbGF5aW5nU3RhdGU6IEpTT04ucGFyc2UodGhpcy5hdXRvcGxheSkgfSkpKTtcbiAgICB0aGlzLmJpbmRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgYmluZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICghdGhpcy5fcGFnaW5hdGlvbiB8fCAhdGhpcy5fcGFnaW5hdGlvbi5nZXRFbGVtZW50KCkpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5fcGFnaW5hdGlvbi5fZWxlbS5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgKCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCgoc2V0UGxheWluZ1N0YXRlKHRydWUpKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9wYWdpbmF0aW9uLl9lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCgoc2V0UGxheWluZ1N0YXRlKGZhbHNlKSkpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3dpcGVyT3B0aW9ucygpIHtcbiAgICBjb25zdCBhY2NvcmRpb25XcmFwcGVyID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KCcuQWNjb3JkaW9uJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAgICAgaW5pdGlhbFNsaWRlOiB0aGlzLl9zdGFydFNsaWRlLFxuICAgICAgbG9vcDogdGhpcy5fbG9vcCxcbiAgICAgIGdyYWJDdXJzb3I6IHRydWUsXG4gICAgICBzcGVlZDogdGhpcy5fc2xpZGVyU3BlZWQsXG4gICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICAgIHByZWxvYWRJbWFnZXM6IHRydWUsXG4gICAgICB1cGRhdGVPbkltYWdlc1JlYWR5OiB0cnVlLFxuICAgICAgYTExeTogdHJ1ZSxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgcHJldkVsOiB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5EeENhcm91c2VsX19wcmV2aW91cycpLFxuICAgICAgICBuZXh0RWw6IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLkR4Q2Fyb3VzZWxfX25leHQnKSxcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICB0cmFuc2l0aW9uRW5kKCkge1xuICAgICAgICAgIC8vIGlmIGNvbXBvbmVudCBpcyBpbiBhIG1vYmlsZSBBY2NvcmRpb24sIHRyaWdnZXIgaGVpZ2h0IGNhbGN1bGF0aW9uIGFmdGVyIHRyYW5zaXRpb25cbiAgICAgICAgICBpZiAoYWNjb3JkaW9uV3JhcHBlciAmJiBhY2NvcmRpb25XcmFwcGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgYWNjb3JkaW9uV3JhcHBlci5BY2NvcmRpb24oJ2NhbGN1bGF0ZU5ld0hlaWdodCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGRlc3Ryb3lEeENhcm91c2VsKHRoaXMuX2Nhcm91c2VsKTtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGNvbnN0IG5vZGVDbG9uZSA9IHRoaXMuX2VsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChub2RlQ2xvbmUpO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcHVyZ2VDYXJvdXNlbEVsZW1lbnRzKHBhZ2VFbGVtZW50c1RvUmVtb3ZlKSB7XG4gIE9iamVjdC52YWx1ZXMocGFnZUVsZW1lbnRzVG9SZW1vdmUpLmZvckVhY2goKGVsZW1zKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSAoQXJyYXkuaXNBcnJheShlbGVtcykgfHwgZWxlbXMgaW5zdGFuY2VvZiBOb2RlTGlzdCkgPyBlbGVtcyA6IFtlbGVtc107XG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKChzaW5nbGVFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoc2luZ2xlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHNpbmdsZUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChzaW5nbGVFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJleHBvcnQgY29uc3Qgc2V0SW5pdGlhbFNldHRpbmdzID0gKHBheWxvYWQpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogJ1NFVF9JTklUSUFMX1NFVFRJTkdTJywgcGF5bG9hZCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFBsYXlpbmdTdGF0ZSA9IChwbGF5aW5nU3RhdGUpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogJ1NFVF9QTEFZSU5HX1NUQVRFJywgcGxheWluZ1N0YXRlIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0SW5pdGFsaXNhdGlvblN0YXRlID0gKGluaXRhbGlzYXRpb25TdGF0ZSkgPT4ge1xuICByZXR1cm4geyB0eXBlOiAnU0VUX0lOSVRBTElTRURfU1RBVEUnLCBpbml0YWxpc2F0aW9uU3RhdGUgfTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBkeENhcm91c2VsUmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9ICgoc3RvcmVJRCkgPT4ge1xuICB3aW5kb3dbc3RvcmVJRF0gPSBjcmVhdGVTdG9yZShkeENhcm91c2VsUmVkdWNlcnMpO1xuICByZXR1cm4gd2luZG93W3N0b3JlSURdO1xufSk7XG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGluaXRpYWxpc2VkOiBmYWxzZSxcbiAgcGxheWluZ1N0YXRlOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeENhcm91c2VsUmVkdWNlcnMoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0VUX0lOSVRJQUxfU0VUVElOR1MnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGluaXRpYWxpc2VkOiBhY3Rpb24ucGF5bG9hZC5pbml0LFxuICAgICAgICBwbGF5aW5nU3RhdGU6IGFjdGlvbi5wYXlsb2FkLnBsYXlpbmdTdGF0ZVxuICAgICAgfTtcbiAgICBjYXNlICdTRVRfUExBWUlOR19TVEFURSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGxheWluZ1N0YXRlOiBhY3Rpb24ucGxheWluZ1N0YXRlXG4gICAgICB9O1xuICAgIGNhc2UgJ1NFVF9JTklUQUxJU0VEX1NUQVRFJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbml0aWFsaXNlZDogYWN0aW9uLmluaXRhbGlzYXRpb25TdGF0ZVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBldmVudFRyaWdnZXIsXG4gIHRhYmxpc3ROYXZpZ2F0aW9uLFxuICB0aHJvdHRsZVxufSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2luZGV4JztcblxuaW1wb3J0IHsgd2luZG93V2lkdGggfSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL3dpbmRvd0RpbWVuc2lvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeFRhYnMge1xuICAvLyBqc2hpbnQgaWdub3JlOnN0YXJ0XG4gIHN0YXRpYyBfZGVmYXVsdHMgPSB7XG4gICAgaW5pdGlhbFRhYjogMCxcbiAgICBmYWRlT3V0S2V5ZnJhbWVzOiBbXG4gICAgICB7IG9wYWNpdHk6IDEsIH0sXG4gICAgICB7IG9wYWNpdHk6IDAsIH0sXG4gICAgXSxcbiAgICBmYWRlSW5LZXlmcmFtZXM6IFtcbiAgICAgIHsgb3BhY2l0eTogMCwgfSxcbiAgICAgIHsgb3BhY2l0eTogMSwgfSxcbiAgICBdLFxuICAgIHRpbWluZ0ZhZGVJbjoge1xuICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgIGVhc2luZzogJ2Vhc2UtaW4nLFxuICAgICAgZmlsbDogJ2ZvcndhcmRzJ1xuICAgIH0sXG4gICAgdGltaW5nRmFkZU91dDoge1xuICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcbiAgICAgIGZpbGw6ICdmb3J3YXJkcydcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2xhc3NlcyA9IHtcbiAgICB0YWJMaXN0OiAnRHhUYWJzX190YWJsaXN0JyxcbiAgICB0YWJMaXN0T3ZlcmZsb3c6ICdEeFRhYnNfX3RhYmxpc3QtLW92ZXJmbG93JyxcbiAgICB0YWJMaXN0VmlzaWJsZTogJ0R4VGFic19fdGFibGlzdC0tdmlzaWJsZScsXG4gICAgdGFiOiAnRHhUYWJzX190YWInLFxuICAgIHRhYkFjdGl2ZTogJ0R4VGFic19fdGFiLS1hY3RpdmUnLFxuICAgIHBhbmVsczogJ0R4VGFic19fcGFuZWxzJyxcbiAgICBwYW5lbDogJ0R4VGFic19fcGFuZWwnLFxuICAgIG1hc2s6ICdEeFRhYnNfX21hc2snLFxuICB9XG4gIC8vIGpzaGludCBpZ25vcmU6ZW5kXG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBEeFRhYnMuX2RlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLnRhYnMgPSBbLi4udGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFiXCJdJyldO1xuICAgIHRoaXMudGFibGlzdCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cInRhYmxpc3RcIl0nKTtcbiAgICB0aGlzLnRhYnNXaWR0aFRvdGFsID0gMDtcbiAgICB0aGlzLnBhbmVsc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWR4dGFicy1wYW5lbHMtaWQ9XCIke3RoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZHh0YWJzLWlkJyl9XCJdYCk7XG4gICAgdGhpcy5wYW5lbHMgPSBbLi4udGhpcy5wYW5lbHNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJwYW5lbFwiXScpXTtcbiAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAoIXRoaXMudGFicy5sZW5ndGggfHwgdGhpcy50YWJzLmxlbmd0aCA8IDIpIHtcbiAgICAgIGlmICh0aGlzLnBhbmVscy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQYW5lbCA9IHRoaXMucGFuZWxzW3RoaXMub3B0aW9ucy5pbml0aWFsVGFiXTtcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoJ0R4VGFiczpzaW5nbGV0YWInLCB7IHNlbGVjdGVkUGFuZWwgfSk7XG4gICAgICAgIHRoaXMucGFuZWxzWzBdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLnBhbmVsc1swXS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50YWJTZXR1cCgpO1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgdGhpcy5hZGRFdmVudHMoKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkVGFiID0gdGhpcy50YWJzW3RoaXMub3B0aW9ucy5pbml0aWFsVGFiXTtcbiAgICB0aGlzLmZpcmVFdmVudCgnRHhUYWJzOmluaXQnLCB7XG4gICAgICBzZWxlY3RlZFRhYixcbiAgICAgIHNlbGVjdGVkUGFuZWw6IHRoaXMuZ2V0UGFuZWxGcm9tVGFiKHNlbGVjdGVkVGFiKVxuICAgIH0pO1xuICB9XG5cbiAgZmlyZUV2ZW50KGV2ZW50VHlwZSwgcGF5bG9hZCA9IHt9KSB7XG4gICAgZXZlbnRUcmlnZ2VyKHRoaXMuZWxlbWVudCwgZXZlbnRUeXBlLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHRhYlNldHVwKCkge1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpZCA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZHh0YWJzLWlkJyk7XG4gICAgICBjb25zdCB0YWJJZCA9IGBEeFRhYnNfJHtpZH1fdGFiXyR7aW5kZXh9YDtcbiAgICAgIGNvbnN0IHBhbmVsSWQgPSBgRHhUYWJzXyR7aWR9X3BhbmVsXyR7aW5kZXh9YDtcbiAgICAgIGNvbnN0IHBhbmVsID0gdGhpcy5wYW5lbHNbaW5kZXhdO1xuXG4gICAgICB0YWIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgdGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuICAgICAgdGFiLnNldEF0dHJpYnV0ZSgnaWQnLCB0YWJJZCk7XG4gICAgICB0YWIuc2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJywgcGFuZWxJZCk7XG5cbiAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xuICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdpZCcsIHBhbmVsSWQpO1xuICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0YWJJZCk7XG4gICAgfSk7XG4gICAgdGFibGlzdE5hdmlnYXRpb24odGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLmNvbGxhcHNlV2hpdGVzcGFjZUJldHdlZW5UYWJzKCk7XG4gIH1cblxuICBhZGRFdmVudHMoKSB7XG4gICAgdGhpcy50YWJzLmZvckVhY2godGFiID0+IHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMudGFiQ2xpY2tIYW5kbGVyKGV2ZW50KSwgZmFsc2UpKTtcbiAgICBjb25zdCB0aHJvdHRsZVJlc2l6ZSA9IHRocm90dGxlKCgpID0+IHRoaXMuc2V0RGltZW5zaW9ucygpLCAyNTAsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB0aHJvdHRsZVJlc2l6ZSh0aGlzLmVsZW1lbnQpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHRoaXMuc2V0RGltZW5zaW9ucygpKTtcbiAgICB0aGlzLnNldERpbWVuc2lvbnMoKTtcbiAgfVxuXG4gIGNvbGxhcHNlV2hpdGVzcGFjZUJldHdlZW5UYWJzKCkge1xuICAgIFsuLi50aGlzLnRhYmxpc3QuY2hpbGROb2Rlc10uZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHNldE5ld1N0eWxlKGVsZW0sIHN0eWxlLCB2YWx1ZSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtO1xuICAgIGVsZW1lbnQuc3R5bGVbc3R5bGVdID0gdmFsdWU7XG4gIH1cblxuICB1bnNldFRhYkhlaWdodHMoKSB7XG4gICAgdGhpcy50YWJzLmZvckVhY2godGFiID0+IER4VGFicy5zZXROZXdTdHlsZSh0YWIsICdoZWlnaHQnLCAnYXV0bycpKTtcbiAgfVxuXG4gIHVuc2V0VGFiV2lkdGhzKCkge1xuICAgIHRoaXMudGFicy5mb3JFYWNoKHRhYiA9PiBEeFRhYnMuc2V0TmV3U3R5bGUodGFiLCAnd2lkdGgnLCAnYXV0bycpKTtcbiAgfVxuXG4gIHNldERpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5zZXRUYWJTaXplcygpO1xuICAgIHRoaXMuc2V0TWFza1dpZHRoKCk7XG4gICAgdGhpcy5vdmVyZmxvd0NoZWNrKCk7XG4gICAgdGhpcy5maXJlRXZlbnQoJ0R4VGFiczpyZXNpemVkJyk7XG4gIH1cblxuICBvdmVyZmxvd0NoZWNrKCkge1xuICAgIGNvbnN0IHRhYkxpc3RTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnRhYmxpc3QpO1xuICAgIGNvbnN0IHRhYkxpc3RQYWRkaW5nID0gcGFyc2VGbG9hdCh0YWJMaXN0U3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpKSArIHBhcnNlRmxvYXQodGFiTGlzdFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuXG4gICAgaWYgKHdpbmRvd1dpZHRoKCkgPD0gKHRoaXMudGFic1dpZHRoVG90YWwgKyB0YWJMaXN0UGFkZGluZykpIHtcbiAgICAgIHRoaXMudGFibGlzdC5jbGFzc0xpc3QuYWRkKER4VGFicy5jbGFzc2VzLnRhYkxpc3RPdmVyZmxvdyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGFibGlzdC5jbGFzc0xpc3QucmVtb3ZlKER4VGFicy5jbGFzc2VzLnRhYkxpc3RPdmVyZmxvdyk7XG4gIH1cblxuICBlbnN1cmVOZXh0VGFiVmlzaWJsZSgpIHtcbiAgICBjb25zdCB0YWJMaXN0V2lkdGggPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMudGFibGlzdCkuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSk7XG4gICAgY29uc3QgdGFic0FycmF5ID0gW107XG4gICAgY29uc3QgdmlzaWJsZVRhYnNBcnJheSA9IFtdO1xuICAgIGxldCB0YWJzV2lkdGhSdW5uaW5nVG90YWwgPSAwO1xuICAgIGxldCB2aXNpYmxlVGFic1dpZHRoUnVubmluZ1RvdGFsID0gMDtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICB0YWIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21heC13aWR0aCcpO1xuICAgICAgdGFiLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWxlZnQnKTtcbiAgICAgIHRhYi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1yaWdodCcpO1xuXG4gICAgICBjb25zdCB0YWJTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YWIpO1xuICAgICAgY29uc3QgdGFiV2lkdGggPSBwYXJzZUZsb2F0KHRhYlN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpKTtcbiAgICAgIGNvbnN0IHRhYk1heFdpZHRoID0gcGFyc2VGbG9hdCh0YWJTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWF4LXdpZHRoJykpO1xuICAgICAgY29uc3QgdGFiUGFkTGVmdCA9IHBhcnNlRmxvYXQodGFiU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpKTtcbiAgICAgIGNvbnN0IHRhYlBhZFJpZ2h0ID0gcGFyc2VGbG9hdCh0YWJTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpKTtcbiAgICAgIGNvbnN0IHRleHRBbGlnbiA9IHRhYlN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCd0ZXh0LWFsaWduJyk7XG4gICAgICBjb25zdCBuZXdUb3RhbCA9IHZpc2libGVUYWJzV2lkdGhSdW5uaW5nVG90YWwgKyB0YWJXaWR0aDtcbiAgICAgIGNvbnN0IHRhYlZpc2libGUgPSAobmV3VG90YWwgLSAoKHRhYldpZHRoIC8gMykgKiAyKSkgPCB0YWJMaXN0V2lkdGg7IC8vIGtlZXBzIHBhcnQgb2YgdGhlIG5leHQgdGFiIHZpc2libGVcblxuICAgICAgdGFic1dpZHRoUnVubmluZ1RvdGFsICs9IHRhYldpZHRoO1xuXG4gICAgICBpZiAodGFiVmlzaWJsZSkge1xuICAgICAgICB2aXNpYmxlVGFic1dpZHRoUnVubmluZ1RvdGFsID0gbmV3VG90YWw7XG4gICAgICAgIHZpc2libGVUYWJzQXJyYXkucHVzaCh0YWIpO1xuICAgICAgfVxuXG4gICAgICB0YWJzQXJyYXkucHVzaCh7XG4gICAgICAgIHRhYldpZHRoLFxuICAgICAgICB0YWJNYXhXaWR0aCxcbiAgICAgICAgdGFiUGFkTGVmdCxcbiAgICAgICAgdGFiUGFkUmlnaHQsXG4gICAgICAgIHRhYlZpc2libGUsXG4gICAgICAgIHRleHRBbGlnblxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRhYnNXaWR0aFRvdGFsID0gdGFic1dpZHRoUnVubmluZ1RvdGFsO1xuICAgIGlmICh2aXNpYmxlVGFic0FycmF5Lmxlbmd0aCA9PT0gdGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHZpc2libGVMZW5ndGggPSB2aXNpYmxlVGFic0FycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBhZGRpdGlvbmFsUGFkZGluZyA9IHBhcnNlSW50KCgodGFiTGlzdFdpZHRoIC0gdmlzaWJsZVRhYnNXaWR0aFJ1bm5pbmdUb3RhbCkgKyB0YWJzQXJyYXlbdmlzaWJsZUxlbmd0aCAtIDFdLnRhYldpZHRoKSAvICh2aXNpYmxlTGVuZ3RoICsgMC41KSAvIDIsIDEwKTtcblxuICAgIHRhYnNBcnJheS5mb3JFYWNoKChwcm9wcywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGFic1tpbmRleF07XG4gICAgICBjb25zdCB3aWR0aFdpdGhQYWRkaW5nID0gcHJvcHMudGFiV2lkdGggKyAoYWRkaXRpb25hbFBhZGRpbmcgKiAyKTtcblxuICAgICAgLy8gaWYgdGV4dCBpcyBsZWZ0IGFsaWduZWQsIGFzc3VtZSBpY29uIGFuZCBhc3NpZ24gYWxsIHBhZGRpbmcgdG8gcmlnaHQgLSByZXZlcnNlIGZvciBNRU5BXG4gICAgICBjb25zdCBjYWxjTGVmdFBhZCA9IGFsaWduZWQgPT4gKGFsaWduZWQgPT09ICdsZWZ0JyA/IHByb3BzLnRhYlBhZExlZnQgOiBwcm9wcy50YWJQYWRMZWZ0ICsgKGFkZGl0aW9uYWxQYWRkaW5nICogMikpO1xuICAgICAgY29uc3QgY2FsY1JpZ2h0UGFkID0gYWxpZ25lZCA9PiAoYWxpZ25lZCA9PT0gJ2xlZnQnID8gcHJvcHMudGFiUGFkUmlnaHQgKyAoYWRkaXRpb25hbFBhZGRpbmcgKiAyKSA6IHByb3BzLnRhYlBhZFJpZ2h0KTtcbiAgICAgIGNvbnN0IGxlZnRQYWQgPSBwcm9wcy50ZXh0QWxpZ24gPT09ICdjZW50ZXInID8gKHByb3BzLnRhYlBhZExlZnQgKyBhZGRpdGlvbmFsUGFkZGluZykgOiBjYWxjTGVmdFBhZChwcm9wcy50ZXh0QWxpZ24pO1xuICAgICAgY29uc3QgcmlnaHRQYWQgPSBwcm9wcy50ZXh0QWxpZ24gPT09ICdjZW50ZXInID8gKHByb3BzLnRhYlBhZFJpZ2h0ICsgYWRkaXRpb25hbFBhZGRpbmcpIDogY2FsY1JpZ2h0UGFkKHByb3BzLnRleHRBbGlnbik7XG5cbiAgICAgIGlmICh3aWR0aFdpdGhQYWRkaW5nID4gcHJvcHMudGFiTWF4V2lkdGgpIHtcbiAgICAgICAgRHhUYWJzLnNldE5ld1N0eWxlKHRhYiwgJ21heFdpZHRoJywgYCR7d2lkdGhXaXRoUGFkZGluZ31weGApO1xuICAgICAgfVxuICAgICAgRHhUYWJzLnNldE5ld1N0eWxlKHRhYiwgJ3BhZGRpbmdMZWZ0JywgYCR7bGVmdFBhZH1weGApO1xuICAgICAgRHhUYWJzLnNldE5ld1N0eWxlKHRhYiwgJ3BhZGRpbmdSaWdodCcsIGAke3JpZ2h0UGFkfXB4YCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRUYWJTaXplcygpIHtcbiAgICB0aGlzLnVuc2V0VGFiSGVpZ2h0cygpO1xuICAgIHRoaXMuZW5zdXJlTmV4dFRhYlZpc2libGUoKTtcbiAgICBjb25zdCByZWR1Y2VyID0gKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUpID0+IChhY2N1bXVsYXRvciA+IGN1cnJlbnRWYWx1ZSA/IGFjY3VtdWxhdG9yIDogY3VycmVudFZhbHVlKTtcbiAgICBjb25zdCBuZXdIZWlnaHQgPSB0aGlzLnRhYnMubWFwKHRhYiA9PiB0YWIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KS5yZWR1Y2UocmVkdWNlcik7XG5cbiAgICB0aGlzLnRhYnMuZm9yRWFjaCh0YWIgPT4gRHhUYWJzLnNldE5ld1N0eWxlKHRhYiwgJ2hlaWdodCcsIGAke25ld0hlaWdodH1weGApKTtcbiAgICB0aGlzLnNldE1hc2tXaWR0aCgpO1xuICB9XG5cbiAgc2V0TWFza1dpZHRoKCkge1xuICAgIGNvbnN0IHJlZHVjZXIgPSAoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSkgPT4gYWNjdW11bGF0b3IgKyBjdXJyZW50VmFsdWU7XG4gICAgY29uc3QgbWFza1dpZHRoID0gdGhpcy50YWJzLm1hcCh0YWIgPT4gdGFiLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKS5yZWR1Y2UocmVkdWNlcik7XG4gICAgdGhpcy5tYXNrLnN0eWxlLndpZHRoID0gYCR7cGFyc2VJbnQobWFza1dpZHRoLCAxMCl9cHhgO1xuICB9XG5cbiAgdGFiQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhY3RpdmUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmICh0aGlzLmFuaW1hdGluZyB8fCAhYWN0aXZlIHx8IGFjdGl2ZS5jbGFzc0xpc3QuY29udGFpbnMoRHhUYWJzLmNsYXNzZXMudGFiQWN0aXZlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcmV2aW91cyA9IHRoaXMudGFibGlzdC5xdWVyeVNlbGVjdG9yKGAuJHtEeFRhYnMuY2xhc3Nlcy50YWJBY3RpdmV9YCkgfHwgbnVsbDtcbiAgICB0aGlzLnVuc2V0QWN0aXZlVGFicygpO1xuICAgIER4VGFicy5zZXRBY3RpdmVUYWIoYWN0aXZlKTtcbiAgICB0aGlzLnN3aXRjaFRhYlBhbmVscyhwcmV2aW91cywgYWN0aXZlKTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBpbml0aWFsVGFiID0gdGhpcy50YWJzW3RoaXMub3B0aW9ucy5pbml0aWFsVGFiXTtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4gdGFiLnNldEF0dHJpYnV0ZSgnZGF0YS10YWItaW5kZXgnLCBpbmRleCkpO1xuICAgIER4VGFicy5zZXRBY3RpdmVUYWIoaW5pdGlhbFRhYik7XG4gICAgdGhpcy5zZXRBY3RpdmVUYWJQYW5lbChpbml0aWFsVGFiKTtcbiAgICB0aGlzLm1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGhpcy5tYXNrLmNsYXNzTGlzdC5hZGQoRHhUYWJzLmNsYXNzZXMubWFzayk7XG4gICAgdGhpcy50YWJsaXN0LmFwcGVuZENoaWxkKHRoaXMubWFzayk7XG4gICAgdGhpcy50YWJsaXN0LmNsYXNzTGlzdC5hZGQoRHhUYWJzLmNsYXNzZXMudGFiTGlzdFZpc2libGUpO1xuICB9XG5cbiAgc3RhdGljIHNldEFjdGl2ZVRhYih0YWIpIHtcbiAgICBjb25zdCBhY3RpdmUgPSB0YWI7XG4gICAgYWN0aXZlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgYWN0aXZlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgIGFjdGl2ZS5jbGFzc0xpc3QuYWRkKER4VGFicy5jbGFzc2VzLnRhYkFjdGl2ZSk7XG4gIH1cblxuXG4gIHN0YXRpYyBkb0FuaW1hdGlvbihlbGVtLCBrZXlmcmFtZXMsIHRpbWluZywgZmluaXNoKSB7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gZWxlbS5hbmltYXRlKGtleWZyYW1lcywgdGltaW5nKTtcbiAgICBhbmltYXRpb24ucGF1c2UoKTtcbiAgICBhbmltYXRpb24ub25maW5pc2ggPSAoKSA9PiBmaW5pc2goKTtcbiAgICBhbmltYXRpb24ucGxheSgpO1xuICB9XG5cbiAgc3dpdGNoVGFiUGFuZWxzKHByZXZpb3VzVGFiLCBuZXh0VGFiKSB7XG4gICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHByZXZpb3VzUGFuZWwgPSB0aGlzLmdldFBhbmVsRnJvbVRhYihwcmV2aW91c1RhYik7XG5cbiAgICBpZiAocHJldmlvdXNQYW5lbCkge1xuICAgICAgY29uc3QgZmluaXNoID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZpcmVFdmVudCgnRHhUYWJzOmZhZGVvdXQnLCB7IHByZXZpb3VzVGFiLCBwcmV2aW91c1BhbmVsIH0pO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBwcmV2aW91c1BhbmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgdGhpcy5zZXRBY3RpdmVUYWJQYW5lbChuZXh0VGFiKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgRHhUYWJzLmRvQW5pbWF0aW9uKHByZXZpb3VzUGFuZWwsIHRoaXMub3B0aW9ucy5mYWRlT3V0S2V5ZnJhbWVzLCB0aGlzLm9wdGlvbnMudGltaW5nRmFkZU91dCwgZmluaXNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRBY3RpdmVUYWJQYW5lbChuZXh0VGFiKTtcbiAgICB9XG4gIH1cblxuICBzZXRBY3RpdmVUYWJQYW5lbChzZWxlY3RlZFRhYikge1xuICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBjb25zdCBzZWxlY3RlZFBhbmVsID0gdGhpcy5nZXRQYW5lbEZyb21UYWIoc2VsZWN0ZWRUYWIpO1xuICAgIHNlbGVjdGVkUGFuZWwuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgc2VsZWN0ZWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjb25zdCBmaW5pc2ggPSAoKSA9PiB7XG4gICAgICB0aGlzLmZpcmVFdmVudCgnRHhUYWJzOmZhZGVpbicpO1xuICAgICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICB9O1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5maXJlRXZlbnQoJ0R4VGFiczpiZWZvcmVmYWRlaW4nLCB7IHNlbGVjdGVkVGFiLCBzZWxlY3RlZFBhbmVsIH0pO1xuICAgICAgRHhUYWJzLmRvQW5pbWF0aW9uKHNlbGVjdGVkUGFuZWwsIHRoaXMub3B0aW9ucy5mYWRlSW5LZXlmcmFtZXMsIHRoaXMub3B0aW9ucy50aW1pbmdGYWRlSW4sIGZpbmlzaCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRQYW5lbEZyb21UYWIodGFiKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuZWxzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCMke3RhYi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKX1gKTtcbiAgfVxuXG4gIHVuc2V0QWN0aXZlVGFicygpIHtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICB0YWIuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICB0YWIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoRHhUYWJzLmNsYXNzZXMudGFiQWN0aXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIGdldFRhYnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFicztcbiAgfVxuXG4gIGdldFBhbmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbHM7XG4gIH1cblxuICBEeFRhYnMobWV0aG9kLCBvcHRpb25zID0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZm4gPSB0aGlzW21ldGhvZF07XG4gICAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyA/IGZuLmJpbmQodGhpcywgb3B0aW9ucykoKSA6IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyohXG4gKiBIZWFkZXJCb3hcbiAqIFJlc2l6ZSBoZWFkZXJCb3ggYmFzZWQgb24gdGhlIGxvbmdlc3QgZWxlbWVudCB3aGVuIGRpc3BsYXllZCBpbmxpbmVcbiAqIENvcHlyaWdodCAyMDE5OiBDb25uZWN0IEdyb3VwLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5pbXBvcnQge1xuICBpc0JyZWFrcG9pbnRTbWFsbCxcbiAgaXNCcmVha3BvaW50TWVkaXVtLFxuICBnZXRCcmVha3BvaW50U2l6ZVxufSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvZGV2L2pzL3V0aWxzL2Jyb3dzZXJEZXRlY3Rpb24nO1xuaW1wb3J0IHsgd3JhcCwgdW53cmFwIH0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL2Rldi9qcy91dGlscy9kb21NYW5pcHVsYXRpb24nO1xuaW1wb3J0IHsgbWVhc3VyZVRleHRXaWR0aCB9IGZyb20gJy4uLy4uLy4uL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJCb3gge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zID0geyBvbkF0U21hbGxCcmVha3BvaW50OiBmYWxzZSB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLiRlbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgdGhpcy51aVNlbGVjdG9ycyA9IHtcbiAgICAgIGhlYWRlckJveENvbnRlbnQ6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyQm94Q29udGVudCcpLFxuICAgICAgaGVhZGVyQm94V2lkdGhFbGVtZW50czogW1xuICAgICAgICAuLi50aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlckJveF9fdGNvUHJpY2UsIC5oZWFkaW5nVGV4dE1haW4sIC5oZWFkaW5nVGV4dFN1YiAuc3VidGl0bGUsIC5oZWFkaW5nVGV4dFN1YiwgLnByaWNlLCAucHJpbWFyeUxpbmtXaXRoU3R5bGUsIC5zZWNvbmRhcnlMaW5rQ29udGFpbmVyLCAuY2F2ZWF0LCAuYm9keVRleHQsIC50b3RhbENvc3QsIC5ib2R5VGV4dCwgLmhlYWRlckJveF9fc2x1ZywgLmhlYWRlckJveF9faGVyb1RpdGxlLCAuaGVhZGVyQm94X190aXRsZSwgLmhlYWRlckJveF9faGVyb0NvcHksIC5oZWFkZXJCb3hfX2NvcHksIC5oZWFkZXJCb3hfX3ByaWNlJylcbiAgICAgIF0sXG4gICAgICBoZWFkaW5nVGV4dE1haW46IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZ1RleHRNYWluJyksXG4gICAgICB0b3RhbENvc3RFbGVtZW50OiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsQ29zdCcpXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdpZHRoIG9mIHdpZGVzdCBlbGVtZW50IGluIGhlYWRlckJveFxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfd2lkZXN0RWxlbWVudFdpZHRoXG4gICAgICovXG4gICAgdGhpcy5fd2lkZXN0RWxlbWVudFdpZHRoID0gMDtcblxuICAgIC8qKlxuICAgICAqIEJvdW5kIGV2ZW50IGZvciBhZGRpbmcgLyByZW1vdmluZ1xuICAgICAqIEBwcm9wZXJ0eSB7ZXZlbnR9IF9yZXNpemVCb3VuZFxuICAgICAqL1xuICAgIHRoaXMuX3Jlc2l6ZUJvdW5kID0gbnVsbDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXNlcyB0aGUgY29tcG9uZW50XG4gICAqIEBtZXRob2QgaW5pdFxuICAgKi9cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2NoZWNrVG90YWxDb3N0UHJpY2VXaWR0aCgpO1xuICAgIHRoaXMuX2NoZWNrT25seUhhc1ByaW1hcnlIZWFkaW5nKCk7XG4gICAgdGhpcy5pbml0TGlua3MoKTtcblxuICAgIHRoaXMuX3Jlc2l6ZUJvdW5kID0gdGhpcy5fcmVzaXplSGVhZGVyQm94LmJpbmQodGhpcyk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHRoaXMuX3Jlc2l6ZUhlYWRlckJveCgpKTsgLy8gTFJBLTIzNDk2OiBPbmx5IGFkanVzdCB0aGUgc2l6ZSBvbmNlIGZ1bGx5IGxvYWRlZFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZXNpemVCb3VuZCk7XG5cbiAgICB0aGlzLl90Y29PcmllbnRhdGlvbkNoZWNrKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgKCkgPT5cbiAgICAgIHRoaXMuX3Rjb09yaWVudGF0aW9uQ2hlY2soKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VGVsTGlua3NTdGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdExpbmtzKCkge1xuICAgIHRoaXMuc2V0VGVsTGlua3NTdGF0ZSgpO1xuICAgIHRoaXMudGVscy5mb3JFYWNoKCh0ZWwpID0+IHtcbiAgICAgIHRlbC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB0ZWwuZ2V0QXR0cmlidXRlKCdocmVmJykucmVwbGFjZSgvIC9nLCAnJykpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VGVsTGlua3NTdGF0ZSgpIHtcbiAgICB0aGlzLnRlbHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbCcpO1xuXG4gICAgdGhpcy50ZWxzLmZvckVhY2goKHRlbCkgPT4ge1xuICAgICAgbGV0IHNlbGVjdG9yO1xuICAgICAgaWYgKGdldEJyZWFrcG9pbnRTaXplKGZhbHNlKSA9PT0gJ2xhcmdlJykge1xuICAgICAgICBzZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc2VsZWN0b3IucmVtb3ZlQXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgc2VsZWN0b3Iuc2V0QXR0cmlidXRlKCdocmVmJywgYHRlbDoke3RlbC5pbm5lckhUTUwucmVwbGFjZSgvIC9nLCAnJyl9YCk7XG4gICAgICB9XG4gICAgICBzZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCd0ZWwnKTtcbiAgICAgIHdyYXAodGVsLCBzZWxlY3Rvcik7XG4gICAgICB1bndyYXAodGVsKTtcbiAgICB9KTtcbiAgfVxuICAvKlxuICAgKiBAbWV0aG9kIF90Y29PcmllbnRhdGlvbkNoYW5nZVxuICAgKi9cbiAgX3Rjb09yaWVudGF0aW9uQ2hlY2soKSB7XG4gICAgY29uc3QgdG90YWxDb3N0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJCb3hfX3RvdGFsQ29zdCcpO1xuICAgIGlmICghdG90YWxDb3N0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5vdERlc2t0b3AgPSBpc0JyZWFrcG9pbnRNZWRpdW0oKSB8fCBpc0JyZWFrcG9pbnRTbWFsbCgpO1xuICAgIHRvdGFsQ29zdC5jbGFzc0xpc3QucmVtb3ZlKCdsYW5kc2NhcGUnKTtcblxuICAgIGlmIChub3REZXNrdG9wICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IGxhbmRzY2FwZSknKSkge1xuICAgICAgdG90YWxDb3N0LmNsYXNzTGlzdC5hZGQoJ2xhbmRzY2FwZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGVyZSBpcyBvbmx5IGEgUHJpbWFyeSBIZWFkaW5nIGluIHRoZSBoZWFkZXJCb3ggYW5kIGFwcGx5IHNwZWNpZmMgc3R5bGVzXG4gICAqIEBtZXRob2QgX2NoZWNrT25seUhhc1ByaW1hcnlIZWFkaW5nXG4gICAqL1xuICBfY2hlY2tPbmx5SGFzUHJpbWFyeUhlYWRpbmcoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5lbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmltYXJ5SGVhZGluZycpXG4gICAgKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb25seUhhc1ByaW1hcnlIZWFkaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSB0aGUgaGVhZGVyIGJveCBiYXNlZCBvbiB0aGUgbG9uZ2VzdCBlbGVtZW50IHdoZW4gZGlzcGxheWVkIGlubGluZS5cbiAgICogVGhpcyBpcyB0byBtYWtlIHN1cmUgdGhlcmUgaXMgbm8gYWRkaXRpb25hbCBnYXAgYmV0d2VlbiB0aGUgd2lkZXN0IGVsZW1lbnQnc1xuICAgKiBmYXIgcmlnaHQgY2hhcmFjdGVyIGFuZCB0aGUgaGVhZGVyQm94J3Mgc3RhbmRhcmQgcGFkZGluZyAoaS5lLiBubyBleHRyYSB3aGl0ZXNwYWNlIG9uIHJpZ2h0KVxuICAgKlxuICAgKiBAbWV0aG9kIF9yZXNpemVIZWFkZXJCb3hlc1xuICAgKi9cbiAgX3Jlc2l6ZUhlYWRlckJveCgpIHtcbiAgICB0aGlzLl90Y29PcmllbnRhdGlvbkNoZWNrKCk7XG4gICAgY29uc3QgaXNOb3RTbWFsbEJyZWFrcG9pbnQgPSBnZXRCcmVha3BvaW50U2l6ZSgpICE9PSAnc21hbGwnO1xuXG4gICAgLy8gUmVzZXQgd2lkdGggZm9yIHNtYWxsIGJyZWFrcG9pbnQgYW5kIGZvciByZS1tZWFzdXJpbmcgYXQgbWVkaXVtIGFuZCBsYXJnZSBicmVha3BvaW50c1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9ICdhdXRvJztcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWF4V2lkdGhPZmYnKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMub25BdFNtYWxsQnJlYWtwb2ludCB8fCBpc05vdFNtYWxsQnJlYWtwb2ludCkge1xuICAgICAgY29uc3QgeyBoZWFkZXJCb3hDb250ZW50IH0gPSB0aGlzLnVpU2VsZWN0b3JzO1xuXG4gICAgICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShoZWFkZXJCb3hDb250ZW50KTtcbiAgICAgIGNvbnN0IGVsZW1lbnRQYWRkaW5nID1cbiAgICAgICAgcGFyc2VJbnQoc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpLCAxMCkgKiAyO1xuXG4gICAgICAvLyBHZXQgd2lkZXN0IGVsZW1lbnQncyB3aWR0aFxuICAgICAgdGhpcy5fd2lkZXN0RWxlbWVudFdpZHRoID0gMDsgLy8gcmVzZXRcbiAgICAgIHRoaXMudWlTZWxlY3RvcnMuaGVhZGVyQm94V2lkdGhFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT5cbiAgICAgICAgdGhpcy5fZ2V0V2lkZXN0RWxlbWVudFdpZHRoKGVsZW1lbnQpKTtcblxuICAgICAgLy8gU2V0IGhlYWRlckJveCB0byB3aWRlc3QgZWxlbWVudCdzIHdpZHRoIGFuZCBib3gncyBwYWRkaW5nXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt0aGlzLl93aWRlc3RFbGVtZW50V2lkdGggK1xuICAgICAgICBlbGVtZW50UGFkZGluZ31weGA7XG5cbiAgICAgIC8vIExSQS05MTc3OiBhY2NvdW50IGZvciBsb25nIChlLmcuIEdlcm1hbikgd29yZHNcbiAgICAgIC8vIENoZWNrIGlmIGhlYWRpbmcgd2lkdGggb3ZlcmZsb3dzIHRoZSBib3gsIGV4cGFuZCB0aGUgYm94IGFjY29yZGluZ2x5XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMudWlTZWxlY3RvcnMuaGVhZGluZ1RleHRNYWluICYmXG4gICAgICAgICh0aGlzLnVpU2VsZWN0b3JzLmhlYWRpbmdUZXh0TWFpbi53aWR0aCgpICsgZWxlbWVudFBhZGRpbmcpIC8gMiA+XG4gICAgICAgICAgdGhpcy5lbGVtZW50LndpZHRoKClcbiAgICAgICkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWF4V2lkdGhPZmYnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgZWxlbWVudCBpcyB3aWRlc3QsIGlmIHNvIHNldCB3aWRlc3RFbGVtZW50V2lkdGggYWNjb3JkaW5nbHlcbiAgICogQG1ldGhvZCBfZ2V0V2lkZXN0RWxlbWVudFdpZHRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge2VsZW1lbnR9IGl0ZW1cbiAgICovXG5cbiAgX2dldFdpZGVzdEVsZW1lbnRXaWR0aChlbGVtZW50KSB7XG4gICAgY29uc3QgaXRlbSA9IGVsZW1lbnQ7XG4gICAgY29uc3QgaXNOb3RJbmxpbmVhYmxlID1cbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmltYXJ5TGlua1dpdGhTdHlsZScpIHx8XG4gICAgICBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyQm94RG9udElubGluZScpOyAvLyBDVEFzIHNob3VsZCBiZSBtZWFzdXJlZCBhcyBibG9jay1sZXZlbCBpdGVtXG5cbiAgICBpZiAoIWlzTm90SW5saW5lYWJsZSkge1xuICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gICAgfVxuXG4gICAgY29uc3Qgd2lkdGggPSBpdGVtLm9mZnNldFdpZHRoICsgMTsgLy8gTFJBLTkxNzkgRmlyZWZveCBuZWVkcyBleHRyYSBwaXhlbFxuXG4gICAgaWYgKCFpc05vdElubGluZWFibGUpIHtcbiAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cblxuICAgIC8vIElmIGxvbmdlc3QsIHNldCBhcyBsb25nZXN0V2lkdGhcbiAgICB0aGlzLl93aWRlc3RFbGVtZW50V2lkdGggPVxuICAgICAgd2lkdGggPiB0aGlzLl93aWRlc3RFbGVtZW50V2lkdGggPyB3aWR0aCA6IHRoaXMuX3dpZGVzdEVsZW1lbnRXaWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgcHJpY2Ugc3RyaW5nIGlzIHRvbyB3aWRlLCBhbmQgYXBwbHkgdGhlIGNsYXNzIHRoYXQgc3RhY2tzIHByaWNlIG9uIHRvcCBvZiBvdGhlciBpbmZvXG4gICAqIEBtZXRob2QgX2NoZWNrVG90YWxDb3N0UHJpY2VXaWR0aFxuICAgKi9cbiAgX2NoZWNrVG90YWxDb3N0UHJpY2VXaWR0aCgpIHtcbiAgICBjb25zdCBUQ08gPSB0aGlzLnVpU2VsZWN0b3JzLnRvdGFsQ29zdEVsZW1lbnQgfHwgW107XG4gICAgaWYgKFRDTy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBudW1iZXJFbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubnVtYmVyJykgfHwge307XG4gICAgY29uc3QgcHJpY2VUZXh0ID0gbnVtYmVyRWwuaW5uZXJIVE1MIHx8ICcnO1xuICAgIGNvbnN0IGN1cnJlbmN5RWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbmN5JykgfHwge307XG4gICAgY29uc3QgY3VycmVuY3lUZXh0ID0gY3VycmVuY3lFbC5pbm5lckhUTUwgfHwgJyc7XG4gICAgY29uc3QgYXBwZW5kZWRFbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwZW5kZWRGcm9tJykgfHwge307XG4gICAgY29uc3QgYXBwZW5kZWRGcm9tID0gYXBwZW5kZWRFbC5pbm5lckhUTUwgfHwgJyc7XG4gICAgY29uc3Qgc3VmZml4RWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlU3VmZml4JykgfHwge307XG4gICAgY29uc3Qgc3VmZml4RnJvbSA9IHN1ZmZpeEVsLmlubmVySFRNTCB8fCAnJztcbiAgICBjb25zdCBjYXZlYXRFbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2F2ZWF0U3ltYm9sJykgfHwge307XG4gICAgY29uc3QgY2F2ZWF0RnJvbSA9IGNhdmVhdEVsLmlubmVySFRNTCB8fCAnJztcblxuICAgIC8vIE1pbWljIHRoZSBzZW1hbnRpYyBvZiBhY3R1YWwgSGVhZGVyQm94IHNvIHdlIGNhbiBnZXQgYXBwbGllZCBmb250IHNpemUuXG4gICAgY29uc3QgaHRtbFRleHQgPSBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlckJveFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvbnRDb3N0IGhlYWRlckJveF9fdGNvUHJpY2VcIj5cbiAgICAgICR7cHJpY2VUZXh0ICsgY3VycmVuY3lUZXh0ICsgYXBwZW5kZWRGcm9tICsgc3VmZml4RnJvbSArIGNhdmVhdEZyb219XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29uc3QgcHJpY2VXaWR0aCA9IG1lYXN1cmVUZXh0V2lkdGgoaHRtbFRleHQsIG51bGwpO1xuXG4gICAgaWYgKHByaWNlV2lkdGggPiAxNjApIHtcbiAgICAgIFRDTy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJCb3hEb250SW5saW5lJyk7XG4gICAgICBUQ08uY2xhc3NMaXN0LmFkZCgnc3RhY2tlZCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZXZlbnRzIChjYWxsIGJlZm9yZSBkZXN0cm95KVxuICAgKiBAbWV0aG9kIHJlbW92ZUV2ZW50c1xuICAgKi9cbiAgcmVtb3ZlRXZlbnRzKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZXNpemVCb3VuZCk7XG4gIH1cbn1cbiIsImltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xuaW1wb3J0IEhlYWRlckJveCBmcm9tICcuLi8uLi8uLi9IZWFkZXJCb3gvZXM2L0hlYWRlckJveCc7XG5pbXBvcnQgeyBpc01vYmlsZURldmljZSwgaXNCcmVha3BvaW50U21hbGwsIGJyZWFrcG9pbnRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2Rldi9qcy91dGlscy9icm93c2VyRGV0ZWN0aW9uJztcbmltcG9ydCB7IGNoZWNrRGVmaW5lZCwgZ2VuZXJhdGVDdXJyZW50RGF0ZSwgcHJldmVudEFjdGlvbk9uRGVlcExpbmssIGdldFN0aWNreU5hdkhlaWdodFYyIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2Rldi9qcy91dGlscy9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm9TbGlkZVRlbXBsYXRlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5zd2lwZXJJbnN0YW5jZSA9IG51bGw7XG4gICAgdGhpcy51aVNlbGVjdG9ycyA9IHtcbiAgICAgICR2aWRlbzogbnVsbCxcbiAgICAgIHRhYmJlZENvbnRhaW5lcjogdGhpcy5lbGVtZW50LmNsb3Nlc3QoJy5UYWJiZWRDb250YWluZXInKSxcbiAgICAgIGNhcm91c2VsUGFyZW50OiB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnLkR4Q2Fyb3VzZWxfX2Nhcm91c2VsJyksXG4gICAgICBkeENhcm91c2VsUGFyZW50OiB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnLkR4Q2Fyb3VzZWwnKSxcbiAgICAgIG5vbkRhdGVBd2FyZVNsaWRlOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLkhlcm9TbGlkZV9fY29udGVudCcpLFxuICAgICAgZGF0ZVJlc3RyaWN0ZWRXcmFwcGVyOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLkhlcm9TbGlkZV9fb3ZlcnJpZGVzJyksXG4gICAgICBkYXRlUmVzdHJpY3RlZENvbnRlbnQ6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuSGVyb1NsaWRlX19vdmVycmlkZUl0ZW0nKSxcbiAgICAgIGhlYWRlckJveDogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJzpub3QoLkhlcm9TbGlkZV9fb3ZlcnJpZGVzKSAuaGVhZGVyQm94JyksXG4gICAgICB2aWRlb1BsYXllcjogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJzpub3QoLkhlcm9TbGlkZV9fb3ZlcnJpZGVzKSAuVmlkZW9QbGF5ZXInKSxcbiAgICAgIGRlZXBMaW5rYWJsZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmltYXJ5TGlua0NvbnRhaW5lciBhLCAuc2Vjb25kYXJ5TGlua0NvbnRhaW5lciBhJylcbiAgICB9O1xuICAgIHRoaXMuaGFzTGVhc2VMYXlvdXQgPSB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdIZXJvU2xpZGUtLWhhcy1sZWFzZS1sYXlvdXQnKTtcbiAgICB0aGlzLmlzRnVsbEZyYW1lVGVtcGxhdGUgPSB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdIZXJvU2xpZGUtLWZ1bGwtZnJhbWUtdGVtcGxhdGUnKTtcblxuICAgIGlmIChjaGVja0RlZmluZWQodGhpcy51aVNlbGVjdG9ycy5jYXJvdXNlbFBhcmVudCkpIHtcbiAgICAgIGNvbnN0IHN0b3JlTmFtZSA9IGBEeENhcm91c2VsU3RvcmUtJHt0aGlzLnVpU2VsZWN0b3JzLmNhcm91c2VsUGFyZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpfWA7XG4gICAgICB0aGlzLnN0b3JlID0gd2luZG93W3N0b3JlTmFtZV07XG4gICAgICB0aGlzLmFwcGx5SGVyb1NsaWRlQ2xhc3MoKTtcbiAgICAgIHRoaXMuYXBwbHlTbGlkZVRhbGxlckNsYXNzKCk7XG4gICAgICB0aGlzLmNoZWNrU2xpZGVGb3JMZWFzZUNsYXNzKCk7XG4gICAgICB0aGlzLmNoZWNrU2xpZGVGb3JBbHRlcm5hdGVMYXlvdXRDbGFzcygpO1xuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyRGF0ZUF3YXJlQ29udGVudCgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGVDYXJvdXNlbFRoZW1lKCk7XG4gICAgICB0aGlzLmluaXRhbGlzZVNsaWRlQ29udGVudCgpO1xuICAgICAgdGhpcy5iaW5kVGFiYmVkQ29udGFpbmVyRXZlbnRzKCk7XG4gICAgICB0aGlzLmJpbmRTbGlkZXJCYXNlZEV2ZW50cygpO1xuICAgICAgdGhpcy5iaW5kQ29udGVudEJhc2VkRXZlbnRzKCk7XG4gICAgICB0aGlzLnVpU2VsZWN0b3JzLm5vbkRhdGVBd2FyZVNsaWRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5zZXRTbGlkZUhlaWdodCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRTbGlkZUhlaWdodCgpO1xuICB9XG5cbiAgYXBwbHlIZXJvU2xpZGVDbGFzcygpIHtcbiAgICB0aGlzLnVpU2VsZWN0b3JzLmR4Q2Fyb3VzZWxQYXJlbnQuY2xhc3NMaXN0LmFkZCgnRHhDYXJvdXNlbC0tY29udGFpbnMtaGVyby1zbGlkZScpO1xuICB9XG5cbiAgYXBwbHlTbGlkZVRhbGxlckNsYXNzKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnSGVyb1NsaWRlLS1tb2JpbGUtaW1hZ2UtdGFsbGVyJykpIHJldHVybjtcbiAgICB0aGlzLnVpU2VsZWN0b3JzLmR4Q2Fyb3VzZWxQYXJlbnQuY2xhc3NMaXN0LmFkZCgnRHhDYXJvdXNlbC0tY29udGFpbnMtaGVyby1zbGlkZS0tdGFsbGVyJyk7XG4gIH1cblxuICBjaGVja1NsaWRlRm9yTGVhc2VDbGFzcygpIHtcbiAgICBpZiAoIXRoaXMuaGFzTGVhc2VMYXlvdXQpIHJldHVybjtcbiAgICB0aGlzLnVpU2VsZWN0b3JzLmR4Q2Fyb3VzZWxQYXJlbnQuY2xhc3NMaXN0LmFkZCgnRHhDYXJvdXNlbC0tY29udGFpbnMtbGVhc2UtbGF5b3V0Jyk7XG4gIH1cblxuICBjaGVja1NsaWRlRm9yQWx0ZXJuYXRlTGF5b3V0Q2xhc3MoKSB7XG4gICAgaWYgKCF0aGlzLmlzRnVsbEZyYW1lVGVtcGxhdGUpIHJldHVybjtcbiAgICB0aGlzLnVpU2VsZWN0b3JzLmR4Q2Fyb3VzZWxQYXJlbnQuY2xhc3NMaXN0LmFkZCgnRHhDYXJvdXNlbC0tY29udGFpbnMtZnVsbC1mcmFtZS10ZW1wbGF0ZScpO1xuICB9XG5cbiAgYXN5bmMgZmlsdGVyRGF0ZUF3YXJlQ29udGVudCgpIHtcbiAgICBpZiAoIWNoZWNrRGVmaW5lZCh0aGlzLnVpU2VsZWN0b3JzLmRhdGVSZXN0cmljdGVkQ29udGVudCkpIHJldHVybjtcbiAgICBsZXQgdGFyZ2V0Rm9yUmVtb3ZhbCA9IHRoaXMudWlTZWxlY3RvcnMuZGF0ZVJlc3RyaWN0ZWRXcmFwcGVyO1xuICAgIGNvbnN0IGRhdGVTZXR0aW5ncyA9IEpTT04ucGFyc2UoYXRvYih0aGlzLnVpU2VsZWN0b3JzLmRhdGVSZXN0cmljdGVkQ29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGF0ZXMnKSkpWzBdO1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZ2VuZXJhdGVDdXJyZW50RGF0ZSgpO1xuICAgIGNvbnN0IHN0YXJ0RGF0ZUFycmF5ID0gZGF0ZVNldHRpbmdzLnN0YXJ0LnNwbGl0KCcsJyk7XG4gICAgY29uc3QgZW5kRGF0ZUFycmF5ID0gZGF0ZVNldHRpbmdzLmVuZC5zcGxpdCgnLCcpO1xuXG4gICAgLyogQ29udmVydCBlYWNoIGVsZW1lbnQgb2YgYXJyYXkgdG8gaW50ZWdlciAqL1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnREYXRlQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHN0YXJ0RGF0ZUFycmF5W2ldID0gcGFyc2VJbnQoc3RhcnREYXRlQXJyYXlbaV0sIDEwKTtcbiAgICAgIGVuZERhdGVBcnJheVtpXSA9IHBhcnNlSW50KGVuZERhdGVBcnJheVtpXSwgMTApO1xuICAgIH1cblxuICAgIC8qIENvbnZlcnQgZGF0ZXMgdG8gVVRDIGZvciBjb21wYXJpbmcgKi9cbiAgICBjb25zdCBbZW5kWWVhciwgZW5kTW9udGgsIGVuZERheSwgZW5kSG91ciwgZW5kTWludXRlc10gPSBlbmREYXRlQXJyYXk7XG4gICAgY29uc3QgW3N0YXJ0WWVhciwgc3RhcnRNb250aCwgc3RhcnREYXksIHN0YXJ0SG91ciwgc3RhcnRNaW51dGVzXSA9IHN0YXJ0RGF0ZUFycmF5O1xuICAgIGNvbnN0IHNsaWRlU3RhcnREYXRlID0gRGF0ZS5VVEMoc3RhcnRZZWFyLCBzdGFydE1vbnRoIC0gMSwgc3RhcnREYXksIHN0YXJ0SG91ciwgc3RhcnRNaW51dGVzKTtcbiAgICBjb25zdCBzbGlkZUVuZERhdGUgPSBEYXRlLlVUQyhlbmRZZWFyLCBlbmRNb250aCAtIDEsIGVuZERheSwgZW5kSG91ciwgZW5kTWludXRlcyk7XG5cbiAgICBpZiAoY3VycmVudERhdGUgPj0gc2xpZGVTdGFydERhdGUgJiYgY3VycmVudERhdGUgPCBzbGlkZUVuZERhdGUpIHtcbiAgICAgIHRhcmdldEZvclJlbW92YWwgPSB0aGlzLnVpU2VsZWN0b3JzLm5vbkRhdGVBd2FyZVNsaWRlO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0YXJnZXRGb3JSZW1vdmFsKTtcbiAgICB0aGlzLnJlYmluZFNlbGVjdG9yc0FmdGVyQ29udGVudEZpbHRlcigpO1xuICB9XG5cbiAgcmViaW5kU2VsZWN0b3JzQWZ0ZXJDb250ZW50RmlsdGVyKCkge1xuICAgIGNvbnN0IHJlYm91bmRTZWxlY3RvcnMgPSB7XG4gICAgICBoZWFkZXJCb3g6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyQm94JyksXG4gICAgICB2aWRlb1BsYXllcjogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5WaWRlb1BsYXllcicpLFxuICAgICAgbm9uRGF0ZUF3YXJlU2xpZGU6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuSGVyb1NsaWRlX19jb250ZW50JyksXG4gICAgfTtcbiAgICB0aGlzLnVpU2VsZWN0b3JzID0gT2JqZWN0LmFzc2lnbih0aGlzLnVpU2VsZWN0b3JzLCByZWJvdW5kU2VsZWN0b3JzKTtcbiAgfVxuXG4gIGluaXRhbGlzZVNsaWRlQ29udGVudCgpIHtcbiAgICB0aGlzLmluaXRhbGlzZUhlYWRlckJveCgpO1xuICAgIHRoaXMuaW5pdGFsaXNlU2xpZGVMaW5rcygpO1xuICAgIHRoaXMuaW5pdGlhbGlzZVNsaWRlVmlkZW8oKTtcbiAgfVxuXG4gIGluaXRhbGlzZUhlYWRlckJveCgpIHtcbiAgICBpZiAoIWNoZWNrRGVmaW5lZCh0aGlzLnVpU2VsZWN0b3JzLmhlYWRlckJveCkpIHJldHVybjtcbiAgICB0aGlzLmhlYWRlckJveCA9IG5ldyBIZWFkZXJCb3godGhpcy51aVNlbGVjdG9ycy5oZWFkZXJCb3gpO1xuICAgIHRoaXMudG9nZ2xlSGVhZGVyQm94VmlzaWJpbGl0eSgpO1xuICB9XG5cbiAgaW5pdGFsaXNlU2xpZGVMaW5rcygpIHtcbiAgICAkKCcuUmVzcG9uc2l2ZUxpbmsnKS5SZXNwb25zaXZlTGluaygpO1xuICAgICQoJy5UYXJnZXRMaW5rcycpLlRhcmdldExpbmtzKCdzZXR1cExpc3RlbmVyJyk7XG5cbiAgICB0aGlzLnVpU2VsZWN0b3JzLmRlZXBMaW5rYWJsZS5mb3JFYWNoKChzaW5nbGVMaW5rKSA9PiB7XG4gICAgICBzaW5nbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHByZXZlbnRBY3Rpb25PbkRlZXBMaW5rKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZVNsaWRlVmlkZW8oKSB7XG4gICAgaWYgKCFjaGVja0RlZmluZWQodGhpcy51aVNlbGVjdG9ycy52aWRlb1BsYXllcikpIHJldHVybjtcbiAgICB0aGlzLnVpU2VsZWN0b3JzLiR2aWRlbyA9ICQodGhpcy51aVNlbGVjdG9ycy52aWRlb1BsYXllcik7XG5cbiAgICBpZiAodGhpcy51aVNlbGVjdG9ycy4kdmlkZW8ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzTW9iaWxlRGV2aWNlKCkgJiYgIXRoaXMuaXNGdWxsRnJhbWVUZW1wbGF0ZSkge1xuICAgICAgdGhpcy51aVNlbGVjdG9ycy4kdmlkZW8ucmVtb3ZlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHZpZGVvT3B0aW9ucyA9IHtcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgY29udHJvbHM6IFtdLFxuICAgICAgbG9vcDogZmFsc2UsXG4gICAgICBtdXRlZDogdHJ1ZSxcbiAgICAgIGlzQmFja2dyb3VuZFZpZGVvOiB0cnVlLFxuICAgICAgY2xpY2tUb1BsYXlQYXVzZTogZmFsc2UsXG4gICAgICBwYXVzZU90aGVyUGxheWVyczogZmFsc2VcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaXNGdWxsRnJhbWVUZW1wbGF0ZSkge1xuICAgICAgdmlkZW9PcHRpb25zID0ge1xuICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBjbGlja1RvUGxheVBhdXNlOiB0cnVlLFxuICAgICAgICBpUGhvbmVVc2VOYXRpdmVDb250cm9sczogZmFsc2UsXG4gICAgICAgIGlQYWRVc2VOYXRpdmVDb250cm9sczogZmFsc2UsXG4gICAgICAgIEFuZHJvaWRVc2VOYXRpdmVDb250cm9sczogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy51aVNlbGVjdG9ycy4kdmlkZW8uVmlkZW9QbGF5ZXIodmlkZW9PcHRpb25zKTtcbiAgICB0aGlzLmJpbmRWaWRlb0V2ZW50cygpO1xuICB9XG5cbiAgYmluZFZpZGVvRXZlbnRzKCkge1xuICAgIGlmICghdGhpcy5pc0Z1bGxGcmFtZVRlbXBsYXRlKSByZXR1cm47XG5cbiAgICBjb25zdCB2aWRlb1BsYXlCdXR0b24gPSAkKHRoaXMudWlTZWxlY3RvcnMudmlkZW9QbGF5ZXIucXVlcnlTZWxlY3RvcignLm1lanMtb3ZlcmxheS1wbGF5JykpO1xuICAgIHRoaXMudWlTZWxlY3RvcnMuJHZpZGVvLm9uKCdvblBsYXknLCAoKSA9PiB7XG4gICAgICB2aWRlb1BsYXlCdXR0b24uaGlkZSgpO1xuXG4gICAgICBpZiAoaXNCcmVha3BvaW50U21hbGwoKSB8fCAhY2hlY2tEZWZpbmVkKHRoaXMudWlTZWxlY3RvcnMuaGVhZGVyQm94KSkgcmV0dXJuO1xuICAgICAgdGhpcy50b2dnbGVIZWFkZXJCb3hWaXNpYmlsaXR5KHRydWUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy51aVNlbGVjdG9ycy4kdmlkZW8ub24oJ29uUGF1c2UnLCAoKSA9PiB7XG4gICAgICB2aWRlb1BsYXlCdXR0b24uc2hvdygpO1xuXG4gICAgICBpZiAoaXNCcmVha3BvaW50U21hbGwoKSB8fCAhY2hlY2tEZWZpbmVkKHRoaXMudWlTZWxlY3RvcnMuaGVhZGVyQm94KSkgcmV0dXJuO1xuICAgICAgdGhpcy50b2dnbGVIZWFkZXJCb3hWaXNpYmlsaXR5KCk7XG4gICAgfSk7XG4gIH1cblxuICBiaW5kVGFiYmVkQ29udGFpbmVyRXZlbnRzKCkge1xuICAgIGlmICghY2hlY2tEZWZpbmVkKHRoaXMudWlTZWxlY3RvcnMudGFiYmVkQ29udGFpbmVyKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFicyA9IHRoaXMudWlTZWxlY3RvcnMudGFiYmVkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5EeFRhYnMnKTtcbiAgICB0YWJzLmFkZEV2ZW50TGlzdGVuZXIoJ0R4VGFiczpiZWZvcmVmYWRlaW4nLCAoKSA9PiB7XG4gICAgICBpZiAoIWNoZWNrRGVmaW5lZCh0aGlzLnVpU2VsZWN0b3JzLmhlYWRlckJveCkpIHJldHVybjtcbiAgICAgIHRoaXMuaGVhZGVyQm94Ll9yZXNpemVIZWFkZXJCb3goKTtcbiAgICB9KTtcbiAgfVxuXG4gIGJpbmRTbGlkZXJCYXNlZEV2ZW50cygpIHtcbiAgICBpZiAoIWNoZWNrRGVmaW5lZCh0aGlzLnVpU2VsZWN0b3JzLmNhcm91c2VsUGFyZW50KSkgcmV0dXJuO1xuICAgIHRoaXMuc3dpcGVySW5zdGFuY2UgPSB0aGlzLnVpU2VsZWN0b3JzLmNhcm91c2VsUGFyZW50LnN3aXBlcjtcblxuICAgIGlmICghY2hlY2tEZWZpbmVkKHRoaXMuc3dpcGVySW5zdGFuY2UpKSByZXR1cm47XG4gICAgdGhpcy5zd2lwZXJJbnN0YW5jZS5vbignc2xpZGVDaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZUhlYWRlckJveFZpc2liaWxpdHkodHJ1ZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN3aXBlckluc3RhbmNlLm9uKCd0cmFuc2l0aW9uU3RhcnQnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLXNsaWRlLWFjdGl2ZScpKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2Fyb3VzZWxUaGVtZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zd2lwZXJJbnN0YW5jZS5vbigndHJhbnNpdGlvbkVuZCcsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItc2xpZGUtYWN0aXZlJykpIHtcbiAgICAgICAgdGhpcy50b2dnbGVIZWFkZXJCb3hWaXNpYmlsaXR5KCk7XG4gICAgICAgIHRoaXMuYWRqdXN0VmlkZW9QbGF5aW5nU3RhdGUodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWNoZWNrRGVmaW5lZCh0aGlzLnVpU2VsZWN0b3JzLnZpZGVvUGxheWVyKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmFkanVzdFZpZGVvUGxheWluZ1N0YXRlKGZhbHNlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLXNsaWRlLWFjdGl2ZScpICYmICF0aGlzLmlzRnVsbEZyYW1lVGVtcGxhdGUpIHJldHVybjtcbiAgICAgIHRoaXMuYWRqdXN0VmlkZW9QbGF5aW5nU3RhdGUodGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnBsYXlpbmdTdGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBiaW5kQ29udGVudEJhc2VkRXZlbnRzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLnNldFNsaWRlSGVpZ2h0KCk7XG4gICAgICBpZiAoIWNoZWNrRGVmaW5lZCh0aGlzLnN3aXBlckluc3RhbmNlKSkgcmV0dXJuO1xuICAgICAgdGhpcy5zd2lwZXJJbnN0YW5jZS51cGRhdGUoKTtcbiAgICB9LCAyMDApKTtcblxuICAgIGlmICghY2hlY2tEZWZpbmVkKHRoaXMudWlTZWxlY3RvcnMudmlkZW9QbGF5ZXIpKSByZXR1cm47XG4gICAgdGhpcy51aVNlbGVjdG9ycy4kdmlkZW8ub24oJ3ZpZGVvRW5kZWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLnVpU2VsZWN0b3JzLiR2aWRlby5WaWRlb1BsYXllcigncGxheScpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlQ2Fyb3VzZWxUaGVtZSgpIHtcbiAgICBpZiAoIWNoZWNrRGVmaW5lZCh0aGlzLnVpU2VsZWN0b3JzLmR4Q2Fyb3VzZWxQYXJlbnQpKSByZXR1cm47XG5cbiAgICBpZiAoIWNoZWNrRGVmaW5lZCh0aGlzLnVpU2VsZWN0b3JzLmhlYWRlckJveCkpIHtcbiAgICAgIHRoaXMudWlTZWxlY3RvcnMuZHhDYXJvdXNlbFBhcmVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYmFja2dyb3VuZC10aGVtZScsICd3aGl0ZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLXNsaWRlLWFjdGl2ZScpKSByZXR1cm47XG5cbiAgICBsZXQgaGVhZGVyQm94VGhlbWUgPSB0aGlzLnVpU2VsZWN0b3JzLmhlYWRlckJveC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKTtcbiAgICBjb25zdCBicmFuZElzSmFndWFyID0gKGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLWJyYW5kLWlkJykgPT09ICdqYWd1YXInKTtcbiAgICBjb25zdCBzbGlkZUNvbnRhaW5zVENPID0gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnSGVyb1NsaWRlLS1jb250YWlucy1UQ08nKTtcbiAgICBpZiAoc2xpZGVDb250YWluc1RDTykge1xuICAgICAgaGVhZGVyQm94VGhlbWUgPSBicmFuZElzSmFndWFyID8gJ2dyZXknIDogJ2xyLWdyZXknO1xuICAgIH1cbiAgICB0aGlzLnVpU2VsZWN0b3JzLmR4Q2Fyb3VzZWxQYXJlbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJhY2tncm91bmQtdGhlbWUnLCBoZWFkZXJCb3hUaGVtZSk7XG4gIH1cblxuICB0b2dnbGVIZWFkZXJCb3hWaXNpYmlsaXR5KHNsaWRlQ2hhbmdlZCA9IGZhbHNlKSB7XG4gICAgaWYgKCFjaGVja0RlZmluZWQodGhpcy51aVNlbGVjdG9ycy5oZWFkZXJCb3gpKSByZXR1cm47XG4gICAgaWYgKHNsaWRlQ2hhbmdlZCkge1xuICAgICAgdGhpcy51aVNlbGVjdG9ycy5oZWFkZXJCb3guY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVpU2VsZWN0b3JzLmhlYWRlckJveC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuICB9XG5cbiAgYWRqdXN0VmlkZW9QbGF5aW5nU3RhdGUoYWN0aXZlU2xpZGUgPSBmYWxzZSwgc2xpZGVDaGFuZ2VFdmVudEZpcmVkID0gZmFsc2UpIHtcbiAgICBpZiAoIWNoZWNrRGVmaW5lZCh0aGlzLnVpU2VsZWN0b3JzLnZpZGVvUGxheWVyKSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnN0b3JlLmdldFN0YXRlKCkucGxheWluZ1N0YXRlICYmIGFjdGl2ZVNsaWRlKSB7XG4gICAgICB0aGlzLnVpU2VsZWN0b3JzLiR2aWRlby5WaWRlb1BsYXllcigncGxheScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVpU2VsZWN0b3JzLiR2aWRlby5WaWRlb1BsYXllcigncGF1c2UnKTtcbiAgICBpZiAoc2xpZGVDaGFuZ2VFdmVudEZpcmVkKSB7XG4gICAgICB0aGlzLnVpU2VsZWN0b3JzLiR2aWRlby5WaWRlb1BsYXllcigncmV3aW5kJyk7XG4gICAgfVxuICB9XG5cbiAgc2V0U2xpZGVIZWlnaHQoKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudEhlaWdodCA9ICh0aGlzLmlzRnVsbEZyYW1lVGVtcGxhdGUpID8gdGhpcy5zZXRGRkNTbGlkZUhlaWdodCgpIDogdGhpcy5zZXRIZXJvU2xpZGVIZWlnaHQoKTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gbmV3RWxlbWVudEhlaWdodDtcbiAgfVxuXG4gIHNldEhlcm9TbGlkZUhlaWdodCgpIHtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmICh3aW5kb3dXaWR0aCA8IGJyZWFrcG9pbnRzLm1lZGl1bSkgcmV0dXJuIG51bGw7XG4gICAgbGV0IGZ1bGxXaW5kb3dIZWlnaHQgPSB0aGlzLmRldGVybWluZUZ1bGxXaW5kb3dIZWlnaHQod2luZG93SGVpZ2h0KTtcblxuICAgIGlmIChmdWxsV2luZG93SGVpZ2h0ID4gNDUwKSB7XG4gICAgICBpZiAod2luZG93SGVpZ2h0IC8gd2luZG93V2lkdGggPiAxLjI1KSB7XG4gICAgICAgIGZ1bGxXaW5kb3dIZWlnaHQgPSB3aW5kb3dXaWR0aCAvIDEuNTU7IC8vIDEuNTUgYmFzZWQgb2ZmIGhlaWdodCBnaXZlbiB0byBIZXJvQ2Fyb3VzZWwgb24gaVBhZCBQcm8gaW4gcG9ydHJhaXQuXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtmdWxsV2luZG93SGVpZ2h0fXB4YDtcbiAgfVxuXG4gIHNldEZGQ1NsaWRlSGVpZ2h0KCkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKGlzQnJlYWtwb2ludFNtYWxsKCkpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVsZW1lbnRTaXplcyA9IHtcbiAgICAgIHRleHRBcmVhUGFkZGluZzogMjY0LCAvLyBUaGUgcmFuZG9tIG51bWJlciB0YWtlbiBmcm9tIHRoZSBvbGQgY2Fyb3VzZWwgdG8gZW5zdXJlIHRoZSBoZWlnaHRzIG1hdGNoLlxuICAgICAgdGV4dEFyZWFIZWlnaHQ6ICh0aGlzLnVpU2VsZWN0b3JzLmhlYWRlckJveCkgPyB0aGlzLnVpU2VsZWN0b3JzLmhlYWRlckJveC5vZmZzZXRIZWlnaHQgOiAwLFxuICAgIH07XG4gICAgbGV0IHJlcXVpcmVkTWluaW11bUhlaWdodCA9IE9iamVjdC52YWx1ZXMoZWxlbWVudFNpemVzKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcbiAgICBsZXQgaWRlYWxIZWlnaHQgPSB0aGlzLmRldGVybWluZUZ1bGxXaW5kb3dIZWlnaHQod2luZG93SGVpZ2h0KTtcblxuICAgIGlmICh0aGlzLnVpU2VsZWN0b3JzLmR4Q2Fyb3VzZWxQYXJlbnQpIHtcbiAgICAgIGNvbnN0IHNldE1heEhlaWdodCA9IHRoaXMudWlTZWxlY3RvcnMuZHhDYXJvdXNlbFBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFsbGVzdC10ZXh0LWhlaWdodCcpO1xuICAgICAgcmVxdWlyZWRNaW5pbXVtSGVpZ2h0ID0gKHNldE1heEhlaWdodCA9PT0gbnVsbCB8fCByZXF1aXJlZE1pbmltdW1IZWlnaHQgPj0gc2V0TWF4SGVpZ2h0KSA/IHJlcXVpcmVkTWluaW11bUhlaWdodCA6IHNldE1heEhlaWdodDtcbiAgICAgIHRoaXMudWlTZWxlY3RvcnMuZHhDYXJvdXNlbFBhcmVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFsbGVzdC10ZXh0LWhlaWdodCcsIHJlcXVpcmVkTWluaW11bUhlaWdodCk7XG4gICAgfVxuICAgIC8vIFRvIHByZXZlbnQgY2FyIGJlaW5nIGNyb3BwZWQgb24gZGVlcCBzY3JlZW5zLCBsaW1pdCBjb21wb25lbnQncyBoZWlnaHQsIHJlbGF0aXZlIHRvIGl0cyB3aWR0aFxuICAgIGNvbnN0IG1heEhlaWdodCA9IHdpbmRvd1dpZHRoIC8gMS40NTsgLy8gNjIwIGlzIG1heGltdW0gaGVpZ2h0IHdpdGggc2NyZWVuIGF0IDkwMHB4IGJlZm9yZSBjYXIgaXMgY3JvcHBlZFxuICAgIGlkZWFsSGVpZ2h0ID0gaWRlYWxIZWlnaHQgPCBtYXhIZWlnaHQgPyBpZGVhbEhlaWdodCA6IG1heEhlaWdodDtcbiAgICBjb25zdCBuZXdIZWlnaHQgPSAoaWRlYWxIZWlnaHQgPCByZXF1aXJlZE1pbmltdW1IZWlnaHQpID8gcmVxdWlyZWRNaW5pbXVtSGVpZ2h0IDogaWRlYWxIZWlnaHQ7XG5cbiAgICByZXR1cm4gYCR7bmV3SGVpZ2h0fXB4YDtcbiAgfVxuXG4gIGRldGVybWluZUZ1bGxXaW5kb3dIZWlnaHQod2luZG93SGVpZ2h0KSB7XG4gICAgY29uc3QgZWxlbWVudFRvcE9mZnNldCA9ICghY2hlY2tEZWZpbmVkKHRoaXMudWlTZWxlY3RvcnMuY2Fyb3VzZWxQYXJlbnQpID8gdGhpcy5lbGVtZW50Lm9mZnNldFRvcCA6IHRoaXMudWlTZWxlY3RvcnMuY2Fyb3VzZWxQYXJlbnQucGFyZW50RWxlbWVudC5vZmZzZXRUb3ApO1xuICAgIGNvbnN0IG5hdmlnYXRpb25IZWlnaHQgPSBnZXRTdGlja3lOYXZIZWlnaHRWMihlbGVtZW50VG9wT2Zmc2V0LCBmYWxzZSk7XG4gICAgcmV0dXJuIHdpbmRvd0hlaWdodCAtIG5hdmlnYXRpb25IZWlnaHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IGV2ZW50VHJpZ2dlciB9IGZyb20gJy4uLy4uLy4uL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdpbmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZWxlbSwgb3B0aW9ucykge1xuICAgIHRoaXMuX2VsZW0gPSBlbGVtO1xuICAgIHRoaXMuX2RlZmF1bHRzID0ge1xuICAgICAgY2xhc3NOYW1lOiAnUGFnaW5hdGlvbicsXG4gICAgICBzZWxlY3RvcjogJy5QYWdpbmF0aW9uJyxcbiAgICAgIGlzQmxhY2s6IGZhbHNlLFxuXG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIGNvbnRyb2xzOiAnUGFnaW5hdGlvbl9fY29udHJvbHMnLFxuICAgICAgICBwYXVzZWQ6ICdQYWdpbmF0aW9uLS1wYXVzZWQnLFxuICAgICAgICB3cmFwcGVyOiAnUGFnaW5hdGlvbl9fYnV0dG9uLXdyYXBwZXInLFxuICAgICAgICB3cmFwcGVyUGxheVBhdXNlOiAnUGFnaW5hdGlvbl9fYnV0dG9uLXdyYXBwZXItLXBsYXktcGF1c2UnLFxuICAgICAgICB3cmFwcGVyUGlwOiAnUGFnaW5hdGlvbl9fYnV0dG9uLXdyYXBwZXItLXBpcCcsXG4gICAgICAgIHBpcDogJ1BhZ2luYXRpb25fX3BpcCcsXG4gICAgICAgIHBpcEFjdGl2ZTogJ1BhZ2luYXRpb25fX3BpcC0tYWN0aXZlJyxcbiAgICAgICAgcGxheTogJ1BhZ2luYXRpb25fX3BsYXknLFxuICAgICAgICBwYXVzZTogJ1BhZ2luYXRpb25fX3BhdXNlJyxcbiAgICAgICAgcGxheWluZzogJ1BhZ2luYXRpb24tLXBsYXlpbmcnLFxuICAgICAgICBwYXVzZVRpbWVySWNvbjogJ1BhZ2luYXRpb25fX3BhdXNlLXRpbWVyLWljb24nLFxuICAgICAgICBwYXVzZVRpbWVySWNvbkNvdW50ZG93bjogJ1BhZ2luYXRpb25fX3BhdXNlLXRpbWVyLWljb24tY291bnRkb3duJyxcbiAgICAgICAgcGF1c2VUaW1lckljb25Db3VudGRvd25BbmltYXRpbmc6ICdQYWdpbmF0aW9uX19wYXVzZS0tYW5pbWF0aW9uJyxcbiAgICAgICAgcGF1c2VDb250cm9sSWNvbjogJ1BhZ2luYXRpb25fX3BhdXNlLWNvbnRyb2wtaWNvbicsXG4gICAgICAgIHBsYXlDb250cm9sSWNvbjogJ1BhZ2luYXRpb25fX3BsYXktY29udHJvbC1pY29uJyxcbiAgICAgIH0sXG5cbiAgICAgIGNvbnRyb2xzOiB7XG4gICAgICAgIHBsYXk6IG51bGwsXG4gICAgICAgIHBhdXNlOiBudWxsLFxuICAgICAgICBjb3VudGRvd246IG51bGwsXG4gICAgICAgIHBpcHM6IG51bGwsXG4gICAgICAgIHdyYXBwZXI6IG51bGwsXG4gICAgICB9LFxuXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgaW5pdDogJ2luaXQnLFxuICAgICAgICBiZWZvcmVDaGFuZ2U6ICdiZWZvcmVDaGFuZ2UnLFxuICAgICAgICBhZnRlckNoYW5nZTogJ2FmdGVyQ2hhbmdlJyxcbiAgICAgICAgcGxheTogJ3BsYXknLFxuICAgICAgICBwYXVzZTogJ3BhdXNlJyxcbiAgICAgICAgbG9vcEVuZDogJ2xvb3BFbmQnLFxuICAgICAgICBnb3RvTmV4dDogJ25leHQnLFxuICAgICAgICBnb3RvUHJldmlvdXM6ICdwcmV2aW91cycsXG4gICAgICAgIGNvdW50ZG93bkVuZDogJ2NvdW50ZG93bmVuZCcsXG4gICAgICAgIGxpdmVSZWdpb25VcGRhdGU6ICdsaXZlUmVnaW9uVXBkYXRlJyxcbiAgICAgIH0sXG5cbiAgICAgIC8vIGxhYmVscyAtIGZvciBwaXAgYW5kIHNsaWRlQ2hhbmdlZCBhdXRob3IgW10gYXMgYSBwbGFjZWhvbGRlciBmb3IgdGhlIGFjdHVhbCBzbGlkZSBudW1iZXIgaWYgcmVxdWlyZWRcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBwbGF5OiAncGxheScsXG4gICAgICAgIHBhdXNlOiAncGF1c2UnLFxuICAgICAgICBwaXA6ICdnbyB0byBbXScsXG4gICAgICAgIHBhdXNlZDogJ3BhdXNlZCcsXG4gICAgICAgIHBsYXlpbmc6ICdwbGF5aW5nJyxcbiAgICAgICAgc2xpZGVDaGFuZ2VkOiAnc2hvd2luZyBbXScsXG4gICAgICAgIG5leHQ6ICduZXh0JyxcbiAgICAgICAgcHJldmlvdXM6ICdwcmV2aW91cycsXG4gICAgICB9LFxuXG4gICAgICBhdXRvcGxheToge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSwgLy8gaWYgZmFsc2UsIGRvIG5vdCBvdXRwdXQgcGxheS9wYXVzZSBjb250cm9sc1xuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgcGF1c2VBdFN0YXJ0OiBmYWxzZSwgLy8gaWYgd2Ugd2FudCBhdXRvcGxheSBjb250cm9scyBidXQgaW5pdGlhbGx5IHBhdXNlZCwgc2V0IHRvIHRydWVcbiAgICAgICAgZGVsYXk6IDAsIC8vIGFmdGVyIHBpcCBzd2l0Y2hlcywgdGhpcyBpcyB0aGUgZGVsYXkgYmVmb3JlIHRoZSB0aW1lciByZXN0YXJ0cyAoZS5nLiBpZiB3ZSdyZSB3YWl0aW5nIGZvciBhIHNsaWRlIHRyYW5zaXRpb24pXG4gICAgICB9LFxuXG4gICAgICB0aW1lcjoge1xuICAgICAgICBzdGFydGVkOiBudWxsLFxuICAgICAgICByZW1haW5pbmc6IG51bGxcbiAgICAgIH0sXG5cbiAgICAgIF9waXBJbmRleEF0dHJpYnV0ZTogJ2RhdGEtcGlwLWluZGV4JyxcbiAgICAgIF9wbGF5aW5nU3RhdHVzOiBudWxsLCAvLyBwYXVzZWQgfHwgcnVubmluZ1xuICAgICAgX2FsbG93Rm9jdXNUb2dnbGU6IHRydWUsIC8vIGFsbG93cyBidXR0b24gZm9jdXMgdG8gYmUgc3dpdGNoZWQgYXV0b21hdGljYWxseSB3aGVuIHBsYXkvcGF1c2UgdG9nZ2xlZFxuICAgICAgX2RlbGF5VGltZXI6IG51bGwsIC8vIHN0b3JlcyBvdXIgdGltZXIgaWYgYSBkZWxheSBpcyByZXF1aXJlZFxuICAgICAgX25vbkhvdmVyUGF1c2VkOiBudWxsLFxuXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgbnVtYmVyT2ZQaXBzOiBudWxsLFxuICAgICAgZGVmYXVsdFNlbGVjdGVkOiAwLCAvLyB6ZXJvIGluZGV4ZWRcbiAgICB9O1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIGlmICghdGhpcy5fZWxlbSB8fCAhdGhpcy5vcHRpb25zLm51bWJlck9mUGlwcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9jcmVhdGVQYWdpbmF0aW9uKCk7XG4gIH1cblxuICBfY3JlYXRlUGFnaW5hdGlvbigpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5fZ2VuZXJhdGVIVE1MKCk7XG4gICAgdGhpcy5fYXBwZW5kUGFnaW5hdGlvblRvQ29udGFpbmVyKGh0bWwpO1xuICAgIHRoaXMuX2FkZFBhZ2luYXRpb25FdmVudHMoKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRyb2xzLnBhdXNlKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY29udHJvbHMucGF1c2UuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMuY2xhc3Nlcy5wYXVzZVRpbWVySWNvbkNvdW50ZG93bkFuaW1hdGluZyk7XG4gICAgfVxuICAgIHRoaXMuX2ZpcmVFdmVudCh0aGlzLm9wdGlvbnMuZXZlbnRzLmluaXQpO1xuICAgIHRoaXMuX3Jlc3RhcnRBbmltYXRpb24oKTtcbiAgfVxuXG4gIF9wbGF5QnV0dG9uSFRNTChjbGFzc2VzLCBsYWJlbHMpIHtcbiAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCIke2NsYXNzZXMucGxheX1cIiBhcmlhLWxhYmVsPVwiJHtsYWJlbHMucGF1c2VkfSwgJHtsYWJlbHMucGxheX1cIj4ke3RoaXMuX3BsYXlDb250cm9sSWNvblNWRygpfTwvYnV0dG9uPmA7XG4gIH1cblxuICBfcGF1c2VCdXR0b25IVE1MKGNsYXNzZXMsIGxhYmVscykge1xuICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cIiR7Y2xhc3Nlcy5wYXVzZX1cIiBhcmlhLWxhYmVsPVwiJHtsYWJlbHMucGxheWluZ30sICR7bGFiZWxzLnBhdXNlfVwiPlxuICAgICAgJHt0aGlzLl9wYXVzZUNvbnRyb2xJY29uU1ZHKCl9XG4gICAgICA8c3ZnIGNsYXNzPVwiJHtjbGFzc2VzLnBhdXNlVGltZXJJY29ufVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxjaXJjbGUgY2xhc3M9XCIke2NsYXNzZXMucGF1c2VUaW1lckljb25Db3VudGRvd259XCIgcj1cIjIwXCIgY3g9XCIyMVwiIGN5PVwiMjFcIj48L2NpcmNsZT48L3N2Zz5cbiAgICA8L2J1dHRvbj5gO1xuICB9XG5cbiAgLy8gY3JlYXRlIGFuZCByZXR1cm4gdGhlIEhUTUxcbiAgX2dlbmVyYXRlSFRNTCgpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NlcyxcbiAgICAgIGxhYmVsc1xuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgY29uc3Qgd3JhcHBlckhUTUwgPSAoaW5uZXJIVE1MLCBtb2RpZmllckNsYXNzKSA9PiBgPGxpIGNsYXNzPVwiJHtjbGFzc2VzLndyYXBwZXJ9ICR7bW9kaWZpZXJDbGFzc31cIj4ke2lubmVySFRNTH08L2xpPmA7XG4gICAgY29uc3QgYWRkTnVtYmVyVG9CdXR0b25MYWJlbCA9IG51bWJlciA9PiBQYWdpbmF0aW9uLl9yZXBsYWNlUGxhY2Vob2xkZXJMYWJlbFRleHQobGFiZWxzLnBpcCwgbnVtYmVyKTtcbiAgICBjb25zdCBwaXBIVE1MID0gbnVtYmVyID0+IGA8YnV0dG9uICR7dGhpcy5vcHRpb25zLl9waXBJbmRleEF0dHJpYnV0ZX09XCIke251bWJlcn1cIiBjbGFzcz1cIiR7Y2xhc3Nlcy5waXB9XCIgYXJpYS1sYWJlbD1cIiR7YWRkTnVtYmVyVG9CdXR0b25MYWJlbChudW1iZXIgKyAxKX1cIj48L2J1dHRvbj5gO1xuICAgIGNvbnN0IHBpcHMgPSBbLi4ubmV3IEFycmF5KG9wdGlvbnMubnVtYmVyT2ZQaXBzKV0ubWFwKChfXywgbnVtYmVyKSA9PiB3cmFwcGVySFRNTChwaXBIVE1MKG51bWJlciksIGNsYXNzZXMud3JhcHBlclBpcCkpO1xuXG4gICAgY29uc3QgcGxheUJ1dHRvbkhUTUwgPSB0aGlzLl9wbGF5QnV0dG9uSFRNTChjbGFzc2VzLCBsYWJlbHMpO1xuICAgIGNvbnN0IHBhdXNlQnV0dG9uSFRNTCA9IHRoaXMuX3BhdXNlQnV0dG9uSFRNTChjbGFzc2VzLCBsYWJlbHMpO1xuICAgIGNvbnN0IGNvbnRyb2xzSFRNTCA9IG9wdGlvbnMuYXV0b3BsYXkuZW5hYmxlZCA/IGAke3dyYXBwZXJIVE1MKHBsYXlCdXR0b25IVE1MICsgcGF1c2VCdXR0b25IVE1MLCBjbGFzc2VzLndyYXBwZXJQbGF5UGF1c2UpfWAgOiAnJztcblxuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICA8dWwgY2xhc3M9XCIke2NsYXNzZXMuY29udHJvbHN9XCI+XG4gICAgICAgICR7Y29udHJvbHNIVE1MfVxuICAgICAgICAke3BpcHMuam9pbignICcpfVxuICAgICAgPC91bD5cbiAgICBgO1xuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgLy8gaGFuZGxlIGNyZWF0aW5nIHRoZSBwYWdpbmF0aW9uIGFuZCBhZGRpbmcgdG8gY29udGFpbmVyXG4gIF9hcHBlbmRQYWdpbmF0aW9uVG9Db250YWluZXIoaHRtbCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMuY2xhc3NOYW1lKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzQmxhY2spIHtcbiAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZChgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfS0tYmxhY2tgKTtcbiAgICB9XG4gICAgdGhpcy5fZWxlbS5hcHBlbmRDaGlsZChkaXYucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5vcHRpb25zLmNsYXNzZXMuY29udHJvbHN9YCkpO1xuICAgIHRoaXMub3B0aW9ucy5jb250cm9scyA9IFBhZ2luYXRpb24uX2NhY2hlQ29udHJvbHModGhpcy5fZWxlbSwgdGhpcy5vcHRpb25zLmNsYXNzZXMsIHRoaXMub3B0aW9ucy5hdXRvcGxheS5lbmFibGVkKTtcbiAgICB0aGlzLl9zZXRBY3RpdmVTdGF0ZSh0aGlzLm9wdGlvbnMuZGVmYXVsdFNlbGVjdGVkKTtcbiAgICBjb25zdCB7IGF1dG9wbGF5IH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgcGxheWluZ1N0YXR1c0F0U3RhcnQgPSBhdXRvcGxheS5wYXVzZUF0U3RhcnQgPyAncGF1c2VkJyA6ICdydW5uaW5nJztcbiAgICB0aGlzLm9wdGlvbnMuX25vbkhvdmVyUGF1c2VkID0gYXV0b3BsYXkucGF1c2VBdFN0YXJ0O1xuICAgIGlmIChhdXRvcGxheS5lbmFibGVkKSB7XG4gICAgICB0aGlzLl9zZXRQbGF5aW5nU3RhdHVzKHBsYXlpbmdTdGF0dXNBdFN0YXJ0KTtcbiAgICAgIHRoaXMub3B0aW9ucy5jb250cm9scy5jb3VudGRvd24uc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBgJHthdXRvcGxheS5kdXJhdGlvbn1tc2A7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIF9jYWNoZUNvbnRyb2xzKGVsZW1lbnQsIGNsYXNzZXMsIGluY2x1ZGVQbGF5Q29udHJvbHMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGNvbnRyb2xzID0ge307XG4gICAgY29udHJvbHMud3JhcHBlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3Nlcy5jb250cm9sc31gKTtcbiAgICBjb250cm9scy5waXBzID0gW10uc2xpY2UuY2FsbChlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzZXMucGlwfWApKTtcbiAgICBpZiAoaW5jbHVkZVBsYXlDb250cm9scykge1xuICAgICAgY29udHJvbHMucGxheSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3Nlcy5wbGF5fWApO1xuICAgICAgY29udHJvbHMucGF1c2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzZXMucGF1c2V9YCk7XG4gICAgICBjb250cm9scy5jb3VudGRvd24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzZXMucGF1c2VUaW1lckljb25Db3VudGRvd259YCk7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9scztcbiAgfVxuXG4gIC8vIGNvbnZlcnQgdGhlIG5vZGVsaXN0IG9mIHBpcCBlbGVtZW50cyBpbnRvIGFuIGFycmF5IGFuZCByZXR1cm5cbiAgX2dldFBpcHNBcnJheSgpIHtcbiAgICByZXR1cm4gW10uc2xpY2UuY2FsbCh0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RoaXMub3B0aW9ucy5jbGFzc2VzLnBpcH1gKSk7XG4gIH1cblxuICBfc2V0QWN0aXZlU3RhdGUoaW5kZXggPSAwKSB7XG4gICAgdGhpcy5vcHRpb25zLmNvbnRyb2xzLnBpcHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLmNsYXNzZXMucGlwQWN0aXZlKTtcbiAgICBjb25zdCBsaXZlUmVnaW9uVGV4dCA9IFBhZ2luYXRpb24uX3JlcGxhY2VQbGFjZWhvbGRlckxhYmVsVGV4dCh0aGlzLm9wdGlvbnMubGFiZWxzLnNsaWRlQ2hhbmdlZCwgaW5kZXggKyAxKTtcbiAgICB0aGlzLl91cGRhdGVMaXZlUmVnaW9uVGV4dChsaXZlUmVnaW9uVGV4dCk7XG4gIH1cblxuICBzdGF0aWMgX3JlcGxhY2VQbGFjZWhvbGRlckxhYmVsVGV4dChsYWJlbCwgdGV4dFRvSW5zZXJ0ID0gJycpIHtcbiAgICByZXR1cm4gbGFiZWwucmVwbGFjZSgvW1tdXS9nLCB0ZXh0VG9JbnNlcnQpO1xuICB9XG5cbiAgLy8gZmlyZXMgYW4gZXZlbnQgd2l0aCB1cGRhdGUgdGV4dCB3aGljaCB0aGUgaG9zdCBjb21wb25lbnQgY2FuIGNob29zZSB0byBhZGQgdG8gYW4gYXJpYS1saXZlcmVnaW9uXG4gIF91cGRhdGVMaXZlUmVnaW9uVGV4dCh0ZXh0KSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHsgdGV4dCB9O1xuICAgIHRoaXMuX2ZpcmVFdmVudCh0aGlzLm9wdGlvbnMubGl2ZVJlZ2lvblVwZGF0ZSwgcGF5bG9hZCk7XG4gIH1cblxuICBfZ2V0Q3VycmVudEFjdGl2ZVBpcEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5vcHRpb25zLmNsYXNzZXMucGlwQWN0aXZlfWApO1xuICB9XG5cbiAgX2dldEN1cnJlbnRBY3RpdmVQaXBJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0UGlwSW5kZXgodGhpcy5fZ2V0Q3VycmVudEFjdGl2ZVBpcEVsZW1lbnQoKSk7XG4gIH1cblxuICBfZ2V0TmV4dFBpcEluZGV4KHBpcHMsIGN1cnJlbnRQaXBFbGVtZW50KSB7XG4gICAgY29uc3QgcGlwID0gdGhpcy5fZ2V0UGlwSW5kZXgoY3VycmVudFBpcEVsZW1lbnQpICsgMTtcbiAgICByZXR1cm4gcGlwIDwgcGlwcy5sZW5ndGggPyBwaXAgOiAwO1xuICB9XG5cbiAgX2dldFByZXZpb3VzUGlwSW5kZXgocGlwcywgY3VycmVudFBpcEVsZW1lbnQpIHtcbiAgICBjb25zdCBwaXAgPSB0aGlzLl9nZXRQaXBJbmRleChjdXJyZW50UGlwRWxlbWVudCkgLSAxO1xuICAgIHJldHVybiBwaXAgPCAwID8gcGlwcy5sZW5ndGggLSAxIDogcGlwO1xuICB9XG5cbiAgX2dldFBpcEluZGV4KHBpcEVsZW1lbnQpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQocGlwRWxlbWVudC5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLl9waXBJbmRleEF0dHJpYnV0ZSksIDEwKTsgLy8gYWNjZXB0IERPTSBlbGVtZW50IG9mIHBpcCwgcmV0dXJuIGluZGV4XG4gIH1cblxuICBfZ2V0cGF1c2VJY29uQ291bnRkb3duRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLm9wdGlvbnMuY2xhc3Nlcy5wYXVzZVRpbWVySWNvbkNvdW50ZG93bn1gKTsgLy8gcmV0dXJuIHRoZSBhbmltYXRlZCBjb3VudGRvd24gRE9NIGVsZW1lbnRcbiAgfVxuXG4gIF9yZXN0YXJ0QW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLl9lbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1wbGF5aW5nJykgIT09ICd0cnVlJykgeyByZXR1cm47IH1cbiAgICBjb25zdCB7IGF1dG9wbGF5IH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgeyBjb3VudGRvd24sIHBhdXNlIH0gPSB0aGlzLm9wdGlvbnMuY29udHJvbHM7XG4gICAgY29uc3QgZGVsYXkgPSBhdXRvcGxheS5lbmFibGVkID8gYXV0b3BsYXkuZGVsYXkgOiAwO1xuICAgIGNvbnN0IHN0cm9rZURhc2hPZmZzZXRNaW4gPSAnMXB4JztcbiAgICBjb25zdCBzdHJva2VEYXNoT2Zmc2V0TWF4ID0gJzEyMnB4JztcblxuICAgIGNvbnN0IGFuaW1hdGlvbkNvbXBsZXRlID0gKCkgPT4gZXZlbnRUcmlnZ2VyKHBhdXNlLCB0aGlzLm9wdGlvbnMuZXZlbnRzLmNvdW50ZG93bkVuZCk7XG4gICAgY29uc3QgYW5pbWF0ZUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBrZXlmcmFtZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBzdHJva2VEYXNoT2Zmc2V0TWluLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogc3Ryb2tlRGFzaE9mZnNldE1heCxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIG9mZnNldDogMC45OSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IHN0cm9rZURhc2hPZmZzZXRNYXgsXG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgICBjb25zdCB0aW1pbmcgPSB7XG4gICAgICAgIGR1cmF0aW9uOiBhdXRvcGxheS5kdXJhdGlvbixcbiAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgZmlsbDogJ2ZvcndhcmRzJyxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMub3B0aW9ucy5jb250cm9scy5jb3VudGRvd25UcmFuc2l0aW9uID0gY291bnRkb3duLmFuaW1hdGUoa2V5ZnJhbWVzLCB0aW1pbmcpO1xuICAgICAgdGhpcy5vcHRpb25zLmNvbnRyb2xzLmNvdW50ZG93blRyYW5zaXRpb24ucGF1c2UoKTtcbiAgICAgIHRoaXMub3B0aW9ucy5jb250cm9scy5jb3VudGRvd25UcmFuc2l0aW9uLm9uZmluaXNoID0gKCkgPT4ge1xuICAgICAgICBjb3VudGRvd24uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMub3B0aW9ucy5jb250cm9scy5jb3VudGRvd25UcmFuc2l0aW9uID0gbnVsbDtcbiAgICAgICAgYW5pbWF0aW9uQ29tcGxldGUoKTtcbiAgICAgIH07XG4gICAgICB0aGlzLm9wdGlvbnMuY29udHJvbHMuY291bnRkb3duVHJhbnNpdGlvbi5wbGF5KCk7XG4gICAgfTtcbiAgICBjb25zdCBmYWRlRWxlbWVudEluID0gKCkgPT4ge1xuICAgICAgY291bnRkb3duLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBzdHJva2VEYXNoT2Zmc2V0TWluO1xuICAgICAgY291bnRkb3duLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250cm9scy5jb3VudGRvd25UcmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5jb250cm9scy5jb3VudGRvd25UcmFuc2l0aW9uLnBsYXkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuaW1hdGVFbGVtZW50KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGZhZGVFbGVtZW50SW4oKSwgZGVsYXkpO1xuICB9XG5cbiAgLy8gSGFuZGxlcyBjbGljay9hbmltYXRpb25lbmQgZXZlbnRzIGZpcmVkIG9uIHBpcHNcbiAgX3BpcEV2ZW50SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWN0aXZlQ2xhc3MgPSB0aGlzLm9wdGlvbnMuY2xhc3Nlcy5waXBBY3RpdmU7XG4gICAgY29uc3QgeyBwaXBzLCBjb3VudGRvd24gfSA9IHRoaXMub3B0aW9ucy5jb250cm9scztcblxuICAgIGNvbnN0IGFjdGl2ZVBpcCA9IHRoaXMuX2dldEN1cnJlbnRBY3RpdmVQaXBFbGVtZW50KCk7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gZXZlbnQudHlwZTtcbiAgICBjb25zdCB0YXJnZXRQaXAgPSBldmVudFR5cGUgPT09ICdjbGljaycgPyBldmVudC50YXJnZXQgOiBwaXBzW3RoaXMuX2dldE5leHRQaXBJbmRleChwaXBzLCBhY3RpdmVQaXApXTtcbiAgICBjb25zdCB0YXJnZXRQaXBJbmRleCA9IHRoaXMuX2dldFBpcEluZGV4KHRhcmdldFBpcCk7XG4gICAgaWYgKHRhcmdldFBpcCA9PT0gYWN0aXZlUGlwKSB7IHJldHVybjsgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udHJvbHMuY291bnRkb3duVHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5vcHRpb25zLmNvbnRyb2xzLmNvdW50ZG93blRyYW5zaXRpb24ucGF1c2UoKTtcbiAgICAgIHRoaXMub3B0aW9ucy5jb250cm9scy5jb3VudGRvd25UcmFuc2l0aW9uID0gbnVsbDtcbiAgICAgIGNvdW50ZG93bi5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gJzEyMnB4JztcbiAgICB9XG5cbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgZXZlbnRUeXBlLFxuICAgICAgcGlwc0FycmF5OiBwaXBzLFxuICAgICAgcGlwRnJvbTogdGhpcy5fZ2V0UGlwSW5kZXgoYWN0aXZlUGlwKSxcbiAgICAgIHBpcFRvOiB0aGlzLl9nZXRQaXBJbmRleCh0YXJnZXRQaXApXG4gICAgfTtcblxuICAgIGlmIChldmVudFR5cGUgPT09IHRoaXMub3B0aW9ucy5ldmVudHMuY291bnRkb3duRW5kICYmIHRhcmdldFBpcEluZGV4ID09PSAwICYmICF0aGlzLm9wdGlvbnMubG9vcCkge1xuICAgICAgdGhpcy5fZmlyZUV2ZW50KHRoaXMub3B0aW9ucy5ldmVudHMubG9vcEVuZCwgcGF5bG9hZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZmlyZUV2ZW50KHRoaXMub3B0aW9ucy5ldmVudHMuYmVmb3JlQ2hhbmdlLCBwYXlsb2FkKTtcbiAgICBwaXBzLmZvckVhY2goKHBpcCkgPT4ge1xuICAgICAgcGlwLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xuICAgIH0pO1xuICAgIHRoaXMuX3NldEFjdGl2ZVN0YXRlKHRoaXMuX2dldFBpcEluZGV4KHRhcmdldFBpcCkpO1xuXG4gICAgdGhpcy5fcmVzdGFydEFuaW1hdGlvbigpO1xuICAgIHRoaXMuX2ZpcmVFdmVudCh0aGlzLm9wdGlvbnMuZXZlbnRzLmFmdGVyQ2hhbmdlLCBwYXlsb2FkKTtcbiAgfVxuXG4gIF9yZXN1bWVUaW1lckFuaW1hdGlvbihjb250cm9sLCBldmVudCkge1xuICAgIGlmIChldmVudCA9PT0gJ2hvdmVyJyAmJiB0aGlzLm9wdGlvbnMuX25vbkhvdmVyUGF1c2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxpdmVSZWdpb25UZXh0ID0gdGhpcy5vcHRpb25zLmxhYmVscy5wbGF5aW5nO1xuICAgIHRoaXMuX3VwZGF0ZUxpdmVSZWdpb25UZXh0KGxpdmVSZWdpb25UZXh0KTtcbiAgICB0aGlzLm9wdGlvbnMuX25vbkhvdmVyUGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5fc2V0UGxheWluZ1N0YXR1cyhjb250cm9sLCBldmVudCk7XG4gICAgdGhpcy5fcmVzdGFydEFuaW1hdGlvbihldmVudCk7XG4gIH1cblxuICBfcGF1c2VUaW1lckFuaW1hdGlvbihjb250cm9sLCBldmVudCkge1xuICAgIGlmIChldmVudCAhPT0gJ2hvdmVyJykge1xuICAgICAgdGhpcy5vcHRpb25zLl9ub25Ib3ZlclBhdXNlZCA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGxpdmVSZWdpb25UZXh0ID0gdGhpcy5vcHRpb25zLmxhYmVscy5wYXVzZWQ7XG4gICAgdGhpcy5fdXBkYXRlTGl2ZVJlZ2lvblRleHQobGl2ZVJlZ2lvblRleHQpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udHJvbHMuY291bnRkb3duVHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5vcHRpb25zLmNvbnRyb2xzLmNvdW50ZG93blRyYW5zaXRpb24ucGF1c2UoKTtcbiAgICB9XG4gICAgdGhpcy5fc2V0UGxheWluZ1N0YXR1cyhjb250cm9sLCBldmVudCk7XG4gIH1cblxuICBfYWRkUGFnaW5hdGlvbkV2ZW50cygpIHtcbiAgICBjb25zdCB7XG4gICAgICBwaXBzLFxuICAgICAgcGxheSxcbiAgICAgIHBhdXNlLFxuICAgICAgY291bnRkb3duXG4gICAgfSA9IHRoaXMub3B0aW9ucy5jb250cm9scztcblxuICAgIHBpcHMuZm9yRWFjaChwaXAgPT4gcGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5fcGlwRXZlbnRIYW5kbGVyKGV2ZW50KSwgZmFsc2UpKTsgLy8gcGlwIGNsaWNrIGhhbmRsZXJcbiAgICBpZiAocGxheSAmJiBwYXVzZSAmJiBjb3VudGRvd24pIHtcbiAgICAgIHBhdXNlLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5vcHRpb25zLmV2ZW50cy5jb3VudGRvd25FbmQsIGV2ZW50ID0+IHRoaXMuX3BpcEV2ZW50SGFuZGxlcihldmVudCksIGZhbHNlKTtcbiAgICAgIHBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLl9yZXN1bWVUaW1lckFuaW1hdGlvbigncnVubmluZycsIGV2ZW50KSwgZmFsc2UpO1xuICAgICAgcGF1c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLl9wYXVzZVRpbWVyQW5pbWF0aW9uKCdwYXVzZWQnLCBldmVudCksIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvLyB0cmlnZ2VyIGN1c3RvbSBldmVudCB3aXRoIG9wdGlvbmFsIHBheWxvYWQgdGhhdCBvdXIgY29tcG9uZW50IChhbmQgb3RoZXJzKSBjYW4gc3Vic2NyaWJlIHRvXG4gIF9maXJlRXZlbnQoZXZlbnRUeXBlLCBwYXlsb2FkID0ge30pIHtcbiAgICBldmVudFRyaWdnZXIodGhpcy5fZWxlbSwgZXZlbnRUeXBlLCBwYXlsb2FkKTtcbiAgfVxuXG4gIF9nZXRQbGF5aW5nU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLl9wbGF5aW5nU3RhdHVzO1xuICB9XG5cbiAgLy8gYWNjZXB0cyBzdGF0dXMgb2YgcGF1c2VkIG9yIHJ1bm5pbmdhbmQgdXBkYXRlcyBwbGF5aW5nIHN0YXR1cyBvZiBhbmltYXRpb25cbiAgX3NldFBsYXlpbmdTdGF0dXMoc3RhdHVzID0gJ3BhdXNlZCcsIGV2ZW50ID0gbnVsbCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBsYXksXG4gICAgICBwYXVzZSxcbiAgICAgIGNvdW50ZG93blxuICAgIH0gPSB0aGlzLm9wdGlvbnMuY29udHJvbHM7XG4gICAgdGhpcy5fcGxheWluZ1N0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLl9lbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1wbGF5aW5nJywgc3RhdHVzID09PSAncGF1c2VkJyA/ICdmYWxzZScgOiAndHJ1ZScpO1xuICAgIGlmIChwbGF5ICYmIHBhdXNlICYmIHN0YXR1cyA9PT0gJ3BhdXNlZCcpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZUZvY3VzKHBhdXNlLCBwbGF5LCBldmVudCk7XG4gICAgICBQYWdpbmF0aW9uLl9zaG93Q29udHJvbChwbGF5KTtcbiAgICAgIFBhZ2luYXRpb24uX2hpZGVDb250cm9sKHBhdXNlKTtcbiAgICAgIGNvdW50ZG93bi5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSAncGF1c2VkJztcbiAgICAgIHRoaXMuX2ZpcmVFdmVudCh0aGlzLm9wdGlvbnMuZXZlbnRzLnBhdXNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdG9nZ2xlRm9jdXMocGxheSwgcGF1c2UsIGV2ZW50KTtcbiAgICAgIFBhZ2luYXRpb24uX2hpZGVDb250cm9sKHBsYXkpO1xuICAgICAgUGFnaW5hdGlvbi5fc2hvd0NvbnRyb2wocGF1c2UpO1xuICAgICAgY291bnRkb3duLnN0eWxlLmFuaW1hdGlvblBsYXlTdGF0ZSA9ICdydW5uaW5nJztcbiAgICAgIHRoaXMuX2ZpcmVFdmVudCh0aGlzLm9wdGlvbnMuZXZlbnRzLnBsYXkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhhbmRsZSBmb2N1cyBmb3Igd2hpY2hldmVyIGNvbnRyb2wgaXMgc2hvd2luZ1xuICBfdG9nZ2xlRm9jdXMoZWxlbWVudEZyb20sIGVsZW1lbnRUbywgZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5fYWxsb3dGb2N1c1RvZ2dsZSB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBlbGVtZW50RnJvbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZGV0YWlsID09PSAwKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgZWxlbWVudFRvLmZvY3VzKCk7IH0sIDUwKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgX3Nob3dDb250cm9sKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgfVxuXG4gIHN0YXRpYyBfaGlkZUNvbnRyb2woZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gIH1cblxuICBfcGxheUNvbnRyb2xJY29uU1ZHKCkge1xuICAgIHJldHVybiBgXG4gICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmNsYXNzZXMucGxheUNvbnRyb2xJY29ufVwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDE0LjIgMjBcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQuMiAyMDtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgIDxnPjxwYXRoIGQ9XCJNMCwwdjIwbDE0LjItMTBMMCwweiBNMS43LDMuMmw5LjYsNi43bC05LjYsNi44VjMuMnpcIi8+PC9nPjwvc3ZnPlxuICAgIGA7XG4gIH1cblxuICBfcGF1c2VDb250cm9sSWNvblNWRygpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmNsYXNzZXMucGF1c2VDb250cm9sSWNvbn1cIiB3aWR0aD1cIjEwcHhcIiBoZWlnaHQ9XCIxNnB4XCIgdmlld0JveD1cIjAgMCAxMCAxNlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCI+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NzMuMDAwMDAwLCAtMjk5LjAwMDAwMClcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCI+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDczLjAwMDAwMCwgMjk5LjAwMDAwMClcIj48cG9seWdvbiBwb2ludHM9XCIwIDAgMiAwIDIgMTYgMCAxNlwiPjwvcG9seWdvbj48cG9seWdvbiBwb2ludHM9XCI4IDAgMTAgMCAxMCAxNiA4IDE2XCI+PC9wb2x5Z29uPjwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ZnPmA7XG4gIH1cblxuICAvLyBwdWJsaWMgbWV0aG9kcywgdG8gY2FsbCBmcm9tIGNvbXBvbmVudCB1c2UgZWxlbWVudC5QYWdpbmF0aW9uKCdmdW5jdGlvbiBuYW1lIGFzIHN0cmluZycsIG9wdGlvbmFsUGFyYW1zKTtcbiAgcGF1c2Uob25Ib3ZlciA9IGZhbHNlKSB7XG4gICAgY29uc3QgeyBwYXVzZSB9ID0gdGhpcy5vcHRpb25zLmNvbnRyb2xzO1xuICAgIGlmICghcGF1c2UpIHsgcmV0dXJuOyB9XG4gICAgY29uc3QgcGF1c2VkT25Ib3ZlciA9IG9uSG92ZXIgPyAnaG92ZXInIDogZmFsc2U7XG4gICAgdGhpcy5fcGF1c2VUaW1lckFuaW1hdGlvbigncGF1c2VkJywgcGF1c2VkT25Ib3Zlcik7XG4gIH1cblxuICBwbGF5KG9uSG92ZXIgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgcGxheSB9ID0gdGhpcy5vcHRpb25zLmNvbnRyb2xzO1xuICAgIGlmICghcGxheSkgeyByZXR1cm47IH1cbiAgICBjb25zdCByZXN1bWVkT25Ib3ZlciA9IG9uSG92ZXIgPyAnaG92ZXInIDogZmFsc2U7XG4gICAgdGhpcy5fcmVzdW1lVGltZXJBbmltYXRpb24oJ3J1bm5pbmcnLCByZXN1bWVkT25Ib3Zlcik7XG4gIH1cblxuICBnZXRQbGF5aW5nU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRQbGF5aW5nU3RhdHVzKCk7XG4gIH1cblxuICBnb1RvUGlwKGluZGV4KSB7XG4gICAgY29uc3QgcGlwID0gdGhpcy5vcHRpb25zLmNvbnRyb2xzLnBpcHNbaW5kZXhdO1xuICAgIGlmICghcGlwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBpcC5jbGljaygpO1xuICB9XG5cbiAgcHJldmlvdXNQaXAoKSB7XG4gICAgY29uc3QgeyBwaXBzIH0gPSB0aGlzLm9wdGlvbnMuY29udHJvbHM7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuX2dldEN1cnJlbnRBY3RpdmVQaXBFbGVtZW50KCk7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5fZ2V0UGlwSW5kZXgoY3VycmVudCk7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMubG9vcCAmJiBjdXJyZW50SW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJldmlvdXMgPSBwaXBzW3RoaXMuX2dldFByZXZpb3VzUGlwSW5kZXgocGlwcywgY3VycmVudCldO1xuICAgIHRoaXMuX2ZpcmVFdmVudCh0aGlzLm9wdGlvbnMuZXZlbnRzLmdvdG9QcmV2aW91cyk7XG4gICAgcHJldmlvdXMuY2xpY2soKTtcbiAgfVxuXG4gIG5leHRQaXAoKSB7XG4gICAgY29uc3QgeyBwaXBzIH0gPSB0aGlzLm9wdGlvbnMuY29udHJvbHM7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuX2dldEN1cnJlbnRBY3RpdmVQaXBFbGVtZW50KCk7XG4gICAgY29uc3QgbmV4dCA9IHBpcHNbdGhpcy5fZ2V0TmV4dFBpcEluZGV4KHBpcHMsIGN1cnJlbnQpXTtcbiAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLl9nZXRQaXBJbmRleChuZXh0KTtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5sb29wICYmIG5leHRJbmRleCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9maXJlRXZlbnQodGhpcy5vcHRpb25zLmV2ZW50cy5nb3RvTmV4dCk7XG4gICAgbmV4dC5jbGljaygpO1xuICB9XG5cbiAgZ2V0Q3VycmVudFBpcEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRDdXJyZW50QWN0aXZlUGlwSW5kZXgoKTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2ZVBpcEJ5SW5kZXgobmV3QWN0aXZlUGlwSW5kZXgpIHtcbiAgICBjb25zdCB7IHBpcHMgfSA9IHRoaXMub3B0aW9ucy5jb250cm9scztcbiAgICBjb25zdCBhY3RpdmVDbGFzcyA9IHRoaXMub3B0aW9ucy5jbGFzc2VzLnBpcEFjdGl2ZTtcbiAgICBwaXBzLmZvckVhY2gocGlwID0+IHBpcC5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKSk7XG4gICAgdGhpcy5fc2V0QWN0aXZlU3RhdGUobmV3QWN0aXZlUGlwSW5kZXgpO1xuICB9XG5cbiAgZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICB9XG5cbiAgZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgeyBjb250cm9scyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChjb250cm9scyAmJiBjb250cm9scy53cmFwcGVyKSB7XG4gICAgICBjb250cm9scy53cmFwcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udHJvbHMud3JhcHBlcik7XG4gICAgfVxuICB9XG5cbiAgUGFnaW5hdGlvbihtZXRob2QsIG9wdGlvbnMgPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBmbiA9IHRoaXNbbWV0aG9kXTtcbiAgICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nID8gZm4uYmluZCh0aGlzLCBvcHRpb25zKSgpIDogdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKiBnbG9iYWwgalF1ZXJ5ICovXG5pbXBvcnQgeyBpc0JyZWFrcG9pbnRTbWFsbCwgaXNCcmVha3BvaW50TWVkaXVtIH0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL2Rldi9qcy91dGlscy9icm93c2VyRGV0ZWN0aW9uJztcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL2Rldi9qcy91dGlscy9pbmRleCc7XG5pbXBvcnQgRHhUYWJzIGZyb20gJy4uLy4uL0R4VGFicy9lczYvRHhUYWJzJztcbmltcG9ydCBEeENhcm91c2VsIGZyb20gJy4uLy4uL0R4Q2Fyb3VzZWwvanMvY2xhc3Nlcy9EeENhcm91c2VsLW1haW4nO1xuaW1wb3J0IEhlcm9TbGlkZVRlbXBsYXRlIGZyb20gJy4uLy4uL0hlcm9TbGlkZVRlbXBsYXRlL2VzNi8vY2xhc3Nlcy9IZXJvU2xpZGVUZW1wbGF0ZS1tYWluJztcblxuLyoqXG4gKlxuICogQSBjb250YWluZXIgaG9sZGluZyBvdGhlciBjb21wb25lbnRzIHdpdGggYSB0YWJiZWQgbmF2aWdhdGlvblxuICogSW1wb3J0cyBnbG9iYWwgRHhUYWJzIGNvbXBvbmVudCB0byBoYW5kbGUgdGFiIHN3aXRjaGluZy9zdHlsaW5nXG4gKlxuICogTFJEWCAtIFRhYmJlZENvbnRhaW5lclxuICogQG1vZHVsZSBMUkRYLkNvbXBvbmVudHMuVGFiYmVkQ29udGFpbmVyXG4gKi9cblxuLyohXG4gKiBUYWJiZWRDb250YWluZXJcbiAqIENvcHlyaWdodCAyMDE5OiBDb25uZWN0IEdyb3VwLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbigoJCwgd2luZG93KSA9PiB7XG4gIGNvbnN0IFRhYmJlZENvbnRhaW5lciA9IHtcbiAgICBfZGVmYXVsdHM6IHt9LFxuICAgIF90b3RhbDogMCxcbiAgICBfc2VsZWN0ZWRUYWI6IG51bGwsXG4gICAgX3NlbGVjdGVkSW5kZXg6IDAsXG4gICAgX2R4VGFiczogbnVsbCxcbiAgICBkZXN0cm95ZWQ6IG51bGwsXG5cbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5fdG90YWwgPSBwYXJzZUludCh0aGlzLiRlbGVtZW50LmRhdGEoJ3RvdGFsJyksIDEwKTtcbiAgICAgIHRoaXMuaW5pdER4VGFicygpO1xuICAgICAgY29uc3QgdGhyb3R0bGVSZXNpemUgPSB0aHJvdHRsZSh0aGlzLl9yZXNpemVDb21wb25lbnQuYmluZCh0aGlzKSwgMjUwLCB0aGlzKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB0aHJvdHRsZVJlc2l6ZSh0aGlzLmVsZW1lbnQpKTtcbiAgICAgIHRoaXMuX3Jlc2l6ZUNvbXBvbmVudCgpO1xuICAgICAgdGhpcy5EeENhcm91c2VsID0gbnVsbDtcbiAgICAgIHRoaXMuSGVyb1NsaWRlVGVtcGxhdGUgPSBudWxsO1xuICAgICAgdGhpcy5fbm9uSnF1ZXJ5Q29tcG9uZW50cyA9IFsnRHhDYXJvdXNlbCcsICdIZXJvU2xpZGVUZW1wbGF0ZSddO1xuICAgIH0sXG5cbiAgICBpbml0RHhUYWJzKCkge1xuICAgICAgdGhpcy5fZHhUYWJzRWxlbWVudCA9IHRoaXMuJGVsZW1lbnQuZ2V0KDApLnF1ZXJ5U2VsZWN0b3IoJy5EeFRhYnMnKTtcbiAgICAgIHRoaXMuX2R4VGFic0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRHhUYWJzOmluaXQnLCAoKSA9PiB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2NvbnRhaW5lckluaXQnKSwgZmFsc2UpO1xuICAgICAgdGhpcy5fZHhUYWJzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdEeFRhYnM6ZmFkZW91dCcsIGV2ZW50ID0+IHRoaXMuX2Rlc3Ryb3lQcmV2aW91c1RhYihldmVudC5kZXRhaWwpLCBmYWxzZSk7XG4gICAgICB0aGlzLl9keFRhYnNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0R4VGFiczpiZWZvcmVmYWRlaW4nLCBldmVudCA9PiB0aGlzLl9pbml0aWFsaXplU2VsZWN0ZWRUYWIoZXZlbnQuZGV0YWlsKSwgZmFsc2UpO1xuICAgICAgdGhpcy5fZHhUYWJzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdEeFRhYnM6cmVzaXplZCcsICgpID0+IHRoaXMuX3Bvc2l0aW9uVGFicygpLCBmYWxzZSk7XG4gICAgICB0aGlzLl9keFRhYnNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0R4VGFiczpzaW5nbGV0YWInLCBldmVudCA9PiB0aGlzLl9pbml0aWFsaXplU2VsZWN0ZWRUYWIoZXZlbnQuZGV0YWlsKSwgZmFsc2UpO1xuXG4gICAgICB0aGlzLl9keFRhYnMgPSBuZXcgRHhUYWJzKHRoaXMuX2R4VGFic0VsZW1lbnQsIHsgaW5pdGlhbFRhYjogdGhpcy5fc2VsZWN0ZWRJbmRleCB9KTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uVGFicygpO1xuICAgIH0sXG5cbiAgICBfcG9zaXRpb25UYWJzKCkge1xuICAgICAgaWYgKCFpc0JyZWFrcG9pbnRNZWRpdW0oKSAmJiAhaXNCcmVha3BvaW50U21hbGwoKSkge1xuICAgICAgICB0aGlzLl9keFRhYnNFbGVtZW50LnN0eWxlLnRvcCA9ICcnO1xuICAgICAgICB0aGlzLiRlbGVtZW50LmNzcygnbWFyZ2luLXRvcCcsICcnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0YWJsaXN0ID0gdGhpcy5fZHhUYWJzRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cInRhYmxpc3RcIl0nKTtcbiAgICAgIGNvbnN0IHRhYmxpc3RQYWRUb3AgPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhYmxpc3QpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJykpO1xuICAgICAgY29uc3QgdGFiID0gdGhpcy5fZHhUYWJzRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cInRhYmxpc3RcIl0gW3JvbGU9XCJ0YWJcIl0nKTtcbiAgICAgIGNvbnN0IHRhYkhlaWdodCA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFiKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSk7XG5cbiAgICAgIHRoaXMuX2R4VGFic0VsZW1lbnQuc3R5bGUudG9wID0gYC0ke3RhYkhlaWdodCArIHRhYmxpc3RQYWRUb3B9cHhgO1xuICAgICAgdGhpcy4kZWxlbWVudC5jc3MoJ21hcmdpbi10b3AnLCB0YWJIZWlnaHQpO1xuICAgIH0sXG5cbiAgICBfaW5pdGlhbGl6ZVNlbGVjdGVkVGFiKHBheWxvYWQpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkVGFiID0gcGF5bG9hZC5zZWxlY3RlZFBhbmVsO1xuXG4gICAgICBjb25zdCBjb21wb25lbnRUeXBlID0gdGhpcy5fc2VsZWN0ZWRUYWIuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbXBvbmVudCcpO1xuICAgICAgY29uc3QgY29tcG9uZW50RWxlbWVudCA9IFsuLi50aGlzLl9zZWxlY3RlZFRhYi5jaGlsZHJlbl1bMF07XG4gICAgICBjb25zdCBpc0NvbXBvbmVudE5vbkpxdWVyeUJhc2VkID0gdGhpcy5fbm9uSnF1ZXJ5Q29tcG9uZW50cy5pbmNsdWRlcyhjb21wb25lbnRUeXBlKTtcblxuICAgICAgaWYgKCFpc0NvbXBvbmVudE5vbkpxdWVyeUJhc2VkKSB7XG4gICAgICAgIGlmICghJCgpW2NvbXBvbmVudFR5cGVdKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcigndGFiQ2hhbmdlZCcpO1xuXG4gICAgICBpZiAoaXNDb21wb25lbnROb25KcXVlcnlCYXNlZCkge1xuICAgICAgICBpZiAoY29tcG9uZW50VHlwZSA9PT0gJ0R4Q2Fyb3VzZWwnKSB7XG4gICAgICAgICAgdGhpcy5EeENhcm91c2VsID0gbmV3IER4Q2Fyb3VzZWwoY29tcG9uZW50RWxlbWVudCk7XG4gICAgICAgICAgY29uc3QgSGVyb1NsaWRlcyA9IGNvbXBvbmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkhlcm9TbGlkZScpO1xuXG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChIZXJvU2xpZGVzLCBlbCA9PiBuZXcgSGVyb1NsaWRlVGVtcGxhdGUoZWwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wb25lbnRUeXBlID09PSAnSGVyb1NsaWRlVGVtcGxhdGUnKSB7XG4gICAgICAgICAgdGhpcy5IZXJvU2xpZGVUZW1wbGF0ZSA9IG5ldyBIZXJvU2xpZGVUZW1wbGF0ZShjb21wb25lbnRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChjb21wb25lbnRFbGVtZW50KVtjb21wb25lbnRUeXBlXSgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy4kZWxlbWVudC5hdHRyKCdjbGFzcycpLnNwbGl0KC9cXHMrLyk7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2xhc3Nlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBpZiAoY2xhc3Nlc1tpXS5pbmRleE9mKCdhY3RpdmVfJykgPiAtMSkge1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoY2xhc3Nlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoYGFjdGl2ZV8ke2NvbXBvbmVudFR5cGV9YCk7XG4gICAgICB0aGlzLl9hY3RpdmVUYWIgPSBjb21wb25lbnRUeXBlO1xuXG4gICAgICBpZiAoIWlzQnJlYWtwb2ludE1lZGl1bSgpICYmICFpc0JyZWFrcG9pbnRTbWFsbCgpICYmICF0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCQodGhpcy5fc2VsZWN0ZWRUYWIpLmhlaWdodCgpKSwgMTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCcnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2Rlc3Ryb3lQcmV2aW91c1RhYihwYXlsb2FkKSB7XG4gICAgICBjb25zdCBjb21wb25lbnRFbGVtZW50ID0gWy4uLnBheWxvYWQucHJldmlvdXNQYW5lbC5jaGlsZHJlbl1bMF07XG4gICAgICBjb25zdCBjb21wb25lbnRUeXBlID0gcGF5bG9hZC5wcmV2aW91c1BhbmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb21wb25lbnQnKTtcblxuICAgICAgaWYgKGNvbXBvbmVudFR5cGUgPT09ICdEeENhcm91c2VsJykge1xuICAgICAgICB0aGlzLkR4Q2Fyb3VzZWwuZGVzdHJveSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChjb21wb25lbnRUeXBlID09PSAnSGVyb1NsaWRlVGVtcGxhdGUnKSByZXR1cm47XG5cbiAgICAgICQoY29tcG9uZW50RWxlbWVudClbY29tcG9uZW50VHlwZV0oJ2Rlc3Ryb3knKTtcbiAgICB9LFxuXG4gICAgX3Jlc2l6ZUNvbXBvbmVudCgpIHtcbiAgICAgIGNvbnN0IGlzTW9iaWxlID0gaXNCcmVha3BvaW50U21hbGwoKTtcbiAgICAgIGNvbnN0IGlzVGFibGV0ID0gaXNCcmVha3BvaW50TWVkaXVtKCk7XG4gICAgICBjb25zdCBpc0Rlc2t0b3AgPSAhaXNNb2JpbGUgJiYgIWlzVGFibGV0O1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkVGFiKSB7XG4gICAgICAgIGlmIChpc0Rlc2t0b3AgJiYgIXRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LmhlaWdodCgkKHRoaXMuX3NlbGVjdGVkVGFiKS5oZWlnaHQoKSk7XG4gICAgICAgICAgfSwgNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGp1c3RUYWJiZWRDb250YWluZXJIZWlnaHQoKSB7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgLy8gYWRkaW5nIHlvdXR1YmUgdG8gRkZDIGNhdXNlcyBpdCB0byBiZWhhdmUgZGlmZmVyZW50bHkgYW5kIGJyZWFrcyB0aGUgc2l6aW5nLCB0aGlzIGlzIGEgdGVtcG9yYXJ5IGZpeCB1bnRpbCBGRkMgaXMgcmVmYWN0b3JlZFxuICAgICAgICBjb25zdCBmZmNFeGNlcHRpb24gPSB0aGlzLl9zZWxlY3RlZFRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29tcG9uZW50JykgPT09ICdGdWxsRnJhbWVDYXJvdXNlbCcgJiYgdGhpcy5fc2VsZWN0ZWRUYWIucXVlcnlTZWxlY3RvcignLkZ1bGxGcmFtZUNhcm91c2VsJykuY2xhc3NMaXN0LmNvbnRhaW5zKCd5b3V0dWJlcHJlc2VudCcpO1xuICAgICAgICBpZiAoZmZjRXhjZXB0aW9uICYmICFpc0JyZWFrcG9pbnRTbWFsbCgpICYmICF0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgIGNvbnN0IHRhYkhlaWdodCA9ICQodGhpcy5fc2VsZWN0ZWRUYWIpLmhlaWdodCgpO1xuICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzVGFiSGVpZ2h0ICYmIHRhYkhlaWdodCA9PT0gdGhpcy5wcmV2aW91c1RhYkhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLiRlbGVtZW50LmhlaWdodCgkKHRoaXMuX3NlbGVjdGVkVGFiKS5oZWlnaHQoKSk7XG4gICAgICAgICAgdGhpcy5wcmV2aW91c1RhYkhlaWdodCA9IHRhYkhlaWdodDtcbiAgICAgICAgfSBlbHNlIGlmICghZmZjRXhjZXB0aW9uICYmICFpc0JyZWFrcG9pbnRTbWFsbCgpICYmICFpc0JyZWFrcG9pbnRNZWRpdW0oKSAmJiAhdGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LmhlaWdodCgkKHRoaXMuX3NlbGVjdGVkVGFiKS5oZWlnaHQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kZWxlbWVudC5oZWlnaHQoJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICBjb25zdCBwYW5lbHMgPSB0aGlzLl9keFRhYnMuRHhUYWJzKCdnZXRQYW5lbHMnKTtcbiAgICAgIHBhbmVscy5mb3JFYWNoKChwYW5lbCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcGFuZWw7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVTZWxlY3RlZFRhYih7IHNlbGVjdGVkUGFuZWw6IGVsZW1lbnQgfSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zZWxlY3RlZFRhYiA9IG51bGw7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9XG4gIH07XG5cbiAgalF1ZXJ5LmNyZWF0ZUNvbXBvbmVudCgnVGFiYmVkQ29udGFpbmVyJywgVGFiYmVkQ29udGFpbmVyKTtcbn0pKGpRdWVyeSwgd2luZG93KTtcblxuJCgnLlRhYmJlZENvbnRhaW5lcicpLlRhYmJlZENvbnRhaW5lcigpO1xuIiwiZXhwb3J0IGNvbnN0IEtleUNvZGUgPSB7XG4gIEJBQ0tTUEFDRTogOCxcbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIEVORDogMzUsXG4gIEVTQzogMjcsXG4gIEhPTUU6IDM2LFxuICBMRUZUOiAzNyxcbiAgUEFHRV9ET1dOOiAzNCxcbiAgUEFHRV9VUDogMzMsXG4gIFJFVFVSTjogMTMsXG4gIFJJR0hUOiAzOSxcbiAgU1BBQ0U6IDMyLFxuICBUQUI6IDksXG4gIFVQOiAzOFxufTtcbiIsImV4cG9ydCBjb25zdCBicmVha3BvaW50cyA9IHtcbiAgc21hbGw6IDc0MCxcbiAgbWVkaXVtOiA5MDAsXG4gIHdpZGVyOiAxMDAwLFxuICBjdXJyZW50OiBudWxsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGV2aWNlT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0ICR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gIHJldHVybiAkd2luZG93LndpZHRoKCkgPiAkd2luZG93LmhlaWdodCgpID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xufTtcblxuY29uc3QgZ2V0TGFyZ2VyQnJlYWtwb2ludCA9IHdpZHRoID0+IChcbiAgd2lkdGggPD0gYnJlYWtwb2ludHMubWVkaXVtID8gJ21lZGl1bScgOiAnbGFyZ2UnXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QnJlYWtwb2ludFNpemUgPSAob2xkQ2FsYyA9IHRydWUpID0+IHtcbiAgY29uc3Qgd2lkdGggPSBvbGRDYWxjID8gJCh3aW5kb3cpLndpZHRoKCkgOiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgcmV0dXJuICh3aWR0aCA8PSBicmVha3BvaW50cy5zbWFsbCkgPyAnc21hbGwnIDogZ2V0TGFyZ2VyQnJlYWtwb2ludCh3aWR0aCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNCcmVha3BvaW50U21hbGwgPSAob2xkQ2FsYyA9IHRydWUpID0+IHtcbiAgcmV0dXJuIGdldEJyZWFrcG9pbnRTaXplKG9sZENhbGMpID09PSAnc21hbGwnO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzQnJlYWtwb2ludE1lZGl1bSA9IChvbGRDYWxjID0gdHJ1ZSkgPT4ge1xuICByZXR1cm4gZ2V0QnJlYWtwb2ludFNpemUob2xkQ2FsYykgPT09ICdtZWRpdW0nO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTW9iaWxlRGV2aWNlID0gKCkgPT4ge1xuICByZXR1cm4gKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCB8fCBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn07XG5cbmV4cG9ydCBjb25zdCBpc05vdE1vYmlsZURldmljZSA9ICgpID0+IHtcbiAgcmV0dXJuICFpc01vYmlsZURldmljZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzVGFibGV0RGV2aWNlID0gKCkgPT4ge1xuICByZXR1cm4gLyhpcGFkfHRhYmxldHwoYW5kcm9pZCg/IS4qbW9iaWxlKSl8KHdpbmRvd3MoPyEuKnBob25lKSguKnRvdWNoKSl8a2luZGxlfHBsYXlib29rfHNpbGt8KHB1ZmZpbig/IS4qKElQfEFQfFdQKSkpKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzSU9TID0gKCkgPT4ge1xuICByZXR1cm4gKC8oaXBhZHxpcGhvbmV8aXBvZCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTm90SU9TID0gKCkgPT4ge1xuICByZXR1cm4gIWlzSU9TKCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNXaW5kb3dzUGhvbmUgPSAoKSA9PiB7XG4gIHJldHVybiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3dpbmRvd3MgcGhvbmUnKSAhPT0gLTEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFuZHJvaWRWZXJzaW9uID0gKCkgPT4ge1xuICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgaWYgKHVhLmluZGV4T2YoJ0FuZHJvaWQnKSA+PSAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodWEuc2xpY2UodWEuaW5kZXhPZignQW5kcm9pZCcpICsgOCkpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEJyb3dzZXJVc2VyQWdlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdXNlckFnZW50IH0gPSBuYXZpZ2F0b3I7XG4gIHJldHVybiB1c2VyQWdlbnQ7XG59O1xuXG5leHBvcnQgY29uc3QgZGV0ZWN0QnJvd3NlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJBZ2VudCA9IGdldEJyb3dzZXJVc2VyQWdlbnQoKTtcbiAgY29uc3QgYnJvd3NlcnMgPSB7XG4gICAgaXNDaHJvbWU6IHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA+IC0xLFxuICAgIGlzTXNFZGdlOiB1c2VyQWdlbnQuaW5kZXhPZignRWRnZScpID4gLTEsXG4gICAgaXNFeHBsb3JlcjogdXNlckFnZW50LmluZGV4T2YoJ01TSUUnKSA+IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPiAtMSwgLy8gTVNJRSA9IElFMTAgYW5kIGJlbG93LCBUcmlkZW50ID0gSUUxMVxuICAgIGlzRmlyZWZveDogdXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA+IC0xLFxuICAgIGlzU2FmYXJpOiB1c2VyQWdlbnQuaW5kZXhPZignU2FmYXJpJykgPiAtMSxcbiAgICBpc09wZXJhOiB1c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdvcCcpID4gLTFcbiAgfTtcblxuICBpZiAoYnJvd3NlcnMuaXNDaHJvbWUgJiYgYnJvd3NlcnMuaXNTYWZhcmkpIHtcbiAgICBicm93c2Vycy5pc1NhZmFyaSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGJyb3dzZXJzLmlzQ2hyb21lICYmIGJyb3dzZXJzLmlzT3BlcmEpIHtcbiAgICBicm93c2Vycy5pc0Nocm9tZSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGJyb3dzZXJzO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzSWUgPSAoKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdpZScpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTXNFZGdlID0gKCkgPT4ge1xuICByZXR1cm4gZGV0ZWN0QnJvd3NlcnMoKS5pc01zRWRnZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0llMTEgPSAoKSA9PiB7XG4gIHJldHVybiAoIXdpbmRvdy5BY3RpdmVYT2JqZWN0ICYmICdBY3RpdmVYT2JqZWN0JyBpbiB3aW5kb3cpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFZpZXdwb3J0U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgdGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHRlc3Quc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjogZml4ZWQ7dG9wOiAwO2xlZnQ6IDA7Ym90dG9tOiAwO3JpZ2h0OiAwOyc7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGVzdCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gIGNvbnN0IGRpbXMgPSB7IHdpZHRoOiB0ZXN0Lm9mZnNldFdpZHRoLCBoZWlnaHQ6IHRlc3Qub2Zmc2V0SGVpZ2h0IH07XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0ZXN0KTtcblxuICByZXR1cm4gZGltcztcbn07XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxUb0VsZW1lbnQgPSAoZWxlbWVudCwgb3B0aW9ucywgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgJGVsZW1lbnQgPSBlbGVtZW50IGluc3RhbmNlb2YgalF1ZXJ5ID8gZWxlbWVudCA6ICQoZWxlbWVudCk7XG5cbiAgLy8gT3B0aW9ucyBhcmUgb3B0aW9uYWxcbiAgbGV0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIFNldCBkZWZhdWx0c1xuICBvcHRzID0gJC5leHRlbmQoe1xuICAgIGFkanVzdG1lbnQ6IDAsXG4gICAgZWFzZTogJ2Vhc2VPdXRTaW5lJyxcbiAgICBkdXJhdGlvbjogODAwLFxuICAgIGNvbnRhaW5lcjogJCgnYm9keSwgaHRtbCcpXG4gIH0sIG9wdHMpO1xuXG4gIC8vIEhhcyBhbiBlbGVtZW50IGJlZW4gc3VwcGxpZWQ/XG4gIGlmICgkZWxlbWVudC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBTY3JvbGwgdG8gdGhlIHRhcmdldCBlbGVtZW50IGFsbG93aW5nIGZvciB0aGUgdXRpbGl0eSBtZW51XG4gIG9wdHMuY29udGFpbmVyLnN0b3AoKS5hbmltYXRlKHtcbiAgICBzY3JvbGxUb3A6ICRlbGVtZW50Lm9mZnNldCgpLnRvcCAtIG9wdHMuYWRqdXN0bWVudFxuICB9LCBvcHRzLmR1cmF0aW9uLCBvcHRzLmVhc2UsICgpID0+IHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBGb3IgdW5pdCB0ZXN0c1xuICByZXR1cm4gb3B0cztcbn07XG5cbi8qKlxuICogRGV0ZWN0IE1vZGVybiBCcm93c2VyIGJ5IGF2YWlsYWJpbGl0eSBvZiBCaWdJbnQgZmVhdHVyZS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaGFzQmlnSW50U3VwcG9ydCA9ICgpID0+IHtcbiAgcmV0dXJuICh0eXBlb2YgQmlnSW50ID09PSAnZnVuY3Rpb24nKTtcbn07XG4iLCIvLyB1c2FnZTogd3JhcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhLndyYXBfbWUnKSwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuZXhwb3J0IGNvbnN0IHdyYXAgPSAoZWwsIHdyYXBwZXIpID0+IHtcbiAgZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWwpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsKTtcbn07XG5cbi8vIHVzYWdlOiB1bndyYXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYS51bndyYXBfbWUnKSk7XG5leHBvcnQgY29uc3QgdW53cmFwID0gKGVsKSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG4gIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50Lmluc2VydEJlZm9yZShlbC5maXJzdENoaWxkLCBlbCk7XG4gIH1cbiAgcGFyZW50LnJlbW92ZUNoaWxkKGVsKTtcbn07XG5cblxuLy8gd3JhcEFsbDogcmVwbGljYXRlcyBqUXVlcnkncyAkLndyYXBBbGwoKSBmb3Igbm9uLWpRdWVyeSBlbGVtZW50KHMpLCBleGFtcGxlIHVzYWdlOlxuLy8gICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIHdyYXBBbGwoY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RvcicpLCB3cmFwcGVyKTtcbmV4cG9ydCBjb25zdCB3cmFwQWxsID0gKGVsZW1lbnRzLCB3cmFwcGVyKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUFycmF5ID0gKGVsKSA9PiB7XG4gICAgcmV0dXJuIGVsIGluc3RhbmNlb2YgTm9kZUxpc3QgPyBbLi4uZWxdIDogW2VsXTtcbiAgfTtcbiAgY29uc3QgZWxlbWVudHNBcnJheSA9IGNyZWF0ZUFycmF5KGVsZW1lbnRzKTtcbiAgaWYgKCFlbGVtZW50c0FycmF5Lmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwYXJlbnQgPSBlbGVtZW50c0FycmF5WzBdLnBhcmVudE5vZGU7XG4gIHBhcmVudC5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbWVudHNBcnJheVswXSk7XG4gIGVsZW1lbnRzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xufTtcblxuLy8gSlMgcmVwbGFjZW1lbnQgZm9yIGpRdWVyeSAkLmFmdGVyKClcbmV4cG9ydCBjb25zdCBpbnNlcnRBZnRlciA9IChiZWZvcmUsIGFmdGVyKSA9PiBiZWZvcmUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYWZ0ZXIsIGJlZm9yZS5uZXh0U2libGluZyk7XG5cbi8vIEpTIHJlcGxhY2VtZW50IGZvciBqUXVlcnkgJC5iZWZvcmUoKVxuZXhwb3J0IGNvbnN0IGluc2VydEJlZm9yZSA9IChhZnRlciwgYmVmb3JlKSA9PiBhZnRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShiZWZvcmUsIGFmdGVyKTtcbiIsIi8qIGdsb2JhbCBhcHBSZWFkeVRpbWVyICovXG5cbmltcG9ydCB7IGlzQnJlYWtwb2ludFNtYWxsLCBnZXRCcmVha3BvaW50U2l6ZSB9IGZyb20gJy4vYnJvd3NlckRldGVjdGlvbic7XG5pbXBvcnQgeyBLZXlDb2RlIH0gZnJvbSAnLi9hcmlhJztcblxuY29uc3QgJG5hdkhlYWRlciA9ICQoJyNoZWFkZXIsIC5keG5hdi1oZWFkZXInKTtcbmV4cG9ydCBjb25zdCBzdGlja3lOYXZpZ2F0aW9uRW5hYmxlZCA9ICRuYXZIZWFkZXIuYXR0cignZGF0YS1uYXYtdHlwZScpID09PSAnc3RpY2t5JztcbmV4cG9ydCBjb25zdCBzdGlja3lOYXZpZ2F0aW9uVHJhbnNpdGlvblBvaW50ID0gMjAwO1xuY29uc3QgdGVtcGxhdGVDYWNoZSA9IHt9O1xuXG5leHBvcnQgY29uc3QgZ29vZ2xlTWFwU3R5bGVzID0gW1xuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eScsXG4gICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgY29sb3I6ICcjNjY2NjY2J1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ2xhbmRzY2FwZS5tYW5fbWFkZScsXG4gICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5maWxsJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgY29sb3I6ICcjZjhmNmY0J1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3BvaScsXG4gICAgZWxlbWVudFR5cGU6ICdsYWJlbHMnLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICB2aXNpYmlsaXR5OiAnb2ZmJ1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXG4gICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5maWxsJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgY29sb3I6ICcjYWZhYmE0J1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXG4gICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBjb2xvcjogJyNlNmU2ZTYnXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcbiAgICBlbGVtZW50VHlwZTogJ2xhYmVscycsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIHNhdHVyYXRpb246IC0xNVxuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheS5jb250cm9sbGVkX2FjY2VzcycsXG4gICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5maWxsJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgY29sb3I6ICcjYWZhYmE0J1xuICAgIH1dXG4gIH0sXG4gIHtcbiAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheS5jb250cm9sbGVkX2FjY2VzcycsXG4gICAgZWxlbWVudFR5cGU6ICdsYWJlbHMuaWNvbicsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIHNhdHVyYXRpb246IC0xMDBcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICdyb2FkLmxvY2FsJyxcbiAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LmZpbGwnLFxuICAgIHN0eWxlcnM6IFt7XG4gICAgICBjb2xvcjogJyNmZmZmZmYnXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAncm9hZC5sb2NhbCcsXG4gICAgZWxlbWVudFR5cGU6ICdsYWJlbHMuaWNvbicsXG4gICAgc3R5bGVyczogW3tcbiAgICAgIHNhdHVyYXRpb246ICc3NydcbiAgICB9XVxuICB9LFxuICB7XG4gICAgZmVhdHVyZVR5cGU6ICd0cmFuc2l0JyxcbiAgICBlbGVtZW50VHlwZTogJ2xhYmVscy5pY29uJyxcbiAgICBzdHlsZXJzOiBbe1xuICAgICAgc2F0dXJhdGlvbjogJy0xMDAnXG4gICAgfV1cbiAgfSxcbiAge1xuICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxuICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXG4gICAgc3R5bGVyczogW1xuICAgICAge1xuICAgICAgICBjb2xvcjogJyNjNWQ3ZGUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaWdodG5lc3M6IC05XG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgaXNSdGwgPSAoKSA9PiB7XG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdO1xuICByZXR1cm4gaHRtbC5jbGFzc0xpc3QuY29udGFpbnMoJ3J0bCcpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENhY2hlZFNjcmlwdCA9ICh1cmwsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgbmV3T3B0aW9ucyA9ICQuZXh0ZW5kKG9wdGlvbnMgfHwge30sIHtcbiAgICBkYXRhVHlwZTogJ3NjcmlwdCcsXG4gICAgY2FjaGU6IHRydWUsXG4gICAgdXJsXG4gIH0pO1xuXG4gIHJldHVybiAkLmFqYXgobmV3T3B0aW9ucyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SGVpZ2h0ID0gKGVsZW0pID0+IHtcbiAgcmV0dXJuIChlbGVtID8gZWxlbS5jbGllbnRIZWlnaHQgOiAwKTtcbn07XG5cbi8vIG1ha2Ugc3VyZSB0byBwYXNzICdvbGRDYWxjdWxhdGlvbiA9IGZhbHNlJyB0byB1c2UgdGhlIG5ldyByZWZpbmVkIGNhbGN1bGF0aW9uXG4vLyBvciB1c2UgZ2V0U3RpY2t5TmF2SGVpZ2h0VjIoKVxuZXhwb3J0IGNvbnN0IGdldFN0aWNreU5hdkhlaWdodCA9ICh5UG9zLCBvbGRDYWxjdWxhdGlvbiA9IHRydWUpID0+IHtcbiAgY29uc3QgeVBvc2l0aW9uID0gdHlwZW9mIHlQb3MgIT09ICdudW1iZXInID8gMCA6IHlQb3M7XG4gIGNvbnN0IHNoYXJlZEhlYWRlciA9ICQoJy5keG5hdi1oZWFkZXInKTtcbiAgY29uc3QgJGhlYWRlciA9IHNoYXJlZEhlYWRlci5sZW5ndGggPyBzaGFyZWRIZWFkZXIgOiAkKCcjaGVhZGVyJyk7XG4gIGNvbnN0ICRpblBhZ2VOYXYgPSAkKCcuSW5QYWdlTmF2aWdhdGlvbicpO1xuICBjb25zdCAkaW5QYWdlTmF2U3RpY2t5ID0gJCgnLkluUGFnZU5hdmlnYXRpb24tLXN0aWNreScpO1xuICBjb25zdCAkaW5QYWdlTmF2QmFyID0gJCgnLkluUGFnZU5hdmlnYXRpb25fX2JhcicpO1xuICBjb25zdCBkeE5hdlByaW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHhuYXZfX3ByaW1hcnknKTtcbiAgY29uc3QgYnJlYWtwb2ludCA9IGdldEJyZWFrcG9pbnRTaXplKCk7XG4gIGNvbnN0IGNoZWNrU3RpY2t5TmF2ID0gJGhlYWRlci5sZW5ndGggPiAwID8gJGhlYWRlci5jc3MoJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcgOiBmYWxzZTtcbiAgY29uc3QgaW5QYWdlTmF2VG9wID0gJGluUGFnZU5hdi5sZW5ndGggPiAwID8gJGluUGFnZU5hdi5vZmZzZXQoKS50b3AgOiBudWxsO1xuICBjb25zdCBpc1N0aWNreU5hdiA9IHNoYXJlZEhlYWRlci5sZW5ndGggPyB0cnVlIDogY2hlY2tTdGlja3lOYXY7XG4gIGxldCBoZWlnaHQgPSAwO1xuXG4gIGlmICghaXNTdGlja3lOYXYpIHtcbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgLy8gaGFyZCBjb2RpbmcgdmFsdWVzIGhlcmUgdG8gcHJldmVudCBoYXZpbmcgdG8gcmVwZWF0ZWRseSBjbG9uZSBhbmQgbWVhc3VyZSB0aGUgaGVhZGVyXG4gIGNvbnN0IG9sZE5hdkJyZWFrcG9pbnQgPSA5NjA7XG5cbiAgLy8gYWRkZWQgJGluUGFnZU5hdi5jc3MoJ2Rpc3BsYXknKSBjaGVjayBmb3IgTFJBLTEwODUxXG4gIGlmIChpblBhZ2VOYXZUb3AgIT09IG51bGwgJiYgeVBvc2l0aW9uID49IGluUGFnZU5hdlRvcCAmJiBicmVha3BvaW50ID09PSAnbGFyZ2UnICYmICRpblBhZ2VOYXYuY3NzKCdkaXNwbGF5JykgIT09ICdub25lJykge1xuICAgIHJldHVybiAkaW5QYWdlTmF2Lm91dGVySGVpZ2h0KCk7XG4gIH1cblxuICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gIC8vIHRoaXMgaXMgdGhlIG9sZCBuYXZpZ2F0aW9uLCBvbmx5IHNob3duIHdoZW4gTmFhUyBpcyBkb3duLCBoYXJkIGNvZGluZyB2YWx1ZXMgdG8gcHJldmVudCBoYXZpbmcgdG8gY2xvbmUvbWVhc3VyZSB0aGUgRE9NIGVsZW1lbnRzIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gIGNvbnN0IGdldE5hdmlnYXRpb25IZWlnaHQgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvd1dpZHRoID49IG9sZE5hdkJyZWFrcG9pbnQgJiYgeVBvc2l0aW9uIDwgMjAwKSB7XG4gICAgICByZXR1cm4gMTA2O1xuICAgIH1cbiAgICByZXR1cm4gNTA7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmFhU0hlaWdodCA9IChvbGQpID0+IHtcbiAgICBsZXQgcHJpbWFyeU5hdkhlaWdodDtcblxuICAgIGlmIChvbGQpIHtcbiAgICAgIHByaW1hcnlOYXZIZWlnaHQgPSBnZXRIZWlnaHQoZHhOYXZQcmltYXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJpbWFyeU5hdkhlaWdodCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHhuYXYtc2Nyb2xsRG93bicpID09PSBudWxsICYmICEkaW5QYWdlTmF2U3RpY2t5Lmxlbmd0aCkgPyBnZXRIZWlnaHQoZHhOYXZQcmltYXJ5KSArIHBhcnNlSW50KHNoYXJlZEhlYWRlci5jc3MoJ3RvcCcpLCAxMCkgOiAwO1xuICAgIH1cblxuICAgIGxldCBicmVhZGNydW1iTmF2SGVpZ2h0ID0gZ2V0SGVpZ2h0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5keG5hdl9fYnJlYWRjcnVtYnMtY29udGFpbmVyJykpO1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbkhlaWdodCA9IGdldEhlaWdodChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uQmFyc1dyYXBwZXInKSk7XG4gICAgbGV0IGluUGFnZU5hdmlnYXRpb25IZWlnaHQgPSAwO1xuICAgIGlmICgkaW5QYWdlTmF2Lmxlbmd0aCkge1xuICAgICAgaWYgKCRpblBhZ2VOYXZTdGlja3kubGVuZ3RoKSB7XG4gICAgICAgIGJyZWFkY3J1bWJOYXZIZWlnaHQgPSAwO1xuICAgICAgICBpZiAocGFyc2VJbnQoJGluUGFnZU5hdkJhci5jc3MoJ3RvcCcpLCAxMCkgPT09IDApIHtcbiAgICAgICAgICBpblBhZ2VOYXZpZ2F0aW9uSGVpZ2h0ID0gJGluUGFnZU5hdi5pbm5lckhlaWdodCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCgkaW5QYWdlTmF2QmFyLmNzcygndG9wJyksIDEwKSA8IDApIHtcbiAgICAgICAgICBpblBhZ2VOYXZpZ2F0aW9uSGVpZ2h0ID0gTWF0aC5tYXgoJGluUGFnZU5hdi5vdXRlckhlaWdodCgpICsgcGFyc2VJbnQoJGluUGFnZU5hdkJhci5jc3MoJ3RvcCcpLCAxMCksIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcmltYXJ5TmF2SGVpZ2h0ICsgYnJlYWRjcnVtYk5hdkhlaWdodCArIG5vdGlmaWNhdGlvbkhlaWdodCArIChvbGQgPyAwIDogaW5QYWdlTmF2aWdhdGlvbkhlaWdodCk7XG4gIH07XG5cbiAgaWYgKHNoYXJlZEhlYWRlci5sZW5ndGgpIHtcbiAgICBoZWlnaHQgPSBnZXROYWFTSGVpZ2h0KG9sZENhbGN1bGF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBoZWlnaHQgPSBnZXROYXZpZ2F0aW9uSGVpZ2h0KCk7XG4gIH1cblxuICByZXR1cm4gaGVpZ2h0O1xufTtcblxuLy8gc2hvdWxkIGJlIHVzZWQgdW50aWwgbWVyZ2VkIHdpdGggZ2V0TmF2aWdhdGlvbkhlaWdodFxuZXhwb3J0IGNvbnN0IGdldFN0aWNreU5hdkhlaWdodFYyID0gKHlQb3MpID0+IHtcbiAgcmV0dXJuIGdldFN0aWNreU5hdkhlaWdodCh5UG9zLCBmYWxzZSk7XG59O1xuXG5cbmV4cG9ydCBj