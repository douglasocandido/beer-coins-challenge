import React, { FormEvent, useState, useRef } from 'react';
import { Button, Form, Modal } from "react-bootstrap"
import ModalFooter from "../../components/ModalFooter"

interface RegisterProps {
  handleShow: () => void,
  handleClose: () => void,
  show: boolean
}

export default function Register({ handleShow, handleClose, show }: RegisterProps) {

  const userNameRef = useRef<HTMLInputElement | null>(null)
  const userPasswordRef = useRef<HTMLInputElement | null>(null)
  const userCNPJRef = useRef<HTMLInputElement | null>(null)
  const userEmailRef = useRef<HTMLInputElement | null>(null)


  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
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
        <Modal.Body>

          <Form.Group controlId="form-subscribe">
            <Form.Label>Nome completo</Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome" ref={userNameRef} />
            <Form.Label>Endereço de e-mail</Form.Label>
            <Form.Control type="email" placeholder="Digite seu e-mail" ref={userEmailRef} />
            <Form.Label>CNPJ</Form.Label>
            <Form.Control type="text" placeholder="22.724.645/0001-00" ref={userCNPJRef} />
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite uma senha" ref={userPasswordRef} />
          </Form.Group>

        </Modal.Body>
        <Modal.Footer style={{ justifyContent: 'space-between' }}>
          <Button variant="outline-warning" className="regular-outline-button" onClick={handleClose}>Cancelar</Button>
          <Button className="regular-button" variant="warning" onClick={handleRegister}>Cadastrar</Button>
          <ModalFooter />
        </Modal.Footer>
      </Modal>
    </>
  );
}