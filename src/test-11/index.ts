export const sortNames = (names: string[], order: string = "asc"): string[] => {
  if (order === "desc") {
    return names.sort((a, b) => (a > b ? -1 : 1));
  } else if (order === "asc") {
    return names.sort((a, b) => (a > b ? 1 : -1));
  } else {
    throw new Error("Invalid order parameter. Use 'asc' or 'desc'.");
  }
};
