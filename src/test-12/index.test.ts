import { expect, test } from "vitest";
import { sortByLength } from ".";

test("sortByLength returns the same list by length in ascendant order by default", () => {
  expect(
    sortByLength(["Davide", "Olga", "Claudio", "Juan", "Lorenzo"]),
  ).toStrictEqual(["Olga", "Juan", "Davide", "Claudio", "Lorenzo"]);
});

test("sortByLength returns the same list by length in ascendant order", () => {
  expect(
    sortByLength(["Davide", "Olga", "Claudio", "Juan", "Lorenzo"], "asc"),
  ).toStrictEqual(["Olga", "Juan", "Davide", "Claudio", "Lorenzo"]);
});

test("sortByLength returns the same list by length in descendant order", () => {
  expect(
    sortByLength(["Davide", "Olga", "Claudio", "Juan", "Lorenzo"], "desc"),
  ).toStrictEqual(["Claudio", "Lorenzo", "Davide", "Olga", "Juan"]);
});
