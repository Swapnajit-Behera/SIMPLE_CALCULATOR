function getNumbers() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML =
            "Result: Please enter both numbers.";
        return null;
    }

    return { num1, num2 };
}

function add() {
    let numbers = getNumbers();
    if (!numbers) return;

    let result = numbers.num1 + numbers.num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}

function subtract() {
    let numbers = getNumbers();
    if (!numbers) return;

    let result = numbers.num1 - numbers.num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}

function multiply() {
    let numbers = getNumbers();
    if (!numbers) return;

    let result = numbers.num1 * numbers.num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}

function divide() {
    let numbers = getNumbers();
    if (!numbers) return;

    if (numbers.num2 === 0) {
        document.getElementById("result").innerHTML =
            "Result: Cannot divide by zero.";
        return;
    }

    let result = numbers.num1 / numbers.num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}