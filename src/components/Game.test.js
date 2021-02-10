import React from "react";
import { render, screen } from "@testing-library/react";
import Game from "./Game";

describe("Game Page", () => {
  it("Should render Game page", () => {
    const level = 1;
    const setBgColor = jest.fn();
    const setGameState = jest.fn();

    render(
      <Game level={level} onBgColor={setBgColor} onCardClicked={setGameState} />
    );

    const differentCardNode = screen.getByTestId("differentCard");

    expect(differentCardNode).toBeInTheDocument();
  });
});
