import { expect, test } from "vitest";
import { sortNumbers } from ".";

test("sortNumbers returns the same list ordered ascendant", () => {
  expect(sortNumbers([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
});
