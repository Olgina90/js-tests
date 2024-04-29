import { describe, expect, test } from "vitest";
import { getFullNames } from ".";

describe("getFullNames", () => {
  test("Deve ritornare la lista che ha come elementi nome e cognome in una sola string", () => {
    const input = [
      { name: "Mario", surname: "Rossi" },
      { name: "Davide", surname: "Bruno" },
      { name: "Paolo", surname: "Balotelli" },
      { name: "Niccolò", surname: "Fabris" },
      { name: "Gianni", surname: "Fanucci" },
    ];
    const output = [
      "Mario Rossi",
      "Davide Bruno",
      "Paolo Balotelli",
      "Niccolò Fabris",
      "Gianni Fanucci",
    ];

    expect(getFullNames(input)).toStrictEqual(output);
  });
});