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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/css/index.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./src/css/index.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \"html,\\nbody\\n{\\n  height: 100%;\\n\\tmargin:0;\\n\\tpadding:0;\\n}\\n\\nbody\\n{\\n  font-size:16px !important;\\n}\\n\\nul\\n{\\n\\tpadding:0px;\\n\\tmargin:0px;\\n}\\n\\nul li\\n{\\n    list-style-type:none;\\n}\\n\\n.player-area\\n{\\n}\\n\\n.content-container\\n{\\n\\tposition:absolute;\\n\\ttop:252px;\\n}\\n\\n\\n\\n\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/css/index.css?./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/comment/index.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./src/js/comment/index.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \".content-container  li.comment-list {\\n    height: 100%;\\n    overflow: auto;\\n    clear: both;\\n    z-index: 500;\\n    position: relative;\\n}\\n\\n.comment-list .code-view\\n{\\n  position:absolute;\\n  left:50%;\\n  top:20px;\\n  -webkit-transform:translateX(-50%);\\n      -ms-transform:translateX(-50%);\\n          transform:translateX(-50%);\\n}\\n\\n.comment-list .comment-container {\\n    position: absolute;\\n    height: auto;\\n    width:60%;\\n    bottom:0px;\\n}\\n\\n.comment-container .comment-row\\n{\\n  background: rgba(0, 0, 0, 0.3);\\n  border-radius: 0.106667rem;\\n  position: relative;\\n  text-shadow: 0 0.013333rem 0.013333rem #000000;\\n  -webkit-filter:shadow(Color=rgba(0, 0, 0, 0.5),Direction=0.026667rem,Strength=0);\\n          filter:shadow(Color=rgba(0, 0, 0, 0.5),Direction=0.026667rem,Strength=0);\\n  margin-bottom:0.053333rem;\\n  float: left;\\n  clear: both;\\n  padding-left: 0.133333rem;\\n  padding-right: 0.133333rem;\\n  margin-left: 0.133333rem;\\n  margin-right: 0.133333rem;\\n}\\n\\n.comment-row .comment-left\\n{\\n  color:#DBDBDB;\\n  line-height: 0.8rem;\\n  vertical-align: top;\\n}\\n\\nhtml[data-dpr=\\\"1\\\"] .comment-row .comment-left\\n{\\n  font-size:14px;\\n}\\n\\nhtml[data-dpr=\\\"2\\\"] .comment-row .comment-left\\n{\\n   font-size: 28px;\\n}\\nhtml[data-dpr=\\\"3\\\"] .comment-row .comment-left{\\n  font-size: 42px;\\n}\\n\\n@media all and (min-device-width:980px)\\n{\\n  .comment-row .comment-left\\n  {\\n    font-size: 28px;\\n  }\\n}\\n\\n\\n\\n.comment-row .comment-right\\n{\\n  line-height: 0.8rem;\\n  margin-left:0.133333rem;\\n}\\n\\n\\nhtml[data-dpr=\\\"1\\\"] .comment-row .comment-right\\n{\\n  font-size:14px;\\n}\\n\\nhtml[data-dpr=\\\"2\\\"] .comment-row .comment-right\\n{\\n   font-size: 28px;\\n}\\nhtml[data-dpr=\\\"3\\\"] .comment-row .comment-right{\\n  font-size: 42px;\\n}\\n\\n@media all and (min-device-width:980px)\\n{\\n  .comment-row .comment-right\\n  {\\n    font-size: 28px;\\n  }\\n}\\n\\n.comment-color1\\n{\\n  color: rgba(255, 216, 142, 1);\\n}\\n\\n.comment-color2\\n{\\n  color: rgba(205, 243, 249, 1);\\n}\\n\\n.comment-color3\\n{\\n  color: rgba(182, 159, 255, 1);\\n}\\n\\n.comment-color4\\n{\\n  color: rgba(255, 255, 255, 1);\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/js/comment/index.css?./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/commentsender/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./src/js/commentsender/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \".comment-textbox{\\n    height:0.933333rem;\\n    position: fixed;\\n    bottom: 0px;\\n    margin-left: 0.133333rem;\\n    margin-right:0.133333rem;\\n    margin-bottom: 0.066667rem;\\n    width: 100%;\\n    display:none;\\n }\\n .comment-textbox .send-container{\\n      position: relative;\\n      width: 100%;\\n }\\n.send-container .send-txt{\\n\\t    float:left;\\n        width:68%;\\n        height:0.933333rem;\\n        line-height: 0.933333rem;\\n        background:#fff;\\n        border:0;\\n        border-radius: 0.106667rem 0 0 0.106667rem;\\n        resize : none;\\n        color:#000;\\n}\\n\\n.send-container .send-btn{\\n      float:left;\\n      width:15%;\\n      height:0.933333rem;\\n      background: #343B59;\\n      line-height: 0.933333rem;\\n      text-align: center;\\n      border-radius: 0 0.106667rem 0.106667rem 0;\\n      cursor: pointer;\\n      color: #ffffff;\\n      padding-right: 0.133333rem;\\n      padding-left: 0.133333rem;\\n}\\n\\n.send-container .send-btn:hover\\n{\\n    background: #343445;\\n}\\n\\n.send-container .favoriate-send\\n{\\n  width:1rem;\\n  height:1rem;\\n  margin-left: 0.133333rem;\\n  margin-right: 0.266667rem;\\n}\\n\\n.send-container .favoriate-send:hover\\n{\\n  opacity: 0.8;\\n  cursor:pointer;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/js/commentsender/index.css?./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/favoriate/index.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./src/js/favoriate/index.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \".favorite-animation-container\\n{\\n\\tright: 0%;\\n  bottom: .5rem;\\n  height: 90%;\\n\\twidth:2.4rem;\\n  margin-left: 0.133333rem;\\n\\tposition:absolute;\\n}\\n\\n\\n.favorite-animation-container img\\n{\\n\\tposition:absolute;\\n\\tbottom:0px;\\n  left:45%;\\n}\\n\\n.favorite-animation\\n{\\n  -webkit-animation-name: appear-from-bottom;\\n          animation-name: appear-from-bottom;\\n  -webkit-animation-duration: 2s;\\n          animation-duration: 2s;\\n  -webkit-animation-fill-mode:forwards;\\n          animation-fill-mode:forwards;\\n  -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\\n          animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\\n}\\n/*easeInSine: cubic-bezier(0.47, 0, 0.745, 0.715);*/\\n\\n@-webkit-keyframes appear-from-bottom {\\n  0% {\\n    opacity: 0.5;\\n    width:0.56rem;\\n    height:0.533333rem;\\n    display:block;\\n  }\\n  10% {\\n    opacity: 1;\\n  }\\n  20%{\\n    width:1.12rem;\\n    height:1.066667rem;\\n  }\\n  66% {\\n    opacity: 1;\\n  }\\n  100% {\\n  \\t/*900*/\\n    -webkit-transform: translateY(-5.6rem);\\n            transform: translateY(-5.6rem);\\n    opacity: 0;\\n    width:0.56rem;\\n    height:0.533333rem;\\n    display:none;\\n  }\\n}\\n\\n@keyframes appear-from-bottom {\\n  0% {\\n    opacity: 0.5;\\n    width:0.56rem;\\n    height:0.533333rem;\\n    display:block;\\n  }\\n  10% {\\n    opacity: 1;\\n  }\\n  20%{\\n    width:1.12rem;\\n    height:1.066667rem;\\n  }\\n  66% {\\n    opacity: 1;\\n  }\\n  100% {\\n  \\t/*900*/\\n    -webkit-transform: translateY(-5.6rem);\\n            transform: translateY(-5.6rem);\\n    opacity: 0;\\n    width:0.56rem;\\n    height:0.533333rem;\\n    display:none;\\n  }\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/js/favoriate/index.css?./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/videolist/index.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./src/js/videolist/index.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \".video-list-wrapper\\n{\\n  margin-top: 0.266667rem;\\n\\tz-index:1000;\\n}\\n\\n.video-list-wrapper .video-list\\n{\\n\\tdisplay:-webkit-box;\\n\\tdisplay:-ms-flexbox;\\n\\tdisplay:flex;\\n\\tflex-wra:wrap;\\n\\t-ms-flex-pack:distribute;\\n\\t    justify-content:space-around;\\n}\\n\\n.video-list .video-list-item\\n{\\n\\twidth:30%;\\n\\theight:2.666667rem;\\n\\n}\\n\\n.video-list-item img\\n{\\n    width: 100%;\\n    max-height: 2.666667rem;\\n    border-radius: 0.026667rem;\\n}\\n\\n.video-list-item img:hover\\n{\\n    opacity:0.8;\\n    cursor: pointer;\\n}\\n\\n.video-list-item p\\n{\\n\\tmargin: 0;\\n    font-size: 4px;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/js/videolist/index.css?./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/videoplayer/index.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./src/js/videoplayer/index.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \".enter-x5-player video.center\\n{\\n\\t-o-object-position:50% 50% !important;\\n\\t   object-position:50% 50% !important;\\n}\\n\\n.prism-progress-cursor \\n{\\n  margin-left:0px !important;\\n}\\n\\n/*.enter-x5-player video\\n{\\n\\tobject-position: 0px 10px;\\n\\t/*height:auto !important;*/\\n\\n/*}*/\\n\\n\\nvideo::-webkit-media-controls {\\n  display:none !important;\\n}\\n\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/js/videoplayer/index.css?./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function() {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\tvar result = [];\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar item = this[i];\n\t\t\tif(item[2]) {\n\t\t\t\tresult.push(\"@media \" + item[2] + \"{\" + item[1] + \"}\");\n\t\t\t} else {\n\t\t\t\tresult.push(item[1]);\n\t\t\t}\n\t\t}\n\t\treturn result.join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/*!************************************************!*\
  !*** ./node_modules/style-loader/addStyles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nvar stylesInDom = {},\n\tmemoize = function(fn) {\n\t\tvar memo;\n\t\treturn function () {\n\t\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\t\treturn memo;\n\t\t};\n\t},\n\tisOldIE = memoize(function() {\n\t\treturn /msie [6-9]\\b/.test(self.navigator.userAgent.toLowerCase());\n\t}),\n\tgetHeadElement = memoize(function () {\n\t\treturn document.head || document.getElementsByTagName(\"head\")[0];\n\t}),\n\tsingletonElement = null,\n\tsingletonCounter = 0,\n\tstyleElementsInsertedAtTop = [];\n\nmodule.exports = function(list, options) {\n\tif(typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif(typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (typeof options.singleton === \"undefined\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the bottom of <head>.\n\tif (typeof options.insertAt === \"undefined\") options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list);\n\taddStylesToDom(styles, options);\n\n\treturn function update(newList) {\n\t\tvar mayRemove = [];\n\t\tfor(var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\t\tfor(var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor(var j = 0; j < domStyle.parts.length; j++)\n\t\t\t\t\tdomStyle.parts[j]();\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n}\n\nfunction addStylesToDom(styles, options) {\n\tfor(var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles(list) {\n\tvar styles = [];\n\tvar newStyles = {};\n\tfor(var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\t\tif(!newStyles[id])\n\t\t\tstyles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse\n\t\t\tnewStyles[id].parts.push(part);\n\t}\n\treturn styles;\n}\n\nfunction insertStyleElement(options, styleElement) {\n\tvar head = getHeadElement();\n\tvar lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];\n\tif (options.insertAt === \"top\") {\n\t\tif(!lastStyleElementInsertedAtTop) {\n\t\t\thead.insertBefore(styleElement, head.firstChild);\n\t\t} else if(lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\thead.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\thead.appendChild(styleElement);\n\t\t}\n\t\tstyleElementsInsertedAtTop.push(styleElement);\n\t} else if (options.insertAt === \"bottom\") {\n\t\thead.appendChild(styleElement);\n\t} else {\n\t\tthrow new Error(\"Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.\");\n\t}\n}\n\nfunction removeStyleElement(styleElement) {\n\tstyleElement.parentNode.removeChild(styleElement);\n\tvar idx = styleElementsInsertedAtTop.indexOf(styleElement);\n\tif(idx >= 0) {\n\t\tstyleElementsInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement(options) {\n\tvar styleElement = document.createElement(\"style\");\n\tstyleElement.type = \"text/css\";\n\tinsertStyleElement(options, styleElement);\n\treturn styleElement;\n}\n\nfunction createLinkElement(options) {\n\tvar linkElement = document.createElement(\"link\");\n\tlinkElement.rel = \"stylesheet\";\n\tinsertStyleElement(options, linkElement);\n\treturn linkElement;\n}\n\nfunction addStyle(obj, options) {\n\tvar styleElement, update, remove;\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\t\tstyleElement = singletonElement || (singletonElement = createStyleElement(options));\n\t\tupdate = applyToSingletonTag.bind(null, styleElement, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);\n\t} else if(obj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\") {\n\t\tstyleElement = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, styleElement);\n\t\tremove = function() {\n\t\t\tremoveStyleElement(styleElement);\n\t\t\tif(styleElement.href)\n\t\t\t\tURL.revokeObjectURL(styleElement.href);\n\t\t};\n\t} else {\n\t\tstyleElement = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, styleElement);\n\t\tremove = function() {\n\t\t\tremoveStyleElement(styleElement);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle(newObj) {\n\t\tif(newObj) {\n\t\t\tif(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)\n\t\t\t\treturn;\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag(styleElement, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (styleElement.styleSheet) {\n\t\tstyleElement.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = styleElement.childNodes;\n\t\tif (childNodes[index]) styleElement.removeChild(childNodes[index]);\n\t\tif (childNodes.length) {\n\t\t\tstyleElement.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyleElement.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag(styleElement, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyleElement.setAttribute(\"media\", media)\n\t}\n\n\tif(styleElement.styleSheet) {\n\t\tstyleElement.styleSheet.cssText = css;\n\t} else {\n\t\twhile(styleElement.firstChild) {\n\t\t\tstyleElement.removeChild(styleElement.firstChild);\n\t\t}\n\t\tstyleElement.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink(linkElement, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\tif(sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = linkElement.href;\n\n\tlinkElement.href = URL.createObjectURL(blob);\n\n\tif(oldSrc)\n\t\tURL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/addStyles.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/src??ref--4-2!./index.css */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/css/index.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ \"./node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_videoplayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/videoplayer */ \"./src/js/videoplayer/index.js\");\n/* harmony import */ var _js_videolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/videolist */ \"./src/js/videolist/index.js\");\n/* harmony import */ var _js_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/comment */ \"./src/js/comment/index.js\");\n/* harmony import */ var _js_favoriate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/favoriate */ \"./src/js/favoriate/index.js\");\n/* harmony import */ var _js_commentsender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/commentsender */ \"./src/js/commentsender/index.js\");\n/* harmony import */ var _js_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/util */ \"./src/js/util.js\");\n\n\n\n\n\n\n\n__webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n\nvar comment, favoriate;\n$(function () {\n  var player = new _js_videoplayer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    id: 'J_prismPlayer',\n    autoplay: true,\n    isLive: false,\n    playsinline: true,\n    controlBarVisibility: 'hover',\n    source: \"//player.alicdn.com/resource/player/qupai.mp4\",\n    useH5Prism: true,\n    useFlashPrism: false,\n    x5_video_position: 'normal',\n    //prismplayer 2.0.1版本支持的属性，主要用户实现在android 微信上的同层播放\n    x5_type: 'h5',\n    //通过 video 属性 “x5-video-player-type” 声明启用同层H5播放器，支持的值：h5 https://x5.tencent.com/tbs/guide/video.html\n    cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png'\n  });\n  var dataList = [{\n    url: 'https://player.alicdn.com/resource/player/qupai.mp4',\n    cover: 'images/cover1.png',\n    title: \"分享精彩生活\"\n  }, {\n    url: 'http://player.alicdn.com/video/1.mp4',\n    cover: 'images/cover2.png',\n    title: \"多力多滋\"\n  }, {\n    url: 'http://player.alicdn.com/video/11.mp4',\n    cover: 'images/cover3.png',\n    title: \"马云讲新零售\"\n  }];\n  _js_videolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setup('videolist', dataList, player);\n  _js_commentsender__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setup();\n  var wrapper = $('.comment-list');\n  comment = new _js_comment__WEBPACK_IMPORTED_MODULE_2__[\"default\"](wrapper);\n  favoriate = new _js_favoriate__WEBPACK_IMPORTED_MODULE_3__[\"default\"](wrapper);\n  $('.comment-textbox').show();\n\n  var adjustLayout = function adjustLayout() {\n    var offset = $('.ui-tab .ui-tab-nav').offset();\n    var remainHeight = _js_util__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenHeight() - offset.top - offset.height - $('.comment-textbox').height();\n    $('.ui-tab-content').height(remainHeight);\n    $('.comment-list .comment-container').css('max-height', remainHeight);\n  };\n\n  adjustLayout();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/comment/index.css":
