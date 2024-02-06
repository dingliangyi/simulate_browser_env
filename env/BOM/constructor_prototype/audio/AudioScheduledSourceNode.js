// AudioScheduledSourceNode对象
AudioScheduledSourceNode = function AudioScheduledSourceNode() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(AudioScheduledSourceNode, "AudioScheduledSourceNode");
Object.setPrototypeOf(AudioScheduledSourceNode.prototype, AudioNode.prototype);
dingvm.toolsFunc.defineProperty(AudioScheduledSourceNode.prototype, "onended", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, AudioScheduledSourceNode.prototype, "AudioScheduledSourceNodeProto", "onended_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, AudioScheduledSourceNode.prototype, "AudioScheduledSourceNodeProto", "onended_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioScheduledSourceNode.prototype, "start", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, AudioScheduledSourceNode.prototype, "AudioScheduledSourceNodeProto", "start", arguments)
    }
});
dingvm.toolsFunc.defineProperty(AudioScheduledSourceNode.prototype, "stop", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, AudioScheduledSourceNode.prototype, "AudioScheduledSourceNodeProto", "stop", arguments)
    }
});
