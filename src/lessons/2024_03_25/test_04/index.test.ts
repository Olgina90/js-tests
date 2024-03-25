import { describe, expect, test } from "vitest";
import { increaseValues } from ".";

describe("se non ci sono argomenti", () => {
  test("dovrebbe tornare una lista vuota", () => {
    expect(increaseValues()).toStrictEqual([]);
  });
});

describe("se gli argomenti sono numeri", () => {
  test("dovrebbe tornare una lista con i numeri incrementati di 1 (+1)", () => {
    expect(increaseValues(0, 1, 3, 6, 8)).toStrictEqual([1, 2, 4, 7, 9]);
  });
});
