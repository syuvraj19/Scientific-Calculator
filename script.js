let memory = 0;

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    let display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    let display = document.getElementById('display');
    display.value += operator;
}

function appendDot() {
    let display = document.getElementById('display');
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function calculateSin() {
    let display = document.getElementById('display');
    display.value = Math.sin(toRadians(display.value));
}

function calculateCos() {
    let display = document.getElementById('display');
    display.value = Math.cos(toRadians(display.value));
}

function calculateTan() {
    let display = document.getElementById('display');
    display.value = Math.tan(toRadians(display.value));
}

function calculateLog() {
    let display = document.getElementById('display');
    display.value = Math.log10(display.value);
}

function calculateLn() {
    let display = document.getElementById('display');
    display.value = Math.log(display.value);
}

function calculateSqrt() {
    let display = document.getElementById('display');
    display.value = Math.sqrt(display.value);
}

function calculateCbrt() {
    let display = document.getElementById('display');
    display.value = Math.cbrt(display.value);
}

function calculateExp() {
    let display = document.getElementById('display');
    display.value = Math.exp(display.value);
}

function calculateInverse() {
    let display = document.getElementById('display');
    display.value = 1 / display.value;
}

function calculateFactorial() {
    let display = document.getElementById('display');
    display.value = factorial(display.value);
}

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function toggleSign() {
    let display = document.getElementById('display');
    display.value = display.value.charAt(0) === '-' ? display.value.slice(1) : '-' + display.value;
}

function memoryClear() {
    memory = 0;
}

function memoryAdd() {
    memory += parseFloat(document.getElementById('display').value);
}

function memorySubtract() {
    memory -= parseFloat(document.getElementById('display').value);
}

function memoryRecall() {
    document.getElementById('display').value = memory;
}

function calculateE() {
    let display = document.getElementById('display');
    display.value = Math.E;
}

function calculateEE() {
    let display = document.getElementById('display');
    display.value += 'e';
}

function calculateRand() {
    let display = document.getElementById('display');
    display.value = Math.random();
}

function calculateRad() {
    let display = document.getElementById('display');
    display.value = toRadians(display.value);
}

function calculateSinh() {
    let display = document.getElementById('display');
    display.value = Math.sinh(display.value);
}

function calculateCosh() {
    let display = document.getElementById('display');
    display.value = Math.cosh(display.value);
}

function calculateTanh() {
    let display = document.getElementById('display');
    display.value = Math.tanh(display.value);
}

function calculatePi() {
    let display = document.getElementById('display');
    display.value = Math.PI;
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}
