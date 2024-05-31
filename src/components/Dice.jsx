import React from "react";
import Dice from "react-dice-roll";

const CustomDice = ({ onRoll }) => {
  return (
    <div className="flex justify-center">
      <Dice
        size={100}
        onRoll={(value) => onRoll(value)}
        faces={6}
        rollingTime={1500}
      />
    </div>
  );
};

export default CustomDice;
