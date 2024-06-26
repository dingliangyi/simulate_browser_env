// NavigatorUAData对象
NavigatorUAData = function NavigatorUAData() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(NavigatorUAData, "NavigatorUAData");
dingvm.toolsFunc.defineProperty(NavigatorUAData.prototype, "brands", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, NavigatorUAData.prototype, "NavigatorUADataProto", "brands_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(NavigatorUAData.prototype, "mobile", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, NavigatorUAData.prototype, "NavigatorUADataProto", "mobile_get", arguments, false)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(NavigatorUAData.prototype, "platform", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, NavigatorUAData.prototype, "NavigatorUADataProto", "platform_get", arguments, 'Windows')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(NavigatorUAData.prototype, "getHighEntropyValues", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, NavigatorUAData.prototype, "NavigatorUADataProto", "getHighEntropyValues", arguments)
    }
});
dingvm.toolsFunc.defineProperty(NavigatorUAData.prototype, "toJSON", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, NavigatorUAData.prototype, "NavigatorUADataProto", "toJSON", arguments)
    }
});
