const {indexedDB: indexedDB_} = require("fake-indexeddb");
const getContextWebgl = require('gl');
const _ = require('lodash');
const {createCanvas} = require('canvas');
const CryptoJS = require('crypto-js');
const setInterval_ = setInterval;
const setTimeout_ = setTimeout;
delete global['btoa'];
delete global['atob'];
delete global['setInterval'];
delete global['setTimeout'];
const request = require('request');
const vm2 = false;
const {read_html_code} = require('../../env/get_html_code');
const {get_document} = require("../../readfile");
const html_code = read_html_code();
$ = get_document(html_code);
let _name_ = 'test';
const fs = require("fs");
// 全局对象配置
debugger
dingvm = {
    "toolsFunc": {},//功能函数相关，插件
    "envFunc": {},// 具体环境实现相关
    "config": {}, // 配置相关
    "memory": {}, // 内存
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

dingvm.config.vm2_if = false; // 是否在vm2运行

dingvm.memory.symbolProxy = Symbol("proxy");// 独一无二的属性, 标记是否已代理
dingvm.memory.symbolData = Symbol("data");// 用来保存当前对象上的原型属性
dingvm.memory.filterStrProp = ["eval", '__proto__', 'prototype', 'jquery', 'listeners'];// 需要过滤的属性
dingvm.memory.filterSymbolProp = [dingvm.memory.symbolProxy, Symbol.toStringTag, dingvm.memory.symbolData]
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

dingvm.memory.asyncEvent = {};// 异步事件

dingvm.node_func = {
    setTimeout: setTimeout_,
    setInterval: setInterval_,
    clearTimeout: clearTimeout,
    clearInterval: clearInterval
};
dingvm.timer_map = {
    0: null
};// 插件功能相关

!function () {
    !function () {
        // 创建pluginArray
        dingvm.toolsFunc.createPluginArray = function () {
            let pluginArray = {};
            Object.setPrototypeOf(pluginArray, PluginArray.prototype)
            if (dingvm.config.proxy_navigator_plugins) {
                pluginArray = dingvm.toolsFunc.createProxyObj(pluginArray, "pluginArray");
            }
            dingvm.toolsFunc.setProtoArr.call(pluginArray, "length", 0);
            return pluginArray;
        };

        // 创建MimeTypeArray对象
        dingvm.toolsFunc.createMimeTypeArray = function () {
            let mimeTypeArray = {};
            Object.setPrototypeOf(mimeTypeArray, MimeTypeArray.prototype)
            if (dingvm.config.proxy_navigator_plugins) {
                mimeTypeArray = dingvm.toolsFunc.createProxyObj(mimeTypeArray, "mimeTypeArray");
            }
            dingvm.toolsFunc.setProtoArr.call(mimeTypeArray, "length", 0);
            return mimeTypeArray;
        };

        // 添加Plugin
        dingvm.toolsFunc.addPlugin = function (plugin) {
            let pluginArray = dingvm.memory.globalVar.pluginArray;
            if (pluginArray === undefined) {
                pluginArray = dingvm.toolsFunc.createPluginArray();
            }
            let index = pluginArray.length;
            pluginArray[index] = plugin;
            Object.defineProperty(pluginArray, plugin.name, {
                value: plugin,
                writable: false,
                enumerable: false,
                configurable: true
            });
            dingvm.toolsFunc.setProtoArr.call(pluginArray, "length", index + 1);
            dingvm.memory.globalVar.pluginArray = pluginArray;
            return pluginArray;
        };

        // 添加MimeType
        dingvm.toolsFunc.addMimeType = function (mimeType) {
            let mimeTypeArray = dingvm.memory.globalVar.mimeTypeArray;
            if (mimeTypeArray === undefined) {
                mimeTypeArray = dingvm.toolsFunc.createMimeTypeArray();
            }
            let index = mimeTypeArray.length;
            let flag = true;
            for (let i = 0; i < index; i++) {
                if (mimeTypeArray[i].type === mimeType.type) {
                    flag = false;
                }
            }
            if (flag) {
                mimeTypeArray[index] = mimeType;
                Object.defineProperty(mimeTypeArray, mimeType.type, {
                    value: mimeType,
                    writable: false,
                    enumerable: false,
                    configurable: true
                });
                dingvm.toolsFunc.setProtoArr.call(mimeTypeArray, "length", index + 1);
            }
            dingvm.memory.globalVar.mimeTypeArray = mimeTypeArray;
            return mimeTypeArray;
        };

        // 创建MimeType
        dingvm.toolsFunc.createMimeType = function (mimeTypeJson, plugin) {
            let mimeType = {};
            Object.setPrototypeOf(mimeType, MimeType.prototype)
            if (dingvm.config.proxy_navigator_plugins) {
                mimeType = dingvm.toolsFunc.createProxyObj(mimeType, "mimeType");
            }
            dingvm.toolsFunc.setProtoArr.call(mimeType, "description", mimeTypeJson.description);
            dingvm.toolsFunc.setProtoArr.call(mimeType, "suffixes", mimeTypeJson.suffixes);
            dingvm.toolsFunc.setProtoArr.call(mimeType, "type", mimeTypeJson.type);
            dingvm.toolsFunc.setProtoArr.call(mimeType, "enabledPlugin", plugin);
            dingvm.toolsFunc.addMimeType(mimeType);
            return mimeType;
        };

        // 创建plugin
        dingvm.toolsFunc.createPlugin = function (data) {
            let mimeTypes = data.mimeTypes;
            let plugin = {};
            Object.setPrototypeOf(plugin, Plugin.prototype)
            if (dingvm.config.proxy_navigator_plugins) {
                plugin = dingvm.toolsFunc.createProxyObj(plugin, "plugin");
            }
            dingvm.toolsFunc.setProtoArr.call(plugin, "description", data.description);
            dingvm.toolsFunc.setProtoArr.call(plugin, "filename", data.filename);
            dingvm.toolsFunc.setProtoArr.call(plugin, "name", data.name);
            dingvm.toolsFunc.setProtoArr.call(plugin, "length", mimeTypes.length);
            for (let i = 0; i < mimeTypes.length; i++) {
                let mimeType = dingvm.toolsFunc.createMimeType(mimeTypes[i], plugin);
                plugin[i] = mimeType;
                Object.defineProperty(plugin, mimeTypes[i].type, {
                    value: mimeType,
                    writable: false,
                    enumerable: false,
                    configurable: true
                });
            }
            dingvm.toolsFunc.addPlugin(plugin);
            return plugin;
        };
    }();

    // 更新location信息
    dingvm.toolsFunc.resetLocation = function (url) {
        let jsonUrl = dingvm.toolsFunc.parseUrl(url);
        dingvm.memory.globalVar._location.protocol = jsonUrl['protocol']
        dingvm.memory.globalVar._location.hostname = jsonUrl['hostname']
        dingvm.memory.globalVar._location.host = jsonUrl['host']
        dingvm.memory.globalVar._location.href = jsonUrl['href']
        dingvm.memory.globalVar._location.hash = jsonUrl['hash']
        dingvm.memory.globalVar._location.port = jsonUrl['port']
        dingvm.memory.globalVar._location.origin = jsonUrl['origin']
        dingvm.memory.globalVar._location.search = jsonUrl['search']
        dingvm.memory.globalVar._location.pathname = jsonUrl['pathname']
        dingvm.memory.globalVar._location.ancestorOrigins = {}
    };

    // 十六进制转rgb
    dingvm.toolsFunc.hexToRgb = function (hex) {
        if (typeof hex !== "string") return;
        hex = hex.toLowerCase();
        let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        if (hex && reg.test(hex)) {
            if (hex.length === 4) {
                var hexNew = "#";
                for (var i = 1; i < 4; i += 1) {
                    hexNew += hex
                        .slice(i, i + 1)
                        .concat(hex.slice(i, i + 1));
                }
                hex = hexNew;
            }
            let hexChange = [];
            for (let i = 1; i < 7; i += 2) {
                hexChange.push(parseInt("0x" + hex.slice(i, i + 2)));
            }
            return "rgb(" + hexChange.join(",") + ")";
        }
        return hex;
    }

    // 解析url
    dingvm.toolsFunc.parseUrl = function (str) {
        if (!dingvm.toolsFunc.parseUrl || !dingvm.toolsFunc.parseUrl.options) {
            dingvm.toolsFunc.parseUrl.options = {
                strictMode: false,
                key: ["href", "protocol", "host", "userInfo", "user", "password", "hostname", "port", "relative", "pathname", "directory", "file", "search", "hash"],
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            };
        }
        if (!str) {
            return '';
        }
        var o = dingvm.toolsFunc.parseUrl.options,
            m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
            urlJson = {},
            i = 14;
        while (i--) urlJson[o.key[i]] = m[i] || "";
        urlJson[o.q.name] = {};
        urlJson[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
            if ($1) urlJson[o.q.name][$1] = $2;
        });
        delete urlJson["queryKey"];
        delete urlJson["userInfo"];
        delete urlJson["user"];
        delete urlJson["password"];
        delete urlJson["relative"];
        delete urlJson["directory"];
        delete urlJson["file"];
        urlJson["protocol"] += ":";
        urlJson["origin"] = urlJson["protocol"] + "//" + urlJson["host"];
        urlJson["search"] = urlJson["search"] && "?" + urlJson["search"];
        urlJson["hash"] = urlJson["hash"] && "#" + urlJson["hash"];
        return urlJson;
    };

    // 获取标签原型链上的自己的属性
    dingvm.toolsFunc.get_protoOwnAttr = function (key) {
        // debugger
        let result = this.jquery.attr(key);
        if (result) {
            return result;
        } else {
            return dingvm.toolsFunc.getProtoArr.call(this, key);
        }
    };

    // 解析cookie字符串 -> JSON
    dingvm.toolsFunc.parseCookie = function (cookieStr) {
        if (!cookieStr) {
            return {};
        }

        let cookieArr = cookieStr.split('; ');
        let cookieObj = {};

        for (let i = 0; i < cookieArr.length; i++) {
            let cookie = cookieArr[i].split('=');
            // cookieObj[cookie[0]] = decodeURIComponent(cookie[1]);
            cookieObj[cookie[0]] = cookie[1];
        }

        return cookieObj;
    };

    // 获取代理次数ID
    dingvm.toolsFunc.getID = function (name) {
        if (!(name in dingvm.memory.ID)) {
            dingvm.memory.ID[name] = 0;
        }

        return dingvm.memory.ID[name]++;
    };

    // 代理dom标签
    dingvm.toolsFunc.createProxyObj = function (obj, name) {
        return dingvm.toolsFunc.proxy(obj, `${name}_ID(${dingvm.toolsFunc.getID(name)})`);
    };

    // 获取原型对象上自身属性值
    dingvm.toolsFunc.getProtoArr = function (key) {
        return this[dingvm.memory.symbolData] && this[dingvm.memory.symbolData][key];
    };
    dingvm.toolsFunc.setProtoArr = function (key, value) {
        if (!(dingvm.memory.symbolData in this)) {
            Object.defineProperty(this, dingvm.memory.symbolData, {
                enumerable: false,
                configurable: false,
                writable: true,
                value: {}
            });
        }
        this[dingvm.memory.symbolData][key] = value;
    };
    dingvm.toolsFunc.deleteProtoArr = function (key) {
        if (this[dingvm.memory.symbolData] && this[dingvm.memory.symbolData][key]) {
            delete dingvm.memory.symbolData[key]
        } else if (this[dingvm.memory.symbolData]) {
            console.warn('deleteProtoArr 没有这个值: ', key)
        }
    };

    // hook 插件
    dingvm.toolsFunc.hook = function (func, funcInfo, isDebug, onEnter, onLeave, isExec) {
        // func ： 原函数，需要hook的函数
        // funcInfo: 是一个对象有 objName，funcName属性
        // isDebug: 布尔类型, 是否进行调试，关键点定位，回溯调用栈
        // onEnter：函数， 原函数执行前执行的函数，改原函数入参，或者输出入参
        // onLeave： 函数，原函数执行完之后执行的函数，改原函数的返回值，或者输出原函数的返回值
        // isExec ： 布尔， 是否执行原函数，比如无限debugger函数
        if (typeof func !== 'function') {
            return func;
        }
        if (funcInfo === undefined) {
            funcInfo = {};
            funcInfo.objName = "globalThis";
            funcInfo.funcName = func.name || '';
        }
        if (isDebug === undefined) {
            isDebug = false;
        }
        if (!onEnter) {
            onEnter = function (obj) {
                console.log(`{hook|${funcInfo.objName}[${funcInfo.funcName}]正在调用，参数是${JSON.stringify(obj.args)}}`);
            }
        }
        if (!onLeave) {
            onLeave = function (obj) {
                console.log(`{hook|${funcInfo.objName}[${funcInfo.funcName}]正在调用，返回值是[${obj.result}]`);
            }
        }
        if (isExec === undefined) {
            isExec = true;
        }
        // 替换的函数
        let hookFunc = function () {
            if (isDebug) {
                debugger;
            }
            let obj = {};
            obj.args = [];
            for (let i = 0; i < arguments.length; i++) {
                obj.args[i] = arguments[i];
            }
            // 原函数执行前
            onEnter.call(this, obj); // onEnter(obj);
            // 原函数正在执行
            let result;
            if (isExec) {
                result = func.apply(this, obj.args);
            }
            obj.result = result;
            // 原函数执行后
            onLeave.call(this, obj); // onLeave(obj);
            // 返回结果
            return obj.result;
        }
        // hook 后的函数进行native
        dingvm.toolsFunc.setNative(hookFunc, funcInfo.funcName);
        dingvm.toolsFunc.reNameFunc(hookFunc, funcInfo.funcName);
        return hookFunc;
    };

    // hook 原型对象的属性，本质是替换属性描述符
    dingvm.toolsFunc.hookObj = function (obj, objName, propName, isDebug) {
        // obj :需要hook的对象
        // objName: hook对象的名字
        // propName： 需要hook的对象属性名
        // isDubug: 是否需要debugger
        let oldDescriptor = Object.getOwnPropertyDescriptor(obj, propName);
        let newDescriptor = {};
        if (!oldDescriptor.configurable) { // 如果是不可配置的，直接返回
            return;
        }
        // 必须有的属性描述
        newDescriptor.configurable = true;
        newDescriptor.enumerable = oldDescriptor.enumerable;
        if (oldDescriptor.hasOwnProperty("writable")) {
            newDescriptor.writable = oldDescriptor.writable;
        }
        if (oldDescriptor.hasOwnProperty("value")) {
            let value = oldDescriptor.value;
            if (typeof value !== "function") {
                return;
            }
            let funcInfo = {
                "objName": objName,
                "funcName": propName
            }
            newDescriptor.value = dingvm.toolsFunc.hook(value, funcInfo, isDebug);
        }
        if (oldDescriptor.hasOwnProperty("get")) {
            let get = oldDescriptor.get;
            let funcInfo = {
                "objName": objName,
                "funcName": `get ${propName}`
            }
            newDescriptor.get = dingvm.toolsFunc.hook(get, funcInfo, isDebug);
        }
        if (oldDescriptor.hasOwnProperty("set")) {
            let set = oldDescriptor.set;
            let funcInfo = {
                "objName": objName,
                "funcName": `set ${propName}`
            }
            newDescriptor.set = dingvm.toolsFunc.hook(set, funcInfo, isDebug);
        }
        Object.defineProperty(obj, propName, newDescriptor);
    };

    // hook 对象的原型所有属性
    dingvm.toolsFunc.hookProto = function (proto, isDebug) {
        // proto :函数原型
        // isDebug: 是否debugger
        let protoObj = proto.prototype;
        let name = proto.name;
        for (const prop in Object.getOwnPropertyDescriptors(protoObj)) {
            dingvm.toolsFunc.hookObj(protoObj, `${name}.prototype`, prop, isDebug);
        }
        console.log(`hook ${name}.prototype`);
    };

    //hook window所有属性
    dingvm.toolsFunc.hookGlobal = function (isDebug) {
        for (const key in Object.getOwnPropertyDescriptors(window)) {
            if (typeof window[key] === 'function') {
                if (typeof window[key].prototype === 'object') {
                    if (!g[key]) {
                        dingvm.toolsFunc.hookProto(window[key], isDebug)
                    }
                } else if (typeof window[key].prototype === 'undefined') {
                    let funcInfo = {
                        "objName": "globalThis",
                        "funcName": key
                    }
                    dingvm.toolsFunc.hook(window[key], funcInfo, isDebug)
                    console.log(window[key]);
                }
            }
        }
    };

    // 获取对象类型
    dingvm.toolsFunc.getType = function (obj) {
        return Object.prototype.toString.call(obj).slice(8, -1);
    };

    // 过滤属性
    dingvm.toolsFunc.filterProp = function (prop) {
        for (let i = 0; i < dingvm.memory.filterStrProp.length; i++) {
            if (dingvm.memory.filterStrProp[i] === prop.toString())
                return true;
        }
        for (let i = 0; i < dingvm.memory.filterSymbolProp.length; i++) {
            if (dingvm.memory.filterSymbolProp[i] === prop)
                return true;
        }
        return false;
    };
    dingvm.toolsFunc.filterRecursionProp = function (prop) {
        if (typeof prop === 'function')
            return true;
        for (let i = 0; i < dingvm.memory.filterRecursionProp.length; i++) {
            if (dingvm.memory.filterRecursionProp[i] === prop.toString())
                return true;
        }
        return false;
    };

    // proxy代理器
    dingvm.toolsFunc.proxy = function (obj, objName) {
        // obj: 原始对象
        // objName: 原始对象的名字
        if (!dingvm.config.proxy) {
            return obj;
        }
        if (dingvm.memory.symbolProxy in obj) {// 判断对象obj是否是已代理的对象
            return obj[dingvm.memory.symbolProxy];
        }
        let handler = {
            get: function (target, prop, receiver) {
                /**
                 * @target: 原始对象
                 * @prop: 属性
                 * @receiver: 代理对象
                 */
                let result;
                try {
                    result = Reflect.get(target, prop, receiver);
                    if (dingvm.toolsFunc.filterProp(prop) || !isNaN(Number(prop)))
                        return result;
                    let type = dingvm.toolsFunc.getType(result);
                    let table = {
                        "类型": 'get',
                        '调用者': target,
                        '属性': prop.toString(),
                        '值': result,
                        '值类型': type
                    }

                    if (result instanceof Object) {
                        try {
                            let if_ = (['self', 'top', 'window', 'parent', 'globalThis', 'frames'].indexOf(prop.toString()) !== -1);
                            table['值'] = if_ ? 'window' : (typeof result === 'function' ? result.toString() : JSON.stringify(result));
                            console.table([table]);
                        } catch (e) {
                            // debugger
                            console.table([table]);
                        }
                        // 过滤不需要递归代理的属性
                        if (!dingvm.toolsFunc.filterRecursionProp(prop)) {
                            result = dingvm.toolsFunc.proxy(result, `${objName}.${prop.toString()}`);
                        }
                    } else {
                        console.table([table]);
                    }
                } catch (e) {
                    debugger
                    console.error(`{get:[${objName}] -> prop:[${prop.toString()}] -> error:[${e.message}]}`);
                }
                return result;
            },
            set: function (target, prop, value, receiver) {
                let result;
                try {
                    result = Reflect.set(target, prop, value, receiver);
                    if (prop === '__proto__')
                        return result
                    let type = dingvm.toolsFunc.getType(value);
                    let table = {
                        "类型": 'set',
                        '调用者': target,
                        '属性': prop.toString(),
                        '值': result,
                        '值类型': type
                    }

                    if (value instanceof Object) {
                        try {
                            let if_ = (type === 'Window' || ['self', 'top', 'window', 'parent', 'globalThis', 'frames'].indexOf(prop.toString()) !== -1);
                            table['值'] = if_ ? 'window' : (typeof value === 'function' ? value.toString() : JSON.stringify(value));
                            console.table([table]);
                        } catch (e) {
                            // debugger
                            console.table([table]);
                        }
                    } else {
                        console.table([table]);
                    }
                } catch (e) {
                    console.error(`{set:[${objName}] -> prop:[${prop.toString()}] -> error:[${e.message}]}`);
                }
                return result;
            },
            getOwnPropertyDescriptor: function (target, prop) {
                let result;// undefined, 描述符对象
                try {
                    result = Reflect.getOwnPropertyDescriptor(target, prop);
                    let type = dingvm.toolsFunc.getType(result);
                    if (prop !== 'constructor') {
                        try {
                            if (['self', 'top', 'window'].indexOf(prop) === -1) {
                                if (typeof result.value !== 'object') {
                                    console.log(`{getOwnPropertyDescriptor|obj:[${objName}] -> prop:[${prop.toString()}],ret:[${JSON.stringify(result)}]} -> type:[${type}]`);
                                }
                            } else {
                                console.log(`{getOwnPropertyDescriptor|obj:[${objName}] -> prop:[${prop.toString()}],type:[${type}]}`);
                            }
                            // console.log(`{getOwnPropertyDescriptor|obj:[${objName}] -> prop:[${prop.toString()}],type:[${type}]}`);
                        } catch (e) {
                            console.warn(`{getOwnPropertyDescriptor|obj:[${objName}] -> prop:[${prop.toString()}] -> type:[${type}]} !!! 获取的描述符对象是循环引用`);
                        }
                    }
                    // if(typeof result !== "undefined"){
                    //     result = dingvm.toolsFunc.proxy(result, `${objName}.${prop.toString()}.PropertyDescriptor`);
                    // }
                } catch (e) {
                    console.warn(`{getOwnPropertyDescriptor|obj:[${objName}] -> prop:[${prop.toString()}] -> error:[${e.message}]}`);
                }
                return result;
            },
            defineProperty: function (target, prop, descriptor) {
                if (prop.toString() === 'Symbol(data)') {
                    return Reflect.defineProperty(target, prop, descriptor)
                }

                let result;
                try {
                    result = Reflect.defineProperty(target, prop, descriptor);
                    let type = dingvm.toolsFunc.getType(descriptor);
                    try {
                        console.log(`{defineProperty|obj:[${objName}] -> prop:[${prop.toString()}],descriptor:[${JSON.stringify(descriptor)}]} -> type:[${type}]`);
                    } catch (e) {
                        console.warn(`{defineProperty|obj:[${objName}] -> prop:[${prop.toString()}] -> type:[${type}]} !!! 定义属性的描述符对象是循环引用`);
                    }
                } catch (e) {
                    console.warn(`{defineProperty|obj:[${objName}] -> prop:[${prop.toString()}] -> error:[${e.message}]}`);
                }
                return result;
            },
            // apply: function (target, thisArg, argumentsList) {
            //     // target: 函数对象
            //     // thisArg: 调用函数的this指针
            //     // argumentsList: 数组， 函数的入参组成的一个列表
            //     // debugger
            //     let result = {};
            //     try {
            //         result = Reflect.apply(target, thisArg, argumentsList);
            //         let type = dingvm.toolsFunc.getType(result);
            //
            //         if (result instanceof Object) {
            //             try {
            //                 console.log(`{apply|obj:[${objName}] -> arguments:[${JSON.stringify(argumentsList)}],ret:[${JSON.stringify(result)}]} -> type:[${type}]`);
            //             } catch (e) {
            //                 console.warn(`{apply|obj:[${objName}] -> arguments:[${JSON.stringify(argumentsList)}] -> type:[${type}]} !!! 函数返回值是对象、循环引用`);
            //             }
            //         } else if (typeof result === "symbol") {
            //             console.log(`{apply|function:[${objName}], result:[${result.toString()}]}`);
            //         } else {
            //             console.log(`{apply|function:[${objName}], result:[${result}]}`);
            //         }
            //     } catch (e) {
            //         debugger
            //         // console.warn(`{apply|function:[${objName}] -> error:[${e.message}]}`);
            //     }
            //     return result;
            // },
            // construct: function (target, argArray, newTarget) {
            //     // target: 函数对象
            //     // argArray： 参数列表
            //     // newTarget：代理对象
            //     let result;
            //     try {
            //         result = Reflect.construct(target, argArray, newTarget);
            //         let type = dingvm.toolsFunc.getType(result);
            //         try {
            //             console.log(`{construct|function:[${objName}] -> argArray:[${JSON.stringify(argArray)}],ret:[${JSON.stringify(result)}]} -> type:[${type}]`);
            //         } catch (e) {
            //             console.warn(`{construct|function:[${objName}] -> argArray:[${JSON.stringify(argArray)}] -> type:[${type}]} !!! 实例的对象是循环引用`);
            //         }
            //     } catch (e) {
            //         console.warn(`{construct|function:[${objName}],error:[${e.message}]}`);
            //     }
            //     return result;
            // },
            deleteProperty: function (target, propKey) {
                console.log(`delete value:[${target[propKey]}]`);
                let result = Reflect.deleteProperty(target, propKey);
                console.log(`{deleteProperty|obj:[${objName}] -> prop:[${propKey.toString()}], result:[${result}]}`);
                return result;
            },
            has: function (target, propKey) { // in 操作符
                if (propKey.toString() === 'Symbol(data)') {
                    return Reflect.has(target, propKey)
                }
                let result = Reflect.has(target, propKey);
                if (propKey !== dingvm.memory.symbolProxy) {
                    console.log(`{has|obj:[${objName}] -> prop:[${propKey.toString()}], result:[${result}]}`);
                }
                return result;
            },
            ownKeys: function (target) {
                let result = Reflect.ownKeys(target);
                console.log(`{ownKeys|obj:[${objName}]} -> ret:[${JSON.stringify(result)}]`);
                return result
            },
            getPrototypeOf: function (target) {
                let result = Reflect.getPrototypeOf(target);
                console.log(`{getPrototypeOf|obj:[${objName}]} -> ret:[${JSON.stringify(result)}]`);
                return result;
            },
            setPrototypeOf: function (target, proto) {
                let result = Reflect.setPrototypeOf(target, proto);
                console.log(`{setPrototypeOf|obj:[${objName}]} -> proto:[${JSON.stringify(proto)}], ret:[${result}]`);
                return result;
            },
            preventExtensions: function (target) {
                let result = Reflect.preventExtensions(target);
                console.log(`{preventExtensions|obj:[${objName}]}`);
                return result;
            },
            isExtensible: function (target) {
                let result = Reflect.isExtensible(target);
                console.log(`{isExtensible|obj:[${objName}]}`);
                return result;
            }
        };
        let handler_func = {
            apply: function (target, thisArg, argumentsList) {
                // target: 函数对象
                // thisArg: 调用函数的this指针
                // argumentsList: 数组， 函数的入参组成的一个列表
                // debugger
                let result = {};
                try {
                    result = Reflect.apply(target, thisArg, argumentsList);
                    let type = dingvm.toolsFunc.getType(result);

                    if (result instanceof Object) {
                        try {
                            console.log(`{apply|obj:[${objName}] -> arguments:[${JSON.stringify(argumentsList)}],ret:[${JSON.stringify(result)}]} -> type:[${type}]`);
                        } catch (e) {
                            console.warn(`{apply|obj:[${objName}] -> arguments:[${JSON.stringify(argumentsList)}] -> type:[${type}]} !!! 函数返回值是对象、循环引用`);
                        }
                    } else if (typeof result === "symbol") {
                        console.log(`{apply|function:[${objName}], result:[${result.toString()}]}`);
                    } else {
                        console.log(`{apply|function:[${objName}], result:[${result}]}`);
                    }
                } catch (e) {
                    debugger
                    // console.warn(`{apply|function:[${objName}] -> error:[${e.message}]}`);
                }
                return result;
            },
            construct: function (target, argArray, newTarget) {
                // target: 函数对象
                // argArray： 参数列表
                // newTarget：代理对象
                let result;
                try {
                    result = Reflect.construct(target, argArray, newTarget);
                    let type = dingvm.toolsFunc.getType(result);
                    try {
                        console.log(`{construct|function:[${objName}] -> argArray:[${JSON.stringify(argArray)}],ret:[${JSON.stringify(result)}]} -> type:[${type}]`);
                    } catch (e) {
                        console.warn(`{construct|function:[${objName}] -> argArray:[${JSON.stringify(argArray)}] -> type:[${type}]} !!! 实例的对象是循环引用`);
                    }
                } catch (e) {
                    console.warn(`{construct|function:[${objName}],error:[${e.message}]}`);
                }
                return result;
            },
        }
        let proxyObj = new Proxy(obj, handler);
        Object.defineProperty(obj, dingvm.memory.symbolProxy, {
            configurable: false,
            enumerable: false,
            writable: false,
            value: proxyObj
        });
        return proxyObj;
    };
    dingvm.toolsFunc.proxy_setStyle = function (style) {
        let handler = {
            set: function (target, prop, value, receiver) {
                target.myThis.jquery.css(prop, value)
                // console.log('set style', prop, value)
                let index = target.length
                target[index] = prop
                return Reflect.set(target, prop, value, receiver)
            }
        }

        return new Proxy(style, handler);
    };

    // env函数分发器
    dingvm.toolsFunc.dispatch = function (self, ordinaryObj_protoObj, ordinaryObj_protoObj__Name, funcName, argList, defaultValue) {
        /**
         * @ordinaryObj_protoObj__Name 普通对象或原型对象名字
         * @type {string}
         */
        let name = `${ordinaryObj_protoObj__Name}_${funcName}`; // EventTargetProto_addEventListener 或 window_atob 或 特殊情况构造函数有方法属性(EventTarget_addEventListener)
        if (Object.getOwnPropertyDescriptor(ordinaryObj_protoObj, 'constructor')) {
            if (Object.getOwnPropertyDescriptor(self, 'constructor')) {
                //! self 不是实例对象 原型对象直接调用方法报错
                return dingvm.toolsFunc.throwError('TypeError', 'Illegal invocation');
            }
        }
        try {
            return dingvm.envFunc[name].apply(self, argList);
        } catch (e) {
            // debugger
            if (defaultValue === undefined) {
                try {
                    console.warn(`[${name}] 参数[${JSON.stringify(argList)}] 正在执行，错误信息(补错 或 未补 或 返回undefined): ${e.message}`);
                } catch (e) {
                    console.warn(`[${name}] argList参数是循环引用对象`)
                }
            }
            if (defaultValue !== undefined) {
                console.log(`[${name}]使用默认值:[${defaultValue}]`);
            }

            return defaultValue;
        }
    };

    // 定义对象属性defineProperty
    dingvm.toolsFunc.defineProperty = function (obj, prop, oldDescriptor) {
        let newDescriptor = {};
        newDescriptor.configurable = dingvm.config.proxy || oldDescriptor.configurable;// 如果开启代理必须是true
        newDescriptor.enumerable = oldDescriptor.enumerable;
        if (oldDescriptor.hasOwnProperty("writable")) {
            newDescriptor.writable = dingvm.config.proxy || oldDescriptor.writable;// 如果开启代理必须是true
        }
        if (oldDescriptor.hasOwnProperty("value")) {
            let value = oldDescriptor.value;
            if (typeof value === "function") {
                dingvm.toolsFunc.safeFunc(value, prop);
            }
            newDescriptor.value = value;
        }
        if (oldDescriptor.hasOwnProperty("get")) {
            let get = oldDescriptor.get;
            if (typeof get === "function") {
                dingvm.toolsFunc.safeFunc(get, `get ${prop}`);
            }
            newDescriptor.get = get;
        }
        if (oldDescriptor.hasOwnProperty("set")) {
            let set = oldDescriptor.set;
            if (typeof set === "function") {
                dingvm.toolsFunc.safeFunc(set, `set ${prop}`);
            }
            newDescriptor.set = set;
        }
        Object.defineProperty(obj, prop, newDescriptor);
    };

    // 函数native化
    // // 1
    !function () {
        const $toString = Function.prototype.toString;
        const symbol = Symbol(); // 独一无二的属性
        const myToString = function () {
            return typeof this === 'function' && this[symbol] || $toString.call(this);
        }

        function set_native(func, key, value) {
            Object.defineProperty(func, key, {
                enumerable: false,
                configurable: true,
                writable: true,
                value: value
            });
        }

        delete Function.prototype.toString;
        set_native(Function.prototype, "toString", myToString);
        set_native(Function.prototype.toString, symbol, "function toString() { [native code] }");
        dingvm.toolsFunc.setNative2 = function (func, funcName) {
            set_native(func, symbol, `function ${funcName || func.name || ''}() { [native code] }`);
        }
    }();
    // // 2
    !function () {
        const MyGetOwnPropertySymbols = Object.getOwnPropertySymbols;

        Object.getOwnPropertySymbols = function getOwnPropertySymbols() {
            let result = MyGetOwnPropertySymbols.apply(this, arguments);
            for (let i = 0; i < result.length; i++) {
                const symbolString = result[i].toString();
                if (symbolString.indexOf("myToString") !== -1 ||
                    symbolString.indexOf("data") !== -1 ||
                    symbolString.indexOf("proxy") !== -1) {
                    result.splice(i, 1);
                    i--; // 减少索引以补偿被移除的元素
                }
            }
            return result;
        };

        const $toString = Function.toString;
        const myFunction_toString_symbol = Symbol('myToString('.concat('', ')_', (Math.random()) + '').toString())
        const myToString = function () {
            return typeof this === 'function' && this[myFunction_toString_symbol] || $toString.call(this)
        }

        function set_native(func, key, value) {
            Object.defineProperty(func, key, {
                enumerable: false,
                configurable: true,
                writable: true,
                value: value
            })
        }

        //先删除所有函数的toString方法
        delete Function.prototype.toString
        //在重定义一个所有函数公用的toString方法
        set_native(Function.prototype, "toString", myToString);
        set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }")
        set_native(Object.getOwnPropertySymbols, myFunction_toString_symbol, `function getOwnPropertySymbols() { [native code] }`)
        dingvm.toolsFunc.setNative = (func, funcName) => {
            set_native(func, myFunction_toString_symbol, `function ${funcName || func.name || ''}() { [native code] }`)
        }
    }();

    // 对象重命名
    dingvm.toolsFunc.reNameObj = function (obj, name) {
        Object.defineProperty(obj.prototype, Symbol.toStringTag, {
            configurable: true,
            enumerable: false,
            value: name,
            writable: false
        });
    };

    // 函数重命名
    dingvm.toolsFunc.reNameFunc = function (func, name) {
        Object.defineProperty(func, "name", {
            configurable: true,
            enumerable: false,
            writable: false,
            value: name
        });
    };

    // 函数保护方法
    dingvm.toolsFunc.safeFunc = function (func, name) {
        dingvm.toolsFunc.setNative(func, name);
        dingvm.toolsFunc.reNameFunc(func, name);
    };

    // 原型保护方法
    dingvm.toolsFunc.safe_constructor_prototype = function (obj, name) {
        dingvm.toolsFunc.setNative(obj, name);
        dingvm.toolsFunc.reNameObj(obj, name);
    };
    dingvm.toolsFunc.safeProto = function (obj, name) {
        dingvm.toolsFunc.setNative(obj, name);
        dingvm.toolsFunc.reNameObj(obj, name);
    };

    // 抛错函数
    dingvm.toolsFunc.throwError = function (name, message) {
        let e = new TypeError(message);
        // e.name = name;
        // e.message = message;
        e.stack = `${name}: ${message}\n    at snippet://`;
        throw e;
    };

    // base64编码解码
    dingvm.toolsFunc.base64 = {};
    dingvm.toolsFunc.base64.base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    dingvm.toolsFunc.base64.base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
    dingvm.toolsFunc.base64.base64encode = function (str) {
        let out, i, len;
        let c1, c2, c3;

        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i === len) {
                out += dingvm.toolsFunc.base64.base64EncodeChars.charAt(c1 >> 2);
                out += dingvm.toolsFunc.base64.base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i === len) {
                out += dingvm.toolsFunc.base64.base64EncodeChars.charAt(c1 >> 2);
                out += dingvm.toolsFunc.base64.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += dingvm.toolsFunc.base64.base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += dingvm.toolsFunc.base64.base64EncodeChars.charAt(c1 >> 2);
            out += dingvm.toolsFunc.base64.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += dingvm.toolsFunc.base64.base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += dingvm.toolsFunc.base64.base64EncodeChars.charAt(c3 & 0x3F);
        }
        return out;
    };
    dingvm.toolsFunc.base64.base64decode = function (str) {
        let c1, c2, c3, c4;
        let i, len, out;

        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            /* c1 */
            do {
                c1 = dingvm.toolsFunc.base64.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c1 === -1);
            if (c1 === -1)
                break;

            /* c2 */
            do {
                c2 = dingvm.toolsFunc.base64.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c2 === -1);
            if (c2 === -1)
                break;

            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

            /* c3 */
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 === 61)
                    return out;
                c3 = dingvm.toolsFunc.base64.base64DecodeChars[c3];
            } while (i < len && c3 === -1);
            if (c3 === -1)
                break;

            out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

            /* c4 */
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 === 61)
                    return out;
                c4 = dingvm.toolsFunc.base64.base64DecodeChars[c4];
            } while (i < len && c4 === -1);
            if (c4 === -1)
                break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    };

}();
;
dingvm.envFunc.EventTargetProto_addEventListener = function EventTargetProto_addEventListener(type, listener, useCapture) {
    let event = {
        "self": this,
        "type": type,
        "listener": listener,
        "options": useCapture
    }
    if (dingvm.memory.asyncEvent.listener === undefined) {
        dingvm.memory.asyncEvent.listener = {};
    }
    if (dingvm.memory.asyncEvent.listener[type] === undefined) {
        dingvm.memory.asyncEvent.listener[type] = [];
    }
    dingvm.memory.asyncEvent.listener[type].push(event);

    if (this.listeners === undefined) {
        this.listeners = {}
    }
    if (!(type in this.listeners)) {
        this.listeners[type] = []
    }

    this.listeners[type].push(listener)
};
dingvm.envFunc.EventTargetProto_removeEventListener = function EventTargetProto_removeEventListener(type, listener, useCapture) {
    if (!(type in this.listeners)) {
        return
    }

    let stack = this.listeners[type]
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] === listener) {
            stack.splice(i, 1)
            return this.removeEventListener(type, listener, useCapture)
        }
    }
};
dingvm.envFunc.EventTargetProto_dispatchEvent = function EventTargetProto_dispatchEvent(event) {
    if (!(event.type in this.listeners)) {
        return;
    }

    let stack = this.listeners[event.type];
    event.target = this;

    for (let i = 0; i < stack.length; i++) {
        stack[i].call(this, event);
    }
};;
dingvm.envFunc.StorageProto_setItem = function StorageProto_setItem() {
    let keyName = arguments[0];
    this[keyName] = arguments[1];
};
dingvm.envFunc.StorageProto_getItem = function StorageProto_getItem() {
    let key = arguments[0];
    if (key in this) {
        return this[key];
    }
    return null;
};
dingvm.envFunc.StorageProto_removeItem = function StorageProto_removeItem() {
    let key = arguments[0];
    delete this[key];
};
dingvm.envFunc.StorageProto_key = function StorageProto_key() {
    let index = arguments[0];
    let i = 0;
    for (const key in this) {
        if (i === index) {
            return key;
        }
        i++;
    }
    return null;
};
dingvm.envFunc.StorageProto_clear = function StorageProto_clear() {
    for (const key in this) {
        delete this[key];
    }
};
dingvm.envFunc.StorageProto_length_get = function StorageProto_length_get() {
    let i = 0;
    for (const key in Object.getOwnPropertyDescriptors(this)) {
        i++;
    }
    return i;
};;
dingvm.envFunc.location_valueOf = function () {
    console.log('location_valueOf')
};
dingvm.envFunc.location_ancestorOrigins_get = function () {
    return dingvm.memory.globalVar._location.ancestorOrigins
};
dingvm.envFunc.location_href_get = function () {
    return dingvm.memory.globalVar._location.href;
};
dingvm.envFunc.location_href_set = function (value) {
    console.log('这个一般不会调用 危险')
    return dingvm.toolsFunc.setProtoArr.call(this, 'href', value);
};
dingvm.envFunc.location_origin_get = function () {
    return dingvm.memory.globalVar._location.origin;
};
dingvm.envFunc.location_protocol_get = function () {
    return dingvm.memory.globalVar._location.protocol
};
dingvm.envFunc.location_protocol_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, "protocol", value)
};
dingvm.envFunc.location_host_get = function () {
    return dingvm.memory.globalVar._location.host;
};
dingvm.envFunc.location_host_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, "host", value)
};
dingvm.envFunc.location_hostname_get = function () {
    return dingvm.memory.globalVar._location.hostname
};
dingvm.envFunc.location_hostname_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, "hostname", value)
};
dingvm.envFunc.location_port_get = function () {
    return dingvm.memory.globalVar._location.port
};
dingvm.envFunc.location_port_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, "port", value)
};
dingvm.envFunc.location_pathname_get = function () {
    return dingvm.memory.globalVar._location.pathname
};
dingvm.envFunc.location_pathname_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'pathname', value)
};
dingvm.envFunc.location_search_get = function () {
    return dingvm.memory.globalVar._location.search
};
dingvm.envFunc.location_search_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'search', value)
};
dingvm.envFunc.location_hash_get = function () {
    return dingvm.memory.globalVar._location.hash
};
dingvm.envFunc.location_hash_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'hash', value)
};
dingvm.envFunc.location_assign = function () {
    console.log('location_assign')
};
dingvm.envFunc.location_reload = function () {
    console.log('location_reload')
};
dingvm.envFunc.location_replace = function (url) {
    console.log('location_replace 更新url和location信息: ', url)
    dingvm.toolsFunc.resetLocation(url)
};
dingvm.envFunc.location_toString = function () {
    return dingvm.memory.globalVar._location.href;
};
;
dingvm.envFunc.ScreenProto_width_get = function () {
    return dingvm.memory.globalVar.width;
};
dingvm.envFunc.ScreenProto_height_get = function () {
    return dingvm.memory.globalVar.height;
};
dingvm.envFunc.ScreenProto_availWidth_get = function () {
    return dingvm.memory.globalVar.width;
};
dingvm.envFunc.ScreenProto_availHeight_get = function () {
    return dingvm.memory.globalVar.height;
};
dingvm.envFunc.ScreenProto_colorDepth_get = function () {
    return 24
};
dingvm.envFunc.ScreenProto_pixelDepth_get = function () {
    return 24
};
dingvm.envFunc.ScreenProto_availTop_get = function () {
    return 0
};
dingvm.envFunc.ScreenProto_availLeft_get = function () {
    return 0
};
dingvm.envFunc.ScreenProto_orientation_get = function () {
    return {
        angle: 0,
        type: "landscape-primary",
        onchange: null
    };
};
;
dingvm.envFunc.HistoryProto_length_get = function () {
    return 1
};
dingvm.envFunc.HistoryProto_scrollRestoration_get = function () {
    return 'auto'
};
dingvm.envFunc.HistoryProto_scrollRestoration_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'scrollRestoration', value)
};
dingvm.envFunc.HistoryProto_state_get = function () {
    return null
};
dingvm.envFunc.HistoryProto_back = function () {
    debugger
};
dingvm.envFunc.HistoryProto_forward = function () {
    debugger
};
dingvm.envFunc.HistoryProto_go = function () {
    debugger
};
dingvm.envFunc.HistoryProto_pushState = function () {
    debugger
};
dingvm.envFunc.HistoryProto_replaceState = function () {
    debugger
};
;
dingvm.envFunc.window_top_get = function () {
    return window
};
dingvm.envFunc.window_self_get = function () {
    return window
};
dingvm.envFunc.window_name_get = function () {
    return ''
};
dingvm.envFunc.window_indexedDB_get = function () {
    let obj = {}
    Object.setPrototypeOf(obj, IDBFactory.prototype)

    return obj
};
dingvm.envFunc.window_openDatabase = function (name, version, displayName, estimatedSize, creationCallback) {
    // if (dingvm.memory.database[name]) {
    //     return dingvm.memory.database[name]
    // }
    //
    // let obj = {}
    // dingvm.toolsFunc.setProtoArr.call(obj, "version", version)
    // Object.setPrototypeOf(obj, Database_delete.prototype)
    // dingvm.memory.database[name] = obj
    //
    // return obj

    return undefined
};
dingvm.envFunc.window_getComputedStyle = function (element) {
    return element.style
};
dingvm.envFunc.window_innerWidth_get = function () {
    let innerWidth = dingvm.toolsFunc.getProtoArr('innerWidth')
    if (innerWidth === undefined) {
        return dingvm.memory.globalVar.width;
    }

    return innerWidth
};
dingvm.envFunc.window_innerWidth_set = function () {
    dingvm.toolsFunc.setProtoArr('innerWidth')
};
dingvm.envFunc.window_innerHeight_get = function () {
    let innerHeight = dingvm.toolsFunc.getProtoArr('innerHeight')
    if (innerHeight === undefined) {
        return dingvm.memory.globalVar.height;
    }

    return innerHeight
};
dingvm.envFunc.window_innerHeight_set = function () {
    dingvm.toolsFunc.setProtoArr('innerHeight')
};
dingvm.envFunc.window_outerWidth_get = function () {
    let outerWidth = dingvm.toolsFunc.getProtoArr('outerWidth')
    if (outerWidth === undefined) {
        return dingvm.memory.globalVar.width;
    }

    return outerWidth
};
dingvm.envFunc.window_outerWidth_set = function () {
    dingvm.toolsFunc.setProtoArr('outerWidth')
};
dingvm.envFunc.window_outerHeight_get = function () {
    let outerHeight = dingvm.toolsFunc.getProtoArr('outerHeight')
    if (outerHeight === undefined) {
        return dingvm.memory.globalVar.height;
    }

    return outerHeight
};
dingvm.envFunc.window_outerHeight_set = function () {
    dingvm.toolsFunc.setProtoArr('outerHeight')
};
dingvm.envFunc.window_location_get = function () {
    return location
};
dingvm.envFunc.window_styleMedia_get = function () {
    let StyleMedia = function StyleMedia() {

    }
    StyleMedia.prototype = {
        "type": "screen",
        matchMedium() {
        }
    }
    dingvm.toolsFunc.safe_constructor_prototype(StyleMedia, 'StyleMedia')
    let obj = {}
    Object.setPrototypeOf(obj, StyleMedia.prototype)

    return obj
};
dingvm.envFunc.window_crypto_get = function () {
    let obj = {
        subtle: {}
    }
    Object.setPrototypeOf(obj, Crypto.prototype)
    Object.setPrototypeOf(obj.subtle, SubtleCrypto.prototype)

    return obj
};
dingvm.envFunc.window_visualViewport_get = function () {
    let obj = {}
    Object.setPrototypeOf(obj, VisualViewport.prototype)

    return obj
};
dingvm.envFunc.window_external_get = function () {
    let obj = dingvm.toolsFunc.getProtoArr('external')
    if (obj) {
        return obj
    }
    obj = {}
    obj.toString = function () {
        return '[object External]'
    }

    return obj
};
dingvm.envFunc.window_external_set = function () {
    dingvm.toolsFunc.setProtoArr('external')
};
dingvm.envFunc.window_DeviceMotionEvent = function () {
    debugger
};
dingvm.envFunc.window_DeviceOrientationEvent = function () {
    debugger
};
dingvm.envFunc.window_open = function () {
    debugger
};
dingvm.envFunc.window_fetch = function () {
    debugger
};
dingvm.envFunc.window_frames_get = function () {
    return window
};
dingvm.envFunc.window_frames_set = function () {
    debugger
};;
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
;
//! MimeTypeArray_prototype
dingvm.envFunc.MimeTypeArrayProto_namedItem = function MimeTypeArrayProto_namedItem() {
    let name = arguments[0];
    return this[name];
};
dingvm.envFunc.MimeTypeArrayProto_item = function MimeTypeArrayProto_item() {
    let index = arguments[0];
    return this[index];
};
dingvm.envFunc.MimeTypeArrayProto_length_get = function MimeTypeArrayProto_length_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "length");
};
//! PluginArray_prototype
dingvm.envFunc.PluginArrayProto_namedItem = function PluginArrayProto_namedItem() {
    let name = arguments[0];
    return this[name];
};
dingvm.envFunc.PluginArrayProto_item = function PluginArrayProto_item() {
    let index = arguments[0];
    return this[index];
};
dingvm.envFunc.PluginArrayProto_length_get = function PluginArrayProto_length_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "length");
};
dingvm.envFunc.PluginArrayProto_refresh = function PluginArrayProto_refresh() {
    debugger;
};
//! MimeType_prototype
dingvm.envFunc.MimeTypeProto_suffixes_get = function MimeTypeProto_suffixes_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "suffixes");
};
dingvm.envFunc.MimeTypeProto_enabledPlugin_get = function MimeTypeProto_enabledPlugin_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "enabledPlugin");
};
dingvm.envFunc.MimeTypeProto_description_get = function MimeTypeProto_description_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "description");
};
dingvm.envFunc.MimeTypeProto_type_get = function MimeTypeProto_type_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "type");
};
//! Plugin_prototype
dingvm.envFunc.PluginProto_length_get = function PluginProto_length_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "length");
};
dingvm.envFunc.PluginProto_filename_get = function PluginProto_filename_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "filename");
};
dingvm.envFunc.PluginProto_description_get = function PluginProto_description_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "description");
};
dingvm.envFunc.PluginProto_name_get = function PluginProto_name_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "name");
};
dingvm.envFunc.PluginProto_namedItem = function PluginProto_namedItem() {
    let name = arguments[0];
    return this[name];
};
dingvm.envFunc.PluginProto_item = function PluginProto_item() {
    let index = arguments[0];
    return this[index];
};;
dingvm.envFunc.NavigatorProto_plugins_get = function NavigatorProto_plugins_get() {
    return dingvm.memory.globalVar.pluginArray;
};
dingvm.envFunc.NavigatorProto_mimeTypes_get = function NavigatorProto_mimeTypes_get() {
    return dingvm.memory.globalVar.mimeTypeArray;
};
dingvm.envFunc.NavigatorProto_getBattery = function () {
    let battery = {}
    Object.setPrototypeOf(battery, BatteryManager.prototype)
    if (dingvm.config.proxy_navigator_battery) {
        battery = dingvm.toolsFunc.createProxyObj(battery, 'battery')
    }
    return {
        "then": function (callBack) {
            let _callBack = callBack;
            callBack = function () {
                return _callBack(battery);
            }
            if (dingvm.memory.asyncEvent.promise === undefined) {
                dingvm.memory.asyncEvent.promise = [];
            }
            dingvm.memory.asyncEvent.promise.push(callBack);
        }
    };
    // return new Promise(function (resolve, reject) {
    //     let battery = {}
    //     Object.setPrototypeOf(battery, BatteryManager.prototype)
    //     if (dingvm.config.proxy_navigator_battery) {
    //         battery = dingvm.toolsFunc.createProxyObj(battery, 'battery')
    //     }
    //
    //     resolve(battery)
    // })
};
dingvm.envFunc.NavigatorProto_userAgent_get = function () {
    let userAgent = [
        'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.0 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 YaBrowser/22.7.0 Yowser/2.5 Safari/537.36',
        'Mozilla/5.0 (Windows NT 6.3; Win64; rv:106.0) Gecko/20100101 Firefox/101.0',
        'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0',
        'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/97.0.4692.84 Mobile/15E148 Safari/604.1',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 8_0_2) AppleWebKit/570.41 (KHTML, like Gecko) Chrome/54.0.1307 Safari/537.36',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Mobile/15E148 Safari/604.1',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_3_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.41',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML; like Gecko) Mobile/12F70 MicroMessenger/6.1.5 NetType/WIFI',
        'Mozilla/5.0(Linux;Android 8.0;Pixel 4 XL) Gecko/20100101 Firefox/106.1.0',
        'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.1874.1841 Mobile Safari/537.36',
        'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.7779.1275 Mobile Safari/537.36',
        'Mozilla/5.0 (Linux; Android 7.1.2; Pixel Build/NHG47L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.82 Mobile Safari/537.36',
        'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.9682.1540 Mobile Safari/537.36',
        'Mozilla/5.0 (Linux; Android 9; HUAWEI CLT-AL00 Build/MVT3.128574.70; wv) Version/4.0 Chrome/100.0.4896.58 Quark/6.2.9.251 Mobile Safari/537.36',
        'Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/532.0 (KHTML, like Gecko) Chrome/4.0.211.0 Safari/532.0',
    ]
    return userAgent[_.random(userAgent.length, false)]
};
dingvm.envFunc.NavigatorProto_webkitPersistentStorage_get = function () {
    let obj = {}
    Object.setPrototypeOf(obj, DeprecatedStorageQuota)

    return obj
};
dingvm.envFunc.NavigatorProto_languages_get = function () {
    return ['zh-CN', 'zh']
};
dingvm.envFunc.NavigatorProto_vendor_get = function () {
    return "Google Inc."
};
dingvm.envFunc.NavigatorProto_appVersion_get = function () {
    return window.navigator.userAgent.split('/').slice(1).join('/')
};
dingvm.envFunc.NavigatorProto_appName_get = function () {
    return "Netscape"
};
dingvm.envFunc.NavigatorProto_appCodeName_get = function () {
    return "Mozilla"
};
dingvm.envFunc.NavigatorProto_platform_get = function () {
    return "Win32"
};
dingvm.envFunc.NavigatorProto_product_get = function () {
    return "Gecko"
};
dingvm.envFunc.NavigatorProto_connection_get = function () {
    let connection = {}
    Object.setPrototypeOf(connection, NetworkInformation.prototype)

    return connection
};
dingvm.envFunc.NavigatorProto_language_get = function () {
    return "zh-CN"
};
dingvm.envFunc.NavigatorProto_cookieEnabled_get = function () {
    return true
};
dingvm.envFunc.NavigatorProto_doNotTrack_get = function () {
    return 1
};
dingvm.envFunc.NavigatorProto_hardwareConcurrency_get = function () {
    let hard = [8, 12, 16, 24];
    return hard[_.random(hard.length, false)]
};
dingvm.envFunc.NavigatorProto_maxTouchPoints_get = function () {
    return 0
};
dingvm.envFunc.NavigatorProto_onLine_get = function () {
    return true
};
dingvm.envFunc.NavigatorProto_pdfViewerEnabled_get = function () {
    return true
};
dingvm.envFunc.NavigatorProto_productSub_get = function () {
    return "20030107"
};
dingvm.envFunc.NavigatorProto_vendorSub_get = function () {
    return ""
};
dingvm.envFunc.NavigatorProto_webdriver_get = function () {
    return false
};
dingvm.envFunc.NavigatorProto_deviceMemory_get = function () {
    // return 32
    return dingvm.memory.globalVar.navigator.deviceMemory
};
dingvm.envFunc.NavigatorProto_cpuClass_get = function () {
    // return 'x86'
    return undefined
};
dingvm.envFunc.NavigatorProto_webkitTemporaryStorage_get = function () {
    let obj = {}
    Object.setPrototypeOf(obj, DeprecatedStorageQuota)

    return obj
};;
dingvm.envFunc.BatteryManagerProto_charging_get = function () {
    return true
};
dingvm.envFunc.BatteryManagerProto_chargingTime_get = function () {
    return Infinity
};
dingvm.envFunc.BatteryManagerProto_level_get = function () {
    return 0.92
};;
dingvm.envFunc.document_location_get = function () {
    return location
};;
dingvm.envFunc.DocumentProto_getElementById = function DocumentProto_getElementById() {
    // debugger
    let id = arguments[0];
    const temp = $(`#${id}`);

    if (temp[0] === undefined) {
        return null
    }

    let result = null;
    if (temp !== undefined) {
        result = {}
        switch (temp[0].name) {
            case "div":
                Object.setPrototypeOf(result, HTMLDivElement.prototype)
                break
            case 'input':
                Object.setPrototypeOf(result, HTMLInputElement.prototype)
                break
            case 'span':
                Object.setPrototypeOf(result, HTMLSpanElement.prototype)
                break
            case 'iframe':
                Object.setPrototypeOf(result, HTMLIFrameElement.prototype)
                break
            default:
                console.log(`DocumentProto_getElementById_${temp[0].name}未实现`);
                debugger
        }
        Object.defineProperty(result, 'jquery', {
            configurable: true,
            enumerable: false,
            writable: true,
            value: temp
        })
    }
    return result
};
dingvm.envFunc.DocumentProto_createElement = function createElement(tagName) {
    // debugger;
    let result = {}
    switch (tagName) {
        case 'div':
            result.jquery = get_document('<div></div>')('div')
            Object.setPrototypeOf(result, HTMLDivElement.prototype)
            break
        case 'span':
            result.jquery = get_document('<span></span>')('span')
            Object.setPrototypeOf(result, HTMLSpanElement.prototype)
            break
        case 'a':
            // result.jquery = $.parseHTML('<a></a>')  todo 没有cheerioAPI方法
            result.jquery = get_document('<a></a>')('a')
            Object.setPrototypeOf(result, HTMLAnchorElement.prototype)
            break
        case 'canvas':
            result.jquery = get_document('<canvas></canvas>')('canvas')
            result.jquery.canvas = createCanvas(300, 150)
            Object.setPrototypeOf(result, HTMLCanvasElement.prototype)
            break
        case 'img':
            result.jquery = get_document('<img>')('img')
            Object.setPrototypeOf(result, HTMLImageElement.prototype)
            break
        case 'body':
            result.jquery = get_document('<body></body>')('body')
            Object.setPrototypeOf(result, HTMLBodyElement.prototype)
            break
        case 'input':
            result.jquery = get_document('<input>')('input')
            Object.setPrototypeOf(result, HTMLInputElement.prototype)
            break
        case "form":
            result.jquery = get_document('<form></form>')('form')
            Object.setPrototypeOf(result, HTMLFormElement.prototype)
            break
        case 'audio':
            result.jquery = get_document('<audio></audio>')('audio')
            Object.setPrototypeOf(result, HTMLAudioElement.prototype)
            break
        case 'video':
            result.jquery = get_document('<video></video>')('video')
            Object.setPrototypeOf(result, HTMLVideoElement.prototype)
            break
        case 'iframe':
            result.jquery = get_document('<iframe></iframe>')('iframe')
            Object.setPrototypeOf(result, HTMLIFrameElement.prototype)
            break
        default:
            console.log(`Document_createElement_${tagName}未实现`);
            debugger;
    }

    if (dingvm.config.proxy_tag) {
        let name = `DocumentProto_createElement_${tagName}`
        result = dingvm.toolsFunc.createProxyObj(result, name)
    }

    return result
};
dingvm.envFunc.DocumentProto_body_get = function DocumentProto_body_get() {
    // debugger
    let result = {}
    const temp = $('body')
    Object.defineProperty(result, 'jquery', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: temp
    })
    Object.setPrototypeOf(result, HTMLBodyElement.prototype)

    return result
};
dingvm.envFunc.DocumentProto_getElementsByTagName = function DocumentProto_getElementsByTagName(tagName) {
    // debugger
    let temp = $(tagName)
    let result = []
    for (let i = 0; i < temp.length; i++) {
        let temp2 = {}
        switch (tagName) {
            case 'div':
                Object.setPrototypeOf(temp2, HTMLDivElement.prototype)
                break
            case 'input':
                Object.setPrototypeOf(temp2, HTMLInputElement.prototype)
                break
            case 'h2':
                Object.setPrototypeOf(temp2, HTMLHeadingElement.prototype)
                break
            case 'iframe':
                Object.setPrototypeOf(temp2, HTMLIFrameElement.prototype)
                break
            case 'span':
                Object.setPrototypeOf(temp2, HTMLSpanElement.prototype)
                break
            case 'meta':
                Object.setPrototypeOf(temp2, HTMLMetaElement.prototype)
                break
            case 'i':
                Object.setPrototypeOf(temp2, HTMLIFrameElement.prototype)
                break
            case 'base':
                Object.setPrototypeOf(temp2, HTMLBaseElement.prototype)
                break
            case 'script':
                Object.setPrototypeOf(temp2, HTMLScriptElement.prototype)
                break
            case 'body':
                Object.setPrototypeOf(temp2, HTMLBodyElement.prototype)
                break
            default:
                console.log(`DocumentProto_getElementsByTagName_${tagName}未实现`);
                debugger;
        }
        Object.defineProperty(temp2, 'jquery', {
            configurable: true,
            enumerable: false,
            writable: true,
            value: $(temp[i])
        })
        result.push(temp2)
    }
    Object.setPrototypeOf(result, HTMLCollection.prototype)
    return result
};
dingvm.envFunc.DocumentProto_write = function DocumentProto_write(html_str) {
    // debugger
    let script_position = document.script_position
    let parsed_html = $.parseHTML(html_str)
    if (script_position) {
        // script_position.after(html_str)
        script_position.after(parsed_html)
    } else {
        $('body').append(parsed_html)
    }
};
dingvm.envFunc.DocumentProto_cookie_get = function DocumentProto_cookie_get() {
    let jsonCookie = dingvm.memory.globalVar.jsonCookie;
    let tempCookie = "";
    for (const key in jsonCookie) {
        if (key === "") {
            tempCookie += `${jsonCookie[key]}; `;
        } else {
            tempCookie += `${key}=${jsonCookie[key]}; `;
        }
    }
    return tempCookie.slice(0, -2);
};
dingvm.envFunc.DocumentProto_cookie_set = function DocumentProto_cookie_set() {
    console.log('cookie: ', arguments[0])

    let cookieValue = arguments[0];
    if (cookieValue === "") {
        return dingvm.memory.globalVar.jsonCookie = ""
    }
    let index = cookieValue.indexOf(";");
    if (index !== -1) {
        cookieValue = cookieValue.substring(0, index);
    }
    if (cookieValue.indexOf("=") === -1) {
        dingvm.memory.globalVar.jsonCookie[""] = cookieValue.trim();
    } else {
        let item = cookieValue.split("=");
        let k = item[0].trim();
        dingvm.memory.globalVar.jsonCookie[k] = item[1].trim();
    }
};
dingvm.envFunc.DocumentProto_all_get = function () {
    let all = dingvm.memory.globalVar.all;
    Object.setPrototypeOf(all, HTMLAllCollection.prototype);
    return all;
};
dingvm.envFunc.DocumentProto_scripts_get = function () {
    let scripts = dingvm.memory.globalVar.scripts;
    Object.setPrototypeOf(scripts, HTMLCollection.prototype);
    return scripts;
};
dingvm.envFunc.DocumentProto_characterSet_get = function () {
    return 'UTF-8'
};
dingvm.envFunc.DocumentProto_documentElement_get = function () {
    const temp = $('html')

    if (temp[0] === undefined) {
        return null
    }

    let result = {}
    Object.setPrototypeOf(result, HTMLHtmlElement.prototype)
    Object.defineProperty(result, 'jquery', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: temp
    })

    return result
};
dingvm.envFunc.DocumentProto_charset_get = function () {
    return 'UTF-8'
};
dingvm.envFunc.DocumentProto_compatMode_get = function () {
    return "CSS1Compat"
};
dingvm.envFunc.DocumentProto_createEvent = function (type) {
    let event = {}
    if (type === 'TouchEvent') {
        dingvm.toolsFunc.throwError('DOMException', "Failed to execute 'createEvent' on 'Document': The provided event type ('TouchEvent') is invalid.")
    } else {
        Object.setPrototypeOf(event, Event.prototype)
    }

    return event
};
dingvm.envFunc.DocumentProto_querySelector = function (selector) {
    const temp = $(selector)

    if (temp[0] === undefined) {
        return null
    }

    let result = {}
    switch (temp[0].name) {
        case "div":
            Object.setPrototypeOf(result, HTMLDivElement.prototype)
            break
        case 'input':
            Object.setPrototypeOf(result, HTMLInputElement.prototype)
            break
        case 'span':
            Object.setPrototypeOf(result, HTMLSpanElement.prototype)
            break
        case 'iframe':
            Object.setPrototypeOf(result, HTMLIFrameElement.prototype)
            break
        case 'script':
            Object.setPrototypeOf(result, HTMLScriptElement.prototype)
            break
        default:
            console.log(`DocumentProto_querySelector_${temp[0].name}未实现`);
            debugger
    }
    Object.defineProperty(result, 'jquery', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: temp
    })

    return result
};
dingvm.envFunc.DocumentProto_referrer_get = function () {
    return document.href
};
dingvm.envFunc.DocumentProto_visibilityState_get = function () {
    return 'visible'
};
dingvm.envFunc.DocumentProto_createExpression = function () {
    let obj = {}
    Object.setPrototypeOf(obj, XPathExpression.prototype)

    return obj
};
dingvm.envFunc.DocumentProto_hidden_get = function () {
    return false
};
dingvm.envFunc.DocumentProto_hasFocus = function () {
    return false
};
dingvm.envFunc.DocumentProto_title_get = function () {
    return $('title').text()
};
dingvm.envFunc.DocumentProto_head_get = function () {
    // debugger
    let result = {}
    const temp = $('head')
    Object.defineProperty(result, 'jquery', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: temp
    })
    Object.setPrototypeOf(result, HTMLHeadElement.prototype)

    return result
};
dingvm.envFunc.DocumentProto_domain_get = function () {
    return location.host
};
dingvm.envFunc.DocumentProto_domain_set = function () {
    debugger
};
dingvm.envFunc.DocumentProto_readyState_get = function () {
    // TODO: 其他阶段可能的值 "loading"(文档仍在加载中)、"interactive"(文档已经完成解析，但仍在加载子资源)
    // 整个文档和其所有子资源都已完成加载
    return dingvm.memory.globalVar.document.readyState
};
dingvm.envFunc.DocumentProto_getElementsByName = function () {
    let name = arguments[0];
    const temp = $(`[name=${name}]`);

    if (temp[0] === undefined) {
        return null
    }

    let result = []
    for (let i = 0; i < temp.length; i++) {
        let temp2 = {}
        switch (temp[i].name) {
            case "div":
                Object.setPrototypeOf(temp2, HTMLDivElement.prototype)
                break
            case 'input':
                Object.setPrototypeOf(temp2, HTMLInputElement.prototype)
                break
            case 'span':
                Object.setPrototypeOf(temp2, HTMLSpanElement.prototype)
                break
            case 'iframe':
                Object.setPrototypeOf(temp2, HTMLIFrameElement.prototype)
                break
            default:
                console.log(`DocumentProto_getElementsByName_${temp[i].name}未实现`);
                debugger
        }
        Object.defineProperty(temp2, 'jquery', {
            configurable: true,
            enumerable: false,
            writable: true,
            value: temp
        })
        result.push(temp2)
    }
    Object.setPrototypeOf(result, NodeList.prototype)

    return result
};
;
dingvm.envFunc.ElementProto_id_get = function ElementProto_id_get() {
    return this.jquery.attr('id')
};
dingvm.envFunc.ElementProto_id_set = function ElementProto_id_set(value) {
    this.jquery.attr('id', value)
};
dingvm.envFunc.ElementProto_innerHTML_get = function ElementProto_innerHTML_get() {
    return this.jquery.html()
};
dingvm.envFunc.ElementProto_innerHTML_set = function ElementProto_innerHTML_set(value) {
    this.jquery.empty()
    let match = value.match(/<\/([a-zA-Z]+)>/)
    if (match && match.length === 2) {
        let name = value.match(/<\/([a-zA-Z]+)>/)[1]
        value = get_document(value)(name)
    }
    this.jquery.append(value)
};
dingvm.envFunc.ElementProto_outerHTML_get = function ElementProto_outerHTML_get() {
    return this.jquery.toString()
};
dingvm.envFunc.ElementProto_append = function ElementProto_append(value) {
    // debugger;
    for (let i = 0; i < arguments.length; i++) {
        let node = arguments[i]
        if (typeof node === "string") {
            this.jquery.append(node)
        } else {
            this.jquery.append(node.jquery)
        }
    }
};
dingvm.envFunc.ElementProto_getAttribute = function ElementProto_getAttribute(name) {
    // debugger
    return this.jquery.attr(name) === undefined ? null : this.jquery.attr(name)
};
dingvm.envFunc.ElementProto_setAttribute = function ElementProto_setAttribute(name, value) {
    this.jquery.attr(name, value);
};
dingvm.envFunc.ElementProto_children_get = function ElementProto_children_get() {
    // debugger
    let children = this.jquery.children()
    let result = []
    for (let i = 0; i < children.length; i++) {
        let temp = $(children[i])
        let tagName = temp[0].name
        let temp2 = {}
        switch (tagName) {
            case 'div':
                Object.setPrototypeOf(temp2, HTMLDivElement.prototype)
                break
            case 'input':
                Object.setPrototypeOf(temp2, HTMLInputElement.prototype)
                break
            case 'h2':
                Object.setPrototypeOf(temp2, HTMLHeadingElement.prototype)
                break
            case 'iframe':
                Object.setPrototypeOf(temp2, HTMLIFrameElement.prototype)
                break
            case 'span':
                Object.setPrototypeOf(temp2, HTMLSpanElement.prototype)
                break
            case 'meta':
                Object.setPrototypeOf(temp2, HTMLMetaElement.prototype)
                break
            default:
                console.log(`DocumentProto_getElementsByTagName_${tagName}未实现`);
                debugger;
        }
        temp2.jquery = temp
        result.push(temp2)
    }
    Object.setPrototypeOf(result, HTMLCollection.prototype)
    return result
};
dingvm.envFunc.ElementProto_getElementsByTagName = function (tagName) {
    // debugger
    let temp = $(tagName)
    let result = []
    for (let i = 0; i < temp.length; i++) {
        let temp2 = {}
        switch (tagName) {
            case 'div':
                Object.setPrototypeOf(temp2, HTMLDivElement.prototype)
                break
            case 'input':
                Object.setPrototypeOf(temp2, HTMLInputElement.prototype)
                break
            case 'h2':
                Object.setPrototypeOf(temp2, HTMLHeadingElement.prototype)
                break
            case 'iframe':
                Object.setPrototypeOf(temp2, HTMLIFrameElement.prototype)
                break
            case 'span':
                Object.setPrototypeOf(temp2, HTMLSpanElement.prototype)
                break
            case 'meta':
                Object.setPrototypeOf(temp2, HTMLMetaElement.prototype)
                break
            case 'i':
                Object.setPrototypeOf(temp2, HTMLIFrameElement.prototype)
                break
            default:
                console.log(`DocumentProto_getElementsByTagName_${tagName}未实现`);
                debugger;
        }
        temp2.jquery = $(temp[i])
        result.push(temp2)
    }
    Object.setPrototypeOf(result, HTMLCollection.prototype)
    return result
};
dingvm.envFunc.ElementProto_clientWidth_get = function () {
    return dingvm.memory.globalVar.width
};
dingvm.envFunc.ElementProto_clientHeight_get = function () {
    return dingvm.memory.globalVar.height
};
dingvm.envFunc.ElementProto_querySelector = function () {
    const temp = $(selector)

    if (temp[0] === undefined) {
        return null
    }

    let result = {}
    switch (temp[0].name) {
        case "div":
            Object.setPrototypeOf(result, HTMLDivElement.prototype)
            break
        case 'input':
            Object.setPrototypeOf(result, HTMLInputElement.prototype)
            break
        case 'span':
            Object.setPrototypeOf(result, HTMLSpanElement.prototype)
            break
        case 'iframe':
            Object.setPrototypeOf(result, HTMLIFrameElement.prototype)
            break
        default:
            console.log(`ElementProto_querySelector_${temp[0].name}未实现`);
            debugger
    }
    Object.defineProperty(result, 'jquery', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: temp
    })

    return result
};
dingvm.envFunc.ElementProto_tagName_get = function () {
    return this.jquery[0].name.toUpperCase()
};
dingvm.envFunc.ElementProto_getAttributeNames = function () {
    return []
};;
dingvm.envFunc.NodeProto_appendChild = function NodeProto_appendChild(node) {
    // debugger;
    if (typeof node === 'string') {
        throw TypeError("Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'")
    }

    this.jquery.append(node.jquery)

    return node
};
dingvm.envFunc.NodeProto_nextSibling_get = function NodeProto_nextSibling_get() {
    // debugger
    let result = {}
    let nextSibling = this.jquery[0].nextSibling
    result.jquery = $(nextSibling)
    if (!nextSibling)
        return null

    switch (result.jquery[0].type.toLocaleLowerCase()) {
        case 'tag':
            switch (result.jquery[0].name.toLocaleLowerCase()) {
                case 'input':
                    Object.setPrototypeOf(result, HTMLInputElement.prototype)
                    break
                case 'div':
                    Object.setPrototypeOf(result, HTMLDivElement.prototype)
                    break
                case 'span':
                    Object.setPrototypeOf(result, HTMLSpanElement.prototype)
                    break
                default:
                    console.log(`NodeProto_nextSibling_${result.jquery[0].name.toLocaleLowerCase()}未实现`);
                    debugger
            }
            break
        case 'script':
            switch (result.jquery[0].name.toLocaleLowerCase()) {
                case 'script':
                    Object.setPrototypeOf(result, HTMLScriptElement.prototype)
                    break
                default:
                    debugger
            }
            break
        case 'text':
            Object.setPrototypeOf(result, Text.prototype)
            break
        default:
            debugger;
    }

    return result
};
dingvm.envFunc.NodeProto_nodeName_get = function NodeProto_nodeName_get() {
    if (this === document)
        return '#document'
    switch (this.jquery[0].type) {
        case 'tag':
            return this.jquery[0].name.toLocaleUpperCase()
        case 'script':
            return this.jquery[0].name.toLocaleUpperCase()
        case 'text':
            return '#text'
        default:
            debugger
    }
};
dingvm.envFunc.NodeProto_nodeType_get = function NodeProto_nodeType_get() {
    if (this === document)
        return 9
    switch (this.jquery[0].type) {
        case 'tag':
            return 1
        case 'script':
            return 1
        case 'text':
            return 3
        default:
            debugger
    }
};
dingvm.envFunc.NodeProto_parentNode_get = function NodeProto_parentNode_get() {
    // debugger
    let temp = this.jquery.parent()
    let result = {}
    switch (temp[0].name) {
        case 'input':
            Object.setPrototypeOf(result, HTMLInputElement.prototype)
            break
        case 'div':
            Object.setPrototypeOf(result, HTMLDivElement.prototype)
            break
        case 'span':
            Object.setPrototypeOf(result, HTMLSpanElement.prototype)
            break
        case 'head':
            Object.setPrototypeOf(result, HTMLHeadElement.prototype)
            break
        case 'meta':
            Object.setPrototypeOf(result, HTMLMetaElement)
            break
        default:
            console.log(`NodeProto_parentNode_${temp[0].name}未实现`);
            debugger
    }
    result.jquery = temp

    return result
};
dingvm.envFunc.NodeProto_removeChild = function NodeProto_removeChild(node) {
    // debugger
    let oldNode = node
    node.jquery.remove()
    return oldNode
};
dingvm.envFunc.NodeProto_parentElement_get = function () {
    // debugger

    if (this.nodeType === 9) {
        return null
    }

    let temp = this.jquery.parent()
    let result = {}
    switch (temp[0].name) {
        case 'input':
            Object.setPrototypeOf(result, HTMLInputElement.prototype)
            break
        case 'div':
            Object.setPrototypeOf(result, HTMLDivElement.prototype)
            break
        case 'span':
            Object.setPrototypeOf(result, HTMLSpanElement.prototype)
            break
        case 'head':
            Object.setPrototypeOf(result, HTMLHeadElement.prototype)
            break
        case 'meta':
            Object.setPrototypeOf(result, HTMLMetaElement.prototype)
            break
        case 'body':
            Object.setPrototypeOf(result, HTMLBodyElement.prototype)
            break
        default:
            console.log(`NodeProto_parentNode_${temp[0].name}未实现`);
            debugger
    }
    result.jquery = temp

    return result
};
dingvm.envFunc.NodeProto_firstChild_get = function () {
    debugger
    let firstChild_ = this.jquery[0].firstChild
    if (!firstChild_) {
        return null
    }
    let firstChild = $(firstChild_)
    let result = {}
    result.jquery = firstChild

    switch (result.jquery[0].type.toLocaleLowerCase()) {
        case 'tag':
            switch (result.jquery[0].name.toLocaleLowerCase()) {
                case 'input':
                    Object.setPrototypeOf(result, HTMLInputElement.prototype)
                    break
                case 'div':
                    Object.setPrototypeOf(result, HTMLDivElement.prototype)
                    break
                case 'span':
                    Object.setPrototypeOf(result, HTMLSpanElement.prototype)
                    break
                default:
                    console.log(`NodeProto_firstChild_get_${result.jquery[0].name.toLocaleLowerCase()}未实现`);
                    debugger
            }
            break
        case 'script':
            switch (result.jquery[0].name.toLocaleLowerCase()) {
                case 'script':
                    Object.setPrototypeOf(result, HTMLScriptElement.prototype)
                    break
                default:
                    debugger
            }
            break
        case 'text':
            Object.setPrototypeOf(result, Text.prototype)
            break
        default:
            debugger;
    }

    return result
};
dingvm.envFunc.NodeProto_childNodes_get = function () {
    // debugger
    let children = this.jquery.children()
    let result = []
    for (let i = 0; i < children.length; i++) {
        let temp = $(children[i])
        let tagName = temp[0].name
        let temp2 = {}
        switch (tagName) {
            case 'div':
                Object.setPrototypeOf(temp2, HTMLDivElement.prototype)
                break
            case 'input':
                Object.setPrototypeOf(temp2, HTMLInputElement.prototype)
                break
            case 'h2':
                Object.setPrototypeOf(temp2, HTMLHeadingElement.prototype)
                break
            case 'iframe':
                Object.setPrototypeOf(temp2, HTMLIFrameElement.prototype)
                break
            case 'span':
                Object.setPrototypeOf(temp2, HTMLSpanElement.prototype)
                break
            case 'meta':
                Object.setPrototypeOf(temp2, HTMLMetaElement.prototype)
                break
            default:
                console.log(`DocumentProto_getElementsByTagName_${tagName}未实现`);
                debugger;
        }
        temp2.jquery = temp
        result.push(temp2)
    }
    Object.setPrototypeOf(result, NodeList.prototype)
    return result
};
dingvm.envFunc.NodeProto_textContent_get = function () {
    return this.jquery.text()
};
dingvm.envFunc.NodeProto_textContent_set = function (text) {
    this.jquery.text(text)
};;
dingvm.envFunc.EventProto_type_get = function EventProto_type_get() {
    return this.myType;
};
dingvm.envFunc.EventProto_type_set = function EventProto_type_set(value) {
    this.myType = value;
};
dingvm.envFunc.EventProto_target_get = function EventProto_target_get() {
    return this.myTarget;
};
dingvm.envFunc.EventProto_target_set = function EventProto_target_set(value) {
    this.myTarget = value;
};
dingvm.envFunc.EventProto_timeStamp_get = function Event_timeStamp_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "timeStamp");
};;
dingvm.envFunc.CSSStyleDeclarationProto_cssText_get = function () {
    let cssText = this.myThis.jquery.attr('style')
    if (cssText) {
        return cssText
    }

    return ''
};
dingvm.envFunc.CSSStyleDeclarationProto_cssText_set = function (value) {
    // return dingvm.toolsFunc.setProtoArr.call(this, 'cssText', value)
    this.myThis.jquery.attr('style', value);
    dingvm.toolsFunc.deleteProtoArr.call(this, 'style')
};
dingvm.envFunc.CSSStyleDeclarationProto_length_get = function () {
    let index = 0
    for (let i = 0; i < 999; i++) {
        let attr_value = this.item(i)
        if (attr_value === "") {
            index += i
            break
        }
    }

    return index
};
dingvm.envFunc.CSSStyleDeclarationProto_parentRule_get = function () {
    return null
};
dingvm.envFunc.CSSStyleDeclarationProto_cssFloat_get = function () {
    let cssFloat = dingvm.toolsFunc.getProtoArr.call(this, "cssFloat")
    if (cssFloat) {
        return cssFloat
    }

    return 'none'
};
dingvm.envFunc.CSSStyleDeclarationProto_cssFloat_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'cssFloat', value)
};
dingvm.envFunc.CSSStyleDeclarationProto_getPropertyPriority = function () {
    console.log("CSSStyleDeclarationProto_getPropertyPriority", arguments)
};
dingvm.envFunc.CSSStyleDeclarationProto_getPropertyValue = function (key) {
    // debugger
    let value = this.myThis.jquery.css(key)
    if (value) {
        return value
    }

    return ""
};
dingvm.envFunc.CSSStyleDeclarationProto_item = function (index) {
    // debugger
    let style_ = this
    let value = style_[index]
    if (value === undefined) {
        return ""
    } else if (value === undefined && typeof index === 'string') {
        return style_[0] === undefined ? "" : style_[0]
    }

    return value
};
dingvm.envFunc.CSSStyleDeclarationProto_removeProperty = function (key) {
    // debugger
    let style_text = this.myThis.jquery.attr('style').slice(0, -1)
    let css_list = style_text.split(';')
    for (let i = 0; i < css_list.length; i++) {
        let if_include = css_list[i].includes(key)
        if (if_include) {
            let index_css = key.indexOf('-')
            if (index_css !== -1) {
                key = key.substring(0, index_css) + key[index_css + 1].toUpperCase() + key.substring(index_css + 2)
            }
            css_list.splice(i, 1)
            break
        }
    }
    style_text = css_list.join(';') + ';'
    this.myThis.jquery.attr('style', style_text)
    let style_ = dingvm.toolsFunc.getProtoArr.call(this.myThis, 'style')
    // style_[key] = ""
    dingvm.toolsFunc.defineProperty(style_, key, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: ''
    });
    if (key === 'padding') {
        style_["paddingTop"] = ""
        style_["paddingRight"] = ""
        style_["paddingBottom"] = ""
        style_["paddingLeft"] = ""
    } else if (key === 'margin') {

    }

    let length = this.length
    let temp_attr = []
    for (let i = 0; i < length; i++) {
        let css_value = style_[i]
        delete style_[i]
        if (css_value !== key) {
            temp_attr.push(css_value)
        }
    }
    for (let i = 0; i < temp_attr.length; i++) {
        dingvm.toolsFunc.defineProperty(style_, i, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: temp_attr[i]
        });
    }
};
dingvm.envFunc.CSSStyleDeclarationProto_setProperty = function (key, value) {
    // debugger
    this.myThis.jquery.css(key, value)
    let style_ = dingvm.toolsFunc.getProtoArr.call(this.myThis, 'style')
    let index_css = key.indexOf('-')
    if (index_css !== -1) {
        key = key.substring(0, index_css) + key[index_css + 1].toUpperCase() + key.substring(index_css + 2)
    }
    style_[key] = value
};
;
dingvm.envFunc.HTMLElementProto_innerText_get = function HTMLElementProto_innerText_get() {
    return this.jquery.text()
};
dingvm.envFunc.HTMLElementProto_innerText_set = function HTMLElementProto_innerText_set(value) {
    this.jquery.text(value);
};
dingvm.envFunc.HTMLElementProto_style_get = function HTMLElementProto_style_get() {
    // debugger
    let style_ = dingvm.toolsFunc.get_protoOwnAttr.call(this, "style")
    if (style_ !== undefined) {
        return style_
    } else {
        style_ = Object.assign(Object.create(CSSStyleDeclaration.prototype), style)
        style_.myThis = this
        let styles = this.jquery.css()
        let index = style_.length
        for (let key in styles) {
            //* hex16ToRgb
            if (key.includes('color') && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(styles[key])) {
                styles[key] = dingvm.toolsFunc.hexToRgb(styles[key])
            }

            let key_old = key
            let index_css = key.indexOf('-')
            if (index_css !== -1) {
                key = key.substring(0, index_css) + key[index_css + 1].toUpperCase() + key.substring(index_css + 2)
            }
            style_[key] = styles[key_old]
            if (key === "padding") {
                style_[index++] = "padding-top"
                style_[index++] = "padding-right"
                style_[index++] = "padding-bottom"
                style_[index++] = "padding-left"

                style_["paddingTop"] = styles[key]
                style_["paddingRight"] = styles[key]
                style_["paddingBottom"] = styles[key]
                style_["paddingLeft"] = styles[key]
            } else if (key === "margin") {
                //todo 待补
            } else {
                style_[index++] = key
            }
        }
    }

    //* 监控style属性
    if (dingvm.config.proxy_tag_style) {
        style_ = dingvm.toolsFunc.createProxyObj(style_, 'style')
    }
    //* 设置cssText
    style_ = dingvm.toolsFunc.proxy_setStyle(style_)
    dingvm.toolsFunc.setProtoArr.call(this, "style", style_)

    return style_
};
dingvm.envFunc.HTMLElementProto_style_set = function HTMLElementProto_style_set(value) {
    // let css = value.split(';')
    // let style_ = Object.assign(Object.create(CSSStyleDeclaration.prototype), style)
    // style_.jquery = this.jquery
    //
    // if (dingvm.config.proxy_tag_style) {
    //     style_ = dingvm.toolsFunc.createProxyObj(style_, 'style')
    // }
    //
    // for (let i = 0; i < css.length; i++) {
    //     let css_key = css[i].split(':')[0].trim()
    //     let index = css_key.indexOf('-')
    //     if (index !== -1) {
    //         css_key = css_key.substring(0, index) + css_key[index + 1].toUpperCase() + css_key.substring(index + 2)
    //     }
    //     style[css_key] = css[i].split(':')[1].trim()
    // }
    this.jquery.attr('style', value)
    dingvm.toolsFunc.deleteProtoArr.call(this, 'style')
    // dingvm.toolsFunc.setProtoArr.call(this, 'style', style_)
};
dingvm.envFunc.HTMLElementProto_offsetWidth_get = function HTMLElementProto_offsetWidth_get() {
    let fontFamily = this.style.fontFamily

    if (['monospace', 'sans-serif', 'serif'].includes(fontFamily)) {
        return 111
    }

    let fontFamily_ = fontFamily.split(',')
    fontFamily = fontFamily_[0].slice(1, -1)
    if (dingvm.memory.globalVar.fontList.includes(fontFamily)) {
        return 666
    } else {
        return 111
    }
};
dingvm.envFunc.HTMLElementProto_offsetWidth_set = function HTMLElementProto_offsetWidth_set(value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'offsetWidth', value)
};
dingvm.envFunc.HTMLElementProto_offsetHeight_get = function HTMLElementProto_offsetHeight_get() {
    let fontFamily = this.style.fontFamily

    if (['monospace', 'sans-serif', 'serif'].includes(fontFamily)) {
        return 222
    }

    let fontFamily_ = fontFamily.split(',')
    fontFamily = fontFamily_[0].slice(1, -1)
    if (dingvm.memory.globalVar.fontList.includes(fontFamily)) {
        return _.random(50, 180, false)
    } else {
        return 222
    }
};
dingvm.envFunc.HTMLElementProto_offsetHeight_set = function HTMLElementProto_offsetHeight_set(value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'offsetHeight', value)
};
dingvm.envFunc.HTMLElementProto_accessKey_get = function () {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'accessKey')
};
dingvm.envFunc.HTMLElementProto_accessKey_get = function (value) {
    this.jquery.attr('accessKey', value)
};
dingvm.envFunc.HTMLElementProto_onload_get = function () {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'onload')
};
dingvm.envFunc.HTMLElementProto_onload_set = function (value) {
    this.jquery.attr('onload', value)
};
;
dingvm.envFunc.HTMLDivElementProto_align_get = function HTMLDivElementProto_align_get() {
    let if_ = dingvm.toolsFunc.get_protoOwnAttr.call(this, 'align')
    if (if_) {
        return if_
    } else {
        return ""
    }
};
dingvm.envFunc.HTMLDivElementProto_align_set = function HTMLDivElementProto_align_set() {
    let value = arguments[0];
    return dingvm.toolsFunc.setProtoArr.call(this, "align", value);
};;
!function () {

    dingvm.toolsFunc.printLog = function printLog(logList) {
        let log = "";
        if (typeof logList === "string") {
            log += logList;
        } else {
            for (let i = 0; i < logList.length; i++) {
                if (logList[i] instanceof Object) {
                    if (typeof logList[i] === "function") {
                        log += logList[i].toString() + " ";
                    } else if (typeof logList[i] === "object") {
                        try {
                            log += JSON.stringify(logList[i]);
                        } catch (e) {
                            log += dingvm.toolsFunc.getType(logList[i]) + " ";
                        }
                    } else {
                        log += dingvm.toolsFunc.getType(logList[i]) + " ";
                    }
                } else if (typeof logList[i] === "symbol") {
                    log += logList[i].toString() + " ";
                } else {
                    log += logList[i] + " ";
                }
            }
        }
        log += "\r\n";
        if (dingvm.config.print_file) {
            fs.appendFileSync(`./webs/${_name_}/log.txt`, log);
        }
    };

}();;
// Event对象
Event = function Event(type) {
    if (arguments.length === 0)
        plugin.throwError(TypeError, "Failed to construct 'Event': 1 argument required, but only 0 present.");
    this.type = type;

    Object.defineProperty(this, 'isTrusted', {
        enumerable: true,
        configurable: false,
        get: function () {
            return true;
        },
        set: undefined
    })
};
dingvm.toolsFunc.safe_constructor_prototype(Event, "Event");
dingvm.toolsFunc.defineProperty(Event, "NONE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(Event, "CAPTURING_PHASE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(Event, "AT_TARGET", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(Event, "BUBBLING_PHASE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3
});
dingvm.toolsFunc.defineProperty(Event.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "type_get", arguments)
    },
    set: function () {
        dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "type_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "target", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "target_get", arguments)
    },
    set: function () {
        dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "target_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "currentTarget", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "currentTarget_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "eventPhase", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "eventPhase_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "bubbles", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "bubbles_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "cancelable", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "cancelable_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "defaultPrevented", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "defaultPrevented_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "composed", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "composed_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "timeStamp", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "timeStamp_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "srcElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "srcElement_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Event.prototype, "returnValue", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "returnValue_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "returnValue_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "cancelBubble", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "cancelBubble_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "cancelBubble_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "NONE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(Event.prototype, "CAPTURING_PHASE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(Event.prototype, "AT_TARGET", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(Event.prototype, "BUBBLING_PHASE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3
});
dingvm.toolsFunc.defineProperty(Event.prototype, "composedPath", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "composedPath", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "initEvent", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "initEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "preventDefault", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "preventDefault", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "stopImmediatePropagation", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "stopImmediatePropagation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Event.prototype, "stopPropagation", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Event.prototype, "EventProto", "stopPropagation", arguments)
    }
});
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

