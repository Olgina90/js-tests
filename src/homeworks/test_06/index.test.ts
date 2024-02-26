import { describe, expect, test } from "vitest";
import { round } from ".";

describe("se l'argomento `value` e' un numero intero", () => {
  test("`round` dovrebbe tornare lo stesso numero", () => {
    expect(round(10)).toBe(10);
  });
});

describe("se l'argomento `value` e' un numero decimale con decimi >= 0.5", () => {
  test("`round` dovrebbe tornare il valore arrotondato per eccesso", () => {
    expect(round(10.5)).toBe(11);
  });
});

describe("se l'argomento `value` e' un numero decimale con decimi < 0.5", () => {
  test("`round` dovrebbe tornare il valore arrotondato per difetto", () => {
    expect(round(10.4)).toBe(10);
  });
});
