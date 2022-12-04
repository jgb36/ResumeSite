function init(){
    document.getElementById("createForm").addEventListener("submit", checkForEmptyFields);
}
window.addEventListener("load", init);
const dishCode = document.getElementById("Dish Code");
const dishName = document.getElementById("Dish Name");
const price = document.getElementById("Price");
