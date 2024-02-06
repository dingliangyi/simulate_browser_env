dingvm = {
    toolsFunc: {}
};
dingvm.toolsFunc.reNameFunc = function reNameFunc(func, name) {
    Object.defineProperty(func, "name", {
        configurable: true,
        enumerable: false,
        writable: false,
        value: name
    });
};
!function () {
    const $toString = Function.prototype.toString;
    const symbol = Symbol(); // 独一无二的属性
    const myToString = function () {
        return typeof this === 'function' && this[symbol] || $toString.call(this);
    }

    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value
        });
    }

    delete Function.prototype.toString;
    set_native(Function.prototype, "toString", myToString);
    set_native(Function.prototype.toString, symbol, "function toString() { [native code] }");
    dingvm.toolsFunc.setNative = function (func, funcName) {
        set_native(func, symbol, `function ${funcName || func.name || ''}() { [native code] }`);
    }
}();
dingvm.toolsFunc.reNameObj = function reNameObj(obj, name) {
    Object.defineProperty(obj.prototype, Symbol.toStringTag, {
        configurable: true,
        enumerable: false,
        value: name,
        writable: false
    });
};
dingvm.toolsFunc.safeFunc = function safeFunc(func, name) {
    dingvm.toolsFunc.setNative(func, name);
    dingvm.toolsFunc.reNameFunc(func, name);
};
dingvm.toolsFunc.defineProperty = function defineProperty(obj, prop, oldDescriptor) {
    let newDescriptor = {};
    // newDescriptor.configurable = dingvm.config.proxy || oldDescriptor.configurable;// 如果开启代理必须是true
    newDescriptor.configurable = oldDescriptor.configurable;// 如果开启代理必须是true
    newDescriptor.enumerable = oldDescriptor.enumerable;
    if (oldDescriptor.hasOwnProperty("writable")) {
        // newDescriptor.writable = dingvm.config.proxy || oldDescriptor.writable;// 如果开启代理必须是true
        newDescriptor.writable = oldDescriptor.writable;// 如果开启代理必须是true
    }
    if (oldDescriptor.hasOwnProperty("value")) {
        let value = oldDescriptor.value;
        if (typeof value === "function") {
            dingvm.toolsFunc.safeFunc(value, prop);
        }
        newDescriptor.value = value;
    }
    if (oldDescriptor.hasOwnProperty("get")) {
        let get = oldDescriptor.get;
        if (typeof get === "function") {
            dingvm.toolsFunc.safeFunc(get, `get ${prop}`);
        }
        newDescriptor.get = get;
    }
    if (oldDescriptor.hasOwnProperty("set")) {
        let set = oldDescriptor.set;
        if (typeof set === "function") {
            dingvm.toolsFunc.safeFunc(set, `set ${prop}`);
        }
        newDescriptor.set = set;
    }
    Object.defineProperty(obj, prop, newDescriptor);
};

window = {};

dingvm.toolsFunc.defineProperty(window, "blur", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {

    }
});
dingvm.toolsFunc.defineProperty(window, "close", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {

    }
});
dingvm.toolsFunc.defineProperty(window, "closed", {
    configurable: true,
    enumerable: true,
    get: function () {
        return false
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "focus", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {

    }
});
dingvm.toolsFunc.defineProperty(window, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return 0
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "location", {
    configurable: true,
    enumerable: false,
    get: function () {
        let obj = {}
        dingvm.toolsFunc.defineProperty(obj, "href", {
            configurable: true,
            enumerable: false,
            get: undefined,
            set: function () {
            }
        })
        dingvm.toolsFunc.defineProperty(obj, "replace", {
            configurable: true,
            enumerable: false,
            writable: false,
            value: function () {

            }
        })
        dingvm.toolsFunc.defineProperty(obj, "then", {
            configurable: true,
            enumerable: false,
            writable: false,
            value: undefined
        })
        dingvm.toolsFunc.defineProperty(obj, Symbol.hasInstance, {
            configurable: true,
            enumerable: false,
            writable: false,
            value: undefined
        });
        dingvm.toolsFunc.defineProperty(obj, Symbol.isConcatSpreadable, {
            configurable: true,
            enumerable: false,
            writable: false,
            value: undefined
        });
        dingvm.toolsFunc.defineProperty(obj, Symbol.toStringTag, {
            configurable: true,
            enumerable: false,
            writable: false,
            value: undefined
        });

        return obj
    },
    set: function () {

    }
});
dingvm.toolsFunc.defineProperty(window, "opener", {
    configurable: true,
    enumerable: false,
    get: function () {
        return null
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "postMessage", {
    configurable: true,
    enumerable: false,
    writable: false,
    value: function () {

    }
});
dingvm.toolsFunc.defineProperty(window, "then", {
    configurable: true,
    enumerable: false,
    writable: false,
    value: undefined
});
dingvm.toolsFunc.defineProperty(window, "parent", {
    configurable: true,
    enumerable: false,
    get: function () {
        return this
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "self", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "frames", {
    configurable: true,
    enumerable: false,
    get: function () {
        return this
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "top", {
    configurable: true,
    enumerable: false,
    get: function () {
        return this
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "window", {
    configurable: false,
    enumerable: true,
    get: function () {
        return this
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, Symbol.hasInstance, {
    configurable: true,
    enumerable: false,
    writable: false,
    value: undefined
});
dingvm.toolsFunc.defineProperty(window, Symbol.isConcatSpreadable, {
    configurable: true,
    enumerable: false,
    writable: false,
    value: undefined
});
dingvm.toolsFunc.defineProperty(window, Symbol.toStringTag, {
    configurable: true,
    enumerable: false,
    writable: false,
    value: undefined
});


const getEnv = function (jsCode) {
    return eval(jsCode)
};
getEnv
;