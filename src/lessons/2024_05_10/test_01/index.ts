// const getAgesList = (ages: string): number[] => {
//   // "83, 23, 65, 43, 1"
//   const listOfStrings = ages.split(", "); // ["83", "23", "65", "43", "1"]
//   const listOfNumbers = listOfStrings.map(Number); // [83, 23, 65, 43, 1]

//   return listOfNumbers;
// };

// export const flatAges = (list: string[]): number[] => {
//   return list.flatMap(getAgesList);
// };

const getAges = (ages: string): number[] => {
  const listOfString = ages.split(", ");
  const listOfNumbers = listOfString.map(Number);

  return listOfNumbers;
};

export const flatAges = (list: string[]): number[] => {
  return list.flatMap(getAges);
};
