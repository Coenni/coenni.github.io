(self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 16351:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/awesome-cordova-plugin.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": function() { return /* binding */ AwesomeCordovaNativePlugin; }
/* harmony export */ });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ 9343);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 91674);


var AwesomeCordovaNativePlugin = /** @class */ (function () {
    function AwesomeCordovaNativePlugin() {
    }
    /**
     * Returns a boolean that indicates whether the plugin is installed
     *
     * @returns {boolean}
     */
    AwesomeCordovaNativePlugin.installed = function () {
        var isAvailable = (0,_decorators_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(this.pluginRef) === true;
        return isAvailable;
    };
    /**
     * Returns the original plugin object
     */
    AwesomeCordovaNativePlugin.getPlugin = function () {
        if (typeof window !== 'undefined') {
            return (0,_util__WEBPACK_IMPORTED_MODULE_1__.get)(window, this.pluginRef);
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
}());

//# sourceMappingURL=awesome-cordova-plugin.js.map

/***/ }),

/***/ 46367:
/*!******************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/bootstrap.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkReady": function() { return /* binding */ checkReady; }
/* harmony export */ });
/**
 *
 */
function checkReady() {
    if (typeof process === 'undefined') {
        var win_1 = typeof window !== 'undefined' ? window : {};
        var DEVICE_READY_TIMEOUT_1 = 5000;
        // To help developers using cordova, we listen for the device ready event and
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
}
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ 9343:
/*!**************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/common.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERR_CORDOVA_NOT_AVAILABLE": function() { return /* binding */ ERR_CORDOVA_NOT_AVAILABLE; },
/* harmony export */   "ERR_PLUGIN_NOT_INSTALLED": function() { return /* binding */ ERR_PLUGIN_NOT_INSTALLED; },
/* harmony export */   "getPromise": function() { return /* binding */ getPromise; },
/* harmony export */   "wrapPromise": function() { return /* binding */ wrapPromise; },
/* harmony export */   "checkAvailability": function() { return /* binding */ checkAvailability; },
/* harmony export */   "instanceAvailability": function() { return /* binding */ instanceAvailability; },
/* harmony export */   "setIndex": function() { return /* binding */ setIndex; },
/* harmony export */   "callCordovaPlugin": function() { return /* binding */ callCordovaPlugin; },
/* harmony export */   "callInstance": function() { return /* binding */ callInstance; },
/* harmony export */   "getPlugin": function() { return /* binding */ getPlugin; },
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "pluginWarn": function() { return /* binding */ pluginWarn; },
/* harmony export */   "cordovaWarn": function() { return /* binding */ cordovaWarn; },
/* harmony export */   "wrap": function() { return /* binding */ wrap; },
/* harmony export */   "wrapInstance": function() { return /* binding */ wrapInstance; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 22759);

var ERR_CORDOVA_NOT_AVAILABLE = { error: 'cordova_not_available' };
var ERR_PLUGIN_NOT_INSTALLED = { error: 'plugin_not_installed' };
/**
 * @param callback
 */
function getPromise(callback) {
    var tryNativePromise = function () {
        if (Promise) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
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
function wrapPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    var pluginResult, rej;
    var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
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
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
        }
        rej = reject;
    });
    // Angular throws an error on unhandled rejection, but in this case we have already printed
    // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
    // to error
    if (pluginResult && pluginResult.error) {
        p.catch(function () { });
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
    if (opts === void 0) { opts = {}; }
    return getPromise(function (resolve, reject) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
        if (pluginResult) {
            if (pluginResult.error) {
                reject(pluginResult.error);
            }
            else if (pluginResult.then) {
                pluginResult.then(resolve).catch(reject);
            }
        }
        else {
            reject({ error: 'unexpected_error' });
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
    if (opts === void 0) { opts = {}; }
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var pluginResult;
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
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
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }
        if (pluginResult && pluginResult.error) {
            observer.error(pluginResult.error);
            observer.complete();
        }
        return function () {
            try {
                if (opts.clearFunction) {
                    if (opts.clearWithArgs) {
                        return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                    }
                    return callCordovaPlugin(pluginObj, opts.clearFunction, []);
                }
            }
            catch (e) {
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
    element =
        typeof window !== 'undefined' && element
            ? get(window, element)
            : element || (typeof window !== 'undefined' ? window : {});
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(element, event);
}
/**
 * @param plugin
 * @param methodName
 * @param pluginName
 */
function checkAvailability(plugin, methodName, pluginName) {
    var pluginRef, pluginPackage;
    if (typeof plugin === 'string') {
        pluginRef = plugin;
    }
    else {
        pluginRef = plugin.constructor.getPluginRef();
        pluginName = plugin.constructor.getPluginName();
        pluginPackage = plugin.constructor.getPluginInstallName();
    }
    var pluginInstance = getPlugin(pluginRef);
    if (!pluginInstance || (!!methodName && typeof pluginInstance[methodName] === 'undefined')) {
        if (typeof window === 'undefined' || !window.cordova) {
            cordovaWarn(pluginName, methodName);
            return ERR_CORDOVA_NOT_AVAILABLE;
        }
        pluginWarn(pluginName, pluginPackage, methodName);
        return ERR_PLUGIN_NOT_INSTALLED;
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
function instanceAvailability(pluginObj, methodName) {
    return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
}
/**
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function setIndex(args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // ignore resolve and reject in case sync
    if (opts.sync) {
        return args;
    }
    // If the plugin method expects myMethod(success, err, options)
    if (opts.callbackOrder === 'reverse') {
        // Get those arguments in the order [resolve, reject, ...restOfArgs]
        args.unshift(reject);
        args.unshift(resolve);
    }
    else if (opts.callbackStyle === 'node') {
        args.push(function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    }
    else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
        var obj = {};
        obj[opts.successName] = resolve;
        obj[opts.errorName] = reject;
        args.push(obj);
    }
    else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
        var setSuccessIndex = function () {
            // If we've specified a success/error index
            if (opts.successIndex > args.length) {
                args[opts.successIndex] = resolve;
            }
            else {
                args.splice(opts.successIndex, 0, resolve);
            }
        };
        var setErrorIndex = function () {
            // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
            // defined and thus causing non expected behavior.
            if (opts.errorIndex > args.length) {
                args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
            }
            else {
                args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
            }
        };
        if (opts.successIndex > opts.errorIndex) {
            setErrorIndex();
            setSuccessIndex();
        }
        else {
            setSuccessIndex();
            setErrorIndex();
        }
    }
    else {
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
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // Try to figure out where the success/error callbacks need to be bound
    // to our promise resolve/reject handlers.
    args = setIndex(args, opts, resolve, reject);
    var availabilityCheck = checkAvailability(pluginObj, methodName);
    if (availabilityCheck === true) {
        var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
        // eslint-disable-next-line prefer-spread
        return pluginInstance[methodName].apply(pluginInstance, args);
    }
    else {
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
function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    args = setIndex(args, opts, resolve, reject);
    if (instanceAvailability(pluginObj, methodName)) {
        // eslint-disable-next-line prefer-spread
        return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
    }
}
/**
 * @param pluginRef
 */
function getPlugin(pluginRef) {
    if (typeof window !== 'undefined') {
        return get(window, pluginRef);
    }
    return null;
}
/**
 * @param element
 * @param path
 */
function get(element, path) {
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
function pluginWarn(pluginName, plugin, method) {
    if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
    }
    else {
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
function cordovaWarn(pluginName, method) {
    if (typeof process === 'undefined') {
        if (method) {
            console.warn('Native: tried calling ' +
                pluginName +
                '.' +
                method +
                ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
        else {
            console.warn('Native: tried accessing the ' +
                pluginName +
                ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    }
}
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
var wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
            return callCordovaPlugin(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return wrapObservable(pluginObj, methodName, args, opts);
        }
        else if (opts.eventObservable && opts.event) {
            return wrapEventObservable(opts.event, opts.element);
        }
        else if (opts.otherPromise) {
            return wrapOtherPromise(pluginObj, methodName, args, opts);
        }
        else {
            return wrapPromise(pluginObj, methodName, args, opts);
        }
    };
};
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
function wrapInstance(pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            return callInstance(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
                var pluginResult;
                if (opts.destruct) {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
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
                }
                else {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                }
                if (pluginResult && pluginResult.error) {
                    observer.error(pluginResult.error);
                }
                return function () {
                    try {
                        if (opts.clearWithArgs) {
                            return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                        }
                        return callInstance(pluginObj, opts.clearFunction, []);
                    }
                    catch (e) {
                        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                        console.warn(e);
                    }
                };
            });
        }
        else if (opts.otherPromise) {
            return getPromise(function (resolve, reject) {
                var result;
                if (opts.destruct) {
                    result = callInstance(pluginObj, methodName, args, opts, function () {
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
                }
                else {
                    result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                if (result && result.then) {
                    result.then(resolve, reject);
                }
                else {
                    reject();
                }
            });
        }
        else {
            var pluginResult_1, rej_1;
            var p = getPromise(function (resolve, reject) {
                if (opts.destruct) {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
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
                }
                else {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                rej_1 = reject;
            });
            // Angular throws an error on unhandled rejection, but in this case we have already printed
            // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
            // to error
            if (pluginResult_1 && pluginResult_1.error) {
                p.catch(function () { });
                typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
            }
            return p;
        }
    };
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 531:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-function-override.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaFunctionOverride": function() { return /* binding */ cordovaFunctionOverride; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9343);


/**
 * @param pluginObj
 * @param methodName
 */
function overrideFunction(pluginObj, methodName) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
        var availabilityCheck = (0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, methodName);
        if (availabilityCheck === true) {
            var pluginInstance_1 = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef());
            pluginInstance_1[methodName] = observer.next.bind(observer);
            return function () { return (pluginInstance_1[methodName] = function () { }); };
        }
        else {
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
function cordovaFunctionOverride(pluginObj, methodName, args) {
    if (args === void 0) { args = []; }
    return overrideFunction(pluginObj, methodName);
}
//# sourceMappingURL=cordova-function-override.js.map

/***/ }),

/***/ 90808:
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-instance.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaInstance": function() { return /* binding */ cordovaInstance; }
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9343);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
function cordovaInstance(pluginObj, methodName, config, args) {
    args = Array.from(args);
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrapInstance)(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova-instance.js.map

/***/ }),

/***/ 34070:
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-property.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaPropertyGet": function() { return /* binding */ cordovaPropertyGet; },
/* harmony export */   "cordovaPropertySet": function() { return /* binding */ cordovaPropertySet; }
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9343);

/**
 * @param pluginObj
 * @param key
 */
function cordovaPropertyGet(pluginObj, key) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
        return (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key];
    }
    return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */
function cordovaPropertySet(pluginObj, key, value) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
        (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key] = value;
    }
}
//# sourceMappingURL=cordova-property.js.map

/***/ }),

/***/ 43364:
/*!***************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordova": function() { return /* binding */ cordova; }
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9343);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
function cordova(pluginObj, methodName, config, args) {
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrap)(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova.js.map

/***/ }),

