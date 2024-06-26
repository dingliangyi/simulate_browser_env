// DOMImplementation对象
DOMImplementation = function DOMImplementation() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(DOMImplementation, "DOMImplementation");
dingvm.toolsFunc.defineProperty(DOMImplementation.prototype, "createDocument", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, DOMImplementation.prototype, "DOMImplementationProto", "createDocument", arguments)
    }
});
dingvm.toolsFunc.defineProperty(DOMImplementation.prototype, "createDocumentType", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, DOMImplementation.prototype, "DOMImplementationProto", "createDocumentType", arguments)
    }
});
dingvm.toolsFunc.defineProperty(DOMImplementation.prototype, "createHTMLDocument", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, DOMImplementation.prototype, "DOMImplementationProto", "createHTMLDocument", arguments)
    }
});
dingvm.toolsFunc.defineProperty(DOMImplementation.prototype, "hasFeature", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, DOMImplementation.prototype, "DOMImplementationProto", "hasFeature", arguments)
    }
});
