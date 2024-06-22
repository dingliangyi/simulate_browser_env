// XMLHttpRequestUpload对象
XMLHttpRequestUpload = function XMLHttpRequestUpload() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(XMLHttpRequestUpload, "XMLHttpRequestUpload");
Object.setPrototypeOf(XMLHttpRequestUpload.prototype, XMLHttpRequestEventTarget.prototype);
