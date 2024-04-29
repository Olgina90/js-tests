import { describe, expect, test } from "vitest";
import { getDates } from ".";

describe("getDates", () => {
  test("Deve ritornare la lista con le date", () => {
    const input = [
      { year: 2024, month: 0, day: 0 },
      { year: 1989, month: 7, day: 21 },
      { year: 2000, month: 2, day: 17 },
      { year: 2011, month: 10, day: 20 },
      { year: 2024, month: 9, day: 1 },
      { year: 2024, month: 4, day: 8 },
    ];
    const output = [
      "Sun Dec 31 2023",
      "Mon Aug 21 1989",
      "Fri Mar 17 2000",
      "Sun Nov 20 2011",
      "Tue Oct 01 2024",
      "Wed May 08 2024",
    ];

    expect(getDates(input)).toStrictEqual(output);
  });
});
