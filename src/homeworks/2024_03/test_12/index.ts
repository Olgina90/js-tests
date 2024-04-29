export const putApplesInBasket = (apples: number = 0): number => {
  if (apples < 0) {
    return 0;
  }
  if (apples > 10) {
    return 10;
  }
  return apples;
};
