// HTMLAllCollection对象
HTMLAllCollection = function HTMLAllCollection() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor");
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLAllCollection, "HTMLAllCollection");
dingvm.toolsFunc.defineProperty(HTMLAllCollection.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAllCollection.prototype, "HTMLAllCollectionProto", "length_get", arguments, 464)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLAllCollection.prototype, "item", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAllCollection.prototype, "HTMLAllCollectionProto", "item", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAllCollection.prototype, "namedItem", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAllCollection.prototype, "HTMLAllCollectionProto", "namedItem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLAllCollection.prototype, "forEach", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLAllCollection.prototype, "HTMLAllCollectionProto", "forEach", arguments)
    }
});
