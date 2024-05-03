import { describe, expect, test } from "vitest";
import { capitalizeList } from ".";

describe("capitalizeList", () => {
  test("Deve ritornare la stessa lista con le stringhe che iniziano con la lettera maiuscola ed il resto delle lettere minuscole", () => {
    const input = ["MaRiO", "dAvIde", "paolo", "niCColò", "gIAnni"];
    const output = ["Mario", "Davide", "Paolo", "Niccolò", "Gianni"];

    expect(capitalizeList(input)).toStrictEqual(output);
  });
});
