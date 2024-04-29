import { describe, expect, test } from "vitest";
import { split } from ".";

describe("quando `word` e' 'olga'", () => {
  test("`split` dovrebbe tornare la lista di lettere", () => {
    expect(split("olga")).toStrictEqual(["o", "l", "g", "a"]);
  });
});

describe("quando `word` e' 'davide'", () => {
  test("`split` dovrebbe tornare la lista di lettere", () => {
    expect(split("davide")).toStrictEqual(["d", "a", "v", "i", "d", "e"]);
  });
});
