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
function modulus() {
    return a % b;
}

function exponent() {
    return a ** b;
}
function squareRoot() {
    if (a < 0) {
        throw new Error("Cannot take square root of a negative number");
    }
    return Math.sqrt(a);
}
function absolute() {

    return Math.abs(a);
}
function log() {
    if (a <= 0) {
        throw new Error("Logarithm undefined for non-positive numbers");
    }
    return Math.log(a);
}
function factorial(n) {

    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}