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

/***/ "./components/SectionFive.js":
/*!***********************************!*\
  !*** ./components/SectionFive.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var SectionFive = function SectionFive() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "costs-section",
    className: "jsx-3654780440" + " " + "section-five"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "costs-wrapper abs"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "costs-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "title title-five"
  }, "Due Dates"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "title left-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "required left-item"
  }, "$500 USD deposit is required by"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "required left-item"
  }, "The full amount is due by")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "title right-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "cost-date right-item"
  }, "September 3rd, 2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "cost-date right-item"
  }, "March 4th, 2020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "title title-five-two"
  }, "Total Cost"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "sub-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "title subtitle-five"
  }, "Leaving From Kelowna"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "title left-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "total-cost-item left-item"
  }, "Adult"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "total-cost-item left-item"
  }, "Ages 7-12"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "total-cost-item left-item"
  }, "Ages 2-6")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "title right-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "total-cost-item right-item"
  }, "$1544.35"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "total-cost-item right-item"
  }, "$1196.07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "total-cost-item right-item"
  }, "$887.54"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "sub-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "title subtitle-five"
  }, "Leaving From Vancouver"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "title left-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "total-cost-item left-item"
  }, "Adult"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "total-cost-item left-item"
  }, "Ages 7-12"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "total-cost-item left-item"
  }, "Ages 2-6")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "title right-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "total-cost-item right-item"
  }, "$1559.35"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "total-cost-item right-item"
  }, "$1206.07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "total-cost-item right-item"
  }, "$897.54"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "title final-note"
  }, "All rates include round trip airfare, round trip airport transfers, 7 nights all-inclusive accommodation, one checked bag per person and seat selection with the group towards the rear of the aircraft."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "title final-note"
  }, "This pricing is Guaranteed for the first 20 people who pay the deposit, and prices beyond those first 20 should still be very close to these rates, but are not guaranteed"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "title final-note"
  }, "Bookings can be done through our travel agent Holly Graves at", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3654780440" + " " + "title"
  }, "holly.graves@flightcentre.ca")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3654780440"
  }, ".section-five.jsx-3654780440{background:rgba(110,104,148,0.9);}.costs-wrapper.jsx-3654780440{width:100%;height:100%;margin-top:5%;}.costs-container.jsx-3654780440{position:relative;}.sub-container.jsx-3654780440{height:13rem;}.title-five.jsx-3654780440{margin-bottom:2rem;text-align:center;}.title-five-two.jsx-3654780440{margin-bottom:3rem;}.left-container.jsx-3654780440{width:50%;float:left;text-align:right;font-size:1.8rem;}.left-item.jsx-3654780440{margin-left:auto;margin-right:1rem;}.required.jsx-3654780440{margin-bottom:2rem;height:3rem;line-height:3rem;}.right-container.jsx-3654780440{width:50%;float:left;text-align:left;font-family:Laila;font-size:1.4rem;}.right-item.jsx-3654780440{margin-left:2rem;}.cost-date.jsx-3654780440{height:3rem;line-height:3rem;margin-bottom:2rem;}.subtitle-five.jsx-3654780440{font-size:1.2rem;margin-top:-2rem;}.total-cost-item.jsx-3654780440{height:1.5rem;line-height:3.5rem;margin-bottom:1rem;height:1.5rem;line-height:3.5rem;margin-bottom:1rem;}.final-note.jsx-3654780440{font-family:Laila;font-size:1.2rem;width:60rem;margin-left:auto;margin-right:auto;margin-bottom:2rem;}@media (max-width:1200px){.left-container.jsx-3654780440{font-size:1.2rem;}.right-container.jsx-3654780440{font-size:1rem;}.final-note.jsx-3654780440{font-size:0.8rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1NlY3Rpb25GaXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEZ0IsQUFHNkMsQUFHekIsQUFLTyxBQUdMLEFBR00sQUFJQSxBQUdULEFBTU8sQUFJRSxBQUtULEFBT08sQUFHTCxBQUtLLEFBSUgsQUFRSSxBQVNDLEFBR0YsQUFHRSxVQXhEUixBQWVBLENBakNDLENBMkNLLENBbkNuQixDQTRDcUIsQ0FvQm5CLEVBaERrQixBQWdCcEIsQUFRbUIsQUFxQmpCLEFBTUEsQ0F0RUYsQUF1RG1CLENBakRDLEFBSXBCLEFBYWMsRUFUSyxBQWVELEVBakNGLE1BMkNLLEVBZkYsRUFoQ25CLEFBd0RxQixDQUpyQixDQXhCQSxBQW9DYyxFQTNEZCxBQVVBLEFBdUJvQixDQWZELFNBMENBLENBaENuQixBQWVBLElBU2dCLEdBakNoQixBQWVtQixTQTJCQyxFQVJDLE1BbEJyQixVQTJCcUIsR0FSQSxnQkFTckIsR0FSQSIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9KYXBoV2VkZGluZ1NpdGUvY29tcG9uZW50cy9TZWN0aW9uRml2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNlY3Rpb25GaXZlID0gKCkgPT4gKFxuICA8c2VjdGlvbiBpZD1cImNvc3RzLXNlY3Rpb25cIiBjbGFzc05hbWU9XCJzZWN0aW9uLWZpdmVcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvc3RzLXdyYXBwZXIgYWJzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvc3RzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHRpdGxlLWZpdmVcIj5EdWUgRGF0ZXM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBsZWZ0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWlyZWQgbGVmdC1pdGVtXCI+XG4gICAgICAgICAgICAkNTAwIFVTRCBkZXBvc2l0IGlzIHJlcXVpcmVkIGJ5XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1aXJlZCBsZWZ0LWl0ZW1cIj5UaGUgZnVsbCBhbW91bnQgaXMgZHVlIGJ5PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHJpZ2h0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdC1kYXRlIHJpZ2h0LWl0ZW1cIj5TZXB0ZW1iZXIgM3JkLCAyMDE5PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3N0LWRhdGUgcmlnaHQtaXRlbVwiPk1hcmNoIDR0aCwgMjAyMDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZS1maXZlLXR3b1wiPlRvdGFsIENvc3Q8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBzdWJ0aXRsZS1maXZlXCI+TGVhdmluZyBGcm9tIEtlbG93bmE8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGxlZnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSBsZWZ0LWl0ZW1cIj5BZHVsdDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbC1jb3N0LWl0ZW0gbGVmdC1pdGVtXCI+QWdlcyA3LTEyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSBsZWZ0LWl0ZW1cIj5BZ2VzIDItNjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgcmlnaHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSByaWdodC1pdGVtXCI+JDE1NDQuMzU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWwtY29zdC1pdGVtIHJpZ2h0LWl0ZW1cIj4kMTE5Ni4wNzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbC1jb3N0LWl0ZW0gcmlnaHQtaXRlbVwiPiQ4ODcuNTQ8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgc3VidGl0bGUtZml2ZVwiPkxlYXZpbmcgRnJvbSBWYW5jb3V2ZXI8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGxlZnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSBsZWZ0LWl0ZW1cIj5BZHVsdDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbC1jb3N0LWl0ZW0gbGVmdC1pdGVtXCI+QWdlcyA3LTEyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSBsZWZ0LWl0ZW1cIj5BZ2VzIDItNjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgcmlnaHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLWNvc3QtaXRlbSByaWdodC1pdGVtXCI+JDE1NTkuMzU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWwtY29zdC1pdGVtIHJpZ2h0LWl0ZW1cIj4kMTIwNi4wNzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbC1jb3N0LWl0ZW0gcmlnaHQtaXRlbVwiPiQ4OTcuNTQ8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgZmluYWwtbm90ZVwiPlxuICAgICAgICAgIEFsbCByYXRlcyBpbmNsdWRlIHJvdW5kIHRyaXAgYWlyZmFyZSwgcm91bmQgdHJpcCBhaXJwb3J0IHRyYW5zZmVycywgN1xuICAgICAgICAgIG5pZ2h0cyBhbGwtaW5jbHVzaXZlIGFjY29tbW9kYXRpb24sIG9uZSBjaGVja2VkIGJhZyBwZXIgcGVyc29uIGFuZFxuICAgICAgICAgIHNlYXQgc2VsZWN0aW9uIHdpdGggdGhlIGdyb3VwIHRvd2FyZHMgdGhlIHJlYXIgb2YgdGhlIGFpcmNyYWZ0LlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBmaW5hbC1ub3RlXCI+XG4gICAgICAgICAgVGhpcyBwcmljaW5nIGlzIEd1YXJhbnRlZWQgZm9yIHRoZSBmaXJzdCAyMCBwZW9wbGUgd2hvIHBheSB0aGVcbiAgICAgICAgICBkZXBvc2l0LCBhbmQgcHJpY2VzIGJleW9uZCB0aG9zZSBmaXJzdCAyMCBzaG91bGQgc3RpbGwgYmUgdmVyeSBjbG9zZVxuICAgICAgICAgIHRvIHRoZXNlIHJhdGVzLCBidXQgYXJlIG5vdCBndWFyYW50ZWVkXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGZpbmFsLW5vdGVcIj5cbiAgICAgICAgICBCb29raW5ncyBjYW4gYmUgZG9uZSB0aHJvdWdoIG91ciB0cmF2ZWwgYWdlbnQgSG9sbHkgR3JhdmVzIGF0XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPmhvbGx5LmdyYXZlc0BmbGlnaHRjZW50cmUuY2E8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc2VjdGlvbi1maXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMTAsIDEwNCwgMTQ4LCAwLjkpO1xuICAgICAgfVxuICAgICAgLmNvc3RzLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgIH1cbiAgICAgIC5jb3N0cy1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuc3ViLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTNyZW07XG4gICAgICB9XG4gICAgICAudGl0bGUtZml2ZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC50aXRsZS1maXZlLXR3byB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICB9XG4gICAgICAubGVmdC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgfVxuICAgICAgLmxlZnQtaXRlbSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgICAucmVxdWlyZWQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgICAgfVxuICAgICAgLnJpZ2h0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LWZhbWlseTogTGFpbGE7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgfVxuICAgICAgLnJpZ2h0LWl0ZW0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5jb3N0LWRhdGUge1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgfVxuICAgICAgLnN1YnRpdGxlLWZpdmUge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTJyZW07XG4gICAgICB9XG4gICAgICAudG90YWwtY29zdC1pdGVtIHtcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMy41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgfVxuICAgICAgLmZpbmFsLW5vdGUge1xuICAgICAgICBmb250LWZhbWlseTogTGFpbGE7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB3aWR0aDogNjByZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIC5sZWZ0LWNvbnRhaW5lciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnJpZ2h0LWNvbnRhaW5lciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5maW5hbC1ub3RlIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uRml2ZVxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/SectionFive.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionFive);

/***/ }),

