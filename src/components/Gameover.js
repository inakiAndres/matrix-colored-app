import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  gameOver: {
    fontSize: "26px",
    "@media screen and (max-width: 575.98px)": {
      fontSize: "22px",
    },
  },
});

const Gameover = ({ level }) => {
  const classes = useStyles();

  return (
    <div className={classes.gameOver}>
      GameOver
      <div>you have reached the level: {level - 1} </div>
    </div>
  );
};

Gameover.propTypes = {
  level: PropTypes.number.isRequired,
};

Gameover.defaultProps = {
  level: 2,
};

export default Gameover;
