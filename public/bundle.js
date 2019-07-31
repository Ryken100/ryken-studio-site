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
/******/ 	__webpack_require__.p = "/mnt/d/soft-repo/Dev/Web-projects/ryken-studio-site/public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js?sourceMap!./src/style/main.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib?sourceMap!./src/style/main.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  margin: 0px;\n  scroll-behavior: smooth; }\n\nnav {\n  top: 0px;\n  left: 0px;\n  position: fixed; }\n  nav div.navButton {\n    color: white;\n    height: 40px;\n    padding-top: 10px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-family: \"Montserrat\";\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: pointer;\n    min-width: 35px;\n    padding-left: 0px;\n    padding-right: 0px;\n    font-size: 10px; }\n    nav div.navButton.main span.text {\n      transition: 0.2s font-size linear; }\n      nav div.navButton.main span.text.show {\n        width: 100px;\n        font-size: 10px; }\n        @media (min-width: 100px) {\n          nav div.navButton.main span.text.show {\n            width: calc(100px + 50 * (100vw - 100px) / 900); } }\n        @media (min-width: 1000px) {\n          nav div.navButton.main span.text.show {\n            width: 150px; } }\n        @media (min-width: 100px) {\n          nav div.navButton.main span.text.show {\n            font-size: calc(10px + 8 * (100vw - 100px) / 500); } }\n        @media (min-width: 600px) {\n          nav div.navButton.main span.text.show {\n            font-size: 18px; } }\n      nav div.navButton.main span.text.hide {\n        font-size: 0px; }\n    nav div.navButton.main img.icon {\n      margin-left: -20px;\n      transition: 0.2s height linear;\n      margin-top: -6px; }\n      @media (min-width: 200px) {\n        nav div.navButton.main img.icon {\n          margin-top: calc(-6px + 6 * (100vw - 200px) / 800); } }\n      @media (min-width: 1000px) {\n        nav div.navButton.main img.icon {\n          margin-top: 0px; } }\n      nav div.navButton.main img.icon.show {\n        height: 20px; }\n        @media (min-width: 100px) {\n          nav div.navButton.main img.icon.show {\n            height: calc(20px + 70 * (100vw - 100px) / 900); } }\n        @media (min-width: 1000px) {\n          nav div.navButton.main img.icon.show {\n            height: 90px; } }\n      nav div.navButton.main img.icon.hide {\n        height: 0px; }\n    @media (min-width: 200px) {\n      nav div.navButton {\n        min-width: calc(35px + 65 * (100vw - 200px) / 400); } }\n    @media (min-width: 600px) {\n      nav div.navButton {\n        min-width: 100px; } }\n    @media (min-width: 200px) {\n      nav div.navButton {\n        padding-left: calc(0px + 25 * (100vw - 200px) / 400); } }\n    @media (min-width: 600px) {\n      nav div.navButton {\n        padding-left: 25px; } }\n    @media (min-width: 200px) {\n      nav div.navButton {\n        padding-right: calc(0px + 25 * (100vw - 200px) / 400); } }\n    @media (min-width: 600px) {\n      nav div.navButton {\n        padding-right: 25px; } }\n    @media (min-width: 100px) {\n      nav div.navButton {\n        font-size: calc(10px + 8 * (100vw - 100px) / 500); } }\n    @media (min-width: 600px) {\n      nav div.navButton {\n        font-size: 18px; } }\n    nav div.navButton:hover {\n      box-shadow: 0 4px 2px -2px white;\n      transition: 0.2s linear all; }\n\nnav,\n.contentShifter {\n  z-index: 1;\n  height: 50px;\n  width: calc(100% - 15px);\n  background-color: #55b3d0;\n  padding-top: 20px;\n  padding-left: 15px; }\n\nsection {\n  min-height: 40vh;\n  width: 100%;\n  color: white;\n  font-family: \"Montserrat\";\n  font-size: 1.2rem; }\n  section:nth-child(odd) {\n    background-color: #55b3d0; }\n  section:nth-child(even) {\n    background-color: #282828; }\n  section#myTube {\n    background-color: #282828; }\n  section#photoshader {\n    background-color: black; }\n  section#about {\n    background-color: #55b3d0; }\n\n.centered {\n  flex-wrap: wrap;\n  display: flex;\n  flex-direction: row;\n  margin: 0 auto; }\n\n.embla {\n  overflow: hidden; }\n\n.embla__container {\n  display: flex; }\n  .embla__container div[data-u=\"thumb\"] {\n    font-size: 16px;\n    margin: 10px; }\n    @media (min-width: 300px) {\n      .embla__container div[data-u=\"thumb\"] {\n        font-size: calc(16px + 8 * (100vw - 300px) / 1200); } }\n    @media (min-width: 1500px) {\n      .embla__container div[data-u=\"thumb\"] {\n        font-size: 24px; } }\n  .embla__container div img {\n    width: 70vw; }\n\n.embla__slide {\n  position: relative;\n  /* Needed if loop: true */\n  flex: 0 0 100%;\n  /* Choose any width */ }\n\nhr {\n  margin-top: 5vw;\n  color: white; }\n\n.darkHorizontalRule {\n  margin-top: 5vw;\n  width: 100%;\n  color: #282828;\n  box-shadow: 0px 0px 2px 1px #282828; }\n\nsection header > img {\n  width: 150px;\n  padding-top: 15vw;\n  padding-bottom: 15vw; }\n  @media (min-width: 200px) {\n    section header > img {\n      width: calc(150px + 650 * (100vw - 200px) / 800); } }\n  @media (min-width: 1000px) {\n    section header > img {\n      width: 800px; } }\n\nsection:not(#main) header {\n  padding-top: 15px; }\n  @media (min-width: 300px) {\n    section:not(#main) header {\n      padding-top: calc(15px + 105 * (100vw - 300px) / 500); } }\n  @media (min-width: 800px) {\n    section:not(#main) header {\n      padding-top: 120px; } }\n\nsection#main header {\n  padding-top: 15px; }\n  @media (min-width: 300px) {\n    section#main header {\n      padding-top: calc(15px + 185 * (100vw - 300px) / 500); } }\n  @media (min-width: 800px) {\n    section#main header {\n      padding-top: 200px; } }\n  section#main header img.logo {\n    padding-top: 0px;\n    padding-bottom: 0px; }\n\nsection header,\nsection article {\n  margin-left: 10px;\n  margin-right: 10px; }\n  @media (min-width: 500px) {\n    section header,\n    section article {\n      margin-left: calc(10px + 90 * (100vw - 500px) / 1000); } }\n  @media (min-width: 1500px) {\n    section header,\n    section article {\n      margin-left: 100px; } }\n  @media (min-width: 500px) {\n    section header,\n    section article {\n      margin-right: calc(10px + 90 * (100vw - 500px) / 1000); } }\n  @media (min-width: 1500px) {\n    section header,\n    section article {\n      margin-right: 100px; } }\n\nsection header + article {\n  font-size: 14px;\n  padding-bottom: 35px; }\n  @media (min-width: 300px) {\n    section header + article {\n      font-size: calc(14px + 6 * (100vw - 300px) / 500); } }\n  @media (min-width: 800px) {\n    section header + article {\n      font-size: 20px; } }\n\nsection header p {\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 25px; }\n  @media (min-width: 300px) {\n    section header p {\n      font-size: calc(20px + 28 * (100vw - 300px) / 500); } }\n  @media (min-width: 800px) {\n    section header p {\n      font-size: 48px; } }\n\nsection#totallynotanadvert {\n  width: 100%;\n  min-height: 5vw;\n  background-color: #55b3d0;\n  font-size: 1vw;\n  text-align: center; }\n\n.slider-leftArrow,\n.slider-rightArrow {\n  width: 120px;\n  height: 120px; }\n  @media (min-width: 200px) {\n    .slider-leftArrow,\n    .slider-rightArrow {\n      width: calc(120px + -70 * (100vw - 200px) / 800); } }\n  @media (min-width: 1000px) {\n    .slider-leftArrow,\n    .slider-rightArrow {\n      width: 50px; } }\n  @media (min-width: 200px) {\n    .slider-leftArrow,\n    .slider-rightArrow {\n      height: calc(120px + -70 * (100vw - 200px) / 800); } }\n  @media (min-width: 1000px) {\n    .slider-leftArrow,\n    .slider-rightArrow {\n      height: 50px; } }\n\nfooter {\n  background-color: #55b3d0;\n  width: 100%;\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n  padding-top: 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n  footer .contact {\n    font-weight: bolder; }\n  footer img,\n  footer svg,\n  footer a {\n    height: 60px;\n    margin: 8px; }\n    @media (min-width: 200px) {\n      footer img,\n      footer svg,\n      footer a {\n        height: calc(60px + -30 * (100vw - 200px) / 800); } }\n    @media (min-width: 1000px) {\n      footer img,\n      footer svg,\n      footer a {\n        height: 30px; } }\n  footer svg#patreonLogo {\n    overflow: hidden; }\n    footer svg#patreonLogo [data-color=\"1\"] {\n      fill: #f96854;\n      transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1); }\n    footer svg#patreonLogo [data-color=\"2\"] {\n      fill: #052d49;\n      transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1); }\n  footer div {\n    height: inherit; }\n  footer div:nth-child(2) {\n    display: flex;\n    justify-content: flex-end;\n    align-content: unset; }\n\n@media screen and (max-width: 300px) {\n  * {\n    transition: 0.1s all linear; }\n  div.navButton {\n    text-align: center;\n    display: block !important; }\n  .navButton:hover {\n    box-shadow: transparent; }\n  nav {\n    position: relative;\n    height: -webkit-min-content;\n    height: -moz-min-content;\n    height: min-content; }\n  .contentShifter {\n    height: 0px; } }\n\n@media screen and (max-width: 350px) {\n  footer {\n    display: block;\n    justify-content: center;\n    align-content: center; }\n    footer div {\n      width: 100%;\n      display: block; }\n    footer div:nth-child(3) {\n      display: block; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/embla-carousel/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/embla-carousel/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function Vector1D(value) {
  var state = {
    value: value
  };

  function get() {
    return state.value;
  }

  function set(v) {
    state.value = v.get();
    return self;
  }

  function add(v) {
    state.value += v.get();
    return self;
  }

  function subtract(v) {
    state.value -= v.get();
    return self;
  }

  function multiply(n) {
    state.value *= n;
    return self;
  }

  function divide(n) {
    state.value /= n;
    return self;
  }

  function setNumber(n) {
    state.value = n;
    return self;
  }

  function addNumber(n) {
    state.value += n;
    return self;
  }

  function subtractNumber(n) {
    state.value -= n;
    return self;
  }

  function magnitude() {
    return get();
  }

  function normalize() {
    var m = magnitude();
    if (m !== 0) divide(m);
    return self;
  }

  var self = {
    add: add,
    addNumber: addNumber,
    divide: divide,
    get: get,
    magnitude: magnitude,
    multiply: multiply,
    normalize: normalize,
    set: set,
    setNumber: setNumber,
    subtract: subtract,
    subtractNumber: subtractNumber
  };
  return Object.freeze(self);
}

