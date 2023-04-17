/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: rgb(182, 224, 238);\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nmain {\n  flex-grow: 1;\n}\n\nbutton {\n  background-color: white;\n  min-height: 54px;\n  min-width: 54px;\n}\n\nbutton,\n.cancel__btn,\ninput {\n  padding: 10px 15px;\n  border: 2px solid black;\n}\n\n.cancel__btn {\n  background-color: rgb(224, 105, 105);\n  color: white;\n}\n\n.submit__btn {\n  background-color: green;\n  color: white;\n}\n\n.wrapper {\n  max-width: 1200px;\n  padding: 14px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nheader {\n  background-color: white;\n}\n\n.nav {\n  background-color: wheat;\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  overflow-x: hidden;\n  transition: 0.4s;\n  padding-top: 80px;\n}\n.nav.open {\n  width: 320px;\n  max-width: 100%;\n}\n.nav h2 {\n  font-size: 28px;\n}\n.nav .task-pages,\n.nav .project-controls_header {\n  margin-bottom: 14px;\n}\n.nav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  display: block;\n  transition: 0.3s;\n}\n.nav .close-nav_btn {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  margin-left: 50px;\n}\n.nav .divider-line,\n.nav .project-controls_header,\n.nav .cancel {\n  margin-right: 14px;\n}\n.nav .divider-line {\n  border-bottom: 2px solid black;\n  display: block;\n  margin-left: 32px;\n  margin-bottom: 10px;\n  max-width: 90%;\n}\n.nav .project-controls_header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nav .project-controls,\n.nav .project-controls_header {\n  padding-left: 32px;\n}\n.nav .project-controls {\n  width: 95%;\n  display: none;\n}\n.nav .project-controls .show-controls {\n  display: block;\n}\n.nav .project-controls input {\n  display: block;\n  width: 100%;\n  margin-bottom: 5px;\n}\n.nav .project-controls .project-controls__btns {\n  display: flex;\n  justify-content: right;\n  gap: 5px;\n}\n.nav .project-controls .project-controls__btns .submit__btn {\n  min-width: 132px;\n}\n.nav .project-controls .project-controls__btns .cancel__btn {\n  width: 100%;\n}\n\n.form {\n  display: none;\n  width: 100%;\n  background-color: lightblue;\n}\n.form input,\n.form textarea {\n  width: 100%;\n  border: 2px solid black;\n}\n.form .radio__container {\n  display: flex;\n  justify-content: space-around;\n  text-align: center;\n}\n.form .form-btn__container {\n  display: flex;\n  gap: 5px;\n}\n\n.task-list__container {\n  width: 100%;\n}\n\n.card {\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  background-color: white;\n  padding: 12px;\n  display: grid;\n  max-width: 320px;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(4, auto);\n}\n.card .task__title {\n  text-align: center;\n  align-self: center;\n  grid-column: 1/-1;\n  grid-row: 1/2;\n  border-bottom: 2px solid black;\n}\n.card .task__date {\n  grid-row: 2/3;\n  grid-column: 1/3;\n  justify-self: center;\n}\n.card .task__priority {\n  grid-row: 2/3;\n  grid-column-end: -1;\n}\n.card .task__description {\n  justify-content: center;\n  color: rgb(120, 113, 113);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  grid-row: 3/-1;\n  grid-column: 1/-1;\n  margin-bottom: 5px;\n}\n@supports (-webkit-line-clamp: 3) {\n  .card .task__description {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: initial;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n  }\n}\n.card .btn__container {\n  display: flex;\n  gap: 5px;\n  justify-content: space-evenly;\n  grid-column: 1/-1;\n}\n.card .btn__container button {\n  border-radius: 50%;\n  width: 42px;\n  height: 42px;\n}\n\nfooter .wrapper a {\n  margin: 0 auto;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAKA;EACE,oCAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;AAHF;;AAMA;EACE,YAAA;AAHF;;AAMA;EACE,uBAAA;EACA,gBAAA;EACA,eAAA;AAHF;;AAMA;;;EAGE,kBAAA;EACA,uBAAA;AAHF;;AAMA;EACE,oCA5Ba;EA6Bb,YAAA;AAHF;;AAMA;EACE,uBAhCa;EAiCb,YAAA;AAHF;;AAMA;EACE,iBAAA;EACA,aAAA;EACA,cAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAHF;;AAMA;EACE,uBAAA;AAHF;;AAUA;EACE,uBAAA;EACA,YAAA;EACA,QAAA;EACA,eAAA;EACA,UAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AAPF;AAQE;EACE,YAAA;EACA,eAAA;AANJ;AAQE;EACE,eAAA;AANJ;AAQE;;EAEE,mBAAA;AANJ;AAQE;EACE,yBAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;AANJ;AAQE;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,iBAAA;AANJ;AAQE;;;EAGE,kBAAA;AANJ;AAQE;EACE,8BAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;AANJ;AAQE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AANJ;AAQE;;EAEE,kBAAA;AANJ;AAQE;EACE,UAAA;EACA,aAAA;AANJ;AAOI;EACE,cAAA;AALN;AAOI;EACE,cAAA;EACA,WAAA;EACA,kBAAA;AALN;AAOI;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AALN;AAMM;EACE,gBAAA;AAJR;AAMM;EACE,WAAA;AAJR;;AAUA;EACE,aAAA;EACA,WAAA;EACA,2BAAA;AAPF;AAQE;;EAEE,WAAA;EACA,uBAAA;AANJ;AAQE;EACE,aAAA;EACA,6BAAA;EACA,kBAAA;AANJ;AAQE;EACE,aAAA;EACA,QAAA;AANJ;;AAUA;EACE,WAAA;AAPF;;AAUA;EACE,yCAAA;EACA,kBAAA;EACA,uBAAA;EACA,aAAA;EACA,aAAA;EACA,gBAAA;EACA,qCAAA;EACA,mCAAA;AAPF;AAQE;EACE,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;AANJ;AAQE;EACE,aAAA;EACA,gBAAA;EACA,oBAAA;AANJ;AAQE;EACE,aAAA;EACA,mBAAA;AANJ;AAQE;EACE,uBAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,kBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;AANJ;AAOI;EAVF;IAWI,gBAAA;IACA,uBAAA;IACA,oBAAA;IACA,oBAAA;IACA,qBAAA;IACA,4BAAA;EAJJ;AACF;AAME;EACE,aAAA;EACA,QAAA;EACA,6BAAA;EACA,iBAAA;AAJJ;AAKI;EACE,kBAAA;EACA,WAAA;EACA,YAAA;AAHN;;AAUI;EACE,cAAA;AAPN","sourcesContent":["@import url('reset.css');\n\n$cancel-color: rgb(224, 105, 105);\n$submit-color: green;\n\nbody {\n  background-color: rgb(182, 224, 238);\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nmain {\n  flex-grow: 1;\n}\n\nbutton {\n  background-color: white;\n  min-height: 54px;\n  min-width: 54px;\n}\n\nbutton,\n.cancel__btn,\ninput {\n  padding: 10px 15px;\n  border: 2px solid black;\n}\n\n.cancel__btn {\n  background-color: $cancel-color;\n  color: white;\n}\n\n.submit__btn {\n  background-color: $submit-color;\n  color: white;\n}\n\n.wrapper {\n  max-width: 1200px;\n  padding: 14px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nheader {\n  background-color: white;\n  // .wrapper {\n  //   display: flex;\n  //   justify-content: space-between;\n  // }\n}\n\n.nav {\n  background-color: wheat;\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  overflow-x: hidden;\n  transition: 0.4s;\n  padding-top: 80px;\n  &.open {\n    width: 320px;\n    max-width: 100%;\n  }\n  h2 {\n    font-size: 28px;\n  }\n  .task-pages,\n  .project-controls_header {\n    margin-bottom: 14px;\n  }\n  a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    display: block;\n    transition: 0.3s;\n  }\n  .close-nav_btn {\n    position: absolute;\n    top: 14px;\n    right: 14px;\n    margin-left: 50px;\n  }\n  .divider-line,\n  .project-controls_header,\n  .cancel {\n    margin-right: 14px;\n  }\n  .divider-line {\n    border-bottom: 2px solid black;\n    display: block;\n    margin-left: 32px;\n    margin-bottom: 10px;\n    max-width: 90%;\n  }\n  .project-controls_header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .project-controls,\n  .project-controls_header {\n    padding-left: 32px;\n  }\n  .project-controls {\n    width: 95%;\n    display: none;\n    .show-controls {\n      display: block;\n    }\n    input {\n      display: block;\n      width: 100%;\n      margin-bottom: 5px;\n    }\n    .project-controls__btns {\n      display: flex;\n      justify-content: right;\n      gap: 5px;\n      .submit__btn {\n        min-width: 132px;\n      }\n      .cancel__btn {\n        width: 100%;\n      }\n    }\n  }\n}\n\n.form {\n  display: none;\n  width: 100%;\n  background-color: lightblue;\n  input,\n  textarea {\n    width: 100%;\n    border: 2px solid black;\n  }\n  .radio__container {\n    display: flex;\n    justify-content: space-around;\n    text-align: center;\n  }\n  .form-btn__container {\n    display: flex;\n    gap: 5px;\n  }\n}\n\n.task-list__container {\n  width: 100%;\n}\n\n.card {\n  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n  border-radius: 5px;\n  background-color: white;\n  padding: 12px;\n  display: grid;\n  max-width: 320px;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(4, auto);\n  .task__title {\n    text-align: center;\n    align-self: center;\n    grid-column: 1 / -1;\n    grid-row: 1 / 2;\n    border-bottom: 2px solid black;\n  }\n  .task__date {\n    grid-row: 2 / 3;\n    grid-column: 1 / 3;\n    justify-self: center;\n  }\n  .task__priority {\n    grid-row: 2 / 3;\n    grid-column-end: -1;\n  }\n  .task__description {\n    justify-content: center;\n    color: rgb(120, 113, 113);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-align: center;\n    grid-row: 3 / -1;\n    grid-column: 1 / -1;\n    margin-bottom: 5px;\n    @supports (-webkit-line-clamp: 3) {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: initial;\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      -webkit-box-orient: vertical;\n    }\n  }\n  .btn__container {\n    display: flex;\n    gap: 5px;\n    justify-content: space-evenly;\n    grid-column: 1 / -1;\n    button {\n      border-radius: 50%;\n      width: 42px;\n      height: 42px;\n    }\n  }\n}\n\nfooter {\n  .wrapper {\n    a {\n      margin: 0 auto;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n/* Some extra reset added by me */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nli {\n  list-style: none;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\na {\n    text-decoration: none;\n}\n\na:hover, button:hover {\n    cursor: pointer;\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED,iCAAiC;;AAEjC;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n/* Some extra reset added by me */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nli {\n  list-style: none;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\na {\n    text-decoration: none;\n}\n\na:hover, button:hover {\n    cursor: pointer;\n}\n\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/components/task.js");


function form(container) {
  const taskName = document.getElementById('task-name')
  const taskDate = document.getElementById('task-date')
  const taskPriorityRadios = document.getElementsByName('task-priority')
  const taskDescription = document.getElementById('task-description')
  const closeForm = document.getElementById('close-form__btn')
  const thisForm = document.getElementById('task-form')
  console.log(container)
  let radioValue

  const getRadioValue = (e) => {
    radioValue = e.target.value
    return radioValue
  }

  const toggleFormView = () => {
    const taskContainer = container
    if (thisForm.style.display === 'block') {
      thisForm.style.display = 'none'
      taskContainer.style.display = 'block'
    } else {
      thisForm.style.display = 'block'
      taskContainer.style.display = 'none'
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = taskName.value.trim()
    const date = taskDate.value.trim()
    const priority = radioValue
    const description = taskDescription.value.trim()
    console.log(priority, radioValue)
    ;(0,_task__WEBPACK_IMPORTED_MODULE_0__.createTask)(name, date, priority, description, _task__WEBPACK_IMPORTED_MODULE_0__.tasks, container)
    toggleFormView()
  }

  thisForm.addEventListener('submit', handleSubmit)
  closeForm.addEventListener('click', toggleFormView)
  taskPriorityRadios.forEach((radio) =>
    radio.addEventListener('click', getRadioValue)
  )
  return {
    toggleFormView,
  }
}


/***/ }),

/***/ "./src/components/projects.js":
/*!************************************!*\
  !*** ./src/components/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
const projects = [
  { name: 'hey4' },
  { name: 'hey4' },
  { name: 'hey4' },
  { name: 'hey4' },
]

class Project {
  constructor(name) {
    this.name = name
  }

  sayName() {
    console.log(`this is the prject name: + ${this.name}`)
  }
}




/***/ }),

/***/ "./src/components/startApp.js":
/*!************************************!*\
  !*** ./src/components/startApp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/header */ "./src/layout/header.js");
