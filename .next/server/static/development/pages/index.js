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
    className: "jsx-1932146924" + " " + "section section-five"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "costs-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "mobile-booking"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "title title-2 deposit-title"
  }, "Deposit Dates"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "title title-4 left-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "required left-item"
  }, "$500 USD deposit by"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "required left-item"
  }, "Full amount is due by")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "title title-4 right-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "cost-date right-item"
  }, "September 3rd, 2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "cost-date right-item"
  }, "March 4th, 2020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "title title-3"
  }, "Total Cost"), "]", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "sub-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "title location-title"
  }, "Leaving From Kelowna"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "title-4 left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "left-item"
  }, "Adult"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "left-item"
  }, "Ages 7-12"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "left-item"
  }, "Ages 2-6")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "title-4 right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "right-item"
  }, "$1544.35"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "right-item"
  }, "$1196.07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "right-item"
  }, "$887.54"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "sub-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "title location-title"
  }, "Leaving From Vancouver"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "title-4 left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "left-item"
  }, "Adult"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "left-item"
  }, "Ages 7-12"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "left-item"
  }, "Ages 2-6")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "title-4 right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "right-item"
  }, "$1559.35"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "right-item"
  }, "$1206.07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "right-item"
  }, "$897.54"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "title final-note"
  }, "All rates include round trip airfare, round trip airport transfers, 7 nights all-inclusive accommodation, one checked bag per person and seat selection with the group towards the rear of the aircraft."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "title final-note"
  }, "This pricing is Guaranteed for the first 20 people who pay the deposit, and prices beyond those first 20 should still be very close to these rates, but are not guaranteed"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "title final-note"
  }, "Bookings can be done through our travel agent Holly Graves at", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "final-email"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:holly.graves@flightcentre.ca",
    className: "jsx-1932146924"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932146924" + " " + "mail-icon"
  }), "holly.graves@flightcentre.ca")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1932146924"
  }, ".section-five.jsx-1932146924{background:#7c769e;}.costs-wrapper.jsx-1932146924{min-width:100rem;}.mobile-booking.jsx-1932146924{background-image:url(/static/images/booking.svg);width:16rem;height:16rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:2rem;margin-top:10rem;}.deposit-title.jsx-1932146924{margin-bottom:2rem;}.sub-container.jsx-1932146924{clear:both;font-size:2rem;}.location-title.jsx-1932146924{margin-top:1rem;margin-bottom:1rem;font-size:1.4rem;color:white;}.left.jsx-1932146924{width:50%;float:left;text-align:right;margin-bottom:1rem;}.left-item.jsx-1932146924{margin-left:auto;margin-right:1rem;margin-bottom:1rem;}.right.jsx-1932146924{width:50%;float:right;text-align:left;font-family:Laila;font-size:1.6rem;margin-bottom:1rem;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}.right-item.jsx-1932146924{margin-bottom:1rem;}.left-container.jsx-1932146924{width:50%;float:left;text-align:right;font-size:2.2rem;}.required.jsx-1932146924{margin-bottom:2rem;height:3rem;line-height:3rem;}.right-container.jsx-1932146924{width:50%;float:left;text-align:left;font-family:Laila;font-size:2rem;}.right-item.jsx-1932146924{margin-left:2rem;}.cost-date.jsx-1932146924{height:3rem;line-height:3rem;margin-bottom:2rem;}.final-note.jsx-1932146924{font-family:Laila;font-size:1.2rem;margin-left:auto;margin-right:auto;margin-bottom:1rem;clear:both;color:white;max-width:70rem;}.final-email.jsx-1932146924{font-family:Laila,serif;font-size:3rem;color:white;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;margin-bottom:10rem;}.mail-icon.jsx-1932146924{background-image:url(/static/images/mail.svg);width:5rem;height:5rem;background-size:cover;margin-left:auto;margin-right:auto;}@media (max-width:1600px){.costs-wrapper.jsx-1932146924{min-width:70rem;}}@media (max-width:700px){.see-info-button-container.jsx-1932146924{bottom:8rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0Nvc3RzU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGdCLEFBRzRCLEFBR0YsQUFHZ0MsQUFVOUIsQUFHUixBQUlLLEFBTU4sQUFNTyxBQUtQLEFBU1MsQUFHVCxBQU1TLEFBS1QsQUFPTyxBQUdMLEFBS00sQUFVTyxBQVNxQixBQVM1QixBQUtKLFVBakZILEFBV0MsQUFZRCxBQVdBLENBNUNJLENBc0RFLEFBc0NqQixJQXhGbUIsQUFtRm5CLENBdkdGLEFBZ0NvQixBQW1DcEIsQ0FRbUIsQ0E5RW5CLEFBZ0JBLEFBaUNBLEFBU2MsRUE1QkssQUF1QkEsQUFXRCxDQXZCQSxFQStDRCxFQXBFakIsR0FzRHFCLEVBZkYsSUFuQ0EsQUFZRSxBQTJDRixFQWRDLENBbENDLEFBV0QsQUFZRCxDQW1DTCxPQVFELEVBckNiLEFBZUEsQ0FyRWMsRUFvRmEsQ0FqRWIsQUF1RE0sRUEzQ3BCLENBa0JBLEFBV2lCLENBdkJFLENBWG5CLEFBa0VjLElBM0ZDLEdBbUJmLEtBeUV3QixDQWhDeEIsQUFjcUIsR0FyQ0EsQ0FwQ0csRUFtRk4sYUFUTCxFQWtCTSxDQXZERSxBQStDQSxJQW5GRixJQTBFTCxRQWtCTSxJQWpCRixDQTFFRSxhQTRGcEIsRUFqQkEsR0ExRXFCLG1CQUNGLGlCQUNuQixrQkFpQ0EsQUErQ3NCLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9KYXBoV2VkZGluZ1NpdGUvY29tcG9uZW50cy9Db3N0c1NlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ29zdHNTZWN0aW9uID0gcHJvcHMgPT4gKFxuICA8ZGl2IGlkPVwiY29zdHMtc2VjdGlvblwiIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi1maXZlXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb3N0cy13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1ib29raW5nXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtMiBkZXBvc2l0LXRpdGxlXCI+RGVwb3NpdCBEYXRlczwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZS00IGxlZnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWlyZWQgbGVmdC1pdGVtXCI+JDUwMCBVU0QgZGVwb3NpdCBieTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVpcmVkIGxlZnQtaXRlbVwiPkZ1bGwgYW1vdW50IGlzIGR1ZSBieTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlLTQgcmlnaHQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdC1kYXRlIHJpZ2h0LWl0ZW1cIj5TZXB0ZW1iZXIgM3JkLCAyMDE5PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdC1kYXRlIHJpZ2h0LWl0ZW1cIj5NYXJjaCA0dGgsIDIwMjA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZS0zXCI+VG90YWwgQ29zdDwvZGl2Pl17JyAnfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbG9jYXRpb24tdGl0bGVcIj5MZWF2aW5nIEZyb20gS2Vsb3duYTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLTQgbGVmdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1pdGVtXCI+QWR1bHQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtaXRlbVwiPkFnZXMgNy0xMjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1pdGVtXCI+QWdlcyAyLTY8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtNCByaWdodFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtaXRlbVwiPiQxNTQ0LjM1PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1pdGVtXCI+JDExOTYuMDc8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWl0ZW1cIj4kODg3LjU0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBsb2NhdGlvbi10aXRsZVwiPkxlYXZpbmcgRnJvbSBWYW5jb3V2ZXI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS00IGxlZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtaXRlbVwiPkFkdWx0PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWl0ZW1cIj5BZ2VzIDctMTI8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtaXRlbVwiPkFnZXMgMi02PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLTQgcmlnaHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWl0ZW1cIj4kMTU1OS4zNTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtaXRlbVwiPiQxMjA2LjA3PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1pdGVtXCI+JDg5Ny41NDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBmaW5hbC1ub3RlXCI+XG4gICAgICAgIEFsbCByYXRlcyBpbmNsdWRlIHJvdW5kIHRyaXAgYWlyZmFyZSwgcm91bmQgdHJpcCBhaXJwb3J0IHRyYW5zZmVycywgN1xuICAgICAgICBuaWdodHMgYWxsLWluY2x1c2l2ZSBhY2NvbW1vZGF0aW9uLCBvbmUgY2hlY2tlZCBiYWcgcGVyIHBlcnNvbiBhbmQgc2VhdFxuICAgICAgICBzZWxlY3Rpb24gd2l0aCB0aGUgZ3JvdXAgdG93YXJkcyB0aGUgcmVhciBvZiB0aGUgYWlyY3JhZnQuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgZmluYWwtbm90ZVwiPlxuICAgICAgICBUaGlzIHByaWNpbmcgaXMgR3VhcmFudGVlZCBmb3IgdGhlIGZpcnN0IDIwIHBlb3BsZSB3aG8gcGF5IHRoZSBkZXBvc2l0LFxuICAgICAgICBhbmQgcHJpY2VzIGJleW9uZCB0aG9zZSBmaXJzdCAyMCBzaG91bGQgc3RpbGwgYmUgdmVyeSBjbG9zZSB0byB0aGVzZVxuICAgICAgICByYXRlcywgYnV0IGFyZSBub3QgZ3VhcmFudGVlZFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGZpbmFsLW5vdGVcIj5cbiAgICAgICAgQm9va2luZ3MgY2FuIGJlIGRvbmUgdGhyb3VnaCBvdXIgdHJhdmVsIGFnZW50IEhvbGx5IEdyYXZlcyBhdFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbmFsLWVtYWlsXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpob2xseS5ncmF2ZXNAZmxpZ2h0Y2VudHJlLmNhXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haWwtaWNvblwiIC8+XG4gICAgICAgICAgICBob2xseS5ncmF2ZXNAZmxpZ2h0Y2VudHJlLmNhXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zZWN0aW9uLWZpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjN2M3NjllO1xuICAgICAgfVxuICAgICAgLmNvc3RzLXdyYXBwZXIge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHJlbTtcbiAgICAgIH1cbiAgICAgIC5tb2JpbGUtYm9va2luZyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltYWdlcy9ib29raW5nLnN2Zyk7XG4gICAgICAgIHdpZHRoOiAxNnJlbTtcbiAgICAgICAgaGVpZ2h0OiAxNnJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTByZW07XG4gICAgICB9XG4gICAgICAuZGVwb3NpdC10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICB9XG4gICAgICAuc3ViLWNvbnRhaW5lciB7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICB9XG4gICAgICAubG9jYXRpb24tdGl0bGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgLmxlZnQge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB9XG4gICAgICAubGVmdC1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5yaWdodCB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhaWxhO1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgIH1cbiAgICAgIC5yaWdodC1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5sZWZ0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgICB9XG4gICAgICAucmVxdWlyZWQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgICAgfVxuICAgICAgLnJpZ2h0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LWZhbWlseTogTGFpbGE7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5yaWdodC1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgICB9XG4gICAgICAuY29zdC1kYXRlIHtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5maW5hbC1ub3RlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhaWxhO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWF4LXdpZHRoOiA3MHJlbTtcbiAgICAgIH1cbiAgICAgIC5maW5hbC1lbWFpbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYWlsYSwgc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcbiAgICAgIH1cbiAgICAgIC5tYWlsLWljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvbWFpbC5zdmcpO1xuICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAgICAgICAuY29zdHMtd3JhcHBlciB7XG4gICAgICAgICAgbWluLXdpZHRoOiA3MHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIC5zZWUtaW5mby1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICBib3R0b206IDhyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/CostsSection.js */"));
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



var leftElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2085888330" + " " + "title title-2 title-left"
}, "Info"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2085888330" + " " + "title-4 title-left"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2085888330" + " " + "first-letter"
}, "If"), " you\u2019ve made it this far, there\u2019s a good chance we\u2019ve invited you to our wedding in Mexico! There\u2019s also a good chance that you\u2019d love to come, but are unable to make it work due to cost or time constraints or any other reason, and we totally understand that, and take no offense or anything like that! We love you all!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2085888330"
}, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0luZm9TZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNnQiIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9KYXBoV2VkZGluZ1NpdGUvY29tcG9uZW50cy9JbmZvU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNwbGl0TGF5b3V0IGZyb20gJy4vbGF5b3V0L1NwbGl0TGF5b3V0J1xuXG5jb25zdCBsZWZ0RWxlbWVudCA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtMiB0aXRsZS1sZWZ0XCI+SW5mbzwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtNCB0aXRsZS1sZWZ0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0LWxldHRlclwiPklmPC9kaXY+IHlvdeKAmXZlIG1hZGUgaXQgdGhpcyBmYXIsIHRoZXJl4oCZcyBhXG4gICAgICBnb29kIGNoYW5jZSB3ZeKAmXZlIGludml0ZWQgeW91IHRvIG91ciB3ZWRkaW5nIGluIE1leGljbyEgVGhlcmXigJlzIGFsc28gYVxuICAgICAgZ29vZCBjaGFuY2UgdGhhdCB5b3XigJlkIGxvdmUgdG8gY29tZSwgYnV0IGFyZSB1bmFibGUgdG8gbWFrZSBpdCB3b3JrIGR1ZSB0b1xuICAgICAgY29zdCBvciB0aW1lIGNvbnN0cmFpbnRzIG9yIGFueSBvdGhlciByZWFzb24sIGFuZCB3ZSB0b3RhbGx5IHVuZGVyc3RhbmRcbiAgICAgIHRoYXQsIGFuZCB0YWtlIG5vIG9mZmVuc2Ugb3IgYW55dGhpbmcgbGlrZSB0aGF0ISBXZSBsb3ZlIHlvdSBhbGwhXG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuY29uc3QgcmlnaHRFbGVtZW50ID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkb2xwaGluXCIgLz5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJzZWUtZGF0ZS1idXR0b24tY29udGFpbmVyXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ3doZW4tc2VjdGlvbicpXG4gICAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdlbmQnLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLTEgc2VlLWRhdGUtYnV0dG9uXCI+V2hlbiAmIFdoZXJlPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRvbHBoaW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvZG9scGhpbi5zdmcpO1xuICAgICAgICB3aWR0aDogMzByZW07XG4gICAgICAgIGhlaWdodDogMzByZW07XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICB9XG4gICAgICAuc2VlLWRhdGUtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDIycmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1kYXRlLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY2ZmY7XG4gICAgICAgIGNvbG9yOiAjNDRiZWUwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuZXhwb3J0IGNvbnN0IEluZm9TZWN0aW9uID0gcHJvcHMgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPFNwbGl0TGF5b3V0XG4gICAgICBpZD1cImluZm8tc2VjdGlvblwiXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjNDRCRUUwXCJcbiAgICAgIGxlZnRFbGVtZW50PXtsZWZ0RWxlbWVudH1cbiAgICAgIHJpZ2h0RWxlbWVudD17cmlnaHRFbGVtZW50fVxuICAgIC8+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/InfoSection.js */"));
var rightElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3583960932" + " " + "dolphin"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  onClick: function onClick() {
    document.getElementById('when-section').scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    });
  },
  className: "jsx-3583960932" + " " + "see-date-button-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3583960932" + " " + "button button-1 see-date-button"
}, "When & Where")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3583960932"
}, ".dolphin.jsx-3583960932{background-image:url(/static/images/dolphin.svg);width:30rem;height:30rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:2rem;margin-top:4rem;}.see-date-button.jsx-3583960932{width:22rem;}.see-date-button.jsx-3583960932:hover{background-color:#e5f6ff;color:#44bee0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0luZm9TZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCZ0IsQUFHMEQsQUFVckMsQUFHYSxZQUYzQixhQUdnQixjQUNoQixVQWRjLFlBQ0MsYUFDUyxzQkFDTCxpQkFDQyxrQkFDQyxtQkFDSCxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvSmFwaFdlZGRpbmdTaXRlL2NvbXBvbmVudHMvSW5mb1NlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBTcGxpdExheW91dCBmcm9tICcuL2xheW91dC9TcGxpdExheW91dCdcblxuY29uc3QgbGVmdEVsZW1lbnQgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlLTIgdGl0bGUtbGVmdFwiPkluZm88L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLTQgdGl0bGUtbGVmdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1sZXR0ZXJcIj5JZjwvZGl2PiB5b3XigJl2ZSBtYWRlIGl0IHRoaXMgZmFyLCB0aGVyZeKAmXMgYVxuICAgICAgZ29vZCBjaGFuY2Ugd2XigJl2ZSBpbnZpdGVkIHlvdSB0byBvdXIgd2VkZGluZyBpbiBNZXhpY28hIFRoZXJl4oCZcyBhbHNvIGFcbiAgICAgIGdvb2QgY2hhbmNlIHRoYXQgeW914oCZZCBsb3ZlIHRvIGNvbWUsIGJ1dCBhcmUgdW5hYmxlIHRvIG1ha2UgaXQgd29yayBkdWUgdG9cbiAgICAgIGNvc3Qgb3IgdGltZSBjb25zdHJhaW50cyBvciBhbnkgb3RoZXIgcmVhc29uLCBhbmQgd2UgdG90YWxseSB1bmRlcnN0YW5kXG4gICAgICB0aGF0LCBhbmQgdGFrZSBubyBvZmZlbnNlIG9yIGFueXRoaW5nIGxpa2UgdGhhdCEgV2UgbG92ZSB5b3UgYWxsIVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG5cbmNvbnN0IHJpZ2h0RWxlbWVudCA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9scGhpblwiIC8+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwic2VlLWRhdGUtYnV0dG9uLWNvbnRhaW5lclwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLmdldEVsZW1lbnRCeUlkKCd3aGVuLXNlY3Rpb24nKVxuICAgICAgICAgIC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnZW5kJywgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi0xIHNlZS1kYXRlLWJ1dHRvblwiPldoZW4gJiBXaGVyZTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5kb2xwaGluIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1hZ2VzL2RvbHBoaW4uc3ZnKTtcbiAgICAgICAgd2lkdGg6IDMwcmVtO1xuICAgICAgICBoZWlnaHQ6IDMwcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1kYXRlLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAyMnJlbTtcbiAgICAgIH1cbiAgICAgIC5zZWUtZGF0ZS1idXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmNmZmO1xuICAgICAgICBjb2xvcjogIzQ0YmVlMDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBJbmZvU2VjdGlvbiA9IHByb3BzID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxTcGxpdExheW91dFxuICAgICAgaWQ9XCJpbmZvLXNlY3Rpb25cIlxuICAgICAgYmFja2dyb3VuZENvbG9yPVwiIzQ0QkVFMFwiXG4gICAgICBsZWZ0RWxlbWVudD17bGVmdEVsZW1lbnR9XG4gICAgICByaWdodEVsZW1lbnQ9e3JpZ2h0RWxlbWVudH1cbiAgICAvPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/InfoSection.js */"));
var InfoSection = function InfoSection(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout_SplitLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "info-section",
    backgroundColor: "#44BEE0",
    leftElement: leftElement,
    rightElement: rightElement
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
    className: "jsx-4258139755" + " " + "section section-one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4258139755" + " " + "content-container content-container-one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4258139755" + " " + "abs"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4258139755" + " " + "title title-1"
  }, "Raph & Jeff"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4258139755" + " " + "title subtitle-1"
  }, "Mexico 2020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: function onClick() {
      document.getElementById('photo-section').scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
      setTimeout(function () {
        document.getElementById('info-section').scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
      }, 1000);
    },
    className: "jsx-4258139755" + " " + "see-info-button-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4258139755" + " " + "button button-1"
  }, "See Info"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4258139755"
  }, ".section-one.jsx-4258139755{background-image:url(/static/images/MainPage.gif);background-size:cover;background-repeat:repeat-none;background-position:center center;}.content-container-one.jsx-4258139755{background:rgba(110,104,148,0.9);}.see-info-button-container.jsx-4258139755{position:absolute;width:100%;text-align:center;bottom:10rem;}@media (max-width:950px){.see-info-button-container.jsx-4258139755{bottom:8rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0ludHJvU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmdCLEFBRzJELEFBTWQsQUFHbEIsQUFPSixZQUNkLE1BUFcsV0FDTyxJQUpwQixjQUtlLEdBWFMsVUFZeEIsWUFYZ0MsOEJBQ0ksa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0ludHJvU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEludHJvU2VjdGlvbiA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tb25lXCIgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5oZWlnaHQgfX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lciBjb250ZW50LWNvbnRhaW5lci1vbmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtMVwiPlJhcGggJiBKZWZmPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgc3VidGl0bGUtMVwiPk1leGljbyAyMDIwPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwic2VlLWluZm8tYnV0dG9uLWNvbnRhaW5lclwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKCdwaG90by1zZWN0aW9uJylcbiAgICAgICAgICAgIC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnc3RhcnQnLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgnaW5mby1zZWN0aW9uJylcbiAgICAgICAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdzdGFydCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi0xXCI+U2VlIEluZm88L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zZWN0aW9uLW9uZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltYWdlcy9NYWluUGFnZS5naWYpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LW5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuY29udGVudC1jb250YWluZXItb25lIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMTAsIDEwNCwgMTQ4LCAwLjkpO1xuICAgICAgfVxuICAgICAgLnNlZS1pbmZvLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvdHRvbTogMTByZW07XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgLnNlZS1pbmZvLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgIGJvdHRvbTogOHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEludHJvU2VjdGlvblxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/IntroSection.js */"));
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
    className: "jsx-3331275113" + " " + "section-two"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3331275113" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3331275113" + " " + "imageGrid"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3331275113" + " " + "tile tile1"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3331275113" + " " + "tile tile2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3331275113" + " " + "tile tile3"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3331275113" + " " + "tile tile4"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3331275113" + " " + "tile tile5"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3331275113" + " " + "tile tile6"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3331275113" + " " + "tile tile7"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3331275113" + " " + "tile tile8"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3331275113" + " " + "tile tile9"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3331275113" + " " + "tile tile10"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3331275113" + " " + "tile tile11"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3331275113" + " " + "tile tile12"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3331275113"
  }, ".imageGrid.jsx-3331275113{line-height:0;}.imageGrid.jsx-3331275113 .tile.jsx-3331275113{width:33.33%;min-height:calc(100vh / 4);display:inline-block;background-size:cover;background-position:center center;background-repeat:no-repeat;overflow:hidden;position:relative;cursor:pointer;cursor:hand;}.tile1.jsx-3331275113{background-image:url('/static/images/raph_and_jeff_1.jpg');}.tile2.jsx-3331275113{background-image:url('/static/images/raph_ocean.jpg');}.tile3.jsx-3331275113{background-image:url('/static/images/young_couple_grass.jpg');}.tile4.jsx-3331275113{background-image:url('/static/images/jeff_drink.jpg');}.tile5.jsx-3331275113{background-image:url('/static/images/raph_jeff_sand.jpg');}.tile6.jsx-3331275113{background-image:url('/static/images/raph_cat.jpg');}.tile7.jsx-3331275113{background-image:url('/static/images/raph_makeup.jpg');}.tile8.jsx-3331275113{background-image:url('/static/images/raph_jeff_flower_print.jpg');}.tile9.jsx-3331275113{background-image:url('/static/images/jeff_makeup.jpg');}.tile10.jsx-3331275113{background-image:url('/static/images/jeff_raph_ocean.jpg');}.tile11.jsx-3331275113{background-image:url('/static/images/jeff_raph_mexico_ocean.jpg');}.tile12.jsx-3331275113{background-image:url('/static/images/raph_jeff_music.jpg');background-position-y:100% !important;}@media (max-width:1000px){.imageGrid.jsx-3331275113 .tile.jsx-3331275113{width:50%;}}@media (max-width:700px){.imageGrid.jsx-3331275113 .tile.jsx-3331275113{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1Bob3RvU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmdCLEFBR3VCLEFBR0QsQUFjOEMsQUFHTCxBQUdRLEFBR1IsQUFHSSxBQUdOLEFBR0csQUFHVyxBQUdYLEFBR0ksQUFHTyxBQUdQLEFBTS9DLEFBTUMsVUFMYixDQU1BLEVBM0QyQixDQUg3QiwwQkFJdUIsWUE0QnZCLEVBWkEsQUFNQSxDQVNBLEFBTUEsR0FaQSxDQVpBLEFBMkJBLEFBTXdDLEVBN0NoQixDQWtCeEIsSUFlQSxBQVNBLGlCQXpDb0MsY0E2Q3BDLG9CQTVDOEIsNEJBQ1osZ0JBQ0Usa0JBRUgsZUFDSCxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1Bob3RvU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBob3RvU2VjdGlvbiA9IHByb3BzID0+IChcbiAgPGRpdlxuICAgIHN0eWxlPXt7IGhlaWdodDogcHJvcHMuaGVpZ2h0IH19XG4gICAgaWQ9XCJwaG90by1zZWN0aW9uXCJcbiAgICBjbGFzc05hbWU9XCJzZWN0aW9uLXR3b1wiXG4gID5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZUdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlIHRpbGUxXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlIHRpbGUyXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlIHRpbGUzXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlIHRpbGU0XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlIHRpbGU1XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlIHRpbGU2XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlIHRpbGU3XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlIHRpbGU4XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlIHRpbGU5XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlIHRpbGUxMFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsZSB0aWxlMTFcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTEyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5pbWFnZUdyaWQge1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgIH1cbiAgICAgIC5pbWFnZUdyaWQgLnRpbGUge1xuICAgICAgICB3aWR0aDogMzMuMzMlO1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC8gNCk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY3Vyc29yOiBoYW5kO1xuICAgICAgfVxuXG4gICAgICAudGlsZTEge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3JhcGhfYW5kX2plZmZfMS5qcGcnKTtcbiAgICAgIH1cbiAgICAgIC50aWxlMiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvcmFwaF9vY2Vhbi5qcGcnKTtcbiAgICAgIH1cbiAgICAgIC50aWxlMyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMveW91bmdfY291cGxlX2dyYXNzLmpwZycpO1xuICAgICAgfVxuICAgICAgLnRpbGU0IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9qZWZmX2RyaW5rLmpwZycpO1xuICAgICAgfVxuICAgICAgLnRpbGU1IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9yYXBoX2plZmZfc2FuZC5qcGcnKTtcbiAgICAgIH1cbiAgICAgIC50aWxlNiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvcmFwaF9jYXQuanBnJyk7XG4gICAgICB9XG4gICAgICAudGlsZTcge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3JhcGhfbWFrZXVwLmpwZycpO1xuICAgICAgfVxuICAgICAgLnRpbGU4IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9yYXBoX2plZmZfZmxvd2VyX3ByaW50LmpwZycpO1xuICAgICAgfVxuICAgICAgLnRpbGU5IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9qZWZmX21ha2V1cC5qcGcnKTtcbiAgICAgIH1cbiAgICAgIC50aWxlMTAge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2plZmZfcmFwaF9vY2Vhbi5qcGcnKTtcbiAgICAgIH1cbiAgICAgIC50aWxlMTEge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2plZmZfcmFwaF9tZXhpY29fb2NlYW4uanBnJyk7XG4gICAgICB9XG4gICAgICAudGlsZTEyIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9yYXBoX2plZmZfbXVzaWMuanBnJyk7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgIC5pbWFnZUdyaWQgLnRpbGUge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIC5pbWFnZUdyaWQgLnRpbGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUGhvdG9TZWN0aW9uXG4iXX0= */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/PhotoSection.js */"));
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
  className: "jsx-4179643353" + " " + "button button-2 see-marival-button"
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
}, ".cake.jsx-4179643353{background-image:url(/static/images/cake.svg);width:20rem;height:20rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:1rem;margin-top:2rem;}.see-marival-button.jsx-4179643353{margin-top:1rem;}.see-marival-button.jsx-4179643353:hover{background-color:#e5f6ff;color:#e4c39a;}.marival-details.jsx-4179643353{font-family:LatoHairLine;color:white;font-size:2.4rem;text-align:center;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:800;}.trip-dates.jsx-4179643353{margin-top:1rem;}.wedding-day-title.jsx-4179643353{font-family:WestburySignature;margin-top:1rem;font-size:4rem;color:white;}.wedding-day.jsx-4179643353{color:white;weight:800;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1doZW5TZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFHdUQsQUFVOUIsQUFHUyxBQUlBLEFBUVQsQUFHYyxBQU1sQixZQUNELElBeEJiLEFBZUEsT0FVQSxFQXRCZ0IsQUFJRixLQVdJLE9BVkMsRUFKbkIsT0FkYyxBQTZCRyxRQVZHLElBbEJMLEdBNkJELFVBNUJVLENBa0JILENBV3JCLG9CQTVCbUIsaUJBQ0Msa0JBQ0MsbUJBQ0gsZ0JBQ2xCLEVBY2tCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9KYXBoV2VkZGluZ1NpdGUvY29tcG9uZW50cy9XaGVuU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNwbGl0TGF5b3V0IGZyb20gJy4vbGF5b3V0L1NwbGl0TGF5b3V0J1xuXG5jb25zdCBsZWZ0RWxlbWVudCA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FrZVwiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLTIgc2VlLW1hcml2YWwtYnV0dG9uXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFyaXZhbC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIE1hcml2YWxcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcml2YWwtZGV0YWlsc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlwLWRhdGVzXCI+TWF5IDIzcmQg4oCTIE1heSAzMHRoLCAyMDIwPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZGRpbmctZGF5LXRpdGxlXCI+V2VkZGluZyBEYXk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpcC1kYXRlcyB3ZWRkaW5nLWRhdGVcIj5NYXkgMjV0aCwgMjAyMDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jYWtlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1hZ2VzL2Nha2Uuc3ZnKTtcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xuICAgICAgICBoZWlnaHQ6IDIwcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1tYXJpdmFsLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICB9XG4gICAgICAuc2VlLW1hcml2YWwtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjZmZjtcbiAgICAgICAgY29sb3I6ICNlNGMzOWE7XG4gICAgICB9XG4gICAgICAubWFyaXZhbC1kZXRhaWxzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgfVxuICAgICAgLnRyaXAtZGF0ZXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgfVxuICAgICAgLndlZGRpbmctZGF5LXRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFdlc3RidXJ5U2lnbmF0dXJlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC53ZWRkaW5nLWRheSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2VpZ2h0OiA4MDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5jb25zdCByaWdodEVsZW1lbnQgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlLTIgd2hlbi10aXRsZVwiPldoZW4gJiBXaGVyZTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGUtMyB3aGVuLWRldGFpbHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtbGV0dGVyXCI+Rm9yPC9kaXY+IHRob3NlIG9mIHlvdSB0aGF0IGFyZSBhYmxlIHRvXG4gICAgICBjb21lLCB3ZSBoYXZlIG9yZ2FuaXplZCBvdXIgd2VkZGluZyBhdCB0aGUgTWFyaXZhbCBpbiBOdWV2byBWYWxsYXJ0YSwganVzdFxuICAgICAgb3V0c2lkZSBvZiBQdWVydG8gVmFsbGFydGEuXG4gICAgICA8ZGl2PlxuICAgICAgICBUaGUgcGFja2FnZSB3ZeKAmXZlIG9yZ2FuaXplZCBjb3N0cyBqdXN0IHVuZGVyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtbGV0dGVyXCI+JDE2MDA8L2Rpdj4sIGFuZCBpbmNsdWRlczpcbiAgICAgICAgPGRpdiBkaXI9XCJydGxcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+YWxsIGluY2x1c2l2ZSA3IGRheSBzdGF5PC9saT5cbiAgICAgICAgICAgIDxsaT5haXJmYXJlPC9saT5cbiAgICAgICAgICAgIDxsaT5haXJwb3J0IHNodXR0bGVzPC9saT5cbiAgICAgICAgICAgIDxsaT5vbmUgY2hlY2tlZCBiYWc8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBDaGVjayBvdXQgb3VyIGRldGFpbGVkIGJyZWFrZG93biBvZiB0aGUgY29zdHMgaW52b2x2ZWQsIGFzIHdlbGwgYXMgZGVwb3NpdFxuICAgICAgYW1vdW50cyBhbmQgcGF5bWVudCBkYXRlcy5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwic2VlLWNvc3RzLWNvbnRhaW5lclwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKCdjb3N0cy1zZWN0aW9uJylcbiAgICAgICAgICAgIC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnc3RhcnQnLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLTIgc2VlLWNvc3RzLWJ1dHRvblwiPkNvc3RzPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAud2hlbi10aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTJyZW07XG4gICAgICB9XG4gICAgICAud2hlbi1kZXRhaWxzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgICAuc2VlLWNvc3RzLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICB9XG4gICAgICAuc2VlLWNvc3RzLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY2ZmY7XG4gICAgICAgIGNvbG9yOiAjZTRjMzlhO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuZXhwb3J0IGNvbnN0IFdoZW5TZWN0aW9uID0gcHJvcHMgPT4gKFxuICA8U3BsaXRMYXlvdXRcbiAgICBpZD1cIndoZW4tc2VjdGlvblwiXG4gICAgYmFja2dyb3VuZENvbG9yPVwiI2NhYTE2ZVwiXG4gICAgbGVmdEVsZW1lbnQ9e2xlZnRFbGVtZW50fVxuICAgIHJpZ2h0RWxlbWVudD17cmlnaHRFbGVtZW50fVxuICAvPlxuKVxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/WhenSection.js */"));
var rightElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3711189038" + " " + "title title-2 when-title"
}, "When & Where"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3711189038" + " " + "subtitle-3 when-details"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3711189038" + " " + "first-letter"
}, "For"), " those of you that are able to come, we have organized our wedding at the Marival in Nuevo Vallarta, just outside of Puerto Vallarta.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3711189038"
}, "The package we\u2019ve organized costs just under", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3711189038" + " " + "first-letter"
}, "$1600"), ", and includes:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  dir: "rtl",
  className: "jsx-3711189038"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
  className: "jsx-3711189038"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-3711189038"
}, "all inclusive 7 day stay"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-3711189038"
}, "airfare"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-3711189038"
}, "airport shuttles"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-3711189038"
}, "one checked bag")))), "Check out our detailed breakdown of the costs involved, as well as deposit amounts and payment dates.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  onClick: function onClick() {
    document.getElementById('costs-section').scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  },
  className: "jsx-3711189038" + " " + "see-costs-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-3711189038" + " " + "button button-2 see-costs-button"
}, "Costs"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3711189038"
}, ".when-title.jsx-3711189038{text-align:right;margin-left:-2rem;}.when-details.jsx-3711189038{text-align:right;}.see-costs-button.jsx-3711189038{margin-top:2rem;}.see-costs-button.jsx-3711189038:hover{background-color:#e5f6ff;color:#e4c39a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1doZW5TZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGZ0IsQUFHMEIsQUFJQSxBQUdELEFBR1MsZ0JBRjNCLENBUG9CLEFBSXBCLFFBTWdCLFVBVGhCLElBVUEiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvSmFwaFdlZGRpbmdTaXRlL2NvbXBvbmVudHMvV2hlblNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBTcGxpdExheW91dCBmcm9tICcuL2xheW91dC9TcGxpdExheW91dCdcblxuY29uc3QgbGVmdEVsZW1lbnQgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNha2VcIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi0yIHNlZS1tYXJpdmFsLWJ1dHRvblwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcml2YWwuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICBNYXJpdmFsXG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXJpdmFsLWRldGFpbHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpcC1kYXRlc1wiPk1heSAyM3JkIOKAkyBNYXkgMzB0aCwgMjAyMDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWRkaW5nLWRheS10aXRsZVwiPldlZGRpbmcgRGF5PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaXAtZGF0ZXMgd2VkZGluZy1kYXRlXCI+TWF5IDI1dGgsIDIwMjA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2FrZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltYWdlcy9jYWtlLnN2Zyk7XG4gICAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5zZWUtbWFyaXZhbC1idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1tYXJpdmFsLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY2ZmY7XG4gICAgICAgIGNvbG9yOiAjZTRjMzlhO1xuICAgICAgfVxuICAgICAgLm1hcml2YWwtZGV0YWlscyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIH1cbiAgICAgIC50cmlwLWRhdGVzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIH1cbiAgICAgIC53ZWRkaW5nLWRheS10aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBXZXN0YnVyeVNpZ25hdHVyZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAud2VkZGluZy1kYXkge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdlaWdodDogODAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuY29uc3QgcmlnaHRFbGVtZW50ID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZS0yIHdoZW4tdGl0bGVcIj5XaGVuICYgV2hlcmU8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlLTMgd2hlbi1kZXRhaWxzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0LWxldHRlclwiPkZvcjwvZGl2PiB0aG9zZSBvZiB5b3UgdGhhdCBhcmUgYWJsZSB0b1xuICAgICAgY29tZSwgd2UgaGF2ZSBvcmdhbml6ZWQgb3VyIHdlZGRpbmcgYXQgdGhlIE1hcml2YWwgaW4gTnVldm8gVmFsbGFydGEsIGp1c3RcbiAgICAgIG91dHNpZGUgb2YgUHVlcnRvIFZhbGxhcnRhLlxuICAgICAgPGRpdj5cbiAgICAgICAgVGhlIHBhY2thZ2Ugd2XigJl2ZSBvcmdhbml6ZWQgY29zdHMganVzdCB1bmRlclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0LWxldHRlclwiPiQxNjAwPC9kaXY+LCBhbmQgaW5jbHVkZXM6XG4gICAgICAgIDxkaXYgZGlyPVwicnRsXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPmFsbCBpbmNsdXNpdmUgNyBkYXkgc3RheTwvbGk+XG4gICAgICAgICAgICA8bGk+YWlyZmFyZTwvbGk+XG4gICAgICAgICAgICA8bGk+YWlycG9ydCBzaHV0dGxlczwvbGk+XG4gICAgICAgICAgICA8bGk+b25lIGNoZWNrZWQgYmFnPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgQ2hlY2sgb3V0IG91ciBkZXRhaWxlZCBicmVha2Rvd24gb2YgdGhlIGNvc3RzIGludm9sdmVkLCBhcyB3ZWxsIGFzIGRlcG9zaXRcbiAgICAgIGFtb3VudHMgYW5kIHBheW1lbnQgZGF0ZXMuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInNlZS1jb3N0cy1jb250YWluZXJcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgnY29zdHMtc2VjdGlvbicpXG4gICAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ3N0YXJ0JywgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi0yIHNlZS1jb3N0cy1idXR0b25cIj5Db3N0czwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLndoZW4tdGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xuICAgICAgfVxuICAgICAgLndoZW4tZGV0YWlscyB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgICAgLnNlZS1jb3N0cy1idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1jb3N0cy1idXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmNmZmO1xuICAgICAgICBjb2xvcjogI2U0YzM5YTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBXaGVuU2VjdGlvbiA9IHByb3BzID0+IChcbiAgPFNwbGl0TGF5b3V0XG4gICAgaWQ9XCJ3aGVuLXNlY3Rpb25cIlxuICAgIGJhY2tncm91bmRDb2xvcj1cIiNjYWExNmVcIlxuICAgIGxlZnRFbGVtZW50PXtsZWZ0RWxlbWVudH1cbiAgICByaWdodEVsZW1lbnQ9e3JpZ2h0RWxlbWVudH1cbiAgLz5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/WhenSection.js */"));
var WhenSection = function WhenSection(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout_SplitLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "when-section",
    backgroundColor: "#caa16e",
    leftElement: leftElement,
    rightElement: rightElement
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
    style: props.style,
    className: "jsx-4044017870" + " " + (props.className || "")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4044017870" + " " + "mobile-content-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4044017870" + " " + "wrapper"
  }, props.content)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4044017870"
  }, ".mobile-content-container.jsx-4044017870{padding-left:5%;padding-right:5%;}.wrapper.jsx-4044017870{min-width:34rem;padding-top:3%;margin-left:auto;margin-right:auto;}@media (max-width:600px){.wrapper.jsx-4044017870{min-width:30rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL2xheW91dC9Nb2JpbGVMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2dCLEFBR3lCLEFBSUEsQUFPRSxnQkFWRCxBQUlGLEFBT2YsZUFOaUIsRUFKbkIsZUFLb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL2xheW91dC9Nb2JpbGVMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNb2JpbGVMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxkaXYgaWQ9e3Byb3BzLmlkfSBzdHlsZT17cHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1jb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+e3Byb3BzLmNvbnRlbnR9PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLm1vYmlsZS1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgICAgfVxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBtaW4td2lkdGg6IDM0cmVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogMyU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIG1pbi13aWR0aDogMzByZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/layout/MobileLayout.js */"));
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
      backgroundColor: props.backgroundColor
    },
    className: "jsx-1269188422" + " " + "section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1269188422" + " " + "main-content-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1269188422" + " " + "split-wrapper container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1269188422"
  }, props.leftElement)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1269188422" + " " + "split-wrapper container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1269188422"
  }, props.rightElement))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1269188422"
  }, ".main-content-container.jsx-1269188422{max-width:95rem;margin-left:auto;margin-right:auto;padding-top:16rem;padding-bottom:16rem;padding-left:10rem;padding-right:10rem;}.split-wrapper.jsx-1269188422{width:50%;position:relative;display:inline-block;}.left-container.jsx-1269188422{float:left;}.right-container.jsx-1269188422{float:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL2xheW91dC9TcGxpdExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjZ0IsQUFHeUIsQUFTTixBQUtDLEFBR0MsVUFQTSxDQUtwQixDQUdBLElBakJtQixZQVVJLEtBVEgsZ0JBVXBCLEVBVG9CLGtCQUNHLHFCQUNGLG1CQUNDLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9KYXBoV2VkZGluZ1NpdGUvY29tcG9uZW50cy9sYXlvdXQvU3BsaXRMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTcGxpdExheW91dCA9IHByb3BzID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT1cInNlY3Rpb25cIlxuICAgIGlkPXtwcm9wcy5pZH1cbiAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmJhY2tncm91bmRDb2xvciB9fVxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwbGl0LXdyYXBwZXIgY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXY+e3Byb3BzLmxlZnRFbGVtZW50fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwbGl0LXdyYXBwZXIgY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXY+e3Byb3BzLnJpZ2h0RWxlbWVudH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA5NXJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xuICAgICAgfVxuICAgICAgLnNwbGl0LXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIC5sZWZ0LWNvbnRhaW5lciB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgICAgLnJpZ2h0LWNvbnRhaW5lciB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTcGxpdExheW91dFxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/layout/SplitLayout.js */"));
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
    className: "jsx-231711646" + " " + "section section-five"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "costs-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "mobile-booking"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "title title-2 booking-title"
  }, "Booking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "title dates-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646"
  }, "$500 USD deposit is required"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "cost-date"
  }, "September 3rd, 2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646"
  }, "Full amount is due"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "cost-date"
  }, "March 4th, 2020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "title title-3 total-cost-title"
  }, "Total Cost"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "sub-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "title location-title"
  }, "Leaving From Kelowna"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "title-4 left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "left-item"
  }, "Adult"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "left-item"
  }, "Ages 7-12"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "left-item"
  }, "Ages 2-6")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "title-4 right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "right-item"
  }, "$1544.35"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "right-item"
  }, "$1196.07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "right-item"
  }, "$887.54"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "sub-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "title location-title"
  }, "Leaving From Vancouver"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "title-4 left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "left-item"
  }, "Adult"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "left-item"
  }, "Ages 7-12"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "left-item"
  }, "Ages 2-6")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "title-4 right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "right-item"
  }, "$1559.35"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "right-item"
  }, "$1206.07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "right-item"
  }, "$897.54"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "title final-note"
  }, "All rates include round trip airfare, round trip airport transfers, 7 nights all-inclusive accommodation, one checked bag per person and seat selection with the group towards the rear of the aircraft."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "title final-note"
  }, "This pricing is Guaranteed for the first 20 people who pay the deposit, and prices beyond those first 20 should still be very close to these rates, but are not guaranteed"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "title final-note"
  }, "Bookings can be done through our travel agent Holly Graves at"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "final-email"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:holly.graves@flightcentre.ca",
    className: "jsx-231711646"
  }, "holly.graves@flightcentre.ca", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-231711646" + " " + "mail-icon"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "231711646"
  }, ".section-five.jsx-231711646{background:#7c769e;padding-top:10rem;margin-top:-5rem;}.mobile-booking.jsx-231711646{background-image:url(/static/images/booking.svg);width:10rem;height:10rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:2rem;margin-top:6rem;}.booking-title.jsx-231711646{margin-bottom:1rem;}.dates-container.jsx-231711646{font-size:1.4rem;color:white;}.cost-date.jsx-231711646{font-family:Laila,serif;margin-bottom:1rem;font-weight:800;}.total-cost-title.jsx-231711646{margin-bottom:1rem;}.sub-container.jsx-231711646{clear:both;font-size:2rem;}.location-title.jsx-231711646{margin-top:1rem;margin-bottom:1rem;font-size:1.4rem;color:white;}.left.jsx-231711646{width:50%;float:left;text-align:right;margin-bottom:1rem;}.left-item.jsx-231711646{margin-left:auto;margin-right:1rem;}.right.jsx-231711646{width:50%;float:right;text-align:left;font-family:Laila;font-size:1.6rem;margin-bottom:1rem;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}.final-note.jsx-231711646{font-family:Laila;font-size:1.2rem;margin-left:auto;margin-right:auto;margin-bottom:1rem;clear:both;color:white;max-width:35rem;}.final-email.jsx-231711646{font-family:Laila,serif;font-size:1.2rem;color:white;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;margin-bottom:5rem;}.mail-icon.jsx-231711646{background-image:url(/static/images/mail.svg);width:5rem;height:5rem;background-size:cover;margin-left:auto;margin-right:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9Db3N0c1NlY3Rpb25Nb2JpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERnQixBQUc0QixBQUs4QixBQVU5QixBQUdGLEFBSVEsQUFLTixBQUdSLEFBSUssQUFNTixBQU1PLEFBSVAsQUFTUSxBQVVPLEFBU3FCLFVBckNuQyxBQVVDLENBcEJHLEtBSUksQ0FoQlAsQUE0Qk0sQ0FhRCxDQTNEQyxBQWVwQixBQVlBLEVBY21CLENBVUQsRUE3QkcsQUErQ0YsRUF0Q25CLEdBWkEsTUFnQm1CLEFBWW5CLEFBYW1CLEVBM0RBLENBeUNFLEFBVUQsR0FrQk4sRUEvQ0ksR0F1REwsR0F6RUMsR0ErQkEsQUF5Qk0sQ0FVTyxDQXJFM0IsRUFtRG1CLENBVm5CLEFBb0NjLEVBdkRkLEVBbEJlLEdBK0JmLEtBMkN3QixDQWxCSCxHQVJBLENBL0NHLElBaUVOLFdBVEwsRUFrQk0sQ0ExQkUsRUFrQkEsRUFqRUYsSUF3REwsUUFrQk0sSUFqQkYsQ0F4REUsYUEwRXBCLEVBakJBLEdBeERxQixtQkFDSCxnQkFDbEIsbUJBNENBLEVBa0JxQixtQkFDckIiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvSmFwaFdlZGRpbmdTaXRlL2NvbXBvbmVudHMvbW9iaWxlL0Nvc3RzU2VjdGlvbk1vYmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBDb3N0c1NlY3Rpb25Nb2JpbGUgPSBwcm9wcyA9PiAoXG4gIDxkaXYgaWQ9XCJjb3N0cy1zZWN0aW9uXCIgY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLWZpdmVcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvc3RzLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLWJvb2tpbmdcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZS0yIGJvb2tpbmctdGl0bGVcIj5Cb29raW5nPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGRhdGVzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2PiQ1MDAgVVNEIGRlcG9zaXQgaXMgcmVxdWlyZWQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3N0LWRhdGVcIj5TZXB0ZW1iZXIgM3JkLCAyMDE5PC9kaXY+XG4gICAgICAgIDxkaXY+RnVsbCBhbW91bnQgaXMgZHVlPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdC1kYXRlXCI+TWFyY2ggNHRoLCAyMDIwPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtMyB0b3RhbC1jb3N0LXRpdGxlXCI+VG90YWwgQ29zdDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbG9jYXRpb24tdGl0bGVcIj5MZWF2aW5nIEZyb20gS2Vsb3duYTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLTQgbGVmdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1pdGVtXCI+QWR1bHQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtaXRlbVwiPkFnZXMgNy0xMjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1pdGVtXCI+QWdlcyAyLTY8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtNCByaWdodFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtaXRlbVwiPiQxNTQ0LjM1PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1pdGVtXCI+JDExOTYuMDc8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWl0ZW1cIj4kODg3LjU0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBsb2NhdGlvbi10aXRsZVwiPkxlYXZpbmcgRnJvbSBWYW5jb3V2ZXI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS00IGxlZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtaXRlbVwiPkFkdWx0PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWl0ZW1cIj5BZ2VzIDctMTI8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtaXRlbVwiPkFnZXMgMi02PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLTQgcmlnaHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWl0ZW1cIj4kMTU1OS4zNTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtaXRlbVwiPiQxMjA2LjA3PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1pdGVtXCI+JDg5Ny41NDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBmaW5hbC1ub3RlXCI+XG4gICAgICAgIEFsbCByYXRlcyBpbmNsdWRlIHJvdW5kIHRyaXAgYWlyZmFyZSwgcm91bmQgdHJpcCBhaXJwb3J0IHRyYW5zZmVycywgN1xuICAgICAgICBuaWdodHMgYWxsLWluY2x1c2l2ZSBhY2NvbW1vZGF0aW9uLCBvbmUgY2hlY2tlZCBiYWcgcGVyIHBlcnNvbiBhbmQgc2VhdFxuICAgICAgICBzZWxlY3Rpb24gd2l0aCB0aGUgZ3JvdXAgdG93YXJkcyB0aGUgcmVhciBvZiB0aGUgYWlyY3JhZnQuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgZmluYWwtbm90ZVwiPlxuICAgICAgICBUaGlzIHByaWNpbmcgaXMgR3VhcmFudGVlZCBmb3IgdGhlIGZpcnN0IDIwIHBlb3BsZSB3aG8gcGF5IHRoZSBkZXBvc2l0LFxuICAgICAgICBhbmQgcHJpY2VzIGJleW9uZCB0aG9zZSBmaXJzdCAyMCBzaG91bGQgc3RpbGwgYmUgdmVyeSBjbG9zZSB0byB0aGVzZVxuICAgICAgICByYXRlcywgYnV0IGFyZSBub3QgZ3VhcmFudGVlZFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGZpbmFsLW5vdGVcIj5cbiAgICAgICAgQm9va2luZ3MgY2FuIGJlIGRvbmUgdGhyb3VnaCBvdXIgdHJhdmVsIGFnZW50IEhvbGx5IEdyYXZlcyBhdFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbmFsLWVtYWlsXCI+XG4gICAgICAgIDxhIGhyZWY9XCJtYWlsdG86aG9sbHkuZ3JhdmVzQGZsaWdodGNlbnRyZS5jYVwiPlxuICAgICAgICAgIGhvbGx5LmdyYXZlc0BmbGlnaHRjZW50cmUuY2FcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haWwtaWNvblwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zZWN0aW9uLWZpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjN2M3NjllO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTByZW07XG4gICAgICAgIG1hcmdpbi10b3A6IC01cmVtO1xuICAgICAgfVxuICAgICAgLm1vYmlsZS1ib29raW5nIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1hZ2VzL2Jvb2tpbmcuc3ZnKTtcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICBoZWlnaHQ6IDEwcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiA2cmVtO1xuICAgICAgfVxuICAgICAgLmJvb2tpbmctdGl0bGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgfVxuICAgICAgLmRhdGVzLWNvbnRhaW5lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAuY29zdC1kYXRlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhaWxhLCBzZXJpZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIH1cbiAgICAgIC50b3RhbC1jb3N0LXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5zdWItY29udGFpbmVyIHtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5sb2NhdGlvbi10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAubGVmdCB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5sZWZ0LWl0ZW0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgICAgLnJpZ2h0IHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LWZhbWlseTogTGFpbGE7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgfVxuICAgICAgLmZpbmFsLW5vdGUge1xuICAgICAgICBmb250LWZhbWlseTogTGFpbGE7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXgtd2lkdGg6IDM1cmVtO1xuICAgICAgfVxuICAgICAgLmZpbmFsLWVtYWlsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhaWxhLCBzZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgICAgIH1cbiAgICAgIC5tYWlsLWljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvbWFpbC5zdmcpO1xuICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/mobile/CostsSectionMobile.js */"));
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
  className: "jsx-2190497632" + " " + "info-section"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2190497632" + " " + "mobile-dolphin"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2190497632" + " " + "title title-2 info-title"
}, "Info"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2190497632" + " " + "info-text title-left"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2190497632" + " " + "first-letter"
}, "If"), " you\u2019ve made it this far, there\u2019s a good chance we\u2019ve invited you to our wedding in Mexico! There\u2019s also a good chance that you\u2019d love to come, but are unable to make it work due to cost or time constraints or any other reason, and we totally understand that, and take no offense or anything like that! We love you all!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  onClick: function onClick() {
    document.getElementById('when-section').scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  },
  className: "jsx-2190497632" + " " + "see-when-button-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2190497632" + " " + "button button-1 see-when-button"
}, "When & Where")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2190497632"
}, ".mobile-dolphin.jsx-2190497632{background-image:url(/static/images/dolphin.svg);width:12rem;height:12rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:2rem;margin-top:6rem;}.info-title.jsx-2190497632{margin-bottom:2rem;}.info-text.jsx-2190497632{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:800;color:white;font-size:2rem;}.see-when-button-container.jsx-2190497632{height:15rem;}.see-when-button.jsx-2190497632{margin-top:4rem;margin-bottom:4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9JbmZvU2VjdGlvbk1vYmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCLEFBRzBELEFBVTlCLEFBR0EsQUFNTixBQUdHLGFBRmxCLEdBR3FCLEdBWnJCLGdCQWFBLGNBdkJjLFlBQ0MsYUFDUyxtQkFXTixHQVZDLGFBV0wsSUFWTSxRQVdILFVBVkksS0FXckIsY0FWa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9JbmZvU2VjdGlvbk1vYmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IE1vYmlsZUxheW91dCBmcm9tICcuLi9sYXlvdXQvTW9iaWxlTGF5b3V0J1xuXG5jb25zdCBtb2JpbGVDb250ZW50ID0gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tc2VjdGlvblwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLWRvbHBoaW5cIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtMiBpbmZvLXRpdGxlXCI+SW5mbzwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby10ZXh0IHRpdGxlLWxlZnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtbGV0dGVyXCI+SWY8L2Rpdj4geW914oCZdmUgbWFkZSBpdCB0aGlzIGZhciwgdGhlcmXigJlzIGFcbiAgICAgIGdvb2QgY2hhbmNlIHdl4oCZdmUgaW52aXRlZCB5b3UgdG8gb3VyIHdlZGRpbmcgaW4gTWV4aWNvISBUaGVyZeKAmXMgYWxzbyBhXG4gICAgICBnb29kIGNoYW5jZSB0aGF0IHlvdeKAmWQgbG92ZSB0byBjb21lLCBidXQgYXJlIHVuYWJsZSB0byBtYWtlIGl0IHdvcmsgZHVlIHRvXG4gICAgICBjb3N0IG9yIHRpbWUgY29uc3RyYWludHMgb3IgYW55IG90aGVyIHJlYXNvbiwgYW5kIHdlIHRvdGFsbHkgdW5kZXJzdGFuZFxuICAgICAgdGhhdCwgYW5kIHRha2Ugbm8gb2ZmZW5zZSBvciBhbnl0aGluZyBsaWtlIHRoYXQhIFdlIGxvdmUgeW91IGFsbCFcbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJzZWUtd2hlbi1idXR0b24tY29udGFpbmVyXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ3doZW4tc2VjdGlvbicpXG4gICAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdzdGFydCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tMSBzZWUtd2hlbi1idXR0b25cIj5XaGVuICYgV2hlcmU8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubW9iaWxlLWRvbHBoaW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvZG9scGhpbi5zdmcpO1xuICAgICAgICB3aWR0aDogMTJyZW07XG4gICAgICAgIGhlaWdodDogMTJyZW07XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDZyZW07XG4gICAgICB9XG4gICAgICAuaW5mby10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICB9XG4gICAgICAuaW5mby10ZXh0IHtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICB9XG4gICAgICAuc2VlLXdoZW4tYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICB9XG4gICAgICAuc2VlLXdoZW4tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgY29uc3QgSW5mb1NlY3Rpb25Nb2JpbGUgPSAoKSA9PiAoXG4gIDxNb2JpbGVMYXlvdXRcbiAgICBpZD1cImluZm8tc2VjdGlvblwiXG4gICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzUxODlCQycsIHpJbmRleDogMiB9fVxuICAgIGNvbnRlbnQ9e21vYmlsZUNvbnRlbnR9XG4gICAgY2xhc3NOYW1lPVwic2VjdGlvbiBjbGlwLXBhdGgtMVwiXG4gIC8+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/mobile/InfoSectionMobile.js */"));
var InfoSectionMobile = function InfoSectionMobile() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout_MobileLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "info-section",
    style: {
      backgroundColor: '#5189BC',
      zIndex: 2
    },
    content: mobileContent,
    className: "section clip-path-1"
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