exports.Vector1D = Vector1D;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var vector1d_1 = __webpack_require__(0);

function Direction(value) {
  var direction = vector1d_1.Vector1D(normalize(value));
  var get = direction.get;

  function normalize(n) {
    return n === 0 ? 0 : n / Math.abs(n);
  }

  function set(v) {
    var d = normalize(v.get());
    if (d !== 0) direction.setNumber(d);
    return self;
  }

  var self = {
    get: get,
    set: set
  };
  return Object.freeze(self);
}

exports.Direction = Direction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function rectWidth(node) {
  return node.getBoundingClientRect().width;
}

exports.rectWidth = rectWidth;

function map(value, iStart, iStop, oStart, oStop) {
  return oStart + (oStop - oStart) * ((value - iStart) / (iStop - iStart));
}

exports.map = map;

function arrayFromCollection(nodeList) {
  return Array.prototype.slice.call(nodeList);
}

exports.arrayFromCollection = arrayFromCollection;

function debounce(callback, time) {
  var timeout = {
    id: 0
  };
  return function () {
    window.clearTimeout(timeout.id);
    timeout.id = window.setTimeout(callback, time) || 0;
  };
}

exports.debounce = debounce;

function groupNumbers(array, size) {
  var groups = [];

  for (var i = 0; i < array.length; i += size) {
    groups.push(array.slice(i, i + size));
  }

  return groups;
}

exports.groupNumbers = groupNumbers;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function EventStore() {
  var state = {
    listeners: []
  };

  function add(node, type, handler) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    node.addEventListener(type, handler, options);
    state.listeners.push(function () {
      return node.removeEventListener(type, handler, options);
    });
    return self;
  }

  function removeAll() {
    state.listeners.filter(function (remove) {
      return remove();
    });
    return self;
  }

  var self = {
    add: add,
    removeAll: removeAll
  };
  return Object.freeze(self);
}

exports.EventStore = EventStore;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function Limit(params) {
  var min = params.min,
      max = params.max;
  var loopLimits = {
    max: min,
    min: max
  };
  var constrainLimits = {
    min: min,
    max: max
  };

  function reachedMin(n) {
    return n < min;
  }

  function reachedMax(n) {
    return n > max;
  }

  function reachedAny(n) {
    return reachedMin(n) || reachedMax(n);
  }

  function reachedWhich(n) {
    var isMin = reachedMin(n) && 'min';
    var isMax = reachedMax(n) && 'max';
    return isMin || isMax || '';
  }

  function loop(n) {
    var which = reachedWhich(n);
    return which ? loopLimits[which] : n;
  }

  function constrain(n) {
    var which = reachedWhich(n);
    return which ? constrainLimits[which] : n;
  }

  var self = {
    constrain: constrain,
    loop: loop,
    max: max,
    min: min,
    reachedAny: reachedAny,
    reachedMax: reachedMax,
    reachedMin: reachedMin
  };
  return Object.freeze(self);
}

exports.Limit = Limit;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var engine_1 = __webpack_require__(7);

var eventDispatcher_1 = __webpack_require__(22);

var eventStore_1 = __webpack_require__(3);

var options_1 = __webpack_require__(23);

var utils_1 = __webpack_require__(2);

