import { describe, expect, test } from "vitest";
import { mergeListAndArguments } from ".";

describe("se c'e' solo una list", () => {
  test("dovrebbe tornare la lista", () => {
    expect(mergeListAndArguments([])).toStrictEqual([]);
  });
});

describe("se ci sono argomenti oltre la list e la list e' vuota", () => {
  test("dovrebbe tornare una lista di dati", () => {
    expect(
      mergeListAndArguments([], 1, 2, 3, undefined, false, "yo")
    ).toStrictEqual([1, 2, 3, undefined, false, "yo"]);
  });
});

describe("se ci sono argomenti oltre la list", () => {
  test("dovrebbe tornare una lista di dati", () => {
    expect(
      mergeListAndArguments(
        ["hello", "goodbye"],
        1,
        2,
        3,
        undefined,
        false,
        "yo"
      )
    ).toStrictEqual(["hello", "goodbye", 1, 2, 3, undefined, false, "yo"]);
  });
});
