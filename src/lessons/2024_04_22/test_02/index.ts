type DataInput = {
    year: number,
    month: number,
    day: number
}
const getDate = ({year, month, day}: DataInput): Date => new Date(year, month, day)
const getDateString = (data: DataInput): string => getDate(data).toDateString()
// const getDateString = ({year, month, day}: DataInput): string => getDate({year, month, day}).toDateString()
// const getDateString = ({year, month, day}: DataInput): string => new Date(year, month, day).toDateString()

export const getDates = (list: DataInput[]): string[] => {
    return list.map(getDateString)
};
