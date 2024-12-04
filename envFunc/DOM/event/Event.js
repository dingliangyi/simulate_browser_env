dingvm.envFunc.EventProto_type_get = function () {
    return this.myType;
};
dingvm.envFunc.EventProto_type_set = function (value) {
    this.myType = value;
};
dingvm.envFunc.EventProto_target_get = function () {
    return this.myTarget;
};
dingvm.envFunc.EventProto_target_set = function (value) {
    this.myTarget = value;
};
dingvm.envFunc.EventProto_timeStamp_get = function () {
    return dingvm.toolsFunc.getProtoArr.call(this, "timeStamp");
};
dingvm.envFunc.EventProto_srcElement_get = function () {
    debugger
};