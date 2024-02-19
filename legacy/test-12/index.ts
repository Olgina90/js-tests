type Order = "asc" | "desc";
export const sortByLength = (names: string[], order: Order = "asc"): string[] =>
  names.sort((a, b) => (order === "asc" ? a.length - b.length : b.length- a.length));
