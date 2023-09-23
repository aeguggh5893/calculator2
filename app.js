"use strict"

let firstNumber;
let secondNumber;
let operand;

function addition(a, b) {
    return a + b;
};

function subtraction(a, b) {
    return a - b;
};

function multiplication(a, b) {
    return a * b;
};

function division(a, b) {
    return a / b;
};

function operate(a, b, operation) {
    if (operation === '+') {
        addition(a, b);
    } else if (operation === '-') {
        subtraction(a, b);
    } else if (operation === 'x') {
        multiplication(a, b);
    } else {
        division(a, b);
    };
};