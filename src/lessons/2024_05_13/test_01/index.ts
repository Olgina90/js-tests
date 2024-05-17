type Data = {
  name: string;
  index: number;
};

const getAgesList = ({ index, name }: Data): string => {
  const position = index + 1;
  return `${position}. ${name}`;
};

export const orderedList = (list: Data[]): string[] => {
  const orderedAgesList = list.sort((a, b) => a.index - b.index);

  return orderedAgesList.map(getAgesList);
};
