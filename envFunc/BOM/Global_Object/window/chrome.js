dingvm.envFunc.chrome_loadTimes = function () {
    // debugger
    let random1 = _.random(100, 300, false)
    let time1 = eval(`${dingvm.memory.globalVar.performance.timing}.${random1}`);
    let random2 = random1 + _.random(100, 300, false)
    let time2 = eval(`${dingvm.memory.globalVar.performance.timing}.${random2}`);
    let random3 = random2 + _.random(100, 300, false)
    let time3 = eval(`${dingvm.memory.globalVar.performance.timing}.${random3}`);
    let time4 = eval(`${dingvm.memory.globalVar.performance.timing + 1}.${_.random(100, 300, false)}`);
    let time5 = eval(`${dingvm.memory.globalVar.performance.timing + 1}.${_.random(500, 800, false)}`);
    dingvm.memory.globalVar.chrome_loadTimes_time1 = time1;
    dingvm.memory.globalVar.chrome_loadTimes_time3 = time3;
    return {
        requestTime: time1,
        startLoadTime: time1,
        commitLoadTime: time2,
        finishDocumentLoadTime: time3,
        finishLoadTime: time4,
        firstPaintTime: time5,
        connectionInfo: 'h2',
        firstPaintAfterLoadTime: 0,
        navigationType: "Other",
        npnNegotiatedProtocol: 'h2',
        wasAlternateProtocolAvailable: false,
        wasFetchedViaSpdy: true,
        wasNpnNegotiated: true,
    }
};
dingvm.envFunc.chrome_csi = function () {
    return {
        onloadT: dingvm.memory.globalVar.chrome_loadTimes_time3 * 1000,
        startE: dingvm.memory.globalVar.chrome_loadTimes_time1 * 1000,
        tran: 15
    }
};
