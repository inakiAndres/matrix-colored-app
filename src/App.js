import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Gameover from "./components/Gameover";
import CountDown from "./components/CountDown";
import Win from "./components/Win";
import LeaderBoard from "./components/LeaderBoard";

function App() {
  const [level, setLevel] = useState(2);
  const [bgcolor, setBgColor] = useState();

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
    <div
      className="App"
      style={{ backgroundColor: `hsl(${bgcolor}, 40%, 60%)` }}
    >
      <div className="title">LEVEL {level - 1}</div>
      <div className="Game">
        <div className="alignCenter">
          {gameState === "playing" && (
            <Game
              level={level}
              onBgColor={setBgColor}
              onCardClicked={setGameState}
            />
          )}
          {gameState === "levelUp" &&
            (level <= 20 ? (
              <CountDown time={1} onCountDownEnds={nextLevel} />
            ) : (
              <div className="gameEnd">
                <Win level={level} />
                <LeaderBoard level={level} onRestart={gameOver} />
              </div>
            ))}
          {gameState === "lost" && (
            <div className="gameEnd">
              <Gameover level={level} />
              <LeaderBoard level={level} onRestart={gameOver} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
