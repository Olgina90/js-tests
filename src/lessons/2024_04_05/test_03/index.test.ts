import { describe, expect, test } from "vitest";
import { lettersAndIndexes } from ".";

describe("lettersAndIndexes", () => {
  test("Deve ritornare la lista con oggetti che hanno letter e index", () => {
    expect(lettersAndIndexes(["A", "B", "C", "D", "E"])).toStrictEqual([
      { letter: "A", index: 0 },
      { letter: "B", index: 1 },
      { letter: "C", index: 2 },
      { letter: "D", index: 3 },
      { letter: "E", index: 4 },
    ]);
  });
});
