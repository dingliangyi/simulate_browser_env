// PointerEvent对象
PointerEvent = function PointerEvent(type) {
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
dingvm.toolsFunc.safe_constructor_prototype(PointerEvent, "PointerEvent");
Object.setPrototypeOf(PointerEvent.prototype, MouseEvent.prototype);
dingvm.toolsFunc.defineProperty(PointerEvent.prototype, "pointerId", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEventProto", "pointerId_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PointerEvent.prototype, "width", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEventProto", "width_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PointerEvent.prototype, "height", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEventProto", "height_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PointerEvent.prototype, "pressure", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEventProto", "pressure_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PointerEvent.prototype, "tiltX", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEventProto", "tiltX_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PointerEvent.prototype, "tiltY", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEventProto", "tiltY_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PointerEvent.prototype, "azimuthAngle", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEventProto", "azimuthAngle_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PointerEvent.prototype, "altitudeAngle", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEventProto", "altitudeAngle_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PointerEvent.prototype, "tangentialPressure", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEventProto", "tangentialPressure_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PointerEvent.prototype, "twist", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEventProto", "twist_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PointerEvent.prototype, "pointerType", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEventProto", "pointerType_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PointerEvent.prototype, "isPrimary", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEventProto", "isPrimary_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PointerEvent.prototype, "getCoalescedEvents", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEventProto", "getCoalescedEvents", arguments)
    }
});
dingvm.toolsFunc.defineProperty(PointerEvent.prototype, "getPredictedEvents", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEventProto", "getPredictedEvents", arguments)
    }
});
