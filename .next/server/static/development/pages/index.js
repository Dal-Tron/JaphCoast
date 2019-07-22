module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CostsSection.js":
/*!************************************!*\
  !*** ./components/CostsSection.js ***!
  \************************************/
/*! exports provided: CostsSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostsSection", function() { return CostsSection; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var CostsSection = function CostsSection(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "costs-section",
    style: {
      minHeight: props.height + 100
    },
    className: "jsx-3951281516" + " " + "section section-five"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "costs-wrapper abs"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "costs-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "title title-five"
  }, "Due Dates"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "title left-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "required left-item"
  }, "$500 USD deposit is required"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "required left-item"
  }, "The full amount is due by")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "title right-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "cost-date right-item"
  }, "September 3rd, 2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "cost-date right-item"
  }, "March 4th, 2020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "title title-five-two"
  }, "Total Cost"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "sub-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "title subtitle-five"
  }, "Leaving From Kelowna"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "title left-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "total-cost-item left-item"
  }, "Adult"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "total-cost-item left-item"
  }, "Ages 7-12"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "total-cost-item left-item"
  }, "Ages 2-6")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "title right-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "total-cost-item right-item"
  }, "$1544.35"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "total-cost-item right-item"
  }, "$1196.07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "total-cost-item right-item"
  }, "$887.54"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "sub-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "title subtitle-five"
  }, "Leaving From Vancouver"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "title left-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "total-cost-item left-item"
  }, "Adult"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "total-cost-item left-item"
  }, "Ages 7-12"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "total-cost-item left-item"
  }, "Ages 2-6")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "title right-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "total-cost-item right-item"
  }, "$1559.35"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "total-cost-item right-item"
  }, "$1206.07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "total-cost-item right-item"
  }, "$897.54"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "title final-note"
  }, "All rates include round trip airfare, round trip airport transfers, 7 nights all-inclusive accommodation, one checked bag per person and seat selection with the group towards the rear of the aircraft."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "title final-note"
  }, "This pricing is Guaranteed for the first 20 people who pay the deposit, and prices beyond those first 20 should still be very close to these rates, but are not guaranteed"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "title final-note"
  }, "Bookings can be done through our travel agent Holly Graves at", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3951281516" + " " + "title"
  }, "holly.graves@flightcentre.ca")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3951281516"
  }, ".section-five.jsx-3951281516{background:rgba(110,104,148,0.9);}.costs-wrapper.jsx-3951281516{min-width:100rem;}.costs-container.jsx-3951281516{position:relative;}.sub-container.jsx-3951281516{height:13rem;}.title-five.jsx-3951281516{margin-bottom:2rem;text-align:center;}.title-five-two.jsx-3951281516{margin-bottom:3rem;}.left-container.jsx-3951281516{width:50%;float:left;text-align:right;font-size:2.2rem;}.left-item.jsx-3951281516{margin-left:auto;margin-right:1rem;}.required.jsx-3951281516{margin-bottom:2rem;height:3rem;line-height:3rem;}.right-container.jsx-3951281516{width:50%;float:left;text-align:left;font-family:Laila;font-size:2rem;}.right-item.jsx-3951281516{margin-left:2rem;}.cost-date.jsx-3951281516{height:3rem;line-height:3rem;margin-bottom:2rem;}.subtitle-five.jsx-3951281516{font-size:1.4rem;margin-top:-2rem;font-weight:800;}.total-cost-item.jsx-3951281516{height:1.5rem;line-height:3.5rem;margin-bottom:1rem;height:1.5rem;line-height:3.5rem;margin-bottom:1rem;}.final-note.jsx-3951281516{width:60rem;font-family:Laila;font-size:1.6rem;margin-left:auto;margin-right:auto;margin-bottom:2rem;}@media (max-width:1200px){.left-container.jsx-3951281516{font-size:1.8rem;}.right-container.jsx-3951281516{font-size:1.8rem;}.final-note.jsx-3951281516{font-size:1.6rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0Nvc3RzU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGdCLEFBRzZDLEFBR25CLEFBR0MsQUFHTCxBQUdNLEFBSUEsQUFHVCxBQU1PLEFBSUUsQUFLVCxBQU9PLEFBR0wsQUFLSyxBQUtILEFBUUYsQUFTTyxBQUdBLEFBR0EsVUF6RFIsQUFlQSxFQVVNLEFBa0JDLENBckRwQixDQTZDcUIsR0FuRHJCLEFBc0JvQixBQWdCcEIsQUFRbUIsQUFzQmpCLEFBR0EsQUFHQSxDQXZFRixDQU1vQixBQUlwQixBQWFjLEVBVEssQUFlRCxRQVVHLENBa0JGLENBakNBLEVBOUJuQixBQXVEcUIsQ0FMSCxDQXhCbEIsRUFiQSxBQXVCb0IsQ0FmRCxTQTJDQSxDQWpDbkIsQUFlQSxFQUtBLEVBS2dCLEdBbENoQixBQWVpQixTQTRCRyxFQVJDLElBbkJyQixZQTRCcUIsR0FSQSxnQkFTckIsR0FSQSIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9KYXBoV2VkZGluZ1NpdGUvY29tcG9uZW50cy9Db3N0c1NlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ29zdHNTZWN0aW9uID0gcHJvcHMgPT4gKFxuICA8ZGl2XG4gICAgaWQ9XCJjb3N0cy1zZWN0aW9uXCJcbiAgICBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tZml2ZVwiXG4gICAgc3R5bGU9e3sgbWluSGVpZ2h0OiBwcm9wcy5oZWlnaHQgKyAxMDAgfX1cbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdHMtd3JhcHBlciBhYnNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtZml2ZVwiPkR1ZSBEYXRlczwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGxlZnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1aXJlZCBsZWZ0LWl0ZW1cIj4kNTAwIFVTRCBkZXBvc2l0IGlzIHJlcXVpcmVkPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1aXJlZCBsZWZ0LWl0ZW1cIj5UaGUgZnVsbCBhbW91bnQgaXMgZHVlIGJ5PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHJpZ2h0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdC1kYXRlIHJpZ2h0LWl0ZW1cIj5TZXB0ZW1iZXIgM3JkLCAyMDE5PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3N0LWRhdGUgcmlnaHQtaXRlbVwiPk1hcmNoIDR0aCwgMjAyMDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZS1maXZlLXR3b1wiPlRvdGFsIENvc3Q8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBzdWJ0aXRsZS1maXZlXCI+TGVhdmluZyBGcm9tIEtlbG93bmE8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGxlZnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSBsZWZ0LWl0ZW1cIj5BZHVsdDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbC1jb3N0LWl0ZW0gbGVmdC1pdGVtXCI+QWdlcyA3LTEyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSBsZWZ0LWl0ZW1cIj5BZ2VzIDItNjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgcmlnaHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSByaWdodC1pdGVtXCI+JDE1NDQuMzU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWwtY29zdC1pdGVtIHJpZ2h0LWl0ZW1cIj4kMTE5Ni4wNzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbC1jb3N0LWl0ZW0gcmlnaHQtaXRlbVwiPiQ4ODcuNTQ8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgc3VidGl0bGUtZml2ZVwiPkxlYXZpbmcgRnJvbSBWYW5jb3V2ZXI8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGxlZnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSBsZWZ0LWl0ZW1cIj5BZHVsdDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbC1jb3N0LWl0ZW0gbGVmdC1pdGVtXCI+QWdlcyA3LTEyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSBsZWZ0LWl0ZW1cIj5BZ2VzIDItNjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgcmlnaHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSByaWdodC1pdGVtXCI+JDE1NTkuMzU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWwtY29zdC1pdGVtIHJpZ2h0LWl0ZW1cIj4kMTIwNi4wNzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbC1jb3N0LWl0ZW0gcmlnaHQtaXRlbVwiPiQ4OTcuNTQ8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgZmluYWwtbm90ZVwiPlxuICAgICAgICAgIEFsbCByYXRlcyBpbmNsdWRlIHJvdW5kIHRyaXAgYWlyZmFyZSwgcm91bmQgdHJpcCBhaXJwb3J0IHRyYW5zZmVycywgN1xuICAgICAgICAgIG5pZ2h0cyBhbGwtaW5jbHVzaXZlIGFjY29tbW9kYXRpb24sIG9uZSBjaGVja2VkIGJhZyBwZXIgcGVyc29uIGFuZFxuICAgICAgICAgIHNlYXQgc2VsZWN0aW9uIHdpdGggdGhlIGdyb3VwIHRvd2FyZHMgdGhlIHJlYXIgb2YgdGhlIGFpcmNyYWZ0LlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBmaW5hbC1ub3RlXCI+XG4gICAgICAgICAgVGhpcyBwcmljaW5nIGlzIEd1YXJhbnRlZWQgZm9yIHRoZSBmaXJzdCAyMCBwZW9wbGUgd2hvIHBheSB0aGVcbiAgICAgICAgICBkZXBvc2l0LCBhbmQgcHJpY2VzIGJleW9uZCB0aG9zZSBmaXJzdCAyMCBzaG91bGQgc3RpbGwgYmUgdmVyeSBjbG9zZVxuICAgICAgICAgIHRvIHRoZXNlIHJhdGVzLCBidXQgYXJlIG5vdCBndWFyYW50ZWVkXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGZpbmFsLW5vdGVcIj5cbiAgICAgICAgICBCb29raW5ncyBjYW4gYmUgZG9uZSB0aHJvdWdoIG91ciB0cmF2ZWwgYWdlbnQgSG9sbHkgR3JhdmVzIGF0XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPmhvbGx5LmdyYXZlc0BmbGlnaHRjZW50cmUuY2E8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc2VjdGlvbi1maXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMTAsIDEwNCwgMTQ4LCAwLjkpO1xuICAgICAgfVxuICAgICAgLmNvc3RzLXdyYXBwZXIge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHJlbTtcbiAgICAgIH1cbiAgICAgIC5jb3N0cy1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuc3ViLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTNyZW07XG4gICAgICB9XG4gICAgICAudGl0bGUtZml2ZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC50aXRsZS1maXZlLXR3byB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICB9XG4gICAgICAubGVmdC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgICAgfVxuICAgICAgLmxlZnQtaXRlbSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgICAucmVxdWlyZWQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgICAgfVxuICAgICAgLnJpZ2h0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LWZhbWlseTogTGFpbGE7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5yaWdodC1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgICB9XG4gICAgICAuY29zdC1kYXRlIHtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5zdWJ0aXRsZS1maXZlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IC0ycmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgfVxuICAgICAgLnRvdGFsLWNvc3QtaXRlbSB7XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMy41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5maW5hbC1ub3RlIHtcbiAgICAgICAgd2lkdGg6IDYwcmVtO1xuICAgICAgICBmb250LWZhbWlseTogTGFpbGE7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgICAgICAubGVmdC1jb250YWluZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5yaWdodC1jb250YWluZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5maW5hbC1ub3RlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/CostsSection.js */"));
};