/***/ 70422:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/instance-property.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instancePropertyGet": function() { return /* binding */ instancePropertyGet; },
/* harmony export */   "instancePropertySet": function() { return /* binding */ instancePropertySet; }
/* harmony export */ });
/**
 * @param pluginObj
 * @param key
 */
function instancePropertyGet(pluginObj, key) {
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
function instancePropertySet(pluginObj, key, value) {
    if (pluginObj._objectInstance) {
        pluginObj._objectInstance[key] = value;
    }
}
//# sourceMappingURL=instance-property.js.map

/***/ }),

/***/ 60303:
/*!******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/interfaces.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ 16887:
/*!**************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": function() { return /* reexport safe */ _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__.AwesomeCordovaNativePlugin; },
/* harmony export */   "checkAvailability": function() { return /* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.checkAvailability; },
/* harmony export */   "instanceAvailability": function() { return /* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.instanceAvailability; },
/* harmony export */   "wrap": function() { return /* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.wrap; },
/* harmony export */   "getPromise": function() { return /* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.getPromise; },
/* harmony export */   "cordova": function() { return /* reexport safe */ _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__.cordova; },
/* harmony export */   "cordovaFunctionOverride": function() { return /* reexport safe */ _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__.cordovaFunctionOverride; },
/* harmony export */   "cordovaInstance": function() { return /* reexport safe */ _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__.cordovaInstance; },
/* harmony export */   "cordovaPropertyGet": function() { return /* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertyGet; },
/* harmony export */   "cordovaPropertySet": function() { return /* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertySet; },
/* harmony export */   "instancePropertyGet": function() { return /* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertyGet; },
/* harmony export */   "instancePropertySet": function() { return /* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertySet; }
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ 46367);
/* harmony import */ var _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awesome-cordova-plugin */ 16351);
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ 9343);
/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ 43364);
/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ 531);
/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ 90808);
/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ 34070);
/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ 70422);
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ 60303);


// Decorators







(0,_bootstrap__WEBPACK_IMPORTED_MODULE_0__.checkReady)();

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 91674:
/*!*************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/util.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "getPromise": function() { return /* binding */ getPromise; }
/* harmony export */ });
/**
 * @param element
 * @param path
 * @private
 */
function get(element, path) {
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
function getPromise(callback) {
    if (callback === void 0) { callback = function () { }; }
    var tryNativePromise = function () {
        if (typeof Promise === 'function' || (typeof window !== 'undefined' && window.Promise)) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    return tryNativePromise();
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 50754:
/*!**************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/native-audio/__ivy_ngcc__/ngx/index.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NativeAudio": function() { return /* binding */ NativeAudio; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 16887);




var NativeAudio = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(NativeAudio, _super);
    function NativeAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeAudio.prototype.preloadSimple = function (id, assetPath) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "preloadSimple", {}, arguments); };
    NativeAudio.prototype.preloadComplex = function (id, assetPath, volume, voices, delay) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "preloadComplex", {}, arguments); };
    NativeAudio.prototype.play = function (id, completeCallback) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "play", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    NativeAudio.prototype.stop = function (id) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stop", {}, arguments); };
    NativeAudio.prototype.loop = function (id) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "loop", {}, arguments); };
    NativeAudio.prototype.unload = function (id) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "unload", {}, arguments); };
    NativeAudio.prototype.setVolumeForComplexAsset = function (id, volume) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setVolumeForComplexAsset", {}, arguments); };
    NativeAudio.pluginName = "NativeAudio";
    NativeAudio.plugin = "cordova-plugin-nativeaudio";
    NativeAudio.pluginRef = "plugins.NativeAudio";
    NativeAudio.repo = "https://github.com/floatinghotpot/cordova-plugin-nativeaudio";
    NativeAudio.platforms = ["Android", "Browser", "iOS"];
NativeAudio.ɵfac = /*@__PURE__*/ function () { var ɵNativeAudio_BaseFactory; return function NativeAudio_Factory(t) { return (ɵNativeAudio_BaseFactory || (ɵNativeAudio_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NativeAudio)))(t || NativeAudio); }; }();
NativeAudio.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NativeAudio, factory: function (t) { return NativeAudio.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NativeAudio, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return NativeAudio;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2lucy9uYXRpdmUtYXVkaW8vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0FBQzVGO0FBRTJCLElBbUNNLCtCQUEwQjtBQUFDO0FBRXZDO0FBQXlFO0FBQU0sSUFPbEcsbUNBQWEsYUFBQyxFQUFVLEVBQUUsU0FBaUI7QUFLekIsSUFVbEIsb0NBQWMsYUFBQyxFQUFVLEVBQUUsU0FBaUIsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLEtBQWE7QUFLeEUsSUFVbkIsMEJBQUksYUFBQyxFQUFVLEVBQUUsZ0JBQTJCO0FBT2hDLElBSVosMEJBQUksYUFBQyxFQUFVO0FBS04sSUFNVCwwQkFBSSxhQUFDLEVBQVU7QUFLTixJQU1ULDRCQUFNLGFBQUMsRUFBVTtBQUtOLElBT1gsOENBQXdCLGFBQUMsRUFBVSxFQUFFLE1BQWM7QUFJakI7QUFBNEM7QUFBdUQ7QUFBbUQ7QUFBdUY7K0NBekZoUixVQUFVOzs7OzBCQUNMO0FBQUMsc0JBdkNQO0FBQUUsRUF1QytCLDBCQUEwQjtBQUMxRCxTQURZLFdBQVc7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG4vKipcbiAqIEBuYW1lIE5hdGl2ZSBBdWRpb1xuICogQGRlc2NyaXB0aW9uIE5hdGl2ZSBBdWRpbyBQbGF5YmFja1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOYXRpdmVBdWRpbyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9uYXRpdmUtYXVkaW8vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdGl2ZUF1ZGlvOiBOYXRpdmVBdWRpbykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5wcmVsb2FkU2ltcGxlKCd1bmlxdWVJZDEnLCAncGF0aC90by9maWxlLm1wMycpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAqIHRoaXMubmF0aXZlQXVkaW8ucHJlbG9hZENvbXBsZXgoJ3VuaXF1ZUlkMicsICdwYXRoL3RvL2ZpbGUyLm1wMycsIDEsIDEsIDApLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnBsYXkoJ3VuaXF1ZUlkMScpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAqXG4gKiAvLyBjYW4gb3B0aW9uYWxseSBwYXNzIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGZpbGUgaXMgZG9uZSBwbGF5aW5nXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnBsYXkoJ3VuaXF1ZUlkMScsICgpID0+IGNvbnNvbGUubG9nKCd1bmlxdWVJZDEgaXMgZG9uZSBwbGF5aW5nJykpO1xuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8ubG9vcCgndW5pcXVlSWQyJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8uc2V0Vm9sdW1lRm9yQ29tcGxleEFzc2V0KCd1bmlxdWVJZDInLCAwLjYpLnRoZW4ob25TdWNjZXNzLG9uRXJyb3IpO1xuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8uc3RvcCgndW5pcXVlSWQxJykudGhlbihvblN1Y2Nlc3Msb25FcnJvcik7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby51bmxvYWQoJ3VuaXF1ZUlkMScpLnRoZW4ob25TdWNjZXNzLG9uRXJyb3IpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05hdGl2ZUF1ZGlvJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmF0aXZlYXVkaW8nLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLk5hdGl2ZUF1ZGlvJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9mbG9hdGluZ2hvdHBvdC9jb3Jkb3ZhLXBsdWdpbi1uYXRpdmVhdWRpbycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdGl2ZUF1ZGlvIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogTG9hZHMgYW4gYXVkaW8gZmlsZSBpbnRvIG1lbW9yeS4gT3B0aW1pemVkIGZvciBzaG9ydCBjbGlwcyAvIHNpbmdsZSBzaG90cyAodXAgdG8gZml2ZSBzZWNvbmRzKS4gQ2Fubm90IGJlIHN0b3BwZWQgLyBsb29wZWQuXG4gICAqXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEBwYXJhbSBhc3NldFBhdGgge3N0cmluZ30gIHRoZSByZWxhdGl2ZSBwYXRoIG9yIGFic29sdXRlIFVSTCAoaW5sdWRpbmcgaHR0cDovLykgdG8gdGhlIGF1ZGlvIGFzc2V0LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmVsb2FkU2ltcGxlKGlkOiBzdHJpbmcsIGFzc2V0UGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgYW4gYXVkaW8gZmlsZSBpbnRvIG1lbW9yeS4gT3B0aW1pemVkIGZvciBiYWNrZ3JvdW5kIG11c2ljIC8gYW1iaWVudCBzb3VuZC4gVXNlcyBoaWdobGV2ZWwgbmF0aXZlIEFQSXMgd2l0aCBhIGxhcmdlciBmb290cHJpbnQuIChpT1M6IEFWQXVkaW9QbGF5ZXIpLiBDYW4gYmUgc3RvcHBlZCAvIGxvb3BlZCBhbmQgdXNlZCB3aXRoIG11bHRpcGxlIHZvaWNlcy4gQ2FuIGJlIGZhZGVkIGluIGFuZCBvdXQgdXNpbmcgdGhlIGRlbGF5IHBhcmFtZXRlci5cbiAgICpcbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHBhcmFtIGFzc2V0UGF0aCB7c3RyaW5nfSAgdGhlIHJlbGF0aXZlIHBhdGggb3IgYWJzb2x1dGUgVVJMIChpbmx1ZGluZyBodHRwOi8vKSB0byB0aGUgYXVkaW8gYXNzZXQuXG4gICAqIEBwYXJhbSB2b2x1bWUge251bWJlcn0gdGhlIHZvbHVtZSBvZiB0aGUgcHJlbG9hZGVkIHNvdW5kICgwLjEgdG8gMS4wKVxuICAgKiBAcGFyYW0gdm9pY2VzIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgbXVsdGljaGFubmVsIHZvaWNlcyBhdmFpbGFibGVcbiAgICogQHBhcmFtIGRlbGF5IHtudW1iZXJ9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByZWxvYWRDb21wbGV4KGlkOiBzdHJpbmcsIGFzc2V0UGF0aDogc3RyaW5nLCB2b2x1bWU6IG51bWJlciwgdm9pY2VzOiBudW1iZXIsIGRlbGF5OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQbGF5cyBhbiBhdWRpbyBhc3NldFxuICAgKlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcGFyYW0gY29tcGxldGVDYWxsYmFjayB7RnVuY3Rpb259IG9wdGlvbmFsLiBDYWxsYmFjayB0byBiZSBpbnZva2VkIHdoZW4gYXVkaW8gaXMgZG9uZSBwbGF5aW5nXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHBsYXkoaWQ6IHN0cmluZywgY29tcGxldGVDYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgcGxheWluZyBhbiBhdWRpb1xuICAgKlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29wcyBhbiBhdWRpbyBhc3NldCBpbmZpbml0ZWx5LCB0aGlzIG9ubHkgd29ya3MgZm9yIGNvbXBsZXggYXNzZXRzXG4gICAqXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvb3AoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVubG9hZHMgYW4gYXVkaW8gZmlsZSBmcm9tIG1lbW9yeVxuICAgKlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bmxvYWQoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHZvbHVtZSBmb3IgcHJlbG9hZGVkIGNvbXBsZXggYXNzZXRzLlxuICAgKlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcGFyYW0gdm9sdW1lIHtudW1iZXJ9IHRoZSB2b2x1bWUgb2YgdGhlIGF1ZGlvIGFzc2V0ICgwLjEgdG8gMS4wKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRWb2x1bWVGb3JDb21wbGV4QXNzZXQoaWQ6IHN0cmluZywgdm9sdW1lOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ 22321:
/*!********************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/screen-orientation/__ivy_ngcc__/ngx/index.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenOrientation": function() { return /* binding */ ScreenOrientation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 16887);





