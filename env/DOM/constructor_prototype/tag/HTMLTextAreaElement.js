// HTMLTextAreaElement对象
HTMLTextAreaElement = function HTMLTextAreaElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLTextAreaElement, "HTMLTextAreaElement");
Object.setPrototypeOf(HTMLTextAreaElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "autocomplete", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "autocomplete_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "autocomplete_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "cols", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "cols_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "cols_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "dirName", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "dirName_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "dirName_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "disabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "disabled_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "disabled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "form", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "form_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "maxLength", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "maxLength_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "maxLength_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "minLength", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "minLength_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "minLength_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "name", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "name_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "name_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "placeholder", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "placeholder_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "placeholder_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "readOnly", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "readOnly_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "readOnly_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "required", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "required_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "required_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "rows", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "rows_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "rows_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "wrap", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "wrap_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "wrap_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "type_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "defaultValue", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "defaultValue_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "defaultValue_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "value", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "value_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "value_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "textLength", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "textLength_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "willValidate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "willValidate_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "validity", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "validity_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "validationMessage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "validationMessage_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "labels", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "labels_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "selectionStart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "selectionStart_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "selectionStart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "selectionEnd", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "selectionEnd_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "selectionEnd_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "selectionDirection", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "selectionDirection_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "selectionDirection_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "checkValidity", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "checkValidity", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "reportValidity", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "reportValidity", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "select", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "select", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "setCustomValidity", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "setCustomValidity", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "setRangeText", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "setRangeText", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTextAreaElement.prototype, "setSelectionRange", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTextAreaElement.prototype, "HTMLTextAreaElementProto", "setSelectionRange", arguments)
    }
});
