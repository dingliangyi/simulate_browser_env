const cheerio = require('cheerio')
const fs = require("fs");
const {read_env_code} = require('./env/get_env_code')
const {read_envFunc_code} = require("./envFunc/get_envFunc_code")

function get_document(html) {
    return cheerio.load(html)
}

function get_env_code() {
    let code = ""
    code += read_env_code()
    code += fs.readFileSync('./env/globalThis.js') + ";\r\n"// 全局环境

    return code;
}

function get_tools_code() {
    let code = "";
    code += fs.readFileSync('./tools/toolsFunc.js') + ";\r\n"
    code += read_envFunc_code();
    return code;
}

function get_file(dir, name) {
    return fs.readFileSync(`./${dir}/${name}.js`) + ";\r\n";
}

module.exports = {
    get_document,
    get_env_code,
    get_tools_code,
    get_file,
}