function EmblaCarousel(sliderRoot) {
  var userOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var state = {
    active: false,
    windowWidth: 0
  };

  var options = _extends({}, options_1.defaultOptions, userOptions);

  var events = eventDispatcher_1.EventDispatcher();
  var eventStore = eventStore_1.EventStore();
  var debouncedResize = utils_1.debounce(resize, 500);
  var changeOptions = reActivate;
  var slider = {};
  var elements = {};
  var on = events.on,
      off = events.off;
  activate(options);

  function storeElements() {
    if (!sliderRoot) {
      throw new Error('No root element provided 😢');
    }

    var selector = options.containerSelector;
    var container = sliderRoot.querySelector(selector);

    if (!container) {
      throw new Error('No valid container element found 😢');
    }

    elements.root = sliderRoot;
    elements.container = container;
    elements.slides = utils_1.arrayFromCollection(container.children);
    state.active = true;
  }

  function activate() {
    var userOpt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFirstInit = !state.active;
    state.windowWidth = window.innerWidth;
    storeElements();

    if (elements.slides.length > 0) {
      var root = elements.root,
          container = elements.container,
          slides = elements.slides;

      var newOpt = _extends(options, userOpt);

      var engine = engine_1.Engine(root, container, slides, newOpt, events);

      var newSlider = _extends(slider, engine);

      eventStore.add(window, 'resize', debouncedResize);
      slides.forEach(slideFocusEvent);
      slider.translate.to(slider.mover.location);

      if (options.loop && slides.length === 1) {
        return activate({
          loop: false
        });
      }

      if (options.draggable) activateDragFeature();
      if (options.loop) slider.shifter.shiftInfinite(slides);

      if (isFirstInit) {
        events.on('select', toggleSelectedClass);
        events.on('init', toggleSelectedClass);
        setTimeout(function () {
          return events.dispatch('init');
        }, 0);
      }
    }
  }

  function activateDragFeature() {
    var root = elements.root.classList;
    var draggingClass = options.draggingClass,
        draggableClass = options.draggableClass;
    slider.pointer.addActivationEvents();
    events.on('dragStart', function () {
      return root.add(draggingClass);
    });
    events.on('dragEnd', function () {
      return root.remove(draggingClass);
    });
    root.add(draggableClass);
  }

  function toggleSelectedClass() {
    var slides = elements.slides;
    var index = slider.index,
        indexPrevious = slider.indexPrevious,
        indexGroups = slider.indexGroups;
    var selected = options.selectedClass;
    var previousGroup = indexGroups[indexPrevious.get()];
    var currentGroup = indexGroups[index.get()];
    previousGroup.forEach(function (i) {
      return slides[i].classList.remove(selected);
    });
    currentGroup.forEach(function (i) {
      return slides[i].classList.add(selected);
    });
  }

  function slideFocusEvent(slide, index) {
    var focus = function focus() {
      var groupIndex = Math.floor(index / options.slidesToScroll);
      var selectedGroup = index ? groupIndex : index;
      sliderRoot.scrollLeft = 0;
      scrollTo(selectedGroup);
    };

    eventStore.add(slide, 'focus', focus, true);
  }

  function reActivate() {
    var userOpt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (state.active) {
      var startIndex = slider.index.get();
      var indexOpt = {
        startIndex: startIndex
      };

      var newOpt = _extends(indexOpt, userOpt);

      deActivate();
      activate(newOpt);
    }
  }

  function deActivate() {
    var root = elements.root,
        container = elements.container,
        slides = elements.slides;
    slider.pointer.removeAllEvents();
    slider.animation.stop();
    eventStore.removeAll();
    root.classList.remove(options.draggableClass);
    container.style.transform = '';
    slides.forEach(function (s) {
      return s.style.left = '';
    });
  }

  function destroy() {
    state.active = false;
    deActivate();
    events.dispatch('destroy');
  }

  function resize() {
    var newWindowWidth = window.innerWidth;

    if (newWindowWidth !== state.windowWidth) {
      state.windowWidth = newWindowWidth;
      reActivate();
      events.dispatch('resize');
    }
  }

  function scrollSnapList() {
    return slider.indexGroups.map(function (g) {
      return {
        slideIndexes: g,
        slideNodes: g.map(function (i) {
          return elements.slides[i];
        })
      };
    });
  }

  function canScrollPrev() {
    var index = slider.index;
    return options.loop || index.get() !== index.min;
  }

  function canScrollNext() {
    var index = slider.index;
    return options.loop || index.get() !== index.max;
  }

  function scrollNext() {
    slider.mover.useDefaultMass().useDefaultSpeed();
    slider.scroll.toNext();
  }

  function scrollPrev() {
    slider.mover.useDefaultMass().useDefaultSpeed();
    slider.scroll.toPrevious();
  }

  function scrollTo(index) {
    slider.mover.useDefaultMass().useDefaultSpeed();
    slider.scroll.toIndex(index);
  }

  function selectedScrollSnap() {
    return slider.index.get();
  }

  function previousScrollSnap() {
    return slider.indexPrevious.get();
  }

  function containerNode() {
    return elements.container;
  }

  function slideNodes() {
    return elements.slides;
  }

  var self = {
    canScrollNext: canScrollNext,
    canScrollPrev: canScrollPrev,
    changeOptions: changeOptions,
    containerNode: containerNode,
    destroy: destroy,
    off: off,
    on: on,
    previousScrollSnap: previousScrollSnap,
    scrollNext: scrollNext,
    scrollPrev: scrollPrev,
    scrollSnapList: scrollSnapList,
    scrollTo: scrollTo,
    selectedScrollSnap: selectedScrollSnap,
    slideNodes: slideNodes
  };
  return Object.freeze(self);
}

exports.EmblaCarousel = EmblaCarousel;
exports["default"] = EmblaCarousel; // @ts-ignore

module.exports = EmblaCarousel;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var alignSize_1 = __webpack_require__(8);

var animation_1 = __webpack_require__(9);

var chunkSize_1 = __webpack_require__(10);

var counter_1 = __webpack_require__(11);

var dragBehaviour_1 = __webpack_require__(12);

var edgeGuard_1 = __webpack_require__(13);

var edgeLooper_1 = __webpack_require__(14);

var infiniteShifter_1 = __webpack_require__(15);

var limit_1 = __webpack_require__(4);

var mover_1 = __webpack_require__(16);

var pointer_1 = __webpack_require__(17);

var scroller_1 = __webpack_require__(18);

var snapPosition_1 = __webpack_require__(19);

var targetFinder_1 = __webpack_require__(20);

var translate_1 = __webpack_require__(21);

var utils_1 = __webpack_require__(2);

var vector1d_1 = __webpack_require__(0);

