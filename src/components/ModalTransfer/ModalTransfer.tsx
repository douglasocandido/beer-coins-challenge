import React, { useState, useRef } from 'react'
import { Button, Form, Image, Modal, Col, FormGroup } from "react-bootstrap"
import { toast } from 'react-toastify';
import ModalFooter from '../ModalFooter'
import { ITransferenciaForm } from '../../interfaces/Transferencia'
import transfer from "../../assets/images/transfer.svg"
import './style.scss'
import { apiService } from '../../App';

interface ModalTransferProps {
    handleClose: () => void
    show: boolean
}

function ModalTransfer({ handleClose, show }: ModalTransferProps) {
    const [validated, setValidated] = useState(false);
    const valorRef = useRef<HTMLInputElement | null>(null);
    const contaDestinoRef = useRef<HTMLInputElement | null>(null);

    const checkValidation = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;

        setValidated(true);
        if (form.checkValidity()) {
            handleTransfer()
        }
    }

    const handleTransfer = () => {
        const transferData = {
            contaDestino: contaDestinoRef?.current?.value!,
            valor: valorRef?.current?.value!
        }
        apiService.transferencia(transferData).then(response => {
            toast.success('Transferência realizada com sucesso!');
            handleClose();
        }).catch(error => {
            console.error('transferencia', error)
            toast.error('Algo está errado!');
        });
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="transferHeader">
                    <Modal.Title className="transferTitle">Realizar Transferência</Modal.Title>
                </Modal.Header>
                <Form noValidate validated={validated} onSubmit={checkValidation}>
                    <Modal.Body >
                        <FormGroup className="form-group-transfer">
                            <Form.Row className="transferForm">
                                <Col style={{ justifyContent: 'space-between', padding: '15px' }}>
                                    <Form.Label style={{ fontSize: '15px' }}>Destinatário</Form.Label>
                                    <Form.Control required type="text" placeholder="Hash do destinatário" ref={contaDestinoRef} />
                                    <Form.Control.Feedback type="invalid">
                                        Campo obrigatório
                  </Form.Control.Feedback>
                                </Col>
                                <Col style={{ justifyContent: 'space-between', padding: '15px' }}>
                                    <Form.Label style={{ fontSize: '15px' }}>Valor</Form.Label>
                                    <Form.Control required type="text" placeholder="B$" ref={valorRef} />
                                    <Form.Control.Feedback type="invalid">
                                        Campo obrigatório
                </Form.Control.Feedback>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col >
                                    <Image className="TransferImage" src={transfer} />
                                </Col>
                            </Form.Row>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer style={{ justifyContent: 'space-between', padding: '0px' }}>
                        <Button className="regular-outline-button modal-transfer-button" variant="link" onClick={handleClose}>Cancelar</Button>
                        <Button className="regular-button modal-transfer-button" type="submit" variant="warning">Transferir</Button>
                        <ModalFooter />
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default ModalTransfer;