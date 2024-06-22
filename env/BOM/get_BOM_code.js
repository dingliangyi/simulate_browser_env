const fs = require('fs')

const files_constructor_prototype = [
    "/constructor_prototype/EventTarget.js",

    //> BOM全局对象
    "/constructor_prototype/Global_Object/window/WindowProperties.js",
    "/constructor_prototype/Global_Object/window/Window.js",
    "/constructor_prototype/Global_Object/window/MediaQueryList.js",

    "/constructor_prototype/Global_Object/Location.js",
    "/constructor_prototype/Global_Object/Navigator.js",
    "/constructor_prototype/Global_Object/History.js",

    "/constructor_prototype/Global_Object/Screen/ScreenOrientation.js",
    "/constructor_prototype/Global_Object/Screen/Screen.js",


    //> plugin
    "/constructor_prototype/plugin/Plugin.js",
    "/constructor_prototype/plugin/PluginArray.js",
    "/constructor_prototype/plugin/MimeType.js",
    "/constructor_prototype/plugin/MimeTypeArray.js",

    //> 电池
    // "/constructor_prototype/BatteryManager.js",

    //> 离线与存储 API 原型
    "/constructor_prototype/Storage.js",

    //> 数据通信 API
    //> xhr
    // "/constructor_prototype/communication/xhr/XMLHttpRequestEventTarget.js",
    // "/constructor_prototype/communication/xhr/XMLHttpRequest.js",
    // "/constructor_prototype/communication/xhr/XMLHttpRequestUpload.js",
    //> RTC
    // "/constructor_prototype/communication/RTC/RTCPeerConnection.js",

    //> 性能 API
    // "/constructor_prototype/performance/Performance.js",
    // "/constructor_prototype/performance/PerformanceNavigation.js",
    // "/constructor_prototype/performance/EventCounts.js",

    //> web sql
    // "/constructor_prototype/DB/DataBase.js", // todo 浏览器已经不支持
    "/constructor_prototype/DB/IDBFactory.js",
    "/constructor_prototype/DB/IDBRequest.js",
    "/constructor_prototype/DB/IDBOpenDBRequest.js",

    //> audio
    // "/constructor_prototype/audio/AudioParam.js",
    // "/constructor_prototype/audio/AudioBuffer.js",
    // "/constructor_prototype/audio/OfflineAudioCompletionEvent.js",
    // "/constructor_prototype/audio/AudioNode.js",
    // "/constructor_prototype/audio/AudioScheduledSourceNode.js",
    // "/constructor_prototype/audio/OscillatorNode.js",
    // "/constructor_prototype/audio/DynamicsCompressorNode.js",
    // "/constructor_prototype/audio/BaseAudioContext.js",
    // "/constructor_prototype/audio/OfflineAudioContext.js",

    //> 网络
    // "/constructor_prototype/NetworkInformation.js",

    //> 监视 API
    // "/constructor_prototype/observer/MutationObserver.js",

    //> 其他
    "/constructor_prototype/Crypto.js",
    // "/constructor_prototype/SubtleCrypto.js",
    "/constructor_prototype/VisualViewport.js",
]

const files_instance = [
    //> BOM全局对象
    "/instance/navigator.js",
    "/instance/location.js",

    //> 离线与存储 API instance
    "/instance/localStorage.js",
    "/instance/sessionStorage.js",
    "/instance/history.js",
    "/instance/screen.js",

    //> 性能API
    // "/instance/performance.js",

    //> 其他
    // "/instance/DeprecatedStorageQuota.js",
    "/instance/chrome.js",
]

const filePath = __dirname

function read_BOM_code() {
    let JsCode = ""

    for (let i = 0; i < files_constructor_prototype.length; i++) {
        JsCode += fs.readFileSync(filePath + '/' + files_constructor_prototype[i]).toString() + '\r\n'
    }

    for (let i = 0; i < files_instance.length; i++) {
        JsCode += fs.readFileSync(filePath + '/' + files_instance[i]).toString() + '\r\n'
    }

    return JsCode
}


module.exports = {
    read_BOM_code,
}