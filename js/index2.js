// script.js

let currentInput = '';
let operator = '';
let previousInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function setOperator(op) {
    if (currentInput !== '') {
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    if (operator && currentInput !== '') {
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operator) {
            case '+':
                currentInput = (prev + current).toString();
                break;
            case '-':
                currentInput = (prev - current).toString();
                break;
            case '*':
                currentInput = (prev * current).toString();
                break;
            case '/':
                currentInput = (current !== 0) ? (prev / current).toString() : 'Error';
                break;
            default:
                break;
        }

        document.getElementById('display').value = currentInput;
        operator = '';
        previousInput = '';
    }
}
