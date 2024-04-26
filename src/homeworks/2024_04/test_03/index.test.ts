import { describe, expect, test } from "vitest";
import { getMinList } from ".";

describe("getMinList", () => {
  test("Deve ritornare la stessa lista con i numeri piu piccoli di ogni stringa", () => {
    const input = [
      "1, 2, 3, 4",
      "7, 10, -1, 20, 40, -200",
      "59, 34, 590, 22, 80",
      "0.45, 1, 0.2, 3.3",
      "-100, -79, -22, -34, -127, -76",
    ];
    const output = [1, -200, 22, 0.2, -127];

    expect(getMinList(input)).toStrictEqual(output);
  });
});
