import { describe, expect, test } from "vitest";
import { areUnequal } from ".";

describe("quando gli argomenti `a` e `b` sono disuguali", () => {
  test("`areUnequal` dovrebbe tornare `true`", () => {
    expect(areUnequal(3, 2)).toBe(true);
  });
});

describe("quando gli argomenti `a` e `b` sono uguali", () => {
  test("`areUnequal` dovrebbe tornare `false`", () => {
    expect(areUnequal(5, 5)).toBe(false);
  });
});
