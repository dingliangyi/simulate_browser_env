// HTMLParagraphElement对象
HTMLParagraphElement = function HTMLParagraphElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLParagraphElement, "HTMLParagraphElement");
Object.setPrototypeOf(HTMLParagraphElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLParagraphElement.prototype, "align", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLParagraphElement.prototype, "HTMLParagraphElementProto", "align_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLParagraphElement.prototype, "HTMLParagraphElementProto", "align_set", arguments)
    }
});
