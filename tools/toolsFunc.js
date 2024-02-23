// 插件功能相关

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

    // 获取随机数
    dingvm.toolsFunc.random = function (min, max, floating = false) {
        if (floating) {
            return Math.random() * (max - min) + min;
        } else {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

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
        proxyObj = new Proxy(proxyObj, handler);
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

    // 迭代器
    dingvm.toolsFunc.iterator = function () {
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
    dingvm.toolsFunc.reNameFunc(dingvm.toolsFunc.iterator, "values");

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
