// HTMLCollection对象
HTMLCollection = function HTMLCollection() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLCollection, "HTMLCollection");
dingvm.toolsFunc.defineProperty(HTMLCollection.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLCollection.prototype, "HTMLCollectionProto", "length_get", arguments, 82)
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
Object.defineProperties(HTMLCollection.prototype, {
    [Symbol.iterator]: {
        value: dingvm.toolsFunc.iterator,
        configurable: true
    }
})