// WindowProperties对象
WindowProperties = function WindowProperties() {

};
// 保护原型
dingvm.toolsFunc.safeProto(WindowProperties, "WindowProperties");
// 删除构造方法
delete WindowProperties.prototype.constructor;
Object.setPrototypeOf(WindowProperties.prototype, EventTarget.prototype);
// Window对象
Window = function Window(self) {
    if (self === undefined){
        return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
    }
};
dingvm.toolsFunc.safe_constructor_prototype(Window, "Window");
Object.setPrototypeOf(Window.prototype, WindowProperties.prototype);
dingvm.toolsFunc.defineProperty(Window, "TEMPORARY", {
    configurable: false,
    enumerable: true,
    writable: false, value: 0
});
dingvm.toolsFunc.defineProperty(Window, "PERSISTENT", {
    configurable: false,
    enumerable: true,
    writable: false, value: 1
});
dingvm.toolsFunc.defineProperty(Window.prototype, "TEMPORARY", {
    configurable: false,
    enumerable: true,
    writable: false, value: 0
});
dingvm.toolsFunc.defineProperty(Window.prototype, "PERSISTENT", {
    configurable: false,
    enumerable: true,
    writable: false, value: 1
});

// Location对象
Location = function Location() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Location, "Location");

// Navigator对象
Navigator = function Navigator() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Navigator, "Navigator");
dingvm.toolsFunc.defineProperty(Navigator.prototype, "vendorSub", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "vendorSub_get", arguments, '')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "productSub", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "productSub_get", arguments, '20030107')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "vendor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "vendor_get", arguments, 'Google Inc.')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "maxTouchPoints", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "maxTouchPoints_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "scheduling", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "scheduling_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "userActivation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "userActivation_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "doNotTrack", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "doNotTrack_get", arguments, '1')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "geolocation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "geolocation_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "connection", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "connection_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "plugins", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "plugins_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "mimeTypes", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "mimeTypes_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "pdfViewerEnabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "pdfViewerEnabled_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "webkitTemporaryStorage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "webkitTemporaryStorage_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "webkitPersistentStorage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "webkitPersistentStorage_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "hardwareConcurrency", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "hardwareConcurrency_get", arguments, 12)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "cookieEnabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "cookieEnabled_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "appCodeName", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "appCodeName_get", arguments, 'Mozilla')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "appName", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "appName_get", arguments, 'Netscape')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "appVersion", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "appVersion_get", arguments, '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "platform", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "platform_get", arguments, 'Win32')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "product", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "product_get", arguments, 'Gecko')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "userAgent", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "userAgent_get", arguments, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "language", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "language_get", arguments, 'zh-CN')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "languages", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "languages_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "onLine", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "onLine_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "webdriver", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "webdriver_get", arguments, false)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "getGamepads", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "getGamepads", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "javaEnabled", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "javaEnabled", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "sendBeacon", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "sendBeacon", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "vibrate", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "vibrate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "bluetooth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "bluetooth_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "clipboard", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "clipboard_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "credentials", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "credentials_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "keyboard", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "keyboard_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "managed", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "managed_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "mediaDevices", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "mediaDevices_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "storage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "storage_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "serviceWorker", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "serviceWorker_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "virtualKeyboard", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "virtualKeyboard_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "wakeLock", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "wakeLock_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "deviceMemory", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "deviceMemory_get", arguments, 8)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "ink", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "ink_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "hid", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "hid_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "locks", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "locks_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "mediaCapabilities", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "mediaCapabilities_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "mediaSession", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "mediaSession_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "permissions", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "permissions_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "presentation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "presentation_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "serial", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "serial_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "usb", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "usb_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "windowControlsOverlay", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "windowControlsOverlay_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "xr", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "xr_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "userAgentData", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "userAgentData_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "canShare", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "canShare", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "share", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "share", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "clearAppBadge", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "clearAppBadge", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "getBattery", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "getBattery", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "getUserMedia", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "getUserMedia", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "requestMIDIAccess", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "requestMIDIAccess", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "requestMediaKeySystemAccess", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "requestMediaKeySystemAccess", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "setAppBadge", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "setAppBadge", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "webkitGetUserMedia", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "webkitGetUserMedia", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "getInstalledRelatedApps", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "getInstalledRelatedApps", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "registerProtocolHandler", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "registerProtocolHandler", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "unregisterProtocolHandler", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "unregisterProtocolHandler", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Navigator.prototype, "cpuClass", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Navigator.prototype, "NavigatorProto", "cpuClass_get", arguments)
    },
    set: undefined
});


