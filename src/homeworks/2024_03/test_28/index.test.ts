import { describe, expect, test } from "vitest";
import { turnToBooleanList } from ".";

describe("se `list` e' vuota", () => {
  test("dovrebbe tornare una lista vuota", () => {
    expect(turnToBooleanList([])).toStrictEqual([]);
  });
});

describe("se `list` ha valori", () => {
  test("dovrebbe tornare una lista con i valori transformati in boolean", () => {
    expect(
      turnToBooleanList(["Davide", "", 5, 0, true, false, {}, undefined])
    ).toStrictEqual([true, false, true, false, true, false, true, false]);
  });
});
