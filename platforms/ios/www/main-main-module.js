(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js ***!
  \**************************************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, StatusBarAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return CameraSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return CameraDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return CameraResultType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return FilesystemDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return FilesystemEncoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function() { return HapticsImpactStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function() { return HapticsNotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function() { return KeyboardStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardResize", function() { return KeyboardResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function() { return ActionSheetOptionStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionType", function() { return PermissionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function() { return PhotosAlbumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function() { return StatusBarStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBarAnimation", function() { return StatusBarAnimation; });
var CameraSource;
(function (CameraSource) {
    CameraSource["Prompt"] = "PROMPT";
    CameraSource["Camera"] = "CAMERA";
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
var FilesystemDirectory;
(function (FilesystemDirectory) {
    /**
     * The Documents directory
     * On iOS it's the app's documents directory.
     * Use this directory to store user-generated content.
     * On Android it's the Public Documents folder, so it's accessible from other apps.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`
     */
    FilesystemDirectory["Documents"] = "DOCUMENTS";
    /**
     * The Data directory
     * On iOS it will use the Documents directory
     * On Android it's the directory holding application files.
     * Files will be deleted when the application is uninstalled.
     */
    FilesystemDirectory["Data"] = "DATA";
    /**
     * The Cache directory
     * Can be deleted in cases of low memory, so use this directory to write app-specific files
     * that your app can re-create easily.
     */
    FilesystemDirectory["Cache"] = "CACHE";
    /**
     * The external directory
     * On iOS it will use the Documents directory
     * On Android it's the directory on the primary shared/external
     * storage device where the application can place persistent files it owns.
     * These files are internal to the applications, and not typically visible
     * to the user as media.
     * Files will be deleted when the application is uninstalled.
     */
    FilesystemDirectory["External"] = "EXTERNAL";
    /**
     * The external storage directory
     * On iOS it will use the Documents directory
     * On Android it's the primary shared/external storage directory.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`
     */
    FilesystemDirectory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(FilesystemDirectory || (FilesystemDirectory = {}));
var FilesystemEncoding;
(function (FilesystemEncoding) {
    FilesystemEncoding["UTF8"] = "utf8";
    FilesystemEncoding["ASCII"] = "ascii";
    FilesystemEncoding["UTF16"] = "utf16";
})(FilesystemEncoding || (FilesystemEncoding = {}));
var HapticsImpactStyle;
(function (HapticsImpactStyle) {
    HapticsImpactStyle["Heavy"] = "HEAVY";
    HapticsImpactStyle["Medium"] = "MEDIUM";
    HapticsImpactStyle["Light"] = "LIGHT";
})(HapticsImpactStyle || (HapticsImpactStyle = {}));
var HapticsNotificationType;
(function (HapticsNotificationType) {
    HapticsNotificationType["SUCCESS"] = "SUCCESS";
    HapticsNotificationType["WARNING"] = "WARNING";
    HapticsNotificationType["ERROR"] = "ERROR";
})(HapticsNotificationType || (HapticsNotificationType = {}));
var KeyboardStyle;
(function (KeyboardStyle) {
    KeyboardStyle["Dark"] = "DARK";
    KeyboardStyle["Light"] = "LIGHT";
})(KeyboardStyle || (KeyboardStyle = {}));
var KeyboardResize;
(function (KeyboardResize) {
    KeyboardResize["Body"] = "body";
    KeyboardResize["Ionic"] = "ionic";
    KeyboardResize["Native"] = "native";
    KeyboardResize["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));
var ActionSheetOptionStyle;
(function (ActionSheetOptionStyle) {
    ActionSheetOptionStyle["Default"] = "DEFAULT";
    ActionSheetOptionStyle["Destructive"] = "DESTRUCTIVE";
    ActionSheetOptionStyle["Cancel"] = "CANCEL";
})(ActionSheetOptionStyle || (ActionSheetOptionStyle = {}));
//
var PermissionType;
(function (PermissionType) {
    PermissionType["Camera"] = "camera";
    PermissionType["Photos"] = "photos";
    PermissionType["Geolocation"] = "geolocation";
    PermissionType["Notifications"] = "notifications";
    PermissionType["ClipboardRead"] = "clipboard-read";
    PermissionType["ClipboardWrite"] = "clipboard-write";
    PermissionType["Microphone"] = "microphone";
})(PermissionType || (PermissionType = {}));
var PhotosAlbumType;
(function (PhotosAlbumType) {
    /**
     * Album is a "smart" album (such as Favorites or Recently Added)
     */
    PhotosAlbumType["Smart"] = "smart";
    /**
     * Album is a cloud-shared album
     */
    PhotosAlbumType["Shared"] = "shared";
    /**
     * Album is a user-created album
     */
    PhotosAlbumType["User"] = "user";
})(PhotosAlbumType || (PhotosAlbumType = {}));
var StatusBarStyle;
(function (StatusBarStyle) {
    /**
     * Light text for dark backgrounds.
     */
    StatusBarStyle["Dark"] = "DARK";
    /**
     * Dark text for light backgrounds.
     */
    StatusBarStyle["Light"] = "LIGHT";
})(StatusBarStyle || (StatusBarStyle = {}));
var StatusBarAnimation;
(function (StatusBarAnimation) {
    /**
     * No animation during show/hide.
     */
    StatusBarAnimation["None"] = "NONE";
    /**
     * Slide animation during show/hide.
     */
    StatusBarAnimation["Slide"] = "SLIDE";
    /**
     * Fade animation during show/hide.
     */
    StatusBarAnimation["Fade"] = "FADE";
})(StatusBarAnimation || (StatusBarAnimation = {}));
//# sourceMappingURL=core-plugin-definitions.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/global.js":
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/global.js ***!
  \*********************************************************/
/*! exports provided: Capacitor, Plugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capacitor", function() { return Capacitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return Plugins; });
/* harmony import */ var _web_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-runtime */ "./node_modules/@capacitor/core/dist/esm/web-runtime.js");

// Create our default Capacitor instance, which will be
// overridden on native platforms
var Capacitor = (function (globalThis) {
    // Create a new CapacitorWeb instance if one doesn't already exist on globalThis
    // Ensure the global is assigned the same Capacitor instance,
    // then export Capacitor so it can be imported in other modules
    return globalThis.Capacitor = (globalThis.Capacitor || new _web_runtime__WEBPACK_IMPORTED_MODULE_0__["CapacitorWeb"]());
})(
// figure out the current globalThis, such as "window", "self" or "global"
// ensure errors are not thrown in an node SSR environment or web worker
typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
var Plugins = Capacitor.Plugins;

//# sourceMappingURL=global.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/index.js ***!
  \********************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, StatusBarAnimation, Capacitor, Plugins, registerWebPlugin, WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin, AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraResultType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemDirectory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsImpactStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsNotificationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardResize", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["ActionSheetOptionStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PermissionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PhotosAlbumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusBarAnimation", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarAnimation"]; });

/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./node_modules/@capacitor/core/dist/esm/global.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Capacitor", function() { return _global__WEBPACK_IMPORTED_MODULE_1__["Capacitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return _global__WEBPACK_IMPORTED_MODULE_1__["Plugins"]; });

/* harmony import */ var _web_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-plugins */ "./node_modules/@capacitor/core/dist/esm/web-plugins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["registerWebPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accessibility", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Accessibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AppPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["App"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["BrowserPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Browser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["CameraPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Camera"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ClipboardPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Clipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["FilesystemPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Filesystem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["GeolocationPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["DevicePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Device"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotificationsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotifications", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SharePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Share"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ModalsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Modals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["MotionPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Motion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["NetworkPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Network"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["PermissionsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Permissions", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Permissions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreenPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreen", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["StoragePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ToastPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Toast"]; });

/* harmony import */ var _web_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPluginRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPlugins", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPlugin", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugin"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/util.js":
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/util.js ***!
  \*******************************************************/
/*! exports provided: extend, uuid4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return uuid4; });
var extend = function (target) {
    var objs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objs[_i - 1] = arguments[_i];
    }
    objs.forEach(function (o) {
        if (o && typeof (o) === 'object') {
            for (var k in o) {
                if (o.hasOwnProperty(k)) {
                    target[k] = o[k];
                }
            }
        }
    });
    return target;
};
var uuid4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web-plugins.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web-plugins.js ***!
  \**************************************************************/
/*! exports provided: registerWebPlugin, AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function() { return registerWebPlugin; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@capacitor/core/dist/esm/global.js");
/* harmony import */ var _web_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web/index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _web_accessibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web/accessibility */ "./node_modules/@capacitor/core/dist/esm/web/accessibility.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function() { return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accessibility", function() { return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["Accessibility"]; });

/* harmony import */ var _web_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/app */ "./node_modules/@capacitor/core/dist/esm/web/app.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function() { return _web_app__WEBPACK_IMPORTED_MODULE_3__["AppPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _web_app__WEBPACK_IMPORTED_MODULE_3__["App"]; });

/* harmony import */ var _web_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web/browser */ "./node_modules/@capacitor/core/dist/esm/web/browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return _web_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _web_browser__WEBPACK_IMPORTED_MODULE_4__["Browser"]; });

/* harmony import */ var _web_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web/camera */ "./node_modules/@capacitor/core/dist/esm/web/camera.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return _web_camera__WEBPACK_IMPORTED_MODULE_5__["CameraPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _web_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"]; });

/* harmony import */ var _web_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web/clipboard */ "./node_modules/@capacitor/core/dist/esm/web/clipboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["Clipboard"]; });

/* harmony import */ var _web_filesystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web/filesystem */ "./node_modules/@capacitor/core/dist/esm/web/filesystem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function() { return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["FilesystemPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["Filesystem"]; });

/* harmony import */ var _web_geolocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web/geolocation */ "./node_modules/@capacitor/core/dist/esm/web/geolocation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["GeolocationPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["Geolocation"]; });

/* harmony import */ var _web_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web/device */ "./node_modules/@capacitor/core/dist/esm/web/device.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return _web_device__WEBPACK_IMPORTED_MODULE_9__["DevicePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return _web_device__WEBPACK_IMPORTED_MODULE_9__["Device"]; });

/* harmony import */ var _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web/local-notifications */ "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function() { return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotificationsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotifications", function() { return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotifications"]; });

/* harmony import */ var _web_share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./web/share */ "./node_modules/@capacitor/core/dist/esm/web/share.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return _web_share__WEBPACK_IMPORTED_MODULE_11__["SharePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _web_share__WEBPACK_IMPORTED_MODULE_11__["Share"]; });

/* harmony import */ var _web_modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./web/modals */ "./node_modules/@capacitor/core/dist/esm/web/modals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return _web_modals__WEBPACK_IMPORTED_MODULE_12__["ModalsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _web_modals__WEBPACK_IMPORTED_MODULE_12__["Modals"]; });

/* harmony import */ var _web_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./web/motion */ "./node_modules/@capacitor/core/dist/esm/web/motion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return _web_motion__WEBPACK_IMPORTED_MODULE_13__["MotionPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return _web_motion__WEBPACK_IMPORTED_MODULE_13__["Motion"]; });

/* harmony import */ var _web_network__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./web/network */ "./node_modules/@capacitor/core/dist/esm/web/network.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function() { return _web_network__WEBPACK_IMPORTED_MODULE_14__["NetworkPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return _web_network__WEBPACK_IMPORTED_MODULE_14__["Network"]; });

/* harmony import */ var _web_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./web/permissions */ "./node_modules/@capacitor/core/dist/esm/web/permissions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function() { return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["PermissionsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Permissions", function() { return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["Permissions"]; });

/* harmony import */ var _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./web/splash-screen */ "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function() { return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreenPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreen", function() { return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreen"]; });

/* harmony import */ var _web_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./web/storage */ "./node_modules/@capacitor/core/dist/esm/web/storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return _web_storage__WEBPACK_IMPORTED_MODULE_17__["StoragePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _web_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"]; });

/* harmony import */ var _web_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./web/toast */ "./node_modules/@capacitor/core/dist/esm/web/toast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return _web_toast__WEBPACK_IMPORTED_MODULE_18__["ToastPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _web_toast__WEBPACK_IMPORTED_MODULE_18__["Toast"]; });




















Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugins"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);
var registerWebPlugin = function (plugin) {
    Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugin"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"], plugin);
};
//# sourceMappingURL=web-plugins.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web-runtime.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web-runtime.js ***!
  \**************************************************************/
/*! exports provided: CapacitorWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorWeb", function() { return CapacitorWeb; });
var CapacitorWeb = /** @class */ (function () {
    function CapacitorWeb() {
        var _this = this;
        this.platform = 'web';
        this.isNative = false;
        // Need to assign here to avoid having to define every plugin but still
        // get the typed benefits of the provided plugins in PluginRegistry
        this.Plugins = {};
        // Gracefully degrade in non-Proxy supporting engines, e.g. IE11. This
        // effectively means that trying to access an unavailable plugin will
        // locally throw, but this is still better than throwing a syntax error.
        if (typeof Proxy !== 'undefined') {
            // Build a proxy for the Plugins object that returns the "Noop Plugin"
            // if a plugin isn't available
            this.Plugins = new Proxy(this.Plugins, {
                get: function (target, prop) {
                    if (typeof target[prop] === 'undefined') {
                        var thisRef_1 = _this;
                        return new Proxy({}, {
                            get: function (_target, _prop) {
                                if (typeof _target[_prop] === 'undefined') {
                                    return thisRef_1.pluginMethodNoop.bind(thisRef_1, _target, _prop, prop);
                                }
                                else {
                                    return _target[_prop];
                                }
                            }
                        });
                    }
                    else {
                        return target[prop];
                    }
                }
            });
        }
    }
    CapacitorWeb.prototype.pluginMethodNoop = function (_target, _prop, pluginName) {
        return Promise.reject(pluginName + " does not have web implementation.");
    };
    CapacitorWeb.prototype.getPlatform = function () {
        return this.platform;
    };
    CapacitorWeb.prototype.isPluginAvailable = function (name) {
        return this.Plugins.hasOwnProperty(name);
    };
    CapacitorWeb.prototype.convertFileSrc = function (filePath) {
        return filePath;
    };
    CapacitorWeb.prototype.handleError = function (e) {
        console.error(e);
    };
    return CapacitorWeb;
}());

//# sourceMappingURL=web-runtime.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/accessibility.js":
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/accessibility.js ***!
  \********************************************************************/
/*! exports provided: AccessibilityPluginWeb, Accessibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function() { return AccessibilityPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accessibility", function() { return Accessibility; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var AccessibilityPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AccessibilityPluginWeb, _super);
    function AccessibilityPluginWeb() {
        return _super.call(this, {
            name: 'Accessibility',
            platforms: ['web']
        }) || this;
    }
    AccessibilityPluginWeb.prototype.isScreenReaderEnabled = function () {
        throw new Error('Feature not available in the browser');
    };
    AccessibilityPluginWeb.prototype.speak = function (options) {
        if (!('speechSynthesis' in window)) {
            return Promise.reject('Browser does not support the Speech Synthesis API');
        }
        var utterance = new SpeechSynthesisUtterance(options.value);
        if (options.language) {
            utterance.lang = options.language;
        }
        window.speechSynthesis.speak(utterance);
        return Promise.resolve();
    };
    return AccessibilityPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Accessibility = new AccessibilityPluginWeb();

//# sourceMappingURL=accessibility.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/app.js":
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/app.js ***!
  \**********************************************************/
/*! exports provided: AppPluginWeb, App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function() { return AppPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var AppPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppPluginWeb, _super);
    function AppPluginWeb() {
        var _this = _super.call(this, {
            name: 'App',
            platforms: ['web']
        }) || this;
        if (typeof document !== 'undefined') {
            document.addEventListener('visibilitychange', _this.handleVisibilityChange.bind(_this), false);
        }
        return _this;
    }
    AppPluginWeb.prototype.exitApp = function () {
        throw new Error('Method not implemented.');
    };
    AppPluginWeb.prototype.canOpenUrl = function (_options) {
        return Promise.resolve({ value: true });
    };
    AppPluginWeb.prototype.openUrl = function (_options) {
        return Promise.resolve({ completed: true });
    };
    AppPluginWeb.prototype.getLaunchUrl = function () {
        return Promise.resolve({ url: '' });
    };
    AppPluginWeb.prototype.getState = function () {
        return Promise.resolve({ isActive: document.hidden !== true });
    };
    AppPluginWeb.prototype.handleVisibilityChange = function () {
        var data = {
            isActive: document.hidden !== true
        };
        this.notifyListeners('appStateChange', data);
    };
    return AppPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var App = new AppPluginWeb();

//# sourceMappingURL=app.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/browser.js ***!
  \**************************************************************/
/*! exports provided: BrowserPluginWeb, Browser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return BrowserPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return Browser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var BrowserPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserPluginWeb, _super);
    function BrowserPluginWeb() {
        return _super.call(this, {
            name: 'Browser',
            platforms: ['web']
        }) || this;
    }
    BrowserPluginWeb.prototype.open = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this._lastWindow = window.open(options.url, options.windowName || '_blank');
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.prefetch = function (_options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                // Does nothing
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.close = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this._lastWindow && this._lastWindow.close();
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    return BrowserPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Browser = new BrowserPluginWeb();

//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/camera.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/camera.js ***!
  \*************************************************************/
/*! exports provided: CameraPluginWeb, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return CameraPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");



var CameraPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CameraPluginWeb, _super);
    function CameraPluginWeb() {
        return _super.call(this, {
            name: 'Camera',
            platforms: ['web']
        }) || this;
    }
    CameraPluginWeb.prototype.getPhoto = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var cameraModal_1, e_1;
                        var _this = this;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!options.webUseInput) return [3 /*break*/, 1];
                                    this.fileInputExperience(options, resolve);
                                    return [3 /*break*/, 7];
                                case 1:
                                    if (!customElements.get('pwa-camera-modal')) return [3 /*break*/, 6];
                                    cameraModal_1 = document.createElement('pwa-camera-modal');
                                    document.body.appendChild(cameraModal_1);
                                    _a.label = 2;
                                case 2:
                                    _a.trys.push([2, 4, , 5]);
                                    return [4 /*yield*/, cameraModal_1.componentOnReady()];
                                case 3:
                                    _a.sent();
                                    cameraModal_1.addEventListener('onPhoto', function (e) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        var photo, _a;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    photo = e.detail;
                                                    if (!(photo === null)) return [3 /*break*/, 1];
                                                    reject('User cancelled photos app');
                                                    return [3 /*break*/, 4];
                                                case 1:
                                                    if (!(photo instanceof Error)) return [3 /*break*/, 2];
                                                    reject(photo.message);
                                                    return [3 /*break*/, 4];
                                                case 2:
                                                    _a = resolve;
                                                    return [4 /*yield*/, this._getCameraPhoto(photo, options)];
                                                case 3:
                                                    _a.apply(void 0, [_b.sent()]);
                                                    _b.label = 4;
                                                case 4:
                                                    cameraModal_1.dismiss();
                                                    document.body.removeChild(cameraModal_1);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    cameraModal_1.present();
                                    return [3 /*break*/, 5];
                                case 4:
                                    e_1 = _a.sent();
                                    this.fileInputExperience(options, resolve);
                                    return [3 /*break*/, 5];
                                case 5: return [3 /*break*/, 7];
                                case 6:
                                    console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.");
                                    this.fileInputExperience(options, resolve);
                                    _a.label = 7;
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CameraPluginWeb.prototype.fileInputExperience = function (options, resolve) {
        var input = document.querySelector('#_capacitor-camera-input');
        var cleanup = function () {
            input.parentNode && input.parentNode.removeChild(input);
        };
        if (!input) {
            input = document.createElement('input');
            input.id = '_capacitor-camera-input';
            input.type = 'file';
            document.body.appendChild(input);
        }
        input.accept = 'image/*';
        input.capture = true;
        if (options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos || options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Prompt) {
            input.removeAttribute('capture');
        }
        else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraDirection"].Front) {
            input.capture = 'user';
        }
        else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraDirection"].Rear) {
            input.capture = 'environment';
        }
        input.addEventListener('change', function (_e) {
            var file = input.files[0];
            var format = 'jpeg';
            if (file.type === 'image/png') {
                format = 'png';
            }
            else if (file.type === 'image/gif') {
                format = 'gif';
            }
            if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl || options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64) {
                var reader_1 = new FileReader();
                reader_1.addEventListener('load', function () {
                    if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                        resolve({
                            dataUrl: reader_1.result,
                            format: format
                        });
                    }
                    else if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64) {
                        var b64 = reader_1.result.split(',')[1];
                        resolve({
                            base64String: b64,
                            format: format
                        });
                    }
                    cleanup();
                });
                reader_1.readAsDataURL(file);
            }
            else {
                resolve({
                    webPath: URL.createObjectURL(file),
                    format: format
                });
                cleanup();
            }
        });
        input.click();
    };
    CameraPluginWeb.prototype._getCameraPhoto = function (photo, options) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            var format = photo.type.split('/')[1];
            if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri) {
                resolve({
                    webPath: URL.createObjectURL(photo),
                    format: format
                });
            }
            else {
                reader.readAsDataURL(photo);
                reader.onloadend = function () {
                    var r = reader.result;
                    if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                        resolve({
                            dataUrl: r,
                            format: format
                        });
                    }
                    else {
                        resolve({
                            base64String: r.split(',')[1],
                            format: format
                        });
                    }
                };
                reader.onerror = function (e) {
                    reject(e);
                };
            }
        });
    };
    return CameraPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Camera = new CameraPluginWeb();

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/clipboard.js":
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/clipboard.js ***!
  \****************************************************************/
/*! exports provided: ClipboardPluginWeb, Clipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return ClipboardPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var ClipboardPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClipboardPluginWeb, _super);
    function ClipboardPluginWeb() {
        return _super.call(this, {
            name: 'Clipboard',
            platforms: ['web']
        }) || this;
    }
    ClipboardPluginWeb.prototype.write = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var blob, clipboardItemInput, err_1;
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        if (!(options.string !== undefined || options.url)) return [3 /*break*/, 2];
                        if (!navigator.clipboard.writeText) {
                            return [2 /*return*/, Promise.reject('Writting to clipboard not supported in this browser')];
                        }
                        return [4 /*yield*/, navigator.clipboard.writeText(options.string !== undefined ? options.string : options.url)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 2:
                        if (!options.image) return [3 /*break*/, 9];
                        if (!navigator.clipboard.write) {
                            return [2 /*return*/, Promise.reject('Setting images not supported in this browser')];
                        }
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 7, , 8]);
                        return [4 /*yield*/, fetch(options.image)];
                    case 4: return [4 /*yield*/, (_b.sent()).blob()];
                    case 5:
                        blob = _b.sent();
                        clipboardItemInput = new ClipboardItem((_a = {}, _a[blob.type] = blob, _a));
                        return [4 /*yield*/, navigator.clipboard.write([clipboardItemInput])];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        err_1 = _b.sent();
                        return [2 /*return*/, Promise.reject('Failed to write image')];
                    case 8: return [3 /*break*/, 10];
                    case 9: return [2 /*return*/, Promise.reject('Nothing to write')];
                    case 10: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    ClipboardPluginWeb.prototype.read = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var clipboardItems, type, clipboardBlob, data, err_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        if (!!navigator.clipboard.read) return [3 /*break*/, 1];
                        if (!navigator.clipboard.readText) {
                            return [2 /*return*/, Promise.reject('Reading from clipboard not supported in this browser')];
                        }
                        return [2 /*return*/, this.readText()];
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, navigator.clipboard.read()];
                    case 2:
                        clipboardItems = _a.sent();
                        type = clipboardItems[0].types[0];
                        return [4 /*yield*/, clipboardItems[0].getType(type)];
                    case 3:
                        clipboardBlob = _a.sent();
                        return [4 /*yield*/, this._getBlobData(clipboardBlob, type)];
                    case 4:
                        data = _a.sent();
                        return [2 /*return*/, Promise.resolve({ value: data, type: type })];
                    case 5:
                        err_2 = _a.sent();
                        return [2 /*return*/, this.readText()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ClipboardPluginWeb.prototype.readText = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var text;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigator.clipboard.readText()];
                    case 1:
                        text = _a.sent();
                        return [2 /*return*/, Promise.resolve({ value: text, type: 'text/plain' })];
                }
            });
        });
    };
    ClipboardPluginWeb.prototype._getBlobData = function (clipboardBlob, type) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            if (type.includes('image')) {
                reader.readAsDataURL(clipboardBlob);
            }
            else {
                reader.readAsText(clipboardBlob);
            }
            reader.onloadend = function () {
                var r = reader.result;
                resolve(r);
            };
            reader.onerror = function (e) {
                reject(e);
            };
        });
    };
    return ClipboardPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Clipboard = new ClipboardPluginWeb();

//# sourceMappingURL=clipboard.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/device.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/device.js ***!
  \*************************************************************/
/*! exports provided: DevicePluginWeb, Device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return DevicePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/@capacitor/core/dist/esm/util.js");



var DevicePluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DevicePluginWeb, _super);
    function DevicePluginWeb() {
        return _super.call(this, {
            name: 'Device',
            platforms: ['web']
        }) || this;
    }
    DevicePluginWeb.prototype.getInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ua, uaFields;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                ua = navigator.userAgent;
                uaFields = this.parseUa(ua);
                return [2 /*return*/, Promise.resolve({
                        model: uaFields.model,
                        platform: 'web',
                        appVersion: '',
                        appBuild: '',
                        appId: '',
                        appName: '',
                        operatingSystem: uaFields.operatingSystem,
                        osVersion: uaFields.osVersion,
                        manufacturer: navigator.vendor,
                        isVirtual: false,
                        uuid: this.getUid()
                    })];
            });
        });
    };
    DevicePluginWeb.prototype.getBatteryInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var battery, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        battery = {};
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.getBattery()];
                    case 2:
                        battery = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, Promise.resolve({
                            batteryLevel: battery.level,
                            isCharging: battery.charging
                        })];
                }
            });
        });
    };
    DevicePluginWeb.prototype.getLanguageCode = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, {
                        value: navigator.language
                    }];
            });
        });
    };
    DevicePluginWeb.prototype.parseUa = function (_ua) {
        var uaFields = {};
        var start = _ua.indexOf('(') + 1;
        var end = _ua.indexOf(') AppleWebKit');
        if (_ua.indexOf(') Gecko') !== -1) {
            end = _ua.indexOf(') Gecko');
        }
        var fields = _ua.substring(start, end);
        if (_ua.indexOf('Android') !== -1) {
            uaFields.model = fields.replace('; wv', '').split('; ').pop().split(' Build')[0];
            uaFields.osVersion = fields.split('; ')[1];
        }
        else {
            uaFields.model = fields.split('; ')[0];
            if (navigator.oscpu) {
                uaFields.osVersion = navigator.oscpu;
            }
            else {
                if (_ua.indexOf('Windows') !== -1) {
                    uaFields.osVersion = fields;
                }
                else {
                    var lastParts = fields.split('; ').pop().replace(' like Mac OS X', '').split(' ');
                    uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, '.');
                }
            }
        }
        if (/android/i.test(_ua)) {
            uaFields.operatingSystem = 'android';
        }
        else if (/iPad|iPhone|iPod/.test(_ua) && !window.MSStream) {
            uaFields.operatingSystem = 'ios';
        }
        else if (/Win/.test(_ua)) {
            uaFields.operatingSystem = 'windows';
        }
        else if (/Mac/i.test(_ua)) {
            uaFields.operatingSystem = 'mac';
        }
        else {
            uaFields.operatingSystem = 'unknown';
        }
        return uaFields;
    };
    DevicePluginWeb.prototype.getUid = function () {
        var uid = window.localStorage.getItem('_capuid');
        if (uid) {
            return uid;
        }
        uid = Object(_util__WEBPACK_IMPORTED_MODULE_2__["uuid4"])();
        window.localStorage.setItem('_capuid', uid);
        return uid;
    };
    return DevicePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Device = new DevicePluginWeb();

//# sourceMappingURL=device.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/filesystem.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/filesystem.js ***!
  \*****************************************************************/
