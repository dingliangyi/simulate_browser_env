// DOMException对象
DOMException = function DOMException() {
    const message = arguments[0] || ""
    const name = arguments[1] || "Error"
    const to_String = `${name}: ${message}`

    this.code = 0
    this.name = name
    this.message = message
    this.to_String = to_String

    Error.captureStackTrace(this, DOMException)
};
dingvm.toolsFunc.safe_constructor_prototype(DOMException, "DOMException");
DOMException.prototype.toString = function () {
    return this.to_String
}
dingvm.toolsFunc.defineProperty(DOMException, "INDEX_SIZE_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(DOMException, "DOMSTRING_SIZE_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(DOMException, "HIERARCHY_REQUEST_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3
});
dingvm.toolsFunc.defineProperty(DOMException, "WRONG_DOCUMENT_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 4
});
dingvm.toolsFunc.defineProperty(DOMException, "INVALID_CHARACTER_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5
});
dingvm.toolsFunc.defineProperty(DOMException, "NO_DATA_ALLOWED_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6
});
dingvm.toolsFunc.defineProperty(DOMException, "NO_MODIFICATION_ALLOWED_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7
});
dingvm.toolsFunc.defineProperty(DOMException, "NOT_FOUND_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 8
});
dingvm.toolsFunc.defineProperty(DOMException, "NOT_SUPPORTED_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 9
});
dingvm.toolsFunc.defineProperty(DOMException, "INUSE_ATTRIBUTE_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 10
});
dingvm.toolsFunc.defineProperty(DOMException, "INVALID_STATE_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 11
});
dingvm.toolsFunc.defineProperty(DOMException, "SYNTAX_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 12
});
dingvm.toolsFunc.defineProperty(DOMException, "INVALID_MODIFICATION_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 13
});
dingvm.toolsFunc.defineProperty(DOMException, "NAMESPACE_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 14
});
dingvm.toolsFunc.defineProperty(DOMException, "INVALID_ACCESS_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 15
});
dingvm.toolsFunc.defineProperty(DOMException, "VALIDATION_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 16
});
dingvm.toolsFunc.defineProperty(DOMException, "TYPE_MISMATCH_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 17
});
dingvm.toolsFunc.defineProperty(DOMException, "SECURITY_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 18
});
dingvm.toolsFunc.defineProperty(DOMException, "NETWORK_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 19
});
dingvm.toolsFunc.defineProperty(DOMException, "ABORT_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 20
});
dingvm.toolsFunc.defineProperty(DOMException, "URL_MISMATCH_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 21
});
dingvm.toolsFunc.defineProperty(DOMException, "QUOTA_EXCEEDED_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 22
});
dingvm.toolsFunc.defineProperty(DOMException, "TIMEOUT_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 23
});
dingvm.toolsFunc.defineProperty(DOMException, "INVALID_NODE_TYPE_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 24
});
dingvm.toolsFunc.defineProperty(DOMException, "DATA_CLONE_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 25
});
// dingvm.toolsFunc.defineProperty(DOMException.prototype, "code", {
//     configurable: true,
//     enumerable: true,
//     get: function () {
//         return dingvm.toolsFunc.dispatch(this, DOMException.prototype, "DOMExceptionProto", "code_get", arguments, 0)
//     },
//     set: undefined
// });
// dingvm.toolsFunc.defineProperty(DOMException.prototype, "name", {
//     configurable: true,
//     enumerable: true,
//     get: function () {
//         return dingvm.toolsFunc.dispatch(this, DOMException.prototype, "DOMExceptionProto", "name_get", arguments, 'Error')
//     },
//     set: undefined
// });
// dingvm.toolsFunc.defineProperty(DOMException.prototype, "message", {
//     configurable: true,
//     enumerable: true,
//     get: function () {
//         return dingvm.toolsFunc.dispatch(this, DOMException.prototype, "DOMExceptionProto", "message_get", arguments, '')
//     },
//     set: undefined
// });
dingvm.toolsFunc.defineProperty(DOMException.prototype, "INDEX_SIZE_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "DOMSTRING_SIZE_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "HIERARCHY_REQUEST_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "WRONG_DOCUMENT_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 4
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "INVALID_CHARACTER_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "NO_DATA_ALLOWED_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "NO_MODIFICATION_ALLOWED_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "NOT_FOUND_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 8
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "NOT_SUPPORTED_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 9
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "INUSE_ATTRIBUTE_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 10
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "INVALID_STATE_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 11
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "SYNTAX_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 12
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "INVALID_MODIFICATION_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 13
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "NAMESPACE_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 14
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "INVALID_ACCESS_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 15
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "VALIDATION_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 16
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "TYPE_MISMATCH_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 17
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "SECURITY_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 18
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "NETWORK_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 19
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "ABORT_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 20
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "URL_MISMATCH_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 21
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "QUOTA_EXCEEDED_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 22
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "TIMEOUT_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 23
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "INVALID_NODE_TYPE_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 24
});
dingvm.toolsFunc.defineProperty(DOMException.prototype, "DATA_CLONE_ERR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 25
});