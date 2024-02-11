export const sortNumbers = (
  list: number[],
  order: "asc" | "desc" = "asc",
): number[] => list.sort((a, b) => (order === "desc" ? b - a : a - b));
