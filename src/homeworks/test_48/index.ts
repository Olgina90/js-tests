type DataInput = {
  year: number;
  month: number;
  day: number;
};

const outputDay = [
  "Domenica",
  "Lunedi",
  "Martedi",
  "Mercoledi",
  "Giovedi",
  "Venerdi",
  "Sabato",
];

const getDay = ({ year, month, day }: DataInput): string => {
  const index = new Date(year, month, day).getDay();
  return outputDay[index];
};
export const getWeekDays = (list: DataInput[]): string[] => {
  return list.map(getDay);
};
