import { describe, expect, test } from "vitest";
import { max } from ".";

describe("se l'argomento `a` e' magiore di `b`", () => {
  test("`max` dovrebbe tornare `a`", () => {
    expect(max(10, 5)).toBe(10);
  });
});

describe("se l'argomento `b` e' maggiore di `a`", () => {
  test("`max` dovrebbe tornare `b`", () => {
    expect(max(1, 100)).toBe(100);
  });
});
