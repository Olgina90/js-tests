import { describe, expect, test } from "vitest";
import { addDavideToList } from ".";

describe("se `list` e' vuota", () => {
  test("dovrebbe tornare una lista con solo `Davide`", () => {
    expect(addDavideToList([])).toStrictEqual(["Davide"]);
  });
});

describe("se `list` non e' vuota", () => {
  test("dovrebbe tornare list con `Davide` come ultimo nome", () => {
    expect(addDavideToList(["Olga", "Claudio"])).toStrictEqual([
      "Olga",
      "Claudio",
      "Davide",
    ]);
  });
});
