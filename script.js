const display = document.querySelector(".display");
const miniDisplay = document.querySelector(".mini-display");
const digitButtons = document.querySelectorAll(".printable");
const clearButton = document.querySelector(".ac");
const backButton = document.querySelector(".back")
const equalsButton = document.querySelector(".equals");
const unaryOperators = document.querySelectorAll(".unary");
const binaryOperators = document.querySelectorAll(".binary")

const maxDisplayStringLength = 10;
let a = null;
let b = null;
let op = null;

init();

function init() {
  addEventListeners();
}

function addEventListeners() {
  digitButtons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.textContent.trim();
      if (display.textContent.length < maxDisplayStringLength) {
        display.textContent += value;
      }
    });
  });

  clearButton.addEventListener("click", () => {
    clearDisplay();
    miniDisplay.textContent = "";
    a = null;
    b = null
    op = null;
  });

  backButton.addEventListener("click", () => {
    const text = display.textContent;
    display.textContent = text.slice(0, -1);
  });

  equalsButton.addEventListener("click", () => {
    if (a !== null && op !== null) {
      if (b === null) {
        b = display.textContent;
      }
      const result = operate(parseFloat(a), op, parseFloat(b));
      printResult(result);
      miniDisplay.textContent = `${a} ${op} ${b} =`;
      a = result;
      b = null;
      op = null;
    }
  });

  unaryOperators.forEach(unary => {
    unary.addEventListener("click", () => {
      a = display.textContent;
      op = unary.textContent;
      printResult(operate(parseFloat(a), op));
    });
  });

  
  binaryOperators.forEach(binary => {
    binary.addEventListener("click", () => {
      if (a !== null && op !== null) {
        // Jeśli kliknięto operator kolejny raz, oblicz najpierw aktualny wynik
        b = display.textContent;
        const result = operate(parseFloat(a), op, parseFloat(b));
        printResult(result);
        a = result;
        b = null;
      } else {
        // Jeśli pierwszy operator, przypisz a i czekaj na b
        a = display.textContent;
      }
      op = binary.textContent;
      miniDisplay.textContent = `${a} ${op}`;
      clearDisplay();
    });
  });
}

function printResult(result) {
  display.textContent = String(result).slice(0, maxDisplayStringLength);
}

function clearDisplay() {
  display.textContent = "";
}

function operate(a, op, b = null) {
  switch(op) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '%':
      return percentage(a);
    case '×':
      return multiply(a, b);
    case '÷':
      return divide(a, b);
    case '√':
      return sqroot(a);
    case '±':
      return negate(a);
    case 'x2':
      return sqr(a);
    case 'x-1':
      return inverse(a);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function sqr(a) {
  return a ** 2;
}

function sqroot(a) {
  return Math.sqrt(a);
}

function inverse(a) {
  return 1 / a;
}

function percentage(a) {
  return a / 100;
}

function negate(a) {
  return -a;
}