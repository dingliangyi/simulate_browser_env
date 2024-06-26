dingvm.envFunc.EventProto_type_get = function EventProto_type_get() {
    return this.myType;
};
dingvm.envFunc.EventProto_type_set = function EventProto_type_set(value) {
    this.myType = value;
};
dingvm.envFunc.EventProto_target_get = function EventProto_target_get() {
    return this.myTarget;
};
dingvm.envFunc.EventProto_target_set = function EventProto_target_set(value) {
    this.myTarget = value;
};
dingvm.envFunc.EventProto_timeStamp_get = function Event_timeStamp_get() {
    return dingvm.toolsFunc.getProtoArr.call(this, "timeStamp");
};
dingvm.envFunc.EventProto_srcElement_get = function () {
    debugger
};