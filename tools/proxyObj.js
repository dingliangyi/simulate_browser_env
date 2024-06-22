// 需要代理的对象(先开始全局对象)
// localStorage = dingvm.toolsFunc.proxy(localStorage, "localStorage");
// sessionStorage = dingvm.toolsFunc.proxy(sessionStorage, "sessionStorage");
// location = dingvm.toolsFunc.proxy(location, "location");
// document = dingvm.toolsFunc.proxy(document, "document");
// navigator = dingvm.toolsFunc.proxy(navigator, "navigator");
// history = dingvm.toolsFunc.proxy(history, "history");
// screen = dingvm.toolsFunc.proxy(screen, "screen");
frames = parent = top = self = window = dingvm.toolsFunc.proxy(window, "window");


//todo 伪造this  注意不能用自执行函数执行被加密的代码，不然this不是被代理的window
// window.code = function() { 被加密的代码 } window.code()

//todo 如果代理失效，单独使用下面这个方法
// for (let name in global) {
//     if (name === 'global' || name === 'window') {
//         continue;
//     }
//     window[name] = global[name]
//     delete global[name]
//     console.log(name)
// }
// window = dingvm.toolsFunc.proxy(window,"window");
// Object.setPrototypeOf(globalThis,window);
// global删不删看情况