/***/ }),

/***/ "./components/InfoSection.js":
/*!***********************************!*\
  !*** ./components/InfoSection.js ***!
  \***********************************/
/*! exports provided: InfoSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoSection", function() { return InfoSection; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_SplitLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/SplitLayout */ "./components/layout/SplitLayout.js");



var leftElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
  className: "jsx-833020903" + " " + "title title-three"
}, "Info"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-833020903" + " " + "subtitle-three"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-833020903" + " " + "first-letter"
}, "If"), " you\u2019ve made it this far, there\u2019s a good chance we\u2019ve invited you to our wedding in Mexico! There\u2019s also a good chance that you\u2019d love to come, but are unable to make it work due to cost or time constraints or any other reason, and we understand that and will be sending information out to everyone for a Ceremony and Dance we\u2019ll be having at home for those of you that can\u2019t make it to Mexico, because we love you all!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "833020903"
}, ".title-three.jsx-833020903{color:white;text-align:left;padding-left:10rem;}.subtitle-three.jsx-833020903{font-family:LatoHairLine;color:white;font-size:2.4rem;text-align:left;padding-left:10rem;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:800;}@media (max-width:1200px){.title-three.jsx-833020903{padding-left:2rem;}.subtitle-three.jsx-833020903{padding-left:2rem;font-size:1.8rem;}}@media (max-width:950px){.title-three.jsx-833020903{padding-left:5rem;}.subtitle-three.jsx-833020903:{padding-left:4rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0luZm9TZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZ0IsQUFHcUIsQUFLYSxBQVVMLEFBR0EsQUFNQSxBQUdBLFlBMUJKLE1BZWhCLEFBR21CLEFBTW5CLEFBR0EsT0F0QlksR0FKTyxPQWtCbkIsRUFiaUIsVUFKbkIsT0FLa0IsZ0JBQ0csbUJBQ0EsNkZBQ0gsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0luZm9TZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU3BsaXRMYXlvdXQgZnJvbSAnLi9sYXlvdXQvU3BsaXRMYXlvdXQnXG5cbmNvbnN0IGxlZnRFbGVtZW50ID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlLXRocmVlXCI+SW5mbzwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZS10aHJlZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1sZXR0ZXJcIj5JZjwvZGl2PiB5b3XigJl2ZSBtYWRlIGl0IHRoaXMgZmFyLCB0aGVyZeKAmXMgYVxuICAgICAgZ29vZCBjaGFuY2Ugd2XigJl2ZSBpbnZpdGVkIHlvdSB0byBvdXIgd2VkZGluZyBpbiBNZXhpY28hIFRoZXJl4oCZcyBhbHNvIGFcbiAgICAgIGdvb2QgY2hhbmNlIHRoYXQgeW914oCZZCBsb3ZlIHRvIGNvbWUsIGJ1dCBhcmUgdW5hYmxlIHRvIG1ha2UgaXQgd29yayBkdWUgdG9cbiAgICAgIGNvc3Qgb3IgdGltZSBjb25zdHJhaW50cyBvciBhbnkgb3RoZXIgcmVhc29uLCBhbmQgd2UgdW5kZXJzdGFuZCB0aGF0IGFuZFxuICAgICAgd2lsbCBiZSBzZW5kaW5nIGluZm9ybWF0aW9uIG91dCB0byBldmVyeW9uZSBmb3IgYSBDZXJlbW9ueSBhbmQgRGFuY2Ugd2XigJlsbFxuICAgICAgYmUgaGF2aW5nIGF0IGhvbWUgZm9yIHRob3NlIG9mIHlvdSB0aGF0IGNhbuKAmXQgbWFrZSBpdCB0byBNZXhpY28sIGJlY2F1c2VcbiAgICAgIHdlIGxvdmUgeW91IGFsbCFcbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtdGhyZWUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgICB9XG4gICAgICAuc3VidGl0bGUtdGhyZWUge1xuICAgICAgICBmb250LWZhbWlseTogTGF0b0hhaXJMaW5lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgICAgICAudGl0bGUtdGhyZWUge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc3VidGl0bGUtdGhyZWUge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICAgIC50aXRsZS10aHJlZSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJ0aXRsZS10aHJlZToge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuY29uc3QgcmlnaHRFbGVtZW50ID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkb2xwaGluXCIgLz5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJzZWUtZGF0ZS1idXR0b24tY29udGFpbmVyXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ3doZW4tc2VjdGlvbicpXG4gICAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdlbmQnLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ1dHRvbiBzZWNvbmRhcnktYnV0dG9uIHNlZS1kYXRlLWJ1dHRvblwiPlxuICAgICAgICBXaGVuICYgV2hlcmVcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5kb2xwaGluIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1hZ2VzL2RvbHBoaW4uc3ZnKTtcbiAgICAgICAgd2lkdGg6IDMwcmVtO1xuICAgICAgICBoZWlnaHQ6IDMwcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1kYXRlLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgIH1cbiAgICAgIC5zZWUtZGF0ZS1idXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmNmZmO1xuICAgICAgICBjb2xvcjogIzQ0YmVlMDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBJbmZvU2VjdGlvbiA9IHByb3BzID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxTcGxpdExheW91dFxuICAgICAgaWQ9XCJpbmZvLXNlY3Rpb25cIlxuICAgICAgYmFja2dyb3VuZENvbG9yPVwiIzQ0QkVFMFwiXG4gICAgICBsZWZ0RWxlbWVudD17bGVmdEVsZW1lbnR9XG4gICAgICByaWdodEVsZW1lbnQ9e3JpZ2h0RWxlbWVudH1cbiAgICAgIGhlaWdodD17cHJvcHMuaGVpZ2h0fVxuICAgIC8+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/InfoSection.js */"));
var rightElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2675084800" + " " + "dolphin"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  onClick: function onClick() {
    document.getElementById('when-section').scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    });
  },
  className: "jsx-2675084800" + " " + "see-date-button-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2675084800" + " " + "main-button secondary-button see-date-button"
}, "When & Where")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2675084800"
}, ".dolphin.jsx-2675084800{background-image:url(/static/images/dolphin.svg);width:30rem;height:30rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:2rem;margin-top:4rem;}.see-date-button.jsx-2675084800{width:320px;}.see-date-button.jsx-2675084800:hover{background-color:#e5f6ff;color:#44bee0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0luZm9TZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1FZ0IsQUFHMEQsQUFVckMsQUFHYSxZQUYzQixhQUdnQixjQUNoQixVQWRjLFlBQ0MsYUFDUyxzQkFDTCxpQkFDQyxrQkFDQyxtQkFDSCxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvSmFwaFdlZGRpbmdTaXRlL2NvbXBvbmVudHMvSW5mb1NlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBTcGxpdExheW91dCBmcm9tICcuL2xheW91dC9TcGxpdExheW91dCdcblxuY29uc3QgbGVmdEVsZW1lbnQgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtdGhyZWVcIj5JbmZvPC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlLXRocmVlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0LWxldHRlclwiPklmPC9kaXY+IHlvdeKAmXZlIG1hZGUgaXQgdGhpcyBmYXIsIHRoZXJl4oCZcyBhXG4gICAgICBnb29kIGNoYW5jZSB3ZeKAmXZlIGludml0ZWQgeW91IHRvIG91ciB3ZWRkaW5nIGluIE1leGljbyEgVGhlcmXigJlzIGFsc28gYVxuICAgICAgZ29vZCBjaGFuY2UgdGhhdCB5b3XigJlkIGxvdmUgdG8gY29tZSwgYnV0IGFyZSB1bmFibGUgdG8gbWFrZSBpdCB3b3JrIGR1ZSB0b1xuICAgICAgY29zdCBvciB0aW1lIGNvbnN0cmFpbnRzIG9yIGFueSBvdGhlciByZWFzb24sIGFuZCB3ZSB1bmRlcnN0YW5kIHRoYXQgYW5kXG4gICAgICB3aWxsIGJlIHNlbmRpbmcgaW5mb3JtYXRpb24gb3V0IHRvIGV2ZXJ5b25lIGZvciBhIENlcmVtb255IGFuZCBEYW5jZSB3ZeKAmWxsXG4gICAgICBiZSBoYXZpbmcgYXQgaG9tZSBmb3IgdGhvc2Ugb2YgeW91IHRoYXQgY2Fu4oCZdCBtYWtlIGl0IHRvIE1leGljbywgYmVjYXVzZVxuICAgICAgd2UgbG92ZSB5b3UgYWxsIVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS10aHJlZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHJlbTtcbiAgICAgIH1cbiAgICAgIC5zdWJ0aXRsZS10aHJlZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIC50aXRsZS10aHJlZSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJ0aXRsZS10aHJlZSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgLnRpdGxlLXRocmVlIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN1YnRpdGxlLXRocmVlOiB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5jb25zdCByaWdodEVsZW1lbnQgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbHBoaW5cIiAvPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInNlZS1kYXRlLWJ1dHRvbi1jb250YWluZXJcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgnd2hlbi1zZWN0aW9uJylcbiAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ2VuZCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uIHNlY29uZGFyeS1idXR0b24gc2VlLWRhdGUtYnV0dG9uXCI+XG4gICAgICAgIFdoZW4gJiBXaGVyZVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRvbHBoaW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvZG9scGhpbi5zdmcpO1xuICAgICAgICB3aWR0aDogMzByZW07XG4gICAgICAgIGhlaWdodDogMzByZW07XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICB9XG4gICAgICAuc2VlLWRhdGUtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgfVxuICAgICAgLnNlZS1kYXRlLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY2ZmY7XG4gICAgICAgIGNvbG9yOiAjNDRiZWUwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuZXhwb3J0IGNvbnN0IEluZm9TZWN0aW9uID0gcHJvcHMgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPFNwbGl0TGF5b3V0XG4gICAgICBpZD1cImluZm8tc2VjdGlvblwiXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjNDRCRUUwXCJcbiAgICAgIGxlZnRFbGVtZW50PXtsZWZ0RWxlbWVudH1cbiAgICAgIHJpZ2h0RWxlbWVudD17cmlnaHRFbGVtZW50fVxuICAgICAgaGVpZ2h0PXtwcm9wcy5oZWlnaHR9XG4gICAgLz5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/InfoSection.js */"));
var InfoSection = function InfoSection(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout_SplitLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "info-section",
    backgroundColor: "#44BEE0",
    leftElement: leftElement,
    rightElement: rightElement,
    height: props.height
  }));
};

/***/ }),

