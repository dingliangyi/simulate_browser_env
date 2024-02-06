// PerformanceNavigation对象
PerformanceNavigation = function PerformanceNavigation() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(PerformanceNavigation, "PerformanceNavigation");
dingvm.toolsFunc.defineProperty(PerformanceNavigation, "TYPE_NAVIGATE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(PerformanceNavigation, "TYPE_RELOAD", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(PerformanceNavigation, "TYPE_BACK_FORWARD", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(PerformanceNavigation, "TYPE_RESERVED", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 255
});
dingvm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PerformanceNavigation.prototype, "PerformanceNavigationProto", "type_get", arguments, 1)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "redirectCount", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PerformanceNavigation.prototype, "PerformanceNavigationProto", "redirectCount_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "TYPE_NAVIGATE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "TYPE_RELOAD", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "TYPE_BACK_FORWARD", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "TYPE_RESERVED", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 255
});
dingvm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "toJSON", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, PerformanceNavigation.prototype, "PerformanceNavigationProto", "toJSON", arguments)
    }
});
