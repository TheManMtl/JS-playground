function madlibsKeys() {
    let name = validatePromt("Give it a name!");
    let adj = validatePromt("What is the adj?");
    let event = validatePromt("What is the event?");

    alert("Please Excuse " + name + " who is too cool for " + adj + " class,"
        +" they will be at the " + event + " instead");

}
/**
 * 
 * @param {string} q 
 * @returns {string}
 */
function validatePromt(q) {
    let response;
    do {
        response = prompt(q);
    } while (response === null || response.trim() == "")
    return response;
}