
let timerRL;
let timerUD;
let rl = "right";
let ud = "up";
function RL() {
    if (rl === "right") {
        console.log("right")
        rl = "left";
    } else {
        console.log("left")
        rl = "right";
    }
}

function UD() {
    if (ud === "up") {
        console.log("up")
        ud = "down";
    } else {
        console.log("down")
        ud = "up";
    }
}

function bgTimer() {
    timerRL = setInterval(RL, 2600);
    timerUD = setInterval(UD, 3900);
    setTimeout(dizzy, 15000);
}

function dizzy() {
    clearInterval(timerRL);
    clearInterval(timerUD);
    alert("I'm Dizzy Yo!")
}

/**
 * 
 * 
 */
let theName;
let timerName;
let countName = 0;
function whatsMyName() {
    //countName = 0;
    theName = prompt("Enter your name:");

    if (theName !== null && theName.trim() != "") {
        //timerName = setInterval(intervalName, 1000);
        timerName = setTimeout(timeOutName, 1000, theName)
    } else {
        console.log("thename: OK" + theName)
    }
}

function intervalName() {
    let curName = theName.slice(0, (theName.length - countName++));

    //console.log(theName);
    console.log(curName);

    if (theName.length == countName) {
        clearInterval(timerName);
        alert("Good Bye " + theName);
    }
}

function timeOutName(givenName) {
    givenName = givenName.trim();
    console.log(givenName);

    if (givenName.length == 1) {
        alert("Good Bye " + theName);
    } else {
        timerName =
            setTimeout(timeOutName, 1000, (givenName.slice(0, givenName.length - 1)));
    }
}
let elemBody = document.getElementsByTagName("body")[0];
let colorOne = "red";
function bgColors() {
    

    if (colorOne === "red") {
        elemBody.style.backgroundColor = colorOne;
        colorOne = "black";
    } else {
        elemBody.style.backgroundColor = colorOne;
        colorOne = "red";
    }
}
let timerColors;
function timerBGColors() {
    timerColors = setInterval(bgColors, 2000)
    setTimeout(timeOutColors, 8000)
}

function timeOutColors() {
    clearInterval(timerColors);
    elemBody.style.backgroundColor ="#FFE4C4";
    console.log("finished!");
}