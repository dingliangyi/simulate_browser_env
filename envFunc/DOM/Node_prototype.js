dingvm.envFunc.NodeProto_appendChild = function NodeProto_appendChild(node) {
    // debugger;
    if (typeof node === 'string') {
        throw TypeError("Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'")
    }

    this.jquery.append(node.jquery)

    return node
};
dingvm.envFunc.NodeProto_nextSibling_get = function NodeProto_nextSibling_get() {
    // debugger
    let result = {}
    let nextSibling = this.jquery[0].nextSibling
    result.jquery = $(nextSibling)
    if (!nextSibling)
        return null

    switch (result.jquery[0].type.toLocaleLowerCase()) {
        case 'tag':
            switch (result.jquery[0].name.toLocaleLowerCase()) {
                case 'input':
                    Object.setPrototypeOf(result, HTMLInputElement.prototype)
                    break
                case 'div':
                    Object.setPrototypeOf(result, HTMLDivElement.prototype)
                    break
                case 'span':
                    Object.setPrototypeOf(result, HTMLSpanElement.prototype)
                    break
                default:
                    console.log(`NodeProto_nextSibling_${result.jquery[0].name.toLocaleLowerCase()}未实现`);
                    debugger
            }
            break
        case 'script':
            switch (result.jquery[0].name.toLocaleLowerCase()) {
                case 'script':
                    Object.setPrototypeOf(result, HTMLScriptElement.prototype)
                    break
                default:
                    debugger
            }
            break
        case 'text':
            Object.setPrototypeOf(result, Text.prototype)
            break
        default:
            debugger;
    }

    return result
};
dingvm.envFunc.NodeProto_nodeName_get = function NodeProto_nodeName_get() {
    if (this === document)
        return '#document'
    switch (this.jquery[0].type) {
        case 'tag':
            return this.jquery[0].name.toLocaleUpperCase()
        case 'script':
            return this.jquery[0].name.toLocaleUpperCase()
        case 'text':
            return '#text'
        default:
            debugger
    }
};
dingvm.envFunc.NodeProto_nodeType_get = function NodeProto_nodeType_get() {
    if (this === document)
        return 9
    switch (this.jquery[0].type) {
        case 'tag':
            return 1
        case 'script':
            return 1
        case 'text':
            return 3
        default:
            debugger
    }
};
dingvm.envFunc.NodeProto_parentNode_get = function NodeProto_parentNode_get() {
    // debugger
    let temp = this.jquery.parent()
    let result = {}
    switch (temp[0].name) {
        case 'input':
            Object.setPrototypeOf(result, HTMLInputElement.prototype)
            break
        case 'div':
            Object.setPrototypeOf(result, HTMLDivElement.prototype)
            break
        case 'span':
            Object.setPrototypeOf(result, HTMLSpanElement.prototype)
            break
        case 'head':
            Object.setPrototypeOf(result, HTMLHeadElement.prototype)
            break
        case 'meta':
            Object.setPrototypeOf(result, HTMLMetaElement)
            break
        default:
            console.log(`NodeProto_parentNode_${temp[0].name}未实现`);
            debugger
    }
    result.jquery = temp

    return result
};
dingvm.envFunc.NodeProto_removeChild = function NodeProto_removeChild(node) {
    // debugger
    let oldNode = node
    node.jquery.remove()
    return oldNode
};
dingvm.envFunc.NodeProto_parentElement_get = function () {
    // debugger

    if (this.nodeType === 9) {
        return null
    }

    let temp = this.jquery.parent()
    let result = {}
    switch (temp[0].name) {
        case 'input':
            Object.setPrototypeOf(result, HTMLInputElement.prototype)
            break
        case 'div':
            Object.setPrototypeOf(result, HTMLDivElement.prototype)
            break
        case 'span':
            Object.setPrototypeOf(result, HTMLSpanElement.prototype)
            break
        case 'head':
            Object.setPrototypeOf(result, HTMLHeadElement.prototype)
            break
        case 'meta':
            Object.setPrototypeOf(result, HTMLMetaElement.prototype)
            break
        case 'body':
            Object.setPrototypeOf(result, HTMLBodyElement.prototype)
            break
        default:
            console.log(`NodeProto_parentNode_${temp[0].name}未实现`);
            debugger
    }
    result.jquery = temp

    return result
};
dingvm.envFunc.NodeProto_firstChild_get = function () {
    debugger
    let firstChild_ = this.jquery[0].firstChild
    if (!firstChild_) {
        return null
    }
    let firstChild = $(firstChild_)
    let result = {}
    result.jquery = firstChild

    switch (result.jquery[0].type.toLocaleLowerCase()) {
        case 'tag':
            switch (result.jquery[0].name.toLocaleLowerCase()) {
                case 'input':
                    Object.setPrototypeOf(result, HTMLInputElement.prototype)
                    break
                case 'div':
                    Object.setPrototypeOf(result, HTMLDivElement.prototype)
                    break
                case 'span':
                    Object.setPrototypeOf(result, HTMLSpanElement.prototype)
                    break
                default:
                    console.log(`NodeProto_firstChild_get_${result.jquery[0].name.toLocaleLowerCase()}未实现`);
                    debugger
            }
            break
        case 'script':
            switch (result.jquery[0].name.toLocaleLowerCase()) {
                case 'script':
                    Object.setPrototypeOf(result, HTMLScriptElement.prototype)
                    break
                default:
                    debugger
            }
            break
        case 'text':
            Object.setPrototypeOf(result, Text.prototype)
            break
        default:
            debugger;
    }

    return result
};
dingvm.envFunc.NodeProto_childNodes_get = function () {
    // debugger
    let children = this.jquery.children()
    let result = []
    for (let i = 0; i < children.length; i++) {
        let temp = $(children[i])
        let tagName = temp[0].name
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
            default:
                console.log(`DocumentProto_getElementsByTagName_${tagName}未实现`);
                debugger;
        }
        temp2.jquery = temp
        result.push(temp2)
    }
    Object.setPrototypeOf(result, NodeList.prototype)
    return result
};
dingvm.envFunc.NodeProto_textContent_get = function () {
    return this.jquery.text()
};
dingvm.envFunc.NodeProto_textContent_set = function (text) {
    this.jquery.text(text)
};