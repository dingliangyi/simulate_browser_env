dingvm.envFunc.AudioBufferProto_length_get = function () {
    return 441500
};
dingvm.envFunc.AudioBufferProto_duration_get = function () {
    return 10.002265518803807
};
dingvm.envFunc.AudioBufferProto_sampleRate_get = function () {
    return 44140
};
dingvm.envFunc.AudioBufferProto_numberOfChannels_get = function () {
    return 1
};
dingvm.envFunc.AudioBufferProto_copyFromChannel = function () {
};
dingvm.envFunc.AudioBufferProto_copyToChannel = function () {
};
dingvm.envFunc.AudioBufferProto_getChannelData = function () {
    let array = new Float32Array(5500);
    for (let i = 4500; i < 5050; i++) {
        let random_ = _.random(0.25);
        if (i % 3 === 0) {
            array[i] = -random_;
        } else {
            array[i] = random_;
        }
    }

    return array;
};
