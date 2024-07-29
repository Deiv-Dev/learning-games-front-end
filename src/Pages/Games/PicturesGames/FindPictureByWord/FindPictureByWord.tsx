import { useState } from "react";

import { picturesToFindInWords } from "./FindPictureByWordData";

import ProgressComponent from "../../../../Components/GameComponents/ProgressComponent/ProgressComponent";
import { Col, Container, Row } from "react-bootstrap";
import FeedbackMessageComponent from "../../../../Components/GameComponents/FeedbackMessageComponent/FeedbackMessageComponent";
import GameOverComponent from "../../../../Components/GameComponents/GameOverComponent/GameOverComponent";
import { startTimer } from "../../../../Helpers/CountTimeHelper";

function FindPicturesByWord() {
  const [pictureListSelected, setPictureListSelected] = useState<string>("");
  const [curentPictureToFind, setCurentPictureToFind] = useState<string>("");
  const [shuffledPicturesToShowOnCards, setShuffledPicturesToShowOnCards] =
    useState<Array<string>>([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [gamesProgresion, setGamesProgresion] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<string>("");

  return (
    <div className="find-pictures-by-words">
      <ProgressComponent progress={gamesProgresion * 10} />
      <Container>
        <Row>
          <Col
            className="card"
            style={{ backgroundColor: "rgb(151, 212, 159)" }}
          >
            <p className="card__text">
              {picturesToFindInWords[Math.floor(Math.random() * shuffledPicturesToShowOnCards.length]}
            </p>
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
}

export default FindPicturesByWord;
