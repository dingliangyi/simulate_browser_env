// window对象
window = {}
Object.setPrototypeOf(window, Window.prototype);
dingvm.toolsFunc.defineProperty(window, "Object", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Object", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Function", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Function", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Array", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Array", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Number", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Number", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "parseFloat", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "parseFloat", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "parseInt", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "parseInt", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Infinity", {
    configurable: false,
    enumerable: false,
    writable: false, value: Infinity
});
dingvm.toolsFunc.defineProperty(window, "NaN", {
    configurable: false,
    enumerable: false,
    writable: false, value: NaN
});
dingvm.toolsFunc.defineProperty(window, "undefined", {
    configurable: false,
    enumerable: false,
    writable: false, value: undefined
});
dingvm.toolsFunc.defineProperty(window, "Boolean", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Boolean", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "String", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "String", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Symbol", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Symbol", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Date", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Date", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Promise", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Promise", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RegExp", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RegExp", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Error", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Error", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AggregateError", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AggregateError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "EvalError", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "EvalError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RangeError", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RangeError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ReferenceError", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ReferenceError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SyntaxError", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SyntaxError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TypeError", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TypeError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "URIError", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "URIError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "globalThis", {
    configurable: true,
    enumerable: false,
    writable: true, value: {}
});
dingvm.toolsFunc.defineProperty(window, "JSON", {
    configurable: true,
    enumerable: false,
    writable: true, value: eval('JSON.parse(\'{}\')')
});
dingvm.toolsFunc.defineProperty(window, "Math", {
    configurable: true,
    enumerable: false,
    writable: true, value: eval('JSON.parse(\'{}\')')
});
dingvm.toolsFunc.defineProperty(window, "Intl", {
    configurable: true,
    enumerable: false,
    writable: true, value: eval('JSON.parse(\'{}\')')
});
dingvm.toolsFunc.defineProperty(window, "ArrayBuffer", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ArrayBuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Uint8Array", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Uint8Array", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Int8Array", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Int8Array", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Uint16Array", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Uint16Array", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Int16Array", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Int16Array", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Uint32Array", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Uint32Array", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Int32Array", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Int32Array", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Float32Array", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Float32Array", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Float64Array", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Float64Array", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Uint8ClampedArray", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Uint8ClampedArray", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BigUint64Array", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BigUint64Array", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BigInt64Array", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BigInt64Array", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DataView", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DataView", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Map", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Map", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BigInt", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BigInt", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Set", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WeakMap", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WeakMap", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WeakSet", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WeakSet", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Proxy", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Proxy", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Reflect", {
    configurable: true,
    enumerable: false,
    writable: true, value: eval('JSON.parse(\'{}\')')
});
dingvm.toolsFunc.defineProperty(window, "FinalizationRegistry", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FinalizationRegistry", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WeakRef", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WeakRef", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "decodeURI", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "decodeURI", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "decodeURIComponent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "decodeURIComponent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "encodeURI", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "encodeURI", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "encodeURIComponent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "encodeURIComponent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "escape", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "escape", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "unescape", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "unescape", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "eval", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "eval", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "isFinite", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "isFinite", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "isNaN", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "isNaN", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "console", {
    configurable: true,
    enumerable: false,
    writable: true, value: eval('JSON.parse(\'{"memory":{}}\')')
});
dingvm.toolsFunc.defineProperty(window, "Option", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Option", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Image", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Image", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Audio", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Audio", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "webkitURL", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "webkitURL", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "webkitRTCPeerConnection", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "webkitRTCPeerConnection", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "webkitMediaStream", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "webkitMediaStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebKitMutationObserver", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebKitMutationObserver", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebKitCSSMatrix", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebKitCSSMatrix", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XSLTProcessor", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XSLTProcessor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XPathResult", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XPathResult", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XPathExpression", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XPathExpression", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XPathEvaluator", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XPathEvaluator", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XMLSerializer", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XMLSerializer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XMLHttpRequestUpload", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XMLHttpRequestUpload", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XMLHttpRequestEventTarget", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XMLHttpRequestEventTarget", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XMLHttpRequest", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XMLHttpRequest", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XMLDocument", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XMLDocument", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WritableStreamDefaultWriter", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WritableStreamDefaultWriter", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WritableStreamDefaultController", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WritableStreamDefaultController", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WritableStream", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WritableStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Worker", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Worker", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Window", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Window", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WheelEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WheelEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebSocket", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebSocket", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLVertexArrayObject", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLVertexArrayObject", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLUniformLocation", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLUniformLocation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLTransformFeedback", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLTransformFeedback", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLTexture", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLTexture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLSync", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLSync", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLShaderPrecisionFormat", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLShaderPrecisionFormat", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLShader", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLShader", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLSampler", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLSampler", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLRenderingContext", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLRenderingContext", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLRenderbuffer", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLRenderbuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLQuery", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLQuery", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLProgram", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLProgram", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLFramebuffer", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLFramebuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLContextEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLContextEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLBuffer", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLBuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGLActiveInfo", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGLActiveInfo", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebGL2RenderingContext", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebGL2RenderingContext", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WaveShaperNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WaveShaperNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "VisualViewport", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "VisualViewport", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "VirtualKeyboardGeometryChangeEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "VirtualKeyboardGeometryChangeEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ValidityState", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ValidityState", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "VTTCue", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "VTTCue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "UserActivation", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "UserActivation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "URLSearchParams", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "URLSearchParams", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "URLPattern", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "URLPattern", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "URL", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "URL", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "UIEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "UIEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TrustedTypePolicyFactory", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TrustedTypePolicyFactory", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TrustedTypePolicy", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TrustedTypePolicy", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TrustedScriptURL", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TrustedScriptURL", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TrustedScript", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TrustedScript", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TrustedHTML", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TrustedHTML", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TreeWalker", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TreeWalker", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TransitionEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TransitionEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TransformStreamDefaultController", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TransformStreamDefaultController", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TransformStream", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TransformStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TrackEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TrackEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TouchList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TouchList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TouchEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TouchEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Touch", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Touch", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TimeRanges", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TimeRanges", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TextTrackList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TextTrackList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TextTrackCueList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TextTrackCueList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TextTrackCue", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TextTrackCue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TextTrack", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TextTrack", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TextMetrics", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TextMetrics", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TextEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TextEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TextEncoderStream", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TextEncoderStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TextEncoder", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TextEncoder", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TextDecoderStream", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TextDecoderStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TextDecoder", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TextDecoder", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Text", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Text", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TaskSignal", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TaskSignal", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TaskPriorityChangeEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TaskPriorityChangeEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TaskController", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TaskController", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "TaskAttributionTiming", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "TaskAttributionTiming", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SyncManager", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SyncManager", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SubmitEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SubmitEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "StyleSheetList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "StyleSheetList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "StyleSheet", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "StyleSheet", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "StylePropertyMapReadOnly", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "StylePropertyMapReadOnly", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "StylePropertyMap", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "StylePropertyMap", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "StorageEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "StorageEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Storage", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Storage", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "StereoPannerNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "StereoPannerNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "StaticRange", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "StaticRange", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ShadowRoot", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ShadowRoot", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Selection", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Selection", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SecurityPolicyViolationEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SecurityPolicyViolationEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ScriptProcessorNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ScriptProcessorNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ScreenOrientation", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ScreenOrientation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Screen", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Screen", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Scheduling", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Scheduling", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Scheduler", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Scheduler", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGViewElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGViewElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGUseElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGUseElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGUnitTypes", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGUnitTypes", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGTransformList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGTransformList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGTransform", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGTransform", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGTitleElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGTitleElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGTextPositioningElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGTextPositioningElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGTextPathElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGTextPathElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGTextElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGTextElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGTextContentElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGTextContentElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGTSpanElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGTSpanElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGSymbolElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGSymbolElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGSwitchElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGSwitchElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGStyleElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGStyleElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGStringList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGStringList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGStopElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGStopElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGSetElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGSetElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGScriptElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGScriptElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGSVGElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGSVGElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGRectElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGRectElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGRect", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGRect", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGRadialGradientElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGRadialGradientElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGPreserveAspectRatio", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGPreserveAspectRatio", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGPolylineElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGPolylineElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGPolygonElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGPolygonElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGPointList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGPointList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGPoint", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGPoint", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGPatternElement", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGPatternElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGPathElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGPathElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGNumberList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGNumberList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGNumber", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGNumber", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGMetadataElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGMetadataElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGMatrix", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGMatrix", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGMaskElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGMaskElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGMarkerElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGMarkerElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGMPathElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGMPathElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGLinearGradientElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGLinearGradientElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGLineElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGLineElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGLengthList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGLengthList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGLength", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGLength", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGImageElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGImageElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGGraphicsElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGGraphicsElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGGradientElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGGradientElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGGeometryElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGGeometryElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGGElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGGElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGForeignObjectElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGForeignObjectElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFilterElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFilterElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFETurbulenceElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFETurbulenceElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFETileElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFETileElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFESpotLightElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFESpotLightElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFESpecularLightingElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFESpecularLightingElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEPointLightElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEPointLightElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEOffsetElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEOffsetElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEMorphologyElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEMorphologyElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEMergeNodeElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEMergeNodeElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEMergeElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEMergeElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEImageElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEImageElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEGaussianBlurElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEGaussianBlurElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEFuncRElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEFuncRElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEFuncGElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEFuncGElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEFuncBElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEFuncBElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEFuncAElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEFuncAElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEFloodElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEFloodElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEDropShadowElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEDropShadowElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEDistantLightElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEDistantLightElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEDisplacementMapElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEDisplacementMapElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEDiffuseLightingElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEDiffuseLightingElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEConvolveMatrixElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEConvolveMatrixElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFECompositeElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFECompositeElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEComponentTransferElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEComponentTransferElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEColorMatrixElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEColorMatrixElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGFEBlendElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGFEBlendElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGEllipseElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGEllipseElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGDescElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGDescElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGDefsElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGDefsElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGComponentTransferFunctionElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGComponentTransferFunctionElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGClipPathElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGClipPathElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGCircleElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGCircleElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimationElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimationElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimatedTransformList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedTransformList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimatedString", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedString", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimatedRect", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedRect", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimatedPreserveAspectRatio", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedPreserveAspectRatio", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimatedNumberList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedNumberList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimatedNumber", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedNumber", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimatedLengthList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedLengthList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimatedLength", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedLength", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimatedInteger", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedInteger", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimatedEnumeration", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedEnumeration", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimatedBoolean", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedBoolean", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimatedAngle", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimatedAngle", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimateTransformElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimateTransformElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimateMotionElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimateMotionElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAnimateElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAnimateElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAngle", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAngle", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SVGAElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SVGAElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Response", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Response", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ResizeObserverSize", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ResizeObserverSize", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ResizeObserverEntry", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ResizeObserverEntry", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ResizeObserver", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ResizeObserver", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Request", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Request", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ReportingObserver", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ReportingObserver", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ReadableStreamDefaultReader", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ReadableStreamDefaultReader", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ReadableStreamDefaultController", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ReadableStreamDefaultController", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ReadableStreamBYOBRequest", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ReadableStreamBYOBRequest", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ReadableStreamBYOBReader", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ReadableStreamBYOBReader", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ReadableStream", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ReadableStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ReadableByteStreamController", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ReadableByteStreamController", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Range", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Range", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RadioNodeList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RadioNodeList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCTrackEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCTrackEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCStatsReport", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCStatsReport", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCSessionDescription", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCSessionDescription", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCSctpTransport", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCSctpTransport", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCRtpTransceiver", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCRtpTransceiver", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCRtpSender", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCRtpSender", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCRtpReceiver", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCRtpReceiver", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCPeerConnectionIceEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCPeerConnectionIceEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCPeerConnectionIceErrorEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCPeerConnectionIceErrorEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCPeerConnection", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCPeerConnection", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCIceCandidate", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCIceCandidate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCErrorEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCErrorEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCError", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCEncodedVideoFrame", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCEncodedVideoFrame", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCEncodedAudioFrame", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCEncodedAudioFrame", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCDtlsTransport", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCDtlsTransport", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCDataChannelEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCDataChannelEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCDataChannel", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCDataChannel", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCDTMFToneChangeEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCDTMFToneChangeEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCDTMFSender", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCDTMFSender", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCCertificate", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCCertificate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PromiseRejectionEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PromiseRejectionEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ProgressEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ProgressEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Profiler", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Profiler", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ProcessingInstruction", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ProcessingInstruction", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PopStateEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PopStateEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PointerEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PointerEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PluginArray", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PluginArray", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Plugin", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Plugin", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PeriodicWave", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PeriodicWave", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PerformanceTiming", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PerformanceTiming", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PerformanceServerTiming", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PerformanceServerTiming", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PerformanceResourceTiming", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PerformanceResourceTiming", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PerformancePaintTiming", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PerformancePaintTiming", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PerformanceObserverEntryList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PerformanceObserverEntryList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PerformanceObserver", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PerformanceObserver", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PerformanceNavigationTiming", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PerformanceNavigationTiming", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PerformanceNavigation", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PerformanceNavigation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PerformanceMeasure", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PerformanceMeasure", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PerformanceMark", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PerformanceMark", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PerformanceLongTaskTiming", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PerformanceLongTaskTiming", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PerformanceEventTiming", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PerformanceEventTiming", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PerformanceEntry", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PerformanceEntry", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PerformanceElementTiming", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PerformanceElementTiming", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Performance", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Performance", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Path2D", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Path2D", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PannerNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PannerNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PageTransitionEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PageTransitionEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "OverconstrainedError", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "OverconstrainedError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "OscillatorNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "OscillatorNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "OffscreenCanvasRenderingContext2D", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "OffscreenCanvasRenderingContext2D", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "OffscreenCanvas", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "OffscreenCanvas", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "OfflineAudioContext", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "OfflineAudioContext", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "OfflineAudioCompletionEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "OfflineAudioCompletionEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "NodeList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "NodeList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "NodeIterator", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "NodeIterator", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "NodeFilter", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "NodeFilter", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Node", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Node", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "NetworkInformation", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "NetworkInformation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Navigator", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Navigator", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "NamedNodeMap", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "NamedNodeMap", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MutationRecord", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MutationRecord", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MutationObserver", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MutationObserver", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MutationEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MutationEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MouseEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MouseEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MimeTypeArray", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MimeTypeArray", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MimeType", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MimeType", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MessagePort", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MessagePort", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MessageEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MessageEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MessageChannel", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MessageChannel", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaStreamTrackProcessor", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaStreamTrackProcessor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaStreamTrackEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaStreamTrackEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaStreamEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaStreamEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaStreamAudioSourceNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaStreamAudioSourceNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaStreamAudioDestinationNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaStreamAudioDestinationNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaStream", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaRecorder", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaRecorder", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaQueryListEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaQueryListEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaQueryList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaQueryList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaError", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaEncryptedEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaEncryptedEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaElementAudioSourceNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaElementAudioSourceNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaCapabilities", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaCapabilities", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Location", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Location", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "LayoutShiftAttribution", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "LayoutShiftAttribution", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "LayoutShift", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "LayoutShift", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "LargestContentfulPaint", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "LargestContentfulPaint", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "KeyframeEffect", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "KeyframeEffect", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "KeyboardEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "KeyboardEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IntersectionObserverEntry", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IntersectionObserverEntry", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IntersectionObserver", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IntersectionObserver", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "InputEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "InputEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "InputDeviceInfo", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "InputDeviceInfo", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "InputDeviceCapabilities", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "InputDeviceCapabilities", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ImageData", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ImageData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ImageCapture", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ImageCapture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ImageBitmapRenderingContext", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ImageBitmapRenderingContext", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ImageBitmap", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ImageBitmap", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IdleDeadline", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IdleDeadline", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IIRFilterNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IIRFilterNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IDBVersionChangeEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IDBVersionChangeEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IDBTransaction", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IDBTransaction", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IDBRequest", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IDBRequest", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IDBOpenDBRequest", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IDBOpenDBRequest", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IDBObjectStore", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IDBObjectStore", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IDBKeyRange", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IDBKeyRange", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IDBIndex", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IDBIndex", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IDBFactory", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IDBFactory", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IDBDatabase", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IDBDatabase", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IDBCursorWithValue", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IDBCursorWithValue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IDBCursor", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IDBCursor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "History", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "History", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Headers", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Headers", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HashChangeEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HashChangeEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLVideoElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLVideoElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLUnknownElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLUnknownElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLUListElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLUListElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLTrackElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLTrackElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLTitleElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLTitleElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLTimeElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLTimeElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLTextAreaElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLTextAreaElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLTemplateElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLTemplateElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLTableSectionElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLTableSectionElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLTableRowElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLTableRowElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLTableElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLTableElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLTableColElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLTableColElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLTableCellElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLTableCellElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLTableCaptionElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLTableCaptionElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLStyleElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLStyleElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLSpanElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLSpanElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLSourceElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLSourceElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLSlotElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLSlotElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLSelectElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLSelectElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLScriptElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLScriptElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLQuoteElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLQuoteElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLProgressElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLProgressElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLPreElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLPreElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLPictureElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLPictureElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLParamElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLParamElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLParagraphElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLParagraphElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLOutputElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLOutputElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLOptionsCollection", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLOptionsCollection", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLOptionElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLOptionElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLOptGroupElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLOptGroupElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLObjectElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLObjectElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLOListElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLOListElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLModElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLModElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLMeterElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLMeterElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLMetaElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLMetaElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLMenuElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLMenuElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLMediaElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLMediaElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLMarqueeElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLMarqueeElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLMapElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLMapElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLLinkElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLLinkElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLLegendElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLLegendElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLLabelElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLLabelElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLLIElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLLIElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLInputElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLInputElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLImageElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLImageElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLIFrameElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLIFrameElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLHtmlElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLHtmlElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLHeadingElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLHeadingElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLHeadElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLHeadElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLHRElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLHRElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLFrameSetElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLFrameSetElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLFrameElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLFrameElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLFormElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLFormElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLFormControlsCollection", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLFormControlsCollection", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLFontElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLFontElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLFieldSetElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLFieldSetElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLEmbedElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLEmbedElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLDocument", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLDocument", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLDivElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLDivElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLDirectoryElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLDirectoryElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLDialogElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLDialogElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLDetailsElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLDetailsElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLDataListElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLDataListElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLDataElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLDataElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLDListElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLDListElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLCollection", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLCollection", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLCanvasElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLCanvasElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLButtonElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLButtonElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLBodyElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLBodyElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLBaseElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLBaseElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLBRElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLBRElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLAudioElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLAudioElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLAreaElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLAreaElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLAnchorElement", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLAnchorElement", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HTMLAllCollection", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HTMLAllCollection", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "GeolocationPositionError", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "GeolocationPositionError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "GeolocationPosition", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "GeolocationPosition", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "GeolocationCoordinates", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "GeolocationCoordinates", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Geolocation", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Geolocation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "GamepadHapticActuator", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "GamepadHapticActuator", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "GamepadEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "GamepadEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "GamepadButton", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "GamepadButton", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Gamepad", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Gamepad", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "GainNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "GainNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "FormDataEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FormDataEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "FormData", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FormData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "FontFaceSetLoadEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FontFaceSetLoadEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "FontFace", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FontFace", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "FocusEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FocusEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "FileReader", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FileReader", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "FileList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FileList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "File", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "File", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "FeaturePolicy", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FeaturePolicy", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "External", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "External", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "EventTarget", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "EventTarget", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "EventSource", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "EventSource", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "EventCounts", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "EventCounts", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Event", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Event", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ErrorEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ErrorEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ElementInternals", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ElementInternals", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Element", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Element", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DynamicsCompressorNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DynamicsCompressorNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DragEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DragEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DocumentType", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DocumentType", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DocumentFragment", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DocumentFragment", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Document", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Document", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DelayNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DelayNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DecompressionStream", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DecompressionStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DataTransferItemList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DataTransferItemList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DataTransferItem", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DataTransferItem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DataTransfer", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DataTransfer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DOMTokenList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DOMTokenList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DOMStringMap", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DOMStringMap", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DOMStringList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DOMStringList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DOMRectReadOnly", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DOMRectReadOnly", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DOMRectList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DOMRectList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DOMRect", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DOMRect", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DOMQuad", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DOMQuad", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DOMPointReadOnly", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DOMPointReadOnly", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DOMPoint", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DOMPoint", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DOMParser", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DOMParser", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DOMMatrixReadOnly", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DOMMatrixReadOnly", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DOMMatrix", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DOMMatrix", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DOMImplementation", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DOMImplementation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DOMException", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DOMException", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DOMError", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DOMError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CustomStateSet", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CustomStateSet", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CustomEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CustomEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CustomElementRegistry", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CustomElementRegistry", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Crypto", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Crypto", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CountQueuingStrategy", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CountQueuingStrategy", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ConvolverNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ConvolverNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ConstantSourceNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ConstantSourceNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CompressionStream", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CompressionStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CompositionEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CompositionEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Comment", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Comment", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CloseEvent", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CloseEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ClipboardEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ClipboardEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CharacterData", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CharacterData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ChannelSplitterNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ChannelSplitterNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ChannelMergerNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ChannelMergerNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CanvasRenderingContext2D", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CanvasRenderingContext2D", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CanvasPattern", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CanvasPattern", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CanvasGradient", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CanvasGradient", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CanvasFilter", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CanvasFilter", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CanvasCaptureMediaStreamTrack", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CanvasCaptureMediaStreamTrack", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSVariableReferenceValue", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSVariableReferenceValue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSUnparsedValue", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSUnparsedValue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSUnitValue", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSUnitValue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSTranslate", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSTranslate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSTransformValue", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSTransformValue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSTransformComponent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSTransformComponent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSSupportsRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSSupportsRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSStyleValue", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSStyleValue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSStyleSheet", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSStyleSheet", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSStyleRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSStyleRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSStyleDeclaration", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSStyleDeclaration", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSSkewY", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSSkewY", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSSkewX", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSSkewX", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSSkew", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSSkew", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSScale", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSScale", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSRuleList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSRuleList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSRotate", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSRotate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSPropertyRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSPropertyRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSPositionValue", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSPositionValue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSPerspective", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSPerspective", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSPageRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSPageRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSNumericValue", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSNumericValue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSNumericArray", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSNumericArray", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSNamespaceRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSNamespaceRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSMediaRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSMediaRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSMatrixComponent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSMatrixComponent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSMathValue", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSMathValue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSMathSum", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSMathSum", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSMathProduct", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSMathProduct", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSMathNegate", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSMathNegate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSMathMin", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSMathMin", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSMathMax", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSMathMax", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSMathInvert", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSMathInvert", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSMathClamp", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSMathClamp", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSLayerStatementRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSLayerStatementRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSLayerBlockRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSLayerBlockRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSKeywordValue", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSKeywordValue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSKeyframesRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSKeyframesRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSKeyframeRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSKeyframeRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSImportRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSImportRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSImageValue", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSImageValue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSGroupingRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSGroupingRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSFontFaceRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSFontFaceRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSCounterStyleRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSCounterStyleRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSConditionRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSConditionRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSS", {
    configurable: true,
    enumerable: false,
    writable: true, value: eval('JSON.parse(\'{"highlights":{},"paintWorklet":{}}\')')
});
dingvm.toolsFunc.defineProperty(window, "CDATASection", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CDATASection", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ByteLengthQueuingStrategy", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ByteLengthQueuingStrategy", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BroadcastChannel", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BroadcastChannel", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BlobEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BlobEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Blob", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Blob", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BiquadFilterNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BiquadFilterNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BeforeUnloadEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BeforeUnloadEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BeforeInstallPromptEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BeforeInstallPromptEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BaseAudioContext", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BaseAudioContext", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BarProp", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BarProp", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AudioWorkletNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AudioWorkletNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AudioScheduledSourceNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AudioScheduledSourceNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AudioProcessingEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AudioProcessingEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AudioParamMap", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AudioParamMap", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AudioParam", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AudioParam", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AudioNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AudioNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AudioListener", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AudioListener", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AudioDestinationNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AudioDestinationNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AudioContext", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AudioContext", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AudioBufferSourceNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AudioBufferSourceNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AudioBuffer", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AudioBuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Attr", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Attr", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AnimationEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AnimationEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AnimationEffect", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AnimationEffect", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Animation", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Animation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AnalyserNode", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AnalyserNode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AbstractRange", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AbstractRange", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AbortSignal", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AbortSignal", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AbortController", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AbortController", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "window", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "window_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "self", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "self_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "self_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "document", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "document_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "name", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "name_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "name_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "location", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "location_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "location_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "customElements", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "customElements_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "history", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "history_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "locationbar", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "locationbar_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "locationbar_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "menubar", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "menubar_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "menubar_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "personalbar", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "personalbar_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "personalbar_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "scrollbars", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "scrollbars_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "scrollbars_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "statusbar", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "statusbar_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "statusbar_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "toolbar", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "toolbar_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "toolbar_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "status", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "status_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "status_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "closed", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "closed_get", arguments, false)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "frames", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "frames_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "frames_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "length", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "length_get", arguments, 0)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "length_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "top", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "top_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "opener", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "opener_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "opener_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "parent", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "parent_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "parent_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "frameElement", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "frameElement_get", arguments, null)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "navigator", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "navigator_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "origin", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "origin_get", arguments, 'http://localhost:63342')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "origin_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "external", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "external_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "external_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "screen", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "screen_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "screen_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "innerWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "innerWidth_get", arguments, 1536)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "innerWidth_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "innerHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "innerHeight_get", arguments, 792)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "innerHeight_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "scrollX", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "scrollX_get", arguments, 0)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "scrollX_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "pageXOffset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "pageXOffset_get", arguments, 0)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "pageXOffset_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "scrollY", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "scrollY_get", arguments, 0)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "scrollY_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "pageYOffset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "pageYOffset_get", arguments, 0)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "pageYOffset_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "visualViewport", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "visualViewport_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "visualViewport_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "screenX", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "screenX_get", arguments, 0)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "screenX_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "screenY", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "screenY_get", arguments, 0)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "screenY_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "outerWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "outerWidth_get", arguments, 1536)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "outerWidth_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "outerHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "outerHeight_get", arguments, 864)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "outerHeight_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "devicePixelRatio", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "devicePixelRatio_get", arguments, 1.25)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "devicePixelRatio_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "event", {
    configurable: true,
    enumerable: false,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "event_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "event_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "clientInformation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "clientInformation_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "clientInformation_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "offscreenBuffering", {
    configurable: true,
    enumerable: false,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "offscreenBuffering_get", arguments, true)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "offscreenBuffering_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "screenLeft", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "screenLeft_get", arguments, 0)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "screenLeft_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "screenTop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "screenTop_get", arguments, 0)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "screenTop_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "defaultStatus", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "defaultStatus_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "defaultStatus_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "defaultstatus", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "defaultstatus_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "defaultstatus_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "styleMedia", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "styleMedia_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "onsearch", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onsearch_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onsearch_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "isSecureContext", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "isSecureContext_get", arguments, true)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "trustedTypes", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "trustedTypes_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "performance", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "performance_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "performance_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onappinstalled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onappinstalled_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onappinstalled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onbeforeinstallprompt", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onbeforeinstallprompt_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onbeforeinstallprompt_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "crypto", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "crypto_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "indexedDB", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "indexedDB_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "sessionStorage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "sessionStorage_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "localStorage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "localStorage_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "onbeforexrselect", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onbeforexrselect_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onbeforexrselect_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onabort", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onabort_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onabort_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onbeforeinput", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onbeforeinput_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onbeforeinput_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onblur", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onblur_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onblur_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "oncancel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oncancel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oncancel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "oncanplay", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oncanplay_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oncanplay_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "oncanplaythrough", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oncanplaythrough_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oncanplaythrough_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onclick", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onclick_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onclick_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onclose", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onclose_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onclose_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "oncontextlost", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oncontextlost_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oncontextlost_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "oncontextmenu", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oncontextmenu_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oncontextmenu_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "oncontextrestored", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oncontextrestored_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oncontextrestored_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "oncuechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oncuechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oncuechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ondblclick", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondblclick_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondblclick_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ondrag", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondrag_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondrag_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ondragend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondragend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondragend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ondragenter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondragenter_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondragenter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ondragleave", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondragleave_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondragleave_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ondragover", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondragover_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondragover_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ondragstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondragstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondragstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ondrop", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondrop_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondrop_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ondurationchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondurationchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondurationchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onemptied", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onemptied_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onemptied_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onended", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onended_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onended_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onerror_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onfocus", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onfocus_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onfocus_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onformdata", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onformdata_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onformdata_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "oninput", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oninput_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oninput_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "oninvalid", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oninvalid_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "oninvalid_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onkeydown", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onkeydown_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onkeydown_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onkeypress", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onkeypress_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onkeypress_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onkeyup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onkeyup_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onkeyup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onload", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onload_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onload_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onloadeddata", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onloadeddata_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onloadeddata_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onloadedmetadata", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onloadedmetadata_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onloadedmetadata_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onloadstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onloadstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onloadstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onmousedown", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmousedown_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmousedown_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onmouseenter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmouseenter_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmouseenter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onmouseleave", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmouseleave_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmouseleave_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onmousemove", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmousemove_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmousemove_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onmouseout", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmouseout_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmouseout_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onmouseover", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmouseover_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmouseover_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onmouseup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmouseup_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmouseup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onmousewheel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmousewheel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmousewheel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onpause", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpause_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpause_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onplay", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onplay_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onplay_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onplaying", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onplaying_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onplaying_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onprogress", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onprogress_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onprogress_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onratechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onratechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onratechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onreset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onreset_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onreset_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onresize", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onresize_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onresize_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onscroll", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onscroll_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onscroll_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onsecuritypolicyviolation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onsecuritypolicyviolation_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onsecuritypolicyviolation_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onseeked", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onseeked_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onseeked_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onseeking", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onseeking_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onseeking_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onselect", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onselect_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onselect_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onslotchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onslotchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onslotchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onstalled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onstalled_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onstalled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onsubmit", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onsubmit_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onsubmit_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onsuspend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onsuspend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onsuspend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ontimeupdate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ontimeupdate_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ontimeupdate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ontoggle", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ontoggle_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ontoggle_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onvolumechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onvolumechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onvolumechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onwaiting", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onwaiting_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onwaiting_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onwebkitanimationend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onwebkitanimationiteration", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationiteration_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationiteration_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onwebkitanimationstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onwebkitanimationstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onwebkittransitionend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onwebkittransitionend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onwebkittransitionend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onwheel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onwheel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onwheel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onauxclick", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onauxclick_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onauxclick_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ongotpointercapture", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ongotpointercapture_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ongotpointercapture_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onlostpointercapture", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onlostpointercapture_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onlostpointercapture_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onpointerdown", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointerdown_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointerdown_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onpointermove", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointermove_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointermove_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onpointerrawupdate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointerrawupdate_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointerrawupdate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onpointerup", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointerup_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointerup_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onpointercancel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointercancel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointercancel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onpointerover", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointerover_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointerover_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onpointerout", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointerout_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointerout_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onpointerenter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointerenter_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointerenter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onpointerleave", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointerleave_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpointerleave_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onselectstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onselectstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onselectstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onselectionchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onselectionchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onselectionchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onanimationend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onanimationend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onanimationend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onanimationiteration", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onanimationiteration_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onanimationiteration_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onanimationstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onanimationstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onanimationstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ontransitionrun", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ontransitionrun_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ontransitionrun_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ontransitionstart", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ontransitionstart_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ontransitionstart_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ontransitionend", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ontransitionend_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ontransitionend_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ontransitioncancel", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ontransitioncancel_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ontransitioncancel_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onafterprint", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onafterprint_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onafterprint_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onbeforeprint", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onbeforeprint_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onbeforeprint_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onbeforeunload", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onbeforeunload_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onbeforeunload_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onhashchange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onhashchange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onhashchange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onlanguagechange", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onlanguagechange_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onlanguagechange_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onmessage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmessage_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmessage_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onmessageerror", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmessageerror_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onmessageerror_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onoffline", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onoffline_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onoffline_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ononline", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ononline_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ononline_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onpagehide", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpagehide_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpagehide_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onpageshow", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpageshow_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpageshow_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onpopstate", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpopstate_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onpopstate_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onrejectionhandled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onrejectionhandled_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onrejectionhandled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onstorage", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onstorage_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onstorage_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onunhandledrejection", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onunhandledrejection_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onunhandledrejection_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "onunload", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onunload_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onunload_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "crossOriginIsolated", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "crossOriginIsolated_get", arguments, false)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "scheduler", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "scheduler_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "scheduler_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "alert", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "alert", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "atob", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "atob", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "blur", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "blur", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "btoa", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "btoa", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "cancelAnimationFrame", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "cancelAnimationFrame", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "cancelIdleCallback", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "cancelIdleCallback", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "captureEvents", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "captureEvents", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "clearInterval", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "clearInterval", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "clearTimeout", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "clearTimeout", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "close", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "close", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "confirm", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "confirm", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "createImageBitmap", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "createImageBitmap", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "fetch", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "fetch", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "find", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "find", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "focus", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "focus", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "getComputedStyle", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "getComputedStyle", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "getSelection", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "getSelection", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "matchMedia", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "matchMedia", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "moveBy", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "moveBy", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "moveTo", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "moveTo", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "open", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "open", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "postMessage", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "postMessage", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "print", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "print", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "prompt", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "prompt", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "queueMicrotask", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "queueMicrotask", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "releaseEvents", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "releaseEvents", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "reportError", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "reportError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "requestAnimationFrame", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "requestAnimationFrame", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "requestIdleCallback", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "requestIdleCallback", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "resizeBy", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "resizeBy", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "resizeTo", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "resizeTo", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "scroll", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "scroll", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "scrollBy", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "scrollBy", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "scrollTo", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "scrollTo", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "setInterval", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "setInterval", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "setTimeout", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "setTimeout", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "stop", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "stop", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "structuredClone", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "structuredClone", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "webkitCancelAnimationFrame", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "webkitCancelAnimationFrame", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "webkitRequestAnimationFrame", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "webkitRequestAnimationFrame", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Atomics", {
    configurable: true,
    enumerable: false,
    writable: true, value: eval('JSON.parse(\'{}\')')
});
dingvm.toolsFunc.defineProperty(window, "chrome", {
    configurable: false,
    enumerable: true,
    writable: true,
    value: eval('JSON.parse(\'{"app":{"isInstalled":false,"InstallState":{"DISABLED":"disabled","INSTALLED":"installed","NOT_INSTALLED":"not_installed"},"RunningState":{"CANNOT_RUN":"cannot_run","READY_TO_RUN":"ready_to_run","RUNNING":"running"}}}\')')
});
dingvm.toolsFunc.defineProperty(window, "WebAssembly", {
    configurable: true,
    enumerable: false,
    writable: true, value: eval('JSON.parse(\'{}\')')
});
dingvm.toolsFunc.defineProperty(window, "caches", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "caches_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "cookieStore", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "cookieStore_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "ondevicemotion", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondevicemotion_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondevicemotion_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ondeviceorientation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondeviceorientation_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondeviceorientation_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ondeviceorientationabsolute", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondeviceorientationabsolute_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ondeviceorientationabsolute_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "launchQueue", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "launchQueue_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "onbeforematch", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onbeforematch_get", arguments, null)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "onbeforematch_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AbsoluteOrientationSensor", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AbsoluteOrientationSensor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Accelerometer", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Accelerometer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AudioWorklet", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AudioWorklet", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BatteryManager", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BatteryManager", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Cache", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Cache", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CacheStorage", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CacheStorage", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Clipboard", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Clipboard", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ClipboardItem", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ClipboardItem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CookieChangeEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CookieChangeEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CookieStore", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CookieStore", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CookieStoreManager", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CookieStoreManager", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Credential", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Credential", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CredentialsContainer", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CredentialsContainer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CryptoKey", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CryptoKey", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DeviceMotionEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DeviceMotionEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DeviceMotionEventAcceleration", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DeviceMotionEventAcceleration", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DeviceMotionEventRotationRate", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DeviceMotionEventRotationRate", arguments)
    }
});dingvm.toolsFunc.defineProperty(window, "DeviceOrientationEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DeviceOrientationEvent", arguments)
    }
});

