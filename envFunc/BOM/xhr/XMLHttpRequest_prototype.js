dingvm.envFunc.XMLHttpRequestProto_open = function XMLHttpRequest_open(type, url, async, username, password) {
    dingvm.toolsFunc.setProtoArr.call(this, type, 'type')
    dingvm.toolsFunc.setProtoArr.call(this, url, 'url')
    console.log('XMLHttpRequestProto_open url: ' + url)
    return JSON.stringify(url)
};
dingvm.envFunc.XMLHttpRequestProto_send = function (body) {
    let type = dingvm.toolsFunc.getProtoArr.call(this, 'type')
    let url = dingvm.toolsFunc.getProtoArr.call(this, 'url')
    console.log('XMLHttpRequestProto_send url: ' + url)

    if (type === 'GET') {
        request.get(url, {}, function (err, httpResponse, body) {
            if (err) {
                this.status = 0
            } else if (body) {
                this.status = httpResponse.statusCode
                if (this.responseType === 'json') {
                    this.response = JSON.parse(body)
                } else {
                    this.responseText = body
                    this.response = body
                }
            }
        })
    } else if (type === 'POST') {
        request.post(url, {
            body: body,
            json: true,
        }, function (err, httpResponse, body) {
            if (err) {
                this.status = 0
            } else if (body) {
                this.responseText = body
                this.response = body
                this.status = httpResponse.statusCode
            }
        })
    }
};
dingvm.envFunc.XMLHttpRequestProto_onreadystatechange_get = function () {
    return dingvm.toolsFunc.getProtoArr.call(this, 'onreadystatechange')
};
dingvm.envFunc.XMLHttpRequestProto_onreadystatechange_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'onreadystatechange', value)
};
dingvm.envFunc.XMLHttpRequestProto_responseText_get = function () {
    return dingvm.toolsFunc.getProtoArr.call(this, 'responseText')
};
dingvm.envFunc.XMLHttpRequestProto_responseText_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'responseText', value)
};
dingvm.envFunc.XMLHttpRequestProto_response_get = function () {
    return dingvm.toolsFunc.getProtoArr.call(this, 'response')
};
dingvm.envFunc.XMLHttpRequestProto_response_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'response', value)
};
dingvm.envFunc.XMLHttpRequestProto_responseType_get = function () {
    return dingvm.toolsFunc.getProtoArr.call(this, 'responseType')
};
dingvm.envFunc.XMLHttpRequestProto_responseType_set = function (value) {
    return dingvm.toolsFunc.setProtoArr.call(this, 'responseType', value)
};
dingvm.envFunc.XMLHttpRequestProto_status_get = function () {
    return dingvm.toolsFunc.getProtoArr.call(this, 'status')
};
dingvm.envFunc.XMLHttpRequestProto_status_set = function (value) {
    dingvm.toolsFunc.setProtoArr.call(this, 'status', value)
};
dingvm.envFunc.XMLHttpRequestProto_timeout_get = function () {
    dingvm.toolsFunc.getProtoArr.call(this, 'timeout')
};
dingvm.envFunc.XMLHttpRequestProto_timeout_set = function (value) {
    dingvm.toolsFunc.setProtoArr.call(this, 'timeout', value)
};
dingvm.envFunc.XMLHttpRequestProto_abort = function () {
    this.status = 0
};
dingvm.envFunc.XMLHttpRequestProto_upload_get = function () {
    return {}
};
