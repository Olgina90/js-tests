type Order = 'asc' | 'desc'
export const sortData = (data: string[], index: number, order:Order='asc' ):string[] => 
    data.sort((a, b) => order === 'desc' ? b.index - a.index : a.index - b.index
    )

