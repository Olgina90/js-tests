import { describe, expect, test } from "vitest";
import { areEqual } from ".";

describe("quando gli argomenti `a` e `b` sono disuguali", () => {
  test("`areEqual` dovrebbe tornare `false`", () => {
    expect(areEqual(3, 2)).toBe(false);
  });
});

describe("quando gli argomenti `a` e `b` sono uguali", () => {
  test("`areEqual` dovrebbe tornare `true`", () => {
    expect(areEqual(5, 5)).toBe(true);
  });
});