function Engine(root, container, slides, options, events) {
  // Options
  var align = options.align,
      startIndex = options.startIndex,
      loop = options.loop,
      speed = options.speed,
      dragFree = options.dragFree,
      slidesToScroll = options.slidesToScroll,
      containScroll = options.containScroll; // Index

  var indexMin = 0;
  var indexMax = Math.ceil(slides.length / slidesToScroll) - 1;
  var indexes = Object.keys(slides).map(Number);
  var indexGroups = utils_1.groupNumbers(indexes, slidesToScroll);
  var indexSpan = limit_1.Limit({
    min: indexMin,
    max: indexMax
  });
  var index = counter_1.Counter({
    limit: indexSpan,
    start: startIndex,
    loop: loop
  });
  var indexPrevious = index.clone(); // Measurements

  var containerSize = utils_1.rectWidth(container);
  var chunkSize = chunkSize_1.ChunkSize(containerSize);
  var viewSize = chunkSize.root;
  var slideSizes = slides.map(utils_1.rectWidth).map(chunkSize.measure);
  var groupedSizes = utils_1.groupNumbers(slideSizes, slidesToScroll);
  var snapSizes = groupedSizes.map(function (g) {
    return g.reduce(function (a, s) {
      return a + s;
    });
  });
  var contentSize = snapSizes.reduce(function (a, s) {
    return a + s;
  });
  var alignSize = alignSize_1.AlignSize({
    align: align,
    viewSize: viewSize
  });
  var contain = !loop && containScroll;
  var snapPosition = snapPosition_1.SnapPosition({
    alignSize: alignSize,
    contain: contain,
    contentSize: contentSize,
    index: index,
    snapSizes: snapSizes,
    viewSize: viewSize
  });
  var snapPositions = snapSizes.map(snapPosition.measure);
  var loopSize = -contentSize + chunkSize.measure(1);
  var max = snapPositions[0];
  var min = loop ? max + loopSize : snapPositions[index.max];
  var limit = limit_1.Limit({
    max: max,
    min: min
  }); // Direction

  var direction = function direction() {
    return pointer.isDown() ? pointer.direction.get() : slider.mover.direction.get();
  }; // Draw


  var update = function update() {
    slider.mover.seek(target).update();

    if (!pointer.isDown()) {
      if (!loop) slider.edgeGuard.constrain(target);
      if (slider.mover.settle(target)) slider.animation.stop();
    }

    if (loop) {
      slider.edgeLooper.loop(direction());
      slider.shifter.shiftInfinite(slides);
    }

    if (slider.mover.location.get() !== target.get()) {
      events.dispatch('scroll');
    }

    slider.translate.to(slider.mover.location);
    slider.animation.proceed();
  }; // Shared


  var animation = animation_1.Animation(update);
  var startLocation = snapPositions[index.get()];
  var location = vector1d_1.Vector1D(startLocation);
  var target = vector1d_1.Vector1D(startLocation);
  var mover = mover_1.Mover({
    location: location,
    speed: speed,
    mass: 1
  });
  var scroll = scroller_1.Scroller({
    animation: animation,
    events: events,
    findTarget: targetFinder_1.TargetFinder({
      align: align,
      contentSize: contentSize,
      dragFree: dragFree,
      index: index,
      limit: limit,
      loop: loop,
      snapPositions: snapPositions,
      snapSizes: snapSizes,
      target: target
    }),
    index: index,
    indexPrevious: indexPrevious,
    target: target
  }); // Pointer

  var pointer = dragBehaviour_1.DragBehaviour({
    animation: animation,
    dragFree: dragFree,
    element: root,
    events: events,
    index: index,
    limit: limit,
    location: location,
    loop: loop,
    mover: mover,
    pointer: pointer_1.Pointer(chunkSize),
    scroll: scroll,
    snapSizes: snapSizes,
    target: target
  }); // Slider

  var slider = {
    animation: animation,
    edgeGuard: edgeGuard_1.EdgeGuard({
      animation: animation,
      limit: limit,
      location: location,
      mover: mover,
      tolerance: 50
    }),
    edgeLooper: edgeLooper_1.EdgeLooper({
      contentSize: contentSize,
      limit: limit,
      location: location,
      vectors: [location, target]
    }),
    index: index,
    indexGroups: indexGroups,
    indexPrevious: indexPrevious,
    mover: mover,
    pointer: pointer,
    scroll: scroll,
    shifter: infiniteShifter_1.InfiniteShifter({
      contentSize: contentSize,
      location: location,
      slideSizes: slideSizes,
      snapPositions: snapPositions,
      viewSize: viewSize
    }),
    target: target,
    translate: translate_1.Translate(container)
  };
  return Object.freeze(slider);
}

exports.Engine = Engine;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function AlignSize(params) {
  var viewSize = params.viewSize,
      align = params.align;
  var alignment = {
    start: start,
    center: center,
    end: end
  };

  function start(n) {
    return n * 0;
  }

  function center(n) {
    return (viewSize - n) / 2;
  }

  function end(n) {
    return viewSize - n;
  }

  function measure(n) {
    return alignment[align](n);
  }

  var self = {
    measure: measure
  };
  return Object.freeze(self);
}

exports.AlignSize = AlignSize;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function Animation(callback) {
  var run = requestAnimationFrame.bind(window);
  var end = cancelAnimationFrame.bind(window);
  var state = {
    animationFrame: 0
  };

  function ifAnimating(active, cb) {
    return function () {
      if (active === !!state.animationFrame) cb();
    };
  }

  function start() {
    state.animationFrame = run(callback);
  }

  function stop() {
    end(state.animationFrame);
    state.animationFrame = 0;
  }

  var self = {
    proceed: ifAnimating(true, start),
    start: ifAnimating(false, start),
    stop: ifAnimating(true, stop)
  };
  return Object.freeze(self);
}

exports.Animation = Animation;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function ChunkSize(root) {
  var size = {
    root: root
  };

  function measure(n) {
    return n / size.root * 100;
  }

  var self = {
    measure: measure,
    root: 100
  };
  return Object.freeze(self);
}

exports.ChunkSize = ChunkSize;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function Counter(params) {
  var start = params.start,
      limit = params.limit,
      loop = params.loop;
  var min = limit.min,
      max = limit.max;
  var type = loop ? 'loop' : 'constrain';
  var state = {
    value: withinLimit(start)
  };

  function get() {
    return state.value;
  }

  function set(n) {
    state.value = withinLimit(n);
    return self;
  }

  function withinLimit(n) {
    return limit[type](n);
  }

  function add(n) {
    if (n !== 0) {
      var one = n / Math.abs(n);
      set(get() + one);
      return add(n + one * -1);
    }

    return self;
  }

  function clone() {
    var s = get();
    return Counter({
      start: s,
      limit: limit,
      loop: loop
    });
  }

  var self = {
    add: add,
    clone: clone,
    get: get,
    max: max,
    min: min,
    set: set
  };
  return Object.freeze(self);
}

exports.Counter = Counter;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var direction_1 = __webpack_require__(1);

var eventStore_1 = __webpack_require__(3);

var vector1d_1 = __webpack_require__(0);

