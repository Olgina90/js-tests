

type DataInput = {
  type: "MIN" | "MAX";
  value: string;
};

const getMinOrMax = ({ value, type }: DataInput) => {
  const listOfStrings = value.split(", ");
  const listOfNumbers = listOfStrings.map(Number);

  if (type === "MIN") {
    return Math.min(...listOfNumbers);
  }
  return Math.max(...listOfNumbers);
};

export const getMinOrMaxList = (list: DataInput[]): number[] => {
  return list.map(getMinOrMax);
};
