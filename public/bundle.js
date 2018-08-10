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
exports.push([module.i, "* {\n  margin: 0px;\n  scroll-behavior: smooth; }\n\nnav {\n  top: 0px;\n  left: 0px;\n  position: fixed; }\n  nav div.navButton {\n    color: white;\n    height: 40px;\n    padding-top: 10px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-family: 'Montserrat';\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: pointer;\n    min-width: 35px;\n    padding-left: 0px;\n    padding-right: 0px;\n    font-size: 10px; }\n    nav div.navButton.main span.text {\n      transition: 0.2s font-size linear; }\n      nav div.navButton.main span.text.show {\n        font-size: 10px; }\n        @media (min-width: 100px) {\n          nav div.navButton.main span.text.show {\n            font-size: calc(10px + 8 * (100vw - 100px) / 500); } }\n        @media (min-width: 600px) {\n          nav div.navButton.main span.text.show {\n            font-size: 18px; } }\n      nav div.navButton.main span.text.hide {\n        font-size: 0px; }\n    nav div.navButton.main img.icon {\n      margin-left: -20px;\n      transition: 0.2s height linear;\n      margin-top: -6px; }\n      @media (min-width: 200px) {\n        nav div.navButton.main img.icon {\n          margin-top: calc(-6px + 6 * (100vw - 200px) / 800); } }\n      @media (min-width: 1000px) {\n        nav div.navButton.main img.icon {\n          margin-top: 0px; } }\n      nav div.navButton.main img.icon.show {\n        height: 20px; }\n        @media (min-width: 100px) {\n          nav div.navButton.main img.icon.show {\n            height: calc(20px + 70 * (100vw - 100px) / 900); } }\n        @media (min-width: 1000px) {\n          nav div.navButton.main img.icon.show {\n            height: 90px; } }\n      nav div.navButton.main img.icon.hide {\n        height: 0px; }\n    @media (min-width: 200px) {\n      nav div.navButton {\n        min-width: calc(35px + 65 * (100vw - 200px) / 400); } }\n    @media (min-width: 600px) {\n      nav div.navButton {\n        min-width: 100px; } }\n    @media (min-width: 200px) {\n      nav div.navButton {\n        padding-left: calc(0px + 25 * (100vw - 200px) / 400); } }\n    @media (min-width: 600px) {\n      nav div.navButton {\n        padding-left: 25px; } }\n    @media (min-width: 200px) {\n      nav div.navButton {\n        padding-right: calc(0px + 25 * (100vw - 200px) / 400); } }\n    @media (min-width: 600px) {\n      nav div.navButton {\n        padding-right: 25px; } }\n    @media (min-width: 100px) {\n      nav div.navButton {\n        font-size: calc(10px + 8 * (100vw - 100px) / 500); } }\n    @media (min-width: 600px) {\n      nav div.navButton {\n        font-size: 18px; } }\n    nav div.navButton:hover {\n      box-shadow: 0 4px 2px -2px white;\n      transition: 0.2s linear all; }\n\nfooter,\nnav,\n.contentShifter {\n  z-index: 1;\n  height: 50px;\n  width: 100%;\n  background-color: #55B3D0;\n  padding-top: 20px;\n  padding-left: 15px; }\n\nsection {\n  min-height: 80vh;\n  width: 100%;\n  color: white;\n  font-family: 'Montserrat';\n  font-size: 1.2rem; }\n  section:nth-child(odd) {\n    background-color: #55B3D0; }\n  section:nth-child(even) {\n    background-color: #282828; }\n  section#myTube {\n    background-color: #282828; }\n  section#photoshader {\n    background-color: black; }\n\n.centered {\n  flex-wrap: wrap;\n  display: flex;\n  flex-direction: row;\n  margin: 0 auto; }\n\nsection header > img {\n  width: 150px;\n  padding-top: 15vw;\n  padding-bottom: 15vw; }\n  @media (min-width: 200px) {\n    section header > img {\n      width: calc(150px + 650 * (100vw - 200px) / 800); } }\n  @media (min-width: 1000px) {\n    section header > img {\n      width: 800px; } }\n\nsection header #photoSlider {\n  padding-top: 5vw;\n  padding-bottom: 5vw; }\n\nsection#main header {\n  padding-top: 15px; }\n  @media (min-width: 300px) {\n    section#main header {\n      padding-top: calc(15px + 185 * (100vw - 300px) / 500); } }\n  @media (min-width: 800px) {\n    section#main header {\n      padding-top: 200px; } }\n  section#main header img.logo {\n    padding-top: 0px;\n    padding-bottom: 0px; }\n\nsection header,\nsection article {\n  margin-left: 5px;\n  margin-right: 5px; }\n  @media (min-width: 200px) {\n    section header,\n    section article {\n      margin-left: calc(5px + 35 * (100vw - 200px) / 800); } }\n  @media (min-width: 1000px) {\n    section header,\n    section article {\n      margin-left: 40px; } }\n  @media (min-width: 200px) {\n    section header,\n    section article {\n      margin-right: calc(5px + 35 * (100vw - 200px) / 800); } }\n  @media (min-width: 1000px) {\n    section header,\n    section article {\n      margin-right: 40px; } }\n\nsection header + article {\n  font-size: 14px;\n  padding-bottom: 35px; }\n  @media (min-width: 300px) {\n    section header + article {\n      font-size: calc(14px + 6 * (100vw - 300px) / 500); } }\n  @media (min-width: 800px) {\n    section header + article {\n      font-size: 20px; } }\n\nsection header p {\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 25px; }\n  @media (min-width: 300px) {\n    section header p {\n      font-size: calc(18px + 10 * (100vw - 300px) / 500); } }\n  @media (min-width: 800px) {\n    section header p {\n      font-size: 28px; } }\n\nsection#totallynotanadvert {\n  width: 100%;\n  min-height: 5vw;\n  background-color: #55B3D0;\n  font-size: 1vw;\n  text-align: center; }\n\n@media screen and (max-width: 300px) {\n  * {\n    transition: 0.1s all linear; }\n  .navButton {\n    display: block; }\n  .navButton:hover {\n    box-shadow: transparent; }\n  nav {\n    position: relative;\n    height: -webkit-min-content;\n    height: -moz-min-content;\n    height: min-content; }\n  .contentShifter {\n    height: 0px; } }\n", ""]);

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

/***/ "./src/assets/html/slide-data/myTube.html":
/*!************************************************!*\
  !*** ./src/assets/html/slide-data/myTube.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> <img data-u=image class=logo src=\"./assets/img/myTube Transparent Logo.png\"/> <div data-u=thumb>Slide Description 001</div> </div> <div> <img data-u=image class=logo src=assets/img/myTube/screen1.png /> <div data-u=thumb>Slide Description 002</div> </div> <div> <img data-u=image class=logo src=assets/img/myTube/screen2.png /> <div data-u=thumb>Slide Description 003</div> </div> <div> <img data-u=image class=logo src=assets/img/myTube/screen3.png /> <div data-u=thumb>Slide Description 004</div> </div> <div> <img data-u=image class=logo src=assets/img/myTube/screen4.png /> <div data-u=thumb>Slide Description 004</div> </div> <div style=background-color:#ff7c28> <div style=position:absolute;top:50px;left:50px;width:450px;height:62px;z-index:0;font-size:16px;color:#000;line-height:24px;text-align:left;padding:5px;box-sizing:border-box> You can add HTML as a slide, too! <br/> If you need it, that is. </div> <div data-u=thumb>Did you know?</div> </div> ";

/***/ }),

/***/ "./src/assets/html/slide-data/photoShader.html":
/*!*****************************************************!*\
  !*** ./src/assets/html/slide-data/photoShader.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> <img data-u=image class=logo src=\"assets/img/Photo Shader.png\"/> <div data-u=thumb>Slide Description 001</div> </div> <div> <img data-u=image class=logo src=\"assets/img/Photo Shader/screen1.png\"/> <div data-u=thumb>Slide Description 002</div> </div> <div> <img data-u=image class=logo src=\"assets/img/Photo Shader/screen2.png\"/> <div data-u=thumb>Slide Description 003</div> </div> <div> <img data-u=image class=logo src=\"assets/img/Photo Shader/screen3.png\"/> <div data-u=thumb>Slide Description 004</div> </div> <div> <img data-u=image class=logo src=\"assets/img/Photo Shader/screen4.png\"/> <div data-u=thumb>Slide Description 004</div> </div> <div style=background-color:#ff7c28> <div style=position:absolute;top:50px;left:50px;width:450px;height:62px;z-index:0;font-size:16px;color:#000;line-height:24px;text-align:left;padding:5px;box-sizing:border-box> You can add HTML as a slide, too! <br/> If you need it, that is. </div> <div data-u=thumb>Did you know?</div> </div> ";

/***/ }),

/***/ "./src/assets/html/slider.html":
/*!*************************************!*\
  !*** ./src/assets/html/slider.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <style>.jssor_l-009-spin img{animation-name:jssor_l-009-spin;animation-duration:1.6s;animation-iteration-count:infinite;animation-timing-function:linear}@keyframes jssor_l-009-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.jssor_a061{display:block;position:absolute;cursor:pointer}.jssor_a061 .a{fill:none;stroke:#fff;stroke-width:360;stroke-linecap:round}.jssor_a061:hover{opacity:.8}.jssor_a061.jssora061dn{opacity:.5}.jssor_a061.jssora061ds{opacity:.3;pointer-events:none}</style> <div id=jssor style=\"position:relative;margin:0 auto;top:0;left:0;width:980px;height:550px;overflow:hidden;visibility:hidden\"> <div data-u=loading class=jssor_l-009-spin style=position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,.7)> <img style=margin-top:-19px;position:relative;top:50%;width:38px;height:38px src=./assets/img/photoSlider/spin.svg /> </div> <div data-u=slides style=cursor:default;position:relative;top:0;left:0;width:980px;height:550px;overflow:hidden id=slideData> </div> <div data-u=thumbnavigator style=position:absolute;bottom:0;left:0;width:980px;height:50px;color:#fff;overflow:hidden;cursor:default;background-color:rgba(0,0,0,.5)> <div data-u=slides> <div data-u=prototype style=position:absolute;top:0;left:0;width:980px;height:50px> <div data-u=thumbnailtemplate style=position:absolute;top:0;left:0;width:100%;height:100%;font-family:verdana;font-weight:400;line-height:50px;font-size:16px;padding-left:10px;box-sizing:border-box></div> </div> </div> </div> <div data-u=arrowleft class=jssor_a061 style=width:55px;height:55px;top:50%;left:25px data-autocenter=2 data-scale=0.75 data-scale-left=0.75> <svg viewBox=\"0 0 16000 16000\" style=position:absolute;top:0;left:0;width:100%;height:100%> <path class=a d=M11949,1919L5964.9,7771.7c-127.9,125.5-127.9,329.1,0,454.9L11949,14079></path> </svg> </div> <div data-u=arrowright class=jssor_a061 style=width:55px;height:55px;top:50%;right:25px data-autocenter=2 data-scale=0.75 data-scale-right=0.75> <svg viewBox=\"0 0 16000 16000\" style=position:absolute;top:0;left:0;width:100%;height:100%> <path class=a d=M5869,1919l5984.1,5852.7c127.9,125.5,127.9,329.1,0,454.9L5869,14079></path> </svg> </div> </div> ";

/***/ }),

