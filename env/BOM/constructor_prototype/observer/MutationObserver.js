// MutationObserver对象
MutationObserver = function MutationObserver() {
    return dingvm.toolsFunc.throwError("TypeError", "Failed to construct 'MutationObserver': 1 argument required, but only 0 present.")
};
dingvm.toolsFunc.safe_constructor_prototype(MutationObserver, "MutationObserver");
dingvm.toolsFunc.defineProperty(MutationObserver.prototype, "disconnect", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MutationObserver.prototype, "MutationObserverProto", "disconnect", arguments)
    }
});
dingvm.toolsFunc.defineProperty(MutationObserver.prototype, "observe", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MutationObserver.prototype, "MutationObserverProto", "observe", arguments)
    }
});
dingvm.toolsFunc.defineProperty(MutationObserver.prototype, "takeRecords", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MutationObserver.prototype, "MutationObserverProto", "takeRecords", arguments)
    }
});
