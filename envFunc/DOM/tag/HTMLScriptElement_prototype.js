dingvm.envFunc.HTMLScriptElementProto_src_get = function () {
    return this.jquery.attr('src')
};
dingvm.envFunc.HTMLScriptElementProto_src_set = function () {
    this.jquery.attr('src', arguments[0])
};
dingvm.envFunc.HTMLScriptElementProto_type_get = function () {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'type')
};
dingvm.envFunc.HTMLScriptElementProto_type_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'type', value)
};