import React, { useState } from "react";
import Modal from "react-modal";
import CustomDice from "./Dice";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1a202c",
    color: "white",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    width: "50%",
  },
};

const DiceRoll = ({ isOpen, onClose, onDiceRoll }) => {
  const [diceValue, setDiceValue] = useState(null);

  const handleDiceRoll = (value) => {
    setDiceValue(value);
    onDiceRoll(value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Roll Dice"
    >
      <h2 className="text-2xl mb-4">Roll the Dice</h2>
      <CustomDice onRoll={handleDiceRoll} />
      {/* {diceValue && <p className="mt-4 text-xl">You rolled a {diceValue}!</p>} */}
      {/* <button
        className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        onClick={onClose}
      >
        Close
      </button> */}
    </Modal>
  );
};

const ParentDiceComponent = () => {
  const [isDiceRollOpen, setIsDiceRollOpen] = useState(false);
  const [rolledValue, setRolledValue] = useState(null);

  const openDiceRoll = () => {
    setIsDiceRollOpen(true);
  };

  const closeDiceRoll = () => {
    setIsDiceRollOpen(false);
  };

  const handleDiceRoll = (value) => {
    setRolledValue(value);
    closeDiceRoll();
  };

  return (
    <div>
      <button
        onClick={openDiceRoll}
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Roll Dice
      </button>
      <DiceRoll
        isOpen={isDiceRollOpen}
        onClose={closeDiceRoll}
        onDiceRoll={handleDiceRoll}
      />
      {rolledValue && <p>You rolled: {rolledValue}</p>}
    </div>
  );
};

export default ParentDiceComponent;
