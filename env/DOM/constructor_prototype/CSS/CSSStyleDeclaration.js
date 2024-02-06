// CSSStyleDeclaration对象
// todo Symbol.iterator未实现
CSSStyleDeclaration = function CSSStyleDeclaration() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(CSSStyleDeclaration, "CSSStyleDeclaration");
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "cssText", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "cssText_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "cssText_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "length_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "parentRule", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "parentRule_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "cssFloat", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "cssFloat_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "cssFloat_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "getPropertyPriority", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "getPropertyPriority", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "getPropertyValue", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "getPropertyValue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "item", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "item", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "removeProperty", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "removeProperty", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "setProperty", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "setProperty", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "forEach", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "forEach", arguments)
    }
});
