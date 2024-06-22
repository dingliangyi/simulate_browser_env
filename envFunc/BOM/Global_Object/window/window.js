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
    console.log(`调用了 window_getComputedStyle 元素：${element.jquery.toString()}`)
    Object.setPrototypeOf(style2, CSSStyleDeclaration.prototype)
    return Object.assign(style2, element.style)
};
dingvm.envFunc.window_innerWidth_get = function () {
    let innerWidth = dingvm.toolsFunc.getProtoArr.call(window, 'innerWidth')
    if (innerWidth === undefined) {
        return dingvm.memory.globalVar.width;
    }

    return innerWidth
};
dingvm.envFunc.window_innerWidth_set = function () {
    dingvm.toolsFunc.setProtoArr('innerWidth')
};
dingvm.envFunc.window_innerHeight_get = function () {
    let innerHeight = dingvm.toolsFunc.getProtoArr.call(window, 'innerHeight')
    if (innerHeight === undefined) {
        return dingvm.memory.globalVar.height;
    }

    return innerHeight
};
dingvm.envFunc.window_innerHeight_set = function () {
    dingvm.toolsFunc.setProtoArr('innerHeight')
};
dingvm.envFunc.window_outerWidth_get = function () {
    let outerWidth = dingvm.toolsFunc.getProtoArr.call(window, 'outerWidth')
    if (outerWidth === undefined) {
        return dingvm.memory.globalVar.width;
    }

    return outerWidth
};
dingvm.envFunc.window_outerWidth_set = function () {
    dingvm.toolsFunc.setProtoArr('outerWidth')
};
dingvm.envFunc.window_outerHeight_get = function () {
    let outerHeight = dingvm.toolsFunc.getProtoArr.call(window, 'outerHeight')
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
    let obj = dingvm.toolsFunc.getProtoArr.call(window, 'external')
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
// dingvm.envFunc.window_frames_set = function () {
//     debugger
// };
dingvm.envFunc.window_origin_get = function () {
    return location.origin
};
dingvm.envFunc.window_closed_get = function () {
    return false
};
dingvm.envFunc.window_matchMedia = function (matchMedia_str) {
    let obj = {}
    Object.setPrototypeOf(obj, MediaQueryList.prototype)
    dingvm.toolsFunc.setProtoArr.call(obj, 'media', matchMedia_str)

    return obj
};
dingvm.envFunc.window_webkitRequestFileSystem = function (storage_type, space_size, success_callback, error_callback) {
    debugger
    try {
        let fs = {
            root: {
                getFile(path, param, callback) {
                    console.log(`调用了 getFile(webkitRequestFileSystem) 路径：${path} 参数：${param} 回调：${callback.toString()}`)
                }
            }
        }
        success_callback(fs)
    } catch (e) {
        error_callback({})
    }
    console.log(`调用了 window_webkitRequestFileSystem 存储类型：${storage_type} 空间大小：${space_size} 成功回调：${success_callback.toString()} 失败回调：${error_callback.toString()}`)
}