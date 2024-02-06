// EventTarget对象
EventTarget = function EventTarget() {
    this.listeners = {}
};
dingvm.toolsFunc.safe_constructor_prototype(EventTarget, "EventTarget");
dingvm.toolsFunc.defineProperty(EventTarget.prototype, "addEventListener", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, EventTarget.prototype, "EventTargetProto", "addEventListener", arguments)
    }
});
dingvm.toolsFunc.defineProperty(EventTarget.prototype, "dispatchEvent", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, EventTarget.prototype, "EventTargetProto", "dispatchEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(EventTarget.prototype, "removeEventListener", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, EventTarget.prototype, "EventTargetProto", "removeEventListener", arguments)
    }
});
