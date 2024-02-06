// EventCounts对象
EventCounts = function EventCounts() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(EventCounts, "EventCounts");
dingvm.toolsFunc.defineProperty(EventCounts.prototype, "size", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, EventCounts.prototype, "EventCountsProto", "size_get", arguments, 36)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(EventCounts.prototype, "entries", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, EventCounts.prototype, "EventCountsProto", "entries", arguments)
    }
});
dingvm.toolsFunc.defineProperty(EventCounts.prototype, "forEach", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, EventCounts.prototype, "EventCountsProto", "forEach", arguments)
    }
});
dingvm.toolsFunc.defineProperty(EventCounts.prototype, "get", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, EventCounts.prototype, "EventCountsProto", "get", arguments)
    }
});
dingvm.toolsFunc.defineProperty(EventCounts.prototype, "has", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, EventCounts.prototype, "EventCountsProto", "has", arguments)
    }
});
dingvm.toolsFunc.defineProperty(EventCounts.prototype, "keys", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, EventCounts.prototype, "EventCountsProto", "keys", arguments)
    }
});
dingvm.toolsFunc.defineProperty(EventCounts.prototype, "values", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, EventCounts.prototype, "EventCountsProto", "values", arguments)
    }
});
