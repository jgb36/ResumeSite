/* code goes here */
/* Responsible for setting up event listeners on page */
function init(){
    document.getElementById("createForm").addEventListener("submit", checkForEmptyFields);
}
window.addEventListener("load", init);

const fName = document.getElementById("First Name");
const lName = document.getElementById("Last Name");
const email = document.getElementById("Email");
const address = document.getElementById("Address");
const city = document.getElementById("City");
const state = document.getElementById("State");
const zipCode = document.getElementById("Zip Code");

