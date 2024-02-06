// HTMLTableRowElement对象
HTMLTableRowElement = function HTMLTableRowElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLTableRowElement, "HTMLTableRowElement");
Object.setPrototypeOf(HTMLTableRowElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "rowIndex", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElementProto", "rowIndex_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "sectionRowIndex", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElementProto", "sectionRowIndex_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "cells", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElementProto", "cells_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "align", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElementProto", "align_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElementProto", "align_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "ch", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElementProto", "ch_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElementProto", "ch_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "chOff", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElementProto", "chOff_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElementProto", "chOff_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "vAlign", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElementProto", "vAlign_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElementProto", "vAlign_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "bgColor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElementProto", "bgColor_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElementProto", "bgColor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "deleteCell", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElementProto", "deleteCell", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLTableRowElement.prototype, "insertCell", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLTableRowElement.prototype, "HTMLTableRowElementProto", "insertCell", arguments)
    }
});
