// HTMLSelectElement对象
HTMLSelectElement = function HTMLSelectElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLSelectElement, "HTMLSelectElement");
Object.setPrototypeOf(HTMLSelectElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "autocomplete", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "autocomplete_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "autocomplete_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "disabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "disabled_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "disabled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "form", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "form_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "multiple", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "multiple_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "multiple_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "name", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "name_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "name_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "required", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "required_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "required_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "size", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "size_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "size_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "type_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "options", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "options_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "length_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "length_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "selectedOptions_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "selectedIndex", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "selectedIndex_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "selectedIndex_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "value", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "value_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "value_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "willValidate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "willValidate_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "validity", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "validity_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "validationMessage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "validationMessage_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "labels", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "labels_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "add", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "add", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "checkValidity", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "checkValidity", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "item", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "item", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "namedItem", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "namedItem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "remove", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "remove", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "reportValidity", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "reportValidity", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLSelectElement.prototype, "setCustomValidity", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLSelectElement.prototype, "HTMLSelectElementProto", "setCustomValidity", arguments)
    }
});
