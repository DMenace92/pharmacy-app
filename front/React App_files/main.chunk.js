(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App{\nbackground-image: url(" + escape(__webpack_require__(/*! ./150016-vertical-biology-wallpaper-1920x1200.jpg */ "./src/150016-vertical-biology-wallpaper-1920x1200.jpg")) + ")!important;\n/* opacity:.8; */\nheight:100vh;\n}", ""]);

// exports


/***/ }),

/***/ "./src/150016-vertical-biology-wallpaper-1920x1200.jpg":
/*!*************************************************************!*\
  !*** ./src/150016-vertical-biology-wallpaper-1920x1200.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/150016-vertical-biology-wallpaper-1920x1200.dc5d24b4.jpg";

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _containers_LoginContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/LoginContainer */ "./src/containers/LoginContainer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _containers_MainPageContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/MainPageContainer */ "./src/containers/MainPageContainer.js");
/* harmony import */ var _containers_RegisterContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/RegisterContainer */ "./src/containers/RegisterContainer.js");
/* harmony import */ var _containers_NotesContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/NotesContainer */ "./src/containers/NotesContainer.js");
/* harmony import */ var _Component_LoginAndRegister__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Component/LoginAndRegister */ "./src/Component/LoginAndRegister.js");
/* harmony import */ var _containers_MedInfoContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/MedInfoContainer */ "./src/containers/MedInfoContainer.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_13__);





var _jsxFileName = "/Users/dennisenwiya/Documents/Q4galvanize/pharmacy-app/front/src/App.js";










var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      console.log(_containers_LoginContainer__WEBPACK_IMPORTED_MODULE_6__["default"]);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        path: "//",
        component: _Component_LoginAndRegister__WEBPACK_IMPORTED_MODULE_11__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("route", {
        path: "medinfo",
        component: _containers_MedInfoContainer__WEBPACK_IMPORTED_MODULE_12__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        path: "/login",
        component: _containers_LoginContainer__WEBPACK_IMPORTED_MODULE_6__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        path: "/register",
        component: _containers_RegisterContainer__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/main",
        component: _containers_MainPageContainer__WEBPACK_IMPORTED_MODULE_8__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/notes",
        component: _containers_NotesContainer__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Component/Login.js":
/*!********************************!*\
  !*** ./src/Component/Login.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var _jsxFileName = "/Users/dennisenwiya/Documents/Q4galvanize/pharmacy-app/front/src/Component/Login.js";

 // import Register from "./Component/Register"

var Login =
/*#__PURE__*/
function (_Component) {
  Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      email: "",
      password: "",
      username: "",
      name: ""
    };

    _this._onSubmit = function (e) {
      e.preventDefault();
      console.log(_this.state);
      console.log(_this.props);

      _this.props.login(_this.state);

      _this.props.history.push("/main");

      _this.setState({
        email: "",
        password: "",
        username: "",
        name: ""
      });
    };

    _this._onChange = function (_ref) {
      var target = _ref.target;

      _this.setState(Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target.name, target.value));
    };

    return _this;
  }

  Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Login, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
        onSubmit: this._onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
        for: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        onChange: this._onChange,
        value: this.state.email,
        type: "text",
        name: "email",
        placeholder: "Email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
        for: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        onChange: this._onChange,
        value: this.state.password,
        type: "password",
        name: "password",
        placeholder: "Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Submit"));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/Component/LoginAndRegister.js":
/*!*******************************************!*\
  !*** ./src/Component/LoginAndRegister.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





var _jsxFileName = "/Users/dennisenwiya/Documents/Q4galvanize/pharmacy-app/front/src/Component/LoginAndRegister.js";
 // import {Button} from "reactstrap"



var LoginAndRegister =
/*#__PURE__*/
function (_Component) {
  Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LoginAndRegister, _Component);

  function LoginAndRegister() {
    Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginAndRegister);

    return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginAndRegister).apply(this, arguments));
  }

  Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginAndRegister, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/register",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Register"));
    }
  }]);

  return LoginAndRegister;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoginAndRegister);

