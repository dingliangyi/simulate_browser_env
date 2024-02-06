// Crypto对象
Crypto = function Crypto() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Crypto, "Crypto");
dingvm.toolsFunc.defineProperty(Crypto.prototype, "getRandomValues", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Crypto.prototype, "CryptoProto", "getRandomValues", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Crypto.prototype, "subtle", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Crypto.prototype, "CryptoProto", "subtle_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Crypto.prototype, "randomUUID", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Crypto.prototype, "CryptoProto", "randomUUID", arguments)
    }
});
