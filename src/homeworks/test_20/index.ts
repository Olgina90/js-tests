export const initials = (word: string): string => {
  const list = word.split(" ");
  const firstName = list[0];
  const firstInitial = firstName[0];

  const secondName = list[1];
  const secondInitial = secondName[0];

  const thirdName: string | undefined = list[2];
  const thirdInitial = thirdName?.[0];
  return [firstInitial, secondInitial, thirdInitial].join("").toUpperCase();
};
