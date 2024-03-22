import { describe, expect, test } from "vitest";
import { different } from ".";

describe("Quando gli argomenti sono uguali", () => {
  test("`different` dovrebbe tornare `false`", () => {
    expect(different(5, 5)).toBe(false);
  });
  test("`different` dovrebbe tornare `false`", () => {
    expect(different("hello", "hello")).toBe(false);
  });
});

describe("Quando gli argomenti sono diversi", () => {
  test("`different` dovrebbe tornare `true`", () => {
    expect(different("5", 5)).toBe(true);
  });
  test("`different` dovrebbe tornare `true`", () => {
    expect(different(true, false)).toBe(true);
  });
});