// History对象
History = function History() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(History, "History");
dingvm.toolsFunc.defineProperty(History.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "length_get", arguments, 2)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(History.prototype, "scrollRestoration", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "scrollRestoration_get", arguments, 'auto')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "scrollRestoration_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(History.prototype, "state", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "state_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(History.prototype, "back", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "back", arguments)
    }
});
dingvm.toolsFunc.defineProperty(History.prototype, "forward", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "forward", arguments)
    }
});
dingvm.toolsFunc.defineProperty(History.prototype, "go", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "go", arguments)
    }
});
dingvm.toolsFunc.defineProperty(History.prototype, "pushState", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "pushState", arguments)
    }
});
dingvm.toolsFunc.defineProperty(History.prototype, "replaceState", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, History.prototype, "HistoryProto", "replaceState", arguments)
    }
});

// Screen对象
Screen = function Screen() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Screen, "Screen");
Object.setPrototypeOf(Screen.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(Screen.prototype, "availWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "availWidth_get", arguments, 1536)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "availHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "availHeight_get", arguments, 864)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "width", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "width_get", arguments, 1536)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "height", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "height_get", arguments, 864)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "colorDepth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "colorDepth_get", arguments, 24)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "pixelDepth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "pixelDepth_get", arguments, 24)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "availLeft", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "availLeft_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "availTop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "availTop_get", arguments, 0)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "orientation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "orientation_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "onchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "onchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "onchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Screen.prototype, "isExtended", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Screen.prototype, "ScreenProto", "isExtended_get", arguments, false)
    },
    set: undefined
});

