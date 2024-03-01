import { describe, expect, test } from "vitest";
import { toString } from ".";

describe("se l'argomento `value` e' un numero", () => {
  test("`toString` dovrebbe tornare una `string`", () => {
    expect(toString(10)).toBe("10");
  });
});

describe("se l'argomento `value` e' un boolean", () => {
  test("`toString` dovrebbe tornare una `string`", () => {
    expect(toString(true)).toBe("true");
  });
});

describe("se l'argomento `value` e' un string", () => {
  test("`toString` dovrebbe tornare una `string`", () => {
    expect(toString("hello")).toBe("hello");
  });
});
