exports.id = 1;
exports.modules = {

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar _express = __webpack_require__(71);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(72);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _passport = __webpack_require__(73);\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passport3 = __webpack_require__(74);\n\nvar _passport4 = _interopRequireDefault(_passport3);\n\nvar _express3 = __webpack_require__(81);\n\nvar _express4 = _interopRequireDefault(_express3);\n\nvar _routes = __webpack_require__(96);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _path = __webpack_require__(86);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _config = __webpack_require__(91);\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n(0, _passport4.default)(app, _passport2.default);\n(0, _express4.default)(app, _passport2.default);\n(0, _routes2.default)(app, _passport2.default);\n\nconnect().on(\"error\", console.error).on(\"open\", listen);\n\nfunction listen() {\n\tapp.listen((8000));\n\tconsole.log(\"Server starting on port: \" + (8000));\n}\n\nfunction listenDev() {}\n\nfunction connect() {\n\treturn _mongoose2.default.connect(_config2.default.db).connection;\n}//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2VydmVyLmpzPzI2OGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsSUFBTSxNQUFNLHdCQUFOO0FBQ04sd0JBQWtCLEdBQWxCO0FBQ0EsdUJBQWlCLEdBQWpCO0FBQ0Esc0JBQWdCLEdBQWhCOztBQUVBLFVBQ0UsRUFERixDQUNLLE9BREwsRUFDYyxRQUFRLEtBQVIsQ0FEZCxDQUVFLEVBRkYsQ0FFSyxNQUZMLEVBRWEsTUFGYjs7QUFJQSxTQUFTLE1BQVQsR0FBa0I7QUFDakIsS0FBSSxNQUFKLENBQVcsTUFBWCxFQURpQjtBQUVqQixTQUFRLEdBQVIsQ0FBWSw4QkFBOEIsTUFBOUIsQ0FBWixDQUZpQjtDQUFsQjs7QUFLQSxTQUFTLFNBQVQsR0FBcUIsRUFBckI7O0FBSUEsU0FBUyxPQUFULEdBQW1CO0FBQ2xCLFFBQU8sbUJBQVMsT0FBVCxDQUFpQixpQkFBTyxFQUFQLENBQWpCLENBQTRCLFVBQTVCLENBRFciLCJmaWxlIjoiNzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IHBhc3Nwb3J0IGZyb20gXCJwYXNzcG9ydFwiO1xuaW1wb3J0IGJvb3RzdHJhcFBhc3Nwb3J0IGZyb20gXCIuL2NvbmZpZy9wYXNzcG9ydFwiO1xuaW1wb3J0IGJvb3RzdHJhcEV4cHJlc3MgZnJvbSBcIi4vY29uZmlnL2V4cHJlc3NcIjtcbmltcG9ydCBib290c3RyYXBSb3V0ZXMgZnJvbSBcIi4vY29uZmlnL3JvdXRlc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4vY29uZmlnL2NvbmZpZ1wiO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5ib290c3RyYXBQYXNzcG9ydChhcHAsIHBhc3Nwb3J0KTtcbmJvb3RzdHJhcEV4cHJlc3MoYXBwLCBwYXNzcG9ydCk7XG5ib290c3RyYXBSb3V0ZXMoYXBwLCBwYXNzcG9ydCk7XG5cbmNvbm5lY3QoKVxuXHQub24oXCJlcnJvclwiLCBjb25zb2xlLmVycm9yKVxuXHQub24oXCJvcGVuXCIsIGxpc3Rlbik7XG5cbmZ1bmN0aW9uIGxpc3RlbigpIHtcblx0YXBwLmxpc3RlbihfX1BPUlRfXyk7XG5cdGNvbnNvbGUubG9nKFwiU2VydmVyIHN0YXJ0aW5nIG9uIHBvcnQ6IFwiICsgX19QT1JUX18pO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5EZXYoKSB7XG5cbn1cblxuZnVuY3Rpb24gY29ubmVjdCgpIHtcblx0cmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QoY29uZmlnLmRiKS5jb25uZWN0aW9uO1xufVxuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc2VydmVyL3NlcnZlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

};