function DragBehaviour(params) {
  var target = params.target,
      mover = params.mover,
      dragFree = params.dragFree,
      animation = params.animation;
  var element = params.element,
      pointer = params.pointer,
      location = params.location,
      events = params.events,
      limit = params.limit;
  var direction = pointer.direction;
  var focusNodes = ['INPUT', 'SELECT', 'TEXTAREA'];
  var startX = vector1d_1.Vector1D(0);
  var startY = vector1d_1.Vector1D(0);
  var dragStartLocation = vector1d_1.Vector1D(0);
  var activationEvents = eventStore_1.EventStore();
  var interactionEvents = eventStore_1.EventStore();
  var snapForceBoost = {
    mouse: 2.5,
    touch: 3.5
  };
  var freeForceBoost = {
    mouse: 4,
    touch: 7
  };
  var snapSpeed = {
    mouse: 12,
    touch: 14
  };
  var freeSpeed = {
    mouse: 6,
    touch: 5
  };
  var dragThreshold = 4;
  var state = {
    isDown: false,
    isMouse: false,
    preventClick: false,
    preventScroll: false
  };

  function addActivationEvents() {
    var node = element;
    activationEvents.add(node, 'touchmove', function () {
      return undefined;
    }).add(node, 'touchend', function () {
      return undefined;
    }).add(node, 'touchstart', down).add(node, 'touchcancel', up).add(node, 'mousedown', down).add(node, 'click', click);
  }

  function addInteractionEvents() {
    var node = !state.isMouse ? element : document;
    interactionEvents.add(node, 'touchmove', move).add(node, 'touchend', up).add(node, 'mousemove', move).add(node, 'mouseup', up);
  }

  function removeAllEvents() {
    activationEvents.removeAll();
    interactionEvents.removeAll();
  }

  function isFocusNode(node) {
    var name = node.nodeName || '';
    return focusNodes.indexOf(name) > -1;
  }

  function movementSpeed() {
    var speed = dragFree ? freeSpeed : snapSpeed;
    var type = state.isMouse ? 'mouse' : 'touch';
    return speed[type];
  }

  function pointerForceBoost() {
    var boost = dragFree ? freeForceBoost : snapForceBoost;
    var type = state.isMouse ? 'mouse' : 'touch';
    return boost[type];
  }

  function seekTargetBy(force) {
    var scroll = params.scroll,
        snapSizes = params.snapSizes,
        index = params.index;
    var forceAbs = Math.abs(force);
    var halfSnap = snapSizes[index.get()] / 2;
    var reachedLimit = limit.reachedAny(target.get() + force);
    var seekNext = forceAbs > dragThreshold && forceAbs < halfSnap;

    if (!dragFree && !reachedLimit && seekNext) {
      var indexDiff = direction_1.Direction(force).get() * -1;
      var next = index.clone().add(indexDiff);
      scroll.toIndex(next.get());
    } else {
      scroll.toDistance(force);
    }
  }

  function down(evt) {
    var node = evt.target;
    var diffToTarget = target.get() - location.get();
    var isMoving = Math.abs(diffToTarget) >= 2;
    state.isMouse = !!evt.type.match(/mouse/);
    state.isDown = true;
    pointer.down(evt);
    dragStartLocation.set(target);
    target.set(location);
    mover.useSpeed(80).useDefaultMass();
    animation.start();
    addInteractionEvents();
    events.dispatch('dragStart');
    if (isMoving) evt.preventDefault();
    if (!isMoving) state.preventClick = false;
    if (state.isMouse && !isFocusNode(node)) evt.preventDefault();

    if (!state.isMouse) {
      startX.set(pointer.read(evt, 'x'));
      startY.set(pointer.read(evt, 'y'));
    }
  }

  function move(evt) {
    if (state.preventScroll || state.isMouse) {
      var diff = pointer.move(evt);
      var reachedLimit = limit.reachedAny(location.get());
      var resist = !params.loop && reachedLimit ? 2 : 1;
      target.addNumber(diff / resist);
      evt.preventDefault();
    } else {
      var X = pointer.read(evt, 'x').get();
      var Y = pointer.read(evt, 'y').get();
      var diffX = Math.abs(X - startX.get());
      var diffY = Math.abs(Y - startY.get());
      state.preventScroll = diffX > diffY;
      if (!state.preventScroll && !state.preventClick) up();
    }
  }

  function up() {
    var force = pointer.up() * pointerForceBoost();
    var diffToTarget = target.get() - dragStartLocation.get();
    var isMoving = Math.abs(diffToTarget) >= 0.5;
    if (isMoving) state.preventClick = true;
    state.isMouse = false;
    state.preventScroll = false;
    state.isDown = false;
    interactionEvents.removeAll();
    mover.useSpeed(movementSpeed());
    seekTargetBy(force);
    events.dispatch('dragEnd');
  }

  function click(evt) {
    if (state.preventClick) evt.preventDefault();
  }

  function isDown() {
    return state.isDown;
  }

  var self = {
    addActivationEvents: addActivationEvents,
    direction: direction,
    isDown: isDown,
    removeAllEvents: removeAllEvents
  };
  return Object.freeze(self);
}

exports.DragBehaviour = DragBehaviour;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function EdgeGuard(params) {
  var limit = params.limit,
      location = params.location,
      mover = params.mover,
      animation = params.animation,
      tolerance = params.tolerance;
  var min = limit.min,
      max = limit.max,
      reachedMin = limit.reachedMin,
      reachedMax = limit.reachedMax;
  var state = {
    timeout: 0
  };

  function shouldConstrain(v) {
    var l = location.get();
    var constrainMin = reachedMin(l) && v.get() !== min;
    var constrainMax = reachedMax(l) && v.get() !== max;
    return constrainMin || constrainMax;
  }

  function constrain(v) {
    if (!state.timeout && shouldConstrain(v)) {
      var constraint = limit.constrain(v.get());
      state.timeout = window.setTimeout(function () {
        v.setNumber(constraint);
        mover.useSpeed(10).useMass(3);
        animation.start();
        state.timeout = 0;
      }, tolerance);
    }
  }

  var self = {
    constrain: constrain
  };
  return Object.freeze(self);
}

exports.EdgeGuard = EdgeGuard;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function EdgeLooper(params) {
  var limit = params.limit,
      location = params.location,
      contentSize = params.contentSize,
      vectors = params.vectors;
  var reachedMin = limit.reachedMin,
      reachedMax = limit.reachedMax;

  function shouldLoop(direction) {
    var reachedLimit = direction === -1 ? reachedMin : reachedMax;
    return direction !== 0 && reachedLimit(location.get());
  }

  function loop(direction) {
    if (shouldLoop(direction)) {
      var distance = contentSize * (direction * -1);
      vectors.forEach(function (v) {
        return v.addNumber(distance);
      });
    }
  }

  var self = {
    loop: loop
  };
  return Object.freeze(self);
}

exports.EdgeLooper = EdgeLooper;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var vector1d_1 = __webpack_require__(0);

