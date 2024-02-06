// HTMLHtmlElement对象
HTMLHtmlElement = function HTMLHtmlElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLHtmlElement, "HTMLHtmlElement");
Object.setPrototypeOf(HTMLHtmlElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLHtmlElement.prototype, "version", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLHtmlElement.prototype, "HTMLHtmlElementProto", "version_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLHtmlElement.prototype, "HTMLHtmlElementProto", "version_set", arguments)
    }
});
