// const getAge = (birthDate: Date): number => {
//   const today = new Date();
//   const currentYear = today.getFullYear(); // 2024
//   const birthYear = birthDate.getFullYear(); // 1990

//   const birthday = birthDate; // Dec 14, 1990
//   birthday.setFullYear(currentYear); // Dec 14, 2024

//   const hasBirthdayPassed = today >= birthday; // false
//   const yearToSubtract = hasBirthdayPassed ? 0 : 1 // 1

//   return (currentYear - yearToSubtract) - birthYear; // 33
// };

// export const getAges = (list: Date[]): number[] => {
//   return list.map(getAge);
// };

const getAge = (birthDate: Date): number => {
    const today = new Date()
    const currentYear = today.getFullYear()
    const birthYear = birthDate.getFullYear()

    const birthday = birthDate
    birthday.setFullYear(currentYear)

    const hasBirthdayPassed = today >= birthday
    const yearsToSubstract = hasBirthdayPassed ? 0: 1

    return (currentYear-yearsToSubstract) - birthYear
}

export const getAges = (list: Date[]): number[] => {
    return list.map(getAge)
};
