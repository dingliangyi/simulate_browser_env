// CanvasRenderingContext2D对象
CanvasRenderingContext2D = function CanvasRenderingContext2D() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(CanvasRenderingContext2D, "CanvasRenderingContext2D");
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "canvas", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "canvas_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "globalAlpha", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "globalAlpha_get", arguments, 1)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "globalAlpha_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "strokeStyle\n", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "globalCompositeOperation_get", arguments, 'source-over')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "globalCompositeOperation_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "filter", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "filter_get", arguments, 'none')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "filter_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "imageSmoothingEnabled", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "imageSmoothingEnabled_get", arguments, true)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "imageSmoothingEnabled_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "imageSmoothingQuality", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "imageSmoothingQuality_get", arguments, 'low')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "imageSmoothingQuality_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "strokeStyle", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "strokeStyle_get", arguments, '#000000')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "strokeStyle_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fillStyle", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "fillStyle_get", arguments, '#000000')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "fillStyle_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowOffsetX", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "shadowOffsetX_get", arguments, 0)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "shadowOffsetX_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowOffsetY", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "shadowOffsetY_get", arguments, 0)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "shadowOffsetY_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowBlur", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "shadowBlur_get", arguments, 0)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "shadowBlur_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "shadowColor", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "shadowColor_get", arguments, 'rgba(0, 0, 0, 0)')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "shadowColor_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineWidth", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "lineWidth_get", arguments, 1)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "lineWidth_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineCap", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "lineCap_get", arguments, 'butt')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "lineCap_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineJoin", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "lineJoin_get", arguments, 'miter')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "lineJoin_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "miterLimit", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "miterLimit_get", arguments, 10)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "miterLimit_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineDashOffset", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "lineDashOffset_get", arguments, 0)
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "lineDashOffset_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "font", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "font_get", arguments, '10px sans-serif')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "font_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "textAlign", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "textAlign_get", arguments, 'start')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "textAlign_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "textBaseline", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "textBaseline_get", arguments, 'alphabetic')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "textBaseline_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "direction", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "direction_get", arguments, 'ltr')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "direction_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fontKerning", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "fontKerning_get", arguments, 'auto')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "fontKerning_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fontStretch", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "fontStretch_get", arguments, 'normal')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "fontStretch_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fontVariantCaps", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "fontVariantCaps_get", arguments, 'normal')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "fontVariantCaps_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "letterSpacing", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "letterSpacing_get", arguments, '0px')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "letterSpacing_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "textRendering", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "textRendering_get", arguments, 'auto')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "textRendering_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "wordSpacing", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "wordSpacing_get", arguments, '0px')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "wordSpacing_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "clip", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "clip", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createConicGradient", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "createConicGradient", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createImageData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "createImageData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createLinearGradient", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "createLinearGradient", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createPattern", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "createPattern", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "createRadialGradient", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "createRadialGradient", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "drawFocusIfNeeded", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "drawFocusIfNeeded", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "drawImage", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "drawImage", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fill", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "fill", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fillText", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "fillText", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getContextAttributes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "getContextAttributes", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getImageData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "getImageData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getLineDash", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "getLineDash", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "getTransform", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "getTransform", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "isContextLost", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "isContextLost", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "isPointInPath", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "isPointInPath", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "isPointInStroke", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "isPointInStroke", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "measureText", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "measureText", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "putImageData", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "putImageData", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "reset", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "reset", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "roundRect", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "roundRect", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "save", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "save", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "scale", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "scale", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "setLineDash", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "setLineDash", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "setTransform", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "setTransform", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "stroke", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "stroke", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "strokeText", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "strokeText", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "transform", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "transform", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "translate", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "translate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "arc", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "arc", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "arcTo", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "arcTo", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "beginPath", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "beginPath", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "bezierCurveTo", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "bezierCurveTo", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "clearRect", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "clearRect", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "closePath", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "closePath", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "ellipse", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "ellipse", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "fillRect", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "fillRect", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "lineTo", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "lineTo", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "moveTo", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "moveTo", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "quadraticCurveTo", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "quadraticCurveTo", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "rect", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "rect", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "resetTransform", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "resetTransform", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "restore", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "restore", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "rotate", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "rotate", arguments)
    }
});
dingvm.toolsFunc.defineProperty(CanvasRenderingContext2D.prototype, "strokeRect", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, CanvasRenderingContext2D.prototype, "CanvasRenderingContext2DProto", "strokeRect", arguments)
    }
});
