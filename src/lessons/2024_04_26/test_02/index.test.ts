import { describe, expect, test } from "vitest";
import { reverseWords } from ".";

describe("reverseWords", () => {
  test("Deve ritornare la stessa lista con l'ordine delle lettere invertito", () => {
    const input = ["oiraM", "edivaD", "oloaP", "òlocciN", "innaiG"];
    const output = ["Mario", "Davide", "Paolo", "Niccolò", "Gianni"];

    expect(reverseWords(input)).toStrictEqual(output);
  });
});
