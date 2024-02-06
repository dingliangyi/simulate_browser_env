// HTMLTableElement对象
HTMLTableElement = function HTMLTableElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLTableElement, "HTMLTableElement");
Object.setPrototypeOf(HTMLTableElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "caption", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "caption_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "caption_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "tHead", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "tHead_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "tHead_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "tFoot", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "tFoot_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "tFoot_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "tBodies", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "tBodies_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "rows", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "rows_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "align", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "align_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "align_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "border", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "border_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "border_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "frame", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "frame_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "frame_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "rules", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "rules_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "rules_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "summary", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "summary_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "summary_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "width", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "width_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "width_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "bgColor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "bgColor_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "bgColor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "cellPadding", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "cellPadding_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "cellPadding_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "cellSpacing", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "cellSpacing_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "cellSpacing_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "createCaption", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "createCaption", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "createTBody", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "createTBody", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "createTFoot", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "createTFoot", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "createTHead", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "createTHead", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "deleteCaption", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "deleteCaption", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "deleteRow", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "deleteRow", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "deleteTFoot", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "deleteTFoot", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "deleteTHead", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "deleteTHead", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableElement.prototype, "insertRow", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableElement.prototype, "HTMLTableElementProto", "insertRow", arguments)
    }
});
