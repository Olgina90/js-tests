type DataInput = {
  type: "MIN" | "MAX";
  value: string;
};

const toNumber = (value: string): number => {
  return Number(value);
};

const getMinOrMax = ({ type, value }: DataInput): number => {
  const listOfStrings = value.split(", ");
  const listOfNumbers = listOfStrings.map(toNumber);

  if (type === "MIN") {
    return Math.min(...listOfNumbers);
  }
  return Math.max(...listOfNumbers);
};

export const getMinOrMaxList = (list: DataInput[]): number[] => {
  return list.map(getMinOrMax);
};