import { describe, expect, test } from "vitest";
import { calc } from ".";

describe("se il secondo argomento (operator) e' `+`", () => {
  test("`calc` dovrebbe tornare l'addizione tra `a` e `b`", () => {
    expect(calc(5, "+", 2)).toBe(7);
  });
});
describe("se il secondo argomento (operator) e' `-`", () => {
  test("`calc` dovrebbe tornare la sottrazione tra `a` e `b`", () => {
    expect(calc(10, "-", 8)).toBe(2);
  });
});
describe("se il secondo argomento (operator) e' `*`", () => {
  test("`calc` dovrebbe tornare la moltiplicazione tra `a` e `b`", () => {
    expect(calc(40, "*", 3)).toBe(120);
  });
});
describe("se il secondo argomento (operator) e' `/`", () => {
  test("`calc` dovrebbe tornare la divisione tra `a` e `b`", () => {
    expect(calc(100, "/", 2)).toBe(50);
  });
});
