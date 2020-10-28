import React, { useState, useRef } from 'react';

import videoSample from "../../assets/videos/tap-beer.mp4";
import { Button, Form, Spinner } from "react-bootstrap"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imageContent from "../../assets/images/beer-image.jpg"

import "./style.scss"

import { apiService } from '../../services';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const [validated, setValidated] = useState(false);

  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

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
      .then(() => window.location.reload())
      .catch(() => notify('failed'))
      .finally(() => setIsLoading(false))
  }

  return (
    <div className="main-wrapper-login">
      <video muted autoPlay loop id="Opening beer video" className="welcome-video">
        <source src={videoSample} type="video/mp4" />
        <img alt='Beer iamge' src={imageContent} title="Your browser does not support the <video> tag" />
      </video>

      <div className="login-form">
        <Form noValidate validated={validated} onSubmit={checkValidation}>
          <h2 className="text-left">
            BeerCoins | Entrar
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
    </div>
  )
}