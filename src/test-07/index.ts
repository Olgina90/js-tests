export const sumMultiple = (...addends: number[]) => {
  let result = 0;
  for (const addend of addends) {
    result = result + addend;
  }
  return result;
};
