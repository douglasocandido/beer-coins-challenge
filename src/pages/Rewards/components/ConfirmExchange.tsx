import React from 'react';
import { Button, Form, Modal } from "react-bootstrap"
import { ModalFooter } from "../../../components/"
import "./style.scss";

interface RegisterProps {
  handleShow: () => void,
  handleClose: () => void,
  show: boolean,
  productPrice: number,
  productTitle: string
}

export default function ConfirmExchange({ handleShow, handleClose, show, productPrice, productTitle }: RegisterProps) {

  const handleCancel = () => {
    handleClose()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação de troca</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            {`Você confirma a troca de ${productPrice} pontos por uma ${productTitle}?`}
          </Modal.Body>
          <div className="exchange-modal-footer">
            <Button className="outline-button-cancel" variant="link" onClick={handleCancel}>Cancelar</Button>
            <Button className="regular-button" variant="warning" type="submit">Confirmar</Button>
          </div>
          <ModalFooter />
        </Form>
      </Modal>
    </>
  );
}