import { describe, expect, test } from "vitest";
import { onlyEvenItems } from ".";

describe("onlyEvenItems", () => {
  test("Deve ritornare la lista con solo gli elementi pari", () => {
    expect(onlyEvenItems(["A", "B", "C", "D", "E"])).toStrictEqual(["B", "D"]);
  });
});
