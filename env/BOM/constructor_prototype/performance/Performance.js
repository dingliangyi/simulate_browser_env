// Performance对象
Performance = function Performance() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Performance, "Performance");
Object.setPrototypeOf(Performance.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(Performance.prototype, "timeOrigin", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "timeOrigin_get", arguments, 1685850689331.8)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "onresourcetimingbufferfull", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "onresourcetimingbufferfull_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "onresourcetimingbufferfull_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "clearMarks", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "clearMarks", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "clearMeasures", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "clearMeasures", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "clearResourceTimings", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "clearResourceTimings", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "getEntries", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "getEntries", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "getEntriesByName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "getEntriesByName", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "getEntriesByType", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "getEntriesByType", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "mark", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "mark", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "measure", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "measure", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "now", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "now", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "setResourceTimingBufferSize", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "setResourceTimingBufferSize", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "toJSON", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "toJSON", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "timing", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "timing_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "navigation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "navigation_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "memory", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "memory_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Performance.prototype, "eventCounts", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Performance.prototype, "PerformanceProto", "eventCounts_get", arguments)
    },
    set: undefined
});
