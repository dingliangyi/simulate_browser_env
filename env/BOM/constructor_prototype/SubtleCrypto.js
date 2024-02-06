// SubtleCrypto对象
SubtleCrypto = function SubtleCrypto() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(SubtleCrypto, "SubtleCrypto");
dingvm.toolsFunc.defineProperty(SubtleCrypto.prototype, "decrypt", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCryptoProto", "decrypt", arguments)
    }
});
dingvm.toolsFunc.defineProperty(SubtleCrypto.prototype, "deriveBits", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCryptoProto", "deriveBits", arguments)
    }
});
dingvm.toolsFunc.defineProperty(SubtleCrypto.prototype, "deriveKey", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCryptoProto", "deriveKey", arguments)
    }
});
dingvm.toolsFunc.defineProperty(SubtleCrypto.prototype, "digest", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCryptoProto", "digest", arguments)
    }
});
dingvm.toolsFunc.defineProperty(SubtleCrypto.prototype, "encrypt", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCryptoProto", "encrypt", arguments)
    }
});
dingvm.toolsFunc.defineProperty(SubtleCrypto.prototype, "exportKey", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCryptoProto", "exportKey", arguments)
    }
});
dingvm.toolsFunc.defineProperty(SubtleCrypto.prototype, "generateKey", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCryptoProto", "generateKey", arguments)
    }
});
dingvm.toolsFunc.defineProperty(SubtleCrypto.prototype, "importKey", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCryptoProto", "importKey", arguments)
    }
});
dingvm.toolsFunc.defineProperty(SubtleCrypto.prototype, "sign", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCryptoProto", "sign", arguments)
    }
});
dingvm.toolsFunc.defineProperty(SubtleCrypto.prototype, "unwrapKey", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCryptoProto", "unwrapKey", arguments)
    }
});
dingvm.toolsFunc.defineProperty(SubtleCrypto.prototype, "verify", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCryptoProto", "verify", arguments)
    }
});
dingvm.toolsFunc.defineProperty(SubtleCrypto.prototype, "wrapKey", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCryptoProto", "wrapKey", arguments)
    }
});