var ScreenOrientation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ScreenOrientation, _super);
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
            ANY: 'any',
        };
        return _this;
    }
    ScreenOrientation.prototype.onChange = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "onChange", { "eventObservable": true, "event": "orientationchange", "element": "window" }, arguments); };
    ScreenOrientation.prototype.lock = function (orientation) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "lock", { "otherPromise": true }, arguments); };
    ScreenOrientation.prototype.unlock = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "unlock", { "sync": true }, arguments); };
    Object.defineProperty(ScreenOrientation.prototype, "type", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "type"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "type", value); },
        enumerable: false,
        configurable: true
    });
    ScreenOrientation.pluginName = "ScreenOrientation";
    ScreenOrientation.plugin = "cordova-plugin-screen-orientation";
    ScreenOrientation.pluginRef = "screen.orientation";
    ScreenOrientation.repo = "https://github.com/apache/cordova-plugin-screen-orientation";
    ScreenOrientation.platforms = ["Android", "iOS", "Windows"];
ScreenOrientation.ɵfac = /*@__PURE__*/ function () { var ɵScreenOrientation_BaseFactory; return function ScreenOrientation_Factory(t) { return (ɵScreenOrientation_BaseFactory || (ɵScreenOrientation_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ScreenOrientation)))(t || ScreenOrientation); }; }();
ScreenOrientation.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ScreenOrientation, factory: function (t) { return ScreenOrientation.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ScreenOrientation, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return ScreenOrientation;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2lucy9zY3JlZW4tb3JpZW50YXRpb24vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sK0VBQWdFLE1BQU0sK0JBQStCLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFDbEM7QUFHMEIsSUFvRGEscUNBQTBCO0FBQUM7QUFFdkM7QUFHSyxRQUo5QjtBQUNGO0FBRUEsV0FESztBQUNMLFFBQUUsa0JBQVksR0FBRztBQUNqQixZQUFJLGdCQUFnQixFQUFFLGtCQUFrQjtBQUN4QyxZQUFJLGtCQUFrQixFQUFFLG9CQUFvQjtBQUM1QyxZQUFJLGlCQUFpQixFQUFFLG1CQUFtQjtBQUMxQyxZQUFJLG1CQUFtQixFQUFFLHFCQUFxQjtBQUM5QyxZQUFJLFFBQVEsRUFBRSxVQUFVO0FBQ3hCLFlBQUksU0FBUyxFQUFFLFdBQVc7QUFDMUIsWUFBSSxHQUFHLEVBQUUsS0FBSztBQUNkLFNBQUcsQ0FBQztBQUNKO0FBQ2dCO0FBQU0sSUFTcEIsb0NBQVE7QUFRRSxJQUlWLGdDQUFJLGFBQUMsV0FBbUI7QUFLTyxJQUcvQixrQ0FBTTtBQUtBLDBCQUNOLG1DQUFJO0FBQUk7QUFFcUQ7QUFBNEU7QUFBMkI7QUFBMkI7QUFBUTtBQUF3RDtBQUFvRTtBQUF3RDtBQUE0RjtxREFwRHhkLFVBQVU7Ozs7MEJBQ0w7QUFBQyw0QkExRFA7QUFBRSxFQTBEcUMsMEJBQTBCO0FBQ2hFLFNBRFksaUJBQWlCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgU2NyZWVuIE9yaWVudGF0aW9uXG4gKiBAcHJlbWllciBzY3JlZW4tb3JpZW50YXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gdG8gc2V0L2xvY2sgdGhlIHNjcmVlbiBvcmllbnRhdGlvbiBpbiBhIGNvbW1vbiB3YXkuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1zY3JlZW4tb3JpZW50YXRpb25gLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbU2NyZWVuIE9yaWVudGF0aW9uIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXNjcmVlbi1vcmllbnRhdGlvbikuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNjcmVlbk9yaWVudGF0aW9uIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NjcmVlbi1vcmllbnRhdGlvbi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NyZWVuT3JpZW50YXRpb246IFNjcmVlbk9yaWVudGF0aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogLy8gZ2V0IGN1cnJlbnRcbiAqIGNvbnNvbGUubG9nKHRoaXMuc2NyZWVuT3JpZW50YXRpb24udHlwZSk7IC8vIGxvZ3MgdGhlIGN1cnJlbnQgb3JpZW50YXRpb24sIGV4YW1wbGU6ICdsYW5kc2NhcGUnXG4gKlxuICogLy8gc2V0IHRvIGxhbmRzY2FwZVxuICogdGhpcy5zY3JlZW5PcmllbnRhdGlvbi5sb2NrKHRoaXMuc2NyZWVuT3JpZW50YXRpb24uT1JJRU5UQVRJT05TLkxBTkRTQ0FQRSk7XG4gKlxuICogLy8gYWxsb3cgdXNlciByb3RhdGVcbiAqIHRoaXMuc2NyZWVuT3JpZW50YXRpb24udW5sb2NrKCk7XG4gKlxuICogLy8gZGV0ZWN0IG9yaWVudGF0aW9uIGNoYW5nZXNcbiAqIHRoaXMuc2NyZWVuT3JpZW50YXRpb24ub25DaGFuZ2UoKS5zdWJzY3JpYmUoXG4gKiAgICAoKSA9PiB7XG4gKiAgICAgICAgY29uc29sZS5sb2coXCJPcmllbnRhdGlvbiBDaGFuZ2VkXCIpO1xuICogICAgfVxuICogKTtcbiAqXG4gKiBgYGBcbiAqIEBhZHZhbmNlZFxuICpcbiAqIEFjY2VwdGVkIG9yaWVudGF0aW9uIHZhbHVlczpcbiAqXG4gKiB8IFZhbHVlICAgICAgICAgICAgICAgICAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IHBvcnRyYWl0LXByaW1hcnkgICAgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGluIHRoZSBwcmltYXJ5IHBvcnRyYWl0IG1vZGUuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IHBvcnRyYWl0LXNlY29uZGFyeSAgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGluIHRoZSBzZWNvbmRhcnkgcG9ydHJhaXQgbW9kZS4gICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IGxhbmRzY2FwZS1wcmltYXJ5ICAgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGluIHRoZSBwcmltYXJ5IGxhbmRzY2FwZSBtb2RlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IGxhbmRzY2FwZS1zZWNvbmRhcnkgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGluIHRoZSBzZWNvbmRhcnkgbGFuZHNjYXBlIG1vZGUuICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IHBvcnRyYWl0ICAgICAgICAgICAgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGVpdGhlciBwb3J0cmFpdC1wcmltYXJ5IG9yIHBvcnRyYWl0LXNlY29uZGFyeSAoc2Vuc29yKS4gICB8XG4gKiB8IGxhbmRzY2FwZSAgICAgICAgICAgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGVpdGhlciBsYW5kc2NhcGUtcHJpbWFyeSBvciBsYW5kc2NhcGUtc2Vjb25kYXJ5IChzZW5zb3IpLiB8XG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2NyZWVuT3JpZW50YXRpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zY3JlZW4tb3JpZW50YXRpb24nLFxuICBwbHVnaW5SZWY6ICdzY3JlZW4ub3JpZW50YXRpb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1zY3JlZW4tb3JpZW50YXRpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY3JlZW5PcmllbnRhdGlvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGVudW0gZm9yIHBvc3NpYmxlIG9yaWVudGF0aW9uc1xuICAgKi9cbiAgT1JJRU5UQVRJT05TID0ge1xuICAgIFBPUlRSQUlUX1BSSU1BUlk6ICdwb3J0cmFpdC1wcmltYXJ5JyxcbiAgICBQT1JUUkFJVF9TRUNPTkRBUlk6ICdwb3J0cmFpdC1zZWNvbmRhcnknLFxuICAgIExBTkRTQ0FQRV9QUklNQVJZOiAnbGFuZHNjYXBlLXByaW1hcnknLFxuICAgIExBTkRTQ0FQRV9TRUNPTkRBUlk6ICdsYW5kc2NhcGUtc2Vjb25kYXJ5JyxcbiAgICBQT1JUUkFJVDogJ3BvcnRyYWl0JyxcbiAgICBMQU5EU0NBUEU6ICdsYW5kc2NhcGUnLFxuICAgIEFOWTogJ2FueScsXG4gIH07XG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gb3JpZW50YXRpb24gY2hhbmdlIGV2ZW50XG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ29yaWVudGF0aW9uY2hhbmdlJyxcbiAgICBlbGVtZW50OiAnd2luZG93JyxcbiAgfSlcbiAgb25DaGFuZ2UoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvY2sgdGhlIG9yaWVudGF0aW9uIHRvIHRoZSBwYXNzZWQgdmFsdWUuXG4gICAqIFNlZSBiZWxvdyBmb3IgYWNjZXB0ZWQgdmFsdWVzXG4gICAqXG4gICAqIEBwYXJhbSBvcmllbnRhdGlvbiB7c3RyaW5nfSBUaGUgb3JpZW50YXRpb24gd2hpY2ggc2hvdWxkIGJlIGxvY2tlZC4gQWNjZXB0ZWQgdmFsdWVzIHNlZSB0YWJsZSBhYm92ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGxvY2sob3JpZW50YXRpb246IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVubG9jayBhbmQgYWxsb3cgYWxsIG9yaWVudGF0aW9ucy5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1bmxvY2soKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgb3JpZW50YXRpb24gb2YgdGhlIGRldmljZS5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB0eXBlOiBzdHJpbmc7XG59XG4iXX0=

/***/ }),

