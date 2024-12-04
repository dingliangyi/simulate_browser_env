dingvm.envFunc.DocumentProto_getElementById = function () {
    // debugger
    let id = arguments[0];
    const temp = $(`#${id}`);

    if (temp[0] === undefined) {
        return null
    }

    let result = null;
    if (temp !== undefined) {
        result = {}
        switch (temp[0].name.toLowerCase()) {
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
dingvm.envFunc.DocumentProto_createElement = function (tagName) {
    // debugger;
    let result = {}
    switch (tagName.toLowerCase()) {
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
            // result.jquery.canvas = createCanvas(300, 150)
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
        case 'i':
            result.jquery = get_document('<i></i>')('i')
            Object.setPrototypeOf(result, HTMLElement.prototype)
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
dingvm.envFunc.DocumentProto_body_get = function () {
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
dingvm.envFunc.DocumentProto_getElementsByTagName = function (tagName) {
    // debugger
    let temp = $(tagName)
    let result = []
    for (let i = 0; i < temp.length; i++) {
        let temp2 = {}
        switch (tagName.toLowerCase()) {
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
        if (dingvm.config.proxy_tag) {
            let name = `DocumentProto_getElementsByTagName_${tagName}`
            temp2 = dingvm.toolsFunc.createProxyObj(temp2, name)
        }
        result.push(temp2)
    }
    Object.setPrototypeOf(result, HTMLCollection.prototype)
    return result
};
dingvm.envFunc.DocumentProto_write = function (html_str) {
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
dingvm.envFunc.DocumentProto_cookie_get = function () {
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
dingvm.envFunc.DocumentProto_cookie_set = function (value) {

    console.log(`set ${value.split(';')[0].slice(14).length} cookie:`, value)

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
    switch (type.toUpperCase()) {
        case 'MOUSEEVENT':
            Object.setPrototypeOf(event, MouseEvent.prototype)
            break
        case 'TOUCHEVENT':
            dingvm.toolsFunc.throwError('DOMException', "Failed to execute 'createEvent' on 'Document': The provided event type ('TouchEvent') is invalid.")
            break
        case "EVENT":
            Object.setPrototypeOf(event, Event.prototype)
            break
        default:
            console.log(`DocumentProto_createEvent_${type}未实现`);
            debugger
    }

    return event
};
dingvm.envFunc.DocumentProto_querySelector = function (selector) {
    const temp = $(selector)

    if (temp[0] === undefined) {
        return null
    }

    let result = {}
    switch (temp[0].name.toLowerCase()) {
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
        case 'form':
            Object.setPrototypeOf(result, HTMLFormElement.prototype)
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
dingvm.envFunc.DocumentProto_querySelectorAll = function (selector) {
    if (selector === '*') {
        return dingvm.memory.globalVar.all
    }
    let temp = $(selector)
    let result = []
    for (let i = 0; i < temp.length; i++) {
        let temp2 = {}
        switch (temp[0].name.toLowerCase()) {
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
            default:
                console.log(`DocumentProto_getElementsByTagName_${tagName}未实现`);
                debugger;
        }
        temp2.jquery = $(temp[i])
        result.push(temp2)
    }
    Object.setPrototypeOf(result, HTMLCollection.prototype)
    return result
};
dingvm.envFunc.DocumentProto_referrer_get = function () {
    return ''
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
        switch (temp[i].name.toLowerCase()) {
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
};
dingvm.envFunc.DocumentProto_URL_get = function () {
    return location.href
};
dingvm.envFunc.DocumentProto_documentURI_get = function () {
    return location.href
};
dingvm.envFunc.DocumentProto_dir_get = function () {
    return ''
};
dingvm.envFunc.DocumentProto_designMode_get = function () {
    return 'off'
};
dingvm.envFunc.DocumentProto_contentType_get = function () {
    return 'text/html'
};
dingvm.envFunc.DocumentProto_inputEncoding_get = function () {
    return 'UTF-8'
};
dingvm.envFunc.DocumentProto_onmousemove_get = function () {
    return null
};
dingvm.envFunc.DocumentProto_onselectionchange_get = function () {
    return null
};
dingvm.envFunc.DocumentProto_forms_get = function () {
    const forms = $('form');
    const documentForms = {};
    let length = 0;
    forms.each((i, form) => {
        const formName = $(form).attr('name');
        const id = $(form).attr('id');
        if (formName) {
            documentForms[formName] = $(form);
            documentForms[length] = $(form);
        }
        if (id) {
            documentForms[id] = $(form);
        }
        length++;
    });
    Object.setPrototypeOf(documentForms, HTMLCollection.prototype);
    dingvm.toolsFunc.setProtoArr.call(documentForms, 'length', length);
    return documentForms;
};
dingvm.envFunc.DocumentProto_getElementsByClassName = function (className) {
    let elements = $(`.${className}`);
    let result = [];
    for (let i = 0; i < elements.length; i++) {
        let element = {};
        switch (elements[i].name.toLowerCase()) {
            case 'div':
                Object.setPrototypeOf(element, HTMLDivElement.prototype);
                break;
            case 'input':
                Object.setPrototypeOf(element, HTMLInputElement.prototype);
                break;
            case 'span':
                Object.setPrototypeOf(element, HTMLSpanElement.prototype);
                break;
            case 'iframe':
                Object.setPrototypeOf(element, HTMLIFrameElement.prototype);
                break;
            default:
                console.log(`DocumentProto_getElementsByClassName_${elements[i].name}未实现`);
                debugger;
        }

        Object.defineProperty(element, 'jquery', {
            configurable: true,
            enumerable: false,
            writable: true,
            value: $(elements[i])
        });
        result.push(element);
    }

    Object.setPrototypeOf(result, HTMLCollection.prototype);
    return result;
};
dingvm.envFunc.DocumentProto_createTextNode = function (text) {
    let textNode = {};
    Object.setPrototypeOf(textNode, Text.prototype);
    dingvm.toolsFunc.setProtoArr.call(textNode, 'nodeValue', text);
    return textNode;
};
dingvm.envFunc.DocumentProto_lastModified_get = function () {
    let date = new Date();
    let month = date.getMonth() + 1
    month = month > 11 ? month : '0' + month
    let day = date.getDate()
    let year = date.getFullYear()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    return `${month}/${day}/${year} ${hours}->${minutes}->${seconds}`
};
dingvm.envFunc.DocumentProto_implementation_get = function () {
    let obj = {};
    Object.setPrototypeOf(obj, DOMImplementation.prototype);
    return obj;
};
dingvm.envFunc.DocumentProto_scrollingElement_get = function () {
    let obj = {};
    obj.jquery = get_document('<html></html>')('html');
    Object.setPrototypeOf(obj, HTMLElement.prototype);
    return obj;
}