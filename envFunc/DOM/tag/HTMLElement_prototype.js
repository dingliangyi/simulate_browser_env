dingvm.envFunc.HTMLElementProto_innerText_get = function HTMLElementProto_innerText_get() {
    return this.jquery.text()
};
dingvm.envFunc.HTMLElementProto_innerText_set = function HTMLElementProto_innerText_set(value) {
    this.jquery.text(value);
};
dingvm.envFunc.HTMLElementProto_style_get = function HTMLElementProto_style_get() {
    // debugger
    let style_ = dingvm.toolsFunc.get_protoOwnAttr.call(this, "style")
    if (style_ !== undefined) {
        return style_
    } else {
        style_ = Object.assign(Object.create(CSSStyleDeclaration.prototype), style)
        style_.myThis = this
        let styles = this.jquery.css()
        let index = style_.length
        for (let key in styles) {
            //* hex16ToRgb
            if (key.includes('color') && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(styles[key])) {
                styles[key] = dingvm.toolsFunc.hexToRgb(styles[key])
            }

            let key_old = key
            let index_css = key.indexOf('-')
            if (index_css !== -1) {
                key = key.substring(0, index_css) + key[index_css + 1].toUpperCase() + key.substring(index_css + 2)
            }
            style_[key] = styles[key_old]
            if (key === "padding") {
                style_[index++] = "padding-top"
                style_[index++] = "padding-right"
                style_[index++] = "padding-bottom"
                style_[index++] = "padding-left"

                style_["paddingTop"] = styles[key]
                style_["paddingRight"] = styles[key]
                style_["paddingBottom"] = styles[key]
                style_["paddingLeft"] = styles[key]
            } else if (key === "margin") {
                //todo 待补
            } else {
                style_[index++] = key
            }
        }
    }

    //* 监控style属性
    if (dingvm.config.proxy_tag_style) {
        style_ = dingvm.toolsFunc.createProxyObj(style_, 'style')
    }
    //* 设置cssText
    style_ = dingvm.toolsFunc.proxy_setStyle(style_)
    dingvm.toolsFunc.setProtoArr.call(this, "style", style_)

    return style_
};
dingvm.envFunc.HTMLElementProto_style_set = function HTMLElementProto_style_set(value) {
    // let css = value.split(';')
    // let style_ = Object.assign(Object.create(CSSStyleDeclaration.prototype), style)
    // style_.jquery = this.jquery
    //
    // if (dingvm.config.proxy_tag_style) {
    //     style_ = dingvm.toolsFunc.createProxyObj(style_, 'style')
    // }
    //
    // for (let i = 0; i < css.length; i++) {
    //     let css_key = css[i].split(':')[0].trim()
    //     let index = css_key.indexOf('-')
    //     if (index !== -1) {
    //         css_key = css_key.substring(0, index) + css_key[index + 1].toUpperCase() + css_key.substring(index + 2)
    //     }
    //     style[css_key] = css[i].split(':')[1].trim()
    // }
    this.jquery.attr('style', value)
    dingvm.toolsFunc.deleteProtoArr.call(this, 'style')
    // dingvm.toolsFunc.setProtoArr.call(this, 'style', style_)
};
dingvm.envFunc.HTMLElementProto_offsetWidth_get = function HTMLElementProto_offsetWidth_get() {
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
dingvm.envFunc.HTMLElementProto_offsetWidth_set = function HTMLElementProto_offsetWidth_set(value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'offsetWidth', value)
};
dingvm.envFunc.HTMLElementProto_offsetHeight_get = function HTMLElementProto_offsetHeight_get() {
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
dingvm.envFunc.HTMLElementProto_offsetHeight_set = function HTMLElementProto_offsetHeight_set(value) {
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