/*!**********************************!*\
  !*** ./src/js/comment/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--4-2!./index.css */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/comment/index.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ \"./node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/js/comment/index.css?");

/***/ }),

/***/ "./src/js/comment/index.js":
/*!*********************************!*\
  !*** ./src/js/comment/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CommentBuffer; });\n/* harmony import */ var _videocomments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videocomments */ \"./src/js/comment/videocomments.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ \"./src/js/events.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n__webpack_require__(/*! ./index.css */ \"./src/js/comment/index.css\");\n\nvar CommentBuffer =\n/*#__PURE__*/\nfunction () {\n  function CommentBuffer(wrapper, player) {\n    var _this = this;\n\n    _classCallCheck(this, CommentBuffer);\n\n    this.comments = [];\n    this._wrapper = wrapper;\n    this.liveComment = new _videocomments__WEBPACK_IMPORTED_MODULE_0__[\"default\"](wrapper, player);\n    var that = this;\n    _events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on(_events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].EventConstant.Comments_Sended, function (e, data) {\n      _this.add(data);\n    });\n  }\n\n  _createClass(CommentBuffer, [{\n    key: \"clear\",\n    value: function clear() {\n      this.stop();\n      this.liveComment.clear();\n    }\n  }, {\n    key: \"add\",\n    value: function add(comment) {\n      if (this.isStop) return;\n      this.comments.push(comment);\n\n      if (!this.isWorking) {\n        this._wake();\n      }\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.comments = [];\n      this.isWorking = false;\n      this.isStop = true;\n      clearInterval(this.interval);\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.isStop = false;\n    }\n  }, {\n    key: \"_wake\",\n    value: function _wake() {\n      this.isWorking = true;\n      this.interval = setInterval(this._handle(), 500);\n    }\n  }, {\n    key: \"_handle\",\n    value: function _handle() {\n      var that = this;\n      return function () {\n        if (that.comments.length > 0) {\n          if (that.liveComment.isFull()) {\n            that.liveComment.send(\"\");\n          }\n\n          var comment = that.comments.shift();\n          that.liveComment.send(comment);\n\n          that._wrapper.scrollTop(that._wrapper[0].scrollHeight);\n        } else {\n          that.isWorking = false;\n          clearInterval(that.interval);\n        }\n      };\n    }\n  }]);\n\n  return CommentBuffer;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/comment/index.js?");