/***/ "./src/assets/js/jssor.slider.min.js":
/*!*******************************************!*\
  !*** ./src/assets/js/jssor.slider.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

﻿/*!
Jssor Slider (MIT license)
*/
/* eslint-disable */
!function(i,h,m,e,d,k,f){new(function(){});var c={E:m.PI,m:m.max,j:m.min,Q:m.ceil,N:m.floor,J:m.abs,ub:m.sin,Rb:m.cos,Pd:m.tan,Zf:m.atan,Pb:m.sqrt,s:m.pow,Nd:m.random,$Round:m.round},g=i.$Jease$={$Swing:function(a){return-c.Rb(a*c.E)/2+.5},$Linear:function(a){return a},$InQuad:function(a){return a*a},$OutQuad:function(a){return-a*(a-2)},$InOutQuad:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},$InCubic:function(a){return a*a*a},$OutCubic:function(a){return(a-=1)*a*a+1},$InOutCubic:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},$InQuart:function(a){return a*a*a*a},$OutQuart:function(a){return-((a-=1)*a*a*a-1)},$InOutQuart:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},$InQuint:function(a){return a*a*a*a*a},$OutQuint:function(a){return(a-=1)*a*a*a*a+1},$InOutQuint:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},$InSine:function(a){return 1-c.Rb(c.E/2*a)},$OutSine:function(a){return c.ub(c.E/2*a)},$InOutSine:function(a){return-1/2*(c.Rb(c.E*a)-1)},$InExpo:function(a){return a==0?0:c.s(2,10*(a-1))},$OutExpo:function(a){return a==1?1:-c.s(2,-10*a)+1},$InOutExpo:function(a){return a==0||a==1?a:(a*=2)<1?1/2*c.s(2,10*(a-1)):1/2*(-c.s(2,-10*--a)+2)},$InCirc:function(a){return-(c.Pb(1-a*a)-1)},$OutCirc:function(a){return c.Pb(1-(a-=1)*a)},$InOutCirc:function(a){return(a*=2)<1?-1/2*(c.Pb(1-a*a)-1):1/2*(c.Pb(1-(a-=2)*a)+1)},$InElastic:function(a){if(!a||a==1)return a;var b=.3,d=.075;return-(c.s(2,10*(a-=1))*c.ub((a-d)*2*c.E/b))},$OutElastic:function(a){if(!a||a==1)return a;var b=.3,d=.075;return c.s(2,-10*a)*c.ub((a-d)*2*c.E/b)+1},$InOutElastic:function(a){if(!a||a==1)return a;var b=.45,d=.1125;return(a*=2)<1?-.5*c.s(2,10*(a-=1))*c.ub((a-d)*2*c.E/b):c.s(2,-10*(a-=1))*c.ub((a-d)*2*c.E/b)*.5+1},$InBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},$OutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},$InOutBack:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},$InBounce:function(a){return 1-g.$OutBounce(1-a)},$OutBounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},$InOutBounce:function(a){return a<1/2?g.$InBounce(a*2)*.5:g.$OutBounce(a*2-1)*.5+.5},$GoBack:function(a){return 1-c.J(2-1)},$InWave:function(a){return 1-c.Rb(a*c.E*2)},$OutWave:function(a){return c.ub(a*c.E*2)},$OutJump:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},$InJump:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a},$Early:c.Q,$Late:c.N};var b=i.$Jssor$=new function(){var j=this,xb=/\S+/g,K=1,eb=2,hb=3,gb=4,kb=5,L,r=0,n=0,C=0,x=navigator,qb=x.appName,p=x.userAgent,q=parseFloat;function Gb(){if(!L){L={Yc:"ontouchstart"in i||"createTouch"in h};var a;if(x.pointerEnabled||(a=x.msPointerEnabled))L.ne=a?"msTouchAction":"touchAction"}return L}function u(g){if(!r){r=-1;if(qb=="Microsoft Internet Explorer"&&!!i.attachEvent&&!!i.ActiveXObject){var e=p.indexOf("MSIE");r=K;n=q(p.substring(e+5,p.indexOf(";",e)));/*@cc_on@*/}else if(qb=="Netscape"&&!!i.addEventListener){var d=p.indexOf("Firefox"),b=p.indexOf("Safari"),f=p.indexOf("Chrome"),c=p.indexOf("AppleWebKit");if(d>=0){r=eb;n=q(p.substring(d+8))}else if(b>=0){var h=p.substring(0,b).lastIndexOf("/");r=f>=0?gb:hb;n=q(p.substring(h+1,b))}else{var a=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(p);if(a){r=K;n=q(a[1])}}if(c>=0)C=q(p.substring(c+12))}else{var a=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(p);if(a){r=kb;n=q(a[2])}}}return g==r}function v(){return u(K)}function fb(){return u(hb)}function jb(){return u(kb)}function bb(){return fb()&&C>534&&C<535}function H(){u();return C>537||n>42||r==K&&n>=11}function cb(a){var b,c;return function(g){if(!b){b=d;var e=a.substr(0,1).toUpperCase()+a.substr(1);l([a].concat(["WebKit","ms","Moz","O","webkit"]),function(h,d){var b=a;if(d)b=h+e;if(g.style[b]!=f)return c=b})}return c}}function ab(b){var a;return function(c){a=a||cb(b)(c)||b;return a}}var M=ab("transform");function pb(a){return{}.toString.call(a)}var mb={};l(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){mb["[object "+a+"]"]=a.toLowerCase()});function l(b,d){var a,c;if(pb(b)=="[object Array]"){for(a=0;a<b.length;a++)if(c=d(b[a],a,b))return c}else for(a in b)if(c=d(b[a],a,b))return c}function G(a){return a==e?String(a):mb[pb(a)]||"object"}function nb(a){for(var b in a)return d}function D(a){try{return G(a)=="object"&&!a.nodeType&&a!=a.window&&(!a.constructor||{}.hasOwnProperty.call(a.constructor.prototype,"isPrototypeOf"))}catch(b){}}function ub(b,a){setTimeout(b,a||0)}function lb(b,d,c){var a=!b||b=="inherit"?"":b;l(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.index+b[0].length+1,a.length-1);a=d+e}});a&&(c+=(!a.indexOf(" ")?"":" ")+a);return c}function rb(a,b){if(a===f)a=b;return a}j.kd=Gb;j.ae=v;j.dh=fb;j.Wg=H;cb("transform");j.rd=function(){return n};j.Sg=function(){u();return C};j.$Delay=ub;j.U=rb;j.X=function(a,b){b.call(a);return A({},a)};function V(a){a.constructor===V.caller&&a.v&&a.v.apply(a,V.caller.arguments)}j.v=V;j.$GetElement=function(a){if(j.Tg(a))a=h.getElementById(a);return a};function t(a){return a||i.event}j.Yg=t;j.$EvtSrc=function(b){b=t(b);var a=b.target||b.srcElement||h;if(a.nodeType==3)a=j.md(a);return a};j.Bd=function(a){a=t(a);return a.relatedTarget||a.toElement};j.re=function(a){a=t(a);return a.which||([0,1,3,0,2])[a.button]||a.charCode||a.keyCode};j.pd=function(a){a=t(a);return{x:a.clientX||0,y:a.clientY||0}};j.Vg=function(b,a){return b.x>=a.x&&b.x<=a.x+a.w&&b.y>=a.y&&b.y<=a.y+a.h};j.se=function(c,e){var a=b.Zg(e),d=b.pd(c);return j.Vg(d,a)};function w(c,d,a){if(a!==f)c.style[d]=a==f?"":a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&i.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,e);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function Y(b,c,a,d){if(a===f){a=q(w(b,c));isNaN(a)&&(a=e);return a}if(a==e)a="";else d&&(a+="px");w(b,c,a)}function m(c,a){var d=a?Y:w,b;if(a&4)b=ab(c);return function(e,f){return d(e,b?b(e):c,f,a&2)}}function Bb(a){return q(a.style.opacity||"1")}function Db(b,a){b.style.opacity=a==1?"":c.$Round(a*100)/100}var O={$Rotate:["rotate"],$RotateX:["rotateX"],$RotateY:["rotateY"],$SkewX:["skewX"],$SkewY:["skewY"]};if(!H())O=A(O,{$ScaleX:["scaleX",2],$ScaleY:["scaleY",2],$TranslateZ:["translateZ",1]});function N(c,a){var b="";if(a){if(v()&&n&&n<10){delete a.$RotateX;delete a.$RotateY;delete a.$TranslateZ}l(a,function(d,c){var a=O[c];if(a){var e=a[1]||0;if(P[c]!=d)b+=" "+a[0]+"("+d+(["deg","px",""])[e]+")"}});if(H()){if(a.$TranslateX||a.$TranslateY||a.$TranslateZ!=f)b+=" translate3d("+(a.$TranslateX||0)+"px,"+(a.$TranslateY||0)+"px,"+(a.$TranslateZ||0)+"px)";if(a.$ScaleX==f)a.$ScaleX=1;if(a.$ScaleY==f)a.$ScaleY=1;if(a.$ScaleX!=1||a.$ScaleY!=1)b+=" scale3d("+a.$ScaleX+", "+a.$ScaleY+", 1)"}}c.style[M(c)]=b}j.ch=m("transformOrigin",4);j.bh=m("backfaceVisibility",4);j.Ec=m("transformStyle",4);j.ah=m("perspective",6);j.yg=m("perspectiveOrigin",4);j.xg=function(b,a){if(v()&&n<9)b.style.zoom=a==1?"":a;else{var c=M(b),f=a==1?"":"scale("+a+")",e=b.style[c],g=new RegExp(/[\s]*scale\(.*?\)/g),d=lb(e,[g],f);b.style[c]=d}};j.$AddEvent=function(a,c,d,b){a=j.$GetElement(a);if(a.addEventListener){c=="mousewheel"&&a.addEventListener("DOMMouseScroll",d,b);a.addEventListener(c,d,b)}else if(a.attachEvent){a.attachEvent("on"+c,d);b&&a.setCapture&&a.setCapture()}};j.$RemoveEvent=function(a,c,d,b){a=j.$GetElement(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};j.$CancelEvent=function(a){a=t(a);a.preventDefault&&a.preventDefault();a.cancel=d;a.returnValue=k};j.$StopEvent=function(a){a=t(a);a.stopPropagation&&a.stopPropagation();a.cancelBubble=d};j.V=function(d,c){var a=[].slice.call(arguments,2),b=function(){var b=a.concat([].slice.call(arguments,0));return c.apply(d,b)};return b};j.Cg=function(a,b){if(b==f)return a.textContent||a.innerText;var c=h.createTextNode(b);j.Ib(a);a.appendChild(c)};j.Zg=function(b){var a=b.getBoundingClientRect();return{x:a.left,y:a.top,w:a.right-a.left,h:a.bottom-a.top}};j.wb=function(d,c){for(var b=[],a=d.firstChild;a;a=a.nextSibling)(c||a.nodeType==1)&&b.push(a);return b};function ob(a,c,f,b){b=b||"u";for(a=a?a.firstChild:e;a;a=a.nextSibling)if(a.nodeType==1){if(E(a,b)==c)return a;if(!f){var d=ob(a,c,f,b);if(d)return d}}}j.$FindChild=ob;function T(a,d,g,b){b=b||"u";var c=[];for(a=a?a.firstChild:e;a;a=a.nextSibling)if(a.nodeType==1){E(a,b)==d&&c.push(a);if(!g){var f=T(a,d,g,b);if(f.length)c=c.concat(f)}}return c}j.qg=function(b,a){return b.getElementsByTagName(a)};j.vb=function(a,f,d,g){d=d||"u";var e;do{if(a.nodeType==1){var c;d&&(c=E(a,d));if(c&&c==rb(f,c)||g==a.tagName){e=a;break}}a=b.md(a)}while(a&&a!=h.body);return e};j.pg=function(a){return X(["INPUT","TEXTAREA","SELECT"])[a.tagName]};function A(){var e=arguments,d,c,b,a,h=1&e[0],g=1+h;d=e[g-1]||{};for(;g<e.length;g++)if(c=e[g])for(b in c){a=c[b];if(a!==f){a=c[b];var i=d[b];d[b]=h&&(D(i)||D(a))?A(h,{},i,a):a}}return d}j.I=A;function W(f,g){var d={},c,a,b;for(c in f){a=f[c];b=g[c];if(a!==b){var e;if(D(a)&&D(b)){a=W(a,b);e=!nb(a)}!e&&(d[c]=a)}}return d}j.fe=function(a){return G(a)=="function"};j.Ce=function(a){return G(a)=="array"};j.Tg=function(a){return G(a)=="string"};j.Fc=function(a){return!isNaN(q(a))&&isFinite(a)};j.c=l;j.vd=D;function R(a){return h.createElement(a)}j.ac=function(){return R("DIV")};j.ug=function(){return R("SPAN")};j.tg=function(){};function F(b,c,a){if(a==f)return b.getAttribute(c);b.setAttribute(c,a)}function E(a,b){return F(a,b)||F(a,"data-"+b)}j.p=F;j.fb=E;j.z=function(d,b,c){var a=j.Dg(E(d,b));if(isNaN(a))a=c;return a};function y(b,a){return F(b,"class",a)||""}function X(b){var a={};l(b,function(b){if(b!=f)a[b]=b});return a}function vb(b,a){return b.match(a||xb)}function Q(b,a){return X(vb(b||"",a))}j.xe=X;j.Kg=vb;j.Ng=function(a){a&&(a=a.toLowerCase());return a};function Z(b,c){var a="";l(c,function(c){a&&(a+=b);a+=c});return a}function I(a,c,b){y(a,Z(" ",A(W(Q(y(a)),Q(c)),Q(b))))}j.Dd=Z;j.md=function(a){return a.parentNode};j.zb=function(a){j.yb(a,"none")};j.hb=function(a,b){j.yb(a,b?"none":"")};j.Qg=function(b,a){b.removeAttribute(a)};j.Og=function(d,a){if(a)d.style.clip="rect("+c.$Round(a.$Top||a.L||0)+"px "+c.$Round(a.$Right)+"px "+c.$Round(a.$Bottom)+"px "+c.$Round(a.$Left||a.P||0)+"px)";else if(a!==f){var h=d.style.cssText,g=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=lb(h,g,"");b.wd(d,e)}};j.Gg=function(b,a){if(a)b.style.backgroundColor="rgba("+c.$Round(a.yd)+","+c.$Round(a.Sd)+","+c.$Round(a.Td)+","+a.$Opacity+")"};j.Cb=function(){return+new Date};j.F=function(b,a){b.appendChild(a)};j.Fg=function(b,a){l(a,function(a){j.F(b,a)})};j.tb=function(b,a,c){(c||a.parentNode).insertBefore(b,a)};j.Eg=function(b,a,c){b.insertAdjacentHTML(a,c)};j.sb=function(b,a){a=a||b.parentNode;a&&a.removeChild(b)};j.Hg=function(a,b){l(a,function(a){j.sb(a,b)})};j.Ib=function(a){j.Hg(j.wb(a,d),a)};function sb(){l([].slice.call(arguments,0),function(a){if(j.Ce(a))sb.apply(e,a);else a&&a.$Destroy()})}j.$Destroy=sb;j.Pc=function(a,b){var c=j.md(a);if(b&1){j.T(a,(j.D(c)-j.D(a))/2);j.Wd(a,e)}if(b&2){j.Z(a,(j.C(c)-j.C(a))/2);j.Ld(a,e)}};var S={$Top:e,$Right:e,$Bottom:e,$Left:e,H:e,G:e};j.Jg=function(a){var b=j.ac();s(b,{Od:"block",fc:j.pb(a),$Top:0,$Left:0,H:0,G:0});var d=j.Md(a,S);j.tb(b,a);j.F(b,a);var e=j.Md(a,S),c={};l(d,function(b,a){if(b==e[a])c[a]=b});s(b,S);s(b,c);s(a,{$Top:0,$Left:0});return c};j.Dg=q;j.oe=function(b,a){var c=h.body;while(a&&b!==a&&c!==a)a=a.parentNode;return b===a};function U(d,c,b){var a=d.cloneNode(!c);!b&&j.Qg(a,"id");return a}j.bb=U;j.Qb=function(e,f){var a=new Image;function b(e,d){j.$RemoveEvent(a,"load",b);j.$RemoveEvent(a,"abort",c);j.$RemoveEvent(a,"error",c);f&&f(a,d)}function c(a){b(a,d)}if(jb()&&n<11.6||!e)b(!e);else{j.$AddEvent(a,"load",b);j.$AddEvent(a,"abort",c);j.$AddEvent(a,"error",c);a.src=e}};j.Ig=function(e,a,d){var b=1;function c(c){b--;if(a&&c&&c.src==a.src)a=c;!b&&d&&d(a)}l(e,function(a){if(a.src){b++;j.Qb(a.src,c)}});c()};j.Xd=function(a,g,i,h){if(h)a=U(a);var c=T(a,g);if(!c.length)c=b.qg(a,g);for(var f=c.length-1;f>-1;f--){var d=c[f],e=U(i);y(e,y(d));b.wd(e,d.style.cssText);b.tb(e,d);b.sb(d)}return a};function Eb(){var a=this;b.X(a,o);var d,q="",s=["av","pv","ds","dn"],e=[],r,n=0,k=0,g=0;function m(){I(d,r,(e[g||k&2||k]||"")+" "+(e[n]||""));j.jc(d,g?"none":"")}function c(){n=0;a.W(i,"mouseup",c);a.W(h,"mouseup",c);a.W(h,"touchend",c);a.W(h,"touchcancel",c);a.W(i,"blur",c);m()}function p(b){if(g)j.$CancelEvent(b);else{n=4;m();a.a(i,"mouseup",c);a.a(h,"mouseup",c);a.a(h,"touchend",c);a.a(h,"touchcancel",c);a.a(i,"blur",c)}}a.Qd=function(a){if(a===f)return k;k=a&2||a&1;m()};a.$Enable=function(a){if(a===f)return!g;g=a?0:3;m()};a.v=function(f){a.$Elmt=d=j.$GetElement(f);F(d,"data-jssor-button","1");var c=b.Kg(y(d));if(c)q=c.shift();l(s,function(a){e.push(q+a)});r=Z(" ",e);e.unshift("");a.a(d,"mousedown",p);a.a(d,"touchstart",p)};b.v(a)}j.sc=function(a){return new Eb(a)};j.Db=w;j.qd=m("backgroundColor");j.Nb=m("overflow");j.jc=m("pointerEvents");j.Z=m("top",2);j.Wd=m("right",2);j.Ld=m("bottom",2);j.T=m("left",2);j.D=m("width",2);j.C=m("height",2);m("marginLeft",2);m("marginTop",2);j.pb=m("position");j.yb=m("display");j.Y=m("zIndex",1);j.cf=function(b,a,c){if(a!=f)Db(b,a,c);else return Bb(b)};j.wd=function(a,b){if(b!=f)a.style.cssText=b;else return a.style.cssText};j.mf=function(b,a){if(a===f){a=w(b,"backgroundImage")||"";var c=/\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(a)||[];return c[1]}w(b,"backgroundImage",a?"url('"+a+"')":"")};var J;j.Ze=J={$Opacity:j.cf,$Top:j.Z,$Right:j.Wd,$Bottom:j.Ld,$Left:j.T,H:j.D,G:j.C,fc:j.pb,Od:j.yb,$ZIndex:j.Y};j.Md=function(c,b){var a={};l(b,function(d,b){if(J[b])a[b]=J[b](c)});return a};function s(b,i){var a=H(),g=bb(),h=M(b);function d(l,a){a=a||{};var g=a.$TranslateZ||0,i=(a.$RotateX||0)%360,j=(a.$RotateY||0)%360,k=(a.$Rotate||0)%360,c=a.$ScaleX,d=a.$ScaleY,e=a.Mh;if(c==f)c=1;if(d==f)d=1;if(e==f)e=1;var b=new Ab(a.$TranslateX,a.$TranslateY,g);b.$Scale(c,d,e);b.Xe(a.$SkewX,a.$SkewY);b.$RotateX(i);b.$RotateY(j);b.Ve(k);b.$Move(a.P,a.L);l.style[h]=b.Te()}s=function(c,b){b=b||{};var i=b.P,k=b.L,h;l(J,function(a,d){h=b[d];h!==f&&a(c,h)});j.Og(c,b.$Clip);j.Gg(c,b.Ab);if(!a){i!=f&&j.T(c,(b.Fe||0)+i);k!=f&&j.Z(c,(b.De||0)+k)}if(b.Re)if(g)ub(j.V(e,N,c,b));else if(a)d(c,b);else N(c,b)};j.S=s;s(b,i)}j.S=s;function Ab(j,k,o){var d=this,b=[1,0,0,0,0,1,0,0,0,0,1,0,j||0,k||0,o||0,1],i=c.ub,h=c.Rb,l=c.Pd;function g(a){return a*c.E/180}function m(b,c,f,g,i,l,n,o,q,t,u,w,y,A,C,F,a,d,e,h,j,k,m,p,r,s,v,x,z,B,D,E){return[b*a+c*j+f*r+g*z,b*d+c*k+f*s+g*B,b*e+c*m+f*v+g*D,b*h+c*p+f*x+g*E,i*a+l*j+n*r+o*z,i*d+l*k+n*s+o*B,i*e+l*m+n*v+o*D,i*h+l*p+n*x+o*E,q*a+t*j+u*r+w*z,q*d+t*k+u*s+w*B,q*e+t*m+u*v+w*D,q*h+t*p+u*x+w*E,y*a+A*j+C*r+F*z,y*d+A*k+C*s+F*B,y*e+A*m+C*v+F*D,y*h+A*p+C*x+F*E]}function f(c,a){return m.apply(e,(a||b).concat(c))}d.$Scale=function(a,c,d){if(a!=1||c!=1||d!=1)b=f([a,0,0,0,0,c,0,0,0,0,d,0,0,0,0,1])};d.$Move=function(a,c,d){b[12]+=a||0;b[13]+=c||0;b[14]+=d||0};d.$RotateX=function(c){if(c){a=g(c);var d=h(a),e=i(a);b=f([1,0,0,0,0,d,e,0,0,-e,d,0,0,0,0,1])}};d.$RotateY=function(c){if(c){a=g(c);var d=h(a),e=i(a);b=f([d,0,-e,0,0,1,0,0,e,0,d,0,0,0,0,1])}};d.Ve=function(c){if(c){a=g(c);var d=h(a),e=i(a);b=f([d,e,0,0,-e,d,0,0,0,0,1,0,0,0,0,1])}};d.Xe=function(a,c){if(a||c){j=g(a);k=g(c);b=f([1,l(k),0,0,l(j),1,0,0,0,0,1,0,0,0,0,1])}};d.Te=function(){return"matrix3d("+b.join(",")+")"}}var P={Fe:0,De:0,P:0,L:0,$Zoom:1,$ScaleX:1,$ScaleY:1,$Rotate:0,$RotateX:0,$RotateY:0,$TranslateX:0,$TranslateY:0,$TranslateZ:0,$SkewX:0,$SkewY:0};j.Jc=function(c,d){var a=c||{};if(c)if(b.fe(c))a={U:a};else if(b.fe(c.$Clip))a.$Clip={U:c.$Clip};a.U=a.U||d;if(a.$Clip)a.$Clip.U=a.$Clip.U||d;if(a.Ab)a.Ab.U=a.Ab.U||d;return a};function tb(c,a){var b={};l(c,function(c,d){var e=c;if(a[d]!=f)if(j.Fc(c))e=c+a[d];else e=tb(c,a[d]);b[d]=e});return b}j.gf=tb;j.ke=function(o,j,s,t,D,E,p){var a=j;if(o){a={};for(var i in j){var F=E[i]||1,B=D[i]||[0,1],h=(s-B[0])/B[1];h=c.j(c.m(h,0),1);h=h*F;var y=c.N(h);if(h!=y)h-=y;var k=t.U||g.$Linear,m,G=o[i],r=j[i];if(b.Fc(r)){k=t[i]||k;var C=k(h);m=G+r*C}else{m=A({yc:{}},o[i]);var z=t[i]||{};l(r.yc||r,function(d,a){k=z[a]||z.U||k;var c=k(h),b=d*c;m.yc[a]=b;m[a]+=b})}a[i]=m}var x=l(j,function(b,a){return P[a]!=f});x&&l(P,function(c,b){if(a[b]==f&&o[b]!==f)a[b]=o[b]});if(x){if(a.$Zoom)a.$ScaleX=a.$ScaleY=a.$Zoom;a.$OriginalWidth=p.$OriginalWidth;a.$OriginalHeight=p.$OriginalHeight;if(v()&&n>=11&&(j.P||j.L)&&s!=0&&s!=1)a.$Rotate=a.$Rotate||1e-8;a.Re=d}}if(j.$Clip&&p.$Move){var q=a.$Clip.yc,w=(q.$Top||0)+(q.$Bottom||0),u=(q.$Left||0)+(q.$Right||0);a.$Left=(a.$Left||0)+u;a.$Top=(a.$Top||0)+w;a.$Clip.$Left-=u;a.$Clip.$Right-=u;a.$Clip.$Top-=w;a.$Clip.$Bottom-=w}if(a.$Clip&&!a.$Clip.$Top&&!a.$Clip.$Left&&!a.$Clip.L&&!a.$Clip.P&&a.$Clip.$Right==p.$OriginalWidth&&a.$Clip.$Bottom==p.$OriginalHeight)a.$Clip=e;return a}};function o(){var a=this,f,e=[],c=[];function k(a,b){e.push({Kb:a,Jb:b})}function j(a,c){b.c(e,function(b,d){b.Kb==a&&b.Jb===c&&e.splice(d,1)})}function h(){e=[]}function g(){b.c(c,function(a){b.$RemoveEvent(a.be,a.Kb,a.Jb,a.Zd)});c=[]}a.Nc=function(){return f};a.a=function(f,d,e,a){b.$AddEvent(f,d,e,a);c.push({be:f,Kb:d,Jb:e,Zd:a})};a.W=function(f,d,e,a){b.c(c,function(g,h){if(g.be===f&&g.Kb==d&&g.Jb===e&&g.Zd==a){b.$RemoveEvent(f,d,e,a);c.splice(h,1)}})};a.Ae=g;a.$On=a.addEventListener=k;a.$Off=a.removeEventListener=j;a.k=function(a){var c=[].slice.call(arguments,1);b.c(e,function(b){b.Kb==a&&b.Jb.apply(i,c)})};a.$Destroy=function(){if(!f){f=d;g();h()}}}var l=function(C,F,h,m,T,O){C=C||0;var a=this,p,n,o,t,D=0,Q=1,M,N,L,E,B=0,j=0,r=0,A,l,e,g,s,z,v=[],y,I=k,J,H=k;function U(a){e+=a;g+=a;l+=a;j+=a;r+=a;B+=a}function x(C){var k=C;if(s)if(!z&&(k>=g||k<e)||z&&k>=e)k=((k-e)%s+s)%s+e;if(!A||t||j!=k){var i=c.j(k,g);i=c.m(i,e);if(h.$Reverse)i=g-i+e;if(!A||t||i!=r){if(O){var x=(i-l)/(F||1),o=b.ke(T,O,x,M,L,N,h);if(y)b.c(o,function(b,a){y[a]&&y[a](m,b)});else b.S(m,o);var n;if(J){var p=i>e&&i<g;if(p!=H)n=H=p}if(!n&&o.$Opacity!=f){var q=o.$Opacity<.001;if(q!=I)n=I=q}if(n!=f){n&&b.jc(m,"none");!n&&b.jc(m,b.p(m,"data-events"))}}var w=r,u=r=i;b.c(v,function(b,c){var a=!A&&z||k<=j?v[v.length-c-1]:b;a.K(i-B)});j=k;A=d;a.nd(w-l,u-l);a.Yb(w,u)}}}function G(a,b,d){b&&a.$Shift(g);if(!d){e=c.j(e,a.wc()+B);g=c.m(g,a.qb()+B)}v.push(a)}var u=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.msRequestAnimationFrame;if(b.dh()&&b.rd()<7||!u)u=function(a){b.$Delay(a,h.$Interval)};function P(){if(p){var d=b.Cb(),e=c.j(d-D,h.te),a=j+e*o*Q;D=d;if(a*o>=n*o)a=n;x(a);if(!t&&a*o>=n*o)R(E);else u(P)}}function w(f,h,i){if(!p){p=d;t=i;E=h;f=c.m(f,e);f=c.j(f,g);n=f;o=n<j?-1:1;a.td();D=b.Cb();u(P)}}function R(b){if(p){t=p=E=k;a.Xc();b&&b()}}a.$Play=function(a,b,c){w(a?j+a:g,b,c)};a.Ac=w;a.Le=function(a,b){w(g,a,b)};a.M=R;a.ie=function(){return j};a.le=function(){return n};a.n=function(){return r};a.K=x;a.lf=function(){x(g,d)};a.$IsPlaying=function(){return p};a.Be=function(a){Q=a};a.$Shift=U;a.Dd=G;a.R=function(a,b){G(a,0,b)};a.fd=function(a){G(a,1)};a.bd=function(a){g+=a};a.wc=function(){return e};a.qb=function(){return g};a.Yb=a.td=a.Xc=a.nd=b.tg;a.dd=b.Cb();h=b.I({$Interval:16,te:50},h);m&&(J=b.p(m,"data-inactive"));s=h.ic;z=h.Ue;y=h.Ye;e=l=C;g=C+F;N=h.$Round||{};L=h.$During||{};M=b.Jc(h.$Easing)};var n={Oe:"data-scale",Fb:"data-autocenter",ed:"data-nofreeze",Hd:"data-nodrag"},q=new function(){var a=this;a.vc=function(c,a,e,d){(d||!b.p(c,a))&&b.p(c,a,e)};a.mc=function(a){var c=b.z(a,n.Fb);b.Pc(a,c)}},s=i.$JssorSlideshowFormations$=new function(){var h=this,b=0,a=1,f=2,e=3,s=1,r=2,t=4,q=8,w=256,x=512,v=1024,u=2048,j=u+s,i=u+r,o=x+s,m=x+r,n=w+t,k=w+q,l=v+t,p=v+q;function y(a){return(a&r)==r}function z(a){return(a&t)==t}function g(b,a,c){c.push(a);b[a]=b[a]||[];b[a].push(c)}h.$FormationStraight=function(f){for(var d=f.$Cols,e=f.$Rows,s=f.$Assembly,t=f.lc,r=[],a=0,b=0,p=d-1,q=e-1,h=t-1,c,b=0;b<e;b++)for(a=0;a<d;a++){switch(s){case j:c=h-(a*e+(q-b));break;case l:c=h-(b*d+(p-a));break;case o:c=h-(a*e+b);case n:c=h-(b*d+a);break;case i:c=a*e+b;break;case k:c=b*d+(p-a);break;case m:c=a*e+(q-b);break;default:c=b*d+a}g(r,c,[b,a])}return r};h.$FormationSwirl=function(q){var x=q.$Cols,y=q.$Rows,B=q.$Assembly,w=q.lc,A=[],z=[],u=0,c=0,h=0,r=x-1,s=y-1,t,p,v=0;switch(B){case j:c=r;h=0;p=[f,a,e,b];break;case l:c=0;h=s;p=[b,e,a,f];break;case o:c=r;h=s;p=[e,a,f,b];break;case n:c=r;h=s;p=[a,e,b,f];break;case i:c=0;h=0;p=[f,b,e,a];break;case k:c=r;h=0;p=[a,f,b,e];break;case m:c=0;h=s;p=[e,b,f,a];break;default:c=0;h=0;p=[b,f,a,e]}u=0;while(u<w){t=h+","+c;if(c>=0&&c<x&&h>=0&&h<y&&!z[t]){z[t]=d;g(A,u++,[h,c])}else switch(p[v++%p.length]){case b:c--;break;case f:h--;break;case a:c++;break;case e:h++}switch(p[v%p.length]){case b:c++;break;case f:h++;break;case a:c--;break;case e:h--}}return A};h.$FormationZigZag=function(p){var w=p.$Cols,x=p.$Rows,z=p.$Assembly,v=p.lc,t=[],u=0,c=0,d=0,q=w-1,r=x-1,y,h,s=0;switch(z){case j:c=q;d=0;h=[f,a,e,a];break;case l:c=0;d=r;h=[b,e,a,e];break;case o:c=q;d=r;h=[e,a,f,a];break;case n:c=q;d=r;h=[a,e,b,e];break;case i:c=0;d=0;h=[f,b,e,b];break;case k:c=q;d=0;h=[a,f,b,f];break;case m:c=0;d=r;h=[e,b,f,b];break;default:c=0;d=0;h=[b,f,a,f]}u=0;while(u<v){y=d+","+c;if(c>=0&&c<w&&d>=0&&d<x&&typeof t[y]=="undefined"){g(t,u++,[d,c]);switch(h[s%h.length]){case b:c++;break;case f:d++;break;case a:c--;break;case e:d--}}else{switch(h[s++%h.length]){case b:c--;break;case f:d--;break;case a:c++;break;case e:d++}switch(h[s++%h.length]){case b:c++;break;case f:d++;break;case a:c--;break;case e:d--}}}return t};h.$FormationStraightStairs=function(q){var u=q.$Cols,v=q.$Rows,e=q.$Assembly,t=q.lc,r=[],s=0,c=0,d=0,f=u-1,h=v-1,x=t-1;switch(e){case j:case m:case o:case i:var a=0,b=0;break;case k:case l:case n:case p:var a=f,b=0;break;default:e=p;var a=f,b=0}c=a;d=b;while(s<t){if(z(e)||y(e))g(r,x-s++,[d,c]);else g(r,s++,[d,c]);switch(e){case j:case m:c--;d++;break;case o:case i:c++;d--;break;case k:case l:c--;d--;break;case p:case n:default:c++;d++}if(c<0||d<0||c>f||d>h){switch(e){case j:case m:a++;break;case k:case l:case o:case i:b++;break;case p:case n:default:a--}if(a<0||b<0||a>f||b>h){switch(e){case j:case m:a=f;b++;break;case o:case i:b=h;a++;break;case k:case l:b=h;a--;break;case p:case n:default:a=0;b++}if(b>h)b=h;else if(b<0)b=0;else if(a>f)a=f;else if(a<0)a=0}d=b;c=a}}return r};h.$FormationRectangle=function(f){var d=f.$Cols||1,e=f.$Rows||1,h=[],a,b,i;i=c.$Round(c.j(d/2,e/2))+1;for(a=0;a<d;a++)for(b=0;b<e;b++)g(h,i-c.j(a+1,b+1,d-a,e-b),[b,a]);return h};h.$FormationRandom=function(d){for(var e=[],a,b=0;b<d.$Rows;b++)for(a=0;a<d.$Cols;a++)g(e,c.Q(1e5*c.Nd())%13,[b,a]);return e};h.$FormationCircle=function(d){for(var e=d.$Cols||1,f=d.$Rows||1,h=[],a,i=e/2-.5,j=f/2-.5,b=0;b<e;b++)for(a=0;a<f;a++)g(h,c.$Round(c.Pb(c.s(b-i,2)+c.s(a-j,2))),[a,b]);return h};h.$FormationCross=function(d){for(var e=d.$Cols||1,f=d.$Rows||1,h=[],a,i=e/2-.5,j=f/2-.5,b=0;b<e;b++)for(a=0;a<f;a++)g(h,c.$Round(c.j(c.J(b-i),c.J(a-j))),[a,b]);return h};h.$FormationRectangleCross=function(f){for(var h=f.$Cols||1,i=f.$Rows||1,j=[],a,d=h/2-.5,e=i/2-.5,k=c.m(d,e)+1,b=0;b<h;b++)for(a=0;a<i;a++)g(j,c.$Round(k-c.m(d-c.J(b-d),e-c.J(a-e)))-1,[a,b]);return j}};i.$JssorSlideshowRunner$=function(m,r,p,u,z,A){var a=this,v,h,f,y=0,x=u.$TransitionsOrder,q,i=8;function t(a){if(a.$Top)a.L=a.$Top;if(a.$Left)a.P=a.$Left;b.c(a,function(a){b.vd(a)&&t(a)})}function j(h,e,f){var a={$Interval:e,$Duration:1,$Delay:0,$Cols:1,$Rows:1,$Opacity:0,$Zoom:0,$Clip:0,$Move:k,$SlideOut:k,$Reverse:k,$Formation:s.$FormationRandom,$Assembly:1032,$ChessMode:{$Column:0,$Row:0},$Easing:g.$Linear,$Round:{},zc:[],$During:{}};b.I(a,h);if(a.$Rows==0)a.$Rows=c.$Round(a.$Cols*f);t(a);a.lc=a.$Cols*a.$Rows;a.$Easing=b.Jc(a.$Easing,g.$Linear);a.ef=c.Q(a.$Duration/a.$Interval);a.df=function(c,b){c/=a.$Cols;b/=a.$Rows;var f=c+"x"+b;if(!a.zc[f]){a.zc[f]={H:c,G:b};for(var d=0;d<a.$Cols;d++)for(var e=0;e<a.$Rows;e++)a.zc[f][e+","+d]={$Top:e*b,$Right:d*c+c,$Bottom:e*b+b,$Left:d*c}}return a.zc[f]};if(a.$Brother){a.$Brother=j(a.$Brother,e,f);a.$SlideOut=d}return a}function n(z,i,a,v,n,l){var y=this,t,u={},h={},m=[],f,e,r,p=a.$ChessMode.$Column||0,q=a.$ChessMode.$Row||0,g=a.df(n,l),o=B(a),C=o.length-1,s=a.$Duration+a.$Delay*C,w=v+s,j=a.$SlideOut,x;w+=50;function B(a){var b=a.$Formation(a);return a.$Reverse?b.reverse():b}y.Id=w;y.xc=function(d){d-=v;var e=d<s;if(e||x){x=e;if(!j)d=s-d;var f=c.Q(d/a.$Interval);b.c(h,function(a,e){var d=c.m(f,a.j);d=c.j(d,a.length-1);if(a.Jd!=d){if(!a.Jd&&!j)b.hb(m[e]);else d==a.m&&j&&b.zb(m[e]);a.Jd=d;b.S(m[e],a[d])}})}};i=b.bb(i);A(i,0,0);b.c(o,function(i,m){b.c(i,function(G){var I=G[0],H=G[1],v=I+","+H,o=k,s=k,x=k;if(p&&H%2){if(p&3)o=!o;if(p&12)s=!s;if(p&16)x=!x}if(q&&I%2){if(q&3)o=!o;if(q&12)s=!s;if(q&16)x=!x}a.$Top=a.$Top||a.$Clip&4;a.$Bottom=a.$Bottom||a.$Clip&8;a.$Left=a.$Left||a.$Clip&1;a.$Right=a.$Right||a.$Clip&2;var C=s?a.$Bottom:a.$Top,z=s?a.$Top:a.$Bottom,B=o?a.$Right:a.$Left,A=o?a.$Left:a.$Right;a.$Clip=C||z||B||A;r={};e={L:0,P:0,$Opacity:1,H:n,G:l};f=b.I({},e);t=b.I({},g[v]);if(a.$Opacity)e.$Opacity=2-a.$Opacity;if(a.$ZIndex){e.$ZIndex=a.$ZIndex;f.$ZIndex=0}var K=a.$Cols*a.$Rows>1||a.$Clip;if(a.$Zoom||a.$Rotate){var J=d;if(J){e.$Zoom=a.$Zoom?a.$Zoom-1:1;f.$Zoom=1;var N=a.$Rotate||0;e.$Rotate=N*360*(x?-1:1);f.$Rotate=0}}if(K){var i=t.yc={};if(a.$Clip){var w=a.$ScaleClip||1;if(C&&z){i.$Top=g.G/2*w;i.$Bottom=-i.$Top}else if(C)i.$Bottom=-g.G*w;else if(z)i.$Top=g.G*w;if(B&&A){i.$Left=g.H/2*w;i.$Right=-i.$Left}else if(B)i.$Right=-g.H*w;else if(A)i.$Left=g.H*w}r.$Clip=t;f.$Clip=g[v]}var L=o?1:-1,M=s?1:-1;if(a.x)e.P+=n*a.x*L;if(a.y)e.L+=l*a.y*M;b.c(e,function(a,c){if(b.Fc(a))if(a!=f[c])r[c]=a-f[c]});u[v]=j?f:e;var D=a.ef,y=c.$Round(m*a.$Delay/a.$Interval);h[v]=new Array(y);h[v].j=y;h[v].m=y+D-1;for(var F=0;F<=D;F++){var E=b.ke(f,r,F/D,a.$Easing,a.$During,a.$Round,{$Move:a.$Move,$OriginalWidth:n,$OriginalHeight:l});E.$ZIndex=E.$ZIndex||1;h[v].push(E)}})});o.reverse();b.c(o,function(a){b.c(a,function(c){var f=c[0],e=c[1],d=f+","+e,a=i;if(e||f)a=b.bb(i);b.S(a,u[d]);b.Nb(a,"hidden");b.pb(a,"absolute");z.Ie(a);m[d]=a;b.hb(a,!j)})})}function w(){var a=this,b=0;l.call(a,0,v);a.Yb=function(c,a){if(a-b>i){b=a;f&&f.xc(a);h&&h.xc(a)}};a.sd=q}a.Je=function(){var a=0,b=u.$Transitions,d=b.length;if(x)a=y++%d;else a=c.N(c.Nd()*d);b[a]&&(b[a].Ub=a);return b[a]};a.Me=function(x,y,k,l,b,t){a.Bb();q=b;b=j(b,i,t);var g=l.Ad,e=k.Ad;g["no-image"]=!l.ud;e["no-image"]=!k.ud;var o=g,s=e,w=b,d=b.$Brother||j({},i,t);if(!b.$SlideOut){o=e;s=g}var u=d.$Shift||0;h=new n(m,s,d,c.m(u-d.$Interval,0),r,p);f=new n(m,o,w,c.m(d.$Interval-u,0),r,p);h.xc(0);f.xc(0);v=c.m(h.Id,f.Id);a.Ub=x};a.Bb=function(){m.Bb();h=e;f=e};a.He=function(){var a=e;if(f)a=new w;return a};if(z&&b.Sg()<537)i=16;o.call(a);l.call(a,-1e7,1e7)};var r={pc:1};i.$JssorBulletNavigator$=function(){var a=this,E=b.X(a,o),h,v,C,B,m,l=0,g,s,p,z,A,i,k,u,t,x,j;function y(a){j[a]&&j[a].Qd(a==l)}function w(b){a.k(r.pc,b*s)}a.Sc=function(a){if(a!=m){var d=l,b=c.N(a/s);l=b;m=a;y(d);y(b)}};a.Vc=function(a){b.hb(h,a)};a.Uc=function(J){b.$Destroy(j);m=f;a.Ae();x=[];j=[];b.Ib(h);v=c.Q(J/s);l=0;var F=u+z,G=t+A,r=c.Q(v/p)-1;C=u+F*(!i?r:p-1);B=t+G*(i?r:p-1);b.D(h,C);b.C(h,B);for(var n=0;n<v;n++){var H=b.ug();b.Cg(H,n+1);var o=b.Xd(k,"numbertemplate",H,d);b.pb(o,"absolute");var E=n%(r+1),I=c.N(n/(r+1)),y=g.ec&&!i?r-E:E;b.T(o,(!i?y:I)*F);b.Z(o,(i?y:I)*G);b.F(h,o);x[n]=o;g.$ActionMode&1&&a.a(o,"click",b.V(e,w,n));g.$ActionMode&2&&a.a(o,"mouseenter",b.V(e,w,n));j[n]=b.sc(o)}q.mc(h)};a.v=function(d,c){a.$Elmt=h=b.$GetElement(d);a.gd=g=b.I({$SpacingX:10,$SpacingY:10,$ActionMode:1},c);k=b.$FindChild(h,"prototype");u=b.D(k);t=b.C(k);b.sb(k,h);s=g.$Steps||1;p=g.$Rows||1;z=g.$SpacingX;A=g.$SpacingY;i=g.$Orientation&2;g.$AutoCenter&&q.vc(h,n.Fb,g.$AutoCenter)};a.$Destroy=function(){b.$Destroy(j,E)};b.v(a)};i.$JssorArrowNavigator$=function(){var a=this,v=b.X(a,o),f,c,g,l,s,k,h,m,j,i;function p(b){a.k(r.pc,b,d)}function u(a){b.hb(f,a);b.hb(c,a)}function t(){j.$Enable((g.$Loop||!l.We(h))&&k>1);i.$Enable((g.$Loop||!l.Ne(h))&&k>1)}a.Sc=function(c,a,b){h=a;!b&&t()};a.Vc=u;a.Uc=function(g){k=g;h=0;if(!s){a.a(f,"click",b.V(e,p,-m));a.a(c,"click",b.V(e,p,m));j=b.sc(f);i=b.sc(c);b.p(f,n.ed,1);b.p(c,n.ed,1);s=d}};a.v=function(e,d,h,i){a.gd=g=b.I({$Steps:1},h);f=e;c=d;if(g.ec){f=d;c=e}m=g.$Steps;l=i;if(g.$AutoCenter){q.vc(f,n.Fb,g.$AutoCenter);q.vc(c,n.Fb,g.$AutoCenter)}q.mc(f);q.mc(c)};a.$Destroy=function(){b.$Destroy(j,i,v)};b.v(a)};i.$JssorThumbnailNavigator$=function(){var i=this,E=b.X(i,o),h,B,a,y,C,m,l=[],A,z,g,p,s,w,v,x,t,u;function D(){var c=this;b.X(c,o);var h,f,n,l;function p(){n.Qd(m==h)}function j(e){if(e||!t.$LastDragSucceeded()){var c=g-h%g,a=t.Ee((h+c)/g-1),b=a*g+g-c;if(a<0)b+=y%g;if(a>=C)b-=y%g;i.k(r.pc,b,k,d)}}c.ge=p;c.v=function(g,i){c.Ub=h=i;l=g.hf||g.ud||b.ac();c.Tc=f=b.Xd(u,"thumbnailtemplate",l,d);n=b.sc(f);a.$ActionMode&1&&c.a(f,"click",b.V(e,j,0));a.$ActionMode&2&&c.a(f,"mouseenter",b.V(e,j,1))};b.v(c)}i.Sc=function(a,e,d){if(a!=m){var b=m;m=a;b!=-1&&l[b].ge();l[a]&&l[a].ge()}!d&&t.$PlayTo(t.Ee(c.N(a/g)))};i.Vc=function(a){b.hb(h,a)};i.Uc=function(I,J){b.$Destroy(t,l);m=f;l=[];var K=b.bb(B);b.Ib(h);a.ec&&b.p(h,"dir","rtl");b.Fg(h,b.wb(K));var i=b.$FindChild(h,"slides",d);y=I;C=c.Q(y/g);m=-1;var e=a.$Orientation&1,r=w+(w+p)*(g-1)*(1-e),o=v+(v+s)*(g-1)*e,E=(e?c.m:c.j)(A,r),u=(e?c.j:c.m)(z,o);x=c.Q((A-p)/(w+p)*e+(z-s)/(v+s)*(1-e));var G=r+(r+p)*(x-1)*e,F=o+(o+s)*(x-1)*(1-e);E=c.j(E,G);u=c.j(u,F);b.D(i,E);b.C(i,u);b.Pc(i,3);var n=[];b.c(J,function(k,f){var h=new D(k,f),d=h.Tc,a=c.N(f/g),j=f%g;b.T(d,(w+p)*j*(1-e));b.Z(d,(v+s)*j*e);if(!n[a]){n[a]=b.ac();b.F(i,n[a])}b.F(n[a],d);l.push(h)});var H=b.I({$AutoPlay:0,$NaviQuitDrag:k,$SlideWidth:r,$SlideHeight:o,$SlideSpacing:p*e+s*(1-e),$MinDragOffsetToSlide:12,$SlideDuration:200,$PauseOnHover:1,$Cols:x,$PlayOrientation:a.$Orientation,$DragOrientation:a.$NoDrag||a.$DisableDrag?0:a.$Orientation},a);t=new j(h,H);q.mc(h)};i.v=function(j,f,e){h=j;i.gd=a=b.I({$SpacingX:0,$SpacingY:0,$Orientation:1,$ActionMode:1},f);A=b.D(h);z=b.C(h);var c=b.$FindChild(h,"slides",d);u=b.$FindChild(c,"prototype");e=b.bb(e);b.tb(e,c);w=b.D(u);v=b.C(u);b.sb(u,c);b.pb(c,"absolute");b.Nb(c,"hidden");g=a.$Rows||1;p=a.$SpacingX;s=a.$SpacingY;a.$AutoCenter&=a.$Orientation;a.$AutoCenter&&q.vc(h,n.Fb,a.$AutoCenter);B=b.bb(h)};i.$Destroy=function(){b.$Destroy(t,l,E)};b.v(i)};function p(e,d,c){var a=this;b.X(a,o);l.call(a,0,c.$Idle);a.qc=0;a.Oc=c.$Idle}p.Kc=21;p.uc=24;var t=i.$JssorCaptionSlideo$=function(){var a=this,hb=b.X(a,o);l.call(a,0,0);var f,s,gb=[g.$Linear,g.$Swing,g.$InQuad,g.$OutQuad,g.$InOutQuad,g.$InCubic,g.$OutCubic,g.$InOutCubic,g.$InQuart,g.$OutQuart,g.$InOutQuart,g.$InQuint,g.$OutQuint,g.$InOutQuint,g.$InSine,g.$OutSine,g.$InOutSine,g.$InExpo,g.$OutExpo,g.$InOutExpo,g.$InCirc,g.$OutCirc,g.$InOutCirc,g.$InElastic,g.$OutElastic,g.$InOutElastic,g.$InBack,g.$OutBack,g.$InOutBack,g.$InBounce,g.$OutBounce,g.$InOutBounce,g.$Early,g.$Late],G={},J,C,x=new l(0,0),K=[],v=[],E,q=0;function M(d,c){var a={};b.c(d,function(d,f){var e=G[f];if(e){if(b.vd(d))d=M(d,c||f=="e");else if(c)if(b.Fc(d))d=gb[d];a[e]=d}});return a}function O(c,f){var e=[],d=b.z(c,"play");if(f&&d){var g=new t(c,s,{Pg:d});T.push(g);a.a(g,p.Kc,Z);a.a(g,p.uc,U)}else b.c(b.wb(c),function(a){e=e.concat(O(a,f+1))});if(!f&&(!j||j&16)||f&&(!d||!(d&16))){var h=J[b.z(c,"t")];h&&e.push({$Elmt:c,sd:h})}return e}function F(c,f){var a=K[c];if(a==e){a=K[c]={lb:c,Qc:[],ve:[]};var d=0;!b.c(v,function(a,b){d=b;return a.lb>c})&&d++;v.splice(d,0,a)}return a}function db(o,p,g){var a,f;if(C){var k=C[b.z(o,"c")];if(k){a=F(k.r,0);a.Lg=k.e||0}}b.c(p,function(h){var e=b.I(d,{},M(h)),i=b.Jc(e.$Easing);delete e.$Easing;if(e.$Left){e.P=e.$Left;i.P=i.$Left;delete e.$Left}if(e.$Top){e.L=e.$Top;i.L=i.$Top;delete e.$Top}var m={$Easing:i,$OriginalWidth:g.H,$OriginalHeight:g.G},j=new l(h.b,h.d,m,o,g,e);q=c.m(q,h.b+h.d);if(a){if(!f)f=new l(h.b,0);f.R(j)}else{var k=F(h.b,h.b+h.d);k.Qc.push(j)}if(e.Ab)g.Ab={yd:0,Sd:0,Td:0,$Opacity:0};g=b.gf(g,e)});if(a&&f){f.lf();var h=f,j,i=f.wc(),m=f.qb(),n=c.m(m,a.Lg);if(a.lb<m){if(a.lb>i){h=new l(i,a.lb-i);h.R(f,d)}else h=e;j=new l(a.lb,n-i,{ic:n-a.lb,Ue:d});j.R(f,d)}h&&a.Qc.push(h);j&&a.ve.push(j)}return g}function cb(a){b.c(a,function(f){var a=f.$Elmt,e=b.D(a),d=b.C(a),c={$Left:b.T(a),$Top:b.Z(a),P:0,L:0,$Opacity:1,$ZIndex:b.Y(a)||0,$Rotate:0,$RotateX:0,$RotateY:0,$ScaleX:1,$ScaleY:1,$TranslateX:0,$TranslateY:0,$TranslateZ:0,$SkewX:0,$SkewY:0,H:e,G:d,$Clip:{$Top:0,$Right:e,$Bottom:d,$Left:0}};c.Fe=c.$Left;c.De=c.$Top;db(a,f.sd,c)})}function fb(f,e,g){var c=f.b-e;if(c){var b=new l(e,c);b.R(x,d);b.$Shift(g);a.R(b)}a.bd(f.d);return c}function eb(e){var c=x.wc(),d=0;b.c(e,function(e,f){e=b.I({d:3e3},e);fb(e,c,d);c=e.b;d+=e.d;if(!f||e.t==2){a.qc=c;a.Oc=c+e.d}})}function B(i,d,e){var f=d.length;if(f>4)for(var j=c.Q(f/4),a=0;a<j;a++){var g=d.slice(a*4,c.j(a*4+4,f)),h=new l(g[0].lb,0);B(h,g,e);i.R(h)}else b.c(d,function(a){b.c(e?a.ve:a.Qc,function(a){e&&a.bd(q-a.qb());i.R(a)})})}var j,L,z=0,i,y,Q,P,A,T=[],N=[],r,D,m;function w(a){return a&2||a&4&&b.kd().Yc}function ab(){if(!A){i&8&&a.a(h,"keydown",H);if(i&32){a.a(h,"mousedown",u);a.a(h,"touchstart",u)}A=d}}function Y(){a.W(h,"keydown",H);a.W(h,"mousedown",u);a.W(h,"touchstart",u);A=k}function R(b){if(!r||b){r=d;a.M();b&&z&&a.K(0);a.Be(1);a.Le();ab();a.k(p.Kc,a)}}function n(){if(!D&&(r||a.n())){D=d;a.M();a.ie()>a.qc&&a.K(a.qc);a.Be(Q||1);a.Ac(0)}}function V(){!m&&n()}function S(c){var b=c;if(c<0&&a.n())b=1;if(b!=z){z=b;L&&a.k(p.uc,a,z)}}function H(a){i&8&&b.re(a)==27&&n()}function X(a){if(m&&b.Bd(a)!==e){m=k;i&16&&b.$Delay(V,160)}}function u(a){i&32&&!b.oe(f,b.$EvtSrc(a))&&n()}function W(a){if(!m){m=d;if(j&1)b.se(a,f)&&R()}}function bb(h){var g=b.$EvtSrc(h),a=b.vb(g,e,e,"A"),c=a&&(b.pg(a)||a===f||b.oe(f,a));if(r&&w(i))!c&&n();else if(w(j))!c&&R(d)}function Z(b){var c=b.Mg(),a=N[c];a!==b&&a&&a.vg();N[c]=b}function U(b,c){a.k(p.uc,b,c)}a.Mg=function(){return P||""};a.vg=n;a.td=function(){S(1)};a.Xc=function(){r=k;D=k;S(-1);!a.n()&&Y()};a.Yb=function(){!m&&y&&a.ie()>a.Oc&&n()};a.v=function(m,h,e){f=m;s=h;j=e.Pg;E=e.sg;J=s.$Transitions;C=s.$Controls;var l={$Top:"y",$Left:"x",$Bottom:"m",$Right:"t",$Rotate:"r",$RotateX:"rX",$RotateY:"rY",$ScaleX:"sX",$ScaleY:"sY",$TranslateX:"tX",$TranslateY:"tY",$TranslateZ:"tZ",$SkewX:"kX",$SkewY:"kY",$Opacity:"o",$Easing:"e",$ZIndex:"i",$Clip:"c",Ab:"bc",yd:"re",Sd:"gr",Td:"bl"};b.c(l,function(b,a){G[b]=a});cb(O(f,0));B(x,v);if(j){a.R(x);E=d;y=b.z(f,"idle");i=b.z(f,"rollback");Q=b.z(f,"speed",1);P=b.fb(f,"group");(w(j)||w(i))&&a.a(f,"click",bb);if((j&1||y)&&!b.kd().Yc){a.a(f,"mouseenter",W);a.a(f,"mouseleave",X)}L=b.z(f,"pause")}var k=s.$Breaks||[],c=k[b.z(f,"b")]||[],g={b:q,d:c.length?0:e.$Idle||y||0};c=c.concat([g]);eb(c);a.qb();E&&a.bd(1e8);q=a.qb();B(a,v,d);a.K(-1);a.K(b.z(f,"initial")||0)};a.$Destroy=function(){b.$Destroy(hb,T);a.M();a.K(-1)};b.v(a)},j=i.$JssorSlider$=(i.module||{}).exports=function(){var a=this,Ec=b.X(a,o),Mb="data-jssor-slider",hc="data-jssor-thumb",u,m,S,Bb,cb,jb,W,J,O,M,Xb,Bc,Fc=1,Ac=1,jc=1,qc=1,mc={},w,R,Kb,Zb,Wb,vb,yb,xb,gb,E=[],Pb,s=-1,sc,q,I,H,P,nb,ob,F,N,kb,T,z,V,mb,Y=[],vc,xc,nc,t,ub,Gb,qb,eb,X,rc,Fb,Ob,tc,G,Jb=0,bb=0,Q=Number.MAX_VALUE,K=Number.MIN_VALUE,C,lb,db,U=1,Ub=0,pb,A,Eb,Db,L,zb,Cb,B,Z,rb,y,Ab,ac=b.kd(),Sb=ac.Yc,x=[],D,hb,ab,Lb,gc,lc,ib;function Ib(){return!U&&X&12}function Gc(){return Ub||!U&&X&3}function Hb(){return!A&&!Ib()&&!y.$IsPlaying()}function Xc(){return!Gc()&&Hb()}function ic(){return z||S}function Oc(){return ic()&2?ob:nb}function kc(a,c,d){b.T(a,c);b.Z(a,d)}function Dc(c,b){var a=ic(),d=(nb*b+Jb)*(a&1),e=(ob*b+Jb)*(a&2)/2;kc(c,d,e)}function cc(b,f){if(A&&!(C&1)){var e=b,d;if(b<K){e=K;d=-1}if(b>Q){e=Q;d=1}if(d){var a=b-e;if(f){a=c.Zf(a)*2/c.E;a=c.s(a*d,1.6)}else{a=c.s(a*d,.625);a=c.Pd(a*c.E/2)}b=e+a*d}}return b}function Qc(a){return cc(a,d)}function Lc(a){return cc(a)}function wb(a,b){if(!(C&1)){var c=a-Q+(b||0),d=K-a+(b||0);if(c>0&&c>d)a=Q;else if(d>0)a=K}return a}function yc(a){return!(C&1)&&a-K<.0001}function wc(a){return!(C&1)&&Q-a<.0001}function sb(a){return!(C&1)&&(a-K<.0001||Q-a<.0001)}function Qb(c,a,d){!ib&&b.c(Y,function(b){b.Sc(c,a,d)})}function dc(b){var a=b,d=sb(b);if(d)a=wb(a);else{b=v(b);a=b}a=c.N(a);a=c.m(a,0);return a}function gd(a){x[s];Pb=s;s=a;sc=x[s]}function Uc(){z=0;var b=B.n(),d=dc(b);Qb(d,b);if(sb(b)||b==c.N(b)){if(t&2&&(eb>0&&d==q-1||eb<0&&!d))t=0;gd(d);a.k(j.$EVT_PARK,s,Pb)}}function oc(a,b){if(q&&(!b||!y.$IsPlaying())){y.M();y.Hc(a,a)}}function tb(a){if(q){a=v(a);a=wb(a);oc(a)}else Qb(0,0)}function ad(){var b=j.me||0,a=lb;j.me|=a;return V=a&~b}function Vc(){if(V){j.me&=~lb;V=0}}function Vb(c){var a=b.ac();b.S(a,gb);c&&b.Nb(a,"hidden");return a}function v(b,a){a=a||q||1;return(b%a+a)%a}function ec(c,a,b){t&8&&(t=0);bc(c,Fb,a,b)}function Rb(){b.c(Y,function(a){a.Vc(a.gd.$ChanceToShow<=U)})}function Kc(c){if(!U&&(b.Bd(c)||!b.se(c,u))){U=1;Rb();if(!A){X&12&&Hc();x[s]&&x[s].Gc()}a.k(j.$EVT_MOUSE_LEAVE)}}function Jc(){if(U){U=0;Rb();A||!(X&12)||Ic()}a.k(j.$EVT_MOUSE_ENTER)}function Nc(){b.S(R,gb)}function Tb(b,a){bc(b,a,d)}function bc(g,h,l,p){if(q&&(!A||m.$NaviQuitDrag)&&!Ib()){var e=B.n(),a=g;if(l){a=e+g;if(C&2){if(yc(e)&&g<0)a=Q;if(wc(e)&&g>0)a=K}}if(!(C&1))if(p)a=v(a);else a=wb(a,.5);if(l&&!sb(a))a=c.$Round(a);var i=(a-e)%q;a=e+i;if(h==f)h=Fb;var b=c.J(i),j=0;if(b){if(b<1)b=c.s(b,.5);if(b>1){var o=Oc(),n=(S&1?yb:xb)/o;b=c.j(b,n*1.5)}j=h*b}ib=d;y.M();ib=k;y.Hc(e,a,j)}}function Rc(e,h,o){var l=this,i={$Top:2,$Right:1,$Bottom:2,$Left:1},m={$Top:"top",$Right:"right",$Bottom:"bottom",$Left:"left"},g,a,f,j,k={};l.$Elmt=e;l.$ScaleSize=function(q,l,u){var p,s=q,r=l;if(!f){f=b.Jg(e);g=e.parentNode;j={$Scale:b.z(e,n.Oe,1),$AutoCenter:b.z(e,n.Fb)};b.c(m,function(c,a){k[a]=b.z(e,"data-scale-"+c,1)});a=e;if(h){a=b.bb(g,d);b.S(a,{$Top:0,$Left:0});b.F(a,e);b.F(g,a)}}if(o){p=c.m(q,l);if(h)if(u>=0&&u<1){var w=c.j(q,l);p=c.j(p/w,1/(1-u))*w}}else s=r=p=c.s(O<M?l:q,j.$Scale);var x=h?1.001:1,t=p*x;h&&(qc=t);b.xg(a,t);b.D(g,f.H*s);b.C(g,f.G*r);var v=b.ae()&&b.rd()<9?t:1,y=(s-v)*f.H/2,z=(r-v)*f.G/2;b.T(a,y);b.Z(a,z);b.c(f,function(d,a){if(i[a]&&d){var e=(i[a]&1)*c.s(q,k[a])*d+(i[a]&2)*c.s(l,k[a])*d/2;b.Ze[a](g,e)}});b.Pc(g,j.$AutoCenter)}}function ed(){var a=this;l.call(a,0,0,{ic:q});b.c(x,function(b){a.fd(b);b.$Shift(G/F)})}function dd(){var a=this,b=Ab.$Elmt;l.call(a,-1,2,{$Easing:g.$Linear,Ye:{fc:Dc},ic:q,$Reverse:Gb},b,{fc:1},{fc:-2});a.Tc=b}function fd(){var b=this;l.call(b,-1e8,2e8);b.Yb=function(e,b){if(c.J(b-e)>1e-5){var g=b,f=b;if(c.N(b)!=b&&b>e&&(C&1||b>bb))f++;var h=dc(f);Qb(h,g,d);a.k(j.$EVT_POSITION_CHANGE,v(g),v(e),b,e)}}}function Tc(o,n){var b=this,g,i,f,c,h;l.call(b,-1e8,2e8,{te:100});b.td=function(){pb=d;a.k(j.$EVT_SWIPE_START,v(B.n()),Z.n())};b.Xc=function(){pb=k;c=k;a.k(j.$EVT_SWIPE_END,v(B.n()),Z.n());!A&&Uc()};b.Yb=function(e,b){var a=b;if(c)a=h;else if(f){var d=b/f;a=m.$SlideEasing(d)*(i-g)+g}a=Qc(a);Z.K(a)};b.Hc=function(a,c,h,e){A=k;f=h||1;g=a;i=c;ib=d;Z.K(a);ib=k;b.K(0);b.Ac(f,e)};b.Rg=function(){c=d;c&&b.$Play(e,e,d)};b.Ug=function(a){h=a};Z=new fd;Z.R(o);Z.R(n)}function Pc(){var c=this,a=Vb();b.Y(a,0);c.$Elmt=a;c.Ie=function(c){b.F(a,c);b.hb(a)};c.Bb=function(){b.zb(a);b.Ib(a)}}function cd(w,h){var g=this,jb=b.X(g,o),y,F=0,V,u,G,A,J,n,E=[],U,M,Q,i,r,z,S;l.call(g,-N,N+1,{ic:C&1?q:f,$Reverse:Gb});function K(){y&&y.$Destroy();Ub-=F;F=0;y=new cb.$Class(u,cb,{$Idle:b.z(u,"idle",rc),sg:!t});y.$On(p.uc,X)}function Y(){y.dd<cb.dd&&K()}function X(b,a){F+=a;Ub+=a;if(h==s)!F&&g.Gc()}function P(o,q,m){if(!M){M=d;if(n&&m){var e=m.width,c=m.height,l=e,i=c;if(e&&c&&A){if(A&3&&(!(A&4)||e>I||c>H)){var f=k,p=I/H*c/e;if(A&1)f=p>1;else if(A&2)f=p<1;l=f?e*H/c:I;i=f?H:c*I/e}b.D(n,l);b.C(n,i);b.Z(n,(H-i)/2);b.T(n,(I-l)/2)}b.pb(n,"absolute")}a.k(j.$EVT_LOAD_END,h)}q.we(k);o&&o(g)}function W(f,b,c,e){if(e==z&&s==h&&t&&Hb()&&!g.Nc()){var a=v(f);D.Me(a,h,b,g,c,H/I);b.eh();rb.$Shift(a-rb.wc()-1);rb.K(a);oc(a,d)}}function ab(b){if(b==z&&s==h&&Hb()&&!g.Nc()){if(!i){var a=e;if(D)if(D.Ub==h)a=D.He();else D.Bb();Y();i=new bd(w,h,a,y);i.og(r)}!i.$IsPlaying()&&i.ad()}}function L(a,d,k){if(a==h){if(a!=d)x[d]&&x[d].qe();else!k&&i&&i.Df();r&&r.$Enable();z=b.Cb();g.Qb(b.V(e,ab,z))}else{var j=c.j(h,a),f=c.m(h,a),n=c.j(f-j,j+q-f),l=N+m.$LazyLoading-1;(!Q||n<=l)&&g.Qb()}}function bb(){if(s==h&&i){i.M();r&&r.$Quit();r&&r.$Disable();i.je()}}function hb(){s==h&&i&&i.M()}function Z(b){!db&&a.k(j.$EVT_CLICK,h,b)}g.we=function(a){if(S!=a){S=a;a&&b.F(w,J);!a&&b.sb(J)}};g.Qb=function(f,c){c=c||g;if(E.length&&!M){c.we(d);if(!U){U=d;a.k(j.$EVT_LOAD_START,h);b.c(E,function(a){if(!b.p(a,"src")){var c=b.fb(a,"src")||b.fb(a,"src2")||"";if(c){a.src=c;b.yb(a,b.p(a,"data-display"))}}})}b.Ig(E,n,b.V(e,P,f,c))}else P(f,c)};g.Gf=function(){if(Xc())if(q==1){g.qe();L(h,h)}else{var a;if(D)a=D.Je(q);if(a){z=b.Cb();var c=h+eb,d=x[v(c)];return d.Qb(b.V(e,W,c,d,a,z),g)}else(C||!sb(B.n())||!sb(B.n()+eb))&&Tb(eb)}};g.Gc=function(){L(h,h,d)};g.qe=function(){r&&r.$Quit();r&&r.$Disable();g.ee();i&&i.Kf();i=e;K()};g.eh=function(){b.zb(w)};g.ee=function(){b.hb(w)};function T(a,i,c){if(b.p(a,Mb))return;if(c){if(!u){u=a;G=Vb(d);b.qd(G,b.qd(u));b.qd(u,e);b.tb(G,u)}b.p(a,"data-events",b.jc(a));b.p(a,"data-display",b.yb(a));b.ch(a,b.fb(a,"data-to"));b.bh(a,b.fb(a,"data-bf"));c>1&&b.Ec(a,b.p(a,"data-ts"));b.ah(a,b.z(a,"data-p"));b.yg(a,b.fb(a,"po"));if(a.tagName=="IMG"){E.push(a);if(!b.p(a,"src")){Q=d;b.zb(a)}}var f=b.mf(a);if(f){var g=new Image;b.p(g,"src",f);E.push(g)}c&&b.Y(a,(b.Y(a)||0)+1)}var h=b.wb(a);b.c(h,function(d){if(c<3&&!n)if(b.fb(d,"u")=="image"){n=d;n.border=0;b.S(n,gb);b.S(a,gb);b.Db(n,"maxWidth","10000px");b.F(G,n)}T(d,i,c+1)})}g.nd=function(c,b){var a=N-b;Dc(V,a)};g.Ub=h;T(w,d,0);A=b.z(u,"data-fillmode",m.$FillMode);var O=b.$FindChild(u,"thumb",d);if(O){g.hf=b.bb(O);b.zb(O)}b.hb(w);J=b.bb(R);b.Y(J,1e3);g.a(w,"click",Z);K(d);g.ud=n;g.Ad=w;g.Tc=V=w;g.a(a,203,L);g.a(a,28,hb);g.a(a,24,bb);g.$Destroy=function(){b.$Destroy(jb,y,i)}}function bd(F,h,q,r){var c=this,E=b.X(c,o),i=0,u=0,g,m,f,e,n,w,v,y=x[h];l.call(c,0,0);function B(){c.ad()}function C(a){v=a;c.M();c.ad()}function z(){}c.ad=function(){if(!A&&!pb&&!v&&s==h&&!c.Nc()){var k=c.n();if(!k)if(g&&!n){n=d;c.je(d);a.k(j.$EVT_SLIDESHOW_START,h,u,i,u,g,e)}a.k(j.$EVT_STATE_CHANGE,h,k,i,m,f,e);if(!Ib()){var l;if(k==e)t&&b.$Delay(y.Gf,20);else{if(k==f)l=e;else if(!k)l=f;else l=c.le();(k!=f||!Gc())&&c.Ac(l,B)}}}};c.Df=function(){f==e&&f==c.n()&&c.K(m)};c.Kf=function(){D&&D.Ub==h&&D.Bb();var b=c.n();b<e&&a.k(j.$EVT_STATE_CHANGE,h,-b-1,i,m,f,e)};c.je=function(a){q&&b.Nb(T,a&&q.sd.$Outside?"":"hidden")};c.nd=function(c,b){if(n&&b>=g){n=k;y.ee();D.Bb();a.k(j.$EVT_SLIDESHOW_END,h,g,i,u,g,e)}a.k(j.$EVT_PROGRESS_CHANGE,h,b,i,m,f,e)};c.og=function(a){if(a&&!w){w=a;a.$On($JssorPlayer$.Pe,C)}};c.a(r,p.Kc,z);q&&c.fd(q);g=c.qb();c.fd(r);m=g+r.qc;e=c.qb();f=t?g+r.Oc:e;c.$Destroy=function(){E.$Destroy();c.M()}}function pc(){Lb=pb;gc=y.le();ab=B.n();hb=Lc(ab)}function Ic(){pc();if(A||Ib()){y.M();a.k(j.Jf)}}function Hc(f){if(Hb()){var b=B.n(),a=hb,e=0;if(f&&c.J(L)>=m.$MinDragOffsetToSlide){a=b;e=Cb}a=c.Q(a);a=wb(a+e,.5);var d=c.J(a-b);if(d<1&&m.$SlideEasing!=g.$Linear)d=c.s(d,.5);if((!db||!f)&&Lb)y.Ac(gc);else if(b==a)sc.Gc();else y.Hc(b,a,d*Fb)}}function fc(a){!b.vb(b.$EvtSrc(a),f,n.Hd)&&b.$CancelEvent(a)}function zc(b){Eb=k;A=d;Ic();if(!Lb)z=0;a.k(j.$EVT_DRAG_START,v(ab),ab,b)}function Zc(a){Cc(a,1)}function Cc(c,d){L=0;zb=0;Cb=0;jc=qc;if(d){var i=c.touches[0];Db={x:i.clientX,y:i.clientY}}else Db=b.pd(c);var e=b.$EvtSrc(c),g=b.vb(e,"1",hc);if((!g||g===u)&&!V&&(!d||c.touches.length==1)){mb=b.vb(e,f,n.Hd)||!lb||!ad();a.a(h,d?"touchmove":"mousemove",Yb);Eb=!mb&&b.vb(e,f,n.ed);!Eb&&!mb&&zc(c,d)}}function Yb(a){var e,f;a=b.Yg(a);if(a.type!="mousemove")if(a.touches.length==1){f=a.touches[0];e={x:f.clientX,y:f.clientY}}else fb();else e=b.pd(a);if(e){var i=e.x-Db.x,j=e.y-Db.y,g=c.J(i),h=c.J(j);if(z||g>1.5||h>1.5)if(Eb)zc(a,f);else{if(c.N(hb)!=hb)z=z||S&V;if((i||j)&&!z){if(V==3)if(h>g)z=2;else z=1;else z=V;if(Sb&&z==1&&h>g*2.4)mb=d}var l=i,k=nb;if(z==2){l=j;k=ob}(L-zb)*qb<-1.5&&(Cb=0);(L-zb)*qb>1.5&&(Cb=-1);zb=L;L=l;lc=hb-L*qb/k/jc*m.$DragRatio;if(L&&z&&!mb){b.$CancelEvent(a);y.Rg(d);y.Ug(lc)}}}}function fb(){Vc();a.W(h,"mousemove",Yb);a.W(h,"touchmove",Yb);db=L;if(A){db&&t&8&&(t=0);y.M();A=k;var b=B.n();a.k(j.$EVT_DRAG_END,v(b),b,v(ab),ab);X&12&&pc();Hc(d)}}function Mc(a){var c=b.$EvtSrc(a),e=b.vb(c,"1",Mb);if(u===e)if(db){b.$StopEvent(a);var d=b.vb(c,f,"data-jssor-button","A");d&&b.$CancelEvent(a)}else t&4&&(t=0)}a.$SlidesCount=function(){return E.length};a.$CurrentIndex=function(){return s};a.$CurrentPosition=function(){return B.n()};a.$AutoPlay=function(a){if(a==f)return t;if(a!=t){t=a;t&&x[s]&&x[s].Gc()}};a.$IsDragging=function(){return A};a.$IsSliding=function(){return pb};a.$IsMouseOver=function(){return!U};a.$LastDragSucceeded=function(){return db};a.$OriginalWidth=function(){return O};a.$OriginalHeight=function(){return M};a.$ScaleHeight=function(b){if(b==f)return Bc||M;a.$ScaleSize(b/M*O,b)};a.$ScaleWidth=function(b){if(b==f)return Xb||O;a.$ScaleSize(b,b/O*M)};a.$ScaleSize=function(c,a,d){b.D(u,c);b.C(u,a);Fc=c/O;Ac=a/M;b.c(mc,function(a){a.$ScaleSize(Fc,Ac,d)});if(!Xb){b.tb(T,w);b.Z(T,0);b.T(T,0)}Xb=c;Bc=a};a.We=yc;a.Ne=wc;a.$PlayTo=bc;a.$GoTo=tb;a.$Next=function(){Tb(1)};a.$Prev=function(){Tb(-1)};a.$Pause=function(){t=0};a.$Play=function(){a.$AutoPlay(t||1)};a.$SetSlideshowTransitions=function(a){m.$SlideshowOptions.$Transitions=a};a.$SetCaptionTransitions=function(a){cb.$Transitions=a;cb.dd=b.Cb()};a.Ee=function(a){a=v(a);if(C&1){var d=G/F,b=v(B.n()),e=v(a-b+d),f=v(c.J(a-b));if(e>=N){if(f>q/2)if(a>b)a-=q;else a+=q}else if(a>b&&e<d)a-=q;else if(a<b&&e>d)a+=q}return a};function Yc(){ac.ne&&b.Db(w,ac.ne,([e,"pan-y","pan-x","auto"])[lb]||"");a.a(u,"click",Mc,d);a.a(u,"mouseleave",Kc);a.a(u,"mouseenter",Jc);a.a(u,"mousedown",Cc);a.a(u,"touchstart",Zc);a.a(u,"dragstart",fc);a.a(u,"selectstart",fc);a.a(i,"mouseup",fb);a.a(h,"mouseup",fb);a.a(h,"touchend",fb);a.a(h,"touchcancel",fb);a.a(i,"blur",fb);m.$ArrowKeyNavigation&&a.a(h,"keydown",function(c){var a=b.re(c);if(a==37||a==39){t&8&&(t=0);ec(m.$ArrowKeyNavigation*(a-38)*qb,d)}})}function uc(g){Ec.Ae();E=[];x=[];var h=b.wb(w),k=b.xe(["DIV","A","LI"]);b.c(h,function(a){var c=a;if(k[a.tagName.toUpperCase()]&&!b.fb(a,"u")&&b.yb(a)!="none"){var c=Vb(d);b.S(a,gb);b.tb(c,a);b.F(c,a);b.Ec(c,"flat");b.Ec(a,"preserve-3d");b.zb(c);E.push(c)}b.Y(c,(b.Y(c)||0)+1)});q=E.length;if(q){var a=S&1?yb:xb;Nc();G=m.$Align;if(G==f)G=(a-F+P)/2;kb=a/F;N=c.j(q,m.$Cols||q,c.Q(kb));C=N<q?m.$Loop:0;if(q*F-P<=a){kb=q-P/F;G=(a-F+P)/2;Jb=(a-F*q+P)/2}if(Bb){Ob=Bb.$Class;tc=!G&&N==1&&q>1&&Ob&&(!b.ae()||b.rd()>=9)}if(!(C&1)){bb=G/F;if(bb>q-1){bb=q-1;G=bb*F}K=bb;Q=K+q-kb-P/F}lb=(N>1||G?S:-1)&m.$DragOrientation;if(tc)D=new Ob(Ab,I,H,Bb,Sb,kc);for(var e=0;e<E.length;e++){var i=E[e],j=new cd(i,e);x.push(j)}rb=new dd;B=new ed;y=new Tc(B,rb);Yc()}b.c(Y,function(a){a.Uc(q,x);g&&a.$On(r.pc,ec)})}function Nb(a,d,g){b.Ce(a)&&(a=b.Dd("",a));var c,e;if(q){if(d==f)d=q;e="beforebegin";c=E[d];if(!c){e="afterend";c=E[q-1]}}b.$Destroy(x);a&&b.Eg(c||w,e||"afterbegin",a);b.c(g,function(a){b.sb(a)});uc()}a.$AppendSlides=function(e,a){if(a==f)a=s+1;var d=E[s];Nb(e,a);var c=0;b.c(E,function(a,b){a==d&&(c=b)});tb(c)};a.$ReloadSlides=function(a){Nb(a,e,E);tb(0)};a.$RemoveSlides=function(f){var a=s,d=[];b.c(f,function(b){if(b<q&&b>=0){d.push(E[b]);b<s&&a--}});Nb(e,e,d);a=c.j(a,q-1);tb(a)};a.v=function(i,e){a.$Elmt=u=b.$GetElement(i);O=b.D(u);M=b.C(u);m=b.I({$FillMode:0,$LazyLoading:1,$ArrowKeyNavigation:1,$StartIndex:0,$AutoPlay:0,$Loop:1,$HWA:d,$NaviQuitDrag:d,$AutoPlaySteps:1,$AutoPlayInterval:3e3,$PauseOnHover:1,$SlideDuration:500,$SlideEasing:g.$OutQuad,$MinDragOffsetToSlide:20,$DragRatio:1,$SlideSpacing:0,$UISearchMode:1,$PlayOrientation:1,$DragOrientation:1},e);m.$HWA=m.$HWA&&b.Wg();if(m.$Idle!=f)m.$AutoPlayInterval=m.$Idle;if(m.$DisplayPieces!=f)m.$Cols=m.$DisplayPieces;if(m.$ParkingPosition!=f)m.$Align=m.$ParkingPosition;t=m.$AutoPlay&63;!m.$UISearchMode;eb=m.$AutoPlaySteps;X=m.$PauseOnHover;X&=Sb?10:5;rc=m.$AutoPlayInterval;Fb=m.$SlideDuration;S=m.$PlayOrientation&3;ub=b.Ng(b.p(u,"dir"))=="rtl";Gb=ub&&(S==1||m.$DragOrientation&1);qb=Gb?-1:1;Bb=m.$SlideshowOptions;cb=b.I({$Class:p},m.$CaptionSliderOptions);jb=m.$BulletNavigatorOptions;W=m.$ArrowNavigatorOptions;J=m.$ThumbnailNavigatorOptions;var c=b.wb(u);b.c(c,function(a,d){var c=b.fb(a,"u");if(c=="loading")R=a;else{if(c=="slides"){w=a;b.Db(w,"margin",0);b.Db(w,"padding",0);b.Ec(w,"flat")}if(c=="navigator")Kb=a;if(c=="arrowleft")Zb=a;if(c=="arrowright")Wb=a;if(c=="thumbnavigator")vb=a;if(a.tagName!="STYLE"&&a.tagName!="SCRIPT")mc[c||d]=new Rc(a,c=="slides",b.xe(["slides","thumbnavigator"])[c])}});R&&b.sb(R);R=R||b.ac(h);yb=b.D(w);xb=b.C(w);I=m.$SlideWidth||yb;H=m.$SlideHeight||xb;gb={H:I,G:H,$Top:0,$Left:0,Od:"block",fc:"absolute"};P=m.$SlideSpacing;nb=I+P;ob=H+P;F=S&1?nb:ob;Ab=new Pc;b.p(u,Mb,"1");b.Y(w,b.Y(w)||0);b.pb(w,"absolute");T=b.bb(w,d);b.Db(T,"pointerEvents","none");b.tb(T,w);b.F(T,Ab.$Elmt);b.Nb(w,"hidden");if(Kb&&jb){jb.ec=ub;vc=new jb.$Class(Kb,jb,O,M);Y.push(vc)}if(W&&Zb&&Wb){W.ec=ub;W.$Loop=m.$Loop;xc=new W.$Class(Zb,Wb,W,a);Y.push(xc)}if(vb&&J){J.$StartIndex=m.$StartIndex;J.$ArrowKeyNavigation=J.$ArrowKeyNavigation||0;J.ec=ub;nc=new J.$Class(vb,J,R);!J.$NoDrag&&b.p(vb,hc,"1");Y.push(nc)}uc(d);a.$ScaleSize(O,M);Rb();tb(v(m.$StartIndex));b.Db(u,"visibility","visible")};a.$Destroy=function(){t=0;b.$Destroy(x,Y,Ec);b.Ib(u)};b.v(a)};j.$EVT_CLICK=21;j.$EVT_DRAG_START=22;j.$EVT_DRAG_END=23;j.$EVT_SWIPE_START=24;j.$EVT_SWIPE_END=25;j.$EVT_LOAD_START=26;j.$EVT_LOAD_END=27;j.Jf=28;j.$EVT_MOUSE_ENTER=31;j.$EVT_MOUSE_LEAVE=32;j.$EVT_POSITION_CHANGE=202;j.$EVT_PARK=203;j.$EVT_SLIDESHOW_START=206;j.$EVT_SLIDESHOW_END=207;j.$EVT_PROGRESS_CHANGE=208;j.$EVT_STATE_CHANGE=209}(window,document,Math,null,true,false)

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
/* harmony import */ var _assets_html_slider_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/html/slider.html */ "./src/assets/html/slider.html");
/* harmony import */ var _assets_html_slider_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_html_slider_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_js_jssor_slider_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/js/jssor.slider.min.js */ "./src/assets/js/jssor.slider.min.js");
/* harmony import */ var _assets_js_jssor_slider_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_jssor_slider_min_js__WEBPACK_IMPORTED_MODULE_3__);



