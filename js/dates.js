/* COMPLETE THE FOLLOWING FUNCTIONS 
daysInMonth(month, year)
Write a function to get the number of days in a month

isWeekend(date)
Write a function to test whether a date is a weekend.

lastDay(month, year)
Write a function to get the last day of a month

daysSince()
find the number of days between today and 1 Jan 2017

whatMyDate(seconds)
Write a functions to display what date it will be in X seconds
*/

function testDates() {
    console.log(daysInMonth(11, 2018)); //30


    console.log(daysInMonth(2, 2000));  //29

    console.log(isWeekend("Nov 20 1992"));  //false
    console.log(isWeekend("2019-07-14"));   // true

    console.log(lastDay(11, 2018));  // Friday
    console.log(lastDay(02, 2000));  // Tuesday

    console.log(daysSince()); // ~ 2326
    console.log(whatMyDate(23686198));
    // ~ Wed Feb 14 2024 16:36:08 GMT-0500 (Eastern Standard Time)

}
function display(whatever) {
    console.log(whatever);
}
/**
 * this function uses switch case
 * @param {number} mm  month
 * @param {number} yyyy year
 * @returns days in the month of the year
 */

function daysInMonth(mm, yyyy) {
    let d;
    switch (mm) {
        case 1:
            d = 31;
            break;
        case 2:
            d = leapYear(yyyy) ? 29 : 28;
            break;
        case 3:
            d = 31;
            break;
        case 4:
            d = 30;
            break;
        case 5:
            d = 31;
            break;
        case 6:
            d = 30;
            break;
        case 7:
            d = 31;
            break;
        case 8:
            d = 31;
            break;
        case 9:
            d = 30;
            break;
        case 10:
            d = 31;
            break;
        case 11:
            d = 30;
            break;
        case 12:
            d = 31;
            break;
        default:
            d = "invalid month."
            break;
    }
    //display(d);
    return d;
}
/**
 * this function uses built in method
 * @param {number} mm  month
 * @param {number} yyyy year
 * @returns days in the month of the year
 */
function daysMonth(mm,yyyy){
    return new Date(yyyy,mm,0).getDate();
}

/**
 * finding the leap year
 * @param {year} yyyy year
 * @returns {boolean} true if leap year
 */
function leapYear(yyyy) {
    /*
    leap year divisible by 4 
    but if divisible by 100 not a leap year
    however divisible by 100 and 400 is a leap year
    */

    // every 4 year and not div by 100
    if (yyyy % 4 === 0 && yyyy % 100 !== 0)
        return true;
    // div by 100 also by 400 to be a leap yaer        
    else if (yyyy % 100 === 0 && yyyy % 400 === 0)
        return true;
    else
        return false;
}

/**
 * finding if the date falls into weekend
 * @param {Date} date 
 */
function isWeekend(date) {

    let d = new Date(date.replace(/-/g, '\/').replace(/T.+/, '')).getDay();
    let weekend = d === 0 || d === 6 ? true : false;
    return weekend;
}


/*
console.log( lastDay(11, 2018) );  // Friday
console.log( lastDay(02, 2000) );  // Tuesday
*/
function lastDay(mm, yyyy) {
    let day = daysInMonth(mm, yyyy)
    let d = new Date(yyyy, mm - 1, day).getDay();
    return daysInString(d);
}

function daysInString(numOfDay) {
    let dayName = "";

    switch (numOfDay) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;

        default:
            dayName = "Invalid number";
            break;
    }
    return dayName;
}

/*
find the number of days between today and 1 Jan 2017
console.log(daysSince()); // ~ 2326
*/

function daysSince() {
    let aDay = 1000 * 60 * 60 * 24;
    let dayFrom = new Date("01 Jan 2017").getTime();
    let today = new Date().getTime();
    let diffMillsec = today - dayFrom;
    let diffRounded = Math.floor(diffMillsec/aDay);
    //display("days diff: " + diffRounded);
    return diffRounded;
}
/*
whatMyDate(seconds)
Write a functions to display what date it will be in X seconds
console.log(whatMyDate(23686198));
    // ~ Wed Feb 14 2024 16:36:08 GMT-0500 (Eastern Standard Time)
*/

function whatMyDate(seconds){
    let dayFrom = new Date("14 feb 2024").getTime();
    let myDate= new Date(seconds);
    return myDate;
}
