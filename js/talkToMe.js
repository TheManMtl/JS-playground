/**
 * Output given parameter to the console.
 * @param {*} x Content to be printed to the console.
 */
function printOut(x) {
    console.log(x);
}
/* --- DO NOT EDIT ABOVE THIS LINE -- */

/* TEST 1 - 
 * Ehsan KH. Motlagh
 * student ID: 2340457
*/


function tooManyWords(slogan) {

}

function excuseMeDoctor(conversation = undefined) {
    if (conversation !== undefined) {
        let lastLetter = conversation[conversation.length - 1];

        if (conversation.isNaN || (lastLetter === "?" && conversation === conversation.toUpperCase())) {
            return "Do YOU want to do it instead?"
        }
        else if (conversation.isNaN || conversation[conversation.length - 1] === "?") {
            return "Indubitably";
        } else if (conversation.isNaN || conversation === conversation.toUpperCase()) {
            return "Whoa!! Where is the fire?";
        } else if (conversation === "") {
            return "Pff, I do not need you either";
        }else{
            return "I understand. But you are still wrong!";
        }

    }else if(conversation == undefined){
        return "Pff, I do not need you either";
    }

}



function speedDial() {

    let names = ["Adele", "Henri", "Simon", "David"]; // 1. initi array
    for (let arr in names) {
        printOut(names[arr]);
    }  // 2. show array elements
    printOut("------------") // result seperation
    names.shift(0); // 3.remove first item
    names.pop(); // 4.remove last item
    names.unshift("Matt", "Peter");  // 5.add items to first of the array
    names.splice(2, 0, "Rick") // 6. new third item
    for (let arr in names) {
        printOut(names[arr]);
    } // 7. output the array

    printOut("Index of Henri is: " + names.indexOf("Henri")); //8. find the index
    printOut("Index of Arthur is: " + names.indexOf("Arthur")); //9. find the index

    printOut("------------")
    for (let arr in names) {
        if (names[arr] === "Rick") break;

        printOut(names[arr])
    } // 10. printout until "Rick"

    newNames = names.slice(1, -1); // 11.a. copy without first and last
    printOut(newNames); // 11.b.

    newNames.splice(1, 1, "Laura", "Jenn"); // 12. remove and add

    let withBob = names.concat(newNames).concat("Bob"); //13. concat array
    printOut("---withBob Array-----")
    for (let arr in withBob) {
        printOut(withBob[arr]);
    } //14. show array contents


    printOut("------------")
    printOut(names); //15.a
    printOut(newNames); // 15.b
    printOut(withBob); //15.c

    return withBob.length;
} 