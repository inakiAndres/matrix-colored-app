import React, { useState } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { getArray, pushArrayItem } from "../utils/storageManager";

const useStyles = createUseStyles({
  space: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
  },
  column: {
    paddingRight: "10px",
    paddingLeft: "10px",
  },
  input: {
    border: "2px solid #555",
    backgroundColor: "transparent",
    width: "50px",
    textAlign: "center",
  },
  buttons: {
    margin: "0 10px",
    border: "2px solid #555",
    borderRadius: "8px",
    backgroundColor: "transparent",
    textAlign: "center",
    fontFamily: "Itim",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0)",
  },
  firstClassified: {
    marginBottom: "10px",
    backgroundColor: "goldenrod",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.16)",
  },
  secondClassified: {
    marginBottom: "10px",
    backgroundColor: "silver",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.16)",
  },
  thirdClassified: {
    marginBottom: "10px",
    backgroundColor: "#cd7f32",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.16)",
  },
});

const LeaderBoard = ({ level, onRestart }) => {
  const classes = useStyles();
  const [wantToSave, setWantToSave] = useState(false);
  const scores = getArray("scores");
  const setScore = (e) => {
    const nick = e.target.name.value;
    pushArrayItem("scores", { nick, level: level - 1 });
  };

  return (
    <>
      {wantToSave ? (
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
          <div>Do you want to save your score?</div>
          <button
            className={classes.buttons}
            style={{ borderColor: "green" }}
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
      )}
      <div className={classes.space}>LEADERBOARD</div>
      <table className={classes.space}>
        <thead>
          <tr>
            <th className={classes.column}>Nickname</th>
            <th className={classes.column}>Level</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(
            (score, index) =>
              ({
                0: (
                  <tr className={classes.firstClassified} key={index}>
                    <td className={classes.column}>{score.nick}</td>
                    <td className={classes.column}>{score.level}</td>
                  </tr>
                ),
                1: (
                  <tr className={classes.secondClassified} key={index}>
                    <td className={classes.column}>{score.nick}</td>
                    <td className={classes.column}>{score.level}</td>
                  </tr>
                ),
                2: (
                  <tr className={classes.thirdClassified} key={index}>
                    <td className={classes.column}>{score.nick}</td>
                    <td className={classes.column}>{score.level}</td>
                  </tr>
                ),
              }[index] || (
                <tr key={index}>
                  <td className={classes.column}>{score.nick}</td>
                  <td className={classes.column}>{score.level}</td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </>
  );
};

LeaderBoard.propTypes = {
  level: PropTypes.number.isRequired,
  onRestart: PropTypes.func.isRequired,
};

LeaderBoard.defaultProps = { level: 2 };

export default LeaderBoard;
