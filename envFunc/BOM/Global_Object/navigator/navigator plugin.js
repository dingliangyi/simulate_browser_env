//! MimeTypeArray_prototype
dingvm.envFunc.MimeTypeArrayProto_namedItem = function MimeTypeArrayProto_namedItem() {
    let name = arguments[0];
    return this[name];
};
dingvm.envFunc.MimeTypeArrayProto_item = function MimeTypeArrayProto_item() {
    let index = arguments[0];
    return this[index];
};
dingvm.envFunc.MimeTypeArrayProto_length_get = function MimeTypeArrayProto_length_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "length");
};
//! PluginArray_prototype
dingvm.envFunc.PluginArrayProto_namedItem = function PluginArrayProto_namedItem() {
    let name = arguments[0];
    return this[name];
};
dingvm.envFunc.PluginArrayProto_item = function PluginArrayProto_item() {
    let index = arguments[0];
    return this[index];
};
dingvm.envFunc.PluginArrayProto_length_get = function PluginArrayProto_length_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "length");
};
dingvm.envFunc.PluginArrayProto_refresh = function PluginArrayProto_refresh() {
    debugger;
};
//! MimeType_prototype
dingvm.envFunc.MimeTypeProto_suffixes_get = function MimeTypeProto_suffixes_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "suffixes");
};
dingvm.envFunc.MimeTypeProto_enabledPlugin_get = function MimeTypeProto_enabledPlugin_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "enabledPlugin");
};
dingvm.envFunc.MimeTypeProto_description_get = function MimeTypeProto_description_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "description");
};
dingvm.envFunc.MimeTypeProto_type_get = function MimeTypeProto_type_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "type");
};
//! Plugin_prototype
dingvm.envFunc.PluginProto_length_get = function PluginProto_length_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "length");
};
dingvm.envFunc.PluginProto_filename_get = function PluginProto_filename_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "filename");
};
dingvm.envFunc.PluginProto_description_get = function PluginProto_description_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "description");
};
dingvm.envFunc.PluginProto_name_get = function PluginProto_name_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "name");
};
dingvm.envFunc.PluginProto_namedItem = function PluginProto_namedItem() {
    let name = arguments[0];
    return this[name];
};
dingvm.envFunc.PluginProto_item = function PluginProto_item() {
    let index = arguments[0];
    return this[index];
};