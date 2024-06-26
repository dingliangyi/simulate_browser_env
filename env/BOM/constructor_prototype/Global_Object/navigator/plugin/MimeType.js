// MimeType对象
MimeType = function MimeType() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(MimeType, "MimeType");
dingvm.toolsFunc.defineProperty(MimeType.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MimeType.prototype, "MimeTypeProto", "type_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MimeType.prototype, "suffixes", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MimeType.prototype, "MimeTypeProto", "suffixes_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MimeType.prototype, "description", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MimeType.prototype, "MimeTypeProto", "description_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MimeType.prototype, "enabledPlugin", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MimeType.prototype, "MimeTypeProto", "enabledPlugin_get", arguments)
    },
    set: undefined
});
