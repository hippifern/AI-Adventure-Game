export const pickRandom = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return { randomValue: array[randomIndex], randomIndex: randomIndex };
};
