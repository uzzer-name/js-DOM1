let currentInput = '';
let operator = '';
let firstValue = null;

function clearAll() {
    currentInput = '';
    operator = '';
    firstValue = null;
    document.getElementById('inputField').value = '';
}

function clearEntry() {
    document.getElementById('inputField').value = '';
}

function appendNumber(num) {
    const inputField = document.getElementById('inputField');
    if (inputField.value === '0' || inputField.value === 'Error') {
        inputField.value = num.toString();
    } else {
        inputField.value += num.toString();
    }
}

function appendDecimal() {
    const inputField = document.getElementById('inputField');
    if (!inputField.value.includes('.') && inputField.value !== 'Error') {
        inputField.value += '.';
    }
}

function appendOperator(op) {
    const inputField = document.getElementById('inputField');
    const value = parseFloat(inputField.value);

    if (isNaN(value) || inputField.value === 'Error') {
        return;
    }

    if (firstValue === null) {
        firstValue = value;
    } else {
        currentInput += firstValue + ' ' + operator + ' ';
    }

    operator = op;
    currentInput += operator + ' ';
    inputField.value = '';
}

function calculateResult() {
    const inputField = document.getElementById('inputField');
    const value = parseFloat(inputField.value);

    if (isNaN(value) || firstValue === null || operator === '') {
        inputField.value = 'Error';
        return;
    }

    currentInput += value;
    let result;

    switch (operator) {
        case '+':
            result = firstValue + value;
            break;
        case '-':
            result = firstValue - value;
            break;
        case '*':
            result = firstValue * value;
            break;
        case '/':
            if (value === 0) {
                inputField.value = 'Error';
                return;
            }
            result = firstValue / value;
            break;
        default:
            inputField.value = 'Error';
            return;
    }

    // Виводимо результат без десяткових знаків, якщо це ціле число
    inputField.value = Number.isInteger(result) ? result.toString() : result.toFixed(2);
    currentInput = '';
    operator = '';
    firstValue = result; // Зберігаємо результат для наступної операції
}

function calculateSquare() {
    const inputField = document.getElementById('inputField');
    const value = parseFloat(inputField.value);
    if (!isNaN(value)) {
        const result = value * value;
        inputField.value = Number.isInteger(result) ? result.toString() : result.toFixed(2);
    } else {
        inputField.value = 'Error';
    }
}

function calculateSquareRoot() {
    const inputField = document.getElementById('inputField');
    const value = parseFloat(inputField.value);
    if (!isNaN(value)) {
        const result = Math.sqrt(value);
        inputField.value = Number.isInteger(result) ? result.toString() : result.toFixed(2);
    } else {
        inputField.value = 'Error';
    }
}