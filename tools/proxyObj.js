// 需要代理的对象(先开始全局对象)
localStorage = dingvm.toolsFunc.proxy(localStorage, "localStorage");
sessionStorage = dingvm.toolsFunc.proxy(sessionStorage, "sessionStorage");
location = dingvm.toolsFunc.proxy(location, "location");
document = dingvm.toolsFunc.proxy(document, "document");
navigator = dingvm.toolsFunc.proxy(navigator, "navigator");
history = dingvm.toolsFunc.proxy(history, "history");
screen = dingvm.toolsFunc.proxy(screen, "screen");
parent = top = self = window = dingvm.toolsFunc.proxy(window, "window"); // me too
// globalThis = window 或 global = window 会出现大量信息，但好像并没有用，都是内置属性和函数的信息 下面伪造this也一样

//todo 伪造this  注意不能用自执行函数(function定义的)执行被加密的代码，不然this不是被代理的window
// window.code = function() { 被加密的代码 } window.code()

//todo 如果代理失效，单独使用下面这个方法
// window = {}
// window = dingvm.toolsFunc.proxy(window,"window");
// Object.setPrototypeOf(globalThis,window);
// global删不删看情况
