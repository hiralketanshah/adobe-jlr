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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/webapp/components/InteractiveSlider/js/InteractiveSlider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/number/is-nan.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/number/is-nan.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/number/is-nan */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/number/is-nan.js"), __esModule: true };

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

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


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

/***/ "./src/main/webapp/components/InteractiveSlider/js/InteractiveSlider.js":
/*!******************************************************************************!*\
  !*** ./src/main/webapp/components/InteractiveSlider/js/InteractiveSlider.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _isNan = __webpack_require__(/*! babel-runtime/core-js/number/is-nan */ "./node_modules/babel-runtime/core-js/number/is-nan.js");

var _isNan2 = _interopRequireDefault(_isNan);

var _aria = __webpack_require__(/*! ../../../resources/dev/js/utils/aria */ "./src/main/webapp/resources/dev/js/utils/aria.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($, window, document) {
  var InteractiveSlider = {

    // Elements containing each individual frame slide instance
    $frameSliderItems: null,
    activeframeSliderItem: {},

    activatedFrameSliderItems: [], // Array contiaing inistialised frameSliderItems
    _frameSliderItemDefaults: {
      $element: false, // The active frame's wrapping element .frameSliderItem
      $spriteSpinElement: false, // SpriteSpin jquery Element
      spriteSpinApi: false, // SpriteSpin API object
      spriteSpinData: false, // SpriteSpin data object
      dragControl: false, // DragDealer Instance
      frameCount: 0, // The number of frames
      framesSource: [], // Array containing the images that make up the frames
      frameState: { // The current position of the frame slider & direction
        position: 0,
        direction: 'forward'
      }
    },

    /**
    * The number of frames required for the frame slider to include a mid point marker
    * Each animation is 35 frames. More than that indicates two animations
    *
    * @property multiSliderThreshold
    */

    multiSliderThreshold: 34, // Accounts for array index

    /**
    * Is the user in mobile or desktop state
    * state for triggering layout changes
    *
    * @property currentState
    */
    currentState: 'desktop',

    /**
    * Is the user on touch enable devices or not
    *
    * @property touchState - 'touch' or 'notouch'
    */

    touchState: 'touch',

    /**
    * Slider Element
    *
    * @property sliderElement
    */

    sliderElementRef: '.sliderControls',

    /**
    * Slider Progress class
    *
    * @property sliderProgressRef
    */

    sliderProgressRef: '.sliderProgress',

    /**
    * Slider object, DragDealer
    *
    * @property slider
    */

    slider: false,

    /**
    * String referencing the class of the Element containing the Mobile frames with each FramseSliderItem
    *
    * @property desktopFramesRef
    */

    desktopFramesRef: '.desktopSliderFrame',

    /**
    * String referencing the class of the Element containing the Mobile frames with each FramseSliderItem
    *
    * @property mobileFramesRef
    */

    mobileFramesRef: '.mobileSliderFrame',

    /**
    * String referencing the class of the frames Element which sprite spin has been activated on
    * within each FramseSliderItem
    *
    * @property spritespinFramesRef
    */

    spritespinFramesRef: '.spritespin-instance',

    /**
    * String referencing the class of the spriteContainerContext Element which sprite spin has been activated on
    * within each FramseSliderItem
    *
    * @property spritespinFramesRef
    */

    spriteContainerContextRef: '.spriteContainerContext',

    /**
    * Sprite Spin API object, required for interacting with the sprite spin element events
    *
    * @property $spriteSpinApi
    */

    spriteSpinApi: {},

    /**
    * Sprite Spin Date object, required for updating sprite spin properties values
    *
    * @property $spriteSpinData
    */

    spriteSpinData: {},

    /**
    * Elements used for waypoint names
    * will be initialised by buildWaypointDivs()
    *
    * @property $waypointDivs
    */

    $waypointDivs: null,

    /**
    * Element for upper slider container
    *
    * @property $sliderContainerUpper
    */

    $sliderContainerUpper: null,

    /**
    * Element for slider controls
    *
    * @property $sliderControls
    */

    $sliderControls: null,

    $contentContainer: null,

    $arrangementInformationContainer: null,

    /**
    * Default number of waypoints
    *
    * @property _numberOfWaypoints
    */

    _numberOfWaypoints: 8,

    _resizeTimeout: 200,

    isOldSlider: false,

    activeContent: false,

    /**
    * Default Start Position - Currently set to 1 on load then back to 0 when scrolled into view.Changes for MENA
    *
    * @property _initialPosition
    */

    _initialPosition: 2,

    _getElements: function _getElements() {
      this.$frameSliderItems = $('.frameSliderItem', this.$element);
      this.$sliderContainerUpper = $('.sliderContainerUpper', this.$element);
      this.$sliderControls = $('.sliderContainerLower .sliderControls', this.$element);
      this.$contentContainer = $('.infoContainer .content', this.$element);
      this.$arrangementInformationContainer = $('.infoContainer .content .tabData', this.$element);
    },
    buildWaypointDivs: function buildWaypointDivs() {
      var _this = this;

      this._numberOfWaypoints = $('.infoContainerTemplates .tabData', this.$element).length;

      if ($('.infoContainerTemplates .tabData', this.$element).length === 1) {
        this.$element.addClass('old');
        this.isOldSlider = true;
        this._numberOfWaypoints = 3;
      }

      var tabData = $('.infoContainerTemplates .tabData', this.$element).get();
      if (site.rtl) {
        tabData = tabData.reverse();
      }

      $(tabData).each(function (iterator, element) {
        var desktopTitle = $(element).data('desktop-title');
        var mobileTitle = $(element).data('mobile-title');
        var el = $('\n          <button class="cmp-interactiveSlider__buttons">\n            <span class="desktop">' + desktopTitle + '</span>\n            <span class="mobile">' + mobileTitle + '</span>\n          </button>\n        ');

        $(el).on('click', function () {
          var dragControl = _this.activeframeSliderItem.dragControl;

          var ratios = dragControl.calculateStepRatios();
          dragControl.setTargetValueByOffset(dragControl.getOffsetsByRatios([ratios[iterator], 0]), false);
        });

        if (site.rtl) {
          _this.$sliderContainerUpper.prepend(el);
        } else {
          _this.$sliderContainerUpper.append(el);
        }
      });

      this.$waypointDivs = $('.sliderContainerUpper .cmp-interactiveSlider__buttons', this.$element);

      if (this.isOldSlider) {
        this._initialPosition = 1;
      }

      if (site.rtl) {
        $(this.$waypointDivs[this.$waypointDivs - this._initialPosition]).addClass('active');
      } else {
        $(this.$waypointDivs[this._initialPosition]).addClass('active');
      }

      this._setupWaypointDivs();
      this._resizeElements();

      $(window).resize(function () {
        clearTimeout(_this.waypointTimeout);

        _this.waypointTimeout = setTimeout(function () {
          _this._setupWaypointDivs(true);
          _this._resizeElements();
        }, _this._resizeTimeout);
      });
    },
    _doNewMobileResize: function _doNewMobileResize() {
      var bgTop = $('.frameSliderBg', this.$element).offset().top;
      var infoContainerBottom = $('.infoContainer', this.$element).offset().top + $('.infoContainer', this.$element).height();
      var newHeight = infoContainerBottom - bgTop;

      this.$element.find('.frameSliderItem').height(newHeight);
    },
    _resizeElements: function _resizeElements() {
      var infoContainer = $('.infoContainer', this.$element);

      if (window.innerWidth <= 740 && this.isOldSlider) {
        var infoContainerHeight = infoContainer.height();
        var frameSliderBgHeight = $('.frameSliderBg', this.$element).height();
        var newHeight = infoContainerHeight + frameSliderBgHeight;

        $('.frameSliderItem', this.$element).height(newHeight);
      } else if (window.innerWidth <= 740 && !this.isOldSlider) {
        var _frameSliderBgHeight = $('.frameSliderBg', this.$element).height();
        var _infoContainerHeight = infoContainer.height();
        var _newHeight = _frameSliderBgHeight + _infoContainerHeight;

        $('.frameSliderItem', this.$element).height(_newHeight);
      }
    },
    _setupWaypointDivs: function _setupWaypointDivs(resize) {
      var sliderFlexWidth = this.$sliderContainerUpper.width() - 64;

      if (site.rtl) {
        sliderFlexWidth = this.$sliderContainerUpper.width() - 54;
      }

      if (window.innerWidth <= 740 && !this.isOldSlider) {
        sliderFlexWidth = this.$sliderContainerUpper.width() - 20;
      }
      console.log(window.innerWidth);
      console.log(this.$sliderControls);
     
      if(window.innerWidth == 1920){
        
        
        // this.$sliderControls.css({
        
        //   width: 500      
        // });
      }
      else{
        this.$sliderControls.css({
        
          width: sliderFlexWidth
          // width:"530px"         
        });

      }

      if (!resize) {
        this._showtitle(this._initialPosition);
      } else if (this.activeframeSliderItem && this.activeframeSliderItem.dragControl) {
        this.activeframeSliderItem.dragControl.reflow();
      }
    },
    init: function init() {
      var _this2 = this;

      this._setCurrentState(); // Set desktop / mobile state
      this._getElements();
      this.buildWaypointDivs();

      this.waypointTimeout = null;
      this._setTouchState(); // Set Touch state i.e. touch device
      this._configSpriteSpin(); // Add SpriteSpin custom modules. Method is only run once.

      this.activeframeSliderItem.$element = this.$frameSliderItems.first();
      this._initDragDealer();

      var cti = $('.clickToInteract', this.$element);
      var onCtiClick = function onCtiClick() {
        cti.hide().attr('aria-hidden', 'true');
        _this2._loadingOverlay();
        _this2._rId = window.requestAnimationFrame(function () {
          _this2._drawLoader();
        });
        _this2._delayedInit();
        _this2.$element.find('.sliderContainerUpper').removeAttr('aria-hidden');

        if (_this2.isOldSlider) {
          _this2.$element.find('.sliderContainer').css('opacity', '1');
        }
      };
      cti.one('click', onCtiClick);
      cti.on('keypress', function (evt) {
        if (evt.which === _aria.KeyCode.RETURN || evt.which === _aria.KeyCode.SPACE) {
          evt.preventDefault();
          onCtiClick();
        }
      });
    },
    _slideToStartingSeat: function _slideToStartingSeat() {
      var dragControl = this.activeframeSliderItem.dragControl;


      if (site.rtl) {
        dragControl.setTargetValueByOffset(dragControl.getOffsetsByRatios([1, 1]), false);
      } else {
        dragControl.setTargetValueByOffset(dragControl.getOffsetsByRatios([0, 1]), false);
      }
    },
    _loadingOverlay: function _loadingOverlay() {
      // Overlay
      this._overlay = $("<div class='loadingOverlay'/>");
      this._overlay.appendTo(this.$element);

      // Loading Spinner
      this._canvas = document.createElement('canvas');
      this._ctx = this._canvas.getContext('2d');

      this._ctx.mozImageSmoothingEnabled = this._imageSmoothing;
      this._ctx.webkitImageSmoothingEnabled = this._imageSmoothing;
      this._ctx.msImageSmoothingEnabled = this._imageSmoothing;
      this._ctx.imageSmoothingEnabled = this._imageSmoothing;

      this._canvas.width = 100;
      this._canvas.height = 100;
      $(this._canvas).appendTo(this._overlay);

      this._loader = new Loader(this._ctx, // context to render to
      this._canvas, // canvas, for binding events
      50, // x position
      50, // y position
      44, // radius of circle
      '#fff', // stroke color,
      30, // tail length
      false, // debug on/off
      'showArrows', // behaviour to call after load is complete
      1, // fire callback when endIterator is at this value,
      this);
    },
    _drawLoader: function _drawLoader() {
      var _this3 = this;

      this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
      this._loader.draw();

      if (this._rId) {
        this._rId = window.requestAnimationFrame(function () {
          _this3._drawLoader();
        });
      }
    },
    _delayedInit: function _delayedInit() {
      // Assumption is the first frameSliderItem is the active element or going to be
      this._initframeSliderItem(this.$frameSliderItems.first());

      window.richsponsiveImage();

      // Add resize events
      this._initEvents();
    },
    _onFramesLoaded: function _onFramesLoaded() {
      var _this4 = this;

      this.activeframeSliderItem.$element.addClass('frames-loaded');

      this._rId = null;

      this._overlay.fadeOut(1000, function () {
        _this4._overlay.remove();
      });

      setTimeout(function () {
        _this4._slideToStartingSeat();
        _this4.activeframeSliderItem.dragControl.enable();
      }, 1500);
    },
    init_rtl: function init_rtl() {
      this._frameSliderItemDefaults.frameState.direction = 'backward';
    },
    _initframeSliderItem: function _initframeSliderItem($element) {
      this.activeframeSliderItem = false;

      var index = this.$frameSliderItems.index($element); // get the index of the elememt within all frameslider items;

      this.activeframeSliderItem = $.extend(true, {}, this._frameSliderItemDefaults); // Copy slide defaults into the new
      this.activeframeSliderItem.dragControl = this._dragControl; // Set drag control
      this.activeframeSliderItem.$element = $element; // Set slide element
      this.activeframeSliderItem.$infoContainerTemplates = $('.infoContainerTemplates > div', this.$element);

      // Add thee activeslideritem into array of previouslt activated slides
      this.activatedFrameSliderItems[index] = this.activeframeSliderItem;

      // Init the SpriteSpin plugin (method can be run after destroying SpriteSpin instance)
      this._initSpriteSpin();

      // Init Background Overlay effect
      this._initBackgroundOverlay(this.activeframeSliderItem);

      // Update linear keylines in headings
      $('.headingLinear', $element).Headings('linearLines');

      // Add in active class
      this.activeframeSliderItem.$element.addClass('active');
    },
    _uninitframeSliderItem: function _uninitframeSliderItem() {
      // Add in active class
      this.activeframeSliderItem.$element.removeClass('backgroundOverlayActive');

      // Clear DragDealerGte timeout

      clearTimeout(this.activeframeSliderItem.dragControl.activePauseTimout);
    },
    _configSpriteSpin: function _configSpriteSpin() {
      // Register noBehavior module: clicking/dragging SpriteSpin will do nothing
      // when it is used (to stop SpriteSpin capturing vertical scroll on mobile)

      if (typeof SpriteSpin.mods.noBehavior === 'undefined') {
        SpriteSpin.registerModule('noBehavior', {});
      }
    },
    _initSpriteSpin: function _initSpriteSpin() {
      // Call getFramesData to populate the framesSource array
      this._getFramesData();

      var spriteSpinStartFrame = this.activeframeSliderItem.frameCount / (this._numberOfWaypoints - 1) * this._initialPosition;

      this.activeframeSliderItem.frameState.position = this.activeframeSliderItem.frameCount / this._numberOfWaypoints * 2;

      // If Running under right to left reverse frames
      if (site.rtl) {
        // Change the start frame so its the end
        spriteSpinStartFrame = this.activeframeSliderItem.frameCount - spriteSpinStartFrame;

        // Also update the position value to reflect where starting back to front
        this.activeframeSliderItem.frameState.position = this.activeframeSliderItem.frameCount - this.activeframeSliderItem.frameState.position;
      }

      // Use the plugin on the target element with source
      this.activeframeSliderItem.$spriteSpinElement.spritespin({
        source: this.activeframeSliderItem.framesSource,
        frame: spriteSpinStartFrame,
        width: $(this.spriteContainerContextRef, this.activeframeSliderItem.$element).width(),
        height: $(this.spriteContainerContextRef, this.activeframeSliderItem.$element).height(),
        animate: false,
        frameTime: 40,
        behavior: 'noBehavior',
        // Canvas doesn't scale down well (image quality) so we use images on mobile
        // except Windows Mobile which performs better with canvas
        renderer: this.touchState === 'touch' && !site.utils.isWindowsPhone() ? 'image' : 'canvas',
        preloadCount: this.activeframeSliderItem.frameCount,
        onLoad: this._onFramesLoaded()
      });

      // Set API object
      this.activeframeSliderItem.spriteSpinApi = this.activeframeSliderItem.$spriteSpinElement.spritespin('api');

      // Set Data object
      this.activeframeSliderItem.spriteSpinData = this.activeframeSliderItem.$spriteSpinElement.data('spritespin');
    },
    _initDragDealer: function _initDragDealer() {
      var _this5 = this;

      var sliderInitialPosition = this._initialPosition / (this._numberOfWaypoints - 1);
      var controlElement = this.$element.find(this.sliderElementRef).get(0); // Should only be one element
      var $sliderProgress = $(this.sliderProgressRef, this.activeframeSliderItem.$element);

      if (site.rtl) {
        // Reverse inital position of dragdealer
        sliderInitialPosition = 1 - sliderInitialPosition;
      }

      var dragSlider = new window.Dragdealer(controlElement, {
        disabled: true,
        steps: this._numberOfWaypoints,
        x: sliderInitialPosition,
        slide: false,
        speed: 0.1,
        tapPauseTimeout: 1000,
        slideOnTap: true,
        animationDuration: 200,
        dragStartCallback: function dragStartCallback() {
          $(_this5.handle).addClass('active');
          _this5.activeframeSliderItem.$element.trigger('backgroundOverlay.on');
        },

        dragStopCallback: function dragStopCallback() {
          $(_this5.handle).removeClass('active');
        },

        animationCallback: function animationCallback(x, y) {
          try {
            var positionVal = Math.round(_this5.activeframeSliderItem.frameCount * x);

            // Make sure the frames have loaded
            if (!_this5.activeframeSliderItem.$element || _this5.activeframeSliderItem.$element.hasClass('frames-loaded') === false) {
              return;
            }

            // Avoid Race Condition
            if ((0, _isNan2.default)(positionVal) || !Array.isArray(_this5.activeframeSliderItem.framesSource) || _this5.activeframeSliderItem.framesSource.length === 0 || !_this5.activeframeSliderItem.framesSource[positionVal]) {
              return;
            }

            _this5.activeframeSliderItem.spriteSpinApi.updateFrame(positionVal);
            _this5.activeframeSliderItem.frameState.position = positionVal;

            // are we near the target yet?
            // if so, show the relevant information

            var closestStep = _this5.activeframeSliderItem.dragControl.getClosestSteps([x, y]);

            // How far from target point we should be before we show
            // the information pertaining to the waypoint
            var distanceUntilShow = 0.1;

            clearTimeout(_this5._titleTimeout);

            _this5._titleTimeout = setTimeout(function () {
              if (Math.abs(_this5.activeframeSliderItem.dragControl.value.target[0] - x) < distanceUntilShow) {
                // figure out which point to make active
                _this5._findActiveSlide(closestStep[0]);
              }
            }, 10);

            // Update slider progress bar (reversed for RTL)

            if (site.rtl) {
              $sliderProgress.width(100 - x * 100 + '%');
            } else {
              $sliderProgress.width(x * 100 + '%');
            }
          } catch (err) {
            // Silently ignore exception. It will auto fix itself on next render when images are available.
          }
        }
      });

      this._dragControl = dragSlider;
    },
    _findActiveSlide: function _findActiveSlide(stepRatio) {
      var frameCount = this.activeframeSliderItem.frameCount;

      var waypointCount = this._numberOfWaypoints;

      var activeSlide = Math.round(frameCount * stepRatio / (frameCount / (waypointCount - 1)));

      this._titleDisplay(activeSlide);
    },
    _initBackgroundOverlay: function _initBackgroundOverlay(activeframeSliderItem) {
      var _this6 = this;

      var $element = activeframeSliderItem.$element;

      var $controlElement = $(this.sliderElementRef, $element);

      if ($element.hasClass('backgroundOverlay')) {
        $element.prepend($('<div class="backgroundOverlayElement"/>'));
        // Show Background Overlay when hovering controls
        $controlElement.on('mouseenter touchstart', function () {
          $element.trigger('backgroundOverlay.on');
        });

        // Add events for triggered backgroundOverlay on/off
        $element.on('backgroundOverlay.on', function (event) {
          _this6._backgroundOverlayToggle(event);
        });

        $element.on('backgroundOverlay.off', function (event) {
          _this6._backgroundOverlayToggle(event);
        });
      }
    },
    _backgroundOverlayToggle: function _backgroundOverlayToggle(event) {
      var $element = $(event.target);
      var turnOnOverlay = event.namespace === 'on';
      var activeClass = 'backgroundOverlayActive';

      if (turnOnOverlay) {
        $element.addClass(activeClass);
        this._backgroundOverlayScroll.add($element);
      } else {
        $element.removeClass(activeClass);
        this._backgroundOverlayScroll.remove($element);
      }
    },


    _backgroundOverlayScroll: {
      $element: null,
      elementHeight: 0,
      added: false,

      add: function add($element) {
        if (!undefined.added) {
          undefined.$element = $element;
          undefined.elementHeight = $element.height();
          $(window).on('throttledScroll', $.proxy(undefined.check, undefined));
          undefined.added = true;
        }
      },

      remove: function remove() {
        $(window).off('throttledScroll', undefined.check);
        undefined.added = false;
      },

      check: function check() {
        var elementHeight = undefined.elementHeight,
            $element = undefined.$element;

        var elementOffset = $element.offset();
        var windowTop = $(window).scrollTop();
        var headerHeight = $('.SubNavigation').height() + $('.headerWrapper').height();
        var scrolledAbove = windowTop + $(window).height() <= elementOffset.top;
        var scrolledBelow = windowTop + headerHeight >= elementHeight + elementOffset.top;

        if (scrolledAbove || scrolledBelow) {
          $element.trigger('backgroundOverlay.off');
        }
      }
    },

    _initEvents: function _initEvents() {
      var _this7 = this;

      $(window).smartresize(function () {
        _this7._sliderResize(_this7);
        _this7._setInfoContainerHeight();
      });
    },
    _centerInfoContainer: function _centerInfoContainer() {
      if (this.currentState !== 'mobile') {
        var topCalculation = ($('.frameSliderBg', this.$element).height() - $(this.$arrangementInformationContainer).outerHeight()) / 2;

        // $('.infoContainer', this.$element).css({
        //   top: topCalculation
        // });
      }
    },


    // Resize slider and set currentState on window resize
    _sliderResize: function _sliderResize() {
      var previousTargetFrames = $(this.spritespinFramesRef, this.activeframeSliderItem.$element);

      this._setCurrentState();
      this._centerInfoContainer();

      var targetFrames = this._getTargetFrames();

      if (previousTargetFrames.get(0) !== targetFrames.get(0)) {
        // Switching between mobile/non-mobile
        // Destroy + reinit SpriteSpin
        previousTargetFrames.spritespin('destroy').empty().removeClass(this.spritespinFramesRef.replace('.', ''));

        this._initSpriteSpin();
      } else {
        var spriteContainerWidth = $(this.spriteContainerContextRef, this.activeframeSliderItem.$element).width();
        var targetFramesWidth = targetFrames.width();

        // If page width has changed,
        // resize SpriteSpin to fit container width (set in CSS)
        if (spriteContainerWidth !== targetFramesWidth) {
          targetFrames.spritespin({
            width: spriteContainerWidth,
            height: $(this.spriteContainerContextRef, this.activeframeSliderItem.$element).height()
          });
        }
      }
    },
    _setCurrentState: function _setCurrentState() {
      this.currentState = $(window).width() > 740 ? 'desktop' : 'mobile';
    },
    _setTouchState: function _setTouchState() {
      this.touchState = $('html').hasClass('touchCapability') ? 'touch' : 'notouch';
    },
    _titleDisplay: function _titleDisplay(sliderPosition) {
      if (sliderPosition !== this._currentWaypoint && !this.isOldSlider) {
        this._showtitle(sliderPosition);
        this._currentWaypoint = sliderPosition;
      }
    },
    _loadImage: function _loadImage(image, contextualImageElement) {
      var _this8 = this;

      var img = new Image();
      img.src = image;

      img.onload = function () {
        contextualImageElement.css({
          background: 'url("' + _this8.src + '") no-repeat center center'
        });

        setTimeout(function () {
          contextualImageElement.removeClass('loading');
        }, 220);
      };
    },
    _setupOdometer: function _setupOdometer() {
      if (!this.isOldSlider) {
        this.odometer = $(this.$contentContainer).find('.odo').get(0);
        var initial = $(this.odometer).html();
        var format = this.odometer.getAttribute('data-format');

        if (initial !== '') {
          new Odometer({ // eslint-disable-line no-new
            el: this.odometer,
            value: initial,
            format: format,
            theme: 'default',
            duration: 2000
          });

          this._noOdometer = false;
        } else {
          this.$contentContainer.addClass('noOdo');
          $('.literage').remove();
          this._noOdometer = true;
        }
      }
    },
    _setInfoContainerHeight: function _setInfoContainerHeight() {
      if (window.innerWidth > 740) {
        this.$contentContainer.height($(this.$arrangementInformationContainer).outerHeight());
      }
    },
    _getNewContent: function _getNewContent() {
      return {
        title: this.activeElement.find('.title').html(),
        arrangement: this.activeElement.find('.largeTitle').html(),
        dimensions: this.activeElement.find('.dimensions').html(),
        copy: this.activeElement.find('.copy').html(),
        picture: this.activeElement.find('.Picture').html(),
        odometer: this.activeElement.find('.odo').html(),
        odometerLabel: this.activeElement.find('.odo-label').attr('aria-label')
      };
    },
    _addNewContent: function _addNewContent() {
      var newContent = this._getNewContent();

      if (!this.contentElements) {
        this.contentElements = {
          title: this.$arrangementInformationContainer.find('.title'),
          arrangement: this.$arrangementInformationContainer.find('.largeTitle'),
          dimensions: this.$arrangementInformationContainer.find('.dimensions'),
          copy: this.$arrangementInformationContainer.find('.copy'),
          picture: this.$arrangementInformationContainer.find('.Picture'),
          odometer: $(this.odometer),
          odometerLabel: this.$arrangementInformationContainer.find('.odo-label')
        };
      }

      this.contentElements.title.html(newContent.title);
      this.contentElements.arrangement.html(newContent.arrangement);
      this.contentElements.dimensions.html(newContent.dimensions);
      this.contentElements.copy.html(newContent.copy);
      this.contentElements.odometer.html(newContent.odometer);
      this.contentElements.odometerLabel.attr('aria-label', '' + newContent.odometerLabel);

      if (newContent.picture) {
        this.contentElements.picture.show();
        this.contentElements.picture.html(newContent.picture);
      } else {
        this.contentElements.picture.hide();
      }
    },
    _setElementHeight: function _setElementHeight() {
      var _this9 = this;

      var adjustment = function adjustment() {
        var opacityChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        _this9._setInfoContainerHeight();
        _this9._centerInfoContainer();
        _this9.$contentContainer.removeClass('hidden');

        if (opacityChange) {
          _this9.$contentContainer.css({
            opacity: 1
          });
        }
      };

      if (this.$arrangementInformationContainer.find('img').length > 0) {
        if (!this.$arrangementInformationContainer.find('img')[0].complete) {
          this.$arrangementInformationContainer.find('img').load(function () {
            adjustment(true);
          });
        } else {
          adjustment(true);
        }
      } else {
        adjustment();
      }
    },
    _showtitle: function _showtitle(titlePosition) {
      var _this10 = this;

      var newContent = void 0;
      var itemPosition = void 0;

      if (site.rtl) {
        itemPosition = this.$waypointDivs.length - 1 - titlePosition;
      } else {
        itemPosition = titlePosition;
      }

      if (this.activeContent === false) {
        this.activeElement = $(this.activeframeSliderItem.$infoContainerTemplates).filter('[data-item-position="' + titlePosition + '"]');
        this.activeContent = itemPosition;

        if (this.isOldSlider) {
          newContent = $('.infoContainerTemplates .tabData', this.$element);
        } else {
          newContent = $('.infoContainerTemplates .tabData', this.$element).filter('[data-item-position="' + titlePosition + '"]');
        }

        this.$arrangementInformationContainer.html(newContent.html());

        window.richsponsiveImage();

        if (!this.isOldSlider) {
          this._setupOdometer();
          this.$contentContainer.css({ opacity: 0 });

          setTimeout(function () {
            _this10._setElementHeight();
          }, 300);
        } else {
          this._setElementHeight();
        }
      } else if (this.activeContent !== titlePosition) {
        this.activeElement = $(this.activeframeSliderItem.$infoContainerTemplates).filter('[data-item-position="' + itemPosition + '"]');
        this.$contentContainer.addClass('hidden');

        setTimeout(function () {
          _this10._addNewContent();
          _this10.activeContent = titlePosition;
          _this10.$waypointDivs.removeClass('active');

          if (site.rtl) {
            $(_this10.$waypointDivs[_this10.$waypointDivs.length - 1 - titlePosition]).addClass('active');
          } else {
            $(_this10.$waypointDivs[titlePosition]).addClass('active');
          }

          setTimeout(function () {
            _this10._setElementHeight();
          }, 350);
        }, 350);
      }
    },
    _doMobileResize: function _doMobileResize() {
      $('.infoContainer .content').height($('.infoContainer .content .tabData').height());
    },


    /**
    * Set the spritespin base element and
    * Get frame data from its data attribute
    *
    * @method _getFramesData
    */

    _getFramesData: function _getFramesData() {
      // Check Current State to determing which element to load frames from
      this.activeframeSliderItem.$spriteSpinElement = this._getTargetFrames();

      // Get the frames array from the mobile or desktop data attribute
      this.activeframeSliderItem.framesSource = this.activeframeSliderItem.$spriteSpinElement.data('frames');

      // Set the number of frames, account for array index
      this.activeframeSliderItem.frameCount = this.activeframeSliderItem.framesSource.length - 1;

      this.activeframeSliderItem.contextualImages = this.activeframeSliderItem.$spriteSpinElement.data('contextual-images');
    },
    _getTargetFrames: function _getTargetFrames() {
      return this.currentState === 'mobile' ? $(this.mobileFramesRef, this.activeframeSliderItem.$element) : $(this.desktopFramesRef, this.activeframeSliderItem.$element);
    },
    _isDeviceLandscape: function _isDeviceLandscape() {
      return typeof window.matchMedia !== 'undefined' && window.matchMedia('(orientation: landscape)').matches;
    }
  };
  jQuery.createComponent('InteractiveSlider', InteractiveSlider);

  $('.cmp-interactiveSlider').InteractiveSlider();
})(jQuery, window, document); /* global jQuery, console, site, SpriteSpin, Odometer, Loader */

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9udW1iZXIvaXMtbmFuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vbnVtYmVyL2lzLW5hbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29tcG9uZW50cy9JbnRlcmFjdGl2ZVNsaWRlci9qcy9JbnRlcmFjdGl2ZVNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvcmVzb3VyY2VzL2Rldi9qcy91dGlscy9hcmlhLmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsIkludGVyYWN0aXZlU2xpZGVyIiwiJGZyYW1lU2xpZGVySXRlbXMiLCJhY3RpdmVmcmFtZVNsaWRlckl0ZW0iLCJhY3RpdmF0ZWRGcmFtZVNsaWRlckl0ZW1zIiwiX2ZyYW1lU2xpZGVySXRlbURlZmF1bHRzIiwiJGVsZW1lbnQiLCIkc3ByaXRlU3BpbkVsZW1lbnQiLCJzcHJpdGVTcGluQXBpIiwic3ByaXRlU3BpbkRhdGEiLCJkcmFnQ29udHJvbCIsImZyYW1lQ291bnQiLCJmcmFtZXNTb3VyY2UiLCJmcmFtZVN0YXRlIiwicG9zaXRpb24iLCJkaXJlY3Rpb24iLCJtdWx0aVNsaWRlclRocmVzaG9sZCIsImN1cnJlbnRTdGF0ZSIsInRvdWNoU3RhdGUiLCJzbGlkZXJFbGVtZW50UmVmIiwic2xpZGVyUHJvZ3Jlc3NSZWYiLCJzbGlkZXIiLCJkZXNrdG9wRnJhbWVzUmVmIiwibW9iaWxlRnJhbWVzUmVmIiwic3ByaXRlc3BpbkZyYW1lc1JlZiIsInNwcml0ZUNvbnRhaW5lckNvbnRleHRSZWYiLCIkd2F5cG9pbnREaXZzIiwiJHNsaWRlckNvbnRhaW5lclVwcGVyIiwiJHNsaWRlckNvbnRyb2xzIiwiJGNvbnRlbnRDb250YWluZXIiLCIkYXJyYW5nZW1lbnRJbmZvcm1hdGlvbkNvbnRhaW5lciIsIl9udW1iZXJPZldheXBvaW50cyIsIl9yZXNpemVUaW1lb3V0IiwiaXNPbGRTbGlkZXIiLCJhY3RpdmVDb250ZW50IiwiX2luaXRpYWxQb3NpdGlvbiIsIl9nZXRFbGVtZW50cyIsImJ1aWxkV2F5cG9pbnREaXZzIiwibGVuZ3RoIiwiYWRkQ2xhc3MiLCJ0YWJEYXRhIiwiZ2V0Iiwic2l0ZSIsInJ0bCIsInJldmVyc2UiLCJlYWNoIiwiaXRlcmF0b3IiLCJlbGVtZW50IiwiZGVza3RvcFRpdGxlIiwiZGF0YSIsIm1vYmlsZVRpdGxlIiwiZWwiLCJvbiIsInJhdGlvcyIsImNhbGN1bGF0ZVN0ZXBSYXRpb3MiLCJzZXRUYXJnZXRWYWx1ZUJ5T2Zmc2V0IiwiZ2V0T2Zmc2V0c0J5UmF0aW9zIiwicHJlcGVuZCIsImFwcGVuZCIsIl9zZXR1cFdheXBvaW50RGl2cyIsIl9yZXNpemVFbGVtZW50cyIsInJlc2l6ZSIsImNsZWFyVGltZW91dCIsIndheXBvaW50VGltZW91dCIsInNldFRpbWVvdXQiLCJfZG9OZXdNb2JpbGVSZXNpemUiLCJiZ1RvcCIsIm9mZnNldCIsInRvcCIsImluZm9Db250YWluZXJCb3R0b20iLCJoZWlnaHQiLCJuZXdIZWlnaHQiLCJmaW5kIiwiaW5mb0NvbnRhaW5lciIsImlubmVyV2lkdGgiLCJpbmZvQ29udGFpbmVySGVpZ2h0IiwiZnJhbWVTbGlkZXJCZ0hlaWdodCIsInNsaWRlckZsZXhXaWR0aCIsIndpZHRoIiwiY3NzIiwiX3Nob3d0aXRsZSIsInJlZmxvdyIsImluaXQiLCJfc2V0Q3VycmVudFN0YXRlIiwiX3NldFRvdWNoU3RhdGUiLCJfY29uZmlnU3ByaXRlU3BpbiIsImZpcnN0IiwiX2luaXREcmFnRGVhbGVyIiwiY3RpIiwib25DdGlDbGljayIsImhpZGUiLCJhdHRyIiwiX2xvYWRpbmdPdmVybGF5IiwiX3JJZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9kcmF3TG9hZGVyIiwiX2RlbGF5ZWRJbml0IiwicmVtb3ZlQXR0ciIsIm9uZSIsImV2dCIsIndoaWNoIiwiS2V5Q29kZSIsIlJFVFVSTiIsIlNQQUNFIiwicHJldmVudERlZmF1bHQiLCJfc2xpZGVUb1N0YXJ0aW5nU2VhdCIsIl9vdmVybGF5IiwiYXBwZW5kVG8iLCJfY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsIl9jdHgiLCJnZXRDb250ZXh0IiwibW96SW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiX2ltYWdlU21vb3RoaW5nIiwid2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwibXNJbWFnZVNtb290aGluZ0VuYWJsZWQiLCJpbWFnZVNtb290aGluZ0VuYWJsZWQiLCJfbG9hZGVyIiwiTG9hZGVyIiwiY2xlYXJSZWN0IiwiZHJhdyIsIl9pbml0ZnJhbWVTbGlkZXJJdGVtIiwicmljaHNwb25zaXZlSW1hZ2UiLCJfaW5pdEV2ZW50cyIsIl9vbkZyYW1lc0xvYWRlZCIsImZhZGVPdXQiLCJyZW1vdmUiLCJlbmFibGUiLCJpbml0X3J0bCIsImluZGV4IiwiZXh0ZW5kIiwiX2RyYWdDb250cm9sIiwiJGluZm9Db250YWluZXJUZW1wbGF0ZXMiLCJfaW5pdFNwcml0ZVNwaW4iLCJfaW5pdEJhY2tncm91bmRPdmVybGF5IiwiSGVhZGluZ3MiLCJfdW5pbml0ZnJhbWVTbGlkZXJJdGVtIiwicmVtb3ZlQ2xhc3MiLCJhY3RpdmVQYXVzZVRpbW91dCIsIlNwcml0ZVNwaW4iLCJtb2RzIiwibm9CZWhhdmlvciIsInJlZ2lzdGVyTW9kdWxlIiwiX2dldEZyYW1lc0RhdGEiLCJzcHJpdGVTcGluU3RhcnRGcmFtZSIsInNwcml0ZXNwaW4iLCJzb3VyY2UiLCJmcmFtZSIsImFuaW1hdGUiLCJmcmFtZVRpbWUiLCJiZWhhdmlvciIsInJlbmRlcmVyIiwidXRpbHMiLCJpc1dpbmRvd3NQaG9uZSIsInByZWxvYWRDb3VudCIsIm9uTG9hZCIsInNsaWRlckluaXRpYWxQb3NpdGlvbiIsImNvbnRyb2xFbGVtZW50IiwiJHNsaWRlclByb2dyZXNzIiwiZHJhZ1NsaWRlciIsIkRyYWdkZWFsZXIiLCJkaXNhYmxlZCIsInN0ZXBzIiwieCIsInNsaWRlIiwic3BlZWQiLCJ0YXBQYXVzZVRpbWVvdXQiLCJzbGlkZU9uVGFwIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJkcmFnU3RhcnRDYWxsYmFjayIsImhhbmRsZSIsInRyaWdnZXIiLCJkcmFnU3RvcENhbGxiYWNrIiwiYW5pbWF0aW9uQ2FsbGJhY2siLCJ5IiwicG9zaXRpb25WYWwiLCJNYXRoIiwicm91bmQiLCJoYXNDbGFzcyIsIkFycmF5IiwiaXNBcnJheSIsInVwZGF0ZUZyYW1lIiwiY2xvc2VzdFN0ZXAiLCJnZXRDbG9zZXN0U3RlcHMiLCJkaXN0YW5jZVVudGlsU2hvdyIsIl90aXRsZVRpbWVvdXQiLCJhYnMiLCJ2YWx1ZSIsInRhcmdldCIsIl9maW5kQWN0aXZlU2xpZGUiLCJlcnIiLCJzdGVwUmF0aW8iLCJ3YXlwb2ludENvdW50IiwiYWN0aXZlU2xpZGUiLCJfdGl0bGVEaXNwbGF5IiwiJGNvbnRyb2xFbGVtZW50IiwiZXZlbnQiLCJfYmFja2dyb3VuZE92ZXJsYXlUb2dnbGUiLCJ0dXJuT25PdmVybGF5IiwibmFtZXNwYWNlIiwiYWN0aXZlQ2xhc3MiLCJfYmFja2dyb3VuZE92ZXJsYXlTY3JvbGwiLCJhZGQiLCJlbGVtZW50SGVpZ2h0IiwiYWRkZWQiLCJwcm94eSIsImNoZWNrIiwib2ZmIiwiZWxlbWVudE9mZnNldCIsIndpbmRvd1RvcCIsInNjcm9sbFRvcCIsImhlYWRlckhlaWdodCIsInNjcm9sbGVkQWJvdmUiLCJzY3JvbGxlZEJlbG93Iiwic21hcnRyZXNpemUiLCJfc2xpZGVyUmVzaXplIiwiX3NldEluZm9Db250YWluZXJIZWlnaHQiLCJfY2VudGVySW5mb0NvbnRhaW5lciIsInRvcENhbGN1bGF0aW9uIiwib3V0ZXJIZWlnaHQiLCJwcmV2aW91c1RhcmdldEZyYW1lcyIsInRhcmdldEZyYW1lcyIsIl9nZXRUYXJnZXRGcmFtZXMiLCJlbXB0eSIsInJlcGxhY2UiLCJzcHJpdGVDb250YWluZXJXaWR0aCIsInRhcmdldEZyYW1lc1dpZHRoIiwic2xpZGVyUG9zaXRpb24iLCJfY3VycmVudFdheXBvaW50IiwiX2xvYWRJbWFnZSIsImltYWdlIiwiY29udGV4dHVhbEltYWdlRWxlbWVudCIsImltZyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiYmFja2dyb3VuZCIsIl9zZXR1cE9kb21ldGVyIiwib2RvbWV0ZXIiLCJpbml0aWFsIiwiaHRtbCIsImZvcm1hdCIsImdldEF0dHJpYnV0ZSIsIk9kb21ldGVyIiwidGhlbWUiLCJkdXJhdGlvbiIsIl9ub09kb21ldGVyIiwiX2dldE5ld0NvbnRlbnQiLCJ0aXRsZSIsImFjdGl2ZUVsZW1lbnQiLCJhcnJhbmdlbWVudCIsImRpbWVuc2lvbnMiLCJjb3B5IiwicGljdHVyZSIsIm9kb21ldGVyTGFiZWwiLCJfYWRkTmV3Q29udGVudCIsIm5ld0NvbnRlbnQiLCJjb250ZW50RWxlbWVudHMiLCJzaG93IiwiX3NldEVsZW1lbnRIZWlnaHQiLCJhZGp1c3RtZW50Iiwib3BhY2l0eUNoYW5nZSIsIm9wYWNpdHkiLCJjb21wbGV0ZSIsImxvYWQiLCJ0aXRsZVBvc2l0aW9uIiwiaXRlbVBvc2l0aW9uIiwiZmlsdGVyIiwiX2RvTW9iaWxlUmVzaXplIiwiY29udGV4dHVhbEltYWdlcyIsIl9pc0RldmljZUxhbmRzY2FwZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwialF1ZXJ5IiwiY3JlYXRlQ29tcG9uZW50IiwiQkFDS1NQQUNFIiwiREVMRVRFIiwiRE9XTiIsIkVORCIsIkVTQyIsIkhPTUUiLCJMRUZUIiwiUEFHRV9ET1dOIiwiUEFHRV9VUCIsIlJJR0hUIiwiVEFCIiwiVVAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwr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QVMsRUFUWTtBQVVyQnJMLFVBQVEsRUFWYTtBQVdyQnNMLFNBQU8sRUFYYztBQVlyQnJMLFNBQU8sRUFaYztBQWFyQnNMLE9BQUssQ0FiZ0I7QUFjckJDLE1BQUk7QUFkaUIsQ0FBaEIsQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW50ZXJhY3RpdmVTbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluL3dlYmFwcC9jb21wb25lbnRzL0ludGVyYWN0aXZlU2xpZGVyL2pzL0ludGVyYWN0aXZlU2xpZGVyLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL251bWJlci9pcy1uYW5cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtbmFuJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5OdW1iZXIuaXNOYU47XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjMnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCIvLyAyMC4xLjIuNCBOdW1iZXIuaXNOYU4obnVtYmVyKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzTmFOOiBmdW5jdGlvbiBpc05hTihudW1iZXIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgcmV0dXJuIG51bWJlciAhPSBudW1iZXI7XG4gIH1cbn0pO1xuIiwiLyogZ2xvYmFsIGpRdWVyeSwgY29uc29sZSwgc2l0ZSwgU3ByaXRlU3BpbiwgT2RvbWV0ZXIsIExvYWRlciAqL1xuaW1wb3J0IHsgS2V5Q29kZSB9IGZyb20gJy4uLy4uLy4uL3Jlc291cmNlcy9kZXYvanMvdXRpbHMvYXJpYSc7XG5cbigoJCwgd2luZG93LCBkb2N1bWVudCkgPT4ge1xuICBjb25zdCBJbnRlcmFjdGl2ZVNsaWRlciA9IHtcblxuICAgIC8vIEVsZW1lbnRzIGNvbnRhaW5pbmcgZWFjaCBpbmRpdmlkdWFsIGZyYW1lIHNsaWRlIGluc3RhbmNlXG4gICAgJGZyYW1lU2xpZGVySXRlbXM6IG51bGwsXG4gICAgYWN0aXZlZnJhbWVTbGlkZXJJdGVtOiB7fSxcblxuICAgIGFjdGl2YXRlZEZyYW1lU2xpZGVySXRlbXM6IFtdLCAvLyBBcnJheSBjb250aWFpbmcgaW5pc3RpYWxpc2VkIGZyYW1lU2xpZGVySXRlbXNcbiAgICBfZnJhbWVTbGlkZXJJdGVtRGVmYXVsdHM6IHtcbiAgICAgICRlbGVtZW50OiBmYWxzZSwgLy8gVGhlIGFjdGl2ZSBmcmFtZSdzIHdyYXBwaW5nIGVsZW1lbnQgLmZyYW1lU2xpZGVySXRlbVxuICAgICAgJHNwcml0ZVNwaW5FbGVtZW50OiBmYWxzZSwgLy8gU3ByaXRlU3BpbiBqcXVlcnkgRWxlbWVudFxuICAgICAgc3ByaXRlU3BpbkFwaTogZmFsc2UsIC8vIFNwcml0ZVNwaW4gQVBJIG9iamVjdFxuICAgICAgc3ByaXRlU3BpbkRhdGE6IGZhbHNlLCAvLyBTcHJpdGVTcGluIGRhdGEgb2JqZWN0XG4gICAgICBkcmFnQ29udHJvbDogZmFsc2UsIC8vIERyYWdEZWFsZXIgSW5zdGFuY2VcbiAgICAgIGZyYW1lQ291bnQ6IDAsIC8vIFRoZSBudW1iZXIgb2YgZnJhbWVzXG4gICAgICBmcmFtZXNTb3VyY2U6IFtdLCAvLyBBcnJheSBjb250YWluaW5nIHRoZSBpbWFnZXMgdGhhdCBtYWtlIHVwIHRoZSBmcmFtZXNcbiAgICAgIGZyYW1lU3RhdGU6IHsgLy8gVGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIGZyYW1lIHNsaWRlciAmIGRpcmVjdGlvblxuICAgICAgICBwb3NpdGlvbjogMCxcbiAgICAgICAgZGlyZWN0aW9uOiAnZm9yd2FyZCdcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAqIFRoZSBudW1iZXIgb2YgZnJhbWVzIHJlcXVpcmVkIGZvciB0aGUgZnJhbWUgc2xpZGVyIHRvIGluY2x1ZGUgYSBtaWQgcG9pbnQgbWFya2VyXG4gICAgKiBFYWNoIGFuaW1hdGlvbiBpcyAzNSBmcmFtZXMuIE1vcmUgdGhhbiB0aGF0IGluZGljYXRlcyB0d28gYW5pbWF0aW9uc1xuICAgICpcbiAgICAqIEBwcm9wZXJ0eSBtdWx0aVNsaWRlclRocmVzaG9sZFxuICAgICovXG5cbiAgICBtdWx0aVNsaWRlclRocmVzaG9sZDogMzQsIC8vIEFjY291bnRzIGZvciBhcnJheSBpbmRleFxuXG4gICAgLyoqXG4gICAgKiBJcyB0aGUgdXNlciBpbiBtb2JpbGUgb3IgZGVza3RvcCBzdGF0ZVxuICAgICogc3RhdGUgZm9yIHRyaWdnZXJpbmcgbGF5b3V0IGNoYW5nZXNcbiAgICAqXG4gICAgKiBAcHJvcGVydHkgY3VycmVudFN0YXRlXG4gICAgKi9cbiAgICBjdXJyZW50U3RhdGU6ICdkZXNrdG9wJyxcblxuXG4gICAgLyoqXG4gICAgKiBJcyB0aGUgdXNlciBvbiB0b3VjaCBlbmFibGUgZGV2aWNlcyBvciBub3RcbiAgICAqXG4gICAgKiBAcHJvcGVydHkgdG91Y2hTdGF0ZSAtICd0b3VjaCcgb3IgJ25vdG91Y2gnXG4gICAgKi9cblxuICAgIHRvdWNoU3RhdGU6ICd0b3VjaCcsXG5cbiAgICAvKipcbiAgICAqIFNsaWRlciBFbGVtZW50XG4gICAgKlxuICAgICogQHByb3BlcnR5IHNsaWRlckVsZW1lbnRcbiAgICAqL1xuXG5cbiAgICBzbGlkZXJFbGVtZW50UmVmOiAnLnNsaWRlckNvbnRyb2xzJyxcblxuICAgIC8qKlxuICAgICogU2xpZGVyIFByb2dyZXNzIGNsYXNzXG4gICAgKlxuICAgICogQHByb3BlcnR5IHNsaWRlclByb2dyZXNzUmVmXG4gICAgKi9cblxuICAgIHNsaWRlclByb2dyZXNzUmVmOiAnLnNsaWRlclByb2dyZXNzJyxcblxuXG4gICAgLyoqXG4gICAgKiBTbGlkZXIgb2JqZWN0LCBEcmFnRGVhbGVyXG4gICAgKlxuICAgICogQHByb3BlcnR5IHNsaWRlclxuICAgICovXG5cbiAgICBzbGlkZXI6IGZhbHNlLFxuXG5cbiAgICAvKipcbiAgICAqIFN0cmluZyByZWZlcmVuY2luZyB0aGUgY2xhc3Mgb2YgdGhlIEVsZW1lbnQgY29udGFpbmluZyB0aGUgTW9iaWxlIGZyYW1lcyB3aXRoIGVhY2ggRnJhbXNlU2xpZGVySXRlbVxuICAgICpcbiAgICAqIEBwcm9wZXJ0eSBkZXNrdG9wRnJhbWVzUmVmXG4gICAgKi9cblxuICAgIGRlc2t0b3BGcmFtZXNSZWY6ICcuZGVza3RvcFNsaWRlckZyYW1lJyxcblxuXG4gICAgLyoqXG4gICAgKiBTdHJpbmcgcmVmZXJlbmNpbmcgdGhlIGNsYXNzIG9mIHRoZSBFbGVtZW50IGNvbnRhaW5pbmcgdGhlIE1vYmlsZSBmcmFtZXMgd2l0aCBlYWNoIEZyYW1zZVNsaWRlckl0ZW1cbiAgICAqXG4gICAgKiBAcHJvcGVydHkgbW9iaWxlRnJhbWVzUmVmXG4gICAgKi9cblxuICAgIG1vYmlsZUZyYW1lc1JlZjogJy5tb2JpbGVTbGlkZXJGcmFtZScsXG5cbiAgICAvKipcbiAgICAqIFN0cmluZyByZWZlcmVuY2luZyB0aGUgY2xhc3Mgb2YgdGhlIGZyYW1lcyBFbGVtZW50IHdoaWNoIHNwcml0ZSBzcGluIGhhcyBiZWVuIGFjdGl2YXRlZCBvblxuICAgICogd2l0aGluIGVhY2ggRnJhbXNlU2xpZGVySXRlbVxuICAgICpcbiAgICAqIEBwcm9wZXJ0eSBzcHJpdGVzcGluRnJhbWVzUmVmXG4gICAgKi9cblxuXG4gICAgc3ByaXRlc3BpbkZyYW1lc1JlZjogJy5zcHJpdGVzcGluLWluc3RhbmNlJyxcblxuXG4gICAgLyoqXG4gICAgKiBTdHJpbmcgcmVmZXJlbmNpbmcgdGhlIGNsYXNzIG9mIHRoZSBzcHJpdGVDb250YWluZXJDb250ZXh0IEVsZW1lbnQgd2hpY2ggc3ByaXRlIHNwaW4gaGFzIGJlZW4gYWN0aXZhdGVkIG9uXG4gICAgKiB3aXRoaW4gZWFjaCBGcmFtc2VTbGlkZXJJdGVtXG4gICAgKlxuICAgICogQHByb3BlcnR5IHNwcml0ZXNwaW5GcmFtZXNSZWZcbiAgICAqL1xuXG4gICAgc3ByaXRlQ29udGFpbmVyQ29udGV4dFJlZjogJy5zcHJpdGVDb250YWluZXJDb250ZXh0JyxcblxuXG4gICAgLyoqXG4gICAgKiBTcHJpdGUgU3BpbiBBUEkgb2JqZWN0LCByZXF1aXJlZCBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgc3ByaXRlIHNwaW4gZWxlbWVudCBldmVudHNcbiAgICAqXG4gICAgKiBAcHJvcGVydHkgJHNwcml0ZVNwaW5BcGlcbiAgICAqL1xuXG4gICAgc3ByaXRlU3BpbkFwaToge30sXG5cblxuICAgIC8qKlxuICAgICogU3ByaXRlIFNwaW4gRGF0ZSBvYmplY3QsIHJlcXVpcmVkIGZvciB1cGRhdGluZyBzcHJpdGUgc3BpbiBwcm9wZXJ0aWVzIHZhbHVlc1xuICAgICpcbiAgICAqIEBwcm9wZXJ0eSAkc3ByaXRlU3BpbkRhdGFcbiAgICAqL1xuXG5cbiAgICBzcHJpdGVTcGluRGF0YToge30sXG5cbiAgICAvKipcbiAgICAqIEVsZW1lbnRzIHVzZWQgZm9yIHdheXBvaW50IG5hbWVzXG4gICAgKiB3aWxsIGJlIGluaXRpYWxpc2VkIGJ5IGJ1aWxkV2F5cG9pbnREaXZzKClcbiAgICAqXG4gICAgKiBAcHJvcGVydHkgJHdheXBvaW50RGl2c1xuICAgICovXG5cbiAgICAkd2F5cG9pbnREaXZzOiBudWxsLFxuXG4gICAgLyoqXG4gICAgKiBFbGVtZW50IGZvciB1cHBlciBzbGlkZXIgY29udGFpbmVyXG4gICAgKlxuICAgICogQHByb3BlcnR5ICRzbGlkZXJDb250YWluZXJVcHBlclxuICAgICovXG5cbiAgICAkc2xpZGVyQ29udGFpbmVyVXBwZXI6IG51bGwsXG5cbiAgICAvKipcbiAgICAqIEVsZW1lbnQgZm9yIHNsaWRlciBjb250cm9sc1xuICAgICpcbiAgICAqIEBwcm9wZXJ0eSAkc2xpZGVyQ29udHJvbHNcbiAgICAqL1xuXG4gICAgJHNsaWRlckNvbnRyb2xzOiBudWxsLFxuXG4gICAgJGNvbnRlbnRDb250YWluZXI6IG51bGwsXG5cbiAgICAkYXJyYW5nZW1lbnRJbmZvcm1hdGlvbkNvbnRhaW5lcjogbnVsbCxcblxuICAgIC8qKlxuICAgICogRGVmYXVsdCBudW1iZXIgb2Ygd2F5cG9pbnRzXG4gICAgKlxuICAgICogQHByb3BlcnR5IF9udW1iZXJPZldheXBvaW50c1xuICAgICovXG5cbiAgICBfbnVtYmVyT2ZXYXlwb2ludHM6IDgsXG5cbiAgICBfcmVzaXplVGltZW91dDogMjAwLFxuXG4gICAgaXNPbGRTbGlkZXI6IGZhbHNlLFxuXG4gICAgYWN0aXZlQ29udGVudDogZmFsc2UsXG5cbiAgICAvKipcbiAgICAqIERlZmF1bHQgU3RhcnQgUG9zaXRpb24gLSBDdXJyZW50bHkgc2V0IHRvIDEgb24gbG9hZCB0aGVuIGJhY2sgdG8gMCB3aGVuIHNjcm9sbGVkIGludG8gdmlldy5DaGFuZ2VzIGZvciBNRU5BXG4gICAgKlxuICAgICogQHByb3BlcnR5IF9pbml0aWFsUG9zaXRpb25cbiAgICAqL1xuXG4gICAgX2luaXRpYWxQb3NpdGlvbjogMixcblxuICAgIF9nZXRFbGVtZW50cygpIHtcbiAgICAgIHRoaXMuJGZyYW1lU2xpZGVySXRlbXMgPSAkKCcuZnJhbWVTbGlkZXJJdGVtJywgdGhpcy4kZWxlbWVudCk7XG4gICAgICB0aGlzLiRzbGlkZXJDb250YWluZXJVcHBlciA9ICQoJy5zbGlkZXJDb250YWluZXJVcHBlcicsIHRoaXMuJGVsZW1lbnQpO1xuICAgICAgdGhpcy4kc2xpZGVyQ29udHJvbHMgPSAkKCcuc2xpZGVyQ29udGFpbmVyTG93ZXIgLnNsaWRlckNvbnRyb2xzJywgdGhpcy4kZWxlbWVudCk7XG4gICAgICB0aGlzLiRjb250ZW50Q29udGFpbmVyID0gJCgnLmluZm9Db250YWluZXIgLmNvbnRlbnQnLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgIHRoaXMuJGFycmFuZ2VtZW50SW5mb3JtYXRpb25Db250YWluZXIgPSAkKCcuaW5mb0NvbnRhaW5lciAuY29udGVudCAudGFiRGF0YScsIHRoaXMuJGVsZW1lbnQpO1xuICAgIH0sXG5cbiAgICBidWlsZFdheXBvaW50RGl2cygpIHtcbiAgICAgIHRoaXMuX251bWJlck9mV2F5cG9pbnRzID0gJCgnLmluZm9Db250YWluZXJUZW1wbGF0ZXMgLnRhYkRhdGEnLCB0aGlzLiRlbGVtZW50KS5sZW5ndGg7XG5cbiAgICAgIGlmICgkKCcuaW5mb0NvbnRhaW5lclRlbXBsYXRlcyAudGFiRGF0YScsIHRoaXMuJGVsZW1lbnQpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdvbGQnKTtcbiAgICAgICAgdGhpcy5pc09sZFNsaWRlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX251bWJlck9mV2F5cG9pbnRzID0gMztcbiAgICAgIH1cblxuICAgICAgbGV0IHRhYkRhdGEgPSAkKCcuaW5mb0NvbnRhaW5lclRlbXBsYXRlcyAudGFiRGF0YScsIHRoaXMuJGVsZW1lbnQpLmdldCgpO1xuICAgICAgaWYgKHNpdGUucnRsKSB7XG4gICAgICAgIHRhYkRhdGEgPSB0YWJEYXRhLnJldmVyc2UoKTtcbiAgICAgIH1cblxuICAgICAgJCh0YWJEYXRhKS5lYWNoKChpdGVyYXRvciwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNrdG9wVGl0bGUgPSAkKGVsZW1lbnQpLmRhdGEoJ2Rlc2t0b3AtdGl0bGUnKTtcbiAgICAgICAgY29uc3QgbW9iaWxlVGl0bGUgPSAkKGVsZW1lbnQpLmRhdGEoJ21vYmlsZS10aXRsZScpO1xuICAgICAgICBjb25zdCBlbCA9ICQoYFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJJbnRlcmFjdGl2ZVNsaWRlcl9fYnV0dG9uc1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNrdG9wXCI+JHtkZXNrdG9wVGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb2JpbGVcIj4ke21vYmlsZVRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYCk7XG5cbiAgICAgICAgJChlbCkub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZHJhZ0NvbnRyb2wgfSA9IHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtO1xuICAgICAgICAgIGNvbnN0IHJhdGlvcyA9IGRyYWdDb250cm9sLmNhbGN1bGF0ZVN0ZXBSYXRpb3MoKTtcbiAgICAgICAgICBkcmFnQ29udHJvbC5zZXRUYXJnZXRWYWx1ZUJ5T2Zmc2V0KGRyYWdDb250cm9sLmdldE9mZnNldHNCeVJhdGlvcyhbcmF0aW9zW2l0ZXJhdG9yXSwgMF0pLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzaXRlLnJ0bCkge1xuICAgICAgICAgIHRoaXMuJHNsaWRlckNvbnRhaW5lclVwcGVyLnByZXBlbmQoZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJHNsaWRlckNvbnRhaW5lclVwcGVyLmFwcGVuZChlbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLiR3YXlwb2ludERpdnMgPSAkKCcuc2xpZGVyQ29udGFpbmVyVXBwZXIgLkludGVyYWN0aXZlU2xpZGVyX19idXR0b25zJywgdGhpcy4kZWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmlzT2xkU2xpZGVyKSB7XG4gICAgICAgIHRoaXMuX2luaXRpYWxQb3NpdGlvbiA9IDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaXRlLnJ0bCkge1xuICAgICAgICAkKHRoaXMuJHdheXBvaW50RGl2c1t0aGlzLiR3YXlwb2ludERpdnMgLSB0aGlzLl9pbml0aWFsUG9zaXRpb25dKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRoaXMuJHdheXBvaW50RGl2c1t0aGlzLl9pbml0aWFsUG9zaXRpb25dKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NldHVwV2F5cG9pbnREaXZzKCk7XG4gICAgICB0aGlzLl9yZXNpemVFbGVtZW50cygpO1xuXG4gICAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMud2F5cG9pbnRUaW1lb3V0KTtcblxuICAgICAgICB0aGlzLndheXBvaW50VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NldHVwV2F5cG9pbnREaXZzKHRydWUpO1xuICAgICAgICAgIHRoaXMuX3Jlc2l6ZUVsZW1lbnRzKCk7XG4gICAgICAgIH0sIHRoaXMuX3Jlc2l6ZVRpbWVvdXQpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9kb05ld01vYmlsZVJlc2l6ZSgpIHtcbiAgICAgIGNvbnN0IGJnVG9wID0gJCgnLmZyYW1lU2xpZGVyQmcnLCB0aGlzLiRlbGVtZW50KS5vZmZzZXQoKS50b3A7XG4gICAgICBjb25zdCBpbmZvQ29udGFpbmVyQm90dG9tID0gJCgnLmluZm9Db250YWluZXInLCB0aGlzLiRlbGVtZW50KS5vZmZzZXQoKS50b3AgKyAkKCcuaW5mb0NvbnRhaW5lcicsIHRoaXMuJGVsZW1lbnQpLmhlaWdodCgpO1xuICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gaW5mb0NvbnRhaW5lckJvdHRvbSAtIGJnVG9wO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5mcmFtZVNsaWRlckl0ZW0nKS5oZWlnaHQobmV3SGVpZ2h0KTtcbiAgICB9LFxuXG4gICAgX3Jlc2l6ZUVsZW1lbnRzKCkge1xuICAgICAgY29uc3QgaW5mb0NvbnRhaW5lciA9ICQoJy5pbmZvQ29udGFpbmVyJywgdGhpcy4kZWxlbWVudCk7XG5cbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NDAgJiYgdGhpcy5pc09sZFNsaWRlcikge1xuICAgICAgICBjb25zdCBpbmZvQ29udGFpbmVySGVpZ2h0ID0gaW5mb0NvbnRhaW5lci5oZWlnaHQoKTtcbiAgICAgICAgY29uc3QgZnJhbWVTbGlkZXJCZ0hlaWdodCA9ICQoJy5mcmFtZVNsaWRlckJnJywgdGhpcy4kZWxlbWVudCkuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IGluZm9Db250YWluZXJIZWlnaHQgKyBmcmFtZVNsaWRlckJnSGVpZ2h0O1xuXG4gICAgICAgICQoJy5mcmFtZVNsaWRlckl0ZW0nLCB0aGlzLiRlbGVtZW50KS5oZWlnaHQobmV3SGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNzQwICYmICF0aGlzLmlzT2xkU2xpZGVyKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lU2xpZGVyQmdIZWlnaHQgPSAkKCcuZnJhbWVTbGlkZXJCZycsIHRoaXMuJGVsZW1lbnQpLmhlaWdodCgpO1xuICAgICAgICBjb25zdCBpbmZvQ29udGFpbmVySGVpZ2h0ID0gaW5mb0NvbnRhaW5lci5oZWlnaHQoKTtcbiAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gZnJhbWVTbGlkZXJCZ0hlaWdodCArIGluZm9Db250YWluZXJIZWlnaHQ7XG5cbiAgICAgICAgJCgnLmZyYW1lU2xpZGVySXRlbScsIHRoaXMuJGVsZW1lbnQpLmhlaWdodChuZXdIZWlnaHQpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfc2V0dXBXYXlwb2ludERpdnMocmVzaXplKSB7XG4gICAgICBsZXQgc2xpZGVyRmxleFdpZHRoID0gdGhpcy4kc2xpZGVyQ29udGFpbmVyVXBwZXIud2lkdGgoKSAtIDY0O1xuXG4gICAgICBpZiAoc2l0ZS5ydGwpIHtcbiAgICAgICAgc2xpZGVyRmxleFdpZHRoID0gdGhpcy4kc2xpZGVyQ29udGFpbmVyVXBwZXIud2lkdGgoKSAtIDU0O1xuICAgICAgfVxuXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNzQwICYmICF0aGlzLmlzT2xkU2xpZGVyKSB7XG4gICAgICAgIHNsaWRlckZsZXhXaWR0aCA9IHRoaXMuJHNsaWRlckNvbnRhaW5lclVwcGVyLndpZHRoKCkgLSAyMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy4kc2xpZGVyQ29udHJvbHMuY3NzKHtcbiAgICAgICAgd2lkdGg6IHNsaWRlckZsZXhXaWR0aFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzaXplKSB7XG4gICAgICAgIHRoaXMuX3Nob3d0aXRsZSh0aGlzLl9pbml0aWFsUG9zaXRpb24pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbSAmJiB0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS5kcmFnQ29udHJvbCkge1xuICAgICAgICB0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS5kcmFnQ29udHJvbC5yZWZsb3coKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMuX3NldEN1cnJlbnRTdGF0ZSgpOyAvLyBTZXQgZGVza3RvcCAvIG1vYmlsZSBzdGF0ZVxuICAgICAgdGhpcy5fZ2V0RWxlbWVudHMoKTtcbiAgICAgIHRoaXMuYnVpbGRXYXlwb2ludERpdnMoKTtcblxuICAgICAgdGhpcy53YXlwb2ludFRpbWVvdXQgPSBudWxsO1xuICAgICAgdGhpcy5fc2V0VG91Y2hTdGF0ZSgpOyAvLyBTZXQgVG91Y2ggc3RhdGUgaS5lLiB0b3VjaCBkZXZpY2VcbiAgICAgIHRoaXMuX2NvbmZpZ1Nwcml0ZVNwaW4oKTsgLy8gQWRkIFNwcml0ZVNwaW4gY3VzdG9tIG1vZHVsZXMuIE1ldGhvZCBpcyBvbmx5IHJ1biBvbmNlLlxuXG4gICAgICB0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS4kZWxlbWVudCA9IHRoaXMuJGZyYW1lU2xpZGVySXRlbXMuZmlyc3QoKTtcbiAgICAgIHRoaXMuX2luaXREcmFnRGVhbGVyKCk7XG5cbiAgICAgIGNvbnN0IGN0aSA9ICQoJy5jbGlja1RvSW50ZXJhY3QnLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgIGNvbnN0IG9uQ3RpQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGN0aS5oaWRlKCkuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICB0aGlzLl9sb2FkaW5nT3ZlcmxheSgpO1xuICAgICAgICB0aGlzLl9ySWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9kcmF3TG9hZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9kZWxheWVkSW5pdCgpO1xuICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5zbGlkZXJDb250YWluZXJVcHBlcicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNPbGRTbGlkZXIpIHtcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5zbGlkZXJDb250YWluZXInKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY3RpLm9uZSgnY2xpY2snLCBvbkN0aUNsaWNrKTtcbiAgICAgIGN0aS5vbigna2V5cHJlc3MnLCAoZXZ0KSA9PiB7XG4gICAgICAgIGlmIChldnQud2hpY2ggPT09IEtleUNvZGUuUkVUVVJOIHx8IGV2dC53aGljaCA9PT0gS2V5Q29kZS5TUEFDRSkge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIG9uQ3RpQ2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9zbGlkZVRvU3RhcnRpbmdTZWF0KCkge1xuICAgICAgY29uc3QgeyBkcmFnQ29udHJvbCB9ID0gdGhpcy5hY3RpdmVmcmFtZVNsaWRlckl0ZW07XG5cbiAgICAgIGlmIChzaXRlLnJ0bCkge1xuICAgICAgICBkcmFnQ29udHJvbC5zZXRUYXJnZXRWYWx1ZUJ5T2Zmc2V0KGRyYWdDb250cm9sLmdldE9mZnNldHNCeVJhdGlvcyhbMSwgMV0pLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnQ29udHJvbC5zZXRUYXJnZXRWYWx1ZUJ5T2Zmc2V0KGRyYWdDb250cm9sLmdldE9mZnNldHNCeVJhdGlvcyhbMCwgMV0pLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9sb2FkaW5nT3ZlcmxheSgpIHtcbiAgICAgIC8vIE92ZXJsYXlcbiAgICAgIHRoaXMuX292ZXJsYXkgPSAkKFwiPGRpdiBjbGFzcz0nbG9hZGluZ092ZXJsYXknLz5cIik7XG4gICAgICB0aGlzLl9vdmVybGF5LmFwcGVuZFRvKHRoaXMuJGVsZW1lbnQpO1xuXG4gICAgICAvLyBMb2FkaW5nIFNwaW5uZXJcbiAgICAgIHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdGhpcy5fY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgIHRoaXMuX2N0eC5tb3pJbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0aGlzLl9pbWFnZVNtb290aGluZztcbiAgICAgIHRoaXMuX2N0eC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0aGlzLl9pbWFnZVNtb290aGluZztcbiAgICAgIHRoaXMuX2N0eC5tc0ltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRoaXMuX2ltYWdlU21vb3RoaW5nO1xuICAgICAgdGhpcy5fY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRoaXMuX2ltYWdlU21vb3RoaW5nO1xuXG4gICAgICB0aGlzLl9jYW52YXMud2lkdGggPSAxMDA7XG4gICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gMTAwO1xuICAgICAgJCh0aGlzLl9jYW52YXMpLmFwcGVuZFRvKHRoaXMuX292ZXJsYXkpO1xuXG4gICAgICB0aGlzLl9sb2FkZXIgPSBuZXcgTG9hZGVyKFxuICAgICAgICB0aGlzLl9jdHgsIC8vIGNvbnRleHQgdG8gcmVuZGVyIHRvXG4gICAgICAgIHRoaXMuX2NhbnZhcywgLy8gY2FudmFzLCBmb3IgYmluZGluZyBldmVudHNcbiAgICAgICAgNTAsIC8vIHggcG9zaXRpb25cbiAgICAgICAgNTAsIC8vIHkgcG9zaXRpb25cbiAgICAgICAgNDQsIC8vIHJhZGl1cyBvZiBjaXJjbGVcbiAgICAgICAgJyNmZmYnLCAvLyBzdHJva2UgY29sb3IsXG4gICAgICAgIDMwLCAvLyB0YWlsIGxlbmd0aFxuICAgICAgICBmYWxzZSwgLy8gZGVidWcgb24vb2ZmXG4gICAgICAgICdzaG93QXJyb3dzJywgLy8gYmVoYXZpb3VyIHRvIGNhbGwgYWZ0ZXIgbG9hZCBpcyBjb21wbGV0ZVxuICAgICAgICAxLCAvLyBmaXJlIGNhbGxiYWNrIHdoZW4gZW5kSXRlcmF0b3IgaXMgYXQgdGhpcyB2YWx1ZSxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9LFxuXG4gICAgX2RyYXdMb2FkZXIoKSB7XG4gICAgICB0aGlzLl9jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuX2NhbnZhcy53aWR0aCwgdGhpcy5fY2FudmFzLmhlaWdodCk7XG4gICAgICB0aGlzLl9sb2FkZXIuZHJhdygpO1xuXG4gICAgICBpZiAodGhpcy5fcklkKSB7XG4gICAgICAgIHRoaXMuX3JJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2RyYXdMb2FkZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9kZWxheWVkSW5pdCgpIHtcbiAgICAgIC8vIEFzc3VtcHRpb24gaXMgdGhlIGZpcnN0IGZyYW1lU2xpZGVySXRlbSBpcyB0aGUgYWN0aXZlIGVsZW1lbnQgb3IgZ29pbmcgdG8gYmVcbiAgICAgIHRoaXMuX2luaXRmcmFtZVNsaWRlckl0ZW0odGhpcy4kZnJhbWVTbGlkZXJJdGVtcy5maXJzdCgpKTtcblxuICAgICAgd2luZG93LnJpY2hzcG9uc2l2ZUltYWdlKCk7XG5cbiAgICAgIC8vIEFkZCByZXNpemUgZXZlbnRzXG4gICAgICB0aGlzLl9pbml0RXZlbnRzKCk7XG4gICAgfSxcblxuICAgIF9vbkZyYW1lc0xvYWRlZCgpIHtcbiAgICAgIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLiRlbGVtZW50LmFkZENsYXNzKCdmcmFtZXMtbG9hZGVkJyk7XG5cbiAgICAgIHRoaXMuX3JJZCA9IG51bGw7XG5cbiAgICAgIHRoaXMuX292ZXJsYXkuZmFkZU91dCgxMDAwLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX292ZXJsYXkucmVtb3ZlKCk7XG4gICAgICB9KTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NsaWRlVG9TdGFydGluZ1NlYXQoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVmcmFtZVNsaWRlckl0ZW0uZHJhZ0NvbnRyb2wuZW5hYmxlKCk7XG4gICAgICB9LCAxNTAwKTtcbiAgICB9LFxuXG4gICAgaW5pdF9ydGwoKSB7XG4gICAgICB0aGlzLl9mcmFtZVNsaWRlckl0ZW1EZWZhdWx0cy5mcmFtZVN0YXRlLmRpcmVjdGlvbiA9ICdiYWNrd2FyZCc7XG4gICAgfSxcblxuICAgIF9pbml0ZnJhbWVTbGlkZXJJdGVtKCRlbGVtZW50KSB7XG4gICAgICB0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbSA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuJGZyYW1lU2xpZGVySXRlbXMuaW5kZXgoJGVsZW1lbnQpOyAvLyBnZXQgdGhlIGluZGV4IG9mIHRoZSBlbGVtZW10IHdpdGhpbiBhbGwgZnJhbWVzbGlkZXIgaXRlbXM7XG5cbiAgICAgIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtID0gJC5leHRlbmQodHJ1ZSwge30sIHRoaXMuX2ZyYW1lU2xpZGVySXRlbURlZmF1bHRzKTsgLy8gQ29weSBzbGlkZSBkZWZhdWx0cyBpbnRvIHRoZSBuZXdcbiAgICAgIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLmRyYWdDb250cm9sID0gdGhpcy5fZHJhZ0NvbnRyb2w7IC8vIFNldCBkcmFnIGNvbnRyb2xcbiAgICAgIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLiRlbGVtZW50ID0gJGVsZW1lbnQ7IC8vIFNldCBzbGlkZSBlbGVtZW50XG4gICAgICB0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS4kaW5mb0NvbnRhaW5lclRlbXBsYXRlcyA9ICQoJy5pbmZvQ29udGFpbmVyVGVtcGxhdGVzID4gZGl2JywgdGhpcy4kZWxlbWVudCk7XG5cbiAgICAgIC8vIEFkZCB0aGVlIGFjdGl2ZXNsaWRlcml0ZW0gaW50byBhcnJheSBvZiBwcmV2aW91c2x0IGFjdGl2YXRlZCBzbGlkZXNcbiAgICAgIHRoaXMuYWN0aXZhdGVkRnJhbWVTbGlkZXJJdGVtc1tpbmRleF0gPSB0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbTtcblxuICAgICAgLy8gSW5pdCB0aGUgU3ByaXRlU3BpbiBwbHVnaW4gKG1ldGhvZCBjYW4gYmUgcnVuIGFmdGVyIGRlc3Ryb3lpbmcgU3ByaXRlU3BpbiBpbnN0YW5jZSlcbiAgICAgIHRoaXMuX2luaXRTcHJpdGVTcGluKCk7XG5cbiAgICAgIC8vIEluaXQgQmFja2dyb3VuZCBPdmVybGF5IGVmZmVjdFxuICAgICAgdGhpcy5faW5pdEJhY2tncm91bmRPdmVybGF5KHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtKTtcblxuICAgICAgLy8gVXBkYXRlIGxpbmVhciBrZXlsaW5lcyBpbiBoZWFkaW5nc1xuICAgICAgJCgnLmhlYWRpbmdMaW5lYXInLCAkZWxlbWVudCkuSGVhZGluZ3MoJ2xpbmVhckxpbmVzJyk7XG5cbiAgICAgIC8vIEFkZCBpbiBhY3RpdmUgY2xhc3NcbiAgICAgIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLiRlbGVtZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9LFxuXG4gICAgX3VuaW5pdGZyYW1lU2xpZGVySXRlbSgpIHtcbiAgICAgIC8vIEFkZCBpbiBhY3RpdmUgY2xhc3NcbiAgICAgIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdiYWNrZ3JvdW5kT3ZlcmxheUFjdGl2ZScpO1xuXG4gICAgICAvLyBDbGVhciBEcmFnRGVhbGVyR3RlIHRpbWVvdXRcblxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLmRyYWdDb250cm9sLmFjdGl2ZVBhdXNlVGltb3V0KTtcbiAgICB9LFxuXG4gICAgX2NvbmZpZ1Nwcml0ZVNwaW4oKSB7XG4gICAgICAvLyBSZWdpc3RlciBub0JlaGF2aW9yIG1vZHVsZTogY2xpY2tpbmcvZHJhZ2dpbmcgU3ByaXRlU3BpbiB3aWxsIGRvIG5vdGhpbmdcbiAgICAgIC8vIHdoZW4gaXQgaXMgdXNlZCAodG8gc3RvcCBTcHJpdGVTcGluIGNhcHR1cmluZyB2ZXJ0aWNhbCBzY3JvbGwgb24gbW9iaWxlKVxuXG4gICAgICBpZiAodHlwZW9mIFNwcml0ZVNwaW4ubW9kcy5ub0JlaGF2aW9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBTcHJpdGVTcGluLnJlZ2lzdGVyTW9kdWxlKCdub0JlaGF2aW9yJywge30pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfaW5pdFNwcml0ZVNwaW4oKSB7XG4gICAgICAvLyBDYWxsIGdldEZyYW1lc0RhdGEgdG8gcG9wdWxhdGUgdGhlIGZyYW1lc1NvdXJjZSBhcnJheVxuICAgICAgdGhpcy5fZ2V0RnJhbWVzRGF0YSgpO1xuXG4gICAgICBsZXQgc3ByaXRlU3BpblN0YXJ0RnJhbWUgPSAodGhpcy5hY3RpdmVmcmFtZVNsaWRlckl0ZW0uZnJhbWVDb3VudCAvICh0aGlzLl9udW1iZXJPZldheXBvaW50cyAtIDEpKSAqIHRoaXMuX2luaXRpYWxQb3NpdGlvbjtcblxuICAgICAgdGhpcy5hY3RpdmVmcmFtZVNsaWRlckl0ZW0uZnJhbWVTdGF0ZS5wb3NpdGlvbiA9ICh0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS5mcmFtZUNvdW50IC8gdGhpcy5fbnVtYmVyT2ZXYXlwb2ludHMpICogMjtcblxuICAgICAgLy8gSWYgUnVubmluZyB1bmRlciByaWdodCB0byBsZWZ0IHJldmVyc2UgZnJhbWVzXG4gICAgICBpZiAoc2l0ZS5ydGwpIHtcbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBzdGFydCBmcmFtZSBzbyBpdHMgdGhlIGVuZFxuICAgICAgICBzcHJpdGVTcGluU3RhcnRGcmFtZSA9IHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLmZyYW1lQ291bnQgLSBzcHJpdGVTcGluU3RhcnRGcmFtZTtcblxuICAgICAgICAvLyBBbHNvIHVwZGF0ZSB0aGUgcG9zaXRpb24gdmFsdWUgdG8gcmVmbGVjdCB3aGVyZSBzdGFydGluZyBiYWNrIHRvIGZyb250XG4gICAgICAgIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLmZyYW1lU3RhdGUucG9zaXRpb24gPSB0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS5mcmFtZUNvdW50IC0gdGhpcy5hY3RpdmVmcmFtZVNsaWRlckl0ZW0uZnJhbWVTdGF0ZS5wb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgLy8gVXNlIHRoZSBwbHVnaW4gb24gdGhlIHRhcmdldCBlbGVtZW50IHdpdGggc291cmNlXG4gICAgICB0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS4kc3ByaXRlU3BpbkVsZW1lbnQuc3ByaXRlc3Bpbih7XG4gICAgICAgIHNvdXJjZTogdGhpcy5hY3RpdmVmcmFtZVNsaWRlckl0ZW0uZnJhbWVzU291cmNlLFxuICAgICAgICBmcmFtZTogc3ByaXRlU3BpblN0YXJ0RnJhbWUsXG4gICAgICAgIHdpZHRoOiAkKHRoaXMuc3ByaXRlQ29udGFpbmVyQ29udGV4dFJlZiwgdGhpcy5hY3RpdmVmcmFtZVNsaWRlckl0ZW0uJGVsZW1lbnQpLndpZHRoKCksXG4gICAgICAgIGhlaWdodDogJCh0aGlzLnNwcml0ZUNvbnRhaW5lckNvbnRleHRSZWYsIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLiRlbGVtZW50KS5oZWlnaHQoKSxcbiAgICAgICAgYW5pbWF0ZTogZmFsc2UsXG4gICAgICAgIGZyYW1lVGltZTogNDAsXG4gICAgICAgIGJlaGF2aW9yOiAnbm9CZWhhdmlvcicsXG4gICAgICAgIC8vIENhbnZhcyBkb2Vzbid0IHNjYWxlIGRvd24gd2VsbCAoaW1hZ2UgcXVhbGl0eSkgc28gd2UgdXNlIGltYWdlcyBvbiBtb2JpbGVcbiAgICAgICAgLy8gZXhjZXB0IFdpbmRvd3MgTW9iaWxlIHdoaWNoIHBlcmZvcm1zIGJldHRlciB3aXRoIGNhbnZhc1xuICAgICAgICByZW5kZXJlcjogKHRoaXMudG91Y2hTdGF0ZSA9PT0gJ3RvdWNoJyAmJiAhc2l0ZS51dGlscy5pc1dpbmRvd3NQaG9uZSgpKSA/ICdpbWFnZScgOiAnY2FudmFzJyxcbiAgICAgICAgcHJlbG9hZENvdW50OiB0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS5mcmFtZUNvdW50LFxuICAgICAgICBvbkxvYWQ6IHRoaXMuX29uRnJhbWVzTG9hZGVkKClcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTZXQgQVBJIG9iamVjdFxuICAgICAgdGhpcy5hY3RpdmVmcmFtZVNsaWRlckl0ZW0uc3ByaXRlU3BpbkFwaSA9IHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLiRzcHJpdGVTcGluRWxlbWVudC5zcHJpdGVzcGluKCdhcGknKTtcblxuXG4gICAgICAvLyBTZXQgRGF0YSBvYmplY3RcbiAgICAgIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLnNwcml0ZVNwaW5EYXRhID0gdGhpcy5hY3RpdmVmcmFtZVNsaWRlckl0ZW0uJHNwcml0ZVNwaW5FbGVtZW50LmRhdGEoJ3Nwcml0ZXNwaW4nKTtcbiAgICB9LFxuXG4gICAgX2luaXREcmFnRGVhbGVyKCkge1xuICAgICAgbGV0IHNsaWRlckluaXRpYWxQb3NpdGlvbiA9ICh0aGlzLl9pbml0aWFsUG9zaXRpb24gLyAodGhpcy5fbnVtYmVyT2ZXYXlwb2ludHMgLSAxKSk7XG4gICAgICBjb25zdCBjb250cm9sRWxlbWVudCA9IHRoaXMuJGVsZW1lbnQuZmluZCh0aGlzLnNsaWRlckVsZW1lbnRSZWYpLmdldCgwKTsgLy8gU2hvdWxkIG9ubHkgYmUgb25lIGVsZW1lbnRcbiAgICAgIGNvbnN0ICRzbGlkZXJQcm9ncmVzcyA9ICQodGhpcy5zbGlkZXJQcm9ncmVzc1JlZiwgdGhpcy5hY3RpdmVmcmFtZVNsaWRlckl0ZW0uJGVsZW1lbnQpO1xuXG4gICAgICBpZiAoc2l0ZS5ydGwpIHtcbiAgICAgICAgLy8gUmV2ZXJzZSBpbml0YWwgcG9zaXRpb24gb2YgZHJhZ2RlYWxlclxuICAgICAgICBzbGlkZXJJbml0aWFsUG9zaXRpb24gPSAxIC0gc2xpZGVySW5pdGlhbFBvc2l0aW9uO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkcmFnU2xpZGVyID0gbmV3IHdpbmRvdy5EcmFnZGVhbGVyKGNvbnRyb2xFbGVtZW50LCB7XG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICBzdGVwczogdGhpcy5fbnVtYmVyT2ZXYXlwb2ludHMsXG4gICAgICAgIHg6IHNsaWRlckluaXRpYWxQb3NpdGlvbixcbiAgICAgICAgc2xpZGU6IGZhbHNlLFxuICAgICAgICBzcGVlZDogMC4xLFxuICAgICAgICB0YXBQYXVzZVRpbWVvdXQ6IDEwMDAsXG4gICAgICAgIHNsaWRlT25UYXA6IHRydWUsXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAyMDAsXG4gICAgICAgIGRyYWdTdGFydENhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgJCh0aGlzLmhhbmRsZSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLiRlbGVtZW50LnRyaWdnZXIoJ2JhY2tncm91bmRPdmVybGF5Lm9uJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZHJhZ1N0b3BDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICQodGhpcy5oYW5kbGUpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhbmltYXRpb25DYWxsYmFjazogKHgsIHkpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25WYWwgPSBNYXRoLnJvdW5kKHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLmZyYW1lQ291bnQgKiB4KTtcblxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBmcmFtZXMgaGF2ZSBsb2FkZWRcbiAgICAgICAgICAgIGlmICghdGhpcy5hY3RpdmVmcmFtZVNsaWRlckl0ZW0uJGVsZW1lbnQgfHwgdGhpcy5hY3RpdmVmcmFtZVNsaWRlckl0ZW0uJGVsZW1lbnQuaGFzQ2xhc3MoJ2ZyYW1lcy1sb2FkZWQnKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBdm9pZCBSYWNlIENvbmRpdGlvblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBOdW1iZXIuaXNOYU4ocG9zaXRpb25WYWwpIHx8XG4gICAgICAgICAgICAgICFBcnJheS5pc0FycmF5KHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLmZyYW1lc1NvdXJjZSkgfHxcbiAgICAgICAgICAgICAgKHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLmZyYW1lc1NvdXJjZS5sZW5ndGggPT09IDApIHx8XG4gICAgICAgICAgICAgICF0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS5mcmFtZXNTb3VyY2VbcG9zaXRpb25WYWxdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS5zcHJpdGVTcGluQXBpLnVwZGF0ZUZyYW1lKHBvc2l0aW9uVmFsKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLmZyYW1lU3RhdGUucG9zaXRpb24gPSBwb3NpdGlvblZhbDtcblxuICAgICAgICAgICAgLy8gYXJlIHdlIG5lYXIgdGhlIHRhcmdldCB5ZXQ/XG4gICAgICAgICAgICAvLyBpZiBzbywgc2hvdyB0aGUgcmVsZXZhbnQgaW5mb3JtYXRpb25cblxuICAgICAgICAgICAgY29uc3QgY2xvc2VzdFN0ZXAgPSB0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS5kcmFnQ29udHJvbC5nZXRDbG9zZXN0U3RlcHMoW3gsIHldKTtcblxuICAgICAgICAgICAgLy8gSG93IGZhciBmcm9tIHRhcmdldCBwb2ludCB3ZSBzaG91bGQgYmUgYmVmb3JlIHdlIHNob3dcbiAgICAgICAgICAgIC8vIHRoZSBpbmZvcm1hdGlvbiBwZXJ0YWluaW5nIHRvIHRoZSB3YXlwb2ludFxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VVbnRpbFNob3cgPSAwLjE7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aXRsZVRpbWVvdXQpO1xuXG4gICAgICAgICAgICB0aGlzLl90aXRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLmRyYWdDb250cm9sLnZhbHVlLnRhcmdldFswXSAtIHgpIDwgZGlzdGFuY2VVbnRpbFNob3cpIHtcbiAgICAgICAgICAgICAgICAvLyBmaWd1cmUgb3V0IHdoaWNoIHBvaW50IHRvIG1ha2UgYWN0aXZlXG4gICAgICAgICAgICAgICAgdGhpcy5fZmluZEFjdGl2ZVNsaWRlKGNsb3Nlc3RTdGVwWzBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTApO1xuXG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcHJvZ3Jlc3MgYmFyIChyZXZlcnNlZCBmb3IgUlRMKVxuXG4gICAgICAgICAgICBpZiAoc2l0ZS5ydGwpIHtcbiAgICAgICAgICAgICAgJHNsaWRlclByb2dyZXNzLndpZHRoKGAkezEwMCAtICh4ICogMTAwKX0lYCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkc2xpZGVyUHJvZ3Jlc3Mud2lkdGgoYCR7eCAqIDEwMH0lYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBTaWxlbnRseSBpZ25vcmUgZXhjZXB0aW9uLiBJdCB3aWxsIGF1dG8gZml4IGl0c2VsZiBvbiBuZXh0IHJlbmRlciB3aGVuIGltYWdlcyBhcmUgYXZhaWxhYmxlLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2RyYWdDb250cm9sID0gZHJhZ1NsaWRlcjtcbiAgICB9LFxuXG4gICAgX2ZpbmRBY3RpdmVTbGlkZSAoc3RlcFJhdGlvKSB7XG4gICAgICBjb25zdCB7IGZyYW1lQ291bnQgfSA9IHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtO1xuICAgICAgY29uc3Qgd2F5cG9pbnRDb3VudCA9IHRoaXMuX251bWJlck9mV2F5cG9pbnRzO1xuXG4gICAgICBjb25zdCBhY3RpdmVTbGlkZSA9IE1hdGgucm91bmQoKGZyYW1lQ291bnQgKiBzdGVwUmF0aW8pIC8gKGZyYW1lQ291bnQgLyAod2F5cG9pbnRDb3VudCAtIDEpKSk7XG5cbiAgICAgIHRoaXMuX3RpdGxlRGlzcGxheShhY3RpdmVTbGlkZSk7XG4gICAgfSxcblxuICAgIF9pbml0QmFja2dyb3VuZE92ZXJsYXkgKGFjdGl2ZWZyYW1lU2xpZGVySXRlbSkge1xuICAgICAgY29uc3QgeyAkZWxlbWVudCB9ID0gYWN0aXZlZnJhbWVTbGlkZXJJdGVtO1xuICAgICAgY29uc3QgJGNvbnRyb2xFbGVtZW50ID0gJCh0aGlzLnNsaWRlckVsZW1lbnRSZWYsICRlbGVtZW50KTtcblxuICAgICAgaWYgKCRlbGVtZW50Lmhhc0NsYXNzKCdiYWNrZ3JvdW5kT3ZlcmxheScpKSB7XG4gICAgICAgICRlbGVtZW50LnByZXBlbmQoJCgnPGRpdiBjbGFzcz1cImJhY2tncm91bmRPdmVybGF5RWxlbWVudFwiLz4nKSk7XG4gICAgICAgIC8vIFNob3cgQmFja2dyb3VuZCBPdmVybGF5IHdoZW4gaG92ZXJpbmcgY29udHJvbHNcbiAgICAgICAgJGNvbnRyb2xFbGVtZW50Lm9uKCdtb3VzZWVudGVyIHRvdWNoc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgJGVsZW1lbnQudHJpZ2dlcignYmFja2dyb3VuZE92ZXJsYXkub24nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGV2ZW50cyBmb3IgdHJpZ2dlcmVkIGJhY2tncm91bmRPdmVybGF5IG9uL29mZlxuICAgICAgICAkZWxlbWVudC5vbignYmFja2dyb3VuZE92ZXJsYXkub24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kT3ZlcmxheVRvZ2dsZShldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRlbGVtZW50Lm9uKCdiYWNrZ3JvdW5kT3ZlcmxheS5vZmYnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kT3ZlcmxheVRvZ2dsZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfYmFja2dyb3VuZE92ZXJsYXlUb2dnbGUgKGV2ZW50KSB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgIGNvbnN0IHR1cm5Pbk92ZXJsYXkgPSAoZXZlbnQubmFtZXNwYWNlID09PSAnb24nKTtcbiAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gJ2JhY2tncm91bmRPdmVybGF5QWN0aXZlJztcblxuICAgICAgaWYgKHR1cm5Pbk92ZXJsYXkpIHtcbiAgICAgICAgJGVsZW1lbnQuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kT3ZlcmxheVNjcm9sbC5hZGQoJGVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kT3ZlcmxheVNjcm9sbC5yZW1vdmUoJGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfYmFja2dyb3VuZE92ZXJsYXlTY3JvbGw6IHtcbiAgICAgICRlbGVtZW50OiBudWxsLFxuICAgICAgZWxlbWVudEhlaWdodDogMCxcbiAgICAgIGFkZGVkOiBmYWxzZSxcblxuICAgICAgYWRkOiAoJGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmFkZGVkKSB7XG4gICAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgICAgICAgIHRoaXMuZWxlbWVudEhlaWdodCA9ICRlbGVtZW50LmhlaWdodCgpO1xuICAgICAgICAgICQod2luZG93KS5vbigndGhyb3R0bGVkU2Nyb2xsJywgJC5wcm94eSh0aGlzLmNoZWNrLCB0aGlzKSk7XG4gICAgICAgICAgdGhpcy5hZGRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogKCkgPT4ge1xuICAgICAgICAkKHdpbmRvdykub2ZmKCd0aHJvdHRsZWRTY3JvbGwnLCB0aGlzLmNoZWNrKTtcbiAgICAgICAgdGhpcy5hZGRlZCA9IGZhbHNlO1xuICAgICAgfSxcblxuICAgICAgY2hlY2s6ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBlbGVtZW50SGVpZ2h0LCAkZWxlbWVudCB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgZWxlbWVudE9mZnNldCA9ICRlbGVtZW50Lm9mZnNldCgpO1xuICAgICAgICBjb25zdCB3aW5kb3dUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9ICQoJy5TdWJOYXZpZ2F0aW9uJykuaGVpZ2h0KCkgKyAkKCcuaGVhZGVyV3JhcHBlcicpLmhlaWdodCgpO1xuICAgICAgICBjb25zdCBzY3JvbGxlZEFib3ZlID0gKHdpbmRvd1RvcCArICQod2luZG93KS5oZWlnaHQoKSkgPD0gZWxlbWVudE9mZnNldC50b3A7XG4gICAgICAgIGNvbnN0IHNjcm9sbGVkQmVsb3cgPSAod2luZG93VG9wICsgaGVhZGVySGVpZ2h0KSA+PSBlbGVtZW50SGVpZ2h0ICsgZWxlbWVudE9mZnNldC50b3A7XG5cbiAgICAgICAgaWYgKHNjcm9sbGVkQWJvdmUgfHwgc2Nyb2xsZWRCZWxvdykge1xuICAgICAgICAgICRlbGVtZW50LnRyaWdnZXIoJ2JhY2tncm91bmRPdmVybGF5Lm9mZicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9pbml0RXZlbnRzKCkge1xuICAgICAgJCh3aW5kb3cpLnNtYXJ0cmVzaXplKCgpID0+IHtcbiAgICAgICAgdGhpcy5fc2xpZGVyUmVzaXplKHRoaXMpO1xuICAgICAgICB0aGlzLl9zZXRJbmZvQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgX2NlbnRlckluZm9Db250YWluZXIoKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U3RhdGUgIT09ICdtb2JpbGUnKSB7XG4gICAgICAgIGNvbnN0IHRvcENhbGN1bGF0aW9uID0gKCQoJy5mcmFtZVNsaWRlckJnJywgdGhpcy4kZWxlbWVudCkuaGVpZ2h0KCkgLSAkKHRoaXMuJGFycmFuZ2VtZW50SW5mb3JtYXRpb25Db250YWluZXIpLm91dGVySGVpZ2h0KCkpIC8gMjtcblxuICAgICAgICAkKCcuaW5mb0NvbnRhaW5lcicsIHRoaXMuJGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgdG9wOiB0b3BDYWxjdWxhdGlvblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmVzaXplIHNsaWRlciBhbmQgc2V0IGN1cnJlbnRTdGF0ZSBvbiB3aW5kb3cgcmVzaXplXG4gICAgX3NsaWRlclJlc2l6ZSgpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzVGFyZ2V0RnJhbWVzID0gJCh0aGlzLnNwcml0ZXNwaW5GcmFtZXNSZWYsIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLiRlbGVtZW50KTtcblxuICAgICAgdGhpcy5fc2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICB0aGlzLl9jZW50ZXJJbmZvQ29udGFpbmVyKCk7XG5cbiAgICAgIGNvbnN0IHRhcmdldEZyYW1lcyA9IHRoaXMuX2dldFRhcmdldEZyYW1lcygpO1xuXG4gICAgICBpZiAocHJldmlvdXNUYXJnZXRGcmFtZXMuZ2V0KDApICE9PSB0YXJnZXRGcmFtZXMuZ2V0KDApKSB7XG4gICAgICAgIC8vIFN3aXRjaGluZyBiZXR3ZWVuIG1vYmlsZS9ub24tbW9iaWxlXG4gICAgICAgIC8vIERlc3Ryb3kgKyByZWluaXQgU3ByaXRlU3BpblxuICAgICAgICBwcmV2aW91c1RhcmdldEZyYW1lc1xuICAgICAgICAgIC5zcHJpdGVzcGluKCdkZXN0cm95JylcbiAgICAgICAgICAuZW1wdHkoKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLnNwcml0ZXNwaW5GcmFtZXNSZWYucmVwbGFjZSgnLicsICcnKSk7XG5cbiAgICAgICAgdGhpcy5faW5pdFNwcml0ZVNwaW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNwcml0ZUNvbnRhaW5lcldpZHRoID0gJCh0aGlzLnNwcml0ZUNvbnRhaW5lckNvbnRleHRSZWYsIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLiRlbGVtZW50KS53aWR0aCgpO1xuICAgICAgICBjb25zdCB0YXJnZXRGcmFtZXNXaWR0aCA9IHRhcmdldEZyYW1lcy53aWR0aCgpO1xuXG4gICAgICAgIC8vIElmIHBhZ2Ugd2lkdGggaGFzIGNoYW5nZWQsXG4gICAgICAgIC8vIHJlc2l6ZSBTcHJpdGVTcGluIHRvIGZpdCBjb250YWluZXIgd2lkdGggKHNldCBpbiBDU1MpXG4gICAgICAgIGlmIChzcHJpdGVDb250YWluZXJXaWR0aCAhPT0gdGFyZ2V0RnJhbWVzV2lkdGgpIHtcbiAgICAgICAgICB0YXJnZXRGcmFtZXMuc3ByaXRlc3Bpbih7XG4gICAgICAgICAgICB3aWR0aDogc3ByaXRlQ29udGFpbmVyV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6ICQodGhpcy5zcHJpdGVDb250YWluZXJDb250ZXh0UmVmLCB0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS4kZWxlbWVudCkuaGVpZ2h0KClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBfc2V0Q3VycmVudFN0YXRlICgpIHtcbiAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gKCQod2luZG93KS53aWR0aCgpID4gNzQwKSA/ICdkZXNrdG9wJyA6ICdtb2JpbGUnO1xuICAgIH0sXG5cbiAgICBfc2V0VG91Y2hTdGF0ZSAoKSB7XG4gICAgICB0aGlzLnRvdWNoU3RhdGUgPSAkKCdodG1sJykuaGFzQ2xhc3MoJ3RvdWNoQ2FwYWJpbGl0eScpID8gJ3RvdWNoJyA6ICdub3RvdWNoJztcbiAgICB9LFxuXG4gICAgX3RpdGxlRGlzcGxheShzbGlkZXJQb3NpdGlvbikge1xuICAgICAgaWYgKHNsaWRlclBvc2l0aW9uICE9PSB0aGlzLl9jdXJyZW50V2F5cG9pbnQgJiYgIXRoaXMuaXNPbGRTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5fc2hvd3RpdGxlKHNsaWRlclBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5fY3VycmVudFdheXBvaW50ID0gc2xpZGVyUG9zaXRpb247XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgX2xvYWRJbWFnZShpbWFnZSwgY29udGV4dHVhbEltYWdlRWxlbWVudCkge1xuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gaW1hZ2U7XG5cblxuICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29udGV4dHVhbEltYWdlRWxlbWVudC5jc3Moe1xuICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoXCIke3RoaXMuc3JjfVwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcmBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29udGV4dHVhbEltYWdlRWxlbWVudC5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICB9LCAyMjApO1xuICAgICAgfTtcbiAgICB9LFxuXG4gICAgX3NldHVwT2RvbWV0ZXIoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNPbGRTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5vZG9tZXRlciA9ICQodGhpcy4kY29udGVudENvbnRhaW5lcikuZmluZCgnLm9kbycpLmdldCgwKTtcbiAgICAgICAgY29uc3QgaW5pdGlhbCA9ICQodGhpcy5vZG9tZXRlcikuaHRtbCgpO1xuICAgICAgICBjb25zdCBmb3JtYXQgPSB0aGlzLm9kb21ldGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1mb3JtYXQnKTtcblxuICAgICAgICBpZiAoaW5pdGlhbCAhPT0gJycpIHtcbiAgICAgICAgICBuZXcgT2RvbWV0ZXIoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgICAgICAgICAgZWw6IHRoaXMub2RvbWV0ZXIsXG4gICAgICAgICAgICB2YWx1ZTogaW5pdGlhbCxcbiAgICAgICAgICAgIGZvcm1hdCxcbiAgICAgICAgICAgIHRoZW1lOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuX25vT2RvbWV0ZXIgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRjb250ZW50Q29udGFpbmVyLmFkZENsYXNzKCdub09kbycpO1xuICAgICAgICAgICQoJy5saXRlcmFnZScpLnJlbW92ZSgpO1xuICAgICAgICAgIHRoaXMuX25vT2RvbWV0ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgX3NldEluZm9Db250YWluZXJIZWlnaHQoKSB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NDApIHtcbiAgICAgICAgdGhpcy4kY29udGVudENvbnRhaW5lci5oZWlnaHQoJCh0aGlzLiRhcnJhbmdlbWVudEluZm9ybWF0aW9uQ29udGFpbmVyKS5vdXRlckhlaWdodCgpKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2dldE5ld0NvbnRlbnQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogdGhpcy5hY3RpdmVFbGVtZW50LmZpbmQoJy50aXRsZScpLmh0bWwoKSxcbiAgICAgICAgYXJyYW5nZW1lbnQ6IHRoaXMuYWN0aXZlRWxlbWVudC5maW5kKCcubGFyZ2VUaXRsZScpLmh0bWwoKSxcbiAgICAgICAgZGltZW5zaW9uczogdGhpcy5hY3RpdmVFbGVtZW50LmZpbmQoJy5kaW1lbnNpb25zJykuaHRtbCgpLFxuICAgICAgICBjb3B5OiB0aGlzLmFjdGl2ZUVsZW1lbnQuZmluZCgnLmNvcHknKS5odG1sKCksXG4gICAgICAgIHBpY3R1cmU6IHRoaXMuYWN0aXZlRWxlbWVudC5maW5kKCcuUGljdHVyZScpLmh0bWwoKSxcbiAgICAgICAgb2RvbWV0ZXI6IHRoaXMuYWN0aXZlRWxlbWVudC5maW5kKCcub2RvJykuaHRtbCgpLFxuICAgICAgICBvZG9tZXRlckxhYmVsOiB0aGlzLmFjdGl2ZUVsZW1lbnQuZmluZCgnLm9kby1sYWJlbCcpLmF0dHIoJ2FyaWEtbGFiZWwnKVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgX2FkZE5ld0NvbnRlbnQoKSB7XG4gICAgICBjb25zdCBuZXdDb250ZW50ID0gdGhpcy5fZ2V0TmV3Q29udGVudCgpO1xuXG4gICAgICBpZiAoIXRoaXMuY29udGVudEVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMuY29udGVudEVsZW1lbnRzID0ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLiRhcnJhbmdlbWVudEluZm9ybWF0aW9uQ29udGFpbmVyLmZpbmQoJy50aXRsZScpLFxuICAgICAgICAgIGFycmFuZ2VtZW50OiB0aGlzLiRhcnJhbmdlbWVudEluZm9ybWF0aW9uQ29udGFpbmVyLmZpbmQoJy5sYXJnZVRpdGxlJyksXG4gICAgICAgICAgZGltZW5zaW9uczogdGhpcy4kYXJyYW5nZW1lbnRJbmZvcm1hdGlvbkNvbnRhaW5lci5maW5kKCcuZGltZW5zaW9ucycpLFxuICAgICAgICAgIGNvcHk6IHRoaXMuJGFycmFuZ2VtZW50SW5mb3JtYXRpb25Db250YWluZXIuZmluZCgnLmNvcHknKSxcbiAgICAgICAgICBwaWN0dXJlOiB0aGlzLiRhcnJhbmdlbWVudEluZm9ybWF0aW9uQ29udGFpbmVyLmZpbmQoJy5QaWN0dXJlJyksXG4gICAgICAgICAgb2RvbWV0ZXI6ICQodGhpcy5vZG9tZXRlciksXG4gICAgICAgICAgb2RvbWV0ZXJMYWJlbDogdGhpcy4kYXJyYW5nZW1lbnRJbmZvcm1hdGlvbkNvbnRhaW5lci5maW5kKCcub2RvLWxhYmVsJylcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250ZW50RWxlbWVudHMudGl0bGUuaHRtbChuZXdDb250ZW50LnRpdGxlKTtcbiAgICAgIHRoaXMuY29udGVudEVsZW1lbnRzLmFycmFuZ2VtZW50Lmh0bWwobmV3Q29udGVudC5hcnJhbmdlbWVudCk7XG4gICAgICB0aGlzLmNvbnRlbnRFbGVtZW50cy5kaW1lbnNpb25zLmh0bWwobmV3Q29udGVudC5kaW1lbnNpb25zKTtcbiAgICAgIHRoaXMuY29udGVudEVsZW1lbnRzLmNvcHkuaHRtbChuZXdDb250ZW50LmNvcHkpO1xuICAgICAgdGhpcy5jb250ZW50RWxlbWVudHMub2RvbWV0ZXIuaHRtbChuZXdDb250ZW50Lm9kb21ldGVyKTtcbiAgICAgIHRoaXMuY29udGVudEVsZW1lbnRzLm9kb21ldGVyTGFiZWwuYXR0cignYXJpYS1sYWJlbCcsIGAke25ld0NvbnRlbnQub2RvbWV0ZXJMYWJlbH1gKTtcblxuICAgICAgaWYgKG5ld0NvbnRlbnQucGljdHVyZSkge1xuICAgICAgICB0aGlzLmNvbnRlbnRFbGVtZW50cy5waWN0dXJlLnNob3coKTtcbiAgICAgICAgdGhpcy5jb250ZW50RWxlbWVudHMucGljdHVyZS5odG1sKG5ld0NvbnRlbnQucGljdHVyZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRlbnRFbGVtZW50cy5waWN0dXJlLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICBfc2V0RWxlbWVudEhlaWdodCgpIHtcbiAgICAgIGNvbnN0IGFkanVzdG1lbnQgPSAob3BhY2l0eUNoYW5nZSA9IGZhbHNlKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldEluZm9Db250YWluZXJIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5fY2VudGVySW5mb0NvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLiRjb250ZW50Q29udGFpbmVyLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcblxuICAgICAgICBpZiAob3BhY2l0eUNoYW5nZSkge1xuICAgICAgICAgIHRoaXMuJGNvbnRlbnRDb250YWluZXIuY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuJGFycmFuZ2VtZW50SW5mb3JtYXRpb25Db250YWluZXIuZmluZCgnaW1nJykubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoIXRoaXMuJGFycmFuZ2VtZW50SW5mb3JtYXRpb25Db250YWluZXIuZmluZCgnaW1nJylbMF0uY29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLiRhcnJhbmdlbWVudEluZm9ybWF0aW9uQ29udGFpbmVyLmZpbmQoJ2ltZycpLmxvYWQoKCkgPT4ge1xuICAgICAgICAgICAgYWRqdXN0bWVudCh0cnVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGp1c3RtZW50KHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGp1c3RtZW50KCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9zaG93dGl0bGUodGl0bGVQb3NpdGlvbikge1xuICAgICAgbGV0IG5ld0NvbnRlbnQ7XG4gICAgICBsZXQgaXRlbVBvc2l0aW9uO1xuXG4gICAgICBpZiAoc2l0ZS5ydGwpIHtcbiAgICAgICAgaXRlbVBvc2l0aW9uID0gdGhpcy4kd2F5cG9pbnREaXZzLmxlbmd0aCAtIDEgLSB0aXRsZVBvc2l0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbVBvc2l0aW9uID0gdGl0bGVQb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYWN0aXZlQ29udGVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50ID0gJCh0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS4kaW5mb0NvbnRhaW5lclRlbXBsYXRlcykuZmlsdGVyKGBbZGF0YS1pdGVtLXBvc2l0aW9uPVwiJHt0aXRsZVBvc2l0aW9ufVwiXWApO1xuICAgICAgICB0aGlzLmFjdGl2ZUNvbnRlbnQgPSBpdGVtUG9zaXRpb247XG5cbiAgICAgICAgaWYgKHRoaXMuaXNPbGRTbGlkZXIpIHtcbiAgICAgICAgICBuZXdDb250ZW50ID0gJCgnLmluZm9Db250YWluZXJUZW1wbGF0ZXMgLnRhYkRhdGEnLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdDb250ZW50ID0gJCgnLmluZm9Db250YWluZXJUZW1wbGF0ZXMgLnRhYkRhdGEnLCB0aGlzLiRlbGVtZW50KS5maWx0ZXIoYFtkYXRhLWl0ZW0tcG9zaXRpb249XCIke3RpdGxlUG9zaXRpb259XCJdYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRhcnJhbmdlbWVudEluZm9ybWF0aW9uQ29udGFpbmVyLmh0bWwobmV3Q29udGVudC5odG1sKCkpO1xuXG4gICAgICAgIHdpbmRvdy5yaWNoc3BvbnNpdmVJbWFnZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc09sZFNsaWRlcikge1xuICAgICAgICAgIHRoaXMuX3NldHVwT2RvbWV0ZXIoKTtcbiAgICAgICAgICB0aGlzLiRjb250ZW50Q29udGFpbmVyLmNzcyh7IG9wYWNpdHk6IDAgfSk7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3NldEVsZW1lbnRIZWlnaHQoKTtcbiAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3NldEVsZW1lbnRIZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZUNvbnRlbnQgIT09IHRpdGxlUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50ID0gJCh0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS4kaW5mb0NvbnRhaW5lclRlbXBsYXRlcykuZmlsdGVyKGBbZGF0YS1pdGVtLXBvc2l0aW9uPVwiJHtpdGVtUG9zaXRpb259XCJdYCk7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRDb250YWluZXIuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2FkZE5ld0NvbnRlbnQoKTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUNvbnRlbnQgPSB0aXRsZVBvc2l0aW9uO1xuICAgICAgICAgIHRoaXMuJHdheXBvaW50RGl2cy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICBpZiAoc2l0ZS5ydGwpIHtcbiAgICAgICAgICAgICQodGhpcy4kd2F5cG9pbnREaXZzW3RoaXMuJHdheXBvaW50RGl2cy5sZW5ndGggLSAxIC0gdGl0bGVQb3NpdGlvbl0pLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzLiR3YXlwb2ludERpdnNbdGl0bGVQb3NpdGlvbl0pLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3NldEVsZW1lbnRIZWlnaHQoKTtcbiAgICAgICAgICB9LCAzNTApO1xuICAgICAgICB9LCAzNTApO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfZG9Nb2JpbGVSZXNpemUoKSB7XG4gICAgICAkKCcuaW5mb0NvbnRhaW5lciAuY29udGVudCcpLmhlaWdodCgkKCcuaW5mb0NvbnRhaW5lciAuY29udGVudCAudGFiRGF0YScpLmhlaWdodCgpKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAqIFNldCB0aGUgc3ByaXRlc3BpbiBiYXNlIGVsZW1lbnQgYW5kXG4gICAgKiBHZXQgZnJhbWUgZGF0YSBmcm9tIGl0cyBkYXRhIGF0dHJpYnV0ZVxuICAgICpcbiAgICAqIEBtZXRob2QgX2dldEZyYW1lc0RhdGFcbiAgICAqL1xuXG4gICAgX2dldEZyYW1lc0RhdGEoKSB7XG4gICAgICAvLyBDaGVjayBDdXJyZW50IFN0YXRlIHRvIGRldGVybWluZyB3aGljaCBlbGVtZW50IHRvIGxvYWQgZnJhbWVzIGZyb21cbiAgICAgIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLiRzcHJpdGVTcGluRWxlbWVudCA9IHRoaXMuX2dldFRhcmdldEZyYW1lcygpO1xuXG4gICAgICAvLyBHZXQgdGhlIGZyYW1lcyBhcnJheSBmcm9tIHRoZSBtb2JpbGUgb3IgZGVza3RvcCBkYXRhIGF0dHJpYnV0ZVxuICAgICAgdGhpcy5hY3RpdmVmcmFtZVNsaWRlckl0ZW0uZnJhbWVzU291cmNlID0gdGhpcy5hY3RpdmVmcmFtZVNsaWRlckl0ZW0uJHNwcml0ZVNwaW5FbGVtZW50LmRhdGEoJ2ZyYW1lcycpO1xuXG4gICAgICAvLyBTZXQgdGhlIG51bWJlciBvZiBmcmFtZXMsIGFjY291bnQgZm9yIGFycmF5IGluZGV4XG4gICAgICB0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS5mcmFtZUNvdW50ID0gdGhpcy5hY3RpdmVmcmFtZVNsaWRlckl0ZW0uZnJhbWVzU291cmNlLmxlbmd0aCAtIDE7XG5cbiAgICAgIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLmNvbnRleHR1YWxJbWFnZXMgPSB0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS4kc3ByaXRlU3BpbkVsZW1lbnQuZGF0YSgnY29udGV4dHVhbC1pbWFnZXMnKTtcbiAgICB9LFxuXG5cbiAgICBfZ2V0VGFyZ2V0RnJhbWVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlID09PSAnbW9iaWxlJyA/ICQodGhpcy5tb2JpbGVGcmFtZXNSZWYsIHRoaXMuYWN0aXZlZnJhbWVTbGlkZXJJdGVtLiRlbGVtZW50KSA6ICQodGhpcy5kZXNrdG9wRnJhbWVzUmVmLCB0aGlzLmFjdGl2ZWZyYW1lU2xpZGVySXRlbS4kZWxlbWVudCk7XG4gICAgfSxcblxuICAgIF9pc0RldmljZUxhbmRzY2FwZSgpIHtcbiAgICAgIHJldHVybiAodHlwZW9mIHdpbmRvdy5tYXRjaE1lZGlhICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJykubWF0Y2hlcyk7XG4gICAgfSxcbiAgfTtcbiAgalF1ZXJ5LmNyZWF0ZUNvbXBvbmVudCgnSW50ZXJhY3RpdmVTbGlkZXInLCBJbnRlcmFjdGl2ZVNsaWRlcik7XG5cbiAgJCgnLkludGVyYWN0aXZlU2xpZGVyJykuSW50ZXJhY3RpdmVTbGlkZXIoKTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG4iLCJleHBvcnQgY29uc3QgS2V5Q29kZSA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBERUxFVEU6IDQ2LFxuICBET1dOOiA0MCxcbiAgRU5EOiAzNSxcbiAgRVNDOiAyNyxcbiAgSE9NRTogMzYsXG4gIExFRlQ6IDM3LFxuICBQQUdFX0RPV046IDM0LFxuICBQQUdFX1VQOiAzMyxcbiAgUkVUVVJOOiAxMyxcbiAgUklHSFQ6IDM5LFxuICBTUEFDRTogMzIsXG4gIFRBQjogOSxcbiAgVVA6IDM4XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==