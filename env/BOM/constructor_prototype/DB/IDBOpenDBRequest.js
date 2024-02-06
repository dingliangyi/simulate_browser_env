// IDBOpenDBRequest对象
IDBOpenDBRequest = function IDBOpenDBRequest() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(IDBOpenDBRequest, "IDBOpenDBRequest");
Object.setPrototypeOf(IDBOpenDBRequest.prototype, IDBRequest.prototype);
dingvm.toolsFunc.defineProperty(IDBOpenDBRequest.prototype, "onblocked", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequestProto", "onblocked_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequestProto", "onblocked_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(IDBOpenDBRequest.prototype, "onupgradeneeded", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequestProto", "onupgradeneeded_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequestProto", "onupgradeneeded_set", arguments)
    }
});
