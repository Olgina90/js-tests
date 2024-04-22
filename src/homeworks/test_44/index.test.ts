import { describe, expect, test } from "vitest";
import { invertAllBooleans } from ".";

describe("invertAllBooleans", () => {
  test("Deve invertire tutti i booleani", () => {
    const input = [true, false, false, true, true, true, false, true, false];
    const output = [false, true, true, false, false, false, true, false, true];
    expect(invertAllBooleans(input)).toStrictEqual(output);
  });
});