/*! exports provided: FilesystemPluginWeb, Filesystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function() { return FilesystemPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return Filesystem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");



var FilesystemPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FilesystemPluginWeb, _super);
    function FilesystemPluginWeb() {
        var _this = _super.call(this, {
            name: 'Filesystem',
            platforms: ['web']
        }) || this;
        _this.DEFAULT_DIRECTORY = _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data;
        _this.DB_VERSION = 1;
        _this.DB_NAME = 'Disc';
        _this._writeCmds = ['add', 'put', 'delete'];
        return _this;
    }
    FilesystemPluginWeb.prototype.initDb = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this._db !== undefined) {
                    return [2 /*return*/, this._db];
                }
                if (!('indexedDB' in window)) {
                    throw new Error('This browser doesn\'t support IndexedDB');
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var request = indexedDB.open(_this.DB_NAME, _this.DB_VERSION);
                        request.onupgradeneeded = FilesystemPluginWeb.doUpgrade;
                        request.onsuccess = function () {
                            _this._db = request.result;
                            resolve(request.result);
                        };
                        request.onerror = function () { return reject(request.error); };
                        request.onblocked = function () {
                            console.warn('db blocked');
                        };
                    })];
            });
        });
    };
    FilesystemPluginWeb.doUpgrade = function (event) {
        var eventTarget = event.target;
        var db = eventTarget.result;
        switch (event.oldVersion) {
            case 0:
            case 1:
            default:
                if (db.objectStoreNames.contains('FileStorage')) {
                    db.deleteObjectStore('FileStorage');
                }
                var store = db.createObjectStore('FileStorage', { keyPath: 'path' });
                store.createIndex('by_folder', 'folder');
        }
    };
    FilesystemPluginWeb.prototype.dbRequest = function (cmd, args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var readFlag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
                return [2 /*return*/, this.initDb()
                        .then(function (conn) {
                        return new Promise(function (resolve, reject) {
                            var tx = conn.transaction(['FileStorage'], readFlag);
                            var store = tx.objectStore('FileStorage');
                            var req = store[cmd].apply(store, args);
                            req.onsuccess = function () { return resolve(req.result); };
                            req.onerror = function () { return reject(req.error); };
                        });
                    })];
            });
        });
    };
    FilesystemPluginWeb.prototype.dbIndexRequest = function (indexName, cmd, args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var readFlag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
                return [2 /*return*/, this.initDb()
                        .then(function (conn) {
                        return new Promise(function (resolve, reject) {
                            var tx = conn.transaction(['FileStorage'], readFlag);
                            var store = tx.objectStore('FileStorage');
                            var index = store.index(indexName);
                            var req = index[cmd].apply(index, args);
                            req.onsuccess = function () { return resolve(req.result); };
                            req.onerror = function () { return reject(req.error); };
                        });
                    })];
            });
        });
    };
    FilesystemPluginWeb.prototype.getPath = function (directory, uriPath) {
        directory = directory || this.DEFAULT_DIRECTORY;
        var cleanedUriPath = uriPath !== undefined ? uriPath.replace(/^[/]+|[/]+$/g, '') : '';
        var fsPath = '/' + directory;
        if (uriPath !== '')
            fsPath += '/' + cleanedUriPath;
        return fsPath;
    };
    FilesystemPluginWeb.prototype.clear = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var conn, tx, store;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initDb()];
                    case 1:
                        conn = _a.sent();
                        tx = conn.transaction(['FileStorage'], 'readwrite');
                        store = tx.objectStore('FileStorage');
                        store.clear();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Read a file from disk
     * @param options options for the file read
     * @return a promise that resolves with the read file data result
     */
    FilesystemPluginWeb.prototype.readFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (entry === undefined)
                            throw Error('File does not exist.');
                        return [2 /*return*/, { data: entry.content }];
                }
            });
        });
    };
    /**
     * Write a file to disk in the specified location on device
     * @param options options for the file write
     * @return a promise that resolves with the file write result
     */
    FilesystemPluginWeb.prototype.writeFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, data, doRecursive, occupiedEntry, encoding, parentPath, parentEntry, subDirIndex, parentArgPath, now, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        data = options.data;
                        doRecursive = options.recursive;
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        occupiedEntry = _a.sent();
                        if (occupiedEntry && occupiedEntry.type === 'directory')
                            throw ('The supplied path is a directory.');
                        encoding = options.encoding;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 2:
                        parentEntry = _a.sent();
                        if (!(parentEntry === undefined)) return [3 /*break*/, 4];
                        subDirIndex = parentPath.indexOf('/', 1);
                        if (!(subDirIndex !== -1)) return [3 /*break*/, 4];
                        parentArgPath = parentPath.substr(subDirIndex);
                        return [4 /*yield*/, this.mkdir({ path: parentArgPath, directory: options.directory, recursive: doRecursive })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        now = Date.now();
                        pathObj = {
                            path: path,
                            folder: parentPath,
                            type: 'file',
                            size: data.length,
                            ctime: now,
                            mtime: now,
                            content: !encoding && data.indexOf(',') >= 0 ? data.split(',')[1] : data,
                        };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {
                                uri: pathObj.path
                            }];
                }
            });
        });
    };
    /**
     * Append to a file on disk in the specified location on device
     * @param options options for the file append
     * @return a promise that resolves with the file write result
     */
    FilesystemPluginWeb.prototype.appendFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, data, parentPath, now, ctime, occupiedEntry, parentEntry, parentArgPathIndex, parentArgPath, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        data = options.data;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        now = Date.now();
                        ctime = now;
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        occupiedEntry = _a.sent();
                        if (occupiedEntry && occupiedEntry.type === 'directory')
                            throw ('The supplied path is a directory.');
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 2:
                        parentEntry = _a.sent();
                        if (!(parentEntry === undefined)) return [3 /*break*/, 4];
                        parentArgPathIndex = parentPath.indexOf('/', 1);
                        parentArgPath = parentArgPathIndex !== -1 ? parentPath.substr(parentArgPathIndex) : '/';
                        return [4 /*yield*/, this.mkdir({ path: parentArgPath, directory: options.directory, recursive: true })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (occupiedEntry !== undefined) {
                            data = occupiedEntry.content + data;
                            ctime = occupiedEntry.ctime;
                        }
                        pathObj = {
                            path: path,
                            folder: parentPath,
                            type: 'file',
                            size: data.length,
                            ctime: ctime,
                            mtime: now,
                            content: data
                        };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Delete a file from disk
     * @param options options for the file delete
     * @return a promise that resolves with the deleted file data result
     */
    FilesystemPluginWeb.prototype.deleteFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry, entries;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (entry === undefined)
                            throw Error('File does not exist.');
                        return [4 /*yield*/, this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];
                    case 2:
                        entries = _a.sent();
                        if (entries.length !== 0)
                            throw Error('Folder is not empty.');
                        return [4 /*yield*/, this.dbRequest('delete', [path])];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Create a directory.
     * @param options options for the mkdir
     * @return a promise that resolves with the mkdir result
     */
    FilesystemPluginWeb.prototype.mkdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, doRecursive, parentPath, depth, parentEntry, occupiedEntry, parentArgPath, now, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        doRecursive = options.recursive;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        depth = (path.match(/\//g) || []).length;
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 1:
                        parentEntry = _a.sent();
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 2:
                        occupiedEntry = _a.sent();
                        if (depth === 1)
                            throw Error('Cannot create Root directory');
                        if (occupiedEntry !== undefined)
                            throw Error('Current directory does already exist.');
                        if (!doRecursive && depth !== 2 && parentEntry === undefined)
                            throw Error('Parent directory must exist');
                        if (!(doRecursive && depth !== 2 && parentEntry === undefined)) return [3 /*break*/, 4];
                        parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                        return [4 /*yield*/, this.mkdir({
                                path: parentArgPath,
                                directory: options.directory,
                                recursive: doRecursive
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        now = Date.now();
                        pathObj = { path: path, folder: parentPath, type: 'directory', size: 0, ctime: now, mtime: now };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Remove a directory
     * @param options the options for the directory remove
     */
    FilesystemPluginWeb.prototype.rmdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, directory, recursive, fullPath, entry, readDirResult, _i, _a, entry_1, entryPath, entryObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        path = options.path, directory = options.directory, recursive = options.recursive;
                        fullPath = this.getPath(directory, path);
                        return [4 /*yield*/, this.dbRequest('get', [fullPath])];
                    case 1:
                        entry = _b.sent();
                        if (entry === undefined)
                            throw Error('Folder does not exist.');
                        if (entry.type !== 'directory')
                            throw Error('Requested path is not a directory');
                        return [4 /*yield*/, this.readdir({ path: path, directory: directory })];
                    case 2:
                        readDirResult = _b.sent();
                        if (readDirResult.files.length !== 0 && !recursive)
                            throw Error('Folder is not empty');
                        _i = 0, _a = readDirResult.files;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        entry_1 = _a[_i];
                        entryPath = path + "/" + entry_1;
                        return [4 /*yield*/, this.stat({ path: entryPath, directory: directory })];
                    case 4:
                        entryObj = _b.sent();
                        if (!(entryObj.type === 'file')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.deleteFile({ path: entryPath, directory: directory })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.rmdir({ path: entryPath, directory: directory, recursive: recursive })];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 3];
                    case 9: return [4 /*yield*/, this.dbRequest('delete', [fullPath])];
                    case 10:
                        _b.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Return a list of files from the directory (not recursive)
     * @param options the options for the readdir operation
     * @return a promise that resolves with the readdir directory listing result
     */
    FilesystemPluginWeb.prototype.readdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry, entries, names;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (options.path !== '' && entry === undefined)
                            throw Error('Folder does not exist.');
                        return [4 /*yield*/, this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];
                    case 2:
                        entries = _a.sent();
                        names = entries.map(function (e) {
                            return e.substring(path.length + 1);
                        });
                        return [2 /*return*/, { files: names }];
                }
            });
        });
    };
    /**
     * Return full File URI for a path and directory
     * @param options the options for the stat operation
     * @return a promise that resolves with the file stat result
     */
    FilesystemPluginWeb.prototype.getUri = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (!(entry === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.dbRequest('get', [path + '/'])];
                    case 2:
                        entry = (_a.sent());
                        _a.label = 3;
                    case 3:
                        if (entry === undefined)
                            throw Error('Entry does not exist.');
                        return [2 /*return*/, {
                                uri: entry.path
                            }];
                }
            });
        });
    };
    /**
     * Return data about a file
     * @param options the options for the stat operation
     * @return a promise that resolves with the file stat result
     */
    FilesystemPluginWeb.prototype.stat = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (!(entry === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.dbRequest('get', [path + '/'])];
                    case 2:
                        entry = (_a.sent());
                        _a.label = 3;
                    case 3:
                        if (entry === undefined)
                            throw Error('Entry does not exist.');
                        return [2 /*return*/, {
                                type: entry.type,
                                size: entry.size,
                                ctime: entry.ctime,
                                mtime: entry.mtime,
                                uri: entry.path
                            }];
                }
            });
        });
    };
    /**
     * Rename a file or directory
     * @param options the options for the rename operation
     * @return a promise that resolves with the rename result
     */
    FilesystemPluginWeb.prototype.rename = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this._copy(options, true)];
            });
        });
    };
    /**
     * Copy a file or directory
     * @param options the options for the copy operation
     * @return a promise that resolves with the copy result
     */
    FilesystemPluginWeb.prototype.copy = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this._copy(options, false)];
            });
        });
    };
    /**
     * Function that can perform a copy or a rename
     * @param options the options for the rename operation
     * @param doRename whether to perform a rename or copy operation
     * @return a promise that resolves with the result
     */
    FilesystemPluginWeb.prototype._copy = function (options, doRename) {
        if (doRename === void 0) { doRename = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var to, from, fromDirectory, toDirectory, fromPath, toPath, toObj, e_1, toPathComponents, toPath_1, toParentDirectory, fromObj, updateTime, _a, file, e_2, contents, _i, contents_1, filename;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        to = options.to, from = options.from, fromDirectory = options.directory, toDirectory = options.toDirectory;
                        if (!to || !from) {
                            throw Error('Both to and from must be provided');
                        }
                        // If no "to" directory is provided, use the "from" directory
                        if (!toDirectory) {
                            toDirectory = fromDirectory;
                        }
                        fromPath = this.getPath(fromDirectory, from);
                        toPath = this.getPath(toDirectory, to);
                        // Test that the "to" and "from" locations are different
                        if (fromPath === toPath) {
                            return [2 /*return*/, {}];
                        }
                        if (toPath.startsWith(fromPath)) {
                            throw Error('To path cannot contain the from path');
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 6]);
                        return [4 /*yield*/, this.stat({
                                path: to,
                                directory: toDirectory
                            })];
                    case 2:
                        toObj = _b.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        e_1 = _b.sent();
                        toPathComponents = to.split('/');
                        toPathComponents.pop();
                        toPath_1 = toPathComponents.join('/');
                        if (!(toPathComponents.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.stat({
                                path: toPath_1,
                                directory: toDirectory,
                            })];
                    case 4:
                        toParentDirectory = _b.sent();
                        if (toParentDirectory.type !== 'directory') {
                            throw new Error('Parent directory of the to path is a file');
                        }
                        _b.label = 5;
                    case 5: return [3 /*break*/, 6];
                    case 6:
                        // Cannot overwrite a directory
                        if (toObj && toObj.type === 'directory') {
                            throw new Error('Cannot overwrite a directory with a file');
                        }
                        return [4 /*yield*/, this.stat({
                                path: from,
                                directory: fromDirectory,
                            })];
                    case 7:
                        fromObj = _b.sent();
                        updateTime = function (path, ctime, mtime) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var fullPath, entry;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        fullPath = this.getPath(toDirectory, path);
                                        return [4 /*yield*/, this.dbRequest('get', [fullPath])];
                                    case 1:
                                        entry = _a.sent();
                                        entry.ctime = ctime;
                                        entry.mtime = mtime;
                                        return [4 /*yield*/, this.dbRequest('put', [entry])];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        _a = fromObj.type;
                        switch (_a) {
                            case 'file': return [3 /*break*/, 8];
                            case 'directory': return [3 /*break*/, 15];
                        }
                        return [3 /*break*/, 28];
                    case 8: return [4 /*yield*/, this.readFile({
                            path: from,
                            directory: fromDirectory
                        })];
                    case 9:
                        file = _b.sent();
                        if (!doRename) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.deleteFile({
                                path: from,
                                directory: fromDirectory
                            })];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: 
                    // Write the file to the new location
                    return [4 /*yield*/, this.writeFile({
                            path: to,
                            directory: toDirectory,
                            data: file.data
                        })];
                    case 12:
                        // Write the file to the new location
                        _b.sent();
                        if (!doRename) return [3 /*break*/, 14];
                        return [4 /*yield*/, updateTime(to, fromObj.ctime, fromObj.mtime)];
                    case 13:
                        _b.sent();
                        _b.label = 14;
                    case 14: 
                    // Resolve promise
                    return [2 /*return*/, {}];
                    case 15:
                        if (toObj) {
                            throw Error('Cannot move a directory over an existing object');
                        }
                        _b.label = 16;
                    case 16:
                        _b.trys.push([16, 20, , 21]);
                        // Create the to directory
                        return [4 /*yield*/, this.mkdir({
                                path: to,
                                directory: toDirectory,
                                recursive: false,
                            })];
                    case 17:
                        // Create the to directory
                        _b.sent();
                        if (!doRename) return [3 /*break*/, 19];
                        return [4 /*yield*/, updateTime(to, fromObj.ctime, fromObj.mtime)];
                    case 18:
                        _b.sent();
                        _b.label = 19;
                    case 19: return [3 /*break*/, 21];
                    case 20:
                        e_2 = _b.sent();
                        return [3 /*break*/, 21];
                    case 21: return [4 /*yield*/, this.readdir({
                            path: from,
                            directory: fromDirectory,
                        })];
                    case 22:
                        contents = (_b.sent()).files;
                        _i = 0, contents_1 = contents;
                        _b.label = 23;
                    case 23:
                        if (!(_i < contents_1.length)) return [3 /*break*/, 26];
                        filename = contents_1[_i];
                        // Move item from the from directory to the to directory
                        return [4 /*yield*/, this._copy({
                                from: from + "/" + filename,
                                to: to + "/" + filename,
                                directory: fromDirectory,
                                toDirectory: toDirectory,
                            }, doRename)];
                    case 24:
                        // Move item from the from directory to the to directory
                        _b.sent();
                        _b.label = 25;
                    case 25:
                        _i++;
                        return [3 /*break*/, 23];
                    case 26:
                        if (!doRename) return [3 /*break*/, 28];
                        return [4 /*yield*/, this.rmdir({
                                path: from,
                                directory: fromDirectory
                            })];
                    case 27:
                        _b.sent();
                        _b.label = 28;
                    case 28: return [2 /*return*/, {}];
                }
            });
        });
    };
    FilesystemPluginWeb._debug = true;
    return FilesystemPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Filesystem = new FilesystemPluginWeb();

//# sourceMappingURL=filesystem.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/geolocation.js":
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/geolocation.js ***!
  \******************************************************************/
/*! exports provided: GeolocationPluginWeb, Geolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return GeolocationPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/@capacitor/core/dist/esm/util.js");



var GeolocationPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GeolocationPluginWeb, _super);
    function GeolocationPluginWeb() {
        return _super.call(this, {
            name: 'Geolocation',
            platforms: ['web']
        }) || this;
    }
    GeolocationPluginWeb.prototype.getCurrentPosition = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.requestPermissions().then(function (_result) {
                window.navigator.geolocation.getCurrentPosition(function (pos) {
                    resolve(pos);
                }, function (err) {
                    reject(err);
                }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }, options));
            });
        });
    };
    GeolocationPluginWeb.prototype.watchPosition = function (options, callback) {
        var id = window.navigator.geolocation.watchPosition(function (pos) {
            callback(pos);
        }, function (err) {
            callback(null, err);
        }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }, options));
        return "" + id;
    };
    GeolocationPluginWeb.prototype.clearWatch = function (options) {
        window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
        return Promise.resolve();
    };
    return GeolocationPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Geolocation = new GeolocationPluginWeb();

//# sourceMappingURL=geolocation.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/index.js ***!
  \************************************************************/
/*! exports provided: WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function() { return WebPluginRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPlugins", function() { return WebPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPlugin", function() { return WebPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function() { return mergeWebPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function() { return mergeWebPlugin; });
var WebPluginRegistry = /** @class */ (function () {
    function WebPluginRegistry() {
        this.plugins = {};
        this.loadedPlugins = {};
    }
    WebPluginRegistry.prototype.addPlugin = function (plugin) {
        this.plugins[plugin.config.name] = plugin;
    };
    WebPluginRegistry.prototype.getPlugin = function (name) {
        return this.plugins[name];
    };
    WebPluginRegistry.prototype.loadPlugin = function (name) {
        var plugin = this.getPlugin(name);
        if (!plugin) {
            console.error("Unable to load web plugin " + name + ", no such plugin found.");
            return;
        }
        plugin.load();
    };
    WebPluginRegistry.prototype.getPlugins = function () {
        var p = [];
        for (var name_1 in this.plugins) {
            p.push(this.plugins[name_1]);
        }
        return p;
    };
    return WebPluginRegistry;
}());

var WebPlugins = new WebPluginRegistry();

var WebPlugin = /** @class */ (function () {
    function WebPlugin(config, pluginRegistry) {
        this.config = config;
        this.loaded = false;
        this.listeners = {};
        this.windowListeners = {};
        if (!pluginRegistry) {
            WebPlugins.addPlugin(this);
        }
        else {
            pluginRegistry.addPlugin(this);
        }
    }
    WebPlugin.prototype.addWindowListener = function (handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    };
    WebPlugin.prototype.removeWindowListener = function (handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    };
    WebPlugin.prototype.addListener = function (eventName, listenerFunc) {
        var _this = this;
        var listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        var windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        return {
            remove: function () {
                _this.removeListener(eventName, listenerFunc);
            }
        };
    };
    WebPlugin.prototype.removeListener = function (eventName, listenerFunc) {
        var listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        var index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    };
    WebPlugin.prototype.removeAllListeners = function () {
        this.listeners = {};
        for (var listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    };
    WebPlugin.prototype.notifyListeners = function (eventName, data) {
        var listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(function (listener) { return listener(data); });
        }
    };
    WebPlugin.prototype.hasListeners = function (eventName) {
        return !!this.listeners[eventName].length;
    };
    WebPlugin.prototype.registerWindowListener = function (windowEventName, pluginEventName) {
        var _this = this;
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName: windowEventName,
            pluginEventName: pluginEventName,
            handler: function (event) {
                _this.notifyListeners(pluginEventName, event);
            }
        };
    };
    WebPlugin.prototype.requestPermissions = function () {
        if (Capacitor.isNative) {
            return Capacitor.nativePromise(this.config.name, 'requestPermissions', {});
        }
        else {
            return Promise.resolve({ results: [] });
        }
    };
    WebPlugin.prototype.load = function () {
        this.loaded = true;
    };
    return WebPlugin;
}());

var shouldMergeWebPlugin = function (plugin) {
    return plugin.config.platforms && plugin.config.platforms.indexOf(Capacitor.platform) >= 0;
};
/**
 * For all our known web plugins, merge them into the global plugins
 * registry if they aren't already existing. If they don't exist, that
 * means there's no existing native implementation for it.
 * @param knownPlugins the Capacitor.Plugins global registry.
 */
var mergeWebPlugins = function (knownPlugins) {
    var plugins = WebPlugins.getPlugins();
    for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
        var plugin = plugins_1[_i];
        mergeWebPlugin(knownPlugins, plugin);
    }
};
var mergeWebPlugin = function (knownPlugins, plugin) {
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    if (knownPlugins.hasOwnProperty(plugin.config.name) && !shouldMergeWebPlugin(plugin)) {
        return;
    }
    knownPlugins[plugin.config.name] = plugin;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/local-notifications.js ***!
  \**************************************************************************/
/*! exports provided: LocalNotificationsPluginWeb, LocalNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function() { return LocalNotificationsPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalNotifications", function() { return LocalNotifications; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var LocalNotificationsPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocalNotificationsPluginWeb, _super);
    function LocalNotificationsPluginWeb() {
        var _this = _super.call(this, {
            name: 'LocalNotifications',
            platforms: ['web']
        }) || this;
        _this.pending = [];
        return _this;
    }
    LocalNotificationsPluginWeb.prototype.createChannel = function (channel) {
        throw new Error('Feature not available in the browser. ' + channel.id);
    };
    LocalNotificationsPluginWeb.prototype.deleteChannel = function (channel) {
        throw new Error('Feature not available in the browser. ' + channel.id);
    };
    LocalNotificationsPluginWeb.prototype.listChannels = function () {
        throw new Error('Feature not available in the browser');
    };
    LocalNotificationsPluginWeb.prototype.sendPending = function () {
        var _this = this;
        var toRemove = [];
        var now = +new Date;
        this.pending.forEach(function (localNotification) {
            if (localNotification.schedule && localNotification.schedule.at) {
                if (+localNotification.schedule.at <= now) {
                    _this.buildNotification(localNotification);
                    toRemove.push(localNotification);
                }
            }
        });
        console.log('Sent pending, removing', toRemove);
        this.pending = this.pending.filter(function (localNotification) { return !toRemove.find(function (ln) { return ln === localNotification; }); });
    };
    LocalNotificationsPluginWeb.prototype.sendNotification = function (localNotification) {
        var _this = this;
        var l = localNotification;
        if (localNotification.schedule && localNotification.schedule.at) {
            var diff = +localNotification.schedule.at - +new Date;
            this.pending.push(l);
            setTimeout(function () {
                _this.sendPending();
            }, diff);
            return;
        }
        this.buildNotification(localNotification);
    };
    LocalNotificationsPluginWeb.prototype.buildNotification = function (localNotification) {
        var l = localNotification;
        return new Notification(l.title, {
            body: l.body
        });
    };
    LocalNotificationsPluginWeb.prototype.schedule = function (options) {
        var _this = this;
        var notifications = [];
        options.notifications.forEach(function (notification) {
            notifications.push(_this.sendNotification(notification));
        });
        return Promise.resolve({
            notifications: options.notifications.map(function (notification) { return { id: '' + notification.id }; })
        });
    };
    LocalNotificationsPluginWeb.prototype.getPending = function () {
        return Promise.resolve({
            notifications: this.pending.map(function (localNotification) {
                return {
                    id: '' + localNotification.id
                };
            })
        });
    };
    LocalNotificationsPluginWeb.prototype.registerActionTypes = function (_options) {
        throw new Error('Method not implemented.');
    };
    LocalNotificationsPluginWeb.prototype.cancel = function (pending) {
        console.log('Cancel these', pending);
        this.pending = this.pending.filter(function (localNotification) { return !pending.notifications.find(function (ln) { return ln.id === '' + localNotification.id; }); });
        return Promise.resolve();
    };
    LocalNotificationsPluginWeb.prototype.areEnabled = function () {
        return Promise.resolve({
            value: Notification.permission === 'granted'
        });
    };
    LocalNotificationsPluginWeb.prototype.requestPermission = function () {
        return new Promise(function (resolve) {
            Notification.requestPermission(function (result) {
                var granted = true;
                if (result === 'denied' || result === 'default') {
                    granted = false;
                }
                resolve({ granted: granted });
            });
        });
    };
    LocalNotificationsPluginWeb.prototype.requestPermissions = function () {
        return new Promise(function (resolve, reject) {
            Notification.requestPermission(function (result) {
                if (result === 'denied' || result === 'default') {
                    reject(result);
                    return;
                }
                resolve({
                    results: [result]
                });
            });
        });
    };
    return LocalNotificationsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var LocalNotifications = new LocalNotificationsPluginWeb();

//# sourceMappingURL=local-notifications.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/modals.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/modals.js ***!
  \*************************************************************/
/*! exports provided: ModalsPluginWeb, Modals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return ModalsPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return Modals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var ModalsPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ModalsPluginWeb, _super);
    function ModalsPluginWeb() {
        return _super.call(this, {
            name: 'Modals',
            platforms: ['web']
        }) || this;
    }
    ModalsPluginWeb.prototype.alert = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                window.alert(options.message);
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    ModalsPluginWeb.prototype.prompt = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var val;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                val = window.prompt(options.message, options.inputText || '');
                return [2 /*return*/, Promise.resolve({
                        value: val,
                        cancelled: val === null
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.confirm = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var val;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                val = window.confirm(options.message);
                return [2 /*return*/, Promise.resolve({
                        value: val
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.showActions = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, _reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var actionSheet;
                        var _this = this;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            actionSheet = document.querySelector('pwa-action-sheet');
                            if (!actionSheet) {
                                actionSheet = document.createElement('pwa-action-sheet');
                                document.body.appendChild(actionSheet);
                            }
                            actionSheet.header = options.title;
                            actionSheet.cancelable = false;
                            actionSheet.options = options.options;
                            actionSheet.addEventListener('onSelection', function (e) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var selection;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    selection = e.detail;
                                    resolve({
                                        index: selection
                                    });
                                    return [2 /*return*/];
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    return ModalsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Modals = new ModalsPluginWeb();

//# sourceMappingURL=modals.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/motion.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/motion.js ***!
  \*************************************************************/
/*! exports provided: MotionPluginWeb, Motion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return MotionPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return Motion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var MotionPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MotionPluginWeb, _super);
    function MotionPluginWeb() {
        var _this = _super.call(this, {
            name: 'Motion'
        }) || this;
        _this.registerWindowListener('devicemotion', 'accel');
        _this.registerWindowListener('deviceorientation', 'orientation');
        return _this;
    }
    return MotionPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Motion = new MotionPluginWeb();

//# sourceMappingURL=motion.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/network.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/network.js ***!
  \**************************************************************/
/*! exports provided: NetworkPluginWeb, Network */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function() { return NetworkPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return Network; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var NetworkPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NetworkPluginWeb, _super);
    function NetworkPluginWeb() {
        var _this = _super.call(this, {
            name: 'Network',
            platforms: ['web']
        }) || this;
        _this.listenerFunction = null;
        return _this;
    }
    NetworkPluginWeb.prototype.getStatus = function () {
        return new Promise(function (resolve, reject) {
            if (!window.navigator) {
                reject('Network info not available');
                return;
            }
            var connected = window.navigator.onLine;
            var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
            var connectionType = connection ? (connection.type || connection.effectiveType) : 'wifi';
            resolve({
                connected: connected,
                connectionType: connected ? connectionType : 'none'
            });
        });
    };
    NetworkPluginWeb.prototype.addListener = function (eventName, listenerFunc) {
        var thisRef = this;
        var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
        var connectionType = connection ? (connection.type || connection.effectiveType) : 'wifi';
        var onlineBindFunc = listenerFunc.bind(thisRef, { connected: true, connectionType: connectionType });
        var offlineBindFunc = listenerFunc.bind(thisRef, { connected: false, connectionType: 'none' });
        if (eventName.localeCompare('networkStatusChange') === 0) {
            window.addEventListener('online', onlineBindFunc);
            window.addEventListener('offline', offlineBindFunc);
            return {
                remove: function () {
                    window.removeEventListener('online', onlineBindFunc);
                    window.removeEventListener('offline', offlineBindFunc);
                }
            };
        }
    };
    return NetworkPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Network = new NetworkPluginWeb();

//# sourceMappingURL=network.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/permissions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/permissions.js ***!
  \******************************************************************/
/*! exports provided: PermissionsPluginWeb, Permissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function() { return PermissionsPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permissions", function() { return Permissions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");



var PermissionsPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PermissionsPluginWeb, _super);
    function PermissionsPluginWeb() {
        return _super.call(this, {
            name: 'Permissions'
        }) || this;
    }
    PermissionsPluginWeb.prototype.query = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var navigator, name, ret;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigator = window.navigator;
                        if (!navigator.permissions) {
                            return [2 /*return*/, Promise.reject('This browser does not support the Permissions API')];
                        }
                        name = options.name === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["PermissionType"].Photos ? 'camera' : options.name;
                        return [4 /*yield*/, navigator.permissions.query({ name: name })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, {
                                state: ret.state
                            }];
                }
            });
        });
    };
    return PermissionsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Permissions = new PermissionsPluginWeb();

//# sourceMappingURL=permissions.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/share.js":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/share.js ***!
  \************************************************************/
/*! exports provided: SharePluginWeb, Share */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return SharePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return Share; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var SharePluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SharePluginWeb, _super);
    function SharePluginWeb() {
        return _super.call(this, {
            name: 'Share',
            platforms: ['web']
        }) || this;
    }
    SharePluginWeb.prototype.share = function (options) {
        if (!navigator.share) {
            return Promise.reject('Web Share API not available');
        }
        return navigator.share({
            title: options.title,
            text: options.text,
            url: options.url
        });
    };
    return SharePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Share = new SharePluginWeb();

//# sourceMappingURL=share.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js":
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/splash-screen.js ***!
  \********************************************************************/
/*! exports provided: SplashScreenPluginWeb, SplashScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function() { return SplashScreenPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreen", function() { return SplashScreen; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var SplashScreenPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SplashScreenPluginWeb, _super);
    function SplashScreenPluginWeb() {
        return _super.call(this, {
            name: 'SplashScreen',
            platforms: ['web']
        }) || this;
    }
    SplashScreenPluginWeb.prototype.show = function (_options, _callback) {
        return Promise.resolve();
    };
    SplashScreenPluginWeb.prototype.hide = function (_options, _callback) {
        return Promise.resolve();
    };
    return SplashScreenPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var SplashScreen = new SplashScreenPluginWeb();

//# sourceMappingURL=splash-screen.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/storage.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/storage.js ***!
  \**************************************************************/
/*! exports provided: StoragePluginWeb, Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return StoragePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var StoragePluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StoragePluginWeb, _super);
    function StoragePluginWeb() {
        var _this = _super.call(this, {
            name: 'Storage',
            platforms: ['web']
        }) || this;
        _this.KEY_PREFIX = '_cap_';
        return _this;
    }
    StoragePluginWeb.prototype.get = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                value: window.localStorage.getItem(_this.makeKey(options.key))
            });
        });
    };
    StoragePluginWeb.prototype.set = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.setItem(_this.makeKey(options.key), options.value);
            resolve();
        });
    };
    StoragePluginWeb.prototype.remove = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.removeItem(_this.makeKey(options.key));
            resolve();
        });
    };
    StoragePluginWeb.prototype.keys = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                keys: Object.keys(localStorage).filter(function (k) { return _this.isKey(k); }).map(function (k) { return _this.getKey(k); })
            });
        });
    };
    StoragePluginWeb.prototype.clear = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            Object.keys(localStorage)
                .filter(function (k) { return _this.isKey(k); })
                .forEach(function (k) { return window.localStorage.removeItem(k); });
            resolve();
        });
    };
    StoragePluginWeb.prototype.makeKey = function (key) {
        return this.KEY_PREFIX + key;
    };
    StoragePluginWeb.prototype.isKey = function (key) {
        return key.indexOf(this.KEY_PREFIX) === 0;
    };
    StoragePluginWeb.prototype.getKey = function (key) {
        return key.substr(this.KEY_PREFIX.length);
    };
    return StoragePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Storage = new StoragePluginWeb();

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/toast.js":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/toast.js ***!
  \************************************************************/