/***/ }),

/***/ "./src/Component/MainPage.js":
/*!***********************************!*\
  !*** ./src/Component/MainPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "/Users/dennisenwiya/Documents/Q4galvanize/pharmacy-app/front/src/Component/MainPage.js";
 // import {Link} from 'react-router-dom'

 // import SearchBar from './SearchBar';

var MainPage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MainPage, _Component);

  function MainPage() {
    Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainPage);

    return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainPage).apply(this, arguments));
  }

  Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainPage, [{
    key: "render",
    // componentDidMount(){
    // this.props.meds()
    // }
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "medication:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "quontity:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "directions:"))));
    }
  }]);

  return MainPage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainPage);

/***/ }),

/***/ "./src/Component/MedInfo.js":
/*!**********************************!*\
  !*** ./src/Component/MedInfo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "/Users/dennisenwiya/Documents/Q4galvanize/pharmacy-app/front/src/Component/MedInfo.js";



var MedInfo =
/*#__PURE__*/
function (_Component) {
  Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MedInfo, _Component);

  function MedInfo() {
    Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MedInfo);

    return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MedInfo).apply(this, arguments));
  }

  Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MedInfo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        for: "exampleEmail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "email",
        name: "email",
        id: "exampleEmail",
        placeholder: "with a placeholder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        for: "examplePassword",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "password",
        name: "password",
        id: "examplePassword",
        placeholder: "password placeholder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        for: "exampleSelect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Select"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "select",
        name: "select",
        id: "exampleSelect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "1"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "2"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "3"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "4"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "5"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        for: "exampleSelectMulti",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Select Multiple"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "select",
        name: "selectMulti",
        id: "exampleSelectMulti",
        multiple: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "1"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "2"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "3"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "4"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "5"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        for: "exampleText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Text Area"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "textarea",
        name: "text",
        id: "exampleText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        for: "exampleFile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "File"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "file",
        name: "file",
        id: "exampleFile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormText"], {
        color: "muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        tag: "fieldset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("legend", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Radio Buttons"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        check: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        check: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "radio",
        name: "radio1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), ' ', "Option one is this and that\u2014be sure to include why it's great")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        check: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        check: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "radio",
        name: "radio1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), ' ', "Option two can be something else and selecting it will deselect option one")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        check: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        check: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "radio",
        name: "radio1",
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), ' ', "Option three is disabled"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        check: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        check: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), ' ', "Check me out")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Submit")));
    }
  }]);

  return MedInfo;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MedInfo);

/***/ }),

/***/ "./src/Component/Notes.js":
/*!********************************!*\
  !*** ./src/Component/Notes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var _jsxFileName = "/Users/dennisenwiya/Documents/Q4galvanize/pharmacy-app/front/src/Component/Notes.js";
 // import{Redirect} from "react-router-dom"



var Notes =
/*#__PURE__*/
function (_Component) {
  Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Notes, _Component);

  function Notes() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Notes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Notes)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      title: "",
      content: ""
    };

    _this._onSubmit = function (e) {
      e.preventDefault();
      console.log(_this.state);
      console.log(_this.props);

      _this.props.notes(_this.state);

      _this.setState({
        titel: "",
        content: ""
      });
    };

    _this._onChange = function (_ref) {
      var target = _ref.target;

      _this.setState(Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target.name, target.value));
    };

    return _this;
  }

  Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Notes, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
        onSubmit: this._onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
        for: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Title"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("textarea", {
        onChange: this._onChange,
        value: this.state.title,
        name: "title",
        id: "",
        cols: "30",
        rows: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
        for: "Notes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Notes"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("textarea", {
        onChange: this._onChange,
        value: this.state.content,
        name: "content",
        id: "",
        cols: "30",
        rows: "7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Submit"));
    }
  }]);

  return Notes;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Notes);

/***/ }),

