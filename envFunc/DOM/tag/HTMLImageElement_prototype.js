dingvm.envFunc.HTMLImageElementProto_width_get = function () {
    let width = dingvm.toolsFunc.getProtoArr('width')
    if (width === undefined) {
        return 300
    }
};
dingvm.envFunc.HTMLImageElementProto_width_set = function () {
    dingvm.toolsFunc.setProtoArr('width')
};
dingvm.envFunc.HTMLImageElementProto_height_get = function () {
    let height = dingvm.toolsFunc.getProtoArr('height')
    if (height === undefined) {
        return 150
    }

    return height
};
dingvm.envFunc.HTMLImageElementProto_height_set = function () {
    dingvm.toolsFunc.setProtoArr('height')
};