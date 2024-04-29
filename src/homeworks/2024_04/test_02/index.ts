const getReversedWord = (word: string): string => {
  return word.split("").reverse().join("");
};

export const reverseWords = (list: string[]): string[] => {
  return list.map(getReversedWord);
};
