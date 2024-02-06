// XPathExpression对象
XPathExpression = function XPathExpression() {
    return dingvm.toolsFunc.throwError("TypeError", "Illegal constructor")
};
dingvm.toolsFunc.safe_constructor_prototype(XPathExpression, "XPathExpression");
dingvm.toolsFunc.defineProperty(XPathExpression.prototype, "evaluate", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, XPathExpression.prototype, "XPathExpressionProto", "evaluate", arguments)
    }
});
