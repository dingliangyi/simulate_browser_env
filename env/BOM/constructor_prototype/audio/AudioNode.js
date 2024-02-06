// AudioNode对象
AudioNode = function AudioNode() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(AudioNode, "AudioNode");
Object.setPrototypeOf(AudioNode.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(AudioNode.prototype, "context", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNodeProto", "context_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(AudioNode.prototype, "numberOfInputs", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNodeProto", "numberOfInputs_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(AudioNode.prototype, "numberOfOutputs", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNodeProto", "numberOfOutputs_get", arguments, 1)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(AudioNode.prototype, "channelCount", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNodeProto", "channelCount_get", arguments, 2)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNodeProto", "channelCount_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioNode.prototype, "channelCountMode", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNodeProto", "channelCountMode_get", arguments, 'max')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNodeProto", "channelCountMode_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioNode.prototype, "channelInterpretation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNodeProto", "channelInterpretation_get", arguments, 'speakers')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNodeProto", "channelInterpretation_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioNode.prototype, "connect", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNodeProto", "connect", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioNode.prototype, "disconnect", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNodeProto", "disconnect", arguments)
    }
});