/***/ "./components/SectionFour.js":
/*!***********************************!*\
  !*** ./components/SectionFour.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_SplitLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/SplitLayout */ "./components/shared/SplitLayout.js");



var leftElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4177205054" + " " + "cake"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4177205054" + " " + "main-button secondary-button see-marival-button"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://www.marival.com/",
  target: "_blank",
  className: "jsx-4177205054"
}, "Marival")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4177205054" + " " + "marival-details"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4177205054" + " " + "trip-dates"
}, "May 23rd \u2013 May 30th, 2020"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4177205054" + " " + "wedding-day-title"
}, "Wedding Day"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4177205054" + " " + "trip-dates"
}, "May 25th, 2020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4177205054"
}, ".cake.jsx-4177205054{background-image:url(/static/images/cake.svg);width:20rem;height:20rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:1rem;margin-top:2rem;}.see-marival-button.jsx-4177205054{margin-top:1rem;}.see-marival-button.jsx-4177205054:hover{background-color:#e5f6ff;color:#e4c39a;}.marival-details.jsx-4177205054{font-family:LatoHairLine;color:white;font-size:2rem;text-align:center;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.trip-dates.jsx-4177205054{margin-top:1rem;}.wedding-day-title.jsx-4177205054{font-family:WestburySignature;margin-top:1rem;font-size:4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1NlY3Rpb25Gb3VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFHdUQsQUFVOUIsQUFHUyxBQUlBLEFBT1QsQUFHYyxnQkFoQmhDLEFBY0EsU0FYZ0IsQUFJRixLQVVJLE9BVEQsRUFKakIsT0FkYyxBQTRCRyxNQVRHLE1BbEJMLEdBNEJmLFNBVHFCLENBbEJHLHNCQUNMLGlCQUNDLGtCQUNDLG1CQUNILGdCQUNsQixBQWNBIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1NlY3Rpb25Gb3VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU3BsaXRMYXlvdXQgZnJvbSAnLi9zaGFyZWQvU3BsaXRMYXlvdXQnXG5cbmNvbnN0IGxlZnRFbGVtZW50ID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYWtlXCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uIHNlY29uZGFyeS1idXR0b24gc2VlLW1hcml2YWwtYnV0dG9uXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFyaXZhbC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIE1hcml2YWxcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcml2YWwtZGV0YWlsc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlwLWRhdGVzXCI+TWF5IDIzcmQg4oCTIE1heSAzMHRoLCAyMDIwPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZGRpbmctZGF5LXRpdGxlXCI+V2VkZGluZyBEYXk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpcC1kYXRlc1wiPk1heSAyNXRoLCAyMDIwPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNha2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvY2FrZS5zdmcpO1xuICAgICAgICB3aWR0aDogMjByZW07XG4gICAgICAgIGhlaWdodDogMjByZW07XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICB9XG4gICAgICAuc2VlLW1hcml2YWwtYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5zZWUtbWFyaXZhbC1idXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmNmZmO1xuICAgICAgICBjb2xvcjogI2U0YzM5YTtcbiAgICAgIH1cbiAgICAgIC5tYXJpdmFsLWRldGFpbHMge1xuICAgICAgICBmb250LWZhbWlseTogTGF0b0hhaXJMaW5lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgfVxuICAgICAgLnRyaXAtZGF0ZXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgfVxuICAgICAgLndlZGRpbmctZGF5LXRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFdlc3RidXJ5U2lnbmF0dXJlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5jb25zdCByaWdodEVsZW1lbnQgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgdGl0bGUtZm91clwiPldoZW4gJiBXaGVyZTwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZS1mb3VyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0LWxldHRlclwiPkZvcjwvZGl2PiB0aG9zZSBvZiB5b3UgdGhhdCBhcmUgYWJsZSB0b1xuICAgICAgY29tZSwgd2UgaGF2ZSBvcmdhbml6ZWQgb3VyIHdlZGRpbmcgYXQgdGhlIE1hcml2YWwgaW4gTnVldm8gVmFsbGFydGEsIGp1c3RcbiAgICAgIG91dHNpZGUgb2YgUHVlcnRvIFZhbGxhcnRhLlxuICAgICAgPHA+XG4gICAgICAgIFRoZSBwYWNrYWdlIHdl4oCZdmUgb3JnYW5pemVkIGNvc3RzIGp1c3QgdW5kZXJ7JyAnfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0LWxldHRlclwiPiQxNjAwPC9kaXY+LCBhbmQgaW5jbHVkZXM6XG4gICAgICAgIDxkaXYgZGlyPVwicnRsXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPmFsbCBpbmNsdXNpdmUgNyBkYXkgc3RheTwvbGk+XG4gICAgICAgICAgICA8bGk+YWlyZmFyZTwvbGk+XG4gICAgICAgICAgICA8bGk+YWlycG9ydCBzaHV0dGxlczwvbGk+XG4gICAgICAgICAgICA8bGk+b25lIGNoZWNrZWQgYmFnPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcD5cbiAgICAgIENoZWNrIG91dCBvdXIgZGV0YWlsZWQgYnJlYWtkb3duIG9mIHRoZSBjb3N0cyBpbnZvbHZlZCwgYXMgd2VsbCBhcyBkZXBvc2l0XG4gICAgICBhbW91bnRzIGFuZCBwYXltZW50IGRhdGVzLlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJzZWUtY29zdHMtY29udGFpbmVyXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2Nvc3RzLXNlY3Rpb24nKVxuICAgICAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdlbmQnLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ1dHRvbiBzZWUtY29zdHMtYnV0dG9uXCI+Q29zdHM8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1mb3VyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTByZW07XG4gICAgICB9XG4gICAgICAuc3VidGl0bGUtZm91ciB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTByZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgICAuc2VlLWNvc3RzLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5zZWUtY29zdHMtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjZmZjtcbiAgICAgICAgY29sb3I6ICNlNGMzOWE7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIC50aXRsZS1mb3VyIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJ0aXRsZS1mb3VyIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5jb25zdCBTZWN0aW9uRm91ciA9ICgpID0+IChcbiAgPFNwbGl0TGF5b3V0XG4gICAgaWQ9XCJ3aGVuLXNlY3Rpb25cIlxuICAgIGJhY2tncm91bmRDb2xvcj1cIiNjYWExNmVcIlxuICAgIGxlZnRFbGVtZW50PXtsZWZ0RWxlbWVudH1cbiAgICByaWdodEVsZW1lbnQ9e3JpZ2h0RWxlbWVudH1cbiAgLz5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkZvdXJcbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/SectionFour.js */"));
var rightElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
  className: "jsx-1169132518" + " " + "title title-four"
}, "When & Where"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-1169132518" + " " + "subtitle-four"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-1169132518" + " " + "first-letter"
}, "For"), " those of you that are able to come, we have organized our wedding at the Marival in Nuevo Vallarta, just outside of Puerto Vallarta.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "jsx-1169132518"
}, "The package we\u2019ve organized costs just under", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-1169132518" + " " + "first-letter"
}, "$1600"), ", and includes:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  dir: "rtl",
  className: "jsx-1169132518"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
  className: "jsx-1169132518"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-1169132518"
}, "all inclusive 7 day stay"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-1169132518"
}, "airfare"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-1169132518"
}, "airport shuttles"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  className: "jsx-1169132518"
}, "one checked bag")))), "Check out our detailed breakdown of the costs involved, as well as deposit amounts and payment dates.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  onClick: function onClick() {
    document.getElementById('costs-section').scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    });
  },
  className: "jsx-1169132518" + " " + "see-costs-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-1169132518" + " " + "main-button see-costs-button"
}, "Costs"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1169132518"
}, ".title-four.jsx-1169132518{color:white;text-align:right;padding-right:10rem;}.subtitle-four.jsx-1169132518{font-family:LatoHairLine;color:white;font-size:2rem;text-align:right;padding-right:10rem;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:400;}.see-costs-button.jsx-1169132518{color:white;font-size:2rem;border:1px solid white;margin-top:2rem;}.see-costs-button.jsx-1169132518:hover{background-color:#e5f6ff;color:#e4c39a;}@media (max-width:1200px){.title-four.jsx-1169132518{padding-right:2rem;}.subtitle-four.jsx-1169132518{padding-right:2rem;font-size:1.6rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1NlY3Rpb25Gb3VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGZ0IsQUFHcUIsQUFLYSxBQVNiLEFBTWEsQUFLSixBQUdBLFlBM0JKLEFBY0YsT0FXZixBQUdtQixNQXZCUCxBQWVFLEVBTFMsRUFkSCxPQTRCcEIsQ0F2QmUsRUFlakIsVUFuQkEsQ0Fja0IsRUFUQyxjQVVuQixHQVRzQixvQkFDRCw2RkFDSCxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvSmFwaFdlZGRpbmdTaXRlL2NvbXBvbmVudHMvU2VjdGlvbkZvdXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBTcGxpdExheW91dCBmcm9tICcuL3NoYXJlZC9TcGxpdExheW91dCdcblxuY29uc3QgbGVmdEVsZW1lbnQgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNha2VcIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1idXR0b24gc2Vjb25kYXJ5LWJ1dHRvbiBzZWUtbWFyaXZhbC1idXR0b25cIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5tYXJpdmFsLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgTWFyaXZhbFxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyaXZhbC1kZXRhaWxzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaXAtZGF0ZXNcIj5NYXkgMjNyZCDigJMgTWF5IDMwdGgsIDIwMjA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VkZGluZy1kYXktdGl0bGVcIj5XZWRkaW5nIERheTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlwLWRhdGVzXCI+TWF5IDI1dGgsIDIwMjA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2FrZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltYWdlcy9jYWtlLnN2Zyk7XG4gICAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5zZWUtbWFyaXZhbC1idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1tYXJpdmFsLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY2ZmY7XG4gICAgICAgIGNvbG9yOiAjZTRjMzlhO1xuICAgICAgfVxuICAgICAgLm1hcml2YWwtZGV0YWlscyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICB9XG4gICAgICAudHJpcC1kYXRlcyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICB9XG4gICAgICAud2VkZGluZy1kYXktdGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogV2VzdGJ1cnlTaWduYXR1cmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG5cbmNvbnN0IHJpZ2h0RWxlbWVudCA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZS1mb3VyXCI+V2hlbiAmIFdoZXJlPC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlLWZvdXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtbGV0dGVyXCI+Rm9yPC9kaXY+IHRob3NlIG9mIHlvdSB0aGF0IGFyZSBhYmxlIHRvXG4gICAgICBjb21lLCB3ZSBoYXZlIG9yZ2FuaXplZCBvdXIgd2VkZGluZyBhdCB0aGUgTWFyaXZhbCBpbiBOdWV2byBWYWxsYXJ0YSwganVzdFxuICAgICAgb3V0c2lkZSBvZiBQdWVydG8gVmFsbGFydGEuXG4gICAgICA8cD5cbiAgICAgICAgVGhlIHBhY2thZ2Ugd2XigJl2ZSBvcmdhbml6ZWQgY29zdHMganVzdCB1bmRlcnsnICd9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtbGV0dGVyXCI+JDE2MDA8L2Rpdj4sIGFuZCBpbmNsdWRlczpcbiAgICAgICAgPGRpdiBkaXI9XCJydGxcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+YWxsIGluY2x1c2l2ZSA3IGRheSBzdGF5PC9saT5cbiAgICAgICAgICAgIDxsaT5haXJmYXJlPC9saT5cbiAgICAgICAgICAgIDxsaT5haXJwb3J0IHNodXR0bGVzPC9saT5cbiAgICAgICAgICAgIDxsaT5vbmUgY2hlY2tlZCBiYWc8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9wPlxuICAgICAgQ2hlY2sgb3V0IG91ciBkZXRhaWxlZCBicmVha2Rvd24gb2YgdGhlIGNvc3RzIGludm9sdmVkLCBhcyB3ZWxsIGFzIGRlcG9zaXRcbiAgICAgIGFtb3VudHMgYW5kIHBheW1lbnQgZGF0ZXMuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInNlZS1jb3N0cy1jb250YWluZXJcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgnY29zdHMtc2VjdGlvbicpXG4gICAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ2VuZCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uIHNlZS1jb3N0cy1idXR0b25cIj5Db3N0czwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLWZvdXIge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbiAgICAgIH1cbiAgICAgIC5zdWJ0aXRsZS1mb3VyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICAgIC5zZWUtY29zdHMtYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgfVxuICAgICAgLnNlZS1jb3N0cy1idXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmNmZmO1xuICAgICAgICBjb2xvcjogI2U0YzM5YTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgLnRpdGxlLWZvdXIge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN1YnRpdGxlLWZvdXIge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG5cbmNvbnN0IFNlY3Rpb25Gb3VyID0gKCkgPT4gKFxuICA8U3BsaXRMYXlvdXRcbiAgICBpZD1cIndoZW4tc2VjdGlvblwiXG4gICAgYmFja2dyb3VuZENvbG9yPVwiI2NhYTE2ZVwiXG4gICAgbGVmdEVsZW1lbnQ9e2xlZnRFbGVtZW50fVxuICAgIHJpZ2h0RWxlbWVudD17cmlnaHRFbGVtZW50fVxuICAvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uRm91clxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/SectionFour.js */"));

