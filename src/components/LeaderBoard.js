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
    minWidth: "25px",
    padding: 10,
    "@media screen and (max-width: 575.98px)": {
      padding: 5,
    },
  },
  input: {
    border: "2px solid #555",
    backgroundColor: "divansparent",
    width: "50px",
    textAlign: "center",
  },
  buttons: {
    margin: "0 10px",
    border: "2px solid #555",
    borderRadius: "8px",
    backgroundColor: "divansparent",
    textAlign: "center",
    fontFamily: "Itim",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0)",
  },
  firstClassified: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "10px",
    backgroundColor: "goldenrod",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.16)",
  },
  secondClassified: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "10px",
    backgroundColor: "silver",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.16)",
  },
  thirdClassified: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "10px",
    backgroundColor: "#cd7f32",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.16)",
  },
  defaultClassified: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "10px",
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
  level: PropTypes.number.isRequired,
  onRestart: PropTypes.func.isRequired,
};

LeaderBoard.defaultProps = { level: 2 };

export default LeaderBoard;
