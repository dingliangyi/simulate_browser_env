//异步执行的代码
let setTimeoutEvent = dingvm.memory.asyncEvent.setTimeout;
// let setTimeoutEvent = undefined;
let setIntervalEvent = dingvm.memory.asyncEvent.setInterval;
let promise = dingvm.memory.asyncEvent.promise;
// let listeners = undefined;
let listeners = dingvm.memory.asyncEvent.listener;

function clone_prototype(obj) {
    let __proto__ = Object.getPrototypeOf(obj);
    return Object.assign(Object.create(__proto__), obj);
}

//> ---------------------------------------------------------------- 微任务

if (promise !== undefined) {
    for (let i = 0; i < promise.length; i++) {
        promise[i]();
    }
}

//> ---------------------------------------------------------------- 异步任务

debugger
if (listeners !== undefined) {
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
        //* 鼠标事件
        else if (['click', 'mouseup', 'mousemove', 'mousedown'].includes(key)) {
            //* 一般触发一次
            let event_mouse = {
                "isTrusted": true
            };
            Object.setPrototypeOf(event_mouse, MouseEvent.prototype);

            if (key === 'mousedown') {

                let mouse_data = {
                    "clientX": 289,
                    "clientY": 308,
                    "timeStamp": 10806.39999999851,
                };
                let event_mousedown = clone_prototype(event_mouse);
                dingvm.toolsFunc.setProtoArr.call(event_mousedown, 'clientX', mouse_data.clientX);
                dingvm.toolsFunc.setProtoArr.call(event_mousedown, 'clientY', mouse_data.clientY);
                dingvm.toolsFunc.setProtoArr.call(event_mousedown, 'timeStamp', mouse_data.timeStamp);
                dingvm.toolsFunc.setProtoArr.call(event_mousedown, 'type', key);
                if (dingvm.config.proxy_event) {
                    dingvm.toolsFunc.createProxyObj(event_mousedown, 'event_mousedown');
                }
                let listener = listeners[key];
                for (let i = 0; i < listener.length; i++) {
                    let callback = listener[i].listener;
                    let this_ = listener[i].self;
                    callback.call(this_, event_mousedown);
                }

            } else if (key === 'mouseup') {

                let mouse_data = {
                    clientX: 180,
                    clientY: 233,
                    timeStamp: 11930,
                };
                let event_mouseup = clone_prototype(event_mouse);
                dingvm.toolsFunc.setProtoArr.call(event_mouseup, 'clientX', mouse_data.clientX);
                dingvm.toolsFunc.setProtoArr.call(event_mouseup, 'clientY', mouse_data.clientY);
                dingvm.toolsFunc.setProtoArr.call(event_mouseup, 'timeStamp', mouse_data.timeStamp);
                dingvm.toolsFunc.setProtoArr.call(event_mouseup, 'type', key);
                if (dingvm.config.proxy_event) {
                    dingvm.toolsFunc.createProxyObj(event_mouseup, 'event_mouseup');
                }
                let listener = listeners[key];
                for (let i = 0; i < listener.length; i++) {
                    let callback = listener[i].listener;
                    let this_ = listener[i].self;
                    callback.call(this_, event_mouseup);
                }

            } //* 一般触发多次 例如mousemove
            else if (key === 'mousemove') {

                let event_mouse_data = [
                    {
                        "clientX": 437,
                        "clientY": 311,
                        "timeStamp": 10222.79999999702,
                        "type": "mousemove"
                    },
                    {
                        "clientX": 436,
                        "clientY": 311,
                        "timeStamp": 10224.70000000298,
                        "type": "mousemove"
                    },
                    {
                        "clientX": 435,
                        "clientY": 311,
                        "timeStamp": 10233.20000000298,
                        "type": "mousemove"
                    },
                    {
                        "clientX": 434,
                        "clientY": 311,
                        "timeStamp": 10235.79999999702,
                        "type": "mousemove"
                    },
                    {
                        "clientX": 433,
                        "clientY": 311,
                        "timeStamp": 10240.79999999702,
                        "type": "mousemove"
                    },
                    {
                        "clientX": 432,
                        "clientY": 311,
                        "timeStamp": 10243.20000000298,
                        "type": "mousemove"
                    },
                    {
                        "clientX": 431,
                        "clientY": 311,
                        "timeStamp": 10249.10000000149,
                        "type": "mousemove"
                    },
                    {
                        "clientX": 430,
                        "clientY": 311,
                        "timeStamp": 10251.10000000149,
                        "type": "mousemove"
                    },
                    {
                        "clientX": 429,
                        "clientY": 311,
                        "timeStamp": 10255.10000000149,
                        "type": "mousemove"
                    },
                    {
                        "clientX": 429,
                        "clientY": 310,
                        "timeStamp": 10257.10000000149,
                        "type": "mousemove"
                    }
                ];
                for (let i = 0; i < event_mouse_data.length; i++) {
                    let mouse_data = event_mouse_data[i];
                    let event_mousemove = clone_prototype(event_mouse);
                    dingvm.toolsFunc.setProtoArr.call(event_mousemove, 'clientX', mouse_data.clientX);
                    dingvm.toolsFunc.setProtoArr.call(event_mousemove, 'clientY', mouse_data.clientY);
                    dingvm.toolsFunc.setProtoArr.call(event_mousemove, 'timeStamp', mouse_data.timeStamp);
                    dingvm.toolsFunc.setProtoArr.call(event_mousemove, 'type', key);
                    if (dingvm.config.proxy_event) {
                        dingvm.toolsFunc.createProxyObj(event_mousemove, 'event_mousemove');
                    }
                    let listener = listeners[key];
                    for (let i = 0; i < listener.length; i++) {
                        let callback = listener[i].listener;
                        let this_ = listener[i].self;
                        callback.call(this_, event_mousemove);
                    }
                }

            }
        }
    }
}

if (setTimeoutEvent !== undefined) {
    for (let i = 0; i < setTimeoutEvent.length; i++) {
        let event = setTimeoutEvent[i];
        if (event === undefined) {
            continue;
        }
        let func = event.callback;
        let args = event.args;
        dingvm.node_func.setTimeout(func, ...args);
    }
}