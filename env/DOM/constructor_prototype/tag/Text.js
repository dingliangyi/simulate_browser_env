// Text对象
Text = function Text() {
};
dingvm.toolsFunc.safe_constructor_prototype(Text, "Text");
Object.setPrototypeOf(Text.prototype, CharacterData.prototype);
dingvm.toolsFunc.defineProperty(Text.prototype, "wholeText", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Text.prototype, "TextProto", "wholeText_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Text.prototype, "assignedSlot", {
    configurable: true,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, Text.prototype, "TextProto", "assignedSlot_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(Text.prototype, "splitText", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, Text.prototype, "TextProto", "splitText", arguments)
    }
});
