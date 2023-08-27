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
let clear = document.querySelector('#clear');

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
            screen.innerText = firstNum;
            console.log(firstNum);
        } else {
            secondNum += e.target.innerText;
            screen.innerText = ' ' + secondNum;
            console.log(secondNum);
        }
    });
});

mathSign.forEach(sign => {
    sign.addEventListener('click', e => {
        if (e.target.innerText !== '=') {
        operand = e.target.innerText;
        screen.innerText += ' ' + operand + ' ';
        console.log(operand)
        } else {
            switch (operand) {
                case '+':
                    console.log(addition(firstNum, secondNum));
                    screen.innerText = addition(firstNum, secondNum);
                    firstNum = addition(firstNum, secondNum);
                    secondNum = "";
                    break;
                case '-':
                    console.log(subtraction(firstNum, secondNum));
                    screen.innerText = subtraction(firstNum, secondNum);
                    firstNum = subtraction(firstNum, secondNum);
                    secondNum = "";
                    break;
                case 'x':
                    console.log(multiplication(firstNum, secondNum));
                    screen.innerText = multiplication(firstNum, secondNum);
                    firstNum = multiplication(firstNum, secondNum);
                    secondNum = "";
                    break;
                case '/':
                    console.log(division(firstNum, secondNum));
                    screen.innerText = division(firstNum, secondNum);
                    firstNum = division(firstNum, secondNum);
                    secondNum = "";
                    break;
                default:
                    break;
            }
        }
    });
});

clear.addEventListener('click', () => {
    screen.innerText = 0;
    firstNum = '';
    secondNum = '';
    operand = '';
});
