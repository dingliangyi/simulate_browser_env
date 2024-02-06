dingvm.envFunc.location_valueOf = function () {
    console.log('location_valueOf')
};
dingvm.envFunc.location_ancestorOrigins_get = function () {
    return dingvm.memory.globalVar._location.ancestorOrigins
};
dingvm.envFunc.location_href_get = function () {
    return dingvm.memory.globalVar._location.href;
};
dingvm.envFunc.location_href_set = function (value) {
    console.log('这个一般不会调用 危险')
    return dingvm.toolsFunc.setProtoArr.call(this, 'href', value);
};
dingvm.envFunc.location_origin_get = function () {
    return dingvm.memory.globalVar._location.origin;
};
dingvm.envFunc.location_protocol_get = function () {
    return dingvm.memory.globalVar._location.protocol
};
dingvm.envFunc.location_protocol_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, "protocol", value)
};
dingvm.envFunc.location_host_get = function () {
    return dingvm.memory.globalVar._location.host;
};
dingvm.envFunc.location_host_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, "host", value)
};
dingvm.envFunc.location_hostname_get = function () {
    return dingvm.memory.globalVar._location.hostname
};
dingvm.envFunc.location_hostname_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, "hostname", value)
};
dingvm.envFunc.location_port_get = function () {
    return dingvm.memory.globalVar._location.port
};
dingvm.envFunc.location_port_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, "port", value)
};
dingvm.envFunc.location_pathname_get = function () {
    return dingvm.memory.globalVar._location.pathname
};
dingvm.envFunc.location_pathname_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'pathname', value)
};
dingvm.envFunc.location_search_get = function () {
    return dingvm.memory.globalVar._location.search
};
dingvm.envFunc.location_search_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'search', value)
};
dingvm.envFunc.location_hash_get = function () {
    return dingvm.memory.globalVar._location.hash
};
dingvm.envFunc.location_hash_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'hash', value)
};
dingvm.envFunc.location_assign = function () {
    console.log('location_assign')
};
dingvm.envFunc.location_reload = function () {
    console.log('location_reload')
};
dingvm.envFunc.location_replace = function (url) {
    console.log('location_replace 更新url和location信息: ', url)
    dingvm.toolsFunc.resetLocation(url)
};
dingvm.envFunc.location_toString = function () {
    return dingvm.memory.globalVar._location.href;
};
