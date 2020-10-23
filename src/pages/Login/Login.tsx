import React, { CSSProperties, useState, useRef } from 'react';

import videoSample from "../../assets/videos/tap-beer.mp4";
import { Button, Form } from "react-bootstrap"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styles.css"
import Register from "../Register"

import { apiService } from '../../App';
import { useAppDispatch } from '../../AppContext';

export default function Login() {
  const [isModalVisible, setModalVisible] = useState(false);
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const [dispatch] = useAppDispatch();
  const notify = (type: string) => {
    let message;
    switch (type) {
      case 'loading': message = 'Aguarde...'; toast.dark(message); break;
      case 'success': message = 'Login realizado com sucesso!'; toast.success(message); break
      case 'failed': message = 'Oops... credenciais incorretas'; toast.warn(message); break
      case 'default': message = 'Algo está errado'; toast.info(message)
    }
  }
  const [validated, setValidated] = useState(false);

  function handleLogin(event: any) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    notify('loading');
    dispatch({
      type: 'REQUEST_LOGIN'
    })
    event.preventDefault();
    apiService.login(emailRef?.current?.value!, passwordRef?.current?.value!)
      .then((user) => {
        dispatch({
          type: 'SET_USER',
          user
        })
        notify('success');
      })
      .catch(() => {
        notify('failed');
      })
  }


  const handleCloseModal = () => setModalVisible(false);
  const handleOpenModal = () => setModalVisible(true);

  const buttonStyle: CSSProperties = {
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#FF8832',
    borderColor: '#FF8832',
    width: '50%',
    height: '50px'
  }

  return (
    <>
      <video muted autoPlay loop id="Opening beer video" className="welcome-video">
        <source src={videoSample} type="video/mp4" />
      </video>

      <div className="login-form">
        <Form noValidate validated={validated} onSubmit={handleLogin}>
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
            <Button style={buttonStyle} type="submit" variant="warning">Entrar</Button>

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
      <ToastContainer />

    </>
  )
}