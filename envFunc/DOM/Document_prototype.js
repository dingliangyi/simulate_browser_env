dingvm.envFunc.DocumentProto_getElementById = function DocumentProto_getElementById() {
    // debugger
    let id = arguments[0];
    const temp = $(`#${id}`);

    if (temp[0] === undefined) {
        return null
    }

    let result = null;
    if (temp !== undefined) {
        result = {}
        switch (temp[0].name) {
            case "div":
                Object.setPrototypeOf(result, HTMLDivElement.prototype)
                break
            case 'input':
                Object.setPrototypeOf(result, HTMLInputElement.prototype)
                break
            case 'span':
                Object.setPrototypeOf(result, HTMLSpanElement.prototype)
                break
            case 'iframe':
                Object.setPrototypeOf(result, HTMLIFrameElement.prototype)
                break
            default:
                console.log(`DocumentProto_getElementById_${temp[0].name}未实现`);
                debugger
        }
        Object.defineProperty(result, 'jquery', {
            configurable: true,
            enumerable: false,
            writable: true,
            value: temp
        })
    }
    return result
};
dingvm.envFunc.DocumentProto_createElement = function createElement(tagName) {
    // debugger;
    let result = {}
    switch (tagName) {
        case 'div':
            result.jquery = get_document('<div></div>')('div')
            Object.setPrototypeOf(result, HTMLDivElement.prototype)
            break
        case 'span':
            result.jquery = get_document('<span></span>')('span')
            Object.setPrototypeOf(result, HTMLSpanElement.prototype)
            break
        case 'a':
            // result.jquery = $.parseHTML('<a></a>')  todo 没有cheerioAPI方法
            result.jquery = get_document('<a></a>')('a')
            Object.setPrototypeOf(result, HTMLAnchorElement.prototype)
            break
        case 'canvas':
            result.jquery = get_document('<canvas></canvas>')('canvas')
            result.jquery.canvas = createCanvas(300, 150)
            Object.setPrototypeOf(result, HTMLCanvasElement.prototype)
            break
        case 'img':
            result.jquery = get_document('<img>')('img')
            Object.setPrototypeOf(result, HTMLImageElement.prototype)
            break
        case 'body':
            result.jquery = get_document('<body></body>')('body')
            Object.setPrototypeOf(result, HTMLBodyElement.prototype)
            break
        case 'input':
            result.jquery = get_document('<input>')('input')
            Object.setPrototypeOf(result, HTMLInputElement.prototype)
            break
        case "form":
            result.jquery = get_document('<form></form>')('form')
            Object.setPrototypeOf(result, HTMLFormElement.prototype)
            break
        case 'audio':
            result.jquery = get_document('<audio></audio>')('audio')
            Object.setPrototypeOf(result, HTMLAudioElement.prototype)
            break
        case 'video':
            result.jquery = get_document('<video></video>')('video')
            Object.setPrototypeOf(result, HTMLVideoElement.prototype)
            break
        case 'iframe':
            result.jquery = get_document('<iframe></iframe>')('iframe')
            Object.setPrototypeOf(result, HTMLIFrameElement.prototype)
            break
        default:
            console.log(`Document_createElement_${tagName}未实现`);
            debugger;
    }

    if (dingvm.config.proxy_tag) {
        let name = `DocumentProto_createElement_${tagName}`
        result = dingvm.toolsFunc.createProxyObj(result, name)
    }

    return result
};
dingvm.envFunc.DocumentProto_body_get = function DocumentProto_body_get() {
    // debugger
    let result = {}
    const temp = $('body')
    Object.defineProperty(result, 'jquery', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: temp
    })
    Object.setPrototypeOf(result, HTMLBodyElement.prototype)

    return result
};
dingvm.envFunc.DocumentProto_getElementsByTagName = function DocumentProto_getElementsByTagName(tagName) {
    // debugger
    let temp = $(tagName)
    let result = []
    for (let i = 0; i < temp.length; i++) {
        let temp2 = {}
        switch (tagName) {
            case 'div':
                Object.setPrototypeOf(temp2, HTMLDivElement.prototype)
                break
            case 'input':
                Object.setPrototypeOf(temp2, HTMLInputElement.prototype)
                break
            case 'h2':
                Object.setPrototypeOf(temp2, HTMLHeadingElement.prototype)
                break
            case 'iframe':
                Object.setPrototypeOf(temp2, HTMLIFrameElement.prototype)
                break
            case 'span':
                Object.setPrototypeOf(temp2, HTMLSpanElement.prototype)
                break
            case 'meta':
                Object.setPrototypeOf(temp2, HTMLMetaElement.prototype)
                break
            case 'i':
                Object.setPrototypeOf(temp2, HTMLIFrameElement.prototype)
                break
            case 'base':
                Object.setPrototypeOf(temp2, HTMLBaseElement.prototype)
                break
            case 'script':
                Object.setPrototypeOf(temp2, HTMLScriptElement.prototype)
                break
            case 'body':
                Object.setPrototypeOf(temp2, HTMLBodyElement.prototype)
                break
            default:
                console.log(`DocumentProto_getElementsByTagName_${tagName}未实现`);
                debugger;
        }
        Object.defineProperty(temp2, 'jquery', {
            configurable: true,
            enumerable: false,
            writable: true,
            value: $(temp[i])
        })
        result.push(temp2)
    }
    Object.setPrototypeOf(result, HTMLCollection.prototype)
    return result
};
dingvm.envFunc.DocumentProto_write = function DocumentProto_write(html_str) {
    // debugger
    let script_position = document.script_position
    let parsed_html = $.parseHTML(html_str)
    if (script_position) {
        // script_position.after(html_str)
        script_position.after(parsed_html)
    } else {
        $('body').append(parsed_html)
    }
};
dingvm.envFunc.DocumentProto_cookie_get = function DocumentProto_cookie_get() {
    let jsonCookie = dingvm.memory.globalVar.jsonCookie;
    let tempCookie = "";
    for (const key in jsonCookie) {
        if (key === "") {
            tempCookie += `${jsonCookie[key]}; `;
        } else {
            tempCookie += `${key}=${jsonCookie[key]}; `;
        }
    }
    return tempCookie.slice(0, -2);
};
dingvm.envFunc.DocumentProto_cookie_set = function DocumentProto_cookie_set() {
    console.log('cookie: ', arguments[0])

    let cookieValue = arguments[0];
    if (cookieValue === "") {
        return dingvm.memory.globalVar.jsonCookie = ""
    }
    let index = cookieValue.indexOf(";");
    if (index !== -1) {
        cookieValue = cookieValue.substring(0, index);
    }
    if (cookieValue.indexOf("=") === -1) {
        dingvm.memory.globalVar.jsonCookie[""] = cookieValue.trim();
    } else {
        let item = cookieValue.split("=");
        let k = item[0].trim();
        dingvm.memory.globalVar.jsonCookie[k] = item[1].trim();
    }
};
dingvm.envFunc.DocumentProto_all_get = function () {
    let all = dingvm.memory.globalVar.all;
    Object.setPrototypeOf(all, HTMLAllCollection.prototype);
    return all;
};
dingvm.envFunc.DocumentProto_scripts_get = function () {
    let scripts = dingvm.memory.globalVar.scripts;
    Object.setPrototypeOf(scripts, HTMLCollection.prototype);
    return scripts;
};
dingvm.envFunc.DocumentProto_characterSet_get = function () {
    return 'UTF-8'
};
dingvm.envFunc.DocumentProto_documentElement_get = function () {
    const temp = $('html')

    if (temp[0] === undefined) {
        return null
    }

    let result = {}
    Object.setPrototypeOf(result, HTMLHtmlElement.prototype)
    Object.defineProperty(result, 'jquery', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: temp
    })

    return result
};
dingvm.envFunc.DocumentProto_charset_get = function () {
    return 'UTF-8'
};
dingvm.envFunc.DocumentProto_compatMode_get = function () {
    return "CSS1Compat"
};
dingvm.envFunc.DocumentProto_createEvent = function (type) {
    let event = {}
    if (type === 'TouchEvent') {
        dingvm.toolsFunc.throwError('DOMException', "Failed to execute 'createEvent' on 'Document': The provided event type ('TouchEvent') is invalid.")
    } else {
        Object.setPrototypeOf(event, Event.prototype)
    }

    return event
};
dingvm.envFunc.DocumentProto_querySelector = function (selector) {
    const temp = $(selector)

    if (temp[0] === undefined) {
        return null
    }

    let result = {}
    switch (temp[0].name) {
        case "div":
            Object.setPrototypeOf(result, HTMLDivElement.prototype)
            break
        case 'input':
            Object.setPrototypeOf(result, HTMLInputElement.prototype)
            break
        case 'span':
            Object.setPrototypeOf(result, HTMLSpanElement.prototype)
            break
        case 'iframe':
            Object.setPrototypeOf(result, HTMLIFrameElement.prototype)
            break
        case 'script':
            Object.setPrototypeOf(result, HTMLScriptElement.prototype)
            break
        default:
            console.log(`DocumentProto_querySelector_${temp[0].name}未实现`);
            debugger
    }
    Object.defineProperty(result, 'jquery', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: temp
    })

    return result
};
dingvm.envFunc.DocumentProto_referrer_get = function () {
    return document.href
};
dingvm.envFunc.DocumentProto_visibilityState_get = function () {
    return 'visible'
};
dingvm.envFunc.DocumentProto_createExpression = function () {
    let obj = {}
    Object.setPrototypeOf(obj, XPathExpression.prototype)

    return obj
};
dingvm.envFunc.DocumentProto_hidden_get = function () {
    return false
};
dingvm.envFunc.DocumentProto_hasFocus = function () {
    return false
};
dingvm.envFunc.DocumentProto_title_get = function () {
    return $('title').text()
};
dingvm.envFunc.DocumentProto_head_get = function () {
    // debugger
    let result = {}
    const temp = $('head')
    Object.defineProperty(result, 'jquery', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: temp
    })
    Object.setPrototypeOf(result, HTMLHeadElement.prototype)

    return result
};
dingvm.envFunc.DocumentProto_domain_get = function () {
    return location.host
};
dingvm.envFunc.DocumentProto_domain_set = function () {
    debugger
};
dingvm.envFunc.DocumentProto_readyState_get = function () {
    // TODO: 其他阶段可能的值 "loading"(文档仍在加载中)、"interactive"(文档已经完成解析，但仍在加载子资源)
    // 整个文档和其所有子资源都已完成加载
    return dingvm.memory.globalVar.document.readyState
};
dingvm.envFunc.DocumentProto_getElementsByName = function () {
    let name = arguments[0];
    const temp = $(`[name=${name}]`);

    if (temp[0] === undefined) {
        return null
    }

    let result = []
    for (let i = 0; i < temp.length; i++) {
        let temp2 = {}
        switch (temp[i].name) {
            case "div":
                Object.setPrototypeOf(temp2, HTMLDivElement.prototype)
                break
            case 'input':
                Object.setPrototypeOf(temp2, HTMLInputElement.prototype)
                break
            case 'span':
                Object.setPrototypeOf(temp2, HTMLSpanElement.prototype)
                break
            case 'iframe':
                Object.setPrototypeOf(temp2, HTMLIFrameElement.prototype)
                break
            default:
                console.log(`DocumentProto_getElementsByName_${temp[i].name}未实现`);
                debugger
        }
        Object.defineProperty(temp2, 'jquery', {
            configurable: true,
            enumerable: false,
            writable: true,
            value: temp
        })
        result.push(temp2)
    }
    Object.setPrototypeOf(result, NodeList.prototype)

    return result
};
dingvm.envFunc.DocumentProto_hidden_get = function () {
    return false
};
dingvm.envFunc.DocumentProto_webkitHidden_get = function () {
    return false
};
dingvm.envFunc.DocumentProto_currentScript_get = function () {
    return null
}