type Data = { letter: string; index: number };

export const lettersAndIndexes = (list: string[]): Data[] => {
  return list.map((letter, index) => ({ letter, index }));
};
