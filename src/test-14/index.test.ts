import { expect, test } from "vitest";
import { sortData } from ".";

const data = [
  { name: "Davide", index: 3 },
  { name: "Olga", index: 0 },
  { name: "Claudio", index: 2 },
  { name: "Juan", index: 4 },
  { name: "Lorenzo", index: 1 },
];

test("sortData returns the same list ordered by index ascendant by default", () => {
  expect(sortData(data)).toStrictEqual([
    { name: "Olga", index: 0 },
    { name: "Lorenzo", index: 1 },
    { name: "Claudio", index: 2 },
    { name: "Davide", index: 3 },
    { name: "Juan", index: 4 },
  ]);
});

test("sortData returns the same list ordered by index ascendant", () => {
  expect(sortData(data), "asc").toStrictEqual([
    { name: "Olga", index: 0 },
    { name: "Lorenzo", index: 1 },
    { name: "Claudio", index: 2 },
    { name: "Davide", index: 3 },
    { name: "Juan", index: 4 },
  ]);
});

test("sortData returns the same list ordered by index descendant", () => {
  expect(sortData(data), "desc").toStrictEqual([
    { name: "Juan", index: 4 },
    { name: "Davide", index: 3 },
    { name: "Claudio", index: 2 },
    { name: "Lorenzo", index: 1 },
    { name: "Olga", index: 0 },
  ]);
});
