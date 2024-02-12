export function chunkArrayToSmallerParts(
  arrayToSplitToChunks: number[],
  howManyValuesInChunk: number
): number[][] {
  return Array.from(
    {
      length: Math.ceil(arrayToSplitToChunks.length / howManyValuesInChunk),
    },
    (_, index) =>
      arrayToSplitToChunks.slice(
        index * howManyValuesInChunk,
        (index + 1) * howManyValuesInChunk
      )
  );
}

export function shuffleArray(arrayToShuffle: number[]): number[] {
  const shuffledArray = [...arrayToShuffle];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export function addCurrentAnswerToArray(
  valuesInArray: number[],
  valueToFindInArray: number
): number[] {
  const valuesExistInArray = valuesInArray.includes(valueToFindInArray + 1);

  if (!valuesExistInArray) {
    const randomIndex = Math.floor(Math.random() * valuesInArray.length - 1);
    valuesInArray[randomIndex] = valueToFindInArray + 1;
  }
  return valuesInArray;
}
