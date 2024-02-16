type Order = "asc" | "desc";
export const sortByLength = (names: string[], order: Order = "asc"): string[] =>
  names.sort((a, b) =>
    order === "desc"
      ? b.length - a.length || b.localeCompare(a)
      : a.length - b.length || a.localeCompare(b)
  );
