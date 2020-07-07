import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("submit button is disabled", () => {
  const { getByText } = render(<App />);
  expect(getByText("Submit")).toBeDisabled();
});
