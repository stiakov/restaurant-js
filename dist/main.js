/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_dom_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dom_manager */ \"./src/js/dom_manager.js\");\n\n\nnew _js_dom_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/dom_manager.js":
/*!*******************************!*\
  !*** ./src/js/dom_manager.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _env_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env_var */ \"./src/js/env_var.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n\n\n\nconst menuGen = _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nconst env = _env_var__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nclass Display {\n  constructor() {\n    this.setNavbar();\n    this.addContainer();\n  }\n\n  getBody() {\n    return document.getElementsByTagName('body')[0];\n  }\n\n  cleanTabContainer() {\n    const tabContent = document.getElementById('tabContainer');\n    while (tabContent.hasChildNodes()) {\n      tabContent.removeChild(tabContent.lastChild);\n    }\n  }\n\n  setNavbar() {\n    const nav = [];\n    let parent;\n\n    const elemCollection = [\n      {\n        element: 'nav',\n        id: 'main-nav',\n        class: 'navbar is-light',\n      },\n      {\n        element: 'div',\n        class: 'navbar-brand',\n      },\n      {\n        element: 'a',\n        class: 'navbar-item',\n      },\n      {\n        element: 'img',\n        id: 'nav-img',\n        attributes: { src: env.logoSrc },\n      },\n    ];\n\n    elemCollection.forEach((item, idx) => {\n      const temp = document.createElement(item.element);\n      parent = (idx === 0) ? this.getBody() : parent;\n      parent.appendChild(temp);\n      if (item.class) temp.className = item.class;\n      if (item.id) temp.id = item.id;\n      if (item.attributes) {\n        Object.keys(item.attributes).forEach((attr) => {\n          temp.setAttribute(attr, item.attributes[attr]);\n        });\n      }\n      parent = temp;\n    });\n\n    this.createTabs();\n    return nav;\n  }\n\n  addContainer() {\n    const cont = document.createElement('div');\n    Object.assign(cont, { id: 'main-container' }, { className: 'container' });\n    const tabContainer = Object.assign(document.createElement('div'), { id: 'tabContainer' });\n    cont.appendChild(tabContainer);\n    this.getBody().appendChild(cont);\n  }\n\n  createTabs() {\n    const nav = document.getElementById('main-nav');\n    const tabs = [\n      {\n        name: 'Home',\n        event: () => console.log('From Home'),\n      },\n      {\n        name: 'Menu',\n        event: () => menuGen.generateMenuContainer(),\n      },\n      {\n        name: 'Place',\n        event: () => console.log('From Menu'),\n      },\n      {\n        name: 'Contact',\n        event: () => console.log('From Contact'),\n      },\n    ];\n    const menu = Object.assign(document.createElement('div'), { className: 'navbar-menu' });\n    const start = Object.assign(document.createElement('div'), { className: 'navbar-start' });\n\n    tabs.forEach((tab) => {\n      const temp = document.createElement('a');\n      Object.assign(temp, { className: 'navbar-item' }, { textContent: tab.name });\n      temp.addEventListener('click', () => {\n        this.cleanTabContainer();\n        tab.event();\n      });\n      start.appendChild(temp);\n    });\n\n    menu.appendChild(start);\n    nav.appendChild(menu);\n    return menu;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Display);\n\n//# sourceURL=webpack:///./src/js/dom_manager.js?");

/***/ }),

