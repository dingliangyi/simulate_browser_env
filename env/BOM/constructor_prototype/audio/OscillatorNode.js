// OscillatorNode对象
OscillatorNode = function OscillatorNode() {
    return dingvm.toolsFunc.throwError("TypeError", "Failed to construct 'OscillatorNode': 1 argument required, but only 0 present.")
};
dingvm.toolsFunc.safe_constructor_prototype(OscillatorNode, "OscillatorNode");
Object.setPrototypeOf(OscillatorNode.prototype, AudioScheduledSourceNode.prototype);
dingvm.toolsFunc.defineProperty(OscillatorNode.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, OscillatorNode.prototype, "OscillatorNodeProto", "type_get", arguments, 'sine')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, OscillatorNode.prototype, "OscillatorNodeProto", "type_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(OscillatorNode.prototype, "frequency", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, OscillatorNode.prototype, "OscillatorNodeProto", "frequency_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(OscillatorNode.prototype, "detune", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, OscillatorNode.prototype, "OscillatorNodeProto", "detune_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(OscillatorNode.prototype, "setPeriodicWave", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, OscillatorNode.prototype, "OscillatorNodeProto", "setPeriodicWave", arguments)
    }
});
