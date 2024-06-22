// Window对象
Window = function Window(self) {
    if (self === undefined) {
        return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
    }
};
dingvm.toolsFunc.safe_constructor_prototype(Window, "Window");
Object.setPrototypeOf(Window.prototype, WindowProperties.prototype);
dingvm.toolsFunc.defineProperty(Window, "TEMPORARY", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(Window, "PERSISTENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(Window.prototype, "TEMPORARY", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(Window.prototype, "PERSISTENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
