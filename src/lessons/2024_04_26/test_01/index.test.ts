import { describe, expect, test } from "vitest";
import { getOrderedList } from ".";

describe("getOrderedList", () => {
  test("Deve ritornare la stessa lista con la posizione come prefisso", () => {
    const input = ["Mario", "Davide", "Paolo", "Niccolò", "Gianni"];
    const output = [
      "1. Mario",
      "2. Davide",
      "3. Paolo",
      "4. Niccolò",
      "5. Gianni",
    ];

    expect(getOrderedList(input)).toStrictEqual(output);
  });
});
