// BaseAudioContext对象
BaseAudioContext = function BaseAudioContext() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(BaseAudioContext, "BaseAudioContext");
Object.setPrototypeOf(BaseAudioContext.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "destination", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "destination_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "currentTime", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "currentTime_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "sampleRate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "sampleRate_get", arguments, 44100)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "listener", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "listener_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "state", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "state_get", arguments, 'suspended')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "onstatechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "onstatechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "onstatechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createAnalyser", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createAnalyser", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createBiquadFilter", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createBiquadFilter", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createBuffer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createBuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createBufferSource", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createBufferSource", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createChannelMerger", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createChannelMerger", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createChannelSplitter", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createChannelSplitter", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createConstantSource", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createConstantSource", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createConvolver", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createConvolver", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createDelay", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createDelay", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createDynamicsCompressor", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createDynamicsCompressor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createGain", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createGain", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createIIRFilter", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createIIRFilter", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createOscillator", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createOscillator", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createPanner", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createPanner", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createPeriodicWave", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createPeriodicWave", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createScriptProcessor", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createScriptProcessor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createStereoPanner", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createStereoPanner", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createWaveShaper", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "createWaveShaper", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "decodeAudioData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "decodeAudioData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(BaseAudioContext.prototype, "audioWorklet", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContextProto", "audioWorklet_get", arguments)
    },
    set: undefined
});
