dingvm.envFunc.BaseAudioContextProto_destination_get = function () {

};
dingvm.envFunc.BaseAudioContextProto_createOscillator = function () {
    let obj = {}
    Object.setPrototypeOf(obj, OscillatorNode.prototype)

    return obj
};
dingvm.envFunc.BaseAudioContextProto_currentTime_get = function () {
    return 0
};
dingvm.envFunc.BaseAudioContextProto_createDynamicsCompressor = function () {
    let obj = {}
    Object.setPrototypeOf(obj, DynamicsCompressorNode.prototype)

    return obj
};