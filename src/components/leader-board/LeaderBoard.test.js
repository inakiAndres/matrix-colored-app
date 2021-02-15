import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LeaderBoard from "./LeaderBoard";

describe("LeaderBoard component", () => {
  it("Should render LeaderBoard component", () => {
    const level = 2;
    const gameOver = jest.fn();
    const question = true;

    render(
      <LeaderBoard level={level} onRestart={gameOver} showQuestion={question} />
    );

    const leaderBoard = screen.getByTestId("leader-board");

    expect(leaderBoard).toBeInTheDocument();
  });

  it("Should save the score", async () => {
    const level = 2;
    const gameOver = jest.fn();
    const question = true;
    const handleOnSubmit = jest.fn();

    render(
      <LeaderBoard
        level={level}
        onRestart={gameOver}
        showQuestion={question}
        handleOnSubmit={handleOnSubmit}
      />
    );

    const leaderBoard = screen.getByTestId("leader-board");
    expect(leaderBoard).toBeInTheDocument();
    screen.getByTestId("save-btn-yes").click();

    const inputName = await screen.getByTestId("input-name");

    fireEvent.change(inputName, { target: { value: "IAB" } });

    screen.getByTestId("submit-btn").click();

    expect(handleOnSubmit).toHaveBeenCalledTimes(1);
  });
});
