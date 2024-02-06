// HTMLCanvasElement对象
HTMLCanvasElement = function HTMLCanvasElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLCanvasElement, "HTMLCanvasElement");
Object.setPrototypeOf(HTMLCanvasElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "width", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElementProto", "width_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElementProto", "width_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "height", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElementProto", "height_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElementProto", "height_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "captureStream", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElementProto", "captureStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "getContext", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElementProto", "getContext", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElementProto", "toBlob", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "toDataURL", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElementProto", "toDataURL", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLCanvasElement.prototype, "transferControlToOffscreen", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElementProto", "transferControlToOffscreen", arguments)
    }
});
