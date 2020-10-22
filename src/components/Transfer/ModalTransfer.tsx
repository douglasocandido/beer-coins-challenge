import React, { CSSProperties } from 'react'
import { Button, Form, Image, Modal, Col, FormGroup } from "react-bootstrap"
import ModalFooter from '../ModalFooter'
import transfer from "../../assets/images/transfer.svg"
import './style.css'

interface TransferProps {
    handleShow: () => void,
    handleClose: () => void,
    show: boolean
  }
    
  
export default function ModalTransfer({ handleShow, handleClose, show }: TransferProps) {
  

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


const TransferImage: CSSProperties = {
  width: '200px'
}

const transferTitle: CSSProperties = {
 textAlign: 'center', 
  margin: '20px',
  fontSize: '26px'
}

const transferForm:  CSSProperties = {
  padding: '15px'

}

const transferHeader: CSSProperties = {
  marginLeft: '15px',
  border: '0px'

}

   return (
    <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header style={transferHeader}>
          <Modal.Title style={transferTitle}>Realizar Transferência</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <FormGroup>
          <Form.Row style={transferForm}>
            <Col xs={7} style={{ justifyContent: 'space-between', padding: '15px'}}>
            <Form.Label style={{fontSize: '15px'}}>Destinatário</Form.Label>
            <Form.Control size="sm" type="email" placeholder="email@dominio.com" />
            </Col>
          <Col xs={7} style={{ justifyContent: 'space-between', padding: '15px'}}>
            <Form.Label style={{fontSize: '15px'}}>Valor</Form.Label>
            <Form.Control size="sm" type="text" placeholder="R$" />
            </Col>
          <Col xs={5}>
                <Image style={ TransferImage } src={transfer} />
          </Col>
          </Form.Row>
          </FormGroup>
        </Modal.Body>
            
        <Modal.Footer style={{ justifyContent: 'space-between', padding: '0px'}}>
          <Button style={outLineButtonStyle} variant="link" onClick={handleClose}>Cancelar</Button>
          <Button style={buttonStyle} variant="warning">Transferir</Button>
        <ModalFooter />
        </Modal.Footer>
      </Modal>
    </>
  );
}
