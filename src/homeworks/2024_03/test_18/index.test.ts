import { describe, expect, test } from "vitest";
import { spacedAndUpperCase } from ".";

describe("quando `word` e' 'olga'", () => {
  test("`dashed` dovrebbe tornare la stessa parola con `-` tra le lettere", () => {
    expect(spacedAndUpperCase("olga")).toStrictEqual("O L G A");
  });
});

describe("quando `word` e' 'davide'", () => {
  test("`dashed` dovrebbe tornare la stessa parola con `-` tra le lettere", () => {
    expect(spacedAndUpperCase("davide")).toStrictEqual("D A V I D E");
  });
});
