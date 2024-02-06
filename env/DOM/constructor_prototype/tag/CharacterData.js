// CharacterData对象
CharacterData = function CharacterData() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(CharacterData, "CharacterData");
Object.setPrototypeOf(CharacterData.prototype, Node.prototype);
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "data", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "data_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "data_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "length_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "previousElementSibling", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "previousElementSibling_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "nextElementSibling", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "nextElementSibling_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "after", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "after", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "appendData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "appendData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "before", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "before", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "deleteData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "deleteData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "insertData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "insertData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "remove", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "remove", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "replaceData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "replaceData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "replaceWith", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "replaceWith", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "substringData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "substringData", arguments)
    }
});
