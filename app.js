"use strict"

let firstValue = "";
let secondValue = "";
let operand = "";



function operate(num1, num2, op) {
    if (op === "+") {
        return parseFloat(num1) + parseFloat(num2);
    } else if (op === "-") {
        return parseFloat(num1) - parseFloat(num2);
    } else if (op === "x") {
        return parseFloat(num1) * parseFloat(num2);
    } else {
        return parseFloat(num1) / parseFloat(num2);
    };
};

let previousDisplay = document.querySelector('#previous');
let currentDisplay = document.querySelector('#current');

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function() {
    currentDisplay.innerText = "0";
    previousDisplay.innerText = "";
    firstValue = "";
    secondValue = "";
    operand = "";
});


let deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', function() {
    if (firstValue.length > 0 && currentDisplay.innerText === firstValue) {
        let string = firstValue.split('');
        string.pop();
        firstValue = string.join('');
        currentDisplay.innerText = firstValue;
    } else {
        let string = secondValue.split('');
        string.pop();
        secondValue = string.join('');
        currentDisplay.innerText = secondValue;
    };
});


let decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', function(e) {
    if (!secondValue.includes('.')) {
        secondValue += e.target.innerText;
        currentDisplay.innerText = secondValue;
    } else {
        firstValue += e.target.innerText;
        currentDisplay.innerText = firstValue;
    };
});

let numberButtons = document.querySelectorAll('.number');
let operationButtons = document.querySelectorAll('.operation');



numberButtons.forEach(item => {
    item.addEventListener('click', function(e) {
        if (operand === "") {
            if (currentDisplay.innerText === '0') {
                currentDisplay.innerText = "";
            };
            firstValue += e.target.innerText;
            currentDisplay.innerText += e.target.innerText;
        } else {
            secondValue += e.target.innerText;
            currentDisplay.innerText += e.target.innerText;
        };
    });
});

operationButtons.forEach(item => {
    item.addEventListener('click', function(e) {
       if (operand === "" && e.target.innerText !== '=') {
        operand = e.target.innerText;
        currentDisplay.innerText += ` ${e.target.innerText}`;
        previousDisplay.innerText = currentDisplay.innerText;
        currentDisplay.innerText = "";
        } else if (e.target.innerText === "=") {
            if (firstValue === "" || operand === "" || secondValue === "") {
                return;
            } else {
                let answer = operate(firstValue, secondValue, operand);
                answer = answer.toString();
                firstValue = answer;
                operand = "";
                secondValue = "";
                previousDisplay.innerText = "";
                currentDisplay.innerText = answer;
            };
        } else {
            let answer = operate(firstValue, secondValue, operand);
            answer = answer.toString();
            firstValue = answer;
            operand = "";
            operand = e.target.innerText;
            secondValue = "";
            currentDisplay.innerText = "";
            previousDisplay.innerText = `${answer}  ${e.target.innerText}`;
        };
    });
});