// AudioBuffer对象
AudioBuffer = function AudioBuffer() {
    return dingvm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioBuffer': 1 argument required, but only 0 present.")
};
dingvm.toolsFunc.safe_constructor_prototype(AudioBuffer, "AudioBuffer");
dingvm.toolsFunc.defineProperty(AudioBuffer.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioBuffer.prototype, "AudioBufferProto", "length_get", arguments, 441500)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(AudioBuffer.prototype, "duration", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioBuffer.prototype, "AudioBufferProto", "duration_get", arguments, 10.002265518803807)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(AudioBuffer.prototype, "sampleRate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioBuffer.prototype, "AudioBufferProto", "sampleRate_get", arguments, 44140)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(AudioBuffer.prototype, "numberOfChannels", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioBuffer.prototype, "AudioBufferProto", "numberOfChannels_get", arguments, 1)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(AudioBuffer.prototype, "copyFromChannel", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, AudioBuffer.prototype, "AudioBufferProto", "copyFromChannel", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioBuffer.prototype, "copyToChannel", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, AudioBuffer.prototype, "AudioBufferProto", "copyToChannel", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioBuffer.prototype, "getChannelData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, AudioBuffer.prototype, "AudioBufferProto", "getChannelData", arguments)
    }
});
