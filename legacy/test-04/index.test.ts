import { expect, test } from "vitest";
import { getNextNumber } from ".";

test("getNextNumber should return the next number (2)", () => {
  expect(getNextNumber(1)).toBe(2);
});
