import React from "react";
import { render, screen } from "@testing-library/react";
import Gameover from "./Gameover";

describe("Gameover component", () => {
  it("Should render Gameover component", () => {
    const level = 2;

    render(
      <Gameover level={level} title="YOU ARE THE BEST!" isLastLevel={true} />
    );

    const gameover = screen.getByTestId("gameover");

    expect(gameover).toBeInTheDocument();
  });

  it("Should render a victory text if user reach to the last level", () => {
    const level = 2;

    render(
      <Gameover level={level} title="YOU ARE THE BEST!" isLastLevel={true} />
    );

    const gameover = screen.getByTestId("gameover");
    const victoryMsg = screen.getByText("You have reached to the last level");

    expect(gameover).toBeInTheDocument();
    expect(victoryMsg).toBeInTheDocument();
  });

  it("Should render a loser text with the actual level if user fails in any level", () => {
    const level = 2;

    render(<Gameover level={level} title="GAME OVER" isLastLevel={false} />);

    const gameover = screen.getByTestId("gameover");
    const loserMsg = screen.getByText(
      `You have reached the level: ${level - 1}`
    );

    expect(gameover).toBeInTheDocument();
    expect(loserMsg).toBeInTheDocument();
  });
});