/***/ }),

/***/ "./src/js/comment/videocomments.js":
/*!*****************************************!*\
  !*** ./src/js/comment/videocomments.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VideoComments; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar comment_row_template = '<div class=\"comment-row\"><span class=\"comment-left\"></span><span class=\"comment-right\"></div>';\nvar comment_step = 25;\nvar container_max_rows = 20;\nvar comment_name_colors = {\n  '1': 'rgba(219,124,80,0.3)',\n  '2': 'rgba(139,156,80,0.3)',\n  '3': 'rgba(40,180,187,0.3)'\n};\n\nvar VideoComments =\n/*#__PURE__*/\nfunction () {\n  function VideoComments(wrapper) {\n    _classCallCheck(this, VideoComments);\n\n    this.createEl(wrapper);\n\n    this._setupComment();\n\n    this.maxTopRow = null; // let height = util.videoHeight($('.current-video')) - this.comments.height();\n    // if (!util.isLargeScreen()) {\n    // \theight = height - 80;\n    // }\n    // this.comments.css('top', height);\n\n    this.colorIndex = 1;\n  }\n\n  _createClass(VideoComments, [{\n    key: \"createEl\",\n    value: function createEl(wrapper) {\n      this.comments = wrapper;\n      this.container = this.comments.find('.comment-container');\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.comments.empty();\n    }\n  }, {\n    key: \"isFull\",\n    value: function isFull() {\n      return this.comments.find('.empty-comment-row').length == 0;\n    }\n  }, {\n    key: \"send\",\n    value: function send(comment) {\n      var emptyRows = this.comments.children('.comment-row'),\n          firstEmptyRow;\n\n      if (!comment) {\n        return;\n      }\n\n      if (emptyRows.length > 0) firstEmptyRow = $(emptyRows[0]);else firstEmptyRow = this._createEmptyRow();\n\n      this._assignValues(firstEmptyRow, comment);\n\n      this._move(firstEmptyRow);\n    }\n  }, {\n    key: \"_move\",\n    value: function _move(currentRow) {\n      currentRow.show();\n      var that = this,\n          commentsHeight = this.comments.height(),\n          containerHeight = this.container.height(),\n          step = currentRow.height();\n      this.container.append(currentRow);\n      var row = this.container.children().first();\n\n      if (containerHeight - commentsHeight > row.height()) {\n        this._removeClass(row.find('.comment-right'));\n\n        row.hide();\n        this.comments.append(row);\n      }\n    }\n  }, {\n    key: \"_assignValues\",\n    value: function _assignValues(row, comment) {\n      var name = row.find('.comment-left');\n      name.text(comment.name);\n      var commentRight = row.find('.comment-right');\n      commentRight.html(comment.comment);\n      commentRight.addClass(this._getClass());\n    }\n  }, {\n    key: \"_createEmptyRow\",\n    value: function _createEmptyRow() {\n      var row = $(comment_row_template);\n      row.hide();\n      this.comments.append(row);\n      return row;\n    }\n  }, {\n    key: \"_setupComment\",\n    value: function _setupComment() {\n      for (var i = 0; i < container_max_rows; i++) {\n        this._createEmptyRow();\n      }\n    }\n  }, {\n    key: \"_getClass\",\n    value: function _getClass(type) {\n      if (this.colorIndex > 4) {\n        this.colorIndex = 1;\n      }\n\n      var className = 'comment-color' + this.colorIndex;\n      this.colorIndex++;\n      return className;\n    }\n  }, {\n    key: \"_removeClass\",\n    value: function _removeClass(ele) {\n      ele.removeClass('comment-color1');\n      ele.removeClass('comment-color2');\n      ele.removeClass('comment-color3');\n      ele.removeClass('comment-color4');\n    }\n  }]);\n\n  return VideoComments;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/comment/videocomments.js?");

/***/ }),

