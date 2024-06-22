// CSSStyleSheet对象
CSSStyleSheet = function CSSStyleSheet() {
};
dingvm.toolsFunc.safe_constructor_prototype(CSSStyleSheet, "CSSStyleSheet");
Object.setPrototypeOf(CSSStyleSheet.prototype, StyleSheet.prototype);
dingvm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "ownerRule", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheetProto", "ownerRule_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "cssRules", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheetProto", "cssRules_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "rules", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheetProto", "rules_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "addRule", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheetProto", "addRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "deleteRule", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheetProto", "deleteRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "insertRule", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheetProto", "insertRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "removeRule", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheetProto", "removeRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "replace", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheetProto", "replace", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "replaceSync", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheetProto", "replaceSync", arguments)
    }
});