/*! exports provided: ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return ToastPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var ToastPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToastPluginWeb, _super);
    function ToastPluginWeb() {
        return _super.call(this, {
            name: 'Toast',
            platforms: ['web']
        }) || this;
    }
    ToastPluginWeb.prototype.show = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var duration, toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                duration = 2000;
                if (options.duration) {
                    duration = options.duration === 'long' ? 3500 : 2000;
                }
                toast = document.createElement('pwa-toast');
                toast.duration = duration;
                toast.message = options.text;
                document.body.appendChild(toast);
                return [2 /*return*/];
            });
        });
    };
    return ToastPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Toast = new ToastPluginWeb();

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ "./src/app/main/announcement/announcement.page.html":
/*!**********************************************************!*\
  !*** ./src/app/main/announcement/announcement.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n <div class=\"content-app-desktop\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/main/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Đăng ký chứng từ</ion-title>\n    <ion-buttons slot=\"end\" style=\"display: none;\">\n      <ion-button color=\"dark\" href=\"app/main/announcement\">\n      </ion-button>        \n    </ion-buttons>\n  </ion-toolbar>\n</div>\n</ion-header>\n\n<ion-content padding>\n <div class=\"content-app-desktop\">\n  <ng-container *ngIf=\"checkList && checkList.length > 0; else empty_checklist\">\n    <div class=\"box-fixed\">\n    <div style=\"float: left; width: 50%;\">\n      <input type=\"checkbox\" [(ngModel)]=\"masterSelected\" name=\"list_name\" value=\"m1\" (change)=\"checkUncheckAll()\"/> <span class=\"select-all-label\">Chọn tất cả</span>\n    </div>\n    <div style=\"float: left; width: 50%; padding-right: 40px; text-align: right;\">\n      <ng-container *ngIf=\"checkedList && checkedList.length > 0; else disabled_btn\">\n        <button (click)=\"confirmDeleteAll()\" class=\"btn-delete-all\">Xóa</button>\n      </ng-container>\n      <ng-template #disabled_btn>\n        <button class=\"btn-delete-all\" disabled>Xóa</button>\n      </ng-template>\n    </div>\n  </div>\n  </ng-container>\n  <ng-template #empty_checklist>\n    <p>Không có thông báo mới</p>\n  </ng-template>\n    <ion-list>\n        <ion-card class=\"ion-card-cus\" *ngFor=\"let item of checkList\">\n          <div [className]=\"item.hasRead ? 'has-read ' : 'has-not-read'\">\n            <ion-card-content style=\"padding:0 10px\">\n              <ion-row>\n                <ion-col>\n                  <div class=\"top-div\">\n                    <div class=\"box-check-item\">\n                      <input type=\"checkbox\" [(ngModel)]=\"item.isSelected\" name=\"list_name\" value=\"{{item.id}}\" (change)=\"isAllSelected()\"/>\n                    </div>\n                    <div class=\"box-contain-content\" (click)=\"viewDetail(item.entityId, item.id, item.hasRead)\">\n                      <div class=\"thumb-img fl-left\">\n                        <img *ngIf=\"item.image == '/uploads/defaultAvatar.png'\" src=\"{{globalUrlAPI + '/' + item.image}}\"\n                          alt=\"\">\n                        <img *ngIf=\"item.image != '/uploads/defaultAvatar.png'\" src=\"{{item.image}}\" alt=\"\">\n                      </div>\n                      <div class=\"box-title-announcement fl-left\">\n                        <p class=\"title-announcement\"> {{item.title}}</p>\n                      </div>\n                    </div>\n                  </div>\n                  <div style=\"overflow: auto; width: 100%;\">\n                    <div style=\"width: 60%;\" class=\"fl-left\">\n                      <button class=\"btn btn-xoa\" (click)=\"ConfirmDelete(item.id)\">Xóa</button>\n                      <button class=\"btn btn-xem\" *ngIf=\"!item.statusType\" (click)=\"viewQuanLy(item.entityId, item.id, item.hasRead);\" >Xem</button>\n                    </div>\n                    <div class=\"time-ago fl-left\">\n                      <p style=\"margin: 0px; font-size: 12px; color: #686666\">{{item.dateCreated.fromNow()}}</p>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </div>\n      </ion-card>\n    </ion-list>\n\n  <ion-infinite-scroll *ngIf=\"checkList && checkList.length > 0\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Đang tải thêm dữ liệu...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/main/announcement/announcement.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/main/announcement/announcement.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-div {\n  position: relative;\n  padding-top: 13px; }\n  .top-div .box-check-item {\n    display: inline-block;\n    position: absolute;\n    top: 4px;\n    left: 0px; }\n  .top-div .box-contain-content {\n    width: calc(100% - 5px);\n    padding: 10px 0px 0px;\n    overflow: auto; }\n  .top-div .box-contain-content .thumb-img {\n      width: 45px;\n      border-radius: 2px;\n      overflow: hidden; }\n  .top-div .box-contain-content .thumb-img img {\n        width: 45px;\n        height: 42px; }\n  .top-div .box-contain-content .box-title-announcement {\n      width: calc(100% - 45px);\n      padding-left: 10px; }\n  .top-div .box-contain-content .box-title-announcement .title-announcement {\n        font-size: 14px; }\n  .fl-left {\n  float: left; }\n  .time-ago {\n  text-align: right;\n  padding: 3px;\n  width: 40%; }\n  .select-all-label {\n  display: inline-block;\n  padding-left: 8px;\n  font-size: 13px;\n  line-height: 24px; }\n  .btn-delete-all {\n  text-align: center;\n  padding: 5px 13px;\n  color: #fff;\n  background-color: #0075ff;\n  border-radius: 3px; }\n  .btn-delete-all:disabled {\n  opacity: 0.6; }\n  .btn {\n  font-style: italic;\n  text-decoration: underline; }\n  .btn-xoa {\n  margin-left: 55px; }\n  .btn-xem {\n  margin-left: 13px; }\n  .ion-card-cus {\n  margin: 10px 0px;\n  width: 100%; }\n  .has-read {\n  background-color: #f7f7f7;\n  border: 1px solid #f1efef; }\n  .has-read .btn {\n    background: #f7f7f7;\n    color: #65676b; }\n  .has-read p, .has-read span {\n    color: #65676b; }\n  .has-not-read {\n  background-color: #f5f8fd;\n  border: 1px solid lightgray; }\n  .has-not-read .btn {\n    background: #f5f8fd;\n    color: #0075ff; }\n  .has-not-read p, .has-not-read span {\n    color: #000; }\n  .box-fixed {\n  padding-left: 16px;\n  overflow: auto;\n  display: block;\n  width: 100%;\n  height: auto;\n  z-index: 100000;\n  padding-top: 10px;\n  padding-bottom: 5px;\n  top: 0px;\n  background: #fff; }\n  @media screen and (min-width: 768px) {\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; }\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; }\n  .box-fixed {\n    width: 375px; } }\n"

/***/ }),

/***/ "./src/app/main/announcement/announcement.page.ts":
/*!********************************************************!*\
  !*** ./src/app/main/announcement/announcement.page.ts ***!
  \********************************************************/
/*! exports provided: AUTH_KEY, AnnouncementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementPage", function() { return AnnouncementPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/timeout */ "./node_modules/rxjs-compat/_esm5/add/operator/timeout.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _service_signalR_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/signalR.service */ "./src/service/signalR.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};





//import { AnnouncementServiceProxy, TokenAuthServiceProxy } from '../../../shared/service-proxies/service-proxies';






// import { Subscription } from 'rxjs';