/***/ "./src/Component/Register.js":
/*!***********************************!*\
  !*** ./src/Component/Register.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var _jsxFileName = "/Users/dennisenwiya/Documents/Q4galvanize/pharmacy-app/front/src/Component/Register.js";



var Register =
/*#__PURE__*/
function (_Component) {
  Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Register, _Component);

  function Register() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Register)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      name: "",
      username: "",
      password: "",
      email: ""
    };

    _this._onSubmit = function (e) {
      e.preventDefault();

      _this.props.register(_this.state);

      _this.setState({
        username: "",
        password: "",
        name: "",
        email: ""
      });
    };

    _this._onChange = function (_ref) {
      var target = _ref.target;

      _this.setState(Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target.name, target.value));
    };

    return _this;
  }

  Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Register, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
        onSubmit: this._onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Register", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
        for: "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Username"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        onChange: this._onChange,
        value: this.state.username,
        type: "text",
        name: "username",
        placeholder: "Username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
        for: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        onChange: this._onChange,
        value: this.state.name,
        type: "text",
        name: "name",
        placeholder: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
        for: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "email"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        onChange: this._onChange,
        value: this.state.email,
        type: "text",
        name: "email",
        placeholder: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
        for: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        onChange: this._onChange,
        value: this.state.password,
        type: "password",
        name: "password",
        placeholder: "Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Submit"));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./src/actions/medAction.js":
/*!**********************************!*\
  !*** ./src/actions/medAction.js ***!
  \**********************************/
/*! exports provided: CREATE_MEDS_SUCCESS, CREATE_MEDS_LOADING, CREATE_MEDS_ERROR, FETCH_MEDS_SUCCESS, FETCH_MEDS_LOADING, FETCH_MEDS_ERROR, createMeds, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_MEDS_SUCCESS", function() { return CREATE_MEDS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_MEDS_LOADING", function() { return CREATE_MEDS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_MEDS_ERROR", function() { return CREATE_MEDS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MEDS_SUCCESS", function() { return FETCH_MEDS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MEDS_LOADING", function() { return FETCH_MEDS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MEDS_ERROR", function() { return FETCH_MEDS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMeds", function() { return createMeds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
//create
var CREATE_MEDS_SUCCESS = "CREATE_MEDS_SUCCESS";

var createMedsSuccess = function createMedsSuccess(input) {
  return {
    type: CREATE_MEDS_SUCCESS,
    payload: input
  };
};

var CREATE_MEDS_LOADING = "CREATE_MEDS_LOADING";

var createMedsLoading = function createMedsLoading(meds) {
  return {
    type: CREATE_MEDS_LOADING
  };
};

var CREATE_MEDS_ERROR = "CREATE_MEDS_ERROR";

var createMedsError = function createMedsError() {
  return {
    type: CREATE_MEDS_ERROR
  };
}; //fetch


var FETCH_MEDS_SUCCESS = "FETCH_MEDS_SUCCESS";

var fetchMedsSuccess = function fetchMedsSuccess(meds) {
  return {
    type: FETCH_MEDS_SUCCESS,
    payload: meds
  };
};

var FETCH_MEDS_LOADING = "FETCH_MEDS_LOADING";

var fetchMedsLoading = function fetchMedsLoading(meds) {
  return {
    type: FETCH_MEDS_LOADING
  };
};

var FETCH_MEDS_ERROR = "FETCH_MEDS_ERROR";

var fetchMedsError = function fetchMedsError() {
  return {
    type: FETCH_MEDS_ERROR
  };
}; //delete
//thunk


var createMeds = function createMeds(meds) {
  return function (dispatch) {
    dispatch(createMedsLoading());
    fetch('http://localhost:8000/medInfo', {
      method: 'POST',
      body: JSON.stringify(meds),
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      }
    }).then(function (res) {
      return res.json();
    }).then(function (meds) {
      dispatch(createMedsSuccess(meds));
    }).catch(function (err) {
      dispatch(createMedsError());
    });
  };
};
var fetch = function fetch(token) {
  return function (dispatch) {
    dispatch(fetchMedsLoading());
    fetch('http://localhost:8000/medInfo', {
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      }
    }).then(function (res) {
      return res.json();
    }).then(function (meds) {
      dispatch(fetchMedsSuccess(meds));
    }).catch(function (err) {
      dispatch(fetchMedsError());
    });
  };
};

/***/ }),

