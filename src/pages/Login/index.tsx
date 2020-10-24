import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import videoSample from "../../assets/videos/tap-beer.mp4";
import { Button, Form } from "react-bootstrap"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./style.scss"

import { apiService } from '../../App';
import { useAppDispatch } from '../../AppContext';

export default function Login() {
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
      case 'failed': message = 'Oops... credenciais incorretas'; toast.warn(message); break
      case 'default': message = 'Algo está errado'; toast.info(message)
    }
  }

  function handleLogin(event: any) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    validated &&
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
            <Button className="regular-button login-btn" type="submit" variant="warning">Entrar</Button>
          </div>
        </Form>
      </div>
    </>
  )
}