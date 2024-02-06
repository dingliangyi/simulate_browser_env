// HTMLInputElement对象
HTMLInputElement = function HTMLInputElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLInputElement, "HTMLInputElement");
Object.setPrototypeOf(HTMLInputElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "accept", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "accept_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "accept_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "alt", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "alt_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "alt_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "autocomplete", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "autocomplete_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "autocomplete_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "defaultChecked", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "defaultChecked_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "defaultChecked_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "checked", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "checked_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "checked_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "dirName", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "dirName_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "dirName_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "disabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "disabled_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "disabled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "form", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "form_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "files", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "files_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "files_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "formAction", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "formAction_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "formAction_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "formEnctype", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "formEnctype_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "formEnctype_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "formMethod", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "formMethod_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "formMethod_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "formNoValidate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "formNoValidate_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "formNoValidate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "formTarget", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "formTarget_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "formTarget_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "height", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "height_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "height_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "indeterminate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "indeterminate_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "indeterminate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "list", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "list_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "max", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "max_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "max_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "maxLength", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "maxLength_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "maxLength_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "min", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "min_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "min_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "minLength", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "minLength_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "minLength_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "multiple", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "multiple_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "multiple_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "name", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "name_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "name_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "pattern", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "pattern_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "pattern_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "placeholder", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "placeholder_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "placeholder_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "readOnly", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "readOnly_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "readOnly_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "required", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "required_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "required_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "size", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "size_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "size_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "src", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "src_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "src_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "step", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "step_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "step_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "type_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "type_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "defaultValue", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "defaultValue_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "defaultValue_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "value", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "value_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "value_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "valueAsDate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "valueAsDate_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "valueAsDate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "valueAsNumber", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "valueAsNumber_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "valueAsNumber_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "width", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "width_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "width_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "willValidate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "willValidate_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "validity", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "validity_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "validationMessage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "validationMessage_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "labels", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "labels_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "selectionStart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "selectionStart_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "selectionStart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "selectionEnd", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "selectionEnd_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "selectionEnd_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "selectionDirection", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "selectionDirection_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "selectionDirection_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "align", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "align_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "align_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "useMap", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "useMap_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "useMap_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "webkitdirectory", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "webkitdirectory_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "webkitdirectory_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "incremental", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "incremental_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "incremental_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "checkValidity", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "checkValidity", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "reportValidity", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "reportValidity", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "select", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "select", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "setCustomValidity", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "setCustomValidity", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "setRangeText", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "setRangeText", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "setSelectionRange", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "setSelectionRange", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "showPicker", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "showPicker", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "stepDown", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "stepDown", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "stepUp", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "stepUp", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLInputElement.prototype, "webkitEntries", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLInputElement.prototype, "HTMLInputElementProto", "webkitEntries_get", arguments)
    },
    set: undefined
});
