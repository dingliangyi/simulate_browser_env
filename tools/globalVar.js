// 全局变量初始化
!function () {

    console.log = dingvm.toolsFunc.hook(console.log, undefined, false, function (obj) {
        try {
            dingvm.toolsFunc.printLog(obj.args);
        } catch (e) {
        }
    }, function () {
    }, dingvm.config.print);

    console.warn = dingvm.toolsFunc.hook(console.warn, undefined, false, function (obj) {
        try {
            dingvm.toolsFunc.printLog(`warn: ${obj.args}`);
        } catch (e) {
        }
    }, function () {
    }, dingvm.config.print);

    //* vm2环境下运行eval被默认代理了, 保护toString
    if (dingvm.config.vm2_if) {
        eval = dingvm.toolsFunc.hook(eval, undefined, false, function () {
        }, function () {
        }, true)
    }

    //* 创建plugin
    dingvm.toolsFunc.createPlugin({
        "description": "Portable Document Format",
        "filename": "internal-pdf-viewer",
        "name": "Chrome PDF Plugin",
        "mimeTypes": [{
            "type": 'application/x-google-chrome-pdf',
            "suffixes": 'pdf',
            "description": 'Portable Document Format'
        }]
    });
    dingvm.toolsFunc.createPlugin({
        "description": "",
        "filename": "mhjfbmdgcfjbbpaeojofohoefgiehjai",
        "name": "Chrome PDF Viewer",
        "mimeTypes": [{
            "type": 'application/pdf',
            "suffixes": 'pdf',
            "description": ''
        }]
    });
    dingvm.toolsFunc.createPlugin({
        "description": "",
        "filename": "internal-nacl-plugin",
        "name": "Native Client",
        "mimeTypes": [{
            "type": 'application/x-nacl',
            "suffixes": '',
            "description": 'Native Client Executable'
        }, {
            "type": 'application/x-pnacl',
            "suffixes": '',
            "description": 'Portable Native Client Executable'
        }]
    });

    //* 伪造setTimeout、setInterval 浏览器返回id node返回对象
    let timer = {
        setTimeout(callback, ...arg) {
            if (dingvm.memory.asyncEvent.setTimeout === undefined) {
                dingvm.memory.asyncEvent.setTimeout = []
            }
            dingvm.memory.asyncEvent.setTimeout.push({
                callback: callback,
                args: arg
            })

            const timer_obj = dingvm.node_func.setTimeout(callback, ...arg);
            const timer_id = parseInt(Object.keys(dingvm.timer_map).sort((a, b) => {
                return a - b;
            }).pop()) + 1;
            dingvm.timer_map[timer_id] = timer_obj
            return timer_id;
        },
        setInterval(callback, ...arg) {
            if (dingvm.memory.asyncEvent.setInterval === undefined) {
                dingvm.memory.asyncEvent.setInterval = []
            }
            dingvm.memory.asyncEvent.setInterval.push({
                callback: callback,
                args: arg
            })

            const timer_obj = dingvm.node_func.setInterval(callback, ...arg);
            const timer_id = parseInt(Object.keys(dingvm.timer_map).sort((a, b) => {
                return a - b;
            }).pop()) + 1;
            dingvm.timer_map[timer_id] = timer_obj
            return timer_id;
        },
        clearTimeout(timer_id) {
            const timer_obj = dingvm.timer_map[timer_id];
            return dingvm.node_func.clearTimeout(timer_obj)
        },
        clearInterval(timer_id) {
            const timer_obj = dingvm.timer_map[timer_id];
            return dingvm.node_func.clearInterval(timer_obj)
        }
    };
    setTimeout = timer.setTimeout;
    setInterval = timer.setInterval;
    clearTimeout = timer.clearTimeout;
    clearInterval = timer.clearInterval;

    for (const key in timer) {
        const time_func = timer[key];
        dingvm.toolsFunc.safeFunc(time_func, time_func.name)
    }

}();