dingvm.envFunc.HTMLCanvasElementProto_height_get = function () {
    // return this.jquery.canvas.height
    return 50
};
dingvm.envFunc.HTMLCanvasElementProto_height_set = function (value) {
    // this.jquery.canvas.height = value
};
dingvm.envFunc.HTMLCanvasElementProto_width_get = function () {
    // return this.jquery.canvas.width
    return 200
};
dingvm.envFunc.HTMLCanvasElementProto_width_set = function (value) {
    // this.jquery.canvas.width = value
};
dingvm.envFunc.HTMLCanvasElementProto_getContext = function (contextType) {
    // debugger
    if (!['2d', 'webgl', 'experimental-webgl', 'webgl2', 'experimental-webgl2', 'bitmaprenderer'].includes(contextType)) {
        return null
    }

    //设置不支持
    if (['experimental-webgl'].includes(contextType)) {
        return null
    }

    let context = {}
    switch (contextType.toLowerCase()) {
        case '2d':
            // context.getedContext = this.jquery.canvas.getContext('2d')
            Object.setPrototypeOf(context, CanvasRenderingContext2D.prototype)
            dingvm.toolsFunc.setProtoArr.call(this, 'type', '2d')
            dingvm.toolsFunc.setProtoArr.call(context, 'canvas', this)
            break
        case 'webgl':
            // context.getedContext = this.jquery.canvas.getContext('webgl')
            // context.getedContext = require('gl')(300, 150, {preserveDrawingBuffer: true});
            context.getedContext = getContextWebgl(300, 150, {preserveDrawingBuffer: true});
            Object.setPrototypeOf(context, WebGLRenderingContext.prototype)
            dingvm.toolsFunc.setProtoArr.call(this, 'type', 'webgl')
            dingvm.toolsFunc.setProtoArr.call(context, 'canvas', this)
            break
        default:
            console.log(`HTMLCanvasElementProto_getContext未实现其上下文类型${contextType}`)
            debugger
    }

    if (dingvm.config.proxy_tag_canvas) {
        context = dingvm.toolsFunc.createProxyObj(context, 'canvas_context')
    }

    return context
};
dingvm.envFunc.HTMLCanvasElementProto_toDataURL = function () {
    // debugger

    function canvasFingerprintNoise(context2d) {
        const shift = {
            'r': Math.floor(Math.random() * 10),
            'g': Math.floor(Math.random() * 10),
            'b': Math.floor(Math.random() * 10),
            'a': Math.floor(Math.random() * 10)
        }
        const width = context2d.canvas.width
        const height = context2d.canvas.height
        const imageData = context2d.getImageData.apply(context2d, [0, 0, width, height])
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (Math.random() > 0.90) {
                    const n = ((i * (width * 4)) + (j * 4))
                    imageData.data[n] = imageData.data[n] + shift.r
                    imageData.data[n + 1] = imageData.data[n + 1] + shift.g
                    imageData.data[n + 2] = imageData.data[n + 2] + shift.b
                    imageData.data[n + 3] = imageData.data[n + 3] + shift.a
                }
            }
        }
    }

    // canvasFingerprintNoise(this.jquery.canvas.getContext("2d"))

    // return this.jquery.canvas.toDataURL()

    let data_base64 = 'data:image/png;base64,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'

    return data_base64
};