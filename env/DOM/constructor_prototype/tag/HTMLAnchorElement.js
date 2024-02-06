// HTMLAnchorElement对象
HTMLAnchorElement = function HTMLAnchorElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLAnchorElement, "HTMLAnchorElement");
Object.setPrototypeOf(HTMLAnchorElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "target", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "target_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "target_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "download", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "download_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "download_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "ping", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "ping_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "ping_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "rel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "rel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "rel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "relList", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "relList_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "relList_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hreflang", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "hreflang_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "hreflang_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "type_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "type_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "referrerPolicy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "referrerPolicy_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "referrerPolicy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "text", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "text_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "text_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "coords", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "coords_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "coords_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "charset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "charset_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "charset_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "name", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "name_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "name_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "rev", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "rev_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "rev_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "shape", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "shape_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "shape_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "origin", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "origin_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "protocol", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "protocol_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "protocol_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "username", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "username_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "username_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "password", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "password_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "password_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "host", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "host_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "host_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hostname", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "hostname_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "hostname_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "port", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "port_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "port_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "pathname", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "pathname_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "pathname_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "search", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "search_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "search_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hash", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "hash_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "hash_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "href", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "href_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "href_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "toString", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "toString", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hrefTranslate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "hrefTranslate_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElementProto", "hrefTranslate_set", arguments)
    }
});
