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

function FindNumberByWord() {
  const [currentNumberToFind, setCurrentNumberToFind] = useState<number>(0);
  const [shuffledNumbersToShowOnCards, setShuffledNumbersToShowOnCards] =
    useState<number[]>([]);
  const [chunkedNumbersToShowOnCards, setChunkedNumbersToShowOnCards] =
    useState<number[][]>([]);
  const [cardsBackgroundColors, setCardsBackgroundColors] = useState<string[]>(
    []
  );

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
      setCurrentNumberToFind((prevNumber) => prevNumber + 1);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="card" style={{ backgroundColor: "rgb(151, 212, 159)" }}>
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
  );
}

export default FindNumberByWord;
