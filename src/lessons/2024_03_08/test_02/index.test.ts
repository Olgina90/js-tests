import { describe, expect, test } from "vitest";
import { getValueOrOne } from ".";

describe("se il primo argomento e' maggiore di 0", () => {
  test("`getValueOrOne` dovrebbe tornare il primo argomento", () => {
    expect(getValueOrOne(5)).toBe(5);
  });
});
describe("se il primo argomento e' minore di 0", () => {
  test("`getValueOrOne` dovrebbe tornare il primo argomento", () => {
    expect(getValueOrOne(-3)).toBe(-3);
  });
});
describe("se il primo argomento non e' specificato", () => {
  test("`getValueOrOne` dovrebbe tornare 1", () => {
    expect(getValueOrOne()).toBe(1);
  });
});
describe("se il primo argomento e' 0", () => {
  test("`getValueOrOne` dovrebbe tornare 1", () => {
    expect(getValueOrOne(0)).toBe(1);
  });
});
