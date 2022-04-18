import React from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
const arr = [1, 2, 3, 4, 5, 6, 7];

function AdminPage() {
  return (
    <Container fluid="sm">
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Вы находитесь в панели администратора Информационной системы
          оповещения. Здесь Вы можете управлять всем, чем вам захочется.
          Некоторые фичи находятся на стадии разработки, поэтому попрошу
          отнестись с понимаем). Спасибо)))
        </p>
        <hr />
      </Alert>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Название</Form.Label>
          <Form.Control
            type="text"
            placeholder="Название события пиши тут"
          />
          <Form.Text className="text-muted">Название события</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Регион события</Form.Label>
          <Form.Control type="text" placeholder="адрес или координаты" />
          <Form.Text className="text-muted">регион события</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Описание события</Form.Label>
          <Form.Control type="text" placeholder="описание события пиши тут" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AdminPage;
