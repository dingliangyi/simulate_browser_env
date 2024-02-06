// HTMLLIElement对象
HTMLLIElement = function HTMLLIElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLLIElement, "HTMLLIElement");
Object.setPrototypeOf(HTMLLIElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLLIElement.prototype, "value", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElementProto", "value_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElementProto", "value_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLLIElement.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElementProto", "type_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElementProto", "type_set", arguments)
    }
});
