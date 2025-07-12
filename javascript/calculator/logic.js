function inputNumber(num) {
    document.calculator.display.value += num;
}

function clearDisplay() {
    document.calculator.display.value = ''; 
}

function calculate() {
   document.calculator.display.value = eval(document.calculator.display.value);
}