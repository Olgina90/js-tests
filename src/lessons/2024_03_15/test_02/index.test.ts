import { describe, expect, test } from "vitest";
import { initials } from ".";

describe("se `name` ha nome e cognome", () => {
  test("dovrebbe tornare le iniziali in maiuscolo", () => {
    expect(initials("Davide Bruno")).toBe("DB");
  });
});

describe("se `name` ha nome, middlename e cognome", () => {
  test("dovrebbe tornare le iniziali in maiuscolo", () => {
    expect(initials("Davide Robert Bruno")).toBe("DRB");
  });
});

describe("se `name` ha nome e cognome in minuscolo ", () => {
  test("dovrebbe tornare le iniziali in maiuscolo", () => {
    expect(initials("davide bruno")).toBe("DRB");
  });
});

describe("se `name` ha nome, middlename e cognome in minuscolo ", () => {
  test("dovrebbe tornare le iniziali in maiuscolo", () => {
    expect(initials("davide robert bruno")).toBe("DRB");
  });
});