/* harmony import */ var _layout_mainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/mainContent */ "./src/layout/mainContent.js");
/* harmony import */ var _layout_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/navbar */ "./src/layout/navbar.js");




function startApp() {
  // const content = mainContent()
  const nav = new _layout_navbar__WEBPACK_IMPORTED_MODULE_2__["default"]()
  const initialize = () => {
    
    ;(0,_layout_header__WEBPACK_IMPORTED_MODULE_0__["default"])()
    nav.init()
    ;(0,_layout_mainContent__WEBPACK_IMPORTED_MODULE_1__["default"])()
    // content.loadTasks()
    console.log('app started')
  }

  return { initialize }
}

const app = startApp()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);


/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "loadTasks": () => (/* binding */ loadTasks),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/components/projects.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/components/form.js");



const tasks = [
  {
    name: '43',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore vitae animi. Soluta, rem quae aut ab veritatis officia consequuntur quidem perspiciatis ad laboriosam laudantium? Assumenda fuga consequatur eveniet facilis.',
    priority: 'high',
    date: '08/23/89',
    complete: false,
    markComplete() {
      console.log(this.complete, this.name)
      this.complete = true
    },
    editTask() {
      console.log(this, 'we are editing now')
    },
  },
]

class Task extends _projects__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(name, date, priority, description) {
    super()
    this.name = name
    this.date = date
    this.priority = priority
    this.description = description
    this.complete = false
  }

  markComplete() {
    console.log(this)
    this.complete = true
    console.log(this.complete)
  }

  editTask() {
    console.log(this)
    const taskForm = (0,_form__WEBPACK_IMPORTED_MODULE_1__["default"])()
    taskForm.toggleFormView()
  }
}

