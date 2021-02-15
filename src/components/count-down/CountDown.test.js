import React from "react";
import { render, screen } from "@testing-library/react";
import CountDown from "./CountDown";

describe("CountDown component", () => {
  it("Should render CountDown component", () => {
    const time = 2;
    const onCountDownEnds = jest.fn();

    render(<CountDown time={time} onCountDownEnds={onCountDownEnds} />);

    const countDownCircle = screen.getByTestId("countDownCircle");

    expect(countDownCircle).toBeInTheDocument();
  });
});
