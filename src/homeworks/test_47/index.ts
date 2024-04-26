type DataInput = Record<"year" | "month" | "day", number>;

const getDate = ({ year, month, day }: DataInput): Date =>
  new Date(year, month, day);
const getDataOutput = (data: DataInput): string => {
  return getDate(data).toDateString();
};

export const getDates = (list: DataInput[]): string[] => {
  return list.map(getDataOutput);
};
