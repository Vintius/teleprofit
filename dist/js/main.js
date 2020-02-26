/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/contactUs/contactUs.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/contactUs/contactUs.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_inputmask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery.inputmask */ "./node_modules/inputmask/dist/inputmask/jquery.inputmask.js");
/* harmony import */ var jquery_inputmask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_inputmask__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-contact-us-tel').inputmask("+7(999)999-99-99");
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var $window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window),
    $fullHeightElem = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-full-window-height');
$window.on('load resize', function () {
  var windowHeight = $window.height();
  $fullHeightElem.height(windowHeight);
});

/***/ }),

/***/ "./src/blocks/modules/menu/menu.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/menu/menu.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menuTrigger_menuTrigger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menuTrigger/menuTrigger.js */ "./src/blocks/modules/menuTrigger/menuTrigger.js");


var $filteredBlocks = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body>*').filter('div').add('header').add('footer').not('.js-menu').not('.js-menu-trigger'),
    $menuItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-menu-item');
$menuItem.on('click', function (e) {
  e.preventDefault();
  var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href'),
      $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target);

  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('is-active')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-menu-item.is-active').removeClass('is-active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('is-active');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
    scrollTop: $target.offset().top
  }, 700);
  Object(_menuTrigger_menuTrigger_js__WEBPACK_IMPORTED_MODULE_1__["toggleClasses"])();
});

var blockPositions = [],
    calculateBlockPositions = function calculateBlockPositions() {
  blockPositions = [];

  for (var i = 0; i < $filteredBlocks.length; i++) {
    var blockTop = $filteredBlocks.eq(i).offset().top,
        blockBottom = blockTop + $filteredBlocks.eq(i).height(),
        position = [blockTop, blockBottom];
    blockPositions.push(position); // [[]]
  }
},
    checkActiveBlock = function checkActiveBlock() {
  var currentPos = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop(),
      $menuItemActive = $menuItem.filter('.is-active'),
      currentBlockId;

  for (var i = 0; i < blockPositions.length; i++) {
    if (currentPos >= blockPositions[i][0] && currentPos < blockPositions[i][1]) {
      currentBlockId = $filteredBlocks.eq(i).attr('id');
      $menuItemActive.removeClass('is-active');
      $menuItem.filter('[href = "#' + currentBlockId + '"]').addClass('is-active');
      break;
    }
  }
};

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load resize', function () {
  calculateBlockPositions();
  checkActiveBlock();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {
  checkActiveBlock();
});

/***/ }),

/***/ "./src/blocks/modules/menuTrigger/menuTrigger.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/menuTrigger/menuTrigger.js ***!
  \*******************************************************/
/*! exports provided: toggleClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClasses", function() { return toggleClasses; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

function toggleClasses() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-menu').toggleClass('menu--is-opened');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-menu-trigger').toggleClass('menuTrigger--is-opened');
}
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-menu-button').click(toggleClasses);

/***/ }),

/***/ "./src/blocks/modules/questions/questions.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/questions/questions.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-slider */ "./node_modules/slick-slider/slick/slick.js");
/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_slider__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-questions-slider').slick({
    infinite: true,
    // speed: 300,
    slidesToShow: 1,
    fade: true,
    nextArrow: '<button type="button" class="slick-next">СЛЕДУЮЩИЙ ВОПРОС</button>'
  });
});

/***/ }),

/***/ "./src/blocks/modules/samples/samples.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/samples/samples.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var $sliderSamples = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-samples-slider'),
    $sliderTabs = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-slider-tabs'),
    $tabslinks = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-slider-tablink');
$sliderTabs.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.js-samples-slider'
});
$sliderSamples.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.js-slider-tabs',
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  // variableWidth: true,
  // centerMode: true,
  focusOnSelect: true
}); //  Change(sync) slider to tablinks

$tabslinks.on('click', function () {
  var tabIndex = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.slick-slide').index();
  $sliderSamples.slick('slickGoTo', tabIndex);
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menuTrigger_menuTrigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/menuTrigger/menuTrigger */ "./src/blocks/modules/menuTrigger/menuTrigger.js");
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/menu/menu */ "./src/blocks/modules/menu/menu.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_questions_questions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/questions/questions */ "./src/blocks/modules/questions/questions.js");
/* harmony import */ var _modules_samples_samples__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/samples/samples */ "./src/blocks/modules/samples/samples.js");
/* harmony import */ var _modules_contactUs_contactUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/contactUs/contactUs */ "./src/blocks/modules/contactUs/contactUs.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map