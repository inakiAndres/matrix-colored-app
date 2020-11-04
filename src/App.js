import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Gameover from "./components/Gameover";
import CountDown from "./components/CountDown";
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
          {{
            playing: (
              <Game
                level={level}
                onBgColor={setBgColor}
                onCardClicked={setGameState}
              />
            ),
            levelUp:
              level <= 20 ? (
                <CountDown time={1} onCountDownEnds={nextLevel} />
              ) : (
                <div className="gameEnd">
                  <Gameover
                    level={level}
                    title="YOU ARE THE BEST!"
                    isLastLevel={true}
                  />
                  <LeaderBoard level={level} onRestart={gameOver} />
                </div>
              ),
            lost: (
              <div className="gameEnd">
                <Gameover level={level} title="GAME OVER" isLastLevel={false} />
                <LeaderBoard level={level} onRestart={gameOver} />
              </div>
            ),
          }[gameState] || (
            <Game
              level={level}
              onBgColor={setBgColor}
              onCardClicked={setGameState}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
