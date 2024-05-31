class PlayerModel {
  constructor(name, balance, currentPos) {
    this.name = name;
    this.balance = balance;
    this.currentPos = currentPos;
  }

  getBalance() {
    return this.balance;
  }

  rewardPlayer(amount) {
    this.balance += amount;
  }
}

class Box {
  constructor(name, type, questions) {
    this.name = name;
    this.type = type;
    this.questions = questions;
  }

  getQuestion() {
    let len = this.questions.length - 1;
    if (this.questions.length < 1) {
      return null;
    }

    let randomNumber = Math.floor(Math.random() * len);

    return this.questions[randomNumber];
  }
}

class Place extends Box {
  constructor(name, questions, owner = null) {
    super(name, "place", questions);
    this.questions = questions;
    this.owner = owner;
  }

  getLengthOfQuestions() {
    return this.questions.length - 1;
  }

  selectQuestion(questionNumber) {
    if (0 < questionNumber >= this.getLengthOfQuestions()) {
      return null;
    }

    return this.questions[questionNumber];
  }
}

class Chance extends Box {
  constructor(questions) {
    super("Chance", "chance", questions);
  }
}

class Prison extends Box {
  constructor(questions) {
    super("Prison", "prison", questions);
    this.prisoners = [];
  }

  prisonPlayers(player) {
    this.prisoners.append(player);
  }
}

// Main Game Object
class Game {
  constructor(players, boxes) {
    this.players = players;
    this.boxes = boxes;
    this.currentPlayerIndex = 0;
    this.diceValue = 0;
  }

  // Initialize game state
  initializeGame() {
    this.currentPlayerIndex = 0;
    this.diceValue = 0;
    this.players.forEach((player) => {
      player.currentPos = 0;
      player.balance = 1000;
    });
  }

  // Roll dice
  rollDice() {
    this.diceValue = Math.floor(Math.random() * 6) + 1;
    return this.diceValue;
  }

  // Move player
  movePlayer() {
    const player = this.players[this.currentPlayerIndex];
    player.currentPos =
      (player.currentPos + this.diceValue) % this.boxes.length;
    this.handleLanding(player);
  }

  // Handle landing on a box
  handleLanding(player) {
    const box = this.boxes[player.currentPos];
    if (box.type === "place") {
      if (!box.owner) {
        this.buyPlace(player, box);
      } else if (box.owner !== player) {
        const question = box.getQuestion();
        this.askQuestion(player, question, box);
      }
    } else if (box.type === "chance" || box.type === "prison") {
      const question = box.getQuestion();
      this.askQuestion(player, question, box);
    }
  }

  // Ask question and handle response
  askQuestion(player, question, box) {
    // Simulate asking a question and getting an answer (for now, randomize the result)
    const correct = Math.random() < 0.5; // 50% chance of getting it right
    if (correct) {
      player.rewardPlayer(question.reward);
    } else {
      player.penalizePlayer(question.penalty);
      if (box.type === "prison") {
        box.prisonPlayers(player);
      }
    }
  }

  // Buy place
  buyPlace(player, box) {
    if (!box.owner && player.balance >= box.price) {
      player.balance -= box.price;
      box.owner = player;
    }
  }

  // End turn and move to next player
  endTurn() {
    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length;
  }

  // Check game state
  checkGameState() {
    // Example conditions to check if the game is over
    const allPlacesOwned = this.boxes
      .filter((box) => box.type === "place")
      .every((box) => box.owner !== null);
    const playerBankrupt = this.players.some((player) => player.balance <= 0);

    if (allPlacesOwned || playerBankrupt) {
      // Implement game over logic
      return true;
    }
    return false;
  }
}

export { Prison, Place, PlayerModel, Chance };
