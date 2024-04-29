export const round =(value: number):number => {
    if(value - Math.floor(value) >= 0.5){
        return Math.ceil(value)
    }
    return Math.floor(value)
}