type dataInput = Record<"name" | "surname", string>

export const getFullNames = (list: dataInput[]): string[] => {
    return list.map(({name, surname}) => {
        return `${name} ${surname}`
    })
}
