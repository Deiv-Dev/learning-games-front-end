import { Row, Col } from "react-bootstrap";
import "./CardComponentStyle.scss";

interface CardComponentsProps {
  chunkedArray: (string | number)[][];
  cardsBackgroundColors: string[];
  handleCardClick: (card: string | number) => void;
}

const CardComponents = ({
  chunkedArray,
  cardsBackgroundColors,
  handleCardClick,
}: CardComponentsProps) => {
  return (
    <>
      {chunkedArray.map((row, rowIndex) => (
        <Row key={`row-${rowIndex}`}>
          {row.map((card, colIndex) => (
            <Col
              style={{
                backgroundColor:
                  cardsBackgroundColors[
                    Math.floor(Math.random() * cardsBackgroundColors.length)
                  ],
              }}
              className="card"
              key={`col-${rowIndex}-${colIndex}`}
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
