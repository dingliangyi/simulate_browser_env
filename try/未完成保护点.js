Object.getOwnPropertyDescriptors(HTMLDivElement)
//todo 有独一无二的属性  toolsFunc.js文件 Symbol('myToString('.concat('', ')_', (Math.random()) + '').toString())

//todo WebSocket

//todo vm2特征 window.VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL

//todo https://blog.csdn.net/Xzike/article/details/124944923

//todo 在window原型链上设置的属性，vm2运行时 无法过window.hasOwnProperty()检测
//todo 已解决form标签id、默认属性问题。
//todo (未解决) 如果针对性检测在原型链上设置属性，再检测，需要代理所有原型set，把设置的属性添加在 dingvm.memory.globalVar.window.filter_proto_attr

// todo Element remove removeAttribute getBoundingClientRect
// todo Node insertBefore lastChild cloneNode