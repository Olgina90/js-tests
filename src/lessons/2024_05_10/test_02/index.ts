// const getAgesList = (ages: string): number[] => {
//   // "96, 56, 18, 77, 5"
//   const listOfStrings = ages.split(", "); // ["96", "56", "18", "77", "5"]
//   const listOfNumbers = listOfStrings.map(Number); // [96, 56, 18, 77, 5]

//   return listOfNumbers;
// };

// export const flatAndSortAges = (list: string[]): number[] => {
//   const listOfAges = list.flatMap(getAgesList);
//   const orderedListOfAges = listOfAges.sort((a, b) => a - b)

//   return orderedListOfAges
// };

const getAgesList = (ages: string): number[] => {
    const listOfStrings = ages.split(', ')
    const listOfNumbers = listOfStrings.map(Number)

    return listOfNumbers
}

export const flatAndSortAges = (list: string[]): number[] => {
    const listOfAges = list.flatMap(getAgesList)
    const orderedListOfAges = listOfAges.sort((a, b) => a -b)

    return orderedListOfAges
};
