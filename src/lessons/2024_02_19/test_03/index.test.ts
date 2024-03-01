import { describe, expect, test } from "vitest";
import { compare } from ".";

describe("quando l'argomento `a` e' maggiore dell'argomento `b`", () => {
  test("`compare` dovrebbe tornare `>`", () => {
    expect(compare(3, 2)).toBe(">");
  });
});

describe("quando l'argomento `a` e' minore dell'argomento `b`", () => {
  test("`compare` dovrebbe tornare `<`", () => {
    expect(compare(2, 3)).toBe("<");
  });
});

describe("quando gli argomenti `a` e `b` sono uguali", () => {
  test("`compare` dovrebbe tornare `=`", () => {
    expect(compare(5, 5)).toBe('=');
  });
});
