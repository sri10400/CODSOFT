let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').textContent = displayValue;
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
    document.getElementById('display').textContent = displayValue;
  } catch (error) {
    document.getElementById('display').textContent = 'Error';
    displayValue = '';
  }
}
