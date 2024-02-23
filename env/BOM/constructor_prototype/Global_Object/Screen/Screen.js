// Screen对象
Screen = function Screen() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Screen, "Screen");
Object.setPrototypeOf(Screen.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(Screen.prototype, "availWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "availWidth_get", arguments, 1536)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "availHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "availHeight_get", arguments, 864)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "width", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "width_get", arguments, 1536)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "height", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "height_get", arguments, 864)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "colorDepth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "colorDepth_get", arguments, 24)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "pixelDepth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "pixelDepth_get", arguments, 24)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "availLeft", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "availLeft_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "availTop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "availTop_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "orientation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "orientation_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "onchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "onchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "onchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "isExtended", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "isExtended_get", arguments, false)
    },
    set: undefined
});
