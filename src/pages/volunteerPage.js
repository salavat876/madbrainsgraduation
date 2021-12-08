import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10]
function Volunteer() {
  return (
    <Container>
      <h1>Здесь будет информация о волонтерстве</h1>
      <Row>
        <Col>
          {arr.map((item) => (
            <Card key={item}>
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
export default Volunteer
