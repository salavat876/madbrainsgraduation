import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../consts";
import { useDispatch } from "react-redux";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { toggleUserModal } from "../redux/toolkitSlice";

function ModalUser(props) {
  const { show } = props;

  const [defaultCor, setDefaultCoor] = useState([54.314192, 48.403132]);
  const [userInput, setUserInput] = useState("");

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

  const toggleUserOpenModal = () => {
    dispatch(toggleUserModal(show));
  };
  const dispatch = useDispatch();
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  const handleUserSearch = (e) => {
    e.preventDefault();
    getAddress();
    setUserInput(" ");
  };

  return (
    <Modal show={show} onHide={toggleUserOpenModal}>
      <Modal.Header closeButton>
        <Modal.Title>Подпишитесь на рассылку</Modal.Title>
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Ваш адрес</Form.Label>
            <div className="registration-input">
              <Form.Control
                onChange={handleUserInput}
                type="text"
                placeholder="Введите ваш адрес"
                style={{ marginRight: 5 }}
              />
              <Button variant="primary" onClick={handleUserSearch}>
                Найти
              </Button>
            </div>
          </Form.Group>
          <YMaps>
            <Map
              width={"100%"}
              state={{
                center: defaultCor,
                zoom: 15,
              }}
            >
              <Placemark geometry={defaultCor} />
            </Map>
          </YMaps>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="flex1" variant="primary" type="submit">
          Подписаться на рассылку
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUser;
