import React from "react";
import App from "./App";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

describe("App", () => {
  it("should return", () => {
    const test = <App text="woop" />;
  });

  it("should render", () => {
    render(<App text="woop" />);
  });

  it("should throw a type error", () => {
    render(<App />);
  });
});
