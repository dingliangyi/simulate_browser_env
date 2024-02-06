// History对象
History = function History() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(History, "History");
dingvm.toolsFunc.defineProperty(History.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "length_get", arguments, 2)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(History.prototype, "scrollRestoration", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "scrollRestoration_get", arguments, 'auto')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "scrollRestoration_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(History.prototype, "state", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "state_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(History.prototype, "back", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "back", arguments)
    }
});
dingvm.toolsFunc.defineProperty(History.prototype, "forward", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "forward", arguments)
    }
});
dingvm.toolsFunc.defineProperty(History.prototype, "go", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "go", arguments)
    }
});
dingvm.toolsFunc.defineProperty(History.prototype, "pushState", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "pushState", arguments)
    }
});
dingvm.toolsFunc.defineProperty(History.prototype, "replaceState", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "replaceState", arguments)
    }
});