function InfiniteShifter(params) {
  var contentSize = params.contentSize,
      viewSize = params.viewSize,
      slideSizes = params.slideSizes,
      snapPositions = params.snapPositions;
  var ascItems = Object.keys(slideSizes).map(Number);
  var descItems = ascItems.slice().reverse();
  var shiftPoints = startPoints().concat(endPoints());

  function subtractItemSizesOf(indexes, from) {
    return indexes.reduce(function (a, i) {
      var size = slideSizes[i];
      return a - size;
    }, from);
  }

  function shiftItemsIn(sizeOfGap, indexes) {
    return indexes.reduce(function (a, i) {
      var gapLeft = subtractItemSizesOf(a, sizeOfGap);
      return gapLeft > 0 ? a.concat([i]) : a;
    }, []);
  }

  function shiftStart(sizeOfGap, indexes, from) {
    return indexes.reduce(function (a, i) {
      var gapFilled = a + slideSizes[i];
      return gapFilled < sizeOfGap ? gapFilled : a;
    }, from);
  }

  function shiftPoint(indexes, from, direction) {
    var slideCount = ascItems.length - 1;
    return subtractItemSizesOf(indexes.map(function (i) {
      return (i + direction) % slideCount;
    }), from);
  }

  function shiftPointsFor(indexes, from, direction) {
    var ascIndexes = indexes.slice().sort(function (a, b) {
      return a - b;
    });
    return ascIndexes.map(function (i, j) {
      var index = i;
      var initial = contentSize * (!direction ? 0 : -1);
      var offset = contentSize * (!direction ? 1 : 0);
      var slidesInSpan = ascIndexes.slice(0, j);
      var point = shiftPoint(slidesInSpan, from, direction);
      var location = vector1d_1.Vector1D(-1);

      var findTarget = function findTarget(loc) {
        var target = vector1d_1.Vector1D(0);
        var t = loc > point ? initial : offset;
        return target.setNumber(t);
      };

      return {
        point: point,
        findTarget: findTarget,
        location: location,
        index: index
      };
    });
  }

  function startPoints() {
    var gap = snapPositions[0] - 1;
    var indexes = shiftItemsIn(gap, descItems);
    var start = shiftStart(gap, indexes, 0);
    return shiftPointsFor(indexes, start, 1);
  }

  function endPoints() {
    var gap = viewSize - snapPositions[0] - 1;
    var indexes = shiftItemsIn(gap, ascItems);
    var start = shiftStart(contentSize, ascItems, -viewSize);
    return shiftPointsFor(indexes, -start, 0);
  }

  function shiftInfinite(slides) {
    var parentLocation = params.location;
    shiftPoints.forEach(function (point) {
      var findTarget = point.findTarget,
          location = point.location,
          index = point.index;
      var target = findTarget(parentLocation.get());

      if (target.get() !== location.get()) {
        slides[index].style.left = "".concat(target.get(), "%");
        location.set(target);
      }
    });
  }

  var self = {
    shiftInfinite: shiftInfinite,
    shiftPoints: shiftPoints
  };
  return Object.freeze(self);
}

exports.InfiniteShifter = InfiniteShifter;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var direction_1 = __webpack_require__(1);

var utils_1 = __webpack_require__(2);

var vector1d_1 = __webpack_require__(0);

function Mover(params) {
  var location = params.location,
      speed = params.speed,
      mass = params.mass;
  var velocity = vector1d_1.Vector1D(0);
  var acceleration = vector1d_1.Vector1D(0);
  var attraction = vector1d_1.Vector1D(0);
  var direction = direction_1.Direction(0);
  var state = {
    speed: speed,
    mass: mass
  };

  function update() {
    velocity.add(acceleration);
    location.add(velocity);
    acceleration.multiply(0);
  }

  function applyForce(force) {
    force.divide(state.mass);
    acceleration.add(force);
  }

  function seek(target) {
    attraction.set(target).subtract(location);
    var mag = attraction.magnitude();
    var m = utils_1.map(mag, 0, 100, 0, state.speed);
    direction.set(attraction);
    attraction.normalize().multiply(m).subtract(velocity);
    applyForce(attraction);
    return self;
  }

  function settle(target) {
    var diff = target.get() - location.get();
    var diffRounded = Math.round(diff * 100) / 100;
    var hasSettled = !diffRounded;
    if (hasSettled) location.set(target);
    return hasSettled;
  }

  function useSpeed(desired) {
    state.speed = desired;
    return self;
  }

  function useDefaultSpeed() {
    useSpeed(speed);
    return self;
  }

  function useMass(desired) {
    state.mass = desired;
    return self;
  }

  function useDefaultMass() {
    useMass(mass);
    return self;
  }

  var self = {
    direction: direction,
    location: location,
    seek: seek,
    settle: settle,
    update: update,
    useDefaultMass: useDefaultMass,
    useDefaultSpeed: useDefaultSpeed,
    useMass: useMass,
    useSpeed: useSpeed
  };
  return Object.freeze(self);
}

exports.Mover = Mover;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var direction_1 = __webpack_require__(1);

var vector1d_1 = __webpack_require__(0);

function Pointer(size) {
  var coords = {
    x: 'clientX',
    y: 'clientY'
  };
  var startDrag = vector1d_1.Vector1D(0);
  var diffDrag = vector1d_1.Vector1D(0);
  var lastDrag = vector1d_1.Vector1D(0);
  var pointValue = vector1d_1.Vector1D(0);
  var direction = direction_1.Direction(0);
  var trackInterval = 10;
  var state = {
    isMouse: false,
    trackPoints: [],
    trackTime: new Date().getTime()
  };

  function read(evt, axis) {
    var isMouse = state.isMouse;
    var c = coords[axis];
    var value = isMouse ? evt[c] : evt.touches[0][c];
    return pointValue.setNumber(value);
  }

  function down(evt) {
    state.isMouse = !!evt.type.match(/mouse/);
    var point = read(evt, 'x');
    startDrag.set(point);
    lastDrag.set(point);
    return size.measure(startDrag.get());
  }

  function move(evt) {
    var point = read(evt, 'x');
    var time2 = new Date().getTime();
    var time1 = state.trackTime;

    if (time2 - time1 >= trackInterval) {
      state.trackPoints.push(point.get());
      state.trackTime = time2;
    }

    diffDrag.set(point).subtract(lastDrag);
    direction.set(diffDrag);
    lastDrag.set(point);
    return size.measure(diffDrag.get());
  }

  function up() {
    var currentPoint = lastDrag.get();
    var trackLength = state.isMouse ? 5 : 4;
    lastDrag.setNumber(state.trackPoints.slice(-trackLength).map(function (point) {
      return currentPoint - point;
    }).sort(function (p1, p2) {
      return Math.abs(p1) < Math.abs(p2) ? 1 : -1;
    })[0] || 0);
    state.trackPoints = [];
    return size.measure(lastDrag.get());
  }

  var self = {
    direction: direction,
    down: down,
    move: move,
    read: read,
    up: up
  };
  return Object.freeze(self);
}

exports.Pointer = Pointer;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function Scroller(params) {
  var index = params.index,
      findTarget = params.findTarget,
      animation = params.animation;

  function scrollTo(next) {
    var indexPrevious = params.indexPrevious,
        events = params.events,
        target = params.target;
    var distanceDiff = next.distance;
    var indexDiff = next.index !== index.get();

    if (distanceDiff) {
      animation.start();
      target.addNumber(distanceDiff);
    }

    if (indexDiff) {
      indexPrevious.set(index.get());
      index.set(next.index);
      events.dispatch('select');
    }
  }

  function toDistance(force) {
    var next = findTarget.byDistance(force);
    scrollTo(next);
  }

  function findIndex(target, direction) {
    var next = findTarget.byIndex(target.get(), direction);
    scrollTo(next);
  }

  function toIndex(target) {
    var next = index.clone().set(target);
    findIndex(next, 0);
  }

  function toNext() {
    var next = index.clone().add(1);
    findIndex(next, -1);
  }

  function toPrevious() {
    var next = index.clone().add(-1);
    findIndex(next, 1);
  }

  var self = {
    toDistance: toDistance,
    toIndex: toIndex,
    toNext: toNext,
    toPrevious: toPrevious
  };
  return Object.freeze(self);
}

exports.Scroller = Scroller;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var limit_1 = __webpack_require__(4);

