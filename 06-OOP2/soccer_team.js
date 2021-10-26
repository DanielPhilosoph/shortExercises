class Person {
  #id;
  constructor(firstName, sureName, salary, age, id) {
    this._firstName = firstName;
    this._sureName = sureName;
    this._salary = salary;
    this._age = age;
    this.#id = id;
  }

  get sureName() {
    return this._sureName;
  }

  get firstName() {
    return this._firstName;
  }

  get salary() {
    return this._salary;
  }

  get age() {
    return this._age;
  }

  get id() {
    return this.#id;
  }

  set salary(money) {
    this._salary = money;
  }

  set age(yearsOld) {
    this._age = yearsOld;
  }
}

class Player extends Person {
  constructor(
    firstName,
    sureName,
    salary,
    age,
    id,
    strongLegs,
    position,
    celebrationSentence
  ) {
    super(firstName, sureName, salary, age, id);
    this._strongLegs = strongLegs;
    this._position = position;
    this._celebrationSentence = celebrationSentence;
  }

  goalClebration() {
    console.log(this._celebrationSentence);
    this._salary = this.salary + this.salary * 0.025;
  }

  get celebrationSentence() {
    return this._celebrationSentence;
  }

  get strongLegs() {
    return this.strongLegs;
  }

  get position() {
    return this._position;
  }

  set celebrationSentence(sentence) {
    this._celebrationSentence = sentence;
  }

  set strongLegs(strong) {
    this._strongLegs = strong;
  }

  set position(positioning) {
    this._position = positioning;
  }
}

class GoalKeeper extends Player {
  constructor(
    firstName,
    sureName,
    salary,
    age,
    id,
    strongLegs,
    position,
    celebrationSentence,
    isLeftHanded,
    lastGoalConceded = new Date()
  ) {
    super(
      firstName,
      sureName,
      salary,
      age,
      id,
      strongLegs,
      position,
      celebrationSentence
    );
    this._isLeftHanded = isLeftHanded;
    this._lastGoalConceded = lastGoalConceded;
  }

  concededAGoal() {
    this._lastGoalConceded = new Date();
    this._salary = this.salary - this.salary * 0.025;
  }

  get isLeftHanded() {
    return this._isLeftHanded;
  }

  get lastGoalConceded() {
    return this._lastGoalConceded;
  }

  set lastGoalConceded(date) {
    this.lastGoalConceded = date;
  }
}

let x = new Player("d", "f", 100, 19, 1, true, "Left", "Halo");
x.goalClebration();
console.log(x.salary);