function createCard(task) {
  console.log(task)
  const card = document.createElement('div')
  card.classList.add('card')
  const title = document.createElement('h3')
  title.classList.add('task__title')
  title.innerText = task.name
  const date = document.createElement('p')
  date.classList.add('task__date')
  date.innerText = task.date
  const priorty = document.createElement('p')
  priorty.classList.add('task__priority')
  priorty.innerText = task.priority
  const description = document.createElement('p')
  description.classList.add('task__description')
  description.innerText = task.description
  const btnContainer = document.createElement('div')
  btnContainer.classList.add('btn__container')
  const editBtn = document.createElement('button')
  editBtn.innerText = '\u{270D}'
  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = '\u{2718}'
  const completeBtn = document.createElement('button')
  completeBtn.innerText = '\u{2714}'
  completeBtn.addEventListener('click', task.markComplete.bind(this))
  editBtn.addEventListener('click', task.editTask)
  deleteBtn.addEventListener('click', () => {
    deleteTask(task)
  })
  btnContainer.append(completeBtn, editBtn, deleteBtn)
  card.append(title, date, priorty, description, btnContainer)
  return card
}

function deleteTask(task) {
  console.log(task)
  const index = tasks.findIndex((x) => x.name === task.name)
  if (index > -1) {
    tasks.splice(index, 1)
  }
  loadTasks()
}


