// HTMLDivElement对象
HTMLDivElement = function HTMLDivElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLDivElement, "HTMLDivElement");
Object.setPrototypeOf(HTMLDivElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLDivElement.prototype, "align", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLDivElement.prototype, "HTMLDivElementProto", "align_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLDivElement.prototype, "HTMLDivElementProto", "align_set", arguments)
    }
});
