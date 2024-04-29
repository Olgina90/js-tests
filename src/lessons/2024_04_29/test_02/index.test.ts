import { describe, expect, test } from "vitest";
import { getMinOrMaxList } from ".";

describe("getMinOrMaxList", () => {
  test("Deve ritornare la stessa lista con i numeri piu piccoli o piu grandi di ogni `value`", () => {
    const input = [
      { type: "MIN", value: "1, 2, 3, 4" },
      { type: "MAX", value: "7, 10, -1, 20, 40, -200" },
      { type: "MAX", value: "59, 34, 590, 22, 80" },
      { type: "MIN", value: "0.45, 1, 0.2, 3.3" },
      { type: "MAX", value: "-100, -79, -22, -34, -127, -76" },
    ];
    const output = [1, 40, 590, 0.2, -22];

    expect(getMinOrMaxList(input)).toStrictEqual(output);
  });
});