var mobileContent = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "mobile-cake"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "title title-2"
}, "When & Where"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "title-3"
}, "May 23rd \u2013 May 30th, 2020"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "title-3 font-westbury wedding-day-title"
}, "Wedding Day"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "title-3"
}, "May 25th, 2020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "subtitle-3 wedding-details-container"
}, "For those of you that are able to come, we have organized...", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "marival-title-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "marival-title"
}, "Marival"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "marival-subtitle"
}, "Nuevo Vallarta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "marival-subtitle"
}, "Mexico")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "images-and-bullets-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "mobile-image-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://www.marival.com/",
  target: "_blank",
  className: "jsx-2017406102"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "mobile-mexico"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "mobile-marival"
}))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "bullet-list-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  dir: "rtl",
  className: "jsx-2017406102"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
  className: "jsx-2017406102"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-2017406102"
}, "all inclusive"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-2017406102"
}, "seven day stay"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-2017406102"
}, "airfare"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-2017406102"
}, "airport shuttles"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-2017406102"
}, "one checked bag"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  onClick: function onClick() {
    document.getElementById('costs-section').scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  },
  className: "jsx-2017406102" + " " + "see-costs-button-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2017406102" + " " + "button button-2 see-costs-button"
}, "See Details"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2017406102"
}, ".mobile-cake.jsx-2017406102{background-image:url(/static/images/cake.svg);width:10rem;height:10rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:1rem;margin-top:8rem;}.wedding-day-title.jsx-2017406102{margin-top:1rem;font-size:4rem;}.wedding-details-container.jsx-2017406102{margin-top:1.4rem;}.marival-title-container.jsx-2017406102{margin-top:1rem;}.marival-title.jsx-2017406102{font-size:3rem;}.images-and-bullets-container.jsx-2017406102{max-width:40rem;margin-left:auto;margin-right:auto;}.mobile-image-container.jsx-2017406102{width:50%;float:left;}.mobile-mexico.jsx-2017406102{background-image:url(/static/images/mexico.png);width:14rem;height:14rem;background-size:cover;margin-right:auto;margin-top:1.5rem;margin-bottom:0.5rem;margin-left:1rem;}.mobile-marival.jsx-2017406102{background-image:url(/static/images/Marival-small.png);width:9rem;height:9rem;background-size:cover;margin-left:5rem;margin-right:auto;margin-top:-5.5rem;margin-bottom:0.5rem;}.bullet-list-container.jsx-2017406102{display:inline-block;width:50%;float:right;text-align:right;margin-top:1rem;margin-bottom:1rem;}.see-costs-button-container.jsx-2017406102{clear:both;padding-top:3rem;height:20rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9XaGVuU2VjdGlvbk1vYmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGdCLEFBR3VELEFBVTlCLEFBSUUsQUFHRixBQUdELEFBR0MsQUFLTixBQUlzQyxBQVVPLEFBVWxDLEFBUVYsVUEvQkEsQ0FnQ00sSUF4Q25CLENBVmlCLEFBT2pCLEFBTW1CLEVBVG5CLEdBZUEsQUF1QlksT0FTRyxHQWxEZixBQTBDYyxFQTdCTSxRQXNDcEIsRUFSbUIsR0F0REwsRUFnQ0EsR0FQZCxJQWlCYSxHQXpDRSxFQWdDQSxBQXNCRyxNQVpKLEtBekNVLEVBZ0NBLEdBc0JILEVBWkcsZUF6Q0wsRUFnQ0MsQUFzQnBCLEtBWm1CLFVBekNDLEdBZ0NBLElBVUEsV0F6Q0MsR0FnQ0UsSUFVRixZQXpDSCxLQWdDQyxFQVVJLFNBekN2QixNQWdDQSxNQVVBIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9XaGVuU2VjdGlvbk1vYmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IE1vYmlsZUxheW91dCBmcm9tICcuLi9sYXlvdXQvTW9iaWxlTGF5b3V0J1xuXG5jb25zdCBtb2JpbGVDb250ZW50ID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtY2FrZVwiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZS0yXCI+V2hlbiAmIFdoZXJlPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtM1wiPk1heSAyM3JkIOKAkyBNYXkgMzB0aCwgMjAyMDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS0zIGZvbnQtd2VzdGJ1cnkgd2VkZGluZy1kYXktdGl0bGVcIj5XZWRkaW5nIERheTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS0zXCI+TWF5IDI1dGgsIDIwMjA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlLTMgd2VkZGluZy1kZXRhaWxzLWNvbnRhaW5lclwiPlxuICAgICAgRm9yIHRob3NlIG9mIHlvdSB0aGF0IGFyZSBhYmxlIHRvIGNvbWUsIHdlIGhhdmUgb3JnYW5pemVkLi4uXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcml2YWwtdGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyaXZhbC10aXRsZVwiPk1hcml2YWw8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJpdmFsLXN1YnRpdGxlXCI+TnVldm8gVmFsbGFydGE8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJpdmFsLXN1YnRpdGxlXCI+TWV4aWNvPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VzLWFuZC1idWxsZXRzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFyaXZhbC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZXhpY29cIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbWFyaXZhbFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWxsZXQtbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+YWxsIGluY2x1c2l2ZTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5zZXZlbiBkYXkgc3RheTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5haXJmYXJlPC9saT5cbiAgICAgICAgICAgICAgPGxpPmFpcnBvcnQgc2h1dHRsZXM8L2xpPlxuICAgICAgICAgICAgICA8bGk+b25lIGNoZWNrZWQgYmFnPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInNlZS1jb3N0cy1idXR0b24tY29udGFpbmVyXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2Nvc3RzLXNlY3Rpb24nKVxuICAgICAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdzdGFydCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tMiBzZWUtY29zdHMtYnV0dG9uXCI+U2VlIERldGFpbHM8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tb2JpbGUtY2FrZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltYWdlcy9jYWtlLnN2Zyk7XG4gICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogOHJlbTtcbiAgICAgIH1cbiAgICAgIC53ZWRkaW5nLWRheS10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgIH1cbiAgICAgIC53ZWRkaW5nLWRldGFpbHMtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS40cmVtO1xuICAgICAgfVxuICAgICAgLm1hcml2YWwtdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5tYXJpdmFsLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgfVxuICAgICAgLmltYWdlcy1hbmQtYnVsbGV0cy1jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDQwcmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgICAgLm1vYmlsZS1pbWFnZS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICAgIC5tb2JpbGUtbWV4aWNvIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1hZ2VzL21leGljby5wbmcpO1xuICAgICAgICB3aWR0aDogMTRyZW07XG4gICAgICAgIGhlaWdodDogMTRyZW07XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgfVxuICAgICAgLm1vYmlsZS1tYXJpdmFsIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1hZ2VzL01hcml2YWwtc21hbGwucG5nKTtcbiAgICAgICAgd2lkdGg6IDlyZW07XG4gICAgICAgIGhlaWdodDogOXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogLTUuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgfVxuICAgICAgLmJ1bGxldC1saXN0LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5zZWUtY29zdHMtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBXaGVuU2VjdGlvbk1vYmlsZSA9ICgpID0+IChcbiAgPE1vYmlsZUxheW91dFxuICAgIGlkPVwid2hlbi1zZWN0aW9uXCJcbiAgICBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2NhYTE2ZScsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBtYXJnaW5Ub3A6ICctNXJlbScsXG4gICAgfX1cbiAgICBjb250ZW50PXttb2JpbGVDb250ZW50fVxuICAgIGNsYXNzTmFtZT1cInNlY3Rpb24gY2xpcC1wYXRoLTFcIlxuICAvPlxuKVxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/mobile/WhenSectionMobile.js */"));
var WhenSectionMobile = function WhenSectionMobile() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout_MobileLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "when-section",
    style: {
      backgroundColor: '#caa16e',
      zIndex: 1,
      marginTop: '-5rem'
    },
    content: mobileContent,
    className: "section clip-path-1"
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
      var _this$state = this.state,
          height = _this$state.height,
          width = _this$state.width;
      var showMobile = width < 700;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1753849263" + " " + "section-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-1753849263"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_IntroSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        height: height
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_PhotoSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
        height: height
      }), showMobile ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_mobile_InfoSectionMobile__WEBPACK_IMPORTED_MODULE_13__["InfoSectionMobile"], null) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_InfoSection__WEBPACK_IMPORTED_MODULE_12__["InfoSection"], null), showMobile ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_mobile_WhenSectionMobile__WEBPACK_IMPORTED_MODULE_15__["WhenSectionMobile"], null) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_WhenSection__WEBPACK_IMPORTED_MODULE_14__["WhenSection"], null), showMobile ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_mobile_CostsSectionMobile__WEBPACK_IMPORTED_MODULE_17__["CostsSectionMobile"], null) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_CostsSection__WEBPACK_IMPORTED_MODULE_16__["CostsSection"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1753849263"
      }, "@font-face{font-family:WestburySignature;src:url('/static/fonts/WestburySignature.otf') format('opentype');}@font-face{font-family:LatoHairLine;src:url('/static/fonts/Lato-Hairline.ttf') format('truetype');}@font-face{font-family:LatoLight;src:url('/static/fonts/Lato-Light.ttf') format('truetype');}@font-face{font-family:Laila;src:url('/static/fonts/Laila-Regular.ttf') format('truetype');}*{box-sizing:border-box;}html,body{margin:0;padding:0;height:100vh;overflow-y:scroll;overflow-x:hidden;font-size:62.5%;background-color:#7c769e;font-family:LatoLight,serif;}a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}.abs{position:absolute;top:50%;left:50%;text-align:center;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.align-left{text-align:left;}.section{position:relative;text-align:center;}.content-container{height:100%;}.title{text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;min-width:35rem;}.title-1{font-size:5rem;color:#c2d2f5;}.title-2{font-size:4rem;color:white;}.title-3{color:white;font-size:3rem;}.title-4{color:white;font-size:2rem;}.title-5{color:white;font-size:1rem;}.title-left{text-align:left;}.subtitle{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:800;}.subtitle-1{color:#c2d2f5;font-size:2.4rem;}.subtitle-2{color:white;font-size:2.4rem;}.subtitle-3{color:white;font-size:1.8rem;}.first-letter{font-size:3rem;display:inline-block;font-family:Laila,serif;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}.font-westbury{font-family:WestburySignature;}.button{text-transform:uppercase;margin-left:auto;margin-right:auto;border-radius:5rem;cursor:pointer;text-align:center;padding-top:1rem;padding-bottom:1rem;width:20rem;}.button-1{color:#c2d2f5;font-size:2rem;border:1px solid #c2d2f5;}.button-2{color:white;font-size:2rem;border:1px solid white;}.lastSection{display:none;}.clip-path-1{-webkit-clip-path:polygon(0 0,100% 0,100% 95%,50% 100%,0 95%);-webkit-clip-path:polygon(0 0,100% 0,100% 95%,50% 100%,0 95%);clip-path:polygon(0 0,100% 0,100% 95%,50% 100%,0 95%);}@media (max-width:950px){.lastSection{display:block !important;}}@media (max-width:600px){.title{min-width:30rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRDJCLEFBRzJDLEFBSUwsQUFJSCxBQUlKLEFBSUksQUFJYixBQVVZLEFBSUgsQUFRRixBQUdFLEFBSU4sQUFHYSxBQU1WLEFBSUEsQUFJSCxBQUlBLEFBSUEsQUFJSSxBQUdHLEFBSUwsQUFJRixBQUlBLEFBSUcsQUFNZSxBQUdMLEFBV1gsQUFLRixBQUtDLEFBR3FELEFBS3ZDLEFBS1QsU0F2SFIsR0E2QlosQUFpQmlCLEFBSUEsQUFJQSxBQWVFLEFBSUEsQUE2QkYsQ0FLakIsQ0ExQ21CLEFBZ0NGLENBM0RELEFBSUYsQUFtQ1MsQ0F2RHZCLEFBb0NBLEFBOERFLEVBaEk4RCxBQXNCdEQsQUFXVSxDQXhCTCxHQWI4QyxBQVE3RCxHQVpnRSxBQWdEOUMsQUFzREMsQUE2QmpCLENBcEdTLENBNEJYLEFBSUEsQUFJQSxBQUlBLEFBZ0R5QixFQWhFekIsQUErQkEsQUFJQSxBQXdCMkIsQ0F0SHlDLEFBdUdwRSxDQWpCQSxDQWhFb0IsR0FjQSxDQVVwQixBQW9EMkIsS0E3Q04sQ0FzREQsUUFwRkEsQUFPSixBQThGaEIsR0F2RjBDLENBa0YxQyxNQXBCcUIsQUFTQSxFQXNCdUMsRUFuRzVELElBUGtCLFdBcUZELENBaEdqQixDQUpBLEdBZ0IyQixHQXBCM0IsS0FpQ2tDLENBMkNoQixDQTZCRSxFQTdHcEIsYUF5QitCLEFBd0QvQixHQTZCbUIsaUJBQ0csS0ExREosR0EzQmxCLFlBc0ZjLENBMURkLEdBNkNBLFFBY0EsaUJBaUJBLG1CQTVGQSIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9KYXBoV2VkZGluZ1NpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW50cm9TZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvSW50cm9TZWN0aW9uJ1xuaW1wb3J0IFBob3RvU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1Bob3RvU2VjdGlvbidcbmltcG9ydCB7IEluZm9TZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9JbmZvU2VjdGlvbidcbmltcG9ydCB7IEluZm9TZWN0aW9uTW9iaWxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2JpbGUvSW5mb1NlY3Rpb25Nb2JpbGUnXG5pbXBvcnQgeyBXaGVuU2VjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvV2hlblNlY3Rpb24nXG5pbXBvcnQgeyBXaGVuU2VjdGlvbk1vYmlsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbW9iaWxlL1doZW5TZWN0aW9uTW9iaWxlJ1xuaW1wb3J0IHsgQ29zdHNTZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db3N0c1NlY3Rpb24nXG5pbXBvcnQgeyBDb3N0c1NlY3Rpb25Nb2JpbGUgfSBmcm9tICcuLi9jb21wb25lbnRzL21vYmlsZS9Db3N0c1NlY3Rpb25Nb2JpbGUnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICB9XG5cbiAgdXBkYXRlRGltZW5zaW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZURpbWVuc2lvbnMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVEaW1lbnNpb25zKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHNob3dNb2JpbGUgPSB3aWR0aCA8IDcwMFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEludHJvU2VjdGlvbiBoZWlnaHQ9e2hlaWdodH0gLz5cbiAgICAgICAgPFBob3RvU2VjdGlvbiBoZWlnaHQ9e2hlaWdodH0gLz5cbiAgICAgICAge3Nob3dNb2JpbGUgPyA8SW5mb1NlY3Rpb25Nb2JpbGUgLz4gOiA8SW5mb1NlY3Rpb24gLz59XG4gICAgICAgIHtzaG93TW9iaWxlID8gPFdoZW5TZWN0aW9uTW9iaWxlIC8+IDogPFdoZW5TZWN0aW9uIC8+fVxuICAgICAgICB7c2hvd01vYmlsZSA/IDxDb3N0c1NlY3Rpb25Nb2JpbGUgLz4gOiA8Q29zdHNTZWN0aW9uIC8+fVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFdlc3RidXJ5U2lnbmF0dXJlO1xuICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvV2VzdGJ1cnlTaWduYXR1cmUub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9MYXRvLUhhaXJsaW5lLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0b0xpZ2h0O1xuICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvTGF0by1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhaWxhO1xuICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvTGFpbGEtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2Mi41JTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3Yzc2OWU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0b0xpZ2h0LCBzZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFicyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFsaWduLWxlZnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlLTEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgICAgICAgY29sb3I6ICNjMmQyZjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZS0yIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlLTMge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUtNCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZS01IHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlLWxlZnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3VidGl0bGUtMSB7XG4gICAgICAgICAgICBjb2xvcjogI2MyZDJmNTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3VidGl0bGUtMiB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1YnRpdGxlLTMge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maXJzdC1sZXR0ZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhaWxhLCBzZXJpZjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb250LXdlc3RidXJ5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBXZXN0YnVyeVNpZ25hdHVyZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ1dHRvbi0xIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYzJkMmY1O1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MyZDJmNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ1dHRvbi0yIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGFzdFNlY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNsaXAtcGF0aC0xIHtcbiAgICAgICAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDk1JSwgNTAlIDEwMCUsIDAgOTUlKTtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSA5NSUsIDUwJSAxMDAlLCAwIDk1JSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAgICAgICAgICAgLmxhc3RTZWN0aW9uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/pages/index.js */"));
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