/***/ "./src/actions/notesActions.js":
/*!*************************************!*\
  !*** ./src/actions/notesActions.js ***!
  \*************************************/
/*! exports provided: CREATE_NOTES_SUCCESS, CREATE_NOTES_ERROR, CREATE_NOTES_LOADING, FETCH_NOTES_SUCCESS, FETCH_NOTES_LOADING, FETCH_NOTES_ERROR, DELETE_NOTES_SUCCESS, DELETE_NOTES_ERROR, DELETE_NOTES_LOADING, createNotes, fetchNotes, deleteNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_NOTES_SUCCESS", function() { return CREATE_NOTES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_NOTES_ERROR", function() { return CREATE_NOTES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_NOTES_LOADING", function() { return CREATE_NOTES_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NOTES_SUCCESS", function() { return FETCH_NOTES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NOTES_LOADING", function() { return FETCH_NOTES_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NOTES_ERROR", function() { return FETCH_NOTES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_NOTES_SUCCESS", function() { return DELETE_NOTES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_NOTES_ERROR", function() { return DELETE_NOTES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_NOTES_LOADING", function() { return DELETE_NOTES_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNotes", function() { return createNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNotes", function() { return fetchNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNotes", function() { return deleteNotes; });
//CREATE
var CREATE_NOTES_SUCCESS = "CREATE_NOTES_SUCCESS";

var createNotesSuccess = function createNotesSuccess(input) {
  return {
    type: CREATE_NOTES_SUCCESS,
    payload: input
  };
};

var CREATE_NOTES_ERROR = "CREATE_NOTES_ERROR";

var createNotesError = function createNotesError() {
  return {
    type: CREATE_NOTES_ERROR
  };
};

var CREATE_NOTES_LOADING = "CREATE_NOTES_LOADING";

var createNotesLoading = function createNotesLoading() {
  return {
    type: CREATE_NOTES_LOADING
  };
}; //fetch


var FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";

var fetchNotesSuccess = function fetchNotesSuccess(note) {
  return {
    type: FETCH_NOTES_SUCCESS,
    payload: note
  };
};

var FETCH_NOTES_LOADING = "FETCH_NOTES_LOADING";

var fetchNotesLoading = function fetchNotesLoading(note) {
  return {
    type: FETCH_NOTES_LOADING
  };
};

var FETCH_NOTES_ERROR = "FETCH_NOTES_ERROR";

var fetchNotesError = function fetchNotesError() {
  return {
    type: FETCH_NOTES_ERROR
  };
}; //DELETE


var DELETE_NOTES_SUCCESS = "DELETE_NOTES_SUCCESS";

var deleteNotesSuccess = function deleteNotesSuccess(id) {
  return {
    type: DELETE_NOTES_SUCCESS,
    payload: id
  };
};

var DELETE_NOTES_ERROR = "DELETE_NOTES_ERROR";

var deleteNotesError = function deleteNotesError() {
  return {
    type: DELETE_NOTES_ERROR
  };
};

var DELETE_NOTES_LOADING = "DELETE_NOTES_LOADING";

var deleteNotesLoading = function deleteNotesLoading() {
  return {
    type: DELETE_NOTES_LOADING
  };
}; //THUNK
//CREATE


var createNotes = function createNotes(notes) {
  return function (dispatch) {
    dispatch(createNotesLoading());
    fetch('http://localhost:8000/notes', {
      method: 'POST',
      body: JSON.stringify(notes),
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      }
    }).then(function (res) {
      return res.json();
    }).then(function (notes) {
      dispatch(createNotesSuccess(notes));
    }).catch(function (err) {
      dispatch(createNotesError());
    });
  };
}; //FETCH

var fetchNotes = function fetchNotes(token) {
  return function (dispatch) {
    dispatch(fetchNotesLoading());
    fetch('http://localhost:8000/notes', {
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      }
    }).then(function (res) {
      return res.json();
    }).then(function (notes) {
      dispatch(fetchNotesSuccess(notes));
    }).catch(function (err) {
      dispatch(fetchNotesError());
    });
  };
}; //DELETE

var deleteNotes = function deleteNotes(_id, token) {
  return function (dispatch) {
    dispatch(deleteNotesLoading());
    fetch('http://localhost:8000/notes', {
      method: 'POST',
      body: JSON.stringify(_id),
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }
    }).then(function (res) {
      return res.json();
    }).then(function (_id) {
      dispatch(deleteNotesSuccess(_id));
    }).catch(function (err) {
      dispatch(deleteNotesError());
    });
  };
};

/***/ }),

