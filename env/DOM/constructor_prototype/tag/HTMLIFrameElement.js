// HTMLIFrameElement对象
HTMLIFrameElement = function HTMLIFrameElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLIFrameElement, "HTMLIFrameElement");
Object.setPrototypeOf(HTMLIFrameElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "src", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "src_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "src_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "srcdoc", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "srcdoc_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "srcdoc_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "name", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "name_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "name_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "sandbox", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "sandbox_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "sandbox_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "allowFullscreen", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "allowFullscreen_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "allowFullscreen_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "width", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "width_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "width_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "height", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "height_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "height_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "contentDocument", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "contentDocument_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "contentWindow", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "contentWindow_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "referrerPolicy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "referrerPolicy_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "referrerPolicy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "csp", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "csp_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "csp_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "allow", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "allow_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "allow_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "featurePolicy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "featurePolicy_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "align", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "align_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "align_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "scrolling", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "scrolling_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "scrolling_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "frameBorder", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "frameBorder_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "frameBorder_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "longDesc", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "longDesc_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "longDesc_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "marginHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "marginHeight_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "marginHeight_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "marginWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "marginWidth_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "marginWidth_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "getSVGDocument", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "getSVGDocument", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "loading", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "loading_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "loading_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "allowPaymentRequest", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "allowPaymentRequest_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "allowPaymentRequest_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLIFrameElement.prototype, "credentialless", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "credentialless_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLIFrameElement.prototype, "HTMLIFrameElementProto", "credentialless_set", arguments)
    }
});