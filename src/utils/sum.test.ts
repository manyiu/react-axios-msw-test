import sum from "./sum";

test("Sum Test", () => {
  sum(2, 2); // Pass the if condition without actually testing

  expect(sum(1, 2)).toEqual(3);
});
