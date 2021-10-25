let calculator = {
  read() {
    this.num1 = 3;
    this.num2 = 4;
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
