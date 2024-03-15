import { describe, expect, test } from "vitest";
import { truthy } from ".";

describe("se arg e' una stringa non vuota", () => {
  test("dovrebbe tornare `true`", () => {
    expect(truthy("Davide Bruno")).toBe(true);
  });
});
describe("se arg e' una stringa vuota", () => {
  test("dovrebbe tornare `true`", () => {
    expect(truthy("")).toBe(false);
  });
});
describe("se arg e' 0", () => {
  test("dovrebbe tornare `false`", () => {
    expect(truthy(0)).toBe(false);
  });
});
describe("se arg e' diverso da 0", () => {
  test("dovrebbe tornare `true`", () => {
    expect(truthy(5)).toBe(true);
  });
});
describe("se arg e' true", () => {
  test("dovrebbe tornare `true`", () => {
    expect(truthy(true)).toBe(true);
  });
});
describe("se arg e' false", () => {
  test("dovrebbe tornare `false`", () => {
    expect(truthy(false)).toBe(false);
  });
});
