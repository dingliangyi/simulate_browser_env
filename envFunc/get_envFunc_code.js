const fs = require('fs')

const files_envFunc = [

    "/BOM/EventTarget_prototype.js",
    "/BOM/Storage_prototype.js",

    //> BOM全局对象
    "/BOM/Global_Object/location.js",
    "/BOM/Global_Object/History_prototype.js",
    //> screen
    "/BOM/Global_Object/Screen/Screen_prototype.js",
    "/BOM/Global_Object/Screen/ScreenOrientation_prototype.js",
    //> window
    "/BOM/Global_Object/window/window.js",
    "/BOM/Global_Object/window/chrome.js",
    "/BOM/Global_Object/window/MediaQueryList_prototype.js",

    //> navigator
    "/BOM/Global_Object/navigator/navigator plugin.js",
    "/BOM/Global_Object/navigator/Navigator_prototype.js",
    "/BOM/Global_Object/navigator/BatteryManager_prototype.js",
    "/BOM/Global_Object/navigator/NetworkInformation_prototype.js",
    // "/BOM/Global_Object/navigator/NavigatorUAData_prototype.js",
    // "/BOM/Global_Object/navigator/XRSystem_prototype.js",


    //> 数据通信 API
    //> xhr
    "/BOM/communication/xhr/XMLHttpRequestEventTarget_prototype.js",
    "/BOM/communication/xhr/XMLHttpRequest_prototype.js",
    //> RTC
    // "/BOM/communication/RTC/RTCPeerConnection_prototype.js",

    //> performance
    "/BOM/performance/Performance_prototype.js",
    "/BOM/performance/PerformanceNavigation_prototype.js",

    //> DB
    // "/BOM/DB/DataBase_prototype.js", // todo 浏览器已经不支持
    "/BOM/DB/IDBFactory_prototype.js",
    "/BOM/DB/IDBOpenDBRequest_prototype.js",
    "/BOM/DB/IDBRequest_prototype.js",

    //> audio
    "/BOM/audio/OfflineAudioContext_prototype.js",
    "/BOM/audio/BaseAudioContext_prototype.js",
    "/BOM/audio/AudioParam_prototype.js",
    "/BOM/audio/OscillatorNode_prototype.js",
    "/BOM/audio/AudioNode_prototype.js",
    "/BOM/audio/DynamicsCompressorNode_prototype.js",
    "/BOM/audio/AudioScheduledSourceNode_prototype.js",
    "/BOM/audio/AudioBuffer_prototype.js",
    "/BOM/audio/OfflineAudioCompletionEvent_prototype.js",

    //> 监视 API
    "/BOM/observer/MutationObserver_prototype.js",

    //> base
    "/DOM/document.js",
    "/DOM/Document_prototype.js",
    "/DOM/Element_prototype.js",
    "/DOM/Node_prototype.js",

    //> event
    "/DOM/event/Event.js",
    // "/DOM/event/MouseEvent_prototype.js",

    //> css
    "/DOM/css/CSSStyleDeclaration_prototype.js",
    "/DOM/css/CSS.js",

    //> tag
    "/DOM/tag/HTMLElement_prototype.js",
    // "/DOM/tag/HTMLIFrameElement_prototype.js",
    "/DOM/tag/HTMLImageElement_prototype.js",
    "/DOM/tag/HTMLAnchorElement_prototype.js",
    "/DOM/tag/HTMLCanvasElement_prototype.js",
    "/DOM/tag/HTMLDivElement_prototype.js",
    "/DOM/tag/HTMLInputElement_prototype.js",
    "/DOM/tag/HTMLMetaElement_prototype.js",
    "/DOM/tag/HTMLFormElement_prototype.js",
    // "/DOM/tag/HTMLAllCollection_prototype.js",
    // "/DOM/tag/HTMLScriptElement_prototype.js",
    "/DOM/tag/HTMLCollection_prototype.js",
    "/DOM/tag/HTMLStyleElement_prototype.js",
    // "/DOM/tag/CharacterData_prototype.js",
    // "/DOM/tag/Text_prototype.js",
    // "/DOM/tag/HTMLVideoElement_prototype.js",
    "/DOM/tag/HTMLMediaElement_prototype.js",

    //> canvas webgl
    "/DOM/canvas/WebGLRenderingContext_prototype.js",
    // "/DOM/canvas/CanvasRenderingContext2D_prototype.js",
    "/DOM/canvas/CanvasRenderingContext2D_prototype_.js",

    //> 其他
    //> DOM
    "/DOM/other/XPathExpression_prototype.js",
    // "/DOM/other/Attr_prototype.js",
    // "/DOM/other/NamedNodeMap_prototype.js",
    //> BOM
    "/BOM/EventCounts_prototype.js",
    "/BOM/VisualViewport_prototype.js",
]

const filePath = __dirname

function read_envFunc_code() {
    let JsCode = ""

    for (let i = 0; i < files_envFunc.length; i++) {
        JsCode += fs.readFileSync(filePath + '/' + files_envFunc[i]).toString() + ';\r\n'
    }

    return JsCode
}

module.exports = {
    read_envFunc_code
}