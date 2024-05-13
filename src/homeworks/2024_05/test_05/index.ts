const getAgesList = (ages: string): number[] => {
  const listOfString = ages.split(", ");
  const listofNumbers = listOfString.map(Number);
  return listofNumbers;
};
export const flatAndSortAges = (list: string[]): number[] => {
  const listOfAges = list.flatMap(getAgesList);
  const orderedlistAges = listOfAges.sort((a, b) => a - b);
  return orderedlistAges;
};