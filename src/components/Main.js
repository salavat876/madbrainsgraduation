import React from "react";
import {
  Alert,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Map, YMaps, ZoomControl } from "react-yandex-maps";

function Main() {
  return (
    <Container className="margin-top1">
      <Row>
        <Col lg={7} sm={7}>
          <Card className="height100">
            <Card.Body>
              <Card.Title>Состояние на сегодня</Card.Title>
                <Alert variant="warning">
                  <Alert.Heading>Гололед!!!</Alert.Heading>
                  <p>
                    Change this and that and try again. Duis mollis, est
                    non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Cras mattis consectetur
                    purus sit amet fermentum.
                  </p>
                </Alert>
                <Alert variant="danger">
                  <Alert.Heading>Авария на Московском шоссе</Alert.Heading>
                  <p>
                    Change this and that and try again. Duis mollis, est
                    non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Cras mattis consectetur
                    purus sit amet fermentum.
                  </p>
                </Alert>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={5} sm={5}>
          <Card className="min-height100">
            <Card.Body>
              <Card.Title>Запланированные мероприятия</Card.Title>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Card>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Container className="margin-top1">
          <Card className="yandex-map__container">
            <Card.Body className="yandex-map__body">
              <Card.Title>Чрезвычайные ситуации на карте</Card.Title>
              <YMaps>
                <Map
                  defaultState={{
                    center: [55.75, 37.57],
                    zoom: 9,
                    behaviors: [
                      "drag",
                      "dblClickZoom",
                      "rightMouseButtonMagnifier",
                      "multiTouch",
                    ],
                  }}
                  width
                  height="400px"
                >
                  <ZoomControl options={{ float: "right" }} />
                </Map>
              </YMaps>
            </Card.Body>
          </Card>
        </Container>
      </Row>
    </Container>
  );
}

export default Main;