var SectionFour = function SectionFour() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_SplitLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "when-section",
    backgroundColor: "#caa16e",
    leftElement: leftElement,
    rightElement: rightElement
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SectionFour);

/***/ }),

/***/ "./components/SectionOne.js":
/*!**********************************!*\
  !*** ./components/SectionOne.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var SectionOne = function SectionOne() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-715427148" + " " + "section-one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-715427148" + " " + "content-container content-container-one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-715427148" + " " + "abs"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-715427148" + " " + "title-one"
  }, "Raph & Jeff"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-715427148" + " " + "title subtitle-one"
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
    className: "jsx-715427148" + " " + "see-info-button-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-715427148" + " " + "main-button"
  }, "See Info"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "715427148"
  }, ".section-one.jsx-715427148{background-image:url(/static/images/MainPage.gif);}.content-container-one.jsx-715427148{background:rgba(110,104,148,0.9);}.title-one.jsx-715427148{font-size:5rem;color:#c2d2f5;font-family:LatoHairLine;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;padding-bottom:2rem;}.subtitle-one.jsx-715427148{color:#c2d2f5;}.title.jsx-715427148{font-size:3rem;font-family:LatoHairLine;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;padding-bottom:2rem;}.see-info-button-container.jsx-715427148{position:absolute;width:100%;text-align:center;bottom:150px;}@media (max-width:700px){.title-one.jsx-715427148{font-size:3rem;}.title.jsx-715427148{font-size:1rem;}.see-info-button-container.jsx-715427148{bottom:4rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1NlY3Rpb25PbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJnQixBQUcyRCxBQUdkLEFBR3JCLEFBU0QsQUFHQyxBQVFHLEFBT0QsQUFHQSxBQUdILFlBQ2QsRUF4QkYsQ0FUZ0IsQUFZVyxBQWV6QixBQUdBLEdBVlcsV0FuQmMsQUFvQlAsSUF4QnBCLE9BZ0IyQixPQVNaLEdBNUJmLElBUTJCLE1BcUIzQixLQVRrQixjQVhBLEVBWUcsY0FYQSwrRUFZQyxjQVhBLE1BWXRCLGNBWEEiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvSmFwaFdlZGRpbmdTaXRlL2NvbXBvbmVudHMvU2VjdGlvbk9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNlY3Rpb25PbmUgPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tb25lXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lciBjb250ZW50LWNvbnRhaW5lci1vbmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtb25lXCI+UmFwaCAmIEplZmY8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBzdWJ0aXRsZS1vbmVcIj5NZXhpY28gMjAyMDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInNlZS1pbmZvLWJ1dHRvbi1jb250YWluZXJcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgncGhvdG8tc2VjdGlvbicpXG4gICAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ2VuZCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKCdpbmZvLXNlY3Rpb24nKVxuICAgICAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ2VuZCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1idXR0b25cIj5TZWUgSW5mbzwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnNlY3Rpb24tb25lIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1hZ2VzL01haW5QYWdlLmdpZik7XG4gICAgICB9XG4gICAgICAuY29udGVudC1jb250YWluZXItb25lIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMTAsIDEwNCwgMTQ4LCAwLjkpO1xuICAgICAgfVxuICAgICAgLnRpdGxlLW9uZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgICAgY29sb3I6ICNjMmQyZjU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgICAgfVxuICAgICAgLnN1YnRpdGxlLW9uZSB7XG4gICAgICAgIGNvbG9yOiAjYzJkMmY1O1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBmb250LWZhbWlseTogTGF0b0hhaXJMaW5lO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5zZWUtaW5mby1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3R0b206IDE1MHB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIC50aXRsZS1vbmUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc2VlLWluZm8tYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgYm90dG9tOiA0cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25PbmVcbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/SectionOne.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionOne);

/***/ }),

