dingvm.envFunc.StorageProto_setItem = function StorageProto_setItem() {
    let keyName = arguments[0];
    this[keyName] = arguments[1];
};
dingvm.envFunc.StorageProto_getItem = function StorageProto_getItem() {
    let key = arguments[0];
    if (key in this) {
        return this[key];
    }
    return null;
};
dingvm.envFunc.StorageProto_removeItem = function StorageProto_removeItem() {
    let key = arguments[0];
    delete this[key];
};
dingvm.envFunc.StorageProto_key = function StorageProto_key() {
    let index = arguments[0];
    let i = 0;
    for (const key in this) {
        if (i === index) {
            return key;
        }
        i++;
    }
    return null;
};
dingvm.envFunc.StorageProto_clear = function StorageProto_clear() {
    for (const key in this) {
        delete this[key];
    }
};
dingvm.envFunc.StorageProto_length_get = function StorageProto_length_get() {
    let i = 0;
    for (const key in Object.getOwnPropertyDescriptors(this)) {
        i++;
    }
    return i;
};