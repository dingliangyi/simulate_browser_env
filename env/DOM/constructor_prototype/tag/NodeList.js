// NodeList对象
NodeList = function NodeList() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(NodeList, "NodeList");
dingvm.toolsFunc.defineProperty(NodeList.prototype, "entries", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, NodeList.prototype, "NodeListProto", "entries", arguments)
    }
});
dingvm.toolsFunc.defineProperty(NodeList.prototype, "keys", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, NodeList.prototype, "NodeListProto", "keys", arguments)
    }
});
dingvm.toolsFunc.defineProperty(NodeList.prototype, "values", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, NodeList.prototype, "NodeListProto", "values", arguments)
    }
});
dingvm.toolsFunc.defineProperty(NodeList.prototype, "forEach", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, NodeList.prototype, "NodeListProto", "forEach", arguments)
    }
});
dingvm.toolsFunc.defineProperty(NodeList.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, NodeList.prototype, "NodeListProto", "length_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(NodeList.prototype, "item", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, NodeList.prototype, "NodeListProto", "item", arguments)
    }
});
