import { describe, expect, test } from "vitest";
import { toNumber } from ".";

describe("se l'argomento `value` e' un numero", () => {
  test("`toNumber` dovrebbe tornare un `number`", () => {
    expect(toNumber(10)).toBe(10);
  });
});

describe("se l'argomento `value` e' un boolean", () => {
  test("`toNumber` dovrebbe tornare un `number`", () => {
    expect(toNumber(true)).toBe(1);
  });
});

describe("se l'argomento `value` e' un string", () => {
  test("`toNumber` dovrebbe tornare un `number`", () => {
    expect(toNumber("hello")).toBe(NaN);
  });
});
