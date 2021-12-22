import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Modal, ModalBody } from "react-bootstrap";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import { toggleUserModal } from "../redux/toolkitSlice";

function ModalWindow(props) {
  const { openUserModal } = props;

  const toggleUserOpenModal = () => {
    dispatch(toggleUserModal(openUserModal));
  };
  const dispatch = useDispatch();
  return (
    <Modal show={openUserModal} onHide={toggleUserOpenModal}>
      <Modal.Header closeButton>
        <Modal.Title>Подпишитесь на рассылку</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button className="flex1" variant="primary" type="submit">
          Подписаться на рассылку
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalWindow;
