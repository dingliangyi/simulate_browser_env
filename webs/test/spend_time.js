const {VM, VMScript} = require("vm2");
const fs = require("fs");
const request = require('request')
const CryptoJS = require('crypto-js')
// const _ = require('lodash');
const {createCanvas} = require('canvas')
const getContextWebgl = require('gl')
// const cheerio = require('cheerio')
const {indexedDB: indexedDB_} = require("fake-indexeddb");

const parser = require("@babel/parser");
const generator = require("@babel/generator").default;
const {minify} = require("terser");

const {read_html_code} = require('../../env/get_html_code')
const {get_document, get_env_code, get_tools_code, get_file} = require('../../readfile')
//> --------------------------------------------------------------------------------------------

const name = "test";
fs.writeFileSync(`./log.txt`, "");
const html_code = read_html_code();
$ = get_document(html_code);
//> --------------------------------------------------------------------------------------------

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
        ldObj,
        createCanvas,
        getContextWebgl,
        indexedDB_,
        // html_code,
        // cheerio
    }
});
//> --------------------------------------------------------------------------------------------

let str_ = fs.readFileSync('./output.js', {encoding: 'utf8'});
let ast = parser.parse(str_, {sourceType: 'script'});
str_ = generator(ast, {
    comments: false,
    compact: true,
    minified: true,
    concise: true,
    jsescOption: {
        minimal: true
    }
}).code;

async function minifyCode() {
    str_ = await minify(str_, {
        ecma: 6,
        compress: {
            unsafe_methods: true, // 将 { m: function(){} } 转换为 { m(){} }
            drop_console: true,  // 去除 console.* 语句
            arguments: true, // 尽可能将 arguments[index] 替换为函数参数名称
            booleans_as_integers: true, // 将布尔值 true 和 false 替换为 1 和 0
            global_defs: {}, // 替换自定义全局变量
            inline: false, // 将函数内联
            keep_classnames: true, // 保留类名
            keep_fnames: true, // 保留函数名
            keep_infinity: true, // 保留 Infinity
            negate_iife: false, // 不对 IIFE 进行取反
            passes: 2, // 运行压缩的最大次数
            unused: false, //  删除未引用的函数和变量
            loops: false, // 优化循环
        },
        mangle: {
            keep_classnames: true,
            keep_fnames: true,
            reserved: [],
            toplevel: true,
            properties: {
                undeclared: false,
                reserved: [],
                keep_quoted: true,
            }
        },
        output: {
            comments: false,  // 是否保留注释
        },
        keep_classnames: true,
        keep_fnames: true,
    });
    console.log(str_.code.length)
}

minifyCode().then(r => {
});
const script = new VMScript(str_, "./debugJS.js");

console.log_ = console.log
start_time = new Date().getTime();

// console.log_(eval(str_))
// vm.run(script)

end_time = new Date().getTime();
console.log_((end_time - start_time) / 1000)