var App = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].App;
var AUTH_KEY = 'AUTH';
var AnnouncementPage = /** @class */ (function () {
    function AnnouncementPage(_router, _alertController, _loadingCtrl, _localStorageService, _menu, _signalRSevice, _announcementServiceProxy, workTimeServiceProxy) {
        this._router = _router;
        this._alertController = _alertController;
        this._loadingCtrl = _loadingCtrl;
        this._localStorageService = _localStorageService;
        this._menu = _menu;
        this._signalRSevice = _signalRSevice;
        this._announcementServiceProxy = _announcementServiceProxy;
        this.workTimeServiceProxy = workTimeServiceProxy;
        this.moment = moment__WEBPACK_IMPORTED_MODULE_3__();
        this.isLoading = false;
        this.momentTmp = moment__WEBPACK_IMPORTED_MODULE_3__();
        this.checkList = [];
        this.globalUrlAPI = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_2__["AppConsts"].remoteServiceBaseUrl;
        this.numtimeLeft = 5;
        this.masterSelected = false;
        this.checkedList = [];
        this.pageSize = 10;
        this.page = 1;
        // this.getCheckedItemList();
    }
    AnnouncementPage.prototype.ngOnInit = function () {
        this.creatorUserId = this._localStorageService.getItem(AUTH_KEY).userId;
    };
    AnnouncementPage.prototype.ionViewWillEnter = function () {
        this.loadingDefault();
        this.getAnnounmentList();
    };
    AnnouncementPage.prototype.getAnnounmentList = function () {
        var _this = this;
        this.page = 1;
        this._announcementServiceProxy.getAllUnReadPagination(this.creatorUserId, this.page, this.pageSize).subscribe({
            next: function (res) {
                _this.checkList = res;
                for (var _i = 0, _a = _this.checkList.map(function (value, index) { return ({ index: index, value: value }); }); _i < _a.length; _i++) {
                    var _b = _a[_i], index = _b.index, value = _b.value;
                    _this.checkList[index].isSelected = false;
                    _this.checkList[index].userReadId = _this.creatorUserId;
                }
                _this._announcementServiceProxy.markAsReadAll(res).subscribe({
                    next: function (res) {
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
                _this.dismissLoading();
            },
            error: function (err) {
                _this.dismissLoading();
                console.log(err);
            }
        });
    };
    AnnouncementPage.prototype.viewQuanLy = function (entityId, id, hasRead) {
        // if(!hasRead){
        //   let userReadId = this.creatorUserId;
        //   this._announcementServiceProxy.markAsRead(id, userReadId).subscribe({
        //     next: (res) => {}
        //   });
        // }
        if (entityId) {
            this._router.navigate(['app/main/quanly-congtac'], {
                queryParams: { id: entityId }
            });
        }
    };
    AnnouncementPage.prototype.loadingDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this._loadingCtrl.create({
                            // message: 'Đang xử lý........',
                            // duration: 3000
                            }).then(function (a) {
                                a.present().then(function () {
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AnnouncementPage.prototype.dismissLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this._loadingCtrl.dismiss().then(function () { })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AnnouncementPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            _this.page += 1;
            _this._announcementServiceProxy.getAllUnReadPagination(_this.creatorUserId, _this.page, _this.pageSize).subscribe({
                next: function (res) {
                    var list = res;
                    for (var _i = 0, _a = list.map(function (value, index) { return ({ index: index, value: value }); }); _i < _a.length; _i++) {
                        var _b = _a[_i], index = _b.index, value = _b.value;
                        list[index].isSelected = false;
                        list[index].userReadId = _this.creatorUserId;
                        _this.checkList.push(list[index]);
                    }
                    _this._announcementServiceProxy.markAsReadAll(res).subscribe({
                        next: function (res) {
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });
                },
                error: function (err) {
                    console.log(err);
                }
            });
            if (_this.checkList.length == 100) {
                event.target.disabled = true;
            }
        }, 500);
    };
    AnnouncementPage.prototype.checkUncheckAll = function () {
        for (var i = 0; i < this.checkList.length; i++) {
            this.checkList[i].isSelected = this.masterSelected;
        }
        this.getCheckedItemList();
    };
    AnnouncementPage.prototype.isAllSelected = function () {
        this.masterSelected = this.checkList.every(function (item) {
            return item.isSelected == true;
        });
        this.getCheckedItemList();
    };
    AnnouncementPage.prototype.getCheckedItemList = function () {
        this.checkedList = [];
        for (var i = 0; i < this.checkList.length; i++) {
            if (this.checkList[i].isSelected) {
                this.checkedList.push(this.checkList[i]);
            }
        }
    };
    AnnouncementPage.prototype.ConfirmDelete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Thông báo',
                            message: 'Bạn có chắc muốn xóa thông báo này không?',
                            buttons: [{
                                    text: 'Đồng ý', handler: function () {
                                        _this.markAsDelete(id);
                                    }
                                }, { text: 'Hủy', role: 'cancel' }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AnnouncementPage.prototype.markAsDelete = function (id) {
        var _this = this;
        this.loadingDefault();
        var userReadId = this.creatorUserId;
        this._announcementServiceProxy.markAsDelete(id, userReadId).subscribe({
            next: function (res) {
                _this.getAnnounmentList();
            }, error: function (err) {
                _this.dismissLoading();
                console.log(err);
            }
        });
    };
    AnnouncementPage.prototype.confirmDeleteAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Thông báo',
                            message: 'Bạn có chắc muốn xóa không?',
                            buttons: [{
                                    text: 'Đồng ý', handler: function () {
                                        _this.deleteAll();
                                    }
                                }, { text: 'Hủy', role: 'cancel' }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AnnouncementPage.prototype.deleteAll = function () {
        var _this = this;
        this.loadingDefault();
        var paramsRequest;
        paramsRequest = [];
        for (var _i = 0, _a = this.checkedList.map(function (value, index) { return ({ index: index, value: value }); }); _i < _a.length; _i++) {
            var _b = _a[_i], index = _b.index, value = _b.value;
            paramsRequest.push({ 'userReadId': !isNaN(value.userReadId) ? parseInt(value.userReadId, 10) : 0, 'id': value.id });
        }
        // paramsRequest = JSON.stringify(paramsRequest);
        this._announcementServiceProxy.markAsDeleteAll(paramsRequest).subscribe({
            next: function (res) {
                _this.getAnnounmentList();
                _this.masterSelected = false;
            }, error: function (err) {
                _this.dismissLoading();
                console.log(err);
            }
        });
    };
    AnnouncementPage.prototype.viewDetail = function (entityId, id, hasRead) {
        // if(!hasRead){
        //   let userReadId = this.creatorUserId;
        //   this._announcementServiceProxy.markAsRead(id, userReadId).subscribe({
        //     next: (res) => {}
        //   });
        // }
        if (entityId != null) {
            this._router.navigate(['app/main/chitiet-dangky'], {
                queryParams: { id: entityId }
            });
        }
        else {
            var index = void 0;
            index = this.checkList.findIndex(function (x) { return x.id === id; });
            console.log(index);
            this.checkList[index].hasRead = true;
            console.log(this.checkList);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["InfiniteScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["InfiniteScroll"])
    ], AnnouncementPage.prototype, "infiniteScroll", void 0);
    AnnouncementPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'announcement',
            template: __webpack_require__(/*! ./announcement.page.html */ "./src/app/main/announcement/announcement.page.html"),
            styles: [__webpack_require__(/*! ./announcement.page.scss */ "./src/app/main/announcement/announcement.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _service_signalR_service__WEBPACK_IMPORTED_MODULE_9__["SignalRService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["AnnouncementServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_5__["WorkTimeServiceProxy"]])
    ], AnnouncementPage);
    return AnnouncementPage;
}());



/***/ }),

/***/ "./src/app/main/cong-tac/ChiTietDangKy/ChiTietDangKy.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/cong-tac/ChiTietDangKy/ChiTietDangKy.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"app/main/home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Thông tin đăng ký</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button color=\"dark\" href=\"app/main/announcement\">\n          <span class=\"fa fa-bell\" style=\"font-size: 25px; color: #606060;\"></span>\n          <span *ngIf=\"totalUnred > 0 && greaterThan(totalUnred,9)\" class=\"totalUnred\">{{totalUnred}}</span> \n          <span *ngIf=\"totalUnred >= 10 && greaterThan(totalUnred,99)\" class=\"totalUnred greater10\">{{totalUnred}}</span> \n          <span *ngIf=\"totalUnred > 99\" class=\"totalUnred greater99\">99+</span> \n        </ion-button>        \n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  \n<ion-content padding>\n        <div class=\"group-from\" *ngIf=\"hrWorkTimeDto\">\n          <ion-list>\n            <ion-item>\n              <p><span class=\"font-bold\">Họ và tên: </span>{{hrWorkTimeDto.hoVaTen}}</p>\n            </ion-item>\n          <ion-item>\n            <p><span class=\"font-bold\">Loại chứng từ: </span>\n              <span *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.documentType === 'NP'\">Đăng ký Nghỉ phép</span>\n              <span *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.documentType === 'CT'\">Đăng ký Công tác</span>\n              <span *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.documentType === 'TC'\">Đăng ký Tăng ca</span>\n              <span *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.documentType === 'QCC'\">Đăng ký Quên chấm công</span>\n            </p>\n          </ion-item>\n          <ion-item>\n            <p><span class=\"font-bold\">Ngày tạo đơn: </span> \n              <span>{{hrWorkTimeDto.creationTime.clone().format('HH:mm DD/MM/YYYY')}}</span>\n            </p>\n           </ion-item>\n           <ion-item>\n            <p class=\"text-pre-line\"><span class=\"font-bold\">Lý do: </span>{{hrWorkTimeDto.reasons}}</p>\n          </ion-item>\n          <ion-item>\n            <p><span class=\"font-bold\">Trạng thái: </span>\n            <span *ngIf=\"hrWorkTimeDto.approverId == null; else other_status\">Đang chờ duyệt</span>\n            <ng-template #other_status>\n                <ng-container *ngIf=\"hrWorkTimeDto.status === 0; else finish_approve\">\n                    Đang trong quá trình duyệt\n                </ng-container>\n                <ng-template #finish_approve>\n                    <ng-container *ngIf=\"hrWorkTimeDto.status === 1; else cancel_approve\">\n                        Đã được duyệt\n                    </ng-container>\n                    <ng-template #cancel_approve>\n                        Đã bị từ chối\n                    </ng-template>\n                </ng-template>\n            </ng-template>\n            </p>\n          </ion-item>\n          <ng-container *ngIf=\"hrWorkTimeDto.documentType == 'NP'\">\n            <ion-item>\n              <p><span class=\"font-bold\">Loại nghỉ phép: </span>\n              <span *ngIf=\"hrWorkTimeDto.loaiNghiPhep == 'NGHIPHEPNAM'; else loaiNghiPhep_kethon\">Nghỉ phép năm</span>\n              <ng-template #loaiNghiPhep_kethon>\n                  <ng-container *ngIf=\"hrWorkTimeDto.loaiNghiPhep == 'KETHON'; else loaiNghiPhep_tangche\">\n                      Kết hôn\n                  </ng-container>\n                  <ng-template #loaiNghiPhep_tangche>\n                    <ng-container *ngIf=\"hrWorkTimeDto.loaiNghiPhep == 'TANGCHE'; else loaiNghiPhep_khongluong\">\n                      Tang chế\n                    </ng-container>\n                      <ng-template #loaiNghiPhep_khongluong>\n                        <ng-container *ngIf=\"hrWorkTimeDto.loaiNghiPhep == 'KHONGLUONG'; else loaiNghiPhep_thaisan\">\n                          Nghỉ không lương\n                        </ng-container>\n                        <ng-template #loaiNghiPhep_thaisan>\n                          <ng-container *ngIf=\"hrWorkTimeDto.loaiNghiPhep == 'THAISAN'; else loaiNghiPhep_omdau\">\n                            Thai sản\n                          </ng-container>\n                          <ng-template #loaiNghiPhep_omdau>\n                            Ốm đau, bệnh tật\n                          </ng-template>\n                        </ng-template>\n                      </ng-template>\n                  </ng-template>\n              </ng-template>\n              </p>\n            </ion-item>\n          </ng-container>\n        <ng-container *ngIf=\"hrWorkTimeDto.status === 2\">\n          <ion-item>\n            <p class=\"text-pre-line\"> <span class=\"font-bold\">Lý do bị từ chối: </span> {{hrWorkTimeDto.notes}}</p>\n          </ion-item>\n        </ng-container>\n        \n        <ion-item>\n          <p><span class=\"font-bold\">Thời gian bắt đầu: </span> \n            <span *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.timeFrom && hrWorkTimeDto.timeFrom.clone().format('HH:mm DD/MM/YYYY').includes('00:00'); else other_timeFrom\">{{hrWorkTimeDto.timeFrom.clone().format('HH:mm DD/MM/YYYY').replace('00:00','')}}</span>\n            <ng-template #other_timeFrom><span>{{hrWorkTimeDto.timeFrom.clone().format('HH:mm DD/MM/YYYY')}}</span></ng-template>\n          </p>\n        </ion-item>\n         <ion-item>\n          <p><span class=\"font-bold\">Thời gian kết thúc: </span> \n            <span *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.timeTo && hrWorkTimeDto.timeTo.clone().format('HH:mm DD/MM/YYYY').includes('00:00'); else other_timeTo\">{{hrWorkTimeDto.timeTo.clone().format('HH:mm DD/MM/YYYY').replace('00:00','')}}</span>\n            <ng-template #other_timeTo><span>{{hrWorkTimeDto.timeTo.clone().format('HH:mm DD/MM/YYYY')}}</span></ng-template>\n          </p>\n         </ion-item>\n          <ng-container *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.attachment && hrWorkTimeDto.attachment.length > 0\">\n            <div class=\"thumb-img\">\n              <p style=\"font-size: 17px;\">Hình ảnh chứng minh</p>\n             <p>\n              <img src=\"{{globalUrlAPI + hrWorkTimeDto.attachment}}\" tappable (click)=\"openPreview(hrWorkTimeDto.attachment)\">\n             </p>\n            </div>\n             </ng-container>        \n          </ion-list>\n          </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/main/cong-tac/ChiTietDangKy/ChiTietDangKy.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/main/cong-tac/ChiTietDangKy/ChiTietDangKy.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".totalUnred {\n  display: inline-block;\n  position: relative;\n  background: #5188e8;\n  border-radius: 50%;\n  right: 12px;\n  font-size: 9px;\n  top: 3px;\n  color: #fff;\n  padding: 3px 6px; }\n\n.totalUnred.greater99 {\n  padding: 5px 3px; }\n\n.totalUnred.greater10 {\n  padding: 4px; }\n\n.thumb-img {\n  padding-left: 17px; }\n\np {\n  margin: 0px !important; }\n\n@media screen and (min-width: 768px) {\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; }\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; } }\n\np.text-pre-line {\n  white-space: pre-line; }\n"

/***/ }),

/***/ "./src/app/main/cong-tac/ChiTietDangKy/ChiTietDangKy.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/cong-tac/ChiTietDangKy/ChiTietDangKy.page.ts ***!
  \*******************************************************************/
/*! exports provided: AUTH_KEY, ChiTietDangKy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietDangKy", function() { return ChiTietDangKy; });
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_signalR_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/signalR.service */ "./src/service/signalR.service.ts");
/* harmony import */ var _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _shared_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/image-modal/image-modal.page */ "./src/shared/image-modal/image-modal.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};










var AUTH_KEY = 'AUTH';
var ChiTietDangKy = /** @class */ (function () {
    function ChiTietDangKy(_loadingCtrl, _alertController, _router, _signalRSevice, _announcementServiceProxy, _platform, http, workTimeServiceProxy, acRouter, _localStorageService, _modalContoller) {
        var _this = this;
        this._loadingCtrl = _loadingCtrl;
        this._alertController = _alertController;
        this._router = _router;
        this._signalRSevice = _signalRSevice;
        this._announcementServiceProxy = _announcementServiceProxy;
        this._platform = _platform;
        this.http = http;
        this.workTimeServiceProxy = workTimeServiceProxy;
        this.acRouter = acRouter;
        this._localStorageService = _localStorageService;
        this._modalContoller = _modalContoller;
        this.isLoading = false;
        this.globalUrlAPI = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_7__["AppConsts"].remoteServiceBaseUrl + '/attachments/';
        this.sliderOpts = {
            zoom: {
                maxRatio: 2
            }
        };
        this.id = this.acRouter.snapshot.queryParams.id;
        this.creatorUserId = this._localStorageService.getItem(AUTH_KEY).userId;
        this._signalRSevice.retrieveMappedObject().subscribe(function (message) {
            _this._announcementServiceProxy.getAllUnRead(_this.creatorUserId).subscribe({
                next: function (res) {
                    if (res) {
                        _this.totalUnred = res.length;
                    }
                }
            });
        });
    }
    ChiTietDangKy.prototype.ngOnInit = function () {
    };
    ChiTietDangKy.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDefault();
        this._announcementServiceProxy.getAllUnRead(this.creatorUserId).subscribe({
            next: function (res) {
                if (res) {
                    _this.totalUnred = res.length;
                }
            },
            error: function (err) {
                _this.showAlertController('Lỗi kết nối mạng, vui lòng thử lại.');
                return;
            }
        });
        this.getDetail();
    };
    ChiTietDangKy.prototype.getDetail = function () {
        var _this = this;
        this.workTimeServiceProxy.getWorkTimeDetail(this.id).subscribe({
            next: function (res) {
                console.log(res);
                _this.hrWorkTimeDto = res;
                _this.dismissLoading();
            },
            error: function (err) {
                console.log(err);
            }
        });
    };
    ChiTietDangKy.prototype.loadingDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this._loadingCtrl.create({}).then(function (a) {
                                a.present().then(function () {
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChiTietDangKy.prototype.dismissLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this._loadingCtrl.dismiss().then(function () { })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChiTietDangKy.prototype.greaterThan = function (sub, num) {
        return true ? sub <= num : undefined;
    };
    ChiTietDangKy.prototype.showAlertController = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alertController, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dismissLoading();
                        alertController = this._alertController;
                        return [4 /*yield*/, alertController.create({
                                header: 'Thông báo',
                                message: message,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChiTietDangKy.prototype.openPreview = function (img) {
        this._modalContoller.create({
            component: _shared_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_8__["ImageModalPage"],
            componentProps: {
                img: img
            }
        }).then(function (modal) { return modal.present(); });
    };
    ChiTietDangKy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chitietdangky',
            template: __webpack_require__(/*! ./ChiTietDangKy.page.html */ "./src/app/main/cong-tac/ChiTietDangKy/ChiTietDangKy.page.html"),
            styles: [__webpack_require__(/*! ./ChiTietDangKy.page.scss */ "./src/app/main/cong-tac/ChiTietDangKy/ChiTietDangKy.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_signalR_service__WEBPACK_IMPORTED_MODULE_4__["SignalRService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["AnnouncementServiceProxy"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["WorkTimeServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ChiTietDangKy);
    return ChiTietDangKy;
}());



/***/ }),

/***/ "./src/app/main/cong-tac/CreateCongTac/CreateCongTac.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/cong-tac/CreateCongTac/CreateCongTac.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <div class=\"content-app-desktop\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button (click)=\"backToHome()\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Đăng ký chứng từ</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button color=\"dark\" href=\"app/main/announcement\">\n          <span class=\"fa fa-bell\" style=\"font-size: 25px; color: #606060;\"></span>\n          <span *ngIf=\"totalUnred > 0 && greaterThan(totalUnred,9)\" class=\"totalUnred\">{{totalUnred}}</span> \n          <span *ngIf=\"totalUnred >= 10 && greaterThan(totalUnred,99)\" class=\"totalUnred greater10\">{{totalUnred}}</span> \n          <span *ngIf=\"totalUnred > 99\" class=\"totalUnred greater99\">99+</span> \n        </ion-button>        \n      </ion-buttons>\n    </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"content-app-desktop\">\n    <ion-row>\n      <ion-col> \n      <div class=\"box-left\">\n        <button [className]=\"tabActive == 1 ? 'tab-active tab-btn' : 'tab-inactive tab-btn'\" (click)=\"chooseTab(1)\" >\n          Buổi sáng  \n        </button>\n      </div>\n      </ion-col>\n      <ion-col>\n       <div class=\"box-center\">\n        <button [className]=\"tabActive == 2 ? 'tab-active tab-btn' : 'tab-inactive tab-btn'\" (click)=\"chooseTab(2)\" >\n            Buổi chiều\n        </button>\n       </div>\n      </ion-col>\n      <ion-col>\n       <div class=\"box-center\">\n        <button [className]=\"tabActive == 3 ? 'tab-active tab-btn' : 'tab-inactive tab-btn'\" (click)=\"chooseTab(3)\" >\n          Trong ngày\n        </button>\n       </div>\n      </ion-col>\n      <ion-col>\n       <div class=\"box-right\">\n        <button [className]=\"tabActive == 4 ? 'tab-active tab-btn' : 'tab-inactive tab-btn'\"  (click)=\"chooseTab(4)\" >\n          Nhiều ngày\n        </button>\n       </div>\n      </ion-col>\n    </ion-row>\n     \n      <form #f=\"ngForm\" (ngSubmit)=\"onCreateWorkTime(f)\">\n        <div class=\"group-form\">\n              <ion-row>\n                <ion-col> \n                  <p class=\"label-lydo\">Chọn loại đăng ký: </p>\n                  <div class=\"type-filter\" *ngIf=\"tabActive == 4; else otherDocumentType\">\n                      <ion-select class=\"custom-options\" interface=\"popover\" [(ngModel)]=\"documentType\" name=\"documentType\">\n                        <ion-select-option value=\"NP\">Đăng ký nghỉ phép</ion-select-option>\n                        <ion-select-option value=\"CT\" class=\"brown-option\">Đăng ký công tác</ion-select-option>\n                      </ion-select>\n                  </div>\n                  <ng-template #otherDocumentType>\n                    <div class=\"type-filter\">\n                      <ion-select class=\"custom-options\" interface=\"popover\" [(ngModel)]=\"documentType\" name=\"documentType\">\n                        <ion-select-option value=\"NP\">Đăng ký nghỉ phép</ion-select-option>\n                        <ion-select-option value=\"CT\" class=\"brown-option\">Đăng ký công tác</ion-select-option>\n                        <ion-select-option value=\"TC\" class=\"brown-option\">Đăng ký tăng ca</ion-select-option>\n                        <ion-select-option value=\"QCC\" class=\"brown-option\">Quên chấm công</ion-select-option>\n                      </ion-select>\n                  </div>\n                  </ng-template>\n                </ion-col>\n              </ion-row>\n        </div>\n        <div class=\"group-form\" *ngIf=\"documentType == 'NP'\">\n            <ion-row>\n              <ion-col>\n                <p class=\"label-lydo\">Loại nghỉ phép</p>\n                <div class=\"type-filter\">\n                  <ion-select interface=\"popover\" name=\"loaiNghiPhep\" [(ngModel)]=\"loaiNghiPhep\">\n                    <ion-select-option value=\"NGHIPHEPNAM\">Nghỉ phép năm</ion-select-option>\n                    <ion-select-option value=\"KETHON\">Nghỉ kết hôn</ion-select-option>\n                    <ion-select-option value=\"TANGCHE\">Nghỉ tang chế</ion-select-option>\n                    <ion-select-option value=\"KHONGLUONG\">Nghỉ không lương</ion-select-option>\n                    <ion-select-option value=\"THAISAN\">Nghỉ thai sản</ion-select-option>\n                    <ion-select-option value=\"OMDAU\">Nghỉ ốm đau, tai nạn</ion-select-option>\n                </ion-select>\n                </div>\n              </ion-col>\n            </ion-row>\n        </div>\n        <div class=\"group-form\">\n            <ion-row>\n              <ion-col>\n                <p class=\"label-lydo\">Lý do: </p>\n            <ion-textarea maxlength=\"100\" type=\"text\" rows=\"3\" ngModel name=\"lydo\" [(ngModel)]=\"lydo\"\n              style=\"border: 1px solid lightgray;border-radius: 10px;padding: 0 8px;\" placeholder=\"Nhập lý do\" required>\n            </ion-textarea>\n              </ion-col>\n            </ion-row>\n          </div>\n          <div class=\"group-form\" *ngIf=\"documentType == 'QCC' || documentType == 'CT'\">\n            <ion-row>\n              <ion-col>\n                <p class=\"label-lydo\">Hình ảnh chứng minh</p>\n                <div *ngIf=\"images.length === 0\">\n                  <ion-button class=\"choose-img\" size=\"small\" fill=\"clear\" color=\"lightgray\" (click)=\"selectImage()\">\n                    <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n                    Chọn ảnh\n                  </ion-button>\n                </div>\n                <ion-list>\n                  <ion-item *ngFor=\"let img of images; index as pos\">\n                      <ion-thumbnail slot=\"start\">\n                        <ion-img [src]=\"img.path\"></ion-img>\n                      </ion-thumbnail>\n                      <ion-button slot=\"end\" fill=\"clear\" (click)=\"confirmDeleteImage(img, pos, true)\">\n                        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                      </ion-button>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n          </div>\n          <div class=\"group-form\">\n            <ion-list>\n              <ion-row *ngIf=\"tabActive == 1 || tabActive == 2\">\n                <ion-col> \n                  <ion-item style=\"--padding-start: 0px;--border-width:0px; border: 1px solid #d3d3d3; border-radius: 7px;\">\n                    <ion-label style=\"padding-left: 16px;\">Chọn ngày:</ion-label>\n                    <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"2020\" max=\"2099\" [(ngModel)]=\"chonNgay\" name=\"chonNgay\" required></ion-datetime>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"tabActive == 3\">\n                <ion-col> \n                  <ion-item style=\"--padding-start: 0px;--border-width:0px; border: 1px solid #d3d3d3; border-radius: 7px;\">\n                    <ion-label style=\"padding-left: 16px;\">Chọn ngày:</ion-label>\n                    <ion-datetime  displayFormat=\"DD/MM/YYYY\" min=\"2020\" max=\"2099\" [(ngModel)]=\"chonNgay\" name=\"chonNgay\" (ionChange)=\"changeToGetTime($event)\" required></ion-datetime>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item style=\"--padding-start: 0px;--border-width:0px; border: 1px solid #d3d3d3; border-radius: 7px;\">\n                    <ion-label style=\"padding-left: 16px;\">Giờ bắt đầu:</ion-label>\n                    <ion-datetime  displayFormat=\"HH:mm\" [(ngModel)]=\"valueFirstTime\" name=\"valueFirstTime\" required></ion-datetime>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item style=\"--padding-start: 0px;--border-width:0px; border: 1px solid #d3d3d3; border-radius: 7px;\">\n                    <ion-label style=\"padding-left: 16px;\">Giờ kết thúc:</ion-label>\n                    <ion-datetime displayFormat=\"HH:mm\" [(ngModel)]=\"valueLastTime\" name=\"valueLastTime\" required></ion-datetime>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"tabActive == 4\">\n                <ion-col> \n                  <ion-item style=\"--padding-start: 0px;--border-width:0px; border: 1px solid #d3d3d3; border-radius: 7px;\">\n                    <ion-label style=\"padding-left: 16px;\">Từ ngày:</ion-label>\n                    <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"2020\" max=\"2099\" [(ngModel)]=\"tuNgay\" name=\"tuNgay\"  required></ion-datetime>\n                  </ion-item>\n                </ion-col>\n                <ion-col> <!-- label - position=\"stacked\"-->\n                  <ion-item style=\"--padding-start: 0px;--border-width:0px; border: 1px solid #d3d3d3; border-radius: 7px;\">\n                    <ion-label style=\"padding-left: 16px;\">Đến ngày:</ion-label>\n                    <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"2020\" max=\"2099\" [(ngModel)]=\"denNgay\" name=\"denNgay\"  required></ion-datetime>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <p class=\"label-lydo\">Thông báo đến: </p>\n                  <div *ngIf=\"infoTruongNhom && infoTruongNhom != 'null' && infoTruongNhom != 'undefined'\">\n                    <ion-row *ngIf=\"infoTruongNhom.name && infoTruongNhom.name.length > 0\">\n                      <ion-col>\n                        <p class=\"thong-bao-den\"> <span>{{infoTruongNhom.name}}</span></p>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                  <div *ngIf=\"infoTruongPhong && infoTruongPhong != 'null' && infoTruongPhong != 'undefined'\">\n                    <ion-row *ngIf=\"infoTruongPhong.name && infoTruongPhong.name.length > 0\">\n                      <ion-col>\n                        <p class=\"thong-bao-den\">\n                          {{infoTruongPhong.name}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                 <div *ngIf=\"infoGiamDocKhoi && infoGiamDocKhoi != 'null' && infoGiamDocKhoi != 'undefined'\">\n                  <ion-row *ngIf=\"infoGiamDocKhoi.name && infoGiamDocKhoi.name.length > 0\">\n                    <ion-col>\n                      <p class=\"thong-bao-den\" >\n                        {{infoGiamDocKhoi.name}}</p>\n                    </ion-col>\n                  </ion-row>\n                 </div>\n                 <div *ngIf=\"infoPhongTCNS && infoPhongTCNS != 'null' && infoPhongTCNS != 'undefined'\">\n                  <ion-row *ngIf=\"infoPhongTCNS.name && infoPhongTCNS.name.length > 0\">\n                    <ion-col>\n                      <p class=\"thong-bao-den\" >\n                        {{infoPhongTCNS.name}}</p>\n                    </ion-col>\n                  </ion-row>\n                 </div>\n                 <div *ngIf=\"infoGiamDocDieuHanh && infoGiamDocDieuHanh != 'null' && infoGiamDocDieuHanh != 'undefined'\">\n                  <ion-row *ngIf=\"infoGiamDocDieuHanh.name && infoGiamDocDieuHanh.name.length > 0\">\n                    <ion-col>\n                      <p class=\"thong-bao-den\" >\n                        {{infoGiamDocDieuHanh.name}}</p>\n                    </ion-col>\n                  </ion-row>\n                 </div>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </div>\n        <ion-button shape=\"round\" color=\"primary\" fill=\"outline\" type=\"submit\" block [disabled]=\"!f.valid\">Gửi phiếu yêu cầu\n        </ion-button>\n      </form>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/main/cong-tac/CreateCongTac/CreateCongTac.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/main/cong-tac/CreateCongTac/CreateCongTac.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-datetime {\n  position: relative;\n  border-radius: 5px; }\n\n.caret-down-datetime {\n  position: absolute;\n  top: 8px;\n  right: 36px; }\n\n:host(.in-item) {\n  position: static;\n  max-width: 55%; }\n\n#autocomplete {\n  position: absolute;\n  z-index: 1000;\n  background: #fff;\n  width: calc(100% - 20px);\n  top: 40px;\n  left: 10px;\n  max-height: 175px;\n  overflow-y: auto;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n\n.hovaten {\n  position: relative; }\n\n.autocomplete_li {\n  list-style-type: none;\n  padding: 8px 20px;\n  border-bottom: 1px solid #eee; }\n\n.mr-10 {\n  display: inline-block;\n  margin-right: 10px; }\n\n.type-filter {\n  border: 1px solid #eee;\n  border-radius: 8px; }\n\n.box-datetime {\n  padding: 11px 6px 8px 8px; }\n\n.box-datetime::after {\n  font-family: fontAwesome;\n  content: \"\\f0dd\";\n  font-size: 15px;\n  display: inline-block;\n  position: absolute;\n  top: 18px;\n  color: #989797;\n  right: 17px; }\n\n.clearfix {\n  overflow: auto; }\n\n.info-check {\n  text-align: center;\n  width: 80%;\n  font-weight: bold;\n  color: #3880ff;\n  border: 1px dotted #3880ff;\n  padding: 2px;\n  font-style: italic;\n  border-radius: 4px; }\n\n.thong-bao-den {\n  margin: 0px;\n  font-size: 15px;\n  padding-left: 12px; }\n\n.checkIgnoreTN {\n  margin: 0px 5px 0px 0px;\n  position: absolute;\n  top: 0px; }\n\n.label-checkIgnoreTN {\n  position: absolute;\n  display: inline-block;\n  font-size: 10px;\n  margin: 0px;\n  bottom: 6px;\n  left: 35px; }\n\n.label-lydo {\n  font-size: 0.9em;\n  margin: 6px 5px 6px 0px; }\n\n.totalUnred {\n  display: inline-block;\n  position: relative;\n  background: #5188e8;\n  border-radius: 50%;\n  right: 12px;\n  font-size: 9px;\n  top: 3px;\n  color: #fff;\n  padding: 3px 6px; }\n\n.totalUnred.greater99 {\n  padding: 5px 3px; }\n\n.totalUnred.greater10 {\n  padding: 4px; }\n\n.tab-inactive {\n  color: #000;\n  background-color: #eee; }\n\n.tab-active {\n  color: #ffffff;\n  background-color: #FEA500; }\n\n.tab-btn {\n  padding: 8px 7px;\n  margin-top: 6px;\n  border-radius: 3px;\n  font-weight: 500;\n  font-size: 10px;\n  margin-right: 8px;\n  width: 65px; }\n\n.box-left {\n  text-align: left; }\n\n.box-right {\n  text-align: right; }\n\n.box-center {\n  text-align: center; }\n\n.tab-btn:last-child {\n  margin-right: 0px; }\n\n.choose-img {\n  border: 1px solid #4889fd;\n  border-radius: 7px;\n  background: #4889fd;\n  color: #fff; }\n\nion-datetime .datetime-text {\n  padding-right: 2px; }\n\n@media screen and (min-width: 768px) {\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; }\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; } }\n"

/***/ }),

/***/ "./src/app/main/cong-tac/CreateCongTac/CreateCongTac.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/cong-tac/CreateCongTac/CreateCongTac.page.ts ***!
  \*******************************************************************/
/*! exports provided: AUTH_KEY, STORAGE_KEY, CreateCongTac */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_KEY", function() { return STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCongTac", function() { return CreateCongTac; });
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_signalR_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/signalR.service */ "./src/service/signalR.service.ts");
/* harmony import */ var _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _AppSettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../AppSettings */ "./src/AppSettings.ts");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};
// import { AnnouncementServiceProxy } from '../../../../shared/service-proxies/service-proxies';















var AUTH_KEY = 'AUTH';
var STORAGE_KEY = 'my_images';
var CreateCongTac = /** @class */ (function () {
    function CreateCongTac(_loadingCtrl, _alertController, _signalRSevice, _announcementServiceProxy, _localStorageService, camera, file, webView, _platform, storage, toastController, actionSheetController, ref, http, filePath, workTimeServiceProxy, _router) {
        var _this = this;
        this._loadingCtrl = _loadingCtrl;
        this._alertController = _alertController;
        this._signalRSevice = _signalRSevice;
        this._announcementServiceProxy = _announcementServiceProxy;
        this._localStorageService = _localStorageService;
        this.camera = camera;
        this.file = file;
        this.webView = webView;
        this._platform = _platform;
        this.storage = storage;
        this.toastController = toastController;
        this.actionSheetController = actionSheetController;
        this.ref = ref;
        this.http = http;
        this.filePath = filePath;
        this.workTimeServiceProxy = workTimeServiceProxy;
        this._router = _router;
        this.startDate = new Date().toISOString();
        this.endDate = new Date().toISOString();
        this.dateFrom = moment__WEBPACK_IMPORTED_MODULE_3__().clone().locale('vi').add(1, 'days');
        this.dateTo = moment__WEBPACK_IMPORTED_MODULE_3__().clone().locale('vi').add(1, 'days');
        this.customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
        this.isLoading = false;
        this.items = [];
        this.listHovaten = [];
        this.tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        // myDate = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1);
        this.chonNgay = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1);
        this.tuNgay = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1);
        this.denNgay = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1);
        this.lydo = '';
        this.totalUnred = 0;
        this.valueFirstTime = '07:45';
        this.valueLastTime = '17:30';
        this.tabActive = 1;
        this.documentType = 'NP';
        this.images = [];
        this.loaiNghiPhep = 'NGHIPHEPNAM';
        this._platform.ready().then(function () {
            _this.loadStoredImages();
        });
        this.creatorUserId = this._localStorageService.getItem(AUTH_KEY).userId;
        this._signalRSevice.retrieveMappedObject().subscribe(function (message) {
            _this._announcementServiceProxy.getAllUnRead(_this.creatorUserId).subscribe({
                next: function (res) {
                    if (res) {
                        _this.totalUnred = res.length;
                    }
                }
            });
        });
    }
    CreateCongTac.prototype.ngOnInit = function () {
        this.branchId = this._localStorageService.getItem(AUTH_KEY).branchId;
        this.hoVaTen = this._localStorageService.getItem(AUTH_KEY).hoVaTen;
        this.tenCty = this._localStorageService.getItem(AUTH_KEY).tenCty;
        this.avatar = this._localStorageService.getItem(AUTH_KEY).image;
        this.branchType = this._localStorageService.getItem(AUTH_KEY).branchType;
        this.email = this._localStorageService.getItem(AUTH_KEY).email;
    };
    CreateCongTac.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDefault();
        this._announcementServiceProxy.getAllUnRead(this.creatorUserId).subscribe({
            next: function (res) {
                if (res) {
                    _this.totalUnred = res.length;
                }
            },
            error: function (err) {
                _this.showAlertController('Lỗi kết nối mạng, vui lòng thử lại.');
                return;
            }
        });
        this.getQuyTrinhDuyet();
    };
    CreateCongTac.prototype.getQuyTrinhDuyet = function () {
        var _this = this;
        this.workTimeServiceProxy.getQuyTrinhDuyet(this.branchId).subscribe({
            next: function (res) {
                if (res) {
                    if (res.truongNhom)
                        _this.infoTruongNhom = res.truongNhom;
                    if (res.truongPhong)
                        _this.infoTruongPhong = res.truongPhong;
                    if (res.giamDocKhoi)
                        _this.infoGiamDocKhoi = res.giamDocKhoi;
                    if (res.tcns)
                        _this.infoPhongTCNS = res.tcns;
                    if (res.giamDocDieuHanh)
                        _this.infoGiamDocDieuHanh = res.giamDocDieuHanh;
                }
                _this.dismissLoading();
            }, error: function (err) {
                console.log(err);
            }
        });
    };
    CreateCongTac.prototype.ionViewDidLeave = function () {
        this.storage.set(STORAGE_KEY, null).then();
    };
    CreateCongTac.prototype.loadStoredImages = function () {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (images) {
            if (images) {
                var arr = JSON.parse(images);
                _this.images = [];
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var img = arr_1[_i];
                    var filePath = _this.file.dataDirectory + img;
                    var resPath = _this.pathForImage(filePath);
                    _this.images.push({ name: img, path: resPath, filePath: filePath });
                }
            }
        });
    };
    CreateCongTac.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webView.convertFileSrc(img);
            return converted;
        }
    };
    CreateCongTac.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateCongTac.prototype.selectImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Chọn nguồn ảnh",
                            buttons: [{
                                    text: 'Chọn ảnh từ thư viện',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Sử dụng camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Hủy',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateCongTac.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this._platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        });
    };
    CreateCongTac.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            _this.updateStoredImages(newFileName);
        }, function (error) {
            _this.presentToast('Lỗi');
        });
    };
    CreateCongTac.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    CreateCongTac.prototype.updateStoredImages = function (name) {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            if (!arr) {
                var newImages = [name];
                _this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            }
            else {
                arr.push(name);
                _this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }
            var filePath = _this.file.dataDirectory + name;
            var resPath = _this.pathForImage(filePath);
            var newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };
            _this.images = [newEntry].concat(_this.images);
            _this.ref.detectChanges(); // trigger change detection cycle
        });
    };
    CreateCongTac.prototype.confirmDeleteImage = function (imgEntry, position, flag) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Thông báo',
                            message: 'Bạn có chắc muốn xóa hình này không?',
                            buttons: [{ text: 'Hủy', role: 'cancel' }, {
                                    text: 'Đồng ý', handler: function () {
                                        _this.deleteImage(imgEntry, position, flag);
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateCongTac.prototype.deleteImage = function (imgEntry, position, flag) {
        var _this = this;
        this.images.splice(position, 1);
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            var filtered = arr.filter(function (name) { return name != imgEntry.name; });
            _this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
            var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
            _this.file.removeFile(correctPath, imgEntry.name).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(flag === true)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.presentToast('Đã xóa hình ảnh, vui lòng chọn lại.')];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    CreateCongTac.prototype.onCreateWorkTime = function (form) {
        var _this = this;
        this.loadingDefault();
        if (this.documentType === 'QCC' || this.documentType == 'CT') {
            if (this.images.length == 0) {
                this.dismissLoading();
                this.showAlertController("Cần upload ảnh chứng minh");
                return false;
            }
        }
        if (form.value.lydo.trim().length <= 0) {
            this.showAlertController('Không được bỏ trống mục lý do.');
            return false;
        }
        this.workTimeServiceProxy.getQuyTrinhDuyet(this.branchId).subscribe({
            next: function (res) {
                if (res) {
                    if (res.truongNhom)
                        _this.infoTruongNhom = res.truongNhom;
                    if (res.truongPhong)
                        _this.infoTruongPhong = res.truongPhong;
                    if (res.giamDocKhoi)
                        _this.infoGiamDocKhoi = res.giamDocKhoi;
                    if (res.tcns)
                        _this.infoPhongTCNS = res.tcns;
                    if (res.giamDocDieuHanh)
                        _this.infoGiamDocDieuHanh = res.giamDocDieuHanh;
                }
                if (_this.images.length > 0) {
                    _this.file.resolveLocalFilesystemUrl(_this.images[0].filePath)
                        .then(function (entry) {
                        entry.file(function (file) { return _this.readFile(file, form); });
                    })
                        .catch(function (err) {
                        _this.presentToast('Lỗi khi đọc file');
                    });
                }
                else {
                    var formData = new FormData();
                    _this.prepareCreateOrEditMobile(formData, form);
                }
            }, error: function (err) {
                console.log(err);
                _this.showAlertController('Có lỗi xảy ra. Vui lòng thử lại.');
            }
        });
    };
    CreateCongTac.prototype.readFile = function (file, form) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function () {
            var formData = new FormData();
            var imgBlob = new Blob([reader.result], {
                type: file.type
            });
            if (_this.documentType === 'QCC' || _this.documentType === 'CT')
                formData.append('Attachment', imgBlob, file.name);
            _this.prepareCreateOrEditMobile(formData, form);
        };
        reader.readAsArrayBuffer(file);
    };
    CreateCongTac.prototype.prepareCreateOrEditMobile = function (formData, form) {
        return __awaiter(this, void 0, void 0, function () {
            var formatTuNgayForCompare, formatDenNgayForCompare, formatFirstTime, formatLastTime, tuNgayDate, denNgayDate, tuNgayFromForm, denNgayFromForm, formatTuNgay, formatDenNgay, timeTemp, timeTemp, tuNgayFromForm, denNgayFromForm, formatTuNgay, formatDenNgay, timeTemp, timeTemp, tuNgayFromForm, denNgayFromForm, formatTuNgay, formatDenNgay, tuNgayFromForm, denNgayFromForm, firstTimeFromForm, lastTimeFromForm, formatTuNgay, formatDenNgay, tuNgayDateTime, denNgayDateTime, momentDate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formatTuNgayForCompare = '';
                        formatDenNgayForCompare = '';
                        formatFirstTime = '';
                        formatLastTime = '';
                        tuNgayDate = '';
                        denNgayDate = '';
                        if (this.tabActive == 4) {
                            tuNgayFromForm = form.value.tuNgay;
                            denNgayFromForm = form.value.denNgay;
                            formatTuNgay = '';
                            formatDenNgay = '';
                            if (typeof (tuNgayFromForm) !== 'string') {
                                timeTemp = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '00:00:00';
                                formatTuNgay = moment__WEBPACK_IMPORTED_MODULE_3__(timeTemp).clone().format('dddd') == 'Monday' ? tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text : tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text;
                                formatTuNgayForCompare = moment__WEBPACK_IMPORTED_MODULE_3__(timeTemp).clone().format('dddd') == 'Monday' ? tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '07:30:00' : tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '07:45:00';
                                tuNgayDate = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text;
                            }
                            else {
                                timeTemp = moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '00:00:00';
                                formatTuNgay = moment__WEBPACK_IMPORTED_MODULE_3__(timeTemp).clone().format('dddd') == 'Monday' ? moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('DD/MM/YYYY') : moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('DD/MM/YYYY');
                                formatTuNgayForCompare = moment__WEBPACK_IMPORTED_MODULE_3__(timeTemp).clone().format('dddd') == 'Monday' ? moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '07:30:00' : moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '07:45:00';
                                tuNgayDate = moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('YYYY-MM-DD');
                            }
                            formData.append('TimeFrom', formatTuNgay);
                            // body.timeFrom = formatTuNgay;
                            formatDenNgay = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.day.text + '/' + denNgayFromForm.month.text + '/' + denNgayFromForm.year.text : moment__WEBPACK_IMPORTED_MODULE_3__(denNgayFromForm).format('DD/MM/YYYY');
                            formatDenNgayForCompare = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text + 'T' + '12:00:00' : moment__WEBPACK_IMPORTED_MODULE_3__(denNgayFromForm).format('YYYY-MM-DD') + 'T' + '12:00:00';
                            denNgayDate = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text : moment__WEBPACK_IMPORTED_MODULE_3__(denNgayFromForm).format('YYYY-MM-DD');
                            formData.append('TimeTo', formatDenNgay);
                            //  body.timeTo = formatDenNgay;
                        }
                        else {
                            if (this.tabActive == 1) {
                                tuNgayFromForm = form.value.chonNgay;
                                denNgayFromForm = form.value.chonNgay;
                                formatTuNgay = '';
                                formatDenNgay = '';
                                if (typeof (tuNgayFromForm) !== 'string') {
                                    timeTemp = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '00:00:00';
                                    formatTuNgay = moment__WEBPACK_IMPORTED_MODULE_3__(timeTemp).clone().format('dddd') == 'Monday' ? tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text + ' ' + '07:30' : tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text + ' ' + '07:45';
                                    formatTuNgayForCompare = moment__WEBPACK_IMPORTED_MODULE_3__(timeTemp).clone().format('dddd') == 'Monday' ? tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '07:30:00' : tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '07:45:00';
                                    tuNgayDate = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text;
                                }
                                else {
                                    timeTemp = moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '00:00:00';
                                    formatTuNgay = (moment__WEBPACK_IMPORTED_MODULE_3__(timeTemp).clone().format('dddd') == 'Monday') ? moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('DD/MM/YYYY') + ' ' + '07:30' : moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('DD/MM/YYYY') + ' ' + '07:45';
                                    formatTuNgayForCompare = (moment__WEBPACK_IMPORTED_MODULE_3__(timeTemp).clone().format('dddd') == 'Monday') ? moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '07:30:00' : moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '07:45:00';
                                    ;
                                    tuNgayDate = moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('YYYY-MM-DD');
                                }
                                formData.append('TimeFrom', formatTuNgay += ':00');
                                //  body.timeFrom = formatTuNgay;
                                formatDenNgay = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.day.text + '/' + denNgayFromForm.month.text + '/' + denNgayFromForm.year.text + ' ' + '12:00' : moment__WEBPACK_IMPORTED_MODULE_3__(denNgayFromForm).format('DD/MM/YYYY') + ' ' + '12:00';
                                formatDenNgayForCompare = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text + 'T' + '12:00:00' : moment__WEBPACK_IMPORTED_MODULE_3__(denNgayFromForm).format('YYYY-MM-DD') + 'T' + '12:00:00';
                                denNgayDate = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text : moment__WEBPACK_IMPORTED_MODULE_3__(denNgayFromForm).format('YYYY-MM-DD');
                                formData.append('TimeTo', formatDenNgay += ':00');
                                //  body.timeTo = formatDenNgay;
                            }
                            else if (this.tabActive == 2) {
                                tuNgayFromForm = form.value.chonNgay;
                                denNgayFromForm = form.value.chonNgay;
                                formatTuNgay = '';
                                formatDenNgay = '';
                                formatTuNgay = typeof (tuNgayFromForm) !== 'string' ? tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text + ' ' + '13:00' : moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('DD/MM/YYYY') + ' ' + '13:00';
                                formatTuNgayForCompare = typeof (tuNgayFromForm) !== 'string' ? tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '13:00:00' : moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '13:00:00';
                                tuNgayDate = typeof (tuNgayFromForm) !== 'string' ? tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text : moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('YYYY-MM-DD');
                                formData.append('TimeFrom', formatTuNgay += ':00');
                                // body.timeFrom = formatTuNgay;
                                formatDenNgay = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.day.text + '/' + denNgayFromForm.month.text + '/' + denNgayFromForm.year.text + ' ' + '17:30' : moment__WEBPACK_IMPORTED_MODULE_3__(denNgayFromForm).format('DD/MM/YYYY') + ' ' + '17:30';
                                formatDenNgayForCompare = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text + 'T' + '17:30:00' : moment__WEBPACK_IMPORTED_MODULE_3__(denNgayFromForm).format('YYYY-MM-DD') + 'T' + '17:30:00';
                                denNgayDate = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text : moment__WEBPACK_IMPORTED_MODULE_3__(denNgayFromForm).format('YYYY-MM-DD');
                                formData.append('TimeTo', formatDenNgay += ':00');
                                // body.timeTo = formatDenNgay;
                            }
                            else if (this.tabActive == 3) {
                                tuNgayFromForm = form.value.chonNgay;
                                denNgayFromForm = form.value.chonNgay;
                                firstTimeFromForm = form.value.valueFirstTime;
                                lastTimeFromForm = form.value.valueLastTime;
                                formatTuNgay = '';
                                formatDenNgay = '';
                                if (typeof (tuNgayFromForm) !== 'string') {
                                    formatFirstTime = typeof (firstTimeFromForm) !== 'string' ? firstTimeFromForm.hour.text + ':' + firstTimeFromForm.minute.text : firstTimeFromForm;
                                    formatLastTime = typeof (lastTimeFromForm) !== 'string' ? lastTimeFromForm.hour.text + ':' + lastTimeFromForm.minute.text : lastTimeFromForm;
                                    formatTuNgay = tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text + ' ' + formatFirstTime;
                                    formatTuNgayForCompare = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + formatFirstTime + ':00';
                                    formatDenNgay = denNgayFromForm.day.text + '/' + denNgayFromForm.month.text + '/' + denNgayFromForm.year.text + ' ' + formatLastTime;
                                    formatDenNgayForCompare = denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text + 'T' + formatLastTime + ':00';
                                    tuNgayDate = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text;
                                    denNgayDate = denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text;
                                }
                                else {
                                    if (typeof (firstTimeFromForm) !== 'string') {
                                        formatFirstTime = firstTimeFromForm.hour.text + ':' + firstTimeFromForm.minute.text;
                                    }
                                    else {
                                        formatFirstTime = firstTimeFromForm;
                                    }
                                    formatTuNgay = moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('DD/MM/YYYY') + ' ' + formatFirstTime;
                                    formatTuNgayForCompare = moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + formatFirstTime + ':00';
                                    tuNgayDate = moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('YYYY-MM-DD');
                                    if (typeof (lastTimeFromForm) !== 'string') {
                                        formatLastTime = typeof (lastTimeFromForm) !== 'string' ? lastTimeFromForm.hour.text + ':' + lastTimeFromForm.minute.text : lastTimeFromForm;
                                    }
                                    else {
                                        formatLastTime = lastTimeFromForm;
                                    }
                                    formatDenNgay = moment__WEBPACK_IMPORTED_MODULE_3__(denNgayFromForm).format('DD/MM/YYYY') + ' ' + formatLastTime;
                                    formatDenNgayForCompare = moment__WEBPACK_IMPORTED_MODULE_3__(denNgayFromForm).format('YYYY-MM-DD') + 'T' + formatLastTime + ':00';
                                    denNgayDate = moment__WEBPACK_IMPORTED_MODULE_3__(denNgayFromForm).format('YYYY-MM-DD');
                                }
                                // body.timeFrom += ':00';
                                // body.timeTo += ':00';
                                formData.append('TimeFrom', formatTuNgay += ':00');
                                formData.append('TimeTo', formatDenNgay += ':00');
                            }
                        }
                        if (moment__WEBPACK_IMPORTED_MODULE_3__(formatTuNgayForCompare) > moment__WEBPACK_IMPORTED_MODULE_3__(formatDenNgayForCompare)) {
                            this.showAlertController('Thời gian đăng ký không hợp lệ');
                            return [2 /*return*/, false];
                        }
                        if (this.tabActive === 4) {
                            if (moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayDate + 'T00:00:00') >= moment__WEBPACK_IMPORTED_MODULE_3__(denNgayDate + 'T00:00:00')) {
                                this.showAlertController('Thời gian đăng ký không hợp lệ');
                                return [2 /*return*/, false];
                            }
                        }
                        if (this.documentType !== 'TC') {
                            if ((moment__WEBPACK_IMPORTED_MODULE_3__(formatTuNgayForCompare).clone().format('dddd') === 'Saturday') || (moment__WEBPACK_IMPORTED_MODULE_3__(formatTuNgayForCompare).clone().format('dddd') === 'Sunday')) {
                                this.showAlertController('Ngày bắt đầu không được là thứ 7 hoặc chủ nhật');
                                return [2 /*return*/, false];
                            }
                            if ((moment__WEBPACK_IMPORTED_MODULE_3__(formatDenNgayForCompare).clone().format('dddd') === 'Saturday') || (moment__WEBPACK_IMPORTED_MODULE_3__(formatDenNgayForCompare).clone().format('dddd') === 'Sunday')) {
                                this.showAlertController('Ngày kết thúc không được là thứ 7 hoặc chủ nhật');
                                return [2 /*return*/, false];
                            }
                        }
                        if (this.tabActive === 3) {
                            tuNgayDateTime = tuNgayDate + 'T' + formatFirstTime + ':00';
                            denNgayDateTime = denNgayDate + 'T' + formatLastTime + ':00';
                            if (moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayDateTime) >= moment__WEBPACK_IMPORTED_MODULE_3__(denNgayDateTime)) {
                                this.showAlertController('Thời gian đăng ký không hợp lệ');
                                return [2 /*return*/, false];
                            }
                            if (this.documentType !== 'TC') {
                                if (moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayDateTime).format('dddd') === 'Monday') {
                                    if (!moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayDateTime).isBetween(moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayDate + 'T07:29:00'), moment__WEBPACK_IMPORTED_MODULE_3__(moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayDate + 'T17:31:00')))) {
                                        this.showAlertController('Thời gian phải nằm trong giờ hành chính');
                                        return [2 /*return*/, false];
                                    }
                                }
                                else {
                                    if (!moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayDateTime).isBetween(moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayDate + 'T07:44:00'), moment__WEBPACK_IMPORTED_MODULE_3__(moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayDate + 'T17:31:00')))) {
                                        this.showAlertController('Thời gian phải nằm trong giờ hành chính');
                                        return [2 /*return*/, false];
                                    }
                                }
                                if (moment__WEBPACK_IMPORTED_MODULE_3__(denNgayDateTime).format('dddd') === 'Monday') {
                                    if (!moment__WEBPACK_IMPORTED_MODULE_3__(denNgayDateTime).isBetween(moment__WEBPACK_IMPORTED_MODULE_3__(denNgayDate + 'T07:29:00'), moment__WEBPACK_IMPORTED_MODULE_3__(moment__WEBPACK_IMPORTED_MODULE_3__(denNgayDate + 'T17:31:00')))) {
                                        this.showAlertController('Thời gian phải nằm trong giờ hành chính');
                                        return [2 /*return*/, false];
                                    }
                                }
                                else {
                                    console.log(moment__WEBPACK_IMPORTED_MODULE_3__(denNgayDateTime).format('dddd'));
                                    if (!moment__WEBPACK_IMPORTED_MODULE_3__(denNgayDateTime).isBetween(moment__WEBPACK_IMPORTED_MODULE_3__(denNgayDate + 'T07:44:00'), moment__WEBPACK_IMPORTED_MODULE_3__(moment__WEBPACK_IMPORTED_MODULE_3__(denNgayDate + 'T17:31:00')))) {
                                        this.showAlertController('Thời gian phải nằm trong giờ hành chính');
                                        return [2 /*return*/, false];
                                    }
                                }
                            }
                        }
                        momentDate = moment__WEBPACK_IMPORTED_MODULE_3__().clone().locale('vi').format('YYYY-MM-DD');
                        if ((moment__WEBPACK_IMPORTED_MODULE_3__(momentDate + 'T00:00:00') > moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayDate + 'T00:00:00')) || (moment__WEBPACK_IMPORTED_MODULE_3__(momentDate + 'T00:00:00') > moment__WEBPACK_IMPORTED_MODULE_3__(denNgayDate + 'T00:00:00'))) {
                            this.showAlertController('Thời gian đăng ký phải lớn hơn hoặc bằng ngày hiện tại');
                            return [2 /*return*/, false];
                        }
                        formData.append('Reasons', form.value.lydo.trim());
                        if (this.avatar != null) {
                            formData.append('Image', this.avatar);
                        }
                        else {
                            formData.append('Image', '/uploads/defaultAvatar.png');
                        }
                        formData.append('HoVaTen', this.hoVaTen);
                        formData.append('TenCty', this.tenCty);
                        formData.append('DocumentType', this.documentType);
                        formData.append('CreatorUserId', this.creatorUserId.toString());
                        formData.append('Email', this.email);
                        if (this.documentType === 'NP') {
                            formData.append('LoaiNghiPhep', this.loaiNghiPhep);
                            if (this.loaiNghiPhep === 'NGHIPHEPNAM' || this.loaiNghiPhep === 'KETHON' || this.loaiNghiPhep === 'TANGCHE') {
                                formData.append('NghiCoLuong', 'true');
                            }
                            else {
                                formData.append('NghiCoLuong', 'false');
                            }
                        }
                        return [4 /*yield*/, this.CreateOrEditForMobile(formData)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateCongTac.prototype.CreateOrEditForMobile = function (body) {
        var _this = this;
        if (this.infoTruongNhom && this.infoTruongNhom.id)
            body.append('TruongNhomId', this.infoTruongNhom.id);
        if (this.infoTruongPhong && this.infoTruongPhong.id)
            body.append('TruongPhongId', this.infoTruongPhong.id);
        if (this.infoGiamDocKhoi && this.infoGiamDocKhoi.id)
            body.append('GiamDocKhoiId', this.infoGiamDocKhoi.id);
        if (this.infoPhongTCNS && this.infoPhongTCNS.id)
            body.append('TcnsId', this.infoPhongTCNS.id);
        if (this.infoGiamDocDieuHanh && this.infoGiamDocDieuHanh.id)
            body.append('GiamDocDieuHanhId', this.infoGiamDocDieuHanh.id);
        this.http.post(_AppSettings__WEBPACK_IMPORTED_MODULE_11__["AppSettings"].API_ENDPOINT + "/api/WorkTime/CreateOrEditForMobile", body).subscribe({
            next: function (res) { return __awaiter(_this, void 0, void 0, function () {
                var sendUserDto;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            sendUserDto = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["SendAnnouncement_ENTITY"]();
                            sendUserDto = res.result;
                            return [4 /*yield*/, this._announcementServiceProxy.sendMessageToClient(sendUserDto).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        return [2 /*return*/];
                                    });
                                }); })];
                        case 1:
                            _a.sent();
                            this.lydo = '';
                            if (this.images.length > 0) {
                                this.deleteImage(this.images[0], 0, false);
                            }
                            this.documentType = 'NP';
                            this.showAlertController('Bạn đã đăng ký thành công!');
                            return [2 /*return*/];
                    }
                });
            }); }, error: function (res) {
                _this.showAlertController('Đăng ký không thành công. Vui lòng thử lại.');
            },
        });
    };
    CreateCongTac.prototype.changeToGetTime = function (event) {
        var dateTimechoosed = event.detail.value;
        dateTimechoosed = dateTimechoosed.year.text + '-' + dateTimechoosed.month.text + '-' + dateTimechoosed.day.text + 'T' + '07:30:00';
        if (moment__WEBPACK_IMPORTED_MODULE_3__(dateTimechoosed).clone().format('dddd') == 'Monday') {
            this.valueFirstTime = '07:30';
        }
        else {
            this.valueFirstTime = '07:45';
        }
    };
    CreateCongTac.prototype.showAlertController = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alertController, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dismissLoading();
                        alertController = this._alertController;
                        return [4 /*yield*/, alertController.create({
                                header: 'Thông báo',
                                message: message,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateCongTac.prototype.loadingDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this._loadingCtrl.create({}).then(function (a) {
                                a.present().then(function () {
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CreateCongTac.prototype.dismissLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this._loadingCtrl.dismiss().then(function () { })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CreateCongTac.prototype.greaterThan = function (sub, num) {
        return true ? sub <= num : undefined;
    };
    CreateCongTac.prototype.chooseTab = function (flag) {
        this.tabActive = flag;
        if (flag == 3) {
            var tuNgayFromForm = this.chonNgay;
            var timeCurrent = moment__WEBPACK_IMPORTED_MODULE_3__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '00:00:00';
            if (moment__WEBPACK_IMPORTED_MODULE_3__(timeCurrent).clone().format('dddd') == 'Monday') {
                this.valueFirstTime = '07:30';
            }
            else {
                this.valueFirstTime = '07:45';
            }
        }
        else if (flag == 4) {
            this.documentType = 'NP';
        }
    };
    CreateCongTac.prototype.backToHome = function () {
        var _this = this;
        setTimeout(function () {
            _this._router.navigateByUrl('app/main/home');
        }, 1000);
    };
    CreateCongTac = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-congtac',
            template: __webpack_require__(/*! ./CreateCongTac.page.html */ "./src/app/main/cong-tac/CreateCongTac/CreateCongTac.page.html"),
            styles: [__webpack_require__(/*! ./CreateCongTac.page.scss */ "./src/app/main/cong-tac/CreateCongTac/CreateCongTac.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _service_signalR_service__WEBPACK_IMPORTED_MODULE_4__["SignalRService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["AnnouncementServiceProxy"],
            _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_Storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__["FilePath"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["WorkTimeServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]])
    ], CreateCongTac);
    return CreateCongTac;
}());



/***/ }),

/***/ "./src/app/main/cong-tac/DanhSachChoDuyet/DanhSachChoDuyet.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/main/cong-tac/DanhSachChoDuyet/DanhSachChoDuyet.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <div class=\"content-app-desktop\">\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-back-button (click)=\"backToHome()\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Danh sách chờ duyệt</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button color=\"dark\" href=\"app/main/announcement\">\n            <span class=\"fa fa-bell\" style=\"font-size: 25px; color: #606060;\"></span>\n            <span *ngIf=\"totalUnred > 0 && greaterThan(totalUnred,9)\" class=\"totalUnred\">{{totalUnred}}</span> \n            <span *ngIf=\"totalUnred >= 10 && greaterThan(totalUnred,99)\" class=\"totalUnred greater10\">{{totalUnred}}</span> \n            <span *ngIf=\"totalUnred > 99\" class=\"totalUnred greater99\">99+</span> \n          </ion-button>        \n        </ion-buttons>\n      </ion-toolbar>\n    </div>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class=\"content-app-desktop\">\n      <div *ngIf=\"checkList && checkList.length > 0;else elsecontent\">\n        <ion-row >\n          <ion-col col-6>\n            <ion-item style=\"--padding-start: 0px;--border-width:0px;--inner-border-width:0px; margin-left: 11px;\">\n             <input type=\"checkbox\" id=\"checkboxAll\" class=\"css-checkbox\" [(ngModel)]=\"masterSelected\" name=\"list_name\" value=\"m1\" (change)=\"checkUncheckAll()\"/>\n             <label for=\"checkboxAll\" class=\"css-label\"><span>Chọn tất cả</span></label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 style=\"margin: 0px; padding: 0px;\">\n            <ion-item style=\"--padding-start: 0px;--border-width:0px;--inner-border-width:0px; position: relative;\">\n              <ng-container *ngIf=\"this.checkedList.length > 0;else not_choose_all\">\n                <button class=\"btn-duyet-nhanh\" (click)=\"revieceAll()\">Duyệt</button>\n              </ng-container>\n              <ng-template #not_choose_all>\n                <button class=\"btn-duyet-nhanh\" disabled>Duyệt</button>\n              </ng-template>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n      <ng-template #elsecontent>\n        <p class=\"none-margin\">Không có đơn đăng ký</p>\n      </ng-template>\n\n      <ion-list>\n        <ion-card *ngFor=\"let item of checkList; let i = index\" style=\"margin:10px 0px; background:#f5f8fd;border:1px solid lightgray\">\n          <ion-card-content style=\"padding: 0px 10px;\" > \n            <ion-row>\n              <ion-col>\n                <div class=\"box-contain-content fl-left\">\n                  <p class=\"content-name\">\n                   <input type=\"checkbox\" id=\"{{'checkboxG' + i}}\" class=\"css-checkbox\" [(ngModel)]=\"item.isSelected\" name=\"list_name\" \n                    value=\"{{item.id}}\" (change)=\"isAllSelected(i)\" />\n                    <label for=\"{{'checkboxG' + i}}\" class=\"css-label\"></label>\n                    <span style=\"display: inline-block; margin-left: 5px;\">{{item.hoVaTen}}</span></p>\n                      <p class=\"document-type\">Loại chứng từ: \n                        <span *ngIf=\"item.documentType == 'NP'\">Đăng ký Nghỉ phép</span>\n                        <span *ngIf=\"item.documentType == 'CT'\">Đăng ký Công tác</span>\n                        <span *ngIf=\"item.documentType == 'TC'\">Đăng ký Tăng ca</span>\n                        <span *ngIf=\"item.documentType == 'QCC'\">Đăng ký Quên chấm công</span>\n                      </p>\n                    <p class=\"content-date\"><span>Thời gian bắt đầu: </span> \n                      <span *ngIf=\"item.timeFrom.includes('00:00'); else other_timeFrom\">{{item.timeFrom.replace('00:00','')}}</span>\n                      <ng-template #other_timeFrom><span>{{item.timeFrom}}</span></ng-template></p>\n                    <p class=\"content-date\"><span class=\"font-bold\">Thời gian kết thúc: </span> \n                      <span *ngIf=\"item.timeTo.includes('00:00'); else other_timeTo\">{{item.timeTo.replace('00:00','')}}</span>\n                      <ng-template #other_timeTo><span>{{item.timeTo}}</span></ng-template></p>\n                </div>\n                <div class=\"box-contain-btn fl-left\">\n                  <button (click)=\"viewDetail(item.id);\" class=\"btn-xem btn-dsct\">Xem</button>\n                  <button (click)=\"duyetDon(item.id);\" class=\"btn-duyet btn-dsct\">Duyệt</button>\n              </div>\n              </ion-col>\n            </ion-row>\n          </ion-card-content> \n        </ion-card>\n      </ion-list>\n\n      <ion-infinite-scroll *ngIf=\"checkList && checkList.length > 0\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Đang tải thêm dữ liệu...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/main/cong-tac/DanhSachChoDuyet/DanhSachChoDuyet.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/main/cong-tac/DanhSachChoDuyet/DanhSachChoDuyet.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-title-announcement {\n  float: left;\n  width: calc(100% - 40px);\n  padding-left: 3px;\n  font-size: 20px;\n  line-height: 21px; }\n\n.title-announcement {\n  font-size: 13px;\n  color: #3c3c3c; }\n\n.time-ago {\n  text-align: right; }\n\n.fl-left {\n  float: left; }\n\n.box-contain-content {\n  width: calc(100% - 75px);\n  color: #1383BA; }\n\n.box-contain-content .content-name {\n    font-size: 17px; }\n\n.box-contain-content .content-name .icon-calendar {\n      font-size: 23px;\n      position: relative;\n      top: 5px;\n      margin-right: 5px; }\n\n.box-contain-content .document-type {\n    font-size: 13px; }\n\n.box-contain-content .content-date {\n    font-size: 12px; }\n\n.box-contain-btn {\n  position: relative;\n  width: 75px;\n  height: 100%; }\n\n.btn-dsct {\n  width: 100%;\n  background: #3880ff;\n  color: #fff;\n  font-size: 13px;\n  padding: 7px 14px;\n  border-radius: 3px; }\n\n.btn-xem {\n  position: absolute;\n  top: 10px; }\n\n.btn-duyet {\n  position: absolute;\n  bottom: 10px; }\n\n.none-margin {\n  margin: 0px !important; }\n\n.btn-duyet-nhanh {\n  padding: 9px 14px;\n  background-color: #3880ff;\n  color: #fff;\n  position: absolute;\n  margin-top: 5px;\n  border-radius: 4px;\n  right: 15px;\n  width: 75px; }\n\n.btn-duyet-nhanh:disabled {\n  opacity: 0.7; }\n\ninput[type=checkbox].css-checkbox {\n  position: absolute;\n  z-index: -1000;\n  left: -1000px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0; }\n\ninput[type=checkbox].css-checkbox + label.css-label {\n  padding-left: 30px;\n  height: 25px;\n  display: inline-block;\n  line-height: 30px;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  font-size: 18px;\n  color: #080808;\n  vertical-align: middle;\n  cursor: pointer; }\n\ninput[type=checkbox].css-checkbox:checked + label.css-label {\n  background-position: 0 -25px; }\n\nlabel.css-label {\n  background-image: url('checkbox.png');\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.css-label span {\n  display: inline-block;\n  margin-left: 5px; }\n\n.totalUnred {\n  display: inline-block;\n  position: relative;\n  background: #5188e8;\n  border-radius: 50%;\n  right: 12px;\n  font-size: 9px;\n  top: 3px;\n  color: #fff;\n  padding: 3px 6px; }\n\n.totalUnred.greater99 {\n  padding: 5px 3px; }\n\n.totalUnred.greater10 {\n  padding: 4px; }\n\n@media screen and (min-width: 768px) {\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; }\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; } }\n"

/***/ }),

/***/ "./src/app/main/cong-tac/DanhSachChoDuyet/DanhSachChoDuyet.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/cong-tac/DanhSachChoDuyet/DanhSachChoDuyet.page.ts ***!
  \*************************************************************************/
/*! exports provided: AUTH_KEY, DanhSachChoDuyet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachChoDuyet", function() { return DanhSachChoDuyet; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../service/util.service */ "./src/service/util.service.ts");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/timeout */ "./node_modules/rxjs-compat/_esm5/add/operator/timeout.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _service_signalR_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/signalR.service */ "./src/service/signalR.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _AppSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../AppSettings */ "./src/AppSettings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};






// import {  AnnouncementServiceProxy, TokenAuthServiceProxy, WorkTimeServiceProxy, HrWorkTime_ENTITY } from '../../../../shared/service-proxies/service-proxies';






// import { Subscription } from 'rxjs';


var App = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"].App;
var AUTH_KEY = 'AUTH';
var DanhSachChoDuyet = /** @class */ (function () {
    function DanhSachChoDuyet(_utilService, _router, _alertController, _loadingCtrl, _localStorageService, _tokenAuthServiceProxy, _menu, _signalRSevice, _announcementServiceProxy, workTimeServiceProxy, http) {
        var _this = this;
        this._utilService = _utilService;
        this._router = _router;
        this._alertController = _alertController;
        this._loadingCtrl = _loadingCtrl;
        this._localStorageService = _localStorageService;
        this._tokenAuthServiceProxy = _tokenAuthServiceProxy;
        this._menu = _menu;
        this._signalRSevice = _signalRSevice;
        this._announcementServiceProxy = _announcementServiceProxy;
        this.workTimeServiceProxy = workTimeServiceProxy;
        this.http = http;
        this.moment = moment__WEBPACK_IMPORTED_MODULE_4__();
        this.checkPauseResume = false;
        this.isLoading = false;
        this.globalUrlAPI = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_3__["AppConsts"].remoteServiceBaseUrl;
        this.masterSelected = false;
        this.checkList = [];
        this.checkedList = [];
        this.totalUnred = 0;
        this.pageSize = 10;
        this.userId = this._localStorageService.getItem(AUTH_KEY).userId;
        this._signalRSevice.retrieveMappedObject().subscribe(function (message) {
            _this._announcementServiceProxy.getAllUnRead(_this.userId).subscribe({
                next: function (res) {
                    if (res) {
                        _this.totalUnred = res.length;
                    }
                }
            });
        });
    }
    DanhSachChoDuyet.prototype.ngOnInit = function () {
        this.receiveId = this._localStorageService.getItem(AUTH_KEY).userId;
        this.hoVaTen = this._localStorageService.getItem(AUTH_KEY).hoVaTen;
        this.tenCty = this._localStorageService.getItem(AUTH_KEY).tenCty;
        this.avatar = this._localStorageService.getItem(AUTH_KEY).image;
    };
    DanhSachChoDuyet.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDefault();
        this._announcementServiceProxy.getAllUnRead(this.userId).subscribe({
            next: function (res) {
                if (res) {
                    _this.totalUnred = res.length;
                }
            },
            error: function (err) {
                _this.showAlertController('Lỗi kết nối mạng, vui lòng thử lại.');
                return;
            }
        });
        this.getAllWorkTimeUnread();
    };
    DanhSachChoDuyet.prototype.getAllWorkTimeUnread = function () {
        var _this = this;
        this.page = 1;
        this.workTimeServiceProxy.getWorkTimeUnCheck(this.receiveId, this.page, this.pageSize).subscribe({
            next: function (res) {
                _this.checkList = res;
                for (var _i = 0, _a = _this.checkList.map(function (value, index) { return ({ index: index, value: value }); }); _i < _a.length; _i++) {
                    var _b = _a[_i], index = _b.index, value = _b.value;
                    _this.checkList[index].isSelected = false;
                }
                _this.masterSelected = false;
                _this.dismissLoading();
            },
            error: function (err) {
                _this.dismissLoading();
                console.log(err);
            }
        });
    };
    DanhSachChoDuyet.prototype.viewDetail = function (id) {
        if (id) {
            this._router.navigate(['app/main/quanly-congtac'], {
                queryParams: { id: id }
            });
        }
    };
    DanhSachChoDuyet.prototype.duyetDon = function (id) {
        var _this = this;
        this.workTimeServiceProxy.getWorkTimeDetail(id).subscribe({
            next: function (res) { return __awaiter(_this, void 0, void 0, function () {
                var thongtinWorkTime;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            thongtinWorkTime = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["HrWorkTime"]();
                            thongtinWorkTime = res;
                            return [4 /*yield*/, this.onCreateOrEdit(id, thongtinWorkTime)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            error: function (err) {
                _this.dismissLoading();
                console.log(err);
            }
        });
    };
    DanhSachChoDuyet.prototype.onCreateOrEdit = function (id, thongtinWorkTime) {
        var _this = this;
        this.loadingDefault();
        var formData = new FormData;
        formData.append('Id', id);
        formData.append('NextApproverId', thongtinWorkTime.nextApproverId.toString());
        formData.append('Reasons', thongtinWorkTime.reasons);
        formData.append('Image', this.avatar);
        formData.append('HoVaTen', this.hoVaTen);
        formData.append('TenCty', this.tenCty);
        formData.append('DocumentType', thongtinWorkTime.documentType);
        formData.append('CreatorUserId', thongtinWorkTime.creatorUserId.toString());
        formData.append('Email', thongtinWorkTime.emailAddress);
        if (thongtinWorkTime.truongNhomId)
            formData.append('TruongNhomId', thongtinWorkTime.truongNhomId.toString());
        if (thongtinWorkTime.truongPhongId)
            formData.append('TruongPhongId', thongtinWorkTime.truongPhongId.toString());
        if (thongtinWorkTime.giamDocKhoiId)
            formData.append('GiamDocKhoiId', thongtinWorkTime.giamDocKhoiId.toString());
        if (thongtinWorkTime.tcnsId)
            formData.append('TcnsId', thongtinWorkTime.tcnsId.toString());
        if (thongtinWorkTime.giamDocDieuHanhId)
            formData.append('GiamDocDieuHanhId', thongtinWorkTime.giamDocDieuHanhId.toString());
        formData.append('TimeFrom', thongtinWorkTime.timeFrom.clone().locale('vi').format('YYYY-MM-DD') + 'T' + thongtinWorkTime.timeFrom.clone().locale('vi').format('HH:mm:ss'));
        formData.append('TimeTo', thongtinWorkTime.timeTo.clone().locale('vi').format('YYYY-MM-DD') + 'T' + thongtinWorkTime.timeTo.clone().locale('vi').format('HH:mm:ss'));
        formData.append('DocumentType', thongtinWorkTime.documentType);
        this.http.post(_AppSettings__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].API_ENDPOINT + "/api/WorkTime/CreateOrEditForMobile", formData).subscribe({
            next: function (res) { return __awaiter(_this, void 0, void 0, function () {
                var sendUserDto;
                return __generator(this, function (_a) {
                    sendUserDto = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["SendAnnouncement_ENTITY"]();
                    sendUserDto = res.result;
                    this._announcementServiceProxy.sendMessageToClient(sendUserDto).subscribe({
                        next: function (res) { }
                    });
                    this.getAllWorkTimeUnread();
                    this.showAlertController('Bạn đã duyệt đơn thành công!');
                    return [2 /*return*/];
                });
            }); }, error: function (err) {
                console.log(err);
                _this.showAlertController('Lỗi xuất hiện, vui lòng kiểm tra lại');
            },
        });
    };
    DanhSachChoDuyet.prototype.showAlertController = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alertController, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dismissLoading();
                        alertController = this._alertController;
                        return [4 /*yield*/, alertController.create({
                                header: 'Thông báo',
                                message: message,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DanhSachChoDuyet.prototype.loadingDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this._loadingCtrl.create({
                            // message: 'Đang xử lý........',
                            // duration: 3000
                            }).then(function (a) {
                                a.present().then(function () {
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DanhSachChoDuyet.prototype.dismissLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this._loadingCtrl.dismiss().then(function () { })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DanhSachChoDuyet.prototype.revieceAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hrWorkTimeDtoRequestArray, _i, _a, _b, index, value, hrWorkTimeDtoRequest;
            var _this = this;
            return __generator(this, function (_c) {
                this.loadingDefault();
                hrWorkTimeDtoRequestArray = [];
                for (_i = 0, _a = this.checkList.map(function (value, index) { return ({ index: index, value: value }); }); _i < _a.length; _i++) {
                    _b = _a[_i], index = _b.index, value = _b.value;
                    //kiem tra
                    if (value.isSelected) {
                        hrWorkTimeDtoRequest = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["HrWorkTimeRequest_ENTITY"]();
                        hrWorkTimeDtoRequest.id = value.id;
                        hrWorkTimeDtoRequest.hoVaTen = this.hoVaTen;
                        hrWorkTimeDtoRequest.tenCty = this.tenCty;
                        if (value.truongNhomId)
                            hrWorkTimeDtoRequest.truongNhomId = value.truongNhomId;
                        if (value.truongPhongId)
                            hrWorkTimeDtoRequest.truongPhongId = value.truongPhongId;
                        if (value.giamDocKhoiId)
                            hrWorkTimeDtoRequest.giamDocKhoiId = value.giamDocKhoiId;
                        if (value.tcnsId)
                            hrWorkTimeDtoRequest.tcnsId = value.tcnsId;
                        if (value.giamDocDieuHanhId)
                            hrWorkTimeDtoRequest.giamDocDieuHanhId = value.giamDocDieuHanhId;
                        hrWorkTimeDtoRequest.timeFrom = value.timeFrom;
                        hrWorkTimeDtoRequest.timeTo = value.timeTo;
                        hrWorkTimeDtoRequest.documentType = value.documentType;
                        hrWorkTimeDtoRequest.creatorUserId = value.creatorUserId;
                        hrWorkTimeDtoRequest.reasons = value.reasons;
                        hrWorkTimeDtoRequest.status = value.status;
                        hrWorkTimeDtoRequest.nextApproverId = value.nextApproverId;
                        hrWorkTimeDtoRequest.image = this.avatar;
                        hrWorkTimeDtoRequestArray.push(hrWorkTimeDtoRequest);
                    }
                }
                this.workTimeServiceProxy.editAllForMobile(hrWorkTimeDtoRequestArray).subscribe({
                    next: function (res) {
                        var sendUserDto = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["SendAnnouncement_ENTITY"]();
                        sendUserDto = res;
                        _this._announcementServiceProxy.sendMessageToClient(sendUserDto).subscribe({
                            next: function (res) { }
                        });
                        _this.getAllWorkTimeUnread();
                        _this.showAlertController('Bạn đã duyệt đơn thành công!');
                    },
                    error: function (err) {
                        _this.dismissLoading();
                        console.log(err);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    DanhSachChoDuyet.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            _this.page += 1;
            _this.workTimeServiceProxy.getWorkTimeUnCheck(_this.receiveId, _this.page, _this.pageSize).subscribe({
                next: function (res) {
                    var list = res;
                    for (var _i = 0, _a = list.map(function (value, index) { return ({ index: index, value: value }); }); _i < _a.length; _i++) {
                        var _b = _a[_i], index = _b.index, value = _b.value;
                        list[index].isSelected = false;
                        list[index].userReadId = _this.creatorUserId;
                        _this.checkList.push(list[index]);
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
            if (_this.checkList.length == 100) {
                event.target.disabled = true;
            }
        }, 500);
    };
    // Select all / Deselect all
    DanhSachChoDuyet.prototype.checkUncheckAll = function () {
        for (var i = 0; i < this.checkList.length; i++) {
            this.checkList[i].isSelected = this.masterSelected;
        }
        this.getCheckedItemList();
    };
    DanhSachChoDuyet.prototype.isAllSelected = function (i) {
        this.masterSelected = this.checkList.every(function (item) {
            return item.isSelected == true;
        });
        this.getCheckedItemList();
    };
    DanhSachChoDuyet.prototype.getCheckedItemList = function () {
        this.checkedList = [];
        for (var i = 0; i < this.checkList.length; i++) {
            if (this.checkList[i].isSelected)
                this.checkedList.push(this.checkList[i]);
        }
        // this.checkedList = JSON.stringify(this.checkedList);
    };
    DanhSachChoDuyet.prototype.greaterThan = function (sub, num) {
        return true ? sub <= num : undefined;
    };
    DanhSachChoDuyet.prototype.backToHome = function () {
        var _this = this;
        setTimeout(function () {
            _this._router.navigateByUrl('app/main/home');
        }, 1000);
    };
    DanhSachChoDuyet = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'danhsachchoduyet',
            template: __webpack_require__(/*! ./DanhSachChoDuyet.page.html */ "./src/app/main/cong-tac/DanhSachChoDuyet/DanhSachChoDuyet.page.html"),
            styles: [__webpack_require__(/*! ./DanhSachChoDuyet.page.scss */ "./src/app/main/cong-tac/DanhSachChoDuyet/DanhSachChoDuyet.page.scss")],
        }),
        __metadata("design:paramtypes", [_service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["TokenAuthServiceProxy"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _service_signalR_service__WEBPACK_IMPORTED_MODULE_10__["SignalRService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["AnnouncementServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["WorkTimeServiceProxy"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]])
    ], DanhSachChoDuyet);
    return DanhSachChoDuyet;
}());



/***/ }),

/***/ "./src/app/main/cong-tac/DanhSachDangKy/DanhSachDangKy.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/main/cong-tac/DanhSachDangKy/DanhSachDangKy.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n   <div class=\"content-app-desktop\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"app/main/home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Danh sách đăng ký</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button color=\"dark\" href=\"app/main/announcement\">\n          <span class=\"fa fa-bell\" style=\"font-size: 25px; color: #606060;\"></span>\n          <span *ngIf=\"totalUnred > 0 && greaterThan(totalUnred,9)\" class=\"totalUnred\">{{totalUnred}}</span> \n          <span *ngIf=\"totalUnred >= 10 && greaterThan(totalUnred,99)\" class=\"totalUnred greater10\">{{totalUnred}}</span> \n          <span *ngIf=\"totalUnred > 99\" class=\"totalUnred greater99\">99+</span> \n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n   </div>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class=\"content-app-desktop\">\n      \n      <div *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.length == 0\">\n        <p class=\"none-margin\">Không có đơn đăng ký</p>\n      </div>\n\n      <ion-list>\n        <ion-card *ngFor=\"let item of hrWorkTimeDto; let i = index\" style=\"margin:10px 0px; background:#edeef3;border:1px solid lightgray\">\n          <ion-card-content style=\"padding: 0px 10px;\" > \n            <ion-row>\n              <ion-col>\n                <div class=\"box-contain-content fl-left\"  (click)=\"viewDetail(item.id)\">\n                  <p>\n                      <p class=\"document-type\">Loại chứng từ: \n                        <span class=\"content-name\" *ngIf=\"item.documentType == 'NP'\">Đăng ký Nghỉ phép</span>\n                        <span class=\"content-name\" *ngIf=\"item.documentType == 'CT'\">Đăng ký Công tác</span>\n                        <span class=\"content-name\" *ngIf=\"item.documentType == 'TC'\">Đăng ký Tăng ca</span>\n                        <span class=\"content-name\" *ngIf=\"item.documentType == 'QCC'\">Đăng ký Quên chấm công</span>\n                      </p>\n                      <p class=\"content-name my-reasons\"><span>Lý do: </span>{{item.reasons}}</p>\n                    <p class=\"content-date\"><span>Thời gian bắt đầu: </span> \n                      <span *ngIf=\"item.timeFrom.includes('00:00'); else other_timeFrom\">{{item.timeFrom.replace('00:00','')}}</span>\n                      <ng-template #other_timeFrom><span>{{item.timeFrom}}</span></ng-template></p>\n                    <p class=\"content-date\"><span class=\"font-bold\">Thời gian kết thúc: </span> \n                      <span *ngIf=\"item.timeTo.includes('00:00'); else other_timeTo\">{{item.timeTo.replace('00:00','')}}</span>\n                      <ng-template #other_timeTo><span>{{item.timeTo}}</span></ng-template></p>\n                </div>\n                <ng-container *ngIf=\"item.approverId === null; else disabled_btn\">\n                  <div class=\"box-contain-btn fl-left\" >\n                    <button (click)=\"edit(item.id);\" class=\"btn-xem btn-dsct\">Sửa</button>\n                    <button (click)=\"questionDelete(item.id);\" class=\"btn-xoa btn-dsct\">Xóa</button>\n                </div>\n                </ng-container>\n               \n                <ng-template #disabled_btn>\n                  <div class=\"box-contain-btn fl-left\" >\n                  <button class=\"btn-xem btn-dsct\" disabled>Sửa</button>\n                    <button class=\"btn-xoa btn-dsct\" disabled>Xóa</button>\n                    </div>\n                </ng-template>\n              </ion-col>\n            </ion-row>\n          </ion-card-content> \n        </ion-card>\n      </ion-list>\n\n      <ion-infinite-scroll *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.length > 0\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Đang tải thêm dữ liệu...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/main/cong-tac/DanhSachDangKy/DanhSachDangKy.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/cong-tac/DanhSachDangKy/DanhSachDangKy.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-title-announcement {\n  float: left;\n  width: calc(100% - 40px);\n  padding-left: 3px;\n  font-size: 20px;\n  line-height: 21px; }\n\n.title-announcement {\n  font-size: 13px;\n  color: #3c3c3c; }\n\n.time-ago {\n  text-align: right; }\n\n.fl-left {\n  float: left; }\n\n.box-contain-content {\n  width: calc(100% - 75px);\n  color: #1383BA; }\n\n.box-contain-content .content-name {\n    font-size: 13px; }\n\n.box-contain-content .content-date {\n    font-size: 13px; }\n\n.box-contain-btn {\n  position: relative;\n  width: 75px;\n  height: 100%; }\n\n.btn-dsct {\n  width: 100%;\n  background: #3880ff;\n  color: #fff;\n  font-size: 13px;\n  padding: 7px 14px;\n  border-radius: 3px; }\n\n.btn-xem {\n  position: absolute;\n  top: 5px; }\n\n.btn-xem:disabled {\n  opacity: 0.5; }\n\n.btn-xoa {\n  position: absolute;\n  bottom: 5px;\n  background-color: #ff242e; }\n\n.btn-xoa:disabled {\n  position: absolute;\n  bottom: 5px;\n  background-color: #ff242e;\n  opacity: 0.5; }\n\n.none-margin {\n  margin: 0px !important; }\n\n.totalUnred {\n  display: inline-block;\n  position: relative;\n  background: #5188e8;\n  border-radius: 50%;\n  right: 12px;\n  font-size: 9px;\n  top: 3px;\n  color: #fff;\n  padding: 3px 6px; }\n\n.totalUnred.greater99 {\n  padding: 5px 3px; }\n\n.totalUnred.greater10 {\n  padding: 4px; }\n\n.my-reasons {\n  height: 21px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: pre; }\n\n@media screen and (min-width: 768px) {\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; }\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; } }\n"

/***/ }),

/***/ "./src/app/main/cong-tac/DanhSachDangKy/DanhSachDangKy.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/cong-tac/DanhSachDangKy/DanhSachDangKy.page.ts ***!
  \*********************************************************************/
/*! exports provided: AUTH_KEY, DanhSachDangKy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachDangKy", function() { return DanhSachDangKy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../service/util.service */ "./src/service/util.service.ts");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/timeout */ "./node_modules/rxjs-compat/_esm5/add/operator/timeout.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _service_signalR_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../service/signalR.service */ "./src/service/signalR.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _AppSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../AppSettings */ "./src/AppSettings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};






// import { AnnouncementDto, AnnouncementServiceProxy, HrWorkTimeDto, SendUserDto, TokenAuthServiceProxy, WorkTimeServiceProxy } from '../../../../shared/service-proxies/service-proxies';






// import { Subscription } from 'rxjs';


var App = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"].App;
var AUTH_KEY = 'AUTH';
var DanhSachDangKy = /** @class */ (function () {
    function DanhSachDangKy(_utilService, _router, _alertController, _loadingCtrl, _localStorageService, _tokenAuthServiceProxy, _menu, _signalRSevice, _announcementServiceProxy, workTimeServiceProxy, http) {
        var _this = this;
        this._utilService = _utilService;
        this._router = _router;
        this._alertController = _alertController;
        this._loadingCtrl = _loadingCtrl;
        this._localStorageService = _localStorageService;
        this._tokenAuthServiceProxy = _tokenAuthServiceProxy;
        this._menu = _menu;
        this._signalRSevice = _signalRSevice;
        this._announcementServiceProxy = _announcementServiceProxy;
        this.workTimeServiceProxy = workTimeServiceProxy;
        this.http = http;
        this.moment = moment__WEBPACK_IMPORTED_MODULE_4__();
        this.checkPauseResume = false;
        this.isLoading = false;
        // anouncementArrayDto: AnnouncementDto[];
        this.globalUrlAPI = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_3__["AppConsts"].remoteServiceBaseUrl;
        this.hrWorkTimeDto = [];
        this.totalUnred = 0;
        this.pageSize = 10;
        this.userId = this._localStorageService.getItem(AUTH_KEY).userId;
        this.creatorUserId = this._localStorageService.getItem(AUTH_KEY).userId;
        this._signalRSevice.retrieveMappedObject().subscribe(function (message) {
            _this._announcementServiceProxy.getAllUnRead(_this.creatorUserId).subscribe({
                next: function (res) {
                    if (res) {
                        _this.totalUnred = res.length;
                    }
                }
            });
        });
    }
    DanhSachDangKy.prototype.ngOnInit = function () {
        this.hoVaTen = this._localStorageService.getItem(AUTH_KEY).hoVaTen;
        this.tenCty = this._localStorageService.getItem(AUTH_KEY).tenCty;
        this.avatar = this._localStorageService.getItem(AUTH_KEY).image;
    };
    DanhSachDangKy.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDefault();
        this._announcementServiceProxy.getAllUnRead(this.creatorUserId).subscribe({
            next: function (res) {
                if (res) {
                    _this.totalUnred = res.length;
                }
            },
            error: function (err) {
                _this.showAlertController('Lỗi kết nối mạng, vui lòng thử lại.');
                return;
            }
        });
        this.getListMyWorkTime();
    };
    DanhSachDangKy.prototype.getListMyWorkTime = function () {
        var _this = this;
        this.page = 1;
        this.workTimeServiceProxy.getListMyWorktime(this.userId, this.page, this.pageSize).subscribe({
            next: function (res) {
                _this.hrWorkTimeDto = res;
                _this.dismissLoading();
            },
            error: function (err) {
                _this.dismissLoading();
                console.log(err);
            }
        });
    };
    DanhSachDangKy.prototype.edit = function (id) {
        if (id) {
            this._router.navigate(['app/main/edit-congtac'], {
                queryParams: { id: id }
            });
        }
    };
    DanhSachDangKy.prototype.onCreateOrEdit = function (id, thongtinWorkTime) {
        var _this = this;
        this.loadingDefault();
        var formData = new FormData;
        formData.append('Id', id);
        formData.append('NextApproverId', thongtinWorkTime.nextApproverId.toString());
        formData.append('Reasons', thongtinWorkTime.reasons);
        formData.append('Image', this.avatar);
        formData.append('HoVaTen', this.hoVaTen);
        formData.append('TenCty', this.tenCty);
        formData.append('DocumentType', thongtinWorkTime.documentType);
        formData.append('CreatorUserId', thongtinWorkTime.creatorUserId.toString());
        formData.append('Email', thongtinWorkTime.emailAddress);
        if (thongtinWorkTime.truongNhomId)
            formData.append('TruongNhomId', thongtinWorkTime.truongNhomId.toString());
        if (thongtinWorkTime.truongPhongId)
            formData.append('TruongPhongId', thongtinWorkTime.truongPhongId.toString());
        if (thongtinWorkTime.giamDocKhoiId)
            formData.append('GiamDocKhoiId', thongtinWorkTime.giamDocKhoiId.toString());
        if (thongtinWorkTime.tcnsId)
            formData.append('TcnsId', thongtinWorkTime.tcnsId.toString());
        if (thongtinWorkTime.giamDocDieuHanhId)
            formData.append('GiamDocDieuHanhId', thongtinWorkTime.giamDocDieuHanhId.toString());
        formData.append('TimeFrom', thongtinWorkTime.timeFrom.format('HH:mm DD/MM/YYYY'));
        formData.append('TimeTo', thongtinWorkTime.timeTo.format('HH:mm DD/MM/YYYY'));
        formData.append('DocumentType', thongtinWorkTime.documentType);
        this.http.post(_AppSettings__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].API_ENDPOINT + "/api/WorkTime/CreateOrEditForMobile", formData).subscribe({
            next: function (res) {
                var sendUserDto = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["SendAnnouncement_ENTITY"]();
                sendUserDto = res.result;
                _this._announcementServiceProxy.sendMessageToClient(sendUserDto).subscribe({
                    next: function (res) { }
                });
                _this.getListMyWorkTime();
            }, error: function (err) {
                console.log(err);
                _this.showAlertController('Có lỗi xuất hiện, vui lòng thử lại.');
            },
        });
    };
    DanhSachDangKy.prototype.questionDelete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Thông báo',
                            message: 'Bạn có chắc muốn xóa đơn đăng ký này không?',
                            buttons: [{
                                    text: 'Đồng ý', handler: function () {
                                        _this.delete(id);
                                    }
                                }, { text: 'Hủy', role: 'cancel' }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DanhSachDangKy.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loadingDefault();
                this.workTimeServiceProxy.deleteWorkTime(id).subscribe({
                    next: function (res) { return __awaiter(_this, void 0, void 0, function () {
                        var alertController, alert;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.getListMyWorkTime();
                                    alertController = this._alertController;
                                    return [4 /*yield*/, alertController.create({
                                            header: 'Thông báo',
                                            message: 'Xóa đơn đăng ký thành công',
                                            buttons: ['OK']
                                        })];
                                case 1:
                                    alert = _a.sent();
                                    return [4 /*yield*/, alert.present()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); },
                    error: function (err) {
                        _this.dismissLoading();
                        console.log(err);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    DanhSachDangKy.prototype.loadData = function (event) {
        var _this = this;
        if (this.hrWorkTimeDto.length > 0) {
            setTimeout(function () {
                event.target.complete();
                // App logic to determine if all data is loaded
                // and disable the infinite scroll
                _this.page += 1;
                _this.workTimeServiceProxy.getListMyWorktime(_this.userId, _this.page, _this.pageSize).subscribe({
                    next: function (res) {
                        var list = res;
                        for (var _i = 0, _a = list.map(function (value, index) { return ({ index: index, value: value }); }); _i < _a.length; _i++) {
                            var _b = _a[_i], index = _b.index, value = _b.value;
                            _this.hrWorkTimeDto.push(list[index]);
                        }
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
                if (_this.hrWorkTimeDto.length == 1000) {
                    event.target.disabled = true;
                }
            }, 500);
        }
    };
    DanhSachDangKy.prototype.showAlertController = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alertController, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dismissLoading();
                        alertController = this._alertController;
                        return [4 /*yield*/, alertController.create({
                                header: 'Thông báo',
                                message: message,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DanhSachDangKy.prototype.viewDetail = function (id) {
        if (id) {
            this._router.navigate(['app/main/chitiet-dangky'], {
                queryParams: { id: id }
            });
        }
    };
    DanhSachDangKy.prototype.loadingDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this._loadingCtrl.create({
                            // message: 'Đang xử lý........',
                            // duration: 3000
                            }).then(function (a) {
                                a.present().then(function () {
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DanhSachDangKy.prototype.dismissLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this._loadingCtrl.dismiss().then(function () { })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DanhSachDangKy.prototype.greaterThan = function (sub, num) {
        return true ? sub <= num : undefined;
    };
    DanhSachDangKy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'danhsachdangky',
            template: __webpack_require__(/*! ./DanhSachDangKy.page.html */ "./src/app/main/cong-tac/DanhSachDangKy/DanhSachDangKy.page.html"),
            styles: [__webpack_require__(/*! ./DanhSachDangKy.page.scss */ "./src/app/main/cong-tac/DanhSachDangKy/DanhSachDangKy.page.scss")],
        }),
        __metadata("design:paramtypes", [_service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["TokenAuthServiceProxy"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _service_signalR_service__WEBPACK_IMPORTED_MODULE_10__["SignalRService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["AnnouncementServiceProxy"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["WorkTimeServiceProxy"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]])
    ], DanhSachDangKy);
    return DanhSachDangKy;
}());



/***/ }),

/***/ "./src/app/main/cong-tac/EditCongTac/EditCongTac.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/cong-tac/EditCongTac/EditCongTac.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n   <div class=\"content-app-desktop\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"app/main/home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Chỉnh sửa chứng từ</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button color=\"dark\" href=\"app/main/announcement\">\n          <span class=\"fa fa-bell\" style=\"font-size: 25px; color: #606060;\"></span>\n          <span *ngIf=\"totalUnred > 0 && greaterThan(totalUnred,9)\" class=\"totalUnred\">{{totalUnred}}</span> \n          <span *ngIf=\"totalUnred >= 10 && greaterThan(totalUnred,99)\" class=\"totalUnred greater10\">{{totalUnred}}</span> \n          <span *ngIf=\"totalUnred > 99\" class=\"totalUnred greater99\">99+</span> \n        </ion-button>        \n      </ion-buttons>\n    </ion-toolbar>\n   </div>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class=\"content-app-desktop\">\n      <ion-row>\n        <ion-col> \n          <button [className]=\"tabActive == 1 ? 'tab-active tab-btn' : 'tab-inactive tab-btn'\" (click)=\"chooseTab(1)\" >\n            Buổi sáng\n          </button>\n          <button [className]=\"tabActive == 2 ? 'tab-active tab-btn' : 'tab-inactive tab-btn'\" (click)=\"chooseTab(2)\" >\n            Buổi chiều\n          </button>\n          <button [className]=\"tabActive == 3 ? 'tab-active tab-btn' : 'tab-inactive tab-btn'\" (click)=\"chooseTab(3)\" >\n            Trong ngày\n          </button>\n          <button [className]=\"tabActive == 4 ? 'tab-active tab-btn' : 'tab-inactive tab-btn'\"  (click)=\"chooseTab(4)\" >\n            Nhiều ngày\n          </button>\n        </ion-col>\n      </ion-row>\n       \n        <form #f=\"ngForm\" (ngSubmit)=\"onCreateOrEdit(f)\">\n          <div class=\"group-form\">\n                <ion-row>\n                  <ion-col> \n                    <p class=\"label-lydo\">Chọn loại đăng ký: </p>\n                    <div class=\"type-filter\" *ngIf=\"tabActive == 4; else otherDocumentType\">\n                        <ion-select class=\"custom-options\" interface=\"popover\" [(ngModel)]=\"documentType\" name=\"documentType\">\n                          <ion-select-option value=\"NP\">Đăng ký nghỉ phép</ion-select-option>\n                          <ion-select-option value=\"CT\" class=\"brown-option\">Đăng ký công tác</ion-select-option>\n                        </ion-select>\n                    </div>\n                    <ng-template #otherDocumentType>\n                      <div class=\"type-filter\">\n                        <ion-select class=\"custom-options\" interface=\"popover\" [(ngModel)]=\"documentType\" name=\"documentType\">\n                          <ion-select-option value=\"NP\">Đăng ký nghỉ phép</ion-select-option>\n                          <ion-select-option value=\"CT\" class=\"brown-option\">Đăng ký công tác</ion-select-option>\n                          <ion-select-option value=\"TC\" class=\"brown-option\">Đăng ký tăng ca</ion-select-option>\n                          <ion-select-option value=\"QCC\" class=\"brown-option\">Quên chấm công</ion-select-option>\n                        </ion-select>\n                    </div>\n                    </ng-template>\n                  </ion-col>\n                </ion-row>\n          </div>\n          <div class=\"group-form\" *ngIf=\"documentType == 'NP'\">\n            <ion-row>\n              <ion-col>\n                <p class=\"label-lydo\">Loại nghỉ phép</p>\n                <div class=\"type-filter\">\n                  <ion-select interface=\"popover\" name=\"loaiNghiPhep\" [(ngModel)]=\"loaiNghiPhep\">\n                    <ion-select-option value=\"NGHIPHEPNAM\">Nghỉ phép năm</ion-select-option>\n                    <ion-select-option value=\"KETHON\">Nghỉ kết hôn</ion-select-option>\n                    <ion-select-option value=\"TANGCHE\">Nghỉ tang chế</ion-select-option>\n                    <ion-select-option value=\"KHONGLUONG\">Nghỉ không lương</ion-select-option>\n                    <ion-select-option value=\"THAISAN\">Nghỉ thai sản</ion-select-option>\n                    <ion-select-option value=\"OMDAU\">Nghỉ ốm đau, tai nạn</ion-select-option>\n                </ion-select>\n                </div>\n              </ion-col>\n            </ion-row>\n        </div>\n          <div class=\"group-form\">\n              <ion-row>\n                <ion-col>\n                  <p class=\"label-lydo\">Lý do: </p>\n              <ion-textarea maxlength=\"100\" type=\"text\" rows=\"3\" ngModel name=\"lydo\" [(ngModel)]=\"lydo\"\n                style=\"border: 1px solid lightgray;border-radius: 10px;padding: 0 8px;\" placeholder=\"Nhập lý do\" required>\n              </ion-textarea>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div class=\"group-form\" *ngIf=\"documentType == 'QCC' || documentType == 'CT'\">\n              <ion-row>\n                <ion-col>\n                  <p class=\"label-lydo\">Hình ảnh chứng minh</p>\n                  <div *ngIf=\"images.length == 0 && oldAttachment.length > 0\">\n                      <img src=\"{{globalUrlAPI + oldAttachment}}\">\n                  </div>\n                  <div *ngIf=\"images.length === 0\">\n                    <ion-button class=\"choose-img\" size=\"small\" fill=\"clear\" color=\"lightgray\" (click)=\"selectImage()\">\n                      <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n                      Chọn ảnh\n                    </ion-button>\n                  </div>\n                  <ion-list>\n                    <ion-item *ngFor=\"let img of images; index as pos\">\n                        <ion-thumbnail slot=\"start\">\n                          <ion-img [src]=\"img.path\"></ion-img>\n                        </ion-thumbnail>\n                        <ion-button slot=\"end\" fill=\"clear\" (click)=\"confirmDeleteImage(img, pos, true)\">\n                          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                        </ion-button>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div class=\"group-form\">\n              <ion-list>\n                <ion-row *ngIf=\"tabActive == 1 || tabActive == 2\">\n                  <ion-col> \n                    <ion-item style=\"--padding-start: 0px;--border-width:0px; border: 1px solid #d3d3d3; border-radius: 7px;\">\n                      <ion-label style=\"padding-left: 16px;\">Chọn ngày:</ion-label>\n                      <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"2020\" max=\"2099\" [(ngModel)]=\"chonNgay\" name=\"chonNgay\" required></ion-datetime>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"tabActive == 3\">\n                  <ion-col> \n                    <ion-item style=\"--padding-start: 0px;--border-width:0px; border: 1px solid #d3d3d3; border-radius: 7px;\">\n                      <ion-label style=\"padding-left: 16px;\">Chọn ngày:</ion-label>\n                      <ion-datetime  displayFormat=\"DD/MM/YYYY\" min=\"2020\" max=\"2099\" [(ngModel)]=\"chonNgay\" name=\"chonNgay\" (ionChange)=\"changeToGetTime($event)\" required></ion-datetime>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item style=\"--padding-start: 0px;--border-width:0px; border: 1px solid #d3d3d3; border-radius: 7px;\">\n                      <ion-label style=\"padding-left: 16px;\">Giờ bắt đầu:</ion-label>\n                      <ion-datetime  displayFormat=\"HH:mm\" [(ngModel)]=\"valueFirstTime\" name=\"valueFirstTime\" required></ion-datetime>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item style=\"--padding-start: 0px;--border-width:0px; border: 1px solid #d3d3d3; border-radius: 7px;\">\n                      <ion-label style=\"padding-left: 16px;\">Giờ kết thúc:</ion-label>\n                      <ion-datetime displayFormat=\"HH:mm\" [(ngModel)]=\"valueLastTime\" name=\"valueLastTime\" required></ion-datetime>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"tabActive == 4\">\n                  <ion-col> \n                    <ion-item style=\"--padding-start: 0px;--border-width:0px; border: 1px solid #d3d3d3; border-radius: 7px;\">\n                      <ion-label style=\"padding-left: 16px;\">Từ ngày:</ion-label>\n                      <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"2020\" max=\"2099\" [(ngModel)]=\"tuNgay\" name=\"tuNgay\"  required></ion-datetime>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col> <!-- label - position=\"stacked\"-->\n                    <ion-item style=\"--padding-start: 0px;--border-width:0px; border: 1px solid #d3d3d3; border-radius: 7px;\">\n                      <ion-label style=\"padding-left: 16px;\">Đến ngày:</ion-label>\n                      <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"2020\" max=\"2099\" [(ngModel)]=\"denNgay\" name=\"denNgay\"  required></ion-datetime>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </div>\n          <ion-button shape=\"round\" color=\"primary\" expand=\"block\" type=\"submit\" block [disabled]=\"!f.valid\">Chỉnh sửa\n          </ion-button>\n        </form>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/main/cong-tac/EditCongTac/EditCongTac.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/cong-tac/EditCongTac/EditCongTac.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-datetime {\n  position: relative;\n  border-radius: 5px; }\n\n.caret-down-datetime {\n  position: absolute;\n  top: 8px;\n  right: 36px; }\n\n:host(.in-item) {\n  position: static;\n  max-width: 55%; }\n\n#autocomplete {\n  position: absolute;\n  z-index: 1000;\n  background: #fff;\n  width: calc(100% - 20px);\n  top: 40px;\n  left: 10px;\n  max-height: 175px;\n  overflow-y: auto;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n\n.hovaten {\n  position: relative; }\n\n.autocomplete_li {\n  list-style-type: none;\n  padding: 8px 20px;\n  border-bottom: 1px solid #eee; }\n\n.mr-10 {\n  display: inline-block;\n  margin-right: 10px; }\n\n.type-filter {\n  border: 1px solid #eee;\n  border-radius: 8px; }\n\n.box-datetime {\n  padding: 11px 6px 8px 8px; }\n\n.box-datetime::after {\n  font-family: fontAwesome;\n  content: \"\\f0dd\";\n  font-size: 15px;\n  display: inline-block;\n  position: absolute;\n  top: 18px;\n  color: #989797;\n  right: 17px; }\n\n.clearfix {\n  overflow: auto; }\n\n.info-check {\n  text-align: center;\n  width: 80%;\n  font-weight: bold;\n  color: #3880ff;\n  border: 1px dotted #3880ff;\n  padding: 2px;\n  font-style: italic;\n  border-radius: 4px; }\n\n.label-lydo {\n  font-size: 0.9em;\n  margin: 6px 5px 6px 0px; }\n\n.totalUnred {\n  display: inline-block;\n  position: relative;\n  background: #5188e8;\n  border-radius: 50%;\n  right: 12px;\n  font-size: 9px;\n  top: 3px;\n  color: #fff;\n  padding: 3px 6px; }\n\n.totalUnred.greater99 {\n  padding: 5px 3px; }\n\n.totalUnred.greater10 {\n  padding: 4px; }\n\n.tab-inactive {\n  color: #000;\n  background-color: #eee; }\n\n.tab-active {\n  color: #ffffff;\n  background-color: #FEA500; }\n\n.tab-btn {\n  padding: 6px 7px;\n  margin-top: 6px;\n  border-radius: 3px;\n  font-weight: 500;\n  font-size: 12px;\n  margin-right: 8px; }\n\n.tab-btn:last-child {\n  margin-right: 0px; }\n\n.type-filter {\n  border: 1px solid #eee;\n  border-radius: 8px; }\n\n.choose-img {\n  border: 1px solid #4889fd;\n  border-radius: 7px;\n  background: #4889fd;\n  color: #fff; }\n\nion-datetime .datetime-text {\n  padding-right: 2px; }\n\n@media screen and (min-width: 768px) {\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; }\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; } }\n"

/***/ }),

/***/ "./src/app/main/cong-tac/EditCongTac/EditCongTac.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/cong-tac/EditCongTac/EditCongTac.page.ts ***!
  \***************************************************************/
/*! exports provided: AUTH_KEY, STORAGE_KEY, EditCongTac */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_KEY", function() { return STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCongTac", function() { return EditCongTac; });
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_signalR_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/signalR.service */ "./src/service/signalR.service.ts");
/* harmony import */ var _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _AppSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../AppSettings */ "./src/AppSettings.ts");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/AppConsts */ "./src/shared/AppConsts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};
















var AUTH_KEY = 'AUTH';
var STORAGE_KEY = 'my_images';
var EditCongTac = /** @class */ (function () {
    function EditCongTac(_loadingCtrl, _alertController, _router, _signalRSevice, _announcementServiceProxy, _localStorageService, camera, file, webView, _platform, storage, toastController, actionSheetController, ref, http, filePath, workTimeServiceProxy, acRouter) {
        var _this = this;
        this._loadingCtrl = _loadingCtrl;
        this._alertController = _alertController;
        this._router = _router;
        this._signalRSevice = _signalRSevice;
        this._announcementServiceProxy = _announcementServiceProxy;
        this._localStorageService = _localStorageService;
        this.camera = camera;
        this.file = file;
        this.webView = webView;
        this._platform = _platform;
        this.storage = storage;
        this.toastController = toastController;
        this.actionSheetController = actionSheetController;
        this.ref = ref;
        this.http = http;
        this.filePath = filePath;
        this.workTimeServiceProxy = workTimeServiceProxy;
        this.acRouter = acRouter;
        this.globalUrlAPI = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_14__["AppConsts"].remoteServiceBaseUrl + '/attachments/';
        this.dateFrom = moment__WEBPACK_IMPORTED_MODULE_4__().clone().locale('vi').add(1, 'days');
        this.dateTo = moment__WEBPACK_IMPORTED_MODULE_4__().clone().locale('vi').add(1, 'days');
        this.isLoading = false;
        this.items = [];
        this.tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        this.chonNgay = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1);
        this.tuNgay = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1);
        this.denNgay = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1);
        this.lydo = '';
        this.totalUnred = 0;
        this.valueFirstTime = '07:45';
        this.valueLastTime = '17:30';
        this.tabActive = 1;
        this.documentType = 'NP';
        this.images = [];
        this.oldAttachment = '';
        this.hrWorkTimeDto = {};
        this.loaiNghiPhep = 'NGHIPHEPNAM';
        this.id = this.acRouter.snapshot.queryParams.id;
        _platform.ready().then(function () {
            _this._platform.ready().then(function () {
                _this.loadStoredImages();
            });
        });
        this.creatorUserId = this._localStorageService.getItem(AUTH_KEY).userId;
        this._signalRSevice.retrieveMappedObject().subscribe(function (message) {
            _this._announcementServiceProxy.getAllUnRead(_this.creatorUserId).subscribe({
                next: function (res) {
                    if (res) {
                        _this.totalUnred = res.length;
                    }
                }
            });
        });
    }
    EditCongTac.prototype.ngOnInit = function () {
        this.hoVaTen = this._localStorageService.getItem(AUTH_KEY).hoVaTen;
        this.tenCty = this._localStorageService.getItem(AUTH_KEY).tenCty;
        this.avatar = this._localStorageService.getItem(AUTH_KEY).image;
        this.branchType = this._localStorageService.getItem(AUTH_KEY).branchType;
        this.branchId = this._localStorageService.getItem(AUTH_KEY).branchId;
        this.email = this._localStorageService.getItem(AUTH_KEY).email;
    };
    EditCongTac.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDefault();
        this._announcementServiceProxy.getAllUnRead(this.creatorUserId).subscribe({
            next: function (res) {
                if (res) {
                    _this.totalUnred = res.length;
                }
            },
            error: function (err) {
                _this.showAlertController('Lỗi kết nối mạng, vui lòng thử lại.');
                return;
            }
        });
        this.getDetail();
    };
    EditCongTac.prototype.getDetail = function () {
        var _this = this;
        this.workTimeServiceProxy.getWorkTimeDetail(this.id).subscribe({
            next: function (res) { return __awaiter(_this, void 0, void 0, function () {
                var timeFromMoment, timeToMoment;
                return __generator(this, function (_a) {
                    this.hrWorkTimeDto = res;
                    timeFromMoment = res.timeFrom.clone().locale('vi').format('HH:mm:ss DD/MM/YYYY');
                    timeToMoment = res.timeTo.clone().locale('vi').format('HH:mm:ss DD/MM/YYYY');
                    if (timeFromMoment.includes('00:00:00') && timeToMoment.includes('00:00:00')) {
                        this.tabActive = 4;
                    }
                    else if ((timeFromMoment.includes('07:30:00') && timeToMoment.includes('12:00:00')) || timeFromMoment.includes('07:45:00') && timeToMoment.includes('12:00:00')) {
                        this.tabActive = 1;
                    }
                    else if (timeFromMoment.includes('13:00:00') && timeToMoment.includes('17:30:00')) {
                        this.tabActive = 2;
                    }
                    else {
                        this.tabActive = 3;
                    }
                    this.chonNgay = res.timeFrom.clone().locale('vi').format('YYYY-MM-DD') + 'T' + res.timeFrom.clone().locale('vi').format('HH:mm:ss');
                    this.denNgay = res.timeTo.clone().locale('vi').format('YYYY-MM-DD') + 'T' + res.timeTo.clone().locale('vi').format('HH:mm:ss');
                    ;
                    if (this.tabActive === 3) {
                        this.valueFirstTime = moment__WEBPACK_IMPORTED_MODULE_4__(res.timeFrom).clone().locale('vi').format('HH:mm');
                        this.valueLastTime = moment__WEBPACK_IMPORTED_MODULE_4__(res.timeTo).clone().locale('vi').format('HH:mm');
                    }
                    if (res.attachment)
                        this.oldAttachment = res.attachment;
                    this.documentType = res.documentType;
                    if (res.loaiNghiPhep)
                        this.loaiNghiPhep = res.loaiNghiPhep;
                    this.lydo = res.reasons;
                    this.dismissLoading();
                    return [2 /*return*/];
                });
            }); },
            error: function (err) {
                _this.dismissLoading();
                console.log(err);
            }
        });
    };
    EditCongTac.prototype.loadStoredImages = function () {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (images) {
            if (images) {
                var arr = JSON.parse(images);
                _this.images = [];
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var img = arr_1[_i];
                    var filePath = _this.file.dataDirectory + img;
                    var resPath = _this.pathForImage(filePath);
                    _this.images.push({ name: img, path: resPath, filePath: filePath });
                }
            }
        });
    };
    EditCongTac.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webView.convertFileSrc(img);
            return converted;
        }
    };
    EditCongTac.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCongTac.prototype.selectImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Chọn nguồn ảnh",
                            buttons: [{
                                    text: 'Chọn ảnh từ thư viện',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Sử dụng camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Hủy',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCongTac.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this._platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        });
    };
    EditCongTac.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            _this.updateStoredImages(newFileName);
        }, function (error) {
            _this.presentToast('Lỗi');
        });
    };
    EditCongTac.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    EditCongTac.prototype.updateStoredImages = function (name) {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            if (!arr) {
                var newImages = [name];
                _this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            }
            else {
                arr.push(name);
                _this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }
            var filePath = _this.file.dataDirectory + name;
            var resPath = _this.pathForImage(filePath);
            var newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };
            _this.images = [newEntry].concat(_this.images);
            _this.ref.detectChanges(); // trigger change detection cycle
        });
    };
    EditCongTac.prototype.confirmDeleteImage = function (imgEntry, position, flag) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Thông báo',
                            message: 'Bạn có chắc muốn xóa hình này không?',
                            buttons: [{ text: 'Hủy', role: 'cancel' }, {
                                    text: 'Đồng ý', handler: function () {
                                        _this.deleteImage(imgEntry, position, flag);
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCongTac.prototype.deleteImage = function (imgEntry, position, flag) {
        var _this = this;
        this.images.splice(position, 1);
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            var filtered = arr.filter(function (name) { return name != imgEntry.name; });
            _this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
            var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
            _this.file.removeFile(correctPath, imgEntry.name).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(flag === true)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.presentToast('Đã xóa hình ảnh, vui lòng chọn lại.')];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    EditCongTac.prototype.onCreateOrEdit = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var formData;
            var _this = this;
            return __generator(this, function (_a) {
                this.loadingDefault();
                if (this.images.length > 0) {
                    this.file.resolveLocalFilesystemUrl(this.images[0].filePath)
                        .then(function (entry) {
                        entry.file(function (file) { return _this.readFile(file, form); });
                    })
                        .catch(function (err) {
                        _this.presentToast('Lỗi khi đọc file');
                    });
                }
                else {
                    formData = new FormData();
                    this.uploadImageData(formData, form);
                }
                return [2 /*return*/];
            });
        });
    };
    EditCongTac.prototype.readFile = function (file, form) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function () {
            var formData = new FormData();
            var imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('Attachment', imgBlob, file.name);
            if (_this.documentType === 'QCC' || _this.documentType === 'CT')
                formData.append('Attachment', imgBlob, file.name);
            _this.uploadImageData(formData, form);
        };
        reader.readAsArrayBuffer(file);
    };
    EditCongTac.prototype.uploadImageData = function (formData, form) {
        return __awaiter(this, void 0, void 0, function () {
            var formatTuNgayForCompare, formatDenNgayForCompare, formatFirstTime, formatLastTime, tuNgayDate, denNgayDate, tuNgayFromForm, denNgayFromForm, formatTuNgay, formatDenNgay, timeTemp, timeTemp, tuNgayFromForm, denNgayFromForm, formatTuNgay, formatDenNgay, timeTemp, timeTemp, tuNgayFromForm, denNgayFromForm, formatTuNgay, formatDenNgay, tuNgayFromForm, denNgayFromForm, firstTimeFromForm, lastTimeFromForm, formatTuNgay, formatDenNgay, tuNgayDateTime, denNgayDateTime, momentDate;
            return __generator(this, function (_a) {
                if (form.value.lydo.trim().length <= 0) {
                    this.showAlertController('Không được bỏ trống mục lý do.');
                    return [2 /*return*/, false];
                }
                formatTuNgayForCompare = '';
                formatDenNgayForCompare = '';
                formatFirstTime = '';
                formatLastTime = '';
                tuNgayDate = '';
                denNgayDate = '';
                if (this.tabActive == 4) {
                    tuNgayFromForm = form.value.tuNgay;
                    denNgayFromForm = form.value.denNgay;
                    formatTuNgay = '';
                    formatDenNgay = '';
                    if (typeof (tuNgayFromForm) !== 'string') {
                        timeTemp = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '00:00:00';
                        formatTuNgay = moment__WEBPACK_IMPORTED_MODULE_4__(timeTemp).clone().format('dddd') == 'Monday' ? tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text : tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text;
                        formatTuNgayForCompare = moment__WEBPACK_IMPORTED_MODULE_4__(timeTemp).clone().format('dddd') == 'Monday' ? tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '07:30:00' : tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '07:45:00';
                        tuNgayDate = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text;
                    }
                    else {
                        timeTemp = moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '00:00:00';
                        formatTuNgay = moment__WEBPACK_IMPORTED_MODULE_4__(timeTemp).clone().format('dddd') == 'Monday' ? moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('DD/MM/YYYY') : moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('DD/MM/YYYY');
                        formatTuNgayForCompare = moment__WEBPACK_IMPORTED_MODULE_4__(timeTemp).clone().format('dddd') == 'Monday' ? moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '07:30:00' : moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '07:45:00';
                        tuNgayDate = moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('YYYY-MM-DD');
                    }
                    formData.append('TimeFrom', formatTuNgay);
                    // body.timeFrom = formatTuNgay;
                    formatDenNgay = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.day.text + '/' + denNgayFromForm.month.text + '/' + denNgayFromForm.year.text : moment__WEBPACK_IMPORTED_MODULE_4__(denNgayFromForm).format('DD/MM/YYYY');
                    formatDenNgayForCompare = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text + 'T' + '12:00:00' : moment__WEBPACK_IMPORTED_MODULE_4__(denNgayFromForm).format('YYYY-MM-DD') + 'T' + '12:00:00';
                    denNgayDate = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text : moment__WEBPACK_IMPORTED_MODULE_4__(denNgayFromForm).format('YYYY-MM-DD');
                    formData.append('TimeTo', formatDenNgay);
                    //  body.timeTo = formatDenNgay;
                }
                else {
                    if (this.tabActive == 1) {
                        tuNgayFromForm = form.value.chonNgay;
                        denNgayFromForm = form.value.chonNgay;
                        formatTuNgay = '';
                        formatDenNgay = '';
                        if (typeof (tuNgayFromForm) !== 'string') {
                            timeTemp = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '00:00:00';
                            formatTuNgay = moment__WEBPACK_IMPORTED_MODULE_4__(timeTemp).clone().format('dddd') == 'Monday' ? tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text + ' ' + '07:30' : tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text + ' ' + '07:45';
                            formatTuNgayForCompare = moment__WEBPACK_IMPORTED_MODULE_4__(timeTemp).clone().format('dddd') == 'Monday' ? tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '07:30:00' : tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '07:45:00';
                            tuNgayDate = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text;
                        }
                        else {
                            timeTemp = moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '00:00:00';
                            formatTuNgay = (moment__WEBPACK_IMPORTED_MODULE_4__(timeTemp).clone().format('dddd') == 'Monday') ? moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('DD/MM/YYYY') + ' ' + '07:30' : moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('DD/MM/YYYY') + ' ' + '07:45';
                            formatTuNgayForCompare = (moment__WEBPACK_IMPORTED_MODULE_4__(timeTemp).clone().format('dddd') == 'Monday') ? moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '07:30:00' : moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '07:45:00';
                            ;
                            tuNgayDate = moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('YYYY-MM-DD');
                        }
                        formData.append('TimeFrom', formatTuNgay += ':00');
                        //  body.timeFrom = formatTuNgay;
                        formatDenNgay = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.day.text + '/' + denNgayFromForm.month.text + '/' + denNgayFromForm.year.text + ' ' + '12:00' : moment__WEBPACK_IMPORTED_MODULE_4__(denNgayFromForm).format('DD/MM/YYYY') + ' ' + '12:00';
                        formatDenNgayForCompare = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text + 'T' + '12:00:00' : moment__WEBPACK_IMPORTED_MODULE_4__(denNgayFromForm).format('YYYY-MM-DD') + 'T' + '12:00:00';
                        denNgayDate = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text : moment__WEBPACK_IMPORTED_MODULE_4__(denNgayFromForm).format('YYYY-MM-DD');
                        formData.append('TimeTo', formatDenNgay += ':00');
                        //  body.timeTo = formatDenNgay;
                    }
                    else if (this.tabActive == 2) {
                        tuNgayFromForm = form.value.chonNgay;
                        denNgayFromForm = form.value.chonNgay;
                        formatTuNgay = '';
                        formatDenNgay = '';
                        formatTuNgay = typeof (tuNgayFromForm) !== 'string' ? tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text + ' ' + '13:00' : moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('DD/MM/YYYY') + ' ' + '13:00';
                        formatTuNgayForCompare = typeof (tuNgayFromForm) !== 'string' ? tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '13:00:00' : moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '13:00:00';
                        tuNgayDate = typeof (tuNgayFromForm) !== 'string' ? tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text : moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('YYYY-MM-DD');
                        formData.append('TimeFrom', formatTuNgay += ':00');
                        // body.timeFrom = formatTuNgay;
                        formatDenNgay = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.day.text + '/' + denNgayFromForm.month.text + '/' + denNgayFromForm.year.text + ' ' + '17:30' : moment__WEBPACK_IMPORTED_MODULE_4__(denNgayFromForm).format('DD/MM/YYYY') + ' ' + '17:30';
                        formatDenNgayForCompare = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text + 'T' + '17:30:00' : moment__WEBPACK_IMPORTED_MODULE_4__(denNgayFromForm).format('YYYY-MM-DD') + 'T' + '17:30:00';
                        denNgayDate = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text : moment__WEBPACK_IMPORTED_MODULE_4__(denNgayFromForm).format('YYYY-MM-DD');
                        formData.append('TimeTo', formatDenNgay += ':00');
                        // body.timeTo = formatDenNgay;
                    }
                    else if (this.tabActive == 3) {
                        tuNgayFromForm = form.value.chonNgay;
                        denNgayFromForm = form.value.chonNgay;
                        firstTimeFromForm = form.value.valueFirstTime;
                        lastTimeFromForm = form.value.valueLastTime;
                        formatTuNgay = '';
                        formatDenNgay = '';
                        if (typeof (tuNgayFromForm) !== 'string') {
                            formatFirstTime = typeof (firstTimeFromForm) !== 'string' ? firstTimeFromForm.hour.text + ':' + firstTimeFromForm.minute.text : firstTimeFromForm;
                            formatLastTime = typeof (lastTimeFromForm) !== 'string' ? lastTimeFromForm.hour.text + ':' + lastTimeFromForm.minute.text : lastTimeFromForm;
                            formatTuNgay = tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text + ' ' + formatFirstTime;
                            formatTuNgayForCompare = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + formatFirstTime + ':00';
                            formatDenNgay = denNgayFromForm.day.text + '/' + denNgayFromForm.month.text + '/' + denNgayFromForm.year.text + ' ' + formatLastTime;
                            formatDenNgayForCompare = denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text + 'T' + formatLastTime + ':00';
                            tuNgayDate = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text;
                            denNgayDate = denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text;
                        }
                        else {
                            if (typeof (firstTimeFromForm) !== 'string') {
                                formatFirstTime = firstTimeFromForm.hour.text + ':' + firstTimeFromForm.minute.text;
                            }
                            else {
                                formatFirstTime = firstTimeFromForm;
                            }
                            formatTuNgay = moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('DD/MM/YYYY') + ' ' + formatFirstTime;
                            formatTuNgayForCompare = moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + formatFirstTime + ':00';
                            tuNgayDate = moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('YYYY-MM-DD');
                            if (typeof (lastTimeFromForm) !== 'string') {
                                formatLastTime = typeof (lastTimeFromForm) !== 'string' ? lastTimeFromForm.hour.text + ':' + lastTimeFromForm.minute.text : lastTimeFromForm;
                            }
                            else {
                                formatLastTime = lastTimeFromForm;
                            }
                            formatDenNgay = moment__WEBPACK_IMPORTED_MODULE_4__(denNgayFromForm).format('DD/MM/YYYY') + ' ' + formatLastTime;
                            formatDenNgayForCompare = moment__WEBPACK_IMPORTED_MODULE_4__(denNgayFromForm).format('YYYY-MM-DD') + 'T' + formatLastTime + ':00';
                            denNgayDate = moment__WEBPACK_IMPORTED_MODULE_4__(denNgayFromForm).format('YYYY-MM-DD');
                        }
                        // body.timeFrom += ':00';
                        // body.timeTo += ':00';
                        formData.append('TimeFrom', formatTuNgay += ':00');
                        formData.append('TimeTo', formatDenNgay += ':00');
                    }
                }
                if (moment__WEBPACK_IMPORTED_MODULE_4__(formatTuNgayForCompare) > moment__WEBPACK_IMPORTED_MODULE_4__(formatDenNgayForCompare)) {
                    this.dismissLoading();
                    this.showAlertController('Thời gian đăng ký không hợp lệ');
                    return [2 /*return*/, false];
                }
                if (this.tabActive === 4) {
                    if (moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayDate + 'T00:00:00') >= moment__WEBPACK_IMPORTED_MODULE_4__(denNgayDate + 'T00:00:00')) {
                        this.showAlertController('Thời gian đăng ký không hợp lệ');
                        return [2 /*return*/, false];
                    }
                }
                if (this.documentType !== 'TC') {
                    if ((moment__WEBPACK_IMPORTED_MODULE_4__(formatTuNgayForCompare).clone().format('dddd') === 'Saturday') || (moment__WEBPACK_IMPORTED_MODULE_4__(formatTuNgayForCompare).clone().format('dddd') === 'Sunday')) {
                        this.showAlertController('Ngày bắt đầu không được là thứ 7 hoặc chủ nhật');
                        return [2 /*return*/, false];
                    }
                    if ((moment__WEBPACK_IMPORTED_MODULE_4__(formatDenNgayForCompare).clone().format('dddd') === 'Saturday') || (moment__WEBPACK_IMPORTED_MODULE_4__(formatDenNgayForCompare).clone().format('dddd') === 'Sunday')) {
                        this.showAlertController('Ngày kết thúc không được là thứ 7 hoặc chủ nhật');
                        return [2 /*return*/, false];
                    }
                }
                if (this.tabActive === 3) {
                    tuNgayDateTime = tuNgayDate + 'T' + formatFirstTime + ':00';
                    denNgayDateTime = denNgayDate + 'T' + formatLastTime + ':00';
                    if (moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayDateTime) >= moment__WEBPACK_IMPORTED_MODULE_4__(denNgayDateTime)) {
                        this.showAlertController('Thời gian đăng ký không hợp lệ');
                        return [2 /*return*/, false];
                    }
                    if (this.documentType !== 'TC') {
                        if (moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayDateTime).format('dddd') === 'Monday') {
                            if (!moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayDateTime).isBetween(moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayDate + 'T07:29:00'), moment__WEBPACK_IMPORTED_MODULE_4__(moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayDate + 'T17:31:00')))) {
                                this.showAlertController('Thời gian phải nằm trong giờ hành chính');
                                return [2 /*return*/, false];
                            }
                        }
                        else {
                            if (!moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayDateTime).isBetween(moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayDate + 'T07:44:00'), moment__WEBPACK_IMPORTED_MODULE_4__(moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayDate + 'T17:31:00')))) {
                                this.showAlertController('Thời gian phải nằm trong giờ hành chính');
                                return [2 /*return*/, false];
                            }
                        }
                        if (moment__WEBPACK_IMPORTED_MODULE_4__(denNgayDateTime).format('dddd') === 'Monday') {
                            if (!moment__WEBPACK_IMPORTED_MODULE_4__(denNgayDateTime).isBetween(moment__WEBPACK_IMPORTED_MODULE_4__(denNgayDate + 'T07:29:00'), moment__WEBPACK_IMPORTED_MODULE_4__(moment__WEBPACK_IMPORTED_MODULE_4__(denNgayDate + 'T17:31:00')))) {
                                this.showAlertController('Thời gian phải nằm trong giờ hành chính');
                                return [2 /*return*/, false];
                            }
                        }
                        else {
                            console.log(moment__WEBPACK_IMPORTED_MODULE_4__(denNgayDateTime).format('dddd'));
                            if (!moment__WEBPACK_IMPORTED_MODULE_4__(denNgayDateTime).isBetween(moment__WEBPACK_IMPORTED_MODULE_4__(denNgayDate + 'T07:44:00'), moment__WEBPACK_IMPORTED_MODULE_4__(moment__WEBPACK_IMPORTED_MODULE_4__(denNgayDate + 'T17:31:00')))) {
                                this.showAlertController('Thời gian phải nằm trong giờ hành chính');
                                return [2 /*return*/, false];
                            }
                        }
                    }
                }
                momentDate = moment__WEBPACK_IMPORTED_MODULE_4__().clone().locale('vi').format('YYYY-MM-DD');
                if ((moment__WEBPACK_IMPORTED_MODULE_4__(momentDate + 'T00:00:00') > moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayDate + 'T00:00:00')) || (moment__WEBPACK_IMPORTED_MODULE_4__(momentDate + 'T00:00:00') > moment__WEBPACK_IMPORTED_MODULE_4__(denNgayDate + 'T00:00:00'))) {
                    this.showAlertController('Thời gian đăng ký phải lớn hơn hoặc bằng ngày hiện tại');
                    return [2 /*return*/, false];
                }
                if (this.hrWorkTimeDto.truongNhomId)
                    formData.append('TruongNhomId', this.hrWorkTimeDto.truongNhomId);
                if (this.hrWorkTimeDto.truongPhongId)
                    formData.append('TruongPhongId', this.hrWorkTimeDto.truongPhongId);
                if (this.hrWorkTimeDto.giamDocKhoiId)
                    formData.append('GiamDocKhoiId', this.hrWorkTimeDto.giamDocKhoiId);
                if (this.hrWorkTimeDto.tcnsId)
                    formData.append('TcnsId', this.hrWorkTimeDto.tcnsId);
                if (this.hrWorkTimeDto.giamDocDieuHanhId)
                    formData.append('GiamDocDieuHanhId', this.hrWorkTimeDto.giamDocDieuHanhId);
                formData.append('Reasons', form.value.lydo.trim());
                if (this.avatar != null) {
                    formData.append('Image', this.avatar);
                }
                else {
                    formData.append('Image', '/uploads/defaultAvatar.png');
                }
                formData.append('HoVaTen', this.hoVaTen);
                formData.append('TenCty', this.tenCty);
                formData.append('DocumentType', this.documentType);
                formData.append('CreatorUserId', this.creatorUserId.toString());
                formData.append('Email', this.email);
                formData.append('Id', this.id);
                formData.append('NextApproverId', this.hrWorkTimeDto.nextApproverId);
                if (this.documentType === 'NP') {
                    formData.append('LoaiNghiPhep', this.loaiNghiPhep);
                    if (this.loaiNghiPhep === 'NGHIPHEPNAM' || this.loaiNghiPhep === 'KETHON' || this.loaiNghiPhep === 'TANGCHE') {
                        formData.append('NghiCoLuong', 'true');
                    }
                    else {
                        formData.append('NghiCoLuong', 'false');
                    }
                }
                this.CreateOrEdit(formData);
                return [2 /*return*/];
            });
        });
    };
    EditCongTac.prototype.CreateOrEdit = function (body) {
        var _this = this;
        if (Object.keys(this.hrWorkTimeDto).length === 0 && this.hrWorkTimeDto.constructor === Object) {
            this.showAlertController('Có lỗi xảy ra, vui lòng thử lại..!');
            return;
        }
        this.http.post(_AppSettings__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].API_ENDPOINT + "/api/WorkTime/EditLetterForMobile", body).subscribe({
            next: function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this._router.navigateByUrl('/app/main/danhsach-dangky');
                    this.showAlertController('Bạn đã chỉnh sửa đơn đăng ký thành công!');
                    return [2 /*return*/];
                });
            }); }, error: function (res) {
                _this.showAlertController("Có lỗi xảy ra. Vui lòng thử lại.");
            },
        });
    };
    EditCongTac.prototype.changeToGetTime = function (event) {
        var dateTimechoosed = event.detail.value;
        dateTimechoosed = dateTimechoosed.year.text + '-' + dateTimechoosed.month.text + '-' + dateTimechoosed.day.text + 'T' + '07:30:00';
        if (moment__WEBPACK_IMPORTED_MODULE_4__(dateTimechoosed).clone().format('dddd') == 'Monday') {
            this.valueFirstTime = '07:30';
        }
        else {
            this.valueFirstTime = '07:45';
        }
    };
    EditCongTac.prototype.showAlertController = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alertController, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dismissLoading();
                        alertController = this._alertController;
                        return [4 /*yield*/, alertController.create({
                                header: 'Thông báo',
                                message: message,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCongTac.prototype.loadingDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this._loadingCtrl.create({}).then(function (a) {
                                a.present().then(function () {
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditCongTac.prototype.dismissLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this._loadingCtrl.dismiss().then(function () { })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditCongTac.prototype.greaterThan = function (sub, num) {
        return true ? sub <= num : undefined;
    };
    EditCongTac.prototype.chooseTab = function (flag) {
        this.tabActive = flag;
        if (flag == 3) {
            var tuNgayFromForm = this.chonNgay;
            var timeCurrent = moment__WEBPACK_IMPORTED_MODULE_4__(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '00:00:00';
            if (moment__WEBPACK_IMPORTED_MODULE_4__(timeCurrent).clone().format('dddd') == 'Monday') {
                this.valueFirstTime = '07:30';
            }
            else {
                this.valueFirstTime = '07:45';
            }
        }
        else if (flag == 4) {
            this.documentType = 'NP';
        }
    };
    EditCongTac.prototype.ionViewDidLeave = function () {
        this.storage.set(STORAGE_KEY, null).then();
    };
    EditCongTac = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-congtac',
            template: __webpack_require__(/*! ./EditCongTac.page.html */ "./src/app/main/cong-tac/EditCongTac/EditCongTac.page.html"),
            styles: [__webpack_require__(/*! ./EditCongTac.page.scss */ "./src/app/main/cong-tac/EditCongTac/EditCongTac.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_signalR_service__WEBPACK_IMPORTED_MODULE_5__["SignalRService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["AnnouncementServiceProxy"],
            _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_Storage__WEBPACK_IMPORTED_MODULE_10__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__["FilePath"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["WorkTimeServiceProxy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditCongTac);
    return EditCongTac;
}());



/***/ }),

/***/ "./src/app/main/cong-tac/QuanLyCongTac/QuanLyCongTac.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/cong-tac/QuanLyCongTac/QuanLyCongTac.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n   <div class=\"content-app-desktop\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"app/main/home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Duyệt đăng ký</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button color=\"dark\" href=\"app/main/announcement\">\n          <span class=\"fa fa-bell\" style=\"font-size: 25px; color: #606060;\"></span>\n          <span *ngIf=\"totalUnred > 0 && greaterThan(totalUnred,9)\" class=\"totalUnred\">{{totalUnred}}</span> \n          <span *ngIf=\"totalUnred >= 10 && greaterThan(totalUnred,99)\" class=\"totalUnred greater10\">{{totalUnred}}</span> \n          <span *ngIf=\"totalUnred > 99\" class=\"totalUnred greater99\">99+</span> \n        </ion-button>        \n      </ion-buttons>\n    </ion-toolbar>\n   </div>\n  </ion-header>\n\n  \n<ion-content padding>\n     <div class=\"content-app-desktop\">\n      <form #f=\"ngForm\" (ngSubmit)=\"onCreateOrEdit(f)\">\n        <div class=\"group-from\">\n          <ion-list>\n            <ion-item>\n              <p><span class=\"font-bold\">Họ và tên: </span>{{hrWorkTimeDto.hoVaTen}}</p>\n            </ion-item>\n          <ion-item>\n            <p><span class=\"font-bold\">Loại chứng từ: </span>\n              <span *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.documentType === 'NP'\">Đăng ký Nghỉ phép</span>\n              <span *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.documentType === 'CT'\">Đăng ký Công tác</span>\n              <span *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.documentType === 'TC'\">Đăng ký Tăng ca</span>\n              <span *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.documentType === 'QCC'\">Đăng ký Quên chấm công</span>\n            </p>\n          </ion-item>\n          <ng-container *ngIf=\"hrWorkTimeDto.documentType == 'NP'\">\n            <ion-item>\n              <p><span class=\"font-bold\">Loại nghỉ phép: </span>\n              <span *ngIf=\"hrWorkTimeDto.loaiNghiPhep == 'NGHIPHEPNAM'; else loaiNghiPhep_kethon\">Nghỉ phép năm</span>\n              <ng-template #loaiNghiPhep_kethon>\n                  <ng-container *ngIf=\"hrWorkTimeDto.loaiNghiPhep == 'KETHON'; else loaiNghiPhep_tangche\">\n                      Kết hôn\n                  </ng-container>\n                  <ng-template #loaiNghiPhep_tangche>\n                    <ng-container *ngIf=\"hrWorkTimeDto.loaiNghiPhep == 'TANGCHE'; else loaiNghiPhep_khongluong\">\n                      Tang chế\n                    </ng-container>\n                      <ng-template #loaiNghiPhep_khongluong>\n                        <ng-container *ngIf=\"hrWorkTimeDto.loaiNghiPhep == 'KHONGLUONG'; else loaiNghiPhep_thaisan\">\n                          Nghỉ không lương\n                        </ng-container>\n                        <ng-template #loaiNghiPhep_thaisan>\n                          <ng-container *ngIf=\"hrWorkTimeDto.loaiNghiPhep == 'THAISAN'; else loaiNghiPhep_omdau\">\n                            Thai sản\n                          </ng-container>\n                          <ng-template #loaiNghiPhep_omdau>\n                            Ốm đau, bệnh tật\n                          </ng-template>\n                        </ng-template>\n                      </ng-template>\n                  </ng-template>\n              </ng-template>\n              </p>\n            </ion-item>\n          </ng-container>\n          <ion-item>\n            <p class=\"text-pre-line\"><span class=\"font-bold\">Lý do: </span>{{hrWorkTimeDto.reasons}}</p>\n          </ion-item>\n        <ion-item>\n          <p><span class=\"font-bold\">Thời gian bắt đầu: </span> \n            <span *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.timeFromMoment && hrWorkTimeDto.timeFromMoment.includes('00:00'); else other_timeFrom\">{{hrWorkTimeDto.timeFromMoment.replace('00:00','')}}</span>\n            <ng-template #other_timeFrom><span>{{hrWorkTimeDto.timeFromMoment}}</span></ng-template>\n          </p>\n        </ion-item>\n         <ion-item>\n          <p><span class=\"font-bold\">Thời gian kết thúc: </span> \n            <span *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.timeToMoment && hrWorkTimeDto.timeToMoment.includes('00:00'); else other_timeTo\">{{hrWorkTimeDto.timeToMoment.replace('00:00','')}}</span>\n            <ng-template #other_timeTo><span>{{hrWorkTimeDto.timeToMoment}}</span></ng-template>\n          </p>\n         </ion-item>\n         <ion-item *ngIf=\"hrWorkTimeDto && hrWorkTimeDto.attachment && hrWorkTimeDto.attachment.length > 0\">\n          <ion-img src=\"{{globalUrlAPI + hrWorkTimeDto.attachment}}\"></ion-img>\n         </ion-item>\n         <ion-item>\n          <ion-checkbox style=\"margin-right: 10px;\" id=\"isReceive\" class=\"isReceive\" color=\"primary\" [(ngModel)]=\"isReceive\" name=\"isReceive\">\n          </ion-checkbox>\n          <ion-label style=\"display: inline-block;\">Duyệt đơn</ion-label>\n        </ion-item>\n        <div class=\"group-from\" *ngIf=\"!isReceive; else ohter_receive\" style=\"padding-top: 8px;\">\n          <ion-row>\n            <ion-col style=\"padding-left: 18px;\">\n             <p class=\"label-denies\">Lý do từ chối: </p>\n             <ion-textarea maxlength=\"100\" type=\"text\" rows=\"3\" ngModel name=\"denies\" [(ngModel)]=\"denies\"\n               style=\"border: 1px solid lightgray;border-radius: 10px;padding: 0 10px;\" placeholder=\"Nhập lý do từ chối\" required>\n             </ion-textarea>\n            </ion-col>\n          </ion-row>\n       </div>\n       <ng-template #ohter_receive>\n            <ion-row>\n              <ion-col>\n                <input type=\"hidden\" name=\"\">\n              </ion-col>\n            </ion-row>\n       </ng-template>\n          </ion-list>\n          </div>\n            <div class=\"group-from\">\n                <ion-row>\n                  <ion-col>\n                    <ion-button expand=\"block\" type=\"submit\" block [disabled]=\"!f.valid\">Xác nhận</ion-button>\n                  </ion-col>\n                </ion-row>\n            </div>\n      </form>\n     </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/main/cong-tac/QuanLyCongTac/QuanLyCongTac.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/main/cong-tac/QuanLyCongTac/QuanLyCongTac.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font-bold {\n  font-weight: bold; }\n\n.label-denies {\n  margin: 0px;\n  margin-bottom: 5px;\n  font-weight: bold; }\n\n.totalUnred {\n  display: inline-block;\n  position: relative;\n  background: #5188e8;\n  border-radius: 50%;\n  right: 12px;\n  font-size: 9px;\n  top: 3px;\n  color: #fff;\n  padding: 3px 6px; }\n\n.totalUnred.greater99 {\n  padding: 5px 3px; }\n\n.totalUnred.greater10 {\n  padding: 4px; }\n\n@media screen and (min-width: 768px) {\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; }\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; } }\n\np.text-pre-line {\n  white-space: pre-line; }\n"

/***/ }),

/***/ "./src/app/main/cong-tac/QuanLyCongTac/QuanLyCongTac.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/cong-tac/QuanLyCongTac/QuanLyCongTac.page.ts ***!
  \*******************************************************************/
/*! exports provided: AUTH_KEY, QuanLyCongTac */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuanLyCongTac", function() { return QuanLyCongTac; });
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_signalR_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/signalR.service */ "./src/service/signalR.service.ts");
/* harmony import */ var _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _AppSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../AppSettings */ "./src/AppSettings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};

//import { AnnouncementServiceProxy, WorkTimeServiceProxy } from '../../../../shared/service-proxies/service-proxies';










var AUTH_KEY = 'AUTH';
var QuanLyCongTac = /** @class */ (function () {
    function QuanLyCongTac(_loadingCtrl, _alertController, _signalRSevice, _announcementServiceProxy, _localStorageService, acRouter, workTimeServiceProxy, http, _router) {
        var _this = this;
        this._loadingCtrl = _loadingCtrl;
        this._alertController = _alertController;
        this._signalRSevice = _signalRSevice;
        this._announcementServiceProxy = _announcementServiceProxy;
        this._localStorageService = _localStorageService;
        this.acRouter = acRouter;
        this.workTimeServiceProxy = workTimeServiceProxy;
        this.http = http;
        this._router = _router;
        this.globalUrlAPI = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_8__["AppConsts"].remoteServiceBaseUrl + '/attachments/';
        this.hrWorkTimeDto = {};
        this.isLoading = false;
        this.denies = '';
        this.totalUnred = 0;
        this.isReceive = true;
        this.id = this.acRouter.snapshot.queryParams.id;
        this.receiveId = this._localStorageService.getItem(AUTH_KEY).userId;
        this._signalRSevice.retrieveMappedObject().subscribe(function (message) {
            _this._announcementServiceProxy.getAllUnRead(_this.receiveId).subscribe({
                next: function (res) {
                    if (res) {
                        _this.totalUnred = res.length;
                    }
                }
            });
        });
    }
    QuanLyCongTac.prototype.ngOnInit = function () {
        this.avatar = this._localStorageService.getItem(AUTH_KEY).image;
        this.hoVaTen = this._localStorageService.getItem(AUTH_KEY).hoVaTen;
        this.tenCty = this._localStorageService.getItem(AUTH_KEY).tenCty;
    };
    QuanLyCongTac.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDefault();
        this._announcementServiceProxy.getAllUnRead(this.receiveId).subscribe({
            next: function (res) {
                if (res) {
                    _this.totalUnred = res.length;
                }
            },
            error: function (err) {
                _this.showAlertController('Lỗi kết nối mạng, vui lòng thử lại.');
                return;
            }
        });
        this.getDetail();
    };
    QuanLyCongTac.prototype.getDetail = function () {
        var _this = this;
        this.workTimeServiceProxy.getWorkTimeDetail(this.id).subscribe({
            next: function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (res) {
                        this.hrWorkTimeDto = res;
                        this.hrWorkTimeDto['timeFromMoment'] = moment__WEBPACK_IMPORTED_MODULE_4__(res.timeFrom).clone().locale('vi').format('HH:mm DD/MM/YYYY');
                        this.hrWorkTimeDto['timeToMoment'] = moment__WEBPACK_IMPORTED_MODULE_4__(res.timeTo).clone().locale('vi').format('HH:mm DD/MM/YYYY');
                    }
                    this.dismissLoading();
                    return [2 /*return*/];
                });
            }); },
            error: function (err) {
                _this.dismissLoading();
                console.log(err);
            }
        });
    };
    QuanLyCongTac.prototype.onCreateOrEdit = function (form) {
        var _this = this;
        this.loadingDefault();
        var formData = new FormData;
        if (this.id)
            formData.append('Id', this.id);
        if (!this.isReceive) {
            if (this.denies.trim().length === 0) {
                this.showAlertController('Từ chối đơn bắt buộc phải có lý do.');
                return false;
            }
            if (form.value.denies)
                formData.append('Notes', form.value.denies);
        }
        if (this.hrWorkTimeDto.nextApproverId)
            formData.append('NextApproverId', this.hrWorkTimeDto.nextApproverId.toString());
        if (this.hrWorkTimeDto.reasons)
            formData.append('Reasons', this.hrWorkTimeDto.reasons);
        if (this.avatar)
            formData.append('Image', this.avatar);
        if (this.hoVaTen)
            formData.append('HoVaTen', this.hoVaTen);
        if (this.tenCty)
            formData.append('TenCty', this.tenCty);
        if (this.hrWorkTimeDto.documentType)
            formData.append('DocumentType', this.hrWorkTimeDto.documentType);
        if (this.hrWorkTimeDto.creatorUserId)
            formData.append('CreatorUserId', this.hrWorkTimeDto.creatorUserId.toString());
        if (this.hrWorkTimeDto)
            formData.append('Email', this.hrWorkTimeDto.emailAddress);
        if (this.receiveId)
            formData.append('ApproverId', this.receiveId);
        if (this.hrWorkTimeDto.truongNhomId)
            formData.append('TruongNhomId', this.hrWorkTimeDto.truongNhomId.toString());
        if (this.hrWorkTimeDto.truongPhongId)
            formData.append('TruongPhongId', this.hrWorkTimeDto.truongPhongId.toString());
        if (this.hrWorkTimeDto.giamDocKhoiId)
            formData.append('GiamDocKhoiId', this.hrWorkTimeDto.giamDocKhoiId.toString());
        if (this.hrWorkTimeDto.tcnsId)
            formData.append('TcnsId', this.hrWorkTimeDto.tcnsId.toString());
        if (this.hrWorkTimeDto.giamDocDieuHanhId)
            formData.append('GiamDocDieuHanhId', this.hrWorkTimeDto.giamDocDieuHanhId.toString());
        if (this.hrWorkTimeDto.timeFrom)
            formData.append('TimeFrom', this.hrWorkTimeDto.timeFrom.clone().locale('vi').format('YYYY-MM-DD') + 'T' + this.hrWorkTimeDto.timeFrom.clone().locale('vi').format('HH:mm:ss'));
        if (this.hrWorkTimeDto.timeTo)
            formData.append('TimeTo', this.hrWorkTimeDto.timeTo.clone().locale('vi').format('YYYY-MM-DD') + 'T' + this.hrWorkTimeDto.timeTo.clone().locale('vi').format('HH:mm:ss'));
        if (this.hrWorkTimeDto.documentType)
            formData.append('DocumentType', this.hrWorkTimeDto.documentType);
        if (Object.keys(this.hrWorkTimeDto).length === 0 && this.hrWorkTimeDto.constructor === Object) {
            this.showAlertController('Có lỗi xảy ra, vui lòng thử lại..!');
            return;
        }
        this.http.post(_AppSettings__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].API_ENDPOINT + "/api/WorkTime/CreateOrEditForMobile", formData).subscribe({
            next: function (res) { return __awaiter(_this, void 0, void 0, function () {
                var sendUserDto;
                var _this = this;
                return __generator(this, function (_a) {
                    sendUserDto = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["SendAnnouncement_ENTITY"]();
                    sendUserDto = res.result;
                    this._announcementServiceProxy.sendMessageToClient(sendUserDto).subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/];
                        });
                    }); });
                    this.denies = '';
                    this._router.navigateByUrl('app/main/danhsach-choduyet');
                    !this.isReceive ? this.showAlertController('Bạn đã từ chối đơn đăng ký thành công!') : this.showAlertController('Bạn đã duyệt đơn đăng ký thành công!');
                    return [2 /*return*/];
                });
            }); }, error: function (err) {
                console.log(err);
                _this.showAlertController('Có lỗi xảy ra, vui lòng thử lại.');
            },
        });
    };
    QuanLyCongTac.prototype.loadingDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this._loadingCtrl.create({
                            //   message: 'Đang xử lý........',
                            // duration: 3000
                            }).then(function (a) {
                                a.present().then(function () {
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuanLyCongTac.prototype.dismissLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this._loadingCtrl.dismiss().then(function () { })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuanLyCongTac.prototype.showAlertController = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alertController, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dismissLoading();
                        alertController = this._alertController;
                        return [4 /*yield*/, alertController.create({
                                header: 'Thông báo',
                                message: message,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    QuanLyCongTac.prototype.greaterThan = function (sub, num) {
        return true ? sub <= num : undefined;
    };
    QuanLyCongTac = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quanly-congtac',
            template: __webpack_require__(/*! ./QuanLyCongTac.page.html */ "./src/app/main/cong-tac/QuanLyCongTac/QuanLyCongTac.page.html"),
            styles: [__webpack_require__(/*! ./QuanLyCongTac.page.scss */ "./src/app/main/cong-tac/QuanLyCongTac/QuanLyCongTac.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _service_signalR_service__WEBPACK_IMPORTED_MODULE_5__["SignalRService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["AnnouncementServiceProxy"],
            _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_0__["WorkTimeServiceProxy"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuanLyCongTac);
    return QuanLyCongTac;
}());



/***/ }),

/***/ "./src/app/main/home/home.page.html":
/*!******************************************!*\
  !*** ./src/app/main/home/home.page.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <div class=\"content-app-desktop\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Trang chủ\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button color=\"dark\" href=\"app/main/announcement\">\n          <span class=\"fa fa-bell\" style=\"font-size: 25px; color: #606060;\"></span>\n          <span *ngIf=\"totalUnred > 0 && greaterThan(totalUnred,9)\" class=\"totalUnred\">{{totalUnred}}</span> \n          <span *ngIf=\"totalUnred >= 10 && greaterThan(totalUnred,99)\" class=\"totalUnred greater10\">{{totalUnred}}</span> \n          <span *ngIf=\"totalUnred > 99\" class=\"totalUnred greater99\">99+</span> \n        </ion-button>        \n      </ion-buttons>\n    </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content padding>\n<div class=\"content-app-desktop\">\n  <ion-item style=\"--padding-start: 0px;--inner-border-width:0px\">\n    <ion-item-group style=\"font-size: 15px;\">\n      <ion-item style=\"--padding-start: 0px;--inner-border-width:0px;--min-height: 20px;\">\n        <span class=\"fa fa-user\" style=\"color: #3880ff;\n        display: inline-block;\n        font-size: 20px;\n        padding: 0px 6px 0px 4px;\"></span>\n        <ion-label class=\"about-user\" color=\"primary shape\" style=\"margin: 5px 4px 1px 0; \">{{hoVaTen}}</ion-label>\n      </ion-item>\n      <ion-item style=\"--padding-start: 0px;--inner-border-width:0px;--min-height: 20px;\">\n        <ion-icon style=\"margin-right: 6px; font-size: 20px;\" slot=\"start\" name=\"finger-print\" color=\"primary shape\">\n        </ion-icon>\n        <ion-label class=\"about-user\" color=\"primary shape\" style=\"margin: 5px 4px 1px 0; \">{{maChamCong}}</ion-label>\n      </ion-item>\n      <ion-item style=\"--padding-start: 0px;--inner-border-width:0px;--min-height: 20px;\">\n        <ion-icon style=\"margin-right: 6px; font-size: 20px;\" slot=\"start\" name=\"calendar\" color=\"primary shape\">\n        </ion-icon>\n        <ion-label class=\"about-user\" color=\"primary shape\" style=\"margin: 5px 4px 1px 0; text-transform: capitalize;\">\n          {{dateCurrent}}</ion-label>\n      </ion-item>\n    </ion-item-group>\n    <div style=\" width: 80px; margin-right: 20px; border-radius: 50%; border: 1px dotted #9bbfff;\" slot=\"end\">\n      <div style=\"margin: auto;text-align: center;color: #3880ff;font-weight: bold;\">\n        <p style=\"padding: 15px 0px; font-size: 15px;\">{{momentCurrent}}</p>\n      </div>\n    </div>\n  </ion-item>\n\n  <ng-container *ngIf=\"isChecked == 1;else secondBtn\">\n    <ion-row > \n      <ion-col col-6>\n        <ion-button expand=\"block\" (click)=\"checkChamCongClick()\"\n          style=\"--background:linear-gradient(to right, #00cc99 0%, #006666 100%)\">\n          <ion-icon slot=\"start\" name=\"finger-print\"></ion-icon>\n          Check in\n        </ion-button>\n      </ion-col>\n      <ion-col col-6>\n        <ion-button disabled expand=\"block\"\n          style=\"--background:linear-gradient(to right, #ffcc00 0%, #ff6600 101%)\">\n          <ion-icon slot=\"start\" name=\"finger-print\"></ion-icon>\n          Check out\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n  <ng-template #secondBtn>\n    <ng-container *ngIf=\"isChecked == 2;else thirdBtn\">\n      <ion-row> \n        <ion-col col-6>\n          <ion-button disabled expand=\"block\"\n            style=\"--background:linear-gradient(to right, #00cc99 0%, #006666 100%)\">\n            <ion-icon slot=\"start\" name=\"finger-print\"></ion-icon>\n            Check in\n          </ion-button>\n        </ion-col>\n        <ion-col col-6>\n          <ion-button *ngIf=\"isChecked == 2\" expand=\"block\" (click)=\"checkOutClick()\"\n            style=\"--background:linear-gradient(to right, #ffcc00 0%, #ff6600 101%)\">\n            <ion-icon slot=\"start\" name=\"finger-print\"></ion-icon>\n            Check out\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ng-container>\n  </ng-template>\n\n  <ng-template #thirdBtn>\n   <ion-row>\n    <ion-col col-6>\n      <ion-button disabled expand=\"block\"\n        style=\"--background:linear-gradient(to right, #00cc99 0%, #006666 100%)\">\n        <ion-icon slot=\"start\" name=\"finger-print\"></ion-icon>\n        Check in\n      </ion-button>\n    </ion-col>\n    <ion-col col-6>\n      <ion-button disabled expand=\"block\"\n        style=\"--background:linear-gradient(to right, #ffcc00 0%, #ff6600 101%)\">\n        <ion-icon slot=\"start\" name=\"finger-print\"></ion-icon>\n        Check out\n      </ion-button>\n    </ion-col>\n   </ion-row>\n  </ng-template>\n\n  <ion-item style=\"--padding-start: 0px;--inner-border-width:0px\">\n    <ng-container *ngIf=\"isChecked === 1 ;else second\">\n      <ion-item-group >\n        <ion-item style=\"--padding-start: 0px;--inner-border-width:0px;--min-height: 20px;\">\n          <ion-icon style=\"margin-right: 6px; font-size: 22px;\" slot=\"start\" name=\"warning\" color=\"warning\"></ion-icon>\n          <ion-label color=\"warning shape\" class=\"info-check\"> Bạn chưa check in</ion-label>\n        </ion-item>\n        <ion-item style=\"--padding-start: 0px;--inner-border-width:0px;--min-height: 20px;\">\n          <ion-icon style=\"margin-right: 6px; font-size: 22px;\" slot=\"start\" name=\"warning\" color=\"warning\"></ion-icon>\n          <ion-label color=\"warning shape\" class=\"info-check\"> Bạn chưa check out</ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ng-container>\n    <ng-template #second>\n      <ng-container *ngIf=\"isChecked === 2;else third\">\n        <ion-item-group>\n          <ion-item style=\"--padding-start: 0px;--inner-border-width:0px;--min-height: 20px; \">\n            <ion-icon style=\"margin-right: 6px; font-size: 22px;\" slot=\"start\" name=\"checkmark-circle-outline\" color=\"success\"></ion-icon>\n            <ion-label color=\"success shape\" class=\"info-check\"> Bạn đã check in</ion-label>\n          </ion-item>\n          <ion-item style=\"--padding-start: 0px;--inner-border-width:0px;--min-height: 20px;\">\n            <ion-icon style=\"margin-right: 6px; font-size: 22px;\" slot=\"start\" name=\"warning\" color=\"warning\"></ion-icon>\n            <ion-label color=\"warning shape\" class=\"info-check\"> Bạn chưa check out</ion-label>\n          </ion-item>\n        </ion-item-group>\n      </ng-container>\n    </ng-template>\n    <ng-template #third>\n      <ion-item-group>\n        <ion-item style=\"--padding-start: 0px;--inner-border-width:0px;--min-height: 20px;\">\n          <ion-icon style=\"margin-right: 6px; font-size: 22px;\" slot=\"start\" name=\"checkmark-circle-outline\" color=\"success\"></ion-icon>\n          <ion-label color=\"success shape\" class=\"info-check\"> Bạn đã check in</ion-label>\n        </ion-item>\n        <ion-item style=\"--padding-start: 0px;--inner-border-width:0px;--min-height: 20px;\">\n          <ion-icon style=\"margin-right: 6px; font-size: 22px;\" slot=\"start\" name=\"checkmark-circle-outline\" color=\"success\"></ion-icon>\n          <ion-label color=\"success shape\" class=\"info-check\"> Bạn đã check out</ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ng-template>\n  </ion-item>\n\n  <ion-row>\n    <ion-col col-6 *ngIf=\"branchType !== 'TCNS' && branchType !== 'BGDDH'\">\n      <ion-button class=\"icon-lock\" expand=\"block\" href=\"app/main/create-congtac\">\n        <span class=\"fa fa-lock locked-span\"></span> Đăng ký chứng từ\n      </ion-button>\n    </ion-col>\n    <ion-col col-6 *ngIf=\"branchType !== 'NV'\">\n      <ion-button class=\"icon-lock\" expand=\"block\" href=\"app/main/danhsach-choduyet\">\n        <span class=\"fa fa-lock locked-span\"></span> Duyệt chứng từ\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <hr>\n\n  <ion-row>\n    <ion-col col-12>\n      <ion-card style=\"margin: 0px; background: #BCE0FD; text-align: center; color: #1584B9; font-weight: 600;\">\n        <div style=\"text-align: center; padding-top: 10px;\">\n          <ion-card-content style=\"padding-top: 6px;\">\n            <ion-button expand=\"block\" href=\"app/main/qlns/dataChamCong\"\n              style=\"--background:linear-gradient(to right, #00cc99 0%, #006666 100%)\">\n              <ion-icon slot=\"start\" name=\"finger-print\"></ion-icon> Xem chấm công\n            </ion-button>\n          </ion-card-content>\n        </div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-3>\n      <ion-card class=\"tool-card\">\n      <div style=\"text-align: center; padding-top: 10px;\">\n          <span class=\"fa fa-link icon-tool\"></span>\n        </div>\n        <ion-card-content style=\"padding-top: 6px;\">\n          CRM\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-3>\n      <ion-card class=\"tool-card\">\n        <div style=\"text-align: center; padding-top: 10px;\">\n          <span class=\"fa fa-support icon-tool\"></span>\n        </div>\n        <ion-card-content style=\"padding-top: 6px;\">\n          Support\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-3>\n      <ion-card class=\"tool-card\">\n        <div style=\"text-align: center; padding-top: 10px;\">\n          <span class=\"fa fa-envelope icon-tool\"></span>\n        </div>\n        <ion-card-content style=\"padding-top: 6px;\">\n          Email marketing\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-3>\n      <ion-card class=\"tool-card\">\n        <div style=\"text-align: center; padding-top: 10px;\">\n          <span class=\"fa fa-feed icon-tool\"></span>\n        </div>\n        <ion-card-content style=\"padding-top: 6px;\">\n          Cổng thông tin\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-3>\n      <ion-card class=\"tool-card\">\n        <div style=\"text-align: center; padding-top: 10px;\">\n          <span class=\"fa fa-codepen icon-tool\"></span>\n        </div>\n        <ion-card-content style=\"padding-top: 6px;\">\n          Quản trị dự án\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-3>\n      <ion-card class=\"tool-card \">\n        <div style=\"text-align: center; padding-top: 10px;\">\n          <span class=\"fa fa-users icon-tool\"></span>\n        </div>\n        <ion-card-content style=\"padding-top: 6px;\">\n          Quản lý nhân sự\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-3>\n      <ion-card\n        style=\"margin: 0px; background: #BCE0FD; text-align: center; color: #1584B9; font-weight: 600;\">\n        <div style=\"text-align: center; padding-top: 10px;\">\n          <span class=\"fa fa-windows icon-tool\"></span>\n        </div>\n        <ion-card-content style=\"padding-top: 6px;\">\n          Microsoft Team\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-3>\n      <ion-card\n        style=\"margin: 0px; background: #BCE0FD; text-align: center; color: #1584B9; font-weight: 600;\">\n        <div style=\"text-align: center; padding-top: 10px;\">\n          <span class=\"fa fa-info-circle icon-tool\"></span>\n        </div>\n        <ion-card-content style=\"padding-top: 6px;\">\n          Vận hành CNTT\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/main/home/home.page.scss":
/*!******************************************!*\
  !*** ./src/app/main/home/home.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".locked-span {\n  display: inline-block;\n  margin-right: 5px; }\n\n.about-user {\n  font-size: 14px; }\n\n.info-check {\n  margin: 5px 4px 0px 0;\n  font-size: 14px; }\n\n.icon-lock {\n  font-size: 13px; }\n\n.icon-calendar {\n  color: #3880ff;\n  font-size: 17px;\n  padding: 15px;\n  border-radius: 12px;\n  border: 1px solid #eee; }\n\n.icon-tool {\n  display: block;\n  color: #2699FB;\n  width: 100%;\n  font-size: 30px; }\n\n.tool-card {\n  margin: 0px;\n  background: #BCE0FD;\n  text-align: center;\n  color: #1584B9;\n  font-weight: 600;\n  min-height: 105px; }\n\n.totalUnred {\n  display: inline-block;\n  position: relative;\n  background: #5188e8;\n  border-radius: 50%;\n  right: 12px;\n  font-size: 9px;\n  top: 3px;\n  color: #fff;\n  padding: 3px 6px; }\n\n.totalUnred.greater99 {\n  padding: 5px 3px; }\n\n.totalUnred.greater10 {\n  padding: 4px; }\n\n@media screen and (min-width: 768px) {\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; }\n  .content-app-desktop {\n    width: 375px;\n    margin: 0px auto; } }\n"

/***/ }),

/***/ "./src/app/main/home/home.page.ts":
/*!****************************************!*\
  !*** ./src/app/main/home/home.page.ts ***!
  \****************************************/
/*! exports provided: STORAGE_KEY, AUTH_KEY, HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_KEY", function() { return STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/util.service */ "./src/service/util.service.ts");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/network-interface/ngx */ "./node_modules/@ionic-native/network-interface/ngx/index.js");
/* harmony import */ var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/timeout */ "./node_modules/rxjs-compat/_esm5/add/operator/timeout.js");
/* harmony import */ var _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/browser-tab/ngx */ "./node_modules/@ionic-native/browser-tab/ngx/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _service_signalR_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../service/signalR.service */ "./src/service/signalR.service.ts");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};
















