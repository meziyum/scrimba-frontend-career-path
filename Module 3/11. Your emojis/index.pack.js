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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var myEmojis = ["👨‍💻", "⛷", "🍲"];

if (localStorage.getItem('my_emojis')) {
    myEmojis = JSON.parse(localStorage.getItem('my_emojis'));
}

function renderEmojis() {
    var emojiContainer = document.getElementById("emoji-container");
    emojiContainer.innerHTML = "";
    for (var i = 0; i < myEmojis.length; i++) {
        var emoji = document.createElement('span');
        emoji.textContent = myEmojis[i];
        emojiContainer.append(emoji);
    }
    localStorage.setItem('my_emojis', JSON.stringify(myEmojis));
}

renderEmojis();

var pushBtn = document.getElementById("push-btn");
pushBtn.addEventListener("click", function () {
    return add_emoji('end');
});

var unshiftBtn = document.getElementById("unshift-btn");
unshiftBtn.addEventListener("click", function () {
    return add_emoji('start');
});

function add_emoji(position) {
    var emojiInput = document.getElementById("emoji-input");
    if (emojiInput.value) {
        if (position === 'start') myEmojis.unshift(emojiInput.value);else if (position === 'end') myEmojis.push(emojiInput.value);
        emojiInput.value = "";
        renderEmojis();
    }
}

var popBtn = document.getElementById("pop-btn");
popBtn.addEventListener("click", function () {
    return pop_emoji('end');
});

var shiftBtn = document.getElementById("shift-btn");
shiftBtn.addEventListener("click", function () {
    return pop_emoji('start');
});

function pop_emoji(position) {
    if (position === 'start') myEmojis.shift();else if (position === 'end') myEmojis.pop();
    renderEmojis();
}

/***/ })
/******/ ]);