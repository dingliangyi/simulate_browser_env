const {read_BOM_code} = require('./BOM/get_BOM_code')
const {read_DOM_code} = require('./DOM/get_DOM_code')
const fs = require('fs')

function read_env_code() {
    let JsCode = ""

    JsCode += fs.readFileSync('./env/DOM/constructor_prototype/event/Event.js')
    JsCode += read_BOM_code()
    JsCode += read_DOM_code()

    return JsCode
}

module.exports = {
    read_env_code,
}