// HTMLStyleElement对象
HTMLStyleElement = function HTMLStyleElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLStyleElement, "HTMLStyleElement");
Object.setPrototypeOf(HTMLStyleElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLStyleElement.prototype, "disabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElementProto", "disabled_get", arguments, false)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElementProto", "disabled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLStyleElement.prototype, "media", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElementProto", "media_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElementProto", "media_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLStyleElement.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElementProto", "type_get", arguments, 'text/css')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElementProto", "type_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLStyleElement.prototype, "sheet", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElementProto", "sheet_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLStyleElement.prototype, "blocking", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElementProto", "blocking_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElementProto", "blocking_set", arguments)
    }
});
