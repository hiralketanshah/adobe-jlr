
/******/ (function (modules) { // webpackBootstrap
/******/             // The module cache
/******/             var installedModules = {};
/******/
/******/             // The require function
/******/             function __webpack_require__(moduleId) {
/******/
/******/                             // Check if module is in cache
/******/                             if (installedModules[moduleId]) {
/******/                                             return installedModules[moduleId].exports;
      /******/
    }
    /******/                             // Create a new module (and put it into the cache)
    /******/                             var module = installedModules[moduleId] = {
    /******/                                             i: moduleId,
    /******/                                             l: false,
    /******/                                             exports: {}
          /******/
        };
    /******/
    /******/                             // Execute the module function
    /******/                             modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/                             // Flag the module as loaded
    /******/                             module.l = true;
    /******/
    /******/                             // Return the exports of the module
    /******/                             return module.exports;
        /******/
      }
    /******/
    /******/
    /******/             // expose the modules object (__webpack_modules__)
    /******/             __webpack_require__.m = modules;
    /******/
    /******/             // expose the module cache
    /******/             __webpack_require__.c = installedModules;
    /******/
    /******/             // define getter function for harmony exports
    /******/             __webpack_require__.d = function (exports, name, getter) {
    /******/                             if (!__webpack_require__.o(exports, name)) {
    /******/                                             Object.defineProperty(exports, name, { enumerable: true, get: getter });
          /******/
        }
        /******/
      };
    /******/
    /******/             // define __esModule on exports
    /******/             __webpack_require__.r = function (exports) {
    /******/                             if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/                                             Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
          /******/
        }
    /******/                             Object.defineProperty(exports, '__esModule', { value: true });
        /******/
      };
    /******/
    /******/             // create a fake namespace object
    /******/             // mode & 1: value is a module id, require it
    /******/             // mode & 2: merge all properties of value into the ns
    /******/             // mode & 4: return value when already ns object
    /******/             // mode & 8|1: behave like require
    /******/             __webpack_require__.t = function (value, mode) {
    /******/                             if (mode & 1) value = __webpack_require__(value);
    /******/                             if (mode & 8) return value;
    /******/                             if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /******/                             var ns = Object.create(null);
    /******/                             __webpack_require__.r(ns);
    /******/                             Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/                             if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
    /******/                             return ns;
        /******/
      };
    /******/
    /******/             // getDefaultExport function for compatibility with non-harmony modules
    /******/             __webpack_require__.n = function (module) {
    /******/                             var getter = module && module.__esModule ?
    /******/                                             function getDefault() { return module['default']; } :
    /******/                                             function getModuleExports() { return module; };
    /******/                             __webpack_require__.d(getter, 'a', getter);
    /******/                             return getter;
        /******/
      };
    /******/
    /******/             // Object.prototype.hasOwnProperty.call
    /******/             __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/             // __webpack_public_path__
    /******/             __webpack_require__.p = "";
    /******/
    /******/
    /******/             // Load entry module and return exports
    /******/             return __webpack_require__(__webpack_require__.s = "./src/main/webapp/components/InteractiveSlider/js/InteractiveSlider.js");
      /******/
    })
    /************************************************************************/
    /******/({
    
    /***/ "./node_modules/babel-runtime/core-js/number/is-nan.js":
    /*!*************************************************************!*\
      !*** ./node_modules/babel-runtime/core-js/number/is-nan.js ***!
      \*************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
    
            module.exports = { "default": __webpack_require__(/*! core-js/library/fn/number/is-nan */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/number/is-nan.js"), __esModule: true };
    
            /***/
          }),
    
      /***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/number/is-nan.js":
      /*!*************************************************************************************!*\
        !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/number/is-nan.js ***!
        \*************************************************************************************/
      /*! no static exports found */
      /***/ (function (module, exports, __webpack_require__) {
    
            __webpack_require__(/*! ../../modules/es6.number.is-nan */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.number.is-nan.js");
            module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Number.isNaN;
    
    
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
    
      /***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.number.is-nan.js":
      /*!**********************************************************************************************!*\
        !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.number.is-nan.js ***!
        \**********************************************************************************************/
      /*! no static exports found */
      /***/ (function (module, exports, __webpack_require__) {
    
            // 20.1.2.4 Number.isNaN(number)
            var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
    
            $export($export.S, 'Number', {
              isNaN: function isNaN(number) {
                // eslint-disable-next-line no-self-compare
                return number != number;
              }
            });
    
    
            /***/
          }),
    
      /***/ "./src/main/webapp/components/InteractiveSlider/js/InteractiveSlider.js":
      /*!******************************************************************************!*\
        !*** ./src/main/webapp/components/InteractiveSlider/js/InteractiveSlider.js ***!
        \******************************************************************************/
      /*! no static exports found */
      /***/ (function (module, exports, __webpack_require__) {
    
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
    
                _initialPosition: 0,
    
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
                
                  var contentheight = $(".infoContainer .content").css("height");
                  var spriteContainerheight = $(".spriteContainer").css("height");

                  

                  if(window.innerWidth >= 1280){
                  var maxheightcontent = Math.max(parseInt(contentheight),parseInt(spriteContainerheight))
                  $('.frameSliderItem').css({ height: maxheightcontent });
                  $('.infoContainer', this.$element).css({
                    top: 0
                   });
                  } 


                  if(window.innerWidth >= 768  && window.innerWidth <= 1279.9){
                    var maxheightcontentab = (parseInt(contentheight)+ parseInt(spriteContainerheight))+28;
                     $('.frameSliderItem').css({ height: maxheightcontentab});

                     var topCalculation = $('.frameSliderItem').height() - $(this.$arrangementInformationContainer).outerHeight();
                    
                    $('.infoContainer', this.$element).css({
                    top: topCalculation 
                   });

                   
                  }
                  if(window.innerWidth >= 1  && window.innerWidth <= 767.9){
                   
                   if(parseInt(contentheight)<313){
                     parseInt(contentheight)
                     var maxheightcontentmobile = (parseInt(contentheight)+ parseInt(spriteContainerheight))+372;
                     $('.frameSliderItem').css({ height: maxheightcontentmobile});
                     var topCalculation = maxheightcontentmobile - $(this.$arrangementInformationContainer).outerHeight();
                     $('.infoContainer', this.$element).css({
                      top: topCalculation -344
                      });
                   }
                   else
                   {
                   
                    var maxheightcontentmobile = (parseInt(contentheight)+ parseInt(spriteContainerheight))+28;
                    $('.frameSliderItem').css({ height: maxheightcontentmobile});

                     var topCalculation = $('.frameSliderItem').height() - $(this.$arrangementInformationContainer).outerHeight();

                     $('.infoContainer', this.$element).css({
                      top: topCalculation
                      });
                   }
                 
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
    
                  let len = this.$sliderContainerUpper[0].children.length;
                  let sliderWith = 0;
                  for (var i = 0; i < len; i++) {
    
                    sliderWith += this.$sliderContainerUpper[0].children[i].clientWidth;
    
                  }
                  let mm = (len * 2) - 2;
                  
                  if(window.innerWidth >= 1  && window.innerWidth <= 1279){
                    
                    if(this._numberOfWaypoints == 4){
                      sliderWith += mm * 12
                    }
                    else if(this._numberOfWaypoints == 5){
                      sliderWith += mm * 14
                    }
                    else{
                      sliderWith += mm * 16
                    }
                    

                  }
                  else{
                    if(this._numberOfWaypoints == 4){
                      sliderWith += mm * 18
                    }
                    else if(this._numberOfWaypoints == 5){
                      sliderWith += mm * 20
                    }
                    else{
                      sliderWith += mm * 22
                    }
                    
                   

                  }
                 
    
                  sliderFlexWidth = sliderWith;
    
    
                  if (window.innerWidth == 1920) {
    
                    this.$sliderControls.css({
    
                      width: sliderFlexWidth
                    });
                  }
                  else {
                    this.$sliderControls.css({
    
                      width: sliderFlexWidth
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
                  var ctiupper = $('.sliderContainerUpper', this.$element);
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
                  ctiupper.one('click', onCtiClick);
                  ctiupper.on('keypress', function (evt) {
                    if (evt.which === _aria.KeyCode.RETURN || evt.which === _aria.KeyCode.SPACE) {
                      evt.preventDefault();
                      onCtiClick();
                    }
                  });

                  cti.on('keypress', function (evt) {
                    if (evt.which === _aria.KeyCode.RETURN || evt.which === _aria.KeyCode.SPACE) {
                      evt.preventDefault();
                      onCtiClick();
                    }
                  });
                },
                _slideToStartingSeat: function _slideToStartingSeat() {
                  var dragControl = this.activeframeSliderItem.dragControl;
    
    
                  // if (site.rtl) {
                  //   dragControl.setTargetValueByOffset(dragControl.getOffsetsByRatios([1, 1]), false);
                  // } else {
                  //   dragControl.setTargetValueByOffset(dragControl.getOffsetsByRatios([0, 1]), false);
                  // }
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
                // init_rtl: function init_rtl() {
                //   this._frameSliderItemDefaults.frameState.direction = 'backward';
                // },
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
                    frameTime: 80,
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
    
                  let sliderWidth = $('.sliderControls').width();
                  let len = this.$sliderContainerUpper[0].children.length;
                  let sliderWith = 0;
                  let sliderBtn = [];
                  if(window.innerWidth >= 1  && window.innerWidth <= 1279){
                    for (var i = 0; i < len; i++) {
                      sliderWith += this.$sliderContainerUpper[0].children[i].clientWidth;
                      let ssm;
                      if(this._numberOfWaypoints == 4){
                        $('.cmp-interactiveSlider:not(.old) .sliderControls .sliderHandle .handleInner').width('50px');
                        ssm = (sliderWith + ((i + 1) * 34) - 13) - 52;
                        sliderBtn.push(parseFloat(`0.${Math.round((100 * (ssm - 12)) / sliderWidth)}`));
                      }
                      else if(this._numberOfWaypoints == 5){
                        ssm = (sliderWith + ((i + 1) * 34) - 15) - 52;
                        sliderBtn.push(parseFloat(`0.${Math.round((100 * (ssm - 15)) / sliderWidth)}`));

                      }
                      else{
                        ssm = (sliderWith + ((i + 1) * 34) - 17) - 52;
                        sliderBtn.push(parseFloat(`0.${Math.round((100 * (ssm - 16)) / sliderWidth)}`));

                      }
                     
                    }

                  }
                  else{
                  for (var i = 0; i < len; i++) {
                    sliderWith += this.$sliderContainerUpper[0].children[i].clientWidth;
                    let ss;
                    if(this._numberOfWaypoints == 4){
                      ss = (sliderWith + ((i + 1) * 44) - 18) - 60;
                      sliderBtn.push(parseFloat(`0.${Math.round((100 * (ss - 22)) / sliderWidth)}`));
                    }
                    else if(this._numberOfWaypoints == 5){
                      ss = (sliderWith + ((i + 1) * 44) - 20) - 60;
                      sliderBtn.push(parseFloat(`0.${Math.round((100 * (ss - 22)) / sliderWidth)}`));

                    }
                    else
                    {
                      ss = (sliderWith + ((i + 1) * 44) - 22) - 60;
                      sliderBtn.push(parseFloat(`0.${Math.round((100 * (ss - 22)) / sliderWidth)}`));
                    }
                   
                  }
                }
                  sliderBtn[0] = 0;
                  sliderBtn[sliderBtn.length - 1] = 0.90;
                  if (sliderBtn.length == 3) {
                    sliderBtn[sliderBtn.length - 1] = 0.80;
                  }
                  dragSlider.stepRatios = sliderBtn; //[0, 0.20, 0.45, 0.69, 0.88];
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
                    alert("overlay");
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
                    //$('.infoContainer', this.$element).css({
                    //   top: topCalculation
                    //  });
    
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
                    // var format = this.odometer.getAttribute('data-format');
                    
                    if (initial !== '') {
                      new Odometer({ // eslint-disable-line no-new
                        el: this.odometer,
                        auto: false,
                        value: initial,
                        //format: '(,ddd).dd',
                        theme: 'default',
                        duration: 5000
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
                      }, 1000);
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
                      }, 1000);
                    }, 1000);
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
    
            /***/
          }),
    
      /***/ "./src/main/webapp/resources/dev/js/utils/aria.js":
      /*!********************************************************!*\
        !*** ./src/main/webapp/resources/dev/js/utils/aria.js ***!
        \********************************************************/
      /*! no static exports found */
      /***/ (function (module, exports) {
    
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
    
            /***/
          })
    
        /******/
      });
    