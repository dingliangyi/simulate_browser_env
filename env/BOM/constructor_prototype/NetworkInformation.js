// NetworkInformation对象
NetworkInformation = function NetworkInformation() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(NetworkInformation, "NetworkInformation");
Object.setPrototypeOf(NetworkInformation.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(NetworkInformation.prototype, "onchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformationProto", "onchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformationProto", "onchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(NetworkInformation.prototype, "effectiveType", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformationProto", "effectiveType_get", arguments, '3g')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(NetworkInformation.prototype, "rtt", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformationProto", "rtt_get", arguments, 550)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(NetworkInformation.prototype, "downlink", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformationProto", "downlink_get", arguments, 1.5)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(NetworkInformation.prototype, "saveData", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformationProto", "saveData_get", arguments, false)
    },
    set: undefined
});
