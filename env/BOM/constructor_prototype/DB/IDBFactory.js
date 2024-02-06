// IDBFactory对象
IDBFactory = function IDBFactory() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(IDBFactory, "IDBFactory");
dingvm.toolsFunc.defineProperty(IDBFactory.prototype, "cmp", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, IDBFactory.prototype, "IDBFactoryProto", "cmp", arguments)
    }
});
dingvm.toolsFunc.defineProperty(IDBFactory.prototype, "databases", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, IDBFactory.prototype, "IDBFactoryProto", "databases", arguments)
    }
});
dingvm.toolsFunc.defineProperty(IDBFactory.prototype, "deleteDatabase", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, IDBFactory.prototype, "IDBFactoryProto", "deleteDatabase", arguments)
    }
});
dingvm.toolsFunc.defineProperty(IDBFactory.prototype, "open", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, IDBFactory.prototype, "IDBFactoryProto", "open", arguments)
    }
});
