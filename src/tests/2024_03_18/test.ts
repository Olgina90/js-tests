//Test 1

export const different = (first: unknown, second: unknown): boolean => {
    if (first != second){
        return false
    }
    return true
} 

//Test 2

export const join = (argoments: string): string => 

//Test 3

export const dashed =(word: string): string => word.split('').join('-')

// Test 4

export const bigOrSmall = (word: string, type: 'big' | 'small'): string => {
    if( type === 'big'){
        return word.toUpperCase()
    }
    return word.toLowerCase()
}

// Test 5

export const valueOrNothing = (value:unknown): unknown => value || 'nothing'