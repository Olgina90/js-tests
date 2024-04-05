const isEven = (value: number): boolean => value % 2 === 0;
const isOdd = (value: number): boolean => !isEven(value)

export const onlyEvenItems = (list: string[]): string[] =>
  list.filter((_letter, index) => {
    const position = index + 1;
    return !isOdd(position);
  });
