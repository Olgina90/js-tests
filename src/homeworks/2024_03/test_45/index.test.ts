import { describe, expect, test } from "vitest";
import { getIdList } from ".";

describe("getIdList", () => {
  test("Deve ritornare una lista di id", () => {
    const input = [
      { name: "Olga", surname: "Hayduck" },
      { name: "Davide", surname: "Bruno" },
    ];
    const output = ["olga-hayduck-0", "davide-bruno-1"];
    expect(getIdList(input)).toStrictEqual(output);
  });
});
