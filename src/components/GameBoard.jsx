import React, { useState } from "react";
import ParentDiceComponent from "./DiceRoll";
function GameBoard() {
  const boxes = Array.from({ length: 24 }, (_, index) => index + 1);

  return (
    <div className="w-[70%] border-2 border-white auto mx-auto">
      <div className="grid grid-cols-6">
        {boxes.map((box, index) => {
          return (
            <div
              className={`border-white border-2 h-32 w-full hover:bg-white`}
            ></div>
          );
        })}
      </div>
      <ParentDiceComponent />
    </div>
  );
}

export default GameBoard;
