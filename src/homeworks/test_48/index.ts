type dataInput = {
    year: number,
    month: number, 
    day: number
}

const outputDay= [
    "Domenica",
    "Lunedi",
    "Martedi",
    "Mercoledi",
    "Giovedi",
    "Venerdi",
    "Sabato"
]

const getDay = ({year, month, day}: dataInput): string => {
    const getIndex = new Date(year, month, day).getDay()
    return outputDay[getIndex]
}
export const getWeekDays = (list: dataInput[]): string[] => {
    return list.map(getDay)
}