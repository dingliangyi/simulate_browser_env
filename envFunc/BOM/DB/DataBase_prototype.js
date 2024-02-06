SQLTransaction = function SQLTransaction() {

}
SQLTransaction_delete = SQLTransaction
dingvm.toolsFunc.defineProperty(SQLTransaction.prototype, "executeSql", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function (tx) {
        return dingvm.toolsFunc.dispatch(this, SQLTransaction_delete, "SQLTransactionProto", "executeSql", arguments)
    }
});
dingvm.toolsFunc.safe_constructor_prototype(SQLTransaction, 'SQLTransaction')
dingvm.envFunc.SQLTransactionProto_executeSql = function (sql, args, callback, errorCallback) {
    console.log("SQLTransactionProto_executeSql 执行这条sql语句： ", sql, "占位符: ", args, "处理函数: ", callback.toString())

    try {

    } catch (e) {
        // errorCallback
    }

    //! 待补 SQLResultSet SQLResultSetRowList
    //! callback回调函数参数(tx,new SQLResultSet())
    //! errorCallback (tx,error)
}

dingvm.envFunc.DatabaseProto_transaction = function (callback, errorCallback, successCallback) {
    if (callback === undefined) {
        dingvm.toolsFunc.throwError('TypeError', 'Failed to execute \'transaction\' on \'Database\': 1 argument required, but only 0 present.')
    }
    console.log('dataBase_transaction: ', callback.toString())
    let SQLTransaction_ = new SQLTransaction_delete()
    return callback(SQLTransaction_)
}
dingvm.envFunc.DatabaseProto_version_get = function () {
    return dingvm.toolsFunc.getProtoArr.call(this, 'version')
}
dingvm.envFunc.DatabaseProto_changeVersion = function (oldVersion, newVersion) {
    dingvm.toolsFunc.setProtoArr.call(this, 'version', newVersion)
}
dingvm.envFunc.DatabaseProto_readTransaction = function () {
    console.log('DatabaseProto_readTransaction 调用了')
}

//* 参考 http://silenceallat.top/code/85-SQL%E5%BF%85%E7%9F%A5%E5%BF%85%E4%BC%9A/36%E4%B8%A8WebSQL%EF%BC%9A%E5%A6%82%E4%BD%95%E5%9C%A8H5%E4%B8%AD%E5%AD%98%E5%82%A8%E4%B8%80%E4%B8%AA%E6%9C%AC%E5%9C%B0%E6%95%B0%E6%8D%AE%E5%BA%93%EF%BC%9F.html