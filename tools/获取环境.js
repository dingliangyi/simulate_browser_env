const g = [
    'RegExp',
    'Error',
    'AggregateError',
    'EvalError',
    'RangeError',
    'ReferenceError',
    'SyntaxError',
    'TypeError',
    'URIError',
    'globalThis',
    'JSON',
    'Math',
    'Intl',
    'ArrayBuffer',
    'Uint8Array',
    'Int8Array',
    'Uint16Array',
    'Int16Array',
    'Uint32Array',
    'Int32Array',
    'Float32Array',
    'Float64Array',
    'Uint8ClampedArray',
    'BigUint64Array',
    'BigInt64Array',
    'DataView',
    'Map',
    'BigInt',
    'Set',
    'WeakMap',
    'WeakSet',
    'Proxy',
    'Reflect',
    'FinalizationRegistry',
    'WeakRef',
    'decodeURI',
    'decodeURIComponent',
    'encodeURI',
    'encodeURIComponent',
    'escape',
    'unescape',
    'eval',
    'isFinite',
    'isNaN',
    'console',
    'WritableStreamDefaultWriter',
    'WritableStreamDefaultController',
    'WritableStream',
    'URLSearchParams',
    'URL',
    'TransformStreamDefaultController',
    'TransformStream',
    'TextEncoderStream',
    'TextEncoder',
    'TextDecoderStream',
    'TextDecoder',
    'Response',
    'Request',
    'ReadableStreamDefaultReader',
    'ReadableStreamDefaultController',
    'ReadableStreamBYOBRequest',
    'ReadableStreamBYOBReader',
    'ReadableStream',
    'ReadableByteStreamController',
    'Performance',
    'MessagePort',
    'MessageEvent',
    'MessageChannel',
    'Headers',
    'FormData',
    'EventTarget',
    'Event',
    'DecompressionStream',
    'DOMException',
    'CountQueuingStrategy',
    'CompressionStream',
    'ByteLengthQueuingStrategy',
    'BroadcastChannel',
    'Blob',
    'AbortSignal',
    'AbortController',
    'performance',
    'atob',
    'btoa',
    'clearInterval',
    'clearTimeout',
    'fetch',
    'queueMicrotask',
    'setInterval',
    'setTimeout',
    'structuredClone',
    'Atomics',
    'WebAssembly',
    'SharedArrayBuffer',
    'setImmediate',
    'clearImmediate',
    'global',
    'Object',
    'Function',
    'Array',
    'Number',
    'parseFloat',
    'parseInt',
    'Infinity',
    'NaN',
    'undefined',
    'Boolean',
    'String',
    'Symbol',
    'Date',
    'Promise'
]

// 获取原型环境代码
getProtoEnvCode = function getProtoEnvCode(constructor, instanceObj, proto_or_attr) {
    // constructor: 构造函数
    // instanceObj: 实例对象, 可选参数
    // proto_or_attr: 获取原型链还是属性设置
    let code = "";
    let code2 = "";
    let constructorName = constructor.name;
    // 添加注释
    code += `// ${constructorName}对象\r\n`;
    // 定义构造函数
    code += `${constructorName} = function ${constructorName}(){`;
    try {
        new constructor();
    } catch (e) {
        code += `return dingvm.toolsFunc.throwError("${e.name}", "${e.message}")`;
    }
    code += `};\r\n`;
    // 保护构造函数
    code += `dingvm.toolsFunc.safe_constructor_prototype(${constructorName}, "${constructorName}");\r\n`;
    // 设置原型链
    let protoObj = constructor.prototype;
    let parent_protoObj_name = Object.getPrototypeOf(protoObj)[Symbol.toStringTag];
    if (parent_protoObj_name !== undefined) {
        code += `Object.setPrototypeOf(${constructorName}.prototype, ${parent_protoObj_name}.prototype);\r\n`;
    }

    // 设置构造函数的属性
    for (const key in Object.getOwnPropertyDescriptors(constructor)) {
        if (key === "arguments" || key === "caller" || key === "length" || key === "name" || key === "prototype") {
            continue;
        }
        let descriptor = getDescriptor(constructor, key, constructorName, constructorName, instanceObj);
        code += `dingvm.toolsFunc.defineProperty(${constructorName}, "${key}", ${descriptor});\r\n`;
    }
    // 设置原型对象的属性
    for (const key in Object.getOwnPropertyDescriptors(constructor.prototype)) {
        if (key === "constructor") {
            continue;
        }
        let descriptor = getDescriptor(constructor.prototype, key, `${constructorName}.prototype`, `${constructorName}Proto`, instanceObj);
        code += `dingvm.toolsFunc.defineProperty(${constructorName}.prototype, "${key}", ${descriptor});\r\n`;

        let if_get = descriptor.match(/get:/)
        let if_set = descriptor.match(/set:undefined}/)
        let if_set2 = descriptor.match(/set:/)
        let default_value = descriptor.match(/, arguments, (.*)\)/)
        if (if_get) {
            if (default_value) {
                code2 += `dingvm.envFunc.${constructorName}Proto_${key}_get = function (){ return ${default_value[1]} };\r\n`;
            } else {
                code2 += `dingvm.envFunc.${constructorName}Proto_${key}_get = function (){debugger};\r\n`;
            }
        }
        if (!if_set && if_set2) {
            code2 += `dingvm.envFunc.${constructorName}Proto_${key}_set = function (value){ return dingvm.toolsFunc.setProtoArr.call(this, '${key}', value) };\r\n`;
        }
        if (!if_get && !if_set) {
            code2 += `dingvm.envFunc.${constructorName}Proto_${key} = function (){debugger};\r\n`;
        }

    }

    if (proto_or_attr) {
        console.log(code2)
        copy(code2)
    } else {
        console.log(code);
        copy(code);
    }
    // return code;
}

