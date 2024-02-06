// UIEvent对象
UIEvent = function UIEvent(type) {
    if (arguments.length === 0)
        plugin.throwError(TypeError, "Failed to construct 'Event': 1 argument required, but only 0 present.");
    this.type = type;

    Object.defineProperty(this, 'isTrusted', {
        enumerable: true,
        configurable: false,
        get: function () {
            return true;
        },
        set: undefined
    })
};
dingvm.toolsFunc.safe_constructor_prototype(UIEvent, "UIEvent");
Object.setPrototypeOf(UIEvent.prototype, Event.prototype);
dingvm.toolsFunc.defineProperty(UIEvent.prototype, "view", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, UIEvent.prototype, "UIEventProto", "view_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(UIEvent.prototype, "detail", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, UIEvent.prototype, "UIEventProto", "detail_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(UIEvent.prototype, "sourceCapabilities", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, UIEvent.prototype, "UIEventProto", "sourceCapabilities_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(UIEvent.prototype, "which", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, UIEvent.prototype, "UIEventProto", "which_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(UIEvent.prototype, "initUIEvent", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, UIEvent.prototype, "UIEventProto", "initUIEvent", arguments)
    }
});
