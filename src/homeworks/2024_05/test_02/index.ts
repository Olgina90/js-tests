export const capitalize = (word: string): string => {
  const wordLowerCase = word.toLowerCase();
  return wordLowerCase[0].toUpperCase() + wordLowerCase.slice(1);
};