function SnapPosition(params) {
  var alignSize = params.alignSize,
      contentSize = params.contentSize,
      snapSizes = params.snapSizes,
      viewSize = params.viewSize;
  var alignSizes = snapSizes.map(alignSize.measure);
  var contentFillsUpView = contentSize >= viewSize;
  var betweenDistances = distancesBetweenSnaps();
  var bounds = viewBounds();

  function distancesBetweenSnaps() {
    return snapSizes.map(function (size, i) {
      var next = params.index.clone().set(i + 1);
      return size + alignSizes[i] - alignSizes[next.get()];
    });
  }

  function snapPositionFor(index) {
    var sizes = betweenDistances.slice(0, index);
    return sizes.reduce(function (a, d) {
      return a - d;
    }, alignSizes[0]);
  }

  function viewBounds() {
    var indexMax = params.index.max;
    var endGap = viewSize - snapSizes[indexMax];
    var gapMinusAlign = endGap - alignSizes[indexMax];
    var min = snapPositionFor(indexMax) + gapMinusAlign;
    return limit_1.Limit({
      min: min,
      max: 0
    });
  }

  function containToView(position) {
    if (contentFillsUpView) {
      var min = bounds.min,
          max = bounds.max;
      if (position < min) return min;
      if (position > max) return max;
      return position;
    }

    return alignSize.measure(contentSize);
  }

  function measure(size, index) {
    var position = snapPositionFor(index);
    return params.contain ? containToView(position) : position;
  }

  var self = {
    measure: measure
  };
  return Object.freeze(self);
}

exports.SnapPosition = SnapPosition;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function TargetFinder(params) {
  var loop = params.loop,
      limit = params.limit,
      snapPositions = params.snapPositions,
      contentSize = params.contentSize;
  var reachedMin = limit.reachedMin,
      reachedMax = limit.reachedMax,
      reachedAny = limit.reachedAny;
  var snapBounds = calculateSnapBounds();

  function calculateSnapBounds() {
    var align = params.align,
        snapSizes = params.snapSizes;
    var counter = params.index.clone();
    return snapSizes.reduce(function (bounds, size, i) {
      var next = counter.set(i).add(align === 'end' ? 1 : 0);
      var end = snapPositions[i] - snapSizes[next.get()] / 2;
      var start = !i ? snapPositions[0] : bounds[i - 1].end;
      return bounds.concat([{
        start: start,
        end: end
      }]);
    }, []);
  }

  function offsetToSnap(target) {
    var distance = target.distance,
        index = target.index;
    var lastSnap = snapPositions[params.index.max];
    var addOffset = loop && distance < lastSnap && index === 0;
    var offset = addOffset ? distance + contentSize : distance;
    return snapPositions[index] - offset;
  }

  function findTargetSnapAt(distance) {
    while (reachedMax(distance)) {
      distance -= contentSize;
    }

    while (reachedMin(distance)) {
      distance += contentSize;
    }

    var foundIndex = snapBounds.reduce(function (a, b, i) {
      return distance < b.start && distance > b.end ? i : a;
    }, 0);
    return {
      distance: distance,
      index: foundIndex
    };
  }

  function minDistance(d1, d2) {
    return Math.abs(d1) < Math.abs(d2) ? d1 : d2;
  }

  function byIndex(index, direction) {
    var targetVector = params.target.get();
    var distanceToSnap = snapPositions[index] - targetVector;
    var target = {
      distance: distanceToSnap,
      index: index
    };

    if (loop) {
      var d1 = distanceToSnap;
      var d2 = contentSize + distanceToSnap;
      var d3 = distanceToSnap - contentSize;

      if (direction && params.index.max === 1) {
        var shortest = minDistance(d1, direction === 1 ? d2 : d3);
        target.distance = Math.abs(shortest) * direction;
      } else {
        target.distance = minDistance(minDistance(d1, d2), d3);
      }
    }

    return target;
  }

  function byDistance(force) {
    var target = params.target,
        dragFree = params.dragFree,
        index = params.index;
    var distance = target.get() + force;
    var targetSnap = findTargetSnapAt(distance);
    var reachedEdge = !loop && reachedAny(distance);

    if (reachedEdge || dragFree) {
      var min = index.min,
          max = index.max;
      var edgeIndex = reachedMax(distance) ? min : max;
      var targetIndex = reachedEdge ? edgeIndex : targetSnap.index;
      return {
        distance: force,
        index: targetIndex
      };
    } else {
      var currentSnap = {
        distance: distance,
        index: index.get()
      };
      var snapPoint = force === 0 ? currentSnap : targetSnap;
      var snapDistance = force + offsetToSnap(snapPoint);
      return {
        distance: snapDistance,
        index: snapPoint.index
      };
    }
  }

  var self = {
    byDistance: byDistance,
    byIndex: byIndex
  };
  return Object.freeze(self);
}

exports.TargetFinder = TargetFinder;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function Translate(node) {
  var nodeStyle = node.style;
  var state = {
    value: 0
  };

  function roundToTwoDecimals(n) {
    return Math.round(n * 100) * 0.01;
  }

  function translateX(n) {
    return "translate3d(".concat(n, "%,0px,0px)");
  }

  function to(v) {
    var target = roundToTwoDecimals(v.get());

    if (state.value !== target) {
      state.value = target; // @ts-ignore

      getComputedStyle(node).transform;
      nodeStyle.transform = translateX(target);
    }
  }

  var self = {
    to: to
  };
  return Object.freeze(self);
}

exports.Translate = Translate;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function EventDispatcher() {
  var subscribers = {
    destroy: [],
    dragEnd: [],
    dragStart: [],
    init: [],
    resize: [],
    scroll: [],
    select: []
  };

  function dispatch(evt) {
    var eventListeners = subscribers[evt];
    eventListeners.forEach(function (e) {
      return e();
    });
    return self;
  }

  function on(evt, cb) {
    var eventListeners = subscribers[evt];
    subscribers[evt] = eventListeners.concat([cb]);
    return self;
  }

  function off(evt, cb) {
    var eventListeners = subscribers[evt];
    subscribers[evt] = eventListeners.filter(function (e) {
      return e !== cb;
    });
    return self;
  }

  var self = {
    dispatch: dispatch,
    off: off,
    on: on
  };
  return Object.freeze(self);
}

exports.EventDispatcher = EventDispatcher;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = Object.freeze({
  align: 'center',
  containScroll: false,
  containerSelector: '*',
  dragFree: false,
  draggable: true,
  draggableClass: 'is-draggable',
  draggingClass: 'is-dragging',
  loop: false,
  selectedClass: 'is-selected',
  slidesToScroll: 1,
  speed: 10,
  startIndex: 0
});

