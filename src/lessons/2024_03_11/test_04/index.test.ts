import { describe, expect, test } from "vitest";
import { dashed } from ".";

describe("quando `word` e' 'olga'", () => {
  test("`dashed` dovrebbe tornare la stessa parola con `-` tra le lettere", () => {
    expect(dashed("olga", 0)).toStrictEqual("o-l-g-a");
  });
});

describe("quando `word` e' 'davide'", () => {
  test("`dashed` dovrebbe tornare la stessa parola con `-` tra le lettere", () => {
    expect(dashed("davide", 0)).toStrictEqual("d-a-v-i-d-e");
  });
});
