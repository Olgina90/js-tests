type DataInput = Record<string, unknown>;
type DataOutPut = DataInput & { index };
export const dataAndIndexes = (list: DataInput[]): DataOutPut[] => {
  return list.map((data, index) => ({ ...data, index }));
};