/***/ 42848:
/*!************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/status-bar/__ivy_ngcc__/ngx/index.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusBar": function() { return /* binding */ StatusBar; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 16887);




var StatusBar = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(StatusBar, _super);
    function StatusBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusBar.prototype.overlaysWebView = function (doesOverlay) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "overlaysWebView", { "sync": true }, arguments); };
    StatusBar.prototype.styleDefault = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "styleDefault", { "sync": true }, arguments); };
    StatusBar.prototype.styleLightContent = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "styleLightContent", { "sync": true }, arguments); };
    StatusBar.prototype.styleBlackTranslucent = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "styleBlackTranslucent", { "sync": true }, arguments); };
    StatusBar.prototype.styleBlackOpaque = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "styleBlackOpaque", { "sync": true }, arguments); };
    StatusBar.prototype.backgroundColorByName = function (colorName) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "backgroundColorByName", { "sync": true }, arguments); };
    StatusBar.prototype.backgroundColorByHexString = function (hexString) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "backgroundColorByHexString", { "sync": true }, arguments); };
    StatusBar.prototype.hide = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hide", { "sync": true }, arguments); };
    StatusBar.prototype.show = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "show", { "sync": true }, arguments); };
    Object.defineProperty(StatusBar.prototype, "isVisible", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "isVisible"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "isVisible", value); },
        enumerable: false,
        configurable: true
    });
    StatusBar.pluginName = "StatusBar";
    StatusBar.plugin = "cordova-plugin-statusbar";
    StatusBar.pluginRef = "StatusBar";
    StatusBar.repo = "https://github.com/apache/cordova-plugin-statusbar";
    StatusBar.platforms = ["Android", "iOS", "Windows"];
StatusBar.ɵfac = /*@__PURE__*/ function () { var ɵStatusBar_BaseFactory; return function StatusBar_Factory(t) { return (ɵStatusBar_BaseFactory || (ɵStatusBar_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](StatusBar)))(t || StatusBar); }; }();
StatusBar.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StatusBar, factory: function (t) { return StatusBar.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](StatusBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return StatusBar;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2lucy9zdGF0dXMtYmFyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLCtFQUFnRSxNQUFNLCtCQUErQixDQUFDOztBQUM3RztBQUlJLElBNEIyQiw2QkFBMEI7QUFBQztBQUV2QztBQUdWO0FBQU0sSUFXYixtQ0FBZSxhQUFDLFdBQW9CO0FBRzJCLElBSy9ELGdDQUFZO0FBSVosSUFJQSxxQ0FBaUI7QUFJaEIsSUFJRCx5Q0FBcUI7QUFLakIsSUFHSixvQ0FBZ0I7QUFJTixJQVNWLHlDQUFxQixhQUFDLFNBQWlCO0FBRzhCLElBU3JFLDhDQUEwQixhQUFDLFNBQWlCO0FBUzlDLElBREUsd0JBQUk7QUFRSixJQUFBLHdCQUFJO0FBRWlFLDBCQXRGckUsZ0NBQVM7QUFBSTtBQUcrQztBQUdWO0FBQTJCO0FBRzlFO0FBQVE7QUFFbUI7QUFHQztBQUM1QjtBQU9ROzZDQTVCUixVQUFVOzs7OzBCQUNMO0FBQUMsb0JBbENQO0FBQUUsRUFrQzZCLDBCQUEwQjtBQUN4RCxTQURZLFNBQVM7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTdGF0dXMgQmFyXG4gKiBAcHJlbWllciBzdGF0dXNiYXJcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBNYW5hZ2UgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIG5hdGl2ZSBzdGF0dXMgYmFyLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1N0YXR1c0JhciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1zdGF0dXNiYXIpLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc3RhdHVzLWJhci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdHVzQmFyOiBTdGF0dXNCYXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIGxldCBzdGF0dXMgYmFyIG92ZXJsYXkgd2Vidmlld1xuICogdGhpcy5zdGF0dXNCYXIub3ZlcmxheXNXZWJWaWV3KHRydWUpO1xuICpcbiAqIC8vIHNldCBzdGF0dXMgYmFyIHRvIHdoaXRlXG4gKiB0aGlzLnN0YXR1c0Jhci5iYWNrZ3JvdW5kQ29sb3JCeUhleFN0cmluZygnI2ZmZmZmZicpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3RhdHVzQmFyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyJyxcbiAgcGx1Z2luUmVmOiAnU3RhdHVzQmFyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RhdHVzQmFyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogV2hldGhlciB0aGUgU3RhdHVzQmFyIGlzIGN1cnJlbnRseSB2aXNpYmxlIG9yIG5vdC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBpc1Zpc2libGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB3aGV0aGVyIHRoZSBzdGF0dXMgYmFyIG92ZXJsYXlzIHRoZSBtYWluIGFwcCB2aWV3LiBUaGUgZGVmYXVsdFxuICAgKiBpcyB0cnVlLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRvZXNPdmVybGF5ICBXaGV0aGVyIHRoZSBzdGF0dXMgYmFyIG92ZXJsYXlzIHRoZSBtYWluIGFwcCB2aWV3LlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG92ZXJsYXlzV2ViVmlldyhkb2VzT3ZlcmxheTogYm9vbGVhbikge31cblxuICAvKipcbiAgICogVXNlIHRoZSBkZWZhdWx0IHN0YXR1c2JhciAoZGFyayB0ZXh0LCBmb3IgbGlnaHQgYmFja2dyb3VuZHMpLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0eWxlRGVmYXVsdCgpIHt9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGUgbGlnaHRDb250ZW50IHN0YXR1c2JhciAobGlnaHQgdGV4dCwgZm9yIGRhcmsgYmFja2dyb3VuZHMpLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0eWxlTGlnaHRDb250ZW50KCkge31cblxuICAvKipcbiAgICogVXNlIHRoZSBibGFja1RyYW5zbHVjZW50IHN0YXR1c2JhciAobGlnaHQgdGV4dCwgZm9yIGRhcmsgYmFja2dyb3VuZHMpLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHN0eWxlQmxhY2tUcmFuc2x1Y2VudCgpIHt9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGUgYmxhY2tPcGFxdWUgc3RhdHVzYmFyIChsaWdodCB0ZXh0LCBmb3IgZGFyayBiYWNrZ3JvdW5kcykuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3R5bGVCbGFja09wYXF1ZSgpIHt9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3RhdHVzIGJhciB0byBhIHNwZWNpZmljIG5hbWVkIGNvbG9yLiBWYWxpZCBvcHRpb25zOlxuICAgKiBibGFjaywgZGFya0dyYXksIGxpZ2h0R3JheSwgd2hpdGUsIGdyYXksIHJlZCwgZ3JlZW4sIGJsdWUsIGN5YW4sIHllbGxvdywgbWFnZW50YSwgb3JhbmdlLCBwdXJwbGUsIGJyb3duLlxuICAgKlxuICAgKiBpT1Mgbm90ZTogeW91IG11c3QgY2FsbCBTdGF0dXNCYXIub3ZlcmxheXNXZWJWaWV3KGZhbHNlKSB0byBlbmFibGUgY29sb3IgY2hhbmdpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvck5hbWUgIFRoZSBuYW1lIG9mIHRoZSBjb2xvciAoZnJvbSBhYm92ZSlcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBiYWNrZ3JvdW5kQ29sb3JCeU5hbWUoY29sb3JOYW1lOiBzdHJpbmcpIHt9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3RhdHVzIGJhciB0byBhIHNwZWNpZmljIGhleCBjb2xvciAoQ1NTIHNob3J0aGFuZCBzdXBwb3J0ZWQhKS5cbiAgICpcbiAgICogaU9TIG5vdGU6IHlvdSBtdXN0IGNhbGwgU3RhdHVzQmFyLm92ZXJsYXlzV2ViVmlldyhmYWxzZSkgdG8gZW5hYmxlIGNvbG9yIGNoYW5naW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4U3RyaW5nICBUaGUgaGV4IHZhbHVlIG9mIHRoZSBjb2xvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBiYWNrZ3JvdW5kQ29sb3JCeUhleFN0cmluZyhoZXhTdHJpbmc6IHN0cmluZykge31cblxuICAvKipcbiAgICogSGlkZSB0aGUgU3RhdHVzQmFyXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaGlkZSgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIFN0YXR1c0JhclxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNob3coKSB7fVxufVxuIl19

/***/ }),

