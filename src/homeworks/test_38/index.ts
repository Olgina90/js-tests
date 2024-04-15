type Data = { letter: string; index: number };
export const lettersAndIndexes = (lists: string[]): Data[] =>
  lists.map((letter, index) => ({
    letter,
    index,
  }));
