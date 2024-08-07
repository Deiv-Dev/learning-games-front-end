import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CardComponents from "../../../../Components/GameComponents/CardComponent/CardComponent";
import FeedbackMessageComponent from "../../../../Components/GameComponents/FeedbackMessageComponent/FeedbackMessageComponent";
import ProgressComponent from "../../../../Components/GameComponents/ProgressComponent/ProgressComponent";
import GameOverComponent from "../../../../Components/GameComponents/GameOverComponent/GameOverComponent";

import { alphabet } from "./FindAlphabetLettersData";

import {
  addCurrentAnswerToArray,
  chunkArrayToSmallerParts,
  shuffleArray,
} from "../../../../Helpers/ArrayHelper";
import { getRandomLightColor } from "../../../../Helpers/RandomColorGeneratorHelper";
import { startTimer, endTimer } from "../../../../Helpers/CountTimeHelper";
import "./FindAlphabetLettersStyles.scss";

function FindAlphabetLetters() {
  const [currentLetterIndexToFind, setCurrentLetterIndexToFind] =
    useState<number>(0);
  const [shuffledLettersToShowOnCards, setShuffledLettersToShowOnCards] =
    useState<Array<string | number>>([]);
  const [chunkedLettersToShowOnCards, setChunkedLettersToShowOnCards] =
    useState<(string | number)[][]>([]);
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
    setShuffledLettersToShowOnCards(() => {
      const shuffledLetters = shuffleArray(alphabet).slice(0, 9);
      return addCurrentAnswerToArray(
        shuffledLetters,
        alphabet[currentLetterIndexToFind]
      );
    });

    setCardsBackgroundColors(
      Array.from({ length: 9 }, () => getRandomLightColor())
    );
  }, [currentLetterIndexToFind]);

  useEffect(() => {
    setChunkedLettersToShowOnCards(() =>
      chunkArrayToSmallerParts(shuffledLettersToShowOnCards, 3)
    );
  }, [shuffledLettersToShowOnCards]);

  const handleCardClick = (card: string | number): void => {
    if (alphabet[currentLetterIndexToFind] === card) {
      setIsAnswerCorrect(true);
      setTimeout(() => {
        setCurrentLetterIndexToFind((prevNumber) => prevNumber + 1);
        if (currentLetterIndexToFind === alphabet.length - 1) {
          setGameOver(true);
          setElapsedTime(endTimer());
          setCurrentLetterIndexToFind(0);
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
    <div className="find-alphabet-letters-game-background">
      <ProgressComponent
        progress={(currentLetterIndexToFind / alphabet.length) * 100}
      />
      <Container>
        <Row>
          <Col
            className="card"
            style={{ backgroundColor: "rgb(151, 212, 159)" }}
          >
            <p className="card__text">{alphabet[currentLetterIndexToFind]}</p>
          </Col>
        </Row>
        <CardComponents
          chunkedArray={chunkedLettersToShowOnCards}
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

export default FindAlphabetLetters;
