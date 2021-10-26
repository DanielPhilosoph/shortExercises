class ClassicGuitar {
  #id;
  constructor(
    munifuctureYear,
    brand,
    price,
    numberOfString = 6,
    used = false,
    id
  ) {
    this._munifuctureYear = munifuctureYear;
    this._brand = brand;
    this._price = price;
    this._numberOfString = numberOfString;
    this._used = used;
    this.#id = id;
  }

  play() {
    this._price = this.price * 0.9;
    return "🎶🎶🎶";
  }

  get price() {
    return this._price;
  }

  set price(inputPrice) {
    if (typeof inputPrice !== "number") {
      console.log("Must be a number!");
      return;
    }
    this._price = inputPrice;
  }

  get munifuctureYear() {
    return this._munifuctureYear;
  }

  get brand() {
    return this._brand;
  }

  get id() {
    return this.#id;
  }

  static detectSound(sound) {
    if (sound.search("🎸") != -1) {
      return "ElectricGuitar";
    } else if (sound.search("🔊") != -1) {
      return "BassGuitar";
    }
  }
}

class ElectricGuitar extends ClassicGuitar {
  constructor(
    munifuctureYear,
    brand,
    price,
    numberOfString = 6,
    used = false,
     id,
    longNeck
  ) {
    super(munifuctureYear, brand, price, numberOfString, used, id);
    this._longNeck = longNeck;
  }

  play() {
    return "🎸🎸🎸";
  }
}

class BassGuitar extends ClassicGuitar {
  constructor(
    munifuctureYear,
    brand,
    price,
    numberOfString = 4,
    used = false,
    id
  ) {
    super(munifuctureYear, brand, price, numberOfString, used, id);
  }

  play() {
    return "🔊🔊🔊";
  }

  playSolo() {
    let soundArray = ["💥", "🤘", "🎵", "📢", "💢", "🕺"];
    const rndInt = Math.floor(Math.random() * 6);
    return soundArray[rndInt];
  }
}
