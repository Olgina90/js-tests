import { describe, expect, test } from "vitest";
import { getDataWithPosition } from ".";

describe("se la lista e' vuota", () => {
  test("dovrebbe tornare una lista vuota", () => {
    expect(getDataWithPosition([])).toStrictEqual([]);
  });
});

describe("se la lista ha nomi", () => {
  test("dovrebbe tornare una lista di dati", () => {
    expect(
      getDataWithPosition([
        { name: "Olga", age: 30 },
        { name: "Claudio", age: 42 },
        { name: "Davide", age: 34 },
      ])
    ).toStrictEqual([
      [
        { name: "Olga", age: 30, position: 1 },
        { name: "Claudio", age: 42, position: 2 },
        { name: "Davide", age: 34, position: 3 },
      ],
    ]);
  });
});
