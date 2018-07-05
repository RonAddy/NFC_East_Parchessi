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

/***/ "./src/boardPieces.js":
/*!****************************!*\
  !*** ./src/boardPieces.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst board = {\n     output : document.getElementById('dice-Output'),\n     dice : document.getElementById('dice'),\n     landingSquare : document.getElementById('b1'),\n    \n    // Eagles ludo pieces\n     eagle_1 : document.getElementById(\"eagle_1\"),\n     eagle_2 : document.getElementById(\"eagle_2\"),\n     eagle_3 : document.getElementById(\"eagle_3\"),\n     eagle_4 : document.getElementById(\"eagle_4\"),\n    \n    // Sideline\n     eagle_sideline : document.getElementById(\"eagles\"),\n    \n    //Redskins ludo pieces\n     cousins : document.getElementById('redskin_1'),\n     pryor : document.getElementById(\"redskin_2\"),\n     norman : document.getElementById(\"redskin_3\"),\n     kerrigan : document.getElementById(\" redskin_4\"),\n    \n    \n     dak : document.getElementById(\"cowboy_1\"),\n     eli : document.getElementById(\"giants_1\"),\n     redskins_square : document.getElementById(\"b12\"),\n     giants_square : document.getElementById(\"b24\"),\n     cowboys_square : document.getElementById(\"b35\")\n\n} \n\n/* harmony default export */ __webpack_exports__[\"default\"] = (board);\n\n//# sourceURL=webpack:///./src/boardPieces.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _teams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teams.js */ \"./src/teams.js\");\n\n\nconsole.log(_teams_js__WEBPACK_IMPORTED_MODULE_0__[\"eagles\"].players[0].piece);\n\n\n/*---------------------Game Logic Below------------------------------\n\n*-------------------------------------------------------------------*/\nfunction welcome() {\n    alert(\"Welcome to NFC East Parchessi! Your mission is to take the Eagles to the Promise Land...THE SUPER BOWL. But first! We must get through the NFC East. Are you ready? Roll the dice to begin !\");\n\n}\n\nwelcome();\n\n/*---------------------Dice Logic Below------------------------------\n//diceRoll function contains the main logic for the dice roll\n//Roll will represent a random number between 1 and 6\n//The ouput will be placed inside of a div above the dice\n//If user rolls a 6, they will play and be able to roll again\n//If user rolls 4 sixes in a row, they will lose their turn\n*-------------------------------------------------------------------*/\n// redskins_square.appendChild(cousins);\n// giants_square.appendChild(eli);\n// cowboys_square.appendChild(dak);\n// const squareOne = function(){\n//                      landingSquare.appendChild(this);\n//                      //remove ability to click mutliple pieces on six roll\n//                   }\n\n// const move = function () {\n//                 wentz.addEventListener(\"click\", reposition)\n//                 alshon.addEventListener(\"click\", reposition)\n//                 jenkins.addEventListener(\"click\", reposition)\n//                 kendricks.addEventListener(\"click\", reposition)\n//              }\n\n// const reposition = function() {\n//                      let count = localStorage.getItem(\"currentRoll\");\n//                      let currSpot = `b`;\n//                      let nextSpot = parseInt(this.parentNode.id.slice(1)) + parseInt(count);\n\n//                      let newSpot = currSpot + nextSpot;\n//                      document.getElementById(`${newSpot}`).appendChild(this);\n//                    }\n        \n\n// const diceRoll = function() {\n//     const roll = Math.ceil(Math.random()*  6);\n\n//     dice.style.animation = `spin .5s linear`;\n//     output.innerHTML = roll;\n    \n//     if (roll === 6) {\n//         setTimeout(function () {alert(\"You rolled a SIX! You can move a player onto the board\")}, 200);\n\n//         wentz.addEventListener(\"click\", squareOne)\n//         alshon.addEventListener(\"click\", squareOne)\n//         jenkins.addEventListener(\"click\", squareOne)\n//         kendricks.addEventListener(\"click\", squareOne)\n//         move;\n        \n//     }else if( roll !== 6 && wentz.parentNode === eagle_sideline && alshon.parentNode === eagle_sideline && jenkins.parentNode === eagle_sideline && jenkins.parentNode === eagle_sideline) {\n//         setTimeout(function() {alert(\"Computer's turn!\")}, 400);\n//         moveRedskin(); \n//         moveCowboy();\n//         moveGiant();\n//     }\n    \n    \n//     //bellow line used to reset animation so that it runs every click\n//     setTimeout(function() {dice.style.animation = null}, 1000);\n//     localStorage.setItem(\"currentRoll\", roll)\n//     move;\n// }\n\n// //EventListener added to div with dice\n// document.getElementById('dice').addEventListener(\"click\", diceRoll);\n\n\n// function moveRedskin() {\n//     setInterval(function(){\n//         const roll = Math.ceil(Math.random() *  3);\n//         localStorage.setItem(\"compRoll\", roll);\n        \n        \n//         let currSpot = `b`;\n//         let nextSpot = parseInt(cousins.parentNode.id.slice(1)) + parseInt(roll);\n        \n\n//         let newSpot = currSpot + nextSpot;\n//         document.getElementById(`${newSpot}`).appendChild(cousins);\n        \n//     }, 5000);\n// }\n\n// function moveGiant() {\n//     setInterval(function(){\n//         const roll = Math.ceil(Math.random() *  2);\n//         localStorage.setItem(\"compRoll\", roll);\n        \n        \n//         let currSpot = `b`;\n//         let nextSpot = parseInt(cousins.parentNode.id.slice(1)) + parseInt(roll);\n        \n\n//         let newSpot = currSpot + nextSpot;\n//         document.getElementById(`${newSpot}`).appendChild(eli);\n        \n//     },3000);\n// }\n\n// function moveCowboy() {\n//     setInterval(function(){\n//         const roll = Math.ceil(Math.random() *  3);\n//         localStorage.setItem(\"compRoll\", roll);\n        \n        \n//         let currSpot = `b`;\n//         let nextSpot = parseInt(cousins.parentNode.id.slice(1)) + parseInt(roll);\n        \n\n//         let newSpot = currSpot + nextSpot;\n//         document.getElementById(`${newSpot}`).appendChild(dak);\n        \n//     }, 5000);\n// }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/teams.js":
/*!**********************!*\
  !*** ./src/teams.js ***!
  \**********************/
/*! exports provided: eagles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eagles\", function() { return eagles; });\n/* harmony import */ var _boardPieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardPieces */ \"./src/boardPieces.js\");\n\n\nconst eagles = {\n    players: [\n    {\n        name: \"Wentz\",\n        piece: _boardPieces__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eagle_1\n    },\n    {name: \"Alshon\",\n      piece: _boardPieces__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eagle_2 \n    },\n    {name: \"Jenkins\",\n      piece: _boardPieces__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eagle_3\n    },\n    {name: \"Kendricks\",\n      piece: _boardPieces__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eagle_4\n    }],\n    \n}\n\n// const redskins = {\n//     players: [\n//     {\n//         name: \"Cousins\",\n//         piece: eagle_1\n//     },\n//     {name: \"Pryor\",\n//       piece: eagle_2 \n//     },\n//     {name: \"Norman\",\n//       piece: board.\n//     },\n//     {name: \"Kerrigan\",\n//       piece: eagle_4\n//     }],\n    \n// }\n\n// const redskins = {\n//     player1: \"Cousins\",\n//     player2: \"Pryor\",\n//     player3: \"Norman\",\n//     player4: \"Kerrigan\"\n// }\n\n// const giants = {\n//     player1: \"Manning\",\n//     player2: \"Beckham Jr.\",\n//     player3: \"Pierre-Paul\",\n//     player4: \"Rodgers-Cromartie\"\n// }\n\n// const cowboys = { \n//     player1: \"Prescott\",\n//     player2: \"Elliot\",\n//     player3: \"Smith\",\n//     player4: \"Scandrick\"\n// }\n\n\n\n\n    \n\n//# sourceURL=webpack:///./src/teams.js?");

/***/ })

/******/ });