export const sortNumbers = (list: number[], order: 'asc' | 'desc' = 'asc'): number[] => {
    return sortNumbers_davide_03(list, order)
};

const sortNumbers_olga = (list: number[], order: 'asc' | 'desc' = 'asc'): number[] => {
    if (order === "desc") {
        return list.sort((a, b) => b - a);
    } 
        return list.sort((a, b) => a - b);
};


const sortNumbers_davide_01 = (list: number[], order: 'asc' | 'desc' = 'asc'): number[] => {
    return list.sort((a, b) => {
        if (order === 'desc') {
            return b - a
        }
        return a - b
    });
};

const sortNumbers_davide_02 = (list: number[], order: 'asc' | 'desc' = 'asc'): number[] => {
    return list.sort((a, b) => {
        return order === 'desc' ? b-a : a-b
    });
};

const sortNumbers_davide_03 = (list: number[], order: 'asc' | 'desc' = 'asc'): number[] => 
    list.sort((a, b) => order === 'desc' ? b-a : a-b);
