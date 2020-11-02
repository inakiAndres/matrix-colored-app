import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  countDown: { marginTop: "20px" },
});
const CountDown = ({ time, onCountDownEnds }) => {
  const classes = useStyles();
  return (
    <div className={classes.countDown}>
      <CountdownCircleTimer
        isPlaying
        duration={time}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        onComplete={onCountDownEnds}
      >
        {({ remainingTime }) => "Next level in " + remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountDown;
