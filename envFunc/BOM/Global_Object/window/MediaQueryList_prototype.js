dingvm.envFunc.MediaQueryListProto_media_get = function () {
    return dingvm.toolsFunc.getProtoArr.call(this, 'media')
};
dingvm.envFunc.MediaQueryListProto_matches_get = function () {
    // todo 临时返回true
    return true
};
dingvm.envFunc.MediaQueryListProto_onchange_get = function () {
    let onchange = dingvm.toolsFunc.getProtoArr.call(this, 'onchange')
    if (onchange)
        return onchange

    return null
};
dingvm.envFunc.MediaQueryListProto_onchange_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'onchange', value)
};
dingvm.envFunc.MediaQueryListProto_addListener = function () {
    debugger
};
dingvm.envFunc.MediaQueryListProto_removeListener = function () {
    debugger
};
