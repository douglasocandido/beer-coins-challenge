import React, { useState, useRef } from 'react';
import { Button, Form, Modal } from "react-bootstrap"
import ModalFooter from "../../components/ModalFooter"

interface RegisterProps {
  handleShow: () => void,
  handleClose: () => void,
  show: boolean
}

export default function Register({ handleShow, handleClose, show }: RegisterProps) {
  const [validated, setValidated] = useState(false);

  const userNameRef = useRef<HTMLInputElement | null>(null)
  const userPasswordRef = useRef<HTMLInputElement | null>(null)
  const userCNPJRef = useRef<HTMLInputElement | null>(null)
  const userEmailRef = useRef<HTMLInputElement | null>(null)


  const handleRegister = (event: any) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    const createAccountObject = {
      cnpj: userCNPJRef?.current?.value!,
      email: userEmailRef?.current?.value!,
      nome: userNameRef?.current?.value!,
      senha: userPasswordRef?.current?.value!
    }
    console.log(createAccountObject)
  }

  const handleCancel = () => {
    handleClose()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastre-se</Modal.Title>
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
            <Button className="regular-outline-button" variant="outline-warning" onClick={handleCancel}>Cancelar</Button>
            <Button className="regular-button" variant="warning" type="submit">Cadastrar</Button>
            <ModalFooter />
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}