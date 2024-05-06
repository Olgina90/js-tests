import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { getAges } from ".";

describe("getAges", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  test("Deve ritornare la stessa lista con l'eta' attuale di ogni data di nascita", () => {
    vi.setSystemTime(new Date("Fri May 03 2024"));
    const input = [
      new Date("Apr 03, 2003"),
      new Date("Apr 11, 2002"),
      new Date("Jun 27, 2000"),
      new Date("Mar 24, 1979"),
      new Date("Feb 02, 1976"),
    ];
    const output = [21, 22, 23, 45, 48];

    expect(getAges(input)).toStrictEqual(output);
  });
});