/***/ "./components/SectionThree.js":
/*!************************************!*\
  !*** ./components/SectionThree.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_SplitLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/SplitLayout */ "./components/shared/SplitLayout.js");



var leftElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
  className: "jsx-4237437967" + " " + "title title-three"
}, "Info"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4237437967" + " " + "subtitle-three"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4237437967" + " " + "first-letter"
}, "If"), " you\u2019ve made it this far, there\u2019s a good chance we\u2019ve invited you to our wedding in Mexico! There\u2019s also a good chance that you\u2019d love to come, but are unable to make it work due to cost or time constraints or any other reason, and we understand that and will be sending information out to everyone for a Ceremony and Dance we\u2019ll be having at home for those of you that can\u2019t make it to Mexico, because we love you all!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4237437967"
}, ".title-three.jsx-4237437967{color:white;text-align:left;padding-left:10rem;}.subtitle-three.jsx-4237437967{font-family:LatoHairLine;color:white;font-size:2rem;text-align:left;padding-left:10rem;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:400;}@media (max-width:1200px){.title-three.jsx-4237437967{padding-left:2rem;}.subtitle-three.jsx-4237437967{padding-left:2rem;}}@media (max-width:950px){.title-three.jsx-4237437967{padding-left:5rem;}.subtitle-three.jsx-4237437967:{padding-left:4rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1NlY3Rpb25UaHJlZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmdCLEFBR3FCLEFBS2EsQUFVTCxBQUdBLEFBS0EsQUFHQSxZQXpCSixNQWVoQixBQUdBLEFBS0EsQUFHQSxPQXJCWSxHQUpPLFNBS0osVUFKakIsS0FLa0IsZ0JBQ0csbUJBQ0EsNkZBQ0gsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1NlY3Rpb25UaHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNwbGl0TGF5b3V0IGZyb20gJy4vc2hhcmVkL1NwbGl0TGF5b3V0J1xuXG5jb25zdCBsZWZ0RWxlbWVudCA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZS10aHJlZVwiPkluZm88L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGUtdGhyZWVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtbGV0dGVyXCI+SWY8L2Rpdj4geW914oCZdmUgbWFkZSBpdCB0aGlzIGZhciwgdGhlcmXigJlzIGFcbiAgICAgIGdvb2QgY2hhbmNlIHdl4oCZdmUgaW52aXRlZCB5b3UgdG8gb3VyIHdlZGRpbmcgaW4gTWV4aWNvISBUaGVyZeKAmXMgYWxzbyBhXG4gICAgICBnb29kIGNoYW5jZSB0aGF0IHlvdeKAmWQgbG92ZSB0byBjb21lLCBidXQgYXJlIHVuYWJsZSB0byBtYWtlIGl0IHdvcmsgZHVlIHRvXG4gICAgICBjb3N0IG9yIHRpbWUgY29uc3RyYWludHMgb3IgYW55IG90aGVyIHJlYXNvbiwgYW5kIHdlIHVuZGVyc3RhbmQgdGhhdCBhbmRcbiAgICAgIHdpbGwgYmUgc2VuZGluZyBpbmZvcm1hdGlvbiBvdXQgdG8gZXZlcnlvbmUgZm9yIGEgQ2VyZW1vbnkgYW5kIERhbmNlIHdl4oCZbGxcbiAgICAgIGJlIGhhdmluZyBhdCBob21lIGZvciB0aG9zZSBvZiB5b3UgdGhhdCBjYW7igJl0IG1ha2UgaXQgdG8gTWV4aWNvLCBiZWNhdXNlXG4gICAgICB3ZSBsb3ZlIHlvdSBhbGwhXG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLXRocmVlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcmVtO1xuICAgICAgfVxuICAgICAgLnN1YnRpdGxlLXRocmVlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIC50aXRsZS10aHJlZSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJ0aXRsZS10aHJlZSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgLnRpdGxlLXRocmVlIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN1YnRpdGxlLXRocmVlOiB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5jb25zdCByaWdodEVsZW1lbnQgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbHBoaW5cIiAvPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInNlZS1kYXRlLWJ1dHRvbi1jb250YWluZXJcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgnd2hlbi1zZWN0aW9uJylcbiAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ2VuZCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uIHNlY29uZGFyeS1idXR0b24gc2VlLWRhdGUtYnV0dG9uXCI+XG4gICAgICAgIFdoZW4gJiBXaGVyZVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRvbHBoaW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvZG9scGhpbi5zdmcpO1xuICAgICAgICB3aWR0aDogMjByZW07XG4gICAgICAgIGhlaWdodDogMjByZW07XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICB9XG4gICAgICAuc2VlLWRhdGUtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgfVxuICAgICAgLnNlZS1kYXRlLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY2ZmY7XG4gICAgICAgIGNvbG9yOiAjNDRiZWUwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuY29uc3QgU2VjdGlvblRocmVlID0gKCkgPT4gKFxuICA8U3BsaXRMYXlvdXRcbiAgICBpZD1cImluZm8tc2VjdGlvblwiXG4gICAgYmFja2dyb3VuZENvbG9yPVwiIzQ0QkVFMFwiXG4gICAgbGVmdEVsZW1lbnQ9e2xlZnRFbGVtZW50fVxuICAgIHJpZ2h0RWxlbWVudD17cmlnaHRFbGVtZW50fVxuICAvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uVGhyZWVcbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/SectionThree.js */"));
var rightElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2462174585" + " " + "dolphin"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  onClick: function onClick() {
    document.getElementById('when-section').scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    });
  },
  className: "jsx-2462174585" + " " + "see-date-button-container"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2462174585" + " " + "main-button secondary-button see-date-button"
}, "When & Where")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2462174585"
}, ".dolphin.jsx-2462174585{background-image:url(/static/images/dolphin.svg);width:20rem;height:20rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:2rem;margin-top:4rem;}.see-date-button.jsx-2462174585{width:320px;}.see-date-button.jsx-2462174585:hover{background-color:#e5f6ff;color:#44bee0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1NlY3Rpb25UaHJlZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRWdCLEFBRzBELEFBVXJDLEFBR2EsWUFGM0IsYUFHZ0IsY0FDaEIsVUFkYyxZQUNDLGFBQ1Msc0JBQ0wsaUJBQ0Msa0JBQ0MsbUJBQ0gsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1NlY3Rpb25UaHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNwbGl0TGF5b3V0IGZyb20gJy4vc2hhcmVkL1NwbGl0TGF5b3V0J1xuXG5jb25zdCBsZWZ0RWxlbWVudCA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZS10aHJlZVwiPkluZm88L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGUtdGhyZWVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtbGV0dGVyXCI+SWY8L2Rpdj4geW914oCZdmUgbWFkZSBpdCB0aGlzIGZhciwgdGhlcmXigJlzIGFcbiAgICAgIGdvb2QgY2hhbmNlIHdl4oCZdmUgaW52aXRlZCB5b3UgdG8gb3VyIHdlZGRpbmcgaW4gTWV4aWNvISBUaGVyZeKAmXMgYWxzbyBhXG4gICAgICBnb29kIGNoYW5jZSB0aGF0IHlvdeKAmWQgbG92ZSB0byBjb21lLCBidXQgYXJlIHVuYWJsZSB0byBtYWtlIGl0IHdvcmsgZHVlIHRvXG4gICAgICBjb3N0IG9yIHRpbWUgY29uc3RyYWludHMgb3IgYW55IG90aGVyIHJlYXNvbiwgYW5kIHdlIHVuZGVyc3RhbmQgdGhhdCBhbmRcbiAgICAgIHdpbGwgYmUgc2VuZGluZyBpbmZvcm1hdGlvbiBvdXQgdG8gZXZlcnlvbmUgZm9yIGEgQ2VyZW1vbnkgYW5kIERhbmNlIHdl4oCZbGxcbiAgICAgIGJlIGhhdmluZyBhdCBob21lIGZvciB0aG9zZSBvZiB5b3UgdGhhdCBjYW7igJl0IG1ha2UgaXQgdG8gTWV4aWNvLCBiZWNhdXNlXG4gICAgICB3ZSBsb3ZlIHlvdSBhbGwhXG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLXRocmVlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcmVtO1xuICAgICAgfVxuICAgICAgLnN1YnRpdGxlLXRocmVlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIC50aXRsZS10aHJlZSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJ0aXRsZS10aHJlZSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgLnRpdGxlLXRocmVlIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN1YnRpdGxlLXRocmVlOiB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5jb25zdCByaWdodEVsZW1lbnQgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbHBoaW5cIiAvPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInNlZS1kYXRlLWJ1dHRvbi1jb250YWluZXJcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgnd2hlbi1zZWN0aW9uJylcbiAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ2VuZCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uIHNlY29uZGFyeS1idXR0b24gc2VlLWRhdGUtYnV0dG9uXCI+XG4gICAgICAgIFdoZW4gJiBXaGVyZVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRvbHBoaW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvZG9scGhpbi5zdmcpO1xuICAgICAgICB3aWR0aDogMjByZW07XG4gICAgICAgIGhlaWdodDogMjByZW07XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICB9XG4gICAgICAuc2VlLWRhdGUtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgfVxuICAgICAgLnNlZS1kYXRlLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY2ZmY7XG4gICAgICAgIGNvbG9yOiAjNDRiZWUwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuY29uc3QgU2VjdGlvblRocmVlID0gKCkgPT4gKFxuICA8U3BsaXRMYXlvdXRcbiAgICBpZD1cImluZm8tc2VjdGlvblwiXG4gICAgYmFja2dyb3VuZENvbG9yPVwiIzQ0QkVFMFwiXG4gICAgbGVmdEVsZW1lbnQ9e2xlZnRFbGVtZW50fVxuICAgIHJpZ2h0RWxlbWVudD17cmlnaHRFbGVtZW50fVxuICAvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uVGhyZWVcbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/SectionThree.js */"));

