import React, { CSSProperties } from 'react'
import { Button, Form, Image, Col, Row, Modal} from "react-bootstrap"
import ModalFooter from '../ModalFooter'
import "./style.css"
import transfer from ".../assets/images/transfer.svg"

const buttonStyle: CSSProperties = {
  color: '#fff', 
  fontWeight: 'bold', 
  backgroundColor: '#FF8832', 
  borderColor: '#FF8832',
  paddingTop: '10px',
  paddingLeft: '20px', 
  paddingBottom: '10px',
  paddingRight: '20px', 
  marginLeft: '50px'
}

const outLineButtonStyle: CSSProperties =  {
  color: '#dc3545',
  backgroundColor: 'transparent',
}

const textAlignRight: CSSProperties = {
  textAlign: 'right'
}

const TransferImage: CSSProperties = {
  width: '300px'
}

const transferTitle: CSSProperties = {
  textAlign: 'center', 
  marginBottom: '20px',
  marginTop: '20px',
  fontSize: '28px'
}


const ModalTransfer = () => {
  return (
    <>
      <div className="transfer-form"   >
      < Row style={{ padding: '0rem'}}>
        <Col xs={6}>
          <Row className="justify-content-center" style={{ marginBottom: '20px' }}>
          <Form>
          <h2 style= {transferTitle}>
            Realizar Transferência
          </h2>
          <Form.Group className="text-left" controlId="formBasicEmail">
            <Form.Label style={{fontSize: '15px'}}>Destinatário</Form.Label>
            <Form.Control type="email" placeholder="email@dominio.com" />
          </Form.Group>
          <Form.Group className="text-left" controlId="formBasicValue">
            <Form.Label style={{fontSize: '15px'}}>Valor</Form.Label>
            <Form.Control type="number" placeholder="R$" />
          </Form.Group>
          <Button style={ outLineButtonStyle } variant="outline-light">Cancelar</Button>
          <Button style={ buttonStyle } variant="warning">Transferir</Button>
          </Form>
          </Row>
        </Col>
          <Col style={ textAlignRight }>
            <Image style={ TransferImage } src={transfer} />
        </Col>
        
        <ModalFooter />
        </Row>
      </div>
    </>
  )
}

export default ModalTransfer; 