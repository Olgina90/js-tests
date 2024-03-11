export const calc = (a:number, operator: '+'| '-' | '*' | '/', b: number): number => {
    switch(operator) {
        case '+': {
            return a + b
        }
        case '-': {
            return a - b
        }
        case '*': {
            return a * b
        }
        case '/':
        default: {
            return a / b
        }
    }

}