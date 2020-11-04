import React, { useState, useEffect } from "react";
import "./App.css";
import Game from "./components/Game";
import Gameover from "./components/Gameover";
import CountDown from "./components/CountDown";

function App() {
  const [level, setLevel] = useState(2);
  const [color, setColor] = useState();
  const [bgcolor, setBgColor] = useState();

  const [gameState, setGameState] = useState("playing");
  useEffect(() => {
    newColors();
  }, [level]);

  const nextLevel = () => {
    setLevel(level + 1);
    setGameState("playing");
  };
  const gameOver = () => {
    setLevel(2);
    newColors();
    setGameState("playing");
  };
  const newColors = () => {
    const newColor = Math.floor(Math.random() * 360);
    setColor(newColor);
    if (newColor + 180 <= 360) setBgColor(newColor + 180);
    else setBgColor(newColor - 180);
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: `hsl(${bgcolor}, 40%, 60%)` }}
    >
      <div className="title">LEVEL {level - 1}</div>
      <div className="Game">
        <div className="alignCenter">
          {gameState === "playing" && (
            <Game level={level} color={color} onCardClicked={setGameState} />
          )}
          {gameState === "levelUp" &&
            (level <= 20 ? (
              <CountDown time={1} onCountDownEnds={nextLevel} />
            ) : (
              <Gameover level={level} onRestart={gameOver} />
            ))}
        </div>
        {gameState === "lost" && (
          <Gameover level={level} onRestart={gameOver} />
        )}
      </div>
    </div>
  );
}

export default App;
