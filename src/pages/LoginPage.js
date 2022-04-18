import React, { useState } from "react";
import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setAdmin } from "../redux/toolkitSlice";
import { useLocation, Navigate } from "react-router-dom";
const arr = [1, 2, 3, 4, 5, 6, 7];

function LoginPage() {
  const location = useLocation();
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { adminLogin, adminPass, isAdmin } = useSelector(({ app }) => app);

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    if (!loginInput && !passwordInput) {
      return;
    } else {
      if (loginInput === adminLogin && passwordInput === adminPass) {
        dispatch(setAdmin(isAdmin));
        return <Navigate to="/admin" from={location.pathname}/>
      }
    }
  };
  return (
    <Container fluid="sm">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>login</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter login"
            value={loginInput}
            onChange={(e) => setLoginInput(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </Form.Group>
        <Button onClick={submit} variant="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