var SectionThree = function SectionThree() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_SplitLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "info-section",
    backgroundColor: "#44BEE0",
    leftElement: leftElement,
    rightElement: rightElement
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SectionThree);

/***/ }),

/***/ "./components/SectionTwo.js":
/*!**********************************!*\
  !*** ./components/SectionTwo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var SectionTwo = function SectionTwo() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
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
  }, ".imageGrid.jsx-397718797{line-height:0;}.imageGrid.jsx-397718797 .tile.jsx-397718797{width:33.33%;min-height:calc(100vh / 4);display:inline-block;background-size:cover;background-position:center center;background-repeat:no-repeat;overflow:hidden;position:relative;cursor:pointer;cursor:hand;}.tile1.jsx-397718797{background-image:url('http://bit.ly/2P0xBZE');}.tile2.jsx-397718797{background-image:url('http://bit.ly/2UHd55z');}.tile3.jsx-397718797{background-image:url('http://bit.ly/2Kk5fLj');}.tile4.jsx-397718797{background-image:url('http://bit.ly/2CZ1eGb');}.tile5.jsx-397718797{background-image:url('https://bit.ly/2ImJpEA');}.tile6.jsx-397718797{background-image:url('https://bit.ly/2uWJCX8');}.tile7.jsx-397718797{background-image:url('http://bit.ly/2P131ix');}.tile8.jsx-397718797{background-image:url('https://bit.ly/2IiLdhG');}.tile9.jsx-397718797{background-image:url('http://bit.ly/2uSDhMa');}.tile10.jsx-397718797{background-image:url('http://bit.ly/2I89bwY');}.tile11.jsx-397718797{background-image:url('http://bit.ly/2VtwrIQ');}.tile12.jsx-397718797{background-image:url('http://bit.ly/2Z2GuXB');background-position-y:100% !important;}@media (max-width:1000px){.imageGrid.jsx-397718797 .tile.jsx-397718797{width:50%;}}@media (max-width:700px){.imageGrid.jsx-397718797 .tile.jsx-397718797{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1NlY3Rpb25Ud28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JnQixBQUd1QixBQUdELEFBY2lDLEFBR0EsQUFHQSxBQUdBLEFBR0MsQUFHQSxBQUdELEFBR0MsQUFHRCxBQUdBLEFBR0EsQUFHQSxBQU1sQyxBQU1DLFVBTGIsQ0FNQSxFQTNEMkIsQ0FIN0IsMEJBSXVCLE1BYXZCLEFBR0EsQUFHQSxBQUdBLEFBU0EsQUFNQSxBQUdBLEFBR0EsQUFHd0MsQ0FyQnhDLEFBR0EsQUFNQSxjQWpDd0Isc0JBQ1ksQ0E2Q3BDLGlDQTVDOEIsNEJBQ1osZ0JBQ0Usa0JBRUgsZUFDSCxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1NlY3Rpb25Ud28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTZWN0aW9uVHdvID0gKCkgPT4gKFxuICA8c2VjdGlvbiBpZD1cInBob3RvLXNlY3Rpb25cIiBjbGFzc05hbWU9XCJzZWN0aW9uLXR3b1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlR3JpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTFcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTJcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTNcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTRcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTVcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTZcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTdcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZThcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTlcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTEwXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlIHRpbGUxMVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsZSB0aWxlMTJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmltYWdlR3JpZCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgfVxuICAgICAgLmltYWdlR3JpZCAudGlsZSB7XG4gICAgICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLyA0KTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjdXJzb3I6IGhhbmQ7XG4gICAgICB9XG5cbiAgICAgIC50aWxlMSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2JpdC5seS8yUDB4QlpFJyk7XG4gICAgICB9XG4gICAgICAudGlsZTIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9iaXQubHkvMlVIZDU1eicpO1xuICAgICAgfVxuICAgICAgLnRpbGUzIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vYml0Lmx5LzJLazVmTGonKTtcbiAgICAgIH1cbiAgICAgIC50aWxlNCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2JpdC5seS8yQ1oxZUdiJyk7XG4gICAgICB9XG4gICAgICAudGlsZTUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vYml0Lmx5LzJJbUpwRUEnKTtcbiAgICAgIH1cbiAgICAgIC50aWxlNiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9iaXQubHkvMnVXSkNYOCcpO1xuICAgICAgfVxuICAgICAgLnRpbGU3IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vYml0Lmx5LzJQMTMxaXgnKTtcbiAgICAgIH1cbiAgICAgIC50aWxlOCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9iaXQubHkvMklpTGRoRycpO1xuICAgICAgfVxuICAgICAgLnRpbGU5IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vYml0Lmx5LzJ1U0RoTWEnKTtcbiAgICAgIH1cbiAgICAgIC50aWxlMTAge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9iaXQubHkvMkk4OWJ3WScpO1xuICAgICAgfVxuICAgICAgLnRpbGUxMSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2JpdC5seS8yVnR3cklRJyk7XG4gICAgICB9XG4gICAgICAudGlsZTEyIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vYml0Lmx5LzJaMkd1WEInKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgLmltYWdlR3JpZCAudGlsZSB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgLmltYWdlR3JpZCAudGlsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblR3b1xuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/SectionTwo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionTwo);

/***/ }),

/***/ "./components/shared/SplitLayout.js":
/*!******************************************!*\
  !*** ./components/shared/SplitLayout.js ***!
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: props.id,
    style: {
      backgroundColor: props.backgroundColor
    },
    className: "jsx-2306934733"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2306934733" + " " + "main-content-container abs"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2306934733" + " " + "split-wrapper left-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2306934733" + " " + "split-content-container abs"
  }, props.leftElement)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2306934733" + " " + "split-wrapper right-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2306934733" + " " + "split-content-container abs"
  }, props.rightElement))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2306934733"
  }, ".main-content-container.jsx-2306934733{min-width:90rem;max-height:80rem;}.split-wrapper.jsx-2306934733{width:50%;height:100%;position:relative;}.left-container.jsx-2306934733{float:left;}.right-container.jsx-2306934733{float:right;}.split-content-container.jsx-2306934733{width:100%;}@media (max-width:1200px){.main-content-container.jsx-2306934733{min-width:60rem;}}@media (max-width:950px){.main-content-container.jsx-2306934733{min-width:40rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL3NoYXJlZC9TcGxpdExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVZ0IsQUFHeUIsQUFJTixBQUtDLEFBR0MsQUFHRCxBQUlPLEFBS0EsVUFuQk4sQ0FLZCxBQU1BLENBSEEsSUFabUIsQUFtQmpCLEFBS0EsTUFuQmtCLFdBSnBCLE9BS0EiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvSmFwaFdlZGRpbmdTaXRlL2NvbXBvbmVudHMvc2hhcmVkL1NwbGl0TGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3BsaXRMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxzZWN0aW9uIGlkPXtwcm9wcy5pZH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3IgfX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQtY29udGFpbmVyIGFic1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC13cmFwcGVyIGxlZnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtY29udGVudC1jb250YWluZXIgYWJzXCI+e3Byb3BzLmxlZnRFbGVtZW50fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwbGl0LXdyYXBwZXIgcmlnaHQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtY29udGVudC1jb250YWluZXIgYWJzXCI+e3Byb3BzLnJpZ2h0RWxlbWVudH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgbWluLXdpZHRoOiA5MHJlbTtcbiAgICAgICAgbWF4LWhlaWdodDogODByZW07XG4gICAgICB9XG4gICAgICAuc3BsaXQtd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmxlZnQtY29udGFpbmVyIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG4gICAgICAucmlnaHQtY29udGFpbmVyIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgICAgLnNwbGl0LWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDYwcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgLm1haW4tY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgIG1pbi13aWR0aDogNDByZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU3BsaXRMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/shared/SplitLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SplitLayout);

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SectionOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SectionOne */ "./components/SectionOne.js");
/* harmony import */ var _components_SectionTwo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SectionTwo */ "./components/SectionTwo.js");
/* harmony import */ var _components_SectionThree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SectionThree */ "./components/SectionThree.js");
/* harmony import */ var _components_SectionFour__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SectionFour */ "./components/SectionFour.js");
/* harmony import */ var _components_SectionFive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SectionFive */ "./components/SectionFive.js");









