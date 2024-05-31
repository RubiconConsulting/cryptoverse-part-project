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

class Game {}

export { Prison, Place, PlayerModel, Chance };
