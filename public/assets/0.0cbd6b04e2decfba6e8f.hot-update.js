webpackHotUpdate(0,{

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(process) {\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.configureStore = configureStore;\n\nvar _redux = __webpack_require__(108);\n\nvar _reduxThunk = __webpack_require__(447);\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reduxLogger = __webpack_require__(446);\n\nvar _reduxLogger2 = _interopRequireDefault(_reduxLogger);\n\nvar _reactRouterRedux = __webpack_require__(157);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//export function dateToString(date) {\n//    const monthString = date.month()+1<10 ? \"0\"+(date.month()+1).toString() : (date.month()+1).toString();\n//    const dayString = date.date()<10 ? \"0\"+date.date().toString() : date.date().toString();\n//    const dateString = date.year().toString()+\"-\"+monthString+\"-\"+dayString;\n//\n//    const hourString = date.hour()<10 ? \"0\"+date.hour().toString() : date.hour().toString();\n//    const minuteString = date.minutes()<10 ? \"0\"+date.minutes().toString() : date.minutes().toString();\n//    const timeString = hourString+\":\"+minuteString;\n//\n//    const secondString = date.seconds()<10 ? \"0\"+date.seconds().toString() : date.seconds().toString();\n//\n//    return [dateString, timeString, secondString];\n//}\n\n// export function setUpCSRFToken() {\n// \tvar csrfToken = $.cookie('csrftoken');\n// \t$.ajaxSetup({\n// \t\theaders: { \"X-CSRFToken\": csrfToken }\n// \t});\n// }\n\nfunction configureStore(reducer, history) {\n    var middlewares = [_reduxThunk2.default, (0, _reactRouterRedux.syncHistoryWithStore)(history)];\n\n    if (process.env.NODE_ENV === \"development\") {\n        middlewares.push((0, _reduxLogger2.default)());\n    }\n\n    return _redux.applyMiddleware.apply(undefined, middlewares)(_redux.createStore)(reducer);\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9saWIvdXRpbHMuanM/NDE5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1yZWR1eFwiO1xuXG4vL2V4cG9ydCBmdW5jdGlvbiBkYXRlVG9TdHJpbmcoZGF0ZSkge1xuLy8gICAgY29uc3QgbW9udGhTdHJpbmcgPSBkYXRlLm1vbnRoKCkrMTwxMCA/IFwiMFwiKyhkYXRlLm1vbnRoKCkrMSkudG9TdHJpbmcoKSA6IChkYXRlLm1vbnRoKCkrMSkudG9TdHJpbmcoKTtcbi8vICAgIGNvbnN0IGRheVN0cmluZyA9IGRhdGUuZGF0ZSgpPDEwID8gXCIwXCIrZGF0ZS5kYXRlKCkudG9TdHJpbmcoKSA6IGRhdGUuZGF0ZSgpLnRvU3RyaW5nKCk7XG4vLyAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF0ZS55ZWFyKCkudG9TdHJpbmcoKStcIi1cIittb250aFN0cmluZytcIi1cIitkYXlTdHJpbmc7XG4vL1xuLy8gICAgY29uc3QgaG91clN0cmluZyA9IGRhdGUuaG91cigpPDEwID8gXCIwXCIrZGF0ZS5ob3VyKCkudG9TdHJpbmcoKSA6IGRhdGUuaG91cigpLnRvU3RyaW5nKCk7XG4vLyAgICBjb25zdCBtaW51dGVTdHJpbmcgPSBkYXRlLm1pbnV0ZXMoKTwxMCA/IFwiMFwiK2RhdGUubWludXRlcygpLnRvU3RyaW5nKCkgOiBkYXRlLm1pbnV0ZXMoKS50b1N0cmluZygpO1xuLy8gICAgY29uc3QgdGltZVN0cmluZyA9IGhvdXJTdHJpbmcrXCI6XCIrbWludXRlU3RyaW5nO1xuLy9cbi8vICAgIGNvbnN0IHNlY29uZFN0cmluZyA9IGRhdGUuc2Vjb25kcygpPDEwID8gXCIwXCIrZGF0ZS5zZWNvbmRzKCkudG9TdHJpbmcoKSA6IGRhdGUuc2Vjb25kcygpLnRvU3RyaW5nKCk7XG4vL1xuLy8gICAgcmV0dXJuIFtkYXRlU3RyaW5nLCB0aW1lU3RyaW5nLCBzZWNvbmRTdHJpbmddO1xuLy99XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzZXRVcENTUkZUb2tlbigpIHtcbi8vIFx0dmFyIGNzcmZUb2tlbiA9ICQuY29va2llKCdjc3JmdG9rZW4nKTtcbi8vIFx0JC5hamF4U2V0dXAoe1xuLy8gXHRcdGhlYWRlcnM6IHsgXCJYLUNTUkZUb2tlblwiOiBjc3JmVG9rZW4gfVxuLy8gXHR9KTtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKHJlZHVjZXIsIGhpc3RvcnkpIHtcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFt0aHVuaywgc3luY0hpc3RvcnlXaXRoU3RvcmUoaGlzdG9yeSldO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgbWlkZGxld2FyZXMucHVzaChjcmVhdGVMb2dnZXIoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykoY3JlYXRlU3RvcmUpKHJlZHVjZXIpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYXBwL2xpYi91dGlscy5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUEwQkE7QUFDQTtBQTNCQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFQQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})