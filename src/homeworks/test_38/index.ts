export const lettersAndIndexes = (list: string[]): unknown[] =>
  list.map((letter, index) => ({
    letter, index
  }));