/***/ 19800:
/*!*************************************************************!*\
  !*** ./node_modules/page-flip/dist/js/page-flip.browser.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {

!function(t,e){ true?e(exports):0}(this,(function(t){"use strict";class e{constructor(t,e){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=e,this.nowDrawingDensity=this.createdDensity,this.render=t}setDensity(t){this.createdDensity=t,this.nowDrawingDensity=t}setDrawingDensity(t){this.nowDrawingDensity=t}setPosition(t){this.state.position=t}setAngle(t){this.state.angle=t}setArea(t){this.state.area=t}setHardDrawingAngle(t){this.state.hardDrawingAngle=t}setHardAngle(t){this.state.hardAngle=t,this.state.hardDrawingAngle=t}setOrientation(t){this.orientation=t}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class i extends e{constructor(t,e,i){super(t,i),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=e}draw(t){const e=this.render.getContext(),i=this.render.convertToGlobal(this.state.position),s=this.render.getRect().pageWidth,n=this.render.getRect().height;e.save(),e.translate(i.x,i.y),e.beginPath();for(let t of this.state.area)null!==t&&(t=this.render.convertToGlobal(t),e.lineTo(t.x-i.x,t.y-i.y));e.rotate(this.state.angle),e.clip(),this.isLoad?e.drawImage(this.image,0,0,s,n):this.drawLoader(e,{x:0,y:0},s,n),e.restore()}simpleDraw(t){const e=this.render.getRect(),i=this.render.getContext(),s=e.pageWidth,n=e.height,h=1===t?e.left+e.pageWidth:e.left,r=e.top;this.isLoad?i.drawImage(this.image,h,r,s,n):this.drawLoader(i,{x:h,y:r},s,n)}drawLoader(t,e,i,s){t.beginPath(),t.strokeStyle="rgb(200, 200, 200)",t.fillStyle="rgb(255, 255, 255)",t.lineWidth=1,t.rect(e.x+1,e.y+1,i-1,s-1),t.stroke(),t.fill();const n={x:e.x+i/2,y:e.y+s/2};t.beginPath(),t.lineWidth=10,t.arc(n.x,n.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),t.stroke(),t.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class s{constructor(t,e){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=e,this.app=t,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let t=0;t<this.pages.length;t++)this.portraitSpread.push([t]);let t=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([t]),t++);for(let e=t;e<this.pages.length;e+=2)e<this.pages.length-1?this.landscapeSpread.push([e,e+1]):(this.landscapeSpread.push([e]),this.pages[e].setDensity("hard"))}getSpread(){return"landscape"===this.render.getOrientation()?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(t){const e=this.getSpread();for(let i=0;i<e.length;i++)if(t===e[i][0]||t===e[i][1])return i;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(t){if(t>=0&&t<this.pages.length)return this.pages[t];throw new Error("Invalid page number")}nextBy(t){const e=this.pages.indexOf(t);return e<this.pages.length-1?this.pages[e+1]:null}prevBy(t){const e=this.pages.indexOf(t);return e>0?this.pages[e-1]:null}getFlippingPage(t){const e=this.currentSpreadIndex;if("portrait"===this.render.getOrientation())return 0===t?this.pages[e].newTemporaryCopy():this.pages[e-1];{const i=0===t?this.getSpread()[e+1]:this.getSpread()[e-1];return 1===i.length||0===t?this.pages[i[0]]:this.pages[i[1]]}}getBottomPage(t){const e=this.currentSpreadIndex;if("portrait"===this.render.getOrientation())return 0===t?this.pages[e+1]:this.pages[e-1];{const i=0===t?this.getSpread()[e+1]:this.getSpread()[e-1];return 1===i.length?this.pages[i[0]]:0===t?this.pages[i[1]]:this.pages[i[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(t=null){if(null===t&&(t=this.currentPageIndex),t<0||t>=this.pages.length)return;const e=this.getSpreadIndexByPage(t);null!==e&&(this.currentSpreadIndex=e,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(t){if(!(t>=0&&t<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=t}showSpread(){const t=this.getSpread()[this.currentSpreadIndex];2===t.length?(this.render.setLeftPage(this.pages[t[0]]),this.render.setRightPage(this.pages[t[1]])):"landscape"===this.render.getOrientation()&&t[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[t[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[t[0]])),this.currentPageIndex=t[0],this.app.updatePageIndex(this.currentPageIndex)}}class n extends s{constructor(t,e,i){super(t,e),this.imagesHref=i}load(){for(const t of this.imagesHref){const e=new i(this.render,t,"soft");e.load(),this.pages.push(e)}this.createSpread()}}class h{static GetDistanceBetweenTwoPoint(t,e){return null===t||null===e?1/0:Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}static GetSegmentLength(t){return h.GetDistanceBetweenTwoPoint(t[0],t[1])}static GetAngleBetweenTwoLine(t,e){const i=t[0].y-t[1].y,s=e[0].y-e[1].y,n=t[1].x-t[0].x,h=e[1].x-e[0].x;return Math.acos((i*s+n*h)/(Math.sqrt(i*i+n*n)*Math.sqrt(s*s+h*h)))}static PointInRect(t,e){return null===e?null:e.x>=t.left&&e.x<=t.width+t.left&&e.y>=t.top&&e.y<=t.top+t.height?e:null}static GetRotatedPoint(t,e,i){return{x:t.x*Math.cos(i)+t.y*Math.sin(i)+e.x,y:t.y*Math.cos(i)-t.x*Math.sin(i)+e.y}}static LimitPointToCircle(t,e,i){if(h.GetDistanceBetweenTwoPoint(t,i)<=e)return i;const s=t.x,n=t.y,r=i.x,o=i.y;let a=Math.sqrt(Math.pow(e,2)*Math.pow(s-r,2)/(Math.pow(s-r,2)+Math.pow(n-o,2)))+s;i.x<0&&(a*=-1);let g=(a-s)*(n-o)/(s-r)+n;return s-r+n===0&&(g=e),{x:a,y:g}}static GetIntersectBetweenTwoSegment(t,e,i){return h.PointInRect(t,h.GetIntersectBeetwenTwoLine(e,i))}static GetIntersectBeetwenTwoLine(t,e){const i=t[0].y-t[1].y,s=e[0].y-e[1].y,n=t[1].x-t[0].x,h=e[1].x-e[0].x,r=t[0].x*t[1].y-t[1].x*t[0].y,o=e[0].x*e[1].y-e[1].x*e[0].y,a=i*o-s*r,g=n*o-h*r,l=-(r*h-o*n)/(i*h-s*n),d=-(i*o-s*r)/(i*h-s*n);if(isFinite(l)&&isFinite(d))return{x:l,y:d};if(Math.abs(a-g)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(t,e){const i=Math.abs(t.x-e.x),s=Math.abs(t.y-e.y),n=Math.max(i,s),h=[t];function r(t,e,i,s,n){return e>t?t+n*(i/s):e<t?t-n*(i/s):t}for(let o=1;o<=n;o+=1)h.push({x:r(t.x,e.x,i,n,o),y:r(t.y,e.y,s,n,o)});return h}}class r extends e{constructor(t,e,i){super(t,i),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=e,this.element.classList.add("stf__item"),this.element.classList.add("--"+i)}newTemporaryCopy(){return"hard"===this.nowDrawingDensity?this:(null===this.temporaryCopy&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new r(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){null!==this.temporaryCopy&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(t){const e=t||this.nowDrawingDensity,i=this.render.convertToGlobal(this.state.position),s=this.render.getRect().pageWidth,n=this.render.getRect().height;this.element.classList.remove("--simple");const h=`\n            display: block;\n            z-index: ${this.element.style.zIndex};\n            left: 0;\n            top: 0;\n            width: ${s}px;\n            height: ${n}px;\n        `;"hard"===e?this.drawHard(h):this.drawSoft(i,h)}drawHard(t=""){const e=this.render.getRect().left+this.render.getRect().width/2,i=this.state.hardDrawingAngle,s=t+"\n                backface-visibility: hidden;\n                -webkit-backface-visibility: hidden;\n                clip-path: none;\n                -webkit-clip-path: none;\n            "+(0===this.orientation?`transform-origin: ${this.render.getRect().pageWidth}px 0; \n                   transform: translate3d(0, 0, 0) rotateY(${i}deg);`:`transform-origin: 0 0; \n                   transform: translate3d(${e}px, 0, 0) rotateY(${i}deg);`);this.element.style.cssText=s}drawSoft(t,e=""){let i="polygon( ";for(const t of this.state.area)if(null!==t){let e=1===this.render.getDirection()?{x:-t.x+this.state.position.x,y:t.y-this.state.position.y}:{x:t.x-this.state.position.x,y:t.y-this.state.position.y};e=h.GetRotatedPoint(e,{x:0,y:0},this.state.angle),i+=e.x+"px "+e.y+"px, "}i=i.slice(0,-2),i+=")";const s=e+`transform-origin: 0 0; clip-path: ${i}; -webkit-clip-path: ${i};`+(this.render.isSafari()&&0===this.state.angle?`transform: translate(${t.x}px, ${t.y}px);`:`transform: translate3d(${t.x}px, ${t.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=s}simpleDraw(t){const e=this.render.getRect(),i=e.pageWidth,s=e.height,n=1===t?e.left+e.pageWidth:e.left,h=e.top;this.element.classList.add("--simple"),this.element.style.cssText=`\n            position: absolute; \n            display: block; \n            height: ${s}px; \n            left: ${n}px; \n            top: ${h}px; \n            width: ${i}px; \n            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(t){super.setOrientation(t),this.element.classList.remove("--left","--right"),this.element.classList.add(1===t?"--right":"--left")}setDrawingDensity(t){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+t),super.setDrawingDensity(t)}}class o extends s{constructor(t,e,i,s){super(t,e),this.element=i,this.pagesElement=s}load(){for(const t of this.pagesElement){const e=new r(this.render,t,"hard"===t.dataset.density?"hard":"soft");e.load(),this.pages.push(e)}this.createSpread()}}class a{constructor(t,e,i,s){this.direction=t,this.corner=e,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(i,10),this.pageHeight=parseInt(s,10)}calc(t){try{return this.position=this.calcAngleAndPosition(t),this.calculateIntersectPoint(this.position),!0}catch(t){return!1}}getFlippingClipArea(){const t=[];let e=!1;return t.push(this.rect.topLeft),t.push(this.topIntersectPoint),null===this.sideIntersectPoint?e=!0:(t.push(this.sideIntersectPoint),null===this.bottomIntersectPoint&&(e=!1)),t.push(this.bottomIntersectPoint),(e||"bottom"===this.corner)&&t.push(this.rect.bottomLeft),t}getBottomClipArea(){const t=[];return t.push(this.topIntersectPoint),"top"===this.corner?t.push({x:this.pageWidth,y:0}):(null!==this.topIntersectPoint&&t.push({x:this.pageWidth,y:0}),t.push({x:this.pageWidth,y:this.pageHeight})),null!==this.sideIntersectPoint?h.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&t.push(this.sideIntersectPoint):"top"===this.corner&&t.push({x:this.pageWidth,y:this.pageHeight}),t.push(this.bottomIntersectPoint),t.push(this.topIntersectPoint),t}getAngle(){return 0===this.direction?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return 0===this.direction?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return 1===this.direction?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return"top"===this.corner?this.topIntersectPoint:null!==this.sideIntersectPoint?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const t=h.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return 0===this.direction?t:Math.PI-t}calcAngleAndPosition(t){let e=t;if(this.updateAngleAndGeometry(e),e="top"===this.corner?this.checkPositionAtCenterLine(e,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(e,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(e.x-this.pageWidth)<1&&Math.abs(e.y)<1)throw new Error("Point is too small");return e}updateAngleAndGeometry(t){this.angle=this.calculateAngle(t),this.rect=this.getPageRect(t)}calculateAngle(t){const e=this.pageWidth-t.x+1,i="bottom"===this.corner?this.pageHeight-t.y:t.y;let s=2*Math.acos(e/Math.sqrt(i*i+e*e));i<0&&(s=-s);const n=Math.PI-s;if(!isFinite(s)||n>=0&&n<.003)throw new Error("The G point is too small");return"bottom"===this.corner&&(s=-s),s}getPageRect(t){return"top"===this.corner?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],t):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],t)}getRectFromBasePoint(t,e){return{topLeft:this.getRotatedPoint(t[0],e),topRight:this.getRotatedPoint(t[1],e),bottomLeft:this.getRotatedPoint(t[2],e),bottomRight:this.getRotatedPoint(t[3],e)}}getRotatedPoint(t,e){return{x:t.x*Math.cos(this.angle)+t.y*Math.sin(this.angle)+e.x,y:t.y*Math.cos(this.angle)-t.x*Math.sin(this.angle)+e.y}}calculateIntersectPoint(t){const e={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};"top"===this.corner?(this.topIntersectPoint=h.GetIntersectBetweenTwoSegment(e,[t,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=h.GetIntersectBetweenTwoSegment(e,[t,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=h.GetIntersectBetweenTwoSegment(e,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=h.GetIntersectBetweenTwoSegment(e,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=h.GetIntersectBetweenTwoSegment(e,[t,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=h.GetIntersectBetweenTwoSegment(e,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(t,e,i){let s=t;const n=h.LimitPointToCircle(e,this.pageWidth,s);s!==n&&(s=n,this.updateAngleAndGeometry(s));const r=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let o=this.rect.bottomRight,a=this.rect.topLeft;if("bottom"===this.corner&&(o=this.rect.topRight,a=this.rect.bottomLeft),o.x<=0){const t=h.LimitPointToCircle(i,r,a);t!==s&&(s=t,this.updateAngleAndGeometry(s))}return s}getSegmentToShadowLine(){const t=this.getShadowStartPoint();return[t,t!==this.sideIntersectPoint&&null!==this.sideIntersectPoint?this.sideIntersectPoint:this.bottomIntersectPoint]}}class g{constructor(t,e){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=t,this.app=e}fold(t){this.setState("user_fold"),null===this.calc&&this.start(t),this.do(this.render.convertToPage(t))}flip(t){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(t))return;if(null!==this.calc&&this.render.finishAnimation(),!this.start(t))return;const e=this.getBoundsRect();this.setState("flipping");const i=e.height/10,s="bottom"===this.calc.getCorner()?e.height-i:i,n="bottom"===this.calc.getCorner()?e.height:0;this.calc.calc({x:e.pageWidth-i,y:s}),this.animateFlippingTo({x:e.pageWidth-i,y:s},{x:-e.pageWidth,y:n},!0)}start(t){this.reset();const e=this.render.convertToBook(t),i=this.getBoundsRect(),s=this.getDirectionByPoint(e),n=e.y>=i.height/2?"bottom":"top";if(!this.checkDirection(s))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(s),this.bottomPage=this.app.getPageCollection().getBottomPage(s),"landscape"===this.render.getOrientation())if(1===s){const t=this.app.getPageCollection().nextBy(this.flippingPage);null!==t&&this.flippingPage.getDensity()!==t.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),t.setDrawingDensity("hard"))}else{const t=this.app.getPageCollection().prevBy(this.flippingPage);null!==t&&this.flippingPage.getDensity()!==t.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),t.setDrawingDensity("hard"))}return this.render.setDirection(s),this.calc=new a(s,n,i.pageWidth.toString(10),i.height.toString(10)),!0}catch(t){return!1}}do(t){if(null!==this.calc&&this.calc.calc(t)){const t=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),0===this.calc.getDirection()?this.flippingPage.setHardAngle(90*(200-2*t)/100):this.flippingPage.setHardAngle(-90*(200-2*t)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),t,this.calc.getDirection())}}flipToPage(t,e){const i=this.app.getPageCollection().getCurrentSpreadIndex(),s=this.app.getPageCollection().getSpreadIndexByPage(t);try{s>i&&(this.app.getPageCollection().setCurrentSpreadIndex(s-1),this.flipNext(e)),s<i&&(this.app.getPageCollection().setCurrentSpreadIndex(s+1),this.flipPrev(e))}catch(t){}}flipNext(t){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:"top"===t?1:this.render.getRect().height-2})}flipPrev(t){this.flip({x:10,y:"top"===t?1:this.render.getRect().height-2})}stopMove(){if(null===this.calc)return;const t=this.calc.getPosition(),e=this.getBoundsRect(),i="bottom"===this.calc.getCorner()?e.height:0;t.x<=0?this.animateFlippingTo(t,{x:-e.pageWidth,y:i},!0):this.animateFlippingTo(t,{x:e.pageWidth,y:i},!1)}showCorner(t){if(!this.checkState("read","fold_corner"))return;const e=this.getBoundsRect(),i=e.pageWidth;if(this.isPointOnCorners(t))if(null===this.calc){if(!this.start(t))return;this.setState("fold_corner"),this.calc.calc({x:i-1,y:1});const s=50,n="bottom"===this.calc.getCorner()?e.height-1:1,h="bottom"===this.calc.getCorner()?e.height-s:s;this.animateFlippingTo({x:i-1,y:n},{x:i-s,y:h},!1,!1)}else this.do(this.render.convertToPage(t));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(t,e,i,s=!0){const n=h.GetCordsFromTwoPoint(t,e),r=[];for(const t of n)r.push(()=>this.do(t));const o=this.getAnimationDuration(n.length);this.render.startAnimation(r,o,()=>{this.calc&&(i&&(1===this.calc.getDirection()?this.app.turnToPrevPage():this.app.turnToNextPage()),s&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(t){this.state!==t&&(this.app.updateState(t),this.state=t)}getDirectionByPoint(t){const e=this.getBoundsRect();if("portrait"===this.render.getOrientation()){if(t.x-e.pageWidth<=e.width/5)return 1}else if(t.x<e.width/2)return 1;return 0}getAnimationDuration(t){const e=this.app.getSettings().flippingTime;return t>=1e3?e:t/1e3*e}checkDirection(t){return 0===t?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...t){for(const e of t)if(this.state===e)return!0;return!1}isPointOnCorners(t){const e=this.getBoundsRect(),i=e.pageWidth,s=Math.sqrt(Math.pow(i,2)+Math.pow(e.height,2))/5,n=this.render.convertToBook(t);return n.x>0&&n.y>0&&n.x<e.width&&n.y<e.height&&(n.x<s||n.x>e.width-s)&&(n.y<s||n.y>e.height-s)}}class l{constructor(t,e){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=e,this.app=t;const i=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=null!==i.exec(window.navigator.userAgent)}render(t){if(null!==this.animation){const e=Math.round((t-this.animation.startedAt)/this.animation.durationFrame);e<this.animation.frames.length?this.animation.frames[e]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=t,this.drawFrame()}start(){this.update();const t=e=>{this.render(e),requestAnimationFrame(t)};requestAnimationFrame(t)}startAnimation(t,e,i){this.finishAnimation(),this.animation={frames:t,duration:e,durationFrame:e/t.length,onAnimateEnd:i,startedAt:this.timer}}finishAnimation(){null!==this.animation&&(this.animation.frames[this.animation.frames.length-1](),null!==this.animation.onAnimateEnd&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const t=this.calculateBoundsRect();this.orientation!==t&&(this.orientation=t,this.app.updateOrientation(t))}calculateBoundsRect(){let t="landscape";const e=this.getBlockWidth(),i=e/2,s=this.getBlockHeight()/2,n=this.setting.width/this.setting.height;let h=this.setting.width,r=this.setting.height,o=i-h;return"stretch"===this.setting.size?(e<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(t="portrait"),h="portrait"===t?this.getBlockWidth():this.getBlockWidth()/2,h>this.setting.maxWidth&&(h=this.setting.maxWidth),r=h/n,r>this.getBlockHeight()&&(r=this.getBlockHeight(),h=r*n),o="portrait"===t?i-h/2-h:i-h):e<2*h&&this.app.getSettings().usePortrait&&(t="portrait",o=i-h/2-h),this.boundsRect={left:o,top:s-r/2,width:2*h,height:r,pageWidth:h},t}setShadowData(t,e,i,s){if(!this.app.getSettings().drawShadow)return;const n=100*this.getSettings().maxShadowOpacity;this.shadow={pos:t,angle:e,width:3*this.getRect().pageWidth/4*i/100,opacity:(100-i)*n/100/100,direction:s,progress:2*i}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return null===this.boundsRect&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(t){this.pageRect=t}setDirection(t){this.direction=t}setRightPage(t){null!==t&&t.setOrientation(1),this.rightPage=t}setLeftPage(t){null!==t&&t.setOrientation(0),this.leftPage=t}setBottomPage(t){null!==t&&t.setOrientation(1===this.direction?0:1),this.bottomPage=t}setFlippingPage(t){null!==t&&t.setOrientation(0===this.direction&&"portrait"!==this.orientation?0:1),this.flippingPage=t}convertToBook(t){const e=this.getRect();return{x:t.x-e.left,y:t.y-e.top}}isSafari(){return this.safari}convertToPage(t,e){e||(e=this.direction);const i=this.getRect();return{x:0===e?t.x-i.left-i.width/2:i.width/2-t.x+i.left,y:t.y-i.top}}convertToGlobal(t,e){if(e||(e=this.direction),null==t)return null;const i=this.getRect();return{x:0===e?t.x+i.left+i.width/2:i.width/2-t.x+i.left,y:t.y+i.top}}convertRectToGlobal(t,e){return e||(e=this.direction),{topLeft:this.convertToGlobal(t.topLeft,e),topRight:this.convertToGlobal(t.topRight,e),bottomLeft:this.convertToGlobal(t.bottomLeft,e),bottomRight:this.convertToGlobal(t.bottomRight,e)}}}class d extends l{constructor(t,e,i){super(t,e),this.canvas=i,this.ctx=i.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),"portrait"!==this.orientation&&null!=this.leftPage&&this.leftPage.simpleDraw(0),null!=this.rightPage&&this.rightPage.simpleDraw(1),null!=this.bottomPage&&this.bottomPage.draw(),this.drawBookShadow(),null!=this.flippingPage&&this.flippingPage.draw(),null!=this.shadow&&(this.drawOuterShadow(),this.drawInnerShadow());const t=this.getRect();"portrait"===this.orientation&&(this.ctx.beginPath(),this.ctx.rect(t.left+t.pageWidth,t.top,t.width,t.height),this.ctx.clip())}drawBookShadow(){const t=this.getRect();this.ctx.save(),this.ctx.beginPath();const e=t.width/20;this.ctx.rect(t.left,t.top,t.width,t.height);const i={x:t.left+t.width/2-e/2,y:0};this.ctx.translate(i.x,i.y);const s=this.ctx.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(0, 0, 0, 0)"),s.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),s.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),s.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),s.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=s,this.ctx.fillRect(0,0,e,2*t.height),this.ctx.restore()}drawOuterShadow(){const t=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(t.left,t.top,t.width,t.height);const e=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(e.x,e.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const i=this.ctx.createLinearGradient(0,0,this.shadow.width,0);0===this.shadow.direction?(this.ctx.translate(0,-100),i.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),i.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),i.addColorStop(0,"rgba(0, 0, 0, 0)"),i.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=i,this.ctx.fillRect(0,0,this.shadow.width,2*t.height),this.ctx.restore()}drawInnerShadow(){const t=this.getRect();this.ctx.save(),this.ctx.beginPath();const e=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),i=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(i.topLeft.x,i.topLeft.y),this.ctx.lineTo(i.topRight.x,i.topRight.y),this.ctx.lineTo(i.bottomRight.x,i.bottomRight.y),this.ctx.lineTo(i.bottomLeft.x,i.bottomLeft.y),this.ctx.translate(e.x,e.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const s=3*this.shadow.width/4,n=this.ctx.createLinearGradient(0,0,s,0);0===this.shadow.direction?(this.ctx.translate(-s,-100),n.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),n.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),n.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),n.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),n.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),n.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),n.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),n.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=n,this.ctx.fillRect(0,0,s,2*t.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class p{constructor(t,e,i){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=t=>{if(this.checkTarget(t.target)){const e=this.getMousePos(t.clientX,t.clientY);this.app.startUserTouch(e),t.preventDefault()}},this.onTouchStart=t=>{if(this.checkTarget(t.target)&&t.changedTouches.length>0){const e=t.changedTouches[0],i=this.getMousePos(e.clientX,e.clientY);this.touchPoint={point:i,time:Date.now()},setTimeout(()=>{null!==this.touchPoint&&this.app.startUserTouch(i)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||t.preventDefault()}},this.onMouseUp=t=>{const e=this.getMousePos(t.clientX,t.clientY);this.app.userStop(e)},this.onMouseMove=t=>{const e=this.getMousePos(t.clientX,t.clientY);this.app.userMove(e,!1)},this.onTouchMove=t=>{if(t.changedTouches.length>0){const e=t.changedTouches[0],i=this.getMousePos(e.clientX,e.clientY);this.app.getSettings().mobileScrollSupport?(null!==this.touchPoint&&(Math.abs(this.touchPoint.point.x-i.x)>10||"read"!==this.app.getState())&&t.cancelable&&this.app.userMove(i,!0),"read"!==this.app.getState()&&t.preventDefault()):this.app.userMove(i,!0)}},this.onTouchEnd=t=>{if(t.changedTouches.length>0){const e=t.changedTouches[0],i=this.getMousePos(e.clientX,e.clientY);let s=!1;if(null!==this.touchPoint){const t=i.x-this.touchPoint.point.x,e=Math.abs(i.y-this.touchPoint.point.y);Math.abs(t)>this.swipeDistance&&e<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(t>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),s=!0),this.touchPoint=null}this.app.userStop(i,s)}},this.parentElement=t,t.classList.add("stf__parent"),t.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=t.querySelector(".stf__wrapper"),this.app=e;const s=this.app.getSettings().usePortrait?1:2;t.style.minWidth=i.minWidth*s+"px",t.style.minHeight=i.minHeight+"px","fixed"===i.size&&(t.style.minWidth=i.width*s+"px",t.style.minHeight=i.height+"px"),i.autoSize&&(t.style.width="100%",t.style.maxWidth=2*i.maxWidth+"px"),t.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=i.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(t){this.wrapper.classList.remove("--portrait","--landscape"),"portrait"===t?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(t,e){const i=this.distElement.getBoundingClientRect();return{x:t-i.left,y:e-i.top}}checkTarget(t){return!this.app.getSettings().clickEventForward||!["a","button"].includes(t.tagName.toLowerCase())}}class c extends p{constructor(t,e,i,s){super(t,e,i),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=t.querySelector(".stf__block"),this.items=s;for(const t of s)this.distElement.appendChild(t);this.setHandlers()}clear(){for(const t of this.items)this.parentElement.appendChild(t)}updateItems(t){this.removeHandlers(),this.distElement.innerHTML="";for(const e of t)this.distElement.appendChild(e);this.items=t,this.setHandlers()}update(){this.app.getRender().update()}}class u extends p{constructor(t,e,i){super(t,e,i),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=t.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const t=getComputedStyle(this.canvas),e=parseInt(t.getPropertyValue("width"),10),i=parseInt(t.getPropertyValue("height"),10);this.canvas.width=e,this.canvas.height=i}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class w extends l{constructor(t,e,i){super(t,e),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=i,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",'<div class="stf__outerShadow"></div>\n             <div class="stf__innerShadow"></div>\n             <div class="stf__hardShadow"></div>\n             <div class="stf__hardInnerShadow"></div>'),this.outerShadow=this.element.querySelector(".stf__outerShadow"),this.innerShadow=this.element.querySelector(".stf__innerShadow"),this.hardShadow=this.element.querySelector(".stf__hardShadow"),this.hardInnerShadow=this.element.querySelector(".stf__hardInnerShadow")}clearShadow(){super.clearShadow(),this.outerShadow.style.cssText="display: none",this.innerShadow.style.cssText="display: none",this.hardShadow.style.cssText="display: none",this.hardInnerShadow.style.cssText="display: none"}reload(){this.element.querySelector(".stf__outerShadow")||this.createShadows()}drawHardInnerShadow(){const t=this.getRect(),e=this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress;let i=(100-e)*(2.5*t.pageWidth)/100+20;i>t.pageWidth&&(i=t.pageWidth);let s=`\n            display: block;\n            z-index: ${(this.getSettings().startZIndex+5).toString(10)};\n            width: ${i}px;\n            height: ${t.height}px;\n            background: linear-gradient(to right,\n                rgba(0, 0, 0, ${this.shadow.opacity*e/100}) 5%,\n                rgba(0, 0, 0, 0) 100%);\n            left: ${t.left+t.width/2}px;\n            transform-origin: 0 0;\n        `;s+=0===this.getDirection()&&this.shadow.progress>100||1===this.getDirection()&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0);":"transform: translate3d(0, 0, 0) rotateY(180deg);",this.hardInnerShadow.style.cssText=s}drawHardOuterShadow(){const t=this.getRect();let e=(100-(this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress))*(2.5*t.pageWidth)/100+20;e>t.pageWidth&&(e=t.pageWidth);let i=`\n            display: block;\n            z-index: ${(this.getSettings().startZIndex+4).toString(10)};\n            width: ${e}px;\n            height: ${t.height}px;\n            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);\n            left: ${t.left+t.width/2}px;\n            transform-origin: 0 0;\n        `;i+=0===this.getDirection()&&this.shadow.progress>100||1===this.getDirection()&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=i}drawInnerShadow(){const t=this.getRect(),e=3*this.shadow.width/4,i=0===this.getDirection()?e:0,s=0===this.getDirection()?"to left":"to right",n=this.convertToGlobal(this.shadow.pos),r=this.shadow.angle+3*Math.PI/2,o=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let a="polygon( ";for(const t of o){let e=1===this.getDirection()?{x:-t.x+this.shadow.pos.x,y:t.y-this.shadow.pos.y}:{x:t.x-this.shadow.pos.x,y:t.y-this.shadow.pos.y};e=h.GetRotatedPoint(e,{x:i,y:100},r),a+=e.x+"px "+e.y+"px, "}a=a.slice(0,-2),a+=")";const g=`\n            display: block;\n            z-index: ${(this.getSettings().startZIndex+10).toString(10)};\n            width: ${e}px;\n            height: ${2*t.height}px;\n            background: linear-gradient(${s},\n                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,\n                rgba(0, 0, 0, 0.05) 15%,\n                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,\n                rgba(0, 0, 0, 0) 100%);\n            transform-origin: ${i}px 100px;\n            transform: translate3d(${n.x-i}px, ${n.y-100}px, 0) rotate(${r}rad);\n            clip-path: ${a};\n            -webkit-clip-path: ${a};\n        `;this.innerShadow.style.cssText=g}drawOuterShadow(){const t=this.getRect(),e=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),i=this.shadow.angle+3*Math.PI/2,s=1===this.getDirection()?this.shadow.width:0,n=0===this.getDirection()?"to right":"to left",r=[{x:0,y:0},{x:t.pageWidth,y:0},{x:t.pageWidth,y:t.height},{x:0,y:t.height}];let o="polygon( ";for(const t of r)if(null!==t){let e=1===this.getDirection()?{x:-t.x+this.shadow.pos.x,y:t.y-this.shadow.pos.y}:{x:t.x-this.shadow.pos.x,y:t.y-this.shadow.pos.y};e=h.GetRotatedPoint(e,{x:s,y:100},i),o+=e.x+"px "+e.y+"px, "}o=o.slice(0,-2),o+=")";const a=`\n            display: block;\n            z-index: ${(this.getSettings().startZIndex+10).toString(10)};\n            width: ${this.shadow.width}px;\n            height: ${2*t.height}px;\n            background: linear-gradient(${n}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));\n            transform-origin: ${s}px 100px;\n            transform: translate3d(${e.x-s}px, ${e.y-100}px, 0) rotate(${i}rad);\n            clip-path: ${o};\n            -webkit-clip-path: ${o};\n        `;this.outerShadow.style.cssText=a}drawLeftPage(){"portrait"!==this.orientation&&null!==this.leftPage&&(1===this.direction&&null!==this.flippingPage&&"hard"===this.flippingPage.getDrawingDensity()?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){null!==this.rightPage&&(0===this.direction&&null!==this.flippingPage&&"hard"===this.flippingPage.getDrawingDensity()?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(null===this.bottomPage)return;const t=null!=this.flippingPage?this.flippingPage.getDrawingDensity():null;"portrait"===this.orientation&&1===this.direction||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(t))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),null!=this.flippingPage&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),null!=this.shadow&&null!==this.flippingPage&&("soft"===this.flippingPage.getDrawingDensity()?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const t of this.app.getPageCollection().getPages())t!==this.leftPage&&t!==this.rightPage&&t!==this.flippingPage&&t!==this.bottomPage&&(t.getElement().style.cssText="display: none"),t.getTemporaryCopy()!==this.flippingPage&&t.hideTemporaryCopy()}update(){super.update(),null!==this.rightPage&&this.rightPage.setOrientation(1),null!==this.leftPage&&this.leftPage.setOrientation(0)}}class x{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(t){const e=this._default;if(Object.assign(e,t),"stretch"!==e.size&&"fixed"!==e.size)throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(e.width<=0||e.height<=0)throw new Error("Invalid width or height");if(e.flippingTime<=0)throw new Error("Invalid flipping time");return"stretch"===e.size?(e.minWidth<=0&&(e.minWidth=100),e.maxWidth<e.minWidth&&(e.maxWidth=2e3),e.minHeight<=0&&(e.minHeight=100),e.maxHeight<e.minHeight&&(e.maxHeight=2e3)):(e.minWidth=e.width,e.maxWidth=e.width,e.minHeight=e.height,e.maxHeight=e.height),e}}!function(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===i&&s.firstChild?s.insertBefore(n,s.firstChild):s.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}(".stf__parent {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  transform: translateZ(0);\n\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n\n.sft__wrapper {\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.stf__parent canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.stf__block {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  perspective: 2000px;\n}\n\n.stf__item {\n  display: none;\n  position: absolute;\n  transform-style: preserve-3d;\n}\n\n.stf__outerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__innerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__hardShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__hardInnerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}");t.PageFlip=class extends class{constructor(){this.events=new Map}on(t,e){return this.events.has(t)?this.events.get(t).push(e):this.events.set(t,[e]),this}off(t){this.events.delete(t)}trigger(t,e,i=null){if(this.events.has(t))for(const s of this.events.get(t))s({data:i,object:e})}}{constructor(t,e){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=(new x).getSettings(e),this.block=t}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(t){this.ui=new u(this.block,this,this.setting);const e=this.ui.getCanvas();this.render=new d(this,this.setting,e),this.flipController=new g(this.render,this),this.pages=new n(this,this.render,t),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(t){this.ui=new c(this.block,this,this.setting,t),this.render=new w(this,this.setting,this.ui.getDistElement()),this.flipController=new g(this.render,this),this.pages=new o(this,this.render,this.ui.getDistElement(),t),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(t){const e=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new n(this,this.render,t),this.pages.load(),this.pages.show(e),this.trigger("update",this,{page:e,mode:this.render.getOrientation()})}updateFromHtml(t){const e=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new o(this,this.render,this.ui.getDistElement(),t),this.pages.load(),this.ui.updateItems(t),this.render.reload(),this.pages.show(e),this.trigger("update",this,{page:e,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(t){this.pages.show(t)}flipNext(t="top"){this.flipController.flipNext(t)}flipPrev(t="top"){this.flipController.flipPrev(t)}flip(t,e="top"){this.flipController.flipToPage(t,e)}updateState(t){this.trigger("changeState",this,t)}updatePageIndex(t){this.trigger("flip",this,t)}updateOrientation(t){this.ui.setOrientationStyle(t),this.update(),this.trigger("changeOrientation",this,t)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(t){return this.pages.getPage(t)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(t){this.mousePosition=t,this.isUserTouch=!0,this.isUserMove=!1}userMove(t,e){this.isUserTouch||e||!this.setting.showPageCorners?this.isUserTouch&&h.GetDistanceBetweenTwoPoint(this.mousePosition,t)>5&&(this.isUserMove=!0,this.flipController.fold(t)):this.flipController.showCorner(t)}userStop(t,e=!1){this.isUserTouch&&(this.isUserTouch=!1,e||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(t)))}},Object.defineProperty(t,"__esModule",{value:!0})}));


/***/ }),

