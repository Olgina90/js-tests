export const round = (value: number): number => {
    if ((value - Math.floor(value)) >= 0.5) 
    {
        return Math.ceil(value)
    }
    return Math.floor(value)
    
}

// export const round = (value:number):number => {
//     const decimal = value - Math.floor(value)
//     if( decimal >= 0.5){
//         return Math.ceil(value)
//     }
//     return Math.floor(value)
// }