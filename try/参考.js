debugger
// 全局配置
xfvm ={
    "toolsFunc":{},// 功能函数相关，插件
    "config":{}, // 配置相关
    "envFunc":{}, // 分发器
    "memory": {} // 内存
};
xfvm.config.proxy = false;
xfvm.config.printLog = true; // 日志是否输出
xfvm.memory.symbolProxy = Symbol("proxy"); // 独一的属性
xfvm.memory.filterProxyProp = [xfvm.memory.symbolProxy,"eval"]; // 需要过滤的属性
xfvm.memory.symbolData = Symbol("data");// 用来保存当前对象上的原型属性
xfvm.memory.tag = []; // 用来存储标签对象
xfvm.memory.asyncEvent = {}; // 储存异步对象
xfvm.memory.globalVar = {}; //储存全局变量
xfvm.memory.globalVar.jsonCookie = {}; // cookie 存储

xfvm.memory.globalVar.fontFamily = ["SimHei","SimSun","NSimSun","FangSong","KaiTi"];

// xfvm.memory.globalVar.domTree = [];

// 插件功能相关
!function(){
    // 解析url
    xfvm.toolsFunc.parseURL = function parseURL(strUrl){
        let [protocol, rest] = strUrl.split("://");
        // 解析主机名和路径
        let urllist = rest.split("/");
        let hostname_and_port = urllist.shift();
        let pathname = urllist.join("/").split("?")[0]
        let [hostname, port] = hostname_and_port.split(":");
        let search  = strUrl.split("?")[1];
        // 构造 URL 对象
        let parsedUrl = {
            protocol: protocol+":",
            host: hostname_and_port,
            search: "?"+search,
            hash: "",
            hostname: hostname,
            port: port,
            pathname: "/" + pathname,
        };
        return parsedUrl;
    }
    // 创建MimeType
    xfvm.toolsFunc.createMimeType = function createMimeType(mimeTypeJson, plugin){
        let mimeType = {};
        xfvm.toolsFunc.createProxyObj(mimeType,MimeType,"mimeType");
        xfvm.toolsFunc.setProtoArr.call(mimeType,"description",mimeTypeJson.description);
        xfvm.toolsFunc.setProtoArr.call(mimeType,"suffixes",mimeTypeJson.suffixes);
        xfvm.toolsFunc.setProtoArr.call(mimeType,"type",mimeTypeJson.type);
        xfvm.toolsFunc.setProtoArr.call(mimeType,"enabledPlugin",plugin);
        xfvm.toolsFunc.addMinetype(mimeType);
        return mimeType;
    }
    //创建MimeTypeArray
    xfvm.toolsFunc.createMimeTypeArray = function createMimeTypeArray(){
        let mimeTypeArray = {};
        mimeTypeArray = xfvm.toolsFunc.createProxyObj(mimeTypeArray,MimeTypeArray,"mimeTypeArray");
        xfvm.toolsFunc.setProtoArr.call(mimeTypeArray,"length",0);
        return mimeTypeArray;
    }
    // 添加mimeTypes
    xfvm.toolsFunc.addMinetype = function addMinetype(mimeType){
        let mimeTypeArray = xfvm.memory.globalVar.mimeTypeArray;
        if(mimeTypeArray === undefined){
            mimeTypeArray = xfvm.toolsFunc.createMimeTypeArray();
        }
        let index = mimeTypeArray.length;
        let flag = true;
        for(let i=0;i<index;i++){
            if(mimeTypeArray[i].type === mimeType.type){
                flag = false;
            }
        }
        if(flag){
            mimeTypeArray[index] = mimeType;
            Object.defineProperty(mimeTypeArray,mimeType.type,{value: mimeType, writable: false, enumerable: false, configurable: true});
            xfvm.toolsFunc.setProtoArr.call(mimeTypeArray,"length",index+1);
        }

        xfvm.memory.globalVar.mimeTypeArray = mimeTypeArray;
        return mimeTypeArray;
    }
    // 创建pluginArray对象
    xfvm.toolsFunc.createPluginArray = function createPluginArray(){
        let pluginArray = {};
        pluginArray = xfvm.toolsFunc.createProxyObj(pluginArray,PluginArray,"pluginArray");
        xfvm.toolsFunc.setProtoArr.call(pluginArray,"length",0);
        return pluginArray;
    }
    // 添加plugin
    xfvm.toolsFunc.addPlugin = function addPlugin(plugin){
        let pluginArray = xfvm.memory.globalVar.pluginArray;
        if(pluginArray === undefined){
            pluginArray = xfvm.toolsFunc.createPluginArray();
        }
        let index = pluginArray.length;
        pluginArray[index] = plugin;
        Object.defineProperty(pluginArray,plugin.name,{value: plugin, writable: false, enumerable: true, configurable: true});
        xfvm.toolsFunc.setProtoArr.call(pluginArray,"length",index+1);
        xfvm.memory.globalVar.pluginArray = pluginArray;
        return pluginArray;
    }
    // 创建plugin
    xfvm.toolsFunc.createPlugin = function createPlugin(data){
        let mimeTypes = data.mimeTypes;
        let plugin = {};
        plugin = xfvm.toolsFunc.createProxyObj(plugin,Plugin,"plugin");
        xfvm.toolsFunc.setProtoArr.call(plugin,"description",data.description);
        xfvm.toolsFunc.setProtoArr.call(plugin,"filename",data.filename);
        xfvm.toolsFunc.setProtoArr.call(plugin,"name",data.name);
        xfvm.toolsFunc.setProtoArr.call(plugin,"length",mimeTypes.length);
        for(let i=0;i<mimeTypes.length;i++){
            let mimeType = xfvm.toolsFunc.createMimeType(mimeTypes[i],plugin);
            plugin[i] = mimeType;
            Object.defineProperty(plugin,mimeTypes[i].type,{value: mimeType, writable: false, enumerable: false, configurable: true});
        }
        xfvm.toolsFunc.addPlugin(plugin);
        return plugin;
    }

    // 解析单标签内容
    xfvm.toolsFunc.getTagJson = function getTagJson(tagStr){
        let arrList = tagStr.match("<(.*?)>")[1].split(" ");
        let tagJson = {};
        tagJson["type"] = arrList[0];
        tagJson["prop"] = {};
        for(let i=1;i<arrList.length;i++){
            let item = arrList[i].split("=");
            let key = item[0];
            let value = item[1].replaceAll("\"","").replaceAll("'","");
            tagJson["prop"][key] = value;
        }
        return tagJson;
    }
    // 获取对应标签
    xfvm.toolsFunc.getCollection = function getCollection(type){
        let collection = [];
        for(let i=0; i<xfvm.memory.tag.length;i++){
            let tag = xfvm.memory.tag[i];
            if(xfvm.toolsFunc.getType(tag) === type){
                collection.push(tag);
            }
        }
        return collection;
    }
    // 获取原型对象上自身属性值
    xfvm.toolsFunc.getProtoArr = function getProtoArr(key){
        return this[xfvm.memory.symbolData] && this[xfvm.memory.symbolData][key];
    }
    xfvm.toolsFunc.setProtoArr = function setProtoArr(key,value){
        if(!this.hasOwnProperty(xfvm.memory.symbolData)){
            Object.defineProperty(this,xfvm.memory.symbolData,{
                enumerable:false,
                configurable:false,
                writable:true,
                value:{}
            });
        }
        this[xfvm.memory.symbolData][key] = value;
    }
    // hook 插件
    xfvm.toolsFunc.hook = function(func, funcInfo,isDebug,onEnter,onLeave,isExec){
        // func： 原函数，需要hook的函数
        // funcInfo: 是一个对象，objName, funcName属性
        // isDebug: 布尔类型，是否进行调试，关键点定位，回溯调用栈
        // onEnter: 函数， 原函数执行前执行的函数，改原函数入参，或者输出入参
        // onLeave: 函数，原函数执行前完之后执行的函数，改原函数的返回值，或者输出原函数的返回值
        // isExec: 布尔， 是否执行原函数，比如无限debuger函数
        if(typeof func !== 'function'){
            return func;
        }
        if(funcInfo === undefined){
            funcInfo ={};
            funcInfo.objName = "globalThis";
            funcInfo.funcName = func.name || '';
        }
        if(isDebug === undefined){
            isDebug = false;
        }
        if(!onEnter){
            onEnter = function(obj){
                console.log(`{hook | ${funcInfo.objName}[${funcInfo.funcName}] 正在调用，参数是${JSON.stringify(obj.args)}}`);
            }
        }
        if(!onLeave){
            onLeave = function(obj){
                console.log(`{hook | ${funcInfo.objName}[${funcInfo.funcName}] 正在调用，返回值是${obj.result}}`);
            }
        }
        hookFunc = function(){
            if(isDebug){
                debugger;
            }
            let obj = {};
            obj.args = [];
            for (let i=0;i<arguments.length;i++){
                obj.args[i] = arguments[i];
            }
            onEnter.call(this,obj);
            let result;
            if(isExec){
                result = func.apply(this,obj.args);
            }
            obj.result = result;
            onLeave.call(this,obj);
            // xfvm.toolsFunc.set_Native(func,funcInfo.funcName);
            // xfvm.toolsFunc.reNameFunc(func,funcInfo.funcName);
            return obj.result;
        }
        xfvm.toolsFunc.set_Native(hookFunc,funcInfo.funcName);
        xfvm.toolsFunc.reNameFunc(hookFunc,funcInfo.funcName);
        return hookFunc;
    }
    // 获取对象类型
    xfvm.toolsFunc.getType = function getType(obj){
        return Object.prototype.toString.call(obj);
    }
    xfvm.toolsFunc.filterProxyProp = function filterProxyProp(prop){
        for(let i=0;i<xfvm.memory.filterProxyProp.length;i++){
            if(xfvm.memory.filterProxyProp[i] === prop){
                return true;
            }
        }
        return false;
    }
    // 过滤代理属性
    xfvm.toolsFunc.proxy = function proxy(obj,objName){
        if(!xfvm.config.proxy){
            return obj;
        }
        if(obj.hasOwnProperty(xfvm.memory.symbolProxy)){ // 判断是否为代理对象
            return obj[xfvm.memory.symbolProxy];
        }
        let handler = {
            get:function(target,prop,receiver){
                let result;
                try{
                    result = Reflect.get(target,prop,receiver) // 执行原函数
                    if(xfvm.toolsFunc.filterProxyProp(prop)){
                        return result;
                    }
                    let type = xfvm.toolsFunc.getType(result);
                    if(result instanceof Object){
                        console.log(`{get|obj:[${objName}] -> prop:[${prop.toString()}], type:[${type}]}`);
                        // 递归代理
                        result = xfvm.toolsFunc.proxy(result,`${objName}.${prop.toString()}`)
                    }else if(typeof result === "symbol"){
                        console.log(`{get|obj:[${objName}] -> prop:[${prop.toString()}], result:[${result.toString()}]}`);
                    }else{
                        console.log(`{get|obj:[${objName}] -> prop:[${prop.toString()}], result:[${result}]}`);
                    }
                }catch(e){
                    console.log(`{get|obj:[${objName}] -> prop:[${prop.toString()}], error:[${e.message}]}`);
                }
                return result;
            },
            set:function(target,prop,value,receiver){
                let result;
                try{
                    result = Reflect.set(target,prop,value) // 执行原函数
                    let type = xfvm.toolsFunc.getType(result);
                    if(value instanceof Object){
                        console.log(`{set|obj:[${objName}] -> prop:[${prop.toString()}], type:[${type}]}`);
                    }else if(typeof value === "symbol"){
                        console.log(`{set|obj:[${objName}] -> prop:[${prop.toString()}], value:[${value.toString()}]}`);
                    }else{
                        console.log(`{set|obj:[${objName}] -> prop:[${prop.toString()}], value:[${value}]}`);
                    }
                }catch(e){
                    console.log(`{set|obj:[${objName}] -> prop:[${prop.toString()}], error:[${e.message}]}`);
                }
                return result;
            },
            getOwnPropertyDescriptor:function(target,prop){
                let result;
                try{
                    result = Reflect.getOwnPropertyDescriptor(target,prop) // 执行原函数
                    let type = xfvm.toolsFunc.getType(result);
                    if("constructor" !== prop){
                        console.log(`{getOwnPropertyDescriptor|obj:[${objName}] -> prop:[${prop.toString()}], type:[${type}]}`);
                    }
                    // if(typeof result !== "undefined"){
                    //     result = xfvm.toolsFunc.proxy(result,`${objName}.${prop.toString()}.PropertyDescriptor`)
                    // }
                }catch(e){
                    console.log(`{getOwnPropertyDescriptor|obj:[${objName}] -> prop:[${prop.toString()}], error:[${e.message}]}`);
                }
                return result;
            },
            defineProperty:function(target,prop,descriptor){
                let result;
                try {
                    result = Reflect.defineProperty(target,prop,descriptor) // 执行原函数
                    console.log(`{defineProperty|obj:[${objName}] -> prop:[${prop.toString()}]}`);
                } catch (e) {
                    console.log(`{defineProperty|obj:[${objName}] -> prop:[${prop.toString()}], error:[${e.message}]}`);
                }
                return result;
            },
            apply:function(target,thisArg,argumentsList){
                let result;
                try {
                    result = Reflect.apply(target,thisArg,argumentsList);
                    let type = xfvm.toolsFunc.getType(result);
                    if(result instanceof Object){
                        console.log(`{apply|obj:[${objName}] , type:[${type}]} , args: ${JSON.stringify(argumentsList)}`);
                    }else if(typeof result === "symbol"){
                        console.log(`{apply|obj:[${objName}] , result:[${result.toString()}]} , args: ${JSON.stringify(argumentsList)}`);
                    }else{
                        console.log(`{apply|obj:[${objName}] , result:[${result}]} , args: ${JSON.stringify(argumentsList)}`);
                    }

                } catch (e) {
                    console.log(`{apply|obj:[${objName}] , error:[${e.message}]} , args: ${JSON.stringify(argumentsList)}`);
                }
                return result;
            },
            construct:function(target,argArray,newTarget){ // 拦截 创建对象
                let result;
                try {
                    result = Reflect.construct(target,argArray,newTarget);
                    let type = xfvm.toolsFunc.getType(result);
                    console.log(`{construct|obj:[${objName}] , type:[${type}]}`);
                } catch (e) {
                    console.log(`{construct|obj:[${objName}] , error:[${e.message}]}`);
                }
                return result
            },
            deleteProperty:function(target,propKey){ // 删除属于
                let result = Reflect.deleteProperty(target,propKey);
                console.log(`{deleteProperty|obj:[${objName}] -> prop:[${propKey.toString()}], result:[${result}]}`);
                return result;
            },
            has:function(target,propKey){ // in 操作符
                let result = Reflect.has(target,propKey);
                if(propKey !== xfvm.memory,symbolProxy){
                    console.log(`{deleteProperty|obj:[${objName}] -> prop:[${propKey.toString()}], result:[${result}]}`);
                }
                return result;
            },
            ownKeys:function(target){ // 遍历对象
                let result = Reflect.ownKeys(target);
                console.log(`{ownKeys|obj:[${objName}]}`);
                return result;
            },
            getPrototypeOf:function(target){  // 获取原型对象
                let result = Reflect.getPrototypeOf(target);
                console.log( `{getPrototypeOf|obj:[${objName}]}`);
                return result;
            },
            setPrototypeOf:function(target,proto){ // 设置原型对象
                let result = Reflect.setPrototypeOf(target,proto);
                console.log( `{setPrototypeOf|obj:[${objName}]}`);
                return result;
            },
            preventExtensions:function(target){
                let result = Reflect.preventExtensions(target);
                console.log( `{preventExtensions|obj:[${objName}]}`);
                return result;
            },
            isExtensible:function(target){
                let result = Reflect.isExtensible(target);
                console.log( `{isExtensible|obj:[${objName}]}`);
                return result;
            }
        };
        let proxyObj = new Proxy(obj,handler);
        Object.defineProperty(obj,xfvm.memory.symbolProxy,{
            configurable:false,
            enumerable:false,
            writable:false,
            value:proxyObj
        });
        return proxyObj;
    }
    // createProxyObj
    xfvm.toolsFunc.createProxyObj = function createProxyObj(obj,proto,objName){
        Object.setPrototypeOf(obj,proto.prototype);

        let num = 1;
        for(let i=0; i<xfvm.memory.tag.length;i++){
            if(obj instanceof proto){
                num += 1;
            }
        }
        objName += `_ID(${num})`;
        return xfvm.toolsFunc.proxy(obj,objName);
    }
    // env 分发器
    xfvm.toolsFunc.dispatch = function dispatch(self,obj,objName, funcName,argList, defaultValue){
        let name = `${objName}_${funcName}`;
        if(Object.getOwnPropertyDescriptor(obj,"constructor")){
            if(Object.getOwnPropertyDescriptor(self,"constructor")){
                return xfvm.toolsFunc.throwError("TypeError","Illegal invocation");
            }
        }
        try {
            return xfvm.envFunc[name].apply(self,argList);
        } catch (error) {
            if(defaultValue === undefined){
                console.log(`[${name}] 正在执行， error: ${error.message}]`);
            }
            return defaultValue;
        }
    }
    // 定义对象属性defineProperty
    xfvm.toolsFunc.defineProperty = function defineProperty(obj,prop,oldDescriptor){
        let newDescriptor = {};
        newDescriptor.configurable = xfvm.config.proxy || oldDescriptor.configurable;
        newDescriptor.enumerable = oldDescriptor.enumerable;
        if(oldDescriptor.hasOwnProperty("writable")){
            newDescriptor.writable = xfvm.config.proxy || oldDescriptor.writable;
        }
        if(oldDescriptor.hasOwnProperty("value")){
            let value = oldDescriptor.value;
            if(typeof value === "function"){
                xfvm.toolsFunc.safeFunc(value,prop);
            }
            newDescriptor.value = value;
        }
        if(oldDescriptor.hasOwnProperty("set")){
            let set = oldDescriptor.set;
            if(typeof set === "function"){
                xfvm.toolsFunc.safeFunc(set,`set ${prop}`);
            }
            newDescriptor.set = set;
        }
        if(oldDescriptor.hasOwnProperty("get")){
            let get = oldDescriptor.get;
            if(typeof get === "function"){
                xfvm.toolsFunc.safeFunc(get,`get ${prop}`);
            }
            newDescriptor.get = get;
        }
        Object.defineProperty(obj,prop,newDescriptor);
    }
    // 函数native化
    !function(){
        const $toString = Function.prototype.toString;
        const symbol = Symbol();
        const myToString = function(){
            return typeof this === 'function' && this[symbol] || $toString.call(this);
        }
        function set_native(func,key,value){
            Object.defineProperty(func,key,{
                enumerable:false,
                configurable:true,
                writable:true,
                value:value
            });
        }
        delete Function.prototype.toString;
        set_native(Function.prototype, "toString", myToString);
        set_native(Function.prototype.toString,symbol,"function toString() { [native code] }");
        xfvm.toolsFunc.set_Native = function(func,funcname){
            set_native(func,symbol,`function ${funcname || func.name || ''}() { [native code] } `);
        }
    }();
    // 对象重命名
    xfvm.toolsFunc.reNameObj = function reNameObj(obj,name){
        Object.defineProperty(obj.prototype,Symbol.toStringTag,{
            configurable: true,
            enumerable: false,
            value: name,
            writable: false
        })
    };
    // 函数重命名
    xfvm.toolsFunc.reNameFunc = function reNameFunc(func,name){
        Object.defineProperty(func,"name",{
            configurable: true,
            enumerable: false,
            value: name,
            writable: false
        })
    };
    // 函数保护方法
    xfvm.toolsFunc.safeFunc = function safeFunc(func,name){
        xfvm.toolsFunc.set_Native(func,name);
        xfvm.toolsFunc.reNameFunc(func,name);
    }
    // 对象保护
    xfvm.toolsFunc.safeProto = function safeProto(obj,name){
        xfvm.toolsFunc.set_Native(obj,name);
        xfvm.toolsFunc.reNameObj(obj,name);
    }
    // 抛出异常
    xfvm.toolsFunc.throwError = function throwError(name,message){
        let e = new Error();
        e.name = name;
        e.message = message;
        e.stack = `${name}: ${message}\n    at snippet://`;
        throw e;
    };
    // Base64
    function Base64_() {

        // private property
        _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        // public method for encoding
        this.encode = function(input) {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;
            input = _utf8_encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output +
                    _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                    _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
            }
            return output;
        }

        // public method for decoding
        this.decode = function(input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = _keyStr.indexOf(input.charAt(i++));
                enc2 = _keyStr.indexOf(input.charAt(i++));
                enc3 = _keyStr.indexOf(input.charAt(i++));
                enc4 = _keyStr.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
            }
            output = _utf8_decode(output);
            return output;
        }

        // private method for UTF-8 encoding
        _utf8_encode = function(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }

            }
            return utftext;
        }

        // private method for UTF-8 decoding
        _utf8_decode = function(utftext) {
            var string = "";
            var i = 0;
            var c = c1 = c2 = 0;
            while (i < utftext.length) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                } else if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }
            return string;
        }
    }
    xfvm.toolsFunc.base64 = new Base64_();
}();
// 浏览器接口具体的实现
!function(){
    xfvm.envFunc.Document_readyState_get = function Document_readyState_get(){
        return "complete"
    }
    xfvm.envFunc.Node_compareDocumentPosition = function Node_compareDocumentPosition(){
        xfvm.toolsFunc.throwError("TypeError","Illegal invocation");
    }
    xfvm.envFunc.NodeList_length_get = function NodeList_length_get(){
        return 0;
    }
    xfvm.envFunc.CharacterData_data_set = function CharacterData_data_set(){
        let value = arguments[0];
        return xfvm.toolsFunc.setProtoArr.call(this,"data",value);
    }
    xfvm.envFunc.HTMLOptionElement_disabled_get = function HTMLOptionElement_disabled_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"disabled")
    }
    xfvm.envFunc.HTMLOptionElement_selected_get = function HTMLOptionElement_selected_get(){
        return false
    }
    xfvm.envFunc.HTMLSelectElement_disabled_set = function HTMLSelectElement_disabled_set(){
        let value =arguments[0];
        return xfvm.toolsFunc.setProtoArr.call(this,"disabled",value)
    }
    xfvm.envFunc.Node_removeChild = function Node_removeChild(){
        console.log("当前节点被删除请关注：",this);
        return this
    }
    xfvm.envFunc.Node_ownerDocument_get = function Node_ownerDocument_get(){
        let htmlDocument  = xfvm.memory.globalVar.htmlDocument || {};
        htmlDocument = xfvm.toolsFunc.createProxyObj(htmlDocument,HTMLDocument,"htmlDocument");
        return htmlDocument;
    }
    xfvm.envFunc.Node_lastChild_get = function Node_lastChild_get(){
        return this;
    }
    xfvm.envFunc.Node_cloneNode = function Node_cloneNode(){
        return this;
    }
    xfvm.envFunc.Node_nodeType_set = function Node_nodeType_set(){
        let value = arguments[0];
        return xfvm.toolsFunc.setProtoArr.call(this,"nodeType",value);
    }
    xfvm.envFunc.Node_nodeType_get = function Node_nodeType_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"nodeType");
    }
    xfvm.envFunc.Node_childNodes_set = function Node_childNodes_set(){
        let nodelist = arguments[0];
        htmlElement = document.createElement("html");
        documentType = {};
        documentType = xfvm.toolsFunc.createProxyObj(documentType,DocumentType,"documentType")
        nodelist.push(documentType);
        nodelist.push(htmlElement);
        nodelist = xfvm.toolsFunc.createProxyObj(nodelist,NodeList,"nodelist");
        return xfvm.toolsFunc.getProtoArr.call(this,"childNodes",nodelist);
    }
    xfvm.envFunc.Node_childNodes_get = function Node_childNodes_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"childNodes");
    }
    xfvm.envFunc.Document_defaultView_get = function Document_defaultView_get(){
        return window
    }
    xfvm.envFunc.Document_all_get = function Document_all_get(){
        console.log('Document_all_get 正在执行 可能设计环境检测');
        debugger;
        let all = xfvm.memory.globalVar.all || {};
        all = Object.setPrototypeOf(all,HTMLAllCollection.prototype);
        return all;
    }
    xfvm.envFunc.Document_documentElement_get = function Document_documentElement_get(){
        let htmlElement = xfvm.toolsFunc.getCollection('[object HTMLHtmlElement]')[0]
        return htmlElement;
    }
    xfvm.envFunc.Document_createDocumentFragment = function Document_createDocumentFragment(){
        let documentFragment = {};
        documentFragment = xfvm.toolsFunc.createProxyObj(documentFragment,DocumentFragment,"DocumentFragment");
        return documentFragment;
    }
    xfvm.envFunc.EventTarget_addEventListener = function EventTarget_addEventListener(){
        let type = arguments[0];
        let listener = arguments[1];
        let options = arguments[2];
        let event = {
            "self":this,
            "type":type,
            "listener":listener,
            "options":options
        }
        if (xfvm.memory.asyncEvent.listener === undefined){
            xfvm.memory.asyncEvent.listener = [];
        }
        if(xfvm.memory.asyncEvent.listener[type] === undefined){
            xfvm.memory.asyncEvent.listener[type] = [];
        }
        xfvm.memory.asyncEvent.listener[type].push(event);
    }
    xfvm.envFunc.BatteryManager_level_get = function BatteryManager_level_get(){
        return 1;
    }
    xfvm.envFunc.BatteryManager_chargingTime_get = function BatteryManager_chargingTime_get(){
        return 0;
    }
    xfvm.envFunc.BatteryManager_charging_get = function BatteryManager_charging_get(){
        return true;
    }
    xfvm.envFunc.Navigator_getBattery = function Navigator_getBattery(){
        // return new Promise(function(resolve){
        //     let batteryManager ={};
        //     batteryManager = xfvm.toolsFunc.createProxyObj(batteryManager,BatteryManager, "batteryManager");
        //     return resolve(batteryManager);
        // })
        let batteryManager ={};
        batteryManager = xfvm.toolsFunc.createProxyObj(batteryManager,BatteryManager, "batteryManager");
        let obj = {
            "then":function(callBack){
                let _callBack = callBack;
                callBack = function(){
                    return _callBack(batteryManager);
                }
                if(xfvm.memory.asyncEvent.promise === undefined){
                    xfvm.memory.asyncEvent.promise = [];
                }
                xfvm.memory.asyncEvent.promise.push(callBack)
            }
        }
        return obj;


    }
    xfvm.envFunc.Navigator_product_get = function Navigator_product_get(){
        return "Gecko";
    }
    xfvm.envFunc.Navigator_userAgent_get = function Navigator_userAgent_get(){
        return "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36";
    }
    xfvm.envFunc.Navigator_appVersion_get = function Navigator_appVersion_get(){
        return "5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
    }
    xfvm.envFunc.Navigator_webkitPersistentStorage_get = function Navigator_webkitPersistentStorage_get(){
        debugger
        let webkitPersistentStorage ={};
        var w = Object.setPrototypeOf(webkitPersistentStorage,DeprecatedStorageQuota.prototype);
        delete webkitPersistentStorage;
        return w;
    }
    xfvm.envFunc.XMLHttpRequest_open = function XMLHttpRequest_open(){

        let method = arguments[0];
        let url = arguments[1];
        console.log(url)
        return url;
    }
    xfvm.envFunc.Plugin_namedItem = function Plugin_namedItem(){
        let type = arguments[0];
        return this[type];
    }
    xfvm.envFunc.Plugin_item = function Plugin_item(){
        let index = arguments[0];
        return this[index];
    }
    xfvm.envFunc.Plugin_filename_get = function Plugin_filename_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"filename");
    }
    xfvm.envFunc.Plugin_description_get = function Plugin_description_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"description");
    }
    xfvm.envFunc.Plugin_length_get = function Plugin_length_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"length");
    }
    xfvm.envFunc.Plugin_name_get = function Plugin_name_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"name");
    }
    xfvm.envFunc.PluginArray_length_get = function PluginArray_length_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"length");
    }
    xfvm.envFunc.PluginArray_item = function PluginArray_item(){
        let index = arguments[0];
        return this[index];
    }
    xfvm.envFunc.PluginArray_namedItem = function PluginArray_namedItem(){
        let name = arguments[0];
        return this[name];
    }
    xfvm.envFunc.MimeTypeArray_length_get = function MimeTypeArray_length_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"length");
    }
    xfvm.envFunc.MimeTypeArray__namedItem = function MimeTypeArray__namedItem(){
        let name = arguments[0];
        return this[name];
    }
    xfvm.envFunc.MimeTypeArray__item = function MimeTypeArray__item(){
        let index = arguments[0];
        return this[index];
    }
    xfvm.envFunc.MimeType_type_get = function MimeType_type_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"type");
    }
    xfvm.envFunc.MimeType_description_get = function MimeType_description_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"description");
    }
    xfvm.envFunc.MimeType_enabledPlugin_get = function MimeType_enabledPlugin_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"enabledPlugin");
    }
    xfvm.envFunc.MimeType_suffixes_get = function MimeType_suffixes_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"suffixes");
    }
    xfvm.envFunc.Navigator_plugins_get = function Navigator_plugins_get(){
        debugger
        console.log("Navigator_plugins_get 在执行")
        return xfvm.memory.globalVar.pluginArray;
    }
    xfvm.envFunc.Navigator_languages_get = function Navigator_languages_get(){
        return ["zh-CN"]
    }
    xfvm.envFunc.Navigator_mimeTypes_get = function Navigator_mimeTypes_get(){
        return xfvm.memory.globalVar.mimeTypeArray;
    }
    xfvm.envFunc.location_protocol_set = function location_protocol_set(){
        let value = arguments[0];
        return xfvm.toolsFunc.setProtoArr.call(this,"protocol",value);
    }
    xfvm.envFunc.location_protocol_get = function location_protocol_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"protocol")
    }
    xfvm.envFunc.location_hostname_set = function location_hostname_set(){
        let value = arguments[0];
        return xfvm.toolsFunc.setProtoArr.call(this,"hostname",value);
    }
    xfvm.envFunc.location_hostname_get = function location_hostname_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"hostname")
    }
    xfvm.envFunc.location_href_get = function location_href_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"href");
    }
    xfvm.envFunc.location_href_set = function location_href_set(){
        let url = arguments[0];
        if(url.indexOf("http") === -1 && url.indexOf("www") === -1){
            url = location.protocol + "//" + location.hostname + url;
        }else if(url.indexOf("www") !== -1){
            url = location.protocol + "//"  + url;
        }
        urlObj = xfvm.toolsFunc.parseURL(url)
        xfvm.toolsFunc.setProtoArr.call(this,"protocol",urlObj.protocol);
        xfvm.toolsFunc.setProtoArr.call(this,"host",urlObj.host);
        xfvm.toolsFunc.setProtoArr.call(this,"hash",urlObj.hash);
        xfvm.toolsFunc.setProtoArr.call(this,"hostname",urlObj.hostname);
        xfvm.toolsFunc.setProtoArr.call(this,"port",urlObj.port);
        xfvm.toolsFunc.setProtoArr.call(this,"pathname",urlObj.pathname);
        return xfvm.toolsFunc.setProtoArr.call(this,"href",url);
    }
    xfvm.envFunc.location_port_get = function location_port_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"port");
    }
    xfvm.envFunc.location_host_get = function location_host_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"host");
    }
    xfvm.envFunc.location_hostname_get = function location_hostname_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"hostname");
    }
    xfvm.envFunc.location_origin_get = function location_origin_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"origin");
    }
    xfvm.envFunc.location_pathname_get = function location_pathname_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"pathname");
    }
    xfvm.envFunc.location_protocol_get = function location_protocol_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"protocol");
    }
    xfvm.envFunc.location_hash_get = function location_hash_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"hash");
    }
    xfvm.envFunc.window_self_get = function window_self_get(){
        return window;
    };
    xfvm.envFunc.window_top_get = function window_top_get(){
        return window;
    };
    xfvm.envFunc.window_name_get = function window_name_get(){
        debugger
        if(!xfvm.toolsFunc.getProtoArr.call(this,"name")){
            return ""
        }
        return xfvm.toolsFunc.getProtoArr.call(this,"name");
    };
    xfvm.envFunc.window_name_set = function window_name_set(){
        debugger
        return xfvm.toolsFunc.setProtoArr.call(this,"name");
    };
    xfvm.envFunc.window_parent_get = function window_parent_get(){
        return window;
    };
    xfvm.envFunc.window_setTimeout = function window_setTimeout(){
        let func = arguments[0];
        let delay = arguments[1] || 0;
        let length = arguments.length;
        let args = [];
        for(let i=2;i<length;i++){
            args.push(arguments[i]);
        }
        let type = 1;
        if (typeof func !== "function"){
            type = 0;
        }
        let event = {
            "callback":func,
            "delay":delay,
            "args":args,
            "type":1, // 1代表函数， 0代表是字符串代码eval(code)
        }
        if(xfvm.memory.asyncEvent.setTimeout === undefined){
            xfvm.memory.asyncEvent.setTimeout=[];
        }
        xfvm.memory.asyncEvent.setTimeout.push(event);
        return xfvm.memory.asyncEvent.setTimeout.length;
    }
    xfvm.envFunc.window_setInterval = function window_setInterval(){
        let func = arguments[0];
        let delay = arguments[1] || 0;
        let length = arguments.length;
        let args = [];
        for(let i=2;i<length;i++){
            args.push(arguments[i]);
        }
        let type = 1;
        if (typeof func !== "function"){
            type = 0;
        }
        let event = {
            "callback":func,
            "delay":delay,
            "args":args,
            "type":1, // 1代表函数， 0代表是字符串代码eval(code)
        }
        if(xfvm.memory.asyncEvent.setTimeout === undefined){
            xfvm.memory.asyncEvent.setTimeout=[];
        }
        xfvm.memory.asyncEvent.setTimeout.push(event);
        return xfvm.memory.asyncEvent.setTimeout.length;
    }
    xfvm.envFunc.window_clearTimeout = function window_clearTimeout(){
        let timeoutId = arguments[0];
        xfvm.memory.asyncEvent.setTimeout.splice(timeoutId-1,1)
    }
    xfvm.envFunc.Storage_setItem = function Storage_setItem(){
        let keyName = arguments[0];
        let keyValue = arguments[1];
        this[keyName] = keyValue;
    }
    xfvm.envFunc.Storage_getItem = function Storage_getItem(){
        let keyName = arguments[0];
        if(keyName in this){
            return this[keyName];
        }
        return null;
    }
    xfvm.envFunc.Storage_removeItem = function Storage_removeItem(){
        let keyName = arguments[0];
        delete this[keyName];
    }
    xfvm.envFunc.Storage_key = function Storage_key(){
        let index = arguments[0];
        let i = 0;
        for(const key in this){
            if(i === index){
                return key;
            }
            i++;
        }
        return null;
    }
    xfvm.envFunc.Storage_clear = function storage_clear(){
        for(const key in this){
            delete this[key];
        }
    }
    xfvm.envFunc.Document_createComment = function Document_createComment(){
        let value = arguments[0];
        let comment = {};
        comment = xfvm.toolsFunc.createProxyObj(comment,Comment,"comment");
        comment.data = value;
        return comment
    }
    xfvm.envFunc.Document_cookie_get = function Document_cookie_get(){
        let jsonCookie = xfvm.memory.globalVar.jsonCookie;
        let tempCookie = "";
        for(const key in jsonCookie){
            if(key === ""){
                tempCookie += `${jsonCookie[key]}; `;
            }else{
                tempCookie += `${key}=${jsonCookie[key]}; `;
            }
        }
        return tempCookie;
    }
    xfvm.envFunc.Document_cookie_set = function Document_cookie_set(){
        let strCookie = arguments[0];
        subStr = strCookie.split(";")[0].split("=");
        xfvm.memory.globalVar.jsonCookie[subStr.shift()] = subStr.join("");
        return document.cookie;
    }
    xfvm.envFunc.Document_createElement = function Document_createElement(){
        let tagName = arguments[0].toLowerCase(); // 转小写
        let options = arguments[1];
        let tag = {};
        switch (tagName){
            case "div":
                tag = xfvm.toolsFunc.createProxyObj(tag,HTMLDivElement,`Document_createElement_${tagName}`);
                xfvm.memory.tag.push(tag);
                break;
            case "meta":
                tag = xfvm.toolsFunc.createProxyObj(tag,HTMLMetaElement,`Document_createElement_${tagName}`);
                xfvm.memory.tag.push(tag);
                break;
            case "head":
                tag = xfvm.toolsFunc.createProxyObj(tag,HTMLHeadElement,`Document_createElement_${tagName}`);
                xfvm.memory.tag.push(tag);
                break;
            case "input":
                tag = xfvm.toolsFunc.createProxyObj(tag,HTMLInputElement,`Document_createElement_${tagName}`);
                xfvm.memory.tag.push(tag);
                break;
            case "a":
                tag = xfvm.toolsFunc.createProxyObj(tag,HTMLAnchorElement,`Document_createElement_${tagName}`);
                xfvm.memory.tag.push(tag);
                break;
            case "canvas":
                tag = xfvm.toolsFunc.createProxyObj(tag,HTMLCanvasElement,`Document_createElement_${tagName}`);
                xfvm.memory.tag.push(tag);
                break;
            case "body":
                tag = xfvm.toolsFunc.createProxyObj(tag,HTMLBodyElement,`Document_createElement_${tagName}`);
                xfvm.toolsFunc.setProtoArr.call(tag,"tagName","BODY")
                xfvm.memory.tag.push(tag);
                break;
            case "span":
                tag = xfvm.toolsFunc.createProxyObj(tag,HTMLSpanElement,`Document_createElement_${tagName}`);
                xfvm.memory.tag.push(tag);
                break;
            case "html":
                tag = xfvm.toolsFunc.createProxyObj(tag,HTMLHtmlElement,`Document_createElement_${tagName}`);
                xfvm.memory.tag.push(tag);
                break;
            case "option":
                tag = xfvm.toolsFunc.createProxyObj(tag,HTMLOptionElement,`Document_createElement_${tagName}`);
                xfvm.memory.tag.push(tag);
                break;
            case "select":
                tag = xfvm.toolsFunc.createProxyObj(tag,HTMLSelectElement,`Document_createElement_${tagName}`);
                xfvm.memory.tag.push(tag);
                break;
            case "t":
                tag = xfvm.toolsFunc.createProxyObj(tag,HTMLUnknownElement,`Document_createElement_${tagName}`);
                xfvm.memory.tag.push(tag);
                break;
            case "form":
                tag = xfvm.toolsFunc.createProxyObj(tag,HTMLUnknownElement,`Document_createElement_${tagName}`);
                xfvm.memory.tag.push(tag);
                break;
            case "!":
                xfvm.toolsFunc.throwError("DOMException","Failed to execute 'createElement' on 'Document': The tag name provided ('!') is not a valid name.");
            default:
                console.log(`Document_createElement [ ${tagName} ] 未实现`);
                break;
        }
        xfvm.toolsFunc.setProtoArr.call(tag,"localName",tagName);
        return tag;
    }
    xfvm.envFunc.Document_characterSet_get = function Document_characterSet_get(){
        return "UTF-8"
    }
    xfvm.envFunc.Document_write = function Document_write(){
        let tagStr = arguments[0];
        // 解析标签字符串
        let tagJson = xfvm.toolsFunc.getTagJson(tagStr);
        let tag = document.createElement(tagJson.type);
        for(const key in tagJson.prop){
            tag[key] = tagJson.prop[key];
            if(tag[key] === undefined){
                xfvm.toolsFunc.setProtoArr(tag,key,tagJson.prop[key]);
            }
        }
    }
    xfvm.envFunc.Document_getElementsByTagName = function Document_getElementsByTagName(){
        let tagName = arguments[0].toLowerCase();
        let collection =[];
        switch (tagName){
            case "meta":
                collection = xfvm.toolsFunc.getCollection('[object HTMLMetaElement]')
                collection = xfvm.toolsFunc.createProxyObj(collection,HTMLCollection,`Document_getElementsByTagName_${tagName}`);
                break;
            default:
                break;
        }
        return collection
    }
    xfvm.envFunc.Document_getElementById = function Document_getElementById(){
        let id = arguments[0];
        let tags = xfvm.memory.tag;
        for(let i = 0; i< tags.length;i++){
            if(tags[i].id === id){
                return tags[i];
            }
        }
        return null;
    }
    xfvm.envFunc.Document_body_get = function Document_body_get(){
        let collection = xfvm.toolsFunc.getCollection('[object HTMLBodyElement]')
        return collection[0];
    }
    xfvm.envFunc.HTMLElement_style_get = function HTMLElement_style_get(){
        let style = xfvm.toolsFunc.getProtoArr.call(this,"style");
        let all = style || {};
        return Object.setPrototypeOf(all,CSSStyleDeclaration.prototype);
        // return style
    }
    xfvm.envFunc.HTMLDivElement_align_get = function HTMLDivElement_align_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"align")
    }
    xfvm.envFunc.HTMLDivElement_align_set = function HTMLDivElement_align_set(){
        let value = arguments[0];
        return xfvm.toolsFunc.setProtoArr.call(this,"align",value);
    }
    xfvm.envFunc.HTMLMetaElement_content_get = function HTMLMetaElement_content_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"content")
    }
    xfvm.envFunc.HTMLMetaElement_content_set = function HTMLMetaElement_content_set(){
        let value = arguments[0];
        return xfvm.toolsFunc.setProtoArr.call(this,"content",value);
    }
    xfvm.envFunc.HTMLInputElement_type_set = function HTMLInputElement_type_set(){
        let value = arguments[0];
        return xfvm.toolsFunc.setProtoArr.call(this,"type",value);
    }
    xfvm.envFunc.HTMLInputElement_type_get = function HTMLInputElement_type_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"type");
    }
    xfvm.envFunc.HTMLInputElement_name_set = function HTMLInputElement_name_set(){
        let value = arguments[0];
        return xfvm.toolsFunc.setProtoArr.call(this,"name",value);
    }
    xfvm.envFunc.HTMLInputElement_name_get = function HTMLInputElement_name_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"name");
    }
    xfvm.envFunc.HTMLInputElement_value_set = function HTMLInputElement_value_set(){
        let value = arguments[0];
        return xfvm.toolsFunc.setProtoArr.call(this,"value",value);
    }
    xfvm.envFunc.HTMLInputElement_value_get = function HTMLInputElement_value_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"value");
    }
    xfvm.envFunc.HTMLAnchorElement_href_set = function HTMLAnchorElement_href_set(){
        let url = arguments[0];
        if(url.indexOf("http") === -1 && url.indexOf("www") === -1){
            url = location.protocol + "//" + location.hostname + url;
        }else if(url.indexOf("www") !== -1){
            url = location.protocol + "//"  + url;
        }
        urlObj = xfvm.toolsFunc.parseURL(url)
        xfvm.toolsFunc.setProtoArr.call(this,"protocol",urlObj.protocol);
        xfvm.toolsFunc.setProtoArr.call(this,"host",urlObj.host);
        xfvm.toolsFunc.setProtoArr.call(this,"search",urlObj.search);
        xfvm.toolsFunc.setProtoArr.call(this,"hash",urlObj.hash);
        xfvm.toolsFunc.setProtoArr.call(this,"hostname",urlObj.hostname);
        xfvm.toolsFunc.setProtoArr.call(this,"port","");
        xfvm.toolsFunc.setProtoArr.call(this,"pathname",urlObj.pathname);
        return xfvm.toolsFunc.setProtoArr.call(this,"href",url);
    }
    xfvm.envFunc.HTMLAnchorElement_href_get = function HTMLAnchorElement_href_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"href");

    }
    xfvm.envFunc.HTMLAnchorElement_protocol_get = function HTMLAnchorElement_protocol_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"protocol")
    }
    xfvm.envFunc.HTMLAnchorElement_host_get = function HTMLAnchorElement_host_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"host")
    }
    xfvm.envFunc.HTMLAnchorElement_search_get = function HTMLAnchorElement_search_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"search")
    }
    xfvm.envFunc.HTMLAnchorElement_hash_get = function HTMLAnchorElement_hash_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"hash")
    }
    xfvm.envFunc.HTMLAnchorElement_hostname_get = function HTMLAnchorElement_hostname_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"hostname")
    }
    xfvm.envFunc.HTMLAnchorElement_port_get = function HTMLAnchorElement_port_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"port")
    }
    xfvm.envFunc.HTMLAnchorElement_pathname_get = function HTMLAnchorElement_pathname_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"pathname")
    }
    xfvm.envFunc.HTMLCanvasElement_width_set = function HTMLCanvasElement_width_set(){
        let value = arguments[0];
        return xfvm.toolsFunc.setProtoArr.call(this,"width",value);
    }
    xfvm.envFunc.HTMLCanvasElement_width_get = function HTMLCanvasElement_width_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"width");
    }
    xfvm.envFunc.HTMLCanvasElement_height_set = function HTMLCanvasElement_height_set(){
        let value = arguments[0];
        return xfvm.toolsFunc.setProtoArr.call(this,"height",value);
    }
    xfvm.envFunc.HTMLCanvasElement_height_get = function HTMLCanvasElement_height_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"height");
    }
    xfvm.envFunc.HTMLCanvasElement_getContext = function HTMLCanvasElement_getContext(){
        let value = arguments[0];
        let context = {};
        switch (value){
            case "2d":
                context = xfvm.toolsFunc.createProxyObj(context,CanvasRenderingContext2D,"context_2d");
                break;
            case "webgl":
                context = xfvm.toolsFunc.createProxyObj(context,WebGLRenderingContext,"context_webgl");
                break;
            case "webgl2":
                context = xfvm.toolsFunc.createProxyObj(context,WebGL2RenderingContext,"context_webgl2");
                break;
            case "bitmaprenderer":
                context = xfvm.toolsFunc.createProxyObj(context,ImageBitmapRenderingContext,"context_bitmaprenderer");
                break;
            default:
                console.log(`HTMLCanvasElement_getContext [ ${tagName} ] 未实现`);
                break;
        }
        return context;
    }
    xfvm.envFunc.Node_parentNode_get = function Node_parentNode_get(){
        console.log("当前对象正在访问父节点请处理：",this)
        // return xfvm.toolsFunc.getProtoArr.call(this,"parentNode");
        return this
    }
    xfvm.envFunc.Node_appendChild = function Node_appendChild(){
        let tag = arguments[0];
        let collection = xfvm.toolsFunc.getProtoArr.call(this,"children");
        if(collection === undefined){
            collection = [];
            collection.push(tag);
            collection = xfvm.toolsFunc.createProxyObj(collection,HTMLCollection,"collection");
        }else{
            collection.push(tag);
        }
        xfvm.toolsFunc.setProtoArr.call(this,"children",collection);
        return tag;

    }
    xfvm.envFunc.Node_firstChild_get = function Node_firstChild_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"children")[0];
    }
    xfvm.envFunc.Element_id_set = function Element_id_set(){
        let value = arguments[0];
        return xfvm.toolsFunc.setProtoArr.call(this,"id",value);
    }
    xfvm.envFunc.Element_id_get = function Element_id_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"id");
    }
    xfvm.envFunc.Element_setAttribute = function Element_setAttribute(){
        let type = arguments[0];
        let value = arguments[1];
        xfvm.toolsFunc.getCollection(Object.prototype.toString.call(this));
        xfvm.toolsFunc.setProtoArr.call(this,type,value);
        if(type === "href"){
            urlObj = xfvm.toolsFunc.parseURL(value)
            xfvm.toolsFunc.setProtoArr.call(this,"protocol",urlObj.protocol);
            xfvm.toolsFunc.setProtoArr.call(this,"host",urlObj.host);
            xfvm.toolsFunc.setProtoArr.call(this,"search",urlObj.search);
            xfvm.toolsFunc.setProtoArr.call(this,"hash",urlObj.hash);
            xfvm.toolsFunc.setProtoArr.call(this,"hostname",urlObj.hostname);
            xfvm.toolsFunc.setProtoArr.call(this,"port",urlObj.port);
            xfvm.toolsFunc.setProtoArr.call(this,"pathname",urlObj.pathname);
        }
        return;

    }
    xfvm.envFunc.Element_getElementsByTagName = function Element_getElementsByTagName(){
        let str = arguments[0].toLowerCase();
        let htmlCollection = [];
        if(str === "*"){
            xfvm.memory.tag.map(function(value){
                htmlCollection.push(value);
            })
        }else{
            xfvm.memory.tag.map(function(value){
                let nane = xfvm.toolsFunc.getProtoArr.call(value,"localName");
                if(nane === str){
                    htmlCollection.push(value);
                }
            })
        }
        htmlCollection = xfvm.toolsFunc.createProxyObj(htmlCollection,HTMLCollection,"htmlCollection");
        return htmlCollection

    }
    xfvm.envFunc.Element_innerHTML_set = function Element_innerHTML_set(){
        console.log("Element_innerHTML_set  执行  本方法未完成 ")
        let htmlStr = arguments[0];
        console.log("Element_innerHTML_set：",htmlStr)
        var childTag = document.createElement("div");
        if(htmlStr.indexOf("span") !== -1){
            // '<span lang="zh" style="font-family:mmll;font-size:160px">fontTest</span>'
            // <span lang="zh" style="font-family:mmllii;font-size:114px">mmmmmmmmmmmlliii</span>
            var style = {
                0:"font-family",
                1:"font-size",
                "fontFamily":"mmllii",
                "fontSize":"114px",
            }
            style = xfvm.toolsFunc.createProxyObj(style,CSSStyleDeclaration,"style");
            var tagJson = {
                "type":"span",
                "prop":{
                    "lang":"zh",
                    "style":style,
                    "textContent":"mmmmmmmmmmmlliii"
                }
            }
            childTag = document.createElement(tagJson["type"]);
        }
        for (const key in tagJson["prop"]) {
            xfvm.toolsFunc.setProtoArr.call(childTag,key,tagJson["prop"][key]);
        }
        let collection = xfvm.toolsFunc.getProtoArr.call(this,"children");
        if(collection === undefined){
            collection = [];
            collection.push(childTag);
            // collection = xfvm.toolsFunc.createProxyObj(collection,HTMLCollection,"collection");
        }else{
            collection.push(childTag);
        }
        xfvm.toolsFunc.setProtoArr.call(this,"children",collection);
        return htmlStr
    }
    xfvm.envFunc.Element_className_set = function Element_className_set(){
        let value = arguments[0];
        return xfvm.toolsFunc.setProtoArr.call(this,"className",Element_className_set)
    }
    xfvm.envFunc.Element_getAttribute = function Element_getAttribute(){
        let value = arguments[0];
        return xfvm.toolsFunc.getProtoArr.call(this,value);
    }
    xfvm.envFunc.Element_children_get = function Element_children_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"children");
    }
    xfvm.envFunc.Element_tagName_get = function Element_tagName_get(){
        return xfvm.toolsFunc.getProtoArr.call(this,"tagName")
    }
    xfvm.envFunc.Element_querySelectorAll = function Element_querySelectorAll(){
        let value = arguments[0];
        console.log("Element_querySelectorAll 执行中 参数：",value)
        if(value === "*,:x"){
            xfvm.toolsFunc.throwError("TypeError","Illegal invocation");
        }

        let nodeList = {};
        return xfvm.toolsFunc.createProxyObj(nodeList,NodeList,"nodeList");
    }
    xfvm.envFunc.HTMLElement_offsetWidth_get = function HTMLElement_offsetWidth_get(){
        if(xfvm.memory.globalVar.fontFamily.map(x => x.toLowerCase()).includes(this.style.fontFamily.toLowerCase())){
            return 644
        }else{
            return 636
        }
    }
    xfvm.envFunc.HTMLElement_offsetHeight_get = function HTMLElement_offsetHeight_get(){
        if(xfvm.memory.globalVar.fontFamily.map(x => x.toLowerCase()).includes(this.style.fontFamily.toLowerCase())){
            return 161
        }else{
            return 212
        }
    }
    xfvm.envFunc.HTMLCanvasElement_toDataURL = function HTMLCanvasElement_toDataURL(){

        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEaElEQVR4Xu3UgQkAMAwCQbv/0C10i4fLBHIGz7Y7R4AAgYDAMViBlkQkQOALGCyPQIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiDwAMDYlgE33+xyAAAAAElFTkSuQmCC";
    }

}();
// env相关代码
EventTarget = function EventTarget(){
}

xfvm.toolsFunc.safeProto(EventTarget,"EventTarget");

xfvm.toolsFunc.defineProperty(EventTarget.prototype,"addEventListener",{
    configurable: true,
    enumerable: true,
    value:function addEventListener(){
        return xfvm.toolsFunc.dispatch(this,EventTarget.prototype,"EventTarget","addEventListener",arguments,"defaultValue")
    },
    writable: true
})
EventTarget = function EventTarget(){}
xfvm.toolsFunc.safeProto(EventTarget,"EventTarget");
xfvm.toolsFunc.defineProperty(EventTarget.prototype,"addEventListener",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,EventTarget.prototype,"EventTarget","addEventListener",arguments)}});
xfvm.toolsFunc.defineProperty(EventTarget.prototype,"dispatchEvent",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,EventTarget.prototype,"EventTarget","dispatchEvent",arguments)}});
xfvm.toolsFunc.defineProperty(EventTarget.prototype,"removeEventListener",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,EventTarget.prototype,"EventTarget","removeEventListener",arguments)}});
WindowProperties = function WindowProperties(){
    xfvm.toolsFunc.throwError("TypeError","WindowProperties is not defined");
}
xfvm.toolsFunc.safeProto(WindowProperties,"WindowProperties");
// 删除构造方法
delete WindowProperties.prototype.constructor;
Object.setPrototypeOf(WindowProperties.prototype,EventTarget.prototype);
Window =function Window(){
    xfvm.toolsFunc.throwError("TypeError","Illegal constructor");
};
// 保护Window对象
xfvm.toolsFunc.safeProto(Window,"Window");
// 设置Window.protytype的原型对象
Object.setPrototypeOf(Window.prototype,WindowProperties.prototype);

// Window: 原型属性
xfvm.toolsFunc.defineProperty(Window,"PERSISTENT",{
    configurable: false,
    enumerable: true,
    value: 1,
    writable: false
});
xfvm.toolsFunc.defineProperty(Window,"TEMPORARY",{
    configurable: false,
    enumerable: true,
    value: 0,
    writable: false
});
// Window.prototype: 原型对象属性
xfvm.toolsFunc.defineProperty(Window.prototype,"PERSISTENT",{
    configurable: false,
    enumerable: true,
    value: 1,
    writable: false
});
xfvm.toolsFunc.defineProperty(Window.prototype,"TEMPORARY",{
    configurable: false,
    enumerable: true,
    value: 0,
    writable: false
});
// Node对象
Node = function Node(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(Node,"Node");
Object.setPrototypeOf(Node.prototype,EventTarget.prototype);
xfvm.toolsFunc.defineProperty(Node,"ELEMENT_NODE",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(Node,"ATTRIBUTE_NODE",{configurable:false, enumerable:true,writable:false,value:2});
xfvm.toolsFunc.defineProperty(Node,"TEXT_NODE",{configurable:false, enumerable:true,writable:false,value:3});
xfvm.toolsFunc.defineProperty(Node,"CDATA_SECTION_NODE",{configurable:false, enumerable:true,writable:false,value:4});
xfvm.toolsFunc.defineProperty(Node,"ENTITY_REFERENCE_NODE",{configurable:false, enumerable:true,writable:false,value:5});
xfvm.toolsFunc.defineProperty(Node,"ENTITY_NODE",{configurable:false, enumerable:true,writable:false,value:6});
xfvm.toolsFunc.defineProperty(Node,"PROCESSING_INSTRUCTION_NODE",{configurable:false, enumerable:true,writable:false,value:7});
xfvm.toolsFunc.defineProperty(Node,"COMMENT_NODE",{configurable:false, enumerable:true,writable:false,value:8});
xfvm.toolsFunc.defineProperty(Node,"DOCUMENT_NODE",{configurable:false, enumerable:true,writable:false,value:9});
xfvm.toolsFunc.defineProperty(Node,"DOCUMENT_TYPE_NODE",{configurable:false, enumerable:true,writable:false,value:10});
xfvm.toolsFunc.defineProperty(Node,"DOCUMENT_FRAGMENT_NODE",{configurable:false, enumerable:true,writable:false,value:11});
xfvm.toolsFunc.defineProperty(Node,"NOTATION_NODE",{configurable:false, enumerable:true,writable:false,value:12});
xfvm.toolsFunc.defineProperty(Node,"DOCUMENT_POSITION_DISCONNECTED",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(Node,"DOCUMENT_POSITION_PRECEDING",{configurable:false, enumerable:true,writable:false,value:2});
xfvm.toolsFunc.defineProperty(Node,"DOCUMENT_POSITION_FOLLOWING",{configurable:false, enumerable:true,writable:false,value:4});
xfvm.toolsFunc.defineProperty(Node,"DOCUMENT_POSITION_CONTAINS",{configurable:false, enumerable:true,writable:false,value:8});
xfvm.toolsFunc.defineProperty(Node,"DOCUMENT_POSITION_CONTAINED_BY",{configurable:false, enumerable:true,writable:false,value:16});
xfvm.toolsFunc.defineProperty(Node,"DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC",{configurable:false, enumerable:true,writable:false,value:32});
xfvm.toolsFunc.defineProperty(Node.prototype,"nodeType",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","nodeType_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","nodeType_set",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"nodeName",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","nodeName_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","nodeName_set",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"baseURI",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","baseURI_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","baseURI_set",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"isConnected",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","isConnected_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","isConnected_set",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"ownerDocument",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","ownerDocument_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","ownerDocument_set",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"parentNode",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","parentNode_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","parentNode_set",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"parentElement",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","parentElement_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","parentElement_set",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"childNodes",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","childNodes_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","childNodes_set",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"firstChild",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","firstChild_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","firstChild_set",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"lastChild",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","lastChild_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","lastChild_set",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"previousSibling",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","previousSibling_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","previousSibling_set",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"nextSibling",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","nextSibling_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","nextSibling_set",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"nodeValue",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","nodeValue_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","nodeValue_set",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"textContent",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","textContent_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","textContent_set",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"ELEMENT_NODE",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(Node.prototype,"ATTRIBUTE_NODE",{configurable:false, enumerable:true,writable:false,value:2});
xfvm.toolsFunc.defineProperty(Node.prototype,"TEXT_NODE",{configurable:false, enumerable:true,writable:false,value:3});
xfvm.toolsFunc.defineProperty(Node.prototype,"CDATA_SECTION_NODE",{configurable:false, enumerable:true,writable:false,value:4});
xfvm.toolsFunc.defineProperty(Node.prototype,"ENTITY_REFERENCE_NODE",{configurable:false, enumerable:true,writable:false,value:5});
xfvm.toolsFunc.defineProperty(Node.prototype,"ENTITY_NODE",{configurable:false, enumerable:true,writable:false,value:6});
xfvm.toolsFunc.defineProperty(Node.prototype,"PROCESSING_INSTRUCTION_NODE",{configurable:false, enumerable:true,writable:false,value:7});
xfvm.toolsFunc.defineProperty(Node.prototype,"COMMENT_NODE",{configurable:false, enumerable:true,writable:false,value:8});
xfvm.toolsFunc.defineProperty(Node.prototype,"DOCUMENT_NODE",{configurable:false, enumerable:true,writable:false,value:9});
xfvm.toolsFunc.defineProperty(Node.prototype,"DOCUMENT_TYPE_NODE",{configurable:false, enumerable:true,writable:false,value:10});
xfvm.toolsFunc.defineProperty(Node.prototype,"DOCUMENT_FRAGMENT_NODE",{configurable:false, enumerable:true,writable:false,value:11});
xfvm.toolsFunc.defineProperty(Node.prototype,"NOTATION_NODE",{configurable:false, enumerable:true,writable:false,value:12});
xfvm.toolsFunc.defineProperty(Node.prototype,"DOCUMENT_POSITION_DISCONNECTED",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(Node.prototype,"DOCUMENT_POSITION_PRECEDING",{configurable:false, enumerable:true,writable:false,value:2});
xfvm.toolsFunc.defineProperty(Node.prototype,"DOCUMENT_POSITION_FOLLOWING",{configurable:false, enumerable:true,writable:false,value:4});
xfvm.toolsFunc.defineProperty(Node.prototype,"DOCUMENT_POSITION_CONTAINS",{configurable:false, enumerable:true,writable:false,value:8});
xfvm.toolsFunc.defineProperty(Node.prototype,"DOCUMENT_POSITION_CONTAINED_BY",{configurable:false, enumerable:true,writable:false,value:16});
xfvm.toolsFunc.defineProperty(Node.prototype,"DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC",{configurable:false, enumerable:true,writable:false,value:32});
xfvm.toolsFunc.defineProperty(Node.prototype,"appendChild",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","appendChild",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"cloneNode",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","cloneNode",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"compareDocumentPosition",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","compareDocumentPosition",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"contains",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","contains",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"getRootNode",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","getRootNode",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"hasChildNodes",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","hasChildNodes",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"insertBefore",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","insertBefore",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"isDefaultNamespace",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","isDefaultNamespace",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"isEqualNode",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","isEqualNode",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"isSameNode",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","isSameNode",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"lookupNamespaceURI",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","lookupNamespaceURI",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"lookupPrefix",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","lookupPrefix",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"normalize",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","normalize",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"removeChild",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","removeChild",arguments)}});
xfvm.toolsFunc.defineProperty(Node.prototype,"replaceChild",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Node.prototype,"Node","replaceChild",arguments)}});

// Element对象
Element = function Element(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(Element,"Element");
Object.setPrototypeOf(Element.prototype,Node.prototype);
xfvm.toolsFunc.defineProperty(Element.prototype,"namespaceURI",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","namespaceURI_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","namespaceURI_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"prefix",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","prefix_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","prefix_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"localName",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","localName_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","localName_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"tagName",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","tagName_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","tagName_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"id",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","id_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","id_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"className",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","className_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","className_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"classList",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","classList_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","classList_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"slot",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","slot_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","slot_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"attributes",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","attributes_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","attributes_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"shadowRoot",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","shadowRoot_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","shadowRoot_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"part",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","part_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","part_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"assignedSlot",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","assignedSlot_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","assignedSlot_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"innerHTML",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","innerHTML_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","innerHTML_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"outerHTML",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","outerHTML_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","outerHTML_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"scrollTop",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","scrollTop_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","scrollTop_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"scrollLeft",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","scrollLeft_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","scrollLeft_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"scrollWidth",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","scrollWidth_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","scrollWidth_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"scrollHeight",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","scrollHeight_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","scrollHeight_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"clientTop",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","clientTop_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","clientTop_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"clientLeft",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","clientLeft_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","clientLeft_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"clientWidth",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","clientWidth_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","clientWidth_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"clientHeight",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","clientHeight_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","clientHeight_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"attributeStyleMap",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","attributeStyleMap_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","attributeStyleMap_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"onbeforecopy",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onbeforecopy_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onbeforecopy_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"onbeforecut",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onbeforecut_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onbeforecut_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"onbeforepaste",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onbeforepaste_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onbeforepaste_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"onsearch",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onsearch_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onsearch_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"elementTiming",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","elementTiming_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","elementTiming_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"onfullscreenchange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onfullscreenchange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onfullscreenchange_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"onfullscreenerror",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onfullscreenerror_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onfullscreenerror_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"onwebkitfullscreenchange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onwebkitfullscreenchange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onwebkitfullscreenchange_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"onwebkitfullscreenerror",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onwebkitfullscreenerror_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onwebkitfullscreenerror_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"onbeforexrselect",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onbeforexrselect_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","onbeforexrselect_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"children",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","children_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","children_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"firstElementChild",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","firstElementChild_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","firstElementChild_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"lastElementChild",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","lastElementChild_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","lastElementChild_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"childElementCount",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","childElementCount_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","childElementCount_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"previousElementSibling",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","previousElementSibling_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","previousElementSibling_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"nextElementSibling",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","nextElementSibling_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","nextElementSibling_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"after",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","after",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"animate",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","animate",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"append",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","append",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"attachShadow",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","attachShadow",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"before",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","before",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"closest",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","closest",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"computedStyleMap",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","computedStyleMap",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"getAttribute",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","getAttribute",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"getAttributeNS",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","getAttributeNS",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"getAttributeNames",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","getAttributeNames",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"getAttributeNode",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","getAttributeNode",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"getAttributeNodeNS",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","getAttributeNodeNS",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"getBoundingClientRect",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","getBoundingClientRect",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"getClientRects",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","getClientRects",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"getElementsByClassName",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","getElementsByClassName",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"getElementsByTagName",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","getElementsByTagName",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"getElementsByTagNameNS",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","getElementsByTagNameNS",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"hasAttribute",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","hasAttribute",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"hasAttributeNS",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","hasAttributeNS",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"hasAttributes",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","hasAttributes",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"hasPointerCapture",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","hasPointerCapture",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"insertAdjacentElement",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","insertAdjacentElement",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"insertAdjacentHTML",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","insertAdjacentHTML",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"insertAdjacentText",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","insertAdjacentText",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"matches",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","matches",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"prepend",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","prepend",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"querySelector",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","querySelector",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"querySelectorAll",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","querySelectorAll",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"releasePointerCapture",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","releasePointerCapture",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"remove",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","remove",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"removeAttribute",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","removeAttribute",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"removeAttributeNS",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","removeAttributeNS",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"removeAttributeNode",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","removeAttributeNode",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"replaceWith",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","replaceWith",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"requestFullscreen",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","requestFullscreen",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"requestPointerLock",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","requestPointerLock",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"scroll",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","scroll",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"scrollBy",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","scrollBy",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"scrollIntoView",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","scrollIntoView",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"scrollIntoViewIfNeeded",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","scrollIntoViewIfNeeded",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"scrollTo",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","scrollTo",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"setAttribute",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","setAttribute",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"setAttributeNS",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","setAttributeNS",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"setAttributeNode",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","setAttributeNode",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"setAttributeNodeNS",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","setAttributeNodeNS",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"setPointerCapture",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","setPointerCapture",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"toggleAttribute",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","toggleAttribute",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"webkitMatchesSelector",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","webkitMatchesSelector",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"webkitRequestFullScreen",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","webkitRequestFullScreen",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"webkitRequestFullscreen",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","webkitRequestFullscreen",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaDescription",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaDescription_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaDescription_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaAtomic",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaAtomic_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaAtomic_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaAutoComplete",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaAutoComplete_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaAutoComplete_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaBusy",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaBusy_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaBusy_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaChecked",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaChecked_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaChecked_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaColCount",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaColCount_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaColCount_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaColIndex",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaColIndex_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaColIndex_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaColSpan",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaColSpan_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaColSpan_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaCurrent",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaCurrent_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaCurrent_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaDisabled",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaDisabled_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaDisabled_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaExpanded",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaExpanded_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaExpanded_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaHasPopup",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaHasPopup_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaHasPopup_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaHidden",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaHidden_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaHidden_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaKeyShortcuts",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaKeyShortcuts_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaKeyShortcuts_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaLabel",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaLabel_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaLabel_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaLevel",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaLevel_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaLevel_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaLive",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaLive_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaLive_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaModal",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaModal_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaModal_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaMultiLine",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaMultiLine_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaMultiLine_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaMultiSelectable",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaMultiSelectable_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaMultiSelectable_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaOrientation",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaOrientation_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaOrientation_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaPlaceholder",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaPlaceholder_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaPlaceholder_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaPosInSet",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaPosInSet_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaPosInSet_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaPressed",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaPressed_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaPressed_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaReadOnly",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaReadOnly_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaReadOnly_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaRelevant",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaRelevant_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaRelevant_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaRequired",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaRequired_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaRequired_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaRoleDescription",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaRoleDescription_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaRoleDescription_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaRowCount",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaRowCount_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaRowCount_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaRowIndex",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaRowIndex_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaRowIndex_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaRowSpan",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaRowSpan_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaRowSpan_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaSelected",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaSelected_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaSelected_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaSetSize",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaSetSize_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaSetSize_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaSort",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaSort_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaSort_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaValueMax",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaValueMax_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaValueMax_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaValueMin",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaValueMin_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaValueMin_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaValueNow",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaValueNow_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaValueNow_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"ariaValueText",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaValueText_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","ariaValueText_set",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"getAnimations",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","getAnimations",arguments)}});
xfvm.toolsFunc.defineProperty(Element.prototype,"replaceChildren",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Element.prototype,"Element","replaceChildren",arguments)}});

// HTMLElement对象
HTMLElement = function HTMLElement(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLElement,"HTMLElement");
Object.setPrototypeOf(HTMLElement.prototype,Element.prototype);
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"title",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","title_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","title_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"lang",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","lang_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","lang_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"translate",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","translate_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","translate_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"dir",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","dir_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","dir_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"hidden",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","hidden_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","hidden_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"accessKey",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","accessKey_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","accessKey_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"draggable",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","draggable_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","draggable_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"spellcheck",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","spellcheck_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","spellcheck_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"autocapitalize",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","autocapitalize_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","autocapitalize_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"contentEditable",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","contentEditable_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","contentEditable_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"isContentEditable",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","isContentEditable_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","isContentEditable_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"inputMode",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","inputMode_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","inputMode_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"offsetParent",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","offsetParent_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","offsetParent_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"offsetTop",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","offsetTop_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","offsetTop_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"offsetLeft",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","offsetLeft_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","offsetLeft_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"offsetWidth",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","offsetWidth_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","offsetWidth_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"offsetHeight",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","offsetHeight_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","offsetHeight_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"style",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","style_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","style_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"innerText",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","innerText_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","innerText_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"outerText",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","outerText_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","outerText_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onabort",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onabort_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onabort_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onblur",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onblur_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onblur_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"oncancel",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oncancel_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oncancel_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"oncanplay",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oncanplay_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oncanplay_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"oncanplaythrough",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oncanplaythrough_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oncanplaythrough_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onchange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onchange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onchange_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onclick",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onclick_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onclick_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onclose",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onclose_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onclose_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"oncontextmenu",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oncontextmenu_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oncontextmenu_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"oncuechange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oncuechange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oncuechange_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"ondblclick",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondblclick_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondblclick_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"ondrag",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondrag_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondrag_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"ondragend",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondragend_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondragend_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"ondragenter",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondragenter_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondragenter_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"ondragleave",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondragleave_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondragleave_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"ondragover",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondragover_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondragover_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"ondragstart",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondragstart_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondragstart_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"ondrop",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondrop_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondrop_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"ondurationchange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondurationchange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ondurationchange_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onemptied",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onemptied_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onemptied_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onended",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onended_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onended_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onerror",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onerror_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onerror_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onfocus",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onfocus_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onfocus_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onformdata",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onformdata_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onformdata_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"oninput",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oninput_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oninput_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"oninvalid",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oninvalid_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oninvalid_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onkeydown",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onkeydown_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onkeydown_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onkeypress",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onkeypress_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onkeypress_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onkeyup",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onkeyup_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onkeyup_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onload",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onload_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onload_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onloadeddata",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onloadeddata_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onloadeddata_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onloadedmetadata",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onloadedmetadata_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onloadedmetadata_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onloadstart",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onloadstart_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onloadstart_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onmousedown",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmousedown_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmousedown_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onmouseenter",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmouseenter_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmouseenter_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onmouseleave",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmouseleave_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmouseleave_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onmousemove",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmousemove_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmousemove_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onmouseout",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmouseout_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmouseout_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onmouseover",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmouseover_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmouseover_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onmouseup",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmouseup_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmouseup_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onmousewheel",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmousewheel_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onmousewheel_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onpause",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpause_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpause_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onplay",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onplay_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onplay_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onplaying",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onplaying_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onplaying_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onprogress",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onprogress_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onprogress_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onratechange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onratechange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onratechange_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onreset",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onreset_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onreset_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onresize",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onresize_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onresize_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onscroll",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onscroll_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onscroll_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onseeked",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onseeked_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onseeked_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onseeking",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onseeking_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onseeking_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onselect",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onselect_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onselect_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onstalled",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onstalled_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onstalled_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onsubmit",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onsubmit_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onsubmit_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onsuspend",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onsuspend_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onsuspend_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"ontimeupdate",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ontimeupdate_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ontimeupdate_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"ontoggle",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ontoggle_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ontoggle_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onvolumechange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onvolumechange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onvolumechange_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onwaiting",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onwaiting_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onwaiting_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onwebkitanimationend",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onwebkitanimationend_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onwebkitanimationend_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onwebkitanimationiteration",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onwebkitanimationiteration_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onwebkitanimationiteration_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onwebkitanimationstart",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onwebkitanimationstart_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onwebkitanimationstart_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onwebkittransitionend",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onwebkittransitionend_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onwebkittransitionend_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onwheel",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onwheel_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onwheel_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onauxclick",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onauxclick_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onauxclick_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"ongotpointercapture",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ongotpointercapture_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ongotpointercapture_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onlostpointercapture",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onlostpointercapture_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onlostpointercapture_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onpointerdown",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointerdown_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointerdown_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onpointermove",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointermove_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointermove_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onpointerup",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointerup_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointerup_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onpointercancel",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointercancel_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointercancel_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onpointerover",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointerover_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointerover_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onpointerout",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointerout_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointerout_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onpointerenter",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointerenter_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointerenter_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onpointerleave",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointerleave_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointerleave_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onselectstart",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onselectstart_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onselectstart_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onselectionchange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onselectionchange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onselectionchange_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onanimationend",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onanimationend_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onanimationend_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onanimationiteration",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onanimationiteration_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onanimationiteration_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onanimationstart",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onanimationstart_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onanimationstart_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"ontransitionend",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ontransitionend_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","ontransitionend_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"oncopy",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oncopy_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oncopy_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"oncut",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oncut_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","oncut_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onpaste",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpaste_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpaste_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"dataset",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","dataset_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","dataset_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"nonce",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","nonce_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","nonce_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"autofocus",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","autofocus_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","autofocus_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"tabIndex",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","tabIndex_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","tabIndex_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"attachInternals",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","attachInternals",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"blur",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","blur",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"click",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","click",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"focus",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","focus",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"onpointerrawupdate",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointerrawupdate_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","onpointerrawupdate_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLElement.prototype,"enterKeyHint",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","enterKeyHint_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLElement.prototype,"HTMLElement","enterKeyHint_set",arguments)}});

// Document对象
Document = function Document(){}
xfvm.toolsFunc.safeProto(Document,"Document");
Object.setPrototypeOf(Document.prototype,Node.prototype);
xfvm.toolsFunc.defineProperty(Document.prototype,"implementation",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","implementation_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","implementation_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"URL",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","URL_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","URL_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"documentURI",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","documentURI_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","documentURI_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"compatMode",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","compatMode_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","compatMode_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"characterSet",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","characterSet_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","characterSet_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"charset",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","charset_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","charset_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"inputEncoding",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","inputEncoding_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","inputEncoding_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"contentType",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","contentType_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","contentType_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"doctype",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","doctype_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","doctype_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"documentElement",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","documentElement_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","documentElement_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"xmlEncoding",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","xmlEncoding_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","xmlEncoding_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"xmlVersion",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","xmlVersion_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","xmlVersion_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"xmlStandalone",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","xmlStandalone_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","xmlStandalone_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"domain",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","domain_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","domain_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"referrer",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","referrer_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","referrer_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"cookie",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","cookie_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","cookie_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"lastModified",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","lastModified_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","lastModified_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"readyState",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","readyState_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","readyState_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"title",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","title_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","title_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"dir",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","dir_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","dir_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"body",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","body_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","body_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"head",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","head_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","head_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"images",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","images_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","images_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"embeds",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","embeds_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","embeds_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"plugins",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","plugins_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","plugins_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"links",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","links_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","links_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"forms",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","forms_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","forms_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"scripts",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","scripts_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","scripts_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"currentScript",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","currentScript_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","currentScript_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"defaultView",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","defaultView_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","defaultView_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"designMode",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","designMode_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","designMode_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onreadystatechange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onreadystatechange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onreadystatechange_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"anchors",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","anchors_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","anchors_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"applets",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","applets_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","applets_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"fgColor",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","fgColor_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","fgColor_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"linkColor",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","linkColor_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","linkColor_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"vlinkColor",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","vlinkColor_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","vlinkColor_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"alinkColor",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","alinkColor_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","alinkColor_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"bgColor",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","bgColor_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","bgColor_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"all",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","all_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","all_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"scrollingElement",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","scrollingElement_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","scrollingElement_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onpointerlockchange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerlockchange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerlockchange_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onpointerlockerror",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerlockerror_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerlockerror_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"hidden",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","hidden_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","hidden_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"visibilityState",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","visibilityState_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","visibilityState_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"wasDiscarded",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","wasDiscarded_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","wasDiscarded_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"featurePolicy",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","featurePolicy_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","featurePolicy_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"webkitVisibilityState",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","webkitVisibilityState_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","webkitVisibilityState_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"webkitHidden",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","webkitHidden_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","webkitHidden_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onbeforecopy",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onbeforecopy_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onbeforecopy_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onbeforecut",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onbeforecut_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onbeforecut_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onbeforepaste",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onbeforepaste_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onbeforepaste_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onfreeze",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onfreeze_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onfreeze_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onresume",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onresume_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onresume_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onsearch",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onsearch_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onsearch_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onsecuritypolicyviolation",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onsecuritypolicyviolation_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onsecuritypolicyviolation_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onvisibilitychange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onvisibilitychange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onvisibilitychange_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"fullscreenEnabled",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","fullscreenEnabled_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","fullscreenEnabled_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"fullscreen",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","fullscreen_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","fullscreen_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onfullscreenchange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onfullscreenchange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onfullscreenchange_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onfullscreenerror",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onfullscreenerror_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onfullscreenerror_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"webkitIsFullScreen",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","webkitIsFullScreen_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","webkitIsFullScreen_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"webkitCurrentFullScreenElement",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","webkitCurrentFullScreenElement_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","webkitCurrentFullScreenElement_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"webkitFullscreenEnabled",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","webkitFullscreenEnabled_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","webkitFullscreenEnabled_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"webkitFullscreenElement",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","webkitFullscreenElement_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","webkitFullscreenElement_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onwebkitfullscreenchange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwebkitfullscreenchange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwebkitfullscreenchange_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onwebkitfullscreenerror",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwebkitfullscreenerror_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwebkitfullscreenerror_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"rootElement",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","rootElement_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","rootElement_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onabort",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onabort_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onabort_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onblur",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onblur_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onblur_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"oncancel",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oncancel_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oncancel_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"oncanplay",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oncanplay_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oncanplay_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"oncanplaythrough",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oncanplaythrough_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oncanplaythrough_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onchange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onchange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onchange_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onclick",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onclick_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onclick_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onclose",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onclose_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onclose_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"oncontextmenu",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oncontextmenu_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oncontextmenu_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"oncuechange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oncuechange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oncuechange_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"ondblclick",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondblclick_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondblclick_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"ondrag",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondrag_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondrag_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"ondragend",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondragend_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondragend_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"ondragenter",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondragenter_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondragenter_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"ondragleave",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondragleave_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondragleave_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"ondragover",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondragover_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondragover_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"ondragstart",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondragstart_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondragstart_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"ondrop",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondrop_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondrop_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"ondurationchange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondurationchange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ondurationchange_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onemptied",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onemptied_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onemptied_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onended",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onended_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onended_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onerror",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onerror_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onerror_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onfocus",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onfocus_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onfocus_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onformdata",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onformdata_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onformdata_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"oninput",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oninput_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oninput_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"oninvalid",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oninvalid_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oninvalid_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onkeydown",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onkeydown_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onkeydown_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onkeypress",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onkeypress_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onkeypress_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onkeyup",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onkeyup_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onkeyup_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onload",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onload_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onload_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onloadeddata",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onloadeddata_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onloadeddata_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onloadedmetadata",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onloadedmetadata_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onloadedmetadata_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onloadstart",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onloadstart_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onloadstart_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onmousedown",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmousedown_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmousedown_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onmouseenter",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmouseenter_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmouseenter_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onmouseleave",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmouseleave_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmouseleave_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onmousemove",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmousemove_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmousemove_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onmouseout",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmouseout_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmouseout_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onmouseover",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmouseover_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmouseover_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onmouseup",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmouseup_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmouseup_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onmousewheel",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmousewheel_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onmousewheel_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onpause",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpause_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpause_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onplay",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onplay_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onplay_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onplaying",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onplaying_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onplaying_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onprogress",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onprogress_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onprogress_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onratechange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onratechange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onratechange_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onreset",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onreset_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onreset_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onresize",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onresize_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onresize_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onscroll",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onscroll_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onscroll_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onseeked",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onseeked_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onseeked_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onseeking",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onseeking_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onseeking_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onselect",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onselect_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onselect_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onstalled",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onstalled_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onstalled_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onsubmit",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onsubmit_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onsubmit_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onsuspend",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onsuspend_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onsuspend_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"ontimeupdate",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ontimeupdate_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ontimeupdate_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"ontoggle",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ontoggle_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ontoggle_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onvolumechange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onvolumechange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onvolumechange_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onwaiting",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwaiting_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwaiting_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onwebkitanimationend",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwebkitanimationend_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwebkitanimationend_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onwebkitanimationiteration",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwebkitanimationiteration_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwebkitanimationiteration_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onwebkitanimationstart",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwebkitanimationstart_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwebkitanimationstart_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onwebkittransitionend",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwebkittransitionend_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwebkittransitionend_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onwheel",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwheel_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onwheel_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onauxclick",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onauxclick_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onauxclick_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"ongotpointercapture",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ongotpointercapture_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ongotpointercapture_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onlostpointercapture",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onlostpointercapture_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onlostpointercapture_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onpointerdown",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerdown_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerdown_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onpointermove",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointermove_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointermove_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onpointerup",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerup_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerup_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onpointercancel",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointercancel_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointercancel_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onpointerover",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerover_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerover_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onpointerout",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerout_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerout_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onpointerenter",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerenter_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerenter_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onpointerleave",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerleave_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerleave_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onselectstart",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onselectstart_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onselectstart_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onselectionchange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onselectionchange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onselectionchange_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onanimationend",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onanimationend_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onanimationend_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onanimationiteration",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onanimationiteration_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onanimationiteration_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onanimationstart",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onanimationstart_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onanimationstart_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"ontransitionend",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ontransitionend_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","ontransitionend_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"oncopy",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oncopy_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oncopy_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"oncut",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oncut_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","oncut_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onpaste",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpaste_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpaste_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"children",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","children_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","children_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"firstElementChild",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","firstElementChild_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","firstElementChild_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"lastElementChild",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","lastElementChild_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","lastElementChild_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"childElementCount",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","childElementCount_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","childElementCount_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"activeElement",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","activeElement_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","activeElement_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"styleSheets",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","styleSheets_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","styleSheets_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"pointerLockElement",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","pointerLockElement_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","pointerLockElement_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"fullscreenElement",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","fullscreenElement_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","fullscreenElement_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"adoptedStyleSheets",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","adoptedStyleSheets_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","adoptedStyleSheets_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"fonts",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","fonts_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","fonts_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"adoptNode",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","adoptNode",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"append",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","append",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"captureEvents",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","captureEvents",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"caretRangeFromPoint",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","caretRangeFromPoint",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"clear",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","clear",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"close",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","close",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"createAttribute",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","createAttribute",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"createAttributeNS",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","createAttributeNS",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"createCDATASection",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","createCDATASection",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"createComment",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","createComment",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"createDocumentFragment",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","createDocumentFragment",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"createElement",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","createElement",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"createElementNS",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","createElementNS",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"createEvent",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","createEvent",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"createExpression",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","createExpression",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"createNSResolver",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","createNSResolver",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"createNodeIterator",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","createNodeIterator",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"createProcessingInstruction",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","createProcessingInstruction",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"createRange",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","createRange",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"createTextNode",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","createTextNode",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"createTreeWalker",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","createTreeWalker",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"elementFromPoint",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","elementFromPoint",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"elementsFromPoint",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","elementsFromPoint",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"evaluate",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","evaluate",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"execCommand",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","execCommand",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"exitFullscreen",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","exitFullscreen",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"exitPointerLock",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","exitPointerLock",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"getElementById",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","getElementById",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"getElementsByClassName",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","getElementsByClassName",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"getElementsByName",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","getElementsByName",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"getElementsByTagName",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","getElementsByTagName",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"getElementsByTagNameNS",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","getElementsByTagNameNS",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"getSelection",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","getSelection",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"hasFocus",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","hasFocus",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"importNode",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","importNode",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"open",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","open",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"prepend",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","prepend",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"queryCommandEnabled",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","queryCommandEnabled",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"queryCommandIndeterm",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","queryCommandIndeterm",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"queryCommandState",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","queryCommandState",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"queryCommandSupported",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","queryCommandSupported",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"queryCommandValue",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","queryCommandValue",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"querySelector",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","querySelector",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"querySelectorAll",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","querySelectorAll",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"releaseEvents",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","releaseEvents",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"webkitCancelFullScreen",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","webkitCancelFullScreen",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"webkitExitFullscreen",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","webkitExitFullscreen",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"write",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","write",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"writeln",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","writeln",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"fragmentDirective",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","fragmentDirective_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","fragmentDirective_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"onpointerrawupdate",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerrawupdate_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","onpointerrawupdate_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"timeline",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","timeline_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","timeline_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"pictureInPictureEnabled",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","pictureInPictureEnabled_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","pictureInPictureEnabled_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"pictureInPictureElement",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","pictureInPictureElement_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","pictureInPictureElement_set",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"getAnimations",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","getAnimations",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"exitPictureInPicture",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","exitPictureInPicture",arguments)}});
xfvm.toolsFunc.defineProperty(Document.prototype,"replaceChildren",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Document.prototype,"Document","replaceChildren",arguments)}});

// CharacterData对象
CharacterData = function CharacterData(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(CharacterData,"CharacterData");
Object.setPrototypeOf(CharacterData.prototype,Node.prototype);
xfvm.toolsFunc.defineProperty(CharacterData.prototype,"data",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","data_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","data_set",arguments)}});
xfvm.toolsFunc.defineProperty(CharacterData.prototype,"length",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","length_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","length_set",arguments)}});
xfvm.toolsFunc.defineProperty(CharacterData.prototype,"previousElementSibling",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","previousElementSibling_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","previousElementSibling_set",arguments)}});
xfvm.toolsFunc.defineProperty(CharacterData.prototype,"nextElementSibling",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","nextElementSibling_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","nextElementSibling_set",arguments)}});
xfvm.toolsFunc.defineProperty(CharacterData.prototype,"after",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","after",arguments)}});
xfvm.toolsFunc.defineProperty(CharacterData.prototype,"appendData",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","appendData",arguments)}});
xfvm.toolsFunc.defineProperty(CharacterData.prototype,"before",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","before",arguments)}});
xfvm.toolsFunc.defineProperty(CharacterData.prototype,"deleteData",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","deleteData",arguments)}});
xfvm.toolsFunc.defineProperty(CharacterData.prototype,"insertData",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","insertData",arguments)}});
xfvm.toolsFunc.defineProperty(CharacterData.prototype,"remove",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","remove",arguments)}});
xfvm.toolsFunc.defineProperty(CharacterData.prototype,"replaceData",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","replaceData",arguments)}});
xfvm.toolsFunc.defineProperty(CharacterData.prototype,"replaceWith",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","replaceWith",arguments)}});
xfvm.toolsFunc.defineProperty(CharacterData.prototype,"substringData",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CharacterData.prototype,"CharacterData","substringData",arguments)}});

// Comment对象
Comment = function Comment(){}
xfvm.toolsFunc.safeProto(Comment,"Comment");
Object.setPrototypeOf(Comment.prototype,CharacterData.prototype);

// DocumentType对象
DocumentType = function DocumentType(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(DocumentType,"DocumentType");
Object.setPrototypeOf(DocumentType.prototype,Node.prototype);
xfvm.toolsFunc.defineProperty(DocumentType.prototype,"name",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,DocumentType.prototype,"DocumentType","name_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,DocumentType.prototype,"DocumentType","name_set",arguments)}});
xfvm.toolsFunc.defineProperty(DocumentType.prototype,"publicId",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,DocumentType.prototype,"DocumentType","publicId_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,DocumentType.prototype,"DocumentType","publicId_set",arguments)}});
xfvm.toolsFunc.defineProperty(DocumentType.prototype,"systemId",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,DocumentType.prototype,"DocumentType","systemId_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,DocumentType.prototype,"DocumentType","systemId_set",arguments)}});
xfvm.toolsFunc.defineProperty(DocumentType.prototype,"after",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,DocumentType.prototype,"DocumentType","after",arguments)}});
xfvm.toolsFunc.defineProperty(DocumentType.prototype,"before",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,DocumentType.prototype,"DocumentType","before",arguments)}});
xfvm.toolsFunc.defineProperty(DocumentType.prototype,"remove",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,DocumentType.prototype,"DocumentType","remove",arguments)}});
xfvm.toolsFunc.defineProperty(DocumentType.prototype,"replaceWith",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,DocumentType.prototype,"DocumentType","replaceWith",arguments)}});

// HTMLAnchorElement对象
HTMLAnchorElement = function HTMLAnchorElement(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLAnchorElement,"HTMLAnchorElement");
Object.setPrototypeOf(HTMLAnchorElement.prototype,HTMLElement.prototype);
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"target",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","target_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","target_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"download",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","download_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","download_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"ping",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","ping_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","ping_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"rel",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","rel_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","rel_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"relList",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","relList_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","relList_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"hreflang",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","hreflang_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","hreflang_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"type",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","type_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","type_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"referrerPolicy",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","referrerPolicy_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","referrerPolicy_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"text",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","text_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","text_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"coords",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","coords_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","coords_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"charset",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","charset_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","charset_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"name",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","name_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","name_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"rev",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","rev_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","rev_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"shape",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","shape_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","shape_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"origin",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","origin_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","origin_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"protocol",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","protocol_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","protocol_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"username",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","username_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","username_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"password",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","password_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","password_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"host",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","host_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","host_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"hostname",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","hostname_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","hostname_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"port",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","port_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","port_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"pathname",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","pathname_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","pathname_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"search",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","search_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","search_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"hash",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","hash_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","hash_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"href",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","href_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","href_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"toString",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","toString",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAnchorElement.prototype,"hrefTranslate",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","hrefTranslate_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAnchorElement.prototype,"HTMLAnchorElement","hrefTranslate_set",arguments)}});

// HTMLCanvasElement对象
HTMLCanvasElement = function HTMLCanvasElement(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLCanvasElement,"HTMLCanvasElement");
Object.setPrototypeOf(HTMLCanvasElement.prototype,HTMLElement.prototype);
xfvm.toolsFunc.defineProperty(HTMLCanvasElement.prototype,"width",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLCanvasElement.prototype,"HTMLCanvasElement","width_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLCanvasElement.prototype,"HTMLCanvasElement","width_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLCanvasElement.prototype,"height",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLCanvasElement.prototype,"HTMLCanvasElement","height_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLCanvasElement.prototype,"HTMLCanvasElement","height_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLCanvasElement.prototype,"captureStream",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLCanvasElement.prototype,"HTMLCanvasElement","captureStream",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLCanvasElement.prototype,"getContext",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLCanvasElement.prototype,"HTMLCanvasElement","getContext",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLCanvasElement.prototype,"toBlob",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLCanvasElement.prototype,"HTMLCanvasElement","toBlob",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLCanvasElement.prototype,"toDataURL",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLCanvasElement.prototype,"HTMLCanvasElement","toDataURL",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLCanvasElement.prototype,"transferControlToOffscreen",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLCanvasElement.prototype,"HTMLCanvasElement","transferControlToOffscreen",arguments)}});

// HTMLCollection对象
HTMLCollection = function HTMLCollection(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLCollection,"HTMLCollection");
xfvm.toolsFunc.defineProperty(HTMLCollection.prototype,"length",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLCollection.prototype,"HTMLCollection","length_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLCollection.prototype,"HTMLCollection","length_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLCollection.prototype,"item",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLCollection.prototype,"HTMLCollection","item",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLCollection.prototype,"namedItem",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLCollection.prototype,"HTMLCollection","namedItem",arguments)}});

// HTMLDivElement对象
HTMLDivElement = function HTMLDivElement(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLDivElement,"HTMLDivElement");
Object.setPrototypeOf(HTMLDivElement.prototype,HTMLElement.prototype);
xfvm.toolsFunc.defineProperty(HTMLDivElement.prototype,"align",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLDivElement.prototype,"HTMLDivElement","align_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLDivElement.prototype,"HTMLDivElement","align_set",arguments)}});

// HTMLDocument对象
HTMLDocument = function HTMLDocument(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLDocument,"HTMLDocument");
Object.setPrototypeOf(HTMLDocument.prototype,Document.prototype);

// HTMLHeadElement对象
HTMLHeadElement = function HTMLHeadElement(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLHeadElement,"HTMLHeadElement");
Object.setPrototypeOf(HTMLHeadElement.prototype,HTMLElement.prototype);
// HTMLHtmlElement对象
HTMLHtmlElement = function HTMLHtmlElement(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLHtmlElement,"HTMLHtmlElement");
Object.setPrototypeOf(HTMLHtmlElement.prototype,HTMLElement.prototype);
xfvm.toolsFunc.defineProperty(HTMLHtmlElement.prototype,"version",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLHtmlElement.prototype,"HTMLHtmlElement","version_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLHtmlElement.prototype,"HTMLHtmlElement","version_set",arguments)}});

// HTMLInputElement对象
HTMLInputElement = function HTMLInputElement(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLInputElement,"HTMLInputElement");
Object.setPrototypeOf(HTMLInputElement.prototype,HTMLElement.prototype);
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"accept",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","accept_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","accept_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"alt",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","alt_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","alt_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"autocomplete",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","autocomplete_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","autocomplete_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"defaultChecked",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","defaultChecked_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","defaultChecked_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"checked",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","checked_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","checked_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"dirName",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","dirName_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","dirName_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"disabled",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","disabled_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","disabled_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"form",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","form_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","form_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"files",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","files_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","files_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"formAction",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","formAction_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","formAction_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"formEnctype",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","formEnctype_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","formEnctype_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"formMethod",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","formMethod_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","formMethod_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"formNoValidate",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","formNoValidate_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","formNoValidate_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"formTarget",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","formTarget_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","formTarget_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"height",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","height_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","height_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"indeterminate",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","indeterminate_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","indeterminate_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"list",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","list_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","list_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"max",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","max_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","max_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"maxLength",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","maxLength_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","maxLength_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"min",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","min_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","min_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"minLength",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","minLength_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","minLength_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"multiple",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","multiple_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","multiple_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"name",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","name_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","name_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"pattern",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","pattern_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","pattern_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"placeholder",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","placeholder_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","placeholder_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"readOnly",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","readOnly_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","readOnly_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"required",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","required_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","required_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"size",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","size_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","size_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"src",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","src_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","src_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"step",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","step_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","step_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"type",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","type_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","type_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"defaultValue",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","defaultValue_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","defaultValue_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"value",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","value_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","value_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"valueAsDate",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","valueAsDate_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","valueAsDate_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"valueAsNumber",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","valueAsNumber_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","valueAsNumber_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"width",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","width_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","width_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"willValidate",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","willValidate_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","willValidate_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"validity",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","validity_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","validity_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"validationMessage",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","validationMessage_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","validationMessage_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"labels",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","labels_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","labels_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"selectionStart",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","selectionStart_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","selectionStart_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"selectionEnd",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","selectionEnd_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","selectionEnd_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"selectionDirection",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","selectionDirection_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","selectionDirection_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"align",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","align_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","align_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"useMap",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","useMap_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","useMap_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"webkitdirectory",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","webkitdirectory_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","webkitdirectory_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"incremental",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","incremental_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","incremental_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"checkValidity",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","checkValidity",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"reportValidity",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","reportValidity",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"select",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","select",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"setCustomValidity",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","setCustomValidity",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"setRangeText",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","setRangeText",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"setSelectionRange",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","setSelectionRange",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"stepDown",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","stepDown",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"stepUp",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","stepUp",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLInputElement.prototype,"webkitEntries",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","webkitEntries_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLInputElement.prototype,"HTMLInputElement","webkitEntries_set",arguments)}});

// HTMLMetaElement对象
HTMLMetaElement = function HTMLMetaElement(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLMetaElement,"HTMLMetaElement");
Object.setPrototypeOf(HTMLMetaElement.prototype,HTMLElement.prototype);
xfvm.toolsFunc.defineProperty(HTMLMetaElement.prototype,"name",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLMetaElement.prototype,"HTMLMetaElement","name_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLMetaElement.prototype,"HTMLMetaElement","name_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLMetaElement.prototype,"httpEquiv",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLMetaElement.prototype,"HTMLMetaElement","httpEquiv_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLMetaElement.prototype,"HTMLMetaElement","httpEquiv_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLMetaElement.prototype,"content",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLMetaElement.prototype,"HTMLMetaElement","content_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLMetaElement.prototype,"HTMLMetaElement","content_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLMetaElement.prototype,"scheme",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLMetaElement.prototype,"HTMLMetaElement","scheme_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLMetaElement.prototype,"HTMLMetaElement","scheme_set",arguments)}});

// HTMLOptionElement对象
HTMLOptionElement = function HTMLOptionElement(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLOptionElement,"HTMLOptionElement");
Object.setPrototypeOf(HTMLOptionElement.prototype,HTMLElement.prototype);
xfvm.toolsFunc.defineProperty(HTMLOptionElement.prototype,"disabled",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","disabled_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","disabled_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLOptionElement.prototype,"form",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","form_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","form_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLOptionElement.prototype,"label",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","label_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","label_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLOptionElement.prototype,"defaultSelected",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","defaultSelected_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","defaultSelected_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLOptionElement.prototype,"selected",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","selected_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","selected_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLOptionElement.prototype,"value",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","value_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","value_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLOptionElement.prototype,"text",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","text_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","text_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLOptionElement.prototype,"index",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","index_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLOptionElement.prototype,"HTMLOptionElement","index_set",arguments)}});

// HTMLSelectElement对象
HTMLSelectElement = function HTMLSelectElement(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLSelectElement,"HTMLSelectElement");
Object.setPrototypeOf(HTMLSelectElement.prototype,HTMLElement.prototype);
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"autocomplete",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","autocomplete_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","autocomplete_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"disabled",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","disabled_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","disabled_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"form",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","form_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","form_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"multiple",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","multiple_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","multiple_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"name",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","name_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","name_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"required",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","required_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","required_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"size",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","size_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","size_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"type",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","type_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","type_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"options",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","options_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","options_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"length",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","length_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","length_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"selectedOptions",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","selectedOptions_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","selectedOptions_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"selectedIndex",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","selectedIndex_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","selectedIndex_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"value",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","value_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","value_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"willValidate",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","willValidate_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","willValidate_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"validity",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","validity_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","validity_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"validationMessage",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","validationMessage_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","validationMessage_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"labels",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","labels_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","labels_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"add",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","add",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"checkValidity",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","checkValidity",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"item",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","item",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"namedItem",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","namedItem",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"remove",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","remove",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"reportValidity",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","reportValidity",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLSelectElement.prototype,"setCustomValidity",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLSelectElement.prototype,"HTMLSelectElement","setCustomValidity",arguments)}});

// HTMLSpanElement对象
HTMLSpanElement = function HTMLSpanElement(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLSpanElement,"HTMLSpanElement");
Object.setPrototypeOf(HTMLSpanElement.prototype,HTMLElement.prototype);

// HTMLUnknownElement对象
HTMLUnknownElement = function HTMLUnknownElement(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLUnknownElement,"HTMLUnknownElement");
Object.setPrototypeOf(HTMLUnknownElement.prototype,HTMLElement.prototype);

// HTMLDocument对象
HTMLDocument = function HTMLDocument(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLDocument,"HTMLDocument");
Object.setPrototypeOf(HTMLDocument.prototype,Document.prototype);

// document对象
document = {}
Object.setPrototypeOf(document,HTMLDocument.prototype);
xfvm.toolsFunc.defineProperty(document,"location",{configurable:false, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,document,"document","location_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,document,"document","location_set",arguments)}});
xfvm.toolsFunc.defineProperty(document,"jQuery200079878884358212580.37670856014607246",{configurable:false, enumerable:false,writable:false,value:1});

// Navigator对象
Navigator = function Navigator(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(Navigator,"Navigator");
xfvm.toolsFunc.defineProperty(Navigator.prototype,"vendorSub",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","vendorSub_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","vendorSub_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"productSub",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","productSub_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","productSub_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"vendor",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","vendor_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","vendor_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"maxTouchPoints",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","maxTouchPoints_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","maxTouchPoints_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"userActivation",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","userActivation_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","userActivation_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"doNotTrack",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","doNotTrack_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","doNotTrack_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"geolocation",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","geolocation_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","geolocation_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"connection",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","connection_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","connection_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"plugins",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","plugins_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","plugins_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"mimeTypes",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","mimeTypes_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","mimeTypes_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"webkitTemporaryStorage",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","webkitTemporaryStorage_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","webkitTemporaryStorage_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"webkitPersistentStorage",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","webkitPersistentStorage_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","webkitPersistentStorage_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"hardwareConcurrency",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","hardwareConcurrency_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","hardwareConcurrency_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"cookieEnabled",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","cookieEnabled_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","cookieEnabled_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"appCodeName",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","appCodeName_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","appCodeName_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"appName",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","appName_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","appName_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"appVersion",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","appVersion_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","appVersion_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"platform",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","platform_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","platform_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"product",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","product_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","product_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"userAgent",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","userAgent_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","userAgent_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"language",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","language_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","language_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"languages",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","languages_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","languages_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"onLine",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","onLine_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","onLine_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"getBattery",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","getBattery",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"getGamepads",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","getGamepads",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"javaEnabled",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","javaEnabled",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"sendBeacon",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","sendBeacon",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"vibrate",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","vibrate",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"xr",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","xr_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","xr_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"mediaCapabilities",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","mediaCapabilities_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","mediaCapabilities_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"permissions",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","permissions_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","permissions_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"locks",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","locks_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","locks_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"wakeLock",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","wakeLock_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","wakeLock_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"usb",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","usb_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","usb_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"mediaSession",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","mediaSession_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","mediaSession_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"clipboard",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","clipboard_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","clipboard_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"credentials",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","credentials_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","credentials_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"keyboard",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","keyboard_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","keyboard_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"mediaDevices",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","mediaDevices_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","mediaDevices_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"storage",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","storage_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","storage_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"serviceWorker",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","serviceWorker_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","serviceWorker_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"deviceMemory",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","deviceMemory_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","deviceMemory_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"presentation",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","presentation_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","presentation_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"bluetooth",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","bluetooth_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","bluetooth_set",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"registerProtocolHandler",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","registerProtocolHandler",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"unregisterProtocolHandler",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","unregisterProtocolHandler",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"getUserMedia",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","getUserMedia",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"requestMIDIAccess",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","requestMIDIAccess",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"requestMediaKeySystemAccess",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","requestMediaKeySystemAccess",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"webkitGetUserMedia",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","webkitGetUserMedia",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"getInstalledRelatedApps",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","getInstalledRelatedApps",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"clearAppBadge",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","clearAppBadge",arguments)}});
xfvm.toolsFunc.defineProperty(Navigator.prototype,"setAppBadge",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Navigator.prototype,"Navigator","setAppBadge",arguments)}});

navigator = {}
Object.setPrototypeOf(navigator,Navigator.prototype);
// Location对象
Location = function Location(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(Location,"Location");

// location对象
location = {}
Object.setPrototypeOf(location,Location.prototype);
xfvm.toolsFunc.defineProperty(location,"valueOf",{configurable:false, enumerable:false,writable:false,value:function (){return xfvm.toolsFunc.dispatch(this,location,"location","valueOf",arguments)}});
xfvm.toolsFunc.defineProperty(location,"ancestorOrigins",{configurable:false, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,location,"location","ancestorOrigins_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,location,"location","ancestorOrigins_set",arguments)}});
xfvm.toolsFunc.defineProperty(location,"href",{configurable:false, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,location,"location","href_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,location,"location","href_set",arguments)}});
xfvm.toolsFunc.defineProperty(location,"origin",{configurable:false, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,location,"location","origin_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,location,"location","origin_set",arguments)}});
xfvm.toolsFunc.defineProperty(location,"protocol",{configurable:false, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,location,"location","protocol_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,location,"location","protocol_set",arguments)}});
xfvm.toolsFunc.defineProperty(location,"host",{configurable:false, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,location,"location","host_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,location,"location","host_set",arguments)}});
xfvm.toolsFunc.defineProperty(location,"hostname",{configurable:false, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,location,"location","hostname_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,location,"location","hostname_set",arguments)}});
xfvm.toolsFunc.defineProperty(location,"port",{configurable:false, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,location,"location","port_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,location,"location","port_set",arguments)}});
xfvm.toolsFunc.defineProperty(location,"pathname",{configurable:false, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,location,"location","pathname_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,location,"location","pathname_set",arguments)}});
xfvm.toolsFunc.defineProperty(location,"search",{configurable:false, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,location,"location","search_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,location,"location","search_set",arguments)}});
xfvm.toolsFunc.defineProperty(location,"hash",{configurable:false, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,location,"location","hash_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,location,"location","hash_set",arguments)}});
xfvm.toolsFunc.defineProperty(location,"assign",{configurable:false, enumerable:true,writable:false,value:function (){return xfvm.toolsFunc.dispatch(this,location,"location","assign",arguments)}});
xfvm.toolsFunc.defineProperty(location,"reload",{configurable:false, enumerable:true,writable:false,value:function (){return xfvm.toolsFunc.dispatch(this,location,"location","reload",arguments)}});
xfvm.toolsFunc.defineProperty(location,"replace",{configurable:false, enumerable:true,writable:false,value:function (){return xfvm.toolsFunc.dispatch(this,location,"location","replace",arguments)}});
xfvm.toolsFunc.defineProperty(location,"toString",{configurable:false, enumerable:true,writable:false,value:function (){return xfvm.toolsFunc.dispatch(this,location,"location","toString",arguments)}});

// Storage对象
Storage = function Storage(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(Storage,"Storage");
xfvm.toolsFunc.defineProperty(Storage.prototype,"length",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Storage.prototype,"Storage","length_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Storage.prototype,"Storage","length_set",arguments)}});
xfvm.toolsFunc.defineProperty(Storage.prototype,"clear",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Storage.prototype,"Storage","clear",arguments)}});
xfvm.toolsFunc.defineProperty(Storage.prototype,"getItem",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Storage.prototype,"Storage","getItem",arguments)}});
xfvm.toolsFunc.defineProperty(Storage.prototype,"key",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Storage.prototype,"Storage","key",arguments)}});
xfvm.toolsFunc.defineProperty(Storage.prototype,"removeItem",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Storage.prototype,"Storage","removeItem",arguments)}});
xfvm.toolsFunc.defineProperty(Storage.prototype,"setItem",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Storage.prototype,"Storage","setItem",arguments)}});


// localStorage对象
localStorage = {}
Object.setPrototypeOf(localStorage,Storage.prototype);

// localStorage对象
sessionStorage = {}
Object.setPrototypeOf(sessionStorage,Storage.prototype);
// HTMLCollection对象
HTMLCollection = function HTMLCollection(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLCollection,"HTMLCollection");
xfvm.toolsFunc.defineProperty(HTMLCollection.prototype,"length",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLCollection.prototype,"HTMLCollection","length_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLCollection.prototype,"HTMLCollection","length_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLCollection.prototype,"item",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLCollection.prototype,"HTMLCollection","item",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLCollection.prototype,"namedItem",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLCollection.prototype,"HTMLCollection","namedItem",arguments)}});

// Plugin对象
Plugin = function Plugin(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(Plugin,"Plugin");
xfvm.toolsFunc.defineProperty(Plugin.prototype,"name",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","name_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","name_set",arguments)}});
xfvm.toolsFunc.defineProperty(Plugin.prototype,"filename",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","filename_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","filename_set",arguments)}});
xfvm.toolsFunc.defineProperty(Plugin.prototype,"description",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","description_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","description_set",arguments)}});
xfvm.toolsFunc.defineProperty(Plugin.prototype,"length",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","length_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","length_set",arguments)}});
xfvm.toolsFunc.defineProperty(Plugin.prototype,"item",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","item",arguments)}});
xfvm.toolsFunc.defineProperty(Plugin.prototype,"namedItem",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,Plugin.prototype,"Plugin","namedItem",arguments)}});

// PluginArray对象
PluginArray = function PluginArray(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(PluginArray,"PluginArray");
xfvm.toolsFunc.defineProperty(PluginArray.prototype,"length",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,PluginArray.prototype,"PluginArray","length_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,PluginArray.prototype,"PluginArray","length_set",arguments)}});
xfvm.toolsFunc.defineProperty(PluginArray.prototype,"item",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,PluginArray.prototype,"PluginArray","item",arguments)}});
xfvm.toolsFunc.defineProperty(PluginArray.prototype,"namedItem",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,PluginArray.prototype,"PluginArray","namedItem",arguments)}});
xfvm.toolsFunc.defineProperty(PluginArray.prototype,"refresh",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,PluginArray.prototype,"PluginArray","refresh",arguments)}});

// MimeType对象
MimeType = function MimeType(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(MimeType,"MimeType");
xfvm.toolsFunc.defineProperty(MimeType.prototype,"type",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,MimeType.prototype,"MimeType","type_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,MimeType.prototype,"MimeType","type_set",arguments)}});
xfvm.toolsFunc.defineProperty(MimeType.prototype,"suffixes",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,MimeType.prototype,"MimeType","suffixes_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,MimeType.prototype,"MimeType","suffixes_set",arguments)}});
xfvm.toolsFunc.defineProperty(MimeType.prototype,"description",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,MimeType.prototype,"MimeType","description_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,MimeType.prototype,"MimeType","description_set",arguments)}});
xfvm.toolsFunc.defineProperty(MimeType.prototype,"enabledPlugin",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,MimeType.prototype,"MimeType","enabledPlugin_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,MimeType.prototype,"MimeType","enabledPlugin_set",arguments)}});

// MimeTypeArray对象
MimeTypeArray = function MimeTypeArray(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(MimeTypeArray,"MimeTypeArray");
xfvm.toolsFunc.defineProperty(MimeTypeArray.prototype,"length",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,MimeTypeArray.prototype,"MimeTypeArray","length_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,MimeTypeArray.prototype,"MimeTypeArray","length_set",arguments)}});
xfvm.toolsFunc.defineProperty(MimeTypeArray.prototype,"item",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,MimeTypeArray.prototype,"MimeTypeArray","item",arguments)}});
xfvm.toolsFunc.defineProperty(MimeTypeArray.prototype,"namedItem",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,MimeTypeArray.prototype,"MimeTypeArray","namedItem",arguments)}});

// CSSStyleDeclaration对象
CSSStyleDeclaration = function CSSStyleDeclaration(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(CSSStyleDeclaration,"CSSStyleDeclaration");
xfvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype,"cssText",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CSSStyleDeclaration.prototype,"CSSStyleDeclaration","cssText_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CSSStyleDeclaration.prototype,"CSSStyleDeclaration","cssText_set",arguments)}});
xfvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype,"length",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CSSStyleDeclaration.prototype,"CSSStyleDeclaration","length_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CSSStyleDeclaration.prototype,"CSSStyleDeclaration","length_set",arguments)}});
xfvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype,"parentRule",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CSSStyleDeclaration.prototype,"CSSStyleDeclaration","parentRule_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CSSStyleDeclaration.prototype,"CSSStyleDeclaration","parentRule_set",arguments)}});
xfvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype,"cssFloat",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CSSStyleDeclaration.prototype,"CSSStyleDeclaration","cssFloat_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CSSStyleDeclaration.prototype,"CSSStyleDeclaration","cssFloat_set",arguments)}});
xfvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype,"getPropertyPriority",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CSSStyleDeclaration.prototype,"CSSStyleDeclaration","getPropertyPriority",arguments)}});
xfvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype,"getPropertyValue",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CSSStyleDeclaration.prototype,"CSSStyleDeclaration","getPropertyValue",arguments)}});
xfvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype,"item",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CSSStyleDeclaration.prototype,"CSSStyleDeclaration","item",arguments)}});
xfvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype,"removeProperty",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CSSStyleDeclaration.prototype,"CSSStyleDeclaration","removeProperty",arguments)}});
xfvm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype,"setProperty",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CSSStyleDeclaration.prototype,"CSSStyleDeclaration","setProperty",arguments)}});

// CanvasRenderingContext2D对象
CanvasRenderingContext2D = function CanvasRenderingContext2D(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(CanvasRenderingContext2D,"CanvasRenderingContext2D");
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"canvas",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","canvas_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","canvas_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"globalAlpha",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","globalAlpha_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","globalAlpha_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"globalCompositeOperation",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","globalCompositeOperation_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","globalCompositeOperation_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"filter",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","filter_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","filter_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"imageSmoothingEnabled",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","imageSmoothingEnabled_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","imageSmoothingEnabled_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"imageSmoothingQuality",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","imageSmoothingQuality_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","imageSmoothingQuality_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"strokeStyle",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","strokeStyle_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","strokeStyle_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"fillStyle",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","fillStyle_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","fillStyle_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"shadowOffsetX",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","shadowOffsetX_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","shadowOffsetX_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"shadowOffsetY",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","shadowOffsetY_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","shadowOffsetY_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"shadowBlur",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","shadowBlur_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","shadowBlur_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"shadowColor",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","shadowColor_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","shadowColor_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"lineWidth",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","lineWidth_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","lineWidth_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"lineCap",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","lineCap_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","lineCap_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"lineJoin",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","lineJoin_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","lineJoin_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"miterLimit",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","miterLimit_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","miterLimit_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"lineDashOffset",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","lineDashOffset_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","lineDashOffset_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"font",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","font_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","font_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"textAlign",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","textAlign_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","textAlign_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"textBaseline",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","textBaseline_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","textBaseline_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"direction",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","direction_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","direction_set",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"arc",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","arc",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"arcTo",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","arcTo",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"beginPath",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","beginPath",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"bezierCurveTo",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","bezierCurveTo",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"clearRect",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","clearRect",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"clip",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","clip",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"closePath",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","closePath",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"createImageData",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","createImageData",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"createLinearGradient",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","createLinearGradient",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"createPattern",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","createPattern",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"createRadialGradient",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","createRadialGradient",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"drawFocusIfNeeded",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","drawFocusIfNeeded",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"drawImage",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","drawImage",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"ellipse",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","ellipse",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"fill",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","fill",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"fillRect",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","fillRect",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"fillText",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","fillText",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"getContextAttributes",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","getContextAttributes",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"getImageData",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","getImageData",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"getLineDash",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","getLineDash",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"getTransform",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","getTransform",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"isPointInPath",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","isPointInPath",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"isPointInStroke",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","isPointInStroke",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"lineTo",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","lineTo",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"measureText",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","measureText",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"moveTo",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","moveTo",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"putImageData",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","putImageData",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"quadraticCurveTo",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","quadraticCurveTo",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"rect",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","rect",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"resetTransform",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","resetTransform",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"restore",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","restore",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"rotate",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","rotate",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"save",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","save",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"scale",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","scale",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"setLineDash",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","setLineDash",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"setTransform",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","setTransform",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"stroke",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","stroke",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"strokeRect",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","strokeRect",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"strokeText",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","strokeText",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"transform",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","transform",arguments)}});
xfvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype,"translate",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D","translate",arguments)}});

// WebGLRenderingContext对象
WebGLRenderingContext = function WebGLRenderingContext(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(WebGLRenderingContext,"WebGLRenderingContext");
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DEPTH_BUFFER_BIT",{configurable:false, enumerable:true,writable:false,value:256});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_BUFFER_BIT",{configurable:false, enumerable:true,writable:false,value:1024});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"COLOR_BUFFER_BIT",{configurable:false, enumerable:true,writable:false,value:16384});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"POINTS",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"LINES",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"LINE_LOOP",{configurable:false, enumerable:true,writable:false,value:2});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"LINE_STRIP",{configurable:false, enumerable:true,writable:false,value:3});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TRIANGLES",{configurable:false, enumerable:true,writable:false,value:4});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TRIANGLE_STRIP",{configurable:false, enumerable:true,writable:false,value:5});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TRIANGLE_FAN",{configurable:false, enumerable:true,writable:false,value:6});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ZERO",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ONE",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SRC_COLOR",{configurable:false, enumerable:true,writable:false,value:768});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ONE_MINUS_SRC_COLOR",{configurable:false, enumerable:true,writable:false,value:769});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SRC_ALPHA",{configurable:false, enumerable:true,writable:false,value:770});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ONE_MINUS_SRC_ALPHA",{configurable:false, enumerable:true,writable:false,value:771});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DST_ALPHA",{configurable:false, enumerable:true,writable:false,value:772});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ONE_MINUS_DST_ALPHA",{configurable:false, enumerable:true,writable:false,value:773});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DST_COLOR",{configurable:false, enumerable:true,writable:false,value:774});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ONE_MINUS_DST_COLOR",{configurable:false, enumerable:true,writable:false,value:775});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SRC_ALPHA_SATURATE",{configurable:false, enumerable:true,writable:false,value:776});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FUNC_ADD",{configurable:false, enumerable:true,writable:false,value:32774});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BLEND_EQUATION",{configurable:false, enumerable:true,writable:false,value:32777});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BLEND_EQUATION_RGB",{configurable:false, enumerable:true,writable:false,value:32777});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BLEND_EQUATION_ALPHA",{configurable:false, enumerable:true,writable:false,value:34877});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FUNC_SUBTRACT",{configurable:false, enumerable:true,writable:false,value:32778});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FUNC_REVERSE_SUBTRACT",{configurable:false, enumerable:true,writable:false,value:32779});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BLEND_DST_RGB",{configurable:false, enumerable:true,writable:false,value:32968});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BLEND_SRC_RGB",{configurable:false, enumerable:true,writable:false,value:32969});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BLEND_DST_ALPHA",{configurable:false, enumerable:true,writable:false,value:32970});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BLEND_SRC_ALPHA",{configurable:false, enumerable:true,writable:false,value:32971});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"CONSTANT_COLOR",{configurable:false, enumerable:true,writable:false,value:32769});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ONE_MINUS_CONSTANT_COLOR",{configurable:false, enumerable:true,writable:false,value:32770});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"CONSTANT_ALPHA",{configurable:false, enumerable:true,writable:false,value:32771});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ONE_MINUS_CONSTANT_ALPHA",{configurable:false, enumerable:true,writable:false,value:32772});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BLEND_COLOR",{configurable:false, enumerable:true,writable:false,value:32773});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ARRAY_BUFFER",{configurable:false, enumerable:true,writable:false,value:34962});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ELEMENT_ARRAY_BUFFER",{configurable:false, enumerable:true,writable:false,value:34963});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ARRAY_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:34964});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ELEMENT_ARRAY_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:34965});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STREAM_DRAW",{configurable:false, enumerable:true,writable:false,value:35040});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STATIC_DRAW",{configurable:false, enumerable:true,writable:false,value:35044});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DYNAMIC_DRAW",{configurable:false, enumerable:true,writable:false,value:35048});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BUFFER_SIZE",{configurable:false, enumerable:true,writable:false,value:34660});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BUFFER_USAGE",{configurable:false, enumerable:true,writable:false,value:34661});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"CURRENT_VERTEX_ATTRIB",{configurable:false, enumerable:true,writable:false,value:34342});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FRONT",{configurable:false, enumerable:true,writable:false,value:1028});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BACK",{configurable:false, enumerable:true,writable:false,value:1029});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FRONT_AND_BACK",{configurable:false, enumerable:true,writable:false,value:1032});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE_2D",{configurable:false, enumerable:true,writable:false,value:3553});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"CULL_FACE",{configurable:false, enumerable:true,writable:false,value:2884});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BLEND",{configurable:false, enumerable:true,writable:false,value:3042});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DITHER",{configurable:false, enumerable:true,writable:false,value:3024});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_TEST",{configurable:false, enumerable:true,writable:false,value:2960});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DEPTH_TEST",{configurable:false, enumerable:true,writable:false,value:2929});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SCISSOR_TEST",{configurable:false, enumerable:true,writable:false,value:3089});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"POLYGON_OFFSET_FILL",{configurable:false, enumerable:true,writable:false,value:32823});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SAMPLE_ALPHA_TO_COVERAGE",{configurable:false, enumerable:true,writable:false,value:32926});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SAMPLE_COVERAGE",{configurable:false, enumerable:true,writable:false,value:32928});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"NO_ERROR",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"INVALID_ENUM",{configurable:false, enumerable:true,writable:false,value:1280});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"INVALID_VALUE",{configurable:false, enumerable:true,writable:false,value:1281});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"INVALID_OPERATION",{configurable:false, enumerable:true,writable:false,value:1282});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"OUT_OF_MEMORY",{configurable:false, enumerable:true,writable:false,value:1285});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"CW",{configurable:false, enumerable:true,writable:false,value:2304});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"CCW",{configurable:false, enumerable:true,writable:false,value:2305});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"LINE_WIDTH",{configurable:false, enumerable:true,writable:false,value:2849});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ALIASED_POINT_SIZE_RANGE",{configurable:false, enumerable:true,writable:false,value:33901});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ALIASED_LINE_WIDTH_RANGE",{configurable:false, enumerable:true,writable:false,value:33902});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"CULL_FACE_MODE",{configurable:false, enumerable:true,writable:false,value:2885});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FRONT_FACE",{configurable:false, enumerable:true,writable:false,value:2886});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DEPTH_RANGE",{configurable:false, enumerable:true,writable:false,value:2928});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DEPTH_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:2930});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DEPTH_CLEAR_VALUE",{configurable:false, enumerable:true,writable:false,value:2931});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DEPTH_FUNC",{configurable:false, enumerable:true,writable:false,value:2932});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_CLEAR_VALUE",{configurable:false, enumerable:true,writable:false,value:2961});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_FUNC",{configurable:false, enumerable:true,writable:false,value:2962});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_FAIL",{configurable:false, enumerable:true,writable:false,value:2964});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_PASS_DEPTH_FAIL",{configurable:false, enumerable:true,writable:false,value:2965});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_PASS_DEPTH_PASS",{configurable:false, enumerable:true,writable:false,value:2966});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_REF",{configurable:false, enumerable:true,writable:false,value:2967});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_VALUE_MASK",{configurable:false, enumerable:true,writable:false,value:2963});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:2968});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_BACK_FUNC",{configurable:false, enumerable:true,writable:false,value:34816});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_BACK_FAIL",{configurable:false, enumerable:true,writable:false,value:34817});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_BACK_PASS_DEPTH_FAIL",{configurable:false, enumerable:true,writable:false,value:34818});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_BACK_PASS_DEPTH_PASS",{configurable:false, enumerable:true,writable:false,value:34819});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_BACK_REF",{configurable:false, enumerable:true,writable:false,value:36003});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_BACK_VALUE_MASK",{configurable:false, enumerable:true,writable:false,value:36004});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_BACK_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:36005});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"VIEWPORT",{configurable:false, enumerable:true,writable:false,value:2978});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SCISSOR_BOX",{configurable:false, enumerable:true,writable:false,value:3088});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"COLOR_CLEAR_VALUE",{configurable:false, enumerable:true,writable:false,value:3106});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"COLOR_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:3107});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"UNPACK_ALIGNMENT",{configurable:false, enumerable:true,writable:false,value:3317});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"PACK_ALIGNMENT",{configurable:false, enumerable:true,writable:false,value:3333});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"MAX_TEXTURE_SIZE",{configurable:false, enumerable:true,writable:false,value:3379});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"MAX_VIEWPORT_DIMS",{configurable:false, enumerable:true,writable:false,value:3386});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SUBPIXEL_BITS",{configurable:false, enumerable:true,writable:false,value:3408});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RED_BITS",{configurable:false, enumerable:true,writable:false,value:3410});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"GREEN_BITS",{configurable:false, enumerable:true,writable:false,value:3411});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BLUE_BITS",{configurable:false, enumerable:true,writable:false,value:3412});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ALPHA_BITS",{configurable:false, enumerable:true,writable:false,value:3413});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DEPTH_BITS",{configurable:false, enumerable:true,writable:false,value:3414});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_BITS",{configurable:false, enumerable:true,writable:false,value:3415});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"POLYGON_OFFSET_UNITS",{configurable:false, enumerable:true,writable:false,value:10752});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"POLYGON_OFFSET_FACTOR",{configurable:false, enumerable:true,writable:false,value:32824});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE_BINDING_2D",{configurable:false, enumerable:true,writable:false,value:32873});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SAMPLE_BUFFERS",{configurable:false, enumerable:true,writable:false,value:32936});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SAMPLES",{configurable:false, enumerable:true,writable:false,value:32937});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SAMPLE_COVERAGE_VALUE",{configurable:false, enumerable:true,writable:false,value:32938});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SAMPLE_COVERAGE_INVERT",{configurable:false, enumerable:true,writable:false,value:32939});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"COMPRESSED_TEXTURE_FORMATS",{configurable:false, enumerable:true,writable:false,value:34467});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DONT_CARE",{configurable:false, enumerable:true,writable:false,value:4352});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FASTEST",{configurable:false, enumerable:true,writable:false,value:4353});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"NICEST",{configurable:false, enumerable:true,writable:false,value:4354});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"GENERATE_MIPMAP_HINT",{configurable:false, enumerable:true,writable:false,value:33170});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BYTE",{configurable:false, enumerable:true,writable:false,value:5120});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"UNSIGNED_BYTE",{configurable:false, enumerable:true,writable:false,value:5121});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SHORT",{configurable:false, enumerable:true,writable:false,value:5122});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"UNSIGNED_SHORT",{configurable:false, enumerable:true,writable:false,value:5123});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"INT",{configurable:false, enumerable:true,writable:false,value:5124});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"UNSIGNED_INT",{configurable:false, enumerable:true,writable:false,value:5125});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FLOAT",{configurable:false, enumerable:true,writable:false,value:5126});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DEPTH_COMPONENT",{configurable:false, enumerable:true,writable:false,value:6402});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ALPHA",{configurable:false, enumerable:true,writable:false,value:6406});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RGB",{configurable:false, enumerable:true,writable:false,value:6407});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RGBA",{configurable:false, enumerable:true,writable:false,value:6408});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"LUMINANCE",{configurable:false, enumerable:true,writable:false,value:6409});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"LUMINANCE_ALPHA",{configurable:false, enumerable:true,writable:false,value:6410});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"UNSIGNED_SHORT_4_4_4_4",{configurable:false, enumerable:true,writable:false,value:32819});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"UNSIGNED_SHORT_5_5_5_1",{configurable:false, enumerable:true,writable:false,value:32820});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"UNSIGNED_SHORT_5_6_5",{configurable:false, enumerable:true,writable:false,value:33635});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FRAGMENT_SHADER",{configurable:false, enumerable:true,writable:false,value:35632});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"VERTEX_SHADER",{configurable:false, enumerable:true,writable:false,value:35633});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"MAX_VERTEX_ATTRIBS",{configurable:false, enumerable:true,writable:false,value:34921});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"MAX_VERTEX_UNIFORM_VECTORS",{configurable:false, enumerable:true,writable:false,value:36347});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"MAX_VARYING_VECTORS",{configurable:false, enumerable:true,writable:false,value:36348});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"MAX_COMBINED_TEXTURE_IMAGE_UNITS",{configurable:false, enumerable:true,writable:false,value:35661});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"MAX_VERTEX_TEXTURE_IMAGE_UNITS",{configurable:false, enumerable:true,writable:false,value:35660});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"MAX_TEXTURE_IMAGE_UNITS",{configurable:false, enumerable:true,writable:false,value:34930});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"MAX_FRAGMENT_UNIFORM_VECTORS",{configurable:false, enumerable:true,writable:false,value:36349});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SHADER_TYPE",{configurable:false, enumerable:true,writable:false,value:35663});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DELETE_STATUS",{configurable:false, enumerable:true,writable:false,value:35712});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"LINK_STATUS",{configurable:false, enumerable:true,writable:false,value:35714});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"VALIDATE_STATUS",{configurable:false, enumerable:true,writable:false,value:35715});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ATTACHED_SHADERS",{configurable:false, enumerable:true,writable:false,value:35717});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ACTIVE_UNIFORMS",{configurable:false, enumerable:true,writable:false,value:35718});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ACTIVE_ATTRIBUTES",{configurable:false, enumerable:true,writable:false,value:35721});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SHADING_LANGUAGE_VERSION",{configurable:false, enumerable:true,writable:false,value:35724});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"CURRENT_PROGRAM",{configurable:false, enumerable:true,writable:false,value:35725});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"NEVER",{configurable:false, enumerable:true,writable:false,value:512});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"LESS",{configurable:false, enumerable:true,writable:false,value:513});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"EQUAL",{configurable:false, enumerable:true,writable:false,value:514});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"LEQUAL",{configurable:false, enumerable:true,writable:false,value:515});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"GREATER",{configurable:false, enumerable:true,writable:false,value:516});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"NOTEQUAL",{configurable:false, enumerable:true,writable:false,value:517});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"GEQUAL",{configurable:false, enumerable:true,writable:false,value:518});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ALWAYS",{configurable:false, enumerable:true,writable:false,value:519});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"KEEP",{configurable:false, enumerable:true,writable:false,value:7680});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"REPLACE",{configurable:false, enumerable:true,writable:false,value:7681});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"INCR",{configurable:false, enumerable:true,writable:false,value:7682});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DECR",{configurable:false, enumerable:true,writable:false,value:7683});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"INVERT",{configurable:false, enumerable:true,writable:false,value:5386});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"INCR_WRAP",{configurable:false, enumerable:true,writable:false,value:34055});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DECR_WRAP",{configurable:false, enumerable:true,writable:false,value:34056});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"VENDOR",{configurable:false, enumerable:true,writable:false,value:7936});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RENDERER",{configurable:false, enumerable:true,writable:false,value:7937});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"VERSION",{configurable:false, enumerable:true,writable:false,value:7938});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"NEAREST",{configurable:false, enumerable:true,writable:false,value:9728});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"LINEAR",{configurable:false, enumerable:true,writable:false,value:9729});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"NEAREST_MIPMAP_NEAREST",{configurable:false, enumerable:true,writable:false,value:9984});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"LINEAR_MIPMAP_NEAREST",{configurable:false, enumerable:true,writable:false,value:9985});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"NEAREST_MIPMAP_LINEAR",{configurable:false, enumerable:true,writable:false,value:9986});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"LINEAR_MIPMAP_LINEAR",{configurable:false, enumerable:true,writable:false,value:9987});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE_MAG_FILTER",{configurable:false, enumerable:true,writable:false,value:10240});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE_MIN_FILTER",{configurable:false, enumerable:true,writable:false,value:10241});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE_WRAP_S",{configurable:false, enumerable:true,writable:false,value:10242});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE_WRAP_T",{configurable:false, enumerable:true,writable:false,value:10243});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE",{configurable:false, enumerable:true,writable:false,value:5890});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE_CUBE_MAP",{configurable:false, enumerable:true,writable:false,value:34067});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE_BINDING_CUBE_MAP",{configurable:false, enumerable:true,writable:false,value:34068});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE_CUBE_MAP_POSITIVE_X",{configurable:false, enumerable:true,writable:false,value:34069});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE_CUBE_MAP_NEGATIVE_X",{configurable:false, enumerable:true,writable:false,value:34070});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE_CUBE_MAP_POSITIVE_Y",{configurable:false, enumerable:true,writable:false,value:34071});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE_CUBE_MAP_NEGATIVE_Y",{configurable:false, enumerable:true,writable:false,value:34072});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE_CUBE_MAP_POSITIVE_Z",{configurable:false, enumerable:true,writable:false,value:34073});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE_CUBE_MAP_NEGATIVE_Z",{configurable:false, enumerable:true,writable:false,value:34074});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"MAX_CUBE_MAP_TEXTURE_SIZE",{configurable:false, enumerable:true,writable:false,value:34076});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE0",{configurable:false, enumerable:true,writable:false,value:33984});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE1",{configurable:false, enumerable:true,writable:false,value:33985});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE2",{configurable:false, enumerable:true,writable:false,value:33986});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE3",{configurable:false, enumerable:true,writable:false,value:33987});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE4",{configurable:false, enumerable:true,writable:false,value:33988});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE5",{configurable:false, enumerable:true,writable:false,value:33989});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE6",{configurable:false, enumerable:true,writable:false,value:33990});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE7",{configurable:false, enumerable:true,writable:false,value:33991});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE8",{configurable:false, enumerable:true,writable:false,value:33992});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE9",{configurable:false, enumerable:true,writable:false,value:33993});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE10",{configurable:false, enumerable:true,writable:false,value:33994});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE11",{configurable:false, enumerable:true,writable:false,value:33995});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE12",{configurable:false, enumerable:true,writable:false,value:33996});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE13",{configurable:false, enumerable:true,writable:false,value:33997});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE14",{configurable:false, enumerable:true,writable:false,value:33998});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE15",{configurable:false, enumerable:true,writable:false,value:33999});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE16",{configurable:false, enumerable:true,writable:false,value:34000});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE17",{configurable:false, enumerable:true,writable:false,value:34001});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE18",{configurable:false, enumerable:true,writable:false,value:34002});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE19",{configurable:false, enumerable:true,writable:false,value:34003});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE20",{configurable:false, enumerable:true,writable:false,value:34004});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE21",{configurable:false, enumerable:true,writable:false,value:34005});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE22",{configurable:false, enumerable:true,writable:false,value:34006});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE23",{configurable:false, enumerable:true,writable:false,value:34007});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE24",{configurable:false, enumerable:true,writable:false,value:34008});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE25",{configurable:false, enumerable:true,writable:false,value:34009});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE26",{configurable:false, enumerable:true,writable:false,value:34010});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE27",{configurable:false, enumerable:true,writable:false,value:34011});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE28",{configurable:false, enumerable:true,writable:false,value:34012});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE29",{configurable:false, enumerable:true,writable:false,value:34013});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE30",{configurable:false, enumerable:true,writable:false,value:34014});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"TEXTURE31",{configurable:false, enumerable:true,writable:false,value:34015});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"ACTIVE_TEXTURE",{configurable:false, enumerable:true,writable:false,value:34016});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"REPEAT",{configurable:false, enumerable:true,writable:false,value:10497});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"CLAMP_TO_EDGE",{configurable:false, enumerable:true,writable:false,value:33071});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"MIRRORED_REPEAT",{configurable:false, enumerable:true,writable:false,value:33648});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FLOAT_VEC2",{configurable:false, enumerable:true,writable:false,value:35664});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FLOAT_VEC3",{configurable:false, enumerable:true,writable:false,value:35665});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FLOAT_VEC4",{configurable:false, enumerable:true,writable:false,value:35666});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"INT_VEC2",{configurable:false, enumerable:true,writable:false,value:35667});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"INT_VEC3",{configurable:false, enumerable:true,writable:false,value:35668});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"INT_VEC4",{configurable:false, enumerable:true,writable:false,value:35669});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BOOL",{configurable:false, enumerable:true,writable:false,value:35670});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BOOL_VEC2",{configurable:false, enumerable:true,writable:false,value:35671});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BOOL_VEC3",{configurable:false, enumerable:true,writable:false,value:35672});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BOOL_VEC4",{configurable:false, enumerable:true,writable:false,value:35673});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FLOAT_MAT2",{configurable:false, enumerable:true,writable:false,value:35674});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FLOAT_MAT3",{configurable:false, enumerable:true,writable:false,value:35675});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FLOAT_MAT4",{configurable:false, enumerable:true,writable:false,value:35676});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SAMPLER_2D",{configurable:false, enumerable:true,writable:false,value:35678});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"SAMPLER_CUBE",{configurable:false, enumerable:true,writable:false,value:35680});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"VERTEX_ATTRIB_ARRAY_ENABLED",{configurable:false, enumerable:true,writable:false,value:34338});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"VERTEX_ATTRIB_ARRAY_SIZE",{configurable:false, enumerable:true,writable:false,value:34339});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"VERTEX_ATTRIB_ARRAY_STRIDE",{configurable:false, enumerable:true,writable:false,value:34340});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"VERTEX_ATTRIB_ARRAY_TYPE",{configurable:false, enumerable:true,writable:false,value:34341});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"VERTEX_ATTRIB_ARRAY_NORMALIZED",{configurable:false, enumerable:true,writable:false,value:34922});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"VERTEX_ATTRIB_ARRAY_POINTER",{configurable:false, enumerable:true,writable:false,value:34373});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:34975});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"IMPLEMENTATION_COLOR_READ_TYPE",{configurable:false, enumerable:true,writable:false,value:35738});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"IMPLEMENTATION_COLOR_READ_FORMAT",{configurable:false, enumerable:true,writable:false,value:35739});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"COMPILE_STATUS",{configurable:false, enumerable:true,writable:false,value:35713});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"LOW_FLOAT",{configurable:false, enumerable:true,writable:false,value:36336});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"MEDIUM_FLOAT",{configurable:false, enumerable:true,writable:false,value:36337});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"HIGH_FLOAT",{configurable:false, enumerable:true,writable:false,value:36338});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"LOW_INT",{configurable:false, enumerable:true,writable:false,value:36339});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"MEDIUM_INT",{configurable:false, enumerable:true,writable:false,value:36340});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"HIGH_INT",{configurable:false, enumerable:true,writable:false,value:36341});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FRAMEBUFFER",{configurable:false, enumerable:true,writable:false,value:36160});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RENDERBUFFER",{configurable:false, enumerable:true,writable:false,value:36161});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RGBA4",{configurable:false, enumerable:true,writable:false,value:32854});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RGB5_A1",{configurable:false, enumerable:true,writable:false,value:32855});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RGB565",{configurable:false, enumerable:true,writable:false,value:36194});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DEPTH_COMPONENT16",{configurable:false, enumerable:true,writable:false,value:33189});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_INDEX8",{configurable:false, enumerable:true,writable:false,value:36168});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DEPTH_STENCIL",{configurable:false, enumerable:true,writable:false,value:34041});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RENDERBUFFER_WIDTH",{configurable:false, enumerable:true,writable:false,value:36162});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RENDERBUFFER_HEIGHT",{configurable:false, enumerable:true,writable:false,value:36163});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RENDERBUFFER_INTERNAL_FORMAT",{configurable:false, enumerable:true,writable:false,value:36164});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RENDERBUFFER_RED_SIZE",{configurable:false, enumerable:true,writable:false,value:36176});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RENDERBUFFER_GREEN_SIZE",{configurable:false, enumerable:true,writable:false,value:36177});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RENDERBUFFER_BLUE_SIZE",{configurable:false, enumerable:true,writable:false,value:36178});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RENDERBUFFER_ALPHA_SIZE",{configurable:false, enumerable:true,writable:false,value:36179});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RENDERBUFFER_DEPTH_SIZE",{configurable:false, enumerable:true,writable:false,value:36180});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RENDERBUFFER_STENCIL_SIZE",{configurable:false, enumerable:true,writable:false,value:36181});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",{configurable:false, enumerable:true,writable:false,value:36048});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",{configurable:false, enumerable:true,writable:false,value:36049});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",{configurable:false, enumerable:true,writable:false,value:36050});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",{configurable:false, enumerable:true,writable:false,value:36051});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"COLOR_ATTACHMENT0",{configurable:false, enumerable:true,writable:false,value:36064});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DEPTH_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36096});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"STENCIL_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36128});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"DEPTH_STENCIL_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:33306});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"NONE",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FRAMEBUFFER_COMPLETE",{configurable:false, enumerable:true,writable:false,value:36053});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FRAMEBUFFER_INCOMPLETE_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36054});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36055});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FRAMEBUFFER_INCOMPLETE_DIMENSIONS",{configurable:false, enumerable:true,writable:false,value:36057});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FRAMEBUFFER_UNSUPPORTED",{configurable:false, enumerable:true,writable:false,value:36061});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"FRAMEBUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36006});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"RENDERBUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36007});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"MAX_RENDERBUFFER_SIZE",{configurable:false, enumerable:true,writable:false,value:34024});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"INVALID_FRAMEBUFFER_OPERATION",{configurable:false, enumerable:true,writable:false,value:1286});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"UNPACK_FLIP_Y_WEBGL",{configurable:false, enumerable:true,writable:false,value:37440});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"UNPACK_PREMULTIPLY_ALPHA_WEBGL",{configurable:false, enumerable:true,writable:false,value:37441});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"CONTEXT_LOST_WEBGL",{configurable:false, enumerable:true,writable:false,value:37442});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"UNPACK_COLORSPACE_CONVERSION_WEBGL",{configurable:false, enumerable:true,writable:false,value:37443});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext,"BROWSER_DEFAULT_WEBGL",{configurable:false, enumerable:true,writable:false,value:37444});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"canvas",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","canvas_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","canvas_set",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"drawingBufferWidth",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","drawingBufferWidth_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","drawingBufferWidth_set",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"drawingBufferHeight",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","drawingBufferHeight_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","drawingBufferHeight_set",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DEPTH_BUFFER_BIT",{configurable:false, enumerable:true,writable:false,value:256});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_BUFFER_BIT",{configurable:false, enumerable:true,writable:false,value:1024});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"COLOR_BUFFER_BIT",{configurable:false, enumerable:true,writable:false,value:16384});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"POINTS",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"LINES",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"LINE_LOOP",{configurable:false, enumerable:true,writable:false,value:2});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"LINE_STRIP",{configurable:false, enumerable:true,writable:false,value:3});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TRIANGLES",{configurable:false, enumerable:true,writable:false,value:4});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TRIANGLE_STRIP",{configurable:false, enumerable:true,writable:false,value:5});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TRIANGLE_FAN",{configurable:false, enumerable:true,writable:false,value:6});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ZERO",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ONE",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SRC_COLOR",{configurable:false, enumerable:true,writable:false,value:768});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ONE_MINUS_SRC_COLOR",{configurable:false, enumerable:true,writable:false,value:769});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SRC_ALPHA",{configurable:false, enumerable:true,writable:false,value:770});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ONE_MINUS_SRC_ALPHA",{configurable:false, enumerable:true,writable:false,value:771});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DST_ALPHA",{configurable:false, enumerable:true,writable:false,value:772});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ONE_MINUS_DST_ALPHA",{configurable:false, enumerable:true,writable:false,value:773});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DST_COLOR",{configurable:false, enumerable:true,writable:false,value:774});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ONE_MINUS_DST_COLOR",{configurable:false, enumerable:true,writable:false,value:775});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SRC_ALPHA_SATURATE",{configurable:false, enumerable:true,writable:false,value:776});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FUNC_ADD",{configurable:false, enumerable:true,writable:false,value:32774});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BLEND_EQUATION",{configurable:false, enumerable:true,writable:false,value:32777});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BLEND_EQUATION_RGB",{configurable:false, enumerable:true,writable:false,value:32777});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BLEND_EQUATION_ALPHA",{configurable:false, enumerable:true,writable:false,value:34877});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FUNC_SUBTRACT",{configurable:false, enumerable:true,writable:false,value:32778});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FUNC_REVERSE_SUBTRACT",{configurable:false, enumerable:true,writable:false,value:32779});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BLEND_DST_RGB",{configurable:false, enumerable:true,writable:false,value:32968});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BLEND_SRC_RGB",{configurable:false, enumerable:true,writable:false,value:32969});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BLEND_DST_ALPHA",{configurable:false, enumerable:true,writable:false,value:32970});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BLEND_SRC_ALPHA",{configurable:false, enumerable:true,writable:false,value:32971});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"CONSTANT_COLOR",{configurable:false, enumerable:true,writable:false,value:32769});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ONE_MINUS_CONSTANT_COLOR",{configurable:false, enumerable:true,writable:false,value:32770});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"CONSTANT_ALPHA",{configurable:false, enumerable:true,writable:false,value:32771});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ONE_MINUS_CONSTANT_ALPHA",{configurable:false, enumerable:true,writable:false,value:32772});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BLEND_COLOR",{configurable:false, enumerable:true,writable:false,value:32773});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ARRAY_BUFFER",{configurable:false, enumerable:true,writable:false,value:34962});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ELEMENT_ARRAY_BUFFER",{configurable:false, enumerable:true,writable:false,value:34963});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ARRAY_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:34964});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ELEMENT_ARRAY_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:34965});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STREAM_DRAW",{configurable:false, enumerable:true,writable:false,value:35040});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STATIC_DRAW",{configurable:false, enumerable:true,writable:false,value:35044});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DYNAMIC_DRAW",{configurable:false, enumerable:true,writable:false,value:35048});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BUFFER_SIZE",{configurable:false, enumerable:true,writable:false,value:34660});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BUFFER_USAGE",{configurable:false, enumerable:true,writable:false,value:34661});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"CURRENT_VERTEX_ATTRIB",{configurable:false, enumerable:true,writable:false,value:34342});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FRONT",{configurable:false, enumerable:true,writable:false,value:1028});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BACK",{configurable:false, enumerable:true,writable:false,value:1029});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FRONT_AND_BACK",{configurable:false, enumerable:true,writable:false,value:1032});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE_2D",{configurable:false, enumerable:true,writable:false,value:3553});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"CULL_FACE",{configurable:false, enumerable:true,writable:false,value:2884});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BLEND",{configurable:false, enumerable:true,writable:false,value:3042});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DITHER",{configurable:false, enumerable:true,writable:false,value:3024});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_TEST",{configurable:false, enumerable:true,writable:false,value:2960});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DEPTH_TEST",{configurable:false, enumerable:true,writable:false,value:2929});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SCISSOR_TEST",{configurable:false, enumerable:true,writable:false,value:3089});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"POLYGON_OFFSET_FILL",{configurable:false, enumerable:true,writable:false,value:32823});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SAMPLE_ALPHA_TO_COVERAGE",{configurable:false, enumerable:true,writable:false,value:32926});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SAMPLE_COVERAGE",{configurable:false, enumerable:true,writable:false,value:32928});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"NO_ERROR",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"INVALID_ENUM",{configurable:false, enumerable:true,writable:false,value:1280});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"INVALID_VALUE",{configurable:false, enumerable:true,writable:false,value:1281});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"INVALID_OPERATION",{configurable:false, enumerable:true,writable:false,value:1282});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"OUT_OF_MEMORY",{configurable:false, enumerable:true,writable:false,value:1285});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"CW",{configurable:false, enumerable:true,writable:false,value:2304});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"CCW",{configurable:false, enumerable:true,writable:false,value:2305});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"LINE_WIDTH",{configurable:false, enumerable:true,writable:false,value:2849});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ALIASED_POINT_SIZE_RANGE",{configurable:false, enumerable:true,writable:false,value:33901});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ALIASED_LINE_WIDTH_RANGE",{configurable:false, enumerable:true,writable:false,value:33902});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"CULL_FACE_MODE",{configurable:false, enumerable:true,writable:false,value:2885});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FRONT_FACE",{configurable:false, enumerable:true,writable:false,value:2886});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DEPTH_RANGE",{configurable:false, enumerable:true,writable:false,value:2928});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DEPTH_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:2930});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DEPTH_CLEAR_VALUE",{configurable:false, enumerable:true,writable:false,value:2931});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DEPTH_FUNC",{configurable:false, enumerable:true,writable:false,value:2932});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_CLEAR_VALUE",{configurable:false, enumerable:true,writable:false,value:2961});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_FUNC",{configurable:false, enumerable:true,writable:false,value:2962});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_FAIL",{configurable:false, enumerable:true,writable:false,value:2964});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_PASS_DEPTH_FAIL",{configurable:false, enumerable:true,writable:false,value:2965});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_PASS_DEPTH_PASS",{configurable:false, enumerable:true,writable:false,value:2966});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_REF",{configurable:false, enumerable:true,writable:false,value:2967});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_VALUE_MASK",{configurable:false, enumerable:true,writable:false,value:2963});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:2968});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_BACK_FUNC",{configurable:false, enumerable:true,writable:false,value:34816});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_BACK_FAIL",{configurable:false, enumerable:true,writable:false,value:34817});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_BACK_PASS_DEPTH_FAIL",{configurable:false, enumerable:true,writable:false,value:34818});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_BACK_PASS_DEPTH_PASS",{configurable:false, enumerable:true,writable:false,value:34819});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_BACK_REF",{configurable:false, enumerable:true,writable:false,value:36003});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_BACK_VALUE_MASK",{configurable:false, enumerable:true,writable:false,value:36004});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_BACK_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:36005});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"VIEWPORT",{configurable:false, enumerable:true,writable:false,value:2978});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SCISSOR_BOX",{configurable:false, enumerable:true,writable:false,value:3088});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"COLOR_CLEAR_VALUE",{configurable:false, enumerable:true,writable:false,value:3106});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"COLOR_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:3107});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"UNPACK_ALIGNMENT",{configurable:false, enumerable:true,writable:false,value:3317});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"PACK_ALIGNMENT",{configurable:false, enumerable:true,writable:false,value:3333});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"MAX_TEXTURE_SIZE",{configurable:false, enumerable:true,writable:false,value:3379});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"MAX_VIEWPORT_DIMS",{configurable:false, enumerable:true,writable:false,value:3386});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SUBPIXEL_BITS",{configurable:false, enumerable:true,writable:false,value:3408});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RED_BITS",{configurable:false, enumerable:true,writable:false,value:3410});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"GREEN_BITS",{configurable:false, enumerable:true,writable:false,value:3411});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BLUE_BITS",{configurable:false, enumerable:true,writable:false,value:3412});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ALPHA_BITS",{configurable:false, enumerable:true,writable:false,value:3413});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DEPTH_BITS",{configurable:false, enumerable:true,writable:false,value:3414});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_BITS",{configurable:false, enumerable:true,writable:false,value:3415});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"POLYGON_OFFSET_UNITS",{configurable:false, enumerable:true,writable:false,value:10752});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"POLYGON_OFFSET_FACTOR",{configurable:false, enumerable:true,writable:false,value:32824});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE_BINDING_2D",{configurable:false, enumerable:true,writable:false,value:32873});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SAMPLE_BUFFERS",{configurable:false, enumerable:true,writable:false,value:32936});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SAMPLES",{configurable:false, enumerable:true,writable:false,value:32937});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SAMPLE_COVERAGE_VALUE",{configurable:false, enumerable:true,writable:false,value:32938});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SAMPLE_COVERAGE_INVERT",{configurable:false, enumerable:true,writable:false,value:32939});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"COMPRESSED_TEXTURE_FORMATS",{configurable:false, enumerable:true,writable:false,value:34467});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DONT_CARE",{configurable:false, enumerable:true,writable:false,value:4352});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FASTEST",{configurable:false, enumerable:true,writable:false,value:4353});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"NICEST",{configurable:false, enumerable:true,writable:false,value:4354});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"GENERATE_MIPMAP_HINT",{configurable:false, enumerable:true,writable:false,value:33170});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BYTE",{configurable:false, enumerable:true,writable:false,value:5120});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"UNSIGNED_BYTE",{configurable:false, enumerable:true,writable:false,value:5121});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SHORT",{configurable:false, enumerable:true,writable:false,value:5122});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"UNSIGNED_SHORT",{configurable:false, enumerable:true,writable:false,value:5123});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"INT",{configurable:false, enumerable:true,writable:false,value:5124});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"UNSIGNED_INT",{configurable:false, enumerable:true,writable:false,value:5125});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FLOAT",{configurable:false, enumerable:true,writable:false,value:5126});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DEPTH_COMPONENT",{configurable:false, enumerable:true,writable:false,value:6402});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ALPHA",{configurable:false, enumerable:true,writable:false,value:6406});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RGB",{configurable:false, enumerable:true,writable:false,value:6407});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RGBA",{configurable:false, enumerable:true,writable:false,value:6408});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"LUMINANCE",{configurable:false, enumerable:true,writable:false,value:6409});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"LUMINANCE_ALPHA",{configurable:false, enumerable:true,writable:false,value:6410});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"UNSIGNED_SHORT_4_4_4_4",{configurable:false, enumerable:true,writable:false,value:32819});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"UNSIGNED_SHORT_5_5_5_1",{configurable:false, enumerable:true,writable:false,value:32820});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"UNSIGNED_SHORT_5_6_5",{configurable:false, enumerable:true,writable:false,value:33635});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FRAGMENT_SHADER",{configurable:false, enumerable:true,writable:false,value:35632});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"VERTEX_SHADER",{configurable:false, enumerable:true,writable:false,value:35633});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"MAX_VERTEX_ATTRIBS",{configurable:false, enumerable:true,writable:false,value:34921});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"MAX_VERTEX_UNIFORM_VECTORS",{configurable:false, enumerable:true,writable:false,value:36347});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"MAX_VARYING_VECTORS",{configurable:false, enumerable:true,writable:false,value:36348});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"MAX_COMBINED_TEXTURE_IMAGE_UNITS",{configurable:false, enumerable:true,writable:false,value:35661});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"MAX_VERTEX_TEXTURE_IMAGE_UNITS",{configurable:false, enumerable:true,writable:false,value:35660});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"MAX_TEXTURE_IMAGE_UNITS",{configurable:false, enumerable:true,writable:false,value:34930});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"MAX_FRAGMENT_UNIFORM_VECTORS",{configurable:false, enumerable:true,writable:false,value:36349});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SHADER_TYPE",{configurable:false, enumerable:true,writable:false,value:35663});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DELETE_STATUS",{configurable:false, enumerable:true,writable:false,value:35712});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"LINK_STATUS",{configurable:false, enumerable:true,writable:false,value:35714});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"VALIDATE_STATUS",{configurable:false, enumerable:true,writable:false,value:35715});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ATTACHED_SHADERS",{configurable:false, enumerable:true,writable:false,value:35717});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ACTIVE_UNIFORMS",{configurable:false, enumerable:true,writable:false,value:35718});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ACTIVE_ATTRIBUTES",{configurable:false, enumerable:true,writable:false,value:35721});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SHADING_LANGUAGE_VERSION",{configurable:false, enumerable:true,writable:false,value:35724});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"CURRENT_PROGRAM",{configurable:false, enumerable:true,writable:false,value:35725});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"NEVER",{configurable:false, enumerable:true,writable:false,value:512});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"LESS",{configurable:false, enumerable:true,writable:false,value:513});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"EQUAL",{configurable:false, enumerable:true,writable:false,value:514});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"LEQUAL",{configurable:false, enumerable:true,writable:false,value:515});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"GREATER",{configurable:false, enumerable:true,writable:false,value:516});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"NOTEQUAL",{configurable:false, enumerable:true,writable:false,value:517});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"GEQUAL",{configurable:false, enumerable:true,writable:false,value:518});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ALWAYS",{configurable:false, enumerable:true,writable:false,value:519});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"KEEP",{configurable:false, enumerable:true,writable:false,value:7680});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"REPLACE",{configurable:false, enumerable:true,writable:false,value:7681});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"INCR",{configurable:false, enumerable:true,writable:false,value:7682});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DECR",{configurable:false, enumerable:true,writable:false,value:7683});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"INVERT",{configurable:false, enumerable:true,writable:false,value:5386});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"INCR_WRAP",{configurable:false, enumerable:true,writable:false,value:34055});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DECR_WRAP",{configurable:false, enumerable:true,writable:false,value:34056});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"VENDOR",{configurable:false, enumerable:true,writable:false,value:7936});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RENDERER",{configurable:false, enumerable:true,writable:false,value:7937});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"VERSION",{configurable:false, enumerable:true,writable:false,value:7938});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"NEAREST",{configurable:false, enumerable:true,writable:false,value:9728});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"LINEAR",{configurable:false, enumerable:true,writable:false,value:9729});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"NEAREST_MIPMAP_NEAREST",{configurable:false, enumerable:true,writable:false,value:9984});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"LINEAR_MIPMAP_NEAREST",{configurable:false, enumerable:true,writable:false,value:9985});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"NEAREST_MIPMAP_LINEAR",{configurable:false, enumerable:true,writable:false,value:9986});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"LINEAR_MIPMAP_LINEAR",{configurable:false, enumerable:true,writable:false,value:9987});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE_MAG_FILTER",{configurable:false, enumerable:true,writable:false,value:10240});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE_MIN_FILTER",{configurable:false, enumerable:true,writable:false,value:10241});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE_WRAP_S",{configurable:false, enumerable:true,writable:false,value:10242});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE_WRAP_T",{configurable:false, enumerable:true,writable:false,value:10243});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE",{configurable:false, enumerable:true,writable:false,value:5890});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE_CUBE_MAP",{configurable:false, enumerable:true,writable:false,value:34067});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE_BINDING_CUBE_MAP",{configurable:false, enumerable:true,writable:false,value:34068});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE_CUBE_MAP_POSITIVE_X",{configurable:false, enumerable:true,writable:false,value:34069});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE_CUBE_MAP_NEGATIVE_X",{configurable:false, enumerable:true,writable:false,value:34070});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE_CUBE_MAP_POSITIVE_Y",{configurable:false, enumerable:true,writable:false,value:34071});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE_CUBE_MAP_NEGATIVE_Y",{configurable:false, enumerable:true,writable:false,value:34072});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE_CUBE_MAP_POSITIVE_Z",{configurable:false, enumerable:true,writable:false,value:34073});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE_CUBE_MAP_NEGATIVE_Z",{configurable:false, enumerable:true,writable:false,value:34074});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"MAX_CUBE_MAP_TEXTURE_SIZE",{configurable:false, enumerable:true,writable:false,value:34076});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE0",{configurable:false, enumerable:true,writable:false,value:33984});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE1",{configurable:false, enumerable:true,writable:false,value:33985});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE2",{configurable:false, enumerable:true,writable:false,value:33986});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE3",{configurable:false, enumerable:true,writable:false,value:33987});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE4",{configurable:false, enumerable:true,writable:false,value:33988});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE5",{configurable:false, enumerable:true,writable:false,value:33989});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE6",{configurable:false, enumerable:true,writable:false,value:33990});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE7",{configurable:false, enumerable:true,writable:false,value:33991});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE8",{configurable:false, enumerable:true,writable:false,value:33992});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE9",{configurable:false, enumerable:true,writable:false,value:33993});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE10",{configurable:false, enumerable:true,writable:false,value:33994});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE11",{configurable:false, enumerable:true,writable:false,value:33995});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE12",{configurable:false, enumerable:true,writable:false,value:33996});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE13",{configurable:false, enumerable:true,writable:false,value:33997});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE14",{configurable:false, enumerable:true,writable:false,value:33998});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE15",{configurable:false, enumerable:true,writable:false,value:33999});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE16",{configurable:false, enumerable:true,writable:false,value:34000});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE17",{configurable:false, enumerable:true,writable:false,value:34001});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE18",{configurable:false, enumerable:true,writable:false,value:34002});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE19",{configurable:false, enumerable:true,writable:false,value:34003});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE20",{configurable:false, enumerable:true,writable:false,value:34004});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE21",{configurable:false, enumerable:true,writable:false,value:34005});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE22",{configurable:false, enumerable:true,writable:false,value:34006});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE23",{configurable:false, enumerable:true,writable:false,value:34007});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE24",{configurable:false, enumerable:true,writable:false,value:34008});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE25",{configurable:false, enumerable:true,writable:false,value:34009});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE26",{configurable:false, enumerable:true,writable:false,value:34010});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE27",{configurable:false, enumerable:true,writable:false,value:34011});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE28",{configurable:false, enumerable:true,writable:false,value:34012});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE29",{configurable:false, enumerable:true,writable:false,value:34013});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE30",{configurable:false, enumerable:true,writable:false,value:34014});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"TEXTURE31",{configurable:false, enumerable:true,writable:false,value:34015});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"ACTIVE_TEXTURE",{configurable:false, enumerable:true,writable:false,value:34016});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"REPEAT",{configurable:false, enumerable:true,writable:false,value:10497});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"CLAMP_TO_EDGE",{configurable:false, enumerable:true,writable:false,value:33071});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"MIRRORED_REPEAT",{configurable:false, enumerable:true,writable:false,value:33648});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FLOAT_VEC2",{configurable:false, enumerable:true,writable:false,value:35664});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FLOAT_VEC3",{configurable:false, enumerable:true,writable:false,value:35665});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FLOAT_VEC4",{configurable:false, enumerable:true,writable:false,value:35666});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"INT_VEC2",{configurable:false, enumerable:true,writable:false,value:35667});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"INT_VEC3",{configurable:false, enumerable:true,writable:false,value:35668});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"INT_VEC4",{configurable:false, enumerable:true,writable:false,value:35669});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BOOL",{configurable:false, enumerable:true,writable:false,value:35670});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BOOL_VEC2",{configurable:false, enumerable:true,writable:false,value:35671});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BOOL_VEC3",{configurable:false, enumerable:true,writable:false,value:35672});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BOOL_VEC4",{configurable:false, enumerable:true,writable:false,value:35673});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FLOAT_MAT2",{configurable:false, enumerable:true,writable:false,value:35674});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FLOAT_MAT3",{configurable:false, enumerable:true,writable:false,value:35675});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FLOAT_MAT4",{configurable:false, enumerable:true,writable:false,value:35676});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SAMPLER_2D",{configurable:false, enumerable:true,writable:false,value:35678});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"SAMPLER_CUBE",{configurable:false, enumerable:true,writable:false,value:35680});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_ENABLED",{configurable:false, enumerable:true,writable:false,value:34338});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_SIZE",{configurable:false, enumerable:true,writable:false,value:34339});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_STRIDE",{configurable:false, enumerable:true,writable:false,value:34340});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_TYPE",{configurable:false, enumerable:true,writable:false,value:34341});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_NORMALIZED",{configurable:false, enumerable:true,writable:false,value:34922});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_POINTER",{configurable:false, enumerable:true,writable:false,value:34373});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:34975});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"IMPLEMENTATION_COLOR_READ_TYPE",{configurable:false, enumerable:true,writable:false,value:35738});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"IMPLEMENTATION_COLOR_READ_FORMAT",{configurable:false, enumerable:true,writable:false,value:35739});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"COMPILE_STATUS",{configurable:false, enumerable:true,writable:false,value:35713});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"LOW_FLOAT",{configurable:false, enumerable:true,writable:false,value:36336});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"MEDIUM_FLOAT",{configurable:false, enumerable:true,writable:false,value:36337});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"HIGH_FLOAT",{configurable:false, enumerable:true,writable:false,value:36338});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"LOW_INT",{configurable:false, enumerable:true,writable:false,value:36339});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"MEDIUM_INT",{configurable:false, enumerable:true,writable:false,value:36340});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"HIGH_INT",{configurable:false, enumerable:true,writable:false,value:36341});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FRAMEBUFFER",{configurable:false, enumerable:true,writable:false,value:36160});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RENDERBUFFER",{configurable:false, enumerable:true,writable:false,value:36161});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RGBA4",{configurable:false, enumerable:true,writable:false,value:32854});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RGB5_A1",{configurable:false, enumerable:true,writable:false,value:32855});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RGB565",{configurable:false, enumerable:true,writable:false,value:36194});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DEPTH_COMPONENT16",{configurable:false, enumerable:true,writable:false,value:33189});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_INDEX8",{configurable:false, enumerable:true,writable:false,value:36168});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DEPTH_STENCIL",{configurable:false, enumerable:true,writable:false,value:34041});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RENDERBUFFER_WIDTH",{configurable:false, enumerable:true,writable:false,value:36162});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RENDERBUFFER_HEIGHT",{configurable:false, enumerable:true,writable:false,value:36163});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RENDERBUFFER_INTERNAL_FORMAT",{configurable:false, enumerable:true,writable:false,value:36164});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RENDERBUFFER_RED_SIZE",{configurable:false, enumerable:true,writable:false,value:36176});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RENDERBUFFER_GREEN_SIZE",{configurable:false, enumerable:true,writable:false,value:36177});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RENDERBUFFER_BLUE_SIZE",{configurable:false, enumerable:true,writable:false,value:36178});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RENDERBUFFER_ALPHA_SIZE",{configurable:false, enumerable:true,writable:false,value:36179});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RENDERBUFFER_DEPTH_SIZE",{configurable:false, enumerable:true,writable:false,value:36180});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RENDERBUFFER_STENCIL_SIZE",{configurable:false, enumerable:true,writable:false,value:36181});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",{configurable:false, enumerable:true,writable:false,value:36048});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",{configurable:false, enumerable:true,writable:false,value:36049});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",{configurable:false, enumerable:true,writable:false,value:36050});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",{configurable:false, enumerable:true,writable:false,value:36051});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"COLOR_ATTACHMENT0",{configurable:false, enumerable:true,writable:false,value:36064});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DEPTH_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36096});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"STENCIL_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36128});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"DEPTH_STENCIL_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:33306});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"NONE",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FRAMEBUFFER_COMPLETE",{configurable:false, enumerable:true,writable:false,value:36053});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FRAMEBUFFER_INCOMPLETE_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36054});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36055});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FRAMEBUFFER_INCOMPLETE_DIMENSIONS",{configurable:false, enumerable:true,writable:false,value:36057});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FRAMEBUFFER_UNSUPPORTED",{configurable:false, enumerable:true,writable:false,value:36061});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"FRAMEBUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36006});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"RENDERBUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36007});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"MAX_RENDERBUFFER_SIZE",{configurable:false, enumerable:true,writable:false,value:34024});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"INVALID_FRAMEBUFFER_OPERATION",{configurable:false, enumerable:true,writable:false,value:1286});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"UNPACK_FLIP_Y_WEBGL",{configurable:false, enumerable:true,writable:false,value:37440});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"UNPACK_PREMULTIPLY_ALPHA_WEBGL",{configurable:false, enumerable:true,writable:false,value:37441});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"CONTEXT_LOST_WEBGL",{configurable:false, enumerable:true,writable:false,value:37442});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"UNPACK_COLORSPACE_CONVERSION_WEBGL",{configurable:false, enumerable:true,writable:false,value:37443});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"BROWSER_DEFAULT_WEBGL",{configurable:false, enumerable:true,writable:false,value:37444});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"activeTexture",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","activeTexture",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"attachShader",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","attachShader",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"bindAttribLocation",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","bindAttribLocation",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"bindBuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","bindBuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"bindFramebuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","bindFramebuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"bindRenderbuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","bindRenderbuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"bindTexture",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","bindTexture",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"blendColor",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","blendColor",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"blendEquation",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","blendEquation",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"blendEquationSeparate",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","blendEquationSeparate",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"blendFunc",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","blendFunc",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"blendFuncSeparate",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","blendFuncSeparate",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"bufferData",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","bufferData",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"bufferSubData",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","bufferSubData",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"checkFramebufferStatus",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","checkFramebufferStatus",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"clear",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","clear",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"clearColor",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","clearColor",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"clearDepth",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","clearDepth",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"clearStencil",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","clearStencil",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"colorMask",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","colorMask",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"compileShader",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","compileShader",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"compressedTexImage2D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","compressedTexImage2D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"compressedTexSubImage2D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","compressedTexSubImage2D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"copyTexImage2D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","copyTexImage2D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"copyTexSubImage2D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","copyTexSubImage2D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"createBuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","createBuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"createFramebuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","createFramebuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"createProgram",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","createProgram",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"createRenderbuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","createRenderbuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"createShader",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","createShader",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"createTexture",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","createTexture",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"cullFace",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","cullFace",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"deleteBuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","deleteBuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"deleteFramebuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","deleteFramebuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"deleteProgram",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","deleteProgram",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"deleteRenderbuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","deleteRenderbuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"deleteShader",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","deleteShader",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"deleteTexture",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","deleteTexture",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"depthFunc",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","depthFunc",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"depthMask",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","depthMask",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"depthRange",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","depthRange",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"detachShader",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","detachShader",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"disable",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","disable",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"disableVertexAttribArray",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","disableVertexAttribArray",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"drawArrays",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","drawArrays",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"drawElements",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","drawElements",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"enable",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","enable",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"enableVertexAttribArray",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","enableVertexAttribArray",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"finish",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","finish",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"flush",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","flush",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"framebufferRenderbuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","framebufferRenderbuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"framebufferTexture2D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","framebufferTexture2D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"frontFace",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","frontFace",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"generateMipmap",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","generateMipmap",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getActiveAttrib",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getActiveAttrib",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getActiveUniform",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getActiveUniform",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getAttachedShaders",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getAttachedShaders",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getAttribLocation",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getAttribLocation",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getBufferParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getBufferParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getContextAttributes",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getContextAttributes",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getError",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getError",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getExtension",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getExtension",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getFramebufferAttachmentParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getFramebufferAttachmentParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getProgramInfoLog",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getProgramInfoLog",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getProgramParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getProgramParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getRenderbufferParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getRenderbufferParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getShaderInfoLog",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getShaderInfoLog",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getShaderParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getShaderParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getShaderPrecisionFormat",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getShaderPrecisionFormat",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getShaderSource",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getShaderSource",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getSupportedExtensions",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getSupportedExtensions",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getTexParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getTexParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getUniform",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getUniform",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getUniformLocation",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getUniformLocation",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getVertexAttrib",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getVertexAttrib",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"getVertexAttribOffset",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","getVertexAttribOffset",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"hint",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","hint",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"isBuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","isBuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"isContextLost",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","isContextLost",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"isEnabled",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","isEnabled",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"isFramebuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","isFramebuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"isProgram",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","isProgram",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"isRenderbuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","isRenderbuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"isShader",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","isShader",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"isTexture",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","isTexture",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"lineWidth",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","lineWidth",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"linkProgram",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","linkProgram",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"pixelStorei",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","pixelStorei",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"polygonOffset",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","polygonOffset",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"readPixels",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","readPixels",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"renderbufferStorage",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","renderbufferStorage",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"sampleCoverage",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","sampleCoverage",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"scissor",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","scissor",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"shaderSource",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","shaderSource",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"stencilFunc",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","stencilFunc",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"stencilFuncSeparate",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","stencilFuncSeparate",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"stencilMask",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","stencilMask",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"stencilMaskSeparate",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","stencilMaskSeparate",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"stencilOp",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","stencilOp",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"stencilOpSeparate",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","stencilOpSeparate",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"texImage2D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","texImage2D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"texParameterf",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","texParameterf",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"texParameteri",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","texParameteri",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"texSubImage2D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","texSubImage2D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform1f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform1f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform1fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform1fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform1i",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform1i",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform1iv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform1iv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform2f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform2f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform2fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform2fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform2i",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform2i",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform2iv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform2iv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform3f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform3f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform3fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform3fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform3i",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform3i",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform3iv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform3iv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform4f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform4f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform4fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform4fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform4i",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform4i",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniform4iv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniform4iv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniformMatrix2fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniformMatrix2fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniformMatrix3fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniformMatrix3fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"uniformMatrix4fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","uniformMatrix4fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"useProgram",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","useProgram",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"validateProgram",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","validateProgram",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"vertexAttrib1f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","vertexAttrib1f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"vertexAttrib1fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","vertexAttrib1fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"vertexAttrib2f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","vertexAttrib2f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"vertexAttrib2fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","vertexAttrib2fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"vertexAttrib3f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","vertexAttrib3f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"vertexAttrib3fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","vertexAttrib3fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"vertexAttrib4f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","vertexAttrib4f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"vertexAttrib4fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","vertexAttrib4fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"vertexAttribPointer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","vertexAttribPointer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"viewport",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","viewport",arguments)}});
xfvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype,"makeXRCompatible",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGLRenderingContext.prototype,"WebGLRenderingContext","makeXRCompatible",arguments)}});

// WebGL2RenderingContext对象
WebGL2RenderingContext = function WebGL2RenderingContext(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(WebGL2RenderingContext,"WebGL2RenderingContext");
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH_BUFFER_BIT",{configurable:false, enumerable:true,writable:false,value:256});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_BUFFER_BIT",{configurable:false, enumerable:true,writable:false,value:1024});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_BUFFER_BIT",{configurable:false, enumerable:true,writable:false,value:16384});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"POINTS",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"LINES",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"LINE_LOOP",{configurable:false, enumerable:true,writable:false,value:2});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"LINE_STRIP",{configurable:false, enumerable:true,writable:false,value:3});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TRIANGLES",{configurable:false, enumerable:true,writable:false,value:4});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TRIANGLE_STRIP",{configurable:false, enumerable:true,writable:false,value:5});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TRIANGLE_FAN",{configurable:false, enumerable:true,writable:false,value:6});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ZERO",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ONE",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SRC_COLOR",{configurable:false, enumerable:true,writable:false,value:768});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ONE_MINUS_SRC_COLOR",{configurable:false, enumerable:true,writable:false,value:769});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SRC_ALPHA",{configurable:false, enumerable:true,writable:false,value:770});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ONE_MINUS_SRC_ALPHA",{configurable:false, enumerable:true,writable:false,value:771});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DST_ALPHA",{configurable:false, enumerable:true,writable:false,value:772});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ONE_MINUS_DST_ALPHA",{configurable:false, enumerable:true,writable:false,value:773});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DST_COLOR",{configurable:false, enumerable:true,writable:false,value:774});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ONE_MINUS_DST_COLOR",{configurable:false, enumerable:true,writable:false,value:775});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SRC_ALPHA_SATURATE",{configurable:false, enumerable:true,writable:false,value:776});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FUNC_ADD",{configurable:false, enumerable:true,writable:false,value:32774});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BLEND_EQUATION",{configurable:false, enumerable:true,writable:false,value:32777});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BLEND_EQUATION_RGB",{configurable:false, enumerable:true,writable:false,value:32777});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BLEND_EQUATION_ALPHA",{configurable:false, enumerable:true,writable:false,value:34877});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FUNC_SUBTRACT",{configurable:false, enumerable:true,writable:false,value:32778});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FUNC_REVERSE_SUBTRACT",{configurable:false, enumerable:true,writable:false,value:32779});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BLEND_DST_RGB",{configurable:false, enumerable:true,writable:false,value:32968});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BLEND_SRC_RGB",{configurable:false, enumerable:true,writable:false,value:32969});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BLEND_DST_ALPHA",{configurable:false, enumerable:true,writable:false,value:32970});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BLEND_SRC_ALPHA",{configurable:false, enumerable:true,writable:false,value:32971});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"CONSTANT_COLOR",{configurable:false, enumerable:true,writable:false,value:32769});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ONE_MINUS_CONSTANT_COLOR",{configurable:false, enumerable:true,writable:false,value:32770});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"CONSTANT_ALPHA",{configurable:false, enumerable:true,writable:false,value:32771});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ONE_MINUS_CONSTANT_ALPHA",{configurable:false, enumerable:true,writable:false,value:32772});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BLEND_COLOR",{configurable:false, enumerable:true,writable:false,value:32773});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ARRAY_BUFFER",{configurable:false, enumerable:true,writable:false,value:34962});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ELEMENT_ARRAY_BUFFER",{configurable:false, enumerable:true,writable:false,value:34963});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ARRAY_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:34964});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ELEMENT_ARRAY_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:34965});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STREAM_DRAW",{configurable:false, enumerable:true,writable:false,value:35040});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STATIC_DRAW",{configurable:false, enumerable:true,writable:false,value:35044});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DYNAMIC_DRAW",{configurable:false, enumerable:true,writable:false,value:35048});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BUFFER_SIZE",{configurable:false, enumerable:true,writable:false,value:34660});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BUFFER_USAGE",{configurable:false, enumerable:true,writable:false,value:34661});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"CURRENT_VERTEX_ATTRIB",{configurable:false, enumerable:true,writable:false,value:34342});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRONT",{configurable:false, enumerable:true,writable:false,value:1028});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BACK",{configurable:false, enumerable:true,writable:false,value:1029});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRONT_AND_BACK",{configurable:false, enumerable:true,writable:false,value:1032});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_2D",{configurable:false, enumerable:true,writable:false,value:3553});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"CULL_FACE",{configurable:false, enumerable:true,writable:false,value:2884});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BLEND",{configurable:false, enumerable:true,writable:false,value:3042});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DITHER",{configurable:false, enumerable:true,writable:false,value:3024});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_TEST",{configurable:false, enumerable:true,writable:false,value:2960});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH_TEST",{configurable:false, enumerable:true,writable:false,value:2929});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SCISSOR_TEST",{configurable:false, enumerable:true,writable:false,value:3089});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"POLYGON_OFFSET_FILL",{configurable:false, enumerable:true,writable:false,value:32823});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SAMPLE_ALPHA_TO_COVERAGE",{configurable:false, enumerable:true,writable:false,value:32926});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SAMPLE_COVERAGE",{configurable:false, enumerable:true,writable:false,value:32928});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"NO_ERROR",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INVALID_ENUM",{configurable:false, enumerable:true,writable:false,value:1280});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INVALID_VALUE",{configurable:false, enumerable:true,writable:false,value:1281});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INVALID_OPERATION",{configurable:false, enumerable:true,writable:false,value:1282});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"OUT_OF_MEMORY",{configurable:false, enumerable:true,writable:false,value:1285});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"CW",{configurable:false, enumerable:true,writable:false,value:2304});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"CCW",{configurable:false, enumerable:true,writable:false,value:2305});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"LINE_WIDTH",{configurable:false, enumerable:true,writable:false,value:2849});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ALIASED_POINT_SIZE_RANGE",{configurable:false, enumerable:true,writable:false,value:33901});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ALIASED_LINE_WIDTH_RANGE",{configurable:false, enumerable:true,writable:false,value:33902});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"CULL_FACE_MODE",{configurable:false, enumerable:true,writable:false,value:2885});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRONT_FACE",{configurable:false, enumerable:true,writable:false,value:2886});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH_RANGE",{configurable:false, enumerable:true,writable:false,value:2928});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:2930});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH_CLEAR_VALUE",{configurable:false, enumerable:true,writable:false,value:2931});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH_FUNC",{configurable:false, enumerable:true,writable:false,value:2932});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_CLEAR_VALUE",{configurable:false, enumerable:true,writable:false,value:2961});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_FUNC",{configurable:false, enumerable:true,writable:false,value:2962});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_FAIL",{configurable:false, enumerable:true,writable:false,value:2964});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_PASS_DEPTH_FAIL",{configurable:false, enumerable:true,writable:false,value:2965});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_PASS_DEPTH_PASS",{configurable:false, enumerable:true,writable:false,value:2966});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_REF",{configurable:false, enumerable:true,writable:false,value:2967});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_VALUE_MASK",{configurable:false, enumerable:true,writable:false,value:2963});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:2968});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_BACK_FUNC",{configurable:false, enumerable:true,writable:false,value:34816});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_BACK_FAIL",{configurable:false, enumerable:true,writable:false,value:34817});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_BACK_PASS_DEPTH_FAIL",{configurable:false, enumerable:true,writable:false,value:34818});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_BACK_PASS_DEPTH_PASS",{configurable:false, enumerable:true,writable:false,value:34819});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_BACK_REF",{configurable:false, enumerable:true,writable:false,value:36003});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_BACK_VALUE_MASK",{configurable:false, enumerable:true,writable:false,value:36004});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_BACK_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:36005});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"VIEWPORT",{configurable:false, enumerable:true,writable:false,value:2978});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SCISSOR_BOX",{configurable:false, enumerable:true,writable:false,value:3088});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_CLEAR_VALUE",{configurable:false, enumerable:true,writable:false,value:3106});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:3107});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNPACK_ALIGNMENT",{configurable:false, enumerable:true,writable:false,value:3317});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"PACK_ALIGNMENT",{configurable:false, enumerable:true,writable:false,value:3333});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_TEXTURE_SIZE",{configurable:false, enumerable:true,writable:false,value:3379});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_VIEWPORT_DIMS",{configurable:false, enumerable:true,writable:false,value:3386});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SUBPIXEL_BITS",{configurable:false, enumerable:true,writable:false,value:3408});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RED_BITS",{configurable:false, enumerable:true,writable:false,value:3410});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"GREEN_BITS",{configurable:false, enumerable:true,writable:false,value:3411});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BLUE_BITS",{configurable:false, enumerable:true,writable:false,value:3412});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ALPHA_BITS",{configurable:false, enumerable:true,writable:false,value:3413});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH_BITS",{configurable:false, enumerable:true,writable:false,value:3414});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_BITS",{configurable:false, enumerable:true,writable:false,value:3415});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"POLYGON_OFFSET_UNITS",{configurable:false, enumerable:true,writable:false,value:10752});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"POLYGON_OFFSET_FACTOR",{configurable:false, enumerable:true,writable:false,value:32824});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_BINDING_2D",{configurable:false, enumerable:true,writable:false,value:32873});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SAMPLE_BUFFERS",{configurable:false, enumerable:true,writable:false,value:32936});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SAMPLES",{configurable:false, enumerable:true,writable:false,value:32937});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SAMPLE_COVERAGE_VALUE",{configurable:false, enumerable:true,writable:false,value:32938});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SAMPLE_COVERAGE_INVERT",{configurable:false, enumerable:true,writable:false,value:32939});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COMPRESSED_TEXTURE_FORMATS",{configurable:false, enumerable:true,writable:false,value:34467});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DONT_CARE",{configurable:false, enumerable:true,writable:false,value:4352});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FASTEST",{configurable:false, enumerable:true,writable:false,value:4353});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"NICEST",{configurable:false, enumerable:true,writable:false,value:4354});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"GENERATE_MIPMAP_HINT",{configurable:false, enumerable:true,writable:false,value:33170});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BYTE",{configurable:false, enumerable:true,writable:false,value:5120});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_BYTE",{configurable:false, enumerable:true,writable:false,value:5121});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SHORT",{configurable:false, enumerable:true,writable:false,value:5122});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_SHORT",{configurable:false, enumerable:true,writable:false,value:5123});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INT",{configurable:false, enumerable:true,writable:false,value:5124});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_INT",{configurable:false, enumerable:true,writable:false,value:5125});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FLOAT",{configurable:false, enumerable:true,writable:false,value:5126});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH_COMPONENT",{configurable:false, enumerable:true,writable:false,value:6402});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ALPHA",{configurable:false, enumerable:true,writable:false,value:6406});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB",{configurable:false, enumerable:true,writable:false,value:6407});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGBA",{configurable:false, enumerable:true,writable:false,value:6408});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"LUMINANCE",{configurable:false, enumerable:true,writable:false,value:6409});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"LUMINANCE_ALPHA",{configurable:false, enumerable:true,writable:false,value:6410});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_SHORT_4_4_4_4",{configurable:false, enumerable:true,writable:false,value:32819});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_SHORT_5_5_5_1",{configurable:false, enumerable:true,writable:false,value:32820});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_SHORT_5_6_5",{configurable:false, enumerable:true,writable:false,value:33635});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAGMENT_SHADER",{configurable:false, enumerable:true,writable:false,value:35632});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"VERTEX_SHADER",{configurable:false, enumerable:true,writable:false,value:35633});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_VERTEX_ATTRIBS",{configurable:false, enumerable:true,writable:false,value:34921});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_VERTEX_UNIFORM_VECTORS",{configurable:false, enumerable:true,writable:false,value:36347});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_VARYING_VECTORS",{configurable:false, enumerable:true,writable:false,value:36348});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_COMBINED_TEXTURE_IMAGE_UNITS",{configurable:false, enumerable:true,writable:false,value:35661});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_VERTEX_TEXTURE_IMAGE_UNITS",{configurable:false, enumerable:true,writable:false,value:35660});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_TEXTURE_IMAGE_UNITS",{configurable:false, enumerable:true,writable:false,value:34930});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_FRAGMENT_UNIFORM_VECTORS",{configurable:false, enumerable:true,writable:false,value:36349});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SHADER_TYPE",{configurable:false, enumerable:true,writable:false,value:35663});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DELETE_STATUS",{configurable:false, enumerable:true,writable:false,value:35712});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"LINK_STATUS",{configurable:false, enumerable:true,writable:false,value:35714});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"VALIDATE_STATUS",{configurable:false, enumerable:true,writable:false,value:35715});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ATTACHED_SHADERS",{configurable:false, enumerable:true,writable:false,value:35717});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ACTIVE_UNIFORMS",{configurable:false, enumerable:true,writable:false,value:35718});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ACTIVE_ATTRIBUTES",{configurable:false, enumerable:true,writable:false,value:35721});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SHADING_LANGUAGE_VERSION",{configurable:false, enumerable:true,writable:false,value:35724});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"CURRENT_PROGRAM",{configurable:false, enumerable:true,writable:false,value:35725});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"NEVER",{configurable:false, enumerable:true,writable:false,value:512});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"LESS",{configurable:false, enumerable:true,writable:false,value:513});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"EQUAL",{configurable:false, enumerable:true,writable:false,value:514});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"LEQUAL",{configurable:false, enumerable:true,writable:false,value:515});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"GREATER",{configurable:false, enumerable:true,writable:false,value:516});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"NOTEQUAL",{configurable:false, enumerable:true,writable:false,value:517});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"GEQUAL",{configurable:false, enumerable:true,writable:false,value:518});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ALWAYS",{configurable:false, enumerable:true,writable:false,value:519});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"KEEP",{configurable:false, enumerable:true,writable:false,value:7680});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"REPLACE",{configurable:false, enumerable:true,writable:false,value:7681});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INCR",{configurable:false, enumerable:true,writable:false,value:7682});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DECR",{configurable:false, enumerable:true,writable:false,value:7683});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INVERT",{configurable:false, enumerable:true,writable:false,value:5386});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INCR_WRAP",{configurable:false, enumerable:true,writable:false,value:34055});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DECR_WRAP",{configurable:false, enumerable:true,writable:false,value:34056});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"VENDOR",{configurable:false, enumerable:true,writable:false,value:7936});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RENDERER",{configurable:false, enumerable:true,writable:false,value:7937});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"VERSION",{configurable:false, enumerable:true,writable:false,value:7938});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"NEAREST",{configurable:false, enumerable:true,writable:false,value:9728});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"LINEAR",{configurable:false, enumerable:true,writable:false,value:9729});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"NEAREST_MIPMAP_NEAREST",{configurable:false, enumerable:true,writable:false,value:9984});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"LINEAR_MIPMAP_NEAREST",{configurable:false, enumerable:true,writable:false,value:9985});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"NEAREST_MIPMAP_LINEAR",{configurable:false, enumerable:true,writable:false,value:9986});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"LINEAR_MIPMAP_LINEAR",{configurable:false, enumerable:true,writable:false,value:9987});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_MAG_FILTER",{configurable:false, enumerable:true,writable:false,value:10240});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_MIN_FILTER",{configurable:false, enumerable:true,writable:false,value:10241});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_WRAP_S",{configurable:false, enumerable:true,writable:false,value:10242});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_WRAP_T",{configurable:false, enumerable:true,writable:false,value:10243});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE",{configurable:false, enumerable:true,writable:false,value:5890});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_CUBE_MAP",{configurable:false, enumerable:true,writable:false,value:34067});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_BINDING_CUBE_MAP",{configurable:false, enumerable:true,writable:false,value:34068});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_CUBE_MAP_POSITIVE_X",{configurable:false, enumerable:true,writable:false,value:34069});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_CUBE_MAP_NEGATIVE_X",{configurable:false, enumerable:true,writable:false,value:34070});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_CUBE_MAP_POSITIVE_Y",{configurable:false, enumerable:true,writable:false,value:34071});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_CUBE_MAP_NEGATIVE_Y",{configurable:false, enumerable:true,writable:false,value:34072});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_CUBE_MAP_POSITIVE_Z",{configurable:false, enumerable:true,writable:false,value:34073});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_CUBE_MAP_NEGATIVE_Z",{configurable:false, enumerable:true,writable:false,value:34074});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_CUBE_MAP_TEXTURE_SIZE",{configurable:false, enumerable:true,writable:false,value:34076});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE0",{configurable:false, enumerable:true,writable:false,value:33984});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE1",{configurable:false, enumerable:true,writable:false,value:33985});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE2",{configurable:false, enumerable:true,writable:false,value:33986});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE3",{configurable:false, enumerable:true,writable:false,value:33987});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE4",{configurable:false, enumerable:true,writable:false,value:33988});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE5",{configurable:false, enumerable:true,writable:false,value:33989});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE6",{configurable:false, enumerable:true,writable:false,value:33990});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE7",{configurable:false, enumerable:true,writable:false,value:33991});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE8",{configurable:false, enumerable:true,writable:false,value:33992});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE9",{configurable:false, enumerable:true,writable:false,value:33993});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE10",{configurable:false, enumerable:true,writable:false,value:33994});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE11",{configurable:false, enumerable:true,writable:false,value:33995});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE12",{configurable:false, enumerable:true,writable:false,value:33996});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE13",{configurable:false, enumerable:true,writable:false,value:33997});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE14",{configurable:false, enumerable:true,writable:false,value:33998});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE15",{configurable:false, enumerable:true,writable:false,value:33999});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE16",{configurable:false, enumerable:true,writable:false,value:34000});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE17",{configurable:false, enumerable:true,writable:false,value:34001});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE18",{configurable:false, enumerable:true,writable:false,value:34002});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE19",{configurable:false, enumerable:true,writable:false,value:34003});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE20",{configurable:false, enumerable:true,writable:false,value:34004});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE21",{configurable:false, enumerable:true,writable:false,value:34005});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE22",{configurable:false, enumerable:true,writable:false,value:34006});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE23",{configurable:false, enumerable:true,writable:false,value:34007});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE24",{configurable:false, enumerable:true,writable:false,value:34008});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE25",{configurable:false, enumerable:true,writable:false,value:34009});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE26",{configurable:false, enumerable:true,writable:false,value:34010});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE27",{configurable:false, enumerable:true,writable:false,value:34011});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE28",{configurable:false, enumerable:true,writable:false,value:34012});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE29",{configurable:false, enumerable:true,writable:false,value:34013});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE30",{configurable:false, enumerable:true,writable:false,value:34014});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE31",{configurable:false, enumerable:true,writable:false,value:34015});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ACTIVE_TEXTURE",{configurable:false, enumerable:true,writable:false,value:34016});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"REPEAT",{configurable:false, enumerable:true,writable:false,value:10497});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"CLAMP_TO_EDGE",{configurable:false, enumerable:true,writable:false,value:33071});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MIRRORED_REPEAT",{configurable:false, enumerable:true,writable:false,value:33648});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FLOAT_VEC2",{configurable:false, enumerable:true,writable:false,value:35664});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FLOAT_VEC3",{configurable:false, enumerable:true,writable:false,value:35665});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FLOAT_VEC4",{configurable:false, enumerable:true,writable:false,value:35666});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INT_VEC2",{configurable:false, enumerable:true,writable:false,value:35667});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INT_VEC3",{configurable:false, enumerable:true,writable:false,value:35668});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INT_VEC4",{configurable:false, enumerable:true,writable:false,value:35669});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BOOL",{configurable:false, enumerable:true,writable:false,value:35670});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BOOL_VEC2",{configurable:false, enumerable:true,writable:false,value:35671});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BOOL_VEC3",{configurable:false, enumerable:true,writable:false,value:35672});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BOOL_VEC4",{configurable:false, enumerable:true,writable:false,value:35673});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FLOAT_MAT2",{configurable:false, enumerable:true,writable:false,value:35674});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FLOAT_MAT3",{configurable:false, enumerable:true,writable:false,value:35675});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FLOAT_MAT4",{configurable:false, enumerable:true,writable:false,value:35676});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SAMPLER_2D",{configurable:false, enumerable:true,writable:false,value:35678});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SAMPLER_CUBE",{configurable:false, enumerable:true,writable:false,value:35680});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"VERTEX_ATTRIB_ARRAY_ENABLED",{configurable:false, enumerable:true,writable:false,value:34338});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"VERTEX_ATTRIB_ARRAY_SIZE",{configurable:false, enumerable:true,writable:false,value:34339});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"VERTEX_ATTRIB_ARRAY_STRIDE",{configurable:false, enumerable:true,writable:false,value:34340});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"VERTEX_ATTRIB_ARRAY_TYPE",{configurable:false, enumerable:true,writable:false,value:34341});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"VERTEX_ATTRIB_ARRAY_NORMALIZED",{configurable:false, enumerable:true,writable:false,value:34922});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"VERTEX_ATTRIB_ARRAY_POINTER",{configurable:false, enumerable:true,writable:false,value:34373});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:34975});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"IMPLEMENTATION_COLOR_READ_TYPE",{configurable:false, enumerable:true,writable:false,value:35738});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"IMPLEMENTATION_COLOR_READ_FORMAT",{configurable:false, enumerable:true,writable:false,value:35739});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COMPILE_STATUS",{configurable:false, enumerable:true,writable:false,value:35713});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"LOW_FLOAT",{configurable:false, enumerable:true,writable:false,value:36336});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MEDIUM_FLOAT",{configurable:false, enumerable:true,writable:false,value:36337});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"HIGH_FLOAT",{configurable:false, enumerable:true,writable:false,value:36338});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"LOW_INT",{configurable:false, enumerable:true,writable:false,value:36339});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MEDIUM_INT",{configurable:false, enumerable:true,writable:false,value:36340});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"HIGH_INT",{configurable:false, enumerable:true,writable:false,value:36341});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER",{configurable:false, enumerable:true,writable:false,value:36160});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RENDERBUFFER",{configurable:false, enumerable:true,writable:false,value:36161});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGBA4",{configurable:false, enumerable:true,writable:false,value:32854});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB5_A1",{configurable:false, enumerable:true,writable:false,value:32855});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB565",{configurable:false, enumerable:true,writable:false,value:36194});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH_COMPONENT16",{configurable:false, enumerable:true,writable:false,value:33189});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_INDEX8",{configurable:false, enumerable:true,writable:false,value:36168});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH_STENCIL",{configurable:false, enumerable:true,writable:false,value:34041});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RENDERBUFFER_WIDTH",{configurable:false, enumerable:true,writable:false,value:36162});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RENDERBUFFER_HEIGHT",{configurable:false, enumerable:true,writable:false,value:36163});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RENDERBUFFER_INTERNAL_FORMAT",{configurable:false, enumerable:true,writable:false,value:36164});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RENDERBUFFER_RED_SIZE",{configurable:false, enumerable:true,writable:false,value:36176});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RENDERBUFFER_GREEN_SIZE",{configurable:false, enumerable:true,writable:false,value:36177});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RENDERBUFFER_BLUE_SIZE",{configurable:false, enumerable:true,writable:false,value:36178});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RENDERBUFFER_ALPHA_SIZE",{configurable:false, enumerable:true,writable:false,value:36179});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RENDERBUFFER_DEPTH_SIZE",{configurable:false, enumerable:true,writable:false,value:36180});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RENDERBUFFER_STENCIL_SIZE",{configurable:false, enumerable:true,writable:false,value:36181});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",{configurable:false, enumerable:true,writable:false,value:36048});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",{configurable:false, enumerable:true,writable:false,value:36049});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",{configurable:false, enumerable:true,writable:false,value:36050});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",{configurable:false, enumerable:true,writable:false,value:36051});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT0",{configurable:false, enumerable:true,writable:false,value:36064});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36096});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36128});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH_STENCIL_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:33306});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"NONE",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_COMPLETE",{configurable:false, enumerable:true,writable:false,value:36053});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_INCOMPLETE_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36054});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36055});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_INCOMPLETE_DIMENSIONS",{configurable:false, enumerable:true,writable:false,value:36057});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_UNSUPPORTED",{configurable:false, enumerable:true,writable:false,value:36061});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36006});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RENDERBUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36007});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_RENDERBUFFER_SIZE",{configurable:false, enumerable:true,writable:false,value:34024});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INVALID_FRAMEBUFFER_OPERATION",{configurable:false, enumerable:true,writable:false,value:1286});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNPACK_FLIP_Y_WEBGL",{configurable:false, enumerable:true,writable:false,value:37440});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNPACK_PREMULTIPLY_ALPHA_WEBGL",{configurable:false, enumerable:true,writable:false,value:37441});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"CONTEXT_LOST_WEBGL",{configurable:false, enumerable:true,writable:false,value:37442});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNPACK_COLORSPACE_CONVERSION_WEBGL",{configurable:false, enumerable:true,writable:false,value:37443});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"BROWSER_DEFAULT_WEBGL",{configurable:false, enumerable:true,writable:false,value:37444});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"READ_BUFFER",{configurable:false, enumerable:true,writable:false,value:3074});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNPACK_ROW_LENGTH",{configurable:false, enumerable:true,writable:false,value:3314});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNPACK_SKIP_ROWS",{configurable:false, enumerable:true,writable:false,value:3315});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNPACK_SKIP_PIXELS",{configurable:false, enumerable:true,writable:false,value:3316});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"PACK_ROW_LENGTH",{configurable:false, enumerable:true,writable:false,value:3330});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"PACK_SKIP_ROWS",{configurable:false, enumerable:true,writable:false,value:3331});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"PACK_SKIP_PIXELS",{configurable:false, enumerable:true,writable:false,value:3332});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR",{configurable:false, enumerable:true,writable:false,value:6144});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH",{configurable:false, enumerable:true,writable:false,value:6145});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STENCIL",{configurable:false, enumerable:true,writable:false,value:6146});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RED",{configurable:false, enumerable:true,writable:false,value:6403});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB8",{configurable:false, enumerable:true,writable:false,value:32849});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGBA8",{configurable:false, enumerable:true,writable:false,value:32856});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB10_A2",{configurable:false, enumerable:true,writable:false,value:32857});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_BINDING_3D",{configurable:false, enumerable:true,writable:false,value:32874});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNPACK_SKIP_IMAGES",{configurable:false, enumerable:true,writable:false,value:32877});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNPACK_IMAGE_HEIGHT",{configurable:false, enumerable:true,writable:false,value:32878});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_3D",{configurable:false, enumerable:true,writable:false,value:32879});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_WRAP_R",{configurable:false, enumerable:true,writable:false,value:32882});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_3D_TEXTURE_SIZE",{configurable:false, enumerable:true,writable:false,value:32883});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_INT_2_10_10_10_REV",{configurable:false, enumerable:true,writable:false,value:33640});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_ELEMENTS_VERTICES",{configurable:false, enumerable:true,writable:false,value:33000});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_ELEMENTS_INDICES",{configurable:false, enumerable:true,writable:false,value:33001});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_MIN_LOD",{configurable:false, enumerable:true,writable:false,value:33082});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_MAX_LOD",{configurable:false, enumerable:true,writable:false,value:33083});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_BASE_LEVEL",{configurable:false, enumerable:true,writable:false,value:33084});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_MAX_LEVEL",{configurable:false, enumerable:true,writable:false,value:33085});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MIN",{configurable:false, enumerable:true,writable:false,value:32775});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX",{configurable:false, enumerable:true,writable:false,value:32776});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH_COMPONENT24",{configurable:false, enumerable:true,writable:false,value:33190});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_TEXTURE_LOD_BIAS",{configurable:false, enumerable:true,writable:false,value:34045});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_COMPARE_MODE",{configurable:false, enumerable:true,writable:false,value:34892});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_COMPARE_FUNC",{configurable:false, enumerable:true,writable:false,value:34893});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"CURRENT_QUERY",{configurable:false, enumerable:true,writable:false,value:34917});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"QUERY_RESULT",{configurable:false, enumerable:true,writable:false,value:34918});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"QUERY_RESULT_AVAILABLE",{configurable:false, enumerable:true,writable:false,value:34919});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STREAM_READ",{configurable:false, enumerable:true,writable:false,value:35041});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STREAM_COPY",{configurable:false, enumerable:true,writable:false,value:35042});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STATIC_READ",{configurable:false, enumerable:true,writable:false,value:35045});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"STATIC_COPY",{configurable:false, enumerable:true,writable:false,value:35046});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DYNAMIC_READ",{configurable:false, enumerable:true,writable:false,value:35049});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DYNAMIC_COPY",{configurable:false, enumerable:true,writable:false,value:35050});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_DRAW_BUFFERS",{configurable:false, enumerable:true,writable:false,value:34852});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER0",{configurable:false, enumerable:true,writable:false,value:34853});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER1",{configurable:false, enumerable:true,writable:false,value:34854});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER2",{configurable:false, enumerable:true,writable:false,value:34855});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER3",{configurable:false, enumerable:true,writable:false,value:34856});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER4",{configurable:false, enumerable:true,writable:false,value:34857});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER5",{configurable:false, enumerable:true,writable:false,value:34858});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER6",{configurable:false, enumerable:true,writable:false,value:34859});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER7",{configurable:false, enumerable:true,writable:false,value:34860});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER8",{configurable:false, enumerable:true,writable:false,value:34861});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER9",{configurable:false, enumerable:true,writable:false,value:34862});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER10",{configurable:false, enumerable:true,writable:false,value:34863});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER11",{configurable:false, enumerable:true,writable:false,value:34864});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER12",{configurable:false, enumerable:true,writable:false,value:34865});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER13",{configurable:false, enumerable:true,writable:false,value:34866});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER14",{configurable:false, enumerable:true,writable:false,value:34867});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_BUFFER15",{configurable:false, enumerable:true,writable:false,value:34868});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_FRAGMENT_UNIFORM_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:35657});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_VERTEX_UNIFORM_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:35658});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SAMPLER_3D",{configurable:false, enumerable:true,writable:false,value:35679});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SAMPLER_2D_SHADOW",{configurable:false, enumerable:true,writable:false,value:35682});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAGMENT_SHADER_DERIVATIVE_HINT",{configurable:false, enumerable:true,writable:false,value:35723});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"PIXEL_PACK_BUFFER",{configurable:false, enumerable:true,writable:false,value:35051});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"PIXEL_UNPACK_BUFFER",{configurable:false, enumerable:true,writable:false,value:35052});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"PIXEL_PACK_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:35053});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"PIXEL_UNPACK_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:35055});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FLOAT_MAT2x3",{configurable:false, enumerable:true,writable:false,value:35685});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FLOAT_MAT2x4",{configurable:false, enumerable:true,writable:false,value:35686});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FLOAT_MAT3x2",{configurable:false, enumerable:true,writable:false,value:35687});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FLOAT_MAT3x4",{configurable:false, enumerable:true,writable:false,value:35688});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FLOAT_MAT4x2",{configurable:false, enumerable:true,writable:false,value:35689});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FLOAT_MAT4x3",{configurable:false, enumerable:true,writable:false,value:35690});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SRGB",{configurable:false, enumerable:true,writable:false,value:35904});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SRGB8",{configurable:false, enumerable:true,writable:false,value:35905});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SRGB8_ALPHA8",{configurable:false, enumerable:true,writable:false,value:35907});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COMPARE_REF_TO_TEXTURE",{configurable:false, enumerable:true,writable:false,value:34894});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGBA32F",{configurable:false, enumerable:true,writable:false,value:34836});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB32F",{configurable:false, enumerable:true,writable:false,value:34837});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGBA16F",{configurable:false, enumerable:true,writable:false,value:34842});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB16F",{configurable:false, enumerable:true,writable:false,value:34843});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"VERTEX_ATTRIB_ARRAY_INTEGER",{configurable:false, enumerable:true,writable:false,value:35069});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_ARRAY_TEXTURE_LAYERS",{configurable:false, enumerable:true,writable:false,value:35071});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MIN_PROGRAM_TEXEL_OFFSET",{configurable:false, enumerable:true,writable:false,value:35076});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_PROGRAM_TEXEL_OFFSET",{configurable:false, enumerable:true,writable:false,value:35077});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_VARYING_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:35659});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_2D_ARRAY",{configurable:false, enumerable:true,writable:false,value:35866});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_BINDING_2D_ARRAY",{configurable:false, enumerable:true,writable:false,value:35869});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"R11F_G11F_B10F",{configurable:false, enumerable:true,writable:false,value:35898});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_INT_10F_11F_11F_REV",{configurable:false, enumerable:true,writable:false,value:35899});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB9_E5",{configurable:false, enumerable:true,writable:false,value:35901});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_INT_5_9_9_9_REV",{configurable:false, enumerable:true,writable:false,value:35902});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TRANSFORM_FEEDBACK_BUFFER_MODE",{configurable:false, enumerable:true,writable:false,value:35967});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:35968});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TRANSFORM_FEEDBACK_VARYINGS",{configurable:false, enumerable:true,writable:false,value:35971});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TRANSFORM_FEEDBACK_BUFFER_START",{configurable:false, enumerable:true,writable:false,value:35972});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TRANSFORM_FEEDBACK_BUFFER_SIZE",{configurable:false, enumerable:true,writable:false,value:35973});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN",{configurable:false, enumerable:true,writable:false,value:35976});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RASTERIZER_DISCARD",{configurable:false, enumerable:true,writable:false,value:35977});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:35978});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS",{configurable:false, enumerable:true,writable:false,value:35979});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INTERLEAVED_ATTRIBS",{configurable:false, enumerable:true,writable:false,value:35980});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SEPARATE_ATTRIBS",{configurable:false, enumerable:true,writable:false,value:35981});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TRANSFORM_FEEDBACK_BUFFER",{configurable:false, enumerable:true,writable:false,value:35982});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TRANSFORM_FEEDBACK_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:35983});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGBA32UI",{configurable:false, enumerable:true,writable:false,value:36208});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB32UI",{configurable:false, enumerable:true,writable:false,value:36209});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGBA16UI",{configurable:false, enumerable:true,writable:false,value:36214});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB16UI",{configurable:false, enumerable:true,writable:false,value:36215});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGBA8UI",{configurable:false, enumerable:true,writable:false,value:36220});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB8UI",{configurable:false, enumerable:true,writable:false,value:36221});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGBA32I",{configurable:false, enumerable:true,writable:false,value:36226});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB32I",{configurable:false, enumerable:true,writable:false,value:36227});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGBA16I",{configurable:false, enumerable:true,writable:false,value:36232});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB16I",{configurable:false, enumerable:true,writable:false,value:36233});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGBA8I",{configurable:false, enumerable:true,writable:false,value:36238});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB8I",{configurable:false, enumerable:true,writable:false,value:36239});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RED_INTEGER",{configurable:false, enumerable:true,writable:false,value:36244});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB_INTEGER",{configurable:false, enumerable:true,writable:false,value:36248});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGBA_INTEGER",{configurable:false, enumerable:true,writable:false,value:36249});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SAMPLER_2D_ARRAY",{configurable:false, enumerable:true,writable:false,value:36289});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SAMPLER_2D_ARRAY_SHADOW",{configurable:false, enumerable:true,writable:false,value:36292});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SAMPLER_CUBE_SHADOW",{configurable:false, enumerable:true,writable:false,value:36293});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_INT_VEC2",{configurable:false, enumerable:true,writable:false,value:36294});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_INT_VEC3",{configurable:false, enumerable:true,writable:false,value:36295});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_INT_VEC4",{configurable:false, enumerable:true,writable:false,value:36296});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INT_SAMPLER_2D",{configurable:false, enumerable:true,writable:false,value:36298});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INT_SAMPLER_3D",{configurable:false, enumerable:true,writable:false,value:36299});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INT_SAMPLER_CUBE",{configurable:false, enumerable:true,writable:false,value:36300});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INT_SAMPLER_2D_ARRAY",{configurable:false, enumerable:true,writable:false,value:36303});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_INT_SAMPLER_2D",{configurable:false, enumerable:true,writable:false,value:36306});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_INT_SAMPLER_3D",{configurable:false, enumerable:true,writable:false,value:36307});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_INT_SAMPLER_CUBE",{configurable:false, enumerable:true,writable:false,value:36308});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_INT_SAMPLER_2D_ARRAY",{configurable:false, enumerable:true,writable:false,value:36311});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH_COMPONENT32F",{configurable:false, enumerable:true,writable:false,value:36012});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH32F_STENCIL8",{configurable:false, enumerable:true,writable:false,value:36013});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FLOAT_32_UNSIGNED_INT_24_8_REV",{configurable:false, enumerable:true,writable:false,value:36269});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING",{configurable:false, enumerable:true,writable:false,value:33296});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE",{configurable:false, enumerable:true,writable:false,value:33297});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_ATTACHMENT_RED_SIZE",{configurable:false, enumerable:true,writable:false,value:33298});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_ATTACHMENT_GREEN_SIZE",{configurable:false, enumerable:true,writable:false,value:33299});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_ATTACHMENT_BLUE_SIZE",{configurable:false, enumerable:true,writable:false,value:33300});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE",{configurable:false, enumerable:true,writable:false,value:33301});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE",{configurable:false, enumerable:true,writable:false,value:33302});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE",{configurable:false, enumerable:true,writable:false,value:33303});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_DEFAULT",{configurable:false, enumerable:true,writable:false,value:33304});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_INT_24_8",{configurable:false, enumerable:true,writable:false,value:34042});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DEPTH24_STENCIL8",{configurable:false, enumerable:true,writable:false,value:35056});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNED_NORMALIZED",{configurable:false, enumerable:true,writable:false,value:35863});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_FRAMEBUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36006});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"READ_FRAMEBUFFER",{configurable:false, enumerable:true,writable:false,value:36008});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"DRAW_FRAMEBUFFER",{configurable:false, enumerable:true,writable:false,value:36009});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"READ_FRAMEBUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36010});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RENDERBUFFER_SAMPLES",{configurable:false, enumerable:true,writable:false,value:36011});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER",{configurable:false, enumerable:true,writable:false,value:36052});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_COLOR_ATTACHMENTS",{configurable:false, enumerable:true,writable:false,value:36063});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT1",{configurable:false, enumerable:true,writable:false,value:36065});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT2",{configurable:false, enumerable:true,writable:false,value:36066});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT3",{configurable:false, enumerable:true,writable:false,value:36067});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT4",{configurable:false, enumerable:true,writable:false,value:36068});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT5",{configurable:false, enumerable:true,writable:false,value:36069});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT6",{configurable:false, enumerable:true,writable:false,value:36070});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT7",{configurable:false, enumerable:true,writable:false,value:36071});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT8",{configurable:false, enumerable:true,writable:false,value:36072});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT9",{configurable:false, enumerable:true,writable:false,value:36073});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT10",{configurable:false, enumerable:true,writable:false,value:36074});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT11",{configurable:false, enumerable:true,writable:false,value:36075});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT12",{configurable:false, enumerable:true,writable:false,value:36076});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT13",{configurable:false, enumerable:true,writable:false,value:36077});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT14",{configurable:false, enumerable:true,writable:false,value:36078});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COLOR_ATTACHMENT15",{configurable:false, enumerable:true,writable:false,value:36079});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"FRAMEBUFFER_INCOMPLETE_MULTISAMPLE",{configurable:false, enumerable:true,writable:false,value:36182});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_SAMPLES",{configurable:false, enumerable:true,writable:false,value:36183});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"HALF_FLOAT",{configurable:false, enumerable:true,writable:false,value:5131});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RG",{configurable:false, enumerable:true,writable:false,value:33319});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RG_INTEGER",{configurable:false, enumerable:true,writable:false,value:33320});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"R8",{configurable:false, enumerable:true,writable:false,value:33321});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RG8",{configurable:false, enumerable:true,writable:false,value:33323});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"R16F",{configurable:false, enumerable:true,writable:false,value:33325});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"R32F",{configurable:false, enumerable:true,writable:false,value:33326});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RG16F",{configurable:false, enumerable:true,writable:false,value:33327});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RG32F",{configurable:false, enumerable:true,writable:false,value:33328});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"R8I",{configurable:false, enumerable:true,writable:false,value:33329});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"R8UI",{configurable:false, enumerable:true,writable:false,value:33330});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"R16I",{configurable:false, enumerable:true,writable:false,value:33331});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"R16UI",{configurable:false, enumerable:true,writable:false,value:33332});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"R32I",{configurable:false, enumerable:true,writable:false,value:33333});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"R32UI",{configurable:false, enumerable:true,writable:false,value:33334});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RG8I",{configurable:false, enumerable:true,writable:false,value:33335});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RG8UI",{configurable:false, enumerable:true,writable:false,value:33336});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RG16I",{configurable:false, enumerable:true,writable:false,value:33337});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RG16UI",{configurable:false, enumerable:true,writable:false,value:33338});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RG32I",{configurable:false, enumerable:true,writable:false,value:33339});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RG32UI",{configurable:false, enumerable:true,writable:false,value:33340});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"VERTEX_ARRAY_BINDING",{configurable:false, enumerable:true,writable:false,value:34229});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"R8_SNORM",{configurable:false, enumerable:true,writable:false,value:36756});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RG8_SNORM",{configurable:false, enumerable:true,writable:false,value:36757});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB8_SNORM",{configurable:false, enumerable:true,writable:false,value:36758});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGBA8_SNORM",{configurable:false, enumerable:true,writable:false,value:36759});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SIGNED_NORMALIZED",{configurable:false, enumerable:true,writable:false,value:36764});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COPY_READ_BUFFER",{configurable:false, enumerable:true,writable:false,value:36662});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COPY_WRITE_BUFFER",{configurable:false, enumerable:true,writable:false,value:36663});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COPY_READ_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36662});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"COPY_WRITE_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36663});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_BUFFER",{configurable:false, enumerable:true,writable:false,value:35345});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:35368});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_BUFFER_START",{configurable:false, enumerable:true,writable:false,value:35369});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_BUFFER_SIZE",{configurable:false, enumerable:true,writable:false,value:35370});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_VERTEX_UNIFORM_BLOCKS",{configurable:false, enumerable:true,writable:false,value:35371});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_FRAGMENT_UNIFORM_BLOCKS",{configurable:false, enumerable:true,writable:false,value:35373});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_COMBINED_UNIFORM_BLOCKS",{configurable:false, enumerable:true,writable:false,value:35374});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_UNIFORM_BUFFER_BINDINGS",{configurable:false, enumerable:true,writable:false,value:35375});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_UNIFORM_BLOCK_SIZE",{configurable:false, enumerable:true,writable:false,value:35376});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:35377});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:35379});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_BUFFER_OFFSET_ALIGNMENT",{configurable:false, enumerable:true,writable:false,value:35380});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ACTIVE_UNIFORM_BLOCKS",{configurable:false, enumerable:true,writable:false,value:35382});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_TYPE",{configurable:false, enumerable:true,writable:false,value:35383});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_SIZE",{configurable:false, enumerable:true,writable:false,value:35384});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_BLOCK_INDEX",{configurable:false, enumerable:true,writable:false,value:35386});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_OFFSET",{configurable:false, enumerable:true,writable:false,value:35387});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_ARRAY_STRIDE",{configurable:false, enumerable:true,writable:false,value:35388});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_MATRIX_STRIDE",{configurable:false, enumerable:true,writable:false,value:35389});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_IS_ROW_MAJOR",{configurable:false, enumerable:true,writable:false,value:35390});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_BLOCK_BINDING",{configurable:false, enumerable:true,writable:false,value:35391});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_BLOCK_DATA_SIZE",{configurable:false, enumerable:true,writable:false,value:35392});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_BLOCK_ACTIVE_UNIFORMS",{configurable:false, enumerable:true,writable:false,value:35394});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES",{configurable:false, enumerable:true,writable:false,value:35395});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER",{configurable:false, enumerable:true,writable:false,value:35396});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER",{configurable:false, enumerable:true,writable:false,value:35398});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INVALID_INDEX",{configurable:false, enumerable:true,writable:false,value:4294967295});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_VERTEX_OUTPUT_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:37154});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_FRAGMENT_INPUT_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:37157});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_SERVER_WAIT_TIMEOUT",{configurable:false, enumerable:true,writable:false,value:37137});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"OBJECT_TYPE",{configurable:false, enumerable:true,writable:false,value:37138});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SYNC_CONDITION",{configurable:false, enumerable:true,writable:false,value:37139});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SYNC_STATUS",{configurable:false, enumerable:true,writable:false,value:37140});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SYNC_FLAGS",{configurable:false, enumerable:true,writable:false,value:37141});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SYNC_FENCE",{configurable:false, enumerable:true,writable:false,value:37142});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SYNC_GPU_COMMANDS_COMPLETE",{configurable:false, enumerable:true,writable:false,value:37143});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"UNSIGNALED",{configurable:false, enumerable:true,writable:false,value:37144});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SIGNALED",{configurable:false, enumerable:true,writable:false,value:37145});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ALREADY_SIGNALED",{configurable:false, enumerable:true,writable:false,value:37146});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TIMEOUT_EXPIRED",{configurable:false, enumerable:true,writable:false,value:37147});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"CONDITION_SATISFIED",{configurable:false, enumerable:true,writable:false,value:37148});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"WAIT_FAILED",{configurable:false, enumerable:true,writable:false,value:37149});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SYNC_FLUSH_COMMANDS_BIT",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"VERTEX_ATTRIB_ARRAY_DIVISOR",{configurable:false, enumerable:true,writable:false,value:35070});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ANY_SAMPLES_PASSED",{configurable:false, enumerable:true,writable:false,value:35887});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"ANY_SAMPLES_PASSED_CONSERVATIVE",{configurable:false, enumerable:true,writable:false,value:36202});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"SAMPLER_BINDING",{configurable:false, enumerable:true,writable:false,value:35097});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"RGB10_A2UI",{configurable:false, enumerable:true,writable:false,value:36975});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"INT_2_10_10_10_REV",{configurable:false, enumerable:true,writable:false,value:36255});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TRANSFORM_FEEDBACK",{configurable:false, enumerable:true,writable:false,value:36386});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TRANSFORM_FEEDBACK_PAUSED",{configurable:false, enumerable:true,writable:false,value:36387});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TRANSFORM_FEEDBACK_ACTIVE",{configurable:false, enumerable:true,writable:false,value:36388});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TRANSFORM_FEEDBACK_BINDING",{configurable:false, enumerable:true,writable:false,value:36389});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_IMMUTABLE_FORMAT",{configurable:false, enumerable:true,writable:false,value:37167});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_ELEMENT_INDEX",{configurable:false, enumerable:true,writable:false,value:36203});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TEXTURE_IMMUTABLE_LEVELS",{configurable:false, enumerable:true,writable:false,value:33503});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"TIMEOUT_IGNORED",{configurable:false, enumerable:true,writable:false,value:-1});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext,"MAX_CLIENT_WAIT_TIMEOUT_WEBGL",{configurable:false, enumerable:true,writable:false,value:37447});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"canvas",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","canvas_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","canvas_set",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"drawingBufferWidth",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","drawingBufferWidth_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","drawingBufferWidth_set",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"drawingBufferHeight",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","drawingBufferHeight_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","drawingBufferHeight_set",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH_BUFFER_BIT",{configurable:false, enumerable:true,writable:false,value:256});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_BUFFER_BIT",{configurable:false, enumerable:true,writable:false,value:1024});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_BUFFER_BIT",{configurable:false, enumerable:true,writable:false,value:16384});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"POINTS",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"LINES",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"LINE_LOOP",{configurable:false, enumerable:true,writable:false,value:2});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"LINE_STRIP",{configurable:false, enumerable:true,writable:false,value:3});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TRIANGLES",{configurable:false, enumerable:true,writable:false,value:4});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TRIANGLE_STRIP",{configurable:false, enumerable:true,writable:false,value:5});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TRIANGLE_FAN",{configurable:false, enumerable:true,writable:false,value:6});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ZERO",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ONE",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SRC_COLOR",{configurable:false, enumerable:true,writable:false,value:768});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ONE_MINUS_SRC_COLOR",{configurable:false, enumerable:true,writable:false,value:769});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SRC_ALPHA",{configurable:false, enumerable:true,writable:false,value:770});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ONE_MINUS_SRC_ALPHA",{configurable:false, enumerable:true,writable:false,value:771});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DST_ALPHA",{configurable:false, enumerable:true,writable:false,value:772});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ONE_MINUS_DST_ALPHA",{configurable:false, enumerable:true,writable:false,value:773});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DST_COLOR",{configurable:false, enumerable:true,writable:false,value:774});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ONE_MINUS_DST_COLOR",{configurable:false, enumerable:true,writable:false,value:775});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SRC_ALPHA_SATURATE",{configurable:false, enumerable:true,writable:false,value:776});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FUNC_ADD",{configurable:false, enumerable:true,writable:false,value:32774});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BLEND_EQUATION",{configurable:false, enumerable:true,writable:false,value:32777});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BLEND_EQUATION_RGB",{configurable:false, enumerable:true,writable:false,value:32777});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BLEND_EQUATION_ALPHA",{configurable:false, enumerable:true,writable:false,value:34877});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FUNC_SUBTRACT",{configurable:false, enumerable:true,writable:false,value:32778});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FUNC_REVERSE_SUBTRACT",{configurable:false, enumerable:true,writable:false,value:32779});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BLEND_DST_RGB",{configurable:false, enumerable:true,writable:false,value:32968});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BLEND_SRC_RGB",{configurable:false, enumerable:true,writable:false,value:32969});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BLEND_DST_ALPHA",{configurable:false, enumerable:true,writable:false,value:32970});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BLEND_SRC_ALPHA",{configurable:false, enumerable:true,writable:false,value:32971});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"CONSTANT_COLOR",{configurable:false, enumerable:true,writable:false,value:32769});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ONE_MINUS_CONSTANT_COLOR",{configurable:false, enumerable:true,writable:false,value:32770});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"CONSTANT_ALPHA",{configurable:false, enumerable:true,writable:false,value:32771});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ONE_MINUS_CONSTANT_ALPHA",{configurable:false, enumerable:true,writable:false,value:32772});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BLEND_COLOR",{configurable:false, enumerable:true,writable:false,value:32773});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ARRAY_BUFFER",{configurable:false, enumerable:true,writable:false,value:34962});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ELEMENT_ARRAY_BUFFER",{configurable:false, enumerable:true,writable:false,value:34963});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ARRAY_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:34964});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ELEMENT_ARRAY_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:34965});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STREAM_DRAW",{configurable:false, enumerable:true,writable:false,value:35040});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STATIC_DRAW",{configurable:false, enumerable:true,writable:false,value:35044});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DYNAMIC_DRAW",{configurable:false, enumerable:true,writable:false,value:35048});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BUFFER_SIZE",{configurable:false, enumerable:true,writable:false,value:34660});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BUFFER_USAGE",{configurable:false, enumerable:true,writable:false,value:34661});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"CURRENT_VERTEX_ATTRIB",{configurable:false, enumerable:true,writable:false,value:34342});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRONT",{configurable:false, enumerable:true,writable:false,value:1028});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BACK",{configurable:false, enumerable:true,writable:false,value:1029});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRONT_AND_BACK",{configurable:false, enumerable:true,writable:false,value:1032});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_2D",{configurable:false, enumerable:true,writable:false,value:3553});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"CULL_FACE",{configurable:false, enumerable:true,writable:false,value:2884});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BLEND",{configurable:false, enumerable:true,writable:false,value:3042});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DITHER",{configurable:false, enumerable:true,writable:false,value:3024});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_TEST",{configurable:false, enumerable:true,writable:false,value:2960});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH_TEST",{configurable:false, enumerable:true,writable:false,value:2929});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SCISSOR_TEST",{configurable:false, enumerable:true,writable:false,value:3089});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"POLYGON_OFFSET_FILL",{configurable:false, enumerable:true,writable:false,value:32823});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SAMPLE_ALPHA_TO_COVERAGE",{configurable:false, enumerable:true,writable:false,value:32926});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SAMPLE_COVERAGE",{configurable:false, enumerable:true,writable:false,value:32928});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"NO_ERROR",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INVALID_ENUM",{configurable:false, enumerable:true,writable:false,value:1280});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INVALID_VALUE",{configurable:false, enumerable:true,writable:false,value:1281});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INVALID_OPERATION",{configurable:false, enumerable:true,writable:false,value:1282});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"OUT_OF_MEMORY",{configurable:false, enumerable:true,writable:false,value:1285});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"CW",{configurable:false, enumerable:true,writable:false,value:2304});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"CCW",{configurable:false, enumerable:true,writable:false,value:2305});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"LINE_WIDTH",{configurable:false, enumerable:true,writable:false,value:2849});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ALIASED_POINT_SIZE_RANGE",{configurable:false, enumerable:true,writable:false,value:33901});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ALIASED_LINE_WIDTH_RANGE",{configurable:false, enumerable:true,writable:false,value:33902});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"CULL_FACE_MODE",{configurable:false, enumerable:true,writable:false,value:2885});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRONT_FACE",{configurable:false, enumerable:true,writable:false,value:2886});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH_RANGE",{configurable:false, enumerable:true,writable:false,value:2928});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:2930});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH_CLEAR_VALUE",{configurable:false, enumerable:true,writable:false,value:2931});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH_FUNC",{configurable:false, enumerable:true,writable:false,value:2932});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_CLEAR_VALUE",{configurable:false, enumerable:true,writable:false,value:2961});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_FUNC",{configurable:false, enumerable:true,writable:false,value:2962});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_FAIL",{configurable:false, enumerable:true,writable:false,value:2964});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_PASS_DEPTH_FAIL",{configurable:false, enumerable:true,writable:false,value:2965});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_PASS_DEPTH_PASS",{configurable:false, enumerable:true,writable:false,value:2966});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_REF",{configurable:false, enumerable:true,writable:false,value:2967});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_VALUE_MASK",{configurable:false, enumerable:true,writable:false,value:2963});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:2968});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_BACK_FUNC",{configurable:false, enumerable:true,writable:false,value:34816});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_BACK_FAIL",{configurable:false, enumerable:true,writable:false,value:34817});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_BACK_PASS_DEPTH_FAIL",{configurable:false, enumerable:true,writable:false,value:34818});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_BACK_PASS_DEPTH_PASS",{configurable:false, enumerable:true,writable:false,value:34819});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_BACK_REF",{configurable:false, enumerable:true,writable:false,value:36003});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_BACK_VALUE_MASK",{configurable:false, enumerable:true,writable:false,value:36004});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_BACK_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:36005});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"VIEWPORT",{configurable:false, enumerable:true,writable:false,value:2978});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SCISSOR_BOX",{configurable:false, enumerable:true,writable:false,value:3088});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_CLEAR_VALUE",{configurable:false, enumerable:true,writable:false,value:3106});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_WRITEMASK",{configurable:false, enumerable:true,writable:false,value:3107});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNPACK_ALIGNMENT",{configurable:false, enumerable:true,writable:false,value:3317});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"PACK_ALIGNMENT",{configurable:false, enumerable:true,writable:false,value:3333});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_TEXTURE_SIZE",{configurable:false, enumerable:true,writable:false,value:3379});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_VIEWPORT_DIMS",{configurable:false, enumerable:true,writable:false,value:3386});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SUBPIXEL_BITS",{configurable:false, enumerable:true,writable:false,value:3408});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RED_BITS",{configurable:false, enumerable:true,writable:false,value:3410});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"GREEN_BITS",{configurable:false, enumerable:true,writable:false,value:3411});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BLUE_BITS",{configurable:false, enumerable:true,writable:false,value:3412});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ALPHA_BITS",{configurable:false, enumerable:true,writable:false,value:3413});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH_BITS",{configurable:false, enumerable:true,writable:false,value:3414});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_BITS",{configurable:false, enumerable:true,writable:false,value:3415});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"POLYGON_OFFSET_UNITS",{configurable:false, enumerable:true,writable:false,value:10752});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"POLYGON_OFFSET_FACTOR",{configurable:false, enumerable:true,writable:false,value:32824});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_BINDING_2D",{configurable:false, enumerable:true,writable:false,value:32873});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SAMPLE_BUFFERS",{configurable:false, enumerable:true,writable:false,value:32936});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SAMPLES",{configurable:false, enumerable:true,writable:false,value:32937});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SAMPLE_COVERAGE_VALUE",{configurable:false, enumerable:true,writable:false,value:32938});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SAMPLE_COVERAGE_INVERT",{configurable:false, enumerable:true,writable:false,value:32939});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COMPRESSED_TEXTURE_FORMATS",{configurable:false, enumerable:true,writable:false,value:34467});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DONT_CARE",{configurable:false, enumerable:true,writable:false,value:4352});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FASTEST",{configurable:false, enumerable:true,writable:false,value:4353});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"NICEST",{configurable:false, enumerable:true,writable:false,value:4354});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"GENERATE_MIPMAP_HINT",{configurable:false, enumerable:true,writable:false,value:33170});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BYTE",{configurable:false, enumerable:true,writable:false,value:5120});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_BYTE",{configurable:false, enumerable:true,writable:false,value:5121});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SHORT",{configurable:false, enumerable:true,writable:false,value:5122});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_SHORT",{configurable:false, enumerable:true,writable:false,value:5123});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INT",{configurable:false, enumerable:true,writable:false,value:5124});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_INT",{configurable:false, enumerable:true,writable:false,value:5125});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FLOAT",{configurable:false, enumerable:true,writable:false,value:5126});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH_COMPONENT",{configurable:false, enumerable:true,writable:false,value:6402});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ALPHA",{configurable:false, enumerable:true,writable:false,value:6406});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB",{configurable:false, enumerable:true,writable:false,value:6407});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGBA",{configurable:false, enumerable:true,writable:false,value:6408});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"LUMINANCE",{configurable:false, enumerable:true,writable:false,value:6409});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"LUMINANCE_ALPHA",{configurable:false, enumerable:true,writable:false,value:6410});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_SHORT_4_4_4_4",{configurable:false, enumerable:true,writable:false,value:32819});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_SHORT_5_5_5_1",{configurable:false, enumerable:true,writable:false,value:32820});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_SHORT_5_6_5",{configurable:false, enumerable:true,writable:false,value:33635});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAGMENT_SHADER",{configurable:false, enumerable:true,writable:false,value:35632});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"VERTEX_SHADER",{configurable:false, enumerable:true,writable:false,value:35633});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_VERTEX_ATTRIBS",{configurable:false, enumerable:true,writable:false,value:34921});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_VERTEX_UNIFORM_VECTORS",{configurable:false, enumerable:true,writable:false,value:36347});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_VARYING_VECTORS",{configurable:false, enumerable:true,writable:false,value:36348});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_COMBINED_TEXTURE_IMAGE_UNITS",{configurable:false, enumerable:true,writable:false,value:35661});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_VERTEX_TEXTURE_IMAGE_UNITS",{configurable:false, enumerable:true,writable:false,value:35660});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_TEXTURE_IMAGE_UNITS",{configurable:false, enumerable:true,writable:false,value:34930});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_FRAGMENT_UNIFORM_VECTORS",{configurable:false, enumerable:true,writable:false,value:36349});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SHADER_TYPE",{configurable:false, enumerable:true,writable:false,value:35663});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DELETE_STATUS",{configurable:false, enumerable:true,writable:false,value:35712});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"LINK_STATUS",{configurable:false, enumerable:true,writable:false,value:35714});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"VALIDATE_STATUS",{configurable:false, enumerable:true,writable:false,value:35715});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ATTACHED_SHADERS",{configurable:false, enumerable:true,writable:false,value:35717});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ACTIVE_UNIFORMS",{configurable:false, enumerable:true,writable:false,value:35718});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ACTIVE_ATTRIBUTES",{configurable:false, enumerable:true,writable:false,value:35721});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SHADING_LANGUAGE_VERSION",{configurable:false, enumerable:true,writable:false,value:35724});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"CURRENT_PROGRAM",{configurable:false, enumerable:true,writable:false,value:35725});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"NEVER",{configurable:false, enumerable:true,writable:false,value:512});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"LESS",{configurable:false, enumerable:true,writable:false,value:513});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"EQUAL",{configurable:false, enumerable:true,writable:false,value:514});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"LEQUAL",{configurable:false, enumerable:true,writable:false,value:515});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"GREATER",{configurable:false, enumerable:true,writable:false,value:516});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"NOTEQUAL",{configurable:false, enumerable:true,writable:false,value:517});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"GEQUAL",{configurable:false, enumerable:true,writable:false,value:518});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ALWAYS",{configurable:false, enumerable:true,writable:false,value:519});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"KEEP",{configurable:false, enumerable:true,writable:false,value:7680});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"REPLACE",{configurable:false, enumerable:true,writable:false,value:7681});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INCR",{configurable:false, enumerable:true,writable:false,value:7682});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DECR",{configurable:false, enumerable:true,writable:false,value:7683});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INVERT",{configurable:false, enumerable:true,writable:false,value:5386});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INCR_WRAP",{configurable:false, enumerable:true,writable:false,value:34055});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DECR_WRAP",{configurable:false, enumerable:true,writable:false,value:34056});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"VENDOR",{configurable:false, enumerable:true,writable:false,value:7936});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RENDERER",{configurable:false, enumerable:true,writable:false,value:7937});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"VERSION",{configurable:false, enumerable:true,writable:false,value:7938});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"NEAREST",{configurable:false, enumerable:true,writable:false,value:9728});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"LINEAR",{configurable:false, enumerable:true,writable:false,value:9729});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"NEAREST_MIPMAP_NEAREST",{configurable:false, enumerable:true,writable:false,value:9984});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"LINEAR_MIPMAP_NEAREST",{configurable:false, enumerable:true,writable:false,value:9985});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"NEAREST_MIPMAP_LINEAR",{configurable:false, enumerable:true,writable:false,value:9986});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"LINEAR_MIPMAP_LINEAR",{configurable:false, enumerable:true,writable:false,value:9987});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_MAG_FILTER",{configurable:false, enumerable:true,writable:false,value:10240});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_MIN_FILTER",{configurable:false, enumerable:true,writable:false,value:10241});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_WRAP_S",{configurable:false, enumerable:true,writable:false,value:10242});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_WRAP_T",{configurable:false, enumerable:true,writable:false,value:10243});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE",{configurable:false, enumerable:true,writable:false,value:5890});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_CUBE_MAP",{configurable:false, enumerable:true,writable:false,value:34067});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_BINDING_CUBE_MAP",{configurable:false, enumerable:true,writable:false,value:34068});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_CUBE_MAP_POSITIVE_X",{configurable:false, enumerable:true,writable:false,value:34069});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_CUBE_MAP_NEGATIVE_X",{configurable:false, enumerable:true,writable:false,value:34070});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_CUBE_MAP_POSITIVE_Y",{configurable:false, enumerable:true,writable:false,value:34071});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_CUBE_MAP_NEGATIVE_Y",{configurable:false, enumerable:true,writable:false,value:34072});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_CUBE_MAP_POSITIVE_Z",{configurable:false, enumerable:true,writable:false,value:34073});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_CUBE_MAP_NEGATIVE_Z",{configurable:false, enumerable:true,writable:false,value:34074});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_CUBE_MAP_TEXTURE_SIZE",{configurable:false, enumerable:true,writable:false,value:34076});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE0",{configurable:false, enumerable:true,writable:false,value:33984});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE1",{configurable:false, enumerable:true,writable:false,value:33985});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE2",{configurable:false, enumerable:true,writable:false,value:33986});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE3",{configurable:false, enumerable:true,writable:false,value:33987});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE4",{configurable:false, enumerable:true,writable:false,value:33988});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE5",{configurable:false, enumerable:true,writable:false,value:33989});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE6",{configurable:false, enumerable:true,writable:false,value:33990});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE7",{configurable:false, enumerable:true,writable:false,value:33991});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE8",{configurable:false, enumerable:true,writable:false,value:33992});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE9",{configurable:false, enumerable:true,writable:false,value:33993});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE10",{configurable:false, enumerable:true,writable:false,value:33994});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE11",{configurable:false, enumerable:true,writable:false,value:33995});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE12",{configurable:false, enumerable:true,writable:false,value:33996});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE13",{configurable:false, enumerable:true,writable:false,value:33997});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE14",{configurable:false, enumerable:true,writable:false,value:33998});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE15",{configurable:false, enumerable:true,writable:false,value:33999});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE16",{configurable:false, enumerable:true,writable:false,value:34000});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE17",{configurable:false, enumerable:true,writable:false,value:34001});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE18",{configurable:false, enumerable:true,writable:false,value:34002});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE19",{configurable:false, enumerable:true,writable:false,value:34003});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE20",{configurable:false, enumerable:true,writable:false,value:34004});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE21",{configurable:false, enumerable:true,writable:false,value:34005});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE22",{configurable:false, enumerable:true,writable:false,value:34006});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE23",{configurable:false, enumerable:true,writable:false,value:34007});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE24",{configurable:false, enumerable:true,writable:false,value:34008});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE25",{configurable:false, enumerable:true,writable:false,value:34009});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE26",{configurable:false, enumerable:true,writable:false,value:34010});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE27",{configurable:false, enumerable:true,writable:false,value:34011});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE28",{configurable:false, enumerable:true,writable:false,value:34012});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE29",{configurable:false, enumerable:true,writable:false,value:34013});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE30",{configurable:false, enumerable:true,writable:false,value:34014});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE31",{configurable:false, enumerable:true,writable:false,value:34015});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ACTIVE_TEXTURE",{configurable:false, enumerable:true,writable:false,value:34016});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"REPEAT",{configurable:false, enumerable:true,writable:false,value:10497});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"CLAMP_TO_EDGE",{configurable:false, enumerable:true,writable:false,value:33071});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MIRRORED_REPEAT",{configurable:false, enumerable:true,writable:false,value:33648});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FLOAT_VEC2",{configurable:false, enumerable:true,writable:false,value:35664});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FLOAT_VEC3",{configurable:false, enumerable:true,writable:false,value:35665});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FLOAT_VEC4",{configurable:false, enumerable:true,writable:false,value:35666});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INT_VEC2",{configurable:false, enumerable:true,writable:false,value:35667});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INT_VEC3",{configurable:false, enumerable:true,writable:false,value:35668});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INT_VEC4",{configurable:false, enumerable:true,writable:false,value:35669});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BOOL",{configurable:false, enumerable:true,writable:false,value:35670});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BOOL_VEC2",{configurable:false, enumerable:true,writable:false,value:35671});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BOOL_VEC3",{configurable:false, enumerable:true,writable:false,value:35672});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BOOL_VEC4",{configurable:false, enumerable:true,writable:false,value:35673});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FLOAT_MAT2",{configurable:false, enumerable:true,writable:false,value:35674});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FLOAT_MAT3",{configurable:false, enumerable:true,writable:false,value:35675});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FLOAT_MAT4",{configurable:false, enumerable:true,writable:false,value:35676});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SAMPLER_2D",{configurable:false, enumerable:true,writable:false,value:35678});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SAMPLER_CUBE",{configurable:false, enumerable:true,writable:false,value:35680});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_ENABLED",{configurable:false, enumerable:true,writable:false,value:34338});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_SIZE",{configurable:false, enumerable:true,writable:false,value:34339});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_STRIDE",{configurable:false, enumerable:true,writable:false,value:34340});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_TYPE",{configurable:false, enumerable:true,writable:false,value:34341});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_NORMALIZED",{configurable:false, enumerable:true,writable:false,value:34922});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_POINTER",{configurable:false, enumerable:true,writable:false,value:34373});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:34975});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"IMPLEMENTATION_COLOR_READ_TYPE",{configurable:false, enumerable:true,writable:false,value:35738});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"IMPLEMENTATION_COLOR_READ_FORMAT",{configurable:false, enumerable:true,writable:false,value:35739});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COMPILE_STATUS",{configurable:false, enumerable:true,writable:false,value:35713});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"LOW_FLOAT",{configurable:false, enumerable:true,writable:false,value:36336});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MEDIUM_FLOAT",{configurable:false, enumerable:true,writable:false,value:36337});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"HIGH_FLOAT",{configurable:false, enumerable:true,writable:false,value:36338});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"LOW_INT",{configurable:false, enumerable:true,writable:false,value:36339});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MEDIUM_INT",{configurable:false, enumerable:true,writable:false,value:36340});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"HIGH_INT",{configurable:false, enumerable:true,writable:false,value:36341});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER",{configurable:false, enumerable:true,writable:false,value:36160});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RENDERBUFFER",{configurable:false, enumerable:true,writable:false,value:36161});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGBA4",{configurable:false, enumerable:true,writable:false,value:32854});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB5_A1",{configurable:false, enumerable:true,writable:false,value:32855});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB565",{configurable:false, enumerable:true,writable:false,value:36194});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH_COMPONENT16",{configurable:false, enumerable:true,writable:false,value:33189});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_INDEX8",{configurable:false, enumerable:true,writable:false,value:36168});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH_STENCIL",{configurable:false, enumerable:true,writable:false,value:34041});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RENDERBUFFER_WIDTH",{configurable:false, enumerable:true,writable:false,value:36162});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RENDERBUFFER_HEIGHT",{configurable:false, enumerable:true,writable:false,value:36163});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RENDERBUFFER_INTERNAL_FORMAT",{configurable:false, enumerable:true,writable:false,value:36164});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RENDERBUFFER_RED_SIZE",{configurable:false, enumerable:true,writable:false,value:36176});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RENDERBUFFER_GREEN_SIZE",{configurable:false, enumerable:true,writable:false,value:36177});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RENDERBUFFER_BLUE_SIZE",{configurable:false, enumerable:true,writable:false,value:36178});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RENDERBUFFER_ALPHA_SIZE",{configurable:false, enumerable:true,writable:false,value:36179});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RENDERBUFFER_DEPTH_SIZE",{configurable:false, enumerable:true,writable:false,value:36180});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RENDERBUFFER_STENCIL_SIZE",{configurable:false, enumerable:true,writable:false,value:36181});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",{configurable:false, enumerable:true,writable:false,value:36048});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",{configurable:false, enumerable:true,writable:false,value:36049});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",{configurable:false, enumerable:true,writable:false,value:36050});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",{configurable:false, enumerable:true,writable:false,value:36051});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT0",{configurable:false, enumerable:true,writable:false,value:36064});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36096});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36128});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH_STENCIL_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:33306});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"NONE",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_COMPLETE",{configurable:false, enumerable:true,writable:false,value:36053});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_INCOMPLETE_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36054});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",{configurable:false, enumerable:true,writable:false,value:36055});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_INCOMPLETE_DIMENSIONS",{configurable:false, enumerable:true,writable:false,value:36057});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_UNSUPPORTED",{configurable:false, enumerable:true,writable:false,value:36061});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36006});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RENDERBUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36007});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_RENDERBUFFER_SIZE",{configurable:false, enumerable:true,writable:false,value:34024});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INVALID_FRAMEBUFFER_OPERATION",{configurable:false, enumerable:true,writable:false,value:1286});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNPACK_FLIP_Y_WEBGL",{configurable:false, enumerable:true,writable:false,value:37440});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNPACK_PREMULTIPLY_ALPHA_WEBGL",{configurable:false, enumerable:true,writable:false,value:37441});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"CONTEXT_LOST_WEBGL",{configurable:false, enumerable:true,writable:false,value:37442});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNPACK_COLORSPACE_CONVERSION_WEBGL",{configurable:false, enumerable:true,writable:false,value:37443});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"BROWSER_DEFAULT_WEBGL",{configurable:false, enumerable:true,writable:false,value:37444});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"READ_BUFFER",{configurable:false, enumerable:true,writable:false,value:3074});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNPACK_ROW_LENGTH",{configurable:false, enumerable:true,writable:false,value:3314});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNPACK_SKIP_ROWS",{configurable:false, enumerable:true,writable:false,value:3315});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNPACK_SKIP_PIXELS",{configurable:false, enumerable:true,writable:false,value:3316});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"PACK_ROW_LENGTH",{configurable:false, enumerable:true,writable:false,value:3330});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"PACK_SKIP_ROWS",{configurable:false, enumerable:true,writable:false,value:3331});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"PACK_SKIP_PIXELS",{configurable:false, enumerable:true,writable:false,value:3332});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR",{configurable:false, enumerable:true,writable:false,value:6144});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH",{configurable:false, enumerable:true,writable:false,value:6145});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STENCIL",{configurable:false, enumerable:true,writable:false,value:6146});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RED",{configurable:false, enumerable:true,writable:false,value:6403});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB8",{configurable:false, enumerable:true,writable:false,value:32849});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGBA8",{configurable:false, enumerable:true,writable:false,value:32856});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB10_A2",{configurable:false, enumerable:true,writable:false,value:32857});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_BINDING_3D",{configurable:false, enumerable:true,writable:false,value:32874});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNPACK_SKIP_IMAGES",{configurable:false, enumerable:true,writable:false,value:32877});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNPACK_IMAGE_HEIGHT",{configurable:false, enumerable:true,writable:false,value:32878});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_3D",{configurable:false, enumerable:true,writable:false,value:32879});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_WRAP_R",{configurable:false, enumerable:true,writable:false,value:32882});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_3D_TEXTURE_SIZE",{configurable:false, enumerable:true,writable:false,value:32883});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_INT_2_10_10_10_REV",{configurable:false, enumerable:true,writable:false,value:33640});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_ELEMENTS_VERTICES",{configurable:false, enumerable:true,writable:false,value:33000});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_ELEMENTS_INDICES",{configurable:false, enumerable:true,writable:false,value:33001});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_MIN_LOD",{configurable:false, enumerable:true,writable:false,value:33082});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_MAX_LOD",{configurable:false, enumerable:true,writable:false,value:33083});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_BASE_LEVEL",{configurable:false, enumerable:true,writable:false,value:33084});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_MAX_LEVEL",{configurable:false, enumerable:true,writable:false,value:33085});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MIN",{configurable:false, enumerable:true,writable:false,value:32775});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX",{configurable:false, enumerable:true,writable:false,value:32776});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH_COMPONENT24",{configurable:false, enumerable:true,writable:false,value:33190});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_TEXTURE_LOD_BIAS",{configurable:false, enumerable:true,writable:false,value:34045});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_COMPARE_MODE",{configurable:false, enumerable:true,writable:false,value:34892});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_COMPARE_FUNC",{configurable:false, enumerable:true,writable:false,value:34893});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"CURRENT_QUERY",{configurable:false, enumerable:true,writable:false,value:34917});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"QUERY_RESULT",{configurable:false, enumerable:true,writable:false,value:34918});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"QUERY_RESULT_AVAILABLE",{configurable:false, enumerable:true,writable:false,value:34919});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STREAM_READ",{configurable:false, enumerable:true,writable:false,value:35041});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STREAM_COPY",{configurable:false, enumerable:true,writable:false,value:35042});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STATIC_READ",{configurable:false, enumerable:true,writable:false,value:35045});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"STATIC_COPY",{configurable:false, enumerable:true,writable:false,value:35046});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DYNAMIC_READ",{configurable:false, enumerable:true,writable:false,value:35049});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DYNAMIC_COPY",{configurable:false, enumerable:true,writable:false,value:35050});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_DRAW_BUFFERS",{configurable:false, enumerable:true,writable:false,value:34852});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER0",{configurable:false, enumerable:true,writable:false,value:34853});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER1",{configurable:false, enumerable:true,writable:false,value:34854});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER2",{configurable:false, enumerable:true,writable:false,value:34855});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER3",{configurable:false, enumerable:true,writable:false,value:34856});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER4",{configurable:false, enumerable:true,writable:false,value:34857});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER5",{configurable:false, enumerable:true,writable:false,value:34858});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER6",{configurable:false, enumerable:true,writable:false,value:34859});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER7",{configurable:false, enumerable:true,writable:false,value:34860});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER8",{configurable:false, enumerable:true,writable:false,value:34861});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER9",{configurable:false, enumerable:true,writable:false,value:34862});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER10",{configurable:false, enumerable:true,writable:false,value:34863});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER11",{configurable:false, enumerable:true,writable:false,value:34864});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER12",{configurable:false, enumerable:true,writable:false,value:34865});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER13",{configurable:false, enumerable:true,writable:false,value:34866});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER14",{configurable:false, enumerable:true,writable:false,value:34867});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_BUFFER15",{configurable:false, enumerable:true,writable:false,value:34868});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_FRAGMENT_UNIFORM_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:35657});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_VERTEX_UNIFORM_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:35658});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SAMPLER_3D",{configurable:false, enumerable:true,writable:false,value:35679});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SAMPLER_2D_SHADOW",{configurable:false, enumerable:true,writable:false,value:35682});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAGMENT_SHADER_DERIVATIVE_HINT",{configurable:false, enumerable:true,writable:false,value:35723});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"PIXEL_PACK_BUFFER",{configurable:false, enumerable:true,writable:false,value:35051});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"PIXEL_UNPACK_BUFFER",{configurable:false, enumerable:true,writable:false,value:35052});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"PIXEL_PACK_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:35053});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"PIXEL_UNPACK_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:35055});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FLOAT_MAT2x3",{configurable:false, enumerable:true,writable:false,value:35685});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FLOAT_MAT2x4",{configurable:false, enumerable:true,writable:false,value:35686});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FLOAT_MAT3x2",{configurable:false, enumerable:true,writable:false,value:35687});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FLOAT_MAT3x4",{configurable:false, enumerable:true,writable:false,value:35688});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FLOAT_MAT4x2",{configurable:false, enumerable:true,writable:false,value:35689});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FLOAT_MAT4x3",{configurable:false, enumerable:true,writable:false,value:35690});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SRGB",{configurable:false, enumerable:true,writable:false,value:35904});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SRGB8",{configurable:false, enumerable:true,writable:false,value:35905});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SRGB8_ALPHA8",{configurable:false, enumerable:true,writable:false,value:35907});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COMPARE_REF_TO_TEXTURE",{configurable:false, enumerable:true,writable:false,value:34894});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGBA32F",{configurable:false, enumerable:true,writable:false,value:34836});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB32F",{configurable:false, enumerable:true,writable:false,value:34837});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGBA16F",{configurable:false, enumerable:true,writable:false,value:34842});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB16F",{configurable:false, enumerable:true,writable:false,value:34843});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_INTEGER",{configurable:false, enumerable:true,writable:false,value:35069});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_ARRAY_TEXTURE_LAYERS",{configurable:false, enumerable:true,writable:false,value:35071});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MIN_PROGRAM_TEXEL_OFFSET",{configurable:false, enumerable:true,writable:false,value:35076});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_PROGRAM_TEXEL_OFFSET",{configurable:false, enumerable:true,writable:false,value:35077});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_VARYING_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:35659});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_2D_ARRAY",{configurable:false, enumerable:true,writable:false,value:35866});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_BINDING_2D_ARRAY",{configurable:false, enumerable:true,writable:false,value:35869});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"R11F_G11F_B10F",{configurable:false, enumerable:true,writable:false,value:35898});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_INT_10F_11F_11F_REV",{configurable:false, enumerable:true,writable:false,value:35899});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB9_E5",{configurable:false, enumerable:true,writable:false,value:35901});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_INT_5_9_9_9_REV",{configurable:false, enumerable:true,writable:false,value:35902});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TRANSFORM_FEEDBACK_BUFFER_MODE",{configurable:false, enumerable:true,writable:false,value:35967});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:35968});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TRANSFORM_FEEDBACK_VARYINGS",{configurable:false, enumerable:true,writable:false,value:35971});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TRANSFORM_FEEDBACK_BUFFER_START",{configurable:false, enumerable:true,writable:false,value:35972});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TRANSFORM_FEEDBACK_BUFFER_SIZE",{configurable:false, enumerable:true,writable:false,value:35973});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN",{configurable:false, enumerable:true,writable:false,value:35976});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RASTERIZER_DISCARD",{configurable:false, enumerable:true,writable:false,value:35977});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:35978});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS",{configurable:false, enumerable:true,writable:false,value:35979});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INTERLEAVED_ATTRIBS",{configurable:false, enumerable:true,writable:false,value:35980});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SEPARATE_ATTRIBS",{configurable:false, enumerable:true,writable:false,value:35981});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TRANSFORM_FEEDBACK_BUFFER",{configurable:false, enumerable:true,writable:false,value:35982});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TRANSFORM_FEEDBACK_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:35983});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGBA32UI",{configurable:false, enumerable:true,writable:false,value:36208});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB32UI",{configurable:false, enumerable:true,writable:false,value:36209});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGBA16UI",{configurable:false, enumerable:true,writable:false,value:36214});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB16UI",{configurable:false, enumerable:true,writable:false,value:36215});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGBA8UI",{configurable:false, enumerable:true,writable:false,value:36220});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB8UI",{configurable:false, enumerable:true,writable:false,value:36221});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGBA32I",{configurable:false, enumerable:true,writable:false,value:36226});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB32I",{configurable:false, enumerable:true,writable:false,value:36227});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGBA16I",{configurable:false, enumerable:true,writable:false,value:36232});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB16I",{configurable:false, enumerable:true,writable:false,value:36233});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGBA8I",{configurable:false, enumerable:true,writable:false,value:36238});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB8I",{configurable:false, enumerable:true,writable:false,value:36239});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RED_INTEGER",{configurable:false, enumerable:true,writable:false,value:36244});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB_INTEGER",{configurable:false, enumerable:true,writable:false,value:36248});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGBA_INTEGER",{configurable:false, enumerable:true,writable:false,value:36249});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SAMPLER_2D_ARRAY",{configurable:false, enumerable:true,writable:false,value:36289});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SAMPLER_2D_ARRAY_SHADOW",{configurable:false, enumerable:true,writable:false,value:36292});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SAMPLER_CUBE_SHADOW",{configurable:false, enumerable:true,writable:false,value:36293});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_INT_VEC2",{configurable:false, enumerable:true,writable:false,value:36294});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_INT_VEC3",{configurable:false, enumerable:true,writable:false,value:36295});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_INT_VEC4",{configurable:false, enumerable:true,writable:false,value:36296});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INT_SAMPLER_2D",{configurable:false, enumerable:true,writable:false,value:36298});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INT_SAMPLER_3D",{configurable:false, enumerable:true,writable:false,value:36299});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INT_SAMPLER_CUBE",{configurable:false, enumerable:true,writable:false,value:36300});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INT_SAMPLER_2D_ARRAY",{configurable:false, enumerable:true,writable:false,value:36303});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_INT_SAMPLER_2D",{configurable:false, enumerable:true,writable:false,value:36306});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_INT_SAMPLER_3D",{configurable:false, enumerable:true,writable:false,value:36307});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_INT_SAMPLER_CUBE",{configurable:false, enumerable:true,writable:false,value:36308});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_INT_SAMPLER_2D_ARRAY",{configurable:false, enumerable:true,writable:false,value:36311});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH_COMPONENT32F",{configurable:false, enumerable:true,writable:false,value:36012});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH32F_STENCIL8",{configurable:false, enumerable:true,writable:false,value:36013});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FLOAT_32_UNSIGNED_INT_24_8_REV",{configurable:false, enumerable:true,writable:false,value:36269});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING",{configurable:false, enumerable:true,writable:false,value:33296});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE",{configurable:false, enumerable:true,writable:false,value:33297});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_RED_SIZE",{configurable:false, enumerable:true,writable:false,value:33298});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_GREEN_SIZE",{configurable:false, enumerable:true,writable:false,value:33299});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_BLUE_SIZE",{configurable:false, enumerable:true,writable:false,value:33300});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE",{configurable:false, enumerable:true,writable:false,value:33301});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE",{configurable:false, enumerable:true,writable:false,value:33302});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE",{configurable:false, enumerable:true,writable:false,value:33303});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_DEFAULT",{configurable:false, enumerable:true,writable:false,value:33304});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_INT_24_8",{configurable:false, enumerable:true,writable:false,value:34042});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DEPTH24_STENCIL8",{configurable:false, enumerable:true,writable:false,value:35056});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNED_NORMALIZED",{configurable:false, enumerable:true,writable:false,value:35863});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_FRAMEBUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36006});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"READ_FRAMEBUFFER",{configurable:false, enumerable:true,writable:false,value:36008});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"DRAW_FRAMEBUFFER",{configurable:false, enumerable:true,writable:false,value:36009});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"READ_FRAMEBUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36010});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RENDERBUFFER_SAMPLES",{configurable:false, enumerable:true,writable:false,value:36011});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER",{configurable:false, enumerable:true,writable:false,value:36052});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_COLOR_ATTACHMENTS",{configurable:false, enumerable:true,writable:false,value:36063});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT1",{configurable:false, enumerable:true,writable:false,value:36065});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT2",{configurable:false, enumerable:true,writable:false,value:36066});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT3",{configurable:false, enumerable:true,writable:false,value:36067});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT4",{configurable:false, enumerable:true,writable:false,value:36068});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT5",{configurable:false, enumerable:true,writable:false,value:36069});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT6",{configurable:false, enumerable:true,writable:false,value:36070});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT7",{configurable:false, enumerable:true,writable:false,value:36071});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT8",{configurable:false, enumerable:true,writable:false,value:36072});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT9",{configurable:false, enumerable:true,writable:false,value:36073});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT10",{configurable:false, enumerable:true,writable:false,value:36074});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT11",{configurable:false, enumerable:true,writable:false,value:36075});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT12",{configurable:false, enumerable:true,writable:false,value:36076});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT13",{configurable:false, enumerable:true,writable:false,value:36077});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT14",{configurable:false, enumerable:true,writable:false,value:36078});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COLOR_ATTACHMENT15",{configurable:false, enumerable:true,writable:false,value:36079});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"FRAMEBUFFER_INCOMPLETE_MULTISAMPLE",{configurable:false, enumerable:true,writable:false,value:36182});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_SAMPLES",{configurable:false, enumerable:true,writable:false,value:36183});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"HALF_FLOAT",{configurable:false, enumerable:true,writable:false,value:5131});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RG",{configurable:false, enumerable:true,writable:false,value:33319});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RG_INTEGER",{configurable:false, enumerable:true,writable:false,value:33320});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"R8",{configurable:false, enumerable:true,writable:false,value:33321});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RG8",{configurable:false, enumerable:true,writable:false,value:33323});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"R16F",{configurable:false, enumerable:true,writable:false,value:33325});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"R32F",{configurable:false, enumerable:true,writable:false,value:33326});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RG16F",{configurable:false, enumerable:true,writable:false,value:33327});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RG32F",{configurable:false, enumerable:true,writable:false,value:33328});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"R8I",{configurable:false, enumerable:true,writable:false,value:33329});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"R8UI",{configurable:false, enumerable:true,writable:false,value:33330});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"R16I",{configurable:false, enumerable:true,writable:false,value:33331});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"R16UI",{configurable:false, enumerable:true,writable:false,value:33332});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"R32I",{configurable:false, enumerable:true,writable:false,value:33333});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"R32UI",{configurable:false, enumerable:true,writable:false,value:33334});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RG8I",{configurable:false, enumerable:true,writable:false,value:33335});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RG8UI",{configurable:false, enumerable:true,writable:false,value:33336});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RG16I",{configurable:false, enumerable:true,writable:false,value:33337});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RG16UI",{configurable:false, enumerable:true,writable:false,value:33338});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RG32I",{configurable:false, enumerable:true,writable:false,value:33339});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RG32UI",{configurable:false, enumerable:true,writable:false,value:33340});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"VERTEX_ARRAY_BINDING",{configurable:false, enumerable:true,writable:false,value:34229});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"R8_SNORM",{configurable:false, enumerable:true,writable:false,value:36756});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RG8_SNORM",{configurable:false, enumerable:true,writable:false,value:36757});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB8_SNORM",{configurable:false, enumerable:true,writable:false,value:36758});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGBA8_SNORM",{configurable:false, enumerable:true,writable:false,value:36759});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SIGNED_NORMALIZED",{configurable:false, enumerable:true,writable:false,value:36764});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COPY_READ_BUFFER",{configurable:false, enumerable:true,writable:false,value:36662});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COPY_WRITE_BUFFER",{configurable:false, enumerable:true,writable:false,value:36663});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COPY_READ_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36662});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"COPY_WRITE_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:36663});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_BUFFER",{configurable:false, enumerable:true,writable:false,value:35345});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_BUFFER_BINDING",{configurable:false, enumerable:true,writable:false,value:35368});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_BUFFER_START",{configurable:false, enumerable:true,writable:false,value:35369});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_BUFFER_SIZE",{configurable:false, enumerable:true,writable:false,value:35370});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_VERTEX_UNIFORM_BLOCKS",{configurable:false, enumerable:true,writable:false,value:35371});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_FRAGMENT_UNIFORM_BLOCKS",{configurable:false, enumerable:true,writable:false,value:35373});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_COMBINED_UNIFORM_BLOCKS",{configurable:false, enumerable:true,writable:false,value:35374});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_UNIFORM_BUFFER_BINDINGS",{configurable:false, enumerable:true,writable:false,value:35375});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_UNIFORM_BLOCK_SIZE",{configurable:false, enumerable:true,writable:false,value:35376});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:35377});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:35379});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_BUFFER_OFFSET_ALIGNMENT",{configurable:false, enumerable:true,writable:false,value:35380});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ACTIVE_UNIFORM_BLOCKS",{configurable:false, enumerable:true,writable:false,value:35382});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_TYPE",{configurable:false, enumerable:true,writable:false,value:35383});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_SIZE",{configurable:false, enumerable:true,writable:false,value:35384});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_BLOCK_INDEX",{configurable:false, enumerable:true,writable:false,value:35386});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_OFFSET",{configurable:false, enumerable:true,writable:false,value:35387});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_ARRAY_STRIDE",{configurable:false, enumerable:true,writable:false,value:35388});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_MATRIX_STRIDE",{configurable:false, enumerable:true,writable:false,value:35389});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_IS_ROW_MAJOR",{configurable:false, enumerable:true,writable:false,value:35390});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_BLOCK_BINDING",{configurable:false, enumerable:true,writable:false,value:35391});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_BLOCK_DATA_SIZE",{configurable:false, enumerable:true,writable:false,value:35392});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_BLOCK_ACTIVE_UNIFORMS",{configurable:false, enumerable:true,writable:false,value:35394});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES",{configurable:false, enumerable:true,writable:false,value:35395});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER",{configurable:false, enumerable:true,writable:false,value:35396});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER",{configurable:false, enumerable:true,writable:false,value:35398});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INVALID_INDEX",{configurable:false, enumerable:true,writable:false,value:4294967295});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_VERTEX_OUTPUT_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:37154});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_FRAGMENT_INPUT_COMPONENTS",{configurable:false, enumerable:true,writable:false,value:37157});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_SERVER_WAIT_TIMEOUT",{configurable:false, enumerable:true,writable:false,value:37137});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"OBJECT_TYPE",{configurable:false, enumerable:true,writable:false,value:37138});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SYNC_CONDITION",{configurable:false, enumerable:true,writable:false,value:37139});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SYNC_STATUS",{configurable:false, enumerable:true,writable:false,value:37140});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SYNC_FLAGS",{configurable:false, enumerable:true,writable:false,value:37141});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SYNC_FENCE",{configurable:false, enumerable:true,writable:false,value:37142});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SYNC_GPU_COMMANDS_COMPLETE",{configurable:false, enumerable:true,writable:false,value:37143});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"UNSIGNALED",{configurable:false, enumerable:true,writable:false,value:37144});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SIGNALED",{configurable:false, enumerable:true,writable:false,value:37145});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ALREADY_SIGNALED",{configurable:false, enumerable:true,writable:false,value:37146});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TIMEOUT_EXPIRED",{configurable:false, enumerable:true,writable:false,value:37147});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"CONDITION_SATISFIED",{configurable:false, enumerable:true,writable:false,value:37148});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"WAIT_FAILED",{configurable:false, enumerable:true,writable:false,value:37149});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SYNC_FLUSH_COMMANDS_BIT",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"VERTEX_ATTRIB_ARRAY_DIVISOR",{configurable:false, enumerable:true,writable:false,value:35070});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ANY_SAMPLES_PASSED",{configurable:false, enumerable:true,writable:false,value:35887});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"ANY_SAMPLES_PASSED_CONSERVATIVE",{configurable:false, enumerable:true,writable:false,value:36202});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"SAMPLER_BINDING",{configurable:false, enumerable:true,writable:false,value:35097});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"RGB10_A2UI",{configurable:false, enumerable:true,writable:false,value:36975});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"INT_2_10_10_10_REV",{configurable:false, enumerable:true,writable:false,value:36255});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TRANSFORM_FEEDBACK",{configurable:false, enumerable:true,writable:false,value:36386});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TRANSFORM_FEEDBACK_PAUSED",{configurable:false, enumerable:true,writable:false,value:36387});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TRANSFORM_FEEDBACK_ACTIVE",{configurable:false, enumerable:true,writable:false,value:36388});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TRANSFORM_FEEDBACK_BINDING",{configurable:false, enumerable:true,writable:false,value:36389});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_IMMUTABLE_FORMAT",{configurable:false, enumerable:true,writable:false,value:37167});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_ELEMENT_INDEX",{configurable:false, enumerable:true,writable:false,value:36203});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TEXTURE_IMMUTABLE_LEVELS",{configurable:false, enumerable:true,writable:false,value:33503});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"TIMEOUT_IGNORED",{configurable:false, enumerable:true,writable:false,value:-1});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"MAX_CLIENT_WAIT_TIMEOUT_WEBGL",{configurable:false, enumerable:true,writable:false,value:37447});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"activeTexture",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","activeTexture",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"attachShader",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","attachShader",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"beginQuery",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","beginQuery",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"beginTransformFeedback",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","beginTransformFeedback",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"bindAttribLocation",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","bindAttribLocation",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"bindBuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","bindBuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"bindBufferBase",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","bindBufferBase",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"bindBufferRange",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","bindBufferRange",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"bindFramebuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","bindFramebuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"bindRenderbuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","bindRenderbuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"bindSampler",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","bindSampler",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"bindTexture",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","bindTexture",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"bindTransformFeedback",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","bindTransformFeedback",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"bindVertexArray",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","bindVertexArray",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"blendColor",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","blendColor",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"blendEquation",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","blendEquation",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"blendEquationSeparate",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","blendEquationSeparate",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"blendFunc",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","blendFunc",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"blendFuncSeparate",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","blendFuncSeparate",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"blitFramebuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","blitFramebuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"bufferData",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","bufferData",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"bufferSubData",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","bufferSubData",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"checkFramebufferStatus",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","checkFramebufferStatus",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"clear",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","clear",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"clearBufferfi",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","clearBufferfi",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"clearBufferfv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","clearBufferfv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"clearBufferiv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","clearBufferiv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"clearBufferuiv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","clearBufferuiv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"clearColor",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","clearColor",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"clearDepth",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","clearDepth",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"clearStencil",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","clearStencil",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"clientWaitSync",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","clientWaitSync",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"colorMask",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","colorMask",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"compileShader",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","compileShader",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"compressedTexImage2D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","compressedTexImage2D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"compressedTexImage3D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","compressedTexImage3D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"compressedTexSubImage2D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","compressedTexSubImage2D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"compressedTexSubImage3D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","compressedTexSubImage3D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"copyBufferSubData",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","copyBufferSubData",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"copyTexImage2D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","copyTexImage2D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"copyTexSubImage2D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","copyTexSubImage2D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"copyTexSubImage3D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","copyTexSubImage3D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"createBuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","createBuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"createFramebuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","createFramebuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"createProgram",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","createProgram",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"createQuery",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","createQuery",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"createRenderbuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","createRenderbuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"createSampler",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","createSampler",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"createShader",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","createShader",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"createTexture",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","createTexture",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"createTransformFeedback",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","createTransformFeedback",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"createVertexArray",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","createVertexArray",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"cullFace",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","cullFace",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"deleteBuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","deleteBuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"deleteFramebuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","deleteFramebuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"deleteProgram",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","deleteProgram",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"deleteQuery",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","deleteQuery",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"deleteRenderbuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","deleteRenderbuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"deleteSampler",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","deleteSampler",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"deleteShader",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","deleteShader",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"deleteSync",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","deleteSync",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"deleteTexture",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","deleteTexture",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"deleteTransformFeedback",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","deleteTransformFeedback",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"deleteVertexArray",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","deleteVertexArray",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"depthFunc",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","depthFunc",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"depthMask",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","depthMask",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"depthRange",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","depthRange",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"detachShader",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","detachShader",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"disable",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","disable",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"disableVertexAttribArray",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","disableVertexAttribArray",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"drawArrays",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","drawArrays",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"drawArraysInstanced",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","drawArraysInstanced",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"drawBuffers",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","drawBuffers",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"drawElements",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","drawElements",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"drawElementsInstanced",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","drawElementsInstanced",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"drawRangeElements",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","drawRangeElements",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"enable",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","enable",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"enableVertexAttribArray",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","enableVertexAttribArray",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"endQuery",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","endQuery",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"endTransformFeedback",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","endTransformFeedback",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"fenceSync",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","fenceSync",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"finish",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","finish",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"flush",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","flush",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"framebufferRenderbuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","framebufferRenderbuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"framebufferTexture2D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","framebufferTexture2D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"framebufferTextureLayer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","framebufferTextureLayer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"frontFace",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","frontFace",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"generateMipmap",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","generateMipmap",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getActiveAttrib",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getActiveAttrib",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getActiveUniform",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getActiveUniform",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getActiveUniformBlockName",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getActiveUniformBlockName",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getActiveUniformBlockParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getActiveUniformBlockParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getActiveUniforms",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getActiveUniforms",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getAttachedShaders",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getAttachedShaders",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getAttribLocation",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getAttribLocation",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getBufferParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getBufferParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getBufferSubData",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getBufferSubData",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getContextAttributes",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getContextAttributes",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getError",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getError",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getExtension",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getExtension",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getFragDataLocation",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getFragDataLocation",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getFramebufferAttachmentParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getFramebufferAttachmentParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getIndexedParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getIndexedParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getInternalformatParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getInternalformatParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getProgramInfoLog",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getProgramInfoLog",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getProgramParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getProgramParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getQuery",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getQuery",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getQueryParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getQueryParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getRenderbufferParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getRenderbufferParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getSamplerParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getSamplerParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getShaderInfoLog",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getShaderInfoLog",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getShaderParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getShaderParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getShaderPrecisionFormat",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getShaderPrecisionFormat",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getShaderSource",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getShaderSource",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getSupportedExtensions",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getSupportedExtensions",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getSyncParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getSyncParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getTexParameter",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getTexParameter",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getTransformFeedbackVarying",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getTransformFeedbackVarying",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getUniform",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getUniform",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getUniformBlockIndex",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getUniformBlockIndex",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getUniformIndices",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getUniformIndices",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getUniformLocation",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getUniformLocation",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getVertexAttrib",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getVertexAttrib",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"getVertexAttribOffset",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","getVertexAttribOffset",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"hint",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","hint",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"invalidateFramebuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","invalidateFramebuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"invalidateSubFramebuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","invalidateSubFramebuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"isBuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","isBuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"isContextLost",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","isContextLost",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"isEnabled",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","isEnabled",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"isFramebuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","isFramebuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"isProgram",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","isProgram",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"isQuery",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","isQuery",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"isRenderbuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","isRenderbuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"isSampler",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","isSampler",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"isShader",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","isShader",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"isSync",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","isSync",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"isTexture",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","isTexture",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"isTransformFeedback",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","isTransformFeedback",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"isVertexArray",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","isVertexArray",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"lineWidth",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","lineWidth",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"linkProgram",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","linkProgram",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"pauseTransformFeedback",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","pauseTransformFeedback",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"pixelStorei",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","pixelStorei",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"polygonOffset",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","polygonOffset",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"readBuffer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","readBuffer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"readPixels",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","readPixels",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"renderbufferStorage",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","renderbufferStorage",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"renderbufferStorageMultisample",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","renderbufferStorageMultisample",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"resumeTransformFeedback",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","resumeTransformFeedback",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"sampleCoverage",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","sampleCoverage",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"samplerParameterf",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","samplerParameterf",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"samplerParameteri",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","samplerParameteri",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"scissor",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","scissor",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"shaderSource",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","shaderSource",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"stencilFunc",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","stencilFunc",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"stencilFuncSeparate",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","stencilFuncSeparate",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"stencilMask",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","stencilMask",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"stencilMaskSeparate",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","stencilMaskSeparate",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"stencilOp",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","stencilOp",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"stencilOpSeparate",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","stencilOpSeparate",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"texImage2D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","texImage2D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"texImage3D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","texImage3D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"texParameterf",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","texParameterf",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"texParameteri",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","texParameteri",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"texStorage2D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","texStorage2D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"texStorage3D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","texStorage3D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"texSubImage2D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","texSubImage2D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"texSubImage3D",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","texSubImage3D",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"transformFeedbackVaryings",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","transformFeedbackVaryings",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform1f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform1f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform1fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform1fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform1i",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform1i",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform1iv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform1iv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform1ui",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform1ui",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform1uiv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform1uiv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform2f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform2f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform2fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform2fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform2i",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform2i",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform2iv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform2iv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform2ui",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform2ui",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform2uiv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform2uiv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform3f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform3f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform3fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform3fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform3i",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform3i",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform3iv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform3iv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform3ui",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform3ui",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform3uiv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform3uiv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform4f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform4f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform4fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform4fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform4i",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform4i",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform4iv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform4iv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform4ui",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform4ui",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniform4uiv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniform4uiv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniformBlockBinding",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniformBlockBinding",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniformMatrix2fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniformMatrix2fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniformMatrix2x3fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniformMatrix2x3fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniformMatrix2x4fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniformMatrix2x4fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniformMatrix3fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniformMatrix3fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniformMatrix3x2fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniformMatrix3x2fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniformMatrix3x4fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniformMatrix3x4fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniformMatrix4fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniformMatrix4fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniformMatrix4x2fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniformMatrix4x2fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"uniformMatrix4x3fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","uniformMatrix4x3fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"useProgram",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","useProgram",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"validateProgram",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","validateProgram",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"vertexAttrib1f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","vertexAttrib1f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"vertexAttrib1fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","vertexAttrib1fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"vertexAttrib2f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","vertexAttrib2f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"vertexAttrib2fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","vertexAttrib2fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"vertexAttrib3f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","vertexAttrib3f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"vertexAttrib3fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","vertexAttrib3fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"vertexAttrib4f",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","vertexAttrib4f",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"vertexAttrib4fv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","vertexAttrib4fv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"vertexAttribDivisor",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","vertexAttribDivisor",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"vertexAttribI4i",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","vertexAttribI4i",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"vertexAttribI4iv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","vertexAttribI4iv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"vertexAttribI4ui",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","vertexAttribI4ui",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"vertexAttribI4uiv",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","vertexAttribI4uiv",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"vertexAttribIPointer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","vertexAttribIPointer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"vertexAttribPointer",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","vertexAttribPointer",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"viewport",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","viewport",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"waitSync",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","waitSync",arguments)}});
xfvm.toolsFunc.defineProperty(WebGL2RenderingContext.prototype,"makeXRCompatible",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,WebGL2RenderingContext.prototype,"WebGL2RenderingContext","makeXRCompatible",arguments)}});

// ImageBitmapRenderingContext对象
ImageBitmapRenderingContext = function ImageBitmapRenderingContext(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(ImageBitmapRenderingContext,"ImageBitmapRenderingContext");
xfvm.toolsFunc.defineProperty(ImageBitmapRenderingContext.prototype,"canvas",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,ImageBitmapRenderingContext.prototype,"ImageBitmapRenderingContext","canvas_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,ImageBitmapRenderingContext.prototype,"ImageBitmapRenderingContext","canvas_set",arguments)}});
xfvm.toolsFunc.defineProperty(ImageBitmapRenderingContext.prototype,"transferFromImageBitmap",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,ImageBitmapRenderingContext.prototype,"ImageBitmapRenderingContext","transferFromImageBitmap",arguments)}});

// HTMLBodyElement对象
HTMLBodyElement = function HTMLBodyElement(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLBodyElement,"HTMLBodyElement");
Object.setPrototypeOf(HTMLBodyElement.prototype,HTMLElement.prototype);
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"text",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","text_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","text_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"link",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","link_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","link_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"vLink",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","vLink_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","vLink_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"aLink",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","aLink_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","aLink_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"bgColor",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","bgColor_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","bgColor_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"background",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","background_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","background_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onblur",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onblur_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onblur_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onerror",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onerror_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onerror_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onfocus",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onfocus_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onfocus_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onload",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onload_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onload_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onresize",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onresize_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onresize_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onscroll",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onscroll_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onscroll_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onafterprint",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onafterprint_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onafterprint_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onbeforeprint",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onbeforeprint_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onbeforeprint_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onbeforeunload",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onbeforeunload_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onbeforeunload_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onhashchange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onhashchange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onhashchange_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onlanguagechange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onlanguagechange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onlanguagechange_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onmessage",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onmessage_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onmessage_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onmessageerror",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onmessageerror_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onmessageerror_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onoffline",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onoffline_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onoffline_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"ononline",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","ononline_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","ononline_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onpagehide",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onpagehide_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onpagehide_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onpageshow",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onpageshow_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onpageshow_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onpopstate",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onpopstate_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onpopstate_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onrejectionhandled",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onrejectionhandled_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onrejectionhandled_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onstorage",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onstorage_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onstorage_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onunhandledrejection",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onunhandledrejection_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onunhandledrejection_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLBodyElement.prototype,"onunload",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onunload_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLBodyElement.prototype,"HTMLBodyElement","onunload_set",arguments)}});

// XMLHttpRequestEventTarget对象
XMLHttpRequestEventTarget = function XMLHttpRequestEventTarget(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(XMLHttpRequestEventTarget,"XMLHttpRequestEventTarget");
Object.setPrototypeOf(XMLHttpRequestEventTarget.prototype,EventTarget.prototype);
xfvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype,"onloadstart",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget","onloadstart_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget","onloadstart_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype,"onprogress",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget","onprogress_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget","onprogress_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype,"onabort",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget","onabort_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget","onabort_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype,"onerror",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget","onerror_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget","onerror_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype,"onload",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget","onload_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget","onload_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype,"ontimeout",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget","ontimeout_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget","ontimeout_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype,"onloadend",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget","onloadend_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget","onloadend_set",arguments)}});

// XMLHttpRequest对象
XMLHttpRequest = function XMLHttpRequest(){}
xfvm.toolsFunc.safeProto(XMLHttpRequest,"XMLHttpRequest");
Object.setPrototypeOf(XMLHttpRequest.prototype,XMLHttpRequestEventTarget.prototype);
xfvm.toolsFunc.defineProperty(XMLHttpRequest,"UNSENT",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(XMLHttpRequest,"OPENED",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(XMLHttpRequest,"HEADERS_RECEIVED",{configurable:false, enumerable:true,writable:false,value:2});
xfvm.toolsFunc.defineProperty(XMLHttpRequest,"LOADING",{configurable:false, enumerable:true,writable:false,value:3});
xfvm.toolsFunc.defineProperty(XMLHttpRequest,"DONE",{configurable:false, enumerable:true,writable:false,value:4});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"onreadystatechange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","onreadystatechange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","onreadystatechange_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"readyState",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","readyState_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","readyState_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"timeout",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","timeout_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","timeout_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"withCredentials",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","withCredentials_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","withCredentials_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"upload",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","upload_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","upload_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"responseURL",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","responseURL_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","responseURL_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"status",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","status_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","status_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"statusText",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","statusText_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","statusText_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"responseType",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","responseType_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","responseType_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"response",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","response_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","response_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"responseText",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","responseText_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","responseText_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"responseXML",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","responseXML_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","responseXML_set",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"UNSENT",{configurable:false, enumerable:true,writable:false,value:0});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"OPENED",{configurable:false, enumerable:true,writable:false,value:1});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"HEADERS_RECEIVED",{configurable:false, enumerable:true,writable:false,value:2});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"LOADING",{configurable:false, enumerable:true,writable:false,value:3});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"DONE",{configurable:false, enumerable:true,writable:false,value:4});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"abort",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","abort",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"getAllResponseHeaders",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","getAllResponseHeaders",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"getResponseHeader",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","getResponseHeader",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"open",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","open",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"overrideMimeType",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","overrideMimeType",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"send",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","send",arguments)}});
xfvm.toolsFunc.defineProperty(XMLHttpRequest.prototype,"setRequestHeader",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,XMLHttpRequest.prototype,"XMLHttpRequest","setRequestHeader",arguments)}});

// BatteryManager对象
BatteryManager = function BatteryManager(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(BatteryManager,"BatteryManager");
Object.setPrototypeOf(BatteryManager.prototype,EventTarget.prototype);
xfvm.toolsFunc.defineProperty(BatteryManager.prototype,"charging",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","charging_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","charging_set",arguments)}});
xfvm.toolsFunc.defineProperty(BatteryManager.prototype,"chargingTime",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","chargingTime_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","chargingTime_set",arguments)}});
xfvm.toolsFunc.defineProperty(BatteryManager.prototype,"dischargingTime",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","dischargingTime_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","dischargingTime_set",arguments)}});
xfvm.toolsFunc.defineProperty(BatteryManager.prototype,"level",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","level_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","level_set",arguments)}});
xfvm.toolsFunc.defineProperty(BatteryManager.prototype,"onchargingchange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","onchargingchange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","onchargingchange_set",arguments)}});
xfvm.toolsFunc.defineProperty(BatteryManager.prototype,"onchargingtimechange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","onchargingtimechange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","onchargingtimechange_set",arguments)}});
xfvm.toolsFunc.defineProperty(BatteryManager.prototype,"ondischargingtimechange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","ondischargingtimechange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","ondischargingtimechange_set",arguments)}});
xfvm.toolsFunc.defineProperty(BatteryManager.prototype,"onlevelchange",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","onlevelchange_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,BatteryManager.prototype,"BatteryManager","onlevelchange_set",arguments)}});

// HTMLAllCollection对象
HTMLAllCollection = function HTMLAllCollection(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(HTMLAllCollection,"HTMLAllCollection");
xfvm.toolsFunc.defineProperty(HTMLAllCollection.prototype,"length",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,HTMLAllCollection.prototype,"HTMLAllCollection","length_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,HTMLAllCollection.prototype,"HTMLAllCollection","length_set",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAllCollection.prototype,"item",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLAllCollection.prototype,"HTMLAllCollection","item",arguments)}});
xfvm.toolsFunc.defineProperty(HTMLAllCollection.prototype,"namedItem",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,HTMLAllCollection.prototype,"HTMLAllCollection","namedItem",arguments)}});

// NodeList对象
NodeList = function NodeList(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(NodeList,"NodeList");
xfvm.toolsFunc.defineProperty(NodeList.prototype,"entries",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,NodeList.prototype,"NodeList","entries",arguments)}});
xfvm.toolsFunc.defineProperty(NodeList.prototype,"keys",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,NodeList.prototype,"NodeList","keys",arguments)}});
xfvm.toolsFunc.defineProperty(NodeList.prototype,"values",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,NodeList.prototype,"NodeList","values",arguments)}});
xfvm.toolsFunc.defineProperty(NodeList.prototype,"forEach",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,NodeList.prototype,"NodeList","forEach",arguments)}});
xfvm.toolsFunc.defineProperty(NodeList.prototype,"length",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,NodeList.prototype,"NodeList","length_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,NodeList.prototype,"NodeList","length_set",arguments)}});
xfvm.toolsFunc.defineProperty(NodeList.prototype,"item",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,NodeList.prototype,"NodeList","item",arguments)}});

// DocumentFragment对象
DocumentFragment = function DocumentFragment(){}
xfvm.toolsFunc.safeProto(DocumentFragment,"DocumentFragment");
Object.setPrototypeOf(DocumentFragment.prototype,Node.prototype);
xfvm.toolsFunc.defineProperty(DocumentFragment.prototype,"children",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,DocumentFragment.prototype,"DocumentFragment","children_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,DocumentFragment.prototype,"DocumentFragment","children_set",arguments)}});
xfvm.toolsFunc.defineProperty(DocumentFragment.prototype,"firstElementChild",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,DocumentFragment.prototype,"DocumentFragment","firstElementChild_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,DocumentFragment.prototype,"DocumentFragment","firstElementChild_set",arguments)}});
xfvm.toolsFunc.defineProperty(DocumentFragment.prototype,"lastElementChild",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,DocumentFragment.prototype,"DocumentFragment","lastElementChild_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,DocumentFragment.prototype,"DocumentFragment","lastElementChild_set",arguments)}});
xfvm.toolsFunc.defineProperty(DocumentFragment.prototype,"childElementCount",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,DocumentFragment.prototype,"DocumentFragment","childElementCount_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,DocumentFragment.prototype,"DocumentFragment","childElementCount_set",arguments)}});
xfvm.toolsFunc.defineProperty(DocumentFragment.prototype,"append",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,DocumentFragment.prototype,"DocumentFragment","append",arguments)}});
xfvm.toolsFunc.defineProperty(DocumentFragment.prototype,"getElementById",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,DocumentFragment.prototype,"DocumentFragment","getElementById",arguments)}});
xfvm.toolsFunc.defineProperty(DocumentFragment.prototype,"prepend",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,DocumentFragment.prototype,"DocumentFragment","prepend",arguments)}});
xfvm.toolsFunc.defineProperty(DocumentFragment.prototype,"querySelector",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,DocumentFragment.prototype,"DocumentFragment","querySelector",arguments)}});
xfvm.toolsFunc.defineProperty(DocumentFragment.prototype,"querySelectorAll",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,DocumentFragment.prototype,"DocumentFragment","querySelectorAll",arguments)}});
xfvm.toolsFunc.defineProperty(DocumentFragment.prototype,"replaceChildren",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,DocumentFragment.prototype,"DocumentFragment","replaceChildren",arguments)}});

// IDBFactory对象
IDBFactory = function IDBFactory(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(IDBFactory,"IDBFactory");
xfvm.toolsFunc.defineProperty(IDBFactory.prototype,"cmp",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,IDBFactory.prototype,"IDBFactory","cmp",arguments)}});
xfvm.toolsFunc.defineProperty(IDBFactory.prototype,"databases",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,IDBFactory.prototype,"IDBFactory","databases",arguments)}});
xfvm.toolsFunc.defineProperty(IDBFactory.prototype,"deleteDatabase",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,IDBFactory.prototype,"IDBFactory","deleteDatabase",arguments)}});
xfvm.toolsFunc.defineProperty(IDBFactory.prototype,"open",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,IDBFactory.prototype,"IDBFactory","open",arguments)}});

indexedDB = {}
Object.setPrototypeOf(indexedDB,IDBFactory.prototype);
// DeprecatedStorageQuota对象
DeprecatedStorageQuota = function DeprecatedStorageQuota(){return xfvm.toolsFunc.throwError("TypeError","Illegal constructor")}
xfvm.toolsFunc.safeProto(DeprecatedStorageQuota,"DeprecatedStorageQuota");
xfvm.toolsFunc.defineProperty(DeprecatedStorageQuota.prototype,"queryUsageAndQuota",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,DeprecatedStorageQuota.prototype,"DeprecatedStorageQuota","queryUsageAndQuota",arguments)}});
xfvm.toolsFunc.defineProperty(DeprecatedStorageQuota.prototype,"requestQuota",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,DeprecatedStorageQuota.prototype,"requestQuota","requestQuota",arguments)}});
//  有问题
// chrome对象
chrome = {}
xfvm.toolsFunc.defineProperty(chrome,"loadTimes",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,chrome,"chrome","loadTimes",arguments)}});
xfvm.toolsFunc.defineProperty(chrome,"csi",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,chrome,"chrome","csi",arguments)}});
xfvm.toolsFunc.defineProperty(chrome,"app",{configurable:true, enumerable:true,writable:true,value:{}});

// webkitRequestFileSystem对象

// window 对象
// 删除对象
delete global;
delete Buffer;
delete WindowProperties;
// delete process;
delete GLOBAL;
delete root;
delete VMError;
delete globalThis[Symbol.toStringTag];
window = globalThis;
// 添加原型对象
Object.setPrototypeOf(window,Window.prototype);

// 创建atob btoa
xfvm.toolsFunc.defineProperty(window,"atob",{
    configurable: true,
    enumerable: true,
    writable: true,
    value:function atob(str){
        return xfvm.toolsFunc.base64.decode(str)
    }
});
xfvm.toolsFunc.defineProperty(window,"btoa",{
    configurable: true,
    enumerable: true,
    writable: true,
    value:function btoa(str){
        return xfvm.toolsFunc.base64.encode(str)
    }
});

xfvm.toolsFunc.defineProperty(window,"name",{
    configurable: true,
    enumerable: true,
    get: function (){return xfvm.toolsFunc.dispatch(this,window,"window","name_get",arguments)},
    set: function (){return xfvm.toolsFunc.dispatch(this,window,"window","name_set",arguments)}
});

xfvm.toolsFunc.defineProperty(window,"chrome",{
    configurable: false,
    enumerable: true,
    value: chrome,
    writable: true
});

xfvm.toolsFunc.defineProperty(window,"top",{configurable:false, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,window,"window","top_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,window,"window","top_set",arguments)}});
xfvm.toolsFunc.defineProperty(window,"self",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,window,"window","self_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,window,"window","self_set",arguments)}});
xfvm.toolsFunc.defineProperty(window,"parent",{configurable:true, enumerable:true,get:function (){return xfvm.toolsFunc.dispatch(this,window,"window","parent_get",arguments)},set:function (){return xfvm.toolsFunc.dispatch(this,window,"window","parent_set",arguments)}});
eval = xfvm.toolsFunc.hook(eval,undefined,false,function(){},function(){},true);
xfvm.toolsFunc.defineProperty(window,"setTimeout",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,window,"window","setTimeout",arguments)}});
xfvm.toolsFunc.defineProperty(window,"clearTimeout",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,window,"window","clearTimeout",arguments)}});
xfvm.toolsFunc.defineProperty(window,"setInterval",{configurable:true, enumerable:true,writable:true,value:function (){return xfvm.toolsFunc.dispatch(this,window,"window","setInterval",arguments)}});
// 全局变量初始化
xfvm.toolsFunc.createPlugin({
    "description":"Portable Document Format",
    "filename":"internal-pdf-viewer",
    "name":"PDF Viewer",
    "mimeTypes":[{
        "type":"text/pdf",
        "suffixes":"pdf",
        "description":"Portable Document Format"
    },{
        "type":"application/pdf",
        "suffixes":"pdf",
        "description":"Portable Document Format"
    }]
});
xfvm.toolsFunc.createPlugin({
    "description":"Portable Document Format",
    "filename":"internal-pdf-viewer",
    "name":"Chrome PDF Viewer",
    "mimeTypes":[{
        "type":"text/pdf",
        "suffixes":"pdf",
        "description":"Portable Document Format"
    },{
        "type":"application/pdf",
        "suffixes":"pdf",
        "description":"Portable Document Format"
    }]
});
xfvm.toolsFunc.createPlugin({
    "description":"Portable Document Format",
    "filename":"internal-pdf-viewer",
    "name":"Chromium PDF Viewer",
    "mimeTypes":[{
        "type":"text/pdf",
        "suffixes":"pdf",
        "description":"Portable Document Format"
    },{
        "type":"application/pdf",
        "suffixes":"pdf",
        "description":"Portable Document Format"
    }]
});
xfvm.toolsFunc.createPlugin({
    "description":"Portable Document Format",
    "filename":"internal-pdf-viewer",
    "name":"Microsoft Edge PDF Viewer",
    "mimeTypes":[{
        "type":"text/pdf",
        "suffixes":"pdf",
        "description":"Portable Document Format"
    },{
        "type":"application/pdf",
        "suffixes":"pdf",
        "description":"Portable Document Format"
    }]
});
xfvm.toolsFunc.createPlugin({
    "description":"Portable Document Format",
    "filename":"internal-pdf-viewer",
    "name":"WebKit built-in PDF",
    "mimeTypes":[{
        "type":"text/pdf",
        "suffixes":"pdf",
        "description":"Portable Document Format"
    },{
        "type":"application/pdf",
        "suffixes":"pdf",
        "description":"Portable Document Format"
    }]
});

document.childNodes = [];
document.nodeType = 9;
// 网页变量初始化

!function(){
    // onLeave = function(obj){
    //     obj.result = 1685968238413;
    // }
    // onLeave2 = function(obj){
    //     obj.result = 0.5;
    // }
    // Date.now = xfvm.toolsFunc.hook(Date.now, undefined,false,function(){},onLeave);
    // Date.prototype.getTime = xfvm.toolsFunc.hook(Date.prototype.getTime,undefined,false,function(){},onLeave);
    // Math.random = xfvm.toolsFunc.hook(Math.random,undefined,false,function(){},onLeave2);

    location.href = "http://gx.189.cn/owe_pay/fycz/index.jsp"
}();
document.createElement("body")

// 需要代理的对象
window = xfvm.toolsFunc.proxy(window,"window");
document = xfvm.toolsFunc.proxy(document,"document");
location = xfvm.toolsFunc.proxy(location,"location");
navigator = xfvm.toolsFunc.proxy(navigator,"navigator");



// let mouseEvent = [
//     {
//       "clientX": 9,
//       "clientY": 824,
//       "type": "mousemove",
//       "timeStamp": 20967.295000000377
//     },
//     {
//       "clientX": 9,
//       "clientY": 824,
//       "type": "mousemove",
//       "timeStamp": 20967.295000000377
//     },
//     {
//       "clientX": 9,
//       "clientY": 823,
//       "type": "mousemove",
//       "timeStamp": 21024.27499999976
//     },
//     {
//       "clientX": 9,
//       "clientY": 822,
//       "type": "mousemove",
//       "timeStamp": 21026.754999999866
//     },
//     {
//       "clientX": 9,
//       "clientY": 821,
//       "type": "mousemove",
//       "timeStamp": 21027.82500000012
//     },
//     {
//       "clientX": 9,
//       "clientY": 820,
//       "type": "mousemove",
//       "timeStamp": 21032.28500000023
//     },
//     {
//       "clientX": 9,
//       "clientY": 819,
//       "type": "mousemove",
//       "timeStamp": 21032.764999999927
//     },
//     {
//       "clientX": 10,
//       "clientY": 819,
//       "type": "mousemove",
//       "timeStamp": 21034.059999999954
//     },
//     {
//       "clientX": 10,
//       "clientY": 818,
//       "type": "mousemove",
//       "timeStamp": 21034.349999999904
//     },
//     {
//       "clientX": 11,
//       "clientY": 818,
//       "type": "mousemove",
//       "timeStamp": 21035.455000000184
//     },
//     {
//       "clientX": 11,
//       "clientY": 817,
//       "type": "mousemove",
//       "timeStamp": 21036.28000000026
//     },
//     {
//       "clientX": 11,
//       "clientY": 816,
//       "type": "mousemove",
//       "timeStamp": 21038.19999999996
//     },
//     {
//       "clientX": 12,
//       "clientY": 815,
//       "type": "mousemove",
//       "timeStamp": 21039.44500000034
//     },
//     {
//       "clientX": 13,
//       "clientY": 814,
//       "type": "mousemove",
//       "timeStamp": 21041.57000000032
//     },
//     {
//       "clientX": 14,
//       "clientY": 812,
//       "type": "mousemove",
//       "timeStamp": 21042.31499999969
//     },
//     {
//       "clientX": 14,
//       "clientY": 811,
//       "type": "mousemove",
//       "timeStamp": 21044.464999999946
//     },
//     {
//       "clientX": 15,
//       "clientY": 810,
//       "type": "mousemove",
//       "timeStamp": 21045.470000000023
//     },
//     {
//       "clientX": 16,
//       "clientY": 808,
//       "type": "mousemove",
//       "timeStamp": 21046.50000000038
//     },
//     {
//       "clientX": 17,
//       "clientY": 808,
//       "type": "mousemove",
//       "timeStamp": 21047.324999999546
//     },
//     {
//       "clientX": 17,
//       "clientY": 807,
//       "type": "mousemove",
//       "timeStamp": 21048.2149999998
//     },
//     {
//       "clientX": 17,
//       "clientY": 805,
//       "type": "mousemove",
//       "timeStamp": 21049.21000000013
//     },
//     {
//       "clientX": 18,
//       "clientY": 804,
//       "type": "mousemove",
//       "timeStamp": 21050.199999999677
//     },
//     {
//       "clientX": 19,
//       "clientY": 803,
//       "type": "mousemove",
//       "timeStamp": 21051.26999999993
//     },
//     {
//       "clientX": 20,
//       "clientY": 802,
//       "type": "mousemove",
//       "timeStamp": 21052.169999999933
//     },
//     {
//       "clientX": 21,
//       "clientY": 800,
//       "type": "mousemove",
//       "timeStamp": 21053.474999999708
//     },
//     {
//       "clientX": 22,
//       "clientY": 799,
//       "type": "mousemove",
//       "timeStamp": 21054.164999999557
//     },
//     {
//       "clientX": 22,
//       "clientY": 797,
//       "type": "mousemove",
//       "timeStamp": 21055.409999999938
//     },
//     {
//       "clientX": 23,
//       "clientY": 796,
//       "type": "mousemove",
//       "timeStamp": 21056.14499999956
//     },
//     {
//       "clientX": 24,
//       "clientY": 795,
//       "type": "mousemove",
//       "timeStamp": 21057.27999999999
//     },
//     {
//       "clientX": 25,
//       "clientY": 793,
//       "type": "mousemove",
//       "timeStamp": 21058.194999999614
//     },
//     {
//       "clientX": 26,
//       "clientY": 791,
//       "type": "mousemove",
//       "timeStamp": 21059.159999999792
//     },
//     {
//       "clientX": 28,
//       "clientY": 789,
//       "type": "mousemove",
//       "timeStamp": 21060.449999999946
//     },
//     {
//       "clientX": 28,
//       "clientY": 788,
//       "type": "mousemove",
//       "timeStamp": 21061.235000000124
//     },
//     {
//       "clientX": 29,
//       "clientY": 786,
//       "type": "mousemove",
//       "timeStamp": 21062.19499999952
//     },
//     {
//       "clientX": 30,
//       "clientY": 784,
//       "type": "mousemove",
//       "timeStamp": 21063.145000000077
//     },
//     {
//       "clientX": 31,
//       "clientY": 782,
//       "type": "mousemove",
//       "timeStamp": 21064.264999999978
//     },
//     {
//       "clientX": 33,
//       "clientY": 779,
//       "type": "mousemove",
//       "timeStamp": 21065.349999999853
//     },
//     {
//       "clientX": 34,
//       "clientY": 778,
//       "type": "mousemove",
//       "timeStamp": 21066.165000000183
//     },
//     {
//       "clientX": 36,
//       "clientY": 776,
//       "type": "mousemove",
//       "timeStamp": 21067.49000000036
//     },
//     {
//       "clientX": 37,
//       "clientY": 774,
//       "type": "mousemove",
//       "timeStamp": 21068.194999999832
//     },
//     {
//       "clientX": 37,
//       "clientY": 771,
//       "type": "mousemove",
//       "timeStamp": 21069.23000000006
//     },
//     {
//       "clientX": 39,
//       "clientY": 768,
//       "type": "mousemove",
//       "timeStamp": 21070.33500000034
//     },
//     {
//       "clientX": 41,
//       "clientY": 766,
//       "type": "mousemove",
//       "timeStamp": 21071.25999999971
//     },
//     {
//       "clientX": 42,
//       "clientY": 764,
//       "type": "mousemove",
//       "timeStamp": 21072.290000000066
//     },
//     {
//       "clientX": 44,
//       "clientY": 762,
//       "type": "mousemove",
//       "timeStamp": 21073.18000000032
//     },
//     {
//       "clientX": 45,
//       "clientY": 759,
//       "type": "mousemove",
//       "timeStamp": 21074.43499999954
//     },
//     {
//       "clientX": 47,
//       "clientY": 756,
//       "type": "mousemove",
//       "timeStamp": 21075.130000000172
//     },
//     {
//       "clientX": 49,
//       "clientY": 754,
//       "type": "mousemove",
//       "timeStamp": 21076.324999999997
//     },
//     {
//       "clientX": 51,
//       "clientY": 751,
//       "type": "mousemove",
//       "timeStamp": 21077.150000000074
//     },
//     {
//       "clientX": 53,
//       "clientY": 747,
//       "type": "mousemove",
//       "timeStamp": 21078.269999999975
//     },
//     {
//       "clientX": 55,
//       "clientY": 744,
//       "type": "mousemove",
//       "timeStamp": 21079.259999999522
//     },
//     {
//       "clientX": 57,
//       "clientY": 742,
//       "type": "mousemove",
//       "timeStamp": 21080.175000000054
//     },
//     {
//       "clientX": 59,
//       "clientY": 739,
//       "type": "mousemove",
//       "timeStamp": 21081.430000000182
//     },
//     {
//       "clientX": 61,
//       "clientY": 736,
//       "type": "mousemove",
//       "timeStamp": 21082.250000000386
//     },
//     {
//       "clientX": 63,
//       "clientY": 732,
//       "type": "mousemove",
//       "timeStamp": 21083.15500000026
//     },
//     {
//       "clientX": 65,
//       "clientY": 729,
//       "type": "mousemove",
//       "timeStamp": 21084.24500000001
//     },
//     {
//       "clientX": 66,
//       "clientY": 727,
//       "type": "mousemove",
//       "timeStamp": 21085.180000000037
//     },
//     {
//       "clientX": 70,
//       "clientY": 723,
//       "type": "mousemove",
//       "timeStamp": 21086.83999999994
//     },
//     {
//       "clientX": 72,
//       "clientY": 720,
//       "type": "mousemove",
//       "timeStamp": 21087.19999999994
//     },
//     {
//       "clientX": 73,
//       "clientY": 717,
//       "type": "mousemove",
//       "timeStamp": 21088.424999999916
//     },
//     {
//       "clientX": 75,
//       "clientY": 714,
//       "type": "mousemove",
//       "timeStamp": 21089.17500000007
//     },
//     {
//       "clientX": 77,
//       "clientY": 712,
//       "type": "mousemove",
//       "timeStamp": 21090.234999999666
//     },
//     {
//       "clientX": 80,
//       "clientY": 709,
//       "type": "mousemove",
//       "timeStamp": 21091.199999999844
//     },
//     {
//       "clientX": 82,
//       "clientY": 706,
//       "type": "mousemove",
//       "timeStamp": 21092.219999999543
//     },
//     {
//       "clientX": 84,
//       "clientY": 703,
//       "type": "mousemove",
//       "timeStamp": 21093.329999999696
//     },
//     {
//       "clientX": 87,
//       "clientY": 698,
//       "type": "mousemove",
//       "timeStamp": 21094.254999999976
//     },
//     {
//       "clientX": 89,
//       "clientY": 697,
//       "type": "mousemove",
//       "timeStamp": 21095.554999999877
//     },
//     {
//       "clientX": 91,
//       "clientY": 694,
//       "type": "mousemove",
//       "timeStamp": 21096.0699999996
//     },
//     {
//       "clientX": 93,
//       "clientY": 691,
//       "type": "mousemove",
//       "timeStamp": 21097.380000000157
//     },
//     {
//       "clientX": 95,
//       "clientY": 689,
//       "type": "mousemove",
//       "timeStamp": 21098.140000000058
//     },
//     {
//       "clientX": 97,
//       "clientY": 685,
//       "type": "mousemove",
//       "timeStamp": 21099.215000000186
//     },
//     {
//       "clientX": 99,
//       "clientY": 683,
//       "type": "mousemove",
//       "timeStamp": 21100.169999999707
//     },
//     {
//       "clientX": 101,
//       "clientY": 680,
//       "type": "mousemove",
//       "timeStamp": 21101.244999999835
//     },
//     {
//       "clientX": 104,
//       "clientY": 677,
//       "type": "mousemove",
//       "timeStamp": 21102.85500000009
//     },
//     {
//       "clientX": 106,
//       "clientY": 674,
//       "type": "mousemove",
//       "timeStamp": 21103.04499999984
//     },
//     {
//       "clientX": 108,
//       "clientY": 672,
//       "type": "mousemove",
//       "timeStamp": 21104.34499999974
//     },
//     {
//       "clientX": 109,
//       "clientY": 669,
//       "type": "mousemove",
//       "timeStamp": 21105.14499999954
//     },
//     {
//       "clientX": 110,
//       "clientY": 668,
//       "type": "mousemove",
//       "timeStamp": 21106.25499999969
//     },
//     {
//       "clientX": 113,
//       "clientY": 665,
//       "type": "mousemove",
//       "timeStamp": 21107.210000000123
//     },
//     {
//       "clientX": 114,
//       "clientY": 662,
//       "type": "mousemove",
//       "timeStamp": 21108.30999999962
//     },
//     {
//       "clientX": 116,
//       "clientY": 660,
//       "type": "mousemove",
//       "timeStamp": 21109.370000000126
//     },
//     {
//       "clientX": 118,
//       "clientY": 657,
//       "type": "mousemove",
//       "timeStamp": 21110.155000000304
//     },
//     {
//       "clientX": 120,
//       "clientY": 654,
//       "type": "mousemove",
//       "timeStamp": 21111.249999999927
//     },
//     {
//       "clientX": 122,
//       "clientY": 652,
//       "type": "mousemove",
//       "timeStamp": 21112.189999999828
//     },
//     {
//       "clientX": 123,
//       "clientY": 650,
//       "type": "mousemove",
//       "timeStamp": 21113.140000000385
//     },
//     {
//       "clientX": 125,
//       "clientY": 648,
//       "type": "mousemove",
//       "timeStamp": 21114.199999999983
//     },
//     {
//       "clientX": 127,
//       "clientY": 646,
//       "type": "mousemove",
//       "timeStamp": 21115.394999999808
//     },
//     {
//       "clientX": 129,
//       "clientY": 644,
//       "type": "mousemove",
//       "timeStamp": 21116.51499999971
//     },
//     {
//       "clientX": 129,
//       "clientY": 642,
//       "type": "mousemove",
//       "timeStamp": 21117.215000000215
//     },
//     {
//       "clientX": 131,
//       "clientY": 639,
//       "type": "mousemove",
//       "timeStamp": 21118.17499999961
//     },
//     {
//       "clientX": 133,
//       "clientY": 637,
//       "type": "mousemove",
//       "timeStamp": 21119.23999999999
//     },
//     {
//       "clientX": 134,
//       "clientY": 635,
//       "type": "mousemove",
//       "timeStamp": 21120.175000000017
//     },
//     {
//       "clientX": 136,
//       "clientY": 634,
//       "type": "mousemove",
//       "timeStamp": 21121.170000000347
//     },
//     {
//       "clientX": 137,
//       "clientY": 632,
//       "type": "mousemove",
//       "timeStamp": 21122.33500000002
//     },
//     {
//       "clientX": 139,
//       "clientY": 630,
//       "type": "mousemove",
//       "timeStamp": 21123.389999999745
//     },
//     {
//       "clientX": 141,
//       "clientY": 628,
//       "type": "mousemove",
//       "timeStamp": 21124.179999999797
//     },
//     {
//       "clientX": 141,
//       "clientY": 626,
//       "type": "mousemove",
//       "timeStamp": 21125.25000000005
//     },
//     {
//       "clientX": 143,
//       "clientY": 623,
//       "type": "mousemove",
//       "timeStamp": 21126.185000000078
//     },
//     {
//       "clientX": 144,
//       "clientY": 622,
//       "type": "mousemove",
//       "timeStamp": 21127.214999999524
//     },
//     {
//       "clientX": 146,
//       "clientY": 620,
//       "type": "mousemove",
//       "timeStamp": 21128.214999999727
//     },
//     {
//       "clientX": 147,
//       "clientY": 619,
//       "type": "mousemove",
//       "timeStamp": 21129.35000000016
//     },
//     {
//       "clientX": 149,
//       "clientY": 617,
//       "type": "mousemove",
//       "timeStamp": 21130.425000000287
//     },
//     {
//       "clientX": 150,
//       "clientY": 614,
//       "type": "mousemove",
//       "timeStamp": 21131.21500000034
//     },
//     {
//       "clientX": 151,
//       "clientY": 613,
//       "type": "mousemove",
//       "timeStamp": 21132.22500000029
//     },
//     {
//       "clientX": 153,
//       "clientY": 611,
//       "type": "mousemove",
//       "timeStamp": 21133.20500000009
//     },
//     {
//       "clientX": 155,
//       "clientY": 609,
//       "type": "mousemove",
//       "timeStamp": 21134.21500000004
//     },
//     {
//       "clientX": 156,
//       "clientY": 607,
//       "type": "mousemove",
//       "timeStamp": 21135.22499999999
//     },
//     {
//       "clientX": 158,
//       "clientY": 605,
//       "type": "mousemove",
//       "timeStamp": 21136.38499999979
//     },
//     {
//       "clientX": 159,
//       "clientY": 604,
//       "type": "mousemove",
//       "timeStamp": 21137.289999999666
//     },
//     {
//       "clientX": 161,
//       "clientY": 602,
//       "type": "mousemove",
//       "timeStamp": 21138.245000000097
//     },
//     {
//       "clientX": 163,
//       "clientY": 599,
//       "type": "mousemove",
//       "timeStamp": 21139.184999999998
//     },
//     {
//       "clientX": 163,
//       "clientY": 597,
//       "type": "mousemove",
//       "timeStamp": 21140.234999999848
//     },
//     {
//       "clientX": 165,
//       "clientY": 595,
//       "type": "mousemove",
//       "timeStamp": 21141.184999999496
//     },
//     {
//       "clientX": 167,
//       "clientY": 593,
//       "type": "mousemove",
//       "timeStamp": 21142.259999999624
//     },
//     {
//       "clientX": 169,
//       "clientY": 589,
//       "type": "mousemove",
//       "timeStamp": 21143.310000000383
//     },
//     {
//       "clientX": 171,
//       "clientY": 587,
//       "type": "mousemove",
//       "timeStamp": 21144.31499999955
//     },
//     {
//       "clientX": 172,
//       "clientY": 586,
//       "type": "mousemove",
//       "timeStamp": 21145.164999999906
//     },
//     {
//       "clientX": 174,
//       "clientY": 583,
//       "type": "mousemove",
//       "timeStamp": 21146.254999999655
//     },
//     {
//       "clientX": 177,
//       "clientY": 580,
//       "type": "mousemove",
//       "timeStamp": 21147.224999999708
//     },
//     {
//       "clientX": 179,
//       "clientY": 578,
//       "type": "mousemove",
//       "timeStamp": 21148.285000000214
//     },
//     {
//       "clientX": 180,
//       "clientY": 575,
//       "type": "mousemove",
//       "timeStamp": 21149.365000000216
//     },
//     {
//       "clientX": 183,
//       "clientY": 572,
//       "type": "mousemove",
//       "timeStamp": 21150.714999999764
//     },
//     {
//       "clientX": 185,
//       "clientY": 569,
//       "type": "mousemove",
//       "timeStamp": 21151.52500000022
//     },
//     {
//       "clientX": 185,
//       "clientY": 567,
//       "type": "mousemove",
//       "timeStamp": 21152.540000000045
//     },
//     {
//       "clientX": 187,
//       "clientY": 564,
//       "type": "mousemove",
//       "timeStamp": 21153.189999999995
//     },
//     {
//       "clientX": 189,
//       "clientY": 562,
//       "type": "mousemove",
//       "timeStamp": 21154.335000000174
//     },
//     {
//       "clientX": 192,
//       "clientY": 558,
//       "type": "mousemove",
//       "timeStamp": 21155.35
//     },
//     {
//       "clientX": 193,
//       "clientY": 556,
//       "type": "mousemove",
//       "timeStamp": 21156.535000000076
//     },
//     {
//       "clientX": 195,
//       "clientY": 554,
//       "type": "mousemove",
//       "timeStamp": 21157.7299999999
//     },
//     {
//       "clientX": 197,
//       "clientY": 552,
//       "type": "mousemove",
//       "timeStamp": 21159.17999999965
//     },
//     {
//       "clientX": 200,
//       "clientY": 547,
//       "type": "mousemove",
//       "timeStamp": 21159.875000000284
//     },
//     {
//       "clientX": 202,
//       "clientY": 546,
//       "type": "mousemove",
//       "timeStamp": 21160.52000000036
//     },
//     {
//       "clientX": 203,
//       "clientY": 543,
//       "type": "mousemove",
//       "timeStamp": 21161.439999999857
//     },
//     {
//       "clientX": 205,
//       "clientY": 540,
//       "type": "mousemove",
//       "timeStamp": 21162.444999999934
//     },
//     {
//       "clientX": 208,
//       "clientY": 535,
//       "type": "mousemove",
//       "timeStamp": 21163.50499999953
//     },
//     {
//       "clientX": 210,
//       "clientY": 534,
//       "type": "mousemove",
//       "timeStamp": 21164.93999999966
//     },
//     {
//       "clientX": 211,
//       "clientY": 531,
//       "type": "mousemove",
//       "timeStamp": 21165.759999999864
//     },
//     {
//       "clientX": 213,
//       "clientY": 528,
//       "type": "mousemove",
//       "timeStamp": 21166.439999999966
//     },
//     {
//       "clientX": 216,
//       "clientY": 524,
//       "type": "mousemove",
//       "timeStamp": 21167.905000000246
//     },
//     {
//       "clientX": 218,
//       "clientY": 522,
//       "type": "mousemove",
//       "timeStamp": 21168.195000000196
//     },
//     {
//       "clientX": 220,
//       "clientY": 519,
//       "type": "mousemove",
//       "timeStamp": 21169.46999999982
//     },
//     {
//       "clientX": 222,
//       "clientY": 516,
//       "type": "mousemove",
//       "timeStamp": 21170.55999999957
//     },
//     {
//       "clientX": 224,
//       "clientY": 513,
//       "type": "mousemove",
//       "timeStamp": 21171.1150000001
//     },
//     {
//       "clientX": 226,
//       "clientY": 510,
//       "type": "mousemove",
//       "timeStamp": 21172.270000000026
//     },
//     {
//       "clientX": 228,
//       "clientY": 507,
//       "type": "mousemove",
//       "timeStamp": 21173.149999999623
//     },
//     {
//       "clientX": 230,
//       "clientY": 504,
//       "type": "mousemove",
//       "timeStamp": 21174.14000000008
//     },
//     {
//       "clientX": 232,
//       "clientY": 501,
//       "type": "mousemove",
//       "timeStamp": 21175.145000000157
//     },
//     {
//       "clientX": 234,
//       "clientY": 498,
//       "type": "mousemove",
//       "timeStamp": 21176.164999999855
//     },
//     {
//       "clientX": 236,
//       "clientY": 495,
//       "type": "mousemove",
//       "timeStamp": 21177.310000000034
//     },
//     {
//       "clientX": 237,
//       "clientY": 494,
//       "type": "mousemove",
//       "timeStamp": 21178.42500000006
//     },
//     {
//       "clientX": 239,
//       "clientY": 491,
//       "type": "mousemove",
//       "timeStamp": 21179.245000000265
//     },
//     {
//       "clientX": 241,
//       "clientY": 487,
//       "type": "mousemove",
//       "timeStamp": 21180.24499999956
//     },
//     {
//       "clientX": 243,
//       "clientY": 485,
//       "type": "mousemove",
//       "timeStamp": 21181.14499999956
//     },
//     {
//       "clientX": 245,
//       "clientY": 482,
//       "type": "mousemove",
//       "timeStamp": 21182.160000000295
//     },
//     {
//       "clientX": 248,
//       "clientY": 479,
//       "type": "mousemove",
//       "timeStamp": 21183.179999999993
//     },
//     {
//       "clientX": 250,
//       "clientY": 476,
//       "type": "mousemove",
//       "timeStamp": 21184.304999999767
//     },
//     {
//       "clientX": 251,
//       "clientY": 473,
//       "type": "mousemove",
//       "timeStamp": 21185.23499999992
//     },
//     {
//       "clientX": 253,
//       "clientY": 471,
//       "type": "mousemove",
//       "timeStamp": 21186.235000000124
//     },
//     {
//       "clientX": 255,
//       "clientY": 468,
//       "type": "mousemove",
//       "timeStamp": 21187.1799999999
//     },
//     {
//       "clientX": 257,
//       "clientY": 465,
//       "type": "mousemove",
//       "timeStamp": 21188.159999999698
//     },
//     {
//       "clientX": 259,
//       "clientY": 464,
//       "type": "mousemove",
//       "timeStamp": 21189.155000000028
//     },
//     {
//       "clientX": 261,
//       "clientY": 461,
//       "type": "mousemove",
//       "timeStamp": 21190.27499999993
//     },
//     {
//       "clientX": 262,
//       "clientY": 459,
//       "type": "mousemove",
//       "timeStamp": 21191.31500000003
//     },
//     {
//       "clientX": 264,
//       "clientY": 456,
//       "type": "mousemove",
//       "timeStamp": 21192.385000000286
//     },
//     {
//       "clientX": 265,
//       "clientY": 454,
//       "type": "mousemove",
//       "timeStamp": 21193.250000000262
//     },
//     {
//       "clientX": 267,
//       "clientY": 451,
//       "type": "mousemove",
//       "timeStamp": 21194.28499999958
//     },
//     {
//       "clientX": 269,
//       "clientY": 448,
//       "type": "mousemove",
//       "timeStamp": 21195.349999999962
//     },
//     {
//       "clientX": 271,
//       "clientY": 446,
//       "type": "mousemove",
//       "timeStamp": 21196.280000000115
//     },
//     {
//       "clientX": 272,
//       "clientY": 445,
//       "type": "mousemove",
//       "timeStamp": 21197.250000000167
//     },
//     {
//       "clientX": 274,
//       "clientY": 443,
//       "type": "mousemove",
//       "timeStamp": 21198.190000000068
//     },
//     {
//       "clientX": 276,
//       "clientY": 440,
//       "type": "mousemove",
//       "timeStamp": 21199.219999999514
//     },
//     {
//       "clientX": 277,
//       "clientY": 438,
//       "type": "mousemove",
//       "timeStamp": 21200.184999999692
//     },
//     {
//       "clientX": 279,
//       "clientY": 436,
//       "type": "mousemove",
//       "timeStamp": 21201.234999999542
//     },
//     {
//       "clientX": 279,
//       "clientY": 434,
//       "type": "mousemove",
//       "timeStamp": 21202.220000000125
//     },
//     {
//       "clientX": 281,
//       "clientY": 433,
//       "type": "mousemove",
//       "timeStamp": 21203.144999999495
//     },
//     {
//       "clientX": 282,
//       "clientY": 431,
//       "type": "mousemove",
//       "timeStamp": 21204.149999999572
//     },
//     {
//       "clientX": 284,
//       "clientY": 429,
//       "type": "mousemove",
//       "timeStamp": 21205.159999999523
//     },
//     {
//       "clientX": 285,
//       "clientY": 427,
//       "type": "mousemove",
//       "timeStamp": 21206.210000000283
//     },
//     {
//       "clientX": 287,
//       "clientY": 425,
//       "type": "mousemove",
//       "timeStamp": 21207.085000000006
//     },
//     {
//       "clientX": 288,
//       "clientY": 424,
//       "type": "mousemove",
//       "timeStamp": 21208.504999999604
//     },
//     {
//       "clientX": 287,
//       "clientY": 322,
//       "type": "mousemove",
//       "timeStamp": 21353.180000000066
//     },
//     {
//       "clientX": 286,
//       "clientY": 321,
//       "type": "mousemove",
//       "timeStamp": 21355.16000000007
//     },
//     {
//       "clientX": 286,
//       "clientY": 320,
//       "type": "mousemove",
//       "timeStamp": 21357.14999999982
//     },
//     {
//       "clientX": 285,
//       "clientY": 319,
//       "type": "mousemove",
//       "timeStamp": 21358.14500000015
//     },
//     {
//       "clientX": 284,
//       "clientY": 318,
//       "type": "mousemove",
//       "timeStamp": 21359.13999999957
//     },
//     {
//       "clientX": 283,
//       "clientY": 317,
//       "type": "mousemove",
//       "timeStamp": 21361.139999999978
//     },
//     {
//       "clientX": 283,
//       "clientY": 316,
//       "type": "mousemove",
//       "timeStamp": 21362.285000000156
//     },
//     {
//       "clientX": 282,
//       "clientY": 316,
//       "type": "mousemove",
//       "timeStamp": 21363.1749999995
//     },
//     {
//       "clientX": 281,
//       "clientY": 316,
//       "type": "mousemove",
//       "timeStamp": 21364.18500000036
//     },
//     {
//       "clientX": 280,
//       "clientY": 314,
//       "type": "mousemove",
//       "timeStamp": 21365.17499999991
//     },
//     {
//       "clientX": 280,
//       "clientY": 313,
//       "type": "mousemove",
//       "timeStamp": 21367.169999999533
//     },
//     {
//       "clientX": 279,
//       "clientY": 312,
//       "type": "mousemove",
//       "timeStamp": 21368.169999999736
//     },
//     {
//       "clientX": 278,
//       "clientY": 311,
//       "type": "mousemove",
//       "timeStamp": 21369.16999999994
//     },
//     {
//       "clientX": 277,
//       "clientY": 310,
//       "type": "mousemove",
//       "timeStamp": 21370.24999999994
//     },
//     {
//       "clientX": 277,
//       "clientY": 309,
//       "type": "mousemove",
//       "timeStamp": 21371.189999999842
//     },
//     {
//       "clientX": 275,
//       "clientY": 308,
//       "type": "mousemove",
//       "timeStamp": 21373.23000000015
//     },
//     {
//       "clientX": 275,
//       "clientY": 307,
//       "type": "mousemove",
//       "timeStamp": 21374.174999999923
//     },
//     {
//       "clientX": 274,
//       "clientY": 306,
//       "type": "mousemove",
//       "timeStamp": 21375.175000000127
//     },
//     {
//       "clientX": 273,
//       "clientY": 305,
//       "type": "mousemove",
//       "timeStamp": 21377.16999999975
//     },
//     {
//       "clientX": 272,
//       "clientY": 304,
//       "type": "mousemove",
//       "timeStamp": 21378.179999999702
//     },
//     {
//       "clientX": 271,
//       "clientY": 303,
//       "type": "mousemove",
//       "timeStamp": 21379.175000000032
//     },
//     {
//       "clientX": 270,
//       "clientY": 301,
//       "type": "mousemove",
//       "timeStamp": 21381.234999999833
//     },
//     {
//       "clientX": 269,
//       "clientY": 300,
//       "type": "mousemove",
//       "timeStamp": 21382.25499999953
//     },
//     {
//       "clientX": 268,
//       "clientY": 299,
//       "type": "mousemove",
//       "timeStamp": 21383.170000000064
//     },
//     {
//       "clientX": 267,
//       "clientY": 298,
//       "type": "mousemove",
//       "timeStamp": 21385.330000000067
//     },
//     {
//       "clientX": 267,
//       "clientY": 297,
//       "type": "mousemove",
//       "timeStamp": 21386.13499999974
//     },
//     {
//       "clientX": 266,
//       "clientY": 296,
//       "type": "mousemove",
//       "timeStamp": 21387.265000000298
//     },
//     {
//       "clientX": 265,
//       "clientY": 296,
//       "type": "mousemove",
//       "timeStamp": 21388.130000000274
//     },
//     {
//       "clientX": 264,
//       "clientY": 294,
//       "type": "mousemove",
//       "timeStamp": 21389.164999999593
//     },
//     {
//       "clientX": 263,
//       "clientY": 293,
//       "type": "mousemove",
//       "timeStamp": 21391.214999999647
//     },
//     {
//       "clientX": 262,
//       "clientY": 293,
//       "type": "mousemove",
//       "timeStamp": 21392.17000000008
//     },
//     {
//       "clientX": 261,
//       "clientY": 291,
//       "type": "mousemove",
//       "timeStamp": 21393.1649999995
//     },
//     {
//       "clientX": 261,
//       "clientY": 290,
//       "type": "mousemove",
//       "timeStamp": 21394.164999999703
//     },
//     {
//       "clientX": 260,
//       "clientY": 289,
//       "type": "mousemove",
//       "timeStamp": 21396.410000000287
//     },
//     {
//       "clientX": 259,
//       "clientY": 289,
//       "type": "mousemove",
//       "timeStamp": 21397.17500000006
//     },
//     {
//       "clientX": 258,
//       "clientY": 288,
//       "type": "mousemove",
//       "timeStamp": 21398.339999999735
//     },
//     {
//       "clientX": 258,
//       "clientY": 287,
//       "type": "mousemove",
//       "timeStamp": 21399.155000000064
//     },
//     {
//       "clientX": 257,
//       "clientY": 287,
//       "type": "mousemove",
//       "timeStamp": 21400.165000000015
//     },
//     {
//       "clientX": 256,
//       "clientY": 286,
//       "type": "mousemove",
//       "timeStamp": 21401.12500000032
//     },
//     {
//       "clientX": 255,
//       "clientY": 285,
//       "type": "mousemove",
//       "timeStamp": 21403.62499999992
//     },
//     {
//       "clientX": 255,
//       "clientY": 284,
//       "type": "mousemove",
//       "timeStamp": 21404.71499999967
//     },
//     {
//       "clientX": 254,
//       "clientY": 284,
//       "type": "mousemove",
//       "timeStamp": 21405.58499999952
//     },
//     {
//       "clientX": 253,
//       "clientY": 283,
//       "type": "mousemove",
//       "timeStamp": 21406.30499999952
//     },
//     {
//       "clientX": 253,
//       "clientY": 282,
//       "type": "mousemove",
//       "timeStamp": 21407.140000000254
//     },
//     {
//       "clientX": 252,
//       "clientY": 281,
//       "type": "mousemove",
//       "timeStamp": 21409.190000000308
//     },
//     {
//       "clientX": 251,
//       "clientY": 281,
//       "type": "mousemove",
//       "timeStamp": 21410.745000000134
//     },
//     {
//       "clientX": 250,
//       "clientY": 280,
//       "type": "mousemove",
//       "timeStamp": 21411.145000000033
//     },
//     {
//       "clientX": 250,
//       "clientY": 279,
//       "type": "mousemove",
//       "timeStamp": 21413.48999999991
//     },
//     {
//       "clientX": 249,
//       "clientY": 278,
//       "type": "mousemove",
//       "timeStamp": 21414.354999999887
//     },
//     {
//       "clientX": 248,
//       "clientY": 278,
//       "type": "mousemove",
//       "timeStamp": 21415.75499999999
//     },
//     {
//       "clientX": 247,
//       "clientY": 278,
//       "type": "mousemove",
//       "timeStamp": 21416.650000000118
//     },
//     {
//       "clientX": 247,
//       "clientY": 277,
//       "type": "mousemove",
//       "timeStamp": 21417.66000000007
//     },
//     {
//       "clientX": 246,
//       "clientY": 275,
//       "type": "mousemove",
//       "timeStamp": 21420.234999999593
//     },
//     {
//       "clientX": 245,
//       "clientY": 275,
//       "type": "mousemove",
//       "timeStamp": 21420.594999999594
//     },
//     {
//       "clientX": 244,
//       "clientY": 275,
//       "type": "mousemove",
//       "timeStamp": 21421.285000000353
//     },
//     {
//       "clientX": 244,
//       "clientY": 274,
//       "type": "mousemove",
//       "timeStamp": 21422.295000000304
//     },
//     {
//       "clientX": 243,
//       "clientY": 273,
//       "type": "mousemove",
//       "timeStamp": 21423.32499999975
//     },
//     {
//       "clientX": 242,
//       "clientY": 273,
//       "type": "mousemove",
//       "timeStamp": 21424.229999999625
//     },
//     {
//       "clientX": 241,
//       "clientY": 272,
//       "type": "mousemove",
//       "timeStamp": 21425.234999999702
//     },
//     {
//       "clientX": 241,
//       "clientY": 271,
//       "type": "mousemove",
//       "timeStamp": 21427.684999999656
//     },
//     {
//       "clientX": 240,
//       "clientY": 271,
//       "type": "mousemove",
//       "timeStamp": 21428.09000000034
//     },
//     {
//       "clientX": 239,
//       "clientY": 270,
//       "type": "mousemove",
//       "timeStamp": 21429.559999999583
//     },
//     {
//       "clientX": 238,
//       "clientY": 270,
//       "type": "mousemove",
//       "timeStamp": 21430.33000000014
//     },
//     {
//       "clientX": 237,
//       "clientY": 269,
//       "type": "mousemove",
//       "timeStamp": 21433.705000000373
//     },
//     {
//       "clientX": 236,
//       "clientY": 268,
//       "type": "mousemove",
//       "timeStamp": 21434.105000000272
//     },
//     {
//       "clientX": 236,
//       "clientY": 267,
//       "type": "mousemove",
//       "timeStamp": 21434.320000000298
//     },
//     {
//       "clientX": 235,
//       "clientY": 267,
//       "type": "mousemove",
//       "timeStamp": 21435.2600000002
//     },
//     {
//       "clientX": 234,
//       "clientY": 267,
//       "type": "mousemove",
//       "timeStamp": 21436.239999999998
//     },
//     {
//       "clientX": 233,
//       "clientY": 266,
//       "type": "mousemove",
//       "timeStamp": 21437.200000000303
//     },
//     {
//       "clientX": 232,
//       "clientY": 265,
//       "type": "mousemove",
//       "timeStamp": 21438.36999999985
//     },
//     {
//       "clientX": 231,
//       "clientY": 265,
//       "type": "mousemove",
//       "timeStamp": 21439.139999999497
//     },
//     {
//       "clientX": 230,
//       "clientY": 264,
//       "type": "mousemove",
//       "timeStamp": 21440.260000000308
//     },
//     {
//       "clientX": 229,
//       "clientY": 264,
//       "type": "mousemove",
//       "timeStamp": 21441.179999999804
//     },
//     {
//       "clientX": 228,
//       "clientY": 263,
//       "type": "mousemove",
//       "timeStamp": 21443.15000000006
//     },
//     {
//       "clientX": 227,
//       "clientY": 262,
//       "type": "mousemove",
//       "timeStamp": 21444.21499999953
//     },
//     {
//       "clientX": 226,
//       "clientY": 261,
//       "type": "mousemove",
//       "timeStamp": 21446.40999999956
//     },
//     {
//       "clientX": 225,
//       "clientY": 261,
//       "type": "mousemove",
//       "timeStamp": 21447.304999999687
//     },
//     {
//       "clientX": 223,
//       "clientY": 260,
//       "type": "mousemove",
//       "timeStamp": 21448.159999999916
//     },
//     {
//       "clientX": 222,
//       "clientY": 259,
//       "type": "mousemove",
//       "timeStamp": 21450.42999999987
//     },
//     {
//       "clientX": 221,
//       "clientY": 258,
//       "type": "mousemove",
//       "timeStamp": 21451.22999999967
//     },
//     {
//       "clientX": 220,
//       "clientY": 258,
//       "type": "mousemove",
//       "timeStamp": 21452.304999999797
//     },
//     {
//       "clientX": 220,
//       "clientY": 257,
//       "type": "mousemove",
//       "timeStamp": 21453.23499999995
//     },
//     {
//       "clientX": 219,
//       "clientY": 256,
//       "type": "mousemove",
//       "timeStamp": 21454.235000000153
//     },
//     {
//       "clientX": 218,
//       "clientY": 256,
//       "type": "mousemove",
//       "timeStamp": 21455.20000000033
//     },
//     {
//       "clientX": 217,
//       "clientY": 255,
//       "type": "mousemove",
//       "timeStamp": 21456.2049999995
//     },
//     {
//       "clientX": 215,
//       "clientY": 254,
//       "type": "mousemove",
//       "timeStamp": 21458.585000000312
//     },
//     {
//       "clientX": 214,
//       "clientY": 253,
//       "type": "mousemove",
//       "timeStamp": 21459.179999999833
//     },
//     {
//       "clientX": 213,
//       "clientY": 252,
//       "type": "mousemove",
//       "timeStamp": 21461.264999999912
//     },
//     {
//       "clientX": 212,
//       "clientY": 252,
//       "type": "mousemove",
//       "timeStamp": 21462.19999999994
//     },
//     {
//       "clientX": 212,
//       "clientY": 251,
//       "type": "mousemove",
//       "timeStamp": 21463.20999999989
//     },
//     {
//       "clientX": 211,
//       "clientY": 251,
//       "type": "mousemove",
//       "timeStamp": 21464.154999999664
//     },
//     {
//       "clientX": 211,
//       "clientY": 250,
//       "type": "mousemove",
//       "timeStamp": 21465.259999999944
//     },
//     {
//       "clientX": 210,
//       "clientY": 249,
//       "type": "mousemove",
//       "timeStamp": 21466.15500000007
//     },
//     {
//       "clientX": 209,
//       "clientY": 249,
//       "type": "mousemove",
//       "timeStamp": 21467.225000000326
//     },
//     {
//       "clientX": 208,
//       "clientY": 249,
//       "type": "mousemove",
//       "timeStamp": 21468.165000000226
//     },
//     {
//       "clientX": 208,
//       "clientY": 248,
//       "type": "mousemove",
//       "timeStamp": 21469.13500000028
//     },
//     {
//       "clientX": 207,
//       "clientY": 247,
//       "type": "mousemove",
//       "timeStamp": 21470.209999999497
//     },
//     {
//       "clientX": 207,
//       "clientY": 246,
//       "type": "mousemove",
//       "timeStamp": 21471.185000000332
//     },
//     {
//       "clientX": 206,
//       "clientY": 246,
//       "type": "mousemove",
//       "timeStamp": 21472.179999999753
//     },
//     {
//       "clientX": 205,
//       "clientY": 245,
//       "type": "mousemove",
//       "timeStamp": 21474.38499999953
//     },
//     {
//       "clientX": 204,
//       "clientY": 244,
//       "type": "mousemove",
//       "timeStamp": 21476.394999999684
//     },
//     {
//       "clientX": 203,
//       "clientY": 243,
//       "type": "mousemove",
//       "timeStamp": 21477.130000000216
//     },
//     {
//       "clientX": 202,
//       "clientY": 242,
//       "type": "mousemove",
//       "timeStamp": 21480.800000000272
//     },
//     {
//       "clientX": 201,
//       "clientY": 241,
//       "type": "mousemove",
//       "timeStamp": 21482.18999999972
//     },
//     {
//       "clientX": 200,
//       "clientY": 241,
//       "type": "mousemove",
//       "timeStamp": 21483.150000000023
//     },
//     {
//       "clientX": 200,
//       "clientY": 240,
//       "type": "mousemove",
//       "timeStamp": 21484.214999999494
//     },
//     {
//       "clientX": 199,
//       "clientY": 239,
//       "type": "mousemove",
//       "timeStamp": 21487.54999999983
//     },
//     {
//       "clientX": 198,
//       "clientY": 239,
//       "type": "mousemove",
//       "timeStamp": 21489.76500000026
//     },
//     {
//       "clientX": 197,
//       "clientY": 238,
//       "type": "mousemove",
//       "timeStamp": 21490.530000000035
//     },
//     {
//       "clientX": 196,
//       "clientY": 237,
//       "type": "mousemove",
//       "timeStamp": 21494.604999999865
//     },
//     {
//       "clientX": 195,
//       "clientY": 237,
//       "type": "mousemove",
//       "timeStamp": 21496.47499999992
//     },
//     {
//       "clientX": 195,
//       "clientY": 236,
//       "type": "mousemove",
//       "timeStamp": 21497.365000000173
//     },
//     {
//       "clientX": 194,
//       "clientY": 236,
//       "type": "mousemove",
//       "timeStamp": 21498.17499999972
//     },
//     {
//       "clientX": 194,
//       "clientY": 235,
//       "type": "mousemove",
//       "timeStamp": 21500.425000000178
//     },
//     {
//       "clientX": 193,
//       "clientY": 235,
//       "type": "mousemove",
//       "timeStamp": 21501.180000000204
//     },
//     {
//       "clientX": 192,
//       "clientY": 235,
//       "type": "mousemove",
//       "timeStamp": 21503.294999999525
//     },
//     {
//       "clientX": 191,
//       "clientY": 235,
//       "type": "mousemove",
//       "timeStamp": 21505.425000000287
//     },
//     {
//       "clientX": 191,
//       "clientY": 234,
//       "type": "mousemove",
//       "timeStamp": 21506.17499999953
//     },
//     {
//       "clientX": 190,
//       "clientY": 234,
//       "type": "mousemove",
//       "timeStamp": 21508.42499999999
//     },
//     {
//       "clientX": 189,
//       "clientY": 233,
//       "type": "mousemove",
//       "timeStamp": 21510.245000000396
//     },
//     {
//       "clientX": 188,
//       "clientY": 233,
//       "type": "mousemove",
//       "timeStamp": 21511.195000000043
//     },
//     {
//       "clientX": 187,
//       "clientY": 233,
//       "type": "mousemove",
//       "timeStamp": 21514.414999999644
//     },
//     {
//       "clientX": 187,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21515.16999999967
//     },
//     {
//       "clientX": 186,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21516.475000000355
//     },
//     {
//       "clientX": 185,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21518.584999999803
//     },
//     {
//       "clientX": 184,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21520.56999999968
//     },
//     {
//       "clientX": 183,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21522.31000000029
//     },
//     {
//       "clientX": 182,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21524.470000000292
//     },
//     {
//       "clientX": 181,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21526.569999999992
//     },
//     {
//       "clientX": 180,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21527.074999999968
//     },
//     {
//       "clientX": 179,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21531.205000000227
//     },
//     {
//       "clientX": 178,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21532.15999999975
//     },
//     {
//       "clientX": 177,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21533.174999999574
//     },
//     {
//       "clientX": 176,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21536.53000000031
//     },
//     {
//       "clientX": 175,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21538.94500000024
//     },
//     {
//       "clientX": 174,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21539.810000000216
//     },
//     {
//       "clientX": 173,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21542.44000000017
//     },
//     {
//       "clientX": 172,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21544.839999999567
//     },
//     {
//       "clientX": 171,
//       "clientY": 232,
//       "type": "mousemove",
//       "timeStamp": 21546.320000000378
//     },
//     {
//       "clientX": 171,
//       "clientY": 233,
//       "type": "mousemove",
//       "timeStamp": 21548.54499999965
//     },
//     {
//       "clientX": 170,
//       "clientY": 233,
//       "type": "mousemove",
//       "timeStamp": 21549.285000000054
//     },
//     {
//       "clientX": 169,
//       "clientY": 233,
//       "type": "mousemove",
//       "timeStamp": 21551.63999999968
//     },
//     {
//       "clientX": 169,
//       "clientY": 234,
//       "type": "mousemove",
//       "timeStamp": 21552.34500000006
//     },
//     {
//       "clientX": 168,
//       "clientY": 234,
//       "type": "mousemove",
//       "timeStamp": 21555.489999999736
//     },
//     {
//       "clientX": 167,
//       "clientY": 234,
//       "type": "mousemove",
//       "timeStamp": 21557.67999999989
//     },
//     {
//       "clientX": 167,
//       "clientY": 235,
//       "type": "mousemove",
//       "timeStamp": 21559.699999999793
//     },
//     {
//       "clientX": 166,
//       "clientY": 235,
//       "type": "mousemove",
//       "timeStamp": 21560.545000000275
//     },
//     {
//       "clientX": 166,
//       "clientY": 236,
//       "type": "mousemove",
//       "timeStamp": 21562.525000000278
//     },
//     {
//       "clientX": 166,
//       "clientY": 237,
//       "type": "mousemove",
//       "timeStamp": 21565.974999999526
//     },
//     {
//       "clientX": 165,
//       "clientY": 237,
//       "type": "mousemove",
//       "timeStamp": 21566.35499999993
//     },
//     {
//       "clientX": 164,
//       "clientY": 237,
//       "type": "mousemove",
//       "timeStamp": 21570.27999999991
//     },
//     {
//       "clientX": 163,
//       "clientY": 238,
//       "type": "mousemove",
//       "timeStamp": 21573.80000000012
//     },
//     {
//       "clientX": 163,
//       "clientY": 239,
//       "type": "mousemove",
//       "timeStamp": 21577.134999999544
//     },
//     {
//       "clientX": 162,
//       "clientY": 239,
//       "type": "mousemove",
//       "timeStamp": 21581.514999999854
//     },
//     {
//       "clientX": 162,
//       "clientY": 240,
//       "type": "mousemove",
//       "timeStamp": 21583.354999999756
//     },
//     {
//       "clientX": 161,
//       "clientY": 240,
//       "type": "mousemove",
//       "timeStamp": 21584.179999999833
//     },
//     {
//       "clientX": 161,
//       "clientY": 241,
//       "type": "mousemove",
//       "timeStamp": 21586.269999999786
//     },
//     {
//       "clientX": 160,
//       "clientY": 241,
//       "type": "mousemove",
//       "timeStamp": 21588.40499999951
//     },
//     {
//       "clientX": 160,
//       "clientY": 242,
//       "type": "mousemove",
//       "timeStamp": 21589.170000000195
//     },
//     {
//       "clientX": 160,
//       "clientY": 243,
//       "type": "mousemove",
//       "timeStamp": 21595.014999999876
//     },
//     {
//       "clientX": 159,
//       "clientY": 243,
//       "type": "mousemove",
//       "timeStamp": 21596.520000000055
//     },
//     {
//       "clientX": 159,
//       "clientY": 244,
//       "type": "mousemove",
//       "timeStamp": 21597.289999999703
//     },
//     {
//       "clientX": 158,
//       "clientY": 245,
//       "type": "mousemove",
//       "timeStamp": 21598.159999999552
//     },
//     {
//       "clientX": 157,
//       "clientY": 245,
//       "type": "mousemove",
//       "timeStamp": 21601.300000000265
//     },
//     {
//       "clientX": 157,
//       "clientY": 246,
//       "type": "mousemove",
//       "timeStamp": 21602.29999999956
//     },
//     {
//       "clientX": 157,
//       "clientY": 247,
//       "type": "mousemove",
//       "timeStamp": 21603.290000000015
//     },
//     {
//       "clientX": 157,
//       "clientY": 248,
//       "type": "mousemove",
//       "timeStamp": 21605.529999999817
//     },
//     {
//       "clientX": 157,
//       "clientY": 249,
//       "type": "mousemove",
//       "timeStamp": 21608.634999999595
//     },
//     {
//       "clientX": 156,
//       "clientY": 250,
//       "type": "mousemove",
//       "timeStamp": 21610.569999999825
//     },
//     {
//       "clientX": 156,
//       "clientY": 251,
//       "type": "mousemove",
//       "timeStamp": 21611.385000000155
//     },
//     {
//       "clientX": 156,
//       "clientY": 252,
//       "type": "mousemove",
//       "timeStamp": 21614.34999999983
//     },
//     {
//       "clientX": 156,
//       "clientY": 253,
//       "type": "mousemove",
//       "timeStamp": 21617.024999999558
//     },
//     {
//       "clientX": 156,
//       "clientY": 254,
//       "type": "mousemove",
//       "timeStamp": 21617.25000000024
//     },
//     {
//       "clientX": 155,
//       "clientY": 254,
//       "type": "mousemove",
//       "timeStamp": 21618.344999999863
//     },
//     {
//       "clientX": 155,
//       "clientY": 255,
//       "type": "mousemove",
//       "timeStamp": 21620.464999999967
//     },
//     {
//       "clientX": 155,
//       "clientY": 256,
//       "type": "mousemove",
//       "timeStamp": 21621.180000000095
//     },
//     {
//       "clientX": 155,
//       "clientY": 257,
//       "type": "mousemove",
//       "timeStamp": 21624.590000000353
//     },
//     {
//       "clientX": 155,
//       "clientY": 258,
//       "type": "mousemove",
//       "timeStamp": 21625.229999999647
//     },
//     {
//       "clientX": 155,
//       "clientY": 259,
//       "type": "mousemove",
//       "timeStamp": 21626.180000000204
//     },
//     {
//       "clientX": 155,
//       "clientY": 260,
//       "type": "mousemove",
//       "timeStamp": 21629.925000000185
//     },
//     {
//       "clientX": 155,
//       "clientY": 261,
//       "type": "mousemove",
//       "timeStamp": 21631.62999999986
//     },
//     {
//       "clientX": 155,
//       "clientY": 262,
//       "type": "mousemove",
//       "timeStamp": 21632.504999999583
//     },
//     {
//       "clientX": 155,
//       "clientY": 263,
//       "type": "mousemove",
//       "timeStamp": 21638.009999999667
//     },
//     {
//       "clientX": 155,
//       "clientY": 264,
//       "type": "mousemove",
//       "timeStamp": 21639.89500000025
//     },
//     {
//       "clientX": 155,
//       "clientY": 265,
//       "type": "mousemove",
//       "timeStamp": 21641.595000000052
//     },
//     {
//       "clientX": 155,
//       "clientY": 265,
//       "type": "mousedown",
//       "timeStamp": 21677.059999999983
//     },
//     {
//       "clientX": 155,
//       "clientY": 265,
//       "type": "mouseup",
//       "timeStamp": 21753.600000000006
//     }
//   ]
// if(xfvm.memory.asyncEvent.listener !== undefined){
//     for(let i=0;i<mouseEvent.length;i++){
//         let event = mouseEvent[i];
//         let type = event.type;
//         let listenerList = xfvm.memory.asyncEvent.listener[type];
//             for(let j=0;j<listenerList.length;j++){
//                 let callback = listenerList[j].listener;
//                 let self = listenerList[j].self;
//                 callback.call(self,mouseEvent[i]);

//             }
//             if(type === "mousedown"){
//                 debugger;
//             }

//     }
// }


