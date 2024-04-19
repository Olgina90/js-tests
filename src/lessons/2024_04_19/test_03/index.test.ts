import { describe, expect, test } from "vitest";
import { increaseAllByFive } from ".";

describe("increaseAllByFive", () => {
  test("Deve aggiungere 5 ad ogni numero", () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const output = [6, 7, 8, 9, 10, 11, 12];
    expect(increaseAllByFive(input)).toStrictEqual(output);
  });
});
