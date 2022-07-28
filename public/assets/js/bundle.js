/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./public/assets/css/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/assets/css/style.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/NOSTRUD - Personal Use.ttf */ "./public/assets/font/NOSTRUD - Personal Use.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/header.jpg */ "./public/assets/images/header.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/body-back.jpg */ "./public/assets/images/body-back.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n    --primary-color: black;\r\n    --secondary-color: #e00101;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Nostrud\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n@keyframes margin-color {\r\n    0% {box-shadow: 0.2rem 0.2rem var(--secondary-color);}\r\n    50% {box-shadow: -0.2rem -0.2rem var(--secondary-color);}\r\n    100% {box-shadow: 0.2rem 0.2rem var(--secondary-color);}\r\n}\r\n\r\nhtml{\r\n    margin: 0; \r\n    padding: 0; \r\n    display: grid;\r\n    font-size: 62.5%;\r\n}\r\n\r\n#scroll-animate {\r\n\r\n}\r\n\r\n#scroll-animate-main {\r\n    width: 100%;\r\n    left: 0;\r\n}\r\n\r\n#heightPage, #heightScroll {\r\n  width: 1rem;\r\n  top: 0;\r\n  position: absolute;\r\n  z-index: 99;\r\n}\r\n\r\n#heightPage {\r\n  left: 0;\r\n}\r\n\r\n#heightScroll {\r\n  right: 0;\r\n}\r\n\r\n.wrapper-parallax {\r\n    margin-top: 100%;\r\n    margin-bottom: 30rem;\r\n    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.container {\r\n    max-width: 120rem;\r\n    margin: auto;\r\n}\r\n\r\n.force-flex{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.nav, footer, #scroll-animate-main {\r\n  -webkit-transition-property: all;\r\n    -moz-transition-property: all;\r\n    transition-property: all;\r\n\r\n  -webkit-transition-duration: 0.4s;\r\n    -moz-transition-duration: 0.4s;\r\n    transition-duration: 0.4s;\r\n\r\n  -webkit-transition-timing-function: cubic-bezier(0, 0, 0, 1);\r\n    -moz-transition-timing-function: cubic-bezier(0, 0, 0, 1);\r\n    transition-timing-function: cubic-bezier(0, 0, 0, 1);\r\n}\r\n\r\n.nav{\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: top;\r\n    margin-top: -0.8rem;\r\n    margin-right: -0.8rem;\r\n    margin-left: -0.8rem;\r\n    position: fixed;\r\n    z-index: -2;\r\n    width: 100%;\r\n    height: 46rem;\r\n}\r\n\r\n.nav-content{\r\n    background: linear-gradient(90deg, rgba(41, 5, 4, 0.4) 0%, rgba(87, 18, 1, 0.4) 100%);\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n}\r\n\r\n.logo{\r\n    padding: 3rem;\r\n}\r\n\r\n.logo img{\r\n    width: 7rem;\r\n    height: auto;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n\r\n.logo-tittle{\r\n    width: 12rem;\r\n    padding-top: 0.3rem;\r\n    padding-left: 7.5rem;\r\n}\r\n\r\n.logo h1{\r\n    position: relative;\r\n    font-family: \"Nostrud\";\r\n    font-size: 2.4rem;\r\n    z-index: 2;\r\n    line-height: 1rem;\r\n    color: black;\r\n    text-shadow: -0.1rem -0.1rem 0.3rem var(--secondary-color);\r\n}\r\n\r\n.body{\r\n    margin-top: -8; \r\n    margin-right: -0.8rem; \r\n    margin-left: -0.8rem; \r\n    position: relative;\r\n    top: 44rem;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    box-shadow: 10rem 10rem 10rem 10rem var(--primary-color);\r\n}\r\n\r\n.content {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: grid; \r\n    font-family: Arial;\r\n    padding: 3rem auto 3rem auto;\r\n}\r\n\r\n.transparent-area {\r\n    height: 8rem;\r\n    background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.presents{\r\n    height: 1rem;\r\n}\r\n\r\n.grid{\r\n    margin: 5rem auto 5rem auto;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 2rem;\r\n}\r\n\r\n.cardm{\r\n    margin: auto;\r\n    width: 40vw;\r\n    height: 30vw;\r\n    overflow: hidden;\r\n    background-color: var(--primary-color);\r\n    border-radius: 2rem;\r\n    animation: margin-color 6s linear 0.1s infinite;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.cardm img:hover{\r\n    filter: grayscale(100%);\r\n}\r\n\r\n.cardm img:hover~h2{\r\n    display: block;\r\n}\r\n\r\n.cardm a{\r\n    display: flex;\r\n    overflow: hidden;\r\n    align-items: flex-end;\r\n}\r\n\r\n.cardm img{\r\n    width: 133%;\r\n    position: relative;\r\n}\r\n\r\n.cardm h2{ \r\n    margin: auto; \r\n    color: var(--secondary-color);\r\n    text-shadow: 0.3rem 0.3rem 0.4rem var(--primary-color);\r\n    font-family: \"Nostrud\"; \r\n    letter-spacing: 0.2rem;\r\n    padding: 1rem;\r\n    position: absolute;\r\n    top: 3rem;\r\n    left: 3rem;\r\n    font-size: 2.8vw;\r\n    z-index: 1;\r\n    display: none;\r\n}\r\n\r\n.grid-colection{\r\n    margin-top: 5rem;\r\n    margin-bottom: 5rem;\r\n}\r\n\r\n.block{\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n}\r\n.card{\r\n    transition: all 0.8s;\r\n    cursor: pointer;\r\n    -webkit-filter: grayscale(100%);\r\n    filter: grayscale(100%);\r\n    margin: auto;\r\n}\r\n.card:hover{\r\n    -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5)), grayscale(0%);\r\n    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5)) grayscale(0%);\r\n}\r\n\r\n.go-home {\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.go-home img{\r\n    margin: 2rem auto 2rem auto;\r\n    width: 7rem;\r\n    height: auto;\r\n}\r\n\r\nfooter{\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: bottom;\r\n    margin-right: -0.8rem; \r\n    margin-left: -0.8rem; \r\n    color: var(--secondary-color);\r\n    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.8);\r\n    font-size: 2.3rem; \r\n    font-family: Arial;\r\n    position: fixed;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 8rem;\r\n    bottom: 0;\r\n}\r\n\r\nfooter p{\r\n    margin: auto;\r\n    padding: 1rem 2rem 1rem 2rem;\r\n    text-align: center;\r\n    margin-top: 2.5rem;\r\n    background: -webkit-linear-gradient(90deg, rgb(255, 8, 8) 0%, rgb(214, 4, 4) 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    font-family: \"Nostrud\";\r\n}\r\n\r\n.footer-content{\r\n    background: linear-gradient(90deg, rgba(20, 3, 2, 0.7) 0%, rgba(49, 10, 1, 0.7) 100%);\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    display: grid;\r\n}\r\n\r\n@media (max-width: 600px){\r\n    .nav-content{\r\n        background: linear-gradient(90deg, rgba(20, 3, 2, 0.7) 0%, rgba(49, 10, 1, 0.7) 100%);\r\n    }\r\n    .grid{\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .cardm{\r\n        width: 75vw;\r\n        height: 60vw;\r\n    }\r\n    .block{\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px){\r\n    .block{\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px){\r\n    .block{\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\r\n\r\n@media (max-width: 300px){\r\n    footer p{\r\n        margin-top: 0.5rem;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./public/assets/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\r\n    --primary-color: black;\r\n    --secondary-color: #e00101;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Nostrud\";\r\n    src: url(\"../font/NOSTRUD\\ -\\ Personal\\ Use.ttf\");\r\n}\r\n\r\n@keyframes margin-color {\r\n    0% {box-shadow: 0.2rem 0.2rem var(--secondary-color);}\r\n    50% {box-shadow: -0.2rem -0.2rem var(--secondary-color);}\r\n    100% {box-shadow: 0.2rem 0.2rem var(--secondary-color);}\r\n}\r\n\r\nhtml{\r\n    margin: 0; \r\n    padding: 0; \r\n    display: grid;\r\n    font-size: 62.5%;\r\n}\r\n\r\n#scroll-animate {\r\n\r\n}\r\n\r\n#scroll-animate-main {\r\n    width: 100%;\r\n    left: 0;\r\n}\r\n\r\n#heightPage, #heightScroll {\r\n  width: 1rem;\r\n  top: 0;\r\n  position: absolute;\r\n  z-index: 99;\r\n}\r\n\r\n#heightPage {\r\n  left: 0;\r\n}\r\n\r\n#heightScroll {\r\n  right: 0;\r\n}\r\n\r\n.wrapper-parallax {\r\n    margin-top: 100%;\r\n    margin-bottom: 30rem;\r\n    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.container {\r\n    max-width: 120rem;\r\n    margin: auto;\r\n}\r\n\r\n.force-flex{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.nav, footer, #scroll-animate-main {\r\n  -webkit-transition-property: all;\r\n    -moz-transition-property: all;\r\n    transition-property: all;\r\n\r\n  -webkit-transition-duration: 0.4s;\r\n    -moz-transition-duration: 0.4s;\r\n    transition-duration: 0.4s;\r\n\r\n  -webkit-transition-timing-function: cubic-bezier(0, 0, 0, 1);\r\n    -moz-transition-timing-function: cubic-bezier(0, 0, 0, 1);\r\n    transition-timing-function: cubic-bezier(0, 0, 0, 1);\r\n}\r\n\r\n.nav{\r\n    background-image: url(\"../images/header.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: top;\r\n    margin-top: -0.8rem;\r\n    margin-right: -0.8rem;\r\n    margin-left: -0.8rem;\r\n    position: fixed;\r\n    z-index: -2;\r\n    width: 100%;\r\n    height: 46rem;\r\n}\r\n\r\n.nav-content{\r\n    background: linear-gradient(90deg, rgba(41, 5, 4, 0.4) 0%, rgba(87, 18, 1, 0.4) 100%);\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n}\r\n\r\n.logo{\r\n    padding: 3rem;\r\n}\r\n\r\n.logo img{\r\n    width: 7rem;\r\n    height: auto;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n\r\n.logo-tittle{\r\n    width: 12rem;\r\n    padding-top: 0.3rem;\r\n    padding-left: 7.5rem;\r\n}\r\n\r\n.logo h1{\r\n    position: relative;\r\n    font-family: \"Nostrud\";\r\n    font-size: 2.4rem;\r\n    z-index: 2;\r\n    line-height: 1rem;\r\n    color: black;\r\n    text-shadow: -0.1rem -0.1rem 0.3rem var(--secondary-color);\r\n}\r\n\r\n.body{\r\n    margin-top: -8; \r\n    margin-right: -0.8rem; \r\n    margin-left: -0.8rem; \r\n    position: relative;\r\n    top: 44rem;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    box-shadow: 10rem 10rem 10rem 10rem var(--primary-color);\r\n}\r\n\r\n.content {\r\n    background-image: url(\"../images/body-back.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: grid; \r\n    font-family: Arial;\r\n    padding: 3rem auto 3rem auto;\r\n}\r\n\r\n.transparent-area {\r\n    height: 8rem;\r\n    background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.presents{\r\n    height: 1rem;\r\n}\r\n\r\n.grid{\r\n    margin: 5rem auto 5rem auto;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 2rem;\r\n}\r\n\r\n.cardm{\r\n    margin: auto;\r\n    width: 40vw;\r\n    height: 30vw;\r\n    overflow: hidden;\r\n    background-color: var(--primary-color);\r\n    border-radius: 2rem;\r\n    animation: margin-color 6s linear 0.1s infinite;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.cardm img:hover{\r\n    filter: grayscale(100%);\r\n}\r\n\r\n.cardm img:hover~h2{\r\n    display: block;\r\n}\r\n\r\n.cardm a{\r\n    display: flex;\r\n    overflow: hidden;\r\n    align-items: flex-end;\r\n}\r\n\r\n.cardm img{\r\n    width: 133%;\r\n    position: relative;\r\n}\r\n\r\n.cardm h2{ \r\n    margin: auto; \r\n    color: var(--secondary-color);\r\n    text-shadow: 0.3rem 0.3rem 0.4rem var(--primary-color);\r\n    font-family: \"Nostrud\"; \r\n    letter-spacing: 0.2rem;\r\n    padding: 1rem;\r\n    position: absolute;\r\n    top: 3rem;\r\n    left: 3rem;\r\n    font-size: 2.8vw;\r\n    z-index: 1;\r\n    display: none;\r\n}\r\n\r\n.grid-colection{\r\n    margin-top: 5rem;\r\n    margin-bottom: 5rem;\r\n}\r\n\r\n.block{\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n}\r\n.card{\r\n    transition: all 0.8s;\r\n    cursor: pointer;\r\n    -webkit-filter: grayscale(100%);\r\n    filter: grayscale(100%);\r\n    margin: auto;\r\n}\r\n.card:hover{\r\n    -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5)), grayscale(0%);\r\n    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5)) grayscale(0%);\r\n}\r\n\r\n.go-home {\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.go-home img{\r\n    margin: 2rem auto 2rem auto;\r\n    width: 7rem;\r\n    height: auto;\r\n}\r\n\r\nfooter{\r\n    background-image: url(\"../images/header.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: bottom;\r\n    margin-right: -0.8rem; \r\n    margin-left: -0.8rem; \r\n    color: var(--secondary-color);\r\n    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.8);\r\n    font-size: 2.3rem; \r\n    font-family: Arial;\r\n    position: fixed;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 8rem;\r\n    bottom: 0;\r\n}\r\n\r\nfooter p{\r\n    margin: auto;\r\n    padding: 1rem 2rem 1rem 2rem;\r\n    text-align: center;\r\n    margin-top: 2.5rem;\r\n    background: -webkit-linear-gradient(90deg, rgb(255, 8, 8) 0%, rgb(214, 4, 4) 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    font-family: \"Nostrud\";\r\n}\r\n\r\n.footer-content{\r\n    background: linear-gradient(90deg, rgba(20, 3, 2, 0.7) 0%, rgba(49, 10, 1, 0.7) 100%);\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    display: grid;\r\n}\r\n\r\n@media (max-width: 600px){\r\n    .nav-content{\r\n        background: linear-gradient(90deg, rgba(20, 3, 2, 0.7) 0%, rgba(49, 10, 1, 0.7) 100%);\r\n    }\r\n    .grid{\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .cardm{\r\n        width: 75vw;\r\n        height: 60vw;\r\n    }\r\n    .block{\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px){\r\n    .block{\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px){\r\n    .block{\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\r\n\r\n@media (max-width: 300px){\r\n    footer p{\r\n        margin-top: 0.5rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./public/assets/css/style.css":
/*!*************************************!*\
  !*** ./public/assets/css/style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./public/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./public/assets/font/NOSTRUD - Personal Use.ttf":
/*!*******************************************************!*\
  !*** ./public/assets/font/NOSTRUD - Personal Use.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c101cae6d65abaef9dc8.ttf";

/***/ }),

