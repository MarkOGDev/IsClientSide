(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar isClientSide_1 = __webpack_require__(/*! ./src/isClientSide */ \"./src/isClientSide.ts\");\nexports.IsClientSide = isClientSide_1.IsClientSide;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cz9hOTU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFrRDtBQUl6Qyx1QkFKQSxlQUlZIiwiZmlsZSI6Ii4vaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0NsaWVudFNpZGUgfSBmcm9tICcuL3NyYy9pc0NsaWVudFNpZGUnO1xyXG5cclxuICBcclxuXHJcbmV4cG9ydCB7IElzQ2xpZW50U2lkZSB9ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.ts\n");

/***/ }),

/***/ "./src/isClientSide.ts":
/*!*****************************!*\
  !*** ./src/isClientSide.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar IsClientSide = /** @class */function () {\n    function IsClientSide() {}\n    /**\r\n     * Returns True if Window Is available\r\n     */\n    IsClientSide.windowAvailable = function () {\n        var windowAvailable = typeof window !== \"undefined\" && window !== null ? true : false;\n        console.log('IsClientSide WindowAvailable()', windowAvailable);\n        return windowAvailable;\n    };\n    /**\r\n     * Returns True if Document is Available\r\n     */\n    IsClientSide.documentAvailable = function () {\n        var documentAvailable = typeof document !== \"undefined\" && document !== null ? true : false;\n        console.log('IsClientSide DocumentAvailable()', documentAvailable);\n        return documentAvailable;\n    };\n    /**\r\n     * Returns True if all our client side checks are true.\r\n     * Currently Checks for Window and Document.\r\n     */\n    IsClientSide.true = function () {\n        return IsClientSide.windowAvailable() && IsClientSide.documentAvailable();\n    };\n    /**\r\n     * Returns True if any of our client side check fail.\r\n     */\n    IsClientSide.false = function () {\n        return !IsClientSide.true();\n    };\n    return IsClientSide;\n}();\nexports.IsClientSide = IsClientSide;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNDbGllbnRTaWRlLnRzPzdhZWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7QUFBQSw0QkFzQ0EsQ0FBQztBQWpDTTs7O0FBQ0ksaUJBQWUsa0JBQXRCO0FBQ0ksWUFBcUIsa0JBQUksT0FBYSxXQUFnQixlQUFVLFdBQVksSUFBcEQsR0FBMkQsT0FBTztBQUNuRixnQkFBSSxJQUFpQyxrQ0FBbUI7QUFDekQsZUFDVjtBQUFDO0FBS0U7OztBQUNJLGlCQUFpQixvQkFBeEI7QUFDSSxZQUF1QixvQkFBSSxPQUFlLGFBQWdCLGVBQVksYUFBWSxJQUF4RCxHQUErRCxPQUFPO0FBQ3pGLGdCQUFJLElBQW1DLG9DQUFxQjtBQUM3RCxlQUVWO0FBQUM7QUFLRTs7OztBQUNJLGlCQUFJLE9BQVg7QUFDVSxlQUFhLGFBQWtCLHFCQUFnQixhQUN6RDtBQUFDO0FBSUU7OztBQUNJLGlCQUFLLFFBQVo7QUFDVyxlQUFDLENBQWEsYUFDekI7QUFBQztBQUVMLFdBQUM7QUFBQTtBQUdRLHVCQUFZIiwiZmlsZSI6Ii4vc3JjL2lzQ2xpZW50U2lkZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcclxuXHJcbmNsYXNzIElzQ2xpZW50U2lkZSB7IFxyXG4gICAgICBcclxuICAgICBcclxuICAgIC8qKiBcclxuICAgICAqIFJldHVybnMgVHJ1ZSBpZiBXaW5kb3cgSXMgYXZhaWxhYmxlIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgd2luZG93QXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHdpbmRvd0F2YWlsYWJsZSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdyAhPT0gbnVsbCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0lzQ2xpZW50U2lkZSBXaW5kb3dBdmFpbGFibGUoKScsIHdpbmRvd0F2YWlsYWJsZSk7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvd0F2YWlsYWJsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIFRydWUgaWYgRG9jdW1lbnQgaXMgQXZhaWxhYmxlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkb2N1bWVudEF2YWlsYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBkb2N1bWVudEF2YWlsYWJsZSA9ICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQgIT09IG51bGwpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJc0NsaWVudFNpZGUgRG9jdW1lbnRBdmFpbGFibGUoKScsIGRvY3VtZW50QXZhaWxhYmxlKTtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnRBdmFpbGFibGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBUcnVlIGlmIGFsbCBvdXIgY2xpZW50IHNpZGUgY2hlY2tzIGFyZSB0cnVlLlxyXG4gICAgICogQ3VycmVudGx5IENoZWNrcyBmb3IgV2luZG93IGFuZCBEb2N1bWVudC4gXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB0cnVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBJc0NsaWVudFNpZGUud2luZG93QXZhaWxhYmxlKCkgJiYgSXNDbGllbnRTaWRlLmRvY3VtZW50QXZhaWxhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIFRydWUgaWYgYW55IG9mIG91ciBjbGllbnQgc2lkZSBjaGVjayBmYWlsLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZmFsc2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICghSXNDbGllbnRTaWRlLnRydWUoKSk7XHJcbiAgICB9XHJcblxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCB7IElzQ2xpZW50U2lkZSB9ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/isClientSide.ts\n");

/***/ })

/******/ });
});