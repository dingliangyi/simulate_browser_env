// window对象
// 删除浏览器中不存在的对象
delete global;
delete GLOBAL;
delete Buffer;
delete buffer;
delete VMError;
delete process;
delete Thread;
delete SharedArrayBuffer;
delete KNBCore;
delete root;
delete module;
delete __filename;
delete __dirname;
delete Thread;
delete globalThis[Symbol.toStringTag];
delete WindowProperties;


frames = parent = top = self = window = globalThis;


if (vm2) {
    window.__proto__ = Window.prototype;
} else {
    Object.setPrototypeOf(window, Window.prototype);
}
//! Object.setPrototypeOf()函数在vm2环境里下设置window(全局对象)的__proto__失效

//*--------------------------------------------------------------------------
//todo 属性
dingvm.toolsFunc.defineProperty(window, "atob", {
    configurable: true, enumerable: true, writable: true,
    value: function atob(str) {
        return dingvm.toolsFunc.base64.base64decode(str);
    }
});
dingvm.toolsFunc.defineProperty(window, "btoa", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function btoa(str) {
        return dingvm.toolsFunc.base64.base64encode(str);
    }
});
dingvm.toolsFunc.defineProperty(window, "name", {
    configurable: true, enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "name_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "name_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "self", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "self_get", arguments)
    },
    // set: function () {
    //     return dingvm.toolsFunc.dispatch(this, window, "window", "self_set", arguments)
    // }
});
dingvm.toolsFunc.defineProperty(window, "top", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "top_get", arguments)
    },
    // set: undefined
});
dingvm.toolsFunc.defineProperty(window, "frames", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "frames_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "frames_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "indexedDB", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "indexedDB_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "openDatabase", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function (name, version, displayName, estimatedSize) {
        return dingvm.toolsFunc.dispatch(this, window, "window", "openDatabase", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "getComputedStyle", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "getComputedStyle", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "innerWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "innerWidth_get", arguments, 1536)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "innerWidth_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "innerHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "innerHeight_get", arguments, 792)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "innerHeight_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "outerWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "outerWidth_get", arguments, 1536)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "outerWidth_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "outerHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "outerHeight_get", arguments, 864)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "outerHeight_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "styleMedia", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "styleMedia_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "crypto", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "crypto_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "visualViewport", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "visualViewport_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "visualViewport_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "external", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "external_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "external_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "chrome", {
    configurable: false,
    enumerable: true,
    writable: true,
    value: chrome_
});
dingvm.toolsFunc.defineProperty(window, "DeviceMotionEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DeviceMotionEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DeviceOrientationEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DeviceOrientationEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "open", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "open", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "fetch", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "fetch", arguments)
    }
});

//*--------------------------------------------------------------------------
//todo 方法
alert = function () {
};
dingvm.toolsFunc.safeFunc(alert, 'alert');

scrollBy = function () {
};
dingvm.toolsFunc.safeFunc(scrollBy, 'scrollBy');

scrollTo = function () {
};
dingvm.toolsFunc.safeFunc(scrollTo, 'scrollTo');

PerformancePaintTiming = function PerformancePaintTiming() {
};
dingvm.toolsFunc.safeFunc(PerformancePaintTiming, 'PerformancePaintTiming');

SVGGraphicsElement = function SVGGraphicsElement() {
};
dingvm.toolsFunc.safeFunc(SVGGraphicsElement, 'SVGGraphicsElement');

CDATASection = function CDATASection() {
};
dingvm.toolsFunc.safeFunc(CDATASection, "CDATASection");

Path2D = function Path2D() {
};
dingvm.toolsFunc.safeFunc(Path2D, "Path2D");

MediaEncryptedEvent = function MediaEncryptedEvent() {
};
dingvm.toolsFunc.safeFunc(MediaEncryptedEvent, "MediaEncryptedEvent");

ScreenOrientation = function ScreenOrientation() {
};
dingvm.toolsFunc.safeFunc(ScreenOrientation, "ScreenOrientation");

SourceBuffer = function SourceBuffer() {
};
dingvm.toolsFunc.safeFunc(SourceBuffer, "SourceBuffer");

SpeechSynthesisUtterance = function SpeechSynthesisUtterance() {
};
dingvm.toolsFunc.safeFunc(SpeechSynthesisUtterance, "SpeechSynthesisUtterance");

HTMLFrameSetElement = function HTMLFrameSetElement() {
};
dingvm.toolsFunc.safeFunc(HTMLFrameSetElement, "HTMLFrameSetElement");