_assets_js_zenscroll_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.setup(null, 20); // Setup zenscroll to support URL hashes

function debounce(func, wait, immediate) { // Debounce function (Bing it if you don't know)
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
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

function isNearTop() {
    if (!((document.documentElement && document.documentElement.scrollTop) ||
        (document.scrollingElement && document.scrollingElement.scrollTop) ||
        document.body.scrollTop > 100)) return true;
    else return false;
}

function isNearBottom() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) return true;
    else return false;
}

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

document.addEventListener("DOMContentLoaded", function(event) { // Wait for the DOM to finish loading
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
});


 // Get photo slider template
 // Library for controlling the Photo Slider

// A compactified template function for initializing a photo slider
let initPhotoSlider = `(function() {var $=[{$Duration:1200,x:-.3,$During:{$Left:[.3,.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,x:.3,$SlideOut:!0,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}],i={$AutoPlay:1,$SlideshowOptions:{$Class:$JssorSlideshowRunner$,$Transitions:$,$TransitionsOrder:1},$ArrowNavigatorOptions:{$Class:$JssorArrowNavigator$},$ThumbnailNavigatorOptions:{$Class:$JssorThumbnailNavigator$,$Orientation:2,$NoDrag:!0}},s=new $JssorSlider$("jssor",i),a=1500;function n(){var $=s.$Elmt.parentNode.clientWidth;if($){var i=Math.min(a||$,$);s.$ScaleWidth(i)}else window.setTimeout(n,30)}n(),$Jssor$.$AddEvent(window,"load",n),$Jssor$.$AddEvent(window,"resize",n),$Jssor$.$AddEvent(window,"orientationchange",n)})()`;