/***/ "./src/js/commentsender/index.css":
/*!****************************************!*\
  !*** ./src/js/commentsender/index.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--4-2!./index.css */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/commentsender/index.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ \"./node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/js/commentsender/index.css?");

/***/ }),

/***/ "./src/js/commentsender/index.js":
/*!***************************************!*\
  !*** ./src/js/commentsender/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CommentSender; });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events */ \"./src/js/events.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ \"./src/js/util.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n__webpack_require__(/*! ./index.css */ \"./src/js/commentsender/index.css\");\n\nvar CommentSender =\n/*#__PURE__*/\nfunction () {\n  function CommentSender() {\n    _classCallCheck(this, CommentSender);\n  }\n\n  _createClass(CommentSender, null, [{\n    key: \"setup\",\n    value: function setup() {\n      $('.comment-textbox .send-btn').click(function () {\n        var $text = $('.comment-textbox .send-txt');\n        var msg = $text.val();\n        _events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].trigger(_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].EventConstant.Comments_Sended, {\n          name: '小鱼儿',\n          comment: _util_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].encodeHtml(msg)\n        });\n        $text.val(\"\");\n      });\n      $('.comment-textbox .favoriate-send').click(function () {\n        _events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].trigger(_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].EventConstant.Favoriation_Sended);\n      });\n    }\n  }]);\n\n  return CommentSender;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/commentsender/index.js?");

