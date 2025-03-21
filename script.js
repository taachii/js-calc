const display = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".printable");
const clearButton = document.querySelector(".ac");
const backButton = document.querySelector(".back")

const maxDisplayStringLength = 10;
let a = null;
let b = null;
let operator = null;

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
    display.textContent = "";
  });

  backButton.addEventListener("click", () => {
    const text = display.textContent;
    display.textContent = text.slice(0, -1);
  });
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
      return changeSign(a);
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

function reverse(a) {
  return 1 / a;
}

function percentage(a) {
  return a / 100;
}

function changeSign(a) {
  return -a;
}

