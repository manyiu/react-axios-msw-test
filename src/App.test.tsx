import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

import { rest } from "msw";
import { setupServer } from "msw/node";
import { TodosResponse } from "./apis/todo";

const handlers = [
  rest.get<TodosResponse>(
    `https://jsonplaceholder.typicode.com/todos/1`,
    (req, res, ctx) => {
      console.log("I ran!");
      return res(
        ctx.json({
          userId: 1,
          id: 1,
          title: "delectus 1aut autem",
          completed: false,
        })
      );
    }
  ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("renders learn react link", async () => {
  render(<App />);

  await waitFor(() => screen.getByText(/delectus 1aut autem/i));

  const linkElement = screen.getByText(/delectus 1aut autem/i);

  expect(linkElement).toBeInTheDocument();
});