/***/ }),

/***/ "./src/js/events.js":
/*!**************************!*\
  !*** ./src/js/events.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Event; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EventConstant = {\n  Comments_Sended: 'commentSended',\n  Favoriation_Sended: 'FavoriationSended'\n};\n\nvar Event =\n/*#__PURE__*/\nfunction () {\n  function Event() {\n    _classCallCheck(this, Event);\n  }\n\n  _createClass(Event, null, [{\n    key: \"on\",\n    value: function on(eventName, func) {\n      $(document).on(eventName, func);\n    }\n  }, {\n    key: \"trigger\",\n    value: function trigger(eventName, data) {\n      $(document).trigger(eventName, data);\n    }\n  }, {\n    key: \"off\",\n    value: function off(eventName, func) {\n      $(document).off(eventName, func);\n    }\n  }, {\n    key: \"EventConstant\",\n    get: function get() {\n      return EventConstant;\n    }\n  }]);\n\n  return Event;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/js/events.js?");

/***/ }),

/***/ "./src/js/favoriate/index.css":
/*!************************************!*\
  !*** ./src/js/favoriate/index.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--4-2!./index.css */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/favoriate/index.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ \"./node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/js/favoriate/index.css?");

/***/ }),

/***/ "./src/js/favoriate/index.html":
/*!*************************************!*\
  !*** ./src/js/favoriate/index.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"favorite-animation-container\\\">\\n</div>\";\n\n//# sourceURL=webpack:///./src/js/favoriate/index.html?");

/***/ }),

