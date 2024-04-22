type DataInputKeys = "year" | "month" | "day";
type DataInput = Record<DataInputKeys, number>;

const weekDays = [
  "Domenica",
  "Lunedi",
  "Martedi",
  "Mercoledi",
  "Giovedi",
  "Venerdi",
  "Sabato",
];

const getWeekDay = ({ year, month, day }: DataInput): string => {
  const index = new Date(year, month, day).getDay();
  return weekDays[index];
};

export const getWeekDays = (list: DataInput[]) => {
  return list.map(getWeekDay);
};
