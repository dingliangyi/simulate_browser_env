// HTMLUListElement对象
HTMLUListElement = function HTMLUListElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLUListElement, "HTMLUListElement");
Object.setPrototypeOf(HTMLUListElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLUListElement.prototype, "compact", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLUListElement.prototype, "HTMLUListElementProto", "compact_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLUListElement.prototype, "HTMLUListElementProto", "compact_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLUListElement.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLUListElement.prototype, "HTMLUListElementProto", "type_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLUListElement.prototype, "HTMLUListElementProto", "type_set", arguments)
    }
});