/***/ "./components/IntroSection.js":
/*!************************************!*\
  !*** ./components/IntroSection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var IntroSection = function IntroSection(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      height: props.height
    },
    className: "jsx-3276990307" + " " + "section section-one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3276990307" + " " + "content-container content-container-one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3276990307" + " " + "abs"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3276990307" + " " + "title-one"
  }, "Raph & Jeff"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3276990307" + " " + "title subtitle-one"
  }, "Mexico 2020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: function onClick() {
      document.getElementById('photo-section').scrollIntoView({
        block: 'end',
        behavior: 'smooth'
      });
      setTimeout(function () {
        document.getElementById('info-section').scrollIntoView({
          block: 'end',
          behavior: 'smooth'
        });
      }, 1000);
    },
    className: "jsx-3276990307" + " " + "see-info-button-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3276990307" + " " + "main-button"
  }, "See Info"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3276990307"
  }, ".section-one.jsx-3276990307{background-image:url(/static/images/MainPage.gif);background-size:cover;background-repeat:repeat-none;background-position:center center;}.content-container-one.jsx-3276990307{background:rgba(110,104,148,0.9);}.title-one.jsx-3276990307{font-size:5rem;color:#c2d2f5;font-family:LatoHairLine;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;padding-bottom:2rem;min-width:21rem;}.subtitle-one.jsx-3276990307{color:#c2d2f5;font-size:3rem !important;}.title.jsx-3276990307{font-size:3rem;font-family:LatoHairLine;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;padding-bottom:2rem;}.see-info-button-container.jsx-3276990307{position:absolute;width:100%;text-align:center;bottom:150px;}@media (max-width:700px){.title-one.jsx-3276990307{font-size:3rem;}.title.jsx-3276990307{font-size:1rem;}.see-info-button-container.jsx-3276990307{bottom:4rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0ludHJvU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmdCLEFBRzJELEFBTWQsQUFHckIsQUFVRCxBQUlDLEFBUUcsQUFPRCxBQUdBLEFBR0gsWUFDZCxFQXpCMEIsQ0FWWixBQWNXLEFBZXpCLEFBR0EsR0FWVyxXQXJCYyxBQXNCUCxJQTFCcEIsT0FjQSxBQUkyQixPQVNaLEdBakNTLElBV0csTUF1QjNCLEtBVGtCLE9BeEJjLE9BV2QsRUFjRyxjQWJBLE9BWGUsa0NBQ3BDLHNDQXdCc0IsY0FiQSxNQWN0QixjQWJrQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvSmFwaFdlZGRpbmdTaXRlL2NvbXBvbmVudHMvSW50cm9TZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSW50cm9TZWN0aW9uID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi1vbmVcIiBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLmhlaWdodCB9fT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyIGNvbnRlbnQtY29udGFpbmVyLW9uZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1vbmVcIj5SYXBoICYgSmVmZjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHN1YnRpdGxlLW9uZVwiPk1leGljbyAyMDIwPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwic2VlLWluZm8tYnV0dG9uLWNvbnRhaW5lclwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKCdwaG90by1zZWN0aW9uJylcbiAgICAgICAgICAgIC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnZW5kJywgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tc2VjdGlvbicpXG4gICAgICAgICAgICAgIC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnZW5kJywgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ1dHRvblwiPlNlZSBJbmZvPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc2VjdGlvbi1vbmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvTWFpblBhZ2UuZ2lmKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC1ub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgfVxuICAgICAgLmNvbnRlbnQtY29udGFpbmVyLW9uZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTEwLCAxMDQsIDE0OCwgMC45KTtcbiAgICAgIH1cbiAgICAgIC50aXRsZS1vbmUge1xuICAgICAgICBmb250LXNpemU6IDVyZW07XG4gICAgICAgIGNvbG9yOiAjYzJkMmY1O1xuICAgICAgICBmb250LWZhbWlseTogTGF0b0hhaXJMaW5lO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAyMXJlbTtcbiAgICAgIH1cbiAgICAgIC5zdWJ0aXRsZS1vbmUge1xuICAgICAgICBjb2xvcjogI2MyZDJmNTtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1pbmZvLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvdHRvbTogMTUwcHg7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgLnRpdGxlLW9uZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zZWUtaW5mby1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICBib3R0b206IDRyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbnRyb1NlY3Rpb25cbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/IntroSection.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IntroSection);

/***/ }),

/***/ "./components/PhotoSection.js":
/*!************************************!*\
  !*** ./components/PhotoSection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var PhotoSection = function PhotoSection(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      height: props.height
    },
    id: "photo-section",
    className: "jsx-397718797" + " " + "section-two"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-397718797" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-397718797" + " " + "imageGrid"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-397718797" + " " + "tile tile1"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-397718797" + " " + "tile tile2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-397718797" + " " + "tile tile3"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-397718797" + " " + "tile tile4"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-397718797" + " " + "tile tile5"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-397718797" + " " + "tile tile6"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-397718797" + " " + "tile tile7"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-397718797" + " " + "tile tile8"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-397718797" + " " + "tile tile9"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-397718797" + " " + "tile tile10"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-397718797" + " " + "tile tile11"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-397718797" + " " + "tile tile12"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "397718797"
  }, ".imageGrid.jsx-397718797{line-height:0;}.imageGrid.jsx-397718797 .tile.jsx-397718797{width:33.33%;min-height:calc(100vh / 4);display:inline-block;background-size:cover;background-position:center center;background-repeat:no-repeat;overflow:hidden;position:relative;cursor:pointer;cursor:hand;}.tile1.jsx-397718797{background-image:url('http://bit.ly/2P0xBZE');}.tile2.jsx-397718797{background-image:url('http://bit.ly/2UHd55z');}.tile3.jsx-397718797{background-image:url('http://bit.ly/2Kk5fLj');}.tile4.jsx-397718797{background-image:url('http://bit.ly/2CZ1eGb');}.tile5.jsx-397718797{background-image:url('https://bit.ly/2ImJpEA');}.tile6.jsx-397718797{background-image:url('https://bit.ly/2uWJCX8');}.tile7.jsx-397718797{background-image:url('http://bit.ly/2P131ix');}.tile8.jsx-397718797{background-image:url('https://bit.ly/2IiLdhG');}.tile9.jsx-397718797{background-image:url('http://bit.ly/2uSDhMa');}.tile10.jsx-397718797{background-image:url('http://bit.ly/2I89bwY');}.tile11.jsx-397718797{background-image:url('http://bit.ly/2VtwrIQ');}.tile12.jsx-397718797{background-image:url('http://bit.ly/2Z2GuXB');background-position-y:100% !important;}@media (max-width:1000px){.imageGrid.jsx-397718797 .tile.jsx-397718797{width:50%;}}@media (max-width:700px){.imageGrid.jsx-397718797 .tile.jsx-397718797{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1Bob3RvU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmdCLEFBR3VCLEFBR0QsQUFjaUMsQUFHQSxBQUdBLEFBR0EsQUFHQyxBQUdBLEFBR0QsQUFHQyxBQUdELEFBR0EsQUFHQSxBQUdBLEFBTWxDLEFBTUMsVUFMYixDQU1BLEVBM0QyQixDQUg3QiwwQkFJdUIsTUFhdkIsQUFHQSxBQUdBLEFBR0EsQUFTQSxBQU1BLEFBR0EsQUFHQSxBQUd3QyxDQXJCeEMsQUFHQSxBQU1BLGNBakN3QixzQkFDWSxDQTZDcEMsaUNBNUM4Qiw0QkFDWixnQkFDRSxrQkFFSCxlQUNILFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvSmFwaFdlZGRpbmdTaXRlL2NvbXBvbmVudHMvUGhvdG9TZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGhvdG9TZWN0aW9uID0gcHJvcHMgPT4gKFxuICA8ZGl2XG4gICAgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5oZWlnaHQgfX1cbiAgICBpZD1cInBob3RvLXNlY3Rpb25cIlxuICAgIGNsYXNzTmFtZT1cInNlY3Rpb24tdHdvXCJcbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlR3JpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTFcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTJcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTNcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTRcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTVcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTZcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTdcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZThcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTlcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTEwXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlIHRpbGUxMVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsZSB0aWxlMTJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmltYWdlR3JpZCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgfVxuICAgICAgLmltYWdlR3JpZCAudGlsZSB7XG4gICAgICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLyA0KTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjdXJzb3I6IGhhbmQ7XG4gICAgICB9XG5cbiAgICAgIC50aWxlMSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2JpdC5seS8yUDB4QlpFJyk7XG4gICAgICB9XG4gICAgICAudGlsZTIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9iaXQubHkvMlVIZDU1eicpO1xuICAgICAgfVxuICAgICAgLnRpbGUzIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vYml0Lmx5LzJLazVmTGonKTtcbiAgICAgIH1cbiAgICAgIC50aWxlNCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2JpdC5seS8yQ1oxZUdiJyk7XG4gICAgICB9XG4gICAgICAudGlsZTUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vYml0Lmx5LzJJbUpwRUEnKTtcbiAgICAgIH1cbiAgICAgIC50aWxlNiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9iaXQubHkvMnVXSkNYOCcpO1xuICAgICAgfVxuICAgICAgLnRpbGU3IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vYml0Lmx5LzJQMTMxaXgnKTtcbiAgICAgIH1cbiAgICAgIC50aWxlOCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9iaXQubHkvMklpTGRoRycpO1xuICAgICAgfVxuICAgICAgLnRpbGU5IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vYml0Lmx5LzJ1U0RoTWEnKTtcbiAgICAgIH1cbiAgICAgIC50aWxlMTAge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9iaXQubHkvMkk4OWJ3WScpO1xuICAgICAgfVxuICAgICAgLnRpbGUxMSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2JpdC5seS8yVnR3cklRJyk7XG4gICAgICB9XG4gICAgICAudGlsZTEyIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vYml0Lmx5LzJaMkd1WEInKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgLmltYWdlR3JpZCAudGlsZSB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgLmltYWdlR3JpZCAudGlsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQaG90b1NlY3Rpb25cbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/PhotoSection.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (PhotoSection);

/***/ }),

/***/ "./components/WhenSection.js":
/*!***********************************!*\
  !*** ./components/WhenSection.js ***!
  \***********************************/
/*! exports provided: WhenSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhenSection", function() { return WhenSection; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_SplitLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/SplitLayout */ "./components/layout/SplitLayout.js");



var leftElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4179643353" + " " + "cake"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4179643353" + " " + "main-button secondary-button see-marival-button"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://www.marival.com/",
  target: "_blank",
  className: "jsx-4179643353"
}, "Marival")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4179643353" + " " + "marival-details"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4179643353" + " " + "trip-dates"
}, "May 23rd \u2013 May 30th, 2020"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4179643353" + " " + "wedding-day-title"
}, "Wedding Day"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4179643353" + " " + "trip-dates wedding-date"
}, "May 25th, 2020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4179643353"
}, ".cake.jsx-4179643353{background-image:url(/static/images/cake.svg);width:20rem;height:20rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:1rem;margin-top:2rem;}.see-marival-button.jsx-4179643353{margin-top:1rem;}.see-marival-button.jsx-4179643353:hover{background-color:#e5f6ff;color:#e4c39a;}.marival-details.jsx-4179643353{font-family:LatoHairLine;color:white;font-size:2.4rem;text-align:center;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:800;}.trip-dates.jsx-4179643353{margin-top:1rem;}.wedding-day-title.jsx-4179643353{font-family:WestburySignature;margin-top:1rem;font-size:4rem;color:white;}.wedding-day.jsx-4179643353{color:white;weight:800;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1doZW5TZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFHdUQsQUFVOUIsQUFHUyxBQUlBLEFBUVQsQUFHYyxBQU1sQixZQUNELElBeEJiLEFBZUEsT0FVQSxFQXRCZ0IsQUFJRixLQVdJLE9BVkMsRUFKbkIsT0FkYyxBQTZCRyxRQVZHLElBbEJMLEdBNkJELFVBNUJVLENBa0JILENBV3JCLG9CQTVCbUIsaUJBQ0Msa0JBQ0MsbUJBQ0gsZ0JBQ2xCLEVBY2tCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9KYXBoV2VkZGluZ1NpdGUvY29tcG9uZW50cy9XaGVuU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNwbGl0TGF5b3V0IGZyb20gJy4vbGF5b3V0L1NwbGl0TGF5b3V0J1xuXG5jb25zdCBsZWZ0RWxlbWVudCA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FrZVwiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ1dHRvbiBzZWNvbmRhcnktYnV0dG9uIHNlZS1tYXJpdmFsLWJ1dHRvblwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcml2YWwuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICBNYXJpdmFsXG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXJpdmFsLWRldGFpbHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpcC1kYXRlc1wiPk1heSAyM3JkIOKAkyBNYXkgMzB0aCwgMjAyMDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWRkaW5nLWRheS10aXRsZVwiPldlZGRpbmcgRGF5PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaXAtZGF0ZXMgd2VkZGluZy1kYXRlXCI+TWF5IDI1dGgsIDIwMjA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2FrZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltYWdlcy9jYWtlLnN2Zyk7XG4gICAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5zZWUtbWFyaXZhbC1idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1tYXJpdmFsLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY2ZmY7XG4gICAgICAgIGNvbG9yOiAjZTRjMzlhO1xuICAgICAgfVxuICAgICAgLm1hcml2YWwtZGV0YWlscyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIH1cbiAgICAgIC50cmlwLWRhdGVzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIH1cbiAgICAgIC53ZWRkaW5nLWRheS10aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBXZXN0YnVyeVNpZ25hdHVyZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAud2VkZGluZy1kYXkge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdlaWdodDogODAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuY29uc3QgcmlnaHRFbGVtZW50ID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlLWZvdXJcIj5XaGVuICYgV2hlcmU8L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGUtZm91clwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1sZXR0ZXJcIj5Gb3I8L2Rpdj4gdGhvc2Ugb2YgeW91IHRoYXQgYXJlIGFibGUgdG9cbiAgICAgIGNvbWUsIHdlIGhhdmUgb3JnYW5pemVkIG91ciB3ZWRkaW5nIGF0IHRoZSBNYXJpdmFsIGluIE51ZXZvIFZhbGxhcnRhLCBqdXN0XG4gICAgICBvdXRzaWRlIG9mIFB1ZXJ0byBWYWxsYXJ0YS5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgcGFja2FnZSB3ZeKAmXZlIG9yZ2FuaXplZCBjb3N0cyBqdXN0IHVuZGVyeycgJ31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1sZXR0ZXJcIj4kMTYwMDwvZGl2PiwgYW5kIGluY2x1ZGVzOlxuICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5hbGwgaW5jbHVzaXZlIDcgZGF5IHN0YXk8L2xpPlxuICAgICAgICAgICAgPGxpPmFpcmZhcmU8L2xpPlxuICAgICAgICAgICAgPGxpPmFpcnBvcnQgc2h1dHRsZXM8L2xpPlxuICAgICAgICAgICAgPGxpPm9uZSBjaGVja2VkIGJhZzwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3A+XG4gICAgICBDaGVjayBvdXQgb3VyIGRldGFpbGVkIGJyZWFrZG93biBvZiB0aGUgY29zdHMgaW52b2x2ZWQsIGFzIHdlbGwgYXMgZGVwb3NpdFxuICAgICAgYW1vdW50cyBhbmQgcGF5bWVudCBkYXRlcy5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwic2VlLWNvc3RzLWNvbnRhaW5lclwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKCdjb3N0cy1zZWN0aW9uJylcbiAgICAgICAgICAgIC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnc3RhcnQnLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ1dHRvbiBzZWUtY29zdHMtYnV0dG9uXCI+Q29zdHM8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1mb3VyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTByZW07XG4gICAgICB9XG4gICAgICAuc3VidGl0bGUtZm91ciB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIH1cbiAgICAgIC5zZWUtY29zdHMtYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1jb3N0cy1idXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmNmZmO1xuICAgICAgICBjb2xvcjogI2U0YzM5YTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgLnRpdGxlLWZvdXIge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN1YnRpdGxlLWZvdXIge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBXaGVuU2VjdGlvbiA9IHByb3BzID0+IChcbiAgPFNwbGl0TGF5b3V0XG4gICAgaWQ9XCJ3aGVuLXNlY3Rpb25cIlxuICAgIGJhY2tncm91bmRDb2xvcj1cIiNjYWExNmVcIlxuICAgIGxlZnRFbGVtZW50PXtsZWZ0RWxlbWVudH1cbiAgICByaWdodEVsZW1lbnQ9e3JpZ2h0RWxlbWVudH1cbiAgICBoZWlnaHQ9e3Byb3BzLmhlaWdodH1cbiAgLz5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/WhenSection.js */"));
var rightElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
  className: "jsx-2105305869" + " " + "title title-four"
}, "When & Where"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2105305869" + " " + "subtitle-four"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2105305869" + " " + "first-letter"
}, "For"), " those of you that are able to come, we have organized our wedding at the Marival in Nuevo Vallarta, just outside of Puerto Vallarta.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-2105305869"
}, "The package we\u2019ve organized costs just under", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2105305869" + " " + "first-letter"
}, "$1600"), ", and includes:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  dir: "rtl",
  className: "jsx-2105305869"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
  className: "jsx-2105305869"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-2105305869"
}, "all inclusive 7 day stay"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-2105305869"
}, "airfare"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-2105305869"
}, "airport shuttles"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-2105305869"
}, "one checked bag")))), "Check out our detailed breakdown of the costs involved, as well as deposit amounts and payment dates.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  onClick: function onClick() {
    document.getElementById('costs-section').scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  },
  className: "jsx-2105305869" + " " + "see-costs-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2105305869" + " " + "main-button see-costs-button"
}, "Costs"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2105305869"
}, ".title-four.jsx-2105305869{color:white;text-align:right;padding-right:10rem;}.subtitle-four.jsx-2105305869{font-family:LatoHairLine;color:white;font-size:2.4rem;text-align:right;padding-right:10rem;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:800;}.see-costs-button.jsx-2105305869{color:white;font-size:2rem;border:1px solid white;margin-top:2rem;}.see-costs-button.jsx-2105305869:hover{background-color:#e5f6ff;color:#e4c39a;}@media (max-width:1200px){.title-four.jsx-2105305869{padding-right:2rem;}.subtitle-four.jsx-2105305869{padding-right:2rem;font-size:1.6rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1doZW5TZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGZ0IsQUFHcUIsQUFLYSxBQVNiLEFBTWEsQUFLSixBQUdBLFlBM0JKLEFBY0YsT0FXZixBQUdtQixNQXZCUCxBQWVFLEVBTFMsRUFkSCxPQTRCcEIsQ0F2QmlCLEVBZW5CLFVBbkJBLENBY2tCLElBVEMsWUFVbkIsS0FUc0Isb0JBQ0QsNkZBQ0gsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1doZW5TZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU3BsaXRMYXlvdXQgZnJvbSAnLi9sYXlvdXQvU3BsaXRMYXlvdXQnXG5cbmNvbnN0IGxlZnRFbGVtZW50ID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYWtlXCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uIHNlY29uZGFyeS1idXR0b24gc2VlLW1hcml2YWwtYnV0dG9uXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFyaXZhbC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIE1hcml2YWxcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcml2YWwtZGV0YWlsc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlwLWRhdGVzXCI+TWF5IDIzcmQg4oCTIE1heSAzMHRoLCAyMDIwPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZGRpbmctZGF5LXRpdGxlXCI+V2VkZGluZyBEYXk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpcC1kYXRlcyB3ZWRkaW5nLWRhdGVcIj5NYXkgMjV0aCwgMjAyMDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jYWtlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1hZ2VzL2Nha2Uuc3ZnKTtcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xuICAgICAgICBoZWlnaHQ6IDIwcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1tYXJpdmFsLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICB9XG4gICAgICAuc2VlLW1hcml2YWwtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjZmZjtcbiAgICAgICAgY29sb3I6ICNlNGMzOWE7XG4gICAgICB9XG4gICAgICAubWFyaXZhbC1kZXRhaWxzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgfVxuICAgICAgLnRyaXAtZGF0ZXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgfVxuICAgICAgLndlZGRpbmctZGF5LXRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFdlc3RidXJ5U2lnbmF0dXJlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC53ZWRkaW5nLWRheSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2VpZ2h0OiA4MDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5jb25zdCByaWdodEVsZW1lbnQgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtZm91clwiPldoZW4gJiBXaGVyZTwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZS1mb3VyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0LWxldHRlclwiPkZvcjwvZGl2PiB0aG9zZSBvZiB5b3UgdGhhdCBhcmUgYWJsZSB0b1xuICAgICAgY29tZSwgd2UgaGF2ZSBvcmdhbml6ZWQgb3VyIHdlZGRpbmcgYXQgdGhlIE1hcml2YWwgaW4gTnVldm8gVmFsbGFydGEsIGp1c3RcbiAgICAgIG91dHNpZGUgb2YgUHVlcnRvIFZhbGxhcnRhLlxuICAgICAgPHA+XG4gICAgICAgIFRoZSBwYWNrYWdlIHdl4oCZdmUgb3JnYW5pemVkIGNvc3RzIGp1c3QgdW5kZXJ7JyAnfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0LWxldHRlclwiPiQxNjAwPC9kaXY+LCBhbmQgaW5jbHVkZXM6XG4gICAgICAgIDxkaXYgZGlyPVwicnRsXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPmFsbCBpbmNsdXNpdmUgNyBkYXkgc3RheTwvbGk+XG4gICAgICAgICAgICA8bGk+YWlyZmFyZTwvbGk+XG4gICAgICAgICAgICA8bGk+YWlycG9ydCBzaHV0dGxlczwvbGk+XG4gICAgICAgICAgICA8bGk+b25lIGNoZWNrZWQgYmFnPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcD5cbiAgICAgIENoZWNrIG91dCBvdXIgZGV0YWlsZWQgYnJlYWtkb3duIG9mIHRoZSBjb3N0cyBpbnZvbHZlZCwgYXMgd2VsbCBhcyBkZXBvc2l0XG4gICAgICBhbW91bnRzIGFuZCBwYXltZW50IGRhdGVzLlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJzZWUtY29zdHMtY29udGFpbmVyXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2Nvc3RzLXNlY3Rpb24nKVxuICAgICAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdzdGFydCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uIHNlZS1jb3N0cy1idXR0b25cIj5Db3N0czwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLWZvdXIge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbiAgICAgIH1cbiAgICAgIC5zdWJ0aXRsZS1mb3VyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgfVxuICAgICAgLnNlZS1jb3N0cy1idXR0b24ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICB9XG4gICAgICAuc2VlLWNvc3RzLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY2ZmY7XG4gICAgICAgIGNvbG9yOiAjZTRjMzlhO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgICAgICAudGl0bGUtZm91ciB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc3VidGl0bGUtZm91ciB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuZXhwb3J0IGNvbnN0IFdoZW5TZWN0aW9uID0gcHJvcHMgPT4gKFxuICA8U3BsaXRMYXlvdXRcbiAgICBpZD1cIndoZW4tc2VjdGlvblwiXG4gICAgYmFja2dyb3VuZENvbG9yPVwiI2NhYTE2ZVwiXG4gICAgbGVmdEVsZW1lbnQ9e2xlZnRFbGVtZW50fVxuICAgIHJpZ2h0RWxlbWVudD17cmlnaHRFbGVtZW50fVxuICAgIGhlaWdodD17cHJvcHMuaGVpZ2h0fVxuICAvPlxuKVxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/WhenSection.js */"));
var WhenSection = function WhenSection(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout_SplitLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "when-section",
    backgroundColor: "#caa16e",
    leftElement: leftElement,
    rightElement: rightElement,
    height: props.height
  });
};

