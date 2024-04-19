import { describe, expect, test } from "vitest";
import { dataAndIndexes } from ".";

describe("dataAndIndexes", () => {
  test("Deve ritornare la lista con oggetti che hanno gli stessi dati e index", () => {
    const input = [
      { name: "Olga", age: 24 },
      { surname: "Bruno", height: 1.64 },
      { middlename: "Fernandez", weight: 75 },
    ];
    const output = [
      { name: "Olga", age: 24, index: 0 },
      { surname: "Bruno", height: 1.64, index: 1 },
      { middlename: "Fernandez", weight: 75, index: 2 },
    ];
    expect(dataAndIndexes(input)).toStrictEqual(output);
  });
});
