dingvm.envFunc.CSSStyleDeclarationProto_cssText_get = function () {
    let cssText = this.myThis.jquery.attr('style')
    if (cssText) {
        return cssText
    }

    return ''
};
dingvm.envFunc.CSSStyleDeclarationProto_cssText_set = function (value) {
    // return dingvm.toolsFunc.setProtoArr.call(this, 'cssText', value)
    this.myThis.jquery.attr('style', value);
    dingvm.toolsFunc.deleteProtoArr.call(this, 'style')
};
dingvm.envFunc.CSSStyleDeclarationProto_length_get = function () {
    let index = 0
    for (let i = 0; i < 999; i++) {
        let attr_value = this.item(i)
        if (attr_value === "") {
            index += i
            break
        }
    }

    return index
};
dingvm.envFunc.CSSStyleDeclarationProto_parentRule_get = function () {
    return null
};
dingvm.envFunc.CSSStyleDeclarationProto_cssFloat_get = function () {
    let cssFloat = dingvm.toolsFunc.getProtoArr.call(this, "cssFloat")
    if (cssFloat) {
        return cssFloat
    }

    return 'none'
};
dingvm.envFunc.CSSStyleDeclarationProto_cssFloat_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'cssFloat', value)
};
dingvm.envFunc.CSSStyleDeclarationProto_getPropertyPriority = function () {
    console.log("CSSStyleDeclarationProto_getPropertyPriority", arguments)
};
dingvm.envFunc.CSSStyleDeclarationProto_getPropertyValue = function (key) {
    // debugger
    let value = this.myThis.jquery.css(key)
    if (value) {
        return value
    }

    return ""
};
dingvm.envFunc.CSSStyleDeclarationProto_item = function (index) {
    // debugger
    let style_ = this
    let value = style_[index]
    if (value === undefined) {
        return ""
    } else if (value === undefined && typeof index === 'string') {
        return style_[0] === undefined ? "" : style_[0]
    }

    return value
};
dingvm.envFunc.CSSStyleDeclarationProto_removeProperty = function (key) {
    // debugger
    let style_text = this.myThis.jquery.attr('style').slice(0, -1)
    let css_list = style_text.split(';')
    for (let i = 0; i < css_list.length; i++) {
        let if_include = css_list[i].includes(key)
        if (if_include) {
            let index_css = key.indexOf('-')
            if (index_css !== -1) {
                key = key.substring(0, index_css) + key[index_css + 1].toUpperCase() + key.substring(index_css + 2)
            }
            css_list.splice(i, 1)
            break
        }
    }
    style_text = css_list.join(';') + ';'
    this.myThis.jquery.attr('style', style_text)
    let style_ = dingvm.toolsFunc.getProtoArr.call(this.myThis, 'style')
    // style_[key] = ""
    dingvm.toolsFunc.defineProperty(style_, key, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: ''
    });
    if (key === 'padding') {
        style_["paddingTop"] = ""
        style_["paddingRight"] = ""
        style_["paddingBottom"] = ""
        style_["paddingLeft"] = ""
    } else if (key === 'margin') {

    }

    let length = this.length
    let temp_attr = []
    for (let i = 0; i < length; i++) {
        let css_value = style_[i]
        delete style_[i]
        if (css_value !== key) {
            temp_attr.push(css_value)
        }
    }
    for (let i = 0; i < temp_attr.length; i++) {
        dingvm.toolsFunc.defineProperty(style_, i, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: temp_attr[i]
        });
    }
};
dingvm.envFunc.CSSStyleDeclarationProto_setProperty = function (key, value) {
    // debugger
    this.myThis.jquery.css(key, value)
    let style_ = dingvm.toolsFunc.getProtoArr.call(this.myThis, 'style')
    let index_css = key.indexOf('-')
    if (index_css !== -1) {
        key = key.substring(0, index_css) + key[index_css + 1].toUpperCase() + key.substring(index_css + 2)
    }
    style_[key] = value
};
