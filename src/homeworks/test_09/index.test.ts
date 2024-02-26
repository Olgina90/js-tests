import { describe, expect, test } from "vitest";
import { clamp } from ".";

describe("se l'argomento `value` e' tra `min` e `max`", () => {
  test("`clamp` dovrebbe tornare `value`", () => {
    expect(clamp(10, 5, 20)).toBe(10);
  });
});

describe("se l'argomento `value` e' maggiore di `max`", () => {
  test("`clamp` dovrebbe tornare `max`", () => {
    expect(clamp(30, 5, 20)).toBe(20);
  });
});

describe("se l'argomento `value` e' uguale a `max`", () => {
  test("`clamp` dovrebbe tornare `max`", () => {
    expect(clamp(20, 5, 20)).toBe(20);
  });
});

describe("se l'argomento `value` e' minore di `min`", () => {
  test("`clamp` dovrebbe tornare `min`", () => {
    expect(clamp(1, 5, 20)).toBe(5);
  });
});

describe("se l'argomento `value` e' uguale a `min`", () => {
  test("`clamp` dovrebbe tornare `min`", () => {
    expect(clamp(5, 5, 20)).toBe(5);
  });
});
