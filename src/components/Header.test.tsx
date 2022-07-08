import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Header from "./Header";

test("renders learn react link", async () => {
  const dom = render(<Header />);

  expect(screen.getByText(/Test/i)).toBeInTheDocument();

  const input = dom.getByLabelText("title-input");

  fireEvent.change(input, { target: { value: "New Title" } });

  expect(input.value).toBe("New Title");
  expect(screen.getByText(/New Title/i)).toBeInTheDocument();
});
