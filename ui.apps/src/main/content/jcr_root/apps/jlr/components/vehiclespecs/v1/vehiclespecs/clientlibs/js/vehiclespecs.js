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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/webapp/components/VehicleSpecsRulesEngine/js/VehicleSpecsRulesEngine.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@configureconnect/rulesconnectjs/es/decimalformat.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@configureconnect/rulesconnectjs/es/decimalformat.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  /*
  Based on Java DecimalFormat and https://gist.github.com/oskansavli/822382
  */
  var DecimalFormat = function () {
    function DecimalFormat(formatStr) {
      _classCallCheck(this, DecimalFormat);
  
      this._prefix = DecimalFormat._getPrefix(formatStr);
  
      var noPrefix = formatStr.substring(this._prefix.length);
      this._suffix = DecimalFormat._getSuffix(noPrefix);
  
      var numberStr = noPrefix.substr(0, noPrefix.length - this._suffix.length);
  
      this._suffix = this._suffix.replace(/[']/g, '');
      this._groupSize = 0;
      this._minInt = 1;
      this._minFrac = 0;
      this._maxFrac = 0;
  
      this._groupingSeparator = ',';
      this._outputDecimalSeparator = '.';
  
      if (numberStr.indexOf("#.#") !== -1) {
        this._groupingSeparator = '.';
        this._outputDecimalSeparator = ',';
      } else if (numberStr.indexOf("# #") !== -1) {
        this._groupingSeparator = ' ';
      } else if (numberStr.indexOf("#\xa0#") !== -1) {
        this._groupingSeparator = '\xa0';
      } else if (numberStr.indexOf("#'#") !== -1) {
        this._groupingSeparator = '\'';
      }
  
      var intStr = '';
      var fracStr = '';
      var point = numberStr.indexOf(this._outputDecimalSeparator);
      if (point != -1) {
        intStr = numberStr.substring(0, point);
        fracStr = numberStr.substring(point + 1);
      } else {
        intStr = numberStr;
      }
  
      var commaPos = intStr.lastIndexOf(this._groupingSeparator);
      if (commaPos != -1) {
        this._groupSize = intStr.length - 1 - commaPos;
      }
  
      intStr = intStr.replace(new RegExp("[\\" + this._groupingSeparator + "]", "g"), ''); // remove commas
      fracStr = fracStr.replace(new RegExp("[\\" + this._groupingSeparator + "]|[\\" + this._outputDecimalSeparator + "]+", "g"), '');
  
      this._maxFrac = fracStr.length;
  
      var tmp = intStr.replace(/[^0]/g, ''); // remove all except zero
      if (tmp.length > this._minInt) this._minInt = tmp.length;
      tmp = fracStr.replace(/[^0]/g, '');
      this._minFrac = tmp.length;
    }
  
    _createClass(DecimalFormat, [{
      key: 'getInputDecimalSeparator',
      value: function getInputDecimalSeparator(input) {
        return "."; // Always assume that the input is a `number` therefore is always a point.
      }
    }, {
      key: 'format',
      value: function format(numStr) {
        // 1223.06 --> $1,223.06
        // remove prefix, suffix and commas
        var numberStr = this.parseDecimal(numStr).toLowerCase();
  
        // do not format if not a number
        if (isNaN(numberStr) || numberStr.length == 0) return numStr;
  
        var negative = false;
        // remove sign
        if (numberStr.charAt(0) == '-') {
          negative = true;
          numberStr = numberStr.substring(1);
        } else if (numberStr.charAt(0) == '+') {
          numberStr = numberStr.substring(1);
        }
  
        var inputDecimapSeparator = this.getInputDecimalSeparator(numStr);
        var point = numberStr.indexOf(inputDecimapSeparator); // position of point character
        var intStr = '';
        var fracStr = '';
        if (point != -1) {
          intStr = numberStr.substring(0, point);
          fracStr = numberStr.substring(point + 1);
        } else {
          intStr = numberStr;
        }
        fracStr = fracStr.replace(new RegExp("[\\" + this._outputDecimalSeparator + "]"), ''); // remove other point characters
  
        if (fracStr.length > this._maxFrac) {
          // round
          //case 6143
          var num = new Number('0.' + fracStr);
          num = this._maxFrac == 0 ? Math.round(num) : num.toFixed(this._maxFrac);
          // toFixed method has bugs on IE (0.7 --> 0)
          fracStr = num.toString(10).substr(2);
          var c = num >= 1 ? 1 : 0; //carry
          var x,
              i = intStr.length - 1;
          while (c) {
            //increment intStr
            if (i == -1) {
              intStr = '1' + intStr;
              break;
            } else {
              x = intStr.charAt(i);
              if (x == 9) {
                x = '0';c = 1;
              } else {
                x = ++x + '';c = 0;
              }
              intStr = intStr.substring(0, i) + x + intStr.substring(i + 1, intStr.length);
              i--;
            }
          }
        }
        for (var i = fracStr.length; i < this._minFrac; i++) {
          // if minFrac=4 then 1.12 --> 1.1200
          fracStr = fracStr + '0';
        }
        while (fracStr.length > this._minFrac && fracStr.charAt(fracStr.length - 1) == '0') {
          // if minInt=4 then 00034 --> 0034)
          fracStr = fracStr.substring(0, fracStr.length - 1);
        }
  
        for (var i = intStr.length; i < this._minInt; i++) {
          // if minInt=4 then 034 --> 0034
          intStr = '0' + intStr;
        }
        while (intStr.length > this._minInt && intStr.charAt(0) == '0') {
          // if minInt=4 then 00034 --> 0034)
          intStr = intStr.substring(1);
        }
  
        var j = 0;
        for (var i = intStr.length; i > 0; i--) {
          // add commas
          if (j != 0 && j % this._groupSize == 0) {
            intStr = intStr.substring(0, i) + this._groupingSeparator + intStr.substring(i);
            j = 0;
          }
          j++;
        }
  
        var formattedValue;
        if (fracStr.length > 0) formattedValue = this._prefix + intStr + this._outputDecimalSeparator + fracStr + this._suffix;else formattedValue = this._prefix + intStr + this._suffix;
  
        if (negative) {
          formattedValue = '-' + formattedValue;
        }
  
        return formattedValue;
      }
    }, {
      key: 'parseDecimal',
      value: function parseDecimal(fNumStr) {
        // $1,223.06 --> 1223.06
        if (typeof fNumStr === "undefined" || fNumStr === null) return ''; //do not return undefined or null
        fNumStr += ''; //ensure it is string
        if (!isNaN(fNumStr)) return this.getNumericString(fNumStr);
  
        var fNumberStr = fNumStr;
        var negative = false;
        if (fNumStr.charAt(0) == '-') {
          fNumberStr = fNumberStr.substr(1);
          negative = true;
        }
  
        var pIndex = fNumberStr.indexOf(this._prefix);
        var sIndex = this._suffix == '' ? fNumberStr.length : fNumberStr.indexOf(this._suffix, this._prefix.length + 1);
  
        if (pIndex == 0 && sIndex > 0) {
          // remove suffix
          fNumberStr = fNumberStr.substr(0, sIndex);
          // remove prefix
          fNumberStr = fNumberStr.substr(this._prefix.length);
          // remove grouping separators
          fNumberStr = fNumberStr.replace(new RegExp("\\" + this._groupingSeparator, "g"), '');
          // convert decimal separator to traditional period
          fNumberStr = fNumberStr.replace(new RegExp("\\" + this._outputDecimalSeparator, "g"), '.');
  
          if (negative) fNumberStr = '-' + fNumberStr;
          if (!isNaN(fNumberStr)) return this.getNumericString(fNumberStr);
        }
  
        return fNumStr;
      }
  
      /**
       * @description We shouldn't return strings like 1.000 in parseDecimal method.
       * However, using only Number(str) is not enough, because it omits . in big numbers
       * like 23423423423342234.34 => 23423423423342236 . There's a conflict in cases
       * 6143 and 6541.
       * @methodOf DecimalFormat
       * @param {String} str Numberic string
       * @return {String} Corrected numeric string
       * @author Serdar Bicer
       */
  
    }, {
      key: 'getNumericString',
      value: function getNumericString(str) {
        //first convert to number
        var num = new Number(str);
        //check if there is a missing dot
        var numStr = num + '';
        if (str.indexOf('.') > -1 && numStr.indexOf('.') < 0) {
          //check if original string has all zeros after dot or not
          for (var i = str.indexOf('.') + 1; i < str.length; i++) {
            //if not, this means we lost precision
            if (str.charAt(i) !== '0') return str;
          }
          return numStr;
        }
        return str;
      }
    }], [{
      key: '_getPrefix',
      value: function _getPrefix(formatStr) {
        var prefix = '';
  
        var inQuote = false;
        for (var i = 0; i < formatStr.length; i++) {
          if (formatStr.charAt(i) == '\'') {
            inQuote = !inQuote;
          } else if (!inQuote && (formatStr.charAt(i) == '#' || formatStr.charAt(i) == '0')) {
            prefix = formatStr.substring(0, i).replace(/[']/g, '');
            break;
          }
        }
        return prefix;
      }
    }, {
      key: '_getSuffix',
      value: function _getSuffix(formatStr) {
        var suffix = '';
        for (var i = formatStr.length; i >= 0; i--) {
          if (formatStr.charAt(i) == '#' || formatStr.charAt(i) == '0') {
            suffix = formatStr.substring(i + 1);
            break;
          }
        }
        return suffix;
      }
    }]);
  
    return DecimalFormat;
  }();
  
  /* harmony default export */ __webpack_exports__["default"] = (DecimalFormat);
  
  /***/ }),
  
  /***/ "./node_modules/@configureconnect/rulesconnectjs/es/index.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@configureconnect/rulesconnectjs/es/index.js ***!
    \*******************************************************************/
  /*! exports provided: RulesConnect, JSONP */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _rulesconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rulesconnect */ "./node_modules/@configureconnect/rulesconnectjs/es/rulesconnect.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RulesConnect", function() { return _rulesconnect__WEBPACK_IMPORTED_MODULE_0__["default"]; });
  
  /* harmony import */ var _jsonp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsonp */ "./node_modules/@configureconnect/rulesconnectjs/es/jsonp.js");
  /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONP", function() { return _jsonp__WEBPACK_IMPORTED_MODULE_1__["default"]; });
  
  
  
  
  
  /***/ }),
  
  /***/ "./node_modules/@configureconnect/rulesconnectjs/es/jsonp.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@configureconnect/rulesconnectjs/es/jsonp.js ***!
    \*******************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _pool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pool */ "./node_modules/@configureconnect/rulesconnectjs/es/pool.js");
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  /*
    A simple JSONP loader which will maximise the use of cached data.
    Uses ES2015 Promises.
  
    e.g.
  
    new JSONP().get("http://example.com/jsonp").then((data)=>{ ... });
  */
  
  
  var JSONP = function () {
    function JSONP(callbackName) {
      _classCallCheck(this, JSONP);
  
      this._callbackName = callbackName || 'rcjson';
      this._pool = new _pool__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
  
    _createClass(JSONP, [{
      key: 'createScriptElement',
      value: function createScriptElement(url, errorHandler) {
        var script = document.createElement('script'),
            done = false;
        script.src = url;
        script.async = true;
  
        if (typeof errorHandler === 'function') {
          script.onerror = function (ex) {
            errorHandler({ url: url, event: ex });
          };
        }
  
        script.onload = script.onreadystatechange = function () {
          if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
            done = true;
            script.onload = script.onreadystatechange = null;
            if (script && script.parentNode) {
              script.parentNode.removeChild(script);
            }
          }
        };
  
        if (!this._head) {
          this._head = document.getElementsByTagName('head')[0];
        }
        this._head.appendChild(script);
  
        return script;
      }
    }, {
      key: 'get',
      value: function get(url) {
        var _this = this;
  
        var query = (url || '').indexOf('?') === -1 ? '?' : '&';
        var token = this._pool.getToken();
        var uniqueName = this._callbackName + token;
  
        var promise = new Promise(function (resolve, reject) {
  
          window[uniqueName] = function (data) {
            resolve(data);
            try {
              delete window[uniqueName];
            } catch (e) {}
            window[uniqueName] = null;
            token = _this._pool.releaseToken(token);
          };
  
          var errorHandler = function errorHandler(obj) {
            try {
              delete window[uniqueName];
            } catch (e) {}
            window[uniqueName] = null;
            token = _this._pool.releaseToken(token);
            reject(obj);
          };
  
          _this.createScriptElement(url + query + 'callback=' + uniqueName, errorHandler);
        });
  
        promise.uniqueName = uniqueName;
  
        return promise;
      }
    }, {
      key: 'callbackName',
      get: function get() {
        return this._callbackName;
      }
    }]);
  
    return JSONP;
  }();
  
  /* harmony default export */ __webpack_exports__["default"] = (JSONP);
  
  /***/ }),
  
  /***/ "./node_modules/@configureconnect/rulesconnectjs/es/pool.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@configureconnect/rulesconnectjs/es/pool.js ***!
    \******************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  /*
    Represents a pool of tokens.  The default token is the empty string "".
    All other tokens are decimal string representations, sequential
    e.g. "1", "2", "3" etc.
    The pool will return the first free token.
  */
  
  var Pool = function () {
    function Pool() {
      _classCallCheck(this, Pool);
  
      this._count = 0;
      this._tokens = [];
    }
  
    _createClass(Pool, [{
      key: "getToken",
      value: function getToken() {
        var FREE = true;
  
        var freeIndex = -1;
        for (var i = 0; i < this._tokens.length; i++) {
          if (this._tokens[i] == FREE) {
            this._tokens[i] = !FREE;
            freeIndex = i;
            break;
          }
        }
  
        if (freeIndex === -1) {
          this._tokens.push(!FREE);
          freeIndex = this._tokens.length - 1;
        }
  
        if (freeIndex === 0) return "";
        return "" + freeIndex;
      }
    }, {
      key: "releaseToken",
      value: function releaseToken(token) {
        var FREE = true;
  
        var index = -1;
        if (token === "") {
          index = 0;
        } else {
          index = parseInt(token, 10);
        }
  
        if (!isNaN(index) && index >= 0) {
          this._tokens[index] = FREE;
        }
  
        return "notoken";
      }
    }]);
  
    return Pool;
  }();
  
  /* harmony default export */ __webpack_exports__["default"] = (Pool);
  
  /***/ }),
  
  /***/ "./node_modules/@configureconnect/rulesconnectjs/es/resourcebundle.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/@configureconnect/rulesconnectjs/es/resourcebundle.js ***!
    \****************************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  /**
   * ResourceBundle for RulesConnect
   *
   * The ResourceBundle class parses the JSON object received from the
   * RulesConnect API and converts it into a JavaScript friendly object.
   *
   * Keys in the resoure bundle which contain dot notation are converted
   * into nested objects which can be accessed in the usual JavaScript/JSON
   * notation.
   *
   * Keys which contain integers in the dot notation (item.1.key) will be treated
   * as arrays e.g. item[1].key
   *
   * For example,
   *
   *     "banner.share.0.title": "FACEBOOK",
   *     "banner.share.0.url": "http://www.facebook.com/Jaguar",
   *     "banner.share.1.title": "FLICKR",
   *     "banner.share.1.url": "http://www.flickr.com/photos/jaguar_cars/",
   *
   * Becomes,
   *     banner: {
   *       share: [
   *         {
   *            title: "FACEBOOK",
   *            url: "http://www.facebook.com/Jaguar"
   *         },
   *         {
   *            title: "FLICKR",
   *            url: "http://www.flickr.com/photos/jaguar_cars/"
   *         }
   *       ]
   *    }
   *
   * This means you can access the values with,
   *     banner.share[0].title
   *
   * Each object in the tree is a ResourceBundle.  This means it supports the
   * message(key, ...args) function for token replacement.  Tokens can take the
   * form of {0} or in RulesConnect, more commonly $$0$$.
   *
   *    var bundle = ResourceBuncle({"share.key": "My name is {0} $$1$$"});
   *    bundle.message('share.key', 'Tony', 'Tiger') : "My name is Tony Tiger"
   *
   * Although not recommended, if a key has a value AND is also an array,
   * this is handled.
   *
   * e.g.
   *
   *    "bundle.key":"value",
   *    "bundle.key.0":"one"
   *
   * becomes,
   *
   *    { bundle.key: ["one"] }
   *    ... but ["one"].__default == "value"
   *
   * 1) toString of the array will return the assigned 'value'.
   * 2) A __default property of the array contains the assigned 'value'.
   * 3) The object will be an array.
   *
   */
  
  function _isLast(i, arr) {
    return i === arr.length - 1;
  }
  
  function _isInteger(str) {
    return (/^\d+$/.test(str)
    );
  }
  
  function _toString(obj) {
    if (typeof obj.__default === 'string') return obj.__default;else return 'ResourceBundle ' + JSON.stringify(obj);
  }
  
  function _message(obj, key) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
  
    var value = key.split('.').reduce(function (bundle, key) {
      return bundle ? bundle[key] : bundle;
    }, obj);
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.hasOwnProperty('__default')) {
      value = value.__default;
    }
    var result = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? undefined : value;
  
    if (typeof result === 'string') {
      var _loop = function _loop(i) {
        result = result.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
          return args[i];
        });
        result = result.replace(new RegExp("\\$\\$" + i + "\\$\\$", "g"), function () {
          return args[i];
        });
      };
  
      for (var i = 0; i < args.length; i++) {
        _loop(i);
      }
    }
  
    return result;
  }
  
  function _createArray(__default) {
    var arr = [];
    arr.message = function (nextkey) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
  
      return _message(arr, nextkey, args);
    };
    arr.toString = function () {
      return _toString(arr);
    };
    if (typeof __default !== 'undefined') {
      arr.__default = __default;
    }
    return arr;
  }
  
  function _createObjectOrArray(keys, i, __default) {
    if (_isInteger(keys[i + 1])) {
      return _createArray(__default);
    } else {
      return new ResourceBundle(typeof __default === 'undefined' ? {} : { __default: __default });
    }
  }
  
  var ResourceBundle = function () {
    function ResourceBundle() {
      var _this = this;
  
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  
      _classCallCheck(this, ResourceBundle);
  
      Object.keys(obj).forEach(function (key) {
        var value = _typeof(obj[key]) !== 'object' ? obj[key] : new ResourceBundle(obj[key]);
  
        key.split('.').reduce(function (bundle, key, i, keys) {
          if (_isLast(i, keys)) {
            if (_typeof(bundle[key]) === 'object') {
              bundle[key].__default = value;
            } else {
              bundle[key] = value;
            }
          } else if (typeof bundle[key] === 'undefined') {
            bundle[key] = _createObjectOrArray(keys, i);
          } else if (_typeof(bundle[key]) !== 'object') {
            var defaultValue = bundle[key];
            bundle[key] = _createObjectOrArray(keys, i, defaultValue);
          }
  
          return bundle[key];
        }, _this);
      });
    }
  
    _createClass(ResourceBundle, [{
      key: 'message',
      value: function message(key) {
        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
  
        return _message.apply(undefined, [this, key].concat(args));
      }
    }, {
      key: 'toString',
      value: function toString() {
        return _toString(this);
      }
    }]);
  
    return ResourceBundle;
  }();
  
  /* harmony default export */ __webpack_exports__["default"] = (ResourceBundle);
  
  /***/ }),
  
  /***/ "./node_modules/@configureconnect/rulesconnectjs/es/rulesconnect.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@configureconnect/rulesconnectjs/es/rulesconnect.js ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonp */ "./node_modules/@configureconnect/rulesconnectjs/es/jsonp.js");
  /* harmony import */ var _decimalformat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decimalformat */ "./node_modules/@configureconnect/rulesconnectjs/es/decimalformat.js");
  /* harmony import */ var _resourcebundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resourcebundle */ "./node_modules/@configureconnect/rulesconnectjs/es/resourcebundle.js");
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  /**
   * RulesConnect JSONP Handling v2.0.0
   *
   * Unlike v1, this version uses ES2015; does not use $.ajax.
   *
   * Does not require any external library to function.
   *
   * To load some RulesConnect JSONP simply call,
   *
   *     rc.loadJsonp("http://rules.configureconnect.com/rc/jag/gb/resources.jsonp")
   *       .then((data)=>{
   *         alert(data.metadata.meta["url"]);
   *       }).catch(()=>{
   *         alert("oh no an error occurred");
   *       });
   *
   * To load translations/resource bundle, use
   *
   *     rc.loadResources("jag","en_gb", "http://rules.config.jaguar.com");
   *
   * Or,
   *
   *     rc.loadResources("http://rules.config.jaguar.com/rc/jag/en_gb/resources.jsonp");
   *
   * To find out if there are any resources loaded, use,
   *
   *     rc.hasResources();
   *
   * To obtain resources, properties and metadata from the Resource Bundle use,
   *     rc.getResource(key);
   *     rc.getProperty(key);
   *     rc.getMetaData(key);
   *
   * To replace nouns in the resource bundle -- identified by {0} or $$1$$ style tokens,
   *     rc.getResource(key, "arg0", "arg1");
   *
   * To register a callback function to execute once resource/i18n data has loaded, use,
   *     rc.onResourceReady().then(()=> {  ...  });
   *
   **/
  
  
  
  
  
  var RulesConnect = function () {
    function RulesConnect() {
      var _this = this;
  
      _classCallCheck(this, RulesConnect);
  
      this._jsonp = new _jsonp__WEBPACK_IMPORTED_MODULE_0__["default"]('rcjson');
      this._resources = null;
      this._properties = null;
      this._metaData = null;
      this._language = null;
      this._i18nPromise = new Promise(function (resolve, reject) {
        _this._i18nResolve = resolve;
      });
      this._currencyFormats = {};
      this._defaultCurrency = "default";
    }
  
    _createClass(RulesConnect, [{
      key: 'setResources',
      value: function setResources(i18n) {
        this._resources = new _resourcebundle__WEBPACK_IMPORTED_MODULE_2__["default"]((i18n["resource-bundle"] || {})["client-resources"]);
        this._properties = new _resourcebundle__WEBPACK_IMPORTED_MODULE_2__["default"]((i18n["resource-bundle"] || {})["client-properties"]);
        this._metaData = new _resourcebundle__WEBPACK_IMPORTED_MODULE_2__["default"]((i18n["metadata"] || {})["meta"]);
        this._language = (i18n["resource-bundle"] || {}).language;
        this._i18nResolve();
      }
    }, {
      key: 'loadResources',
      value: function loadResources(app, locale, baseUrl) {
        var _this2 = this;
  
        var url;
        if (typeof baseUrl === "undefined" && typeof locale === "undefined" && typeof app === "string") {
          url = app;
        } else {
          if (typeof baseUrl !== "string") baseUrl = "";
          url = baseUrl + "/rc/" + app + "/" + locale + "/resources.jsonp";
        }
  
        var orgPromise = this.loadJsonp(url);
        var chainPromise = orgPromise.then(function (data) {
          _this2.setResources(data);
          return data;
        });
  
        chainPromise.uniqueName = orgPromise.uniqueName;
        return chainPromise;
      }
    }, {
      key: 'hasResources',
      value: function hasResources() {
        return this._resources != null;
      }
    }, {
      key: 'loadJsonp',
      value: function loadJsonp(url) {
        var _this3 = this;
  
        var orgPromise = this._jsonp.get(url);
        var chainPromise = orgPromise.then(function (data) {
          _this3.readCurrencyFormats(data);
          _this3.detectDefaultCurrency(data);
          _this3.overlayResourcesWithResponse(data);
          return data;
        });
  
        chainPromise.uniqueName = orgPromise.uniqueName;
        return chainPromise;
      }
    }, {
      key: 'overlayResourcesWithResponse',
      value: function overlayResourcesWithResponse(apiResponse) {
        if (this._resources) {
          var vehicleProperties = ((apiResponse['feature-dictionary'] || {}).vehicle || {}).property || {};
          var newResources = new _resourcebundle__WEBPACK_IMPORTED_MODULE_2__["default"](vehicleProperties);
          this.traverseResourceTree(newResources, this._resources);
        }
      }
  
      // left = new data model overrides
      // right = old resource bundle
  
    }, {
      key: 'traverseResourceTree',
      value: function traverseResourceTree(left, right) {
        var _this4 = this;
  
        Object.keys(left).forEach(function (key) {
          if (key in right) {
            if (typeof left[key] === 'string') {
              right[key] = left[key];
            } else if (typeof right[key] === 'string' && _typeof(left[key]) === 'object') {
              right[key] = left[key][_this4.language];
            } else if (_typeof(left[key]) === 'object') {
              _this4.traverseResourceTree(left[key], right[key]);
            }
          } else {
            if (typeof left[key] === 'string') {
              right[key] = left[key];
            } else if (_typeof(left[key]) === 'object') {
              // Detect it's an object because it's a multi language property or if it's just dot separated.
              if (left[key][_this4.language] !== undefined) {
                right[key] = left[key][_this4.language];
              } else {
                right[key] = {};
                _this4.traverseResourceTree(left[key], right[key]);
              }
            }
          }
        });
      }
    }, {
      key: 'readCurrencyFormats',
      value: function readCurrencyFormats(data) {
        if (Object.keys(this._currencyFormats).length == 0 && typeof data !== "undefined") {
          var formatStr = ((data["metadata"] || {})["meta"] || {})["currency-format"];
          if (typeof formatStr === "string") {
            var formatArr = formatStr.trim().split("~");
            var formatMap = {};
            for (var i = 0; i < formatArr.length; i++) {
              var pair = formatArr[i].split("=", 2);
              if (pair.length == 1) {
                formatMap["default"] = new _decimalformat__WEBPACK_IMPORTED_MODULE_1__["default"](pair[0].trim());
              }
              if (pair.length == 2) {
                var df = new _decimalformat__WEBPACK_IMPORTED_MODULE_1__["default"](pair[1].trim());
                formatMap[pair[0].toUpperCase()] = df;
                if (i == 0) {
                  formatMap["default"] = df;
                }
              }
            }
          }
          this._currencyFormats = formatMap;
        }
      }
    }, {
      key: 'detectDefaultCurrency',
      value: function detectDefaultCurrency(data) {
        var urlStr = (data["metadata"] || {})["url"];
        if (typeof urlStr === "string") {
          var parts = urlStr.split("/", 5);
          if (parts.length >= 4) {
            var localeStr = parts[3];
            var locale = localeStr.split("_", 3);
            if (locale.length == 3) {
              var currency = locale[2];
              var indexOfDot = currency.indexOf(".");
              if (indexOfDot !== -1) {
                currency = currency.substr(0, indexOfDot);
              }
              this._defaultCurrency = currency.toUpperCase();
              return;
            }
          }
        }
        this._defaultCurrency = "default";
      }
    }, {
      key: 'getFormattedPrice',
      value: function getFormattedPrice(price, currency) {
        currency = currency || this._defaultCurrency;
        var formatter = this._currencyFormats[currency] || this._currencyFormats["default"];
  
        if (formatter) {
          return formatter.format(price);
        }
  
        return "" + price;
      }
  
      // TODO add date formatting here
  
    }, {
      key: 'getFormattedDate',
      value: function getFormattedDate(dateObj) {
        return dateObj.toLocaleDateString();
      }
    }, {
      key: 'onResourceReady',
      value: function onResourceReady() {
        return this._i18nPromise;
      }
    }, {
      key: 'resources',
      get: function get() {
        return this._resources;
      }
    }, {
      key: 'language',
      get: function get() {
        return this._language;
      }
  
      // getResource(key, ...args) {
      //   var result=null;
      //   if(this._resources!=null) {
      //     result = this._resources[key];
      //
      //     if(typeof result !== "undefined") {
      //       for(let i=0; i<args.length; i++) {
      //         result = result.replace(new RegExp("\\{"+i+"\\}", "g"), args[i]);
      //         result = result.replace(new RegExp("\\$\\$"+i+"\\$\\$", "g"), args[i]);
      //       }
      //     }
      //   }
      //
      //
      //   return result;
      // }
  
    }, {
      key: 'properties',
      get: function get() {
        return this._properties;
      }
    }, {
      key: 'metaData',
      get: function get() {
        return this._metaData;
      }
    }]);
  
    return RulesConnect;
  }();
  
  /* harmony default export */ __webpack_exports__["default"] = (RulesConnect);
  
  /***/ }),
  
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
  
  /***/ "./node_modules/babel-runtime/core-js/map.js":
  /*!***************************************************!*\
    !*** ./node_modules/babel-runtime/core-js/map.js ***!
    \***************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = { "default": __webpack_require__(/*! core-js/library/fn/map */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/map.js"), __esModule: true };
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/core-js/number/is-nan.js":
  /*!*************************************************************!*\
    !*** ./node_modules/babel-runtime/core-js/number/is-nan.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = { "default": __webpack_require__(/*! core-js/library/fn/number/is-nan */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/number/is-nan.js"), __esModule: true };
  
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/map.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/map.js ***!
    \***************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  __webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js");
  __webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
  __webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
  __webpack_require__(/*! ../modules/es6.map */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.map.js");
  __webpack_require__(/*! ../modules/es7.map.to-json */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.map.to-json.js");
  __webpack_require__(/*! ../modules/es7.map.of */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.map.of.js");
  __webpack_require__(/*! ../modules/es7.map.from */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.map.from.js");
  module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Map;
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/number/is-nan.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/number/is-nan.js ***!
    \*************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  __webpack_require__(/*! ../../modules/es6.number.is-nan */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.number.is-nan.js");
  module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Number.isNaN;
  
  
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-from-iterable.js":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-from-iterable.js ***!
    \*************************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_for-of.js");
  
  module.exports = function (iter, ITERATOR) {
    var result = [];
    forOf(iter, false, result.push, result, ITERATOR);
    return result;
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-methods.js":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-methods.js ***!
    \*******************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
  var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
  var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-species-create.js");
  module.exports = function (TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || asc;
    return function ($this, callbackfn, that) {
      var O = toObject($this);
      var self = IObject(O);
      var f = ctx(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res;   // map
          else if (res) switch (TYPE) {
            case 3: return true;             // some
            case 5: return val;              // find
            case 6: return index;            // findIndex
            case 2: result.push(val);        // filter
          } else if (IS_EVERY) return false; // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-species-constructor.js":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-species-constructor.js ***!
    \*******************************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
  var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js");
  var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('species');
  
  module.exports = function (original) {
    var C;
    if (isArray(original)) {
      C = original.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
      if (isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    } return C === undefined ? Array : C;
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-species-create.js":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-species-create.js ***!
    \**************************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
  var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-species-constructor.js");
  
  module.exports = function (original, length) {
    return new (speciesConstructor(original))(length);
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_collection-strong.js":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_collection-strong.js ***!
    \***********************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine-all.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-instance.js");
  var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_for-of.js");
  var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js");
  var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-species.js");
  var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");
  var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js").fastKey;
  var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_validate-collection.js");
  var SIZE = DESCRIPTORS ? '_s' : 'size';
  
  var getEntry = function (that, key) {
    // fast case
    var index = fastKey(key);
    var entry;
    if (index !== 'F') return that._i[index];
    // frozen object case
    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key) return entry;
    }
  };
  
  module.exports = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, NAME, '_i');
        that._t = NAME;         // collection type
        that._i = create(null); // index
        that._f = undefined;    // first entry
        that._l = undefined;    // last entry
        that[SIZE] = 0;         // size
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function (key) {
          var that = validate(this, NAME);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.n;
            var prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE]--;
          } return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn /* , that = undefined */) {
          validate(this, NAME);
          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;
          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this);
            // revert to the last existing entry
            while (entry && entry.r) entry = entry.p;
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(validate(this, NAME), key);
        }
      });
      if (DESCRIPTORS) dP(C.prototype, 'size', {
        get: function () {
          return validate(this, NAME)[SIZE];
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var entry = getEntry(that, key);
      var prev, index;
      // change existing entry
      if (entry) {
        entry.v = value;
      // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey(key, true), // <- index
          k: key,                        // <- key
          v: value,                      // <- value
          p: prev = that._l,             // <- previous entry
          n: undefined,                  // <- next entry
          r: false                       // <- removed
        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE]++;
        // add to index
        if (index !== 'F') that._i[index] = entry;
      } return that;
    },
    getEntry: getEntry,
    setStrong: function (C, NAME, IS_MAP) {
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      $iterDefine(C, NAME, function (iterated, kind) {
        this._t = validate(iterated, NAME); // target
        this._k = kind;                     // kind
        this._l = undefined;                // previous
      }, function () {
        var that = this;
        var kind = that._k;
        var entry = that._l;
        // revert to the last existing entry
        while (entry && entry.r) entry = entry.p;
        // get next entry
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          // or finish the iteration
          that._t = undefined;
          return step(1);
        }
        // return step by kind
        if (kind == 'keys') return step(0, entry.k);
        if (kind == 'values') return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
  
      // add [@@species], 23.1.2.2, 23.2.2.2
      setSpecies(NAME);
    }
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_collection-to-json.js":
  /*!************************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_collection-to-json.js ***!
    \************************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js");
  var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-from-iterable.js");
  module.exports = function (NAME) {
    return function toJSON() {
      if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
      return from(this);
    };
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_collection.js":
  /*!****************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_collection.js ***!
    \****************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
  var meta = __webpack_require__(/*! ./_meta */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js");
  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js");
  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine-all.js");
  var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_for-of.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-instance.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
  var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
  var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
  var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-methods.js")(0);
  var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");
  
  module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME];
    var C = Base;
    var ADDER = IS_MAP ? 'set' : 'add';
    var proto = C && C.prototype;
    var O = {};
    if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
      new C().entries().next();
    }))) {
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
      meta.NEED = true;
    } else {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME, '_c');
        target._c = new Base();
        if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
      });
      each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
          anInstance(this, C, KEY);
          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
          var result = this._c[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      });
      IS_WEAK || dP(C.prototype, 'size', {
        get: function () {
          return this._c.size;
        }
      });
    }
  
    setToStringTag(C, NAME);
  
    O[NAME] = C;
    $export($export.G + $export.W + $export.F, O);
  
    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  
    return C;
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-collection-from.js":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-collection-from.js ***!
    \*************************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  // https://tc39.github.io/proposal-setmap-offrom/
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
  var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
  var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_for-of.js");
  
  module.exports = function (COLLECTION) {
    $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
      var mapFn = arguments[1];
      var mapping, A, n, cb;
      aFunction(this);
      mapping = mapFn !== undefined;
      if (mapping) aFunction(mapFn);
      if (source == undefined) return new this();
      A = [];
      if (mapping) {
        n = 0;
        cb = ctx(mapFn, arguments[2], 2);
        forOf(source, false, function (nextItem) {
          A.push(cb(nextItem, n++));
        });
      } else {
        forOf(source, false, A.push, A);
      }
      return new this(A);
    } });
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-collection-of.js":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-collection-of.js ***!
    \***********************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  // https://tc39.github.io/proposal-setmap-offrom/
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
  
  module.exports = function (COLLECTION) {
    $export($export.S, COLLECTION, { of: function of() {
      var length = arguments.length;
      var A = new Array(length);
      while (length--) A[length] = arguments[length];
      return new this(A);
    } });
  };
  
  
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_validate-collection.js":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_validate-collection.js ***!
    \*************************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
  module.exports = function (it, TYPE) {
    if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
    return it;
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.map.js":
  /*!************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.map.js ***!
    \************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_collection-strong.js");
  var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_validate-collection.js");
  var MAP = 'Map';
  
  // 23.1 Map Objects
  module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
    return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
  }, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key) {
      var entry = strong.getEntry(validate(this, MAP), key);
      return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value) {
      return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
    }
  }, strong, true);
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.number.is-nan.js":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.number.is-nan.js ***!
    \**********************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  // 20.1.2.4 Number.isNaN(number)
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
  
  $export($export.S, 'Number', {
    isNaN: function isNaN(number) {
      // eslint-disable-next-line no-self-compare
      return number != number;
    }
  });
  
  
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
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.map.from.js":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.map.from.js ***!
    \*****************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
  __webpack_require__(/*! ./_set-collection-from */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-collection-from.js")('Map');
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.map.of.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.map.of.js ***!
    \***************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
  __webpack_require__(/*! ./_set-collection-of */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-collection-of.js")('Map');
  
  
  /***/ }),
  
  /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.map.to-json.js":
  /*!********************************************************************************************!*\
    !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.map.to-json.js ***!
    \********************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
  
  $export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_collection-to-json.js")('Map') });
  
  
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
  
  /***/ "./node_modules/lodash/_DataView.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_DataView.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
      root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
  
  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root, 'DataView');
  
  module.exports = DataView;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_Hash.js":
  /*!**************************************!*\
    !*** ./node_modules/lodash/_Hash.js ***!
    \**************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
      hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
      hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
      hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
      hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");
  
  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
  
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  
  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  
  module.exports = Hash;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_ListCache.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_ListCache.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
      listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
      listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
      listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
      listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");
  
  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
  
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  
  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  
  module.exports = ListCache;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_Map.js":
  /*!*************************************!*\
    !*** ./node_modules/lodash/_Map.js ***!
    \*************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
      root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
  
  /* Built-in method references that are verified to be native. */
  var Map = getNative(root, 'Map');
  
  module.exports = Map;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_MapCache.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_MapCache.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
      mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
      mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
      mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
      mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");
  
  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
  
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  
  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  
  module.exports = MapCache;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_Promise.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_Promise.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
      root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
  
  /* Built-in method references that are verified to be native. */
  var Promise = getNative(root, 'Promise');
  
  module.exports = Promise;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_Set.js":
  /*!*************************************!*\
    !*** ./node_modules/lodash/_Set.js ***!
    \*************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
      root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
  
  /* Built-in method references that are verified to be native. */
  var Set = getNative(root, 'Set');
  
  module.exports = Set;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_SetCache.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_SetCache.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
      setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
      setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");
  
  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;
  
    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }
  
  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  
  module.exports = SetCache;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_Stack.js":
  /*!***************************************!*\
    !*** ./node_modules/lodash/_Stack.js ***!
    \***************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
      stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
      stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
      stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
      stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
      stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");
  
  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  
  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  
  module.exports = Stack;
  
  
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
  
  /***/ "./node_modules/lodash/_Uint8Array.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_Uint8Array.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
  
  /** Built-in value references. */
  var Uint8Array = root.Uint8Array;
  
  module.exports = Uint8Array;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_WeakMap.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_WeakMap.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
      root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
  
  /* Built-in method references that are verified to be native. */
  var WeakMap = getNative(root, 'WeakMap');
  
  module.exports = WeakMap;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_arrayFilter.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_arrayFilter.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];
  
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  
  module.exports = arrayFilter;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_arrayLikeKeys.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
    \***********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
      isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
      isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
      isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
      isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
      isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;
  
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }
  
  module.exports = arrayLikeKeys;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_arrayMap.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_arrayMap.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);
  
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  
  module.exports = arrayMap;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_arrayPush.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_arrayPush.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;
  
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  
  module.exports = arrayPush;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_arraySome.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_arraySome.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;
  
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  
  module.exports = arraySome;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_assocIndexOf.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_assocIndexOf.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
  
  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  
  module.exports = assocIndexOf;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseFindIndex.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash/_baseFindIndex.js ***!
    \***********************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);
  
    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }
  
  module.exports = baseFindIndex;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseFlatten.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_baseFlatten.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
      isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");
  
  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
        length = array.length;
  
    predicate || (predicate = isFlattenable);
    result || (result = []);
  
    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  
  module.exports = baseFlatten;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseGet.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_baseGet.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
      toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
  
  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = castPath(path, object);
  
    var index = 0,
        length = path.length;
  
    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return (index && index == length) ? object : undefined;
  }
  
  module.exports = baseGet;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseGetAllKeys.js":
  /*!************************************************!*\
    !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
      isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");
  
  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  
  module.exports = baseGetAllKeys;
  
  
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
  
  /***/ "./node_modules/lodash/_baseHasIn.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_baseHasIn.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }
  
  module.exports = baseHasIn;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseIsArguments.js":
  /*!*************************************************!*\
    !*** ./node_modules/lodash/_baseIsArguments.js ***!
    \*************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
      isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
  
  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';
  
  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  
  module.exports = baseIsArguments;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseIsEqual.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_baseIsEqual.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
      isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
  
  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  
  module.exports = baseIsEqual;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseIsEqualDeep.js":
  /*!*************************************************!*\
    !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
    \*************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
      equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
      equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
      equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
      getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
      isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
      isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
      isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");
  
  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1;
  
  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      objectTag = '[object Object]';
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = objIsArr ? arrayTag : getTag(object),
        othTag = othIsArr ? arrayTag : getTag(other);
  
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
  
    var objIsObj = objTag == objectTag,
        othIsObj = othTag == objectTag,
        isSameTag = objTag == othTag;
  
    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack);
      return (objIsArr || isTypedArray(object))
        ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
  
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;
  
        stack || (stack = new Stack);
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  
  module.exports = baseIsEqualDeep;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseIsMatch.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_baseIsMatch.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
      baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");
  
  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;
  
  /**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;
  
    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if ((noCustomizer && data[2])
            ? data[1] !== object[data[0]]
            : !(data[0] in object)
          ) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];
  
      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack;
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === undefined
              ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
              : result
            )) {
          return false;
        }
      }
    }
    return true;
  }
  
  module.exports = baseIsMatch;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseIsNative.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_baseIsNative.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
      isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
      isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
      toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");
  
  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  
  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  
  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto = Object.prototype;
  
  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );
  
  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  
  module.exports = baseIsNative;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseIsTypedArray.js":
  /*!**************************************************!*\
    !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
    \**************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
      isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
      isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
  
  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';
  
  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  
  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;
  
  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) &&
      isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  
  module.exports = baseIsTypedArray;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseIteratee.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_baseIteratee.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
      baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
      identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
      isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
      property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");
  
  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if (typeof value == 'object') {
      return isArray(value)
        ? baseMatchesProperty(value[0], value[1])
        : baseMatches(value);
    }
    return property(value);
  }
  
  module.exports = baseIteratee;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseKeys.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_baseKeys.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
      nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }
  
  module.exports = baseKeys;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseMatches.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_baseMatches.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
      getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
      matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");
  
  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }
  
  module.exports = baseMatches;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseMatchesProperty.js":
  /*!*****************************************************!*\
    !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
    \*****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
      get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
      hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
      isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
      isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
      matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
      toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
  
  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;
  
  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey(path), srcValue);
    }
    return function(object) {
      var objValue = get(object, path);
      return (objValue === undefined && objValue === srcValue)
        ? hasIn(object, path)
        : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
  }
  
  module.exports = baseMatchesProperty;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseProperty.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_baseProperty.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }
  
  module.exports = baseProperty;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_basePropertyDeep.js":
  /*!**************************************************!*\
    !*** ./node_modules/lodash/_basePropertyDeep.js ***!
    \**************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");
  
  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet(object, path);
    };
  }
  
  module.exports = basePropertyDeep;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseTimes.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_baseTimes.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);
  
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  
  module.exports = baseTimes;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseToString.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_baseToString.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
      arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
      isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
      isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
  
  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;
  
  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;
  
  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }
  
  module.exports = baseToString;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_baseUnary.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_baseUnary.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  
  module.exports = baseUnary;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_cacheHas.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_cacheHas.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  
  module.exports = cacheHas;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_castPath.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_castPath.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
      isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
      stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
      toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");
  
  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString(value));
  }
  
  module.exports = castPath;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_coreJsData.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_coreJsData.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
  
  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];
  
  module.exports = coreJsData;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_createFind.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_createFind.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
      isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
      keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");
  
  /**
   * Creates a `_.find` or `_.findLast` function.
   *
   * @private
   * @param {Function} findIndexFunc The function to find the collection index.
   * @returns {Function} Returns the new find function.
   */
  function createFind(findIndexFunc) {
    return function(collection, predicate, fromIndex) {
      var iterable = Object(collection);
      if (!isArrayLike(collection)) {
        var iteratee = baseIteratee(predicate, 3);
        collection = keys(collection);
        predicate = function(key) { return iteratee(iterable[key], key, iterable); };
      }
      var index = findIndexFunc(collection, predicate, fromIndex);
      return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
    };
  }
  
  module.exports = createFind;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_equalArrays.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_equalArrays.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
      arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
      cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");
  
  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;
  
  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        arrLength = array.length,
        othLength = other.length;
  
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1,
        result = true,
        seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
  
    stack.set(array, other);
    stack.set(other, array);
  
    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];
  
      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (!arraySome(other, function(othValue, othIndex) {
              if (!cacheHas(seen, othIndex) &&
                  (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
          result = false;
          break;
        }
      } else if (!(
            arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack)
          )) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
  }
  
  module.exports = equalArrays;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_equalByTag.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_equalByTag.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
      Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
      eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
      equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
      mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
      setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");
  
  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;
  
  /** `Object#toString` result references. */
  var boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]';
  
  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]';
  
  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
  
  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if ((object.byteLength != other.byteLength) ||
            (object.byteOffset != other.byteOffset)) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
  
      case arrayBufferTag:
        if ((object.byteLength != other.byteLength) ||
            !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }
        return true;
  
      case boolTag:
      case dateTag:
      case numberTag:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq(+object, +other);
  
      case errorTag:
        return object.name == other.name && object.message == other.message;
  
      case regexpTag:
      case stringTag:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == (other + '');
  
      case mapTag:
        var convert = mapToArray;
  
      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert || (convert = setToArray);
  
        if (object.size != other.size && !isPartial) {
          return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;
  
        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;
  
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  
  module.exports = equalByTag;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_equalObjects.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_equalObjects.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");
  
  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1;
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        objProps = getAllKeys(object),
        objLength = objProps.length,
        othProps = getAllKeys(other),
        othLength = othProps.length;
  
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
  
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];
  
      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack);
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (!(compared === undefined
            ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
            : compared
          )) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;
  
      // Non `Object` object instances with different constructors are not equal.
      if (objCtor != othCtor &&
          ('constructor' in object && 'constructor' in other) &&
          !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
            typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
  }
  
  module.exports = equalObjects;
  
  
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
  
  /***/ "./node_modules/lodash/_getAllKeys.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_getAllKeys.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
      getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
      keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");
  
  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }
  
  module.exports = getAllKeys;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_getMapData.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_getMapData.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");
  
  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }
  
  module.exports = getMapData;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_getMatchData.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_getMatchData.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
      keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");
  
  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData(object) {
    var result = keys(object),
        length = result.length;
  
    while (length--) {
      var key = result[length],
          value = object[key];
  
      result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
  }
  
  module.exports = getMatchData;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_getNative.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_getNative.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
      getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");
  
  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }
  
  module.exports = getNative;
  
  
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
  
  /***/ "./node_modules/lodash/_getSymbols.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_getSymbols.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
      stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /** Built-in value references. */
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  
  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  
  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  
  module.exports = getSymbols;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_getTag.js":
  /*!****************************************!*\
    !*** ./node_modules/lodash/_getTag.js ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
      Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
      Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
      Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
      WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
      baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
      toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");
  
  /** `Object#toString` result references. */
  var mapTag = '[object Map]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      setTag = '[object Set]',
      weakMapTag = '[object WeakMap]';
  
  var dataViewTag = '[object DataView]';
  
  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map),
      promiseCtorString = toSource(Promise),
      setCtorString = toSource(Set),
      weakMapCtorString = toSource(WeakMap);
  
  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;
  
  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
      (Map && getTag(new Map) != mapTag) ||
      (Promise && getTag(Promise.resolve()) != promiseTag) ||
      (Set && getTag(new Set) != setTag) ||
      (WeakMap && getTag(new WeakMap) != weakMapTag)) {
    getTag = function(value) {
      var result = baseGetTag(value),
          Ctor = result == objectTag ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : '';
  
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag;
          case mapCtorString: return mapTag;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag;
          case weakMapCtorString: return weakMapTag;
        }
      }
      return result;
    };
  }
  
  module.exports = getTag;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_getValue.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_getValue.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }
  
  module.exports = getValue;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_hasPath.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_hasPath.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
      isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
      isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
      isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
      isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
      toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
  
  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
  
    var index = -1,
        length = path.length,
        result = false;
  
    while (++index < length) {
      var key = toKey(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) &&
      (isArray(object) || isArguments(object));
  }
  
  module.exports = hasPath;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_hashClear.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_hashClear.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
  
  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  
  module.exports = hashClear;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_hashDelete.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_hashDelete.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  
  module.exports = hashDelete;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_hashGet.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_hashGet.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
  
  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }
  
  module.exports = hashGet;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_hashHas.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_hashHas.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
  }
  
  module.exports = hashHas;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_hashSet.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_hashSet.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
  
  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  
  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
    return this;
  }
  
  module.exports = hashSet;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_isFlattenable.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash/_isFlattenable.js ***!
    \***********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
      isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
      isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");
  
  /** Built-in value references. */
  var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
  
  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */
  function isFlattenable(value) {
    return isArray(value) || isArguments(value) ||
      !!(spreadableSymbol && value && value[spreadableSymbol]);
  }
  
  module.exports = isFlattenable;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_isIndex.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_isIndex.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;
  
  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  
  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
  
    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }
  
  module.exports = isIndex;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_isKey.js":
  /*!***************************************!*\
    !*** ./node_modules/lodash/_isKey.js ***!
    \***************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
      isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
  
  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;
  
  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
        value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object));
  }
  
  module.exports = isKey;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_isKeyable.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/_isKeyable.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }
  
  module.exports = isKeyable;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_isMasked.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_isMasked.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");
  
  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());
  
  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }
  
  module.exports = isMasked;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_isPrototype.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_isPrototype.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
  
    return value === proto;
  }
  
  module.exports = isPrototype;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_isStrictComparable.js":
  /*!****************************************************!*\
    !*** ./node_modules/lodash/_isStrictComparable.js ***!
    \****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
  
  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }
  
  module.exports = isStrictComparable;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_listCacheClear.js":
  /*!************************************************!*\
    !*** ./node_modules/lodash/_listCacheClear.js ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  
  module.exports = listCacheClear;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_listCacheDelete.js":
  /*!*************************************************!*\
    !*** ./node_modules/lodash/_listCacheDelete.js ***!
    \*************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
  
  /** Used for built-in method references. */
  var arrayProto = Array.prototype;
  
  /** Built-in value references. */
  var splice = arrayProto.splice;
  
  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);
  
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  
  module.exports = listCacheDelete;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_listCacheGet.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_listCacheGet.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
  
  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);
  
    return index < 0 ? undefined : data[index][1];
  }
  
  module.exports = listCacheGet;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_listCacheHas.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_listCacheHas.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
  
  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  
  module.exports = listCacheHas;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_listCacheSet.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_listCacheSet.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
  
  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);
  
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  
  module.exports = listCacheSet;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_mapCacheClear.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash/_mapCacheClear.js ***!
    \***********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
      ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
      Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");
  
  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map || ListCache),
      'string': new Hash
    };
  }
  
  module.exports = mapCacheClear;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_mapCacheDelete.js":
  /*!************************************************!*\
    !*** ./node_modules/lodash/_mapCacheDelete.js ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
  
  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  
  module.exports = mapCacheDelete;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_mapCacheGet.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_mapCacheGet.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
  
  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  
  module.exports = mapCacheGet;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_mapCacheHas.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_mapCacheHas.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
  
  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  
  module.exports = mapCacheHas;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_mapCacheSet.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_mapCacheSet.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
  
  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;
  
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  
  module.exports = mapCacheSet;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_mapToArray.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_mapToArray.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);
  
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  
  module.exports = mapToArray;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_matchesStrictComparable.js":
  /*!*********************************************************!*\
    !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue &&
        (srcValue !== undefined || (key in Object(object)));
    };
  }
  
  module.exports = matchesStrictComparable;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_memoizeCapped.js":
  /*!***********************************************!*\
    !*** ./node_modules/lodash/_memoizeCapped.js ***!
    \***********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");
  
  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;
  
  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
  
    var cache = result.cache;
    return result;
  }
  
  module.exports = memoizeCapped;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_nativeCreate.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_nativeCreate.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");
  
  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');
  
  module.exports = nativeCreate;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_nativeKeys.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_nativeKeys.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");
  
  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys = overArg(Object.keys, Object);
  
  module.exports = nativeKeys;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_nodeUtil.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_nodeUtil.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
  
  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
  
  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
  
  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;
  
  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;
  
  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;
  
      if (types) {
        return types;
      }
  
      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());
  
  module.exports = nodeUtil;
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))
  
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
  
  /***/ "./node_modules/lodash/_overArg.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/_overArg.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  
  module.exports = overArg;
  
  
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
  
  /***/ "./node_modules/lodash/_setCacheAdd.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_setCacheAdd.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  
  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  
  module.exports = setCacheAdd;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_setCacheHas.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_setCacheHas.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  
  module.exports = setCacheHas;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_setToArray.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_setToArray.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);
  
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  
  module.exports = setToArray;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_stackClear.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/_stackClear.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");
  
  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
  }
  
  module.exports = stackClear;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_stackDelete.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_stackDelete.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);
  
    this.size = data.size;
    return result;
  }
  
  module.exports = stackDelete;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_stackGet.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_stackGet.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }
  
  module.exports = stackGet;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_stackHas.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_stackHas.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }
  
  module.exports = stackHas;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_stackSet.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_stackSet.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
      Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
      MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");
  
  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;
  
  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  
  module.exports = stackSet;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_stringToPath.js":
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_stringToPath.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");
  
  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  
  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;
  
  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  });
  
  module.exports = stringToPath;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_toKey.js":
  /*!***************************************!*\
    !*** ./node_modules/lodash/_toKey.js ***!
    \***************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
  
  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;
  
  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }
  
  module.exports = toKey;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/_toSource.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/_toSource.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /** Used for built-in method references. */
  var funcProto = Function.prototype;
  
  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;
  
  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }
  
  module.exports = toSource;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/eq.js":
  /*!***********************************!*\
    !*** ./node_modules/lodash/eq.js ***!
    \***********************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }
  
  module.exports = eq;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/find.js":
  /*!*************************************!*\
    !*** ./node_modules/lodash/find.js ***!
    \*************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var createFind = __webpack_require__(/*! ./_createFind */ "./node_modules/lodash/_createFind.js"),
      findIndex = __webpack_require__(/*! ./findIndex */ "./node_modules/lodash/findIndex.js");
  
  /**
   * Iterates over elements of `collection`, returning the first element
   * `predicate` returns truthy for. The predicate is invoked with three
   * arguments: (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {*} Returns the matched element, else `undefined`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'age': 36, 'active': true },
   *   { 'user': 'fred',    'age': 40, 'active': false },
   *   { 'user': 'pebbles', 'age': 1,  'active': true }
   * ];
   *
   * _.find(users, function(o) { return o.age < 40; });
   * // => object for 'barney'
   *
   * // The `_.matches` iteratee shorthand.
   * _.find(users, { 'age': 1, 'active': true });
   * // => object for 'pebbles'
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.find(users, ['active', false]);
   * // => object for 'fred'
   *
   * // The `_.property` iteratee shorthand.
   * _.find(users, 'active');
   * // => object for 'barney'
   */
  var find = createFind(findIndex);
  
  module.exports = find;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/findIndex.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/findIndex.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
      baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
      toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");
  
  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;
  
  /**
   * This method is like `_.find` except that it returns the index of the first
   * element `predicate` returns truthy for instead of the element itself.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the found element, else `-1`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * _.findIndex(users, function(o) { return o.user == 'barney'; });
   * // => 0
   *
   * // The `_.matches` iteratee shorthand.
   * _.findIndex(users, { 'user': 'fred', 'active': false });
   * // => 1
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findIndex(users, ['active', false]);
   * // => 0
   *
   * // The `_.property` iteratee shorthand.
   * _.findIndex(users, 'active');
   * // => 2
   */
  function findIndex(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    var index = fromIndex == null ? 0 : toInteger(fromIndex);
    if (index < 0) {
      index = nativeMax(length + index, 0);
    }
    return baseFindIndex(array, baseIteratee(predicate, 3), index);
  }
  
  module.exports = findIndex;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/flatten.js":
  /*!****************************************!*\
    !*** ./node_modules/lodash/flatten.js ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");
  
  /**
   * Flattens `array` a single level deep.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, [3, [4]], 5]]);
   * // => [1, 2, [3, [4]], 5]
   */
  function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
  }
  
  module.exports = flatten;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/get.js":
  /*!************************************!*\
    !*** ./node_modules/lodash/get.js ***!
    \************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");
  
  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }
  
  module.exports = get;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/hasIn.js":
  /*!**************************************!*\
    !*** ./node_modules/lodash/hasIn.js ***!
    \**************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
      hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");
  
  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */
  function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }
  
  module.exports = hasIn;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/identity.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/identity.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }
  
  module.exports = identity;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/isArguments.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/isArguments.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
      isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /** Built-in value references. */
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  
  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };
  
  module.exports = isArguments;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/isArray.js":
  /*!****************************************!*\
    !*** ./node_modules/lodash/isArray.js ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;
  
  module.exports = isArray;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/isArrayLike.js":
  /*!********************************************!*\
    !*** ./node_modules/lodash/isArrayLike.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
      isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");
  
  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  
  module.exports = isArrayLike;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/isBuffer.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/isBuffer.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
      stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");
  
  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
  
  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
  
  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;
  
  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined;
  
  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
  
  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;
  
  module.exports = isBuffer;
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))
  
  /***/ }),
  
  /***/ "./node_modules/lodash/isFunction.js":
  /*!*******************************************!*\
    !*** ./node_modules/lodash/isFunction.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
      isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
  
  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';
  
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  
  module.exports = isFunction;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/isLength.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/isLength.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;
  
  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  
  module.exports = isLength;
  
  
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
  
  /***/ "./node_modules/lodash/isTypedArray.js":
  /*!*********************************************!*\
    !*** ./node_modules/lodash/isTypedArray.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
      baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
      nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");
  
  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  
  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  
  module.exports = isTypedArray;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/keys.js":
  /*!*************************************!*\
    !*** ./node_modules/lodash/keys.js ***!
    \*************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
      baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
      isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");
  
  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  
  module.exports = keys;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/memoize.js":
  /*!****************************************!*\
    !*** ./node_modules/lodash/memoize.js ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");
  
  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';
  
  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;
  
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
  }
  
  // Expose `MapCache`.
  memoize.Cache = MapCache;
  
  module.exports = memoize;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/property.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/property.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
      basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
      isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
      toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
  
  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */
  function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }
  
  module.exports = property;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/stubArray.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/stubArray.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }
  
  module.exports = stubArray;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/stubFalse.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/stubFalse.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }
  
  module.exports = stubFalse;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/toFinite.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/toFinite.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");
  
  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308;
  
  /**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = (value < 0 ? -1 : 1);
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  
  module.exports = toFinite;
  
  
  /***/ }),
  
  /***/ "./node_modules/lodash/toInteger.js":
  /*!******************************************!*\
    !*** ./node_modules/lodash/toInteger.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");
  
  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */
  function toInteger(value) {
    var result = toFinite(value),
        remainder = result % 1;
  
    return result === result ? (remainder ? result - remainder : result) : 0;
  }
  
  module.exports = toInteger;
  
  
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
  
  /***/ "./node_modules/lodash/toString.js":
  /*!*****************************************!*\
    !*** ./node_modules/lodash/toString.js ***!
    \*****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");
  
  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }
  
  module.exports = toString;
  
  
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
  
  /***/ "./node_modules/webpack/buildin/module.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/module.js ***!
    \***********************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  module.exports = function(module) {
      if (!module.webpackPolyfill) {
          module.deprecate = function() {};
          module.paths = [];
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
          module.webpackPolyfill = 1;
      }
      return module;
  };
  
  
  /***/ }),
  
  /***/ "./src/main/webapp/components/DxAccordion/js/DxAccordion.js":
  /*!******************************************************************!*\
    !*** ./src/main/webapp/components/DxAccordion/js/DxAccordion.js ***!
    \******************************************************************/
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
  
  var DxAccordion = function () {
    function DxAccordion(el) {
      var _this = this;
  
      (0, _classCallCheck3.default)(this, DxAccordion);
  
      this.element = el;
      this.allowMultiple = el.hasAttribute('data-allow-multiple');
      this.sections = el.querySelectorAll('.dxAccordion__section');
  
      this.openAccordion(this.sections[0], 0);
  
      Array.prototype.forEach.call(this.sections, function (section, i) {
        var button = section.querySelector('.dxAccordion__trigger');
        button.addEventListener('click', function (e) {
          return _this.handleClick(e, section, i);
        });
      });
    }
  
    (0, _createClass3.default)(DxAccordion, [{
      key: 'handleClick',
      value: function handleClick(e, section, index) {
        if (section.classList.contains('dxAccordion__section--active')) {
          DxAccordion.closeAccordion(section);
        } else {
          this.openAccordion(section, index);
        }
      }
    }, {
      key: 'openAccordion',
      value: function openAccordion(section, index) {
        var button = section.querySelector('.dxAccordion__trigger');
        var panel = section.querySelector('.dxAccordion__panel');
  
        button.setAttribute('aria-expanded', 'true');
        panel.removeAttribute('hidden');
        section.classList.add('dxAccordion__section--active');
  
        if (!this.allowMultiple) {
          Array.prototype.forEach.call(this.sections, function (sect, i) {
            if (i !== index && sect.classList.contains('dxAccordion__section--active')) {
              DxAccordion.closeAccordion(sect);
            }
          });
        }
      }
    }], [{
      key: 'closeAccordion',
      value: function closeAccordion(section) {
        var button = section.querySelector('.dxAccordion__trigger');
        var panel = section.querySelector('.dxAccordion__panel');
  
        button.setAttribute('aria-expanded', 'false');
        panel.setAttribute('hidden', '');
        section.classList.remove('dxAccordion__section--active');
      }
    }]);
    return DxAccordion;
  }();
  
  exports.default = DxAccordion;
  
  /***/ }),
  
  /***/ "./src/main/webapp/components/DxDropdown/js/DxDropdown.js":
  /*!****************************************************************!*\
    !*** ./src/main/webapp/components/DxDropdown/js/DxDropdown.js ***!
    \****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
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
  
  /***/ }),
  
  /***/ "./src/main/webapp/components/RulesEngineDropdown/js/CompatibilityChecker.js":
  /*!***********************************************************************************!*\
    !*** ./src/main/webapp/components/RulesEngineDropdown/js/CompatibilityChecker.js ***!
    \***********************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = CompatibilityChecker;
  
  var _flatten2 = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js");
  
  var _flatten3 = _interopRequireDefault(_flatten2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Build a list of items for a given dropdown.
   *
   * @param {string} featureName
   * @param {Array} currentUserValues - Currently selected user values.
   * @param {Array} features - List of features.
   * @return {Array} features
   */
  function CompatibilityChecker(featureName, currentUserValues, features) {
    var filteredFeatures = features.filter(function (feature) {
      var compatibility = feature.compatibility;
  
  
      if (!Array.isArray(compatibility)) {
        return true;
      }
  
      // Normalise Compatibility instructions
      var compatibilities = (0, _flatten3.default)(compatibility.map(function (_ref) {
        var refs = _ref.refs;
        return refs ? refs.split(' ') : [];
      }));
  
      var intersection = currentUserValues.filter(function (value) {
        return compatibilities.includes(value);
      });
  
      return intersection.length === currentUserValues.length;
    });
  
    if (featureName === 'specpack') {
      filteredFeatures = filteredFeatures.filter(function (feature) {
        return feature.availability !== 'excluded';
      });
    }
  
    return filteredFeatures;
  }
  
  /***/ }),
  
  /***/ "./src/main/webapp/components/RulesEngineDropdown/js/Queue.js":
  /*!********************************************************************!*\
    !*** ./src/main/webapp/components/RulesEngineDropdown/js/Queue.js ***!
    \********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  exports.default = Queue;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Callback to process an item in a Queue.
   *
   * @callback workCallback
   * @param {any} queuedItem - currently queued item in a provided items list.
   * @param {number} index - Index of Item.
   * @param {boolean} cancel - Queue cancellation status.
   */
  
  /**
   * Callback to fire when Queue is completed.
   *
   * @callback onCompleteCallback
   */
  
  /**
   * Vanilla Cancellable Queue implementation.
   *
   * @param {Object}              params
   * @param {Array.<any>}         params.items      The list of items to go through one by one.
   * @param {workCallback}        params.callback   The callback to process item.
   * @param {onCompleteCallback}  params.onComplete The callback to fire when Queue is finish process all items.
   */
  function Queue(_ref) {
    var _this = this;
  
    var items = _ref.items,
        callback = _ref.callback,
        onComplete = _ref.onComplete;
  
    var cancel = false;
  
    var queuedItems = [].concat((0, _toConsumableArray3.default)(items));
  
    var queueProcessor = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var queuedItem;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!cancel) {
                  _context.next = 2;
                  break;
                }
  
                return _context.abrupt("return", false);
  
              case 2:
                if (!(queuedItems.length === 0)) {
                  _context.next = 5;
                  break;
                }
  
                if (onComplete) {
                  onComplete();
                }
  
                return _context.abrupt("return", true);
  
              case 5:
                queuedItem = queuedItems.shift();
  
                if (!callback) {
                  _context.next = 9;
                  break;
                }
  
                _context.next = 9;
                return callback(queuedItem, cancel);
  
              case 9:
                _context.next = 11;
                return queueProcessor();
  
              case 11:
                return _context.abrupt("return", true);
  
              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));
  
      return function queueProcessor() {
        return _ref2.apply(this, arguments);
      };
    }();
  
    queueProcessor();
  
    return function () {
      cancel = true;
    };
  }
  
  /***/ }),
  
  /***/ "./src/main/webapp/components/RulesEngineDropdown/js/RulesEngineDropdown.js":
  /*!**********************************************************************************!*\
    !*** ./src/main/webapp/components/RulesEngineDropdown/js/RulesEngineDropdown.js ***!
    \**********************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _map = __webpack_require__(/*! babel-runtime/core-js/map */ "./node_modules/babel-runtime/core-js/map.js");
  
  var _map2 = _interopRequireDefault(_map);
  
  var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _rulesconnectjs = __webpack_require__(/*! @configureconnect/rulesconnectjs */ "./node_modules/@configureconnect/rulesconnectjs/es/index.js");
  
  var _get2 = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
  
  var _get3 = _interopRequireDefault(_get2);
  
  var _aria = __webpack_require__(/*! ../../../resources/dev/js/utils/aria */ "./src/main/webapp/resources/dev/js/utils/aria.js");
  
  var _DxDropdown = __webpack_require__(/*! ../../DxDropdown/js/DxDropdown */ "./src/main/webapp/components/DxDropdown/js/DxDropdown.js");
  
  var _DxDropdown2 = _interopRequireDefault(_DxDropdown);
  
  var _Queue = __webpack_require__(/*! ./Queue */ "./src/main/webapp/components/RulesEngineDropdown/js/Queue.js");
  
  var _Queue2 = _interopRequireDefault(_Queue);
  
  var _CompatibilityChecker = __webpack_require__(/*! ./CompatibilityChecker */ "./src/main/webapp/components/RulesEngineDropdown/js/CompatibilityChecker.js");
  
  var _CompatibilityChecker2 = _interopRequireDefault(_CompatibilityChecker);
  
  var _helpers = __webpack_require__(/*! ./helpers */ "./src/main/webapp/components/RulesEngineDropdown/js/helpers.js");
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var dxDropdownActiveClass = 'dxDropdown__list-item-link--active';
  
  var RulesEngineDropdown = function () {
    function RulesEngineDropdown(el) {
      var baseUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  
      var _this = this;
  
      var lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';
      var onFinish = arguments[3];
      (0, _classCallCheck3.default)(this, RulesEngineDropdown);
      this.iso2Lang = 'en';
      this.baseURL = '';
      this._supportedFeatureList = ['bodystyle', 'model', 'engine', 'specpack', 'product'];
      this._supportedFeatureElements = new _map2.default();
      this._suppressedViews = [];
      this._queue = null;
      this._rc = new _rulesconnectjs.RulesConnect();
  
      this.requestAndProcessDXDerivativesView = function (featureName) {
        var isCancelled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  
        return new _promise2.default(function () {
          var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
            var data, activeFeatures, nextIndex, nextFeatureName, featuresList, featureGroup, dropdown, features, values, i, value;
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!isCancelled) {
                      _context.next = 2;
                      break;
                    }
  
                    return _context.abrupt('return', resolve());
  
                  case 2:
                    _context.prev = 2;
                    _context.next = 5;
                    return _this._rc.loadJsonp(_this.buildRuleEngineUrl(featureName));
  
                  case 5:
                    data = _context.sent;
                    activeFeatures = _this.getActiveFeatures();
                    nextIndex = featureName ? activeFeatures.findIndex(function (f) {
                      return f === featureName;
                    }) + 1 : 0;
                    nextFeatureName = activeFeatures[nextIndex];
  
                    if (nextFeatureName) {
                      _context.next = 11;
                      break;
                    }
  
                    return _context.abrupt('return', resolve());
  
                  case 11:
                    featuresList = (0, _get3.default)(data, 'feature-dictionary.feature-list', []) || [];
                    featureGroup = featuresList.filter(function (feature) {
                      return feature.name.toLowerCase() === nextFeatureName;
                    }).shift();
  
                    if (!(!featureGroup || !Array.isArray(featureGroup.feature))) {
                      _context.next = 15;
                      break;
                    }
  
                    return _context.abrupt('return', resolve());
  
                  case 15:
                    dropdown = _this.getDropdown(nextFeatureName);
  
                    if (dropdown) {
                      _context.next = 18;
                      break;
                    }
  
                    return _context.abrupt('return', resolve());
  
                  case 18:
  
                    // Build Features for Dropdown
                    features = featureGroup.feature;
  
                    // Find users selection
  
                    values = [];
  
                    for (i = 0; i < nextIndex; i += 1) {
                      value = _this.getDropdownValue(activeFeatures[i]);
  
  
                      if (value) {
                        values.push(value);
                      }
                    }
  
                    // Filter By Compatibility
                    features = (0, _CompatibilityChecker2.default)(nextFeatureName, values, features);
  
                    features = features.map(function (feature) {
                      return {
                        id: feature.id,
                        description: feature.description[_this.iso2Lang] || feature.description.en || ''
                      };
                    });
  
                    _this.buildDropdown(nextFeatureName, dropdown, features);
                    _context.next = 29;
                    break;
  
                  case 26:
                    _context.prev = 26;
                    _context.t0 = _context['catch'](2);
                    return _context.abrupt('return', reject(_context.t0));
  
                  case 29:
                    return _context.abrupt('return', resolve());
  
                  case 30:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this, [[2, 26]]);
          }));
  
          return function (_x4, _x5) {
            return _ref.apply(this, arguments);
          };
        }());
      };
  
      this.onFinish = function () {
        var dropdownsContainer = _this.element.querySelector('.RulesEngineDropdown__dropdowns');
        dropdownsContainer.setAttribute('data-items', dropdownsContainer.children.length);
      };
  
      this.element = el;
  
      this.baseURL = baseUrl;
      this.iso2Lang = lang;
  
      this._setupFeaturesDOM();
  
      // Inform parent component that we are ready and all drop downs are filled.
      this.onChange(null, function () {
        _this.onFinish();
        onFinish();
      });
    }
  
    /** *
     * Fires when user select a new value from Rule Engine Dropdown and
     * chain the automatic selections to next dropdown by building the options from Rule Engine.
     *
     * @param {string} selectedFeature  Key/ID of feature dropdown
     * @param {Function} onComplete  Callback
     */
  
  
    // feature-dictionary.property.SuppressViews
    // Currently handled by Backend.
  
  
    (0, _createClass3.default)(RulesEngineDropdown, [{
      key: 'onChange',
      value: function onChange(selectedFeature, onComplete) {
        // Reset Existing Queue
        if (this._queue) {
          this._queue();
        }
  
        this._queue = (0, _Queue2.default)({
          items: this.getFeaturesToProcess(selectedFeature),
          callback: this.requestAndProcessDXDerivativesView,
          onComplete: onComplete
        });
      }
  
      /** *
       * Get dropdown by Feature Name.
       *
       * @param {string} featureName
       * @return {boolean|HTMLElement}
       */
  
    }, {
      key: 'getDropdown',
      value: function getDropdown(featureName) {
        if (!this._supportedFeatureElements.has(featureName)) {
          return false;
        }
  
        return this._supportedFeatureElements.get(featureName);
      }
  
      /** *
       * Get value of a dropdown by Feature Name.
       *
       * @param {string} featureName
       * @return {boolean|string}
       */
  
    }, {
      key: 'getDropdownValue',
      value: function getDropdownValue(featureName) {
        var dropdown = this.getDropdown(featureName);
  
        if (!dropdown) {
          return false;
        }
  
        return dropdown.getAttribute('data-id');
      }
  
      /**
       * Get all the available features for current nameplate.
       *
       * @param {string} selectedFeature
       */
  
    }, {
      key: 'getActiveFeatures',
      value: function getActiveFeatures(selectedFeature) {
        var _this2 = this;
  
        var searchIndex = this._supportedFeatureList.findIndex(function (f) {
          return f === selectedFeature;
        });
        var startingIndex = searchIndex === -1 ? 0 : searchIndex;
  
        var features = this._supportedFeatureList.slice(startingIndex);
  
        // ignore suppressed features
        features = features.filter(function (feature) {
          return !_this2._suppressedViews.includes(feature);
        });
  
        // ignore features which cannot be map to DOM
        features = features.filter(function (feature) {
          return _this2._supportedFeatureElements.has(feature);
        });
  
        return features;
      }
  
      /**
       * Get all features for Queue to process.
       *
       * It ensure to exclude last item from the Queue (e.g. Specpack), and also add first item for initial view.
       *
       * @param {string} selectedFeature
       */
  
    }, {
      key: 'getFeaturesToProcess',
      value: function getFeaturesToProcess(selectedFeature) {
        var features = this.getActiveFeatures(selectedFeature);
        features.pop();
  
        if (!selectedFeature) {
          return [null].concat((0, _toConsumableArray3.default)(features));
        }
  
        return features;
      }
  
      /**
       * Compose an absolute Rule Engine URL based on user selection for a given filter.
       *
       * @param {string} selectedFeature
       * @return {string}
       */
  
    }, {
      key: 'buildRuleEngineUrl',
      value: function buildRuleEngineUrl(selectedFeature) {
        var searchIndex = this._supportedFeatureList.findIndex(function (f) {
          return f === selectedFeature;
        });
        var values = [];
  
        for (var i = 0; i <= searchIndex; i += 1) {
          var value = this.getDropdownValue(this._supportedFeatureList[i]);
  
          if (value) {
            values.push(value);
          }
        }
  
        // TRIM slash at the end of the URL.
        if (this.baseURL.slice(-1) === '/') {
          this.baseURL = this.baseURL.replace(/\/+$/, '');
        }
  
        return this.baseURL + '/' + values.join('_') + '.jsonp?view=dx-derivatives';
      }
  
      /**
       * Compose a Rule Engine DX Derivatives View API call based on existing selections, build drop down and automatically
       * select first option.
       *
       * This method is part of Queue Service to ensure it can be discarded if user alter their linear journey.
       *
       * @param {string} featureName
       * @param {boolean} isCancelled - Queue cancellation status.
       * @return {Promise}
       */
  
    }, {
      key: 'buildDropdown',
  
  
      /**
       * Builds a DxDropdown based on Rule Engine Features.
       *
       * @param {string} featureName
       * @param {HTMLElement} dropdown
       * @param {Array} features - List of features.
       */
      value: function buildDropdown(featureName, dropdown, features) {
        var _this3 = this;
  
        // Setup List
        RulesEngineDropdown._setupDropdownList(dropdown, features);
  
        // Setup DxDropdown
        var dxDropdown = dropdown.querySelector('.dxDropdown');
        new _DxDropdown2.default(dxDropdown); // eslint-disable-line no-new
  
        // Setup Events
        var onUserChangeEvent = function onUserChangeEvent(evt) {
          var el = evt.target;
  
  
          if (el.classList.contains('dxDropdown__list-item-link')) {
            dropdown.setAttribute('data-id', el.getAttribute('data-id'));
            dropdown.setAttribute('data-title', el.innerHTML);
  
            _this3.onChange(featureName, null);
          }
        };
  
        dropdown.addEventListener('click', onUserChangeEvent);
  
        dropdown.addEventListener('keydown', function (evt) {
          var el = evt.target;
  
          var key = evt.which || evt.keyCode;
  
          // Prevent scrolling event on body
          if (el.tagName === 'BUTTON' && key !== _aria.KeyCode.TAB) {
            evt.preventDefault();
          }
  
          if (key === _aria.KeyCode.RETURN) {
            onUserChangeEvent(evt);
          }
        });
      }
  
      /** *
       * Cache Element by Feature names.
       *
       * @private
       */
  
    }, {
      key: '_setupFeaturesDOM',
      value: function _setupFeaturesDOM() {
        var _this4 = this;
  
        this._supportedFeatureElements = new _map2.default();
  
        this._supportedFeatureList.forEach(function (featureName) {
          var featureElem = document.querySelector('[data-feature="' + featureName + '"]');
  
          if (!featureElem || !(featureElem instanceof HTMLElement)) {
            return false;
          }
  
          _this4._supportedFeatureElements.set(featureName, featureElem);
  
          return true;
        });
      }
  
      /**
       * Build a list of items for a given dropdown.
       *
       * @param {HTMLElement} dropdown
       * @param {Array} features - List of features.
       * @private
       */
  
    }], [{
      key: '_setupDropdownList',
      value: function _setupDropdownList(dropdown, features) {
        var list = dropdown.querySelector('.RulesEngineDropdown__dropdown-list');
        var listItem = dropdown.querySelector('.RulesEngineDropdown__dropdown-item');
  
        list.innerHTML = '';
  
        features.forEach(function (item, index) {
          var id = item.id,
              description = item.description;
  
  
          var newItem = listItem.cloneNode(true);
          var itemLink = newItem.querySelector('.dxDropdown__list-item-link');
          itemLink.setAttribute('data-id', id);
          itemLink.innerHTML = (0, _helpers.buildEngineDropdownMarkup)(description);
  
          if (itemLink.classList.contains(dxDropdownActiveClass)) {
            itemLink.classList.remove(dxDropdownActiveClass);
          }
  
          list.appendChild(newItem);
  
          // Auto select first option
          if (index === 0) {
            dropdown.setAttribute('data-id', id);
            dropdown.setAttribute('data-title', description);
  
            var button = dropdown.querySelector('.RulesEngineDropdown__dropdown-button');
            button.innerHTML = (0, _helpers.buildEngineDropdownMarkup)(description);
          }
        });
      }
    }]);
    return RulesEngineDropdown;
  }();
  
  exports.default = RulesEngineDropdown;
  
  /***/ }),
  
  /***/ "./src/main/webapp/components/RulesEngineDropdown/js/helpers.js":
  /*!**********************************************************************!*\
    !*** ./src/main/webapp/components/RulesEngineDropdown/js/helpers.js ***!
    \**********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  exports.buildEngineDropdownMarkup = buildEngineDropdownMarkup;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var DELIMITER = '|';
  
  function buildEngineDropdownMarkup(text) {
    if (!text || text.indexOf(DELIMITER) === -1) {
      return text;
    }
  
    var _text$split = text.split(DELIMITER),
        _text$split2 = (0, _slicedToArray3.default)(_text$split, 2),
        engine = _text$split2[0],
        consumption = _text$split2[1];
  
    return '\n  <span class="RulesEngineDropdown__engine">\n    <span class="RulesEngineDropdown__engine-label">' + engine + '</span>\n    <span class="RulesEngineDropdown__engine-consumption">' + consumption + '</span>\n  </span>';
  }
  
  /***/ }),
  
  /***/ "./src/main/webapp/components/VehicleSpecsRulesEngine/js/VehicleSpecsRulesEngine.js":
  /*!******************************************************************************************!*\
    !*** ./src/main/webapp/components/VehicleSpecsRulesEngine/js/VehicleSpecsRulesEngine.js ***!
    \******************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.VehicleSpecsRulesEngine = undefined;
  
  var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _get2 = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
  
  var _get3 = _interopRequireDefault(_get2);
  
  var _find3 = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
  
  var _find4 = _interopRequireDefault(_find3);
  
  var _RulesEngineDropdown = __webpack_require__(/*! ../../RulesEngineDropdown/js/RulesEngineDropdown */ "./src/main/webapp/components/RulesEngineDropdown/js/RulesEngineDropdown.js");
  
  var _RulesEngineDropdown2 = _interopRequireDefault(_RulesEngineDropdown);
  
  var _DxAccordion = __webpack_require__(/*! ../../DxAccordion/js/DxAccordion */ "./src/main/webapp/components/DxAccordion/js/DxAccordion.js");
  
  var _DxAccordion2 = _interopRequireDefault(_DxAccordion);
  
  var _techSpecs = __webpack_require__(/*! ../../../resources/dev/js/utils/techSpecs */ "./src/main/webapp/resources/dev/js/utils/techSpecs.js");
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var VehicleSpecsRulesEngine = exports.VehicleSpecsRulesEngine = function () {
    function VehicleSpecsRulesEngine(el) {
      (0, _classCallCheck3.default)(this, VehicleSpecsRulesEngine);
  
      this.element = el;
      this.dropdownSection = el.querySelector('.RulesEngineDropdown');
      this.specsSection = el.querySelector('.VehicleSpecsRulesEngine__specs');
      this.errorSection = el.querySelector('.VehicleSpecsRulesEngine__error');
      this.baseUrl = el.getAttribute('data-specs-url');
      this.lang = el.getAttribute('data-lang');
    }
  
    (0, _createClass3.default)(VehicleSpecsRulesEngine, [{
      key: 'init',
      value: function init() {
        var _this = this;
  
        return new _promise2.default(function (resolve) {
          var dropdownContainer = _this.dropdownSection.querySelector('.RulesEngineDropdown__dropdowns-container');
  
          if (dropdownContainer !== null) {
            var submitButton = _this.dropdownSection.querySelector('.RulesEngineDropdown__submit-button');
  
            // Wait for dropdown to finish before we can make a spec api call.
            _this.initDropdownSection().then(function () {
              var accordion = _this.specsSection.querySelector('.VehicleSpecsRulesEngine__specs-accordion');
              VehicleSpecsRulesEngine.initAccordion(accordion);
  
              _this.getData();
              submitButton.addEventListener('click', function () {
                return _this.getData();
              });
              VehicleSpecsRulesEngine.removeClass(_this.specsSection, 'VehicleSpecsRulesEngine__specs--hide');
  
              resolve();
            });
          } else {
            VehicleSpecsRulesEngine.removeClass(_this.errorSection, 'hidden');
            resolve();
          }
        });
      }
    }, {
      key: 'getData',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var bodystyleDropdown, modelDropdown, engineDropdown, specDropdown, bodystyle, model, engine, spec, url, cms, pricingUrl, productData, _find2, features, pricingData, specsData, specsFeature;
  
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  bodystyleDropdown = this.dropdownSection.querySelector('.RulesEngineDropdown__dropdown--bodystyle');
                  modelDropdown = this.dropdownSection.querySelector('.RulesEngineDropdown__dropdown--model');
                  engineDropdown = this.dropdownSection.querySelector('.RulesEngineDropdown__dropdown--engine');
                  specDropdown = this.dropdownSection.querySelector('.RulesEngineDropdown__dropdown--specpack');
  
  
                  this.setSpecsTitle(bodystyleDropdown, modelDropdown, engineDropdown, specDropdown);
  
                  bodystyle = bodystyleDropdown !== null ? bodystyleDropdown.getAttribute('data-id') + '_' : '';
                  model = modelDropdown !== null ? modelDropdown.getAttribute('data-id') + '_' : '';
                  engine = engineDropdown.getAttribute('data-id') + '_';
                  spec = specDropdown.getAttribute('data-id');
                  url = '' + this.baseUrl + bodystyle + model + engine + spec + '.jsonp?view=dx-specs';
                  cms = this.element.querySelector('#VehicleSpecsRulesEngineCms').innerHTML;
  
  
                  if (cms !== undefined && cms !== null && cms !== '') {
                    cms = JSON.parse(cms);
                  }
  
                  _context.prev = 12;
                  pricingUrl = '' + this.baseUrl + bodystyle + model + engine + spec + '.jsonp?view=dx-products';
                  _context.next = 16;
                  return (0, _techSpecs.apiCall)(pricingUrl);
  
                case 16:
                  productData = _context.sent;
                  _find2 = (0, _find4.default)((0, _get3.default)(productData, 'feature-dictionary.feature-list'), { name: 'PRODUCT' }), features = _find2.feature;
                  pricingData = features.filter(function (feature) {
                    return feature.availability === 'default' || feature.availability === 'selected';
                  });
                  _context.next = 21;
                  return (0, _techSpecs.apiCall)(url, cms);
  
                case 21:
                  specsData = _context.sent;
                  specsFeature = (0, _find4.default)((0, _get3.default)(specsData, 'feature-dictionary.feature-list'), { name: 'PRODUCT' });
  
                  specsFeature.feature = pricingData;
  
                  this.onSuccess(specsData, cms);
                  _context.next = 30;
                  break;
  
                case 27:
                  _context.prev = 27;
                  _context.t0 = _context['catch'](12);
  
                  this.onError();
  
                case 30:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[12, 27]]);
        }));
  
        function getData() {
          return _ref.apply(this, arguments);
        }
  
        return getData;
      }()
    }, {
      key: 'onSuccess',
      value: function onSuccess(data, cms) {
        (0, _techSpecs.buildAccordion)(data, this.element, 'VehicleSpecsRulesEngine__specs-accordion', this.lang, cms, this.onPricingError.bind(this));
        VehicleSpecsRulesEngine.addClass(this.errorSection, 'hidden');
        this.showSpecs();
      }
    }, {
      key: 'onError',
      value: function onError() {
        VehicleSpecsRulesEngine.removeClass(this.errorSection, 'hidden');
        this.hideSpecs();
      }
    }, {
      key: 'onPricingError',
      value: function onPricingError(errMessage) {
        this.errorSection.setAttribute('data-error', errMessage);
      }
    }, {
      key: 'setSpecsTitle',
      value: function setSpecsTitle(bodystyle, model, engine, spec) {
        var bodystyleText = bodystyle !== null ? bodystyle.getAttribute('data-title') : '';
        var engineText = engine.getAttribute('data-title');
        var specText = spec.getAttribute('data-title');
  
        var specsTitleText = bodystyleText + ' | ' + specText;
        specsTitleText = VehicleSpecsRulesEngine.replaceAll(specsTitleText, '-', '&#8209;');
  
        var engineTitleText = VehicleSpecsRulesEngine.replaceAll(engineText, '-', '&#8209;');
  
        var specsTitle = this.element.querySelector('.VehicleSpecsRulesEngine__specs-title');
        specsTitle.innerHTML = this.hasMultipleBodyStyles() ? specsTitleText : specText;
  
        var engineTitle = this.element.querySelector('.VehicleSpecsRulesEngine__specs-engine');
        engineTitle.innerHTML = engineTitleText;
      }
    }, {
      key: 'hasMultipleBodyStyles',
      value: function hasMultipleBodyStyles() {
        var bodystyles = this.element.querySelector('.RulesEngineDropdown__dropdown--bodystyle');
  
        if (!bodystyles) {
          return false;
        }
  
        var items = bodystyles.querySelectorAll('.RulesEngineDropdown__dropdown-item');
  
        return items.length > 0;
      }
    }, {
      key: 'showSpecs',
      value: function showSpecs() {
        var els = this.specsSection.querySelectorAll('.hidden');
  
        if (els.length) {
          Array.prototype.forEach.call(els, function (el) {
            VehicleSpecsRulesEngine.removeClass(el, 'hidden');
          });
        }
      }
    }, {
      key: 'hideSpecs',
      value: function hideSpecs() {
        var elsToHide = this.specsSection.querySelectorAll('.VehicleSpecsRulesEngine__specs-heading, .VehicleSpecsRulesEngine__specs-accordion');
  
        Array.prototype.forEach.call(elsToHide, function (el) {
          VehicleSpecsRulesEngine.addClass(el, 'hidden');
        });
      }
    }, {
      key: 'initDropdownSection',
      value: function initDropdownSection() {
        var _this2 = this;
  
        return new _promise2.default(function (resolve) {
          return new _RulesEngineDropdown2.default(_this2.dropdownSection, _this2.baseUrl, _this2.lang, resolve);
        });
      }
    }], [{
      key: 'replaceAll',
      value: function replaceAll(string, search, replacement) {
        return string ? string.split(search).join(replacement) : '';
      }
    }, {
      key: 'initAccordion',
      value: function initAccordion(el) {
        return new _DxAccordion2.default(el);
      }
    }, {
      key: 'removeClass',
      value: function removeClass(el, className) {
        if (el.classList.contains(className)) {
          el.classList.remove(className);
        }
      }
    }, {
      key: 'addClass',
      value: function addClass(el, className) {
        if (!el.classList.contains(className)) {
          el.classList.add(className);
        }
      }
    }]);
    return VehicleSpecsRulesEngine;
  }();
  
  var VehicleSpecsRulesEngines = document.querySelectorAll('.cmp-vehicleSpecsRulesEngine');
  
  Array.prototype.forEach.call(VehicleSpecsRulesEngines, function (el) {
    var instance = new VehicleSpecsRulesEngine(el);
    instance.init();
  
    return instance;
  });
  
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
  
  /***/ "./src/main/webapp/resources/dev/js/utils/formatPrice.js":
  /*!***************************************************************!*\
    !*** ./src/main/webapp/resources/dev/js/utils/formatPrice.js ***!
    \***************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _rulesconnectjs = __webpack_require__(/*! @configureconnect/rulesconnectjs */ "./node_modules/@configureconnect/rulesconnectjs/es/index.js");
  
  exports.default = function (price, format) {
    var data = {
      metadata: {
        meta: {}
      }
    };
  
    if (format) {
      format = format.replace(/'?&nbsp;'?/g, ' '); // eslint-disable-line
    }
  
    data.metadata.meta['currency-format'] = format;
  
    var rc = new _rulesconnectjs.RulesConnect();
    rc.readCurrencyFormats(data);
    return rc.getFormattedPrice(price, format);
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
  
  /***/ "./src/main/webapp/resources/dev/js/utils/techSpecs.js":
  /*!*************************************************************!*\
    !*** ./src/main/webapp/resources/dev/js/utils/techSpecs.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.apiCall = exports.buildAccordion = exports.tableTemplate = exports.suppressPricingIfZero = exports.addFallbackPrice = exports.hasNotFallbackPriceType = exports.hasFallbackPriceType = undefined;
  
  var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _isNan = __webpack_require__(/*! babel-runtime/core-js/number/is-nan */ "./node_modules/babel-runtime/core-js/number/is-nan.js");
  
  var _isNan2 = _interopRequireDefault(_isNan);
  
  var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _rulesconnectjs = __webpack_require__(/*! @configureconnect/rulesconnectjs */ "./node_modules/@configureconnect/rulesconnectjs/es/index.js");
  
  var _DxAccordion = __webpack_require__(/*! ../../../../components/DxAccordion/js/DxAccordion */ "./src/main/webapp/components/DxAccordion/js/DxAccordion.js");
  
  var _DxAccordion2 = _interopRequireDefault(_DxAccordion);
  
  var _index = __webpack_require__(/*! ./index */ "./src/main/webapp/resources/dev/js/utils/index.js");
  
  var _formatPrice = __webpack_require__(/*! ./formatPrice */ "./src/main/webapp/resources/dev/js/utils/formatPrice.js");
  
  var _formatPrice2 = _interopRequireDefault(_formatPrice);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var hasFallbackPriceType = exports.hasFallbackPriceType = function hasFallbackPriceType() {
    var cmsSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var currentPriceType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var defaultPricingTypeKey = cmsSettings.defaultPricingTypeKey,
        fallbackPricingTypeKey = cmsSettings.fallbackPricingTypeKey;
  
  
    if (!defaultPricingTypeKey || !fallbackPricingTypeKey) {
      return false;
    }
  
    return currentPriceType === defaultPricingTypeKey;
  };
  
  var hasNotFallbackPriceType = exports.hasNotFallbackPriceType = function hasNotFallbackPriceType(cmsSettings, currentPriceType) {
    return !hasFallbackPriceType(cmsSettings, currentPriceType);
  };
  
  /**
   * Add fallback price support fot Tech Specs Table
   *
   * If Author has specified fallback settings and default price type does not exists from response returned
   * from Rule Engine API, then copy the fallback price information into default and return them as a new object.
   *
   * @param {Object} cmsSettings
   * @return {Object}
   */
  var addFallbackPrice = exports.addFallbackPrice = function addFallbackPrice(cmsSettings) {
    var newSettings = (0, _extends3.default)({}, cmsSettings);
    var defaultPricingTypeKey = newSettings.defaultPricingTypeKey,
        fallbackPricingTypeKey = newSettings.fallbackPricingTypeKey,
        fallbackPricingTypeLabel = newSettings.fallbackPricingTypeLabel;
  
  
    if (!defaultPricingTypeKey || !fallbackPricingTypeKey) {
      return newSettings;
    }
  
    var price = newSettings['feature-list'][0].feature[0].price;
  
  
    if (price[defaultPricingTypeKey] && price[defaultPricingTypeKey].value > 0) {
      return newSettings;
    }
  
    newSettings['feature-list'][0].feature[0].price[defaultPricingTypeKey] = price[fallbackPricingTypeKey];
  
    // Find & Replace Price Label to fallback
    if (fallbackPricingTypeLabel && Array.isArray(newSettings.table)) {
      newSettings.table = newSettings.table.map(function (item) {
        var newItem = (0, _extends3.default)({}, item);
        if (newItem.key === defaultPricingTypeKey) {
          newItem.key = fallbackPricingTypeKey;
          newItem.text = fallbackPricingTypeLabel;
        }
  
        return newItem;
      });
    }
  
    return newSettings;
  };
  
  var suppressPricingIfZero = exports.suppressPricingIfZero = function suppressPricingIfZero(pricing) {
    if (!pricing) {
      return false;
    }
  
    if (!('feature-list' in pricing) || !Array.isArray(pricing['feature-list'])) {
      return false;
    }
  
    var featurePrices = pricing['feature-list'][0].feature[0].price;
  
    (0, _keys2.default)(featurePrices).forEach(function (priceType) {
      var value = parseFloat(featurePrices[priceType].value);
  
      if ((0, _isNan2.default)(value) || value <= 0) {
        if (hasNotFallbackPriceType(pricing, priceType)) {
          throw new Error('Nameplate contains a product with 0 price.');
        }
      }
    });
  
    return false;
  };
  
  var getText = function getText(obj, lang) {
    var keys = (0, _keys2.default)(obj);
    return keys.length === 1 ? obj[keys[0]] : obj[lang];
  };
  
  var tableTemplate = exports.tableTemplate = function tableTemplate(headings, data, lang) {
    var isPricing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var format = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  
    var table = document.createElement('table');
    table.classList.add('TechSpecsTable');
  
    var caveatSection = document.createElement('div');
    caveatSection.classList.add('TechSpecsTable__caveats');
  
    Array.prototype.forEach.call(headings, function (heading, i) {
      var headingText = isPricing ? heading.text : getText(heading.description, lang);
      var priceCaveat = heading.caveat || '';
      var tdText = isPricing ? '' + (0, _formatPrice2.default)(data[heading.key].value, format) + priceCaveat : getText(data[i].description, lang);
  
      if ((0, _index.checkDefined)(headingText) && (0, _index.checkDefined)(tdText)) {
        var th = document.createElement('th');
        th.classList.add('TechSpecsTable__heading');
        th.setAttribute('scope', 'row');
        th.innerHTML = headingText;
  
        var td = document.createElement('td');
        td.classList.add('TechSpecsTable__cell');
        td.innerHTML = tdText;
  
        var row = document.createElement('tr');
        row.classList.add('TechSpecsTable__row');
        row.appendChild(th);
        row.appendChild(td);
  
        if (isPricing) {
          row.setAttribute('rule-engine-price-type', heading.key);
        }
  
        table.appendChild(row);
      } else if ((0, _index.checkDefined)(tdText)) {
        var caveatToAdd = document.createElement('p');
        caveatToAdd.classList.add('TechSpecsTable__caveat');
        caveatToAdd.innerHTML = tdText;
        caveatSection.appendChild(caveatToAdd);
      }
    });
  
    var dataSection = document.createElement('div');
    dataSection.classList.add('TechSpecsTable__container');
  
    dataSection.appendChild(table);
    dataSection.appendChild(caveatSection);
  
    return dataSection;
  };
  
  var accordionSectionTemplate = function accordionSectionTemplate(template, prefix, i) {
    var newSection = template.cloneNode(true);
    var button = newSection.querySelector('.dxAccordion__trigger');
    var panel = newSection.querySelector('.dxAccordion__panel');
    var panelId = prefix + '-panel--' + i;
    var buttonId = prefix + '-button--' + i;
  
    button.setAttribute('aria-controls', panelId);
    button.setAttribute('id', buttonId);
    panel.setAttribute('id', panelId);
    panel.setAttribute('aria-labelledby', buttonId);
  
    return newSection;
  };
  
  var accordionPricingSection = function accordionPricingSection(data, template, i, prefix, lang) {
    var newSection = accordionSectionTemplate(template, prefix, i);
    var accordionTitle = data.accordionTitle,
        table = data.table,
        format = data.format,
        caveat = data.caveat;
  
  
    var tableToAdd = tableTemplate(table, data['feature-list'][0].feature[0].price, lang, true, format, caveat);
  
    newSection.querySelector('.dxAccordion__title').innerHTML = accordionTitle;
    newSection.querySelector('.dxAccordion__panel').appendChild(tableToAdd);
  
    return newSection;
  };
  
  var buildAccordionSection = function buildAccordionSection(table, template, i, prefix, lang) {
    var section = accordionSectionTemplate(template, prefix, i);
    var datasets = table.datasets,
        labels = table.labels;
    var heading = labels.heading,
        label = labels.label;
  
    var tableToAdd = tableTemplate(label, datasets[0].data, lang);
  
    section.querySelector('.dxAccordion__title').innerHTML = getText(heading.description, lang);
    section.querySelector('.dxAccordion__panel').appendChild(tableToAdd);
  
    return section;
  };
  
  var buildAccordion = exports.buildAccordion = function buildAccordion(data, el, prefix, lang) {
    var cms = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var onPricingError = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    var specs = data.specs;
  
    var accordionContainer = el.querySelector('.dxAccordion');
    var accordionTemplate = accordionContainer.querySelector('.dxAccordion__section');
    var accordionPanel = accordionTemplate.querySelector('.dxAccordion__panel');
  
    while (accordionContainer.firstChild) {
      accordionContainer.removeChild(accordionContainer.firstChild);
    }
  
    while (accordionPanel.firstChild) {
      accordionPanel.removeChild(accordionPanel.firstChild);
    }
  
    var pricePanelPosition = parseInt(el.dataset.pricePanelPosition, 10);
    if ((0, _isNan2.default)(pricePanelPosition) || pricePanelPosition <= 1) {
      pricePanelPosition = 1;
    }
  
    var addPriceAccordionPanel = function addPriceAccordionPanel() {
      var featureDictionary = data['feature-dictionary'];
  
      if (!(0, _index.isEmpty)(featureDictionary) && !(0, _index.isEmpty)(cms)) {
        try {
          var pricing = (0, _assign2.default)(cms, data['feature-dictionary']);
  
          suppressPricingIfZero(pricing);
          accordionContainer.appendChild(accordionPricingSection(addFallbackPrice(pricing), accordionTemplate, 0, prefix, lang));
        } catch (err) {
          if (onPricingError) {
            if (err instanceof TypeError) {
              onPricingError('Component authored to show price BUT there is NO valid price for the derivatives chosen.');
            } else {
              onPricingError(err && err.message ? err.message : err.toString());
            }
          }
        }
      }
    };
  
    var count = 1;
    Array.prototype.forEach.call(specs, function (spec) {
      Array.prototype.forEach.call(spec.table, function (tab) {
        if (count === pricePanelPosition) {
          addPriceAccordionPanel();
        }
  
        accordionContainer.appendChild(buildAccordionSection(tab, accordionTemplate, count, prefix, lang));
  
        count += 1;
      });
    });
  
    return new _DxAccordion2.default(accordionContainer);
  };
  
  var rc = new _rulesconnectjs.RulesConnect();
  
  var apiCall = exports.apiCall = function apiCall(url) {
    return rc.loadJsonp(url);
  };
  
  /***/ })
  
  /******/ });