/***/ }),

/***/ "./components/layout/MobileLayout.js":
/*!*******************************************!*\
  !*** ./components/layout/MobileLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var MobileLayout = function MobileLayout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: props.id,
    style: {
      backgroundColor: props.backgroundColor,
      height: props.height
    },
    className: "jsx-4134238580" + " " + "section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4134238580" + " " + "mobile-content-container abs"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4134238580" + " " + "wrapper"
  }, props.content)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4134238580"
  }, ".mobile-content-container.jsx-4134238580{height:100%;padding-left:5%;padding-right:5%;}.wrapper.jsx-4134238580{min-width:34rem;padding-top:3%;margin-left:auto;margin-right:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL2xheW91dC9Nb2JpbGVMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2dCLEFBR3FCLEFBS0ksWUFKQSxJQUtELFlBSkUsR0FLQSxjQUpuQixHQUtvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvSmFwaFdlZGRpbmdTaXRlL2NvbXBvbmVudHMvbGF5b3V0L01vYmlsZUxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1vYmlsZUxheW91dCA9IHByb3BzID0+IChcbiAgPGRpdlxuICAgIGlkPXtwcm9wcy5pZH1cbiAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmJhY2tncm91bmRDb2xvciwgaGVpZ2h0OiBwcm9wcy5oZWlnaHQgfX1cbiAgICBjbGFzc05hbWU9XCJzZWN0aW9uXCJcbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLWNvbnRlbnQtY29udGFpbmVyIGFic1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+e3Byb3BzLmNvbnRlbnR9PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLm1vYmlsZS1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgICB9XG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIG1pbi13aWR0aDogMzRyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAzJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/layout/MobileLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileLayout);

/***/ }),

/***/ "./components/layout/SplitLayout.js":
/*!******************************************!*\
  !*** ./components/layout/SplitLayout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var SplitLayout = function SplitLayout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: props.id,
    style: {
      backgroundColor: props.backgroundColor,
      height: props.height
    },
    className: "jsx-1408020112" + " " + "section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1408020112" + " " + "main-content-container abs"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1408020112" + " " + "split-wrapper left-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1408020112" + " " + "split-content-container abs"
  }, props.leftElement)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1408020112" + " " + "split-wrapper right-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1408020112" + " " + "split-content-container abs"
  }, props.rightElement))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1408020112"
  }, ".main-content-container.jsx-1408020112{min-width:90rem;max-height:80rem;}.split-wrapper.jsx-1408020112{width:50%;height:100%;position:relative;}.left-container.jsx-1408020112{float:left;}.right-container.jsx-1408020112{float:right;}.split-content-container.jsx-1408020112{width:100%;}@media (max-width:1200px){.main-content-container.jsx-1408020112{min-width:60rem;}}@media (max-width:950px){.main-content-container.jsx-1408020112{min-width:60rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL2xheW91dC9TcGxpdExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjZ0IsQUFHeUIsQUFJTixBQUtDLEFBR0MsQUFHRCxBQUlPLEFBS0EsVUFuQk4sQ0FLZCxBQU1BLENBSEEsSUFabUIsQUFtQmpCLEFBS0EsTUFuQmtCLFdBSnBCLE9BS0EiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvSmFwaFdlZGRpbmdTaXRlL2NvbXBvbmVudHMvbGF5b3V0L1NwbGl0TGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3BsaXRMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9XCJzZWN0aW9uXCJcbiAgICBpZD17cHJvcHMuaWR9XG4gICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3IsIGhlaWdodDogcHJvcHMuaGVpZ2h0IH19XG4gID5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudC1jb250YWluZXIgYWJzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwbGl0LXdyYXBwZXIgbGVmdC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1jb250ZW50LWNvbnRhaW5lciBhYnNcIj57cHJvcHMubGVmdEVsZW1lbnR9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtd3JhcHBlciByaWdodC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1jb250ZW50LWNvbnRhaW5lciBhYnNcIj57cHJvcHMucmlnaHRFbGVtZW50fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLm1haW4tY29udGVudC1jb250YWluZXIge1xuICAgICAgICBtaW4td2lkdGg6IDkwcmVtO1xuICAgICAgICBtYXgtaGVpZ2h0OiA4MHJlbTtcbiAgICAgIH1cbiAgICAgIC5zcGxpdC13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAubGVmdC1jb250YWluZXIge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICAgIC5yaWdodC1jb250YWluZXIge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gICAgICAuc3BsaXQtY29udGVudC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgLm1haW4tY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgIG1pbi13aWR0aDogNjByZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAgICAgICAubWFpbi1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLXdpZHRoOiA2MHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFNwbGl0TGF5b3V0XG4iXX0= */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/layout/SplitLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SplitLayout);

/***/ }),

/***/ "./components/mobile/CostsSectionMobile.js":
/*!*************************************************!*\
  !*** ./components/mobile/CostsSectionMobile.js ***!
  \*************************************************/
