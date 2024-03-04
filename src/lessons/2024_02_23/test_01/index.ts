export const isInRange = (value: number, min: number, max: number): boolean => 
{
  //    if(value>min){
  //     if(value<max){
  //         return true
  //     }
  //    }
  //    return false
  // if( value>min && value<max){
  //     return true
  // }
  // return false
  return value > min && value < max;
};
