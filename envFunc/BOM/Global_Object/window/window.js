dingvm.envFunc.window_top_get = function () {
    return window
};
dingvm.envFunc.window_self_get = function () {
    return window
};
dingvm.envFunc.window_name_get = function () {
    return ''
};
dingvm.envFunc.window_indexedDB_get = function () {
    let obj = {}
    Object.setPrototypeOf(obj, IDBFactory.prototype)

    return obj
};
dingvm.envFunc.window_openDatabase = function (name, version, displayName, estimatedSize, creationCallback) {
    // if (dingvm.memory.database[name]) {
    //     return dingvm.memory.database[name]
    // }
    //
    // let obj = {}
    // dingvm.toolsFunc.setProtoArr.call(obj, "version", version)
    // Object.setPrototypeOf(obj, Database_delete.prototype)
    // dingvm.memory.database[name] = obj
    //
    // return obj

    return undefined
};
dingvm.envFunc.window_getComputedStyle = function (element) {
    return element.style
};
dingvm.envFunc.window_innerWidth_get = function () {
    let innerWidth = dingvm.toolsFunc.getProtoArr('innerWidth')
    if (innerWidth === undefined) {
        return dingvm.memory.globalVar.width;
    }

    return innerWidth
};
dingvm.envFunc.window_innerWidth_set = function () {
    dingvm.toolsFunc.setProtoArr('innerWidth')
};
dingvm.envFunc.window_innerHeight_get = function () {
    let innerHeight = dingvm.toolsFunc.getProtoArr('innerHeight')
    if (innerHeight === undefined) {
        return dingvm.memory.globalVar.height;
    }

    return innerHeight
};
dingvm.envFunc.window_innerHeight_set = function () {
    dingvm.toolsFunc.setProtoArr('innerHeight')
};
dingvm.envFunc.window_outerWidth_get = function () {
    let outerWidth = dingvm.toolsFunc.getProtoArr('outerWidth')
    if (outerWidth === undefined) {
        return dingvm.memory.globalVar.width;
    }

    return outerWidth
};
dingvm.envFunc.window_outerWidth_set = function () {
    dingvm.toolsFunc.setProtoArr('outerWidth')
};
dingvm.envFunc.window_outerHeight_get = function () {
    let outerHeight = dingvm.toolsFunc.getProtoArr('outerHeight')
    if (outerHeight === undefined) {
        return dingvm.memory.globalVar.height;
    }

    return outerHeight
};
dingvm.envFunc.window_outerHeight_set = function () {
    dingvm.toolsFunc.setProtoArr('outerHeight')
};
dingvm.envFunc.window_styleMedia_get = function () {
    let StyleMedia = function StyleMedia() {

    }
    StyleMedia.prototype = {
        "type": "screen",
        matchMedium() {
        }
    }
    dingvm.toolsFunc.safe_constructor_prototype(StyleMedia, 'StyleMedia')
    let obj = {}
    Object.setPrototypeOf(obj, StyleMedia.prototype)

    return obj
};
dingvm.envFunc.window_crypto_get = function () {
    let obj = {
        subtle: {}
    }
    Object.setPrototypeOf(obj, Crypto.prototype)
    Object.setPrototypeOf(obj.subtle, SubtleCrypto.prototype)

    return obj
};
dingvm.envFunc.window_visualViewport_get = function () {
    let obj = {}
    Object.setPrototypeOf(obj, VisualViewport.prototype)

    return obj
};
dingvm.envFunc.window_external_get = function () {
    let obj = dingvm.toolsFunc.getProtoArr('external')
    if (obj) {
        return obj
    }
    obj = {}
    obj.toString = function () {
        return '[object External]'
    }

    return obj
};
dingvm.envFunc.window_external_set = function () {
    dingvm.toolsFunc.setProtoArr('external')
};
dingvm.envFunc.window_DeviceMotionEvent = function () {
    debugger
};
dingvm.envFunc.window_DeviceOrientationEvent = function () {
    debugger
};
dingvm.envFunc.window_open = function () {
    debugger
};
dingvm.envFunc.window_fetch = function () {
    debugger
};
dingvm.envFunc.window_frames_get = function () {
    return window
};
dingvm.envFunc.window_frames_set = function () {
    debugger
};