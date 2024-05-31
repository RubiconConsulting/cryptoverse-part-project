import React from "react";

function Dice({ rollDice, value }) {
  return (
    <div>
      <button
        onClick={rollDice}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Roll Dice
      </button>
      <p>Dice Value: {value}</p>
    </div>
  );
}

export default Dice;