/***/ "./src/js/favoriate/index.js":
/*!***********************************!*\
  !*** ./src/js/favoriate/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Favoriate; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/js/util.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ \"./src/js/events.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n__webpack_require__(/*! ./index.css */ \"./src/js/favoriate/index.css\");\n\nvar html = __webpack_require__(/*! ./index.html */ \"./src/js/favoriate/index.html\");\n\nvar Favoriate =\n/*#__PURE__*/\nfunction () {\n  function Favoriate(wrapper) {\n    var images = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['xin.png', 'xin.png', 'xin.png', 'xin.png', 'xin.png', 'xin.png'];\n\n    _classCallCheck(this, Favoriate);\n\n    this.animateContainer = $(html);\n    wrapper.append(this.animateContainer);\n    this.imgNames = images;\n    this.index = 0;\n    var that = this;\n    _events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on(_events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].EventConstant.Favoriation_Sended, function () {\n      that.favoriate();\n    });\n  }\n\n  _createClass(Favoriate, [{\n    key: \"favoriate\",\n    value: function favoriate() {\n      var length = this.imgNames.length;\n      this.index = this.index < length ? this.index : 0;\n      name = this.imgNames[this.index];\n      var $img = $(\"<img src=\\\"./images/\".concat(name, \"\\\" class=\\\"favorite-animation\\\">\"));\n      this.animateContainer.append($img);\n      this.index++;\n      _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prefixedEvent($img[0], 'animationend', function () {\n        $img.remove();\n      });\n    }\n  }]);\n\n  return Favoriate;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/favoriate/index.js?");

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Util; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Util =\n/*#__PURE__*/\nfunction () {\n  function Util() {\n    _classCallCheck(this, Util);\n  }\n\n  _createClass(Util, null, [{\n    key: \"prefixedEvent\",\n    value: function prefixedEvent(element, type, callback) {\n      var pfx = [\"webkit\", \"moz\", \"MS\", \"o\", \"\"];\n\n      for (var p = 0; p < pfx.length; p++) {\n        if (!pfx[p]) type = type.toLowerCase();\n        Util.addEvent(element, pfx[p] + type, callback);\n      }\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent(ele, type, hander) {\n      if (ele.addEventListener) {\n        ele.addEventListener(type, hander, false);\n      }\n\n      if (ele.attachEvent) {\n        ele.attachEvent('on' + type, hander);\n      }\n    }\n  }, {\n    key: \"screenHeight\",\n    value: function screenHeight() {\n      return document.documentElement.clientHeight || document.body.clientHeight || window.screen.height || window.innerHeight;\n    }\n  }, {\n    key: \"encodeHtml\",\n    value: function encodeHtml(s) {\n      var REGX_HTML_ENCODE = /\"|'|<|>|[\\x00-\\x20]|[\\x7F-\\xFF]|[\\u0100-\\u2700]/g;\n      return typeof s != \"string\" ? null : s.replace(REGX_HTML_ENCODE, function ($0) {\n        var c = $0.charCodeAt(0),\n            r = [\"&#\"];\n        c = c == 0x20 ? 0xA0 : c;\n        r.push(c);\n        r.push(\";\");\n        return r.join(\"\");\n      });\n    }\n  }]);\n\n  return Util;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/util.js?");

/***/ }),

/***/ "./src/js/videolist/index.css":
/*!************************************!*\
  !*** ./src/js/videolist/index.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--4-2!./index.css */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/videolist/index.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ \"./node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/js/videolist/index.css?");

