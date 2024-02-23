// 全局对象配置
debugger
dingvm = {
    toolsFunc: {},//功能函数相关，插件
    envFunc: {},// 具体环境实现相关
    config: {}, // 配置相关
    memory: {}, // 内存
};

dingvm.config.proxy = false;// 是否开启代理
dingvm.config.proxy_tag = false;// 是否开启标签原型代理
dingvm.config.proxy_navigator_plugins = false;// 是否开启plugins相关代理
dingvm.config.proxy_navigator_battery = false;// 是否开启battery相关代理
dingvm.config.proxy_tag_style = false;// 是否开启标签样式style相关代理
dingvm.config.proxy_tag_canvas = false;// 是否开启标签canvas相关代理
dingvm.config.proxy_event = false;// 是否开启event事件相关代理

dingvm.config.print = true; // 是否输出日志
dingvm.config.print_file = true; // 日志是否写入文件
dingvm.config.setInterval = true; //是否置空setInterval函数
dingvm.config.setTimeout = false; //是否置空setTimeout函数
dingvm.config.random = false; //是否固定随机值

dingvm.config.vm2_if = true; // 是否在vm2运行

dingvm.memory.symbolProxy = Symbol("proxy");// 独一无二的属性, 标记是否已代理
dingvm.memory.symbolData = Symbol("data");// 用来保存当前对象上的原型属性
dingvm.memory.filterStrProp = ['toString', "eval", '__proto__', 'prototype', 'jquery', 'listeners', 'hasOwnProperty', 'constructor', 'valueOf'];// 需要过滤的属性
dingvm.memory.filterSymbolProp = [dingvm.memory.symbolProxy, Symbol.toStringTag, dingvm.memory.symbolData, Symbol.toPrimitive]
dingvm.memory.filterRecursionProp = ['jquery', 'getedContext']
dingvm.memory.ID = {}; // tag对象次数id

dingvm.memory.globalVar = {}; // 存取全局变量
dingvm.memory.globalVar.jsonCookie = {};// json格式的cookie
dingvm.memory.globalVar._location = {};
dingvm.memory.globalVar.fontList = [
    'Andale Mono', 'Arial', 'Arial Black', 'Arial Hebrew', 'Arial MT', 'Arial Narrow', 'Arial Rounded MT Bold',
    'Arial Unicode MS', 'Bitstream Vera Sans Mono', 'Book Antiqua', 'Bookman Old Style',
    'Calibri', 'Cambria', 'Cambria Math', 'Century', 'Century Gothic', 'Century Schoolbook', 'Comic Sans',
    'Comic Sans MS', 'Consolas', 'Courier', 'Courier New', 'Geneva', 'Georgia', 'Helvetica', 'Helvetica Neue',
    'Impact', 'Lucida Bright', 'Lucida Calligraphy', 'Lucida Console', 'Lucida Fax', 'LUCIDA GRANDE',
    'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter', 'Lucida Sans Unicode',
    'Microsoft Sans Serif', 'Monaco', 'Monotype Corsiva', 'MS Gothic', 'MS Outlook', 'MS PGothic',
    'MS Reference Sans Serif', 'MS Sans Serif', 'MS Serif', 'MYRIAD', 'MYRIAD PRO',
    'Palatino', 'Palatino Linotype', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Light',
    'Segoe UI Semibold', 'Segoe UI Symbol', 'Tahoma', 'Times', 'Times New Roman', 'Times New Roman PS',
    'Trebuchet MS', 'Verdana', 'Wingdings', 'Wingdings 2', 'Wingdings 3'
]; // 浏览器能够识别的字体
let fontListLength = dingvm.memory.globalVar.fontList.length;
dingvm.memory.globalVar.fontList.splice(_.random(fontListLength, floating = false) - 1, 1);
dingvm.memory.globalVar.timeoutID = 0;
dingvm.memory.globalVar.all = new ldObj();
dingvm.memory.globalVar.scripts = [];
dingvm.memory.globalVar.document = {};
dingvm.memory.globalVar.performance = {};
dingvm.memory.globalVar.navigator = {};
dingvm.memory.globalVar.window = {};

dingvm.memory.asyncEvent = {};// 异步事件

dingvm.node_func = {
    setTimeout: setTimeout_,
    setInterval: setInterval_,
    clearTimeout: clearTimeout,
    clearInterval: clearInterval
};
dingvm.timer_map = {
    0: null
};