dingvm.envFunc.HTMLDivElementProto_align_get = function () {
    let if_ = dingvm.toolsFunc.get_protoOwnAttr.call(this, 'align')
    if (if_) {
        return if_
    } else {
        return ""
    }
};
dingvm.envFunc.HTMLDivElementProto_align_set = function () {
    let value = arguments[0];
    return dingvm.toolsFunc.setProtoArr.call(this, "align", value);
};