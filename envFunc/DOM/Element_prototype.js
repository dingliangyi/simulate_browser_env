dingvm.envFunc.ElementProto_id_get = function ElementProto_id_get() {
    return this.jquery.attr('id')
};
dingvm.envFunc.ElementProto_id_set = function ElementProto_id_set(value) {
    if (this instanceof HTMLFormElement) {
        // debugger
        dingvm.memory.globalVar.window.filter_proto_attr.push(value)
        window.__proto__.__proto__[value] = this
        //! 注意在vm2运行时,不能过window.hasOwnProperty()检测
    }

    this.jquery.attr('id', value)
};
dingvm.envFunc.ElementProto_innerHTML_get = function ElementProto_innerHTML_get() {
    return this.jquery.html()
};
dingvm.envFunc.ElementProto_innerHTML_set = function ElementProto_innerHTML_set(value) {
    this.jquery.empty()
    let match = value.match(/<\/([a-zA-Z]+)>/)
    if (match && match.length === 2) {
        let name = value.match(/<\/([a-zA-Z]+)>/)[1]
        value = get_document(value)(name)
    }
    this.jquery.append(value)
};
dingvm.envFunc.ElementProto_outerHTML_get = function ElementProto_outerHTML_get() {
    return this.jquery.toString()
};
dingvm.envFunc.ElementProto_append = function ElementProto_append(value) {
    // debugger;
    for (let i = 0; i < arguments.length; i++) {
        let node = arguments[i]
        if (typeof node === "string") {
            this.jquery.append(node)
        } else {
            this.jquery.append(node.jquery)
        }
    }
};
dingvm.envFunc.ElementProto_getAttribute = function ElementProto_getAttribute(name) {
    // debugger
    return this.jquery.attr(name) === undefined ? null : this.jquery.attr(name)
};
dingvm.envFunc.ElementProto_setAttribute = function ElementProto_setAttribute(name, value) {
    this.jquery.attr(name, value);
};
dingvm.envFunc.ElementProto_children_get = function ElementProto_children_get() {
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
                console.log(`DocumentProto_getElementsByTagName_${tagName}未实现`);
                debugger;
        }
        temp2.jquery = temp
        result.push(temp2)
    }
    Object.setPrototypeOf(result, HTMLCollection.prototype)
    return result
};
dingvm.envFunc.ElementProto_getElementsByTagName = function (tagName) {
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
dingvm.envFunc.ElementProto_clientWidth_get = function () {
    return dingvm.memory.globalVar.width
};
dingvm.envFunc.ElementProto_clientHeight_get = function () {
    return dingvm.memory.globalVar.height
};
dingvm.envFunc.ElementProto_querySelector = function () {
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
        default:
            console.log(`ElementProto_querySelector_${temp[0].name}未实现`);
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
dingvm.envFunc.ElementProto_querySelectorAll = function (selector) {
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
                console.log(`ElementProto_getElementsByTagName_${tagName}未实现`);
                debugger;
        }
        temp2.jquery = $(temp[i])
        result.push(temp2)
    }
    Object.setPrototypeOf(result, HTMLCollection.prototype)
    return result
}
dingvm.envFunc.ElementProto_tagName_get = function () {
    return this.jquery[0].name.toUpperCase()
};
dingvm.envFunc.ElementProto_getAttributeNames = function () {
    return []
};
dingvm.envFunc.ElementProto_getElementsByClassName = function (className) {
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
                console.log(`ElementProto_getElementsByClassName_${elements[i].name}未实现`);
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
dingvm.envFunc.ElementProto_className_get = function () {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'className')
};
dingvm.envFunc.ElementProto_attributes_get = function () {
    debugger
    let attrs = this.jquery[0].attribs;
    let result = {};
    let length = 0;
    for (let attr in attrs) {
        let attribute1 = assign(attr);
        dingvm.toolsFunc.setProtoArr.call(attribute1, 'name', attr);
        result[attr] = attribute1;

        let attribute2 = assign(attr);
        dingvm.toolsFunc.setProtoArr.call(attribute2, 'name', length);
        result[length] = attribute2;
        length++;
    }
    dingvm.toolsFunc.setProtoArr.call(result, 'length', length);
    Object.setPrototypeOf(result, NamedNodeMap.prototype);

    function assign(attr) {
        let attribute = {};
        Object.setPrototypeOf(attribute, Attr.prototype);
        dingvm.toolsFunc.setProtoArr.call(attribute, 'value', attrs[attr]);
        dingvm.toolsFunc.setProtoArr.call(attribute, 'nodeValue', attrs[attr]);
        dingvm.toolsFunc.setProtoArr.call(attribute, 'textContent', attrs[attr]);
        dingvm.toolsFunc.setProtoArr.call(attribute, 'ownerElement', this)
        return attribute;
    }

    return result;
};
dingvm.envFunc.ElementProto_scrollTop_get = function () {
    return 0
};
dingvm.envFunc.ElementProto_scrollLeft_get = function () {
    return 0
};
dingvm.envFunc.ElementProto_clientTop_get = function () {
    return 0
};
dingvm.envFunc.ElementProto_clientLeft_get = function () {
    return 0
};