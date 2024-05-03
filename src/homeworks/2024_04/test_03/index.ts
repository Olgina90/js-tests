const toNumber = (value: string): number => {
  return Number(value);
};

const getMin = (input: string): number => {
  const listOfStrings = input.split(", ");
  const listOfNumbers = listOfStrings.map(toNumber);

  return Math.min(...listOfNumbers);
};
export const getMinList = (list: string[]): number[] => {
  return list.map(getMin);
};
