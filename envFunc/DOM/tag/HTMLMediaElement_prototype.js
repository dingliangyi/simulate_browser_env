dingvm.envFunc.HTMLMediaElementProto_canPlayType = function (type) {
    switch (type) {
        case 'audio/ogg; codecs="vorbis"':
            return "probably";
        case 'audio/wav; codecs="1"':
            return "probably"
        case 'audio/mpeg;':
            return "probably"
        case 'audio/x-m4a;audio/aac;':
            return 'maybe'
        case 'video/ogg; codecs="theora"':
            return ""
        case 'video/mp4; codecs="avc1.42E01E"':
            return "probably"
        case 'video/webm; codecs="vp8, vorbis"':
            return "probably"
        case 'video/mp4; codecs="mp4v.20.8, mp4a.40.2"':
            return ""
        case 'video/mp4; codecs="mp4v.20.240, mp4a.40.2"':
            return ""
        case 'video/x-matroska; codecs="theora, vorbis"':
            return ""
        default:
            console.log(`HTMLMediaElementProto_canPlayType --> ${type}--> 未知类型`)
            return ""
    }
}