// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = "not bob";
}
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}
const leastFavoriteCustomer = "somebody else";

function changeLeastFavoriteCustomer() {
    // This should throw an error as reassignment of a constant is not allowed
    leastFavoriteCustomer = "another person";
}
