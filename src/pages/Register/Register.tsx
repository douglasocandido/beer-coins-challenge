import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { Button, Form, Modal, Spinner } from "react-bootstrap"

import { ModalFooter } from "../../components/"
import { apiService } from '../../services';

import './style.scss'

interface RegisterProps {
  handleClose: () => void,
  show: boolean
}

export default function Register({ handleClose, show }: RegisterProps) {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false)

  const userNameRef = useRef<HTMLInputElement | null>(null)
  const userPasswordRef = useRef<HTMLInputElement | null>(null)
  const userCNPJRef = useRef<HTMLInputElement | null>(null)
  const userEmailRef = useRef<HTMLInputElement | null>(null)


  const handleRegister = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      criaConta();
    }
    setValidated(true);
  }

  const criaConta = () => {
    setLoading(true);
    const createAccountObject = {
      cnpj: userCNPJRef?.current?.value!,
      email: userEmailRef?.current?.value!,
      nome: userNameRef?.current?.value!,
      senha: userPasswordRef?.current?.value!
    }
    apiService.criaConta(createAccountObject)
      .then(response => {
        setLoading(false);
        handleClose();
        window.location.reload();
      }).catch(error => {
        setLoading(false);
        toast.error('Ooops algo de errado não está certo. Tente novamente mais tarde');
      });
  }

  return (
    <>
      <Modal show={show} onHide={() => { !loading && handleClose(); }}>
        <Modal.Header closeButton>
          <Modal.Title>Criar conta</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleRegister}>
          <Modal.Body>
            <Form.Group controlId="validationCustom01" >
              <Form.Label>Nome completo</Form.Label>
              <Form.Control type="text" required placeholder="Digite seu nome" ref={userNameRef} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom02" >
              <Form.Label>Endereço de e-mail</Form.Label>
              <Form.Control type="email" required placeholder="Digite seu e-mail" ref={userEmailRef} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom03" >
              <Form.Label>CNPJ</Form.Label>
              <Form.Control type="text" required placeholder="22.724.645/0001-00" ref={userCNPJRef} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom04" >
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" required placeholder="Digite uma senha" ref={userPasswordRef} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
            </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer style={{ justifyContent: 'space-between' }}>
            <Button className="outline-button-cancel" variant="link" onClick={handleClose}>Cancelar</Button>
            <Button className="regular-button cadastrar-button" variant="warning" type="submit">
              {loading ?
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                /> : 'Cadastrar'}
            </Button>
            <ModalFooter />
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}