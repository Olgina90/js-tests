import { describe, expect, test } from "vitest";
import { isInRange } from ".";

describe.each([
  ["maggiore", 1, true],
  ["minore", 4, false],
])("quando l'argomento `value` e' %s di `min`", (_, min, minExpected) => {
  describe.each([
    ["maggiore", 2, false],
    ["minore", 5, true],
  ])("quando l'argomento `value` e' %s di `max`", (_, max, maxExpected) => {
    const expected = minExpected && maxExpected;
    test(`\`isInRange\` dovrebbe tornare \`${expected}\``, () => {
      expect(isInRange(3, min, max)).toBe(expected);
    });
  });
});
