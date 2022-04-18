import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../consts";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserModal } from "../redux/toolkitSlice";
import ModalUser from "./ModalWindow";
import { YMaps, Map, Placemark } from "react-yandex-maps";

function Header() {
  const [defaultCor, setDefaultCoor] = useState([54.314192, 48.403132]);
  const [userInput, setUserInput] = useState("");
  const { openUserModal } = useSelector(({ app }) => app);
  const dispatch = useDispatch();

  const toggleUserOpenModal = () => {
    dispatch(toggleUserModal(openUserModal));
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  const handleUserSearch = (e) => {
    e.preventDefault();
    getAddress();
    console.log(userInput);
    setUserInput(" ");
  };
  async function getAddress() {
    await axios
      .get(
        `https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${userInput}`
      )
      .then((res) => {
        console.log(res);
        if (
          res.data.response.GeoObjectCollection.featureMember.length === 0
        ) {
          console.log("-");
        } else {
          let response =
            res.data.response.GeoObjectCollection.featureMember[0]
              .GeoObject.Point.pos;
          let stringCoords = response.split(" ");
          let coords = [+stringCoords[1], +stringCoords[0]];
          setDefaultCoor(coords);
          console.log("+");
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <header>
      <Navbar className="appBar" expand="lg">
        <Container fluid="sm">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="navigation-item" to="/">
                Главная
              </Link>
              <Link className="navigation-item" to="news">
                События
              </Link>
              <Link className="navigation-item" to="volunteer">
                Волонтерство
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Button onClick={toggleUserOpenModal}>
            Подписаться на рассылку
          </Button>
          <ModalUser show={openUserModal}></ModalUser>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
