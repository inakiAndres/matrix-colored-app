import React, { useState, useEffect } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  const [level, setLevel] = useState(2);

  const matrixSize = level * level;
  const nDifferent = Math.floor(Math.random() * matrixSize);
  const checkResult = (e) => {
    e.target.id != nDifferent ? nextLevel() : gameOver();
  };
  const nextLevel = () => {
    setLevel(level + 1);
  };
  const gameOver = () => {
    setLevel(2);
  };
  return (
    <div className="App">
      <Game
        level={level}
        matrixSize={matrixSize}
        nDifferent={nDifferent}
        onCardClicked={checkResult}
      />
    </div>
  );
}

export default App;
