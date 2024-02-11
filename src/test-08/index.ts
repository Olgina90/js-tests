export const getFullName = (...names: string[]) => {
  let fullName = "";
  for (const name of names) {
    if (fullName === "") {
      fullName = fullName + name;
    } else {
      fullName = fullName + " " + name;
    }
  }
  return fullName;
};
