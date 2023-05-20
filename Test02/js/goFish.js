/* TEST 2 -
 * Ehsan KH. Motlagh
 * student ID: 2340457
 */

//----- DO NO TOUCH BELOW ----//
// You are encouraged to use these variables but should not modify them
const minNumber = 1;   // Minimum value for the random number
const maxNumber = 100;  // Maximim value for the random number
const maxTries = 5;   // Maximum number of tries to guess the number
var randomNumber;     // Randomly generated number
var countTries;   // Counter to track number of tries

window.addEventListener('load', setupGoFish); //onload event listener
//----- DO NOT TOUCH ABOVE ----//


/**
 * Setup page when the document is done loading
 */
function toConsole(dis) {
    console.log(dis);
}
function setupGoFish() {
    let theForm = document.getElementById("bait");
    let inputBox = document.createElement("input"); // text input
    let btnGuess = document.createElement("input"); // btn Bait the hook
    let btnRetry = document.createElement("input");// btn let's go fishing
    // textbox attributes
    inputBox.id = "txtNumber";
    inputBox.type = "text";

    //button Bait attributes
    btnGuess.id = "btnGuess";
    btnGuess.type = "button";
    btnGuess.value = "Bait The Hook";
    // event listner for Bait
    btnGuess.addEventListener("click", fishOnHook);

    //button go Fishing attributes
    btnRetry.id = "btnRetry";
    btnRetry.type = "button";
    btnRetry.value = "Let's Go Fishing";
    // hide the input btn
    btnRetry.style.display = "none";

    // event listner for go Fishing
    btnRetry.addEventListener("click", castNewLine);

    //appent elems to Form
    theForm.appendChild(inputBox);
    theForm.appendChild(btnGuess);
    theForm.appendChild(btnRetry);

    castNewLine();
}

/**
 * Initialize a new round 
 */
function castNewLine() {
    //Remove any previous guesses made by the user
    //let guessesElement = document.getElementsByTagName("li");
    let guessesElement = document.getElementById("guesses");
    guessesElement.innerHTML="";

    //Remove any results you provided the user
    let elemResult = document.getElementById("results"); // element to express the result 
    elemResult.innerText = "";

    //Clear any text in the txtNumber input and enable it
    let inputBox = document.getElementById("txtNumber");
    inputBox.value = "";
    inputBox.disabled = false;

    //Enable the btnGuess button
    let btnGuess = document.getElementById("btnGuess");
    btnGuess.disabled = false;

    //Hide the btnRetry button.
    let btnRetry = document.getElementById("btnRetry");
    btnRetry.style.display = "none";

    /* 
    **  Generate a new randomNumber
       ** randomNumber should be a positive integer 
          between the minNumber and maxNumber global variables 
    */
    randomNumber = generateRandom(minNumber, maxNumber);

    //Reset the number of countTries
    countTries = 0;
    toConsole("Random: " + randomNumber);
}

/**
 * Checks if the guessed number is the same as the random number. 
 */
function fishOnHook() {
    let inputBox = document.getElementById("txtNumber"); // text input
    let guessedNum = inputBox.value; // entered number by user
    let btnGuess = document.getElementById("btnGuess"); // btn new guess
    let btnRetry = document.getElementById("btnRetry"); // btn new game
    let elemResult = document.getElementById("results"); // element to express the result 
    let elemGuesses = document.getElementById("guesses"); // ul to express the guesses 
    let listResults; // user guesses as list 

    //Validate that the guess is a number within the allowed number range.
    if (guessedNum >= minNumber && guessedNum <= maxNumber) { //If the validation is SUCCESSFUL
        //Add the guessed number as an item to the guesses
        listResults = document.createElement("li");
        listResults.innerText = guessedNum;
        elemGuesses.appendChild(listResults);
        //Increase the countTries counter
        countTries++;

        //If the guessed number is the same as the randomNumber
        if (guessedNum == randomNumber) {
            btnGuess.disabled = true; //Disable the button
            inputBox.value = ""; //Clear the input
            inputBox.disabled = true; //disable the input
            btnRetry.style.display = "block";//Show the button to start a new game
            elemResult.innerText = "You caught the big one!! It took you " + countTries + " tries";

        } else {//f the guessed number is NOT the same as the randomNumber
            inputBox.value = ""; //Clear the input
            //If the guess is too high
            toConsole(guessedNum);
            if (guessedNum > maxNumber) elemResult.innerText = "Too Deep";
            //If the guess is too low
            if (guessedNum < minNumber) elemResult.innerText = "Too Shallow";

            //If the user has reached the maximum number of attempts allowed
            if (countTries == maxTries) {
                elemResult.innerText = "No more fish in the sea"; // results to show no more tires left
                btnGuess.disabled = true; // disable btn to prevent from new guess
                inputBox.value = ""; //Clear the input
                inputBox.disabled = true; // disable text input
                btnRetry.style.display = "block";//Show the button to start a new game
            }
        }

    } else {//If the validation FAILS
        inputBox.value = "";
    }

}


/**
 * generating a random number between two numbers inclusivly
 * @param {number} [min=1] 
 * @param {number} [max=10] 
 * @returns {number}
 */
function generateRandom(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //min,max included
}