var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1627183942" + " " + "section-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1627183942"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SectionOne__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SectionTwo__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SectionThree__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SectionFour__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SectionFive__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-1627183942" + " " + "lastSection"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1627183942"
  }, "@font-face{font-family:WestburySignature;src:url('/static/fonts/WestburySignature.otf') format('opentype');}@font-face{font-family:LatoHairLine;src:url('/static/fonts/Lato-Hairline.ttf') format('truetype');}@font-face{font-family:Laila;src:url('/static/fonts/Laila-Regular.ttf') format('truetype');}*{box-sizing:border-box;}html,body{margin:0;padding:0;height:100vh;overflow:hidden;}a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}.abs{position:absolute;top:50%;left:50%;text-align:center;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.section-container{-ms-scroll-snap-type:mandatory;-webkit-scroll-snap-type:mandatory;-moz-scroll-snap-type:mandatory;-ms-scroll-snap-type:mandatory;scroll-snap-type:mandatory;-ms-scroll-snap-points-y:repeat(100vh);-webkit-scroll-snap-points-y:repeat(100vh);-moz-scroll-snap-points-y:repeat(100vh);-ms-scroll-snap-points-y:repeat(100vh);scroll-snap-points-y:repeat(100vh);-ms-scroll-snap-type:y mandatory;-webkit-scroll-snap-type:y mandatory;-moz-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow:scroll;height:100vh;}section{height:100vh;-webkit-scroll-snap-align:start;-moz-scroll-snap-align:start;-ms-scroll-snap-align:start;scroll-snap-align:start;position:relative;text-align:center;background-size:cover;background-repeat:repeat-none;background-position:center center;}.content-container{height:100%;}.title{font-size:3rem;color:#c2d2f5;font-family:LatoHairLine;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;}.first-letter{font-size:2.2rem;display:inline-block;font-family:Laila,serif;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}.main-button{font-family:LatoHairLine;text-transform:uppercase;color:#c2d2f5;font-size:2rem;border:1px solid #c2d2f5;width:220px;margin-left:auto;margin-right:auto;border-radius:50px;padding-top:10px;padding-bottom:10px;cursor:pointer;text-align:center;}.main-button:hover{background-color:#c2d2f5;color:rgba(110,104,148,1);}.secondary-button{color:white;border:1px solid white;}.lastSection{display:none;}@media (max-width:700px){.main-button{font-size:1rem;width:10rem;}.lastSection{display:block !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQnVCLEFBR3VDLEFBSUwsQUFJUCxBQUlJLEFBSWIsQUFNWSxBQUlILEFBUWEsQUFVbEIsQUFTRCxBQUdHLEFBUUUsQUFNUSxBQWVBLEFBSWIsQUFJQyxBQUlJLEFBSVUsU0FwRmpCLEdBcUNaLEFBb0N5QixDQTdDQyxBQWlEMUIsRUFyQ2dCLEFBeUNBLEVBakNPLENBeER5QyxBQWtCdEQsQ0FUSyxHQUxmLEdBUmdFLEFBa0VyQyxBQWVJLEFBZ0I3QixDQTFFUyxDQXVFVCxFQXpDeUIsQ0F6RHlDLENBa0N2QyxDQWhCWCxHQVVFLEFBOERwQixHQXpCMkIsVUE5QzNCLEVBR2dCLEFBaURBLENBZWhCLEVBekQwQyxDQTZCZixRQVFOLEVBM0NyQixBQWlEaUIsZUFiQyxBQWNTLENBaEUzQixPQUpBLEtBeUJrQyxHQThCYixDQTNEckIsUUF5RWMsWUFDSyxVQTlCQyxPQStCQSxXQTlCQSxPQStCQyxJQVZyQixDQWhDeUMsTUFZakIsUUErQkwsY0E5QmEsR0ErQlYsQ0FsQnRCLE9BekJxQyxFQUxyQyxVQWlEaUIsT0EvQm1CLFFBZ0NoQixrQkFDcEIsUUFoQ0Esd0dBYm1DLGlDQUNKLHFJQUNiLGdCQUNILGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvSmFwaFdlZGRpbmdTaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFNlY3Rpb25PbmUgZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uT25lJ1xuaW1wb3J0IFNlY3Rpb25Ud28gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uVHdvJ1xuaW1wb3J0IFNlY3Rpb25UaHJlZSBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25UaHJlZSdcbmltcG9ydCBTZWN0aW9uRm91ciBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25Gb3VyJ1xuaW1wb3J0IFNlY3Rpb25GaXZlIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbkZpdmUnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxTZWN0aW9uT25lIC8+XG4gICAgPFNlY3Rpb25Ud28gLz5cbiAgICA8U2VjdGlvblRocmVlIC8+XG4gICAgPFNlY3Rpb25Gb3VyIC8+XG4gICAgPFNlY3Rpb25GaXZlIC8+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGFzdFNlY3Rpb25cIiAvPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFdlc3RidXJ5U2lnbmF0dXJlO1xuICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9XZXN0YnVyeVNpZ25hdHVyZS5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvTGF0by1IYWlybGluZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhaWxhO1xuICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9MYWlsYS1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIH1cbiAgICAgIC5hYnMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB9XG4gICAgICAuc2VjdGlvbi1jb250YWluZXIge1xuICAgICAgICAtbXMtc2Nyb2xsLXNuYXAtdHlwZTogbWFuZGF0b3J5O1xuICAgICAgICBzY3JvbGwtc25hcC10eXBlOiBtYW5kYXRvcnk7XG4gICAgICAgIC1tcy1zY3JvbGwtc25hcC1wb2ludHMteTogcmVwZWF0KDEwMHZoKTtcbiAgICAgICAgc2Nyb2xsLXNuYXAtcG9pbnRzLXk6IHJlcGVhdCgxMDB2aCk7XG4gICAgICAgIC1tcy1zY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbiAgICAgICAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB9XG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC1ub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgfVxuICAgICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBjb2xvcjogI2MyZDJmNTtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgIH1cbiAgICAgIC5maXJzdC1sZXR0ZXIge1xuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LWZhbWlseTogTGFpbGEsIHNlcmlmO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgICAgfVxuICAgICAgLm1haW4tYnV0dG9uIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICNjMmQyZjU7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MyZDJmNTtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLm1haW4tYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MyZDJmNTtcbiAgICAgICAgY29sb3I6IHJnYmEoMTEwLCAxMDQsIDE0OCwgMSk7XG4gICAgICB9XG4gICAgICAuc2Vjb25kYXJ5LWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICB9XG4gICAgICAubGFzdFNlY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIC5tYWluLWJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgfVxuICAgICAgICAubGFzdFNlY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/pages/index.js */"));
};

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