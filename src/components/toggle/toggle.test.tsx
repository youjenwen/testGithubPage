import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from ".";

describe("test <Toggle/>", () => {
  it("should render OFF by default", () => {
    render(<Toggle />);

    expect(screen.getByText("OFF")).toBeInTheDocument();
  });

  it("should render ON by default", () => {
    render(<Toggle />);

    expect(screen.getByText("OFF")).toBeInTheDocument();
    fireEvent.click(screen.getByText("OFF"));

    expect(screen.getByText("ON")).toBeInTheDocument();
    //toBeInTheDocument(): check if an element exists on the screen
  });
});