// Plugin对象
Plugin = function Plugin() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Plugin, "Plugin");
dingvm.toolsFunc.defineProperty(Plugin.prototype, "name", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Plugin.prototype, "PluginProto", "name_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Plugin.prototype, "filename", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Plugin.prototype, "PluginProto", "filename_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Plugin.prototype, "description", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Plugin.prototype, "PluginProto", "description_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Plugin.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Plugin.prototype, "PluginProto", "length_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Plugin.prototype, "item", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Plugin.prototype, "PluginProto", "item", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Plugin.prototype, "namedItem", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Plugin.prototype, "PluginProto", "namedItem", arguments)
    }
});
let iterator = function values() {
    return {
        next: function () {
            if (this.index_ === undefined) {
                this.index_ = 0;
            }
            let tmp = this.self_[this.index_];
            this.index_ += 1;
            return {value: tmp, done: tmp === undefined};
        },
        self_: this
    }
};
dingvm.toolsFunc.reNameFunc(iterator, "values");
Object.defineProperties(Plugin.prototype, {
    [Symbol.iterator]: {
        value: iterator,
        configurable: true
    }
})
// PluginArray对象
PluginArray = function PluginArray() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(PluginArray, "PluginArray");
dingvm.toolsFunc.defineProperty(PluginArray.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArrayProto", "length_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(PluginArray.prototype, "item", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArrayProto", "item", arguments)
    }
});
dingvm.toolsFunc.defineProperty(PluginArray.prototype, "namedItem", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArrayProto", "namedItem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(PluginArray.prototype, "refresh", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArrayProto", "refresh", arguments)
    }
});
Object.defineProperties(PluginArray.prototype, {
    [Symbol.iterator]: {
        value: iterator,
        configurable: true
    }
})
// MimeType对象
MimeType = function MimeType() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(MimeType, "MimeType");
dingvm.toolsFunc.defineProperty(MimeType.prototype, "type", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MimeType.prototype, "MimeTypeProto", "type_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MimeType.prototype, "suffixes", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MimeType.prototype, "MimeTypeProto", "suffixes_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MimeType.prototype, "description", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MimeType.prototype, "MimeTypeProto", "description_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MimeType.prototype, "enabledPlugin", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MimeType.prototype, "MimeTypeProto", "enabledPlugin_get", arguments)
    },
    set: undefined
});

