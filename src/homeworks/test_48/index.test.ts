import { describe, expect, test } from "vitest";
import { getWeekDays } from ".";

describe("getWeekDays", () => {
  test("Deve ritornare la lista con i giorni della settimana", () => {
    const input = [
      { year: 2024, month: 0, day: 0 },
      { year: 1989, month: 7, day: 21 },
      { year: 2000, month: 2, day: 17 },
      { year: 2011, month: 10, day: 20 },
      { year: 2024, month: 9, day: 1 },
      { year: 2024, month: 4, day: 8 },
    ];
    const output = [
      "Domenica",
      "Lunedi",
      "Venerdi",
      "Domenica",
      "Martedi",
      "Mercoledi",
    ];

    expect(getWeekDays(input)).toStrictEqual(output);
  });
});
