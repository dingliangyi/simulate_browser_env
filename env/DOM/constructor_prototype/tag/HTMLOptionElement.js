// HTMLOptionElement对象
HTMLOptionElement = function HTMLOptionElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLOptionElement, "HTMLOptionElement");
Object.setPrototypeOf(HTMLOptionElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "disabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElementProto", "disabled_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElementProto", "disabled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "form", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElementProto", "form_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "label", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElementProto", "label_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElementProto", "label_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "defaultSelected", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElementProto", "defaultSelected_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElementProto", "defaultSelected_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "selected", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElementProto", "selected_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElementProto", "selected_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "value", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElementProto", "value_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElementProto", "value_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "text", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElementProto", "text_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElementProto", "text_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLOptionElement.prototype, "index", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLOptionElement.prototype, "HTMLOptionElementProto", "index_get", arguments)
    },
    set: undefined
});
