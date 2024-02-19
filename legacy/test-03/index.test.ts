import { expect, test } from "vitest";
import { myBoolean } from ".";

test("myValue should be true", () => {
  expect(myBoolean).toBe(true);
});
