// PluginArray对象
PluginArray = function PluginArray() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(PluginArray, "PluginArray");
dingvm.toolsFunc.defineProperty(PluginArray.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArrayProto", "length_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PluginArray.prototype, "item", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArrayProto", "item", arguments)
    }
});
dingvm.toolsFunc.defineProperty(PluginArray.prototype, "namedItem", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArrayProto", "namedItem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(PluginArray.prototype, "refresh", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArrayProto", "refresh", arguments)
    }
});
Object.defineProperties(PluginArray.prototype, {
    [Symbol.iterator]: {
        value: dingvm.toolsFunc.iterator,
        configurable: true
    }
})