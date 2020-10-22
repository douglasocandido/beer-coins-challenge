import React, { useState, useRef } from 'react'
import { CSSProperties } from 'react'
import { Button, Form, Col, Row, Popover, OverlayTrigger} from "react-bootstrap"


const buttonStyle: CSSProperties = {
    color: '#fff', 
    fontWeight: 'bold', 
    backgroundColor: '#FF8832', 
    borderColor: '#FF8832',
    paddingTop: '7px',
    paddingLeft: '10px', 
    paddingBottom: '7px',
    paddingRight: '10px', 
    marginLeft: '20px'
  }
  
  const outLineButtonStyle: CSSProperties =  {
    color: '#dc3545',
    backgroundColor: 'transparent',
    marginLeft: '48px'
}


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
                <Form.Control type="number" placeholder="R$" />
                </Col>
                </Form.Group>
                <Button style={ outLineButtonStyle } variant="outline-danger">Cancelar</Button>
                  <Button style={ buttonStyle } variant="warning">Depositar</Button>
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