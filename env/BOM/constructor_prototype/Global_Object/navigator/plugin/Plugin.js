// Plugin对象
Plugin = function Plugin() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Plugin, "Plugin");
dingvm.toolsFunc.defineProperty(Plugin.prototype, "name", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Plugin.prototype, "PluginProto", "name_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Plugin.prototype, "filename", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Plugin.prototype, "PluginProto", "filename_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Plugin.prototype, "description", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Plugin.prototype, "PluginProto", "description_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Plugin.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Plugin.prototype, "PluginProto", "length_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Plugin.prototype, "item", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Plugin.prototype, "PluginProto", "item", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Plugin.prototype, "namedItem", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Plugin.prototype, "PluginProto", "namedItem", arguments)
    }
});
Object.defineProperties(Plugin.prototype, {
    [Symbol.iterator]: {
        value: dingvm.toolsFunc.iterator,
        configurable: true
    }
})