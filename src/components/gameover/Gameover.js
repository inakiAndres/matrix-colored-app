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

const Gameover = ({ level, title, isLastLevel }) => {
  const classes = useStyles();

  return (
    <div id="gameover" className={classes.gameOver}>
      {title}
      {isLastLevel ? (
        <div>You have reached to the last level </div>
      ) : (
        <div>You have reached the level: {level - 1} </div>
      )}
    </div>
  );
};

Gameover.propTypes = {
  level: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isLastLevel: PropTypes.bool.isRequired,
};

export default Gameover;
