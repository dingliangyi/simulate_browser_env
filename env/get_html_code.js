const fs = require('fs')

const files = [
    'HTML/1.html',
    // 'HTML/canvas_2d指纹.html',
    // 'HTML/canvas_webgl.html',
    // 'HTML/字体指纹-混淆.html',
    // 'HTML/字体指纹.html',
    // 'HTML/电池信息.html',
    // 'HTML/鼠标异步事件.html',
    // 'HTML/rs.html'
]
const filePath = __dirname

function read_html_code() {
    let JsCode = ""
    for (let i = 0; i < files.length; i++) {
        JsCode += fs.readFileSync(filePath + '/' + files[i]).toString()
    }
    return JsCode
}

// console.log(read_html_code())

module.exports = {
    read_html_code,
}