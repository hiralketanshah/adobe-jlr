/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../Pagination/es6/Pagination.js":
/*!***************************************!*\
  !*** ../Pagination/es6/Pagination.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (/* binding */ Pagination)
  /* harmony export */ });
  /* harmony import */ var _resources_dev_js_utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../resources/dev/js/utils/index */ "../../resources/dev/js/utils/index.js");
  
  
  class Pagination {
      constructor(elem, options) {
          this._elem = elem;
          this._defaults = {
              className: 'Pagination',
              selector: '.Pagination',
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
                  playControlIcon: 'Pagination__play-control-icon',
              },
  
              controls: {
                  play: null,
                  pause: null,
                  countdown: null,
                  pips: null,
                  wrapper: null,
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
                  liveRegionUpdate: 'liveRegionUpdate',
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
                  previous: 'previous',
              },
  
              autoplay: {
                  enabled: false, // if false, do not output play/pause controls
                  duration: 1000,
                  pauseAtStart: false, // if we want autoplay controls but initially paused, set to true
                  delay: 0, // after pip switches, this is the delay before the timer restarts (e.g. if we're waiting for a slide transition)
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
              defaultSelected: 0, // zero indexed
          };
          this.options = Object.assign({}, this._defaults, options);
  
          if (!this._elem || !this.options.numberOfPips) {
              return;
          }
          this._createPagination();
      }
  
      _createPagination() {
          const html = this._generateHTML();
          this._appendPaginationToContainer(html);
          this._addPaginationEvents();
          if (this.options.controls.pause) {
              this.options.controls.pause.classList.add(this.options.classes.pauseTimerIconCountdownAnimating);
          }
          this._fireEvent(this.options.events.init);
          this._restartAnimation();
      }
  
      _playButtonHTML(classes, labels) {
          return `<button class="${classes.play}" aria-label="${labels.paused}, ${labels.play}">${this._playControlIconSVG()}</button>`;
      }
  
      _pauseButtonHTML(classes, labels) {
          return `<button class="${classes.pause}" aria-label="${labels.playing}, ${labels.pause}">
        ${this._pauseControlIconSVG()}
        <svg class="${classes.pauseTimerIcon}" aria-hidden="true"><circle class="${classes.pauseTimerIconCountdown}" r="20" cx="21" cy="21"></circle></svg>
      </button>`;
      }
  
      // create and return the HTML
      _generateHTML() {
          const {
              options
          } = this;
          const {
              classes,
              labels
          } = options;
  
          const wrapperHTML = (innerHTML, modifierClass) => `<li class="${classes.wrapper} ${modifierClass}">${innerHTML}</li>`;
          const addNumberToButtonLabel = number => Pagination._replacePlaceholderLabelText(labels.pip, number);
          const pipHTML = number => `<button ${this.options._pipIndexAttribute}="${number}" class="${classes.pip}" aria-label="${addNumberToButtonLabel(number + 1)}"></button>`;
          const pips = [...new Array(options.numberOfPips)].map((__, number) => wrapperHTML(pipHTML(number), classes.wrapperPip));
  
          const playButtonHTML = this._playButtonHTML(classes, labels);
          const pauseButtonHTML = this._pauseButtonHTML(classes, labels);
          const controlsHTML = options.autoplay.enabled ? `${wrapperHTML(playButtonHTML + pauseButtonHTML, classes.wrapperPlayPause)}` : '';
  
          const html = `
        <ul class="${classes.controls}">
          ${controlsHTML}
          ${pips.join(' ')}
        </ul>
      `;
          return html;
      }
  
      // handle creating the pagination and adding to container
      _appendPaginationToContainer(html) {
          const div = document.createElement('div');
          div.innerHTML = html;
          this._elem.classList.add(this.options.className);
          if (this.options.isBlack) {
              this._elem.classList.add(`${this.options.className}--black`);
          }
          this._elem.appendChild(div.querySelector(`.${this.options.classes.controls}`));
          this.options.controls = Pagination._cacheControls(this._elem, this.options.classes, this.options.autoplay.enabled);
          this._setActiveState(this.options.defaultSelected);
          const {
              autoplay
          } = this.options;
          const playingStatusAtStart = autoplay.pauseAtStart ? 'paused' : 'running';
          this.options._nonHoverPaused = autoplay.pauseAtStart;
          if (autoplay.enabled) {
              this._setPlayingStatus(playingStatusAtStart);
              this.options.controls.countdown.style.animationDuration = `${autoplay.duration}ms`;
          }
      }
  
      static _cacheControls(element, classes, includePlayControls = false) {
          const controls = {};
          controls.wrapper = element.querySelector(`.${classes.controls}`);
          controls.pips = [].slice.call(element.querySelectorAll(`.${classes.pip}`));
          if (includePlayControls) {
              controls.play = element.querySelector(`.${classes.play}`);
              controls.pause = element.querySelector(`.${classes.pause}`);
              controls.countdown = element.querySelector(`.${classes.pauseTimerIconCountdown}`);
          }
          return controls;
      }
  
      // convert the nodelist of pip elements into an array and return
      _getPipsArray() {
          return [].slice.call(this._elem.querySelectorAll(`.${this.options.classes.pip}`));
      }
  
      _setActiveState(index = 0) {
          this.options.controls.pips[index].classList.add(this.options.classes.pipActive);
          const liveRegionText = Pagination._replacePlaceholderLabelText(this.options.labels.slideChanged, index + 1);
          this._updateLiveRegionText(liveRegionText);
      }
  
      static _replacePlaceholderLabelText(label, textToInsert = '') {
          if(label)
          return label.replace(/[[]]/g, textToInsert);
          else
          return "";
      }
  
      // fires an event with update text which the host component can choose to add to an aria-liveregion
      _updateLiveRegionText(text) {
          const payload = {
              text
          };
          this._fireEvent(this.options.liveRegionUpdate, payload);
      }
  
      _getCurrentActivePipElement() {
          return this._elem.querySelector(`.${this.options.classes.pipActive}`);
      }
  
      _getCurrentActivePipIndex() {
          return this._getPipIndex(this._getCurrentActivePipElement());
      }
  
      _getNextPipIndex(pips, currentPipElement) {
          const pip = this._getPipIndex(currentPipElement) + 1;
          return pip < pips.length ? pip : 0;
      }
  
      _getPreviousPipIndex(pips, currentPipElement) {
          const pip = this._getPipIndex(currentPipElement) - 1;
          return pip < 0 ? pips.length - 1 : pip;
      }
  
      _getPipIndex(pipElement) {
          return parseInt(pipElement.getAttribute(this.options._pipIndexAttribute), 10); // accept DOM element of pip, return index
      }
  
      _getpauseIconCountdownElement() {
          return this._elem.querySelector(`.${this.options.classes.pauseTimerIconCountdown}`); // return the animated countdown DOM element
      }
  
      _restartAnimation() {
          if (this._elem.getAttribute('data-playing') !== 'true') {
              return;
          }
          const {
              autoplay
          } = this.options;
          const {
              countdown,
              pause
          } = this.options.controls;
          const delay = autoplay.enabled ? autoplay.delay : 0;
          const strokeDashOffsetMin = '1px';
          const strokeDashOffsetMax = '122px';
  
          const animationComplete = () => (0,_resources_dev_js_utils_index__WEBPACK_IMPORTED_MODULE_0__.eventTrigger)(pause, this.options.events.countdownEnd);
          const animateElement = () => {
              const keyframes = [{
                      strokeDashoffset: strokeDashOffsetMin,
                      opacity: 1,
                      offset: 0,
                  },
                  {
                      strokeDashoffset: strokeDashOffsetMax,
                      opacity: 1,
                      offset: 0.99,
                  },
                  {
                      strokeDashoffset: strokeDashOffsetMax,
                      opacity: 0,
                      offset: 1,
                  }
              ];
              const timing = {
                  duration: autoplay.duration,
                  easing: 'linear',
                  fill: 'forwards',
              };
  
              this.options.controls.countdownTransition = countdown.animate(keyframes, timing);
              this.options.controls.countdownTransition.pause();
              this.options.controls.countdownTransition.onfinish = () => {
                  countdown.style.opacity = 0;
                  this.options.controls.countdownTransition = null;
                  animationComplete();
              };
              this.options.controls.countdownTransition.play();
          };
          const fadeElementIn = () => {
              countdown.style.strokeDashoffset = strokeDashOffsetMin;
              countdown.style.opacity = 1;
              if (this.options.controls.countdownTransition) {
                  this.options.controls.countdownTransition.play();
              } else {
                  animateElement();
              }
          };
          setTimeout(() => fadeElementIn(), delay);
      }
  
      // Handles click/animationend events fired on pips
      _pipEventHandler(event) {
          event.preventDefault();
          const activeClass = this.options.classes.pipActive;
          const {
              pips,
              countdown
          } = this.options.controls;
  
          const activePip = this._getCurrentActivePipElement();
          const eventType = event.type;
          const targetPip = eventType === 'click' ? event.target : pips[this._getNextPipIndex(pips, activePip)];
          const targetPipIndex = this._getPipIndex(targetPip);
          if (targetPip === activePip) {
              return;
          }
          if (this.options.controls.countdownTransition) {
              this.options.controls.countdownTransition.pause();
              this.options.controls.countdownTransition = null;
              countdown.style.strokeDashoffset = '122px';
          }
  
          const payload = {
              eventType,
              pipsArray: pips,
              pipFrom: this._getPipIndex(activePip),
              pipTo: this._getPipIndex(targetPip)
          };
  
          if (eventType === this.options.events.countdownEnd && targetPipIndex === 0 && !this.options.loop) {
              this._fireEvent(this.options.events.loopEnd, payload);
              return;
          }
  
          this._fireEvent(this.options.events.beforeChange, payload);
          pips.forEach((pip) => {
              pip.classList.remove(activeClass);
          });
          this._setActiveState(this._getPipIndex(targetPip));
  
          this._restartAnimation();
          this._fireEvent(this.options.events.afterChange, payload);
      }
  
      _resumeTimerAnimation(control, event) {
          if (event === 'hover' && this.options._nonHoverPaused) {
              return;
          }
          const liveRegionText = this.options.labels.playing;
          this._updateLiveRegionText(liveRegionText);
          this.options._nonHoverPaused = false;
          this._setPlayingStatus(control, event);
          this._restartAnimation(event);
      }
  
      _pauseTimerAnimation(control, event) {
          if (event !== 'hover') {
              this.options._nonHoverPaused = true;
          }
          const liveRegionText = this.options.labels.paused;
          this._updateLiveRegionText(liveRegionText);
          if (this.options.controls.countdownTransition) {
              this.options.controls.countdownTransition.pause();
          }
          this._setPlayingStatus(control, event);
      }
  
      _addPaginationEvents() {
          const {
              pips,
              play,
              pause,
              countdown
          } = this.options.controls;
  
          pips.forEach(pip => pip.addEventListener('click', event => this._pipEventHandler(event), false)); // pip click handler
          if (play && pause && countdown) {
              pause.addEventListener(this.options.events.countdownEnd, event => this._pipEventHandler(event), false);
              play.addEventListener('click', event => this._resumeTimerAnimation('running', event), false);
              pause.addEventListener('click', event => this._pauseTimerAnimation('paused', event), false);
          }
      }
  
      // trigger custom event with optional payload that our component (and others) can subscribe to
      _fireEvent(eventType, payload = {}) {
          (0,_resources_dev_js_utils_index__WEBPACK_IMPORTED_MODULE_0__.eventTrigger)(this._elem, eventType, payload);
      }
  
      _getPlayingStatus() {
          return this._playingStatus;
      }
  
      // accepts status of paused or runningand updates playing status of animation
      _setPlayingStatus(status = 'paused', event = null) {
          const {
              play,
              pause,
              countdown
          } = this.options.controls;
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
      _toggleFocus(elementFrom, elementTo, event) {
          if (!this.options._allowFocusToggle || document.activeElement !== elementFrom) {
              return;
          }
          if (event && event.detail === 0) {
              setTimeout(() => {
                  elementTo.focus();
              }, 50);
          }
      }
  
      static _showControl(element) {
          element.removeAttribute('aria-hidden');
          element.removeAttribute('tabindex');
      }
  
      static _hideControl(element) {
          element.setAttribute('aria-hidden', 'true');
          element.setAttribute('tabindex', '-1');
      }
  
      _playControlIconSVG() {
          return `
      <svg aria-hidden="true" class="${this.options.classes.playControlIcon}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.2 20" style="enable-background:new 0 0 14.2 20;" xml:space="preserve">
      <g><path d="M0,0v20l14.2-10L0,0z M1.7,3.2l9.6,6.7l-9.6,6.8V3.2z"/></g></svg>
      `;
      }
  
      _pauseControlIconSVG() {
          return `
        <svg aria-hidden="true" class="${this.options.classes.pauseControlIcon}" width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1">
            <g transform="translate(-473.000000, -299.000000)" fill-rule="nonzero">
              <g transform="translate(473.000000, 299.000000)"><polygon points="0 0 2 0 2 16 0 16"></polygon><polygon points="8 0 10 0 10 16 8 16"></polygon></g>
            </g>
          </g>
        </svg>`;
      }
  
      // public methods, to call from component use element.Pagination('function name as string', optionalParams);
      pause(onHover = false) {
          const {
              pause
          } = this.options.controls;
          if (!pause) {
              return;
          }
          const pausedOnHover = onHover ? 'hover' : false;
          this._pauseTimerAnimation('paused', pausedOnHover);
      }
  
      play(onHover = false) {
          const {
              play
          } = this.options.controls;
          if (!play) {
              return;
          }
          const resumedOnHover = onHover ? 'hover' : false;
          this._resumeTimerAnimation('running', resumedOnHover);
      }
  
      getPlayingStatus() {
          return this._getPlayingStatus();
      }
  
      goToPip(index) {
          const pip = this.options.controls.pips[index];
          if (!pip) {
              return;
          }
          pip.click();
      }
  
      previousPip() {
          const {
              pips
          } = this.options.controls;
          const current = this._getCurrentActivePipElement();
          const currentIndex = this._getPipIndex(current);
          if (!this.options.loop && currentIndex === 0) {
              return;
          }
          const previous = pips[this._getPreviousPipIndex(pips, current)];
          this._fireEvent(this.options.events.gotoPrevious);
          previous.click();
      }
  
      nextPip() {
          const {
              pips
          } = this.options.controls;
          const current = this._getCurrentActivePipElement();
          const next = pips[this._getNextPipIndex(pips, current)];
          const nextIndex = this._getPipIndex(next);
          if (!this.options.loop && nextIndex === 0) {
              return;
          }
          this._fireEvent(this.options.events.gotoNext);
          next.click();
      }
  
      getCurrentPipIndex() {
          return this._getCurrentActivePipIndex();
      }
  
      updateActivePipByIndex(newActivePipIndex) {
          const {
              pips
          } = this.options.controls;
          const activeClass = this.options.classes.pipActive;
          pips.forEach(pip => pip.classList.remove(activeClass));
          this._setActiveState(newActivePipIndex);
      }
  
      getOptions() {
          return this.options;
      }
  
      getElement() {
          return this._elem;
      }
  
      destroy() {
          const {
              controls
          } = this.options;
          if (controls && controls.wrapper) {
              controls.wrapper.parentNode.removeChild(controls.wrapper);
          }
      }
  
      Pagination(method, options = undefined) {
          const fn = this[method];
          return typeof fn === 'function' ? fn.bind(this, options)() : undefined;
      }
  }
  
  /***/ }),
  
  /***/ "../node_modules/dom7/dist/dom7.modular.js":
  /*!*************************************************!*\
    !*** ../node_modules/dom7/dist/dom7.modular.js ***!
    \*************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "$": () => (/* binding */ $),
  /* harmony export */   "addClass": () => (/* binding */ addClass),
  /* harmony export */   "removeClass": () => (/* binding */ removeClass),
  /* harmony export */   "hasClass": () => (/* binding */ hasClass),
  /* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
  /* harmony export */   "attr": () => (/* binding */ attr),
  /* harmony export */   "removeAttr": () => (/* binding */ removeAttr),
  /* harmony export */   "prop": () => (/* binding */ prop),
  /* harmony export */   "data": () => (/* binding */ data),
  /* harmony export */   "removeData": () => (/* binding */ removeData),
  /* harmony export */   "dataset": () => (/* binding */ dataset),
  /* harmony export */   "val": () => (/* binding */ val),
  /* harmony export */   "transform": () => (/* binding */ transform),
  /* harmony export */   "transition": () => (/* binding */ transition),
  /* harmony export */   "on": () => (/* binding */ on),
  /* harmony export */   "off": () => (/* binding */ off),
  /* harmony export */   "once": () => (/* binding */ once),
  /* harmony export */   "trigger": () => (/* binding */ trigger),
  /* harmony export */   "transitionEnd": () => (/* binding */ transitionEnd),
  /* harmony export */   "animationEnd": () => (/* binding */ animationEnd),
  /* harmony export */   "width": () => (/* binding */ width),
  /* harmony export */   "outerWidth": () => (/* binding */ outerWidth),
  /* harmony export */   "height": () => (/* binding */ height),
  /* harmony export */   "outerHeight": () => (/* binding */ outerHeight),
  /* harmony export */   "offset": () => (/* binding */ offset),
  /* harmony export */   "hide": () => (/* binding */ hide),
  /* harmony export */   "show": () => (/* binding */ show),
  /* harmony export */   "styles": () => (/* binding */ styles),
  /* harmony export */   "css": () => (/* binding */ css),
  /* harmony export */   "toArray": () => (/* binding */ toArray),
  /* harmony export */   "each": () => (/* binding */ each),
  /* harmony export */   "forEach": () => (/* binding */ forEach),
  /* harmony export */   "filter": () => (/* binding */ filter),
  /* harmony export */   "map": () => (/* binding */ map),
  /* harmony export */   "html": () => (/* binding */ html),
  /* harmony export */   "text": () => (/* binding */ text),
  /* harmony export */   "is": () => (/* binding */ is),
  /* harmony export */   "indexOf": () => (/* binding */ indexOf),
  /* harmony export */   "index": () => (/* binding */ index),
  /* harmony export */   "eq": () => (/* binding */ eq),
  /* harmony export */   "append": () => (/* binding */ append),
  /* harmony export */   "appendTo": () => (/* binding */ appendTo),
  /* harmony export */   "prepend": () => (/* binding */ prepend),
  /* harmony export */   "prependTo": () => (/* binding */ prependTo),
  /* harmony export */   "insertBefore": () => (/* binding */ insertBefore),
  /* harmony export */   "insertAfter": () => (/* binding */ insertAfter),
  /* harmony export */   "next": () => (/* binding */ next),
  /* harmony export */   "nextAll": () => (/* binding */ nextAll),
  /* harmony export */   "prev": () => (/* binding */ prev),
  /* harmony export */   "prevAll": () => (/* binding */ prevAll),
  /* harmony export */   "siblings": () => (/* binding */ siblings),
  /* harmony export */   "parent": () => (/* binding */ parent),
  /* harmony export */   "parents": () => (/* binding */ parents),
  /* harmony export */   "closest": () => (/* binding */ closest),
  /* harmony export */   "find": () => (/* binding */ find),
  /* harmony export */   "children": () => (/* binding */ children),
  /* harmony export */   "remove": () => (/* binding */ remove),
  /* harmony export */   "detach": () => (/* binding */ detach),
  /* harmony export */   "add": () => (/* binding */ add),
  /* harmony export */   "empty": () => (/* binding */ empty),
  /* harmony export */   "scrollTo": () => (/* binding */ scrollTo),
  /* harmony export */   "scrollTop": () => (/* binding */ scrollTop),
  /* harmony export */   "scrollLeft": () => (/* binding */ scrollLeft),
  /* harmony export */   "animate": () => (/* binding */ animate),
  /* harmony export */   "stop": () => (/* binding */ stop),
  /* harmony export */   "click": () => (/* binding */ click),
  /* harmony export */   "blur": () => (/* binding */ blur),
  /* harmony export */   "focus": () => (/* binding */ focus),
  /* harmony export */   "focusin": () => (/* binding */ focusin),
  /* harmony export */   "focusout": () => (/* binding */ focusout),
  /* harmony export */   "keyup": () => (/* binding */ keyup),
  /* harmony export */   "keydown": () => (/* binding */ keydown),
  /* harmony export */   "keypress": () => (/* binding */ keypress),
  /* harmony export */   "submit": () => (/* binding */ submit),
  /* harmony export */   "change": () => (/* binding */ change),
  /* harmony export */   "mousedown": () => (/* binding */ mousedown),
  /* harmony export */   "mousemove": () => (/* binding */ mousemove),
  /* harmony export */   "mouseup": () => (/* binding */ mouseup),
  /* harmony export */   "mouseenter": () => (/* binding */ mouseenter),
  /* harmony export */   "mouseleave": () => (/* binding */ mouseleave),
  /* harmony export */   "mouseout": () => (/* binding */ mouseout),
  /* harmony export */   "mouseover": () => (/* binding */ mouseover),
  /* harmony export */   "touchstart": () => (/* binding */ touchstart),
  /* harmony export */   "touchend": () => (/* binding */ touchend),
  /* harmony export */   "touchmove": () => (/* binding */ touchmove),
  /* harmony export */   "resize": () => (/* binding */ resize),
  /* harmony export */   "scroll": () => (/* binding */ scroll)
  /* harmony export */ });
  /* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../node_modules/dom7/node_modules/ssr-window/dist/ssr-window.esm.js");
  /**
   * Dom7 2.1.5
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * http://framework7.io/docs/dom.html
   *
   * Copyright 2020, Vladimir Kharlampidi
   * The iDangero.us
   * http://www.idangero.us/
   *
   * Licensed under MIT
   *
   * Released on: May 15, 2020
   */
  
  
  class Dom7 {
    constructor(arr) {
      const self = this;
      // Create array-like object
      for (let i = 0; i < arr.length; i += 1) {
        self[i] = arr[i];
      }
      self.length = arr.length;
      // Return collection with methods
      return this;
    }
  }
  
  function $(selector, context) {
    const arr = [];
    let i = 0;
    if (selector && !context) {
      if (selector instanceof Dom7) {
        return selector;
      }
    }
    if (selector) {
        // String
      if (typeof selector === 'string') {
        let els;
        let tempParent;
        const html = selector.trim();
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          let toCreate = 'div';
          if (html.indexOf('<li') === 0) toCreate = 'ul';
          if (html.indexOf('<tr') === 0) toCreate = 'tbody';
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
          if (html.indexOf('<tbody') === 0) toCreate = 'table';
          if (html.indexOf('<option') === 0) toCreate = 'select';
          tempParent = ssr_window__WEBPACK_IMPORTED_MODULE_0__.document.createElement(toCreate);
          tempParent.innerHTML = html;
          for (i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
            // Pure ID selector
            els = [ssr_window__WEBPACK_IMPORTED_MODULE_0__.document.getElementById(selector.trim().split('#')[1])];
          } else {
            // Other selectors
            els = (context || ssr_window__WEBPACK_IMPORTED_MODULE_0__.document).querySelectorAll(selector.trim());
          }
          for (i = 0; i < els.length; i += 1) {
            if (els[i]) arr.push(els[i]);
          }
        }
      } else if (selector.nodeType || selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__.window || selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__.document) {
        // Node/element
        arr.push(selector);
      } else if (selector.length > 0 && selector[0].nodeType) {
        // Array of elements or instance of Dom
        for (i = 0; i < selector.length; i += 1) {
          arr.push(selector[i]);
        }
      }
    }
    return new Dom7(arr);
  }
  
  $.fn = Dom7.prototype;
  $.Class = Dom7;
  $.Dom7 = Dom7;
  
  function unique(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    }
    return uniqueArray;
  }
  function toCamelCase(string) {
    return string.toLowerCase().replace(/-(.)/g, (match, group1) => group1.toUpperCase());
  }
  
  function requestAnimationFrame(callback) {
    if (ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.requestAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.requestAnimationFrame(callback);
    else if (ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.webkitRequestAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.webkitRequestAnimationFrame(callback);
    return ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.setTimeout(callback, 1000 / 60);
  }
  function cancelAnimationFrame(id) {
    if (ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.cancelAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.cancelAnimationFrame(id);
    else if (ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.webkitCancelAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.webkitCancelAnimationFrame(id);
    return ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.clearTimeout(id);
  }
  
  // Classes and attributes
  function addClass(className) {
    if (typeof className === 'undefined') {
      return this;
    }
    const classes = className.split(' ');
    for (let i = 0; i < classes.length; i += 1) {
      for (let j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
      }
    }
    return this;
  }
  function removeClass(className) {
    const classes = className.split(' ');
    for (let i = 0; i < classes.length; i += 1) {
      for (let j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
      }
    }
    return this;
  }
  function hasClass(className) {
    if (!this[0]) return false;
    return this[0].classList.contains(className);
  }
  function toggleClass(className) {
    const classes = className.split(' ');
    for (let i = 0; i < classes.length; i += 1) {
      for (let j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
      }
    }
    return this;
  }
  function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) return this[0].getAttribute(attrs);
      return undefined;
    }
  
    // Set attrs
    for (let i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        // eslint-disable-next-line
        for (const attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  // eslint-disable-next-line
  function removeAttr(attr) {
    for (let i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }
    return this;
  }
  // eslint-disable-next-line
  function prop(props, value) {
    if (arguments.length === 1 && typeof props === 'string') {
      // Get prop
      if (this[0]) return this[0][props];
    } else {
      // Set props
      for (let i = 0; i < this.length; i += 1) {
        if (arguments.length === 2) {
          // String
          this[i][props] = value;
        } else {
          // Object
          // eslint-disable-next-line
          for (const propName in props) {
            this[i][propName] = props[propName];
          }
        }
      }
      return this;
    }
  }
  function data(key, value) {
    let el;
    if (typeof value === 'undefined') {
      el = this[0];
      // Get value
      if (el) {
        if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
          return el.dom7ElementDataStorage[key];
        }
  
        const dataKey = el.getAttribute(`data-${key}`);
        if (dataKey) {
          return dataKey;
        }
        return undefined;
      }
      return undefined;
    }
  
    // Set value
    for (let i = 0; i < this.length; i += 1) {
      el = this[i];
      if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
      el.dom7ElementDataStorage[key] = value;
    }
    return this;
  }
  function removeData(key) {
    for (let i = 0; i < this.length; i += 1) {
      const el = this[i];
      if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
        el.dom7ElementDataStorage[key] = null;
        delete el.dom7ElementDataStorage[key];
      }
    }
  }
  function dataset() {
    const el = this[0];
    if (!el) return undefined;
    const dataset = {}; // eslint-disable-line
    if (el.dataset) {
      // eslint-disable-next-line
      for (const dataKey in el.dataset) {
        dataset[dataKey] = el.dataset[dataKey];
      }
    } else {
      for (let i = 0; i < el.attributes.length; i += 1) {
        // eslint-disable-next-line
        const attr = el.attributes[i];
        if (attr.name.indexOf('data-') >= 0) {
          dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;
        }
      }
    }
    // eslint-disable-next-line
    for (const key in dataset) {
      if (dataset[key] === 'false') dataset[key] = false;
      else if (dataset[key] === 'true') dataset[key] = true;
      else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
    }
    return dataset;
  }
  function val(value) {
    const dom = this;
    if (typeof value === 'undefined') {
      if (dom[0]) {
        if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
          const values = [];
          for (let i = 0; i < dom[0].selectedOptions.length; i += 1) {
            values.push(dom[0].selectedOptions[i].value);
          }
          return values;
        }
        return dom[0].value;
      }
      return undefined;
    }
  
    for (let i = 0; i < dom.length; i += 1) {
      const el = dom[i];
      if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
        for (let j = 0; j < el.options.length; j += 1) {
          el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
        }
      } else {
        el.value = value;
      }
    }
    return dom;
  }
  // Transforms
  // eslint-disable-next-line
  function transform(transform) {
    for (let i = 0; i < this.length; i += 1) {
      const elStyle = this[i].style;
      elStyle.webkitTransform = transform;
      elStyle.transform = transform;
    }
    return this;
  }
  function transition(duration) {
    if (typeof duration !== 'string') {
      duration = `${duration}ms`; // eslint-disable-line
    }
    for (let i = 0; i < this.length; i += 1) {
      const elStyle = this[i].style;
      elStyle.webkitTransitionDuration = duration;
      elStyle.transitionDuration = duration;
    }
    return this;
  }
  // Events
  function on(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
      [eventType, listener, capture] = args;
      targetSelector = undefined;
    }
    if (!capture) capture = false;
  
    function handleLiveEvent(e) {
      const target = e.target;
      if (!target) return;
      const eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector)) listener.apply(target, eventData);
      else {
        const parents = $(target).parents(); // eslint-disable-line
        for (let k = 0; k < parents.length; k += 1) {
          if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
        }
      }
    }
    function handleEvent(e) {
      const eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    const events = eventType.split(' ');
    let j;
    for (let i = 0; i < this.length; i += 1) {
      const el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          const event = events[j];
          if (!el.dom7Listeners) el.dom7Listeners = {};
          if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
          el.dom7Listeners[event].push({
            listener,
            proxyListener: handleEvent,
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          const event = events[j];
          if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
          if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
          el.dom7LiveListeners[event].push({
            listener,
            proxyListener: handleLiveEvent,
          });
          el.addEventListener(event, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
      [eventType, listener, capture] = args;
      targetSelector = undefined;
    }
    if (!capture) capture = false;
  
    const events = eventType.split(' ');
    for (let i = 0; i < events.length; i += 1) {
      const event = events[i];
      for (let j = 0; j < this.length; j += 1) {
        const el = this[j];
        let handlers;
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (let k = handlers.length - 1; k >= 0; k -= 1) {
            const handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function once(...args) {
    const dom = this;
    let [eventName, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
      [eventName, listener, capture] = args;
      targetSelector = undefined;
    }
    function onceHandler(...eventArgs) {
      listener.apply(this, eventArgs);
      dom.off(eventName, targetSelector, onceHandler, capture);
      if (onceHandler.dom7proxy) {
        delete onceHandler.dom7proxy;
      }
    }
    onceHandler.dom7proxy = listener;
    return dom.on(eventName, targetSelector, onceHandler, capture);
  }
  function trigger(...args) {
    const events = args[0].split(' ');
    const eventData = args[1];
    for (let i = 0; i < events.length; i += 1) {
      const event = events[i];
      for (let j = 0; j < this.length; j += 1) {
        const el = this[j];
        let evt;
        try {
          evt = new ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true,
          });
        } catch (e) {
          evt = ssr_window__WEBPACK_IMPORTED_MODULE_0__.document.createEvent('Event');
          evt.initEvent(event, true, true);
          evt.detail = eventData;
        }
        // eslint-disable-next-line
        el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    const events = ['webkitTransitionEnd', 'transitionend'];
    const dom = this;
    let i;
    function fireCallBack(e) {
      /* jshint validthis:true */
      if (e.target !== this) return;
      callback.call(this, e);
      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }
    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }
    return this;
  }
  function animationEnd(callback) {
    const events = ['webkitAnimationEnd', 'animationend'];
    const dom = this;
    let i;
    function fireCallBack(e) {
      if (e.target !== this) return;
      callback.call(this, e);
      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }
    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }
    return this;
  }
  // Sizing/Styles
  function width() {
    if (this[0] === ssr_window__WEBPACK_IMPORTED_MODULE_0__.window) {
      return ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.innerWidth;
    }
  
    if (this.length > 0) {
      return parseFloat(this.css('width'));
    }
  
    return null;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        const styles = this.styles();
        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function height() {
    if (this[0] === ssr_window__WEBPACK_IMPORTED_MODULE_0__.window) {
      return ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.innerHeight;
    }
  
    if (this.length > 0) {
      return parseFloat(this.css('height'));
    }
  
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        const styles = this.styles();
        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      const el = this[0];
      const box = el.getBoundingClientRect();
      const body = ssr_window__WEBPACK_IMPORTED_MODULE_0__.document.body;
      const clientTop = el.clientTop || body.clientTop || 0;
      const clientLeft = el.clientLeft || body.clientLeft || 0;
      const scrollTop = el === ssr_window__WEBPACK_IMPORTED_MODULE_0__.window ? ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.scrollY : el.scrollTop;
      const scrollLeft = el === ssr_window__WEBPACK_IMPORTED_MODULE_0__.window ? ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.scrollX : el.scrollLeft;
      return {
        top: (box.top + scrollTop) - clientTop,
        left: (box.left + scrollLeft) - clientLeft,
      };
    }
  
    return null;
  }
  function hide() {
    for (let i = 0; i < this.length; i += 1) {
      this[i].style.display = 'none';
    }
    return this;
  }
  function show() {
    for (let i = 0; i < this.length; i += 1) {
      const el = this[i];
      if (el.style.display === 'none') {
        el.style.display = '';
      }
      if (ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
        // Still not visible
        el.style.display = 'block';
      }
    }
    return this;
  }
  function styles() {
    if (this[0]) return ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.getComputedStyle(this[0], null);
    return {};
  }
  function css(props, value) {
    let i;
    if (arguments.length === 1) {
      if (typeof props === 'string') {
        if (this[0]) return ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.getComputedStyle(this[0], null).getPropertyValue(props);
      } else {
        for (i = 0; i < this.length; i += 1) {
          // eslint-disable-next-line
          for (let prop in props) {
            this[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === 'string') {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  
  // Dom manipulation
  function toArray() {
    const arr = [];
    for (let i = 0; i < this.length; i += 1) {
      arr.push(this[i]);
    }
    return arr;
  }
  // Iterate over the collection passing elements to `callback`
  function each(callback) {
    // Don't bother continuing without a callback
    if (!callback) return this;
    // Iterate over the current collection
    for (let i = 0; i < this.length; i += 1) {
      // If the callback returns false
      if (callback.call(this[i], i, this[i]) === false) {
        // End the loop early
        return this;
      }
    }
    // Return `this` to allow chained DOM operations
    return this;
  }
  function forEach(callback) {
    // Don't bother continuing without a callback
    if (!callback) return this;
    // Iterate over the current collection
    for (let i = 0; i < this.length; i += 1) {
      // If the callback returns false
      if (callback.call(this[i], this[i], i) === false) {
        // End the loop early
        return this;
      }
    }
    // Return `this` to allow chained DOM operations
    return this;
  }
  function filter(callback) {
    const matchedItems = [];
    const dom = this;
    for (let i = 0; i < dom.length; i += 1) {
      if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
    }
    return new Dom7(matchedItems);
  }
  function map(callback) {
    const modifiedItems = [];
    const dom = this;
    for (let i = 0; i < dom.length; i += 1) {
      modifiedItems.push(callback.call(dom[i], i, dom[i]));
    }
    return new Dom7(modifiedItems);
  }
  // eslint-disable-next-line
  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : undefined;
    }
  
    for (let i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }
    return this;
  }
  // eslint-disable-next-line
  function text(text) {
    if (typeof text === 'undefined') {
      if (this[0]) {
        return this[0].textContent.trim();
      }
      return null;
    }
  
    for (let i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }
    return this;
  }
  function is(selector) {
    const el = this[0];
    let compareWith;
    let i;
    if (!el || typeof selector === 'undefined') return false;
    if (typeof selector === 'string') {
      if (el.matches) return el.matches(selector);
      else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
      else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
  
      compareWith = $(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }
      return false;
    } else if (selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__.document) return el === ssr_window__WEBPACK_IMPORTED_MODULE_0__.document;
    else if (selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__.window) return el === ssr_window__WEBPACK_IMPORTED_MODULE_0__.window;
  
    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }
      return false;
    }
    return false;
  }
  function indexOf(el) {
    for (let i = 0; i < this.length; i += 1) {
      if (this[i] === el) return i;
    }
    return -1;
  }
  function index() {
    let child = this[0];
    let i;
    if (child) {
      i = 0;
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1;
      }
      return i;
    }
    return undefined;
  }
  // eslint-disable-next-line
  function eq(index) {
    if (typeof index === 'undefined') return this;
    const length = this.length;
    let returnIndex;
    if (index > length - 1) {
      return new Dom7([]);
    }
    if (index < 0) {
      returnIndex = length + index;
      if (returnIndex < 0) return new Dom7([]);
      return new Dom7([this[returnIndex]]);
    }
    return new Dom7([this[index]]);
  }
  function append(...args) {
    let newChild;
  
    for (let k = 0; k < args.length; k += 1) {
      newChild = args[k];
      for (let i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          const tempDiv = ssr_window__WEBPACK_IMPORTED_MODULE_0__.document.createElement('div');
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (let j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }
  
    return this;
  }
  // eslint-disable-next-line
  function appendTo(parent) {
    $(parent).append(this);
    return this;
  }
  function prepend(newChild) {
    let i;
    let j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = ssr_window__WEBPACK_IMPORTED_MODULE_0__.document.createElement('div');
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  // eslint-disable-next-line
  function prependTo(parent) {
    $(parent).prepend(this);
    return this;
  }
  function insertBefore(selector) {
    const before = $(selector);
    for (let i = 0; i < this.length; i += 1) {
      if (before.length === 1) {
        before[0].parentNode.insertBefore(this[i], before[0]);
      } else if (before.length > 1) {
        for (let j = 0; j < before.length; j += 1) {
          before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
        }
      }
    }
  }
  function insertAfter(selector) {
    const after = $(selector);
    for (let i = 0; i < this.length; i += 1) {
      if (after.length === 1) {
        after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
      } else if (after.length > 1) {
        for (let j = 0; j < after.length; j += 1) {
          after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
        }
      }
    }
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return new Dom7([this[0].nextElementSibling]);
        }
        return new Dom7([]);
      }
  
      if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function nextAll(selector) {
    const nextEls = [];
    let el = this[0];
    if (!el) return new Dom7([]);
    while (el.nextElementSibling) {
      const next = el.nextElementSibling; // eslint-disable-line
      if (selector) {
        if ($(next).is(selector)) nextEls.push(next);
      } else nextEls.push(next);
      el = next;
    }
    return new Dom7(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      const el = this[0];
      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return new Dom7([el.previousElementSibling]);
        }
        return new Dom7([]);
      }
  
      if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function prevAll(selector) {
    const prevEls = [];
    let el = this[0];
    if (!el) return new Dom7([]);
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling; // eslint-disable-line
      if (selector) {
        if ($(prev).is(selector)) prevEls.push(prev);
      } else prevEls.push(prev);
      el = prev;
    }
    return new Dom7(prevEls);
  }
  function siblings(selector) {
    return this.nextAll(selector).add(this.prevAll(selector));
  }
  function parent(selector) {
    const parents = []; // eslint-disable-line
    for (let i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }
    return $(unique(parents));
  }
  function parents(selector) {
    const parents = []; // eslint-disable-line
    for (let i = 0; i < this.length; i += 1) {
      let parent = this[i].parentNode; // eslint-disable-line
      while (parent) {
        if (selector) {
          if ($(parent).is(selector)) parents.push(parent);
        } else {
          parents.push(parent);
        }
        parent = parent.parentNode;
      }
    }
    return $(unique(parents));
  }
  function closest(selector) {
    let closest = this; // eslint-disable-line
    if (typeof selector === 'undefined') {
      return new Dom7([]);
    }
    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }
    return closest;
  }
  function find(selector) {
    const foundElements = [];
    for (let i = 0; i < this.length; i += 1) {
      const found = this[i].querySelectorAll(selector);
      for (let j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return new Dom7(foundElements);
  }
  function children(selector) {
    const children = []; // eslint-disable-line
    for (let i = 0; i < this.length; i += 1) {
      const childNodes = this[i].childNodes;
  
      for (let j = 0; j < childNodes.length; j += 1) {
        if (!selector) {
          if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
        } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }
    return new Dom7(unique(children));
  }
  function remove() {
    for (let i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    }
    return this;
  }
  function detach() {
    return this.remove();
  }
  function add(...args) {
    const dom = this;
    let i;
    let j;
    for (i = 0; i < args.length; i += 1) {
      const toAdd = $(args[i]);
      for (j = 0; j < toAdd.length; j += 1) {
        dom[dom.length] = toAdd[j];
        dom.length += 1;
      }
    }
    return dom;
  }
  function empty() {
    for (let i = 0; i < this.length; i += 1) {
      const el = this[i];
      if (el.nodeType === 1) {
        for (let j = 0; j < el.childNodes.length; j += 1) {
          if (el.childNodes[j].parentNode) {
            el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
          }
        }
        el.textContent = '';
      }
    }
    return this;
  }
  
  function scrollTo(...args) {
    let [left, top, duration, easing, callback] = args;
    if (args.length === 4 && typeof easing === 'function') {
      callback = easing;
      [left, top, duration, callback, easing] = args;
    }
    if (typeof easing === 'undefined') easing = 'swing';
  
    return this.each(function animate() {
      const el = this;
      let currentTop;
      let currentLeft;
      let maxTop;
      let maxLeft;
      let newTop;
      let newLeft;
      let scrollTop; // eslint-disable-line
      let scrollLeft; // eslint-disable-line
      let animateTop = top > 0 || top === 0;
      let animateLeft = left > 0 || left === 0;
      if (typeof easing === 'undefined') {
        easing = 'swing';
      }
      if (animateTop) {
        currentTop = el.scrollTop;
        if (!duration) {
          el.scrollTop = top;
        }
      }
      if (animateLeft) {
        currentLeft = el.scrollLeft;
        if (!duration) {
          el.scrollLeft = left;
        }
      }
      if (!duration) return;
      if (animateTop) {
        maxTop = el.scrollHeight - el.offsetHeight;
        newTop = Math.max(Math.min(top, maxTop), 0);
      }
      if (animateLeft) {
        maxLeft = el.scrollWidth - el.offsetWidth;
        newLeft = Math.max(Math.min(left, maxLeft), 0);
      }
      let startTime = null;
      if (animateTop && newTop === currentTop) animateTop = false;
      if (animateLeft && newLeft === currentLeft) animateLeft = false;
      function render(time = new Date().getTime()) {
        if (startTime === null) {
          startTime = time;
        }
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = easing === 'linear' ? progress : (0.5 - (Math.cos(progress * Math.PI) / 2));
        let done;
        if (animateTop) scrollTop = currentTop + (easeProgress * (newTop - currentTop));
        if (animateLeft) scrollLeft = currentLeft + (easeProgress * (newLeft - currentLeft));
        if (animateTop && newTop > currentTop && scrollTop >= newTop) {
          el.scrollTop = newTop;
          done = true;
        }
        if (animateTop && newTop < currentTop && scrollTop <= newTop) {
          el.scrollTop = newTop;
          done = true;
        }
        if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
          el.scrollLeft = newLeft;
          done = true;
        }
        if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
          el.scrollLeft = newLeft;
          done = true;
        }
  
        if (done) {
          if (callback) callback();
          return;
        }
        if (animateTop) el.scrollTop = scrollTop;
        if (animateLeft) el.scrollLeft = scrollLeft;
        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);
    });
  }
  // scrollTop(top, duration, easing, callback) {
  function scrollTop(...args) {
    let [top, duration, easing, callback] = args;
    if (args.length === 3 && typeof easing === 'function') {
      [top, duration, callback, easing] = args;
    }
    const dom = this;
    if (typeof top === 'undefined') {
      if (dom.length > 0) return dom[0].scrollTop;
      return null;
    }
    return dom.scrollTo(undefined, top, duration, easing, callback);
  }
  function scrollLeft(...args) {
    let [left, duration, easing, callback] = args;
    if (args.length === 3 && typeof easing === 'function') {
      [left, duration, callback, easing] = args;
    }
    const dom = this;
    if (typeof left === 'undefined') {
      if (dom.length > 0) return dom[0].scrollLeft;
      return null;
    }
    return dom.scrollTo(left, undefined, duration, easing, callback);
  }
  
  function animate(initialProps, initialParams) {
    const els = this;
    const a = {
      props: Object.assign({}, initialProps),
      params: Object.assign({
        duration: 300,
        easing: 'swing', // or 'linear'
        /* Callbacks
        begin(elements)
        complete(elements)
        progress(elements, complete, remaining, start, tweenValue)
        */
      }, initialParams),
  
      elements: els,
      animating: false,
      que: [],
  
      easingProgress(easing, progress) {
        if (easing === 'swing') {
          return 0.5 - (Math.cos(progress * Math.PI) / 2);
        }
        if (typeof easing === 'function') {
          return easing(progress);
        }
        return progress;
      },
      stop() {
        if (a.frameId) {
          cancelAnimationFrame(a.frameId);
        }
        a.animating = false;
        a.elements.each((index, el) => {
          const element = el;
          delete element.dom7AnimateInstance;
        });
        a.que = [];
      },
      done(complete) {
        a.animating = false;
        a.elements.each((index, el) => {
          const element = el;
          delete element.dom7AnimateInstance;
        });
        if (complete) complete(els);
        if (a.que.length > 0) {
          const que = a.que.shift();
          a.animate(que[0], que[1]);
        }
      },
      animate(props, params) {
        if (a.animating) {
          a.que.push([props, params]);
          return a;
        }
        const elements = [];
  
        // Define & Cache Initials & Units
        a.elements.each((index, el) => {
          let initialFullValue;
          let initialValue;
          let unit;
          let finalValue;
          let finalFullValue;
  
          if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
  
          elements[index] = {
            container: el,
          };
          Object.keys(props).forEach((prop) => {
            initialFullValue = ssr_window__WEBPACK_IMPORTED_MODULE_0__.window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
            initialValue = parseFloat(initialFullValue);
            unit = initialFullValue.replace(initialValue, '');
            finalValue = parseFloat(props[prop]);
            finalFullValue = props[prop] + unit;
            elements[index][prop] = {
              initialFullValue,
              initialValue,
              unit,
              finalValue,
              finalFullValue,
              currentValue: initialValue,
            };
          });
        });
  
        let startTime = null;
        let time;
        let elementsDone = 0;
        let propsDone = 0;
        let done;
        let began = false;
  
        a.animating = true;
  
        function render() {
          time = new Date().getTime();
          let progress;
          let easeProgress;
          // let el;
          if (!began) {
            began = true;
            if (params.begin) params.begin(els);
          }
          if (startTime === null) {
            startTime = time;
          }
          if (params.progress) {
            // eslint-disable-next-line
            params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), ((startTime + params.duration) - time < 0 ? 0 : (startTime + params.duration) - time), startTime);
          }
  
          elements.forEach((element) => {
            const el = element;
            if (done || el.done) return;
            Object.keys(props).forEach((prop) => {
              if (done || el.done) return;
              progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
              easeProgress = a.easingProgress(params.easing, progress);
              const { initialValue, finalValue, unit } = el[prop];
              el[prop].currentValue = initialValue + (easeProgress * (finalValue - initialValue));
              const currentValue = el[prop].currentValue;
  
              if (
                (finalValue > initialValue && currentValue >= finalValue) ||
                (finalValue < initialValue && currentValue <= finalValue)) {
                el.container.style[prop] = finalValue + unit;
                propsDone += 1;
                if (propsDone === Object.keys(props).length) {
                  el.done = true;
                  elementsDone += 1;
                }
                if (elementsDone === elements.length) {
                  done = true;
                }
              }
              if (done) {
                a.done(params.complete);
                return;
              }
              el.container.style[prop] = currentValue + unit;
            });
          });
          if (done) return;
          // Then call
          a.frameId = requestAnimationFrame(render);
        }
        a.frameId = requestAnimationFrame(render);
        return a;
      },
    };
  
    if (a.elements.length === 0) {
      return els;
    }
  
    let animateInstance;
    for (let i = 0; i < a.elements.length; i += 1) {
      if (a.elements[i].dom7AnimateInstance) {
        animateInstance = a.elements[i].dom7AnimateInstance;
      } else a.elements[i].dom7AnimateInstance = a;
    }
    if (!animateInstance) {
      animateInstance = a;
    }
  
    if (initialProps === 'stop') {
      animateInstance.stop();
    } else {
      animateInstance.animate(a.props, a.params);
    }
  
    return els;
  }
  
  function stop() {
    const els = this;
    for (let i = 0; i < els.length; i += 1) {
      if (els[i].dom7AnimateInstance) {
        els[i].dom7AnimateInstance.stop();
      }
    }
  }
  
  const noTrigger = ('resize scroll').split(' ');
  function eventShortcut(name, ...args) {
    if (typeof args[0] === 'undefined') {
      for (let i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();
          else {
            $(this[i]).trigger(name);
          }
        }
      }
      return this;
    }
    return this.on(name, ...args);
  }
  
  function click(...args) {
    return eventShortcut.bind(this)('click', ...args);
  }
  function blur(...args) {
    return eventShortcut.bind(this)('blur', ...args);
  }
  function focus(...args) {
    return eventShortcut.bind(this)('focus', ...args);
  }
  function focusin(...args) {
    return eventShortcut.bind(this)('focusin', ...args);
  }
  function focusout(...args) {
    return eventShortcut.bind(this)('focusout', ...args);
  }
  function keyup(...args) {
    return eventShortcut.bind(this)('keyup', ...args);
  }
  function keydown(...args) {
    return eventShortcut.bind(this)('keydown', ...args);
  }
  function keypress(...args) {
    return eventShortcut.bind(this)('keypress', ...args);
  }
  function submit(...args) {
    return eventShortcut.bind(this)('submit', ...args);
  }
  function change(...args) {
    return eventShortcut.bind(this)('change', ...args);
  }
  function mousedown(...args) {
    return eventShortcut.bind(this)('mousedown', ...args);
  }
  function mousemove(...args) {
    return eventShortcut.bind(this)('mousemove', ...args);
  }
  function mouseup(...args) {
    return eventShortcut.bind(this)('mouseup', ...args);
  }
  function mouseenter(...args) {
    return eventShortcut.bind(this)('mouseenter', ...args);
  }
  function mouseleave(...args) {
    return eventShortcut.bind(this)('mouseleave', ...args);
  }
  function mouseout(...args) {
    return eventShortcut.bind(this)('mouseout', ...args);
  }
  function mouseover(...args) {
    return eventShortcut.bind(this)('mouseover', ...args);
  }
  function touchstart(...args) {
    return eventShortcut.bind(this)('touchstart', ...args);
  }
  function touchend(...args) {
    return eventShortcut.bind(this)('touchend', ...args);
  }
  function touchmove(...args) {
    return eventShortcut.bind(this)('touchmove', ...args);
  }
  function resize(...args) {
    return eventShortcut.bind(this)('resize', ...args);
  }
  function scroll(...args) {
    return eventShortcut.bind(this)('scroll', ...args);
  }
  
  
  
  
  /***/ }),
  
  /***/ "../node_modules/dom7/node_modules/ssr-window/dist/ssr-window.esm.js":
  /*!***************************************************************************!*\
    !*** ../node_modules/dom7/node_modules/ssr-window/dist/ssr-window.esm.js ***!
    \***************************************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "document": () => (/* binding */ doc),
  /* harmony export */   "extend": () => (/* binding */ extend),
  /* harmony export */   "window": () => (/* binding */ win)
  /* harmony export */ });
  /**
   * SSR Window 2.0.0
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2020, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: May 12, 2020
   */
  /* eslint-disable no-param-reassign */
  function isObject(obj) {
      return (obj !== null &&
          typeof obj === 'object' &&
          'constructor' in obj &&
          obj.constructor === Object);
  }
  function extend(target, src) {
      if (target === void 0) { target = {}; }
      if (src === void 0) { src = {}; }
      Object.keys(src).forEach(function (key) {
          if (typeof target[key] === 'undefined')
              target[key] = src[key];
          else if (isObject(src[key]) &&
              isObject(target[key]) &&
              Object.keys(src[key]).length > 0) {
              extend(target[key], src[key]);
          }
      });
  }
  
  var doc = typeof document !== 'undefined' ? document : {};
  var ssrDocument = {
      body: {},
      addEventListener: function () { },
      removeEventListener: function () { },
      activeElement: {
          blur: function () { },
          nodeName: '',
      },
      querySelector: function () {
          return null;
      },
      querySelectorAll: function () {
          return [];
      },
      getElementById: function () {
          return null;
      },
      createEvent: function () {
          return {
              initEvent: function () { },
          };
      },
      createElement: function () {
          return {
              children: [],
              childNodes: [],
              style: {},
              setAttribute: function () { },
              getElementsByTagName: function () {
                  return [];
              },
          };
      },
      createElementNS: function () {
          return {};
      },
      importNode: function () {
          return null;
      },
      location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
      },
  };
  extend(doc, ssrDocument);
  
  var win = typeof window !== 'undefined' ? window : {};
  var ssrWindow = {
      document: ssrDocument,
      navigator: {
          userAgent: '',
      },
      location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
      },
      history: {
          replaceState: function () { },
          pushState: function () { },
          go: function () { },
          back: function () { },
      },
      CustomEvent: function CustomEvent() {
          return this;
      },
      addEventListener: function () { },
      removeEventListener: function () { },
      getComputedStyle: function () {
          return {
              getPropertyValue: function () {
                  return '';
              },
          };
      },
      Image: function () { },
      Date: function () { },
      screen: {},
      setTimeout: function () { },
      clearTimeout: function () { },
      matchMedia: function () {
          return {};
      },
  };
  extend(win, ssrWindow);
  
  
  
  
  /***/ }),
  
  /***/ "../node_modules/ssr-window/dist/ssr-window.esm.js":
  /*!*********************************************************!*\
    !*** ../node_modules/ssr-window/dist/ssr-window.esm.js ***!
    \*********************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "window": () => (/* binding */ win),
  /* harmony export */   "document": () => (/* binding */ doc)
  /* harmony export */ });
  /**
   * SSR Window 1.0.1
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2018, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: July 18, 2018
   */
  var doc = (typeof document === 'undefined') ? {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: '',
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {},
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        },
      };
    },
    location: { hash: '' },
  } : document; // eslint-disable-line
  
  var win = (typeof window === 'undefined') ? {
    document: doc,
    navigator: {
      userAgent: '',
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        },
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
  } : window; // eslint-disable-line
  
  
  
  
  /***/ }),
  
  /***/ "../node_modules/swiper/js/swiper.esm.bundle.js":
  /*!******************************************************!*\
    !*** ../node_modules/swiper/js/swiper.esm.bundle.js ***!
    \******************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  /* harmony import */ var dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7/dist/dom7.modular */ "../node_modules/dom7/dist/dom7.modular.js");
  /* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ssr-window */ "../node_modules/ssr-window/dist/ssr-window.esm.js");
  /**
   * Swiper 5.4.0
   * Most modern mobile touch slider and framework with hardware accelerated transitions
   * http://swiperjs.com
   *
   * Copyright 2014-2020 Vladimir Kharlampidi
   *
   * Released under the MIT License
   *
   * Released on: May 15, 2020
   */
  
  
  
  
  const Methods = {
    addClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.addClass,
    removeClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.removeClass,
    hasClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.hasClass,
    toggleClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.toggleClass,
    attr: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.attr,
    removeAttr: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.removeAttr,
    data: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.data,
    transform: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.transform,
    transition: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.transition,
    on: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.on,
    off: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.off,
    trigger: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.trigger,
    transitionEnd: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.transitionEnd,
    outerWidth: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.outerWidth,
    outerHeight: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.outerHeight,
    offset: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.offset,
    css: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.css,
    each: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.each,
    html: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.html,
    text: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.text,
    is: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.is,
    index: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.index,
    eq: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.eq,
    append: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.append,
    prepend: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.prepend,
    next: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.next,
    nextAll: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.nextAll,
    prev: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.prev,
    prevAll: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.prevAll,
    parent: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.parent,
    parents: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.parents,
    closest: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.closest,
    find: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.find,
    children: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.children,
    filter: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.filter,
    remove: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.remove,
    add: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.add,
    styles: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.styles,
  };
  
  Object.keys(Methods).forEach((methodName) => {
    dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$.fn[methodName] = dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$.fn[methodName] || Methods[methodName];
  });
  
  const Utils = {
    deleteProps(obj) {
      const object = obj;
      Object.keys(object).forEach((key) => {
        try {
          object[key] = null;
        } catch (e) {
          // no getter for object
        }
        try {
          delete object[key];
        } catch (e) {
          // something got wrong
        }
      });
    },
    nextTick(callback, delay = 0) {
      return setTimeout(callback, delay);
    },
    now() {
      return Date.now();
    },
    getTranslate(el, axis = 'x') {
      let matrix;
      let curTransform;
      let transformMatrix;
  
      const curStyle = ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.getComputedStyle(el, null);
  
      if (ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map((a) => a.replace(',', '.')).join(', ');
        }
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }
  
      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
        // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
        // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
      }
      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
        // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
        // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
      }
      return curTransform || 0;
    },
    parseUrlQuery(url) {
      const query = {};
      let urlToParse = url || ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.location.href;
      let i;
      let params;
      let param;
      let length;
      if (typeof urlToParse === 'string' && urlToParse.length) {
        urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
        params = urlToParse.split('&').filter((paramsPart) => paramsPart !== '');
        length = params.length;
  
        for (i = 0; i < length; i += 1) {
          param = params[i].replace(/#\S+/g, '').split('=');
          query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
        }
      }
      return query;
    },
    isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    },
    extend(...args) {
      const to = Object(args[0]);
      for (let i = 1; i < args.length; i += 1) {
        const nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null) {
          const keysArray = Object.keys(Object(nextSource));
          for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            const nextKey = keysArray[nextIndex];
            const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                to[nextKey] = {};
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    },
  };
  
  const Support = (function Support() {
    return {
      touch: !!(('ontouchstart' in ssr_window__WEBPACK_IMPORTED_MODULE_1__.window) || (ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.DocumentTouch && ssr_window__WEBPACK_IMPORTED_MODULE_1__.document instanceof ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.DocumentTouch)),
  
      pointerEvents: !!ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.PointerEvent && ('maxTouchPoints' in ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.navigator) && ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.navigator.maxTouchPoints >= 0,
  
      observer: (function checkObserver() {
        return ('MutationObserver' in ssr_window__WEBPACK_IMPORTED_MODULE_1__.window || 'WebkitMutationObserver' in ssr_window__WEBPACK_IMPORTED_MODULE_1__.window);
      }()),
  
      passiveListener: (function checkPassiveListener() {
        let supportsPassive = false;
        try {
          const opts = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line
            get() {
              supportsPassive = true;
            },
          });
          ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.addEventListener('testPassiveListener', null, opts);
        } catch (e) {
          // No support
        }
        return supportsPassive;
      }()),
  
      gestures: (function checkGestures() {
        return 'ongesturestart' in ssr_window__WEBPACK_IMPORTED_MODULE_1__.window;
      }()),
    };
  }());
  
  class SwiperClass {
    constructor(params = {}) {
      const self = this;
      self.params = params;
  
      // Events
      self.eventsListeners = {};
  
      if (self.params && self.params.on) {
        Object.keys(self.params.on).forEach((eventName) => {
          self.on(eventName, self.params.on[eventName]);
        });
      }
    }
  
    on(events, handler, priority) {
      const self = this;
      if (typeof handler !== 'function') return self;
      const method = priority ? 'unshift' : 'push';
      events.split(' ').forEach((event) => {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      });
      return self;
    }
  
    once(events, handler, priority) {
      const self = this;
      if (typeof handler !== 'function') return self;
      function onceHandler(...args) {
        self.off(events, onceHandler);
        if (onceHandler.f7proxy) {
          delete onceHandler.f7proxy;
        }
        handler.apply(self, args);
      }
      onceHandler.f7proxy = handler;
      return self.on(events, onceHandler, priority);
    }
  
    off(events, handler) {
      const self = this;
      if (!self.eventsListeners) return self;
      events.split(' ').forEach((event) => {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
          self.eventsListeners[event].forEach((eventHandler, index) => {
            if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
      return self;
    }
  
    emit(...args) {
      const self = this;
      if (!self.eventsListeners) return self;
      let events;
      let data;
      let context;
      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }
      const eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach((event) => {
        if (self.eventsListeners && self.eventsListeners[event]) {
          const handlers = [];
          self.eventsListeners[event].forEach((eventHandler) => {
            handlers.push(eventHandler);
          });
          handlers.forEach((eventHandler) => {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    }
  
    useModulesParams(instanceParams) {
      const instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach((moduleName) => {
        const module = instance.modules[moduleName];
        // Extend params
        if (module.params) {
          Utils.extend(instanceParams, module.params);
        }
      });
    }
  
    useModules(modulesParams = {}) {
      const instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach((moduleName) => {
        const module = instance.modules[moduleName];
        const moduleParams = modulesParams[moduleName] || {};
        // Extend instance methods and props
        if (module.instance) {
          Object.keys(module.instance).forEach((modulePropName) => {
            const moduleProp = module.instance[modulePropName];
            if (typeof moduleProp === 'function') {
              instance[modulePropName] = moduleProp.bind(instance);
            } else {
              instance[modulePropName] = moduleProp;
            }
          });
        }
        // Add event listeners
        if (module.on && instance.on) {
          Object.keys(module.on).forEach((moduleEventName) => {
            instance.on(moduleEventName, module.on[moduleEventName]);
          });
        }
  
        // Module create callback
        if (module.create) {
          module.create.bind(instance)(moduleParams);
        }
      });
    }
  
    static set components(components) {
      const Class = this;
      if (!Class.use) return;
      Class.use(components);
    }
  
    static installModule(module, ...params) {
      const Class = this;
      if (!Class.prototype.modules) Class.prototype.modules = {};
      const name = module.name || (`${Object.keys(Class.prototype.modules).length}_${Utils.now()}`);
      Class.prototype.modules[name] = module;
      // Prototype
      if (module.proto) {
        Object.keys(module.proto).forEach((key) => {
          Class.prototype[key] = module.proto[key];
        });
      }
      // Class
      if (module.static) {
        Object.keys(module.static).forEach((key) => {
          Class[key] = module.static[key];
        });
      }
      // Callback
      if (module.install) {
        module.install.apply(Class, params);
      }
      return Class;
    }
  
    static use(module, ...params) {
      const Class = this;
      if (Array.isArray(module)) {
        module.forEach((m) => Class.installModule(m));
        return Class;
      }
      return Class.installModule(module, ...params);
    }
  }
  
  function updateSize () {
    const swiper = this;
    let width;
    let height;
    const $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined') {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined') {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
      return;
    }
  
    // Subtract paddings
    width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
    height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);
  
    Utils.extend(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height,
    });
  }
  
  function updateSlides () {
    const swiper = this;
    const params = swiper.params;
  
    const {
      $wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL,
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
  
    function slidesForMargin(slideIndex) {
      if (!params.cssMode) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }
  
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
  
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
  
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.snapGrid.length;
  
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === 'undefined') {
      return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
    }
  
    swiper.virtualSize = -spaceBetween;
  
    // reset margins
    if (rtl) slides.css({ marginLeft: '', marginTop: '' });
    else slides.css({ marginRight: '', marginBottom: '' });
  
    let slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }
      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    }
  
    // Calc slides
    let slideSize;
    const slidesPerColumn = params.slidesPerColumn;
    const slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    const numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for (let i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      const slide = slides.eq(i);
      if (params.slidesPerColumn > 1) {
        // Set slides order
        let newSlideOrderIndex;
        let column;
        let row;
        if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
          const groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
          const slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
          const columnsInGroup = groupIndex === 0
            ? params.slidesPerGroup
            : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
          row = Math.floor(slideIndexInGroup / columnsInGroup);
          column = (slideIndexInGroup - row * columnsInGroup) + groupIndex * params.slidesPerGroup;
  
          newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
          slide
            .css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              order: newSlideOrderIndex,
            });
        } else if (params.slidesPerColumnFill === 'column') {
          column = Math.floor(i / slidesPerColumn);
          row = i - (column * slidesPerColumn);
          if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
            row += 1;
            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - (row * slidesPerRow);
        }
        slide.css(
          `margin-${swiper.isHorizontal() ? 'top' : 'left'}`,
          (row !== 0 && params.spaceBetween) && (`${params.spaceBetween}px`)
        );
      }
      if (slide.css('display') === 'none') continue; // eslint-disable-line
  
      if (params.slidesPerView === 'auto') {
        const slideStyles = ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.getComputedStyle(slide[0], null);
        const currentTransform = slide[0].style.transform;
        const currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = 'none';
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = 'none';
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal()
            ? slide.outerWidth(true)
            : slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          if (swiper.isHorizontal()) {
            const width = parseFloat(slideStyles.getPropertyValue('width'));
            const paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
            const paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
            const marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
            const marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
            const boxSizing = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
            }
          } else {
            const height = parseFloat(slideStyles.getPropertyValue('height'));
            const paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
            const paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
            const marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
            const marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
            const boxSizing = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing && boxSizing === 'border-box') {
              slideSize = height + marginTop + marginBottom;
            } else {
              slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
            }
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);
  
        if (slides[i]) {
          if (swiper.isHorizontal()) {
            slides[i].style.width = `${slideSize}px`;
          } else {
            slides[i].style.height = `${slideSize}px`;
          }
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
  
  
      if (params.centeredSlides) {
        slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
        if (i === 0) slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if ((index) % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
  
      swiper.virtualSize += slideSize + spaceBetween;
  
      prevSlideSize = slideSize;
  
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    let newSlidesGrid;
  
    if (
      rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
    }
    if (params.setWrapperSize) {
      if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
      else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` });
    }
  
    if (params.slidesPerColumn > 1) {
      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
      if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
      else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` });
      if (params.centeredSlides) {
        newSlidesGrid = [];
        for (let i = 0; i < snapGrid.length; i += 1) {
          let slidesGridItem = snapGrid[i];
          if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
      }
    }
  
    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
      newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0) snapGrid = [0];
  
    if (params.spaceBetween !== 0) {
      if (swiper.isHorizontal()) {
        if (rtl) slides.filter(slidesForMargin).css({ marginLeft: `${spaceBetween}px` });
        else slides.filter(slidesForMargin).css({ marginRight: `${spaceBetween}px` });
      } else slides.filter(slidesForMargin).css({ marginBottom: `${spaceBetween}px` });
    }
  
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      const maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map((snap) => {
        if (snap < 0) return -offsetBefore;
        if (snap > maxSnap) return maxSnap + offsetAfter;
        return snap;
      });
    }
  
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      if (allSlidesSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach((snap, snapIndex) => {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach((snap, snapIndex) => {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
  
    Utils.extend(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid,
    });
  
    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) swiper.checkOverflow();
      swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }
  
    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }
  
  function updateAutoHeight (speed) {
    const swiper = this;
    const activeSlides = [];
    let newHeight = 0;
    let i;
    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        swiper.visibleSlides.each((index, slide) => {
          activeSlides.push(slide);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          const index = swiper.activeIndex + i;
          if (index > swiper.slides.length) break;
          activeSlides.push(swiper.slides.eq(index)[0]);
        }
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    }
  
    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
  
    // Update Height
    if (newHeight) swiper.$wrapperEl.css('height', `${newHeight}px`);
  }
  
  function updateSlidesOffset () {
    const swiper = this;
    const slides = swiper.slides;
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }
  
  function updateSlidesProgress (translate = (this && this.translate) || 0) {
    const swiper = this;
    const params = swiper.params;
  
    const { slides, rtlTranslate: rtl } = swiper;
  
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate;
  
    // Visible Slides
    slides.removeClass(params.slideVisibleClass);
  
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
  
    for (let i = 0; i < slides.length; i += 1) {
      const slide = slides[i];
      const slideProgress = (
        (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
      ) / (slide.swiperSlideSize + params.spaceBetween);
      if (params.watchSlidesVisibility || (params.centeredSlides && params.autoHeight)) {
        const slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1)
                  || (slideAfter > 1 && slideAfter <= swiper.size)
                  || (slideBefore <= 0 && slideAfter >= swiper.size);
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(swiper.visibleSlides);
  }
  
  function updateProgress (translate) {
    const swiper = this;
    if (typeof translate === 'undefined') {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      // eslint-disable-next-line
      translate = (swiper && swiper.translate && (swiper.translate * multiplier)) || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress, isBeginning, isEnd } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / (translatesDiff);
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Utils.extend(swiper, {
      progress,
      isBeginning,
      isEnd,
    });
  
    if (params.watchSlidesProgress || params.watchSlidesVisibility || (params.centeredSlides && params.autoHeight)) swiper.updateSlidesProgress(translate);
  
    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
      swiper.emit('fromEdge');
    }
  
    swiper.emit('progress', progress);
  }
  
  function updateSlidesClasses () {
    const swiper = this;
  
    const {
      slides, params, $wrapperEl, activeIndex, realIndex,
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
  
    slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
  
    let activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
    } else {
      activeSlide = slides.eq(activeIndex);
    }
  
    // Active classes
    activeSlide.addClass(params.slideActiveClass);
  
    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`)
          .addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl
          .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`)
          .addClass(params.slideDuplicateActiveClass);
      }
    }
    // Next Slide
    let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    // Prev Slide
    let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`)
          .addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl
          .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`)
          .addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`)
          .addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl
          .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`)
          .addClass(params.slideDuplicatePrevClass);
      }
    }
  }
  
  function updateActiveIndex (newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const {
      slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex,
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    if (typeof activeIndex === 'undefined') {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      // Normalize slideIndex
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }
      return;
    }
  
    // Get real index
    const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  
    Utils.extend(swiper, {
      snapIndex,
      realIndex,
      previousIndex,
      activeIndex,
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      swiper.emit('slideChange');
    }
  }
  
  function updateClickedSlide (e) {
    const swiper = this;
    const params = swiper.params;
    const slide = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(e.target).closest(`.${params.slideClass}`)[0];
    let slideFound = false;
    if (slide) {
      for (let i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) slideFound = true;
      }
    }
  
    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt((0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(slide).attr('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(slide).index();
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }
  
  var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide,
  };
  
  function getTranslate (axis = this.isHorizontal() ? 'x' : 'y') {
    const swiper = this;
  
    const {
      params, rtlTranslate: rtl, translate, $wrapperEl,
    } = swiper;
  
    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }
    if (params.cssMode) {
      return translate;
    }
  
    let currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
    if (rtl) currentTranslate = -currentTranslate;
  
    return currentTranslate || 0;
  }
  
  function setTranslate (translate, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress,
    } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
  
    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }
  
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
  
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
  
    // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }
  
    swiper.emit('setTranslate', swiper.translate, byController);
  }
  
  function minTranslate () {
    return (-this.snapGrid[0]);
  }
  
  function maxTranslate () {
    return (-this.snapGrid[this.snapGrid.length - 1]);
  }
  
  function translateTo (translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
    const swiper = this;
  
    const {
      params,
      wrapperEl,
    } = swiper;
  
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
  
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
    else newTranslate = translate;
  
    // Update progress
    swiper.updateProgress(newTranslate);
  
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      } else {
        // eslint-disable-next-line
        if (wrapperEl.scrollTo) {
          wrapperEl.scrollTo({
            [isH ? 'left' : 'top']: -newTranslate,
            behavior: 'smooth',
          });
        } else {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        }
      }
      return true;
    }
  
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionEnd');
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionStart');
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper.emit('transitionEnd');
            }
          };
        }
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
      }
    }
  
    return true;
  }
  
  var translate = {
    getTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo,
  };
  
  function setTransition (duration, byController) {
    const swiper = this;
  
    if (!swiper.params.cssMode) {
      swiper.$wrapperEl.transition(duration);
    }
  
    swiper.emit('setTransition', duration, byController);
  }
  
  function transitionStart (runCallbacks = true, direction) {
    const swiper = this;
    const { activeIndex, params, previousIndex } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
  
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) dir = 'next';
      else if (activeIndex < previousIndex) dir = 'prev';
      else dir = 'reset';
    }
  
    swiper.emit('transitionStart');
  
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionStart');
        return;
      }
      swiper.emit('slideChangeTransitionStart');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionStart');
      } else {
        swiper.emit('slidePrevTransitionStart');
      }
    }
  }
  
  function transitionEnd (runCallbacks = true, direction) {
    const swiper = this;
    const { activeIndex, previousIndex, params } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
  
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) dir = 'next';
      else if (activeIndex < previousIndex) dir = 'prev';
      else dir = 'reset';
    }
  
    swiper.emit('transitionEnd');
  
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionEnd');
        return;
      }
      swiper.emit('slideChangeTransitionEnd');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionEnd');
      } else {
        swiper.emit('slidePrevTransitionEnd');
      }
    }
  }
  
  var transition = {
    setTransition,
    transitionStart,
    transitionEnd,
  };
  
  function slideTo (index = 0, speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
  
    const {
      params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl,
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
  
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  
    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }
  
    const translate = -snapGrid[snapIndex];
  
    // Update progress
    swiper.updateProgress(translate);
  
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) return false;
      }
    }
  
    let direction;
    if (slideIndex > activeIndex) direction = 'next';
    else if (slideIndex < activeIndex) direction = 'prev';
    else direction = 'reset';
  
  
    // Update Index
    if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      // Update Height
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }
      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      let t = -translate;
      if (rtl) {
        t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
      }
      if (speed === 0) {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      } else {
        // eslint-disable-next-line
        if (wrapperEl.scrollTo) {
          wrapperEl.scrollTo({
            [isH ? 'left' : 'top']: t,
            behavior: 'smooth',
          });
        } else {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        }
      }
      return true;
    }
  
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }
    }
  
    return true;
  }
  
  function slideToLoop (index = 0, speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    let newIndex = index;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }
  
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }
  
  /* eslint no-unused-vars: "off" */
  function slideNext (speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const { params, animating } = swiper;
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;
    if (params.loop) {
      if (animating) return false;
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }
  
  /* eslint no-unused-vars: "off" */
  function slidePrev (speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const {
      params, animating, snapGrid, slidesGrid, rtlTranslate,
    } = swiper;
  
    if (params.loop) {
      if (animating) return false;
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
    const normalizedSlidesGrid = slidesGrid.map((val) => normalize(val));
  
    const currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && params.cssMode) {
      snapGrid.forEach((snap) => {
        if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
      });
    }
    let prevIndex;
    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  
  /* eslint no-unused-vars: "off" */
  function slideReset (speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  
  /* eslint no-unused-vars: "off" */
  function slideToClosest (speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
    const swiper = this;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  
    if (translate >= swiper.snapGrid[snapIndex]) {
      // The current translate is on or after the current snap index, so the choice
      // is between the current index and the one after it.
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if ((translate - currentSnap) > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      // The current translate is before the current snap index, so the choice
      // is between the current index and the one before it.
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if ((translate - prevSnap) <= (currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
  
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  
  function slideToClickedSlide () {
    const swiper = this;
    const { params, $wrapperEl } = swiper;
  
    const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    if (params.loop) {
      if (swiper.animating) return;
      realIndex = parseInt((0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      if (params.centeredSlides) {
        if (
          (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
          || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
        ) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
            .eq(0)
            .index();
  
          Utils.nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
          .eq(0)
          .index();
  
        Utils.nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  
  var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide,
  };
  
  function loopCreate () {
    const swiper = this;
    const { params, $wrapperEl } = swiper;
    // Remove duplicated slides
    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
  
    let slides = $wrapperEl.children(`.${params.slideClass}`);
  
    if (params.loopFillGroupWithBlank) {
      const blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (let i = 0; i < blankSlidesNum; i += 1) {
          const blankNode = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
          $wrapperEl.append(blankNode);
        }
        slides = $wrapperEl.children(`.${params.slideClass}`);
      }
    }
  
    if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }
  
    const prependSlides = [];
    const appendSlides = [];
    slides.each((index, el) => {
      const slide = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(el);
      if (index < swiper.loopedSlides) appendSlides.push(el);
      if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
      slide.attr('data-swiper-slide-index', index);
    });
    for (let i = 0; i < appendSlides.length; i += 1) {
      $wrapperEl.append((0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
      $wrapperEl.prepend((0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }
  
  function loopFix () {
    const swiper = this;
  
    swiper.emit('beforeLoopFix');
  
    const {
      activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl,
    } = swiper;
    let newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
  
    const snapTranslate = -snapGrid[activeIndex];
    const diff = snapTranslate - swiper.getTranslate();
  
    // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
      newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
      newIndex += loopedSlides;
      const slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if (activeIndex >= slides.length - loopedSlides) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      const slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
  
    swiper.emit('loopFix');
  }
  
  function loopDestroy () {
    const swiper = this;
    const { $wrapperEl, params, slides } = swiper;
    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
    slides.removeAttr('data-swiper-slide-index');
  }
  
  var loop = {
    loopCreate,
    loopFix,
    loopDestroy,
  };
  
  function setGrabCursor (moving) {
    const swiper = this;
    if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) return;
    const el = swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }
  
  function unsetGrabCursor () {
    const swiper = this;
    if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) return;
    swiper.el.style.cursor = '';
  }
  
  var grabCursor = {
    setGrabCursor,
    unsetGrabCursor,
  };
  
  function appendSlide (slides) {
    const swiper = this;
    const { $wrapperEl, params } = swiper;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) $wrapperEl.append(slides[i]);
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
  }
  
  function prependSlide (slides) {
    const swiper = this;
    const { params, $wrapperEl, activeIndex } = swiper;
  
    if (params.loop) {
      swiper.loopDestroy();
    }
    let newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) $wrapperEl.prepend(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }
  
  function addSlide (index, slides) {
    const swiper = this;
    const { $wrapperEl, params, activeIndex } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  
    const slidesBuffer = [];
    for (let i = baseLength - 1; i >= index; i -= 1) {
      const currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }
  
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) $wrapperEl.append(slides[i]);
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }
  
    for (let i = 0; i < slidesBuffer.length; i += 1) {
      $wrapperEl.append(slidesBuffer[i]);
    }
  
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  
  function removeSlide (slidesIndexes) {
    const swiper = this;
    const { params, $wrapperEl, activeIndex } = swiper;
  
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
  
    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
      for (let i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      newActiveIndex = Math.max(newActiveIndex, 0);
    }
  
    if (params.loop) {
      swiper.loopCreate();
    }
  
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  
  function removeAllSlides () {
    const swiper = this;
  
    const slidesIndexes = [];
    for (let i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }
  
  var manipulation = {
    appendSlide,
    prependSlide,
    addSlide,
    removeSlide,
    removeAllSlides,
  };
  
  const Device = (function Device() {
    const platform = ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.navigator.platform;
    const ua = ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.navigator.userAgent;
  
    const device = {
      ios: false,
      android: false,
      androidChrome: false,
      desktop: false,
      iphone: false,
      ipod: false,
      ipad: false,
      edge: false,
      ie: false,
      firefox: false,
      macos: false,
      windows: false,
      cordova: !!(ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.cordova || ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.phonegap),
      phonegap: !!(ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.cordova || ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.phonegap),
      electron: false,
    };
  
    const screenWidth = ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.screen.width;
    const screenHeight = ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.screen.height;
  
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const ie = ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
    const edge = ua.indexOf('Edge/') >= 0;
    const firefox = ua.indexOf('Gecko/') >= 0 && ua.indexOf('Firefox/') >= 0;
    const windows = platform === 'Win32';
    const electron = ua.toLowerCase().indexOf('electron') >= 0;
    let macos = platform === 'MacIntel';
  
    // iPadOs 13 fix
    if (!ipad
      && macos
      && Support.touch
      && (
        (screenWidth === 1024 && screenHeight === 1366) // Pro 12.9
        || (screenWidth === 834 && screenHeight === 1194) // Pro 11
        || (screenWidth === 834 && screenHeight === 1112) // Pro 10.5
        || (screenWidth === 768 && screenHeight === 1024) // other
      )
    ) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      macos = false;
    }
  
    device.ie = ie;
    device.edge = edge;
    device.firefox = firefox;
  
    // Android
    if (android && !windows) {
      device.os = 'android';
      device.osVersion = android[2];
      device.android = true;
      device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }
    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    }
    // iOS
    if (iphone && !ipod) {
      device.osVersion = iphone[2].replace(/_/g, '.');
      device.iphone = true;
    }
    if (ipad) {
      device.osVersion = ipad[2].replace(/_/g, '.');
      device.ipad = true;
    }
    if (ipod) {
      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
      device.ipod = true;
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
      if (device.osVersion.split('.')[0] === '10') {
        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
      }
    }
  
    // Webview
    device.webView = !!((iphone || ipad || ipod) && (ua.match(/.*AppleWebKit(?!.*Safari)/i) || ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.navigator.standalone))
      || (ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.matchMedia && ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.matchMedia('(display-mode: standalone)').matches);
    device.webview = device.webView;
    device.standalone = device.webView;
  
    // Desktop
    device.desktop = !(device.ios || device.android) || electron;
    if (device.desktop) {
      device.electron = electron;
      device.macos = macos;
      device.windows = windows;
      if (device.macos) {
        device.os = 'macos';
      }
      if (device.windows) {
        device.os = 'windows';
      }
    }
  
    // Pixel Ratio
    device.pixelRatio = ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.devicePixelRatio || 1;
  
    // Export object
    return device;
  }());
  
  function onTouchStart (event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params, touches } = swiper;
  
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    const $targetEl = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(e.target);
  
    if (params.touchEventsTarget === 'wrapper') {
      if (!$targetEl.closest(swiper.wrapperEl).length) return;
    }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
    if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;
    if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`)[0]) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$targetEl.closest(params.swipeHandler)[0]) return;
    }
  
    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
  
    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
  
    const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (
      edgeSwipeDetection
      && ((startX <= edgeSwipeThreshold)
      || (startX >= ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.screen.width - edgeSwipeThreshold))
    ) {
      return;
    }
  
    Utils.extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    });
  
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = Utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    if (e.type !== 'touchstart') {
      let preventDefault = true;
      if ($targetEl.is(data.formElements)) preventDefault = false;
      if (
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.activeElement
        && (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.activeElement).is(data.formElements)
        && ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.activeElement !== $targetEl[0]
      ) {
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.activeElement.blur();
      }
  
      const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
        e.preventDefault();
      }
    }
    swiper.emit('touchStart', e);
  }
  
  function onTouchMove (event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params, touches, rtlTranslate: rtl } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      return;
    }
    if (data.isTouchEvent && e.type !== 'touchmove') return;
    const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
    const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      // isMoved = true;
      swiper.allowClick = false;
      if (data.isTouched) {
        Utils.extend(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY,
        });
        data.touchStartTime = Utils.now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (
          (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
          || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
        || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      ) {
        return;
      }
    }
    if (data.isTouchEvent && ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.activeElement) {
      if (e.target === ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.activeElement && (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) return;
  
    touches.currentX = pageX;
    touches.currentY = pageY;
  
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt((diffX ** 2) + (diffY ** 2)) < swiper.params.threshold) return;
  
    if (typeof data.isScrolling === 'undefined') {
      let touchAngle;
      if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if ((diffX * diffX) + (diffY * diffY) >= 25) {
          touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
  
    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }
      data.allowMomentumBounce = false;
      // Grab Cursor
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
  
    let diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
  
    diff *= params.touchRatio;
    if (rtl) diff = -diff;
  
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;
  
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
      disableParentSwiper = false;
      if (params.resistance) data.currentTranslate = (swiper.minTranslate() - 1) + ((-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio);
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) data.currentTranslate = (swiper.maxTranslate() + 1) - ((swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio);
    }
  
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }
  
    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
  
  
    // Threshold
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
  
    if (!params.followFinger || params.cssMode) return;
  
    // Update active index in free mode
    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime,
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: Utils.now(),
      });
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
  }
  
  function onTouchEnd (event) {
    const swiper = this;
    const data = swiper.touchEventsData;
  
    const {
      params, touches, rtlTranslate: rtl, $wrapperEl, slidesGrid, snapGrid,
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }
  
    // Time diff
    const touchEndTime = Utils.now();
    const timeDiff = touchEndTime - data.touchStartTime;
  
    // Tap, doubleTap, Click
    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit('tap click', e);
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
        swiper.emit('doubleTap doubleClick', e);
      }
    }
  
    data.lastClickTime = Utils.now();
    Utils.nextTick(() => {
      if (!swiper.destroyed) swiper.allowClick = true;
    });
  
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
  
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
  
    if (params.cssMode) {
      return;
    }
  
    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }
  
      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          const lastMoveEvent = data.velocities.pop();
          const velocityEvent = data.velocities.pop();
  
          const distance = lastMoveEvent.position - velocityEvent.position;
          const time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          }
          // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.
          if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeModeMomentumVelocityRatio;
  
        data.velocities.length = 0;
        let momentumDuration = 1000 * params.freeModeMomentumRatio;
        const momentumDistance = swiper.velocity * momentumDuration;
  
        let newPosition = swiper.translate + momentumDistance;
        if (rtl) newPosition = -newPosition;
  
        let doBounce = false;
        let afterBouncePosition;
        const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        let needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (params.freeModeSticky) {
          let nextSlide;
          for (let j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }
  
          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          swiper.once('transitionEnd', () => {
            swiper.loopFix();
          });
        }
        // Fix duration
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
          if (params.freeModeSticky) {
            // If freeModeSticky is active and the user ends a swipe with a slow-velocity
            // event, then durations can be 20+ seconds to slide one (or zero!) slides.
            // It's easy to see this when simulating touch with mouse events. To fix this,
            // limit single-slide swipes to the default slide duration. This also has the
            // nice side effect of matching slide speed if the user stopped moving before
            // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
            // For faster swipes, also apply limits (albeit higher ones).
            const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
            const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }
  
        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
            swiper.emit('momentumBounce');
            swiper.setTransition(params.speed);
            setTimeout(() => {
              swiper.setTranslate(afterBouncePosition);
              $wrapperEl.transitionEnd(() => {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }, 0);
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(() => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }
  
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }
  
      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      return;
    }
  
    // Find current slide
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i = 0; i < slidesGrid.length; i += (i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup)) {
      const increment = (i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup);
      if (typeof slidesGrid[i + increment] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
          stopIndex = i;
          groupSize = slidesGrid[i + increment] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
  
    // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = (stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup);
  
    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === 'prev') {
        if (ratio > (1 - params.longSwipesRatio)) swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === 'next') {
          swiper.slideTo(stopIndex + increment);
        }
        if (swiper.swipeDirection === 'prev') {
          swiper.slideTo(stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  
  function onResize () {
    const swiper = this;
  
    const { params, el } = swiper;
  
    if (el && el.offsetWidth === 0) return;
  
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
  
    // Save locks
    const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;
  
    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
  
    swiper.updateSize();
    swiper.updateSlides();
  
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.run();
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
  
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  
  function onClick (e) {
    const swiper = this;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }
  
  function onScroll () {
    const swiper = this;
    const { wrapperEl, rtlTranslate } = swiper;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      if (rtlTranslate) {
        swiper.translate = ((wrapperEl.scrollWidth - wrapperEl.offsetWidth) - wrapperEl.scrollLeft);
      } else {
        swiper.translate = -wrapperEl.scrollLeft;
      }
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    // eslint-disable-next-line
    if (swiper.translate === -0) swiper.translate = 0;
  
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / (translatesDiff);
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
  
    swiper.emit('setTranslate', swiper.translate, false);
  }
  
  let dummyEventAttached = false;
  function dummyEventListener() {}
  
  function attachEvents() {
    const swiper = this;
    const {
      params, touchEvents, el, wrapperEl,
    } = swiper;
  
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
  
    swiper.onClick = onClick.bind(swiper);
  
    const capture = !!params.nested;
  
    // Touch Events
    if (!Support.touch && Support.pointerEvents) {
      el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        const passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        el.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture } : capture);
        el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) {
          el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
        if (!dummyEventAttached) {
          ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.addEventListener('touchstart', dummyEventListener);
          dummyEventAttached = true;
        }
      }
      if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
        el.addEventListener('mousedown', swiper.onTouchStart, false);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.addEventListener('mousemove', swiper.onTouchMove, capture);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.addEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      el.addEventListener('click', swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl.addEventListener('scroll', swiper.onScroll);
    }
  
    // Resize handler
    if (params.updateOnWindowResize) {
      swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
    } else {
      swiper.on('observerUpdate', onResize, true);
    }
  }
  
  function detachEvents() {
    const swiper = this;
  
    const {
      params, touchEvents, el, wrapperEl,
    } = swiper;
  
    const capture = !!params.nested;
  
    // Touch Events
    if (!Support.touch && Support.pointerEvents) {
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        const passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) {
          el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
      }
      if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
        el.removeEventListener('mousedown', swiper.onTouchStart, false);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.removeEventListener('mousemove', swiper.onTouchMove, capture);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.removeEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      el.removeEventListener('click', swiper.onClick, true);
    }
  
    if (params.cssMode) {
      wrapperEl.removeEventListener('scroll', swiper.onScroll);
    }
  
    // Resize handler
    swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
  }
  
  var events = {
    attachEvents,
    detachEvents,
  };
  
  function setBreakpoint () {
    const swiper = this;
    const {
      activeIndex, initialized, loopedSlides = 0, params, $el,
    } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) return;
  
    // Get breakpoint for window width and update parameters
    const breakpoint = swiper.getBreakpoint(breakpoints);
  
    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      if (breakpointOnlyParams) {
        ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach((param) => {
          const paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === 'undefined') return;
          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
            breakpointOnlyParams[param] = 'auto';
          } else if (param === 'slidesPerView') {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }
  
      const breakpointParams = breakpointOnlyParams || swiper.originalParams;
      const wasMultiRow = params.slidesPerColumn > 1;
      const isMultiRow = breakpointParams.slidesPerColumn > 1;
      if (wasMultiRow && !isMultiRow) {
        $el.removeClass(`${params.containerModifierClass}multirow ${params.containerModifierClass}multirow-column`);
      } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(`${params.containerModifierClass}multirow`);
        if (breakpointParams.slidesPerColumnFill === 'column') {
          $el.addClass(`${params.containerModifierClass}multirow-column`);
        }
      }
  
      const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  
      if (directionChanged && initialized) {
        swiper.changeDirection();
      }
  
      Utils.extend(swiper.params, breakpointParams);
  
      Utils.extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
      });
  
      swiper.currentBreakpoint = breakpoint;
  
      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
      }
  
      swiper.emit('breakpoint', breakpointParams);
    }
  }
  
  function getBreakpoint (breakpoints) {
    // Get breakpoint for window width
    if (!breakpoints) return undefined;
    let breakpoint = false;
  
    const points = Object.keys(breakpoints).map((point) => {
      if (typeof point === 'string' && point.indexOf('@') === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.innerHeight * minRatio;
        return { value, point };
      }
      return { value: point, point };
    });
  
    points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
    for (let i = 0; i < points.length; i += 1) {
      const { point, value } = points[i];
      if (value <= ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.innerWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || 'max';
  }
  
  var breakpoints = { setBreakpoint, getBreakpoint };
  
  function addClasses () {
    const swiper = this;
    const {
      classNames, params, rtl, $el,
    } = swiper;
    const suffixes = [];
  
    suffixes.push('initialized');
    suffixes.push(params.direction);
  
    if (params.freeMode) {
      suffixes.push('free-mode');
    }
    if (params.autoHeight) {
      suffixes.push('autoheight');
    }
    if (rtl) {
      suffixes.push('rtl');
    }
    if (params.slidesPerColumn > 1) {
      suffixes.push('multirow');
      if (params.slidesPerColumnFill === 'column') {
        suffixes.push('multirow-column');
      }
    }
    if (Device.android) {
      suffixes.push('android');
    }
    if (Device.ios) {
      suffixes.push('ios');
    }
  
    if (params.cssMode) {
      suffixes.push('css-mode');
    }
  
    suffixes.forEach((suffix) => {
      classNames.push(params.containerModifierClass + suffix);
    });
  
    $el.addClass(classNames.join(' '));
  }
  
  function removeClasses () {
    const swiper = this;
    const { $el, classNames } = swiper;
  
    $el.removeClass(classNames.join(' '));
  }
  
  var classes = { addClasses, removeClasses };
  
  function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
    let image;
    function onReady() {
      if (callback) callback();
    }
    const isPicture = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(imageEl).parent('picture')[0];
  
    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
      if (src) {
        image = new ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }
  
  function preloadImages () {
    const swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
      if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) swiper.update();
        swiper.emit('imagesReady');
      }
    }
    for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
      const imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(
        imageEl,
        imageEl.currentSrc || imageEl.getAttribute('src'),
        imageEl.srcset || imageEl.getAttribute('srcset'),
        imageEl.sizes || imageEl.getAttribute('sizes'),
        true,
        onReady
      );
    }
  }
  
  var images = {
    loadImage,
    preloadImages,
  };
  
  function checkOverflow() {
    const swiper = this;
    const params = swiper.params;
    const wasLocked = swiper.isLocked;
    const lastSlidePosition = swiper.slides.length > 0 && (params.slidesOffsetBefore + (params.spaceBetween * (swiper.slides.length - 1)) + ((swiper.slides[0]).offsetWidth) * swiper.slides.length);
  
    if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
      swiper.isLocked = lastSlidePosition <= swiper.size;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
  
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;
  
    // events
    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      swiper.navigation.update();
    }
  }
  
  var checkOverflow$1 = { checkOverflow };
  
  var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    //
    preventInteractionOnTransition: false,
  
    // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
  
    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
  
    // Autoheight
    autoHeight: false,
  
    // Set wrapper width
    setWrapperSize: false,
  
    // Virtual Translate
    virtualTranslate: false,
  
    // Effects
    effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  
    // Breakpoints
    breakpoints: undefined,
  
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0, // in px
    slidesOffsetAfter: 0, // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
  
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,
  
    // Round length
    roundLengths: false,
  
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
  
    // Unique Navigation Elements
    uniqueNavElements: true,
  
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
  
    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
  
    // Cursor
    grabCursor: false,
  
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
  
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
  
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
  
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null, // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
  
    // Passive Listeners
    passiveListeners: true,
  
    // NS
    containerModifierClass: 'swiper-container-', // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
  
    // Callbacks
    runCallbacksOnInit: true,
  };
  
  /* eslint no-param-reassign: "off" */
  
  const prototypes = {
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    manipulation,
    events,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes,
    images,
  };
  
  const extendedDefaults = {};
  
  class Swiper extends SwiperClass {
    constructor(...args) {
      let el;
      let params;
      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params) params = {};
  
      params = Utils.extend({}, params);
      if (el && !params.el) params.el = el;
  
      super(params);
  
      Object.keys(prototypes).forEach((prototypeGroup) => {
        Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
          if (!Swiper.prototype[protoMethod]) {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
          }
        });
      });
  
      // Swiper Instance
      const swiper = this;
      if (typeof swiper.modules === 'undefined') {
        swiper.modules = {};
      }
      Object.keys(swiper.modules).forEach((moduleName) => {
        const module = swiper.modules[moduleName];
        if (module.params) {
          const moduleParamName = Object.keys(module.params)[0];
          const moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== 'object' || moduleParams === null) return;
          if (!(moduleParamName in params && 'enabled' in moduleParams)) return;
          if (params[moduleParamName] === true) {
            params[moduleParamName] = { enabled: true };
          }
          if (
            typeof params[moduleParamName] === 'object'
            && !('enabled' in params[moduleParamName])
          ) {
            params[moduleParamName].enabled = true;
          }
          if (!params[moduleParamName]) params[moduleParamName] = { enabled: false };
        }
      });
  
      // Extend defaults with modules params
      const swiperParams = Utils.extend({}, defaults);
      swiper.useModulesParams(swiperParams);
  
      // Extend defaults with passed params
      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = Utils.extend({}, swiper.params);
      swiper.passedParams = Utils.extend({}, params);
  
      // Save Dom lib
      swiper.$ = dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$;
  
      // Find el
      const $el = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(swiper.params.el);
      el = $el[0];
  
      if (!el) {
        return undefined;
      }
  
      if ($el.length > 1) {
        const swipers = [];
        $el.each((index, containerEl) => {
          const newParams = Utils.extend({}, params, { el: containerEl });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }
  
      el.swiper = swiper;
      $el.data('swiper', swiper);
  
      // Find Wrapper
      let $wrapperEl;
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        $wrapperEl = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(el.shadowRoot.querySelector(`.${swiper.params.wrapperClass}`));
        // Children needs to return slot items
        $wrapperEl.children = (options) => $el.children(options);
      } else {
        $wrapperEl = $el.children(`.${swiper.params.wrapperClass}`);
      }
      // Extend Swiper
      Utils.extend(swiper, {
        $el,
        el,
        $wrapperEl,
        wrapperEl: $wrapperEl[0],
  
        // Classes
        classNames: [],
  
        // Slides
        slides: (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
  
        // isDirection
        isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // RTL
        rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box',
  
        // Indexes
        activeIndex: 0,
        realIndex: 0,
  
        //
        isBeginning: true,
        isEnd: false,
  
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
  
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
  
        // Touch Events
        touchEvents: (function touchEvents() {
          const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
          let desktop = ['mousedown', 'mousemove', 'mouseup'];
          if (Support.pointerEvents) {
            desktop = ['pointerdown', 'pointermove', 'pointerup'];
          }
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
            cancel: touch[3],
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2],
          };
          return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }()),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          formElements: 'input, select, option, textarea, button, video, label',
          // Last click time
          lastClickTime: Utils.now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined,
        },
  
        // Clicks
        allowClick: true,
  
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
  
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        },
  
        // Images
        imagesToLoad: [],
        imagesLoaded: 0,
  
      });
  
      // Install Modules
      swiper.useModules();
  
      // Init
      if (swiper.params.init) {
        swiper.init();
      }
  
      // Return app instance
      return swiper;
    }
  
    slidesPerViewDynamic() {
      const swiper = this;
      const {
        params, slides, slidesGrid, size: swiperSize, activeIndex,
      } = swiper;
      let spv = 1;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex].swiperSlideSize;
        let breakLoop;
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          if (slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    }
  
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed) return;
      const { snapGrid, params } = swiper;
      // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
  
      function setTranslate() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (swiper.params.freeMode) {
        setTranslate();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit('update');
    }
  
    changeDirection(newDirection, needUpdate = true) {
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      }
      if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
        return swiper;
      }
  
      swiper.$el
        .removeClass(`${swiper.params.containerModifierClass}${currentDirection}`)
        .addClass(`${swiper.params.containerModifierClass}${newDirection}`);
  
      swiper.params.direction = newDirection;
  
      swiper.slides.each((slideIndex, slideEl) => {
        if (newDirection === 'vertical') {
          slideEl.style.width = '';
        } else {
          slideEl.style.height = '';
        }
      });
  
      swiper.emit('changeDirection');
      if (needUpdate) swiper.update();
  
      return swiper;
    }
  
    init() {
      const swiper = this;
      if (swiper.initialized) return;
  
      swiper.emit('beforeInit');
  
      // Set breakpoint
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
  
      // Add Classes
      swiper.addClasses();
  
      // Create loop
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
  
      // Update size
      swiper.updateSize();
  
      // Update slides
      swiper.updateSlides();
  
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
  
      // Set Grab Cursor
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
  
      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }
  
      // Slide To Initial Slide
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      }
  
      // Attach events
      swiper.attachEvents();
  
      // Init Flag
      swiper.initialized = true;
  
      // Emit
      swiper.emit('init');
    }
  
    destroy(deleteInstance = true, cleanStyles = true) {
      const swiper = this;
      const {
        params, $el, $wrapperEl, slides,
      } = swiper;
  
      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }
  
      swiper.emit('beforeDestroy');
  
      // Init Flag
      swiper.initialized = false;
  
      // Detach events
      swiper.detachEvents();
  
      // Destroy loop
      if (params.loop) {
        swiper.loopDestroy();
      }
  
      // Cleanup styles
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');
        if (slides && slides.length) {
          slides
            .removeClass([
              params.slideVisibleClass,
              params.slideActiveClass,
              params.slideNextClass,
              params.slidePrevClass,
            ].join(' '))
            .removeAttr('style')
            .removeAttr('data-swiper-slide-index');
        }
      }
  
      swiper.emit('destroy');
  
      // Detach emitter events
      Object.keys(swiper.eventsListeners).forEach((eventName) => {
        swiper.off(eventName);
      });
  
      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }
      swiper.destroyed = true;
  
      return null;
    }
  
    static extendDefaults(newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    }
  
    static get extendedDefaults() {
      return extendedDefaults;
    }
  
    static get defaults() {
      return defaults;
    }
  
    static get Class() {
      return SwiperClass;
    }
  
    static get $() {
      return dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$;
    }
  }
  
  var Device$1 = {
    name: 'device',
    proto: {
      device: Device,
    },
    static: {
      device: Device,
    },
  };
  
  var Support$1 = {
    name: 'support',
    proto: {
      support: Support,
    },
    static: {
      support: Support,
    },
  };
  
  const Browser = (function Browser() {
    function isSafari() {
      const ua = ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.navigator.userAgent.toLowerCase();
      return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
    }
    return {
      isEdge: !!ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.navigator.userAgent),
    };
  }());
  
  var Browser$1 = {
    name: 'browser',
    proto: {
      browser: Browser,
    },
    static: {
      browser: Browser,
    },
  };
  
  var Resize = {
    name: 'resize',
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        resize: {
          resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            swiper.emit('beforeResize');
            swiper.emit('resize');
          },
          orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            swiper.emit('orientationchange');
          },
        },
      });
    },
    on: {
      init() {
        const swiper = this;
        // Emit resize
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.addEventListener('resize', swiper.resize.resizeHandler);
  
        // Emit orientationchange
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
      destroy() {
        const swiper = this;
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.removeEventListener('resize', swiper.resize.resizeHandler);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
    },
  };
  
  const Observer = {
    func: ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.MutationObserver || ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.WebkitMutationObserver,
    attach(target, options = {}) {
      const swiper = this;
  
      const ObserverFunc = Observer.func;
      const observer = new ObserverFunc((mutations) => {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          swiper.emit('observerUpdate', mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate() {
          swiper.emit('observerUpdate', mutations[0]);
        };
  
        if (ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.requestAnimationFrame) {
          ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.requestAnimationFrame(observerUpdate);
        } else {
          ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.setTimeout(observerUpdate, 0);
        }
      });
  
      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
      });
  
      swiper.observer.observers.push(observer);
    },
    init() {
      const swiper = this;
      if (!Support.observer || !swiper.params.observer) return;
      if (swiper.params.observeParents) {
        const containerParents = swiper.$el.parents();
        for (let i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      }
      // Observe container
      swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });
  
      // Observe wrapper
      swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
    },
    destroy() {
      const swiper = this;
      swiper.observer.observers.forEach((observer) => {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    },
  };
  
  var Observer$1 = {
    name: 'observer',
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false,
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        observer: {
          init: Observer.init.bind(swiper),
          attach: Observer.attach.bind(swiper),
          destroy: Observer.destroy.bind(swiper),
          observers: [],
        },
      });
    },
    on: {
      init() {
        const swiper = this;
        swiper.observer.init();
      },
      destroy() {
        const swiper = this;
        swiper.observer.destroy();
      },
    },
  };
  
  const Virtual = {
    update(force) {
      const swiper = this;
      const { slidesPerView, slidesPerGroup, centeredSlides } = swiper.params;
      const { addSlidesBefore, addSlidesAfter } = swiper.params.virtual;
      const {
        from: previousFrom,
        to: previousTo,
        slides,
        slidesGrid: previousSlidesGrid,
        renderSlide,
        offset: previousOffset,
      } = swiper.virtual;
      swiper.updateActiveIndex();
      const activeIndex = swiper.activeIndex || 0;
  
      let offsetProp;
      if (swiper.rtlTranslate) offsetProp = 'right';
      else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
  
      let slidesAfter;
      let slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
        slidesBefore = slidesPerGroup + addSlidesAfter;
      }
      const from = Math.max((activeIndex || 0) - slidesBefore, 0);
      const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
  
      Utils.extend(swiper.virtual, {
        from,
        to,
        offset,
        slidesGrid: swiper.slidesGrid,
      });
  
      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }
  
      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.css(offsetProp, `${offset}px`);
        }
        swiper.updateProgress();
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset,
          from,
          to,
          slides: (function getSlides() {
            const slidesToRender = [];
            for (let i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          }()),
        });
        onRendered();
        return;
      }
      const prependIndexes = [];
      const appendIndexes = [];
      if (force) {
        swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
      } else {
        for (let i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
          }
        }
      }
      for (let i = 0; i < slides.length; i += 1) {
        if (i >= from && i <= to) {
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(i);
          } else {
            if (i > previousTo) appendIndexes.push(i);
            if (i < previousFrom) prependIndexes.push(i);
          }
        }
      }
      appendIndexes.forEach((index) => {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes.sort((a, b) => b - a).forEach((index) => {
        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
      });
      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
      onRendered();
    },
    renderSlide(slide, index) {
      const swiper = this;
      const params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      const $slideEl = params.renderSlide
        ? (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(params.renderSlide.call(swiper, slide, index))
        : (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
      if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
      if (params.cache) swiper.virtual.cache[index] = $slideEl;
      return $slideEl;
    },
    appendSlide(slides) {
      const swiper = this;
      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.push(slides[i]);
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      swiper.virtual.update(true);
    },
    prependSlide(slides) {
      const swiper = this;
      const activeIndex = swiper.activeIndex;
      let newActiveIndex = activeIndex + 1;
      let numberOfNewSlides = 1;
  
      if (Array.isArray(slides)) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        const cache = swiper.virtual.cache;
        const newCache = {};
        Object.keys(cache).forEach((cachedIndex) => {
          const $cachedEl = cache[cachedIndex];
          const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
          if (cachedElIndex) {
            $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
          }
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
        });
        swiper.virtual.cache = newCache;
      }
      swiper.virtual.update(true);
      swiper.slideTo(newActiveIndex, 0);
    },
    removeSlide(slidesIndexes) {
      const swiper = this;
      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
      let activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }
          if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }
        if (slidesIndexes < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
      swiper.virtual.update(true);
      swiper.slideTo(activeIndex, 0);
    },
    removeAllSlides() {
      const swiper = this;
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      swiper.virtual.update(true);
      swiper.slideTo(0, 0);
    },
  };
  
  var Virtual$1 = {
    name: 'virtual',
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        virtual: {
          update: Virtual.update.bind(swiper),
          appendSlide: Virtual.appendSlide.bind(swiper),
          prependSlide: Virtual.prependSlide.bind(swiper),
          removeSlide: Virtual.removeSlide.bind(swiper),
          removeAllSlides: Virtual.removeAllSlides.bind(swiper),
          renderSlide: Virtual.renderSlide.bind(swiper),
          slides: swiper.params.virtual.slides,
          cache: {},
        },
      });
    },
    on: {
      beforeInit() {
        const swiper = this;
        if (!swiper.params.virtual.enabled) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        const overwriteParams = {
          watchSlidesProgress: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
  
        if (!swiper.params.initialSlide) {
          swiper.virtual.update();
        }
      },
      setTranslate() {
        const swiper = this;
        if (!swiper.params.virtual.enabled) return;
        swiper.virtual.update();
      },
    },
  };
  
  const Keyboard = {
    handle(event) {
      const swiper = this;
      const { rtlTranslate: rtl } = swiper;
      let e = event;
      if (e.originalEvent) e = e.originalEvent; // jquery fix
      const kc = e.keyCode || e.charCode;
      // Directions locks
      if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40) || kc === 34)) {
        return false;
      }
      if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38) || kc === 33)) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.activeElement && ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.activeElement.nodeName && (ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.activeElement.nodeName.toLowerCase() === 'input' || ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }
      if (swiper.params.keyboard.onlyInViewport && (kc === 33 || kc === 34 || kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
        let inView = false;
        // Check that swiper should be inside of visible area of window
        if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
          return undefined;
        }
        const windowWidth = ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.innerWidth;
        const windowHeight = ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.innerHeight;
        const swiperOffset = swiper.$el.offset();
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        const swiperCoord = [
          [swiperOffset.left, swiperOffset.top],
          [swiperOffset.left + swiper.width, swiperOffset.top],
          [swiperOffset.left, swiperOffset.top + swiper.height],
          [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height],
        ];
        for (let i = 0; i < swiperCoord.length; i += 1) {
          const point = swiperCoord[i];
          if (
            point[0] >= 0 && point[0] <= windowWidth
            && point[1] >= 0 && point[1] <= windowHeight
          ) {
            inView = true;
          }
        }
        if (!inView) return undefined;
      }
      if (swiper.isHorizontal()) {
        if (kc === 33 || kc === 34 || kc === 37 || kc === 39) {
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
        }
        if (((kc === 34 || kc === 39) && !rtl) || ((kc === 33 || kc === 37) && rtl)) swiper.slideNext();
        if (((kc === 33 || kc === 37) && !rtl) || ((kc === 34 || kc === 39) && rtl)) swiper.slidePrev();
      } else {
        if (kc === 33 || kc === 34 || kc === 38 || kc === 40) {
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
        }
        if (kc === 34 || kc === 40) swiper.slideNext();
        if (kc === 33 || kc === 38) swiper.slidePrev();
      }
      swiper.emit('keyPress', kc);
      return undefined;
    },
    enable() {
      const swiper = this;
      if (swiper.keyboard.enabled) return;
      (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(ssr_window__WEBPACK_IMPORTED_MODULE_1__.document).on('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable() {
      const swiper = this;
      if (!swiper.keyboard.enabled) return;
      (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(ssr_window__WEBPACK_IMPORTED_MODULE_1__.document).off('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    },
  };
  
  var Keyboard$1 = {
    name: 'keyboard',
    params: {
      keyboard: {
        enabled: false,
        onlyInViewport: true,
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        keyboard: {
          enabled: false,
          enable: Keyboard.enable.bind(swiper),
          disable: Keyboard.disable.bind(swiper),
          handle: Keyboard.handle.bind(swiper),
        },
      });
    },
    on: {
      init() {
        const swiper = this;
        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy() {
        const swiper = this;
        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      },
    },
  };
  
  function isEventSupported() {
    const eventName = 'onwheel';
    let isSupported = eventName in ssr_window__WEBPACK_IMPORTED_MODULE_1__.document;
  
    if (!isSupported) {
      const element = ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }
  
    if (!isSupported
      && ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.implementation
      && ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.implementation.hasFeature
      // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      && ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.implementation.hasFeature('', '') !== true
    ) {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.implementation.hasFeature('Events.wheel', '3.0');
    }
  
    return isSupported;
  }
  const Mousewheel = {
    lastScrollTime: Utils.now(),
    lastEventBeforeSnap: undefined,
    recentWheelEvents: [],
    event() {
      if (ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
      return isEventSupported() ? 'wheel' : 'mousewheel';
    },
    normalize(e) {
      // Reasonable defaults
      const PIXEL_STEP = 10;
      const LINE_HEIGHT = 40;
      const PAGE_HEIGHT = 800;
  
      let sX = 0;
      let sY = 0; // spinX, spinY
      let pX = 0;
      let pY = 0; // pixelX, pixelY
  
      // Legacy
      if ('detail' in e) {
        sY = e.detail;
      }
      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }
      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      }
  
      // side scrolling on FF with DOMMouseScroll
      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }
  
      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;
  
      if ('deltaY' in e) {
        pY = e.deltaY;
      }
      if ('deltaX' in e) {
        pX = e.deltaX;
      }
  
      if (e.shiftKey && !pX) { // if user scrolls with shift he wants horizontal scroll
        pX = pY;
        pY = 0;
      }
  
      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) { // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else { // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }
  
      // Fall-back if spin cannot be determined
      if (pX && !sX) {
        sX = (pX < 1) ? -1 : 1;
      }
      if (pY && !sY) {
        sY = (pY < 1) ? -1 : 1;
      }
  
      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY,
      };
    },
    handleMouseEnter() {
      const swiper = this;
      swiper.mouseEntered = true;
    },
    handleMouseLeave() {
      const swiper = this;
      swiper.mouseEntered = false;
    },
    handle(event) {
      let e = event;
      const swiper = this;
      const params = swiper.params.mousewheel;
  
      if (swiper.params.cssMode) {
        e.preventDefault();
      }
  
      let target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(swiper.params.mousewheel.eventsTarged);
      }
      if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
  
      if (e.originalEvent) e = e.originalEvent; // jquery fix
      let delta = 0;
      const rtlFactor = swiper.rtlTranslate ? -1 : 1;
  
      const data = Mousewheel.normalize(e);
  
      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;
          else return true;
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;
        else return true;
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }
  
      if (delta === 0) return true;
  
      if (params.invert) delta = -delta;
  
      if (!swiper.params.freeMode) {
        // Register the new event in a variable which stores the relevant data
        const newEvent = {
          time: Utils.now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event,
        };
  
        // Keep the most recent events
        const recentWheelEvents = swiper.mousewheel.recentWheelEvents;
        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift(); // only store the last N events
        }
        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
        recentWheelEvents.push(newEvent);
  
        // If there is at least one previous recorded event:
        //   If direction has changed or
        //   if the scroll is quicker than the previous one:
        //     Animate the slider.
        // Else (this is the first time the wheel is moved):
        //     Animate the slider.
        if (prevEvent) {
          if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
            swiper.mousewheel.animateSlider(newEvent);
          }
        } else {
          swiper.mousewheel.animateSlider(newEvent);
        }
  
        // If it's time to release the scroll:
        //   Return now so you don't hit the preventDefault.
        if (swiper.mousewheel.releaseScroll(newEvent)) {
          return true;
        }
      } else {
        // Freemode or scrollContainer:
  
        // If we recently snapped after a momentum scroll, then ignore wheel events
        // to give time for the deceleration to finish. Stop ignoring after 500 msecs
        // or if it's a new scroll (larger delta or inverse sign as last event before
        // an end-of-momentum snap).
        const newEvent = { time: Utils.now(), delta: Math.abs(delta), direction: Math.sign(delta) };
        const { lastEventBeforeSnap } = swiper.mousewheel;
        const ignoreWheelEvents = lastEventBeforeSnap
          && newEvent.time < lastEventBeforeSnap.time + 500
          && newEvent.delta <= lastEventBeforeSnap.delta
          && newEvent.direction === lastEventBeforeSnap.direction;
        if (!ignoreWheelEvents) {
          swiper.mousewheel.lastEventBeforeSnap = undefined;
  
          if (swiper.params.loop) {
            swiper.loopFix();
          }
          let position = swiper.getTranslate() + (delta * params.sensitivity);
          const wasBeginning = swiper.isBeginning;
          const wasEnd = swiper.isEnd;
  
          if (position >= swiper.minTranslate()) position = swiper.minTranslate();
          if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
  
          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
  
          if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
            swiper.updateSlidesClasses();
          }
  
          if (swiper.params.freeModeSticky) {
            // When wheel scrolling starts with sticky (aka snap) enabled, then detect
            // the end of a momentum scroll by storing recent (N=15?) wheel events.
            // 1. do all N events have decreasing or same (absolute value) delta?
            // 2. did all N events arrive in the last M (M=500?) msecs?
            // 3. does the earliest event have an (absolute value) delta that's
            //    at least P (P=1?) larger than the most recent event's delta?
            // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
            // If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
            // Snap immediately and ignore remaining wheel events in this scroll.
            // See comment above for "remaining wheel events in this scroll" determination.
            // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
            clearTimeout(swiper.mousewheel.timeout);
            swiper.mousewheel.timeout = undefined;
            const recentWheelEvents = swiper.mousewheel.recentWheelEvents;
            if (recentWheelEvents.length >= 15) {
              recentWheelEvents.shift(); // only store the last N events
            }
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            const firstEvent = recentWheelEvents[0];
            recentWheelEvents.push(newEvent);
            if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
              // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
              recentWheelEvents.splice(0);
            } else if (recentWheelEvents.length >= 15
                && newEvent.time - firstEvent.time < 500
                && firstEvent.delta - newEvent.delta >= 1
                && newEvent.delta <= 6
            ) {
              // We're at the end of the deceleration of a momentum scroll, so there's no need
              // to wait for more events. Snap ASAP on the next tick.
              // Also, because there's some remaining momentum we'll bias the snap in the
              // direction of the ongoing scroll because it's better UX for the scroll to snap
              // in the same direction as the scroll instead of reversing to snap.  Therefore,
              // if it's already scrolled more than 20% in the current direction, keep going.
              const snapToThreshold = delta > 0 ? 0.8 : 0.2;
              swiper.mousewheel.lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.mousewheel.timeout = Utils.nextTick(() => {
                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
              }, 0); // no delay; move on next tick
            }
            if (!swiper.mousewheel.timeout) {
              // if we get here, then we haven't detected the end of a momentum scroll, so
              // we'll consider a scroll "complete" when there haven't been any wheel events
              // for 500ms.
              swiper.mousewheel.timeout = Utils.nextTick(() => {
                const snapToThreshold = 0.5;
                swiper.mousewheel.lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
              }, 500);
            }
          }
  
          // Emit event
          if (!ignoreWheelEvents) swiper.emit('scroll', e);
  
          // Stop autoplay
          if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
          // Return page scroll on edge positions
          if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
        }
      }
  
      if (e.preventDefault) e.preventDefault();
      else e.returnValue = false;
      return false;
    },
    animateSlider(newEvent) {
      const swiper = this;
      // If the movement is NOT big enough and
      // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
      //   Don't go any further (avoid insignificant scroll movement).
      if (newEvent.delta >= 6 && Utils.now() - swiper.mousewheel.lastScrollTime < 60) {
        // Return false as a default
        return true;
      }
      // If user is scrolling towards the end:
      //   If the slider hasn't hit the latest slide or
      //   if the slider is a loop and
      //   if the slider isn't moving right now:
      //     Go to next slide and
      //     emit a scroll event.
      // Else (the user is scrolling towards the beginning) and
      // if the slider hasn't hit the first slide or
      // if the slider is a loop and
      // if the slider isn't moving right now:
      //   Go to prev slide and
      //   emit a scroll event.
      if (newEvent.direction < 0) {
        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
          swiper.slideNext();
          swiper.emit('scroll', newEvent.raw);
        }
      } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
        swiper.slidePrev();
        swiper.emit('scroll', newEvent.raw);
      }
      // If you got here is because an animation has been triggered so store the current time
      swiper.mousewheel.lastScrollTime = (new ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.Date()).getTime();
      // Return false as a default
      return false;
    },
    releaseScroll(newEvent) {
      const swiper = this;
      const params = swiper.params.mousewheel;
      if (newEvent.direction < 0) {
        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }
      } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
      return false;
    },
    enable() {
      const swiper = this;
      const event = Mousewheel.event();
      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
        return true;
      }
      if (!event) return false;
      if (swiper.mousewheel.enabled) return false;
      let target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(swiper.params.mousewheel.eventsTarged);
      }
      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
      target.on(event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable() {
      const swiper = this;
      const event = Mousewheel.event();
      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
        return true;
      }
      if (!event) return false;
      if (!swiper.mousewheel.enabled) return false;
      let target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(swiper.params.mousewheel.eventsTarged);
      }
      target.off(event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    },
  };
  
  var Mousewheel$1 = {
    name: 'mousewheel',
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarged: 'container',
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        mousewheel: {
          enabled: false,
          enable: Mousewheel.enable.bind(swiper),
          disable: Mousewheel.disable.bind(swiper),
          handle: Mousewheel.handle.bind(swiper),
          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
          animateSlider: Mousewheel.animateSlider.bind(swiper),
          releaseScroll: Mousewheel.releaseScroll.bind(swiper),
          lastScrollTime: Utils.now(),
          lastEventBeforeSnap: undefined,
          recentWheelEvents: [],
        },
      });
    },
    on: {
      init() {
        const swiper = this;
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
          swiper.mousewheel.disable();
        }
        if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
      },
      destroy() {
        const swiper = this;
        if (swiper.params.cssMode) {
          swiper.mousewheel.enable();
        }
        if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
      },
    },
  };
  
  const Navigation = {
    update() {
      // Update Navigation Buttons
      const swiper = this;
      const params = swiper.params.navigation;
  
      if (swiper.params.loop) return;
      const { $nextEl, $prevEl } = swiper.navigation;
  
      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          $prevEl.addClass(params.disabledClass);
        } else {
          $prevEl.removeClass(params.disabledClass);
        }
        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          $nextEl.addClass(params.disabledClass);
        } else {
          $nextEl.removeClass(params.disabledClass);
        }
        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    },
    onPrevClick(e) {
      const swiper = this;
      
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) return;
      let pre = swiper.activeIndex - 1;
      $(`[data-pip-index="${pre}"]`).trigger("click");
      // swiper.slidePrev();
      },
      onNextClick(e) {
      const swiper = this;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) return;
      let next = swiper.activeIndex + 1;
      $(`[data-pip-index="${next}"]`).trigger("click");
      //swiper.slideNext();
      },
    init() {
      const swiper = this;
      const params = swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) return;
  
      let $nextEl;
      let $prevEl;
      if (params.nextEl) {
        $nextEl = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(params.nextEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.nextEl === 'string'
          && $nextEl.length > 1
          && swiper.$el.find(params.nextEl).length === 1
        ) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }
      if (params.prevEl) {
        $prevEl = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(params.prevEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.prevEl === 'string'
          && $prevEl.length > 1
          && swiper.$el.find(params.prevEl).length === 1
        ) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }
  
      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', swiper.navigation.onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', swiper.navigation.onPrevClick);
      }
  
      Utils.extend(swiper.navigation, {
        $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl,
        prevEl: $prevEl && $prevEl[0],
      });
    },
    destroy() {
      const swiper = this;
      const { $nextEl, $prevEl } = swiper.navigation;
      if ($nextEl && $nextEl.length) {
        $nextEl.off('click', swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off('click', swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    },
  };
  
  var Navigation$1 = {
    name: 'navigation',
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
  
        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        navigation: {
          init: Navigation.init.bind(swiper),
          update: Navigation.update.bind(swiper),
          destroy: Navigation.destroy.bind(swiper),
          onNextClick: Navigation.onNextClick.bind(swiper),
          onPrevClick: Navigation.onPrevClick.bind(swiper),
        },
      });
    },
    on: {
      init() {
        const swiper = this;
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge() {
        const swiper = this;
        swiper.navigation.update();
      },
      fromEdge() {
        const swiper = this;
        swiper.navigation.update();
      },
      destroy() {
        const swiper = this;
        swiper.navigation.destroy();
      },
      click(e) {
        const swiper = this;
        const { $nextEl, $prevEl } = swiper.navigation;
        if (
          swiper.params.navigation.hideOnClick
          && !(0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(e.target).is($prevEl)
          && !(0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(e.target).is($nextEl)
        ) {
          let isHidden;
          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }
          if (isHidden === true) {
            swiper.emit('navigationShow', swiper);
          } else {
            swiper.emit('navigationHide', swiper);
          }
          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      },
    },
  };
  
  const Pagination = {
    update() {
      // Render || Update Pagination bullets/items
      const swiper = this;
      const rtl = swiper.rtl;
      const params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const $el = swiper.pagination.$el;
      // Current/Total
      let current;
      const total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
        if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
          current -= (slidesLength - (swiper.loopedSlides * 2));
        }
        if (current > total - 1) current -= total;
        if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      // Types
      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        const bullets = swiper.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(swiper.isHorizontal() ? 'width' : 'height', `${swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)}px`);
          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
            swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
            if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }
          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(`${params.bulletActiveClass} ${params.bulletActiveClass}-next ${params.bulletActiveClass}-next-next ${params.bulletActiveClass}-prev ${params.bulletActiveClass}-prev-prev ${params.bulletActiveClass}-main`);
        if ($el.length > 1) {
          bullets.each((index, bullet) => {
            const $bullet = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(bullet);
            const bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(`${params.bulletActiveClass}-main`);
              }
              if (bulletIndex === firstIndex) {
                $bullet
                  .prev()
                  .addClass(`${params.bulletActiveClass}-prev`)
                  .prev()
                  .addClass(`${params.bulletActiveClass}-prev-prev`);
              }
              if (bulletIndex === lastIndex) {
                $bullet
                  .next()
                  .addClass(`${params.bulletActiveClass}-next`)
                  .next()
                  .addClass(`${params.bulletActiveClass}-next-next`);
              }
            }
          });
        } else {
          const $bullet = bullets.eq(current);
          const bulletIndex = $bullet.index();
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            const $firstDisplayedBullet = bullets.eq(firstIndex);
            const $lastDisplayedBullet = bullets.eq(lastIndex);
            for (let i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
            }
            if (swiper.params.loop) {
              if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                  bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                }
                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
              } else {
                $firstDisplayedBullet
                  .prev()
                  .addClass(`${params.bulletActiveClass}-prev`)
                  .prev()
                  .addClass(`${params.bulletActiveClass}-prev-prev`);
                $lastDisplayedBullet
                  .next()
                  .addClass(`${params.bulletActiveClass}-next`)
                  .next()
                  .addClass(`${params.bulletActiveClass}-next-next`);
              }
            } else {
              $firstDisplayedBullet
                .prev()
                .addClass(`${params.bulletActiveClass}-prev`)
                .prev()
                .addClass(`${params.bulletActiveClass}-prev-prev`);
              $lastDisplayedBullet
                .next()
                .addClass(`${params.bulletActiveClass}-next`)
                .next()
                .addClass(`${params.bulletActiveClass}-next-next`);
            }
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          const bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
          const offsetProp = rtl ? 'right' : 'left';
          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
        }
      }
      if (params.type === 'fraction') {
        $el.find(`.${params.currentClass}`).text(params.formatFractionCurrent(current + 1));
        $el.find(`.${params.totalClass}`).text(params.formatFractionTotal(total));
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el.find(`.${params.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
      }
      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit('paginationRender', swiper, $el[0]);
      } else {
        swiper.emit('paginationUpdate', swiper, $el[0]);
      }
      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render() {
      // Render Container
      const swiper = this;
      const params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
  
      const $el = swiper.pagination.$el;
      let paginationHTML = '';
      if (params.type === 'bullets') {
        const numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        for (let i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(`.${params.bulletClass}`);
      }
      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = `<span class="${params.currentClass}"></span>`
          + ' / '
          + `<span class="${params.totalClass}"></span>`;
        }
        $el.html(paginationHTML);
      }
      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
        }
        $el.html(paginationHTML);
      }
      if (params.type !== 'custom') {
        swiper.emit('paginationRender', swiper.pagination.$el[0]);
      }
    },
    init() {
      const swiper = this;
      const params = swiper.params.pagination;
      if (!params.el) return;
  
      let $el = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(params.el);
      if ($el.length === 0) return;
  
      if (
        swiper.params.uniqueNavElements
        && typeof params.el === 'string'
        && $el.length > 1
        && swiper.$el.find(params.el).length === 1
      ) {
        $el = swiper.$el.find(params.el);
      }
  
      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }
  
      $el.addClass(params.modifierClass + params.type);
  
      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
        swiper.pagination.dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }
  
      if (params.clickable) {
        $el.on('click', `.${params.bulletClass}`, function onClick(e) {
          e.preventDefault();
          let index = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) index += swiper.loopedSlides;
          swiper.slideTo(index);
        });
      }
  
      Utils.extend(swiper.pagination, {
        $el,
        el: $el[0],
      });
    },
    destroy() {
      const swiper = this;
      const params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
      const $el = swiper.pagination.$el;
  
      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
      if (params.clickable) {
        $el.off('click', `.${params.bulletClass}`);
      }
    },
  };
  
  var Pagination$1 = {
    name: 'pagination',
    params: {
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: (number) => number,
        formatFractionTotal: (number) => number,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        modifierClass: 'swiper-pagination-', // NEW
        currentClass: 'swiper-pagination-current',
        totalClass: 'swiper-pagination-total',
        hiddenClass: 'swiper-pagination-hidden',
        progressbarFillClass: 'swiper-pagination-progressbar-fill',
        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
        clickableClass: 'swiper-pagination-clickable', // NEW
        lockClass: 'swiper-pagination-lock',
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        pagination: {
          init: Pagination.init.bind(swiper),
          render: Pagination.render.bind(swiper),
          update: Pagination.update.bind(swiper),
          destroy: Pagination.destroy.bind(swiper),
          dynamicBulletIndex: 0,
        },
      });
    },
    on: {
      init() {
        const swiper = this;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange() {
        const swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          swiper.pagination.update();
        }
      },
      snapIndexChange() {
        const swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange() {
        const swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange() {
        const swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy() {
        const swiper = this;
        swiper.pagination.destroy();
      },
      click(e) {
        const swiper = this;
        if (
          swiper.params.pagination.el
          && swiper.params.pagination.hideOnClick
          && swiper.pagination.$el.length > 0
          && !(0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(e.target).hasClass(swiper.params.pagination.bulletClass)
        ) {
          const isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
          if (isHidden === true) {
            swiper.emit('paginationShow', swiper);
          } else {
            swiper.emit('paginationHide', swiper);
          }
          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      },
    },
  };
  
  const Scrollbar = {
    setTranslate() {
      const swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      const { scrollbar, rtlTranslate: rtl, progress } = swiper;
      const {
        dragSize, trackSize, $dragEl, $el,
      } = scrollbar;
      const params = swiper.params.scrollbar;
  
      let newSize = dragSize;
      let newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
        $dragEl[0].style.width = `${newSize}px`;
      } else {
        $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
        $dragEl[0].style.height = `${newSize}px`;
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(() => {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition(duration) {
      const swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize() {
      const swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
  
      const { scrollbar } = swiper;
      const { $dragEl, $el } = scrollbar;
  
      $dragEl[0].style.width = '';
      $dragEl[0].style.height = '';
      const trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
  
      const divider = swiper.size / swiper.virtualSize;
      const moveDivider = divider * (trackSize / swiper.size);
      let dragSize;
      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }
  
      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = `${dragSize}px`;
      } else {
        $dragEl[0].style.height = `${dragSize}px`;
      }
  
      if (divider >= 1) {
        $el[0].style.display = 'none';
      } else {
        $el[0].style.display = '';
      }
      if (swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }
      Utils.extend(scrollbar, {
        trackSize,
        divider,
        moveDivider,
        dragSize,
      });
      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    },
    getPointerPosition(e) {
      const swiper = this;
      if (swiper.isHorizontal()) {
        return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].clientX : e.clientX);
      }
      return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].clientY : e.clientY);
    },
    setDragPosition(e) {
      const swiper = this;
      const { scrollbar, rtlTranslate: rtl } = swiper;
      const {
        $el,
        dragSize,
        trackSize,
        dragStartPos,
      } = scrollbar;
  
      let positionRatio;
      positionRatio = ((scrollbar.getPointerPosition(e)) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top']
        - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }
  
      const position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);
  
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart(e) {
      const swiper = this;
      const params = swiper.params.scrollbar;
      const { scrollbar, $wrapperEl } = swiper;
      const { $el, $dragEl } = scrollbar;
      swiper.scrollbar.isTouched = true;
      swiper.scrollbar.dragStartPos = (e.target === $dragEl[0] || e.target === $dragEl)
        ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
      e.preventDefault();
      e.stopPropagation();
  
      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);
  
      clearTimeout(swiper.scrollbar.dragTimeout);
  
      $el.transition(0);
      if (params.hide) {
        $el.css('opacity', 1);
      }
      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css('scroll-snap-type', 'none');
      }
      swiper.emit('scrollbarDragStart', e);
    },
    onDragMove(e) {
      const swiper = this;
      const { scrollbar, $wrapperEl } = swiper;
      const { $el, $dragEl } = scrollbar;
  
      if (!swiper.scrollbar.isTouched) return;
      if (e.preventDefault) e.preventDefault();
      else e.returnValue = false;
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd(e) {
      const swiper = this;
  
      const params = swiper.params.scrollbar;
      const { scrollbar, $wrapperEl } = swiper;
      const { $el } = scrollbar;
  
      if (!swiper.scrollbar.isTouched) return;
      swiper.scrollbar.isTouched = false;
      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css('scroll-snap-type', '');
        $wrapperEl.transition('');
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = Utils.nextTick(() => {
          $el.css('opacity', 0);
          $el.transition(400);
        }, 1000);
      }
      swiper.emit('scrollbarDragEnd', e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable() {
      const swiper = this;
      if (!swiper.params.scrollbar.el) return;
      const {
        scrollbar, touchEventsTouch, touchEventsDesktop, params,
      } = swiper;
      const $el = scrollbar.$el;
      const target = $el[0];
      const activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      const passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    disableDraggable() {
      const swiper = this;
      if (!swiper.params.scrollbar.el) return;
      const {
        scrollbar, touchEventsTouch, touchEventsDesktop, params,
      } = swiper;
      const $el = scrollbar.$el;
      const target = $el[0];
      const activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      const passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    init() {
      const swiper = this;
      if (!swiper.params.scrollbar.el) return;
      const { scrollbar, $el: $swiperEl } = swiper;
      const params = swiper.params.scrollbar;
  
      let $el = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(params.el);
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
        $el = $swiperEl.find(params.el);
      }
  
      let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
      if ($dragEl.length === 0) {
        $dragEl = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
        $el.append($dragEl);
      }
  
      Utils.extend(scrollbar, {
        $el,
        el: $el[0],
        $dragEl,
        dragEl: $dragEl[0],
      });
  
      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy() {
      const swiper = this;
      swiper.scrollbar.disableDraggable();
    },
  };
  
  var Scrollbar$1 = {
    name: 'scrollbar',
    params: {
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag',
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        scrollbar: {
          init: Scrollbar.init.bind(swiper),
          destroy: Scrollbar.destroy.bind(swiper),
          updateSize: Scrollbar.updateSize.bind(swiper),
          setTranslate: Scrollbar.setTranslate.bind(swiper),
          setTransition: Scrollbar.setTransition.bind(swiper),
          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
          getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
          onDragStart: Scrollbar.onDragStart.bind(swiper),
          onDragMove: Scrollbar.onDragMove.bind(swiper),
          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
          isTouched: false,
          timeout: null,
          dragTimeout: null,
        },
      });
    },
    on: {
      init() {
        const swiper = this;
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update() {
        const swiper = this;
        swiper.scrollbar.updateSize();
      },
      resize() {
        const swiper = this;
        swiper.scrollbar.updateSize();
      },
      observerUpdate() {
        const swiper = this;
        swiper.scrollbar.updateSize();
      },
      setTranslate() {
        const swiper = this;
        swiper.scrollbar.setTranslate();
      },
      setTransition(duration) {
        const swiper = this;
        swiper.scrollbar.setTransition(duration);
      },
      destroy() {
        const swiper = this;
        swiper.scrollbar.destroy();
      },
    },
  };
  
  const Parallax = {
    setTransform(el, progress) {
      const swiper = this;
      const { rtl } = swiper;
  
      const $el = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(el);
      const rtlFactor = rtl ? -1 : 1;
  
      const p = $el.attr('data-swiper-parallax') || '0';
      let x = $el.attr('data-swiper-parallax-x');
      let y = $el.attr('data-swiper-parallax-y');
      const scale = $el.attr('data-swiper-parallax-scale');
      const opacity = $el.attr('data-swiper-parallax-opacity');
  
      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }
  
      if ((x).indexOf('%') >= 0) {
        x = `${parseInt(x, 10) * progress * rtlFactor}%`;
      } else {
        x = `${x * progress * rtlFactor}px`;
      }
      if ((y).indexOf('%') >= 0) {
        y = `${parseInt(y, 10) * progress}%`;
      } else {
        y = `${y * progress}px`;
      }
  
      if (typeof opacity !== 'undefined' && opacity !== null) {
        const currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
        $el[0].style.opacity = currentOpacity;
      }
      if (typeof scale === 'undefined' || scale === null) {
        $el.transform(`translate3d(${x}, ${y}, 0px)`);
      } else {
        const currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
        $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
      }
    },
    setTranslate() {
      const swiper = this;
      const {
        $el, slides, progress, snapGrid,
      } = swiper;
      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
        .each((index, el) => {
          swiper.parallax.setTransform(el, progress);
        });
      slides.each((slideIndex, slideEl) => {
        let slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
          .each((index, el) => {
            swiper.parallax.setTransform(el, slideProgress);
          });
      });
    },
    setTransition(duration = this.params.speed) {
      const swiper = this;
      const { $el } = swiper;
      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
        .each((index, parallaxEl) => {
          const $parallaxEl = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(parallaxEl);
          let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) parallaxDuration = 0;
          $parallaxEl.transition(parallaxDuration);
        });
    },
  };
  
  var Parallax$1 = {
    name: 'parallax',
    params: {
      parallax: {
        enabled: false,
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        parallax: {
          setTransform: Parallax.setTransform.bind(swiper),
          setTranslate: Parallax.setTranslate.bind(swiper),
          setTransition: Parallax.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit() {
        const swiper = this;
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      init() {
        const swiper = this;
        if (!swiper.params.parallax.enabled) return;
        swiper.parallax.setTranslate();
      },
      setTranslate() {
        const swiper = this;
        if (!swiper.params.parallax.enabled) return;
        swiper.parallax.setTranslate();
      },
      setTransition(duration) {
        const swiper = this;
        if (!swiper.params.parallax.enabled) return;
        swiper.parallax.setTransition(duration);
      },
    },
  };
  
  const Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      const x1 = e.targetTouches[0].pageX;
      const y1 = e.targetTouches[0].pageY;
      const x2 = e.targetTouches[1].pageX;
      const y2 = e.targetTouches[1].pageY;
      const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
      return distance;
    },
    // Events
    onGestureStart(e) {
      const swiper = this;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const { gesture } = zoom;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
      if (!Support.gestures) {
        if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(e.target).closest(`.${swiper.params.slideClass}`);
        if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
        gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }
      if (gesture.$imageEl) {
        gesture.$imageEl.transition(0);
      }
      swiper.zoom.isScaling = true;
    },
    onGestureChange(e) {
      const swiper = this;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const { gesture } = zoom;
      if (!Support.gestures) {
        if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      if (Support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
      }
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = (gesture.maxRatio - 1) + (((zoom.scale - gesture.maxRatio) + 1) ** 0.5);
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = (params.minRatio + 1) - (((params.minRatio - zoom.scale) + 1) ** 0.5);
      }
      gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    },
    onGestureEnd(e) {
      const swiper = this;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const { gesture } = zoom;
      if (!Support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }
        if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
          return;
        }
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) gesture.$slideEl = undefined;
    },
    onTouchStart(e) {
      const swiper = this;
      const zoom = swiper.zoom;
      const { gesture, image } = zoom;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      if (image.isTouched) return;
      if (Device.android && e.cancelable) e.preventDefault();
      image.isTouched = true;
      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove(e) {
      const swiper = this;
      const zoom = swiper.zoom;
      const { gesture, image, velocity } = zoom;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) return;
  
      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);
        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      }
      // Define if we need image drag
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
  
      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
  
      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;
  
      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
  
      if (!image.isMoved && !zoom.isScaling) {
        if (
          swiper.isHorizontal()
          && (
            (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
            || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
          )
        ) {
          image.isTouched = false;
          return;
        } if (
          !swiper.isHorizontal()
          && (
            (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
            || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
          )
        ) {
          image.isTouched = false;
          return;
        }
      }
      if (e.cancelable) {
        e.preventDefault();
      }
      e.stopPropagation();
  
      image.isMoved = true;
      image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
      image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;
  
      if (image.currentX < image.minX) {
        image.currentX = (image.minX + 1) - (((image.minX - image.currentX) + 1) ** 0.8);
      }
      if (image.currentX > image.maxX) {
        image.currentX = (image.maxX - 1) + (((image.currentX - image.maxX) + 1) ** 0.8);
      }
  
      if (image.currentY < image.minY) {
        image.currentY = (image.minY + 1) - (((image.minY - image.currentY) + 1) ** 0.8);
      }
      if (image.currentY > image.maxY) {
        image.currentY = (image.maxY - 1) + (((image.currentY - image.maxY) + 1) ** 0.8);
      }
  
      // Velocity
      if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
      if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
      if (!velocity.prevTime) velocity.prevTime = Date.now();
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
  
      gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    },
    onTouchEnd() {
      const swiper = this;
      const zoom = swiper.zoom;
      const { gesture, image, velocity } = zoom;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      let momentumDurationX = 300;
      let momentumDurationY = 300;
      const momentumDistanceX = velocity.x * momentumDurationX;
      const newPositionX = image.currentX + momentumDistanceX;
      const momentumDistanceY = velocity.y * momentumDurationY;
      const newPositionY = image.currentY + momentumDistanceY;
  
      // Fix duration
      if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
      if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
      const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
  
      image.currentX = newPositionX;
      image.currentY = newPositionY;
  
      // Define if we need image drag
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
  
      gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    },
    onTransitionEnd() {
      const swiper = this;
      const zoom = swiper.zoom;
      const { gesture } = zoom;
      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        if (gesture.$imageEl) {
          gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
        }
        if (gesture.$imageWrapEl) {
          gesture.$imageWrapEl.transform('translate3d(0,0,0)');
        }
  
        zoom.scale = 1;
        zoom.currentScale = 1;
  
        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    // Toggle Zoom
    toggle(e) {
      const swiper = this;
      const zoom = swiper.zoom;
  
      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoom.out();
      } else {
        // Zoom In
        zoom.in(e);
      }
    },
    in(e) {
      const swiper = this;
  
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      const { gesture, image } = zoom;
  
      if (!gesture.$slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
        gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
  
      gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
  
      let touchX;
      let touchY;
      let offsetX;
      let offsetY;
      let diffX;
      let diffY;
      let translateX;
      let translateY;
      let imageWidth;
      let imageHeight;
      let scaledWidth;
      let scaledHeight;
      let translateMinX;
      let translateMinY;
      let translateMaxX;
      let translateMaxY;
      let slideWidth;
      let slideHeight;
  
      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }
  
      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left;
        offsetY = gesture.$slideEl.offset().top;
        diffX = (offsetX + (slideWidth / 2)) - touchX;
        diffY = (offsetY + (slideHeight / 2)) - touchY;
  
        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
  
        translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
        translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
  
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
  
        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }
  
        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
      gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    },
    out() {
      const swiper = this;
  
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      const { gesture } = zoom;
  
      if (!gesture.$slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
        gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
  
      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
      gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
      gesture.$slideEl = undefined;
    },
    // Attach/Detach Events
    enable() {
      const swiper = this;
      const zoom = swiper.zoom;
      if (zoom.enabled) return;
      zoom.enabled = true;
  
      const passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
      const activeListenerWithCapture = Support.passiveListener ? { passive: false, capture: true } : true;
  
      const slideSelector = `.${swiper.params.slideClass}`;
  
      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.on('gesturestart', slideSelector, zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on('gesturechange', slideSelector, zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on('gestureend', slideSelector, zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
        swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
        }
      }
  
      // Move image
      swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove, activeListenerWithCapture);
    },
    disable() {
      const swiper = this;
      const zoom = swiper.zoom;
      if (!zoom.enabled) return;
  
      swiper.zoom.enabled = false;
  
      const passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
      const activeListenerWithCapture = Support.passiveListener ? { passive: false, capture: true } : true;
  
      const slideSelector = `.${swiper.params.slideClass}`;
  
      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.off('gesturestart', slideSelector, zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off('gesturechange', slideSelector, zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off('gestureend', slideSelector, zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
        swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
        }
      }
  
      // Move image
      swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove, activeListenerWithCapture);
    },
  };
  
  var Zoom$1 = {
    name: 'zoom',
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed',
      },
    },
    create() {
      const swiper = this;
      const zoom = {
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3,
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {},
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined,
        },
      };
  
      ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach((methodName) => {
        zoom[methodName] = Zoom[methodName].bind(swiper);
      });
      Utils.extend(swiper, {
        zoom,
      });
  
      let scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get() {
          return scale;
        },
        set(value) {
          if (scale !== value) {
            const imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
            const slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
            swiper.emit('zoomChange', value, imageEl, slideEl);
          }
          scale = value;
        },
      });
    },
    on: {
      init() {
        const swiper = this;
        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy() {
        const swiper = this;
        swiper.zoom.disable();
      },
      touchStart(e) {
        const swiper = this;
        if (!swiper.zoom.enabled) return;
        swiper.zoom.onTouchStart(e);
      },
      touchEnd(e) {
        const swiper = this;
        if (!swiper.zoom.enabled) return;
        swiper.zoom.onTouchEnd(e);
      },
      doubleTap(e) {
        const swiper = this;
        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd() {
        const swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      },
      slideChange() {
        const swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
          swiper.zoom.onTransitionEnd();
        }
      },
    },
  };
  
  const Lazy = {
    loadInSlide(index, loadInDuplicate = true) {
      const swiper = this;
      const params = swiper.params.lazy;
      if (typeof index === 'undefined') return;
      if (swiper.slides.length === 0) return;
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  
      const $slideEl = isVirtual
        ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`)
        : swiper.slides.eq(index);
  
      let $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
        $images = $images.add($slideEl[0]);
      }
      if ($images.length === 0) return;
  
      $images.each((imageIndex, imageEl) => {
        const $imageEl = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(imageEl);
        $imageEl.addClass(params.loadingClass);
  
        const background = $imageEl.attr('data-background');
        const src = $imageEl.attr('data-src');
        const srcset = $imageEl.attr('data-srcset');
        const sizes = $imageEl.attr('data-sizes');
        const $pictureEl = $imageEl.parent('picture');
  
        swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, () => {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) return;
          if (background) {
            $imageEl.css('background-image', `url("${background}")`);
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }
            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }
            if ($pictureEl.length) {
              $pictureEl.children('source').each((sourceIndex, sourceEl) => {
                const $source = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(sourceEl);
  
                if ($source.attr('data-srcset')) {
                  $source.attr('srcset', $source.attr('data-srcset'));
                  $source.removeAttr('data-srcset');
                }
              });
            }
            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }
  
          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find(`.${params.preloaderClass}`).remove();
          if (swiper.params.loop && loadInDuplicate) {
            const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
              const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
              swiper.lazy.loadInSlide(originalSlide.index(), false);
            } else {
              const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
            }
          }
          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
          if (swiper.params.autoHeight) {
            swiper.updateAutoHeight();
          }
        });
  
        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    },
    load() {
      const swiper = this;
      const {
        $wrapperEl, params: swiperParams, slides, activeIndex,
      } = swiper;
      const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      const params = swiperParams.lazy;
  
      let slidesPerView = swiperParams.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }
  
      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
            return true;
          }
        } else if (slides[index]) return true;
        return false;
      }
  
      function slideIndex(slideEl) {
        if (isVirtual) {
          return (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(slideEl).attr('data-swiper-slide-index');
        }
        return (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(slideEl).index();
      }
  
      if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;
      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((elIndex, slideEl) => {
          const index = isVirtual ? (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(slideEl).attr('data-swiper-slide-index') : (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(slideEl).index();
          swiper.lazy.loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) swiper.lazy.loadInSlide(i);
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }
      if (params.loadPrevNext) {
        if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
          const amount = params.loadPrevNextAmount;
          const spv = slidesPerView;
          const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
          // Next Slides
          for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
            if (slideExist(i)) swiper.lazy.loadInSlide(i);
          }
          // Prev Slides
          for (let i = minIndex; i < activeIndex; i += 1) {
            if (slideExist(i)) swiper.lazy.loadInSlide(i);
          }
        } else {
          const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
          if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
  
          const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
          if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
        }
      }
    },
  };
  
  var Lazy$1 = {
    name: 'lazy',
    params: {
      lazy: {
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,
  
        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        lazy: {
          initialImageLoaded: false,
          load: Lazy.load.bind(swiper),
          loadInSlide: Lazy.loadInSlide.bind(swiper),
        },
      });
    },
    on: {
      beforeInit() {
        const swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init() {
        const swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
          swiper.lazy.load();
        }
      },
      scroll() {
        const swiper = this;
        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      resize() {
        const swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      scrollbarDragMove() {
        const swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart() {
        const swiper = this;
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd() {
        const swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          swiper.lazy.load();
        }
      },
      slideChange() {
        const swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.cssMode) {
          swiper.lazy.load();
        }
      },
    },
  };
  
  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
  
  const Controller = {
    LinearSpline: function LinearSpline(x, y) {
      const binarySearch = (function search() {
        let maxIndex;
        let minIndex;
        let guess;
        return (array, val) => {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }());
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.
      let i1;
      let i3;
  
      this.interpolate = function interpolate(x2) {
        if (!x2) return 0;
  
        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;
  
        // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
        return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
      };
      return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction(c) {
      const swiper = this;
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop
          ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
          : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate(setTranslate, byController) {
      const swiper = this;
      const controlled = swiper.controller.control;
      let multiplier;
      let controlledTranslate;
      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === 'slide') {
          swiper.controller.getInterpolateFunction(c);
          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out
          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }
  
        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
        }
  
        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (let i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition(duration, byController) {
      const swiper = this;
      const controlled = swiper.controller.control;
      let i;
      function setControlledTransition(c) {
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            Utils.nextTick(() => {
              c.updateAutoHeight();
            });
          }
          c.$wrapperEl.transitionEnd(() => {
            if (!controlled) return;
            if (c.params.loop && swiper.params.controller.by === 'slide') {
              c.loopFix();
            }
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    },
  };
  var Controller$1 = {
    name: 'controller',
    params: {
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide', // or 'container'
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        controller: {
          control: swiper.params.controller.control,
          getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
          setTranslate: Controller.setTranslate.bind(swiper),
          setTransition: Controller.setTransition.bind(swiper),
        },
      });
    },
    on: {
      update() {
        const swiper = this;
        if (!swiper.controller.control) return;
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize() {
        const swiper = this;
        if (!swiper.controller.control) return;
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate() {
        const swiper = this;
        if (!swiper.controller.control) return;
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate(translate, byController) {
        const swiper = this;
        if (!swiper.controller.control) return;
        swiper.controller.setTranslate(translate, byController);
      },
      setTransition(duration, byController) {
        const swiper = this;
        if (!swiper.controller.control) return;
        swiper.controller.setTransition(duration, byController);
      },
    },
  };
  
  const a11y = {
    makeElFocusable($el) {
      $el.attr('tabIndex', '0');
      return $el;
    },
    makeElNotFocusable($el) {
      $el.attr('tabIndex', '-1');
      return $el;
    },
    addElRole($el, role) {
      $el.attr('role', role);
      return $el;
    },
    addElLabel($el, label) {
      $el.attr('aria-label', label);
      return $el;
    },
    disableEl($el) {
      $el.attr('aria-disabled', true);
      return $el;
    },
    enableEl($el) {
      $el.attr('aria-disabled', false);
      return $el;
    },
    onEnterKey(e) {
      const swiper = this;
      const params = swiper.params.a11y;
      if (e.keyCode !== 13) return;
      const $targetEl = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(e.target);
      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }
      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }
      if (swiper.pagination && $targetEl.is(`.${swiper.params.pagination.bulletClass}`)) {
        $targetEl[0].click();
      }
    },
    notify(message) {
      const swiper = this;
      const notification = swiper.a11y.liveRegion;
      if (notification.length === 0) return;
      notification.html('');
      notification.html(message);
    },
    updateNavigation() {
      const swiper = this;
  
      if (swiper.params.loop || !swiper.navigation) return;
      const { $nextEl, $prevEl } = swiper.navigation;
  
      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
          swiper.a11y.makeElNotFocusable($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
          swiper.a11y.makeElFocusable($prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
          swiper.a11y.makeElNotFocusable($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
          swiper.a11y.makeElFocusable($nextEl);
        }
      }
    },
    updatePagination() {
      const swiper = this;
      const params = swiper.params.a11y;
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.bullets.each((bulletIndex, bulletEl) => {
          const $bulletEl = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
        });
      }
    },
    init() {
      const swiper = this;
  
      swiper.$el.append(swiper.a11y.liveRegion);
  
      // Navigation
      const params = swiper.params.a11y;
      let $nextEl;
      let $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        swiper.a11y.makeElFocusable($nextEl);
        swiper.a11y.addElRole($nextEl, 'button');
        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        $nextEl.on('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        swiper.a11y.makeElFocusable($prevEl);
        swiper.a11y.addElRole($prevEl, 'button');
        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        $prevEl.on('keydown', swiper.a11y.onEnterKey);
      }
  
      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.on('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
  
      let $nextEl;
      let $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        $nextEl.off('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        $prevEl.off('keydown', swiper.a11y.onEnterKey);
      }
  
      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.off('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
      }
    },
  };
  var A11y = {
    name: 'a11y',
    params: {
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        a11y: {
          liveRegion: (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`),
        },
      });
      Object.keys(a11y).forEach((methodName) => {
        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
      });
    },
    on: {
      init() {
        const swiper = this;
        if (!swiper.params.a11y.enabled) return;
        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge() {
        const swiper = this;
        if (!swiper.params.a11y.enabled) return;
        swiper.a11y.updateNavigation();
      },
      fromEdge() {
        const swiper = this;
        if (!swiper.params.a11y.enabled) return;
        swiper.a11y.updateNavigation();
      },
      paginationUpdate() {
        const swiper = this;
        if (!swiper.params.a11y.enabled) return;
        swiper.a11y.updatePagination();
      },
      destroy() {
        const swiper = this;
        if (!swiper.params.a11y.enabled) return;
        swiper.a11y.destroy();
      },
    },
  };
  
  const History = {
    init() {
      const swiper = this;
      if (!swiper.params.history) return;
      if (!ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.history || !ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      const history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues();
      if (!history.paths.key && !history.paths.value) return;
      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.addEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    destroy() {
      const swiper = this;
      if (!swiper.params.history.replaceState) {
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.removeEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState() {
      const swiper = this;
      swiper.history.paths = History.getPathValues();
      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
    },
    getPathValues() {
      const pathArray = ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.location.pathname.slice(1).split('/').filter((part) => part !== '');
      const total = pathArray.length;
      const key = pathArray[total - 2];
      const value = pathArray[total - 1];
      return { key, value };
    },
    setHistory(key, index) {
      const swiper = this;
      if (!swiper.history.initialized || !swiper.params.history.enabled) return;
      const slide = swiper.slides.eq(index);
      let value = History.slugify(slide.attr('data-history'));
      if (!ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.location.pathname.includes(key)) {
        value = `${key}/${value}`;
      }
      const currentState = ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.history.replaceState({ value }, null, value);
      } else {
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.history.pushState({ value }, null, value);
      }
    },
    slugify(text) {
      return text.toString()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    scrollToSlide(speed, value, runCallbacks) {
      const swiper = this;
      if (value) {
        for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
          const slide = swiper.slides.eq(i);
          const slideHistory = History.slugify(slide.attr('data-history'));
          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            const index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    },
  };
  
  var History$1 = {
    name: 'history',
    params: {
      history: {
        enabled: false,
        replaceState: false,
        key: 'slides',
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        history: {
          init: History.init.bind(swiper),
          setHistory: History.setHistory.bind(swiper),
          setHistoryPopState: History.setHistoryPopState.bind(swiper),
          scrollToSlide: History.scrollToSlide.bind(swiper),
          destroy: History.destroy.bind(swiper),
        },
      });
    },
    on: {
      init() {
        const swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy() {
        const swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      transitionEnd() {
        const swiper = this;
        if (swiper.history.initialized) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      },
      slideChange() {
        const swiper = this;
        if (swiper.history.initialized && swiper.params.cssMode) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      },
    },
  };
  
  const HashNavigation = {
    onHashCange() {
      const swiper = this;
      swiper.emit('hashChange');
      const newHash = ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.location.hash.replace('#', '');
      const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
      if (newHash !== activeSlideHash) {
        const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
        if (typeof newIndex === 'undefined') return;
        swiper.slideTo(newIndex);
      }
    },
    setHash() {
      const swiper = this;
      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;
      if (swiper.params.hashNavigation.replaceState && ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.history && ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.history.replaceState) {
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.window.history.replaceState(null, null, (`#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || ''));
        swiper.emit('hashSet');
      } else {
        const slide = swiper.slides.eq(swiper.activeIndex);
        const hash = slide.attr('data-hash') || slide.attr('data-history');
        ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.location.hash = hash || '';
        swiper.emit('hashSet');
      }
    },
    init() {
      const swiper = this;
      if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) return;
      swiper.hashNavigation.initialized = true;
      const hash = ssr_window__WEBPACK_IMPORTED_MODULE_1__.document.location.hash.replace('#', '');
      if (hash) {
        const speed = 0;
        for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
          const slide = swiper.slides.eq(i);
          const slideHash = slide.attr('data-hash') || slide.attr('data-history');
          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            const index = slide.index();
            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
          }
        }
      }
      if (swiper.params.hashNavigation.watchState) {
        (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(ssr_window__WEBPACK_IMPORTED_MODULE_1__.window).on('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.params.hashNavigation.watchState) {
        (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(ssr_window__WEBPACK_IMPORTED_MODULE_1__.window).off('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
  };
  var HashNavigation$1 = {
    name: 'hash-navigation',
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        hashNavigation: {
          initialized: false,
          init: HashNavigation.init.bind(swiper),
          destroy: HashNavigation.destroy.bind(swiper),
          setHash: HashNavigation.setHash.bind(swiper),
          onHashCange: HashNavigation.onHashCange.bind(swiper),
        },
      });
    },
    on: {
      init() {
        const swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy() {
        const swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      transitionEnd() {
        const swiper = this;
        if (swiper.hashNavigation.initialized) {
          swiper.hashNavigation.setHash();
        }
      },
      slideChange() {
        const swiper = this;
        if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
          swiper.hashNavigation.setHash();
        }
      },
    },
  };
  
  /* eslint no-underscore-dangle: "off" */
  
  const Autoplay = {
    run() {
      const swiper = this;
      const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      let delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr('data-swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
      }
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = Utils.nextTick(() => {
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isBeginning) {
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isEnd) {
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
        if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();
      }, delay);
    },
    start() {
      const swiper = this;
      if (typeof swiper.autoplay.timeout !== 'undefined') return false;
      if (swiper.autoplay.running) return false;
      swiper.autoplay.running = true;
      swiper.emit('autoplayStart');
      swiper.autoplay.run();
      return true;
    },
    stop() {
      const swiper = this;
      if (!swiper.autoplay.running) return false;
      if (typeof swiper.autoplay.timeout === 'undefined') return false;
  
      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }
      swiper.autoplay.running = false;
      swiper.emit('autoplayStop');
      return true;
    },
    pause(speed) {
      const swiper = this;
      if (!swiper.autoplay.running) return;
      if (swiper.autoplay.paused) return;
      if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
      }
    },
  };
  
  var Autoplay$1 = {
    name: 'autoplay',
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        autoplay: {
          running: false,
          paused: false,
          run: Autoplay.run.bind(swiper),
          start: Autoplay.start.bind(swiper),
          stop: Autoplay.stop.bind(swiper),
          pause: Autoplay.pause.bind(swiper),
          onVisibilityChange() {
            if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
              swiper.autoplay.pause();
            }
            if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
              swiper.autoplay.run();
              swiper.autoplay.paused = false;
            }
          },
          onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            swiper.autoplay.paused = false;
            if (!swiper.autoplay.running) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.run();
            }
          },
        },
      });
    },
    on: {
      init() {
        const swiper = this;
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
          document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
        }
      },
      beforeTransitionStart(speed, internal) {
        const swiper = this;
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove() {
        const swiper = this;
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      touchEnd() {
        const swiper = this;
        if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.run();
        }
      },
      destroy() {
        const swiper = this;
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
        document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
      },
    },
  };
  
  const Fade = {
    setTranslate() {
      const swiper = this;
      const { slides } = swiper;
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = swiper.slides.eq(i);
        const offset = $slideEl[0].swiperSlideOffset;
        let tx = -offset;
        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({
            opacity: slideOpacity,
          })
          .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
      }
    },
    setTransition(duration) {
      const swiper = this;
      const { slides, $wrapperEl } = swiper;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        slides.transitionEnd(() => {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (let i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };
  
  var EffectFade = {
    name: 'effect-fade',
    params: {
      fadeEffect: {
        crossFade: false,
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        fadeEffect: {
          setTranslate: Fade.setTranslate.bind(swiper),
          setTransition: Fade.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit() {
        const swiper = this;
        if (swiper.params.effect !== 'fade') return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        if (swiper.params.effect !== 'fade') return;
        swiper.fadeEffect.setTranslate();
      },
      setTransition(duration) {
        const swiper = this;
        if (swiper.params.effect !== 'fade') return;
        swiper.fadeEffect.setTransition(duration);
      },
    },
  };
  
  const Cube = {
    setTranslate() {
      const swiper = this;
      const {
        $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize,
      } = swiper;
      const params = swiper.params.cubeEffect;
      const isHorizontal = swiper.isHorizontal();
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let wrapperRotate = 0;
      let $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({ height: `${swiperWidth}px` });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        let slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }
        let slideAngle = slideIndex * 90;
        let round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        let tx = 0;
        let ty = 0;
        let tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + (round * 4 * swiperSize);
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = (3 * swiperSize) + (swiperSize * 4 * round);
        }
        if (rtl) {
          tx = -tx;
        }
  
        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }
  
        const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
        if (progress <= 1 && progress > -1) {
          wrapperRotate = (slideIndex * 90) + (progress * 90);
          if (rtl) wrapperRotate = (-slideIndex * 90) - (progress * 90);
        }
        $slideEl.transform(transform);
        if (params.slideShadows) {
          // Set shadows
          let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
          if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
        }
      }
      $wrapperEl.css({
        '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
        '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
        '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
        'transform-origin': `50% 50% -${swiperSize / 2}px`,
      });
  
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
        } else {
          const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
          const multiplier = 1.5 - (
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
            + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
          );
          const scale1 = params.shadowScale;
          const scale2 = params.shadowScale / multiplier;
          const offset = params.shadowOffset;
          $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
        }
      }
      const zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
      $wrapperEl
        .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
    },
    setTransition(duration) {
      const swiper = this;
      const { $el, slides } = swiper;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    },
  };
  
  var EffectCube = {
    name: 'effect-cube',
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        cubeEffect: {
          setTranslate: Cube.setTranslate.bind(swiper),
          setTransition: Cube.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit() {
        const swiper = this;
        if (swiper.params.effect !== 'cube') return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        if (swiper.params.effect !== 'cube') return;
        swiper.cubeEffect.setTranslate();
      },
      setTransition(duration) {
        const swiper = this;
        if (swiper.params.effect !== 'cube') return;
        swiper.cubeEffect.setTransition(duration);
      },
    },
  };
  
  const Flip = {
    setTranslate() {
      const swiper = this;
      const { slides, rtlTranslate: rtl } = swiper;
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        let progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        const offset = $slideEl[0].swiperSlideOffset;
        const rotate = -180 * progress;
        let rotateY = rotate;
        let rotateX = 0;
        let tx = -offset;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }
  
        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
  
        if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
          if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
        }
        $slideEl
          .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
      }
    },
    setTransition(duration) {
      const swiper = this;
      const { slides, activeIndex, $wrapperEl } = swiper;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        // eslint-disable-next-line
        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
          eventTriggered = true;
          swiper.animating = false;
          const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (let i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };
  
  var EffectFlip = {
    name: 'effect-flip',
    params: {
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        flipEffect: {
          setTranslate: Flip.setTranslate.bind(swiper),
          setTransition: Flip.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit() {
        const swiper = this;
        if (swiper.params.effect !== 'flip') return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        if (swiper.params.effect !== 'flip') return;
        swiper.flipEffect.setTranslate();
      },
      setTransition(duration) {
        const swiper = this;
        if (swiper.params.effect !== 'flip') return;
        swiper.flipEffect.setTransition(duration);
      },
    },
  };
  
  const Coverflow = {
    setTranslate() {
      const swiper = this;
      const {
        width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid,
      } = swiper;
      const params = swiper.params.coverflowEffect;
      const isHorizontal = swiper.isHorizontal();
      const transform = swiper.translate;
      const center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate = params.depth;
      // Each slide offset from center
      for (let i = 0, length = slides.length; i < length; i += 1) {
        const $slideEl = slides.eq(i);
        const slideSize = slidesSizesGrid[i];
        const slideOffset = $slideEl[0].swiperSlideOffset;
        const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
  
        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        let translateZ = -translate * Math.abs(offsetMultiplier);
  
        let stretch = params.stretch;
        // Allow percentage to make a relative stretch for responsive sliders
        if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
          stretch = ((parseFloat(params.stretch) / 100) * slideSize);
        }
        let translateY = isHorizontal ? 0 : stretch * (offsetMultiplier);
        let translateX = isHorizontal ? stretch * (offsetMultiplier) : 0;
  
        // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) translateX = 0;
        if (Math.abs(translateY) < 0.001) translateY = 0;
        if (Math.abs(translateZ) < 0.001) translateZ = 0;
        if (Math.abs(rotateY) < 0.001) rotateY = 0;
        if (Math.abs(rotateX) < 0.001) rotateX = 0;
  
        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
        }
      }
  
      // Set correct perspective for IE10
      if (Support.pointerEvents || Support.prefixedPointerEvents) {
        const ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = `${center}px 50%`;
      }
    },
    setTransition(duration) {
      const swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    },
  };
  
  var EffectCoverflow = {
    name: 'effect-coverflow',
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        coverflowEffect: {
          setTranslate: Coverflow.setTranslate.bind(swiper),
          setTransition: Coverflow.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit() {
        const swiper = this;
        if (swiper.params.effect !== 'coverflow') return;
  
        swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
  
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate() {
        const swiper = this;
        if (swiper.params.effect !== 'coverflow') return;
        swiper.coverflowEffect.setTranslate();
      },
      setTransition(duration) {
        const swiper = this;
        if (swiper.params.effect !== 'coverflow') return;
        swiper.coverflowEffect.setTransition(duration);
      },
    },
  };
  
  const Thumbs = {
    init() {
      const swiper = this;
      const { thumbs: thumbsParams } = swiper.params;
      const SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Utils.extend(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        Utils.extend(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
      } else if (Utils.isObject(thumbsParams.swiper)) {
        swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        }));
        swiper.thumbs.swiperCreated = true;
      }
      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    },
    onThumbClick() {
      const swiper = this;
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      const clickedIndex = thumbsSwiper.clickedIndex;
      const clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && (0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
      let slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt((0,dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__.$)(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        let currentIndex = swiper.activeIndex;
        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
          swiper.loopFix();
          // eslint-disable-next-line
          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }
        const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
        const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
        if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;
        else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;
        else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
        else slideToIndex = prevIndex;
      }
      swiper.slideTo(slideToIndex);
    },
    update(initial) {
      const swiper = this;
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
  
      const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
        ? thumbsSwiper.slidesPerViewDynamic()
        : thumbsSwiper.params.slidesPerView;
  
      const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
      const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
      if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
        let currentThumbsIndex = thumbsSwiper.activeIndex;
        let newThumbsIndex;
        let direction;
        if (thumbsSwiper.params.loop) {
          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
            thumbsSwiper.loopFix();
            // eslint-disable-next-line
            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          }
          // Find actual thumbs index to slide to
          const prevThumbsIndex = thumbsSwiper.slides
            .eq(currentThumbsIndex)
            .prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0)
            .index();
          const nextThumbsIndex = thumbsSwiper.slides
            .eq(currentThumbsIndex)
            .nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0)
            .index();
          if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;
          else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;
          else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;
          else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
          else newThumbsIndex = prevThumbsIndex;
          direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
        } else {
          newThumbsIndex = swiper.realIndex;
          direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
        }
        if (useOffset) {
          newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
        }
  
        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }
  
      // Activate thumbs
      let thumbsToActivate = 1;
      const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
  
      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }
  
      if (!swiper.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }
  
      thumbsToActivate = Math.floor(thumbsToActivate);
  
      thumbsSwiper.slides.removeClass(thumbActiveClass);
      if (thumbsSwiper.params.loop || (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)) {
        for (let i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
        }
      } else {
        for (let i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
        }
      }
    },
  };
  var Thumbs$1 = {
    name: 'thumbs',
    params: {
      thumbs: {
        swiper: null,
        multipleActiveThumbs: true,
        autoScrollOffset: 0,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-container-thumbs',
      },
    },
    create() {
      const swiper = this;
      Utils.extend(swiper, {
        thumbs: {
          swiper: null,
          init: Thumbs.init.bind(swiper),
          update: Thumbs.update.bind(swiper),
          onThumbClick: Thumbs.onThumbClick.bind(swiper),
        },
      });
    },
    on: {
      beforeInit() {
        const swiper = this;
        const { thumbs } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        swiper.thumbs.init();
        swiper.thumbs.update(true);
      },
      slideChange() {
        const swiper = this;
        if (!swiper.thumbs.swiper) return;
        swiper.thumbs.update();
      },
      update() {
        const swiper = this;
        if (!swiper.thumbs.swiper) return;
        swiper.thumbs.update();
      },
      resize() {
        const swiper = this;
        if (!swiper.thumbs.swiper) return;
        swiper.thumbs.update();
      },
      observerUpdate() {
        const swiper = this;
        if (!swiper.thumbs.swiper) return;
        swiper.thumbs.update();
      },
      setTransition(duration) {
        const swiper = this;
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        thumbsSwiper.setTransition(duration);
      },
      beforeDestroy() {
        const swiper = this;
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      },
    },
  };
  
  // Swiper Class
  
  const components = [
    Device$1,
    Support$1,
    Browser$1,
    Resize,
    Observer$1,
    Virtual$1,
    Keyboard$1,
    Mousewheel$1,
    Navigation$1,
    Pagination$1,
    Scrollbar$1,
    Parallax$1,
    Zoom$1,
    Lazy$1,
    Controller$1,
    A11y,
    History$1,
    HashNavigation$1,
    Autoplay$1,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    Thumbs$1
  ];
  
  if (typeof Swiper.use === 'undefined') {
    Swiper.use = Swiper.Class.use;
    Swiper.installModule = Swiper.Class.installModule;
  }
  
  Swiper.use(components);
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swiper);
  //# sourceMappingURL=swiper.esm.bundle.js.map
  
  
  /***/ }),
  
  /***/ "../../resources/dev/js/utils/aria.js":
  /*!********************************************!*\
    !*** ../../resources/dev/js/utils/aria.js ***!
    \********************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "KeyCode": () => (/* binding */ KeyCode)
  /* harmony export */ });
  const KeyCode = {
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
  
  /***/ "../../resources/dev/js/utils/browserDetection.js":
  /*!********************************************************!*\
    !*** ../../resources/dev/js/utils/browserDetection.js ***!
    \********************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "breakpoints": () => (/* binding */ breakpoints),
  /* harmony export */   "getDeviceOrientation": () => (/* binding */ getDeviceOrientation),
  /* harmony export */   "getBreakpointSize": () => (/* binding */ getBreakpointSize),
  /* harmony export */   "isBreakpointSmall": () => (/* binding */ isBreakpointSmall),
  /* harmony export */   "isBreakpointMedium": () => (/* binding */ isBreakpointMedium),
  /* harmony export */   "isMobileDevice": () => (/* binding */ isMobileDevice),
  /* harmony export */   "isNotMobileDevice": () => (/* binding */ isNotMobileDevice),
  /* harmony export */   "isTabletDevice": () => (/* binding */ isTabletDevice),
  /* harmony export */   "isIOS": () => (/* binding */ isIOS),
  /* harmony export */   "isNotIOS": () => (/* binding */ isNotIOS),
  /* harmony export */   "isWindowsPhone": () => (/* binding */ isWindowsPhone),
  /* harmony export */   "getAndroidVersion": () => (/* binding */ getAndroidVersion),
  /* harmony export */   "getBrowserUserAgent": () => (/* binding */ getBrowserUserAgent),
  /* harmony export */   "detectBrowsers": () => (/* binding */ detectBrowsers),
  /* harmony export */   "isIe": () => (/* binding */ isIe),
  /* harmony export */   "isMsEdge": () => (/* binding */ isMsEdge),
  /* harmony export */   "isIe11": () => (/* binding */ isIe11),
  /* harmony export */   "getViewportSize": () => (/* binding */ getViewportSize),
  /* harmony export */   "scrollToElement": () => (/* binding */ scrollToElement),
  /* harmony export */   "hasBigIntSupport": () => (/* binding */ hasBigIntSupport)
  /* harmony export */ });
  const breakpoints = {
    small: 740,
    medium: 900,
    wider: 1000,
    current: null
  };
  
  const getDeviceOrientation = () => {
    const $window = $(window);
    return $window.width() > $window.height() ? 'landscape' : 'portrait';
  };
  
  const getLargerBreakpoint = width => (
    width <= breakpoints.medium ? 'medium' : 'large'
  );
  
  const getBreakpointSize = (oldCalc = true) => {
    const width = oldCalc ? $(window).width() : window.innerWidth;
    return (width <= breakpoints.small) ? 'small' : getLargerBreakpoint(width);
  };
  
  const isBreakpointSmall = (oldCalc = true) => {
    return getBreakpointSize(oldCalc) === 'small';
  };
  
  const isBreakpointMedium = (oldCalc = true) => {
    return getBreakpointSize(oldCalc) === 'medium';
  };
  
  const isMobileDevice = () => {
    return (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch || navigator.msMaxTouchPoints); // eslint-disable-line
  };
  
  const isNotMobileDevice = () => {
    return !isMobileDevice();
  };
  
  const isTabletDevice = () => {
    return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(navigator.userAgent.toLowerCase());
  };
  
  const isIOS = () => {
    return (/(ipad|iphone|ipod)/i.test(navigator.userAgent.toLowerCase()));
  };
  
  const isNotIOS = () => {
    return !isIOS();
  };
  
  const isWindowsPhone = () => {
    return (navigator.userAgent.toLowerCase().indexOf('windows phone') !== -1);
  };
  
  const getAndroidVersion = () => {
    const ua = navigator.userAgent;
  
    if (ua.indexOf('Android') >= 0) {
      return parseFloat(ua.slice(ua.indexOf('Android') + 8));
    }
  
    return false;
  };
  
  const getBrowserUserAgent = () => {
    const { userAgent } = navigator;
    return userAgent;
  };
  
  const detectBrowsers = () => {
    const userAgent = getBrowserUserAgent();
    const browsers = {
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
  
  const isIe = () => {
    return document.querySelector('html').classList.contains('ie');
  };
  
  const isMsEdge = () => {
    return detectBrowsers().isMsEdge;
  };
  
  const isIe11 = () => {
    return (!window.ActiveXObject && 'ActiveXObject' in window);
  };
  
  const getViewportSize = () => {
    const test = document.createElement('div');
  
    test.style.cssText = 'position: fixed;top: 0;left: 0;bottom: 0;right: 0;';
    document.documentElement.insertBefore(test, document.documentElement.firstChild);
  
    const dims = { width: test.offsetWidth, height: test.offsetHeight };
    document.documentElement.removeChild(test);
  
    return dims;
  };
  
  const scrollToElement = (element, options, callback) => {
    const $element = element instanceof jQuery ? element : $(element);
  
    // Options are optional
    let opts = options || {};
  
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
    }, opts.duration, opts.ease, () => {
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
  const hasBigIntSupport = () => {
    return (typeof BigInt === 'function');
  };
  
  
  /***/ }),
  
  /***/ "../../resources/dev/js/utils/index.js":
  /*!*********************************************!*\
    !*** ../../resources/dev/js/utils/index.js ***!
    \*********************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "stickyNavigationEnabled": () => (/* binding */ stickyNavigationEnabled),
  /* harmony export */   "stickyNavigationTransitionPoint": () => (/* binding */ stickyNavigationTransitionPoint),
  /* harmony export */   "googleMapStyles": () => (/* binding */ googleMapStyles),
  /* harmony export */   "isRtl": () => (/* binding */ isRtl),
  /* harmony export */   "getCachedScript": () => (/* binding */ getCachedScript),
  /* harmony export */   "getHeight": () => (/* binding */ getHeight),
  /* harmony export */   "getStickyNavHeight": () => (/* binding */ getStickyNavHeight),
  /* harmony export */   "getStickyNavHeightV2": () => (/* binding */ getStickyNavHeightV2),
  /* harmony export */   "scrollTo": () => (/* binding */ scrollTo),
  /* harmony export */   "checkDeepLink": () => (/* binding */ checkDeepLink),
  /* harmony export */   "isPageInIframe": () => (/* binding */ isPageInIframe),
  /* harmony export */   "insideTabbedContainer": () => (/* binding */ insideTabbedContainer),
  /* harmony export */   "mobileAccordionsActivated": () => (/* binding */ mobileAccordionsActivated),
  /* harmony export */   "removeHTMLTags": () => (/* binding */ removeHTMLTags),
  /* harmony export */   "getUrlParameter": () => (/* binding */ getUrlParameter),
  /* harmony export */   "addParameterToURL": () => (/* binding */ addParameterToURL),
  /* harmony export */   "getObjectKeys": () => (/* binding */ getObjectKeys),
  /* harmony export */   "canvasDrawBgCover": () => (/* binding */ canvasDrawBgCover),
  /* harmony export */   "hasPlaceholderSupport": () => (/* binding */ hasPlaceholderSupport),
  /* harmony export */   "isPageInXPMFrame": () => (/* binding */ isPageInXPMFrame),
  /* harmony export */   "elementInViewport": () => (/* binding */ elementInViewport),
  /* harmony export */   "getRandomString": () => (/* binding */ getRandomString),
  /* harmony export */   "getEasingValue": () => (/* binding */ getEasingValue),
  /* harmony export */   "disableScroll": () => (/* binding */ disableScroll),
  /* harmony export */   "enableScroll": () => (/* binding */ enableScroll),
  /* harmony export */   "limitNumber": () => (/* binding */ limitNumber),
  /* harmony export */   "loadIgnoredResponsiveImages": () => (/* binding */ loadIgnoredResponsiveImages),
  /* harmony export */   "throttle": () => (/* binding */ throttle),
  /* harmony export */   "measureTextWidth": () => (/* binding */ measureTextWidth),
  /* harmony export */   "getTransitionEndEvent": () => (/* binding */ getTransitionEndEvent),
  /* harmony export */   "template": () => (/* binding */ template),
  /* harmony export */   "isInViewport": () => (/* binding */ isInViewport),
  /* harmony export */   "scrollIfNotInViewport": () => (/* binding */ scrollIfNotInViewport),
  /* harmony export */   "isLandRover": () => (/* binding */ isLandRover),
  /* harmony export */   "getTabbable": () => (/* binding */ getTabbable),
  /* harmony export */   "lockTabbables": () => (/* binding */ lockTabbables),
  /* harmony export */   "balanceElementHeight": () => (/* binding */ balanceElementHeight),
  /* harmony export */   "eventTrigger": () => (/* binding */ eventTrigger),
  /* harmony export */   "convertElementCollectionToArray": () => (/* binding */ convertElementCollectionToArray),
  /* harmony export */   "randomiseElements": () => (/* binding */ randomiseElements),
  /* harmony export */   "isElementVerticallyScrollable": () => (/* binding */ isElementVerticallyScrollable),
  /* harmony export */   "checkDefined": () => (/* binding */ checkDefined),
  /* harmony export */   "tablistNavigation": () => (/* binding */ tablistNavigation),
  /* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
  /* harmony export */   "replaceAll": () => (/* binding */ replaceAll),
  /* harmony export */   "dxSetTimeout": () => (/* binding */ dxSetTimeout),
  /* harmony export */   "DxRequestNextAnimationFrame": () => (/* binding */ DxRequestNextAnimationFrame),
  /* harmony export */   "addDxLoadingSpinner": () => (/* binding */ addDxLoadingSpinner),
  /* harmony export */   "removeDxLoadingSpinner": () => (/* binding */ removeDxLoadingSpinner),
  /* harmony export */   "addDxElementLoadingSpinner": () => (/* binding */ addDxElementLoadingSpinner),
  /* harmony export */   "localStorageAvailable": () => (/* binding */ localStorageAvailable),
  /* harmony export */   "addScriptForBazaarVoice": () => (/* binding */ addScriptForBazaarVoice),
  /* harmony export */   "equaliseHeights": () => (/* binding */ equaliseHeights),
  /* harmony export */   "generateCurrentDate": () => (/* binding */ generateCurrentDate),
  /* harmony export */   "preventActionOnDeepLink": () => (/* binding */ preventActionOnDeepLink)
  /* harmony export */ });
  /* harmony import */ var _browserDetection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browserDetection */ "../../resources/dev/js/utils/browserDetection.js");
  /* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aria */ "../../resources/dev/js/utils/aria.js");
  /* global appReadyTimer */
  
  
  
  
  const $navHeader = $('#header, .dxnav-header');
  const stickyNavigationEnabled = $navHeader.attr('data-nav-type') === 'sticky';
  const stickyNavigationTransitionPoint = 200;
  const templateCache = {};
  
  const googleMapStyles = [
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#666666'
      }]
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#f8f6f4'
      }]
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{
        visibility: 'off'
      }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#afaba4'
      }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{
        color: '#e6e6e6'
      }]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels',
      stylers: [{
        saturation: -15
      }]
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#afaba4'
      }]
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'labels.icon',
      stylers: [{
        saturation: -100
      }]
    },
    {
      featureType: 'road.local',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#ffffff'
      }]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.icon',
      stylers: [{
        saturation: '77'
      }]
    },
    {
      featureType: 'transit',
      elementType: 'labels.icon',
      stylers: [{
        saturation: '-100'
      }]
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#c5d7de'
        },
        {
          lightness: -9
        }
      ]
    }
  ];
  
  const isRtl = () => {
    const html = document.getElementsByTagName('html')[0];
    return html.classList.contains('rtl');
  };
  
  const getCachedScript = (url, options) => {
    const newOptions = $.extend(options || {}, {
      dataType: 'script',
      cache: true,
      url
    });
  
    return $.ajax(newOptions);
  };
  
  const getHeight = (elem) => {
    return (elem ? elem.clientHeight : 0);
  };
  
  // make sure to pass 'oldCalculation = false' to use the new refined calculation
  // or use getStickyNavHeightV2()
  const getStickyNavHeight = (yPos, oldCalculation = true) => {
    const yPosition = typeof yPos !== 'number' ? 0 : yPos;
    const sharedHeader = $('.dxnav-header');
    const $header = sharedHeader.length ? sharedHeader : $('#header');
    const $inPageNav = $('.InPageNavigation');
    const $inPageNavSticky = $('.InPageNavigation--sticky');
    const $inPageNavBar = $('.InPageNavigation__bar');
    const dxNavPrimary = document.querySelector('.dxnav__primary');
    const breakpoint = (0,_browserDetection__WEBPACK_IMPORTED_MODULE_0__.getBreakpointSize)();
    const checkStickyNav = $header.length > 0 ? $header.css('position') === 'fixed' : false;
    const inPageNavTop = $inPageNav.length > 0 ? $inPageNav.offset().top : null;
    const isStickyNav = sharedHeader.length ? true : checkStickyNav;
    let height = 0;
  
    if (!isStickyNav) {
      return height;
    }
  
    // hard coding values here to prevent having to repeatedly clone and measure the header
    const oldNavBreakpoint = 960;
  
    // added $inPageNav.css('display') check for LRA-10851
    if (inPageNavTop !== null && yPosition >= inPageNavTop && breakpoint === 'large' && $inPageNav.css('display') !== 'none') {
      return $inPageNav.outerHeight();
    }
  
    const windowWidth = window.innerWidth;
  
    // this is the old navigation, only shown when NaaS is down, hard coding values to prevent having to clone/measure the DOM elements for performance reasons
    const getNavigationHeight = () => {
      if (windowWidth >= oldNavBreakpoint && yPosition < 200) {
        return 106;
      }
      return 50;
    };
  
    const getNaaSHeight = (old) => {
      let primaryNavHeight;
  
      if (old) {
        primaryNavHeight = getHeight(dxNavPrimary);
      } else {
        primaryNavHeight = (document.querySelector('.dxnav-scrollDown') === null && !$inPageNavSticky.length) ? getHeight(dxNavPrimary) + parseInt(sharedHeader.css('top'), 10) : 0;
      }
  
      let breadcrumbNavHeight = getHeight(document.querySelector('.dxnav__breadcrumbs-container'));
      const notificationHeight = getHeight(document.querySelector('.notificationBarsWrapper'));
      let inPageNavigationHeight = 0;
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
  const getStickyNavHeightV2 = (yPos) => {
    return getStickyNavHeight(yPos, false);
  };
  
  
  const scrollTo = (target, duration, callback, easing, ignoreStickyNav, yOffset = 0) => {
    const newDuration = (typeof duration !== 'number') ? 800 : duration;
    const newCallback = (typeof callback !== 'function') ? null : callback;
    const newEasing = (typeof easing !== 'string') ? 'easeOutSine' : easing;
    let position = 0;
  
    if (typeof target === 'number') { // Px value
      position = target;
    } else { // Element
      const $targetEl = target || $('body');
      position = $targetEl.offset().top;
    }
  
    if (ignoreStickyNav !== true) {
      position -= getStickyNavHeight(position);
    }
  
    $('html, body').stop().animate(
      { scrollTop: position + yOffset },
      newDuration,
      newEasing
    )
      .promise()
      .done(newCallback);
  };
  
  const checkDeepLink = (href) => {
    let deepLink = false;
    const speed = 2.5;
  
    const hashPos = href.indexOf('#');
    if (hashPos + 1 < href.length && hashPos !== -1) {
      const id = href.substring(hashPos, href.length);
      if ($(id).length === 1) {
        let location = $(id);
        let duration = location.offset().top / speed;
  
        // LRA-13794 | AccordionContainer | Open accordion first if deeplink is inside
        if ($('head [name="accordionOnMobile"]').length && (0,_browserDetection__WEBPACK_IMPORTED_MODULE_0__.isBreakpointSmall)()) {
          const accordionParent = location.closest('.accordion-group');
          const accordionTitle = accordionParent.find('.accordion-group-title');
  
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
          const $container = location.closest('.TabbedContainer');
          const $tabs = $container.find('.tab');
          const $tabLinks = $container.find('.tab-link');
          let tabIndex = 0;
  
          $tabs.each((i, el) => {
            const $location = $(el).find(location);
            if ($location.length) {
              tabIndex = i;
            }
          });
  
          $tabLinks.each((i, el) => {
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
          const accordionParent = location.parents('.AccordionContainer');
          const element = $(location);
  
          if (accordionParent.length) {
            const accordionHeader = accordionParent.find('.header');
  
            if (!accordionHeader.hasClass('accordion-open')) {
              accordionHeader.click();
            }
  
            if (accordionHeader.is(':visible')) {
              if (!location.is(':visible')) {
                element.css('display', 'block');
                location = location.offset().top
                  - accordionHeader.outerHeight();
                element.css('display', '');
              } else {
                location = location.offset().top
                  - accordionHeader.outerHeight();
              }
            }
          }
        }
  
        scrollTo(location, duration, null, 'easeStartFastEndSlow');
        deepLink = true;
      } else {
        // eslint-disable-next-line no-console
        console.error(`Could not find deep link element with id: ${id}`);
      }
    }
    return deepLink; // eslint-disable-line
  };
  
  const isPageInIframe = () => {
    return window.self !== window.top;
  };
  
  const insideTabbedContainer = (el) => {
    const isInsideTabbedContainer = !!el.parents('.TabbedContainer').not('[data-total="1"]').length;
  
    if (isInsideTabbedContainer) {
      return el.parents('.TabbedContainer');
    }
  
    return false;
  };
  
  const mobileAccordionsActivated = () => {
    return $('head [name="accordionOnMobile"]').length;
  };
  
  const removeHTMLTags = (s) => {
    return s.toString().replace(/[<>=;]/g, '');
  };
  
  const getUrlParameter = (sParam) => {
    function decode(s) {
      return decodeURIComponent((s || '').replace(/\+/g, ' '));
    }
  
    const sPageURL = window.location.search.substring(1);
    const sURLVariables = sPageURL.split('&');
  
    for (let i = 0; i < sURLVariables.length; i += 1) {
      const sParameterSplit = sURLVariables[i].split('=');
      if (decode(sParameterSplit[0]) === sParam) {
        return decode(sParameterSplit[1]);
      }
    }
  
    return null;
  };
  
  const addParameterToURL = (url, param) => {
    const newUrl = url + (url.split('?')[1] ? '&' : '?') + param;
  
    return param !== '' ? newUrl : url;
  };
  
  const getObjectKeys = (obj) => {
    const keys = [];
    for (let i in obj) { //eslint-disable-line
      if (obj.hasOwnProperty(i)) { // eslint-disable-line
        keys.push(i);
      }
    }
    return keys;
  };
  
  /* eslint-disable */
  const canvasDrawBgCover = (ctx, img, x, y, w, h, offsetX, offsetY) => {
    if (arguments.length === 2) {
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
      nw = iw * r,   // new prop. width
      nh = ih * r,   // new prop. height
      cx, cy, cw, ch, ar = 1;
  
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
  
  const hasPlaceholderSupport = () => {
    const el = document.createElement('input');
    return ('placeholder' in el);
  };
  
  const isPageInXPMFrame = () => {
    return typeof window.Tridion !== 'undefined' && typeof window.Tridion.Web.UI.SiteEdit !== 'undefined';
  };
  
  const elementInViewport = (element, adjust, windowInnerHeight) => {
    const $element = element instanceof jQuery ? element : $(element);
  
    if (!$element.length) {
      return false;
    }
  
    const $window = $(window);
    const scrollTop = $window.scrollTop();
    let windowHeight = $window.height();
    let adjustTop;
    let adjustBottom;
  
    // Element specifics
    const elOffset = $element.offset();
    const elTop = elOffset.top;
    const elBottom = elTop + $element.height();
  
    // Default value
    const defaultAdjust = ((0,_browserDetection__WEBPACK_IMPORTED_MODULE_0__.getBreakpointSize)() === 'small') ? 20 : 50;
  
    // LRA-11494 Fix iOS issue with window height.
    // Temporarily add option to allow this so QA is not
    // required on StoryGallery + StoryArticleEnhancedImageBlock
    if (typeof windowInnerHeight !== 'undefined' && windowInnerHeight) {
      windowHeight = window.innerHeight ? window.innerHeight : windowHeight;
    }
  
    // Set viewportBottom
    const viewportBottom = scrollTop + windowHeight;
  
    // Allow adjust to be set different from top/bottom
    if (typeof adjust === 'object') {
      adjustTop = adjust.top;
      adjustBottom = adjust.bottom;
    } else {
      adjustTop = adjust || defaultAdjust;
      adjustBottom = adjust || defaultAdjust;
    }
  
    return (!(viewportBottom < elTop + adjustTop || scrollTop > elBottom - adjustBottom));
  };
  
  const getRandomString = (length) => {
    let formattedLength = parseInt(length, 10) || 0;
    formattedLength = formattedLength < 0 ? 0 : formattedLength;
  
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const chosen = [];
  
    for (let i = 0; i < formattedLength; i += 1) {
      chosen.push(chars.charAt(Math.floor(Math.random() * chars.length)));
    }
  
    return chosen.join('');
  };
  
  const getEasingValue = (ratio) => {
    let formattedRatio = ratio < 0 ? 0 : ratio;
    formattedRatio = formattedRatio > 1 ? 1 : formattedRatio;
  
    // Convert the ratio to a number of radians. 0 maps to -PI, 0.5 maps to
    // 0, 1 maps to PI
    const radians = (formattedRatio * (2 * Math.PI)) - Math.PI;
  
    // Convert this to a value using a cosine curve. Note that cosine gives
    // a value between -1 and 1, so we need to add 1 and divide by 2 to
    // keep it between 0 and 1
    return (Math.cos(radians) + 1) / 2;
  };
  
  const disableScroll = () => {
    const $window = $(window);
    const scrollTop = $window.scrollTop();
  
    $window.on(
      'scroll.disableScroll mousewheel.disableScroll DOMMouseScroll.disableScroll touchmove.disableScroll',
      (event) => {
        event.preventDefault();
        $window.scrollTop(scrollTop);
      }
    );
  };
  
  const enableScroll = () => {
    const $window = $(window);
  
    $window.off('scroll.disableScroll mousewheel.disableScroll DOMMouseScroll.disableScroll touchmove.disableScroll');
  };
  
  const limitNumber = (value, min, max) => {
    if (min > max) {
      const oldMin = min;
      min = max; // eslint-disable-line
      max = oldMin; // eslint-disable-line
    }
  
    return Math.max(min, Math.min(max, value));
  };
  
  const loadIgnoredResponsiveImages = ($images) => {
    $images.removeAttr('data-picture-ignore');
    window.richsponsiveImage();
  };
  
  const throttle = (fn, threshhold, scope) => {
    const thresh = threshhold || 250;
    let last;
    let deferTimer;
  
    return () => {
      const context = scope || undefined;
  
      const now = +new Date();
      const args = arguments;
      if (last && now < last + thresh) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(() => {
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
  const measureTextWidth = (text, parent) => {
    if (!text) {
      return 0;
    }
  
    const par = parent || document.body;
    const container = document.createElement('div');
  
    container.style.position = 'absolute';
    container.style.visibility = 'hidden';
    container.style.height = 'auto';
    container.style.width = 'auto';
    container.style.padding = '0';
    container.style.whiteSpace = 'nowrap';
    container.innerHTML = text;
  
    par.appendChild(container);
    const width = container.clientWidth;
    par.removeChild(container);
  
    return width;
  };
  
  const getTransitionEndEvent = () => {
    const el = document.createElement('fakeelement');
    const transitions = {
      transition: 'transitionend',
      OTransition: ' oTransitionEnd',
      MozTransition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd'
    };
  
    for (const transition in transitions) { // eslint-disable-line
      if (el.style[transition] !== undefined) {
        return transitions[transition];
      }
    }
  
    return false;
  };
  
  /* eslint-disable */
  const template = (str, data) => {
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      templateCache[str] = templateCache[str] ||
      template(document.getElementById(str).innerHTML) :
  
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
  
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
  
        // Convert the template into pure JavaScript
        str.replace(/[\r\t\n]/g, " ")
          .replace(/'(?=[^%]*%>)/g, "\t")
          .split("'").join("\\'")
          .split("\t").join("'")
          .replace(/<%=(.+?)%>/g, "',$1,'")
          .split("<%").join("');")
          .split("%>").join("p.push('")
        + "');}return p.join('');");
  
    // Provide some basic currying to the user
    return data ? fn(data) : fn;
  };
  /* eslint-enable */
  
  const isInViewport = (element) => {
    const win = $(window);
  
    const viewport = {
      top: win.scrollTop() + getStickyNavHeight(),
      bottom: win.scrollTop() + win.height(),
      left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
  
    const bounds = element.offset();
    bounds.right = bounds.left + element.outerWidth();
    bounds.bottom = bounds.top + element.outerHeight();
  
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
  };
  
  const scrollIfNotInViewport = (element, displayToBottom) => {
    if (!isInViewport(element)) {
      // Not in view
      const scrollToPos = displayToBottom ? element.offset().top - $(window).innerHeight() : (element.offset().top
        - getStickyNavHeight());
      $('html,body').animate({ scrollTop: scrollToPos }, 800);
      return true;
    }
    return false;
  };
  
  const isLandRover = () => {
    return !!($('body#landrover').length);
  };
  
  const getTabbable = (elem, customSelectors) => {
    const defaultSelectors = [
      'input:not([disabled]):not([hidden])',
      'select',
      'a[href]',
      'textarea',
      'button',
      '[tabindex]:not([tabindex^="-"])'
    ];
  
    const selectorTypes = (customSelectors) ? defaultSelectors.concat(customSelectors) : defaultSelectors;
    let selectors = elem.querySelectorAll(selectorTypes.join(','));
    selectors = Array.from(selectors);
    selectors = selectors.filter((selector) => {
      let tabbable = true;
      if (!selector.offsetParent || selector.offsetWidth === 0
        || selector.offsetHeight === 0) {
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
  
  const lockTabbables = (tabbables) => {
    tabbables.forEach((el, i) => {
      el.addEventListener('keydown', (e) => {
        if (e.keyCode !== _aria__WEBPACK_IMPORTED_MODULE_1__.KeyCode.TAB) {
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
  
  const balanceElementHeight = (elements, allowedOffset = 0) => {
    const columns = {};
    if (!elements) {
      return columns;
    }
    const elementsArray = [].slice.call(elements);
    let heightTotal = 0;
    const heightsArray = elementsArray.map((element) => {
      const elementHeight = element.getBoundingClientRect().height;
      heightTotal += elementHeight;
      return elementHeight;
    });
    const getBalancedIndex = (array, target, runningTotal = 0, index = 0) => {
      const isRecursive = !!array[index] && runningTotal + array[index] <= (target - allowedOffset);
      return isRecursive ? getBalancedIndex(array, target, runningTotal + array[index], index + 1) : index;
    };
    const splitIndex = getBalancedIndex(heightsArray, heightTotal / 2) + 1;
    columns.columns1 = elementsArray.slice(0, splitIndex);
    columns.columns2 = elementsArray.slice(splitIndex, elementsArray.length);
    columns.heightsArray = heightsArray;
    return columns;
  };
  
  const eventTrigger = (elem, eventType, detail = {}, bubbles = false) => {
    const event = new CustomEvent(eventType, { detail, bubbles });
    elem.dispatchEvent(event);
  };
  
  const convertElementCollectionToArray = (collection) => {
    if (collection instanceof NodeList || collection instanceof jQuery) {
      return collection instanceof NodeList ? [].slice.call(collection) : collection.get();
    }
    return false;
  };
  
  const randomiseElements = (elementsCollection) => {
    const elements = convertElementCollectionToArray(elementsCollection);
    if (!elements || !elements.length) return;
    const clonedElements = elements.map(element => element.cloneNode(true));
    clonedElements.sort(() => Math.random() - 0.5);
    elements.forEach((element, inc) => element.parentNode.replaceChild(clonedElements[inc], element));
  };
  
  const isElementVerticallyScrollable = (el) => {
    return (el && (el.scrollHeight > el.offsetHeight));
  };
  
  const checkDefined = item => item !== undefined && item !== null;
  
  const tablistNavigation = (tablist) => {
    const orientation = tablist.getAttribute('aria-orientation');
    const isVertical = orientation && orientation === 'vertical';
    const tabs = tablist.querySelectorAll('[role="tab"]');
    const keys = _aria__WEBPACK_IMPORTED_MODULE_1__.KeyCode;
  
    const focusFirstTab = () => tabs[0].focus();
    const focusLastTab = () => tabs[tabs.length - 1].focus();
  
    const focusPreviousTab = (currentTab) => {
      const tabIndex = [...tabs].findIndex(element => element === currentTab);
      if (tabIndex === 0) {
        focusLastTab();
      } else {
        tabs[tabIndex - 1].focus();
      }
    };
  
    const focusNextTab = (currentTab) => {
      const tabIndex = [...tabs].findIndex(element => element === currentTab);
      const tabsLengthZeroIndex = tabs.length - 1;
      if (tabIndex === tabsLengthZeroIndex) {
        focusFirstTab();
      } else {
        tabs[tabIndex + 1].focus();
      }
    };
  
    const handleTablistKeydownEvents = (event) => {
      const key = event.keyCode;
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
  
    const handleTablistKeyupEvents = (event) => {
      const key = event.keyCode;
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
  
    tabs.forEach((tab) => {
      tab.addEventListener('keydown', handleTablistKeydownEvents, false);
      if (!isVertical) {
        tab.addEventListener('keyup', handleTablistKeyupEvents, false);
      }
    });
  };
  
  const isEmpty = (obj) => {
    for (const key in obj) { // eslint-disable-line
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  };
  
  const replaceAll = (string, search, replacement) => {
    return string.split(search).join(replacement);
  };
  
  const dxSetTimeout = (cb, time) => {
    setTimeout(cb, time);
  
    if (window.appReadyEvent.initiated) {
      appReadyTimer.add(time);
    } else {
      window.appReadyEvent.timeout += time;
    }
  };
  
  const DxRequestNextAnimationFrame = (cb) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(cb());
    });
  };
  
  const loadingSpinnerToggleButtonStateAndContent = (target) => {
    const targetElement = target;
  
    if (target.tagName === 'BUTTON') {
      targetElement.disabled = true;
    }
    targetElement.classList.add('loading');
  
    const { children } = targetElement;
    [...children].forEach((child) => {
      const element = child;
      element.style.opacity = 0;
    });
  };
  
  /**
   * addDxLoadingSpinner
   * @param {HTMLElement} target The button/link that the loading spinner should be inserted into
   */
  const addDxLoadingSpinner = (target) => {
    if (!target) {
      return;
    }
  
    const iconMarkup = '<div class="DxLoading" aria-hidden="true"><div class="DxLoading__icon" aria-expanded="true"></div></div>';
    const loadingIcon = document.createRange().createContextualFragment(iconMarkup);
  
    loadingSpinnerToggleButtonStateAndContent(target);
  
    target.appendChild(loadingIcon);
  };
  
  /**
   * removeDxLoadingSpinner
   * @param {HTMLElement} target The button/link that the loading spinner should be removed from
   * @param {string || HTMLElement} replace The string you would like to replace the loading spinner with (expected to be the text originally in the button)
   */
  const removeDxLoadingSpinner = (target) => {
    const targetElement = target;
  
    if (target.tagName === 'BUTTON') {
      targetElement.disabled = false;
    }
    targetElement.classList.remove('loading');
  
    const loadingIcon = targetElement.querySelector('.DxLoading');
    targetElement.removeChild(loadingIcon);
  
    const { children } = targetElement;
    [...children].forEach((child) => {
      const element = child;
      element.style.opacity = 1;
    });
  };
  
  const addDxElementLoadingSpinner = (target) => {
    if (!target) {
      return;
    }
  
    const iconMarkup = `<div class="DxLoading" aria-hidden="true">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 88 88" style="enable-background:new 0 0 88 88;" xml:space="preserve">
      <path fill="#FFFFFF" style="opacity: .2;" d="M44,5c21.5,0,39,17.5,39,39S65.5,83,44,83S5,65.5,5,44S22.5,5,44,5 M44,0C19.7,0,0,19.7,0,44s19.7,44,44,44 s44-19.7,44-44S68.3,0,44,0L44,0z"/>
      <path fill="#F0F0F0" d="M85.5,46.4c-1.4,0-2.5-1.1-2.5-2.5C83,22.5,65.5,5,44.1,5c-1.4,0-2.5-1.1-2.5-2.5S42.7,0,44.1,0 C68.3,0,88,19.7,88,43.9C88,45.3,86.9,46.4,85.5,46.4z">
        <animateTransform attributeName="transform" type="rotate" from="0 44 44" to="360 44 44" dur="1.5s" repeatCount="indefinite"></animateTransform>
      </path>
      </svg>
    </div>`;
    const loadingIcon = document.createRange().createContextualFragment(iconMarkup);
  
    loadingSpinnerToggleButtonStateAndContent(target);
  
    target.appendChild(loadingIcon);
  };
  
  const localStorageAvailable = () => {
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
  
  const addScriptForBazaarVoice = (scriptURL) => {
    if (scriptURL.trim() !== '' && (document.querySelectorAll(`script[src='${scriptURL}']`)).length === 0) {
      const bazaarVoiceScript = document.createElement('script');
      bazaarVoiceScript.setAttribute('src', scriptURL);
      document.head.appendChild(bazaarVoiceScript);
    }
  };
  
  const equaliseHeights = (elements) => {
    let maxHeight = 0;
    [...elements].forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.style.height = 'auto';
    });
    [...elements].forEach((element) => {
      const height = element.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });
    [...elements].forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.style.height = `${maxHeight}px`;
    });
  };
  
  const generateCurrentDate = () => {
    const today = new Date();
    return (
      Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate(),
        today.getUTCHours(),
        today.getUTCMinutes()
      )
    );
  };
  
  const preventActionOnDeepLink = (event) => {
    const linkLocation = event.currentTarget.getAttribute('href');
    if (checkDeepLink(linkLocation)) { event.preventDefault(); }
  };
  
  
  /***/ }),
  
  /***/ "../../resources/dev/js/utils/swiper.js":
  /*!**********************************************!*\
    !*** ../../resources/dev/js/utils/swiper.js ***!
    \**********************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "swiperEmitEventsOnElement": () => (/* binding */ swiperEmitEventsOnElement),
  /* harmony export */   "swiperPreventTabbingIssues": () => (/* binding */ swiperPreventTabbingIssues),
  /* harmony export */   "swiperDisableAutoplayOnSlideFocus": () => (/* binding */ swiperDisableAutoplayOnSlideFocus),
  /* harmony export */   "swiperIntegrateCustomPagination": () => (/* binding */ swiperIntegrateCustomPagination),
  /* harmony export */   "swiperSetAriaLiveOnFocusIn": () => (/* binding */ swiperSetAriaLiveOnFocusIn),
  /* harmony export */   "swiperModifyNavigation": () => (/* binding */ swiperModifyNavigation),
  /* harmony export */   "swiperA11yHelper": () => (/* binding */ swiperA11yHelper),
  /* harmony export */   "swiperA11yDestroy": () => (/* binding */ swiperA11yDestroy),
  /* harmony export */   "swiperPreventDefaultButtonAction": () => (/* binding */ swiperPreventDefaultButtonAction)
  /* harmony export */ });
  /* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aria */ "../../resources/dev/js/utils/aria.js");
  /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "../../resources/dev/js/utils/index.js");
  
  
  
  const swiperEmitEventsOnElement = (swiperObject) => {
    swiperObject.on('init', () => (0,_index__WEBPACK_IMPORTED_MODULE_1__.eventTrigger)(swiperObject.el, 'onInit'));
    swiperObject.on('slideChangeTransitionStart', () => (0,_index__WEBPACK_IMPORTED_MODULE_1__.eventTrigger)(swiperObject.el, 'onSlideChangeTransitionStart'));
    swiperObject.on('slideChangeTransitionEnd', () => (0,_index__WEBPACK_IMPORTED_MODULE_1__.eventTrigger)(swiperObject.el, 'onSlideChangeTransitionEnd'));
    swiperObject.on('slidePrevTransitionEnd', () => (0,_index__WEBPACK_IMPORTED_MODULE_1__.eventTrigger)(swiperObject.el, 'onSlidePrevTransitionEnd'));
    swiperObject.on('slideNextTransitionEnd', () => (0,_index__WEBPACK_IMPORTED_MODULE_1__.eventTrigger)(swiperObject.el, 'onSlideNextTransitionEnd'));
    swiperObject.on('touchStart', () => (0,_index__WEBPACK_IMPORTED_MODULE_1__.eventTrigger)(swiperObject.el, 'onTouchStart'));
    swiperObject.on('touchEnd', () => (0,_index__WEBPACK_IMPORTED_MODULE_1__.eventTrigger)(swiperObject.el, 'onTouchEnd'));
    swiperObject.on('touchMove', () => (0,_index__WEBPACK_IMPORTED_MODULE_1__.eventTrigger)(swiperObject.el, 'onTouchMove'));
  };
  
  const swiperPreventTabbingIssues = (swiperObject) => {
    const tabbableElements = (0,_index__WEBPACK_IMPORTED_MODULE_1__.getTabbable)(swiperObject.wrapperEl);
  
    tabbableElements.forEach((element) => {
      const existingTabindex = element.getAttribute('tabindex');
      if (existingTabindex) {
        element.setAttribute('data-swiper-tabindex', existingTabindex);
      }
    });
  
    const slides = [].slice.call(swiperObject.slides);
    const setSlideStyle = (slide, style) => {
      slide.style.visibility = style; // eslint-disable-line no-param-reassign
    };
  
    const hideSlidesOutOfViewport = (allSlides) => {
      allSlides.forEach((slide) => {
        if (!slide.classList.contains(swiperObject.params.slideActiveClass)) {
          setSlideStyle(slide, 'hidden');
        }
      });
    };
  
    hideSlidesOutOfViewport(slides);
  
    const slideTransitionStart = () => {
      slides.forEach((slide) => {
        setSlideStyle(slide, 'visible');
        slide.setAttribute('aria-hidden', 'true');
      });
      tabbableElements.forEach(element => element.setAttribute('tabindex', -1));
    };
  
    const slideTransitionEnd = () => {
      slides.forEach((slide) => {
        slide.setAttribute('aria-hidden', 'false');
        slide.removeAttribute('aria-hidden');
      });
      tabbableElements.forEach((element) => {
        const existingTabindex = element.getAttribute('data-swiper-tabindex');
        element.removeAttribute('tabindex');
        if (existingTabindex) {
          element.setAttribute('tabindex', existingTabindex);
        }
      });
  
      hideSlidesOutOfViewport(slides);
    };
  
    swiperObject.el.addEventListener('onSlideChangeTransitionStart', () => slideTransitionStart());
    swiperObject.el.addEventListener('onTouchMove', () => slideTransitionStart());
    swiperObject.el.addEventListener('onSlideChangeTransitionEnd', () => slideTransitionEnd());
    swiperObject.el.addEventListener('onTouchEnd', () => {
      setTimeout(() => {
        slideTransitionEnd();
      }, 1000);
    });
  };
  
  const swiperDisableAutoplayOnSlideFocus = (swiperObject) => {
    if (!swiperObject.originalParams.autoplay.enabled) return;
  
    const handleFocusin = () => swiperObject.autoplay.stop();
    const handleFocusout = () => swiperObject.autoplay.start();
    swiperObject.el.addEventListener('focusin', handleFocusin, false);
    swiperObject.el.addEventListener('focusout', handleFocusout, false);
  };
  
  const swiperIntegrateCustomPagination = (object, swiperOptions) => {
    const swiperObject = object;
    const { paginationObject } = swiperOptions;
  
    if (!paginationObject) { return; }
    swiperObject.dxPagination = paginationObject;
  
    const loopOffset = swiperObject.params.loop ? 1 : 0;
    const element = paginationObject.Pagination('getElement');
    element.addEventListener('afterChange', event => swiperObject.slideTo(parseInt(event.detail.pipTo, 10) + loopOffset), false); // expects a payload with a pipFrom/pipTo (index is different when in a loop)
    element.addEventListener('liveRegionUpdate', (event) => {
      const liveRegion = swiperObject.a11y.liveRegion[0];
      const text = event.detail && event.detail.text;
      if (liveRegion && text) {
        liveRegion.innerHTML = text;
      }
    }, false);
  
    // if the user interacts with the keyboard, pause the navigation.
    swiperObject.el.addEventListener('focusin', (event) => {
      const isVideo = event.target.classList.contains('video');
      const isNextButton = event.target.classList.contains('swiper-button--next');
      const isPrevButton = event.target.classList.contains('swiper-button--prev');
  
      if (isNextButton || isPrevButton || isVideo) return;
      if (paginationObject.Pagination('getPlayingStatus') === 'running') {
        paginationObject.Pagination('pause');
      }
    }, false);
  
    // partially  dragging the slider and releasing or using the navigation next/prev buttons can cause the slider & pagination to de-sync - this method prevents that
    const moveSyncHandler = () => {
      swiperObject.el.removeEventListener('onSlideChangeTransitionEnd', moveSyncHandler, false);
      const indexMismatch = swiperObject.realIndex !== paginationObject.Pagination('getCurrentPipIndex');
      if (!indexMismatch) { return; }
      paginationObject.Pagination('updateActivePipByIndex', swiperObject.realIndex);
    };
    const next = swiperObject.navigation.nextEl;
    const previous = swiperObject.navigation.prevEl;
    if (next) {
      next.addEventListener('click', () => swiperObject.el.addEventListener('onSlideChangeTransitionEnd', moveSyncHandler, false));
    }
    if (previous) {
      previous.addEventListener('click', () => swiperObject.el.addEventListener('onSlideChangeTransitionEnd', moveSyncHandler, false));
    }
    swiperObject.el.addEventListener('onTouchMove', () => swiperObject.el.addEventListener('onSlideChangeTransitionEnd', moveSyncHandler, false));
  };
  
  const swiperSetAriaLiveOnFocusIn = (swiperObject, swiperOptions) => {
    const liveRegion = swiperObject.a11y.liveRegion[0];
    if (!swiperOptions.arialiveOnFocusIn || !liveRegion) { return; }
    liveRegion.removeAttribute('aria-live');
    swiperObject.el.parentNode.addEventListener('focusin', () => liveRegion.setAttribute('aria-live', 'polite'));
    swiperObject.el.parentNode.addEventListener('focusout', () => liveRegion.removeAttribute('aria-live'));
  };
  
  const swiperModifyNavigation = (swiperObject, swiperOptions) => {
    const previous = swiperObject.navigation.prevEl;
    const next = swiperObject.navigation.nextEl;
    if (!previous || !next) { return; }
    const { labels, isBlack } = swiperOptions;
    const fill = (isBlack) ? '#000000' : '#FFFFFF';
    const previousArrowSVG = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 24" style="enable-background:new 0 0 14 24;" xml:space="preserve">
        <style type="text/css">.st0--swiper-pagination{fill-rule:evenodd;clip-rule:evenodd;fill:${fill};}</style><polygon class="st0--swiper-pagination" points="12.7,0 0,12 12.7,24 14,22.5 2.9,12 14,1.5 "/>
        </svg>
      `;
    const nextArrowSVG = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 24" style="enable-background:new 0 0 14 24;" xml:space="preserve">
        <style type="text/css">.st0--swiper-pagination{fill-rule:evenodd;clip-rule:evenodd;fill:${fill};}</style><polygon class="st0--swiper-pagination" points="1.3,24 14,12 1.3,0 0,1.5 11.1,12 0,22.5 "/>
        </svg>
      `;
  
    const modifyArrow = (arrow, icon, label) => {
      if (label) {
        arrow.setAttribute('aria-label', label);
      }
      const div = document.createElement('div');
      div.innerHTML = icon;
      arrow.appendChild(div.querySelector('svg'));
    };
    modifyArrow(previous, previousArrowSVG, labels.previous);
    modifyArrow(next, nextArrowSVG, labels.next);
  };
  
  const swiperA11yHelper = (swiperObject, config = {}) => {
    if (!swiperObject) return;
  
    const options = Object.assign({}, {
      pagination: null, // only used if we're using Swiper with our Pagination component
      arialiveOnFocusIn: true, // add/remove aria-live attribute on swiper focusin/focusout
      labels: {}, // pass in accessible label text e.g. from resource bundle on host component
      isBlack: false, // style arrows and navigation in black instead of default white
    }, config);
  
    swiperIntegrateCustomPagination(swiperObject, options);
    swiperEmitEventsOnElement(swiperObject);
    swiperPreventTabbingIssues(swiperObject);
    swiperDisableAutoplayOnSlideFocus(swiperObject);
    swiperSetAriaLiveOnFocusIn(swiperObject, options);
    swiperModifyNavigation(swiperObject, options);
  };
  
  const swiperA11yDestroy = (swiperObject) => {
    let swiper = swiperObject;
    const previous = swiper.navigation.prevEl;
    const next = swiper.navigation.nextEl;
  
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
  
  const swiperPreventDefaultButtonAction = (swiperObject, swiperOptions = {}) => {
    const { paginationObject } = swiperOptions;
    const next = swiperObject.navigation.nextEl;
    const previous = swiperObject.navigation.prevEl;
  
    const swiperPreventEnterDoubleAction = (e) => {
      const key = e.which || e.keyCode;
      const { RETURN } = _aria__WEBPACK_IMPORTED_MODULE_0__.KeyCode;
  
      if (key === RETURN) {
        e.preventDefault();
  
        if (paginationObject) {
          paginationObject.Pagination('updateActivePipByIndex', swiperObject.realIndex);
        }
      }
    };
  
  
    next.addEventListener('keydown', e => swiperPreventEnterDoubleAction(e));
    previous.addEventListener('keydown', e => swiperPreventEnterDoubleAction(e));
  };
  
  
  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/ 	
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			// no module.id needed
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/ 	
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 	
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/ 	
  /************************************************************************/
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = (exports, definition) => {
  /******/ 			for(var key in definition) {
  /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 				}
  /******/ 			}
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
  /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = (exports) => {
  /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 			}
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
  /*!********************************!*\
    !*** ./source-js/Accolades.js ***!
    \********************************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/js/swiper.esm.bundle.js");
  /* harmony import */ var _Pagination_es6_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Pagination/es6/Pagination */ "../Pagination/es6/Pagination.js");
  /* harmony import */ var _resources_dev_js_utils_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../resources/dev/js/utils/swiper */ "../../resources/dev/js/utils/swiper.js");
  /* harmony import */ var _resources_dev_js_utils_browserDetection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../resources/dev/js/utils/browserDetection */ "../../resources/dev/js/utils/browserDetection.js");
  /* harmony import */ var _resources_dev_js_utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../resources/dev/js/utils/index */ "../../resources/dev/js/utils/index.js");
  
  
  
  
  
  
  class Accolades {
    constructor(element,isBlack) {
      this.isBlack = isBlack;
      this.element = element;
      this._slider = null;
      this._startSlide = 0;
      this._totalSlides = 0;
      this._autoPlayduration = 4000;
      this._randomiseSlides = false;
      this._loop = true;
      this._sliderSpeed = 600;
      this.__autoPlay = true;
  
      this.init();
    }
  
    init() {
      this._totalSlides = parseInt(this.element.getAttribute('data-total'), 10);
      this.__autoPlay = this.element.getAttribute('data-autoplay') && this.element.getAttribute('data-autoplay') =="true"?true:false;
      this._sliderSpeed = parseInt(this.element.getAttribute('data-speed')) || 600;
      this._autoPlayduration = parseInt(this.element.getAttribute('data-duration'))||4000;
      if (this._totalSlides < 2) { return; }
      this._randomiseSlides = this.element.getAttribute('data-randomized');
      this._handleSlideRandomisation();
      this._getLabels();
      window.addEventListener('load', () => this._initSlider()); // LRA-23798
    }
  
    _getLabels() {
      const getAttribute = labelSuffix => this.element.getAttribute(`data-label-${labelSuffix}`);
      const labelSuffixes = ['next', 'previous', 'slideChanged', 'play', 'pause', 'pip', 'paused', 'playing'];
      const labels = Object.assign({}, ...labelSuffixes.map(label => ({ [label]: getAttribute(label) })));
      return labels;
    }
  
    _handleSlideRandomisation() {
      if (this._randomizeSlides) {
        (0,_resources_dev_js_utils_index__WEBPACK_IMPORTED_MODULE_4__.randomiseElements)(this.element.querySelectorAll('.cmp-carousel__slide'));
      }
    }
  
    _initSlider() {
      const labels = this._getLabels();
      const paginationOptions = {
        isBlack:this.isBlack,
        labels,
        numberOfPips: this._totalSlides,
        autoplay: {
          enabled: this.__autoPlay,
          duration: this._autoPlayduration,
          delay: this._sliderSpeed,
        },
        loop: this._loop,
        defaultSelected: this._startSlide,
      };
  
      const paginationElement = this.element.querySelector('.cmp-carousel__controls');
      const paginationObject = new _Pagination_es6_Pagination__WEBPACK_IMPORTED_MODULE_1__.default(paginationElement, paginationOptions);
      const accordionWrapper = this.element.closest('.Accordion');
      const sliderElement = this.element.querySelector('.cmp-carousel__slider');
  
      sliderElement.insertAdjacentHTML('beforeend', `
        <button class="cmp-carousel__previous swiper-button swiper-button--prev"></button>
        <button class="cmp-carousel__next swiper-button swiper-button--next"></button>
      `);
  
  
      const carouselNavPrevious = this.element.querySelector('.cmp-carousel__previous');
      const carouselNavNext = this.element.querySelector('.cmp-carousel__next');
      const sliderOptions = {
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
          prevEl: carouselNavPrevious,
          nextEl: carouselNavNext,
        },
        breakpoints: {
          740: {
            autoHeight: true,
          }
        },
        on: {
          transitionEnd() {
            // if component is in a mobile Accordion, trigger height calculation after transition
            if (accordionWrapper && accordionWrapper.length) {
              accordionWrapper.Accordion('calculateNewHeight');
            }
          }
        }
      };
  
      this._slider = new swiper__WEBPACK_IMPORTED_MODULE_0__.default(this.element.querySelector('.cmp-carousel__slider'), sliderOptions);
      const swiperA11yHelperConfig = { paginationObject, labels };
      (0,_resources_dev_js_utils_swiper__WEBPACK_IMPORTED_MODULE_2__.swiperA11yHelper)(this._slider, swiperA11yHelperConfig);
    }
  }
  // Accolades End
  // Full frame start
  const FullFrameCarouselInit = (($, window,cmp_name="FullFrameCarousel",isBlack=false) => {
    
    const FullFrameCarousel = {
      _defaults: {},
      uiSelectors: {
        fullFrameItems: '.cmp-genericItem',
        videoPlayers: '.VideoPlayer',
        videos: 'video.videos',
        mainTextHeadings: '.headingTextSub, .headerBox__title',
        carouselContainer: '.carousel'
      },
  
      _slider: null,
      _$window: $(window),
      _$currentSlide: null,
      _$currentSlideVideo: null,
      _bottomOfFrame: 0,
      _scrollTimer: null,
      _offScreen: false,
      _tallest: 0,
      _orientation: 'portrait',
      _userInteracting: false,
      _slideTimer: null,
      _firstVideo: null,
      _videoUsesFlash: false,
      _singleItemCarousel: false,
      _userInteracted: false,
      _direction: 'slideFromRight',
      _transistionSpeed: 600,
      playCount: 0,
      _sliderInited: false,
      _isInsideTabbedContainer: false,
      _isMobile: false,
      _total: 0,
      _uniqId: null,
      _ytRatio: 0.5625,
      __autoPlay:true,
      _autoPlayduration:6000,
      _sliderSpeed:600,
      _isBlack:false,
  
      init_rtl() {
        this._direction = 'slideFromLeft';
      },
  
      init() {
        this._isBlack = isBlack;
        const sliderElement = this.element.querySelector('.cmp-carousel__slider');
        if(sliderElement){
          sliderElement.insertAdjacentHTML('beforeend', `
          <button class="cmp-carousel__previous swiper-button swiper-button--prev"></button>
          <button class="cmp-carousel__next swiper-button swiper-button--next"></button>
        `);
        }
        let resizeTimeout;
        this._tabbedContainer = (0,_resources_dev_js_utils_index__WEBPACK_IMPORTED_MODULE_4__.insideTabbedContainer)(this.$element);
        this._isInsideTabbedContainer = this._tabbedContainer.length;
        this._isMobile = (0,_resources_dev_js_utils_browserDetection__WEBPACK_IMPORTED_MODULE_3__.isBreakpointSmall)();
        this._total = parseInt(this.$element.data('total'), 10);
        this.__autoPlay =  this.$element.data('autoplay');
        this._sliderSpeed = parseInt(this.$element.data('speed')) || 600;
        this._transistionSpeed = parseInt(this.$element.data('speed')) || 600;
        this._autoPlayduration = parseInt(this.$element.data('duration'))||6000;
        this._uniqId = Math.floor(Math.random() * 100);
        this._$window.on(`resize.ffc-${this.uniqId}`, () => {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
            this._throttledSlideResize();
          }, 250);
        });
  
        this.ui('videoPlayers').VideoPlayer({
          autoplay: this.__autoPlay,
          loop: true,
          clickToPlayPause: false,
          iPhoneUseNativeControls: false,
          iPadUseNativeControls: false,
          AndroidUseNativeControls: false
        });
  
        $(window).on('HeroCarouselForceResize', () => {
          if (!this._isInsideTabbedContainer || (this._isInsideTabbedContainer && !this._isMobile)) {
            this._throttledSlideResize();
          }
        });
        let videomp4List = this.element.querySelectorAll('video');  
          videomp4List.forEach((videomp4)=>{
            if(cmp_name!="HeroCarousel" && cmp_name!="HeroTitleBanner"){
              videomp4.removeAttribute("controls");
            }
            setInterval(function() {
              videomp4.currentTime = 0;
                videomp4.play();
            }, 6000);

          });                   
        
        if (this._total > 1) {
          this._initGallery();
          
        } else {
          this._$currentSlide = this.$element;
  
          this._throttledSlideResize();
          this._setupSingleImageComponents();
        }
  
        this._$window.scroll(() => {
          this._onScroll();
        });
        this._onScroll();
  
        this._setUpYouTubeGalleryAssets();
        /* Commenting timebeing we have custom youtube
          this._handleYouTubeOnSlide();
          */
        this._registerVideoClickToPause();
        
        const videoPlayLabel = $('.a11yResourceLabels').attr('data-a11y-video-play') || '';
        const galleryImageLink = this.$element.find('.galleryImageLink');
        galleryImageLink.attr('aria-label', galleryImageLink.attr('aria-label') || videoPlayLabel);
      },
  
      _setUpYouTubeGalleryAssets() {
        let videos  = $(this.element).find(".videoCustom");
        
        let imagePresentOrNot =  $(this.element).find(".videoCustom").find('img').attr('src');


        if(imagePresentOrNot == undefined || imagePresentOrNot == ""){
          var elm =  $(this.element).find(".videoCustom"),
                conts   = elm.contents(),
                le      = conts.length,
                ifr     = null;
  
            for(var i = 0; i<le; i++){
              if(conts[i].nodeType == 8) ifr = conts[i].textContent;
            }
            var spanElement = $(ifr);
            if(spanElement == undefined || spanElement == ""){
              spanElement[0].allow = "autoplay";
              spanElement[0].src = spanElement[0].src+'?autoplay=1&background=1&muted=1';
            }
           
           
            
            elm.addClass("player").html(spanElement);
           // elm.addClass("player").html(ifr);
            elm.off("click");
        }
        videos.on("click", function(){
          var elm = $(this),
              conts   = elm.contents(),
              le      = conts.length,
              ifr     = null;

          for(var i = 0; i<le; i++){
            if(conts[i].nodeType == 8) ifr = conts[i].textContent;
          }
          
          var spanElement = $(ifr);
          if(spanElement == undefined || spanElement == ""){
            spanElement[0].allow = "autoplay";
            spanElement[0].src = spanElement[0].src+'?autoplay=1&background=1&muted=1';
          }
          elm.addClass("player").html(spanElement);
          elm.off("click");
      });
        if (this.$element.find('.YouTubeGalleryAsset').length) {
          this.$element.find('.YouTubeGalleryAsset').each((s, el) => {
            $(el).find('.YouTubePlayer').YouTubePlayer('destroy');
            $(el).find('.YouTubePlayer').YouTubePlayer({
              playerVars: { controls: 1 },
              inFullFrameCarousel: true,
              expandToWidthOnly: true
            });
  
            // Mask to capture slider events without Youtube being an event-hog
            $(el).append('<div class="youTubePlayerFFCMask"/>');
            $(el).parent().append('<div class="mediaOverlay mediaOverlayVideo visible"><div class="mediaOverlayIcon"/></div>');
            $(el).parents('.cmp-genericItem').addClass('cmp-genericItem--withYouTubeGalleryAsset');
          });
        }

      },
  
      _handleYouTubeOnSlide() {
        // this._$currentSlide => Error handling to catch uninitialised slide on first load
        if (this._$currentSlide && this._$currentSlide.find('.YouTubeGalleryAsset').length) {
          // bind some custom YouTubePlayer functionality to our slider
          $('.youTubePlayerFFCMask', this.$element).on('click', () => {
            if ((this._$currentSlide).find('.YouTubePlayer').eq(0).YouTubePlayer('getPlayingState') !== 1) {
              this._playYouTubeGalleryAsset(this._$currentSlide);
            }
          });
  
          $('.youTubePlayerFFCMask', this.$element).on('click', () => {
            this._pauseYouTubeGalleryAsset(this._$currentSlide);
          });
        }
  
        if (this._isInsideTabbedContainer && (0,_resources_dev_js_utils_browserDetection__WEBPACK_IMPORTED_MODULE_3__.isBreakpointSmall)()) {
          const frameItem = this.$element.find('.cmp-genericItem--withYouTubeGalleryAsset');
          frameItem.each((i, el) => {
            const placeholderImage = $(el).find('[data-picture]');
            const playButton = $(el).find('.mediaOverlay');
            const player = $(el).find('.YouTubePlayer').eq(0);
  
            playButton.on('click', () => {
              if (player.YouTubePlayer('getPlayingState') !== 1) {
                player.YouTubePlayer('forceResize');
                player.YouTubePlayer('play');
                placeholderImage.addClass('hide');
                playButton.removeClass('visible');
              }
            });
          });
        }
      },
  
      _playYouTubeGalleryAsset(container) {
        const player = container.find('.YouTubePlayer').eq(0);
        player.YouTubePlayer('forceResize');
        player.YouTubePlayer('play');
        container.find('.mediaOverlay.mediaOverlayVideo').removeClass('visible');
        container.find('.mediaOverlay.mediaOverlayVideo').addClass('hide');
        container.find('.youTubePlayerFFCMask').addClass('hide');
        if (!(0,_resources_dev_js_utils_browserDetection__WEBPACK_IMPORTED_MODULE_3__.isBreakpointSmall)()) {
          container.find('.headerBox').removeClass('visible');
        }
        container.find('[data-background-image]').addClass('hide');
      },
  
      _pauseYouTubeGalleryAsset(container) {
        container.find('.YouTubePlayer').eq(0).YouTubePlayer('pause');
        container.find('.mediaOverlay.mediaOverlayVideo').addClass('visible');
  
        if (!(0,_resources_dev_js_utils_browserDetection__WEBPACK_IMPORTED_MODULE_3__.isBreakpointSmall)()) {
          container.find('.headerBox').addClass('visible');
        }
      },
  
      _pauseAllYouTubeGalleryAssets() {
        if ($('.cmp-carousel__slider', this.$element).find('.YouTubeGalleryAsset').length) {
          $('.cmp-carousel__slider', this.$element).find('.YouTubeGalleryAsset .YouTubePlayer').each((s, player) => {
            // check the player has been initialised - if it has and is playing then pause
            if ($(player).parent().find('.youTubePlayerFFCMask').length) {
              if ($(player).YouTubePlayer('getPlayingState') !== 2) {
                $(player).YouTubePlayer('pause');
                $(player).parents('.cmp-genericItem').find('.mediaOverlay.mediaOverlayVideo').addClass('visible');
              }
            }
          });
        }
      },
  
      _registerVideoClickToPause() {
        $('.mediaOverlay', this.$element).on('click', () => {
          this.$element.find('.mediaOverlay').hide();
          const media = this.$element.find('video.video')[0];
          if (media.paused) {
            this.$element.find('.mediaOverlay').hide();
            media.play();
          } else {
            this.$element.find('.mediaOverlay').show();
            media.pause();
          } 
        });
        this.$element.on('click', '.VideoPlayer', (event) => {
          const { media } = $(event.currentTarget).find('video.video')[0].player;
          if (!this._slider || !this._slider.dragSuccess) {
            if (media.paused) {
              media.play();
            } else {
              media.pause();
            }
          }
        });
        this.$element.on('click', '.customControl', (event) => {
          const media = this.$element.find('video.video')[0];
            if (!media.paused) {
              this.$element.find('.mediaOverlay').show();
            }      
        });
      },
  
      _beforeSlideChanged() {
        this._destroySlideComponents();
      },
  
      _onSlideChanged() {
        // ensure all YouTubeGalleryAssets within the FFC are paused when slide updates
        this._pauseAllYouTubeGalleryAssets();
  
        let previousVideo;
        $('.linkContainer a', this._$currentSlide).off('click tap mouseenter mouseleave');
  
        if (this._$currentSlide !== null) {
          this._$currentSlide.removeClass('current');
          previousVideo = this._$currentSlideVideo;
  
          // due to the way royal slider handles slides, we need to rerun this to check for additional YouTubeGalleryAssets after transition
          if ($(this._slider.$currentSlide).find('.YouTubeGalleryAsset').length) {
            this._setUpYouTubeGalleryAssets();
          }
        }
  
        // if the previous slide had a video, pause it
        if (previousVideo && previousVideo.length === 1) {
          previousVideo.VideoPlayer('pause');
          // Put the unbinding of events on previous video to the end of the event loop so the callbacks
          // can fire when pause is called above before being removed
          setTimeout(() => {
            previousVideo.off('onPlay');
            previousVideo.off('onPause');
          }, 0);
        }
  
        this._$currentSlide = $('.swiper-slide-active', this.element);
  
        this._$currentSlide.addClass('current');
        this._$currentSlideVideo = $('.VideoPlayer', this._$currentSlide);
  
        $('.mejs-controls', this._$currentSlide).removeClass('hide');
        $('.headerBox', this.$element).removeClass('visible');
  
        this._setupSlideComponents();
        this._hoverOverCTAs();
        this._throttledSlideResize();
  
        this._$window.trigger('resize');
        setTimeout(() => {
          this._throttledSlideResize();
  
          this._$window.trigger('resize');
        }, 1000);
  
        this._updateSlideLinks();
      },
  
      _updateSlideLinks() {
        $('.TargetLinks').TargetLinks('setupListener');
        $('.ResponsiveLink').ResponsiveLink();
      },
  
      _getLabels() {
        const getAttribute = labelSuffix => this.element.getAttribute(`data-label-${labelSuffix}`);
        const labelSuffixes = ['next', 'previous', 'slideChanged', 'play', 'pause', 'pip', 'paused', 'playing'];
        const labels = Object.assign({}, ...labelSuffixes.map(label => ({ [label]: getAttribute(label) })));
        return labels;
      },
  
      _initGallery() {
        let startingSlideId = 0;
  
        if (this._direction === 'slideFromLeft') {
          startingSlideId = this.$element.data('total') - 1;
        }
        const labels = this._getLabels();
        const paginationOptions = {
          isBlack:this._isBlack,
          labels,
          numberOfPips: this._total,
          defaultSelected: startingSlideId,
           autoplay: {
              enabled: this.__autoPlay,
              duration: this._autoPlayduration,
              delay: this._sliderSpeed,
              pauseAtStart:!this.__autoPlay
          },
        };
  
        const paginationElement = this.element.querySelector('.cmp-carousel__controls');
        const paginationObject = new _Pagination_es6_Pagination__WEBPACK_IMPORTED_MODULE_1__.default(paginationElement, paginationOptions);
  
  
        const FullFrameCarouselNavPrevious = this.element.querySelector('.cmp-carousel__previous');
        const FullFrameCarouselNavNext = this.element.querySelector('.cmp-carousel__next');
        const sliderOptions = {
          autoHeight: false,
          initialSlide: startingSlideId,
          loop: this._loop,
          grabCursor: true,
          speed: this._transistionSpeed,
          pagination: false,
          preloadImages: true,
          updateOnImagesReady: true,
          a11y: true,
          navigation: {
            prevEl: FullFrameCarouselNavPrevious,
            nextEl: FullFrameCarouselNavNext,
          }
        };
  
        this._slider = new swiper__WEBPACK_IMPORTED_MODULE_0__.default(this.element.querySelector('.cmp-carousel__slider'), sliderOptions);
        const swiperA11yHelperConfig = { paginationObject, labels };
        (0,_resources_dev_js_utils_swiper__WEBPACK_IMPORTED_MODULE_2__.swiperA11yHelper)(this._slider, swiperA11yHelperConfig);
        (0,_resources_dev_js_utils_swiper__WEBPACK_IMPORTED_MODULE_2__.swiperPreventDefaultButtonAction)(this._slider, swiperA11yHelperConfig);
  
        setTimeout(() => {
          window.richsponsiveImage();
        }, 50);
  
        setTimeout(() => {
          if (!this._isInsideTabbedContainer || (this._isInsideTabbedContainer && !this._isMobile)) {
            this._throttledSlideResize();
            this._$window.trigger('resize');
            window.richsponsiveImage();
          }
        }, 2000);
  
        this._slider.on('slideChangeTransitionStart', () => {
          this._beforeSlideChanged();
        });
  
        this._slider.on('transitionEnd', () => {
          this._onSlideChanged();
          this._userFinishedInteraction();
        });
  
        this._initialiseSlides();
        this._sliderInited = true;
      },
  
      _destroyGallery() {
        if (this._sliderInited) {
          this.ui('carouselContainer').height('');
  
          // destroy video events/any other events
          this._$currentSlideVideo.off('onPlay');
          this._$currentSlideVideo.off('onPause');
  
          // clear up events
          $('.linkContainer a', this._$currentSlide).off('click tap mouseenter mouseleave');
  
          if (this._originalMarkup) {
            this.$element.html(this._originalMarkup);
  
            // Clear previous defined cached ui elements as new markup wont ever be seen by this.ui calls
            this.uiElements = {};
          }
          this._sliderInited = false;
        }
      },
  
      _initialiseSlides() {
        this._$currentSlide = $('.swiper-slide-active', this.element);
        this._$currentSlide.addClass('current');
        this._$currentSlideVideo = $('.VideoPlayer', this._$currentSlide);
        this._throttledSlideResize();
        this._$window.trigger('resize');
  
        this._hoverOverCTAs();
  
        this._setupSlideComponents();
        this._throttledSlideResize();
        this._$window.trigger('resize');
  
        setTimeout(() => {
          this._$currentSlide.waitForImages(() => {
            this._throttledSlideResize();
            this._$window.trigger('resize');
          });
        }, 200);
      },
  
      _hoverOverCTAs() {
        $('.linkContainer a, .mediaOverlay, .mejs-controls', this._$currentSlide).on('mouseenter', () => {
          this._userInteracting = true;
        }).on('mouseleave', () => {
          this._userInteracting = false;
        });
      },
  
      _onScroll() {
        if (!this._scrollTimer) {
          this._scrollTimer = setTimeout(() => {
            clearTimeout(this._scrollTimer);
  
            this._scrollTimer = null;
            const $video = $('.VideoPlayer video', this._$currentSlide);
            const volume = 1 - ((this._$window.scrollTop() / 1000) * 2);
  
            if ($video.length > 0 && volume > 0 && !this.videoMute) {
              $video[0].volume = volume;
            }
  
            // this._$currentSlide => Error handling to catch uninitialised slide on first load
            if (this._$currentSlide && this._$currentSlide.find('.YouTubePlayer').length) {
              const ytPlayer = this._$currentSlide.find('.YouTubePlayer').eq(0);
              const ytPlayerTop = ytPlayer.offset().top;
  
              // Pause YT video if player and > 50% if offscreen
              const mid = ytPlayerTop + (ytPlayer.height() / 2);
              if (ytPlayer.YouTubePlayer('getPlayingState') === 1 && this._$window.scrollTop() > mid) {
                this._pauseYouTubeGalleryAsset(this._$currentSlide);
              }
            }
  
            if (this._$window.scrollTop() >= this._bottomOfFrame) {
              if (this._offScreen === false) {
                this.$element.addClass('offScreen');
                this._offScreen = true;
              }
            } else {
              // if off screen but not in fullscreen mode
              const $offScreenButNotFullScreen = this._offScreen === true && !site.fullScreenMode;
              if ($offScreenButNotFullScreen) {
                this.$element.removeClass('offScreen');
                this._offScreen = false;
              }
            }
          }, 250);
        }
      },
  
      _resizeSlide() {
        const $slideYouTubeAsset = this._$currentSlide.find('.YouTubeGalleryAsset');
        const $slider = $('.cmp-carousel__slider', this.$element);
        const $posterElement = this._$currentSlide.find('.cmp-genericItem__element-poster');
        const $contentElement = this._$currentSlide.find('.headerBox');
        const hasYouTubeGalleryAsset = !!$slideYouTubeAsset.length;
  
        this._onResize();
  
        if (!(0,_resources_dev_js_utils_browserDetection__WEBPACK_IMPORTED_MODULE_3__.isBreakpointSmall)()) {
          this._removeSlideThemeStyling();
  
          if (hasYouTubeGalleryAsset) {
            $slider.css('height', $slideYouTubeAsset.outerWidth(true) * this._ytRatio);
          }
  
          if (this._total > 1) {
            $('.swiper-button', this.$element).css('top', '');
          }
        } else {
          if ((0,_resources_dev_js_utils_index__WEBPACK_IMPORTED_MODULE_4__.checkDefined)($contentElement[0])) {
            const theme = $contentElement[0].getAttribute('data-theme');
            this._addCurrentSlideTheme(theme);
          }
  
          if (this._total > 1) {
            const paginationPosition = parseInt((($posterElement.outerHeight() / 2) - 24), 10);
            $('.swiper-button', this.$element).css('top', paginationPosition);
          }
  
          $slider.height('');
  
          if (this._sliderInited) {
            this._slider.update();
          }
        }
  
        setTimeout(() => {
          this.$element.addClass('loaded');
        }, 100);
      },
  
      _onResize(event) {
        const that = event ? event.data.that : this;
        const windowWidth = $(window).width();
        const windowHeight = $(window).height();
  
        that._windowWidth = windowWidth;
        that._windowHeight = windowHeight;
  
        const $slider = $('.cmp-carousel__slider', that.element);
        const $left = $('headerBox', this._$currentSlide);
        const $textContainers = $('.headerBox', this.$element);
  
        if (this.$element.find('.YouTubeGalleryAsset').length && this._sliderInited === true) {
          this.$element.find('.YouTubePlayer').eq(0).YouTubePlayer('forceResize');
        }  
        let reqSliderHeight;
        let textHeight = 0;
  
        function getHighestText() {
          // Get the highest text of all slides
          $textContainers.each((i, element) => {
            const th = $(element).height();
            if (th > textHeight) {
              textHeight = th;
            }
          });
        }
  
        if (!(0,_resources_dev_js_utils_browserDetection__WEBPACK_IMPORTED_MODULE_3__.isBreakpointSmall)()) {
          getHighestText();
          textHeight += 264; // Add some padding above and below
  
          let idealHeight = windowHeight - (0,_resources_dev_js_utils_index__WEBPACK_IMPORTED_MODULE_4__.getStickyNavHeight)(this.$element.offset().top); // This is the option to match viewport
  
          // To prevent car being cropped on deep screens, limit component's height, relative to its width
          const maxHeight = windowWidth / 1.45; // 620 is maximum height with screen at 900px before car is cropped
          idealHeight = idealHeight < maxHeight ? idealHeight : maxHeight;
  
          reqSliderHeight = $left.height();
          if (windowWidth > 1) {
            reqSliderHeight = idealHeight < textHeight ? textHeight : idealHeight;
          }
  
          // Resize slider
          // added to fix LRA-10847 safari sub pixel rendering causing black line
          // reqSliderHeight = Math.floor(reqSliderHeight);
          $slider.height(reqSliderHeight);
        }
       

      },
  
      _userFinishedInteraction() {
        this._userInteracted = true;
      },
  
      _destroySlideComponents() {
        // LRA-9083: Resize headerBox based on the longest element when displayed inline
        this._$currentSlide.find('.headerBox')
          .HeaderBox('removeEvents')
          .HeaderBox('destroy');
      },
  
      _setupSingleImageComponents() {
        this.singleHeaderBox = $('.headerBox', this.$element);
  
        // Remove slider controls as they wont be needed.
        $('.cmp-carousel__controls', this.$element).remove();
        $('.cmp-carousel__previous', this.$element).remove();
        $('.cmp-carousel__next', this.$element).remove();
  
        // Default to show for the content
        this.singleHeaderBox.addClass('visible');
  
        this._$videoPlayer = $('.VideoPlayer', this.$element);
        if (this._$videoPlayer.length) {
          this._setupSingleVideoControls();
        }
      },
  
      _setupSingleVideoControls() {
        this._$videoPlayer = $('.VideoPlayer', this.$element);
  
        this._$videoPlayer.on('onPlay', () => {
          if (!(0,_resources_dev_js_utils_browserDetection__WEBPACK_IMPORTED_MODULE_3__.isBreakpointSmall)()) {
            this.singleHeaderBox.removeClass('visible');
          }
  
          this._$videoPlayer.find('.mejs-overlay-play').hide();
          $('.mejs-controls', this._$currentSlide).addClass('hide');
        }).bind(this);
  
        this._$videoPlayer.on('onPause', () => {
          if (!(0,_resources_dev_js_utils_browserDetection__WEBPACK_IMPORTED_MODULE_3__.isBreakpointSmall)()) {
            this.singleHeaderBox.addClass('visible');
          }
  
          this._$videoPlayer.find('.mejs-overlay-play').show();
          $('.mejs-controls', this.$element).removeClass('hide');
        }).bind(this);
      },
  
      _setupSlideComponents() {
        const $fullFrameContent = $('.headerBox', this._$currentSlide);
  
        // LRA-9083: Resize headerBox based on the longest element when displayed inline
        this._$currentSlide.find('.headerBox').HeaderBox();
  
        if (this._$currentSlideVideo && this._$currentSlideVideo.length === 1) {
          if ((this._firstVideo === null) || (this._firstVideo === this._$currentSlide.index())) {
            this._firstVideo = this._$currentSlide.index();
  
            $fullFrameContent.addClass('visible');
  
            $('.mejs-controls', this._$currentSlide).addClass('visible');
  
            this._$currentSlideVideo.on('onPlay', () => {
              if (this.dragStarted) {
                this._$currentSlideVideo.VideoPlayer('pause');
              }
  
              if (!(0,_resources_dev_js_utils_browserDetection__WEBPACK_IMPORTED_MODULE_3__.isBreakpointSmall)()) {
                $fullFrameContent.removeClass('visible');
              }
  
              this._$currentSlideVideo.find('.mejs-overlay-play').hide();
              $('.mejs-controls', this._$currentSlide).addClass('hide');
            }).bind(this);
  
            this._$currentSlideVideo.on('onPause', () => {
              if (!(0,_resources_dev_js_utils_browserDetection__WEBPACK_IMPORTED_MODULE_3__.isBreakpointSmall)()) {
                $fullFrameContent.addClass('visible');
              }
  
              this._$currentSlideVideo.find('.mejs-overlay-play').show();
              $('.mejs-controls', this._$currentSlide).removeClass('hide');
            }).bind(this);
          } else {
            // if we're using flash and it's a second video, don't initialise it
            const usesFlash = this._videoUsesFlash === false;
            if (usesFlash) {
              $fullFrameContent.addClass('visible');
  
              this._$currentSlideVideo.on('onPlay', () => {
                if (this.dragStarted) {
                  this._$currentSlideVideo.VideoPlayer('pause');
                }
  
                if (!(0,_resources_dev_js_utils_browserDetection__WEBPACK_IMPORTED_MODULE_3__.isBreakpointSmall)()) {
                  $fullFrameContent.removeClass('visible');
                }
  
                this._$currentSlideVideo.find('.mejs-overlay-play').hide();
                $('.mejs-controls', this._$currentSlide).addClass('hide');
              }).bind(this);
  
              this._$currentSlideVideo.on('onPause', () => {
                if (!(0,_resources_dev_js_utils_browserDetection__WEBPACK_IMPORTED_MODULE_3__.isBreakpointSmall)()) {
                  $fullFrameContent.addClass('visible');
                }
  
                this._$currentSlideVideo.find('.mejs-overlay-play').show();
                $('.mejs-controls', this._$currentSlide).removeClass('hide');
              }).bind(this);
            } else {
              this._$currentSlideVideo.remove();
              this._throttledSlideResize();
              $(window).trigger('resize');
              return;
            }
          }
  
          if (this._$currentSlideVideo.VideoPlayer('canBeResumed') === true) {
            $fullFrameContent.addClass('visible');
          }
        } else {
          this._noVideoInteraction();
        }
  
        if (String(this.$element.data('total')) === '1') {
          if (this._isInsideTabbedContainer) {
            $fullFrameContent.addClass('no-extra-padding');
          }
        }
  
        this._$currentSlide[0].querySelectorAll('.headerBox.visible').forEach((el) => {
          if (!el.innerHTML.trim()) { el.remove(); }
        });
  
        if ((0,_resources_dev_js_utils_browserDetection__WEBPACK_IMPORTED_MODULE_3__.isBreakpointSmall)()) {
          const slideHeaderbox = this._$currentSlide.find('.headerBox')[0];
          if ((0,_resources_dev_js_utils_index__WEBPACK_IMPORTED_MODULE_4__.checkDefined)(slideHeaderbox)) {
            const theme = this._$currentSlide.find('.headerBox')[0].getAttribute('data-theme');
  
            this._removeSlideThemeStyling();
            this._addCurrentSlideTheme(theme);
          }
        }
      },
  
      _removeSlideThemeStyling() {
        $('.cmp-carousel__slider', this.$element).removeClass('.cmp-carousel__slider--white cmp-carousel__slider--light cmp-carousel__slider--grey cmp-carousel__slider--dark');
        $('.cmp-carousel__controls', this.$element).removeClass('.cmp-carousel__controls--white cmp-carousel__controls--light cmp-carousel__controls--grey cmp-carousel__controls--dark');
      },
  
      _addCurrentSlideTheme(theme) {
        $('.cmp-carousel__slider', this.$element).addClass(`cmp-carousel__slider--${theme}`);
        $('.cmp-carousel__controls', this.$element).addClass(`cmp-carousel__controls--${theme}`);
      },
  
      _noVideoInteraction() {
        const $fullFrameContent = $('.headerBox', this._$currentSlide);
        $fullFrameContent.addClass('visible');
        if (this._userInteracted !== false) {
          this._userInteracted = false;
        }
      },
  
      _throttledSlideResize() {
        (0,_resources_dev_js_utils_index__WEBPACK_IMPORTED_MODULE_4__.throttle)(this._resizeSlide());
      },
  
      _destroy() {
        if (this._slider) {
          (0,_resources_dev_js_utils_swiper__WEBPACK_IMPORTED_MODULE_2__.swiperA11yDestroy)(this._slider);
        }
  
        $('.YouTubePlayer', this._$element).YouTubePlayer('destroy');
        this.$element.off('click', '.VideoPlayer');
        this._destroyGallery();
        this._$window.off(`resize.ffc-${this.uniqI}`);
      }
    };
  
    jQuery.createComponent(cmp_name, FullFrameCarousel);
  });
  // Full frame end
  const isBlack = document.getElementsByClassName("grey").length>0 || document.getElementsByClassName("white").length>0 || document.getElementsByClassName("light").length>0 ;
  // Component initialization below
  // const FullframeElements = document.querySelectorAll('.cmp-carousel.cmp-contentFullframe');
  // if(FullframeElements.length>0){
  //   FullFrameCarouselInit(jQuery, window);
  // }
  // $('.cmp-carousel.cmp-contentFullframe').each((index, element) => {
  //   const comp = $(element);
  //   if (!comp.parents('.TabbedContainer').length || comp.parents('.DxTabs__panel').data('index') === 0) {
  //     comp.FullFrameCarousel();
  //   }
  // });
  // const AccoladesElements = document.querySelectorAll('.cmp-carousel.cmp-contentAccolades');
  // if (AccoladesElements.length) {
  //   Array.prototype.forEach.call(AccoladesElements, el => new Accolades(el,isBlack));
  // }
  const carousalElements = document.querySelectorAll('.cmp-carousel');
  if (carousalElements.length) {
    carousalElements.forEach((el)=>{
      let accolades = el.querySelector('.cmp-accolades');
      if(accolades){
        el.querySelectorAll('.cmp-accolades').forEach((el)=>{
          let onlyCopy = el.querySelector('.cmp-onlyCopy');
          let handleOnlyCopy = ()=>{
            let onlyCopy = el.querySelector('.cmp-onlyCopy');
            onlyCopy.style.paddingRight="0px";
            el.style.display ="block";
            let img = el.querySelector('.cmp-accolades__img');
            if(img){
              img.style.display="none";
            }
            if(window.innerWidth>=1280){
              el.style.paddingTop = "60px";
              el.style.paddingBottom = "80px";
            }
           
            if(window.innerWidth>=768 && window.innerWidth<=1279 ){
              el.style.paddingTop = "40px";
              el.style.paddingBottom = "60px";
            }
            if(window.innerWidth<=767){
              el.style.paddingTop = "30px";
              el.style.paddingBottom = "40px";
            }
          }
          if(onlyCopy){
            handleOnlyCopy();
            $(el).resize(()=>{
              handleOnlyCopy();
            });
        
           
          }
        })
      }
   
      if(accolades){
        let controls = el.querySelector('.cmp-carousel__controls');
        controls.classList.add('cmp-accolades_pagination');
        FullFrameCarouselInit(jQuery, window,"Accolades",isBlack);
        const comp = $(el);
        if (!comp.parents('.TabbedContainer').length || comp.parents('.DxTabs__panel').data('index') === 0) {
          comp.Accolades();
        }
        setTimeout(()=>{
          let controls = el.querySelector('.cmp-carousel__controls');
          if(controls)
          if(el.querySelectorAll(".cmp-accolades__copy").length>0){
            //pagination enabled
            let controls = el.querySelector('.cmp-accolades_pagination');
            if(controls){
              $(el).resize(()=>{
                if(window.innerWidth <=1279){
                  let controlsFFC = el.querySelector('.cmp-accolades_pagination');
                  let height = accolades.clientHeight ;      
                   controlsFFC.style.top = "0px";
                   controlsFFC.style.top = (height)+"px";      
                  // accolades.style.marginBottom="50px";
                } 
                if(window.innerWidth >=1280){
                  let controlsFFC = el.querySelector('.cmp-accolades_pagination');
                  let height = accolades.clientHeight ;
                  
                  controlsFFC.style.top = "0px";
                  controlsFFC.style.top = (height+7)+"px";
                  accolades.style.marginBottom="70px";
                }   
              });    
              if(window.innerWidth <=1279){
                let controlsFFC = el.querySelector('.cmp-accolades_pagination');
                let height = accolades.clientHeight ;      
                 controlsFFC.style.top = "0px";
                 controlsFFC.style.top = (height)+"px";      
                // accolades.style.marginBottom="50px";
              } 
              if(window.innerWidth >=1280){
                let controlsFFC = el.querySelector('.cmp-accolades_pagination');
                let height = accolades.clientHeight ;
                
                controlsFFC.style.top = "0px";
                controlsFFC.style.top = (height+7)+"px";
               accolades.style.marginBottom="70px";
              }     
            }
        };
        },200);
        //new Accolades(el,isBlack)
      }
    });
  }
  if (carousalElements.length) {
    carousalElements.forEach((el)=>{
      let hero = el.querySelector('.cmp-hero');
      let fullFrame = el.querySelector('.cmp-fullframe');
      let dualFrame = el.querySelector('.cmp-dualFrameItem');
      let heroTitle = el.querySelector('.cmp-heroTitleBanner');
      if(fullFrame){
        el.classList.add('cmp-fullframe-carousel');
        FullFrameCarouselInit(jQuery, window,"FullFrameCarousel");
        const comp = $(el);
        if (!comp.parents('.TabbedContainer').length || comp.parents('.DxTabs__panel').data('index') === 0) {
          comp.FullFrameCarousel();
        }
        setTimeout(()=>{
          let controls = el.querySelector('.cmp-carousel__controls');
          if(controls)
          controls.classList.add('cmp-fullframe_pagination');
          if(el.querySelectorAll(".cmp-genericItem__element-poster").length>0){
            //pagination enabled
            let controls = el.querySelector('.cmp-fullframe_pagination');
            if(controls){
              let controlsFFC = el.querySelector('.cmp-fullframe_pagination');
              let height = el.querySelector(".cmp-genericItem__element-poster").clientHeight;
              controlsFFC.style.top = "0px";
              controlsFFC.style.top = height-70+"px";
              if(window.innerWidth >=300 && window.innerWidth<=767){
                let offsetheight = el.querySelector(".cmp-genericItem__element-poster").offsetHeight;
                let elm = el.querySelectorAll(".cmp-genericItem__element-poster");
                elm.forEach((e)=>{
                  e.style.marginBottom="50px";
                })
                controlsFFC.style.top = offsetheight+25+"px";
              }   
            }
        };
        },200);
    
  
      }
      if(dualFrame){
        el.classList.add('cmp-dualframe-carousel');
        FullFrameCarouselInit(jQuery, window,"DualFrameCarouselCustom");
        let controls = el.querySelector('.cmp-carousel__controls');
        let isLeft = el.querySelectorAll('.left');
        if(controls)
        controls.classList.add('cmp-dualframe_pagination');
        if(isLeft.length>0){
          controls.classList.add('left');
        }
        const comp = $(el);
        if (!comp.parents('.TabbedContainer').length || comp.parents('.DxTabs__panel').data('index') === 0) {
          comp.DualFrameCarouselCustom();
        }
        setTimeout(()=>{
          if(el.querySelectorAll(".cmp-dualFrameItem__image").length>0){
            //pagination enabled
            let adjust = ()=>{
                let controls = el.querySelector('.cmp-dualframe_pagination');
                if(controls){
                  let controlsFFC = el.querySelector('.cmp-dualframe_pagination');
                  let height = el.querySelector(".cmp-dualFrameItem__image").clientHeight;
                  if(window.innerWidth<=767){
                    controlsFFC.style.top = "0px";
                    let offsetheight = el.querySelector(".cmp-dualFrameItem__image").offsetHeight;
                    let elm = el.querySelectorAll(".cmp-dualFrameItem__image");
                    elm.forEach((e)=>{
                      e.style.marginBottom="60px";
                    })
                    controlsFFC.style.top = offsetheight+50+"px";
                  }   
                  if(window.innerWidth >=768 && window.innerWidth<=1279){
                    controlsFFC.style.top = "0px";
                    let offsetheight = el.querySelector(".cmp-dualFrameItem__image").offsetHeight;
                    let elm = el.querySelectorAll(".cmp-dualFrameItem__image");
                    elm.forEach((e)=>{
                      e.style.marginBottom="70px";
                    })
                    controlsFFC.style.top = offsetheight+65+"px";
                  }   
                  if(window.innerWidth >=1280){
                    controlsFFC.style.top = "";
                    let elm = el.querySelectorAll(".cmp-dualFrameItem__image");
                    elm.forEach((e)=>{
                      e.style.marginBottom="0px";
                    })
                  }
                }
            
            }
            $(el).resize(()=>{
              adjust();
            });
            adjust();
        };
        },200);
      }
      if(hero){
        el.classList.add('cmp-hero-carousel');
        FullFrameCarouselInit(jQuery, window,"HeroCarousel");
        let controls = el.querySelector('.cmp-carousel__controls');
        if(controls)
        controls.classList.add('cmp-hero_pagination');
        const comp = $(el);
        if (!comp.parents('.TabbedContainer').length || comp.parents('.DxTabs__panel').data('index') === 0) {
          comp.HeroCarousel();
        }
        setTimeout(()=>{
          if(el.querySelectorAll(".cmp-genericItem__element-poster").length>0){
            //pagination enabled
            let controls = el.querySelector('.cmp-hero_pagination');
            if(controls){
              let controlsFFC = el.querySelector('.cmp-hero_pagination');
              let height = el.querySelector(".cmp-genericItem__element-poster").clientHeight;
              controlsFFC.style.top = "0px";
              controlsFFC.style.top = height-70+"px";
              if(window.innerWidth<=767){
                let offsetheight = el.querySelector(".cmp-genericItem__element-poster").offsetHeight;
                let elm = el.querySelectorAll(".cmp-genericItem__element-poster");
                elm.forEach((e)=>{
                  e.style.marginBottom="60px";
                })
                controlsFFC.style.top = offsetheight+25+"px";
              }   
              if(window.innerWidth >=768 && window.innerWidth<=1024){
                let offsetheight = el.querySelector(".cmp-genericItem__element-poster").offsetHeight;
                let elm = el.querySelectorAll(".cmp-genericItem__element-poster");
                elm.forEach((e)=>{
                  e.style.marginBottom="70px";
                })
                controlsFFC.style.top = offsetheight+25+"px";
              }   
            }
        };
        },200);
      }
      if(heroTitle){
        el.classList.add('cmp-herotitle-carousel');
        FullFrameCarouselInit(jQuery, window,"HeroTitleBanner");
        let controls = el.querySelector('.cmp-carousel__controls');
        if(controls)
        controls.classList.add('cmp-heroTitleBanner_pagination');
        const comp = $(el);
        if (!comp.parents('.TabbedContainer').length || comp.parents('.DxTabs__panel').data('index') === 0) {
          comp.HeroTitleBanner();
        }
        setTimeout(()=>{
          if(el.querySelectorAll(".cmp-heroTitleBanner__image").length>0){
            //pagination enabled
            let controls = el.querySelector('.cmp-heroTitleBanner_pagination');
            if(controls){
              if(window.innerWidth<=1279){
                let controlsFFC = el.querySelector('.cmp-heroTitleBanner_pagination');
                let height = el.querySelector(".cmp-heroTitleBanner__image").clientHeight;
                controlsFFC.style.top = "0px";
                controlsFFC.style.top = height-70+"px";
                if(window.innerWidth<=767){
                  let offsetheight = el.querySelector(".cmp-heroTitleBanner__image").offsetHeight;
                  let elm = el.querySelectorAll(".cmp-heroTitleBanner__image");
                  elm.forEach((e)=>{
                    e.style.marginBottom="60px";
                  })
                  controlsFFC.style.top = offsetheight+25+"px";
                }   
                if(window.innerWidth >=768 && window.innerWidth<=1279){
                  let offsetheight = el.querySelector(".cmp-heroTitleBanner__image").offsetHeight;
                  let elm = el.querySelectorAll(".cmp-heroTitleBanner__image");
                  elm.forEach((e)=>{
                    e.style.marginBottom="70px";
                  })
                  controlsFFC.style.top = offsetheight+25+"px";
                }   
              }
           
            }
        };
        },200);
      }
    });
  }
  
  })();
  
  /******/ })()
  ;