import React, { useState } from "react";
import DiceRoll from "./DiceRoll";
import PlayerSelection from "./PlayerSelection";
import { PlayerModel, QuestionBox, ChanceBox, TrapBox, Game } from "./Objects";
import questions from "./questions.json";

function GameBoard() {
  const [game, setGame] = useState(null);
  const [showDiceRoll, setShowDiceRoll] = useState(false);
  const [showPlayerSelection, setShowPlayerSelection] = useState(true);
  const [diceValue, setDiceValue] = useState(null);

  const handlePlayerSelection = (players) => {
    const boxes = [
      new QuestionBox("Question 1", questions),
      new TrapBox("Trap 1"),
      new ChanceBox("Chance 1"),
    ];
    const newGame = new Game(players, boxes);
    setGame(newGame);
    setShowPlayerSelection(false);
    setShowDiceRoll(true);
  };

  const handleDiceRoll = (value) => {
    setDiceValue(value);
    if (game) {
      game.rollDice();
      game.movePlayer();
      setShowDiceRoll(false);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-900 text-white flex flex-col items-center">
      {showPlayerSelection && (
        <PlayerSelection onSelect={handlePlayerSelection} />
      )}
      {showDiceRoll && <DiceRoll onRoll={handleDiceRoll} />}
      <div className="w-[70%] border-2 border-white mt-10">
        <div className="grid grid-cols-6">
          {game &&
            game.boxes.map((box, index) => (
              <div
                key={index}
                className={`border-white border-2 h-24 w-full hover:bg-white`}
              >
                {box.name}
              </div>
            ))}
        </div>
      </div>
      <div className="mt-4 text-center">
        {game && (
          <>
            <p>Current Player: {game.players[game.currentPlayerIndex].name}</p>
            <p>Dice Roll: {diceValue}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default GameBoard;
