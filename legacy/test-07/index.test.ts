import { expect, test } from "vitest";
import { sumMultiple } from ".";

test("sum should return the result 10 (3 + 2 + 1 + 4 = 10)", () => {
  expect(sumMultiple(3, 2, 1, 4)).toBe(10);
});

test("sum should return the result 11 (17 + -4 + 5 + -7 = 11)", () => {
  expect(sumMultiple(17, -4, 5, -7)).toBe(11);
});
