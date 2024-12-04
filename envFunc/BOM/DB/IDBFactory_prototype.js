dingvm.envFunc.IDBFactoryProto_open = function (databaseName, version) {
    // debugger
    if (databaseName === undefined) {
        dingvm.toolsFunc.throwError('TypeError', 'Failed to execute \'open\' on \'IDBFactory\': 1 argument required, but only 0 present.')
    }

    let request = {}
    Object.defineProperty(request, 'request', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: indexedDB_.open(databaseName, version)
    })
    Object.setPrototypeOf(request, IDBOpenDBRequest.prototype)

    return request
};
dingvm.envFunc.IDBFactoryProto_cmd = function (key1, key2) {
    return indexedDB_.cmp(key1, key2)
};
dingvm.envFunc.IDBFactoryProto_databases = function () {
    return indexedDB_.databases()
};
dingvm.envFunc.IDBFactoryProto_deleteDatabase = function (name) {
    let request = {}
    Object.defineProperty(request, 'request', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: indexedDB_.deleteDatabase(name)
    })
    Object.setPrototypeOf(request, IDBOpenDBRequest.prototype)

    return request
};
