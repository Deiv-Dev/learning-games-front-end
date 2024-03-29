import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CardComponents from "../../../../Components/GameComponents/CardComponent/CardComponent";
import FeedbackMessageComponent from "../../../../Components/GameComponents/FeedbackMessageComponent/FeedbackMessageComponent";
import ProgressComponent from "../../../../Components/GameComponents/ProgressComponent/ProgressComponent";
import GameOverComponent from "../../../../Components/GameComponents/GameOverComponent/GameOverComponent";

import {
  numbersToFindInWords,
  numbersToShowOnCards,
} from "./FindNumberByWordData";

import {
  addCurrentAnswerToArray,
  chunkArrayToSmallerParts,
  shuffleArray,
} from "../../../../Helpers/ArrayHelper";
import { getRandomLightColor } from "../../../../Helpers/RandomColorGeneratorHelper";

import { startTimer, endTimer } from "../../../../Helpers/CountTimeHelper";
import "./FindNumberByWordStyles.scss";

function FindNumberByWord() {
  const [currentNumberToFind, setCurrentNumberToFind] = useState<number>(0);
  const [shuffledNumbersToShowOnCards, setShuffledNumbersToShowOnCards] =
    useState<Array<string | number>>([]);
  const [chunkedNumbersToShowOnCards, setChunkedNumbersToShowOnCards] =
    useState<number[][]>([]);
  const [cardsBackgroundColors, setCardsBackgroundColors] = useState<string[]>(
    []
  );
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<string>("");

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    setShuffledNumbersToShowOnCards(() => {
      const shuffledNumbers = shuffleArray(numbersToShowOnCards).slice(0, 9);
      return addCurrentAnswerToArray(
        shuffledNumbers,
        numbersToShowOnCards[currentNumberToFind]
      );
    });

    setCardsBackgroundColors(
      Array.from({ length: 9 }, () => getRandomLightColor())
    );
  }, [currentNumberToFind]);

  useEffect(() => {
    setChunkedNumbersToShowOnCards(() =>
      chunkArrayToSmallerParts(shuffledNumbersToShowOnCards, 3)
    );
  }, [shuffledNumbersToShowOnCards]);

  const handleCardClick = (card: string | number): void => {
    if (currentNumberToFind + 1 === card) {
      setIsAnswerCorrect(true);
      setTimeout(() => {
        setCurrentNumberToFind((prevNumber) => prevNumber + 1);
        if (currentNumberToFind === 9) {
          setGameOver(true);
          setElapsedTime(endTimer());
          setCurrentNumberToFind(0);
        }
        setIsAnswerCorrect(null);
      }, 500);
    } else {
      setIsAnswerCorrect(false);
      setTimeout(() => {
        setIsAnswerCorrect(null);
      }, 500);
    }
  };

  return (
    <div className="find-numbers-game-background">
      <ProgressComponent progress={currentNumberToFind * 10} />
      <Container>
        <Row>
          <Col
            className="card"
            style={{ backgroundColor: "rgb(151, 212, 159)" }}
          >
            <p className="card__text">
              {numbersToFindInWords[currentNumberToFind]}
            </p>
          </Col>
        </Row>
        <CardComponents
          chunkedArray={chunkedNumbersToShowOnCards}
          cardsBackgroundColors={cardsBackgroundColors}
          handleCardClick={handleCardClick}
        />
      </Container>
      <FeedbackMessageComponent isCorrect={isAnswerCorrect} />
      {gameOver === true && (
        <GameOverComponent
          setGameOver={setGameOver}
          elapsedTime={elapsedTime}
          startTimer={startTimer}
        />
      )}
    </div>
  );
}

export default FindNumberByWord;
