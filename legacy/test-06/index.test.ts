import { expect, test } from "vitest";
import { sum } from ".";

test("sum should return the result 5 (3 + 2 = 5)", () => {
  expect(sum(3, 2)).toBe(5);
});

test("sum should return the result 13 (17 + -4 = 13)", () => {
  expect(sum(17, -4)).toBe(13);
});
