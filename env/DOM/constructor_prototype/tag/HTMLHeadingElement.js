// HTMLHeadingElement对象
HTMLHeadingElement = function HTMLHeadingElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLHeadingElement, "HTMLHeadingElement");
Object.setPrototypeOf(HTMLHeadingElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLHeadingElement.prototype, "align", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLHeadingElement.prototype, "HTMLHeadingElementProto", "align_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLHeadingElement.prototype, "HTMLHeadingElementProto", "align_set", arguments)
    }
});
