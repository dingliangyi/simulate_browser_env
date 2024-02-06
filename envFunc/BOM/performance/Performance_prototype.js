dingvm.envFunc.PerformanceProto_timeOrigin_get = function () {
    return dingvm.memory.globalVar.performance.timing + parseFloat(_.random(0.1, 0.9, true).toFixed(1))
};
dingvm.envFunc.PerformanceProto_timing_get = function () {
    let PerformanceTiming = function PerformanceTiming() {
    }
    dingvm.toolsFunc.safe_constructor_prototype(PerformanceTiming, "PerformanceTiming")

    let time1 = dingvm.memory.globalVar.performance.timing
    let time2 = time1 + __.random(0, 2, false)
    let time3 = time1 + __.random(100, 200, false)
    let time4 = time3 + __.random(200, 350, false)
    let time5 = time4 + __.random(0, 2, false)
    let time6 = time2 + __.random(1, 5, false)
    let time7 = time1 + __.random(400, 800, false)
    let time8 = time1 + __.random(900, 1200, false)
    let time9 = time8 - __.random(3, 4, false)
    PerformanceTiming.prototype = {
        "connectStart": time2,
        "navigationStart": time1,
        "secureConnectionStart": time6,
        "fetchStart": time2,
        "domContentLoadedEventStart": time9,
        "responseStart": time4,
        "domInteractive": time9,
        "domainLookupEnd": time2,
        "responseEnd": time5,
        "redirectStart": 0,
        "requestStart": time3,
        "unloadEventEnd": 0,
        "unloadEventStart": 0,
        "domLoading": time7,
        "domComplete": time8,
        "domainLookupStart": time2,
        "loadEventStart": time8,
        "domContentLoadedEventEnd": time8,
        "loadEventEnd": time8,
        "redirectEnd": 0,
        "connectEnd": time2
    }

    let performance_timing = {}
    Object.setPrototypeOf(performance_timing, PerformanceTiming.prototype);

    return performance_timing
};
dingvm.envFunc.PerformanceProto_navigation_get = function () {
    let navigation = {}
    Object.setPrototypeOf(navigation, PerformanceNavigation.prototype)

    return navigation
};
dingvm.envFunc.PerformanceProto_now = function () {
    return _.random(1500, 2500, true)
};
dingvm.envFunc.PerformanceProto_onresourcetimingbufferfull_get = function () {
    return null
};
dingvm.envFunc.PerformanceProto_eventCounts_get = function () {
    let eventCounts = {}
    Object.setPrototypeOf(eventCounts, EventCounts.prototype)

    return eventCounts
};
dingvm.envFunc.PerformanceProto_memory_get = function () {
    let MemoryInfo = function MemoryInfo() {

    }
    dingvm.toolsFunc.safe_constructor_prototype(MemoryInfo, "MemoryInfo")
    MemoryInfo.prototype = {
        'jsHeapSizeLimit': 4294705152,
        'totalJSHeapSize': 74470749,
        'usedJSHeapSize': 69352885
    }
    let memory = {}
    Object.setPrototypeOf(memory, MemoryInfo.prototype)

    return memory
};
dingvm.envFunc.PerformanceProto_clearMarks = function () {
    debugger
}