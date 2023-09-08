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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu),\n/* harmony export */   setMenuEvent: () => (/* binding */ setMenuEvent),\n/* harmony export */   styleMenu: () => (/* binding */ styleMenu)\n/* harmony export */ });\nfunction displayMenu() {\n    const thisMenuArr = Array.from(this.childNodes);\n    for (let i = 0; i < thisMenuArr.length; i++) {\n        if (thisMenuArr[i].className === 'more-option') {\n            thisMenuArr[i].style.display = 'flex';\n        }\n    }\n}\n\nfunction hideMenu() {\n    const thisMenuArr = Array.from(this.childNodes);\n    for (let i = 0; i < thisMenuArr.length; i++) {\n        if (thisMenuArr[i].className === 'more-option') {\n            thisMenuArr[i].style.display = 'none';\n        }\n    }\n}\n\nfunction setMenuEvent() {\n    const mobileMenu = document.querySelector('.mobile-menu');\n    const mobileMenuArr = Array.from(mobileMenu.childNodes)\n    for (let i = 0; i < mobileMenuArr.length; i++) {\n        console.log(mobileMenuArr[i]);\n        if (mobileMenuArr[i].id === 'more-menu') {\n            mobileMenuArr[i].addEventListener('mouseover', displayMenu);\n            mobileMenuArr[i].addEventListener('mouseout', hideMenu);\n        }\n    }\n}\n\nfunction createMoreMenu() {\n    const moreMenu = document.querySelector('#more-menu');\n    const moreOptions = [];\n    for (let i = 1; i < 6; i++) {\n        moreOptions[i] = document.createElement('div');\n        moreOptions[i].className = 'more-option';\n        moreOptions[i].innerText = `more ${i}`;\n        moreOptions[i].style.display = 'none';\n        moreMenu.appendChild(moreOptions[i]);\n    }\n    setMenuEvent();\n}\n\nfunction createMenu() {\n    const body = document.querySelector('body');\n    const mobileMenu = document.createElement('div');\n    mobileMenu.className = 'mobile-menu';\n    body.appendChild(mobileMenu);\n    const mobileOptions = [];\n    for (let i = 1; i < 6; i++) {\n        mobileOptions[i] = document.createElement('div');\n        mobileOptions[i].className = 'mobile-menu-option';\n        if (i < 5) {\n            mobileOptions[i].innerText = `option ${i}`;\n        } else {\n            mobileOptions[i].innerText = 'more';\n            mobileOptions[i].id = 'more-menu';\n        }\n        mobileMenu.appendChild(mobileOptions[i]);\n    }\n    createMoreMenu();\n}\n\nfunction styleMenu() {\n    const mobileMenus = document.querySelectorAll('.mobile-menu');\n    for (let i = 0; i < mobileMenus.length; i++) {\n        mobileMenus[i].style.display = 'flex';\n        mobileMenus[i].style.justifyContent = 'space-between';\n        mobileMenus[i].style.whiteSpace = 'nowrap';\n        mobileMenus[i].style.padding = '5px';\n    }\n}\n\ncreateMenu();\nstyleMenu();\n\n\n\n//# sourceURL=webpack://mobile-menu/./src/index.js?");

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