/*! exports provided: CostsSectionMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostsSectionMobile", function() { return CostsSectionMobile; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var CostsSectionMobile = function CostsSectionMobile(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "costs-section",
    style: {
      height: props.height + 160
    },
    className: "jsx-88348165" + " " + "section section-five"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "costs-wrapper abs"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "costs-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "title title-five"
  }, "Booking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "title dates-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "required"
  }, "$500 USD deposit is required"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "cost-date"
  }, "September 3rd, 2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "required"
  }, "The full amount is due"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "cost-date"
  }, "March 4th, 2020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "title title-five-two"
  }, "Total Cost"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "sub-container-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "sub-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "subtitle-five"
  }, "Leaving From Kelowna"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "title left-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "total-cost-item left-item"
  }, "Adult"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "total-cost-item left-item"
  }, "Ages 7-12"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "total-cost-item left-item"
  }, "Ages 2-6")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "title right-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "total-cost-item right-item"
  }, "$1544.35"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "total-cost-item right-item"
  }, "$1196.07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "total-cost-item right-item"
  }, "$887.54"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "sub-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "subtitle-five"
  }, "Leaving From Vancouver"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "title left-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "total-cost-item left-item"
  }, "Adult"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "total-cost-item left-item"
  }, "Ages 7-12"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "total-cost-item left-item"
  }, "Ages 2-6")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "title right-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "total-cost-item right-item"
  }, "$1559.35"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "total-cost-item right-item"
  }, "$1206.07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "total-cost-item right-item"
  }, "$897.54")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "title final-note"
  }, "All rates include round trip airfare, round trip airport transfers, 7 nights all-inclusive accommodation, one checked bag per person and seat selection with the group towards the rear of the aircraft."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "title final-note"
  }, "This pricing is Guaranteed for the first 20 people who pay the deposit, and prices beyond those first 20 should still be very close to these rates, but are not guaranteed"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "title final-note"
  }, "Bookings can be done through our travel agent Holly Graves at"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-88348165" + " " + "final-email"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:holly.graves@flightcentre.ca",
    className: "jsx-88348165"
  }, "holly.graves@flightcentre.ca")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "88348165"
  }, ".section-five.jsx-88348165{background:rgba(110,104,148,0.9);}.costs-wrapper.jsx-88348165{min-width:30rem;}.costs-container.jsx-88348165{position:relative;}.dates-container.jsx-88348165{font-size:1.4rem;color:#c2d2f5;font-family:LatoHairLine;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;}.title-five.jsx-88348165{margin-bottom:0.5rem;text-align:center;font-size:1.6rem;}.title-five-two.jsx-88348165{margin-bottom:0.5rem;font-size:1.6rem;}.left-container.jsx-88348165{width:50%;float:left;text-align:right;font-size:1.8rem;}.left-item.jsx-88348165{margin-left:auto;margin-right:1rem;}.cost-date.jsx-88348165{font-family:Laila,serif;margin-bottom:1rem;}.right-container.jsx-88348165{width:50%;float:left;text-align:left;font-family:Laila;font-size:1.4rem;}.right-item.jsx-88348165{margin-left:2rem;}.subtitle-five.jsx-88348165{font-size:1.2rem;font-family:Laila,serif;color:white;text-transform:uppercase;color:#c2d2f5;}.sub-container-wrapper.jsx-88348165{margin-bottom:8rem;}.final-note.jsx-88348165{max-width:34rem;font-family:Laila;font-size:1.2rem;margin-left:auto;margin-right:auto;margin-bottom:1rem;clear:both;}.final-email.jsx-88348165{font-family:Laila,serif;font-size:1.2rem;color:white;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9Db3N0c1NlY3Rpb25Nb2JpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0VnQixBQUc2QyxBQUdwQixBQUdFLEFBR0QsQUFRSSxBQUtBLEFBSVgsQUFNTyxBQUlRLEFBSWYsQUFPTyxBQUdBLEFBT0UsQUFHSCxBQVNTLFVBMUNkLEFBY0EsTUFyQ2IsQUF5RG9CLENBbkRKLEFBdUJJLEFBZXBCLEFBRzJCLENBNUMzQixDQW1EQSxFQXhDb0IsQUFLRCxBQUtBLEFBY0QsR0FMRyxBQWlDRixPQTNEUSxFQVYzQixDQTZEbUIsQ0E1Qm5CLEVBU29CLENBbkJwQixBQUttQixDQVZBLEVBaUNMLEFBbUJBLEVBakNkLFFBeUJtQixFQVZRLEFBbUJBLEVBMUMzQixBQWNtQixDQWhDUSxBQVEzQixZQTRDb0IsSUFuQnBCLE1BU2dCLEFBbUJFLEdBNURBLEtBb0RHLE1BVnJCLEVBbUJxQixHQTVEQSxRQW9EUixXQUNiLHVFQVFBLEdBNURBIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9Db3N0c1NlY3Rpb25Nb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ29zdHNTZWN0aW9uTW9iaWxlID0gcHJvcHMgPT4gKFxuICA8ZGl2XG4gICAgaWQ9XCJjb3N0cy1zZWN0aW9uXCJcbiAgICBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tZml2ZVwiXG4gICAgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5oZWlnaHQgKyAxNjAgfX1cbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdHMtd3JhcHBlciBhYnNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtZml2ZVwiPkJvb2tpbmc8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBkYXRlcy1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+JDUwMCBVU0QgZGVwb3NpdCBpcyByZXF1aXJlZDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdC1kYXRlXCI+U2VwdGVtYmVyIDNyZCwgMjAxOTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWlyZWRcIj5UaGUgZnVsbCBhbW91bnQgaXMgZHVlPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3N0LWRhdGVcIj5NYXJjaCA0dGgsIDIwMjA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtZml2ZS10d29cIj5Ub3RhbCBDb3N0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWNvbnRhaW5lci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlLWZpdmVcIj5MZWF2aW5nIEZyb20gS2Vsb3duYTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBsZWZ0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSBsZWZ0LWl0ZW1cIj5BZHVsdDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSBsZWZ0LWl0ZW1cIj5BZ2VzIDctMTI8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbC1jb3N0LWl0ZW0gbGVmdC1pdGVtXCI+QWdlcyAyLTY8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSByaWdodC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbC1jb3N0LWl0ZW0gcmlnaHQtaXRlbVwiPiQxNTQ0LjM1PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWwtY29zdC1pdGVtIHJpZ2h0LWl0ZW1cIj4kMTE5Ni4wNzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSByaWdodC1pdGVtXCI+JDg4Ny41NDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlLWZpdmVcIj5MZWF2aW5nIEZyb20gVmFuY291dmVyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGxlZnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWwtY29zdC1pdGVtIGxlZnQtaXRlbVwiPkFkdWx0PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWwtY29zdC1pdGVtIGxlZnQtaXRlbVwiPkFnZXMgNy0xMjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSBsZWZ0LWl0ZW1cIj5BZ2VzIDItNjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHJpZ2h0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSByaWdodC1pdGVtXCI+JDE1NTkuMzU8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbC1jb3N0LWl0ZW0gcmlnaHQtaXRlbVwiPiQxMjA2LjA3PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWwtY29zdC1pdGVtIHJpZ2h0LWl0ZW1cIj4kODk3LjU0PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgZmluYWwtbm90ZVwiPlxuICAgICAgICAgIEFsbCByYXRlcyBpbmNsdWRlIHJvdW5kIHRyaXAgYWlyZmFyZSwgcm91bmQgdHJpcCBhaXJwb3J0IHRyYW5zZmVycywgN1xuICAgICAgICAgIG5pZ2h0cyBhbGwtaW5jbHVzaXZlIGFjY29tbW9kYXRpb24sIG9uZSBjaGVja2VkIGJhZyBwZXIgcGVyc29uIGFuZFxuICAgICAgICAgIHNlYXQgc2VsZWN0aW9uIHdpdGggdGhlIGdyb3VwIHRvd2FyZHMgdGhlIHJlYXIgb2YgdGhlIGFpcmNyYWZ0LlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBmaW5hbC1ub3RlXCI+XG4gICAgICAgICAgVGhpcyBwcmljaW5nIGlzIEd1YXJhbnRlZWQgZm9yIHRoZSBmaXJzdCAyMCBwZW9wbGUgd2hvIHBheSB0aGVcbiAgICAgICAgICBkZXBvc2l0LCBhbmQgcHJpY2VzIGJleW9uZCB0aG9zZSBmaXJzdCAyMCBzaG91bGQgc3RpbGwgYmUgdmVyeSBjbG9zZVxuICAgICAgICAgIHRvIHRoZXNlIHJhdGVzLCBidXQgYXJlIG5vdCBndWFyYW50ZWVkXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGZpbmFsLW5vdGVcIj5cbiAgICAgICAgICBCb29raW5ncyBjYW4gYmUgZG9uZSB0aHJvdWdoIG91ciB0cmF2ZWwgYWdlbnQgSG9sbHkgR3JhdmVzIGF0XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbmFsLWVtYWlsXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpob2xseS5ncmF2ZXNAZmxpZ2h0Y2VudHJlLmNhXCI+XG4gICAgICAgICAgICBob2xseS5ncmF2ZXNAZmxpZ2h0Y2VudHJlLmNhXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zZWN0aW9uLWZpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDExMCwgMTA0LCAxNDgsIDAuOSk7XG4gICAgICB9XG4gICAgICAuY29zdHMtd3JhcHBlciB7XG4gICAgICAgIG1pbi13aWR0aDogMzByZW07XG4gICAgICB9XG4gICAgICAuY29zdHMtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmRhdGVzLWNvbnRhaW5lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBjb2xvcjogI2MyZDJmNTtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgIH1cbiAgICAgIC50aXRsZS1maXZlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgfVxuICAgICAgLnRpdGxlLWZpdmUtdHdvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgIH1cbiAgICAgIC5sZWZ0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICB9XG4gICAgICAubGVmdC1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5jb3N0LWRhdGUge1xuICAgICAgICBmb250LWZhbWlseTogTGFpbGEsIHNlcmlmO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgfVxuICAgICAgLnJpZ2h0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LWZhbWlseTogTGFpbGE7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgfVxuICAgICAgLnJpZ2h0LWl0ZW0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5zdWJ0aXRsZS1maXZlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYWlsYSwgc2VyaWY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICNjMmQyZjU7XG4gICAgICB9XG4gICAgICAuc3ViLWNvbnRhaW5lci13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHJlbTtcbiAgICAgIH1cbiAgICAgIC5maW5hbC1ub3RlIHtcbiAgICAgICAgbWF4LXdpZHRoOiAzNHJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhaWxhO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICB9XG4gICAgICAuZmluYWwtZW1haWwge1xuICAgICAgICBmb250LWZhbWlseTogTGFpbGEsIHNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/mobile/CostsSectionMobile.js */"));
};

/***/ }),

/***/ "./components/mobile/InfoSectionMobile.js":
/*!************************************************!*\
  !*** ./components/mobile/InfoSectionMobile.js ***!
  \************************************************/
/*! exports provided: InfoSectionMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoSectionMobile", function() { return InfoSectionMobile; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_MobileLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/MobileLayout */ "./components/layout/MobileLayout.js");



var mobileContent = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2300217605" + " " + "wrapper"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2300217605" + " " + "mobile-dolphin"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2300217605" + " " + "title mobile-title"
}, "Info"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2300217605" + " " + "mobile-subtitle"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2300217605" + " " + "first-letter"
}, "If"), " you\u2019ve made it this far, there\u2019s a good chance we\u2019ve invited you to our wedding in Mexico! There\u2019s also a good chance that you\u2019d love to come, but are unable to make it work due to cost or time constraints or any other reason, and we understand that and will be sending information out to everyone for a Ceremony and Dance we\u2019ll be having at home for those of you that can\u2019t make it to Mexico, because we love you all!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  onClick: function onClick() {
    document.getElementById('when-section').scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    });
  },
  className: "jsx-2300217605" + " " + "see-date-button-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2300217605" + " " + "main-button secondary-button see-when-button"
}, "When & Where")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2300217605"
}, ".mobile-title.jsx-2300217605{color:white;text-align:center;}.mobile-subtitle.jsx-2300217605{font-family:LatoHairLine;color:white;font-size:1.4rem;text-align:center;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:400;padding-left:2rem;padding-right:2rem;}.mobile-dolphin.jsx-2300217605{background-image:url(/static/images/dolphin.svg);width:12rem;height:12rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:2rem;margin-top:20%;}.see-when-button.jsx-2300217605{margin-top:4rem;}.see-when-button.jsx-2300217605:hover{background-color:#e5f6ff;color:#44bee0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9JbmZvU2VjdGlvbk1vYmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmdCLEFBR3FCLEFBSWEsQUFVd0IsQUFVakMsQUFHUyxZQTFCUCxJQXdCcEIsU0FwQmMsQUF1QkUsS0ExQmhCLE9BSW1CLEVBdUJuQixVQWRjLEtBUk0sT0FTTCxXQVJNLEVBU0csc0JBQ0wsaUJBQ0Msa0JBQ0MsbUJBQ0osZUFaQyxBQWFsQixnQkFab0Isa0JBQ0MsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9JbmZvU2VjdGlvbk1vYmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2JpbGVMYXlvdXQgZnJvbSAnLi4vbGF5b3V0L01vYmlsZUxheW91dCdcblxuY29uc3QgbW9iaWxlQ29udGVudCA9IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtZG9scGhpblwiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBtb2JpbGUtdGl0bGVcIj5JbmZvPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtc3VidGl0bGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtbGV0dGVyXCI+SWY8L2Rpdj4geW914oCZdmUgbWFkZSBpdCB0aGlzIGZhciwgdGhlcmXigJlzIGFcbiAgICAgIGdvb2QgY2hhbmNlIHdl4oCZdmUgaW52aXRlZCB5b3UgdG8gb3VyIHdlZGRpbmcgaW4gTWV4aWNvISBUaGVyZeKAmXMgYWxzbyBhXG4gICAgICBnb29kIGNoYW5jZSB0aGF0IHlvdeKAmWQgbG92ZSB0byBjb21lLCBidXQgYXJlIHVuYWJsZSB0byBtYWtlIGl0IHdvcmsgZHVlIHRvXG4gICAgICBjb3N0IG9yIHRpbWUgY29uc3RyYWludHMgb3IgYW55IG90aGVyIHJlYXNvbiwgYW5kIHdlIHVuZGVyc3RhbmQgdGhhdCBhbmRcbiAgICAgIHdpbGwgYmUgc2VuZGluZyBpbmZvcm1hdGlvbiBvdXQgdG8gZXZlcnlvbmUgZm9yIGEgQ2VyZW1vbnkgYW5kIERhbmNlIHdl4oCZbGxcbiAgICAgIGJlIGhhdmluZyBhdCBob21lIGZvciB0aG9zZSBvZiB5b3UgdGhhdCBjYW7igJl0IG1ha2UgaXQgdG8gTWV4aWNvLCBiZWNhdXNlXG4gICAgICB3ZSBsb3ZlIHlvdSBhbGwhXG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwic2VlLWRhdGUtYnV0dG9uLWNvbnRhaW5lclwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLmdldEVsZW1lbnRCeUlkKCd3aGVuLXNlY3Rpb24nKVxuICAgICAgICAgIC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnZW5kJywgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1idXR0b24gc2Vjb25kYXJ5LWJ1dHRvbiBzZWUtd2hlbi1idXR0b25cIj5cbiAgICAgICAgV2hlbiAmIFdoZXJlXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubW9iaWxlLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAubW9iaWxlLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgICB9XG4gICAgICAubW9iaWxlLWRvbHBoaW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvZG9scGhpbi5zdmcpO1xuICAgICAgICB3aWR0aDogMTJyZW07XG4gICAgICAgIGhlaWdodDogMTJyZW07XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICAgIH1cbiAgICAgIC5zZWUtd2hlbi1idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgfVxuICAgICAgLnNlZS13aGVuLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY2ZmY7XG4gICAgICAgIGNvbG9yOiAjNDRiZWUwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBjb25zdCBJbmZvU2VjdGlvbk1vYmlsZSA9IHByb3BzID0+IChcbiAgPE1vYmlsZUxheW91dFxuICAgIGlkPVwiaW5mby1zZWN0aW9uXCJcbiAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjNDRCRUUwXCJcbiAgICBjb250ZW50PXttb2JpbGVDb250ZW50fVxuICAgIGhlaWdodD17cHJvcHMuaGVpZ2h0fVxuICAvPlxuKVxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/mobile/InfoSectionMobile.js */"));
var InfoSectionMobile = function InfoSectionMobile(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout_MobileLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "info-section",
    backgroundColor: "#44BEE0",
    content: mobileContent,
    height: props.height
  });
};

