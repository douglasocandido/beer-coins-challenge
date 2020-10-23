import React, { FormEvent, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import videoSample from "../../assets/videos/tap-beer.mp4";
import { Button, Form } from "react-bootstrap"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./style.scss"
import Register from "../Register"

import { apiService } from '../../App';
import { useAppDispatch } from '../../AppContext';

export default function Login() {
  const [isModalVisible, setModalVisible] = useState(false);
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const history = useHistory();
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

  function handleLogin(event: FormEvent) {
    notify('loading');
    event.preventDefault();
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
        <Form>
          <h2 className="text-left">
            Faça seu login:
          </h2>
          <Form.Group className="text-left" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Digite seu e-mail" ref={emailRef} />
          </Form.Group>
          <Form.Group className="text-left" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite sua senha" ref={passwordRef} />
          </Form.Group>
          <div className="login-action-wrapper">
            <Button variant="primary" type="submit" onClick={handleLogin}>
              Entrar
            </Button>
            <Form.Text className="text-muted login-cadastro">
              Ainda não tem uma conta?
              <p className='register-link' onClick={handleOpenModal}>
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