/***/ "./public/assets/images/body-back.jpg":
/*!********************************************!*\
  !*** ./public/assets/images/body-back.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6fcb5a6122c8ca856f3.jpg";

/***/ }),

/***/ "./public/assets/images/header.jpg":
/*!*****************************************!*\
  !*** ./public/assets/images/header.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a44e6c7dc87d2867b83c.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/assets/css/style.css */ "./public/assets/css/style.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


document.addEventListener('click', function (e) {
  var el = e.target;
  var tag = el.tagName.toLowerCase();

  if (el.parentNode.getAttribute('href') !== 'index.html' && (tag === 'img' || tag === 'h2' || tag === 'a')) {
    e.preventDefault();
    if (tag === 'img') carregaPagina(el.parentNode);
  }
});

function carregaPagina(_x) {
  return _carregaPagina.apply(this, arguments);
}

function _carregaPagina() {
  _carregaPagina = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(el) {
    var href, response, html;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            href = el.getAttribute('href');
            _context.next = 4;
            return fetch(href);

          case 4:
            response = _context.sent;

            if (!(response.status !== 200)) {
              _context.next = 7;
              break;
            }

            throw new Error('ERRO 404');

          case 7:
            _context.next = 9;
            return response.text();

          case 9:
            html = _context.sent;
            carregaResultado(html);
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));
  return _carregaPagina.apply(this, arguments);
}

function carregaResultado(response) {
  var ressultado = document.querySelector('.content');
  ressultado.innerHTML = response;
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map