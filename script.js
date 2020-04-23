function assignButtonFunctions (){
	for (let i=0; i < keypad.childNodes.length; i++) {
		keypad.childNodes[i].addEventListener('click', function(e) {
			pressButton(e.target)
		});
	}
}

function pressButton (button)
{
	var cls = button.classList;
	switch (true) {
		case cls.contains('number'):
			pressNumber(parseInt(button.id))
			break;
		case cls.contains('ce'):
			initCalculator()
			break;
		case cls.contains('operator'):
			pressOperator(button.id)
			break;
		default:
			console.log("Button error! ")
	}
	console.log("result "+result)
	console.log("current value "+currentValue)
}

function pressNumber (number) {
	currentValue = currentValue*10+number
	display.textContent = currentValue
}
function pressOperator(operator) {
	switch (lastOperation) {
		case "add":
			result = currentValue + result
			break;
		case "multiply":
			result = result * currentValue
			break;
		case "substract":
			result = result - currentValue
			break
		case "divide":
			result = result / currentValue
			break
		case "":
			result = currentValue
			break;
		default:
			console.log("error operationgi")
	}
	if (operator == "equal" ) {
		lastOperation = ""
		currentValue = result
	} else {
		lastOperation = operator
		currentValue = 0
	}
	display.textContent = result
}

function initCalculator ()
{
  currentValue = 0
	lastOperation = ""
	result=0
	display.textContent = currentValue
}

let currentValue 
let result
let lastOperation
const keypad = document.querySelector('#keypad')
const display = document.querySelector('#display')
assignButtonFunctions()
initCalculator()
