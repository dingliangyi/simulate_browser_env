// OfflineAudioCompletionEvent对象
OfflineAudioCompletionEvent = function OfflineAudioCompletionEvent() {
    return dingvm.toolsFunc.throwError("TypeError", "Failed to construct 'OfflineAudioCompletionEvent': 2 arguments required, but only 0 present.")
};
dingvm.toolsFunc.safe_constructor_prototype(OfflineAudioCompletionEvent, "OfflineAudioCompletionEvent");
Object.setPrototypeOf(OfflineAudioCompletionEvent.prototype, Event.prototype);
dingvm.toolsFunc.defineProperty(OfflineAudioCompletionEvent.prototype, "renderedBuffer", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, OfflineAudioCompletionEvent.prototype, "OfflineAudioCompletionEventProto", "renderedBuffer_get", arguments)
    },
    set: undefined
});
