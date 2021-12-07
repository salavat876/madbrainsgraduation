import React from "react"
import { Navbar, Container, Nav, Button } from "react-bootstrap"

function Header() {
  return (
    <header>
      <Navbar className="appBar" expand="lg">
        <Container fluid="sm">
          <Navbar.Brand href="#home">Главная</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">События</Nav.Link>
              <Nav.Link href="#link">Волонтерство</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="primary">Подписаться на рассылку</Button>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
