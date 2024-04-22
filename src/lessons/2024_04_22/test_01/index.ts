type DataInput = Record<"name" | "surname", string>;
const getDataOutput = ({ name, surname }: DataInput) => `${name} ${surname}`;
// const getDataOutput =(data: DataInput) => `${data.name} ${data.surname}` 

export const getFullNames = (list: DataInput[]): string[] => {
  return list.map(getDataOutput);
};

// const data = { age: 21, weight: 78}

// const getDataString = (dataArg: typeof data) => `${dataArg.age} ${dataArg.weight}`