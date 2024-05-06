const capitalize = (word: string): string => {
  const [firstLetter, ...rest] = word;
  const first = firstLetter.toUpperCase();
  const others = rest.join("").toLowerCase();

  return `${first}${others}`;
};

export const capitalizeList = (list: string[]): string[] => {
  return list.map(capitalize);
};
