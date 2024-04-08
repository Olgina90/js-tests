export const dataAndIndexes = (list: object[]): object[] =>
  list.map((obj, index) => ({ ...obj, index }));
