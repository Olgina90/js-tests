import { describe, expect, test } from "vitest";
import { reverseList } from ".";

describe("reverseList", () => {
  test("Deve ritornare la lista con le lettere in ordine inverso", () => {
    expect(reverseList(["A", "B", "C", "D", "E"])).toStrictEqual([
      "E",
      "D",
      "C",
      "B",
      "A",
    ]);
  });
});
