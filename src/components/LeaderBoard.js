import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  space: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
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
            <th>Nickname</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{score.nick}</td>
              <td>{score.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default LeaderBoard;
