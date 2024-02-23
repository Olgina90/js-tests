import { describe, expect, test } from "vitest";
import { isValid } from ".";

describe("quando l'argomento `value` e' uguale ad `a`", () => {
  test("`isValid` dovrebbe tornare `true`", () => {
    expect(isValid(3, 3, 2)).toBe(true);
  });
});

describe("quando l'argomento `value` e' uguale a `b`", () => {
  test("`isValid` dovrebbe tornare `true`", () => {
    expect(isValid(3, 2, 3)).toBe(true);
  });
});

describe("quando l'argomento `value` non e' uguale ad `a` e `b`", () => {
  test("`isValid` dovrebbe tornare `false`", () => {
    expect(isValid(6, 2, 3)).toBe(false);
  });
});
