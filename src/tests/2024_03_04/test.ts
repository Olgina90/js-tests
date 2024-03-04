//Test #1
export const getFirstArgument = (value: unknown): unknown => {
    return value
}

//Test #2
export const sum = (a:number, b: number): number => {
    return a + b
}

//Test #3
export const calc = (a:number, operator: '+' | '-' | '*' | '/', b:number) => {
    if(operator === '+'){
        return a + b 
    }
    if(operator === '-'){
        return a - b 
    }
    if(operator === '*'){
        return a * b 
    }
    if(operator === '/'){
        return a / b 
    }
}

//Test #4
export const getValueOrOne = (value?:number): number => 
{
    if (value !== 0){
        return value
    }
    if (value === 0){
        return 1
    }
}

//Test #5

export const max = (...values:number[]): number => Math.max(...values)
