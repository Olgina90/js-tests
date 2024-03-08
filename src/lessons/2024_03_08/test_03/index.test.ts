import { describe, expect, test } from "vitest";
import { putApplesInBasket } from ".";

describe("se il primo argomento non e' specificato", () => {
  test("`putApplesInBasket` dovrebbe tornare 0", () => {
    expect(putApplesInBasket()).toBe(0);
  });
});
describe("se il primo argomento e' minore di 0", () => {
  test("`putApplesInBasket` dovrebbe tornare 0", () => {
    expect(putApplesInBasket(-5)).toBe(0);
  });
});
describe("se il primo argomento e' maggiore di 10", () => {
  test("`putApplesInBasket` dovrebbe tornare 10", () => {
    expect(putApplesInBasket(52)).toBe(10);
  });
});
describe("se il primo argomento e' maggiore di 0", () => {
  describe("se il primo argomento e' minore di 10", () => {
    test("`putApplesInBasket` dovrebbe tornare il primo argomento", () => {
      expect(putApplesInBasket(5)).toBe(5);
    });
  });
});
