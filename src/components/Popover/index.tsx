import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { Button, Form, Col, Row, Popover, OverlayTrigger} from "react-bootstrap";

import './style.scss';
import { apiService } from '../../App';

interface BeerPopoverProps {
  hash: string,
  onCompleted: () => void
}

function BeerPopover ({hash: hashDaConta, onCompleted}: BeerPopoverProps){
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const valorRef = useRef<HTMLInputElement | null>(null);

  const openPopover = () => { setShow(true); };
  const closePopover = () => { setShow(false); };

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

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Realizar depósito</Popover.Title>
      <Popover.Content>
        <Form noValidate validated={validated}>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="3">Valor</Form.Label>
            <Col sm="6">
              <Form.Control type="number" placeholder="B$" ref={valorRef} />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Button className='regular-outline-button' variant="outline-danger" onClick={closePopover}>Cancelar</Button>
          <Button className='regular-button popover-button-margin' variant="warning" onClick={handleDeposito}>Depositar</Button>
        </Form>
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover} show={show} rootClose>
      <Button onClick={openPopover} variant="link">Depósito</Button>
    </OverlayTrigger>
  );
}


export default BeerPopover;