class Cat {
  constructor(_name, _tiredness, _hunger, _lonliness, _happiness) {
    this.name = _name;
    this.tiredness = _tiredness;
    this.hunger = _hunger;
    this.lonliness = _lonliness;
    this.happiness = _happiness;
  }

  feed(amountOfFood) {
    this.hunger += amountOfFood;
  }

  sleep(numberOfHours) {
    this.tiredness -= numberOfHours;
  }

  pet() {
    this.lonliness -= 1;
    this.happiness += 3;
    let wannaPet = Math.floor(Math.random() * 10);
    if (wannaPet > 2) {
      return true;
    }
    return false;
  }

  status() {
    let tired;
    if (this.tiredness < 4) {
      tired = "jumpy";
    } else if (this.tiredness > 4 && this.tiredness < 11) {
      tired = "not tired";
    } else {
      tired = "very tired";
    }
    let hungry;
    if (this.hunger < 4) {
      hungry = "very hungry";
    } else if (this.hunger > 4 && this.hunger < 12) {
      hungry = "ate fine";
    } else {
      hungry = "full";
    }
    let lonly;
    if (this.lonliness < 6) {
      lonly = "feeling good";
    } else if (this.lonliness > 6 && this.lonliness < 15) {
      lonly = "feeling a bit lonly";
    } else {
      lonly = "feeling lonly";
    }
    let happy;
    if (this.happiness < 2) {
      happy = "depressed";
    } else if (this.happiness > 2 && this.happiness < 12) {
      happy = "fine";
    } else {
      happy = "very good";
    }
    return `${this.name} is a cute cat. He is ${this.tired} and ${this.hunger}. Also he seems to be ${this.lonly} and he is currently ${this.happy}`;
  }
}
