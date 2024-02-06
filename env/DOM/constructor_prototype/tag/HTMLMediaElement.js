// HTMLMediaElement对象
HTMLMediaElement = function HTMLMediaElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLMediaElement, "HTMLMediaElement");
Object.setPrototypeOf(HTMLMediaElement.prototype, HTMLElement.prototype);
dingvm.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_EMPTY", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_IDLE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_LOADING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement, "NETWORK_NO_SOURCE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_NOTHING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_METADATA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_CURRENT_DATA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_FUTURE_DATA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement, "HAVE_ENOUGH_DATA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 4
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "error", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "error_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "src", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "src_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "src_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "currentSrc", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "currentSrc_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "crossOrigin", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "crossOrigin_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "crossOrigin_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "networkState", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "networkState_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "preload", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "preload_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "preload_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "buffered", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "buffered_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "readyState", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "readyState_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "seeking", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "seeking_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "currentTime", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "currentTime_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "currentTime_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "duration", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "duration_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "paused", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "paused_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "defaultPlaybackRate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "defaultPlaybackRate_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "defaultPlaybackRate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "playbackRate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "playbackRate_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "playbackRate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "played", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "played_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "seekable", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "seekable_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "ended", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "ended_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "autoplay", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "autoplay_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "autoplay_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "loop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "loop_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "loop_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "preservesPitch", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "preservesPitch_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "preservesPitch_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "controls", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "controls_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "controls_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "controlsList", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "controlsList_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "controlsList_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "volume", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "volume_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "volume_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "muted", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "muted_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "muted_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "defaultMuted", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "defaultMuted_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "defaultMuted_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "textTracks", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "textTracks_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "webkitAudioDecodedByteCount", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "webkitAudioDecodedByteCount_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "webkitVideoDecodedByteCount", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "webkitVideoDecodedByteCount_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "onencrypted", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "onencrypted_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "onencrypted_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "onwaitingforkey", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "onwaitingforkey_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "onwaitingforkey_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "srcObject", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "srcObject_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "srcObject_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_EMPTY", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_IDLE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_LOADING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "NETWORK_NO_SOURCE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_NOTHING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_METADATA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_CURRENT_DATA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_FUTURE_DATA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "HAVE_ENOUGH_DATA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 4
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "addTextTrack", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "addTextTrack", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "canPlayType", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "canPlayType", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "captureStream", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "captureStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "load", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "load", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "pause", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "pause", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "play", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "play", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "sinkId", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "sinkId_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "remote", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "remote_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "disableRemotePlayback", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "disableRemotePlayback_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "disableRemotePlayback_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "setSinkId", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "setSinkId", arguments)
    }
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "mediaKeys", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "mediaKeys_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(HTMLMediaElement.prototype, "setMediaKeys", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, HTMLMediaElement.prototype, "HTMLMediaElementProto", "setMediaKeys", arguments)
    }
});
