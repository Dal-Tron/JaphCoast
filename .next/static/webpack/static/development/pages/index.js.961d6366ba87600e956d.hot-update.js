webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_SectionOne__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SectionOne */ "./components/SectionOne.js");
/* harmony import */ var _components_SectionTwo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SectionTwo */ "./components/SectionTwo.js");
/* harmony import */ var _components_SectionThree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SectionThree */ "./components/SectionThree.js");
/* harmony import */ var _components_SectionFour__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SectionFour */ "./components/SectionFour.js");
/* harmony import */ var _components_SectionFive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/SectionFive */ "./components/SectionFive.js");
















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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-188830670" + " " + "section-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-188830670"
      })), this.state.width < 950 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SectionFour__WEBPACK_IMPORTED_MODULE_13__["MobileSectionFour"], null) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SectionFour__WEBPACK_IMPORTED_MODULE_13__["SectionFour"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SectionFive__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "jsx-188830670" + " " + "lastSection"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "188830670"
      }, "@font-face{font-family:WestburySignature;src:url('/static/fonts/WestburySignature.otf') format('opentype');}@font-face{font-family:LatoHairLine;src:url('/static/fonts/Lato-Hairline.ttf') format('truetype');}@font-face{font-family:Laila;src:url('/static/fonts/Laila-Regular.ttf') format('truetype');}*{box-sizing:border-box;}html,body{margin:0;padding:0;height:100vh;overflow:hidden;}a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}.abs{position:absolute;top:50%;left:50%;text-align:center;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.section-container{-ms-scroll-snap-type:mandatory;-webkit-scroll-snap-type:mandatory;-moz-scroll-snap-type:mandatory;-ms-scroll-snap-type:mandatory;scroll-snap-type:mandatory;-ms-scroll-snap-points-y:repeat(100vh);-webkit-scroll-snap-points-y:repeat(100vh);-moz-scroll-snap-points-y:repeat(100vh);-ms-scroll-snap-points-y:repeat(100vh);scroll-snap-points-y:repeat(100vh);-ms-scroll-snap-type:y mandatory;-webkit-scroll-snap-type:y mandatory;-moz-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow:scroll;height:100vh;}section{height:100vh;-webkit-scroll-snap-align:start;-moz-scroll-snap-align:start;-ms-scroll-snap-align:start;scroll-snap-align:start;position:relative;text-align:center;background-size:cover;background-repeat:repeat-none;background-position:center center;}.content-container{height:100%;}.title{font-size:3rem;color:#c2d2f5;font-family:LatoHairLine;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;}.first-letter{font-size:2.2rem;display:inline-block;font-family:Laila,serif;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}.main-button{font-family:LatoHairLine;text-transform:uppercase;color:#c2d2f5;font-size:2rem;border:1px solid #c2d2f5;width:220px;margin-left:auto;margin-right:auto;border-radius:50px;padding-top:10px;padding-bottom:10px;cursor:pointer;text-align:center;}.main-button:hover{background-color:#c2d2f5;color:rgba(110,104,148,1);}.secondary-button{color:white;border:1px solid white;}.lastSection{display:none;}@media (max-width:700px){.main-button{font-size:1rem;width:10rem;}.lastSection{display:block !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QzJCLEFBRzJDLEFBSUwsQUFJUCxBQUlJLEFBSWIsQUFNWSxBQUlILEFBUWEsQUFVbEIsQUFTRCxBQUdHLEFBUUUsQUFNUSxBQWVBLEFBSWIsQUFJQyxBQUlJLEFBSVUsU0FwRmpCLEdBcUNaLEFBb0N5QixDQTdDQyxBQWlEMUIsRUFyQ2dCLEFBeUNBLEVBakNPLENBeER5QyxBQWtCdEQsQ0FUSyxHQUxmLEdBUmdFLEFBa0VyQyxBQWVJLEFBZ0I3QixDQTFFUyxDQXVFVCxFQXpDeUIsQ0F6RHlDLENBa0N2QyxDQWhCWCxHQVVFLEFBOERwQixHQXpCMkIsVUE5QzNCLEVBR2dCLEFBaURBLENBZWhCLEVBekQwQyxDQTZCZixRQVFOLEVBM0NyQixBQWlEaUIsZUFiQyxBQWNTLENBaEUzQixPQUpBLEtBeUJrQyxHQThCYixDQTNEckIsUUF5RWMsWUFDSyxVQTlCQyxPQStCQSxXQTlCQSxPQStCQyxJQVZyQixDQWhDeUMsTUFZakIsUUErQkwsY0E5QmEsR0ErQlYsQ0FsQnRCLE9BekJxQyxFQUxyQyxVQWlEaUIsT0EvQm1CLFFBZ0NoQixrQkFDcEIsUUFoQ0Esd0dBYm1DLGlDQUNKLHFJQUNiLGdCQUNILGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2RhbGxhcy9Eb2N1bWVudHMvSmFwaFdlZGRpbmdTaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFNlY3Rpb25PbmUgZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uT25lJ1xuaW1wb3J0IFNlY3Rpb25Ud28gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uVHdvJ1xuaW1wb3J0IHsgU2VjdGlvblRocmVlLCBNb2JpbGVTZWN0aW9uVGhyZWUgfSBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25UaHJlZSdcbmltcG9ydCB7IFNlY3Rpb25Gb3VyLCBNb2JpbGVTZWN0aW9uRm91ciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbkZvdXInXG5pbXBvcnQgU2VjdGlvbkZpdmUgZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uRml2ZSdcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gIH1cblxuICB1cGRhdGVEaW1lbnNpb25zID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlRGltZW5zaW9ucylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZURpbWVuc2lvbnMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7LyogPFNlY3Rpb25PbmUgLz4gKi99XG4gICAgICAgIHsvKiA8U2VjdGlvblR3byAvPiAqL31cbiAgICAgICAgey8qIHt0aGlzLnN0YXRlLndpZHRoIDwgOTUwID8gPE1vYmlsZVNlY3Rpb25UaHJlZSAvPiA6IDxTZWN0aW9uVGhyZWUgLz59ICovfVxuICAgICAgICB7dGhpcy5zdGF0ZS53aWR0aCA8IDk1MCA/IDxNb2JpbGVTZWN0aW9uRm91ciAvPiA6IDxTZWN0aW9uRm91ciAvPn1cbiAgICAgICAgPFNlY3Rpb25GaXZlIC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxhc3RTZWN0aW9uXCIgLz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBXZXN0YnVyeVNpZ25hdHVyZTtcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL1dlc3RidXJ5U2lnbmF0dXJlLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0b0hhaXJMaW5lO1xuICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvTGF0by1IYWlybGluZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhaWxhO1xuICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvTGFpbGEtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFicyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlY3Rpb24tY29udGFpbmVyIHtcbiAgICAgICAgICAgIC1tcy1zY3JvbGwtc25hcC10eXBlOiBtYW5kYXRvcnk7XG4gICAgICAgICAgICBzY3JvbGwtc25hcC10eXBlOiBtYW5kYXRvcnk7XG4gICAgICAgICAgICAtbXMtc2Nyb2xsLXNuYXAtcG9pbnRzLXk6IHJlcGVhdCgxMDB2aCk7XG4gICAgICAgICAgICBzY3JvbGwtc25hcC1wb2ludHMteTogcmVwZWF0KDEwMHZoKTtcbiAgICAgICAgICAgIC1tcy1zY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LW5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgY29sb3I6ICNjMmQyZjU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0b0hhaXJMaW5lO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmlyc3QtbGV0dGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhaWxhLCBzZXJpZjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWluLWJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0b0hhaXJMaW5lO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOiAjYzJkMmY1O1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MyZDJmNTtcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWluLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJkMmY1O1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTEwLCAxMDQsIDE0OCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWNvbmRhcnktYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGFzdFNlY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAubWFpbi1idXR0b24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYXN0U2VjdGlvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.961d6366ba87600e956d.hot-update.js.map