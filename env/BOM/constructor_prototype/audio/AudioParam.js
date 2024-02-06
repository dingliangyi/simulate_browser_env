// AudioParam对象
AudioParam = function AudioParam() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(AudioParam, "AudioParam");
dingvm.toolsFunc.defineProperty(AudioParam.prototype, "value", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParamProto", "value_get", arguments, 440)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParamProto", "value_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioParam.prototype, "automationRate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParamProto", "automationRate_get", arguments, 'a-rate')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParamProto", "automationRate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioParam.prototype, "defaultValue", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParamProto", "defaultValue_get", arguments, 440)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(AudioParam.prototype, "minValue", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParamProto", "minValue_get", arguments, -22050)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(AudioParam.prototype, "maxValue", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParamProto", "maxValue_get", arguments, 22050)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(AudioParam.prototype, "cancelAndHoldAtTime", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParamProto", "cancelAndHoldAtTime", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioParam.prototype, "cancelScheduledValues", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParamProto", "cancelScheduledValues", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioParam.prototype, "exponentialRampToValueAtTime", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParamProto", "exponentialRampToValueAtTime", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioParam.prototype, "linearRampToValueAtTime", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParamProto", "linearRampToValueAtTime", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioParam.prototype, "setTargetAtTime", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParamProto", "setTargetAtTime", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioParam.prototype, "setValueAtTime", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParamProto", "setValueAtTime", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioParam.prototype, "setValueCurveAtTime", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, AudioParam.prototype, "AudioParamProto", "setValueCurveAtTime", arguments)
    }
});
