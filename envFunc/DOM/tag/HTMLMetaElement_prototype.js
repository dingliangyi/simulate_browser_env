dingvm.envFunc.HTMLMetaElementProto_content_get = function () {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'content')
};
dingvm.envFunc.HTMLMetaElementProto_content_set = function () {
    let value = arguments[0];
    return dingvm.toolsFunc.setProtoArr.call(this, "content", value);
};
dingvm.envFunc.HTMLMetaElementProto_name_get = function () {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'name')
};
dingvm.envFunc.HTMLMetaElementProto_name_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'name', value)
};
