// 网页变量初始化
!function () {

    //* 固定随机值
    if (dingvm.config.random) {
        Date.now = dingvm.toolsFunc.hook(Date.now, undefined, false, function () {
        }, function (obj) {
            return obj.result = 1681893196072
        })
        Date.parse = dingvm.toolsFunc.hook(Date.parse, undefined, false, function () {
        }, function (obj) {
            return obj.result = 1681893196072
        })
        Date.prototype.getTime = dingvm.toolsFunc.hook(Date.prototype.getTime, undefined, false, function () {
        }, function (obj) {
            return obj.result = 1681893196072
        })
        Date.prototype.valueOf = dingvm.toolsFunc.hook(Date.prototype.valueOf, undefined, false, function () {
        }, function (obj) {
            return obj.result = 1681893196072
        })
        Math.random = dingvm.toolsFunc.hook(Math.random, undefined, false, function () {
        }, function (obj) {
            return obj.result = 0.5
        })
    }

    //* 初始化navigator
    dingvm.memory.globalVar.navigator.deviceMemory = 8;

    //* performance eventCounts
    dingvm.memory.globalVar.performance.eventCounts = 36;
    dingvm.memory.globalVar.performance.timing = (new Date()).getTime();

    //* 初始化cookie
    // dingvm.memory.globalVar.jsonCookie = dingvm.toolsFunc.parseCookie('APISID=W2yqD6FrmjhlgxBD/ASrYUTz-HQZFNOdWE; SAPISID=LuMrTMmU2NrI8tn8/AF9tpODi_31gX8w4s; __Secure-1PAPISID=LuMrTMmU2NrI8tn8/AF9tpODi_31gX8w4s; __Secure-3PAPISID=LuMrTMmU2NrI8tn8/AF9tpODi_31gX8w4s; ISSW=1; SID=VghwOrvEurZPtoqG8nTcxugdE-F9qEuedS7VB-ujOdALRKzOksZZmmOS21wkHW3Pe7lffQ.; OTZ=6994868_24_24__24_; a=1; 1P_JAR=2023-04-24-06; SIDCC=AP8dLtz983JfdV1UkDnVW8LU9ym7-LR-aB6TPV1M5fhOCBNVV_cJiEgctxVR0P04eIkVwAkdK14');

    //* location
    dingvm.toolsFunc.resetLocation('http://www.chinastock.com.cn/newsite/cgs-services/stockFinance/businessAnnc.html');

    //* 固定文档加载状态 "interactive" "complete" "loading"
    dingvm.memory.globalVar.document.readyState = 'loading';

    debugger
    //! 最后执行
    //* 执行网页js 1.链接js文件 2.嵌入js代码
    // let scripts = $('script');
    // for (let i = 0; i < scripts.length; i++) {
    //     document.script_position = $(scripts[i]);
    //     let script_code = $(scripts[i]).html();
    //     eval(script_code);
    //     delete document['script_position'];
    // }

    //* 获取随机值
    function randInt(x, y) {
        if (y <= x) {
            return y + Math.round(Math.random() * (x - y));
        } else {
            return x + Math.round(Math.random() * (y - x))
        }
    }

    //* 初始化宽度、高度
    dingvm.memory.globalVar.width = randInt(480, 800);
    dingvm.memory.globalVar.height = randInt(720, 1278);

    //* setTimeout setInterval修改
    if (dingvm.config.setTimeout) {
        setTimeout = function () {
        };
    }
    if (dingvm.config.setInterval) {
        setInterval = function () {
        };
    }

    //* 防止检测window navigator是不是不可变对象
    // Object.freeze(window)
    Object.freeze(navigator);

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