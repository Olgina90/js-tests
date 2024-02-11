import { expect, test } from "vitest";
import { getFullName } from ".";

test("getFullName should return (Davide Bruno)", () => {
  expect(getFullName("Davide", "Bruno")).toBe("Davide Bruno");
});

test("getFullName should return (Oliver Edward Gunman)", () => {
  expect(getFullName("Oliver", "Edward", "Gunman")).toBe(
    "Oliver Edward Gunman",
  );
});
