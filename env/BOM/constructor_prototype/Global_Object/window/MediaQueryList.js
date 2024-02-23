// MediaQueryList对象
MediaQueryList = function MediaQueryList() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(MediaQueryList, "MediaQueryList");
Object.setPrototypeOf(MediaQueryList.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(MediaQueryList.prototype, "media", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryListProto", "media_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MediaQueryList.prototype, "matches", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryListProto", "matches_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MediaQueryList.prototype, "onchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryListProto", "onchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryListProto", "onchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(MediaQueryList.prototype, "addListener", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryListProto", "addListener", arguments)
    }
});
dingvm.toolsFunc.defineProperty(MediaQueryList.prototype, "removeListener", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryListProto", "removeListener", arguments)
    }
});
