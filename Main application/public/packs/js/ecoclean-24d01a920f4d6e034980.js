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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/ecoclean.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/ecoclean.js":
/*!******************************************!*\
  !*** ./app/javascript/packs/ecoclean.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var map = L.map('map', {
  maxZoom: 14
});
var attribution = '&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
var tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var tiles = L.tileLayer(tileUrl, {
  attribution: attribution
}).addTo(map);
var photoLayer = L.photo.cluster().on('click', function (evt) {
  var photo = evt.layer.photo,
      template = '<img src="{url}" width="300" height="300" /></a><p>{caption}</p>';

  if (photo.video && !!document.createElement('video').canPlayType('video/mp4; codecs=avc1.42E01E,mp4a.40.2')) {
    template = '<video autoplay controls poster="{url}" width="300" height="300"><source src="{video}" type="video/mp4"/></video>';
  }

  ;
  evt.layer.bindPopup(L.Util.template(template, photo), {
    className: 'leaflet-popup-photo',
    minWidth: 300
  }).openPopup();
});
var data = {
  rows: [{
    "lat": 18.1096,
    "lng": -77.2975,
    "thumbnail": "./images/g1.jpg",
    "url": "./images/g1.jpg",
    "video": "",
    "caption": "G1"
  }, {
    "lat": 17.99207,
    "lng": -76.79200,
    "thumbnail": "./images/g2.jpg",
    "url": "./images/g2.jpg",
    "video": "",
    "caption": "g2"
  }, {
    "lat": 18.1076,
    "lng": -76.7879,
    "thumbnail": "./images/g3.jpg",
    "url": "./images/g3.jpg",
    "video": "",
    "caption": "g3"
  }, {
    "lat": 17.997766,
    "lng": -76.9561758,
    "thumbnail": "./images/g4.jpg",
    "url": "./images/g4.jpg",
    "video": "",
    "caption": "g4"
  }, {
    "lat": 18.476578,
    "lng": -77.917703,
    "thumbnail": "./images/g5.jpg",
    "url": "./images/g5.jpg",
    "video": "",
    "caption": "g5"
  }, {
    "lat": 17.971308,
    "lng": -76.793939,
    "thumbnail": "./images/g6.jpg",
    "url": "./images/g6.jpg",
    "video": "",
    "caption": "g6"
  }, {
    "lat": 17.971982,
    "lng": -76.791750,
    "thumbnail": "./images/g7.jpg",
    "url": "./images/g7.jpg",
    "video": "",
    "caption": " g7"
  }, {
    "lat": 18.457955,
    "lng": -77.888759,
    "thumbnail": "./images/g8.jpg",
    "url": "./images/g8.jpg",
    "video": "",
    "caption": "g8"
  }, {
    "lat": 18.471357,
    "lng": -77.907262,
    "thumbnail": "./images/g9.jpg",
    "url": "./images/g9.jpg",
    "video": "",
    "caption": "g9"
  }, {
    "lat": 18.470116,
    "lng": -77.922781,
    "thumbnail": "./images/g10.jpg",
    "url": "./images/g10.jpg",
    "video": "",
    "caption": "g10"
  }]
};
photoLayer.add(data.rows).addTo(map);
map.fitBounds(photoLayer.getBounds());

/***/ })

/******/ });
//# sourceMappingURL=ecoclean-24d01a920f4d6e034980.js.map