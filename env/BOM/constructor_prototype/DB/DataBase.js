// dataBase对象
Database = function Database() {

};
Database_delete = Database
dingvm.toolsFunc.safe_constructor_prototype(Database, "Database")
dingvm.toolsFunc.defineProperty(Database.prototype, "version", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Database_delete.prototype, "DatabaseProto", "version_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Database.prototype, "changeVersion", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Database_delete.prototype, "DatabaseProto", "changeVersion", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Database.prototype, "readTransaction", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Database_delete.prototype, "DatabaseProto", "readTransaction", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Database.prototype, "transaction", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Database_delete.prototype, "DatabaseProto", "transaction", arguments)
    }
});
