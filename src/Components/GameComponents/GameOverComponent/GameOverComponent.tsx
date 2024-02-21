import { Container, Row, Col, Button } from "react-bootstrap";
import "./GameOverComponentStyles.scss";
import closeGame from "../../../Images/wrong.svg";
import { Link } from "react-router-dom";

interface GameOverComponentProps {
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameOverComponent = ({ setGameOver }: GameOverComponentProps) => {
  const handlePlayAgain = (): void => {
    setGameOver(false);
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
            <p>1:40s</p>
          </Col>
          <Col>
            <p>Taskai</p>
            <p>89</p>
          </Col>
        </Row>
        <Row className="game-over__row">
          <Col>
            <Button variant="primary">Ziureti taskus</Button>
          </Col>
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
