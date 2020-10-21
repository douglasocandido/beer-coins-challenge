import React, { FormEvent, useState } from 'react';
import jwt_decode from "jwt-decode";

import videoSample from "../../assets/videos/tap-beer.mp4";
import { Button, Form } from "react-bootstrap"
import "./styles.css"
import Register from "../Register"

import { apiService } from '../../App';
import { useAppDispatch } from '../../AppContext';

export default function Login() {

  const [dispatch] = useAppDispatch();

  function handleLogin(event: FormEvent) {
    dispatch({
      type: 'REQUEST_LOGIN'
    })
    event.preventDefault();
    apiService.login('email', 'password')
    .then(({token}) => {
      const {name, role} = jwt_decode(token);
      dispatch({
        type: 'SET_TOKEN',
        token: {name, role}
      })
      dispatch({
        type: 'REQUEST_LOGIN_SUCCESS'
      })
    })
    .catch((error) => {
      dispatch({
        type: 'REQUEST_LOGIN_FAIL'
      })
    })
  }
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCloseModal = () => setModalVisible(false);
  const handleOpenModal = () => setModalVisible(true);

  return (
    <>
      <video muted autoPlay loop id="Opening beer video" className="welcome-video">
        <source src={videoSample} type="video/mp4" />
      </video>

      <div className="login-form">
        <Form>
          <h2 className="text-left">
            Faça seu login:
          </h2>
          <Form.Group className="text-left" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Digite seu e-mail" />
          </Form.Group>
          <Form.Group className="text-left" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite sua senha" />
          </Form.Group>
          <div className="login-action-wrapper">
            <Button variant="primary" type="submit" onClick={handleLogin}>
              Entrar
            </Button>
            <Form.Text className="text-muted login-cadastro">
              Ainda não tem uma conta?
              <p style={{ fontWeight: 700, cursor: 'pointer' }} onClick={handleOpenModal}>
                Cadastre-se
              </p>
            </Form.Text>
          </div>
        </Form>
      </div>
      <Register handleClose={handleCloseModal} handleShow={handleOpenModal} show={isModalVisible} />
    </>
  )
}