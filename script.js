const display = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digit, .decimal");
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
