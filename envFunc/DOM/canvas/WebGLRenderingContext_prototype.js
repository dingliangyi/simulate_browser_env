dingvm.envFunc.WebGLRenderingContextProto_createBuffer = function () {
    let buffer = {}
    // buffer.myBuffer = this.getedContext.createBuffer.apply(this.getedContext, arguments)
    Object.setPrototypeOf(buffer, WebGLBuffer.prototype)

    if (dingvm.config.proxy_tag_canvas) {
        buffer = dingvm.toolsFunc.createProxyObj(buffer, 'WebGLRenderingContext_createBuffer')
    }

    // return buffer
    return this.getedContext.createBuffer.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_bindBuffer = function () {
    return this.getedContext.bindBuffer.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_bufferData = function () {
    arguments[1].map(function (item, index, array) {
        array[index] = item + _.random(0.25, floating = true)
    })

    return this.getedContext.bufferData.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_createProgram = function () {
    let webGLProgram = {}
    // webGLProgram.myCreateProgram = this.getedContext.createProgram.apply(this.getedContext, arguments)
    Object.setPrototypeOf(webGLProgram, WebGLProgram.prototype)

    if (dingvm.config.proxy_tag_canvas) {
        webGLProgram = dingvm.toolsFunc.createProxyObj(webGLProgram, 'WebGLRenderingContext_createProgram')
    }

    // return webGLProgram
    return this.getedContext.createProgram.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_canvas_get = function () {
    return dingvm.toolsFunc.getProtoArr.call(this, 'canvas')
};
dingvm.envFunc.WebGLRenderingContextProto_getExtension = function () {
    return this.getedContext.getExtension.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_createShader = function () {
    return this.getedContext.createShader.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_shaderSource = function () {
    return this.getedContext.shaderSource.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_compileShader = function () {
    return this.getedContext.compileShader.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_attachShader = function () {
    return this.getedContext.attachShader.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_linkProgram = function () {
    return this.getedContext.linkProgram.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_useProgram = function () {
    return this.getedContext.useProgram.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_getSupportedExtensions = function () {
    return this.getedContext.getSupportedExtensions.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_getParameter = function () {
    let typeInt = arguments[0]
    if (typeInt === 7937) {
        let array = [
            "ANGLE (NVIDIA, NVIDIA GeForce RTX 3080 Direct3D11 vs_5_0 ps_5_0, D3D11)",
            "ANGLE (NVIDIA, NVIDIA GeForce RTX 3070 Direct3D11 vs_5_0 ps_5_0, D3D11)",
            "ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 Direct3D11 vs_5_0 ps_5_0, D3D11)",
            "ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)",
            "ANGLE (OpenGL ES 2.0 emulation, SwiftShader)",
            "ANGLE (Intel(R) UHD Graphics 630 Direct3D11 vs_5_0 ps_5_0)",
            "ANGLE (NVIDIA Quadro K420 Direct3D11 vs_5_0 ps_5_0)",
            "ANGLE (NVIDIA GeForce GTX 970 Direct3D11 vs_5_0 ps_5_0)",
            "ANGLE (Intel(R) HD Graphics Direct3D11 vs_5_0 ps_5_0)",
            "ANGLE (AMD Radeon(TM) R6 Graphics Direct3D11 vs_5_0 ps_5_0)",
            "ANGLE (AMD Radeon R9 200 Series Direct3D11 vs_5_0 ps_5_0)",
            "SwiftShader",
            "GDI Generic",
            "ANGLE (Google Inc., OpenGL ES 2.0 (ANGLE 2.1.0.53ea533f79a7))"
        ]
        return array[_.random(array.length, false)]
    }
    return this.getedContext.getParameter.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_clearColor = function () {
    return this.getedContext.clearColor.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_enable = function () {
    return this.getedContext.enable.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_depthFunc = function () {
    return this.getedContext.enable.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_clear = function () {
    return this.getedContext.clear.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_getAttribLocation = function () {
    return this.getedContext.getAttribLocation.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_getUniformLocation = function () {
    return this.getedContext.getUniformLocation.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_enableVertexAttribArray = function () {
    return this.getedContext.enableVertexAttribArray.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_vertexAttribPointer = function () {
    return this.getedContext.vertexAttribPointer.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_uniform2f = function () {
    return this.getedContext.uniform2f.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_drawArrays = function () {
    return this.getedContext.drawArrays.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_getContextAttributes = function () {
    return this.getedContext.getContextAttributes.apply(this.getedContext, arguments)
};
dingvm.envFunc.WebGLRenderingContextProto_getShaderPrecisionFormat = function () {
    return this.getedContext.getShaderPrecisionFormat.apply(this.getedContext, arguments)
};