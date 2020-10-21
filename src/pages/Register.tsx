import React, { CSSProperties } from 'react';
import { Button, Form, Modal } from "react-bootstrap"
import ModalFooter from "../components/ModalFooter"


interface RegisterProps {
  handleShow: () => void,
  handleClose: () => void,
  show: boolean
}



export default function Register({ handleShow, handleClose, show }: RegisterProps) {

  const outLineButtonStyle: CSSProperties = {
    color: '#FF8832',
    borderColor: '#FF8832',
    backgroundColor: 'transparent'
  }

  const buttonStyle: CSSProperties = {
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#FF8832',
    borderColor: '#FF8832'
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
            <Form.Control type="text" placeholder="Digite seu nome" />
            <Form.Label>Endereço de e-mail</Form.Label>
            <Form.Control type="email" placeholder="Digite seu e-mail" />
            <Form.Label>CNPJ</Form.Label>
            <Form.Control type="text" placeholder="22.724.645/0001-00" />
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite uma senha" />
          </Form.Group>

        </Modal.Body>
        <Modal.Footer style={{ justifyContent: 'space-between' }}>
          <Button style={outLineButtonStyle} variant="outline-warning" onClick={handleClose}>Cancelar</Button>
          <Button style={buttonStyle} variant="warning">Cadastrar</Button>
          <ModalFooter />
        </Modal.Footer>
      </Modal>
    </>
  );
}