var STORAGE_KEY = 'my_images';
var App = _capacitor_core__WEBPACK_IMPORTED_MODULE_11__["Plugins"].App;
var AUTH_KEY = 'AUTH';
var HomePage = /** @class */ (function () {
    function HomePage(_utilService, _router, _alertController, _loadingCtrl, _localStorageService, _dataChamCongsServiceProxy, _networkInterface, _platform, _tokenAuthServiceProxy, _browserTab, _menu, _signalRSevice, _announcementServiceProxy, storage, localNotifications, toastCtrl) {
        var _this = this;
        this._utilService = _utilService;
        this._router = _router;
        this._alertController = _alertController;
        this._loadingCtrl = _loadingCtrl;
        this._localStorageService = _localStorageService;
        this._dataChamCongsServiceProxy = _dataChamCongsServiceProxy;
        this._networkInterface = _networkInterface;
        this._platform = _platform;
        this._tokenAuthServiceProxy = _tokenAuthServiceProxy;
        this._browserTab = _browserTab;
        this._menu = _menu;
        this._signalRSevice = _signalRSevice;
        this._announcementServiceProxy = _announcementServiceProxy;
        this.storage = storage;
        this.localNotifications = localNotifications;
        this.toastCtrl = toastCtrl;
        this.checkPauseResume = false;
        this.totalUnred = 0;
        this.isChecked = 1;
        this.isLoading = false;
        this.dateCurrent = moment__WEBPACK_IMPORTED_MODULE_4__().locale('vi').format('dddd, DD/MM/YYYY');
        this.momentCurrent = moment__WEBPACK_IMPORTED_MODULE_4__().locale('vi').clone().format('HH:mm');
        this.countToLogout = 0;
        this.counter = 0;
        _platform.ready().then(function () {
            _this.localNotifications.on('click').subscribe(function (res) {
            });
            _this.localNotifications.on('trigger').subscribe(function (res) {
            });
            _this._platform.pause.subscribe(function () {
            });
            _this._platform.resume.subscribe(function () {
                _this.loadingDefault();
                _this.kiemTraCheckTrongNgay();
            });
        });
        this.userId = this._localStorageService.getItem(AUTH_KEY).userId;
        this._signalRSevice.retrieveMappedObject().subscribe(function (message) {
            _this._announcementServiceProxy.getAllUnRead(_this.userId).subscribe({
                next: function (res) {
                    if (res) {
                        _this.totalUnred = res.length;
                    }
                }
            });
        });
    }
    HomePage.prototype.overrideHardwareBackAction = function (event) {
        var _this = this;
        if (this._menu.isOpen()) {
            this._menu.close();
        }
        if (this._router.url === '/app/main/home') {
            event.detail.register(100, function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (this.counter == 0) {
                        this.counter++;
                        this.presentToast();
                        setTimeout(function () { _this.counter = 0; }, 2000);
                    }
                    else {
                        navigator['app'].exitApp();
                        event.stopImmediatePropagation();
                        event.stopPropagation();
                        event.preventDefault();
                    }
                    return [2 /*return*/];
                });
            }); });
        }
    };
    HomePage.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: "Nhấn lần nữa để thoát ứng dụng",
                            duration: 2000,
                            position: "bottom"
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.hoVaTen = this._localStorageService.getItem(AUTH_KEY).hoVaTen;
        this.tenCty = this._localStorageService.getItem(AUTH_KEY).tenCty;
        this.maChamCong = this._localStorageService.getItem(AUTH_KEY).maChamCong;
        this._utilService.getCookieValue(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_3__["AppConsts"].authorization.encrptedAuthTokenName);
        this.branchType = this._localStorageService.getItem(AUTH_KEY).branchType;
        setInterval(function () {
            _this.dateCurrent = moment__WEBPACK_IMPORTED_MODULE_4__().locale('vi').format('dddd, DD/MM/YYYY');
        }, 60000);
        setInterval(function () {
            _this.momentCurrent = moment__WEBPACK_IMPORTED_MODULE_4__().locale('vi').clone().format('HH:mm');
            if (_this.momentCurrent === '08:01' || _this.momentCurrent === '20:01' || _this.momentCurrent === '02:01') {
                _this.kiemTraCheckTrongNgay();
            }
        }, 1000);
        this.repeatingDaily();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDefault();
        this._announcementServiceProxy.getAllUnRead(this.userId).subscribe({
            next: function (res) {
                if (res) {
                    _this.totalUnred = res.length;
                }
            },
            error: function (err) {
                _this.showAlertController('Lỗi kết nối mạng, vui lòng thử lại.');
                return;
            }
        });
        this.kiemTraCheckTrongNgay();
    };
    HomePage.prototype.kiemTraCheckTrongNgay = function () {
        var _this = this;
        this._dataChamCongsServiceProxy.checkTrongNgay(this.maChamCong, moment__WEBPACK_IMPORTED_MODULE_4__().clone().locale('vi')).subscribe({
            next: function (res) {
                if (res !== null) {
                    if (res.status == 'PROCESS') {
                        _this.isChecked = 2;
                    }
                    else if (res.status == 'SUCCESS') {
                        _this.isChecked = 3;
                    }
                }
                _this.dismissLoading();
            }
        });
        this.dismissLoading();
    };
    HomePage.prototype.checkChamCongClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loadingDefault();
                if (this.branchType === 'TCNS' || this.branchType === 'BGDDH') {
                    this.showAlertController('Tài khoàn này không thể chấm công');
                    return [2 /*return*/];
                }
                if (isNaN(this.maChamCong)) {
                    this.showAlertController('Mã chấm công không hợp lệ');
                    return [2 /*return*/];
                }
                this._networkInterface.getWiFiIPAddress()
                    .then(function (address) { return __awaiter(_this, void 0, void 0, function () {
                    var ipWifi, pointWifi;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                ipWifi = address.ip;
                                console.log(ipWifi);
                                pointWifi = ipWifi.split('.');
                                if (!(((pointWifi[0] === '172')
                                    && (pointWifi[1] === '20')
                                    && (parseInt(pointWifi[2]) >= 0 && parseInt(pointWifi[2]) <= 3
                                        && parseInt(pointWifi[3]) >= 1 && parseInt(pointWifi[3]) <= 255)) ||
                                    ((pointWifi[0] === '172')
                                        && (pointWifi[1] === '21')
                                        && ((parseInt(pointWifi[2]) == 20 || parseInt(pointWifi[2]) == 30 || parseInt(pointWifi[2]) == 1)
                                            && parseInt(pointWifi[3]) >= 1 && parseInt(pointWifi[3]) <= 255)))) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.checkChamCong(this.maChamCong)];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                this.showAlertController('Bạn chưa kết nối mạng nội bộ');
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); })
                    .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.showAlertController('Bạn chưa kết nối mạng nội bộ');
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.checkOutClick = function () {
        this.questionCheckOut();
    };
    HomePage.prototype.questionCheckOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Thông báo',
                            message: 'Bạn có chắc muốn checkout ngay bây giờ không?',
                            buttons: [{ text: 'Hủy', role: 'cancel' }, {
                                    text: 'Đồng ý', handler: function () {
                                        _this.checkChamCongClick();
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.checkChamCong = function (maChamCong) {
        var _this = this;
        this._dataChamCongsServiceProxy.createOrEditMobile(maChamCong, this.userId).subscribe({
            next: function (result) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        // if (result.statusCode == 400) { this.showAlertController(result.message); } else {
                        //   await this.kiemTraCheckTrongNgay();
                        // }
                        return [4 /*yield*/, this.kiemTraCheckTrongNgay()];
                        case 1:
                            // if (result.statusCode == 400) { this.showAlertController(result.message); } else {
                            //   await this.kiemTraCheckTrongNgay();
                            // }
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            error: function (err) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.showAlertController('Có lỗi xuất hiện, vui lòng thử lại sau.');
                    return [2 /*return*/];
                });
            }); }
        });
    };
    HomePage.prototype.loadingDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this._loadingCtrl.create({
                            // message: 'Đang xử lý........',
                            // duration: 3000
                            }).then(function (a) {
                                a.present().then(function () {
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.dismissLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this._loadingCtrl.dismiss().then(function () { })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.greaterThan = function (sub, num) {
        return true ? sub <= num : undefined;
    };
    HomePage.prototype.showAlertController = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alertController, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dismissLoading();
                        alertController = this._alertController;
                        return [4 /*yield*/, alertController.create({
                                header: 'Thông báo',
                                message: message,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.repeatingDaily = function () {
        var _this = this;
        this.localNotifications.getAll().then(function (res) {
        });
        this.localNotifications.cancelAll().then(function () {
            _this.localNotifications.getAll().then(function (res) {
            });
            _this.localNotifications.schedule([{
                    id: 1,
                    title: 'Chào buổi sáng',
                    text: 'Đã bắt đầu giờ làm việc. Bạn đã checkin chưa?',
                    trigger: { every: { weekday: 5, hour: 7, minute: 35 }, count: 1 },
                    sound: _this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
                    // foreground: true
                },
                {
                    id: 2,
                    title: 'Chào buổi sáng',
                    text: 'Đã bắt đầu giờ làm việc. Bạn đã checkin chưa?',
                    trigger: { every: { weekday: 5, hour: 7, minute: 50 }, count: 1 },
                    sound: _this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
                    // foreground: true
                },
                {
                    id: 3,
                    title: 'Chào buổi sáng',
                    text: 'Đã bắt đầu giờ làm việc. Bạn đã checkin chưa?',
                    trigger: { every: { weekday: 5, hour: 7, minute: 50 }, count: 1 },
                    sound: _this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
                    // foreground: true
                },
                {
                    id: 4,
                    title: 'Chào buổi sáng',
                    text: 'Đã bắt đầu giờ làm việc. Bạn đã checkin chưa?',
                    trigger: { every: { weekday: 5, hour: 7, minute: 50 }, count: 1 },
                    sound: _this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
                    // foreground: true
                }, {
                    id: 5,
                    title: 'Chào buổi sáng',
                    text: 'Đã bắt đầu giờ làm việc. Bạn đã checkin chưa?',
                    trigger: { every: { weekday: 5, hour: 7, minute: 50 }, count: 1 },
                    sound: _this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
                    // foreground: true
                },
                {
                    id: 6,
                    title: 'Chào buổi tối',
                    text: 'Đã hết giờ làm việc. Bạn đã checkout chưa?',
                    trigger: { every: { weekday: 1, hour: 17, minute: 35 }, count: 1 },
                    sound: _this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
                    // foreground: true
                },
                {
                    id: 7,
                    title: 'Chào buổi tối',
                    text: 'Đã hết giờ làm việc. Bạn đã checkout chưa?',
                    trigger: { every: { weekday: 2, hour: 17, minute: 35 }, count: 1 },
                    sound: _this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
                    // foreground: true
                },
                {
                    id: 8,
                    title: 'Chào buổi tối',
                    text: 'Đã hết giờ làm việc. Bạn đã checkout chưa?',
                    trigger: { every: { weekday: 3, hour: 17, minute: 35 }, count: 1 },
                    sound: _this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
                    // foreground: true
                }, {
                    id: 9,
                    title: 'Chào buổi tối',
                    text: 'Đã hết giờ làm việc. Bạn đã checkout chưa?',
                    trigger: { every: { weekday: 4, hour: 17, minute: 35 }, count: 1 },
                    sound: _this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
                    // foreground: true
                },
                {
                    id: 10,
                    title: 'Chào buổi tối',
                    text: 'Đã hết giờ làm việc. Bạn đã checkout chưa?',
                    trigger: { every: { weekday: 5, hour: 17, minute: 35 }, count: 1 },
                    sound: _this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
                    // foreground: true
                }]);
        }).then(function () {
            _this.localNotifications.getAll().then(function (res) {
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:ionBackButton', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomePage.prototype, "overrideHardwareBackAction", null);
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/main/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/main/home/home.page.scss")],
        }),
        __metadata("design:paramtypes", [_service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _core_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["CHAMCONGServiceProxy"],
            _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_8__["NetworkInterface"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["TokenAuthServiceProxy"],
            _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_10__["BrowserTab"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _service_signalR_service__WEBPACK_IMPORTED_MODULE_12__["SignalRService"],
            _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["AnnouncementServiceProxy"],
            _ionic_Storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__["LocalNotifications"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.page */ "./src/app/main/home/home.page.ts");
/* harmony import */ var _announcement_announcement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./announcement/announcement.page */ "./src/app/main/announcement/announcement.page.ts");
/* harmony import */ var _cong_tac_CreateCongTac_CreateCongTac_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cong-tac/CreateCongTac/CreateCongTac.page */ "./src/app/main/cong-tac/CreateCongTac/CreateCongTac.page.ts");
/* harmony import */ var _cong_tac_QuanLyCongTac_QuanLyCongTac_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cong-tac/QuanLyCongTac/QuanLyCongTac.page */ "./src/app/main/cong-tac/QuanLyCongTac/QuanLyCongTac.page.ts");
/* harmony import */ var _cong_tac_DanhSachChoDuyet_DanhSachChoDuyet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cong-tac/DanhSachChoDuyet/DanhSachChoDuyet.page */ "./src/app/main/cong-tac/DanhSachChoDuyet/DanhSachChoDuyet.page.ts");
/* harmony import */ var _cong_tac_DanhSachDangKy_DanhSachDangKy_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cong-tac/DanhSachDangKy/DanhSachDangKy.page */ "./src/app/main/cong-tac/DanhSachDangKy/DanhSachDangKy.page.ts");
/* harmony import */ var _cong_tac_EditCongTac_EditCongTac_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cong-tac/EditCongTac/EditCongTac.page */ "./src/app/main/cong-tac/EditCongTac/EditCongTac.page.ts");
/* harmony import */ var _cong_tac_ChiTietDangKy_ChiTietDangKy_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cong-tac/ChiTietDangKy/ChiTietDangKy.page */ "./src/app/main/cong-tac/ChiTietDangKy/ChiTietDangKy.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        children: [
                            {
                                path: 'home', component: _home_home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"]
                            },
                            {
                                path: 'create-congtac', component: _cong_tac_CreateCongTac_CreateCongTac_page__WEBPACK_IMPORTED_MODULE_4__["CreateCongTac"]
                            },
                            {
                                path: 'edit-congtac', component: _cong_tac_EditCongTac_EditCongTac_page__WEBPACK_IMPORTED_MODULE_8__["EditCongTac"]
                            },
                            {
                                path: 'quanly-congtac', component: _cong_tac_QuanLyCongTac_QuanLyCongTac_page__WEBPACK_IMPORTED_MODULE_5__["QuanLyCongTac"]
                            },
                            {
                                path: 'danhsach-choduyet', component: _cong_tac_DanhSachChoDuyet_DanhSachChoDuyet_page__WEBPACK_IMPORTED_MODULE_6__["DanhSachChoDuyet"]
                            },
                            {
                                path: 'danhsach-dangky', component: _cong_tac_DanhSachDangKy_DanhSachDangKy_page__WEBPACK_IMPORTED_MODULE_7__["DanhSachDangKy"]
                            },
                            {
                                path: 'chitiet-dangky', component: _cong_tac_ChiTietDangKy_ChiTietDangKy_page__WEBPACK_IMPORTED_MODULE_9__["ChiTietDangKy"]
                            },
                            {
                                path: 'announcement', component: _announcement_announcement_page__WEBPACK_IMPORTED_MODULE_3__["AnnouncementPage"]
                            }
                        ]
                    },
                    {
                        path: 'qlns',
                        children: [
                            {
                                path: 'dataChamCong', loadChildren: '../qlns/ChamCong/dataChamCong.module#dataChamCongModule'
                            }
                        ]
                    }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.page */ "./src/app/main/home/home.page.ts");
/* harmony import */ var _announcement_announcement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./announcement/announcement.page */ "./src/app/main/announcement/announcement.page.ts");
/* harmony import */ var _cong_tac_CreateCongTac_CreateCongTac_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cong-tac/CreateCongTac/CreateCongTac.page */ "./src/app/main/cong-tac/CreateCongTac/CreateCongTac.page.ts");
/* harmony import */ var _cong_tac_QuanLyCongTac_QuanLyCongTac_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cong-tac/QuanLyCongTac/QuanLyCongTac.page */ "./src/app/main/cong-tac/QuanLyCongTac/QuanLyCongTac.page.ts");
/* harmony import */ var _cong_tac_DanhSachChoDuyet_DanhSachChoDuyet_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cong-tac/DanhSachChoDuyet/DanhSachChoDuyet.page */ "./src/app/main/cong-tac/DanhSachChoDuyet/DanhSachChoDuyet.page.ts");
/* harmony import */ var _cong_tac_DanhSachDangKy_DanhSachDangKy_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cong-tac/DanhSachDangKy/DanhSachDangKy.page */ "./src/app/main/cong-tac/DanhSachDangKy/DanhSachDangKy.page.ts");
/* harmony import */ var _cong_tac_EditCongTac_EditCongTac_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cong-tac/EditCongTac/EditCongTac.page */ "./src/app/main/cong-tac/EditCongTac/EditCongTac.page.ts");
/* harmony import */ var _cong_tac_ChiTietDangKy_ChiTietDangKy_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cong-tac/ChiTietDangKy/ChiTietDangKy.page */ "./src/app/main/cong-tac/ChiTietDangKy/ChiTietDangKy.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_4__["MainRoutingModule"]
            ],
            declarations: [
                _home_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"],
                _announcement_announcement_page__WEBPACK_IMPORTED_MODULE_6__["AnnouncementPage"],
                _cong_tac_CreateCongTac_CreateCongTac_page__WEBPACK_IMPORTED_MODULE_7__["CreateCongTac"],
                _cong_tac_QuanLyCongTac_QuanLyCongTac_page__WEBPACK_IMPORTED_MODULE_8__["QuanLyCongTac"],
                _cong_tac_DanhSachChoDuyet_DanhSachChoDuyet_page__WEBPACK_IMPORTED_MODULE_9__["DanhSachChoDuyet"],
                _cong_tac_DanhSachDangKy_DanhSachDangKy_page__WEBPACK_IMPORTED_MODULE_10__["DanhSachDangKy"],
                _cong_tac_EditCongTac_EditCongTac_page__WEBPACK_IMPORTED_MODULE_11__["EditCongTac"],
                _cong_tac_ChiTietDangKy_ChiTietDangKy_page__WEBPACK_IMPORTED_MODULE_12__["ChiTietDangKy"]
            ]
        })
    ], MainModule);
    return MainModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map