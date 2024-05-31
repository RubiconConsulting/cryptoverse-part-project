import React from "react";

function Player({ player, isCurrent }) {
  return (
    <div
      className={`p-4 border ${
        isCurrent ? "border-red-500" : "border-gray-300"
      }`}
    >
      <h2 className="font-bold">{player.name}</h2>
      <p>Balance: {player.balance}</p>
      <p>Position: {player.currentPos}</p>
    </div>
  );
}

export default Player;
