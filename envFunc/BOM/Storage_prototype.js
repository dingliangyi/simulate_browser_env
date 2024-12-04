dingvm.envFunc.StorageProto_setItem = function () {
    let keyName = arguments[0];
    this[keyName] = arguments[1];
};
dingvm.envFunc.StorageProto_getItem = function () {
    let key = arguments[0];
    if (key in this) {
        return this[key];
    }
    return null;
};
dingvm.envFunc.StorageProto_removeItem = function () {
    let key = arguments[0];
    delete this[key];
};
dingvm.envFunc.StorageProto_key = function () {
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
dingvm.envFunc.StorageProto_clear = function () {
    for (const key in this) {
        delete this[key];
    }
};
dingvm.envFunc.StorageProto_length_get = function () {
    let i = 0;
    for (const key in Object.getOwnPropertyDescriptors(this)) {
        i++;
    }
    return i;
};