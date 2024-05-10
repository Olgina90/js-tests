const getAge = (birthDate: Date): number => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthYear = birthDate.getFullYear();

  const birthday = birthDate;
  birthday.setFullYear(currentYear);

  const hasBirthdayPassed = today >= birthday;
  const yearsToSubstract = hasBirthdayPassed ? 0 : 1;

  return currentYear - yearsToSubstract - birthYear;
};

export const getAges = (list: Date[]): number[] => {
  return list.map(getAge);
};