/***/ "./src/actions/userActions.js":
/*!************************************!*\
  !*** ./src/actions/userActions.js ***!
  \************************************/
/*! exports provided: LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_LOADING, REGISTER_SUCCESS, REGISTER_ERROR, REGISTER_LOADING, LOGOUT_SUCCESS, login, register, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_LOADING", function() { return LOGIN_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_ERROR", function() { return REGISTER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_LOADING", function() { return REGISTER_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
//login 
var LOGIN_SUCCESS = "LOGIN_SUCCESS";

var loginSuccess = function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

var LOGIN_ERROR = "LOGIN_ERROR";

var loginError = function loginError() {
  return {
    type: LOGIN_ERROR
  };
};

var LOGIN_LOADING = "LOGIN_LOADING";

var loginLoading = function loginLoading() {
  return {
    type: LOGIN_LOADING
  };
}; //REGISTER


var REGISTER_SUCCESS = "REGISTER_SUCCESS";

var registerSuccess = function registerSuccess(msg) {
  return {
    type: REGISTER_SUCCESS,
    payload: msg
  };
};

var REGISTER_ERROR = "REGISTER_ERROR";

var registerError = function registerError() {
  return {
    type: REGISTER_ERROR
  };
};

var REGISTER_LOADING = "REGISTER_LOADING";

var registerLoading = function registerLoading() {
  return {
    type: REGISTER_LOADING
  };
}; //LOGOUT


var LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

var logoutSuccess = function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  };
}; //THUNKS


var login = function login(user) {
  return function (dispatch) {
    return fetch('http://localhost:8000/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (user) {
      console.log(user);
      dispatch(loginSuccess(user));
    }).catch(function (err) {
      dispatch(loginError());
    });
  };
};
var register = function register(user) {
  return function (dispatch) {
    dispatch(registerLoading());
    fetch('http://localhost:8000/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json;
    }).then(function (msg) {
      dispatch(registerSuccess(msg));
    }).catch(function (err) {
      dispatch(registerError());
    });
  };
};
var logout = function logout() {
  return function (dispatch) {
    dispatch(logoutSuccess());
  };
};

/***/ }),

/***/ "./src/containers/LoginContainer.js":
/*!******************************************!*\
  !*** ./src/containers/LoginContainer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Component_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component/Login */ "./src/Component/Login.js");
/* harmony import */ var _actions_userActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/userActions */ "./src/actions/userActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");




var mapStateToProps = function mapStateToProps(_ref) {
  var user = _ref.user;
  return {
    user: user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login(user) {
      dispatch(Object(_actions_userActions__WEBPACK_IMPORTED_MODULE_1__["login"])(user));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(_Component_Login__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./src/containers/MainPageContainer.js":
/*!*********************************************!*\
  !*** ./src/containers/MainPageContainer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Component_MainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component/MainPage */ "./src/Component/MainPage.js");

 // import { fetchMeds } from '../actions/medAction';

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user // medlist: state.meds.meds

  };
}; // const mapDispatchToProps = dispatch => {
//   return {
//     meds: (meds)=>{
//       dispatch(fetchMeds(meds));
//     }
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_Component_MainPage__WEBPACK_IMPORTED_MODULE_1__["default"])); // ,mapDispatchToProps

