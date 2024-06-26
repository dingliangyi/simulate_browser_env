// NamedNodeMap对象
NamedNodeMap = function NamedNodeMap() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(NamedNodeMap, "NamedNodeMap");
dingvm.toolsFunc.defineProperty(NamedNodeMap.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMapProto", "length_get", arguments, 2)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(NamedNodeMap.prototype, "getNamedItem", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMapProto", "getNamedItem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(NamedNodeMap.prototype, "getNamedItemNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMapProto", "getNamedItemNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(NamedNodeMap.prototype, "item", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMapProto", "item", arguments)
    }
});
dingvm.toolsFunc.defineProperty(NamedNodeMap.prototype, "removeNamedItem", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMapProto", "removeNamedItem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(NamedNodeMap.prototype, "removeNamedItemNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMapProto", "removeNamedItemNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(NamedNodeMap.prototype, "setNamedItem", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMapProto", "setNamedItem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(NamedNodeMap.prototype, "setNamedItemNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMapProto", "setNamedItemNS", arguments)
    }
});
