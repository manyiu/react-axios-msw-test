import axios from "./axios";

// https://jsonplaceholder.typicode.com/todos/1

export interface TodosRequest {}

export interface TodosResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getTodos = (userId = 1) => {
  return axios.get<TodosResponse>(
    `https://jsonplaceholder.typicode.com/todos/${userId}`
  );
};
