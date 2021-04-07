/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
          console.log("hello");
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "default": () => (/* binding */ MarketSelector)
                /* harmony export */
            });
    /* harmony import */ var _DxDropdown_js_DxDropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
    /* harmony import */ var _resources_dev_js_utils_aria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
    /* harmony import */ var _resources_dev_js_utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
    /* harmony import */ var _resources_dev_js_utils_geolocationManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
    /* harmony import */ var _resources_dev_js_utils_cookieManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);







            class MarketSelector {
                constructor(element, options) {
                    this.element = element;
                    this._countryOptions = null;
                    this._languageOptions = null;
                    this._regionPlaceholder = null;
                    this._countryPlaceholder = null;
                    this._languagePlaceholder = null;
                    this._cookieName = 'JLR_marketCookie';

                    this._defaults = {
                        geoLocate: true
                    };

                    this.uiSelectors = {
                        DxDropdowns: [...this.element.querySelectorAll('.dxDropdown')],
                        regionDropdown: element.querySelector('.dxDropdown-region'),
                        regionButton: element.querySelector('.dxDropdown__button-region'),
                        countryDropdown: element.querySelector('.dxDropdown-country'),
                        countryButton: element.querySelector('.dxDropdown__button-country'),
                        languageDropdown: element.querySelector('.dxDropdown-language'),
                        languageButton: element.querySelector('.dxDropdown__button-language'),
                        countryList: element.querySelector('.dxDropdown__country-list-wrapper'),
                        languageList: element.querySelector('.dxDropdown__language-list-wrapper'),
                        continueButton: element.querySelector('.MarketSelector__continue-button'),
                        visitInternationalButton: element.querySelector('.visitInternational')
                    };

                    this.options = Object.assign({}, this._defaults, options);

                    this.element.classList.add('MarketSelector--initialised');

                    this._initDxDropdowns();
                    this._cacheSelectOptions();
                    this._bindEvents();

                    if (this.options.geoLocate) {
                        this._checkForCookiesAndGeoLocate();
                    }
                }

                _initDxDropdowns() {
                    this.uiSelectors.DxDropdowns.forEach(dropdown => new _DxDropdown_js_DxDropdown__WEBPACK_IMPORTED_MODULE_0__.default(dropdown));
                }

                _cacheSelectOptions() {
                    this._countryOptions = this.uiSelectors.countryList.innerHTML;
                    this._languageOptions = this.uiSelectors.languageList.innerHTML;
                    this._regionPlaceholder = this.uiSelectors.regionButton.innerHTML;
                    this._countryPlaceholder = this.uiSelectors.countryButton.innerHTML;
                    this._languagePlaceholder = this.uiSelectors.languageButton.innerHTML;
                }

                _bindEvents() {
                    this.uiSelectors.regionDropdown.addEventListener('click', event => this._regionClickHandler(event));
                    this.uiSelectors.regionDropdown.addEventListener('keydown', event => this._regionClickHandler(event));

                    this.uiSelectors.countryDropdown.addEventListener('click', event => this._countryClickHandler(event));
                    this.uiSelectors.countryDropdown.addEventListener('keydown', event => this._countryClickHandler(event));

                    this.uiSelectors.languageDropdown.addEventListener('click', event => this._languageClickHandler(event));
                    this.uiSelectors.languageDropdown.addEventListener('keydown', event => this._languageClickHandler(event));

                    this.uiSelectors.continueButton.addEventListener('click', () => this._redirectUserToChosenDestination());
                    this.uiSelectors.visitInternationalButton.addEventListener('click', event => this._redirectUserToInternational(event));
                }

                _regionClickHandler(event) {
                    const {
                        type,
                        keyCode
                    } = event;
                    const el = event.target;

                    if (type === 'keydown' && keyCode !== _resources_dev_js_utils_aria__WEBPACK_IMPORTED_MODULE_1__.KeyCode.RETURN) {
                        return;
                    }

                    if (el.classList.contains('dxDropdown__list-item-link')) {
                        if (this.constructor._clickCheckListItem(el)) {
                            const region = el.getAttribute('data-region');
                            const {
                                innerText
                            } = el;
                            this._updateCountryOptions(region);
                            this.constructor._setAriaLabel(this.uiSelectors.regionButton, this._regionPlaceholder, innerText);
                        }
                    } else if (el.classList.contains('dxDropdown__list-item')) {
                        const childElement = el.querySelector(('.dxDropdown__list-item-link'));
                        const region = childElement.getAttribute('data-region');
                        const {
                            innerText
                        } = childElement;
                        this._updateCountryOptions(region);
                        this.constructor._setAriaLabel(this.uiSelectors.regionButton, this._regionPlaceholder, innerText);
                    }
                }

                _countryClickHandler(event) {
                    const el = event.target;
                    const {
                        type,
                        keyCode
                    } = event;
                    const {
                        parentElement
                    } = el;

                    if (type === 'keydown' && keyCode !== _resources_dev_js_utils_aria__WEBPACK_IMPORTED_MODULE_1__.KeyCode.RETURN) {
                        return;
                    }

                    if (this.constructor._clickCheckListItem(el)) {
                        const country = el.getAttribute('data-country');
                        const {
                            innerText
                        } = el.querySelector('.dxDropdown__list-item-link-inner');

                        this._updatelanguageOptions(country);
                        this.constructor._setAriaLabel(this.uiSelectors.countryButton, this._countryPlaceholder, innerText);
                    } else if (this.constructor._clickCheckListItem(parentElement)) {
                        parentElement.click();
                    } else if (el.classList.contains('dxDropdown__list-item')) {
                        const {
                            innerText
                        } = el.querySelector('.dxDropdown__list-item-link-inner');
                        const childElement = el.querySelector(('.dxDropdown__list-item-link'));
                        const country = childElement.getAttribute('data-country');

                        this._updatelanguageOptions(country);
                        this.constructor._setAriaLabel(this.uiSelectors.countryButton, this._countryPlaceholder, innerText);
                    }
                }

                _languageClickHandler(event) {
                    let langISOCode;
                    const {
                        type,
                        keyCode
                    } = event;

                    if (type === 'keydown' && keyCode !== _resources_dev_js_utils_aria__WEBPACK_IMPORTED_MODULE_1__.KeyCode.RETURN) {
                        return;
                    }

                    if (this.constructor._clickCheckListItem(event.target)) {
                        langISOCode = event.target.parentElement.getAttribute('lang');
                    } else if (event.target.classList.contains('dxDropdown__list-item')) {
                        langISOCode = event.target.getAttribute('lang');
                    }

                    if (this.constructor._clickCheckListItem(event.target) || event.target.classList.contains('dxDropdown__list-item')) {
                        const {
                            innerText
                        } = event.target;
                        this.constructor._setAriaLabel(this.uiSelectors.languageButton, this._languagePlaceholder, innerText);
                        this._addMenaFontStylingToLangaugeButton(langISOCode);
                        this._enableContinueButton();
                    }
                }

                _updateCountryOptions(region) {
                    this.uiSelectors.countryList.innerHTML = this._countryOptions;

                    [...this.element.querySelectorAll('.dxDropdown__list-country')].forEach((list) => {
                        const listRegion = list.getAttribute('data-region');

                        if (region !== listRegion) {
                            this.uiSelectors.countryList.removeChild(list);
                        }
                    });

                    this._resetLists(true);
                    this.uiSelectors.countryDropdown.classList.remove('dxDropdown--disabled');
                    this.uiSelectors.countryButton.removeAttribute('tabindex');
                    this.uiSelectors.countryButton.removeAttribute('disabled');

                    (0, _resources_dev_js_utils_index__WEBPACK_IMPORTED_MODULE_2__.eventTrigger)(this.uiSelectors.countryDropdown, 'dxDropdown:Rebind', {});
                }

                _updatelanguageOptions(country) {
                    this.uiSelectors.languageList.innerHTML = this._languageOptions;

                    [...this.element.querySelectorAll('.dxDropdown__list-language')].forEach((list) => {
                        const listCountry = list.getAttribute('data-country');

                        if (country !== listCountry) {
                            this.uiSelectors.languageList.removeChild(list);
                        }
                    });

                    this._resetLists();
                    this._preSelectOnlyLanguage();
                    this.uiSelectors.languageDropdown.classList.remove('dxDropdown--disabled');
                    this.uiSelectors.languageButton.removeAttribute('tabindex');
                    this.uiSelectors.languageButton.removeAttribute('disabled');
                    (0, _resources_dev_js_utils_index__WEBPACK_IMPORTED_MODULE_2__.eventTrigger)(this.uiSelectors.languageDropdown, 'dxDropdown:Rebind');
                }

                _resetLists(isCountry = false) {
                    this._disableContinueButton();

                    if (isCountry === true) {
                        this.uiSelectors.countryButton.innerHTML = this._countryPlaceholder;
                        this.constructor._setAriaLabel(this.uiSelectors.countryButton, this._countryPlaceholder);
                        this.uiSelectors.languageDropdown.classList.add('dxDropdown--disabled');
                        this.uiSelectors.languageButton.setAttribute('tabindex', '-1');
                        this.uiSelectors.languageButton.setAttribute('disabled', '');
                    }
                    this.uiSelectors.languageButton.innerHTML = this._languagePlaceholder;
                    this.constructor._setAriaLabel(this.uiSelectors.languageButton, this._languagePlaceholder);
                }

                _preSelectOnlyLanguage() {
                    const languages = this.uiSelectors.languageDropdown.querySelectorAll('.dxDropdown__list-item');

                    if (languages.length === 1) {
                        const onlyLanguage = languages[0].querySelector('.dxDropdown__list-item-link');
                        const langISOCode = onlyLanguage.parentElement.getAttribute('lang');
                        this.uiSelectors.languageButton.innerHTML = onlyLanguage.innerHTML;
                        this._addMenaFontStylingToLangaugeButton(langISOCode);
                        this.constructor._setAriaLabel(this.uiSelectors.languageButton, this._languagePlaceholder, onlyLanguage.innerText);
                        onlyLanguage.classList.add('dxDropdown__list-item-link--active');
                        this._enableContinueButton();
                    }
                }

                _addMenaFontStylingToLangaugeButton(langISOCode) {
                    this.uiSelectors.languageButton.classList.remove('dxDropdown__button--mena-font');

                    if (langISOCode) {
                        if (langISOCode.toLowerCase() === 'ar') {
                            this.uiSelectors.languageButton.classList.add('dxDropdown__button--mena-font');
                        }
                    }
                }

                _enableContinueButton() {
                    this.uiSelectors.continueButton.classList.remove('disabled');
                    this.uiSelectors.continueButton.removeAttribute('disabled');
                }

                _disableContinueButton() {
                    this.uiSelectors.continueButton.classList.add('disabled');
                    this.uiSelectors.continueButton.setAttribute('disabled', '');
                }

                _checkForCookiesAndGeoLocate() {
                    const cookieData = (0, _resources_dev_js_utils_cookieManager__WEBPACK_IMPORTED_MODULE_4__.readCookie)(this._cookieName);
                    const [market, marketURL, date] = cookieData ? cookieData.split(',') : [false, false, false];

                    const refferIsNotALandroverDomain = this.constructor._checkReferrer();
                    const cookieContainsLanguageFlag = (0, _resources_dev_js_utils_cookieManager__WEBPACK_IMPORTED_MODULE_4__.checkForCookie)(this._cookieName);
                    let cookieDoesNotContainInternationalFlag;
                    let cookieDoesNotContainRecentTimestamp;

                    if (cookieContainsLanguageFlag) {
                        cookieDoesNotContainInternationalFlag = (market !== 'XI');
                        cookieDoesNotContainRecentTimestamp = this.constructor._checkTimeStamp(date);
                    }

                    const disableRedirect = this.element.getAttribute('data-disable-redirect') === 'false';
                    if (refferIsNotALandroverDomain && cookieContainsLanguageFlag && cookieDoesNotContainInternationalFlag && cookieDoesNotContainRecentTimestamp) {
                        if (disableRedirect) {
                            window.location = marketURL;
                        }
                    }
                    (0, _resources_dev_js_utils_geolocationManager__WEBPACK_IMPORTED_MODULE_3__.getGeoLocation)(data => this._preSelectDropdowns(data.country_code), {
                        useWoosmap: true
                    });
                }

                _redirectUserToChosenDestination() {
                    const chosenCountry = this.uiSelectors.countryDropdown.querySelector('.dxDropdown__list-item-link--active');
                    const marketCode = chosenCountry.getAttribute('data-country').split('-')[1];
                    const chosenLanguage = this.uiSelectors.languageDropdown.querySelector('.dxDropdown__list-item-link--active');
                    const redirectLocation = chosenLanguage.getAttribute('href');
                    const redirectTarget = chosenLanguage.getAttribute('data-target');

                    (0, _resources_dev_js_utils_cookieManager__WEBPACK_IMPORTED_MODULE_4__.createCookie)(this._cookieName, [marketCode, redirectLocation, Date.now()].join(','), 30);

                    window.open(redirectLocation, redirectTarget);
                }

                _redirectUserToInternational(event) {
                    event.preventDefault();
                    const url = this.uiSelectors.visitInternationalButton.getAttribute('href');
                    (0, _resources_dev_js_utils_cookieManager__WEBPACK_IMPORTED_MODULE_4__.createCookie)(this._cookieName, ['XI', url, Date.now()].join(','), 30);
                    window.location = url;
                }

                _preSelectDropdowns(countryCode) {
                    const selectedCountry = this.uiSelectors.countryDropdown.querySelector(`[data-country="country-${countryCode}"]`);

                    if (selectedCountry) {
                        const RegionList = selectedCountry.parentElement.parentElement;
                        const preSelectedRegion = RegionList.getAttribute('data-region');

                        // Set Region
                        const selectedRegion = this.uiSelectors.regionDropdown.querySelector(`[data-region="${preSelectedRegion}"]`);

                        selectedRegion.classList.add('dxDropdown__list-item-link--active');
                        this.uiSelectors.regionButton.innerHTML = selectedRegion.innerHTML;

                        // Enable and set Country
                        this._updateCountryOptions(preSelectedRegion);

                        const rebindedCountryAfterFilter = this.uiSelectors.countryDropdown.querySelector(`[data-country="country-${countryCode}"]`);
                        rebindedCountryAfterFilter.classList.add('dxDropdown__list-item-link--active');
                        this.uiSelectors.countryButton.innerHTML = rebindedCountryAfterFilter.innerHTML;

                        // Enable and pre-select language if only one.
                        this._updatelanguageOptions(`country-${countryCode}`);
                        this._preSelectOnlyLanguage();
                    }
                }

                static _setAriaLabel(element, placeholder, chosenResult = false) {
                    const ariaString = (chosenResult === false) ? `${placeholder}` : `${placeholder} ${chosenResult}`;
                    element.setAttribute('aria-label', ariaString);
                }

                static _clickCheckListItem(el) {
                    return el.classList.contains('dxDropdown__list-item-link');
                }

                static _checkTimeStamp(visitedTime) {
                    const difference = (Date.now() - Number(visitedTime)) / 1000;
                    if (difference < 20) {
                        return false;
                    }
                    return true;
                }

                static _checkReferrer() {
                    const {
                        referrer
                    } = document;
                    if (referrer.indexOf('landrover') !== -1 || referrer.indexOf('local') !== -1) {
                        return false;
                    }
                    return true;
                }
            }

            const MarketSelectors = document.querySelectorAll('.MarketSelector:not(.MarketSelector--initialised)');
            if (MarketSelectors.length) {
                Array.prototype.forEach.call(MarketSelectors, el => new MarketSelector(el));
            }

            /***/
        }),
    /* 2 */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "default": () => (/* binding */ DxDropdown)
                /* harmony export */
            });
    /* harmony import */ var _resources_dev_js_utils_aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
    /* harmony import */ var _resources_dev_js_utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



            class DxDropdown {
                constructor(el, preventDefault = true) {
                    this.element = el;
                    this.open = false;
                    this.button = el.querySelector('.dxDropdown__button');
                    this.listbox = el.querySelector('.dxDropdown__list');

                    this.element.addEventListener('dxDropdown:Rebind', () => this.rebindListBox());
                    this.element.addEventListener('click', e => this.clickEventListeners(e, preventDefault));
                    this.button.addEventListener('keyup', e => this.checkShow(e));
                    this.listbox.addEventListener('blur', e => this.testBlur(e));
                    this.listbox.addEventListener('keydown', e => this.keyDownEvents(e));

                    const firstItem = el.querySelector('.dxDropdown__list-item-link:not(.dxDropdown__list-item-link--disabled');
                    this.addActiveDropdownItem(firstItem);

                    window.addEventListener('click', e => this.handleWindowClick(e));
                }

                testBlur(e) {
                    if (!e.relatedTarget.classList.contains('dxDropdown__list-item') &&
                        !e.relatedTarget.classList.contains('dxDropdown__list-item-link')
                    ) {
                        this.closeDropdown();
                    }
                }

                rebindListBox() {
                    this.listbox = this.element.querySelector('.dxDropdown__list');
                    this.listbox.addEventListener('blur', e => this.testBlur(e));
                    this.listbox.addEventListener('keydown', e => this.keyDownEvents(e));
                }

                handleWindowClick(e) {
                    const nodes = [];
                    let el = e.target;
                    let isDropdownEl = false;

                    while (el.parentNode) {
                        nodes.unshift(el.parentNode);
                        el = el.parentNode;
                    }

                    nodes.forEach((node) => {
                        if (node.classList && node === this.element) {
                            isDropdownEl = true;
                        }
                    });

                    if (!isDropdownEl) {
                        this.closeDropdown(false);
                    }
                }

                clickEventListeners(e, preventDefault) {
                    if (preventDefault) {
                        e.preventDefault();
                    }
                    const el = e.target;
                    if (el.classList.contains('dxDropdown__button')) {
                        this.toggleDropdown();
                    } else if (el.classList.contains('dxDropdown__list-item-link') && !el.classList.contains('dxDropdown__list-item-link--disabled')) {
                        this.updateButtonText(e);
                        this.closeDropdown();
                    } else if (el.classList.contains('dxDropdown__list-item') && !el.querySelector('.dxDropdown__list-item-link').classList.contains('dxDropdown__list-item-link--disabled')) {
                        const childLink = el.querySelector('.dxDropdown__list-item-link');
                        this.updateButtonText(childLink);
                        this.closeDropdown();
                    }
                }

                keyDownEvents(e) {
                    const key = e.which || e.keyCode;
                    const {
                        DOWN,
                        UP,
                        ESC,
                        RETURN,
                        TAB
                    } = _resources_dev_js_utils_aria__WEBPACK_IMPORTED_MODULE_0__.KeyCode;

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

                checkShow(e) {
                    const key = e.which || e.keyCode;
                    const {
                        UP,
                        DOWN
                    } = _resources_dev_js_utils_aria__WEBPACK_IMPORTED_MODULE_0__.KeyCode;

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

                toggleDropdown() {
                    return this.open ? this.closeDropdown() : this.openDropdown();
                }

                openDropdown() {
                    this.element.classList.add('dxDropdown--active');
                    this.button.setAttribute('aria-expanded', 'true');

                    this.focusFirstItem();
                    this.open = true;
                }

                closeDropdown(setFocus = true) {
                    this.element.classList.remove('dxDropdown--active');
                    this.button.setAttribute('aria-expanded', 'false');
                    this.open = false;

                    if (setFocus) {
                        this.button.focus();
                    }
                }

                updateButtonText(targetElement) {
                    const target = (targetElement.target) ? targetElement.target : targetElement;
                    this.button.innerHTML = target.innerHTML;
                    this.fireEvent('DxDropdown:update', {
                        target,
                        value: this.button.innerHTML
                    });
                    this.addActiveDropdownItem(target);
                }

                nextItem(e) {
                    const itemList = this.listbox.querySelectorAll('.dxDropdown__list-item-link:not(.dxDropdown__list-item-link--disabled)');

                    Array.prototype.forEach.call(itemList, (el, i) => {
                        if (e.target === el) {
                            if (i === itemList.length - 1) {
                                this.focusFirstItem();
                            } else {
                                itemList[i + 1].focus();
                            }
                        }
                    });
                }

                previousItem(e) {
                    const itemList = this.listbox.querySelectorAll('.dxDropdown__list-item-link:not(.dxDropdown__list-item-link--disabled)');

                    Array.prototype.forEach.call(itemList, (el, i) => {
                        if (e.target === el) {
                            if (i === 0) {
                                this.focusLastItem();
                            } else {
                                itemList[i - 1].focus();
                            }
                        }
                    });
                }

                focusFirstItem() {
                    const firstItem = this.listbox.querySelector('.dxDropdown__list-item-link:not(.dxDropdown__list-item-link--disabled)');

                    firstItem.focus();
                }

                focusLastItem() {
                    const itemList = this.listbox.querySelectorAll('.dxDropdown__list-item-link:not(.dxDropdown__list-item-link--disabled)');

                    if (itemList.length) {
                        itemList[itemList.length - 1].focus();
                    }
                }

                addActiveDropdownItem(el) {
                    const activeEl = this.element.querySelector('.dxDropdown__list-item-link--active:not(.dxDropdown__list-item-link--disabled)');

                    if (activeEl !== null) {
                        activeEl.classList.remove('dxDropdown__list-item-link--active');
                    }
                    el.classList.add('dxDropdown__list-item-link--active');
                }

                fireEvent(eventType, payload = {}) {
                    (0, _resources_dev_js_utils_index__WEBPACK_IMPORTED_MODULE_1__.eventTrigger)(this.element, eventType, payload);
                }


                getElement() {
                    return this.element;
                }

                DxDropdown(method, options = undefined) {
                    const fn = this[method];
                    return typeof fn === 'function' ? fn.bind(this, options)() : undefined;
                }
            }

            /***/
        }),
    /* 3 */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "KeyCode": () => (/* binding */ KeyCode)
                /* harmony export */
            });
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

            /***/
        }),
    /* 4 */
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
                /* harmony export */
            });
    /* harmony import */ var _browserDetection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
    /* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
            /* global appReadyTimer */




            const $navHeader = $('#header, .dxnav-header');
            const stickyNavigationEnabled = $navHeader.attr('data-nav-type') === 'sticky';
            const stickyNavigationTransitionPoint = 200;
            const templateCache = {};

            const googleMapStyles = [{
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
                stylers: [{
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
                const breakpoint = (0, _browserDetection__WEBPACK_IMPORTED_MODULE_0__.getBreakpointSize)();
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

                $('html, body').stop().animate({
                    scrollTop: position + yOffset
                },
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
                        if ($('head [name="accordionOnMobile"]').length && (0, _browserDetection__WEBPACK_IMPORTED_MODULE_0__.isBreakpointSmall)()) {
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
                                        location = location.offset().top -
                                            accordionHeader.outerHeight();
                                        element.css('display', '');
                                    } else {
                                        location = location.offset().top -
                                            accordionHeader.outerHeight();
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
                    nw = iw * r, // new prop. width
                    nh = ih * r, // new prop. height
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
                const defaultAdjust = ((0, _browserDetection__WEBPACK_IMPORTED_MODULE_0__.getBreakpointSize)() === 'small') ? 20 : 50;

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
                            .split("%>").join("p.push('") +
                        "');}return p.join('');");

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
                    const scrollToPos = displayToBottom ? element.offset().top - $(window).innerHeight() : (element.offset().top -
                        getStickyNavHeight());
                    $('html,body').animate({
                        scrollTop: scrollToPos
                    }, 800);
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
                    if (!selector.offsetParent || selector.offsetWidth === 0 ||
                        selector.offsetHeight === 0) {
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
                const event = new CustomEvent(eventType, {
                    detail,
                    bubbles
                });
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

                const {
                    children
                } = targetElement;
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

                const {
                    children
                } = targetElement;
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
                if (checkDeepLink(linkLocation)) {
                    event.preventDefault();
                }
            };

            /***/
        }),
    /* 5 */
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
                /* harmony export */
            });
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
                const {
                    userAgent
                } = navigator;
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

                const dims = {
                    width: test.offsetWidth,
                    height: test.offsetHeight
                };
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

            /***/
        }),
    /* 6 */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "getTwoLetterCountryCode": () => (/* binding */ getTwoLetterCountryCode),
    /* harmony export */   "resolveLongLatLocation": () => (/* binding */ resolveLongLatLocation),
    /* harmony export */   "resolveLongLatLocationWoosmap": () => (/* binding */ resolveLongLatLocationWoosmap),
    /* harmony export */   "getNativeGeoLocation": () => (/* binding */ getNativeGeoLocation),
    /* harmony export */   "getGeoLocation": () => (/* binding */ getGeoLocation)
                /* harmony export */
            });
    /* harmony import */ var _countryCodeMapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
    /* harmony import */ var _geolocationPersistManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);



            const googleMapsGeolocationAPIKey = 'AIzaSyAXwLJc64BMjGBcvfg1FwlRtJ7BXgAPBIA';
            const woosmapAPIKey = 'woos-dd262599-516b-3861-9df9-7e02f8f18ba3';

            const getTwoLetterCountryCode = (code) => {
                const mappedCode = _countryCodeMapping__WEBPACK_IMPORTED_MODULE_0__.countryCodeMapping.find(country => country[1] === code);
                return Array.isArray(mappedCode) ? mappedCode[0] : null;
            };

            const resolveLongLatLocation = (lat, lng, callback) => {
                $.ajax({
                    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${lat},${lng}&key=${googleMapsGeolocationAPIKey}&sensor=false`,
                    success: (gData) => {
                        if (gData.results.length > 0) {
                            const dataObject = {
                                longitude: lng,
                                latitude: lat
                            };

                            $.each(gData.results, (i, result) => {
                                // LRA-8949 - Change street_address to postal_code as street_address no longer appearing in google geocode data response
                                if (result.types[0] === 'postal_code') {
                                    dataObject.city = result.formatted_address;
                                }

                                if (result.types[0] === 'country') {
                                    dataObject.country_code = result.address_components[0].short_name;
                                    dataObject.country_name = result.address_components[0].long_name;
                                }

                                if (Array.isArray(result.types) && result.types.includes('locality')) {
                                    const locality = result.address_components.find(part => Array.isArray(part.types) && part.types.includes('locality'));
                                    if (locality) {
                                        dataObject.locality = locality.short_name;
                                    }
                                }
                            });

                            callback(dataObject);
                        }
                    }
                });
            };

            async function resolveLongLatLocationWoosmap(latitude, longitude, callback) {
                try {
                    const request = await fetch(`https://api.woosmap.com/address/geocode/json?&key=${woosmapAPIKey}&latlng=${latitude},${longitude}`);
                    const results = await request.json();
                    const result = results.results[0];
                    const dataObject = {
                        latitude,
                        longitude
                    };
                    dataObject.city = result.formatted_address;
                    dataObject.country_code = getTwoLetterCountryCode(result.address_components[1].short_name);
                    if (dataObject.country_code === null) {
                        resolveLongLatLocation(latitude, longitude, callback);
                        return;
                    }
                    dataObject.country_name = result.address_components[1].long_name;

                    const locality = result.address_components.find(part => Array.isArray(part.types) && part.types.includes('locality'));
                    if (locality) {
                        dataObject.locality = locality.short_name;
                    }

                    callback(dataObject);
                } catch (err) {
                    resolveLongLatLocation(latitude, longitude, callback);
                }
            }

            const getNativeGeoLocation = (callback, options = {
                useWoosmap: false
            }) => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((data) => {
                        const {
                            latitude,
                            longitude
                        } = data.coords;
                        if (options.useWoosmap) {
                            resolveLongLatLocationWoosmap(latitude, longitude, callback);
                        } else {
                            resolveLongLatLocation(latitude, longitude, callback);
                        }
                    }, () => {
                        callback({
                            error: 'Geo location permission denied.'
                        });
                    });
                }
            };

            const getGeoLocation = (callback, options = {
                useWoosmap: false
            }) => {
                const instance = new _geolocationPersistManager__WEBPACK_IMPORTED_MODULE_1__.GeolocationPersistManager(callback, options, navigator.geolocation, new _geolocationPersistManager__WEBPACK_IMPORTED_MODULE_1__.GeolocationCookiePersistence());
                instance.init()
                    .then((countryInformation) => {
                        callback(countryInformation);
                    })
                    .catch(() => {
                        // intentionally ignore error as Geolocation consent is expected to fail/rejected.
                    });
            };

            /***/
        }),
    /* 7 */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "countryCodeMapping": () => (/* binding */ countryCodeMapping)
                /* harmony export */
            });
            const countryCodeMapping = [
                ['AF', 'AFG'],
                ['AX', 'ALA'],
                ['AL', 'ALB'],
                ['DZ', 'DZA'],
                ['AS', 'ASM'],
                ['AD', 'AND'],
                ['AO', 'AGO'],
                ['AI', 'AIA'],
                ['AQ', 'ATA'],
                ['AG', 'ATG'],
                ['AR', 'ARG'],
                ['AM', 'ARM'],
                ['AW', 'ABW'],
                ['AU', 'AUS'],
                ['AT', 'AUT'],
                ['AZ', 'AZE'],
                ['BS', 'BHS'],
                ['BH', 'BHR'],
                ['BD', 'BGD'],
                ['BB', 'BRB'],
                ['BY', 'BLR'],
                ['BE', 'BEL'],
                ['BZ', 'BLZ'],
                ['BJ', 'BEN'],
                ['BM', 'BMU'],
                ['BT', 'BTN'],
                ['BO', 'BOL'],
                ['BQ', 'BES'],
                ['BA', 'BIH'],
                ['BW', 'BWA'],
                ['BV', 'BVT'],
                ['BR', 'BRA'],
                ['IO', 'IOT'],
                ['BN', 'BRN'],
                ['BG', 'BGR'],
                ['BF', 'BFA'],
                ['BI', 'BDI'],
                ['CV', 'CPV'],
                ['KH', 'KHM'],
                ['CM', 'CMR'],
                ['CA', 'CAN'],
                ['KY', 'CYM'],
                ['CF', 'CAF'],
                ['TD', 'TCD'],
                ['CL', 'CHL'],
                ['CN', 'CHN'],
                ['CX', 'CXR'],
                ['CC', 'CCK'],
                ['CO', 'COL'],
                ['KM', 'COM'],
                ['CG', 'COG'],
                ['CD', 'COD'],
                ['CK', 'COK'],
                ['CR', 'CRI'],
                ['CI', 'CIV'],
                ['HR', 'HRV'],
                ['CU', 'CUB'],
                ['CW', 'CUW'],
                ['CY', 'CYP'],
                ['CZ', 'CZE'],
                ['DK', 'DNK'],
                ['DJ', 'DJI'],
                ['DM', 'DMA'],
                ['DO', 'DOM'],
                ['EC', 'ECU'],
                ['EG', 'EGY'],
                ['SV', 'SLV'],
                ['GQ', 'GNQ'],
                ['ER', 'ERI'],
                ['EE', 'EST'],
                ['SZ', 'SWZ'],
                ['ET', 'ETH'],
                ['FK', 'FLK'],
                ['FO', 'FRO'],
                ['FJ', 'FJI'],
                ['FI', 'FIN'],
                ['FR', 'FRA'],
                ['GF', 'GUF'],
                ['PF', 'PYF'],
                ['TF', 'ATF'],
                ['GA', 'GAB'],
                ['GM', 'GMB'],
                ['GE', 'GEO'],
                ['DE', 'DEU'],
                ['GH', 'GHA'],
                ['GI', 'GIB'],
                ['GR', 'GRC'],
                ['GL', 'GRL'],
                ['GD', 'GRD'],
                ['GP', 'GLP'],
                ['GU', 'GUM'],
                ['GT', 'GTM'],
                ['GG', 'GGY'],
                ['GN', 'GIN'],
                ['GW', 'GNB'],
                ['GY', 'GUY'],
                ['HT', 'HTI'],
                ['HM', 'HMD'],
                ['VA', 'VAT'],
                ['HN', 'HND'],
                ['HK', 'HKG'],
                ['HU', 'HUN'],
                ['IS', 'ISL'],
                ['IN', 'IND'],
                ['ID', 'IDN'],
                ['IR', 'IRN'],
                ['IQ', 'IRQ'],
                ['IE', 'IRL'],
                ['IM', 'IMN'],
                ['IL', 'ISR'],
                ['IT', 'ITA'],
                ['JM', 'JAM'],
                ['JP', 'JPN'],
                ['JE', 'JEY'],
                ['JO', 'JOR'],
                ['KZ', 'KAZ'],
                ['KE', 'KEN'],
                ['KI', 'KIR'],
                ['KP', 'PRK'],
                ['KR', 'KOR'],
                ['KW', 'KWT'],
                ['KG', 'KGZ'],
                ['LA', 'LAO'],
                ['LV', 'LVA'],
                ['LB', 'LBN'],
                ['LS', 'LSO'],
                ['LR', 'LBR'],
                ['LY', 'LBY'],
                ['LI', 'LIE'],
                ['LT', 'LTU'],
                ['LU', 'LUX'],
                ['MO', 'MAC'],
                ['MG', 'MDG'],
                ['MW', 'MWI'],
                ['MY', 'MYS'],
                ['MV', 'MDV'],
                ['ML', 'MLI'],
                ['MT', 'MLT'],
                ['MH', 'MHL'],
                ['MQ', 'MTQ'],
                ['MR', 'MRT'],
                ['MU', 'MUS'],
                ['YT', 'MYT'],
                ['MX', 'MEX'],
                ['FM', 'FSM'],
                ['MD', 'MDA'],
                ['MC', 'MCO'],
                ['MN', 'MNG'],
                ['ME', 'MNE'],
                ['MS', 'MSR'],
                ['MA', 'MAR'],
                ['MZ', 'MOZ'],
                ['MM', 'MMR'],
                ['NA', 'NAM'],
                ['NR', 'NRU'],
                ['NP', 'NPL'],
                ['NL', 'NLD'],
                ['NC', 'NCL'],
                ['NZ', 'NZL'],
                ['NI', 'NIC'],
                ['NE', 'NER'],
                ['NG', 'NGA'],
                ['NU', 'NIU'],
                ['NF', 'NFK'],
                ['MK', 'MKD'],
                ['MP', 'MNP'],
                ['NO', 'NOR'],
                ['OM', 'OMN'],
                ['PK', 'PAK'],
                ['PW', 'PLW'],
                ['PS', 'PSE'],
                ['PA', 'PAN'],
                ['PG', 'PNG'],
                ['PY', 'PRY'],
                ['PE', 'PER'],
                ['PH', 'PHL'],
                ['PN', 'PCN'],
                ['PL', 'POL'],
                ['PT', 'PRT'],
                ['PR', 'PRI'],
                ['QA', 'QAT'],
                ['RE', 'REU'],
                ['RO', 'ROU'],
                ['RU', 'RUS'],
                ['RW', 'RWA'],
                ['BL', 'BLM'],
                ['SH', 'SHN'],
                ['KN', 'KNA'],
                ['LC', 'LCA'],
                ['MF', 'MAF'],
                ['PM', 'SPM'],
                ['VC', 'VCT'],
                ['WS', 'WSM'],
                ['SM', 'SMR'],
                ['ST', 'STP'],
                ['SA', 'SAU'],
                ['SN', 'SEN'],
                ['RS', 'SRB'],
                ['SC', 'SYC'],
                ['SL', 'SLE'],
                ['SG', 'SGP'],
                ['SX', 'SXM'],
                ['SK', 'SVK'],
                ['SI', 'SVN'],
                ['SB', 'SLB'],
                ['SO', 'SOM'],
                ['ZA', 'ZAF'],
                ['GS', 'SGS'],
                ['SS', 'SSD'],
                ['ES', 'ESP'],
                ['LK', 'LKA'],
                ['SD', 'SDN'],
                ['SR', 'SUR'],
                ['SJ', 'SJM'],
                ['SE', 'SWE'],
                ['CH', 'CHE'],
                ['SY', 'SYR'],
                ['TW', 'TWN'],
                ['TJ', 'TJK'],
                ['TZ', 'TZA'],
                ['TH', 'THA'],
                ['TL', 'TLS'],
                ['TG', 'TGO'],
                ['TK', 'TKL'],
                ['TO', 'TON'],
                ['TT', 'TTO'],
                ['TN', 'TUN'],
                ['TR', 'TUR'],
                ['TM', 'TKM'],
                ['TC', 'TCA'],
                ['TV', 'TUV'],
                ['UG', 'UGA'],
                ['UA', 'UKR'],
                ['AE', 'ARE'],
                ['GB', 'GBR'],
                ['US', 'USA'],
                ['UM', 'UMI'],
                ['UY', 'URY'],
                ['UZ', 'UZB'],
                ['VU', 'VUT'],
                ['VE', 'VEN'],
                ['VN', 'VNM'],
                ['VG', 'VGB'],
                ['VI', 'VIR'],
                ['WF', 'WLF'],
                ['EH', 'ESH'],
                ['YE', 'YEM'],
                ['ZM', 'ZMB'],
                ['ZW', 'ZWE'],
                ['TY', 'PYF'],
                ['CYL', 'CYP'],
                ['XK', 'UNK'],
                ['AN', 'ANT']
            ];

            /***/
        }),
    /* 8 */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "GeolocationCookiePersistence": () => (/* binding */ GeolocationCookiePersistence),
    /* harmony export */   "GeolocationPersistManager": () => (/* binding */ GeolocationPersistManager)
                /* harmony export */
            });
    /* harmony import */ var _cookieManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
    /* harmony import */ var _checkCookieConsent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
    /* harmony import */ var _geolocationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);




            class GeolocationCookiePersistence {
                constructor() {
                    this.cookieName = 'JLR_UserLocation';
                    this.cookieDays = 30;
                    this.cookieConsentCategories = ['functional'];
                    this.sep = '|';
                }

                hasLocation() {
                    return (0, _cookieManager__WEBPACK_IMPORTED_MODULE_0__.checkForCookie)(this.cookieName);
                }

                getLocation() {
                    const [locality, countryCode] = (0, _cookieManager__WEBPACK_IMPORTED_MODULE_0__.readCookie)(this.cookieName).split(this.sep);

                    return {
                        locality,
                        country_code: countryCode
                    };
                }

                /** *
                 * Check if user has given consent to use cookies then save user locality (city) and iso2 country code into the cookie.
                 *
                 * @param {geolocationCountryInfo} countryInformation
                 */
                save(countryInformation) {
                    this.waitForConsent()
                        .then(() => {
                            (0, _cookieManager__WEBPACK_IMPORTED_MODULE_0__.createCookie)(this.cookieName, `${countryInformation.locality}${this.sep}${countryInformation.country_code}`, this.cookieDays);
                        })
                        .catch(() => {
                            // discard - as user can deny consent.
                        });
                }

                waitForConsent() {
                    return new Promise((resolve) => {
                        const consentGiven = () => !!(0, _checkCookieConsent__WEBPACK_IMPORTED_MODULE_1__.checkCookieConsent)(null, this.cookieConsentCategories);

                        if (consentGiven()) {
                            return resolve(true);
                        }

                        return (0, _checkCookieConsent__WEBPACK_IMPORTED_MODULE_1__.cookieConsentChangeHandler)(() => {
                            if (consentGiven()) {
                                resolve(true);
                            }
                        });
                    });
                }
            }

            class GeolocationPersistManager {
                /**
                 *
                 * @param {Function} callback
                 * @param {Object} options
                 * @param {Geolocation} nativeGeolocation
                 * @param {GeolocationCookiePersistence} persistence
                 */
                constructor(callback, options, nativeGeolocation, persistence) {
                    this.callback = callback;
                    this.options = options;
                    this.nativeGeolocation = nativeGeolocation;
                    this.persistence = persistence;
                }

                async init() {
                    if (this.persistence.hasLocation()) {
                        return this.persistence.getLocation();
                    }

                    if (this.hasNotGeolocation()) {
                        throw new Error('Geolocation is not enabled');
                    }

                    const countryInformation = await this.reverseGeocode();
                    this.persistence.save(countryInformation);

                    return countryInformation;
                }

                hasGeolocation() {
                    return this.nativeGeolocation;
                }

                hasNotGeolocation() {
                    return !this.hasGeolocation();
                }

                /** *
                 * Reverse Geocode given lat/lng
                 *
                 * @return {Promise<geolocationCountryInfo>}
                 */
                reverseGeocode() {
                    return new Promise(async (resolve) => {
                        const {
                            coords: {
                                latitude,
                                longitude
                            }
                        } = await this.getCoordinates();
                        const api = this.isWoosMapEnabled() ? _geolocationManager__WEBPACK_IMPORTED_MODULE_2__.resolveLongLatLocationWoosmap : _geolocationManager__WEBPACK_IMPORTED_MODULE_2__.resolveLongLatLocation;

                        await api(latitude, longitude, resolve);
                    });
                }

                getCoordinates() {
                    return new Promise((resolve, reject) => {
                        this.nativeGeolocation.getCurrentPosition(resolve, reject);
                    });
                }

                isWoosMapEnabled() {
                    const {
                        useWoosmap
                    } = this.options;
                    return !!useWoosmap;
                }
            }

            /***/
        }),
    /* 9 */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "readCookie": () => (/* binding */ readCookie),
    /* harmony export */   "checkForCookie": () => (/* binding */ checkForCookie),
    /* harmony export */   "getCookieRootDomain": () => (/* binding */ getCookieRootDomain),
    /* harmony export */   "getCookieExpiryByDays": () => (/* binding */ getCookieExpiryByDays),
    /* harmony export */   "createCookie": () => (/* binding */ createCookie),
    /* harmony export */   "createCookieExternally": () => (/* binding */ createCookieExternally),
    /* harmony export */   "deleteCookie": () => (/* binding */ deleteCookie)
                /* harmony export */
            });
            const readCookie = (name) => {
                const cookieArray = document.cookie.split(';');

                if (cookieArray.length < 1) {
                    return null;
                }

                for (let i = 0; i < cookieArray.length; i += 1) {
                    const cookieItem = cookieArray[i].split('=');
                    if (cookieItem[0].replace(/\s/g, '') === name) {
                        return cookieItem[1];
                    }
                }
                return null;
            };

            const checkForCookie = (name) => {
                return readCookie(name) !== null;
            };

            const getCookieRootDomain = (host = document.location.hostname) => {
                const domain = host.replace('www.', '');

                return `; domain=.${domain}`;
            };

            const getCookieExpiryByDays = (days) => {
                if (!days) {
                    return '';
                }

                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

                return `; expires=${date.toGMTString()}`;
            };

            const createCookie = (name, value, days, appendDomain = false) => {
                const expires = getCookieExpiryByDays(days);
                const domain = appendDomain ? getCookieRootDomain() : '';

                document.cookie = `${name}=${value}${expires}${domain}; path=/`;
            };

            const createCookieExternally = (name, value, days, appendDomain = false) => {
                const expires = getCookieExpiryByDays(days);
                const domain = appendDomain ? getCookieRootDomain() : '';
                const cookieValue = `${name}=${value}${expires}${domain}; SameSite=None; Secure; path=/`;

                document.cookie = cookieValue;
                return cookieValue;
            };

            const deleteCookie = (name) => {
                createCookie(name, '', -1);
            };

            /***/
        }),
    /* 10 */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "checkForConsentManager": () => (/* binding */ checkForConsentManager),
    /* harmony export */   "checkForDoNotSellLink": () => (/* binding */ checkForDoNotSellLink),
    /* harmony export */   "checkCookieConsent": () => (/* binding */ checkCookieConsent),
    /* harmony export */   "cookieConsentChangeHandler": () => (/* binding */ cookieConsentChangeHandler)
                /* harmony export */
            });
    /* harmony import */ var _cookieManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


            // Check if all required categories exist in the user's selected cookie categories array
            const checkForCategoryMatches = (userCategories, requiredCategories) => requiredCategories.every(v => userCategories.includes(v));

            const getUserCookieCategories = (cookie) => {
                // rewrite the old marketing & advertising category name to the new marketing - this is a temporary fix pending proper CMS category management
                const cookieUpdated = cookie.replace('marketing & advertising', 'marketing');
                return cookieUpdated.split(',');
            };

            // check whether the site uses a consent manager (Evidon/Trust Arc)
            const checkForConsentManager = () => {
                const consent = window.jlr_consent;
                if (!consent || !consent.manager || consent.manager === 'none') {
                    return false;
                }
                return true;
            };

            // checks for the existence of the Trust Arc specific "do not sell my information" link
            const checkForDoNotSellLink = () => {
                if (!document.querySelector('.cmp_footerNav__donotselldata')) {
                    return false;
                }
                const cookie = (0, _cookieManager__WEBPACK_IMPORTED_MODULE_0__.readCookie)('notice_behavior');
                if (cookie && cookie === 'implied,us') {
                    return true;
                }
                return false;
            };

            // Check if a consent cookie exists for a specific cookie category(s) (or consent exists for all cookies)
            // or if the market has a consent opt out for the specific cookie
            const checkCookieConsent = (dataAttr, categories) => {
                const matchCategories = Array.isArray(categories) ? categories : [categories];
                const consentOptOut = document.querySelector(`[${dataAttr}]`) && document.querySelector(`[${dataAttr}]`).getAttribute(dataAttr);
                if (consentOptOut && consentOptOut.toLowerCase() === 'true') {
                    return true;
                }
                const cookie = (0, _cookieManager__WEBPACK_IMPORTED_MODULE_0__.readCookie)('consent-categories');
                const cookieCategories = cookie ? getUserCookieCategories(cookie) : false;
                if (cookieCategories && checkForCategoryMatches(cookieCategories, matchCategories)) {
                    return true;
                }
                if (cookieCategories && cookieCategories.includes('all')) {
                    return true;
                }
                return false;
            };

            // fire custom handler method when user's cookie consent changes
            const cookieConsentChangeHandler = (consentCallback) => {
                window.addEventListener('cookie_priorConsentCallback', consentCallback);
                window.addEventListener('cookie_closeCallback', consentCallback);
                window.addEventListener('cookie_consentWithdrawnCallback', consentCallback);
                window.addEventListener('cookie_consentDeclinedCallback', consentCallback);
            };

            /***/
        }),
    /* 11 */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "checkForConsentManager": () => (/* binding */ checkForConsentManager),
    /* harmony export */   "checkForDoNotSellLink": () => (/* binding */ checkForDoNotSellLink),
    /* harmony export */   "checkCookieConsent": () => (/* binding */ checkCookieConsent),
    /* harmony export */   "cookieConsentChangeHandler": () => (/* binding */ cookieConsentChangeHandler)
                /* harmony export */
            });
    /* harmony import */ var _cookieManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


            // Check if all required categories exist in the user's selected cookie categories array
            const checkForCategoryMatches = (userCategories, requiredCategories) => requiredCategories.every(v => userCategories.includes(v));

            const getUserCookieCategories = (cookie) => {
                // rewrite the old marketing & advertising category name to the new marketing - this is a temporary fix pending proper CMS category management
                const cookieUpdated = cookie.replace('marketing & advertising', 'marketing');
                return cookieUpdated.split(',');
            };

            // check whether the site uses a consent manager (Evidon/Trust Arc)
            const checkForConsentManager = () => {
                const consent = window.jlr_consent;
                if (!consent || !consent.manager || consent.manager === 'none') {
                    return false;
                }
                return true;
            };

            // checks for the existence of the Trust Arc specific "do not sell my information" link
            const checkForDoNotSellLink = () => {
                if (!document.querySelector('.cmp_footerNav__donotselldata')) {
                    return false;
                }
                const cookie = (0, _cookieManager__WEBPACK_IMPORTED_MODULE_0__.readCookie)('notice_behavior');
                if (cookie && cookie === 'implied,us') {
                    return true;
                }
                return false;
            };

            // Check if a consent cookie exists for a specific cookie category(s) (or consent exists for all cookies)
            // or if the market has a consent opt out for the specific cookie
            const checkCookieConsent = (dataAttr, categories) => {
                const matchCategories = Array.isArray(categories) ? categories : [categories];
                const consentOptOut = document.querySelector(`[${dataAttr}]`) && document.querySelector(`[${dataAttr}]`).getAttribute(dataAttr);
                if (consentOptOut && consentOptOut.toLowerCase() === 'true') {
                    return true;
                }
                const cookie = (0, _cookieManager__WEBPACK_IMPORTED_MODULE_0__.readCookie)('consent-categories');
                const cookieCategories = cookie ? getUserCookieCategories(cookie) : false;
                if (cookieCategories && checkForCategoryMatches(cookieCategories, matchCategories)) {
                    return true;
                }
                if (cookieCategories && cookieCategories.includes('all')) {
                    return true;
                }
                return false;
            };

            // fire custom handler method when user's cookie consent changes
            const cookieConsentChangeHandler = (consentCallback) => {
                window.addEventListener('cookie_priorConsentCallback', consentCallback);
                window.addEventListener('cookie_closeCallback', consentCallback);
                window.addEventListener('cookie_consentWithdrawnCallback', consentCallback);
                window.addEventListener('cookie_consentDeclinedCallback', consentCallback);
            };


            /***/
        }),
    /* 12 */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "readCookie": () => (/* binding */ readCookie),
    /* harmony export */   "checkForCookie": () => (/* binding */ checkForCookie),
    /* harmony export */   "getCookieRootDomain": () => (/* binding */ getCookieRootDomain),
    /* harmony export */   "getCookieExpiryByDays": () => (/* binding */ getCookieExpiryByDays),
    /* harmony export */   "createCookie": () => (/* binding */ createCookie),
    /* harmony export */   "createCookieExternally": () => (/* binding */ createCookieExternally),
    /* harmony export */   "deleteCookie": () => (/* binding */ deleteCookie)
                /* harmony export */
            });
            const readCookie = (name) => {
                const cookieArray = document.cookie.split(';');

                if (cookieArray.length < 1) {
                    return null;
                }

                for (let i = 0; i < cookieArray.length; i += 1) {
                    const cookieItem = cookieArray[i].split('=');
                    if (cookieItem[0].replace(/\s/g, '') === name) {
                        return cookieItem[1];
                    }
                }
                return null;
            };

            const checkForCookie = (name) => {
                return readCookie(name) !== null;
            };

            const getCookieRootDomain = (host = document.location.hostname) => {
                const domain = host.replace('www.', '');

                return `; domain=.${domain}`;
            };

            const getCookieExpiryByDays = (days) => {
                if (!days) {
                    return '';
                }

                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

                return `; expires=${date.toGMTString()}`;
            };

            const createCookie = (name, value, days, appendDomain = false) => {
                const expires = getCookieExpiryByDays(days);
                const domain = appendDomain ? getCookieRootDomain() : '';

                document.cookie = `${name}=${value}${expires}${domain}; path=/`;
            };

            const createCookieExternally = (name, value, days, appendDomain = false) => {
                const expires = getCookieExpiryByDays(days);
                const domain = appendDomain ? getCookieRootDomain() : '';
                const cookieValue = `${name}=${value}${expires}${domain}; SameSite=None; Secure; path=/`;

                document.cookie = cookieValue;
                return cookieValue;
            };

            const deleteCookie = (name) => {
                createCookie(name, '', -1);
            };


            /***/
        })
    /******/]);
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		if (__webpack_module_cache__[moduleId]) {
    /******/ 			return __webpack_module_cache__[moduleId].exports;
            /******/
        }
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
    /******/ 			// no module.id needed
    /******/ 			// no module.loaded needed
    /******/ 			exports: {}
            /******/
        };
    /******/
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	(() => {
    /******/ 		// define getter functions for harmony exports
    /******/ 		__webpack_require__.d = (exports, definition) => {
    /******/ 			for (var key in definition) {
    /******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	(() => {
    /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
    })();
    /******/
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	(() => {
    /******/ 		// define __esModule on exports
    /******/ 		__webpack_require__.r = (exports) => {
    /******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
            }
    /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
            /******/
        };
        /******/
    })();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
        __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _components_MarketSelector_js_MarketSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
    /* harmony import */ var _utils_checkCookieConsent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
        /* global jQuery */

        /*!
         * FooterNav
         * Copyright 2014: Connect Group. All rights reserved.
        
        */

        // import the utility functions at the top of the file


        (($, window, document) => {
         console.log("toggle1");
            const FooterNav = {
                _defaults: {},
                marketSelector: null,


                init() {
                    $('.toggle', this.$element).unbind('click').click(() => {
                console.log("toggle2");
                        const element = $(this.currentTarget);
                        const $nextUL = element.next('ul');
                        const $icon = element.children('i');
                        $nextUL.slideToggle();
                        element.toggleClass('active');
                        $icon.toggleClass('active');
                        return false;
                    });

                    this._initHygieneToggleEvents();

                    $(window).resize(() => {
                        this._setFooterNavPadding();
                    });

                    this._setFooterNavPadding();

                    this._initMobileLinks();
                    (0, _utils_checkCookieConsent__WEBPACK_IMPORTED_MODULE_1__.cookieConsentChangeHandler)(() => {
                        const consentManager = (0, _utils_checkCookieConsent__WEBPACK_IMPORTED_MODULE_1__.checkForConsentManager)();
                        const doNotSellLink = (0, _utils_checkCookieConsent__WEBPACK_IMPORTED_MODULE_1__.checkForDoNotSellLink)();
                        this._reInitMobileLinks(consentManager, doNotSellLink);
                    });
                },

                _initHygieneToggleEvents() {
                    const $toggleHandle = $('.toggleHandle', this.$element);

                    $toggleHandle.on('click', (event) => {
                                     console.log("toggle");
                        event.preventDefault();
                        event.stopPropagation();

                        this._loadMarketSelector();
                        const element = $(event.currentTarget);
                        const $parentNode = element.parent();

                        if ($parentNode.hasClass('open')) {
                            $toggleHandle.parent().removeClass('open');
                        } else {
                            $toggleHandle.parent().removeClass('open');
                            $parentNode.addClass('open');
                            const igniteBar = $('.IgniteBarV1');
                            if (igniteBar.hasClass('open')) {
                                igniteBar.removeClass('open');
                            }
                        }
                    });

                    $(document).on('click tap', (event) => {
                        const $openParent = $(event.target).parents('li.open').length;

                        if ($openParent < 1) {
                            $toggleHandle.parent().removeClass('open');
                        }
                    });

                    this._addKeyboardNavigation();
                },

                _loadMarketSelector() {
                    const href = $('.cmp_footerNav__selectMarket a', this.$element).attr('href');
                    const targetElement = '.MarketSelector__dropdowns-container';

                    // if market selector not authored, return here to avoid load() error
                    if (typeof href === 'undefined') {
                        return;
                    }

                    const $marketSelectorContainer = $('.cmp_footerNav__marketSelectorContainer', this.$element);

                    $marketSelectorContainer.load(`${href} ${targetElement}`, () => {
                        this.marketSelector = new _components_MarketSelector_js_MarketSelector__WEBPACK_IMPORTED_MODULE_0__.default($marketSelectorContainer.get(0), { geoLocate: false });
                        $('.MarketSelector__continue-button', this.$element).removeClass('plwsLight');
                    });
                },

                // Set footer nav padding to accommodate height of absolutely positioned hygiene links - also apply this to the bottom of the marketselectorelement
                _setFooterNavPadding() {
                    const hygieneLinksHeight = $('.cmp_footerNav__hygieneLinks').height();
                    const $marketSelectorElement = $('.cmp_footerNav__marketSelectorContainer', this.$element);

                    $('.cmp_footerNav').css('padding-bottom', hygieneLinksHeight);
                    $marketSelectorElement.css('bottom', hygieneLinksHeight);
                },

                _initMobileLinks() {
                    const $keyLinks = $('.cmp_footerNav__key-links-list > li', this.element).clone();
                    const doNotSellLinkElm = $keyLinks.find('.cmp_footerNav__donotselldata').parent();
                    const consentManagerElem = $keyLinks.find('.cmp_footerNav__trustarc-link').parent();
                    if (doNotSellLinkElm.length > 0) {
                        $keyLinks.splice($keyLinks.index(doNotSellLinkElm[0]), 1);
                    }
                    if (consentManagerElem.length > 0) {
                        $keyLinks.splice($keyLinks.index(consentManagerElem[0]), 1);
                    }
                    this._createKeyLinks($keyLinks);
                },

                _reInitMobileLinks(consentManager, doNotSellLink) {
                    const $keyLinks = $('.cmp_footerNav__key-links-list > li', this.element).clone();
                    // Check & Execute Logic for Cookie Prefrences.
                    if (consentManager) {
                        const consentManagerElem = $keyLinks.find('.cmp_footerNav__trustarc-link').removeAttr('id style').parent();

                        if (consentManagerElem.length > 0) {
                            consentManagerElem.find('script').remove();
                            consentManagerElem.removeAttr('id');
                            const link = consentManagerElem.find('a');
                            $(link).on('click', (e) => {
                                e.preventDefault();
                                if (window.truste) {
                                    window.truste.eu.clickListener();
                                }
                            });

                            this._checkLinkExists(consentManager, consentManagerElem, $keyLinks);
                        }
                    } else {
                        const consentManagerElem = $keyLinks.find('.cmp_footerNav__trustarc-link').parent();
                        if (consentManagerElem.length > 0) {
                            this._checkLinkExists(consentManager, consentManagerElem, $keyLinks);
                        }
                    }

                    // Check & Execute Logic for Do Not Sell Data.
                    const doNotSellLinkElm = $keyLinks.find('.cmp_footerNav__donotselldata').parent();
                    if (doNotSellLinkElm.length > 0) {
                        this._checkLinkExists(doNotSellLink, doNotSellLinkElm, $keyLinks);
                    }

                    this._createKeyLinks($keyLinks);
                },

                _checkLinkExists(linkExists, $linkEl, $keyLinksElArray) {
                    if (linkExists) {
                        $keyLinksElArray.splice($keyLinksElArray.index($linkEl[0]), 1);
                        $keyLinksElArray.splice(0, 0, $linkEl[0]);
                    } else {
                        $keyLinksElArray.splice($keyLinksElArray.index($linkEl[0]), 1);
                    }
                },

                _createKeyLinks(listItemArray) {
                    const FooterNavElem = $('.cmp_footerNav');
                    const listItemElems = listItemArray;

                    // HTML Builder
                    const container = $('#mobileKeyLinks');
                    const primaryLinkHTML = $('<ul class="cmp_footerNav__primary-link-list"></ul>');
                    const secondaryLinkHTML = $('<ul class="cmp_footerNav__secondary-link-list"></ul>');
                    const showMoreBtnHTML = $(`
            <button class="button-tertiary cmp_footerNav__show-more-btn">
              <span>
                ${FooterNavElem.data('show-more')}
              </span>
            </button>
          `);
                    const showLessBtnHTML = $(`
            <button class="button-tertiary cmp_footerNav__show-less-btn cmp_footerNav__show-less-btn--hide">
              <span>
                ${FooterNavElem.data('show-less')}
              </span>
            </button>
          `);

                    container.empty();

                    if (listItemElems.length > 5) {
                        const linksPrimary = listItemElems.slice(0, 4);
                        const linksSecondary = listItemElems.slice(4, listItemElems.length);

                        container.append(primaryLinkHTML);
                        linksPrimary.each((index, value) => { primaryLinkHTML.append(value); });
                        container.append(secondaryLinkHTML);
                        linksSecondary.each((index, value) => { secondaryLinkHTML.append(value); });
                        container.append(showMoreBtnHTML);
                        container.append(showLessBtnHTML);

                        showMoreBtnHTML.on('click keypress', (e) => {
                            e.preventDefault();
                            secondaryLinkHTML.slideToggle(300);
                            showMoreBtnHTML.addClass('cmp_footerNav__show-more-btn--hide');
                            showLessBtnHTML.removeClass('cmp_footerNav__show-less-btn--hide');
                            if (e.keyCode === 13) {
                                $('.cmp_footerNav__secondary-link-list').find('li').first().find('a')
                                    .focus();
                            }
                        });
                        showLessBtnHTML.on('click', (e) => {
                            e.preventDefault();
                            secondaryLinkHTML.slideToggle(300);
                            showMoreBtnHTML.removeClass('cmp_footerNav__show-more-btn--hide');
                            showLessBtnHTML.addClass('cmp_footerNav__show-less-btn--hide');
                        });
                    } else {
                        const linksPrimary = listItemElems;
                        container.append(primaryLinkHTML);
                        linksPrimary.each((index, value) => { primaryLinkHTML.append(value); });
                    }
                },

                _addKeyboardNavigation() {
                    const $toggleHandle = $('.toggleHandle', this.$element);
                    const $parentElement = $toggleHandle.parent();
                    const $marketSelectorElement = $parentElement.find('.cmp_footerNav__marketSelectorContainer');

                    $toggleHandle.keydown((event) => {
                        const $elements = $marketSelectorElement.find('input, textarea, button, a, .focusable');
                        const isOpen = $parentElement.hasClass('open');

                        if (isOpen && event.keyCode === 38) { // Up
                            $elements.first().focus();
                            return false; // Don't scroll
                        }
                        return true;
                    });
                }
            };

            setTimeout(function(){

jQuery.createComponent('FooterNav', FooterNav);
$('.cmp_footerNav').FooterNav();

}, 2000);
        })(jQuery, window, document);

    })();

    /******/
})()
    ;