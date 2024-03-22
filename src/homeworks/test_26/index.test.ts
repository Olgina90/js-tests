import { describe, expect, test } from "vitest";
import { join } from ".";

describe("Quando gli argomenti sono tutti `string`", () => {
  test("`join` dovrebbe tornare l'unione di tutti gli argomenti", () => {
    expect(join("Ciao", " ", "come", " ", "stai", "?")).toBe("Ciao come stai?");
  });
  test("`join` dovrebbe tornare l'unione di tutti gli argomenti", () => {
    expect(join("c", "i", "a", "o")).toBe("ciao");
  });
  test("`join` dovrebbe tornare l'unione di tutti gli argomenti", () => {
    expect(join("uno")).toBe("uno");
  });
  test("`join` dovrebbe tornare l'unione di tutti gli argomenti", () => {
    expect(join("verde", "-", "giallo", "-", "rosso")).toBe(
      "verde-giallo-rosso"
    );
  });
});
