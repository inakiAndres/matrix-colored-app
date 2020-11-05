import React, { useState } from "react";
import PropTypes from "prop-types";
import useStyles from "./LeaderBoard-styles";
import { getArray, pushArrayItem } from "../utils/storageManager";

const LeaderBoard = ({ level, onRestart, showQuestion }) => {
  const classes = useStyles();
  const [wantToSave, setWantToSave] = useState(false);
  const scores = getArray("scores");
  const setScore = (e) => {
    const nick = e.target.name.value;
    pushArrayItem("scores", { nick, level: level - 1 });
  };

  return (
    <>
      {showQuestion &&
        (wantToSave ? (
          <>
            <div>Insert your initials here:</div>
            <form onSubmit={setScore}>
              <label>
                <input
                  className={classes.input}
                  type="text"
                  name="name"
                  placeholder="_ _ _"
                  maxLength="3"
                />
              </label>
              <input className={classes.buttons} type="submit" value="Submit" />
            </form>
          </>
        ) : (
          <div>
            <div className={classes.space}>Do you want to save your score?</div>
            <button
              className={classes.buttons}
              style={{ backgroundColor: "hsl(120, 70%, 70%)" }}
              onClick={() => setWantToSave(true)}
            >
              Yes
            </button>
            <button
              className={classes.buttons}
              style={{ borderColor: "red" }}
              onClick={onRestart}
            >
              No, restart the game
            </button>
          </div>
        ))}
      <div className={classes.space}>LEADERBOARD</div>
      <div className={classes.defaultClassified}>
        <div className={classes.column}>Nickname</div>
        <div className={classes.column}>Level</div>
      </div>
      {scores.map(
        (score, index) =>
          ({
            0: (
              <div className={classes.firstClassified} key={index}>
                <div className={classes.column}>{score.nick}</div>
                <div className={classes.column}>{score.level}</div>
              </div>
            ),
            1: (
              <div className={classes.secondClassified} key={index}>
                <div className={classes.column}>{score.nick}</div>
                <div className={classes.column}>{score.level}</div>
              </div>
            ),
            2: (
              <div className={classes.thirdClassified} key={index}>
                <div className={classes.column}>{score.nick}</div>
                <div className={classes.column}>{score.level}</div>
              </div>
            ),
          }[index] || (
            <div className={classes.defaultClassified} key={index}>
              <div className={classes.column}>{score.nick}</div>
              <div className={classes.column}>{score.level}</div>
            </div>
          ))
      )}
    </>
  );
};

LeaderBoard.propTypes = {
  level: PropTypes.number,
  onRestart: PropTypes.func,
  showQuestion: PropTypes.bool.isRequired,
};

LeaderBoard.defaultProps = { level: 2 };

export default LeaderBoard;
