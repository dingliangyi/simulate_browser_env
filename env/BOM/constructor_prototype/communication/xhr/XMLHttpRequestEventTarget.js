// XMLHttpRequestEventTarget对象
XMLHttpRequestEventTarget = function XMLHttpRequestEventTarget() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(XMLHttpRequestEventTarget, "XMLHttpRequestEventTarget");
Object.setPrototypeOf(XMLHttpRequestEventTarget.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onloadstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTargetProto", "onloadstart_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTargetProto", "onloadstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onprogress", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTargetProto", "onprogress_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTargetProto", "onprogress_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onabort", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTargetProto", "onabort_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTargetProto", "onabort_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTargetProto", "onerror_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTargetProto", "onerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onload", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTargetProto", "onload_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTargetProto", "onload_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "ontimeout", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTargetProto", "ontimeout_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTargetProto", "ontimeout_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onloadend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTargetProto", "onloadend_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTargetProto", "onloadend_set", arguments)
    }
});
