import { expect, test } from "vitest";
import { myColor } from ".";

test('myColor should be "yellow"', () => {
  expect(myColor).toBe("yellow");
});