/***/ }),

/***/ "./src/js/videolist/index.js":
/*!***********************************!*\
  !*** ./src/js/videolist/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VideoList; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar itemHtml = __webpack_require__(/*! ./itemlist.html */ \"./src/js/videolist/itemlist.html\");\n\n__webpack_require__(/*! ./index.css */ \"./src/js/videolist/index.css\");\n\nvar VideoList =\n/*#__PURE__*/\nfunction () {\n  function VideoList() {\n    _classCallCheck(this, VideoList);\n  }\n\n  _createClass(VideoList, null, [{\n    key: \"setup\",\n    value: function setup(id, list, player) {\n      var $wrapper = $('#' + id);\n      list.forEach(function (item, index) {\n        var $item = $(itemHtml),\n            $img = $item.find('img');\n        $img.attr('src', item.cover);\n        $img.attr('url', item.url);\n        $item.find('p').text(item.title);\n        $wrapper.append($item);\n      });\n      $wrapper.click(function (e) {\n        var url = $(e.target).attr('url');\n\n        if (url) {\n          player.loadByUrl(url);\n        }\n      });\n    }\n  }]);\n\n  return VideoList;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/videolist/index.js?");

/***/ }),

/***/ "./src/js/videolist/itemlist.html":
/*!****************************************!*\
  !*** ./src/js/videolist/itemlist.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<li class='video-list-item'>\\n  <img></img>\\n  <p></p>\\n</li>\";\n\n//# sourceURL=webpack:///./src/js/videolist/itemlist.html?");

/***/ }),

