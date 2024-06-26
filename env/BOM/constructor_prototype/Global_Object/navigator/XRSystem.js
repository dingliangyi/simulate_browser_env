// XRSystem对象
XRSystem = function XRSystem() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(XRSystem, "XRSystem");
Object.setPrototypeOf(XRSystem.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(XRSystem.prototype, "ondevicechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XRSystem.prototype, "XRSystemProto", "ondevicechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, XRSystem.prototype, "XRSystemProto", "ondevicechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XRSystem.prototype, "isSessionSupported", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, XRSystem.prototype, "XRSystemProto", "isSessionSupported", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XRSystem.prototype, "requestSession", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, XRSystem.prototype, "XRSystemProto", "requestSession", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XRSystem.prototype, "supportsSession", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, XRSystem.prototype, "XRSystemProto", "supportsSession", arguments)
    }
});