/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/assets/js/zenscroll-min.js":
/*!****************************************!*\
  !*** ./src/assets/js/zenscroll-min.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e()),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){"use strict";var t=function(t){return t&&"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var e=function(e,n,o){n=n||999,o||0===o||(o=9);var i,r=function(t){i=t},u=function(){clearTimeout(i),r(0)},c=function(t){return Math.max(0,e.getTopOf(t)-o)},a=function(o,i,c){if(u(),0===i||i&&i<0||t(e.body))e.toY(o),c&&c();else{var a=e.getY(),f=Math.max(0,o)-a,s=(new Date).getTime();i=i||Math.min(Math.abs(f),n),function t(){r(setTimeout(function(){var n=Math.min(1,((new Date).getTime()-s)/i),o=Math.max(0,Math.floor(a+f*(n<.5?2*n*n:n*(4-2*n)-1)));e.toY(o),n<1&&e.getHeight()+o<e.body.scrollHeight?t():(setTimeout(u,99),c&&c())},9))}()}},f=function(t,e,n){a(c(t),e,n)},s=function(t,n,i){var r=t.getBoundingClientRect().height,u=e.getTopOf(t)+r,s=e.getHeight(),l=e.getY(),d=l+s;c(t)<l||r+o>s?f(t,n,i):u+o>d?a(u-s+o,n,i):i&&i()},l=function(t,n,o,i){a(Math.max(0,e.getTopOf(t)-e.getHeight()/2+(o||t.getBoundingClientRect().height/2)),n,i)};return{setup:function(t,e){return(0===t||t)&&(n=t),(0===e||e)&&(o=e),{defaultDuration:n,edgeOffset:o}},to:f,toY:a,intoView:s,center:l,stop:u,moving:function(){return!!i},getY:e.getY,getTopOf:e.getTopOf}},n=document.documentElement,o=function(){return window.scrollY||n.scrollTop},i=e({body:document.scrollingElement||document.body,toY:function(t){window.scrollTo(0,t)},getY:o,getHeight:function(){return window.innerHeight||n.clientHeight},getTopOf:function(t){return t.getBoundingClientRect().top+o()-n.offsetTop}});if(i.createScroller=function(t,o,i){return e({body:t,toY:function(e){t.scrollTop=e},getY:function(){return t.scrollTop},getHeight:function(){return Math.min(t.clientHeight,window.innerHeight||n.clientHeight)},getTopOf:function(t){return t.offsetTop}},o,i)},"addEventListener"in window&&!window.noZensmooth&&!t(document.body)){var r="history"in window&&"pushState"in history,u=r&&"scrollRestoration"in history;u&&(history.scrollRestoration="auto"),window.addEventListener("load",function(){u&&(setTimeout(function(){history.scrollRestoration="manual"},9),window.addEventListener("popstate",function(t){t.state&&"zenscrollY"in t.state&&i.toY(t.state.zenscrollY)},!1)),window.location.hash&&setTimeout(function(){var t=i.setup().edgeOffset;if(t){var e=document.getElementById(window.location.href.split("#")[1]);if(e){var n=Math.max(0,i.getTopOf(e)-t),o=i.getY()-n;0<=o&&o<9&&window.scrollTo(0,n)}}},9)},!1);var c=new RegExp("(^|\\s)noZensmooth(\\s|$)");window.addEventListener("click",function(t){for(var e=t.target;e&&"A"!==e.tagName;)e=e.parentNode;if(!(!e||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){if(u){var n=history.state&&"object"==typeof history.state?history.state:{};n.zenscrollY=i.getY();try{history.replaceState(n,"")}catch(t){}}var o=e.getAttribute("href")||"";if(0===o.indexOf("#")&&!c.test(e.className)){var a=0,f=document.getElementById(o.substring(1));if("#"!==o){if(!f)return;a=i.getTopOf(f)}t.preventDefault();var s=function(){window.location=o},l=i.setup().edgeOffset;l&&(a=Math.max(0,a-l),r&&(s=function(){history.pushState({},"",o)})),i.toY(a,null,s)}}},!1)}return i});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_js_zenscroll_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/zenscroll-min.js */ "./src/assets/js/zenscroll-min.js");
/* harmony import */ var _assets_js_zenscroll_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_zenscroll_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var embla_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! embla-carousel */ "./node_modules/embla-carousel/lib/index.js");
/* harmony import */ var embla_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(embla_carousel__WEBPACK_IMPORTED_MODULE_2__);



_assets_js_zenscroll_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.setup(null, 20); // Setup zenscroll to support URL hashes

function debounce(func, wait, immediate) { // Debounce function (Bing it if you don't know)
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function replaceAll(str, find, replace) { // Function to replace all instances of some string in a string 
    'use strict';
    return String.raw`${str}`.replace(new RegExp(find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'), replace);
}

function insert(source, index, inserted) { // Function to insert a string into another string at a specific index
    if (index > 0)
        return source.substring(0, index) + inserted + source.substring(index, source.length);
    else
        return inserted + this;
};

function isScrolledIntoView(el, relElem) {
    // el is the element being scrolled around
    // relElem is used for sticky elements like navigation bars
    if (el && relElem) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top + relElem.getBoundingClientRect().height;
        var elemBottom = rect.bottom - relElem.getBoundingClientRect().height;
        return elemTop < window.innerHeight && elemBottom >= 0;
    } else {
        throw new Error(`Parameters for isScrolledIntoView() are not defined properly: 
        el: ${el}
        relElem: ${relElem}
        `);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    function manageNavLogo() {
        if (!isScrolledIntoView(document.querySelector('section#main header p#title'), document.querySelector('nav'))) {
            // If the 'main' header's title is not scrolled into view, show the icon
            document.querySelector('div.navButton.main .icon').classList.add('show');
            document.querySelector('div.navButton.main .icon').classList.remove('hide');
            // And hide the text
            document.querySelector('div.navButton.main .text').classList.remove('show');
            document.querySelector('div.navButton.main .text').classList.add('hide');
        } else {
            // If not in view, show the text
            document.querySelector('div.navButton.main .text').classList.add('show');
            document.querySelector('div.navButton.main .text').classList.remove('hide');
            // and hide the icon
            document.querySelector('div.navButton.main .icon').classList.remove('show');
            document.querySelector('div.navButton.main .icon').classList.add('hide');
        }
    }
    manageNavLogo = debounce(manageNavLogo, 25); // Debounce the function that is fired when scrolled. This helps with performance
    document.addEventListener('scroll', manageNavLogo);
});

document.addEventListener("DOMContentLoaded", function (event) { // Wait for the DOM to finish loading

    for (let i in document.getElementsByClassName('navButton')) { // Loop through all the navButtons
        if (document.getElementsByClassName('navButton')[i].classList && document.getElementsByClassName('navButton')[i].classList[0] == 'navButton') { // Make sure it has a proper classList

            let sectionName = document.getElementsByClassName('navButton')[i].classList[1]; // Get the buttons' supplemental second class
            let section = document.querySelector('section#' + sectionName); // Target the <section> that has an ID that matches our navButton's second class

            document.getElementsByClassName('navButton')[i].addEventListener('click', () => { // Add a 'click' event listenter 
                _assets_js_zenscroll_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.intoView(section, null, () => { // Scroll that section into view over 500ms
                    window.location.hash = section.id; // Change the browser URL hash when done
                });
            });
        }
    }

    setTimeout(setupEmblaCarousels, 500);
});




function setupEmblaCarousels() {
    const emblaNodes = document.querySelectorAll('.embla');

    for (let node of emblaNodes) {
        const embla = embla_carousel__WEBPACK_IMPORTED_MODULE_2___default()(node, { loop: true });

        let peridicScrollerArgs = [() => {
            embla.scrollNext();
        }, 2500];

        let periodicScroller = setInterval(...peridicScrollerArgs);

        embla.on("dragStart", () => {
            clearInterval(periodicScroller);
        });

        embla.on("dragEnd", () => {
            periodicScroller = setInterval(...peridicScrollerArgs);
        });
    }
}

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!../../node_modules/postcss-loader/lib?sourceMap!./main.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js?sourceMap!./src/style/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map