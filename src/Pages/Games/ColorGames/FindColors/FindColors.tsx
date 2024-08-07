import { useEffect, useState } from "react";
import { startTimer } from "../../../../Helpers/CountTimeHelper";

const FindColors = () => {
  const [currentColorIndexToFind, setCurrentColorIndexToFind] =
    useState<number>(0);
  const [shuffledColorsToShowOnCards, setShuffledColorsToShowOnCards] =
    useState<string>("");
  const [chunkedColorsToShowOnCards, setChunkedColorsToShowOnCards] = useState<
    string[][]
  >([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<string>("");
  const [curentColorToFind, setCurentColorToFind] = useState<string>("");

  useEffect(() => {
    startTimer();
  }, []);

  return <div></div>;
};

export default FindColors;
