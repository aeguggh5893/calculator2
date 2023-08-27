"use strict"

function addition(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

let firstNum = "";
let secondNum = "";
let operand = "";

function operate(num1, num2, operator) {
    if (operator === '+') {
        return addition(num1, num2);
    } else if (operator === '-') {
        return subtraction(num1, num2);
    } else if (operator === 'x') {
        return multiplication(num1, num2);
    } else {
        return division(num1, num2);
    }
}

let screen = document.querySelector('#screen');
let buttons = document.querySelectorAll('.value');
let mathSign = document.querySelectorAll('.operator');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');

screen.innerText = 0;



// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         screen.innerHTML += this.innerText;
//     })
// }

buttons.forEach(number => {
    number.addEventListener('click', e => {
        if (operand === "") {
            firstNum += e.target.innerText;
            console.log(firstNum);
        } else {
            secondNum += e.target.innerText;
            console.log(secondNum);
        }
    });
});

mathSign.forEach(sign => {
    sign.addEventListener('click', e => {
        if (e.target.innerText !== '=') {
        operand = e.target.innerText;
        console.log(operand)
        } else {
            switch (operand) {
                case '+':
                    addition(firstNum, secondNum);
                    break;
                
                default:
                    break;
            }
        }
    });
});


