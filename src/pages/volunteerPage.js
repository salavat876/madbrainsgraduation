import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
function Volunteer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid="lg">
      <h1 className="volunteer__title">Стать волонтером</h1>
      <p className="volunteer__sub-title">
        Станьте волонтером, чтобы помогать другим, находить новых друзей,
        путешествовать, участвовать в масштабных событиях, получать
        уникальный опыт, а также пользоваться привилегиями за волонтерскую
        деятельность
      </p>
      <Container fluid="sm">
        <Row>
          <Col>
            <Card className="volunteer-container">
              <Card.Img
                className="volunteer_img"
                variant="top"
                src="https://cdn.dislife.ru/asset/next/img/volonter/how/how-1.svg"
              />
              <Card.Body>
                <Card.Title>1. Выбери заявку</Card.Title>
                <Card.Text>
                  Открой список заявок и выбери подходящую. Ты можешь
                  просмотреть заявки на карте, чтобы найти ближайшую, или
                  же отсортировать по категориям помощи. Узнай, возможно,
                  помощь требуется кому-то недалеко от твоего дома, места
                  работы или учебы!
                </Card.Text>
                {/* линия для соединения блоков, мб уберу
                   <div>
                        <img src="https://cdn.dislife.ru/asset/next/img/volonter/curve-line-1.svg"/>
                    </div>*/}
              </Card.Body>
            </Card>
            <Card className="volunteer-container">
              <Card.Img
                className="volunteer_img"
                variant="top"
                src="https://cdn.dislife.ru/asset/next/img/volonter/how/how-2.svg"
              />
              <Card.Body>
                <Card.Title>2. Дождись подтверждения</Card.Title>
                <Card.Text>
                  Открой список заявок и выбери подходящую. Ты можешь
                  просмотреть заявки на карте, чтобы найти ближайшую, или
                  же отсортировать по категориям помощи. Узнай, возможно,
                  помощь требуется кому-то недалеко от твоего дома, места
                  работы или учебы!
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="volunteer-container">
              <Card.Img
                className="volunteer_img"
                variant="top"
                src="https://cdn.dislife.ru/asset/next/img/volonter/how/how-3.svg"
              />
              <Card.Body>
                <Card.Title>
                  3. Свяжись с человеком или организацией
                </Card.Title>
                <Card.Text>
                  Теперь ты видишь телефон заявителя. Свяжись с ним, чтобы
                  уточнить детали и договориться о помощи! Все принятые
                  тобой заявки и их статус отображаются в личном кабинете.
                </Card.Text>
              </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Стать волонтером</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ваше имя</Form.Label>
                    <Form.Control type="text" placeholder="ФИО" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Ваш номер телефона</Form.Label>
                    <Form.Control
                      type="tel"
                      pattern="7[0-9]{3}-[0-9]{3}"
                      placeholder="телефон"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Напишите, чем Вы занимаетесь</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      style={{ resize: "none" }}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            <div className="volunteer_contaniner">
              <Button className="volunteer__button" onClick={handleShow}>
                Стать волонтером
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Volunteer;
