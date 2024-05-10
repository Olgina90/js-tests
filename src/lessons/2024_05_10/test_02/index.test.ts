import { describe, expect, test } from "vitest";
import { flatAndSortAges } from ".";

describe("flatAndSortAges", () => {
  test("Deve ritornare tutte le eta' in una lista unica", () => {
    const input = [
      "83, 23, 65, 43, 1",
      "27, 16, 49, 15, 92",
      "96, 56, 18, 77, 5",
      "74, 49, 6, 60, 31",
      "56, 28, 77, 43, 15",
    ];
    const output = [
      1, 5, 6, 15, 15, 16, 18, 23, 27, 28, 31, 43, 43, 49, 49, 56, 56, 60, 65,
      74, 77, 77, 83, 92, 96,
    ];

    expect(flatAndSortAges(input)).toStrictEqual(output);
  });
});
