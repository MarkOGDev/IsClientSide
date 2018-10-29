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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/isClientSide.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/isClientSide.ts":
/*!*****************************!*\
  !*** ./src/isClientSide.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar IsClientSide =\n/** @class */\nfunction () {\n  function IsClientSide() {}\n  /**\r\n   * Returns True if Window Is available.\r\n   */\n\n\n  IsClientSide.windowAvailable = function () {\n    var windowAvailable = typeof window !== \"undefined\" && window !== null ? true : false;\n    console.log('IsClientSide WindowAvailable()', windowAvailable);\n    return windowAvailable;\n  };\n  /**\r\n   * Returns True if Document is Available.\r\n   */\n\n\n  IsClientSide.documentAvailable = function () {\n    var documentAvailable = typeof document !== \"undefined\" && document !== null ? true : false;\n    console.log('IsClientSide DocumentAvailable()', documentAvailable);\n    return documentAvailable;\n  };\n  /**\r\n   * Returns True if all our client side checks are true.\r\n   * Currently Checks for Window and Document.\r\n   */\n\n\n  IsClientSide.true = function () {\n    return IsClientSide.windowAvailable() && IsClientSide.documentAvailable();\n  };\n  /**\r\n   * Returns True if any of our client side check fail.\r\n   */\n\n\n  IsClientSide.false = function () {\n    return !IsClientSide.true();\n  };\n\n  return IsClientSide;\n}();\n\nexports.IsClientSide = IsClientSide;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNDbGllbnRTaWRlLnRzPzdhZWQiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJJc0NsaWVudFNpZGUiLCJ3aW5kb3dBdmFpbGFibGUiLCJ3aW5kb3ciLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnRBdmFpbGFibGUiLCJkb2N1bWVudCIsInRydWUiLCJmYWxzZSJdLCJtYXBwaW5ncyI6IkFBQWE7O0FBQ2JBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7O0FBQ0EsSUFBSUMsWUFBWTtBQUFHO0FBQWUsWUFBWTtBQUMxQyxXQUFTQSxZQUFULEdBQXdCLENBQ3ZCO0FBQ0Q7Ozs7O0FBR0FBLGNBQVksQ0FBQ0MsZUFBYixHQUErQixZQUFZO0FBQ3ZDLFFBQUlBLGVBQWUsR0FBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxNQUFNLEtBQUssSUFBN0MsR0FBcUQsSUFBckQsR0FBNEQsS0FBbEY7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVosRUFBOENILGVBQTlDO0FBQ0EsV0FBT0EsZUFBUDtBQUNILEdBSkQ7QUFLQTs7Ozs7QUFHQUQsY0FBWSxDQUFDSyxpQkFBYixHQUFpQyxZQUFZO0FBQ3pDLFFBQUlBLGlCQUFpQixHQUFJLE9BQU9DLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUNBLFFBQVEsS0FBSyxJQUFqRCxHQUF5RCxJQUF6RCxHQUFnRSxLQUF4RjtBQUNBSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWixFQUFnREMsaUJBQWhEO0FBQ0EsV0FBT0EsaUJBQVA7QUFDSCxHQUpEO0FBS0E7Ozs7OztBQUlBTCxjQUFZLENBQUNPLElBQWIsR0FBb0IsWUFBWTtBQUM1QixXQUFPUCxZQUFZLENBQUNDLGVBQWIsTUFBa0NELFlBQVksQ0FBQ0ssaUJBQWIsRUFBekM7QUFDSCxHQUZEO0FBR0E7Ozs7O0FBR0FMLGNBQVksQ0FBQ1EsS0FBYixHQUFxQixZQUFZO0FBQzdCLFdBQVEsQ0FBQ1IsWUFBWSxDQUFDTyxJQUFiLEVBQVQ7QUFDSCxHQUZEOztBQUdBLFNBQU9QLFlBQVA7QUFDSCxDQWpDaUMsRUFBbEM7O0FBa0NBRixPQUFPLENBQUNFLFlBQVIsR0FBdUJBLFlBQXZCIiwiZmlsZSI6Ii4vc3JjL2lzQ2xpZW50U2lkZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBJc0NsaWVudFNpZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJc0NsaWVudFNpZGUoKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgVHJ1ZSBpZiBXaW5kb3cgSXMgYXZhaWxhYmxlLlxyXG4gICAgICovXHJcbiAgICBJc0NsaWVudFNpZGUud2luZG93QXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB3aW5kb3dBdmFpbGFibGUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cgIT09IG51bGwpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJc0NsaWVudFNpZGUgV2luZG93QXZhaWxhYmxlKCknLCB3aW5kb3dBdmFpbGFibGUpO1xyXG4gICAgICAgIHJldHVybiB3aW5kb3dBdmFpbGFibGU7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIFRydWUgaWYgRG9jdW1lbnQgaXMgQXZhaWxhYmxlLlxyXG4gICAgICovXHJcbiAgICBJc0NsaWVudFNpZGUuZG9jdW1lbnRBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRvY3VtZW50QXZhaWxhYmxlID0gKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudCAhPT0gbnVsbCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0lzQ2xpZW50U2lkZSBEb2N1bWVudEF2YWlsYWJsZSgpJywgZG9jdW1lbnRBdmFpbGFibGUpO1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudEF2YWlsYWJsZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgVHJ1ZSBpZiBhbGwgb3VyIGNsaWVudCBzaWRlIGNoZWNrcyBhcmUgdHJ1ZS5cclxuICAgICAqIEN1cnJlbnRseSBDaGVja3MgZm9yIFdpbmRvdyBhbmQgRG9jdW1lbnQuXHJcbiAgICAgKi9cclxuICAgIElzQ2xpZW50U2lkZS50cnVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBJc0NsaWVudFNpZGUud2luZG93QXZhaWxhYmxlKCkgJiYgSXNDbGllbnRTaWRlLmRvY3VtZW50QXZhaWxhYmxlKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIFRydWUgaWYgYW55IG9mIG91ciBjbGllbnQgc2lkZSBjaGVjayBmYWlsLlxyXG4gICAgICovXHJcbiAgICBJc0NsaWVudFNpZGUuZmFsc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICghSXNDbGllbnRTaWRlLnRydWUoKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIElzQ2xpZW50U2lkZTtcclxufSgpKTtcclxuZXhwb3J0cy5Jc0NsaWVudFNpZGUgPSBJc0NsaWVudFNpZGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/isClientSide.ts\n");

/***/ })

/******/ });
});