/***/ }),

/***/ "./src/containers/MedInfoContainer.js":
/*!********************************************!*\
  !*** ./src/containers/MedInfoContainer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Component_MedInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component/MedInfo */ "./src/Component/MedInfo.js");



var mapStateToProps = function mapStateToProps(state) {
  return {
    meds: state.meds
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_Component_MedInfo__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/containers/NotesContainer.js":
/*!******************************************!*\
  !*** ./src/containers/NotesContainer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_notesActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/notesActions */ "./src/actions/notesActions.js");
/* harmony import */ var _Component_Notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Component/Notes */ "./src/Component/Notes.js");




var mapStateToProps = function mapStateToProps(_ref) {
  var notes = _ref.notes;
  return {
    user: notes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    notes: function notes(_notes) {
      dispatch(Object(_actions_notesActions__WEBPACK_IMPORTED_MODULE_1__["createNotes"])(_notes));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Component_Notes__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/containers/RegisterContainer.js":
/*!*********************************************!*\
  !*** ./src/containers/RegisterContainer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Component_Register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component/Register */ "./src/Component/Register.js");
/* harmony import */ var _actions_userActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/userActions */ "./src/actions/userActions.js");




var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    register: function register(user) {
      dispatch(Object(_actions_userActions__WEBPACK_IMPORTED_MODULE_2__["register"])(user));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(_Component_Register__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/dennisenwiya/Documents/Q4galvanize/pharmacy-app/front/src/index.js";






 // import * as serviceWorker from './serviceWorker';

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: _store__WEBPACK_IMPORTED_MODULE_5__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}))), document.getElementById('root'));

/***/ }),

/***/ "./src/reducers/medReducers.js":
/*!*************************************!*\
  !*** ./src/reducers/medReducers.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_medAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/medAction */ "./src/actions/medAction.js");


var initState = {
  userId: String,
  medication: String,
  quantity: String,
  doctor: String,
  dateWritten: String,
  daySupply: String,
  refills: String,
  medsLoading: false,
  medsError: false
};

var medReducers = function medReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_medAction__WEBPACK_IMPORTED_MODULE_1__["CREATE_MEDS_SUCCESS"]:
      // console.log(action.payload);
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        medication: action.payload.meds.medication,
        quantity: action.payload.meds.quantity,
        doctor: action.payload.meds.doctor,
        daySupply: action.payload.meds.daySupply,
        refills: action.payload.nmeds.refills,
        medsLoading: false,
        medsError: false
      });

    case _actions_medAction__WEBPACK_IMPORTED_MODULE_1__["CREATE_MEDS_ERROR"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        medsError: true
      });

    case _actions_medAction__WEBPACK_IMPORTED_MODULE_1__["CREATE_MEDS_LOADING"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        medsLoading: true
      });

    case _actions_medAction__WEBPACK_IMPORTED_MODULE_1__["FETCH_MEDS_SUCCESS"]:
      // console.log(action.payload);
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        medication: action.payload.meds.medication,
        quantity: action.payload.meds.quantity,
        doctor: action.payload.meds.doctor,
        daySupply: action.payload.meds.daySupply,
        refills: action.payload.nmeds.refills,
        medsLoading: false,
        medsError: false
      });

    case _actions_medAction__WEBPACK_IMPORTED_MODULE_1__["FETCH_MEDS_ERROR"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        medsError: true
      });

    case _actions_medAction__WEBPACK_IMPORTED_MODULE_1__["FETCH_MEDS_LOADING"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        medsLoading: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (medReducers);

/***/ }),

/***/ "./src/reducers/notesReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/notesReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_notesActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/notesActions */ "./src/actions/notesActions.js");


