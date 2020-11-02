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
      <div className="title">LEVEL {level - 1}</div>
      <div className="Game">
        <div className="alignCenter">
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
        {gameState === "lost" && (
          <Gameover level={level} onRestart={gameOver} />
        )}
      </div>
    </div>
  );
}

export default App;