// Get slide data. Name before 'Slides' must match the ID of the grandfather element it's contained in.
let photoshaderSlides = __webpack_require__(/*! ./assets/html/slide-data/photoShader.html */ "./src/assets/html/slide-data/photoShader.html");
let myTubeSlides = __webpack_require__(/*! ./assets/html/slide-data/myTube.html */ "./src/assets/html/slide-data/myTube.html");

document.querySelectorAll('section header div#photoSlider').forEach(function(item) {
    let id = item.parentElement.parentElement.id; // Get the ID of the grandfather element the photo slider belongs to.
    let slideDataTarget = eval(id + 'Slides'); // Get the right slide data variable based on the ID of the grandfather element
    
    let data = insert(_assets_html_slider_html__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_html_slider_html__WEBPACK_IMPORTED_MODULE_2___default.a.indexOf('id=slideData>') + 'id=slideData>'.length, slideDataTarget); // Combine the slider data and template into new variable 
    data = replaceAll(data, 'jssor_', 'jssor_' + id + '_'); // Give every part of the new data a unique ID based on the grandfather element ID
    data = replaceAll(data, 'id=jssor', 'id=jssor_' + id); // Make this slider's root div unique so the init function can target it exclusively

    item.innerHTML = data; // Place the new HTML onto the page

    let init = replaceAll(initPhotoSlider, '"jssor"', '"jssor_' + id + '"'); // Make the targeted photo slider match this slider's root div 

    eval(init); // Init the photo slider for this section

});


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