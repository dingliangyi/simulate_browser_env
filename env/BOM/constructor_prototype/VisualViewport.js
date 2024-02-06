// VisualViewport对象
VisualViewport = function VisualViewport() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(VisualViewport, "VisualViewport");
Object.setPrototypeOf(VisualViewport.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(VisualViewport.prototype, "offsetLeft", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewportProto", "offsetLeft_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(VisualViewport.prototype, "offsetTop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewportProto", "offsetTop_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(VisualViewport.prototype, "pageLeft", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewportProto", "pageLeft_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(VisualViewport.prototype, "pageTop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewportProto", "pageTop_get", arguments, 684)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(VisualViewport.prototype, "width", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewportProto", "width_get", arguments, 1471.199951171875)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(VisualViewport.prototype, "height", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewportProto", "height_get", arguments, 760)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(VisualViewport.prototype, "scale", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewportProto", "scale_get", arguments, 1)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(VisualViewport.prototype, "onresize", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewportProto", "onresize_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewportProto", "onresize_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(VisualViewport.prototype, "onscroll", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewportProto", "onscroll_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewportProto", "onscroll_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(VisualViewport.prototype, "segments", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewportProto", "segments_get", arguments, null)
    },
    set: undefined
});
