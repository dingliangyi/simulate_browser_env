// Navigator对象
Navigator = function Navigator() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Navigator, "Navigator");
dingvm.toolsFunc.defineProperty(Navigator.prototype, "vendorSub", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "vendorSub_get", arguments, '')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "productSub", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "productSub_get", arguments, '20030107')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "vendor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "vendor_get", arguments, 'Google Inc.')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "maxTouchPoints", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "maxTouchPoints_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "scheduling", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "scheduling_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "userActivation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "userActivation_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "doNotTrack", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "doNotTrack_get", arguments, '1')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "geolocation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "geolocation_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "connection", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "connection_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "plugins", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "plugins_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "mimeTypes", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "mimeTypes_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "pdfViewerEnabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "pdfViewerEnabled_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "webkitTemporaryStorage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "webkitTemporaryStorage_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "webkitPersistentStorage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "webkitPersistentStorage_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "hardwareConcurrency", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "hardwareConcurrency_get", arguments, 12)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "cookieEnabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "cookieEnabled_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "appCodeName", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "appCodeName_get", arguments, 'Mozilla')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "appName", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "appName_get", arguments, 'Netscape')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "appVersion", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "appVersion_get", arguments, '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "platform", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "platform_get", arguments, 'Win32')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "product", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "product_get", arguments, 'Gecko')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "userAgent", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "userAgent_get", arguments, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "language", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "language_get", arguments, 'zh-CN')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "languages", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "languages_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "onLine", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "onLine_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "webdriver", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "webdriver_get", arguments, false)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "getGamepads", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "getGamepads", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "javaEnabled", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "javaEnabled", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "sendBeacon", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "sendBeacon", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "vibrate", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "vibrate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "bluetooth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "bluetooth_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "clipboard", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "clipboard_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "credentials", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "credentials_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "keyboard", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "keyboard_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "managed", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "managed_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "mediaDevices", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "mediaDevices_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "storage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "storage_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "serviceWorker", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "serviceWorker_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "virtualKeyboard", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "virtualKeyboard_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "wakeLock", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "wakeLock_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "deviceMemory", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "deviceMemory_get", arguments, 8)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "ink", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "ink_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "hid", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "hid_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "locks", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "locks_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "mediaCapabilities", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "mediaCapabilities_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "mediaSession", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "mediaSession_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "permissions", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "permissions_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "presentation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "presentation_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "serial", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "serial_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "usb", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "usb_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "windowControlsOverlay", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "windowControlsOverlay_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "xr", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "xr_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "userAgentData", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "userAgentData_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "canShare", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "canShare", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "share", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "share", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "clearAppBadge", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "clearAppBadge", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "getBattery", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "getBattery", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "getUserMedia", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "getUserMedia", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "requestMIDIAccess", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "requestMIDIAccess", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "requestMediaKeySystemAccess", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "requestMediaKeySystemAccess", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "setAppBadge", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "setAppBadge", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "webkitGetUserMedia", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "webkitGetUserMedia", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "getInstalledRelatedApps", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "getInstalledRelatedApps", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "registerProtocolHandler", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "registerProtocolHandler", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "unregisterProtocolHandler", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "unregisterProtocolHandler", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "cpuClass", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "cpuClass_get", arguments)
    },
    set: undefined
});

