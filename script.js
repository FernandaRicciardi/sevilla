let video = document.getElementById("video1")

let btnplay = document.getElementById("play")

function play() {
    video.volume = 0.5
    video.play()
    btnplay.setAttribute("src", "assets/pause.svg") 
    btnplay.setAttribute("onclick", "pause()")
}

function pause() {
    video.pause()
    btnplay.setAttribute("src", "assets/play.svg")
    btnplay.setAttribute("onclick", "play()")
}

function stop() {
    video.pause()
    video.currentTime = 0
    btnplay.setAttribute("src", "assets/play.svg")
    btnplay.setAttribute("onclick", "play()")
}

function backwards5() {
    video.currentTime -= 5
}

function forwards5() {
    video.currentTime += 5
}

function volume_up() {
    video.volume += 0.1
}

function volume_down() {
    video.volume -= 0.1
}

// onmouseover="upbtn(this)" onmouseout="normalbtn(this)"

function upbtn(x) {
    x.style.top = "-6px"
}

function normalbtn(x) {
    x.style.top = "0px"
}

// onmouseover="showControls(this)" onmouseout="hideControls(this)

let c = document.getElementById("ctrls")
function showControls() {
    c.style.opacity = "1"
}

function hideControls() {
    c.style.opacity = "0"
}