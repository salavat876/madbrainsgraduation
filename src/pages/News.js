import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import back_icon from "../assets/img/back-icon.svg";
const arr = [1, 2, 3, 4, 5, 6, 7];

function News() {
  return (
    <Container fluid="sm">
      <Row>
        <Container className="news-container">
          <Link to="/" className="back-icon">
            <img alt="back icon" src={back_icon} />
            Главная
          </Link>
          <Row>
            <Col>
              {arr.map((item) => (
                <Card key={item / 2}>
                  <Card.Body>
                    <Card.Title>Ремонт дороги на Ленина</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title
                      and make up the bulk of the card's content. Some
                      quick example text to build on the card title and
                      make up the bulk of the card's content. Some quick
                      example text to build on the card title and make up
                      the bulk of the card's content. Some quick example
                      text to build on the card title and make up the bulk
                      of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default News;
