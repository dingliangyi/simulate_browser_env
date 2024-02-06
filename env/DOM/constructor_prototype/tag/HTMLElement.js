// HTMLElement对象
HTMLElement = function HTMLElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLElement, "HTMLElement");
Object.setPrototypeOf(HTMLElement.prototype, Element.prototype);
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "title", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "title_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "title_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "lang", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "lang_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "lang_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "translate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "translate_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "translate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "dir", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "dir_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "dir_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "hidden", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "hidden_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "hidden_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "accessKey", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "accessKey_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "accessKey_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "draggable", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "draggable_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "draggable_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "spellcheck", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "spellcheck_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "spellcheck_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "autocapitalize", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "autocapitalize_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "autocapitalize_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "contentEditable", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "contentEditable_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "contentEditable_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "enterKeyHint", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "enterKeyHint_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "enterKeyHint_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "isContentEditable", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "isContentEditable_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "inputMode", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "inputMode_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "inputMode_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "virtualKeyboardPolicy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "virtualKeyboardPolicy_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "virtualKeyboardPolicy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetParent", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "offsetParent_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetTop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "offsetTop_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetLeft", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "offsetLeft_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "offsetWidth_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "offsetHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "offsetHeight_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "innerText", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "innerText_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "innerText_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "outerText", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "outerText_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "outerText_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforexrselect", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onbeforexrselect_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onbeforexrselect_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onabort", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onabort_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onabort_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforeinput", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onbeforeinput_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onbeforeinput_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onblur", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onblur_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onblur_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncancel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncancel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncancel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncanplay", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncanplay_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncanplay_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncanplaythrough", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncanplaythrough_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncanplaythrough_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onclick", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onclick_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onclick_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onclose", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onclose_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onclose_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncontextlost", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontextlost_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontextlost_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncontextmenu", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontextmenu_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontextmenu_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncontextrestored", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontextrestored_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontextrestored_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncuechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncuechange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncuechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondblclick", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondblclick_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondblclick_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondrag", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondrag_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondrag_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragend_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragenter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragenter_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragenter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragleave", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragleave_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragleave_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragover", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragover_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragover_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondragstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragstart_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondragstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondrop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondrop_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondrop_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ondurationchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondurationchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ondurationchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onemptied", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onemptied_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onemptied_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onended", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onended_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onended_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onerror_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onfocus", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onfocus_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onfocus_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onformdata", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onformdata_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onformdata_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oninput", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oninput_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oninput_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oninvalid", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oninvalid_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oninvalid_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onkeydown", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onkeydown_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onkeydown_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onkeypress", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onkeypress_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onkeypress_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onkeyup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onkeyup_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onkeyup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onload", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onload_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onload_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onloadeddata", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onloadeddata_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onloadeddata_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onloadedmetadata", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onloadedmetadata_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onloadedmetadata_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onloadstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onloadstart_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onloadstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmousedown", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmousedown_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmousedown_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseenter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseenter_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseenter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseleave", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseleave_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseleave_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmousemove", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmousemove_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmousemove_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseout", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseout_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseout_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseover", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseover_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseover_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmouseup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseup_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmouseup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onmousewheel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmousewheel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onmousewheel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpause", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpause_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpause_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onplay", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onplay_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onplay_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onplaying", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onplaying_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onplaying_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onprogress", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onprogress_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onprogress_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onratechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onratechange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onratechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onreset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onreset_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onreset_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onresize", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onresize_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onresize_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onscroll", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onscroll_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onscroll_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onsecuritypolicyviolation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onsecuritypolicyviolation_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onsecuritypolicyviolation_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onseeked", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onseeked_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onseeked_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onseeking", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onseeking_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onseeking_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onselect", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onselect_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onselect_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onslotchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onslotchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onslotchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onstalled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onstalled_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onstalled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onsubmit", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onsubmit_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onsubmit_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onsuspend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onsuspend_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onsuspend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ontimeupdate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontimeupdate_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontimeupdate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ontoggle", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontoggle_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontoggle_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onvolumechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onvolumechange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onvolumechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onwaiting", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwaiting_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwaiting_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkitanimationend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkitanimationend_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkitanimationend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkitanimationiteration", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkitanimationiteration_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkitanimationiteration_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkitanimationstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkitanimationstart_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkitanimationstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onwebkittransitionend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkittransitionend_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwebkittransitionend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onwheel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwheel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onwheel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onauxclick", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onauxclick_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onauxclick_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ongotpointercapture", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ongotpointercapture_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ongotpointercapture_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onlostpointercapture", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onlostpointercapture_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onlostpointercapture_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerdown", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerdown_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerdown_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointermove", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointermove_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointermove_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerrawupdate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerrawupdate_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerrawupdate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerup_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointercancel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointercancel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointercancel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerover", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerover_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerover_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerout", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerout_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerout_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerenter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerenter_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerenter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpointerleave", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerleave_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpointerleave_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onselectstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onselectstart_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onselectstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onselectionchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onselectionchange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onselectionchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onanimationend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onanimationend_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onanimationend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onanimationiteration", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onanimationiteration_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onanimationiteration_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onanimationstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onanimationstart_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onanimationstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitionrun", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitionrun_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitionrun_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitionstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitionstart_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitionstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitionend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitionend_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitionend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "ontransitioncancel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitioncancel_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "ontransitioncancel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncopy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncopy_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncopy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncut", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncut_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncut_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onpaste", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpaste_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onpaste_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "dataset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "dataset_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "nonce", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "nonce_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "nonce_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "autofocus", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "autofocus_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "autofocus_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "tabIndex", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "tabIndex_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "tabIndex_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "style", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "style_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "style_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "attributeStyleMap", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "attributeStyleMap_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "attachInternals", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "attachInternals", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "blur", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "blur", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "click", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "click", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "focus", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "focus", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "inert", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "inert_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "inert_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "oncontentvisibilityautostatechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontentvisibilityautostatechange_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "oncontentvisibilityautostatechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLElement.prototype, "onbeforematch", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onbeforematch_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLElement.prototype, "HTMLElementProto", "onbeforematch_set", arguments)
    }
});
