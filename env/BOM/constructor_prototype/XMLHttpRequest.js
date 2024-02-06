// XMLHttpRequest对象
XMLHttpRequest = function XMLHttpRequest() {
};
dingvm.toolsFunc.safe_constructor_prototype(XMLHttpRequest, "XMLHttpRequest");
Object.setPrototypeOf(XMLHttpRequest.prototype, XMLHttpRequestEventTarget.prototype);
dingvm.toolsFunc.defineProperty(XMLHttpRequest, "UNSENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest, "OPENED", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest, "HEADERS_RECEIVED", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest, "LOADING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest, "DONE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 4
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "onreadystatechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "onreadystatechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "onreadystatechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "readyState", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "readyState_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "timeout", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "timeout_get", arguments, 0)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "timeout_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "withCredentials", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "withCredentials_get", arguments, false)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "withCredentials_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "upload", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "upload_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseURL", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "responseURL_get", arguments, '')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "status", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "status_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "statusText", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "statusText_get", arguments, '')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseType", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "responseType_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "responseType_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "response", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "response_get", arguments, '')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseText", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "responseText_get", arguments, '')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseXML", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "responseXML_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "UNSENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "OPENED", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "HEADERS_RECEIVED", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "LOADING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "DONE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 4
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "abort", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "abort", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "getAllResponseHeaders", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "getAllResponseHeaders", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "getResponseHeader", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "getResponseHeader", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "open", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "open", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "overrideMimeType", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "overrideMimeType", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "send", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "send", arguments)
    }
});
dingvm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "setRequestHeader", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequestProto", "setRequestHeader", arguments)
    }
});