// MimeTypeArray对象
MimeTypeArray = function MimeTypeArray() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(MimeTypeArray, "MimeTypeArray");
dingvm.toolsFunc.defineProperty(MimeTypeArray.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, MimeTypeArray.prototype, "MimeTypeArrayProto", "length_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(MimeTypeArray.prototype, "item", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MimeTypeArray.prototype, "MimeTypeArrayProto", "item", arguments)
    }
});
dingvm.toolsFunc.defineProperty(MimeTypeArray.prototype, "namedItem", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, MimeTypeArray.prototype, "MimeTypeArrayProto", "namedItem", arguments)
    }
});

// Storage对象
Storage = function Storage() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Storage, "Storage");
dingvm.toolsFunc.defineProperty(Storage.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Storage.prototype, "StorageProto", "length_get", arguments, 13)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Storage.prototype, "clear", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Storage.prototype, "StorageProto", "clear", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Storage.prototype, "getItem", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Storage.prototype, "StorageProto", "getItem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Storage.prototype, "key", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Storage.prototype, "StorageProto", "key", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Storage.prototype, "removeItem", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Storage.prototype, "StorageProto", "removeItem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Storage.prototype, "setItem", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Storage.prototype, "StorageProto", "setItem", arguments)
    }
});

// navigator对象
navigator = {};
Object.setPrototypeOf(navigator, Navigator.prototype);

// location对象
let location = {};
Object.setPrototypeOf(location, Location.prototype);
dingvm.toolsFunc.defineProperty(location, "valueOf", {
    configurable: false,
    enumerable: false,
    writable: false, value: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "valueOf", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "ancestorOrigins", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "ancestorOrigins_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(location, "href", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "href_get", arguments, 'https://www.google.com/')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "href_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "origin", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "origin_get", arguments, 'https://www.google.com')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(location, "protocol", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "protocol_get", arguments, 'https:')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "protocol_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "host", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "host_get", arguments, 'www.google.com')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "host_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "hostname", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "hostname_get", arguments, 'www.google.com')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "hostname_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "port", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "port_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "port_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "pathname", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "pathname_get", arguments, '/')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "pathname_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "search", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "search_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "search_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "hash", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "hash_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "hash_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "assign", {
    configurable: false,
    enumerable: true,
    writable: false, value: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "assign", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "reload", {
    configurable: false,
    enumerable: true,
    writable: false, value: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "reload", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "replace", {
    configurable: false,
    enumerable: true,
    writable: false, value: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "replace", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "toString", {
    configurable: false,
    enumerable: true,
    writable: false, value: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "toString", arguments)
    }
});

// localStorage对象
localStorage = {
};
Object.setPrototypeOf(localStorage, Storage.prototype);

// sessionStorage对象
sessionStorage = {
};
Object.setPrototypeOf(sessionStorage, Storage.prototype);

// history对象
history = {};
Object.setPrototypeOf(history, History.prototype);

// screen对象
screen = {};
Object.setPrototypeOf(screen, Screen.prototype);

