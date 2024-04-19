type DataInput = Record<string, unknown>;
type DataOutput = DataInput & { index: number };

export const dataAndIndexes = (list: DataInput[]): DataOutput[] => {
  return list.map((data, index) => ({ ...data, index }));
};
