/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    height: 100vh;\n}\n\n#content {\n    display: flex;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    color: #040404;\n    font-size: 40px;\n    font-weight: 700;\n    justify-content: center;\n    padding: 32px;\n}\n\n.search-container {\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 50%;\n    gap: 4px;\n}\n\n.location-search {\n    font-size: 16px;\n    color: #040404;\n    padding: 4px 16px;\n    background-color: #f4f4f4;\n    box-shadow: 1px 1px rgba(25, 25, 25, 0.25);\n    width: 100%;\n    border: none;\n    border-radius: 8px;\n    height: 32px;\n}\n\n.degrees-container {\n    padding: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    gap: 4px;\n}\n\n.farenheit-btn, .celsius-btn {\n    font-size: 16px;\n    font-weight: 700;\n    color: #5e5e5e;\n    border: none;\n    padding: 8px;\n}\n\n.active {\n    color: #040404;\n    transition: 0.3s;\n}\n\n.metric-toggle {\n    width: 40px;\n    height: 16px;\n    background-color: #85ceff;\n    display: block;\n    border-radius: 8px;\n    cursor: pointer;\n    position: relative;\n}\n\n.circle {\n    position: absolute;\n    left: 0px;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    margin: 2px;\n    background-color: #f4f4f4;\n    transition: 0.3s;\n}\n\ninput[type=\"checkbox\"] {\n    display: none;\n}\n\n::placeholder {\n    opacity: 0.3;\n}\n\n.weather-container {\n    width: 50%;\n    margin-bottom: 10%;\n    padding: 48px;\n    border-radius: 48px;\n    background-color: rgba(205, 205, 205, 0.25);\n    box-shadow: 1px 1px 12px rgba(25, 25, 25, 0.05);\n    color: #040404;\n    display: grid;\n    grid-template-rows: 1fr 3fr;\n}\n\n.location-info-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.location-header {\n    font-size: 32px;\n    font-weight: 700;\n}\n\n.location-country {\n    font-size: 24px;\n}\n\n.last-updated {\n    font-size: 12px;\n}\n\n.conditions-container {\n    padding-top: 16px;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    align-items: center;\n    justify-items: end;\n    gap: 16px;\n}\n\n.temp-text {\n    font-size: 48px;\n    font-weight: 700;\n}\n\n.conditions-text-container {\n    justify-self: center;\n    align-items: center;\n    text-align: center;\n    font-size: 24px;\n}\n\n.max-min-temp-container {\n    display: flex;\n    justify-content: space-between;\n    gap: 16px;\n}\n\n.max-min-temp {\n    font-size: 16px;\n    font-weight: 500;\n    padding-top: 12px;\n}\n\n.conditions-details-container {\n    font-size: 12px;\n    display: grid;\n    min-width: 200px;\n    grid-template-columns: 100px 85px;\n    gap: 8px;\n    justify-items: end;\n}\n\n@media (max-width: 825px) {\n    .header {\n        width: 80%;\n        font-size: 32px;\n        flex-wrap: nowrap;\n    }\n\n    .location-container {\n        max-width: 518px;\n        width: 80%;\n    }\n\n    .location-header {\n        font-size: 24px;\n    }\n\n    .temp-text {\n        font-size: 40px;\n    }\n\n    .conditions-text {\n        font-size: 20px;\n    }\n\n    .weather-container {\n        min-width: 400px;\n        width: 85%;\n        padding: 8%;\n    }\n\n    .conditions-container {\n        display: grid;\n        grid-template-columns: 5fr;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .conditions-details-container {\n        grid-column: 1/-1;\n        grid-template-columns: 1fr 1fr;\n        gap: 0px;\n        width: 100%;\n        justify-content: left;\n        justify-items: left;\n    }\n\n    .conditions-details-container .right {\n        justify-self: end;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeSearch: () => (/* binding */ initializeSearch),\n/* harmony export */   updateWeather: () => (/* binding */ updateWeather)\n/* harmony export */ });\n// Search functionality\n// Object storing weather data\nconst weatherData = {\n    city: '',\n    state: '',\n    country: '',\n    temperature: {\n        currentF: 0,\n        currentC: 0,\n        highF: 0,\n        highC: 0,\n        lowF: 0,\n        lowC: 0,\n        feelsLikeF: 0,\n        feelsLikeC: 0\n    },\n    conditions: '',\n    wind: {\n        speedMph: 0,\n        speedKph: 0,\n        direction: ''\n    },\n    humidity: 0,\n    chanceOfRain: 0,\n    lastUpdated: ''\n};\n\n// API call to fetch weather data based on location input\nasync function fetchWeatherData(location) {\n    try {\n        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=54db39cdb2854b31a44231017242508&q=${location}&days=6&aqi=no&alerts=no`)\n        if (response.ok == false) {\n            throw new Error(\"Something went wrong\");\n        }\n        const data = await response.json();\n\n        weatherData.city = data.location.name;\n        weatherData.state = data.location.region;\n        weatherData.country = data.location.country;\n        weatherData.temperature.currentF = data.current.temp_f;\n        weatherData.temperature.currentC = data.current.temp_c;\n        weatherData.temperature.highF = data.forecast.forecastday[0].day.maxtemp_f;\n        weatherData.temperature.highC = data.forecast.forecastday[0].day.maxtemp_c;\n        weatherData.temperature.lowF = data.forecast.forecastday[0].day.mintemp_f;\n        weatherData.temperature.lowC = data.forecast.forecastday[0].day.mintemp_c;\n        weatherData.temperature.feelsLikeF = data.current.feelslike_f;\n        weatherData.temperature.feelsLikeC = data.current.feelslike_c;\n        weatherData.conditions = data.current.condition.text;\n        weatherData.wind.speedMph = data.current.wind_mph;\n        weatherData.wind.speedKph = data.current.wind_kph;\n        weatherData.wind.direction = data.current.wind_dir;\n        weatherData.humidity = data.current.humidity;\n        weatherData.chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;\n        weatherData.lastUpdated = data.current.last_updated;\n\n        return weatherData;\n    } catch (error) {\n        console.error('Error fetching data:', error);\n    }\n}\n\n// Capture input from the search bar\nfunction initializeSearch() {\n    document.querySelector('.location-search').addEventListener('keypress', async (e) => {\n        if (e.key === 'Enter') {\n            const location = e.target.value;\n            await updateWeather(location);\n            console.log(location)\n            console.log(weatherData)\n        }\n    });\n};\n\n// Handle responses, error and update UI\nasync function updateWeather(location) {\n    const updatedData = await fetchWeatherData(location);\n    if (updatedData) {\n        document.querySelector('.location-header').textContent = `${weatherData.city}, ${weatherData.state}`;\n        document.querySelector('.location-country').textContent = `${weatherData.country}`;\n        document.querySelector('.last-updated').textContent = `Last updated: ${weatherData.lastUpdated}`;\n        document.querySelector('.temp-text').textContent = `${weatherData.temperature.currentF}°F`;\n        document.querySelector('.conditions-text').textContent = `${weatherData.conditions}`;\n\n        const maxMinTempElements = document.querySelectorAll('.max-min-temp');\n        const maxTempElement = maxMinTempElements[0];\n        const minTempElement = maxMinTempElements[1];\n        maxTempElement.textContent = `High: ${weatherData.temperature.highF}°F`;\n        minTempElement.textContent = `Low: ${weatherData.temperature.lowF}°F`;\n\n        const rightElements = document.querySelectorAll('.right');\n        const feelsLikeElement = rightElements[0];\n        const humidityElement = rightElements[1];\n        const windElement = rightElements[2];\n        const chanceOfRainElement = rightElements[3];\n        feelsLikeElement.textContent = `${weatherData.temperature.feelsLikeF}°F`;\n        humidityElement.textContent = `${weatherData.humidity}%`;\n        windElement.textContent = `${weatherData.wind.speedMph}MPH ${weatherData.wind.direction}`;\n        chanceOfRainElement.textContent = `${weatherData.chanceOfRain}%`;\n    }\n}\n\n// Temperature toggle\n\n// Listen for button toggle\n// Toggle active class\n// Convert temperature data between F to C\n// Update displayed temperature in the UI through calculation (not new API call)\n\n\n// Possibly cache data to prevent constant API calls\n// Loading indicator when call happens\n\n\n// Error handling\n\n//# sourceURL=webpack://weather-app/./src/api.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createWeatherApp: () => (/* binding */ createWeatherApp)\n/* harmony export */ });\nfunction createWeatherApp() {\n    const content = document.createElement('div');\n    content.id = 'content';\n\n    // Header\n    const headerDiv = document.createElement('div');\n    headerDiv.className = 'header';\n    const headerText = document.createElement('header');\n    headerText.className = 'header-text';\n    headerText.textContent = 'Weather';\n    headerDiv.appendChild(headerText);\n\n    // Search Container\n    const searchContainer = document.createElement('div');\n    searchContainer.className = 'search-container';\n    const locationSearch = document.createElement('input');\n    locationSearch.type = 'text';\n    locationSearch.placeholder = 'City, State, ZIP code...';\n    locationSearch.className = 'location-search';\n    searchContainer.appendChild(locationSearch);\n\n    // Degrees Container\n    const degreesContainer = document.createElement('div');\n    degreesContainer.className = 'degrees-container';\n    const farenheitBtn = document.createElement('p');\n    farenheitBtn.className = 'farenheit-btn active';\n    farenheitBtn.textContent = '°F/mph';\n    const metricToggleContainer = document.createElement('div');\n    metricToggleContainer.className = 'metric-toggle-container';\n    const metricToggleLabel = document.createElement('label');\n    metricToggleLabel.className = 'metric-toggle';\n    const metricToggleInput = document.createElement('input');\n    metricToggleInput.type = 'checkbox';\n    metricToggleInput.id = 'metric-toggle';\n    const circleDiv = document.createElement('div');\n    circleDiv.className = 'circle';\n    metricToggleLabel.appendChild(metricToggleInput);\n    metricToggleLabel.appendChild(circleDiv);\n    metricToggleContainer.appendChild(metricToggleLabel);\n    const celsiusBtn = document.createElement('p');\n    celsiusBtn.className = 'celsius-btn';\n    celsiusBtn.textContent = '°C/kph';\n    degreesContainer.appendChild(farenheitBtn);\n    degreesContainer.appendChild(metricToggleContainer);\n    degreesContainer.appendChild(celsiusBtn);\n\n    // Weather Container\n    const weatherContainer = document.createElement('div');\n    weatherContainer.className = 'weather-container';\n\n    const locationInfoContainer = document.createElement('div');\n    locationInfoContainer.className = 'location-info-container';\n    const locationHeader = document.createElement('p');\n    locationHeader.className = 'location-header';\n    locationInfoContainer.appendChild(locationHeader); // Add dynamic location later\n\n    const locationCountry = document.createElement('p');\n    locationCountry.className = 'location-country';\n    locationInfoContainer.appendChild(locationCountry); // Add dynamic country later\n\n    const lastUpdated = document.createElement('p');\n    lastUpdated.className = 'last-updated';\n    locationInfoContainer.appendChild(lastUpdated); // Add dynamic last updated time later\n\n    weatherContainer.appendChild(locationInfoContainer);\n\n    const conditionsContainer = document.createElement('div');\n    conditionsContainer.className = 'conditions-container';\n\n    const conditionsTextContainer = document.createElement('div');\n    conditionsTextContainer.className = 'conditions-text-container';\n    const tempText = document.createElement('p');\n    tempText.className = 'temp-text';\n    conditionsTextContainer.appendChild(tempText); // Add dynamic temperature later\n\n    const conditionsText = document.createElement('p');\n    conditionsText.className = 'conditions-text';\n    conditionsTextContainer.appendChild(conditionsText); // Add dynamic condition later\n\n    const maxMinTempContainer = document.createElement('div');\n    maxMinTempContainer.className = 'max-min-temp-container';\n    const maxTemp = document.createElement('p');\n    maxTemp.className = 'max-min-temp';\n    maxMinTempContainer.appendChild(maxTemp); // Add dynamic max temp later\n    const minTemp = document.createElement('p');\n    minTemp.className = 'max-min-temp';\n    maxMinTempContainer.appendChild(minTemp); // Add dynamic min temp later\n\n    conditionsTextContainer.appendChild(maxMinTempContainer);\n    conditionsContainer.appendChild(conditionsTextContainer);\n\n    const conditionsDetailsContainer = document.createElement('div');\n    conditionsDetailsContainer.className = 'conditions-details-container';\n\n    // Feels Like\n    const feelsLikeLabel = document.createElement('p');\n    feelsLikeLabel.textContent = 'Feels Like:';\n    const feelsLikeValue = document.createElement('p');\n    feelsLikeValue.className = 'right';\n    conditionsDetailsContainer.appendChild(feelsLikeLabel);\n    conditionsDetailsContainer.appendChild(feelsLikeValue); // Add dynamic feels like later\n\n    // Humidity\n    const humidityLabel = document.createElement('p');\n    humidityLabel.textContent = 'Humidity:';\n    const humidityValue = document.createElement('p');\n    humidityValue.className = 'right';\n    conditionsDetailsContainer.appendChild(humidityLabel);\n    conditionsDetailsContainer.appendChild(humidityValue); // Add dynamic humidity later\n\n    // Wind\n    const windLabel = document.createElement('p');\n    windLabel.textContent = 'Wind:';\n    const windValue = document.createElement('p');\n    windValue.className = 'right';\n    conditionsDetailsContainer.appendChild(windLabel);\n    conditionsDetailsContainer.appendChild(windValue); // Add dynamic wind later\n\n    // Chance of Rain\n    const chanceRainLabel = document.createElement('p');\n    chanceRainLabel.textContent = 'Chance of Rain:';\n    const chanceRainValue = document.createElement('p');\n    chanceRainValue.className = 'right';\n    conditionsDetailsContainer.appendChild(chanceRainLabel);\n    conditionsDetailsContainer.appendChild(chanceRainValue); // Add dynamic chance of rain later\n\n    conditionsContainer.appendChild(conditionsDetailsContainer);\n    weatherContainer.appendChild(conditionsContainer);\n\n    content.appendChild(headerDiv);\n    content.appendChild(searchContainer);\n    content.appendChild(degreesContainer);\n    content.appendChild(weatherContainer);\n\n    // Append the content to the body\n    document.body.appendChild(content);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createWeatherApp)();\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.updateWeather)('Miami');\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.initializeSearch)();\n});\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;