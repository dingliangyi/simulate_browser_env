// OfflineAudioContext对象
OfflineAudioContext = function OfflineAudioContext(numOfChannels, length, sampleRate) {
    if (arguments.length !== 3) {
        return dingvm.toolsFunc.throwError("TypeError", "Failed to construct 'OfflineAudioContext': 1 argument required, but only 0 present.")
    }
};
dingvm.toolsFunc.safe_constructor_prototype(OfflineAudioContext, "OfflineAudioContext");
Object.setPrototypeOf(OfflineAudioContext.prototype, BaseAudioContext.prototype);
dingvm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "oncomplete", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContextProto", "oncomplete_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContextProto", "oncomplete_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContextProto", "length_get", arguments, 1764000)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "resume", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContextProto", "resume", arguments)
    }
});
dingvm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "startRendering", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContextProto", "startRendering", arguments)
    }
});
dingvm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "suspend", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContextProto", "suspend", arguments)
    }
});