// 获取实例对象的环境代码
getObjEnvCode = function getObjEnvCode(obj, objName, instanceObj, proto_or_attr) {
    let code = "";
    let code2 = "";
    // 添加注释
    code += `// ${objName}对象\r\n`;
    // 定义对象
    code += `${objName} = {};\r\n`;
    // 设置原型
    // let parent_protoObj_name = Object.getPrototypeOf(obj)[Symbol.toStringTag];
    let parent_protoObj_name = Object.getPrototypeOf(obj) === null ? undefined : Object.getPrototypeOf(obj)[Symbol.toStringTag];
    if (parent_protoObj_name !== undefined) {
        code += `Object.setPrototypeOf(${objName}, ${parent_protoObj_name}.prototype);\r\n`;
    }

    for (const key in Object.getOwnPropertyDescriptors(obj)) {
        if (objName === 'window') {
            if (g.indexOf(key) !== -1
                || key.indexOf('HTML') !== -1
            ) {
                continue
            }
        }

        let descriptor = getDescriptor(obj, key, objName, objName, instanceObj);
        code += `dingvm.toolsFunc.defineProperty(${objName}, "${key}", ${descriptor});\r\n`;

        let if_get = descriptor.match(/get:/)
        let if_set = descriptor.match(/set:undefined}/)
        let if_set2 = descriptor.match(/set:/)
        let default_value = descriptor.match(/, arguments, (.*)\)/)
        if (if_get) {
            if (default_value) {
                code2 += `dingvm.envFunc.${objName}_${key}_get = function (){ return ${default_value[1]} };\r\n`;
            } else {
                code2 += `dingvm.envFunc.${objName}_${key}_get = function (){debugger};\r\n`;
            }
        }
        if (!if_set && if_set2) {
            code2 += `dingvm.envFunc.${objName}_${key}_set = function (value){ return dingvm.toolsFunc.setProtoArr.call(this, '${key}', value) };\r\n`;
        }
        if (!if_get && !if_set) {
            code2 += `dingvm.envFunc.${objName}_${key} = function (){debugger};\r\n`;
        }

    }

    if (proto_or_attr) {
        console.log(code2)
        copy(code2)
    } else {
        console.log(code);
        copy(code);
    }
}

// 获取属性描述符
getDescriptor = function getDescriptor(obj, prop, ordinaryObj_protoObj, ordinaryObj_protoObj__Name, instanceObj) {
    let descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    let configurable = descriptor.configurable;
    let enumerable = descriptor.enumerable;
    let code = `{configurable:${configurable},\n enumerable:${enumerable}, `;
    if (descriptor.hasOwnProperty("writable")) {
        let writable = descriptor.writable;
        code += `\n writable:${writable}, `;
    }
    if (descriptor.hasOwnProperty("value")) {
        let value = descriptor.value;
        if (value instanceof Object) {
            if (typeof value === "function") {
                code += `\n value:function (){return dingvm.toolsFunc.dispatch(this,${ordinaryObj_protoObj}, "${ordinaryObj_protoObj__Name}", "${prop}", arguments)}`;
            } else {
                try {
                    code += `\n value: eval('JSON.parse(\\'${JSON.stringify(value)}\\')')`;
                } catch (e) {
                    console.warn('获取属性描述符的value的值是循环引用对象')
                    code += `\n value:{}`
                }
            }
        } else if (typeof value === 'symbol') {
            code += `\n value:${value.toString()}`;
        } else if (typeof value === "string") {
            code += `\n value:'${value}'`;
        } else {
            code += `\n value:${value}`;
        }
    }
    if (descriptor.hasOwnProperty("get")) {
        let get = descriptor.get;
        if (typeof get === "function") {
            let defaultValue;
            try {
                defaultValue = get.call(instanceObj);
            } catch (e) {
            }
            if (defaultValue === undefined || defaultValue instanceof Object) {
                code += `\n get:function (){return dingvm.toolsFunc.dispatch(this, ${ordinaryObj_protoObj}, "${ordinaryObj_protoObj__Name}", "${prop}_get", arguments)}, `;
            } else {
                if (typeof defaultValue === "string") {
                    code += `\n get:function (){return dingvm.toolsFunc.dispatch(this, ${ordinaryObj_protoObj}, "${ordinaryObj_protoObj__Name}", "${prop}_get", arguments, '${defaultValue}')}, `;
                } else if (typeof defaultValue === 'symbol') {
                    code += `\n get:function (){return dingvm.toolsFunc.dispatch(this, ${ordinaryObj_protoObj}, "${ordinaryObj_protoObj__Name}", "${prop}_get", arguments, ${defaultValue.toString()})}, `;
                } else {
                    code += `\n get:function (){return dingvm.toolsFunc.dispatch(this, ${ordinaryObj_protoObj}, "${ordinaryObj_protoObj__Name}", "${prop}_get", arguments, ${defaultValue})}, `;
                }
            }
        } else {
            code += `\n get:undefined, `
        }
    }
    if (descriptor.hasOwnProperty("set")) {
        let set = descriptor.set;
        if (typeof set === "function") {
            code += `\n set:function (){return dingvm.toolsFunc.dispatch(this, ${ordinaryObj_protoObj}, "${ordinaryObj_protoObj__Name}", "${prop}_set", arguments)}`;
        } else {
            code += `\n set:undefined`
        }
    }
    code += '}';
    return code;
}