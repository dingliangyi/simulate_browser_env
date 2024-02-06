let addEventListener_ = EventTarget.prototype.addEventListener
window.trail_data = []
window.start_x
window.start_y
window.start_t
EventTarget.prototype.addEventListener = function () {
    let eventName = arguments[0]
    let eventFunc = arguments[1]
    let newEventFunc = function (event) {
        if (event.type === "touchstart") {
            window.start_x = event.changedTouches[0].pageX
            window.start_y = event.changedTouches[0].pageY
            window.start_t = +new Date
        } else if (event.type === "touchmove") {
            let moveX = parseInt(event.changedTouches[0].pageX - window.start_x)
            let moveY = parseInt(event.changedTouches[0].pageY - window.start_y)
            let moveT = (new Date).getTime() - window.start_t
            console.log([moveX, moveY, moveT])
            window.trail_data.push([moveX, moveY, moveT])
        } else if (event.type === "touchend") {
            console.log(window.trail_data)
            copy(window.trail_data)
        }
        eventFunc(event)
    }

    console.log(eventName, eventFunc.toString())
    return addEventListener_.apply(this, [eventName, newEventFunc])

}