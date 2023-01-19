var displayInput = document.getElementById("display")

function clearInput() {
  displayInput.value = "";
}

function clearSingleDigit() {
  displayInput.value = displayInput.value.slice(0, -1);
}

function display(input) {
  displayInput.value += input;
}

function calculate() {
  displayInput.value = eval(displayInput.value);
}