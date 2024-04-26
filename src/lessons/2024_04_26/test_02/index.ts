const reverseName = (name: string): string => {
    return name.split('').reverse().join('')
}

export const reverseWords = (list: string[]): string[] => {
    return list.map(reverseName)
}