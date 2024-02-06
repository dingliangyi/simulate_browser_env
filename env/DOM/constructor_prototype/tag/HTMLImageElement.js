// HTMLImageElement对象
HTMLImageElement = function HTMLImageElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLImageElement, "HTMLImageElement");
Object.setPrototypeOf(HTMLImageElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "alt", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "alt_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "alt_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "src", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "src_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "src_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "srcset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "srcset_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "srcset_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "sizes", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "sizes_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "sizes_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "crossOrigin", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "crossOrigin_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "crossOrigin_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "useMap", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "useMap_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "useMap_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "isMap", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "isMap_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "isMap_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "width", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "width_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "width_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "height", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "height_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "height_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "naturalWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "naturalWidth_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "naturalHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "naturalHeight_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "complete", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "complete_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "currentSrc", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "currentSrc_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "referrerPolicy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "referrerPolicy_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "referrerPolicy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "decoding", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "decoding_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "decoding_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "name", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "name_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "name_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "lowsrc", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "lowsrc_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "lowsrc_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "align", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "align_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "align_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "hspace", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "hspace_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "hspace_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "vspace", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "vspace_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "vspace_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "longDesc", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "longDesc_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "longDesc_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "border", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "border_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "border_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "x", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "x_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "y", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "y_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "decode", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "decode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "fetchPriority", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "fetchPriority_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "fetchPriority_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLImageElement.prototype, "loading", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "loading_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElementProto", "loading_set", arguments)
    }
});
