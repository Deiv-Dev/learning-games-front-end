let startTime: number = 0;

export const startTimer = (): void => {
  startTime = Date.now();
};

export const endTimer = (): string => {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;

  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};
