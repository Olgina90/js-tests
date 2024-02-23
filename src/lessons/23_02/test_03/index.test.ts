import { describe, expect, test } from "vitest";
import { areDifferent } from ".";

describe("quando l'argomento `a` e' diverso da `b`", () => {
  test("`areDifferent` dovrebbe tornare `true`", () => {
    expect(areDifferent(3, 2)).toBe(true);
  });
});

describe("quando l'argomento `a` e' uguale a `b`", () => {
  test("`areDifferent` dovrebbe tornare `false`", () => {
    expect(areDifferent(3, 3)).toBe(false);
  });
});
