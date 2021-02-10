import React from "react";
import PropTypes from "prop-types";
import LeaderBoard from "./LeaderBoard";
import { useStyles } from "./styles/Menu-styles";

const Menu = ({ onPlay }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <div className={classes.content}>
          <h2>Matrix Colored App</h2>
          The game consists in a matrix of squares and you have to tap the
          square which have the different color. If you tap the correct you will
          level up, and the matrix will be growing by levels.
          <br />
          The level 20 is the last level, if you beat the last level you will
          beat the challenge!
          <br />
          GOOD LUCK!
          <br />
          <button
            className={classes.buttons}
            style={{ borderColor: "green" }}
            onClick={onPlay}
          >
            PLAY
          </button>
        </div>
      </div>
      <div className={classes.column}>
        <div className={classes.content}>
          <LeaderBoard showQuestion={false}></LeaderBoard>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = { onPlay: PropTypes.func.isRequired };

export default Menu;
