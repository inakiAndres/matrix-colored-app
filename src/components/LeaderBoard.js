import React from "react";

const styles = {
  space: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
  },
};

const LeaderBoard = ({ scores }) => {
  return (
    <>
      <div style={styles.space}>LEADERBOARD</div>
      <table style={styles.space}>
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
