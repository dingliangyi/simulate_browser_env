// MimeTypeArray对象
MimeTypeArray = function MimeTypeArray() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(MimeTypeArray, "MimeTypeArray");
dingvm.toolsFunc.defineProperty(MimeTypeArray.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MimeTypeArray.prototype, "MimeTypeArrayProto", "length_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MimeTypeArray.prototype, "item", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MimeTypeArray.prototype, "MimeTypeArrayProto", "item", arguments)
    }
});
dingvm.toolsFunc.defineProperty(MimeTypeArray.prototype, "namedItem", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MimeTypeArray.prototype, "MimeTypeArrayProto", "namedItem", arguments)
    }
});
