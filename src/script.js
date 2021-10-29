document.addEventListener("keydown", checkPressedButton)

function checkPressedButton (e) {
    switch (e.code) {
        case "KeyA":
            console.log("The \'A\' key is pressed.");
            const audioA = new Audio("audio/A.mp3");
            audioA.play();
            // document.getElementById("audioA").play();
            break;
        case "KeyS":
            console.log("The \'S\' key is pressed.");
            const audioS = new Audio("audio/S.mp3");
            audioS.play();
            // document.getElementById("audioS").play();
            break;
        case "KeyD":
            console.log("The \'D\' key is pressed.");
            const audioD = new Audio("audio/D.mp3");
            audioD.play();
            // document.getElementById("audioD").play();
            break;
        case "KeyF":
            console.log("The \'F\' key is pressed.");
            const audioF = new Audio("audio/F.mp3");
            audioF.play();
            // document.getElementById("audioF").play();
            break;
        case "KeyG":
            console.log("The \'G\' key is pressed.");
            const audioG = new Audio("audio/G.mp3");
            audioG.play();
            // document.getElementById("audioG").play();
            break;
        case "KeyH":
            console.log("The \'H\' key is pressed.");
            const audioH = new Audio("audio/H.mp3");
            audioH.play();
            // document.getElementById("audioH").play();
            break;
        case "KeyJ":
            console.log("The \'J\' key is pressed.");
            const audioJ = new Audio("audio/J.mp3");
            audioJ.play();
            // document.getElementById("audioJ").play();
            break;
        case "KeyW":
            console.log("The \'W\' key is pressed.");
            const audioW = new Audio("audio/W.mp3");
            audioW.play();
            // document.getElementById("audioJ").play();
            break;
        case "KeyE":
            console.log("The \'E\' key is pressed.");
            const audioE = new Audio("audio/E.mp3");
            audioE.play();
            // document.getElementById("audioJ").play();
            break;
        case "KeyT":
            console.log("The \'T\' key is pressed.");
            const audioT = new Audio("audio/T.mp3");
            audioT.play();
            // document.getElementById("audioJ").play();
            break;
        case "KeyY":
            console.log("The \'Y\' key is pressed.");
            const audioY = new Audio("audio/Y.mp3");
            audioY.play();
            // document.getElementById("audioJ").play();
            break;
        case "KeyU":
            console.log("The \'U\' key is pressed.");
            const audioU = new Audio("audio/U.mp3");
            audioU.play();
            // document.getElementById("audioJ").play();
            break;

        default:
            console.log("Wrong button is pressed.");
            break;
    }
}