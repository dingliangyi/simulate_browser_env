dingvm.envFunc.NavigatorProto_plugins_get = function NavigatorProto_plugins_get() {
    return dingvm.memory.globalVar.pluginArray;
};
dingvm.envFunc.NavigatorProto_mimeTypes_get = function NavigatorProto_mimeTypes_get() {
    return dingvm.memory.globalVar.mimeTypeArray;
};
dingvm.envFunc.NavigatorProto_getBattery = function () {
    let battery = {}
    Object.setPrototypeOf(battery, BatteryManager.prototype)
    if (dingvm.config.proxy_navigator_battery) {
        battery = dingvm.toolsFunc.createProxyObj(battery, 'battery')
    }
    return {
        "then": function (callBack) {
            let _callBack = callBack;
            callBack = function () {
                return _callBack(battery);
            }
            if (dingvm.memory.asyncEvent.promise === undefined) {
                dingvm.memory.asyncEvent.promise = [];
            }
            dingvm.memory.asyncEvent.promise.push(callBack);
        }
    };
    // return new Promise(function (resolve, reject) {
    //     let battery = {}
    //     Object.setPrototypeOf(battery, BatteryManager.prototype)
    //     if (dingvm.config.proxy_navigator_battery) {
    //         battery = dingvm.toolsFunc.createProxyObj(battery, 'battery')
    //     }
    //
    //     resolve(battery)
    // })
};
dingvm.envFunc.NavigatorProto_userAgent_get = function () {
    let userAgent = [
        'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.0 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 YaBrowser/22.7.0 Yowser/2.5 Safari/537.36',
        'Mozilla/5.0 (Windows NT 6.3; Win64; rv:106.0) Gecko/20100101 Firefox/101.0',
        'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0',
        'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/97.0.4692.84 Mobile/15E148 Safari/604.1',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 8_0_2) AppleWebKit/570.41 (KHTML, like Gecko) Chrome/54.0.1307 Safari/537.36',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Mobile/15E148 Safari/604.1',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_3_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.41',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML; like Gecko) Mobile/12F70 MicroMessenger/6.1.5 NetType/WIFI',
        'Mozilla/5.0(Linux;Android 8.0;Pixel 4 XL) Gecko/20100101 Firefox/106.1.0',
        'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.1874.1841 Mobile Safari/537.36',
        'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.7779.1275 Mobile Safari/537.36',
        'Mozilla/5.0 (Linux; Android 7.1.2; Pixel Build/NHG47L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.82 Mobile Safari/537.36',
        'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.9682.1540 Mobile Safari/537.36',
        'Mozilla/5.0 (Linux; Android 9; HUAWEI CLT-AL00 Build/MVT3.128574.70; wv) Version/4.0 Chrome/100.0.4896.58 Quark/6.2.9.251 Mobile Safari/537.36',
        'Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/532.0 (KHTML, like Gecko) Chrome/4.0.211.0 Safari/532.0',
    ]
    return userAgent[_.random(userAgent.length, false)]
};
dingvm.envFunc.NavigatorProto_webkitPersistentStorage_get = function () {
    let obj = {}
    Object.setPrototypeOf(obj, DeprecatedStorageQuota)

    return obj
};
dingvm.envFunc.NavigatorProto_languages_get = function () {
    return ['zh-CN', 'zh']
};
dingvm.envFunc.NavigatorProto_vendor_get = function () {
    return "Google Inc."
};
dingvm.envFunc.NavigatorProto_appVersion_get = function () {
    return window.navigator.userAgent.split('/').slice(1).join('/')
};
dingvm.envFunc.NavigatorProto_appName_get = function () {
    return "Netscape"
};
dingvm.envFunc.NavigatorProto_appCodeName_get = function () {
    return "Mozilla"
};
dingvm.envFunc.NavigatorProto_platform_get = function () {
    return "Win32"
};
dingvm.envFunc.NavigatorProto_product_get = function () {
    return "Gecko"
};
dingvm.envFunc.NavigatorProto_connection_get = function () {
    let connection = {}
    Object.setPrototypeOf(connection, NetworkInformation.prototype)

    return connection
};
dingvm.envFunc.NavigatorProto_language_get = function () {
    return "zh-CN"
};
dingvm.envFunc.NavigatorProto_cookieEnabled_get = function () {
    return true
};
dingvm.envFunc.NavigatorProto_doNotTrack_get = function () {
    return 1
};
dingvm.envFunc.NavigatorProto_hardwareConcurrency_get = function () {
    let hard = [8, 12, 16, 24];
    return hard[_.random(hard.length, false)]
};
dingvm.envFunc.NavigatorProto_maxTouchPoints_get = function () {
    return 0
};
dingvm.envFunc.NavigatorProto_onLine_get = function () {
    return true
};
dingvm.envFunc.NavigatorProto_pdfViewerEnabled_get = function () {
    return true
};
dingvm.envFunc.NavigatorProto_productSub_get = function () {
    return "20030107"
};
dingvm.envFunc.NavigatorProto_vendorSub_get = function () {
    return ""
};
dingvm.envFunc.NavigatorProto_webdriver_get = function () {
    return false
};
dingvm.envFunc.NavigatorProto_deviceMemory_get = function () {
    // return 32
    return dingvm.memory.globalVar.navigator.deviceMemory
};
dingvm.envFunc.NavigatorProto_cpuClass_get = function () {
    // return 'x86'
    return undefined
};
dingvm.envFunc.NavigatorProto_webkitTemporaryStorage_get = function () {
    let obj = {}
    Object.setPrototypeOf(obj, DeprecatedStorageQuota)

    return obj
};
dingvm.envFunc.NavigatorProto_sendBeacon = function (url, data) {
    console.log(`调用了navigator.sendBeacon(${url}, ${data})`)
    return true
};
dingvm.envFunc.NavigatorProto_javaEnabled = function () {
    return false
}
dingvm.envFunc.NavigatorProto_userAgentData_get = function () {
    let obj = {}
    Object.setPrototypeOf(obj, NavigatorUAData.prototype)

    return obj
}
dingvm.envFunc.NavigatorProto_xr_get = function () {
    let obj = {}
    Object.setPrototypeOf(obj, XRSystem.prototype)

    return obj
}