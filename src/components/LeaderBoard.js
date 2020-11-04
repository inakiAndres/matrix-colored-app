import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

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
});

const LeaderBoard = ({ scores }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.space}>LEADERBOARD</div>
      <table className={classes.space}>
        <thead>
          <tr>
            <th className={classes.column}>Nickname</th>
            <th className={classes.column}>Level</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td className={classes.column}>{score.nick}</td>
              <td className={classes.column}>{score.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

LeaderBoard.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.any).isRequired,
};

LeaderBoard.defaultProps = {
  time: 1,
};

export default LeaderBoard;
