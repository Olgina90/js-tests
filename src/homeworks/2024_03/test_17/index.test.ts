import { describe, expect, test } from "vitest";
import { spacedAndReversed } from ".";

describe("quando `word` e' 'OLGA'", () => {
  test("`spacedAndReversed` dovrebbe tornare la stessa parola con `-` tra le lettere", () => {
    expect(spacedAndReversed("OLGA")).toStrictEqual("A G L O");
  });
});

describe("quando `word` e' 'DAVIDE'", () => {
  test("`spacedAndReversed` dovrebbe tornare la stessa parola con `-` tra le lettere", () => {
    expect(spacedAndReversed("DAVIDE")).toStrictEqual("E D I V A D");
  });
});
