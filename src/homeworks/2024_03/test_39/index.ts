type DataInput = Record<string, unknown>
type DataOutput = DataInput & {index: number}


export const dataAndIndexes = (lists: DataInput[]): DataOutput[] =>
  lists.map((data, index) => ({ ...data, index }));