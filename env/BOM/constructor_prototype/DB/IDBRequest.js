// IDBRequest对象
IDBRequest = function IDBRequest() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(IDBRequest, "IDBRequest");
Object.setPrototypeOf(IDBRequest.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(IDBRequest.prototype, "result", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequestProto", "result_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(IDBRequest.prototype, "error", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequestProto", "error_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(IDBRequest.prototype, "source", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequestProto", "source_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(IDBRequest.prototype, "transaction", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequestProto", "transaction_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(IDBRequest.prototype, "readyState", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequestProto", "readyState_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(IDBRequest.prototype, "onsuccess", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequestProto", "onsuccess_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequestProto", "onsuccess_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(IDBRequest.prototype, "onerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequestProto", "onerror_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequestProto", "onerror_set", arguments)
    }
});
