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
    className: "jsx-284511273" + " " + "section section-five"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "costs-wrapper abs"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "costs-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "mobile-booking"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "title title-five"
  }, "Deposit Dates"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "title left-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "required left-item"
  }, "$500 USD deposit is required"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "required left-item"
  }, "The full amount is due by")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "title right-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "cost-date right-item"
  }, "September 3rd, 2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "cost-date right-item"
  }, "March 4th, 2020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "title title-five-two"
  }, "Total Cost"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "sub-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "title subtitle-five"
  }, "Leaving From Kelowna"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "title left-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "total-cost-item left-item"
  }, "Adult"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "total-cost-item left-item"
  }, "Ages 7-12"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "total-cost-item left-item"
  }, "Ages 2-6")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "title right-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "total-cost-item right-item"
  }, "$1544.35"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "total-cost-item right-item"
  }, "$1196.07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "total-cost-item right-item"
  }, "$887.54"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "sub-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "title subtitle-five"
  }, "Leaving From Vancouver"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "title left-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "total-cost-item left-item"
  }, "Adult"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "total-cost-item left-item"
  }, "Ages 7-12"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "total-cost-item left-item"
  }, "Ages 2-6")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "title right-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "total-cost-item right-item"
  }, "$1559.35"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "total-cost-item right-item"
  }, "$1206.07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "total-cost-item right-item"
  }, "$897.54"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "title final-note"
  }, "All rates include round trip airfare, round trip airport transfers, 7 nights all-inclusive accommodation, one checked bag per person and seat selection with the group towards the rear of the aircraft."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "title final-note"
  }, "This pricing is Guaranteed for the first 20 people who pay the deposit, and prices beyond those first 20 should still be very close to these rates, but are not guaranteed"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "title final-note"
  }, "Bookings can be done through our travel agent Holly Graves at", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-284511273" + " " + "title"
  }, "holly.graves@flightcentre.ca")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "284511273"
  }, ".section-five.jsx-284511273{background:rgba(110,104,148,0.9);}.costs-wrapper.jsx-284511273{min-width:100rem;}.costs-container.jsx-284511273{position:relative;}.mobile-booking.jsx-284511273{background-image:url(/static/images/booking.svg);width:16rem;height:16rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:2rem;}.sub-container.jsx-284511273{height:13rem;}.title-five.jsx-284511273{margin-bottom:2rem;text-align:center;}.title-five-two.jsx-284511273{margin-bottom:3rem;}.left-container.jsx-284511273{width:50%;float:left;text-align:right;font-size:2.2rem;}.left-item.jsx-284511273{margin-left:auto;margin-right:1rem;}.required.jsx-284511273{margin-bottom:2rem;height:3rem;line-height:3rem;}.right-container.jsx-284511273{width:50%;float:left;text-align:left;font-family:Laila;font-size:2rem;}.right-item.jsx-284511273{margin-left:2rem;}.cost-date.jsx-284511273{height:3rem;line-height:3rem;margin-bottom:2rem;}.subtitle-five.jsx-284511273{font-size:1.4rem;margin-top:-2rem;font-weight:800;}.total-cost-item.jsx-284511273{height:1.5rem;line-height:3.5rem;margin-bottom:1rem;}.final-note.jsx-284511273{width:60rem;font-family:Laila;font-size:1.6rem;margin-left:auto;margin-right:auto;margin-bottom:2rem;}@media (max-width:1200px){.left-container.jsx-284511273{font-size:1.8rem;}.right-container.jsx-284511273{font-size:1.8rem;}.final-note.jsx-284511273{font-size:1.6rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0Nvc3RzU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RGdCLEFBRzZDLEFBR25CLEFBR0MsQUFHK0IsQUFTcEMsQUFHTSxBQUlBLEFBR1QsQUFNTyxBQUlFLEFBS1QsQUFPTyxBQUdMLEFBS0ssQUFLSCxBQUtGLEFBU08sQUFHQSxBQUdBLFVBdERSLEFBZUEsRUFVTSxBQWVDLENBbERwQixDQTZDcUIsR0E1RHJCLEFBK0JvQixBQWdCcEIsQUFRbUIsQUFtQmpCLEFBR0EsQUFHQSxDQTdFRixDQWVvQixBQUlwQixBQWFjLEVBVEssQUFlRCxRQVVHLENBZUYsQ0E5QkEsRUF2Q25CLEFBZ0VxQixDQUxILENBeEJsQixFQWJBLEFBdUJvQixDQWZELFNBd0NBLENBOUJuQixBQWVBLENBOUNjLENBbURkLEVBS0EsR0FsQ0EsQUFlaUIsTUFwQ0YsR0E2REssTUF4QnBCLElBcEN3QixRQTZESCxjQTVERixLQTZEbkIsWUE1RG9CLGtCQUNDLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9KYXBoV2VkZGluZ1NpdGUvY29tcG9uZW50cy9Db3N0c1NlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ29zdHNTZWN0aW9uID0gcHJvcHMgPT4gKFxuICA8ZGl2XG4gICAgaWQ9XCJjb3N0cy1zZWN0aW9uXCJcbiAgICBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tZml2ZVwiXG4gICAgc3R5bGU9e3sgbWluSGVpZ2h0OiBwcm9wcy5oZWlnaHQgKyAxMDAgfX1cbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdHMtd3JhcHBlciBhYnNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLWJvb2tpbmdcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlLWZpdmVcIj5EZXBvc2l0IERhdGVzPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbGVmdC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVpcmVkIGxlZnQtaXRlbVwiPiQ1MDAgVVNEIGRlcG9zaXQgaXMgcmVxdWlyZWQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVpcmVkIGxlZnQtaXRlbVwiPlRoZSBmdWxsIGFtb3VudCBpcyBkdWUgYnk8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgcmlnaHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3N0LWRhdGUgcmlnaHQtaXRlbVwiPlNlcHRlbWJlciAzcmQsIDIwMTk8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvc3QtZGF0ZSByaWdodC1pdGVtXCI+TWFyY2ggNHRoLCAyMDIwPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlLWZpdmUtdHdvXCI+VG90YWwgQ29zdDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHN1YnRpdGxlLWZpdmVcIj5MZWF2aW5nIEZyb20gS2Vsb3duYTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbGVmdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWwtY29zdC1pdGVtIGxlZnQtaXRlbVwiPkFkdWx0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSBsZWZ0LWl0ZW1cIj5BZ2VzIDctMTI8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWwtY29zdC1pdGVtIGxlZnQtaXRlbVwiPkFnZXMgMi02PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSByaWdodC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWwtY29zdC1pdGVtIHJpZ2h0LWl0ZW1cIj4kMTU0NC4zNTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbC1jb3N0LWl0ZW0gcmlnaHQtaXRlbVwiPiQxMTk2LjA3PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSByaWdodC1pdGVtXCI+JDg4Ny41NDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBzdWJ0aXRsZS1maXZlXCI+TGVhdmluZyBGcm9tIFZhbmNvdXZlcjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbGVmdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWwtY29zdC1pdGVtIGxlZnQtaXRlbVwiPkFkdWx0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSBsZWZ0LWl0ZW1cIj5BZ2VzIDctMTI8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWwtY29zdC1pdGVtIGxlZnQtaXRlbVwiPkFnZXMgMi02PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSByaWdodC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWwtY29zdC1pdGVtIHJpZ2h0LWl0ZW1cIj4kMTU1OS4zNTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbC1jb3N0LWl0ZW0gcmlnaHQtaXRlbVwiPiQxMjA2LjA3PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSByaWdodC1pdGVtXCI+JDg5Ny41NDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBmaW5hbC1ub3RlXCI+XG4gICAgICAgICAgQWxsIHJhdGVzIGluY2x1ZGUgcm91bmQgdHJpcCBhaXJmYXJlLCByb3VuZCB0cmlwIGFpcnBvcnQgdHJhbnNmZXJzLCA3XG4gICAgICAgICAgbmlnaHRzIGFsbC1pbmNsdXNpdmUgYWNjb21tb2RhdGlvbiwgb25lIGNoZWNrZWQgYmFnIHBlciBwZXJzb24gYW5kXG4gICAgICAgICAgc2VhdCBzZWxlY3Rpb24gd2l0aCB0aGUgZ3JvdXAgdG93YXJkcyB0aGUgcmVhciBvZiB0aGUgYWlyY3JhZnQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGZpbmFsLW5vdGVcIj5cbiAgICAgICAgICBUaGlzIHByaWNpbmcgaXMgR3VhcmFudGVlZCBmb3IgdGhlIGZpcnN0IDIwIHBlb3BsZSB3aG8gcGF5IHRoZVxuICAgICAgICAgIGRlcG9zaXQsIGFuZCBwcmljZXMgYmV5b25kIHRob3NlIGZpcnN0IDIwIHNob3VsZCBzdGlsbCBiZSB2ZXJ5IGNsb3NlXG4gICAgICAgICAgdG8gdGhlc2UgcmF0ZXMsIGJ1dCBhcmUgbm90IGd1YXJhbnRlZWRcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgZmluYWwtbm90ZVwiPlxuICAgICAgICAgIEJvb2tpbmdzIGNhbiBiZSBkb25lIHRocm91Z2ggb3VyIHRyYXZlbCBhZ2VudCBIb2xseSBHcmF2ZXMgYXRcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+aG9sbHkuZ3JhdmVzQGZsaWdodGNlbnRyZS5jYTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zZWN0aW9uLWZpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDExMCwgMTA0LCAxNDgsIDAuOSk7XG4gICAgICB9XG4gICAgICAuY29zdHMtd3JhcHBlciB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcmVtO1xuICAgICAgfVxuICAgICAgLmNvc3RzLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5tb2JpbGUtYm9va2luZyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltYWdlcy9ib29raW5nLnN2Zyk7XG4gICAgICAgIHdpZHRoOiAxNnJlbTtcbiAgICAgICAgaGVpZ2h0OiAxNnJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5zdWItY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxM3JlbTtcbiAgICAgIH1cbiAgICAgIC50aXRsZS1maXZlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnRpdGxlLWZpdmUtdHdvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICAgIH1cbiAgICAgIC5sZWZ0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgICB9XG4gICAgICAubGVmdC1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5yZXF1aXJlZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgICB9XG4gICAgICAucmlnaHQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYWlsYTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgfVxuICAgICAgLnJpZ2h0LWl0ZW0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5jb3N0LWRhdGUge1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgfVxuICAgICAgLnN1YnRpdGxlLWZpdmUge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICB9XG4gICAgICAudG90YWwtY29zdC1pdGVtIHtcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB9XG4gICAgICAuZmluYWwtbm90ZSB7XG4gICAgICAgIHdpZHRoOiA2MHJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhaWxhO1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgLmxlZnQtY29udGFpbmVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtY29udGFpbmVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZmluYWwtbm90ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/CostsSection.js */"));
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
  className: "jsx-2406947656" + " " + "title title-2 title-left"
}, "Info"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2406947656" + " " + "subtitle subtitle-1 title-left"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2406947656" + " " + "first-letter"
}, "If"), " you\u2019ve made it this far, there\u2019s a good chance we\u2019ve invited you to our wedding in Mexico! There\u2019s also a good chance that you\u2019d love to come, but are unable to make it work due to cost or time constraints or any other reason, and we understand that and will be sending information out to everyone for a Ceremony and Dance we\u2019ll be having at home for those of you that can\u2019t make it to Mexico, because we love you all!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2406947656"
}, ".title-three.jsx-2406947656{color:white;text-align:left;padding-left:10rem;}@media (max-width:1200px){.title-three.jsx-2406947656{padding-left:2rem;}.subtitle-three.jsx-2406947656{padding-left:2rem;font-size:1.8rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0luZm9TZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZ0IsQUFHcUIsQUFNUSxBQUdBLFlBUkosTUFNaEIsQUFHbUIsVUFSQSxPQVNuQixZQVJGIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0luZm9TZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU3BsaXRMYXlvdXQgZnJvbSAnLi9sYXlvdXQvU3BsaXRMYXlvdXQnXG5cbmNvbnN0IGxlZnRFbGVtZW50ID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZS0yIHRpdGxlLWxlZnRcIj5JbmZvPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBzdWJ0aXRsZS0xIHRpdGxlLWxlZnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtbGV0dGVyXCI+SWY8L2Rpdj4geW914oCZdmUgbWFkZSBpdCB0aGlzIGZhciwgdGhlcmXigJlzIGFcbiAgICAgIGdvb2QgY2hhbmNlIHdl4oCZdmUgaW52aXRlZCB5b3UgdG8gb3VyIHdlZGRpbmcgaW4gTWV4aWNvISBUaGVyZeKAmXMgYWxzbyBhXG4gICAgICBnb29kIGNoYW5jZSB0aGF0IHlvdeKAmWQgbG92ZSB0byBjb21lLCBidXQgYXJlIHVuYWJsZSB0byBtYWtlIGl0IHdvcmsgZHVlIHRvXG4gICAgICBjb3N0IG9yIHRpbWUgY29uc3RyYWludHMgb3IgYW55IG90aGVyIHJlYXNvbiwgYW5kIHdlIHVuZGVyc3RhbmQgdGhhdCBhbmRcbiAgICAgIHdpbGwgYmUgc2VuZGluZyBpbmZvcm1hdGlvbiBvdXQgdG8gZXZlcnlvbmUgZm9yIGEgQ2VyZW1vbnkgYW5kIERhbmNlIHdl4oCZbGxcbiAgICAgIGJlIGhhdmluZyBhdCBob21lIGZvciB0aG9zZSBvZiB5b3UgdGhhdCBjYW7igJl0IG1ha2UgaXQgdG8gTWV4aWNvLCBiZWNhdXNlXG4gICAgICB3ZSBsb3ZlIHlvdSBhbGwhXG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLXRocmVlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcmVtO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgICAgICAudGl0bGUtdGhyZWUge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc3VidGl0bGUtdGhyZWUge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuY29uc3QgcmlnaHRFbGVtZW50ID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkb2xwaGluXCIgLz5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJzZWUtZGF0ZS1idXR0b24tY29udGFpbmVyXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ3doZW4tc2VjdGlvbicpXG4gICAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdlbmQnLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ1dHRvbiBzZWNvbmRhcnktYnV0dG9uIHNlZS1kYXRlLWJ1dHRvblwiPlxuICAgICAgICBXaGVuICYgV2hlcmVcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5kb2xwaGluIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1hZ2VzL2RvbHBoaW4uc3ZnKTtcbiAgICAgICAgd2lkdGg6IDMwcmVtO1xuICAgICAgICBoZWlnaHQ6IDMwcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1kYXRlLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgIH1cbiAgICAgIC5zZWUtZGF0ZS1idXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmNmZmO1xuICAgICAgICBjb2xvcjogIzQ0YmVlMDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBJbmZvU2VjdGlvbiA9IHByb3BzID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxTcGxpdExheW91dFxuICAgICAgaWQ9XCJpbmZvLXNlY3Rpb25cIlxuICAgICAgYmFja2dyb3VuZENvbG9yPVwiIzQ0QkVFMFwiXG4gICAgICBsZWZ0RWxlbWVudD17bGVmdEVsZW1lbnR9XG4gICAgICByaWdodEVsZW1lbnQ9e3JpZ2h0RWxlbWVudH1cbiAgICAgIGhlaWdodD17cHJvcHMuaGVpZ2h0fVxuICAgIC8+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/InfoSection.js */"));
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
}, ".dolphin.jsx-2675084800{background-image:url(/static/images/dolphin.svg);width:30rem;height:30rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:2rem;margin-top:4rem;}.see-date-button.jsx-2675084800{width:320px;}.see-date-button.jsx-2675084800:hover{background-color:#e5f6ff;color:#44bee0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0luZm9TZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEZ0IsQUFHMEQsQUFVckMsQUFHYSxZQUYzQixhQUdnQixjQUNoQixVQWRjLFlBQ0MsYUFDUyxzQkFDTCxpQkFDQyxrQkFDQyxtQkFDSCxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvSmFwaFdlZGRpbmdTaXRlL2NvbXBvbmVudHMvSW5mb1NlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBTcGxpdExheW91dCBmcm9tICcuL2xheW91dC9TcGxpdExheW91dCdcblxuY29uc3QgbGVmdEVsZW1lbnQgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlLTIgdGl0bGUtbGVmdFwiPkluZm88L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlIHN1YnRpdGxlLTEgdGl0bGUtbGVmdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1sZXR0ZXJcIj5JZjwvZGl2PiB5b3XigJl2ZSBtYWRlIGl0IHRoaXMgZmFyLCB0aGVyZeKAmXMgYVxuICAgICAgZ29vZCBjaGFuY2Ugd2XigJl2ZSBpbnZpdGVkIHlvdSB0byBvdXIgd2VkZGluZyBpbiBNZXhpY28hIFRoZXJl4oCZcyBhbHNvIGFcbiAgICAgIGdvb2QgY2hhbmNlIHRoYXQgeW914oCZZCBsb3ZlIHRvIGNvbWUsIGJ1dCBhcmUgdW5hYmxlIHRvIG1ha2UgaXQgd29yayBkdWUgdG9cbiAgICAgIGNvc3Qgb3IgdGltZSBjb25zdHJhaW50cyBvciBhbnkgb3RoZXIgcmVhc29uLCBhbmQgd2UgdW5kZXJzdGFuZCB0aGF0IGFuZFxuICAgICAgd2lsbCBiZSBzZW5kaW5nIGluZm9ybWF0aW9uIG91dCB0byBldmVyeW9uZSBmb3IgYSBDZXJlbW9ueSBhbmQgRGFuY2Ugd2XigJlsbFxuICAgICAgYmUgaGF2aW5nIGF0IGhvbWUgZm9yIHRob3NlIG9mIHlvdSB0aGF0IGNhbuKAmXQgbWFrZSBpdCB0byBNZXhpY28sIGJlY2F1c2VcbiAgICAgIHdlIGxvdmUgeW91IGFsbCFcbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtdGhyZWUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIC50aXRsZS10aHJlZSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJ0aXRsZS10aHJlZSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5jb25zdCByaWdodEVsZW1lbnQgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbHBoaW5cIiAvPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInNlZS1kYXRlLWJ1dHRvbi1jb250YWluZXJcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgnd2hlbi1zZWN0aW9uJylcbiAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ2VuZCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uIHNlY29uZGFyeS1idXR0b24gc2VlLWRhdGUtYnV0dG9uXCI+XG4gICAgICAgIFdoZW4gJiBXaGVyZVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRvbHBoaW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvZG9scGhpbi5zdmcpO1xuICAgICAgICB3aWR0aDogMzByZW07XG4gICAgICAgIGhlaWdodDogMzByZW07XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICB9XG4gICAgICAuc2VlLWRhdGUtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgfVxuICAgICAgLnNlZS1kYXRlLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY2ZmY7XG4gICAgICAgIGNvbG9yOiAjNDRiZWUwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuZXhwb3J0IGNvbnN0IEluZm9TZWN0aW9uID0gcHJvcHMgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPFNwbGl0TGF5b3V0XG4gICAgICBpZD1cImluZm8tc2VjdGlvblwiXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjNDRCRUUwXCJcbiAgICAgIGxlZnRFbGVtZW50PXtsZWZ0RWxlbWVudH1cbiAgICAgIHJpZ2h0RWxlbWVudD17cmlnaHRFbGVtZW50fVxuICAgICAgaGVpZ2h0PXtwcm9wcy5oZWlnaHR9XG4gICAgLz5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/InfoSection.js */"));
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
    className: "jsx-75964417" + " " + "section section-one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-75964417" + " " + "content-container content-container-one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-75964417" + " " + "abs"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-75964417" + " " + "title title-1"
  }, "Raph & Jeff"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-75964417" + " " + "title subtitle-1"
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
    className: "jsx-75964417" + " " + "see-info-button-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-75964417" + " " + "button button-1"
  }, "See Info"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "75964417"
  }, ".section-one.jsx-75964417{background-image:url(/static/images/MainPage.gif);background-size:cover;background-repeat:repeat-none;background-position:center center;}.content-container-one.jsx-75964417{background:rgba(110,104,148,0.9);}.see-info-button-container.jsx-75964417{position:absolute;width:100%;text-align:center;bottom:20rem;}@media (max-width:950px){.see-info-button-container.jsx-75964417{bottom:8rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0ludHJvU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmdCLEFBRzJELEFBTWQsQUFHbEIsQUFPSixZQUNkLE1BUFcsV0FDTyxJQUpwQixjQUtlLEdBWFMsVUFZeEIsWUFYZ0MsOEJBQ0ksa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL0ludHJvU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEludHJvU2VjdGlvbiA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24tb25lXCIgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5oZWlnaHQgfX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lciBjb250ZW50LWNvbnRhaW5lci1vbmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtMVwiPlJhcGggJiBKZWZmPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgc3VidGl0bGUtMVwiPk1leGljbyAyMDIwPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwic2VlLWluZm8tYnV0dG9uLWNvbnRhaW5lclwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKCdwaG90by1zZWN0aW9uJylcbiAgICAgICAgICAgIC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnc3RhcnQnLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgnaW5mby1zZWN0aW9uJylcbiAgICAgICAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdzdGFydCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi0xXCI+U2VlIEluZm88L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zZWN0aW9uLW9uZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltYWdlcy9NYWluUGFnZS5naWYpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LW5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuY29udGVudC1jb250YWluZXItb25lIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMTAsIDEwNCwgMTQ4LCAwLjkpO1xuICAgICAgfVxuICAgICAgLnNlZS1pbmZvLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvdHRvbTogMjByZW07XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgLnNlZS1pbmZvLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgIGJvdHRvbTogOHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEludHJvU2VjdGlvblxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/IntroSection.js */"));
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
}, ".cake.jsx-4179643353{background-image:url(/static/images/cake.svg);width:20rem;height:20rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:1rem;margin-top:2rem;}.see-marival-button.jsx-4179643353{margin-top:1rem;}.see-marival-button.jsx-4179643353:hover{background-color:#e5f6ff;color:#e4c39a;}.marival-details.jsx-4179643353{font-family:LatoHairLine;color:white;font-size:2.4rem;text-align:center;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:800;}.trip-dates.jsx-4179643353{margin-top:1rem;}.wedding-day-title.jsx-4179643353{font-family:WestburySignature;margin-top:1rem;font-size:4rem;color:white;}.wedding-day.jsx-4179643353{color:white;weight:800;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1doZW5TZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFHdUQsQUFVOUIsQUFHUyxBQUlBLEFBUVQsQUFHYyxBQU1sQixZQUNELElBeEJiLEFBZUEsT0FVQSxFQXRCZ0IsQUFJRixLQVdJLE9BVkMsRUFKbkIsT0FkYyxBQTZCRyxRQVZHLElBbEJMLEdBNkJELFVBNUJVLENBa0JILENBV3JCLG9CQTVCbUIsaUJBQ0Msa0JBQ0MsbUJBQ0gsZ0JBQ2xCLEVBY2tCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9KYXBoV2VkZGluZ1NpdGUvY29tcG9uZW50cy9XaGVuU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNwbGl0TGF5b3V0IGZyb20gJy4vbGF5b3V0L1NwbGl0TGF5b3V0J1xuXG5jb25zdCBsZWZ0RWxlbWVudCA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FrZVwiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ1dHRvbiBzZWNvbmRhcnktYnV0dG9uIHNlZS1tYXJpdmFsLWJ1dHRvblwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcml2YWwuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICBNYXJpdmFsXG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXJpdmFsLWRldGFpbHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpcC1kYXRlc1wiPk1heSAyM3JkIOKAkyBNYXkgMzB0aCwgMjAyMDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWRkaW5nLWRheS10aXRsZVwiPldlZGRpbmcgRGF5PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaXAtZGF0ZXMgd2VkZGluZy1kYXRlXCI+TWF5IDI1dGgsIDIwMjA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2FrZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltYWdlcy9jYWtlLnN2Zyk7XG4gICAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5zZWUtbWFyaXZhbC1idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1tYXJpdmFsLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY2ZmY7XG4gICAgICAgIGNvbG9yOiAjZTRjMzlhO1xuICAgICAgfVxuICAgICAgLm1hcml2YWwtZGV0YWlscyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIH1cbiAgICAgIC50cmlwLWRhdGVzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIH1cbiAgICAgIC53ZWRkaW5nLWRheS10aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBXZXN0YnVyeVNpZ25hdHVyZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAud2VkZGluZy1kYXkge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdlaWdodDogODAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuY29uc3QgcmlnaHRFbGVtZW50ID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlLWZvdXJcIj5XaGVuICYgV2hlcmU8L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGUtZm91clwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1sZXR0ZXJcIj5Gb3I8L2Rpdj4gdGhvc2Ugb2YgeW91IHRoYXQgYXJlIGFibGUgdG9cbiAgICAgIGNvbWUsIHdlIGhhdmUgb3JnYW5pemVkIG91ciB3ZWRkaW5nIGF0IHRoZSBNYXJpdmFsIGluIE51ZXZvIFZhbGxhcnRhLCBqdXN0XG4gICAgICBvdXRzaWRlIG9mIFB1ZXJ0byBWYWxsYXJ0YS5cbiAgICAgIDxkaXY+XG4gICAgICAgIFRoZSBwYWNrYWdlIHdl4oCZdmUgb3JnYW5pemVkIGNvc3RzIGp1c3QgdW5kZXJ7JyAnfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0LWxldHRlclwiPiQxNjAwPC9kaXY+LCBhbmQgaW5jbHVkZXM6XG4gICAgICAgIDxkaXYgZGlyPVwicnRsXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPmFsbCBpbmNsdXNpdmUgNyBkYXkgc3RheTwvbGk+XG4gICAgICAgICAgICA8bGk+YWlyZmFyZTwvbGk+XG4gICAgICAgICAgICA8bGk+YWlycG9ydCBzaHV0dGxlczwvbGk+XG4gICAgICAgICAgICA8bGk+b25lIGNoZWNrZWQgYmFnPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgQ2hlY2sgb3V0IG91ciBkZXRhaWxlZCBicmVha2Rvd24gb2YgdGhlIGNvc3RzIGludm9sdmVkLCBhcyB3ZWxsIGFzIGRlcG9zaXRcbiAgICAgIGFtb3VudHMgYW5kIHBheW1lbnQgZGF0ZXMuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInNlZS1jb3N0cy1jb250YWluZXJcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgnY29zdHMtc2VjdGlvbicpXG4gICAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ3N0YXJ0JywgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1idXR0b24gc2VlLWNvc3RzLWJ1dHRvblwiPkNvc3RzPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtZm91ciB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xuICAgICAgfVxuICAgICAgLnN1YnRpdGxlLWZvdXIge1xuICAgICAgICBmb250LWZhbWlseTogTGF0b0hhaXJMaW5lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTByZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICB9XG4gICAgICAuc2VlLWNvc3RzLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5zZWUtY29zdHMtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjZmZjtcbiAgICAgICAgY29sb3I6ICNlNGMzOWE7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIC50aXRsZS1mb3VyIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJ0aXRsZS1mb3VyIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5leHBvcnQgY29uc3QgV2hlblNlY3Rpb24gPSBwcm9wcyA9PiAoXG4gIDxTcGxpdExheW91dFxuICAgIGlkPVwid2hlbi1zZWN0aW9uXCJcbiAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjY2FhMTZlXCJcbiAgICBsZWZ0RWxlbWVudD17bGVmdEVsZW1lbnR9XG4gICAgcmlnaHRFbGVtZW50PXtyaWdodEVsZW1lbnR9XG4gICAgaGVpZ2h0PXtwcm9wcy5oZWlnaHR9XG4gIC8+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/WhenSection.js */"));
var rightElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
  className: "jsx-2105305869" + " " + "title title-four"
}, "When & Where"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2105305869" + " " + "subtitle-four"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2105305869" + " " + "first-letter"
}, "For"), " those of you that are able to come, we have organized our wedding at the Marival in Nuevo Vallarta, just outside of Puerto Vallarta.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
}, ".title-four.jsx-2105305869{color:white;text-align:right;padding-right:10rem;}.subtitle-four.jsx-2105305869{font-family:LatoHairLine;color:white;font-size:2.4rem;text-align:right;padding-right:10rem;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:800;}.see-costs-button.jsx-2105305869{color:white;font-size:2rem;border:1px solid white;margin-top:2rem;}.see-costs-button.jsx-2105305869:hover{background-color:#e5f6ff;color:#e4c39a;}@media (max-width:1200px){.title-four.jsx-2105305869{padding-right:2rem;}.subtitle-four.jsx-2105305869{padding-right:2rem;font-size:1.6rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1doZW5TZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGZ0IsQUFHcUIsQUFLYSxBQVNiLEFBTWEsQUFLSixBQUdBLFlBM0JKLEFBY0YsT0FXZixBQUdtQixNQXZCUCxBQWVFLEVBTFMsRUFkSCxPQTRCcEIsQ0F2QmlCLEVBZW5CLFVBbkJBLENBY2tCLElBVEMsWUFVbkIsS0FUc0Isb0JBQ0QsNkZBQ0gsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1doZW5TZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU3BsaXRMYXlvdXQgZnJvbSAnLi9sYXlvdXQvU3BsaXRMYXlvdXQnXG5cbmNvbnN0IGxlZnRFbGVtZW50ID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYWtlXCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uIHNlY29uZGFyeS1idXR0b24gc2VlLW1hcml2YWwtYnV0dG9uXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFyaXZhbC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIE1hcml2YWxcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcml2YWwtZGV0YWlsc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlwLWRhdGVzXCI+TWF5IDIzcmQg4oCTIE1heSAzMHRoLCAyMDIwPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZGRpbmctZGF5LXRpdGxlXCI+V2VkZGluZyBEYXk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpcC1kYXRlcyB3ZWRkaW5nLWRhdGVcIj5NYXkgMjV0aCwgMjAyMDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jYWtlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1hZ2VzL2Nha2Uuc3ZnKTtcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xuICAgICAgICBoZWlnaHQ6IDIwcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1tYXJpdmFsLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICB9XG4gICAgICAuc2VlLW1hcml2YWwtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjZmZjtcbiAgICAgICAgY29sb3I6ICNlNGMzOWE7XG4gICAgICB9XG4gICAgICAubWFyaXZhbC1kZXRhaWxzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgfVxuICAgICAgLnRyaXAtZGF0ZXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgfVxuICAgICAgLndlZGRpbmctZGF5LXRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFdlc3RidXJ5U2lnbmF0dXJlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC53ZWRkaW5nLWRheSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2VpZ2h0OiA4MDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5jb25zdCByaWdodEVsZW1lbnQgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtZm91clwiPldoZW4gJiBXaGVyZTwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZS1mb3VyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0LWxldHRlclwiPkZvcjwvZGl2PiB0aG9zZSBvZiB5b3UgdGhhdCBhcmUgYWJsZSB0b1xuICAgICAgY29tZSwgd2UgaGF2ZSBvcmdhbml6ZWQgb3VyIHdlZGRpbmcgYXQgdGhlIE1hcml2YWwgaW4gTnVldm8gVmFsbGFydGEsIGp1c3RcbiAgICAgIG91dHNpZGUgb2YgUHVlcnRvIFZhbGxhcnRhLlxuICAgICAgPGRpdj5cbiAgICAgICAgVGhlIHBhY2thZ2Ugd2XigJl2ZSBvcmdhbml6ZWQgY29zdHMganVzdCB1bmRlcnsnICd9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtbGV0dGVyXCI+JDE2MDA8L2Rpdj4sIGFuZCBpbmNsdWRlczpcbiAgICAgICAgPGRpdiBkaXI9XCJydGxcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+YWxsIGluY2x1c2l2ZSA3IGRheSBzdGF5PC9saT5cbiAgICAgICAgICAgIDxsaT5haXJmYXJlPC9saT5cbiAgICAgICAgICAgIDxsaT5haXJwb3J0IHNodXR0bGVzPC9saT5cbiAgICAgICAgICAgIDxsaT5vbmUgY2hlY2tlZCBiYWc8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBDaGVjayBvdXQgb3VyIGRldGFpbGVkIGJyZWFrZG93biBvZiB0aGUgY29zdHMgaW52b2x2ZWQsIGFzIHdlbGwgYXMgZGVwb3NpdFxuICAgICAgYW1vdW50cyBhbmQgcGF5bWVudCBkYXRlcy5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwic2VlLWNvc3RzLWNvbnRhaW5lclwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKCdjb3N0cy1zZWN0aW9uJylcbiAgICAgICAgICAgIC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnc3RhcnQnLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ1dHRvbiBzZWUtY29zdHMtYnV0dG9uXCI+Q29zdHM8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1mb3VyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTByZW07XG4gICAgICB9XG4gICAgICAuc3VidGl0bGUtZm91ciB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIH1cbiAgICAgIC5zZWUtY29zdHMtYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1jb3N0cy1idXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmNmZmO1xuICAgICAgICBjb2xvcjogI2U0YzM5YTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgLnRpdGxlLWZvdXIge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN1YnRpdGxlLWZvdXIge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBXaGVuU2VjdGlvbiA9IHByb3BzID0+IChcbiAgPFNwbGl0TGF5b3V0XG4gICAgaWQ9XCJ3aGVuLXNlY3Rpb25cIlxuICAgIGJhY2tncm91bmRDb2xvcj1cIiNjYWExNmVcIlxuICAgIGxlZnRFbGVtZW50PXtsZWZ0RWxlbWVudH1cbiAgICByaWdodEVsZW1lbnQ9e3JpZ2h0RWxlbWVudH1cbiAgICBoZWlnaHQ9e3Byb3BzLmhlaWdodH1cbiAgLz5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/WhenSection.js */"));
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
    style: props.style,
    className: "jsx-143544567" + " " + (props.className || "")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-143544567" + " " + "mobile-content-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-143544567" + " " + "wrapper"
  }, props.content)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "143544567"
  }, ".mobile-content-container.jsx-143544567{padding-left:5%;padding-right:5%;}.wrapper.jsx-143544567{min-width:34rem;padding-top:3%;margin-left:auto;margin-right:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL2xheW91dC9Nb2JpbGVMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2dCLEFBR3lCLEFBSUEsZ0JBSEMsQUFJRixlQUNFLEVBSm5CLGVBS29CLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9KYXBoV2VkZGluZ1NpdGUvY29tcG9uZW50cy9sYXlvdXQvTW9iaWxlTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTW9iaWxlTGF5b3V0ID0gcHJvcHMgPT4gKFxuICA8ZGl2IGlkPXtwcm9wcy5pZH0gc3R5bGU9e3Byb3BzLnN0eWxlfSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtY29udGVudC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPntwcm9wcy5jb250ZW50fTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tb2JpbGUtY29udGVudC1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgICAgIH1cbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgbWluLXdpZHRoOiAzNHJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDMlO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZUxheW91dFxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/layout/MobileLayout.js */"));
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
    className: "jsx-4229051488" + " " + "section section-five"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "costs-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "mobile-booking"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "title title-2 booking-title"
  }, "Booking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "title dates-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488"
  }, "$500 USD deposit is required"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "cost-date"
  }, "September 3rd, 2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488"
  }, "The full amount is due"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "cost-date"
  }, "March 4th, 2020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "title title-3 total-cost-title"
  }, "Total Cost"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "sub-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "title location-title"
  }, "Leaving From Kelowna"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "title-4 left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "left-item"
  }, "Adult"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "left-item"
  }, "Ages 7-12"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "left-item"
  }, "Ages 2-6")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "title-4 right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "right-item"
  }, "$1544.35"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "right-item"
  }, "$1196.07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "right-item"
  }, "$887.54"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "sub-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "title location-title"
  }, "Leaving From Vancouver"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "title-4 left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "left-item"
  }, "Adult"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "left-item"
  }, "Ages 7-12"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "left-item"
  }, "Ages 2-6")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "title-4 right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "right-item"
  }, "$1559.35"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "right-item"
  }, "$1206.07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "right-item"
  }, "$897.54"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "title final-note"
  }, "All rates include round trip airfare, round trip airport transfers, 7 nights all-inclusive accommodation, one checked bag per person and seat selection with the group towards the rear of the aircraft."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "title final-note"
  }, "This pricing is Guaranteed for the first 20 people who pay the deposit, and prices beyond those first 20 should still be very close to these rates, but are not guaranteed"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "title final-note"
  }, "Bookings can be done through our travel agent Holly Graves at"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "final-email"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:holly.graves@flightcentre.ca",
    className: "jsx-4229051488"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4229051488" + " " + "mail-icon"
  }), "holly.graves@flightcentre.ca"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4229051488"
  }, ".section-five.jsx-4229051488{background:#7c769e;}.mobile-booking.jsx-4229051488{background-image:url(/static/images/booking.svg);width:10rem;height:10rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:2rem;margin-top:6rem;}.booking-title.jsx-4229051488{margin-bottom:1rem;}.dates-container.jsx-4229051488{font-size:1.4rem;color:white;}.cost-date.jsx-4229051488{font-family:Laila,serif;margin-bottom:1rem;font-weight:800;}.total-cost-title.jsx-4229051488{margin-bottom:1rem;}.sub-container.jsx-4229051488{clear:both;font-size:2rem;}.location-title.jsx-4229051488{margin-top:1rem;margin-bottom:1rem;font-size:1.4rem;color:white;}.left.jsx-4229051488{width:50%;float:left;text-align:right;margin-bottom:1rem;}.left-item.jsx-4229051488{margin-left:auto;margin-right:1rem;}.right.jsx-4229051488{width:50%;float:right;text-align:left;font-family:Laila;font-size:1.6rem;margin-bottom:1rem;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}.final-note.jsx-4229051488{font-family:Laila;font-size:1.2rem;margin-left:auto;margin-right:auto;margin-bottom:1rem;clear:both;color:white;max-width:35rem;}.final-email.jsx-4229051488{font-family:Laila,serif;font-size:1.2rem;color:white;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;margin-bottom:5rem;}.mail-icon.jsx-4229051488{background-image:url(/static/images/mail.svg);width:5rem;height:5rem;background-size:cover;margin-left:auto;margin-right:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9Db3N0c1NlY3Rpb25Nb2JpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERnQixBQUc0QixBQUc4QixBQVU5QixBQUdGLEFBSVEsQUFLTixBQUdSLEFBSUssQUFNTixBQU1PLEFBSVAsQUFTUSxBQVVPLEFBU3FCLFVBckNuQyxBQVVDLENBcEJHLEtBSUksQ0FoQlAsQUE0Qk0sQ0FhRCxDQXpEbkIsQUFhQSxBQVlBLEVBY21CLENBVUQsRUE3QkcsQUErQ0YsRUF0Q25CLEdBWkEsTUFnQm1CLEFBWW5CLEFBYW1CLEdBbEJFLEFBVUQsR0FrQk4sRUEvQ0ksR0F1REwsR0F6RUMsR0ErQkEsQUF5Qk0sQ0FVTyxHQWxCUixDQVZuQixBQW9DYyxFQXZEZCxFQWxCZSxHQStCZixLQTJDd0IsQ0FsQkgsR0FSQSxDQS9DRyxJQWlFTixXQVRMLEVBa0JNLENBMUJFLEVBa0JBLEVBakVGLElBd0RMLFFBa0JNLElBakJGLENBeERFLGFBMEVwQixFQWpCQSxHQXhEcUIsbUJBQ0gsZ0JBQ2xCLG1CQTRDQSxFQWtCcUIsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9Db3N0c1NlY3Rpb25Nb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ29zdHNTZWN0aW9uTW9iaWxlID0gcHJvcHMgPT4gKFxuICA8ZGl2IGlkPVwiY29zdHMtc2VjdGlvblwiIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi1maXZlXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb3N0cy13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1ib29raW5nXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtMiBib29raW5nLXRpdGxlXCI+Qm9va2luZzwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBkYXRlcy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdj4kNTAwIFVTRCBkZXBvc2l0IGlzIHJlcXVpcmVkPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdC1kYXRlXCI+U2VwdGVtYmVyIDNyZCwgMjAxOTwvZGl2PlxuICAgICAgICA8ZGl2PlRoZSBmdWxsIGFtb3VudCBpcyBkdWU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3N0LWRhdGVcIj5NYXJjaCA0dGgsIDIwMjA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZS0zIHRvdGFsLWNvc3QtdGl0bGVcIj5Ub3RhbCBDb3N0PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBsb2NhdGlvbi10aXRsZVwiPkxlYXZpbmcgRnJvbSBLZWxvd25hPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtNCBsZWZ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWl0ZW1cIj5BZHVsdDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1pdGVtXCI+QWdlcyA3LTEyPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWl0ZW1cIj5BZ2VzIDItNjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS00IHJpZ2h0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1pdGVtXCI+JDE1NDQuMzU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWl0ZW1cIj4kMTE5Ni4wNzwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtaXRlbVwiPiQ4ODcuNTQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGxvY2F0aW9uLXRpdGxlXCI+TGVhdmluZyBGcm9tIFZhbmNvdXZlcjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLTQgbGVmdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1pdGVtXCI+QWR1bHQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtaXRlbVwiPkFnZXMgNy0xMjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1pdGVtXCI+QWdlcyAyLTY8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtNCByaWdodFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtaXRlbVwiPiQxNTU5LjM1PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1pdGVtXCI+JDEyMDYuMDc8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWl0ZW1cIj4kODk3LjU0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGZpbmFsLW5vdGVcIj5cbiAgICAgICAgQWxsIHJhdGVzIGluY2x1ZGUgcm91bmQgdHJpcCBhaXJmYXJlLCByb3VuZCB0cmlwIGFpcnBvcnQgdHJhbnNmZXJzLCA3XG4gICAgICAgIG5pZ2h0cyBhbGwtaW5jbHVzaXZlIGFjY29tbW9kYXRpb24sIG9uZSBjaGVja2VkIGJhZyBwZXIgcGVyc29uIGFuZCBzZWF0XG4gICAgICAgIHNlbGVjdGlvbiB3aXRoIHRoZSBncm91cCB0b3dhcmRzIHRoZSByZWFyIG9mIHRoZSBhaXJjcmFmdC5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBmaW5hbC1ub3RlXCI+XG4gICAgICAgIFRoaXMgcHJpY2luZyBpcyBHdWFyYW50ZWVkIGZvciB0aGUgZmlyc3QgMjAgcGVvcGxlIHdobyBwYXkgdGhlIGRlcG9zaXQsXG4gICAgICAgIGFuZCBwcmljZXMgYmV5b25kIHRob3NlIGZpcnN0IDIwIHNob3VsZCBzdGlsbCBiZSB2ZXJ5IGNsb3NlIHRvIHRoZXNlXG4gICAgICAgIHJhdGVzLCBidXQgYXJlIG5vdCBndWFyYW50ZWVkXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgZmluYWwtbm90ZVwiPlxuICAgICAgICBCb29raW5ncyBjYW4gYmUgZG9uZSB0aHJvdWdoIG91ciB0cmF2ZWwgYWdlbnQgSG9sbHkgR3JhdmVzIGF0XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmluYWwtZW1haWxcIj5cbiAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpob2xseS5ncmF2ZXNAZmxpZ2h0Y2VudHJlLmNhXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWlsLWljb25cIiAvPlxuICAgICAgICAgIGhvbGx5LmdyYXZlc0BmbGlnaHRjZW50cmUuY2FcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnNlY3Rpb24tZml2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM3Yzc2OWU7XG4gICAgICB9XG4gICAgICAubW9iaWxlLWJvb2tpbmcge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvYm9va2luZy5zdmcpO1xuICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgIGhlaWdodDogMTByZW07XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDZyZW07XG4gICAgICB9XG4gICAgICAuYm9va2luZy10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB9XG4gICAgICAuZGF0ZXMtY29udGFpbmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC5jb3N0LWRhdGUge1xuICAgICAgICBmb250LWZhbWlseTogTGFpbGEsIHNlcmlmO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgfVxuICAgICAgLnRvdGFsLWNvc3QtdGl0bGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgfVxuICAgICAgLnN1Yi1jb250YWluZXIge1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgfVxuICAgICAgLmxvY2F0aW9uLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC5sZWZ0IHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgfVxuICAgICAgLmxlZnQtaXRlbSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgICAucmlnaHQge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYWlsYTtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICB9XG4gICAgICAuZmluYWwtbm90ZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYWlsYTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1heC13aWR0aDogMzVyZW07XG4gICAgICB9XG4gICAgICAuZmluYWwtZW1haWwge1xuICAgICAgICBmb250LWZhbWlseTogTGFpbGEsIHNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICAgICAgfVxuICAgICAgLm1haWwtaWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltYWdlcy9tYWlsLnN2Zyk7XG4gICAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/mobile/CostsSectionMobile.js */"));
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
}, "If"), " you\u2019ve made it this far, there\u2019s a good chance we\u2019ve invited you to our wedding in Mexico! There\u2019s also a good chance that you\u2019d love to come, but are unable to make it work due to cost or time constraints or any other reason, and we understand that and will be sending information out to everyone for a Ceremony and Dance we\u2019ll be having at home for those of you that can\u2019t make it to Mexico, because we love you all!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
}, ".mobile-dolphin.jsx-2190497632{background-image:url(/static/images/dolphin.svg);width:12rem;height:12rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:2rem;margin-top:6rem;}.info-title.jsx-2190497632{margin-bottom:2rem;}.info-text.jsx-2190497632{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:800;color:white;font-size:2rem;}.see-when-button-container.jsx-2190497632{height:15rem;}.see-when-button.jsx-2190497632{margin-top:4rem;margin-bottom:4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9JbmZvU2VjdGlvbk1vYmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmdCLEFBRzBELEFBVTlCLEFBR0EsQUFNTixBQUdHLGFBRmxCLEdBR3FCLEdBWnJCLGdCQWFBLGNBdkJjLFlBQ0MsYUFDUyxtQkFXTixHQVZDLGFBV0wsSUFWTSxRQVdILFVBVkksS0FXckIsY0FWa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9JbmZvU2VjdGlvbk1vYmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IE1vYmlsZUxheW91dCBmcm9tICcuLi9sYXlvdXQvTW9iaWxlTGF5b3V0J1xuXG5jb25zdCBtb2JpbGVDb250ZW50ID0gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tc2VjdGlvblwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLWRvbHBoaW5cIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtMiBpbmZvLXRpdGxlXCI+SW5mbzwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby10ZXh0IHRpdGxlLWxlZnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtbGV0dGVyXCI+SWY8L2Rpdj4geW914oCZdmUgbWFkZSBpdCB0aGlzIGZhciwgdGhlcmXigJlzIGFcbiAgICAgIGdvb2QgY2hhbmNlIHdl4oCZdmUgaW52aXRlZCB5b3UgdG8gb3VyIHdlZGRpbmcgaW4gTWV4aWNvISBUaGVyZeKAmXMgYWxzbyBhXG4gICAgICBnb29kIGNoYW5jZSB0aGF0IHlvdeKAmWQgbG92ZSB0byBjb21lLCBidXQgYXJlIHVuYWJsZSB0byBtYWtlIGl0IHdvcmsgZHVlIHRvXG4gICAgICBjb3N0IG9yIHRpbWUgY29uc3RyYWludHMgb3IgYW55IG90aGVyIHJlYXNvbiwgYW5kIHdlIHVuZGVyc3RhbmQgdGhhdCBhbmRcbiAgICAgIHdpbGwgYmUgc2VuZGluZyBpbmZvcm1hdGlvbiBvdXQgdG8gZXZlcnlvbmUgZm9yIGEgQ2VyZW1vbnkgYW5kIERhbmNlIHdl4oCZbGxcbiAgICAgIGJlIGhhdmluZyBhdCBob21lIGZvciB0aG9zZSBvZiB5b3UgdGhhdCBjYW7igJl0IG1ha2UgaXQgdG8gTWV4aWNvLCBiZWNhdXNlXG4gICAgICB3ZSBsb3ZlIHlvdSBhbGwhXG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwic2VlLXdoZW4tYnV0dG9uLWNvbnRhaW5lclwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLmdldEVsZW1lbnRCeUlkKCd3aGVuLXNlY3Rpb24nKVxuICAgICAgICAgIC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnc3RhcnQnLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLTEgc2VlLXdoZW4tYnV0dG9uXCI+V2hlbiAmIFdoZXJlPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLm1vYmlsZS1kb2xwaGluIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1hZ2VzL2RvbHBoaW4uc3ZnKTtcbiAgICAgICAgd2lkdGg6IDEycmVtO1xuICAgICAgICBoZWlnaHQ6IDEycmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiA2cmVtO1xuICAgICAgfVxuICAgICAgLmluZm8tdGl0bGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgfVxuICAgICAgLmluZm8tdGV4dCB7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgfVxuICAgICAgLnNlZS13aGVuLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDE1cmVtO1xuICAgICAgfVxuICAgICAgLnNlZS13aGVuLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGNvbnN0IEluZm9TZWN0aW9uTW9iaWxlID0gcHJvcHMgPT4gKFxuICA8TW9iaWxlTGF5b3V0XG4gICAgaWQ9XCJpbmZvLXNlY3Rpb25cIlxuICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM1MTg5QkMnLCB6SW5kZXg6IDIgfX1cbiAgICBjb250ZW50PXttb2JpbGVDb250ZW50fVxuICAgIGNsYXNzTmFtZT1cInNlY3Rpb24gY2xpcC1wYXRoLTFcIlxuICAvPlxuKVxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/mobile/InfoSectionMobile.js */"));
var InfoSectionMobile = function InfoSectionMobile(props) {
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
  className: "jsx-585339354" + " " + "mobile-cake"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354" + " " + "title title-2"
}, "When & Where"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354" + " " + "title-3"
}, "May 23rd \u2013 May 30th, 2020"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354" + " " + "title-3 font-westbury wedding-day-title"
}, "Wedding Day"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354" + " " + "title-3"
}, "May 25th, 2020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354" + " " + "subtitle-3 wedding-details-container"
}, "For those of you that are able to come, we have organized...", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354" + " " + "marival-title-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354" + " " + "marival-title"
}, "Marival"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354" + " " + "marival-subtitle"
}, "Nuevo Vallarta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354" + " " + "marival-subtitle"
}, "Mexico")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354" + " " + "images-and-bullets"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354" + " " + "mobile-image-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://www.marival.com/",
  target: "_blank",
  className: "jsx-585339354"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354" + " " + "mobile-mexico"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354" + " " + "mobile-marival"
}))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354" + " " + "bullet-list-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  dir: "rtl",
  className: "jsx-585339354"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
  className: "jsx-585339354"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-585339354"
}, "all inclusive"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-585339354"
}, "seven day stay"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-585339354"
}, "airfare"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-585339354"
}, "airport shuttles"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-585339354"
}, "one checked bag"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-585339354"
}, "outside of Puerto Vallarta"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  onClick: function onClick() {
    document.getElementById('costs-section').scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  },
  className: "jsx-585339354" + " " + "see-costs-button-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-585339354" + " " + "button button-2 see-costs-button"
}, "See Details"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "585339354"
}, ".mobile-cake.jsx-585339354{background-image:url(/static/images/cake.svg);width:10rem;height:10rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:1rem;margin-top:8rem;}.wedding-day-title.jsx-585339354{margin-top:1rem;font-size:4rem;}.wedding-details-container.jsx-585339354{margin-top:1.4rem;}.marival-title-container.jsx-585339354{margin-top:1rem;}.marival-title.jsx-585339354{font-size:3rem;}.mobile-image-container.jsx-585339354{width:50%;float:left;}.mobile-mexico.jsx-585339354{background-image:url(/static/images/mexico.png);width:14rem;height:14rem;background-size:cover;margin-right:auto;margin-top:1.5rem;margin-bottom:0.5rem;margin-left:1rem;}.mobile-marival.jsx-585339354{background-image:url(/static/images/Marival-small.png);width:9rem;height:9rem;background-size:cover;margin-left:5rem;margin-right:auto;margin-top:-5.5rem;margin-bottom:0.5rem;}.bullet-list-container.jsx-585339354{display:inline-block;width:50%;float:right;text-align:right;margin-top:1rem;margin-bottom:1rem;}.see-costs-button-container.jsx-585339354{clear:both;padding-top:3rem;height:20rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL21vYmlsZS9XaGVuU2VjdGlvbk1vYmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGdCLEFBR3VELEFBVTlCLEFBSUUsQUFHRixBQUdELEFBR0wsQUFJc0MsQUFVTyxBQVVsQyxBQVFWLFVBL0JBLENBZ0NNLElBbkNuQixDQVZpQixBQU9qQixFQUhBLEdBVUEsQUF1QlksT0FTRyxHQTdDZixBQXFDYyxVQVNkLEVBUm1CLEdBakRMLEVBMkJBLE9BVUQsR0FwQ0UsRUEyQkEsQUFzQkcsTUFaSixLQXBDVSxFQTJCQSxHQXNCSCxFQVpHLGVBcENMLEVBMkJDLEFBc0JwQixLQVptQixVQXBDQyxHQTJCQSxJQVVBLFdBcENDLEdBMkJFLElBVUYsWUFwQ0gsS0EyQkMsRUFVSSxTQXBDdkIsTUEyQkEsTUFVQSIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9KYXBoV2VkZGluZ1NpdGUvY29tcG9uZW50cy9tb2JpbGUvV2hlblNlY3Rpb25Nb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBNb2JpbGVMYXlvdXQgZnJvbSAnLi4vbGF5b3V0L01vYmlsZUxheW91dCdcblxuY29uc3QgbW9iaWxlQ29udGVudCA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLWNha2VcIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtMlwiPldoZW4gJiBXaGVyZTwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLTNcIj5NYXkgMjNyZCDigJMgTWF5IDMwdGgsIDIwMjA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtMyBmb250LXdlc3RidXJ5IHdlZGRpbmctZGF5LXRpdGxlXCI+V2VkZGluZyBEYXk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtM1wiPk1heSAyNXRoLCAyMDIwPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZS0zIHdlZGRpbmctZGV0YWlscy1jb250YWluZXJcIj5cbiAgICAgIEZvciB0aG9zZSBvZiB5b3UgdGhhdCBhcmUgYWJsZSB0byBjb21lLCB3ZSBoYXZlIG9yZ2FuaXplZC4uLlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJpdmFsLXRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcml2YWwtdGl0bGVcIj5NYXJpdmFsPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyaXZhbC1zdWJ0aXRsZVwiPk51ZXZvIFZhbGxhcnRhPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyaXZhbC1zdWJ0aXRsZVwiPk1leGljbzwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlcy1hbmQtYnVsbGV0c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFyaXZhbC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZXhpY29cIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbWFyaXZhbFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWxsZXQtbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+YWxsIGluY2x1c2l2ZTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5zZXZlbiBkYXkgc3RheTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5haXJmYXJlPC9saT5cbiAgICAgICAgICAgICAgPGxpPmFpcnBvcnQgc2h1dHRsZXM8L2xpPlxuICAgICAgICAgICAgICA8bGk+b25lIGNoZWNrZWQgYmFnPC9saT5cbiAgICAgICAgICAgICAgPGxpPm91dHNpZGUgb2YgUHVlcnRvIFZhbGxhcnRhPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInNlZS1jb3N0cy1idXR0b24tY29udGFpbmVyXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2Nvc3RzLXNlY3Rpb24nKVxuICAgICAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdzdGFydCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tMiBzZWUtY29zdHMtYnV0dG9uXCI+U2VlIERldGFpbHM8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tb2JpbGUtY2FrZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltYWdlcy9jYWtlLnN2Zyk7XG4gICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogOHJlbTtcbiAgICAgIH1cbiAgICAgIC53ZWRkaW5nLWRheS10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgIH1cbiAgICAgIC53ZWRkaW5nLWRldGFpbHMtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS40cmVtO1xuICAgICAgfVxuICAgICAgLm1hcml2YWwtdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5tYXJpdmFsLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgfVxuICAgICAgLm1vYmlsZS1pbWFnZS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICAgIC5tb2JpbGUtbWV4aWNvIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1hZ2VzL21leGljby5wbmcpO1xuICAgICAgICB3aWR0aDogMTRyZW07XG4gICAgICAgIGhlaWdodDogMTRyZW07XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgfVxuICAgICAgLm1vYmlsZS1tYXJpdmFsIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1hZ2VzL01hcml2YWwtc21hbGwucG5nKTtcbiAgICAgICAgd2lkdGg6IDlyZW07XG4gICAgICAgIGhlaWdodDogOXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogLTUuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgfVxuICAgICAgLmJ1bGxldC1saXN0LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5zZWUtY29zdHMtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG5cbmV4cG9ydCBjb25zdCBXaGVuU2VjdGlvbk1vYmlsZSA9IHByb3BzID0+IChcbiAgPE1vYmlsZUxheW91dFxuICAgIGlkPVwid2hlbi1zZWN0aW9uXCJcbiAgICBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2NhYTE2ZScsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBtYXJnaW5Ub3A6ICctNXJlbScsXG4gICAgfX1cbiAgICBjb250ZW50PXttb2JpbGVDb250ZW50fVxuICAgIGNsYXNzTmFtZT1cInNlY3Rpb24gY2xpcC1wYXRoLTFcIlxuICAvPlxuKVxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/mobile/WhenSectionMobile.js */"));
var WhenSectionMobile = function WhenSectionMobile(props) {
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
      var height = this.state.height;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2753976109" + " " + "section-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-2753976109"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_IntroSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        height: height
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_PhotoSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
        height: height
      }), this.state.width < 650 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_mobile_InfoSectionMobile__WEBPACK_IMPORTED_MODULE_13__["InfoSectionMobile"], {
        height: height + 240
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_InfoSection__WEBPACK_IMPORTED_MODULE_12__["InfoSection"], {
        height: height
      }), this.state.width < 650 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_mobile_WhenSectionMobile__WEBPACK_IMPORTED_MODULE_15__["WhenSectionMobile"], {
        height: height + 100
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_WhenSection__WEBPACK_IMPORTED_MODULE_14__["WhenSection"], {
        height: height
      }), this.state.width < 650 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_mobile_CostsSectionMobile__WEBPACK_IMPORTED_MODULE_17__["CostsSectionMobile"], {
        height: height
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_CostsSection__WEBPACK_IMPORTED_MODULE_16__["CostsSection"], {
        height: height
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2753976109"
      }, "@font-face{font-family:WestburySignature;src:url('/static/fonts/WestburySignature.otf') format('opentype');}@font-face{font-family:LatoHairLine;src:url('/static/fonts/Lato-Hairline.ttf') format('truetype');}@font-face{font-family:LatoLight;src:url('/static/fonts/Lato-Light.ttf') format('truetype');}@font-face{font-family:Laila;src:url('/static/fonts/Laila-Regular.ttf') format('truetype');}*{box-sizing:border-box;}html,body{margin:0;padding:0;height:100vh;overflow-y:scroll;font-size:62.5%;background-color:#7c769e;font-family:LatoLight,serif;}a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}.abs{position:absolute;top:50%;left:50%;text-align:center;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.align-left{text-align:left;}.section{position:relative;text-align:center;}.content-container{height:100%;}.title{text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;min-width:35rem;}.title-1{font-size:5rem;color:#c2d2f5;}.title-2{font-size:4rem;color:white;}.title-3{color:white;font-size:3rem;}.title-4{color:white;font-size:2rem;}.title-5{color:white;font-size:1rem;}.title-left{text-align:left;}.subtitle{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:800;}.subtitle-1{color:#c2d2f5;font-size:2.4rem;}.subtitle-2{color:white;font-size:2.4rem;}.subtitle-3{color:white;font-size:1.8rem;}.first-letter{font-size:3rem;display:inline-block;font-family:Laila,serif;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}.font-westbury{font-family:WestburySignature;}.button{text-transform:uppercase;margin-left:auto;margin-right:auto;border-radius:50px;cursor:pointer;text-align:center;padding-top:1rem;padding-bottom:1rem;width:20rem;}.button-1{color:#c2d2f5;font-size:2rem;border:1px solid #c2d2f5;}.button-2{color:white;font-size:2rem;border:1px solid white;}.lastSection{display:none;}.clip-path-1{-webkit-clip-path:polygon(0 0,100% 0,100% 95%,50% 100%,0 95%);-webkit-clip-path:polygon(0 0,100% 0,100% 95%,50% 100%,0 95%);clip-path:polygon(0 0,100% 0,100% 95%,50% 100%,0 95%);}@media (max-width:950px){.lastSection{display:block !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RDJCLEFBRzJDLEFBSUwsQUFJSCxBQUlKLEFBSUksQUFJYixBQVNZLEFBSUgsQUFRRixBQUdFLEFBSU4sQUFHYSxBQU1WLEFBSUEsQUFJSCxBQUlBLEFBSUEsQUFJSSxBQUdHLEFBSUwsQUFJRixBQUlBLEFBSUcsQUFNZSxBQUdMLEFBV1gsQUFLRixBQUtDLEFBR3FELEFBS3ZDLFNBakhqQixHQTRCWixBQWlCaUIsQUFJQSxBQUlBLEFBZUUsQUFJQSxBQTZCRixDQUtqQixDQTFDbUIsQUFnQ0YsQ0EzREQsQUFJRixBQW1DUyxDQXZEdkIsQUFvQ0EsRUFqRWdFLEFBcUJ0RCxBQVdVLENBdkJMLEdBYjhDLEFBUTdELEdBWmdFLEFBK0M5QyxBQXNEQyxBQTZCakIsQ0FwR1MsQ0E0QlgsQUFJQSxBQUlBLEFBSUEsQUFnRHlCLEVBaEV6QixBQStCQSxBQUlBLEFBd0IyQixDQXJIeUMsQUFzR3BFLENBakJBLENBL0RvQixHQWFBLENBVXBCLEFBb0QyQixLQTdDTixDQXNERCxRQW5GRixBQU1GLEFBOEZoQixHQXZGMEMsQ0FrRjFDLE1BcEJxQixBQVNBLEVBc0J1QyxFQW5HNUQsRUFOMkIsYUFvRlYsQ0EvRmpCLENBSkEsTUFKQSxJQW9CK0IsQ0FZRyxDQTJDaEIsQ0E2QkUsRUE1R3BCLGFBZ0ZBLEdBNkJtQixPQXBGbkIsVUFxRnNCLEtBMURKLGVBMkRKLENBMURkLEdBNkNBLFFBY0EsaUJBaUJBLG1CQTVGQSIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9KYXBoV2VkZGluZ1NpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW50cm9TZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvSW50cm9TZWN0aW9uJ1xuaW1wb3J0IFBob3RvU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1Bob3RvU2VjdGlvbidcbmltcG9ydCB7IEluZm9TZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9JbmZvU2VjdGlvbidcbmltcG9ydCB7IEluZm9TZWN0aW9uTW9iaWxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2JpbGUvSW5mb1NlY3Rpb25Nb2JpbGUnXG5pbXBvcnQgeyBXaGVuU2VjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvV2hlblNlY3Rpb24nXG5pbXBvcnQgeyBXaGVuU2VjdGlvbk1vYmlsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbW9iaWxlL1doZW5TZWN0aW9uTW9iaWxlJ1xuaW1wb3J0IHsgQ29zdHNTZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db3N0c1NlY3Rpb24nXG5pbXBvcnQgeyBDb3N0c1NlY3Rpb25Nb2JpbGUgfSBmcm9tICcuLi9jb21wb25lbnRzL21vYmlsZS9Db3N0c1NlY3Rpb25Nb2JpbGUnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICB9XG5cbiAgdXBkYXRlRGltZW5zaW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZURpbWVuc2lvbnMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVEaW1lbnNpb25zKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8SW50cm9TZWN0aW9uIGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgICA8UGhvdG9TZWN0aW9uIGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgICB7dGhpcy5zdGF0ZS53aWR0aCA8IDY1MCA/IChcbiAgICAgICAgICA8SW5mb1NlY3Rpb25Nb2JpbGUgaGVpZ2h0PXtoZWlnaHQgKyAyNDB9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEluZm9TZWN0aW9uIGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgICApfVxuICAgICAgICB7dGhpcy5zdGF0ZS53aWR0aCA8IDY1MCA/IChcbiAgICAgICAgICA8V2hlblNlY3Rpb25Nb2JpbGUgaGVpZ2h0PXtoZWlnaHQgKyAxMDB9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFdoZW5TZWN0aW9uIGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgICApfVxuICAgICAgICB7dGhpcy5zdGF0ZS53aWR0aCA8IDY1MCA/IChcbiAgICAgICAgICA8Q29zdHNTZWN0aW9uTW9iaWxlIGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxDb3N0c1NlY3Rpb24gaGVpZ2h0PXtoZWlnaHR9IC8+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogV2VzdGJ1cnlTaWduYXR1cmU7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9XZXN0YnVyeVNpZ25hdHVyZS5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0xhdG8tSGFpcmxpbmUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvTGlnaHQ7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9MYXRvLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTGFpbGE7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9MYWlsYS1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sLFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICBmb250LXNpemU6IDYyLjUlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdjNzY5ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvTGlnaHQsIHNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWJzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWxpZ24tbGVmdCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VjdGlvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDM1cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUtMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDVyZW07XG4gICAgICAgICAgICBjb2xvcjogI2MyZDJmNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlLTIge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUtMyB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZS00IHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlLTUge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUtbGVmdCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJ0aXRsZS0xIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYzJkMmY1O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJ0aXRsZS0yIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3VidGl0bGUtMyB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpcnN0LWxldHRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTGFpbGEsIHNlcmlmO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvbnQtd2VzdGJ1cnkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFdlc3RidXJ5U2lnbmF0dXJlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgd2lkdGg6IDIwcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnV0dG9uLTEge1xuICAgICAgICAgICAgY29sb3I6ICNjMmQyZjU7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzJkMmY1O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnV0dG9uLTIge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYXN0U2VjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xpcC1wYXRoLTEge1xuICAgICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgOTUlLCA1MCUgMTAwJSwgMCA5NSUpO1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDk1JSwgNTAlIDEwMCUsIDAgOTUlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICAgICAgICAubGFzdFNlY3Rpb24ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/pages/index.js */"));
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