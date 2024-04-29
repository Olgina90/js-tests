import { describe, expect, test } from "vitest";
import { falsy } from ".";

describe("se arg e' una stringa non vuota", () => {
  test("dovrebbe tornare `false`", () => {
    expect(falsy("Davide Bruno")).toBe(false);
  });
});
describe("se arg e' una stringa vuota", () => {
  test("dovrebbe tornare `true`", () => {
    expect(falsy("")).toBe(true);
  });
});
describe("se arg e' 0", () => {
  test("dovrebbe tornare `true`", () => {
    expect(falsy(0)).toBe(true);
  });
});
describe("se arg e' diverso da 0", () => {
  test("dovrebbe tornare `false`", () => {
    expect(falsy(5)).toBe(false);
  });
});
describe("se arg e' true", () => {
  test("dovrebbe tornare `false`", () => {
    expect(falsy(true)).toBe(false);
  });
});
describe("se arg e' false", () => {
  test("dovrebbe tornare `true`", () => {
    expect(falsy(false)).toBe(true);
  });
});
