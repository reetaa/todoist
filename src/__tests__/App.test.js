import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../App";

beforeEach(cleanup);

describe("<App/>", () => {
  it("renders the app", () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId("application")).toBeTruthy();
  });

  it("renders the app in darkmode", () => {
    const { queryByTestId } = render(<App darkModeDefault />);
    expect(
      queryByTestId("application").classList.contains("darkmode")
    ).toBeTruthy();
  });

  it("renders the app in darkmode", () => {
    const { queryByTestId } = render(<App />);
    expect(
      queryByTestId("application").classList.contains("darkmode")
    ).toBeFalsy();
  });
});
