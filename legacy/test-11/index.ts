type Order = "asc" | "desc";
export const sortNames = (names: string[], order: Order = "asc"): string[] => 
  names.sort((a, b) =>
    order === "desc" ? b.localeCompare(a) : a.localeCompare(b)
  );

