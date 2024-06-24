const {VM, VMScript} = require("vm2");
const fs = require("fs");
const request = require('request')
const CryptoJS = require('crypto-js')
// const _ = require('lodash');
const {createCanvas} = require('canvas')
const getContextWebgl = require('gl')
// const cheerio = require('cheerio')
const {indexedDB: indexedDB_} = require("fake-indexeddb");

const {get_document_all} = require('../node_plugin/build/Release/document_all.node')
const {read_html_code} = require('./env/get_html_code')
const {get_document, get_env_code, get_tools_code, get_file} = require('./readfile')
//> --------------------------------------------------------------------------------------------

// 名称
const name = "test"; //! 改1
// 日志
fs.writeFileSync(`./webs/${name}/log.txt`, "");
// 加载网页html并解析
const html_code = read_html_code();
$ = get_document(html_code);
//> --------------------------------------------------------------------------------------------

let codeTest = function () {
    // 全局配置
    const configCode = fs.readFileSync("./config.js");
    // 功能插件、env实现
    const toolsCode = get_tools_code();
    // log
    const logCode = get_file("tools", "printLog");
    // env
    const envCode = get_env_code();
    // 全局初始化代码
    const globalVarCode = get_file('tools', "globalVar");
    // 设置代理对象
    const proxyObjCode = get_file('tools', "proxyObj")
    // 网页变量初始化代码
    const userVarCode = get_file(`webs/${name}`, "userVar");
    // 删除不是全局的构造器
    let delete_NoGlobal_constructor = get_file("tools", "delete_NoGlobal_constructor")
    // 网页关键代码
    const debugCode = get_file(`webs/${name}`, "web-js"); //! 改2
    //! 异步执行的代码
    // const asyncCode = user.getCode(name, "async");
    const asyncCode = "";
    // 整合代码
    return `${configCode}${toolsCode}${logCode}${envCode}${globalVarCode}${proxyObjCode}${userVarCode}${delete_NoGlobal_constructor}${debugCode}${asyncCode}`;
}()
fs.writeFileSync(`./webs/${name}/output_not_run.js`, codeTest);

//> --------------------------------------------------------------------------------------------
//* 套娃iframeEnv
const createIframeEnv = function () {
    let jsCode2 = get_file('env', "iframeEnv")

    const vm2 = new VM({
        sandbox: {}
    })
    const ScriptTemp = new VMScript(jsCode2)

    return vm2.run(ScriptTemp)
}
const _ = {
    random: function (min, max, floating = false) {
        if (floating) {
            return Math.random() * (max - min) + min;
        } else {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}
//> --------------------------------------------------------------------------------------------

// 创建虚拟机实例
const vm = new VM({
    sandbox: {
        fs,
        _name_: name,
        $,
        request,
        get_document,
        createIframeEnv,
        vm2: true,
        setTimeout_: setTimeout,
        setInterval_: setInterval,
        clearInterval: clearInterval,
        clearTimeout: clearTimeout,
        _,
        CryptoJS,
        // ldObj,
        get_document_all,
        createCanvas,
        getContextWebgl,
        indexedDB_,
        // html_code,
        // cheerio
    }
});


//* 保存生成的js
!function () {
    let code = codeTest
    code = 'const fs = require("fs");\n' + code;
    code = `let _name_ = '${name}';\n` + code;
    code = "$ = get_document(html_code);\n" + code
    code = "const html_code = read_html_code();\n" + code
    code = 'const {get_document} = require("../../readfile");\n' + code
    code = 'const {read_html_code} = require(\'../../env/get_html_code\');\n' + code
    code = "const vm2 = false;\n" + code;
    code = 'const request = require(\'request\');\n' + code;
    code = "delete global['setTimeout'];\n" + code
    code = "delete global['setInterval'];\n" + code
    code = "delete global['atob'];\n" + code
    code = "delete global['btoa'];\n" + code
    code = 'const setTimeout_ = setTimeout;\n' + code
    code = 'const setInterval_ = setInterval;\n' + code
    code = 'const CryptoJS = require(\'crypto-js\');\n' + code
    code = 'const {createCanvas} = require(\'canvas\');\n' + code
    // code = 'const _ = require(\'lodash\');\n' + code
    code = 'const _={random:function(a,b,c){if(floating){return Math.random()*(b-a)+a}else{return Math.floor(Math.random()*(b-a+1))+a}}};\n' + code
    code = 'const getContextWebgl = require(\'gl\');\n' + code
    code = 'const {indexedDB: indexedDB_} = require("fake-indexeddb");\n' + code
    // 替换vm2_if
    code = code.replace('dingvm.config.vm2_if = true;', 'dingvm.config.vm2_if = false;')

    fs.writeFileSync(`./webs/${name}/output_run.js`, code);
}()


// 创建执行脚本
const script = new VMScript(codeTest, "./debugJS.js");
// 运行脚本文件
start_time = new Date().getTime();
const result = vm.run(script);
end_time = new Date().getTime();
console.log((end_time - start_time) / 1000)
// 输出结果
// console.log(result);
console.log("执行完成");