DOMParser = function DOMParser() {
};
dingvm.toolsFunc.safeFunc(DOMParser, "DOMParser");

webkitResolveLocalFileSystemURL = function webkitResolveLocalFileSystemURL() {
};
dingvm.toolsFunc.safeFunc(webkitResolveLocalFileSystemURL, 'webkitResolveLocalFileSystemURL');

webkitSpeechGrammar = function () {
};
dingvm.toolsFunc.safeFunc(webkitSpeechGrammar, 'webkitSpeechGrammar');

//*--------------------------------------------------------------------------

function Image(width, height) {
    let img = document.createElement('img');
    img.width = width;
    img.height = height;

    return img
}

dingvm.toolsFunc.safeFunc(Image, 'Image');
dingvm.toolsFunc.defineProperty(window, "Image", {
    enumerable: false,
});

//*--------------------------------------------------------------------------

//* 常见属性值
window.length = 0;
window.scrollX = 0;
window.screenY = 0;
window.pageXOffset = 0;
window.pageYOffset = 0;
window.screenX = 0;
window.screenY = 0;
window.screenLeft = 0;
window.screenTop = 0;
window.devicePixelRatio = 1.25;
window.osversion = "win10";
//* 凑数 检测了window属性个数
window.isSecureContext = true;
window.originAgentCluster = false;
//* on···事件
window.onsearch = null;
window.onappinstalled = null;
window.onbeforeinstallprompt = null;
window.onbeforexrselect = null;
window.onmessage = null;
window.onbeforexrselect = null;
window.onabort = null;
window.onblur = null;
window.oncancel = null;
window.oncanplay = null;
window.oncanplaythrough = null;
window.onchange = null;
window.onclick = null;
window.onclose = null;
window.oncontextmenu = null;
window.oncuechange = null;
window.ondblclick = null;
window.ondrag = null;
window.ondragend = null;
window.ondragenter = null;
window.ondragleave = null;
window.ondragover = null;
window.ondragstart = null;
window.ondrop = null;
window.ondurationchange = null;
window.onemptied = null;
window.onended = null;
window.onerror = null;
window.onfocus = null;
window.onformdata = null;
window.oninput = null;
window.oninvalid = null;
window.onkeydown = null;
window.onkeypress = null;
window.onkeyup = null;
window.onload = null;
window.onloadeddata = null;
window.onloadedmetadata = null;
window.onloadstart = null;
window.onmousedown = null;
window.onmouseenter = null;
window.onmouseleave = null;
window.onmousemove = null;
window.onmouseout = null;
window.onmouseover = null;
window.onmouseup = null;
window.onmousewheel = null;
window.onpause = null;
window.onplay = null;
window.onplaying = null;
window.onprogress = null;
window.onratechange = null;
window.onreset = null;
window.onresize = null;
window.onscroll = null;
window.onseeked = null;
window.onseeking = null;
window.onselect = null;
window.onstalled = null;
window.onsubmit = null;
window.onsuspend = null;
window.ontimeupdate = null;
window.ontoggle = null;
window.onvolumechange = null;
window.onwaiting = null;
window.onwebkitanimationend = null;
window.onwebkitanimationiteration = null;
window.onwebkitanimationstart = null;
window.onwebkittransitionend = null;
window.onwheel = null;
window.onauxclick = null;
window.ongotpointercapture = null;
window.onlostpointercapture = null;
window.onpointerdown = null;
window.onpointermove = null;
window.onpointerup = null;
window.onpointercancel = null;
window.onpointerover = null;
window.onpointerout = null;
window.onpointerleave = null;
window.onselectstart = null;
window.onselectionchange = null;
window.onanimationend = null;
window.onanimationiteration = null;
window.onanimationstart = null;
window.ontransitionrun = null;
window.ontransitionstart = null;
window.ontransitionend = null;
window.ontransitioncancel = null;
window.onafterprint = null;
window.onafterprint = null;
window.onbeforeprint = null;
window.onbeforeunload = null;
window.onhashchange = null;
window.onlanguagechange = null;
window.onmessage = null;
window.onmessageerror = null;
window.onoffline = null;
window.ononline = null;
window.onpagehide = null;
window.onpageshow = null;
window.onpopstate = null;
window.onrejectionhandled = null;
window.onstorage = null;
window.onunhandledrejection = null;
window.onunload = null;