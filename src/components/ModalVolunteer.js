import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toggleVolModal } from "../redux/toolkitSlice";
import { useDispatch } from "react-redux";

function ModalVolunteer({ show }) {
  const dispatch = useDispatch();
  const toggleOpenModal = () => {
    dispatch(toggleVolModal(show));
  };
  return (
    <Modal show={show} onHide={toggleOpenModal}>
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
        <Button variant="primary" onClick={toggleOpenModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalVolunteer;
