import { describe, expect, test } from "vitest";
import { mergeLists } from ".";

describe("se `listA` e `listB` non sono vuote", () => {
  test("dovrebbe tornare la fusione tra le due liste", () => {
    expect(mergeLists(["a", "b", "c"], ["d", "e", "f"])).toStrictEqual([
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ]);
  });
});

describe("se `listA` e vuota", () => {
  test("dovrebbe tornare la listB ", () => {
    expect(mergeLists([], ["d", "e", "f"])).toStrictEqual(["d", "e", "f"]);
  });
});

describe("se `listB` e vuota", () => {
  test("dovrebbe tornare la listA ", () => {
    expect(mergeLists(["a", "b", "c"], [])).toStrictEqual(["a", "b", "c"]);
  });
});