// chrome对象
chrome_ = {};
dingvm.toolsFunc.defineProperty(chrome_, "loadTimes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, chrome_, "chrome", "loadTimes", arguments)
    }
});
dingvm.toolsFunc.defineProperty(chrome_, "csi", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, chrome_, "chrome", "csi", arguments)
    }
});
dingvm.toolsFunc.defineProperty(chrome_, "app", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
        "isInstalled": false,
        "InstallState": {
            "DISABLED": "disabled",
            "INSTALLED": "installed",
            "NOT_INSTALLED": "not_installed"
        },
        "RunningState": {
            "CANNOT_RUN": "cannot_run",
            "READY_TO_RUN": "ready_to_run",
            "RUNNING": "running"
        },
        getDetails() {
            debugger
        },
        getIsInstalled() {
            debugger
        },
        installState() {
            debugger
        },
        runningState() {
            debugger
        }
    }
});
dingvm.toolsFunc.defineProperty(chrome_, "runtime", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
        "ContextType": {
            "BACKGROUND": "BACKGROUND",
            "OFFSCREEN_DOCUMENT": "OFFSCREEN_DOCUMENT",
            "POPUP": "POPUP",
            "SIDE_PANEL": "SIDE_PANEL",
            "TAB": "TAB"
        },
        "OnInstalledReason": {
            "CHROME_UPDATE": "chrome_update",
            "INSTALL": "install",
            "SHARED_MODULE_UPDATE": "shared_module_update",
            "UPDATE": "update"
        },
        "OnRestartRequiredReason": {
            "APP_UPDATE": "app_update",
            "OS_UPDATE": "os_update",
            "PERIODIC": "periodic"
        },
        "PlatformArch": {
            "ARM": "arm",
            "ARM64": "arm64",
            "MIPS": "mips",
            "MIPS64": "mips64",
            "X86_32": "x86-32",
            "X86_64": "x86-64"
        },
        "PlatformNaclArch": {
            "ARM": "arm",
            "MIPS": "mips",
            "MIPS64": "mips64",
            "X86_32": "x86-32",
            "X86_64": "x86-64"
        },
        "PlatformOs": {
            "ANDROID": "android",
            "CROS": "cros",
            "FUCHSIA": "fuchsia",
            "LINUX": "linux",
            "MAC": "mac",
            "OPENBSD": "openbsd",
            "WIN": "win"
        },
        "RequestUpdateCheckStatus": {
            "NO_UPDATE": "no_update",
            "THROTTLED": "throttled",
            "UPDATE_AVAILABLE": "update_available"
        },
        connect: function () {
            debugger
        },
        id: undefined,
        sendMessage() {
            debugger
        }
    }
});

