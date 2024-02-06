// MouseEvent对象
MouseEvent = function MouseEvent(type) {
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
dingvm.toolsFunc.safe_constructor_prototype(MouseEvent, "MouseEvent");
Object.setPrototypeOf(MouseEvent.prototype, UIEvent.prototype);
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "screenX", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "screenX_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "screenY", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "screenY_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "clientX", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "clientX_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "clientY", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "clientY_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "ctrlKey", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "ctrlKey_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "shiftKey", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "shiftKey_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "altKey", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "altKey_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "metaKey", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "metaKey_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "button", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "button_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "buttons", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "buttons_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "relatedTarget", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "relatedTarget_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "pageX", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "pageX_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "pageY", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "pageY_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "x", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "x_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "y", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "y_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "offsetX", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "offsetX_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "offsetY", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "offsetY_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "movementX", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "movementX_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "movementY", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "movementY_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "fromElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "fromElement_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "toElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "toElement_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "layerX", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "layerX_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "layerY", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "layerY_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "getModifierState", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "getModifierState", arguments)
    }
});
dingvm.toolsFunc.defineProperty(MouseEvent.prototype, "initMouseEvent", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MouseEvent.prototype, "MouseEventProto", "initMouseEvent", arguments)
    }
});
