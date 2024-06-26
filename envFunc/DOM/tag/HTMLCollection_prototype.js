dingvm.envFunc.HTMLCollectionProto_length_get = function () {
    return dingvm.toolsFunc.getProtoArr.call(this, 'length')
};
dingvm.envFunc.HTMLCollectionProto_item = function (idx) {
    return this[idx]
};
dingvm.envFunc.HTMLCollectionProto_namedItem = function (key) {
    for (let tag of this) {
        let name = tag.jquery.attr('name');
        if (name === key || tag.id === key) {
            return tag
        }
    }
    return null
};