dingvm.toolsFunc.defineProperty(window, "FederatedCredential", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FederatedCredential", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "GravitySensor", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "GravitySensor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Gyroscope", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Gyroscope", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Keyboard", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Keyboard", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "KeyboardLayoutMap", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "KeyboardLayoutMap", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "LinearAccelerationSensor", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "LinearAccelerationSensor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Lock", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Lock", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "LockManager", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "LockManager", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MIDIAccess", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MIDIAccess", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MIDIConnectionEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MIDIConnectionEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MIDIInput", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MIDIInput", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MIDIInputMap", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MIDIInputMap", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MIDIMessageEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MIDIMessageEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MIDIOutput", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MIDIOutput", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MIDIOutputMap", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MIDIOutputMap", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MIDIPort", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MIDIPort", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaDeviceInfo", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaDeviceInfo", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaDevices", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaDevices", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaKeyMessageEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaKeyMessageEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaKeySession", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaKeySession", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaKeyStatusMap", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaKeyStatusMap", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaKeySystemAccess", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaKeySystemAccess", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaKeys", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaKeys", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "NavigationPreloadManager", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "NavigationPreloadManager", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "NavigatorManagedData", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "NavigatorManagedData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "OrientationSensor", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "OrientationSensor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PasswordCredential", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PasswordCredential", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RTCIceTransport", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RTCIceTransport", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RelativeOrientationSensor", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RelativeOrientationSensor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Sensor", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Sensor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SensorErrorEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SensorErrorEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ServiceWorker", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ServiceWorker", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ServiceWorkerContainer", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ServiceWorkerContainer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ServiceWorkerRegistration", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ServiceWorkerRegistration", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "StorageManager", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "StorageManager", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SubtleCrypto", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SubtleCrypto", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "VirtualKeyboard", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "VirtualKeyboard", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebTransport", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebTransport", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebTransportBidirectionalStream", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebTransportBidirectionalStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebTransportDatagramDuplexStream", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebTransportDatagramDuplexStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WebTransportError", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WebTransportError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Worklet", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Worklet", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRDOMOverlayState", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRDOMOverlayState", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRLayer", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRLayer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRWebGLBinding", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRWebGLBinding", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AudioData", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AudioData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "EncodedAudioChunk", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "EncodedAudioChunk", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "EncodedVideoChunk", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "EncodedVideoChunk", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ImageTrack", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ImageTrack", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ImageTrackList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ImageTrackList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "VideoColorSpace", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "VideoColorSpace", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "VideoFrame", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "VideoFrame", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AudioDecoder", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AudioDecoder", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AudioEncoder", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AudioEncoder", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ImageDecoder", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ImageDecoder", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "VideoDecoder", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "VideoDecoder", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "VideoEncoder", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "VideoEncoder", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AuthenticatorAssertionResponse", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AuthenticatorAssertionResponse", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AuthenticatorAttestationResponse", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AuthenticatorAttestationResponse", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AuthenticatorResponse", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AuthenticatorResponse", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PublicKeyCredential", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PublicKeyCredential", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Bluetooth", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Bluetooth", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BluetoothCharacteristicProperties", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BluetoothCharacteristicProperties", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BluetoothDevice", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BluetoothDevice", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BluetoothRemoteGATTCharacteristic", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BluetoothRemoteGATTCharacteristic", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BluetoothRemoteGATTDescriptor", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BluetoothRemoteGATTDescriptor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BluetoothRemoteGATTServer", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BluetoothRemoteGATTServer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BluetoothRemoteGATTService", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BluetoothRemoteGATTService", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "EyeDropper", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "EyeDropper", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "FileSystemDirectoryHandle", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FileSystemDirectoryHandle", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "FileSystemFileHandle", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FileSystemFileHandle", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "FileSystemHandle", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FileSystemHandle", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "FileSystemWritableFileStream", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FileSystemWritableFileStream", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "FontData", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FontData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "FragmentDirective", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "FragmentDirective", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HID", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HID", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HIDConnectionEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HIDConnectionEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HIDDevice", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HIDDevice", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HIDInputReportEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HIDInputReportEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "IdleDetector", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "IdleDetector", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "LaunchParams", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "LaunchParams", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "LaunchQueue", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "LaunchQueue", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "OTPCredential", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "OTPCredential", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PaymentAddress", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PaymentAddress", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PaymentRequest", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PaymentRequest", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PaymentResponse", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PaymentResponse", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PaymentMethodChangeEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PaymentMethodChangeEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Presentation", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Presentation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PresentationAvailability", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PresentationAvailability", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PresentationConnection", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PresentationConnection", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PresentationConnectionAvailableEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PresentationConnectionAvailableEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PresentationConnectionCloseEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PresentationConnectionCloseEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PresentationConnectionList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PresentationConnectionList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PresentationReceiver", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PresentationReceiver", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PresentationRequest", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PresentationRequest", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Sanitizer", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Sanitizer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ScreenDetailed", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ScreenDetailed", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "ScreenDetails", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "ScreenDetails", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Serial", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Serial", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SerialPort", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SerialPort", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "USB", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "USB", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "USBAlternateInterface", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "USBAlternateInterface", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "USBConfiguration", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "USBConfiguration", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "USBConnectionEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "USBConnectionEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "USBDevice", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "USBDevice", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "USBEndpoint", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "USBEndpoint", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "USBInTransferResult", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "USBInTransferResult", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "USBInterface", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "USBInterface", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "USBIsochronousInTransferPacket", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "USBIsochronousInTransferPacket", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "USBIsochronousInTransferResult", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "USBIsochronousInTransferResult", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "USBIsochronousOutTransferPacket", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "USBIsochronousOutTransferPacket", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "USBIsochronousOutTransferResult", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "USBIsochronousOutTransferResult", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "USBOutTransferResult", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "USBOutTransferResult", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WakeLock", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WakeLock", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WakeLockSentinel", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WakeLockSentinel", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WindowControlsOverlay", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WindowControlsOverlay", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "WindowControlsOverlayGeometryChangeEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "WindowControlsOverlayGeometryChangeEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRAnchor", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRAnchor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRAnchorSet", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRAnchorSet", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRBoundedReferenceSpace", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRBoundedReferenceSpace", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRFrame", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRFrame", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRInputSource", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRInputSource", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRInputSourceArray", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRInputSourceArray", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRInputSourceEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRInputSourceEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRInputSourcesChangeEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRInputSourcesChangeEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRPose", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRPose", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRReferenceSpace", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRReferenceSpace", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRReferenceSpaceEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRReferenceSpaceEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRRenderState", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRRenderState", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRRigidTransform", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRRigidTransform", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRSession", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRSession", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRSessionEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRSessionEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRSpace", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRSpace", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRSystem", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRSystem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRView", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRView", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRViewerPose", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRViewerPose", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRViewport", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRViewport", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRWebGLLayer", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRWebGLLayer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRCPUDepthInformation", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRCPUDepthInformation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRDepthInformation", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRDepthInformation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRWebGLDepthInformation", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRWebGLDepthInformation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRCamera", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRCamera", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRHitTestResult", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRHitTestResult", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRHitTestSource", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRHitTestSource", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRRay", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRRay", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRTransientInputHitTestResult", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRTransientInputHitTestResult", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRTransientInputHitTestSource", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRTransientInputHitTestSource", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRLightEstimate", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRLightEstimate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "XRLightProbe", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "XRLightProbe", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "getScreenDetails", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "getScreenDetails", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "queryLocalFonts", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "queryLocalFonts", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "showDirectoryPicker", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "showDirectoryPicker", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "showOpenFilePicker", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "showOpenFilePicker", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "showSaveFilePicker", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "showSaveFilePicker", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "originAgentCluster", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "originAgentCluster_get", arguments, false)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "navigation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "navigation_get", arguments)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "navigation_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "webkitStorageInfo", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "webkitStorageInfo_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "speechSynthesis", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "speechSynthesis_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(window, "AnimationPlaybackEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AnimationPlaybackEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "AnimationTimeline", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "AnimationTimeline", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSAnimation", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSAnimation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSTransition", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSTransition", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DocumentTimeline", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DocumentTimeline", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BackgroundFetchManager", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BackgroundFetchManager", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BackgroundFetchRecord", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BackgroundFetchRecord", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BackgroundFetchRegistration", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BackgroundFetchRegistration", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BluetoothUUID", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BluetoothUUID", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "BrowserCaptureMediaStreamTrack", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "BrowserCaptureMediaStreamTrack", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CropTarget", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CropTarget", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSContainerRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSContainerRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "CSSFontPaletteValuesRule", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "CSSFontPaletteValuesRule", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "DelegatedInkTrailPresenter", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "DelegatedInkTrailPresenter", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Ink", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Ink", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Highlight", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Highlight", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "HighlightRegistry", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "HighlightRegistry", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaMetadata", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaMetadata", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaSession", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaSession", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaSource", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaSource", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SourceBuffer", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SourceBuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SourceBufferList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SourceBufferList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaStreamTrack", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaStreamTrack", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "MediaStreamTrackGenerator", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "MediaStreamTrackGenerator", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "NavigateEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "NavigateEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Navigation", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Navigation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "NavigationCurrentEntryChangeEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "NavigationCurrentEntryChangeEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "NavigationDestination", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "NavigationDestination", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "NavigationHistoryEntry", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "NavigationHistoryEntry", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "NavigationTransition", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "NavigationTransition", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "NavigatorUAData", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "NavigatorUAData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Notification", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Notification", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PaymentInstruments", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PaymentInstruments", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PaymentManager", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PaymentManager", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PaymentRequestUpdateEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PaymentRequestUpdateEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PeriodicSyncManager", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PeriodicSyncManager", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PermissionStatus", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PermissionStatus", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "Permissions", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "Permissions", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PictureInPictureEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PictureInPictureEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PictureInPictureWindow", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PictureInPictureWindow", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PushManager", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PushManager", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PushSubscription", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PushSubscription", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "PushSubscriptionOptions", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "PushSubscriptionOptions", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "RemotePlayback", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "RemotePlayback", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SharedWorker", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SharedWorker", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SpeechSynthesisErrorEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SpeechSynthesisErrorEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SpeechSynthesisEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SpeechSynthesisEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "SpeechSynthesisUtterance", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "SpeechSynthesisUtterance", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "VideoPlaybackQuality", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "VideoPlaybackQuality", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "webkitSpeechGrammar", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "webkitSpeechGrammar", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "webkitSpeechGrammarList", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "webkitSpeechGrammarList", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "webkitSpeechRecognition", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "webkitSpeechRecognition", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "webkitSpeechRecognitionError", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "webkitSpeechRecognitionError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "webkitSpeechRecognitionEvent", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "webkitSpeechRecognitionEvent", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "openDatabase", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "openDatabase", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "webkitRequestFileSystem", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "webkitRequestFileSystem", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "webkitResolveLocalFileSystemURL", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "webkitResolveLocalFileSystemURL", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "a", {
    configurable: true,
    enumerable: true,
    writable: true, value: eval('JSON.parse(\'{}\')')
});
dingvm.toolsFunc.defineProperty(window, "aa", {
    configurable: true,
    enumerable: true,
    writable: true, value: eval('JSON.parse(\'["font-family:jiejie","shushu=love"]\')')
});
dingvm.toolsFunc.defineProperty(window, "xhr", {
    configurable: true,
    enumerable: true,
    writable: true, value: eval('JSON.parse(\'{}\')')
});
dingvm.toolsFunc.defineProperty(window, "getProtoEnvCode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "getProtoEnvCode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "getObjEnvCode", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "getObjEnvCode", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "getDescriptor", {
    configurable: true,
    enumerable: true,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "getDescriptor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "dir", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "dir", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "dirxml", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "dirxml", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "profile", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "profile", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "profileEnd", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "profileEnd", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "clear", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "clear", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "table", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "table", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "keys", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "keys", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "values", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "values", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "debug", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "debug", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "undebug", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "undebug", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "monitor", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "monitor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "unmonitor", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "unmonitor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "inspect", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "inspect", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "copy", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "copy", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "queryObjects", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "queryObjects", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "$_", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "$_", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "$0", {
    configurable: true,
    enumerable: false,
    writable: true, value: eval('JSON.parse(\'{}\')')
});
dingvm.toolsFunc.defineProperty(window, "$1", {
    configurable: true,
    enumerable: false,
    writable: true, value: eval('JSON.parse(\'{}\')')
});
dingvm.toolsFunc.defineProperty(window, "$2", {
    configurable: true,
    enumerable: false,
    writable: true, value: eval('JSON.parse(\'{}\')')
});
dingvm.toolsFunc.defineProperty(window, "$3", {
    configurable: true,
    enumerable: false,
    writable: true, value: eval('JSON.parse(\'{}\')')
});
dingvm.toolsFunc.defineProperty(window, "$4", {
    configurable: true,
    enumerable: false,
    writable: true, value: eval('JSON.parse(\'{}\')')
});
dingvm.toolsFunc.defineProperty(window, "getEventListeners", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "getEventListeners", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "getAccessibleName", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "getAccessibleName", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "getAccessibleRole", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "getAccessibleRole", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "monitorEvents", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "monitorEvents", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "unmonitorEvents", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "unmonitorEvents", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "$", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "$", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "$$", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "$$", arguments)
    }
});
dingvm.toolsFunc.defineProperty(window, "$x", {
    configurable: true,
    enumerable: false,
    writable: true, value: function () {
        return dingvm.toolsFunc.dispatch(this, window, "window", "$x", arguments)
    }
});
