// HTMLFormElement对象
HTMLFormElement = function HTMLFormElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLFormElement, "HTMLFormElement");
Object.setPrototypeOf(HTMLFormElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "acceptCharset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "acceptCharset_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "acceptCharset_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "action", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "action_get", arguments, 'http://www.chinastock.com.cn/newsite/cgs-services/stockFinance/businessAnnc.html')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "action_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "autocomplete", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "autocomplete_get", arguments, 'on')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "autocomplete_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "enctype", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "enctype_get", arguments, 'application/x-www-form-urlencoded')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "enctype_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "encoding", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "encoding_get", arguments, 'application/x-www-form-urlencoded')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "encoding_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "method", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "method_get", arguments, 'get')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "method_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "name", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "name_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "name_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "noValidate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "noValidate_get", arguments, false)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "noValidate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "target", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "target_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "target_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "elements", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "elements_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "length_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "checkValidity", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "checkValidity", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "reportValidity", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "reportValidity", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "requestSubmit", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "requestSubmit", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "reset", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "reset", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "submit", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "submit", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "rel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "rel_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "rel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLFormElement.prototype, "relList", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "relList_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLFormElement.prototype, "HTMLFormElementProto", "relList_set", arguments)
    }
});
