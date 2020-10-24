import React, { useState, useRef } from 'react';
import { Button, Form, Col, Row, Popover, OverlayTrigger} from "react-bootstrap";
import './style.scss'

function BeerPopover (){
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Realizar depósito</Popover.Title>
          <Popover.Content>
                <Form>
                <Form.Group as={Row} controlId="formPlaintextPassword">
               <Form.Label column sm="3">
                  Valor
                </Form.Label>
                <Col sm="6">
                <Form.Control type="number" placeholder="B$" />
                </Col>
                </Form.Group>
                  <Button className='regular-outline-button' variant="outline-danger">Cancelar</Button>
                  <Button className='regular-button popover-button-margin' variant="warning">Depositar</Button>
                </Form>
          </Popover.Content>
        </Popover>
      );
      
    return(      
        <>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button ref={target} onClick={() => setShow(!show)} variant="link">Depósito</Button>
        </OverlayTrigger>
    </>
    )
    
}


export default BeerPopover;