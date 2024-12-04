// MediaDevices对象
MediaDevices = function MediaDevices() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(MediaDevices, "MediaDevices");
Object.setPrototypeOf(MediaDevices.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(MediaDevices.prototype, "enumerateDevices", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevicesProto", "enumerateDevices", arguments)
    }
});
dingvm.toolsFunc.defineProperty(MediaDevices.prototype, "getSupportedConstraints", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevicesProto", "getSupportedConstraints", arguments)
    }
});
dingvm.toolsFunc.defineProperty(MediaDevices.prototype, "getUserMedia", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevicesProto", "getUserMedia", arguments)
    }
});
dingvm.toolsFunc.defineProperty(MediaDevices.prototype, "ondevicechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevicesProto", "ondevicechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevicesProto", "ondevicechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(MediaDevices.prototype, "getDisplayMedia", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevicesProto", "getDisplayMedia", arguments)
    }
});
dingvm.toolsFunc.defineProperty(MediaDevices.prototype, "setCaptureHandleConfig", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevicesProto", "setCaptureHandleConfig", arguments)
    }
});
