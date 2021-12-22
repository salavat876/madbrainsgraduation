import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
const arr = [1, 2, 3, 4, 5, 6, 7];

function News() {
  return (
    <Container fluid="sm">
      <Row>
        <Container className="news-container">
          <h1 className="news__title">Все события</h1>
          <Row>
            <Col>
              {arr.map((item) => (
                <Card key={item / 2} className="news-card">
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
