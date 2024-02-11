export const sortNames = (names: string[], order: 'asc' | 'desc' = 'asc'):string[] => 
    names.sort((a, b) => order === 'desc' ? b.localeCompare(a) : a.localeCompare(b));
