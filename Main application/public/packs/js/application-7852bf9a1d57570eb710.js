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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/Leaflet.Photo.js":
/*!*****************************************!*\
  !*** ./app/javascript/Leaflet.Photo.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onload = function (event) {
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
};

/***/ }),

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/ecoclean.js":
/*!************************************!*\
  !*** ./app/javascript/ecoclean.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onload = function (event) {
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
      "thumbnail": "/assets/images/proto/g1.jpg",
      "url": "/assets/images/proto/g1.jpg",
      "video": "",
      "caption": "G1"
    }, {
      "lat": 17.99207,
      "lng": -76.79200,
      "thumbnail": "/assets/images/proto/g2.jpg",
      "url": "/assets/images/proto/g2.jpg",
      "video": "",
      "caption": "g2"
    }, {
      "lat": 18.1076,
      "lng": -76.7879,
      "thumbnail": "/assets/images/proto/g3.jpg",
      "url": "/assets/images/proto/g3.jpg",
      "video": "",
      "caption": "g3"
    }, {
      "lat": 17.997766,
      "lng": -76.9561758,
      "thumbnail": "/assets/images/proto/g4.jpg",
      "url": "/assets/images/proto/g4.jpg",
      "video": "",
      "caption": "g4"
    }, {
      "lat": 18.476578,
      "lng": -77.917703,
      "thumbnail": "/assets/images/proto/g5.jpg",
      "url": "/assets/images/proto/g5.jpg",
      "video": "",
      "caption": "g5"
    }, {
      "lat": 17.971308,
      "lng": -76.793939,
      "thumbnail": "/assets/images/proto/g6.jpg",
      "url": "/assets/images/proto/g6.jpg",
      "video": "",
      "caption": "g6"
    }, {
      "lat": 17.971982,
      "lng": -76.791750,
      "thumbnail": "/assets/images/proto/g7.jpg",
      "url": "/assets/images/proto/g7.jpg",
      "video": "",
      "caption": " g7"
    }, {
      "lat": 18.457955,
      "lng": -77.888759,
      "thumbnail": "/assets/images/proto/g8.jpg",
      "url": "/assets/images/proto/g8.jpg",
      "video": "",
      "caption": "g8"
    }, {
      "lat": 18.471357,
      "lng": -77.907262,
      "thumbnail": "/assets/images/proto/g9.jpg",
      "url": "/assets/images/proto/g9.jpg",
      "video": "",
      "caption": "g9"
    }, {
      "lat": 18.470116,
      "lng": -77.922781,
      "thumbnail": "/assets/images/proto/g10.jpg",
      "url": "/assets/images/proto/g10.jpg",
      "video": "",
      "caption": "g10"
    }]
  };
  photoLayer.add(data.rows).addTo(map);
  map.fitBounds(photoLayer.getBounds());
};

/***/ }),

/***/ "./app/javascript/leaflet-src.js":
/*!***************************************!*\
  !*** ./app/javascript/leaflet-src.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin
 (c) 2010-2011, CloudMade
*/
window.onload = function (event) {
  (function (window, document, undefined) {
    var oldL = window.L,
        L = {};
    L.version = '0.7.2'; // define Leaflet for Node module pattern loaders, including Browserify

    if ( true && typeof module.exports === 'object') {
      module.exports = L; // define Leaflet as an AMD module
    } else if (true) {
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (L),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } // define Leaflet as a global L variable, saving the original L to restore later if needed


    L.noConflict = function () {
      window.L = oldL;
      return this;
    };

    window.L = L;
    /*
     * L.Util contains various utility functions used throughout Leaflet code.
     */

    L.Util = {
      extend: function extend(dest) {
        // (Object[, Object, ...]) ->
        var sources = Array.prototype.slice.call(arguments, 1),
            i,
            j,
            len,
            src;

        for (j = 0, len = sources.length; j < len; j++) {
          src = sources[j] || {};

          for (i in src) {
            if (src.hasOwnProperty(i)) {
              dest[i] = src[i];
            }
          }
        }

        return dest;
      },
      bind: function bind(fn, obj) {
        // (Function, Object) -> Function
        var args = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
        return function () {
          return fn.apply(obj, args || arguments);
        };
      },
      stamp: function () {
        var lastId = 0,
            key = '_leaflet_id';
        return function (obj) {
          obj[key] = obj[key] || ++lastId;
          return obj[key];
        };
      }(),
      invokeEach: function invokeEach(obj, method, context) {
        var i, args;

        if (typeof obj === 'object') {
          args = Array.prototype.slice.call(arguments, 3);

          for (i in obj) {
            method.apply(context, [i, obj[i]].concat(args));
          }

          return true;
        }

        return false;
      },
      limitExecByInterval: function limitExecByInterval(fn, time, context) {
        var lock, execOnUnlock;
        return function wrapperFn() {
          var args = arguments;

          if (lock) {
            execOnUnlock = true;
            return;
          }

          lock = true;
          setTimeout(function () {
            lock = false;

            if (execOnUnlock) {
              wrapperFn.apply(context, args);
              execOnUnlock = false;
            }
          }, time);
          fn.apply(context, args);
        };
      },
      falseFn: function falseFn() {
        return false;
      },
      formatNum: function formatNum(num, digits) {
        var pow = Math.pow(10, digits || 5);
        return Math.round(num * pow) / pow;
      },
      trim: function trim(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
      },
      splitWords: function splitWords(str) {
        return L.Util.trim(str).split(/\s+/);
      },
      setOptions: function setOptions(obj, options) {
        obj.options = L.extend({}, obj.options, options);
        return obj.options;
      },
      getParamString: function getParamString(obj, existingUrl, uppercase) {
        var params = [];

        for (var i in obj) {
          params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
        }

        return (!existingUrl || existingUrl.indexOf('?') === -1 ? '?' : '&') + params.join('&');
      },
      template: function template(str, data) {
        return str.replace(/\{ *([\w_]+) *\}/g, function (str, key) {
          var value = data[key];

          if (value === undefined) {
            throw new Error('No value provided for variable ' + str);
          } else if (typeof value === 'function') {
            value = value(data);
          }

          return value;
        });
      },
      isArray: Array.isArray || function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
      },
      emptyImageUrl: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
    };

    (function () {
      // inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/
      function getPrefixed(name) {
        var i,
            fn,
            prefixes = ['webkit', 'moz', 'o', 'ms'];

        for (i = 0; i < prefixes.length && !fn; i++) {
          fn = window[prefixes[i] + name];
        }

        return fn;
      }

      var lastTime = 0;

      function timeoutDefer(fn) {
        var time = +new Date(),
            timeToCall = Math.max(0, 16 - (time - lastTime));
        lastTime = time + timeToCall;
        return window.setTimeout(fn, timeToCall);
      }

      var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;

      var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') || getPrefixed('CancelRequestAnimationFrame') || function (id) {
        window.clearTimeout(id);
      };

      L.Util.requestAnimFrame = function (fn, context, immediate, element) {
        fn = L.bind(fn, context);

        if (immediate && requestFn === timeoutDefer) {
          fn();
        } else {
          return requestFn.call(window, fn, element);
        }
      };

      L.Util.cancelAnimFrame = function (id) {
        if (id) {
          cancelFn.call(window, id);
        }
      };
    })(); // shortcuts for most used utility functions


    L.extend = L.Util.extend;
    L.bind = L.Util.bind;
    L.stamp = L.Util.stamp;
    L.setOptions = L.Util.setOptions;
    /*
     * L.Class powers the OOP facilities of the library.
     * Thanks to John Resig and Dean Edwards for inspiration!
     */

    L.Class = function () {};

    L.Class.extend = function (props) {
      // extended class with the new prototype
      var NewClass = function NewClass() {
        // call the constructor
        if (this.initialize) {
          this.initialize.apply(this, arguments);
        } // call all constructor hooks


        if (this._initHooks) {
          this.callInitHooks();
        }
      }; // instantiate class without calling constructor


      var F = function F() {};

      F.prototype = this.prototype;
      var proto = new F();
      proto.constructor = NewClass;
      NewClass.prototype = proto; //inherit parent's statics

      for (var i in this) {
        if (this.hasOwnProperty(i) && i !== 'prototype') {
          NewClass[i] = this[i];
        }
      } // mix static properties into the class


      if (props.statics) {
        L.extend(NewClass, props.statics);
        delete props.statics;
      } // mix includes into the prototype


      if (props.includes) {
        L.Util.extend.apply(null, [proto].concat(props.includes));
        delete props.includes;
      } // merge options


      if (props.options && proto.options) {
        props.options = L.extend({}, proto.options, props.options);
      } // mix given properties into the prototype


      L.extend(proto, props);
      proto._initHooks = [];
      var parent = this; // jshint camelcase: false

      NewClass.__super__ = parent.prototype; // add method for calling all hooks

      proto.callInitHooks = function () {
        if (this._initHooksCalled) {
          return;
        }

        if (parent.prototype.callInitHooks) {
          parent.prototype.callInitHooks.call(this);
        }

        this._initHooksCalled = true;

        for (var i = 0, len = proto._initHooks.length; i < len; i++) {
          proto._initHooks[i].call(this);
        }
      };

      return NewClass;
    }; // method for adding properties to prototype


    L.Class.include = function (props) {
      L.extend(this.prototype, props);
    }; // merge new default options to the Class


    L.Class.mergeOptions = function (options) {
      L.extend(this.prototype.options, options);
    }; // add a constructor hook


    L.Class.addInitHook = function (fn) {
      // (Function) || (String, args...)
      var args = Array.prototype.slice.call(arguments, 1);
      var init = typeof fn === 'function' ? fn : function () {
        this[fn].apply(this, args);
      };
      this.prototype._initHooks = this.prototype._initHooks || [];

      this.prototype._initHooks.push(init);
    };
    /*
     * L.Mixin.Events is used to add custom events functionality to Leaflet classes.
     */


    var eventsKey = '_leaflet_events';
    L.Mixin = {};
    L.Mixin.Events = {
      addEventListener: function addEventListener(types, fn, context) {
        // (String, Function[, Object]) or (Object[, Object])
        // types can be a map of types/handlers
        if (L.Util.invokeEach(types, this.addEventListener, this, fn, context)) {
          return this;
        }

        var events = this[eventsKey] = this[eventsKey] || {},
            contextId = context && context !== this && L.stamp(context),
            i,
            len,
            event,
            type,
            indexKey,
            indexLenKey,
            typeIndex; // types can be a string of space-separated words

        types = L.Util.splitWords(types);

        for (i = 0, len = types.length; i < len; i++) {
          event = {
            action: fn,
            context: context || this
          };
          type = types[i];

          if (contextId) {
            // store listeners of a particular context in a separate hash (if it has an id)
            // gives a major performance boost when removing thousands of map layers
            indexKey = type + '_idx';
            indexLenKey = indexKey + '_len';
            typeIndex = events[indexKey] = events[indexKey] || {};

            if (!typeIndex[contextId]) {
              typeIndex[contextId] = []; // keep track of the number of keys in the index to quickly check if it's empty

              events[indexLenKey] = (events[indexLenKey] || 0) + 1;
            }

            typeIndex[contextId].push(event);
          } else {
            events[type] = events[type] || [];
            events[type].push(event);
          }
        }

        return this;
      },
      hasEventListeners: function hasEventListeners(type) {
        // (String) -> Boolean
        var events = this[eventsKey];
        return !!events && (type in events && events[type].length > 0 || type + '_idx' in events && events[type + '_idx_len'] > 0);
      },
      removeEventListener: function removeEventListener(types, fn, context) {
        // ([String, Function, Object]) or (Object[, Object])
        if (!this[eventsKey]) {
          return this;
        }

        if (!types) {
          return this.clearAllEventListeners();
        }

        if (L.Util.invokeEach(types, this.removeEventListener, this, fn, context)) {
          return this;
        }

        var events = this[eventsKey],
            contextId = context && context !== this && L.stamp(context),
            i,
            len,
            type,
            listeners,
            j,
            indexKey,
            indexLenKey,
            typeIndex,
            removed;
        types = L.Util.splitWords(types);

        for (i = 0, len = types.length; i < len; i++) {
          type = types[i];
          indexKey = type + '_idx';
          indexLenKey = indexKey + '_len';
          typeIndex = events[indexKey];

          if (!fn) {
            // clear all listeners for a type if function isn't specified
            delete events[type];
            delete events[indexKey];
            delete events[indexLenKey];
          } else {
            listeners = contextId && typeIndex ? typeIndex[contextId] : events[type];

            if (listeners) {
              for (j = listeners.length - 1; j >= 0; j--) {
                if (listeners[j].action === fn && (!context || listeners[j].context === context)) {
                  removed = listeners.splice(j, 1); // set the old action to a no-op, because it is possible
                  // that the listener is being iterated over as part of a dispatch

                  removed[0].action = L.Util.falseFn;
                }
              }

              if (context && typeIndex && listeners.length === 0) {
                delete typeIndex[contextId];
                events[indexLenKey]--;
              }
            }
          }
        }

        return this;
      },
      clearAllEventListeners: function clearAllEventListeners() {
        delete this[eventsKey];
        return this;
      },
      fireEvent: function fireEvent(type, data) {
        // (String[, Object])
        if (!this.hasEventListeners(type)) {
          return this;
        }

        var event = L.Util.extend({}, data, {
          type: type,
          target: this
        });
        var events = this[eventsKey],
            listeners,
            i,
            len,
            typeIndex,
            contextId;

        if (events[type]) {
          // make sure adding/removing listeners inside other listeners won't cause infinite loop
          listeners = events[type].slice();

          for (i = 0, len = listeners.length; i < len; i++) {
            listeners[i].action.call(listeners[i].context, event);
          }
        } // fire event for the context-indexed listeners as well


        typeIndex = events[type + '_idx'];

        for (contextId in typeIndex) {
          listeners = typeIndex[contextId].slice();

          if (listeners) {
            for (i = 0, len = listeners.length; i < len; i++) {
              listeners[i].action.call(listeners[i].context, event);
            }
          }
        }

        return this;
      },
      addOneTimeEventListener: function addOneTimeEventListener(types, fn, context) {
        if (L.Util.invokeEach(types, this.addOneTimeEventListener, this, fn, context)) {
          return this;
        }

        var handler = L.bind(function () {
          this.removeEventListener(types, fn, context).removeEventListener(types, handler, context);
        }, this);
        return this.addEventListener(types, fn, context).addEventListener(types, handler, context);
      }
    };
    L.Mixin.Events.on = L.Mixin.Events.addEventListener;
    L.Mixin.Events.off = L.Mixin.Events.removeEventListener;
    L.Mixin.Events.once = L.Mixin.Events.addOneTimeEventListener;
    L.Mixin.Events.fire = L.Mixin.Events.fireEvent;
    /*
     * L.Browser handles different browser and feature detections for internal Leaflet use.
     */

    (function () {
      var ie = ('ActiveXObject' in window),
          ielt9 = ie && !document.addEventListener,
          // terrible browser detection to work around Safari / iOS / Android browser bugs
      ua = navigator.userAgent.toLowerCase(),
          webkit = ua.indexOf('webkit') !== -1,
          chrome = ua.indexOf('chrome') !== -1,
          phantomjs = ua.indexOf('phantom') !== -1,
          android = ua.indexOf('android') !== -1,
          android23 = ua.search('android [23]') !== -1,
          gecko = ua.indexOf('gecko') !== -1,
          mobile = typeof orientation !== undefined + '',
          msPointer = window.navigator && window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints && !window.PointerEvent,
          pointer = window.PointerEvent && window.navigator.pointerEnabled && window.navigator.maxTouchPoints || msPointer,
          retina = 'devicePixelRatio' in window && window.devicePixelRatio > 1 || 'matchMedia' in window && window.matchMedia('(min-resolution:144dpi)') && window.matchMedia('(min-resolution:144dpi)').matches,
          doc = document.documentElement,
          ie3d = ie && 'transition' in doc.style,
          webkit3d = 'WebKitCSSMatrix' in window && 'm11' in new window.WebKitCSSMatrix() && !android23,
          gecko3d = ('MozPerspective' in doc.style),
          opera3d = ('OTransition' in doc.style),
          any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d || opera3d) && !phantomjs; // PhantomJS has 'ontouchstart' in document.documentElement, but doesn't actually support touch.
      // https://github.com/Leaflet/Leaflet/pull/1434#issuecomment-13843151

      var touch = !window.L_NO_TOUCH && !phantomjs && function () {
        var startName = 'ontouchstart'; // IE10+ (We simulate these into touch* events in L.DomEvent and L.DomEvent.Pointer) or WebKit, etc.

        if (pointer || startName in doc) {
          return true;
        } // Firefox/Gecko


        var div = document.createElement('div'),
            supported = false;

        if (!div.setAttribute) {
          return false;
        }

        div.setAttribute(startName, 'return;');

        if (typeof div[startName] === 'function') {
          supported = true;
        }

        div.removeAttribute(startName);
        div = null;
        return supported;
      }();

      L.Browser = {
        ie: ie,
        ielt9: ielt9,
        webkit: webkit,
        gecko: gecko && !webkit && !window.opera && !ie,
        android: android,
        android23: android23,
        chrome: chrome,
        ie3d: ie3d,
        webkit3d: webkit3d,
        gecko3d: gecko3d,
        opera3d: opera3d,
        any3d: any3d,
        mobile: mobile,
        mobileWebkit: mobile && webkit,
        mobileWebkit3d: mobile && webkit3d,
        mobileOpera: mobile && window.opera,
        touch: touch,
        msPointer: msPointer,
        pointer: pointer,
        retina: retina
      };
    })();
    /*
     * L.Point represents a point with x and y coordinates.
     */


    L.Point = function (
    /*Number*/
    x,
    /*Number*/
    y,
    /*Boolean*/
    round) {
      this.x = round ? Math.round(x) : x;
      this.y = round ? Math.round(y) : y;
    };

    L.Point.prototype = {
      clone: function clone() {
        return new L.Point(this.x, this.y);
      },
      // non-destructive, returns a new point
      add: function add(point) {
        return this.clone()._add(L.point(point));
      },
      // destructive, used directly for performance in situations where it's safe to modify existing point
      _add: function _add(point) {
        this.x += point.x;
        this.y += point.y;
        return this;
      },
      subtract: function subtract(point) {
        return this.clone()._subtract(L.point(point));
      },
      _subtract: function _subtract(point) {
        this.x -= point.x;
        this.y -= point.y;
        return this;
      },
      divideBy: function divideBy(num) {
        return this.clone()._divideBy(num);
      },
      _divideBy: function _divideBy(num) {
        this.x /= num;
        this.y /= num;
        return this;
      },
      multiplyBy: function multiplyBy(num) {
        return this.clone()._multiplyBy(num);
      },
      _multiplyBy: function _multiplyBy(num) {
        this.x *= num;
        this.y *= num;
        return this;
      },
      round: function round() {
        return this.clone()._round();
      },
      _round: function _round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
      },
      floor: function floor() {
        return this.clone()._floor();
      },
      _floor: function _floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
      },
      distanceTo: function distanceTo(point) {
        point = L.point(point);
        var x = point.x - this.x,
            y = point.y - this.y;
        return Math.sqrt(x * x + y * y);
      },
      equals: function equals(point) {
        point = L.point(point);
        return point.x === this.x && point.y === this.y;
      },
      contains: function contains(point) {
        point = L.point(point);
        return Math.abs(point.x) <= Math.abs(this.x) && Math.abs(point.y) <= Math.abs(this.y);
      },
      toString: function toString() {
        return 'Point(' + L.Util.formatNum(this.x) + ', ' + L.Util.formatNum(this.y) + ')';
      }
    };

    L.point = function (x, y, round) {
      if (x instanceof L.Point) {
        return x;
      }

      if (L.Util.isArray(x)) {
        return new L.Point(x[0], x[1]);
      }

      if (x === undefined || x === null) {
        return x;
      }

      return new L.Point(x, y, round);
    };
    /*
     * L.Bounds represents a rectangular area on the screen in pixel coordinates.
     */


    L.Bounds = function (a, b) {
      //(Point, Point) or Point[]
      if (!a) {
        return;
      }

      var points = b ? [a, b] : a;

      for (var i = 0, len = points.length; i < len; i++) {
        this.extend(points[i]);
      }
    };

    L.Bounds.prototype = {
      // extend the bounds to contain the given point
      extend: function extend(point) {
        // (Point)
        point = L.point(point);

        if (!this.min && !this.max) {
          this.min = point.clone();
          this.max = point.clone();
        } else {
          this.min.x = Math.min(point.x, this.min.x);
          this.max.x = Math.max(point.x, this.max.x);
          this.min.y = Math.min(point.y, this.min.y);
          this.max.y = Math.max(point.y, this.max.y);
        }

        return this;
      },
      getCenter: function getCenter(round) {
        // (Boolean) -> Point
        return new L.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, round);
      },
      getBottomLeft: function getBottomLeft() {
        // -> Point
        return new L.Point(this.min.x, this.max.y);
      },
      getTopRight: function getTopRight() {
        // -> Point
        return new L.Point(this.max.x, this.min.y);
      },
      getSize: function getSize() {
        return this.max.subtract(this.min);
      },
      contains: function contains(obj) {
        // (Bounds) or (Point) -> Boolean
        var min, max;

        if (typeof obj[0] === 'number' || obj instanceof L.Point) {
          obj = L.point(obj);
        } else {
          obj = L.bounds(obj);
        }

        if (obj instanceof L.Bounds) {
          min = obj.min;
          max = obj.max;
        } else {
          min = max = obj;
        }

        return min.x >= this.min.x && max.x <= this.max.x && min.y >= this.min.y && max.y <= this.max.y;
      },
      intersects: function intersects(bounds) {
        // (Bounds) -> Boolean
        bounds = L.bounds(bounds);
        var min = this.min,
            max = this.max,
            min2 = bounds.min,
            max2 = bounds.max,
            xIntersects = max2.x >= min.x && min2.x <= max.x,
            yIntersects = max2.y >= min.y && min2.y <= max.y;
        return xIntersects && yIntersects;
      },
      isValid: function isValid() {
        return !!(this.min && this.max);
      }
    };

    L.bounds = function (a, b) {
      // (Bounds) or (Point, Point) or (Point[])
      if (!a || a instanceof L.Bounds) {
        return a;
      }

      return new L.Bounds(a, b);
    };
    /*
     * L.Transformation is an utility class to perform simple point transformations through a 2d-matrix.
     */


    L.Transformation = function (a, b, c, d) {
      this._a = a;
      this._b = b;
      this._c = c;
      this._d = d;
    };

    L.Transformation.prototype = {
      transform: function transform(point, scale) {
        // (Point, Number) -> Point
        return this._transform(point.clone(), scale);
      },
      // destructive transform (faster)
      _transform: function _transform(point, scale) {
        scale = scale || 1;
        point.x = scale * (this._a * point.x + this._b);
        point.y = scale * (this._c * point.y + this._d);
        return point;
      },
      untransform: function untransform(point, scale) {
        scale = scale || 1;
        return new L.Point((point.x / scale - this._b) / this._a, (point.y / scale - this._d) / this._c);
      }
    };
    /*
     * L.DomUtil contains various utility functions for working with DOM.
     */

    L.DomUtil = {
      get: function get(id) {
        return typeof id === 'string' ? document.getElementById(id) : id;
      },
      getStyle: function getStyle(el, style) {
        var value = el.style[style];

        if (!value && el.currentStyle) {
          value = el.currentStyle[style];
        }

        if ((!value || value === 'auto') && document.defaultView) {
          var css = document.defaultView.getComputedStyle(el, null);
          value = css ? css[style] : null;
        }

        return value === 'auto' ? null : value;
      },
      getViewportOffset: function getViewportOffset(element) {
        var top = 0,
            left = 0,
            el = element,
            docBody = document.body,
            docEl = document.documentElement,
            pos;

        do {
          top += el.offsetTop || 0;
          left += el.offsetLeft || 0; //add borders

          top += parseInt(L.DomUtil.getStyle(el, 'borderTopWidth'), 10) || 0;
          left += parseInt(L.DomUtil.getStyle(el, 'borderLeftWidth'), 10) || 0;
          pos = L.DomUtil.getStyle(el, 'position');

          if (el.offsetParent === docBody && pos === 'absolute') {
            break;
          }

          if (pos === 'fixed') {
            top += docBody.scrollTop || docEl.scrollTop || 0;
            left += docBody.scrollLeft || docEl.scrollLeft || 0;
            break;
          }

          if (pos === 'relative' && !el.offsetLeft) {
            var width = L.DomUtil.getStyle(el, 'width'),
                maxWidth = L.DomUtil.getStyle(el, 'max-width'),
                r = el.getBoundingClientRect();

            if (width !== 'none' || maxWidth !== 'none') {
              left += r.left + el.clientLeft;
            } //calculate full y offset since we're breaking out of the loop


            top += r.top + (docBody.scrollTop || docEl.scrollTop || 0);
            break;
          }

          el = el.offsetParent;
        } while (el);

        el = element;

        do {
          if (el === docBody) {
            break;
          }

          top -= el.scrollTop || 0;
          left -= el.scrollLeft || 0;
          el = el.parentNode;
        } while (el);

        return new L.Point(left, top);
      },
      documentIsLtr: function documentIsLtr() {
        if (!L.DomUtil._docIsLtrCached) {
          L.DomUtil._docIsLtrCached = true;
          L.DomUtil._docIsLtr = L.DomUtil.getStyle(document.body, 'direction') === 'ltr';
        }

        return L.DomUtil._docIsLtr;
      },
      create: function create(tagName, className, container) {
        var el = document.createElement(tagName);
        el.className = className;

        if (container) {
          container.appendChild(el);
        }

        return el;
      },
      hasClass: function hasClass(el, name) {
        if (el.classList !== undefined) {
          return el.classList.contains(name);
        }

        var className = L.DomUtil._getClass(el);

        return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
      },
      addClass: function addClass(el, name) {
        if (el.classList !== undefined) {
          var classes = L.Util.splitWords(name);

          for (var i = 0, len = classes.length; i < len; i++) {
            el.classList.add(classes[i]);
          }
        } else if (!L.DomUtil.hasClass(el, name)) {
          var className = L.DomUtil._getClass(el);

          L.DomUtil._setClass(el, (className ? className + ' ' : '') + name);
        }
      },
      removeClass: function removeClass(el, name) {
        if (el.classList !== undefined) {
          el.classList.remove(name);
        } else {
          L.DomUtil._setClass(el, L.Util.trim((' ' + L.DomUtil._getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
        }
      },
      _setClass: function _setClass(el, name) {
        if (el.className.baseVal === undefined) {
          el.className = name;
        } else {
          // in case of SVG element
          el.className.baseVal = name;
        }
      },
      _getClass: function _getClass(el) {
        return el.className.baseVal === undefined ? el.className : el.className.baseVal;
      },
      setOpacity: function setOpacity(el, value) {
        if ('opacity' in el.style) {
          el.style.opacity = value;
        } else if ('filter' in el.style) {
          var filter = false,
              filterName = 'DXImageTransform.Microsoft.Alpha'; // filters collection throws an error if we try to retrieve a filter that doesn't exist

          try {
            filter = el.filters.item(filterName);
          } catch (e) {
            // don't set opacity to 1 if we haven't already set an opacity,
            // it isn't needed and breaks transparent pngs.
            if (value === 1) {
              return;
            }
          }

          value = Math.round(value * 100);

          if (filter) {
            filter.Enabled = value !== 100;
            filter.Opacity = value;
          } else {
            el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
          }
        }
      },
      testProp: function testProp(props) {
        var style = document.documentElement.style;

        for (var i = 0; i < props.length; i++) {
          if (props[i] in style) {
            return props[i];
          }
        }

        return false;
      },
      getTranslateString: function getTranslateString(point) {
        // on WebKit browsers (Chrome/Safari/iOS Safari/Android) using translate3d instead of translate
        // makes animation smoother as it ensures HW accel is used. Firefox 13 doesn't care
        // (same speed either way), Opera 12 doesn't support translate3d
        var is3d = L.Browser.webkit3d,
            open = 'translate' + (is3d ? '3d' : '') + '(',
            close = (is3d ? ',0' : '') + ')';
        return open + point.x + 'px,' + point.y + 'px' + close;
      },
      getScaleString: function getScaleString(scale, origin) {
        var preTranslateStr = L.DomUtil.getTranslateString(origin.add(origin.multiplyBy(-1 * scale))),
            scaleStr = ' scale(' + scale + ') ';
        return preTranslateStr + scaleStr;
      },
      setPosition: function setPosition(el, point, disable3D) {
        // (HTMLElement, Point[, Boolean])
        // jshint camelcase: false
        el._leaflet_pos = point;

        if (!disable3D && L.Browser.any3d) {
          el.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(point);
        } else {
          el.style.left = point.x + 'px';
          el.style.top = point.y + 'px';
        }
      },
      getPosition: function getPosition(el) {
        // this method is only used for elements previously positioned using setPosition,
        // so it's safe to cache the position for performance
        // jshint camelcase: false
        return el._leaflet_pos;
      }
    }; // prefix style property names

    L.DomUtil.TRANSFORM = L.DomUtil.testProp(['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']); // webkitTransition comes first because some browser versions that drop vendor prefix don't do
    // the same for the transitionend event, in particular the Android 4.1 stock browser

    L.DomUtil.TRANSITION = L.DomUtil.testProp(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);
    L.DomUtil.TRANSITION_END = L.DomUtil.TRANSITION === 'webkitTransition' || L.DomUtil.TRANSITION === 'OTransition' ? L.DomUtil.TRANSITION + 'End' : 'transitionend';

    (function () {
      if ('onselectstart' in document) {
        L.extend(L.DomUtil, {
          disableTextSelection: function disableTextSelection() {
            L.DomEvent.on(window, 'selectstart', L.DomEvent.preventDefault);
          },
          enableTextSelection: function enableTextSelection() {
            L.DomEvent.off(window, 'selectstart', L.DomEvent.preventDefault);
          }
        });
      } else {
        var userSelectProperty = L.DomUtil.testProp(['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);
        L.extend(L.DomUtil, {
          disableTextSelection: function disableTextSelection() {
            if (userSelectProperty) {
              var style = document.documentElement.style;
              this._userSelect = style[userSelectProperty];
              style[userSelectProperty] = 'none';
            }
          },
          enableTextSelection: function enableTextSelection() {
            if (userSelectProperty) {
              document.documentElement.style[userSelectProperty] = this._userSelect;
              delete this._userSelect;
            }
          }
        });
      }

      L.extend(L.DomUtil, {
        disableImageDrag: function disableImageDrag() {
          L.DomEvent.on(window, 'dragstart', L.DomEvent.preventDefault);
        },
        enableImageDrag: function enableImageDrag() {
          L.DomEvent.off(window, 'dragstart', L.DomEvent.preventDefault);
        }
      });
    })();
    /*
     * L.LatLng represents a geographical point with latitude and longitude coordinates.
     */


    L.LatLng = function (lat, lng, alt) {
      // (Number, Number, Number)
      lat = parseFloat(lat);
      lng = parseFloat(lng);

      if (isNaN(lat) || isNaN(lng)) {
        throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
      }

      this.lat = lat;
      this.lng = lng;

      if (alt !== undefined) {
        this.alt = parseFloat(alt);
      }
    };

    L.extend(L.LatLng, {
      DEG_TO_RAD: Math.PI / 180,
      RAD_TO_DEG: 180 / Math.PI,
      MAX_MARGIN: 1.0E-9 // max margin of error for the "equals" check

    });
    L.LatLng.prototype = {
      equals: function equals(obj) {
        // (LatLng) -> Boolean
        if (!obj) {
          return false;
        }

        obj = L.latLng(obj);
        var margin = Math.max(Math.abs(this.lat - obj.lat), Math.abs(this.lng - obj.lng));
        return margin <= L.LatLng.MAX_MARGIN;
      },
      toString: function toString(precision) {
        // (Number) -> String
        return 'LatLng(' + L.Util.formatNum(this.lat, precision) + ', ' + L.Util.formatNum(this.lng, precision) + ')';
      },
      // Haversine distance formula, see http://en.wikipedia.org/wiki/Haversine_formula
      // TODO move to projection code, LatLng shouldn't know about Earth
      distanceTo: function distanceTo(other) {
        // (LatLng) -> Number
        other = L.latLng(other);
        var R = 6378137,
            // earth radius in meters
        d2r = L.LatLng.DEG_TO_RAD,
            dLat = (other.lat - this.lat) * d2r,
            dLon = (other.lng - this.lng) * d2r,
            lat1 = this.lat * d2r,
            lat2 = other.lat * d2r,
            sin1 = Math.sin(dLat / 2),
            sin2 = Math.sin(dLon / 2);
        var a = sin1 * sin1 + sin2 * sin2 * Math.cos(lat1) * Math.cos(lat2);
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      },
      wrap: function wrap(a, b) {
        // (Number, Number) -> LatLng
        var lng = this.lng;
        a = a || -180;
        b = b || 180;
        lng = (lng + b) % (b - a) + (lng < a || lng === b ? b : a);
        return new L.LatLng(this.lat, lng);
      }
    };

    L.latLng = function (a, b) {
      // (LatLng) or ([Number, Number]) or (Number, Number)
      if (a instanceof L.LatLng) {
        return a;
      }

      if (L.Util.isArray(a)) {
        if (typeof a[0] === 'number' || typeof a[0] === 'string') {
          return new L.LatLng(a[0], a[1], a[2]);
        } else {
          return null;
        }
      }

      if (a === undefined || a === null) {
        return a;
      }

      if (typeof a === 'object' && 'lat' in a) {
        return new L.LatLng(a.lat, 'lng' in a ? a.lng : a.lon);
      }

      if (b === undefined) {
        return null;
      }

      return new L.LatLng(a, b);
    };
    /*
     * L.LatLngBounds represents a rectangular area on the map in geographical coordinates.
     */


    L.LatLngBounds = function (southWest, northEast) {
      // (LatLng, LatLng) or (LatLng[])
      if (!southWest) {
        return;
      }

      var latlngs = northEast ? [southWest, northEast] : southWest;

      for (var i = 0, len = latlngs.length; i < len; i++) {
        this.extend(latlngs[i]);
      }
    };

    L.LatLngBounds.prototype = {
      // extend the bounds to contain the given point or bounds
      extend: function extend(obj) {
        // (LatLng) or (LatLngBounds)
        if (!obj) {
          return this;
        }

        var latLng = L.latLng(obj);

        if (latLng !== null) {
          obj = latLng;
        } else {
          obj = L.latLngBounds(obj);
        }

        if (obj instanceof L.LatLng) {
          if (!this._southWest && !this._northEast) {
            this._southWest = new L.LatLng(obj.lat, obj.lng);
            this._northEast = new L.LatLng(obj.lat, obj.lng);
          } else {
            this._southWest.lat = Math.min(obj.lat, this._southWest.lat);
            this._southWest.lng = Math.min(obj.lng, this._southWest.lng);
            this._northEast.lat = Math.max(obj.lat, this._northEast.lat);
            this._northEast.lng = Math.max(obj.lng, this._northEast.lng);
          }
        } else if (obj instanceof L.LatLngBounds) {
          this.extend(obj._southWest);
          this.extend(obj._northEast);
        }

        return this;
      },
      // extend the bounds by a percentage
      pad: function pad(bufferRatio) {
        // (Number) -> LatLngBounds
        var sw = this._southWest,
            ne = this._northEast,
            heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
            widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;
        return new L.LatLngBounds(new L.LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer), new L.LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
      },
      getCenter: function getCenter() {
        // -> LatLng
        return new L.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
      },
      getSouthWest: function getSouthWest() {
        return this._southWest;
      },
      getNorthEast: function getNorthEast() {
        return this._northEast;
      },
      getNorthWest: function getNorthWest() {
        return new L.LatLng(this.getNorth(), this.getWest());
      },
      getSouthEast: function getSouthEast() {
        return new L.LatLng(this.getSouth(), this.getEast());
      },
      getWest: function getWest() {
        return this._southWest.lng;
      },
      getSouth: function getSouth() {
        return this._southWest.lat;
      },
      getEast: function getEast() {
        return this._northEast.lng;
      },
      getNorth: function getNorth() {
        return this._northEast.lat;
      },
      contains: function contains(obj) {
        // (LatLngBounds) or (LatLng) -> Boolean
        if (typeof obj[0] === 'number' || obj instanceof L.LatLng) {
          obj = L.latLng(obj);
        } else {
          obj = L.latLngBounds(obj);
        }

        var sw = this._southWest,
            ne = this._northEast,
            sw2,
            ne2;

        if (obj instanceof L.LatLngBounds) {
          sw2 = obj.getSouthWest();
          ne2 = obj.getNorthEast();
        } else {
          sw2 = ne2 = obj;
        }

        return sw2.lat >= sw.lat && ne2.lat <= ne.lat && sw2.lng >= sw.lng && ne2.lng <= ne.lng;
      },
      intersects: function intersects(bounds) {
        // (LatLngBounds)
        bounds = L.latLngBounds(bounds);
        var sw = this._southWest,
            ne = this._northEast,
            sw2 = bounds.getSouthWest(),
            ne2 = bounds.getNorthEast(),
            latIntersects = ne2.lat >= sw.lat && sw2.lat <= ne.lat,
            lngIntersects = ne2.lng >= sw.lng && sw2.lng <= ne.lng;
        return latIntersects && lngIntersects;
      },
      toBBoxString: function toBBoxString() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
      },
      equals: function equals(bounds) {
        // (LatLngBounds)
        if (!bounds) {
          return false;
        }

        bounds = L.latLngBounds(bounds);
        return this._southWest.equals(bounds.getSouthWest()) && this._northEast.equals(bounds.getNorthEast());
      },
      isValid: function isValid() {
        return !!(this._southWest && this._northEast);
      }
    }; //TODO International date line?

    L.latLngBounds = function (a, b) {
      // (LatLngBounds) or (LatLng, LatLng)
      if (!a || a instanceof L.LatLngBounds) {
        return a;
      }

      return new L.LatLngBounds(a, b);
    };
    /*
     * L.Projection contains various geographical projections used by CRS classes.
     */


    L.Projection = {};
    /*
     * Spherical Mercator is the most popular map projection, used by EPSG:3857 CRS used by default.
     */

    L.Projection.SphericalMercator = {
      MAX_LATITUDE: 85.0511287798,
      project: function project(latlng) {
        // (LatLng) -> Point
        var d = L.LatLng.DEG_TO_RAD,
            max = this.MAX_LATITUDE,
            lat = Math.max(Math.min(max, latlng.lat), -max),
            x = latlng.lng * d,
            y = lat * d;
        y = Math.log(Math.tan(Math.PI / 4 + y / 2));
        return new L.Point(x, y);
      },
      unproject: function unproject(point) {
        // (Point, Boolean) -> LatLng
        var d = L.LatLng.RAD_TO_DEG,
            lng = point.x * d,
            lat = (2 * Math.atan(Math.exp(point.y)) - Math.PI / 2) * d;
        return new L.LatLng(lat, lng);
      }
    };
    /*
     * Simple equirectangular (Plate Carree) projection, used by CRS like EPSG:4326 and Simple.
     */

    L.Projection.LonLat = {
      project: function project(latlng) {
        return new L.Point(latlng.lng, latlng.lat);
      },
      unproject: function unproject(point) {
        return new L.LatLng(point.y, point.x);
      }
    };
    /*
     * L.CRS is a base object for all defined CRS (Coordinate Reference Systems) in Leaflet.
     */

    L.CRS = {
      latLngToPoint: function latLngToPoint(latlng, zoom) {
        // (LatLng, Number) -> Point
        var projectedPoint = this.projection.project(latlng),
            scale = this.scale(zoom);
        return this.transformation._transform(projectedPoint, scale);
      },
      pointToLatLng: function pointToLatLng(point, zoom) {
        // (Point, Number[, Boolean]) -> LatLng
        var scale = this.scale(zoom),
            untransformedPoint = this.transformation.untransform(point, scale);
        return this.projection.unproject(untransformedPoint);
      },
      project: function project(latlng) {
        return this.projection.project(latlng);
      },
      scale: function scale(zoom) {
        return 256 * Math.pow(2, zoom);
      },
      getSize: function getSize(zoom) {
        var s = this.scale(zoom);
        return L.point(s, s);
      }
    };
    /*
     * A simple CRS that can be used for flat non-Earth maps like panoramas or game maps.
     */

    L.CRS.Simple = L.extend({}, L.CRS, {
      projection: L.Projection.LonLat,
      transformation: new L.Transformation(1, 0, -1, 0),
      scale: function scale(zoom) {
        return Math.pow(2, zoom);
      }
    });
    /*
     * L.CRS.EPSG3857 (Spherical Mercator) is the most common CRS for web mapping
     * and is used by Leaflet by default.
     */

    L.CRS.EPSG3857 = L.extend({}, L.CRS, {
      code: 'EPSG:3857',
      projection: L.Projection.SphericalMercator,
      transformation: new L.Transformation(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),
      project: function project(latlng) {
        // (LatLng) -> Point
        var projectedPoint = this.projection.project(latlng),
            earthRadius = 6378137;
        return projectedPoint.multiplyBy(earthRadius);
      }
    });
    L.CRS.EPSG900913 = L.extend({}, L.CRS.EPSG3857, {
      code: 'EPSG:900913'
    });
    /*
     * L.CRS.EPSG4326 is a CRS popular among advanced GIS specialists.
     */

    L.CRS.EPSG4326 = L.extend({}, L.CRS, {
      code: 'EPSG:4326',
      projection: L.Projection.LonLat,
      transformation: new L.Transformation(1 / 360, 0.5, -1 / 360, 0.5)
    });
    /*
     * L.Map is the central class of the API - it is used to create a map.
     */

    L.Map = L.Class.extend({
      includes: L.Mixin.Events,
      options: {
        crs: L.CRS.EPSG3857,

        /*
        center: LatLng,
        zoom: Number,
        layers: Array,
        */
        fadeAnimation: L.DomUtil.TRANSITION && !L.Browser.android23,
        trackResize: true,
        markerZoomAnimation: L.DomUtil.TRANSITION && L.Browser.any3d
      },
      initialize: function initialize(id, options) {
        // (HTMLElement or String, Object)
        options = L.setOptions(this, options);

        this._initContainer(id);

        this._initLayout(); // hack for https://github.com/Leaflet/Leaflet/issues/1980


        this._onResize = L.bind(this._onResize, this);

        this._initEvents();

        if (options.maxBounds) {
          this.setMaxBounds(options.maxBounds);
        }

        if (options.center && options.zoom !== undefined) {
          this.setView(L.latLng(options.center), options.zoom, {
            reset: true
          });
        }

        this._handlers = [];
        this._layers = {};
        this._zoomBoundLayers = {};
        this._tileLayersNum = 0;
        this.callInitHooks();

        this._addLayers(options.layers);
      },
      // public methods that modify map state
      // replaced by animation-powered implementation in Map.PanAnimation.js
      setView: function setView(center, zoom) {
        zoom = zoom === undefined ? this.getZoom() : zoom;

        this._resetView(L.latLng(center), this._limitZoom(zoom));

        return this;
      },
      setZoom: function setZoom(zoom, options) {
        if (!this._loaded) {
          this._zoom = this._limitZoom(zoom);
          return this;
        }

        return this.setView(this.getCenter(), zoom, {
          zoom: options
        });
      },
      zoomIn: function zoomIn(delta, options) {
        return this.setZoom(this._zoom + (delta || 1), options);
      },
      zoomOut: function zoomOut(delta, options) {
        return this.setZoom(this._zoom - (delta || 1), options);
      },
      setZoomAround: function setZoomAround(latlng, zoom, options) {
        var scale = this.getZoomScale(zoom),
            viewHalf = this.getSize().divideBy(2),
            containerPoint = latlng instanceof L.Point ? latlng : this.latLngToContainerPoint(latlng),
            centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
            newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));
        return this.setView(newCenter, zoom, {
          zoom: options
        });
      },
      fitBounds: function fitBounds(bounds, options) {
        options = options || {};
        bounds = bounds.getBounds ? bounds.getBounds() : L.latLngBounds(bounds);
        var paddingTL = L.point(options.paddingTopLeft || options.padding || [0, 0]),
            paddingBR = L.point(options.paddingBottomRight || options.padding || [0, 0]),
            zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR)),
            paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),
            swPoint = this.project(bounds.getSouthWest(), zoom),
            nePoint = this.project(bounds.getNorthEast(), zoom),
            center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);
        zoom = options && options.maxZoom ? Math.min(options.maxZoom, zoom) : zoom;
        return this.setView(center, zoom, options);
      },
      fitWorld: function fitWorld(options) {
        return this.fitBounds([[-90, -180], [90, 180]], options);
      },
      panTo: function panTo(center, options) {
        // (LatLng)
        return this.setView(center, this._zoom, {
          pan: options
        });
      },
      panBy: function panBy(offset) {
        // (Point)
        // replaced with animated panBy in Map.PanAnimation.js
        this.fire('movestart');

        this._rawPanBy(L.point(offset));

        this.fire('move');
        return this.fire('moveend');
      },
      setMaxBounds: function setMaxBounds(bounds) {
        bounds = L.latLngBounds(bounds);
        this.options.maxBounds = bounds;

        if (!bounds) {
          return this.off('moveend', this._panInsideMaxBounds, this);
        }

        if (this._loaded) {
          this._panInsideMaxBounds();
        }

        return this.on('moveend', this._panInsideMaxBounds, this);
      },
      panInsideBounds: function panInsideBounds(bounds, options) {
        var center = this.getCenter(),
            newCenter = this._limitCenter(center, this._zoom, bounds);

        if (center.equals(newCenter)) {
          return this;
        }

        return this.panTo(newCenter, options);
      },
      addLayer: function addLayer(layer) {
        // TODO method is too big, refactor
        var id = L.stamp(layer);

        if (this._layers[id]) {
          return this;
        }

        this._layers[id] = layer; // TODO getMaxZoom, getMinZoom in ILayer (instead of options)

        if (layer.options && (!isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom))) {
          this._zoomBoundLayers[id] = layer;

          this._updateZoomLevels();
        } // TODO looks ugly, refactor!!!


        if (this.options.zoomAnimation && L.TileLayer && layer instanceof L.TileLayer) {
          this._tileLayersNum++;
          this._tileLayersToLoad++;
          layer.on('load', this._onTileLayerLoad, this);
        }

        if (this._loaded) {
          this._layerAdd(layer);
        }

        return this;
      },
      removeLayer: function removeLayer(layer) {
        var id = L.stamp(layer);

        if (!this._layers[id]) {
          return this;
        }

        if (this._loaded) {
          layer.onRemove(this);
        }

        delete this._layers[id];

        if (this._loaded) {
          this.fire('layerremove', {
            layer: layer
          });
        }

        if (this._zoomBoundLayers[id]) {
          delete this._zoomBoundLayers[id];

          this._updateZoomLevels();
        } // TODO looks ugly, refactor


        if (this.options.zoomAnimation && L.TileLayer && layer instanceof L.TileLayer) {
          this._tileLayersNum--;
          this._tileLayersToLoad--;
          layer.off('load', this._onTileLayerLoad, this);
        }

        return this;
      },
      hasLayer: function hasLayer(layer) {
        if (!layer) {
          return false;
        }

        return L.stamp(layer) in this._layers;
      },
      eachLayer: function eachLayer(method, context) {
        for (var i in this._layers) {
          method.call(context, this._layers[i]);
        }

        return this;
      },
      invalidateSize: function invalidateSize(options) {
        if (!this._loaded) {
          return this;
        }

        options = L.extend({
          animate: false,
          pan: true
        }, options === true ? {
          animate: true
        } : options);
        var oldSize = this.getSize();
        this._sizeChanged = true;
        this._initialCenter = null;
        var newSize = this.getSize(),
            oldCenter = oldSize.divideBy(2).round(),
            newCenter = newSize.divideBy(2).round(),
            offset = oldCenter.subtract(newCenter);

        if (!offset.x && !offset.y) {
          return this;
        }

        if (options.animate && options.pan) {
          this.panBy(offset);
        } else {
          if (options.pan) {
            this._rawPanBy(offset);
          }

          this.fire('move');

          if (options.debounceMoveend) {
            clearTimeout(this._sizeTimer);
            this._sizeTimer = setTimeout(L.bind(this.fire, this, 'moveend'), 200);
          } else {
            this.fire('moveend');
          }
        }

        return this.fire('resize', {
          oldSize: oldSize,
          newSize: newSize
        });
      },
      // TODO handler.addTo
      addHandler: function addHandler(name, HandlerClass) {
        if (!HandlerClass) {
          return this;
        }

        var handler = this[name] = new HandlerClass(this);

        this._handlers.push(handler);

        if (this.options[name]) {
          handler.enable();
        }

        return this;
      },
      remove: function remove() {
        if (this._loaded) {
          this.fire('unload');
        }

        this._initEvents('off');

        try {
          // throws error in IE6-8
          delete this._container._leaflet;
        } catch (e) {
          this._container._leaflet = undefined;
        }

        this._clearPanes();

        if (this._clearControlPos) {
          this._clearControlPos();
        }

        this._clearHandlers();

        return this;
      },
      // public methods for getting map state
      getCenter: function getCenter() {
        // (Boolean) -> LatLng
        this._checkIfLoaded();

        if (this._initialCenter && !this._moved()) {
          return this._initialCenter;
        }

        return this.layerPointToLatLng(this._getCenterLayerPoint());
      },
      getZoom: function getZoom() {
        return this._zoom;
      },
      getBounds: function getBounds() {
        var bounds = this.getPixelBounds(),
            sw = this.unproject(bounds.getBottomLeft()),
            ne = this.unproject(bounds.getTopRight());
        return new L.LatLngBounds(sw, ne);
      },
      getMinZoom: function getMinZoom() {
        return this.options.minZoom === undefined ? this._layersMinZoom === undefined ? 0 : this._layersMinZoom : this.options.minZoom;
      },
      getMaxZoom: function getMaxZoom() {
        return this.options.maxZoom === undefined ? this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom : this.options.maxZoom;
      },
      getBoundsZoom: function getBoundsZoom(bounds, inside, padding) {
        // (LatLngBounds[, Boolean, Point]) -> Number
        bounds = L.latLngBounds(bounds);
        var zoom = this.getMinZoom() - (inside ? 1 : 0),
            maxZoom = this.getMaxZoom(),
            size = this.getSize(),
            nw = bounds.getNorthWest(),
            se = bounds.getSouthEast(),
            zoomNotFound = true,
            boundsSize;
        padding = L.point(padding || [0, 0]);

        do {
          zoom++;
          boundsSize = this.project(se, zoom).subtract(this.project(nw, zoom)).add(padding);
          zoomNotFound = !inside ? size.contains(boundsSize) : boundsSize.x < size.x || boundsSize.y < size.y;
        } while (zoomNotFound && zoom <= maxZoom);

        if (zoomNotFound && inside) {
          return null;
        }

        return inside ? zoom : zoom - 1;
      },
      getSize: function getSize() {
        if (!this._size || this._sizeChanged) {
          this._size = new L.Point(this._container.clientWidth, this._container.clientHeight);
          this._sizeChanged = false;
        }

        return this._size.clone();
      },
      getPixelBounds: function getPixelBounds() {
        var topLeftPoint = this._getTopLeftPoint();

        return new L.Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
      },
      getPixelOrigin: function getPixelOrigin() {
        this._checkIfLoaded();

        return this._initialTopLeftPoint;
      },
      getPanes: function getPanes() {
        return this._panes;
      },
      getContainer: function getContainer() {
        return this._container;
      },
      // TODO replace with universal implementation after refactoring projections
      getZoomScale: function getZoomScale(toZoom) {
        var crs = this.options.crs;
        return crs.scale(toZoom) / crs.scale(this._zoom);
      },
      getScaleZoom: function getScaleZoom(scale) {
        return this._zoom + Math.log(scale) / Math.LN2;
      },
      // conversion methods
      project: function project(latlng, zoom) {
        // (LatLng[, Number]) -> Point
        zoom = zoom === undefined ? this._zoom : zoom;
        return this.options.crs.latLngToPoint(L.latLng(latlng), zoom);
      },
      unproject: function unproject(point, zoom) {
        // (Point[, Number]) -> LatLng
        zoom = zoom === undefined ? this._zoom : zoom;
        return this.options.crs.pointToLatLng(L.point(point), zoom);
      },
      layerPointToLatLng: function layerPointToLatLng(point) {
        // (Point)
        var projectedPoint = L.point(point).add(this.getPixelOrigin());
        return this.unproject(projectedPoint);
      },
      latLngToLayerPoint: function latLngToLayerPoint(latlng) {
        // (LatLng)
        var projectedPoint = this.project(L.latLng(latlng))._round();

        return projectedPoint._subtract(this.getPixelOrigin());
      },
      containerPointToLayerPoint: function containerPointToLayerPoint(point) {
        // (Point)
        return L.point(point).subtract(this._getMapPanePos());
      },
      layerPointToContainerPoint: function layerPointToContainerPoint(point) {
        // (Point)
        return L.point(point).add(this._getMapPanePos());
      },
      containerPointToLatLng: function containerPointToLatLng(point) {
        var layerPoint = this.containerPointToLayerPoint(L.point(point));
        return this.layerPointToLatLng(layerPoint);
      },
      latLngToContainerPoint: function latLngToContainerPoint(latlng) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(L.latLng(latlng)));
      },
      mouseEventToContainerPoint: function mouseEventToContainerPoint(e) {
        // (MouseEvent)
        return L.DomEvent.getMousePosition(e, this._container);
      },
      mouseEventToLayerPoint: function mouseEventToLayerPoint(e) {
        // (MouseEvent)
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
      },
      mouseEventToLatLng: function mouseEventToLatLng(e) {
        // (MouseEvent)
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
      },
      // map initialization methods
      _initContainer: function _initContainer(id) {
        var container = this._container = L.DomUtil.get(id);

        if (!container) {
          throw new Error('Map container not found.');
        } else if (container._leaflet) {
          throw new Error('Map container is already initialized.');
        }

        container._leaflet = true;
      },
      _initLayout: function _initLayout() {
        var container = this._container;
        L.DomUtil.addClass(container, 'leaflet-container' + (L.Browser.touch ? ' leaflet-touch' : '') + (L.Browser.retina ? ' leaflet-retina' : '') + (L.Browser.ielt9 ? ' leaflet-oldie' : '') + (this.options.fadeAnimation ? ' leaflet-fade-anim' : ''));
        var position = L.DomUtil.getStyle(container, 'position');

        if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
          container.style.position = 'relative';
        }

        this._initPanes();

        if (this._initControlPos) {
          this._initControlPos();
        }
      },
      _initPanes: function _initPanes() {
        var panes = this._panes = {};
        this._mapPane = panes.mapPane = this._createPane('leaflet-map-pane', this._container);
        this._tilePane = panes.tilePane = this._createPane('leaflet-tile-pane', this._mapPane);
        panes.objectsPane = this._createPane('leaflet-objects-pane', this._mapPane);
        panes.shadowPane = this._createPane('leaflet-shadow-pane');
        panes.overlayPane = this._createPane('leaflet-overlay-pane');
        panes.markerPane = this._createPane('leaflet-marker-pane');
        panes.popupPane = this._createPane('leaflet-popup-pane');
        var zoomHide = ' leaflet-zoom-hide';

        if (!this.options.markerZoomAnimation) {
          L.DomUtil.addClass(panes.markerPane, zoomHide);
          L.DomUtil.addClass(panes.shadowPane, zoomHide);
          L.DomUtil.addClass(panes.popupPane, zoomHide);
        }
      },
      _createPane: function _createPane(className, container) {
        return L.DomUtil.create('div', className, container || this._panes.objectsPane);
      },
      _clearPanes: function _clearPanes() {
        this._container.removeChild(this._mapPane);
      },
      _addLayers: function _addLayers(layers) {
        layers = layers ? L.Util.isArray(layers) ? layers : [layers] : [];

        for (var i = 0, len = layers.length; i < len; i++) {
          this.addLayer(layers[i]);
        }
      },
      // private methods that modify map state
      _resetView: function _resetView(center, zoom, preserveMapOffset, afterZoomAnim) {
        var zoomChanged = this._zoom !== zoom;

        if (!afterZoomAnim) {
          this.fire('movestart');

          if (zoomChanged) {
            this.fire('zoomstart');
          }
        }

        this._zoom = zoom;
        this._initialCenter = center;
        this._initialTopLeftPoint = this._getNewTopLeftPoint(center);

        if (!preserveMapOffset) {
          L.DomUtil.setPosition(this._mapPane, new L.Point(0, 0));
        } else {
          this._initialTopLeftPoint._add(this._getMapPanePos());
        }

        this._tileLayersToLoad = this._tileLayersNum;
        var loading = !this._loaded;
        this._loaded = true;

        if (loading) {
          this.fire('load');
          this.eachLayer(this._layerAdd, this);
        }

        this.fire('viewreset', {
          hard: !preserveMapOffset
        });
        this.fire('move');

        if (zoomChanged || afterZoomAnim) {
          this.fire('zoomend');
        }

        this.fire('moveend', {
          hard: !preserveMapOffset
        });
      },
      _rawPanBy: function _rawPanBy(offset) {
        L.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
      },
      _getZoomSpan: function _getZoomSpan() {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _updateZoomLevels: function _updateZoomLevels() {
        var i,
            minZoom = Infinity,
            maxZoom = -Infinity,
            oldZoomSpan = this._getZoomSpan();

        for (i in this._zoomBoundLayers) {
          var layer = this._zoomBoundLayers[i];

          if (!isNaN(layer.options.minZoom)) {
            minZoom = Math.min(minZoom, layer.options.minZoom);
          }

          if (!isNaN(layer.options.maxZoom)) {
            maxZoom = Math.max(maxZoom, layer.options.maxZoom);
          }
        }

        if (i === undefined) {
          // we have no tilelayers
          this._layersMaxZoom = this._layersMinZoom = undefined;
        } else {
          this._layersMaxZoom = maxZoom;
          this._layersMinZoom = minZoom;
        }

        if (oldZoomSpan !== this._getZoomSpan()) {
          this.fire('zoomlevelschange');
        }
      },
      _panInsideMaxBounds: function _panInsideMaxBounds() {
        this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function _checkIfLoaded() {
        if (!this._loaded) {
          throw new Error('Set map center and zoom first.');
        }
      },
      // map events
      _initEvents: function _initEvents(onOff) {
        if (!L.DomEvent) {
          return;
        }

        onOff = onOff || 'on';
        L.DomEvent[onOff](this._container, 'click', this._onMouseClick, this);
        var events = ['dblclick', 'mousedown', 'mouseup', 'mouseenter', 'mouseleave', 'mousemove', 'contextmenu'],
            i,
            len;

        for (i = 0, len = events.length; i < len; i++) {
          L.DomEvent[onOff](this._container, events[i], this._fireMouseEvent, this);
        }

        if (this.options.trackResize) {
          L.DomEvent[onOff](window, 'resize', this._onResize, this);
        }
      },
      _onResize: function _onResize() {
        L.Util.cancelAnimFrame(this._resizeRequest);
        this._resizeRequest = L.Util.requestAnimFrame(function () {
          this.invalidateSize({
            debounceMoveend: true
          });
        }, this, false, this._container);
      },
      _onMouseClick: function _onMouseClick(e) {
        if (!this._loaded || !e._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || L.DomEvent._skipped(e)) {
          return;
        }

        this.fire('preclick');

        this._fireMouseEvent(e);
      },
      _fireMouseEvent: function _fireMouseEvent(e) {
        if (!this._loaded || L.DomEvent._skipped(e)) {
          return;
        }

        var type = e.type;
        type = type === 'mouseenter' ? 'mouseover' : type === 'mouseleave' ? 'mouseout' : type;

        if (!this.hasEventListeners(type)) {
          return;
        }

        if (type === 'contextmenu') {
          L.DomEvent.preventDefault(e);
        }

        var containerPoint = this.mouseEventToContainerPoint(e),
            layerPoint = this.containerPointToLayerPoint(containerPoint),
            latlng = this.layerPointToLatLng(layerPoint);
        this.fire(type, {
          latlng: latlng,
          layerPoint: layerPoint,
          containerPoint: containerPoint,
          originalEvent: e
        });
      },
      _onTileLayerLoad: function _onTileLayerLoad() {
        this._tileLayersToLoad--;

        if (this._tileLayersNum && !this._tileLayersToLoad) {
          this.fire('tilelayersload');
        }
      },
      _clearHandlers: function _clearHandlers() {
        for (var i = 0, len = this._handlers.length; i < len; i++) {
          this._handlers[i].disable();
        }
      },
      whenReady: function whenReady(callback, context) {
        if (this._loaded) {
          callback.call(context || this, this);
        } else {
          this.on('load', callback, context);
        }

        return this;
      },
      _layerAdd: function _layerAdd(layer) {
        layer.onAdd(this);
        this.fire('layeradd', {
          layer: layer
        });
      },
      // private methods for getting map state
      _getMapPanePos: function _getMapPanePos() {
        return L.DomUtil.getPosition(this._mapPane);
      },
      _moved: function _moved() {
        var pos = this._getMapPanePos();

        return pos && !pos.equals([0, 0]);
      },
      _getTopLeftPoint: function _getTopLeftPoint() {
        return this.getPixelOrigin().subtract(this._getMapPanePos());
      },
      _getNewTopLeftPoint: function _getNewTopLeftPoint(center, zoom) {
        var viewHalf = this.getSize()._divideBy(2); // TODO round on display, not calculation to increase precision?


        return this.project(center, zoom)._subtract(viewHalf)._round();
      },
      _latLngToNewLayerPoint: function _latLngToNewLayerPoint(latlng, newZoom, newCenter) {
        var topLeft = this._getNewTopLeftPoint(newCenter, newZoom).add(this._getMapPanePos());

        return this.project(latlng, newZoom)._subtract(topLeft);
      },
      // layer point of the current center
      _getCenterLayerPoint: function _getCenterLayerPoint() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      // offset of the specified place to the current center in pixels
      _getCenterOffset: function _getCenterOffset(latlng) {
        return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
      },
      // adjust center for view to get inside bounds
      _limitCenter: function _limitCenter(center, zoom, bounds) {
        if (!bounds) {
          return center;
        }

        var centerPoint = this.project(center, zoom),
            viewHalf = this.getSize().divideBy(2),
            viewBounds = new L.Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
            offset = this._getBoundsOffset(viewBounds, bounds, zoom);

        return this.unproject(centerPoint.add(offset), zoom);
      },
      // adjust offset for view to get inside bounds
      _limitOffset: function _limitOffset(offset, bounds) {
        if (!bounds) {
          return offset;
        }

        var viewBounds = this.getPixelBounds(),
            newBounds = new L.Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));
        return offset.add(this._getBoundsOffset(newBounds, bounds));
      },
      // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
      _getBoundsOffset: function _getBoundsOffset(pxBounds, maxBounds, zoom) {
        var nwOffset = this.project(maxBounds.getNorthWest(), zoom).subtract(pxBounds.min),
            seOffset = this.project(maxBounds.getSouthEast(), zoom).subtract(pxBounds.max),
            dx = this._rebound(nwOffset.x, -seOffset.x),
            dy = this._rebound(nwOffset.y, -seOffset.y);

        return new L.Point(dx, dy);
      },
      _rebound: function _rebound(left, right) {
        return left + right > 0 ? Math.round(left - right) / 2 : Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
      },
      _limitZoom: function _limitZoom(zoom) {
        var min = this.getMinZoom(),
            max = this.getMaxZoom();
        return Math.max(min, Math.min(max, zoom));
      }
    });

    L.map = function (id, options) {
      return new L.Map(id, options);
    };
    /*
     * Mercator projection that takes into account that the Earth is not a perfect sphere.
     * Less popular than spherical mercator; used by projections like EPSG:3395.
     */


    L.Projection.Mercator = {
      MAX_LATITUDE: 85.0840591556,
      R_MINOR: 6356752.314245179,
      R_MAJOR: 6378137,
      project: function project(latlng) {
        // (LatLng) -> Point
        var d = L.LatLng.DEG_TO_RAD,
            max = this.MAX_LATITUDE,
            lat = Math.max(Math.min(max, latlng.lat), -max),
            r = this.R_MAJOR,
            r2 = this.R_MINOR,
            x = latlng.lng * d * r,
            y = lat * d,
            tmp = r2 / r,
            eccent = Math.sqrt(1.0 - tmp * tmp),
            con = eccent * Math.sin(y);
        con = Math.pow((1 - con) / (1 + con), eccent * 0.5);
        var ts = Math.tan(0.5 * (Math.PI * 0.5 - y)) / con;
        y = -r * Math.log(ts);
        return new L.Point(x, y);
      },
      unproject: function unproject(point) {
        // (Point, Boolean) -> LatLng
        var d = L.LatLng.RAD_TO_DEG,
            r = this.R_MAJOR,
            r2 = this.R_MINOR,
            lng = point.x * d / r,
            tmp = r2 / r,
            eccent = Math.sqrt(1 - tmp * tmp),
            ts = Math.exp(-point.y / r),
            phi = Math.PI / 2 - 2 * Math.atan(ts),
            numIter = 15,
            tol = 1e-7,
            i = numIter,
            dphi = 0.1,
            con;

        while (Math.abs(dphi) > tol && --i > 0) {
          con = eccent * Math.sin(phi);
          dphi = Math.PI / 2 - 2 * Math.atan(ts * Math.pow((1.0 - con) / (1.0 + con), 0.5 * eccent)) - phi;
          phi += dphi;
        }

        return new L.LatLng(phi * d, lng);
      }
    };
    L.CRS.EPSG3395 = L.extend({}, L.CRS, {
      code: 'EPSG:3395',
      projection: L.Projection.Mercator,
      transformation: function () {
        var m = L.Projection.Mercator,
            r = m.R_MAJOR,
            scale = 0.5 / (Math.PI * r);
        return new L.Transformation(scale, 0.5, -scale, 0.5);
      }()
    });
    /*
     * L.TileLayer is used for standard xyz-numbered tile layers.
     */

    L.TileLayer = L.Class.extend({
      includes: L.Mixin.Events,
      options: {
        minZoom: 0,
        maxZoom: 18,
        tileSize: 256,
        subdomains: 'abc',
        errorTileUrl: '',
        attribution: '',
        zoomOffset: 0,
        opacity: 1,

        /*
        maxNativeZoom: null,
        zIndex: null,
        tms: false,
        continuousWorld: false,
        noWrap: false,
        zoomReverse: false,
        detectRetina: false,
        reuseTiles: false,
        bounds: false,
        */
        unloadInvisibleTiles: L.Browser.mobile,
        updateWhenIdle: L.Browser.mobile
      },
      initialize: function initialize(url, options) {
        options = L.setOptions(this, options); // detecting retina displays, adjusting tileSize and zoom levels

        if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {
          options.tileSize = Math.floor(options.tileSize / 2);
          options.zoomOffset++;

          if (options.minZoom > 0) {
            options.minZoom--;
          }

          this.options.maxZoom--;
        }

        if (options.bounds) {
          options.bounds = L.latLngBounds(options.bounds);
        }

        this._url = url;
        var subdomains = this.options.subdomains;

        if (typeof subdomains === 'string') {
          this.options.subdomains = subdomains.split('');
        }
      },
      onAdd: function onAdd(map) {
        this._map = map;
        this._animated = map._zoomAnimated; // create a container div for tiles

        this._initContainer(); // set up events


        map.on({
          'viewreset': this._reset,
          'moveend': this._update
        }, this);

        if (this._animated) {
          map.on({
            'zoomanim': this._animateZoom,
            'zoomend': this._endZoomAnim
          }, this);
        }

        if (!this.options.updateWhenIdle) {
          this._limitedUpdate = L.Util.limitExecByInterval(this._update, 150, this);
          map.on('move', this._limitedUpdate, this);
        }

        this._reset();

        this._update();
      },
      addTo: function addTo(map) {
        map.addLayer(this);
        return this;
      },
      onRemove: function onRemove(map) {
        this._container.parentNode.removeChild(this._container);

        map.off({
          'viewreset': this._reset,
          'moveend': this._update
        }, this);

        if (this._animated) {
          map.off({
            'zoomanim': this._animateZoom,
            'zoomend': this._endZoomAnim
          }, this);
        }

        if (!this.options.updateWhenIdle) {
          map.off('move', this._limitedUpdate, this);
        }

        this._container = null;
        this._map = null;
      },
      bringToFront: function bringToFront() {
        var pane = this._map._panes.tilePane;

        if (this._container) {
          pane.appendChild(this._container);

          this._setAutoZIndex(pane, Math.max);
        }

        return this;
      },
      bringToBack: function bringToBack() {
        var pane = this._map._panes.tilePane;

        if (this._container) {
          pane.insertBefore(this._container, pane.firstChild);

          this._setAutoZIndex(pane, Math.min);
        }

        return this;
      },
      getAttribution: function getAttribution() {
        return this.options.attribution;
      },
      getContainer: function getContainer() {
        return this._container;
      },
      setOpacity: function setOpacity(opacity) {
        this.options.opacity = opacity;

        if (this._map) {
          this._updateOpacity();
        }

        return this;
      },
      setZIndex: function setZIndex(zIndex) {
        this.options.zIndex = zIndex;

        this._updateZIndex();

        return this;
      },
      setUrl: function setUrl(url, noRedraw) {
        this._url = url;

        if (!noRedraw) {
          this.redraw();
        }

        return this;
      },
      redraw: function redraw() {
        if (this._map) {
          this._reset({
            hard: true
          });

          this._update();
        }

        return this;
      },
      _updateZIndex: function _updateZIndex() {
        if (this._container && this.options.zIndex !== undefined) {
          this._container.style.zIndex = this.options.zIndex;
        }
      },
      _setAutoZIndex: function _setAutoZIndex(pane, compare) {
        var layers = pane.children,
            edgeZIndex = -compare(Infinity, -Infinity),
            // -Infinity for max, Infinity for min
        zIndex,
            i,
            len;

        for (i = 0, len = layers.length; i < len; i++) {
          if (layers[i] !== this._container) {
            zIndex = parseInt(layers[i].style.zIndex, 10);

            if (!isNaN(zIndex)) {
              edgeZIndex = compare(edgeZIndex, zIndex);
            }
          }
        }

        this.options.zIndex = this._container.style.zIndex = (isFinite(edgeZIndex) ? edgeZIndex : 0) + compare(1, -1);
      },
      _updateOpacity: function _updateOpacity() {
        var i,
            tiles = this._tiles;

        if (L.Browser.ielt9) {
          for (i in tiles) {
            L.DomUtil.setOpacity(tiles[i], this.options.opacity);
          }
        } else {
          L.DomUtil.setOpacity(this._container, this.options.opacity);
        }
      },
      _initContainer: function _initContainer() {
        var tilePane = this._map._panes.tilePane;

        if (!this._container) {
          this._container = L.DomUtil.create('div', 'leaflet-layer');

          this._updateZIndex();

          if (this._animated) {
            var className = 'leaflet-tile-container';
            this._bgBuffer = L.DomUtil.create('div', className, this._container);
            this._tileContainer = L.DomUtil.create('div', className, this._container);
          } else {
            this._tileContainer = this._container;
          }

          tilePane.appendChild(this._container);

          if (this.options.opacity < 1) {
            this._updateOpacity();
          }
        }
      },
      _reset: function _reset(e) {
        for (var key in this._tiles) {
          this.fire('tileunload', {
            tile: this._tiles[key]
          });
        }

        this._tiles = {};
        this._tilesToLoad = 0;

        if (this.options.reuseTiles) {
          this._unusedTiles = [];
        }

        this._tileContainer.innerHTML = '';

        if (this._animated && e && e.hard) {
          this._clearBgBuffer();
        }

        this._initContainer();
      },
      _getTileSize: function _getTileSize() {
        var map = this._map,
            zoom = map.getZoom() + this.options.zoomOffset,
            zoomN = this.options.maxNativeZoom,
            tileSize = this.options.tileSize;

        if (zoomN && zoom > zoomN) {
          tileSize = Math.round(map.getZoomScale(zoom) / map.getZoomScale(zoomN) * tileSize);
        }

        return tileSize;
      },
      _update: function _update() {
        if (!this._map) {
          return;
        }

        var map = this._map,
            bounds = map.getPixelBounds(),
            zoom = map.getZoom(),
            tileSize = this._getTileSize();

        if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
          return;
        }

        var tileBounds = L.bounds(bounds.min.divideBy(tileSize)._floor(), bounds.max.divideBy(tileSize)._floor());

        this._addTilesFromCenterOut(tileBounds);

        if (this.options.unloadInvisibleTiles || this.options.reuseTiles) {
          this._removeOtherTiles(tileBounds);
        }
      },
      _addTilesFromCenterOut: function _addTilesFromCenterOut(bounds) {
        var queue = [],
            center = bounds.getCenter();
        var j, i, point;

        for (j = bounds.min.y; j <= bounds.max.y; j++) {
          for (i = bounds.min.x; i <= bounds.max.x; i++) {
            point = new L.Point(i, j);

            if (this._tileShouldBeLoaded(point)) {
              queue.push(point);
            }
          }
        }

        var tilesToLoad = queue.length;

        if (tilesToLoad === 0) {
          return;
        } // load tiles in order of their distance to center


        queue.sort(function (a, b) {
          return a.distanceTo(center) - b.distanceTo(center);
        });
        var fragment = document.createDocumentFragment(); // if its the first batch of tiles to load

        if (!this._tilesToLoad) {
          this.fire('loading');
        }

        this._tilesToLoad += tilesToLoad;

        for (i = 0; i < tilesToLoad; i++) {
          this._addTile(queue[i], fragment);
        }

        this._tileContainer.appendChild(fragment);
      },
      _tileShouldBeLoaded: function _tileShouldBeLoaded(tilePoint) {
        if (tilePoint.x + ':' + tilePoint.y in this._tiles) {
          return false; // already loaded
        }

        var options = this.options;

        if (!options.continuousWorld) {
          var limit = this._getWrapTileNum(); // don't load if exceeds world bounds


          if (options.noWrap && (tilePoint.x < 0 || tilePoint.x >= limit.x) || tilePoint.y < 0 || tilePoint.y >= limit.y) {
            return false;
          }
        }

        if (options.bounds) {
          var tileSize = options.tileSize,
              nwPoint = tilePoint.multiplyBy(tileSize),
              sePoint = nwPoint.add([tileSize, tileSize]),
              nw = this._map.unproject(nwPoint),
              se = this._map.unproject(sePoint); // TODO temporary hack, will be removed after refactoring projections
          // https://github.com/Leaflet/Leaflet/issues/1618


          if (!options.continuousWorld && !options.noWrap) {
            nw = nw.wrap();
            se = se.wrap();
          }

          if (!options.bounds.intersects([nw, se])) {
            return false;
          }
        }

        return true;
      },
      _removeOtherTiles: function _removeOtherTiles(bounds) {
        var kArr, x, y, key;

        for (key in this._tiles) {
          kArr = key.split(':');
          x = parseInt(kArr[0], 10);
          y = parseInt(kArr[1], 10); // remove tile if it's out of bounds

          if (x < bounds.min.x || x > bounds.max.x || y < bounds.min.y || y > bounds.max.y) {
            this._removeTile(key);
          }
        }
      },
      _removeTile: function _removeTile(key) {
        var tile = this._tiles[key];
        this.fire('tileunload', {
          tile: tile,
          url: tile.src
        });

        if (this.options.reuseTiles) {
          L.DomUtil.removeClass(tile, 'leaflet-tile-loaded');

          this._unusedTiles.push(tile);
        } else if (tile.parentNode === this._tileContainer) {
          this._tileContainer.removeChild(tile);
        } // for https://github.com/CloudMade/Leaflet/issues/137


        if (!L.Browser.android) {
          tile.onload = null;
          tile.src = L.Util.emptyImageUrl;
        }

        delete this._tiles[key];
      },
      _addTile: function _addTile(tilePoint, container) {
        var tilePos = this._getTilePos(tilePoint); // get unused tile - or create a new tile


        var tile = this._getTile();
        /*
        Chrome 20 layouts much faster with top/left (verify with timeline, frames)
        Android 4 browser has display issues with top/left and requires transform instead
        (other browsers don't currently care) - see debug/hacks/jitter.html for an example
        */


        L.DomUtil.setPosition(tile, tilePos, L.Browser.chrome);
        this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;

        this._loadTile(tile, tilePoint);

        if (tile.parentNode !== this._tileContainer) {
          container.appendChild(tile);
        }
      },
      _getZoomForUrl: function _getZoomForUrl() {
        var options = this.options,
            zoom = this._map.getZoom();

        if (options.zoomReverse) {
          zoom = options.maxZoom - zoom;
        }

        zoom += options.zoomOffset;
        return options.maxNativeZoom ? Math.min(zoom, options.maxNativeZoom) : zoom;
      },
      _getTilePos: function _getTilePos(tilePoint) {
        var origin = this._map.getPixelOrigin(),
            tileSize = this._getTileSize();

        return tilePoint.multiplyBy(tileSize).subtract(origin);
      },
      // image-specific code (override to implement e.g. Canvas or SVG tile layer)
      getTileUrl: function getTileUrl(tilePoint) {
        return L.Util.template(this._url, L.extend({
          s: this._getSubdomain(tilePoint),
          z: tilePoint.z,
          x: tilePoint.x,
          y: tilePoint.y
        }, this.options));
      },
      _getWrapTileNum: function _getWrapTileNum() {
        var crs = this._map.options.crs,
            size = crs.getSize(this._map.getZoom());
        return size.divideBy(this._getTileSize())._floor();
      },
      _adjustTilePoint: function _adjustTilePoint(tilePoint) {
        var limit = this._getWrapTileNum(); // wrap tile coordinates


        if (!this.options.continuousWorld && !this.options.noWrap) {
          tilePoint.x = (tilePoint.x % limit.x + limit.x) % limit.x;
        }

        if (this.options.tms) {
          tilePoint.y = limit.y - tilePoint.y - 1;
        }

        tilePoint.z = this._getZoomForUrl();
      },
      _getSubdomain: function _getSubdomain(tilePoint) {
        var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
        return this.options.subdomains[index];
      },
      _getTile: function _getTile() {
        if (this.options.reuseTiles && this._unusedTiles.length > 0) {
          var tile = this._unusedTiles.pop();

          this._resetTile(tile);

          return tile;
        }

        return this._createTile();
      },
      // Override if data stored on a tile needs to be cleaned up before reuse
      _resetTile: function
        /*tile*/
      _resetTile() {},
      _createTile: function _createTile() {
        var tile = L.DomUtil.create('img', 'leaflet-tile');
        tile.style.width = tile.style.height = this._getTileSize() + 'px';
        tile.galleryimg = 'no';
        tile.onselectstart = tile.onmousemove = L.Util.falseFn;

        if (L.Browser.ielt9 && this.options.opacity !== undefined) {
          L.DomUtil.setOpacity(tile, this.options.opacity);
        } // without this hack, tiles disappear after zoom on Chrome for Android
        // https://github.com/Leaflet/Leaflet/issues/2078


        if (L.Browser.mobileWebkit3d) {
          tile.style.WebkitBackfaceVisibility = 'hidden';
        }

        return tile;
      },
      _loadTile: function _loadTile(tile, tilePoint) {
        tile._layer = this;
        tile.onload = this._tileOnLoad;
        tile.onerror = this._tileOnError;

        this._adjustTilePoint(tilePoint);

        tile.src = this.getTileUrl(tilePoint);
        this.fire('tileloadstart', {
          tile: tile,
          url: tile.src
        });
      },
      _tileLoaded: function _tileLoaded() {
        this._tilesToLoad--;

        if (this._animated) {
          L.DomUtil.addClass(this._tileContainer, 'leaflet-zoom-animated');
        }

        if (!this._tilesToLoad) {
          this.fire('load');

          if (this._animated) {
            // clear scaled tiles after all new tiles are loaded (for performance)
            clearTimeout(this._clearBgBufferTimer);
            this._clearBgBufferTimer = setTimeout(L.bind(this._clearBgBuffer, this), 500);
          }
        }
      },
      _tileOnLoad: function _tileOnLoad() {
        var layer = this._layer; //Only if we are loading an actual image

        if (this.src !== L.Util.emptyImageUrl) {
          L.DomUtil.addClass(this, 'leaflet-tile-loaded');
          layer.fire('tileload', {
            tile: this,
            url: this.src
          });
        }

        layer._tileLoaded();
      },
      _tileOnError: function _tileOnError() {
        var layer = this._layer;
        layer.fire('tileerror', {
          tile: this,
          url: this.src
        });
        var newUrl = layer.options.errorTileUrl;

        if (newUrl) {
          this.src = newUrl;
        }

        layer._tileLoaded();
      }
    });

    L.tileLayer = function (url, options) {
      return new L.TileLayer(url, options);
    };
    /*
     * L.TileLayer.WMS is used for putting WMS tile layers on the map.
     */


    L.TileLayer.WMS = L.TileLayer.extend({
      defaultWmsParams: {
        service: 'WMS',
        request: 'GetMap',
        version: '1.1.1',
        layers: '',
        styles: '',
        format: 'image/jpeg',
        transparent: false
      },
      initialize: function initialize(url, options) {
        // (String, Object)
        this._url = url;
        var wmsParams = L.extend({}, this.defaultWmsParams),
            tileSize = options.tileSize || this.options.tileSize;

        if (options.detectRetina && L.Browser.retina) {
          wmsParams.width = wmsParams.height = tileSize * 2;
        } else {
          wmsParams.width = wmsParams.height = tileSize;
        }

        for (var i in options) {
          // all keys that are not TileLayer options go to WMS params
          if (!this.options.hasOwnProperty(i) && i !== 'crs') {
            wmsParams[i] = options[i];
          }
        }

        this.wmsParams = wmsParams;
        L.setOptions(this, options);
      },
      onAdd: function onAdd(map) {
        this._crs = this.options.crs || map.options.crs;
        this._wmsVersion = parseFloat(this.wmsParams.version);
        var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
        this.wmsParams[projectionKey] = this._crs.code;
        L.TileLayer.prototype.onAdd.call(this, map);
      },
      getTileUrl: function getTileUrl(tilePoint) {
        // (Point, Number) -> String
        var map = this._map,
            tileSize = this.options.tileSize,
            nwPoint = tilePoint.multiplyBy(tileSize),
            sePoint = nwPoint.add([tileSize, tileSize]),
            nw = this._crs.project(map.unproject(nwPoint, tilePoint.z)),
            se = this._crs.project(map.unproject(sePoint, tilePoint.z)),
            bbox = this._wmsVersion >= 1.3 && this._crs === L.CRS.EPSG4326 ? [se.y, nw.x, nw.y, se.x].join(',') : [nw.x, se.y, se.x, nw.y].join(','),
            url = L.Util.template(this._url, {
          s: this._getSubdomain(tilePoint)
        });

        return url + L.Util.getParamString(this.wmsParams, url, true) + '&BBOX=' + bbox;
      },
      setParams: function setParams(params, noRedraw) {
        L.extend(this.wmsParams, params);

        if (!noRedraw) {
          this.redraw();
        }

        return this;
      }
    });

    L.tileLayer.wms = function (url, options) {
      return new L.TileLayer.WMS(url, options);
    };
    /*
     * L.TileLayer.Canvas is a class that you can use as a base for creating
     * dynamically drawn Canvas-based tile layers.
     */


    L.TileLayer.Canvas = L.TileLayer.extend({
      options: {
        async: false
      },
      initialize: function initialize(options) {
        L.setOptions(this, options);
      },
      redraw: function redraw() {
        if (this._map) {
          this._reset({
            hard: true
          });

          this._update();
        }

        for (var i in this._tiles) {
          this._redrawTile(this._tiles[i]);
        }

        return this;
      },
      _redrawTile: function _redrawTile(tile) {
        this.drawTile(tile, tile._tilePoint, this._map._zoom);
      },
      _createTile: function _createTile() {
        var tile = L.DomUtil.create('canvas', 'leaflet-tile');
        tile.width = tile.height = this.options.tileSize;
        tile.onselectstart = tile.onmousemove = L.Util.falseFn;
        return tile;
      },
      _loadTile: function _loadTile(tile, tilePoint) {
        tile._layer = this;
        tile._tilePoint = tilePoint;

        this._redrawTile(tile);

        if (!this.options.async) {
          this.tileDrawn(tile);
        }
      },
      drawTile: function
        /*tile, tilePoint*/
      drawTile() {// override with rendering code
      },
      tileDrawn: function tileDrawn(tile) {
        this._tileOnLoad.call(tile);
      }
    });

    L.tileLayer.canvas = function (options) {
      return new L.TileLayer.Canvas(options);
    };
    /*
     * L.ImageOverlay is used to overlay images over the map (to specific geographical bounds).
     */


    L.ImageOverlay = L.Class.extend({
      includes: L.Mixin.Events,
      options: {
        opacity: 1
      },
      initialize: function initialize(url, bounds, options) {
        // (String, LatLngBounds, Object)
        this._url = url;
        this._bounds = L.latLngBounds(bounds);
        L.setOptions(this, options);
      },
      onAdd: function onAdd(map) {
        this._map = map;

        if (!this._image) {
          this._initImage();
        }

        map._panes.overlayPane.appendChild(this._image);

        map.on('viewreset', this._reset, this);

        if (map.options.zoomAnimation && L.Browser.any3d) {
          map.on('zoomanim', this._animateZoom, this);
        }

        this._reset();
      },
      onRemove: function onRemove(map) {
        map.getPanes().overlayPane.removeChild(this._image);
        map.off('viewreset', this._reset, this);

        if (map.options.zoomAnimation) {
          map.off('zoomanim', this._animateZoom, this);
        }
      },
      addTo: function addTo(map) {
        map.addLayer(this);
        return this;
      },
      setOpacity: function setOpacity(opacity) {
        this.options.opacity = opacity;

        this._updateOpacity();

        return this;
      },
      // TODO remove bringToFront/bringToBack duplication from TileLayer/Path
      bringToFront: function bringToFront() {
        if (this._image) {
          this._map._panes.overlayPane.appendChild(this._image);
        }

        return this;
      },
      bringToBack: function bringToBack() {
        var pane = this._map._panes.overlayPane;

        if (this._image) {
          pane.insertBefore(this._image, pane.firstChild);
        }

        return this;
      },
      setUrl: function setUrl(url) {
        this._url = url;
        this._image.src = this._url;
      },
      getAttribution: function getAttribution() {
        return this.options.attribution;
      },
      _initImage: function _initImage() {
        this._image = L.DomUtil.create('img', 'leaflet-image-layer');

        if (this._map.options.zoomAnimation && L.Browser.any3d) {
          L.DomUtil.addClass(this._image, 'leaflet-zoom-animated');
        } else {
          L.DomUtil.addClass(this._image, 'leaflet-zoom-hide');
        }

        this._updateOpacity(); //TODO createImage util method to remove duplication


        L.extend(this._image, {
          galleryimg: 'no',
          onselectstart: L.Util.falseFn,
          onmousemove: L.Util.falseFn,
          onload: L.bind(this._onImageLoad, this),
          src: this._url
        });
      },
      _animateZoom: function _animateZoom(e) {
        var map = this._map,
            image = this._image,
            scale = map.getZoomScale(e.zoom),
            nw = this._bounds.getNorthWest(),
            se = this._bounds.getSouthEast(),
            topLeft = map._latLngToNewLayerPoint(nw, e.zoom, e.center),
            size = map._latLngToNewLayerPoint(se, e.zoom, e.center)._subtract(topLeft),
            origin = topLeft._add(size._multiplyBy(1 / 2 * (1 - 1 / scale)));

        image.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(origin) + ' scale(' + scale + ') ';
      },
      _reset: function _reset() {
        var image = this._image,
            topLeft = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            size = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(topLeft);

        L.DomUtil.setPosition(image, topLeft);
        image.style.width = size.x + 'px';
        image.style.height = size.y + 'px';
      },
      _onImageLoad: function _onImageLoad() {
        this.fire('load');
      },
      _updateOpacity: function _updateOpacity() {
        L.DomUtil.setOpacity(this._image, this.options.opacity);
      }
    });

    L.imageOverlay = function (url, bounds, options) {
      return new L.ImageOverlay(url, bounds, options);
    };
    /*
     * L.Icon is an image-based icon class that you can use with L.Marker for custom markers.
     */


    L.Icon = L.Class.extend({
      options: {
        /*
        iconUrl: (String) (required)
        iconRetinaUrl: (String) (optional, used for retina devices if detected)
        iconSize: (Point) (can be set through CSS)
        iconAnchor: (Point) (centered by default, can be set in CSS with negative margins)
        popupAnchor: (Point) (if not specified, popup opens in the anchor point)
        shadowUrl: (String) (no shadow by default)
        shadowRetinaUrl: (String) (optional, used for retina devices if detected)
        shadowSize: (Point)
        shadowAnchor: (Point)
        */
        className: ''
      },
      initialize: function initialize(options) {
        L.setOptions(this, options);
      },
      createIcon: function createIcon(oldIcon) {
        return this._createIcon('icon', oldIcon);
      },
      createShadow: function createShadow(oldIcon) {
        return this._createIcon('shadow', oldIcon);
      },
      _createIcon: function _createIcon(name, oldIcon) {
        var src = this._getIconUrl(name);

        if (!src) {
          if (name === 'icon') {
            throw new Error('iconUrl not set in Icon options (see the docs).');
          }

          return null;
        }

        var img;

        if (!oldIcon || oldIcon.tagName !== 'IMG') {
          img = this._createImg(src);
        } else {
          img = this._createImg(src, oldIcon);
        }

        this._setIconStyles(img, name);

        return img;
      },
      _setIconStyles: function _setIconStyles(img, name) {
        var options = this.options,
            size = L.point(options[name + 'Size']),
            anchor;

        if (name === 'shadow') {
          anchor = L.point(options.shadowAnchor || options.iconAnchor);
        } else {
          anchor = L.point(options.iconAnchor);
        }

        if (!anchor && size) {
          anchor = size.divideBy(2, true);
        }

        img.className = 'leaflet-marker-' + name + ' ' + options.className;

        if (anchor) {
          img.style.marginLeft = -anchor.x + 'px';
          img.style.marginTop = -anchor.y + 'px';
        }

        if (size) {
          img.style.width = size.x + 'px';
          img.style.height = size.y + 'px';
        }
      },
      _createImg: function _createImg(src, el) {
        el = el || document.createElement('img');
        el.src = src;
        return el;
      },
      _getIconUrl: function _getIconUrl(name) {
        if (L.Browser.retina && this.options[name + 'RetinaUrl']) {
          return this.options[name + 'RetinaUrl'];
        }

        return this.options[name + 'Url'];
      }
    });

    L.icon = function (options) {
      return new L.Icon(options);
    };
    /*
     * L.Icon.Default is the blue marker icon used by default in Leaflet.
     */


    L.Icon.Default = L.Icon.extend({
      options: {
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      },
      _getIconUrl: function _getIconUrl(name) {
        var key = name + 'Url';

        if (this.options[key]) {
          return this.options[key];
        }

        if (L.Browser.retina && name === 'icon') {
          name += '-2x';
        }

        var path = L.Icon.Default.imagePath;

        if (!path) {
          throw new Error('Couldn\'t autodetect L.Icon.Default.imagePath, set it manually.');
        }

        return path + '/marker-' + name + '.png';
      }
    });

    L.Icon.Default.imagePath = function () {
      var scripts = document.getElementsByTagName('script'),
          leafletRe = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
      var i, len, src, matches, path;

      for (i = 0, len = scripts.length; i < len; i++) {
        src = scripts[i].src;
        matches = src.match(leafletRe);

        if (matches) {
          path = src.split(leafletRe)[0];
          return (path ? path + '/' : '') + 'images';
        }
      }
    }();
    /*
     * L.Marker is used to display clickable/draggable icons on the map.
     */


    L.Marker = L.Class.extend({
      includes: L.Mixin.Events,
      options: {
        icon: new L.Icon.Default(),
        title: '',
        alt: '',
        clickable: true,
        draggable: false,
        keyboard: true,
        zIndexOffset: 0,
        opacity: 1,
        riseOnHover: false,
        riseOffset: 250
      },
      initialize: function initialize(latlng, options) {
        L.setOptions(this, options);
        this._latlng = L.latLng(latlng);
      },
      onAdd: function onAdd(map) {
        this._map = map;
        map.on('viewreset', this.update, this);

        this._initIcon();

        this.update();
        this.fire('add');

        if (map.options.zoomAnimation && map.options.markerZoomAnimation) {
          map.on('zoomanim', this._animateZoom, this);
        }
      },
      addTo: function addTo(map) {
        map.addLayer(this);
        return this;
      },
      onRemove: function onRemove(map) {
        if (this.dragging) {
          this.dragging.disable();
        }

        this._removeIcon();

        this._removeShadow();

        this.fire('remove');
        map.off({
          'viewreset': this.update,
          'zoomanim': this._animateZoom
        }, this);
        this._map = null;
      },
      getLatLng: function getLatLng() {
        return this._latlng;
      },
      setLatLng: function setLatLng(latlng) {
        this._latlng = L.latLng(latlng);
        this.update();
        return this.fire('move', {
          latlng: this._latlng
        });
      },
      setZIndexOffset: function setZIndexOffset(offset) {
        this.options.zIndexOffset = offset;
        this.update();
        return this;
      },
      setIcon: function setIcon(icon) {
        this.options.icon = icon;

        if (this._map) {
          this._initIcon();

          this.update();
        }

        if (this._popup) {
          this.bindPopup(this._popup);
        }

        return this;
      },
      update: function update() {
        if (this._icon) {
          var pos = this._map.latLngToLayerPoint(this._latlng).round();

          this._setPos(pos);
        }

        return this;
      },
      _initIcon: function _initIcon() {
        var options = this.options,
            map = this._map,
            animation = map.options.zoomAnimation && map.options.markerZoomAnimation,
            classToAdd = animation ? 'leaflet-zoom-animated' : 'leaflet-zoom-hide';
        var icon = options.icon.createIcon(this._icon),
            addIcon = false; // if we're not reusing the icon, remove the old one and init new one

        if (icon !== this._icon) {
          if (this._icon) {
            this._removeIcon();
          }

          addIcon = true;

          if (options.title) {
            icon.title = options.title;
          }

          if (options.alt) {
            icon.alt = options.alt;
          }
        }

        L.DomUtil.addClass(icon, classToAdd);

        if (options.keyboard) {
          icon.tabIndex = '0';
        }

        this._icon = icon;

        this._initInteraction();

        if (options.riseOnHover) {
          L.DomEvent.on(icon, 'mouseover', this._bringToFront, this).on(icon, 'mouseout', this._resetZIndex, this);
        }

        var newShadow = options.icon.createShadow(this._shadow),
            addShadow = false;

        if (newShadow !== this._shadow) {
          this._removeShadow();

          addShadow = true;
        }

        if (newShadow) {
          L.DomUtil.addClass(newShadow, classToAdd);
        }

        this._shadow = newShadow;

        if (options.opacity < 1) {
          this._updateOpacity();
        }

        var panes = this._map._panes;

        if (addIcon) {
          panes.markerPane.appendChild(this._icon);
        }

        if (newShadow && addShadow) {
          panes.shadowPane.appendChild(this._shadow);
        }
      },
      _removeIcon: function _removeIcon() {
        if (this.options.riseOnHover) {
          L.DomEvent.off(this._icon, 'mouseover', this._bringToFront).off(this._icon, 'mouseout', this._resetZIndex);
        }

        this._map._panes.markerPane.removeChild(this._icon);

        this._icon = null;
      },
      _removeShadow: function _removeShadow() {
        if (this._shadow) {
          this._map._panes.shadowPane.removeChild(this._shadow);
        }

        this._shadow = null;
      },
      _setPos: function _setPos(pos) {
        L.DomUtil.setPosition(this._icon, pos);

        if (this._shadow) {
          L.DomUtil.setPosition(this._shadow, pos);
        }

        this._zIndex = pos.y + this.options.zIndexOffset;

        this._resetZIndex();
      },
      _updateZIndex: function _updateZIndex(offset) {
        this._icon.style.zIndex = this._zIndex + offset;
      },
      _animateZoom: function _animateZoom(opt) {
        var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

        this._setPos(pos);
      },
      _initInteraction: function _initInteraction() {
        if (!this.options.clickable) {
          return;
        } // TODO refactor into something shared with Map/Path/etc. to DRY it up


        var icon = this._icon,
            events = ['dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu'];
        L.DomUtil.addClass(icon, 'leaflet-clickable');
        L.DomEvent.on(icon, 'click', this._onMouseClick, this);
        L.DomEvent.on(icon, 'keypress', this._onKeyPress, this);

        for (var i = 0; i < events.length; i++) {
          L.DomEvent.on(icon, events[i], this._fireMouseEvent, this);
        }

        if (L.Handler.MarkerDrag) {
          this.dragging = new L.Handler.MarkerDrag(this);

          if (this.options.draggable) {
            this.dragging.enable();
          }
        }
      },
      _onMouseClick: function _onMouseClick(e) {
        var wasDragged = this.dragging && this.dragging.moved();

        if (this.hasEventListeners(e.type) || wasDragged) {
          L.DomEvent.stopPropagation(e);
        }

        if (wasDragged) {
          return;
        }

        if ((!this.dragging || !this.dragging._enabled) && this._map.dragging && this._map.dragging.moved()) {
          return;
        }

        this.fire(e.type, {
          originalEvent: e,
          latlng: this._latlng
        });
      },
      _onKeyPress: function _onKeyPress(e) {
        if (e.keyCode === 13) {
          this.fire('click', {
            originalEvent: e,
            latlng: this._latlng
          });
        }
      },
      _fireMouseEvent: function _fireMouseEvent(e) {
        this.fire(e.type, {
          originalEvent: e,
          latlng: this._latlng
        }); // TODO proper custom event propagation
        // this line will always be called if marker is in a FeatureGroup

        if (e.type === 'contextmenu' && this.hasEventListeners(e.type)) {
          L.DomEvent.preventDefault(e);
        }

        if (e.type !== 'mousedown') {
          L.DomEvent.stopPropagation(e);
        } else {
          L.DomEvent.preventDefault(e);
        }
      },
      setOpacity: function setOpacity(opacity) {
        this.options.opacity = opacity;

        if (this._map) {
          this._updateOpacity();
        }

        return this;
      },
      _updateOpacity: function _updateOpacity() {
        L.DomUtil.setOpacity(this._icon, this.options.opacity);

        if (this._shadow) {
          L.DomUtil.setOpacity(this._shadow, this.options.opacity);
        }
      },
      _bringToFront: function _bringToFront() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function _resetZIndex() {
        this._updateZIndex(0);
      }
    });

    L.marker = function (latlng, options) {
      return new L.Marker(latlng, options);
    };
    /*
     * L.DivIcon is a lightweight HTML-based icon class (as opposed to the image-based L.Icon)
     * to use with L.Marker.
     */


    L.DivIcon = L.Icon.extend({
      options: {
        iconSize: [12, 12],
        // also can be set through CSS

        /*
        iconAnchor: (Point)
        popupAnchor: (Point)
        html: (String)
        bgPos: (Point)
        */
        className: 'leaflet-div-icon',
        html: false
      },
      createIcon: function createIcon(oldIcon) {
        var div = oldIcon && oldIcon.tagName === 'DIV' ? oldIcon : document.createElement('div'),
            options = this.options;

        if (options.html !== false) {
          div.innerHTML = options.html;
        } else {
          div.innerHTML = '';
        }

        if (options.bgPos) {
          div.style.backgroundPosition = -options.bgPos.x + 'px ' + -options.bgPos.y + 'px';
        }

        this._setIconStyles(div, 'icon');

        return div;
      },
      createShadow: function createShadow() {
        return null;
      }
    });

    L.divIcon = function (options) {
      return new L.DivIcon(options);
    };
    /*
     * L.Popup is used for displaying popups on the map.
     */


    L.Map.mergeOptions({
      closePopupOnClick: true
    });
    L.Popup = L.Class.extend({
      includes: L.Mixin.Events,
      options: {
        minWidth: 50,
        maxWidth: 300,
        // maxHeight: null,
        autoPan: true,
        closeButton: true,
        offset: [0, 7],
        autoPanPadding: [5, 5],
        // autoPanPaddingTopLeft: null,
        // autoPanPaddingBottomRight: null,
        keepInView: false,
        className: '',
        zoomAnimation: true
      },
      initialize: function initialize(options, source) {
        L.setOptions(this, options);
        this._source = source;
        this._animated = L.Browser.any3d && this.options.zoomAnimation;
        this._isOpen = false;
      },
      onAdd: function onAdd(map) {
        this._map = map;

        if (!this._container) {
          this._initLayout();
        }

        var animFade = map.options.fadeAnimation;

        if (animFade) {
          L.DomUtil.setOpacity(this._container, 0);
        }

        map._panes.popupPane.appendChild(this._container);

        map.on(this._getEvents(), this);
        this.update();

        if (animFade) {
          L.DomUtil.setOpacity(this._container, 1);
        }

        this.fire('open');
        map.fire('popupopen', {
          popup: this
        });

        if (this._source) {
          this._source.fire('popupopen', {
            popup: this
          });
        }
      },
      addTo: function addTo(map) {
        map.addLayer(this);
        return this;
      },
      openOn: function openOn(map) {
        map.openPopup(this);
        return this;
      },
      onRemove: function onRemove(map) {
        map._panes.popupPane.removeChild(this._container);

        L.Util.falseFn(this._container.offsetWidth); // force reflow

        map.off(this._getEvents(), this);

        if (map.options.fadeAnimation) {
          L.DomUtil.setOpacity(this._container, 0);
        }

        this._map = null;
        this.fire('close');
        map.fire('popupclose', {
          popup: this
        });

        if (this._source) {
          this._source.fire('popupclose', {
            popup: this
          });
        }
      },
      getLatLng: function getLatLng() {
        return this._latlng;
      },
      setLatLng: function setLatLng(latlng) {
        this._latlng = L.latLng(latlng);

        if (this._map) {
          this._updatePosition();

          this._adjustPan();
        }

        return this;
      },
      getContent: function getContent() {
        return this._content;
      },
      setContent: function setContent(content) {
        this._content = content;
        this.update();
        return this;
      },
      update: function update() {
        if (!this._map) {
          return;
        }

        this._container.style.visibility = 'hidden';

        this._updateContent();

        this._updateLayout();

        this._updatePosition();

        this._container.style.visibility = '';

        this._adjustPan();
      },
      _getEvents: function _getEvents() {
        var events = {
          viewreset: this._updatePosition
        };

        if (this._animated) {
          events.zoomanim = this._zoomAnimation;
        }

        if ('closeOnClick' in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
          events.preclick = this._close;
        }

        if (this.options.keepInView) {
          events.moveend = this._adjustPan;
        }

        return events;
      },
      _close: function _close() {
        if (this._map) {
          this._map.closePopup(this);
        }
      },
      _initLayout: function _initLayout() {
        var prefix = 'leaflet-popup',
            containerClass = prefix + ' ' + this.options.className + ' leaflet-zoom-' + (this._animated ? 'animated' : 'hide'),
            container = this._container = L.DomUtil.create('div', containerClass),
            closeButton;

        if (this.options.closeButton) {
          closeButton = this._closeButton = L.DomUtil.create('a', prefix + '-close-button', container);
          closeButton.href = '#close';
          closeButton.innerHTML = '&#215;';
          L.DomEvent.disableClickPropagation(closeButton);
          L.DomEvent.on(closeButton, 'click', this._onCloseButtonClick, this);
        }

        var wrapper = this._wrapper = L.DomUtil.create('div', prefix + '-content-wrapper', container);
        L.DomEvent.disableClickPropagation(wrapper);
        this._contentNode = L.DomUtil.create('div', prefix + '-content', wrapper);
        L.DomEvent.disableScrollPropagation(this._contentNode);
        L.DomEvent.on(wrapper, 'contextmenu', L.DomEvent.stopPropagation);
        this._tipContainer = L.DomUtil.create('div', prefix + '-tip-container', container);
        this._tip = L.DomUtil.create('div', prefix + '-tip', this._tipContainer);
      },
      _updateContent: function _updateContent() {
        if (!this._content) {
          return;
        }

        if (typeof this._content === 'string') {
          this._contentNode.innerHTML = this._content;
        } else {
          while (this._contentNode.hasChildNodes()) {
            this._contentNode.removeChild(this._contentNode.firstChild);
          }

          this._contentNode.appendChild(this._content);
        }

        this.fire('contentupdate');
      },
      _updateLayout: function _updateLayout() {
        var container = this._contentNode,
            style = container.style;
        style.width = '';
        style.whiteSpace = 'nowrap';
        var width = container.offsetWidth;
        width = Math.min(width, this.options.maxWidth);
        width = Math.max(width, this.options.minWidth);
        style.width = width + 1 + 'px';
        style.whiteSpace = '';
        style.height = '';
        var height = container.offsetHeight,
            maxHeight = this.options.maxHeight,
            scrolledClass = 'leaflet-popup-scrolled';

        if (maxHeight && height > maxHeight) {
          style.height = maxHeight + 'px';
          L.DomUtil.addClass(container, scrolledClass);
        } else {
          L.DomUtil.removeClass(container, scrolledClass);
        }

        this._containerWidth = this._container.offsetWidth;
      },
      _updatePosition: function _updatePosition() {
        if (!this._map) {
          return;
        }

        var pos = this._map.latLngToLayerPoint(this._latlng),
            animated = this._animated,
            offset = L.point(this.options.offset);

        if (animated) {
          L.DomUtil.setPosition(this._container, pos);
        }

        this._containerBottom = -offset.y - (animated ? 0 : pos.y);
        this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x + (animated ? 0 : pos.x); // bottom position the popup in case the height of the popup changes (images loading etc)

        this._container.style.bottom = this._containerBottom + 'px';
        this._container.style.left = this._containerLeft + 'px';
      },
      _zoomAnimation: function _zoomAnimation(opt) {
        var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center);

        L.DomUtil.setPosition(this._container, pos);
      },
      _adjustPan: function _adjustPan() {
        if (!this.options.autoPan) {
          return;
        }

        var map = this._map,
            containerHeight = this._container.offsetHeight,
            containerWidth = this._containerWidth,
            layerPos = new L.Point(this._containerLeft, -containerHeight - this._containerBottom);

        if (this._animated) {
          layerPos._add(L.DomUtil.getPosition(this._container));
        }

        var containerPos = map.layerPointToContainerPoint(layerPos),
            padding = L.point(this.options.autoPanPadding),
            paddingTL = L.point(this.options.autoPanPaddingTopLeft || padding),
            paddingBR = L.point(this.options.autoPanPaddingBottomRight || padding),
            size = map.getSize(),
            dx = 0,
            dy = 0;

        if (containerPos.x + containerWidth + paddingBR.x > size.x) {
          // right
          dx = containerPos.x + containerWidth - size.x + paddingBR.x;
        }

        if (containerPos.x - dx - paddingTL.x < 0) {
          // left
          dx = containerPos.x - paddingTL.x;
        }

        if (containerPos.y + containerHeight + paddingBR.y > size.y) {
          // bottom
          dy = containerPos.y + containerHeight - size.y + paddingBR.y;
        }

        if (containerPos.y - dy - paddingTL.y < 0) {
          // top
          dy = containerPos.y - paddingTL.y;
        }

        if (dx || dy) {
          map.fire('autopanstart').panBy([dx, dy]);
        }
      },
      _onCloseButtonClick: function _onCloseButtonClick(e) {
        this._close();

        L.DomEvent.stop(e);
      }
    });

    L.popup = function (options, source) {
      return new L.Popup(options, source);
    };

    L.Map.include({
      openPopup: function openPopup(popup, latlng, options) {
        // (Popup) or (String || HTMLElement, LatLng[, Object])
        this.closePopup();

        if (!(popup instanceof L.Popup)) {
          var content = popup;
          popup = new L.Popup(options).setLatLng(latlng).setContent(content);
        }

        popup._isOpen = true;
        this._popup = popup;
        return this.addLayer(popup);
      },
      closePopup: function closePopup(popup) {
        if (!popup || popup === this._popup) {
          popup = this._popup;
          this._popup = null;
        }

        if (popup) {
          this.removeLayer(popup);
          popup._isOpen = false;
        }

        return this;
      }
    });
    /*
     * Popup extension to L.Marker, adding popup-related methods.
     */

    L.Marker.include({
      openPopup: function openPopup() {
        if (this._popup && this._map && !this._map.hasLayer(this._popup)) {
          this._popup.setLatLng(this._latlng);

          this._map.openPopup(this._popup);
        }

        return this;
      },
      closePopup: function closePopup() {
        if (this._popup) {
          this._popup._close();
        }

        return this;
      },
      togglePopup: function togglePopup() {
        if (this._popup) {
          if (this._popup._isOpen) {
            this.closePopup();
          } else {
            this.openPopup();
          }
        }

        return this;
      },
      bindPopup: function bindPopup(content, options) {
        var anchor = L.point(this.options.icon.options.popupAnchor || [0, 0]);
        anchor = anchor.add(L.Popup.prototype.options.offset);

        if (options && options.offset) {
          anchor = anchor.add(options.offset);
        }

        options = L.extend({
          offset: anchor
        }, options);

        if (!this._popupHandlersAdded) {
          this.on('click', this.togglePopup, this).on('remove', this.closePopup, this).on('move', this._movePopup, this);
          this._popupHandlersAdded = true;
        }

        if (content instanceof L.Popup) {
          L.setOptions(content, options);
          this._popup = content;
        } else {
          this._popup = new L.Popup(options, this).setContent(content);
        }

        return this;
      },
      setPopupContent: function setPopupContent(content) {
        if (this._popup) {
          this._popup.setContent(content);
        }

        return this;
      },
      unbindPopup: function unbindPopup() {
        if (this._popup) {
          this._popup = null;
          this.off('click', this.togglePopup, this).off('remove', this.closePopup, this).off('move', this._movePopup, this);
          this._popupHandlersAdded = false;
        }

        return this;
      },
      getPopup: function getPopup() {
        return this._popup;
      },
      _movePopup: function _movePopup(e) {
        this._popup.setLatLng(e.latlng);
      }
    });
    /*
     * L.LayerGroup is a class to combine several layers into one so that
     * you can manipulate the group (e.g. add/remove it) as one layer.
     */

    L.LayerGroup = L.Class.extend({
      initialize: function initialize(layers) {
        this._layers = {};
        var i, len;

        if (layers) {
          for (i = 0, len = layers.length; i < len; i++) {
            this.addLayer(layers[i]);
          }
        }
      },
      addLayer: function addLayer(layer) {
        var id = this.getLayerId(layer);
        this._layers[id] = layer;

        if (this._map) {
          this._map.addLayer(layer);
        }

        return this;
      },
      removeLayer: function removeLayer(layer) {
        var id = layer in this._layers ? layer : this.getLayerId(layer);

        if (this._map && this._layers[id]) {
          this._map.removeLayer(this._layers[id]);
        }

        delete this._layers[id];
        return this;
      },
      hasLayer: function hasLayer(layer) {
        if (!layer) {
          return false;
        }

        return layer in this._layers || this.getLayerId(layer) in this._layers;
      },
      clearLayers: function clearLayers() {
        this.eachLayer(this.removeLayer, this);
        return this;
      },
      invoke: function invoke(methodName) {
        var args = Array.prototype.slice.call(arguments, 1),
            i,
            layer;

        for (i in this._layers) {
          layer = this._layers[i];

          if (layer[methodName]) {
            layer[methodName].apply(layer, args);
          }
        }

        return this;
      },
      onAdd: function onAdd(map) {
        this._map = map;
        this.eachLayer(map.addLayer, map);
      },
      onRemove: function onRemove(map) {
        this.eachLayer(map.removeLayer, map);
        this._map = null;
      },
      addTo: function addTo(map) {
        map.addLayer(this);
        return this;
      },
      eachLayer: function eachLayer(method, context) {
        for (var i in this._layers) {
          method.call(context, this._layers[i]);
        }

        return this;
      },
      getLayer: function getLayer(id) {
        return this._layers[id];
      },
      getLayers: function getLayers() {
        var layers = [];

        for (var i in this._layers) {
          layers.push(this._layers[i]);
        }

        return layers;
      },
      setZIndex: function setZIndex(zIndex) {
        return this.invoke('setZIndex', zIndex);
      },
      getLayerId: function getLayerId(layer) {
        return L.stamp(layer);
      }
    });

    L.layerGroup = function (layers) {
      return new L.LayerGroup(layers);
    };
    /*
     * L.FeatureGroup extends L.LayerGroup by introducing mouse events and additional methods
     * shared between a group of interactive layers (like vectors or markers).
     */


    L.FeatureGroup = L.LayerGroup.extend({
      includes: L.Mixin.Events,
      statics: {
        EVENTS: 'click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose'
      },
      addLayer: function addLayer(layer) {
        if (this.hasLayer(layer)) {
          return this;
        }

        if ('on' in layer) {
          layer.on(L.FeatureGroup.EVENTS, this._propagateEvent, this);
        }

        L.LayerGroup.prototype.addLayer.call(this, layer);

        if (this._popupContent && layer.bindPopup) {
          layer.bindPopup(this._popupContent, this._popupOptions);
        }

        return this.fire('layeradd', {
          layer: layer
        });
      },
      removeLayer: function removeLayer(layer) {
        if (!this.hasLayer(layer)) {
          return this;
        }

        if (layer in this._layers) {
          layer = this._layers[layer];
        }

        layer.off(L.FeatureGroup.EVENTS, this._propagateEvent, this);
        L.LayerGroup.prototype.removeLayer.call(this, layer);

        if (this._popupContent) {
          this.invoke('unbindPopup');
        }

        return this.fire('layerremove', {
          layer: layer
        });
      },
      bindPopup: function bindPopup(content, options) {
        this._popupContent = content;
        this._popupOptions = options;
        return this.invoke('bindPopup', content, options);
      },
      openPopup: function openPopup(latlng) {
        // open popup on the first layer
        for (var id in this._layers) {
          this._layers[id].openPopup(latlng);

          break;
        }

        return this;
      },
      setStyle: function setStyle(style) {
        return this.invoke('setStyle', style);
      },
      bringToFront: function bringToFront() {
        return this.invoke('bringToFront');
      },
      bringToBack: function bringToBack() {
        return this.invoke('bringToBack');
      },
      getBounds: function getBounds() {
        var bounds = new L.LatLngBounds();
        this.eachLayer(function (layer) {
          bounds.extend(layer instanceof L.Marker ? layer.getLatLng() : layer.getBounds());
        });
        return bounds;
      },
      _propagateEvent: function _propagateEvent(e) {
        e = L.extend({
          layer: e.target,
          target: this
        }, e);
        this.fire(e.type, e);
      }
    });

    L.featureGroup = function (layers) {
      return new L.FeatureGroup(layers);
    };
    /*
     * L.Path is a base class for rendering vector paths on a map. Inherited by Polyline, Circle, etc.
     */


    L.Path = L.Class.extend({
      includes: [L.Mixin.Events],
      statics: {
        // how much to extend the clip area around the map view
        // (relative to its size, e.g. 0.5 is half the screen in each direction)
        // set it so that SVG element doesn't exceed 1280px (vectors flicker on dragend if it is)
        CLIP_PADDING: function () {
          var max = L.Browser.mobile ? 1280 : 2000,
              target = (max / Math.max(window.outerWidth, window.outerHeight) - 1) / 2;
          return Math.max(0, Math.min(0.5, target));
        }()
      },
      options: {
        stroke: true,
        color: '#0033ff',
        dashArray: null,
        lineCap: null,
        lineJoin: null,
        weight: 5,
        opacity: 0.5,
        fill: false,
        fillColor: null,
        //same as color by default
        fillOpacity: 0.2,
        clickable: true
      },
      initialize: function initialize(options) {
        L.setOptions(this, options);
      },
      onAdd: function onAdd(map) {
        this._map = map;

        if (!this._container) {
          this._initElements();

          this._initEvents();
        }

        this.projectLatlngs();

        this._updatePath();

        if (this._container) {
          this._map._pathRoot.appendChild(this._container);
        }

        this.fire('add');
        map.on({
          'viewreset': this.projectLatlngs,
          'moveend': this._updatePath
        }, this);
      },
      addTo: function addTo(map) {
        map.addLayer(this);
        return this;
      },
      onRemove: function onRemove(map) {
        map._pathRoot.removeChild(this._container); // Need to fire remove event before we set _map to null as the event hooks might need the object


        this.fire('remove');
        this._map = null;

        if (L.Browser.vml) {
          this._container = null;
          this._stroke = null;
          this._fill = null;
        }

        map.off({
          'viewreset': this.projectLatlngs,
          'moveend': this._updatePath
        }, this);
      },
      projectLatlngs: function projectLatlngs() {// do all projection stuff here
      },
      setStyle: function setStyle(style) {
        L.setOptions(this, style);

        if (this._container) {
          this._updateStyle();
        }

        return this;
      },
      redraw: function redraw() {
        if (this._map) {
          this.projectLatlngs();

          this._updatePath();
        }

        return this;
      }
    });
    L.Map.include({
      _updatePathViewport: function _updatePathViewport() {
        var p = L.Path.CLIP_PADDING,
            size = this.getSize(),
            panePos = L.DomUtil.getPosition(this._mapPane),
            min = panePos.multiplyBy(-1)._subtract(size.multiplyBy(p)._round()),
            max = min.add(size.multiplyBy(1 + p * 2)._round());

        this._pathViewport = new L.Bounds(min, max);
      }
    });
    /*
     * Extends L.Path with SVG-specific rendering code.
     */

    L.Path.SVG_NS = 'http://www.w3.org/2000/svg';
    L.Browser.svg = !!(document.createElementNS && document.createElementNS(L.Path.SVG_NS, 'svg').createSVGRect);
    L.Path = L.Path.extend({
      statics: {
        SVG: L.Browser.svg
      },
      bringToFront: function bringToFront() {
        var root = this._map._pathRoot,
            path = this._container;

        if (path && root.lastChild !== path) {
          root.appendChild(path);
        }

        return this;
      },
      bringToBack: function bringToBack() {
        var root = this._map._pathRoot,
            path = this._container,
            first = root.firstChild;

        if (path && first !== path) {
          root.insertBefore(path, first);
        }

        return this;
      },
      getPathString: function getPathString() {// form path string here
      },
      _createElement: function _createElement(name) {
        return document.createElementNS(L.Path.SVG_NS, name);
      },
      _initElements: function _initElements() {
        this._map._initPathRoot();

        this._initPath();

        this._initStyle();
      },
      _initPath: function _initPath() {
        this._container = this._createElement('g');
        this._path = this._createElement('path');

        if (this.options.className) {
          L.DomUtil.addClass(this._path, this.options.className);
        }

        this._container.appendChild(this._path);
      },
      _initStyle: function _initStyle() {
        if (this.options.stroke) {
          this._path.setAttribute('stroke-linejoin', 'round');

          this._path.setAttribute('stroke-linecap', 'round');
        }

        if (this.options.fill) {
          this._path.setAttribute('fill-rule', 'evenodd');
        }

        if (this.options.pointerEvents) {
          this._path.setAttribute('pointer-events', this.options.pointerEvents);
        }

        if (!this.options.clickable && !this.options.pointerEvents) {
          this._path.setAttribute('pointer-events', 'none');
        }

        this._updateStyle();
      },
      _updateStyle: function _updateStyle() {
        if (this.options.stroke) {
          this._path.setAttribute('stroke', this.options.color);

          this._path.setAttribute('stroke-opacity', this.options.opacity);

          this._path.setAttribute('stroke-width', this.options.weight);

          if (this.options.dashArray) {
            this._path.setAttribute('stroke-dasharray', this.options.dashArray);
          } else {
            this._path.removeAttribute('stroke-dasharray');
          }

          if (this.options.lineCap) {
            this._path.setAttribute('stroke-linecap', this.options.lineCap);
          }

          if (this.options.lineJoin) {
            this._path.setAttribute('stroke-linejoin', this.options.lineJoin);
          }
        } else {
          this._path.setAttribute('stroke', 'none');
        }

        if (this.options.fill) {
          this._path.setAttribute('fill', this.options.fillColor || this.options.color);

          this._path.setAttribute('fill-opacity', this.options.fillOpacity);
        } else {
          this._path.setAttribute('fill', 'none');
        }
      },
      _updatePath: function _updatePath() {
        var str = this.getPathString();

        if (!str) {
          // fix webkit empty string parsing bug
          str = 'M0 0';
        }

        this._path.setAttribute('d', str);
      },
      // TODO remove duplication with L.Map
      _initEvents: function _initEvents() {
        if (this.options.clickable) {
          if (L.Browser.svg || !L.Browser.vml) {
            L.DomUtil.addClass(this._path, 'leaflet-clickable');
          }

          L.DomEvent.on(this._container, 'click', this._onMouseClick, this);
          var events = ['dblclick', 'mousedown', 'mouseover', 'mouseout', 'mousemove', 'contextmenu'];

          for (var i = 0; i < events.length; i++) {
            L.DomEvent.on(this._container, events[i], this._fireMouseEvent, this);
          }
        }
      },
      _onMouseClick: function _onMouseClick(e) {
        if (this._map.dragging && this._map.dragging.moved()) {
          return;
        }

        this._fireMouseEvent(e);
      },
      _fireMouseEvent: function _fireMouseEvent(e) {
        if (!this.hasEventListeners(e.type)) {
          return;
        }

        var map = this._map,
            containerPoint = map.mouseEventToContainerPoint(e),
            layerPoint = map.containerPointToLayerPoint(containerPoint),
            latlng = map.layerPointToLatLng(layerPoint);
        this.fire(e.type, {
          latlng: latlng,
          layerPoint: layerPoint,
          containerPoint: containerPoint,
          originalEvent: e
        });

        if (e.type === 'contextmenu') {
          L.DomEvent.preventDefault(e);
        }

        if (e.type !== 'mousemove') {
          L.DomEvent.stopPropagation(e);
        }
      }
    });
    L.Map.include({
      _initPathRoot: function _initPathRoot() {
        if (!this._pathRoot) {
          this._pathRoot = L.Path.prototype._createElement('svg');

          this._panes.overlayPane.appendChild(this._pathRoot);

          if (this.options.zoomAnimation && L.Browser.any3d) {
            L.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-animated');
            this.on({
              'zoomanim': this._animatePathZoom,
              'zoomend': this._endPathZoom
            });
          } else {
            L.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-hide');
          }

          this.on('moveend', this._updateSvgViewport);

          this._updateSvgViewport();
        }
      },
      _animatePathZoom: function _animatePathZoom(e) {
        var scale = this.getZoomScale(e.zoom),
            offset = this._getCenterOffset(e.center)._multiplyBy(-scale)._add(this._pathViewport.min);

        this._pathRoot.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(offset) + ' scale(' + scale + ') ';
        this._pathZooming = true;
      },
      _endPathZoom: function _endPathZoom() {
        this._pathZooming = false;
      },
      _updateSvgViewport: function _updateSvgViewport() {
        if (this._pathZooming) {
          // Do not update SVGs while a zoom animation is going on otherwise the animation will break.
          // When the zoom animation ends we will be updated again anyway
          // This fixes the case where you do a momentum move and zoom while the move is still ongoing.
          return;
        }

        this._updatePathViewport();

        var vp = this._pathViewport,
            min = vp.min,
            max = vp.max,
            width = max.x - min.x,
            height = max.y - min.y,
            root = this._pathRoot,
            pane = this._panes.overlayPane; // Hack to make flicker on drag end on mobile webkit less irritating

        if (L.Browser.mobileWebkit) {
          pane.removeChild(root);
        }

        L.DomUtil.setPosition(root, min);
        root.setAttribute('width', width);
        root.setAttribute('height', height);
        root.setAttribute('viewBox', [min.x, min.y, width, height].join(' '));

        if (L.Browser.mobileWebkit) {
          pane.appendChild(root);
        }
      }
    });
    /*
     * Popup extension to L.Path (polylines, polygons, circles), adding popup-related methods.
     */

    L.Path.include({
      bindPopup: function bindPopup(content, options) {
        if (content instanceof L.Popup) {
          this._popup = content;
        } else {
          if (!this._popup || options) {
            this._popup = new L.Popup(options, this);
          }

          this._popup.setContent(content);
        }

        if (!this._popupHandlersAdded) {
          this.on('click', this._openPopup, this).on('remove', this.closePopup, this);
          this._popupHandlersAdded = true;
        }

        return this;
      },
      unbindPopup: function unbindPopup() {
        if (this._popup) {
          this._popup = null;
          this.off('click', this._openPopup).off('remove', this.closePopup);
          this._popupHandlersAdded = false;
        }

        return this;
      },
      openPopup: function openPopup(latlng) {
        if (this._popup) {
          // open the popup from one of the path's points if not specified
          latlng = latlng || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)];

          this._openPopup({
            latlng: latlng
          });
        }

        return this;
      },
      closePopup: function closePopup() {
        if (this._popup) {
          this._popup._close();
        }

        return this;
      },
      _openPopup: function _openPopup(e) {
        this._popup.setLatLng(e.latlng);

        this._map.openPopup(this._popup);
      }
    });
    /*
     * Vector rendering for IE6-8 through VML.
     * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
     */

    L.Browser.vml = !L.Browser.svg && function () {
      try {
        var div = document.createElement('div');
        div.innerHTML = '<v:shape adj="1"/>';
        var shape = div.firstChild;
        shape.style.behavior = 'url(#default#VML)';
        return shape && typeof shape.adj === 'object';
      } catch (e) {
        return false;
      }
    }();

    L.Path = L.Browser.svg || !L.Browser.vml ? L.Path : L.Path.extend({
      statics: {
        VML: true,
        CLIP_PADDING: 0.02
      },
      _createElement: function () {
        try {
          document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
          return function (name) {
            return document.createElement('<lvml:' + name + ' class="lvml">');
          };
        } catch (e) {
          return function (name) {
            return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
          };
        }
      }(),
      _initPath: function _initPath() {
        var container = this._container = this._createElement('shape');

        L.DomUtil.addClass(container, 'leaflet-vml-shape' + (this.options.className ? ' ' + this.options.className : ''));

        if (this.options.clickable) {
          L.DomUtil.addClass(container, 'leaflet-clickable');
        }

        container.coordsize = '1 1';
        this._path = this._createElement('path');
        container.appendChild(this._path);

        this._map._pathRoot.appendChild(container);
      },
      _initStyle: function _initStyle() {
        this._updateStyle();
      },
      _updateStyle: function _updateStyle() {
        var stroke = this._stroke,
            fill = this._fill,
            options = this.options,
            container = this._container;
        container.stroked = options.stroke;
        container.filled = options.fill;

        if (options.stroke) {
          if (!stroke) {
            stroke = this._stroke = this._createElement('stroke');
            stroke.endcap = 'round';
            container.appendChild(stroke);
          }

          stroke.weight = options.weight + 'px';
          stroke.color = options.color;
          stroke.opacity = options.opacity;

          if (options.dashArray) {
            stroke.dashStyle = L.Util.isArray(options.dashArray) ? options.dashArray.join(' ') : options.dashArray.replace(/( *, *)/g, ' ');
          } else {
            stroke.dashStyle = '';
          }

          if (options.lineCap) {
            stroke.endcap = options.lineCap.replace('butt', 'flat');
          }

          if (options.lineJoin) {
            stroke.joinstyle = options.lineJoin;
          }
        } else if (stroke) {
          container.removeChild(stroke);
          this._stroke = null;
        }

        if (options.fill) {
          if (!fill) {
            fill = this._fill = this._createElement('fill');
            container.appendChild(fill);
          }

          fill.color = options.fillColor || options.color;
          fill.opacity = options.fillOpacity;
        } else if (fill) {
          container.removeChild(fill);
          this._fill = null;
        }
      },
      _updatePath: function _updatePath() {
        var style = this._container.style;
        style.display = 'none';
        this._path.v = this.getPathString() + ' '; // the space fixes IE empty path string bug

        style.display = '';
      }
    });
    L.Map.include(L.Browser.svg || !L.Browser.vml ? {} : {
      _initPathRoot: function _initPathRoot() {
        if (this._pathRoot) {
          return;
        }

        var root = this._pathRoot = document.createElement('div');
        root.className = 'leaflet-vml-container';

        this._panes.overlayPane.appendChild(root);

        this.on('moveend', this._updatePathViewport);

        this._updatePathViewport();
      }
    });
    /*
     * Vector rendering for all browsers that support canvas.
     */

    L.Browser.canvas = function () {
      return !!document.createElement('canvas').getContext;
    }();

    L.Path = L.Path.SVG && !window.L_PREFER_CANVAS || !L.Browser.canvas ? L.Path : L.Path.extend({
      statics: {
        //CLIP_PADDING: 0.02, // not sure if there's a need to set it to a small value
        CANVAS: true,
        SVG: false
      },
      redraw: function redraw() {
        if (this._map) {
          this.projectLatlngs();

          this._requestUpdate();
        }

        return this;
      },
      setStyle: function setStyle(style) {
        L.setOptions(this, style);

        if (this._map) {
          this._updateStyle();

          this._requestUpdate();
        }

        return this;
      },
      onRemove: function onRemove(map) {
        map.off('viewreset', this.projectLatlngs, this).off('moveend', this._updatePath, this);

        if (this.options.clickable) {
          this._map.off('click', this._onClick, this);

          this._map.off('mousemove', this._onMouseMove, this);
        }

        this._requestUpdate();

        this._map = null;
      },
      _requestUpdate: function _requestUpdate() {
        if (this._map && !L.Path._updateRequest) {
          L.Path._updateRequest = L.Util.requestAnimFrame(this._fireMapMoveEnd, this._map);
        }
      },
      _fireMapMoveEnd: function _fireMapMoveEnd() {
        L.Path._updateRequest = null;
        this.fire('moveend');
      },
      _initElements: function _initElements() {
        this._map._initPathRoot();

        this._ctx = this._map._canvasCtx;
      },
      _updateStyle: function _updateStyle() {
        var options = this.options;

        if (options.stroke) {
          this._ctx.lineWidth = options.weight;
          this._ctx.strokeStyle = options.color;
        }

        if (options.fill) {
          this._ctx.fillStyle = options.fillColor || options.color;
        }
      },
      _drawPath: function _drawPath() {
        var i, j, len, len2, point, drawMethod;

        this._ctx.beginPath();

        for (i = 0, len = this._parts.length; i < len; i++) {
          for (j = 0, len2 = this._parts[i].length; j < len2; j++) {
            point = this._parts[i][j];
            drawMethod = (j === 0 ? 'move' : 'line') + 'To';

            this._ctx[drawMethod](point.x, point.y);
          } // TODO refactor ugly hack


          if (this instanceof L.Polygon) {
            this._ctx.closePath();
          }
        }
      },
      _checkIfEmpty: function _checkIfEmpty() {
        return !this._parts.length;
      },
      _updatePath: function _updatePath() {
        if (this._checkIfEmpty()) {
          return;
        }

        var ctx = this._ctx,
            options = this.options;

        this._drawPath();

        ctx.save();

        this._updateStyle();

        if (options.fill) {
          ctx.globalAlpha = options.fillOpacity;
          ctx.fill();
        }

        if (options.stroke) {
          ctx.globalAlpha = options.opacity;
          ctx.stroke();
        }

        ctx.restore(); // TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
      },
      _initEvents: function _initEvents() {
        if (this.options.clickable) {
          // TODO dblclick
          this._map.on('mousemove', this._onMouseMove, this);

          this._map.on('click', this._onClick, this);
        }
      },
      _onClick: function _onClick(e) {
        if (this._containsPoint(e.layerPoint)) {
          this.fire('click', e);
        }
      },
      _onMouseMove: function _onMouseMove(e) {
        if (!this._map || this._map._animatingZoom) {
          return;
        } // TODO don't do on each move


        if (this._containsPoint(e.layerPoint)) {
          this._ctx.canvas.style.cursor = 'pointer';
          this._mouseInside = true;
          this.fire('mouseover', e);
        } else if (this._mouseInside) {
          this._ctx.canvas.style.cursor = '';
          this._mouseInside = false;
          this.fire('mouseout', e);
        }
      }
    });
    L.Map.include(L.Path.SVG && !window.L_PREFER_CANVAS || !L.Browser.canvas ? {} : {
      _initPathRoot: function _initPathRoot() {
        var root = this._pathRoot,
            ctx;

        if (!root) {
          root = this._pathRoot = document.createElement('canvas');
          root.style.position = 'absolute';
          ctx = this._canvasCtx = root.getContext('2d');
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';

          this._panes.overlayPane.appendChild(root);

          if (this.options.zoomAnimation) {
            this._pathRoot.className = 'leaflet-zoom-animated';
            this.on('zoomanim', this._animatePathZoom);
            this.on('zoomend', this._endPathZoom);
          }

          this.on('moveend', this._updateCanvasViewport);

          this._updateCanvasViewport();
        }
      },
      _updateCanvasViewport: function _updateCanvasViewport() {
        // don't redraw while zooming. See _updateSvgViewport for more details
        if (this._pathZooming) {
          return;
        }

        this._updatePathViewport();

        var vp = this._pathViewport,
            min = vp.min,
            size = vp.max.subtract(min),
            root = this._pathRoot; //TODO check if this works properly on mobile webkit

        L.DomUtil.setPosition(root, min);
        root.width = size.x;
        root.height = size.y;
        root.getContext('2d').translate(-min.x, -min.y);
      }
    });
    /*
     * L.LineUtil contains different utility functions for line segments
     * and polylines (clipping, simplification, distances, etc.)
     */

    /*jshint bitwise:false */
    // allow bitwise operations for this file

    L.LineUtil = {
      // Simplify polyline with vertex reduction and Douglas-Peucker simplification.
      // Improves rendering performance dramatically by lessening the number of points to draw.
      simplify: function simplify(
      /*Point[]*/
      points,
      /*Number*/
      tolerance) {
        if (!tolerance || !points.length) {
          return points.slice();
        }

        var sqTolerance = tolerance * tolerance; // stage 1: vertex reduction

        points = this._reducePoints(points, sqTolerance); // stage 2: Douglas-Peucker simplification

        points = this._simplifyDP(points, sqTolerance);
        return points;
      },
      // distance from a point to a segment between two points
      pointToSegmentDistance: function pointToSegmentDistance(
      /*Point*/
      p,
      /*Point*/
      p1,
      /*Point*/
      p2) {
        return Math.sqrt(this._sqClosestPointOnSegment(p, p1, p2, true));
      },
      closestPointOnSegment: function closestPointOnSegment(
      /*Point*/
      p,
      /*Point*/
      p1,
      /*Point*/
      p2) {
        return this._sqClosestPointOnSegment(p, p1, p2);
      },
      // Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
      _simplifyDP: function _simplifyDP(points, sqTolerance) {
        var len = points.length,
            ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
            markers = new ArrayConstructor(len);
        markers[0] = markers[len - 1] = 1;

        this._simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

        var i,
            newPoints = [];

        for (i = 0; i < len; i++) {
          if (markers[i]) {
            newPoints.push(points[i]);
          }
        }

        return newPoints;
      },
      _simplifyDPStep: function _simplifyDPStep(points, markers, sqTolerance, first, last) {
        var maxSqDist = 0,
            index,
            i,
            sqDist;

        for (i = first + 1; i <= last - 1; i++) {
          sqDist = this._sqClosestPointOnSegment(points[i], points[first], points[last], true);

          if (sqDist > maxSqDist) {
            index = i;
            maxSqDist = sqDist;
          }
        }

        if (maxSqDist > sqTolerance) {
          markers[index] = 1;

          this._simplifyDPStep(points, markers, sqTolerance, first, index);

          this._simplifyDPStep(points, markers, sqTolerance, index, last);
        }
      },
      // reduce points that are too close to each other to a single point
      _reducePoints: function _reducePoints(points, sqTolerance) {
        var reducedPoints = [points[0]];

        for (var i = 1, prev = 0, len = points.length; i < len; i++) {
          if (this._sqDist(points[i], points[prev]) > sqTolerance) {
            reducedPoints.push(points[i]);
            prev = i;
          }
        }

        if (prev < len - 1) {
          reducedPoints.push(points[len - 1]);
        }

        return reducedPoints;
      },
      // Cohen-Sutherland line clipping algorithm.
      // Used to avoid rendering parts of a polyline that are not currently visible.
      clipSegment: function clipSegment(a, b, bounds, useLastCode) {
        var codeA = useLastCode ? this._lastCode : this._getBitCode(a, bounds),
            codeB = this._getBitCode(b, bounds),
            codeOut,
            p,
            newCode; // save 2nd code to avoid calculating it on the next segment


        this._lastCode = codeB;

        while (true) {
          // if a,b is inside the clip window (trivial accept)
          if (!(codeA | codeB)) {
            return [a, b]; // if a,b is outside the clip window (trivial reject)
          } else if (codeA & codeB) {
            return false; // other cases
          } else {
            codeOut = codeA || codeB;
            p = this._getEdgeIntersection(a, b, codeOut, bounds);
            newCode = this._getBitCode(p, bounds);

            if (codeOut === codeA) {
              a = p;
              codeA = newCode;
            } else {
              b = p;
              codeB = newCode;
            }
          }
        }
      },
      _getEdgeIntersection: function _getEdgeIntersection(a, b, code, bounds) {
        var dx = b.x - a.x,
            dy = b.y - a.y,
            min = bounds.min,
            max = bounds.max;

        if (code & 8) {
          // top
          return new L.Point(a.x + dx * (max.y - a.y) / dy, max.y);
        } else if (code & 4) {
          // bottom
          return new L.Point(a.x + dx * (min.y - a.y) / dy, min.y);
        } else if (code & 2) {
          // right
          return new L.Point(max.x, a.y + dy * (max.x - a.x) / dx);
        } else if (code & 1) {
          // left
          return new L.Point(min.x, a.y + dy * (min.x - a.x) / dx);
        }
      },
      _getBitCode: function _getBitCode(
      /*Point*/
      p, bounds) {
        var code = 0;

        if (p.x < bounds.min.x) {
          // left
          code |= 1;
        } else if (p.x > bounds.max.x) {
          // right
          code |= 2;
        }

        if (p.y < bounds.min.y) {
          // bottom
          code |= 4;
        } else if (p.y > bounds.max.y) {
          // top
          code |= 8;
        }

        return code;
      },
      // square distance (to avoid unnecessary Math.sqrt calls)
      _sqDist: function _sqDist(p1, p2) {
        var dx = p2.x - p1.x,
            dy = p2.y - p1.y;
        return dx * dx + dy * dy;
      },
      // return closest point on segment or distance to that point
      _sqClosestPointOnSegment: function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
        var x = p1.x,
            y = p1.y,
            dx = p2.x - x,
            dy = p2.y - y,
            dot = dx * dx + dy * dy,
            t;

        if (dot > 0) {
          t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

          if (t > 1) {
            x = p2.x;
            y = p2.y;
          } else if (t > 0) {
            x += dx * t;
            y += dy * t;
          }
        }

        dx = p.x - x;
        dy = p.y - y;
        return sqDist ? dx * dx + dy * dy : new L.Point(x, y);
      }
    };
    /*
     * L.Polyline is used to display polylines on a map.
     */

    L.Polyline = L.Path.extend({
      initialize: function initialize(latlngs, options) {
        L.Path.prototype.initialize.call(this, options);
        this._latlngs = this._convertLatLngs(latlngs);
      },
      options: {
        // how much to simplify the polyline on each zoom level
        // more = better performance and smoother look, less = more accurate
        smoothFactor: 1.0,
        noClip: false
      },
      projectLatlngs: function projectLatlngs() {
        this._originalPoints = [];

        for (var i = 0, len = this._latlngs.length; i < len; i++) {
          this._originalPoints[i] = this._map.latLngToLayerPoint(this._latlngs[i]);
        }
      },
      getPathString: function getPathString() {
        for (var i = 0, len = this._parts.length, str = ''; i < len; i++) {
          str += this._getPathPartStr(this._parts[i]);
        }

        return str;
      },
      getLatLngs: function getLatLngs() {
        return this._latlngs;
      },
      setLatLngs: function setLatLngs(latlngs) {
        this._latlngs = this._convertLatLngs(latlngs);
        return this.redraw();
      },
      addLatLng: function addLatLng(latlng) {
        this._latlngs.push(L.latLng(latlng));

        return this.redraw();
      },
      spliceLatLngs: function spliceLatLngs() {
        // (Number index, Number howMany)
        var removed = [].splice.apply(this._latlngs, arguments);

        this._convertLatLngs(this._latlngs, true);

        this.redraw();
        return removed;
      },
      closestLayerPoint: function closestLayerPoint(p) {
        var minDistance = Infinity,
            parts = this._parts,
            p1,
            p2,
            minPoint = null;

        for (var j = 0, jLen = parts.length; j < jLen; j++) {
          var points = parts[j];

          for (var i = 1, len = points.length; i < len; i++) {
            p1 = points[i - 1];
            p2 = points[i];

            var sqDist = L.LineUtil._sqClosestPointOnSegment(p, p1, p2, true);

            if (sqDist < minDistance) {
              minDistance = sqDist;
              minPoint = L.LineUtil._sqClosestPointOnSegment(p, p1, p2);
            }
          }
        }

        if (minPoint) {
          minPoint.distance = Math.sqrt(minDistance);
        }

        return minPoint;
      },
      getBounds: function getBounds() {
        return new L.LatLngBounds(this.getLatLngs());
      },
      _convertLatLngs: function _convertLatLngs(latlngs, overwrite) {
        var i,
            len,
            target = overwrite ? latlngs : [];

        for (i = 0, len = latlngs.length; i < len; i++) {
          if (L.Util.isArray(latlngs[i]) && typeof latlngs[i][0] !== 'number') {
            return;
          }

          target[i] = L.latLng(latlngs[i]);
        }

        return target;
      },
      _initEvents: function _initEvents() {
        L.Path.prototype._initEvents.call(this);
      },
      _getPathPartStr: function _getPathPartStr(points) {
        var round = L.Path.VML;

        for (var j = 0, len2 = points.length, str = '', p; j < len2; j++) {
          p = points[j];

          if (round) {
            p._round();
          }

          str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
        }

        return str;
      },
      _clipPoints: function _clipPoints() {
        var points = this._originalPoints,
            len = points.length,
            i,
            k,
            segment;

        if (this.options.noClip) {
          this._parts = [points];
          return;
        }

        this._parts = [];
        var parts = this._parts,
            vp = this._map._pathViewport,
            lu = L.LineUtil;

        for (i = 0, k = 0; i < len - 1; i++) {
          segment = lu.clipSegment(points[i], points[i + 1], vp, i);

          if (!segment) {
            continue;
          }

          parts[k] = parts[k] || [];
          parts[k].push(segment[0]); // if segment goes out of screen, or it's the last one, it's the end of the line part

          if (segment[1] !== points[i + 1] || i === len - 2) {
            parts[k].push(segment[1]);
            k++;
          }
        }
      },
      // simplify each clipped part of the polyline
      _simplifyPoints: function _simplifyPoints() {
        var parts = this._parts,
            lu = L.LineUtil;

        for (var i = 0, len = parts.length; i < len; i++) {
          parts[i] = lu.simplify(parts[i], this.options.smoothFactor);
        }
      },
      _updatePath: function _updatePath() {
        if (!this._map) {
          return;
        }

        this._clipPoints();

        this._simplifyPoints();

        L.Path.prototype._updatePath.call(this);
      }
    });

    L.polyline = function (latlngs, options) {
      return new L.Polyline(latlngs, options);
    };
    /*
     * L.PolyUtil contains utility functions for polygons (clipping, etc.).
     */

    /*jshint bitwise:false */
    // allow bitwise operations here


    L.PolyUtil = {};
    /*
     * Sutherland-Hodgeman polygon clipping algorithm.
     * Used to avoid rendering parts of a polygon that are not currently visible.
     */

    L.PolyUtil.clipPolygon = function (points, bounds) {
      var clippedPoints,
          edges = [1, 4, 2, 8],
          i,
          j,
          k,
          a,
          b,
          len,
          edge,
          p,
          lu = L.LineUtil;

      for (i = 0, len = points.length; i < len; i++) {
        points[i]._code = lu._getBitCode(points[i], bounds);
      } // for each edge (left, bottom, right, top)


      for (k = 0; k < 4; k++) {
        edge = edges[k];
        clippedPoints = [];

        for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
          a = points[i];
          b = points[j]; // if a is inside the clip window

          if (!(a._code & edge)) {
            // if b is outside the clip window (a->b goes out of screen)
            if (b._code & edge) {
              p = lu._getEdgeIntersection(b, a, edge, bounds);
              p._code = lu._getBitCode(p, bounds);
              clippedPoints.push(p);
            }

            clippedPoints.push(a); // else if b is inside the clip window (a->b enters the screen)
          } else if (!(b._code & edge)) {
            p = lu._getEdgeIntersection(b, a, edge, bounds);
            p._code = lu._getBitCode(p, bounds);
            clippedPoints.push(p);
          }
        }

        points = clippedPoints;
      }

      return points;
    };
    /*
     * L.Polygon is used to display polygons on a map.
     */


    L.Polygon = L.Polyline.extend({
      options: {
        fill: true
      },
      initialize: function initialize(latlngs, options) {
        L.Polyline.prototype.initialize.call(this, latlngs, options);

        this._initWithHoles(latlngs);
      },
      _initWithHoles: function _initWithHoles(latlngs) {
        var i, len, hole;

        if (latlngs && L.Util.isArray(latlngs[0]) && typeof latlngs[0][0] !== 'number') {
          this._latlngs = this._convertLatLngs(latlngs[0]);
          this._holes = latlngs.slice(1);

          for (i = 0, len = this._holes.length; i < len; i++) {
            hole = this._holes[i] = this._convertLatLngs(this._holes[i]);

            if (hole[0].equals(hole[hole.length - 1])) {
              hole.pop();
            }
          }
        } // filter out last point if its equal to the first one


        latlngs = this._latlngs;

        if (latlngs.length >= 2 && latlngs[0].equals(latlngs[latlngs.length - 1])) {
          latlngs.pop();
        }
      },
      projectLatlngs: function projectLatlngs() {
        L.Polyline.prototype.projectLatlngs.call(this); // project polygon holes points
        // TODO move this logic to Polyline to get rid of duplication

        this._holePoints = [];

        if (!this._holes) {
          return;
        }

        var i, j, len, len2;

        for (i = 0, len = this._holes.length; i < len; i++) {
          this._holePoints[i] = [];

          for (j = 0, len2 = this._holes[i].length; j < len2; j++) {
            this._holePoints[i][j] = this._map.latLngToLayerPoint(this._holes[i][j]);
          }
        }
      },
      setLatLngs: function setLatLngs(latlngs) {
        if (latlngs && L.Util.isArray(latlngs[0]) && typeof latlngs[0][0] !== 'number') {
          this._initWithHoles(latlngs);

          return this.redraw();
        } else {
          return L.Polyline.prototype.setLatLngs.call(this, latlngs);
        }
      },
      _clipPoints: function _clipPoints() {
        var points = this._originalPoints,
            newParts = [];
        this._parts = [points].concat(this._holePoints);

        if (this.options.noClip) {
          return;
        }

        for (var i = 0, len = this._parts.length; i < len; i++) {
          var clipped = L.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);

          if (clipped.length) {
            newParts.push(clipped);
          }
        }

        this._parts = newParts;
      },
      _getPathPartStr: function _getPathPartStr(points) {
        var str = L.Polyline.prototype._getPathPartStr.call(this, points);

        return str + (L.Browser.svg ? 'z' : 'x');
      }
    });

    L.polygon = function (latlngs, options) {
      return new L.Polygon(latlngs, options);
    };
    /*
     * Contains L.MultiPolyline and L.MultiPolygon layers.
     */


    (function () {
      function createMulti(Klass) {
        return L.FeatureGroup.extend({
          initialize: function initialize(latlngs, options) {
            this._layers = {};
            this._options = options;
            this.setLatLngs(latlngs);
          },
          setLatLngs: function setLatLngs(latlngs) {
            var i = 0,
                len = latlngs.length;
            this.eachLayer(function (layer) {
              if (i < len) {
                layer.setLatLngs(latlngs[i++]);
              } else {
                this.removeLayer(layer);
              }
            }, this);

            while (i < len) {
              this.addLayer(new Klass(latlngs[i++], this._options));
            }

            return this;
          },
          getLatLngs: function getLatLngs() {
            var latlngs = [];
            this.eachLayer(function (layer) {
              latlngs.push(layer.getLatLngs());
            });
            return latlngs;
          }
        });
      }

      L.MultiPolyline = createMulti(L.Polyline);
      L.MultiPolygon = createMulti(L.Polygon);

      L.multiPolyline = function (latlngs, options) {
        return new L.MultiPolyline(latlngs, options);
      };

      L.multiPolygon = function (latlngs, options) {
        return new L.MultiPolygon(latlngs, options);
      };
    })();
    /*
     * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
     */


    L.Rectangle = L.Polygon.extend({
      initialize: function initialize(latLngBounds, options) {
        L.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
      },
      setBounds: function setBounds(latLngBounds) {
        this.setLatLngs(this._boundsToLatLngs(latLngBounds));
      },
      _boundsToLatLngs: function _boundsToLatLngs(latLngBounds) {
        latLngBounds = L.latLngBounds(latLngBounds);
        return [latLngBounds.getSouthWest(), latLngBounds.getNorthWest(), latLngBounds.getNorthEast(), latLngBounds.getSouthEast()];
      }
    });

    L.rectangle = function (latLngBounds, options) {
      return new L.Rectangle(latLngBounds, options);
    };
    /*
     * L.Circle is a circle overlay (with a certain radius in meters).
     */


    L.Circle = L.Path.extend({
      initialize: function initialize(latlng, radius, options) {
        L.Path.prototype.initialize.call(this, options);
        this._latlng = L.latLng(latlng);
        this._mRadius = radius;
      },
      options: {
        fill: true
      },
      setLatLng: function setLatLng(latlng) {
        this._latlng = L.latLng(latlng);
        return this.redraw();
      },
      setRadius: function setRadius(radius) {
        this._mRadius = radius;
        return this.redraw();
      },
      projectLatlngs: function projectLatlngs() {
        var lngRadius = this._getLngRadius(),
            latlng = this._latlng,
            pointLeft = this._map.latLngToLayerPoint([latlng.lat, latlng.lng - lngRadius]);

        this._point = this._map.latLngToLayerPoint(latlng);
        this._radius = Math.max(this._point.x - pointLeft.x, 1);
      },
      getBounds: function getBounds() {
        var lngRadius = this._getLngRadius(),
            latRadius = this._mRadius / 40075017 * 360,
            latlng = this._latlng;

        return new L.LatLngBounds([latlng.lat - latRadius, latlng.lng - lngRadius], [latlng.lat + latRadius, latlng.lng + lngRadius]);
      },
      getLatLng: function getLatLng() {
        return this._latlng;
      },
      getPathString: function getPathString() {
        var p = this._point,
            r = this._radius;

        if (this._checkIfEmpty()) {
          return '';
        }

        if (L.Browser.svg) {
          return 'M' + p.x + ',' + (p.y - r) + 'A' + r + ',' + r + ',0,1,1,' + (p.x - 0.1) + ',' + (p.y - r) + ' z';
        } else {
          p._round();

          r = Math.round(r);
          return 'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r + ' 0,' + 65535 * 360;
        }
      },
      getRadius: function getRadius() {
        return this._mRadius;
      },
      // TODO Earth hardcoded, move into projection code!
      _getLatRadius: function _getLatRadius() {
        return this._mRadius / 40075017 * 360;
      },
      _getLngRadius: function _getLngRadius() {
        return this._getLatRadius() / Math.cos(L.LatLng.DEG_TO_RAD * this._latlng.lat);
      },
      _checkIfEmpty: function _checkIfEmpty() {
        if (!this._map) {
          return false;
        }

        var vp = this._map._pathViewport,
            r = this._radius,
            p = this._point;
        return p.x - r > vp.max.x || p.y - r > vp.max.y || p.x + r < vp.min.x || p.y + r < vp.min.y;
      }
    });

    L.circle = function (latlng, radius, options) {
      return new L.Circle(latlng, radius, options);
    };
    /*
     * L.CircleMarker is a circle overlay with a permanent pixel radius.
     */


    L.CircleMarker = L.Circle.extend({
      options: {
        radius: 10,
        weight: 2
      },
      initialize: function initialize(latlng, options) {
        L.Circle.prototype.initialize.call(this, latlng, null, options);
        this._radius = this.options.radius;
      },
      projectLatlngs: function projectLatlngs() {
        this._point = this._map.latLngToLayerPoint(this._latlng);
      },
      _updateStyle: function _updateStyle() {
        L.Circle.prototype._updateStyle.call(this);

        this.setRadius(this.options.radius);
      },
      setLatLng: function setLatLng(latlng) {
        L.Circle.prototype.setLatLng.call(this, latlng);

        if (this._popup && this._popup._isOpen) {
          this._popup.setLatLng(latlng);
        }

        return this;
      },
      setRadius: function setRadius(radius) {
        this.options.radius = this._radius = radius;
        return this.redraw();
      },
      getRadius: function getRadius() {
        return this._radius;
      }
    });

    L.circleMarker = function (latlng, options) {
      return new L.CircleMarker(latlng, options);
    };
    /*
     * Extends L.Polyline to be able to manually detect clicks on Canvas-rendered polylines.
     */


    L.Polyline.include(!L.Path.CANVAS ? {} : {
      _containsPoint: function _containsPoint(p, closed) {
        var i,
            j,
            k,
            len,
            len2,
            dist,
            part,
            w = this.options.weight / 2;

        if (L.Browser.touch) {
          w += 10; // polyline click tolerance on touch devices
        }

        for (i = 0, len = this._parts.length; i < len; i++) {
          part = this._parts[i];

          for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
            if (!closed && j === 0) {
              continue;
            }

            dist = L.LineUtil.pointToSegmentDistance(p, part[k], part[j]);

            if (dist <= w) {
              return true;
            }
          }
        }

        return false;
      }
    });
    /*
     * Extends L.Polygon to be able to manually detect clicks on Canvas-rendered polygons.
     */

    L.Polygon.include(!L.Path.CANVAS ? {} : {
      _containsPoint: function _containsPoint(p) {
        var inside = false,
            part,
            p1,
            p2,
            i,
            j,
            k,
            len,
            len2; // TODO optimization: check if within bounds first

        if (L.Polyline.prototype._containsPoint.call(this, p, true)) {
          // click on polygon border
          return true;
        } // ray casting algorithm for detecting if point is in polygon


        for (i = 0, len = this._parts.length; i < len; i++) {
          part = this._parts[i];

          for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
            p1 = part[j];
            p2 = part[k];

            if (p1.y > p.y !== p2.y > p.y && p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x) {
              inside = !inside;
            }
          }
        }

        return inside;
      }
    });
    /*
     * Extends L.Circle with Canvas-specific code.
     */

    L.Circle.include(!L.Path.CANVAS ? {} : {
      _drawPath: function _drawPath() {
        var p = this._point;

        this._ctx.beginPath();

        this._ctx.arc(p.x, p.y, this._radius, 0, Math.PI * 2, false);
      },
      _containsPoint: function _containsPoint(p) {
        var center = this._point,
            w2 = this.options.stroke ? this.options.weight / 2 : 0;
        return p.distanceTo(center) <= this._radius + w2;
      }
    });
    /*
     * CircleMarker canvas specific drawing parts.
     */

    L.CircleMarker.include(!L.Path.CANVAS ? {} : {
      _updateStyle: function _updateStyle() {
        L.Path.prototype._updateStyle.call(this);
      }
    });
    /*
     * L.GeoJSON turns any GeoJSON data into a Leaflet layer.
     */

    L.GeoJSON = L.FeatureGroup.extend({
      initialize: function initialize(geojson, options) {
        L.setOptions(this, options);
        this._layers = {};

        if (geojson) {
          this.addData(geojson);
        }
      },
      addData: function addData(geojson) {
        var features = L.Util.isArray(geojson) ? geojson : geojson.features,
            i,
            len,
            feature;

        if (features) {
          for (i = 0, len = features.length; i < len; i++) {
            // Only add this if geometry or geometries are set and not null
            feature = features[i];

            if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
              this.addData(features[i]);
            }
          }

          return this;
        }

        var options = this.options;

        if (options.filter && !options.filter(geojson)) {
          return;
        }

        var layer = L.GeoJSON.geometryToLayer(geojson, options.pointToLayer, options.coordsToLatLng, options);
        layer.feature = L.GeoJSON.asFeature(geojson);
        layer.defaultOptions = layer.options;
        this.resetStyle(layer);

        if (options.onEachFeature) {
          options.onEachFeature(geojson, layer);
        }

        return this.addLayer(layer);
      },
      resetStyle: function resetStyle(layer) {
        var style = this.options.style;

        if (style) {
          // reset any custom styles
          L.Util.extend(layer.options, layer.defaultOptions);

          this._setLayerStyle(layer, style);
        }
      },
      setStyle: function setStyle(style) {
        this.eachLayer(function (layer) {
          this._setLayerStyle(layer, style);
        }, this);
      },
      _setLayerStyle: function _setLayerStyle(layer, style) {
        if (typeof style === 'function') {
          style = style(layer.feature);
        }

        if (layer.setStyle) {
          layer.setStyle(style);
        }
      }
    });
    L.extend(L.GeoJSON, {
      geometryToLayer: function geometryToLayer(geojson, pointToLayer, coordsToLatLng, vectorOptions) {
        var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
            coords = geometry.coordinates,
            layers = [],
            latlng,
            latlngs,
            i,
            len;
        coordsToLatLng = coordsToLatLng || this.coordsToLatLng;

        switch (geometry.type) {
          case 'Point':
            latlng = coordsToLatLng(coords);
            return pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng);

          case 'MultiPoint':
            for (i = 0, len = coords.length; i < len; i++) {
              latlng = coordsToLatLng(coords[i]);
              layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng));
            }

            return new L.FeatureGroup(layers);

          case 'LineString':
            latlngs = this.coordsToLatLngs(coords, 0, coordsToLatLng);
            return new L.Polyline(latlngs, vectorOptions);

          case 'Polygon':
            if (coords.length === 2 && !coords[1].length) {
              throw new Error('Invalid GeoJSON object.');
            }

            latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
            return new L.Polygon(latlngs, vectorOptions);

          case 'MultiLineString':
            latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
            return new L.MultiPolyline(latlngs, vectorOptions);

          case 'MultiPolygon':
            latlngs = this.coordsToLatLngs(coords, 2, coordsToLatLng);
            return new L.MultiPolygon(latlngs, vectorOptions);

          case 'GeometryCollection':
            for (i = 0, len = geometry.geometries.length; i < len; i++) {
              layers.push(this.geometryToLayer({
                geometry: geometry.geometries[i],
                type: 'Feature',
                properties: geojson.properties
              }, pointToLayer, coordsToLatLng, vectorOptions));
            }

            return new L.FeatureGroup(layers);

          default:
            throw new Error('Invalid GeoJSON object.');
        }
      },
      coordsToLatLng: function coordsToLatLng(coords) {
        // (Array[, Boolean]) -> LatLng
        return new L.LatLng(coords[1], coords[0], coords[2]);
      },
      coordsToLatLngs: function coordsToLatLngs(coords, levelsDeep, coordsToLatLng) {
        // (Array[, Number, Function]) -> Array
        var latlng,
            i,
            len,
            latlngs = [];

        for (i = 0, len = coords.length; i < len; i++) {
          latlng = levelsDeep ? this.coordsToLatLngs(coords[i], levelsDeep - 1, coordsToLatLng) : (coordsToLatLng || this.coordsToLatLng)(coords[i]);
          latlngs.push(latlng);
        }

        return latlngs;
      },
      latLngToCoords: function latLngToCoords(latlng) {
        var coords = [latlng.lng, latlng.lat];

        if (latlng.alt !== undefined) {
          coords.push(latlng.alt);
        }

        return coords;
      },
      latLngsToCoords: function latLngsToCoords(latLngs) {
        var coords = [];

        for (var i = 0, len = latLngs.length; i < len; i++) {
          coords.push(L.GeoJSON.latLngToCoords(latLngs[i]));
        }

        return coords;
      },
      getFeature: function getFeature(layer, newGeometry) {
        return layer.feature ? L.extend({}, layer.feature, {
          geometry: newGeometry
        }) : L.GeoJSON.asFeature(newGeometry);
      },
      asFeature: function asFeature(geoJSON) {
        if (geoJSON.type === 'Feature') {
          return geoJSON;
        }

        return {
          type: 'Feature',
          properties: {},
          geometry: geoJSON
        };
      }
    });
    var PointToGeoJSON = {
      toGeoJSON: function toGeoJSON() {
        return L.GeoJSON.getFeature(this, {
          type: 'Point',
          coordinates: L.GeoJSON.latLngToCoords(this.getLatLng())
        });
      }
    };
    L.Marker.include(PointToGeoJSON);
    L.Circle.include(PointToGeoJSON);
    L.CircleMarker.include(PointToGeoJSON);
    L.Polyline.include({
      toGeoJSON: function toGeoJSON() {
        return L.GeoJSON.getFeature(this, {
          type: 'LineString',
          coordinates: L.GeoJSON.latLngsToCoords(this.getLatLngs())
        });
      }
    });
    L.Polygon.include({
      toGeoJSON: function toGeoJSON() {
        var coords = [L.GeoJSON.latLngsToCoords(this.getLatLngs())],
            i,
            len,
            hole;
        coords[0].push(coords[0][0]);

        if (this._holes) {
          for (i = 0, len = this._holes.length; i < len; i++) {
            hole = L.GeoJSON.latLngsToCoords(this._holes[i]);
            hole.push(hole[0]);
            coords.push(hole);
          }
        }

        return L.GeoJSON.getFeature(this, {
          type: 'Polygon',
          coordinates: coords
        });
      }
    });

    (function () {
      function multiToGeoJSON(type) {
        return function () {
          var coords = [];
          this.eachLayer(function (layer) {
            coords.push(layer.toGeoJSON().geometry.coordinates);
          });
          return L.GeoJSON.getFeature(this, {
            type: type,
            coordinates: coords
          });
        };
      }

      L.MultiPolyline.include({
        toGeoJSON: multiToGeoJSON('MultiLineString')
      });
      L.MultiPolygon.include({
        toGeoJSON: multiToGeoJSON('MultiPolygon')
      });
      L.LayerGroup.include({
        toGeoJSON: function toGeoJSON() {
          var geometry = this.feature && this.feature.geometry,
              jsons = [],
              json;

          if (geometry && geometry.type === 'MultiPoint') {
            return multiToGeoJSON('MultiPoint').call(this);
          }

          var isGeometryCollection = geometry && geometry.type === 'GeometryCollection';
          this.eachLayer(function (layer) {
            if (layer.toGeoJSON) {
              json = layer.toGeoJSON();
              jsons.push(isGeometryCollection ? json.geometry : L.GeoJSON.asFeature(json));
            }
          });

          if (isGeometryCollection) {
            return L.GeoJSON.getFeature(this, {
              geometries: jsons,
              type: 'GeometryCollection'
            });
          }

          return {
            type: 'FeatureCollection',
            features: jsons
          };
        }
      });
    })();

    L.geoJson = function (geojson, options) {
      return new L.GeoJSON(geojson, options);
    };
    /*
     * L.DomEvent contains functions for working with DOM events.
     */


    L.DomEvent = {
      /* inspired by John Resig, Dean Edwards and YUI addEvent implementations */
      addListener: function addListener(obj, type, fn, context) {
        // (HTMLElement, String, Function[, Object])
        var id = L.stamp(fn),
            key = '_leaflet_' + type + id,
            handler,
            originalHandler,
            newType;

        if (obj[key]) {
          return this;
        }

        handler = function handler(e) {
          return fn.call(context || obj, e || L.DomEvent._getEvent());
        };

        if (L.Browser.pointer && type.indexOf('touch') === 0) {
          return this.addPointerListener(obj, type, handler, id);
        }

        if (L.Browser.touch && type === 'dblclick' && this.addDoubleTapListener) {
          this.addDoubleTapListener(obj, handler, id);
        }

        if ('addEventListener' in obj) {
          if (type === 'mousewheel') {
            obj.addEventListener('DOMMouseScroll', handler, false);
            obj.addEventListener(type, handler, false);
          } else if (type === 'mouseenter' || type === 'mouseleave') {
            originalHandler = handler;
            newType = type === 'mouseenter' ? 'mouseover' : 'mouseout';

            handler = function handler(e) {
              if (!L.DomEvent._checkMouse(obj, e)) {
                return;
              }

              return originalHandler(e);
            };

            obj.addEventListener(newType, handler, false);
          } else if (type === 'click' && L.Browser.android) {
            originalHandler = handler;

            handler = function handler(e) {
              return L.DomEvent._filterClick(e, originalHandler);
            };

            obj.addEventListener(type, handler, false);
          } else {
            obj.addEventListener(type, handler, false);
          }
        } else if ('attachEvent' in obj) {
          obj.attachEvent('on' + type, handler);
        }

        obj[key] = handler;
        return this;
      },
      removeListener: function removeListener(obj, type, fn) {
        // (HTMLElement, String, Function)
        var id = L.stamp(fn),
            key = '_leaflet_' + type + id,
            handler = obj[key];

        if (!handler) {
          return this;
        }

        if (L.Browser.pointer && type.indexOf('touch') === 0) {
          this.removePointerListener(obj, type, id);
        } else if (L.Browser.touch && type === 'dblclick' && this.removeDoubleTapListener) {
          this.removeDoubleTapListener(obj, id);
        } else if ('removeEventListener' in obj) {
          if (type === 'mousewheel') {
            obj.removeEventListener('DOMMouseScroll', handler, false);
            obj.removeEventListener(type, handler, false);
          } else if (type === 'mouseenter' || type === 'mouseleave') {
            obj.removeEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);
          } else {
            obj.removeEventListener(type, handler, false);
          }
        } else if ('detachEvent' in obj) {
          obj.detachEvent('on' + type, handler);
        }

        obj[key] = null;
        return this;
      },
      stopPropagation: function stopPropagation(e) {
        if (e.stopPropagation) {
          e.stopPropagation();
        } else {
          e.cancelBubble = true;
        }

        L.DomEvent._skipped(e);

        return this;
      },
      disableScrollPropagation: function disableScrollPropagation(el) {
        var stop = L.DomEvent.stopPropagation;
        return L.DomEvent.on(el, 'mousewheel', stop).on(el, 'MozMousePixelScroll', stop);
      },
      disableClickPropagation: function disableClickPropagation(el) {
        var stop = L.DomEvent.stopPropagation;

        for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
          L.DomEvent.on(el, L.Draggable.START[i], stop);
        }

        return L.DomEvent.on(el, 'click', L.DomEvent._fakeStop).on(el, 'dblclick', stop);
      },
      preventDefault: function preventDefault(e) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }

        return this;
      },
      stop: function stop(e) {
        return L.DomEvent.preventDefault(e).stopPropagation(e);
      },
      getMousePosition: function getMousePosition(e, container) {
        if (!container) {
          return new L.Point(e.clientX, e.clientY);
        }

        var rect = container.getBoundingClientRect();
        return new L.Point(e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop);
      },
      getWheelDelta: function getWheelDelta(e) {
        var delta = 0;

        if (e.wheelDelta) {
          delta = e.wheelDelta / 120;
        }

        if (e.detail) {
          delta = -e.detail / 3;
        }

        return delta;
      },
      _skipEvents: {},
      _fakeStop: function _fakeStop(e) {
        // fakes stopPropagation by setting a special event flag, checked/reset with L.DomEvent._skipped(e)
        L.DomEvent._skipEvents[e.type] = true;
      },
      _skipped: function _skipped(e) {
        var skipped = this._skipEvents[e.type]; // reset when checking, as it's only used in map container and propagates outside of the map

        this._skipEvents[e.type] = false;
        return skipped;
      },
      // check if element really left/entered the event target (for mouseenter/mouseleave)
      _checkMouse: function _checkMouse(el, e) {
        var related = e.relatedTarget;

        if (!related) {
          return true;
        }

        try {
          while (related && related !== el) {
            related = related.parentNode;
          }
        } catch (err) {
          return false;
        }

        return related !== el;
      },
      _getEvent: function _getEvent() {
        // evil magic for IE

        /*jshint noarg:false */
        var e = window.event;

        if (!e) {
          var caller = arguments.callee.caller;

          while (caller) {
            e = caller['arguments'][0];

            if (e && window.Event === e.constructor) {
              break;
            }

            caller = caller.caller;
          }
        }

        return e;
      },
      // this is a horrible workaround for a bug in Android where a single touch triggers two click events
      _filterClick: function _filterClick(e, handler) {
        var timeStamp = e.timeStamp || e.originalEvent.timeStamp,
            elapsed = L.DomEvent._lastClick && timeStamp - L.DomEvent._lastClick; // are they closer together than 1000ms yet more than 100ms?
        // Android typically triggers them ~300ms apart while multiple listeners
        // on the same event should be triggered far faster;
        // or check if click is simulated on the element, and if it is, reject any non-simulated events

        if (elapsed && elapsed > 100 && elapsed < 1000 || e.target._simulatedClick && !e._simulated) {
          L.DomEvent.stop(e);
          return;
        }

        L.DomEvent._lastClick = timeStamp;
        return handler(e);
      }
    };
    L.DomEvent.on = L.DomEvent.addListener;
    L.DomEvent.off = L.DomEvent.removeListener;
    /*
     * L.Draggable allows you to add dragging capabilities to any element. Supports mobile devices too.
     */

    L.Draggable = L.Class.extend({
      includes: L.Mixin.Events,
      statics: {
        START: L.Browser.touch ? ['touchstart', 'mousedown'] : ['mousedown'],
        END: {
          mousedown: 'mouseup',
          touchstart: 'touchend',
          pointerdown: 'touchend',
          MSPointerDown: 'touchend'
        },
        MOVE: {
          mousedown: 'mousemove',
          touchstart: 'touchmove',
          pointerdown: 'touchmove',
          MSPointerDown: 'touchmove'
        }
      },
      initialize: function initialize(element, dragStartTarget) {
        this._element = element;
        this._dragStartTarget = dragStartTarget || element;
      },
      enable: function enable() {
        if (this._enabled) {
          return;
        }

        for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
          L.DomEvent.on(this._dragStartTarget, L.Draggable.START[i], this._onDown, this);
        }

        this._enabled = true;
      },
      disable: function disable() {
        if (!this._enabled) {
          return;
        }

        for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
          L.DomEvent.off(this._dragStartTarget, L.Draggable.START[i], this._onDown, this);
        }

        this._enabled = false;
        this._moved = false;
      },
      _onDown: function _onDown(e) {
        this._moved = false;

        if (e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) {
          return;
        }

        L.DomEvent.stopPropagation(e);

        if (L.Draggable._disabled) {
          return;
        }

        L.DomUtil.disableImageDrag();
        L.DomUtil.disableTextSelection();

        if (this._moving) {
          return;
        }

        var first = e.touches ? e.touches[0] : e;
        this._startPoint = new L.Point(first.clientX, first.clientY);
        this._startPos = this._newPos = L.DomUtil.getPosition(this._element);
        L.DomEvent.on(document, L.Draggable.MOVE[e.type], this._onMove, this).on(document, L.Draggable.END[e.type], this._onUp, this);
      },
      _onMove: function _onMove(e) {
        if (e.touches && e.touches.length > 1) {
          this._moved = true;
          return;
        }

        var first = e.touches && e.touches.length === 1 ? e.touches[0] : e,
            newPoint = new L.Point(first.clientX, first.clientY),
            offset = newPoint.subtract(this._startPoint);

        if (!offset.x && !offset.y) {
          return;
        }

        L.DomEvent.preventDefault(e);

        if (!this._moved) {
          this.fire('dragstart');
          this._moved = true;
          this._startPos = L.DomUtil.getPosition(this._element).subtract(offset);
          L.DomUtil.addClass(document.body, 'leaflet-dragging');
          L.DomUtil.addClass(e.target || e.srcElement, 'leaflet-drag-target');
        }

        this._newPos = this._startPos.add(offset);
        this._moving = true;
        L.Util.cancelAnimFrame(this._animRequest);
        this._animRequest = L.Util.requestAnimFrame(this._updatePosition, this, true, this._dragStartTarget);
      },
      _updatePosition: function _updatePosition() {
        this.fire('predrag');
        L.DomUtil.setPosition(this._element, this._newPos);
        this.fire('drag');
      },
      _onUp: function _onUp(e) {
        L.DomUtil.removeClass(document.body, 'leaflet-dragging');
        L.DomUtil.removeClass(e.target || e.srcElement, 'leaflet-drag-target');

        for (var i in L.Draggable.MOVE) {
          L.DomEvent.off(document, L.Draggable.MOVE[i], this._onMove).off(document, L.Draggable.END[i], this._onUp);
        }

        L.DomUtil.enableImageDrag();
        L.DomUtil.enableTextSelection();

        if (this._moved && this._moving) {
          // ensure drag is not fired after dragend
          L.Util.cancelAnimFrame(this._animRequest);
          this.fire('dragend', {
            distance: this._newPos.distanceTo(this._startPos)
          });
        }

        this._moving = false;
      }
    });
    /*
    	L.Handler is a base class for handler classes that are used internally to inject
    	interaction features like dragging to classes like Map and Marker.
    */

    L.Handler = L.Class.extend({
      initialize: function initialize(map) {
        this._map = map;
      },
      enable: function enable() {
        if (this._enabled) {
          return;
        }

        this._enabled = true;
        this.addHooks();
      },
      disable: function disable() {
        if (!this._enabled) {
          return;
        }

        this._enabled = false;
        this.removeHooks();
      },
      enabled: function enabled() {
        return !!this._enabled;
      }
    });
    /*
     * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
     */

    L.Map.mergeOptions({
      dragging: true,
      inertia: !L.Browser.android23,
      inertiaDeceleration: 3400,
      // px/s^2
      inertiaMaxSpeed: Infinity,
      // px/s
      inertiaThreshold: L.Browser.touch ? 32 : 18,
      // ms
      easeLinearity: 0.25,
      // TODO refactor, move to CRS
      worldCopyJump: false
    });
    L.Map.Drag = L.Handler.extend({
      addHooks: function addHooks() {
        if (!this._draggable) {
          var map = this._map;
          this._draggable = new L.Draggable(map._mapPane, map._container);

          this._draggable.on({
            'dragstart': this._onDragStart,
            'drag': this._onDrag,
            'dragend': this._onDragEnd
          }, this);

          if (map.options.worldCopyJump) {
            this._draggable.on('predrag', this._onPreDrag, this);

            map.on('viewreset', this._onViewReset, this);
            map.whenReady(this._onViewReset, this);
          }
        }

        this._draggable.enable();
      },
      removeHooks: function removeHooks() {
        this._draggable.disable();
      },
      moved: function moved() {
        return this._draggable && this._draggable._moved;
      },
      _onDragStart: function _onDragStart() {
        var map = this._map;

        if (map._panAnim) {
          map._panAnim.stop();
        }

        map.fire('movestart').fire('dragstart');

        if (map.options.inertia) {
          this._positions = [];
          this._times = [];
        }
      },
      _onDrag: function _onDrag() {
        if (this._map.options.inertia) {
          var time = this._lastTime = +new Date(),
              pos = this._lastPos = this._draggable._newPos;

          this._positions.push(pos);

          this._times.push(time);

          if (time - this._times[0] > 200) {
            this._positions.shift();

            this._times.shift();
          }
        }

        this._map.fire('move').fire('drag');
      },
      _onViewReset: function _onViewReset() {
        // TODO fix hardcoded Earth values
        var pxCenter = this._map.getSize()._divideBy(2),
            pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

        this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
        this._worldWidth = this._map.project([0, 180]).x;
      },
      _onPreDrag: function _onPreDrag() {
        // TODO refactor to be able to adjust map pane position after zoom
        var worldWidth = this._worldWidth,
            halfWidth = Math.round(worldWidth / 2),
            dx = this._initialWorldOffset,
            x = this._draggable._newPos.x,
            newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
            newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
            newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;
        this._draggable._newPos.x = newX;
      },
      _onDragEnd: function _onDragEnd(e) {
        var map = this._map,
            options = map.options,
            delay = +new Date() - this._lastTime,
            noInertia = !options.inertia || delay > options.inertiaThreshold || !this._positions[0];
        map.fire('dragend', e);

        if (noInertia) {
          map.fire('moveend');
        } else {
          var direction = this._lastPos.subtract(this._positions[0]),
              duration = (this._lastTime + delay - this._times[0]) / 1000,
              ease = options.easeLinearity,
              speedVector = direction.multiplyBy(ease / duration),
              speed = speedVector.distanceTo([0, 0]),
              limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
              limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),
              decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
              offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

          if (!offset.x || !offset.y) {
            map.fire('moveend');
          } else {
            offset = map._limitOffset(offset, map.options.maxBounds);
            L.Util.requestAnimFrame(function () {
              map.panBy(offset, {
                duration: decelerationDuration,
                easeLinearity: ease,
                noMoveStart: true
              });
            });
          }
        }
      }
    });
    L.Map.addInitHook('addHandler', 'dragging', L.Map.Drag);
    /*
     * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
     */

    L.Map.mergeOptions({
      doubleClickZoom: true
    });
    L.Map.DoubleClickZoom = L.Handler.extend({
      addHooks: function addHooks() {
        this._map.on('dblclick', this._onDoubleClick, this);
      },
      removeHooks: function removeHooks() {
        this._map.off('dblclick', this._onDoubleClick, this);
      },
      _onDoubleClick: function _onDoubleClick(e) {
        var map = this._map,
            zoom = map.getZoom() + (e.originalEvent.shiftKey ? -1 : 1);

        if (map.options.doubleClickZoom === 'center') {
          map.setZoom(zoom);
        } else {
          map.setZoomAround(e.containerPoint, zoom);
        }
      }
    });
    L.Map.addInitHook('addHandler', 'doubleClickZoom', L.Map.DoubleClickZoom);
    /*
     * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
     */

    L.Map.mergeOptions({
      scrollWheelZoom: true
    });
    L.Map.ScrollWheelZoom = L.Handler.extend({
      addHooks: function addHooks() {
        L.DomEvent.on(this._map._container, 'mousewheel', this._onWheelScroll, this);
        L.DomEvent.on(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
        this._delta = 0;
      },
      removeHooks: function removeHooks() {
        L.DomEvent.off(this._map._container, 'mousewheel', this._onWheelScroll);
        L.DomEvent.off(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
      },
      _onWheelScroll: function _onWheelScroll(e) {
        var delta = L.DomEvent.getWheelDelta(e);
        this._delta += delta;
        this._lastMousePos = this._map.mouseEventToContainerPoint(e);

        if (!this._startTime) {
          this._startTime = +new Date();
        }

        var left = Math.max(40 - (+new Date() - this._startTime), 0);
        clearTimeout(this._timer);
        this._timer = setTimeout(L.bind(this._performZoom, this), left);
        L.DomEvent.preventDefault(e);
        L.DomEvent.stopPropagation(e);
      },
      _performZoom: function _performZoom() {
        var map = this._map,
            delta = this._delta,
            zoom = map.getZoom();
        delta = delta > 0 ? Math.ceil(delta) : Math.floor(delta);
        delta = Math.max(Math.min(delta, 4), -4);
        delta = map._limitZoom(zoom + delta) - zoom;
        this._delta = 0;
        this._startTime = null;

        if (!delta) {
          return;
        }

        if (map.options.scrollWheelZoom === 'center') {
          map.setZoom(zoom + delta);
        } else {
          map.setZoomAround(this._lastMousePos, zoom + delta);
        }
      }
    });
    L.Map.addInitHook('addHandler', 'scrollWheelZoom', L.Map.ScrollWheelZoom);
    /*
     * Extends the event handling code with double tap support for mobile browsers.
     */

    L.extend(L.DomEvent, {
      _touchstart: L.Browser.msPointer ? 'MSPointerDown' : L.Browser.pointer ? 'pointerdown' : 'touchstart',
      _touchend: L.Browser.msPointer ? 'MSPointerUp' : L.Browser.pointer ? 'pointerup' : 'touchend',
      // inspired by Zepto touch code by Thomas Fuchs
      addDoubleTapListener: function addDoubleTapListener(obj, handler, id) {
        var last,
            doubleTap = false,
            delay = 250,
            touch,
            pre = '_leaflet_',
            touchstart = this._touchstart,
            touchend = this._touchend,
            trackedTouches = [];

        function onTouchStart(e) {
          var count;

          if (L.Browser.pointer) {
            trackedTouches.push(e.pointerId);
            count = trackedTouches.length;
          } else {
            count = e.touches.length;
          }

          if (count > 1) {
            return;
          }

          var now = Date.now(),
              delta = now - (last || now);
          touch = e.touches ? e.touches[0] : e;
          doubleTap = delta > 0 && delta <= delay;
          last = now;
        }

        function onTouchEnd(e) {
          if (L.Browser.pointer) {
            var idx = trackedTouches.indexOf(e.pointerId);

            if (idx === -1) {
              return;
            }

            trackedTouches.splice(idx, 1);
          }

          if (doubleTap) {
            if (L.Browser.pointer) {
              // work around .type being readonly with MSPointer* events
              var newTouch = {},
                  prop; // jshint forin:false

              for (var i in touch) {
                prop = touch[i];

                if (typeof prop === 'function') {
                  newTouch[i] = prop.bind(touch);
                } else {
                  newTouch[i] = prop;
                }
              }

              touch = newTouch;
            }

            touch.type = 'dblclick';
            handler(touch);
            last = null;
          }
        }

        obj[pre + touchstart + id] = onTouchStart;
        obj[pre + touchend + id] = onTouchEnd; // on pointer we need to listen on the document, otherwise a drag starting on the map and moving off screen
        // will not come through to us, so we will lose track of how many touches are ongoing

        var endElement = L.Browser.pointer ? document.documentElement : obj;
        obj.addEventListener(touchstart, onTouchStart, false);
        endElement.addEventListener(touchend, onTouchEnd, false);

        if (L.Browser.pointer) {
          endElement.addEventListener(L.DomEvent.POINTER_CANCEL, onTouchEnd, false);
        }

        return this;
      },
      removeDoubleTapListener: function removeDoubleTapListener(obj, id) {
        var pre = '_leaflet_';
        obj.removeEventListener(this._touchstart, obj[pre + this._touchstart + id], false);
        (L.Browser.pointer ? document.documentElement : obj).removeEventListener(this._touchend, obj[pre + this._touchend + id], false);

        if (L.Browser.pointer) {
          document.documentElement.removeEventListener(L.DomEvent.POINTER_CANCEL, obj[pre + this._touchend + id], false);
        }

        return this;
      }
    });
    /*
     * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
     */

    L.extend(L.DomEvent, {
      //static
      POINTER_DOWN: L.Browser.msPointer ? 'MSPointerDown' : 'pointerdown',
      POINTER_MOVE: L.Browser.msPointer ? 'MSPointerMove' : 'pointermove',
      POINTER_UP: L.Browser.msPointer ? 'MSPointerUp' : 'pointerup',
      POINTER_CANCEL: L.Browser.msPointer ? 'MSPointerCancel' : 'pointercancel',
      _pointers: [],
      _pointerDocumentListener: false,
      // Provides a touch events wrapper for (ms)pointer events.
      // Based on changes by veproza https://github.com/CloudMade/Leaflet/pull/1019
      //ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890
      addPointerListener: function addPointerListener(obj, type, handler, id) {
        switch (type) {
          case 'touchstart':
            return this.addPointerListenerStart(obj, type, handler, id);

          case 'touchend':
            return this.addPointerListenerEnd(obj, type, handler, id);

          case 'touchmove':
            return this.addPointerListenerMove(obj, type, handler, id);

          default:
            throw 'Unknown touch event type';
        }
      },
      addPointerListenerStart: function addPointerListenerStart(obj, type, handler, id) {
        var pre = '_leaflet_',
            pointers = this._pointers;

        var cb = function cb(e) {
          L.DomEvent.preventDefault(e);
          var alreadyInArray = false;

          for (var i = 0; i < pointers.length; i++) {
            if (pointers[i].pointerId === e.pointerId) {
              alreadyInArray = true;
              break;
            }
          }

          if (!alreadyInArray) {
            pointers.push(e);
          }

          e.touches = pointers.slice();
          e.changedTouches = [e];
          handler(e);
        };

        obj[pre + 'touchstart' + id] = cb;
        obj.addEventListener(this.POINTER_DOWN, cb, false); // need to also listen for end events to keep the _pointers list accurate
        // this needs to be on the body and never go away

        if (!this._pointerDocumentListener) {
          var internalCb = function internalCb(e) {
            for (var i = 0; i < pointers.length; i++) {
              if (pointers[i].pointerId === e.pointerId) {
                pointers.splice(i, 1);
                break;
              }
            }
          }; //We listen on the documentElement as any drags that end by moving the touch off the screen get fired there


          document.documentElement.addEventListener(this.POINTER_UP, internalCb, false);
          document.documentElement.addEventListener(this.POINTER_CANCEL, internalCb, false);
          this._pointerDocumentListener = true;
        }

        return this;
      },
      addPointerListenerMove: function addPointerListenerMove(obj, type, handler, id) {
        var pre = '_leaflet_',
            touches = this._pointers;

        function cb(e) {
          // don't fire touch moves when mouse isn't down
          if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) {
            return;
          }

          for (var i = 0; i < touches.length; i++) {
            if (touches[i].pointerId === e.pointerId) {
              touches[i] = e;
              break;
            }
          }

          e.touches = touches.slice();
          e.changedTouches = [e];
          handler(e);
        }

        obj[pre + 'touchmove' + id] = cb;
        obj.addEventListener(this.POINTER_MOVE, cb, false);
        return this;
      },
      addPointerListenerEnd: function addPointerListenerEnd(obj, type, handler, id) {
        var pre = '_leaflet_',
            touches = this._pointers;

        var cb = function cb(e) {
          for (var i = 0; i < touches.length; i++) {
            if (touches[i].pointerId === e.pointerId) {
              touches.splice(i, 1);
              break;
            }
          }

          e.touches = touches.slice();
          e.changedTouches = [e];
          handler(e);
        };

        obj[pre + 'touchend' + id] = cb;
        obj.addEventListener(this.POINTER_UP, cb, false);
        obj.addEventListener(this.POINTER_CANCEL, cb, false);
        return this;
      },
      removePointerListener: function removePointerListener(obj, type, id) {
        var pre = '_leaflet_',
            cb = obj[pre + type + id];

        switch (type) {
          case 'touchstart':
            obj.removeEventListener(this.POINTER_DOWN, cb, false);
            break;

          case 'touchmove':
            obj.removeEventListener(this.POINTER_MOVE, cb, false);
            break;

          case 'touchend':
            obj.removeEventListener(this.POINTER_UP, cb, false);
            obj.removeEventListener(this.POINTER_CANCEL, cb, false);
            break;
        }

        return this;
      }
    });
    /*
     * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
     */

    L.Map.mergeOptions({
      touchZoom: L.Browser.touch && !L.Browser.android23,
      bounceAtZoomLimits: true
    });
    L.Map.TouchZoom = L.Handler.extend({
      addHooks: function addHooks() {
        L.DomEvent.on(this._map._container, 'touchstart', this._onTouchStart, this);
      },
      removeHooks: function removeHooks() {
        L.DomEvent.off(this._map._container, 'touchstart', this._onTouchStart, this);
      },
      _onTouchStart: function _onTouchStart(e) {
        var map = this._map;

        if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) {
          return;
        }

        var p1 = map.mouseEventToLayerPoint(e.touches[0]),
            p2 = map.mouseEventToLayerPoint(e.touches[1]),
            viewCenter = map._getCenterLayerPoint();

        this._startCenter = p1.add(p2)._divideBy(2);
        this._startDist = p1.distanceTo(p2);
        this._moved = false;
        this._zooming = true;
        this._centerOffset = viewCenter.subtract(this._startCenter);

        if (map._panAnim) {
          map._panAnim.stop();
        }

        L.DomEvent.on(document, 'touchmove', this._onTouchMove, this).on(document, 'touchend', this._onTouchEnd, this);
        L.DomEvent.preventDefault(e);
      },
      _onTouchMove: function _onTouchMove(e) {
        var map = this._map;

        if (!e.touches || e.touches.length !== 2 || !this._zooming) {
          return;
        }

        var p1 = map.mouseEventToLayerPoint(e.touches[0]),
            p2 = map.mouseEventToLayerPoint(e.touches[1]);
        this._scale = p1.distanceTo(p2) / this._startDist;
        this._delta = p1._add(p2)._divideBy(2)._subtract(this._startCenter);

        if (this._scale === 1) {
          return;
        }

        if (!map.options.bounceAtZoomLimits) {
          if (map.getZoom() === map.getMinZoom() && this._scale < 1 || map.getZoom() === map.getMaxZoom() && this._scale > 1) {
            return;
          }
        }

        if (!this._moved) {
          L.DomUtil.addClass(map._mapPane, 'leaflet-touching');
          map.fire('movestart').fire('zoomstart');
          this._moved = true;
        }

        L.Util.cancelAnimFrame(this._animRequest);
        this._animRequest = L.Util.requestAnimFrame(this._updateOnMove, this, true, this._map._container);
        L.DomEvent.preventDefault(e);
      },
      _updateOnMove: function _updateOnMove() {
        var map = this._map,
            origin = this._getScaleOrigin(),
            center = map.layerPointToLatLng(origin),
            zoom = map.getScaleZoom(this._scale);

        map._animateZoom(center, zoom, this._startCenter, this._scale, this._delta);
      },
      _onTouchEnd: function _onTouchEnd() {
        if (!this._moved || !this._zooming) {
          this._zooming = false;
          return;
        }

        var map = this._map;
        this._zooming = false;
        L.DomUtil.removeClass(map._mapPane, 'leaflet-touching');
        L.Util.cancelAnimFrame(this._animRequest);
        L.DomEvent.off(document, 'touchmove', this._onTouchMove).off(document, 'touchend', this._onTouchEnd);

        var origin = this._getScaleOrigin(),
            center = map.layerPointToLatLng(origin),
            oldZoom = map.getZoom(),
            floatZoomDelta = map.getScaleZoom(this._scale) - oldZoom,
            roundZoomDelta = floatZoomDelta > 0 ? Math.ceil(floatZoomDelta) : Math.floor(floatZoomDelta),
            zoom = map._limitZoom(oldZoom + roundZoomDelta),
            scale = map.getZoomScale(zoom) / this._scale;

        map._animateZoom(center, zoom, origin, scale);
      },
      _getScaleOrigin: function _getScaleOrigin() {
        var centerOffset = this._centerOffset.subtract(this._delta).divideBy(this._scale);

        return this._startCenter.add(centerOffset);
      }
    });
    L.Map.addInitHook('addHandler', 'touchZoom', L.Map.TouchZoom);
    /*
     * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
     */

    L.Map.mergeOptions({
      tap: true,
      tapTolerance: 15
    });
    L.Map.Tap = L.Handler.extend({
      addHooks: function addHooks() {
        L.DomEvent.on(this._map._container, 'touchstart', this._onDown, this);
      },
      removeHooks: function removeHooks() {
        L.DomEvent.off(this._map._container, 'touchstart', this._onDown, this);
      },
      _onDown: function _onDown(e) {
        if (!e.touches) {
          return;
        }

        L.DomEvent.preventDefault(e);
        this._fireClick = true; // don't simulate click or track longpress if more than 1 touch

        if (e.touches.length > 1) {
          this._fireClick = false;
          clearTimeout(this._holdTimeout);
          return;
        }

        var first = e.touches[0],
            el = first.target;
        this._startPos = this._newPos = new L.Point(first.clientX, first.clientY); // if touching a link, highlight it

        if (el.tagName && el.tagName.toLowerCase() === 'a') {
          L.DomUtil.addClass(el, 'leaflet-active');
        } // simulate long hold but setting a timeout


        this._holdTimeout = setTimeout(L.bind(function () {
          if (this._isTapValid()) {
            this._fireClick = false;

            this._onUp();

            this._simulateEvent('contextmenu', first);
          }
        }, this), 1000);
        L.DomEvent.on(document, 'touchmove', this._onMove, this).on(document, 'touchend', this._onUp, this);
      },
      _onUp: function _onUp(e) {
        clearTimeout(this._holdTimeout);
        L.DomEvent.off(document, 'touchmove', this._onMove, this).off(document, 'touchend', this._onUp, this);

        if (this._fireClick && e && e.changedTouches) {
          var first = e.changedTouches[0],
              el = first.target;

          if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
            L.DomUtil.removeClass(el, 'leaflet-active');
          } // simulate click if the touch didn't move too much


          if (this._isTapValid()) {
            this._simulateEvent('click', first);
          }
        }
      },
      _isTapValid: function _isTapValid() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _onMove: function _onMove(e) {
        var first = e.touches[0];
        this._newPos = new L.Point(first.clientX, first.clientY);
      },
      _simulateEvent: function _simulateEvent(type, e) {
        var simulatedEvent = document.createEvent('MouseEvents');
        simulatedEvent._simulated = true;
        e.target._simulatedClick = true;
        simulatedEvent.initMouseEvent(type, true, true, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, false, false, false, false, 0, null);
        e.target.dispatchEvent(simulatedEvent);
      }
    });

    if (L.Browser.touch && !L.Browser.pointer) {
      L.Map.addInitHook('addHandler', 'tap', L.Map.Tap);
    }
    /*
     * L.Handler.ShiftDragZoom is used to add shift-drag zoom interaction to the map
      * (zoom to a selected bounding box), enabled by default.
     */


    L.Map.mergeOptions({
      boxZoom: true
    });
    L.Map.BoxZoom = L.Handler.extend({
      initialize: function initialize(map) {
        this._map = map;
        this._container = map._container;
        this._pane = map._panes.overlayPane;
        this._moved = false;
      },
      addHooks: function addHooks() {
        L.DomEvent.on(this._container, 'mousedown', this._onMouseDown, this);
      },
      removeHooks: function removeHooks() {
        L.DomEvent.off(this._container, 'mousedown', this._onMouseDown);
        this._moved = false;
      },
      moved: function moved() {
        return this._moved;
      },
      _onMouseDown: function _onMouseDown(e) {
        this._moved = false;

        if (!e.shiftKey || e.which !== 1 && e.button !== 1) {
          return false;
        }

        L.DomUtil.disableTextSelection();
        L.DomUtil.disableImageDrag();
        this._startLayerPoint = this._map.mouseEventToLayerPoint(e);
        L.DomEvent.on(document, 'mousemove', this._onMouseMove, this).on(document, 'mouseup', this._onMouseUp, this).on(document, 'keydown', this._onKeyDown, this);
      },
      _onMouseMove: function _onMouseMove(e) {
        if (!this._moved) {
          this._box = L.DomUtil.create('div', 'leaflet-zoom-box', this._pane);
          L.DomUtil.setPosition(this._box, this._startLayerPoint); //TODO refactor: move cursor to styles

          this._container.style.cursor = 'crosshair';

          this._map.fire('boxzoomstart');
        }

        var startPoint = this._startLayerPoint,
            box = this._box,
            layerPoint = this._map.mouseEventToLayerPoint(e),
            offset = layerPoint.subtract(startPoint),
            newPos = new L.Point(Math.min(layerPoint.x, startPoint.x), Math.min(layerPoint.y, startPoint.y));

        L.DomUtil.setPosition(box, newPos);
        this._moved = true; // TODO refactor: remove hardcoded 4 pixels

        box.style.width = Math.max(0, Math.abs(offset.x) - 4) + 'px';
        box.style.height = Math.max(0, Math.abs(offset.y) - 4) + 'px';
      },
      _finish: function _finish() {
        if (this._moved) {
          this._pane.removeChild(this._box);

          this._container.style.cursor = '';
        }

        L.DomUtil.enableTextSelection();
        L.DomUtil.enableImageDrag();
        L.DomEvent.off(document, 'mousemove', this._onMouseMove).off(document, 'mouseup', this._onMouseUp).off(document, 'keydown', this._onKeyDown);
      },
      _onMouseUp: function _onMouseUp(e) {
        this._finish();

        var map = this._map,
            layerPoint = map.mouseEventToLayerPoint(e);

        if (this._startLayerPoint.equals(layerPoint)) {
          return;
        }

        var bounds = new L.LatLngBounds(map.layerPointToLatLng(this._startLayerPoint), map.layerPointToLatLng(layerPoint));
        map.fitBounds(bounds);
        map.fire('boxzoomend', {
          boxZoomBounds: bounds
        });
      },
      _onKeyDown: function _onKeyDown(e) {
        if (e.keyCode === 27) {
          this._finish();
        }
      }
    });
    L.Map.addInitHook('addHandler', 'boxZoom', L.Map.BoxZoom);
    /*
     * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
     */

    L.Map.mergeOptions({
      keyboard: true,
      keyboardPanOffset: 80,
      keyboardZoomOffset: 1
    });
    L.Map.Keyboard = L.Handler.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 173]
      },
      initialize: function initialize(map) {
        this._map = map;

        this._setPanOffset(map.options.keyboardPanOffset);

        this._setZoomOffset(map.options.keyboardZoomOffset);
      },
      addHooks: function addHooks() {
        var container = this._map._container; // make the container focusable by tabbing

        if (container.tabIndex === -1) {
          container.tabIndex = '0';
        }

        L.DomEvent.on(container, 'focus', this._onFocus, this).on(container, 'blur', this._onBlur, this).on(container, 'mousedown', this._onMouseDown, this);

        this._map.on('focus', this._addHooks, this).on('blur', this._removeHooks, this);
      },
      removeHooks: function removeHooks() {
        this._removeHooks();

        var container = this._map._container;
        L.DomEvent.off(container, 'focus', this._onFocus, this).off(container, 'blur', this._onBlur, this).off(container, 'mousedown', this._onMouseDown, this);

        this._map.off('focus', this._addHooks, this).off('blur', this._removeHooks, this);
      },
      _onMouseDown: function _onMouseDown() {
        if (this._focused) {
          return;
        }

        var body = document.body,
            docEl = document.documentElement,
            top = body.scrollTop || docEl.scrollTop,
            left = body.scrollLeft || docEl.scrollLeft;

        this._map._container.focus();

        window.scrollTo(left, top);
      },
      _onFocus: function _onFocus() {
        this._focused = true;

        this._map.fire('focus');
      },
      _onBlur: function _onBlur() {
        this._focused = false;

        this._map.fire('blur');
      },
      _setPanOffset: function _setPanOffset(pan) {
        var keys = this._panKeys = {},
            codes = this.keyCodes,
            i,
            len;

        for (i = 0, len = codes.left.length; i < len; i++) {
          keys[codes.left[i]] = [-1 * pan, 0];
        }

        for (i = 0, len = codes.right.length; i < len; i++) {
          keys[codes.right[i]] = [pan, 0];
        }

        for (i = 0, len = codes.down.length; i < len; i++) {
          keys[codes.down[i]] = [0, pan];
        }

        for (i = 0, len = codes.up.length; i < len; i++) {
          keys[codes.up[i]] = [0, -1 * pan];
        }
      },
      _setZoomOffset: function _setZoomOffset(zoom) {
        var keys = this._zoomKeys = {},
            codes = this.keyCodes,
            i,
            len;

        for (i = 0, len = codes.zoomIn.length; i < len; i++) {
          keys[codes.zoomIn[i]] = zoom;
        }

        for (i = 0, len = codes.zoomOut.length; i < len; i++) {
          keys[codes.zoomOut[i]] = -zoom;
        }
      },
      _addHooks: function _addHooks() {
        L.DomEvent.on(document, 'keydown', this._onKeyDown, this);
      },
      _removeHooks: function _removeHooks() {
        L.DomEvent.off(document, 'keydown', this._onKeyDown, this);
      },
      _onKeyDown: function _onKeyDown(e) {
        var key = e.keyCode,
            map = this._map;

        if (key in this._panKeys) {
          if (map._panAnim && map._panAnim._inProgress) {
            return;
          }

          map.panBy(this._panKeys[key]);

          if (map.options.maxBounds) {
            map.panInsideBounds(map.options.maxBounds);
          }
        } else if (key in this._zoomKeys) {
          map.setZoom(map.getZoom() + this._zoomKeys[key]);
        } else {
          return;
        }

        L.DomEvent.stop(e);
      }
    });
    L.Map.addInitHook('addHandler', 'keyboard', L.Map.Keyboard);
    /*
     * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
     */

    L.Handler.MarkerDrag = L.Handler.extend({
      initialize: function initialize(marker) {
        this._marker = marker;
      },
      addHooks: function addHooks() {
        var icon = this._marker._icon;

        if (!this._draggable) {
          this._draggable = new L.Draggable(icon, icon);
        }

        this._draggable.on('dragstart', this._onDragStart, this).on('drag', this._onDrag, this).on('dragend', this._onDragEnd, this);

        this._draggable.enable();

        L.DomUtil.addClass(this._marker._icon, 'leaflet-marker-draggable');
      },
      removeHooks: function removeHooks() {
        this._draggable.off('dragstart', this._onDragStart, this).off('drag', this._onDrag, this).off('dragend', this._onDragEnd, this);

        this._draggable.disable();

        L.DomUtil.removeClass(this._marker._icon, 'leaflet-marker-draggable');
      },
      moved: function moved() {
        return this._draggable && this._draggable._moved;
      },
      _onDragStart: function _onDragStart() {
        this._marker.closePopup().fire('movestart').fire('dragstart');
      },
      _onDrag: function _onDrag() {
        var marker = this._marker,
            shadow = marker._shadow,
            iconPos = L.DomUtil.getPosition(marker._icon),
            latlng = marker._map.layerPointToLatLng(iconPos); // update shadow position


        if (shadow) {
          L.DomUtil.setPosition(shadow, iconPos);
        }

        marker._latlng = latlng;
        marker.fire('move', {
          latlng: latlng
        }).fire('drag');
      },
      _onDragEnd: function _onDragEnd(e) {
        this._marker.fire('moveend').fire('dragend', e);
      }
    });
    /*
     * L.Control is a base class for implementing map controls. Handles positioning.
     * All other controls extend from this class.
     */

    L.Control = L.Class.extend({
      options: {
        position: 'topright'
      },
      initialize: function initialize(options) {
        L.setOptions(this, options);
      },
      getPosition: function getPosition() {
        return this.options.position;
      },
      setPosition: function setPosition(position) {
        var map = this._map;

        if (map) {
          map.removeControl(this);
        }

        this.options.position = position;

        if (map) {
          map.addControl(this);
        }

        return this;
      },
      getContainer: function getContainer() {
        return this._container;
      },
      addTo: function addTo(map) {
        this._map = map;
        var container = this._container = this.onAdd(map),
            pos = this.getPosition(),
            corner = map._controlCorners[pos];
        L.DomUtil.addClass(container, 'leaflet-control');

        if (pos.indexOf('bottom') !== -1) {
          corner.insertBefore(container, corner.firstChild);
        } else {
          corner.appendChild(container);
        }

        return this;
      },
      removeFrom: function removeFrom(map) {
        var pos = this.getPosition(),
            corner = map._controlCorners[pos];
        corner.removeChild(this._container);
        this._map = null;

        if (this.onRemove) {
          this.onRemove(map);
        }

        return this;
      },
      _refocusOnMap: function _refocusOnMap() {
        if (this._map) {
          this._map.getContainer().focus();
        }
      }
    });

    L.control = function (options) {
      return new L.Control(options);
    }; // adds control-related methods to L.Map


    L.Map.include({
      addControl: function addControl(control) {
        control.addTo(this);
        return this;
      },
      removeControl: function removeControl(control) {
        control.removeFrom(this);
        return this;
      },
      _initControlPos: function _initControlPos() {
        var corners = this._controlCorners = {},
            l = 'leaflet-',
            container = this._controlContainer = L.DomUtil.create('div', l + 'control-container', this._container);

        function createCorner(vSide, hSide) {
          var className = l + vSide + ' ' + l + hSide;
          corners[vSide + hSide] = L.DomUtil.create('div', className, container);
        }

        createCorner('top', 'left');
        createCorner('top', 'right');
        createCorner('bottom', 'left');
        createCorner('bottom', 'right');
      },
      _clearControlPos: function _clearControlPos() {
        this._container.removeChild(this._controlContainer);
      }
    });
    /*
     * L.Control.Zoom is used for the default zoom buttons on the map.
     */

    L.Control.Zoom = L.Control.extend({
      options: {
        position: 'topleft',
        zoomInText: '+',
        zoomInTitle: 'Zoom in',
        zoomOutText: '-',
        zoomOutTitle: 'Zoom out'
      },
      onAdd: function onAdd(map) {
        var zoomName = 'leaflet-control-zoom',
            container = L.DomUtil.create('div', zoomName + ' leaflet-bar');
        this._map = map;
        this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, zoomName + '-in', container, this._zoomIn, this);
        this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, zoomName + '-out', container, this._zoomOut, this);

        this._updateDisabled();

        map.on('zoomend zoomlevelschange', this._updateDisabled, this);
        return container;
      },
      onRemove: function onRemove(map) {
        map.off('zoomend zoomlevelschange', this._updateDisabled, this);
      },
      _zoomIn: function _zoomIn(e) {
        this._map.zoomIn(e.shiftKey ? 3 : 1);
      },
      _zoomOut: function _zoomOut(e) {
        this._map.zoomOut(e.shiftKey ? 3 : 1);
      },
      _createButton: function _createButton(html, title, className, container, fn, context) {
        var link = L.DomUtil.create('a', className, container);
        link.innerHTML = html;
        link.href = '#';
        link.title = title;
        var stop = L.DomEvent.stopPropagation;
        L.DomEvent.on(link, 'click', stop).on(link, 'mousedown', stop).on(link, 'dblclick', stop).on(link, 'click', L.DomEvent.preventDefault).on(link, 'click', fn, context).on(link, 'click', this._refocusOnMap, context);
        return link;
      },
      _updateDisabled: function _updateDisabled() {
        var map = this._map,
            className = 'leaflet-disabled';
        L.DomUtil.removeClass(this._zoomInButton, className);
        L.DomUtil.removeClass(this._zoomOutButton, className);

        if (map._zoom === map.getMinZoom()) {
          L.DomUtil.addClass(this._zoomOutButton, className);
        }

        if (map._zoom === map.getMaxZoom()) {
          L.DomUtil.addClass(this._zoomInButton, className);
        }
      }
    });
    L.Map.mergeOptions({
      zoomControl: true
    });
    L.Map.addInitHook(function () {
      if (this.options.zoomControl) {
        this.zoomControl = new L.Control.Zoom();
        this.addControl(this.zoomControl);
      }
    });

    L.control.zoom = function (options) {
      return new L.Control.Zoom(options);
    };
    /*
     * L.Control.Attribution is used for displaying attribution on the map (added by default).
     */


    L.Control.Attribution = L.Control.extend({
      options: {
        position: 'bottomright',
        prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
      },
      initialize: function initialize(options) {
        L.setOptions(this, options);
        this._attributions = {};
      },
      onAdd: function onAdd(map) {
        this._container = L.DomUtil.create('div', 'leaflet-control-attribution');
        L.DomEvent.disableClickPropagation(this._container);

        for (var i in map._layers) {
          if (map._layers[i].getAttribution) {
            this.addAttribution(map._layers[i].getAttribution());
          }
        }

        map.on('layeradd', this._onLayerAdd, this).on('layerremove', this._onLayerRemove, this);

        this._update();

        return this._container;
      },
      onRemove: function onRemove(map) {
        map.off('layeradd', this._onLayerAdd).off('layerremove', this._onLayerRemove);
      },
      setPrefix: function setPrefix(prefix) {
        this.options.prefix = prefix;

        this._update();

        return this;
      },
      addAttribution: function addAttribution(text) {
        if (!text) {
          return;
        }

        if (!this._attributions[text]) {
          this._attributions[text] = 0;
        }

        this._attributions[text]++;

        this._update();

        return this;
      },
      removeAttribution: function removeAttribution(text) {
        if (!text) {
          return;
        }

        if (this._attributions[text]) {
          this._attributions[text]--;

          this._update();
        }

        return this;
      },
      _update: function _update() {
        if (!this._map) {
          return;
        }

        var attribs = [];

        for (var i in this._attributions) {
          if (this._attributions[i]) {
            attribs.push(i);
          }
        }

        var prefixAndAttribs = [];

        if (this.options.prefix) {
          prefixAndAttribs.push(this.options.prefix);
        }

        if (attribs.length) {
          prefixAndAttribs.push(attribs.join(', '));
        }

        this._container.innerHTML = prefixAndAttribs.join(' | ');
      },
      _onLayerAdd: function _onLayerAdd(e) {
        if (e.layer.getAttribution) {
          this.addAttribution(e.layer.getAttribution());
        }
      },
      _onLayerRemove: function _onLayerRemove(e) {
        if (e.layer.getAttribution) {
          this.removeAttribution(e.layer.getAttribution());
        }
      }
    });
    L.Map.mergeOptions({
      attributionControl: true
    });
    L.Map.addInitHook(function () {
      if (this.options.attributionControl) {
        this.attributionControl = new L.Control.Attribution().addTo(this);
      }
    });

    L.control.attribution = function (options) {
      return new L.Control.Attribution(options);
    };
    /*
     * L.Control.Scale is used for displaying metric/imperial scale on the map.
     */


    L.Control.Scale = L.Control.extend({
      options: {
        position: 'bottomleft',
        maxWidth: 100,
        metric: true,
        imperial: true,
        updateWhenIdle: false
      },
      onAdd: function onAdd(map) {
        this._map = map;
        var className = 'leaflet-control-scale',
            container = L.DomUtil.create('div', className),
            options = this.options;

        this._addScales(options, className, container);

        map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
        map.whenReady(this._update, this);
        return container;
      },
      onRemove: function onRemove(map) {
        map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
      },
      _addScales: function _addScales(options, className, container) {
        if (options.metric) {
          this._mScale = L.DomUtil.create('div', className + '-line', container);
        }

        if (options.imperial) {
          this._iScale = L.DomUtil.create('div', className + '-line', container);
        }
      },
      _update: function _update() {
        var bounds = this._map.getBounds(),
            centerLat = bounds.getCenter().lat,
            halfWorldMeters = 6378137 * Math.PI * Math.cos(centerLat * Math.PI / 180),
            dist = halfWorldMeters * (bounds.getNorthEast().lng - bounds.getSouthWest().lng) / 180,
            size = this._map.getSize(),
            options = this.options,
            maxMeters = 0;

        if (size.x > 0) {
          maxMeters = dist * (options.maxWidth / size.x);
        }

        this._updateScales(options, maxMeters);
      },
      _updateScales: function _updateScales(options, maxMeters) {
        if (options.metric && maxMeters) {
          this._updateMetric(maxMeters);
        }

        if (options.imperial && maxMeters) {
          this._updateImperial(maxMeters);
        }
      },
      _updateMetric: function _updateMetric(maxMeters) {
        var meters = this._getRoundNum(maxMeters);

        this._mScale.style.width = this._getScaleWidth(meters / maxMeters) + 'px';
        this._mScale.innerHTML = meters < 1000 ? meters + ' m' : meters / 1000 + ' km';
      },
      _updateImperial: function _updateImperial(maxMeters) {
        var maxFeet = maxMeters * 3.2808399,
            scale = this._iScale,
            maxMiles,
            miles,
            feet;

        if (maxFeet > 5280) {
          maxMiles = maxFeet / 5280;
          miles = this._getRoundNum(maxMiles);
          scale.style.width = this._getScaleWidth(miles / maxMiles) + 'px';
          scale.innerHTML = miles + ' mi';
        } else {
          feet = this._getRoundNum(maxFeet);
          scale.style.width = this._getScaleWidth(feet / maxFeet) + 'px';
          scale.innerHTML = feet + ' ft';
        }
      },
      _getScaleWidth: function _getScaleWidth(ratio) {
        return Math.round(this.options.maxWidth * ratio) - 10;
      },
      _getRoundNum: function _getRoundNum(num) {
        var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
            d = num / pow10;
        d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;
        return pow10 * d;
      }
    });

    L.control.scale = function (options) {
      return new L.Control.Scale(options);
    };
    /*
     * L.Control.Layers is a control to allow users to switch between different layers on the map.
     */


    L.Control.Layers = L.Control.extend({
      options: {
        collapsed: true,
        position: 'topright',
        autoZIndex: true
      },
      initialize: function initialize(baseLayers, overlays, options) {
        L.setOptions(this, options);
        this._layers = {};
        this._lastZIndex = 0;
        this._handlingClick = false;

        for (var i in baseLayers) {
          this._addLayer(baseLayers[i], i);
        }

        for (i in overlays) {
          this._addLayer(overlays[i], i, true);
        }
      },
      onAdd: function onAdd(map) {
        this._initLayout();

        this._update();

        map.on('layeradd', this._onLayerChange, this).on('layerremove', this._onLayerChange, this);
        return this._container;
      },
      onRemove: function onRemove(map) {
        map.off('layeradd', this._onLayerChange).off('layerremove', this._onLayerChange);
      },
      addBaseLayer: function addBaseLayer(layer, name) {
        this._addLayer(layer, name);

        this._update();

        return this;
      },
      addOverlay: function addOverlay(layer, name) {
        this._addLayer(layer, name, true);

        this._update();

        return this;
      },
      removeLayer: function removeLayer(layer) {
        var id = L.stamp(layer);
        delete this._layers[id];

        this._update();

        return this;
      },
      _initLayout: function _initLayout() {
        var className = 'leaflet-control-layers',
            container = this._container = L.DomUtil.create('div', className); //Makes this work on IE10 Touch devices by stopping it from firing a mouseout event when the touch is released

        container.setAttribute('aria-haspopup', true);

        if (!L.Browser.touch) {
          L.DomEvent.disableClickPropagation(container).disableScrollPropagation(container);
        } else {
          L.DomEvent.on(container, 'click', L.DomEvent.stopPropagation);
        }

        var form = this._form = L.DomUtil.create('form', className + '-list');

        if (this.options.collapsed) {
          if (!L.Browser.android) {
            L.DomEvent.on(container, 'mouseover', this._expand, this).on(container, 'mouseout', this._collapse, this);
          }

          var link = this._layersLink = L.DomUtil.create('a', className + '-toggle', container);
          link.href = '#';
          link.title = 'Layers';

          if (L.Browser.touch) {
            L.DomEvent.on(link, 'click', L.DomEvent.stop).on(link, 'click', this._expand, this);
          } else {
            L.DomEvent.on(link, 'focus', this._expand, this);
          } //Work around for Firefox android issue https://github.com/Leaflet/Leaflet/issues/2033


          L.DomEvent.on(form, 'click', function () {
            setTimeout(L.bind(this._onInputClick, this), 0);
          }, this);

          this._map.on('click', this._collapse, this); // TODO keyboard accessibility

        } else {
          this._expand();
        }

        this._baseLayersList = L.DomUtil.create('div', className + '-base', form);
        this._separator = L.DomUtil.create('div', className + '-separator', form);
        this._overlaysList = L.DomUtil.create('div', className + '-overlays', form);
        container.appendChild(form);
      },
      _addLayer: function _addLayer(layer, name, overlay) {
        var id = L.stamp(layer);
        this._layers[id] = {
          layer: layer,
          name: name,
          overlay: overlay
        };

        if (this.options.autoZIndex && layer.setZIndex) {
          this._lastZIndex++;
          layer.setZIndex(this._lastZIndex);
        }
      },
      _update: function _update() {
        if (!this._container) {
          return;
        }

        this._baseLayersList.innerHTML = '';
        this._overlaysList.innerHTML = '';
        var baseLayersPresent = false,
            overlaysPresent = false,
            i,
            obj;

        for (i in this._layers) {
          obj = this._layers[i];

          this._addItem(obj);

          overlaysPresent = overlaysPresent || obj.overlay;
          baseLayersPresent = baseLayersPresent || !obj.overlay;
        }

        this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';
      },
      _onLayerChange: function _onLayerChange(e) {
        var obj = this._layers[L.stamp(e.layer)];

        if (!obj) {
          return;
        }

        if (!this._handlingClick) {
          this._update();
        }

        var type = obj.overlay ? e.type === 'layeradd' ? 'overlayadd' : 'overlayremove' : e.type === 'layeradd' ? 'baselayerchange' : null;

        if (type) {
          this._map.fire(type, obj);
        }
      },
      // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
      _createRadioElement: function _createRadioElement(name, checked) {
        var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"';

        if (checked) {
          radioHtml += ' checked="checked"';
        }

        radioHtml += '/>';
        var radioFragment = document.createElement('div');
        radioFragment.innerHTML = radioHtml;
        return radioFragment.firstChild;
      },
      _addItem: function _addItem(obj) {
        var label = document.createElement('label'),
            input,
            checked = this._map.hasLayer(obj.layer);

        if (obj.overlay) {
          input = document.createElement('input');
          input.type = 'checkbox';
          input.className = 'leaflet-control-layers-selector';
          input.defaultChecked = checked;
        } else {
          input = this._createRadioElement('leaflet-base-layers', checked);
        }

        input.layerId = L.stamp(obj.layer);
        L.DomEvent.on(input, 'click', this._onInputClick, this);
        var name = document.createElement('span');
        name.innerHTML = ' ' + obj.name;
        label.appendChild(input);
        label.appendChild(name);
        var container = obj.overlay ? this._overlaysList : this._baseLayersList;
        container.appendChild(label);
        return label;
      },
      _onInputClick: function _onInputClick() {
        var i,
            input,
            obj,
            inputs = this._form.getElementsByTagName('input'),
            inputsLen = inputs.length;

        this._handlingClick = true;

        for (i = 0; i < inputsLen; i++) {
          input = inputs[i];
          obj = this._layers[input.layerId];

          if (input.checked && !this._map.hasLayer(obj.layer)) {
            this._map.addLayer(obj.layer);
          } else if (!input.checked && this._map.hasLayer(obj.layer)) {
            this._map.removeLayer(obj.layer);
          }
        }

        this._handlingClick = false;

        this._refocusOnMap();
      },
      _expand: function _expand() {
        L.DomUtil.addClass(this._container, 'leaflet-control-layers-expanded');
      },
      _collapse: function _collapse() {
        this._container.className = this._container.className.replace(' leaflet-control-layers-expanded', '');
      }
    });

    L.control.layers = function (baseLayers, overlays, options) {
      return new L.Control.Layers(baseLayers, overlays, options);
    };
    /*
     * L.PosAnimation is used by Leaflet internally for pan animations.
     */


    L.PosAnimation = L.Class.extend({
      includes: L.Mixin.Events,
      run: function run(el, newPos, duration, easeLinearity) {
        // (HTMLElement, Point[, Number, Number])
        this.stop();
        this._el = el;
        this._inProgress = true;
        this._newPos = newPos;
        this.fire('start');
        el.style[L.DomUtil.TRANSITION] = 'all ' + (duration || 0.25) + 's cubic-bezier(0,0,' + (easeLinearity || 0.5) + ',1)';
        L.DomEvent.on(el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);
        L.DomUtil.setPosition(el, newPos); // toggle reflow, Chrome flickers for some reason if you don't do this

        L.Util.falseFn(el.offsetWidth); // there's no native way to track value updates of transitioned properties, so we imitate this

        this._stepTimer = setInterval(L.bind(this._onStep, this), 50);
      },
      stop: function stop() {
        if (!this._inProgress) {
          return;
        } // if we just removed the transition property, the element would jump to its final position,
        // so we need to make it stay at the current position


        L.DomUtil.setPosition(this._el, this._getPos());

        this._onTransitionEnd();

        L.Util.falseFn(this._el.offsetWidth); // force reflow in case we are about to start a new animation
      },
      _onStep: function _onStep() {
        var stepPos = this._getPos();

        if (!stepPos) {
          this._onTransitionEnd();

          return;
        } // jshint camelcase: false
        // make L.DomUtil.getPosition return intermediate position value during animation


        this._el._leaflet_pos = stepPos;
        this.fire('step');
      },
      // you can't easily get intermediate values of properties animated with CSS3 Transitions,
      // we need to parse computed style (in case of transform it returns matrix string)
      _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
      _getPos: function _getPos() {
        var left,
            top,
            matches,
            el = this._el,
            style = window.getComputedStyle(el);

        if (L.Browser.any3d) {
          matches = style[L.DomUtil.TRANSFORM].match(this._transformRe);

          if (!matches) {
            return;
          }

          left = parseFloat(matches[1]);
          top = parseFloat(matches[2]);
        } else {
          left = parseFloat(style.left);
          top = parseFloat(style.top);
        }

        return new L.Point(left, top, true);
      },
      _onTransitionEnd: function _onTransitionEnd() {
        L.DomEvent.off(this._el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);

        if (!this._inProgress) {
          return;
        }

        this._inProgress = false;
        this._el.style[L.DomUtil.TRANSITION] = ''; // jshint camelcase: false
        // make sure L.DomUtil.getPosition returns the final position value after animation

        this._el._leaflet_pos = this._newPos;
        clearInterval(this._stepTimer);
        this.fire('step').fire('end');
      }
    });
    /*
     * Extends L.Map to handle panning animations.
     */

    L.Map.include({
      setView: function setView(center, zoom, options) {
        zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
        center = this._limitCenter(L.latLng(center), zoom, this.options.maxBounds);
        options = options || {};

        if (this._panAnim) {
          this._panAnim.stop();
        }

        if (this._loaded && !options.reset && options !== true) {
          if (options.animate !== undefined) {
            options.zoom = L.extend({
              animate: options.animate
            }, options.zoom);
            options.pan = L.extend({
              animate: options.animate
            }, options.pan);
          } // try animating pan or zoom


          var animated = this._zoom !== zoom ? this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) : this._tryAnimatedPan(center, options.pan);

          if (animated) {
            // prevent resize handler call, the view will refresh after animation anyway
            clearTimeout(this._sizeTimer);
            return this;
          }
        } // animation didn't start, just reset the map view


        this._resetView(center, zoom);

        return this;
      },
      panBy: function panBy(offset, options) {
        offset = L.point(offset).round();
        options = options || {};

        if (!offset.x && !offset.y) {
          return this;
        }

        if (!this._panAnim) {
          this._panAnim = new L.PosAnimation();

          this._panAnim.on({
            'step': this._onPanTransitionStep,
            'end': this._onPanTransitionEnd
          }, this);
        } // don't fire movestart if animating inertia


        if (!options.noMoveStart) {
          this.fire('movestart');
        } // animate pan unless animate: false specified


        if (options.animate !== false) {
          L.DomUtil.addClass(this._mapPane, 'leaflet-pan-anim');

          var newPos = this._getMapPanePos().subtract(offset);

          this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
        } else {
          this._rawPanBy(offset);

          this.fire('move').fire('moveend');
        }

        return this;
      },
      _onPanTransitionStep: function _onPanTransitionStep() {
        this.fire('move');
      },
      _onPanTransitionEnd: function _onPanTransitionEnd() {
        L.DomUtil.removeClass(this._mapPane, 'leaflet-pan-anim');
        this.fire('moveend');
      },
      _tryAnimatedPan: function _tryAnimatedPan(center, options) {
        // difference between the new and current centers in pixels
        var offset = this._getCenterOffset(center)._floor(); // don't animate too far unless animate: true specified in options


        if ((options && options.animate) !== true && !this.getSize().contains(offset)) {
          return false;
        }

        this.panBy(offset, options);
        return true;
      }
    });
    /*
     * L.PosAnimation fallback implementation that powers Leaflet pan animations
     * in browsers that don't support CSS3 Transitions.
     */

    L.PosAnimation = L.DomUtil.TRANSITION ? L.PosAnimation : L.PosAnimation.extend({
      run: function run(el, newPos, duration, easeLinearity) {
        // (HTMLElement, Point[, Number, Number])
        this.stop();
        this._el = el;
        this._inProgress = true;
        this._duration = duration || 0.25;
        this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);
        this._startPos = L.DomUtil.getPosition(el);
        this._offset = newPos.subtract(this._startPos);
        this._startTime = +new Date();
        this.fire('start');

        this._animate();
      },
      stop: function stop() {
        if (!this._inProgress) {
          return;
        }

        this._step();

        this._complete();
      },
      _animate: function _animate() {
        // animation loop
        this._animId = L.Util.requestAnimFrame(this._animate, this);

        this._step();
      },
      _step: function _step() {
        var elapsed = +new Date() - this._startTime,
            duration = this._duration * 1000;

        if (elapsed < duration) {
          this._runFrame(this._easeOut(elapsed / duration));
        } else {
          this._runFrame(1);

          this._complete();
        }
      },
      _runFrame: function _runFrame(progress) {
        var pos = this._startPos.add(this._offset.multiplyBy(progress));

        L.DomUtil.setPosition(this._el, pos);
        this.fire('step');
      },
      _complete: function _complete() {
        L.Util.cancelAnimFrame(this._animId);
        this._inProgress = false;
        this.fire('end');
      },
      _easeOut: function _easeOut(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      }
    });
    /*
     * Extends L.Map to handle zoom animations.
     */

    L.Map.mergeOptions({
      zoomAnimation: true,
      zoomAnimationThreshold: 4
    });

    if (L.DomUtil.TRANSITION) {
      L.Map.addInitHook(function () {
        // don't animate on browsers without hardware-accelerated transitions or old Android/Opera
        this._zoomAnimated = this.options.zoomAnimation && L.DomUtil.TRANSITION && L.Browser.any3d && !L.Browser.android23 && !L.Browser.mobileOpera; // zoom transitions run with the same duration for all layers, so if one of transitionend events
        // happens after starting zoom animation (propagating to the map pane), we know that it ended globally

        if (this._zoomAnimated) {
          L.DomEvent.on(this._mapPane, L.DomUtil.TRANSITION_END, this._catchTransitionEnd, this);
        }
      });
    }

    L.Map.include(!L.DomUtil.TRANSITION ? {} : {
      _catchTransitionEnd: function _catchTransitionEnd(e) {
        if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
          this._onZoomTransitionEnd();
        }
      },
      _nothingToAnimate: function _nothingToAnimate() {
        return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
      },
      _tryAnimatedZoom: function _tryAnimatedZoom(center, zoom, options) {
        if (this._animatingZoom) {
          return true;
        }

        options = options || {}; // don't animate if disabled, not supported or zoom difference is too large

        if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() || Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) {
          return false;
        } // offset is the pixel coords of the zoom origin relative to the current center


        var scale = this.getZoomScale(zoom),
            offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale),
            origin = this._getCenterLayerPoint()._add(offset); // don't animate if the zoom origin isn't within one screen from the current center, unless forced


        if (options.animate !== true && !this.getSize().contains(offset)) {
          return false;
        }

        this.fire('movestart').fire('zoomstart');

        this._animateZoom(center, zoom, origin, scale, null, true);

        return true;
      },
      _animateZoom: function _animateZoom(center, zoom, origin, scale, delta, backwards) {
        this._animatingZoom = true; // put transform transition on all layers with leaflet-zoom-animated class

        L.DomUtil.addClass(this._mapPane, 'leaflet-zoom-anim'); // remember what center/zoom to set after animation

        this._animateToCenter = center;
        this._animateToZoom = zoom; // disable any dragging during animation

        if (L.Draggable) {
          L.Draggable._disabled = true;
        }

        this.fire('zoomanim', {
          center: center,
          zoom: zoom,
          origin: origin,
          scale: scale,
          delta: delta,
          backwards: backwards
        });
      },
      _onZoomTransitionEnd: function _onZoomTransitionEnd() {
        this._animatingZoom = false;
        L.DomUtil.removeClass(this._mapPane, 'leaflet-zoom-anim');

        this._resetView(this._animateToCenter, this._animateToZoom, true, true);

        if (L.Draggable) {
          L.Draggable._disabled = false;
        }
      }
    });
    /*
    	Zoom animation logic for L.TileLayer.
    */

    L.TileLayer.include({
      _animateZoom: function _animateZoom(e) {
        if (!this._animating) {
          this._animating = true;

          this._prepareBgBuffer();
        }

        var bg = this._bgBuffer,
            transform = L.DomUtil.TRANSFORM,
            initialTransform = e.delta ? L.DomUtil.getTranslateString(e.delta) : bg.style[transform],
            scaleStr = L.DomUtil.getScaleString(e.scale, e.origin);
        bg.style[transform] = e.backwards ? scaleStr + ' ' + initialTransform : initialTransform + ' ' + scaleStr;
      },
      _endZoomAnim: function _endZoomAnim() {
        var front = this._tileContainer,
            bg = this._bgBuffer;
        front.style.visibility = '';
        front.parentNode.appendChild(front); // Bring to fore
        // force reflow

        L.Util.falseFn(bg.offsetWidth);
        this._animating = false;
      },
      _clearBgBuffer: function _clearBgBuffer() {
        var map = this._map;

        if (map && !map._animatingZoom && !map.touchZoom._zooming) {
          this._bgBuffer.innerHTML = '';
          this._bgBuffer.style[L.DomUtil.TRANSFORM] = '';
        }
      },
      _prepareBgBuffer: function _prepareBgBuffer() {
        var front = this._tileContainer,
            bg = this._bgBuffer; // if foreground layer doesn't have many tiles but bg layer does,
        // keep the existing bg layer and just zoom it some more

        var bgLoaded = this._getLoadedTilesPercentage(bg),
            frontLoaded = this._getLoadedTilesPercentage(front);

        if (bg && bgLoaded > 0.5 && frontLoaded < 0.5) {
          front.style.visibility = 'hidden';

          this._stopLoadingImages(front);

          return;
        } // prepare the buffer to become the front tile pane


        bg.style.visibility = 'hidden';
        bg.style[L.DomUtil.TRANSFORM] = ''; // switch out the current layer to be the new bg layer (and vice-versa)

        this._tileContainer = bg;
        bg = this._bgBuffer = front;

        this._stopLoadingImages(bg); //prevent bg buffer from clearing right after zoom


        clearTimeout(this._clearBgBufferTimer);
      },
      _getLoadedTilesPercentage: function _getLoadedTilesPercentage(container) {
        var tiles = container.getElementsByTagName('img'),
            i,
            len,
            count = 0;

        for (i = 0, len = tiles.length; i < len; i++) {
          if (tiles[i].complete) {
            count++;
          }
        }

        return count / len;
      },
      // stops loading all tiles in the background layer
      _stopLoadingImages: function _stopLoadingImages(container) {
        var tiles = Array.prototype.slice.call(container.getElementsByTagName('img')),
            i,
            len,
            tile;

        for (i = 0, len = tiles.length; i < len; i++) {
          tile = tiles[i];

          if (!tile.complete) {
            tile.onload = L.Util.falseFn;
            tile.onerror = L.Util.falseFn;
            tile.src = L.Util.emptyImageUrl;
            tile.parentNode.removeChild(tile);
          }
        }
      }
    });
    /*
     * Provides L.Map with convenient shortcuts for using browser geolocation features.
     */

    L.Map.include({
      _defaultLocateOptions: {
        watch: false,
        setView: false,
        maxZoom: Infinity,
        timeout: 10000,
        maximumAge: 0,
        enableHighAccuracy: false
      },
      locate: function locate(
      /*Object*/
      options) {
        options = this._locateOptions = L.extend(this._defaultLocateOptions, options);

        if (!navigator.geolocation) {
          this._handleGeolocationError({
            code: 0,
            message: 'Geolocation not supported.'
          });

          return this;
        }

        var onResponse = L.bind(this._handleGeolocationResponse, this),
            onError = L.bind(this._handleGeolocationError, this);

        if (options.watch) {
          this._locationWatchId = navigator.geolocation.watchPosition(onResponse, onError, options);
        } else {
          navigator.geolocation.getCurrentPosition(onResponse, onError, options);
        }

        return this;
      },
      stopLocate: function stopLocate() {
        if (navigator.geolocation) {
          navigator.geolocation.clearWatch(this._locationWatchId);
        }

        if (this._locateOptions) {
          this._locateOptions.setView = false;
        }

        return this;
      },
      _handleGeolocationError: function _handleGeolocationError(error) {
        var c = error.code,
            message = error.message || (c === 1 ? 'permission denied' : c === 2 ? 'position unavailable' : 'timeout');

        if (this._locateOptions.setView && !this._loaded) {
          this.fitWorld();
        }

        this.fire('locationerror', {
          code: c,
          message: 'Geolocation error: ' + message + '.'
        });
      },
      _handleGeolocationResponse: function _handleGeolocationResponse(pos) {
        var lat = pos.coords.latitude,
            lng = pos.coords.longitude,
            latlng = new L.LatLng(lat, lng),
            latAccuracy = 180 * pos.coords.accuracy / 40075017,
            lngAccuracy = latAccuracy / Math.cos(L.LatLng.DEG_TO_RAD * lat),
            bounds = L.latLngBounds([lat - latAccuracy, lng - lngAccuracy], [lat + latAccuracy, lng + lngAccuracy]),
            options = this._locateOptions;

        if (options.setView) {
          var zoom = Math.min(this.getBoundsZoom(bounds), options.maxZoom);
          this.setView(latlng, zoom);
        }

        var data = {
          latlng: latlng,
          bounds: bounds,
          timestamp: pos.timestamp
        };

        for (var i in pos.coords) {
          if (typeof pos.coords[i] === 'number') {
            data[i] = pos.coords[i];
          }
        }

        this.fire('locationfound', data);
      }
    });
  })(window, document);
};

/***/ }),

/***/ "./app/javascript/leaflet.js":
/*!***********************************!*\
  !*** ./app/javascript/leaflet.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin
 (c) 2010-2011, CloudMade
*/
window.onload = function (event) {
  !function (t, e, i) {
    var n = t.L,
        o = {};
    o.version = "0.7.2",  true && "object" == typeof module.exports ? module.exports = o :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), o.noConflict = function () {
      return t.L = n, this;
    }, t.L = o, o.Util = {
      extend: function extend(t) {
        var e,
            i,
            n,
            o,
            s = Array.prototype.slice.call(arguments, 1);

        for (i = 0, n = s.length; n > i; i++) {
          o = s[i] || {};

          for (e in o) {
            o.hasOwnProperty(e) && (t[e] = o[e]);
          }
        }

        return t;
      },
      bind: function bind(t, e) {
        var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
        return function () {
          return t.apply(e, i || arguments);
        };
      },
      stamp: function () {
        var t = 0,
            e = "_leaflet_id";
        return function (i) {
          return i[e] = i[e] || ++t, i[e];
        };
      }(),
      invokeEach: function invokeEach(t, e, i) {
        var n, o;

        if ("object" == typeof t) {
          o = Array.prototype.slice.call(arguments, 3);

          for (n in t) {
            e.apply(i, [n, t[n]].concat(o));
          }

          return !0;
        }

        return !1;
      },
      limitExecByInterval: function limitExecByInterval(t, e, i) {
        var n, o;
        return function s() {
          var a = arguments;
          return n ? void (o = !0) : (n = !0, setTimeout(function () {
            n = !1, o && (s.apply(i, a), o = !1);
          }, e), void t.apply(i, a));
        };
      },
      falseFn: function falseFn() {
        return !1;
      },
      formatNum: function formatNum(t, e) {
        var i = Math.pow(10, e || 5);
        return Math.round(t * i) / i;
      },
      trim: function trim(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      },
      splitWords: function splitWords(t) {
        return o.Util.trim(t).split(/\s+/);
      },
      setOptions: function setOptions(t, e) {
        return t.options = o.extend({}, t.options, e), t.options;
      },
      getParamString: function getParamString(t, e, i) {
        var n = [];

        for (var o in t) {
          n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        }

        return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&");
      },
      template: function template(t, e) {
        return t.replace(/\{ *([\w_]+) *\}/g, function (t, n) {
          var o = e[n];
          if (o === i) throw new Error("No value provided for variable " + t);
          return "function" == typeof o && (o = o(e)), o;
        });
      },
      isArray: Array.isArray || function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      },
      emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
    }, function () {
      function e(e) {
        var i,
            n,
            o = ["webkit", "moz", "o", "ms"];

        for (i = 0; i < o.length && !n; i++) {
          n = t[o[i] + e];
        }

        return n;
      }

      function i(e) {
        var i = +new Date(),
            o = Math.max(0, 16 - (i - n));
        return n = i + o, t.setTimeout(e, o);
      }

      var n = 0,
          s = t.requestAnimationFrame || e("RequestAnimationFrame") || i,
          a = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function (e) {
        t.clearTimeout(e);
      };

      o.Util.requestAnimFrame = function (e, n, a, r) {
        return e = o.bind(e, n), a && s === i ? void e() : s.call(t, e, r);
      }, o.Util.cancelAnimFrame = function (e) {
        e && a.call(t, e);
      };
    }(), o.extend = o.Util.extend, o.bind = o.Util.bind, o.stamp = o.Util.stamp, o.setOptions = o.Util.setOptions, o.Class = function () {}, o.Class.extend = function (t) {
      var e = function e() {
        this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks();
      },
          i = function i() {};

      i.prototype = this.prototype;
      var n = new i();
      n.constructor = e, e.prototype = n;

      for (var s in this) {
        this.hasOwnProperty(s) && "prototype" !== s && (e[s] = this[s]);
      }

      t.statics && (o.extend(e, t.statics), delete t.statics), t.includes && (o.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), t.options && n.options && (t.options = o.extend({}, n.options, t.options)), o.extend(n, t), n._initHooks = [];
      var a = this;
      return e.__super__ = a.prototype, n.callInitHooks = function () {
        if (!this._initHooksCalled) {
          a.prototype.callInitHooks && a.prototype.callInitHooks.call(this), this._initHooksCalled = !0;

          for (var t = 0, e = n._initHooks.length; e > t; t++) {
            n._initHooks[t].call(this);
          }
        }
      }, e;
    }, o.Class.include = function (t) {
      o.extend(this.prototype, t);
    }, o.Class.mergeOptions = function (t) {
      o.extend(this.prototype.options, t);
    }, o.Class.addInitHook = function (t) {
      var e = Array.prototype.slice.call(arguments, 1),
          i = "function" == typeof t ? t : function () {
        this[t].apply(this, e);
      };
      this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i);
    };
    var s = "_leaflet_events";
    o.Mixin = {}, o.Mixin.Events = {
      addEventListener: function addEventListener(t, e, i) {
        if (o.Util.invokeEach(t, this.addEventListener, this, e, i)) return this;
        var n,
            a,
            r,
            h,
            l,
            u,
            c,
            d = this[s] = this[s] || {},
            p = i && i !== this && o.stamp(i);

        for (t = o.Util.splitWords(t), n = 0, a = t.length; a > n; n++) {
          r = {
            action: e,
            context: i || this
          }, h = t[n], p ? (l = h + "_idx", u = l + "_len", c = d[l] = d[l] || {}, c[p] || (c[p] = [], d[u] = (d[u] || 0) + 1), c[p].push(r)) : (d[h] = d[h] || [], d[h].push(r));
        }

        return this;
      },
      hasEventListeners: function hasEventListeners(t) {
        var e = this[s];
        return !!e && (t in e && e[t].length > 0 || t + "_idx" in e && e[t + "_idx_len"] > 0);
      },
      removeEventListener: function removeEventListener(t, e, i) {
        if (!this[s]) return this;
        if (!t) return this.clearAllEventListeners();
        if (o.Util.invokeEach(t, this.removeEventListener, this, e, i)) return this;
        var n,
            a,
            r,
            h,
            l,
            u,
            c,
            d,
            p,
            _ = this[s],
            m = i && i !== this && o.stamp(i);

        for (t = o.Util.splitWords(t), n = 0, a = t.length; a > n; n++) {
          if (r = t[n], u = r + "_idx", c = u + "_len", d = _[u], e) {
            if (h = m && d ? d[m] : _[r]) {
              for (l = h.length - 1; l >= 0; l--) {
                h[l].action !== e || i && h[l].context !== i || (p = h.splice(l, 1), p[0].action = o.Util.falseFn);
              }

              i && d && 0 === h.length && (delete d[m], _[c]--);
            }
          } else delete _[r], delete _[u], delete _[c];
        }

        return this;
      },
      clearAllEventListeners: function clearAllEventListeners() {
        return delete this[s], this;
      },
      fireEvent: function fireEvent(t, e) {
        if (!this.hasEventListeners(t)) return this;
        var i,
            n,
            a,
            r,
            h,
            l = o.Util.extend({}, e, {
          type: t,
          target: this
        }),
            u = this[s];
        if (u[t]) for (i = u[t].slice(), n = 0, a = i.length; a > n; n++) {
          i[n].action.call(i[n].context, l);
        }
        r = u[t + "_idx"];

        for (h in r) {
          if (i = r[h].slice()) for (n = 0, a = i.length; a > n; n++) {
            i[n].action.call(i[n].context, l);
          }
        }

        return this;
      },
      addOneTimeEventListener: function addOneTimeEventListener(t, e, i) {
        if (o.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i)) return this;
        var n = o.bind(function () {
          this.removeEventListener(t, e, i).removeEventListener(t, n, i);
        }, this);
        return this.addEventListener(t, e, i).addEventListener(t, n, i);
      }
    }, o.Mixin.Events.on = o.Mixin.Events.addEventListener, o.Mixin.Events.off = o.Mixin.Events.removeEventListener, o.Mixin.Events.once = o.Mixin.Events.addOneTimeEventListener, o.Mixin.Events.fire = o.Mixin.Events.fireEvent, function () {
      var n = ("ActiveXObject" in t),
          s = n && !e.addEventListener,
          a = navigator.userAgent.toLowerCase(),
          r = -1 !== a.indexOf("webkit"),
          h = -1 !== a.indexOf("chrome"),
          l = -1 !== a.indexOf("phantom"),
          u = -1 !== a.indexOf("android"),
          c = -1 !== a.search("android [23]"),
          d = -1 !== a.indexOf("gecko"),
          p = typeof orientation != i + "",
          _ = t.navigator && t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints && !t.PointerEvent,
          m = t.PointerEvent && t.navigator.pointerEnabled && t.navigator.maxTouchPoints || _,
          f = "devicePixelRatio" in t && t.devicePixelRatio > 1 || "matchMedia" in t && t.matchMedia("(min-resolution:144dpi)") && t.matchMedia("(min-resolution:144dpi)").matches,
          g = e.documentElement,
          v = n && "transition" in g.style,
          y = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix() && !c,
          P = ("MozPerspective" in g.style),
          L = ("OTransition" in g.style),
          x = !t.L_DISABLE_3D && (v || y || P || L) && !l,
          w = !t.L_NO_TOUCH && !l && function () {
        var t = "ontouchstart";
        if (m || t in g) return !0;
        var i = e.createElement("div"),
            n = !1;
        return i.setAttribute ? (i.setAttribute(t, "return;"), "function" == typeof i[t] && (n = !0), i.removeAttribute(t), i = null, n) : !1;
      }();

      o.Browser = {
        ie: n,
        ielt9: s,
        webkit: r,
        gecko: d && !r && !t.opera && !n,
        android: u,
        android23: c,
        chrome: h,
        ie3d: v,
        webkit3d: y,
        gecko3d: P,
        opera3d: L,
        any3d: x,
        mobile: p,
        mobileWebkit: p && r,
        mobileWebkit3d: p && y,
        mobileOpera: p && t.opera,
        touch: w,
        msPointer: _,
        pointer: m,
        retina: f
      };
    }(), o.Point = function (t, e, i) {
      this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
    }, o.Point.prototype = {
      clone: function clone() {
        return new o.Point(this.x, this.y);
      },
      add: function add(t) {
        return this.clone()._add(o.point(t));
      },
      _add: function _add(t) {
        return this.x += t.x, this.y += t.y, this;
      },
      subtract: function subtract(t) {
        return this.clone()._subtract(o.point(t));
      },
      _subtract: function _subtract(t) {
        return this.x -= t.x, this.y -= t.y, this;
      },
      divideBy: function divideBy(t) {
        return this.clone()._divideBy(t);
      },
      _divideBy: function _divideBy(t) {
        return this.x /= t, this.y /= t, this;
      },
      multiplyBy: function multiplyBy(t) {
        return this.clone()._multiplyBy(t);
      },
      _multiplyBy: function _multiplyBy(t) {
        return this.x *= t, this.y *= t, this;
      },
      round: function round() {
        return this.clone()._round();
      },
      _round: function _round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      },
      floor: function floor() {
        return this.clone()._floor();
      },
      _floor: function _floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      },
      distanceTo: function distanceTo(t) {
        t = o.point(t);
        var e = t.x - this.x,
            i = t.y - this.y;
        return Math.sqrt(e * e + i * i);
      },
      equals: function equals(t) {
        return t = o.point(t), t.x === this.x && t.y === this.y;
      },
      contains: function contains(t) {
        return t = o.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
      },
      toString: function toString() {
        return "Point(" + o.Util.formatNum(this.x) + ", " + o.Util.formatNum(this.y) + ")";
      }
    }, o.point = function (t, e, n) {
      return t instanceof o.Point ? t : o.Util.isArray(t) ? new o.Point(t[0], t[1]) : t === i || null === t ? t : new o.Point(t, e, n);
    }, o.Bounds = function (t, e) {
      if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) {
        this.extend(i[n]);
      }
    }, o.Bounds.prototype = {
      extend: function extend(t) {
        return t = o.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this;
      },
      getCenter: function getCenter(t) {
        return new o.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
      },
      getBottomLeft: function getBottomLeft() {
        return new o.Point(this.min.x, this.max.y);
      },
      getTopRight: function getTopRight() {
        return new o.Point(this.max.x, this.min.y);
      },
      getSize: function getSize() {
        return this.max.subtract(this.min);
      },
      contains: function contains(t) {
        var e, i;
        return t = "number" == typeof t[0] || t instanceof o.Point ? o.point(t) : o.bounds(t), t instanceof o.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
      },
      intersects: function intersects(t) {
        t = o.bounds(t);
        var e = this.min,
            i = this.max,
            n = t.min,
            s = t.max,
            a = s.x >= e.x && n.x <= i.x,
            r = s.y >= e.y && n.y <= i.y;
        return a && r;
      },
      isValid: function isValid() {
        return !(!this.min || !this.max);
      }
    }, o.bounds = function (t, e) {
      return !t || t instanceof o.Bounds ? t : new o.Bounds(t, e);
    }, o.Transformation = function (t, e, i, n) {
      this._a = t, this._b = e, this._c = i, this._d = n;
    }, o.Transformation.prototype = {
      transform: function transform(t, e) {
        return this._transform(t.clone(), e);
      },
      _transform: function _transform(t, e) {
        return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
      },
      untransform: function untransform(t, e) {
        return e = e || 1, new o.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c);
      }
    }, o.DomUtil = {
      get: function get(t) {
        return "string" == typeof t ? e.getElementById(t) : t;
      },
      getStyle: function getStyle(t, i) {
        var n = t.style[i];

        if (!n && t.currentStyle && (n = t.currentStyle[i]), (!n || "auto" === n) && e.defaultView) {
          var o = e.defaultView.getComputedStyle(t, null);
          n = o ? o[i] : null;
        }

        return "auto" === n ? null : n;
      },
      getViewportOffset: function getViewportOffset(t) {
        var i,
            n = 0,
            s = 0,
            a = t,
            r = e.body,
            h = e.documentElement;

        do {
          if (n += a.offsetTop || 0, s += a.offsetLeft || 0, n += parseInt(o.DomUtil.getStyle(a, "borderTopWidth"), 10) || 0, s += parseInt(o.DomUtil.getStyle(a, "borderLeftWidth"), 10) || 0, i = o.DomUtil.getStyle(a, "position"), a.offsetParent === r && "absolute" === i) break;

          if ("fixed" === i) {
            n += r.scrollTop || h.scrollTop || 0, s += r.scrollLeft || h.scrollLeft || 0;
            break;
          }

          if ("relative" === i && !a.offsetLeft) {
            var l = o.DomUtil.getStyle(a, "width"),
                u = o.DomUtil.getStyle(a, "max-width"),
                c = a.getBoundingClientRect();
            ("none" !== l || "none" !== u) && (s += c.left + a.clientLeft), n += c.top + (r.scrollTop || h.scrollTop || 0);
            break;
          }

          a = a.offsetParent;
        } while (a);

        a = t;

        do {
          if (a === r) break;
          n -= a.scrollTop || 0, s -= a.scrollLeft || 0, a = a.parentNode;
        } while (a);

        return new o.Point(s, n);
      },
      documentIsLtr: function documentIsLtr() {
        return o.DomUtil._docIsLtrCached || (o.DomUtil._docIsLtrCached = !0, o.DomUtil._docIsLtr = "ltr" === o.DomUtil.getStyle(e.body, "direction")), o.DomUtil._docIsLtr;
      },
      create: function create(t, i, n) {
        var o = e.createElement(t);
        return o.className = i, n && n.appendChild(o), o;
      },
      hasClass: function hasClass(t, e) {
        if (t.classList !== i) return t.classList.contains(e);

        var n = o.DomUtil._getClass(t);

        return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n);
      },
      addClass: function addClass(t, e) {
        if (t.classList !== i) for (var n = o.Util.splitWords(e), s = 0, a = n.length; a > s; s++) {
          t.classList.add(n[s]);
        } else if (!o.DomUtil.hasClass(t, e)) {
          var r = o.DomUtil._getClass(t);

          o.DomUtil._setClass(t, (r ? r + " " : "") + e);
        }
      },
      removeClass: function removeClass(t, e) {
        t.classList !== i ? t.classList.remove(e) : o.DomUtil._setClass(t, o.Util.trim((" " + o.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")));
      },
      _setClass: function _setClass(t, e) {
        t.className.baseVal === i ? t.className = e : t.className.baseVal = e;
      },
      _getClass: function _getClass(t) {
        return t.className.baseVal === i ? t.className : t.className.baseVal;
      },
      setOpacity: function setOpacity(t, e) {
        if ("opacity" in t.style) t.style.opacity = e;else if ("filter" in t.style) {
          var i = !1,
              n = "DXImageTransform.Microsoft.Alpha";

          try {
            i = t.filters.item(n);
          } catch (o) {
            if (1 === e) return;
          }

          e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
        }
      },
      testProp: function testProp(t) {
        for (var i = e.documentElement.style, n = 0; n < t.length; n++) {
          if (t[n] in i) return t[n];
        }

        return !1;
      },
      getTranslateString: function getTranslateString(t) {
        var e = o.Browser.webkit3d,
            i = "translate" + (e ? "3d" : "") + "(",
            n = (e ? ",0" : "") + ")";
        return i + t.x + "px," + t.y + "px" + n;
      },
      getScaleString: function getScaleString(t, e) {
        var i = o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))),
            n = " scale(" + t + ") ";
        return i + n;
      },
      setPosition: function setPosition(t, e, i) {
        t._leaflet_pos = e, !i && o.Browser.any3d ? t.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
      },
      getPosition: function getPosition(t) {
        return t._leaflet_pos;
      }
    }, o.DomUtil.TRANSFORM = o.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), o.DomUtil.TRANSITION = o.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), o.DomUtil.TRANSITION_END = "webkitTransition" === o.DomUtil.TRANSITION || "OTransition" === o.DomUtil.TRANSITION ? o.DomUtil.TRANSITION + "End" : "transitionend", function () {
      if ("onselectstart" in e) o.extend(o.DomUtil, {
        disableTextSelection: function disableTextSelection() {
          o.DomEvent.on(t, "selectstart", o.DomEvent.preventDefault);
        },
        enableTextSelection: function enableTextSelection() {
          o.DomEvent.off(t, "selectstart", o.DomEvent.preventDefault);
        }
      });else {
        var i = o.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        o.extend(o.DomUtil, {
          disableTextSelection: function disableTextSelection() {
            if (i) {
              var t = e.documentElement.style;
              this._userSelect = t[i], t[i] = "none";
            }
          },
          enableTextSelection: function enableTextSelection() {
            i && (e.documentElement.style[i] = this._userSelect, delete this._userSelect);
          }
        });
      }
      o.extend(o.DomUtil, {
        disableImageDrag: function disableImageDrag() {
          o.DomEvent.on(t, "dragstart", o.DomEvent.preventDefault);
        },
        enableImageDrag: function enableImageDrag() {
          o.DomEvent.off(t, "dragstart", o.DomEvent.preventDefault);
        }
      });
    }(), o.LatLng = function (t, e, n) {
      if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
      this.lat = t, this.lng = e, n !== i && (this.alt = parseFloat(n));
    }, o.extend(o.LatLng, {
      DEG_TO_RAD: Math.PI / 180,
      RAD_TO_DEG: 180 / Math.PI,
      MAX_MARGIN: 1e-9
    }), o.LatLng.prototype = {
      equals: function equals(t) {
        if (!t) return !1;
        t = o.latLng(t);
        var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
        return e <= o.LatLng.MAX_MARGIN;
      },
      toString: function toString(t) {
        return "LatLng(" + o.Util.formatNum(this.lat, t) + ", " + o.Util.formatNum(this.lng, t) + ")";
      },
      distanceTo: function distanceTo(t) {
        t = o.latLng(t);
        var e = 6378137,
            i = o.LatLng.DEG_TO_RAD,
            n = (t.lat - this.lat) * i,
            s = (t.lng - this.lng) * i,
            a = this.lat * i,
            r = t.lat * i,
            h = Math.sin(n / 2),
            l = Math.sin(s / 2),
            u = h * h + l * l * Math.cos(a) * Math.cos(r);
        return 2 * e * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u));
      },
      wrap: function wrap(t, e) {
        var i = this.lng;
        return t = t || -180, e = e || 180, i = (i + e) % (e - t) + (t > i || i === e ? e : t), new o.LatLng(this.lat, i);
      }
    }, o.latLng = function (t, e) {
      return t instanceof o.LatLng ? t : o.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new o.LatLng(t[0], t[1], t[2]) : null : t === i || null === t ? t : "object" == typeof t && "lat" in t ? new o.LatLng(t.lat, "lng" in t ? t.lng : t.lon) : e === i ? null : new o.LatLng(t, e);
    }, o.LatLngBounds = function (t, e) {
      if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) {
        this.extend(i[n]);
      }
    }, o.LatLngBounds.prototype = {
      extend: function extend(t) {
        if (!t) return this;
        var e = o.latLng(t);
        return t = null !== e ? e : o.latLngBounds(t), t instanceof o.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new o.LatLng(t.lat, t.lng), this._northEast = new o.LatLng(t.lat, t.lng)) : t instanceof o.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this;
      },
      pad: function pad(t) {
        var e = this._southWest,
            i = this._northEast,
            n = Math.abs(e.lat - i.lat) * t,
            s = Math.abs(e.lng - i.lng) * t;
        return new o.LatLngBounds(new o.LatLng(e.lat - n, e.lng - s), new o.LatLng(i.lat + n, i.lng + s));
      },
      getCenter: function getCenter() {
        return new o.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
      },
      getSouthWest: function getSouthWest() {
        return this._southWest;
      },
      getNorthEast: function getNorthEast() {
        return this._northEast;
      },
      getNorthWest: function getNorthWest() {
        return new o.LatLng(this.getNorth(), this.getWest());
      },
      getSouthEast: function getSouthEast() {
        return new o.LatLng(this.getSouth(), this.getEast());
      },
      getWest: function getWest() {
        return this._southWest.lng;
      },
      getSouth: function getSouth() {
        return this._southWest.lat;
      },
      getEast: function getEast() {
        return this._northEast.lng;
      },
      getNorth: function getNorth() {
        return this._northEast.lat;
      },
      contains: function contains(t) {
        t = "number" == typeof t[0] || t instanceof o.LatLng ? o.latLng(t) : o.latLngBounds(t);
        var e,
            i,
            n = this._southWest,
            s = this._northEast;
        return t instanceof o.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= s.lat && e.lng >= n.lng && i.lng <= s.lng;
      },
      intersects: function intersects(t) {
        t = o.latLngBounds(t);
        var e = this._southWest,
            i = this._northEast,
            n = t.getSouthWest(),
            s = t.getNorthEast(),
            a = s.lat >= e.lat && n.lat <= i.lat,
            r = s.lng >= e.lng && n.lng <= i.lng;
        return a && r;
      },
      toBBoxString: function toBBoxString() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      },
      equals: function equals(t) {
        return t ? (t = o.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1;
      },
      isValid: function isValid() {
        return !(!this._southWest || !this._northEast);
      }
    }, o.latLngBounds = function (t, e) {
      return !t || t instanceof o.LatLngBounds ? t : new o.LatLngBounds(t, e);
    }, o.Projection = {}, o.Projection.SphericalMercator = {
      MAX_LATITUDE: 85.0511287798,
      project: function project(t) {
        var e = o.LatLng.DEG_TO_RAD,
            i = this.MAX_LATITUDE,
            n = Math.max(Math.min(i, t.lat), -i),
            s = t.lng * e,
            a = n * e;
        return a = Math.log(Math.tan(Math.PI / 4 + a / 2)), new o.Point(s, a);
      },
      unproject: function unproject(t) {
        var e = o.LatLng.RAD_TO_DEG,
            i = t.x * e,
            n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
        return new o.LatLng(n, i);
      }
    }, o.Projection.LonLat = {
      project: function project(t) {
        return new o.Point(t.lng, t.lat);
      },
      unproject: function unproject(t) {
        return new o.LatLng(t.y, t.x);
      }
    }, o.CRS = {
      latLngToPoint: function latLngToPoint(t, e) {
        var i = this.projection.project(t),
            n = this.scale(e);
        return this.transformation._transform(i, n);
      },
      pointToLatLng: function pointToLatLng(t, e) {
        var i = this.scale(e),
            n = this.transformation.untransform(t, i);
        return this.projection.unproject(n);
      },
      project: function project(t) {
        return this.projection.project(t);
      },
      scale: function scale(t) {
        return 256 * Math.pow(2, t);
      },
      getSize: function getSize(t) {
        var e = this.scale(t);
        return o.point(e, e);
      }
    }, o.CRS.Simple = o.extend({}, o.CRS, {
      projection: o.Projection.LonLat,
      transformation: new o.Transformation(1, 0, -1, 0),
      scale: function scale(t) {
        return Math.pow(2, t);
      }
    }), o.CRS.EPSG3857 = o.extend({}, o.CRS, {
      code: "EPSG:3857",
      projection: o.Projection.SphericalMercator,
      transformation: new o.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
      project: function project(t) {
        var e = this.projection.project(t),
            i = 6378137;
        return e.multiplyBy(i);
      }
    }), o.CRS.EPSG900913 = o.extend({}, o.CRS.EPSG3857, {
      code: "EPSG:900913"
    }), o.CRS.EPSG4326 = o.extend({}, o.CRS, {
      code: "EPSG:4326",
      projection: o.Projection.LonLat,
      transformation: new o.Transformation(1 / 360, .5, -1 / 360, .5)
    }), o.Map = o.Class.extend({
      includes: o.Mixin.Events,
      options: {
        crs: o.CRS.EPSG3857,
        fadeAnimation: o.DomUtil.TRANSITION && !o.Browser.android23,
        trackResize: !0,
        markerZoomAnimation: o.DomUtil.TRANSITION && o.Browser.any3d
      },
      initialize: function initialize(t, e) {
        e = o.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = o.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && e.zoom !== i && this.setView(o.latLng(e.center), e.zoom, {
          reset: !0
        }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(e.layers);
      },
      setView: function setView(t, e) {
        return e = e === i ? this.getZoom() : e, this._resetView(o.latLng(t), this._limitZoom(e)), this;
      },
      setZoom: function setZoom(t, e) {
        return this._loaded ? this.setView(this.getCenter(), t, {
          zoom: e
        }) : (this._zoom = this._limitZoom(t), this);
      },
      zoomIn: function zoomIn(t, e) {
        return this.setZoom(this._zoom + (t || 1), e);
      },
      zoomOut: function zoomOut(t, e) {
        return this.setZoom(this._zoom - (t || 1), e);
      },
      setZoomAround: function setZoomAround(t, e, i) {
        var n = this.getZoomScale(e),
            s = this.getSize().divideBy(2),
            a = t instanceof o.Point ? t : this.latLngToContainerPoint(t),
            r = a.subtract(s).multiplyBy(1 - 1 / n),
            h = this.containerPointToLatLng(s.add(r));
        return this.setView(h, e, {
          zoom: i
        });
      },
      fitBounds: function fitBounds(t, e) {
        e = e || {}, t = t.getBounds ? t.getBounds() : o.latLngBounds(t);
        var i = o.point(e.paddingTopLeft || e.padding || [0, 0]),
            n = o.point(e.paddingBottomRight || e.padding || [0, 0]),
            s = this.getBoundsZoom(t, !1, i.add(n)),
            a = n.subtract(i).divideBy(2),
            r = this.project(t.getSouthWest(), s),
            h = this.project(t.getNorthEast(), s),
            l = this.unproject(r.add(h).divideBy(2).add(a), s);
        return s = e && e.maxZoom ? Math.min(e.maxZoom, s) : s, this.setView(l, s, e);
      },
      fitWorld: function fitWorld(t) {
        return this.fitBounds([[-90, -180], [90, 180]], t);
      },
      panTo: function panTo(t, e) {
        return this.setView(t, this._zoom, {
          pan: e
        });
      },
      panBy: function panBy(t) {
        return this.fire("movestart"), this._rawPanBy(o.point(t)), this.fire("move"), this.fire("moveend");
      },
      setMaxBounds: function setMaxBounds(t) {
        return t = o.latLngBounds(t), this.options.maxBounds = t, t ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this);
      },
      panInsideBounds: function panInsideBounds(t, e) {
        var i = this.getCenter(),
            n = this._limitCenter(i, this._zoom, t);

        return i.equals(n) ? this : this.panTo(n, e);
      },
      addLayer: function addLayer(t) {
        var e = o.stamp(t);
        return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(t), this);
      },
      removeLayer: function removeLayer(t) {
        var e = o.stamp(t);
        return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire("layerremove", {
          layer: t
        }), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this) : this;
      },
      hasLayer: function hasLayer(t) {
        return t ? o.stamp(t) in this._layers : !1;
      },
      eachLayer: function eachLayer(t, e) {
        for (var i in this._layers) {
          t.call(e, this._layers[i]);
        }

        return this;
      },
      invalidateSize: function invalidateSize(t) {
        if (!this._loaded) return this;
        t = o.extend({
          animate: !1,
          pan: !0
        }, t === !0 ? {
          animate: !0
        } : t);
        var e = this.getSize();
        this._sizeChanged = !0, this._initialCenter = null;
        var i = this.getSize(),
            n = e.divideBy(2).round(),
            s = i.divideBy(2).round(),
            a = n.subtract(s);
        return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: e,
          newSize: i
        })) : this;
      },
      addHandler: function addHandler(t, e) {
        if (!e) return this;
        var i = this[t] = new e(this);
        return this._handlers.push(i), this.options[t] && i.enable(), this;
      },
      remove: function remove() {
        this._loaded && this.fire("unload"), this._initEvents("off");

        try {
          delete this._container._leaflet;
        } catch (t) {
          this._container._leaflet = i;
        }

        return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this;
      },
      getCenter: function getCenter() {
        return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
      },
      getZoom: function getZoom() {
        return this._zoom;
      },
      getBounds: function getBounds() {
        var t = this.getPixelBounds(),
            e = this.unproject(t.getBottomLeft()),
            i = this.unproject(t.getTopRight());
        return new o.LatLngBounds(e, i);
      },
      getMinZoom: function getMinZoom() {
        return this.options.minZoom === i ? this._layersMinZoom === i ? 0 : this._layersMinZoom : this.options.minZoom;
      },
      getMaxZoom: function getMaxZoom() {
        return this.options.maxZoom === i ? this._layersMaxZoom === i ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      },
      getBoundsZoom: function getBoundsZoom(t, e, i) {
        t = o.latLngBounds(t);
        var n,
            s = this.getMinZoom() - (e ? 1 : 0),
            a = this.getMaxZoom(),
            r = this.getSize(),
            h = t.getNorthWest(),
            l = t.getSouthEast(),
            u = !0;
        i = o.point(i || [0, 0]);

        do {
          s++, n = this.project(l, s).subtract(this.project(h, s)).add(i), u = e ? n.x < r.x || n.y < r.y : r.contains(n);
        } while (u && a >= s);

        return u && e ? null : e ? s : s - 1;
      },
      getSize: function getSize() {
        return (!this._size || this._sizeChanged) && (this._size = new o.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone();
      },
      getPixelBounds: function getPixelBounds() {
        var t = this._getTopLeftPoint();

        return new o.Bounds(t, t.add(this.getSize()));
      },
      getPixelOrigin: function getPixelOrigin() {
        return this._checkIfLoaded(), this._initialTopLeftPoint;
      },
      getPanes: function getPanes() {
        return this._panes;
      },
      getContainer: function getContainer() {
        return this._container;
      },
      getZoomScale: function getZoomScale(t) {
        var e = this.options.crs;
        return e.scale(t) / e.scale(this._zoom);
      },
      getScaleZoom: function getScaleZoom(t) {
        return this._zoom + Math.log(t) / Math.LN2;
      },
      project: function project(t, e) {
        return e = e === i ? this._zoom : e, this.options.crs.latLngToPoint(o.latLng(t), e);
      },
      unproject: function unproject(t, e) {
        return e = e === i ? this._zoom : e, this.options.crs.pointToLatLng(o.point(t), e);
      },
      layerPointToLatLng: function layerPointToLatLng(t) {
        var e = o.point(t).add(this.getPixelOrigin());
        return this.unproject(e);
      },
      latLngToLayerPoint: function latLngToLayerPoint(t) {
        var e = this.project(o.latLng(t))._round();

        return e._subtract(this.getPixelOrigin());
      },
      containerPointToLayerPoint: function containerPointToLayerPoint(t) {
        return o.point(t).subtract(this._getMapPanePos());
      },
      layerPointToContainerPoint: function layerPointToContainerPoint(t) {
        return o.point(t).add(this._getMapPanePos());
      },
      containerPointToLatLng: function containerPointToLatLng(t) {
        var e = this.containerPointToLayerPoint(o.point(t));
        return this.layerPointToLatLng(e);
      },
      latLngToContainerPoint: function latLngToContainerPoint(t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)));
      },
      mouseEventToContainerPoint: function mouseEventToContainerPoint(t) {
        return o.DomEvent.getMousePosition(t, this._container);
      },
      mouseEventToLayerPoint: function mouseEventToLayerPoint(t) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
      },
      mouseEventToLatLng: function mouseEventToLatLng(t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      _initContainer: function _initContainer(t) {
        var e = this._container = o.DomUtil.get(t);
        if (!e) throw new Error("Map container not found.");
        if (e._leaflet) throw new Error("Map container is already initialized.");
        e._leaflet = !0;
      },
      _initLayout: function _initLayout() {
        var t = this._container;
        o.DomUtil.addClass(t, "leaflet-container" + (o.Browser.touch ? " leaflet-touch" : "") + (o.Browser.retina ? " leaflet-retina" : "") + (o.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
        var e = o.DomUtil.getStyle(t, "position");
        "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function _initPanes() {
        var t = this._panes = {};
        this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), t.shadowPane = this._createPane("leaflet-shadow-pane"), t.overlayPane = this._createPane("leaflet-overlay-pane"), t.markerPane = this._createPane("leaflet-marker-pane"), t.popupPane = this._createPane("leaflet-popup-pane");
        var e = " leaflet-zoom-hide";
        this.options.markerZoomAnimation || (o.DomUtil.addClass(t.markerPane, e), o.DomUtil.addClass(t.shadowPane, e), o.DomUtil.addClass(t.popupPane, e));
      },
      _createPane: function _createPane(t, e) {
        return o.DomUtil.create("div", t, e || this._panes.objectsPane);
      },
      _clearPanes: function _clearPanes() {
        this._container.removeChild(this._mapPane);
      },
      _addLayers: function _addLayers(t) {
        t = t ? o.Util.isArray(t) ? t : [t] : [];

        for (var e = 0, i = t.length; i > e; e++) {
          this.addLayer(t[e]);
        }
      },
      _resetView: function _resetView(t, e, i, n) {
        var s = this._zoom !== e;
        n || (this.fire("movestart"), s && this.fire("zoomstart")), this._zoom = e, this._initialCenter = t, this._initialTopLeftPoint = this._getNewTopLeftPoint(t), i ? this._initialTopLeftPoint._add(this._getMapPanePos()) : o.DomUtil.setPosition(this._mapPane, new o.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
        var a = !this._loaded;
        this._loaded = !0, a && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("viewreset", {
          hard: !i
        }), this.fire("move"), (s || n) && this.fire("zoomend"), this.fire("moveend", {
          hard: !i
        });
      },
      _rawPanBy: function _rawPanBy(t) {
        o.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function _getZoomSpan() {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _updateZoomLevels: function _updateZoomLevels() {
        var t,
            e = 1 / 0,
            n = -1 / 0,
            o = this._getZoomSpan();

        for (t in this._zoomBoundLayers) {
          var s = this._zoomBoundLayers[t];
          isNaN(s.options.minZoom) || (e = Math.min(e, s.options.minZoom)), isNaN(s.options.maxZoom) || (n = Math.max(n, s.options.maxZoom));
        }

        t === i ? this._layersMaxZoom = this._layersMinZoom = i : (this._layersMaxZoom = n, this._layersMinZoom = e), o !== this._getZoomSpan() && this.fire("zoomlevelschange");
      },
      _panInsideMaxBounds: function _panInsideMaxBounds() {
        this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function _checkIfLoaded() {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
      },
      _initEvents: function _initEvents(e) {
        if (o.DomEvent) {
          e = e || "on", o.DomEvent[e](this._container, "click", this._onMouseClick, this);
          var i,
              n,
              s = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];

          for (i = 0, n = s.length; n > i; i++) {
            o.DomEvent[e](this._container, s[i], this._fireMouseEvent, this);
          }

          this.options.trackResize && o.DomEvent[e](t, "resize", this._onResize, this);
        }
      },
      _onResize: function _onResize() {
        o.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = o.Util.requestAnimFrame(function () {
          this.invalidateSize({
            debounceMoveend: !0
          });
        }, this, !1, this._container);
      },
      _onMouseClick: function _onMouseClick(t) {
        !this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || o.DomEvent._skipped(t) || (this.fire("preclick"), this._fireMouseEvent(t));
      },
      _fireMouseEvent: function _fireMouseEvent(t) {
        if (this._loaded && !o.DomEvent._skipped(t)) {
          var e = t.type;

          if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e)) {
            "contextmenu" === e && o.DomEvent.preventDefault(t);
            var i = this.mouseEventToContainerPoint(t),
                n = this.containerPointToLayerPoint(i),
                s = this.layerPointToLatLng(n);
            this.fire(e, {
              latlng: s,
              layerPoint: n,
              containerPoint: i,
              originalEvent: t
            });
          }
        }
      },
      _onTileLayerLoad: function _onTileLayerLoad() {
        this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload");
      },
      _clearHandlers: function _clearHandlers() {
        for (var t = 0, e = this._handlers.length; e > t; t++) {
          this._handlers[t].disable();
        }
      },
      whenReady: function whenReady(t, e) {
        return this._loaded ? t.call(e || this, this) : this.on("load", t, e), this;
      },
      _layerAdd: function _layerAdd(t) {
        t.onAdd(this), this.fire("layeradd", {
          layer: t
        });
      },
      _getMapPanePos: function _getMapPanePos() {
        return o.DomUtil.getPosition(this._mapPane);
      },
      _moved: function _moved() {
        var t = this._getMapPanePos();

        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function _getTopLeftPoint() {
        return this.getPixelOrigin().subtract(this._getMapPanePos());
      },
      _getNewTopLeftPoint: function _getNewTopLeftPoint(t, e) {
        var i = this.getSize()._divideBy(2);

        return this.project(t, e)._subtract(i)._round();
      },
      _latLngToNewLayerPoint: function _latLngToNewLayerPoint(t, e, i) {
        var n = this._getNewTopLeftPoint(i, e).add(this._getMapPanePos());

        return this.project(t, e)._subtract(n);
      },
      _getCenterLayerPoint: function _getCenterLayerPoint() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      _getCenterOffset: function _getCenterOffset(t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      _limitCenter: function _limitCenter(t, e, i) {
        if (!i) return t;

        var n = this.project(t, e),
            s = this.getSize().divideBy(2),
            a = new o.Bounds(n.subtract(s), n.add(s)),
            r = this._getBoundsOffset(a, i, e);

        return this.unproject(n.add(r), e);
      },
      _limitOffset: function _limitOffset(t, e) {
        if (!e) return t;
        var i = this.getPixelBounds(),
            n = new o.Bounds(i.min.add(t), i.max.add(t));
        return t.add(this._getBoundsOffset(n, e));
      },
      _getBoundsOffset: function _getBoundsOffset(t, e, i) {
        var n = this.project(e.getNorthWest(), i).subtract(t.min),
            s = this.project(e.getSouthEast(), i).subtract(t.max),
            a = this._rebound(n.x, -s.x),
            r = this._rebound(n.y, -s.y);

        return new o.Point(a, r);
      },
      _rebound: function _rebound(t, e) {
        return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
      },
      _limitZoom: function _limitZoom(t) {
        var e = this.getMinZoom(),
            i = this.getMaxZoom();
        return Math.max(e, Math.min(i, t));
      }
    }), o.map = function (t, e) {
      return new o.Map(t, e);
    }, o.Projection.Mercator = {
      MAX_LATITUDE: 85.0840591556,
      R_MINOR: 6356752.314245179,
      R_MAJOR: 6378137,
      project: function project(t) {
        var e = o.LatLng.DEG_TO_RAD,
            i = this.MAX_LATITUDE,
            n = Math.max(Math.min(i, t.lat), -i),
            s = this.R_MAJOR,
            a = this.R_MINOR,
            r = t.lng * e * s,
            h = n * e,
            l = a / s,
            u = Math.sqrt(1 - l * l),
            c = u * Math.sin(h);
        c = Math.pow((1 - c) / (1 + c), .5 * u);
        var d = Math.tan(.5 * (.5 * Math.PI - h)) / c;
        return h = -s * Math.log(d), new o.Point(r, h);
      },
      unproject: function unproject(t) {
        for (var e, i = o.LatLng.RAD_TO_DEG, n = this.R_MAJOR, s = this.R_MINOR, a = t.x * i / n, r = s / n, h = Math.sqrt(1 - r * r), l = Math.exp(-t.y / n), u = Math.PI / 2 - 2 * Math.atan(l), c = 15, d = 1e-7, p = c, _ = .1; Math.abs(_) > d && --p > 0;) {
          e = h * Math.sin(u), _ = Math.PI / 2 - 2 * Math.atan(l * Math.pow((1 - e) / (1 + e), .5 * h)) - u, u += _;
        }

        return new o.LatLng(u * i, a);
      }
    }, o.CRS.EPSG3395 = o.extend({}, o.CRS, {
      code: "EPSG:3395",
      projection: o.Projection.Mercator,
      transformation: function () {
        var t = o.Projection.Mercator,
            e = t.R_MAJOR,
            i = .5 / (Math.PI * e);
        return new o.Transformation(i, .5, -i, .5);
      }()
    }), o.TileLayer = o.Class.extend({
      includes: o.Mixin.Events,
      options: {
        minZoom: 0,
        maxZoom: 18,
        tileSize: 256,
        subdomains: "abc",
        errorTileUrl: "",
        attribution: "",
        zoomOffset: 0,
        opacity: 1,
        unloadInvisibleTiles: o.Browser.mobile,
        updateWhenIdle: o.Browser.mobile
      },
      initialize: function initialize(t, e) {
        e = o.setOptions(this, e), e.detectRetina && o.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--), e.bounds && (e.bounds = o.latLngBounds(e.bounds)), this._url = t;
        var i = this.options.subdomains;
        "string" == typeof i && (this.options.subdomains = i.split(""));
      },
      onAdd: function onAdd(t) {
        this._map = t, this._animated = t._zoomAnimated, this._initContainer(), t.on({
          viewreset: this._reset,
          moveend: this._update
        }, this), this._animated && t.on({
          zoomanim: this._animateZoom,
          zoomend: this._endZoomAnim
        }, this), this.options.updateWhenIdle || (this._limitedUpdate = o.Util.limitExecByInterval(this._update, 150, this), t.on("move", this._limitedUpdate, this)), this._reset(), this._update();
      },
      addTo: function addTo(t) {
        return t.addLayer(this), this;
      },
      onRemove: function onRemove(t) {
        this._container.parentNode.removeChild(this._container), t.off({
          viewreset: this._reset,
          moveend: this._update
        }, this), this._animated && t.off({
          zoomanim: this._animateZoom,
          zoomend: this._endZoomAnim
        }, this), this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this), this._container = null, this._map = null;
      },
      bringToFront: function bringToFront() {
        var t = this._map._panes.tilePane;
        return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)), this;
      },
      bringToBack: function bringToBack() {
        var t = this._map._panes.tilePane;
        return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)), this;
      },
      getAttribution: function getAttribution() {
        return this.options.attribution;
      },
      getContainer: function getContainer() {
        return this._container;
      },
      setOpacity: function setOpacity(t) {
        return this.options.opacity = t, this._map && this._updateOpacity(), this;
      },
      setZIndex: function setZIndex(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      setUrl: function setUrl(t, e) {
        return this._url = t, e || this.redraw(), this;
      },
      redraw: function redraw() {
        return this._map && (this._reset({
          hard: !0
        }), this._update()), this;
      },
      _updateZIndex: function _updateZIndex() {
        this._container && this.options.zIndex !== i && (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function _setAutoZIndex(t, e) {
        var i,
            n,
            o,
            s = t.children,
            a = -e(1 / 0, -1 / 0);

        for (n = 0, o = s.length; o > n; n++) {
          s[n] !== this._container && (i = parseInt(s[n].style.zIndex, 10), isNaN(i) || (a = e(a, i)));
        }

        this.options.zIndex = this._container.style.zIndex = (isFinite(a) ? a : 0) + e(1, -1);
      },
      _updateOpacity: function _updateOpacity() {
        var t,
            e = this._tiles;
        if (o.Browser.ielt9) for (t in e) {
          o.DomUtil.setOpacity(e[t], this.options.opacity);
        } else o.DomUtil.setOpacity(this._container, this.options.opacity);
      },
      _initContainer: function _initContainer() {
        var t = this._map._panes.tilePane;

        if (!this._container) {
          if (this._container = o.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
            var e = "leaflet-tile-container";
            this._bgBuffer = o.DomUtil.create("div", e, this._container), this._tileContainer = o.DomUtil.create("div", e, this._container);
          } else this._tileContainer = this._container;

          t.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity();
        }
      },
      _reset: function _reset(t) {
        for (var e in this._tiles) {
          this.fire("tileunload", {
            tile: this._tiles[e]
          });
        }

        this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && t && t.hard && this._clearBgBuffer(), this._initContainer();
      },
      _getTileSize: function _getTileSize() {
        var t = this._map,
            e = t.getZoom() + this.options.zoomOffset,
            i = this.options.maxNativeZoom,
            n = this.options.tileSize;
        return i && e > i && (n = Math.round(t.getZoomScale(e) / t.getZoomScale(i) * n)), n;
      },
      _update: function _update() {
        if (this._map) {
          var t = this._map,
              e = t.getPixelBounds(),
              i = t.getZoom(),
              n = this._getTileSize();

          if (!(i > this.options.maxZoom || i < this.options.minZoom)) {
            var s = o.bounds(e.min.divideBy(n)._floor(), e.max.divideBy(n)._floor());
            this._addTilesFromCenterOut(s), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(s);
          }
        }
      },
      _addTilesFromCenterOut: function _addTilesFromCenterOut(t) {
        var i,
            n,
            s,
            a = [],
            r = t.getCenter();

        for (i = t.min.y; i <= t.max.y; i++) {
          for (n = t.min.x; n <= t.max.x; n++) {
            s = new o.Point(n, i), this._tileShouldBeLoaded(s) && a.push(s);
          }
        }

        var h = a.length;

        if (0 !== h) {
          a.sort(function (t, e) {
            return t.distanceTo(r) - e.distanceTo(r);
          });
          var l = e.createDocumentFragment();

          for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += h, n = 0; h > n; n++) {
            this._addTile(a[n], l);
          }

          this._tileContainer.appendChild(l);
        }
      },
      _tileShouldBeLoaded: function _tileShouldBeLoaded(t) {
        if (t.x + ":" + t.y in this._tiles) return !1;
        var e = this.options;

        if (!e.continuousWorld) {
          var i = this._getWrapTileNum();

          if (e.noWrap && (t.x < 0 || t.x >= i.x) || t.y < 0 || t.y >= i.y) return !1;
        }

        if (e.bounds) {
          var n = e.tileSize,
              o = t.multiplyBy(n),
              s = o.add([n, n]),
              a = this._map.unproject(o),
              r = this._map.unproject(s);

          if (e.continuousWorld || e.noWrap || (a = a.wrap(), r = r.wrap()), !e.bounds.intersects([a, r])) return !1;
        }

        return !0;
      },
      _removeOtherTiles: function _removeOtherTiles(t) {
        var e, i, n, o;

        for (o in this._tiles) {
          e = o.split(":"), i = parseInt(e[0], 10), n = parseInt(e[1], 10), (i < t.min.x || i > t.max.x || n < t.min.y || n > t.max.y) && this._removeTile(o);
        }
      },
      _removeTile: function _removeTile(t) {
        var e = this._tiles[t];
        this.fire("tileunload", {
          tile: e,
          url: e.src
        }), this.options.reuseTiles ? (o.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e), o.Browser.android || (e.onload = null, e.src = o.Util.emptyImageUrl), delete this._tiles[t];
      },
      _addTile: function _addTile(t, e) {
        var i = this._getTilePos(t),
            n = this._getTile();

        o.DomUtil.setPosition(n, i, o.Browser.chrome), this._tiles[t.x + ":" + t.y] = n, this._loadTile(n, t), n.parentNode !== this._tileContainer && e.appendChild(n);
      },
      _getZoomForUrl: function _getZoomForUrl() {
        var t = this.options,
            e = this._map.getZoom();

        return t.zoomReverse && (e = t.maxZoom - e), e += t.zoomOffset, t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e;
      },
      _getTilePos: function _getTilePos(t) {
        var e = this._map.getPixelOrigin(),
            i = this._getTileSize();

        return t.multiplyBy(i).subtract(e);
      },
      getTileUrl: function getTileUrl(t) {
        return o.Util.template(this._url, o.extend({
          s: this._getSubdomain(t),
          z: t.z,
          x: t.x,
          y: t.y
        }, this.options));
      },
      _getWrapTileNum: function _getWrapTileNum() {
        var t = this._map.options.crs,
            e = t.getSize(this._map.getZoom());
        return e.divideBy(this._getTileSize())._floor();
      },
      _adjustTilePoint: function _adjustTilePoint(t) {
        var e = this._getWrapTileNum();

        this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x), this.options.tms && (t.y = e.y - t.y - 1), t.z = this._getZoomForUrl();
      },
      _getSubdomain: function _getSubdomain(t) {
        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[e];
      },
      _getTile: function _getTile() {
        if (this.options.reuseTiles && this._unusedTiles.length > 0) {
          var t = this._unusedTiles.pop();

          return this._resetTile(t), t;
        }

        return this._createTile();
      },
      _resetTile: function _resetTile() {},
      _createTile: function _createTile() {
        var t = o.DomUtil.create("img", "leaflet-tile");
        return t.style.width = t.style.height = this._getTileSize() + "px", t.galleryimg = "no", t.onselectstart = t.onmousemove = o.Util.falseFn, o.Browser.ielt9 && this.options.opacity !== i && o.DomUtil.setOpacity(t, this.options.opacity), o.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"), t;
      },
      _loadTile: function _loadTile(t, e) {
        t._layer = this, t.onload = this._tileOnLoad, t.onerror = this._tileOnError, this._adjustTilePoint(e), t.src = this.getTileUrl(e), this.fire("tileloadstart", {
          tile: t,
          url: t.src
        });
      },
      _tileLoaded: function _tileLoaded() {
        this._tilesToLoad--, this._animated && o.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(o.bind(this._clearBgBuffer, this), 500)));
      },
      _tileOnLoad: function _tileOnLoad() {
        var t = this._layer;
        this.src !== o.Util.emptyImageUrl && (o.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
          tile: this,
          url: this.src
        })), t._tileLoaded();
      },
      _tileOnError: function _tileOnError() {
        var t = this._layer;
        t.fire("tileerror", {
          tile: this,
          url: this.src
        });
        var e = t.options.errorTileUrl;
        e && (this.src = e), t._tileLoaded();
      }
    }), o.tileLayer = function (t, e) {
      return new o.TileLayer(t, e);
    }, o.TileLayer.WMS = o.TileLayer.extend({
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        version: "1.1.1",
        layers: "",
        styles: "",
        format: "image/jpeg",
        transparent: !1
      },
      initialize: function initialize(t, e) {
        this._url = t;
        var i = o.extend({}, this.defaultWmsParams),
            n = e.tileSize || this.options.tileSize;
        i.width = i.height = e.detectRetina && o.Browser.retina ? 2 * n : n;

        for (var s in e) {
          this.options.hasOwnProperty(s) || "crs" === s || (i[s] = e[s]);
        }

        this.wmsParams = i, o.setOptions(this, e);
      },
      onAdd: function onAdd(t) {
        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[e] = this._crs.code, o.TileLayer.prototype.onAdd.call(this, t);
      },
      getTileUrl: function getTileUrl(t) {
        var e = this._map,
            i = this.options.tileSize,
            n = t.multiplyBy(i),
            s = n.add([i, i]),
            a = this._crs.project(e.unproject(n, t.z)),
            r = this._crs.project(e.unproject(s, t.z)),
            h = this._wmsVersion >= 1.3 && this._crs === o.CRS.EPSG4326 ? [r.y, a.x, a.y, r.x].join(",") : [a.x, r.y, r.x, a.y].join(","),
            l = o.Util.template(this._url, {
          s: this._getSubdomain(t)
        });

        return l + o.Util.getParamString(this.wmsParams, l, !0) + "&BBOX=" + h;
      },
      setParams: function setParams(t, e) {
        return o.extend(this.wmsParams, t), e || this.redraw(), this;
      }
    }), o.tileLayer.wms = function (t, e) {
      return new o.TileLayer.WMS(t, e);
    }, o.TileLayer.Canvas = o.TileLayer.extend({
      options: {
        async: !1
      },
      initialize: function initialize(t) {
        o.setOptions(this, t);
      },
      redraw: function redraw() {
        this._map && (this._reset({
          hard: !0
        }), this._update());

        for (var t in this._tiles) {
          this._redrawTile(this._tiles[t]);
        }

        return this;
      },
      _redrawTile: function _redrawTile(t) {
        this.drawTile(t, t._tilePoint, this._map._zoom);
      },
      _createTile: function _createTile() {
        var t = o.DomUtil.create("canvas", "leaflet-tile");
        return t.width = t.height = this.options.tileSize, t.onselectstart = t.onmousemove = o.Util.falseFn, t;
      },
      _loadTile: function _loadTile(t, e) {
        t._layer = this, t._tilePoint = e, this._redrawTile(t), this.options.async || this.tileDrawn(t);
      },
      drawTile: function drawTile() {},
      tileDrawn: function tileDrawn(t) {
        this._tileOnLoad.call(t);
      }
    }), o.tileLayer.canvas = function (t) {
      return new o.TileLayer.Canvas(t);
    }, o.ImageOverlay = o.Class.extend({
      includes: o.Mixin.Events,
      options: {
        opacity: 1
      },
      initialize: function initialize(t, e, i) {
        this._url = t, this._bounds = o.latLngBounds(e), o.setOptions(this, i);
      },
      onAdd: function onAdd(t) {
        this._map = t, this._image || this._initImage(), t._panes.overlayPane.appendChild(this._image), t.on("viewreset", this._reset, this), t.options.zoomAnimation && o.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset();
      },
      onRemove: function onRemove(t) {
        t.getPanes().overlayPane.removeChild(this._image), t.off("viewreset", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this);
      },
      addTo: function addTo(t) {
        return t.addLayer(this), this;
      },
      setOpacity: function setOpacity(t) {
        return this.options.opacity = t, this._updateOpacity(), this;
      },
      bringToFront: function bringToFront() {
        return this._image && this._map._panes.overlayPane.appendChild(this._image), this;
      },
      bringToBack: function bringToBack() {
        var t = this._map._panes.overlayPane;
        return this._image && t.insertBefore(this._image, t.firstChild), this;
      },
      setUrl: function setUrl(t) {
        this._url = t, this._image.src = this._url;
      },
      getAttribution: function getAttribution() {
        return this.options.attribution;
      },
      _initImage: function _initImage() {
        this._image = o.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && o.Browser.any3d ? o.DomUtil.addClass(this._image, "leaflet-zoom-animated") : o.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), o.extend(this._image, {
          galleryimg: "no",
          onselectstart: o.Util.falseFn,
          onmousemove: o.Util.falseFn,
          onload: o.bind(this._onImageLoad, this),
          src: this._url
        });
      },
      _animateZoom: function _animateZoom(t) {
        var e = this._map,
            i = this._image,
            n = e.getZoomScale(t.zoom),
            s = this._bounds.getNorthWest(),
            a = this._bounds.getSouthEast(),
            r = e._latLngToNewLayerPoint(s, t.zoom, t.center),
            h = e._latLngToNewLayerPoint(a, t.zoom, t.center)._subtract(r),
            l = r._add(h._multiplyBy(.5 * (1 - 1 / n)));

        i.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(l) + " scale(" + n + ") ";
      },
      _reset: function _reset() {
        var t = this._image,
            e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            i = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);

        o.DomUtil.setPosition(t, e), t.style.width = i.x + "px", t.style.height = i.y + "px";
      },
      _onImageLoad: function _onImageLoad() {
        this.fire("load");
      },
      _updateOpacity: function _updateOpacity() {
        o.DomUtil.setOpacity(this._image, this.options.opacity);
      }
    }), o.imageOverlay = function (t, e, i) {
      return new o.ImageOverlay(t, e, i);
    }, o.Icon = o.Class.extend({
      options: {
        className: ""
      },
      initialize: function initialize(t) {
        o.setOptions(this, t);
      },
      createIcon: function createIcon(t) {
        return this._createIcon("icon", t);
      },
      createShadow: function createShadow(t) {
        return this._createIcon("shadow", t);
      },
      _createIcon: function _createIcon(t, e) {
        var i = this._getIconUrl(t);

        if (!i) {
          if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }

        var n;
        return n = e && "IMG" === e.tagName ? this._createImg(i, e) : this._createImg(i), this._setIconStyles(n, t), n;
      },
      _setIconStyles: function _setIconStyles(t, e) {
        var i,
            n = this.options,
            s = o.point(n[e + "Size"]);
        i = o.point("shadow" === e ? n.shadowAnchor || n.iconAnchor : n.iconAnchor), !i && s && (i = s.divideBy(2, !0)), t.className = "leaflet-marker-" + e + " " + n.className, i && (t.style.marginLeft = -i.x + "px", t.style.marginTop = -i.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px");
      },
      _createImg: function _createImg(t, i) {
        return i = i || e.createElement("img"), i.src = t, i;
      },
      _getIconUrl: function _getIconUrl(t) {
        return o.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"];
      }
    }), o.icon = function (t) {
      return new o.Icon(t);
    }, o.Icon.Default = o.Icon.extend({
      options: {
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      },
      _getIconUrl: function _getIconUrl(t) {
        var e = t + "Url";
        if (this.options[e]) return this.options[e];
        o.Browser.retina && "icon" === t && (t += "-2x");
        var i = o.Icon.Default.imagePath;
        if (!i) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
        return i + "/marker-" + t + ".png";
      }
    }), o.Icon.Default.imagePath = function () {
      var t,
          i,
          n,
          o,
          s,
          a = e.getElementsByTagName("script"),
          r = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;

      for (t = 0, i = a.length; i > t; t++) {
        if (n = a[t].src, o = n.match(r)) return s = n.split(r)[0], (s ? s + "/" : "") + "images";
      }
    }(), o.Marker = o.Class.extend({
      includes: o.Mixin.Events,
      options: {
        icon: new o.Icon.Default(),
        title: "",
        alt: "",
        clickable: !0,
        draggable: !1,
        keyboard: !0,
        zIndexOffset: 0,
        opacity: 1,
        riseOnHover: !1,
        riseOffset: 250
      },
      initialize: function initialize(t, e) {
        o.setOptions(this, e), this._latlng = o.latLng(t);
      },
      onAdd: function onAdd(t) {
        this._map = t, t.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this);
      },
      addTo: function addTo(t) {
        return t.addLayer(this), this;
      },
      onRemove: function onRemove(t) {
        this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), t.off({
          viewreset: this.update,
          zoomanim: this._animateZoom
        }, this), this._map = null;
      },
      getLatLng: function getLatLng() {
        return this._latlng;
      },
      setLatLng: function setLatLng(t) {
        return this._latlng = o.latLng(t), this.update(), this.fire("move", {
          latlng: this._latlng
        });
      },
      setZIndexOffset: function setZIndexOffset(t) {
        return this.options.zIndexOffset = t, this.update(), this;
      },
      setIcon: function setIcon(t) {
        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup), this;
      },
      update: function update() {
        if (this._icon) {
          var t = this._map.latLngToLayerPoint(this._latlng).round();

          this._setPos(t);
        }

        return this;
      },
      _initIcon: function _initIcon() {
        var t = this.options,
            e = this._map,
            i = e.options.zoomAnimation && e.options.markerZoomAnimation,
            n = i ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
            s = t.icon.createIcon(this._icon),
            a = !1;
        s !== this._icon && (this._icon && this._removeIcon(), a = !0, t.title && (s.title = t.title), t.alt && (s.alt = t.alt)), o.DomUtil.addClass(s, n), t.keyboard && (s.tabIndex = "0"), this._icon = s, this._initInteraction(), t.riseOnHover && o.DomEvent.on(s, "mouseover", this._bringToFront, this).on(s, "mouseout", this._resetZIndex, this);
        var r = t.icon.createShadow(this._shadow),
            h = !1;
        r !== this._shadow && (this._removeShadow(), h = !0), r && o.DomUtil.addClass(r, n), this._shadow = r, t.opacity < 1 && this._updateOpacity();
        var l = this._map._panes;
        a && l.markerPane.appendChild(this._icon), r && h && l.shadowPane.appendChild(this._shadow);
      },
      _removeIcon: function _removeIcon() {
        this.options.riseOnHover && o.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null;
      },
      _removeShadow: function _removeShadow() {
        this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null;
      },
      _setPos: function _setPos(t) {
        o.DomUtil.setPosition(this._icon, t), this._shadow && o.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function _updateZIndex(t) {
        this._icon.style.zIndex = this._zIndex + t;
      },
      _animateZoom: function _animateZoom(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();

        this._setPos(e);
      },
      _initInteraction: function _initInteraction() {
        if (this.options.clickable) {
          var t = this._icon,
              e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
          o.DomUtil.addClass(t, "leaflet-clickable"), o.DomEvent.on(t, "click", this._onMouseClick, this), o.DomEvent.on(t, "keypress", this._onKeyPress, this);

          for (var i = 0; i < e.length; i++) {
            o.DomEvent.on(t, e[i], this._fireMouseEvent, this);
          }

          o.Handler.MarkerDrag && (this.dragging = new o.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable());
        }
      },
      _onMouseClick: function _onMouseClick(t) {
        var e = this.dragging && this.dragging.moved();
        (this.hasEventListeners(t.type) || e) && o.DomEvent.stopPropagation(t), e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
          originalEvent: t,
          latlng: this._latlng
        });
      },
      _onKeyPress: function _onKeyPress(t) {
        13 === t.keyCode && this.fire("click", {
          originalEvent: t,
          latlng: this._latlng
        });
      },
      _fireMouseEvent: function _fireMouseEvent(t) {
        this.fire(t.type, {
          originalEvent: t,
          latlng: this._latlng
        }), "contextmenu" === t.type && this.hasEventListeners(t.type) && o.DomEvent.preventDefault(t), "mousedown" !== t.type ? o.DomEvent.stopPropagation(t) : o.DomEvent.preventDefault(t);
      },
      setOpacity: function setOpacity(t) {
        return this.options.opacity = t, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function _updateOpacity() {
        o.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && o.DomUtil.setOpacity(this._shadow, this.options.opacity);
      },
      _bringToFront: function _bringToFront() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function _resetZIndex() {
        this._updateZIndex(0);
      }
    }), o.marker = function (t, e) {
      return new o.Marker(t, e);
    }, o.DivIcon = o.Icon.extend({
      options: {
        iconSize: [12, 12],
        className: "leaflet-div-icon",
        html: !1
      },
      createIcon: function createIcon(t) {
        var i = t && "DIV" === t.tagName ? t : e.createElement("div"),
            n = this.options;
        return i.innerHTML = n.html !== !1 ? n.html : "", n.bgPos && (i.style.backgroundPosition = -n.bgPos.x + "px " + -n.bgPos.y + "px"), this._setIconStyles(i, "icon"), i;
      },
      createShadow: function createShadow() {
        return null;
      }
    }), o.divIcon = function (t) {
      return new o.DivIcon(t);
    }, o.Map.mergeOptions({
      closePopupOnClick: !0
    }), o.Popup = o.Class.extend({
      includes: o.Mixin.Events,
      options: {
        minWidth: 50,
        maxWidth: 300,
        autoPan: !0,
        closeButton: !0,
        offset: [0, 7],
        autoPanPadding: [5, 5],
        keepInView: !1,
        className: "",
        zoomAnimation: !0
      },
      initialize: function initialize(t, e) {
        o.setOptions(this, t), this._source = e, this._animated = o.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1;
      },
      onAdd: function onAdd(t) {
        this._map = t, this._container || this._initLayout();
        var e = t.options.fadeAnimation;
        e && o.DomUtil.setOpacity(this._container, 0), t._panes.popupPane.appendChild(this._container), t.on(this._getEvents(), this), this.update(), e && o.DomUtil.setOpacity(this._container, 1), this.fire("open"), t.fire("popupopen", {
          popup: this
        }), this._source && this._source.fire("popupopen", {
          popup: this
        });
      },
      addTo: function addTo(t) {
        return t.addLayer(this), this;
      },
      openOn: function openOn(t) {
        return t.openPopup(this), this;
      },
      onRemove: function onRemove(t) {
        t._panes.popupPane.removeChild(this._container), o.Util.falseFn(this._container.offsetWidth), t.off(this._getEvents(), this), t.options.fadeAnimation && o.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), t.fire("popupclose", {
          popup: this
        }), this._source && this._source.fire("popupclose", {
          popup: this
        });
      },
      getLatLng: function getLatLng() {
        return this._latlng;
      },
      setLatLng: function setLatLng(t) {
        return this._latlng = o.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this;
      },
      getContent: function getContent() {
        return this._content;
      },
      setContent: function setContent(t) {
        return this._content = t, this.update(), this;
      },
      update: function update() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      },
      _getEvents: function _getEvents() {
        var t = {
          viewreset: this._updatePosition
        };
        return this._animated && (t.zoomanim = this._zoomAnimation), ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t;
      },
      _close: function _close() {
        this._map && this._map.closePopup(this);
      },
      _initLayout: function _initLayout() {
        var t,
            e = "leaflet-popup",
            i = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"),
            n = this._container = o.DomUtil.create("div", i);
        this.options.closeButton && (t = this._closeButton = o.DomUtil.create("a", e + "-close-button", n), t.href = "#close", t.innerHTML = "&#215;", o.DomEvent.disableClickPropagation(t), o.DomEvent.on(t, "click", this._onCloseButtonClick, this));
        var s = this._wrapper = o.DomUtil.create("div", e + "-content-wrapper", n);
        o.DomEvent.disableClickPropagation(s), this._contentNode = o.DomUtil.create("div", e + "-content", s), o.DomEvent.disableScrollPropagation(this._contentNode), o.DomEvent.on(s, "contextmenu", o.DomEvent.stopPropagation), this._tipContainer = o.DomUtil.create("div", e + "-tip-container", n), this._tip = o.DomUtil.create("div", e + "-tip", this._tipContainer);
      },
      _updateContent: function _updateContent() {
        if (this._content) {
          if ("string" == typeof this._content) this._contentNode.innerHTML = this._content;else {
            for (; this._contentNode.hasChildNodes();) {
              this._contentNode.removeChild(this._contentNode.firstChild);
            }

            this._contentNode.appendChild(this._content);
          }
          this.fire("contentupdate");
        }
      },
      _updateLayout: function _updateLayout() {
        var t = this._contentNode,
            e = t.style;
        e.width = "", e.whiteSpace = "nowrap";
        var i = t.offsetWidth;
        i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
        var n = t.offsetHeight,
            s = this.options.maxHeight,
            a = "leaflet-popup-scrolled";
        s && n > s ? (e.height = s + "px", o.DomUtil.addClass(t, a)) : o.DomUtil.removeClass(t, a), this._containerWidth = this._container.offsetWidth;
      },
      _updatePosition: function _updatePosition() {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng),
              e = this._animated,
              i = o.point(this.options.offset);

          e && o.DomUtil.setPosition(this._container, t), this._containerBottom = -i.y - (e ? 0 : t.y), this._containerLeft = -Math.round(this._containerWidth / 2) + i.x + (e ? 0 : t.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px";
        }
      },
      _zoomAnimation: function _zoomAnimation(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);

        o.DomUtil.setPosition(this._container, e);
      },
      _adjustPan: function _adjustPan() {
        if (this.options.autoPan) {
          var t = this._map,
              e = this._container.offsetHeight,
              i = this._containerWidth,
              n = new o.Point(this._containerLeft, -e - this._containerBottom);
          this._animated && n._add(o.DomUtil.getPosition(this._container));
          var s = t.layerPointToContainerPoint(n),
              a = o.point(this.options.autoPanPadding),
              r = o.point(this.options.autoPanPaddingTopLeft || a),
              h = o.point(this.options.autoPanPaddingBottomRight || a),
              l = t.getSize(),
              u = 0,
              c = 0;
          s.x + i + h.x > l.x && (u = s.x + i - l.x + h.x), s.x - u - r.x < 0 && (u = s.x - r.x), s.y + e + h.y > l.y && (c = s.y + e - l.y + h.y), s.y - c - r.y < 0 && (c = s.y - r.y), (u || c) && t.fire("autopanstart").panBy([u, c]);
        }
      },
      _onCloseButtonClick: function _onCloseButtonClick(t) {
        this._close(), o.DomEvent.stop(t);
      }
    }), o.popup = function (t, e) {
      return new o.Popup(t, e);
    }, o.Map.include({
      openPopup: function openPopup(t, e, i) {
        if (this.closePopup(), !(t instanceof o.Popup)) {
          var n = t;
          t = new o.Popup(i).setLatLng(e).setContent(n);
        }

        return t._isOpen = !0, this._popup = t, this.addLayer(t);
      },
      closePopup: function closePopup(t) {
        return t && t !== this._popup || (t = this._popup, this._popup = null), t && (this.removeLayer(t), t._isOpen = !1), this;
      }
    }), o.Marker.include({
      openPopup: function openPopup() {
        return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this;
      },
      closePopup: function closePopup() {
        return this._popup && this._popup._close(), this;
      },
      togglePopup: function togglePopup() {
        return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this;
      },
      bindPopup: function bindPopup(t, e) {
        var i = o.point(this.options.icon.options.popupAnchor || [0, 0]);
        return i = i.add(o.Popup.prototype.options.offset), e && e.offset && (i = i.add(e.offset)), e = o.extend({
          offset: i
        }, e), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), t instanceof o.Popup ? (o.setOptions(t, e), this._popup = t) : this._popup = new o.Popup(e, this).setContent(t), this;
      },
      setPopupContent: function setPopupContent(t) {
        return this._popup && this._popup.setContent(t), this;
      },
      unbindPopup: function unbindPopup() {
        return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this;
      },
      getPopup: function getPopup() {
        return this._popup;
      },
      _movePopup: function _movePopup(t) {
        this._popup.setLatLng(t.latlng);
      }
    }), o.LayerGroup = o.Class.extend({
      initialize: function initialize(t) {
        this._layers = {};
        var e, i;
        if (t) for (e = 0, i = t.length; i > e; e++) {
          this.addLayer(t[e]);
        }
      },
      addLayer: function addLayer(t) {
        var e = this.getLayerId(t);
        return this._layers[e] = t, this._map && this._map.addLayer(t), this;
      },
      removeLayer: function removeLayer(t) {
        var e = t in this._layers ? t : this.getLayerId(t);
        return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
      },
      hasLayer: function hasLayer(t) {
        return t ? t in this._layers || this.getLayerId(t) in this._layers : !1;
      },
      clearLayers: function clearLayers() {
        return this.eachLayer(this.removeLayer, this), this;
      },
      invoke: function invoke(t) {
        var e,
            i,
            n = Array.prototype.slice.call(arguments, 1);

        for (e in this._layers) {
          i = this._layers[e], i[t] && i[t].apply(i, n);
        }

        return this;
      },
      onAdd: function onAdd(t) {
        this._map = t, this.eachLayer(t.addLayer, t);
      },
      onRemove: function onRemove(t) {
        this.eachLayer(t.removeLayer, t), this._map = null;
      },
      addTo: function addTo(t) {
        return t.addLayer(this), this;
      },
      eachLayer: function eachLayer(t, e) {
        for (var i in this._layers) {
          t.call(e, this._layers[i]);
        }

        return this;
      },
      getLayer: function getLayer(t) {
        return this._layers[t];
      },
      getLayers: function getLayers() {
        var t = [];

        for (var e in this._layers) {
          t.push(this._layers[e]);
        }

        return t;
      },
      setZIndex: function setZIndex(t) {
        return this.invoke("setZIndex", t);
      },
      getLayerId: function getLayerId(t) {
        return o.stamp(t);
      }
    }), o.layerGroup = function (t) {
      return new o.LayerGroup(t);
    }, o.FeatureGroup = o.LayerGroup.extend({
      includes: o.Mixin.Events,
      statics: {
        EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
      },
      addLayer: function addLayer(t) {
        return this.hasLayer(t) ? this : ("on" in t && t.on(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {
          layer: t
        }));
      },
      removeLayer: function removeLayer(t) {
        return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.off(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {
          layer: t
        })) : this;
      },
      bindPopup: function bindPopup(t, e) {
        return this._popupContent = t, this._popupOptions = e, this.invoke("bindPopup", t, e);
      },
      openPopup: function openPopup(t) {
        for (var e in this._layers) {
          this._layers[e].openPopup(t);

          break;
        }

        return this;
      },
      setStyle: function setStyle(t) {
        return this.invoke("setStyle", t);
      },
      bringToFront: function bringToFront() {
        return this.invoke("bringToFront");
      },
      bringToBack: function bringToBack() {
        return this.invoke("bringToBack");
      },
      getBounds: function getBounds() {
        var t = new o.LatLngBounds();
        return this.eachLayer(function (e) {
          t.extend(e instanceof o.Marker ? e.getLatLng() : e.getBounds());
        }), t;
      },
      _propagateEvent: function _propagateEvent(t) {
        t = o.extend({
          layer: t.target,
          target: this
        }, t), this.fire(t.type, t);
      }
    }), o.featureGroup = function (t) {
      return new o.FeatureGroup(t);
    }, o.Path = o.Class.extend({
      includes: [o.Mixin.Events],
      statics: {
        CLIP_PADDING: function () {
          var e = o.Browser.mobile ? 1280 : 2e3,
              i = (e / Math.max(t.outerWidth, t.outerHeight) - 1) / 2;
          return Math.max(0, Math.min(.5, i));
        }()
      },
      options: {
        stroke: !0,
        color: "#0033ff",
        dashArray: null,
        lineCap: null,
        lineJoin: null,
        weight: 5,
        opacity: .5,
        fill: !1,
        fillColor: null,
        fillOpacity: .2,
        clickable: !0
      },
      initialize: function initialize(t) {
        o.setOptions(this, t);
      },
      onAdd: function onAdd(t) {
        this._map = t, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), t.on({
          viewreset: this.projectLatlngs,
          moveend: this._updatePath
        }, this);
      },
      addTo: function addTo(t) {
        return t.addLayer(this), this;
      },
      onRemove: function onRemove(t) {
        t._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, o.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), t.off({
          viewreset: this.projectLatlngs,
          moveend: this._updatePath
        }, this);
      },
      projectLatlngs: function projectLatlngs() {},
      setStyle: function setStyle(t) {
        return o.setOptions(this, t), this._container && this._updateStyle(), this;
      },
      redraw: function redraw() {
        return this._map && (this.projectLatlngs(), this._updatePath()), this;
      }
    }), o.Map.include({
      _updatePathViewport: function _updatePathViewport() {
        var t = o.Path.CLIP_PADDING,
            e = this.getSize(),
            i = o.DomUtil.getPosition(this._mapPane),
            n = i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),
            s = n.add(e.multiplyBy(1 + 2 * t)._round());

        this._pathViewport = new o.Bounds(n, s);
      }
    }), o.Path.SVG_NS = "http://www.w3.org/2000/svg", o.Browser.svg = !(!e.createElementNS || !e.createElementNS(o.Path.SVG_NS, "svg").createSVGRect), o.Path = o.Path.extend({
      statics: {
        SVG: o.Browser.svg
      },
      bringToFront: function bringToFront() {
        var t = this._map._pathRoot,
            e = this._container;
        return e && t.lastChild !== e && t.appendChild(e), this;
      },
      bringToBack: function bringToBack() {
        var t = this._map._pathRoot,
            e = this._container,
            i = t.firstChild;
        return e && i !== e && t.insertBefore(e, i), this;
      },
      getPathString: function getPathString() {},
      _createElement: function _createElement(t) {
        return e.createElementNS(o.Path.SVG_NS, t);
      },
      _initElements: function _initElements() {
        this._map._initPathRoot(), this._initPath(), this._initStyle();
      },
      _initPath: function _initPath() {
        this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className && o.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path);
      },
      _initStyle: function _initStyle() {
        this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle();
      },
      _updateStyle: function _updateStyle() {
        this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none");
      },
      _updatePath: function _updatePath() {
        var t = this.getPathString();
        t || (t = "M0 0"), this._path.setAttribute("d", t);
      },
      _initEvents: function _initEvents() {
        if (this.options.clickable) {
          (o.Browser.svg || !o.Browser.vml) && o.DomUtil.addClass(this._path, "leaflet-clickable"), o.DomEvent.on(this._container, "click", this._onMouseClick, this);

          for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++) {
            o.DomEvent.on(this._container, t[e], this._fireMouseEvent, this);
          }
        }
      },
      _onMouseClick: function _onMouseClick(t) {
        this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t);
      },
      _fireMouseEvent: function _fireMouseEvent(t) {
        if (this.hasEventListeners(t.type)) {
          var e = this._map,
              i = e.mouseEventToContainerPoint(t),
              n = e.containerPointToLayerPoint(i),
              s = e.layerPointToLatLng(n);
          this.fire(t.type, {
            latlng: s,
            layerPoint: n,
            containerPoint: i,
            originalEvent: t
          }), "contextmenu" === t.type && o.DomEvent.preventDefault(t), "mousemove" !== t.type && o.DomEvent.stopPropagation(t);
        }
      }
    }), o.Map.include({
      _initPathRoot: function _initPathRoot() {
        this._pathRoot || (this._pathRoot = o.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && o.Browser.any3d ? (o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"), this.on({
          zoomanim: this._animatePathZoom,
          zoomend: this._endPathZoom
        })) : o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport());
      },
      _animatePathZoom: function _animatePathZoom(t) {
        var e = this.getZoomScale(t.zoom),
            i = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);

        this._pathRoot.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(i) + " scale(" + e + ") ", this._pathZooming = !0;
      },
      _endPathZoom: function _endPathZoom() {
        this._pathZooming = !1;
      },
      _updateSvgViewport: function _updateSvgViewport() {
        if (!this._pathZooming) {
          this._updatePathViewport();

          var t = this._pathViewport,
              e = t.min,
              i = t.max,
              n = i.x - e.x,
              s = i.y - e.y,
              a = this._pathRoot,
              r = this._panes.overlayPane;
          o.Browser.mobileWebkit && r.removeChild(a), o.DomUtil.setPosition(a, e), a.setAttribute("width", n), a.setAttribute("height", s), a.setAttribute("viewBox", [e.x, e.y, n, s].join(" ")), o.Browser.mobileWebkit && r.appendChild(a);
        }
      }
    }), o.Path.include({
      bindPopup: function bindPopup(t, e) {
        return t instanceof o.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new o.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this;
      },
      unbindPopup: function unbindPopup() {
        return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this;
      },
      openPopup: function openPopup(t) {
        return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
          latlng: t
        })), this;
      },
      closePopup: function closePopup() {
        return this._popup && this._popup._close(), this;
      },
      _openPopup: function _openPopup(t) {
        this._popup.setLatLng(t.latlng), this._map.openPopup(this._popup);
      }
    }), o.Browser.vml = !o.Browser.svg && function () {
      try {
        var t = e.createElement("div");
        t.innerHTML = '<v:shape adj="1"/>';
        var i = t.firstChild;
        return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj;
      } catch (n) {
        return !1;
      }
    }(), o.Path = o.Browser.svg || !o.Browser.vml ? o.Path : o.Path.extend({
      statics: {
        VML: !0,
        CLIP_PADDING: .02
      },
      _createElement: function () {
        try {
          return e.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
            return e.createElement("<lvml:" + t + ' class="lvml">');
          };
        } catch (t) {
          return function (t) {
            return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
          };
        }
      }(),
      _initPath: function _initPath() {
        var t = this._container = this._createElement("shape");

        o.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this.options.clickable && o.DomUtil.addClass(t, "leaflet-clickable"), t.coordsize = "1 1", this._path = this._createElement("path"), t.appendChild(this._path), this._map._pathRoot.appendChild(t);
      },
      _initStyle: function _initStyle() {
        this._updateStyle();
      },
      _updateStyle: function _updateStyle() {
        var t = this._stroke,
            e = this._fill,
            i = this.options,
            n = this._container;
        n.stroked = i.stroke, n.filled = i.fill, i.stroke ? (t || (t = this._stroke = this._createElement("stroke"), t.endcap = "round", n.appendChild(t)), t.weight = i.weight + "px", t.color = i.color, t.opacity = i.opacity, t.dashStyle = i.dashArray ? o.Util.isArray(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : "", i.lineCap && (t.endcap = i.lineCap.replace("butt", "flat")), i.lineJoin && (t.joinstyle = i.lineJoin)) : t && (n.removeChild(t), this._stroke = null), i.fill ? (e || (e = this._fill = this._createElement("fill"), n.appendChild(e)), e.color = i.fillColor || i.color, e.opacity = i.fillOpacity) : e && (n.removeChild(e), this._fill = null);
      },
      _updatePath: function _updatePath() {
        var t = this._container.style;
        t.display = "none", this._path.v = this.getPathString() + " ", t.display = "";
      }
    }), o.Map.include(o.Browser.svg || !o.Browser.vml ? {} : {
      _initPathRoot: function _initPathRoot() {
        if (!this._pathRoot) {
          var t = this._pathRoot = e.createElement("div");
          t.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(t), this.on("moveend", this._updatePathViewport), this._updatePathViewport();
        }
      }
    }), o.Browser.canvas = function () {
      return !!e.createElement("canvas").getContext;
    }(), o.Path = o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? o.Path : o.Path.extend({
      statics: {
        CANVAS: !0,
        SVG: !1
      },
      redraw: function redraw() {
        return this._map && (this.projectLatlngs(), this._requestUpdate()), this;
      },
      setStyle: function setStyle(t) {
        return o.setOptions(this, t), this._map && (this._updateStyle(), this._requestUpdate()), this;
      },
      onRemove: function onRemove(t) {
        t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(), this._map = null;
      },
      _requestUpdate: function _requestUpdate() {
        this._map && !o.Path._updateRequest && (o.Path._updateRequest = o.Util.requestAnimFrame(this._fireMapMoveEnd, this._map));
      },
      _fireMapMoveEnd: function _fireMapMoveEnd() {
        o.Path._updateRequest = null, this.fire("moveend");
      },
      _initElements: function _initElements() {
        this._map._initPathRoot(), this._ctx = this._map._canvasCtx;
      },
      _updateStyle: function _updateStyle() {
        var t = this.options;
        t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color), t.fill && (this._ctx.fillStyle = t.fillColor || t.color);
      },
      _drawPath: function _drawPath() {
        var t, e, i, n, s, a;

        for (this._ctx.beginPath(), t = 0, i = this._parts.length; i > t; t++) {
          for (e = 0, n = this._parts[t].length; n > e; e++) {
            s = this._parts[t][e], a = (0 === e ? "move" : "line") + "To", this._ctx[a](s.x, s.y);
          }

          this instanceof o.Polygon && this._ctx.closePath();
        }
      },
      _checkIfEmpty: function _checkIfEmpty() {
        return !this._parts.length;
      },
      _updatePath: function _updatePath() {
        if (!this._checkIfEmpty()) {
          var t = this._ctx,
              e = this.options;
          this._drawPath(), t.save(), this._updateStyle(), e.fill && (t.globalAlpha = e.fillOpacity, t.fill()), e.stroke && (t.globalAlpha = e.opacity, t.stroke()), t.restore();
        }
      },
      _initEvents: function _initEvents() {
        this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onClick, this));
      },
      _onClick: function _onClick(t) {
        this._containsPoint(t.layerPoint) && this.fire("click", t);
      },
      _onMouseMove: function _onMouseMove(t) {
        this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", t)));
      }
    }), o.Map.include(o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? {} : {
      _initPathRoot: function _initPathRoot() {
        var t,
            i = this._pathRoot;
        i || (i = this._pathRoot = e.createElement("canvas"), i.style.position = "absolute", t = this._canvasCtx = i.getContext("2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(i), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport());
      },
      _updateCanvasViewport: function _updateCanvasViewport() {
        if (!this._pathZooming) {
          this._updatePathViewport();

          var t = this._pathViewport,
              e = t.min,
              i = t.max.subtract(e),
              n = this._pathRoot;
          o.DomUtil.setPosition(n, e), n.width = i.x, n.height = i.y, n.getContext("2d").translate(-e.x, -e.y);
        }
      }
    }), o.LineUtil = {
      simplify: function simplify(t, e) {
        if (!e || !t.length) return t.slice();
        var i = e * e;
        return t = this._reducePoints(t, i), t = this._simplifyDP(t, i);
      },
      pointToSegmentDistance: function pointToSegmentDistance(t, e, i) {
        return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0));
      },
      closestPointOnSegment: function closestPointOnSegment(t, e, i) {
        return this._sqClosestPointOnSegment(t, e, i);
      },
      _simplifyDP: function _simplifyDP(t, e) {
        var n = t.length,
            o = typeof Uint8Array != i + "" ? Uint8Array : Array,
            s = new o(n);
        s[0] = s[n - 1] = 1, this._simplifyDPStep(t, s, e, 0, n - 1);
        var a,
            r = [];

        for (a = 0; n > a; a++) {
          s[a] && r.push(t[a]);
        }

        return r;
      },
      _simplifyDPStep: function _simplifyDPStep(t, e, i, n, o) {
        var s,
            a,
            r,
            h = 0;

        for (a = n + 1; o - 1 >= a; a++) {
          r = this._sqClosestPointOnSegment(t[a], t[n], t[o], !0), r > h && (s = a, h = r);
        }

        h > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o));
      },
      _reducePoints: function _reducePoints(t, e) {
        for (var i = [t[0]], n = 1, o = 0, s = t.length; s > n; n++) {
          this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o = n);
        }

        return s - 1 > o && i.push(t[s - 1]), i;
      },
      clipSegment: function clipSegment(t, e, i, n) {
        var o,
            s,
            a,
            r = n ? this._lastCode : this._getBitCode(t, i),
            h = this._getBitCode(e, i);

        for (this._lastCode = h;;) {
          if (!(r | h)) return [t, e];
          if (r & h) return !1;
          o = r || h, s = this._getEdgeIntersection(t, e, o, i), a = this._getBitCode(s, i), o === r ? (t = s, r = a) : (e = s, h = a);
        }
      },
      _getEdgeIntersection: function _getEdgeIntersection(t, e, i, n) {
        var s = e.x - t.x,
            a = e.y - t.y,
            r = n.min,
            h = n.max;
        return 8 & i ? new o.Point(t.x + s * (h.y - t.y) / a, h.y) : 4 & i ? new o.Point(t.x + s * (r.y - t.y) / a, r.y) : 2 & i ? new o.Point(h.x, t.y + a * (h.x - t.x) / s) : 1 & i ? new o.Point(r.x, t.y + a * (r.x - t.x) / s) : void 0;
      },
      _getBitCode: function _getBitCode(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
      },
      _sqDist: function _sqDist(t, e) {
        var i = e.x - t.x,
            n = e.y - t.y;
        return i * i + n * n;
      },
      _sqClosestPointOnSegment: function _sqClosestPointOnSegment(t, e, i, n) {
        var s,
            a = e.x,
            r = e.y,
            h = i.x - a,
            l = i.y - r,
            u = h * h + l * l;
        return u > 0 && (s = ((t.x - a) * h + (t.y - r) * l) / u, s > 1 ? (a = i.x, r = i.y) : s > 0 && (a += h * s, r += l * s)), h = t.x - a, l = t.y - r, n ? h * h + l * l : new o.Point(a, r);
      }
    }, o.Polyline = o.Path.extend({
      initialize: function initialize(t, e) {
        o.Path.prototype.initialize.call(this, e), this._latlngs = this._convertLatLngs(t);
      },
      options: {
        smoothFactor: 1,
        noClip: !1
      },
      projectLatlngs: function projectLatlngs() {
        this._originalPoints = [];

        for (var t = 0, e = this._latlngs.length; e > t; t++) {
          this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t]);
        }
      },
      getPathString: function getPathString() {
        for (var t = 0, e = this._parts.length, i = ""; e > t; t++) {
          i += this._getPathPartStr(this._parts[t]);
        }

        return i;
      },
      getLatLngs: function getLatLngs() {
        return this._latlngs;
      },
      setLatLngs: function setLatLngs(t) {
        return this._latlngs = this._convertLatLngs(t), this.redraw();
      },
      addLatLng: function addLatLng(t) {
        return this._latlngs.push(o.latLng(t)), this.redraw();
      },
      spliceLatLngs: function spliceLatLngs() {
        var t = [].splice.apply(this._latlngs, arguments);
        return this._convertLatLngs(this._latlngs, !0), this.redraw(), t;
      },
      closestLayerPoint: function closestLayerPoint(t) {
        for (var e, i, n = 1 / 0, s = this._parts, a = null, r = 0, h = s.length; h > r; r++) {
          for (var l = s[r], u = 1, c = l.length; c > u; u++) {
            e = l[u - 1], i = l[u];

            var d = o.LineUtil._sqClosestPointOnSegment(t, e, i, !0);

            n > d && (n = d, a = o.LineUtil._sqClosestPointOnSegment(t, e, i));
          }
        }

        return a && (a.distance = Math.sqrt(n)), a;
      },
      getBounds: function getBounds() {
        return new o.LatLngBounds(this.getLatLngs());
      },
      _convertLatLngs: function _convertLatLngs(t, e) {
        var i,
            n,
            s = e ? t : [];

        for (i = 0, n = t.length; n > i; i++) {
          if (o.Util.isArray(t[i]) && "number" != typeof t[i][0]) return;
          s[i] = o.latLng(t[i]);
        }

        return s;
      },
      _initEvents: function _initEvents() {
        o.Path.prototype._initEvents.call(this);
      },
      _getPathPartStr: function _getPathPartStr(t) {
        for (var e, i = o.Path.VML, n = 0, s = t.length, a = ""; s > n; n++) {
          e = t[n], i && e._round(), a += (n ? "L" : "M") + e.x + " " + e.y;
        }

        return a;
      },
      _clipPoints: function _clipPoints() {
        var t,
            e,
            i,
            n = this._originalPoints,
            s = n.length;
        if (this.options.noClip) return void (this._parts = [n]);
        this._parts = [];
        var a = this._parts,
            r = this._map._pathViewport,
            h = o.LineUtil;

        for (t = 0, e = 0; s - 1 > t; t++) {
          i = h.clipSegment(n[t], n[t + 1], r, t), i && (a[e] = a[e] || [], a[e].push(i[0]), (i[1] !== n[t + 1] || t === s - 2) && (a[e].push(i[1]), e++));
        }
      },
      _simplifyPoints: function _simplifyPoints() {
        for (var t = this._parts, e = o.LineUtil, i = 0, n = t.length; n > i; i++) {
          t[i] = e.simplify(t[i], this.options.smoothFactor);
        }
      },
      _updatePath: function _updatePath() {
        this._map && (this._clipPoints(), this._simplifyPoints(), o.Path.prototype._updatePath.call(this));
      }
    }), o.polyline = function (t, e) {
      return new o.Polyline(t, e);
    }, o.PolyUtil = {}, o.PolyUtil.clipPolygon = function (t, e) {
      var i,
          n,
          s,
          a,
          r,
          h,
          l,
          u,
          c,
          d = [1, 4, 2, 8],
          p = o.LineUtil;

      for (n = 0, l = t.length; l > n; n++) {
        t[n]._code = p._getBitCode(t[n], e);
      }

      for (a = 0; 4 > a; a++) {
        for (u = d[a], i = [], n = 0, l = t.length, s = l - 1; l > n; s = n++) {
          r = t[n], h = t[s], r._code & u ? h._code & u || (c = p._getEdgeIntersection(h, r, u, e), c._code = p._getBitCode(c, e), i.push(c)) : (h._code & u && (c = p._getEdgeIntersection(h, r, u, e), c._code = p._getBitCode(c, e), i.push(c)), i.push(r));
        }

        t = i;
      }

      return t;
    }, o.Polygon = o.Polyline.extend({
      options: {
        fill: !0
      },
      initialize: function initialize(t, e) {
        o.Polyline.prototype.initialize.call(this, t, e), this._initWithHoles(t);
      },
      _initWithHoles: function _initWithHoles(t) {
        var e, i, n;
        if (t && o.Util.isArray(t[0]) && "number" != typeof t[0][0]) for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), e = 0, i = this._holes.length; i > e; e++) {
          n = this._holes[e] = this._convertLatLngs(this._holes[e]), n[0].equals(n[n.length - 1]) && n.pop();
        }
        t = this._latlngs, t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop();
      },
      projectLatlngs: function projectLatlngs() {
        if (o.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
          var t, e, i, n;

          for (t = 0, i = this._holes.length; i > t; t++) {
            for (this._holePoints[t] = [], e = 0, n = this._holes[t].length; n > e; e++) {
              this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e]);
            }
          }
        }
      },
      setLatLngs: function setLatLngs(t) {
        return t && o.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t), this.redraw()) : o.Polyline.prototype.setLatLngs.call(this, t);
      },
      _clipPoints: function _clipPoints() {
        var t = this._originalPoints,
            e = [];

        if (this._parts = [t].concat(this._holePoints), !this.options.noClip) {
          for (var i = 0, n = this._parts.length; n > i; i++) {
            var s = o.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
            s.length && e.push(s);
          }

          this._parts = e;
        }
      },
      _getPathPartStr: function _getPathPartStr(t) {
        var e = o.Polyline.prototype._getPathPartStr.call(this, t);

        return e + (o.Browser.svg ? "z" : "x");
      }
    }), o.polygon = function (t, e) {
      return new o.Polygon(t, e);
    }, function () {
      function t(t) {
        return o.FeatureGroup.extend({
          initialize: function initialize(t, e) {
            this._layers = {}, this._options = e, this.setLatLngs(t);
          },
          setLatLngs: function setLatLngs(e) {
            var i = 0,
                n = e.length;

            for (this.eachLayer(function (t) {
              n > i ? t.setLatLngs(e[i++]) : this.removeLayer(t);
            }, this); n > i;) {
              this.addLayer(new t(e[i++], this._options));
            }

            return this;
          },
          getLatLngs: function getLatLngs() {
            var t = [];
            return this.eachLayer(function (e) {
              t.push(e.getLatLngs());
            }), t;
          }
        });
      }

      o.MultiPolyline = t(o.Polyline), o.MultiPolygon = t(o.Polygon), o.multiPolyline = function (t, e) {
        return new o.MultiPolyline(t, e);
      }, o.multiPolygon = function (t, e) {
        return new o.MultiPolygon(t, e);
      };
    }(), o.Rectangle = o.Polygon.extend({
      initialize: function initialize(t, e) {
        o.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
      },
      setBounds: function setBounds(t) {
        this.setLatLngs(this._boundsToLatLngs(t));
      },
      _boundsToLatLngs: function _boundsToLatLngs(t) {
        return t = o.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
      }
    }), o.rectangle = function (t, e) {
      return new o.Rectangle(t, e);
    }, o.Circle = o.Path.extend({
      initialize: function initialize(t, e, i) {
        o.Path.prototype.initialize.call(this, i), this._latlng = o.latLng(t), this._mRadius = e;
      },
      options: {
        fill: !0
      },
      setLatLng: function setLatLng(t) {
        return this._latlng = o.latLng(t), this.redraw();
      },
      setRadius: function setRadius(t) {
        return this._mRadius = t, this.redraw();
      },
      projectLatlngs: function projectLatlngs() {
        var t = this._getLngRadius(),
            e = this._latlng,
            i = this._map.latLngToLayerPoint([e.lat, e.lng - t]);

        this._point = this._map.latLngToLayerPoint(e), this._radius = Math.max(this._point.x - i.x, 1);
      },
      getBounds: function getBounds() {
        var t = this._getLngRadius(),
            e = this._mRadius / 40075017 * 360,
            i = this._latlng;

        return new o.LatLngBounds([i.lat - e, i.lng - t], [i.lat + e, i.lng + t]);
      },
      getLatLng: function getLatLng() {
        return this._latlng;
      },
      getPathString: function getPathString() {
        var t = this._point,
            e = this._radius;
        return this._checkIfEmpty() ? "" : o.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," + e + " 0,23592600");
      },
      getRadius: function getRadius() {
        return this._mRadius;
      },
      _getLatRadius: function _getLatRadius() {
        return this._mRadius / 40075017 * 360;
      },
      _getLngRadius: function _getLngRadius() {
        return this._getLatRadius() / Math.cos(o.LatLng.DEG_TO_RAD * this._latlng.lat);
      },
      _checkIfEmpty: function _checkIfEmpty() {
        if (!this._map) return !1;
        var t = this._map._pathViewport,
            e = this._radius,
            i = this._point;
        return i.x - e > t.max.x || i.y - e > t.max.y || i.x + e < t.min.x || i.y + e < t.min.y;
      }
    }), o.circle = function (t, e, i) {
      return new o.Circle(t, e, i);
    }, o.CircleMarker = o.Circle.extend({
      options: {
        radius: 10,
        weight: 2
      },
      initialize: function initialize(t, e) {
        o.Circle.prototype.initialize.call(this, t, null, e), this._radius = this.options.radius;
      },
      projectLatlngs: function projectLatlngs() {
        this._point = this._map.latLngToLayerPoint(this._latlng);
      },
      _updateStyle: function _updateStyle() {
        o.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius);
      },
      setLatLng: function setLatLng(t) {
        return o.Circle.prototype.setLatLng.call(this, t), this._popup && this._popup._isOpen && this._popup.setLatLng(t), this;
      },
      setRadius: function setRadius(t) {
        return this.options.radius = this._radius = t, this.redraw();
      },
      getRadius: function getRadius() {
        return this._radius;
      }
    }), o.circleMarker = function (t, e) {
      return new o.CircleMarker(t, e);
    }, o.Polyline.include(o.Path.CANVAS ? {
      _containsPoint: function _containsPoint(t, e) {
        var i,
            n,
            s,
            a,
            r,
            h,
            l,
            u = this.options.weight / 2;

        for (o.Browser.touch && (u += 10), i = 0, a = this._parts.length; a > i; i++) {
          for (l = this._parts[i], n = 0, r = l.length, s = r - 1; r > n; s = n++) {
            if ((e || 0 !== n) && (h = o.LineUtil.pointToSegmentDistance(t, l[s], l[n]), u >= h)) return !0;
          }
        }

        return !1;
      }
    } : {}), o.Polygon.include(o.Path.CANVAS ? {
      _containsPoint: function _containsPoint(t) {
        var e,
            i,
            n,
            s,
            a,
            r,
            h,
            l,
            u = !1;
        if (o.Polyline.prototype._containsPoint.call(this, t, !0)) return !0;

        for (s = 0, h = this._parts.length; h > s; s++) {
          for (e = this._parts[s], a = 0, l = e.length, r = l - 1; l > a; r = a++) {
            i = e[a], n = e[r], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
          }
        }

        return u;
      }
    } : {}), o.Circle.include(o.Path.CANVAS ? {
      _drawPath: function _drawPath() {
        var t = this._point;
        this._ctx.beginPath(), this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1);
      },
      _containsPoint: function _containsPoint(t) {
        var e = this._point,
            i = this.options.stroke ? this.options.weight / 2 : 0;
        return t.distanceTo(e) <= this._radius + i;
      }
    } : {}), o.CircleMarker.include(o.Path.CANVAS ? {
      _updateStyle: function _updateStyle() {
        o.Path.prototype._updateStyle.call(this);
      }
    } : {}), o.GeoJSON = o.FeatureGroup.extend({
      initialize: function initialize(t, e) {
        o.setOptions(this, e), this._layers = {}, t && this.addData(t);
      },
      addData: function addData(t) {
        var e,
            i,
            n,
            s = o.Util.isArray(t) ? t : t.features;

        if (s) {
          for (e = 0, i = s.length; i > e; e++) {
            n = s[e], (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(s[e]);
          }

          return this;
        }

        var a = this.options;

        if (!a.filter || a.filter(t)) {
          var r = o.GeoJSON.geometryToLayer(t, a.pointToLayer, a.coordsToLatLng, a);
          return r.feature = o.GeoJSON.asFeature(t), r.defaultOptions = r.options, this.resetStyle(r), a.onEachFeature && a.onEachFeature(t, r), this.addLayer(r);
        }
      },
      resetStyle: function resetStyle(t) {
        var e = this.options.style;
        e && (o.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e));
      },
      setStyle: function setStyle(t) {
        this.eachLayer(function (e) {
          this._setLayerStyle(e, t);
        }, this);
      },
      _setLayerStyle: function _setLayerStyle(t, e) {
        "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e);
      }
    }), o.extend(o.GeoJSON, {
      geometryToLayer: function geometryToLayer(t, e, i, n) {
        var s,
            a,
            r,
            h,
            l = "Feature" === t.type ? t.geometry : t,
            u = l.coordinates,
            c = [];

        switch (i = i || this.coordsToLatLng, l.type) {
          case "Point":
            return s = i(u), e ? e(t, s) : new o.Marker(s);

          case "MultiPoint":
            for (r = 0, h = u.length; h > r; r++) {
              s = i(u[r]), c.push(e ? e(t, s) : new o.Marker(s));
            }

            return new o.FeatureGroup(c);

          case "LineString":
            return a = this.coordsToLatLngs(u, 0, i), new o.Polyline(a, n);

          case "Polygon":
            if (2 === u.length && !u[1].length) throw new Error("Invalid GeoJSON object.");
            return a = this.coordsToLatLngs(u, 1, i), new o.Polygon(a, n);

          case "MultiLineString":
            return a = this.coordsToLatLngs(u, 1, i), new o.MultiPolyline(a, n);

          case "MultiPolygon":
            return a = this.coordsToLatLngs(u, 2, i), new o.MultiPolygon(a, n);

          case "GeometryCollection":
            for (r = 0, h = l.geometries.length; h > r; r++) {
              c.push(this.geometryToLayer({
                geometry: l.geometries[r],
                type: "Feature",
                properties: t.properties
              }, e, i, n));
            }

            return new o.FeatureGroup(c);

          default:
            throw new Error("Invalid GeoJSON object.");
        }
      },
      coordsToLatLng: function coordsToLatLng(t) {
        return new o.LatLng(t[1], t[0], t[2]);
      },
      coordsToLatLngs: function coordsToLatLngs(t, e, i) {
        var n,
            o,
            s,
            a = [];

        for (o = 0, s = t.length; s > o; o++) {
          n = e ? this.coordsToLatLngs(t[o], e - 1, i) : (i || this.coordsToLatLng)(t[o]), a.push(n);
        }

        return a;
      },
      latLngToCoords: function latLngToCoords(t) {
        var e = [t.lng, t.lat];
        return t.alt !== i && e.push(t.alt), e;
      },
      latLngsToCoords: function latLngsToCoords(t) {
        for (var e = [], i = 0, n = t.length; n > i; i++) {
          e.push(o.GeoJSON.latLngToCoords(t[i]));
        }

        return e;
      },
      getFeature: function getFeature(t, e) {
        return t.feature ? o.extend({}, t.feature, {
          geometry: e
        }) : o.GeoJSON.asFeature(e);
      },
      asFeature: function asFeature(t) {
        return "Feature" === t.type ? t : {
          type: "Feature",
          properties: {},
          geometry: t
        };
      }
    });
    var a = {
      toGeoJSON: function toGeoJSON() {
        return o.GeoJSON.getFeature(this, {
          type: "Point",
          coordinates: o.GeoJSON.latLngToCoords(this.getLatLng())
        });
      }
    };
    o.Marker.include(a), o.Circle.include(a), o.CircleMarker.include(a), o.Polyline.include({
      toGeoJSON: function toGeoJSON() {
        return o.GeoJSON.getFeature(this, {
          type: "LineString",
          coordinates: o.GeoJSON.latLngsToCoords(this.getLatLngs())
        });
      }
    }), o.Polygon.include({
      toGeoJSON: function toGeoJSON() {
        var t,
            e,
            i,
            n = [o.GeoJSON.latLngsToCoords(this.getLatLngs())];
        if (n[0].push(n[0][0]), this._holes) for (t = 0, e = this._holes.length; e > t; t++) {
          i = o.GeoJSON.latLngsToCoords(this._holes[t]), i.push(i[0]), n.push(i);
        }
        return o.GeoJSON.getFeature(this, {
          type: "Polygon",
          coordinates: n
        });
      }
    }), function () {
      function t(t) {
        return function () {
          var e = [];
          return this.eachLayer(function (t) {
            e.push(t.toGeoJSON().geometry.coordinates);
          }), o.GeoJSON.getFeature(this, {
            type: t,
            coordinates: e
          });
        };
      }

      o.MultiPolyline.include({
        toGeoJSON: t("MultiLineString")
      }), o.MultiPolygon.include({
        toGeoJSON: t("MultiPolygon")
      }), o.LayerGroup.include({
        toGeoJSON: function toGeoJSON() {
          var e,
              i = this.feature && this.feature.geometry,
              n = [];
          if (i && "MultiPoint" === i.type) return t("MultiPoint").call(this);
          var s = i && "GeometryCollection" === i.type;
          return this.eachLayer(function (t) {
            t.toGeoJSON && (e = t.toGeoJSON(), n.push(s ? e.geometry : o.GeoJSON.asFeature(e)));
          }), s ? o.GeoJSON.getFeature(this, {
            geometries: n,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: n
          };
        }
      });
    }(), o.geoJson = function (t, e) {
      return new o.GeoJSON(t, e);
    }, o.DomEvent = {
      addListener: function addListener(t, e, i, n) {
        var s,
            a,
            r,
            h = o.stamp(i),
            l = "_leaflet_" + e + h;
        return t[l] ? this : (s = function s(e) {
          return i.call(n || t, e || o.DomEvent._getEvent());
        }, o.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, s, h) : (o.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, s, h), "addEventListener" in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", s, !1), t.addEventListener(e, s, !1)) : "mouseenter" === e || "mouseleave" === e ? (a = s, r = "mouseenter" === e ? "mouseover" : "mouseout", s = function s(e) {
          return o.DomEvent._checkMouse(t, e) ? a(e) : void 0;
        }, t.addEventListener(r, s, !1)) : "click" === e && o.Browser.android ? (a = s, s = function s(t) {
          return o.DomEvent._filterClick(t, a);
        }, t.addEventListener(e, s, !1)) : t.addEventListener(e, s, !1) : "attachEvent" in t && t.attachEvent("on" + e, s), t[l] = s, this));
      },
      removeListener: function removeListener(t, e, i) {
        var n = o.stamp(i),
            s = "_leaflet_" + e + n,
            a = t[s];
        return a ? (o.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, n) : o.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", a, !1), t.removeEventListener(e, a, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", a, !1) : t.removeEventListener(e, a, !1) : "detachEvent" in t && t.detachEvent("on" + e, a), t[s] = null, this) : this;
      },
      stopPropagation: function stopPropagation(t) {
        return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, o.DomEvent._skipped(t), this;
      },
      disableScrollPropagation: function disableScrollPropagation(t) {
        var e = o.DomEvent.stopPropagation;
        return o.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e);
      },
      disableClickPropagation: function disableClickPropagation(t) {
        for (var e = o.DomEvent.stopPropagation, i = o.Draggable.START.length - 1; i >= 0; i--) {
          o.DomEvent.on(t, o.Draggable.START[i], e);
        }

        return o.DomEvent.on(t, "click", o.DomEvent._fakeStop).on(t, "dblclick", e);
      },
      preventDefault: function preventDefault(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
      },
      stop: function stop(t) {
        return o.DomEvent.preventDefault(t).stopPropagation(t);
      },
      getMousePosition: function getMousePosition(t, e) {
        if (!e) return new o.Point(t.clientX, t.clientY);
        var i = e.getBoundingClientRect();
        return new o.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop);
      },
      getWheelDelta: function getWheelDelta(t) {
        var e = 0;
        return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e;
      },
      _skipEvents: {},
      _fakeStop: function _fakeStop(t) {
        o.DomEvent._skipEvents[t.type] = !0;
      },
      _skipped: function _skipped(t) {
        var e = this._skipEvents[t.type];
        return this._skipEvents[t.type] = !1, e;
      },
      _checkMouse: function _checkMouse(t, e) {
        var i = e.relatedTarget;
        if (!i) return !0;

        try {
          for (; i && i !== t;) {
            i = i.parentNode;
          }
        } catch (n) {
          return !1;
        }

        return i !== t;
      },
      _getEvent: function _getEvent() {
        var e = t.event;
        if (!e) for (var i = arguments.callee.caller; i && (e = i.arguments[0], !e || t.Event !== e.constructor);) {
          i = i.caller;
        }
        return e;
      },
      _filterClick: function _filterClick(t, e) {
        var i = t.timeStamp || t.originalEvent.timeStamp,
            n = o.DomEvent._lastClick && i - o.DomEvent._lastClick;
        return n && n > 100 && 1e3 > n || t.target._simulatedClick && !t._simulated ? void o.DomEvent.stop(t) : (o.DomEvent._lastClick = i, e(t));
      }
    }, o.DomEvent.on = o.DomEvent.addListener, o.DomEvent.off = o.DomEvent.removeListener, o.Draggable = o.Class.extend({
      includes: o.Mixin.Events,
      statics: {
        START: o.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
        END: {
          mousedown: "mouseup",
          touchstart: "touchend",
          pointerdown: "touchend",
          MSPointerDown: "touchend"
        },
        MOVE: {
          mousedown: "mousemove",
          touchstart: "touchmove",
          pointerdown: "touchmove",
          MSPointerDown: "touchmove"
        }
      },
      initialize: function initialize(t, e) {
        this._element = t, this._dragStartTarget = e || t;
      },
      enable: function enable() {
        if (!this._enabled) {
          for (var t = o.Draggable.START.length - 1; t >= 0; t--) {
            o.DomEvent.on(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
          }

          this._enabled = !0;
        }
      },
      disable: function disable() {
        if (this._enabled) {
          for (var t = o.Draggable.START.length - 1; t >= 0; t--) {
            o.DomEvent.off(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
          }

          this._enabled = !1, this._moved = !1;
        }
      },
      _onDown: function _onDown(t) {
        if (this._moved = !1, !(t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (o.DomEvent.stopPropagation(t), o.Draggable._disabled || (o.DomUtil.disableImageDrag(), o.DomUtil.disableTextSelection(), this._moving)))) {
          var i = t.touches ? t.touches[0] : t;
          this._startPoint = new o.Point(i.clientX, i.clientY), this._startPos = this._newPos = o.DomUtil.getPosition(this._element), o.DomEvent.on(e, o.Draggable.MOVE[t.type], this._onMove, this).on(e, o.Draggable.END[t.type], this._onUp, this);
        }
      },
      _onMove: function _onMove(t) {
        if (t.touches && t.touches.length > 1) return void (this._moved = !0);
        var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
            n = new o.Point(i.clientX, i.clientY),
            s = n.subtract(this._startPoint);
        (s.x || s.y) && (o.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = o.DomUtil.getPosition(this._element).subtract(s), o.DomUtil.addClass(e.body, "leaflet-dragging"), o.DomUtil.addClass(t.target || t.srcElement, "leaflet-drag-target")), this._newPos = this._startPos.add(s), this._moving = !0, o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget));
      },
      _updatePosition: function _updatePosition() {
        this.fire("predrag"), o.DomUtil.setPosition(this._element, this._newPos), this.fire("drag");
      },
      _onUp: function _onUp(t) {
        o.DomUtil.removeClass(e.body, "leaflet-dragging"), o.DomUtil.removeClass(t.target || t.srcElement, "leaflet-drag-target");

        for (var i in o.Draggable.MOVE) {
          o.DomEvent.off(e, o.Draggable.MOVE[i], this._onMove).off(e, o.Draggable.END[i], this._onUp);
        }

        o.DomUtil.enableImageDrag(), o.DomUtil.enableTextSelection(), this._moved && this._moving && (o.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
          distance: this._newPos.distanceTo(this._startPos)
        })), this._moving = !1;
      }
    }), o.Handler = o.Class.extend({
      initialize: function initialize(t) {
        this._map = t;
      },
      enable: function enable() {
        this._enabled || (this._enabled = !0, this.addHooks());
      },
      disable: function disable() {
        this._enabled && (this._enabled = !1, this.removeHooks());
      },
      enabled: function enabled() {
        return !!this._enabled;
      }
    }), o.Map.mergeOptions({
      dragging: !0,
      inertia: !o.Browser.android23,
      inertiaDeceleration: 3400,
      inertiaMaxSpeed: 1 / 0,
      inertiaThreshold: o.Browser.touch ? 32 : 18,
      easeLinearity: .25,
      worldCopyJump: !1
    }), o.Map.Drag = o.Handler.extend({
      addHooks: function addHooks() {
        if (!this._draggable) {
          var t = this._map;
          this._draggable = new o.Draggable(t._mapPane, t._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset", this._onViewReset, this), t.whenReady(this._onViewReset, this));
        }

        this._draggable.enable();
      },
      removeHooks: function removeHooks() {
        this._draggable.disable();
      },
      moved: function moved() {
        return this._draggable && this._draggable._moved;
      },
      _onDragStart: function _onDragStart() {
        var t = this._map;
        t._panAnim && t._panAnim.stop(), t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
      },
      _onDrag: function _onDrag() {
        if (this._map.options.inertia) {
          var t = this._lastTime = +new Date(),
              e = this._lastPos = this._draggable._newPos;
          this._positions.push(e), this._times.push(t), t - this._times[0] > 200 && (this._positions.shift(), this._times.shift());
        }

        this._map.fire("move").fire("drag");
      },
      _onViewReset: function _onViewReset() {
        var t = this._map.getSize()._divideBy(2),
            e = this._map.latLngToLayerPoint([0, 0]);

        this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.project([0, 180]).x;
      },
      _onPreDrag: function _onPreDrag() {
        var t = this._worldWidth,
            e = Math.round(t / 2),
            i = this._initialWorldOffset,
            n = this._draggable._newPos.x,
            o = (n - e + i) % t + e - i,
            s = (n + e + i) % t - e - i,
            a = Math.abs(o + i) < Math.abs(s + i) ? o : s;
        this._draggable._newPos.x = a;
      },
      _onDragEnd: function _onDragEnd(t) {
        var e = this._map,
            i = e.options,
            n = +new Date() - this._lastTime,
            s = !i.inertia || n > i.inertiaThreshold || !this._positions[0];
        if (e.fire("dragend", t), s) e.fire("moveend");else {
          var a = this._lastPos.subtract(this._positions[0]),
              r = (this._lastTime + n - this._times[0]) / 1e3,
              h = i.easeLinearity,
              l = a.multiplyBy(h / r),
              u = l.distanceTo([0, 0]),
              c = Math.min(i.inertiaMaxSpeed, u),
              d = l.multiplyBy(c / u),
              p = c / (i.inertiaDeceleration * h),
              _ = d.multiplyBy(-p / 2).round();

          _.x && _.y ? (_ = e._limitOffset(_, e.options.maxBounds), o.Util.requestAnimFrame(function () {
            e.panBy(_, {
              duration: p,
              easeLinearity: h,
              noMoveStart: !0
            });
          })) : e.fire("moveend");
        }
      }
    }), o.Map.addInitHook("addHandler", "dragging", o.Map.Drag), o.Map.mergeOptions({
      doubleClickZoom: !0
    }), o.Map.DoubleClickZoom = o.Handler.extend({
      addHooks: function addHooks() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function removeHooks() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function _onDoubleClick(t) {
        var e = this._map,
            i = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);
        "center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i);
      }
    }), o.Map.addInitHook("addHandler", "doubleClickZoom", o.Map.DoubleClickZoom), o.Map.mergeOptions({
      scrollWheelZoom: !0
    }), o.Map.ScrollWheelZoom = o.Handler.extend({
      addHooks: function addHooks() {
        o.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), o.DomEvent.on(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault), this._delta = 0;
      },
      removeHooks: function removeHooks() {
        o.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), o.DomEvent.off(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault);
      },
      _onWheelScroll: function _onWheelScroll(t) {
        var e = o.DomEvent.getWheelDelta(t);
        this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date());
        var i = Math.max(40 - (+new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(o.bind(this._performZoom, this), i), o.DomEvent.preventDefault(t), o.DomEvent.stopPropagation(t);
      },
      _performZoom: function _performZoom() {
        var t = this._map,
            e = this._delta,
            i = t.getZoom();
        e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(i + e) - i, this._delta = 0, this._startTime = null, e && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + e) : t.setZoomAround(this._lastMousePos, i + e));
      }
    }), o.Map.addInitHook("addHandler", "scrollWheelZoom", o.Map.ScrollWheelZoom), o.extend(o.DomEvent, {
      _touchstart: o.Browser.msPointer ? "MSPointerDown" : o.Browser.pointer ? "pointerdown" : "touchstart",
      _touchend: o.Browser.msPointer ? "MSPointerUp" : o.Browser.pointer ? "pointerup" : "touchend",
      addDoubleTapListener: function addDoubleTapListener(t, i, n) {
        function s(t) {
          var e;

          if (o.Browser.pointer ? (_.push(t.pointerId), e = _.length) : e = t.touches.length, !(e > 1)) {
            var i = Date.now(),
                n = i - (r || i);
            h = t.touches ? t.touches[0] : t, l = n > 0 && u >= n, r = i;
          }
        }

        function a(t) {
          if (o.Browser.pointer) {
            var e = _.indexOf(t.pointerId);

            if (-1 === e) return;

            _.splice(e, 1);
          }

          if (l) {
            if (o.Browser.pointer) {
              var n,
                  s = {};

              for (var a in h) {
                n = h[a], s[a] = "function" == typeof n ? n.bind(h) : n;
              }

              h = s;
            }

            h.type = "dblclick", i(h), r = null;
          }
        }

        var r,
            h,
            l = !1,
            u = 250,
            c = "_leaflet_",
            d = this._touchstart,
            p = this._touchend,
            _ = [];
        t[c + d + n] = s, t[c + p + n] = a;
        var m = o.Browser.pointer ? e.documentElement : t;
        return t.addEventListener(d, s, !1), m.addEventListener(p, a, !1), o.Browser.pointer && m.addEventListener(o.DomEvent.POINTER_CANCEL, a, !1), this;
      },
      removeDoubleTapListener: function removeDoubleTapListener(t, i) {
        var n = "_leaflet_";
        return t.removeEventListener(this._touchstart, t[n + this._touchstart + i], !1), (o.Browser.pointer ? e.documentElement : t).removeEventListener(this._touchend, t[n + this._touchend + i], !1), o.Browser.pointer && e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL, t[n + this._touchend + i], !1), this;
      }
    }), o.extend(o.DomEvent, {
      POINTER_DOWN: o.Browser.msPointer ? "MSPointerDown" : "pointerdown",
      POINTER_MOVE: o.Browser.msPointer ? "MSPointerMove" : "pointermove",
      POINTER_UP: o.Browser.msPointer ? "MSPointerUp" : "pointerup",
      POINTER_CANCEL: o.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
      _pointers: [],
      _pointerDocumentListener: !1,
      addPointerListener: function addPointerListener(t, e, i, n) {
        switch (e) {
          case "touchstart":
            return this.addPointerListenerStart(t, e, i, n);

          case "touchend":
            return this.addPointerListenerEnd(t, e, i, n);

          case "touchmove":
            return this.addPointerListenerMove(t, e, i, n);

          default:
            throw "Unknown touch event type";
        }
      },
      addPointerListenerStart: function addPointerListenerStart(t, i, n, s) {
        var a = "_leaflet_",
            r = this._pointers,
            h = function h(t) {
          o.DomEvent.preventDefault(t);

          for (var e = !1, i = 0; i < r.length; i++) {
            if (r[i].pointerId === t.pointerId) {
              e = !0;
              break;
            }
          }

          e || r.push(t), t.touches = r.slice(), t.changedTouches = [t], n(t);
        };

        if (t[a + "touchstart" + s] = h, t.addEventListener(this.POINTER_DOWN, h, !1), !this._pointerDocumentListener) {
          var l = function l(t) {
            for (var e = 0; e < r.length; e++) {
              if (r[e].pointerId === t.pointerId) {
                r.splice(e, 1);
                break;
              }
            }
          };

          e.documentElement.addEventListener(this.POINTER_UP, l, !1), e.documentElement.addEventListener(this.POINTER_CANCEL, l, !1), this._pointerDocumentListener = !0;
        }

        return this;
      },
      addPointerListenerMove: function addPointerListenerMove(t, e, i, n) {
        function o(t) {
          if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
            for (var e = 0; e < a.length; e++) {
              if (a[e].pointerId === t.pointerId) {
                a[e] = t;
                break;
              }
            }

            t.touches = a.slice(), t.changedTouches = [t], i(t);
          }
        }

        var s = "_leaflet_",
            a = this._pointers;
        return t[s + "touchmove" + n] = o, t.addEventListener(this.POINTER_MOVE, o, !1), this;
      },
      addPointerListenerEnd: function addPointerListenerEnd(t, e, i, n) {
        var o = "_leaflet_",
            s = this._pointers,
            a = function a(t) {
          for (var e = 0; e < s.length; e++) {
            if (s[e].pointerId === t.pointerId) {
              s.splice(e, 1);
              break;
            }
          }

          t.touches = s.slice(), t.changedTouches = [t], i(t);
        };

        return t[o + "touchend" + n] = a, t.addEventListener(this.POINTER_UP, a, !1), t.addEventListener(this.POINTER_CANCEL, a, !1), this;
      },
      removePointerListener: function removePointerListener(t, e, i) {
        var n = "_leaflet_",
            o = t[n + e + i];

        switch (e) {
          case "touchstart":
            t.removeEventListener(this.POINTER_DOWN, o, !1);
            break;

          case "touchmove":
            t.removeEventListener(this.POINTER_MOVE, o, !1);
            break;

          case "touchend":
            t.removeEventListener(this.POINTER_UP, o, !1), t.removeEventListener(this.POINTER_CANCEL, o, !1);
        }

        return this;
      }
    }), o.Map.mergeOptions({
      touchZoom: o.Browser.touch && !o.Browser.android23,
      bounceAtZoomLimits: !0
    }), o.Map.TouchZoom = o.Handler.extend({
      addHooks: function addHooks() {
        o.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function removeHooks() {
        o.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function _onTouchStart(t) {
        var i = this._map;

        if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
          var n = i.mouseEventToLayerPoint(t.touches[0]),
              s = i.mouseEventToLayerPoint(t.touches[1]),
              a = i._getCenterLayerPoint();

          this._startCenter = n.add(s)._divideBy(2), this._startDist = n.distanceTo(s), this._moved = !1, this._zooming = !0, this._centerOffset = a.subtract(this._startCenter), i._panAnim && i._panAnim.stop(), o.DomEvent.on(e, "touchmove", this._onTouchMove, this).on(e, "touchend", this._onTouchEnd, this), o.DomEvent.preventDefault(t);
        }
      },
      _onTouchMove: function _onTouchMove(t) {
        var e = this._map;

        if (t.touches && 2 === t.touches.length && this._zooming) {
          var i = e.mouseEventToLayerPoint(t.touches[0]),
              n = e.mouseEventToLayerPoint(t.touches[1]);
          this._scale = i.distanceTo(n) / this._startDist, this._delta = i._add(n)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (e.options.bounceAtZoomLimits || !(e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1)) && (this._moved || (o.DomUtil.addClass(e._mapPane, "leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved = !0), o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), o.DomEvent.preventDefault(t));
        }
      },
      _updateOnMove: function _updateOnMove() {
        var t = this._map,
            e = this._getScaleOrigin(),
            i = t.layerPointToLatLng(e),
            n = t.getScaleZoom(this._scale);

        t._animateZoom(i, n, this._startCenter, this._scale, this._delta);
      },
      _onTouchEnd: function _onTouchEnd() {
        if (!this._moved || !this._zooming) return void (this._zooming = !1);
        var t = this._map;
        this._zooming = !1, o.DomUtil.removeClass(t._mapPane, "leaflet-touching"), o.Util.cancelAnimFrame(this._animRequest), o.DomEvent.off(e, "touchmove", this._onTouchMove).off(e, "touchend", this._onTouchEnd);

        var i = this._getScaleOrigin(),
            n = t.layerPointToLatLng(i),
            s = t.getZoom(),
            a = t.getScaleZoom(this._scale) - s,
            r = a > 0 ? Math.ceil(a) : Math.floor(a),
            h = t._limitZoom(s + r),
            l = t.getZoomScale(h) / this._scale;

        t._animateZoom(n, h, i, l);
      },
      _getScaleOrigin: function _getScaleOrigin() {
        var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);

        return this._startCenter.add(t);
      }
    }), o.Map.addInitHook("addHandler", "touchZoom", o.Map.TouchZoom), o.Map.mergeOptions({
      tap: !0,
      tapTolerance: 15
    }), o.Map.Tap = o.Handler.extend({
      addHooks: function addHooks() {
        o.DomEvent.on(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function removeHooks() {
        o.DomEvent.off(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function _onDown(t) {
        if (t.touches) {
          if (o.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
          var i = t.touches[0],
              n = i.target;
          this._startPos = this._newPos = new o.Point(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.addClass(n, "leaflet-active"), this._holdTimeout = setTimeout(o.bind(function () {
            this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i));
          }, this), 1e3), o.DomEvent.on(e, "touchmove", this._onMove, this).on(e, "touchend", this._onUp, this);
        }
      },
      _onUp: function _onUp(t) {
        if (clearTimeout(this._holdTimeout), o.DomEvent.off(e, "touchmove", this._onMove, this).off(e, "touchend", this._onUp, this), this._fireClick && t && t.changedTouches) {
          var i = t.changedTouches[0],
              n = i.target;
          n && n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.removeClass(n, "leaflet-active"), this._isTapValid() && this._simulateEvent("click", i);
        }
      },
      _isTapValid: function _isTapValid() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _onMove: function _onMove(t) {
        var e = t.touches[0];
        this._newPos = new o.Point(e.clientX, e.clientY);
      },
      _simulateEvent: function _simulateEvent(i, n) {
        var o = e.createEvent("MouseEvents");
        o._simulated = !0, n.target._simulatedClick = !0, o.initMouseEvent(i, !0, !0, t, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(o);
      }
    }), o.Browser.touch && !o.Browser.pointer && o.Map.addInitHook("addHandler", "tap", o.Map.Tap), o.Map.mergeOptions({
      boxZoom: !0
    }), o.Map.BoxZoom = o.Handler.extend({
      initialize: function initialize(t) {
        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._moved = !1;
      },
      addHooks: function addHooks() {
        o.DomEvent.on(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function removeHooks() {
        o.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1;
      },
      moved: function moved() {
        return this._moved;
      },
      _onMouseDown: function _onMouseDown(t) {
        return this._moved = !1, !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (o.DomUtil.disableTextSelection(), o.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), void o.DomEvent.on(e, "mousemove", this._onMouseMove, this).on(e, "mouseup", this._onMouseUp, this).on(e, "keydown", this._onKeyDown, this));
      },
      _onMouseMove: function _onMouseMove(t) {
        this._moved || (this._box = o.DomUtil.create("div", "leaflet-zoom-box", this._pane), o.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));

        var e = this._startLayerPoint,
            i = this._box,
            n = this._map.mouseEventToLayerPoint(t),
            s = n.subtract(e),
            a = new o.Point(Math.min(n.x, e.x), Math.min(n.y, e.y));

        o.DomUtil.setPosition(i, a), this._moved = !0, i.style.width = Math.max(0, Math.abs(s.x) - 4) + "px", i.style.height = Math.max(0, Math.abs(s.y) - 4) + "px";
      },
      _finish: function _finish() {
        this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), o.DomUtil.enableTextSelection(), o.DomUtil.enableImageDrag(), o.DomEvent.off(e, "mousemove", this._onMouseMove).off(e, "mouseup", this._onMouseUp).off(e, "keydown", this._onKeyDown);
      },
      _onMouseUp: function _onMouseUp(t) {
        this._finish();

        var e = this._map,
            i = e.mouseEventToLayerPoint(t);

        if (!this._startLayerPoint.equals(i)) {
          var n = new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(i));
          e.fitBounds(n), e.fire("boxzoomend", {
            boxZoomBounds: n
          });
        }
      },
      _onKeyDown: function _onKeyDown(t) {
        27 === t.keyCode && this._finish();
      }
    }), o.Map.addInitHook("addHandler", "boxZoom", o.Map.BoxZoom), o.Map.mergeOptions({
      keyboard: !0,
      keyboardPanOffset: 80,
      keyboardZoomOffset: 1
    }), o.Map.Keyboard = o.Handler.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 173]
      },
      initialize: function initialize(t) {
        this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset);
      },
      addHooks: function addHooks() {
        var t = this._map._container;
        -1 === t.tabIndex && (t.tabIndex = "0"), o.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this);
      },
      removeHooks: function removeHooks() {
        this._removeHooks();

        var t = this._map._container;
        o.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this);
      },
      _onMouseDown: function _onMouseDown() {
        if (!this._focused) {
          var i = e.body,
              n = e.documentElement,
              o = i.scrollTop || n.scrollTop,
              s = i.scrollLeft || n.scrollLeft;
          this._map._container.focus(), t.scrollTo(s, o);
        }
      },
      _onFocus: function _onFocus() {
        this._focused = !0, this._map.fire("focus");
      },
      _onBlur: function _onBlur() {
        this._focused = !1, this._map.fire("blur");
      },
      _setPanOffset: function _setPanOffset(t) {
        var e,
            i,
            n = this._panKeys = {},
            o = this.keyCodes;

        for (e = 0, i = o.left.length; i > e; e++) {
          n[o.left[e]] = [-1 * t, 0];
        }

        for (e = 0, i = o.right.length; i > e; e++) {
          n[o.right[e]] = [t, 0];
        }

        for (e = 0, i = o.down.length; i > e; e++) {
          n[o.down[e]] = [0, t];
        }

        for (e = 0, i = o.up.length; i > e; e++) {
          n[o.up[e]] = [0, -1 * t];
        }
      },
      _setZoomOffset: function _setZoomOffset(t) {
        var e,
            i,
            n = this._zoomKeys = {},
            o = this.keyCodes;

        for (e = 0, i = o.zoomIn.length; i > e; e++) {
          n[o.zoomIn[e]] = t;
        }

        for (e = 0, i = o.zoomOut.length; i > e; e++) {
          n[o.zoomOut[e]] = -t;
        }
      },
      _addHooks: function _addHooks() {
        o.DomEvent.on(e, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function _removeHooks() {
        o.DomEvent.off(e, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function _onKeyDown(t) {
        var e = t.keyCode,
            i = this._map;

        if (e in this._panKeys) {
          if (i._panAnim && i._panAnim._inProgress) return;
          i.panBy(this._panKeys[e]), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds);
        } else {
          if (!(e in this._zoomKeys)) return;
          i.setZoom(i.getZoom() + this._zoomKeys[e]);
        }

        o.DomEvent.stop(t);
      }
    }), o.Map.addInitHook("addHandler", "keyboard", o.Map.Keyboard), o.Handler.MarkerDrag = o.Handler.extend({
      initialize: function initialize(t) {
        this._marker = t;
      },
      addHooks: function addHooks() {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new o.Draggable(t, t)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), o.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable");
      },
      removeHooks: function removeHooks() {
        this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._draggable.disable(), o.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function moved() {
        return this._draggable && this._draggable._moved;
      },
      _onDragStart: function _onDragStart() {
        this._marker.closePopup().fire("movestart").fire("dragstart");
      },
      _onDrag: function _onDrag() {
        var t = this._marker,
            e = t._shadow,
            i = o.DomUtil.getPosition(t._icon),
            n = t._map.layerPointToLatLng(i);

        e && o.DomUtil.setPosition(e, i), t._latlng = n, t.fire("move", {
          latlng: n
        }).fire("drag");
      },
      _onDragEnd: function _onDragEnd(t) {
        this._marker.fire("moveend").fire("dragend", t);
      }
    }), o.Control = o.Class.extend({
      options: {
        position: "topright"
      },
      initialize: function initialize(t) {
        o.setOptions(this, t);
      },
      getPosition: function getPosition() {
        return this.options.position;
      },
      setPosition: function setPosition(t) {
        var e = this._map;
        return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
      },
      getContainer: function getContainer() {
        return this._container;
      },
      addTo: function addTo(t) {
        this._map = t;
        var e = this._container = this.onAdd(t),
            i = this.getPosition(),
            n = t._controlCorners[i];
        return o.DomUtil.addClass(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this;
      },
      removeFrom: function removeFrom(t) {
        var e = this.getPosition(),
            i = t._controlCorners[e];
        return i.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(t), this;
      },
      _refocusOnMap: function _refocusOnMap() {
        this._map && this._map.getContainer().focus();
      }
    }), o.control = function (t) {
      return new o.Control(t);
    }, o.Map.include({
      addControl: function addControl(t) {
        return t.addTo(this), this;
      },
      removeControl: function removeControl(t) {
        return t.removeFrom(this), this;
      },
      _initControlPos: function _initControlPos() {
        function t(t, s) {
          var a = i + t + " " + i + s;
          e[t + s] = o.DomUtil.create("div", a, n);
        }

        var e = this._controlCorners = {},
            i = "leaflet-",
            n = this._controlContainer = o.DomUtil.create("div", i + "control-container", this._container);
        t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
      },
      _clearControlPos: function _clearControlPos() {
        this._container.removeChild(this._controlContainer);
      }
    }), o.Control.Zoom = o.Control.extend({
      options: {
        position: "topleft",
        zoomInText: "+",
        zoomInTitle: "Zoom in",
        zoomOutText: "-",
        zoomOutTitle: "Zoom out"
      },
      onAdd: function onAdd(t) {
        var e = "leaflet-control-zoom",
            i = o.DomUtil.create("div", e + " leaflet-bar");
        return this._map = t, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + "-in", i, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + "-out", i, this._zoomOut, this), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
      },
      onRemove: function onRemove(t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      _zoomIn: function _zoomIn(t) {
        this._map.zoomIn(t.shiftKey ? 3 : 1);
      },
      _zoomOut: function _zoomOut(t) {
        this._map.zoomOut(t.shiftKey ? 3 : 1);
      },
      _createButton: function _createButton(t, e, i, n, s, a) {
        var r = o.DomUtil.create("a", i, n);
        r.innerHTML = t, r.href = "#", r.title = e;
        var h = o.DomEvent.stopPropagation;
        return o.DomEvent.on(r, "click", h).on(r, "mousedown", h).on(r, "dblclick", h).on(r, "click", o.DomEvent.preventDefault).on(r, "click", s, a).on(r, "click", this._refocusOnMap, a), r;
      },
      _updateDisabled: function _updateDisabled() {
        var t = this._map,
            e = "leaflet-disabled";
        o.DomUtil.removeClass(this._zoomInButton, e), o.DomUtil.removeClass(this._zoomOutButton, e), t._zoom === t.getMinZoom() && o.DomUtil.addClass(this._zoomOutButton, e), t._zoom === t.getMaxZoom() && o.DomUtil.addClass(this._zoomInButton, e);
      }
    }), o.Map.mergeOptions({
      zoomControl: !0
    }), o.Map.addInitHook(function () {
      this.options.zoomControl && (this.zoomControl = new o.Control.Zoom(), this.addControl(this.zoomControl));
    }), o.control.zoom = function (t) {
      return new o.Control.Zoom(t);
    }, o.Control.Attribution = o.Control.extend({
      options: {
        position: "bottomright",
        prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
      },
      initialize: function initialize(t) {
        o.setOptions(this, t), this._attributions = {};
      },
      onAdd: function onAdd(t) {
        this._container = o.DomUtil.create("div", "leaflet-control-attribution"), o.DomEvent.disableClickPropagation(this._container);

        for (var e in t._layers) {
          t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
        }

        return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container;
      },
      onRemove: function onRemove(t) {
        t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove);
      },
      setPrefix: function setPrefix(t) {
        return this.options.prefix = t, this._update(), this;
      },
      addAttribution: function addAttribution(t) {
        return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : void 0;
      },
      removeAttribution: function removeAttribution(t) {
        return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : void 0;
      },
      _update: function _update() {
        if (this._map) {
          var t = [];

          for (var e in this._attributions) {
            this._attributions[e] && t.push(e);
          }

          var i = [];
          this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ");
        }
      },
      _onLayerAdd: function _onLayerAdd(t) {
        t.layer.getAttribution && this.addAttribution(t.layer.getAttribution());
      },
      _onLayerRemove: function _onLayerRemove(t) {
        t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution());
      }
    }), o.Map.mergeOptions({
      attributionControl: !0
    }), o.Map.addInitHook(function () {
      this.options.attributionControl && (this.attributionControl = new o.Control.Attribution().addTo(this));
    }), o.control.attribution = function (t) {
      return new o.Control.Attribution(t);
    }, o.Control.Scale = o.Control.extend({
      options: {
        position: "bottomleft",
        maxWidth: 100,
        metric: !0,
        imperial: !0,
        updateWhenIdle: !1
      },
      onAdd: function onAdd(t) {
        this._map = t;
        var e = "leaflet-control-scale",
            i = o.DomUtil.create("div", e),
            n = this.options;
        return this._addScales(n, e, i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
      },
      onRemove: function onRemove(t) {
        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function _addScales(t, e, i) {
        t.metric && (this._mScale = o.DomUtil.create("div", e + "-line", i)), t.imperial && (this._iScale = o.DomUtil.create("div", e + "-line", i));
      },
      _update: function _update() {
        var t = this._map.getBounds(),
            e = t.getCenter().lat,
            i = 6378137 * Math.PI * Math.cos(e * Math.PI / 180),
            n = i * (t.getNorthEast().lng - t.getSouthWest().lng) / 180,
            o = this._map.getSize(),
            s = this.options,
            a = 0;

        o.x > 0 && (a = n * (s.maxWidth / o.x)), this._updateScales(s, a);
      },
      _updateScales: function _updateScales(t, e) {
        t.metric && e && this._updateMetric(e), t.imperial && e && this._updateImperial(e);
      },
      _updateMetric: function _updateMetric(t) {
        var e = this._getRoundNum(t);

        this._mScale.style.width = this._getScaleWidth(e / t) + "px", this._mScale.innerHTML = 1e3 > e ? e + " m" : e / 1e3 + " km";
      },
      _updateImperial: function _updateImperial(t) {
        var e,
            i,
            n,
            o = 3.2808399 * t,
            s = this._iScale;
        o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), s.style.width = this._getScaleWidth(i / e) + "px", s.innerHTML = i + " mi") : (n = this._getRoundNum(o), s.style.width = this._getScaleWidth(n / o) + "px", s.innerHTML = n + " ft");
      },
      _getScaleWidth: function _getScaleWidth(t) {
        return Math.round(this.options.maxWidth * t) - 10;
      },
      _getRoundNum: function _getRoundNum(t) {
        var e = Math.pow(10, (Math.floor(t) + "").length - 1),
            i = t / e;
        return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i;
      }
    }), o.control.scale = function (t) {
      return new o.Control.Scale(t);
    }, o.Control.Layers = o.Control.extend({
      options: {
        collapsed: !0,
        position: "topright",
        autoZIndex: !0
      },
      initialize: function initialize(t, e, i) {
        o.setOptions(this, i), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;

        for (var n in t) {
          this._addLayer(t[n], n);
        }

        for (n in e) {
          this._addLayer(e[n], n, !0);
        }
      },
      onAdd: function onAdd(t) {
        return this._initLayout(), this._update(), t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container;
      },
      onRemove: function onRemove(t) {
        t.off("layeradd", this._onLayerChange).off("layerremove", this._onLayerChange);
      },
      addBaseLayer: function addBaseLayer(t, e) {
        return this._addLayer(t, e), this._update(), this;
      },
      addOverlay: function addOverlay(t, e) {
        return this._addLayer(t, e, !0), this._update(), this;
      },
      removeLayer: function removeLayer(t) {
        var e = o.stamp(t);
        return delete this._layers[e], this._update(), this;
      },
      _initLayout: function _initLayout() {
        var t = "leaflet-control-layers",
            e = this._container = o.DomUtil.create("div", t);
        e.setAttribute("aria-haspopup", !0), o.Browser.touch ? o.DomEvent.on(e, "click", o.DomEvent.stopPropagation) : o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);
        var i = this._form = o.DomUtil.create("form", t + "-list");

        if (this.options.collapsed) {
          o.Browser.android || o.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
          var n = this._layersLink = o.DomUtil.create("a", t + "-toggle", e);
          n.href = "#", n.title = "Layers", o.Browser.touch ? o.DomEvent.on(n, "click", o.DomEvent.stop).on(n, "click", this._expand, this) : o.DomEvent.on(n, "focus", this._expand, this), o.DomEvent.on(i, "click", function () {
            setTimeout(o.bind(this._onInputClick, this), 0);
          }, this), this._map.on("click", this._collapse, this);
        } else this._expand();

        this._baseLayersList = o.DomUtil.create("div", t + "-base", i), this._separator = o.DomUtil.create("div", t + "-separator", i), this._overlaysList = o.DomUtil.create("div", t + "-overlays", i), e.appendChild(i);
      },
      _addLayer: function _addLayer(t, e, i) {
        var n = o.stamp(t);
        this._layers[n] = {
          layer: t,
          name: e,
          overlay: i
        }, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex));
      },
      _update: function _update() {
        if (this._container) {
          this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
          var t,
              e,
              i = !1,
              n = !1;

          for (t in this._layers) {
            e = this._layers[t], this._addItem(e), n = n || e.overlay, i = i || !e.overlay;
          }

          this._separator.style.display = n && i ? "" : "none";
        }
      },
      _onLayerChange: function _onLayerChange(t) {
        var e = this._layers[o.stamp(t.layer)];

        if (e) {
          this._handlingClick || this._update();
          var i = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ? "baselayerchange" : null;
          i && this._map.fire(i, e);
        }
      },
      _createRadioElement: function _createRadioElement(t, i) {
        var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
        i && (n += ' checked="checked"'), n += "/>";
        var o = e.createElement("div");
        return o.innerHTML = n, o.firstChild;
      },
      _addItem: function _addItem(t) {
        var i,
            n = e.createElement("label"),
            s = this._map.hasLayer(t.layer);

        t.overlay ? (i = e.createElement("input"), i.type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = s) : i = this._createRadioElement("leaflet-base-layers", s), i.layerId = o.stamp(t.layer), o.DomEvent.on(i, "click", this._onInputClick, this);
        var a = e.createElement("span");
        a.innerHTML = " " + t.name, n.appendChild(i), n.appendChild(a);
        var r = t.overlay ? this._overlaysList : this._baseLayersList;
        return r.appendChild(n), n;
      },
      _onInputClick: function _onInputClick() {
        var t,
            e,
            i,
            n = this._form.getElementsByTagName("input"),
            o = n.length;

        for (this._handlingClick = !0, t = 0; o > t; t++) {
          e = n[t], i = this._layers[e.layerId], e.checked && !this._map.hasLayer(i.layer) ? this._map.addLayer(i.layer) : !e.checked && this._map.hasLayer(i.layer) && this._map.removeLayer(i.layer);
        }

        this._handlingClick = !1, this._refocusOnMap();
      },
      _expand: function _expand() {
        o.DomUtil.addClass(this._container, "leaflet-control-layers-expanded");
      },
      _collapse: function _collapse() {
        this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "");
      }
    }), o.control.layers = function (t, e, i) {
      return new o.Control.Layers(t, e, i);
    }, o.PosAnimation = o.Class.extend({
      includes: o.Mixin.Events,
      run: function run(t, e, i, n) {
        this.stop(), this._el = t, this._inProgress = !0, this._newPos = e, this.fire("start"), t.style[o.DomUtil.TRANSITION] = "all " + (i || .25) + "s cubic-bezier(0,0," + (n || .5) + ",1)", o.DomEvent.on(t, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), o.DomUtil.setPosition(t, e), o.Util.falseFn(t.offsetWidth), this._stepTimer = setInterval(o.bind(this._onStep, this), 50);
      },
      stop: function stop() {
        this._inProgress && (o.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), o.Util.falseFn(this._el.offsetWidth));
      },
      _onStep: function _onStep() {
        var t = this._getPos();

        return t ? (this._el._leaflet_pos = t, void this.fire("step")) : void this._onTransitionEnd();
      },
      _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
      _getPos: function _getPos() {
        var e,
            i,
            n,
            s = this._el,
            a = t.getComputedStyle(s);

        if (o.Browser.any3d) {
          if (n = a[o.DomUtil.TRANSFORM].match(this._transformRe), !n) return;
          e = parseFloat(n[1]), i = parseFloat(n[2]);
        } else e = parseFloat(a.left), i = parseFloat(a.top);

        return new o.Point(e, i, !0);
      },
      _onTransitionEnd: function _onTransitionEnd() {
        o.DomEvent.off(this._el, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[o.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"));
      }
    }), o.Map.include({
      setView: function setView(t, e, n) {
        if (e = e === i ? this._zoom : this._limitZoom(e), t = this._limitCenter(o.latLng(t), e, this.options.maxBounds), n = n || {}, this._panAnim && this._panAnim.stop(), this._loaded && !n.reset && n !== !0) {
          n.animate !== i && (n.zoom = o.extend({
            animate: n.animate
          }, n.zoom), n.pan = o.extend({
            animate: n.animate
          }, n.pan));
          var s = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan);
          if (s) return clearTimeout(this._sizeTimer), this;
        }

        return this._resetView(t, e), this;
      },
      panBy: function panBy(t, e) {
        if (t = o.point(t).round(), e = e || {}, !t.x && !t.y) return this;

        if (this._panAnim || (this._panAnim = new o.PosAnimation(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
          o.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");

          var i = this._getMapPanePos().subtract(t);

          this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity);
        } else this._rawPanBy(t), this.fire("move").fire("moveend");

        return this;
      },
      _onPanTransitionStep: function _onPanTransitionStep() {
        this.fire("move");
      },
      _onPanTransitionEnd: function _onPanTransitionEnd() {
        o.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function _tryAnimatedPan(t, e) {
        var i = this._getCenterOffset(t)._floor();

        return (e && e.animate) === !0 || this.getSize().contains(i) ? (this.panBy(i, e), !0) : !1;
      }
    }), o.PosAnimation = o.DomUtil.TRANSITION ? o.PosAnimation : o.PosAnimation.extend({
      run: function run(t, e, i, n) {
        this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = o.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
      },
      stop: function stop() {
        this._inProgress && (this._step(), this._complete());
      },
      _animate: function _animate() {
        this._animId = o.Util.requestAnimFrame(this._animate, this), this._step();
      },
      _step: function _step() {
        var t = +new Date() - this._startTime,
            e = 1e3 * this._duration;
        e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete());
      },
      _runFrame: function _runFrame(t) {
        var e = this._startPos.add(this._offset.multiplyBy(t));

        o.DomUtil.setPosition(this._el, e), this.fire("step");
      },
      _complete: function _complete() {
        o.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function _easeOut(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      }
    }), o.Map.mergeOptions({
      zoomAnimation: !0,
      zoomAnimationThreshold: 4
    }), o.DomUtil.TRANSITION && o.Map.addInitHook(function () {
      this._zoomAnimated = this.options.zoomAnimation && o.DomUtil.TRANSITION && o.Browser.any3d && !o.Browser.android23 && !o.Browser.mobileOpera, this._zoomAnimated && o.DomEvent.on(this._mapPane, o.DomUtil.TRANSITION_END, this._catchTransitionEnd, this);
    }), o.Map.include(o.DomUtil.TRANSITION ? {
      _catchTransitionEnd: function _catchTransitionEnd(t) {
        this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function _nothingToAnimate() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      },
      _tryAnimatedZoom: function _tryAnimatedZoom(t, e, i) {
        if (this._animatingZoom) return !0;
        if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;

        var n = this.getZoomScale(e),
            o = this._getCenterOffset(t)._divideBy(1 - 1 / n),
            s = this._getCenterLayerPoint()._add(o);

        return i.animate === !0 || this.getSize().contains(o) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(t, e, s, n, null, !0), !0) : !1;
      },
      _animateZoom: function _animateZoom(t, e, i, n, s, a) {
        this._animatingZoom = !0, o.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = t, this._animateToZoom = e, o.Draggable && (o.Draggable._disabled = !0), this.fire("zoomanim", {
          center: t,
          zoom: e,
          origin: i,
          scale: n,
          delta: s,
          backwards: a
        });
      },
      _onZoomTransitionEnd: function _onZoomTransitionEnd() {
        this._animatingZoom = !1, o.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), o.Draggable && (o.Draggable._disabled = !1);
      }
    } : {}), o.TileLayer.include({
      _animateZoom: function _animateZoom(t) {
        this._animating || (this._animating = !0, this._prepareBgBuffer());
        var e = this._bgBuffer,
            i = o.DomUtil.TRANSFORM,
            n = t.delta ? o.DomUtil.getTranslateString(t.delta) : e.style[i],
            s = o.DomUtil.getScaleString(t.scale, t.origin);
        e.style[i] = t.backwards ? s + " " + n : n + " " + s;
      },
      _endZoomAnim: function _endZoomAnim() {
        var t = this._tileContainer,
            e = this._bgBuffer;
        t.style.visibility = "", t.parentNode.appendChild(t), o.Util.falseFn(e.offsetWidth), this._animating = !1;
      },
      _clearBgBuffer: function _clearBgBuffer() {
        var t = this._map;
        !t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[o.DomUtil.TRANSFORM] = "");
      },
      _prepareBgBuffer: function _prepareBgBuffer() {
        var t = this._tileContainer,
            e = this._bgBuffer,
            i = this._getLoadedTilesPercentage(e),
            n = this._getLoadedTilesPercentage(t);

        return e && i > .5 && .5 > n ? (t.style.visibility = "hidden", void this._stopLoadingImages(t)) : (e.style.visibility = "hidden", e.style[o.DomUtil.TRANSFORM] = "", this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(e), void clearTimeout(this._clearBgBufferTimer));
      },
      _getLoadedTilesPercentage: function _getLoadedTilesPercentage(t) {
        var e,
            i,
            n = t.getElementsByTagName("img"),
            o = 0;

        for (e = 0, i = n.length; i > e; e++) {
          n[e].complete && o++;
        }

        return o / i;
      },
      _stopLoadingImages: function _stopLoadingImages(t) {
        var e,
            i,
            n,
            s = Array.prototype.slice.call(t.getElementsByTagName("img"));

        for (e = 0, i = s.length; i > e; e++) {
          n = s[e], n.complete || (n.onload = o.Util.falseFn, n.onerror = o.Util.falseFn, n.src = o.Util.emptyImageUrl, n.parentNode.removeChild(n));
        }
      }
    }), o.Map.include({
      _defaultLocateOptions: {
        watch: !1,
        setView: !1,
        maxZoom: 1 / 0,
        timeout: 1e4,
        maximumAge: 0,
        enableHighAccuracy: !1
      },
      locate: function locate(t) {
        if (t = this._locateOptions = o.extend(this._defaultLocateOptions, t), !navigator.geolocation) return this._handleGeolocationError({
          code: 0,
          message: "Geolocation not supported."
        }), this;
        var e = o.bind(this._handleGeolocationResponse, this),
            i = o.bind(this._handleGeolocationError, this);
        return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this;
      },
      stopLocate: function stopLocate() {
        return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
      },
      _handleGeolocationError: function _handleGeolocationError(t) {
        var e = t.code,
            i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
        this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
          code: e,
          message: "Geolocation error: " + i + "."
        });
      },
      _handleGeolocationResponse: function _handleGeolocationResponse(t) {
        var e = t.coords.latitude,
            i = t.coords.longitude,
            n = new o.LatLng(e, i),
            s = 180 * t.coords.accuracy / 40075017,
            a = s / Math.cos(o.LatLng.DEG_TO_RAD * e),
            r = o.latLngBounds([e - s, i - a], [e + s, i + a]),
            h = this._locateOptions;

        if (h.setView) {
          var l = Math.min(this.getBoundsZoom(r), h.maxZoom);
          this.setView(n, l);
        }

        var u = {
          latlng: n,
          bounds: r,
          timestamp: t.timestamp
        };

        for (var c in t.coords) {
          "number" == typeof t.coords[c] && (u[c] = t.coords[c]);
        }

        this.fire("locationfound", u);
      }
    });
  }(window, document);
};

/***/ }),

/***/ "./app/javascript/leaflet.markercluster.js":
/*!*************************************************!*\
  !*** ./app/javascript/leaflet.markercluster.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 Leaflet.markercluster, Provides Beautiful Animated Marker Clustering functionality for Leaflet, a JS library for interactive maps.
 https://github.com/Leaflet/Leaflet.markercluster
 (c) 2012-2013, Dave Leaver, smartrak
*/
window.onload = function (event) {
  __webpack_require__(/*! leaflet-src */ "./app/javascript/leaflet-src.js");

  !function (t, e) {
    L.MarkerClusterGroup = L.FeatureGroup.extend({
      options: {
        maxClusterRadius: 80,
        iconCreateFunction: null,
        spiderfyOnMaxZoom: !0,
        showCoverageOnHover: !0,
        zoomToBoundsOnClick: !0,
        singleMarkerMode: !1,
        disableClusteringAtZoom: null,
        removeOutsideVisibleBounds: !0,
        animateAddingMarkers: !1,
        spiderfyDistanceMultiplier: 1,
        chunkedLoading: !1,
        chunkInterval: 200,
        chunkDelay: 50,
        chunkProgress: null,
        polygonOptions: {}
      },
      initialize: function initialize(t) {
        L.Util.setOptions(this, t), this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction), this._featureGroup = L.featureGroup(), this._featureGroup.on(L.FeatureGroup.EVENTS, this._propagateEvent, this), this._nonPointGroup = L.featureGroup(), this._nonPointGroup.on(L.FeatureGroup.EVENTS, this._propagateEvent, this), this._inZoomAnimation = 0, this._needsClustering = [], this._needsRemoving = [], this._currentShownBounds = null, this._queue = [];
      },
      addLayer: function addLayer(t) {
        if (t instanceof L.LayerGroup) {
          var e = [];

          for (var i in t._layers) {
            e.push(t._layers[i]);
          }

          return this.addLayers(e);
        }

        if (!t.getLatLng) return this._nonPointGroup.addLayer(t), this;
        if (!this._map) return this._needsClustering.push(t), this;
        if (this.hasLayer(t)) return this;
        this._unspiderfy && this._unspiderfy(), this._addLayer(t, this._maxZoom);

        var n = t,
            s = this._map.getZoom();

        if (t.__parent) for (; n.__parent._zoom >= s;) {
          n = n.__parent;
        }
        return this._currentShownBounds.contains(n.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(t, n) : this._animationAddLayerNonAnimated(t, n)), this;
      },
      removeLayer: function removeLayer(t) {
        if (t instanceof L.LayerGroup) {
          var e = [];

          for (var i in t._layers) {
            e.push(t._layers[i]);
          }

          return this.removeLayers(e);
        }

        return t.getLatLng ? this._map ? t.__parent ? (this._unspiderfy && (this._unspiderfy(), this._unspiderfyLayer(t)), this._removeLayer(t, !0), this._featureGroup.hasLayer(t) && (this._featureGroup.removeLayer(t), t.setOpacity && t.setOpacity(1)), this) : this : (!this._arraySplice(this._needsClustering, t) && this.hasLayer(t) && this._needsRemoving.push(t), this) : (this._nonPointGroup.removeLayer(t), this);
      },
      addLayers: function addLayers(t) {
        var e,
            i,
            n,
            s,
            r = this._featureGroup,
            o = this._nonPointGroup,
            a = this.options.chunkedLoading,
            h = this.options.chunkInterval,
            _ = this.options.chunkProgress;

        if (this._map) {
          var u = 0,
              l = new Date().getTime(),
              d = L.bind(function () {
            for (var e = new Date().getTime(); u < t.length; u++) {
              if (a && 0 === u % 200) {
                var i = new Date().getTime() - e;
                if (i > h) break;
              }

              if (s = t[u], s.getLatLng) {
                if (!this.hasLayer(s) && (this._addLayer(s, this._maxZoom), s.__parent && 2 === s.__parent.getChildCount())) {
                  var n = s.__parent.getAllChildMarkers(),
                      p = n[0] === s ? n[1] : n[0];

                  r.removeLayer(p);
                }
              } else o.addLayer(s);
            }

            _ && _(u, t.length, new Date().getTime() - l), u === t.length ? (this._featureGroup.eachLayer(function (t) {
              t instanceof L.MarkerCluster && t._iconNeedsUpdate && t._updateIcon();
            }), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(d, this.options.chunkDelay);
          }, this);
          d();
        } else {
          for (e = [], i = 0, n = t.length; n > i; i++) {
            s = t[i], s.getLatLng ? this.hasLayer(s) || e.push(s) : o.addLayer(s);
          }

          this._needsClustering = this._needsClustering.concat(e);
        }

        return this;
      },
      removeLayers: function removeLayers(t) {
        var e,
            i,
            n,
            s = this._featureGroup,
            r = this._nonPointGroup;

        if (!this._map) {
          for (e = 0, i = t.length; i > e; e++) {
            n = t[e], this._arraySplice(this._needsClustering, n), r.removeLayer(n);
          }

          return this;
        }

        for (e = 0, i = t.length; i > e; e++) {
          n = t[e], n.__parent ? (this._removeLayer(n, !0, !0), s.hasLayer(n) && (s.removeLayer(n), n.setOpacity && n.setOpacity(1))) : r.removeLayer(n);
        }

        return this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds), s.eachLayer(function (t) {
          t instanceof L.MarkerCluster && t._updateIcon();
        }), this;
      },
      clearLayers: function clearLayers() {
        return this._map || (this._needsClustering = [], delete this._gridClusters, delete this._gridUnclustered), this._noanimationUnspiderfy && this._noanimationUnspiderfy(), this._featureGroup.clearLayers(), this._nonPointGroup.clearLayers(), this.eachLayer(function (t) {
          delete t.__parent;
        }), this._map && this._generateInitialClusters(), this;
      },
      getBounds: function getBounds() {
        var t = new L.LatLngBounds();
        this._topClusterLevel && t.extend(this._topClusterLevel._bounds);

        for (var e = this._needsClustering.length - 1; e >= 0; e--) {
          t.extend(this._needsClustering[e].getLatLng());
        }

        return t.extend(this._nonPointGroup.getBounds()), t;
      },
      eachLayer: function eachLayer(t, e) {
        var i,
            n = this._needsClustering.slice();

        for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(n), i = n.length - 1; i >= 0; i--) {
          t.call(e, n[i]);
        }

        this._nonPointGroup.eachLayer(t, e);
      },
      getLayers: function getLayers() {
        var t = [];
        return this.eachLayer(function (e) {
          t.push(e);
        }), t;
      },
      getLayer: function getLayer(t) {
        var e = null;
        return this.eachLayer(function (i) {
          L.stamp(i) === t && (e = i);
        }), e;
      },
      hasLayer: function hasLayer(t) {
        if (!t) return !1;
        var e,
            i = this._needsClustering;

        for (e = i.length - 1; e >= 0; e--) {
          if (i[e] === t) return !0;
        }

        for (i = this._needsRemoving, e = i.length - 1; e >= 0; e--) {
          if (i[e] === t) return !1;
        }

        return !(!t.__parent || t.__parent._group !== this) || this._nonPointGroup.hasLayer(t);
      },
      zoomToShowLayer: function zoomToShowLayer(t, e) {
        var i = function i() {
          if ((t._icon || t.__parent._icon) && !this._inZoomAnimation) if (this._map.off("moveend", i, this), this.off("animationend", i, this), t._icon) e();else if (t.__parent._icon) {
            var n = function n() {
              this.off("spiderfied", n, this), e();
            };

            this.on("spiderfied", n, this), t.__parent.spiderfy();
          }
        };

        if (t._icon && this._map.getBounds().contains(t.getLatLng())) e();else if (t.__parent._zoom < this._map.getZoom()) this._map.on("moveend", i, this), this._map.panTo(t.getLatLng());else {
          var _n = function n() {
            this._map.off("movestart", _n, this), _n = null;
          };

          this._map.on("movestart", _n, this), this._map.on("moveend", i, this), this.on("animationend", i, this), t.__parent.zoomToBounds(), _n && i.call(this);
        }
      },
      onAdd: function onAdd(t) {
        this._map = t;
        var e, i, n;
        if (!isFinite(this._map.getMaxZoom())) throw "Map has no maxZoom specified";

        for (this._featureGroup.onAdd(t), this._nonPointGroup.onAdd(t), this._gridClusters || this._generateInitialClusters(), e = 0, i = this._needsRemoving.length; i > e; e++) {
          n = this._needsRemoving[e], this._removeLayer(n, !0);
        }

        this._needsRemoving = [], this._zoom = this._map.getZoom(), this._currentShownBounds = this._getExpandedVisibleBounds(), this._map.on("zoomend", this._zoomEnd, this), this._map.on("moveend", this._moveEnd, this), this._spiderfierOnAdd && this._spiderfierOnAdd(), this._bindEvents(), i = this._needsClustering, this._needsClustering = [], this.addLayers(i);
      },
      onRemove: function onRemove(t) {
        t.off("zoomend", this._zoomEnd, this), t.off("moveend", this._moveEnd, this), this._unbindEvents(), this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""), this._spiderfierOnRemove && this._spiderfierOnRemove(), this._hideCoverage(), this._featureGroup.onRemove(t), this._nonPointGroup.onRemove(t), this._featureGroup.clearLayers(), this._map = null;
      },
      getVisibleParent: function getVisibleParent(t) {
        for (var e = t; e && !e._icon;) {
          e = e.__parent;
        }

        return e || null;
      },
      _arraySplice: function _arraySplice(t, e) {
        for (var i = t.length - 1; i >= 0; i--) {
          if (t[i] === e) return t.splice(i, 1), !0;
        }
      },
      _removeLayer: function _removeLayer(t, e, i) {
        var n = this._gridClusters,
            s = this._gridUnclustered,
            r = this._featureGroup,
            o = this._map;
        if (e) for (var a = this._maxZoom; a >= 0 && s[a].removeObject(t, o.project(t.getLatLng(), a)); a--) {
          ;
        }
        var h,
            _ = t.__parent,
            u = _._markers;

        for (this._arraySplice(u, t); _ && (_._childCount--, !(_._zoom < 0));) {
          e && _._childCount <= 1 ? (h = _._markers[0] === t ? _._markers[1] : _._markers[0], n[_._zoom].removeObject(_, o.project(_._cLatLng, _._zoom)), s[_._zoom].addObject(h, o.project(h.getLatLng(), _._zoom)), this._arraySplice(_.__parent._childClusters, _), _.__parent._markers.push(h), h.__parent = _.__parent, _._icon && (r.removeLayer(_), i || r.addLayer(h))) : (_._recalculateBounds(), i && _._icon || _._updateIcon()), _ = _.__parent;
        }

        delete t.__parent;
      },
      _isOrIsParent: function _isOrIsParent(t, e) {
        for (; e;) {
          if (t === e) return !0;
          e = e.parentNode;
        }

        return !1;
      },
      _propagateEvent: function _propagateEvent(t) {
        if (t.layer instanceof L.MarkerCluster) {
          if (t.originalEvent && this._isOrIsParent(t.layer._icon, t.originalEvent.relatedTarget)) return;
          t.type = "cluster" + t.type;
        }

        this.fire(t.type, t);
      },
      _defaultIconCreateFunction: function _defaultIconCreateFunction(t) {
        var e = t.getChildCount(),
            i = " marker-cluster-";
        return i += 10 > e ? "small" : 100 > e ? "medium" : "large", new L.DivIcon({
          html: "<div><span>" + e + "</span></div>",
          className: "marker-cluster" + i,
          iconSize: new L.Point(40, 40)
        });
      },
      _bindEvents: function _bindEvents() {
        var t = this._map,
            e = this.options.spiderfyOnMaxZoom,
            i = this.options.showCoverageOnHover,
            n = this.options.zoomToBoundsOnClick;
        (e || n) && this.on("clusterclick", this._zoomOrSpiderfy, this), i && (this.on("clustermouseover", this._showCoverage, this), this.on("clustermouseout", this._hideCoverage, this), t.on("zoomend", this._hideCoverage, this));
      },
      _zoomOrSpiderfy: function _zoomOrSpiderfy(t) {
        var e = this._map;
        e.getMaxZoom() === e.getZoom() ? this.options.spiderfyOnMaxZoom && t.layer.spiderfy() : this.options.zoomToBoundsOnClick && t.layer.zoomToBounds(), t.originalEvent && 13 === t.originalEvent.keyCode && e._container.focus();
      },
      _showCoverage: function _showCoverage(t) {
        var e = this._map;
        this._inZoomAnimation || (this._shownPolygon && e.removeLayer(this._shownPolygon), t.layer.getChildCount() > 2 && t.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(t.layer.getConvexHull(), this.options.polygonOptions), e.addLayer(this._shownPolygon)));
      },
      _hideCoverage: function _hideCoverage() {
        this._shownPolygon && (this._map.removeLayer(this._shownPolygon), this._shownPolygon = null);
      },
      _unbindEvents: function _unbindEvents() {
        var t = this.options.spiderfyOnMaxZoom,
            e = this.options.showCoverageOnHover,
            i = this.options.zoomToBoundsOnClick,
            n = this._map;
        (t || i) && this.off("clusterclick", this._zoomOrSpiderfy, this), e && (this.off("clustermouseover", this._showCoverage, this), this.off("clustermouseout", this._hideCoverage, this), n.off("zoomend", this._hideCoverage, this));
      },
      _zoomEnd: function _zoomEnd() {
        this._map && (this._mergeSplitClusters(), this._zoom = this._map._zoom, this._currentShownBounds = this._getExpandedVisibleBounds());
      },
      _moveEnd: function _moveEnd() {
        if (!this._inZoomAnimation) {
          var t = this._getExpandedVisibleBounds();

          this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, this._zoom, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._map._zoom, t), this._currentShownBounds = t;
        }
      },
      _generateInitialClusters: function _generateInitialClusters() {
        var t = this._map.getMaxZoom(),
            e = this.options.maxClusterRadius,
            i = e;

        "function" != typeof e && (i = function i() {
          return e;
        }), this.options.disableClusteringAtZoom && (t = this.options.disableClusteringAtZoom - 1), this._maxZoom = t, this._gridClusters = {}, this._gridUnclustered = {};

        for (var n = t; n >= 0; n--) {
          this._gridClusters[n] = new L.DistanceGrid(i(n)), this._gridUnclustered[n] = new L.DistanceGrid(i(n));
        }

        this._topClusterLevel = new L.MarkerCluster(this, -1);
      },
      _addLayer: function _addLayer(t, e) {
        var i,
            n,
            s = this._gridClusters,
            r = this._gridUnclustered;

        for (this.options.singleMarkerMode && (t.options.icon = this.options.iconCreateFunction({
          getChildCount: function getChildCount() {
            return 1;
          },
          getAllChildMarkers: function getAllChildMarkers() {
            return [t];
          }
        })); e >= 0; e--) {
          i = this._map.project(t.getLatLng(), e);
          var o = s[e].getNearObject(i);
          if (o) return o._addChild(t), t.__parent = o, void 0;

          if (o = r[e].getNearObject(i)) {
            var a = o.__parent;
            a && this._removeLayer(o, !1);
            var h = new L.MarkerCluster(this, e, o, t);
            s[e].addObject(h, this._map.project(h._cLatLng, e)), o.__parent = h, t.__parent = h;
            var _ = h;

            for (n = e - 1; n > a._zoom; n--) {
              _ = new L.MarkerCluster(this, n, _), s[n].addObject(_, this._map.project(o.getLatLng(), n));
            }

            for (a._addChild(_), n = e; n >= 0 && r[n].removeObject(o, this._map.project(o.getLatLng(), n)); n--) {
              ;
            }

            return;
          }

          r[e].addObject(t, i);
        }

        this._topClusterLevel._addChild(t), t.__parent = this._topClusterLevel;
      },
      _enqueue: function _enqueue(t) {
        this._queue.push(t), this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300));
      },
      _processQueue: function _processQueue() {
        for (var t = 0; t < this._queue.length; t++) {
          this._queue[t].call(this);
        }

        this._queue.length = 0, clearTimeout(this._queueTimeout), this._queueTimeout = null;
      },
      _mergeSplitClusters: function _mergeSplitClusters() {
        this._processQueue(), this._zoom < this._map._zoom && this._currentShownBounds.intersects(this._getExpandedVisibleBounds()) ? (this._animationStart(), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, this._zoom, this._getExpandedVisibleBounds()), this._animationZoomIn(this._zoom, this._map._zoom)) : this._zoom > this._map._zoom ? (this._animationStart(), this._animationZoomOut(this._zoom, this._map._zoom)) : this._moveEnd();
      },
      _getExpandedVisibleBounds: function _getExpandedVisibleBounds() {
        if (!this.options.removeOutsideVisibleBounds) return this.getBounds();
        var t = this._map,
            e = t.getBounds(),
            i = e._southWest,
            n = e._northEast,
            s = L.Browser.mobile ? 0 : Math.abs(i.lat - n.lat),
            r = L.Browser.mobile ? 0 : Math.abs(i.lng - n.lng);
        return new L.LatLngBounds(new L.LatLng(i.lat - s, i.lng - r, !0), new L.LatLng(n.lat + s, n.lng + r, !0));
      },
      _animationAddLayerNonAnimated: function _animationAddLayerNonAnimated(t, e) {
        if (e === t) this._featureGroup.addLayer(t);else if (2 === e._childCount) {
          e._addToMap();

          var i = e.getAllChildMarkers();
          this._featureGroup.removeLayer(i[0]), this._featureGroup.removeLayer(i[1]);
        } else e._updateIcon();
      }
    }), L.MarkerClusterGroup.include(L.DomUtil.TRANSITION ? {
      _animationStart: function _animationStart() {
        this._map._mapPane.className += " leaflet-cluster-anim", this._inZoomAnimation++;
      },
      _animationEnd: function _animationEnd() {
        this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")), this._inZoomAnimation--, this.fire("animationend");
      },
      _animationZoomIn: function _animationZoomIn(t, e) {
        var i,
            n = this._getExpandedVisibleBounds(),
            s = this._featureGroup;

        this._topClusterLevel._recursively(n, t, 0, function (r) {
          var o,
              a = r._latlng,
              h = r._markers;

          for (n.contains(a) || (a = null), r._isSingleParent() && t + 1 === e ? (s.removeLayer(r), r._recursivelyAddChildrenToMap(null, e, n)) : (r.setOpacity(0), r._recursivelyAddChildrenToMap(a, e, n)), i = h.length - 1; i >= 0; i--) {
            o = h[i], n.contains(o._latlng) || s.removeLayer(o);
          }
        }), this._forceLayout(), this._topClusterLevel._recursivelyBecomeVisible(n, e), s.eachLayer(function (t) {
          t instanceof L.MarkerCluster || !t._icon || t.setOpacity(1);
        }), this._topClusterLevel._recursively(n, t, e, function (t) {
          t._recursivelyRestoreChildPositions(e);
        }), this._enqueue(function () {
          this._topClusterLevel._recursively(n, t, 0, function (t) {
            s.removeLayer(t), t.setOpacity(1);
          }), this._animationEnd();
        });
      },
      _animationZoomOut: function _animationZoomOut(t, e) {
        this._animationZoomOutSingle(this._topClusterLevel, t - 1, e), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, t, this._getExpandedVisibleBounds());
      },
      _animationZoomOutSingle: function _animationZoomOutSingle(t, e, i) {
        var n = this._getExpandedVisibleBounds();

        t._recursivelyAnimateChildrenInAndAddSelfToMap(n, e + 1, i);

        var s = this;
        this._forceLayout(), t._recursivelyBecomeVisible(n, i), this._enqueue(function () {
          if (1 === t._childCount) {
            var r = t._markers[0];
            r.setLatLng(r.getLatLng()), r.setOpacity && r.setOpacity(1);
          } else t._recursively(n, i, 0, function (t) {
            t._recursivelyRemoveChildrenFromMap(n, e + 1);
          });

          s._animationEnd();
        });
      },
      _animationAddLayer: function _animationAddLayer(t, e) {
        var i = this,
            n = this._featureGroup;
        n.addLayer(t), e !== t && (e._childCount > 2 ? (e._updateIcon(), this._forceLayout(), this._animationStart(), t._setPos(this._map.latLngToLayerPoint(e.getLatLng())), t.setOpacity(0), this._enqueue(function () {
          n.removeLayer(t), t.setOpacity(1), i._animationEnd();
        })) : (this._forceLayout(), i._animationStart(), i._animationZoomOutSingle(e, this._map.getMaxZoom(), this._map.getZoom())));
      },
      _forceLayout: function _forceLayout() {
        L.Util.falseFn(e.body.offsetWidth);
      }
    } : {
      _animationStart: function _animationStart() {},
      _animationZoomIn: function _animationZoomIn(t, e) {
        this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this.fire("animationend");
      },
      _animationZoomOut: function _animationZoomOut(t, e) {
        this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this.fire("animationend");
      },
      _animationAddLayer: function _animationAddLayer(t, e) {
        this._animationAddLayerNonAnimated(t, e);
      }
    }), L.markerClusterGroup = function (t) {
      return new L.MarkerClusterGroup(t);
    }, L.MarkerCluster = L.Marker.extend({
      initialize: function initialize(t, e, i, n) {
        L.Marker.prototype.initialize.call(this, i ? i._cLatLng || i.getLatLng() : new L.LatLng(0, 0), {
          icon: this
        }), this._group = t, this._zoom = e, this._markers = [], this._childClusters = [], this._childCount = 0, this._iconNeedsUpdate = !0, this._bounds = new L.LatLngBounds(), i && this._addChild(i), n && this._addChild(n);
      },
      getAllChildMarkers: function getAllChildMarkers(t) {
        t = t || [];

        for (var e = this._childClusters.length - 1; e >= 0; e--) {
          this._childClusters[e].getAllChildMarkers(t);
        }

        for (var i = this._markers.length - 1; i >= 0; i--) {
          t.push(this._markers[i]);
        }

        return t;
      },
      getChildCount: function getChildCount() {
        return this._childCount;
      },
      zoomToBounds: function zoomToBounds() {
        for (var t, e = this._childClusters.slice(), i = this._group._map, n = i.getBoundsZoom(this._bounds), s = this._zoom + 1, r = i.getZoom(); e.length > 0 && n > s;) {
          s++;
          var o = [];

          for (t = 0; t < e.length; t++) {
            o = o.concat(e[t]._childClusters);
          }

          e = o;
        }

        n > s ? this._group._map.setView(this._latlng, s) : r >= n ? this._group._map.setView(this._latlng, r + 1) : this._group._map.fitBounds(this._bounds);
      },
      getBounds: function getBounds() {
        var t = new L.LatLngBounds();
        return t.extend(this._bounds), t;
      },
      _updateIcon: function _updateIcon() {
        this._iconNeedsUpdate = !0, this._icon && this.setIcon(this);
      },
      createIcon: function createIcon() {
        return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this), this._iconNeedsUpdate = !1), this._iconObj.createIcon();
      },
      createShadow: function createShadow() {
        return this._iconObj.createShadow();
      },
      _addChild: function _addChild(t, e) {
        this._iconNeedsUpdate = !0, this._expandBounds(t), t instanceof L.MarkerCluster ? (e || (this._childClusters.push(t), t.__parent = this), this._childCount += t._childCount) : (e || this._markers.push(t), this._childCount++), this.__parent && this.__parent._addChild(t, !0);
      },
      _expandBounds: function _expandBounds(t) {
        var e,
            i = t._wLatLng || t._latlng;
        t instanceof L.MarkerCluster ? (this._bounds.extend(t._bounds), e = t._childCount) : (this._bounds.extend(i), e = 1), this._cLatLng || (this._cLatLng = t._cLatLng || i);
        var n = this._childCount + e;
        this._wLatLng ? (this._wLatLng.lat = (i.lat * e + this._wLatLng.lat * this._childCount) / n, this._wLatLng.lng = (i.lng * e + this._wLatLng.lng * this._childCount) / n) : this._latlng = this._wLatLng = new L.LatLng(i.lat, i.lng);
      },
      _addToMap: function _addToMap(t) {
        t && (this._backupLatlng = this._latlng, this.setLatLng(t)), this._group._featureGroup.addLayer(this);
      },
      _recursivelyAnimateChildrenIn: function _recursivelyAnimateChildrenIn(t, e, i) {
        this._recursively(t, 0, i - 1, function (t) {
          var i,
              n,
              s = t._markers;

          for (i = s.length - 1; i >= 0; i--) {
            n = s[i], n._icon && (n._setPos(e), n.setOpacity(0));
          }
        }, function (t) {
          var i,
              n,
              s = t._childClusters;

          for (i = s.length - 1; i >= 0; i--) {
            n = s[i], n._icon && (n._setPos(e), n.setOpacity(0));
          }
        });
      },
      _recursivelyAnimateChildrenInAndAddSelfToMap: function _recursivelyAnimateChildrenInAndAddSelfToMap(t, e, i) {
        this._recursively(t, i, 0, function (n) {
          n._recursivelyAnimateChildrenIn(t, n._group._map.latLngToLayerPoint(n.getLatLng()).round(), e), n._isSingleParent() && e - 1 === i ? (n.setOpacity(1), n._recursivelyRemoveChildrenFromMap(t, e)) : n.setOpacity(0), n._addToMap();
        });
      },
      _recursivelyBecomeVisible: function _recursivelyBecomeVisible(t, e) {
        this._recursively(t, 0, e, null, function (t) {
          t.setOpacity(1);
        });
      },
      _recursivelyAddChildrenToMap: function _recursivelyAddChildrenToMap(t, e, i) {
        this._recursively(i, -1, e, function (n) {
          if (e !== n._zoom) for (var s = n._markers.length - 1; s >= 0; s--) {
            var r = n._markers[s];
            i.contains(r._latlng) && (t && (r._backupLatlng = r.getLatLng(), r.setLatLng(t), r.setOpacity && r.setOpacity(0)), n._group._featureGroup.addLayer(r));
          }
        }, function (e) {
          e._addToMap(t);
        });
      },
      _recursivelyRestoreChildPositions: function _recursivelyRestoreChildPositions(t) {
        for (var e = this._markers.length - 1; e >= 0; e--) {
          var i = this._markers[e];
          i._backupLatlng && (i.setLatLng(i._backupLatlng), delete i._backupLatlng);
        }

        if (t - 1 === this._zoom) for (var n = this._childClusters.length - 1; n >= 0; n--) {
          this._childClusters[n]._restorePosition();
        } else for (var s = this._childClusters.length - 1; s >= 0; s--) {
          this._childClusters[s]._recursivelyRestoreChildPositions(t);
        }
      },
      _restorePosition: function _restorePosition() {
        this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng);
      },
      _recursivelyRemoveChildrenFromMap: function _recursivelyRemoveChildrenFromMap(t, e, i) {
        var n, s;

        this._recursively(t, -1, e - 1, function (t) {
          for (s = t._markers.length - 1; s >= 0; s--) {
            n = t._markers[s], i && i.contains(n._latlng) || (t._group._featureGroup.removeLayer(n), n.setOpacity && n.setOpacity(1));
          }
        }, function (t) {
          for (s = t._childClusters.length - 1; s >= 0; s--) {
            n = t._childClusters[s], i && i.contains(n._latlng) || (t._group._featureGroup.removeLayer(n), n.setOpacity && n.setOpacity(1));
          }
        });
      },
      _recursively: function _recursively(t, e, i, n, s) {
        var r,
            o,
            a = this._childClusters,
            h = this._zoom;
        if (e > h) for (r = a.length - 1; r >= 0; r--) {
          o = a[r], t.intersects(o._bounds) && o._recursively(t, e, i, n, s);
        } else if (n && n(this), s && this._zoom === i && s(this), i > h) for (r = a.length - 1; r >= 0; r--) {
          o = a[r], t.intersects(o._bounds) && o._recursively(t, e, i, n, s);
        }
      },
      _recalculateBounds: function _recalculateBounds() {
        var t,
            e = this._markers,
            i = this._childClusters;

        for (this._bounds = new L.LatLngBounds(), delete this._wLatLng, t = e.length - 1; t >= 0; t--) {
          this._expandBounds(e[t]);
        }

        for (t = i.length - 1; t >= 0; t--) {
          this._expandBounds(i[t]);
        }
      },
      _isSingleParent: function _isSingleParent() {
        return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount;
      }
    }), L.DistanceGrid = function (t) {
      this._cellSize = t, this._sqCellSize = t * t, this._grid = {}, this._objectPoint = {};
    }, L.DistanceGrid.prototype = {
      addObject: function addObject(t, e) {
        var i = this._getCoord(e.x),
            n = this._getCoord(e.y),
            s = this._grid,
            r = s[n] = s[n] || {},
            o = r[i] = r[i] || [],
            a = L.Util.stamp(t);

        this._objectPoint[a] = e, o.push(t);
      },
      updateObject: function updateObject(t, e) {
        this.removeObject(t), this.addObject(t, e);
      },
      removeObject: function removeObject(t, e) {
        var i,
            n,
            s = this._getCoord(e.x),
            r = this._getCoord(e.y),
            o = this._grid,
            a = o[r] = o[r] || {},
            h = a[s] = a[s] || [];

        for (delete this._objectPoint[L.Util.stamp(t)], i = 0, n = h.length; n > i; i++) {
          if (h[i] === t) return h.splice(i, 1), 1 === n && delete a[s], !0;
        }
      },
      eachObject: function eachObject(t, e) {
        var i,
            n,
            s,
            r,
            o,
            a,
            h,
            _ = this._grid;

        for (i in _) {
          o = _[i];

          for (n in o) {
            for (a = o[n], s = 0, r = a.length; r > s; s++) {
              h = t.call(e, a[s]), h && (s--, r--);
            }
          }
        }
      },
      getNearObject: function getNearObject(t) {
        var e,
            i,
            n,
            s,
            r,
            o,
            a,
            h,
            _ = this._getCoord(t.x),
            u = this._getCoord(t.y),
            l = this._objectPoint,
            d = this._sqCellSize,
            p = null;

        for (e = u - 1; u + 1 >= e; e++) {
          if (s = this._grid[e]) for (i = _ - 1; _ + 1 >= i; i++) {
            if (r = s[i]) for (n = 0, o = r.length; o > n; n++) {
              a = r[n], h = this._sqDist(l[L.Util.stamp(a)], t), d > h && (d = h, p = a);
            }
          }
        }

        return p;
      },
      _getCoord: function _getCoord(t) {
        return Math.floor(t / this._cellSize);
      },
      _sqDist: function _sqDist(t, e) {
        var i = e.x - t.x,
            n = e.y - t.y;
        return i * i + n * n;
      }
    }, function () {
      L.QuickHull = {
        getDistant: function getDistant(t, e) {
          var i = e[1].lat - e[0].lat,
              n = e[0].lng - e[1].lng;
          return n * (t.lat - e[0].lat) + i * (t.lng - e[0].lng);
        },
        findMostDistantPointFromBaseLine: function findMostDistantPointFromBaseLine(t, e) {
          var i,
              n,
              s,
              r = 0,
              o = null,
              a = [];

          for (i = e.length - 1; i >= 0; i--) {
            n = e[i], s = this.getDistant(n, t), s > 0 && (a.push(n), s > r && (r = s, o = n));
          }

          return {
            maxPoint: o,
            newPoints: a
          };
        },
        buildConvexHull: function buildConvexHull(t, e) {
          var i = [],
              n = this.findMostDistantPointFromBaseLine(t, e);
          return n.maxPoint ? (i = i.concat(this.buildConvexHull([t[0], n.maxPoint], n.newPoints)), i = i.concat(this.buildConvexHull([n.maxPoint, t[1]], n.newPoints))) : [t[0]];
        },
        getConvexHull: function getConvexHull(t) {
          var e,
              i = !1,
              n = !1,
              s = null,
              r = null;

          for (e = t.length - 1; e >= 0; e--) {
            var o = t[e];
            (i === !1 || o.lat > i) && (s = o, i = o.lat), (n === !1 || o.lat < n) && (r = o, n = o.lat);
          }

          var a = [].concat(this.buildConvexHull([r, s], t), this.buildConvexHull([s, r], t));
          return a;
        }
      };
    }(), L.MarkerCluster.include({
      getConvexHull: function getConvexHull() {
        var t,
            e,
            i = this.getAllChildMarkers(),
            n = [];

        for (e = i.length - 1; e >= 0; e--) {
          t = i[e].getLatLng(), n.push(t);
        }

        return L.QuickHull.getConvexHull(n);
      }
    }), L.MarkerCluster.include({
      _2PI: 2 * Math.PI,
      _circleFootSeparation: 25,
      _circleStartAngle: Math.PI / 6,
      _spiralFootSeparation: 28,
      _spiralLengthStart: 11,
      _spiralLengthFactor: 5,
      _circleSpiralSwitchover: 9,
      spiderfy: function spiderfy() {
        if (this._group._spiderfied !== this && !this._group._inZoomAnimation) {
          var t,
              e = this.getAllChildMarkers(),
              i = this._group,
              n = i._map,
              s = n.latLngToLayerPoint(this._latlng);
          this._group._unspiderfy(), this._group._spiderfied = this, e.length >= this._circleSpiralSwitchover ? t = this._generatePointsSpiral(e.length, s) : (s.y += 10, t = this._generatePointsCircle(e.length, s)), this._animationSpiderfy(e, t);
        }
      },
      unspiderfy: function unspiderfy(t) {
        this._group._inZoomAnimation || (this._animationUnspiderfy(t), this._group._spiderfied = null);
      },
      _generatePointsCircle: function _generatePointsCircle(t, e) {
        var i,
            n,
            s = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + t),
            r = s / this._2PI,
            o = this._2PI / t,
            a = [];

        for (a.length = t, i = t - 1; i >= 0; i--) {
          n = this._circleStartAngle + i * o, a[i] = new L.Point(e.x + r * Math.cos(n), e.y + r * Math.sin(n))._round();
        }

        return a;
      },
      _generatePointsSpiral: function _generatePointsSpiral(t, e) {
        var i,
            n = this._group.options.spiderfyDistanceMultiplier * this._spiralLengthStart,
            s = this._group.options.spiderfyDistanceMultiplier * this._spiralFootSeparation,
            r = this._group.options.spiderfyDistanceMultiplier * this._spiralLengthFactor,
            o = 0,
            a = [];

        for (a.length = t, i = t - 1; i >= 0; i--) {
          o += s / n + 5e-4 * i, a[i] = new L.Point(e.x + n * Math.cos(o), e.y + n * Math.sin(o))._round(), n += this._2PI * r / o;
        }

        return a;
      },
      _noanimationUnspiderfy: function _noanimationUnspiderfy() {
        var t,
            e,
            i = this._group,
            n = i._map,
            s = i._featureGroup,
            r = this.getAllChildMarkers();

        for (this.setOpacity(1), e = r.length - 1; e >= 0; e--) {
          t = r[e], s.removeLayer(t), t._preSpiderfyLatlng && (t.setLatLng(t._preSpiderfyLatlng), delete t._preSpiderfyLatlng), t.setZIndexOffset && t.setZIndexOffset(0), t._spiderLeg && (n.removeLayer(t._spiderLeg), delete t._spiderLeg);
        }

        i._spiderfied = null;
      }
    }), L.MarkerCluster.include(L.DomUtil.TRANSITION ? {
      SVG_ANIMATION: function () {
        return e.createElementNS("http://www.w3.org/2000/svg", "animate").toString().indexOf("SVGAnimate") > -1;
      }(),
      _animationSpiderfy: function _animationSpiderfy(t, i) {
        var n,
            s,
            r,
            o,
            a = this,
            h = this._group,
            _ = h._map,
            u = h._featureGroup,
            l = _.latLngToLayerPoint(this._latlng);

        for (n = t.length - 1; n >= 0; n--) {
          s = t[n], s.setOpacity ? (s.setZIndexOffset(1e6), s.setOpacity(0), u.addLayer(s), s._setPos(l)) : u.addLayer(s);
        }

        h._forceLayout(), h._animationStart();
        var d = L.Path.SVG ? 0 : .3,
            p = L.Path.SVG_NS;

        for (n = t.length - 1; n >= 0; n--) {
          if (o = _.layerPointToLatLng(i[n]), s = t[n], s._preSpiderfyLatlng = s._latlng, s.setLatLng(o), s.setOpacity && s.setOpacity(1), r = new L.Polyline([a._latlng, o], {
            weight: 1.5,
            color: "#222",
            opacity: d
          }), _.addLayer(r), s._spiderLeg = r, L.Path.SVG && this.SVG_ANIMATION) {
            var c = r._path.getTotalLength();

            r._path.setAttribute("stroke-dasharray", c + "," + c);

            var f = e.createElementNS(p, "animate");
            f.setAttribute("attributeName", "stroke-dashoffset"), f.setAttribute("begin", "indefinite"), f.setAttribute("from", c), f.setAttribute("to", 0), f.setAttribute("dur", .25), r._path.appendChild(f), f.beginElement(), f = e.createElementNS(p, "animate"), f.setAttribute("attributeName", "stroke-opacity"), f.setAttribute("attributeName", "stroke-opacity"), f.setAttribute("begin", "indefinite"), f.setAttribute("from", 0), f.setAttribute("to", .5), f.setAttribute("dur", .25), r._path.appendChild(f), f.beginElement();
          }
        }

        if (a.setOpacity(.3), L.Path.SVG) for (this._group._forceLayout(), n = t.length - 1; n >= 0; n--) {
          s = t[n]._spiderLeg, s.options.opacity = .5, s._path.setAttribute("stroke-opacity", .5);
        }
        setTimeout(function () {
          h._animationEnd(), h.fire("spiderfied");
        }, 200);
      },
      _animationUnspiderfy: function _animationUnspiderfy(t) {
        var e,
            i,
            n,
            s = this._group,
            r = s._map,
            o = s._featureGroup,
            a = t ? r._latLngToNewLayerPoint(this._latlng, t.zoom, t.center) : r.latLngToLayerPoint(this._latlng),
            h = this.getAllChildMarkers(),
            _ = L.Path.SVG && this.SVG_ANIMATION;

        for (s._animationStart(), this.setOpacity(1), i = h.length - 1; i >= 0; i--) {
          e = h[i], e._preSpiderfyLatlng && (e.setLatLng(e._preSpiderfyLatlng), delete e._preSpiderfyLatlng, e.setOpacity ? (e._setPos(a), e.setOpacity(0)) : o.removeLayer(e), _ && (n = e._spiderLeg._path.childNodes[0], n.setAttribute("to", n.getAttribute("from")), n.setAttribute("from", 0), n.beginElement(), n = e._spiderLeg._path.childNodes[1], n.setAttribute("from", .5), n.setAttribute("to", 0), n.setAttribute("stroke-opacity", 0), n.beginElement(), e._spiderLeg._path.setAttribute("stroke-opacity", 0)));
        }

        setTimeout(function () {
          var t = 0;

          for (i = h.length - 1; i >= 0; i--) {
            e = h[i], e._spiderLeg && t++;
          }

          for (i = h.length - 1; i >= 0; i--) {
            e = h[i], e._spiderLeg && (e.setOpacity && (e.setOpacity(1), e.setZIndexOffset(0)), t > 1 && o.removeLayer(e), r.removeLayer(e._spiderLeg), delete e._spiderLeg);
          }

          s._animationEnd();
        }, 200);
      }
    } : {
      _animationSpiderfy: function _animationSpiderfy(t, e) {
        var i,
            n,
            s,
            r,
            o = this._group,
            a = o._map,
            h = o._featureGroup;

        for (i = t.length - 1; i >= 0; i--) {
          r = a.layerPointToLatLng(e[i]), n = t[i], n._preSpiderfyLatlng = n._latlng, n.setLatLng(r), n.setZIndexOffset && n.setZIndexOffset(1e6), h.addLayer(n), s = new L.Polyline([this._latlng, r], {
            weight: 1.5,
            color: "#222"
          }), a.addLayer(s), n._spiderLeg = s;
        }

        this.setOpacity(.3), o.fire("spiderfied");
      },
      _animationUnspiderfy: function _animationUnspiderfy() {
        this._noanimationUnspiderfy();
      }
    }), L.MarkerClusterGroup.include({
      _spiderfied: null,
      _spiderfierOnAdd: function _spiderfierOnAdd() {
        this._map.on("click", this._unspiderfyWrapper, this), this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this), this._map.on("zoomend", this._noanimationUnspiderfy, this), L.Path.SVG && !L.Browser.touch && this._map._initPathRoot();
      },
      _spiderfierOnRemove: function _spiderfierOnRemove() {
        this._map.off("click", this._unspiderfyWrapper, this), this._map.off("zoomstart", this._unspiderfyZoomStart, this), this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy();
      },
      _unspiderfyZoomStart: function _unspiderfyZoomStart() {
        this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this);
      },
      _unspiderfyZoomAnim: function _unspiderfyZoomAnim(t) {
        L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy(t));
      },
      _unspiderfyWrapper: function _unspiderfyWrapper() {
        this._unspiderfy();
      },
      _unspiderfy: function _unspiderfy(t) {
        this._spiderfied && this._spiderfied.unspiderfy(t);
      },
      _noanimationUnspiderfy: function _noanimationUnspiderfy() {
        this._spiderfied && this._spiderfied._noanimationUnspiderfy();
      },
      _unspiderfyLayer: function _unspiderfyLayer(t) {
        t._spiderLeg && (this._featureGroup.removeLayer(t), t.setOpacity(1), t.setZIndexOffset(0), this._map.removeLayer(t._spiderLeg), delete t._spiderLeg);
      }
    });
  }(window, document);
};

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_3__);
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.




_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
turbolinks__WEBPACK_IMPORTED_MODULE_1___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__["start"](); // require("leaflet-src")

__webpack_require__(/*! reqwest.min */ "./app/javascript/reqwest.min.js");

__webpack_require__(/*! leaflet */ "./app/javascript/leaflet.js");

__webpack_require__(/*! leaflet.markercluster */ "./app/javascript/leaflet.markercluster.js");

__webpack_require__(/*! Leaflet.Photo */ "./app/javascript/Leaflet.Photo.js");

__webpack_require__(/*! ecoclean */ "./app/javascript/ecoclean.js");

window.onload = function (event) {};

/***/ }),

/***/ "./app/javascript/reqwest.min.js":
/*!***************************************!*\
  !*** ./app/javascript/reqwest.min.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _this = this;

/*!
  * Reqwest! A general purpose XHR connection manager
  * license MIT (c) Dustin Diaz 2014
  * https://github.com/ded/reqwest
  */
window.onload = function (event) {
  !function (e, t, n) {
     true && module.exports ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
  }("reqwest", _this, function () {
    function handleReadyState(e, t, n) {
      return function () {
        if (e._aborted) return n(e.request);
        e.request && e.request[readyState] == 4 && (e.request.onreadystatechange = noop, twoHundo.test(e.request.status) ? t(e.request) : n(e.request));
      };
    }

    function setHeaders(e, t) {
      var n = t.headers || {},
          r;
      n.Accept = n.Accept || defaultHeaders.accept[t.type] || defaultHeaders.accept["*"], !t.crossOrigin && !n[requestedWith] && (n[requestedWith] = defaultHeaders.requestedWith), n[contentType] || (n[contentType] = t.contentType || defaultHeaders.contentType);

      for (r in n) {
        n.hasOwnProperty(r) && "setRequestHeader" in e && e.setRequestHeader(r, n[r]);
      }
    }

    function setCredentials(e, t) {
      typeof t.withCredentials != "undefined" && typeof e.withCredentials != "undefined" && (e.withCredentials = !!t.withCredentials);
    }

    function generalCallback(e) {
      lastValue = e;
    }

    function urlappend(e, t) {
      return e + (/\?/.test(e) ? "&" : "?") + t;
    }

    function handleJsonp(e, t, n, r) {
      var i = uniqid++,
          s = e.jsonpCallback || "callback",
          o = e.jsonpCallbackName || reqwest.getcallbackPrefix(i),
          u = new RegExp("((^|\\?|&)" + s + ")=([^&]+)"),
          a = r.match(u),
          f = doc.createElement("script"),
          l = 0,
          c = navigator.userAgent.indexOf("MSIE 10.0") !== -1;
      return a ? a[3] === "?" ? r = r.replace(u, "$1=" + o) : o = a[3] : r = urlappend(r, s + "=" + o), win[o] = generalCallback, f.type = "text/javascript", f.src = r, f.async = !0, typeof f.onreadystatechange != "undefined" && !c && (f.htmlFor = f.id = "_reqwest_" + i), f.onload = f.onreadystatechange = function () {
        if (f[readyState] && f[readyState] !== "complete" && f[readyState] !== "loaded" || l) return !1;
        f.onload = f.onreadystatechange = null, f.onclick && f.onclick(), t(lastValue), lastValue = undefined, head.removeChild(f), l = 1;
      }, head.appendChild(f), {
        abort: function abort() {
          f.onload = f.onreadystatechange = null, n({}, "Request is aborted: timeout", {}), lastValue = undefined, head.removeChild(f), l = 1;
        }
      };
    }

    function getRequest(e, t) {
      var n = this.o,
          r = (n.method || "GET").toUpperCase(),
          i = typeof n == "string" ? n : n.url,
          s = n.processData !== !1 && n.data && typeof n.data != "string" ? reqwest.toQueryString(n.data) : n.data || null,
          o,
          u = !1;
      return (n["type"] == "jsonp" || r == "GET") && s && (i = urlappend(i, s), s = null), n["type"] == "jsonp" ? handleJsonp(n, e, t, i) : (o = n.xhr && n.xhr(n) || xhr(n), o.open(r, i, n.async === !1 ? !1 : !0), setHeaders(o, n), setCredentials(o, n), win[xDomainRequest] && o instanceof win[xDomainRequest] ? (o.onload = e, o.onerror = t, o.onprogress = function () {}, u = !0) : o.onreadystatechange = handleReadyState(this, e, t), n.before && n.before(o), u ? setTimeout(function () {
        o.send(s);
      }, 200) : o.send(s), o);
    }

    function Reqwest(e, t) {
      this.o = e, this.fn = t, init.apply(this, arguments);
    }

    function setType(e) {
      if (e.match("json")) return "json";
      if (e.match("javascript")) return "js";
      if (e.match("text")) return "html";
      if (e.match("xml")) return "xml";
    }

    function init(o, fn) {
      function complete(e) {
        o.timeout && clearTimeout(self.timeout), self.timeout = null;

        while (self._completeHandlers.length > 0) {
          self._completeHandlers.shift()(e);
        }
      }

      function success(resp) {
        var type = o.type || setType(resp.getResponseHeader("Content-Type"));
        resp = type !== "jsonp" ? self.request : resp;
        var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
            r = filteredResponse;

        try {
          resp.responseText = r;
        } catch (e) {}

        if (r) switch (type) {
          case "json":
            try {
              resp = win.JSON ? win.JSON.parse(r) : eval("(" + r + ")");
            } catch (err) {
              return error(resp, "Could not parse JSON in response", err);
            }

            break;

          case "js":
            resp = eval(r);
            break;

          case "html":
            resp = r;
            break;

          case "xml":
            resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML;
        }
        self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp);

        while (self._fulfillmentHandlers.length > 0) {
          resp = self._fulfillmentHandlers.shift()(resp);
        }

        complete(resp);
      }

      function error(e, t, n) {
        e = self.request, self._responseArgs.resp = e, self._responseArgs.msg = t, self._responseArgs.t = n, self._erred = !0;

        while (self._errorHandlers.length > 0) {
          self._errorHandlers.shift()(e, t, n);
        }

        complete(e);
      }

      this.url = typeof o == "string" ? o : o.url, this.timeout = null, this._fulfilled = !1, this._successHandler = function () {}, this._fulfillmentHandlers = [], this._errorHandlers = [], this._completeHandlers = [], this._erred = !1, this._responseArgs = {};
      var self = this;
      fn = fn || function () {}, o.timeout && (this.timeout = setTimeout(function () {
        self.abort();
      }, o.timeout)), o.success && (this._successHandler = function () {
        o.success.apply(o, arguments);
      }), o.error && this._errorHandlers.push(function () {
        o.error.apply(o, arguments);
      }), o.complete && this._completeHandlers.push(function () {
        o.complete.apply(o, arguments);
      }), this.request = getRequest.call(this, success, error);
    }

    function reqwest(e, t) {
      return new Reqwest(e, t);
    }

    function normalize(e) {
      return e ? e.replace(/\r?\n/g, "\r\n") : "";
    }

    function serial(e, t) {
      var n = e.name,
          r = e.tagName.toLowerCase(),
          i = function i(e) {
        e && !e.disabled && t(n, normalize(e.attributes.value && e.attributes.value.specified ? e.value : e.text));
      },
          s,
          o,
          u,
          a;

      if (e.disabled || !n) return;

      switch (r) {
        case "input":
          /reset|button|image|file/i.test(e.type) || (s = /checkbox/i.test(e.type), o = /radio/i.test(e.type), u = e.value, (!s && !o || e.checked) && t(n, normalize(s && u === "" ? "on" : u)));
          break;

        case "textarea":
          t(n, normalize(e.value));
          break;

        case "select":
          if (e.type.toLowerCase() === "select-one") i(e.selectedIndex >= 0 ? e.options[e.selectedIndex] : null);else for (a = 0; e.length && a < e.length; a++) {
            e.options[a].selected && i(e.options[a]);
          }
      }
    }

    function eachFormElement() {
      var e = this,
          t,
          n,
          r = function r(t, n) {
        var r, i, s;

        for (r = 0; r < n.length; r++) {
          s = t[byTag](n[r]);

          for (i = 0; i < s.length; i++) {
            serial(s[i], e);
          }
        }
      };

      for (n = 0; n < arguments.length; n++) {
        t = arguments[n], /input|select|textarea/i.test(t.tagName) && serial(t, e), r(t, ["input", "select", "textarea"]);
      }
    }

    function serializeQueryString() {
      return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments));
    }

    function serializeHash() {
      var e = {};
      return eachFormElement.apply(function (t, n) {
        t in e ? (e[t] && !isArray(e[t]) && (e[t] = [e[t]]), e[t].push(n)) : e[t] = n;
      }, arguments), e;
    }

    function buildParams(e, t, n, r) {
      var i,
          s,
          o,
          u = /\[\]$/;
      if (isArray(t)) for (s = 0; t && s < t.length; s++) {
        o = t[s], n || u.test(e) ? r(e, o) : buildParams(e + "[" + (typeof o == "object" ? s : "") + "]", o, n, r);
      } else if (t && t.toString() === "[object Object]") for (i in t) {
        buildParams(e + "[" + i + "]", t[i], n, r);
      } else r(e, t);
    }

    var win = window,
        doc = document,
        twoHundo = /^(20\d|1223)$/,
        byTag = "getElementsByTagName",
        readyState = "readyState",
        contentType = "Content-Type",
        requestedWith = "X-Requested-With",
        head = doc[byTag]("head")[0],
        uniqid = 0,
        callbackPrefix = "reqwest_" + +new Date(),
        lastValue,
        xmlHttpRequest = "XMLHttpRequest",
        xDomainRequest = "XDomainRequest",
        noop = function noop() {},
        isArray = typeof Array.isArray == "function" ? Array.isArray : function (e) {
      return e instanceof Array;
    },
        defaultHeaders = {
      contentType: "application/x-www-form-urlencoded",
      requestedWith: xmlHttpRequest,
      accept: {
        "*": "text/javascript, text/html, application/xml, text/xml, */*",
        xml: "application/xml, text/xml",
        html: "text/html",
        text: "text/plain",
        json: "application/json, text/javascript",
        js: "application/javascript, text/javascript"
      }
    },
        xhr = function xhr(e) {
      if (e.crossOrigin === !0) {
        var t = win[xmlHttpRequest] ? new XMLHttpRequest() : null;
        if (t && "withCredentials" in t) return t;
        if (win[xDomainRequest]) return new XDomainRequest();
        throw new Error("Browser does not support cross-origin requests");
      }

      return win[xmlHttpRequest] ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    },
        globalSetupOptions = {
      dataFilter: function dataFilter(e) {
        return e;
      }
    };

    return Reqwest.prototype = {
      abort: function abort() {
        this._aborted = !0, this.request.abort();
      },
      retry: function retry() {
        init.call(this, this.o, this.fn);
      },
      then: function then(e, t) {
        return e = e || function () {}, t = t || function () {}, this._fulfilled ? this._responseArgs.resp = e(this._responseArgs.resp) : this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(e), this._errorHandlers.push(t)), this;
      },
      always: function always(e) {
        return this._fulfilled || this._erred ? e(this._responseArgs.resp) : this._completeHandlers.push(e), this;
      },
      fail: function fail(e) {
        return this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(e), this;
      }
    }, reqwest.serializeArray = function () {
      var e = [];
      return eachFormElement.apply(function (t, n) {
        e.push({
          name: t,
          value: n
        });
      }, arguments), e;
    }, reqwest.serialize = function () {
      if (arguments.length === 0) return "";
      var e,
          t,
          n = Array.prototype.slice.call(arguments, 0);
      return e = n.pop(), e && e.nodeType && n.push(e) && (e = null), e && (e = e.type), e == "map" ? t = serializeHash : e == "array" ? t = reqwest.serializeArray : t = serializeQueryString, t.apply(null, n);
    }, reqwest.toQueryString = function (e, t) {
      var n,
          r,
          i = t || !1,
          s = [],
          o = encodeURIComponent,
          u = function u(e, t) {
        t = "function" == typeof t ? t() : t == null ? "" : t, s[s.length] = o(e) + "=" + o(t);
      };

      if (isArray(e)) for (r = 0; e && r < e.length; r++) {
        u(e[r].name, e[r].value);
      } else for (n in e) {
        e.hasOwnProperty(n) && buildParams(n, e[n], i, u);
      }
      return s.join("&").replace(/%20/g, "+");
    }, reqwest.getcallbackPrefix = function () {
      return callbackPrefix;
    }, reqwest.compat = function (e, t) {
      return e && (e.type && (e.method = e.type) && delete e.type, e.dataType && (e.type = e.dataType), e.jsonpCallback && (e.jsonpCallbackName = e.jsonpCallback) && delete e.jsonpCallback, e.jsonp && (e.jsonpCallback = e.jsonp)), new Reqwest(e, t);
    }, reqwest.ajaxSetup = function (e) {
      e = e || {};

      for (var t in e) {
        globalSetupOptions[t] = e[t];
      }
    }, reqwest;
  });
};

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm.delete(form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form:not([data-turbo=true])',
        formInputClickSelector: 'form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }

        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) {
          n = t[e], r[e] = n;
        }

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) {
          r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        }

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) {
            u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
              type: i(u),
              tracked: o(u),
              elements: []
            }, r.elements.push(u));
          }
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) {
              e = r[t].tracked, e && n.push(t);
            }

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) {
            i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          }

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) {
            o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          }

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) {
            n = i[o].elements, e(n[0], t) && (r = n[0]);
          }

          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) {
            e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          }

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) {
            s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          }

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function n(t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) {
          o.call(e, n) && (t[n] = e[n]);
        }

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          }

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.removeChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) {
            i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          }

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) {
            a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          }

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) {
            n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          }

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
        function n() {
          this.constructor = _t6;
        }

        for (var o in e) {
          r.call(e, o) && (_t6[o] = e[o]);
        }

        return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) {
            o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          }

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) {
            e = n[t], o.push(delete this.snapshots[e]);
          }

          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) {
          if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
        }
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-7852bf9a1d57570eb710.js.map