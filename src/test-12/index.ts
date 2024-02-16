// export const sortByLength = (names: string[], order:'asc' | 'desc'= 'asc'): string[] =>
//   names.sort((a, b) => order === 'desc' ? b.length - a.length : a.length - b.length);

export const sortByLength = (
  names: string[],
  order: "asc" | "desc" = "asc"
): string[] => {
  return names.sort((a, b) => {
    if (order === "asc") {
      return a.length - b.length;
    }
    return b.length - a.length;
  });
};
