// 网页变量初始化
!function () {

    //* 固定随机值
    if (dingvm.config.random) {
        const time_stamp = Date.now()
        // const time_stamp = 1719296000341
        Date.now = dingvm.toolsFunc.hook(Date.now, undefined, false, function () {
        }, function (obj) {
            return obj.result = time_stamp
        })
        Date.parse = dingvm.toolsFunc.hook(Date.parse, undefined, false, function () {
        }, function (obj) {
            return obj.result = time_stamp
        })
        Date.prototype.getTime = dingvm.toolsFunc.hook(Date.prototype.getTime, undefined, false, function () {
        }, function (obj) {
            return obj.result = time_stamp
        })
        Date.prototype.valueOf = dingvm.toolsFunc.hook(Date.prototype.valueOf, undefined, false, function () {
        }, function (obj) {
            return obj.result = time_stamp
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
    dingvm.toolsFunc.resetLocation('https://amr.sz.gov.cn/outer/entSelect/gs.html');

    //* 固定文档加载状态 "interactive" "complete" "loading"
    dingvm.memory.globalVar.document.readyState = 'complete';

    //* 初始化宽度、高度
    dingvm.memory.globalVar.width = dingvm.toolsFunc.random(480, 800);
    dingvm.memory.globalVar.height = dingvm.toolsFunc.random(720, 1278);

    //* 初始化电池
    dingvm.memory.globalVar.BatteryManager.charging = true;
    dingvm.memory.globalVar.BatteryManager.chargingTime = Infinity;
    dingvm.memory.globalVar.BatteryManager.level = 1

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
    // Object.freeze(navigator);

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

    const originalTest = RegExp.prototype.test;
    RegExp.prototype.test = function (str) {
        // debugger
        if (this.toString() === '/function \\S+?\\(\\){\\S+/')
            return true;

        // console.log(`正则表达式: ${this}`);
        // console.log(`测试字符串: ${str}`);
        // console.log(`结果: ${originalTest.call(this, str)}`)

        return originalTest.call(this, str)
    };
    dingvm.toolsFunc.safeFunc(RegExp.prototype.test, 'test')

    window.ddd = [];

}();