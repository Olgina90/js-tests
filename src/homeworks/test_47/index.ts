
type dataInput = Record<"year" | "month" | "day", number>

const getData = ({year, month, day}: dataInput): Date => new Date(year, month, day)
const getDataOutput = (data: dataInput): string => {
    return getData(data).toDateString()
}

export const getDates = (list: dataInput[]): string[] => {
    return list.map(getDataOutput)
}
