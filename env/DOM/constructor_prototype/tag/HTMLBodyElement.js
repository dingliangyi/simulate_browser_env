// HTMLBodyElement对象
HTMLBodyElement = function HTMLBodyElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLBodyElement, "HTMLBodyElement");
Object.setPrototypeOf(HTMLBodyElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "text", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "text_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "text_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "link", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "link_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "link_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "vLink", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "vLink_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "vLink_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "aLink", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "aLink_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "aLink_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "bgColor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "bgColor_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "bgColor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "background", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "background_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "background_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onblur", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onblur_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onblur_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onerror_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onfocus", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onfocus_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onfocus_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onload", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onload_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onload_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onresize", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onresize_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onresize_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onscroll", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onscroll_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onscroll_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onafterprint", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onafterprint_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onafterprint_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onbeforeprint", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onbeforeprint_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onbeforeprint_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onbeforeunload", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onbeforeunload_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onbeforeunload_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onhashchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onhashchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onhashchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onlanguagechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onlanguagechange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onlanguagechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onmessage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onmessage_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onmessage_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onmessageerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onmessageerror_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onmessageerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onoffline", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onoffline_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onoffline_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "ononline", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "ononline_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "ononline_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onpagehide", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onpagehide_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onpagehide_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onpageshow", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onpageshow_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onpageshow_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onpopstate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onpopstate_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onpopstate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onrejectionhandled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onrejectionhandled_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onrejectionhandled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onstorage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onstorage_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onstorage_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onunhandledrejection", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onunhandledrejection_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onunhandledrejection_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBodyElement.prototype, "onunload", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onunload_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBodyElement.prototype, "HTMLBodyElementProto", "onunload_set", arguments)
    }
});
