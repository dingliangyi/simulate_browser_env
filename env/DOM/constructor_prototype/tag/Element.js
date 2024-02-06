// Element对象
Element = function Element() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(Element, "Element");
Object.setPrototypeOf(Element.prototype, Node.prototype);
dingvm.toolsFunc.defineProperty(Element.prototype, "namespaceURI", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "namespaceURI_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "prefix", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "prefix_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "localName", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "localName_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "tagName", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "tagName_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "id", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "id_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "id_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "className", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "className_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "className_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "classList", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "classList_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "classList_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "slot", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "slot_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "slot_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "attributes", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "attributes_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "shadowRoot", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "shadowRoot_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "part", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "part_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "part_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "assignedSlot", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "assignedSlot_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "innerHTML", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "innerHTML_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "innerHTML_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "outerHTML", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "outerHTML_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "outerHTML_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollTop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollTop_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollTop_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollLeft", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollLeft_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollLeft_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollWidth_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollHeight_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "clientTop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "clientTop_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "clientLeft", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "clientLeft_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "clientWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "clientWidth_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "clientHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "clientHeight_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onbeforecopy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onbeforecopy_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onbeforecopy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onbeforecut", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onbeforecut_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onbeforecut_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onbeforepaste", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onbeforepaste_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onbeforepaste_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onsearch", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onsearch_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onsearch_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "elementTiming", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "elementTiming_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "elementTiming_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onfullscreenchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onfullscreenchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onfullscreenchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onfullscreenerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onfullscreenerror_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onfullscreenerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onwebkitfullscreenchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onwebkitfullscreenchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onwebkitfullscreenchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "onwebkitfullscreenerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onwebkitfullscreenerror_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "onwebkitfullscreenerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "role", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "role_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "role_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaAtomic", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaAtomic_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaAtomic_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaAutoComplete", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaAutoComplete_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaAutoComplete_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaBusy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaBusy_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaBusy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaBrailleLabel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaBrailleLabel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaBrailleLabel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaBrailleRoleDescription", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaBrailleRoleDescription_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaBrailleRoleDescription_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaChecked", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaChecked_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaChecked_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaColCount", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaColCount_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaColCount_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaColIndex", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaColIndex_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaColIndex_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaColSpan", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaColSpan_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaColSpan_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaCurrent", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaCurrent_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaCurrent_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaDescription", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaDescription_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaDescription_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaDisabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaDisabled_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaDisabled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaExpanded", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaExpanded_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaExpanded_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaHasPopup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaHasPopup_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaHasPopup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaHidden", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaHidden_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaHidden_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaInvalid", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaInvalid_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaInvalid_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaKeyShortcuts", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaKeyShortcuts_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaKeyShortcuts_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaLabel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaLabel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaLabel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaLevel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaLevel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaLevel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaLive", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaLive_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaLive_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaModal", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaModal_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaModal_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaMultiLine", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaMultiLine_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaMultiLine_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaMultiSelectable", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaMultiSelectable_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaMultiSelectable_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaOrientation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaOrientation_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaOrientation_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaPlaceholder", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaPlaceholder_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaPlaceholder_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaPosInSet", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaPosInSet_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaPosInSet_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaPressed", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaPressed_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaPressed_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaReadOnly", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaReadOnly_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaReadOnly_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaRelevant", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRelevant_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRelevant_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaRequired", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRequired_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRequired_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaRoleDescription", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRoleDescription_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRoleDescription_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaRowCount", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRowCount_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRowCount_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaRowIndex", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRowIndex_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRowIndex_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaRowSpan", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRowSpan_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaRowSpan_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaSelected", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaSelected_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaSelected_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaSetSize", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaSetSize_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaSetSize_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaSort", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaSort_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaSort_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaValueMax", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueMax_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueMax_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaValueMin", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueMin_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueMin_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaValueNow", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueNow_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueNow_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "ariaValueText", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueText_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "ariaValueText_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "children", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "children_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "firstElementChild", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "firstElementChild_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "lastElementChild", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "lastElementChild_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "childElementCount", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "childElementCount_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "previousElementSibling", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "previousElementSibling_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "nextElementSibling", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "nextElementSibling_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Element.prototype, "after", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "after", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "animate", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "animate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "append", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "append", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "attachShadow", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "attachShadow", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "before", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "before", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "closest", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "closest", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "computedStyleMap", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "computedStyleMap", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getAttribute", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getAttribute", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getAttributeNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getAttributeNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getAttributeNames", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getAttributeNames", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getAttributeNode", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getAttributeNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getAttributeNodeNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getAttributeNodeNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getBoundingClientRect", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getBoundingClientRect", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getClientRects", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getClientRects", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getElementsByClassName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getElementsByClassName", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getElementsByTagName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getElementsByTagName", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getElementsByTagNameNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getElementsByTagNameNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getInnerHTML", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getInnerHTML", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "hasAttribute", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "hasAttribute", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "hasAttributeNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "hasAttributeNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "hasAttributes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "hasAttributes", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "hasPointerCapture", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "hasPointerCapture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "insertAdjacentElement", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "insertAdjacentElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "insertAdjacentHTML", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "insertAdjacentHTML", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "insertAdjacentText", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "insertAdjacentText", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "matches", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "matches", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "prepend", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "prepend", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "querySelector", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "querySelector", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "querySelectorAll", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "querySelectorAll", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "releasePointerCapture", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "releasePointerCapture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "remove", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "remove", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "removeAttribute", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "removeAttribute", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "removeAttributeNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "removeAttributeNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "removeAttributeNode", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "removeAttributeNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "replaceChildren", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "replaceChildren", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "replaceWith", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "replaceWith", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "requestFullscreen", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "requestFullscreen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "requestPointerLock", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "requestPointerLock", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scroll", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scroll", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollBy", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollBy", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollIntoView", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollIntoView", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollIntoViewIfNeeded", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollIntoViewIfNeeded", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "scrollTo", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "scrollTo", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "setAttribute", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "setAttribute", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "setAttributeNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "setAttributeNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "setAttributeNode", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "setAttributeNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "setAttributeNodeNS", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "setAttributeNodeNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "setPointerCapture", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "setPointerCapture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "toggleAttribute", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "toggleAttribute", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "webkitMatchesSelector", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "webkitMatchesSelector", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "webkitRequestFullScreen", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "webkitRequestFullScreen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "webkitRequestFullscreen", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "webkitRequestFullscreen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "checkVisibility", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "checkVisibility", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "getAnimations", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "getAnimations", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Element.prototype, "setHTML", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Element.prototype, "ElementProto", "setHTML", arguments)
    }
});
