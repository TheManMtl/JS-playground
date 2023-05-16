function cashRegister(cartObj) {
    var total = 0
    for (let obj in cartObj) {
        total += cartObj[obj]
        console.log(obj);
    }
    return total;
}

var cartForParty = {
    banana: 1.25,
    handkerchief: .99,
    tshirt: 25.01,
    apple: 0.60,
    nalgene: 10.34,
    proteinShake: 22.36
}

// FDS example
var FSD = {
    languages: ["JavaScript", "Java", "HTML"],
    isHard: false,
    difficulty: 2,
    teacher: "John",
};
//printOut(FSD);
function printOut(x) {
    console.log(x);
}
// printOut(FSD.languages);
// //Write the command to add the language “PHP” to the end of the languages array. 
// //FSD.languages[FSD.languages.length] = "PHP";
// FSD.languages.push("PHP");
// printOut(FSD.languages);
// // Change the difficulty to the value of 5. 
// FSD.difficulty = 5;
// printOut(FSD.difficulty);
// // Using the delete keyword, write the command to remove the teacher key from the object. 
// delete FSD.teacher;
// printOut(FSD);
// // Write the command to add a new key called isFun and a value of true to the object.
// FSD.isFun = true;
// printOut(FSD);
// // Create the function listLanguages that will use a loop to iterate through the languages array and console.log each. 
// // as a function
// function loopArrayInObject(){
//     for(let a in FSD.languages){
//         printOut(FSD.languages[a]);
//     }
// }
// printOut("Function")
// printOut(loopArrayInObject());
// printOut(FSD);
// // as a method

// printOut("Method")
// FSD.loopArrayInObject=function(){
//     for(let a in this.languages){
//         printOut(this.languages[a]);
//     }
// }
// printOut(FSD);
// FSD.loopArrayInObject();

// Library Example
//Write a JavaScript function to display the reading status of the following books
// Already read 'The Road Ahead' by Bill Gates.​
// Already read 'Walter Isaacson' by Steve Jobs.​
// You still need to read 'The Hunger Games' by Suzanne Collins.

let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: false
    },
    {
        author: 'Suzanne Collins',
        title: 'The Hunger Games',
        readingStatus: true
    }
];



function bookStatus(libObj) {
    for (let key in libObj) {
        let statusBook = "";
        if (libObj[key].readingStatus === true) {
            statusBook += "Already Read!";
        } else {
            statusBook += "Sill need to read";
        }

        statusBook += " '" + libObj[key].title + "' " + "by " + libObj[key].author;
        printOut(statusBook);
    }
}

library.push({
    author: 'Ehsan',
    title: 'Ethan Life',
    readingStatus: false
});

library.push({
    author: 'Reymond',
    title: 'Me On The Road',
    readingStatus: true
});

bookStatus(library);