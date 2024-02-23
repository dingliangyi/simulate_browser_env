// ScreenOrientation对象
ScreenOrientation = function ScreenOrientation() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(ScreenOrientation, "ScreenOrientation");
Object.setPrototypeOf(ScreenOrientation.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(ScreenOrientation.prototype, "angle", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientationProto", "angle_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(ScreenOrientation.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientationProto", "type_get", arguments, 'landscape-primary')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(ScreenOrientation.prototype, "onchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientationProto", "onchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientationProto", "onchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(ScreenOrientation.prototype, "lock", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientationProto", "lock", arguments)
    }
});
dingvm.toolsFunc.defineProperty(ScreenOrientation.prototype, "unlock", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientationProto", "unlock", arguments)
    }
});
