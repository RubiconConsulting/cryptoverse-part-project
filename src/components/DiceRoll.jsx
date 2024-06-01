import React, { useState } from "react";
import Dice from "./Dice";

const DiceRoll = ({ onRoll }) => {
  const [diceValue, setDiceValue] = useState(null);

  const handleRoll = () => {
    const value = Math.floor(Math.random() * 6) + 1;
    setDiceValue(value);
    onRoll(value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Roll the Dice</h2>
        <Dice value={diceValue} />
        <button
          onClick={handleRoll}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Roll
        </button>
      </div>
    </div>
  );
};

export default DiceRoll;
