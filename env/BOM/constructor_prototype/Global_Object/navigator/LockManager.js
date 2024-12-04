// LockManager对象
LockManager = function LockManager() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(LockManager, "LockManager");
dingvm.toolsFunc.defineProperty(LockManager.prototype, "query", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, LockManager.prototype, "LockManagerProto", "query", arguments)
    }
});
dingvm.toolsFunc.defineProperty(LockManager.prototype, "request", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, LockManager.prototype, "LockManagerProto", "request", arguments)
    }
});
