export function chunkArrayToSmallerParts(
  arrayToSplitToChunks: Array<string | number>,
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
  ) as number[][];
}

export function shuffleArray(
  arrayToShuffle: Array<string | number>
): Array<string | number> {
  const shuffledArray = [...arrayToShuffle];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export function addCurrentAnswerToArray(
  valuesInArray: Array<string | number>,
  valueToFindInArray: number | string
): Array<string | number> {
  if (valuesInArray.includes(valueToFindInArray)) {
    return valuesInArray;
  }

  const randomIndex = Math.floor(Math.random() * valuesInArray.length);

  valuesInArray[randomIndex] = valueToFindInArray;

  return valuesInArray;
}
