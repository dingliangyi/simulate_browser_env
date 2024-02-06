dingvm.envFunc.HTMLCanvasElementProto_height_get = function HTMLCanvasElementProto_height_get() {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'height')
};
dingvm.envFunc.HTMLCanvasElementProto_height_set = function HTMLCanvasElementProto_height_set(value) {
    // return dingvm.toolsFunc.setProtoArr.call(this, 'height', value)
    this.jquery.canvas.height = value
};
dingvm.envFunc.HTMLCanvasElementProto_width_get = function HTMLCanvasElementProto_width_get() {
    return dingvm.toolsFunc.get_protoOwnAttr.call(this, 'width')
};
dingvm.envFunc.HTMLCanvasElementProto_width_set = function HTMLCanvasElementProto_width_set(value) {
    // return dingvm.toolsFunc.setProtoArr.call(this, 'width', value)
    this.jquery.canvas.width = value
};
dingvm.envFunc.HTMLCanvasElementProto_getContext = function HTMLCanvasElementProto_getContext(contextType) {
    // debugger
    if (!['2d', 'webgl', 'experimental-webgl', 'webgl2', 'experimental-webgl2', 'bitmaprenderer'].includes(contextType)) {
        return null
    }

    //设置不支持
    if (['experimental-webgl'].includes(contextType)) {
        return null
    }

    let context = {}
    switch (contextType) {
        case '2d':
            context.getedContext = this.jquery.canvas.getContext('2d')
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
dingvm.envFunc.HTMLCanvasElementProto_toDataURL = function HTMLCanvasElementProto_toDataURL() {
    // debugger
    // console.log(this.jquery.canvas.toDataURL())
    function canvasFingerprintNoisify(context2d) {
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

    canvasFingerprintNoisify(this.jquery.canvas.getContext("2d"))

    return this.jquery.canvas.toDataURL()
};