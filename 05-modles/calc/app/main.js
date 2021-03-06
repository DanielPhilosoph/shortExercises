import "./styles.css";
import { equals, add, sub, divide, multiply, modulo } from "./helpers/math.js";

// ===============================
// ========= Events ==============
// ===============================

function onDigitClick(event) {
  let resultInput = document.querySelector("#result");
  resultInput.value += event.target.value;
}

function onOperatorClick(event) {
  let resultInput = document.querySelector("#result");
  resultInput.value += " " + event.target.value + " ";
}

function onDelClick() {
  document.querySelector("#result").value = "";
}

function onEqualsClick(event) {
  let resultInput = document.querySelector("#result");
  let calcString = resultInput.value;
  let calcArray = calcString.split(" ");
  if (calcArray.length > 3) {
    resultInput.value = "Only 1 operator";
  } else {
    let operatorFunction = getOperatorFunction(calcArray[1]);
    resultInput.value = equals(
      parseInt(calcArray[0]),
      parseInt(calcArray[2]),
      operatorFunction
    );
  }
}

// ===============================
// ====== Extra Functions ========
// ===============================

function getOperatorFunction(simbol) {
  if (simbol === "+") {
    return add;
  } else if (simbol === "-") {
    return sub;
  } else if (simbol === "/") {
    return divide;
  } else if (simbol === "X") {
    return multiply;
  } else if (simbol === "%") {
    return modulo;
  }
}

// ===============================
// ========= Main ================
// ===============================

function main() {
  document.querySelector("#equals").addEventListener("click", onEqualsClick);
  document.querySelector("#del").addEventListener("click", onDelClick);

  let operatorArray = ["Plus", "Present", "Divide", "Times", "Minus", "Dot"];
  for (let i = 0; i < operatorArray.length; i++) {
    document
      .querySelector(`#operator${operatorArray[i]}`)
      .addEventListener("click", onOperatorClick);
  }

  for (let i = 0; i < 10; i++) {
    document
      .querySelector(`#digit${i}`)
      .addEventListener("click", onDigitClick);
  }
}
main();
