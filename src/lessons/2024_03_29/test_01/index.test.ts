import { describe, expect, test } from "vitest";
import { getData } from ".";

describe("se la lista e' vuota", () => {
  test("dovrebbe tornare una lista vuota", () => {
    expect(getData([])).toStrictEqual([]);
  });
});

describe("se la lista ha nomi", () => {
  test("dovrebbe tornare una lista di dati", () => {
    expect(getData(["Olga", "Claudio", "Davide"])).toStrictEqual([
      [
        { name: "Olga", position: 1 },
        { name: "Claudio", position: 2 },
        { name: "Davide", position: 3 },
      ],
    ]);
  });
});