function loadTasks() {
  const taskCards = tasks.map(createCard)
  const taskContainer = document.getElementById('task-list__container')
  taskContainer.innerHTML = ''
  taskCards.forEach(card => taskContainer.appendChild(card))
}

// export function taskLoader(container, title, section = 'tasks') {
//   const thisContainer = container
//   console.log('test', thisContainer)
//   return function loadCards () {
//     thisContainer.innerHTML = ''
//     taskCards.forEach((card) => thisContainer.append(card))
//   }
// }




function createTask(name, date, priority, description, taskList) {
  console.log(priority)
  const task = new Task(name, date, priority, description)
  taskList.push(task)
  loadTasks()
}






/***/ }),

/***/ "./src/layout/header.js":
/*!******************************!*\
  !*** ./src/layout/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/layout/navbar.js");


function header() {
  const openNavBtn = document.getElementById('open-nav_btn')
  const navbar = new _navbar__WEBPACK_IMPORTED_MODULE_0__["default"]()
  openNavBtn.addEventListener('click', navbar.openNav.bind(navbar))
}


/***/ }),

/***/ "./src/layout/mainContent.js":
/*!***********************************!*\
  !*** ./src/layout/mainContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mainContent)
/* harmony export */ });
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/form */ "./src/components/form.js");
/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/task */ "./src/components/task.js");





