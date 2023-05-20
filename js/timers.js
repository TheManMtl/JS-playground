
let timerRL;
let timerUD;
let rl = "right";
let ud = "up";
let bgBodyOrder = "red"; // init for switching between red and black
let h1ColorsOrder = "black";
let timerH1Colors;
let timerbgBlackRed;
let thisBody = document.getElementsByTagName("body")[0];
let thisH1 = document.getElementsByTagName("h1")[0];
let overlap = "";

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
    timerbgBlackRed = setInterval(changeBgColor, 2000);
    timerH1Colors = setInterval(changeH1Color, 2500);

    setTimeout(dizzy, 15000);
}

function dizzy() {
    clearInterval(timerRL);
    clearInterval(timerUD);

    clearInterval(timerbgBlackRed);
    clearInterval(timerH1Colors);
    thisH1.innerText = "I'm so dizzy!";
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


function changeBgColor() {
    bgBodyOrder =
        bgBodyOrder === "red" && h1ColorsOrder != "black" ? "black" : "red";
    thisBody.style.backgroundColor = bgBodyOrder;
}

function changeH1Color() {
    h1ColorsOrder =
        h1ColorsOrder === "orange" && bgBodyOrder != "black" ? "black" : "orange";
    thisH1.style.color = h1ColorsOrder;
}

function toConsole(dis) {
    console.log(dis);
}
 