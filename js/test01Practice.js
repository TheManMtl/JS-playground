console.log(`Hi there`)

var x = 2;
console.log(typeof x)

var x = '2';
console.log(typeof x)

var x = "2";
console.log(typeof x)

var x = `2`;
console.log(typeof x)

var x = 2.5;
console.log(typeof x)

function sanitise(x) {
    if (isNaN(x)) {
        return NaN;
    }
    return x;
}

console.log(sanitise('1'));
// Expected output: "1"

console.log(sanitise('NotANumber'));
// Expected output: NaN

let cats = new Array('persian', 'scotish');
let dogs = Array("labrador", "pitbull");
let birds = ["pigeon", "tatoo"]

let groceries = ["Apple", "Bread", "Milk", "Toothpaste"];
console.log(groceries[2]); // Milk
console.log(groceries.indexOf("ApPle")); //-1

console.log(3 !== 4);

console.log(typeof ('q'));

let age = 5020
;

console.log("ready");

console.log(isNaN(age));

let number = 0;
while (number < 10) {
    console.log(number);
    number += 2;
}

// do {
//     age = prompt("How old are you?");
// } while (!age || isNaN(age));
// //

console.log(age); 

let myVar = "global"; // Declare a global variable
function checkscope( ) {
let myVar = "local";
// let used to declare local variable
// Without let, the global variable is used
console.log(myVar); // local
}
checkscope();
console.log(myVar);