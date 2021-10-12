function isRightAngle(side1, side2, hypotenuse) {
  if (powerTwo(side1) + powerTwo(side2) === powerTwo(hypotenuse)) {
    return true;
  } else {
    return false;
  }
}

function powerTwo(number) {
  return multiply(number, number);
}

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(isRightAngle(3, 4, 5));
