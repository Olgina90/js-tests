export const sortByLength = (
  names: string[],
  order: "asc" | "desc" = "asc"
): string[] => {
  return names.sort((a, b) => {
    if (order === "asc") {
      return a.length - b.length || a.localeCompare(b);
    } else {
      return b.length - a.length || b.localeCompare(a);
    }
  });
};
