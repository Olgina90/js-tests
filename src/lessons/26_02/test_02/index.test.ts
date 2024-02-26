import { describe, expect, test } from "vitest";
import { min } from ".";

describe("se l'argomento `a` e' minore di `b`", () => {
  test("`min` dovrebbe tornare `a`", () => {
    expect(min(1, 5)).toBe(1);
  });
});

describe("se l'argomento `b` e' minore di `a`", () => {
  test("`min` dovrebbe tornare `b`", () => {
    expect(min(1, -5)).toBe(-5);
  });
});