function mainContent(section) {
  const openFormBtn = document.getElementById('open-form__btn')
  const sectionTitle = document.getElementById('section__title')
  const contentContainer = document.getElementById('task-list__container')
  const newForm = (0,_components_form__WEBPACK_IMPORTED_MODULE_0__["default"])(contentContainer)

  ;(0,_components_task__WEBPACK_IMPORTED_MODULE_1__.loadTasks)(_components_task__WEBPACK_IMPORTED_MODULE_1__.tasks)

  openFormBtn.addEventListener('click', newForm.toggleFormView)
  return {
    loadTasks: _components_task__WEBPACK_IMPORTED_MODULE_1__.loadTasks,
  }
}


/***/ }),

/***/ "./src/layout/navbar.js":
/*!******************************!*\
  !*** ./src/layout/navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/projects */ "./src/components/projects.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContent */ "./src/layout/mainContent.js");



// const nav = document.getElementById('nav')

// function closeNav() {
//   nav.classList.remove('open')
// }

// function openNav() {
//   nav.classList.add('open')
// }

// // LETS REFORMAT THIS TO RETURN A OBJECT THAT WE CAN PUT ALL THE METHODS IN THAT WAY ^^ THAT STUFF ISN"T OUT IN THE OPEN

// export default function navbar() {
//   const navLinks = document.querySelectorAll('nav a')
//   const closeNavBtn = document.getElementById('close-nav_btn')
//   const projectControlsBtn = document.getElementById('project-controls_btn')
//   const submitNewProjectBtn = document.getElementById('add-project_btn')
//   const closeProjectControlsBtn = document.getElementById('cancel-project_btn')
//   const projectControls = document.getElementById('project-controls')
//   const projectInput = document.getElementById('project_input')
//   const projectPages = document.getElementById('project-pages')

//   const navigate = (e) => {
//     const newContent = mainContent()
//     const { section } = e.target.dataset
//     newContent.loadTasks(section)
//     // newContent.showTasks(section)
//     closeNav()
//   }

//   const addEventToLink = (link) => {
//     link.addEventListener('click', navigate)
//   }

//   const toggleProjectControlsView = () => {
//     if (projectControls.style.display === 'block') {
//       projectControls.style.display = 'none'
//     } else {
//       projectControls.style.display = 'block'
//     }
//   }

//   const createProjectLink = (project) => {
//     const li = document.createElement('li')
//     const link = document.createElement('a')
//     link.innerText = project.name
//     link.href = `# + ${project.name}`
//     link.dataset.section = project.name
//     addEventToLink(link)
//     li.appendChild(link)
//     projectPages.appendChild(li)
//   }

//   const appendProjectsToNav = () => {
//     projects.forEach((project) => {
//       createProjectLink(project)
//     })
//   }

//   const addProject = () => {
//     const projectName = projectInput.value
//     if (projectName.trim() === '') return
//     const newProject = new Project(projectName)
//     projects.push(newProject)
//     createProjectLink(newProject)
//     projectInput.value = ''
//     toggleProjectControlsView()
//   }

//   appendProjectsToNav()

//   closeNavBtn.addEventListener('click', closeNav)

//   navLinks.forEach((link) => {
//     addEventToLink(link)
//   })

//   projectControlsBtn.addEventListener('click', toggleProjectControlsView)
//   submitNewProjectBtn.addEventListener('click', addProject)
//   closeProjectControlsBtn.addEventListener('click', toggleProjectControlsView)
// }

// export { openNav }


class Navbar {
  constructor() {
    this.nav = document.getElementById('nav')
    this.closeNavBtn = document.getElementById('close-nav_btn')
  }

  openNav() {
    console.log(this.nav)
    this.nav.classList.add('open')
  }

  closeNav() {
    this.nav.classList.remove('open')
  }


  init() {
    console.log(this.nav)
    this.closeNavBtn.addEventListener('click', this.closeNav.bind(this))
  }


}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _components_startApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/startApp */ "./src/components/startApp.js");



_components_startApp__WEBPACK_IMPORTED_MODULE_1__["default"].initialize()



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map