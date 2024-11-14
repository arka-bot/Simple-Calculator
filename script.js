let result = document.querySelector('.result');

function appendToResult(value) {
	result.value += value;
}

function clearResult() {
	result.value = '';
}

function calculateResult() {
	result.value = eval(result.value);
}

function backspaceResult() {
  result.value = result.value.slice(0, -1);
}
