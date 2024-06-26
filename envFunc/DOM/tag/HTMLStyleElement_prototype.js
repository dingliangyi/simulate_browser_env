dingvm.envFunc.HTMLStyleElementProto_disabled_get = function () {
    return false
};
dingvm.envFunc.HTMLStyleElementProto_disabled_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'disabled', value)
};
dingvm.envFunc.HTMLStyleElementProto_media_get = function () {
    return ''
};
dingvm.envFunc.HTMLStyleElementProto_media_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'media', value)
};
dingvm.envFunc.HTMLStyleElementProto_type_get = function () {
    return 'text/css'
};
dingvm.envFunc.HTMLStyleElementProto_type_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'type', value)
};
dingvm.envFunc.HTMLStyleElementProto_sheet_get = function () {
    let obj = {}
    Object.setPrototypeOf(obj, CSSStyleSheet.prototype)

    return obj
};
dingvm.envFunc.HTMLStyleElementProto_blocking_get = function () {
    debugger
};
dingvm.envFunc.HTMLStyleElementProto_blocking_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'blocking', value)
};
