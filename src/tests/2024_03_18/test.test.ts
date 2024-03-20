import { describe, expect, test } from "vitest";
import { different, join, dashed, bigOrSmall, valueOrNothing } from "./test";

describe("test1", () => {
  test("`different` dovrebbe tornare `false`", () => {
    expect(different(5, 5)).toBe(false);
  });
  test("`different` dovrebbe tornare `false`", () => {
    expect(different("hello", "hello")).toBe(false);
  });
  test("`different` dovrebbe tornare `true`", () => {
    expect(different("5", 5)).toBe(true);
  });
  test("`different` dovrebbe tornare `true`", () => {
    expect(different(true, false)).toBe(true);
  });
});

describe("test2", () => {
  test("`join` dovrebbe tornare l'unione di tutti gli argomenti", () => {
    expect(join("Ciao", " ", "come", " ", "stai", "?")).toBe("Ciao come stai?");
  });
  test("`join` dovrebbe tornare l'unione di tutti gli argomenti", () => {
    expect(join("c", "i", "a", "o")).toBe("ciao");
  });
  test("`join` dovrebbe tornare l'unione di tutti gli argomenti", () => {
    expect(join("uno")).toBe("uno");
  });
  test("`join` dovrebbe tornare l'unione di tutti gli argomenti", () => {
    expect(join("verde", "-", "giallo", "-", "rosso")).toBe(
      "verde-giallo-rosso"
    );
  });
});

describe("test3", () => {
  test("`dashed` dovrebbe tornare `o-l-g-a`", () => {
    expect(dashed("olga")).toBe("o-l-g-a");
  });
  test("`dashed` dovrebbe tornare ``", () => {
    expect(dashed("")).toBe("");
  });
  test("`dashed` dovrebbe tornare `d-a-v-i-d-e`", () => {
    expect(dashed("davide")).toBe("d-a-v-i-d-e");
  });
  test("`dashed` dovrebbe tornare `g-i-a-l-l-o`", () => {
    expect(dashed("giallo")).toBe("g-i-a-l-l-o");
  });
});

describe("test4", () => {
  test("`bigOrSmall` dovrebbe tornare `CIAO`", () => {
    expect(bigOrSmall("Ciao", "big")).toBe("CIAO");
  });
  test("`bigOrSmall` dovrebbe tornare `ciao`", () => {
    expect(bigOrSmall("Ciao", "small")).toBe("ciao");
  });
  test("`bigOrSmall` dovrebbe tornare `HELLO WORLD`", () => {
    expect(bigOrSmall("hElLo wOrLd", "big")).toBe("HELLO WORLD");
  });
  test("`bigOrSmall` dovrebbe tornare `goodbye`", () => {
    expect(bigOrSmall("GOODBYE", "small")).toBe("goodbye");
  });
});

describe("test5", () => {
  test("`valueOrNothing` dovrebbe tornare `1`", () => {
    expect(valueOrNothing(1)).toBe(1);
  });
  test("`valueOrNothing` dovrebbe tornare `nothing`", () => {
    expect(valueOrNothing(0)).toBe("nothing");
  });
  test("`valueOrNothing` dovrebbe tornare `hello`", () => {
    expect(valueOrNothing("hello")).toBe("hello");
  });
  test("`valueOrNothing` dovrebbe tornare `nothing`", () => {
    expect(valueOrNothing()).toBe("nothing");
  });
});
