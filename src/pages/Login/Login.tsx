import React from 'react';
import videoSample from "../../assets/videos/tap-beer.mp4";
import { Button, Form } from "react-bootstrap"
import "./styles.css"

export default function Login() {
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
            <Button variant="primary" type="submit">
              Entrar
            </Button>
            <Form.Text className="text-muted login-cadastro">
              Ainda não tem uma conta?
              Cadastre-se
            </Form.Text>
          </div>
        </Form>
      </div>

    </>
  )
}