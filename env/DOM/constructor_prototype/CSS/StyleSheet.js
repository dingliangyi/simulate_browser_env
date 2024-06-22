// StyleSheet对象
StyleSheet = function StyleSheet() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(StyleSheet, "StyleSheet");
dingvm.toolsFunc.defineProperty(StyleSheet.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheetProto", "type_get", arguments, 'text/css')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(StyleSheet.prototype, "href", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheetProto", "href_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(StyleSheet.prototype, "ownerNode", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheetProto", "ownerNode_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(StyleSheet.prototype, "parentStyleSheet", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheetProto", "parentStyleSheet_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(StyleSheet.prototype, "title", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheetProto", "title_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(StyleSheet.prototype, "media", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheetProto", "media_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheetProto", "media_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(StyleSheet.prototype, "disabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheetProto", "disabled_get", arguments, false)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, StyleSheet.prototype, "StyleSheetProto", "disabled_set", arguments)
    }
});
