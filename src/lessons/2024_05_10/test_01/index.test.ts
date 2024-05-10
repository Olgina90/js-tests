import { describe, expect, test } from "vitest";
import { flatAges } from ".";

describe("flatAges", () => {
  test("Deve ritornare tutte le eta' in una lista unica", () => {
    const input = [
      "83, 23, 65, 43, 1",
      "27, 16, 49, 15, 92",
      "96, 56, 18, 77, 5",
      "74, 49, 6, 60, 31",
      "56, 28, 77, 43, 15",
    ];
    const output = [
      83, 23, 65, 43, 1, 27, 16, 49, 15, 92, 96, 56, 18, 77, 5, 74, 49, 6, 60,
      31, 56, 28, 77, 43, 15,
    ];

    expect(flatAges(input)).toStrictEqual(output);
  });
});
