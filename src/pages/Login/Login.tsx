import React, { FormEvent, useState } from 'react';

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
  const [emailInfo, setEmailInfo] = useState('')
  const [passwordInfo, setPasswordInfo] = useState('')

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
    dispatch({
      type: 'REQUEST_LOGIN'
    })
    event.preventDefault();
    apiService.login(emailInfo, passwordInfo)
      .then((user) => {
        dispatch({
          type: 'SET_TOKEN',
          user
        })
        notify('success');
      })
      .catch((error) => {
        dispatch({
          type: 'REQUEST_LOGIN_FAIL'
        })
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
            <Form.Control type="email" placeholder="Digite seu e-mail" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailInfo(e.target.value)} />
          </Form.Group>
          <Form.Group className="text-left" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite sua senha" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordInfo(e.target.value)} />
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
      <ToastContainer />

    </>
  )
}