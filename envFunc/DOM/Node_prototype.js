dingvm.envFunc.NodeProto_appendChild = function (node) {
    // debugger;
    if (typeof node === 'string') {
        throw TypeError("Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'")
    }

    this.jquery.append(node.jquery)

    return node
};
dingvm.envFunc.NodeProto_nextSibling_get = function () {
    // debugger
    let result = {}
    let nextSibling = this.jquery[0].nextSibling
    result.jquery = $(nextSibling)
    if (!nextSibling)
        return null

    switch (result.jquery[0].type.toLowerCase()) {
        case 'tag':
            switch (result.jquery[0].name.toLowerCase()) {
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
                    console.log(`NodeProto_nextSibling_${result.jquery[0].name}未实现`);
                    debugger
            }
            break
        case 'script':
            switch (result.jquery[0].name.toLowerCase()) {
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
dingvm.envFunc.NodeProto_nodeName_get = function () {
    if (Object.prototype.toString.call(this) === '[object Attr]') {
        return dingvm.toolsFunc.getProtoArr.call(this, 'name')
    }

    if (this === document)
        return '#document'
    switch (this.jquery[0].type.toLowerCase()) {
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
dingvm.envFunc.NodeProto_nodeType_get = function () {
    if (Object.prototype.toString.call(this) === '[object Attr]') {
        return 2
    }

    if (this === document)
        return 9
    switch (this.jquery[0].type.toLowerCase()) {
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
dingvm.envFunc.NodeProto_parentNode_get = function () {
    // debugger
    let temp = this.jquery.parent()
    let result = {}
    switch (temp[0].name.toLowerCase()) {
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
dingvm.envFunc.NodeProto_removeChild = function (node) {
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
    switch (temp[0].name.toLowerCase()) {
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
    // debugger
    let firstChild_ = this.jquery[0].firstChild
    if (!firstChild_) {
        return null
    }
    let firstChild = $(firstChild_)
    let result = {}
    result.jquery = firstChild

    switch (result.jquery[0].type.toLowerCase()) {
        case 'tag':
            switch (result.jquery[0].name.toLowerCase()) {
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
                    console.log(`NodeProto_firstChild_get_${result.jquery[0].name}未实现`);
                    debugger
            }
            break
        case 'script':
            switch (result.jquery[0].name.toLowerCase()) {
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
            default:
                console.log(`NodeProto_getElementsByTagName_${tagName}未实现`);
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
dingvm.envFunc.NodeProto_nodeValue_get = function () {
    if (this.jquery) {
        return this.jquery.text()
    }
    return dingvm.toolsFunc.getProtoArr.call(this, 'nodeValue')
};
dingvm.envFunc.NodeProto_baseURI_get = function () {
    return location.href
};
dingvm.envFunc.NodeProto_ownerDocument_get = function () {
    return document
};
dingvm.envFunc.NodeProto_textContent_get = function () {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'textContent')
}