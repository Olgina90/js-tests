import { describe, expect, test } from "vitest";
import { getFirstArgument, sum, calc, getValueOrOne, max } from "./test";

describe("test1", () => {
  test("`getFirstArgument` dovrebbe tornare il primo argomento (1)", () => {
    expect(getFirstArgument(5)).toBe(5);
  });
  test("`getFirstArgument` dovrebbe tornare il primo argomento (2)", () => {
    expect(getFirstArgument("hello")).toBe("hello");
  });
  test("`getFirstArgument` dovrebbe tornare il primo argomento (3)", () => {
    expect(getFirstArgument(true)).toBe(true);
  });
  test("`getFirstArgument` dovrebbe tornare il primo argomento (3)", () => {
    expect(getFirstArgument(undefined)).toBe(undefined);
  });
});

describe("test2", () => {
  test("`sum` dovrebbe tornare la somma di `a` e `b`", () => {
    expect(sum(5, 2)).toBe(7);
  });
  test("`sum` dovrebbe tornare la somma di `a` e `b`", () => {
    expect(sum(10, 8)).toBe(18);
  });
  test("`sum` dovrebbe tornare la somma di `a` e `b`", () => {
    expect(sum(40, -20)).toBe(20);
  });
  test("`sum` dovrebbe tornare la somma di `a` e `b`", () => {
    expect(sum(-57, 9)).toBe(-48);
  });
});

describe("test3", () => {
  test("`calc` dovrebbe tornare l'addizione tra `a` e `b`", () => {
    expect(calc(5, "+", 2)).toBe(7);
  });
  test("`calc` dovrebbe tornare la sottrazione tra `a` e `b`", () => {
    expect(calc(10, "-", 8)).toBe(2);
  });
  test("`calc` dovrebbe tornare la moltiplicazione tra `a` e `b`", () => {
    expect(calc(40, "*", 3)).toBe(120);
  });
  test("`calc` dovrebbe tornare la divisione tra `a` e `b`", () => {
    expect(calc(100, "/", 2)).toBe(50);
  });
});

describe("test4", () => {
  test("`getValueOrOne` dovrebbe tornare il primo argomento se e' positivo", () => {
    expect(getValueOrOne(5)).toBe(5);
  });
  test("`getValueOrOne` dovrebbe tornare il primo argomento se e' negativo", () => {
    expect(getValueOrOne(-3)).toBe(-3);
  });
  test("`getValueOrOne` dovrebbe tornare `1` se non ci sono argomenti", () => {
    expect(getValueOrOne()).toBe(1);
  });
  test("`getValueOrOne` dovrebbe tornare `1` se l'argomento e' 0", () => {
    expect(getValueOrOne(0)).toBe(1);
  });
});

describe("test5", () => {
  test("`max` dovrebbe tornare il primo argomento", () => {
    expect(max(5, 4, 3, 2)).toBe(5);
  });
  test("`max` dovrebbe tornare il quarto argomento", () => {
    expect(max(-2, -4, -6, 1, 0)).toBe(1);
  });
  test("`max` dovrebbe tornare il secondo argomento", () => {
    expect(max(0, 100, 20, 40, 30, 10, 90, 80)).toBe(100);
  });
  test("`max` dovrebbe tornare il terzo argomento", () => {
    expect(max(4, 0, 10, 2, 3, 7, 9)).toBe(10);
  });
});
