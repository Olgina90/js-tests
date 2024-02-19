import { expect, test } from "vitest";
import { myNumber } from ".";

test("myNumber should be 1", () => {
  expect(myNumber).toBe(1);
});
