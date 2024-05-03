import { describe, expect, test } from "vitest";
import { capitalize } from ".";

describe("capitalize", () => {
  test("Deve ritornare la stessa lista con le stringhe che iniziano con la lettera maiuscola ed il resto delle lettere minuscole", () => {
    const input = ["MaRiO", "dAvIde", "paolo", "niCColò", "gIAnni"];
    const output = ["Mario", "Davide", "Paolo", "Niccolò", "Gianni"];

    expect(input.map(capitalize)).toStrictEqual(output);
  });
});
