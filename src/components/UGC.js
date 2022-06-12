import React from "react";
import { Form, Container, Button } from "react-bootstrap";

const UGC = () => {

    return (
        <Container fluid="sm">
             <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Ваше имя?</Form.Label>
                    <Form.Control type="text" placeholder="Ваше имя" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Что случилось?</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Расскажите о проблеме или происшествии" />
                </Form.Group>
            </Form>
            <Button>
                Отправить
          </Button>
        </Container>
       
    )
}

export default UGC;