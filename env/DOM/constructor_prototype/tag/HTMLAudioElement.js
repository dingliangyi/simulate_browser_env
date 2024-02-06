// HTMLAudioElement对象
HTMLAudioElement = function HTMLAudioElement() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(HTMLAudioElement, "HTMLAudioElement");
Object.setPrototypeOf(HTMLAudioElement.prototype, HTMLMediaElement.prototype);
