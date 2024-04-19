const invert = (isTrue: boolean): boolean => !isTrue;

export const invertAllBooleans = (list: boolean[]): boolean[] => {
  return list.map(invert);
};