import React, { useState, useRef } from 'react'
import { Button, Form, Image, Modal, Col, FormGroup } from "react-bootstrap"
import { toast } from 'react-toastify';
import ModalFooter from '../ModalFooter'
import { ITransferenciaForm } from '../../interfaces/Transferencia'
import transfer from "../../assets/images/transfer.svg"
import './style.scss'
import { apiService } from '../../App';

interface ModalTransferProps {
  hash: string,
  handleClose: () => void
  show: boolean
}

function ModalTransfer({ hash: hashDaConta, handleClose, show}: ModalTransferProps) {
  const [validated, setValidated] = useState(false);
  const valorRef = useRef<HTMLInputElement | null>(null);
  const contaDestinoRef = useRef<HTMLInputElement | null>(null);

  const handleTransferencia = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      transferencia();
    }
    setValidated(true);
  };

  const transferencia = () => {
    const transferData = {
      contaDestino: contaDestinoRef?.current?.value!,
      valor: valorRef?.current?.value!
    }
    apiService.transferencia(transferData).then(response => {
      toast.success('Transferência realizada com sucesso!');
      handleClose();
    }).catch(error => { console.error('transferencia', error) });
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="transferHeader">
          <Modal.Title className="transferTitle">Realizar Transferência</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form noValidate validated={validated}>
            <FormGroup>
              <Form.Row className="transferForm">
                <Col md={7} style={{ justifyContent: 'space-between', padding: '15px' }}>
                  <Form.Label style={{ fontSize: '15px' }}>Destinatário</Form.Label>
                  <Form.Control size="sm" type="email" placeholder="email@dominio.com" ref={contaDestinoRef} />
                </Col>
                <Col md={7} style={{ justifyContent: 'space-between', padding: '15px' }}>
                  <Form.Label style={{ fontSize: '15px' }}>Valor</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="B$" ref={valorRef} />
                  <Form.Control.Feedback type="invalid">
                    Campo obrigatório
                </Form.Control.Feedback>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col md={5}>
                  <Image className="TransferImage" src={transfer} />
                </Col>
              </Form.Row>
            </FormGroup>
          </Form>
        </Modal.Body>

        <Modal.Footer style={{ justifyContent: 'space-between', padding: '0px' }}>
          <Button className="regular-outline-button modal-transfer-button" variant="link" onClick={handleClose}>Cancelar</Button>
          <Button className="regular-button modal-transfer-button" variant="warning" onClick={handleTransferencia}>Transferir</Button>
          <ModalFooter />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTransfer;