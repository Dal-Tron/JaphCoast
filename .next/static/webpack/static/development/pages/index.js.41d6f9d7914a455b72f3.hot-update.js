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
        className: "jsx-1509616640" + " " + "section-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-1509616640"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SectionOne__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SectionTwo__WEBPACK_IMPORTED_MODULE_11__["default"], null), this.state.width < 950 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SectionThree__WEBPACK_IMPORTED_MODULE_12__["MobileSectionThree"], null) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SectionThree__WEBPACK_IMPORTED_MODULE_12__["SectionThree"], null), this.state.width < 950 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SectionFour__WEBPACK_IMPORTED_MODULE_13__["MobileSectionFour"], null) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SectionFour__WEBPACK_IMPORTED_MODULE_13__["SectionFour"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SectionFive__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "jsx-1509616640" + " " + "lastSection"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1509616640"
      }, "@font-face{font-family:WestburySignature;src:url('/static/fonts/WestburySignature.otf') format('opentype');}@font-face{font-family:LatoHairLine;src:url('/static/fonts/Lato-Hairline.ttf') format('truetype');}@font-face{font-family:Laila;src:url('/static/fonts/Laila-Regular.ttf') format('truetype');}*{box-sizing:border-box;}html,body{margin:0;padding:0;height:100vh;overflow:hidden;}a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}.abs{position:absolute;top:50%;left:50%;text-align:center;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.section-container{-ms-scroll-snap-type:mandatory;-webkit-scroll-snap-type:mandatory;-moz-scroll-snap-type:mandatory;-ms-scroll-snap-type:mandatory;scroll-snap-type:mandatory;-ms-scroll-snap-points-y:repeat(100vh);-webkit-scroll-snap-points-y:repeat(100vh);-moz-scroll-snap-points-y:repeat(100vh);-ms-scroll-snap-points-y:repeat(100vh);scroll-snap-points-y:repeat(100vh);-ms-scroll-snap-type:y mandatory;-webkit-scroll-snap-type:y mandatory;-moz-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow:scroll;height:100vh;}section{height:100vh;-webkit-scroll-snap-align:start;-moz-scroll-snap-align:start;-ms-scroll-snap-align:start;scroll-snap-align:start;position:relative;text-align:center;background-size:cover;background-repeat:repeat-none;background-position:center center;}.content-container{height:100%;}.title{font-size:3rem;color:#c2d2f5;font-family:LatoHairLine;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;}.first-letter{font-size:2.2rem;display:inline-block;font-family:Laila,serif;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}.first-letter-mobile{font-size:1.2rem;display:inline-block;font-family:Laila,serif;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}.main-button{font-family:LatoHairLine;text-transform:uppercase;color:#c2d2f5;font-size:2rem;border:1px solid #c2d2f5;width:220px;margin-left:auto;margin-right:auto;border-radius:50px;padding-top:10px;padding-bottom:10px;cursor:pointer;text-align:center;}.main-button:hover{background-color:#c2d2f5;color:rgba(110,104,148,1);}.secondary-button{color:white;border:1px solid white;}.main-mobile-button{font-family:LatoHairLine;text-transform:uppercase;color:#c2d2f5;font-size:1.2rem;border:1px solid #c2d2f5;width:220px;margin-left:auto;margin-right:auto;border-radius:50px;padding-top:10px;padding-bottom:10px;cursor:pointer;text-align:center;}.lastSection{display:none;}@media (max-width:700px){.main-button{font-size:1rem;width:10rem;}.lastSection{display:block !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QzJCLEFBRzJDLEFBSUwsQUFJUCxBQUlJLEFBSWIsQUFNWSxBQUlILEFBUWEsQUFVbEIsQUFTRCxBQUdHLEFBUUUsQUFNQSxBQU1RLEFBZUEsQUFJYixBQUlhLEFBZVosQUFJSSxBQUlVLFNBekdqQixHQXFDWixBQTBDeUIsQ0FuREMsQUFzRTFCLEVBMURnQixBQThEQSxFQXRETyxBQU1BLENBOUR5QyxBQWtCdEQsQ0FUSyxHQUxmLEdBUmdFLEFBd0VyQyxBQWVJLEFBUUosQUF1QnpCLENBL0ZTLENBNEZULEVBOUR5QixDQXpEeUMsQ0FrQ3ZDLENBaEJYLEdBVUUsQUFvRXBCLEdBL0IyQixBQU1BLFVBcEQzQixFQUdnQixBQXVEQSxBQXVCQSxDQVJoQixFQS9EMEMsQ0E2QmYsUUFRTixBQU1BLEVBakRyQixBQXVEaUIsQUF1QkUsZUExQ0QsQUFvQlMsQ0F0RTNCLENBNkYyQixNQWpHM0IsS0F5QmtDLEdBOEJiLENBM0RyQixRQStFYyxFQXVCQSxVQXRCSyxFQXVCQSxRQTNEQyxPQXFDQSxFQXVCQSxTQTNEQSxPQXFDQyxFQXVCQSxFQXZDckIsQUFNQSxDQXRDeUMsTUFZakIsUUFxQ0wsRUF1QkEsWUEzRGEsR0FxQ1YsQ0F4QnRCLENBK0NzQixNQXhFZSxFQUxyQyxVQXVEaUIsRUF1QkEsS0E1RG1CLFFBc0NoQixFQXVCQSxnQkF0QnBCLEVBdUJBLE1BN0RBLHdHQWJtQyxpQ0FDSixxSUFDYixnQkFDSCxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBTZWN0aW9uT25lIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbk9uZSdcbmltcG9ydCBTZWN0aW9uVHdvIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvblR3bydcbmltcG9ydCB7IFNlY3Rpb25UaHJlZSwgTW9iaWxlU2VjdGlvblRocmVlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uVGhyZWUnXG5pbXBvcnQgeyBTZWN0aW9uRm91ciwgTW9iaWxlU2VjdGlvbkZvdXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25Gb3VyJ1xuaW1wb3J0IFNlY3Rpb25GaXZlIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbkZpdmUnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICB9XG5cbiAgdXBkYXRlRGltZW5zaW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZURpbWVuc2lvbnMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVEaW1lbnNpb25zKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFNlY3Rpb25PbmUgLz5cbiAgICAgICAgPFNlY3Rpb25Ud28gLz5cbiAgICAgICAge3RoaXMuc3RhdGUud2lkdGggPCA5NTAgPyA8TW9iaWxlU2VjdGlvblRocmVlIC8+IDogPFNlY3Rpb25UaHJlZSAvPn1cbiAgICAgICAge3RoaXMuc3RhdGUud2lkdGggPCA5NTAgPyA8TW9iaWxlU2VjdGlvbkZvdXIgLz4gOiA8U2VjdGlvbkZvdXIgLz59XG4gICAgICAgIDxTZWN0aW9uRml2ZSAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsYXN0U2VjdGlvblwiIC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogV2VzdGJ1cnlTaWduYXR1cmU7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9XZXN0YnVyeVNpZ25hdHVyZS5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0xhdG8tSGFpcmxpbmUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYWlsYTtcbiAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0xhaWxhLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hYnMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWN0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAtbXMtc2Nyb2xsLXNuYXAtdHlwZTogbWFuZGF0b3J5O1xuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtdHlwZTogbWFuZGF0b3J5O1xuICAgICAgICAgICAgLW1zLXNjcm9sbC1zbmFwLXBvaW50cy15OiByZXBlYXQoMTAwdmgpO1xuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtcG9pbnRzLXk6IHJlcGVhdCgxMDB2aCk7XG4gICAgICAgICAgICAtbXMtc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XG4gICAgICAgICAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC1ub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjYzJkMmY1O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpcnN0LWxldHRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYWlsYSwgc2VyaWY7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmlyc3QtbGV0dGVyLW1vYmlsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYWlsYSwgc2VyaWY7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFpbi1idXR0b24ge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogI2MyZDJmNTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMmQyZjU7XG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFpbi1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MyZDJmNTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDExMCwgMTA0LCAxNDgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2Vjb25kYXJ5LWJ1dHRvbiB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW4tbW9iaWxlLWJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0b0hhaXJMaW5lO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOiAjYzJkMmY1O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzJkMmY1O1xuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxhc3RTZWN0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgICAgLm1haW4tYnV0dG9uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGFzdFNlY3Rpb24ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.41d6f9d7914a455b72f3.hot-update.js.map