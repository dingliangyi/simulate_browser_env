// HTMLButtonElement对象
HTMLButtonElement = function HTMLButtonElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLButtonElement, "HTMLButtonElement");
Object.setPrototypeOf(HTMLButtonElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "disabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "disabled_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "disabled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "form", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "form_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "formAction", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "formAction_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "formAction_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "formEnctype", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "formEnctype_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "formEnctype_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "formMethod", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "formMethod_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "formMethod_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "formNoValidate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "formNoValidate_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "formNoValidate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "formTarget", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "formTarget_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "formTarget_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "name", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "name_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "name_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "type_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "type_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "value", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "value_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "value_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "willValidate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "willValidate_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "validity", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "validity_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "validationMessage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "validationMessage_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "labels", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "labels_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "checkValidity", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "checkValidity", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "reportValidity", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "reportValidity", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLButtonElement.prototype, "setCustomValidity", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLButtonElement.prototype, "HTMLButtonElementProto", "setCustomValidity", arguments)
    }
});
