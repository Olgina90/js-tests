import { describe, expect, test } from "vitest";
import { replace } from ".";

describe("se text non ha searchValue", () => {
  test("dovrebbe tornare `text`", () => {
    expect(
      replace("Davide ha guidato la macchina", "Patrizio", "Veronica")
    ).toBe("Davide ha guidato la macchina");
  });
});

describe("se text ha searchValue", () => {
  test("dovrebbe tornare `text` con il searchValue rimpiazzato da replaceValue", () => {
    expect(
      replace("Davide ha guidato la macchina", "Davide", "Olga")
    ).toBe("Olga ha guidato la macchina");
  });
});
