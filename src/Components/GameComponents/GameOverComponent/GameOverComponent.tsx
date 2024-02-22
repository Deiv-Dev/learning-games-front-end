import { Container, Row, Col, Button } from "react-bootstrap";
import "./GameOverComponentStyles.scss";
import closeGame from "../../../Images/wrong.svg";
import { Link } from "react-router-dom";

interface GameOverComponentProps {
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  elapsedTime: string;
  startTimer: () => void;
}

const GameOverComponent = ({
  setGameOver,
  elapsedTime,
  startTimer,
}: GameOverComponentProps) => {
  const handlePlayAgain = (): void => {
    setGameOver(false);
    startTimer();
  };

  return (
    <div className="game-over">
      <Container className="game-over__container">
        <Row className="game-over__row">
          <Col className="game-over__close">
            <Link to="/">
              <button>
                <img
                  className="game-over__close__image"
                  src={closeGame}
                  alt="close-game"
                />
              </button>
            </Link>
          </Col>
        </Row>
        <Row className="game-over__row">
          <Col>
            <h1>Žaidimas baigtas</h1>
          </Col>
        </Row>
        <Row className="game-over__row">
          <Col>
            <p>Klaidingi paspaudimai</p>
            <p>10</p>
          </Col>
          <Col>
            <p>Laikas</p>
            <p>{elapsedTime}</p>
          </Col>
          <Col>
            <p>Taskai</p>
            <p>89</p>
          </Col>
        </Row>
        <Row className="game-over__row">
          <Col>
            <Button onClick={() => handlePlayAgain()} variant="success">
              Zaisti dar karta
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GameOverComponent;
