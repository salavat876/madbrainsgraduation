import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { Map, YMaps } from "react-yandex-maps"

function Main() {
  return (
    <Container style={{ marginTop: "1em" }}>
      <Row>
        <Col sm={7}>
          <Card style={{ height: "100%" }}>
            <Card.Body>
              <Card.Title>Состояние на сегодня</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={5}>
          <Card>
            <Card.Body>
              <Card.Title>Запланнированные мероприятия</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Container style={{ marginTop: "1em" }}>
          <Card style={{ minHeight: "487px" }}>
            <Card.Body style={{ padding: 15 }}>
              <Card.Title>Чрезвычайные ситуации на карте</Card.Title>
              <YMaps>
                <Map
                  defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                  width
                  height="400px"
                />
              </YMaps>
            </Card.Body>
          </Card>
        </Container>
      </Row>
    </Container>
  )
}

export default Main
