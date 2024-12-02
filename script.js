const display = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digit, .decimal");
const clearButton = document.querySelector(".ac");
const backButton = document.querySelector(".back")

const maxDisplayStringLength = 9;
let currentDisplayStringLength = 0;
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
      display.textContent += value;
    });
  });

  clearButton.addEventListener("click", () => {
    display.textContent = "";
    //Clear memory
  });

  backButton.addEventListener("click", () => {
    const text = display.textContent;
    display.textContent = text.slice(0, -1);
  });
}
