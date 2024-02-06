dingvm.envFunc.EventTargetProto_addEventListener = function EventTargetProto_addEventListener(type, listener, useCapture) {
    let event = {
        "self": this,
        "type": type,
        "listener": listener,
        "options": useCapture
    }
    if (dingvm.memory.asyncEvent.listener === undefined) {
        dingvm.memory.asyncEvent.listener = {};
    }
    if (dingvm.memory.asyncEvent.listener[type] === undefined) {
        dingvm.memory.asyncEvent.listener[type] = [];
    }
    dingvm.memory.asyncEvent.listener[type].push(event);

    if (this.listeners === undefined) {
        this.listeners = {}
    }
    if (!(type in this.listeners)) {
        this.listeners[type] = []
    }

    this.listeners[type].push(listener)
};
dingvm.envFunc.EventTargetProto_removeEventListener = function EventTargetProto_removeEventListener(type, listener, useCapture) {
    if (!(type in this.listeners)) {
        return
    }

    let stack = this.listeners[type]
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] === listener) {
            stack.splice(i, 1)
            return this.removeEventListener(type, listener, useCapture)
        }
    }
};
dingvm.envFunc.EventTargetProto_dispatchEvent = function EventTargetProto_dispatchEvent(event) {
    if (!(event.type in this.listeners)) {
        return;
    }

    let stack = this.listeners[event.type];
    event.target = this;

    for (let i = 0; i < stack.length; i++) {
        stack[i].call(this, event);
    }
};