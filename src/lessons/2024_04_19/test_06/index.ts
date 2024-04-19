type Data = Record<"name" | "surname", string>;

export const getIdList = (list: Data[]): string[] => {
  return list.map(({ name, surname }, index) => {
    return `${name.toLowerCase()}-${surname.toLowerCase()}-${index}`;
  });
};