/***/ "./src/js/videoplayer/index.css":
/*!**************************************!*\
  !*** ./src/js/videoplayer/index.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--4-2!./index.css */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/videoplayer/index.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ \"./node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/js/videoplayer/index.css?");

/***/ }),

/***/ "./src/js/videoplayer/index.js":
/*!*************************************!*\
  !*** ./src/js/videoplayer/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VideoPlayer; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n__webpack_require__(/*! ./index.css */ \"./src/js/videoplayer/index.css\");\n\nvar VideoPlayer =\n/*#__PURE__*/\nfunction () {\n  function VideoPlayer(props) {\n    _classCallCheck(this, VideoPlayer);\n\n    this.player;\n    this.props = props;\n\n    this._setup();\n\n    this._bindEvent();\n\n    this._firstFullscreen = true;\n  }\n\n  _createClass(VideoPlayer, [{\n    key: \"loadByUrl\",\n    value: function loadByUrl(url) {\n      if (this.player) this.player.loadByUrl(url);\n    }\n  }, {\n    key: \"dispose\",\n    value: function dispose() {\n      if (this.player) {\n        this.player.dispose();\n        Zepto('#' + this.props.id).empty();\n      }\n    }\n  }, {\n    key: \"_setup\",\n    value: function _setup() {\n      this.player = new Aliplayer(this.props);\n    }\n  }, {\n    key: \"_bindEvent\",\n    value: function _bindEvent() {\n      var that = this;\n      this.player.on('ready', function (e) {\n        console.log('ready');\n      });\n      this.player.on('play', function (e) {\n        console.log('play');\n      });\n      this.player.on('ended', function (e) {\n        console.log('ended');\n      });\n      this.player.on('pause', function (e) {\n        console.log('pause');\n      }); // this.player.on('requestFullScreen', (e)=>{\n      // \t    let video=$(that.player.tag);\n      // \t    video.addClass('center');\n      // });\n      // this.player.on('x5cancelFullScreen',(e)=>{\n      // \tlet service = that.player.fullscreenService;\n      // \tif(service.getIsFullScreen())\n      // \t{\n      // \t\tservice.cancelFullScreen()\n      // \t}\n      //     $(that.player.el()).removeClass('enter-x5-player');\n      // });\n      // this.player.on('x5requestFullScreen',(e)=>{\n      //     //调整视频的位置\n      //     $(that.player.el()).addClass('enter-x5-player');\n      //     var screenHeight = document.body.clientHeight*(window.devicePixelRatio||1)+ \"px\";\n      //     that.player.tag.style.height = screenHeight;\n      //     let video=$(that.player.tag);\n      //     setTimeout(()=>{\n      //         video.removeClass('x5-top-left');\n      //     });\n      // });\n      // this.player.on('cancelFullScreen', (e)=>{\n      // \tlet video=$(that.player.tag);\n      //     setTimeout(()=>{\n      //         alert(video.length());\n      //        video.removeClass('center');\n      //        video.removeClass('x5-top-left');\n      //     });\n      // });\n      //微信左上角退出按钮触发是，关闭页面\n\n      this.player.tag.addEventListener(\"x5videoexitfullscreen\", function () {\n        if (WeixinJSBridge) WeixinJSBridge.call('closeWindow');else {\n          try {\n            window.location.refresh();\n          } catch (e) {}\n        }\n      });\n      $(document).on('WeixinJSBridgeReady', function () {\n        var video = $(that.player.el()).find('video')[0];\n        video.play();\n      });\n    }\n  }, {\n    key: \"_unbindEvent\",\n    value: function _unbindEvent() {\n      var that = this;\n      this.player.off('ready', function (e) {\n        // 解决ios不自动播放的问题\n        if ($.os.ios) that._autoPlay();\n        console.log('ready');\n      });\n      this.player.off('play', function (e) {\n        console.log('play');\n      });\n      this.player.off('ended', function (e) {\n        console.log('ended');\n      });\n      this.player.off('pause', function (e) {\n        console.log('pause');\n      });\n    }\n  }]);\n\n  return VideoPlayer;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/videoplayer/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/zhaolongyan/Documents/works/github/AliyunPlayer_Web/h5VodDemo/src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });