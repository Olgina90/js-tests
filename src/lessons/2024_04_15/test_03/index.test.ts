import { describe, expect, test } from "vitest";
import { dataFormatter } from ".";

describe("dataFormatter", () => {
  test("Deve ritornare la lista con oggetti che hanno letter e index", () => {
    expect(
      dataFormatter([
        {
          fullName: "Olga Haiduchyk",
          age: 24,
          birthday: new Date(new Date().getFullYear(), 4, 9),
        },
        {
          fullName: "Lorenzo Carotozzolo",
          age: 40,
          birthday: new Date(new Date().getFullYear(), 0, 30),
        },
        {
          fullName: "Winston Milton Cotroneo",
          age: 16,
          birthday: new Date(new Date().getFullYear(), 11, 22),
        },
      ])
    ).toStrictEqual([
      {
        name: "Olga",
        surname: "Haiduchyk",
        dateOfBirth: new Date(new Date().getFullYear() - 25, 4, 9),
      },
      {
        name: "Lorenzo",
        surname: "Carotozzolo",
        birthday: new Date(new Date().getFullYear() - 40, 0, 30),
      },
      {
        name: "Winston",
        middleName: "Milton",
        surname: "Cotroneo",
        birthday: new Date(new Date().getFullYear() - 17, 11, 22),
      },
    ]);
  });
});
