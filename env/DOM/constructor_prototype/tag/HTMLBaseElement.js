// HTMLBaseElement对象
HTMLBaseElement = function HTMLBaseElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLBaseElement, "HTMLBaseElement");
Object.setPrototypeOf(HTMLBaseElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLBaseElement.prototype, "href", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBaseElement.prototype, "HTMLBaseElementProto", "href_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBaseElement.prototype, "HTMLBaseElementProto", "href_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLBaseElement.prototype, "target", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBaseElement.prototype, "HTMLBaseElementProto", "target_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLBaseElement.prototype, "HTMLBaseElementProto", "target_set", arguments)
    }
});
