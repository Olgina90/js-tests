import { describe, expect, test } from "vitest";
import { valuesPlusIndex } from ".";

describe("se non ci sono argomenti", () => {
  test("dovrebbe tornare una lista vuota", () => {
    expect(valuesPlusIndex()).toStrictEqual([]);
  });
});

describe("se gli argomenti sono numeri", () => {
  test("dovrebbe tornare una lista con i numeri incrementati del loro indice", () => {
    expect(valuesPlusIndex([0, 1, 3, 6, 8])).toStrictEqual([0, 2, 5, 9, 12]);
  });
});
