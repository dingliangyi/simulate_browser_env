// BatteryManager对象
BatteryManager = function BatteryManager() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(BatteryManager, "BatteryManager");
Object.setPrototypeOf(BatteryManager.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(BatteryManager.prototype, "charging", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManagerProto", "charging_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(BatteryManager.prototype, "chargingTime", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManagerProto", "chargingTime_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(BatteryManager.prototype, "dischargingTime", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManagerProto", "dischargingTime_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(BatteryManager.prototype, "level", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManagerProto", "level_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(BatteryManager.prototype, "onchargingchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManagerProto", "onchargingchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManagerProto", "onchargingchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BatteryManager.prototype, "onchargingtimechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManagerProto", "onchargingtimechange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManagerProto", "onchargingtimechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BatteryManager.prototype, "ondischargingtimechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManagerProto", "ondischargingtimechange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManagerProto", "ondischargingtimechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BatteryManager.prototype, "onlevelchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManagerProto", "onlevelchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, BatteryManager.prototype, "BatteryManagerProto", "onlevelchange_set", arguments)
    }
});
