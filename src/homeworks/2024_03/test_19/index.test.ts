import { describe, expect, test } from "vitest";
import { splitCommasAndLowerCase } from ".";

describe("se `word` non ha virgole e non ha lettere maiuscole", () => {
  test("dovrebbe tornare una lista con la stringa (word)", () => {
    expect(splitCommasAndLowerCase("hello")).toStrictEqual(["hello"]);
  });
});

describe("se `word` ha virgole", () => {
  test("dovrebbe tornare una lista con le parole tra le virgole", () => {
    expect(splitCommasAndLowerCase("hello,goodbye")).toStrictEqual([
      "hello",
      "goodbye",
    ]);
  });
});

describe("se `word` ha lettere maiuscole", () => {
  test("dovrebbe tornare una lista con le parole tra le virgole in minuscolo", () => {
    expect(
      splitCommasAndLowerCase("hello,goodbye,SEE YOU TOMORROW")
    ).toStrictEqual(["hello", "goodbye", "see you tomorrow"]);
  });
});
