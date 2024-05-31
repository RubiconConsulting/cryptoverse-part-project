import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import GamePage from "./pages/GamePage";
import LandingPage from "./pages/LandingPage";
import "./index.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rubipoly" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