// Node对象
Node = function Node() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Node, "Node");
Object.setPrototypeOf(Node.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(Node, "ELEMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 1
});
dingvm.toolsFunc.defineProperty(Node, "ATTRIBUTE_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 2
});
dingvm.toolsFunc.defineProperty(Node, "TEXT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 3
});
dingvm.toolsFunc.defineProperty(Node, "CDATA_SECTION_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 4
});
dingvm.toolsFunc.defineProperty(Node, "ENTITY_REFERENCE_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 5
});
dingvm.toolsFunc.defineProperty(Node, "ENTITY_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 6
});
dingvm.toolsFunc.defineProperty(Node, "PROCESSING_INSTRUCTION_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 7
});
dingvm.toolsFunc.defineProperty(Node, "COMMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 8
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 9
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_TYPE_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 10
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_FRAGMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 11
});
dingvm.toolsFunc.defineProperty(Node, "NOTATION_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 12
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_DISCONNECTED", {
    configurable: false,
    enumerable: true,
    writable: false, value: 1
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_PRECEDING", {
    configurable: false,
    enumerable: true,
    writable: false, value: 2
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_FOLLOWING", {
    configurable: false,
    enumerable: true,
    writable: false, value: 4
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_CONTAINS", {
    configurable: false,
    enumerable: true,
    writable: false, value: 8
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_CONTAINED_BY", {
    configurable: false,
    enumerable: true,
    writable: false, value: 16
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
    configurable: false,
    enumerable: true,
    writable: false, value: 32
});
dingvm.toolsFunc.defineProperty(Node.prototype, "nodeType", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "nodeType_get", arguments, 9)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "nodeName", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "nodeName_get", arguments, '#document')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "baseURI", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "baseURI_get", arguments, 'https://www.baidu.com/')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "isConnected", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "isConnected_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "ownerDocument", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "ownerDocument_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "parentNode", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "parentNode_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "parentElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "parentElement_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "childNodes", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "childNodes_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "firstChild", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "firstChild_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "lastChild", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "lastChild_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "previousSibling", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "previousSibling_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "nextSibling", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "nextSibling_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "nodeValue", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "nodeValue_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "nodeValue_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "textContent", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "textContent_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "textContent_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "ELEMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 1
});
dingvm.toolsFunc.defineProperty(Node.prototype, "ATTRIBUTE_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 2
});
dingvm.toolsFunc.defineProperty(Node.prototype, "TEXT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 3
});
dingvm.toolsFunc.defineProperty(Node.prototype, "CDATA_SECTION_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 4
});
dingvm.toolsFunc.defineProperty(Node.prototype, "ENTITY_REFERENCE_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 5
});
dingvm.toolsFunc.defineProperty(Node.prototype, "ENTITY_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 6
});
dingvm.toolsFunc.defineProperty(Node.prototype, "PROCESSING_INSTRUCTION_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 7
});
dingvm.toolsFunc.defineProperty(Node.prototype, "COMMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 8
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 9
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_TYPE_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 10
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_FRAGMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 11
});
dingvm.toolsFunc.defineProperty(Node.prototype, "NOTATION_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 12
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_DISCONNECTED", {
    configurable: false,
    enumerable: true,
    writable: false, value: 1
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_PRECEDING", {
    configurable: false,
    enumerable: true,
    writable: false, value: 2
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_FOLLOWING", {
    configurable: false,
    enumerable: true,
    writable: false, value: 4
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINS", {
    configurable: false,
    enumerable: true,
    writable: false, value: 8
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINED_BY", {
    configurable: false,
    enumerable: true,
    writable: false, value: 16
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
    configurable: false,
    enumerable: true,
    writable: false, value: 32
});
dingvm.toolsFunc.defineProperty(Node.prototype, "appendChild", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "appendChild", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "cloneNode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "cloneNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "compareDocumentPosition", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "compareDocumentPosition", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "contains", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "contains", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "getRootNode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "getRootNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "hasChildNodes", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "hasChildNodes", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "insertBefore", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "insertBefore", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "isDefaultNamespace", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "isDefaultNamespace", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "isEqualNode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "isEqualNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "isSameNode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "isSameNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "lookupNamespaceURI", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "lookupNamespaceURI", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "lookupPrefix", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "lookupPrefix", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "normalize", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "normalize", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "removeChild", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "removeChild", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "replaceChild", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "replaceChild", arguments)
    }
});
;
// Document对象
Document = function Document() {
};
dingvm.toolsFunc.safe_constructor_prototype(Document, "Document");
Object.setPrototypeOf(Document.prototype, Node.prototype);
dingvm.toolsFunc.defineProperty(Document.prototype, "implementation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "implementation_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "URL", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "URL_get", arguments, 'https://www.baidu.com/')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "documentURI", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "documentURI_get", arguments, 'https://www.baidu.com/')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "compatMode", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "compatMode_get", arguments, 'CSS1Compat')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "characterSet", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "characterSet_get", arguments, 'UTF-8')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "charset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "charset_get", arguments, 'UTF-8')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "inputEncoding", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "inputEncoding_get", arguments, 'UTF-8')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "contentType", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "contentType_get", arguments, 'text/html')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "doctype", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "doctype_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "documentElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "documentElement_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "xmlEncoding", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "xmlEncoding_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "xmlVersion", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "xmlVersion_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "xmlVersion_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "xmlStandalone", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "xmlStandalone_get", arguments, false)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "xmlStandalone_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "domain", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "domain_get", arguments, 'www.baidu.com')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "domain_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "referrer", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "referrer_get", arguments, '')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "cookie", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "cookie_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "cookie_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "lastModified", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "lastModified_get", arguments, '04/18/2023 13:11:36')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "readyState", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "readyState_get", arguments, 'complete')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "title", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "title_get", arguments, '百度一下，你就知道')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "title_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "dir", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "dir_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "dir_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "body", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "body_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "body_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "head", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "head_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "images", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "images_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "embeds", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "embeds_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "plugins", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "plugins_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "links", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "links_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "forms", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "forms_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "scripts", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "scripts_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "currentScript", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "currentScript_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "defaultView", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "defaultView_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "designMode", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "designMode_get", arguments, 'off')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "designMode_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onreadystatechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onreadystatechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onreadystatechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "anchors", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "anchors_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "applets", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "applets_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "fgColor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fgColor_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fgColor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "linkColor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "linkColor_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "linkColor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "vlinkColor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "vlinkColor_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "vlinkColor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "alinkColor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "alinkColor_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "alinkColor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "bgColor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "bgColor_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "bgColor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "all", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "all_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "scrollingElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "scrollingElement_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerlockchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerlockchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerlockchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerlockerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerlockerror_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerlockerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "hidden", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "hidden_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "visibilityState", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "visibilityState_get", arguments, 'hidden')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "wasDiscarded", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "wasDiscarded_get", arguments, false)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "featurePolicy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "featurePolicy_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitVisibilityState", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitVisibilityState_get", arguments, 'hidden')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitHidden", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitHidden_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onbeforecopy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforecopy_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforecopy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onbeforecut", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforecut_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforecut_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onbeforepaste", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforepaste_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforepaste_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onfreeze", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfreeze_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfreeze_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onresume", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onresume_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onresume_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onsearch", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsearch_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsearch_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onvisibilitychange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onvisibilitychange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onvisibilitychange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "fullscreenEnabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fullscreenEnabled_get", arguments, true)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fullscreenEnabled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "fullscreen", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fullscreen_get", arguments, false)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fullscreen_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onfullscreenchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfullscreenchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfullscreenchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onfullscreenerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfullscreenerror_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfullscreenerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitIsFullScreen", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitIsFullScreen_get", arguments, false)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitCurrentFullScreenElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitCurrentFullScreenElement_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitFullscreenEnabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitFullscreenEnabled_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitFullscreenElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitFullscreenElement_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwebkitfullscreenchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitfullscreenchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitfullscreenchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwebkitfullscreenerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitfullscreenerror_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitfullscreenerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "rootElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "rootElement_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "pictureInPictureEnabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "pictureInPictureEnabled_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "pictureInPictureElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "pictureInPictureElement_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onbeforexrselect", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforexrselect_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforexrselect_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onabort", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onabort_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onabort_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onbeforeinput", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforeinput_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforeinput_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onblur", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onblur_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onblur_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncancel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncancel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncancel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncanplay", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncanplay_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncanplay_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncanplaythrough", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncanplaythrough_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncanplaythrough_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onclick", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onclick_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onclick_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onclose", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onclose_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onclose_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncontextlost", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontextlost_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontextlost_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncontextmenu", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontextmenu_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontextmenu_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncontextrestored", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontextrestored_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontextrestored_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncuechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncuechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncuechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondblclick", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondblclick_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondblclick_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondrag", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondrag_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondrag_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondragend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondragenter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragenter_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragenter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondragleave", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragleave_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragleave_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondragover", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragover_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragover_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondragstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondrop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondrop_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondrop_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondurationchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondurationchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondurationchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onemptied", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onemptied_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onemptied_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onended", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onended_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onended_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onerror_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onfocus", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfocus_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfocus_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onformdata", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onformdata_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onformdata_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oninput", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oninput_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oninput_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oninvalid", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oninvalid_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oninvalid_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onkeydown", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onkeydown_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onkeydown_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onkeypress", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onkeypress_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onkeypress_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onkeyup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onkeyup_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onkeyup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onload", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onload_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onload_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onloadeddata", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onloadeddata_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onloadeddata_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onloadedmetadata", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onloadedmetadata_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onloadedmetadata_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onloadstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onloadstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onloadstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmousedown", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmousedown_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmousedown_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmouseenter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseenter_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseenter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmouseleave", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseleave_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseleave_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmousemove", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmousemove_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmousemove_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmouseout", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseout_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseout_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmouseover", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseover_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseover_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmouseup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseup_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmousewheel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmousewheel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmousewheel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpause", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpause_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpause_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onplay", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onplay_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onplay_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onplaying", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onplaying_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onplaying_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onprogress", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onprogress_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onprogress_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onratechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onratechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onratechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onreset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onreset_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onreset_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onresize", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onresize_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onresize_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onscroll", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onscroll_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onscroll_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onsecuritypolicyviolation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsecuritypolicyviolation_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsecuritypolicyviolation_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onseeked", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onseeked_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onseeked_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onseeking", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onseeking_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onseeking_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onselect", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onselect_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onselect_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onslotchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onslotchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onslotchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onstalled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onstalled_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onstalled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onsubmit", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsubmit_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsubmit_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onsuspend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsuspend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsuspend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ontimeupdate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontimeupdate_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontimeupdate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ontoggle", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontoggle_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontoggle_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onvolumechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onvolumechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onvolumechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwaiting", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwaiting_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwaiting_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwebkitanimationend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitanimationend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitanimationend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwebkitanimationiteration", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitanimationiteration_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitanimationiteration_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwebkitanimationstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitanimationstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitanimationstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwebkittransitionend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkittransitionend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkittransitionend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwheel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwheel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwheel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onauxclick", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onauxclick_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onauxclick_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ongotpointercapture", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ongotpointercapture_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ongotpointercapture_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onlostpointercapture", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onlostpointercapture_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onlostpointercapture_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerdown", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerdown_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerdown_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointermove", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointermove_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointermove_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerrawupdate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerrawupdate_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerrawupdate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerup_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointercancel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointercancel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointercancel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerover", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerover_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerover_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerout", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerout_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerout_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerenter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerenter_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerenter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerleave", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerleave_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerleave_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onselectstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onselectstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onselectstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onselectionchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onselectionchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onselectionchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onanimationend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onanimationend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onanimationend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onanimationiteration", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onanimationiteration_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onanimationiteration_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onanimationstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onanimationstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onanimationstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ontransitionrun", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitionrun_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitionrun_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ontransitionstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitionstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitionstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ontransitionend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitionend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitionend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ontransitioncancel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitioncancel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitioncancel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncopy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncopy_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncopy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncut", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncut_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncut_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpaste", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpaste_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpaste_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "children", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "children_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "firstElementChild", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "firstElementChild_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "lastElementChild", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "lastElementChild_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "childElementCount", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "childElementCount_get", arguments, 1)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "activeElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "activeElement_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "styleSheets", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "styleSheets_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "pointerLockElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "pointerLockElement_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "fullscreenElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fullscreenElement_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fullscreenElement_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "adoptedStyleSheets", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "adoptedStyleSheets_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "adoptedStyleSheets_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "fonts", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fonts_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "adoptNode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "adoptNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "append", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "append", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "captureEvents", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "captureEvents", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "caretRangeFromPoint", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "caretRangeFromPoint", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "clear", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "clear", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "close", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "close", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createAttribute", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createAttribute", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createAttributeNS", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createAttributeNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createCDATASection", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createCDATASection", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createComment", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createComment", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createDocumentFragment", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createDocumentFragment", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createElement", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createElementNS", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createElementNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createEvent", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createExpression", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createExpression", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createNSResolver", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createNSResolver", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createNodeIterator", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createNodeIterator", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createProcessingInstruction", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createProcessingInstruction", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createRange", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createRange", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createTextNode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createTextNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createTreeWalker", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createTreeWalker", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "elementFromPoint", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "elementFromPoint", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "elementsFromPoint", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "elementsFromPoint", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "evaluate", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "evaluate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "execCommand", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "execCommand", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "exitFullscreen", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "exitFullscreen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "exitPictureInPicture", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "exitPictureInPicture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "exitPointerLock", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "exitPointerLock", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "getElementById", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "getElementById", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "getElementsByClassName", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "getElementsByClassName", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "getElementsByName", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "getElementsByName", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "getElementsByTagName", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "getElementsByTagName", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "getElementsByTagNameNS", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "getElementsByTagNameNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "getSelection", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "getSelection", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "hasFocus", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "hasFocus", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "importNode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "importNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "open", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "open", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "prepend", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "prepend", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "queryCommandEnabled", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "queryCommandEnabled", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "queryCommandIndeterm", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "queryCommandIndeterm", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "queryCommandState", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "queryCommandState", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "queryCommandSupported", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "queryCommandSupported", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "queryCommandValue", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "queryCommandValue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "querySelector", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "querySelector", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "querySelectorAll", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "querySelectorAll", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "releaseEvents", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "releaseEvents", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "replaceChildren", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "replaceChildren", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitCancelFullScreen", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitCancelFullScreen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitExitFullscreen", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitExitFullscreen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "write", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "write", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "writeln", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "writeln", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "prerendering", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "prerendering_get", arguments, false)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onprerenderingchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onprerenderingchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onprerenderingchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "fragmentDirective", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fragmentDirective_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onbeforematch", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforematch_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforematch_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "timeline", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "timeline_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncontentvisibilityautostatechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontentvisibilityautostatechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontentvisibilityautostatechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "getAnimations", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "getAnimations", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "startViewTransition", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "startViewTransition", arguments)
    }
});
;
// HTMLDocument对象
HTMLDocument = function HTMLDocument() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLDocument, "HTMLDocument");
Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype);
;
// CharacterData对象
CharacterData = function CharacterData() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(CharacterData, "CharacterData");
Object.setPrototypeOf(CharacterData.prototype, Node.prototype);
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "data", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "data_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "data_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "length_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "previousElementSibling", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "previousElementSibling_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "nextElementSibling", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "nextElementSibling_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "after", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "after", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "appendData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "appendData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "before", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "before", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "deleteData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "deleteData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "insertData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "insertData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "remove", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "remove", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "replaceData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "replaceData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "replaceWith", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "replaceWith", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CharacterData.prototype, "substringData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterDataProto", "substringData", arguments)
    }
});
;
// Text对象
Text = function Text() {
};
dingvm.toolsFunc.safe_constructor_prototype(Text, "Text");
Object.setPrototypeOf(Text.prototype, CharacterData.prototype);
dingvm.toolsFunc.defineProperty(Text.prototype, "wholeText", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Text.prototype, "TextProto", "wholeText_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Text.prototype, "assignedSlot", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Text.prototype, "TextProto", "assignedSlot_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Text.prototype, "splitText", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Text.prototype, "TextProto", "splitText", arguments)
    }
});
;
// Element对象
Element = function Element() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Element, "Element");
Object.setPrototypeOf(Element.prototype, Node.prototype);
dingvm.toolsFunc.defineProperty(Element.prototype, "namespaceURI", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "namespaceURI_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "prefix", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "prefix_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "localName", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "localName_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "tagName", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "tagName_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "id", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "id_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "id_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "className", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "className_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "className_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "classList", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "classList_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "classList_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "slot", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "slot_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "slot_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "attributes", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "attributes_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "shadowRoot", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "shadowRoot_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "part", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "part_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "part_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "assignedSlot", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "assignedSlot_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "innerHTML", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "innerHTML_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "innerHTML_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "outerHTML", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "outerHTML_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "outerHTML_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollTop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollTop_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollTop_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollLeft", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollLeft_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollLeft_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollWidth_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollHeight_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "clientTop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "clientTop_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "clientLeft", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "clientLeft_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "clientWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "clientWidth_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "clientHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "clientHeight_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onbeforecopy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onbeforecopy_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onbeforecopy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onbeforecut", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onbeforecut_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onbeforecut_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onbeforepaste", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onbeforepaste_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onbeforepaste_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onsearch", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onsearch_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onsearch_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "elementTiming", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "elementTiming_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "elementTiming_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onfullscreenchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onfullscreenchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onfullscreenchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onfullscreenerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onfullscreenerror_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onfullscreenerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onwebkitfullscreenchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onwebkitfullscreenchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onwebkitfullscreenchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onwebkitfullscreenerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onwebkitfullscreenerror_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onwebkitfullscreenerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "role", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "role_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "role_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaAtomic", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaAtomic_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaAtomic_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaAutoComplete", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaAutoComplete_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaAutoComplete_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaBusy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaBusy_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaBusy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaBrailleLabel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaBrailleLabel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaBrailleLabel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaBrailleRoleDescription", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaBrailleRoleDescription_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaBrailleRoleDescription_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaChecked", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaChecked_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaChecked_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaColCount", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaColCount_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaColCount_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaColIndex", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaColIndex_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaColIndex_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaColSpan", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaColSpan_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaColSpan_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaCurrent", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaCurrent_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaCurrent_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaDescription", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaDescription_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaDescription_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaDisabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaDisabled_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaDisabled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaExpanded", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaExpanded_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaExpanded_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaHasPopup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaHasPopup_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaHasPopup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaHidden", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaHidden_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaHidden_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaInvalid", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaInvalid_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaInvalid_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaKeyShortcuts", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaKeyShortcuts_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaKeyShortcuts_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaLabel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaLabel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaLabel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaLevel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaLevel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaLevel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaLive", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaLive_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaLive_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaModal", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaModal_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaModal_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaMultiLine", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaMultiLine_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaMultiLine_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaMultiSelectable", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaMultiSelectable_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaMultiSelectable_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaOrientation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaOrientation_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaOrientation_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaPlaceholder", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaPlaceholder_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaPlaceholder_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaPosInSet", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaPosInSet_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaPosInSet_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaPressed", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaPressed_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaPressed_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaReadOnly", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaReadOnly_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaReadOnly_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaRelevant", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRelevant_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRelevant_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaRequired", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRequired_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRequired_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaRoleDescription", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRoleDescription_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRoleDescription_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaRowCount", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRowCount_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRowCount_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaRowIndex", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRowIndex_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRowIndex_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaRowSpan", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRowSpan_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRowSpan_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaSelected", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaSelected_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaSelected_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaSetSize", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaSetSize_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaSetSize_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaSort", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaSort_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaSort_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaValueMax", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueMax_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueMax_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaValueMin", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueMin_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueMin_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaValueNow", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueNow_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueNow_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaValueText", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueText_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueText_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "children", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "children_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "firstElementChild", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "firstElementChild_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "lastElementChild", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "lastElementChild_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "childElementCount", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "childElementCount_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "previousElementSibling", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "previousElementSibling_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "nextElementSibling", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "nextElementSibling_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "after", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "after", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "animate", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "animate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "append", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "append", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "attachShadow", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "attachShadow", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "before", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "before", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "closest", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "closest", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "computedStyleMap", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "computedStyleMap", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getAttribute", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getAttribute", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getAttributeNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getAttributeNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getAttributeNames", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getAttributeNames", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getAttributeNode", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getAttributeNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getAttributeNodeNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getAttributeNodeNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getBoundingClientRect", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getBoundingClientRect", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getClientRects", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getClientRects", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getElementsByClassName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getElementsByClassName", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getElementsByTagName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getElementsByTagName", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getElementsByTagNameNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getElementsByTagNameNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getInnerHTML", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getInnerHTML", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "hasAttribute", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "hasAttribute", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "hasAttributeNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "hasAttributeNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "hasAttributes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "hasAttributes", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "hasPointerCapture", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "hasPointerCapture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "insertAdjacentElement", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "insertAdjacentElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "insertAdjacentHTML", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "insertAdjacentHTML", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "insertAdjacentText", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "insertAdjacentText", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "matches", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "matches", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "prepend", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "prepend", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "querySelector", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "querySelector", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "querySelectorAll", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "querySelectorAll", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "releasePointerCapture", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "releasePointerCapture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "remove", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "remove", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "removeAttribute", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "removeAttribute", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "removeAttributeNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "removeAttributeNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "removeAttributeNode", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "removeAttributeNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "replaceChildren", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "replaceChildren", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "replaceWith", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "replaceWith", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "requestFullscreen", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "requestFullscreen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "requestPointerLock", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "requestPointerLock", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scroll", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scroll", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollBy", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollBy", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollIntoView", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollIntoView", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollIntoViewIfNeeded", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollIntoViewIfNeeded", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollTo", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollTo", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "setAttribute", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "setAttribute", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "setAttributeNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "setAttributeNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "setAttributeNode", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "setAttributeNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "setAttributeNodeNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "setAttributeNodeNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "setPointerCapture", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "setPointerCapture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "toggleAttribute", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "toggleAttribute", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "webkitMatchesSelector", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "webkitMatchesSelector", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "webkitRequestFullScreen", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "webkitRequestFullScreen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "webkitRequestFullscreen", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "webkitRequestFullscreen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "checkVisibility", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "checkVisibility", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getAnimations", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getAnimations", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "setHTML", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "setHTML", arguments)
    }
});
;
// HTMLElement对象
HTMLElement = function HTMLElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLElement, "HTMLElement");
Object.setPrototypeOf(HTMLElement.prototype, Element.prototype);
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "title", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "title_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "title_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "lang", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "lang_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "lang_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "translate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "translate_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "translate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "dir", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "dir_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "dir_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "hidden", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "hidden_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "hidden_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "accessKey", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "accessKey_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "accessKey_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "draggable", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "draggable_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "draggable_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "spellcheck", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "spellcheck_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "spellcheck_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "autocapitalize", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "autocapitalize_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "autocapitalize_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "contentEditable", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "contentEditable_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "contentEditable_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "enterKeyHint", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "enterKeyHint_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "enterKeyHint_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "isContentEditable", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "isContentEditable_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "inputMode", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "inputMode_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "inputMode_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "virtualKeyboardPolicy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "virtualKeyboardPolicy_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "virtualKeyboardPolicy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetParent", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "offsetParent_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetTop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "offsetTop_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetLeft", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "offsetLeft_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "offsetWidth_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "offsetHeight_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "innerText", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "innerText_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "innerText_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "outerText", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "outerText_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "outerText_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforexrselect", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onbeforexrselect_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onbeforexrselect_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onabort", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onabort_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onabort_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforeinput", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onbeforeinput_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onbeforeinput_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onblur", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onblur_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onblur_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncancel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncancel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncancel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncanplay", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncanplay_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncanplay_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncanplaythrough", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncanplaythrough_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncanplaythrough_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onclick", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onclick_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onclick_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onclose", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onclose_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onclose_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncontextlost", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontextlost_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontextlost_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncontextmenu", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontextmenu_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontextmenu_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncontextrestored", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontextrestored_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontextrestored_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncuechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncuechange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncuechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondblclick", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondblclick_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondblclick_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondrag", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondrag_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondrag_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragend_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragenter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragenter_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragenter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragleave", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragleave_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragleave_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragover", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragover_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragover_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragstart_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondrop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondrop_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondrop_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondurationchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondurationchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondurationchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onemptied", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onemptied_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onemptied_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onended", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onended_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onended_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onerror_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onfocus", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onfocus_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onfocus_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onformdata", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onformdata_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onformdata_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oninput", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oninput_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oninput_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oninvalid", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oninvalid_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oninvalid_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onkeydown", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onkeydown_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onkeydown_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onkeypress", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onkeypress_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onkeypress_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onkeyup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onkeyup_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onkeyup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onload", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onload_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onload_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onloadeddata", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onloadeddata_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onloadeddata_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onloadedmetadata", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onloadedmetadata_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onloadedmetadata_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onloadstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onloadstart_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onloadstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmousedown", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmousedown_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmousedown_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseenter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseenter_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseenter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseleave", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseleave_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseleave_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmousemove", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmousemove_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmousemove_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseout", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseout_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseout_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseover", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseover_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseover_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseup_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmousewheel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmousewheel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmousewheel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpause", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpause_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpause_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onplay", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onplay_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onplay_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onplaying", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onplaying_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onplaying_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onprogress", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onprogress_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onprogress_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onratechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onratechange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onratechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onreset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onreset_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onreset_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onresize", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onresize_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onresize_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onscroll", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onscroll_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onscroll_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onsecuritypolicyviolation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onsecuritypolicyviolation_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onsecuritypolicyviolation_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onseeked", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onseeked_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onseeked_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onseeking", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onseeking_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onseeking_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onselect", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onselect_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onselect_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onslotchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onslotchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onslotchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onstalled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onstalled_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onstalled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onsubmit", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onsubmit_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onsubmit_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onsuspend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onsuspend_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onsuspend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ontimeupdate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontimeupdate_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontimeupdate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ontoggle", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontoggle_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontoggle_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onvolumechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onvolumechange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onvolumechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onwaiting", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwaiting_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwaiting_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkitanimationend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkitanimationend_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkitanimationend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkitanimationiteration", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkitanimationiteration_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkitanimationiteration_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkitanimationstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkitanimationstart_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkitanimationstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkittransitionend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkittransitionend_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkittransitionend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onwheel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwheel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwheel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onauxclick", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onauxclick_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onauxclick_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ongotpointercapture", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ongotpointercapture_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ongotpointercapture_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onlostpointercapture", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onlostpointercapture_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onlostpointercapture_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerdown", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerdown_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerdown_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointermove", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointermove_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointermove_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerrawupdate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerrawupdate_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerrawupdate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerup_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointercancel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointercancel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointercancel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerover", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerover_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerover_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerout", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerout_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerout_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerenter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerenter_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerenter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerleave", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerleave_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerleave_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onselectstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onselectstart_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onselectstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onselectionchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onselectionchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onselectionchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onanimationend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onanimationend_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onanimationend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onanimationiteration", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onanimationiteration_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onanimationiteration_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onanimationstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onanimationstart_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onanimationstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitionrun", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitionrun_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitionrun_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitionstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitionstart_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitionstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitionend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitionend_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitionend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitioncancel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitioncancel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitioncancel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncopy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncopy_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncopy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncut", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncut_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncut_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpaste", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpaste_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpaste_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "dataset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "dataset_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "nonce", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "nonce_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "nonce_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "autofocus", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "autofocus_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "autofocus_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "tabIndex", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "tabIndex_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "tabIndex_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "style", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "style_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "style_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "attributeStyleMap", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "attributeStyleMap_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "attachInternals", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "attachInternals", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "blur", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "blur", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "click", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "click", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "focus", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "focus", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "inert", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "inert_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "inert_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncontentvisibilityautostatechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontentvisibilityautostatechange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontentvisibilityautostatechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforematch", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onbeforematch_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onbeforematch_set", arguments)
    }
});
;
// HTMLSpanElement对象
HTMLSpanElement = function HTMLSpanElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLSpanElement, "HTMLSpanElement");
Object.setPrototypeOf(HTMLSpanElement.prototype, HTMLElement.prototype);
;
// HTMLDivElement对象
HTMLDivElement = function HTMLDivElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLDivElement, "HTMLDivElement");
Object.setPrototypeOf(HTMLDivElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLDivElement.prototype, "align", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLDivElement.prototype, "HTMLDivElementProto", "align_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLDivElement.prototype, "HTMLDivElementProto", "align_set", arguments)
    }
});
;
// CSSStyleDeclaration对象
// todo Symbol.iterator未实现
CSSStyleDeclaration = function CSSStyleDeclaration() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(CSSStyleDeclaration, "CSSStyleDeclaration");
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "cssText", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "cssText_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "cssText_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "length_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "parentRule", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "parentRule_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "cssFloat", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "cssFloat_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "cssFloat_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "getPropertyPriority", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "getPropertyPriority", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "getPropertyValue", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "getPropertyValue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "item", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "item", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "removeProperty", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "removeProperty", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "setProperty", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "setProperty", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "forEach", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclarationProto", "forEach", arguments)
    }
});
;
// document对象
document = {};
Object.setPrototypeOf(document, HTMLDocument.prototype);
dingvm.toolsFunc.defineProperty(document, "location", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, document, "document", "location_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, document, "document", "location_set", arguments)
    }
});;
// style对象
style = {
    "accentColor": "",
    "additiveSymbols": "",
    "alignContent": "",
    "alignItems": "",
    "alignSelf": "",
    "alignmentBaseline": "",
    "all": "",
    "animation": "",
    "animationComposition": "",
    "animationDelay": "",
    "animationDirection": "",
    "animationDuration": "",
    "animationFillMode": "",
    "animationIterationCount": "",
    "animationName": "",
    "animationPlayState": "",
    "animationRange": "",
    "animationRangeEnd": "",
    "animationRangeStart": "",
    "animationTimeline": "",
    "animationTimingFunction": "",
    "appRegion": "",
    "appearance": "",
    "ascentOverride": "",
    "aspectRatio": "",
    "backdropFilter": "",
    "backfaceVisibility": "",
    "background": "",
    "backgroundAttachment": "",
    "backgroundBlendMode": "",
    "backgroundClip": "",
    "backgroundColor": "",
    "backgroundImage": "",
    "backgroundOrigin": "",
    "backgroundPosition": "",
    "backgroundPositionX": "",
    "backgroundPositionY": "",
    "backgroundRepeat": "",
    "backgroundSize": "",
    "basePalette": "",
    "baselineShift": "",
    "baselineSource": "",
    "blockSize": "",
    "border": "",
    "borderBlock": "",
    "borderBlockColor": "",
    "borderBlockEnd": "",
    "borderBlockEndColor": "",
    "borderBlockEndStyle": "",
    "borderBlockEndWidth": "",
    "borderBlockStart": "",
    "borderBlockStartColor": "",
    "borderBlockStartStyle": "",
    "borderBlockStartWidth": "",
    "borderBlockStyle": "",
    "borderBlockWidth": "",
    "borderBottom": "",
    "borderBottomColor": "",
    "borderBottomLeftRadius": "",
    "borderBottomRightRadius": "",
    "borderBottomStyle": "",
    "borderBottomWidth": "",
    "borderCollapse": "",
    "borderColor": "",
    "borderEndEndRadius": "",
    "borderEndStartRadius": "",
    "borderImage": "",
    "borderImageOutset": "",
    "borderImageRepeat": "",
    "borderImageSlice": "",
    "borderImageSource": "",
    "borderImageWidth": "",
    "borderInline": "",
    "borderInlineColor": "",
    "borderInlineEnd": "",
    "borderInlineEndColor": "",
    "borderInlineEndStyle": "",
    "borderInlineEndWidth": "",
    "borderInlineStart": "",
    "borderInlineStartColor": "",
    "borderInlineStartStyle": "",
    "borderInlineStartWidth": "",
    "borderInlineStyle": "",
    "borderInlineWidth": "",
    "borderLeft": "",
    "borderLeftColor": "",
    "borderLeftStyle": "",
    "borderLeftWidth": "",
    "borderRadius": "",
    "borderRight": "",
    "borderRightColor": "",
    "borderRightStyle": "",
    "borderRightWidth": "",
    "borderSpacing": "",
    "borderStartEndRadius": "",
    "borderStartStartRadius": "",
    "borderStyle": "",
    "borderTop": "",
    "borderTopColor": "",
    "borderTopLeftRadius": "",
    "borderTopRightRadius": "",
    "borderTopStyle": "",
    "borderTopWidth": "",
    "borderWidth": "",
    "bottom": "",
    "boxShadow": "",
    "boxSizing": "",
    "breakAfter": "",
    "breakBefore": "",
    "breakInside": "",
    "bufferedRendering": "",
    "captionSide": "",
    "caretColor": "",
    "clear": "",
    "clip": "",
    "clipPath": "",
    "clipRule": "",
    "color": "",
    "colorInterpolation": "",
    "colorInterpolationFilters": "",
    "colorRendering": "",
    "colorScheme": "",
    "columnCount": "",
    "columnFill": "",
    "columnGap": "",
    "columnRule": "",
    "columnRuleColor": "",
    "columnRuleStyle": "",
    "columnRuleWidth": "",
    "columnSpan": "",
    "columnWidth": "",
    "columns": "",
    "contain": "",
    "containIntrinsicBlockSize": "",
    "containIntrinsicHeight": "",
    "containIntrinsicInlineSize": "",
    "containIntrinsicSize": "",
    "containIntrinsicWidth": "",
    "container": "",
    "containerName": "",
    "containerType": "",
    "content": "",
    "contentVisibility": "",
    "counterIncrement": "",
    "counterReset": "",
    "counterSet": "",
    "cursor": "",
    "cx": "",
    "cy": "",
    "d": "",
    "descentOverride": "",
    "direction": "",
    "display": "",
    "dominantBaseline": "",
    "emptyCells": "",
    "fallback": "",
    "fill": "",
    "fillOpacity": "",
    "fillRule": "",
    "filter": "",
    "flex": "",
    "flexBasis": "",
    "flexDirection": "",
    "flexFlow": "",
    "flexGrow": "",
    "flexShrink": "",
    "flexWrap": "",
    "float": "",
    "floodColor": "",
    "floodOpacity": "",
    "font": "",
    "fontDisplay": "",
    "fontFamily": "",
    "fontFeatureSettings": "",
    "fontKerning": "",
    "fontOpticalSizing": "",
    "fontPalette": "",
    "fontSize": "",
    "fontStretch": "",
    "fontStyle": "",
    "fontSynthesis": "",
    "fontSynthesisSmallCaps": "",
    "fontSynthesisStyle": "",
    "fontSynthesisWeight": "",
    "fontVariant": "",
    "fontVariantAlternates": "",
    "fontVariantCaps": "",
    "fontVariantEastAsian": "",
    "fontVariantLigatures": "",
    "fontVariantNumeric": "",
    "fontVariantPosition": "",
    "fontVariationSettings": "",
    "fontWeight": "",
    "forcedColorAdjust": "",
    "gap": "",
    "grid": "",
    "gridArea": "",
    "gridAutoColumns": "",
    "gridAutoFlow": "",
    "gridAutoRows": "",
    "gridColumn": "",
    "gridColumnEnd": "",
    "gridColumnGap": "",
    "gridColumnStart": "",
    "gridGap": "",
    "gridRow": "",
    "gridRowEnd": "",
    "gridRowGap": "",
    "gridRowStart": "",
    "gridTemplate": "",
    "gridTemplateAreas": "",
    "gridTemplateColumns": "",
    "gridTemplateRows": "",
    "height": "",
    "hyphenateCharacter": "",
    "hyphenateLimitChars": "",
    "hyphens": "",
    "imageOrientation": "",
    "imageRendering": "",
    "inherits": "",
    "initialLetter": "",
    "initialValue": "",
    "inlineSize": "",
    "inset": "",
    "insetBlock": "",
    "insetBlockEnd": "",
    "insetBlockStart": "",
    "insetInline": "",
    "insetInlineEnd": "",
    "insetInlineStart": "",
    "isolation": "",
    "justifyContent": "",
    "justifyItems": "",
    "justifySelf": "",
    "left": "",
    "letterSpacing": "",
    "lightingColor": "",
    "lineBreak": "",
    "lineGapOverride": "",
    "lineHeight": "",
    "listStyle": "",
    "listStyleImage": "",
    "listStylePosition": "",
    "listStyleType": "",
    "margin": "",
    "marginBlock": "",
    "marginBlockEnd": "",
    "marginBlockStart": "",
    "marginBottom": "",
    "marginInline": "",
    "marginInlineEnd": "",
    "marginInlineStart": "",
    "marginLeft": "",
    "marginRight": "",
    "marginTop": "",
    "marker": "",
    "markerEnd": "",
    "markerMid": "",
    "markerStart": "",
    "mask": "",
    "maskClip": "",
    "maskComposite": "",
    "maskImage": "",
    "maskMode": "",
    "maskOrigin": "",
    "maskPosition": "",
    "maskRepeat": "",
    "maskSize": "",
    "maskType": "",
    "mathDepth": "",
    "mathShift": "",
    "mathStyle": "",
    "maxBlockSize": "",
    "maxHeight": "",
    "maxInlineSize": "",
    "maxWidth": "",
    "minBlockSize": "",
    "minHeight": "",
    "minInlineSize": "",
    "minWidth": "",
    "mixBlendMode": "",
    "negative": "",
    "objectFit": "",
    "objectPosition": "",
    "objectViewBox": "",
    "offset": "",
    "offsetAnchor": "",
    "offsetDistance": "",
    "offsetPath": "",
    "offsetPosition": "",
    "offsetRotate": "",
    "opacity": "",
    "order": "",
    "orphans": "",
    "outline": "",
    "outlineColor": "",
    "outlineOffset": "",
    "outlineStyle": "",
    "outlineWidth": "",
    "overflow": "",
    "overflowAnchor": "",
    "overflowClipMargin": "",
    "overflowWrap": "",
    "overflowX": "",
    "overflowY": "",
    "overlay": "",
    "overrideColors": "",
    "overscrollBehavior": "",
    "overscrollBehaviorBlock": "",
    "overscrollBehaviorInline": "",
    "overscrollBehaviorX": "",
    "overscrollBehaviorY": "",
    "pad": "",
    "padding": "",
    "paddingBlock": "",
    "paddingBlockEnd": "",
    "paddingBlockStart": "",
    "paddingBottom": "",
    "paddingInline": "",
    "paddingInlineEnd": "",
    "paddingInlineStart": "",
    "paddingLeft": "",
    "paddingRight": "",
    "paddingTop": "",
    "page": "",
    "pageBreakAfter": "",
    "pageBreakBefore": "",
    "pageBreakInside": "",
    "pageOrientation": "",
    "paintOrder": "",
    "perspective": "",
    "perspectiveOrigin": "",
    "placeContent": "",
    "placeItems": "",
    "placeSelf": "",
    "pointerEvents": "",
    "position": "",
    "prefix": "",
    "quotes": "",
    "r": "",
    "range": "",
    "resize": "",
    "right": "",
    "rotate": "",
    "rowGap": "",
    "rubyPosition": "",
    "rx": "",
    "ry": "",
    "scale": "",
    "scrollBehavior": "",
    "scrollMargin": "",
    "scrollMarginBlock": "",
    "scrollMarginBlockEnd": "",
    "scrollMarginBlockStart": "",
    "scrollMarginBottom": "",
    "scrollMarginInline": "",
    "scrollMarginInlineEnd": "",
    "scrollMarginInlineStart": "",
    "scrollMarginLeft": "",
    "scrollMarginRight": "",
    "scrollMarginTop": "",
    "scrollPadding": "",
    "scrollPaddingBlock": "",
    "scrollPaddingBlockEnd": "",
    "scrollPaddingBlockStart": "",
    "scrollPaddingBottom": "",
    "scrollPaddingInline": "",
    "scrollPaddingInlineEnd": "",
    "scrollPaddingInlineStart": "",
    "scrollPaddingLeft": "",
    "scrollPaddingRight": "",
    "scrollPaddingTop": "",
    "scrollSnapAlign": "",
    "scrollSnapStop": "",
    "scrollSnapType": "",
    "scrollTimeline": "",
    "scrollTimelineAxis": "",
    "scrollTimelineName": "",
    "scrollbarGutter": "",
    "shapeImageThreshold": "",
    "shapeMargin": "",
    "shapeOutside": "",
    "shapeRendering": "",
    "size": "",
    "sizeAdjust": "",
    "speak": "",
    "speakAs": "",
    "src": "",
    "stopColor": "",
    "stopOpacity": "",
    "stroke": "",
    "strokeDasharray": "",
    "strokeDashoffset": "",
    "strokeLinecap": "",
    "strokeLinejoin": "",
    "strokeMiterlimit": "",
    "strokeOpacity": "",
    "strokeWidth": "",
    "suffix": "",
    "symbols": "",
    "syntax": "",
    "system": "",
    "tabSize": "",
    "tableLayout": "",
    "textAlign": "",
    "textAlignLast": "",
    "textAnchor": "",
    "textCombineUpright": "",
    "textDecoration": "",
    "textDecorationColor": "",
    "textDecorationLine": "",
    "textDecorationSkipInk": "",
    "textDecorationStyle": "",
    "textDecorationThickness": "",
    "textEmphasis": "",
    "textEmphasisColor": "",
    "textEmphasisPosition": "",
    "textEmphasisStyle": "",
    "textIndent": "",
    "textOrientation": "",
    "textOverflow": "",
    "textRendering": "",
    "textShadow": "",
    "textSizeAdjust": "",
    "textTransform": "",
    "textUnderlineOffset": "",
    "textUnderlinePosition": "",
    "textWrap": "",
    "timelineScope": "",
    "top": "",
    "touchAction": "",
    "transform": "",
    "transformBox": "",
    "transformOrigin": "",
    "transformStyle": "",
    "transition": "",
    "transitionBehavior": "",
    "transitionDelay": "",
    "transitionDuration": "",
    "transitionProperty": "",
    "transitionTimingFunction": "",
    "translate": "",
    "unicodeBidi": "",
    "unicodeRange": "",
    "userSelect": "",
    "vectorEffect": "",
    "verticalAlign": "",
    "viewTimeline": "",
    "viewTimelineAxis": "",
    "viewTimelineInset": "",
    "viewTimelineName": "",
    "viewTransitionName": "",
    "visibility": "",
    "webkitAlignContent": "",
    "webkitAlignItems": "",
    "webkitAlignSelf": "",
    "webkitAnimation": "",
    "webkitAnimationDelay": "",
    "webkitAnimationDirection": "",
    "webkitAnimationDuration": "",
    "webkitAnimationFillMode": "",
    "webkitAnimationIterationCount": "",
    "webkitAnimationName": "",
    "webkitAnimationPlayState": "",
    "webkitAnimationTimingFunction": "",
    "webkitAppRegion": "",
    "webkitAppearance": "",
    "webkitBackfaceVisibility": "",
    "webkitBackgroundClip": "",
    "webkitBackgroundOrigin": "",
    "webkitBackgroundSize": "",
    "webkitBorderAfter": "",
    "webkitBorderAfterColor": "",
    "webkitBorderAfterStyle": "",
    "webkitBorderAfterWidth": "",
    "webkitBorderBefore": "",
    "webkitBorderBeforeColor": "",
    "webkitBorderBeforeStyle": "",
    "webkitBorderBeforeWidth": "",
    "webkitBorderBottomLeftRadius": "",
    "webkitBorderBottomRightRadius": "",
    "webkitBorderEnd": "",
    "webkitBorderEndColor": "",
    "webkitBorderEndStyle": "",
    "webkitBorderEndWidth": "",
    "webkitBorderHorizontalSpacing": "",
    "webkitBorderImage": "",
    "webkitBorderRadius": "",
    "webkitBorderStart": "",
    "webkitBorderStartColor": "",
    "webkitBorderStartStyle": "",
    "webkitBorderStartWidth": "",
    "webkitBorderTopLeftRadius": "",
    "webkitBorderTopRightRadius": "",
    "webkitBorderVerticalSpacing": "",
    "webkitBoxAlign": "",
    "webkitBoxDecorationBreak": "",
    "webkitBoxDirection": "",
    "webkitBoxFlex": "",
    "webkitBoxOrdinalGroup": "",
    "webkitBoxOrient": "",
    "webkitBoxPack": "",
    "webkitBoxReflect": "",
    "webkitBoxShadow": "",
    "webkitBoxSizing": "",
    "webkitClipPath": "",
    "webkitColumnBreakAfter": "",
    "webkitColumnBreakBefore": "",
    "webkitColumnBreakInside": "",
    "webkitColumnCount": "",
    "webkitColumnGap": "",
    "webkitColumnRule": "",
    "webkitColumnRuleColor": "",
    "webkitColumnRuleStyle": "",
    "webkitColumnRuleWidth": "",
    "webkitColumnSpan": "",
    "webkitColumnWidth": "",
    "webkitColumns": "",
    "webkitFilter": "",
    "webkitFlex": "",
    "webkitFlexBasis": "",
    "webkitFlexDirection": "",
    "webkitFlexFlow": "",
    "webkitFlexGrow": "",
    "webkitFlexShrink": "",
    "webkitFlexWrap": "",
    "webkitFontFeatureSettings": "",
    "webkitFontSmoothing": "",
    "webkitHyphenateCharacter": "",
    "webkitJustifyContent": "",
    "webkitLineBreak": "",
    "webkitLineClamp": "",
    "webkitLocale": "",
    "webkitLogicalHeight": "",
    "webkitLogicalWidth": "",
    "webkitMarginAfter": "",
    "webkitMarginBefore": "",
    "webkitMarginEnd": "",
    "webkitMarginStart": "",
    "webkitMask": "",
    "webkitMaskBoxImage": "",
    "webkitMaskBoxImageOutset": "",
    "webkitMaskBoxImageRepeat": "",
    "webkitMaskBoxImageSlice": "",
    "webkitMaskBoxImageSource": "",
    "webkitMaskBoxImageWidth": "",
    "webkitMaskClip": "",
    "webkitMaskComposite": "",
    "webkitMaskImage": "",
    "webkitMaskOrigin": "",
    "webkitMaskPosition": "",
    "webkitMaskPositionX": "",
    "webkitMaskPositionY": "",
    "webkitMaskRepeat": "",
    "webkitMaskSize": "",
    "webkitMaxLogicalHeight": "",
    "webkitMaxLogicalWidth": "",
    "webkitMinLogicalHeight": "",
    "webkitMinLogicalWidth": "",
    "webkitOpacity": "",
    "webkitOrder": "",
    "webkitPaddingAfter": "",
    "webkitPaddingBefore": "",
    "webkitPaddingEnd": "",
    "webkitPaddingStart": "",
    "webkitPerspective": "",
    "webkitPerspectiveOrigin": "",
    "webkitPerspectiveOriginX": "",
    "webkitPerspectiveOriginY": "",
    "webkitPrintColorAdjust": "",
    "webkitRtlOrdering": "",
    "webkitRubyPosition": "",
    "webkitShapeImageThreshold": "",
    "webkitShapeMargin": "",
    "webkitShapeOutside": "",
    "webkitTapHighlightColor": "",
    "webkitTextCombine": "",
    "webkitTextDecorationsInEffect": "",
    "webkitTextEmphasis": "",
    "webkitTextEmphasisColor": "",
    "webkitTextEmphasisPosition": "",
    "webkitTextEmphasisStyle": "",
    "webkitTextFillColor": "",
    "webkitTextOrientation": "",
    "webkitTextSecurity": "",
    "webkitTextSizeAdjust": "",
    "webkitTextStroke": "",
    "webkitTextStrokeColor": "",
    "webkitTextStrokeWidth": "",
    "webkitTransform": "",
    "webkitTransformOrigin": "",
    "webkitTransformOriginX": "",
    "webkitTransformOriginY": "",
    "webkitTransformOriginZ": "",
    "webkitTransformStyle": "",
    "webkitTransition": "",
    "webkitTransitionDelay": "",
    "webkitTransitionDuration": "",
    "webkitTransitionProperty": "",
    "webkitTransitionTimingFunction": "",
    "webkitUserDrag": "",
    "webkitUserModify": "",
    "webkitUserSelect": "",
    "webkitWritingMode": "",
    "whiteSpace": "",
    "whiteSpaceCollapse": "",
    "widows": "",
    "width": "",
    "willChange": "",
    "wordBreak": "",
    "wordSpacing": "",
    "wordWrap": "",
    "writingMode": "",
    "x": "",
    "y": "",
    "zIndex": "",
    "zoom": ""
};
// window对象
// 删除浏览器中不存在的对象
delete global;
delete GLOBAL;
delete Buffer;
delete buffer;
delete VMError;
delete process;
delete Thread;
delete SharedArrayBuffer;
delete KNBCore;
delete root;
delete module;
delete __filename;
delete __dirname;
delete Thread;
delete globalThis[Symbol.toStringTag];
delete WindowProperties;


