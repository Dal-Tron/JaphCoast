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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-397718797"
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
  }, ".imageGrid.jsx-397718797{line-height:0;}.imageGrid.jsx-397718797 .tile.jsx-397718797{width:33.33%;min-height:calc(100vh / 4);display:inline-block;background-size:cover;background-position:center center;background-repeat:no-repeat;overflow:hidden;position:relative;cursor:pointer;cursor:hand;}.tile1.jsx-397718797{background-image:url('http://bit.ly/2P0xBZE');}.tile2.jsx-397718797{background-image:url('http://bit.ly/2UHd55z');}.tile3.jsx-397718797{background-image:url('http://bit.ly/2Kk5fLj');}.tile4.jsx-397718797{background-image:url('http://bit.ly/2CZ1eGb');}.tile5.jsx-397718797{background-image:url('https://bit.ly/2ImJpEA');}.tile6.jsx-397718797{background-image:url('https://bit.ly/2uWJCX8');}.tile7.jsx-397718797{background-image:url('http://bit.ly/2P131ix');}.tile8.jsx-397718797{background-image:url('https://bit.ly/2IiLdhG');}.tile9.jsx-397718797{background-image:url('http://bit.ly/2uSDhMa');}.tile10.jsx-397718797{background-image:url('http://bit.ly/2I89bwY');}.tile11.jsx-397718797{background-image:url('http://bit.ly/2VtwrIQ');}.tile12.jsx-397718797{background-image:url('http://bit.ly/2Z2GuXB');background-position-y:100% !important;}@media (max-width:1000px){.imageGrid.jsx-397718797 .tile.jsx-397718797{width:50%;}}@media (max-width:700px){.imageGrid.jsx-397718797 .tile.jsx-397718797{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1NlY3Rpb25Ud28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JnQixBQUd1QixBQUdELEFBY2lDLEFBR0EsQUFHQSxBQUdBLEFBR0MsQUFHQSxBQUdELEFBR0MsQUFHRCxBQUdBLEFBR0EsQUFHQSxBQU1sQyxBQU1DLFVBTGIsQ0FNQSxFQTNEMkIsQ0FIN0IsMEJBSXVCLE1BYXZCLEFBR0EsQUFHQSxBQUdBLEFBU0EsQUFNQSxBQUdBLEFBR0EsQUFHd0MsQ0FyQnhDLEFBR0EsQUFNQSxjQWpDd0Isc0JBQ1ksQ0E2Q3BDLGlDQTVDOEIsNEJBQ1osZ0JBQ0Usa0JBRUgsZUFDSCxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9jb21wb25lbnRzL1NlY3Rpb25Ud28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTZWN0aW9uVHdvID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlR3JpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTFcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTJcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTNcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTRcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTVcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTZcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTdcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZThcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTlcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGlsZTEwXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlIHRpbGUxMVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsZSB0aWxlMTJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmltYWdlR3JpZCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgfVxuICAgICAgLmltYWdlR3JpZCAudGlsZSB7XG4gICAgICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLyA0KTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjdXJzb3I6IGhhbmQ7XG4gICAgICB9XG5cbiAgICAgIC50aWxlMSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2JpdC5seS8yUDB4QlpFJyk7XG4gICAgICB9XG4gICAgICAudGlsZTIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9iaXQubHkvMlVIZDU1eicpO1xuICAgICAgfVxuICAgICAgLnRpbGUzIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vYml0Lmx5LzJLazVmTGonKTtcbiAgICAgIH1cbiAgICAgIC50aWxlNCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2JpdC5seS8yQ1oxZUdiJyk7XG4gICAgICB9XG4gICAgICAudGlsZTUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vYml0Lmx5LzJJbUpwRUEnKTtcbiAgICAgIH1cbiAgICAgIC50aWxlNiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9iaXQubHkvMnVXSkNYOCcpO1xuICAgICAgfVxuICAgICAgLnRpbGU3IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vYml0Lmx5LzJQMTMxaXgnKTtcbiAgICAgIH1cbiAgICAgIC50aWxlOCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9iaXQubHkvMklpTGRoRycpO1xuICAgICAgfVxuICAgICAgLnRpbGU5IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vYml0Lmx5LzJ1U0RoTWEnKTtcbiAgICAgIH1cbiAgICAgIC50aWxlMTAge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9iaXQubHkvMkk4OWJ3WScpO1xuICAgICAgfVxuICAgICAgLnRpbGUxMSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2JpdC5seS8yVnR3cklRJyk7XG4gICAgICB9XG4gICAgICAudGlsZTEyIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vYml0Lmx5LzJaMkd1WEInKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgLmltYWdlR3JpZCAudGlsZSB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgLmltYWdlR3JpZCAudGlsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uVHdvXG4iXX0= */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/components/SectionTwo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionTwo);

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
/* harmony import */ var _components_SectionTwo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SectionTwo */ "./components/SectionTwo.js");





