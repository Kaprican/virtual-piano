const validKeys = {
    "KeyA": "A",
    "KeyS" : "S",
    "KeyD" : "D",
    "KeyF" : "F",
    "KeyG" : "G",
    "KeyH" : "H",
    "KeyJ" : "J",
    "KeyW" : "W",
    "KeyE" : "E",
    "KeyT" : "T",
    "KeyY" : "Y",
    "KeyU" : "U"
}

document.addEventListener("keydown", checkPressedButton)

function checkPressedButton (e) {
    if (validKeys.hasOwnProperty(e.code)) {
        const keyCode = validKeys[e.code];
        console.log(`The ${keyCode} key is pressed.`);
        const audioKey = new Audio(`src/audio/${keyCode}.mp3`);
        audioKey.play();
    } else {
        console.log("Wrong button is pressed.");
    }
}