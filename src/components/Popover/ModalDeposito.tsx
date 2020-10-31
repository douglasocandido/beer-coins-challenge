import React, { useState, useRef } from 'react'
import { Button, Form, Row, Modal, Col, FormGroup } from "react-bootstrap"
import { toast } from 'react-toastify';
import ModalFooter from '../ModalFooter/ModalFooter'
import './style.scss'
import { apiService } from '../../services';

interface ModalTransferProps {
    handleClose: () => void
    show: boolean,
    hashDaConta: string,
    nomeDestinatario: string,
    onCompleted: () => void
}

function ModalDeposito({ handleClose, show, hashDaConta, nomeDestinatario, onCompleted }: ModalTransferProps) {
    const [validated, setValidated] = useState(false);
    const valorRef = useRef<HTMLInputElement | null>(null);


    const handleDeposito = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            deposita();
        }
        setValidated(true);
    };

    const deposita = () => {
        const depositoData = {
            hashDaConta,
            valor: valorRef?.current?.value!
        }
        apiService.deposito(depositoData).then(response => {
            toast.success('Depósito realizado com sucesso!');
            onCompleted();
        }).catch(error => { console.error('deposito', error) });
    }


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="transferHeader">
                    <Modal.Title className="transferTitle">Realizar depósito</Modal.Title>
                </Modal.Header>
                <Form noValidate validated={validated} onSubmit={handleDeposito}>
                    <Modal.Body style={{ justifyContent: 'space-between' }}>
                        <h5>Confirma o destinatário do depósito?</h5>
                        <Row >
                            <Col style={{ justifyContent: 'space-between' }}>
                                <Form.Label>{`Nome: ${nomeDestinatario} | hash: `}
                                    <Form.Label style={{ color: 'gray', fontSize: '15px' }}>{hashDaConta}</Form.Label>
                                </Form.Label>
                            </Col>
                        </Row>
                        <FormGroup className="form-group-transfer">
                            <Form.Row>
                                <Form.Label style={{ fontSize: '15px' }}>Valor</Form.Label>
                                <Form.Control required type="text" placeholder="B$" ref={valorRef} />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, preencha o valor do depósito
                                </Form.Control.Feedback>
                            </Form.Row>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer style={{ justifyContent: 'space-between', padding: '0px' }}>
                        <Button className="outline-button-cancel" variant="link" onClick={handleClose}>Cancelar</Button>
                        <Button className="regular-button modal-transfer-button" variant="warning" onClick={handleDeposito}>Depositar</Button>
                        <ModalFooter />
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default ModalDeposito;