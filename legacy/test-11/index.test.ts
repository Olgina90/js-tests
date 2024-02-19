import { expect, test } from "vitest";
import { sortNames } from ".";

test("sortNames returns the same list ordered ascendant by default", () => {
  expect(
    sortNames([
      "Jessika Medrano",
      "Jaleel Nunes",
      "Chelsie Jackson",
      "Amani McFarland",
      "Alvaro Underwood",
      "Shaylee Arthur",
      "Jordan Kenny",
      "Kasandra Strom",
      "Haven Sweet",
      "Auston Crowell",
    ]),
  ).toStrictEqual([
    "Alvaro Underwood",
    "Amani McFarland",
    "Auston Crowell",
    "Chelsie Jackson",
    "Haven Sweet",
    "Jaleel Nunes",
    "Jessika Medrano",
    "Jordan Kenny",
    "Kasandra Strom",
    "Shaylee Arthur",
  ]);
});

test("sortNames returns the same list ordered ascendant", () => {
  expect(
    sortNames(
      [
        "Jessika Medrano",
        "Jaleel Nunes",
        "Chelsie Jackson",
        "Amani McFarland",
        "Alvaro Underwood",
        "Shaylee Arthur",
        "Jordan Kenny",
        "Kasandra Strom",
        "Haven Sweet",
        "Auston Crowell",
      ],
      "asc",
    ),
  ).toStrictEqual([
    "Alvaro Underwood",
    "Amani McFarland",
    "Auston Crowell",
    "Chelsie Jackson",
    "Haven Sweet",
    "Jaleel Nunes",
    "Jessika Medrano",
    "Jordan Kenny",
    "Kasandra Strom",
    "Shaylee Arthur",
  ]);
});

test("sortNames returns the same list ordered descendant", () => {
  expect(
    sortNames(
      [
        "Jessika Medrano",
        "Jaleel Nunes",
        "Chelsie Jackson",
        "Amani McFarland",
        "Alvaro Underwood",
        "Shaylee Arthur",
        "Jordan Kenny",
        "Kasandra Strom",
        "Haven Sweet",
        "Auston Crowell",
      ],
      "desc",
    ),
  ).toStrictEqual([
    "Shaylee Arthur",
    "Kasandra Strom",
    "Jordan Kenny",
    "Jessika Medrano",
    "Jaleel Nunes",
    "Haven Sweet",
    "Chelsie Jackson",
    "Auston Crowell",
    "Amani McFarland",
    "Alvaro Underwood",
  ]);
});
