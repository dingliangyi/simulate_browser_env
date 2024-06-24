const fs = require('fs')

const files_constructor_prototype = [
    //> Document
    "/constructor_prototype/Node.js",
    "/constructor_prototype/Document.js",
    "/constructor_prototype/HTMLDocument.js",

    //> 文本
    "/constructor_prototype/tag/CharacterData.js",
    "/constructor_prototype/tag/Text.js",

    //> tag_base
    "/constructor_prototype/tag/Element.js",
    "/constructor_prototype/tag/HTMLElement.js",
    //> tags
    "/constructor_prototype/tag/HTMLHtmlElement.js",
    "/constructor_prototype/tag/HTMLStyleElement.js",
    "/constructor_prototype/tag/HTMLSpanElement.js",
    "/constructor_prototype/tag/HTMLDivElement.js",
    "/constructor_prototype/tag/HTMLInputElement.js",
    "/constructor_prototype/tag/HTMLFormElement.js",
    "/constructor_prototype/tag/HTMLImageElement.js",
    "/constructor_prototype/tag/HTMLBodyElement.js",
    // "/constructor_prototype/tag/HTMLIFrameElement.js",
    // "/constructor_prototype/tag/HTMLUnknownElement.js",
    // "/constructor_prototype/tag/HTMLParagraphElement.js",
    // "/constructor_prototype/tag/HTMLAnchorElement.js",
    // "/constructor_prototype/tag/HTMLUListElement.js",
    // "/constructor_prototype/tag/HTMLLIElement.js",
    // "/constructor_prototype/tag/HTMLOListElement.js",
    // "/constructor_prototype/tag/HTMLDListElement.js",
    // "/constructor_prototype/tag/HTMLTableElement.js",
    // "/constructor_prototype/tag/HTMLSelectElement.js",
    // "/constructor_prototype/tag/HTMLOptionElement.js",
    // "/constructor_prototype/tag/HTMLButtonElement.js",
    // "/constructor_prototype/tag/HTMLTableCellElement.js",
    // "/constructor_prototype/tag/HTMLTableRowElement.js",
    // "/constructor_prototype/tag/HTMLTableCaptionElement.js",
    // "/constructor_prototype/tag/HTMLHeadingElement.js",
    // "/constructor_prototype/tag/HTMLMetaElement.js",
    // "/constructor_prototype/tag/HTMLHeadElement.js",
    // "/constructor_prototype/tag/HTMLCanvasElement.js",
    // "/constructor_prototype/tag/HTMLBaseElement.js",
    // "/constructor_prototype/tag/HTMLScriptElement.js",
    // "/constructor_prototype/tag/HTMLAllCollection.js",
    //> audio video
    // "/constructor_prototype/tag/HTMLMediaElement.js",
    // "/constructor_prototype/tag/HTMLAudioElement.js",
    // "/constructor_prototype/tag/HTMLVideoElement.js",

    //> event
    "/constructor_prototype/event/Event.js",
    "/constructor_prototype/event/UIEvent.js",
    "/constructor_prototype/event/MouseEvent.js",
    // "/constructor_prototype/event/PointerEvent.js",

    //> 类数组
    "/constructor_prototype/tag/NodeList.js",
    "/constructor_prototype/tag/HTMLCollection.js",

    //> style CSS
    "/constructor_prototype/CSS/CSSStyleDeclaration.js",
    "/constructor_prototype/CSS/StyleSheet.js",
    "/constructor_prototype/CSS/CSSStyleSheet.js",

    //> canvas
    // "/constructor_prototype/tag_canvas/CanvasRenderingContext2D.js",
    // "/constructor_prototype/tag_canvas/WebGLRenderingContext.js",
    // "/constructor_prototype/tag_canvas/WebGLBuffer.js",
    // "/constructor_prototype/tag_canvas/WebGLProgram.js",

    //> other
    // "/constructor_prototype/other/XPathExpression.js"
]

const files_instance = [
    "/instance/document.js",
    "/instance/style.js",
    "/instance/CSS.js",
]

const filePath = __dirname

function read_DOM_code() {
    let JsCode = ""

    for (let i = 0; i < files_constructor_prototype.length; i++) {
        JsCode += fs.readFileSync(filePath + '/' + files_constructor_prototype[i]).toString() + ';\r\n'
    }

    for (let i = 0; i < files_instance.length; i++) {
        JsCode += fs.readFileSync(filePath + '/' + files_instance[i]).toString() + ';\r\n'
    }

    return JsCode
}


module.exports = {
    read_DOM_code,
}