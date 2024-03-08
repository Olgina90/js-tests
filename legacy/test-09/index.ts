// export const sortNumbers = (list: number[]) => {
//   return list.sort((a,b) => {
//     if(a > b){
//       return -1
//     }
//     if(a < b){
//       return 1
//     }
//     return 0
//   })
// }

export const sortNumbers = (list: number[]) =>
list.sort((a, b) => (a > b ? -1 : 1));
