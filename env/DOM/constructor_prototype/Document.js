// Document对象
Document = function Document() {
};
dingvm.toolsFunc.safe_constructor_prototype(Document, "Document");
Object.setPrototypeOf(Document.prototype, Node.prototype);
dingvm.toolsFunc.defineProperty(Document.prototype, "implementation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "implementation_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "URL",{
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "URL_get", arguments, 'https://www.baidu.com/')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "documentURI", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "documentURI_get", arguments, 'https://www.baidu.com/')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "compatMode", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "compatMode_get", arguments, 'CSS1Compat')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "characterSet", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "characterSet_get", arguments, 'UTF-8')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "charset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "charset_get", arguments, 'UTF-8')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "inputEncoding", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "inputEncoding_get", arguments, 'UTF-8')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "contentType", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "contentType_get", arguments, 'text/html')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "doctype", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "doctype_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "documentElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "documentElement_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "xmlEncoding", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "xmlEncoding_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "xmlVersion", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "xmlVersion_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "xmlVersion_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "xmlStandalone", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "xmlStandalone_get", arguments, false)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "xmlStandalone_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "domain", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "domain_get", arguments, 'www.baidu.com')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "domain_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "referrer", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "referrer_get", arguments, '')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "cookie", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "cookie_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "cookie_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "lastModified", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "lastModified_get", arguments, '04/18/2023 13:11:36')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "readyState", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "readyState_get", arguments, 'complete')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "title", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "title_get", arguments, '百度一下，你就知道')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "title_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "dir", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "dir_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "dir_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "body", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "body_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "body_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "head", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "head_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "images", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "images_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "embeds", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "embeds_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "plugins", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "plugins_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "links", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "links_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "forms", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "forms_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "scripts", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "scripts_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "currentScript", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "currentScript_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "defaultView", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "defaultView_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "designMode", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "designMode_get", arguments, 'off')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "designMode_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onreadystatechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onreadystatechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onreadystatechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "anchors", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "anchors_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "applets", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "applets_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "fgColor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fgColor_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fgColor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "linkColor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "linkColor_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "linkColor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "vlinkColor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "vlinkColor_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "vlinkColor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "alinkColor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "alinkColor_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "alinkColor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "bgColor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "bgColor_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "bgColor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "all", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "all_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "scrollingElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "scrollingElement_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerlockchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerlockchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerlockchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerlockerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerlockerror_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerlockerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "hidden", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "hidden_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "visibilityState", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "visibilityState_get", arguments, 'hidden')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "wasDiscarded", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "wasDiscarded_get", arguments, false)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "featurePolicy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "featurePolicy_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitVisibilityState", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitVisibilityState_get", arguments, 'hidden')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitHidden", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitHidden_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onbeforecopy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforecopy_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforecopy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onbeforecut", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforecut_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforecut_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onbeforepaste", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforepaste_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforepaste_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onfreeze", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfreeze_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfreeze_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onresume", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onresume_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onresume_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onsearch", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsearch_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsearch_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onvisibilitychange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onvisibilitychange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onvisibilitychange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "fullscreenEnabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fullscreenEnabled_get", arguments, true)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fullscreenEnabled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "fullscreen", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fullscreen_get", arguments, false)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fullscreen_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onfullscreenchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfullscreenchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfullscreenchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onfullscreenerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfullscreenerror_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfullscreenerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitIsFullScreen", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitIsFullScreen_get", arguments, false)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitCurrentFullScreenElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitCurrentFullScreenElement_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitFullscreenEnabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitFullscreenEnabled_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitFullscreenElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitFullscreenElement_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwebkitfullscreenchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitfullscreenchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitfullscreenchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwebkitfullscreenerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitfullscreenerror_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitfullscreenerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "rootElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "rootElement_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "pictureInPictureEnabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "pictureInPictureEnabled_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "pictureInPictureElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "pictureInPictureElement_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onbeforexrselect", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforexrselect_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforexrselect_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onabort", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onabort_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onabort_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onbeforeinput", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforeinput_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforeinput_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onblur", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onblur_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onblur_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncancel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncancel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncancel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncanplay", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncanplay_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncanplay_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncanplaythrough", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncanplaythrough_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncanplaythrough_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onclick", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onclick_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onclick_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onclose", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onclose_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onclose_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncontextlost", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontextlost_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontextlost_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncontextmenu", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontextmenu_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontextmenu_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncontextrestored", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontextrestored_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontextrestored_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncuechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncuechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncuechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondblclick", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondblclick_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondblclick_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondrag", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondrag_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondrag_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondragend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondragenter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragenter_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragenter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondragleave", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragleave_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragleave_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondragover", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragover_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragover_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondragstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondragstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondrop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondrop_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondrop_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ondurationchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondurationchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ondurationchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onemptied", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onemptied_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onemptied_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onended", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onended_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onended_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onerror_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onfocus", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfocus_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onfocus_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onformdata", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onformdata_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onformdata_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oninput", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oninput_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oninput_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oninvalid", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oninvalid_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oninvalid_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onkeydown", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onkeydown_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onkeydown_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onkeypress", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onkeypress_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onkeypress_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onkeyup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onkeyup_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onkeyup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onload", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onload_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onload_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onloadeddata", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onloadeddata_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onloadeddata_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onloadedmetadata", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onloadedmetadata_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onloadedmetadata_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onloadstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onloadstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onloadstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmousedown", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmousedown_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmousedown_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmouseenter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseenter_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseenter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmouseleave", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseleave_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseleave_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmousemove", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmousemove_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmousemove_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmouseout", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseout_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseout_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmouseover", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseover_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseover_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmouseup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseup_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmouseup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onmousewheel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmousewheel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onmousewheel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpause", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpause_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpause_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onplay", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onplay_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onplay_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onplaying", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onplaying_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onplaying_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onprogress", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onprogress_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onprogress_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onratechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onratechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onratechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onreset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onreset_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onreset_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onresize", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onresize_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onresize_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onscroll", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onscroll_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onscroll_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onsecuritypolicyviolation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsecuritypolicyviolation_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsecuritypolicyviolation_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onseeked", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onseeked_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onseeked_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onseeking", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onseeking_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onseeking_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onselect", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onselect_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onselect_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onslotchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onslotchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onslotchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onstalled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onstalled_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onstalled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onsubmit", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsubmit_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsubmit_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onsuspend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsuspend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onsuspend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ontimeupdate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontimeupdate_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontimeupdate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ontoggle", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontoggle_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontoggle_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onvolumechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onvolumechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onvolumechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwaiting", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwaiting_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwaiting_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwebkitanimationend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitanimationend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitanimationend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwebkitanimationiteration", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitanimationiteration_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitanimationiteration_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwebkitanimationstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitanimationstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkitanimationstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwebkittransitionend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkittransitionend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwebkittransitionend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onwheel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwheel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onwheel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onauxclick", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onauxclick_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onauxclick_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ongotpointercapture", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ongotpointercapture_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ongotpointercapture_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onlostpointercapture", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onlostpointercapture_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onlostpointercapture_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerdown", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerdown_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerdown_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointermove", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointermove_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointermove_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerrawupdate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerrawupdate_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerrawupdate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerup_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointercancel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointercancel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointercancel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerover", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerover_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerover_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerout", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerout_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerout_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerenter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerenter_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerenter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpointerleave", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerleave_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpointerleave_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onselectstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onselectstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onselectstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onselectionchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onselectionchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onselectionchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onanimationend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onanimationend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onanimationend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onanimationiteration", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onanimationiteration_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onanimationiteration_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onanimationstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onanimationstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onanimationstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ontransitionrun", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitionrun_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitionrun_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ontransitionstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitionstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitionstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ontransitionend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitionend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitionend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "ontransitioncancel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitioncancel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "ontransitioncancel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncopy", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncopy_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncopy_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncut", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncut_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncut_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onpaste", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpaste_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onpaste_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "children", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "children_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "firstElementChild", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "firstElementChild_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "lastElementChild", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "lastElementChild_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "childElementCount", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "childElementCount_get", arguments, 1)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "activeElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "activeElement_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "styleSheets", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "styleSheets_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "pointerLockElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "pointerLockElement_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "fullscreenElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fullscreenElement_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fullscreenElement_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "adoptedStyleSheets", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "adoptedStyleSheets_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "adoptedStyleSheets_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "fonts", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fonts_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "adoptNode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "adoptNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "append", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "append", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "captureEvents", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "captureEvents", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "caretRangeFromPoint", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "caretRangeFromPoint", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "clear", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "clear", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "close", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "close", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createAttribute", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createAttribute", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createAttributeNS", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createAttributeNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createCDATASection", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createCDATASection", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createComment", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createComment", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createDocumentFragment", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createDocumentFragment", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createElement", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createElementNS", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createElementNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createEvent", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createExpression", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createExpression", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createNSResolver", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createNSResolver", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createNodeIterator", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createNodeIterator", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createProcessingInstruction", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createProcessingInstruction", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createRange", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createRange", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createTextNode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createTextNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "createTreeWalker", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "createTreeWalker", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "elementFromPoint", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "elementFromPoint", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "elementsFromPoint", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "elementsFromPoint", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "evaluate", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "evaluate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "execCommand", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "execCommand", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "exitFullscreen", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "exitFullscreen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "exitPictureInPicture", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "exitPictureInPicture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "exitPointerLock", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "exitPointerLock", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "getElementById", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "getElementById", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "getElementsByClassName", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "getElementsByClassName", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "getElementsByName", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "getElementsByName", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "getElementsByTagName", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "getElementsByTagName", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "getElementsByTagNameNS", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "getElementsByTagNameNS", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "getSelection", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "getSelection", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "hasFocus", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "hasFocus", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "importNode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "importNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "open", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "open", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "prepend", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "prepend", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "queryCommandEnabled", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "queryCommandEnabled", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "queryCommandIndeterm", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "queryCommandIndeterm", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "queryCommandState", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "queryCommandState", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "queryCommandSupported", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "queryCommandSupported", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "queryCommandValue", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "queryCommandValue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "querySelector", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "querySelector", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "querySelectorAll", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "querySelectorAll", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "releaseEvents", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "releaseEvents", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "replaceChildren", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "replaceChildren", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitCancelFullScreen", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitCancelFullScreen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "webkitExitFullscreen", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "webkitExitFullscreen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "write", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "write", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "writeln", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "writeln", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "prerendering", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "prerendering_get", arguments, false)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onprerenderingchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onprerenderingchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onprerenderingchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "fragmentDirective", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "fragmentDirective_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "onbeforematch", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforematch_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "onbeforematch_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "timeline", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "timeline_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Document.prototype, "oncontentvisibilityautostatechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontentvisibilityautostatechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "oncontentvisibilityautostatechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "getAnimations", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "getAnimations", arguments)
    }
});
dingvm.toolsFunc.defineProperty(Document.prototype, "startViewTransition", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, Document.prototype, "DocumentProto", "startViewTransition", arguments)
    }
});
