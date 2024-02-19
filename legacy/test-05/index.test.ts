import { expect, test } from "vitest";
import { getPreviousNumber } from ".";

test("getPreviousNumber should return the previous number (2)", () => {
  expect(getPreviousNumber(3)).toBe(2);
});

test("getPreviousNumber should return the previous number (4)", () => {
  expect(getPreviousNumber(5)).toBe(4);
});
