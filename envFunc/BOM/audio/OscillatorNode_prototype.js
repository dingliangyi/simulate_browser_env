dingvm.envFunc.OscillatorNodeProto_type_get = function () {
    // return 'triangle'
    let type = dingvm.toolsFunc.getProtoArr.call(this, 'type')
    if (type) {
        return type
    }

    return 'triangle'
};
dingvm.envFunc.OscillatorNodeProto_type_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'type', value)
};
dingvm.envFunc.OscillatorNodeProto_frequency_get = function () {
    let obj = {}
    Object.setPrototypeOf(obj, AudioParam.prototype)

    return obj
};
dingvm.envFunc.OscillatorNodeProto_detune_get = function () {
};
dingvm.envFunc.OscillatorNodeProto_setPeriodicWave = function () {
};

