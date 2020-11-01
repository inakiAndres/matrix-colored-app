import React from "react";

const LeaderBoard = ({ scores }) => {
  return (
    <>
      <div>LEADERBOARD</div>
      <table style={{ margin: "0 auto" }}>
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
