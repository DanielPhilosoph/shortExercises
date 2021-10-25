// Poker
// =====================

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Card {
  constructor(_number, _suit) {
    this.number = _number;
    this.suit = _suit;
    this.cardShort = _suit[0] + _number;
  }

  showCard() {
    console.log(this.number + " of " + this.suit);
  }
}

class DeckOfCards {
  constructor() {
    this.deck = [];
    let numberArr = [];
    const order = "23456789TJQKA";
    for (let i = 0; i < order.length; i++) {
      numberArr.push(order[i]);
    }
    for (let suit of ["Diamonds", "Hearts", "Spades", "Clubs"]) {
      for (let i of numberArr) {
        let card = new Card(i, suit);
        this.deck.push(card);
      }
    }
  }

  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
    return this;
  }
}

class Player {
  constructor(_name) {
    this.name = _name;
    this.wins = 0;
    this.card1;
    this.card2;
    this.inGame = true;
  }

  fold() {
    this.inGame = false;
  }

  winner() {
    this.wins += 1;
  }

  giveCards(_card1, _card2) {
    this.card1 = _card1;
    this.card2 = _card2;
  }

  returnCardsToDealer() {
    this.card1 = "";
    this.card2 = "";
  }

  bid() {
    rl.question(
      "Do you wish to check? 0 is yes, anything else is no",
      (answer) => {
        if (answer != 0) {
          fold();
        }
      }
    );
  }
}

class Poker {
  constructor(_deck, _players) {
    this.deck = _deck; // DeckOfCards
    this.players = _players; //Array of players
    this.table = [];
    this.deck.shuffle().shuffle();
  }

  round_zero() {
    this.players.forEach((player) => {
      player.giveCards(
        this.deck.deck.splice(0, 1)[0],
        this.deck.deck.splice(0, 1)[0]
      );
    });
  }

  checkParticipents() {
    let activePlayers = [];
    this.players.forEach((player) => {
      if (player.inGame) {
        activePlayers.push(player);
      }
    });
    if (activePlayers.length === 0) {
      return false;
    }
    if (activePlayers.length === 1) {
      console.log("The Winner is " + activePlayers[0].name + "!");
      activePlayers[0].winner();
      return false;
    }
    return true;
  }

  round_one() {
    for (let i = 0; i < 3; i++) {
      this.table.push(this.deck.deck.splice(0, 1)[0]);
    }
    this.players.forEach((player) => {
      player.bid();
    });
    // Check if there are enough players left (or only one player - winner)
    return this.checkParticipents();
  }

  round() {
    if (this.table.length < 5) {
      this.table.push(this.deck.deck.splice(0, 1)[0]);
      return true;
    } else {
      // Last round
      // ********************************************
      // Check Players hands and return the winner
      // *********************************************
      this.players[0].winner();
      this.resetGame();
      return false;
    }
  }

  resetGame() {
    this.players.forEach((player) => {
      player.returnCardsToDealer();
    });
    this.deck = new DeckOfCards();
    this.deck.shuffle().shuffle();
    this.table = [];
  }

  status() {
    this.players.forEach((player) => {
      console.log(
        "Player " +
          player.name +
          " got: " +
          player.card1.cardShort +
          " and " +
          player.card2.cardShort
      );
    });
    console.log("On the table: ");
    this.table.forEach((card) => {
      card.showCard();
    });
  }
}

let x = new DeckOfCards();
let players = [new Player("Daniel"), new Player("Pita")];
let pokerGame = new Poker(x, players);
pokerGame.round_zero();
pokerGame.round_one();
pokerGame.round();
pokerGame.round();
pokerGame.round();
pokerGame.status();
// pokerGame.round_one();
// pokerGame.round();
// pokerGame.round();
//x.deck.forEach((card) => console.log(y++ + " " + card.showCard()));
