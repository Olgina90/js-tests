import { expect, test } from "vitest";
import { sortByLength } from ".";

test("sortByLength returns the same list by length and alphabetically in ascendant order by default", () => {
  expect(
    sortByLength(["Davide", "Olga", "Claudio", "Juan", "Lorenzo"]),
  ).toStrictEqual(["Juan", "Olga", "Davide", "Claudio", "Lorenzo"]);
});

test("sortByLength returns the same list by length and alphabetically in ascendant order", () => {
  expect(
    sortByLength(["Davide", "Olga", "Claudio", "Juan", "Lorenzo"], "asc"),
  ).toStrictEqual(["Juan", "Olga", "Davide", "Claudio", "Lorenzo"]);
});

test("sortByLength returns the same list by length and alphabetically in descendant order", () => {
  expect(
    sortByLength(["Davide", "Olga", "Claudio", "Juan", "Lorenzo"], "desc"),
  ).toStrictEqual(["Lorenzo", "Claudio", "Davide", "Olga", "Juan"]);
});
