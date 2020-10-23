import React from 'react';
import { Button, Form, Modal } from "react-bootstrap"
import ModalFooter from "../../components/ModalFooter"

interface RegisterProps {
  handleShow: () => void,
  handleClose: () => void,
  show: boolean
}

export default function Register({ handleShow, handleClose, show }: RegisterProps) {

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
          <Button variant="outline-warning" className="regular-outline-button" onClick={handleClose}>Cancelar</Button>
          <Button className="regular-button" variant="warning">Cadastrar</Button>
          <ModalFooter />
        </Modal.Footer>
      </Modal>
    </>
  );
}