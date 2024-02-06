// HTMLUnknownElement对象
HTMLUnknownElement = function HTMLUnknownElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLUnknownElement, "HTMLUnknownElement");
Object.setPrototypeOf(HTMLUnknownElement.prototype, HTMLElement.prototype);
