import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponents from "../../../../Components/GameComponents/CardComponents/CardComponents";
import {
  numbersToFindInWords,
  numbersToShowOnCards,
} from "./FindNumberByWordData";
import {
  addCurrentAnswerToArray,
  chunkArrayToSmallerParts,
  shuffleArray,
} from "../../../../Helpers/ArrayHelpers";
import { getRandomLightColor } from "../../../../Helpers/RandomColorGenerator";
import FeedbackMessageComponent from "../../../../Components/GameComponents/FeedbackMessageComponent/FeedbackMessageComponent";

function FindNumberByWord() {
  const [currentNumberToFind, setCurrentNumberToFind] = useState<number>(0);
  const [shuffledNumbersToShowOnCards, setShuffledNumbersToShowOnCards] =
    useState<number[]>([]);
  const [chunkedNumbersToShowOnCards, setChunkedNumbersToShowOnCards] =
    useState<number[][]>([]);
  const [cardsBackgroundColors, setCardsBackgroundColors] = useState<string[]>(
    []
  );
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    setShuffledNumbersToShowOnCards(() => {
      const shuffledNumbers = shuffleArray(numbersToShowOnCards).slice(0, 9);
      return addCurrentAnswerToArray(shuffledNumbers, currentNumberToFind);
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

  const handleCardClick = (card: number): void => {
    if (currentNumberToFind + 1 === card) {
      setIsAnswerCorrect(true);
      setTimeout(() => {
        setCurrentNumberToFind((prevNumber) => prevNumber + 1);
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
    <>
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
    </>
  );
}

export default FindNumberByWord;
