import { Row, Col } from "react-bootstrap";
import "./CardComponentsStyle.scss";

interface CardComponentsProps {
  chunkedArray: number[][];
  cardsBackgroundColors: string[];
  handleCardClick: (card: number) => void;
}

const CardComponents = ({
  chunkedArray,
  cardsBackgroundColors,
  handleCardClick,
}: CardComponentsProps) => {
  return (
    <>
      {chunkedArray.map((row: number[]) => (
        <Row key={`row-${row}`}>
          {row.map((card: number) => (
            <Col
              style={{
                backgroundColor:
                  cardsBackgroundColors[Math.floor(Math.random() * 9)],
              }}
              className="card"
              key={`col-${row}-${card}`}
              onClick={() => handleCardClick(card)}
            >
              <p className="card__text">{card}</p>
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
};

export default CardComponents;