/***/ 14608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": function() { return /* binding */ Tab2PageModule; }
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 70442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 22321);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 42848);
/* harmony import */ var _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/native-audio/ngx */ 50754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);











class Tab2PageModule {
}
Tab2PageModule.ɵfac = function Tab2PageModule_Factory(t) { return new (t || Tab2PageModule)(); };
Tab2PageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: Tab2PageModule });
Tab2PageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeAudio,
        _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar,
        _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__.ScreenOrientation
    ], imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](Tab2PageModule, { declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 70442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": function() { return /* binding */ Tab2Page; }
/* harmony export */ });
/* harmony import */ var page_flip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! page-flip */ 19800);
/* harmony import */ var page_flip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(page_flip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 22321);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 42848);
/* harmony import */ var _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-audio/ngx */ 50754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);











function Tab2Page_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const number_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](number_r2 % 2 ? "shadow-right" : "shadow-left");
} }
function Tab2Page_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, Tab2Page_div_5_div_2_Template, 1, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "./assets/cirkin_ordek_balasi/cob1/cob-", number_r2 - 1, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", number_r2 > 1);
} }
const _c0 = function () { return []; };
const myCustomIcon = '/assets/icons/custom.png';
class Tab2Page {
    constructor(nativeAudio, platform, screenOrientation, statusBar) {
        this.nativeAudio = nativeAudio;
        this.platform = platform;
        this.screenOrientation = screenOrientation;
        this.statusBar = statusBar;
        this.canPlay = true;
        this.currentPage = 0;
        console.log('almost here');
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.backgroundAudio.pause();
    }
    ngAfterViewInit() {
        if (this.platform.is('cordova')) {
            this.platform.ready().then(() => {
                this.screenOrientation.lock('landscape').then(value => {
                    // alert('success');
                }, reason => {
                    // alert('fail:' + reason)
                }).catch(reason => {
                    // alert('fail2:' + reason)
                });
                this.startUp();
            });
            // } else {
            //   this.startUp();
        }
        else {
            this.startUp();
        }
    }
    startUp() {
        // alert('startup');
        this.statusBar.hide();
        let height = this.platform.height(); //window.screen.height;
        console.log('height:' + height + '  ' + window.screen.height);
        let width = this.platform.width();
        console.log('width:' + width + '  ' + window.screen.width);
        if (width < height) {
            width = Math.round(width) * 0.8;
        }
        else {
            width = width / 2;
            if (width > height) {
                width = Math.round(height * 0.8);
            }
            else {
                width = Math.round(width * 0.8);
            }
        }
        height = width;
        this.statusBar.hide();
        const bookElement = document.getElementById('book');
        this.pageFlip = new page_flip__WEBPACK_IMPORTED_MODULE_0__.PageFlip(bookElement, {
            width,
            height // required parameter - base page height
        });
        this.pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));
        // ng build --base-href /cob/ --deploy-url /cob/
        this.pageFlip.on('flip', (e) => {
            this.backgroundAudio.pause();
            this.playPage(e.data / 2);
        });
        bookElement.style.marginLeft = '10vw';
        bookElement.style.marginTop = '4vh';
        // bookElement.style.marginTop = (0.1 * height) + 'px';
        // console.log('(marginleft:' + (0.1 * width) + 'px');
        this.playPage(0);
    }
    onSuccess() {
        console.log('success play');
    }
    onError(err) {
        console.log('error occurred:' + err);
    }
    playPage(pageNumber) {
        this.currentPage = pageNumber;
        if (!this.isPlaying()) {
            this.backgroundAudio = new Audio('./assets/cirkin_ordek_balasi/cob1/sounds/cob-' + pageNumber + '.mp3');
            // new Audio();
            // this.backgroundAudio.src = './assets/cirkin_ordek_balasi/cob1/sounds/cob-' + pageNumber + '.mp3';
            // this.backgroundAudio.loop = false;
            // this.backgroundAudio.load();
            this.backgroundAudio.onended = () => { console.log('ended'); };
            this.backgroundAudio.play();
            // TODO fix below
            // this.nativeAudio.play(pageNumber.toString()).then(this.onSuccess, this.onError);
        }
    }
    isPlaying() {
        return this.backgroundAudio
            && this.backgroundAudio.currentTime > 0
            && !this.backgroundAudio.paused
            && !this.backgroundAudio.ended
            && this.backgroundAudio.readyState > 2;
    }
    // constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController) {}
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
    prevPage() {
        if (this.currentPage > 0) {
            this.pageFlip.flipPrev();
            this.playPage(this.currentPage - 1);
        }
    }
    nextPage() {
        if (this.currentPage < 26) {
            this.pageFlip.flipNext();
            this.playPage(this.currentPage + 1);
        }
    }
}
Tab2Page.ɵfac = function Tab2Page_Factory(t) { return new (t || Tab2Page)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeAudio), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_1__.ScreenOrientation), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar)); };
Tab2Page.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: Tab2Page, selectors: [["app-tab2"]], decls: 18, vars: 2, consts: [["size", "12"], ["id", "book", 1, "my-book"], ["class", "my-page", 4, "ngFor", "ngForOf"], [1, "ion-text-center"], ["size", "large", 3, "click"], ["name", "arrow-back", "start", ""], ["size", "large"], ["name", "play", "center", ""], ["name", "arrow-forward", "end", ""], [1, "my-page"], [2, "height", "inherit", "width", "inherit", 3, "src"], [3, "class", 4, "ngIf"]], template: function Tab2Page_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Tab2Page_Template_ion_button_click_10_listener() { return ctx.prevPage(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Tab2Page_Template_ion_button_click_16_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0).constructor(26));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: [".my-book[_ngcontent-%COMP%] {\n  border-width: 2px;\n  border-color: red;\n  background-repeat: no-repeat;\n  box-shadow: 20px 20px 20px darkgray;\n}\n\np[_ngcontent-%COMP%] {\n  width: auto;\n  text-align: left;\n}\n\n.my-page[_ngcontent-%COMP%] {\n  text-align: center;\n  outline: 0px solid #ccc;\n  box-shadow: inset -10px 0 10px 0 rgba(0, 0, 0, 0.25);\n}\n\n.shadow-right[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-shadow: inset 20px 0 20px 0 #000000;\n  opacity: 0.6;\n  top: 0;\n  left: 0;\n}\n\n.shadow-left[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-shadow: inset -20px 0 20px 0 #000000;\n  opacity: 0.6;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEsbUNBQUE7QUFMRjs7QUFRQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUxGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9EQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBRUEsTUFBQTtFQUNBLE9BQUE7QUFMRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUpGIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4vLyAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbi8vXG4vL1xuLy99XG4ubXktYm9vayB7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3gtc2hhZG93OiAyMHB4IDIwcHggMjBweCBkYXJrZ3JheTtcbn1cblxucCB7XG4gIHdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm15LXBhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IDBweCBzb2xpZCAjY2NjO1xuICBib3gtc2hhZG93OiBpbnNldCAtMTBweCAwIDEwcHggMCBoc2xhKDAsMCUsMCUsLjI1KTtcbn1cblxuLnNoYWRvdy1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMjBweCAwIDIwcHggMCAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjY7XG4gIC8vYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuLnNoYWRvdy1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiBpbnNldCAtMjBweCAwIDIwcHggMCAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjY7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 64762:
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts-es2015.js.map