import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
const arr = [1, 2, 3, 4, 5, 6, 7]

function News() {
  return (
    <Container>
      <Row>
        <Col>
          {arr.map((item) => (
            <Card key={item / 2}>
              <Card.Body>
                <Card.Title>Ремонт дороги на Ленина</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and
                  make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default News
