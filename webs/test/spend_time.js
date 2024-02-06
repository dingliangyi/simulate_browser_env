const {VM, VMScript} = require("vm2");
const fs = require("fs");
const request = require('request')
const CryptoJS = require('crypto-js')
const _ = require('lodash');
const {createCanvas} = require('canvas')
const getContextWebgl = require('gl')
// const cheerio = require('cheerio')
const {indexedDB: indexedDB_} = require("fake-indexeddb");

const parser = require("@babel/parser");
const generator = require("@babel/generator").default;


const {read_html_code} = require('../../env/get_html_code')
const {get_document, get_env_code, get_tools_code, get_file} = require('../../readfile')

const name = "test";
fs.writeFileSync(`./log.txt`, "");
const html_code = read_html_code();
$ = get_document(html_code);

const createIframeEnv = function () {
    let jsCode2 = get_file('env', "iframeEnv")

    const vm2 = new VM({
        sandbox: {}
    })
    const ScriptTemp = new VMScript(jsCode2)

    return vm2.run(ScriptTemp)
}

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

let str_ = fs.readFileSync('./output.js', {encoding: 'utf8'});
let ast = parser.parse(str_, {sourceType: 'script'});
str_ = generator(ast, {
    comments: false,
    compact: true,
    minified: true,
    concise: false,
    jsescOption: {
        minimal: true
    }
}).code;
const script = new VMScript(str_, "./debugJS.js");

console.log_ = console.log
start_time = new Date().getTime();

// console.log_(eval(str_))
vm.run(script)

end_time = new Date().getTime();
console.log_((end_time - start_time) / 1000)