import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Game from "./components/Game";
import Gameover from "./components/Gameover";
import CountDown from "./components/CountDown";
import LeaderBoard from "./components/LeaderBoard";

function App() {
  const [level, setLevel] = useState(2);
  const [bgcolor, setBgColor] = useState(140);

  const [gameState, setGameState] = useState("");

  const startGame = () => {
    setGameState("playing");
  };
  const nextLevel = () => {
    setLevel(level + 1);
    setGameState("playing");
  };
  const gameOver = () => {
    setLevel(2);
    setGameState("");
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: `hsl(${bgcolor}, 40%, 60%)` }}
    >
      {gameState && <div className="title">LEVEL {level - 1}</div>}
      <div className="Game">
        {{
          playing: (
            <div className="alignCenter">
              <Game
                level={level}
                onBgColor={setBgColor}
                onCardClicked={setGameState}
              />
            </div>
          ),
          levelUp:
            level <= 20 ? (
              <div className="alignCenter">
                <CountDown time={1} onCountDownEnds={nextLevel} />
              </div>
            ) : (
              <div className="alignCenter">
                <div className="gameEnd">
                  <Gameover
                    level={level}
                    title="YOU ARE THE BEST!"
                    isLastLevel={true}
                  />
                  <LeaderBoard
                    level={level}
                    onRestart={gameOver}
                    showQuestion={true}
                  />
                </div>
              </div>
            ),
          lost: (
            <div className="alignCenter">
              <div className="gameEnd">
                <Gameover level={level} title="GAME OVER" isLastLevel={false} />
                <LeaderBoard
                  level={level}
                  onRestart={gameOver}
                  showQuestion={true}
                />
              </div>
            </div>
          ),
        }[gameState] || <Menu bgColor={bgcolor} onPlay={startGame} />}
      </div>
    </div>
  );
}

export default App;
