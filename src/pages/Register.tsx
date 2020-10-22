import React, { FormEvent, useState, CSSProperties } from 'react';
import { Button, Form, Modal } from "react-bootstrap"
import ModalFooter from "../components/ModalFooter"


interface RegisterProps {
  handleShow: () => void,
  handleClose: () => void,
  show: boolean
}



export default function Register({ handleShow, handleClose, show }: RegisterProps) {

  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userCNPJ, setUserCNPJ] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
    const createAccountObject = {
      cnpj: userCNPJ,
      email: userEmail,
      nome: userName,
      senha: userPassword
    }
    console.log(createAccountObject)
  }

  const handleCancel = () => {
    handleClose()
    setUserCNPJ('')
    setUserEmail('')
    setUserName('')
    setUserPassword('')
  }
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
            <Form.Control type="text" placeholder="Digite seu nome" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} />
            <Form.Label>Endereço de e-mail</Form.Label>
            <Form.Control type="email" placeholder="Digite seu e-mail" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value)} />
            <Form.Label>CNPJ</Form.Label>
            <Form.Control type="text" placeholder="22.724.645/0001-00" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserCNPJ(e.target.value)} />
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite uma senha" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value)} />
          </Form.Group>

        </Modal.Body>
        <Modal.Footer style={{ justifyContent: 'space-between' }}>
          <Button style={outLineButtonStyle} variant="outline-warning" onClick={handleCancel}>Cancelar</Button>
          <Button style={buttonStyle} variant="warning" onClick={handleRegister}>Cadastrar</Button>
          <ModalFooter />
        </Modal.Footer>
      </Modal>
    </>
  );
}