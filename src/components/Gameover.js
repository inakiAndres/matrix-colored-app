import React, { useState } from "react";
import LeaderBoard from "./LeaderBoard";
import { getArray, pushArrayItem } from "../utils/storageManager";

const Gameover = ({ level, onRestart }) => {
  const [wantToSave, setWantToSave] = useState(false);

  const scores = getArray("scores");
  const setScore = (e) => {
    const nick = e.target.name.value;
    pushArrayItem("scores", { nick, level });
  };

  return (
    <div>
      {wantToSave ? (
        <form onSubmit={setScore}>
          <label>
            <input type="text" name="name" placeholder="_ _ _" maxLength="3" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <div>
          GameOver
          <div>you have reached the level: {level - 1} </div>
          <div>Do you want to save your score?</div>
          <button onClick={() => setWantToSave(true)}>Yes</button>
          <button onClick={onRestart}>No, restart the game</button>
        </div>
      )}
      <LeaderBoard scores={scores} />
    </div>
  );
};

export default Gameover;
