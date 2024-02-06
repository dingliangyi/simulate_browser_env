// HTMLDListElement对象
HTMLDListElement = function HTMLDListElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLDListElement, "HTMLDListElement");
Object.setPrototypeOf(HTMLDListElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLDListElement.prototype, "compact", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLDListElement.prototype, "HTMLDListElementProto", "compact_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLDListElement.prototype, "HTMLDListElementProto", "compact_set", arguments)
    }
});
