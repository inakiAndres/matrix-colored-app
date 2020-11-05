import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import LeaderBoard from "./LeaderBoard";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    padding: 20,
    backgroundColor: ({ bgColor }) => `hsl(${bgColor}, 40%, 60%)`,
    "@media screen and (max-width: 575.98px)": {
      flexDirection: "column",
    },
  },
  column: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    "@media screen and (max-width: 575.98px)": {
      width: "100%",
    },
  },
  content: {
    width: "50%",
    margin: "auto",
    textAlign: "center",
    fontSize: "24px",
    "@media screen and (max-width: 575.98px)": {
      width: "100%",
      fontSize: "18px",
    },
  },
  buttons: {
    padding: 10,
    margin: "20px",
    border: "1px solid",
    backgroundColor: "divansparent",
    textAlign: "center",
    fontFamily: "Itim",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0)",
    fontSize: "28px",
  },
});
const Menu = ({ bgColor, onPlay }) => {
  const classes = useStyles(bgColor);
  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <div className={classes.content}>
          <h2>Matrix Colored App</h2>
          The game consists in a matrix of squares and you have to tap the
          square which have the different color. If you tap the correct you will
          level up, and the matrix will be growing by levels.
          <br />
          The level 20 is the last level, I select this one because the
          difference of the color, and the size of the matrix and squares is
          enough.
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