var initState = {
  title: "",
  content: "",
  timestamps: true,
  notesLoading: false,
  notesError: false
};

var notesReducer = function notesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    //creating
    case _actions_notesActions__WEBPACK_IMPORTED_MODULE_1__["CREATE_NOTES_LOADING"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        notesLoading: true
      });

    case _actions_notesActions__WEBPACK_IMPORTED_MODULE_1__["CREATE_NOTES_SUCCESS"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        id: action.payload.notes.id,
        title: action.payload.notes.title,
        content: action.payload.notes.title,
        notesLoading: false,
        notesError: false
      });

    case _actions_notesActions__WEBPACK_IMPORTED_MODULE_1__["CREATE_NOTES_ERROR"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        id: "",
        title: "",
        content: "",
        notesLoading: false,
        notesError: true //fetch

      });

    case _actions_notesActions__WEBPACK_IMPORTED_MODULE_1__["FETCH_NOTES_SUCCESS"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        id: action.payload.notes.id,
        title: action.payload.notes.title,
        content: action.payload.notes.title,
        notesLoading: false,
        notesError: false
      });

    case _actions_notesActions__WEBPACK_IMPORTED_MODULE_1__["FETCH_NOTES_LOADING"]:
      return {
        notesLoading: true
      };

    case _actions_notesActions__WEBPACK_IMPORTED_MODULE_1__["FETCH_NOTES_ERROR"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        id: "",
        title: "",
        content: "",
        notesLoading: false,
        notesError: true
      });

    case _actions_notesActions__WEBPACK_IMPORTED_MODULE_1__["DELETE_NOTES_SUCCESS"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        content: state.notes.filter(function (notes) {
          return notes.id !== action.payload.id;
        })
      });

    case _actions_notesActions__WEBPACK_IMPORTED_MODULE_1__["DELETE_NOTES_ERROR"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        notesError: true
      });

    case _actions_notesActions__WEBPACK_IMPORTED_MODULE_1__["DELETE_NOTES_LOADING"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        notesLoading: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (notesReducer);

/***/ }),

/***/ "./src/reducers/rootReducers.js":
/*!**************************************!*\
  !*** ./src/reducers/rootReducers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _usersReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersReducer */ "./src/reducers/usersReducer.js");
/* harmony import */ var _medReducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medReducers */ "./src/reducers/medReducers.js");
/* harmony import */ var _notesReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notesReducer */ "./src/reducers/notesReducer.js");




var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _usersReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  meds: _medReducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  notes: _notesReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/usersReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/usersReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_userActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/userActions */ "./src/actions/userActions.js");


var initState = {
  id: "",
  username: "",
  token: "",
  loginLoading: false,
  loginError: false,
  registerError: false
};

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_userActions__WEBPACK_IMPORTED_MODULE_1__["LOGIN_LOADING"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loginLoading: true
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESS"]:
      localStorage.setItem('token', action.payload.token);
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        id: action.payload.user.id,
        username: action.payload.user.username,
        token: action.payload.token,
        loginLoading: false,
        loginError: false
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_1__["LOGIN_ERROR"]:
      window.location.href = '/login';
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        id: "",
        username: "",
        token: "",
        loginLoading: false,
        loginError: true
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_1__["REGISTER_LOADING"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loginLoading: true
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_1__["REGISTER_SUCCESS"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        registerError: false,
        loginLoading: false
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_1__["REGISTER_ERROR"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        registerError: true
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_SUCCESS"]:
      return Object(_Users_dennisenwiya_Documents_Q4galvanize_pharmacy_app_front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        id: "",
        username: "",
        token: "",
        loginLoading: false,
        loginError: false,
        registerError: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_rootReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/rootReducers */ "./src/reducers/rootReducers.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
 // import rootReducer from './reducers/rootReducer'




var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducers__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/dennisenwiya/Documents/Q4galvanize/pharmacy-app/front/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/dennisenwiya/Documents/Q4galvanize/pharmacy-app/front/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map