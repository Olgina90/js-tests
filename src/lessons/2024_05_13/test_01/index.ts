// type Data = {
//   name: string;
//   index: number;
// };

// const getListItem = ({ index, name }: Data): string => {
//     const position = index + 1
//     return `${position}. ${name}`
// }

// export const orderedList = (list: Data[]): string[] => {
//     const orderedListOfData = list.sort((a, b) => a.index - b.index)
//     const listOfStrings = orderedListOfData.map(getListItem)

//     return listOfStrings
// };

type Data = {
  name: string;
  index: number;
};

const getListItem = ({ index, name }: Data): string => {
  const position = index + 1;
  return `${position}. ${name}`;
};

export const orderedList = (list: Data[]): string[] => {
  const orderedListOfData = list.sort((a, b) => a.index - b.index);
  const listOfStrings = orderedListOfData.map(getListItem);

  return listOfStrings;
};
