// HTMLTableCellElement对象
HTMLTableCellElement = function HTMLTableCellElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLTableCellElement, "HTMLTableCellElement");
Object.setPrototypeOf(HTMLTableCellElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "colSpan", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "colSpan_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "colSpan_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "rowSpan", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "rowSpan_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "rowSpan_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "headers", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "headers_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "headers_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "cellIndex", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "cellIndex_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "align", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "align_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "align_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "axis", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "axis_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "axis_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "height", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "height_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "height_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "width", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "width_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "width_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "ch", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "ch_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "ch_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "chOff", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "chOff_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "chOff_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "noWrap", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "noWrap_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "noWrap_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "vAlign", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "vAlign_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "vAlign_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "bgColor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "bgColor_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "bgColor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "abbr", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "abbr_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "abbr_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableCellElement.prototype, "scope", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "scope_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableCellElement.prototype, "HTMLTableCellElementProto", "scope_set", arguments)
    }
});