/***/ }),

/***/ "./components/mobile/WhenSectionMobile.js":
/*!************************************************!*\
  !*** ./components/mobile/WhenSectionMobile.js ***!
  \************************************************/
/*! exports provided: WhenSectionMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhenSectionMobile", function() { return WhenSectionMobile; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_MobileLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/MobileLayout */ "./components/layout/MobileLayout.js");



var mobileContent = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "mobile-section-four-wrapper"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "mobile-cake"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "title mobile-title"
}, "When & Where"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "marival-details"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "trip-dates"
}, "May 23rd \u2013 May 30th, 2020"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "wedding-day-title"
}, "Wedding Day"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "trip-dates wedding-day"
}, "May 25th, 2020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "subtitle-four"
}, "For those of you that are able to come, we have organized...", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "marival-title-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "marival-title"
}, "Marival"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "marival-subtitle"
}, "Nuevo Vallarta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "marival-subtitle"
}, "Mexico")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "images-and-bullets"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "mobile-image-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://www.marival.com/",
  target: "_blank",
  className: "jsx-908800744"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "mobile-mexico"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "mobile-marival"
}))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "bullet-list-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  dir: "rtl",
  className: "jsx-908800744"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
  className: "jsx-908800744"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-908800744"
}, "all inclusive"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-908800744"
}, "seven day stay"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-908800744"
}, "airfare"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-908800744"
}, "airport shuttles"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-908800744"
}, "one checked bag"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-908800744"
}, "outside of Puerto Vallarta"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  onClick: function onClick() {
    document.getElementById('costs-section').scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  },
  className: "jsx-908800744" + " " + "see-details-button-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-908800744" + " " + "main-button secondary-button see-details-button"
}, "See Details"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "908800744"
}, ".mobile-section-four-wrapper.jsx-908800744{margin-left:auto;margin-right:auto;padding-top:2rem;}.mobile-cake.jsx-908800744{background-image:url(/static/images/cake.svg);width:10rem;height:10rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:1rem;}.mobile-title.jsx-908800744{color:white;text-align:center;font-size:1.6rem;}.marival-details.jsx-908800744{font-family:LatoHairLine;color:white;font-size:1.4rem;text-align:center;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.trip-dates.jsx-908800744{margin-top:1rem;font-size:2rem;}.wedding-day-title.jsx-908800744{font-family:WestburySignature;margin-top:1rem;font-size:4rem;}.wedding-day.jsx-908800744{font-size:2.1rem;color:white;font-weight:800;}.subtitle-four.jsx-908800744{min-width:30rem;font-family:LatoHairLine;color:white;font-size:1.6rem;text-align:center;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:400;padding-left:1rem;padding-right:1rem;margin-top:1.5rem;}.mobile-image-container.jsx-908800744{width:50%;float:left;}.mobile-mexico.jsx-908800744{background-image:url(/static/images/mexico.png);width:14rem;height:14rem;background-size:cover;margin-right:auto;margin-top:1.5rem;margin-bottom:0.5rem;margin-left:1rem;}.mobile-marival.jsx-908800744{background-image:url(/static/images/Marival-small.png);width:9rem;height:9rem;background-size:cover;margin-left:5rem;margin-right:auto;margin-top:-5.5rem;margin-bottom:0.5rem;}.marival-title-container.jsx-908800744{margin-top:1rem;}.marival-title.jsx-908800744{font-size:2rem;font-family:Laila,serif;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;text-align:center;}.bullet-list-container.jsx-908800744{display:inline-block;width:50%;float:right;text-align:right;margin-top:1rem;margin-bottom:1rem;}.mobile-subtitle.jsx-908800744{font-family:LatoHairLine;color:white;font-size:1.1rem;text-align:center;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:400;padding-left:2rem;padding-right:2rem;}.see-details-button-container.jsx-908800744{clear:both;}.see-details-button.jsx-908800744:hover{background-color:#e5f6ff;color:#caa16e;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9XaGVuU2VjdGlvbk1vYmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGdCLEFBRzBCLEFBSzZCLEFBU2xDLEFBS2EsQUFPVCxBQUljLEFBS2IsQUFLRCxBQVlOLEFBSXNDLEFBVU8sQUFVdkMsQUFHRCxBQU1NLEFBUUksQUFVZCxBQUdjLFVBckRkLENBbURiLENBekZvQixHQWlFTyxDQXJEVixBQWNVLEFBb0MzQixDQTVFb0IsQUFtQ04sSUFrQmQsQUFnQ1ksSUFsRUUsQUEwRUEsQUFhRSxJQXRFRSxDQXJCQyxBQWVELENBSGxCLEFBMkRjLElBckZLLEVBbUJBLEFBMEVBLEVBZEUsQUEyQnJCLEVBbEVjLEVBOENLLEVBbERuQixDQWhDYyxBQTBCRyxDQWZqQixDQXdDYyxJQXREZCxDQXdDbUIsQ0FyQkMsQUEwRUEsQ0E3QlAsR0E1REUsRUFtREEsQUErQkcsQ0F4RGxCLEtBbUNjLElBeEJNLENBcENJLENBZUgsQUEwRUEsQ0F0Q0csR0ErQkgsRUFyQkcsVUF4QkgsS0FwQ0YsRUFtREMsQUErQnBCLEtBckJtQixVQTVEQyxHQW1EQSxJQVVBLFdBNURDLEdBbURFLENBb0JILEdBVkMsWUE1RHJCLEdBdUVBLEVBcEJtQixFQVVJLFdBakR2QixBQTBFa0IsSUFsQ2xCLE1BVUEsTUE1QmtCLEFBcURFLGdCQXBEQSxFQXFEQyxnQkFwREEsR0FxRHJCLGdCQXBEb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9XaGVuU2VjdGlvbk1vYmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2JpbGVMYXlvdXQgZnJvbSAnLi4vbGF5b3V0L01vYmlsZUxheW91dCdcblxuY29uc3QgbW9iaWxlQ29udGVudCA9IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtc2VjdGlvbi1mb3VyLXdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1jYWtlXCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIG1vYmlsZS10aXRsZVwiPldoZW4gJiBXaGVyZTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyaXZhbC1kZXRhaWxzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaXAtZGF0ZXNcIj5NYXkgMjNyZCDigJMgTWF5IDMwdGgsIDIwMjA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VkZGluZy1kYXktdGl0bGVcIj5XZWRkaW5nIERheTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlwLWRhdGVzIHdlZGRpbmctZGF5XCI+TWF5IDI1dGgsIDIwMjA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlLWZvdXJcIj5cbiAgICAgIEZvciB0aG9zZSBvZiB5b3UgdGhhdCBhcmUgYWJsZSB0byBjb21lLCB3ZSBoYXZlIG9yZ2FuaXplZC4uLlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJpdmFsLXRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcml2YWwtdGl0bGVcIj5NYXJpdmFsPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyaXZhbC1zdWJ0aXRsZVwiPk51ZXZvIFZhbGxhcnRhPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyaXZhbC1zdWJ0aXRsZVwiPk1leGljbzwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlcy1hbmQtYnVsbGV0c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFyaXZhbC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZXhpY29cIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbWFyaXZhbFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWxsZXQtbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+YWxsIGluY2x1c2l2ZTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5zZXZlbiBkYXkgc3RheTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5haXJmYXJlPC9saT5cbiAgICAgICAgICAgICAgPGxpPmFpcnBvcnQgc2h1dHRsZXM8L2xpPlxuICAgICAgICAgICAgICA8bGk+b25lIGNoZWNrZWQgYmFnPC9saT5cbiAgICAgICAgICAgICAgPGxpPm91dHNpZGUgb2YgUHVlcnRvIFZhbGxhcnRhPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInNlZS1kZXRhaWxzLWJ1dHRvbi1jb250YWluZXJcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgnY29zdHMtc2VjdGlvbicpXG4gICAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ3N0YXJ0JywgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1idXR0b24gc2Vjb25kYXJ5LWJ1dHRvbiBzZWUtZGV0YWlscy1idXR0b25cIj5cbiAgICAgICAgICBTZWUgRGV0YWlsc1xuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tb2JpbGUtc2VjdGlvbi1mb3VyLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5tb2JpbGUtY2FrZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltYWdlcy9jYWtlLnN2Zyk7XG4gICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5tb2JpbGUtdGl0bGUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICB9XG4gICAgICAubWFyaXZhbC1kZXRhaWxzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgfVxuICAgICAgLnRyaXAtZGF0ZXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICB9XG4gICAgICAud2VkZGluZy1kYXktdGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogV2VzdGJ1cnlTaWduYXR1cmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgIH1cbiAgICAgIC53ZWRkaW5nLWRheSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICB9XG4gICAgICAuc3VidGl0bGUtZm91ciB7XG4gICAgICAgIG1pbi13aWR0aDogMzByZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICB9XG4gICAgICAubW9iaWxlLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgICAgLm1vYmlsZS1tZXhpY28ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvbWV4aWNvLnBuZyk7XG4gICAgICAgIHdpZHRoOiAxNHJlbTtcbiAgICAgICAgaGVpZ2h0OiAxNHJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICB9XG4gICAgICAubW9iaWxlLW1hcml2YWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvTWFyaXZhbC1zbWFsbC5wbmcpO1xuICAgICAgICB3aWR0aDogOXJlbTtcbiAgICAgICAgaGVpZ2h0OiA5cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAtNS41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICB9XG4gICAgICAubWFyaXZhbC10aXRsZS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgfVxuICAgICAgLm1hcml2YWwtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYWlsYSwgc2VyaWY7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5idWxsZXQtbGlzdC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB9XG4gICAgICAubW9iaWxlLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgICB9XG4gICAgICAuc2VlLWRldGFpbHMtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgfVxuICAgICAgLnNlZS1kZXRhaWxzLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY2ZmY7XG4gICAgICAgIGNvbG9yOiAjY2FhMTZlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBjb25zdCBXaGVuU2VjdGlvbk1vYmlsZSA9IHByb3BzID0+IChcbiAgPE1vYmlsZUxheW91dFxuICAgIGlkPVwid2hlbi1zZWN0aW9uXCJcbiAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjY2FhMTZlXCJcbiAgICBjb250ZW50PXttb2JpbGVDb250ZW50fVxuICAgIGhlaWdodD17cHJvcHMuaGVpZ2h0fVxuICAvPlxuKVxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/mobile/WhenSectionMobile.js */"));
var WhenSectionMobile = function WhenSectionMobile(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout_MobileLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "when-section",
    backgroundColor: "#caa16e",
    content: mobileContent,
    height: props.height
  });
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_IntroSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/IntroSection */ "./components/IntroSection.js");
/* harmony import */ var _components_PhotoSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/PhotoSection */ "./components/PhotoSection.js");
/* harmony import */ var _components_InfoSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/InfoSection */ "./components/InfoSection.js");
/* harmony import */ var _components_mobile_InfoSectionMobile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/mobile/InfoSectionMobile */ "./components/mobile/InfoSectionMobile.js");
/* harmony import */ var _components_WhenSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/WhenSection */ "./components/WhenSection.js");
/* harmony import */ var _components_mobile_WhenSectionMobile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/mobile/WhenSectionMobile */ "./components/mobile/WhenSectionMobile.js");
/* harmony import */ var _components_CostsSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/CostsSection */ "./components/CostsSection.js");
/* harmony import */ var _components_mobile_CostsSectionMobile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/mobile/CostsSectionMobile */ "./components/mobile/CostsSectionMobile.js");



















