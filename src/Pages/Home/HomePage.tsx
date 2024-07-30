import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HomePageStyles.scss";

function HomePage() {
  return (
    <div className="select-game">
      <Container className="select-game__container">
        <Row>
          <Col className="select-game__selector">
            <Link to="/find-number-by-word">
              <Button className="select-game__text" variant="primary">
                Žaidimai su skaičiais
              </Button>
            </Link>
          </Col>
          <Col className="select-game__selector">
            <Link to="/find-alphabet-letters">
              <Button className="select-game__text" variant="primary">
                Žaidimai su raidėm
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="select-game__selector">
            <Link to="/find-number-by-word">
              <Button className="select-game__text" variant="primary">
                Žaidimai su spalvom
              </Button>
            </Link>
          </Col>
          <Col className="select-game__selector">
            <Link to="/find-number-by-word">
              <Button className="select-game__text" variant="primary">
                Žaidimai su žodžiais
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="select-game__selector">
            <Link to="/find-picture-by-word">
              <Button className="select-game__text" variant="primary">
                Žaidimai su nuotraukomis
              </Button>
            </Link>
          </Col>
          {/* <Col className="select-game__selector">
            <Link to="/find-number-by-word">
              <Button className="select-game__text" variant="primary">
                Žaidimai su žodžiais
              </Button>
            </Link>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
