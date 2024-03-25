const increaseValue = (item:number):number => item + 1
export const increaseValues = (...list: number[]): number[] =>
  list.map(increaseValue);
