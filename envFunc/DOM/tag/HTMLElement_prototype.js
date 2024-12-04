dingvm.envFunc.HTMLElementProto_innerText_get = function () {
    return this.jquery.text()
};
dingvm.envFunc.HTMLElementProto_innerText_set = function (value) {
    this.jquery.text(value);
};
dingvm.envFunc.HTMLElementProto_style_get = function () {
    // debugger
    // let style_str = this.jquery.attr('style')
    let style_obj = this.jquery.css()
    let style_ = Object.assign(Object.create(CSSStyleDeclaration.prototype), style)
    style_.myThis = this
    let index = style_.length
    for (let key in style_obj) {
        //* hex16ToRgb
        if (key.includes('color') && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(style_obj[key])) {
            style_obj[key] = dingvm.toolsFunc.hexToRgb(style_obj[key])
        }

        let key_old = key
        let index_css = key.indexOf('-')
        if (index_css !== -1) {
            key = key.substring(0, index_css) + key[index_css + 1].toUpperCase() + key.substring(index_css + 2)
        }
        style_[key] = style_obj[key_old]

        if (key === "padding") {
            style_[index++] = "padding-top"
            style_[index++] = "padding-right"
            style_[index++] = "padding-bottom"
            style_[index++] = "padding-left"

            style_["paddingTop"] = style_obj[key]
            style_["paddingRight"] = style_obj[key]
            style_["paddingBottom"] = style_obj[key]
            style_["paddingLeft"] = style_obj[key]
        } else if (key === "margin") {
            style_[index++] = "margin-top"
            style_[index++] = "margin-right"
            style_[index++] = "margin-bottom"
            style_[index++] = "margin-left"

            style_["marginTop"] = style_obj[key]
            style_["marginRight"] = style_obj[key]
            style_["marginBottom"] = style_obj[key]
            style_["marginLeft"] = style_obj[key]
        } else {
            style_[index++] = key
        }
    }

    //> 监控style属性
    if (dingvm.config.proxy_tag_style) {
        style_ = dingvm.toolsFunc.createProxyObj(style_, 'style')
    }

    return style_
};
dingvm.envFunc.HTMLElementProto_style_set = function (value) {
    debugger
};
dingvm.envFunc.HTMLElementProto_offsetWidth_get = function () {
    let fontFamily = this.style.fontFamily

    if (['monospace', 'sans-serif', 'serif'].includes(fontFamily)) {
        return 111
    }

    let fontFamily_ = fontFamily.split(',')
    fontFamily = fontFamily_[0].slice(1, -1)
    if (dingvm.memory.globalVar.fontList.includes(fontFamily)) {
        return 666
    } else {
        return 111
    }
};
dingvm.envFunc.HTMLElementProto_offsetWidth_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'offsetWidth', value)
};
dingvm.envFunc.HTMLElementProto_offsetHeight_get = function () {
    let fontFamily = this.style.fontFamily

    if (['monospace', 'sans-serif', 'serif'].includes(fontFamily)) {
        return 222
    }

    let fontFamily_ = fontFamily.split(',')
    fontFamily = fontFamily_[0].slice(1, -1)
    if (dingvm.memory.globalVar.fontList.includes(fontFamily)) {
        return _.random(50, 180, false)
    } else {
        return 222
    }
};
dingvm.envFunc.HTMLElementProto_offsetHeight_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'offsetHeight', value)
};
dingvm.envFunc.HTMLElementProto_accessKey_get = function () {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'accessKey')
};
dingvm.envFunc.HTMLElementProto_accessKey_get = function (value) {
    this.jquery.attr('accessKey', value)
};
dingvm.envFunc.HTMLElementProto_onload_get = function () {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'onload')
};
dingvm.envFunc.HTMLElementProto_onload_set = function (value) {
    this.jquery.attr('onload', value)
};
dingvm.envFunc.HTMLElementProto_onmouseenter_get = function () {
    debugger
    return null
};
dingvm.envFunc.HTMLElementProto_onmouseenter_set = function (value) {
    dingvm.toolsFunc.setProtoArr.call(this, 'onmouseenter', value)
};
dingvm.envFunc.HTMLElementProto_onresize_get = function () {
    debugger
    return null
};
dingvm.envFunc.HTMLElementProto_onresize_set = function (value) {
    dingvm.toolsFunc.setProtoArr.call(this, 'onresize', value)
};