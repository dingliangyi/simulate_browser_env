dingvm.envFunc.CSSStyleDeclarationProto_cssText_get = function () {
    let cssText = this.myThis.jquery.attr('style')
    if (cssText) {
        return cssText
    }

    return ''
};
dingvm.envFunc.CSSStyleDeclarationProto_cssText_set = function (value) {
    this.myThis.jquery.attr('style', value);
};
dingvm.envFunc.CSSStyleDeclarationProto_length_get = function () {
    let index = 0
    for (let _ in this.myThis.jquery.css())
        index++

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
    debugger
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
    if (typeof index === 'string')
        return index

    let style_ = this
    let value = style_[index]
    if (value === undefined) {
        return ""
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
};
dingvm.envFunc.CSSStyleDeclarationProto_setProperty = function (key, value) {
    // debugger
    this.myThis.jquery.css(key, value)
};