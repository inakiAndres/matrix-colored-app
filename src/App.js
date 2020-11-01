import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Gameover from "./components/Gameover";
import CountDown from "./components/CountDown";

function App() {
  const [level, setLevel] = useState(2);
  const [gameState, setGameState] = useState("playing");

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
      <div className="Game">
        {gameState === "won" && (
          <div>
            That's correct!!
            <br />
            <CountDown time={1} onCountDownEnds={nextLevel} />
          </div>
        )}
        {gameState === "playing" && (
          <Game level={level} onCardClicked={setGameState} />
        )}
      </div>
      {gameState === "lost" && <Gameover level={level} onRestart={gameOver} />}
    </div>
  );
}

export default App;
