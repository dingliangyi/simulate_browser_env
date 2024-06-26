// Attr对象
Attr = function Attr() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Attr, "Attr");
Object.setPrototypeOf(Attr.prototype, Node.prototype);
dingvm.toolsFunc.defineProperty(Attr.prototype, "namespaceURI", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Attr.prototype, "AttrProto", "namespaceURI_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Attr.prototype, "prefix", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Attr.prototype, "AttrProto", "prefix_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Attr.prototype, "localName", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Attr.prototype, "AttrProto", "localName_get", arguments, 'id')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Attr.prototype, "name", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Attr.prototype, "AttrProto", "name_get", arguments, 'id')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Attr.prototype, "value", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Attr.prototype, "AttrProto", "value_get", arguments, 'wrapper')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Attr.prototype, "AttrProto", "value_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Attr.prototype, "ownerElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Attr.prototype, "AttrProto", "ownerElement_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Attr.prototype, "specified", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Attr.prototype, "AttrProto", "specified_get", arguments, true)
    },
    set: undefined
});
