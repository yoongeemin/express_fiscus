webpackHotUpdate(0,{

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _getPrototypeOf = __webpack_require__(46);\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(47);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(48);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(50);\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(49);\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _index = __webpack_require__(72);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(61);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(5);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(62);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _reactRedux = __webpack_require__(38);\n\nvar _navbar = __webpack_require__(110);\n\nvar _navbar2 = _interopRequireDefault(_navbar);\n\nvar _index7 = __webpack_require__(44);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _components = {\n    App: {\n        displayName: \"App\"\n    }\n};\n\nvar _UsersYoongeeminDocumentsWorkspaceFiscusNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n    filename: \"/Users/yoongeemin/Documents/workspace/Fiscus/app/containers/app.jsx\",\n    components: _components,\n    locals: [module],\n    imports: [_react3.default]\n});\n\nvar _UsersYoongeeminDocumentsWorkspaceFiscusNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n    filename: \"/Users/yoongeemin/Documents/workspace/Fiscus/app/containers/app.jsx\",\n    components: _components,\n    locals: [],\n    imports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n    return function (Component) {\n        return _UsersYoongeeminDocumentsWorkspaceFiscusNode_modulesReactTransformHmrLibIndexJs2(_UsersYoongeeminDocumentsWorkspaceFiscusNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n    };\n}\n\nvar App = _wrapComponent(\"App\")(function (_React$Component) {\n    (0, _inherits3.default)(App, _React$Component);\n\n    function App() {\n        (0, _classCallCheck3.default)(this, App);\n        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));\n    }\n\n    (0, _createClass3.default)(App, [{\n        key: \"componentDidMount\",\n        value: function componentDidMount() {\n            this.props.dispatch((0, _index7.getQuotes)());\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            return _react3.default.createElement(\n                \"div\",\n                { id: \"app\" },\n                _react3.default.createElement(_navbar2.default, { profile: this.props.profile, quotes: this.props.quotes }),\n                this.props.children\n            );\n        }\n    }]);\n    return App;\n}(_react3.default.Component));\n\nApp.propTypes = {\n    dispatch: _react3.default.PropTypes.func.isRequired,\n    profile: _react3.default.PropTypes.object.isRequired,\n    quotes: _react3.default.PropTypes.object.isRequired,\n    children: _react3.default.PropTypes.array\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        profile: state.userReducer.profile,\n        quotes: state.quoteReducer.quotes\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(App);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjExLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb250YWluZXJzL2FwcC5qc3g/ZGM2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IHsgZ2V0UXVvdGVzIH0gZnJvbSBcIi4uL2FjdGlvbnMvaW5kZXhcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChnZXRRdW90ZXMoKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImFwcFwiPlxuICAgICAgICAgICAgICAgIDxOYXZCYXIgcHJvZmlsZT17dGhpcy5wcm9wcy5wcm9maWxlfSBxdW90ZXM9e3RoaXMucHJvcHMucXVvdGVzfSAvPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5BcHAucHJvcFR5cGVzID0ge1xuICAgIGRpc3BhdGNoOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHByb2ZpbGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBxdW90ZXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvZmlsZTogc3RhdGUudXNlclJlZHVjZXIucHJvZmlsZSxcbiAgICAgICAgcXVvdGVzOiBzdGF0ZS5xdW90ZVJlZHVjZXIucXVvdGVzLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFwcCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhcHAvY29udGFpbmVycy9hcHAuanN4XG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7O0FBTkE7QUFBQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})