import { describe, expect, test } from "vitest";
import { isInRange } from ".";

describe("quando l'argomento `value` e' ", () => {
  test("`isInRange` dovrebbe tornare `false`", () => {
    expect(isInRange(3, 2)).toBe(false);
  });
});

describe("quando gli argomenti `a` e `b` sono uguali", () => {
  test("`areEqual` dovrebbe tornare `true`", () => {
    expect(isInRange(5, 5)).toBe(true);
  });
});
