export const randomInteger = (min: number, max: number): number => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const isValidEmail = (value: string): boolean => {
  const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  return regex.test(value);
};
