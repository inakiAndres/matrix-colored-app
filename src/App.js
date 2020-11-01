import React, { useState, useEffect } from "react";
import "./App.css";
import Game from "./components/Game";
import Gameover from "./components/Gameover";
import CountDown from "./components/CountDown";

function App() {
  const [level, setLevel] = useState(2);
  const [color, setColor] = useState();
  const [gameState, setGameState] = useState("playing");

  useEffect(() => {
    setColor(Math.floor(Math.random() * 360));
  }, [level]);

  const matrixSize = level * level;
  const nDifferent = Math.floor(Math.random() * matrixSize);
  const checkResult = (e) => {
    e.target.id == nDifferent ? setGameState("won") : setGameState("lost");
  };
  const nextLevel = () => {
    setLevel(level + 1);
    setGameState("playing");
  };
  const gameOver = () => {
    setLevel(2);
    setGameState("playing");
  };
  return (
    <div className="App">
      <div>LEVEL {level - 1}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {gameState == "won" && (
          <div>
            That's correct!!
            <br />
            <CountDown time={1} onCountDownEnds={nextLevel} />
          </div>
        )}
        {gameState == "playing" && (
          <Game
            level={level}
            matrixSize={matrixSize}
            nDifferent={nDifferent}
            color={color}
            onCardClicked={checkResult}
          />
        )}
      </div>
      {gameState == "lost" && <Gameover level={level} onRestart={gameOver} />}
    </div>
  );
}

export default App;
