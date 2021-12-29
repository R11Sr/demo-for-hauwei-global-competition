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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/Leaflet.Photo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/Leaflet.Photo.js":
/*!***********************************************!*\
  !*** ./app/javascript/packs/Leaflet.Photo.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

L.Photo = L.FeatureGroup.extend({
  options: {
    icon: {
      iconSize: [40, 40]
    }
  },
  initialize: function initialize(photos, options) {
    L.setOptions(this, options);
    L.FeatureGroup.prototype.initialize.call(this, photos);
  },
  addLayers: function addLayers(photos) {
    if (photos) {
      for (var i = 0, len = photos.length; i < len; i++) {
        this.addLayer(photos[i]);
      }
    }

    return this;
  },
  addLayer: function addLayer(photo) {
    L.FeatureGroup.prototype.addLayer.call(this, this.createMarker(photo));
  },
  createMarker: function createMarker(photo) {
    var marker = L.marker(photo, {
      icon: L.divIcon(L.extend({
        html: '<div style="background-image: url(' + photo.thumbnail + ');"></div>​',
        className: 'leaflet-marker-photo'
      }, photo, this.options.icon)),
      title: photo.caption || ''
    });
    marker.photo = photo;
    return marker;
  }
});

L.photo = function (photos, options) {
  return new L.Photo(photos, options);
};

if (L.MarkerClusterGroup) {
  L.Photo.Cluster = L.MarkerClusterGroup.extend({
    options: {
      featureGroup: L.photo,
      maxClusterRadius: 100,
      showCoverageOnHover: false,
      iconCreateFunction: function iconCreateFunction(cluster) {
        return new L.DivIcon(L.extend({
          className: 'leaflet-marker-photo',
          html: '<div style="background-image: url(' + cluster.getAllChildMarkers()[0].photo.thumbnail + ');"></div>​<b>' + cluster.getChildCount() + '</b>'
        }, this.icon));
      },
      icon: {
        iconSize: [40, 40]
      }
    },
    initialize: function initialize(options) {
      options = L.Util.setOptions(this, options);
      L.MarkerClusterGroup.prototype.initialize.call(this);
      this._photos = options.featureGroup(null, options);
    },
    add: function add(photos) {
      this.addLayer(this._photos.addLayers(photos));
      return this;
    },
    clear: function clear() {
      this._photos.clearLayers();

      this.clearLayers();
    }
  });

  L.photo.cluster = function (options) {
    return new L.Photo.Cluster(options);
  };
}

/***/ })

/******/ });
//# sourceMappingURL=Leaflet-cb09b451d6f18cf93b38.js.map