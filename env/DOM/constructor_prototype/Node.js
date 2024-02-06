// Node对象
Node = function Node() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Node, "Node");
Object.setPrototypeOf(Node.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(Node, "ELEMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 1
});
dingvm.toolsFunc.defineProperty(Node, "ATTRIBUTE_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 2
});
dingvm.toolsFunc.defineProperty(Node, "TEXT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 3
});
dingvm.toolsFunc.defineProperty(Node, "CDATA_SECTION_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 4
});
dingvm.toolsFunc.defineProperty(Node, "ENTITY_REFERENCE_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 5
});
dingvm.toolsFunc.defineProperty(Node, "ENTITY_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 6
});
dingvm.toolsFunc.defineProperty(Node, "PROCESSING_INSTRUCTION_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 7
});
dingvm.toolsFunc.defineProperty(Node, "COMMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 8
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 9
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_TYPE_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 10
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_FRAGMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 11
});
dingvm.toolsFunc.defineProperty(Node, "NOTATION_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 12
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_DISCONNECTED", {
    configurable: false,
    enumerable: true,
    writable: false, value: 1
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_PRECEDING", {
    configurable: false,
    enumerable: true,
    writable: false, value: 2
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_FOLLOWING", {
    configurable: false,
    enumerable: true,
    writable: false, value: 4
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_CONTAINS", {
    configurable: false,
    enumerable: true,
    writable: false, value: 8
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_CONTAINED_BY", {
    configurable: false,
    enumerable: true,
    writable: false, value: 16
});
dingvm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
    configurable: false,
    enumerable: true,
    writable: false, value: 32
});
dingvm.toolsFunc.defineProperty(Node.prototype, "nodeType", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "nodeType_get", arguments, 9)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "nodeName", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "nodeName_get", arguments, '#document')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "baseURI", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "baseURI_get", arguments, 'https://www.baidu.com/')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "isConnected", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "isConnected_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "ownerDocument", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "ownerDocument_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "parentNode", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "parentNode_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "parentElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "parentElement_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "childNodes", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "childNodes_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "firstChild", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "firstChild_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "lastChild", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "lastChild_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "previousSibling", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "previousSibling_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "nextSibling", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "nextSibling_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Node.prototype, "nodeValue", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "nodeValue_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "nodeValue_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "textContent", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "textContent_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "textContent_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "ELEMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 1
});
dingvm.toolsFunc.defineProperty(Node.prototype, "ATTRIBUTE_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 2
});
dingvm.toolsFunc.defineProperty(Node.prototype, "TEXT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 3
});
dingvm.toolsFunc.defineProperty(Node.prototype, "CDATA_SECTION_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 4
});
dingvm.toolsFunc.defineProperty(Node.prototype, "ENTITY_REFERENCE_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 5
});
dingvm.toolsFunc.defineProperty(Node.prototype, "ENTITY_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 6
});
dingvm.toolsFunc.defineProperty(Node.prototype, "PROCESSING_INSTRUCTION_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 7
});
dingvm.toolsFunc.defineProperty(Node.prototype, "COMMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 8
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 9
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_TYPE_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 10
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_FRAGMENT_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 11
});
dingvm.toolsFunc.defineProperty(Node.prototype, "NOTATION_NODE", {
    configurable: false,
    enumerable: true,
    writable: false, value: 12
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_DISCONNECTED", {
    configurable: false,
    enumerable: true,
    writable: false, value: 1
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_PRECEDING", {
    configurable: false,
    enumerable: true,
    writable: false, value: 2
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_FOLLOWING", {
    configurable: false,
    enumerable: true,
    writable: false, value: 4
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINS", {
    configurable: false,
    enumerable: true,
    writable: false, value: 8
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINED_BY", {
    configurable: false,
    enumerable: true,
    writable: false, value: 16
});
dingvm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
    configurable: false,
    enumerable: true,
    writable: false, value: 32
});
dingvm.toolsFunc.defineProperty(Node.prototype, "appendChild", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "appendChild", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "cloneNode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "cloneNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "compareDocumentPosition", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "compareDocumentPosition", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "contains", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "contains", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "getRootNode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "getRootNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "hasChildNodes", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "hasChildNodes", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "insertBefore", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "insertBefore", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "isDefaultNamespace", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "isDefaultNamespace", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "isEqualNode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "isEqualNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "isSameNode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "isSameNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "lookupNamespaceURI", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "lookupNamespaceURI", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "lookupPrefix", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "lookupPrefix", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "normalize", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "normalize", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "removeChild", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "removeChild", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Node.prototype, "replaceChild", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Node.prototype, "NodeProto", "replaceChild", arguments)
    }
});
