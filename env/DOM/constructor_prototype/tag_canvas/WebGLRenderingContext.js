// WebGLRenderingContext对象
WebGLRenderingContext = function WebGLRenderingContext() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(WebGLRenderingContext, "WebGLRenderingContext");
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_BUFFER_BIT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 256
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BUFFER_BIT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1024
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_BUFFER_BIT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 16384
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "POINTS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "LINES", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "LINE_LOOP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "LINE_STRIP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TRIANGLES", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 4
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TRIANGLE_STRIP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TRIANGLE_FAN", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ZERO", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SRC_COLOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 768
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_SRC_COLOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 769
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SRC_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 770
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_SRC_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 771
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DST_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 772
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_DST_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 773
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DST_COLOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 774
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_DST_COLOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 775
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SRC_ALPHA_SATURATE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 776
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FUNC_ADD", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32774
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_EQUATION", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32777
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_EQUATION_RGB", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32777
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_EQUATION_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34877
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FUNC_SUBTRACT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32778
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FUNC_REVERSE_SUBTRACT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32779
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_DST_RGB", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32968
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_SRC_RGB", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32969
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_DST_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32970
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_SRC_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32971
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "CONSTANT_COLOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32769
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_CONSTANT_COLOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32770
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "CONSTANT_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32771
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ONE_MINUS_CONSTANT_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32772
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND_COLOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32773
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ARRAY_BUFFER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34962
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ELEMENT_ARRAY_BUFFER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34963
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ARRAY_BUFFER_BINDING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34964
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ELEMENT_ARRAY_BUFFER_BINDING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34965
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STREAM_DRAW", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35040
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STATIC_DRAW", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35044
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DYNAMIC_DRAW", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35048
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BUFFER_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34660
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BUFFER_USAGE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34661
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "CURRENT_VERTEX_ATTRIB", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34342
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FRONT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1028
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BACK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1029
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FRONT_AND_BACK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1032
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_2D", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3553
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "CULL_FACE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2884
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BLEND", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3042
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DITHER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3024
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_TEST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2960
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_TEST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2929
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SCISSOR_TEST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3089
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "POLYGON_OFFSET_FILL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32823
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_ALPHA_TO_COVERAGE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32926
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_COVERAGE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32928
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "NO_ERROR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_ENUM", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1280
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_VALUE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1281
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_OPERATION", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1282
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "OUT_OF_MEMORY", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1285
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "CW", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2304
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "CCW", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2305
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "LINE_WIDTH", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2849
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ALIASED_POINT_SIZE_RANGE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33901
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ALIASED_LINE_WIDTH_RANGE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33902
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "CULL_FACE_MODE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2885
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FRONT_FACE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2886
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_RANGE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2928
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_WRITEMASK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2930
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_CLEAR_VALUE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2931
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_FUNC", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2932
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_CLEAR_VALUE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2961
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_FUNC", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2962
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_FAIL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2964
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_PASS_DEPTH_FAIL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2965
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_PASS_DEPTH_PASS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2966
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_REF", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2967
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_VALUE_MASK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2963
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_WRITEMASK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2968
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_FUNC", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34816
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_FAIL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34817
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_PASS_DEPTH_FAIL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34818
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_PASS_DEPTH_PASS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34819
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_REF", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36003
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_VALUE_MASK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36004
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BACK_WRITEMASK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36005
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "VIEWPORT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2978
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SCISSOR_BOX", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3088
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_CLEAR_VALUE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3106
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_WRITEMASK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3107
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_ALIGNMENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3317
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "PACK_ALIGNMENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3333
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_TEXTURE_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3379
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VIEWPORT_DIMS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3386
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SUBPIXEL_BITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3408
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RED_BITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3410
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "GREEN_BITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3411
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BLUE_BITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3412
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ALPHA_BITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3413
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_BITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3414
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_BITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3415
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "POLYGON_OFFSET_UNITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 10752
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "POLYGON_OFFSET_FACTOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32824
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_BINDING_2D", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32873
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_BUFFERS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32936
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLES", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32937
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_COVERAGE_VALUE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32938
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLE_COVERAGE_INVERT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32939
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "COMPRESSED_TEXTURE_FORMATS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34467
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DONT_CARE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 4352
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FASTEST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 4353
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "NICEST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 4354
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "GENERATE_MIPMAP_HINT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33170
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BYTE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5120
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_BYTE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5121
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SHORT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5122
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5123
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "INT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5124
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_INT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5125
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5126
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_COMPONENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6402
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6406
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RGB", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6407
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RGBA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6408
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "LUMINANCE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6409
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "LUMINANCE_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6410
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT_4_4_4_4", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32819
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT_5_5_5_1", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32820
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "UNSIGNED_SHORT_5_6_5", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33635
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAGMENT_SHADER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35632
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_SHADER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35633
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VERTEX_ATTRIBS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34921
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VERTEX_UNIFORM_VECTORS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36347
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VARYING_VECTORS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36348
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35661
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35660
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_TEXTURE_IMAGE_UNITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34930
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_FRAGMENT_UNIFORM_VECTORS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36349
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SHADER_TYPE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35663
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DELETE_STATUS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35712
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "LINK_STATUS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35714
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "VALIDATE_STATUS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35715
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ATTACHED_SHADERS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35717
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ACTIVE_UNIFORMS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35718
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ACTIVE_ATTRIBUTES", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35721
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SHADING_LANGUAGE_VERSION", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35724
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "CURRENT_PROGRAM", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35725
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "NEVER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 512
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "LESS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 513
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "EQUAL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 514
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "LEQUAL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 515
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "GREATER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 516
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "NOTEQUAL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 517
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "GEQUAL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 518
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ALWAYS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 519
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "KEEP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7680
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "REPLACE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7681
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "INCR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7682
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DECR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7683
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "INVERT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5386
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "INCR_WRAP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34055
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DECR_WRAP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34056
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "VENDOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7936
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7937
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "VERSION", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7938
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "NEAREST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 9728
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "LINEAR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 9729
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "NEAREST_MIPMAP_NEAREST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 9984
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "LINEAR_MIPMAP_NEAREST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 9985
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "NEAREST_MIPMAP_LINEAR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 9986
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "LINEAR_MIPMAP_LINEAR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 9987
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_MAG_FILTER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 10240
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_MIN_FILTER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 10241
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_WRAP_S", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 10242
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_WRAP_T", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 10243
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5890
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34067
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_BINDING_CUBE_MAP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34068
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_POSITIVE_X", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34069
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_NEGATIVE_X", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34070
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_POSITIVE_Y", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34071
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_NEGATIVE_Y", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34072
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_POSITIVE_Z", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34073
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE_CUBE_MAP_NEGATIVE_Z", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34074
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_CUBE_MAP_TEXTURE_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34076
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE0", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33984
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE1", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33985
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE2", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33986
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE3", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33987
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE4", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33988
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE5", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33989
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE6", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33990
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE7", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33991
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE8", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33992
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE9", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33993
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE10", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33994
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE11", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33995
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE12", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33996
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE13", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33997
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE14", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33998
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE15", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33999
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE16", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34000
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE17", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34001
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE18", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34002
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE19", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34003
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE20", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34004
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE21", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34005
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE22", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34006
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE23", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34007
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE24", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34008
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE25", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34009
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE26", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34010
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE27", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34011
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE28", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34012
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE29", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34013
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE30", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34014
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "TEXTURE31", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34015
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "ACTIVE_TEXTURE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34016
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "REPEAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 10497
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "CLAMP_TO_EDGE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33071
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "MIRRORED_REPEAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33648
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_VEC2", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35664
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_VEC3", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35665
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_VEC4", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35666
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "INT_VEC2", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35667
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "INT_VEC3", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35668
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "INT_VEC4", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35669
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35670
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL_VEC2", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35671
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL_VEC3", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35672
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BOOL_VEC4", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35673
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_MAT2", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35674
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_MAT3", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35675
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FLOAT_MAT4", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35676
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLER_2D", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35678
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "SAMPLER_CUBE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35680
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_ENABLED", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34338
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34339
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_STRIDE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34340
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_TYPE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34341
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_NORMALIZED", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34922
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_POINTER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34373
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34975
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "IMPLEMENTATION_COLOR_READ_TYPE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35738
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "IMPLEMENTATION_COLOR_READ_FORMAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35739
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "COMPILE_STATUS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35713
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "LOW_FLOAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36336
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "MEDIUM_FLOAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36337
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "HIGH_FLOAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36338
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "LOW_INT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36339
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "MEDIUM_INT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36340
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "HIGH_INT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36341
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36160
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36161
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RGBA4", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32854
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RGB5_A1", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32855
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RGB565", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36194
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_COMPONENT16", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33189
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_INDEX8", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36168
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_STENCIL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34041
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_WIDTH", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36162
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_HEIGHT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36163
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_INTERNAL_FORMAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36164
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_RED_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36176
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_GREEN_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36177
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_BLUE_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36178
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_ALPHA_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36179
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_DEPTH_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36180
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_STENCIL_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36181
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36048
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36049
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36050
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36051
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "COLOR_ATTACHMENT0", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36064
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_ATTACHMENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36096
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "STENCIL_ATTACHMENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36128
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "DEPTH_STENCIL_ATTACHMENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33306
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "NONE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_COMPLETE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36053
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36054
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36055
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36057
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_UNSUPPORTED", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36061
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "FRAMEBUFFER_BINDING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36006
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "RENDERBUFFER_BINDING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36007
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "MAX_RENDERBUFFER_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34024
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "INVALID_FRAMEBUFFER_OPERATION", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1286
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_FLIP_Y_WEBGL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 37440
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 37441
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "CONTEXT_LOST_WEBGL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 37442
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "UNPACK_COLORSPACE_CONVERSION_WEBGL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 37443
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext, "BROWSER_DEFAULT_WEBGL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 37444
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "canvas", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "canvas_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawingBufferWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "drawingBufferWidth_get", arguments, 300)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawingBufferHeight", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "drawingBufferHeight_get", arguments, 150)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawingBufferColorSpace", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "drawingBufferColorSpace_get", arguments, 'srgb')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "drawingBufferColorSpace_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "unpackColorSpace", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "unpackColorSpace_get", arguments, 'srgb')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "unpackColorSpace_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_BUFFER_BIT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 256
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BUFFER_BIT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1024
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_BUFFER_BIT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 16384
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POINTS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINES", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINE_LOOP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINE_STRIP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TRIANGLES", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 4
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TRIANGLE_STRIP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TRIANGLE_FAN", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ZERO", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SRC_COLOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 768
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_SRC_COLOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 769
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SRC_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 770
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_SRC_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 771
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DST_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 772
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_DST_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 773
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DST_COLOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 774
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_DST_COLOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 775
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SRC_ALPHA_SATURATE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 776
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FUNC_ADD", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32774
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_EQUATION", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32777
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_EQUATION_RGB", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32777
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_EQUATION_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34877
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FUNC_SUBTRACT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32778
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FUNC_REVERSE_SUBTRACT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32779
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_DST_RGB", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32968
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_SRC_RGB", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32969
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_DST_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32970
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_SRC_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32971
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CONSTANT_COLOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32769
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_CONSTANT_COLOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32770
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CONSTANT_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32771
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ONE_MINUS_CONSTANT_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32772
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND_COLOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32773
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ARRAY_BUFFER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34962
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ELEMENT_ARRAY_BUFFER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34963
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ARRAY_BUFFER_BINDING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34964
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ELEMENT_ARRAY_BUFFER_BINDING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34965
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STREAM_DRAW", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35040
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STATIC_DRAW", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35044
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DYNAMIC_DRAW", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35048
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BUFFER_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34660
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BUFFER_USAGE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34661
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CURRENT_VERTEX_ATTRIB", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34342
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRONT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1028
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BACK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1029
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRONT_AND_BACK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1032
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_2D", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3553
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CULL_FACE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2884
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLEND", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3042
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DITHER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3024
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_TEST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2960
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_TEST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2929
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SCISSOR_TEST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3089
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POLYGON_OFFSET_FILL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32823
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_ALPHA_TO_COVERAGE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32926
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_COVERAGE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32928
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NO_ERROR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_ENUM", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1280
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_VALUE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1281
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_OPERATION", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1282
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "OUT_OF_MEMORY", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1285
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CW", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2304
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CCW", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2305
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINE_WIDTH", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2849
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALIASED_POINT_SIZE_RANGE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33901
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALIASED_LINE_WIDTH_RANGE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33902
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CULL_FACE_MODE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2885
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRONT_FACE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2886
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_RANGE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2928
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_WRITEMASK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2930
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_CLEAR_VALUE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2931
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_FUNC", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2932
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_CLEAR_VALUE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2961
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_FUNC", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2962
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_FAIL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2964
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_PASS_DEPTH_FAIL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2965
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_PASS_DEPTH_PASS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2966
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_REF", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2967
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_VALUE_MASK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2963
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_WRITEMASK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2968
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_FUNC", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34816
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_FAIL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34817
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_PASS_DEPTH_FAIL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34818
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_PASS_DEPTH_PASS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34819
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_REF", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36003
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_VALUE_MASK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36004
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BACK_WRITEMASK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36005
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VIEWPORT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 2978
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SCISSOR_BOX", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3088
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_CLEAR_VALUE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3106
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_WRITEMASK", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3107
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_ALIGNMENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3317
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "PACK_ALIGNMENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3333
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_TEXTURE_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3379
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VIEWPORT_DIMS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3386
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SUBPIXEL_BITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3408
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RED_BITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3410
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GREEN_BITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3411
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BLUE_BITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3412
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALPHA_BITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3413
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_BITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3414
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_BITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 3415
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POLYGON_OFFSET_UNITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 10752
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "POLYGON_OFFSET_FACTOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32824
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_BINDING_2D", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32873
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_BUFFERS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32936
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLES", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32937
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_COVERAGE_VALUE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32938
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLE_COVERAGE_INVERT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32939
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COMPRESSED_TEXTURE_FORMATS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34467
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DONT_CARE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 4352
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FASTEST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 4353
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NICEST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 4354
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GENERATE_MIPMAP_HINT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33170
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BYTE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5120
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_BYTE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5121
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SHORT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5122
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5123
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5124
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_INT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5125
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5126
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_COMPONENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6402
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6406
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGB", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6407
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGBA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6408
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LUMINANCE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6409
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LUMINANCE_ALPHA", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 6410
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT_4_4_4_4", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32819
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT_5_5_5_1", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32820
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNSIGNED_SHORT_5_6_5", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33635
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAGMENT_SHADER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35632
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_SHADER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35633
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VERTEX_ATTRIBS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34921
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VERTEX_UNIFORM_VECTORS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36347
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VARYING_VECTORS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36348
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35661
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35660
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_TEXTURE_IMAGE_UNITS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34930
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_FRAGMENT_UNIFORM_VECTORS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36349
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SHADER_TYPE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35663
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DELETE_STATUS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35712
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINK_STATUS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35714
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VALIDATE_STATUS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35715
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ATTACHED_SHADERS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35717
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ACTIVE_UNIFORMS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35718
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ACTIVE_ATTRIBUTES", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35721
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SHADING_LANGUAGE_VERSION", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35724
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CURRENT_PROGRAM", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35725
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEVER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 512
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LESS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 513
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "EQUAL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 514
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LEQUAL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 515
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GREATER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 516
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NOTEQUAL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 517
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "GEQUAL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 518
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ALWAYS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 519
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "KEEP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7680
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "REPLACE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7681
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INCR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7682
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DECR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7683
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVERT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5386
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INCR_WRAP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34055
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DECR_WRAP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34056
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VENDOR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7936
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7937
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERSION", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 7938
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEAREST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 9728
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINEAR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 9729
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEAREST_MIPMAP_NEAREST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 9984
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINEAR_MIPMAP_NEAREST", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 9985
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NEAREST_MIPMAP_LINEAR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 9986
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LINEAR_MIPMAP_LINEAR", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 9987
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_MAG_FILTER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 10240
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_MIN_FILTER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 10241
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_WRAP_S", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 10242
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_WRAP_T", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 10243
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 5890
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34067
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_BINDING_CUBE_MAP", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34068
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_POSITIVE_X", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34069
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_NEGATIVE_X", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34070
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_POSITIVE_Y", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34071
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_NEGATIVE_Y", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34072
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_POSITIVE_Z", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34073
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE_CUBE_MAP_NEGATIVE_Z", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34074
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_CUBE_MAP_TEXTURE_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34076
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE0", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33984
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE1", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33985
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE2", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33986
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE3", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33987
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE4", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33988
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE5", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33989
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE6", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33990
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE7", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33991
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE8", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33992
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE9", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33993
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE10", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33994
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE11", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33995
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE12", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33996
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE13", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33997
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE14", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33998
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE15", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33999
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE16", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34000
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE17", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34001
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE18", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34002
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE19", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34003
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE20", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34004
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE21", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34005
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE22", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34006
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE23", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34007
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE24", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34008
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE25", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34009
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE26", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34010
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE27", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34011
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE28", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34012
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE29", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34013
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE30", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34014
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "TEXTURE31", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34015
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "ACTIVE_TEXTURE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34016
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "REPEAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 10497
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CLAMP_TO_EDGE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33071
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MIRRORED_REPEAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33648
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_VEC2", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35664
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_VEC3", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35665
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_VEC4", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35666
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT_VEC2", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35667
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT_VEC3", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35668
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INT_VEC4", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35669
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35670
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL_VEC2", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35671
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL_VEC3", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35672
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BOOL_VEC4", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35673
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_MAT2", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35674
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_MAT3", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35675
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FLOAT_MAT4", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35676
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLER_2D", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35678
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "SAMPLER_CUBE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35680
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_ENABLED", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34338
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34339
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_STRIDE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34340
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_TYPE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34341
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_NORMALIZED", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34922
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_POINTER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34373
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34975
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "IMPLEMENTATION_COLOR_READ_TYPE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35738
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "IMPLEMENTATION_COLOR_READ_FORMAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35739
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COMPILE_STATUS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 35713
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LOW_FLOAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36336
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MEDIUM_FLOAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36337
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "HIGH_FLOAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36338
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "LOW_INT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36339
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MEDIUM_INT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36340
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "HIGH_INT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36341
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36160
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36161
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGBA4", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32854
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGB5_A1", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 32855
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RGB565", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36194
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_COMPONENT16", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33189
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_INDEX8", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36168
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_STENCIL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34041
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_WIDTH", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36162
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_HEIGHT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36163
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_INTERNAL_FORMAT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36164
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_RED_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36176
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_GREEN_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36177
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_BLUE_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36178
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_ALPHA_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36179
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_DEPTH_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36180
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_STENCIL_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36181
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36048
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36049
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36050
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36051
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "COLOR_ATTACHMENT0", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36064
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_ATTACHMENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36096
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "STENCIL_ATTACHMENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36128
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "DEPTH_STENCIL_ATTACHMENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 33306
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "NONE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 0
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_COMPLETE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36053
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36054
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36055
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36057
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_UNSUPPORTED", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36061
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "FRAMEBUFFER_BINDING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36006
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "RENDERBUFFER_BINDING", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 36007
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "MAX_RENDERBUFFER_SIZE", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 34024
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "INVALID_FRAMEBUFFER_OPERATION", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 1286
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_FLIP_Y_WEBGL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 37440
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 37441
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "CONTEXT_LOST_WEBGL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 37442
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "UNPACK_COLORSPACE_CONVERSION_WEBGL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 37443
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "BROWSER_DEFAULT_WEBGL", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 37444
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "activeTexture", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "activeTexture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "attachShader", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "attachShader", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindAttribLocation", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "bindAttribLocation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindRenderbuffer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "bindRenderbuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendColor", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "blendColor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendEquation", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "blendEquation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendEquationSeparate", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "blendEquationSeparate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendFunc", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "blendFunc", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "blendFuncSeparate", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "blendFuncSeparate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bufferData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "bufferData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bufferSubData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "bufferSubData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "checkFramebufferStatus", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "checkFramebufferStatus", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "compileShader", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "compileShader", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "compressedTexImage2D", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "compressedTexImage2D", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "compressedTexSubImage2D", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "compressedTexSubImage2D", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "copyTexImage2D", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "copyTexImage2D", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "copyTexSubImage2D", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "copyTexSubImage2D", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createBuffer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "createBuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createFramebuffer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "createFramebuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createProgram", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "createProgram", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createRenderbuffer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "createRenderbuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createShader", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "createShader", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "createTexture", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "createTexture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "cullFace", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "cullFace", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteBuffer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "deleteBuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteFramebuffer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "deleteFramebuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteProgram", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "deleteProgram", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteRenderbuffer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "deleteRenderbuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteShader", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "deleteShader", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "deleteTexture", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "deleteTexture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "depthFunc", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "depthFunc", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "depthMask", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "depthMask", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "depthRange", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "depthRange", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "detachShader", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "detachShader", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "disable", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "disable", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "enable", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "enable", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "finish", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "finish", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "flush", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "flush", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "framebufferRenderbuffer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "framebufferRenderbuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "framebufferTexture2D", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "framebufferTexture2D", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "frontFace", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "frontFace", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "generateMipmap", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "generateMipmap", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getActiveAttrib", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getActiveAttrib", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getActiveUniform", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getActiveUniform", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getAttachedShaders", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getAttachedShaders", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getAttribLocation", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getAttribLocation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getBufferParameter", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getBufferParameter", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getContextAttributes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getContextAttributes", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getError", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getError", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getExtension", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getExtension", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getFramebufferAttachmentParameter", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getFramebufferAttachmentParameter", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getParameter", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getParameter", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getProgramInfoLog", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getProgramInfoLog", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getProgramParameter", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getProgramParameter", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getRenderbufferParameter", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getRenderbufferParameter", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderInfoLog", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getShaderInfoLog", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderParameter", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getShaderParameter", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderPrecisionFormat", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getShaderPrecisionFormat", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getShaderSource", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getShaderSource", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getSupportedExtensions", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getSupportedExtensions", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getTexParameter", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getTexParameter", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getUniform", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getUniform", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getUniformLocation", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getUniformLocation", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getVertexAttrib", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getVertexAttrib", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "getVertexAttribOffset", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "getVertexAttribOffset", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "hint", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "hint", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isBuffer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "isBuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isContextLost", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "isContextLost", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isEnabled", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "isEnabled", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isFramebuffer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "isFramebuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isProgram", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "isProgram", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isRenderbuffer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "isRenderbuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isShader", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "isShader", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "isTexture", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "isTexture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "lineWidth", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "lineWidth", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "linkProgram", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "linkProgram", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "pixelStorei", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "pixelStorei", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "polygonOffset", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "polygonOffset", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "readPixels", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "readPixels", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "renderbufferStorage", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "renderbufferStorage", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "sampleCoverage", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "sampleCoverage", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "shaderSource", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "shaderSource", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilFunc", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "stencilFunc", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilFuncSeparate", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "stencilFuncSeparate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilMask", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "stencilMask", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilMaskSeparate", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "stencilMaskSeparate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilOp", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "stencilOp", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "stencilOpSeparate", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "stencilOpSeparate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texImage2D", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "texImage2D", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texParameterf", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "texParameterf", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texParameteri", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "texParameteri", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "texSubImage2D", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "texSubImage2D", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "useProgram", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "useProgram", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "validateProgram", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "validateProgram", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindBuffer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "bindBuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindFramebuffer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "bindFramebuffer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "bindTexture", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "bindTexture", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clear", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "clear", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clearColor", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "clearColor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clearDepth", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "clearDepth", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "clearStencil", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "clearStencil", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "colorMask", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "colorMask", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "disableVertexAttribArray", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "disableVertexAttribArray", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawArrays", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "drawArrays", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "drawElements", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "drawElements", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "enableVertexAttribArray", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "enableVertexAttribArray", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "scissor", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "scissor", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1f", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform1f", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1fv", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform1fv", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1i", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform1i", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform1iv", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform1iv", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2f", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform2f", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2fv", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform2fv", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2i", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform2i", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform2iv", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform2iv", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3f", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform3f", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3fv", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform3fv", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3i", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform3i", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform3iv", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform3iv", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4f", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform4f", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4fv", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform4fv", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4i", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform4i", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniform4iv", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniform4iv", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniformMatrix2fv", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniformMatrix2fv", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniformMatrix3fv", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniformMatrix3fv", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "uniformMatrix4fv", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "uniformMatrix4fv", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib1f", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "vertexAttrib1f", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib1fv", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "vertexAttrib1fv", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib2f", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "vertexAttrib2f", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib2fv", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "vertexAttrib2fv", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib3f", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "vertexAttrib3f", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib3fv", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "vertexAttrib3fv", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib4f", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "vertexAttrib4f", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttrib4fv", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "vertexAttrib4fv", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "vertexAttribPointer", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "vertexAttribPointer", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "viewport", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "viewport", arguments)
    }
});
dingvm.toolsFunc.defineProperty(WebGLRenderingContext.prototype, "makeXRCompatible", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, WebGLRenderingContext.prototype, "WebGLRenderingContextProto", "makeXRCompatible", arguments)
    }
});
