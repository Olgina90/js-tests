import { describe, expect, test } from "vitest";
import { orderedList } from ".";

describe("orderedList", () => {
  test("Deve ritornare tutte le eta' in una lista unica", () => {
    const input = [
      { index: 4, name: "Kim" },
      { index: 1, name: "Tim" },
      { index: 9, name: "Jim" },
      { index: 5, name: "Rim" },
      { index: 7, name: "Will" },
      { index: 2, name: "Claude" },
      { index: 6, name: "Sam" },
      { index: 8, name: "Pam" },
      { index: 3, name: "Ian" },
      { index: 0, name: "Paul" },
    ];
    const output = [
      "1. Paul",
      "2. Tim",
      "3. Claude",
      "4. Ian",
      "5. Kim",
      "6. Rim",
      "7. Sam",
      "8. Will",
      "9. Pam",
      "10. Jim",
    ];

    expect(orderedList(input)).toStrictEqual(output);
  });
});
