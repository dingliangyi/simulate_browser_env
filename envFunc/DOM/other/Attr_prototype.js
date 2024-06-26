dingvm.envFunc.AttrProto_namespaceURI_get = function () {
    return null
};
dingvm.envFunc.AttrProto_prefix_get = function () {
    return null
};
dingvm.envFunc.AttrProto_localName_get = function () {
    return dingvm.toolsFunc.getProtoArr.call(this, 'name')
};
dingvm.envFunc.AttrProto_name_get = function () {
    return dingvm.toolsFunc.getProtoArr.call(this, 'name')
};
dingvm.envFunc.AttrProto_value_get = function () {
    return dingvm.toolsFunc.getProtoArr.call(this, 'value')
};
dingvm.envFunc.AttrProto_value_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'value', value)
};
dingvm.envFunc.AttrProto_ownerElement_get = function () {
    return dingvm.toolsFunc.getProtoArr.call(this, 'ownerElement')
};
dingvm.envFunc.AttrProto_specified_get = function () {
    return true
};
