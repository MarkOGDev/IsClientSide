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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar isClientSide_1 = __webpack_require__(/*! ./src/isClientSide */ \"./src/isClientSide.ts\");\n\nexports.IsClientSide = isClientSide_1.IsClientSide;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cz9hOTU5Il0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiaXNDbGllbnRTaWRlXzEiLCJyZXF1aXJlIiwiSXNDbGllbnRTaWRlIl0sIm1hcHBpbmdzIjoiQUFBYTs7QUFDYkEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFQyxPQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQSxJQUFJQyxjQUFjLEdBQUdDLG1CQUFPLENBQUMsaURBQUQsQ0FBNUI7O0FBQ0FILE9BQU8sQ0FBQ0ksWUFBUixHQUF1QkYsY0FBYyxDQUFDRSxZQUF0QyIsImZpbGUiOiIuL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGlzQ2xpZW50U2lkZV8xID0gcmVxdWlyZShcIi4vc3JjL2lzQ2xpZW50U2lkZVwiKTtcclxuZXhwb3J0cy5Jc0NsaWVudFNpZGUgPSBpc0NsaWVudFNpZGVfMS5Jc0NsaWVudFNpZGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.ts\n");

/***/ }),

/***/ "./src/isClientSide.ts":
/*!*****************************!*\
  !*** ./src/isClientSide.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar IsClientSide =\n/** @class */\nfunction () {\n  function IsClientSide() {}\n  /**\r\n   * Returns True if Window Is available\r\n   */\n\n\n  IsClientSide.windowAvailable = function () {\n    var windowAvailable = typeof window !== \"undefined\" && window !== null ? true : false;\n    console.log('IsClientSide WindowAvailable()', windowAvailable);\n    return windowAvailable;\n  };\n  /**\r\n   * Returns True if Document is Available\r\n   */\n\n\n  IsClientSide.documentAvailable = function () {\n    var documentAvailable = typeof document !== \"undefined\" && document !== null ? true : false;\n    console.log('IsClientSide DocumentAvailable()', documentAvailable);\n    return documentAvailable;\n  };\n  /**\r\n   * Returns True if all our client side checks are true.\r\n   * Currently Checks for Window and Document.\r\n   */\n\n\n  IsClientSide.true = function () {\n    return IsClientSide.windowAvailable() && IsClientSide.documentAvailable();\n  };\n  /**\r\n   * Returns True if any of our client side check fail.\r\n   */\n\n\n  IsClientSide.false = function () {\n    return !IsClientSide.true();\n  };\n\n  return IsClientSide;\n}();\n\nexports.IsClientSide = IsClientSide;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNDbGllbnRTaWRlLnRzPzdhZWQiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJJc0NsaWVudFNpZGUiLCJ3aW5kb3dBdmFpbGFibGUiLCJ3aW5kb3ciLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnRBdmFpbGFibGUiLCJkb2N1bWVudCIsInRydWUiLCJmYWxzZSJdLCJtYXBwaW5ncyI6IkFBQWE7O0FBQ2JBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7O0FBQ0EsSUFBSUMsWUFBWTtBQUFHO0FBQWUsWUFBWTtBQUMxQyxXQUFTQSxZQUFULEdBQXdCLENBQ3ZCO0FBQ0Q7Ozs7O0FBR0FBLGNBQVksQ0FBQ0MsZUFBYixHQUErQixZQUFZO0FBQ3ZDLFFBQUlBLGVBQWUsR0FBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxNQUFNLEtBQUssSUFBN0MsR0FBcUQsSUFBckQsR0FBNEQsS0FBbEY7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVosRUFBOENILGVBQTlDO0FBQ0EsV0FBT0EsZUFBUDtBQUNILEdBSkQ7QUFLQTs7Ozs7QUFHQUQsY0FBWSxDQUFDSyxpQkFBYixHQUFpQyxZQUFZO0FBQ3pDLFFBQUlBLGlCQUFpQixHQUFJLE9BQU9DLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUNBLFFBQVEsS0FBSyxJQUFqRCxHQUF5RCxJQUF6RCxHQUFnRSxLQUF4RjtBQUNBSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWixFQUFnREMsaUJBQWhEO0FBQ0EsV0FBT0EsaUJBQVA7QUFDSCxHQUpEO0FBS0E7Ozs7OztBQUlBTCxjQUFZLENBQUNPLElBQWIsR0FBb0IsWUFBWTtBQUM1QixXQUFPUCxZQUFZLENBQUNDLGVBQWIsTUFBa0NELFlBQVksQ0FBQ0ssaUJBQWIsRUFBekM7QUFDSCxHQUZEO0FBR0E7Ozs7O0FBR0FMLGNBQVksQ0FBQ1EsS0FBYixHQUFxQixZQUFZO0FBQzdCLFdBQVEsQ0FBQ1IsWUFBWSxDQUFDTyxJQUFiLEVBQVQ7QUFDSCxHQUZEOztBQUdBLFNBQU9QLFlBQVA7QUFDSCxDQWpDaUMsRUFBbEM7O0FBa0NBRixPQUFPLENBQUNFLFlBQVIsR0FBdUJBLFlBQXZCIiwiZmlsZSI6Ii4vc3JjL2lzQ2xpZW50U2lkZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBJc0NsaWVudFNpZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJc0NsaWVudFNpZGUoKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgVHJ1ZSBpZiBXaW5kb3cgSXMgYXZhaWxhYmxlXHJcbiAgICAgKi9cclxuICAgIElzQ2xpZW50U2lkZS53aW5kb3dBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHdpbmRvd0F2YWlsYWJsZSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdyAhPT0gbnVsbCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0lzQ2xpZW50U2lkZSBXaW5kb3dBdmFpbGFibGUoKScsIHdpbmRvd0F2YWlsYWJsZSk7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvd0F2YWlsYWJsZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgVHJ1ZSBpZiBEb2N1bWVudCBpcyBBdmFpbGFibGVcclxuICAgICAqL1xyXG4gICAgSXNDbGllbnRTaWRlLmRvY3VtZW50QXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkb2N1bWVudEF2YWlsYWJsZSA9ICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQgIT09IG51bGwpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJc0NsaWVudFNpZGUgRG9jdW1lbnRBdmFpbGFibGUoKScsIGRvY3VtZW50QXZhaWxhYmxlKTtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnRBdmFpbGFibGU7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIFRydWUgaWYgYWxsIG91ciBjbGllbnQgc2lkZSBjaGVja3MgYXJlIHRydWUuXHJcbiAgICAgKiBDdXJyZW50bHkgQ2hlY2tzIGZvciBXaW5kb3cgYW5kIERvY3VtZW50LlxyXG4gICAgICovXHJcbiAgICBJc0NsaWVudFNpZGUudHJ1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gSXNDbGllbnRTaWRlLndpbmRvd0F2YWlsYWJsZSgpICYmIElzQ2xpZW50U2lkZS5kb2N1bWVudEF2YWlsYWJsZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBUcnVlIGlmIGFueSBvZiBvdXIgY2xpZW50IHNpZGUgY2hlY2sgZmFpbC5cclxuICAgICAqL1xyXG4gICAgSXNDbGllbnRTaWRlLmZhbHNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoIUlzQ2xpZW50U2lkZS50cnVlKCkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBJc0NsaWVudFNpZGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuSXNDbGllbnRTaWRlID0gSXNDbGllbnRTaWRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/isClientSide.ts\n");

/***/ })

/******/ });
});