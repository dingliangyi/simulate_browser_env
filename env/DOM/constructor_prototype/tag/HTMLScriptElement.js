// HTMLScriptElement对象
HTMLScriptElement = function HTMLScriptElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLScriptElement, "HTMLScriptElement");
Object.setPrototypeOf(HTMLScriptElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLScriptElement, "supports", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement, "HTMLScriptElement", "supports", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "src", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "src_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "src_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "type_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "type_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "noModule", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "noModule_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "noModule_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "charset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "charset_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "charset_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "async", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "async_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "async_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "defer", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "defer_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "defer_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "crossOrigin", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "crossOrigin_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "crossOrigin_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "text", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "text_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "text_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "referrerPolicy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "referrerPolicy_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "referrerPolicy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "event", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "event_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "event_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "htmlFor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "htmlFor_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "htmlFor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "integrity", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "integrity_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "integrity_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "fetchPriority", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "fetchPriority_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "fetchPriority_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLScriptElement.prototype, "blocking", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "blocking_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLScriptElement.prototype, "HTMLScriptElementProto", "blocking_set", arguments)
    }
});
