// HTMLMetaElement对象
HTMLMetaElement = function HTMLMetaElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLMetaElement, "HTMLMetaElement");
Object.setPrototypeOf(HTMLMetaElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLMetaElement.prototype, "name", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElementProto", "name_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElementProto", "name_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMetaElement.prototype, "httpEquiv", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElementProto", "httpEquiv_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElementProto", "httpEquiv_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMetaElement.prototype, "content", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElementProto", "content_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElementProto", "content_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMetaElement.prototype, "media", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElementProto", "media_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElementProto", "media_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMetaElement.prototype, "scheme", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElementProto", "scheme_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElementProto", "scheme_set", arguments)
    }
});
