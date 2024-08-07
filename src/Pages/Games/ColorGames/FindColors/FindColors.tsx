import { useEffect, useState } from "react";
import { startTimer } from "../../../../Helpers/CountTimeHelper";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import ProgressComponent from "../../../../Components/GameComponents/ProgressComponent/ProgressComponent";
import CardComponents from "../../../../Components/GameComponents/CardComponent/CardComponent";
import FeedbackMessageComponent from "../../../../Components/GameComponents/FeedbackMessageComponent/FeedbackMessageComponent";
import GameOverComponent from "../../../../Components/GameComponents/GameOverComponent/GameOverComponent";
import { colors, colorsEN } from "./FidnColorsData";

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

  function handleCardClick(card: string | number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="find-color-game-background">
      <ProgressComponent progress={currentColorIndexToFind} />
      <Container>
        <Row>
          <Col
            className="card"
            style={{ backgroundColor: "rgb(151, 212, 159)" }}
          >
            <p className="card__text">{colors[currentColorIndexToFind]}</p>
          </Col>
          <Col>
            <CardComponents
              chunkedArray={chunkedColorsToShowOnCards}
              cardsBackgroundColors={colorsEN}
              handleCardClick={handleCardClick}
            />
          </Col>
        </Row>
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
};

export default FindColors;
