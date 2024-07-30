import { useState } from "react";

import {
  picturesToFindKitchen,
  picturesToFindLivingRoom,
} from "./FindPictureByWordData";

import ProgressComponent from "../../../../Components/GameComponents/ProgressComponent/ProgressComponent";
import { Button, Col, Container, Row } from "react-bootstrap";
import FeedbackMessageComponent from "../../../../Components/GameComponents/FeedbackMessageComponent/FeedbackMessageComponent";
import GameOverComponent from "../../../../Components/GameComponents/GameOverComponent/GameOverComponent";
import { startTimer } from "../../../../Helpers/CountTimeHelper";

function FindPicturesByWord() {
  const [pictureListSelected, setPictureListSelected] = useState<Array<string>>(
    []
  );
  const [curentPictureToFind, setCurentPictureToFind] = useState<string>("");
  const [shuffledPicturesToShowOnCards, setShuffledPicturesToShowOnCards] =
    useState<Array<string>>([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [gamesProgresion, setGamesProgresion] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<string>("");

  function selectList(listSelected: string[]): void {
    setPictureListSelected(listSelected);
  }

  return (
    <>
      <div className="find-pictures-by-words">
        {pictureListSelected.length === 0 ? (
          <Container>
            <Row>
              <Col className="select-game__selector">
                <Button
                  onClick={() => selectList(picturesToFindKitchen)}
                  className="select-game__text"
                  variant="primary"
                >
                  Virtuve
                </Button>
              </Col>
              <Col className="select-game__selector">
                <Button
                  onClick={() => selectList(picturesToFindLivingRoom)}
                  className="select-game__text"
                  variant="primary"
                >
                  Salionas
                </Button>
              </Col>
            </Row>
          </Container>
        ) : (
          <>
            <ProgressComponent progress={gamesProgresion * 10} />
            <Container>
              <Row>
                <Col
                  className="card"
                  style={{ backgroundColor: "rgb(151, 212, 159)" }}
                >
                  <p className="card__text">
                    {
                      pictureListSelected[
                        Math.floor(
                          Math.random() * shuffledPicturesToShowOnCards.length
                        )
                      ]
                    }
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
          </>
        )}
      </div>
    </>
  );
}

export default FindPicturesByWord;