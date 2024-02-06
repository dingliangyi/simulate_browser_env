// HTMLCollection对象
HTMLCollection = function HTMLCollection() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLCollection, "HTMLCollection");
dingvm.toolsFunc.defineProperty(HTMLCollection.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLCollection.prototype, "HTMLCollectionProto", "length_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLCollection.prototype, "item", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLCollection.prototype, "HTMLCollectionProto", "item", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLCollection.prototype, "namedItem", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLCollection.prototype, "HTMLCollectionProto", "namedItem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLCollection.prototype, "forEach", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLCollection.prototype, "HTMLCollectionProto", "forEach", arguments)
    }
});
