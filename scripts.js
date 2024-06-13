// DOM functionality
// Row1
let inputField = document.querySelector(".input");
// Row2
const ac = document.querySelector(".ac");
const backspace = document.querySelector(".backspace");
const percentage = document.querySelector(".percentage");
const division = document.querySelector(".division");
// Row3
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const multiplication = document.querySelector(".multiplication");
// Row 4
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const subtraction = document.querySelector(".subtraction");
// Row 5
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const addition = document.querySelector(".addition");
// Row 6
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");
const equals = document.querySelector(".equals");
const modulusButton = document.querySelector(".modulus");

// Initializes the calculator array
let calculationArray = [];

// Clear
ac.addEventListener("click", () => {
  inputField.textContent = "0";
  calculationArray = [];
});

// Digits
one.addEventListener("click", () => {
  clearZeroAddNumbers();
  inputField.textContent += 1;
  calculationArray.push(1);
});
two.addEventListener("click", () => {
  clearZeroAddNumbers();
  inputField.textContent += 2;
  calculationArray.push(2);
});
three.addEventListener("click", () => {
  clearZeroAddNumbers();
  inputField.textContent += 3;
  calculationArray.push(3);
});
four.addEventListener("click", () => {
  clearZeroAddNumbers();
  inputField.textContent += 4;
  calculationArray.push(4);
});
five.addEventListener("click", () => {
  clearZeroAddNumbers();
  inputField.textContent += 5;
  calculationArray.push(5);
});
six.addEventListener("click", () => {
  clearZeroAddNumbers();
  inputField.textContent += 6;
  calculationArray.push(6);
});
seven.addEventListener("click", () => {
  clearZeroAddNumbers();
  inputField.textContent += 7;
  calculationArray.push(7);
});
eight.addEventListener("click", () => {
  clearZeroAddNumbers();
  inputField.textContent += 8;
  calculationArray.push(8);
});
nine.addEventListener("click", () => {
  clearZeroAddNumbers();
  inputField.textContent += 9;
  calculationArray.push(9);
});
zero.addEventListener("click", () => {
  inputField.textContent += 0;
  calculationArray.push(0);
});
dot.addEventListener("click", () => {
  if (!calculationArray.includes(".")) {
    inputField.textContent += ".";
    calculationArray.push(".");
  }
});
backspace.addEventListener("click", () => {
  inputField.textContent = inputField.textContent.slice(0, -1);
  calculationArray.pop();
});

// Operators
addition.addEventListener("click", () => {
  let containOperators = containManyOperators();
  if (!containOperators) {
    inputField.textContent += "+";
    calculationArray.push("+");
  } else {
    equalsTo("+");
  }
});
subtraction.addEventListener("click", () => {
  let containOperators = containManyOperators();
  if (!containOperators) {
    inputField.textContent += "-";
    calculationArray.push("-");
  } else {
    equalsTo("-");
  }
});
multiplication.addEventListener("click", () => {
  let containOperators = containManyOperators();
  if (!containOperators) {
    inputField.textContent += "*";
    calculationArray.push("*");
  } else {
    equalsTo("*");
  }
});
division.addEventListener("click", () => {
  let containOperators = containManyOperators();
  if (!containOperators) {
    inputField.textContent += "/";
    calculationArray.push("/");
  } else {
    equalsTo("/");
  }
});
percentage.addEventListener("click", () => {
  let containOperators = containManyOperators();
  if (!containOperators) {
    inputField.textContent += "%";
    calculationArray.push("%");
  } else {
    equalsTo("%");
  }
});
modulusButton.addEventListener("click", () => {
  let containOperators = containManyOperators();
  if (!containOperators) {
    inputField.textContent += "mod";
    calculationArray.push("mod");
  } else {
    equalsTo("mod");
  }
});
// Calculate and Output the Answer
equals.addEventListener("click", () => {
  equalsTo("=");
});

//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
// Essential Functions
// Add, Subtract, Divide and Multiply Functions
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return "Invalid Operation";
  } else {
    return num1 / num2;
  }
}
function percentageCalc(num1, num2) {
  return (num1 / 100) * num2;
}
function modulus(num1, num2) {
  return num1 % num2;
}

// Operate Function
function operate(num1, operator, num2) {
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = percentageCalc(num1, num2);
      break;
    case "mod":
      result = modulus(num1, num2);
  }
  return result;
}
// Get the Operator(String)
function getOperator() {
  let operator = calculationArray.filter((item, index, array) => {
    if (item == "+") {
      return true;
    }
    if (item == "-") {
      return true;
    }
    if (item == "*") {
      return true;
    }
    if (item == "/") {
      return true;
    }
    if (item == "%") {
      return true;
    }
    if (item == "mod") {
      return true;
    }
  });
  return operator.join("");
}

function equalsTo(operationToBeCarriedOut) {
  // Get the Operator(String)
  getOperator();
  // Calculation Logic
  let indexOfOperator = calculationArray.indexOf(getOperator());

  let firstOperand = Number(
    calculationArray.slice(0, indexOfOperator).join("")
  );
  let operator = getOperator();
  let secondOperand = Number(
    calculationArray.slice(indexOfOperator + 1).join("")
  );
  let mainResult;
  let resultValue;

  switch (operationToBeCarriedOut) {
    case "=":
      mainResult = operate(firstOperand, operator, secondOperand);
      inputField.textContent = mainResult;
      resultValue = String(mainResult).split("");
      calculationArray = [...resultValue];
      break;
    case "+":
      mainResult = operate(firstOperand, operator, secondOperand);
      resultValue = String(mainResult).split("");
      inputField.textContent = mainResult + "+";
      calculationArray = [...resultValue, "+"];
      break;
    case "-":
      mainResult = operate(firstOperand, operator, secondOperand);
      resultValue = String(mainResult).split("");
      inputField.textContent = mainResult + "-";
      calculationArray = [...resultValue, "-"];
      break;
    case "*":
      mainResult = operate(firstOperand, operator, secondOperand);
      resultValue = String(mainResult).split("");
      inputField.textContent = mainResult + "*";
      calculationArray = [...resultValue, "*"];
      break;
    case "/":
      mainResult = operate(firstOperand, operator, secondOperand);
      resultValue = String(mainResult).split("");
      inputField.textContent = mainResult + "/";
      calculationArray = [...resultValue, "/"];
      break;
    case "mod":
      mainResult = operate(firstOperand, operator, secondOperand);
      resultValue = String(mainResult).split("");
      inputField.textContent = mainResult + "mod";
      calculationArray = [...resultValue, "mod"];
  }
}

function containManyOperators() {
  if (
    calculationArray.includes("+") ||
    calculationArray.includes("*") ||
    calculationArray.includes("/") ||
    calculationArray.includes("-") ||
    calculationArray.includes("%") ||
    calculationArray.includes("mod")
  ) {
    return true;
  }
}

function clearZeroAddNumbers() {
  if (
    inputField.textContent == "0" ||
    inputField.textContent == "Invalid Operation" ||
    inputField.textContent == "NaN"
  ) {
    inputField.textContent = "";
    calculationArray = [];
  }
}
