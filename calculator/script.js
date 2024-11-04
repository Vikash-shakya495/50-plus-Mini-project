let displayElement = document.getElementById("display");
let currentInput = "";
let previousInput = "";
let operator = null;

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = null;
    displayElement.innerText = "0";
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    displayElement.innerText = currentInput || "0";
}

function appendNumber(number) {
    if (number === 0 && currentInput === "0") return; // Prevent leading zeroes
    currentInput += number;
    displayElement.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === "" && previousInput === "") return;
    if (previousInput && currentInput) calculate();
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function appendDot() {
    if (!currentInput.includes(".")) currentInput += ".";
    displayElement.innerText = currentInput;
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            result = curr === 0 ? "Error" : prev / curr;
            break;
        case "%":
            result = prev % curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = "";
    displayElement.innerText = currentInput;
}
