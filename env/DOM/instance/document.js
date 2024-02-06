// document对象
document = {};
Object.setPrototypeOf(document, HTMLDocument.prototype);
dingvm.toolsFunc.defineProperty(document, "location", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, document, "document", "location_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, document, "document", "location_set", arguments)
    }
});