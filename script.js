const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const AC = document.querySelector(".AC");
const dot = document.querySelector(".dot");
const deleteBtn = document.querySelector(".delete");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");

let currentOperator = "";
let prevOperand = "";
let currOperand = "";

function compute(operator) {
  console.log("run");
  let result = 0;
  let prev = parseFloat(prevOperand);
  let curr = parseFloat(currOperand);
  if (isNaN(prev) || isNaN(curr)) return;
  switch (operator) {
    case "/":
      result = prev / curr;
      if (result.toString().length > 7) {
        result = result.toPrecision(5);
      }
      display.innerText = result;
      break;
    case "*":
      result = prev * curr;
      if (result.toString().length > 7) {
        result = result.toPrecision(5);
      }
      display.innerText = result;
      break;
    case "-":
      result = prev - curr;
      if (result.toString().length > 7) {
        result = result.toPrecision(5);
      }
      display.innerText = result;
      break;
    case "+":
      result = prev + curr;
      if (result.toString().length > 7) {
        result = result.toPrecision(5);
      }
      display.innerText = result;
      break;

    default:
      break;
  }
  // currentOperator = "";
  prevOperand = result.toString();
  currOperand = result.toString();
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (currOperand === "0" && number.innerText === "0") return;
    currOperand += number.innerText;
    display.innerText = currOperand;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    console.log(currentOperator, currOperand, prevOperand);
    const op = operator.dataset.op;
    if (op === "=" || currOperand === "") return;
    if (currentOperator !== "" && prevOperand !== "" && currOperand !== "") {
      compute(currentOperator);
    }
    switch (op) {
      case "%":
        if (prevOperand !== "") {
          prevOperand = prevOperand / 100;
          currOperand = prevOperand;
          display.innerText = prevOperand;
        } else {
          currOperand = currOperand / 100;
          display.innerText = currOperand;
        }
        return;
        break;
      case "/":
        currentOperator = "/";
        break;
      case "*":
        currentOperator = "*";
        break;
      case "-":
        currentOperator = "-";
        break;
      case "+":
        currentOperator = "+";
        break;

      default:
        return;
        break;
    }
    if (prevOperand === "") prevOperand = currOperand;
    currOperand = "";
  });
});

AC.addEventListener("click", () => {
  currentOperator = "";
  currOperand = "";
  prevOperand = "";
  display.innerText = "0";
});

dot.addEventListener("click", () => {
  if (currOperand.includes(".")) return;
  currOperand += ".";
  display.innerText = currOperand;
});

deleteBtn.addEventListener("click", () => {
  if (currOperand.length <= 1) {
    currOperand = "";
    display.innerText = 0;
    return;
  }
  currOperand = currOperand.slice(0, -1);
  display.innerText = currOperand;
});

equal.addEventListener("click", () => {
  compute(currentOperator);
  currentOperator = "";
  prevOperand = "";
});
