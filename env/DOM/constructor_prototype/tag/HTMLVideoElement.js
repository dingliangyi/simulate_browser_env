// HTMLVideoElement对象
HTMLVideoElement = function HTMLVideoElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLVideoElement, "HTMLVideoElement");
Object.setPrototypeOf(HTMLVideoElement.prototype, HTMLMediaElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "width", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "width_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "width_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "height", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "height_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "height_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "videoWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "videoWidth_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "videoHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "videoHeight_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "poster", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "poster_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "poster_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitDecodedFrameCount", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "webkitDecodedFrameCount_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitDroppedFrameCount", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "webkitDroppedFrameCount_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "playsInline", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "playsInline_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "playsInline_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "onenterpictureinpicture", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "onenterpictureinpicture_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "onenterpictureinpicture_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "onleavepictureinpicture", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "onleavepictureinpicture_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "onleavepictureinpicture_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "disablePictureInPicture", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "disablePictureInPicture_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "disablePictureInPicture_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "cancelVideoFrameCallback", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "cancelVideoFrameCallback", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "requestPictureInPicture", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "requestPictureInPicture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "requestVideoFrameCallback", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "requestVideoFrameCallback", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitSupportsFullscreen", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "webkitSupportsFullscreen_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitDisplayingFullscreen", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "webkitDisplayingFullscreen_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "getVideoPlaybackQuality", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "getVideoPlaybackQuality", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitEnterFullScreen", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "webkitEnterFullScreen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitEnterFullscreen", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "webkitEnterFullscreen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitExitFullScreen", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "webkitExitFullScreen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLVideoElement.prototype, "webkitExitFullscreen", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLVideoElement.prototype, "HTMLVideoElementProto", "webkitExitFullscreen", arguments)
    }
});
