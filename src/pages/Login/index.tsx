import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import videoSample from "../../assets/videos/tap-beer.mp4";
import { Button, Form, Spinner } from "react-bootstrap"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./style.scss"
import Register from "../Register"

import { apiService } from '../../App';
import { useAppDispatch } from '../../AppContext';

export default function Login() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [validated, setValidated] = useState(false);

  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const history = useHistory();
  const [dispatch] = useAppDispatch();
  const notify = (type: string) => {
    let message;
    switch (type) {
      case 'loading': message = 'Aguarde...'; toast.dark(message); break;
      case 'success': message = 'Login realizado com sucesso!'; toast.success(message); break
      case 'failed': message = 'Oops... credenciais incorretas'; toast.error(message); break
      case 'default': message = 'Algo está errado'; toast.info(message)
    }
  }

  const checkValidation = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;

    setValidated(true);
    if (form.checkValidity()) {
      handleLogin()
      setIsLoading(true)
    }


  }

  function handleLogin() {
    apiService.login(emailRef?.current?.value!, passwordRef?.current?.value!)
      .then((user) => {
        dispatch({
          type: 'SET_USER',
          user
        })
        notify('success');
        history.push('/')
      })
      .catch(() => {
        notify('failed');
        setIsLoading(false)

      })
  }


  const handleCloseModal = () => setModalVisible(false);
  const handleOpenModal = () => setModalVisible(true);

  return (
    <>
      <video muted autoPlay loop id="Opening beer video" className="welcome-video">
        <source src={videoSample} type="video/mp4" />
      </video>

      <div className="login-form">
        <Form noValidate validated={validated} onSubmit={checkValidation}>
          <h2 className="text-left">
            Faça seu login:
          </h2>
          <Form.Group className="text-left" controlId="validationCustom01">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" required placeholder="Digite seu e-mail" ref={emailRef} />
            <Form.Control.Feedback type="invalid">
              Por favor, digite um e-mail válido
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-left" controlId="validationCustom02">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" required placeholder="Digite sua senha" ref={passwordRef} />
            <Form.Control.Feedback type="invalid">
              Por favor, digite sua senha
            </Form.Control.Feedback>
          </Form.Group>
          <div className="login-action-wrapper">
            <Button className="regular-button login-btn" type="submit" variant="warning">{isLoading ? <Spinner animation="border" /> : 'Entrar'}</Button>
          </div>
        </Form>
      </div>
      <Register handleClose={handleCloseModal} handleShow={handleOpenModal} show={isModalVisible} />
      <ToastContainer />

    </>
  )
}