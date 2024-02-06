// HTMLTableCaptionElement对象
HTMLTableCaptionElement = function HTMLTableCaptionElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLTableCaptionElement, "HTMLTableCaptionElement");
Object.setPrototypeOf(HTMLTableCaptionElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLTableCaptionElement.prototype, "align", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCaptionElement.prototype, "HTMLTableCaptionElementProto", "align_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCaptionElement.prototype, "HTMLTableCaptionElementProto", "align_set", arguments)
    }
});
