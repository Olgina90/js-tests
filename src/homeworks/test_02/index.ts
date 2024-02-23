export const compare = (a:number, b:number):'>' | '<' | '=' => {
    if(a > b){
        return '>'
    }
    if(a<b){
        return '<'
    }
    if(a= b){
        return '='
    }
}