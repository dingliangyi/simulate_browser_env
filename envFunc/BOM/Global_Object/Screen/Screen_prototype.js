dingvm.envFunc.ScreenProto_width_get = function () {
    return dingvm.memory.globalVar.width;
};
dingvm.envFunc.ScreenProto_height_get = function () {
    return dingvm.memory.globalVar.height;
};
dingvm.envFunc.ScreenProto_availWidth_get = function () {
    return dingvm.memory.globalVar.width;
};
dingvm.envFunc.ScreenProto_availHeight_get = function () {
    return dingvm.memory.globalVar.height;
};
dingvm.envFunc.ScreenProto_colorDepth_get = function () {
    return 24
};
dingvm.envFunc.ScreenProto_pixelDepth_get = function () {
    return 24
};
dingvm.envFunc.ScreenProto_availTop_get = function () {
    return 0
};
dingvm.envFunc.ScreenProto_availLeft_get = function () {
    return 0
};
dingvm.envFunc.ScreenProto_orientation_get = function () {
    return {
        angle: 0,
        type: "landscape-primary",
        onchange: null
    };
};
dingvm.envFunc.ScreenProto_isExtended_get = function () {
    return false
}
dingvm.envFunc.ScreenProto_onchange_get = function () {
    return null
}
dingvm.envFunc.ScreenProto_orientation_get = function () {
    let orientation = {};
    Object.setPrototypeOf(orientation, ScreenOrientation.prototype);

    return orientation;
}