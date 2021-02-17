import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "./Menu";

describe("Menu component", () => {
  it("Should render Menu component", () => {
    const startGame = jest.fn();

    render(<Menu onPlay={startGame} />);

    const menuContent = screen.getByTestId("menu-content");
    const playBtnMenu = screen.getByTestId("play-button-menu");

    expect(menuContent).toBeInTheDocument();
    expect(playBtnMenu).toBeInTheDocument();
  });

  it("Should call the startGame function when play is pressed in Menu component", () => {
    const startGame = jest.fn();

    render(<Menu onPlay={startGame} />);

    const menuContent = screen.getByTestId("menu-content");
    const playBtnMenu = screen.getByTestId("play-button-menu");

    expect(menuContent).toBeInTheDocument();
    expect(playBtnMenu).toBeInTheDocument();
    playBtnMenu.click();
    expect(startGame).toHaveBeenCalledTimes(1);
  });
});
