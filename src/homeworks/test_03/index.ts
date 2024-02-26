export const isInRange =(value:number,min:number,max:number):boolean => {
    if (value < min || value > max) {
        return false;
    }
    return true;

    // if (value < min){
    //     return false
    // }
    // if(value > max){
    //     return false
    // }
    // return true
}