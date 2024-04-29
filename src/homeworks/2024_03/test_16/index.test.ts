import { describe, expect, test } from "vitest";
import { dashed } from ".";

describe("quando `word` e' 'olga'", () => {
  test("`dashed` dovrebbe tornare la stessa parola con `-` tra le lettere", () => {
    expect(dashed("olga")).toStrictEqual("o-l-g-a");
  });
});

describe("quando `word` e' 'davide'", () => {
  test("`dashed` dovrebbe tornare la stessa parola con `-` tra le lettere", () => {
    expect(dashed("davide")).toStrictEqual("d-a-v-i-d-e");
  });
});
