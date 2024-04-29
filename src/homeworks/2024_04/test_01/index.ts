const getNameWithPosition = (name: string, index: number): string => {
  const position = index + 1;
  return `${position}. ${name}`;
};
export const getOrderedList = (list: string[]): string[] => {
  return list.map(getNameWithPosition);
};
