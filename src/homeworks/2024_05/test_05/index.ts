const getAges = (ages: string): number[] => {
  const listOfStrings = ages.split(', ')
  const listOfNumbers = listOfStrings.map(Number)

  return listOfNumbers
}

export const flatAges = (list: string[]): number[] => {
  const listOfAges = list.flatMap(getAges)
  const orderedListOfAges = [...listOfAges].sort((a,b) => a - b)

  return orderedListOfAges
}