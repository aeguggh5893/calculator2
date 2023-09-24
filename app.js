"use strict"

let firstValue = "";
let secondValue = "";
let operand = "";

function addition(a, b) {
    return parseFloat(a) + parseFloat(b);
};

function subtraction(a, b) {
    return parseFloat(a) - parseFloat(b);
};

function multiplication(a, b) {
    return parseFloat(a) * parseFloat(b);
};

function division(a, b) {
    if(b == 0) {alert("Can't divide by 0!");
    return;
    };  

    return parseFloat(a) / parseFloat(b);
};

function operate(a, b, operation) {
    if (operation === '+') {
        return addition(a, b);
    } else if (operation === '-') {
        return subtraction(a, b);
    } else if (operation === 'x') {
       return multiplication(a, b);
    } else {
       return division(a, b);
    };
};

let numberButtons = document.querySelectorAll('.number');
let operationButtons = document.querySelectorAll('.operation');
let currentDisplay = document.querySelector('#current');
let previousDisplay = document.querySelector('#previous');
let clearButton = document.querySelector('.clear');
let deleteButton = document.querySelector('.delete');
let decimalButton = document.querySelector('#decimal');


numberButtons.forEach(item => {
    item.addEventListener('click', e => {
        if (operand === "") {
            firstValue += e.target.innerText;
            currentDisplay.innerText += e.target.innerText;
        } else {
            secondValue += e.target.innerText;
            currentDisplay.innerText += e.target.innerText
        };
    });
});


operationButtons.forEach(item => {
    item.addEventListener('click', e => {
       
        if (firstValue && secondValue && e.target.innerText !== '=') {
            let answer = operate(firstValue, secondValue, operand);
            firstValue = answer.toString();
            currentDisplay.innerText = firstValue;
            previousDisplay.innerText = "";
            operand = e.target.innerText;
            secondValue = "";
        };
        
        if (e.target.innerText !== "=") {
            operand = e.target.innerText;
            currentDisplay.innerText += ` ${e.target.innerText}`;
            previousDisplay.innerText = currentDisplay.innerText;
            currentDisplay.innerText = "";
        } else {
            let answer = operate(firstValue, secondValue, operand);
            firstValue = answer.toString();
            currentDisplay.innerText = firstValue;
            previousDisplay.innerText = "";
            operand = "";
            secondValue = "";
        };
    });
});

clearButton.addEventListener('click', function() {
    currentDisplay.innerText = "";
    previousDisplay.innerText = "";
    firstValue = "";
    secondValue = "";
    operand = "";
});

deleteButton.addEventListener('click', function() {
    if (secondValue.length > 0) {
        let string = secondValue.split('');
        string.pop();
        secondValue = string.join('');
        currentDisplay.innerText = secondValue;
    } else {
        let string = firstValue.split('');
        string.pop();
        firstValue = string.join('');
        currentDisplay.innerText = firstValue;
    };
});

decimalButton.addEventListener('click', function(e) {
    if (!firstValue.includes('.')) {
        firstValue += e.target.innerText;
        currentDisplay.innerText = firstValue;
    } else {
        if (!secondValue.includes('.')) {
            secondValue += e.target.innerText;
            currentDisplay.innerText = secondValue;
        };
    };
});