var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      width: 0,
      height: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateDimensions", function () {
      _this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function () {
      _this.updateDimensions();

      window.addEventListener('resize', _this.updateDimensions);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentWillUnmount", function () {
      window.removeEventListener('resize', _this.updateDimensions);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var height = this.state.height;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3918779152" + " " + "section-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-3918779152"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_IntroSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        height: height
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_PhotoSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
        height: height
      }), this.state.width < 650 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_mobile_InfoSectionMobile__WEBPACK_IMPORTED_MODULE_13__["InfoSectionMobile"], {
        height: height
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_InfoSection__WEBPACK_IMPORTED_MODULE_12__["InfoSection"], {
        height: height
      }), this.state.width < 650 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_mobile_WhenSectionMobile__WEBPACK_IMPORTED_MODULE_15__["WhenSectionMobile"], {
        height: height
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_WhenSection__WEBPACK_IMPORTED_MODULE_14__["WhenSection"], {
        height: height
      }), this.state.width < 650 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_mobile_CostsSectionMobile__WEBPACK_IMPORTED_MODULE_17__["CostsSectionMobile"], {
        height: height
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_CostsSection__WEBPACK_IMPORTED_MODULE_16__["CostsSection"], {
        height: height
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3918779152"
      }, "@font-face{font-family:WestburySignature;src:url('/static/fonts/WestburySignature.otf') format('opentype');}@font-face{font-family:LatoHairLine;src:url('/static/fonts/Lato-Hairline.ttf') format('truetype');}@font-face{font-family:Laila;src:url('/static/fonts/Laila-Regular.ttf') format('truetype');}*{box-sizing:border-box;}html,body{margin:0;padding:0;height:100vh;overflow-y:scroll;font-size:62.5%;}a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}.abs{position:absolute;top:50%;left:50%;text-align:center;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.section{position:relative;text-align:center;}.content-container{height:100%;}.title{font-size:3rem;color:#c2d2f5;font-family:LatoHairLine;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;}.first-letter{font-size:2.2rem;display:inline-block;font-family:Laila,serif;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}.first-letter-mobile{font-size:1.2rem;display:inline-block;font-family:Laila,serif;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}.main-button{font-family:LatoHairLine;text-transform:uppercase;color:#c2d2f5;font-size:2rem;border:1px solid #c2d2f5;width:220px;margin-left:auto;margin-right:auto;border-radius:50px;padding-top:10px;padding-bottom:10px;cursor:pointer;text-align:center;}.main-button:hover{background-color:#c2d2f5;color:rgba(110,104,148,1);}.secondary-button{color:white;border:1px solid white;}.lastSection{display:none;}@media (max-width:700px){.main-button{font-size:1rem;width:10rem;}.lastSection{display:block !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RDJCLEFBRzJDLEFBSUwsQUFJUCxBQUlJLEFBSWIsQUFPWSxBQUlILEFBUUEsQUFJTixBQUdHLEFBUUUsQUFNQSxBQU1RLEFBZUEsQUFJYixBQUlDLEFBSUksQUFJVSxTQTVFakIsR0F1QlosQUEwQ3lCLENBSXpCLEVBM0NnQixBQStDQSxFQXZDTyxBQU1BLENBaER5QyxBQW1CdEQsQUFRVSxDQWxCTCxHQUxmLEdBUmdFLEFBMERyQyxBQWVJLEFBZ0I3QixDQWpFUyxDQThEVCxFQS9DeUIsQ0EzQ3lDLEVBa0JoRCxHQVdBLEFBcURwQixDQTlDQSxFQWUyQixBQU1BLFlBdENULEFBSUYsQUF3Q0EsQ0FlaEIsRUFoRDBDLENBY2YsUUFRTixBQU1BLEVBbENyQixBQXdDaUIsRUE1Q2pCLGFBeUJrQixBQW9CUyxDQXhEM0IsT0FKQSxLQTBCa0MsR0FlYixDQTdDckIsUUFpRWMsWUFDSyxpQkFDQyxrQkFDQyxJQWhCckIsQUFNQSxlQVdtQixpQkFDRyxDQXhCdEIsU0FmQSxVQXdDaUIsZUFDRyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvSmFwaFdlZGRpbmdTaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEludHJvU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0ludHJvU2VjdGlvbidcbmltcG9ydCBQaG90b1NlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QaG90b1NlY3Rpb24nXG5pbXBvcnQgeyBJbmZvU2VjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvSW5mb1NlY3Rpb24nXG5pbXBvcnQgeyBJbmZvU2VjdGlvbk1vYmlsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbW9iaWxlL0luZm9TZWN0aW9uTW9iaWxlJ1xuaW1wb3J0IHsgV2hlblNlY3Rpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL1doZW5TZWN0aW9uJ1xuaW1wb3J0IHsgV2hlblNlY3Rpb25Nb2JpbGUgfSBmcm9tICcuLi9jb21wb25lbnRzL21vYmlsZS9XaGVuU2VjdGlvbk1vYmlsZSdcbmltcG9ydCB7IENvc3RzU2VjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29zdHNTZWN0aW9uJ1xuaW1wb3J0IHsgQ29zdHNTZWN0aW9uTW9iaWxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2JpbGUvQ29zdHNTZWN0aW9uTW9iaWxlJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgfVxuXG4gIHVwZGF0ZURpbWVuc2lvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVEaW1lbnNpb25zKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlRGltZW5zaW9ucylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEludHJvU2VjdGlvbiBoZWlnaHQ9e2hlaWdodH0gLz5cbiAgICAgICAgPFBob3RvU2VjdGlvbiBoZWlnaHQ9e2hlaWdodH0gLz5cbiAgICAgICAge3RoaXMuc3RhdGUud2lkdGggPCA2NTAgPyAoXG4gICAgICAgICAgPEluZm9TZWN0aW9uTW9iaWxlIGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxJbmZvU2VjdGlvbiBoZWlnaHQ9e2hlaWdodH0gLz5cbiAgICAgICAgKX1cbiAgICAgICAge3RoaXMuc3RhdGUud2lkdGggPCA2NTAgPyAoXG4gICAgICAgICAgPFdoZW5TZWN0aW9uTW9iaWxlIGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxXaGVuU2VjdGlvbiBoZWlnaHQ9e2hlaWdodH0gLz5cbiAgICAgICAgKX1cbiAgICAgICAge3RoaXMuc3RhdGUud2lkdGggPCA2NTAgPyAoXG4gICAgICAgICAgPENvc3RzU2VjdGlvbk1vYmlsZSBoZWlnaHQ9e2hlaWdodH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q29zdHNTZWN0aW9uIGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFdlc3RidXJ5U2lnbmF0dXJlO1xuICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvV2VzdGJ1cnlTaWduYXR1cmUub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9MYXRvLUhhaXJsaW5lLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTGFpbGE7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9MYWlsYS1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sLFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICBmb250LXNpemU6IDYyLjUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWJzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VjdGlvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICBjb2xvcjogI2MyZDJmNTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maXJzdC1sZXR0ZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTGFpbGEsIHNlcmlmO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpcnN0LWxldHRlci1tb2JpbGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTGFpbGEsIHNlcmlmO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW4tYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgY29sb3I6ICNjMmQyZjU7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzJkMmY1O1xuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW4tYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMmQyZjU7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxMTAsIDEwNCwgMTQ4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlY29uZGFyeS1idXR0b24ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYXN0U2VjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgIC5tYWluLWJ1dHRvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxhc3RTZWN0aW9uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dallas/Documents/JaphWeddingSite/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map