/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("let filters = document.querySelector(\".filters\");\r\nlet filtersItem = document.querySelectorAll(\".filters-item\");\r\nlet filtersDropdownBtn = document.querySelectorAll(\".filters-btn\");\r\nlet filtersDropdown = document.querySelectorAll(\".filters-dropdown\");\r\nlet filtersBtn = document.querySelector(\"#filtersBtn\");\r\nlet itemsBtn = document.querySelector(\"#items-order\");\r\n\r\n[].forEach.call(filtersDropdownBtn, function (but, ind) {\r\n    but.addEventListener('click', () => {\r\n        filtersDropdown[ind].classList.toggle('filters-dropdown-active');\r\n    });\r\n});\r\n\r\nfiltersBtn.addEventListener('click', () => {\r\n    event.preventDefault();\r\n    filters.classList.toggle('filters-active');\r\n    filtersBtn.style.display = \"none\";\r\n    itemsBtn.style.display = \"block\";\r\n})\r\n\r\n\r\n// ageRange\r\nlet ageRange = document.querySelector(\".age-range\");\r\nlet ageValue = document.querySelector(\".age-value\");\r\n\r\nageValue.innerHTML = ageRange.value;\r\nageRange.addEventListener('input', () => {\r\n    ageValue.innerHTML = ageRange.value;\r\n})\r\n\r\n// Images\r\n\r\n// Random\r\nfunction getRandomInt(max) {\r\n    return Math.floor(Math.random() * max);\r\n}\r\nlet collectBtn = document.getElementById(\"collect\");\r\nlet filterImg = document.querySelector(\".filter-img\");\r\ncollectBtn.addEventListener('click', () => {\r\n    filterImg.src = 'img/img2.jpg';\r\n    filters.classList.toggle('filters-active');\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://mygulp/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;