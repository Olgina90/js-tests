import { describe, expect, test } from "vitest";
import { abc } from ".";

describe("se gli argomenti sono `a` `b` `c`", () => {
  test("`abc` dovrebbe tornare `true", () => {
    expect(abc("a", "b", "c")).toBe(true);
  });
});
describe("se il primo argomento e' incorretto", () => {
  test("`abc` dovrebbe tornare `false`", () => {
    expect(abc("d", "b", "c")).toBe(false);
  });
});
describe("se il secondo argomento e' incorretto", () => {
  test("`abc` dovrebbe tornare `false`", () => {
    expect(abc("a", "d", "c")).toBe(false);
  });
});
describe("se il terzo argomento e' incorretto", () => {
  test("`abc` dovrebbe tornare `false`", () => {
    expect(abc("a", "b", "d")).toBe(false);
  });
});
