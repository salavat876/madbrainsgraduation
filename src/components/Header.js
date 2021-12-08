import React, { useState } from "react"
import {
  Navbar,
  Container,
  Nav,
  Button,
  Modal,
  Form,
} from "react-bootstrap"
import { Link } from "react-router-dom"

function Header() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <header>
      <Navbar className="appBar" expand="lg">
        <Container fluid="sm">
          <Navbar.Brand>
            <Link to="/">Главная</Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link>
                  <Link to="news">События</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="volunteer">Волонтерство</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Button variant="primary" onClick={handleShow}>
            Подписаться на рассылку
          </Button>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Подпишитесь на рассылку</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ваше имя</Form.Label>
              <Form.Control type="text" placeholder="ФИО" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Ваш адрес</Form.Label>
              <Form.Control type="text" placeholder="Введите ваш адрес" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  )
}

export default Header
