import Box from "./Box";
import React, { useState } from "react";
import { Place, PlayerModel, Chance, Prison } from "./Objects";
import Dice from "./Dice";
import initialQuestions from "./questions.json";
import Player from "./Player";

const initialPlayers = [
  new PlayerModel("Player 1", 1000, 0),
  new PlayerModel("Player 2", 1000, 0),
];

const initialBoxes = [
  new Place("Start", []),
  new Place("Blockchain Park", initialQuestions),
  new Chance(initialQuestions),
  new Prison(initialQuestions),
];

function GameBoard() {
  const [players, setPlayers] = useState(initialPlayers);
  const [boxes, setBoxes] = useState(initialBoxes);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [diceValue, setDiceValue] = useState(0);

  const rollDice = () => {
    const value = Math.floor(Math.random() * 6) + 1;
    setDiceValue(value);
    movePlayer(value);
  };

  const movePlayer = (value) => {
    const newPlayers = [...players];
    let currentPlayer = newPlayers[currentPlayerIndex];
    currentPlayer.currentPos =
      (currentPlayer.currentPos + value) % boxes.length;
    setPlayers(newPlayers);
    handleBox(currentPlayer);
    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
  };

  const handleBox = (player) => {
    const box = boxes[player.currentPos];
    if (box.type === "place" && !box.owner) {
      // Logic for buying the place
    } else if (box.type === "chance") {
      // Logic for chance box
    } else if (box.type === "prison") {
      // Logic for prison box
    }
  };

  return (
    <div>
      <Dice rollDice={rollDice} value={diceValue} />
      <div className="grid grid-cols-8 gap-2">
        {boxes.map((box, index) => (
          <Box key={index} box={box} />
        ))}
      </div>
      <div>
        {players.map((player, index) => (
          <Player
            key={index}
            player={player}
            isCurrent={index === currentPlayerIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