/***/ "./src/js/env_var.js":
/*!***************************!*\
  !*** ./src/js/env_var.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst environmentVars = {\n  logoSrc: '../src/img/logo.png',\n  menu: {\n    mainImgSrc: '../src/img/slices/sobhan-joodi.jpg',\n    elements: [\n      {\n        element: 'div',\n        class: 'tile is-ancestor',\n      },\n      {\n        element: 'div',\n        id: 'left',\n        class: 'tile is-8 is-vertical',\n      },\n      {\n        element: 'div',\n        id: 'right',\n        class: 'tile is-4 is-vertical',\n      },\n    ],\n    products: [\n      {\n        name: 'Kandinsky Insights',\n        description: 'A plentiful dish with colorful and selected vegetables from the Siberian lands.',\n        img_path: '../src/img/slices/abigail-keenan.png',\n        price: '$12.00',\n      },\n      {\n        name: 'Hanging Out With Michelangelo',\n        description: 'Oil marinated ribs cooked with temper.',\n        img_path: '../src/img/slices/alex-munsell.png',\n        price: '$32.00',\n      },\n      {\n        name: 'Georges Seurat Is Whispering',\n        description: 'Green salad inspired in the great British landscapes.',\n        img_path: '../src/img/slices/brooke-lark.png',\n        price: '$19.00',\n      },\n      {\n        name: 'Mies van der Rohe Sketches',\n        description: 'Salmon and vegetables perfectly aligned over soy oil.',\n        img_path: '../src/img/slices/casey-lee.png',\n        price: '$33.00',\n      },\n      {\n        name: 'Boticelli\\'s Selection',\n        description: 'Bacon bits and olive oil with a special salad.',\n        img_path: '../src/img/slices/katarzyna-pracuch.png',\n        price: '$14.00',\n      },\n      {\n        name: 'Joan Miro\\'s Thirst Quencher',\n        description: 'Exotic fruits becoming marvelous nectars.',\n        img_path: '../src/img/slices/brooke-lark-juices.png',\n        price: '$9.00',\n      },\n    ],\n  },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (environmentVars);\n\n\n//# sourceURL=webpack:///./src/js/env_var.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _env_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env_var */ \"./src/js/env_var.js\");\n\n\nconst env = _env_var__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nconst aux = {\n  getTabContainer: () => document.getElementById('tabContainer'),\n\n  createAndAssign: (parent, data) => {\n    const temp = Object.assign(document.createElement(data[0]));\n    Object.assign(temp, { className: data[1] }, { textContent: data[2] });\n    parent.appendChild(temp);\n    return temp;\n  },\n\n  appendImgMarkup: (parent, id) => {\n    if (id === 'right') {\n      const card = Object.assign(document.createElement('div'), { className: 'card-image' });\n      const figure = Object.assign(document.createElement('figure'), { className: 'image is-3by4' });\n      const img = Object.assign(document.createElement('img'), { src: env.menu.mainImgSrc }, { id: 'img_container' });\n      figure.appendChild(img);\n      card.appendChild(figure);\n      parent.appendChild(card);\n    }\n  },\n\n  attachImgEvent: (parent, event, src) => {\n    const imgContainer = document.getElementById('img_container');\n    parent.addEventListener(event, () => Object.assign(imgContainer, { src: src }));\n  },\n};\n\nconst menu = {\n  populateMenu: () => {\n    const left = document.getElementById('left');\n    env.menu.products.forEach((product) => {\n      const cell = document.createElement('div');\n      Object.assign(cell, { className: 'tile is-vertical card' });\n      Object.keys(product).forEach((key) => {\n        switch (key) {\n          case 'name':\n            aux.createAndAssign(cell, ['p', 'title', product.name]);\n            break;\n          case 'description':\n            aux.createAndAssign(cell, ['p', 'subtitle', product.description]);\n            break;\n          case 'price':\n            aux.createAndAssign(cell, ['p', 'content', product.price]);\n            break;\n          default:\n            break;\n        }\n      });\n      aux.attachImgEvent(cell, 'mouseover', product.img_path);\n      aux.attachImgEvent(cell, 'mouseout', env.menu.mainImgSrc);\n      left.appendChild(cell);\n    });\n  },\n\n  generateMenuContainer: () => {\n    const tabContainer = aux.getTabContainer();\n    let parent;\n    env.menu.elements.forEach((item, idx) => {\n      const temp = Object.assign(document.createElement(item.element), { className: item.class });\n      if (item.id) {\n        const container = Object.assign(temp, { id: item.id });\n        aux.appendImgMarkup(container, item.id);\n      }\n      if (idx === 0) parent = temp;\n      if (idx > 0) parent.appendChild(temp);\n\n      tabContainer.appendChild(parent);\n    });\n    menu.populateMenu();\n    return tabContainer;\n  },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n\n//# sourceURL=webpack:///./src/js/menu.js?");

/***/ })

/******/ });