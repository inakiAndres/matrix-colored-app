import React, { useState, useEffect } from "react";
import "./App.css";
import Game from "./components/Game";
import LevelManager from "./components/LevelManager";

function App() {
  const [level, setLevel] = useState(2);
  const [color, setColor] = useState();
  useEffect(() => {
    setColor(Math.floor(Math.random() * 360));
  }, [level]);
  const matrixSize = level * level;
  const nDifferent = Math.floor(Math.random() * matrixSize);
  const checkResult = (e) => {
    e.target.id == nDifferent ? nextLevel() : gameOver();
  };
  const nextLevel = () => {
    setLevel(level + 1);
  };
  const gameOver = () => {
    setLevel(2);
  };
  return (
    <div className="App">
      <div>LEVEL {level - 1}</div>
      <Game
        level={level}
        matrixSize={matrixSize}
        nDifferent={nDifferent}
        color={color}
        onCardClicked={checkResult}
      />
    </div>
  );
}

export default App;
