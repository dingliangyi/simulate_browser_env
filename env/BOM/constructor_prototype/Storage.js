// Storage对象
Storage = function Storage() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Storage, "Storage");
dingvm.toolsFunc.defineProperty(Storage.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Storage.prototype, "StorageProto", "length_get", arguments, 13)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Storage.prototype, "clear", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Storage.prototype, "StorageProto", "clear", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Storage.prototype, "getItem", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Storage.prototype, "StorageProto", "getItem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Storage.prototype, "key", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Storage.prototype, "StorageProto", "key", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Storage.prototype, "removeItem", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Storage.prototype, "StorageProto", "removeItem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Storage.prototype, "setItem", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Storage.prototype, "StorageProto", "setItem", arguments)
    }
});
