// DynamicsCompressorNode对象
DynamicsCompressorNode = function DynamicsCompressorNode() {
    return dingvm.toolsFunc.throwError("TypeError", "Failed to construct 'DynamicsCompressorNode': 1 argument required, but only 0 present.")
};
dingvm.toolsFunc.safe_constructor_prototype(DynamicsCompressorNode, "DynamicsCompressorNode");
Object.setPrototypeOf(DynamicsCompressorNode.prototype, AudioNode.prototype);
dingvm.toolsFunc.defineProperty(DynamicsCompressorNode.prototype, "threshold", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, DynamicsCompressorNode.prototype, "DynamicsCompressorNodeProto", "threshold_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(DynamicsCompressorNode.prototype, "knee", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, DynamicsCompressorNode.prototype, "DynamicsCompressorNodeProto", "knee_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(DynamicsCompressorNode.prototype, "ratio", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, DynamicsCompressorNode.prototype, "DynamicsCompressorNodeProto", "ratio_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(DynamicsCompressorNode.prototype, "reduction", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, DynamicsCompressorNode.prototype, "DynamicsCompressorNodeProto", "reduction_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(DynamicsCompressorNode.prototype, "attack", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, DynamicsCompressorNode.prototype, "DynamicsCompressorNodeProto", "attack_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(DynamicsCompressorNode.prototype, "release", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, DynamicsCompressorNode.prototype, "DynamicsCompressorNodeProto", "release_get", arguments)
    },
    set: undefined
});
