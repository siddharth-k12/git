let a = 10;
let b = 20;
function add() {
    return a + b;
}
function subtract() {
    return a - b;
}   
function multiply() {
    return a * b;
}   
function divide() {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}   