import { describe, expect, test } from "vitest";
import { nthLetter } from ".";

describe("quando `index` e' 0", () => {
  test("`nthLetter` dovrebbe tornare la prima lettera", () => {
    expect(nthLetter("olga", 0)).toBe("o");
  });
});

describe("quando `index` e' 3", () => {
  test("`nthLetter` dovrebbe tornare la quarta lettera", () => {
    expect(nthLetter("olga", 3)).toBe("a");
  });
});

describe("quando `index` e' maggiore della lunghezza di `word`", () => {
  test("`nthLetter` dovrebbe tornare null", () => {
    expect(nthLetter("olga", 5)).toBe(null);
  });
});