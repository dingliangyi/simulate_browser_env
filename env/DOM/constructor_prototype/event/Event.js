// Event对象
Event = function Event(type) {
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
dingvm.toolsFunc.safe_constructor_prototype(Event, "Event");
dingvm.toolsFunc.defineProperty(Event, "NONE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(Event, "CAPTURING_PHASE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(Event, "AT_TARGET", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(Event, "BUBBLING_PHASE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3
});
dingvm.toolsFunc.defineProperty(Event.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "type_get", arguments)
    },
    set: function () {
        dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "type_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "target", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "target_get", arguments)
    },
    set: function () {
        dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "target_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "currentTarget", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "currentTarget_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "eventPhase", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "eventPhase_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "bubbles", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "bubbles_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "cancelable", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "cancelable_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "defaultPrevented", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "defaultPrevented_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "composed", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "composed_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "timeStamp", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "timeStamp_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "srcElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "srcElement_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "returnValue", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "returnValue_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "returnValue_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "cancelBubble", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "cancelBubble_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "cancelBubble_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "NONE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(Event.prototype, "CAPTURING_PHASE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(Event.prototype, "AT_TARGET", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(Event.prototype, "BUBBLING_PHASE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3
});
dingvm.toolsFunc.defineProperty(Event.prototype, "composedPath", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "composedPath", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "initEvent", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "initEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "preventDefault", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "preventDefault", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "stopImmediatePropagation", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "stopImmediatePropagation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "stopPropagation", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "stopPropagation", arguments)
    }
});
