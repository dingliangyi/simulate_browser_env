// HTMLOListElement对象
HTMLOListElement = function HTMLOListElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLOListElement, "HTMLOListElement");
Object.setPrototypeOf(HTMLOListElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLOListElement.prototype, "reversed", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElementProto", "reversed_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElementProto", "reversed_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLOListElement.prototype, "start", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElementProto", "start_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElementProto", "start_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLOListElement.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElementProto", "type_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElementProto", "type_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLOListElement.prototype, "compact", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElementProto", "compact_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElementProto", "compact_set", arguments)
    }
});
