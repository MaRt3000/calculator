let lastChar = '';

function appendNumber(num) {
    document.getElementById('display').num += num;

    display.value += num;
    lastChar = num;
}


function appendOperator(op) {
    document.getElementById('display').op += op;
    // Prevents entering multiple operators in a row
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0,-1);
    }
      // Prevents starting with an operator
    if (display.value === '' && ['+', '-', '*', '/'].includes(op)) {
        return;
    }
    display.value += op;
    lastChar = op;
    
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}






