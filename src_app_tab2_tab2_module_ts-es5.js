(function () {
  function _get3(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get3 = Reflect.get; } else { _get3 = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get3(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e18) { throw _e18; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e19) { didErr = true; err = _e19; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_tab2_tab2_module_ts"], {
    /***/
    16351:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/awesome-cordova-plugin.js ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AwesomeCordovaNativePlugin": function AwesomeCordovaNativePlugin() {
          return (
            /* binding */
            _AwesomeCordovaNativePlugin
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./decorators/common */
      9343);
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./util */
      91674);

      var _AwesomeCordovaNativePlugin =
      /** @class */
      function () {
        function AwesomeCordovaNativePlugin() {}
        /**
         * Returns a boolean that indicates whether the plugin is installed
         *
         * @returns {boolean}
         */


        AwesomeCordovaNativePlugin.installed = function () {
          var isAvailable = (0, _decorators_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(this.pluginRef) === true;
          return isAvailable;
        };
        /**
         * Returns the original plugin object
         */


        AwesomeCordovaNativePlugin.getPlugin = function () {
          if (typeof window !== 'undefined') {
            return (0, _util__WEBPACK_IMPORTED_MODULE_1__.get)(window, this.pluginRef);
          }

          return null;
        };
        /**
         * Returns the plugin's name
         */


        AwesomeCordovaNativePlugin.getPluginName = function () {
          var pluginName = this.pluginName;
          return pluginName;
        };
        /**
         * Returns the plugin's reference
         */


        AwesomeCordovaNativePlugin.getPluginRef = function () {
          var pluginRef = this.pluginRef;
          return pluginRef;
        };
        /**
         * Returns the plugin's install name
         */


        AwesomeCordovaNativePlugin.getPluginInstallName = function () {
          var plugin = this.plugin;
          return plugin;
        };
        /**
         * Returns the plugin's supported platforms
         */


        AwesomeCordovaNativePlugin.getSupportedPlatforms = function () {
          var platform = this.platforms;
          return platform;
        };

        AwesomeCordovaNativePlugin.pluginName = '';
        AwesomeCordovaNativePlugin.pluginRef = '';
        AwesomeCordovaNativePlugin.plugin = '';
        AwesomeCordovaNativePlugin.repo = '';
        AwesomeCordovaNativePlugin.platforms = [];
        AwesomeCordovaNativePlugin.install = '';
        return AwesomeCordovaNativePlugin;
      }(); //# sourceMappingURL=awesome-cordova-plugin.js.map

      /***/

    },

    /***/
    46367:
    /*!******************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/bootstrap.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "checkReady": function checkReady() {
          return (
            /* binding */
            _checkReady
          );
        }
        /* harmony export */

      });
      /**
       *
       */


      function _checkReady() {
        if (typeof process === 'undefined') {
          var win_1 = typeof window !== 'undefined' ? window : {};
          var DEVICE_READY_TIMEOUT_1 = 5000; // To help developers using cordova, we listen for the device ready event and
          // log an error if it didn't fire in a reasonable amount of time. Generally,
          // when this happens, developers should remove and reinstall plugins, since
          // an inconsistent plugin is often the culprit.

          var before_1 = Date.now();
          var didFireReady_1 = false;
          win_1.document.addEventListener('deviceready', function () {
            console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
            didFireReady_1 = true;
          });
          setTimeout(function () {
            if (!didFireReady_1 && win_1.cordova) {
              console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
            }
          }, DEVICE_READY_TIMEOUT_1);
        }
      } //# sourceMappingURL=bootstrap.js.map

      /***/

    },

    /***/
    9343:
    /*!**************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/common.js ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ERR_CORDOVA_NOT_AVAILABLE": function ERR_CORDOVA_NOT_AVAILABLE() {
          return (
            /* binding */
            _ERR_CORDOVA_NOT_AVAILABLE
          );
        },

        /* harmony export */
        "ERR_PLUGIN_NOT_INSTALLED": function ERR_PLUGIN_NOT_INSTALLED() {
          return (
            /* binding */
            _ERR_PLUGIN_NOT_INSTALLED
          );
        },

        /* harmony export */
        "getPromise": function getPromise() {
          return (
            /* binding */
            _getPromise
          );
        },

        /* harmony export */
        "wrapPromise": function wrapPromise() {
          return (
            /* binding */
            _wrapPromise
          );
        },

        /* harmony export */
        "checkAvailability": function checkAvailability() {
          return (
            /* binding */
            _checkAvailability
          );
        },

        /* harmony export */
        "instanceAvailability": function instanceAvailability() {
          return (
            /* binding */
            _instanceAvailability
          );
        },

        /* harmony export */
        "setIndex": function setIndex() {
          return (
            /* binding */
            _setIndex
          );
        },

        /* harmony export */
        "callCordovaPlugin": function callCordovaPlugin() {
          return (
            /* binding */
            _callCordovaPlugin
          );
        },

        /* harmony export */
        "callInstance": function callInstance() {
          return (
            /* binding */
            _callInstance
          );
        },

        /* harmony export */
        "getPlugin": function getPlugin() {
          return (
            /* binding */
            _getPlugin
          );
        },

        /* harmony export */
        "get": function get() {
          return (
            /* binding */
            _get
          );
        },

        /* harmony export */
        "pluginWarn": function pluginWarn() {
          return (
            /* binding */
            _pluginWarn
          );
        },

        /* harmony export */
        "cordovaWarn": function cordovaWarn() {
          return (
            /* binding */
            _cordovaWarn
          );
        },

        /* harmony export */
        "wrap": function wrap() {
          return (
            /* binding */
            _wrap
          );
        },

        /* harmony export */
        "wrapInstance": function wrapInstance() {
          return (
            /* binding */
            _wrapInstance
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      69165);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      22759);

      var _ERR_CORDOVA_NOT_AVAILABLE = {
        error: 'cordova_not_available'
      };
      var _ERR_PLUGIN_NOT_INSTALLED = {
        error: 'plugin_not_installed'
      };
      /**
       * @param callback
       */

      function _getPromise(callback) {
        var tryNativePromise = function tryNativePromise() {
          if (Promise) {
            return new Promise(function (resolve, reject) {
              callback(resolve, reject);
            });
          } else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
          }
        };

        if (typeof window !== 'undefined' && window.angular) {
          var doc = window.document;
          var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();

          if (injector) {
            var $q = injector.get('$q');
            return $q(function (resolve, reject) {
              callback(resolve, reject);
            });
          }

          console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
        }

        return tryNativePromise();
      }
      /**
       * @param pluginObj
       * @param methodName
       * @param args
       * @param opts
       */


      function _wrapPromise(pluginObj, methodName, args, opts) {
        if (opts === void 0) {
          opts = {};
        }

        var pluginResult, rej;

        var p = _getPromise(function (resolve, reject) {
          if (opts.destruct) {
            pluginResult = _callCordovaPlugin(pluginObj, methodName, args, opts, function () {
              var args = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }

              return resolve(args);
            }, function () {
              var args = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }

              return reject(args);
            });
          } else {
            pluginResult = _callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
          }

          rej = reject;
        }); // Angular throws an error on unhandled rejection, but in this case we have already printed
        // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
        // to error


        if (pluginResult && pluginResult.error) {
          p["catch"](function () {});
          typeof rej === 'function' && rej(pluginResult.error);
        }

        return p;
      }
      /**
       * @param pluginObj
       * @param methodName
       * @param args
       * @param opts
       */


      function wrapOtherPromise(pluginObj, methodName, args, opts) {
        if (opts === void 0) {
          opts = {};
        }

        return _getPromise(function (resolve, reject) {
          var pluginResult = _callCordovaPlugin(pluginObj, methodName, args, opts);

          if (pluginResult) {
            if (pluginResult.error) {
              reject(pluginResult.error);
            } else if (pluginResult.then) {
              pluginResult.then(resolve)["catch"](reject);
            }
          } else {
            reject({
              error: 'unexpected_error'
            });
          }
        });
      }
      /**
       * @param pluginObj
       * @param methodName
       * @param args
       * @param opts
       */


      function wrapObservable(pluginObj, methodName, args, opts) {
        if (opts === void 0) {
          opts = {};
        }

        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
          var pluginResult;

          if (opts.destruct) {
            pluginResult = _callCordovaPlugin(pluginObj, methodName, args, opts, function () {
              var args = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }

              return observer.next(args);
            }, function () {
              var args = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }

              return observer.error(args);
            });
          } else {
            pluginResult = _callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
          }

          if (pluginResult && pluginResult.error) {
            observer.error(pluginResult.error);
            observer.complete();
          }

          return function () {
            try {
              if (opts.clearFunction) {
                if (opts.clearWithArgs) {
                  return _callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                }

                return _callCordovaPlugin(pluginObj, opts.clearFunction, []);
              }
            } catch (e) {
              console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
              console.warn(e);
            }
          };
        });
      }
      /**
       * Wrap the event with an observable
       *
       * @private
       * @param event event name
       * @param element The element to attach the event listener to
       * @returns {Observable}
       */


      function wrapEventObservable(event, element) {
        element = typeof window !== 'undefined' && element ? _get(window, element) : element || (typeof window !== 'undefined' ? window : {});
        return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(element, event);
      }
      /**
       * @param plugin
       * @param methodName
       * @param pluginName
       */


      function _checkAvailability(plugin, methodName, pluginName) {
        var pluginRef, pluginPackage;

        if (typeof plugin === 'string') {
          pluginRef = plugin;
        } else {
          pluginRef = plugin.constructor.getPluginRef();
          pluginName = plugin.constructor.getPluginName();
          pluginPackage = plugin.constructor.getPluginInstallName();
        }

        var pluginInstance = _getPlugin(pluginRef);

        if (!pluginInstance || !!methodName && typeof pluginInstance[methodName] === 'undefined') {
          if (typeof window === 'undefined' || !window.cordova) {
            _cordovaWarn(pluginName, methodName);

            return _ERR_CORDOVA_NOT_AVAILABLE;
          }

          _pluginWarn(pluginName, pluginPackage, methodName);

          return _ERR_PLUGIN_NOT_INSTALLED;
        }

        return true;
      }
      /**
       * Checks if _objectInstance exists and has the method/property
       *
       * @param pluginObj
       * @param methodName
       * @private
       */


      function _instanceAvailability(pluginObj, methodName) {
        return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
      }
      /**
       * @param args
       * @param opts
       * @param resolve
       * @param reject
       */


      function _setIndex(args, opts, resolve, reject) {
        if (opts === void 0) {
          opts = {};
        } // ignore resolve and reject in case sync


        if (opts.sync) {
          return args;
        } // If the plugin method expects myMethod(success, err, options)


        if (opts.callbackOrder === 'reverse') {
          // Get those arguments in the order [resolve, reject, ...restOfArgs]
          args.unshift(reject);
          args.unshift(resolve);
        } else if (opts.callbackStyle === 'node') {
          args.push(function (err, result) {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        } else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
          var obj = {};
          obj[opts.successName] = resolve;
          obj[opts.errorName] = reject;
          args.push(obj);
        } else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
          var setSuccessIndex = function setSuccessIndex() {
            // If we've specified a success/error index
            if (opts.successIndex > args.length) {
              args[opts.successIndex] = resolve;
            } else {
              args.splice(opts.successIndex, 0, resolve);
            }
          };

          var setErrorIndex = function setErrorIndex() {
            // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
            // defined and thus causing non expected behavior.
            if (opts.errorIndex > args.length) {
              args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
            } else {
              args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
            }
          };

          if (opts.successIndex > opts.errorIndex) {
            setErrorIndex();
            setSuccessIndex();
          } else {
            setSuccessIndex();
            setErrorIndex();
          }
        } else {
          // Otherwise, let's tack them on to the end of the argument list
          // which is 90% of cases
          args.push(resolve);
          args.push(reject);
        }

        return args;
      }
      /**
       * @param pluginObj
       * @param methodName
       * @param args
       * @param opts
       * @param resolve
       * @param reject
       */


      function _callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
        if (opts === void 0) {
          opts = {};
        } // Try to figure out where the success/error callbacks need to be bound
        // to our promise resolve/reject handlers.


        args = _setIndex(args, opts, resolve, reject);

        var availabilityCheck = _checkAvailability(pluginObj, methodName);

        if (availabilityCheck === true) {
          var pluginInstance = _getPlugin(pluginObj.constructor.getPluginRef()); // eslint-disable-next-line prefer-spread


          return pluginInstance[methodName].apply(pluginInstance, args);
        } else {
          return availabilityCheck;
        }
      }
      /**
       * @param pluginObj
       * @param methodName
       * @param args
       * @param opts
       * @param resolve
       * @param reject
       */


      function _callInstance(pluginObj, methodName, args, opts, resolve, reject) {
        if (opts === void 0) {
          opts = {};
        }

        args = _setIndex(args, opts, resolve, reject);

        if (_instanceAvailability(pluginObj, methodName)) {
          // eslint-disable-next-line prefer-spread
          return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
        }
      }
      /**
       * @param pluginRef
       */


      function _getPlugin(pluginRef) {
        if (typeof window !== 'undefined') {
          return _get(window, pluginRef);
        }

        return null;
      }
      /**
       * @param element
       * @param path
       */


      function _get(element, path) {
        var paths = path.split('.');
        var obj = element;

        for (var i = 0; i < paths.length; i++) {
          if (!obj) {
            return null;
          }

          obj = obj[paths[i]];
        }

        return obj;
      }
      /**
       * @param pluginName
       * @param plugin
       * @param method
       */


      function _pluginWarn(pluginName, plugin, method) {
        if (method) {
          console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
        } else {
          console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
        }

        if (plugin) {
          console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
        }
      }
      /**
       * @private
       * @param pluginName
       * @param method
       */


      function _cordovaWarn(pluginName, method) {
        if (typeof process === 'undefined') {
          if (method) {
            console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
          } else {
            console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
          }
        }
      }
      /**
       * @param pluginObj
       * @param methodName
       * @param opts
       * @private
       */


      var _wrap = function _wrap(pluginObj, methodName, opts) {
        if (opts === void 0) {
          opts = {};
        }

        return function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (opts.sync) {
            // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
            return _callCordovaPlugin(pluginObj, methodName, args, opts);
          } else if (opts.observable) {
            return wrapObservable(pluginObj, methodName, args, opts);
          } else if (opts.eventObservable && opts.event) {
            return wrapEventObservable(opts.event, opts.element);
          } else if (opts.otherPromise) {
            return wrapOtherPromise(pluginObj, methodName, args, opts);
          } else {
            return _wrapPromise(pluginObj, methodName, args, opts);
          }
        };
      };
      /**
       * @param pluginObj
       * @param methodName
       * @param opts
       * @private
       */


      function _wrapInstance(pluginObj, methodName, opts) {
        if (opts === void 0) {
          opts = {};
        }

        return function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (opts.sync) {
            return _callInstance(pluginObj, methodName, args, opts);
          } else if (opts.observable) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
              var pluginResult;

              if (opts.destruct) {
                pluginResult = _callInstance(pluginObj, methodName, args, opts, function () {
                  var args = [];

                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }

                  return observer.next(args);
                }, function () {
                  var args = [];

                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }

                  return observer.error(args);
                });
              } else {
                pluginResult = _callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
              }

              if (pluginResult && pluginResult.error) {
                observer.error(pluginResult.error);
              }

              return function () {
                try {
                  if (opts.clearWithArgs) {
                    return _callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                  }

                  return _callInstance(pluginObj, opts.clearFunction, []);
                } catch (e) {
                  console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                  console.warn(e);
                }
              };
            });
          } else if (opts.otherPromise) {
            return _getPromise(function (resolve, reject) {
              var result;

              if (opts.destruct) {
                result = _callInstance(pluginObj, methodName, args, opts, function () {
                  var args = [];

                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }

                  return resolve(args);
                }, function () {
                  var args = [];

                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }

                  return reject(args);
                });
              } else {
                result = _callInstance(pluginObj, methodName, args, opts, resolve, reject);
              }

              if (result && result.then) {
                result.then(resolve, reject);
              } else {
                reject();
              }
            });
          } else {
            var pluginResult_1, rej_1;

            var p = _getPromise(function (resolve, reject) {
              if (opts.destruct) {
                pluginResult_1 = _callInstance(pluginObj, methodName, args, opts, function () {
                  var args = [];

                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }

                  return resolve(args);
                }, function () {
                  var args = [];

                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }

                  return reject(args);
                });
              } else {
                pluginResult_1 = _callInstance(pluginObj, methodName, args, opts, resolve, reject);
              }

              rej_1 = reject;
            }); // Angular throws an error on unhandled rejection, but in this case we have already printed
            // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
            // to error


            if (pluginResult_1 && pluginResult_1.error) {
              p["catch"](function () {});
              typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
            }

            return p;
          }
        };
      } //# sourceMappingURL=common.js.map

      /***/

    },

    /***/
    531:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-function-override.js ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "cordovaFunctionOverride": function cordovaFunctionOverride() {
          return (
            /* binding */
            _cordovaFunctionOverride
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      69165);
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common */
      9343);
      /**
       * @param pluginObj
       * @param methodName
       */


      function overrideFunction(pluginObj, methodName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
          var availabilityCheck = (0, _common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, methodName);

          if (availabilityCheck === true) {
            var pluginInstance_1 = (0, _common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef());
            pluginInstance_1[methodName] = observer.next.bind(observer);
            return function () {
              return pluginInstance_1[methodName] = function () {};
            };
          } else {
            observer.error(availabilityCheck);
            observer.complete();
          }
        });
      }
      /**
       * @param pluginObj
       * @param methodName
       * @param args
       */


      function _cordovaFunctionOverride(pluginObj, methodName, args) {
        if (args === void 0) {
          args = [];
        }

        return overrideFunction(pluginObj, methodName);
      } //# sourceMappingURL=cordova-function-override.js.map

      /***/

    },

    /***/
    90808:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-instance.js ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "cordovaInstance": function cordovaInstance() {
          return (
            /* binding */
            _cordovaInstance
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common */
      9343);
      /**
       * @param pluginObj
       * @param methodName
       * @param config
       * @param args
       */


      function _cordovaInstance(pluginObj, methodName, config, args) {
        args = Array.from(args);
        return (0, _common__WEBPACK_IMPORTED_MODULE_0__.wrapInstance)(pluginObj, methodName, config).apply(this, args);
      } //# sourceMappingURL=cordova-instance.js.map

      /***/

    },

    /***/
    34070:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-property.js ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "cordovaPropertyGet": function cordovaPropertyGet() {
          return (
            /* binding */
            _cordovaPropertyGet
          );
        },

        /* harmony export */
        "cordovaPropertySet": function cordovaPropertySet() {
          return (
            /* binding */
            _cordovaPropertySet
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common */
      9343);
      /**
       * @param pluginObj
       * @param key
       */


      function _cordovaPropertyGet(pluginObj, key) {
        if ((0, _common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
          return (0, _common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key];
        }

        return null;
      }
      /**
       * @param pluginObj
       * @param key
       * @param value
       */


      function _cordovaPropertySet(pluginObj, key, value) {
        if ((0, _common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
          (0, _common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key] = value;
        }
      } //# sourceMappingURL=cordova-property.js.map

      /***/

    },

    /***/
    43364:
    /*!***************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova.js ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "cordova": function cordova() {
          return (
            /* binding */
            _cordova
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common */
      9343);
      /**
       * @param pluginObj
       * @param methodName
       * @param config
       * @param args
       */


      function _cordova(pluginObj, methodName, config, args) {
        return (0, _common__WEBPACK_IMPORTED_MODULE_0__.wrap)(pluginObj, methodName, config).apply(this, args);
      } //# sourceMappingURL=cordova.js.map

      /***/

    },

    /***/
    70422:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/instance-property.js ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "instancePropertyGet": function instancePropertyGet() {
          return (
            /* binding */
            _instancePropertyGet
          );
        },

        /* harmony export */
        "instancePropertySet": function instancePropertySet() {
          return (
            /* binding */
            _instancePropertySet
          );
        }
        /* harmony export */

      });
      /**
       * @param pluginObj
       * @param key
       */


      function _instancePropertyGet(pluginObj, key) {
        if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
          return pluginObj._objectInstance[key];
        }

        return null;
      }
      /**
       * @param pluginObj
       * @param key
       * @param value
       */


      function _instancePropertySet(pluginObj, key, value) {
        if (pluginObj._objectInstance) {
          pluginObj._objectInstance[key] = value;
        }
      } //# sourceMappingURL=instance-property.js.map

      /***/

    },

    /***/
    60303:
    /*!******************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/interfaces.js ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); //# sourceMappingURL=interfaces.js.map

      /***/

    },

    /***/
    16887:
    /*!**************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/index.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AwesomeCordovaNativePlugin": function AwesomeCordovaNativePlugin() {
          return (
            /* reexport safe */
            _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__.AwesomeCordovaNativePlugin
          );
        },

        /* harmony export */
        "checkAvailability": function checkAvailability() {
          return (
            /* reexport safe */
            _decorators_common__WEBPACK_IMPORTED_MODULE_2__.checkAvailability
          );
        },

        /* harmony export */
        "instanceAvailability": function instanceAvailability() {
          return (
            /* reexport safe */
            _decorators_common__WEBPACK_IMPORTED_MODULE_2__.instanceAvailability
          );
        },

        /* harmony export */
        "wrap": function wrap() {
          return (
            /* reexport safe */
            _decorators_common__WEBPACK_IMPORTED_MODULE_2__.wrap
          );
        },

        /* harmony export */
        "getPromise": function getPromise() {
          return (
            /* reexport safe */
            _decorators_common__WEBPACK_IMPORTED_MODULE_2__.getPromise
          );
        },

        /* harmony export */
        "cordova": function cordova() {
          return (
            /* reexport safe */
            _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__.cordova
          );
        },

        /* harmony export */
        "cordovaFunctionOverride": function cordovaFunctionOverride() {
          return (
            /* reexport safe */
            _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__.cordovaFunctionOverride
          );
        },

        /* harmony export */
        "cordovaInstance": function cordovaInstance() {
          return (
            /* reexport safe */
            _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__.cordovaInstance
          );
        },

        /* harmony export */
        "cordovaPropertyGet": function cordovaPropertyGet() {
          return (
            /* reexport safe */
            _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertyGet
          );
        },

        /* harmony export */
        "cordovaPropertySet": function cordovaPropertySet() {
          return (
            /* reexport safe */
            _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertySet
          );
        },

        /* harmony export */
        "instancePropertyGet": function instancePropertyGet() {
          return (
            /* reexport safe */
            _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertyGet
          );
        },

        /* harmony export */
        "instancePropertySet": function instancePropertySet() {
          return (
            /* reexport safe */
            _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertySet
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bootstrap */
      46367);
      /* harmony import */


      var _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./awesome-cordova-plugin */
      16351);
      /* harmony import */


      var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./decorators/common */
      9343);
      /* harmony import */


      var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./decorators/cordova */
      43364);
      /* harmony import */


      var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./decorators/cordova-function-override */
      531);
      /* harmony import */


      var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./decorators/cordova-instance */
      90808);
      /* harmony import */


      var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./decorators/cordova-property */
      34070);
      /* harmony import */


      var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./decorators/instance-property */
      70422);
      /* harmony import */


      var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./decorators/interfaces */
      60303); // Decorators


      (0, _bootstrap__WEBPACK_IMPORTED_MODULE_0__.checkReady)(); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    91674:
    /*!*************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/util.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "get": function get() {
          return (
            /* binding */
            _get2
          );
        },

        /* harmony export */
        "getPromise": function getPromise() {
          return (
            /* binding */
            _getPromise2
          );
        }
        /* harmony export */

      });
      /**
       * @param element
       * @param path
       * @private
       */


      function _get2(element, path) {
        var paths = path.split('.');
        var obj = element;

        for (var i = 0; i < paths.length; i++) {
          if (!obj) {
            return null;
          }

          obj = obj[paths[i]];
        }

        return obj;
      }
      /**
       * @param callback
       * @private
       */


      function _getPromise2(callback) {
        if (callback === void 0) {
          callback = function callback() {};
        }

        var tryNativePromise = function tryNativePromise() {
          if (typeof Promise === 'function' || typeof window !== 'undefined' && window.Promise) {
            return new Promise(function (resolve, reject) {
              callback(resolve, reject);
            });
          } else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
          }
        };

        return tryNativePromise();
      } //# sourceMappingURL=util.js.map

      /***/

    },

    /***/
    50754:
    /*!**************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/native-audio/__ivy_ngcc__/ngx/index.js ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NativeAudio": function NativeAudio() {
          return (
            /* binding */
            _NativeAudio
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @awesome-cordova-plugins/core */
      16887);

      var _NativeAudio =
      /** @class */
      function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(NativeAudio, _super);

        function NativeAudio() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        NativeAudio.prototype.preloadSimple = function (id, assetPath) {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "preloadSimple", {}, arguments);
        };

        NativeAudio.prototype.preloadComplex = function (id, assetPath, volume, voices, delay) {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "preloadComplex", {}, arguments);
        };

        NativeAudio.prototype.play = function (id, completeCallback) {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "play", {
            "successIndex": 1,
            "errorIndex": 2
          }, arguments);
        };

        NativeAudio.prototype.stop = function (id) {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stop", {}, arguments);
        };

        NativeAudio.prototype.loop = function (id) {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "loop", {}, arguments);
        };

        NativeAudio.prototype.unload = function (id) {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "unload", {}, arguments);
        };

        NativeAudio.prototype.setVolumeForComplexAsset = function (id, volume) {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setVolumeForComplexAsset", {}, arguments);
        };

        NativeAudio.pluginName = "NativeAudio";
        NativeAudio.plugin = "cordova-plugin-nativeaudio";
        NativeAudio.pluginRef = "plugins.NativeAudio";
        NativeAudio.repo = "https://github.com/floatinghotpot/cordova-plugin-nativeaudio";
        NativeAudio.platforms = ["Android", "Browser", "iOS"];

        NativeAudio.ɵfac = /*@__PURE__*/function () {
          var ɵNativeAudio_BaseFactory;
          return function NativeAudio_Factory(t) {
            return (ɵNativeAudio_BaseFactory || (ɵNativeAudio_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NativeAudio)))(t || NativeAudio);
          };
        }();

        NativeAudio.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
          token: NativeAudio,
          factory: function factory(t) {
            return NativeAudio.ɵfac(t);
          }
        });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NativeAudio, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
          }], null, null);
        })();

        return NativeAudio;
      }(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2lucy9uYXRpdmUtYXVkaW8vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0FBQzVGO0FBRTJCLElBbUNNLCtCQUEwQjtBQUFDO0FBRXZDO0FBQXlFO0FBQU0sSUFPbEcsbUNBQWEsYUFBQyxFQUFVLEVBQUUsU0FBaUI7QUFLekIsSUFVbEIsb0NBQWMsYUFBQyxFQUFVLEVBQUUsU0FBaUIsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLEtBQWE7QUFLeEUsSUFVbkIsMEJBQUksYUFBQyxFQUFVLEVBQUUsZ0JBQTJCO0FBT2hDLElBSVosMEJBQUksYUFBQyxFQUFVO0FBS04sSUFNVCwwQkFBSSxhQUFDLEVBQVU7QUFLTixJQU1ULDRCQUFNLGFBQUMsRUFBVTtBQUtOLElBT1gsOENBQXdCLGFBQUMsRUFBVSxFQUFFLE1BQWM7QUFJakI7QUFBNEM7QUFBdUQ7QUFBbUQ7QUFBdUY7K0NBekZoUixVQUFVOzs7OzBCQUNMO0FBQUMsc0JBdkNQO0FBQUUsRUF1QytCLDBCQUEwQjtBQUMxRCxTQURZLFdBQVc7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG4vKipcbiAqIEBuYW1lIE5hdGl2ZSBBdWRpb1xuICogQGRlc2NyaXB0aW9uIE5hdGl2ZSBBdWRpbyBQbGF5YmFja1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOYXRpdmVBdWRpbyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9uYXRpdmUtYXVkaW8vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdGl2ZUF1ZGlvOiBOYXRpdmVBdWRpbykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5wcmVsb2FkU2ltcGxlKCd1bmlxdWVJZDEnLCAncGF0aC90by9maWxlLm1wMycpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAqIHRoaXMubmF0aXZlQXVkaW8ucHJlbG9hZENvbXBsZXgoJ3VuaXF1ZUlkMicsICdwYXRoL3RvL2ZpbGUyLm1wMycsIDEsIDEsIDApLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnBsYXkoJ3VuaXF1ZUlkMScpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAqXG4gKiAvLyBjYW4gb3B0aW9uYWxseSBwYXNzIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGZpbGUgaXMgZG9uZSBwbGF5aW5nXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnBsYXkoJ3VuaXF1ZUlkMScsICgpID0+IGNvbnNvbGUubG9nKCd1bmlxdWVJZDEgaXMgZG9uZSBwbGF5aW5nJykpO1xuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8ubG9vcCgndW5pcXVlSWQyJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8uc2V0Vm9sdW1lRm9yQ29tcGxleEFzc2V0KCd1bmlxdWVJZDInLCAwLjYpLnRoZW4ob25TdWNjZXNzLG9uRXJyb3IpO1xuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8uc3RvcCgndW5pcXVlSWQxJykudGhlbihvblN1Y2Nlc3Msb25FcnJvcik7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby51bmxvYWQoJ3VuaXF1ZUlkMScpLnRoZW4ob25TdWNjZXNzLG9uRXJyb3IpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05hdGl2ZUF1ZGlvJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmF0aXZlYXVkaW8nLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLk5hdGl2ZUF1ZGlvJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9mbG9hdGluZ2hvdHBvdC9jb3Jkb3ZhLXBsdWdpbi1uYXRpdmVhdWRpbycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdGl2ZUF1ZGlvIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogTG9hZHMgYW4gYXVkaW8gZmlsZSBpbnRvIG1lbW9yeS4gT3B0aW1pemVkIGZvciBzaG9ydCBjbGlwcyAvIHNpbmdsZSBzaG90cyAodXAgdG8gZml2ZSBzZWNvbmRzKS4gQ2Fubm90IGJlIHN0b3BwZWQgLyBsb29wZWQuXG4gICAqXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEBwYXJhbSBhc3NldFBhdGgge3N0cmluZ30gIHRoZSByZWxhdGl2ZSBwYXRoIG9yIGFic29sdXRlIFVSTCAoaW5sdWRpbmcgaHR0cDovLykgdG8gdGhlIGF1ZGlvIGFzc2V0LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmVsb2FkU2ltcGxlKGlkOiBzdHJpbmcsIGFzc2V0UGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgYW4gYXVkaW8gZmlsZSBpbnRvIG1lbW9yeS4gT3B0aW1pemVkIGZvciBiYWNrZ3JvdW5kIG11c2ljIC8gYW1iaWVudCBzb3VuZC4gVXNlcyBoaWdobGV2ZWwgbmF0aXZlIEFQSXMgd2l0aCBhIGxhcmdlciBmb290cHJpbnQuIChpT1M6IEFWQXVkaW9QbGF5ZXIpLiBDYW4gYmUgc3RvcHBlZCAvIGxvb3BlZCBhbmQgdXNlZCB3aXRoIG11bHRpcGxlIHZvaWNlcy4gQ2FuIGJlIGZhZGVkIGluIGFuZCBvdXQgdXNpbmcgdGhlIGRlbGF5IHBhcmFtZXRlci5cbiAgICpcbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHBhcmFtIGFzc2V0UGF0aCB7c3RyaW5nfSAgdGhlIHJlbGF0aXZlIHBhdGggb3IgYWJzb2x1dGUgVVJMIChpbmx1ZGluZyBodHRwOi8vKSB0byB0aGUgYXVkaW8gYXNzZXQuXG4gICAqIEBwYXJhbSB2b2x1bWUge251bWJlcn0gdGhlIHZvbHVtZSBvZiB0aGUgcHJlbG9hZGVkIHNvdW5kICgwLjEgdG8gMS4wKVxuICAgKiBAcGFyYW0gdm9pY2VzIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgbXVsdGljaGFubmVsIHZvaWNlcyBhdmFpbGFibGVcbiAgICogQHBhcmFtIGRlbGF5IHtudW1iZXJ9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByZWxvYWRDb21wbGV4KGlkOiBzdHJpbmcsIGFzc2V0UGF0aDogc3RyaW5nLCB2b2x1bWU6IG51bWJlciwgdm9pY2VzOiBudW1iZXIsIGRlbGF5OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQbGF5cyBhbiBhdWRpbyBhc3NldFxuICAgKlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcGFyYW0gY29tcGxldGVDYWxsYmFjayB7RnVuY3Rpb259IG9wdGlvbmFsLiBDYWxsYmFjayB0byBiZSBpbnZva2VkIHdoZW4gYXVkaW8gaXMgZG9uZSBwbGF5aW5nXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHBsYXkoaWQ6IHN0cmluZywgY29tcGxldGVDYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgcGxheWluZyBhbiBhdWRpb1xuICAgKlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29wcyBhbiBhdWRpbyBhc3NldCBpbmZpbml0ZWx5LCB0aGlzIG9ubHkgd29ya3MgZm9yIGNvbXBsZXggYXNzZXRzXG4gICAqXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvb3AoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVubG9hZHMgYW4gYXVkaW8gZmlsZSBmcm9tIG1lbW9yeVxuICAgKlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bmxvYWQoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHZvbHVtZSBmb3IgcHJlbG9hZGVkIGNvbXBsZXggYXNzZXRzLlxuICAgKlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcGFyYW0gdm9sdW1lIHtudW1iZXJ9IHRoZSB2b2x1bWUgb2YgdGhlIGF1ZGlvIGFzc2V0ICgwLjEgdG8gMS4wKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRWb2x1bWVGb3JDb21wbGV4QXNzZXQoaWQ6IHN0cmluZywgdm9sdW1lOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

      /***/

    },

    /***/
    22321:
    /*!********************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/screen-orientation/__ivy_ngcc__/ngx/index.js ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScreenOrientation": function ScreenOrientation() {
          return (
            /* binding */
            _ScreenOrientation
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @awesome-cordova-plugins/core */
      16887);

      var _ScreenOrientation =
      /** @class */
      function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ScreenOrientation, _super);

        function ScreenOrientation() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * Convenience enum for possible orientations
           */


          _this.ORIENTATIONS = {
            PORTRAIT_PRIMARY: 'portrait-primary',
            PORTRAIT_SECONDARY: 'portrait-secondary',
            LANDSCAPE_PRIMARY: 'landscape-primary',
            LANDSCAPE_SECONDARY: 'landscape-secondary',
            PORTRAIT: 'portrait',
            LANDSCAPE: 'landscape',
            ANY: 'any'
          };
          return _this;
        }

        ScreenOrientation.prototype.onChange = function () {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "onChange", {
            "eventObservable": true,
            "event": "orientationchange",
            "element": "window"
          }, arguments);
        };

        ScreenOrientation.prototype.lock = function (orientation) {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "lock", {
            "otherPromise": true
          }, arguments);
        };

        ScreenOrientation.prototype.unlock = function () {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "unlock", {
            "sync": true
          }, arguments);
        };

        Object.defineProperty(ScreenOrientation.prototype, "type", {
          get: function get() {
            return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "type");
          },
          set: function set(value) {
            (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "type", value);
          },
          enumerable: false,
          configurable: true
        });
        ScreenOrientation.pluginName = "ScreenOrientation";
        ScreenOrientation.plugin = "cordova-plugin-screen-orientation";
        ScreenOrientation.pluginRef = "screen.orientation";
        ScreenOrientation.repo = "https://github.com/apache/cordova-plugin-screen-orientation";
        ScreenOrientation.platforms = ["Android", "iOS", "Windows"];

        ScreenOrientation.ɵfac = /*@__PURE__*/function () {
          var ɵScreenOrientation_BaseFactory;
          return function ScreenOrientation_Factory(t) {
            return (ɵScreenOrientation_BaseFactory || (ɵScreenOrientation_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ScreenOrientation)))(t || ScreenOrientation);
          };
        }();

        ScreenOrientation.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
          token: ScreenOrientation,
          factory: function factory(t) {
            return ScreenOrientation.ɵfac(t);
          }
        });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ScreenOrientation, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
          }], null, null);
        })();

        return ScreenOrientation;
      }(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2lucy9zY3JlZW4tb3JpZW50YXRpb24vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sK0VBQWdFLE1BQU0sK0JBQStCLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFDbEM7QUFHMEIsSUFvRGEscUNBQTBCO0FBQUM7QUFFdkM7QUFHSyxRQUo5QjtBQUNGO0FBRUEsV0FESztBQUNMLFFBQUUsa0JBQVksR0FBRztBQUNqQixZQUFJLGdCQUFnQixFQUFFLGtCQUFrQjtBQUN4QyxZQUFJLGtCQUFrQixFQUFFLG9CQUFvQjtBQUM1QyxZQUFJLGlCQUFpQixFQUFFLG1CQUFtQjtBQUMxQyxZQUFJLG1CQUFtQixFQUFFLHFCQUFxQjtBQUM5QyxZQUFJLFFBQVEsRUFBRSxVQUFVO0FBQ3hCLFlBQUksU0FBUyxFQUFFLFdBQVc7QUFDMUIsWUFBSSxHQUFHLEVBQUUsS0FBSztBQUNkLFNBQUcsQ0FBQztBQUNKO0FBQ2dCO0FBQU0sSUFTcEIsb0NBQVE7QUFRRSxJQUlWLGdDQUFJLGFBQUMsV0FBbUI7QUFLTyxJQUcvQixrQ0FBTTtBQUtBLDBCQUNOLG1DQUFJO0FBQUk7QUFFcUQ7QUFBNEU7QUFBMkI7QUFBMkI7QUFBUTtBQUF3RDtBQUFvRTtBQUF3RDtBQUE0RjtxREFwRHhkLFVBQVU7Ozs7MEJBQ0w7QUFBQyw0QkExRFA7QUFBRSxFQTBEcUMsMEJBQTBCO0FBQ2hFLFNBRFksaUJBQWlCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgU2NyZWVuIE9yaWVudGF0aW9uXG4gKiBAcHJlbWllciBzY3JlZW4tb3JpZW50YXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gdG8gc2V0L2xvY2sgdGhlIHNjcmVlbiBvcmllbnRhdGlvbiBpbiBhIGNvbW1vbiB3YXkuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1zY3JlZW4tb3JpZW50YXRpb25gLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbU2NyZWVuIE9yaWVudGF0aW9uIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXNjcmVlbi1vcmllbnRhdGlvbikuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNjcmVlbk9yaWVudGF0aW9uIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NjcmVlbi1vcmllbnRhdGlvbi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NyZWVuT3JpZW50YXRpb246IFNjcmVlbk9yaWVudGF0aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogLy8gZ2V0IGN1cnJlbnRcbiAqIGNvbnNvbGUubG9nKHRoaXMuc2NyZWVuT3JpZW50YXRpb24udHlwZSk7IC8vIGxvZ3MgdGhlIGN1cnJlbnQgb3JpZW50YXRpb24sIGV4YW1wbGU6ICdsYW5kc2NhcGUnXG4gKlxuICogLy8gc2V0IHRvIGxhbmRzY2FwZVxuICogdGhpcy5zY3JlZW5PcmllbnRhdGlvbi5sb2NrKHRoaXMuc2NyZWVuT3JpZW50YXRpb24uT1JJRU5UQVRJT05TLkxBTkRTQ0FQRSk7XG4gKlxuICogLy8gYWxsb3cgdXNlciByb3RhdGVcbiAqIHRoaXMuc2NyZWVuT3JpZW50YXRpb24udW5sb2NrKCk7XG4gKlxuICogLy8gZGV0ZWN0IG9yaWVudGF0aW9uIGNoYW5nZXNcbiAqIHRoaXMuc2NyZWVuT3JpZW50YXRpb24ub25DaGFuZ2UoKS5zdWJzY3JpYmUoXG4gKiAgICAoKSA9PiB7XG4gKiAgICAgICAgY29uc29sZS5sb2coXCJPcmllbnRhdGlvbiBDaGFuZ2VkXCIpO1xuICogICAgfVxuICogKTtcbiAqXG4gKiBgYGBcbiAqIEBhZHZhbmNlZFxuICpcbiAqIEFjY2VwdGVkIG9yaWVudGF0aW9uIHZhbHVlczpcbiAqXG4gKiB8IFZhbHVlICAgICAgICAgICAgICAgICAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IHBvcnRyYWl0LXByaW1hcnkgICAgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGluIHRoZSBwcmltYXJ5IHBvcnRyYWl0IG1vZGUuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IHBvcnRyYWl0LXNlY29uZGFyeSAgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGluIHRoZSBzZWNvbmRhcnkgcG9ydHJhaXQgbW9kZS4gICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IGxhbmRzY2FwZS1wcmltYXJ5ICAgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGluIHRoZSBwcmltYXJ5IGxhbmRzY2FwZSBtb2RlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IGxhbmRzY2FwZS1zZWNvbmRhcnkgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGluIHRoZSBzZWNvbmRhcnkgbGFuZHNjYXBlIG1vZGUuICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IHBvcnRyYWl0ICAgICAgICAgICAgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGVpdGhlciBwb3J0cmFpdC1wcmltYXJ5IG9yIHBvcnRyYWl0LXNlY29uZGFyeSAoc2Vuc29yKS4gICB8XG4gKiB8IGxhbmRzY2FwZSAgICAgICAgICAgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGVpdGhlciBsYW5kc2NhcGUtcHJpbWFyeSBvciBsYW5kc2NhcGUtc2Vjb25kYXJ5IChzZW5zb3IpLiB8XG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2NyZWVuT3JpZW50YXRpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zY3JlZW4tb3JpZW50YXRpb24nLFxuICBwbHVnaW5SZWY6ICdzY3JlZW4ub3JpZW50YXRpb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1zY3JlZW4tb3JpZW50YXRpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY3JlZW5PcmllbnRhdGlvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGVudW0gZm9yIHBvc3NpYmxlIG9yaWVudGF0aW9uc1xuICAgKi9cbiAgT1JJRU5UQVRJT05TID0ge1xuICAgIFBPUlRSQUlUX1BSSU1BUlk6ICdwb3J0cmFpdC1wcmltYXJ5JyxcbiAgICBQT1JUUkFJVF9TRUNPTkRBUlk6ICdwb3J0cmFpdC1zZWNvbmRhcnknLFxuICAgIExBTkRTQ0FQRV9QUklNQVJZOiAnbGFuZHNjYXBlLXByaW1hcnknLFxuICAgIExBTkRTQ0FQRV9TRUNPTkRBUlk6ICdsYW5kc2NhcGUtc2Vjb25kYXJ5JyxcbiAgICBQT1JUUkFJVDogJ3BvcnRyYWl0JyxcbiAgICBMQU5EU0NBUEU6ICdsYW5kc2NhcGUnLFxuICAgIEFOWTogJ2FueScsXG4gIH07XG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gb3JpZW50YXRpb24gY2hhbmdlIGV2ZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ29yaWVudGF0aW9uY2hhbmdlJyxcbiAgICBlbGVtZW50OiAnd2luZG93JyxcbiAgfSlcbiAgb25DaGFuZ2UoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvY2sgdGhlIG9yaWVudGF0aW9uIHRvIHRoZSBwYXNzZWQgdmFsdWUuXG4gICAqIFNlZSBiZWxvdyBmb3IgYWNjZXB0ZWQgdmFsdWVzXG4gICAqXG4gICAqIEBwYXJhbSBvcmllbnRhdGlvbiB7c3RyaW5nfSBUaGUgb3JpZW50YXRpb24gd2hpY2ggc2hvdWxkIGJlIGxvY2tlZC4gQWNjZXB0ZWQgdmFsdWVzIHNlZSB0YWJsZSBhYm92ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGxvY2sob3JpZW50YXRpb246IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVubG9jayBhbmQgYWxsb3cgYWxsIG9yaWVudGF0aW9ucy5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1bmxvY2soKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgb3JpZW50YXRpb24gb2YgdGhlIGRldmljZS5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB0eXBlOiBzdHJpbmc7XG59XG4iXX0=

      /***/

    },

    /***/
    42848:
    /*!************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/status-bar/__ivy_ngcc__/ngx/index.js ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StatusBar": function StatusBar() {
          return (
            /* binding */
            _StatusBar
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @awesome-cordova-plugins/core */
      16887);

      var _StatusBar =
      /** @class */
      function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(StatusBar, _super);

        function StatusBar() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        StatusBar.prototype.overlaysWebView = function (doesOverlay) {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "overlaysWebView", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.styleDefault = function () {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "styleDefault", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.styleLightContent = function () {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "styleLightContent", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.styleBlackTranslucent = function () {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "styleBlackTranslucent", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.styleBlackOpaque = function () {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "styleBlackOpaque", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.backgroundColorByName = function (colorName) {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "backgroundColorByName", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.backgroundColorByHexString = function (hexString) {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "backgroundColorByHexString", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.hide = function () {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hide", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.show = function () {
          return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "show", {
            "sync": true
          }, arguments);
        };

        Object.defineProperty(StatusBar.prototype, "isVisible", {
          get: function get() {
            return (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "isVisible");
          },
          set: function set(value) {
            (0, _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "isVisible", value);
          },
          enumerable: false,
          configurable: true
        });
        StatusBar.pluginName = "StatusBar";
        StatusBar.plugin = "cordova-plugin-statusbar";
        StatusBar.pluginRef = "StatusBar";
        StatusBar.repo = "https://github.com/apache/cordova-plugin-statusbar";
        StatusBar.platforms = ["Android", "iOS", "Windows"];

        StatusBar.ɵfac = /*@__PURE__*/function () {
          var ɵStatusBar_BaseFactory;
          return function StatusBar_Factory(t) {
            return (ɵStatusBar_BaseFactory || (ɵStatusBar_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](StatusBar)))(t || StatusBar);
          };
        }();

        StatusBar.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
          token: StatusBar,
          factory: function factory(t) {
            return StatusBar.ɵfac(t);
          }
        });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](StatusBar, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
          }], null, null);
        })();

        return StatusBar;
      }(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2lucy9zdGF0dXMtYmFyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLCtFQUFnRSxNQUFNLCtCQUErQixDQUFDOztBQUM3RztBQUlJLElBNEIyQiw2QkFBMEI7QUFBQztBQUV2QztBQUdWO0FBQU0sSUFXYixtQ0FBZSxhQUFDLFdBQW9CO0FBRzJCLElBSy9ELGdDQUFZO0FBSVosSUFJQSxxQ0FBaUI7QUFJaEIsSUFJRCx5Q0FBcUI7QUFLakIsSUFHSixvQ0FBZ0I7QUFJTixJQVNWLHlDQUFxQixhQUFDLFNBQWlCO0FBRzhCLElBU3JFLDhDQUEwQixhQUFDLFNBQWlCO0FBUzlDLElBREUsd0JBQUk7QUFRSixJQUFBLHdCQUFJO0FBRWlFLDBCQXRGckUsZ0NBQVM7QUFBSTtBQUcrQztBQUdWO0FBQTJCO0FBRzlFO0FBQVE7QUFFbUI7QUFHQztBQUM1QjtBQU9ROzZDQTVCUixVQUFVOzs7OzBCQUNMO0FBQUMsb0JBbENQO0FBQUUsRUFrQzZCLDBCQUEwQjtBQUN4RCxTQURZLFNBQVM7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTdGF0dXMgQmFyXG4gKiBAcHJlbWllciBzdGF0dXNiYXJcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBNYW5hZ2UgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIG5hdGl2ZSBzdGF0dXMgYmFyLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1N0YXR1c0JhciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1zdGF0dXNiYXIpLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc3RhdHVzLWJhci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdHVzQmFyOiBTdGF0dXNCYXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIGxldCBzdGF0dXMgYmFyIG92ZXJsYXkgd2Vidmlld1xuICogdGhpcy5zdGF0dXNCYXIub3ZlcmxheXNXZWJWaWV3KHRydWUpO1xuICpcbiAqIC8vIHNldCBzdGF0dXMgYmFyIHRvIHdoaXRlXG4gKiB0aGlzLnN0YXR1c0Jhci5iYWNrZ3JvdW5kQ29sb3JCeUhleFN0cmluZygnI2ZmZmZmZicpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3RhdHVzQmFyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyJyxcbiAgcGx1Z2luUmVmOiAnU3RhdHVzQmFyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RhdHVzQmFyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogV2hldGhlciB0aGUgU3RhdHVzQmFyIGlzIGN1cnJlbnRseSB2aXNpYmxlIG9yIG5vdC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBpc1Zpc2libGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB3aGV0aGVyIHRoZSBzdGF0dXMgYmFyIG92ZXJsYXlzIHRoZSBtYWluIGFwcCB2aWV3LiBUaGUgZGVmYXVsdFxuICAgKiBpcyB0cnVlLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRvZXNPdmVybGF5ICBXaGV0aGVyIHRoZSBzdGF0dXMgYmFyIG92ZXJsYXlzIHRoZSBtYWluIGFwcCB2aWV3LlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG92ZXJsYXlzV2ViVmlldyhkb2VzT3ZlcmxheTogYm9vbGVhbikge31cblxuICAvKipcbiAgICogVXNlIHRoZSBkZWZhdWx0IHN0YXR1c2JhciAoZGFyayB0ZXh0LCBmb3IgbGlnaHQgYmFja2dyb3VuZHMpLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0eWxlRGVmYXVsdCgpIHt9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGUgbGlnaHRDb250ZW50IHN0YXR1c2JhciAobGlnaHQgdGV4dCwgZm9yIGRhcmsgYmFja2dyb3VuZHMpLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0eWxlTGlnaHRDb250ZW50KCkge31cblxuICAvKipcbiAgICogVXNlIHRoZSBibGFja1RyYW5zbHVjZW50IHN0YXR1c2JhciAobGlnaHQgdGV4dCwgZm9yIGRhcmsgYmFja2dyb3VuZHMpLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0eWxlQmxhY2tUcmFuc2x1Y2VudCgpIHt9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGUgYmxhY2tPcGFxdWUgc3RhdHVzYmFyIChsaWdodCB0ZXh0LCBmb3IgZGFyayBiYWNrZ3JvdW5kcykuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3R5bGVCbGFja09wYXF1ZSgpIHt9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3RhdHVzIGJhciB0byBhIHNwZWNpZmljIG5hbWVkIGNvbG9yLiBWYWxpZCBvcHRpb25zOlxuICAgKiBibGFjaywgZGFya0dyYXksIGxpZ2h0R3JheSwgd2hpdGUsIGdyYXksIHJlZCwgZ3JlZW4sIGJsdWUsIGN5YW4sIHllbGxvdywgbWFnZW50YSwgb3JhbmdlLCBwdXJwbGUsIGJyb3duLlxuICAgKlxuICAgKiBpT1Mgbm90ZTogeW91IG11c3QgY2FsbCBTdGF0dXNCYXIub3ZlcmxheXNXZWJWaWV3KGZhbHNlKSB0byBlbmFibGUgY29sb3IgY2hhbmdpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvck5hbWUgIFRoZSBuYW1lIG9mIHRoZSBjb2xvciAoZnJvbSBhYm92ZSlcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBiYWNrZ3JvdW5kQ29sb3JCeU5hbWUoY29sb3JOYW1lOiBzdHJpbmcpIHt9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3RhdHVzIGJhciB0byBhIHNwZWNpZmljIGhleCBjb2xvciAoQ1NTIHNob3J0aGFuZCBzdXBwb3J0ZWQhKS5cbiAgICpcbiAgICogaU9TIG5vdGU6IHlvdSBtdXN0IGNhbGwgU3RhdHVzQmFyLm92ZXJsYXlzV2ViVmlldyhmYWxzZSkgdG8gZW5hYmxlIGNvbG9yIGNoYW5naW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4U3RyaW5nICBUaGUgaGV4IHZhbHVlIG9mIHRoZSBjb2xvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBiYWNrZ3JvdW5kQ29sb3JCeUhleFN0cmluZyhoZXhTdHJpbmc6IHN0cmluZykge31cblxuICAvKipcbiAgICogSGlkZSB0aGUgU3RhdHVzQmFyXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaGlkZSgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIFN0YXR1c0JhclxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNob3coKSB7fVxufVxuIl19

      /***/

    },

    /***/
    19800:
    /*!*************************************************************!*\
      !*** ./node_modules/page-flip/dist/js/page-flip.browser.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      !function (t, e) {
        true ? e(exports) : 0;
      }(this, function (t) {
        "use strict";

        var e = /*#__PURE__*/function () {
          function e(t, _e) {
            _classCallCheck(this, e);

            this.state = {
              angle: 0,
              area: [],
              position: {
                x: 0,
                y: 0
              },
              hardAngle: 0,
              hardDrawingAngle: 0
            }, this.createdDensity = _e, this.nowDrawingDensity = this.createdDensity, this.render = t;
          }

          _createClass(e, [{
            key: "setDensity",
            value: function setDensity(t) {
              this.createdDensity = t, this.nowDrawingDensity = t;
            }
          }, {
            key: "setDrawingDensity",
            value: function setDrawingDensity(t) {
              this.nowDrawingDensity = t;
            }
          }, {
            key: "setPosition",
            value: function setPosition(t) {
              this.state.position = t;
            }
          }, {
            key: "setAngle",
            value: function setAngle(t) {
              this.state.angle = t;
            }
          }, {
            key: "setArea",
            value: function setArea(t) {
              this.state.area = t;
            }
          }, {
            key: "setHardDrawingAngle",
            value: function setHardDrawingAngle(t) {
              this.state.hardDrawingAngle = t;
            }
          }, {
            key: "setHardAngle",
            value: function setHardAngle(t) {
              this.state.hardAngle = t, this.state.hardDrawingAngle = t;
            }
          }, {
            key: "setOrientation",
            value: function setOrientation(t) {
              this.orientation = t;
            }
          }, {
            key: "getDrawingDensity",
            value: function getDrawingDensity() {
              return this.nowDrawingDensity;
            }
          }, {
            key: "getDensity",
            value: function getDensity() {
              return this.createdDensity;
            }
          }, {
            key: "getHardAngle",
            value: function getHardAngle() {
              return this.state.hardAngle;
            }
          }]);

          return e;
        }();

        var i = /*#__PURE__*/function (_e2) {
          _inherits(i, _e2);

          var _super2 = _createSuper(i);

          function i(t, e, _i2) {
            var _this2;

            _classCallCheck(this, i);

            _this2 = _super2.call(this, t, _i2), _this2.image = null, _this2.isLoad = !1, _this2.loadingAngle = 0, _this2.image = new Image(), _this2.image.src = e;
            return _this2;
          }

          _createClass(i, [{
            key: "draw",
            value: function draw(t) {
              var e = this.render.getContext(),
                  _i3 = this.render.convertToGlobal(this.state.position),
                  s = this.render.getRect().pageWidth,
                  n = this.render.getRect().height;

              e.save(), e.translate(_i3.x, _i3.y), e.beginPath();

              var _iterator = _createForOfIteratorHelper(this.state.area),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _t = _step.value;
                  null !== _t && (_t = this.render.convertToGlobal(_t), e.lineTo(_t.x - _i3.x, _t.y - _i3.y));
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              e.rotate(this.state.angle), e.clip(), this.isLoad ? e.drawImage(this.image, 0, 0, s, n) : this.drawLoader(e, {
                x: 0,
                y: 0
              }, s, n), e.restore();
            }
          }, {
            key: "simpleDraw",
            value: function simpleDraw(t) {
              var e = this.render.getRect(),
                  _i4 = this.render.getContext(),
                  s = e.pageWidth,
                  n = e.height,
                  h = 1 === t ? e.left + e.pageWidth : e.left,
                  r = e.top;

              this.isLoad ? _i4.drawImage(this.image, h, r, s, n) : this.drawLoader(_i4, {
                x: h,
                y: r
              }, s, n);
            }
          }, {
            key: "drawLoader",
            value: function drawLoader(t, e, _i5, s) {
              t.beginPath(), t.strokeStyle = "rgb(200, 200, 200)", t.fillStyle = "rgb(255, 255, 255)", t.lineWidth = 1, t.rect(e.x + 1, e.y + 1, _i5 - 1, s - 1), t.stroke(), t.fill();
              var n = {
                x: e.x + _i5 / 2,
                y: e.y + s / 2
              };
              t.beginPath(), t.lineWidth = 10, t.arc(n.x, n.y, 20, this.loadingAngle, 3 * Math.PI / 2 + this.loadingAngle), t.stroke(), t.closePath(), this.loadingAngle += .07, this.loadingAngle >= 2 * Math.PI && (this.loadingAngle = 0);
            }
          }, {
            key: "load",
            value: function load() {
              var _this3 = this;

              this.isLoad || (this.image.onload = function () {
                _this3.isLoad = !0;
              });
            }
          }, {
            key: "newTemporaryCopy",
            value: function newTemporaryCopy() {
              return this;
            }
          }, {
            key: "getTemporaryCopy",
            value: function getTemporaryCopy() {
              return this;
            }
          }, {
            key: "hideTemporaryCopy",
            value: function hideTemporaryCopy() {}
          }]);

          return i;
        }(e);

        var s = /*#__PURE__*/function () {
          function s(t, e) {
            _classCallCheck(this, s);

            this.pages = [], this.currentPageIndex = 0, this.currentSpreadIndex = 0, this.landscapeSpread = [], this.portraitSpread = [], this.render = e, this.app = t, this.currentPageIndex = 0, this.isShowCover = this.app.getSettings().showCover;
          }

          _createClass(s, [{
            key: "destroy",
            value: function destroy() {
              this.pages = [];
            }
          }, {
            key: "createSpread",
            value: function createSpread() {
              this.landscapeSpread = [], this.portraitSpread = [];

              for (var _t2 = 0; _t2 < this.pages.length; _t2++) {
                this.portraitSpread.push([_t2]);
              }

              var t = 0;
              this.isShowCover && (this.pages[0].setDensity("hard"), this.landscapeSpread.push([t]), t++);

              for (var _e3 = t; _e3 < this.pages.length; _e3 += 2) {
                _e3 < this.pages.length - 1 ? this.landscapeSpread.push([_e3, _e3 + 1]) : (this.landscapeSpread.push([_e3]), this.pages[_e3].setDensity("hard"));
              }
            }
          }, {
            key: "getSpread",
            value: function getSpread() {
              return "landscape" === this.render.getOrientation() ? this.landscapeSpread : this.portraitSpread;
            }
          }, {
            key: "getSpreadIndexByPage",
            value: function getSpreadIndexByPage(t) {
              var e = this.getSpread();

              for (var _i6 = 0; _i6 < e.length; _i6++) {
                if (t === e[_i6][0] || t === e[_i6][1]) return _i6;
              }

              return null;
            }
          }, {
            key: "getPageCount",
            value: function getPageCount() {
              return this.pages.length;
            }
          }, {
            key: "getPages",
            value: function getPages() {
              return this.pages;
            }
          }, {
            key: "getPage",
            value: function getPage(t) {
              if (t >= 0 && t < this.pages.length) return this.pages[t];
              throw new Error("Invalid page number");
            }
          }, {
            key: "nextBy",
            value: function nextBy(t) {
              var e = this.pages.indexOf(t);
              return e < this.pages.length - 1 ? this.pages[e + 1] : null;
            }
          }, {
            key: "prevBy",
            value: function prevBy(t) {
              var e = this.pages.indexOf(t);
              return e > 0 ? this.pages[e - 1] : null;
            }
          }, {
            key: "getFlippingPage",
            value: function getFlippingPage(t) {
              var e = this.currentSpreadIndex;
              if ("portrait" === this.render.getOrientation()) return 0 === t ? this.pages[e].newTemporaryCopy() : this.pages[e - 1];
              {
                var _i7 = 0 === t ? this.getSpread()[e + 1] : this.getSpread()[e - 1];

                return 1 === _i7.length || 0 === t ? this.pages[_i7[0]] : this.pages[_i7[1]];
              }
            }
          }, {
            key: "getBottomPage",
            value: function getBottomPage(t) {
              var e = this.currentSpreadIndex;
              if ("portrait" === this.render.getOrientation()) return 0 === t ? this.pages[e + 1] : this.pages[e - 1];
              {
                var _i8 = 0 === t ? this.getSpread()[e + 1] : this.getSpread()[e - 1];

                return 1 === _i8.length ? this.pages[_i8[0]] : 0 === t ? this.pages[_i8[1]] : this.pages[_i8[0]];
              }
            }
          }, {
            key: "showNext",
            value: function showNext() {
              this.currentSpreadIndex < this.getSpread().length && (this.currentSpreadIndex++, this.showSpread());
            }
          }, {
            key: "showPrev",
            value: function showPrev() {
              this.currentSpreadIndex > 0 && (this.currentSpreadIndex--, this.showSpread());
            }
          }, {
            key: "getCurrentPageIndex",
            value: function getCurrentPageIndex() {
              return this.currentPageIndex;
            }
          }, {
            key: "show",
            value: function show() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
              if (null === t && (t = this.currentPageIndex), t < 0 || t >= this.pages.length) return;
              var e = this.getSpreadIndexByPage(t);
              null !== e && (this.currentSpreadIndex = e, this.showSpread());
            }
          }, {
            key: "getCurrentSpreadIndex",
            value: function getCurrentSpreadIndex() {
              return this.currentSpreadIndex;
            }
          }, {
            key: "setCurrentSpreadIndex",
            value: function setCurrentSpreadIndex(t) {
              if (!(t >= 0 && t < this.getSpread().length)) throw new Error("Invalid page");
              this.currentSpreadIndex = t;
            }
          }, {
            key: "showSpread",
            value: function showSpread() {
              var t = this.getSpread()[this.currentSpreadIndex];
              2 === t.length ? (this.render.setLeftPage(this.pages[t[0]]), this.render.setRightPage(this.pages[t[1]])) : "landscape" === this.render.getOrientation() && t[0] === this.pages.length - 1 ? (this.render.setLeftPage(this.pages[t[0]]), this.render.setRightPage(null)) : (this.render.setLeftPage(null), this.render.setRightPage(this.pages[t[0]])), this.currentPageIndex = t[0], this.app.updatePageIndex(this.currentPageIndex);
            }
          }]);

          return s;
        }();

        var n = /*#__PURE__*/function (_s) {
          _inherits(n, _s);

          var _super3 = _createSuper(n);

          function n(t, e, i) {
            var _this4;

            _classCallCheck(this, n);

            _this4 = _super3.call(this, t, e), _this4.imagesHref = i;
            return _this4;
          }

          _createClass(n, [{
            key: "load",
            value: function load() {
              var _iterator2 = _createForOfIteratorHelper(this.imagesHref),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _t3 = _step2.value;

                  var _e4 = new i(this.render, _t3, "soft");

                  _e4.load(), this.pages.push(_e4);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              this.createSpread();
            }
          }]);

          return n;
        }(s);

        var h = /*#__PURE__*/function () {
          function h() {
            _classCallCheck(this, h);
          }

          _createClass(h, null, [{
            key: "GetDistanceBetweenTwoPoint",
            value: function GetDistanceBetweenTwoPoint(t, e) {
              return null === t || null === e ? 1 / 0 : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
            }
          }, {
            key: "GetSegmentLength",
            value: function GetSegmentLength(t) {
              return h.GetDistanceBetweenTwoPoint(t[0], t[1]);
            }
          }, {
            key: "GetAngleBetweenTwoLine",
            value: function GetAngleBetweenTwoLine(t, e) {
              var i = t[0].y - t[1].y,
                  s = e[0].y - e[1].y,
                  n = t[1].x - t[0].x,
                  _h = e[1].x - e[0].x;

              return Math.acos((i * s + n * _h) / (Math.sqrt(i * i + n * n) * Math.sqrt(s * s + _h * _h)));
            }
          }, {
            key: "PointInRect",
            value: function PointInRect(t, e) {
              return null === e ? null : e.x >= t.left && e.x <= t.width + t.left && e.y >= t.top && e.y <= t.top + t.height ? e : null;
            }
          }, {
            key: "GetRotatedPoint",
            value: function GetRotatedPoint(t, e, i) {
              return {
                x: t.x * Math.cos(i) + t.y * Math.sin(i) + e.x,
                y: t.y * Math.cos(i) - t.x * Math.sin(i) + e.y
              };
            }
          }, {
            key: "LimitPointToCircle",
            value: function LimitPointToCircle(t, e, i) {
              if (h.GetDistanceBetweenTwoPoint(t, i) <= e) return i;
              var s = t.x,
                  n = t.y,
                  r = i.x,
                  o = i.y;
              var a = Math.sqrt(Math.pow(e, 2) * Math.pow(s - r, 2) / (Math.pow(s - r, 2) + Math.pow(n - o, 2))) + s;
              i.x < 0 && (a *= -1);
              var g = (a - s) * (n - o) / (s - r) + n;
              return s - r + n === 0 && (g = e), {
                x: a,
                y: g
              };
            }
          }, {
            key: "GetIntersectBetweenTwoSegment",
            value: function GetIntersectBetweenTwoSegment(t, e, i) {
              return h.PointInRect(t, h.GetIntersectBeetwenTwoLine(e, i));
            }
          }, {
            key: "GetIntersectBeetwenTwoLine",
            value: function GetIntersectBeetwenTwoLine(t, e) {
              var i = t[0].y - t[1].y,
                  s = e[0].y - e[1].y,
                  n = t[1].x - t[0].x,
                  _h2 = e[1].x - e[0].x,
                  r = t[0].x * t[1].y - t[1].x * t[0].y,
                  o = e[0].x * e[1].y - e[1].x * e[0].y,
                  a = i * o - s * r,
                  g = n * o - _h2 * r,
                  l = -(r * _h2 - o * n) / (i * _h2 - s * n),
                  d = -(i * o - s * r) / (i * _h2 - s * n);

              if (isFinite(l) && isFinite(d)) return {
                x: l,
                y: d
              };
              if (Math.abs(a - g) < .1) throw new Error("Segment included");
              return null;
            }
          }, {
            key: "GetCordsFromTwoPoint",
            value: function GetCordsFromTwoPoint(t, e) {
              var i = Math.abs(t.x - e.x),
                  s = Math.abs(t.y - e.y),
                  n = Math.max(i, s),
                  _h3 = [t];

              function r(t, e, i, s, n) {
                return e > t ? t + n * (i / s) : e < t ? t - n * (i / s) : t;
              }

              for (var _o = 1; _o <= n; _o += 1) {
                _h3.push({
                  x: r(t.x, e.x, i, n, _o),
                  y: r(t.y, e.y, s, n, _o)
                });
              }

              return _h3;
            }
          }]);

          return h;
        }();

        var r = /*#__PURE__*/function (_e5) {
          _inherits(r, _e5);

          var _super4 = _createSuper(r);

          function r(t, e, i) {
            var _this5;

            _classCallCheck(this, r);

            _this5 = _super4.call(this, t, i), _this5.copiedElement = null, _this5.temporaryCopy = null, _this5.isLoad = !1, _this5.element = e, _this5.element.classList.add("stf__item"), _this5.element.classList.add("--" + i);
            return _this5;
          }

          _createClass(r, [{
            key: "newTemporaryCopy",
            value: function newTemporaryCopy() {
              return "hard" === this.nowDrawingDensity ? this : (null === this.temporaryCopy && (this.copiedElement = this.element.cloneNode(!0), this.element.parentElement.appendChild(this.copiedElement), this.temporaryCopy = new r(this.render, this.copiedElement, this.nowDrawingDensity)), this.getTemporaryCopy());
            }
          }, {
            key: "getTemporaryCopy",
            value: function getTemporaryCopy() {
              return this.temporaryCopy;
            }
          }, {
            key: "hideTemporaryCopy",
            value: function hideTemporaryCopy() {
              null !== this.temporaryCopy && (this.copiedElement.remove(), this.copiedElement = null, this.temporaryCopy = null);
            }
          }, {
            key: "draw",
            value: function draw(t) {
              var e = t || this.nowDrawingDensity,
                  i = this.render.convertToGlobal(this.state.position),
                  s = this.render.getRect().pageWidth,
                  n = this.render.getRect().height;
              this.element.classList.remove("--simple");
              var h = "\n            display: block;\n            z-index: ".concat(this.element.style.zIndex, ";\n            left: 0;\n            top: 0;\n            width: ").concat(s, "px;\n            height: ").concat(n, "px;\n        ");
              "hard" === e ? this.drawHard(h) : this.drawSoft(i, h);
            }
          }, {
            key: "drawHard",
            value: function drawHard() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
              var e = this.render.getRect().left + this.render.getRect().width / 2,
                  i = this.state.hardDrawingAngle,
                  s = t + "\n                backface-visibility: hidden;\n                -webkit-backface-visibility: hidden;\n                clip-path: none;\n                -webkit-clip-path: none;\n            " + (0 === this.orientation ? "transform-origin: ".concat(this.render.getRect().pageWidth, "px 0; \n                   transform: translate3d(0, 0, 0) rotateY(").concat(i, "deg);") : "transform-origin: 0 0; \n                   transform: translate3d(".concat(e, "px, 0, 0) rotateY(").concat(i, "deg);"));
              this.element.style.cssText = s;
            }
          }, {
            key: "drawSoft",
            value: function drawSoft(t) {
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
              var i = "polygon( ";

              var _iterator3 = _createForOfIteratorHelper(this.state.area),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _t4 = _step3.value;

                  if (null !== _t4) {
                    var _e6 = 1 === this.render.getDirection() ? {
                      x: -_t4.x + this.state.position.x,
                      y: _t4.y - this.state.position.y
                    } : {
                      x: _t4.x - this.state.position.x,
                      y: _t4.y - this.state.position.y
                    };

                    _e6 = h.GetRotatedPoint(_e6, {
                      x: 0,
                      y: 0
                    }, this.state.angle), i += _e6.x + "px " + _e6.y + "px, ";
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              i = i.slice(0, -2), i += ")";
              var s = e + "transform-origin: 0 0; clip-path: ".concat(i, "; -webkit-clip-path: ").concat(i, ";") + (this.render.isSafari() && 0 === this.state.angle ? "transform: translate(".concat(t.x, "px, ").concat(t.y, "px);") : "transform: translate3d(".concat(t.x, "px, ").concat(t.y, "px, 0) rotate(").concat(this.state.angle, "rad);"));
              this.element.style.cssText = s;
            }
          }, {
            key: "simpleDraw",
            value: function simpleDraw(t) {
              var e = this.render.getRect(),
                  i = e.pageWidth,
                  s = e.height,
                  n = 1 === t ? e.left + e.pageWidth : e.left,
                  h = e.top;
              this.element.classList.add("--simple"), this.element.style.cssText = "\n            position: absolute; \n            display: block; \n            height: ".concat(s, "px; \n            left: ").concat(n, "px; \n            top: ").concat(h, "px; \n            width: ").concat(i, "px; \n            z-index: ").concat(this.render.getSettings().startZIndex + 1, ";");
            }
          }, {
            key: "getElement",
            value: function getElement() {
              return this.element;
            }
          }, {
            key: "load",
            value: function load() {
              this.isLoad = !0;
            }
          }, {
            key: "setOrientation",
            value: function setOrientation(t) {
              _get3(_getPrototypeOf(r.prototype), "setOrientation", this).call(this, t), this.element.classList.remove("--left", "--right"), this.element.classList.add(1 === t ? "--right" : "--left");
            }
          }, {
            key: "setDrawingDensity",
            value: function setDrawingDensity(t) {
              this.element.classList.remove("--soft", "--hard"), this.element.classList.add("--" + t), _get3(_getPrototypeOf(r.prototype), "setDrawingDensity", this).call(this, t);
            }
          }]);

          return r;
        }(e);

        var o = /*#__PURE__*/function (_s2) {
          _inherits(o, _s2);

          var _super5 = _createSuper(o);

          function o(t, e, i, s) {
            var _this6;

            _classCallCheck(this, o);

            _this6 = _super5.call(this, t, e), _this6.element = i, _this6.pagesElement = s;
            return _this6;
          }

          _createClass(o, [{
            key: "load",
            value: function load() {
              var _iterator4 = _createForOfIteratorHelper(this.pagesElement),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _t5 = _step4.value;

                  var _e7 = new r(this.render, _t5, "hard" === _t5.dataset.density ? "hard" : "soft");

                  _e7.load(), this.pages.push(_e7);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              this.createSpread();
            }
          }]);

          return o;
        }(s);

        var a = /*#__PURE__*/function () {
          function a(t, e, i, s) {
            _classCallCheck(this, a);

            this.direction = t, this.corner = e, this.topIntersectPoint = null, this.sideIntersectPoint = null, this.bottomIntersectPoint = null, this.pageWidth = parseInt(i, 10), this.pageHeight = parseInt(s, 10);
          }

          _createClass(a, [{
            key: "calc",
            value: function calc(t) {
              try {
                return this.position = this.calcAngleAndPosition(t), this.calculateIntersectPoint(this.position), !0;
              } catch (t) {
                return !1;
              }
            }
          }, {
            key: "getFlippingClipArea",
            value: function getFlippingClipArea() {
              var t = [];
              var e = !1;
              return t.push(this.rect.topLeft), t.push(this.topIntersectPoint), null === this.sideIntersectPoint ? e = !0 : (t.push(this.sideIntersectPoint), null === this.bottomIntersectPoint && (e = !1)), t.push(this.bottomIntersectPoint), (e || "bottom" === this.corner) && t.push(this.rect.bottomLeft), t;
            }
          }, {
            key: "getBottomClipArea",
            value: function getBottomClipArea() {
              var t = [];
              return t.push(this.topIntersectPoint), "top" === this.corner ? t.push({
                x: this.pageWidth,
                y: 0
              }) : (null !== this.topIntersectPoint && t.push({
                x: this.pageWidth,
                y: 0
              }), t.push({
                x: this.pageWidth,
                y: this.pageHeight
              })), null !== this.sideIntersectPoint ? h.GetDistanceBetweenTwoPoint(this.sideIntersectPoint, this.topIntersectPoint) >= 10 && t.push(this.sideIntersectPoint) : "top" === this.corner && t.push({
                x: this.pageWidth,
                y: this.pageHeight
              }), t.push(this.bottomIntersectPoint), t.push(this.topIntersectPoint), t;
            }
          }, {
            key: "getAngle",
            value: function getAngle() {
              return 0 === this.direction ? -this.angle : this.angle;
            }
          }, {
            key: "getRect",
            value: function getRect() {
              return this.rect;
            }
          }, {
            key: "getPosition",
            value: function getPosition() {
              return this.position;
            }
          }, {
            key: "getActiveCorner",
            value: function getActiveCorner() {
              return 0 === this.direction ? this.rect.topLeft : this.rect.topRight;
            }
          }, {
            key: "getDirection",
            value: function getDirection() {
              return this.direction;
            }
          }, {
            key: "getFlippingProgress",
            value: function getFlippingProgress() {
              return Math.abs((this.position.x - this.pageWidth) / (2 * this.pageWidth) * 100);
            }
          }, {
            key: "getCorner",
            value: function getCorner() {
              return this.corner;
            }
          }, {
            key: "getBottomPagePosition",
            value: function getBottomPagePosition() {
              return 1 === this.direction ? {
                x: this.pageWidth,
                y: 0
              } : {
                x: 0,
                y: 0
              };
            }
          }, {
            key: "getShadowStartPoint",
            value: function getShadowStartPoint() {
              return "top" === this.corner ? this.topIntersectPoint : null !== this.sideIntersectPoint ? this.sideIntersectPoint : this.topIntersectPoint;
            }
          }, {
            key: "getShadowAngle",
            value: function getShadowAngle() {
              var t = h.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(), [{
                x: 0,
                y: 0
              }, {
                x: this.pageWidth,
                y: 0
              }]);
              return 0 === this.direction ? t : Math.PI - t;
            }
          }, {
            key: "calcAngleAndPosition",
            value: function calcAngleAndPosition(t) {
              var e = t;
              if (this.updateAngleAndGeometry(e), e = "top" === this.corner ? this.checkPositionAtCenterLine(e, {
                x: 0,
                y: 0
              }, {
                x: 0,
                y: this.pageHeight
              }) : this.checkPositionAtCenterLine(e, {
                x: 0,
                y: this.pageHeight
              }, {
                x: 0,
                y: 0
              }), Math.abs(e.x - this.pageWidth) < 1 && Math.abs(e.y) < 1) throw new Error("Point is too small");
              return e;
            }
          }, {
            key: "updateAngleAndGeometry",
            value: function updateAngleAndGeometry(t) {
              this.angle = this.calculateAngle(t), this.rect = this.getPageRect(t);
            }
          }, {
            key: "calculateAngle",
            value: function calculateAngle(t) {
              var e = this.pageWidth - t.x + 1,
                  i = "bottom" === this.corner ? this.pageHeight - t.y : t.y;
              var s = 2 * Math.acos(e / Math.sqrt(i * i + e * e));
              i < 0 && (s = -s);
              var n = Math.PI - s;
              if (!isFinite(s) || n >= 0 && n < .003) throw new Error("The G point is too small");
              return "bottom" === this.corner && (s = -s), s;
            }
          }, {
            key: "getPageRect",
            value: function getPageRect(t) {
              return "top" === this.corner ? this.getRectFromBasePoint([{
                x: 0,
                y: 0
              }, {
                x: this.pageWidth,
                y: 0
              }, {
                x: 0,
                y: this.pageHeight
              }, {
                x: this.pageWidth,
                y: this.pageHeight
              }], t) : this.getRectFromBasePoint([{
                x: 0,
                y: -this.pageHeight
              }, {
                x: this.pageWidth,
                y: -this.pageHeight
              }, {
                x: 0,
                y: 0
              }, {
                x: this.pageWidth,
                y: 0
              }], t);
            }
          }, {
            key: "getRectFromBasePoint",
            value: function getRectFromBasePoint(t, e) {
              return {
                topLeft: this.getRotatedPoint(t[0], e),
                topRight: this.getRotatedPoint(t[1], e),
                bottomLeft: this.getRotatedPoint(t[2], e),
                bottomRight: this.getRotatedPoint(t[3], e)
              };
            }
          }, {
            key: "getRotatedPoint",
            value: function getRotatedPoint(t, e) {
              return {
                x: t.x * Math.cos(this.angle) + t.y * Math.sin(this.angle) + e.x,
                y: t.y * Math.cos(this.angle) - t.x * Math.sin(this.angle) + e.y
              };
            }
          }, {
            key: "calculateIntersectPoint",
            value: function calculateIntersectPoint(t) {
              var e = {
                left: -1,
                top: -1,
                width: this.pageWidth + 2,
                height: this.pageHeight + 2
              };
              "top" === this.corner ? (this.topIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [t, this.rect.topRight], [{
                x: 0,
                y: 0
              }, {
                x: this.pageWidth,
                y: 0
              }]), this.sideIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [t, this.rect.bottomLeft], [{
                x: this.pageWidth,
                y: 0
              }, {
                x: this.pageWidth,
                y: this.pageHeight
              }]), this.bottomIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [this.rect.bottomLeft, this.rect.bottomRight], [{
                x: 0,
                y: this.pageHeight
              }, {
                x: this.pageWidth,
                y: this.pageHeight
              }])) : (this.topIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [this.rect.topLeft, this.rect.topRight], [{
                x: 0,
                y: 0
              }, {
                x: this.pageWidth,
                y: 0
              }]), this.sideIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [t, this.rect.topLeft], [{
                x: this.pageWidth,
                y: 0
              }, {
                x: this.pageWidth,
                y: this.pageHeight
              }]), this.bottomIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [this.rect.bottomLeft, this.rect.bottomRight], [{
                x: 0,
                y: this.pageHeight
              }, {
                x: this.pageWidth,
                y: this.pageHeight
              }]));
            }
          }, {
            key: "checkPositionAtCenterLine",
            value: function checkPositionAtCenterLine(t, e, i) {
              var s = t;
              var n = h.LimitPointToCircle(e, this.pageWidth, s);
              s !== n && (s = n, this.updateAngleAndGeometry(s));
              var r = Math.sqrt(Math.pow(this.pageWidth, 2) + Math.pow(this.pageHeight, 2));
              var o = this.rect.bottomRight,
                  _a = this.rect.topLeft;

              if ("bottom" === this.corner && (o = this.rect.topRight, _a = this.rect.bottomLeft), o.x <= 0) {
                var _t6 = h.LimitPointToCircle(i, r, _a);

                _t6 !== s && (s = _t6, this.updateAngleAndGeometry(s));
              }

              return s;
            }
          }, {
            key: "getSegmentToShadowLine",
            value: function getSegmentToShadowLine() {
              var t = this.getShadowStartPoint();
              return [t, t !== this.sideIntersectPoint && null !== this.sideIntersectPoint ? this.sideIntersectPoint : this.bottomIntersectPoint];
            }
          }]);

          return a;
        }();

        var g = /*#__PURE__*/function () {
          function g(t, e) {
            _classCallCheck(this, g);

            this.flippingPage = null, this.bottomPage = null, this.calc = null, this.state = "read", this.render = t, this.app = e;
          }

          _createClass(g, [{
            key: "fold",
            value: function fold(t) {
              this.setState("user_fold"), null === this.calc && this.start(t), this["do"](this.render.convertToPage(t));
            }
          }, {
            key: "flip",
            value: function flip(t) {
              if (this.app.getSettings().disableFlipByClick && !this.isPointOnCorners(t)) return;
              if (null !== this.calc && this.render.finishAnimation(), !this.start(t)) return;
              var e = this.getBoundsRect();
              this.setState("flipping");
              var i = e.height / 10,
                  s = "bottom" === this.calc.getCorner() ? e.height - i : i,
                  n = "bottom" === this.calc.getCorner() ? e.height : 0;
              this.calc.calc({
                x: e.pageWidth - i,
                y: s
              }), this.animateFlippingTo({
                x: e.pageWidth - i,
                y: s
              }, {
                x: -e.pageWidth,
                y: n
              }, !0);
            }
          }, {
            key: "start",
            value: function start(t) {
              this.reset();
              var e = this.render.convertToBook(t),
                  i = this.getBoundsRect(),
                  s = this.getDirectionByPoint(e),
                  n = e.y >= i.height / 2 ? "bottom" : "top";
              if (!this.checkDirection(s)) return !1;

              try {
                if (this.flippingPage = this.app.getPageCollection().getFlippingPage(s), this.bottomPage = this.app.getPageCollection().getBottomPage(s), "landscape" === this.render.getOrientation()) if (1 === s) {
                  var _t7 = this.app.getPageCollection().nextBy(this.flippingPage);

                  null !== _t7 && this.flippingPage.getDensity() !== _t7.getDensity() && (this.flippingPage.setDrawingDensity("hard"), _t7.setDrawingDensity("hard"));
                } else {
                  var _t8 = this.app.getPageCollection().prevBy(this.flippingPage);

                  null !== _t8 && this.flippingPage.getDensity() !== _t8.getDensity() && (this.flippingPage.setDrawingDensity("hard"), _t8.setDrawingDensity("hard"));
                }
                return this.render.setDirection(s), this.calc = new a(s, n, i.pageWidth.toString(10), i.height.toString(10)), !0;
              } catch (t) {
                return !1;
              }
            }
          }, {
            key: "do",
            value: function _do(t) {
              if (null !== this.calc && this.calc.calc(t)) {
                var _t9 = this.calc.getFlippingProgress();

                this.bottomPage.setArea(this.calc.getBottomClipArea()), this.bottomPage.setPosition(this.calc.getBottomPagePosition()), this.bottomPage.setAngle(0), this.bottomPage.setHardAngle(0), this.flippingPage.setArea(this.calc.getFlippingClipArea()), this.flippingPage.setPosition(this.calc.getActiveCorner()), this.flippingPage.setAngle(this.calc.getAngle()), 0 === this.calc.getDirection() ? this.flippingPage.setHardAngle(90 * (200 - 2 * _t9) / 100) : this.flippingPage.setHardAngle(-90 * (200 - 2 * _t9) / 100), this.render.setPageRect(this.calc.getRect()), this.render.setBottomPage(this.bottomPage), this.render.setFlippingPage(this.flippingPage), this.render.setShadowData(this.calc.getShadowStartPoint(), this.calc.getShadowAngle(), _t9, this.calc.getDirection());
              }
            }
          }, {
            key: "flipToPage",
            value: function flipToPage(t, e) {
              var i = this.app.getPageCollection().getCurrentSpreadIndex(),
                  s = this.app.getPageCollection().getSpreadIndexByPage(t);

              try {
                s > i && (this.app.getPageCollection().setCurrentSpreadIndex(s - 1), this.flipNext(e)), s < i && (this.app.getPageCollection().setCurrentSpreadIndex(s + 1), this.flipPrev(e));
              } catch (t) {}
            }
          }, {
            key: "flipNext",
            value: function flipNext(t) {
              this.flip({
                x: this.render.getRect().left + 2 * this.render.getRect().pageWidth - 10,
                y: "top" === t ? 1 : this.render.getRect().height - 2
              });
            }
          }, {
            key: "flipPrev",
            value: function flipPrev(t) {
              this.flip({
                x: 10,
                y: "top" === t ? 1 : this.render.getRect().height - 2
              });
            }
          }, {
            key: "stopMove",
            value: function stopMove() {
              if (null === this.calc) return;
              var t = this.calc.getPosition(),
                  e = this.getBoundsRect(),
                  i = "bottom" === this.calc.getCorner() ? e.height : 0;
              t.x <= 0 ? this.animateFlippingTo(t, {
                x: -e.pageWidth,
                y: i
              }, !0) : this.animateFlippingTo(t, {
                x: e.pageWidth,
                y: i
              }, !1);
            }
          }, {
            key: "showCorner",
            value: function showCorner(t) {
              if (!this.checkState("read", "fold_corner")) return;
              var e = this.getBoundsRect(),
                  i = e.pageWidth;
              if (this.isPointOnCorners(t)) {
                if (null === this.calc) {
                  if (!this.start(t)) return;
                  this.setState("fold_corner"), this.calc.calc({
                    x: i - 1,
                    y: 1
                  });

                  var _s3 = 50,
                      _n = "bottom" === this.calc.getCorner() ? e.height - 1 : 1,
                      _h4 = "bottom" === this.calc.getCorner() ? e.height - _s3 : _s3;

                  this.animateFlippingTo({
                    x: i - 1,
                    y: _n
                  }, {
                    x: i - _s3,
                    y: _h4
                  }, !1, !1);
                } else this["do"](this.render.convertToPage(t));
              } else this.setState("read"), this.render.finishAnimation(), this.stopMove();
            }
          }, {
            key: "animateFlippingTo",
            value: function animateFlippingTo(t, e, i) {
              var _this7 = this;

              var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
              var n = h.GetCordsFromTwoPoint(t, e),
                  r = [];

              var _iterator5 = _createForOfIteratorHelper(n),
                  _step5;

              try {
                var _loop = function _loop() {
                  var t = _step5.value;
                  r.push(function () {
                    return _this7["do"](t);
                  });
                };

                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              var o = this.getAnimationDuration(n.length);
              this.render.startAnimation(r, o, function () {
                _this7.calc && (i && (1 === _this7.calc.getDirection() ? _this7.app.turnToPrevPage() : _this7.app.turnToNextPage()), s && (_this7.render.setBottomPage(null), _this7.render.setFlippingPage(null), _this7.render.clearShadow(), _this7.setState("read"), _this7.reset()));
              });
            }
          }, {
            key: "getCalculation",
            value: function getCalculation() {
              return this.calc;
            }
          }, {
            key: "getState",
            value: function getState() {
              return this.state;
            }
          }, {
            key: "setState",
            value: function setState(t) {
              this.state !== t && (this.app.updateState(t), this.state = t);
            }
          }, {
            key: "getDirectionByPoint",
            value: function getDirectionByPoint(t) {
              var e = this.getBoundsRect();

              if ("portrait" === this.render.getOrientation()) {
                if (t.x - e.pageWidth <= e.width / 5) return 1;
              } else if (t.x < e.width / 2) return 1;

              return 0;
            }
          }, {
            key: "getAnimationDuration",
            value: function getAnimationDuration(t) {
              var e = this.app.getSettings().flippingTime;
              return t >= 1e3 ? e : t / 1e3 * e;
            }
          }, {
            key: "checkDirection",
            value: function checkDirection(t) {
              return 0 === t ? this.app.getCurrentPageIndex() < this.app.getPageCount() - 1 : this.app.getCurrentPageIndex() >= 1;
            }
          }, {
            key: "reset",
            value: function reset() {
              this.calc = null, this.flippingPage = null, this.bottomPage = null;
            }
          }, {
            key: "getBoundsRect",
            value: function getBoundsRect() {
              return this.render.getRect();
            }
          }, {
            key: "checkState",
            value: function checkState() {
              for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
                t[_key] = arguments[_key];
              }

              for (var _i9 = 0, _t10 = t; _i9 < _t10.length; _i9++) {
                var _e8 = _t10[_i9];
                if (this.state === _e8) return !0;
              }

              return !1;
            }
          }, {
            key: "isPointOnCorners",
            value: function isPointOnCorners(t) {
              var e = this.getBoundsRect(),
                  i = e.pageWidth,
                  s = Math.sqrt(Math.pow(i, 2) + Math.pow(e.height, 2)) / 5,
                  n = this.render.convertToBook(t);
              return n.x > 0 && n.y > 0 && n.x < e.width && n.y < e.height && (n.x < s || n.x > e.width - s) && (n.y < s || n.y > e.height - s);
            }
          }]);

          return g;
        }();

        var l = /*#__PURE__*/function () {
          function l(t, e) {
            _classCallCheck(this, l);

            this.leftPage = null, this.rightPage = null, this.flippingPage = null, this.bottomPage = null, this.direction = null, this.orientation = null, this.shadow = null, this.animation = null, this.pageRect = null, this.boundsRect = null, this.timer = 0, this.safari = !1, this.setting = e, this.app = t;
            var i = new RegExp("Version\\/[\\d\\.]+.*Safari/");
            this.safari = null !== i.exec(window.navigator.userAgent);
          }

          _createClass(l, [{
            key: "render",
            value: function render(t) {
              if (null !== this.animation) {
                var _e9 = Math.round((t - this.animation.startedAt) / this.animation.durationFrame);

                _e9 < this.animation.frames.length ? this.animation.frames[_e9]() : (this.animation.onAnimateEnd(), this.animation = null);
              }

              this.timer = t, this.drawFrame();
            }
          }, {
            key: "start",
            value: function start() {
              var _this8 = this;

              this.update();

              var t = function t(e) {
                _this8.render(e), requestAnimationFrame(t);
              };

              requestAnimationFrame(t);
            }
          }, {
            key: "startAnimation",
            value: function startAnimation(t, e, i) {
              this.finishAnimation(), this.animation = {
                frames: t,
                duration: e,
                durationFrame: e / t.length,
                onAnimateEnd: i,
                startedAt: this.timer
              };
            }
          }, {
            key: "finishAnimation",
            value: function finishAnimation() {
              null !== this.animation && (this.animation.frames[this.animation.frames.length - 1](), null !== this.animation.onAnimateEnd && this.animation.onAnimateEnd()), this.animation = null;
            }
          }, {
            key: "update",
            value: function update() {
              this.boundsRect = null;
              var t = this.calculateBoundsRect();
              this.orientation !== t && (this.orientation = t, this.app.updateOrientation(t));
            }
          }, {
            key: "calculateBoundsRect",
            value: function calculateBoundsRect() {
              var t = "landscape";
              var e = this.getBlockWidth(),
                  i = e / 2,
                  s = this.getBlockHeight() / 2,
                  n = this.setting.width / this.setting.height;
              var h = this.setting.width,
                  r = this.setting.height,
                  o = i - h;
              return "stretch" === this.setting.size ? (e < 2 * this.setting.minWidth && this.app.getSettings().usePortrait && (t = "portrait"), h = "portrait" === t ? this.getBlockWidth() : this.getBlockWidth() / 2, h > this.setting.maxWidth && (h = this.setting.maxWidth), r = h / n, r > this.getBlockHeight() && (r = this.getBlockHeight(), h = r * n), o = "portrait" === t ? i - h / 2 - h : i - h) : e < 2 * h && this.app.getSettings().usePortrait && (t = "portrait", o = i - h / 2 - h), this.boundsRect = {
                left: o,
                top: s - r / 2,
                width: 2 * h,
                height: r,
                pageWidth: h
              }, t;
            }
          }, {
            key: "setShadowData",
            value: function setShadowData(t, e, i, s) {
              if (!this.app.getSettings().drawShadow) return;
              var n = 100 * this.getSettings().maxShadowOpacity;
              this.shadow = {
                pos: t,
                angle: e,
                width: 3 * this.getRect().pageWidth / 4 * i / 100,
                opacity: (100 - i) * n / 100 / 100,
                direction: s,
                progress: 2 * i
              };
            }
          }, {
            key: "clearShadow",
            value: function clearShadow() {
              this.shadow = null;
            }
          }, {
            key: "getBlockWidth",
            value: function getBlockWidth() {
              return this.app.getUI().getDistElement().offsetWidth;
            }
          }, {
            key: "getBlockHeight",
            value: function getBlockHeight() {
              return this.app.getUI().getDistElement().offsetHeight;
            }
          }, {
            key: "getDirection",
            value: function getDirection() {
              return this.direction;
            }
          }, {
            key: "getRect",
            value: function getRect() {
              return null === this.boundsRect && this.calculateBoundsRect(), this.boundsRect;
            }
          }, {
            key: "getSettings",
            value: function getSettings() {
              return this.app.getSettings();
            }
          }, {
            key: "getOrientation",
            value: function getOrientation() {
              return this.orientation;
            }
          }, {
            key: "setPageRect",
            value: function setPageRect(t) {
              this.pageRect = t;
            }
          }, {
            key: "setDirection",
            value: function setDirection(t) {
              this.direction = t;
            }
          }, {
            key: "setRightPage",
            value: function setRightPage(t) {
              null !== t && t.setOrientation(1), this.rightPage = t;
            }
          }, {
            key: "setLeftPage",
            value: function setLeftPage(t) {
              null !== t && t.setOrientation(0), this.leftPage = t;
            }
          }, {
            key: "setBottomPage",
            value: function setBottomPage(t) {
              null !== t && t.setOrientation(1 === this.direction ? 0 : 1), this.bottomPage = t;
            }
          }, {
            key: "setFlippingPage",
            value: function setFlippingPage(t) {
              null !== t && t.setOrientation(0 === this.direction && "portrait" !== this.orientation ? 0 : 1), this.flippingPage = t;
            }
          }, {
            key: "convertToBook",
            value: function convertToBook(t) {
              var e = this.getRect();
              return {
                x: t.x - e.left,
                y: t.y - e.top
              };
            }
          }, {
            key: "isSafari",
            value: function isSafari() {
              return this.safari;
            }
          }, {
            key: "convertToPage",
            value: function convertToPage(t, e) {
              e || (e = this.direction);
              var i = this.getRect();
              return {
                x: 0 === e ? t.x - i.left - i.width / 2 : i.width / 2 - t.x + i.left,
                y: t.y - i.top
              };
            }
          }, {
            key: "convertToGlobal",
            value: function convertToGlobal(t, e) {
              if (e || (e = this.direction), null == t) return null;
              var i = this.getRect();
              return {
                x: 0 === e ? t.x + i.left + i.width / 2 : i.width / 2 - t.x + i.left,
                y: t.y + i.top
              };
            }
          }, {
            key: "convertRectToGlobal",
            value: function convertRectToGlobal(t, e) {
              return e || (e = this.direction), {
                topLeft: this.convertToGlobal(t.topLeft, e),
                topRight: this.convertToGlobal(t.topRight, e),
                bottomLeft: this.convertToGlobal(t.bottomLeft, e),
                bottomRight: this.convertToGlobal(t.bottomRight, e)
              };
            }
          }]);

          return l;
        }();

        var d = /*#__PURE__*/function (_l) {
          _inherits(d, _l);

          var _super6 = _createSuper(d);

          function d(t, e, i) {
            var _this9;

            _classCallCheck(this, d);

            _this9 = _super6.call(this, t, e), _this9.canvas = i, _this9.ctx = i.getContext("2d");
            return _this9;
          }

          _createClass(d, [{
            key: "getContext",
            value: function getContext() {
              return this.ctx;
            }
          }, {
            key: "reload",
            value: function reload() {}
          }, {
            key: "drawFrame",
            value: function drawFrame() {
              this.clear(), "portrait" !== this.orientation && null != this.leftPage && this.leftPage.simpleDraw(0), null != this.rightPage && this.rightPage.simpleDraw(1), null != this.bottomPage && this.bottomPage.draw(), this.drawBookShadow(), null != this.flippingPage && this.flippingPage.draw(), null != this.shadow && (this.drawOuterShadow(), this.drawInnerShadow());
              var t = this.getRect();
              "portrait" === this.orientation && (this.ctx.beginPath(), this.ctx.rect(t.left + t.pageWidth, t.top, t.width, t.height), this.ctx.clip());
            }
          }, {
            key: "drawBookShadow",
            value: function drawBookShadow() {
              var t = this.getRect();
              this.ctx.save(), this.ctx.beginPath();
              var e = t.width / 20;
              this.ctx.rect(t.left, t.top, t.width, t.height);
              var i = {
                x: t.left + t.width / 2 - e / 2,
                y: 0
              };
              this.ctx.translate(i.x, i.y);
              var s = this.ctx.createLinearGradient(0, 0, e, 0);
              s.addColorStop(0, "rgba(0, 0, 0, 0)"), s.addColorStop(.4, "rgba(0, 0, 0, 0.2)"), s.addColorStop(.49, "rgba(0, 0, 0, 0.1)"), s.addColorStop(.5, "rgba(0, 0, 0, 0.5)"), s.addColorStop(.51, "rgba(0, 0, 0, 0.4)"), s.addColorStop(1, "rgba(0, 0, 0, 0)"), this.ctx.clip(), this.ctx.fillStyle = s, this.ctx.fillRect(0, 0, e, 2 * t.height), this.ctx.restore();
            }
          }, {
            key: "drawOuterShadow",
            value: function drawOuterShadow() {
              var t = this.getRect();
              this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(t.left, t.top, t.width, t.height);
              var e = this.convertToGlobal({
                x: this.shadow.pos.x,
                y: this.shadow.pos.y
              });
              this.ctx.translate(e.x, e.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
              var i = this.ctx.createLinearGradient(0, 0, this.shadow.width, 0);
              0 === this.shadow.direction ? (this.ctx.translate(0, -100), i.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), i.addColorStop(1, "rgba(0, 0, 0, 0)")) : (this.ctx.translate(-this.shadow.width, -100), i.addColorStop(0, "rgba(0, 0, 0, 0)"), i.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")")), this.ctx.clip(), this.ctx.fillStyle = i, this.ctx.fillRect(0, 0, this.shadow.width, 2 * t.height), this.ctx.restore();
            }
          }, {
            key: "drawInnerShadow",
            value: function drawInnerShadow() {
              var t = this.getRect();
              this.ctx.save(), this.ctx.beginPath();
              var e = this.convertToGlobal({
                x: this.shadow.pos.x,
                y: this.shadow.pos.y
              }),
                  i = this.convertRectToGlobal(this.pageRect);
              this.ctx.moveTo(i.topLeft.x, i.topLeft.y), this.ctx.lineTo(i.topRight.x, i.topRight.y), this.ctx.lineTo(i.bottomRight.x, i.bottomRight.y), this.ctx.lineTo(i.bottomLeft.x, i.bottomLeft.y), this.ctx.translate(e.x, e.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
              var s = 3 * this.shadow.width / 4,
                  n = this.ctx.createLinearGradient(0, 0, s, 0);
              0 === this.shadow.direction ? (this.ctx.translate(-s, -100), n.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n.addColorStop(.9, "rgba(0, 0, 0, 0.05)"), n.addColorStop(.7, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n.addColorStop(0, "rgba(0, 0, 0, 0)")) : (this.ctx.translate(0, -100), n.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n.addColorStop(.1, "rgba(0, 0, 0, 0.05)"), n.addColorStop(.3, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n.addColorStop(1, "rgba(0, 0, 0, 0)")), this.ctx.clip(), this.ctx.fillStyle = n, this.ctx.fillRect(0, 0, s, 2 * t.height), this.ctx.restore();
            }
          }, {
            key: "clear",
            value: function clear() {
              this.ctx.fillStyle = "white", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            }
          }]);

          return d;
        }(l);

        var p = /*#__PURE__*/function () {
          function p(t, e, i) {
            var _this10 = this;

            _classCallCheck(this, p);

            this.touchPoint = null, this.swipeTimeout = 250, this.onResize = function () {
              _this10.update();
            }, this.onMouseDown = function (t) {
              if (_this10.checkTarget(t.target)) {
                var _e10 = _this10.getMousePos(t.clientX, t.clientY);

                _this10.app.startUserTouch(_e10), t.preventDefault();
              }
            }, this.onTouchStart = function (t) {
              if (_this10.checkTarget(t.target) && t.changedTouches.length > 0) {
                var _e11 = t.changedTouches[0],
                    _i10 = _this10.getMousePos(_e11.clientX, _e11.clientY);

                _this10.touchPoint = {
                  point: _i10,
                  time: Date.now()
                }, setTimeout(function () {
                  null !== _this10.touchPoint && _this10.app.startUserTouch(_i10);
                }, _this10.swipeTimeout), _this10.app.getSettings().mobileScrollSupport || t.preventDefault();
              }
            }, this.onMouseUp = function (t) {
              var e = _this10.getMousePos(t.clientX, t.clientY);

              _this10.app.userStop(e);
            }, this.onMouseMove = function (t) {
              var e = _this10.getMousePos(t.clientX, t.clientY);

              _this10.app.userMove(e, !1);
            }, this.onTouchMove = function (t) {
              if (t.changedTouches.length > 0) {
                var _e12 = t.changedTouches[0],
                    _i11 = _this10.getMousePos(_e12.clientX, _e12.clientY);

                _this10.app.getSettings().mobileScrollSupport ? (null !== _this10.touchPoint && (Math.abs(_this10.touchPoint.point.x - _i11.x) > 10 || "read" !== _this10.app.getState()) && t.cancelable && _this10.app.userMove(_i11, !0), "read" !== _this10.app.getState() && t.preventDefault()) : _this10.app.userMove(_i11, !0);
              }
            }, this.onTouchEnd = function (t) {
              if (t.changedTouches.length > 0) {
                var _e13 = t.changedTouches[0],
                    _i12 = _this10.getMousePos(_e13.clientX, _e13.clientY);

                var _s4 = !1;

                if (null !== _this10.touchPoint) {
                  var _t11 = _i12.x - _this10.touchPoint.point.x,
                      _e14 = Math.abs(_i12.y - _this10.touchPoint.point.y);

                  Math.abs(_t11) > _this10.swipeDistance && _e14 < 2 * _this10.swipeDistance && Date.now() - _this10.touchPoint.time < _this10.swipeTimeout && (_t11 > 0 ? _this10.app.flipPrev(_this10.touchPoint.point.y < _this10.app.getRender().getRect().height / 2 ? "top" : "bottom") : _this10.app.flipNext(_this10.touchPoint.point.y < _this10.app.getRender().getRect().height / 2 ? "top" : "bottom"), _s4 = !0), _this10.touchPoint = null;
                }

                _this10.app.userStop(_i12, _s4);
              }
            }, this.parentElement = t, t.classList.add("stf__parent"), t.insertAdjacentHTML("afterbegin", '<div class="stf__wrapper"></div>'), this.wrapper = t.querySelector(".stf__wrapper"), this.app = e;
            var s = this.app.getSettings().usePortrait ? 1 : 2;
            t.style.minWidth = i.minWidth * s + "px", t.style.minHeight = i.minHeight + "px", "fixed" === i.size && (t.style.minWidth = i.width * s + "px", t.style.minHeight = i.height + "px"), i.autoSize && (t.style.width = "100%", t.style.maxWidth = 2 * i.maxWidth + "px"), t.style.display = "block", window.addEventListener("resize", this.onResize, !1), this.swipeDistance = i.swipeDistance;
          }

          _createClass(p, [{
            key: "destroy",
            value: function destroy() {
              this.app.getSettings().useMouseEvents && this.removeHandlers(), this.distElement.remove(), this.wrapper.remove();
            }
          }, {
            key: "getDistElement",
            value: function getDistElement() {
              return this.distElement;
            }
          }, {
            key: "getWrapper",
            value: function getWrapper() {
              return this.wrapper;
            }
          }, {
            key: "setOrientationStyle",
            value: function setOrientationStyle(t) {
              this.wrapper.classList.remove("--portrait", "--landscape"), "portrait" === t ? (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = this.app.getSettings().height / this.app.getSettings().width * 100 + "%"), this.wrapper.classList.add("--portrait")) : (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = this.app.getSettings().height / (2 * this.app.getSettings().width) * 100 + "%"), this.wrapper.classList.add("--landscape")), this.update();
            }
          }, {
            key: "removeHandlers",
            value: function removeHandlers() {
              window.removeEventListener("resize", this.onResize), this.distElement.removeEventListener("mousedown", this.onMouseDown), this.distElement.removeEventListener("touchstart", this.onTouchStart), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("touchend", this.onTouchEnd);
            }
          }, {
            key: "setHandlers",
            value: function setHandlers() {
              window.addEventListener("resize", this.onResize, !1), this.app.getSettings().useMouseEvents && (this.distElement.addEventListener("mousedown", this.onMouseDown), this.distElement.addEventListener("touchstart", this.onTouchStart), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, {
                passive: !this.app.getSettings().mobileScrollSupport
              }), window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("touchend", this.onTouchEnd));
            }
          }, {
            key: "getMousePos",
            value: function getMousePos(t, e) {
              var i = this.distElement.getBoundingClientRect();
              return {
                x: t - i.left,
                y: e - i.top
              };
            }
          }, {
            key: "checkTarget",
            value: function checkTarget(t) {
              return !this.app.getSettings().clickEventForward || !["a", "button"].includes(t.tagName.toLowerCase());
            }
          }]);

          return p;
        }();

        var c = /*#__PURE__*/function (_p) {
          _inherits(c, _p);

          var _super7 = _createSuper(c);

          function c(t, e, i, s) {
            var _this11;

            _classCallCheck(this, c);

            _this11 = _super7.call(this, t, e, i), _this11.wrapper.insertAdjacentHTML("afterbegin", '<div class="stf__block"></div>'), _this11.distElement = t.querySelector(".stf__block"), _this11.items = s;

            var _iterator6 = _createForOfIteratorHelper(s),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _t12 = _step6.value;

                _this11.distElement.appendChild(_t12);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            _this11.setHandlers();

            return _this11;
          }

          _createClass(c, [{
            key: "clear",
            value: function clear() {
              var _iterator7 = _createForOfIteratorHelper(this.items),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _t13 = _step7.value;
                  this.parentElement.appendChild(_t13);
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          }, {
            key: "updateItems",
            value: function updateItems(t) {
              this.removeHandlers(), this.distElement.innerHTML = "";

              var _iterator8 = _createForOfIteratorHelper(t),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _e15 = _step8.value;
                  this.distElement.appendChild(_e15);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              this.items = t, this.setHandlers();
            }
          }, {
            key: "update",
            value: function update() {
              this.app.getRender().update();
            }
          }]);

          return c;
        }(p);

        var u = /*#__PURE__*/function (_p2) {
          _inherits(u, _p2);

          var _super8 = _createSuper(u);

          function u(t, e, i) {
            var _this12;

            _classCallCheck(this, u);

            _this12 = _super8.call(this, t, e, i), _this12.wrapper.innerHTML = '<canvas class="stf__canvas"></canvas>', _this12.canvas = t.querySelectorAll("canvas")[0], _this12.distElement = _this12.canvas, _this12.resizeCanvas(), _this12.setHandlers();
            return _this12;
          }

          _createClass(u, [{
            key: "resizeCanvas",
            value: function resizeCanvas() {
              var t = getComputedStyle(this.canvas),
                  e = parseInt(t.getPropertyValue("width"), 10),
                  i = parseInt(t.getPropertyValue("height"), 10);
              this.canvas.width = e, this.canvas.height = i;
            }
          }, {
            key: "getCanvas",
            value: function getCanvas() {
              return this.canvas;
            }
          }, {
            key: "update",
            value: function update() {
              this.resizeCanvas(), this.app.getRender().update();
            }
          }]);

          return u;
        }(p);

        var w = /*#__PURE__*/function (_l2) {
          _inherits(w, _l2);

          var _super9 = _createSuper(w);

          function w(t, e, i) {
            var _this13;

            _classCallCheck(this, w);

            _this13 = _super9.call(this, t, e), _this13.outerShadow = null, _this13.innerShadow = null, _this13.hardShadow = null, _this13.hardInnerShadow = null, _this13.element = i, _this13.createShadows();
            return _this13;
          }

          _createClass(w, [{
            key: "createShadows",
            value: function createShadows() {
              this.element.insertAdjacentHTML("beforeend", '<div class="stf__outerShadow"></div>\n             <div class="stf__innerShadow"></div>\n             <div class="stf__hardShadow"></div>\n             <div class="stf__hardInnerShadow"></div>'), this.outerShadow = this.element.querySelector(".stf__outerShadow"), this.innerShadow = this.element.querySelector(".stf__innerShadow"), this.hardShadow = this.element.querySelector(".stf__hardShadow"), this.hardInnerShadow = this.element.querySelector(".stf__hardInnerShadow");
            }
          }, {
            key: "clearShadow",
            value: function clearShadow() {
              _get3(_getPrototypeOf(w.prototype), "clearShadow", this).call(this), this.outerShadow.style.cssText = "display: none", this.innerShadow.style.cssText = "display: none", this.hardShadow.style.cssText = "display: none", this.hardInnerShadow.style.cssText = "display: none";
            }
          }, {
            key: "reload",
            value: function reload() {
              this.element.querySelector(".stf__outerShadow") || this.createShadows();
            }
          }, {
            key: "drawHardInnerShadow",
            value: function drawHardInnerShadow() {
              var t = this.getRect(),
                  e = this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress;
              var i = (100 - e) * (2.5 * t.pageWidth) / 100 + 20;
              i > t.pageWidth && (i = t.pageWidth);
              var s = "\n            display: block;\n            z-index: ".concat((this.getSettings().startZIndex + 5).toString(10), ";\n            width: ").concat(i, "px;\n            height: ").concat(t.height, "px;\n            background: linear-gradient(to right,\n                rgba(0, 0, 0, ").concat(this.shadow.opacity * e / 100, ") 5%,\n                rgba(0, 0, 0, 0) 100%);\n            left: ").concat(t.left + t.width / 2, "px;\n            transform-origin: 0 0;\n        ");
              s += 0 === this.getDirection() && this.shadow.progress > 100 || 1 === this.getDirection() && this.shadow.progress <= 100 ? "transform: translate3d(0, 0, 0);" : "transform: translate3d(0, 0, 0) rotateY(180deg);", this.hardInnerShadow.style.cssText = s;
            }
          }, {
            key: "drawHardOuterShadow",
            value: function drawHardOuterShadow() {
              var t = this.getRect();
              var e = (100 - (this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress)) * (2.5 * t.pageWidth) / 100 + 20;
              e > t.pageWidth && (e = t.pageWidth);
              var i = "\n            display: block;\n            z-index: ".concat((this.getSettings().startZIndex + 4).toString(10), ";\n            width: ").concat(e, "px;\n            height: ").concat(t.height, "px;\n            background: linear-gradient(to left, rgba(0, 0, 0, ").concat(this.shadow.opacity, ") 5%, rgba(0, 0, 0, 0) 100%);\n            left: ").concat(t.left + t.width / 2, "px;\n            transform-origin: 0 0;\n        ");
              i += 0 === this.getDirection() && this.shadow.progress > 100 || 1 === this.getDirection() && this.shadow.progress <= 100 ? "transform: translate3d(0, 0, 0) rotateY(180deg);" : "transform: translate3d(0, 0, 0);", this.hardShadow.style.cssText = i;
            }
          }, {
            key: "drawInnerShadow",
            value: function drawInnerShadow() {
              var t = this.getRect(),
                  e = 3 * this.shadow.width / 4,
                  i = 0 === this.getDirection() ? e : 0,
                  s = 0 === this.getDirection() ? "to left" : "to right",
                  n = this.convertToGlobal(this.shadow.pos),
                  r = this.shadow.angle + 3 * Math.PI / 2,
                  o = [this.pageRect.topLeft, this.pageRect.topRight, this.pageRect.bottomRight, this.pageRect.bottomLeft];
              var a = "polygon( ";

              for (var _i13 = 0, _o2 = o; _i13 < _o2.length; _i13++) {
                var _t14 = _o2[_i13];

                var _e16 = 1 === this.getDirection() ? {
                  x: -_t14.x + this.shadow.pos.x,
                  y: _t14.y - this.shadow.pos.y
                } : {
                  x: _t14.x - this.shadow.pos.x,
                  y: _t14.y - this.shadow.pos.y
                };

                _e16 = h.GetRotatedPoint(_e16, {
                  x: i,
                  y: 100
                }, r), a += _e16.x + "px " + _e16.y + "px, ";
              }

              a = a.slice(0, -2), a += ")";
              var g = "\n            display: block;\n            z-index: ".concat((this.getSettings().startZIndex + 10).toString(10), ";\n            width: ").concat(e, "px;\n            height: ").concat(2 * t.height, "px;\n            background: linear-gradient(").concat(s, ",\n                rgba(0, 0, 0, ").concat(this.shadow.opacity, ") 5%,\n                rgba(0, 0, 0, 0.05) 15%,\n                rgba(0, 0, 0, ").concat(this.shadow.opacity, ") 35%,\n                rgba(0, 0, 0, 0) 100%);\n            transform-origin: ").concat(i, "px 100px;\n            transform: translate3d(").concat(n.x - i, "px, ").concat(n.y - 100, "px, 0) rotate(").concat(r, "rad);\n            clip-path: ").concat(a, ";\n            -webkit-clip-path: ").concat(a, ";\n        ");
              this.innerShadow.style.cssText = g;
            }
          }, {
            key: "drawOuterShadow",
            value: function drawOuterShadow() {
              var t = this.getRect(),
                  e = this.convertToGlobal({
                x: this.shadow.pos.x,
                y: this.shadow.pos.y
              }),
                  i = this.shadow.angle + 3 * Math.PI / 2,
                  s = 1 === this.getDirection() ? this.shadow.width : 0,
                  n = 0 === this.getDirection() ? "to right" : "to left",
                  r = [{
                x: 0,
                y: 0
              }, {
                x: t.pageWidth,
                y: 0
              }, {
                x: t.pageWidth,
                y: t.height
              }, {
                x: 0,
                y: t.height
              }];
              var o = "polygon( ";

              for (var _i14 = 0, _r = r; _i14 < _r.length; _i14++) {
                var _t15 = _r[_i14];

                if (null !== _t15) {
                  var _e17 = 1 === this.getDirection() ? {
                    x: -_t15.x + this.shadow.pos.x,
                    y: _t15.y - this.shadow.pos.y
                  } : {
                    x: _t15.x - this.shadow.pos.x,
                    y: _t15.y - this.shadow.pos.y
                  };

                  _e17 = h.GetRotatedPoint(_e17, {
                    x: s,
                    y: 100
                  }, i), o += _e17.x + "px " + _e17.y + "px, ";
                }
              }

              o = o.slice(0, -2), o += ")";
              var a = "\n            display: block;\n            z-index: ".concat((this.getSettings().startZIndex + 10).toString(10), ";\n            width: ").concat(this.shadow.width, "px;\n            height: ").concat(2 * t.height, "px;\n            background: linear-gradient(").concat(n, ", rgba(0, 0, 0, ").concat(this.shadow.opacity, "), rgba(0, 0, 0, 0));\n            transform-origin: ").concat(s, "px 100px;\n            transform: translate3d(").concat(e.x - s, "px, ").concat(e.y - 100, "px, 0) rotate(").concat(i, "rad);\n            clip-path: ").concat(o, ";\n            -webkit-clip-path: ").concat(o, ";\n        ");
              this.outerShadow.style.cssText = a;
            }
          }, {
            key: "drawLeftPage",
            value: function drawLeftPage() {
              "portrait" !== this.orientation && null !== this.leftPage && (1 === this.direction && null !== this.flippingPage && "hard" === this.flippingPage.getDrawingDensity() ? (this.leftPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.leftPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.leftPage.draw(this.flippingPage.getDrawingDensity())) : this.leftPage.simpleDraw(0));
            }
          }, {
            key: "drawRightPage",
            value: function drawRightPage() {
              null !== this.rightPage && (0 === this.direction && null !== this.flippingPage && "hard" === this.flippingPage.getDrawingDensity() ? (this.rightPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.rightPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.rightPage.draw(this.flippingPage.getDrawingDensity())) : this.rightPage.simpleDraw(1));
            }
          }, {
            key: "drawBottomPage",
            value: function drawBottomPage() {
              if (null === this.bottomPage) return;
              var t = null != this.flippingPage ? this.flippingPage.getDrawingDensity() : null;
              "portrait" === this.orientation && 1 === this.direction || (this.bottomPage.getElement().style.zIndex = (this.getSettings().startZIndex + 3).toString(10), this.bottomPage.draw(t));
            }
          }, {
            key: "drawFrame",
            value: function drawFrame() {
              this.clear(), this.drawLeftPage(), this.drawRightPage(), this.drawBottomPage(), null != this.flippingPage && (this.flippingPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.flippingPage.draw()), null != this.shadow && null !== this.flippingPage && ("soft" === this.flippingPage.getDrawingDensity() ? (this.drawOuterShadow(), this.drawInnerShadow()) : (this.drawHardOuterShadow(), this.drawHardInnerShadow()));
            }
          }, {
            key: "clear",
            value: function clear() {
              var _iterator9 = _createForOfIteratorHelper(this.app.getPageCollection().getPages()),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var _t16 = _step9.value;
                  _t16 !== this.leftPage && _t16 !== this.rightPage && _t16 !== this.flippingPage && _t16 !== this.bottomPage && (_t16.getElement().style.cssText = "display: none"), _t16.getTemporaryCopy() !== this.flippingPage && _t16.hideTemporaryCopy();
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }
          }, {
            key: "update",
            value: function update() {
              _get3(_getPrototypeOf(w.prototype), "update", this).call(this), null !== this.rightPage && this.rightPage.setOrientation(1), null !== this.leftPage && this.leftPage.setOrientation(0);
            }
          }]);

          return w;
        }(l);

        var x = /*#__PURE__*/function () {
          function x() {
            _classCallCheck(this, x);

            this._default = {
              startPage: 0,
              size: "fixed",
              width: 0,
              height: 0,
              minWidth: 0,
              maxWidth: 0,
              minHeight: 0,
              maxHeight: 0,
              drawShadow: !0,
              flippingTime: 1e3,
              usePortrait: !0,
              startZIndex: 0,
              autoSize: !0,
              maxShadowOpacity: 1,
              showCover: !1,
              mobileScrollSupport: !0,
              swipeDistance: 30,
              clickEventForward: !0,
              useMouseEvents: !0,
              showPageCorners: !0,
              disableFlipByClick: !1
            };
          }

          _createClass(x, [{
            key: "getSettings",
            value: function getSettings(t) {
              var e = this._default;
              if (Object.assign(e, t), "stretch" !== e.size && "fixed" !== e.size) throw new Error('Invalid size type. Available only "fixed" and "stretch" value');
              if (e.width <= 0 || e.height <= 0) throw new Error("Invalid width or height");
              if (e.flippingTime <= 0) throw new Error("Invalid flipping time");
              return "stretch" === e.size ? (e.minWidth <= 0 && (e.minWidth = 100), e.maxWidth < e.minWidth && (e.maxWidth = 2e3), e.minHeight <= 0 && (e.minHeight = 100), e.maxHeight < e.minHeight && (e.maxHeight = 2e3)) : (e.minWidth = e.width, e.maxWidth = e.width, e.minHeight = e.height, e.maxHeight = e.height), e;
            }
          }]);

          return x;
        }();

        !function (t, e) {
          void 0 === e && (e = {});
          var i = e.insertAt;

          if (t && "undefined" != typeof document) {
            var s = document.head || document.getElementsByTagName("head")[0],
                n = document.createElement("style");
            n.type = "text/css", "top" === i && s.firstChild ? s.insertBefore(n, s.firstChild) : s.appendChild(n), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t));
          }
        }(".stf__parent {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  transform: translateZ(0);\n\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n\n.sft__wrapper {\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.stf__parent canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.stf__block {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  perspective: 2000px;\n}\n\n.stf__item {\n  display: none;\n  position: absolute;\n  transform-style: preserve-3d;\n}\n\n.stf__outerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__innerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__hardShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__hardInnerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}");
        t.PageFlip = /*#__PURE__*/function (_ref) {
          _inherits(_class, _ref);

          var _super10 = _createSuper(_class);

          function _class(t, e) {
            var _this14;

            _classCallCheck(this, _class);

            _this14 = _super10.call(this), _this14.isUserTouch = !1, _this14.isUserMove = !1, _this14.setting = null, _this14.pages = null, _this14.setting = new x().getSettings(e), _this14.block = t;
            return _this14;
          }

          _createClass(_class, [{
            key: "destroy",
            value: function destroy() {
              this.ui.destroy(), this.block.remove();
            }
          }, {
            key: "update",
            value: function update() {
              this.render.update(), this.pages.show();
            }
          }, {
            key: "loadFromImages",
            value: function loadFromImages(t) {
              var _this15 = this;

              this.ui = new u(this.block, this, this.setting);
              var e = this.ui.getCanvas();
              this.render = new d(this, this.setting, e), this.flipController = new g(this.render, this), this.pages = new n(this, this.render, t), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(function () {
                _this15.ui.update(), _this15.trigger("init", _this15, {
                  page: _this15.setting.startPage,
                  mode: _this15.render.getOrientation()
                });
              }, 1);
            }
          }, {
            key: "loadFromHTML",
            value: function loadFromHTML(t) {
              var _this16 = this;

              this.ui = new c(this.block, this, this.setting, t), this.render = new w(this, this.setting, this.ui.getDistElement()), this.flipController = new g(this.render, this), this.pages = new o(this, this.render, this.ui.getDistElement(), t), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(function () {
                _this16.ui.update(), _this16.trigger("init", _this16, {
                  page: _this16.setting.startPage,
                  mode: _this16.render.getOrientation()
                });
              }, 1);
            }
          }, {
            key: "updateFromImages",
            value: function updateFromImages(t) {
              var e = this.pages.getCurrentPageIndex();
              this.pages.destroy(), this.pages = new n(this, this.render, t), this.pages.load(), this.pages.show(e), this.trigger("update", this, {
                page: e,
                mode: this.render.getOrientation()
              });
            }
          }, {
            key: "updateFromHtml",
            value: function updateFromHtml(t) {
              var e = this.pages.getCurrentPageIndex();
              this.pages.destroy(), this.pages = new o(this, this.render, this.ui.getDistElement(), t), this.pages.load(), this.ui.updateItems(t), this.render.reload(), this.pages.show(e), this.trigger("update", this, {
                page: e,
                mode: this.render.getOrientation()
              });
            }
          }, {
            key: "clear",
            value: function clear() {
              this.pages.destroy(), this.ui.clear();
            }
          }, {
            key: "turnToPrevPage",
            value: function turnToPrevPage() {
              this.pages.showPrev();
            }
          }, {
            key: "turnToNextPage",
            value: function turnToNextPage() {
              this.pages.showNext();
            }
          }, {
            key: "turnToPage",
            value: function turnToPage(t) {
              this.pages.show(t);
            }
          }, {
            key: "flipNext",
            value: function flipNext() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "top";
              this.flipController.flipNext(t);
            }
          }, {
            key: "flipPrev",
            value: function flipPrev() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "top";
              this.flipController.flipPrev(t);
            }
          }, {
            key: "flip",
            value: function flip(t) {
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "top";
              this.flipController.flipToPage(t, e);
            }
          }, {
            key: "updateState",
            value: function updateState(t) {
              this.trigger("changeState", this, t);
            }
          }, {
            key: "updatePageIndex",
            value: function updatePageIndex(t) {
              this.trigger("flip", this, t);
            }
          }, {
            key: "updateOrientation",
            value: function updateOrientation(t) {
              this.ui.setOrientationStyle(t), this.update(), this.trigger("changeOrientation", this, t);
            }
          }, {
            key: "getPageCount",
            value: function getPageCount() {
              return this.pages.getPageCount();
            }
          }, {
            key: "getCurrentPageIndex",
            value: function getCurrentPageIndex() {
              return this.pages.getCurrentPageIndex();
            }
          }, {
            key: "getPage",
            value: function getPage(t) {
              return this.pages.getPage(t);
            }
          }, {
            key: "getRender",
            value: function getRender() {
              return this.render;
            }
          }, {
            key: "getFlipController",
            value: function getFlipController() {
              return this.flipController;
            }
          }, {
            key: "getOrientation",
            value: function getOrientation() {
              return this.render.getOrientation();
            }
          }, {
            key: "getBoundsRect",
            value: function getBoundsRect() {
              return this.render.getRect();
            }
          }, {
            key: "getSettings",
            value: function getSettings() {
              return this.setting;
            }
          }, {
            key: "getUI",
            value: function getUI() {
              return this.ui;
            }
          }, {
            key: "getState",
            value: function getState() {
              return this.flipController.getState();
            }
          }, {
            key: "getPageCollection",
            value: function getPageCollection() {
              return this.pages;
            }
          }, {
            key: "startUserTouch",
            value: function startUserTouch(t) {
              this.mousePosition = t, this.isUserTouch = !0, this.isUserMove = !1;
            }
          }, {
            key: "userMove",
            value: function userMove(t, e) {
              this.isUserTouch || e || !this.setting.showPageCorners ? this.isUserTouch && h.GetDistanceBetweenTwoPoint(this.mousePosition, t) > 5 && (this.isUserMove = !0, this.flipController.fold(t)) : this.flipController.showCorner(t);
            }
          }, {
            key: "userStop",
            value: function userStop(t) {
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
              this.isUserTouch && (this.isUserTouch = !1, e || (this.isUserMove ? this.flipController.stopMove() : this.flipController.flip(t)));
            }
          }]);

          return _class;
        }( /*#__PURE__*/function () {
          function _class2() {
            _classCallCheck(this, _class2);

            this.events = new Map();
          }

          _createClass(_class2, [{
            key: "on",
            value: function on(t, e) {
              return this.events.has(t) ? this.events.get(t).push(e) : this.events.set(t, [e]), this;
            }
          }, {
            key: "off",
            value: function off(t) {
              this.events["delete"](t);
            }
          }, {
            key: "trigger",
            value: function trigger(t, e) {
              var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

              if (this.events.has(t)) {
                var _iterator10 = _createForOfIteratorHelper(this.events.get(t)),
                    _step10;

                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var _s5 = _step10.value;

                    _s5({
                      data: i,
                      object: e
                    });
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }
              }
            }
          }]);

          return _class2;
        }()), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      });
      /***/
    },

    /***/
    14608:
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2PageModule": function Tab2PageModule() {
          return (
            /* binding */
            _Tab2PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab2.page */
      70442);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @awesome-cordova-plugins/screen-orientation/ngx */
      22321);
      /* harmony import */


      var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @awesome-cordova-plugins/status-bar/ngx */
      42848);
      /* harmony import */


      var _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @awesome-cordova-plugins/native-audio/ngx */
      50754);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Tab2PageModule = function _Tab2PageModule() {
        _classCallCheck(this, _Tab2PageModule);
      };

      _Tab2PageModule.ɵfac = function Tab2PageModule_Factory(t) {
        return new (t || _Tab2PageModule)();
      };

      _Tab2PageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _Tab2PageModule
      });
      _Tab2PageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [_awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeAudio, _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar, _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__.ScreenOrientation],
        imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{
          path: '',
          component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_Tab2PageModule, {
          declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page],
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    70442:
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2Page": function Tab2Page() {
          return (
            /* binding */
            _Tab2Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var page_flip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! page-flip */
      19800);
      /* harmony import */


      var page_flip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(page_flip__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @awesome-cordova-plugins/screen-orientation/ngx */
      22321);
      /* harmony import */


      var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @awesome-cordova-plugins/status-bar/ngx */
      42848);
      /* harmony import */


      var _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @awesome-cordova-plugins/native-audio/ngx */
      50754);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function Tab2Page_div_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
        }

        if (rf & 2) {
          var number_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](number_r2 % 2 ? "shadow-right" : "shadow-left");
        }
      }

      function Tab2Page_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, Tab2Page_div_5_div_2_Template, 1, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var number_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "./assets/cirkin_ordek_balasi/cob1/cob-", number_r2 - 1, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", number_r2 > 1);
        }
      }

      var _c0 = function _c0() {
        return [];
      };

      var myCustomIcon = '/assets/icons/custom.png';

      var _Tab2Page = /*#__PURE__*/function () {
        function _Tab2Page(nativeAudio, platform, screenOrientation, statusBar) {
          _classCallCheck(this, _Tab2Page);

          this.nativeAudio = nativeAudio;
          this.platform = platform;
          this.screenOrientation = screenOrientation;
          this.statusBar = statusBar;
          this.canPlay = true;
          this.currentPage = 0;
          console.log('almost here');
        }

        _createClass(_Tab2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.backgroundAudio.pause();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this17 = this;

            if (this.platform.is('cordova')) {
              this.platform.ready().then(function () {
                _this17.screenOrientation.lock('landscape').then(function (value) {// alert('success');
                }, function (reason) {// alert('fail:' + reason)
                })["catch"](function (reason) {// alert('fail2:' + reason)
                });

                _this17.startUp();
              }); // } else {
              //   this.startUp();
            } else {
              this.startUp();
            }
          }
        }, {
          key: "startUp",
          value: function startUp() {
            var _this18 = this;

            // alert('startup');
            this.statusBar.hide();
            var height = this.platform.height(); //window.screen.height;

            console.log('height:' + height + '  ' + window.screen.height);
            var width = this.platform.width();
            console.log('width:' + width + '  ' + window.screen.width);

            if (width < height) {
              width = Math.round(width) * 0.8;
            } else {
              width = width / 2;

              if (width > height) {
                width = Math.round(height * 0.8);
              } else {
                width = Math.round(width * 0.8);
              }
            }

            height = width;
            this.statusBar.hide();
            var bookElement = document.getElementById('book');
            this.pageFlip = new page_flip__WEBPACK_IMPORTED_MODULE_0__.PageFlip(bookElement, {
              width: width,
              height: height // required parameter - base page height

            });
            this.pageFlip.loadFromHTML(document.querySelectorAll('.my-page')); // ng build --base-href /cob/ --deploy-url /cob/

            this.pageFlip.on('flip', function (e) {
              _this18.backgroundAudio.pause();

              _this18.playPage(e.data / 2);
            });
            bookElement.style.marginLeft = '10vw';
            bookElement.style.marginTop = '4vh'; // bookElement.style.marginTop = (0.1 * height) + 'px';
            // console.log('(marginleft:' + (0.1 * width) + 'px');

            this.playPage(0);
          }
        }, {
          key: "onSuccess",
          value: function onSuccess() {
            console.log('success play');
          }
        }, {
          key: "onError",
          value: function onError(err) {
            console.log('error occurred:' + err);
          }
        }, {
          key: "playPage",
          value: function playPage(pageNumber) {
            this.currentPage = pageNumber;

            if (!this.isPlaying()) {
              this.backgroundAudio = new Audio('./assets/cirkin_ordek_balasi/cob1/sounds/cob-' + pageNumber + '.mp3'); // new Audio();
              // this.backgroundAudio.src = './assets/cirkin_ordek_balasi/cob1/sounds/cob-' + pageNumber + '.mp3';
              // this.backgroundAudio.loop = false;
              // this.backgroundAudio.load();

              this.backgroundAudio.onended = function () {
                console.log('ended');
              };

              this.backgroundAudio.play(); // TODO fix below
              // this.nativeAudio.play(pageNumber.toString()).then(this.onSuccess, this.onError);
            }
          }
        }, {
          key: "isPlaying",
          value: function isPlaying() {
            return this.backgroundAudio && this.backgroundAudio.currentTime > 0 && !this.backgroundAudio.paused && !this.backgroundAudio.ended && this.backgroundAudio.readyState > 2;
          } // constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController) {}
          //
          // async ngOnInit() {
          //   await this.photoService.loadSaved();
          // }
          //
          // public async showActionSheet(photo: UserPhoto, position: number) {
          //   const actionSheet = await this.actionSheetController.create({
          //     header: 'Photos',
          //     buttons: [{
          //       text: 'Delete',
          //       role: 'destructive',
          //       icon: 'trash',
          //       handler: () => {
          //         this.photoService.deletePicture(photo, position);
          //       }
          //     }, {
          //       text: 'Cancel',
          //       icon: 'close',
          //       role: 'cancel',
          //       handler: () => {
          //         // Nothing to do, action sheet is automatically closed
          //        }
          //     }]
          //   });
          //   await actionSheet.present();
          // }

        }, {
          key: "prevPage",
          value: function prevPage() {
            if (this.currentPage > 0) {
              this.pageFlip.flipPrev();
              this.playPage(this.currentPage - 1);
            }
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            if (this.currentPage < 26) {
              this.pageFlip.flipNext();
              this.playPage(this.currentPage + 1);
            }
          }
        }]);

        return _Tab2Page;
      }();

      _Tab2Page.ɵfac = function Tab2Page_Factory(t) {
        return new (t || _Tab2Page)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeAudio), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_1__.ScreenOrientation), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar));
      };

      _Tab2Page.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _Tab2Page,
        selectors: [["app-tab2"]],
        decls: 18,
        vars: 2,
        consts: [["size", "12"], ["id", "book", 1, "my-book"], ["class", "my-page", 4, "ngFor", "ngForOf"], [1, "ion-text-center"], ["size", "large", 3, "click"], ["name", "arrow-back", "start", ""], ["size", "large"], ["name", "play", "center", ""], ["name", "arrow-forward", "end", ""], [1, "my-page"], [2, "height", "inherit", "width", "inherit", 3, "src"], [3, "class", 4, "ngIf"]],
        template: function Tab2Page_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-col", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, Tab2Page_div_5_Template, 3, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-col", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-col", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Tab2Page_Template_ion_button_click_10_listener() {
              return ctx.prevPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ion-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-col", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "ion-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-col", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Tab2Page_Template_ion_button_click_16_listener() {
              return ctx.nextPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "ion-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0).constructor(26));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
        styles: [".my-book[_ngcontent-%COMP%] {\n  border-width: 2px;\n  border-color: red;\n  background-repeat: no-repeat;\n  box-shadow: 20px 20px 20px darkgray;\n}\n\np[_ngcontent-%COMP%] {\n  width: auto;\n  text-align: left;\n}\n\n.my-page[_ngcontent-%COMP%] {\n  text-align: center;\n  outline: 0px solid #ccc;\n  box-shadow: inset -10px 0 10px 0 rgba(0, 0, 0, 0.25);\n}\n\n.shadow-right[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-shadow: inset 20px 0 20px 0 #000000;\n  opacity: 0.6;\n  top: 0;\n  left: 0;\n}\n\n.shadow-left[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-shadow: inset -20px 0 20px 0 #000000;\n  opacity: 0.6;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEsbUNBQUE7QUFMRjs7QUFRQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUxGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9EQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBRUEsTUFBQTtFQUNBLE9BQUE7QUFMRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUpGIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4vLyAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbi8vXG4vL1xuLy99XG4ubXktYm9vayB7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3gtc2hhZG93OiAyMHB4IDIwcHggMjBweCBkYXJrZ3JheTtcbn1cblxucCB7XG4gIHdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm15LXBhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IDBweCBzb2xpZCAjY2NjO1xuICBib3gtc2hhZG93OiBpbnNldCAtMTBweCAwIDEwcHggMCBoc2xhKDAsMCUsMCUsLjI1KTtcbn1cblxuLnNoYWRvdy1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMjBweCAwIDIwcHggMCAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjY7XG4gIC8vYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuLnNoYWRvdy1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiBpbnNldCAtMjBweCAwIDIwcHggMCAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjY7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    64762:
    /*!*****************************************!*\
      !*** ./node_modules/tslib/tslib.es6.js ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "__extends": function __extends() {
          return (
            /* binding */
            _extends
          );
        },

        /* harmony export */
        "__assign": function __assign() {
          return (
            /* binding */
            _assign2
          );
        },

        /* harmony export */
        "__rest": function __rest() {
          return (
            /* binding */
            _rest
          );
        },

        /* harmony export */
        "__decorate": function __decorate() {
          return (
            /* binding */
            _decorate
          );
        },

        /* harmony export */
        "__param": function __param() {
          return (
            /* binding */
            _param
          );
        },

        /* harmony export */
        "__metadata": function __metadata() {
          return (
            /* binding */
            _metadata
          );
        },

        /* harmony export */
        "__awaiter": function __awaiter() {
          return (
            /* binding */
            _awaiter
          );
        },

        /* harmony export */
        "__generator": function __generator() {
          return (
            /* binding */
            _generator
          );
        },

        /* harmony export */
        "__createBinding": function __createBinding() {
          return (
            /* binding */
            _createBinding
          );
        },

        /* harmony export */
        "__exportStar": function __exportStar() {
          return (
            /* binding */
            _exportStar
          );
        },

        /* harmony export */
        "__values": function __values() {
          return (
            /* binding */
            _values
          );
        },

        /* harmony export */
        "__read": function __read() {
          return (
            /* binding */
            _read
          );
        },

        /* harmony export */
        "__spread": function __spread() {
          return (
            /* binding */
            _spread
          );
        },

        /* harmony export */
        "__spreadArrays": function __spreadArrays() {
          return (
            /* binding */
            _spreadArrays
          );
        },

        /* harmony export */
        "__spreadArray": function __spreadArray() {
          return (
            /* binding */
            _spreadArray
          );
        },

        /* harmony export */
        "__await": function __await() {
          return (
            /* binding */
            _await
          );
        },

        /* harmony export */
        "__asyncGenerator": function __asyncGenerator() {
          return (
            /* binding */
            _asyncGenerator
          );
        },

        /* harmony export */
        "__asyncDelegator": function __asyncDelegator() {
          return (
            /* binding */
            _asyncDelegator
          );
        },

        /* harmony export */
        "__asyncValues": function __asyncValues() {
          return (
            /* binding */
            _asyncValues
          );
        },

        /* harmony export */
        "__makeTemplateObject": function __makeTemplateObject() {
          return (
            /* binding */
            _makeTemplateObject
          );
        },

        /* harmony export */
        "__importStar": function __importStar() {
          return (
            /* binding */
            _importStar
          );
        },

        /* harmony export */
        "__importDefault": function __importDefault() {
          return (
            /* binding */
            _importDefault
          );
        },

        /* harmony export */
        "__classPrivateFieldGet": function __classPrivateFieldGet() {
          return (
            /* binding */
            _classPrivateFieldGet
          );
        },

        /* harmony export */
        "__classPrivateFieldSet": function __classPrivateFieldSet() {
          return (
            /* binding */
            _classPrivateFieldSet
          );
        }
        /* harmony export */

      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function _extends(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign2 = function _assign() {
        _assign2 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign2.apply(this, arguments);
      };

      function _rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function _decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function _param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function _metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function _awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function _generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      var _createBinding = Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      };

      function _exportStar(m, o) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) _createBinding(o, m, p);
        }
      }

      function _values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function _read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }
      /** @deprecated */


      function _spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(_read(arguments[i]));
        }

        return ar;
      }
      /** @deprecated */


      function _spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      function _spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
          to[j] = from[i];
        }

        return to;
      }

      function _await(v) {
        return this instanceof _await ? (this.v = v, this) : new _await(v);
      }

      function _asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof _await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function _asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: _await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function _asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof _values === "function" ? _values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function _makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      var __setModuleDefault = Object.create ? function (o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function (o, v) {
        o["default"] = v;
      };

      function _importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) _createBinding(result, mod, k);
        }

        __setModuleDefault(result, mod);

        return result;
      }

      function _importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function _classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      }

      function _classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_tab2_tab2_module_ts-es5.js.map