var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "section-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1817147463"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Cinzel&display=swap",
    rel: "stylesheet",
    className: "jsx-1817147463"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Laila&display=swap",
    rel: "stylesheet",
    className: "jsx-1817147463"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-1817147463" + " " + "section-one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "content-container content-container-one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "titles-container-one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "title-one"
  }, "Raph & Jeff"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "title-two"
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
    className: "jsx-1817147463" + " " + "see-info-button-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "main-button see-info-button"
  }, "See Info")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "photo-section",
    className: "jsx-1817147463" + " " + "section-two"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SectionTwo__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "info-section",
    className: "jsx-1817147463" + " " + "section-three"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "content-container-three"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "titles-container-three"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1817147463" + " " + "title-three"
  }, "Info"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "subtitle-three"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "first-letter"
  }, "If"), " you\u2019ve made it this far, there\u2019s a good chance we\u2019ve invited you to our wedding in Mexico! There\u2019s also a good chance that you\u2019d love to come, but are unable to make it work due to cost or time constraints or any other reason, and we understand that and will be sending information out to everyone for a Ceremony and Dance we\u2019ll be having at home for those of you that can\u2019t make it to Mexico, because we love you all!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: function onClick() {
      document.getElementById('when-section').scrollIntoView({
        block: 'end',
        behavior: 'smooth'
      });
    },
    className: "jsx-1817147463" + " " + "see-date-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "dolphin"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "main-button see-date-button"
  }, "When & Where")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "when-section",
    className: "jsx-1817147463" + " " + "section-four"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "see-when-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "cake"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "main-button see-marival-button"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1817147463"
  }, "Marival")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "marival-details"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "trip-dates"
  }, "May 23rd \u2013 May 30th, 2020"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "wedding-day-title"
  }, "Wedding Day"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "trip-dates"
  }, "May 25th, 2020"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "content-container-four"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "titles-container-four"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1817147463" + " " + "title-four"
  }, "When & Where"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "subtitle-four"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "first-letter"
  }, "For"), " those of you that are able to come, we have organized our wedding at the Marival in Nuevo Vallarta, just outside of Puerto Vallarta.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1817147463"
  }, "The package we\u2019ve organized costs just under", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "first-letter"
  }, "$1600"), ", and includes:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dir: "rtl",
    className: "jsx-1817147463"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1817147463"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1817147463"
  }, "all inclusive 7 day stay"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1817147463"
  }, "airfare"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1817147463"
  }, "airport shuttles"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1817147463"
  }, "one checked bag")))), "Check out our detailed breakdown of the costs involved, as well as deposit amounts and payment dates.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: function onClick() {
      document.getElementById('costs-section').scrollIntoView({
        block: 'end',
        behavior: 'smooth'
      });
    },
    className: "jsx-1817147463" + " " + "see-costs-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "main-button see-costs-button"
  }, "Costs")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "costs-section",
    className: "jsx-1817147463" + " " + "section-five"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "see-when-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "cake"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "main-button see-marival-button"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1817147463"
  }, "Marival")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "marival-details"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "trip-dates"
  }, "May 23rd \u2013 May 30th, 2020"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "wedding-day-title"
  }, "Wedding Day"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "trip-dates"
  }, "May 25th, 2020"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "content-container-four"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "titles-container-four"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1817147463" + " " + "title-four"
  }, "When & Where"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "subtitle-four"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "first-letter"
  }, "For"), " those of you that are able to come, we have organized our wedding at the Marival in Nuevo Vallarta, just outside of Puerto Vallarta.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1817147463"
  }, "The package we\u2019ve organized costs just under", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "first-letter"
  }, "$1600"), ", and includes:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dir: "rtl",
    className: "jsx-1817147463"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1817147463"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1817147463"
  }, "all inclusive 7 day stay"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1817147463"
  }, "airfare"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1817147463"
  }, "airport shuttles"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1817147463"
  }, "one checked bag")))), "Check out our detailed breakdown of the costs involved, as well as deposit amounts and payment dates.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: function onClick() {
      document.getElementById('costs-section').scrollIntoView({
        block: 'end',
        behavior: 'smooth'
      });
    },
    className: "jsx-1817147463" + " " + "see-costs-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1817147463" + " " + "main-button see-costs-button"
  }, "Costs")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-1817147463" + " " + "lastSection"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1817147463"
  }, "@font-face{font-family:WestburySignature;src:url('/static/fonts/WestburySignature.otf') format('opentype');}@font-face{font-family:LatoHairLine;src:url('/static/fonts/Lato-Hairline.ttf') format('truetype');}*{box-sizing:border-box;}html,body{margin:0;padding:0;height:100vh;overflow:hidden;background-color:rgba(137,224,249,1);}.section-container{-ms-scroll-snap-type:mandatory;-webkit-scroll-snap-type:mandatory;-moz-scroll-snap-type:mandatory;-ms-scroll-snap-type:mandatory;scroll-snap-type:mandatory;-ms-scroll-snap-points-y:repeat(100vh);-webkit-scroll-snap-points-y:repeat(100vh);-moz-scroll-snap-points-y:repeat(100vh);-ms-scroll-snap-points-y:repeat(100vh);scroll-snap-points-y:repeat(100vh);-ms-scroll-snap-type:y mandatory;-webkit-scroll-snap-type:y mandatory;-moz-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;height:100vh;overflow:scroll;}section{height:100vh;-webkit-scroll-snap-align:start;-moz-scroll-snap-align:start;-ms-scroll-snap-align:start;scroll-snap-align:start;position:relative;text-align:center;background-size:cover;background-repeat:repeat-none;background-position:center center;}.content-container{height:100%;}.first-letter{font-size:2.2rem;display:inline-block;font-family:'Laila',serif;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}.main-button{font-family:LatoHairLine;text-transform:uppercase;color:#c2d2f5;font-size:2rem;border:1px solid #c2d2f5;width:220px;margin-left:auto;margin-right:auto;border-radius:50px;padding-top:10px;padding-bottom:10px;cursor:pointer;}.titles-container-one{position:absolute;top:50%;-webkit-transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);text-align:center;width:100%;left:0;font-family:Pacifico;}.section-one{background-image:url(/static/images/MainPage.gif);}.content-container-one{background:rgba(110,104,148,0.9);}.title-one{font-size:5rem;color:#c2d2f5;font-family:LatoHairLine;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;padding-bottom:2rem;}.see-info-button-container{position:absolute;width:100%;text-align:center;bottom:150px;}.see-info-button:hover{background-color:#c2d2f5;color:rgba(110,104,148,1);}.title-two{font-size:3rem;color:#c2d2f5;font-family:LatoHairLine;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;}.section-three{background-color:rgba(137,224,249,0.9);}.titles-container-three{position:absolute;top:50%;-webkit-transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);text-align:center;width:100%;left:0;font-family:Pacifico;width:50%;}.title-three{font-size:3rem;color:white;font-family:LatoHairLine;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;text-align:left;margin-left:8rem;}.subtitle-three{font-family:LatoHairLine;color:white;font-size:2rem;text-align:left;padding-left:10rem;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:400;}.see-date-container{position:absolute;top:50%;-webkit-transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);text-align:center;width:100%;right:0;width:50%;}.dolphin{background-image:url(/static/images/dolphin.svg);width:20rem;height:20rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:2rem;}.see-date-button{font-family:LatoHairLine;text-transform:uppercase;color:white;font-size:2rem;border:1px solid white;width:320px;margin-left:auto;margin-right:auto;border-radius:50px;padding-top:10px;padding-bottom:10px;cursor:pointer;}.see-date-button:hover{background-color:#e5f6ff;color:rgba(137,224,249,0.9);}.section-four{background-color:#e4c39a;}.titles-container-four{position:absolute;top:50%;-webkit-transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);text-align:center;width:100%;right:0;font-family:Pacifico;width:50%;}.title-four{font-size:3rem;color:white;font-family:LatoHairLine;text-transform:uppercase;font-weight:400;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;text-align:right;padding-right:10rem;}.see-marival-button{font-family:LatoHairLine;text-transform:uppercase;color:white;font-size:2rem;border:1px solid white;border-radius:50px;padding-top:10px;padding-bottom:10px;cursor:pointer;margin-top:1rem;text-align:center;}.marival-details{font-family:LatoHairLine;color:white;font-size:2rem;text-align:center;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:400;}.trip-dates{margin-top:1rem;}.cake{background-image:url(/static/images/cake.svg);width:20rem;height:20rem;background-size:cover;margin-left:auto;margin-right:auto;margin-bottom:1rem;margin-top:2rem;}.wedding-day-title{font-family:WestburySignature;margin-top:1rem;font-size:4rem;}.subtitle-four{font-family:LatoHairLine;color:white;font-size:2rem;text-align:right;padding-right:10rem;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:400;}.see-when-container{position:absolute;top:50%;-webkit-transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);text-align:center;width:100%;left:0;width:50%;}.see-costs-button{font-family:LatoHairLine;text-transform:uppercase;color:white;font-size:2rem;border:1px solid white;border-radius:50px;padding-top:10px;padding-bottom:10px;cursor:pointer;margin-top:2rem;text-align:center;}.see-costs-button:hover{background-color:#e5f6ff;color:#e4c39a;}.section-five{background:rgba(110,104,148,0.9);}.lastSection{display:none;}@media (max-width:700px){.lastSection{display:block !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWxsYXMvRG9jdW1lbnRzL0phcGhXZWRkaW5nU2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1S3VCLEFBTXVDLEFBSUwsQUFJSCxBQUliLEFBT3NCLEFBVWxCLEFBU0QsQUFHSyxBQU1RLEFBcUJQLEFBVWdDLEFBR2QsQUFHckIsQUFTRyxBQU1PLEFBV1YsQUFnQjJCLEFBR3hCLEFBV0gsQUFVVSxBQVNQLEFBVStCLEFBU3hCLEFBY0EsQUFVQSxBQUdQLEFBV0gsQUFVVSxBQWFBLEFBUVQsQUFHOEIsQUFVaEIsQUFLTCxBQVNQLEFBVU8sQUFhQSxBQUlXLEFBR3ZCLEFBSWMsU0F2U2pCLEdBMEJaLENBVDBCLEFBbVIxQixFQTVOZ0IsQUEwQkEsQUE4QkYsQUE0RUEsQ0ErQmQsQ0E5TXVCLENBMkJiLEFBeUJHLEFBb0NILEFBOEJBLEFBOENBLEFBcUVBLENBclFLLEdBTGYsR0FKZ0UsQUEyQ3JDLEFBb0RJLEFBbURqQixBQTRCYSxBQWNNLEFBVWpDLEFBd0IyQixBQWFiLEFBMEJBLEFBbUJhLEFBYVgsQUFXZCxDQS9PbUMsQUE2REEsQUE4QkEsQUE4Q0EsQUFxRUEsQ0F0SVYsQUE0RUEsRUFwSUEsQUFTUCxBQWlCTyxDQS9HeUMsQUFvUWxELENBalBXLENBTFgsQ0FtRWxCLEFBNE5BLElBdEppQixBQXlGQSxBQTBCQSxDQWhPWSxDQW9GN0IsQUE0S0EsT0FoRGMsQUFXRyxDQXRLRixDQWhGMkIsQ0EwSjVCLENBekhFLEFBOEJoQixBQXFHYyxBQWdEQSxBQTBEQSxDQXpMZCxDQTBDMkIsQUFVVCxBQWtFUyxBQXVCUCxBQTBCRCxDQTFFbkIsQ0EzRzJCLEFBMEJBLElBMklaLEVBM0pmLENBMUI2QixBQTZEQSxBQThCQSxBQVNkLEFBcUNjLEFBdUQ3QixBQWM2QixDQWhHWixBQWdEQSxBQTBEQSxFQW5QSSxBQU1KLElBd0dJLENBbUhDLENBMUJELENBVUcsR0FqRkEsR0E1Qk4sQUFzQ08sQUFzQ1AsQUFVTyxBQTBEQSxFQTdPRSxBQXFDVCxBQTBCQSxNQWpHbEIsRUFYQSxBQXFKcUIsRUFtSEEsSUE3SEEsQUE0RUEsQUFpQ0YsRUFyS0UsQUEwQkEsQ0FqSHJCLEFBMkttQixJQVVMLEFBZ0RPLEFBMERBLElBN09QLE1BMk1NLEVBdkVELENBVkMsR0F6SEQsR0FtTEEsQUEwREEsT0FuUUMsRUFpT0MsQ0F2RUQsRUFWQyxFQXpIRCxHQW1MRSxBQTBEQSxRQW5RRixHQTBKQyxBQXVFSCxHQWpGbEIsQ0F6SHFCLEdBaUJELEFBNkRBLEFBOEJBLEFBOENBLEFBcUVBLEVBalFxQixBQXFOeEIsQUEwREEsQ0F2UGpCLEtBWndCLENBbU5OLEFBY2xCLEdBdkVtQixJQW5JQSxDQW1MRCxBQTBEQSxDQTVOTCxBQTZEQSxBQThCQSxBQThDQSxBQXFFQSxPQWxDYixDQXpGa0IsRUFtSEEsQ0FyTVQsQUE2REEsQUE4QkMsQUF1QlksQUF1QlosQUFxRUQsQ0F0UHVCLEVBZ0hkLEFBNEVDLENBcktHLEFBbUxGLEFBMERBLENBNU1FLEFBMEJ0QixFQXpDdUIsQUE2REEsQUFpSlgsQ0FuSEEsQUE4Q1csSUE5TGMsQ0F1SXJDLEVBbUhBLEVBVUEsQ0FuSEEsQ0FwQm1CLENBMENGLEFBa0NLLEVBY3RCLEFBMERBLEVBN09pQixDQWlDakIsR0FmQSxBQTZEWSxDQTRFQSxFQWxMd0IsSUEySnBDLENBMUNBLEVBVkEsQ0EvRUEsQUEySkEsQ0FVQSx5QkE1TEEsd0dBYm1DLGlDQUNKLHFJQUNoQixhQUNHLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZGFsbGFzL0RvY3VtZW50cy9KYXBoV2VkZGluZ1NpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgU2VjdGlvblR3byBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25Ud28nXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG5cbiAgICAgIDxsaW5rXG4gICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q2luemVsJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGFpbGEmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAvPlxuICAgIDwvSGVhZD5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLW9uZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lciBjb250ZW50LWNvbnRhaW5lci1vbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZXMtY29udGFpbmVyLW9uZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtb25lXCI+UmFwaCAmIEplZmY8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXR3b1wiPk1leGljbyAyMDIwPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VlLWluZm8tYnV0dG9uLWNvbnRhaW5lclwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKCdwaG90by1zZWN0aW9uJylcbiAgICAgICAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdlbmQnLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgnaW5mby1zZWN0aW9uJylcbiAgICAgICAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ2VuZCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ1dHRvbiBzZWUtaW5mby1idXR0b25cIj5TZWUgSW5mbzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBpZD1cInBob3RvLXNlY3Rpb25cIiBjbGFzc05hbWU9XCJzZWN0aW9uLXR3b1wiPlxuICAgICAgPFNlY3Rpb25Ud28gLz5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gaWQ9XCJpbmZvLXNlY3Rpb25cIiBjbGFzc05hbWU9XCJzZWN0aW9uLXRocmVlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyLXRocmVlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVzLWNvbnRhaW5lci10aHJlZVwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZS10aHJlZVwiPkluZm88L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGUtdGhyZWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtbGV0dGVyXCI+SWY8L2Rpdj4geW914oCZdmUgbWFkZSBpdCB0aGlzIGZhcixcbiAgICAgICAgICAgIHRoZXJl4oCZcyBhIGdvb2QgY2hhbmNlIHdl4oCZdmUgaW52aXRlZCB5b3UgdG8gb3VyIHdlZGRpbmcgaW4gTWV4aWNvIVxuICAgICAgICAgICAgVGhlcmXigJlzIGFsc28gYSBnb29kIGNoYW5jZSB0aGF0IHlvdeKAmWQgbG92ZSB0byBjb21lLCBidXQgYXJlIHVuYWJsZVxuICAgICAgICAgICAgdG8gbWFrZSBpdCB3b3JrIGR1ZSB0byBjb3N0IG9yIHRpbWUgY29uc3RyYWludHMgb3IgYW55IG90aGVyIHJlYXNvbixcbiAgICAgICAgICAgIGFuZCB3ZSB1bmRlcnN0YW5kIHRoYXQgYW5kIHdpbGwgYmUgc2VuZGluZyBpbmZvcm1hdGlvbiBvdXQgdG9cbiAgICAgICAgICAgIGV2ZXJ5b25lIGZvciBhIENlcmVtb255IGFuZCBEYW5jZSB3ZeKAmWxsIGJlIGhhdmluZyBhdCBob21lIGZvciB0aG9zZVxuICAgICAgICAgICAgb2YgeW91IHRoYXQgY2Fu4oCZdCBtYWtlIGl0IHRvIE1leGljbywgYmVjYXVzZSB3ZSBsb3ZlIHlvdSBhbGwhXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VlLWRhdGUtY29udGFpbmVyXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ3doZW4tc2VjdGlvbicpXG4gICAgICAgICAgICAgIC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnZW5kJywgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9scGhpblwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ1dHRvbiBzZWUtZGF0ZS1idXR0b25cIj5XaGVuICYgV2hlcmU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gaWQ9XCJ3aGVuLXNlY3Rpb25cIiBjbGFzc05hbWU9XCJzZWN0aW9uLWZvdXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VlLXdoZW4tY29udGFpbmVyXCI+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1hcml2YWxcIiAvPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWtlXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ1dHRvbiBzZWUtbWFyaXZhbC1idXR0b25cIj5cbiAgICAgICAgICA8YT5NYXJpdmFsPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJpdmFsLWRldGFpbHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaXAtZGF0ZXNcIj5NYXkgMjNyZCDigJMgTWF5IDMwdGgsIDIwMjA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZGRpbmctZGF5LXRpdGxlXCI+V2VkZGluZyBEYXk8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaXAtZGF0ZXNcIj5NYXkgMjV0aCwgMjAyMDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lci1mb3VyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVzLWNvbnRhaW5lci1mb3VyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlLWZvdXJcIj5XaGVuICYgV2hlcmU8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGUtZm91clwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1sZXR0ZXJcIj5Gb3I8L2Rpdj4gdGhvc2Ugb2YgeW91IHRoYXQgYXJlIGFibGVcbiAgICAgICAgICAgIHRvIGNvbWUsIHdlIGhhdmUgb3JnYW5pemVkIG91ciB3ZWRkaW5nIGF0IHRoZSBNYXJpdmFsIGluIE51ZXZvXG4gICAgICAgICAgICBWYWxsYXJ0YSwganVzdCBvdXRzaWRlIG9mIFB1ZXJ0byBWYWxsYXJ0YS5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGUgcGFja2FnZSB3ZeKAmXZlIG9yZ2FuaXplZCBjb3N0cyBqdXN0IHVuZGVyeycgJ31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1sZXR0ZXJcIj4kMTYwMDwvZGl2PiwgYW5kIGluY2x1ZGVzOlxuICAgICAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaT5hbGwgaW5jbHVzaXZlIDcgZGF5IHN0YXk8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPmFpcmZhcmU8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPmFpcnBvcnQgc2h1dHRsZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPm9uZSBjaGVja2VkIGJhZzwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICBDaGVjayBvdXQgb3VyIGRldGFpbGVkIGJyZWFrZG93biBvZiB0aGUgY29zdHMgaW52b2x2ZWQsIGFzIHdlbGwgYXNcbiAgICAgICAgICAgIGRlcG9zaXQgYW1vdW50cyBhbmQgcGF5bWVudCBkYXRlcy5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VlLWNvc3RzLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKCdjb3N0cy1zZWN0aW9uJylcbiAgICAgICAgICAgICAgICAgIC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnZW5kJywgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1idXR0b24gc2VlLWNvc3RzLWJ1dHRvblwiPkNvc3RzPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gaWQ9XCJjb3N0cy1zZWN0aW9uXCIgY2xhc3NOYW1lPVwic2VjdGlvbi1maXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlZS13aGVuLWNvbnRhaW5lclwiPlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJtYXJpdmFsXCIgLz4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FrZVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1idXR0b24gc2VlLW1hcml2YWwtYnV0dG9uXCI+XG4gICAgICAgICAgPGE+TWFyaXZhbDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyaXZhbC1kZXRhaWxzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlwLWRhdGVzXCI+TWF5IDIzcmQg4oCTIE1heSAzMHRoLCAyMDIwPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWRkaW5nLWRheS10aXRsZVwiPldlZGRpbmcgRGF5PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlwLWRhdGVzXCI+TWF5IDI1dGgsIDIwMjA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXItZm91clwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlcy1jb250YWluZXItZm91clwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZS1mb3VyXCI+V2hlbiAmIFdoZXJlPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlLWZvdXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtbGV0dGVyXCI+Rm9yPC9kaXY+IHRob3NlIG9mIHlvdSB0aGF0IGFyZSBhYmxlXG4gICAgICAgICAgICB0byBjb21lLCB3ZSBoYXZlIG9yZ2FuaXplZCBvdXIgd2VkZGluZyBhdCB0aGUgTWFyaXZhbCBpbiBOdWV2b1xuICAgICAgICAgICAgVmFsbGFydGEsIGp1c3Qgb3V0c2lkZSBvZiBQdWVydG8gVmFsbGFydGEuXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhlIHBhY2thZ2Ugd2XigJl2ZSBvcmdhbml6ZWQgY29zdHMganVzdCB1bmRlcnsnICd9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtbGV0dGVyXCI+JDE2MDA8L2Rpdj4sIGFuZCBpbmNsdWRlczpcbiAgICAgICAgICAgICAgPGRpdiBkaXI9XCJydGxcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+YWxsIGluY2x1c2l2ZSA3IGRheSBzdGF5PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5haXJmYXJlPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5haXJwb3J0IHNodXR0bGVzPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5vbmUgY2hlY2tlZCBiYWc8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgQ2hlY2sgb3V0IG91ciBkZXRhaWxlZCBicmVha2Rvd24gb2YgdGhlIGNvc3RzIGludm9sdmVkLCBhcyB3ZWxsIGFzXG4gICAgICAgICAgICBkZXBvc2l0IGFtb3VudHMgYW5kIHBheW1lbnQgZGF0ZXMuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlZS1jb3N0cy1jb250YWluZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgnY29zdHMtc2VjdGlvbicpXG4gICAgICAgICAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ2VuZCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uIHNlZS1jb3N0cy1idXR0b25cIj5Db3N0czwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxhc3RTZWN0aW9uXCIgLz5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgIHtcbiAgICAgICAgLyogR0VORVJBTCAqL1xuICAgICAgfVxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBXZXN0YnVyeVNpZ25hdHVyZTtcbiAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvV2VzdGJ1cnlTaWduYXR1cmUub3RmJykgZm9ybWF0KCdvcGVudHlwZScpO1xuICAgICAgfVxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0xhdG8tSGFpcmxpbmUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgICAgfVxuICAgICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzcsIDIyNCwgMjQ5LCAxKTtcbiAgICAgIH1cbiAgICAgIC5zZWN0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgIC1tcy1zY3JvbGwtc25hcC10eXBlOiBtYW5kYXRvcnk7XG4gICAgICAgIHNjcm9sbC1zbmFwLXR5cGU6IG1hbmRhdG9yeTtcbiAgICAgICAgLW1zLXNjcm9sbC1zbmFwLXBvaW50cy15OiByZXBlYXQoMTAwdmgpO1xuICAgICAgICBzY3JvbGwtc25hcC1wb2ludHMteTogcmVwZWF0KDEwMHZoKTtcbiAgICAgICAgLW1zLXNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xuICAgICAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgIH1cbiAgICAgIHNlY3Rpb24ge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LW5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICAuZmlyc3QtbGV0dGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYWlsYScsIHNlcmlmO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgICAgfVxuICAgICAgLm1haW4tYnV0dG9uIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICNjMmQyZjU7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MyZDJmNTtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgICB7XG4gICAgICAgIC8qIFxuICAgICAgXG4gICAgICBDT05UQUlORVIgT05FICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICBcbiAgICAgICovXG4gICAgICB9XG4gICAgICAudGl0bGVzLWNvbnRhaW5lci1vbmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBmb250LWZhbWlseTogUGFjaWZpY287XG4gICAgICB9XG4gICAgICAuc2VjdGlvbi1vbmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvTWFpblBhZ2UuZ2lmKTtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50LWNvbnRhaW5lci1vbmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDExMCwgMTA0LCAxNDgsIDAuOSk7XG4gICAgICB9XG4gICAgICAudGl0bGUtb25lIHtcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgICBjb2xvcjogI2MyZDJmNTtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICB9XG4gICAgICAuc2VlLWluZm8tYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm90dG9tOiAxNTBweDtcbiAgICAgIH1cbiAgICAgIC5zZWUtaW5mby1idXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJkMmY1O1xuICAgICAgICBjb2xvcjogcmdiYSgxMTAsIDEwNCwgMTQ4LCAxKTtcbiAgICAgIH1cbiAgICAgICB7XG4gICAgICAgIC8qIFxuICAgICAgXG4gICAgICBDT05UQUlORVIgVFdPICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICBcbiAgICAgICovXG4gICAgICB9XG4gICAgICAudGl0bGUtdHdvIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBjb2xvcjogI2MyZDJmNTtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgIH1cblxuICAgICAgIHtcbiAgICAgICAgLyogXG4gICAgICBcbiAgICAgIENPTlRBSU5FUiBUSFJFRSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgXG4gICAgICAqL1xuICAgICAgfVxuICAgICAgLnNlY3Rpb24tdGhyZWUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNywgMjI0LCAyNDksIDAuOSk7XG4gICAgICB9XG4gICAgICAudGl0bGVzLWNvbnRhaW5lci10aHJlZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBQYWNpZmljbztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICAgIC50aXRsZS10aHJlZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LWZhbWlseTogTGF0b0hhaXJMaW5lO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW4tbGVmdDogOHJlbTtcbiAgICAgIH1cbiAgICAgIC5zdWJ0aXRsZS10aHJlZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgICAgLnNlZS1kYXRlLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgICAgLmRvbHBoaW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvZG9scGhpbi5zdmcpO1xuICAgICAgICB3aWR0aDogMjByZW07XG4gICAgICAgIGhlaWdodDogMjByZW07XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICB9XG4gICAgICAuc2VlLWRhdGUtYnV0dG9uIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgLnNlZS1kYXRlLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY2ZmY7XG4gICAgICAgIGNvbG9yOiByZ2JhKDEzNywgMjI0LCAyNDksIDAuOSk7XG4gICAgICB9XG4gICAgICAgIC8qIFxuICAgICAgXG4gICAgICBDT05UQUlORVIgRk9VUiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgXG4gICAgICAqL1xuICAgICAgfVxuICAgICAgLnNlY3Rpb24tZm91ciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGMzOWE7XG4gICAgICB9XG4gICAgICAudGl0bGVzLWNvbnRhaW5lci1mb3VyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBQYWNpZmljbztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICAgIC50aXRsZS1mb3VyIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbiAgICAgIH1cbiAgICAgIC5zZWUtbWFyaXZhbC1idXR0b24ge1xuICAgICAgICBmb250LWZhbWlseTogTGF0b0hhaXJMaW5lO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAubWFyaXZhbC1kZXRhaWxzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICAgIC50cmlwLWRhdGVzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5jYWtlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1hZ2VzL2Nha2Uuc3ZnKTtcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xuICAgICAgICBoZWlnaHQ6IDIwcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgfVxuICAgICAgLndlZGRpbmctZGF5LXRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFdlc3RidXJ5U2lnbmF0dXJlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICB9XG4gICAgICAuc3VidGl0bGUtZm91ciB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSGFpckxpbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTByZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgICAuc2VlLXdoZW4tY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICAgIC5zZWUtY29zdHMtYnV0dG9uIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9IYWlyTGluZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnNlZS1jb3N0cy1idXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmNmZmO1xuICAgICAgICBjb2xvcjogI2U0YzM5YTtcbiAgICAgIH1cbiAgICAgIC5zZWN0aW9uLWZpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDExMCwgMTA0LCAxNDgsIDAuOSk7XG4gICAgICB9XG4gICAgICAubGFzdFNlY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIC5sYXN0U2VjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/dallas/Documents/JaphWeddingSite/pages/index.js */"));
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