frames = parent = top = self = window = globalThis;


if (vm2) {
    window.__proto__ = Window.prototype;
} else {
    Object.setPrototypeOf(window, Window.prototype);
}
//! Object.setPrototypeOf()函数在vm2环境里下设置window(全局对象)的__proto__失效

//*--------------------------------------------------------------------------
//todo 属性
dingvm.toolsFunc.defineProperty(window, "atob", {
    configurable: true, enumerable: true, writable: true,
    value: function atob(str) {
        return dingvm.toolsFunc.base64.base64decode(str);
    }
});
dingvm.toolsFunc.defineProperty(window, "btoa", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function btoa(str) {
        return dingvm.toolsFunc.base64.base64encode(str);
    }
});
dingvm.toolsFunc.defineProperty(window, "name", {
    configurable: true, enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "name_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "name_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "location", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "location_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "location_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "self", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "self_get", arguments)
    },
    // set: function () {
    //     return dingvm.toolsFunc.dispatch(this, window, "window", "self_set", arguments)
    // }
});
dingvm.toolsFunc.defineProperty(window, "top", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "top_get", arguments)
    },
    // set: undefined
});
dingvm.toolsFunc.defineProperty(window, "frames", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "frames_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "frames_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "indexedDB", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "indexedDB_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "openDatabase", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function (name, version, displayName, estimatedSize) {
        return dingvm.toolsFunc.dispatch(this, window, "window", "openDatabase", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "getComputedStyle", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "getComputedStyle", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "innerWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "innerWidth_get", arguments, 1536)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "innerWidth_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "innerHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "innerHeight_get", arguments, 792)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "innerHeight_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "outerWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "outerWidth_get", arguments, 1536)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "outerWidth_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "outerHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "outerHeight_get", arguments, 864)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "outerHeight_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "styleMedia", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "styleMedia_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "crypto", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "crypto_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "visualViewport", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "visualViewport_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "visualViewport_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "external", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "external_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "external_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "chrome", {
    configurable: false,
    enumerable: true,
    writable: true,
    value: chrome_
});
dingvm.toolsFunc.defineProperty(window, "DeviceMotionEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DeviceMotionEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DeviceOrientationEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DeviceOrientationEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "open", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "open", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "fetch", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "fetch", arguments)
    }
});

//*--------------------------------------------------------------------------
//todo 方法
alert = function () {
};
dingvm.toolsFunc.safeFunc(alert, 'alert');

scrollBy = function () {
};
dingvm.toolsFunc.safeFunc(scrollBy, 'scrollBy');

scrollTo = function () {
};
dingvm.toolsFunc.safeFunc(scrollTo, 'scrollTo');

PerformancePaintTiming = function PerformancePaintTiming() {
};
dingvm.toolsFunc.safeFunc(PerformancePaintTiming, 'PerformancePaintTiming');

SVGGraphicsElement = function SVGGraphicsElement() {
};
dingvm.toolsFunc.safeFunc(SVGGraphicsElement, 'SVGGraphicsElement');

CDATASection = function CDATASection() {
};
dingvm.toolsFunc.safeFunc(CDATASection, "CDATASection");

Path2D = function Path2D() {
};
dingvm.toolsFunc.safeFunc(Path2D, "Path2D");

MediaEncryptedEvent = function MediaEncryptedEvent() {
};
dingvm.toolsFunc.safeFunc(MediaEncryptedEvent, "MediaEncryptedEvent");

ScreenOrientation = function ScreenOrientation() {
};
dingvm.toolsFunc.safeFunc(ScreenOrientation, "ScreenOrientation");

SourceBuffer = function SourceBuffer() {
};
dingvm.toolsFunc.safeFunc(SourceBuffer, "SourceBuffer");

SpeechSynthesisUtterance = function SpeechSynthesisUtterance() {
};
dingvm.toolsFunc.safeFunc(SpeechSynthesisUtterance, "SpeechSynthesisUtterance");

HTMLFrameSetElement = function HTMLFrameSetElement() {
};
dingvm.toolsFunc.safeFunc(HTMLFrameSetElement, "HTMLFrameSetElement");

DOMParser = function DOMParser() {
};
dingvm.toolsFunc.safeFunc(DOMParser, "DOMParser");

webkitResolveLocalFileSystemURL = function webkitResolveLocalFileSystemURL() {
};
dingvm.toolsFunc.safeFunc(webkitResolveLocalFileSystemURL, 'webkitResolveLocalFileSystemURL');

webkitSpeechGrammar = function () {
};
dingvm.toolsFunc.safeFunc(webkitSpeechGrammar, 'webkitSpeechGrammar');

//*--------------------------------------------------------------------------

function Image(width, height) {
    let img = document.createElement('img');
    img.width = width;
    img.height = height;

    return img
}

dingvm.toolsFunc.safeFunc(Image, 'Image');
dingvm.toolsFunc.defineProperty(window, "Image", {
    enumerable: false,
});

//*--------------------------------------------------------------------------

//* 常见属性值
window.length = 0;
window.scrollX = 0;
window.screenY = 0;
window.pageXOffset = 0;
window.pageYOffset = 0;
window.screenX = 0;
window.screenY = 0;
window.screenLeft = 0;
window.screenTop = 0;
window.devicePixelRatio = 1.25;
window.osversion = "win10";
//* 凑数 检测了window属性个数
window.isSecureContext = true;
window.originAgentCluster = false;
//* on···事件
window.onsearch = null;
window.onappinstalled = null;
window.onbeforeinstallprompt = null;
window.onbeforexrselect = null;
window.onmessage = null;
window.onbeforexrselect = null;
window.onabort = null;
window.onblur = null;
window.oncancel = null;
window.oncanplay = null;
window.oncanplaythrough = null;
window.onchange = null;
window.onclick = null;
window.onclose = null;
window.oncontextmenu = null;
window.oncuechange = null;
window.ondblclick = null;
window.ondrag = null;
window.ondragend = null;
window.ondragenter = null;
window.ondragleave = null;
window.ondragover = null;
window.ondragstart = null;
window.ondrop = null;
window.ondurationchange = null;
window.onemptied = null;
window.onended = null;
window.onerror = null;
window.onfocus = null;
window.onformdata = null;
window.oninput = null;
window.oninvalid = null;
window.onkeydown = null;
window.onkeypress = null;
window.onkeyup = null;
window.onload = null;
window.onloadeddata = null;
window.onloadedmetadata = null;
window.onloadstart = null;
window.onmousedown = null;
window.onmouseenter = null;
window.onmouseleave = null;
window.onmousemove = null;
window.onmouseout = null;
window.onmouseover = null;
window.onmouseup = null;
window.onmousewheel = null;
window.onpause = null;
window.onplay = null;
window.onplaying = null;
window.onprogress = null;
window.onratechange = null;
window.onreset = null;
window.onresize = null;
window.onscroll = null;
window.onseeked = null;
window.onseeking = null;
window.onselect = null;
window.onstalled = null;
window.onsubmit = null;
window.onsuspend = null;
window.ontimeupdate = null;
window.ontoggle = null;
window.onvolumechange = null;
window.onwaiting = null;
window.onwebkitanimationend = null;
window.onwebkitanimationiteration = null;
window.onwebkitanimationstart = null;
window.onwebkittransitionend = null;
window.onwheel = null;
window.onauxclick = null;
window.ongotpointercapture = null;
window.onlostpointercapture = null;
window.onpointerdown = null;
window.onpointermove = null;
window.onpointerup = null;
window.onpointercancel = null;
window.onpointerover = null;
window.onpointerout = null;
window.onpointerleave = null;
window.onselectstart = null;
window.onselectionchange = null;
window.onanimationend = null;
window.onanimationiteration = null;
window.onanimationstart = null;
window.ontransitionrun = null;
window.ontransitionstart = null;
window.ontransitionend = null;
window.ontransitioncancel = null;
window.onafterprint = null;
window.onafterprint = null;
window.onbeforeprint = null;
window.onbeforeunload = null;
window.onhashchange = null;
window.onlanguagechange = null;
window.onmessage = null;
window.onmessageerror = null;
window.onoffline = null;
window.ononline = null;
window.onpagehide = null;
window.onpageshow = null;
window.onpopstate = null;
window.onrejectionhandled = null;
window.onstorage = null;
window.onunhandledrejection = null;
window.onunload = null;;
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

}();;
// 需要代理的对象(先开始全局对象)
localStorage = dingvm.toolsFunc.proxy(localStorage, "localStorage");
sessionStorage = dingvm.toolsFunc.proxy(sessionStorage, "sessionStorage");
location = dingvm.toolsFunc.proxy(location, "location");
document = dingvm.toolsFunc.proxy(document, "document");
navigator = dingvm.toolsFunc.proxy(navigator, "navigator");
history = dingvm.toolsFunc.proxy(history, "history");
screen = dingvm.toolsFunc.proxy(screen, "screen");
parent = top = self = window = dingvm.toolsFunc.proxy(window, "window"); // me too
// globalThis = window 或 global = window 会出现大量信息，但好像并没有用，都是内置属性和函数的信息 下面伪造this也一样

//todo 伪造this  注意不能用自执行函数(function定义的)执行被加密的代码，不然this不是被代理的window
// window.code = function() { 被加密的代码 } window.code()

//todo 如果代理失效，单独使用下面这个方法
// window = {}
// window = dingvm.toolsFunc.proxy(window,"window");
// Object.setPrototypeOf(globalThis,window);
// global删不删看情况
;
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

}();;
delete globalThis['Database'];
delete globalThis['SQLTransaction'];;
debugger

for (let i of navigator.plugins[0]) {
    console.log(i)
}

debugger;
