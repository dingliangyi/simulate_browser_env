dingvm.envFunc.NavigatorUADataProto_brands_get = function () {
    return [
        {
            "brand": "Not/A)Brand",
            "version": "8"
        },
        {
            "brand": "Chromium",
            "version": "126"
        },
        {
            "brand": "Google Chrome",
            "version": "126"
        }
    ]
};
dingvm.envFunc.NavigatorUADataProto_mobile_get = function () {
    return false
};
dingvm.envFunc.NavigatorUADataProto_platform_get = function () {
    return 'Windows'
};
dingvm.envFunc.NavigatorUADataProto_getHighEntropyValues = function () {
    debugger
    return new Promise(function (resolve, reject) {
        debugger
    })
};
dingvm.envFunc.NavigatorUADataProto_toJSON = function () {
    return {
        "brands": [
            {
                "brand": "Not/A)Brand",
                "version": "8"
            },
            {
                "brand": "Chromium",
                "version": "126"
            },
            {
                "brand": "Google Chrome",
                "version": "126"
            }
        ],
        "mobile": false,
        "platform": "Windows"
    }
};
