import { useEffect, useState } from "react";

import {
  picturesToFindKitchen,
  picturesToFindLivingRoom,
} from "./FindPictureByWordData";

import ProgressComponent from "../../../../Components/GameComponents/ProgressComponent/ProgressComponent";
import { Button, Col, Container, Row } from "react-bootstrap";
import FeedbackMessageComponent from "../../../../Components/GameComponents/FeedbackMessageComponent/FeedbackMessageComponent";
import GameOverComponent from "../../../../Components/GameComponents/GameOverComponent/GameOverComponent";
import { endTimer, startTimer } from "../../../../Helpers/CountTimeHelper";
import {
  chunkStringArrayToSmallerParts,
  shuffleArray,
} from "../../../../Helpers/ArrayHelper";

import "./FindPictureByWordStyles.scss";

interface ImageMap {
  [key: string]: string;
}
function FindPicturesByWord() {
  const [pictureListSelected, setPictureListSelected] = useState<
    Array<string | number>
  >([]);
  const [chunkedImagesToShowOnCards, setChunkedImagesToShowOnCards] = useState<
    string[][]
  >([]);
  const [curentPictureToFind, setCurentPictureToFind] = useState<
    string | number
  >("");

  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [gamesProgresion, setGamesProgresion] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<string>("");

  const [imageMap, setImageMap] = useState<ImageMap>({});

  useEffect(() => {
    const loadImages = async () => {
      const images: ImageMap = {};
      for (const name of picturesToFindKitchen) {
        try {
          const image = await import(
            `../../../../Images/FindPictureByWord/${name}.jpg`
          );
          images[name] = image.default;
        } catch (error) {
          console.error(`Image not found for ${name}`, error);
        }
      }
      setImageMap(images);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const chunks = chunkStringArrayToSmallerParts(
      pictureListSelected as string[],
      3
    );
    setChunkedImagesToShowOnCards(chunks);
    setCurentPictureToFind(
      pictureListSelected[
        Math.floor(Math.random() * pictureListSelected.length)
      ]
    );
  }, [pictureListSelected]);

  function selectList(listSelected: string[]): void {
    const shuffedArray = shuffleArray(listSelected);
    setPictureListSelected(shuffedArray.slice(0, 9));
  }

  function handleCardClick(pictureName: string): void {
    if (pictureName === curentPictureToFind) {
      setIsAnswerCorrect(true);
      setTimeout(() => {
        setGamesProgresion((prevCount) => prevCount + 1);
        setCurentPictureToFind(
          pictureListSelected[
            Math.floor(Math.random() * pictureListSelected.length)
          ]
        );
        setPictureListSelected((prevList) => shuffleArray(prevList));

        if (gamesProgresion === 10) {
          setGameOver(true);
          setElapsedTime(endTimer());
          setCurentPictureToFind(0);
        }
        setIsAnswerCorrect(null);
      }, 500);
    } else {
      setIsAnswerCorrect(false);
      setTimeout(() => {
        setIsAnswerCorrect(null);
      }, 500);
    }
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
                  <p className="card__text">{curentPictureToFind}</p>
                </Col>
              </Row>
              <div className="image-grid-container">
                {chunkedImagesToShowOnCards.map(
                  (row: string[], rowIndex: number) => (
                    <Row className="image-grid-row" key={`row-${rowIndex}`}>
                      {row.map((name: string, colIndex: number) => (
                        <Col
                          key={`col-${colIndex}`}
                          className="image-grid-item"
                        >
                          {imageMap[name] ? (
                            <img
                              onClick={() => {
                                handleCardClick(name);
                              }}
                              src={imageMap[name]}
                              alt={name}
                            />
                          ) : (
                            <p>Image not found for {name}</p>
                          )}
                        </Col>
                      ))}
                    </Row>
                  )
                )}
              </div>
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
function slice(listSelected: string[], arg1: number): (string | number)[] {
  throw new Error("Function not implemented.");
}
