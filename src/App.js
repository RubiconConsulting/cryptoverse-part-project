import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="text-3xl font-bold mb-4">Blockchain Monopoly</header>
      <GameBoard />
    </div>
  );
}

export default App;
