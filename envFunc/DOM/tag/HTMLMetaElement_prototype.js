dingvm.envFunc.HTMLMetaElementProto_content_get = function HTMLMetaElementProto_content_get() {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'content')
};
dingvm.envFunc.HTMLMetaElementProto_content_set = function HTMLMetaElementProto_content_set() {
    let value = arguments[0];
    return dingvm.toolsFunc.setProtoArr.call(this, "content", value);
};