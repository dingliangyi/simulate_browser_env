dingvm.envFunc.HTMLAnchorElementProto_href_get = function HTMLAnchorElementProto_href_get() {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'href')
    // return dingvm.toolsFunc.getProtoArr.call(this, "href");
};
dingvm.envFunc.HTMLAnchorElementProto_href_set = function HTMLAnchorElementProto_href_set(url) {
    debugger
    if (url.indexOf('://') === -1) {
        url = location.protocol + '//' + location.hostname + url
    }
    let jsonUrl = dingvm.toolsFunc.parseUrl(url);
    dingvm.toolsFunc.setProtoArr.call(this, "origin", jsonUrl["origin"]);
    dingvm.toolsFunc.setProtoArr.call(this, "protocol", jsonUrl["protocol"]);
    dingvm.toolsFunc.setProtoArr.call(this, "host", jsonUrl["host"]);
    dingvm.toolsFunc.setProtoArr.call(this, "hostname", jsonUrl["hostname"]);
    dingvm.toolsFunc.setProtoArr.call(this, "port", jsonUrl["port"]);
    dingvm.toolsFunc.setProtoArr.call(this, "pathname", jsonUrl["pathname"]);
    dingvm.toolsFunc.setProtoArr.call(this, "search", jsonUrl["search"]);
    dingvm.toolsFunc.setProtoArr.call(this, "hash", jsonUrl["hash"]);
    dingvm.toolsFunc.setProtoArr.call(this, "href", jsonUrl["href"]);
};
dingvm.envFunc.HTMLAnchorElementProto_protocol_get = function HTMLAnchorElementProto_protocol_get() {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'protocol')
};
dingvm.envFunc.HTMLAnchorElementProto_protocol_set = function HTMLAnchorElementProto_protocol_set(value) {
    return dingvm.toolsFunc.setProtoArr.call(this, "protocol", value);
};
dingvm.envFunc.HTMLAnchorElementProto_hostname_get = function HTMLAnchorElementProto_hostname_get() {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'hostname')
};
dingvm.envFunc.HTMLAnchorElementProto_hostname_set = function HTMLAnchorElementProto_hostname_set(value) {
    return dingvm.toolsFunc.setProtoArr.call(this, "hostname", value);
};
dingvm.envFunc.HTMLAnchorElementProto_search_get = function HTMLAnchorElementProto_search_get() {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'search')
};
dingvm.envFunc.HTMLAnchorElementProto_search_set = function HTMLAnchorElementProto_search_set(value) {
    return dingvm.toolsFunc.setProtoArr.call(this, "search", value);
};
dingvm.envFunc.HTMLAnchorElementProto_origin_get = function HTMLAnchorElementProto_origin_get() {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'origin')
};
dingvm.envFunc.HTMLAnchorElementProto_origin_set = function HTMLAnchorElementProto_origin_set(value) {
    return dingvm.toolsFunc.setProtoArr.call(this, "origin", value);
};
dingvm.envFunc.HTMLAnchorElementProto_hash_get = function HTMLAnchorElementProto_hash_get() {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'hash')
};
dingvm.envFunc.HTMLAnchorElementProto_hash_set = function HTMLAnchorElementProto_hash_set(value) {
    return dingvm.toolsFunc.setProtoArr.call(this, "hash", value);
};
dingvm.envFunc.HTMLAnchorElementProto_port_get = function () {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'port')
};
dingvm.envFunc.HTMLAnchorElementProto_pathname_get = function () {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'pathname')
};
dingvm.envFunc.HTMLAnchorElementProto_host_get = function () {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'host')
};