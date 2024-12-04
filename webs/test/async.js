//异步执行的代码
let setIntervalEvent = dingvm.memory.asyncEvent.setInterval;

function clone_prototype(obj) {
    let __proto__ = Object.getPrototypeOf(obj);
    return Object.assign(Object.create(__proto__), obj);
}

//> ---------------------------------------------------------------- 微任务
debugger
// let promise = dingvm.memory.asyncEvent.promise;
let promise = undefined;
if (promise !== undefined) {
    for (let i = 0; i < promise.length; i++) {
        promise[i]();
    }
}

//> ---------------------------------------------------------------- 异步任务
debugger
// var setTimeoutEvent = dingvm.memory.asyncEvent.setTimeout;
// // let setTimeoutEvent = undefined;
// if (setTimeoutEvent !== undefined) {
//     for (let i = 0; i < setTimeoutEvent.length; i++) {
//         let event = setTimeoutEvent[i];
//         if (event === undefined) {
//             continue;
//         }
//         let func = event.callback;
//         let args = event.args;
//         // dingvm.node_func.setTimeout(func, ...args);
//         func(...args);
//     }
// }

//> ---------------------------------------------------------------- 事件

console.log(JSON.stringify(localStorage))

debugger
let listeners = dingvm.memory.asyncEvent.listener;
if (listeners !== undefined) {
    function assign(event_mousedown, mouse_data, key) {
        dingvm.toolsFunc.setProtoArr.call(event_mousedown, 'clientX', mouse_data.clientX);
        dingvm.toolsFunc.setProtoArr.call(event_mousedown, 'clientY', mouse_data.clientY);
        dingvm.toolsFunc.setProtoArr.call(event_mousedown, 'timeStamp', mouse_data.timeStamp);
        dingvm.toolsFunc.setProtoArr.call(event_mousedown, 'type', key);
    }

    function executeCallback(event_mousedown, key) {
        let listener = listeners[key];
        for (let i = 0; i < listener.length; i++) {
            let callback = listener[i].listener;
            let this_ = listener[i].self;
            callback.call(this_, event_mousedown);
        }
    }

    for (let key in listeners) {
        //* 资源事件
        if (['unload', 'load', 'abort', 'error', 'cached'].includes(key)) {
            if (key === 'unload') {
            } else if (key === 'load') {
                let listener = listeners[key];
                for (let i = 0; i < listener.length; i++) {
                    let callback = listener[i].listener;
                    let this_ = listener[i].self;
                    // let useCapture = listener[i].options;
                    callback.call(this_);
                }
            }
        }
        continue;
        //* 鼠标事件
        if (['click', 'mouseup', 'mousemove', 'mousedown', 'mouseenter', 'mouseleave', 'mouseover', 'mouseout'].includes(key)) {
            let event_mouse = {
                "isTrusted": true
            };
            Object.setPrototypeOf(event_mouse, MouseEvent.prototype);

            if (key === 'mousedown') {
                let event_mousedown = clone_prototype(event_mouse);
                assign(event_mousedown, mousedown_data, key);
                executeCallback(event_mousedown, key);
            }
            if (key === 'mouseup') {
                let event_mouseup = clone_prototype(event_mouse);
                assign(event_mouseup, mouseup_data, key);
                executeCallback(event_mouseup, key);
            }
            if (key === 'mousemove') {
                for (let i = 0; i < event_mouse_data.length; i++) {
                    let mouse_data = event_mouse_data[i];
                    let event_mousemove = clone_prototype(event_mouse);
                    assign(event_mousemove, mouse_data, key);
                    executeCallback(event_mousemove, key);
                }
            }
        }
    }
}