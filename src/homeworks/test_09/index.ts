export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};
// {
//   if (value > min && value < max) {
//     return value;
//   }
//   if (value > max) {
//     return max;
//   }
//   if (value === max) {
//     return max;
//   }
//   if (value < min) {
//     return min;
//   }
//   if (value === min) {
//     return min;
//   }
// };
