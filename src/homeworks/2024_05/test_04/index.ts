const getAges = (ages: string): number[] => {
  const listOfStrings = ages.split(", ");
  const listOfNumbers = listOfStrings.map(Number);
  return listOfNumbers;
};

export const flatAges = (list: string[]): number[] => {
  return list.flatMap(getAges);
};