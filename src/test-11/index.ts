type Order = "asc" | "desc";
export const sortNames = (names: string[], order: Order = "asc"): string[] =>
  names.sort((a, b) =>
    order === "asc" ? a.localeCompare(b) : b.localeCompare(a)
  );
