import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Game from "./Game";

describe("Game component", () => {
  it("Should render Game component", () => {
    const level = 2;
    const setBgColor = jest.fn();
    const setGameState = jest.fn();

    render(
      <Game level={level} onBgColor={setBgColor} onCardClicked={setGameState} />
    );

    const differentCardNode = screen.getByTestId("differentCard");
    const normalCardsNode = screen.getAllByTestId("normalCards");

    expect(differentCardNode).toBeInTheDocument();
    expect(normalCardsNode[0]).toBeInTheDocument();
  });

  it("Should click on differentCard and call the function setGameState with the string -> 'levelUp'", () => {
    const level = 2;
    const setBgColor = jest.fn();
    const setGameState = jest.fn();

    render(
      <Game level={level} onBgColor={setBgColor} onCardClicked={setGameState} />
    );

    const differentCardNode = screen.getByTestId("differentCard");

    expect(differentCardNode).toBeInTheDocument();
    fireEvent.click(differentCardNode);

    expect(setGameState).toHaveBeenCalledTimes(1);
    expect(setGameState).toHaveBeenCalledWith("levelUp");
  });

  it("Should click on a normalCard and call the function setGameState with the string -> 'lost'", () => {
    const level = 2;
    const setBgColor = jest.fn();
    const setGameState = jest.fn();

    render(
      <Game level={level} onBgColor={setBgColor} onCardClicked={setGameState} />
    );

    const normalCardNode = screen.getAllByTestId("normalCards");

    expect(normalCardNode[0]).toBeInTheDocument();
    fireEvent.click(normalCardNode[0]);

    expect(setGameState).toHaveBeenCalledTimes(1);
    expect(setGameState).toHaveBeenCalledWith("lost");
  });
});
