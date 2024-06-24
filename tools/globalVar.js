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
        "name": "Microsoft Edge PDF Plugin",
        "mimeTypes": [{
            "type": 'application/x-google-chrome-pdf',
            "suffixes": 'pdf',
            "description": 'Portable Document Format'
        }]
    });
    dingvm.toolsFunc.createPlugin({
        "description": "",
        "filename": "mhjfbmdgcfjbbpaeojofohoefgiehjai",
        "name": "Microsoft Edge PDF Viewer",
        "mimeTypes": [{
            "type": 'application/pdf',
            "suffixes": 'pdf',
            "description": ''
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

    //* 堆栈检测
    Error.prepareStackTrace = function (error, structuredStackTrace) {
        // 过滤掉node相关的堆栈, 以及调试的文件名堆栈
        let stack_base = (function () {
            let _stack_info = structuredStackTrace.map(_stack => {
                let _func_name = _stack.getFunctionName();
                if (_func_name) {
                    if (_func_name.includes('Module') || _func_name.includes('executeUserEntryPoint') || _func_name.includes('runInContext')) {
                        // console.log(_func_name)
                        return
                    }
                    if (['run', 'sandBox3', 'base.apply'].includes(_func_name)) {
                        // console.log(_func_name)
                        return
                    }
                    if (['Location', 'History'].includes(_func_name)) {
                        // console.log(_func_name)
                        return
                    }
                }

                let _file_name = _stack.getFileName();
                if (_file_name) {
                    if (_file_name.includes('run_main_module') || _file_name.indexOf('sandBox3') === -1
                        || _file_name.indexOf('modules/cjs/loader') === -1
                    ) {
                        // console.log(_file_name)
                        return
                    }
                }
                return _stack;
            });
            return _stack_info.filter(_stack => {
                return _stack
            });
        }());

        return error.toString() + '\n' + stack_base.map(_stack => {
            // console.log(_stack + "")
            let _fileName = _stack.getFileName() === null ? '<anonymous>' : _stack.getFileName();
            let _functionName = _stack.getFunctionName() ? _stack.getFunctionName() : '';
            let _typeName = _stack.getTypeName();
            _typeName = _typeName === 'Window' ? '' : `${_typeName}.`;

            if (_functionName) {
                if (_fileName === '<anonymous>') {
                    return `    at ${_typeName}${_functionName} (${_fileName})`;
                }
                return `    at ${_typeName}${_functionName} (${_fileName}:${_stack.getLineNumber()}:${_stack.getColumnNumber()})`;
            }
            return `    at ${_fileName}:${_stack.getLineNumber()}:${_stack.getColumnNumber()}`;

        }).join('\n');
    };

}();