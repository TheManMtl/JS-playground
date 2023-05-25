/* assignment 02 
 * Ehsan KH. Motlagh
 * student ID: 2340457
*/
function toConsole(x) {
	console.log(x);
}
/**
 * Generating two random number
 * @param {number} min 
 * @param {number} max 
 * @returns {number[]}
 */
function randomTable() {

	// rows 
	let rows = generateRandom();
	//colomns
	let cols = generateRandom();

	showTable(rows, cols)
}


/**
 * Generating a multiplication HTML table based on rows and cols
 * as params and showing it on the page
 * @param {number} rows 
 * @param {number} cols 
 */

let bodyNode = document.getElementsByTagName("body")[0]; // to have access thruog all the functions

function showTable(rows, cols) {

	let tableNode = document.createElement("table");
	let trNode = document.createElement("tr");
	trNode.id = "tableHeader";
	let tdNode;
	let thNode;
	tableNode.id = "multiplyTB";
	bodyNode.appendChild(tableNode);

	for (let hed = 0; hed <= cols; hed++) {// generating a header
		thNode = document.createElement("th");
		if (hed === 0) { // first cell to be empty
			thNode.innerText = "";
		} else {
			thNode.innerText = hed;
		}
		thNode.style.padding = "8px";
		trNode.appendChild(thNode); // append header to row
		tableNode.appendChild(trNode);// append first row to table
	}
	for (let row = 0; row < rows; row++) {// generating rows
		trNode = document.createElement("tr"); // new row
		trNode.id = "row" + (row + 1);// adding id to all rows
		tableNode.appendChild(trNode);// append to table
		tdNode = document.createElement("td"); // first col as like header
		tdNode.style.fontWeight = "bold";
		tdNode.innerText = (row + 1);
		tdNode.style.padding = "8px";
		trNode.appendChild(tdNode);// append first cell to row
		for (let col = 1; col <= cols; col++) {// generating cols
			tdNode = document.createElement("td"); // new col
			tdNode.innerText = col * (row + 1); // calculating the value of the cell col*row
			tdNode.style.padding = "8px";
			trNode.appendChild(tdNode);
		}
	}

	tableNode.style.border = "2px solid red";
	tableNode.style.marginTop = "5px";
}


/**
 * getting two number from user to generate a HTML ,ultiplication table
 * the numbers will determine the rows and columns of the table
 */
function promptTable() {
	let rowsUser = validateUserNumber(prompt("Enter rows number"));
	let colsUser = validateUserNumber(prompt("Enter colomns number"));
	showTable(rowsUser, colsUser)
}

/**
 * validating a number 
 * if null(prompt-> cancel) return -1
 * if number return absolute integer value
 * if not valid number return randomly generated number between 1-10(inclusive)
 * @param {number} num 
 * @returns {number}
 */
function validateUserNumber(num) {
	if (num === null) {
		return -1;// in case of cancel 
	} else if (!isNaN(num)) {
		return Math.abs(Math.trunc(num));// return the absolute integer value
	} else if (isNaN(num) || num === 0) {
		return generateRandom(1, 10) // not valid number
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

//generating button for multiplication table

let btnNode = document.createElement("button");
btnNode.id = "showTable";
btnNode.innerText = "Show Multplication Table";
btnNode.addEventListener("click", promptTable);

bodyNode.appendChild(btnNode);

//reload button

let btnNodeReload = document.createElement("button");
btnNodeReload.id = "reloadPage";
btnNodeReload.innerText = "Reload Page";
btnNodeReload.addEventListener("click", reloadPage);
btnNodeReload.style.marginLeft = "15px";

bodyNode.appendChild(btnNodeReload);

function reloadPage() {
	location.reload();
}

