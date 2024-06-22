// RTCPeerConnection对象
RTCPeerConnection = function RTCPeerConnection() {
};
dingvm.toolsFunc.safe_constructor_prototype(RTCPeerConnection, "RTCPeerConnection");
Object.setPrototypeOf(RTCPeerConnection.prototype, EventTarget.prototype);
dingvm.toolsFunc.defineProperty(RTCPeerConnection, "generateCertificate", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection, "RTCPeerConnection", "generateCertificate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "localDescription", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "localDescription_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "currentLocalDescription", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "currentLocalDescription_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "pendingLocalDescription", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "pendingLocalDescription_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "remoteDescription", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "remoteDescription_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "currentRemoteDescription", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "currentRemoteDescription_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "pendingRemoteDescription", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "pendingRemoteDescription_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "signalingState", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "signalingState_get", arguments, 'stable')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "iceGatheringState", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "iceGatheringState_get", arguments, 'new')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "iceConnectionState", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "iceConnectionState_get", arguments, 'new')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "connectionState", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "connectionState_get", arguments, 'new')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "canTrickleIceCandidates", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "canTrickleIceCandidates_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onnegotiationneeded", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onnegotiationneeded_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onnegotiationneeded_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onicecandidate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onicecandidate_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onicecandidate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onsignalingstatechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onsignalingstatechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onsignalingstatechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "oniceconnectionstatechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "oniceconnectionstatechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "oniceconnectionstatechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onconnectionstatechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onconnectionstatechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onconnectionstatechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onicegatheringstatechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onicegatheringstatechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onicegatheringstatechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onicecandidateerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onicecandidateerror_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onicecandidateerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "ontrack", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "ontrack_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "ontrack_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "sctp", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "sctp_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "ondatachannel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "ondatachannel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "ondatachannel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onaddstream", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onaddstream_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onaddstream_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "onremovestream", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onremovestream_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "onremovestream_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "addIceCandidate", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "addIceCandidate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "addStream", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "addStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "addTrack", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "addTrack", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "addTransceiver", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "addTransceiver", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "close", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "close", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "createAnswer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "createAnswer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "createDTMFSender", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "createDTMFSender", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "createDataChannel", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "createDataChannel", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "createOffer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "createOffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getConfiguration", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "getConfiguration", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getLocalStreams", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "getLocalStreams", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getReceivers", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "getReceivers", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getRemoteStreams", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "getRemoteStreams", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getSenders", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "getSenders", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getStats", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "getStats", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "getTransceivers", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "getTransceivers", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "removeStream", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "removeStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "removeTrack", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "removeTrack", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "restartIce", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "restartIce", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "setConfiguration", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "setConfiguration", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "setLocalDescription", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "setLocalDescription", arguments)
    }
});
dingvm.toolsFunc.defineProperty(RTCPeerConnection.prototype, "setRemoteDescription", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, RTCPeerConnection.prototype, "RTCPeerConnectionProto", "setRemoteDescription", arguments)
    }
});
