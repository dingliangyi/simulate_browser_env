dingvm.envFunc.HTMLImageElementProto_width_get = function () {
    let width = dingvm.toolsFunc.get_protoOwnAttr.call(this, 'width')
    if (width === undefined) {
        return 300
    }

    return width
};
dingvm.envFunc.HTMLImageElementProto_width_set = function () {
    dingvm.toolsFunc.setProtoArr.call(this, 'width')
};
dingvm.envFunc.HTMLImageElementProto_height_get = function () {
    let height = dingvm.toolsFunc.get_protoOwnAttr.call(this, 'height')
    if (height === undefined) {
        return 150
    }

    return height
};
dingvm.envFunc.HTMLImageElementProto_height_set = function () {
    dingvm.toolsFunc.setProtoArr.call(this, 'height')
};
dingvm.envFunc.HTMLImageElementProto_src_get = function () {
    let src = dingvm.toolsFunc.get_protoOwnAttr.call(this, 'src')
    if (src === undefined) {
        return ''
    }

    return src
}
dingvm.envFunc.HTMLImageElementProto_src_set = function () {
    dingvm.toolsFunc.setProtoArr.call(this, 'src')
}