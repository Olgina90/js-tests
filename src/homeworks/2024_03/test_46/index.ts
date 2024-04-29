type DataInput = Record<"name" | "surname", string>;

export const getFullNames = (list: DataInput[]): string[] => {
  return list.map(({ name, surname }) => {
    return `${name} ${surname}`;
  });
};
