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
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const {minify} = require("terser");

const {get_document_all} = require('../../node_plugin/build/Release/document_all.node')
const {read_html_code} = require('../../env/get_html_code')
const {get_document, get_env_code, get_tools_code, get_file} = require('../../readfile')
//> --------------------------------------------------------------------------------------------

// 名称
const name = "test"; //! 改1
// 日志
fs.writeFileSync(`./log.txt`, "");
// 加载网页html并解析
const html_code = read_html_code();
$ = get_document(html_code);
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
        get_document_all,
        createCanvas,
        getContextWebgl,
        indexedDB_,
    }
});
//> --------------------------------------------------------------------------------------------

let str_ = fs.readFileSync('./generator/output_not_run.js', {encoding: 'utf8'});
console.log(str_.length)
let ast = parser.parse(str_, {sourceType: 'script'});
traverse(ast, {
    DebuggerStatement(path) {
        path.remove()
    },
    CallExpression(path) {
        if (
            types.isMemberExpression(path.node.callee) &&
            types.isIdentifier(path.node.callee.object, {name: "console"})
        ) {
            // console.log(path + '')
            path.remove()
        }
    },
    Identifier(path) {
        const {parent, parentPath} = path;
        if (path.node.name === 'dingvm') {
            path.node.name = 'dv'
        } else if (path.node.name === 'envFunc') {
            path.node.name = 'eF'
        } else if (path.node.name === 'toolsFunc') {
            path.node.name = 'tF'
        }
        if (
            types.isMemberExpression(parent) &&
            parent.object.name !== 'Object' &&
            path.node.name === 'defineProperty'
        ) {
            // console.log(parentPath + '')
            path.node.name = 'dP'
        }
        if (/.*?Proto_/.test(path.node.name)) {
            path.node.name = path.node.name.replace(/Proto_/, 'P_')
            // console.log(path + '')
        }
    },
    Literal(path) {
        const {value} = path.node;
        if (/.*Proto$/.test(value)) {
            path.node.value = value.replace(/Proto$/, 'P')
            // console.log(path + '')
        }
    }
})
str_ = generator(ast, {
    comments: false,
    compact: true,
    minified: true,
    concise: true,
    jsescOption: {
        minimal: true
    }
}).code;
fs.writeFileSync('./generator/compress.js', str_, {encoding: 'utf8'});
console.log(str_.length)
const script = new VMScript(str_, "./debugJS.js");
let start_time = new Date().getTime();

vm.run(script)

let end_time = new Date().getTime();
console.log((end_time - start_time) / 1000)
