import { describe, expect, test } from "vitest";
import { getListOfArguments } from ".";

describe("se non ci sono argomenti", () => {
  test("dovrebbe tornare una lista vuota", () => {
    expect(getListOfArguments()).toStrictEqual([]);
  });
});

describe("se ci sono argomenti", () => {
  test("dovrebbe tornare una lista di dati", () => {
    expect(
      getListOfArguments([], 1, 2, 3, undefined, false, "yo")
    ).toStrictEqual([[], 1, 2, 3, undefined, false, "yo"]);
  });
});
