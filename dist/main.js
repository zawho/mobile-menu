/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu),\n/* harmony export */   setMenuEvent: () => (/* binding */ setMenuEvent),\n/* harmony export */   styleMenu: () => (/* binding */ styleMenu)\n/* harmony export */ });\nfunction displayMenu() {\n    const thisMenuArr = Array.from(this.childNodes);\n    for (let i = 0; i < thisMenuArr.length; i++) {\n        if (thisMenuArr[i].className === 'dropdown-option') {\n            thisMenuArr[i].style.display = 'flex';\n        }\n    }\n}\n\nfunction hideMenu() {\n    const thisMenuArr = Array.from(this.childNodes);\n    for (let i = 0; i < thisMenuArr.length; i++) {\n        if (thisMenuArr[i].className === 'dropdown-option') {\n            thisMenuArr[i].style.display = 'none';\n        }\n    }\n}\n\nfunction setMenuEvent() {\n    const body = document.querySelector('body');\n    const bodyArr = Array.from(body.childNodes);\n    for (let i = 0; i < bodyArr.length; i++) {\n        if (bodyArr[i].className === 'dropdown-menu') {\n            bodyArr[i].addEventListener('mouseover', displayMenu);\n            bodyArr[i].addEventListener('mouseout', hideMenu);\n        }\n    }\n}\n\nfunction createMenu() {\n    const body = document.querySelector('body');\n    const mobileMenu = document.createElement('div');\n    mobileMenu.className = 'mobile-menu';\n    body.appendChild(mobileMenu);\n    const mobileOptions = [];\n    for (let i = 1; i < 6; i++) {\n        mobileOptions[i] = document.createElement('div');\n        mobileOptions[i].className = 'mobile-menu-option';\n        if (i < 5) {\n            mobileOptions[i].innerText = `option ${i}`;\n        } else if (i === 5) {\n            mobileOptions[i].innerText = 'more';\n        }\n        mobileMenu.appendChild(mobileOptions[i]);\n    }\n    // setMenuEvent();\n}\n\nfunction styleMenu() {\n    const dropDownMenus = document.querySelectorAll('.dropdown-menu');\n    const dropDownOptions = document.querySelectorAll('.dropdown-option');\n    for (let i = 0; i < dropDownMenus.length; i++) {\n        dropDownMenus[i].style.textAlign = 'center';\n        dropDownMenus[i].style.display = 'flex';\n        dropDownMenus[i].style.flexDirection = 'column';\n        dropDownMenus[i].style.border = '1px solid black';\n        dropDownMenus[i].style.maxWidth = '200px';\n        dropDownMenus[i].style.gap = '5px';\n        dropDownMenus[i].style.padding = \"5px 0px\";\n    }\n    for (let i = 0; i < dropDownOptions.length; i++) {\n        dropDownOptions[i].style.display = 'none';\n        dropDownOptions[i].style.borderTop = '1px solid black';\n        dropDownOptions[i].style.paddingTop = '5px';\n        dropDownOptions[i].style.justifyContent = 'center';\n        dropDownOptions[i].style.alignItems = 'center';\n    }\n}\n\ncreateMenu();\n\n\n\n//# sourceURL=webpack://mobile-menu/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;